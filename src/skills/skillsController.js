// TODO pass skills as a parameter
import { skills } from "./skills.js";

function renderDotYears(years, $dotYears) {
  for (let i = 0; i < 5; i++) {
    const $div = document.createElement('div');
    if (i < years) {
      $div.className = 'dotFilled';
    } else {
      $div.className = 'dotEmpty';
    }
    $dotYears.append($div);
  }
}

function createSingleSkillComponent(skill) {
  const $dotYears = document.createDocumentFragment();

  const $divSkillLogo = document.createElement('div');
  $divSkillLogo.style.backgroundImage = `url("/img/skillsIcons/${skill.title.toLowerCase()}.png")`

  const $divSkillName = document.createElement('div');
  $divSkillName.textContent = skill.title;

  const $divDotYears = document.createElement('div');
  renderDotYears(skill.years, $dotYears);
  $divDotYears.append($dotYears);

  const $divYears = document.createElement('div');
  $divYears.textContent = `${skill.years} ${skill.years === 1 ? 'year' : 'years'}`;

  const $skill = document.createElement('div');
  $skill.append($divSkillLogo, $divSkillName, $divDotYears, $divYears);
  $skill.className = 'skill';

  return $skill;
}

export function createMySkills() {
  const $h4 = document.createElement("h4");
  $h4.textContent = "My Skills";

  const $container = document.createElement("div");
  $container.id = "skillsParent";
  skills.forEach((skill) => {
    const $item = createSingleSkillComponent(skill, $container);
    $container.append($item);
  })

  const $component = document.createElement("div");
  $component.className = "gridTemplate grid-rows";
  $component.id = "mySkills";
  $component.append($h4, $container);
  return $component;
}
