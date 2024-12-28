import {createMySkills} from "../skills/skillsController.js";
import {createProjectsComponent} from "../projects/projectsComponent.js";

const aboutMe = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";

export function renderHomePage() {
  const $profilePhoto = document.createElement("img");
  $profilePhoto.className = 'profilePhoto';
  $profilePhoto.alt = "Profile photo";
  $profilePhoto.src = "img/male.jpg";

  const $h4 = document.createElement("h4");
  $h4.textContent = "About me";
  const $p = document.createElement("p");
  $p.textContent = aboutMe;
  const $aboutMe = document.createElement("div");
  $aboutMe.className = "gridTemplate aboutMe";
  $aboutMe.append($h4, $p);

  const $mySkills = createMySkills();

  const $content = document.createElement("div");
  $content.className = 'homePage-content';
  $content.append($profilePhoto, $aboutMe, $mySkills);

  const $projects = createProjectsComponent(true, false);
  $projects.querySelector('.projectsGrid').className += ' homePage-showSingleProjectRow';

  const $parent = document.createDocumentFragment();
  $parent.append($content, $projects);
  return $parent;
}
