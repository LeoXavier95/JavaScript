"use strict"

let media = Number(prompt("Digite a média final"))

if (media >= 5.75 && media <= 10) {
    alert("Aprovado")
} else if(media >=0 && media < 5.75){
    alert("Reprovado")
} else{
    alert("Digite a nota corretamente")
}

let parimpar = Number(prompt("Dgite um numero"))

let resp = (parimpar % 2 == 0)? "par": "impar"

alert(resp)

let obj_data = new Date()
let dia_semana =  obj_data.getDay()

switch (dia_semana) {
    case 0 : alert("Domingo"); break;
    case 1 : alert("Segunda"); break;
    case 2 : alert("Terça"); break;
    case 3 : alert("Quarta"); break;
    case 4 : alert("Quinta"); break;
    case 5 : alert("Sexta"); break;
    case 6 : alert("Sabado"); break;
    default:
        break;
}