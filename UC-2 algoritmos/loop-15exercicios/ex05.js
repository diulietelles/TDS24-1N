//Calcular a média de 5 números: Utilize um loop for para ler 5 números do usuário e calcular a média dos números digitados. Mostre a média no console

const readlineSync = require('readline-sync')

let total = 0

for (let i = 0; i < 5; i++) { // loop que le os 5 numeros
    let numero = readlineSync.question('Digite um numero:') //pede um numero para o usuario e depois le o numero
    total += numero // diciona o numero para total
}

let media = total / 5 // calcula a media
console.log("A media dos numeros é:", media)
