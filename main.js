const buttonFirst = document.querySelector('.first-button');
const buttonNav = document.querySelector('.minijogos-first-button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});
buttonNav.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}