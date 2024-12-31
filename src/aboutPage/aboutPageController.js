import {hideHamburgerMenu} from "../hamburgerMenu.js";
import {renderContactPage} from "../contactPage/contactPageController.js";

const myBackground = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`;

const myHobbiesAndInterests = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`

const colorWhite = '#FFFFFF';
const colorGray = '#ADB6C4'

export function renderAboutPage() {
  const $pageTitle = document.querySelector(".title-name");
  $pageTitle.textContent = "ABOUT ME";

  const $titleProfession = document.querySelector(".title-profession");
  $titleProfession.textContent = "IT’S A-ME, JAN!";

  const $aboutMePageContent = document.createElement("div");
  $aboutMePageContent.className = "homePage-content aboutMe-content";

  const $profilePhoto = document.createElement("img");
  $profilePhoto.className = "profilePhoto aboutMe-profilePhoto";
  $profilePhoto.alt = "Profile photo";
  $profilePhoto.src = "img/male.jpg";

  const $headerMyBackground = document.createElement("h4");
  $headerMyBackground.textContent = "My background";
  const $paragraphMyBackground = document.createElement("p");
  $paragraphMyBackground.textContent = myBackground;
  const $myBackground = document.createElement("div");
  $myBackground.className = "gridTemplate aboutMe";
  $myBackground.append($headerMyBackground, $paragraphMyBackground);

  const $headerMyHobbiesAndInterests = document.createElement("h4");
  $headerMyHobbiesAndInterests.textContent = "My hobbies and interests";
  const $paragraphMyHobbiesAndInterests = document.createElement("p");
  $paragraphMyHobbiesAndInterests.textContent = myHobbiesAndInterests;
  const $myHobbiesAndInterests = document.createElement("div");
  $myHobbiesAndInterests.className = "gridTemplate aboutMe";
  $myHobbiesAndInterests.append($headerMyHobbiesAndInterests, $paragraphMyHobbiesAndInterests);

  const $buttonContactMe = document.createElement("button");
  $buttonContactMe.className = "buttonGrey buttonContactMe";
  const $buttonText = document.createTextNode('Contact me');
  const $buttonSpan = document.createElement('span');
  $buttonContactMe.append($buttonSpan, $buttonText);

  $buttonContactMe.addEventListener('click', (event) => {
    const $aboutButton = document.querySelectorAll('.aboutButton');
    const getMain = () => document.querySelector("main");

    $aboutButton.forEach(link => link.style.color = colorWhite);
    event.preventDefault();
    const $contactButton = document.querySelectorAll(`.contactButton`);
    $contactButton.forEach(link => link.style.color = colorGray);
    getMain().replaceChildren();
    getMain().append(renderContactPage());
    window.scrollTo({top: 0, behavior: "auto"});
    hideHamburgerMenu();
  });

  $aboutMePageContent.append($profilePhoto, $myBackground, $myHobbiesAndInterests, $buttonContactMe);
  const $parent = document.createDocumentFragment();
  $parent.append($aboutMePageContent);
  return $parent;
}
