import {renderSkills} from "./skillsController.js";

export function renderMySkills() {
  const $mySkills = document.querySelector("#mySkills");
  const $h4 = document.createElement("h4");
  const $skillsParent = document.createElement("div");

  $mySkills.className = "grid-rows";
  $h4.textContent = "My Skills";
  $skillsParent.id = "skillsParent";

  $mySkills.append($h4, $skillsParent);

  renderSkills();
}
