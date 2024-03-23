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

    //Fechando a interface da leitura
    rl.close()
})