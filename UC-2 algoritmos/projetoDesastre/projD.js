const readline = require("readline-sync")

let listaCepUsuarios = []

const abrigosPorCep = {
  "12345-678": "Abrigo A, Rua das Flores, 123",
  "98765-432": "Abrigo B, Av. dos Acolhedores, 456",
  "45678-123": "Abrigo C, Praça Central, 789"
}

function menuPrincipal() {
  let continuar = true
  
  while (continuar) { 
    console.log("=== Sistema de Gestão de Incidentes de Desastres e Inundações ===")
    console.log("Escolha uma das opcoes abaixo: ")
    console.log("1. Cadastrar CEP")
    console.log("2. Verificar se um CEP está na lista de evacuacao e mostrar abrigo próximo")
    console.log("3. Sair")

    const opcao = readline.questionInt("Escolha uma opcao:")

    switch (opcao) {
      case 1:
        cadastrarCep()
        break
      case 2:
        verificarListaEvacuacao()
        break
      case 3:
        console.log("Saindo do sistema...")
        continuar = false
        break
      default:
        console.log("Opção inválida. Tente novamente.")
    }
  }
}

function cadastrarCep() {
  const cep = readline.question("Insira seu CEP para cadastro: ")
  
  if (listaCepUsuarios.includes(cep)) {
    console.log("CEP já cadastrado!")
  } else {
    listaCepUsuarios.push(cep)
    console.log("CEP cadastrado com sucesso!")
  }
}

function verificarListaEvacuacao() {
    const listaEvacuacao = ["12345-678", "23456-789", "34567-890"]
    
    const cep = readline.question("Insira seu CEP para verificar se esta na lista de evacuacao: ")
  
    
    if (listaCepUsuarios.includes(cep)) {
        } else { 
        console.log("O CEP não está cadastrado no sistema. Por favor, cadastre-o primeiro")
    }
      
    if (listaEvacuacao.includes(cep)) {
        console.log("Seu bairro está na lista de evacuação. Siga as instruções de segurança locais.")

         console.log(`Abrigo mais próximo: ${abrigosPorCep[cep]}`)
        } else { 
        console.log("Seu bairro não está na lista de evacuação.")
    }
    
  }


menuPrincipal() 
