import {setProject} from './project.js';

const backgroundImageHamburgerMenuWhite = 'url("data:image/svg+xml,%3Csvg%20width%3D%2238%22%20height%3D%2226%22%20viewBox%3D%220%200%2038%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.25%202.0625C0.25%201.6481%200.41462%201.25067%200.707645%200.957645C1.00067%200.66462%201.3981%200.5%201.8125%200.5H36.1875C36.6019%200.5%2036.9993%200.66462%2037.2924%200.957645C37.5854%201.25067%2037.75%201.6481%2037.75%202.0625C37.75%202.4769%2037.5854%202.87433%2037.2924%203.16735C36.9993%203.46038%2036.6019%203.625%2036.1875%203.625H1.8125C1.3981%203.625%201.00067%203.46038%200.707645%203.16735C0.41462%202.87433%200.25%202.4769%200.25%202.0625ZM0.25%2013C0.25%2012.5856%200.41462%2012.1882%200.707645%2011.8951C1.00067%2011.6021%201.3981%2011.4375%201.8125%2011.4375H36.1875C36.6019%2011.4375%2036.9993%2011.6021%2037.2924%2011.8951C37.5854%2012.1882%2037.75%2012.5856%2037.75%2013C37.75%2013.4144%2037.5854%2013.8118%2037.2924%2014.1049C36.9993%2014.3979%2036.6019%2014.5625%2036.1875%2014.5625H1.8125C1.3981%2014.5625%201.00067%2014.3979%200.707645%2014.1049C0.41462%2013.8118%200.25%2013.4144%200.25%2013ZM0.25%2023.9375C0.25%2023.5231%200.41462%2023.1257%200.707645%2022.8326C1.00067%2022.5396%201.3981%2022.375%201.8125%2022.375H36.1875C36.6019%2022.375%2036.9993%2022.5396%2037.2924%2022.8326C37.5854%2023.1257%2037.75%2023.5231%2037.75%2023.9375C37.75%2024.3519%2037.5854%2024.7493%2037.2924%2025.0424C36.9993%2025.3354%2036.6019%2025.5%2036.1875%2025.5H1.8125C1.3981%2025.5%201.00067%2025.3354%200.707645%2025.0424C0.41462%2024.7493%200.25%2024.3519%200.25%2023.9375Z%22%20fill%3D%22%23F9F9F9%22%2F%3E%0A%3C%2Fsvg%3E%0A")';
const backgroundImageHamburgerMenuGold = 'url("data:image/svg+xml,%3Csvg%20width%3D%2238%22%20height%3D%2226%22%20viewBox%3D%220%200%2038%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.25%202.0625C0.25%201.6481%200.41462%201.25067%200.707645%200.957645C1.00067%200.66462%201.3981%200.5%201.8125%200.5H36.1875C36.6019%200.5%2036.9993%200.66462%2037.2924%200.957645C37.5854%201.25067%2037.75%201.6481%2037.75%202.0625C37.75%202.4769%2037.5854%202.87433%2037.2924%203.16735C36.9993%203.46038%2036.6019%203.625%2036.1875%203.625H1.8125C1.3981%203.625%201.00067%203.46038%200.707645%203.16735C0.41462%202.87433%200.25%202.4769%200.25%202.0625ZM0.25%2013C0.25%2012.5856%200.41462%2012.1882%200.707645%2011.8951C1.00067%2011.6021%201.3981%2011.4375%201.8125%2011.4375H36.1875C36.6019%2011.4375%2036.9993%2011.6021%2037.2924%2011.8951C37.5854%2012.1882%2037.75%2012.5856%2037.75%2013C37.75%2013.4144%2037.5854%2013.8118%2037.2924%2014.1049C36.9993%2014.3979%2036.6019%2014.5625%2036.1875%2014.5625H1.8125C1.3981%2014.5625%201.00067%2014.3979%200.707645%2014.1049C0.41462%2013.8118%200.25%2013.4144%200.25%2013ZM0.25%2023.9375C0.25%2023.5231%200.41462%2023.1257%200.707645%2022.8326C1.00067%2022.5396%201.3981%2022.375%201.8125%2022.375H36.1875C36.6019%2022.375%2036.9993%2022.5396%2037.2924%2022.8326C37.5854%2023.1257%2037.75%2023.5231%2037.75%2023.9375C37.75%2024.3519%2037.5854%2024.7493%2037.2924%2025.0424C36.9993%2025.3354%2036.6019%2025.5%2036.1875%2025.5H1.8125C1.3981%2025.5%201.00067%2025.3354%200.707645%2025.0424C0.41462%2024.7493%200.25%2024.3519%200.25%2023.9375Z%22%20fill%3D%22%23D4AF37%22%2F%3E%0A%3C%2Fsvg%3E%0A")';

const $headerLinks = document.querySelector('#headerLinks');
const $headerButtonHamburgerMenu = document.querySelector('#hamburgerMenu');
const $headerActiveLink = document.querySelector('.activePage');
const $footerLinks = document.querySelector('footer .links');

let hamburgerMenuClicked = false;
const projects = [
  {title: 'Non-governmental organization', skills: ['HTML', 'JS']},
  {title: 'Test', skills: ['Firefox', 'Java']},
];

if (innerWidth <= 768) {
  $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite;
  $headerLinks.style.display = 'none';
  $footerLinks.style.display = 'none';
}

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
}

const onclickHamburgerMenu = () => {
  $headerButtonHamburgerMenu.onclick = () => {
    if ($headerLinks.style.display === 'none') {
      hamburgerMenuClicked = true;
      $headerLinks.style.display = 'grid';
      $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuGold;
      $headerButtonHamburgerMenu.style.display = 'initial';
    } else {
      hamburgerMenuClicked = false;
      $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite
      $headerLinks.style.display = 'none';
    }
  }
  $headerActiveLink.onclick = () => {
    $headerButtonHamburgerMenu.style.backgroundImage = backgroundImageHamburgerMenuWhite
    $headerLinks.style.display = 'none'
  }
}

onclickHamburgerMenu();

projects.forEach((project) => {
  setProject(project);
})
