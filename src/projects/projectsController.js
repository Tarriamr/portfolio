import {projects} from './projects.js'

let numberOfProjectsToShow = 3;

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

export function renderProjects() {
  const $container = document.querySelector('.projectsContainer');

  removeProjects();

  if (projects.length === 0) {
    $container.textContent = 'There are no projects to display.';
  } else {
    for (let i = 0; i < numberOfProjectsToShow; i++) {
      const project = projects[i];
      $container.appendChild(createProjectElement(project));
    }
  }

  initCarousel();
}

function removeProjects() {
  const $projects = document.querySelectorAll('.projectsContainer>div');
  $projects.forEach((element) => {
    element.remove()
  });
}

export function setNumberOfProjectsToShow(value = undefined) {

  if (!!value) {
    numberOfProjectsToShow = value;
  } else if (innerWidth >= 1440) {
    numberOfProjectsToShow = 3;
  } else if (innerWidth >= 1039) {
    numberOfProjectsToShow = 2;
  } else if (innerWidth >= 768) {
    numberOfProjectsToShow = 1;
  } else {
    numberOfProjectsToShow = 3;
  }
}

export function initCarousel() {
  const $buttonsCarousel = document.querySelector('#buttonsCarousel');
  const $leftButton = document.querySelector('#buttonsCarousel button:first-child');
  const $rightButton = document.querySelector('#buttonsCarousel button:last-child');

  if ($buttonsCarousel !== null) {
    if (numberOfProjectsToShow >= projects.length) {
      $buttonsCarousel.style.display = 'none';
    } else {
      $buttonsCarousel.style.display = 'grid';
    }

    $leftButton.onclick = () => {
      const project = projects.shift();
      projects.push(project);

      renderProjects();
    };

    $rightButton.onclick = () => {
      const project = projects.pop();
      projects.unshift(project);
      renderProjects();
    };
  }
}
