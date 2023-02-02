const { Console } = require("console-mpds");

const console = new Console();
const firstAbscissa = console.readNumber(`Dame la abcisa de la coordenad: `);
const firstOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const secondAbscissa = console.readNumber(`Dame la abcisa de la coordenad: `);
const secondOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);


const horizontal = firstOrdinate === secondOrdinate ? `si es` : `no es`
console.writeln(`la coordenada origen (${firstAbscissa}, ${firstOrdinate}) y la coordenada destino (${secondAbscissa}, ${secondOrdinate}) ${horizontal} un movimiento horizontal`);