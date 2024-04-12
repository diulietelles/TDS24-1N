const readlineSync = require('readline-sync');

function adivinharNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1 //gera um numero aleatorio entre 1 e 100
    let tentativas = 0 // inicia o contador

    console.log('Tente adivinhar o número entre 1 e 100.')

    while (true) { // loop infinito ate acertar
        const palpite = readlineSync.question('Qual é o seu palpite?') // solicita ao usuário um numero aleatorio para palpite

        if (palpite < numeroAleatorio) {
            console.log('Tente um número maior.')
        } else if (palpite > numeroAleatorio) {
            console.log('Tente um número menor.')
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
            break // sai do loop se o usuario acertar o número
        }

        tentativas++// Incrementa o contador de tentativas
    }
}

adivinharNumero() 
