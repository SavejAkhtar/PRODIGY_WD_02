let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
}

function lap() {
  if (isRunning) {
    const lapTime = display.innerText;
    const lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}
