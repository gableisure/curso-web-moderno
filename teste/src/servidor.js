const porta = 3004

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

const schedule = require('node-schedule')
const regra = new schedule.RecurrenceRule()
regra.hour = 19
regra.minute = 45

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/veiculos', (req, res, next) => {
    res.send(bancoDeDados.getVeiculos()) // Converte para JSON
})

app.post('/veiculos', (req, res, next) => {
    const veiculo = bancoDeDados.salvarVeiculo({
        nome: req.body.nome
    })
    res.send(veiculo)
})

const deletarVeiculo = schedule.scheduleJob(regra, function() {
    console.log('Excluindo um carro aleatório')
    return bancoDeDados.deletarVeiculo(5)
})

app.delete('/veiculos/', (req, res, next) => {
    const veiculo = deletarVeiculo()
    res.send(veiculo)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})