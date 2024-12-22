const $skills = document.querySelector('#skills');
const $dotYears = document.createDocumentFragment();


function setDotYears(years) {
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

function setSkill(skill) {
  const $divSkillLogo = document.createElement('div');
  $divSkillLogo.style.backgroundImage = `url("/img/skillsIcons/${skill.title.toLowerCase()}.png")`

  const $divSkillName = document.createElement('div');
  $divSkillName.textContent = skill.title;

  const $divDotYears = document.createElement('div');
  setDotYears(skill.years);
  $divDotYears.append($dotYears);

  const $divYears = document.createElement('div');
  $divYears.textContent = `${skill.years} ${skill.years === 1 ? 'year' : 'years'}`;

  const $skill = document.createElement('div');
  $skill.append($divSkillLogo, $divSkillName, $divDotYears, $divYears);
  $skill.className = 'skill';

  if ($skills !== null) {
    $skills.append($skill);
  }
}

export function uploadAllSkills(skills) {
  skills.forEach((skill) => {
    setSkill(skill)
  })
}

