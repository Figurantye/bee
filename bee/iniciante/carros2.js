const leitor = require("readline-sync")

function main(){
    let carroUm = 1
    let carroDois = 1.5
    let dist = leitor.questionInt(`insira a distancia percorrida por ambos os carros: `)

    console.log("a distancia entre ambos os carros é",difer(carroUm,carroDois,dist)); 
}

function difer(a,b,c){
    let um = a * c
    let dois = b * c
    let fim = dois - um
    return fim
}

main()