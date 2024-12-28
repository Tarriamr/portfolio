import {
  $headerButtonHamburgerMenu,
  $headerLinks,
  backgroundImageHamburgerMenuGold,
  backgroundImageHamburgerMenuWhite,
  hamburgerMenuClicked
} from "./hamburgerMenu.js";
import {createNavigation} from "./navigation.js";

function init() {
  const navigation = createNavigation();
  navigation.init();
  navigation.renderHome();

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
