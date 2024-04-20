 // exercicio 4

 const pessoa = {
    nome:  'Gabriel',
    idade: 12

}

 function imprimirPessoa(pessoa) {
    const novaPessoa = {
        ...pessoa,
        comidasPreferidas: ['Oniguiri', 'Sushi', 'Pizza'],
        melhorAmigo: {
            nome: 'Diulie',
            idade: 28
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Sua melhor amiga se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}
imprimirPessoa(pessoa)