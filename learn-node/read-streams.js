const fs = require('fs')
const stream = fs.createReadStream('foo.txt')

stream.on('data', data => {
  let chunk = data.toString()
  process.stdout.write(chunk)
})

stream.on('end', () => console.log())

stream.on('error', error => console.error(error.message))