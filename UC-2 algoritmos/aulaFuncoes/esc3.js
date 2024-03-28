// Define a function for addition
function addition(number1, number2){
    return number1 + number2
}

function subtraction(number1, number2){
    return number1 - number2
}

function multiplication(number1, number2){
    return number1 * number2
}

function division(number1, number2){
    return number1 / number2
}

// Define the numbers directly
let number1 = 30
let number2 = 3

console.log("Numbers inserted:", number1, "and", number2)
console.log("Sum:",  addition(number1, number2))
console.log("Subt:", subtraction(number1, number2))
console.log("Multi:", multiplication(number1, number2))
console.log("Div:", division(number1, number2))
