import {renderAboutMe} from "../aboutMe/aboutMeRendering.js";
import {renderMySkills} from "../skills/mySkillsRendering.js";
import {renderProjects, setNumberOfProjectsToShow} from "../projects/projectsController.js";

export function homePageController() {
  renderAboutMe();
  renderMySkills();
  setNumberOfProjectsToShow();
  renderProjects();

  const $projectRemoveButton = document.querySelectorAll(".project button");
  $projectRemoveButton.forEach(button => {
    button.style.display = "none";
  })
}
