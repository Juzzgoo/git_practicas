const { Console } = require("console-mpds");

const console = new Console();
const abscissa = console.readNumber(`Dame la abcisa de la coordenad: `);
const ordinate = console.readNumber(`Dame la ordenada de la coordenada: `);

console.writeln(`Primera opción: 
La coordenada  (${abscissa}, ${ordinate}) ${abscissa === 0 ?
     ordinate === 0 ? ` está en el eje de abcisas y en el eje de ordenadas` : ` está en el eje de abcisas` 
        : ordinate === 0 ? `está en el eje de ordenadas` : `no está en eje alguno`}`);

const onXAxis = abscissa === 0 && ordinate !== 0 ? `está en el eje de abcisas` : ``;
const onYAxis = ordinate === 0 && abscissa !== 0 ? `está en el eje de ordenadas` : ``;
const origin = abscissa === 0 && ordinate === 0 ? `está en el eje de abcisas y en el de ordenadas. Origen.` : ``;
const noAxis = abscissa !== 0 && ordinate !== 0 ? `no está en eje alguno` : ``;

console.writeln(`Segunda opción:
La coordenada  (${abscissa}, ${ordinate}) ${onXAxis + onYAxis + origin + noAxis}`);