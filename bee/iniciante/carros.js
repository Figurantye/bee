const leitor = require("readline-sync")

function main(){
    let carroUm = leitor.questionInt(`insira a velocidade do carro A: `)
    let carroDois = leitor.questionInt(`insira a velocidade do carro B: `)
    let dst = leitor.questionInt(`insira a distancia percorrida pelos carros: `)
    console.log(tempo(carroUm,carroDois,dst),"minutos");
}

function tempo(a,b,dst){
    let gremio = ((b - a) / dst) * 60
    if (gremio < 0){
        return gremio / -1
    }
    return gremio
}

main()
