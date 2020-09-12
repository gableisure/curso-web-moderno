Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 4500, fragil: true },
    { nome: 'Iphone', preco: 7000, fragil: true },
    { nome: 'Copo americano', preco: 2.50, fragil: true },
    { nome: 'Camisa', preco: 45.00, fragil: false }
]

const filtra = produto => produto.preco >500 && produto.fragil
let resul = produtos.filter2(filtra)
console.log(resul)