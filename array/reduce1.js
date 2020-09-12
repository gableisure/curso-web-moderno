const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(aluno => aluno.nota))

const resul = alunos.map(aluno => aluno.nota).reduce((acumulador, valorAtual) => acumulador + valorAtual, 5)
console.log(resul)