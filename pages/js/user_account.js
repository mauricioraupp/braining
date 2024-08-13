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
});








const container = document.querySelector(".container");
const svg = document.querySelector(".lucide-x");

svg.addEventListener('click', function(){
  container.style.display = 'none';
})

const buttonName = document.getElementById("name-change");
const buttonDate = document.getElementById("date-change");
const buttonEmail = document.getElementById("email-change");
const buttonPassword = document.getElementById("password-change");

buttonName.onclick = async function(event) {
  event.preventDefault();

  if (!storedAccount) {
    alert("Nenhuma conta conectada");
  } else {
    const account = JSON.parse(storedAccount);
    let email = account.email;
    let data = { email };

    try {
      const response = await fetch('http://localhost:3003/api/store/usertask', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
      });

      let content = await response.json();

      if (content.success) {
        container.style.display = 'flex';

        buttonPassword.onclick = async function(event){
          event.preventDefault
          
          try {
            const response = await fetch('http://localhost:3003/api/store/usertask', {
              method: "POST",
              headers: { "Content-type": "application/json;charset=UTF-8" },
              body: JSON.stringify(data)
            });

          let content = await response.json();

          if (content.success) {
            alert(content.message);
            window.location.href = './login.html'
          } else {
            alert(content.message);
          }
        } catch (error) {
          alert('Falha ao conectar com o servidor.');
        }

        }
      } else {
        alert(content.message);
      }
    } catch (error) {
      alert('Falha ao conectar com o servidor.');
    }
  }
}