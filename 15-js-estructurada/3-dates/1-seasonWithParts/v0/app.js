const { Console } = require("console-mpds");

const console = new Console();
let day;
let month;
let year;
do {
    day = console.readNumber('Escribe un día (1-30): ');
} while (1 > day || day > 30);
do {
    month = console.readNumber(`Escribe un mes (1-12)`);
} while (1 > month|| month > 12);

do {
    year = console.readNumber(`Escribe un año (1-...)`);
} while (year <= 0);
const dayOfYear = ((month - 1) * 30) + day;
const BEGIN_SPRING = 2 * 30 + 21;
const BEGIN_SUMMER = 5 * 30 + 21;
const BEGIN_AUTUMN = 8 * 30 + 21;
const BEGIN_WINTER = 11 * 30 + 21;
let season = `invierno`;
let firstDay;
if (dayOfYear >= BEGIN_SPRING && dayOfYear < BEGIN_SUMMER){
    season = `Primavera`
    firstDay = BEGIN_SPRING;
} else if (dayOfYear >= BEGIN_SUMMER && dayOfYear < BEGIN_AUTUMN) {
    season = `verano`;
    firstDay = BEGIN_SUMMER
} else if (dayOfYear >= BEGIN_AUTUMN && dayOfYear < BEGIN_WINTER) {
    season = `otoño`;
    firstDay = BEGIN_AUTUMN
} else {    
    if ( dayOfYear >= BEGIN_WINTER){
        firstDay = BEGIN_WINTER;
    } else {
        firstDay = -10;
    }
}
let period;
if (dayOfYear <= firstDay + 30){
    period = `primeros`;
} else if (dayOfYear <= firstDay + 60) {
    period = `mediados`;
} else {
    period = `finales`;
}
console.writeln(`El día ${day}/${month}/${year} cae a ${period} de ${season}.`);