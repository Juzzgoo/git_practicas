const { Console } = require("console-mpds");

const console = new Console();
const firstAbscissa = console.readNumber(`Coordenada de origen: 
Dame la abcisa de la coordenada: `);
const firstOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const secondAbscissa = console.readNumber(`Coordenada de destino: 
Dame la abcisa de la coordenada: `);
const secondOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);

const abscissed = (firstAbscissa - 1) <= secondAbscissa && secondAbscissa <= (firstAbscissa + 1);
const ordinated = (firstOrdinate - 1) <= secondOrdinate && secondOrdinate <= (firstOrdinate + 1);
const isKingMovement = ordinated && abscissed ? `si` : `no`;
console.writeln(`La coordenada de origen (${firstAbscissa}, ${firstOrdinate})\
 y la coordenada de destino (${secondAbscissa}, ${secondOrdinate}) ${isKingMovement} es un movimiento de rey`);