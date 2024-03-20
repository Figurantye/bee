const leitor = require('readline-sync')

let menu = leitor.questionInt('insira o lanche: ')
let quantidade = leitor.questionInt('insira a quantidade: ')

let lanche = {
    1:4.00,
    2:4.50,
    3:5.00,
    4:2.00,
    5:1.50
}

function venda(lanche) {
    let total = lanche[menu] * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}

venda(lanche)