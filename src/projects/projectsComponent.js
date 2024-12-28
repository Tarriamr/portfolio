import {projects} from "./projects.js";

export function createProjectsComponent() {
  const $projectsContainer = document.createElement("div");
  $projectsContainer.className = "projectsContainer";

  const $grid = document.createElement("div");
  $grid.className = "projectsGrid";

  if (projects.length === 0) {
    $projectsContainer.textContent = 'There are no projects to display.';
  } else {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      $grid.appendChild(createProjectElement(project));
    }

    $projectsContainer.append($grid);
  }

  const showCarousel = true;

  if (showCarousel) {
    const $buttonsCarousel = document.createElement("div");
    $buttonsCarousel.id = "buttonsCarousel";
    const $leftButton = document.createElement("button");
    $leftButton.className = "buttonGrey";
    const $rightButton = document.createElement("button");
    $rightButton.className = "buttonGrey";
    $buttonsCarousel.append($leftButton, $rightButton);

    $projectsContainer.append($buttonsCarousel);
  }

  return $projectsContainer;
}

function createProjectElement(project) {
  const ul = document.createElement('ul');
  project.skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill.toString();
    ul.append(li);
  });

  const divTitle = document.createElement('div');
  divTitle.textContent = project.title;

  const divContainer = document.createElement('div');
  divContainer.append(divTitle, ul);

  const buttonRemove = document.createElement('button');
  buttonRemove.className = 'buttonGrey';

  const divProject = document.createElement('div')
  divProject.append(divContainer, buttonRemove);
  divProject.className = 'project';
  return divProject;
}
