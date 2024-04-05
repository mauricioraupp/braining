const buttonFirst = document.querySelector('.first-button');
const buttonNav = document.querySelector('.minijogos-first-button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});
buttonNav.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});

var mediaQuery = window.matchMedia("(max-width: 1280px)");
const novoUl = document.querySelector(".novoUl");
const ignore = novoUl.children[4];
const ignore2 = novoUl.children[5];
const ignore3 = novoUl.children[6];

if (mediaQuery.matches){
ignore.remove();
ignore2.remove();
ignore3.remove();
}