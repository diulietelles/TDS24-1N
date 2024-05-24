 /*Variaveis:
(1): Defina 4 Variaveis que falem sobre você, sendo elas o seu nome; sua idade, sua terra de origem e sua situação de profissional. coloque todas essas informações em uma frase. */
let nome = 'Diulie Telles'
let idade = 28
let terraDeOrigem = 'Rio Grande do Sul'
let situacaoProfissional = 'Empreendedora'
let frase = 'Meu nome é ' + nome + ' tenho ' + idade + ' anos, sou de ' + terraDeOrigem + ' e trabalho como ' + situacaoProfissional + '.'

console.log(frase)

/*(2): Escreva 2 numeros diferentes e os coloque em Variaveis, faça soma. subtração, multiplicação, divizão e resto */
let numero1 = 8
let numero2 = 3

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto = numero1 % numero2

console.log('Soma: ' + soma)
console.log('Subtração: ' + subtracao)
console.log('Multiplicação: ' + multiplicacao)
console.log('Divisão: ' + divisao)
console.log('Resto: ' + resto)

/*Loop:
(1): Faça um while que faça uma contagem regressiva a partir de um numero celecionado por você, mas tambem deve indicar se cada numero é par ou impar */
let numeroInicial = 10
console.log('Contagem regressiva começando... ' + numeroInicial + ':')
while (numeroInicial >= 0) {
    if (numeroInicial % 2 === 0) {
        console.log(numeroInicial + ' é par')
    } else {
        console.log(numeroInicial + ' é ímpar')
    }
    numeroInicial--
}

/*(2): Faça um while que pergunta no terminal um numreo entre 1 a 10 e enquanto não for selecionado o numero correto, a pergunta se repetira.*/
const readlineSync = require('readline-sync')
let numeroCorreto = Math.floor(Math.random() * 10) + 1
let numeroEscolhido = 0
while (numeroEscolhido !== numeroCorreto) {
    numeroEscolhido = readlineSync.questionInt('Escolha um numero entre 1 e 10:')
    if (numeroEscolhido < 1 || numeroEscolhido > 10) {
        console.log('Por favor, selecione um numero entre 1 e 10.')
    } else if (numeroEscolhido < numeroCorreto) {
        console.log('Tente um nnmero maior.')
    } else if (numeroEscolhido > numeroCorreto) {
        console.log('Tente um numero menor.')
    }
}
console.log('Parabéns! Você escolheu o numero correto: ' + numeroCorreto)


/*Objetos:
    (1)use readlinesync para perguntar no terminal o seu nome; sua idade;
    sua terra de origem e sua situação de profissional.
    com isso coloque as informações em um objeto, e exiba as informações
    separadas e indicadas em um quadro.
    /*(2) Altere essa variavel e adicione os valores: data de nascimento e 
    formacôes profissionais (como um array)
    exemplo:
    ___________
    |Nome: Fulano de Tal
    |idade:
    |Terra natal:
    |situação profissional:
    ___________ */
    
    const readlineSync = require('readline-sync')
    let nome1 = readlineSync.question('Nome: ')
    let idade1 = readlineSync.questionInt('Idade: ')
    let terraNatal = readlineSync.question('Terra Natal: ')
    let situacaoProfissional1 = readlineSync.question('Situacao profissional: ')
    let dataNascimento = readlineSync.questionInt('Data de nascimento: ')
    let formacoesProfissionais = readlineSync.question('Quais sao as suas formacoes profissionais? (separe por virgulas) ').split(',')
    
    let pessoa = {
        Nome: nome1,
        Idade: idade1,
        'Terra Natal': terraNatal,
        'Situação Profissional': situacaoProfissional1,
        'Data de Nascimento': dataNascimento,
        'Formações Profissionais': formacoesProfissionais
    }
    
    console.log('_________________________')
    for (let chave in pessoa) {
        console.log('|' + chave + ': ' + pessoa[chave])
    }
    console.log("_________________________")


