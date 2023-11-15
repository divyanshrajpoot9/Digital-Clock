const hourRef = document.getElementById('hour');
const minuteRef = document.getElementById('minutes');
const secondRef = document.getElementById('seconds');
const ampmRef = document.getElementById('ampm');

// This part of the code checks if the current hour (h) is greater than 12. If it is, it subtracts 12 from the hour and sets the ampm variable to "PM". This is done to convert the 24-hour format to the 12-hour format.
function runTheClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if(h > 12){
    h = h - 12;
    ampm = "PM";
  }

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

hourRef.innerText = h;
minuteRef.innerText = m;
secondRef.innerText = s;
ampmRef.innerText = ampm;

setTimeout(() => {
  runTheClock();
}, 1000);

}

runTheClock();