//funcao que vai aparecer a seguinte mesnagem, voce é o personagem tal... o retoro do indice
// Math.random(matth.floor() *) gera um numero aleatorio entre zero e um, return
// Lista de personagens de dorama

const personagens = ['Dae-su Oh', 'Ji Eun-tak', 'Kim Shin', 'Yoo Si-jin', 'Kang Mo-yeon']

function escolherPersonagem() {
    const indice = Math.floor(Math.random() * personagens.length)
    return personagens[indice]
}
console.log("O personagem escolhido é:", escolherPersonagem())




const 캐릭터들 = ['대수 오', '지 은-탁', '김 신', '유 시 진', '강 모 연']

function 캐릭터선택() {
    const 인덱스 = Math.floor(Math.random() * 캐릭터들.length)
    return 캐릭터들[인덱스]
}

console.log('선택된 캐릭터는:', 캐릭터선택())