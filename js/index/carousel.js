export function carouselLeft(projects) {
  const project = projects.shift();
  projects.push(project);
}

export function carouselRight(projects) {
  const project = projects.pop();
  projects.unshift(project);
}
