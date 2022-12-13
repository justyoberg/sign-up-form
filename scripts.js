const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmation");
const mismatchMessage = document.querySelector(".pass-mismatch");

password.addEventListener("input", checkPasswordMatch);
confirmation.addEventListener("input", checkPasswordMatch);


function checkPasswordMatch() {
  if (password.value !== confirmation.value && confirmation.value) {
    password.classList.add("mismatch");
    confirmation.classList.add("mismatch");
    mismatchMessage.style.visibility = "visible";
  } else {
    password.classList.remove("mismatch");
    confirmation.classList.remove("mismatch");
    mismatchMessage.style.visibility = "hidden";
  }
}