const formContainer = document.querySelector(".form-container");
const switchToLogin = document.querySelector(".switch-to-login");
const switchToSignup = document.querySelector(".switch-to-signup");

// Switch to Log In - Slide Left
switchToLogin.addEventListener("click", () => {
  formContainer.classList.add("show-login");
  
});

// Switch to Sign Up - Slide Right
switchToSignup.addEventListener("click", () => {
  formContainer.classList.remove("show-login");
});
