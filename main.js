const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('#reset');
const miliSecondsField = document.querySelector('.miliseconds');
const secondsField = document.querySelector('.seconds');
const minutesField = document.querySelector('.minutes')

let activeStopFlagBtn = false;
let miliSeconds = null;
let seconds = null;

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
    if(miliSeconds === 59){
      ++seconds;
      miliSeconds = 0;
      secondsField.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
    console.log(miliSeconds);
    timeoutIndex = setTimeout(startCount, 1000);
  }


}

btnStart.addEventListener("click", changeButton);
btnStart.addEventListener("click", startCount);


btnReset.addEventListener('click', function(){
  console.log(`Wywołano funkcję timeoutIndex`);
  activeStopFlagBtn = false;
})