import {createMySkills} from "../skills/skillsController.js";
import {createProjectsComponent} from "../projects/projectsComponent.js";

const aboutMe = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";

export function renderHomePage($parent) {
  const $mainFragment = document.createDocumentFragment();

  // TODO remove?
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

  const $mySkills = createMySkills();

  $aboutAndSkillsContainer.append($aboutMe, $mySkills);
  $mainDescriptionAndSkillsContainer.append($profilePhoto, $aboutAndSkillsContainer);

  const $projectsComponent = createProjectsComponent(true);

  $homePage.append($mainDescriptionAndSkillsContainer, $projectsComponent);
  $mainFragment.append($homePage);
  $parent.append($mainFragment);

  const $h4 = document.createElement("h4");
  $h4.textContent = "About me";
  const $p = document.createElement("p");
  $p.textContent = aboutMe;
  $aboutMe.append($h4, $p);

  const $projectRemoveButton = document.querySelectorAll(".project button");
  $projectRemoveButton.forEach(button => {
    button.style.display = "none";
  })
}
