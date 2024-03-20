const leitor = require('readline-sync')

let num = leitor.questionFloat('insira um valor: ')

for(let i = 0; i <= 100; i+=25){
    if(num > i && num < i+25){
        console.log(`intervalo [${i},${i+25}]`);
    }
}