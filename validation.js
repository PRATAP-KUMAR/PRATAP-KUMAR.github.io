const form = document.querySeelector("#contact-form");
const EMAIL_CASE_SENSITIVITY_CHECK = "Please enter the letters in your email as lower case";

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let email = form.elements["email"].value;
	let button = form.elements["button"];

	const errorMessage = document.createElement('p');
	errorMessage.textAlign = 'left';
	errorMessage.color = '#ff0000';
	errorMessage.fontSize = '32px';
	button.insertAdjacentElement('beforebegin', errSpan);


	if (email.value !== email.toLocaleLowerCase()) {
		errorMessage.innerText = EMAIL_CASE_SENSITIVITY_CHECK;
	} else {
		form.submit();
	}
});


