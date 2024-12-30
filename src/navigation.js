import {renderHomePage} from "./homePage/homePageController.js";
import {renderProjectsPage} from "./projects/projectsController.js";
import {renderAboutPage} from "./aboutPage/aboutPageController.js";
import {renderContactPage} from "./contactPage/contactPageController.js";
import {renderMessagesPage} from "./messagesPage/messagesPageController.js";

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
  addListeners($aboutButtons, renderAboutPage);
  addListeners($contactButton, renderContactPage);
  addListeners($messagesButton, renderMessagesPage);

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
