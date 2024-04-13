const readlineSync = require('readline-sync')

function jogoCaraOuCoroa() {
    const resultados = ['cara', 'coroa']
    let resultadoDesejado = readlineSync.question('Escolha cara ou coroa: ').toLowerCase()

    console.log('cara ou coroa')
    
    while (true) {
        const resultado = resultados[Math.floor(Math.random() * resultados.length)] // gera um resultado aleatório

        console.log(`Resultado: ${resultado}`)

        if (resultado === resultadoDesejado) {
            console.log(`Parabéns! Você obteve o resultado desejado ${resultadoDesejado}.`)
            break; // sai do loop se o usuário conseguir o resultado 
        } else {
            resultadoDesejado = readlineSync.question('Escolha cara ou coroa: ').toLowerCase()
        }
    }
}

jogoCaraOuCoroa()






