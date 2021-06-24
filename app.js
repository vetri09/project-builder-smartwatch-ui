setInterval(time, 1000);
function time()
{
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var day = d.getDay();
  if(hours<10){
      hours=`0${hours}`;
  }
  if(minutes<10){
    minutes=`0${minutes}`;
    }
  document.getElementById('time').innerText = hours+":"+minutes;
  document.getElementById('time2').innerText = hours+":"+minutes;
  if(day==0){
      document.getElementById("day").innerText="Sunday";
  }
  else if(day==1){
    document.getElementById("day").innerText="Monday";
  }
  else if(day==2){
    document.getElementById("day").innerText="Tuesday";
  }
  else if(day==3){
    document.getElementById("day").innerText="Wednesday";
  }
  else if(day==4){
    document.getElementById("day").innerText="Thursday";
  }
  else if(day==5){
    document.getElementById("day").innerText="Friday";
  }
  else{
    document.getElementById("day").innerText="Saturday";
  }
}