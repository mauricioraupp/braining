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

const inputName = document.getElementById("input-name");
const inputDate = document.getElementById("input-date");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const buttonName = document.getElementById("name-change");
const buttonDate = document.getElementById("date-change");
const buttonEmail = document.getElementById("email-change");
const buttonPassword = document.getElementById("password-change");



button.onclick = async function(event) {
  event.preventDefault();
  validatePassword();

  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  let name = document.getElementById("input-name").value;
  let date = document.getElementById("input-date").value;
  let email = document.getElementById("input-email").value;
  let passwordValue = document.getElementById("input-password").value;

  let data = {
    name,
    date,
    email,
    password: passwordValue
  };

  try {
    const response = await fetch('http://localhost:3003/api/store/signuptask', {
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
};