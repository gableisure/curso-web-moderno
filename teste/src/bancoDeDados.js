const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const veiculos = {}

function getTotalVeiculos() {
    return veiculos.lenght()
}

function salvarVeiculo(veiculo) {
    if(!veiculo.id) veiculo.id = sequence.id
    veiculos[veiculo.id] = veiculo
    return veiculo
}

function getVeiculos() {
    return Object.values(veiculos)
}

function deletarVeiculo(id) {
    const veiculo = veiculos[id]
    delete veiculos[id]
    return veiculo
}

module.exports = { salvarVeiculo, deletarVeiculo, getTotalVeiculos, getVeiculos }