const form = document.forms["contactForm"];
const button = form["button"];
const errorMessageElement = document.createElement('a');
errorMessageElement.style.textAlign = 'center';
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form['email'].value === form['email'].value.toLowerCase()) {
    form.submit();
  } else {
    alert("Please write email letters in small case")
  }
}
)
