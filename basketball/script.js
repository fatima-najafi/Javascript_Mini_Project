let homeCount = 0;
let guestCount = 0;
let guestFoulCounter = 0;
let homeFoulCounter = 0;
let homeResult = document.getElementById('home');
let guestResult = document.getElementById('guest');
const homeBtn1 = document.getElementById('home-btn-1');
const homeBtn2 = document.getElementById('home-btn-2');
const homeBtn3 = document.getElementById('home-btn-3');
const guestBtn1 = document.getElementById('guest-btn-1');
const guestBtn2 = document.getElementById('guest-btn-2');
const guestBtn3 = document.getElementById('guest-btn-3');
const reset = document.getElementById('reset');
const homeFouls = document.getElementById('home-fouls-btn');
const guestFouls = document.getElementById('guest-fouls-btn');
const home_f_result = document.getElementById('home-fouls');
const guest_f_result = document.getElementById('guest-fouls');

//Home Fouls
homeFouls.addEventListener('click', () => {
  homeFoulCounter++;
  home_f_result.textContent = homeFoulCounter;
});
// Guest Fouls
guestFouls.addEventListener('click', () => {
  guestFoulCounter++;
  guest_f_result.textContent = guestFoulCounter;
});

// home container
homeBtn1.addEventListener('click', () => {
  homeCount++;
  homeResult.innerText = homeCount;
});
homeBtn2.addEventListener('click', () => {
  homeCount += 2;
  homeResult.innerText = homeCount;
});
homeBtn3.addEventListener('click', () => {
  homeCount += 3;
  homeResult.innerText = homeCount;
});
// guest container
guestBtn1.addEventListener('click', () => {
  guestCount++;
  guestResult.innerText = guestCount;
});
guestBtn2.addEventListener('click', () => {
  guestCount += 2;
  guestResult.innerText = guestCount;
});
guestBtn3.addEventListener('click', () => {
  guestCount += 3;
  guestResult.innerText = guestCount;
});

reset.addEventListener('click', () => {
  homeCount = 0;
  guestCount = 0;
  homeFoulCounter = 0;
  guestFoulCounter = 0;
  homeResult.innerText = homeCount;
  guestResult.innerText = guestCount;
  home_f_result.innerText = homeFoulCounter;
  guest_f_result.innerText = guestFoulCounter;
});


//save score
const save = document.getElementById('save');
const homeScore = document.getElementById('home-score');
const guestScore= document.getElementById('guest-score')
save.addEventListener('click', () => {
  homeScore.innerText += ` ${homeResult.innerText}` + '- ';
  guestScore.innerText += ` ${guestResult.innerText}` + '-  ';
  
});

//Start btn implementation:
const buttonsToToggle = document.querySelectorAll('.container-btn button');
const startButton = document.getElementById('start');

// Function to disable buttons
function disableButtons() {
  buttonsToToggle.forEach(button => {
    button.classList.add('disabled');
  });
}

// Function to enable buttons
function enableButtons() {
  buttonsToToggle.forEach(button => {
    button.classList.remove('disabled');
  });
}

// Disable buttons initially
disableButtons();

// Add event listener to the start button to enable buttons
startButton.addEventListener('click', enableButtons);
