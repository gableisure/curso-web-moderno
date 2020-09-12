const carrinho = [
    '{ "nome": "Borracha", "preco": 3.49 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto)
console.log(resultado)
resultado[0].nome = 'Te peguei safado'
console.log(resultado)