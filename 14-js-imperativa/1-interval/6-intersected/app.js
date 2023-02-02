const { Console } = require("console-mpds");
const console = new Console();

const min1 = console.readNumber(`Primer intervalo:
Introduce el mínimo del intervalo: `);
const max1 = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
const min2 = console.readNumber(`Segundo intervalo:
Introduce el mínimo del intervalo: `);
const max2 = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo): `);
const intersection1 = min1 >= min2 && min1 <= max2 || max1 <= max2 && max1 >= min2;
const intersection2 = min2 >= min1 && min2 <= max1 || max2 <= max1 && max2 >= min1;
const intersection = intersection1 || intersection2;
console.writeln(`El intervalo  [${min1}, ${max1}] ${intersection ? `Si` : `No`} intersecta con [${min2}, ${max2}]`);

const msgReadMin = "Introduce el mínimo del intervalo:";
const msgReadMax = "Introduce el máximo del intervalo (superior o igual al mínimo):";
const minFirst = console.readNumber(`Primer intervalo:
${msgReadMin}`);
const maxFirst = console.readNumber(msgReadMax);
const minSecond = console.readNumber(`Segundo intervalo:
${msgReadMin}`);
const maxSecond = console.readNumber(msgReadMax);
let msg = `El intervalo [${minFirst}, ${maxFirst}]`;
msg += minFirst <= maxSecond && minSecond <= maxFirst || minSecond <= maxFirst && minFirst <= maxSecond ? ` sí ` : ` no `;
msg += `intersecta con el intervalo [${minSecond}, ${maxSecond}]`;
console.writeln(msg);