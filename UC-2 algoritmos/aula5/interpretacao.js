//Exercícios de interpretação de código

//Exercício 1

/*Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = verdadeiro const bool2 = falso const bool3 = !bool2
deixe resultado = bool1 && bool2 console.log("a. ", resultado)
resultado = bool1 && bool2 && bool3 console.log("b. ", resultado)
resultado = !resultado && (bool1 || bool2) console.log("c. ", resultado)
console.log("d. ", tipo de resultado)
*/
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)



//Exercício 2
/*Seu colega se aproxima de você falando que o código dele não funciona como devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
deixe primeiroNumero = "100" deixe segundoNumero = "43"
const soma = primeiroNumero + segundoNumero
console.log(soma)
*/
let primeiroNumero = "100"
let segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma)
/*o primeiroNumero e segundoNumero são strings, a operação + irá concatenar os valores das strings, resultando em "10043".
*/


//Exercício 3

/*Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
*/

let primeiroNum = "100"
let segundoNum = "43"

const resulta = Number(primeiroNum) + Number(segundoNum)
console.log(resulta)
