
// Exercício 1:

// a) Declarar uma variável para armazenar um nome, sem valor
let nome

// b) Declar uma variável para armazenar uma idade, sem valor
let idade

// c) Imprimir na tela o tipo dessas variáveis com o typeof
console.log(typeof nome)
console.log(typeof idade)

// d)as variaveis foram declaradas mas nao contem valor underfined, 

// e) Pergunte ao usuário seu nome e sua idade, atribuindo os dois valores variáveis que criou
const nome = "Diulie"
const idade = 28



// g) imprimir na tela a mensagem: "Olá nome, você tem idade anos". 
console.log("Olá", nome, ", você tem ", idade, " anos.")




//Exercicio 3

let a = 10
let b = 25
let copoC = a // Armazena temporario valor de a

a = b // Atribui o valor de b para a
b = copoC // Atribui o valor, antes de a ser alterado para b

console.log("O novo valor de a é", a) // O novo valor  a é 25
console.log("O novo valor de b é", b) // O novo valor  b é 10