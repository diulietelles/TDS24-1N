/*ex 1
const professo = {
    nome: 'Diulie', //propriedade
    idade: 28,
    tarefas: ['academia', 'comer sushi'],     // nova propriedade
    contarPiada: function(){
        console.log('é pa ve ou pa come?')
    }
}
console.log(professo.nome)
// para executar funcoes: professo.contarPiada

//ex 2

const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor.idade)


//ex 3

const professor1 = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor1['email'])

//ex 4

const professor2 = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
professor2.nome = 'Mika'
professor2['email'] = 'profmika@gmail.com'
console.log(professor1[nome])
console.log(professor2['email'])

//ex 5

const donoDoPet = {
    nome: 'Vitor Hugo',
    pet: {
        nomeDoPet: 'Wanda',
        raca: 'Vira-Lata',
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)

//ex 6

const curso = {
    nome: 'Noturno Frontend',
    linguagens: ['JS', 'CSS', 'HTML']
}
console.log(curso.linguagens[0])
*/

//ex 7

const professores = [
    {nome:'Andrei', modulo: 1},
    {nome:'Vitor', modulo: 2},
    {nome:'Mina', modulo: 3},
]
console.log(professores[1].nome)

const curso = {
    nome:'UC2- Aloritmos',
    linguagens: 'JS'
}

curso.numeroDeEstudantes = 30
console.log(curso)