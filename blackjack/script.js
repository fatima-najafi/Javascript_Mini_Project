let cards = [];
let player = {
  name: 'Fatima',
  chips: 150,
};
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

const messageEl = document.getElementById('message-el');
const sumEl = document.querySelector('#sum-el');
const cardsEl = document.querySelector('#cards-el');
const playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards:';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = 'Do you want to draw new card!🙂';
  } else if (sum === 21) {
    message = "Wow, you'v got blackjack!🥳";

    hasBlackjack = true;
  } else if (sum > 21) {
    message = 'Your are out of the game😭';

    isAlive = false;
  }
  console.log(hasBlackjack);
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();

    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
