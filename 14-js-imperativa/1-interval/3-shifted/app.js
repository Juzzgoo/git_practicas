const { Console } = require("console-mpds");
const console = new Console();

const min = console.readNumber(`Introduce el mínimo del intervalo: `);
const max = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
const displacementFactor = console.readNumber(`Introduce un factor de desplazamiento:`);
const newMin = min+displacementFactor;
const newMax = max+displacementFactor;
console.writeln(`El intervalo [${min}, ${max}] con factor de desplazamiento ${displacementFactor} es el intervalo [${newMin}, ${newMax}]`);