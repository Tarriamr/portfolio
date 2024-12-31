export class NewProject {

  colorMain = '#1F2041';
  colorRed = '#AF0808';

  constructor(modal) {
    this.modal = modal;
  }

  windowNewProject(onAddProject) {
    const $buttonEsc = document.createElement('button');
    $buttonEsc.className = 'buttonGrey';
    $buttonEsc.id = 'buttonCancelProjectCreation';
    this.esc($buttonEsc);

    const $divContainer = document.createElement('div');
    $divContainer.className = 'centerElement addProjectContainer';

    const $divProjectTitle = document.createElement('div');
    $divProjectTitle.className = 'addProject';

    const $labelInputProjectTitle = document.createElement('label');
    $labelInputProjectTitle.for = 'labelInputProjectTitle';
    $labelInputProjectTitle.className = 'addProject-label';
    $labelInputProjectTitle.textContent = 'Project title';

    this.$inputProjectTitle = document.createElement('input');
    this.$inputProjectTitle.id = 'inputProjectTitle';
    this.$inputProjectTitle.className = 'addProject-input';
    this.$inputProjectTitle.placeholder = 'Project title';
    this.$inputProjectTitle.type = 'text';

    this.$commentProjectTitle = document.createElement('span');
    this.$commentProjectTitle.id = 'commentProjectTitle';
    this.$commentProjectTitle.className = 'addProject-span';

    $divProjectTitle.append($labelInputProjectTitle, this.$inputProjectTitle, this.$commentProjectTitle);

    const $divTechnologies = document.createElement('div');
    $divTechnologies.className = 'addProject';

    const $labelInputTechnologies = document.createElement('label');
    $labelInputTechnologies.for = 'inputTechnologies';
    $labelInputTechnologies.className = 'addProject-label';
    $labelInputTechnologies.textContent = 'Technologies';

    this.$inputTechnologies = document.createElement('input');
    this.$inputTechnologies.id = 'inputTechnologies';
    this.$inputTechnologies.className = 'addProject-input';
    this.$inputTechnologies.placeholder = 'html,css,javascript';
    this.$inputTechnologies.type = 'text';

    this.$commentTechnologies = document.createElement('span');
    this.$commentTechnologies.id = 'commentTechnologies';
    this.$commentTechnologies.className = 'addProject-span';

    $divTechnologies.append($labelInputTechnologies, this.$inputTechnologies, this.$commentTechnologies);

    this.$buttonCreateProject = document.createElement('button');
    this.$buttonCreateProject.className = 'add buttonGrey';
    this.$buttonCreateProject.id = 'button-create-project';
    this.$buttonCreateProject.onclick = () => {
      if (this.checkProjectTitle()) {
        if (this.checkTechnologies()) {
          const title = this.$inputProjectTitle.value;
          const skills = this.$inputTechnologies.value.split(',');
          const trimmedSkills = skills.map(str => str.trim());

          onAddProject(title, trimmedSkills);

          this.$inputProjectTitle.value = '';
          this.$inputTechnologies.value = '';
          this.modal.close();
        }
      } else {
        this.checkTechnologies();
      }
    }

    const $buttonText = document.createTextNode('Add project');
    const $buttonSpan = document.createElement('span');
    this.$buttonCreateProject.append($buttonSpan, $buttonText);

    $divContainer.append($divProjectTitle, $divTechnologies, this.$buttonCreateProject);

    this.modal.append($buttonEsc, $divContainer);
  }

  esc(button) {
    button.onclick = () => {
      document.body.style.overflow = "scroll";
      this.modal.close();
      this.$inputProjectTitle.value = '';
      this.$inputTechnologies.value = '';
    }
  }

  checkProjectTitle() {
    const $commentProjectTitle = document.querySelector('#commentProjectTitle');
    const $inputProjectTitle = document.querySelector('#inputProjectTitle');
    const length = $inputProjectTitle.value.trim().length;
    if (length < 3) {
      $commentProjectTitle.textContent = 'The title must be at least 3 characters long.';
      $inputProjectTitle.style.borderColor = 'var(colorMain)';
      return false;
    } else if (length > 30) {
      $commentProjectTitle.textContent = 'The title must not exceed 30 characters.';
      $inputProjectTitle.style.borderColor = 'var(colorRed)';
      return false;
    } else {
      $commentProjectTitle.textContent = '';
      $inputProjectTitle.style.borderColor = 'var(colorMain)';
      return true;
    }
  }

  checkTechnologies() {
    const $commentTechnologies = document.querySelector('#commentTechnologies');
    const $inputTechnologies = document.querySelector('#inputTechnologies');
    const length = $inputTechnologies.value.trim().length;
    if (length < 1) {
      $commentTechnologies.textContent = 'Please add some technologies.';
      $inputTechnologies.style.borderColor = 'var(colorRed)';
      return false;
    } else {
      $commentTechnologies.textContent = '';
      $inputTechnologies.style.borderColor = 'var(colorMain)';
      return true;
    }
  }
}
