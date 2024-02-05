const leitor = require("readline-sync")

function main(){
    let ask = leitor.question(`quem eu amo? `)
    if(ask == "milena" || "lena"){
        console.log(`RESPOSTA CERTA!!!`)
    } else {
        console.log(`RESPOSTA ERRADA, EU AMO A MILENA!!!`)
    }
}
main()
