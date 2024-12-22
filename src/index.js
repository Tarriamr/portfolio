import { renderSkills } from "./skills/skillsController.js";
import {setNumberOfProjectsToShow, renderProjects, initCarousel} from "./projects/projectsController.js";
import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold, backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "../js/index/hamburgerMenu.js";
import {projects} from "./projects/projects.js";

function init() {
  const $homeButton = document.getElementById('homeButton');
  const $projectsButton = document.getElementById('projectsButton');

  $homeButton.addEventListener('click', ()=>{
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('projectsPage').style.display = 'none';
  });

  $projectsButton.addEventListener('click', ()=>{
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'block';
    displayProjectsPage();
  });

  displayHomePage();

  window.onresize = () => {
    resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked);
    setNumberOfProjectsToShow();
    renderProjects();
  }
  resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked);
}

function resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked) {
  const $footerLinks = document.querySelector('footer .links');

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

function displayHomePage() {
  renderSkills();
  setNumberOfProjectsToShow();
  renderProjects();
  initCarousel();
}

function displayProjectsPage() {
  setNumberOfProjectsToShow(projects.length);
  renderProjects();
}

init();

