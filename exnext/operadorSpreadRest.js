// Spread com objetos
const funcionario = { nome: 'Fernando', salario: 1235.87 }
const clone = { ativo: true, ...funcionario}

console.log(clone)

// Spread com array
const grupo1 = [1, 2, 3]
const grupoFinal = [10, 11, 12, ...grupo1]
console.log(grupoFinal)