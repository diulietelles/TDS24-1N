//Calcular a fatorial de um número: Utilize um loop for para calcular a fatorial de um número digitado pelo usuário. Mostre o resultado no console.
const readlineSync = require('readline-sync')

let numero = readlineSync.question('Digite um numero para calcular sua fatorial: ')

let fatorial = 1

for (let i = 1; i <= numero; i++) { // loop de 1 ate o numero digitado
    fatorial *= i // multiplica o valor atual de fatorial pelo valor atual de i *=
}

console.log(`A fatorial de ${numero} é:`, fatorial)