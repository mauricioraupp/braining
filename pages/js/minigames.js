const memoryGame = document.querySelector('#art-1');
const memoryGamePopup = document.querySelector('.memory-game-popup');
const closePopup = document.querySelector('#close-popup');
const storedAccount = localStorage.getItem('@account_logged');
const minigame1Info = localStorage.getItem('@minigame1_info');

memoryGame.addEventListener('click', async function() {
  if (storedAccount) {
    const account = JSON.parse(storedAccount);
    const gameInfo = minigame1Info ? JSON.parse(minigame1Info) : null;
    let userId = account.id;
    let minigame1Level = localStorage.getItem('level') !== null ? localStorage.getItem('level') : 1;

    let data = { userId, minigame1Level };

    const response = await fetch('http://localhost:3003/api/store/minigame1task', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      setAccount(content.data);
      localStorage.setItem('@account_logged', JSON.stringify(content.data));
      localStorage.setItem('@minigame1_info', "");
      console.log(content.data);
      alert(content.message);
      window.location.href = './user_account.html';
    } else {
      alert(content.message);
    }

    memoryGamePopup.style.opacity = '1';
    memoryGamePopup.style.zIndex = '1';
  }
});

closePopup.addEventListener('click', function() {
  memoryGamePopup.style.opacity = '0';
  memoryGamePopup.style.zIndex = '-1';
})