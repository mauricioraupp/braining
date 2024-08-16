const memoryGame = document.querySelector('#art-1');
const memoryGamePopup = document.querySelector('.memory-game-popup');
const closePopup = document.querySelector('#close-popup');
const storedAccount = localStorage.getItem('@account_logged');

const levels = {};
const levelImages = {};

for (let i = 1; i <= 5; i++) {
  levels[`level${i}`] = document.querySelector(`.level-${i}`);
  levelImages[`level${i}Img`] = document.querySelector(`.padlock-img${i}`);
}

memoryGame.addEventListener('click', async function() {
  if (!storedAccount) {
    alert("Nenhuma conta conectada");
  } else {
    const account = JSON.parse(storedAccount);
    let userEmail = account.email;

    const response = await fetch(`http://localhost:3003/api/store/minigame1/request?userEmail=${userEmail}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    let content = await response.json();

    if (content.success) {
      switch (content.data[0].level) {
        case 5:
          levels.level5.setAttribute('href', '../memoryGameAtt/html/levelFive.html');
          levels.level5.classList.remove("disabled");
          levelImages.level5Img.classList.remove("padlock");
        case 4:
          levels.level4.setAttribute('href', '../memoryGameAtt/html/levelFour.html');
          levels.level4.classList.remove("disabled");
          levelImages.level4Img.classList.remove("padlock");
        case 3:
          levels.level3.setAttribute('href', '../memoryGameAtt/html/levelThree.html');
          levels.level3.classList.remove("disabled");
          levelImages.level3Img.classList.remove("padlock");
        case 2:
          levels.level2.setAttribute('href', '../memoryGameAtt/html/levelTwo.html');
          levels.level2.classList.remove("disabled");
          levelImages.level2Img.classList.remove("padlock");
        case 1:
          levels.level1.setAttribute('href', '../memoryGameAtt/html/levelOne.html');
          levels.level1.classList.remove("disabled");
          levelImages.level1Img.classList.remove("padlock");
          break;
      }

      memoryGamePopup.style.opacity = '1';
      memoryGamePopup.style.zIndex = '1';
    } else {
      alert(content.message);
    }
  }
});

closePopup.addEventListener('click', function() {
  memoryGamePopup.style.opacity = '0';
  memoryGamePopup.style.zIndex = '-1';
});