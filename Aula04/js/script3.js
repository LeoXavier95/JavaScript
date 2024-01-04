"use strict"

let botao = window.document.getElementById("btn") //pega o id
let div = document.querySelector("#relatorio") // # = id . = class 


botao.addEventListener("click", function () {
    div.innerHTML = ""
    for(let i = 0; i<=10; i++){
        div.innerHTML += `${i} = ${i**2} <br>`
    }
})