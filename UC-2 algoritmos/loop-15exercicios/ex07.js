let i =1

for (let i = 1; i <= 100; i++) { // loop de 1 ate 100
    if (i % 3 === 0 && i % 5 === 0) { // verifica se i é múltiplo de 3 e 5 
        console.log("FizzBuzz"); // se sim é "FizzBuzz"
    } else if (i % 3 === 0) { // verifica se i é multiplo de 3
        console.log("Fizz"); // se sim é "Fizz"
    } else if (i % 5 === 0) { // verifivca se i é multiplo de 5
        console.log("Buzz"); // Se sim é "Buzz"
    } else {
        console.log(i); // se não, imprime o proprio numero
    }
}