/* Arrays:
    (1) Faça uma lista de compras com o que deve ser comprado em um mercado, 
    colocando os objetos dentro de um array e exiba
    (2) Calcule quantos elementos existem no array, e exiba cada elemento separadamente 
    em um texto explicando o que deve ser comprado */
    let listaDeCompras = ['Mamao', 'Chocolate', 'Queijo', 'Tapioca',  'Pao']
    console.log('Lista de Compras:')
    listaDeCompras.forEach(item => {
        console.log('- ' + item)
    })
    let quantidadeDeItens = listaDeCompras.length
    console.log('\nTotal de itens na lista de compras: ' + quantidadeDeItens)


/* Condicionais:
    (1) Use readlinesync para fazer uma pergunta para escolher um numero de apenas um digito e apos apos isso use um if para dizer se é maior, menor, ou igual ao numero correto.*/
    const readlineSync = require('readline-sync')
    let numeroEscolhido1 = readlineSync.questionInt('Escolha um numero de apenas um digito: ')
    let numeroCorreto1 = 5
    // verificando se é maior, menor....
    if (numeroEscolhido1 < numeroCorreto1) {
        console.log('O número escolhido é menor que o número correto.')
    } else if (numeroEscolhido1 > numeroCorreto1) {
        console.log('O número escolhido é maior que o número correto.')
    } else {
        console.log('Parabéns! O número escolhido é igual ao número correto.')
    }

/*(2) Na lista de compras, você possui um limite de quantos objetos você pode comprar
    com seu dinheiro em mãos, se passar disso, você tera que usar o cartão de credito,
    e se for alto demais, não podera comprar por conta do limite do cartão, você deve
    narrar os resultados com if else. */
   
    let limiteDinheiro = 50
    let limiteCartaoCredito = 200
    let totalCompra = 250

    //verificwando se a compra pode ser realizada...
    if (totalCompra <= limiteDinheiro) {
        console.log('A compra pode ser realizada com dinheiro em mãos.')
    } else if (totalCompra <= limiteCartaoCredito) {
        console.log('A compra pode ser realizada com o cartão de crédito.')
    } else {
        console.log('A compra não pode ser realizada devido ao limite do cartão de crédito.')
    }


/* Stryngs:
    (1) Coloque cada parte do texto abaixo em variaveis diferentes, e alinhe de forma que
    faça sentido com console.log
    Se é amor...
    Que seja tudo isso junto!
    Se é paixão...
    Não sei nem mais dizer
    Se é amizade...
    O que sinto por você...
    Mas suspeito fortemente */

let parte1 = 'Se é amor...'
let parte2 = 'Que seja tudo isso junto!'
let parte3 = 'Se é paixão...'
let parte4 = 'Não sei nem mais dizer'
let parte5 = 'Se é amizade...'
let parte6 = 'O que sinto por você...'
let parte7 = 'Mas suspeito fortemente'

console.log(parte1)
console.log(parte2)
console.log(parte3)
console.log(parte4)
console.log(parte5)
console.log(parte6)
console.log(parte7)

/*(2) Defina variaveis 3 variaveis e coloque elas em um texto sem utilizar uma virgula para quebralo.  exemplo: "blabla", const,"blabla" não pode. */
let variavel1 = 'Primeira'
let variavel2 = 'Segunda'
let variavel3 = 'Terceira'

let texto = 'Estou utilizando ' + variavel1 + ' variável, ' + variavel2 + ' variável e ' + variavel3 + ' variável.'
console.log(texto)

/* Comparadores:
    (1) Escolha dois numeros, coloqueos em variaveis e compare cada um deles de todas as
    formas passadas.*/
let numero3 = 10
let numero4 = 5
console.log("Número 1 é igual a Número 2?", numero3 === numero4)
console.log("Número 1 é diferente de Número 2?", numero3 !== numero4)
console.log("Número 1 é maior que Número 2?", numero3 > numero4)
console.log("Número 1 é menor que Número 2?", numero3 < numero4)
console.log("Número 1 é maior ou igual a Número 2?", numero3 >= numero4)
console.log("Número 1 é menor ou igual a Número 2?", numero3 <= numero4)

