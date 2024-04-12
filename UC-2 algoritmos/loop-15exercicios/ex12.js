const readlineSync = require('readline-sync')

function jogoCaraOuCoroa() {
    const resultados = ['cara', 'coroa']
    const resultadoDesejado = readlineSync.question('Escolha cara ou coroa: ').toLowerCase()

    console.log('Jogando cara ou coroa...')

    while (true) {
        const resultado = resultados[Math.floor(Math.random() * resultados.length)] //gera um resultado aleatorio

        console.log('O resultado é:', resultado)

        if (resultado === resultadoDesejado) {
            console.log(`Parabéns! Você obteve o resultado desejado ${resultadoDesejado}.`)
            break // sai do loop se o usuorio conseguir o resultado 
        }
    }
}

jogoCaraOuCoroa()
