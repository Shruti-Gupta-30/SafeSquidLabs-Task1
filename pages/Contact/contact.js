function toggleMenu(event) {
	event.preventDefault();

	let slinks = document.querySelector("#slinks");

	if (slinks.style.opacity == "100") {
		slinks.style.opacity = "0";
	} else {
		slinks.style.opacity = "100";
	}
}

let smenu = document.querySelector("#menu");
smenu.addEventListener("click", toggleMenu);

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const button = document.getElementsByTagName("button")[0];
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	event.preventDefault();
	console.log("submit");
	validateInputs();
}

function validateInputs() {
	//get the values submitted by the user
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim().toLowerCase();
	const subjectValue = subject.value.trim();
	const messageValue = message.value.trim();

	if (firstNameValue === "") {
		//show error
		//add error class
		setErrorFor(firstName, "First Name cannot be blank");
	} else {
		//add success class
		setSuccessFor(firstName);
	}
	if (lastNameValue === "") {
		//show error
		//add error class
		setErrorFor(lastName, "Last Name cannot be blank");
	} else {
		//add success class
		setSuccessFor(lastName);
	}

	if (emailValue === "") {
		//show error
		//add error class
		setErrorFor(email, "Email addresss cannot be blank");
	} else if (!isEmailValid(emailValue)) {
		setErrorFor(email, "Please enter a valid email address");
	} else {
		//add success class
		setSuccessFor(email);
	}

	if (subjectValue === "") {
		//show error
		//add error class
		setErrorFor(subject, "Subject cannot be blank");
	} else if (subjectValue.length < 10) {
		console.log(subjectValue.length);
		setErrorFor(subject, "Cannot be less than 10 characters");
	} else {
		//add success class
		setSuccessFor(subject);
	}

	if (messageValue === "") {
		//show error
		//add error class
		setErrorFor(message, "Message cannot be blank");
	} else if (messageValue.length > 500) {
		setErrorFor(message, "Cannot be more than 500 characters");
	} else {
		//add success class
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement.parentElement.parentElement;
	const small = formControl.getElementsByTagName("small")[0];

	//add  inside small
	small.innerText = message;

	//add error class
	formControl.className += " error";
}
function setSuccessFor(input) {
	const formControl = input.parentElement.parentElement.parentElement;
	formControl.className += " success";
}

function isEmailValid(email) {
	//Regex for email returning true if email address is valid
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
