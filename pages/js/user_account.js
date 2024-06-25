const buttonNav = document.querySelector('nav ul div button');
const storedAccount = localStorage.getItem('@account_logged');

buttonNav.addEventListener('click', function() {
  window.location.href = '../pages/minigames.html';
});

document.addEventListener('DOMContentLoaded', () => {
  
  if (storedAccount) {
    const account = JSON.parse(storedAccount);
    document.querySelector("#input-name").value = account.name;
    document.querySelector("#input-email").value = account.email;
    document.querySelector("#input-date").value = account.date;
  } else {
    console.error('Nenhuma conta está logada.');
  }
});

const logoutButton = document.querySelector("#button-sair")

logoutButton.addEventListener('click', function(){
  if (confirm("Tem certeza que deseja sair da conta?") == true){
    try {
      if (storedAccount){
        localStorage.removeItem('@account_logged')
        alert("Conta desconectada")
        window.location.href = '.././index.html'
      } else {
        throw new Error()
      }
    } catch(err) {
      alert("Nenhuma conta logada")
    }
  }
})