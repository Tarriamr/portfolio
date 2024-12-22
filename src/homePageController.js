import {renderProjects, setNumberOfProjectsToShow} from "./projects/projectsController.js";

export const homePageController = {
  onOpen: ()  =>{
  const $container = document.querySelector('#homePage');
  const div = $container.querySelector('.projectsParent');

  const item = document.createElement('div');
  item.className='projectsContainer'

  div.append(item);
  setNumberOfProjectsToShow();
  renderProjects();
},

onExit: () => {
  const $container = document.querySelector('#homePage');
  const div = $container.querySelector('.projectsParent');
  // div.removeChild()
  // TODO remove .projectsContainer from DOM
}

}

