const readlineSync = require('readline-sync')

let doadores = []

function adicionarEspacos(texto, tamanho) {
    while (texto.length < tamanho) {
        texto += ' '
    }
    return texto
}

function formatarLinha(doador) {
    const tamanhoNome = 20
    const tamanhoIdade = 6
    const tamanhoPeso = 7 
    const tamanhoTipoSanguineo = 15
    const tamanhoUltimaDoacao = 12


    const nome = adicionarEspacos(doador.nome, tamanhoNome);
    const idade = adicionarEspacos(doador.idade.toString(), tamanhoIdade);
    const peso = adicionarEspacos(doador.peso.toFixed(1), tamanhoPeso);
    const tipoSanguineo = adicionarEspacos(doador.tipoSanguineo.toUpperCase(), tamanhoTipoSanguineo);
    const ultimaDoacao = adicionarEspacos(doador.ultimaDoacao, tamanhoUltimaDoacao);

   
   const linhaFormatada = nome + '|'+ idade + '|'+ peso + '|'+ tipoSanguineo + ' |' + ultimaDoacao
     return linhaFormatada
}

function cadastrarDoador() {
    const nome = readlineSync.question('Nome do doador: ')
    const idade = readlineSync.questionInt('Idade do doador: ')
    const peso = readlineSync.questionFloat('Peso do doador (em kg): ')
    const tipoSanguineo = readlineSync.question('Tipo sanguíneo do doador: ').toUpperCase()
    const ultimaDoacao = readlineSync.question('Data da última doação (dd/mm/aaaa): ')

    const doador = { nome, idade, peso, tipoSanguineo, ultimaDoacao }

    doadores.push(doador)
    console.log('Doador cadastrado com sucesso!\n')
}

function listarDoadores() {
    if (doadores.length === 0) {
        console.log('Nenhum doador cadastrado.\n')
        return
    }

    console.log('--------------------')
    console.log('LISTAGEM DE DOADORES:')
    console.log('--------------------')
    console.log('NOME                | IDADE| PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')
    console.log('-----------------------------------------------------------------')

    doadores.forEach((doador) => {
        console.log(formatarLinha(doador))
    })

    console.log('-----------------------------------------------------------------\n')
}


function buscarPorTipoSanguineo() {
    const tipo = readlineSync.question('Digite o tipo sanguíneo desejado: ').toUpperCase()

    const resultado = doadores.filter(doador => doador.tipoSanguineo === tipo)

    if (resultado.length === 0) {
        console.log('Nenhum doador encontrado com o tipo sanguíneo informado.\n')
        return
    }

    console.log('------------------------')
    console.log('RESULTADO DA BUSCA:')
    console.log('------------------------')
    console.log('NOME                | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')
    console.log('-----------------------------------------------------------------')

    resultado.forEach((doador) => {
        console.log(formatarLinha(doador))
    })

    console.log('-----------------------------------------------------------------\n')
}


function buscarPorDataUltimaDoacao() {
    const data = readlineSync.question('Digite a data desejada (dd/mm/aaaa): ')

    const resultado = doadores.filter((doador) => doador.ultimaDoacao === data)

    if (resultado.length === 0) {
        console.log('Nenhum doador encontrado com a data informada.\n')
        return
    }

    console.log('------------------------')
    console.log('RESULTADO DA BUSCA:')
    console.log('------------------------')
    console.log('NOME                | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')
    console.log('-----------------------------------------------------------------')

    resultado.forEach((doador) => {
        console.log(formatarLinha(doador))
    })

    console.log('-----------------------------------------------------------------\n')
}


while (true) {
    console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====')
    console.log('1. Cadastrar doador')
    console.log('2. Listar doadores')
    console.log('3. Buscar doador por tipo sanguíneo')
    console.log('4. Buscar doador por data da última doação')
    console.log('5. Sair')

    const opcao = readlineSync.questionInt('Escolha uma opcao: ')

    switch (opcao) {
        case 1:
            cadastrarDoador();
            break
        case 2:
            listarDoadores();
            break
        case 3:
            buscarPorTipoSanguineo();
            break
        case 4:
            buscarPorDataUltimaDoacao();
        case 5:
            console.log('Agradecemos seu cadastro!');
            break
        default:
            console.log('Opção inválida. Por favor, escolha uma opção válida.\n')
    }
}