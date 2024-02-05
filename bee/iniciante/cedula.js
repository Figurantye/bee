const leitor = require("readline-sync")

function main(){
    let valor = leitor.questionInt(`insira um valor a ser lido: `)
    let n200 = valor/200
    valor = n200
    let n100 = n200/100
    valor = n100
    let n50 = valor/50
    valor = n50
    let n20 = valor/20
    valor = n20
    let n10 = valor/10
    valor = n10
    let n5 = valor/5
    valor = n5
    let n2 = valor/2

    console.log(`${n200} notas de R$200,00\n${n100} notas de R$100,00\n${n50} notas de R$50,00\n${n20} notas de R$20,00\n${n10} notas de R$10,00\n${n5} notas de R$5,00\n${n2} notas de R$2,00`);
}

main()