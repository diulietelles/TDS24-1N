// Importando o módulo readline
const readline = require('readline')

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuario que insira sua idade
rl.question('Qual o seu nome? ', (nome) => {
    //  Exibindo o nome  inserido pelo usuario
    console.log('Seu nome é:', nome)

    //Fechando a interface da leitura
    rl.close()
})