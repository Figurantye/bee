const leitor = require("readline-sync")

function main(){
    let km = leitor.questionInt(`quantos quilometros foram percorridos? `)
    let combustivel = leitor.questionFloat(`insira a quantidade gasta de combustivel: `)
    combustivel.toFixed(1)

    let kml = km / combustivel
    
    console.log(`${kml.toFixed(3)} km/l`);
}
main()