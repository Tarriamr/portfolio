const newProject = document.createDocumentFragment();
const projectSkills = document.createDocumentFragment();
export const divProjects = document.querySelector('#projects');

function setProjectSkills(listOfSkills) {
  listOfSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    projectSkills.append(li);
  })
}

export function setProject(project) {
  setProjectSkills(project.skills);
  const ul = document.createElement('ul');
  ul.append(projectSkills);

  const divTitle = document.createElement('div');
  divTitle.textContent = project.title;

  const div = document.createElement('div')
  div.append(divTitle, ul);

  const divProject = document.createElement('div')
  divProject.append(div);
  divProject.className = 'project';

  newProject.append(divProject);
  divProjects.append(newProject);
}
