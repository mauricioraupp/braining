const buttonFirst = document.querySelector('.first-button');
const buttonNav = document.querySelector('nav ul div button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});
buttonNav.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

