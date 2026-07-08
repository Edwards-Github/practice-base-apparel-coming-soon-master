const email = document.querySelector(".email");
const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // errors
  const errorMessage =
    document.querySelector(".email-container").nextElementSibling;
  const errorIcon = document.querySelector(".error-icon");

  // reset display to None
  errorMessage.style.display = "none";
  errorIcon.style.display = "none";
  email.classList.remove("error-email");

  // check validity of email
  if (!email.checkValidity() || !emailPattern.test(emailValue)) {
    // add the error icon and message
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    email.classList.add("error-email");
  }
});
