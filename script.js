const hr = document.getElementById('h1');
const min = document.getElementById('h2');
const sec = document.getElementById('h3');
let hours = parseInt(prompt("Enter Hours :"),10)
let minutes = parseInt(prompt("Enter Minutes :"),10);
let seconds = parseInt(prompt("Enter Seconds :"),10);

function updateTime(){
    seconds--;
                    //keep in mind that user can provide wring input as well so tackel that situation 
  if(seconds<0){
    seconds=59;
    minutes--;
  }
  if(minutes<0){
    minutes = 59;
    hours--;
  }
  if(hours<0){
    clearInterval(intervalId);
    hours = 0;
    minutes=0;
    seconds = 0;
  }
 
  hr.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}
let intervalId = setInterval(updateTime,1000);