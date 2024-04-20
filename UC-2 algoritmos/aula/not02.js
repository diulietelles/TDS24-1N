//escrita 2

const pessoa1 = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
}

const pessoa2 = {
    nome: "João",
    idade: 25,
    profissao: "Professor"
}

function infos(pessoa) {
        return  pessoa.nome.length +  pessoa.idade ,  + pessoa.profissao , + pessoa.profissao.length
    }

console.log(infos(pessoa1))
console.log(infos(pessoa2))









