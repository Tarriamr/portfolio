import {projects, resizingDependencies} from "./app.js";
import {shownProjects, uploadProjects} from "./projects.js";
import {$headerButtonHamburgerMenu, $headerLinks, hamburgerMenuClicked} from "./hamburgerMenu.js";
import {NewProject} from "./newProject.js";

const $footerLinks = document.querySelector('footer .links');
const $newProject = document.querySelector('#new-project');
const $buttonAddProject = document.querySelector('#buttonAddProject');

const numberOfProjects = projects.length;

uploadProjects(projects);
shownProjects(numberOfProjects);

window.onresize = () => {
  resizingDependencies($headerLinks, $headerButtonHamburgerMenu, $footerLinks, hamburgerMenuClicked);
  shownProjects(numberOfProjects);
}

$buttonAddProject.onclick = () => {
  document.body.style.overflow = "hidden";
  $newProject.showModal();
}


const modalNewProject = new NewProject($newProject);
modalNewProject.windowNewProject();

const $inputProjectTitle = document.querySelector('#inputProjectTitle');
const $inputTechnologies = document.querySelector('#inputTechnologies');

$newProject.onkeydown = (event) => {
  if (event.keyCode === 27) {
    document.body.style.overflow = "scroll";
    $inputProjectTitle.value = '';
    // $inputTechnologies.value = '';
  }
}

$inputProjectTitle.onkeyup = () => {
  modalNewProject.checkProjectTitle();
  modalNewProject.checkTechnologies();
}

$inputTechnologies.onkeyup = () => {
  modalNewProject.checkProjectTitle();
  modalNewProject.checkTechnologies();
}
