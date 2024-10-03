let intervalId = null;

document.getElementById('startBtn').addEventListener('click', function() {
    if (!intervalId) {
        intervalId = setInterval(playAlarm, 3000); // 300000 milliseconds = 5 minutes
        playAlarm(); // Play immediately when the alarm starts
    }
});

document.getElementById('stopBtn').addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

function playAlarm() {
    let alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
}
