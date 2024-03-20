const leitor = require("readline-sync")

var a = leitor.questionFloat(`insira o valor: `)
let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let quantidade = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    quantidade = parseInt(a / cedula[i])
    console.log(`${quantidade} nota(s) de R$ ${cedula[i].toFixed(2)}`)
    a = a % cedula[i]
}
console.log("MOEDAS:")
for (let i = 6; i < cedula.length; i++) {
    quantidade = parseInt(a / cedula[i])
    console.log(`${quantidade} moeda(s) de R$ ${cedula[i].toFixed(2)}`)
    a = a % cedula[i] + 0.00001
    }