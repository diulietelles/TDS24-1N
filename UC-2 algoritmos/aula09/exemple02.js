const name = 'Diulie'
const age = 28
const city = 'Sao Leopoldo'

console.log('I am', name, ', i am', age, 'and i am from', city)

console.log(`I am ${name}, i am ${age},  and i am from  ${city}`)

console.log('I am ' + name + ', i am ' + age + ' and i am from ' + city + '.')


// LENGTH property
const nome = 'Diulie Telles'
console.log(nome.length) // COUNTS HOW MANY CHARACTERS THERE ARE, including spaces

// trim: removes spaces before and after strings:
const nome1 = '     Diulie Telles'
console.log(nome.trim())

// INCLUDES method:
const frase2 = 'Today I ate carrot'
frase.includes('carrot') // true
frase.includes('potato') // false
console.log(frase2.includes('carrot'))
console.log(frase2.includes('potato'))

// replaceAll method
const frase3 = 'Today I ate carrot, I love carrot'
const newFrase = frase3.replaceAll('carrot', 'potato')
console.log(frase3.replaceAll())
console.log(newFrase.replaceAll())

// arrays
const shoppingList = ['potato', 'lettuce', 'cheese']
const megaNumbersList = [2, 13, 26, 35, 41, 60]  
const groceryList = ['avocado', 'banana', 'tomato']
const secondItem = groceryList[1] // always starts with 0
console.log(groceryList[2])
