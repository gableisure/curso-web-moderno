//Fora de uma função o "this" aponta para "exports" e "module.exports"
//Dentro de uma função o "this" aponta para "global"

console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === global)
    console.log(this === exports)
    console.log(this === module.exports)
}

logThis()