import {renderProjects, setNumberOfProjectsToShow} from "./projects/projectsController.js";
import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold,
  backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "../js/index/hamburgerMenu.js";
import {projects} from "./projects/projects.js";
import {renderHomePage} from "./homePage/homePageRendering.js";


const colorWhite = '#FFFFFF';
const colorGray = '#ADB6C4'


function init() {
  const $navLinks = document.querySelectorAll('.links>div>a');
  const $homeButton = document.querySelectorAll('.homeButton');
  const $projectsButton = document.querySelectorAll('.projectsButton');
  const $aboutButton = document.querySelector('.aboutButton');
  const $contactButton = document.querySelector('.contactButton');
  const $messagesButton = document.querySelector('.messagesButton');

  $homeButton.onclick = () => {
    renderHomePage();
  };

  $projectsButton.onclick = () => {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'grid';
    displayProjectsPage();
  };

  $aboutButton.onclick = () => {
  };

  $contactButton.onclick = () => {
  };

  $messagesButton.onclick = () => {
  };

  $navLinks.forEach(link => {
    link.onclick = function (event) {
      $navLinks.forEach(link => link.style.color = colorWhite);

      event.preventDefault();

      const clickedClass = document.querySelectorAll(`.${link.className}`);
      clickedClass.forEach(link => link.style.color = colorGray);
    };
  });

  renderHomePage();

  window.onresize = () => {
    resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked);
    setNumberOfProjectsToShow();
    renderProjects();
  }
  resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked);
}

function resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked) {
  const $footerLinks = document.querySelector('.footerLinks');

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

function displayProjectsPage() {
  setNumberOfProjectsToShow(projects.length);
  renderProjects();
}

init();
