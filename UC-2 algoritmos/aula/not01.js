
/*  1 Interpretação de código:

      - "Matheus Nachtergaele"
      - "Virginia Cavendish"
      - {canal: "Globo", horario: "14h"}

   

// 2 a) O que vai ser impresso no console? 

/** Cachorro: imprime todos os dados de cachorro
 *  Gato: irá imprimir os mesmos dados de cachorro fazendo apenas a alteração de nome
 * Tartaruga: irá imprimir os mesmos dados de gato fazendo apenas a troca da ultima letra do nome */

// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?

/** Faz a cópia do objeto */


3./** false e undefined */

// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?

//imprime false, como string e udefined em altura, pois nao tem valor atribuido 

//escrita

   //escrita  1

    const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: [ "Vitinho", "Vitao", "Vit" ]
   
} 
  const doguinho = {
      nome: "Capuccino",
      apelidos: ["Capu", "nenem", "baby"]
  }
  
  const gatinho = {
      ...doguinho,
      apelidos: ["Azedo", "Bebe", "Sujismundo", "Preguica" ]
  }

    function imprimir(objeto) {
      console.log(`Eu sou o ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
  }
  
  
  imprimir(doguinho)
  imprimir(gatinho)
   


// escrita 3

const carrinho = []

const fruta1 = {


    nome: "Banana",
     disponibilidade: true 
}
const fruta2 = { 
    nome: "Maçã",
     disponibilidade: true
     }
const fruta3 = { 
    nome: "Morango", 
    disponibilidade: true 
}

function adicionarAoCarrinho(fruta) {
    carrinho.push(fruta)
}
function adicionarAoCarrinho(fruta) {
    if (fruta.nome === "Banana") {
        fruta.disponibilidade = false
    } else {
        fruta.disponibilidade = true
    }
    carrinho.push(fruta)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)

console.log(carrinho)
















