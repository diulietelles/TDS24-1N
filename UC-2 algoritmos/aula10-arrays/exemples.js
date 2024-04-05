//length

const pokemom = ['bulbasauro', 'squirtle', 'charmander']
console.log(pokemom.length) //3

//metodo includes
const seriesBoas = ['Breaking Bad', 'Brookling Nine-nine']

seriesBoas.includes('Breaking Bad') // true
seriesBoas.includes('Game of Thrones') // false
console.log(seriesBoas.includes('Breaking Bad'))
console.log(seriesBoas.includes('Game of thrones'))


//push: adiciona mais elementos ao final de um array

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]

//pop: retira o ultimo elemento de um array

const meusPeixes = ['palhaco', 'mandarim', 'esturjao']
meusPeixes.pop()
console.log(meusPeixes) // ['palhaco', 'mandarim']

//splice: remove(i, n) remove n elementos a partir da posicao i

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
//INDICES  (i)   0    1    2    3    4    5    6    7   

letras.splice(2, 1)
//      letras = ['A', 'B','D', 'E', 'F', 'G', 'H']

letras.sp  