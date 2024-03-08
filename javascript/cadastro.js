const mediaQuery = window.matchMedia("(max-width: 768px)");
const apagar = document.querySelector("#apagar");

if (mediaQuery.matches){
  apagar.innerHTML = "Nascimento"
};



let selectorDay = document.querySelector("#selector-day");

for (let i = 1; i <= 31; i++) {
    let option1 = document.createElement("option");
    
    option1.value = i;
    option1.text = i;
    
    selectorDay.appendChild(option1);
}

let selectorMonth = document.querySelector("#selector-month");
let lista23 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

for (let i = 1; i <= 12; i++) {
    let option2 = document.createElement("option");
    
    option2.value = lista23[0];
    option2.text = lista23[0];
    lista23.shift(1);
    
    selectorMonth.appendChild(option2);
}

let selectorYear = document.querySelector("#selector-year");

for (let i = 2024; i >= 1930; i--) {
    let option3 = document.createElement("option");
    
    option3.value = i;
    option3.text = i;
    
    selectorYear.appendChild(option3);
}
