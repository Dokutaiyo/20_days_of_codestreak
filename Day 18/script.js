const timeDiv = document.getElementById("time");
const alarmTimeInput = document.getElementById("alarm-time");
const alarmDateInput = document.getElementById("alarm-date");
const setAlarmBtn = document.getElementById("set-alarm-btn");
const alarmMessageDiv = document.getElementById("alarm-message");
setInterval(() => {
  const currentTime = new Date();
  timeDiv.innerHTML = currentTime.toLocaleTimeString();
}, 1000);
setAlarmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const alarmTime = alarmTimeInput.value;
  const alarmDate = alarmDateInput.value;
  const alarmDateTime = new Date(alarmDate + " " + alarmTime);
  const currentTime = new Date(); 
  if (alarmDateTime < currentTime) {
    alarmDateTime.setDate(alarmDateTime.getDate() + 1);
  }
  setTimeout(() => {
    alarmMessageDiv.innerHTML = "Time to Wake Up!";
  }, alarmDateTime - currentTime);
});