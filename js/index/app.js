import {numberOfProjectsToShow, projectsNumber, removeProjects, shownProjects, uploadProjects} from "./projects.js";
import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold,
  backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "./hamburgerMenu.js";
import {carouselLeft, carouselRight} from "./carousel.js";
import {uploadAllSkills} from "./skills.js";


const $buttonsCarousel = document.querySelector('#buttonsCarousel');
const $footerLinks = document.querySelector('footer .links');
const $leftButton = document.querySelector('#buttonsCarousel button:first-child');
const $rightButton = document.querySelector('#buttonsCarousel button:last-child');

export const projects = [
  {title: 'Non-governmental organization', skills: ['HTML', 'JS']},
  {title: 'Test', skills: ['Firefox', 'Java']},
  {title: 'Cross vs circle', skills: ['Java']},
  {title: 'Portfolio', skills: ['HTML', 'JS', 'CSS']}
];

const skills = [
  {title: 'HTML', years: 2},
  {title: 'Java', years: 3},
  {title: 'Firefox', years: 5},
  {title: 'GIT', years: 4},
  {title: 'CSS', years: 2}
];


uploadAllSkills(skills);
projectsNumber(projects);
uploadProjects(projects);
shownProjects(numberOfProjectsToShow);

if (innerWidth <= 768) {
  $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite;
  $headerLinks.style.display = 'none';
  $footerLinks.style.display = 'none';
}

window.onresize = () => {
  resizingDependencies($headerLinks, $headerButtonHamburgerMenu, $footerLinks, hamburgerMenuClicked);
  projectsNumber(projects);
  shownProjects(numberOfProjectsToShow);
}

if ($buttonsCarousel !== null) {
  if (numberOfProjectsToShow >= projects.length) {
    $buttonsCarousel.style.display = 'none';
  } else {
    $buttonsCarousel.style.display = 'grid';
  }

  $leftButton.onclick = () => {
    carouselLeft(projects);
    removeProjects();
    uploadProjects(projects);
    shownProjects(numberOfProjectsToShow);
  };

  $rightButton.onclick = () => {
    carouselRight(projects);
    removeProjects();
    uploadProjects(projects);
    shownProjects(numberOfProjectsToShow);
  };
}

export function resizingDependencies($headerLinks, $headerButtonHamburgerMenu, $footerLinks, hamburgerMenuClicked) {
  if (innerWidth > 768) {
    $headerLinks.style.display = 'grid';
    $headerButtonHamburgerMenu.style.display = 'none';
    $footerLinks.style.display = 'grid';
  } else {
    hamburgerMenuClicked
      ? $headerLinks.style.display = 'grid'
      : $headerLinks.style.display = 'none';
    hamburgerMenuClicked
      ? $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuGold
      : $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite;
    $headerButtonHamburgerMenu.style.display = 'initial';
    $footerLinks.style.display = 'none';
  }
}
