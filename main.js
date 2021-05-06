const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('#reset');
const miliSecondsField = document.querySelector('.miliseconds');
const secondsField = document.querySelector('.seconds');
const minutesField = document.querySelector('.minutes')

let activeStopFlagBtn = false;
let miliSeconds = null;
let seconds = null;
let minutes = null;

const clearField = (field) => {
  const zero = 0;
  const name = field;
  name = 0;
  name.textContent = (name)
}

const changeButton = () => {

  if(!activeStopFlagBtn) {
    btnStart.textContent = 'Stop';
    btnStart.classList.remove('green');
    btnStart.classList.add('red');
    activeStopFlagBtn = true;
  } else {
    btnStart.textContent = 'Start';
    btnStart.classList.remove('red');
    btnStart.classList.add('green');
    activeStopFlagBtn = false;
  }

  console.log(activeStopFlagBtn);
}


const startCount = () => {

  if(activeStopFlagBtn){
    ++miliSeconds;
    miliSecondsField.textContent = miliSeconds < 10 ? `0${miliSeconds}` : miliSeconds;
    if(miliSeconds === 99){
      ++seconds;
      miliSeconds = 0;
      secondsField.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
    if(seconds === 59){
      seconds = 0;
      secondsField.textContent = seconds < 10 ? `0${seconds}` : seconds;
      ++minutes;
      minutesField.textContent = (minutes < 10) ? `0${minutes}` : minutes;
    }
    console.log(miliSeconds);
    timeoutIndex = setTimeout(startCount, 10);
  }


}

const resetTime = () => {
  activeStopFlagBtn = false;
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;
  miliSecondsField.textContent = (miliSeconds < 10) ? `0${miliSeconds}` : miliSeconds;
  secondsField.textContent = (seconds < 10) ? `0${seconds}` : seconds;
  minutesField.textContent = (minutes < 10) ? `0${minutes}` : minutes;
  console.log('Reset values');

}

btnStart.addEventListener("click", changeButton);
btnStart.addEventListener("click", startCount);
btnReset.addEventListener("click", resetTime);