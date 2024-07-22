document.addEventListener('DOMContentLoaded', () => {
	const createAccountBtn = document.getElementById('createAccountBtn');
	const signInBtn = document.getElementById('signInBtn');
	const signUpBtn = document.getElementById('signUpBtn');
	const cont = document.querySelector('.cont');
  
	// Toggle to show sign-up form
	createAccountBtn.addEventListener('click', () => {
	  cont.classList.add('s-signup');
	});
  
	// Implement Sign In logic
	signInBtn.addEventListener('click', () => {
	  alert('Sign In functionality needs to be implemented.');
	});
  
	// Implement Sign Up logic
	signUpBtn.addEventListener('click', () => {
	  alert('Sign Up functionality needs to be implemented.');
	});
  
	// Toggle between sign-in and sign-up forms
	document.querySelector('.img-btn').addEventListener('click', () => {
	  cont.classList.toggle('s-signup');
	});
  });
  
  createAccountBtn.addEventListener('click', () => {
	console.log('Create Account button clicked');
	cont.classList.add('s-signup');
  });
  
  document.querySelector('.img-btn').addEventListener('click', () => {
	console.log('Image Button clicked');
	cont.classList.toggle('s-signup');
  });
  