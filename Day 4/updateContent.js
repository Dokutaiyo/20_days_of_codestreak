const inputField = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const output = document.getElementById("output");

submitButton.addEventListener("click", function() {
    output.innerHTML = inputField.value;
});
