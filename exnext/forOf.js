// for(let letra of 'Gabriel') {
//     console.log(letra)
// }

const assuntosEcma = ['Set', 'Map', 'Promisse']

for(let assunto in assuntosEcma) {
    console.log(assunto)
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntos = new Map([
    ['Map', {estudado: true}],
    ['Set', {estudado: true}],
    ['Promisse', {estudado: false}]
])

for(let assunto of assuntos) {
    console.log(assunto)
}

for(let assunto of assuntos.keys()) {
    console.log(assunto)
}

for(let assunto of assuntos.values()) {
    console.log(assunto)
}

for(let assunto of assuntos.entries()) {
    console.log(assunto)
}


