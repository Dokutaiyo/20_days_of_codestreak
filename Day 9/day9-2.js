import { sayHello } from './file1.js';

// get button and add event listener
const runExampleButton = document.getElementById("run-example");
runExampleButton.addEventListener("click", () => {
    sayHello("John Doe");
});
