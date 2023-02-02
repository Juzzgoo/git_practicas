const { Console } = require("console-mpds");

const console = new Console();
const numerator = console.readNumber(`Introduce el numerador de la fracción: `);
const denominator = console.readNumber(`Introduce el denominador de la fracción: `);
let divident = numerator >= denominator ? numerator : denominator;
let divisor = numerator >= denominator ? denominator : numerator;
let remainder = divident % divisor;
let gcd;
while (remainder !== 0) {
    divident = divisor;
    divisor = remainder;
    remainder = divident % divisor;
}
gcd = divisor;
const numeratorSimplified = numerator / gcd;
const denominatorSimplified = denominator / gcd;
console.writeln(`La fracción ${numerator}/${denominator} reducida es ${numeratorSimplified}/${denominatorSimplified}, \
e invertida es la fracción ${denominatorSimplified}/${numeratorSimplified}`);