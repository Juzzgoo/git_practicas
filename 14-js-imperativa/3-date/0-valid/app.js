const { Console } = require("console-mpds");

const console = new Console();
const day = console.readNumber(`Dame el día: `);
const month = console.readNumber(`Dame el mes: `);
const year = console.readNumber(`Dame el año: `);

const validMonth = 0 < month && month < 13;
const validYear = 0 < year && year < 2100;
const validDay = 0 < day && day < (month === 6 || month === 9 || month === 11 ? 31 
    : month === 2 && year % 4 === 0 ? 30 
    : month === 2 && year % 4 !== 0 ? 29 
    : 32);

console.writeln(`La fecha ${day}/${month}/${year} ${validMonth && validYear && validDay ? `si` : `no`} es válida`);