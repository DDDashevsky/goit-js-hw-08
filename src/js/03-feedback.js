import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('submit', saveForm);
form.addEventListener('input', throttle(updateStorage, 1000));

function updateStorage(evt) {
  evt.preventDefault();
  const formInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
  console.log(localStorage.getItem('feedback-form-state'));
}

const parsedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
emailInput.value = parsedInput.email || '';
messageInput.value = parsedInput.message || '';

function saveForm(evt) {
  evt.preventDefault();
  form.reset();
  console.log(parsedInput);
  localStorage.clear();
}
