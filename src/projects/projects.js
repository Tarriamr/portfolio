export const projects = [
  {id: generateId(), title: 'Non-governmental organization', skills: ['HTML', 'JS']},
  {id: generateId(), title: 'Communicator', skills: ['Firefox', 'Java', 'Spring', 'SQL']},
  {id: generateId(), title: 'Cross vs circle', skills: ['Java']},
  {id: generateId(), title: 'Portfolio', skills: ['HTML', 'JS', 'CSS']}
];

export function generateId() {
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
