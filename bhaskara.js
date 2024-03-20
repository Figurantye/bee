const leitor = require('readline-sync')

let raizes = {
    A:leitor.questionFloat('insira o valro de A: '),
    B:leitor.questionFloat('insira o valro de B: '),
    C:leitor.questionFloat('insira o valro de C: ')
}

function bhaskara(raiz){
    let delta = (raiz.B**2) - (4*raiz.A*raiz.C)

    let x1 = (-raiz.B + Math.sqrt(delta)) / (2*raiz.A)
    let x2 = (-raiz.B - Math.sqrt(delta)) / (2*raiz.A)

    console.log(`X1: ${x1}\nX2: ${x2}`);
}

bhaskara(raizes)