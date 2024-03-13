// Respostas dos exercícios de interpretação de código:

// Exercício 1:
let a = 10
let b = 10
console.log(b) // Será impresso no console: 10
b = 5
console.log(a, b) // Será impresso no console: 10 5

// Exercício 2:
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
// Será impresso no console: 10 10 10
// Isso porque a variável 'c' não foi declarada com 'let', 'var' ou 'const',
// então ela se torna uma variável, e assume o valor de 'a' que é 10,
// depois 'b' assume o valor de 'c', então 'b' também se torna 10,
// 'a' assume o valor de 'b', que é 10, portanto todos são 10.

// Exercicio 3
// em seguida, calcula e exibe quanto o usuário recebe por hora.

// Sugestão de melhorias no código:

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Você recebe ${salarioPorDia / horasPorDia} por hora`)
