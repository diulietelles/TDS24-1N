// *** Variáveis

// 1- Simples: Crie uma variável que armazene a tua idade e exiba no console.
let idade = 25
console.log(idade)

// 2- Desafio: Crie duas variáveis que armazenem a cidade e o país onde você mora, concatene-as e exiba o resultado no console.
let cidade = 'Toscana'
let pais = 'Italia'
let localizacao = cidade + ', ' + pais
console.log(localizacao)

// *** Loops 
// 1- Simples: Use um loop for para exibir os números de 5 a 15 no console.
for (let i = 5; i <= 15; i++) {
    console.log(i)
}

// 2- Desafio: Use um loop while para exibir os números ímpares de 1 a 15 no console.
let i = 1
while (i <= 15) {
    console.log(i)
    i += 2
}

// *** Objetos 

// 1- Simples: Crie um objeto que represente um carro com marca e modelo. Exiba no console.
let carro = {
    marca: 'Kia',
    modelo: 'Sportage'
};
console.log(carro)

// 2 - Desafio: Adicione ao objeto um método que exiba uma mensagem com a marca e o modelo do carro.
let carro1 = {
    marca: 'Kia',
    modelo: 'Sportage'
}

console.log('Carro: ' + carro.marca + ' '+ carro.modelo)

// *** Arrays 

// 1- Simples: Crie um array com os nomes dos dias da semana e exiba no console.
let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
console.log(diasDaSemana)

// 2- Desafio: Remova o primeiro elemento do array de dias da semana e exiba o array atualizado no console.
diasDaSemana.shift()
console.log(diasDaSemana)


// *** Condicionais 

// 1- Simples: Crie uma condicional que verifique se um número é negativo e exiba uma mensagem correspondente.
let numero = -10
if (numero < 0) {
    console.log('O número é negativo.')
}

// 2- Desafio: Crie uma condicional para verificar se um número é positivo, negativo ou zero e exiba uma mensagem.
numero = 0
if (numero > 0) {
    console.log('O número é positivo.')
} else if (numero < 0) {
    console.log('O número é negativo.')
} else {
    console.log('O número é zero.')
}

// *** Strings 

// 1- Simples: Crie uma string com o seu nome completo e exiba a primeira letra de cada palavra no console.
let nomeCompleto = 'Diulie Telles'
let inicial1 = nomeCompleto[0]
let inicial2 = nomeCompleto[7]
let iniciais = inicial1 + inicial2 
console.log(iniciais)


// 2- Desafio: Crie uma string e remova todos os espaços em branco antes de exibi-la no console.
let frase = ' Eu adoro chimarrao. '
let fraseSemEspacos = ''
for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== ' ') {
        fraseSemEspacos += frase[i]
    }
}
console.log(fraseSemEspacos)

// *** Comparadores 

// 1- Simples: Use um comparador para verificar se um número é diferente de outro e exiba no console.
let numero1 = 10
let numero2 = 5
if (numero1 != numero2) {
    console.log('Os números são diferentes.')
}


// 2- Desafio: Use um comparador para verificar se um número é menor ou igual a outro e exiba no console.
numero1 = 8
numero2 = 10
if (numero1 <= numero2) {
    console.log('O primeiro número é menor ou igual ao segundo.')
}

// *** Comparadores Lógicos 

// 1- Simples: Use um comparador lógico para verificar se um número está fora do intervalo de 10 a 20 e exiba no console.
numero = 25
if (numero < 10 || numero > 20) {
    console.log('O número está fora do intervalo de 10 a 20.')
}

// 2- Desafio: Use comparadores lógicos para verificar se um número é positivo ou igual a zero e menor que 50 e exiba no console.
numero = 45
if ((numero >= 0) && (numero < 50)) {
    console.log('O número é positivo ou igual a zero e menor que 50.')
}

// *** Funções 

// 1- Simples: Crie uma função que receba uma string e retorne o número de caracteres nela.
function contarCaracteres(texto) {
    return texto.length
}
console.log(contarCaracteres('Olá, mundo!'))

// 2- Desafio: Crie uma função que receba um array de números e retorne um novo array com apenas os números pares.
function filtrarPares(numeros) {
    let pares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }
    return pares
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]))
