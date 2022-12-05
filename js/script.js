const signUpButton = document.getElementById('showSignUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton && signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton && signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});