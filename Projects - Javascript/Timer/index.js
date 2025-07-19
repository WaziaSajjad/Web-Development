var DMIN = document.getElementById('DMIN');
var DSEC = document.getElementById('DSEC');
var thirtySec = document.getElementById('thirtySec');
var oneMin = document.getElementById('oneMin');
var fiveMin = document.getElementById('fiveMin');
var startBtn = document.getElementById('startBtn');
var pauseBtn = document.getElementById('pauseBtn');
var resetBtn = document.getElementById('resetBtn');

var interval;
var totalSeconds = 0;
var isRunning = false;

function updateDisplay() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    
    DMIN.textContent = minutes.toString().padStart(2, '0');
    DSEC.textContent = seconds.toString().padStart(2, '0');
}

function timer() {
    if (totalSeconds <= 0) {
        clearInterval(interval);
        isRunning = false;
        startBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
        return;
    }
    
    totalSeconds--;
    updateDisplay();
}

thirtySec.addEventListener('click', function() {
    if (!isRunning) {
        totalSeconds += 30;
        updateDisplay();
    }
});

oneMin.addEventListener('click', function() {
    if (!isRunning) {
        totalSeconds += 60;
        updateDisplay();
    }
});

fiveMin.addEventListener('click', function() {
    if (!isRunning) {
        totalSeconds += 300;
        updateDisplay();
    }
});

startBtn.addEventListener('click', function() {
    if (totalSeconds > 0 && !isRunning) {
        isRunning = true;
        interval = setInterval(timer, 1000);
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }
});

pauseBtn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        pauseBtn.style.display = 'none';
        startBtn.style.display = 'inline-block';
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(interval);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
});

updateDisplay();