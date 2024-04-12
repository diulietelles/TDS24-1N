//encontrar vogais
const readlineSync = require('readline-sync') // instala o readline-sync

function encontrarVogais(palavra) { //// Função para encontrar vogais na palavra
    const vogais = ['a', 'e', 'i', 'o', 'u'] // criando arrays

    const palavraLowerCase = palavra.toLowerCase() //tolower para garantir que tenha as vogais qu eu quero que apareca

    // Divide a palavra entre os caracteres e depois  filtro para encontrar as vogais
    const vogaisEncontradas = palavraLowerCase.split('').filter(letra => vogais.includes(letra))
    // agpra retorna como  string
    return vogaisEncontradas.join('')
}
const palavra = readlineSync.question("Digite uma palavra: ")// Solicita ao usuario que forneca uma palavra

// Chama a função encontrarVogais p reportar e encontrar a vogal
const vogaisEncontradas = encontrarVogais(palavra)
console.log("Vogais encontradas:", vogaisEncontradas)


// encontrar consoantes:
const readlineSync = require('readline-sync') 

function encontrarConsoantes(palavraC) { //// Função para encontrar vogais na palavra
    const consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z','w'] // criando arrays

    const palavraLowerCase = palavraC.toLowerCase() 

    // Divide a palavra entre os caracteres e depois  filtro para encontrar as vogais e a '=>' verifica se a letra esta na lista
    const consoantesEncontradas = palavraLowerCase.split('').filter(letra => consoantes.includes(letra))
    // agpra retorna como  string
    return consoantesEncontradas.join('')
}

// Solicita ao usuario que forneca uma palavra
const palavraC = readlineSync.question("Digite uma palavra: ")

// Chama a função encontrarVogais p reportar e encontrar a vogal
const consoantesEncontradas = encontrarVogais(palavraC)
console.log("Vogais encontradas:", consoantesEncontradas)






