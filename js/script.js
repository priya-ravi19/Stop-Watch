const btnStart=document.querySelector(".start");
const btnStop=document.querySelector(".stop");
const btnReset=document.querySelector(".reset");
const clock=document.querySelector(".clock");
let hrs=min=sec=ms=0,startTimer;

btnStart.addEventListener("click",()=>{
    btnStart.classList.add("start-active");
    btnStop.classList.remove("stop-active");
    clock.classList.add("start-animation");
    startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateDisplay();
    },10);
});
btnStop.addEventListener("click",()=>{
    btnStart.classList.remove("start-active");
    btnStop.classList.add("stop-active");
    clock.classList.remove("start-animation");
    clearInterval(startTimer);
});
btnReset.addEventListener("click",()=>{
    hrs=min=sec=ms=0;
    btnStart.classList.remove("start-active");
    btnStop.classList.remove("stop-active");
    clock.classList.remove("start-animation");
    clearInterval(startTimer);
    updateDisplay();
});
function updateDisplay () {
    phrs=hrs<10?"0"+hrs:hrs;
    pmins=min<10?"0"+min:min;
    psec=sec<10?"0"+sec:sec;
    pmsec=ms<10?"0"+ms:ms;

    phrs=phrs.toString();
    pmins=pmins.toString();
    psec=psec.toString();
    pmsec=pmsec.toString();

    document.querySelectorAll(".hrs")[0].innerText=phrs[0];
    document.querySelectorAll(".hrs")[1].innerText=phrs[1];
    document.querySelectorAll(".mins")[0].innerText=pmins[0];
    document.querySelectorAll(".mins")[1].innerText=pmins[1];
    document.querySelectorAll(".secs")[0].innerText=psec[0];
    document.querySelectorAll(".secs")[1].innerText=psec[1];
    document.querySelectorAll(".msec")[0].innerText=pmsec[0];
    document.querySelectorAll(".msec")[1].innerText=pmsec[1];
};