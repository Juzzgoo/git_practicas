const { Console } = require("console-mpds");

const console = new Console();
const numerador1 = console.readNumber(`Primera fracción:
Introduce el numerador de la fracción: `);
const denominador1 = console.readNumber(`Introduce el denominador de la fracción: `);
const numerador2 = console.readNumber(`Segunda fracción:
Introduce el numerador de la fracción: `);
const denominador2 = console.readNumber(`Introduce el denominador de la fracción: `);
console.writeln(`La suma de la fracción ${numerador1}/${denominador1} y la fracción ${numerador2}/${denominador2} es la fracción ${numerador1 * denominador2 + numerador2 * denominador1}/${denominador1 * denominador2}`);