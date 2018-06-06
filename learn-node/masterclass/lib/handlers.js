// Define the handlers

const dataStore = require('./data')
const helpers = require('./helpers')

const handlers = {}

handlers.ping = (data, callback) => {
  callback(200)
}

handlers.users = (data, callback) => {
  const acceptableMethods = ['get', 'post', 'put', 'delete']

  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback)
  } else {
    callback(405)
  }
}

// Container for the users submethods
handlers._users = {}

// TODO: only authenticated user access their object. If one not found use the not found handler.
handlers._users.get = (data, callback) => {
  // Check that phone number is valid
  const phone =
    typeof data.queryStringObject.phone === 'string' &&
    data.queryStringObject.phone.trim().length === 10
      ? data.queryStringObject.phone.trim()
      : false

  if (phone) {
    // Lookup the user
    dataStore.read('users', phone, (err, data) => {
      console.log(err, data)
      if (!err && data) {
        // Remove hashedPassword before return response to the world
        delete data.hashedPassword
        callback(200, data)
      } else {
        callback(404, {errors: 'user not found'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

// Create a new user
handlers._users.post = (data, callback) => {
  const firstName =
    typeof data.payload.firstName === 'string' &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false

  const lastName =
    typeof data.payload.lastName === 'string' &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false

  const phone =
    typeof data.payload.phone === 'string' &&
    data.payload.phone.trim().length === 10
      ? data.payload.phone.trim()
      : false

  const password =
    typeof data.payload.password === 'string' &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false

  const tosAgreement =
    typeof data.payload.tosAgreement === 'string' &&
    data.payload.tosAgreement === 'true'
      ? true
      : false

  if (firstName && lastName && phone && password && tosAgreement) {
    // Make sure that the user doesn't exist
    dataStore.read('users', phone, (err, data) => {
      if (err) {
        const hashedPassword = helpers.hash(password)

        if (hashedPassword) {
          // Create user object
          const user = {
            firstName,
            lastName,
            phone,
            hashedPassword,
            tosAgreement
          }

          dataStore.create('users', phone, user, err => {
            if (!err) {
              callback(200, user)
            } else {
              callback(500, {errors: 'Error saving to data store'})
            }
          })
        } else {
          callback(500, {errors: 'Error hashing password'})
        }
      } else {
        callback(400, {errors: 'A user with that phone number already exists'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

// Edit an user
// TODO: only authenticated user access their object. If one not found use the not found handler.
handlers._users.put = (data, callback) => {

}

// Delete an user
handlers._users.delete = (data, callback) => {}

handlers.notFound = (data, callback) => {
  callback(404)
}

module.exports = handlers
