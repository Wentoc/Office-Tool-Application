/**
 * Copyright(C)2021 Encrypt Team
 * By Wentoq Technologies
 */
 function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
  
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
    }
  
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
  
    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
  }
  
  clock();
// function showTime(){
//    var date = new Date();

//    var hour = date.getHours();
//    var minutes = date.getMinutes();
//    var seconds = date.getSeconds();
//    var session = "AM";

//    if(hour == 0){
//        hour = 12;
//    }

//    if(hour > 12){
//        hour -= 12;
//        session = "PM";
//    }

//    hour = (hour < 10) ? "0" + hour : hour;
//    minutes = (minutes < 10) ? "0" + minutes : minutes;
//    seconds = (seconds < 10) ? "0" + seconds : seconds;

//    var time = hour + ":" + minutes + ":" + seconds + " " + session;

//    document.getElementById("MyClockDisplay").innerText = time;
//    document.getElementById("MyClockDisplay").textContent = time;

//    // Set Time Out
//    setTimeout(showTime, 1000);

// }

