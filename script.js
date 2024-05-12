const element = document.getElementById("results");
const error_box= document.getElementById("error-box")
const error_message= document.getElementById("error-message")
count=1
filled1=false
filled2=false  

function hide_error_msg(){
  error_box.style.animation = 'error_delete_animate 1s';
  setTimeout(function () {
    error_box.style.display = "none";
    error_box.style.animation ='error_call_animate 1s';
  }, 800);
}

function show_error_msg(message){
    error_message.textContent = message;
    error_box.style.display ="block";
    setTimeout(hide_error_msg,4000);
}

function calculateLove() {
  if (filled1 &&  filled2 === true){  
    const randomValue = Math.floor(Math.random() * 100);
    element.textContent = randomValue +"%";

    if (count < 15) {
        document.getElementById("love-button").style.cursor="progress"
        setTimeout(calculateLove, 100);
        count++
    }
    else{
        document.getElementById("love-button").style.cursor="pointer"
        element.textContent = randomValue+"%";
        count=0
    }
   }
  
   else if(!filled1){
    show_error_msg("Plz, Fill Your Name")
   }

   else if(!filled2){
    show_error_msg("Plz, Fill Your Patner's Name")
    error_box.style.display ="block"
   }
   
}

document.getElementById("person1_input").addEventListener("input", function() {
    filled1=true
});

document.getElementById("person2_input").addEventListener("input", function() {
    filled2=true
});








