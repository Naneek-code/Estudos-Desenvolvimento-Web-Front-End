// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const aboutMe = {
  nome: "Yuri",
  sobrenome: "Barbosa",
  idade: "23",
  hobby: "sexo com casadas",
  rico: false,
  herdeiro() {
    if (this.rico) {
      return "sou herdeiro";
    } else {
      return "não sou herdeiro";
    }
  },
};

console.log(
  `Sou ${aboutMe.nome} ${aboutMe.sobrenome} tenho ${
    aboutMe.idade
  } anos, gosto de ${aboutMe.hobby}, e ${aboutMe.herdeiro()}.`
);

// Crie um método no objeto anterior, que mostre o seu nome completo
aboutMe.fullName = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(aboutMe.fullName());

// Modifique o valor da propriedade preço para 3000
const product = {
  name: "PC gaymer do dudu",
  price: 2000.0,
  moeda: "R$",
  marca: "pc da xuxa",
};

product.price = 3000.0;

console.log(product.price);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  event() {
    if (homem) {
      return "Au au";
    } else {
      return `"Silencio"`;
    }
  },
};

console.log(
  `Tenho um ${cachorro.raca} ${cachorro.cor}, ele tem ${cachorro.idade} anos. Quando passa alguém, ele late.`
);
let homem = true;
console.log(cachorro.event());
