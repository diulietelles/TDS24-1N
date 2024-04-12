//Mostrar a sequência de Fibonacci até o 10º termo: Utilize um loop for para calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console. "A sequência de Fibonacci é uma sequência numérica proposta pelo matemático Leonardo Pisa, mais conhecido como Fibonacci. Ela começa com os dois primeiros termos sendo 1 e 1, e a partir daí, cada termo subsequente é a soma dos dois anterioes.


const readlineSync = require('readline-sync')

function fibonacci() {
    const termo = readlineSync.question('Digite o termo da sequência de Fibonacci: ') 
    let penultimo = 0 //inicia o penultimo termo da sequência como 0
    let ultimo = 1 //inicia o ultimo termo da sequencia como 1
    let numero; //declara a variavel que vai armazenar o termo atual da sequencia

    if (termo <= 2) { // verifica se o termo é menor ou igual a 2
        numero = termo - 1 // Se sim, o termo é o próprio número -1
    } else {
        for (let i = 3; i <= termo; i++) { // loop para calcular os termos da proxima sequencia
            numero = ultimo + penultimo // calcula o prpximo termo da sequencia
            penultimo = ultimo // atualiza o penultimo termo
            ultimo = numero // atualiza o ultimo termo
        }
    }

    console.log("O termo da sequência de Fibonacci é:", numero)
}

fibonacci()





