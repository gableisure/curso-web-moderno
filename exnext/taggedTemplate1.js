// tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Fernanda'
const situacao = 'Aprovadíssima'
console.log(tag `${aluno} está ${situacao}.`)
console.log(`${aluno} está ${situacao}.`)