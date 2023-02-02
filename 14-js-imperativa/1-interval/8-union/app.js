const { Console } = require("console-mpds");
const console = new Console();

const min1 = console.readNumber(`Primer intervalo:
Introduce el mínimo del intervalo: `);
const max1 = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
const min2 = console.readNumber(`Segundo intervalo:
Introduce el mínimo del intervalo: `);
const max2 = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
const minUnion = min1 <= min2 ? min1 : min2;
const maxUnion = max1 <= max2 ? max2 : max1;
console.writeln(`El intervalo  [${min1}, ${max1}] intersección con el intervalo [${min2}, ${max2}] es el intervalo [${minUnion}, ${maxUnion}]`);