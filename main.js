const buttonFirst = document.querySelector('.first-button');
const buttonSecond = document.querySelector('.second-button');
const buttonNav = document.querySelector('nav ul div button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'pages/minigames.html';
});
buttonNav.addEventListener('click', function() {
  window.location.href = 'pages/minigames.html';
});

buttonSecond.addEventListener('click', function() {
  const targetDiv = document.querySelector('.landing-containers');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
})