// Crie uma função para verificar se um valor é Truthy
console.log("");

function truthyVerify(element) {
  if (element) {
    return "É true porra";
  } else {
    return "É farso caraí";
  }
}

console.log(truthyVerify());
console.log(truthyVerify(1));

// Crie uma função matemática que retorne o perímetro de um quadro
// lembrando: perímetro é a soma dos quatro lados do quadrado
console.log("");

function perimetroQuadrado(x) {
  x = 4 * x;
  return x;
}

console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
console.log("");

function returnName(nome, sobrenome) {
  return `Olá ${nome} ${sobrenome}, prazer.`;
}

console.log(returnName("Yuri", "Barbosa"));

// Crie uma função que verifica se um número é par
console.log("");

function parVerify(n) {
  if (n % 2 == 0) {
    return "É par";
  } else {
    return "É impar";
  }
}

console.log(parVerify(1));
console.log(parVerify("1"));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
console.log("");

function typeVerify(e) {
  return typeof e;
}

console.log(typeVerify(true));
console.log(typeVerify(0));
console.log(typeVerify(""));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", () => {
  console.log("Yuri Barbosa");
});

// Corrija o erro abaixo
console.log("");

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
