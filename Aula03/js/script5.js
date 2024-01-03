"use strict"

var a = 12
let b = 10

a = 1000
b = 2000

console.log(a)
console.log(b)


var a = 300

//let b = 200 não funcionará, pois o let nao permite mudar o valor da variavel

const PI = 3.14

//PI = 5 valor contante nao pode ser alterado

if(PI < 5 ){
    console.log("dentro da condição (if)")
    var rr = 4 //funciona fora do bloco
    let ss = 3 // nao funciona fora do bloco
    console.log(rr)
    console.log(ss)
    console.log(a)
    console.log(b)
}

console.log("Fora do bloco"+ rr)
//console.log("Fora do bloco"+ ss) erro pois o let nao permite que busque a variavel dentro do bloco