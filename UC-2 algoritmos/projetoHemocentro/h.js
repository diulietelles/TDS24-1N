const readlineSync = require('readline-sync')

let doadores = [] //array vazio p/ receber doadores depois

function adicionarEspacos(texto, tamanho) { // funcao p/ add espaços ao texto ate chegar o tamanho espe.
    while (texto.length < tamanho) { //enquanto menor, continua add
        texto += ' ' 
    }
    return texto //retorna o texto com espaços
}
function formatarLinha(doador) { //defino uma fun. para formatar uma linha de dados 
    const tamanhoNome = 20 //espaço maximo
    const tamanhoIdade = 6
    const tamanhoPeso = 7 
    const tamanhoTipoSanguineo = 15
    const tamanhoUltimaDoacao = 12


    const nome = adicionarEspacos(doador.nome, tamanhoNome) // add espaço até o tamanho espec.
    const idade = adicionarEspacos(doador.idade.toString(), tamanhoIdade) //string e espaços
    const peso = adicionarEspacos(doador.peso.toFixed(1), tamanhoPeso) //string. uma casa decimal e add espaco
    const tipoSanguineo = adicionarEspacos(doador.tipoSanguineo.toUpperCase(), tamanhoTipoSanguineo) // converte TS maiusc. e add 
    const ultimaDoacao = adicionarEspacos(doador.ultimaDoacao, tamanhoUltimaDoacao) //add espaços até tamanho

   
   const linhaFormatada = nome + '|'+ idade + '|'+ peso + '|'+ tipoSanguineo + ' |' + ultimaDoacao // criei uma linha formatada c variaveis na vert
     return linhaFormatada 
}

function cadastrarDoador() { //criei uma func. para receber
    const nome = readlineSync.question('Nome do doador: ')
    const idade = readlineSync.questionInt('Idade do doador: ')
    const peso = readlineSync.questionFloat('Peso do doador (em kg): ')
    const tipoSanguineo = readlineSync.question('Tipo sanguíneo do doador: ').toUpperCase() //converte letras
    const ultimaDoacao = readlineSync.question('Data da última doação (dd/mm/aaaa): ')

    const doador = { nome, idade, peso, tipoSanguineo, ultimaDoacao } //criei um objeto ''doador'' comosdados inseridos

    doadores.push(doador) //add o doador no array ''doadores''
    console.log('Doador cadastrado com sucesso!\n')
}

function listarDoadores() { //lista osdoadores
    if (doadores.length === 0) { // verifica se tem doadores cadastrados
        console.log('Nenhum doador cadastrado.\n')
        return
    }

    console.log('--------------------') //linha de separacao para inciar
    console.log('LISTAGEM DE DOADORES:')
    console.log('--------------------')
    console.log('NOME                | IDADE| PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO') //cabeçlho
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
        console.log(formatarLinha(doador))  // para cada doador, exibe uma linha
    })

    console.log('-----------------------------------------------------------------\n')
}


function buscarPorDataUltimaDoacao() {
    const data = readlineSync.question('Digite a data desejada (dd/mm/aaaa): ')

    // inverte a data 
    const dataInvertida = data.split('/').reverse().join('')

    let resultadoComDataExata = []
    let resultadoMenorOuIgual = []

    //pPercorre a lista de doadores
    for (let i = 0; i < doadores.length; i++) {
        const doador = doadores[i]
        
        const dataDoadorInvertida = doador.ultimaDoacao.split('/').reverse().join('')

        if (dataDoadorInvertida === dataInvertida) {
            // se data igual, adiciona ao resultadoComDataExata
            resultadoComDataExata.push(doador)
        } else if (dataDoadorInvertida <= dataInvertida) {
            // se  data  menor ou igual, adiciona ao resultadoMenorOuIgual
            resultadoMenorOuIgual.push(doador)
        }
    }

    let resultado

    if (resultadoComDataExata.length > 0) {
        // Se tem  doadores com a data exata, usa essa lista
        resultado = resultadoComDataExata
    } else {
        // Se não tem, usa  lista de doadores com datas menores ou iguais
        resultado = resultadoMenorOuIgual
    }

    if (resultado.length === 0) {
        console.log('Nenhum doador encontrado com a data informada.\n')
        return
    }

    console.log('--------------------')
    console.log('LISTAGEM DE DOADORES:')
    console.log('--------------------')
    console.log('NOME                | IDADE | PESO  | TIPO SANGUÍNEO  | ÚLTIMA DOAÇÃO')
    console.log('-----------------------------------------------------------------')

    resultado.forEach((doador) => {
        console.log(formatarLinha(doador))
    })

    console.log('-----------------------------------------------------------------\n')
}

  


while (true) { //inicia um loop infinito para manter funcionando
        console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====')
        console.log('1. Cadastrar doador')
        console.log('2. Listar doadores')
        console.log('3. Buscar doador por tipo sanguíneo')
        console.log('4. Buscar doador por data da última doação')
        console.log('5. Sair')

        const opcao = readlineSync.questionInt('Escolha uma opcao: ')

        switch (opcao) { //estrutura de controle para definir uma ação a ser feita com base nas escolhas
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
                break
            case 5:
                console.log('Agradecemos seu cadastro!');
                break  // Adicione esta instrução para sair do loop
            default:
                console.log('Opção inválida. Por favor, escolha uma opção válida.\n');
        }
    }
       