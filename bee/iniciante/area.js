//Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:

const leitor = require("readline-sync")

let A = leitor.questionFloat("defina A: ")
let B = leitor.questionFloat("defina B: ")
let C = leitor.questionFloat("defina C: ")

//a área do triângulo retângulo que tem A por base e C por altura.
function tr(){
    let triRet = (A * C) / 2
    console.log(`area do triangulo retangulo: ${triRet.toFixed(3)}`);
}

// a área do círculo de raio C. (pi = 3.14159)
function circulo(){
    let circu = 3.14159 * C ** 2
console.log(`area do circulo: ${circu.toFixed(3)}`);
}

//a área do trapézio que tem A e B por bases e C por altura.
function trapezio(){
    let monster = (C/2) * (A + B)
    console.log(`area do trapezio: ${monster.toFixed(3)}`);
}

//a área do quadrado que tem lado B.
function quadrado(){
    let oito = B ** 2
    console.log(`area do quadrado: ${oito.toFixed(3)}`);
}

//a área do retângulo que tem lados A e B.
function retangulo(){
    let ret = A * B
    console.log(`area do retangulo: ${ret.toFixed(3)}`);
}

tr()
circulo()
trapezio()
quadrado()
retangulo()