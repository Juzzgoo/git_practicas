const { Console } = require("console-mpds");

const console = new Console();
const firstAbscissa = console.readNumber(`Coordenada de origen: 
Dame la abcisa de la coordenada: `);
const firstOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const secondAbscissa = console.readNumber(`Coordenada de destino: 
Dame la abcisa de la coordenada: `);
const secondOrdinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const ordinateVariationOne = secondOrdinate === firstOrdinate+1 || secondOrdinate === firstOrdinate-1;
const ordinateVariationTwo = secondOrdinate === firstOrdinate+2 || secondOrdinate === firstOrdinate-2;
const movementOne = secondAbscissa === firstAbscissa-1 && ordinateVariationTwo;
const movementTwo = secondAbscissa === firstAbscissa+1 && ordinateVariationTwo;
const movementTree = secondAbscissa === firstAbscissa-2 && ordinateVariationOne;
const movementFor = secondAbscissa === firstAbscissa+2 && ordinateVariationOne;
const isHorseMovement = movementOne || movementTwo || movementTree || movementFor ? "si" : "no";

console.writeln(`La coordenada de origen (${firstAbscissa}, ${firstOrdinate})\
 y la coordenada de destino (${secondAbscissa}, ${secondOrdinate}) ${isHorseMovement} es un movimiento de caballo`);