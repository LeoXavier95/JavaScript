"use strict"

 const num = Number(prompt("Digite um numero"))

 console.log("Tabuada do for")
 if(num <=10){
    for (let i = 0; i<= 10; i++) {
    
    console.log(`${num} x ${i} = ${num *i}`)
    }
 }

 console.log("Tabuada do while")
 let x = 0
 while (x <= 10) {
    console.log(`${num} x ${x} = ${num *x}`)
    x++
 }

 console.log("Tabuada do DoWhile")
 let y = 0 
 do {
    console.log(`${num} x ${y} = ${num *y}`)
    y++
 } while (y<= 10);  