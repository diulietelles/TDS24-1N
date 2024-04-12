let somaImpares = 0

for (let i = 1; i <= 100; i++) { //loop1 a 100
    if (i % 2 !== 0) { // verifica se o numero é impar
        somaImpares += i // Se sim, adiciona soma
    }
}

console.log('A soma dos numeros impares de 1 a 100 é:', somaImpares)