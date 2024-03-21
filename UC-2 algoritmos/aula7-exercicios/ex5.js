let ensinoMedio = true
let idade = 28
let souDeMaior = 18
let cursandoOutraFaculdade = true

// Verifica se o usuário pode estudar na faculdade
if (ensinoMedio === true && concluiuEnsinoMedio && !cursandoOutraFaculdade) {
    // Se todas as condições forem verdadeiras, imprime se o usuário pode estudar:
    console.log("Você pode estudar nesta faculdade.")
} else {
    // Se alguma das condições não for aceita, imprime que o usuário não pode estudar:
    console.log("Você não pode estudar nesta faculdade.")
}

