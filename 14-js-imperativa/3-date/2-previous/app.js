const { Console } = require("console-mpds");

const console = new Console();
const day = console.readNumber(`Dame el día: `);
const month = console.readNumber(`Dame el mes: `);
const year = console.readNumber(`Dame el año: `);

const validMonth = 0 < month && month < 13;
const validYear = 0 < year && year < 2100;
const validDay = 0 < day && day < (month === 4 || month === 6 || month === 9 || month === 11 ? 31 
    : month === 2 && year % 4 === 0 ? 30 
    : month === 2 && year % 4 !== 0 ? 29 
    : 32);

const newMonth = (month === 1 && day === 1) ? 12 : day === 1 ? month -1 : month;
const newYear = newMonth === 12 ? year - 1 : year;
const newDay = day === 1 ? 
(month === 3 ? 
    (year % 4 === 0 ? 
        29 : 
        28) 
        : (month === 5 || month === 7 || month === 10 || month === 12 ?
             30 
             : 31)) 
             : day - 1;

const datePrevious = `la anterior ${newDay}/${newMonth}/${newYear}`;
const noDate = `no es válida`;
console.writeln(`La fecha ${day}/${month}/${year} ${validMonth && validYear && validDay ? datePrevious : noDate}`);