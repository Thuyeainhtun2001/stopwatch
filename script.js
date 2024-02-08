// display timer
let timer = document.getElementById("timer");
let startTime;
let elapsedTime =0;
let interval;
let isRan = false;
// start function
function start(){
   if(!isRan){
    isRan = true;
    startTime = Date.now() - elapsedTime; //now date
    interval = setInterval(updateTime,10); //sat tite a chain
   }
}
// updateTime function
function updateTime(){
    elapsedTime = Date.now() - startTime; //different time
    updatDisplay();
}
// updatDisplay function
function updatDisplay(){
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / 1000 /60) % 60);
    let hours = Math.floor((elapsedTime / 1000 / 60) / 24);
    // to upsload to output
    timer.innerHTML = (hours < 10 ? "0"+hours : hours)
    +":"+(minutes < 10 ? "0"+minutes : minutes)
    +":"+(seconds < 10 ? "0"+seconds : seconds)
    +":"+(miliseconds < 10 ? "0"+miliseconds : miliseconds)
    ;
}
// for stop function
function stop(){
    if(isRan){
        isRan = false;
        clearInterval(interval);
    }
}
// for reset function
function reset(){
    stop();
    elapsedTime = 0;
    updatDisplay();
}