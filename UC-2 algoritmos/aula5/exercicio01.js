/*Exercicio1

Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:    
O nome da pessoa  
A idade dessa pessoa  
Um true ou false que diz se ela é maior de idade  
Quantos anos ela terá em 2050
*/

// Variáveis para armazenar os dados
let nome = "Gabriel"
let anoNascimento = 2012
let anoAtual = 2024

// Calculando a idade da pessoa
let idade = anoAtual - anoNascimento
// Verificando se a pessoa é maior de idade (considerando maioridade aos 18 anos)
let maiorIdade = idade >= 18
// Calculando a idade em 2050
let idade2050 = 2050 - anoNascimento
// Imprimindo os resultados
console.log("Nome: " + nome)
console.log("Idade: " + idade + " anos")
console.log("Maior de idade: " + maiorIdade)
console.log("Idade em 2050: " + idade2050 + " anos")
