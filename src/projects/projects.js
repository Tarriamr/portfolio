export const projects = [
  {id: generateId(), title: 'Non-governmental organization', skills: ['HTML', 'JS']},
  {id: generateId(), title: 'Test', skills: ['Firefox', 'Java']},
  {id: generateId(), title: 'Cross vs circle', skills: ['Java']},
  {id: generateId(), title: 'Portfolio', skills: ['HTML', 'JS', 'CSS']},
  {id: generateId(), title: 'Test2', skills: ['HTML', 'JS', 'CSS','4','5','6','7','8']}
];

function generateId() {
  return crypto.randomUUID();
}

export function addProject(title, skills) {
  projects.push({id: generateId(), title, skills});
}

export function removeProject(id) {
  const indexToRemove = projects.findIndex((item) => {
    return item.id === id;
  })

  if (indexToRemove>=0) {
    projects.splice(indexToRemove, 1);
  }
}

export function moveFirstProjectToEnd() {
  const project = projects.shift();
  projects.push(project);
}

export function moveLastProjectToBeginning() {
  const project = projects.pop();
  projects.unshift(project);
}
