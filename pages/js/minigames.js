const API_URL = window.location.hostname.includes("braining.site")
? "https://www.braining.site"
: "http://localhost:3003";

const memoryGame = document.querySelector('#art-1');
const puzzleGame = document.querySelector('#art-2');
const gamesPopup = document.querySelector('.games-popup');
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
    document.querySelector("#game-name").textContent = "Jogo da memória";
    disableScroll();
    const account = JSON.parse(storedAccount);
    let userEmail = account.email;

    const response = await fetch(`${API_URL}/api/games/minigame1/request?userEmail=${userEmail}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    let content = await response.json();

    if (content.success) {
      switch (content.data.rows[0].level) {
        case 5:
          levels.level5.setAttribute('href', '../games/memoryGame/html/levelFive.html');
          levels.level5.classList.remove("disabled");
          levelImages.level5Img.classList.remove("padlock");
        case 4:
          levels.level4.setAttribute('href', '../games/memoryGame/html/levelFour.html');
          levels.level4.classList.remove("disabled");
          levelImages.level4Img.classList.remove("padlock");
        case 3:
          levels.level3.setAttribute('href', '../games/memoryGame/html/levelThree.html');
          levels.level3.classList.remove("disabled");
          levelImages.level3Img.classList.remove("padlock");
        case 2:
          levels.level2.setAttribute('href', '../games/memoryGame/html/levelTwo.html');
          levels.level2.classList.remove("disabled");
          levelImages.level2Img.classList.remove("padlock");
        case 1:
          levels.level1.setAttribute('href', '../games/memoryGame/html/levelOne.html');
          levels.level1.classList.remove("disabled");
          levelImages.level1Img.classList.remove("padlock");
          break;
      }

      gamesPopup.style.opacity = '1';
      gamesPopup.style.zIndex = '1';
    } else {
      alert(content.message);
    }
  }
});

puzzleGame.addEventListener('click', async function() {
  if (!storedAccount) {
    alert("Nenhuma conta conectada");
  } else {
    document.querySelector("#game-name").textContent = "Quebra-cabeça";
    disableScroll();
    const account = JSON.parse(storedAccount);
    let userEmail = account.email;

    const response = await fetch(`${API_URL}/api/games/minigame2/request?userEmail=${userEmail}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    let content = await response.json();

    if (content.success) {
      switch (content.data.rows[0].level) {
        case 5:
          levels.level5.setAttribute('href', '../../games/puzzleGame/html/levelFive.html');
          levels.level5.classList.remove("disabled");
          levelImages.level5Img.classList.remove("padlock");
        case 4:
          levels.level4.setAttribute('href', '../../games/puzzleGame/html/levelFour.html');
          levels.level4.classList.remove("disabled");
          levelImages.level4Img.classList.remove("padlock");
        case 3:
          levels.level3.setAttribute('href', '../../games/puzzleGame/html/levelThree.html');
          levels.level3.classList.remove("disabled");
          levelImages.level3Img.classList.remove("padlock");
        case 2:
          levels.level2.setAttribute('href', '../../games/puzzleGame/html/levelTwo.html');
          levels.level2.classList.remove("disabled");
          levelImages.level2Img.classList.remove("padlock");
        case 1:
          levels.level1.setAttribute('href', '../../games/puzzleGame/html/levelOne.html');
          levels.level1.classList.remove("disabled");
          levelImages.level1Img.classList.remove("padlock");
          break;
      }

      gamesPopup.style.opacity = '1';
      gamesPopup.style.zIndex = '1';
    } else {
      alert(content.message);
    }
  }
});

closePopup.addEventListener('click', function() {
  gamesPopup.style.opacity = '0';
  gamesPopup.style.zIndex = '-1';
  for (let i = 1; i <= 5; i++) {
    levels[`level${i}`].removeAttribute('href');
    levels[`level${i}`].classList.add("disabled");
    levelImages[`level${i}Img`].classList.add("padlock");
  }
  enableScroll();
});