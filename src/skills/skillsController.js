import {skills} from "./skills.js";

function renderDotYears(years, $dotYears) {
  for (let i = 0; i < 5; i++) {
    const $div = document.createElement('div');
    $div.className = 'skill-dot';
    if (i < years) {
      $div.classList.add('dotFilled');
    } else {
      $div.classList.add('dotEmpty');
    }
    $dotYears.append($div);
  }
}

function createSingleSkillComponent(skill) {
  const $dotYears = document.createDocumentFragment();

  const $divSkillLogo = document.createElement('div');
  $divSkillLogo.className = 'skill-logo';
  $divSkillLogo.style.backgroundImage = `url("/img/skillsIcons/${skill.title.toLowerCase()}.png")`

  const $divSkillName = document.createElement('div');
  $divSkillName.className = 'skill-name';
  $divSkillName.textContent = skill.title;

  const $divDotYears = document.createElement('div');
  $divDotYears.className = 'skill-dots';
  renderDotYears(skill.years, $dotYears);
  $divDotYears.append($dotYears);

  const $divYears = document.createElement('div');
  $divYears.className = 'skill-years';
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
  $container.className = "skillsContainer";
  skills.forEach((skill) => {
    const $item = createSingleSkillComponent(skill, $container);
    $container.append($item);
  })

  const $component = document.createElement("div");
  $component.className = "gridTemplate mySkillsComponent";
  $component.append($h4, $container);
  return $component;
}
