import {renderProjectsPage} from "./projects/projectsController.js";
import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold,
  backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "./hamburgerMenu.js";
import {renderHomePage} from "./homePage/homePageController.js";

const colorWhite = '#FFFFFF';
const colorGray = '#ADB6C4'

function init() {
  const $navLinks = document.querySelectorAll('.links>div>a');
  const $homeButtons = document.querySelectorAll('.homeButton');
  const $projectsButtons = document.querySelectorAll('.projectsButton');
  const $aboutButtons = document.querySelectorAll('.aboutButton');
  const $contactButton = document.querySelectorAll('.contactButton');
  const $messagesButton = document.querySelectorAll('.messagesButton');

  const $main = document.querySelector("main");

  $homeButtons.forEach(button => {
    button.addEventListener('click', ()=>{
      $main.replaceChildren();
      renderHomePage($main);
    });
  });

  $projectsButtons.forEach(button => {
    button.addEventListener('click', ()=>{
      $main.replaceChildren();
      renderProjectsPage($main);
    })
  });

  $aboutButtons.onclick = () => {
    $main.replaceChildren();
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

  renderHomePage($main);

  /*
  grid-template-rows: 1fr 0 0 0 0 0;
    row-gap: 0px;
    overflow: hidden;
   */

  window.onresize = () => {
    resizeElements($headerLinks, $headerButtonHamburgerMenu, hamburgerMenuClicked);
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

init();
