"use strict";
// director__info
// director__text__box
// close__text
// reveal__text

const directorBox = document.querySelectorAll(".director__box");
const directorTextBox = document.querySelectorAll(".director__text__box");
const revealBox = document.querySelectorAll(".reveal__text");
const closeBox = document.querySelectorAll(".close__text");
const form = document.querySelector("form");
const nameInput = document.querySelector(".name__input");
const errorMsg = document.querySelectorAll(".error__message");
const emailInput = document.querySelector(".email__input");
const companyInput = document.querySelector(".company__input");
const titleInput = document.querySelector(".title__input");
const messageInput = document.querySelector(".message__input");
const allInput = document.querySelectorAll(".input__field");

const displayDirectorInfo = function (e) {
  const openIcon = e.target.classList.contains("reveal__text");
  const closeIcon = e.target.classList.contains("close__text");

  if (openIcon) {
    const infoBox = e.target
      .closest(".director__box")
      .querySelector(".director__text__box");
    infoBox.style.opacity = "1";
    infoBox.style.visibility = "visible";
  }
  if (closeIcon) {
    const infoBox = e.target
      .closest(".director__box")
      .querySelector(".director__text__box");
    infoBox.style.opacity = "0";
    infoBox.style.visibility = "hidden";
  }
};
function validateForm() {
  // Validate each field
  const isNameValid = validateField(nameInput);
  const isEmailValid = validateField(emailInput);
  const isCompanyValid = validateField(companyInput);
  const isTitleValid = validateField(titleInput);
  const isMessageValid = validateField(messageInput);

  // Return true if all fields are valid
  return (
    isNameValid &&
    isEmailValid &&
    isCompanyValid &&
    isTitleValid &&
    isMessageValid
  );
}

function validateField(input) {
  const errorMsg = input.nextElementSibling;
  // console.log(errorMsg);
  console.log(input.value.trim());
  if (input.value.trim() === "") {
    console.log(input);
    errorMsg.style.opacity = "1";
    errorMsg.style.visibility = "visible";
    input.style.borderBottom = "0.1rem solid #f67e7e";

    input.style.setProperty("--placeholder-color", "#f67e7e");

    return false;
  } else {
    errorMsg.style.opacity = "0";
    errorMsg.style.visibility = "hidden";
    input.style.borderBottom = "0.1rem solid #79c8c7";
    input.style.setProperty("--placeholder-color", "#fff");

    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

directorBox.forEach((box) => {
  box.addEventListener("click", displayDirectorInfo);
});
