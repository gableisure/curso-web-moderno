const escola = [
    {
        nome: 'Turma 1',
        alunos:[ 
        { nome: 'Isabella', nota: 7.5 },
        { nome: 'João Victor', nota: 9.5 }]
    },
    {
        nome: 'Turma 2',
        alunos:[ 
        { nome: 'Apollo Henrique', nota: 6.5 },
        { nome: 'Giovanna Oliveira', nota: 10 }]    
    }]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
