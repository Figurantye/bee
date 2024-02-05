const leitor = require("readline-sync")

function main(){
    let numQuest = leitor.questionInt("quantas notas serao avaliadas? ") 
    let soma = 0;

    for(let i = 1; i <= numQuest; i++){
        notas = leitor.questionInt(`digite a nota numero ${i}: `)
        soma += notas
    }

    let media = soma / numQuest
    console.log(media);

}
main()