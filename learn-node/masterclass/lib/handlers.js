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

// Edit an user
// TODO: only authenticated user access their object. If one not found use the not found handler.
handlers._users.put = (data, callback) => {
  // check for required fields
  const phone =
    typeof data.payload.phone === 'string' &&
    data.payload.phone.trim().length === 10
      ? data.payload.phone.trim()
      : false

  // check for optional fields
  const firstname =
    typeof data.payload.firstName === 'string' &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false

  const lastname =
    typeof data.payload.lastName === 'string' &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false

  const password =
    typeof data.payload.password === 'string' &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false

  // Error if phone is invalid
  if (phone) {
    if (firstName || lastName || password) {
      // Lookup the user
      dataStore.read('users', phone, (err, userData) => {
        if (!err && userData) {
          if (firstname) {
            userData.firstName = firstName
          }

          if (lastname) {
            userData.lastName = lastName
          }

          if (password) {
            userData.password = helpers.hash(password)
          }

          dataStore.update('users', phone, userData, err => {
            if (!err) {
              callback(200)
            } else {
              console.log(err)
              callback(500, {errors: 'could not update the user'})
            }
          })
        } else {
          callback(400, {errors: 'The specified user does not exist'})
        }
      })
    } else {
      callback(400, {errors: 'Missing fields to update'})
    }
  } else {
    callback(400, {errors: 'Missing required fields'})
  }
}

// Delete an user
handlers._users.delete = (data, callback) => {
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
        dataStore.delete('users', phone, err => {
          if (!err) {
            callback(200)
          } else {
            callback(500, {errors: 'could not delete user'})
          }
        })
      } else {
        callback(404, {errors: 'user not found'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

handlers.tokens = (data, callback) => {
  const acceptableMethods = ['get', 'post', 'put', 'delete']

  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback)
  } else {
    callback(405)
  }
}

handlers._tokens = {}

handlers._tokens.post = (data, callback) => {
  // check for required fields
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

  if (phone && password) {
    dataStore.read('users', phone, (err, userData) => {
      if (!err && userData) {
        const hashedPassword = helpers.hash(password)
        if (hashedPassword === userData.hashedPassword) {
          const tokenId = helpers.createRandomString(20)
          const expires = Date.now() + 1000 * 60 * 60
          const tokenObject = {
            phone,
            id: tokenId,
            expires
          }

          // Store the token
          dataStore.create('tokens', tokenId, tokenObject, err => {
            if (!err) {
              callback(200, tokenObject)
            } else {
              console.log(err)
              callback(500, {errors: 'Could not create the new token'})
            }
          })
        } else {
          callback(400, {errors: `Password did not match the specified user`})
        }
      } else {
        callback(400, {errors: 'could not find the specified user'})
      }
    })
  } else {
    callback(400, {errors: 'Missing requried fields'})
  }
}
handlers._tokens.get = (data, callback) => {}
handlers._tokens.put = (data, callback) => {}
handlers._tokens.delete = (data, callback) => {}

handlers.notFound = (data, callback) => {
  callback(404)
}

module.exports = handlers
