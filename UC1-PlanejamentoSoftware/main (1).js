/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
print('Hello World');

var numero1 = 5;
var numero2 = 3;
var resultado;

resultado = numero1 == numero2;
print(numero1, '=', numero2, '?', resultado);
resultado = numero1 != numero2;
print(numero1, '!=', numero2, '?', resultado);
resultado = numero1 > numero2;
print(numero1, '>', numero2, '?', resultado);
resultado = numero1 < numero2;
print(numero1, '<', numero2, '?', resultado);
resultado = numero1 <= numero2;
print(numero1, '<=', numero2, '?', resultado);  

var a1 = true || true; // t || t retorna true
print(a1);
var a2 = true || false; // t || f retorna true
print(a2);
var a3 = false || true; // f || t retorna true
print(a3);
var a4 = false || (3 == 4); // f || f retorna false
print(a4);
var a5 = "Gato" || "Cão"; // t || t retorna Gato
print(a5);
var a6 = false || "Gato"; // f || t retorna Gato
print(a6);
var a7 = "Gato" || false; // t || f retorna Gato
print(a7)



// 5) codar
var idade = 28;
var status = idade >=18? 'adulto': 'menor de idade';
print(status);

// 6) Alterar a idade
idade = 15;
status = idade >= 18 ? 'adulto' : 'menor de idade';
print(status);

// 7) Concatenação de strings
var palavra1 = 'alfa';
var palavra2 = 'beto';
var resultado = palavra1 + palavra2;
print(resultado);


// 1) Imprima "True" se a variável a for maior que 10 e menor que 20, ou se a variável b for igual a 5;
var a = 15;
var b = 5;
if ((a > 10 && a < 20) || (b == 5)) {
    print("True");
} else {
    print("False");
}

// 2) Imprima "True" se a variável a for maior que 10 ou se a variável b for igual a 5.
if (a > 10 || b == 5) {
    print("True");
} else {
    print("False");
}

// 3) Imprima "True" se a variável a for maior que 10 e menor que 20, ou se a variável b for igual a 5, ou se a variável c for igual a 10.
var c = 10;
if ((a > 10 && a < 20) || (b == 5) || (c == 10)) {
    print("True");
} else {
    print("False");
}

// 4) Imprima "True" se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a variável c for igual a 10.
if ((a > 10 || b == 5) && (c != 10)) {
    print("True");
} else {
    print("False");
}

// 5) Imprima "True" se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a variável c for igual a 10 e nem se a variável d for igual a 20;
var d = 20;
if ((a > 10 || b == 5) && (c != 10) && (d != 20)) {
    print("True");
} else {
    print("False");
}


