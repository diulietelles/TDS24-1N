// Importando o módulo readline
const readline = require('readline')

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuario que insira dois numeros 
rl.question('Digite o primeiro número: ', (numero1) => {
    rl.question('Digite o segundo número: ', (numero2) => {
        // Somando os dois números e convertendo para number
        const soma = Number(numero1) + Number(numero2)
        console.log('A soma dos números é:', soma)

        rl.close();
    })
})