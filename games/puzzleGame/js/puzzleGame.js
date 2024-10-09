const backScreen = document.querySelector("#back-screen");
let documentTitle = document.title;
let score = 0;
let levelMaxPoints;
let dragId;
let dropId;

document.querySelector("#button-back").addEventListener('click', function(){
  window.location.href = '../../../pages/minigames.html';
});

(function checkDocument() {
  if (documentTitle === "Quebra-cabeça: Nível 1") {
    levelMaxPoints = 4;
  } else if (documentTitle === "Quebra-cabeça: Nível 2" || documentTitle === "Quebra-cabeça: Nível 3" || documentTitle === "Quebra-cabeça: Nível 4") {
    levelMaxPoints = 9;
  } else if (documentTitle === "Quebra-cabeça: Nível 5") {
    levelMaxPoints = 16;
  }
})();

let notify = document.createElement('div');

function showNotify() {
  notify.textContent = `Nível ${unlockedLevel} desbloqueado!`
  if (levelMaxPoints == 16) {
    notify.textContent = 'Parabéns! Você venceu todos os níveis!'
  }
  notify.style.fontFamily = 'Inter'
  notify.style.textAlign = 'center'
  notify.style.fontSize = '1.2rem'
  notify.style.backgroundColor = 'white'
  notify.style.padding = '2vh 2vw'
  notify.style.border = '1px solid black'
  notify.style.position = 'fixed'
  notify.style.top = '10%'
  notify.style.left = '50%'
  notify.style.transform = 'translate(-50%, -50%)'
  notify.style.transition = '0.5s'
  notify.style.zIndex = '2'

  document.body.appendChild(notify)

  setTimeout(function() {
    notify.style.opacity = '0'
    notify.style.userSelect = 'none'
  }, 2000)
}



function drag(event){
  dragId = event.target.id

  event.dataTransfer.setData('text', dragId);
}

function allowDrop(event){
  event.preventDefault();
}

function drop(event){
  event.preventDefault();
  dropId = event.target.id
  let data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
  checkForMatch()
}

onload = function(){
  let parent = document.getElementById('drag');
  let frag = document.createDocumentFragment();
  while(parent.children.length){
    frag.appendChild(parent.children[Math.floor
    (Math.random() * parent.children.length)])
  }
  parent.appendChild(frag);
}



function checkForMatch(){
  let isMatch = dragId.split("block")[1] === dropId.split("box")[1];
  if(isMatch){
    score = 0
    scoreCounter()
  }
};

let unlockedLevel = 1
function checkCurrentLevel(documentName){
  if(documentName == "Quebra-cabeça: Nível 1"){
    unlockedLevel = 2
  } else if (documentName == "Quebra-cabeça: Nível 2"){
    unlockedLevel = 3
  } else if (documentName == "Quebra-cabeça: Nível 3"){
    unlockedLevel = 4
  } else {
    unlockedLevel = 5
  }
}

async function scoreCounter(){
  for (let i = 1; i < (levelMaxPoints + 1); i++){
    if (document.querySelector(`#box${i}`).contains(document.querySelector(`#block${i}`))){
      score += 1;
      if (score === levelMaxPoints) {
        checkCurrentLevel(documentTitle);
        showNotify();
        scoreAppear();
      }
    }
  }
};

async function scoreAppear(){
  backScreen.style.opacity = "1";
  backScreen.style.zIndex = "1";
  backScreen.style.display = "flex"
  await requisition()
};

const storedAccount = localStorage.getItem('@account_logged');
const account = JSON.parse(storedAccount);
let userEmail = account.email;

async function requisition() {
  const response = await fetch(`http://localhost:3003/api/games/minigame2/update?unlockedLevel=${unlockedLevel}&userEmail=${userEmail}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });

  // let content = await response.json();
}