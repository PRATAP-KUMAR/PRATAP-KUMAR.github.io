const form = document.querySelector('#contact-form');
const EMAIL_CASE_SENSITIVITY_CHECK = 'Please enter the letters in your email as lower case';

const { email, button } = form.elements;

const errorMessage = document.createElement('p');
errorMessage.textAlign = 'left';
errorMessage.color = '#ff0000';
errorMessage.fontSize = '32px';
button.insertAdjacentElement('beforebegin', errorMessage);

form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (email.value !== email.toLocaleLowerCase()) {
    errorMessage.innerText = EMAIL_CASE_SENSITIVITY_CHECK;
  } else {
    form.submit();
  }
});
