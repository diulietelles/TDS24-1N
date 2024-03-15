//Exercícios Simples Envolvendo Variáveis em JavaScript

/*1.Exercício de Adição:**
   Declare duas variáveis, `a` e `b`, atribua valores a elas e então crie uma terceira variável, `soma`, que armazena a soma de `a` e `b`. Por fim, exiba o valor da soma*/

let a = 5
let b = 7

let soma = a + b
console.log("A soma de a e b é:", soma)


/*2.Exercício de Média:**
   Declare três variáveis, `nota1`, `nota2` e `nota3`, atribua valores a elas representando notas de um estudante, e então calcule a média das três notas. Armazene o resultado em uma variável chamada `media` e exiba o valor da média*/

let nota1 = 8
let nota2 = 7
let nota3 = 6

let media = (nota1 + nota2 + nota3) / 3
console.log("A média das três notas é:", media)



/*3.Exercício de Conversão de Temperatura:**
   Declare uma variável para armazenar uma temperatura em Celsius. Em seguida, crie uma segunda variável para armazenar a temperatura convertida para Fahrenheit.
  Utilize a fórmula de conversão (F = C * 9/5 + 32)*/

   let temperaturaCelsius = 30
let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32

console.log("A temperatura em Fahrenheit é:", temperaturaFahrenheit)


/*4.Exercício de Área de um Retângulo:**
   Declare duas variáveis, `base` e `altura`, e atribua valores a elas representando as dimensões de um retângulo. Em seguida, calcule a área do retângulo e armazene o resultado em uma variável chamada `area`. Exiba o valor da área*/

let base = 30
let altura = 3
let retangulo = base * altura
console.log("A area do retangulo é:", retangulo)

/*5.Exercício de Concatenação de Strings:**
   Declare duas variáveis, `nome` e `sobrenome`, e atribua valores a elas. Em seguida, crie uma terceira variável chamada `nomeCompleto` que armazena a concatenação do nome e sobrenome. Exiba o valor de `nomeCompleto`*/

let nome = "Diulie"
let sobrenome = " Telles"

let nomeCompleto = nome +  sobrenome
console.log("O nome completo é:", nomeCompleto)



   /*6.Exercício de Troca de Tipos:**
Crie duas variáveis com os valores "50" e "25" (não esqueça das aspas!). Agora, tente fazer a soma com as duas. O que acontece?
O que fazer para que a soma resulte em 75?/*/

let valor1 = "50"
let valor2 = "25"
let resulte = valor1 + valor2
console.log(resulte)

//5025

let total = Number(valor1) + Number(valor2)
console.log("A soma é:", total)