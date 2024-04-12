//Ler 10 números do usuário e mostrar o maior e o menor número digitado: Utilize um loop for para ler 10 números do usuário e encontrar o maior e o menor número digitado. Mostre os resultados no console.

const readlineSync = require('readline-sync')
let primeiroNumero = readlineSync.question('Digite o 1 numero: ')
let menorNumero = primeiroNumero 
let maiorNumero = primeiroNumero // maior numero com o primeiro número do usuario


for (let i = 1; i < 10; i++) { // le os 9 numeros restantes
    let numero = readlineSync.question(`Digite o ${i + 1} numero: `) //solicita ao usuario digite um nmero, mostra qual numero da iteracao atual está sendo solicitado
    if (numero < menorNumero) { // verifica se o número  é menor que o menor do atual
        menorNumero = numero // Se sim, atualiza o menor 
    }

    if (numero > maiorNumero) { // verifica se o numero lido é maior que o maior do atual
        maiorNumero = numero // Se sim, atualiza o maior numero
    }
}
console.log("O menor número digitado é:", menorNumero); // menor numero
console.log("O maior número digitado é:", maiorNumero); // maior numero
