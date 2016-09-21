const fs = require('fs');

let buff = fs.readFileSync(process.argv[2]);
let count = buff.toString().split('\n').length - 1;
console.log(count);
