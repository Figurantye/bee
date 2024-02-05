var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.questionFloat(`nota 1: `, notaUm => {
    readline.questionFloat(`nota 2 ->`, notaDois => {
        let res = ((numUm+numDois)/2);
        
        console.log(`a média é ${res}`)
    });
});