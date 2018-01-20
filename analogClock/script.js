const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("hour: " + hr + " minute: " + min + " second: " + sec);

let hrPosition = (hr*(360/12))+(min*(360/60)/12);
let minPosition = (min*(360/60))+(sec*(360/60)/60) ;
let secPosition = sec*(360/60);


function runTheClock() {
  //hour arm moves 360 degrees over 12 hrs, so 30 degrees in one hour or 30 dgrees in 3600 seconds
  hrPosition= hrPosition +(30/3600);
  // minute arm moves to the degree of one second every 60 seconds
  minPosition= minPosition +(1/60*6);
  // second arm moves one second every second and therefore 360 degrees
  // are divided by 60 to get the angle of the arm at each second
  secPosition= secPosition +6;


  HOURHAND.style.transform = "rotate("+ hrPosition + "deg)"
  MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)"
  SECONDHAND.style.transform = "rotate("+ secPosition + "deg)"
}

var interval = setInterval(runTheClock, 1000);
