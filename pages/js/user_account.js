document.addEventListener('DOMContentLoaded', () => {
  const storedAccount = localStorage.getItem('@account_logged');
  
  if (storedAccount) {
    const account = JSON.parse(storedAccount);
    document.querySelector("#profile-pic").setAttribute("src", `../src/public/uploads/${account.profile_pic}`)
    document.querySelector("#input-name").value = account.name;
    document.querySelector("#input-email").value = account.email;
    document.querySelector("#input-date").value = account.date;
  } else {
    console.error('Nenhuma conta está logada.');
  }
});

const uploadButton = document.querySelector("#upload-image");
const changePic = document.querySelector("#change-pic");

changePic.addEventListener('click', function(){
  disableScroll()
  container1.style.display = 'flex';
})

uploadButton.addEventListener('click', async function(event){
  event.preventDefault()

  const form = document.querySelector("#form-pic");
  let email = account.email;
  let dadosForm = new FormData(form);

  dadosForm.append('email', email);

  const response = await fetch('http://localhost:3003/api/user/uploadpic', {
    method: "POST",
    body: dadosForm,
  });

  let content = await response.json();

  if (content.success) {
    alert(content.message);
    account.profile_pic = content.data;
    localStorage.setItem('@account_logged', JSON.stringify(account));
    container1.style.display = 'none';
    enableScroll()
  } else {
    alert(content.message);
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

const container1 = document.querySelector("#section1");
const container2 = document.querySelector("#section2");
const svg = document.querySelectorAll(".lucide-x");

svg.forEach((click) => {
  click.addEventListener('click', function(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    enableScroll()
  })
})

const storedAccount = localStorage.getItem('@account_logged');
const account = JSON.parse(storedAccount);
function disableScroll() { 
  document.body.classList.add("remove-scrolling"); 
}
function enableScroll() { 
  document.body.classList.remove("remove-scrolling"); 
}

const buttonName = document.getElementById("name-change");

buttonName.onclick = function(event) {
  event.preventDefault();
  if (document.querySelector("#input-name").value == account.name){
    alert("Nenhuma alteração identificada")
  } else {
    disableScroll()
    container2.style.display = 'flex';
  
    const buttonAvancar = document.querySelector("#button-avancar");
    
    buttonAvancar.onclick = async function() {
      try {
        let email = account.email;
        let password = document.getElementById("senha").value;
  
        const response = await fetch(`http://localhost:3003/api/user/request?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-type": "application/json;charset=UTF-8" },
        });
  
        let content = await response.json();
  
        if (content.success) {
          let name = document.querySelector("#input-name").value;
  
          const updateResponse = await fetch(`http://localhost:3003/api/user/nameupdate?name=${name}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });
  
          let updateContent = await updateResponse.json();
  
          if(updateContent.success){
            alert(updateContent.message);
            account.name = name;
            localStorage.setItem('@account_logged', JSON.stringify(account));
            container2.style.display = 'none';
            document.getElementById("senha").value = ""
            enableScroll()
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

const buttonDate = document.getElementById("date-change");

buttonDate.onclick = function(event) {
  event.preventDefault();
  if (document.querySelector("#input-date").value == account.date){
    alert("Nenhuma alteração identificada")
  } else {
    disableScroll()
    container2.style.display = 'flex';
  
    const buttonAvancar = document.querySelector("#button-avancar");
    
    buttonAvancar.onclick = async function() {
      try {
        let email = account.email;
        let password = document.getElementById("senha").value;
  
        const response = await fetch(`http://localhost:3003/api/user/request?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-type": "application/json;charset=UTF-8" },
        });
  
        let content = await response.json();
  
        if (content.success) {
          let date = document.querySelector("#input-date").value;
  
          const updateResponse = await fetch(`http://localhost:3003/api/user/dateupdate?date=${date}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });
  
          let updateContent = await updateResponse.json();
  
          if(updateContent.success){
            alert(updateContent.message);
            account.date = date;
            localStorage.setItem('@account_logged', JSON.stringify(account));
            container2.style.display = 'none';
            document.getElementById("senha").value = ""
            enableScroll()
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

const buttonEmail = document.getElementById("email-change");

buttonEmail.onclick = function(event) {
  event.preventDefault();
  if (document.querySelector("#input-email").value == account.email){
    alert("Nenhuma alteração identificada")
  } else {
    disableScroll()
    container2.style.display = 'flex';
  
    const buttonAvancar = document.querySelector("#button-avancar");
    
    buttonAvancar.onclick = async function() {
      try {
        let email = account.email;
        let password = document.getElementById("senha").value;
  
        const response = await fetch(`http://localhost:3003/api/user/request?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-type": "application/json;charset=UTF-8" },
        });
  
        let content = await response.json();
  
        if (content.success) {
          let newEmail = document.querySelector("#input-email").value;
  
          const updateResponse = await fetch(`http://localhost:3003/api/user/emailupdate?newEmail=${newEmail}&secondEmail=${newEmail}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });
  
          let updateContent = await updateResponse.json();
  
          if(updateContent.success){
            alert(updateContent.message);
            account.email = newEmail;
            localStorage.setItem('@account_logged', JSON.stringify(account));
            container2.style.display = 'none';
            document.getElementById("senha").value = ""
            enableScroll()
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

const buttonPassword = document.getElementById("password-change");

buttonPassword.onclick = function(event) {
  event.preventDefault();
  if (document.querySelector("#input-password").value == ""){
    alert("Campo não preenchido")
  } else {
    disableScroll()
    container2.style.display = 'flex';
  
    const buttonAvancar = document.querySelector("#button-avancar");
    
    buttonAvancar.onclick = async function() {
      try {
        let email = account.email;
        let password = document.getElementById("senha").value;
  
        const response = await fetch(`http://localhost:3003/api/user/request?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-type": "application/json;charset=UTF-8" },
        });
  
        let content = await response.json();
  
        if (content.success) {
          let newPassword = document.querySelector("#input-password").value;
  
          const updateResponse = await fetch(`http://localhost:3003/api/user/passwordupdate?newPassword=${newPassword}&email=${email}`, {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
          });
  
          let updateContent = await updateResponse.json();
  
          if(updateContent.success){
            alert(updateContent.message);
            container2.style.display = 'none';
            document.getElementById("senha").value = ""
            enableScroll()
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
