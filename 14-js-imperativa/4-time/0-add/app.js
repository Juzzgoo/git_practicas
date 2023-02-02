const { Console } = require("console-mpds");

const console = new Console();

const firstOurs = console.readNumber(`Primera duración:
dame las horas: `);
const firstMinutes = console.readNumber(`Dame los minutos: `);
const firstSeconds = console.readNumber(`Dame los segundos: `)
const secondOurs = console.readNumber(`Segunda duración: 
Dame las horas: `);
const secondMinutes = console.readNumber(`Dame los minutos: `);
const secondSeconds = console.readNumber(`Dame los segundos: `);

const addSeconds = firstSeconds + secondSeconds;
const secondsToMinutes = parseInt(addSeconds/60);
const finalSeconds = addSeconds % 60;

const addMinutes = firstMinutes + secondMinutes + secondsToMinutes;
const minutesToOurs = parseInt(addMinutes/60);
const finalMinutes = addMinutes % 60;

const finalOurs = firstOurs + secondOurs + minutesToOurs;

console.writeln(`La suma es: ${finalOurs}:${finalMinutes}:${finalSeconds}`);