/*(2) Faça um if para dizer se os dados inceridos dentro de um objeto, idade carteira de
    trabalho etc, e coloque as idades minimas para a confirmação. */
let pessoa1 = {
    nome: 'Gabriel',
    idade: 25,
    carteiraDeTrabalho: true
}

let idadeMinima = 18
if (pessoa1.idade >= idadeMinima && pessoa1.carteiraDeTrabalho) {
    console.log('A pessoa atende aos requisitos mínimos para confirmação.')
} else {
    console.log('A pessoa não atende aos requisitos mínimos para confirmação.')
}


/* Comparadores Logicos:
    (1) Dentro de variaveis existem os dados pessoais de uma pessoa que esta indo ao exterior do pais, se ela tive 18 anos e passagem legalizada ela pode ir viajar, mas, se ela não tiver carteira de motorista daquele pais, ela não poderá dirigir. Use os dados nas variaveis para definir se poderá ou não dirigir, e as repostas devem  ser mostradas.*/
let idade3 = 28 
let passagemLegalizada = true 
let carteiraDeMotorista = false 

if (idade3 >= 18 && passagemLegalizada) {
    if (carteiraDeMotorista) {
        console.log('A pessoa pode viajar e dirigir no exterior.Uhuu!!')
    } else {
        console.log('A pessoa pode viajar, mas não pode dirigir no exterior:(')
    }
} else {
    console.log('A pessoa não pode viajar para o exterior T.T')
}

/*(2) Faça um sistema de senhas em que uma senha é inserida, e se estiver incorreto,
você é notificado e precisa tentar de novo, até acertar ou apertar em sair.*/
const readlineSync = require('readline-sync')
const senhaCorreta = '1234'
let tentativas = 3

// loop para solicitar a senha até acertar ou usuario sair
while (tentativas > 0) {
    let senhaInserida = readlineSync.question('Digite a senha: ')
    if (senhaInserida === senhaCorreta) {
        console.log('Senha correta. Acesso concedido.')
        break
    } 
    console.log('Senha incorreta. Tente novamente.')
    tentativas--

// outro if para separar senha correta das tentativas:
    if (tentativas === 0) {
        console.log('Você excedeu o numero maximo de tentativas.')
    } else {
        console.log('Tentativas restantes: ' + tentativas)
    }
}


/*funções:
    (1) Faça uma tabuada do numero que for inserido na função usando Loop.*/
    const readlineSync = require('readline-sync')
    function tabuada(numero) {
        console.log('Tabuada do ' + numero + ':')
        for (let i = 1; i <= 10; i++) {
            console.log(numero + ' x ' + i + ' = ' + (numero * i))
        }
    }
    let numero = readlineSync.questionInt('Digite um numero para ver a tabuada: ')
    tabuada(numero)


/*(2) Use a função para fazer uma mini calculadora, faça 4 funções, uma para soma, outra 
    para subtração, multiplicação e divizão, então chame a desejada e insira os numeros
    que desja calcular. */
    const readlineSync = require('readline-sync')
function soma(a, b) {
    return a + b
}
function subtracao(a, b) {
    return a - b
}
function multiplicacao(a, b) {
    return a * b
}
function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero.'
    }
    return a / b
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return soma(a, b)
        case 'subtracao':
            return subtracao(a, b)
        case 'multiplicacao':
            return multiplicacao(a, b)
        case 'divisao':
            return divisao(a, b)
        default:
            return 'Operação inválida.'
    }
}
let operacao = readlineSync.question('Escolha uma operacao (soma, subtracao, multiplicacao, divisao): ')
let num1 = readlineSync.questionInt('Digite o primeiro numero: ')
let num2 = readlineSync.questionInt('Digite o segundo numero: ')
let resultado = calculadora(operacao, num1, num2)
console.log('Resultado da operação ' + operacao + ': ' + resultado)

