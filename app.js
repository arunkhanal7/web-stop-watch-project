const time_el=document.querySelector('.container','.timer');
const start_btn=document.getElementById('start');
const stop_btn= document.getElementById('stop')
const reset_btn= document.getElementById('reset')

//second ra interval sanga calculation related hune vayeko le lets initialize them
let seconds=0;
let interval= null;
function start(){
    if (interval){
        return
    }
    interval=setInterval(timer,1000)
}
//event listener
start_btn.addEventListener("click",start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

function timer(){
    seconds++;
    //format of time
    let hour= Math.floor(seconds/3600);
    let mins=Math.floor((seconds-(seconds/3600))/60);
    let secs=seconds % 60;

    if(secs<10){
        secs="0"+secs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(hour<10){
        hour="0"+hour;
    }
    time_el.innerText=hour+':'+mins+':'+secs //'${hour}:${mins}:${secs}';
}


function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}