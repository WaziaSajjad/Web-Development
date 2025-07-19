var DMIN = document.getElementById('DMIN');
var DSEC = document.getElementById('DSEC');
var DMS = document.getElementById('DMS');
var StartBtn = document.getElementById('startBtn');
var PauseBtn = document.getElementById('pauseBtn');
var ResetBtn = document.getElementById('resetBtn');

var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer() {
    msec++;
    DMS.innerHTML = msec < 10 ? "0" + msec : msec;

    if (msec >= 100) {
        sec++;
        msec = 0;
        DSEC.innerHTML = sec < 10 ? "0" + sec : sec;
    }

    if (sec >= 60) {
        min++;
        sec = 0;
        DSEC.innerHTML = "00";
        DMIN.innerHTML = min < 10 ? "0" + min : min;
    }
}

function start() {
    console.log("Start button clicked");

    interval = setInterval(timer, 10);
    StartBtn.disabled = true;
    PauseBtn.disabled = false;
    ResetBtn.disabled = false;
}

function pause() {
    clearInterval(interval);
    StartBtn.disabled = false;
    PauseBtn.disabled = true;
    ResetBtn.disabled = false;
}

function reset() {
    pause();
    min = 0;
    sec = 0;
    msec = 0;
    DMIN.innerHTML = "00";
    DSEC.innerHTML = "00";
    DMS.innerHTML = "00";
    StartBtn.disabled = false;
    PauseBtn.disabled = true;
    ResetBtn.disabled = true;
}
