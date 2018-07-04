const fs = require('fs')
const path = require('path')
const {promisify} = require('util')

const openFileAsync = promisify(fs.open)
const writeFileAsync = promisify(fs.writeFile)
const closeFileAsync = promisify(fs.close)

const helpers = require('./helpers')

const lib = {}

lib.baseDir = path.join(__dirname, '/../.data/')

lib.create = async (dir, filename, data) => {
  try {
    const fileDescriptor = await openFileAsync(
      `${lib.baseDir + dir}/${filename}.json`,
      'wx'
    )
    const stringData = JSON.stringify(data)
    await writeFileAsync(fileDescriptor, stringData)
    await closeFileAsync(fileDescriptor)
  } catch (e) {
    console.log(e)
    return e.message
  }

  return false
}

lib.read = async (dir, filename) => {
  try {
  } catch (e) {
  }
}

lib.read = (dir, filename, callback) => {
  fs.readFile(`${lib.baseDir + dir}/${filename}.json`, 'utf-8', (err, data) => {
    if (!err && data) {
      const parsedData = helpers.parseJsonToObject(data)
      callback(false, parsedData)
    } else {
      callback(err, data)
    }
  })
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
