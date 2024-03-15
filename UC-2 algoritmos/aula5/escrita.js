/*Exercicio 1

Faça um programa que:

a) Tenha uma variavel com a sua idade do usuário

b) Tenha uma variavel com idade do seu melhor amigo ou da sua melhor amiga

c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)
*/

let minhaIdade = 28
let idadeMelhorAmigo = 12

console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade > idadeMelhorAmigo)

console.log("Diferença de idade:", minhaIdade - idadeMelhorAmigo)

/*Faça um programa que:
a) Tenha uma variavel com um numero par

b) Imprima na console o resto da divisão desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se você trocar para um número ímpar? Escreva em um comentário de código

Faça um programa que tenha uma variável com sua idade em anos. Depois, imprima no console
*/

let numeroPar = 10

console.log("Resto da divisão por 2:", numeroPar % 2)

let idadeAnos = 25

/*Depois, imprima no console
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas
*/

let idadeMeses = idadeAnos * 12
console.log("Idade em meses:", idadeMeses)

let idadeDias = idadeAnos * 365
console.log("Idade em dias:", idadeDias)



let idadeHoras = idadeDias * 24
console.log("Idade em horas:", idadeHoras)

/*Faça um programa tenha duas variaveis com um número cada. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true O primeiro numero é igual ao segundo? false O primeiro numero é divisível pelo segundo? true O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let numero1 = 20
let numero2 = 5
let resto = numero1 % numero2


console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0 )
