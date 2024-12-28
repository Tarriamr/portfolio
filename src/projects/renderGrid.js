import {projects, removeProject} from "./projects.js";

export function renderGrid($grid, showDeleteButton) {
  $grid.replaceChildren();
  if (projects.length === 0) {
    $grid.textContent = 'There are no projects to display.';
  } else {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      $grid.appendChild(createProjectElement(project, showDeleteButton));
    }
  }
}

function createProjectElement(project, showDeleteButton) {
  const $ul = document.createElement('ul');
  $ul.className = 'project-skillsList';

  project.skills.forEach(skill => {
    const $li = document.createElement('li');
    $li.className = 'project-listElement';
    $li.innerText = skill.toString();
    $ul.append($li);
  });

  const $divTitle = document.createElement('div');
  $divTitle.className = 'project-title';
  $divTitle.textContent = project.title;

  const $divContainer = document.createElement('div');
  $divContainer.className = 'project-container';
  $divContainer.append($divTitle, $ul);

  const $divProject = document.createElement('div');
  $divProject.append($divContainer);

  if (showDeleteButton) {
    const $buttonRemove = document.createElement('button');
    $buttonRemove.className = 'buttonGrey';
    $buttonRemove.onclick = () => {
      removeProject(project.id);
      const $grid = document.querySelector(".projectsGrid");
      renderGrid($grid, showDeleteButton);
    };

    $divProject.append($buttonRemove);
  }

  $divProject.className = 'project';
  return $divProject;
}
