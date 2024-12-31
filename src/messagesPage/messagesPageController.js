import {messages} from "./messages.js";

export function renderMessagesPage() {
  const $pageTitle = document.querySelector(".title-name");
  $pageTitle.textContent = "MESSAGES";

  const $titleProfession = document.querySelector(".title-profession");
  $titleProfession.textContent = "MESSAGE FROM THE INTERESTED PERSON";

  const $messagesContainer = document.createElement("div");
  $messagesContainer.className = 'contactPageContent messagesContainer';

  const $messageParagraphs = document.createDocumentFragment();
  messages.forEach(message => {
      const $message = document.createElement('p');
      $message.className = 'message';
      $message.textContent = textConnection(message);
      $messageParagraphs.append($message);
    }
  )

  $messagesContainer.append($messageParagraphs);

  const $parent = document.createDocumentFragment();
  $parent.append($messagesContainer);
  return $parent;
}

function textConnection(message) {
  return `Name: ${message.name}
Email: ${message.email}
Message: ${message.message}`
}
