const { Console } = require("console-mpds");

const console = new Console();

let x = 0;
if (x>=0)
    x++;
console.writeln(x);
if (x>1)
    x++;
else
    x--;
console.writeln(x);