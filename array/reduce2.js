const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas ?
const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
let resul = alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas)
console.log(resul)
//Desafio 2: Algum aluno é bolsista ?
const algumBolsista = (resultado, bolsistas) => resultado || bolsista
resul = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)
console.log(resul)