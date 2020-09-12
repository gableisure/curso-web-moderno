const tecnologia = new Map()
const react = 'react'
const angular = 'angular'
tecnologia.set(react, { nome: 'React', framework: false})
tecnologia.set(angular, { nome: 'Angular', framework: true})
console.log(tecnologia.get('react'))
console.log(tecnologia.get('react').nome, tecnologia.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.has(function() {}))
chavesVariadas.set('JS', 'JavaScript')
console.log(chavesVariadas.get('JS'))
