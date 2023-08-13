let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById("panel");
let int = null;



function startTimer(){

    if(int !== null)
    {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);

}

function stopTimer(){

    clearInterval(int);

}

function resetTimer() {

    clearInterval(int);
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000"

}

function displayTimer(){
    milliseconds += 10
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60)
        {
            seconds = 0;
            minutes++;
            if(minutes === 60)
            {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours<10 ? "0" + hours : hours;
    let m = minutes<10 ? "0" + minutes : minutes;
    let s = seconds<10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds<10 
        ? "00" + milliseconds 
        : milliseconds<100
        ? "0" + milliseconds
        :milliseconds ;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}