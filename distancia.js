const leitor = require("readline-sync")

function main(){
    let x1 = leitor.questionFloat(`insira x1: `)
    let y1 = leitor.questionFloat(`insira y1: `)
    let x2 = leitor.questionFloat(`insira x2: `)
    let y2 = leitor.questionFloat(`insira y2: `)

    let p1 = (x2 - x1) ** 2
    let p2 = (y2 - y1) ** 2
    
    let distancia = Math.sqrt(p1 + p2)
    console.log(distancia.toFixed(4));
}
main()