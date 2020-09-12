const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(e => e * 2)
console.log(resultado)

const soma10 = e => e + 10
const dobro = e => e * 2
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(dobro).map(paraDinheiro)
console.log(nums)
console.log(resultado)