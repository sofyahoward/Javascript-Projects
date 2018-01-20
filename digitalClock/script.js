function currentTime() {

  var date = new Date;
  var hrs = date.getHours()
  var mins = date.getMinutes()
  var sec = date.getSeconds()

  hrs = checkTime(hrs);
  mins = checkTime(mins);
  sec = checkTime(sec);

  document.getElementById('txt').innerHTML = (hrs + ":" + mins + ":" + sec);
  var time = setTimeout(currentTime, 500);

  function checkTime(i) {
    if (i<10) {
      i = "0" + i
    };
      return i;
    }
}
