// Desafio 1

// Define o gênero do filme e o preço do ingresso
let generoFilme = "fantasia"
let precoIngresso = 10

// Define lanchinho que será comprado com base no gênero do filme
let lanchinho

switch (generoFilme) {
  case "fantasia":
    lanchinho = "pipoca";
    break;
  case "comédia":
    lanchinho = "refrigerante";
    break;
  case "ação":
    lanchinho = "nachos";
    break;
  default:
    lanchinho = "snacks variados";
    break;
}

// Imprimindo o lanchinho e a mensagem "Bom filme!"
console.log("Qual snack que você quer comprar?")
console.log("Bom filme! Aproveite o seu " + lanchinho)

