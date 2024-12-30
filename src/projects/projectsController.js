import {addProject} from './projects.js'
import {createProjectsComponent} from "./projectsComponent.js";
import {NewProject} from "./newProject.js";
import {renderGrid} from "./renderGrid.js";

function onAddProject(title, skills) {
  addProject(title, skills);
  document.body.style.overflow = "scroll";
  const $grid = document.querySelector(".projectsGrid");
  renderGrid($grid, true);
}

export function renderProjectsPage() {
  const $pageTitle = document.querySelector(".title-name");
  $pageTitle.textContent = "MY PROJECTS";

  const $titleProfession = document.querySelector(".title-profession");
  $titleProfession.textContent = "MADE WITH LOVE";

  const $dialog = document.createElement('dialog');
  $dialog.id = "new-project";

  const modalNewProject = new NewProject($dialog);
  modalNewProject.windowNewProject(onAddProject);

  const $addProjectButton = document.createElement('button');
  $addProjectButton.id = 'buttonAddProject';
  $addProjectButton.className = "add buttonGrey addProjectButton";
  $addProjectButton.addEventListener('click', () => {
    document.body.style.overflow = "hidden";
    $dialog.showModal();
    const $inputProjectTitle = document.querySelector('#inputProjectTitle');
    const $inputTechnologies = document.querySelector('#inputTechnologies');

    $inputProjectTitle.onkeyup = () => {
      modalNewProject.checkProjectTitle();
      modalNewProject.checkTechnologies();
    }

    $inputTechnologies.onkeyup = () => {
      modalNewProject.checkProjectTitle();
      modalNewProject.checkTechnologies();
    }

    $dialog.onkeydown = (event) => {
      if (event.keyCode === 27) {
        document.body.style.overflow = "scroll";
        $inputProjectTitle.value = '';
        $inputTechnologies.value = '';
      }
    }
  });

  const $buttonText = document.createTextNode('Add project');
  const $buttonSpan = document.createElement('span');
  $addProjectButton.append($buttonSpan, $buttonText);

  const $projectsComponent = createProjectsComponent(false, true);

  const $parent = document.createDocumentFragment();
  $parent.append($dialog, $addProjectButton, $projectsComponent);
  return $parent;
}
