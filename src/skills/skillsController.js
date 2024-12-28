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

function renderSkill(skill) {
  const $skillsParent = document.querySelector('#skillsParent');
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

  if ($skillsParent !== null) {
    $skillsParent.append($skill);
  }
}

export function renderSkills() {
  skills.forEach((skill) => {
    renderSkill(skill);
  })
}

