/*const leiotr = require("readline-sync")

let a = leiotr.questionInt(``)  
let b = leiotr.questionInt(``)
let PROD = a + b

console.log(`PROD = ${PROD}`);
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift())
let b = Number(lines.shift())
let prod = a * b
console.log(`PROD = ${prod}`)