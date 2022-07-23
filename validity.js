const form = document.querySelector('form');

const { email, button } = form.elements;

const errSpan = document.createElement('p');
errSpan.style.textAlign = 'left';
errSpan.style.color = 'red';
errSpan.style.fontSize = '1rem';
button.insertAdjacentElement('beforebegin', errSpan);

let invalidMessage = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
    invalidMessage.textContent = 'please type your whole email address in lowercase';
  } else {
    invalidMessage.textContent = '';
    form.submit();
  }
});
