import {generateId} from "../projects/projects.js";

export const messages = [
  {
    id: generateId(),
    name: 'Karol',
    email: 'karol@email.com',
    message: 'Hello, I\'ve reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further.'
  },
  {
    id: generateId(),
    name: 'Ernest',
    email: 'ernest@email.com',
    message: 'Hello, Please call me at 351-152-555 to talk further.'
  },
  {id: generateId(), name: 'Jan', email: 'jan@email.com', message: 'Welcome Jan. You created really nice project'}
];

export function addMessage(name, email, message) {
  messages.push({id: generateId(), name, email, message});
}
