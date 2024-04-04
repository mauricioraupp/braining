var mediaQuery = window.matchMedia('(max-width: 768px)');
const novoUl = document.querySelector('.novoUl');
const ignore = novoUl.children[4];
const ignore2 = novoUl.children[5];

if (mediaQuery.matches){
ignore.remove();
ignore2.remove();
}

const memoryGame = document.querySelector('#art-1');
const memoryGamePopup = document.querySelector('.memory-game-popup');
const closePopup = document.querySelector('#close-popup');

memoryGame.addEventListener('click', function() {
  setTimeout(() => {
    memoryGamePopup.style.opacity = '1';
    memoryGamePopup.style.zIndex = '1';
  },100)
});

closePopup.addEventListener('click', function() {
  memoryGamePopup.style.opacity = '0';
  memoryGamePopup.style.zIndex = '-1';
})