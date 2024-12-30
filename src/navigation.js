import {renderHomePage} from "./homePage/homePageController.js";
import {renderProjectsPage} from "./projects/projectsController.js";
import {renderAboutMePage} from "./aboutMe/aboutMePageController.js";

const colorWhite = '#FFFFFF';
const colorGray = '#ADB6C4'

const getMain = () => document.querySelector("main");

function addListeners(links, renderPageFunction) {
  const $main = getMain();
  links.forEach(button => {
    button.addEventListener('click', () => {
      $main.replaceChildren();
      $main.append(renderPageFunction());
      window.scrollTo({top: 0, behavior: "auto"});
    });
  });
}

function init() {
  const $navLinks = document.querySelectorAll('.links a');
  const $homeButtons = document.querySelectorAll('.homeButton');
  const $projectsButtons = document.querySelectorAll('.projectsButton');
  const $aboutButtons = document.querySelectorAll('.aboutButton');
  const $contactButton = document.querySelectorAll('.contactButton');
  const $messagesButton = document.querySelectorAll('.messagesButton');

  addListeners($homeButtons, renderHomePage);
  addListeners($projectsButtons, renderProjectsPage);
  addListeners($aboutButtons, renderAboutMePage);
  addListeners($contactButton, () => {
    getMain().replaceChildren();
  })
  addListeners($messagesButton, () => {
    getMain().replaceChildren();
  })

  $navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      $navLinks.forEach(link => link.style.color = colorWhite);
      event.preventDefault();
      const clickedClass = document.querySelectorAll(`.${link.className}`);
      clickedClass.forEach(link => link.style.color = colorGray);
    });
  });
}

export function createNavigation() {
  return {
    init,
    renderHome: () => {
      getMain().append(renderHomePage());
    }
  }
}
