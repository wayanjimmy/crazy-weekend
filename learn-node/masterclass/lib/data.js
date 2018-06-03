const fs = require('fs')
const path = require('path')

const lib = {}

lib.baseDir = path.join(__dirname, '/../.data/')

lib.create = (dir, filename, data, callback) => {
  fs.open(
    `${lib.baseDir + dir}/${filename}.json`,
    'wx',
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data)

        fs.writeFile(fileDescriptor, stringData, err => {
          if (!err) {
            fs.close(fileDescriptor, err => {
              if (!err) {
                callback(false)
              } else {
                callback('Error closing new file')
              }
            })
          } else {
            callback('Error writing to a new file')
          }
        })
      } else {
        callback('Could not create a new file, it may already exists')
      }
    }
  )
}

lib.read = (dir, filename, callback) => {
  fs.readFile(`${lib.baseDir + dir}/${filename}.json`, 'utf-8', (err, data) =>
    callback(err, data)
  )
}

lib.update = (dir, filename, data, callback) => {
  fs.open(
    `${lib.baseDir + dir}/${filename}.json`,
    'r+',
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data)

        fs.truncate(fileDescriptor, err => {
          if (!err) {
            fs.writeFile(fileDescriptor, stringData, err => {
              if (!err) {
                fs.close(fileDescriptor, err => {
                  if (!err) {
                    callback(false)
                  } else {
                    callback('Error closing file')
                  }
                })
              } else {
                callback('Error writing to the file')
              }
            })
          } else {
            callback('Error truncating file')
          }
        })
      }
    }
  )
}

lib.delete = (dir, filename, callback) => {
  fs.unlink(`${lib.baseDir + dir}/${filename}.json`, err => {
    if (!err) {
      callback(false)
    } else {
      callback(err)
    }
  })
}

module.exports = lib
