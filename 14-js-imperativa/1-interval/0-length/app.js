const { Console } = require("console-mpds");

const console = new Console();
const minInterval = console.readNumber(`Introduce el mínimo del intervalo: `);
const maxInterval = console.readNumber(`Introduce el máximo del intervalo (superior o igual al mínimo); `);
const lenghtInterval = maxInterval - minInterval;
console.writeln( minInterval > maxInterval ?
`Error!!! el valor del máximo tiene que ser mayor o igual al del mínimo`:
`La longitud del intervalo [${minInterval}, ${maxInterval}] es ${lenghtInterval}`);