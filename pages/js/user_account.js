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
  container.style.display = 'flex';

  document.querySelector("#button-avancar").addEventListener('click', async function(){
    try {
      const account = JSON.parse(storedAccount);
      let email = account.email;

      const response = await fetch(`http://localhost:3003/api/store/userrequest?email=${email}`, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      });

      let content = await response.json();
      console.log(content.data[0])

      if (content.success) {
        if (document.querySelector("#senha").value == content.data[0]){

          let name = document.querySelector("#input-name").value
          
          const response = await fetch(`http://localhost:3003/api/store/userupdate?name=${name}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });

          let content = await response.json();

          if(content.success){
            let account = content.data;
            alert(content.message);
            localStorage.setItem('@account_logged', JSON.stringify(account));
          } else {
            alert(content.message)
          }
        } 
      } else {
        alert(content.message);
      }
    } catch (error) {
      alert('Falha ao conectar com o servidor.');
    }
  })
}
