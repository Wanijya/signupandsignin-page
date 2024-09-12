// const signinPage = document.querySelector('#signin-page');
// const signupPage = document.querySelector('#signup-page');
// const showSignupPageLink = document.querySelector('#show-signup-page');
// const showSigninPageLink = document.querySelector('#show-signin-page');

// // Show Sign Up page
// showSignupPageLink.onclick = function(e) {
//     e.preventDefault(); // Prevent the default link behavior
//     signinPage.style.display = 'none';
//     signupPage.style.display = 'block';
// };

// // Show Sign In page
// showSigninPageLink.onclick = function(e) {
//     e.preventDefault(); // Prevent the default link behavior
//     signupPage.style.display = 'none';
//     signinPage.style.display = 'block';
// };

// // Optional: Initial state
// signupPage.style.display = 'none'; // Start with Sign In page visible

// Get the elements using querySelector
const signinPage = document.querySelector('#signin-page');
const signupPage = document.querySelector('#signup-page');
const showSignupPageLink = document.querySelector('#show-signup-page');
const showSigninPageLink = document.querySelector('#show-signin-page');

// Function to show the Sign Up page with animation
function showSignupPage() {
    gsap.to(signinPage, { opacity: 0, duration: 0.5, onComplete: () => {
        signinPage.style.display = 'none';
        signupPage.style.display = 'block';
        gsap.fromTo(signupPage, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
}

// Function to show the Sign In page with animation
function showSigninPage() {
    gsap.to(signupPage, { opacity: 0, duration: 0.5, onComplete: () => {
        signupPage.style.display = 'none';
        signinPage.style.display = 'block';
        gsap.fromTo(signinPage, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
}

// Set initial state
signupPage.style.display = 'none'; // Start with Sign In page visible

// Event listeners for the links
showSignupPageLink.onclick = function(e) {
    e.preventDefault(); // Prevent the default link behavior
    showSignupPage();
};

showSigninPageLink.onclick = function(e) {
    e.preventDefault(); // Prevent the default link behavior
    showSigninPage();
};