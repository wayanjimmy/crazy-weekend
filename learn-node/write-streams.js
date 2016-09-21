const fs = require('fs')
const readSteam = fs.createReadStream('foo.txt')
const writeStream = fs.createWriteStream('bar.txt')

readSteam.pipe(writeStream)