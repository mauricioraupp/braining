const cards = document.querySelectorAll(".card");
const backScreen = document.querySelector("#back-screen");
let documentTitle = document.title;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let levelMaxPoints;

let notify = document.createElement('div');



function showNotify() {
  if (documentTitle === "Jogo da memória: Nível 1") {
    notify.textContent = 'Nível 2 desbloqueado!';
  } else if (documentTitle === "Jogo da memória: Nível 2") {
    notify.textContent = 'Nível 3 desbloqueado!';
  } else if (documentTitle === "Jogo da memória: Nível 3") {
    notify.textContent = 'Nível 4 desbloqueado!';
  } else if (documentTitle === "Jogo da memória: Nível 4") {
    notify.textContent = 'Nível 5 desbloqueado!';
  } else if (documentTitle === "Jogo da memória: Nível 5") {
    notify.textContent = 'Parabéns! Você venceu todos os níveis!';
  }
  notify.style.fontFamily = 'Inter';
  notify.style.textAlign = 'center';
  notify.style.fontSize = '1.2rem';
  notify.style.backgroundColor = 'white';
  notify.style.padding = '2vh 2vw';
  notify.style.border = '1px solid black';
  notify.style.position = 'fixed';
  notify.style.top = '10%';
  notify.style.left = '50%';
  notify.style.transform = 'translate(-50%, -50%)';
  notify.style.transition = '0.5s'
  notify.style.zIndex = '2';

  document.body.appendChild(notify);

  setTimeout(function() {
      notify.style.opacity = '0';
      notify.style.userSelect = 'none';
  }, 3000);
};



(function checkDocument(){
  if (documentTitle === "Jogo da memória: Nível 1") {
    levelMaxPoints = 4;
  } else if (documentTitle === "Jogo da memória: Nível 2") {
    levelMaxPoints = 5;
  } else if (documentTitle === "Jogo da memória: Nível 3") {
    levelMaxPoints = 6;
  } else if (documentTitle === "Jogo da memória: Nível 4") {
    levelMaxPoints = 7;
  } else if (documentTitle === "Jogo da memória: Nível 5") {
    levelMaxPoints = 8;
  }
})();

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;

  checkForMatch();
};

function checkForMatch(){
  let isMatch = firstCard.dataset.animal === secondCard.dataset.animal;
  isMatch ? disableCards() : unflipCards();
};

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  scoreCounter();
  resetBoard();
};

function scoreCounter(){
  score += 1;
  if (score === levelMaxPoints) {
    setTimeout(() => {
      scoreAppear();
      showNotify();
    }, 1000);
  }
};

function scoreAppear(){
  backScreen.style.opacity = "1";
  backScreen.style.zIndex = "1";
};

function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 800);
};

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard));



const buttonBack = document.querySelector('#button-back');
const buttonAgain = document.querySelector('#button-again');

buttonBack.addEventListener('click', function() {
  window.location.href = '../../pages/minigames.html';
});

buttonAgain.addEventListener('click', function() {
  location.reload();
});



