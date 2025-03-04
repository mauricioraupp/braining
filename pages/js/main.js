const buttonFirst = document.querySelector('.first-button');
const buttonSecond = document.querySelector('.second-button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'pages/minigames.html';
});

buttonSecond.addEventListener('click', function() {
  const targetDiv = document.querySelector('.landing-containers');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
})