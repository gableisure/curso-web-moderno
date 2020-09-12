const freq = [4,8,8,11,14,5]
const classes = [
    [148,153],
    [153,158],  
    [158,163],  
    [163,168],  
    [168,173], 
    [173,178]
]

const somaArray = (total, numero) => total + numero
const amplitude = classes[0][1] - classes[0][0]


function fac(freq) {
    let fac = []
    fac[0] = freq[0]
    for(let j = 1; j < freq.length; j++){
        fac[j] = fac[j-1] + freq[j]
    }
    return fac
}

function fad(freq) {
    let fad = []
    fad[0] = 50
    for(let j = 1; j < freq.length; ++j) {
        fad[j] = fad[j-1] - freq[j-1]
    }    
    return fad
}

function frs(freq) {
    let frs = []
    for(let j = 0; j < freq.length; ++j) {
        frs[j] = freq[j] / 50
    }
    return frs
}
/*MUDANÇA*/
function frac(frs) {
    let frac = []
    frac[0] = frs[0]
    for(let j = 1; j < freq.length; j++){
        frac[j] = frac[j-1] + frs[j]
    }
    return frac.map(e => e = e.toFixed(2))
}

/*MUDANÇA*/
function frad(frs) {
    let frad = []
    frad[0] = 1
    for(let j = 1; j < freq.length; ++j) {
        frad[j] = frad[j-1] - frs[j-1]
    }    
    return frad.map(e => e = e.toFixed(2))
}

function fps(frs) {
    let fps = []
    for(let j = 0; j < freq.length; ++j){
        fps[j] = frs[j] * 100
    }
    return fps
}

function fpac(fps) {
    let fpac = []
    fpac[0] = fps[0]
    for(let j = 1; j < freq.length; j++){
        fpac[j] = fpac[j-1] + fps[j]
    }
    return fpac
}

function fpad(fps) {
    let fpad = []
    fpad[0] = 100
    for(let j = 1; j < freq.length; ++j) {
        fpad[j] = fpad[j-1] - fps[j-1]
    }    
    return fpad
}

/*Média*/
function getPontoMedio() {
    const x_media = []
    for(let j = 0; j < classes.length; ++j){
        x_media[j] = classes[j].reduce(somaArray) / 2
    }
    return x_media.map(e => e.toFixed(2))
}

function media(x_media) {
    let freq_x_x_media = []
    for(let j = 0; j < classes.length; ++j) {
        freq_x_x_media[j] = x_media[j] * freq[j]
    }
    let media = freq_x_x_media.reduce(somaArray) / freq.reduce(somaArray)
    return media.toFixed(2)
}

/*Moda e Mediana*/
function getClasseModal() {
    for(let j = 0; j < freq.length; j++){
        if(Math.max.apply(null, freq) == freq[j]) return j
    }
} 

function moda(indice) {
    return (classes[indice][0] + (amplitude * (freq[indice+1] / (freq[indice-1] + freq[indice+1])))).toFixed(2)
}

function getElementoMediano() {
    return freq.reduce(somaArray)/2
}

function mediana(indice, elementoMediano, fac) {
    return (classes[indice][0] + (amplitude * ((elementoMediano - fac[indice-1]) / freq[indice]))).toFixed(2)
} 

/*Medidas separatistas*/
function getElementoMedianoQuartil(n) {
    return (n * freq.reduce(somaArray))/4
} 

function getElementoMedianoDecil(n) {
    return (n * freq.reduce(somaArray))/10
} 

function getElementoMedianoCentil(n) {
    return (n * freq.reduce(somaArray))/100
} 

function getQuartil(elementoMediano, fac) {
    var classeModal
    for(let j = 0; j < classes.length; ++j){
        if(fac[j] >= elementoMediano){
            classeModal = j
            break
        }
    }
    return (classes[classeModal][0] + (amplitude * ((elementoMediano - fac[classeModal-1]) / freq[classeModal]))).toFixed(2)
}

function getDecil(elementoMediano, fac) {
    var classeModal
    for(let j = 0; j < classes.length; ++j){
        if(fac[j] >= elementoMediano){
            classeModal = j
            break
        }
    }
    return (classes[classeModal][0] + (amplitude * ((elementoMediano - fac[classeModal-1]) / freq[classeModal]))).toFixed(2)
}

function getCentil(elementoMediano, fac) {
    var classeModal
    for(let j = 0; j < classes.length; ++j){
        if(fac[j] >= elementoMediano){
            classeModal = j
            break
        }
    }
    return (classes[classeModal][0] + (amplitude * ((elementoMediano - fac[classeModal-1]) / freq[classeModal]))).toFixed(2)
}

/*Medidas de dispersão*/
function desvioQuartil(q1, q3) {
    return (q3 - q1)/2
}


console.log('F: ' + freq)
console.log('Fac: ' + fac(freq))
console.log('Fad: ' + fad(freq))
console.log('Frs: ' + frs(freq))
console.log('Frac: ' + frac(frs(freq)))
console.log('Frad: ' + frad(frs(freq)))
console.log('Fps: ' + fps(frs(freq)).map(e => `${e}%`))
console.log('Fpac: ' + fpac(fps(frs(freq))).map(e => `${e}%`))
console.log('Fpad: ' + fpad(fps(frs(freq))).map(e => `${e}%`))
console.log('Média: ' + media(getPontoMedio()))
console.log('Moda: ' + moda(getClasseModal()))
console.log('Mediana: ' + mediana(getClasseModal(), getElementoMediano(), fac(freq))) 
console.log('Quartil: ' + getQuartil(getElementoMedianoQuartil(1), fac(freq)))
console.log('Decil: ' + getDecil(getElementoMedianoDecil(2), fac(freq)))
console.log('Centil: ' + getCentil(getElementoMedianoCentil(35), fac(freq))) 
const f = fpad(fps(frs(freq))).map(e => `${e}%`)
console.log('fpad[4]' + f[5])
/* console.log('Desvio-Quartil: ' + desvioQuartil(getQuartil(getElementoMedianoQuartil(1), fac(freq)),
 getElementoMedianoQuartil(3), fac(freq))) */

/* quartil1 = getQuartil(getElementoMedianoQuartil(1), fac(freq))
quartil3 = getQuartil(getElementoMedianoQuartil(3), fac(freq))
somaQuartil = quartil1 + quartil3
console.log(somaQuartil) */



