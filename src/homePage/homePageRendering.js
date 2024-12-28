import {homePageController} from "./homePageController.js";

function renderingHomePage() {
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

  const $projectsParent = document.createElement("div");
  $projectsParent.className = "projectsContainer";

  const $buttonsCarousel = document.createElement("div");
  $buttonsCarousel.id = "buttonsCarousel";

  const $leftButton = document.createElement("button");
  $leftButton.className = "buttonGrey";
  const $rightButton = document.createElement("button");
  $rightButton.className = "buttonGrey";

  $buttonsCarousel.append($leftButton, $rightButton);

  $aboutAndSkillsContainer.append($aboutMe, $mySkills);
  $mainDescriptionAndSkillsContainer.append($profilePhoto, $aboutAndSkillsContainer);

  $homePage.append($mainDescriptionAndSkillsContainer, $projectsParent, $buttonsCarousel);
  $mainFragment.append($homePage);

  return $mainFragment;
}

export function renderHomePage() {
  const $main = document.querySelector("main");
  $main.append(renderingHomePage());

  homePageController();
}
