//Desafio 2:

//perguntar nome, jogo local ou internacional,  fase, tipo de assento
let nomeCompleto = 'Gabriel Sandi'
let tipoJogo = 'IN' // IN para internacional, DO para doméstico
let etapaJogo = 'FI' // SF para semifinal, DT para decisão de terceiro lugar, FI para final
let categoria = 2 //(categoria 1, 2, ...)
let quantidadeIngressos = 3

// Define os valores dos ingressos de acordo com o tipo de jogo, etapa do jogo e categoria
let valorIngresso

switch (etapaJogo) {
    case 'SF':
        switch (categoria) {
            case 1:
                valorIngresso = 1320
                break
            case 2:
                valorIngresso = 880
                break
            case 3:
                valorIngresso = 550
                break
            case 4:
                valorIngresso = 220
                break
            default:
                console.log('Categoria de ingresso inválida.')
                
        }
        break
    case 'DT':
        switch (categoria) {
            case 1:
                valorIngresso = 660
                break
            case 2:
                valorIngresso = 440
                break
            case 3:
                valorIngresso = 330
                break
            case 4:
                valorIngresso = 170
                break
            default:
                console.log('Categoria de ingresso inválida.')
                
        }
        break
    case 'FI':
        switch (categoria) {
            case 1:
                valorIngresso = 1980
                break
            case 2:
                valorIngresso = 1320
                break
            case 3:
                valorIngresso = 880
                break
            case 4:
                valorIngresso = 330
                break
            default:
                console.log('Categoria de ingresso inválida.')
                
        }
        break
    default:
        console.log('Etapa do jogo inválida.')
        
}

// Se for jogo internacionalmultiplica por 4.10(dólar)
if (tipoJogo === 'IN') {
    valorIngresso * 4.10
}

// Calculando o valor total a ser pago
let valorTotal = valorIngresso * quantidadeIngressos

// Imprime informações:
// mostra o nome completo de quem está comprando os ingressos
console.log('Nome: ' + nomeCompleto) 
//indica se o jogo é internacional ou domestico
console.log('Tipo de jogo: ' + (tipoJogo === 'IN' ? 'Internacional' : 'Doméstico'))
 //diz em qual fase o jogo está, semifinal, decisão de terceiro lugar ou final
console.log('Etapa do jogo: ' + (etapaJogo === 'SF' ? 'Semifinal' : (etapaJogo === 'DT' ? 'Decisão de Terceiro Lugar' : 'Final'))) 
//indioca o tipo de assento ou setor do estadio escolhido para assistir ao jog
console.log('Categoria: ' + categoria)
 // mostra quantos ingressos foram selecionados para compra
console.log('Quantidade de ingressos: ' + quantidadeIngressos)
//mostra o preço de cada ingresso
console.log('Valor do ingresso: R$ ' + valorIngresso.toFixed(2))
//mostra quanto sera gasto no total pelos ingressos selecionados
console.log('Valor total a ser pago: R$ ' + valorTotal.toFixed(2))