const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = func => func.pais = 'China' && func.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

const func = axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionario = funcionarios.filter(mulheresChinesas).reduce(menorSalario)
    console.log(funcionario)
})




//