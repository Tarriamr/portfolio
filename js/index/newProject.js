export class NewProject {
  validation = false;

  constructor(modal) {
    this.modal = modal;
  }

  windowNewProject() {
    const $buttonEsc = document.createElement('button');
    $buttonEsc.className = 'buttonGrey';
    $buttonEsc.id = 'buttonCancelProjectCreation';
    this.esc($buttonEsc);

    const $divContainer = document.createElement('div');
    $divContainer.className = 'centerElement';

    const $divProjectTitle = document.createElement('div');

    const $labelInputProjectTitle = document.createElement('label');
    $labelInputProjectTitle.for = 'labelInputProjectTitle';
    $labelInputProjectTitle.textContent = 'Project title';

    this.$inputProjectTitle = document.createElement('input');
    this.$inputProjectTitle.id = 'inputProjectTitle';
    this.$inputProjectTitle.placeholder = 'Project title';
    this.$inputProjectTitle.type = 'text';

    this.$commentProjectTitle = document.createElement('span');
    this.$commentProjectTitle.id = 'commentProjectTitle';

    $divProjectTitle.append($labelInputProjectTitle, this.$inputProjectTitle, this.$commentProjectTitle);

    const $divTechnologies = document.createElement('div');

    const $labelInputTechnologies = document.createElement('label');
    $labelInputTechnologies.for = 'inputTechnologies';
    $labelInputTechnologies.textContent = 'Technologies';

    this.$inputTechnologies = document.createElement('input');
    this.$inputTechnologies.id = 'inputTechnologies';
    this.$inputTechnologies.placeholder = 'html, css, javascript';
    this.$inputTechnologies.type = 'text';

    this.$commentTechnologies = document.createElement('span');
    this.$commentTechnologies.id = 'commentTechnologies';

    $divTechnologies.append($labelInputTechnologies, this.$inputTechnologies, this.$commentTechnologies);

    this.$buttonCreateProject = document.createElement('button');
    this.$buttonCreateProject.className = 'add buttonGrey';
    this.$buttonCreateProject.id = 'button-create-project';

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
      $inputProjectTitle.style.borderColor = '#AF0808';
    } else if (length > 30) {
      $commentProjectTitle.textContent = 'The title must not exceed 30 characters.';
      $inputProjectTitle.style.borderColor = '#AF0808';
    } else {
      $commentProjectTitle.textContent = '';
      $inputProjectTitle.style.borderColor = '#1F2041';
      this.validation = true;
    }
  }

  checkTechnologies() {
    const $commentTechnologies = document.querySelector('#commentTechnologies');
    const $inputTechnologies = document.querySelector('#inputTechnologies');
    const length = $inputTechnologies.value.trim().length;
    if (length === 0) {
      $commentTechnologies.textContent = 'Please add some technologies.';
      $inputTechnologies.style.borderColor = '#AF0808';
    } else {
      $commentTechnologies.textContent = '';
      $inputTechnologies.style.borderColor = '#1F2041';
      this.validation = true;
    }
  }

  addNewProject(projectTitle, technologies) {
    if (this.validation === true) {
      this.esc(this.$buttonCreateProject);
    }
  }
}
