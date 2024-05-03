const readline = require('readline-sync')

// cria uma lista (array) vazia para add os ceps:
let listaCepUsuarios = []

//  objeto para quando cep em risco, mostre opçao de abrigo correspondente ao cep
const abrigosPorCep = {
  "12345-678": "Abrigo A, Rua das Flores, 123",
  "23456-789": "Abrigo B, Av. dos Acolhedores, 456",
  "34567-890": "Abrigo C, Praça Central, 789"
}

function menuPrincipal() { //funcao para mostrar o menu principal
  let continuar = true  // variavel boo para e executar o menu até usuario digitar sair

  while (continuar) { // loop que manetm o menu em execucao enquanto o 'continuar' for true

    // cabecalho mostrando as opcoes para o usuario ler e depois escolher o numero
    console.log('=== Sistema de Gestão de Incidentes de Desastres e Inundações ===')
    console.log('Escolha uma das opcoes abaixo:')
    
    // as opcoes que o usuario pode escolher no menu
    console.log('1. Cadastrar CEP')
    console.log('2. Verificar CEP se esta na lista de evacuacao e mostrar abrigo proximo')
    console.log('3. Consultar procedimentos de segurança')
    console.log('4. Enviar alertas de desastres')
    console.log('5. Compartilhar informações entre cidadãos')
    console.log('6. Consultar recursos comunitários')
    console.log('7. Dados climáticos em tempo real')
    console.log('8. Suporte a animais de estimação')
    console.log('9. Recuperação pós-desastre')
    console.log('10. Parcerias com autoridades locais')
    console.log('11. Sair')

    
    const opcao = readline.questionInt('Escolha uma opcao:') // pede p/ usuario escolher numero inteiro
    
    
    switch (opcao) { // switch que determina qual funcao executar a partir da escolja do usuario
      case 1: // se 1, chama funcao cadastrar cep
        cadastrarCep()
        break // Sai do case apos chamar a função
      case 2: // Se 2, chama a funcao: verificar lista de evacuacao
        verificarListaEvacuacao()
        break
      case 3: // Se 3, chama a funçao: consultar procedimentos de seguranca
        consultarProcedimentosDeSeguranca()
        break
      case 4: // Se 4, chama a funcao: enviar alertas de desastres
        enviarAlertasDesastres()
        break
      case 5: // Se 5, chama a funcao: compartilhar informacoes entre cidadaos
        compartilharInformacoes()
        break
      case 6: // Se 6, chama a funcao: consultar recursos comunitarios
        consultarRecursosComunitarios()
        break
      case 7: // Se 8, chama a funcao: obter dados climaticos em tempo real
        obterDadosClimaticos()
        break
      case 8: // Se 9, chama a funcao: suporte a animais de estimação
        suporteAnimaisEstimacao()
        break
      case 9: // Se 10, chama a funcao: orientacoes de recuperacao pos desastre
        orientacoesRecuperacao()
        break
      case 10: // Se 11, chama a função para parcerias com autoridades locais
        parceriaAutoridadesLocais()
        break
      case 11: // Se 12, encerra 
        console.log('Saindo do sistema...') 
        continuar = false // altera a variavel boo que cemecou true  para interromper o loop, troca para false
        break
      default: // para qualquer outra entrada que nao tiver na lista, a opcao e invalida
        console.log('Opção inválida. Tente novamente.')
    }
  }
}


function cadastrarCep() {// funcao para cadastrar um cep no sistema
  const cep = readline.question('Insira seu CEP para cadastro: ') //solicita ao usuario que insira cep p/ cadastro
  
  if (listaCepUsuarios.includes(cep)) {  // verifica com includes se o cep ja esta no     array, no valor cep
    console.log('CEP já cadastrado!')// se estiver, informa que o cep esta cadastrado
  } else { //se não estiver, adiciona cep na lista de usuarios cadastrado
   if(listaCepUsuarios.push(cep))//// confirma que o cadastro foi feito  e add com push ao final de cada array
    console.log('CEP cadastrado com sucesso!')
    }
}
function verificarListaEvacuacao() { //funcao para verificar se cep esta na lista e mostra  abrigo proximo
    const listaEvacuacao = ['12345-678', '23456-789', '34567-890'] //cria uma lista de ceps que estao na lista de evacuacao com 3 elementos dentro do array
  
    // solicita ao usuario que insira um cep  para verificar
    const cep = readline.question('Insira seu CEP para verificar se esta na lista de evacuacao: ')
  
    // verifica se esta cadastrado no sistemacom includes
    if (listaEvacuacao.includes(cep)) { // se estiver cadastrado e esta na lista(includes) de evacuacao:
        console.log('Seu bairro está na lista de evacuação. Siga as instruções de segurança locais.')  //informa que esta na lista de evacuacao e da instrucoes de seguranca
        console.log(`Abrigo mais próximo: ${abrigosPorCep[cep]}`) // uso template string,combino obejto'abrigosPorCep' com valor 'cep'
      } else {
        console.log('Seu bairro não está na lista de evacuação.')
      }
}
  
// funcao para exibir procedimentos de segurança
function consultarProcedimentosDeSeguranca() {
  console.log('Exibindo procedimentos de segurança para enchentes:')
  console.log('- Mantenha-se afastado de áreas alagadas.')
  console.log('- Desconecte aparelhos elétricos antes de evacuar.')
  console.log('- Siga as instruções das autoridades locais.')
}

// funcao para enviar alertas de desastres para usuarios cadastrados
function enviarAlertasDesastres() {
  console.log('Enviando alertas de desastres para usuários cadastrados...')
  // redes sociais, consorcio de veiculos de informacoes (não implementada)
}

// Funcao para compartilhar informacoes
function compartilharInformacoes() {
  console.log('Compartilhando informações entre cidadãos:')
  console.log('- Compartilhar atualizações sobre condições locais.')
  console.log('- Informar sobre status de estradas e possíveis perigos.')
}

// funcao para consultar recursos 
function consultarRecursosComunitarios() {
  console.log('Recursos comunitários disponíveis em caso de desastres:')
  console.log('- Centros de apoio.')
  console.log('- Distribuição de alimentos e água.')
  console.log('- Serviços de saúde.')
}

// funcao para obter dados climaticos
function obterDadosClimaticos() {
  console.log('Obtendo dados climáticos em tempo real...')
  // espaço para adicionar previsao do tempo
}

// funcao para fornecer suporte  animais
function suporteAnimaisEstimacao() {
  console.log('Suporte a animais de estimação durante desastres:')
  console.log('- Informações sobre abrigos que aceitam animais.')
  console.log('- Instruções para proteger animais durante desastres.')
}

// funcao pos desastre
function orientacoesRecuperacao() {
  console.log('Orientações para recuperação pós-desastre:')
  console.log('- Limpeza e reconstrução após desastres.')
  console.log('- Informações sobre seguros e assistência governamental.')
}

// funcao parcerias 
function parceriaAutoridadesLocais() {
  console.log('Parcerias com autoridades locais:')
  console.log('- Colaboração com bombeiros, policiais e outras autoridades.')
  console.log('- Ferramentas para autoridades atualizarem informações em tempo real.')
}

// chama o menu principal para iniciar o sistema
menuPrincipal()
