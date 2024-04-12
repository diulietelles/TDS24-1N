let multiplicador = 1

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) { //loop para multp de 1 ate 10
    console.log(`Tabuada do ${multiplicador}:`) // exibe o inicio da tabuada

    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) { // loop multiplicando de 1 ate 10
        const resultado = multiplicador * multiplicando; // calcula o resultado da multp
        console.log(`${multiplicador} x ${multiplicando} = ${resultado}`) // linha da tabuada
    }

    console.log() //  linha em branco para separar 
}
