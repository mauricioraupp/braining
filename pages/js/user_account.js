const buttonNav = document.querySelector('nav ul div button');

buttonNav.addEventListener('click', function() {
  window.location.href = '../pages/minigames.html';
});



document.addEventListener('DOMContentLoaded', () => {
  const storedAccount = localStorage.getItem('@account_logged');
  
  if (storedAccount) {
    const account = JSON.parse(storedAccount);
    document.querySelector("#input-name").value = account.name;
    document.querySelector("#input-email").value = account.email;
    document.querySelector("#input-date").value = account.date;
  } else {
    console.error('Nenhuma conta está logada.');
  }
});



const logoutButton = document.querySelector("#button-sair");

logoutButton.addEventListener('click', function(){
  if (confirm("Tem certeza que deseja sair da conta?")) {
    const storedAccount = localStorage.getItem('@account_logged');
    if (storedAccount){
      localStorage.removeItem('@account_logged');
      alert("Conta desconectada");
      window.location.href = '../index.html';
    } else {
      alert("Nenhuma conta logada");
    }
  }
});



const container = document.querySelector(".container");
const svg = document.querySelector(".lucide-x");

svg.addEventListener('click', function(){
  container.style.display = 'none';
});



const buttonName = document.getElementById("name-change");

buttonName.onclick = function(event) {
  event.preventDefault();
  const storedAccount = localStorage.getItem('@account_logged');
  const accountParse = JSON.parse(storedAccount);
  if (document.querySelector("#input-name").value == accountParse.name){
    alert("Nenhuma alteração identificada")
  } else {
    container.style.display = 'flex';
  
    const buttonAvancar = document.querySelector("#button-avancar");
    
    buttonAvancar.onclick = async function() {
      try {
        const storedAccount = localStorage.getItem('@account_logged');
        const account = JSON.parse(storedAccount);
        let email = account.email;
        let password = document.getElementById("senha").value;
  
        const response = await fetch(`http://localhost:3003/api/store/userrequest?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-type": "application/json;charset=UTF-8" },
        });
  
        let content = await response.json();
  
        if (content.success) {
          let name = document.querySelector("#input-name").value;
  
          const updateResponse = await fetch(`http://localhost:3003/api/store/userupdate?name=${name}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });
  
          let updateContent = await updateResponse.json();
  
          if(updateContent.success){
            alert(updateContent.message);
            account.name = name;
            localStorage.setItem('@account_logged', JSON.stringify(account));
          } else {
            alert(updateContent.message);
          }
        } else {
          alert(content.message);
        }
      } catch (error) {
        alert('Falha ao conectar com o servidor.');
      }
    }
  }
}
