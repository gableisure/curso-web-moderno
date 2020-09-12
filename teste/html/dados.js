/* VARIÁVEIS */
var nome = 'Gabriel'
var sobrenome = 'Ribeiro de Araújo'
var classRedCSS = 'red'
var classGreenCSS = 'green'
var classBlackCSS = 'black'
var date = new Date()

var colors = new Array('Green', 'Black', 'White')

var msg = '<p><b>Page title: </b>' + document.title + '<br>'
msg += '<b>Page adress: </b>' + document.URL + '<br>'
msg += '<b>Last modified: </b>' + document.lastModified + '</p>'

var elMsg = document.getElementById('info')
elMsg.innerHTML = msg

var el = document.getElementById('nome')
el.textContent += nome
var el2 = document.getElementById('sobrenome')
el2.innerHTML += sobrenome
/* colors */
var color = document.getElementById('color')
color.innerHTML += colors[0]
color.className = classGreenCSS


/* date */
var elDate1 = document.getElementById('date1')
elDate1.textContent += date.getDate()

var elDate2 = document.getElementById('date2')
elDate2.textContent += date.toDateString()

var elDate3 = document.getElementById('date3')
elDate3.textContent += date.getFullYear()


/* FUNÇÕES */
function mudaCaixaAlta(){
    var el1 = document.getElementById('nome')
    el1.textContent = el1.textContent.toUpperCase()
    var el2 = document.getElementById('sobrenome')
    el2.textContent = el2.textContent.toUpperCase()
}

function mudaCaixaBaixa(){
    var el1 = document.getElementById('nome')
    el1.textContent = el1.textContent.toLocaleLowerCase()
    var el2 = document.getElementById('sobrenome')
    el2.textContent = el2.textContent.toLocaleLowerCase()
}

function red(){
    var el1 = document.getElementById('nome')
    el1.className = classRedCSS
    var el2 = document.getElementById('sobrenome')
    el2.className = classRedCSS
}

function green(){
    var el1 = document.getElementById('nome')
    el1.className = classGreenCSS
    var el2 = document.getElementById('sobrenome')
    el2.className = classGreenCSS
}

function black(){
    var el1 = document.getElementById('nome')
    el1.className = classBlackCSS
    var el2 = document.getElementById('sobrenome')
    el2.className = classBlackCSS
}

function recolherPerfil(){
    var el = document.getElementById('perfil')
    el.className = 'recolhe'
}

function recolherColors(){
    var el = document.getElementById('colors')
    el.className = 'recolhe'   
}

function recolherWebSiteInfo(){
    var el = document.getElementById('info')
    el.className = 'recolhe'   
}

function recolherDate(){
    var el = document.getElementById('date')
    el.className = 'recolhe'   
}

function extenderPerfil(){
    var el = document.getElementById('perfil')
    el.className = 'extende'
}

function extenderColors(){
    var el = document.getElementById('colors')
    el.className = 'extende'
}

function extenderWebSiteInfo(){
    var el = document.getElementById('info')
    el.className = 'extende'   
}

function extenderDate(){
    var el = document.getElementById('date')
    el.className = 'extende'   
}

