//exerecicio 1:

let valores = [1, 2, 3, 4, 5, 6]

//tamanho do array
console.log('Tamanho inicial do array:', valores.length)
valores.push(7)
console.log(valores)

//splice
valores.splice(3, 2)

//  pop
valores.pop()

// novo tamanho do array
console.log('Novo tamanho do array:', valores.length)

// Imprimindo o array atualizado
console.log('Array atualizado:', valores)