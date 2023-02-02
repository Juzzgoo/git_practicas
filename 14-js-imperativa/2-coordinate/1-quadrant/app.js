const { Console } = require("console-mpds");

const console = new Console();
const abscissa = console.readNumber(`Dame la abcisa de la coordenad: `);
const ordinate = console.readNumber(`Dame la ordenada de la coordenada: `);
const firstQuadrant = abscissa > 0 && ordinate > 0;
const secondQuadrant = abscissa < 0 && ordinate > 0;
const thirdQuadrant = abscissa < 0 && ordinate < 0;
const fourthQuadrant = abscissa > 0 && ordinate < 0;
console.writeln(`Primer método: 
La coordenada (${abscissa}, ${ordinate}) está en el ${firstQuadrant ? `primer cuadrante ` : 
(secondQuadrant ? `segundo cuadrante` : 
(thirdQuadrant ? `tercer cuadrante` : 
(fourthQuadrant ? `cuarto cuadrante` : ``)))}`);

const quadrant1 = abscissa > 0 && ordinate > 0 ? `primer cuadrante` : ``;
const quadrant2 = abscissa < 0 && ordinate > 0 ? `segundo cuadrante` : ``;
const quadrant3 = abscissa < 0 && ordinate < 0 ? `tercer cuadrante` : ``;
const quadrant4 = abscissa > 0 && ordinate < 0 ? `cuarto cuadrante` : ``;
const origin = abscissa === 0 && ordinate === 0 ? `origen de coordenadas` : ``;
const axisX = abscissa === 0 && ordinate !== 0 ? `eje de abcisas` : ``;
const axisY = abscissa !== 0 && ordinate === 0 ? `eje de ordenadas` : ``;
console.writeln(`Segundo método:
La coordenada (${abscissa}, ${ordinate}) está en el ${quadrant1 + quadrant2 + quadrant3 + quadrant4 + origin + axisX + axisY}`);