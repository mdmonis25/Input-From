let form = document.getElementById("survey-form");
let submitButton = document.getElementById("submit-button");
let resetButton = document.getElementById("reset-button");
let popup = document.getElementById("popup");
let popupContent = document.getElementById("popup-content");
let closePopupButton = document.getElementById("close-popup");
let submittedData = document.getElementById("submitted-data");

submitButton.addEventListener("click", () => {
  let formData = new FormData(form);
  let result = "Submitted Data:\n";
  formData.forEach((value, key) => {
    result += `${key}: ${value}\n`;
  });
  submittedData.innerText = result;
  popup.style.display = "block";
});

resetButton.addEventListener("click", () => {
  form.reset();
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  form.reset();
});
