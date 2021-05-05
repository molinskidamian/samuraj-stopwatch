const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('#reset');
const seconds = document.querySelector('.seconds');
const miliseconds = document.querySelector('.miliseconds');

let watchstopCount = false; // Stoped
let secondsValue = 0;
let counter = 0;


btnStart.addEventListener('click', () => {
  const countTime = () => {
    if (watchstopCount) {
      counter++;
      console.log(counter);
      if(counter === 60){
        secondsValue++;
        counter = 0;
        seconds.textContent = secondsValue < 10 ? (secondsValue = `0${secondsValue}`) : secondsValue;

        }
        miliseconds.textContent = counter < 10 ? counter = `0${counter}` : counter;
    }
  };

  //  Change colors buttons
  if(!watchstopCount) {
    btnStart.textContent = 'Start';
    btnStart.classList.add("green");
    btnStart.classList.remove("red");
    intervelIndex = setInterval(countTime, 100);
    watchstopCount = true;
  } else {
    btnStart.textContent = 'Stop';
    btnStart.classList.add('red');
    btnStart.classList.remove('green');
    clearInterval(intervelIndex);
    watchstopCount = false;
  }

  console.log('uruchomienie setinterval');

});

// btnStart.addEventListener('click', () => {
//   console.log(btnStop)
// });
