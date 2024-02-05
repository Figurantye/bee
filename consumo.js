const leitor = require("readline-sync")

function main(){
    let combustivel = leitor.questionInt(`insira o combustivel gasto: `)
    let km = leitor.questionInt(`insira a quilometragem: `)


    console.log(div(combustivel,km).toFixed(3));
}

function div(a, b){
    return a/b
}

main()