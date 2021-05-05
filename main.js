const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('#reset');
const milisecondsField = document.querySelector('.miliseconds');
const secondsField = document.querySelector('.seconds');
const minutesField = document.querySelector('.minutes')

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

let counter = 0;

const countTime = () => {
  if(minutes <= 2) {

    console.log(seconds++);
    secondsField.textContent = (seconds < 10) ? `0${seconds}` : seconds;

    if(seconds > 3){
      seconds = 0;
      minutes++;
      minutesField.textContent = minutes < 10 ? `0${minutes}` : minutes;
    }

    if(miliseconds === 1000){
      seconds++;
      miliseconds = 0;
      console.log(seconds);

      secondsField.textContent = seconds;
    }

    // miliseconds++;
    // // console.log(`ms: ${miliseconds}`);


    // if(miliseconds === 1000) {
    //   seconds++;
    //   miliseconds = 0;
    //   milisecondsField.textContent = miliseconds;
    //   console.log(`[s: ${seconds}]`);

    // }

    // if(seconds === 60) {
    //   minutes++;
    //   seconds = 0;
    //   miliseconds = 0;
    //   secondsField.textContent = seconds;
    //   console.log(`[s: ${minutes}]`);

    // }

    setTimeout(countTime, 1000);
  }
}

countTime();