const leitor = require("readline-sync")

function main(){
    let comb = leitor.questionInt(`insira o litro gasto por km: `)
    let t = leitor.questionInt(`insira o tempo de viagem: `)
    let v = leitor.questionInt(`insira a velocidade media do veiculo: `)

    console.log(`o combustivel gasto foi ${combustivel(comb,t,v).toFixed(3)}`);
}

function combustivel(a,b,c){
    return (b * c) / a
}

main()