import {aboutMe} from "./aboutMe.js";

export function renderAboutMe() {
  const $aboutMe = document.querySelector("#aboutMe");
  const $h4 = document.createElement("h4");
  const $p = document.createElement("p");

  $h4.textContent = "About me";
  $p.textContent = aboutMe;

  $aboutMe.append($h4, $p);
}
