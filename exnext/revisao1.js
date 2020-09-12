// let e const possuem escopo de bloco
// var possui escopo global

{
    var a = 1
    let b = 2
    const c = 3
    console.log(b, c)
}
console.log(a)

// Template String
const nome = 'Gabriel Ribeiro de Araújo'
console.log(`Bem vindo, ${nome}`)

// Destructuring

//Array
const [l, e, ...resto] = 'Gabriel'
console.log(l, e, resto)

const [x, ,y] = [1, 'Fernando Bezerra', 3]
console.log(x, y)

const {idade, n: no} = { n: 'Gabriel', idade: 22 }
console.log(idade, no)