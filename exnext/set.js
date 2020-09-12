// Não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Fluminense')
times.add('Flamengo')
times.add('vasco')
console.log(times)
console.log(times.size)

console.log(times.delete('vasco'))
console.log(times)

const nomes = ['Rafael', 'Lucas', 'Bia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
console.log(nomes.length) // Atributo lenght