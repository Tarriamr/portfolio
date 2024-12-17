import {setProject} from './project.js';
import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold,
  backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "./hamburgerMenu.js";

const $footerLinks = document.querySelector('footer .links');
let numberOfProjectsToShow = 3;

const projects = [
  {title: 'Non-governmental organization', skills: ['HTML', 'JS']},
  {title: 'Test', skills: ['Firefox', 'Java']},
  {title: 'Kros vs dot', skills: ['Java']},
  {title: 'Portfolio', skills: ['HTML', 'JS', 'CSS']}
];


if (innerWidth <= 768) {
  $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite;
  $headerLinks.style.display = 'none';
  $footerLinks.style.display = 'none';
}

function projectsNumber(projects) {
  if (innerWidth >= 1440) {
    numberOfProjectsToShow = 3;
  } else if (innerWidth >= 1039) {
    numberOfProjectsToShow = 2;
  } else if (innerWidth >= 768) {
    numberOfProjectsToShow = 1;
  } else {
    numberOfProjectsToShow = 3;
  }
}

function shownProjects(numberOfProjectsToShow) {
  const $projects = document.querySelectorAll('#projects>div');
  let counter = 0;
  $projects.forEach((project) => {
    if (counter < numberOfProjectsToShow) {
      project.style.display = 'grid';
    } else {
      project.style.display = 'none';
    }
    ++counter;
  })
}

projectsNumber(projects);
projects.forEach((project) => {
  setProject(project);
})
shownProjects(numberOfProjectsToShow);

window.onresize = () => {
  if (innerWidth > 768) {
    $headerLinks.style.display = 'grid';
    $headerButtonHamburgerMenu.style.display = 'none';
    $footerLinks.style.display = 'grid';
  } else {
    hamburgerMenuClicked ? $headerLinks.style.display = 'grid' : $headerLinks.style.display = 'none';
    hamburgerMenuClicked ? $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuGold : $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite;
    $headerButtonHamburgerMenu.style.display = 'initial';
    $footerLinks.style.display = 'none';
  }
  projectsNumber(projects);
  shownProjects(numberOfProjectsToShow);
}
