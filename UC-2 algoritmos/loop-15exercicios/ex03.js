//Mostrar a tabuada do 5: Utilize um loop for para imprimir a tabuada do 5 (de 5 x 1 até 5 x 10) no console
let i = 1
// inicia um loop que vai de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Para cada número de 1 a 10, multip por 5
    let resultado = i * 5
    console.log(i + " x 5 = " + resultado)
}


// usuario escolhe um numero para ser multiplicado:

const leitor = require("readline-sync")
const numero = leitor.questionInt('Digite um numero para a tabela de multiplicacao:')

for(let i = 1; i <= 10; i++) {
    // Para cada iteração do loop, imprime no console a multiplicação do número digitado pelo usuário (numero) pelo número atual do loop (i), junto com uma mensagem indicando a operação realizada
    console.log(`${numero} x ${i} = ${numero * i}`)
}