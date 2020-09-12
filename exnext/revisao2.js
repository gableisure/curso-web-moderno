// Arrow function
const soma = (...nums) => {
    let total = 0
    nums.forEach(n => total += n)
    return total
}

console.log(soma(1, 2, 3))

// Parâmetro default
function param(param = 'No param'){
    console.log(param)
}

param()
param(1235.25)

// Operador rest

function rest(...params) {
    let total = 0
    params.forEach(p => total += p)
    return total
}
console.log(rest('A', 'B', 'C'))
