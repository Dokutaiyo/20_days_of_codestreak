// Get the canvas and toolbar elements
const canvas = document.getElementById("painting");
const toolbar = document.getElementById("toolbar");
// Get the context of the canvas
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Set the default tool to "draw"
let currentTool = "draw";
// Add event listeners to the toolbar buttons
toolbar.addEventListener("click", function(event) {
  if (event.target.classList.contains("tool-btn")) {
    currentTool = event.target.id.split("-")[0];
  }
});
// Add event listener to the canvas
canvas.addEventListener("mousedown", function(event) {
  if (currentTool === "draw") {
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
    canvas.addEventListener("mousemove", draw);
  } else if (currentTool === "erase") {
    ctx.clearRect(event.clientX, event.clientY, 20, 20);
    canvas.addEventListener("mousemove", erase);
  } else if (currentTool === "fill") {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});
canvas.addEventListener("mouseup", function() {
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mousemove", erase);
});
// Draw function
function draw(event) {
  ctx.lineTo(event.clientX, event.clientY);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
}
// Erase function
function erase(event) {
  ctx.clearRect(event.clientX, event.clientY, 20, 20);
}