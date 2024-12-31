import {addMessage} from "../messagesPage/messages.js";

export function renderContactPage() {
  const $pageTitle = document.querySelector(".title-name");
  $pageTitle.textContent = "CONTACT ME";

  const $titleProfession = document.querySelector(".title-profession");
  $titleProfession.textContent = "SAY HELLO TO ME";

  const $contactPageContent = document.createElement("div");
  $contactPageContent.className = 'contactPageContent';

  const $contactTitle = document.createElement('h4');
  $contactTitle.className = 'contactTitle';
  $contactTitle.textContent = 'Contact me';

  const $contactPageInputContainer = document.createElement("div");
  $contactPageInputContainer.className = "contactPageInputContainer";

  const $containerName = document.createElement("div");
  $containerName.className = 'containerName addProject';

  const $containerNameLabel = document.createElement('label');
  $containerNameLabel.for = 'containerName-input';
  $containerNameLabel.className = 'containerName-label addProject-label';
  $containerNameLabel.textContent = 'Name';

  const $containerNameInput = document.createElement('input');
  $containerNameInput.id = 'containerName-input';
  $containerNameInput.className = 'containerName-input addProject-input';
  $containerNameInput.placeholder = 'Your Name';
  $containerNameInput.type = 'text';
  $containerNameInput.onkeyup = () => {
    characterCountValidation('containerName', 3, 'The name must be at least 3 characters long.', 20, 'The name must not exceed 20 characters.');
    emailValidation('containerEmail', 'Please enter a valid email address.');
    characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.');
  }

  const $containerNameSpan = document.createElement('span');
  $containerNameSpan.className = 'containerName-span addProject-span';

  $containerName.append($containerNameLabel, $containerNameInput, $containerNameSpan);

  const $containerEmail = document.createElement("div");
  $containerEmail.className = 'containerEmail addProject';

  const $containerEmailLabel = document.createElement('label');
  $containerEmailLabel.for = 'containerEmail-input';
  $containerEmailLabel.className = 'containerEmail-label addProject-label';
  $containerEmailLabel.textContent = 'Email';

  const $containerEmailInput = document.createElement('input');
  $containerEmailInput.id = 'containerEmail-input';
  $containerEmailInput.className = 'containerEmail-input addProject-input';
  $containerEmailInput.placeholder = 'email@example.com';
  $containerEmailInput.type = 'text';
  $containerEmailInput.onkeyup = () => {
    characterCountValidation('containerName', 3, 'The name must be at least 3 characters long.', 20, 'The name must not exceed 20 characters.');
    emailValidation('containerEmail', 'Please enter a valid email address.');
    characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.');
  }

  const $containerEmailSpan = document.createElement('span');
  $containerEmailSpan.className = 'containerEmail-span addProject-span';

  $containerEmail.append($containerEmailLabel, $containerEmailInput, $containerEmailSpan);

  const $containerMessage = document.createElement("div");
  $containerMessage.className = 'containerMessage addProject';

  const $containerMessageLabel = document.createElement('label');
  $containerMessageLabel.for = 'containerMessage-input';
  $containerMessageLabel.className = 'containerMessage-label addProject-label';
  $containerMessageLabel.textContent = 'Message';

  const $containerMessageInput = document.createElement('input');
  $containerMessageInput.id = 'containerMessage-input';
  $containerMessageInput.className = 'containerMessage-input addProject-input';
  $containerMessageInput.placeholder = 'Hello, my name is...';
  $containerMessageInput.type = 'text';
  $containerMessageInput.onkeyup = () => {
    characterCountValidation('containerName', 3, 'The name must be at least 3 characters long.', 20, 'The name must not exceed 20 characters.');
    emailValidation('containerEmail', 'Please enter a valid email address.');
    characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.');
  }

  const $containerMessageSpan = document.createElement('span');
  $containerMessageSpan.className = 'containerMessage-span addProject-span';

  $containerMessage.append($containerMessageLabel, $containerMessageInput, $containerMessageSpan);

  $contactPageInputContainer.append($containerName, $containerEmail, $containerMessage);

  const $buttonSendMessage = document.createElement('button');
  $buttonSendMessage.className = 'buttonSendMessage buttonGrey';
  $buttonSendMessage.textContent = 'Send message';
  $buttonSendMessage.onclick = () => {
    if (characterCountValidation('containerName', 3, 'The name must be at least 3 characters long.', 20, 'The name must not exceed 20 characters.')) {
      if (emailValidation('containerEmail', 'Please enter a valid email address.')) {
        if (characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.')) {
          const name = $containerNameInput.value;
          const email = $containerEmailInput.value;
          const message = $containerMessageInput.value;

          addMessage(name, email, message);

          $containerNameInput.value = '';
          $containerEmailInput.value = '';
          $containerMessageInput.value = '';
        }
      } else {
        characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.');
      }
    } else {
      emailValidation('containerEmail', 'Please enter a valid email address.');
      characterCountValidation('containerMessage', 1, 'The message cannot be empty.', 100, 'The message must not exceed 100 characters.')
    }
  }

  $contactPageContent.append($contactTitle, $contactPageInputContainer, $buttonSendMessage);

  const $links = document.querySelectorAll('a');
  $links.forEach(link => {
    link.onclick = () => {
      $containerNameInput.value = '';
      $containerEmailInput.value = '';
      $containerMessageInput.value = '';
    }
  })

  const $parent = document.createDocumentFragment();
  $parent.append($contactPageContent);
  return $parent;
}

function characterCountValidation(containerClass, min, minComment, max, maxComment) {
  const $span = document.querySelector(`.${containerClass}-span`);
  const $input = document.querySelector(`.${containerClass}-input`);
  const length = $input.value.trim().length;
  if (length < min) {
    $span.textContent = minComment;
    $input.style.borderColor = 'var(colorMain)';
    return false;
  } else if (length > max) {
    $span.textContent = maxComment;
    $input.style.borderColor = 'var(colorRed)';
    return false;
  } else {
    $span.textContent = '';
    $input.style.borderColor = 'var(colorMain)';
    return true;
  }
}

function emailValidation(containerClass, comment) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const $error = document.querySelector(`.${containerClass}-span`);
  const $input = document.querySelector(`.${containerClass}-input`);
  if (!re.test($input.value.trim().toLowerCase())) {
    $error.textContent = comment;
    $input.style.borderColor = 'var(colorRed)';
    return false;
  } else {
    $error.textContent = '';
    $input.style.borderColor = 'var(colorMain)';
    return true;
  }
}
