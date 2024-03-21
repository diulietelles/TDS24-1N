//Exercicio 1:
let idade = 12
// Verifica se o usuário pode dirigir
if (idade >= 18) {
    console.log('Você pode dirigir, uhuuu!')
} else {
    console.log('Você não pode dirigir TT.TT ')
}


// Exercicio 2:
// Verifica o turno do dia que um aluno estuda com if/else
let turno = 'V' // usuário estuda no turno vespertino

if (turno === 'M') {
    console.log('Bom Dia!')
} else if (turno === 'V') {
    console.log('Boa Tarde!')
} else if (turno === 'N') {
    console.log('Boa Noite!')
} else {
    console.log('Turno não reconhecido.')
}

// Verifica o turno do dia em que um aluno estuda com switch case
switch (turno) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Turno não reconhecido.')
}

// Exercicio 3:
// Verificando o gênero do filme e o preço do ingresso
let generoFilme = 'drama' 
let precoIngresso = 10

// Verificando se o amigo vai assistir o filme
if (generoFilme === 'drama' && precoIngresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme.')
}
