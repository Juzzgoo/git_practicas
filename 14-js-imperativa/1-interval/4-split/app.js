const { Console } = require("console-mpds");
const console = new Console();

const min = console.readNumber(`Introduce el mínimo del intervalo: `);
let max;
do {
    max = console.readNumber(`Introduce el máximo del intervalo: `);
    if (max < min) {
        console.writeln(`Error!!! El máximo tiene que ser mayor o igual al mínimo`);
    }
}while(max < min);
console.writeln(`El intervalo [${min}, ${max}]`);