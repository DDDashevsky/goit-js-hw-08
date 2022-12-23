import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const formKey = 'feedback-form-state';

form.addEventListener('submit', saveForm);
form.addEventListener('input', throttle(updateStorage, 1000));

function updateStorage(evt) {
  evt.preventDefault();
  const formInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(formKey, JSON.stringify(formInput));
  console.log(localStorage.getItem(formKey));
}

const parsedInput = JSON.parse(localStorage.getItem(formKey));

emailInput.value = parsedInput.email ? parsedInput.email : '';
messageInput.value = parsedInput.message ? parsedInput.message : '';

function saveForm(evt) {
  evt.preventDefault();
  form.reset();
  console.log(parsedInput);
  localStorage.removeItem(formKey);
  // не розумію чому видає null з пустим сховищем, я наче добавив перевірку. Чи з нею щось не то? Чи зі мною ._.
}
