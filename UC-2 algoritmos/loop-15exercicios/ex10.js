function fibonacci() {
    let a = 0 // primeiro termo 
    let b = 1 // segundo termo
    let c // proximo termo 

    console.log('Os 10 primeiros termos da sequência de Fibonacci são:')

    console.log(a) // mstra o primeiro termo 0
    

    for (let i = 2; i <= 10; i++) { // terceiro termo até o décimo
        c = a + b // calcula o próximo termo
        console.log(c) // Mostra o próximo termo
        a = b // atualiza o primeiro termo
        b = c // aualiza o segundo termo
    }
}

fibonacci()