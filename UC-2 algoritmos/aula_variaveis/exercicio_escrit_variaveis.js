
// Exercício 1:

// a) Declarar uma variável para armazenar um nome, sem valor.
let nome

// b) Declar uma variável para armazenar uma idade, sem valor.
let idade

// c) Imprimir na tela o tipo dessas variáveis com o typeof
console.log(typeof nome)// Será impresso: "undefined"
console.log(typeof idade)// Será impresso: "undefined"

/* d) Reflita: por que esse tipo foi impresso?
    O tipo "undefined" foi impresso porque as variáveis foram declaradas,
   mas não receberam nenhum valor. Quando a variável é declarada, mas não
   tem  um valor, seu tipo é "undefined". */

// e) Pergunte ao usuário seu nome e sua idade, atribuindo os dois valores variáveis que criou
nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")

// f) imprima na tela o tipo dessas variáveis.
console.log(typeof nome)// Será impresso: "string"
console.log(typeof idade)// Será impresso: "string"

/* após atribuir valores às variáveis, seus tipos mudaram.
   O tipo de 'nome' é 'string'
   O tipo de 'idade' também é 'string' mesmo que o usuário insira um número,
   porque a função prompt sempre retorna uma string. */

// g) imprimir na tela a mensagem: "Olá nome, você tem idade anos". 
console.log("Olá", nome, ", você tem ", idade, " anos.")


//Exercicio 2- fazendo as perguntas
let pergunta1 = "Você está usando uma roupa azul hoje?"
let pergunta2 = "Você gosta de sushi?"
let pergunta3 = "Você já visitou outro país?"

// armazenando as respostas
let resposta1 = "SIM"
let resposta2 = "NÃO"
let resposta3 = "SIM"

// Imprimindo as perguntas e respostas
console.log(typeof pergunta1, typeof resposta1)
console.log(typeof pergunta2, typeof resposta2)
console.log(typeof pergunta3, typeof resposta3)


pergunta1 = prompt( "Você está usando uma roupa azul hoje?")
console.log("SIM")
pergunta2 = prompt( "Você gosta de sushi?")
console.log("NÃO")
pergunta1 = prompt( "Você já visitou outro país?")
console.log("SIM")

//Exercicio 3

let a = 10
let b = 25
let temp = a // Armazenando temporariamente o valor de a

a = b // Atribuindo o valor de b para a
b = temp // Atribuindo o valor temporário (antes de "a" ser alterado) para "b"

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
