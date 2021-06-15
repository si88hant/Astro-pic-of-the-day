
let minutes = 25;
let seconds = "00";


 function template(){
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
 }


 function start(){
      
    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer , 60000);
    let seconds_interval = setInterval(secondsTimer , 1000);

    function minutesTimer(){
        minutes = minutes - 1;

        document.getElementById("minutes").innerHTML = minutes;

        if(minutes <= 0){
            minutes = 25;
        }
     }
     function secondsTimer(){
        seconds = seconds - 1;

        document.getElementById("seconds").innerHTML = seconds;

    
        if(seconds <= 0){
            if(minutes == 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML =  "Take a break";

                document.getElementById("done").classList.add("show_message");
            }
            seconds = 60;
        }
         
     }
 }

 document.getElementsByClassName("resetbt").addEventListener('click',reset);
 function reset(){

    minutes = 24;
    seconds = "59";

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


 }

//now disabling the start and reset button once you click on start so that you can't run it twice,thrice...
const disable_start_button = document.getElementById("st");

disable_start_button.disabled = true;


const disable_reset_button = document.getElementById("rst");

disable_reset_button.disabled = true;
