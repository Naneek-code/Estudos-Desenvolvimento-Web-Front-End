// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
document.write(
  `<h1>Element no class have.</h1> <p class="Class__Element">element as have class</p>`
);
const elementSelector = document.querySelector(".Class__Element").innerHTML;
console.log(elementSelector);

// Retorne a linguagem do navegador
const idiomaNavegador = navigator.language;
console.log(idiomaNavegador);

// Retorne a largura da janela
console.log(window.innerWidth);
