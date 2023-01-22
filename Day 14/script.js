// Get the buttons and display elements
const buttons = document.querySelectorAll("#buttons button");
const display = document.getElementById("display");

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the button's value
    const value = this.innerText;
    // Get the current display value
    const current = display.value;

    // Handle the button click based on its value
    if (value === "C") {
      display.value = "";
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      display.value += ` ${value} `;
    } else if (value === "=") {
      display.value = eval(current);
    } else {
      display.value += value;
    }
  });
});
