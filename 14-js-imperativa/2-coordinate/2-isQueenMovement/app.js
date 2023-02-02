const { Console } = require("console-mpds");

const console = new Console();
const firstAbscissa = console.readNumber(`Coordenada de origen: 
Dame la abcisa de la coordenada: `);
const firstOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const secondAbscissa = console.readNumber(`Coordenada de destino: 
Dame la abcisa de la coordenada: `);
const secondOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);

const abscissed = (firstAbscissa - 8) <= secondAbscissa && secondAbscissa <= (firstAbscissa + 8);
const ordinated = (firstOrdinate - 8) <= secondOrdinate && secondOrdinate <= (firstOrdinate + 8)
const vertical = firstAbscissa === secondAbscissa && ordinated;
const horizontal = firstOrdinate === secondOrdinate && abscissed;
const difAbscissa = firstAbscissa - secondAbscissa >= 0 ?
    firstAbscissa - secondAbscissa :
        (firstAbscissa - secondAbscissa) * -1;
const difOrdinate = firstOrdinate - secondOrdinate >= 0 ?
    firstOrdinate - secondOrdinate :
        (firstOrdinate - secondOrdinate) * -1;
const diagonal = difAbscissa <= 8 && difAbscissa === difOrdinate;
const isQueenMovement = vertical || horizontal || diagonal ? `si` : `no`;
console.writeln(`La coordenada de origen (${firstAbscissa}, ${firstOrdinate})\
 y la coordenada de destino (${secondAbscissa}, ${secondOrdinate}) ${isQueenMovement} es un movimiento de reina`);