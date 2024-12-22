const $newProject = document.createDocumentFragment();
const $projectSkills = document.createDocumentFragment();
export const $divProjects = document.querySelector('#projects');
export var numberOfProjectsToShow = 3;

function setProjectSkills(listOfSkills) {
  listOfSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    $projectSkills.append(li);
  })
}

export function setProject(project) {
  setProjectSkills(project.skills);
  const ul = document.createElement('ul');
  ul.append($projectSkills);

  const divTitle = document.createElement('div');
  divTitle.textContent = project.title;

  const divContainer = document.createElement('div');
  divContainer.append(divTitle, ul);

  const buttonRemove = document.createElement('button');
  buttonRemove.className = 'button-grey';

  const divProject = document.createElement('div')
  divProject.append(divContainer, buttonRemove);
  divProject.className = 'project';

  $newProject.append(divProject);
  $divProjects.append($newProject);
}

export function uploadProjects(projects) {
  if (projects.length === 0) {
    $divProjects.textContent = 'There are no projects to display.';
  } else {
    projects.forEach((project) => {
      setProject(project);
    })
  }
}

export function removeProjects() {
  const $projects = document.querySelectorAll('#projects>div');
  $projects.forEach((element) => {
    element.remove()
  });
}

export function projectsNumber() {
  if (innerWidth >= 1440) {
    numberOfProjectsToShow = 3;
  } else if (innerWidth >= 1039) {
    numberOfProjectsToShow = 2;
  } else if (innerWidth >= 768) {
    numberOfProjectsToShow = 1;
  } else {
    numberOfProjectsToShow = 3;
  }
}

export function shownProjects(numberOfProjectsToShow) {
  const $projects = document.querySelectorAll('#projects>div');
  let counter = 0;
  $projects.forEach((project) => {
    if (counter < numberOfProjectsToShow) {
      project.style.display = 'grid';
    } else {
      project.style.display = 'none';
    }
    ++counter;
  })
}
