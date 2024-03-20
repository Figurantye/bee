const leitor = require('readline-sync')

function main(){
    let valores = {
        A: leitor.questionInt('insira o valor de A: '),
        B: leitor.questionInt('insira o valor de B: '),
        C: leitor.questionInt('insira o valor de C: '),
        D: leitor.questionInt('insira o valor de D: '),
    }
    comp(valores)
}

function comp(valor) {
    if (valor.B > valor.C && valor.D > valor.A && valor.C + valor.D > valor.A + valor.B && valor.A + valor.B > 0 && valor.C + valor.D > 0 && valor.A % 2 == 0) {
        console.log('valor aceito'); 
    } else {
        console.log('valores não aceitos');
    }
}

main()