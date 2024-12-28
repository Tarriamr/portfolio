import {moveFirstProjectToEnd, moveLastProjectToBeginning, projects} from "./projects.js";
import {renderGrid} from "./renderGrid.js";

function shouldHideCarousel() {
  const innerWidth = window.innerWidth;
  const numProjects = projects.length;
  return !numProjects
    || (innerWidth >= 1440 && numProjects <= 3)
    || (innerWidth >= 1039 && numProjects <= 2)
    || (innerWidth >= 768 && numProjects <= 1);
}

export function createProjectsComponent(showCarousel = false, showDeleteButton = false) {
  const $projectsContainer = document.createElement("div");
  $projectsContainer.className = "projectsContainer";

  const $grid = document.createElement("div");
  $grid.className = "projectsGrid";
  $projectsContainer.append($grid);

  renderGrid($grid, showDeleteButton);

  if (showCarousel) {
    const $carousel = createCarousel($grid, showDeleteButton);
    $projectsContainer.append($carousel);
    resizeHandler($carousel);
  }

  return $projectsContainer;
}

function createCarousel($grid, showDeleteButton) {
  const $carousel = document.createElement("div");
  $carousel.className = "buttonsCarousel";

  const $leftButton = document.createElement("button");
  $leftButton.className = "buttonGrey";
  $leftButton.onclick = () => {
    moveFirstProjectToEnd();
    renderGrid($grid, showDeleteButton);
  };

  const $rightButton = document.createElement("button");
  $rightButton.className = "buttonGrey";
  $rightButton.onclick = () => {
    moveLastProjectToBeginning();
    renderGrid($grid, showDeleteButton);
  };

  $carousel.append($leftButton, $rightButton);

  return $carousel;
}

function resizeHandler($carousel) {
  if ($carousel) {
    const hide  = shouldHideCarousel();
    if (hide) {
      $carousel.className += ' hide';
    } else {
      $carousel.className = 'buttonsCarousel';
    }
  }
}

window.addEventListener('resize', () => {
  const $carousel = document.querySelector('.buttonsCarousel');
  resizeHandler($carousel);
})
