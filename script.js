const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const newsletterContainer = document.querySelector(".newsletter-container");
const successMessage = document.querySelector(".newsletter-success");
const emailSpan = document.querySelector(".newsletter-success span");
const dismissButton = document.querySelector(".dismiss-button");
const errorMessage = document.querySelector(".error-message");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (!validateEmail(email)) {
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
    return;
  }

  emailInput.classList.remove("error");
  errorMessage.style.display = "none";
  emailSpan.textContent = email;
  newsletterContainer.style.display = "none";
  successMessage.style.display = "grid";
});

dismissButton.addEventListener("click", () => {
  newsletterContainer.style.display = "grid";
  successMessage.style.display = "none";
  form.reset();
});

// Remove error state when user starts typing
emailInput.addEventListener("input", () => {
  emailInput.classList.remove("error");
  errorMessage.style.display = "none";
});
