const readlineSync = require('readline-sync')

function criarObjetoUsuario() {
    const nome = readlineSync.question("Qual e o seu nome? ")
    const idade = readlineSync.question("Qual e a sua idade? ")
    const profissao = readlineSync.question("Qual e a sua profissão? ")

    const usuario = {
        nome: nome,
        idade: Number(idade),
        profissao: profissao
    }

    console.log(usuario)
    console.log(typeof usuario)
}

criarObjetoUsuario()