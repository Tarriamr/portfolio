import {projects, removeProject} from "./projects.js";

export function renderGrid($grid) {
  $grid.replaceChildren();
  if (projects.length === 0) {
    $grid.textContent = 'There are no projects to display.';
  } else {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      $grid.appendChild(createProjectElement(project));
    }
  }
}

function createProjectElement(project) {
  const ul = document.createElement('ul');
  ul.className = 'projectSkillsList';

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
  buttonRemove.onclick = () =>{
    removeProject(project.id);
    const $grid = document.querySelector(".projectsGrid");
    renderGrid($grid);
  };

  const divProject = document.createElement('div')
  divProject.append(divContainer, buttonRemove);
  divProject.className = 'project';
  return divProject;
}
