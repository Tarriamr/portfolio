import {renderAboutMe} from "../aboutMe/aboutMeRendering.js";
import {renderMySkills} from "../skills/mySkillsRendering.js";
import {renderProjects, setNumberOfProjectsToShow} from "../projects/projectsController.js";
import {createProjectsComponent} from "../projects/projectsComponent.js";

function homePageController() {
  renderAboutMe();
  renderMySkills();

  // setNumberOfProjectsToShow();
  // renderProjects();

  const $projectRemoveButton = document.querySelectorAll(".project button");
  $projectRemoveButton.forEach(button => {
    button.style.display = "none";
  })
}

export function renderHomePage($parent) {
  const $mainFragment = document.createDocumentFragment();

  const $homePage = document.createElement("div");
  $homePage.id = "homePage";

  const $mainDescriptionAndSkillsContainer = document.createElement("div");
  $mainDescriptionAndSkillsContainer.className = "gridTemplate";
  $mainDescriptionAndSkillsContainer.id = "mainDescriptionAndSkills";

  const $profilePhoto = document.createElement("img");
  $profilePhoto.alt = "Profile photo";
  $profilePhoto.src = "img/male.jpg";
  const $aboutAndSkillsContainer = document.createElement("div");
  $aboutAndSkillsContainer.className = "gridTemplate";

  const $aboutMe = document.createElement("div");
  $aboutMe.className = "gridTemplate";
  $aboutMe.id = "aboutMe";
  const $mySkills = document.createElement("div");
  $mySkills.className = "gridTemplate";
  $mySkills.id = "mySkills";

  $aboutAndSkillsContainer.append($aboutMe, $mySkills);
  $mainDescriptionAndSkillsContainer.append($profilePhoto, $aboutAndSkillsContainer);

  const $projectsComponent = createProjectsComponent();

  $homePage.append($mainDescriptionAndSkillsContainer, $projectsComponent);
  $mainFragment.append($homePage);
  $parent.append($mainFragment);

  homePageController();
}
