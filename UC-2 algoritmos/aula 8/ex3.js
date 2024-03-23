// Importando o módulo readline
const readline = require('readline')

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuario que insira sua idade
rl.question('Qual a sua idade? ', (idade) => {
    //  Exibindo a idade inserida pelo usuario
    console.log('Sua idade é:', idade)
    // Verificando se a idade é maior ou igual a 18
    if (idade >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }

    rl.close()

    //Fechando a interface da leitura
    rl.close()
})