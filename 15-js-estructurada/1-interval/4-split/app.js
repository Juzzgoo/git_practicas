const { Console } = require("console-mpds");

const console = new Console();
let minInterval;
let maxInterval;
let isValidInterval = false;
do {
    minInterval = console.readNumber(`Dame el mínimo del intervalo: `);
    maxInterval = console.readNumber(`Dame el máximo del intervalo:`);
    isValidInterval = maxInterval > minInterval;
    if (!isValidInterval){
        console.writeln(`Error!!! el máximo del intervalo debe ser mayor al mínimo`);
    }
} while (!isValidInterval);
let split;
let isValidSplit = false;
do{
    split = console.readNumber(`introduce una cantidad positiva de intervalos: `);
    isValidSplit = split > 0;
    if (!isValidSplit) {
        console.writeln(`Error!!! la cantidad de intervalos debe ser positiva.`);
    }
} while (!isValidSplit);
const lenghInterval = maxInterval - minInterval;
const size = lenghInterval / split;
let result = ``;
for (let i=0; i < split; i++){
    result += `[${minInterval + i*size}, ${minInterval + (i+1)*size}]`;
    result += `${i < split-2 ? `, ` : (i < split-1 ? ` y ` : `.`)}`;
}
console.writeln(`El intervalo [${minInterval}, ${maxInterval}] dividido en ${split} intervalo${split>1?'s son':' es'}: ${result}`);