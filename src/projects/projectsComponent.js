import {moveFirstProjectToEnd, moveLastProjectToBeginning} from "./projects.js";
import {renderGrid} from "./renderGrid.js";

export function createProjectsComponent(showCarousel = false) {
  const $projectsContainer = document.createElement("div");
  $projectsContainer.className = "projectsContainer";

  const $grid = document.createElement("div");
  $grid.className = "projectsGrid";
  $projectsContainer.append($grid);

  renderGrid($grid);

  if (showCarousel) {
    const $carousel = createCarousel($grid);
    $projectsContainer.append($carousel);
  }

  return $projectsContainer;
}

function createCarousel($grid) {
  const $carousel = document.createElement("div");
  $carousel.id = "buttonsCarousel";

  const $leftButton = document.createElement("button");
  $leftButton.className = "buttonGrey";
  $leftButton.onclick = () => {
    moveFirstProjectToEnd();
    renderGrid($grid);
  };

  const $rightButton = document.createElement("button");
  $rightButton.className = "buttonGrey";
  $rightButton.onclick = () => {
    moveLastProjectToBeginning();
    renderGrid($grid);
  };

  $carousel.append($leftButton, $rightButton);

  return $carousel;
}
