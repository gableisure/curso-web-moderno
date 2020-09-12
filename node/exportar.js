this.a = 1
exports.b = 2
module.exports.c = 3


exports = {
    teste: 'Teste'
}

console.log(module.exports)

module.exports = {
    teste: 'Teste'
}

console.log(module.exports)