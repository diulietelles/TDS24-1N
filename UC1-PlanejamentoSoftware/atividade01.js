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

