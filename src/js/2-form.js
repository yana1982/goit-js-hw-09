let formData = {
    email: '',
    message: '',
  };

const formElement = document.querySelector('.feedback-form');
const emailElement = formElement.elements.email;
const messageElement = formElement.elements.message;
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey) !== null) {
  emailElement.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).email;
  formData.email = emailElement.value;
  messageElement.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).message;
  formData.message = messageElement.value;
}

formElement.addEventListener('input', e => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  formElement.reset();
});