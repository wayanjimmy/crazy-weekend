// Define the handlers

const dataStore = require('./data')
const helpers = require('./helpers')
const config = require('../config')

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
    // Get the token from headers
    const token =
      typeof data.headers.token === 'string' ? data.headers.token : false
    handlers._tokens.verifyToken(token, phone, tokenIsValid => {
      if (tokenIsValid) {
        dataStore.read('users', phone, (err, data) => {
          if (!err && data) {
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
            callback(404)
          }
        })
      } else {
        callback(403, {
          errors: 'missing required token in header or token is invalid'
        })
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

// Edit an user
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
      const token =
        typeof data.headers.token === 'string' ? data.headers.token : false

      handlers._tokens.verifyToken(token, phone, tokenIsValid => {
        if (tokenIsValid) {
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
          callback(403, {
            errors: 'missing required token in header or token is invalid'
          })
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
    const token =
      typeof data.headers.token === 'string' ? data.headers.token : false

    handlers._tokens.verifyToken(token, phone, tokenIsValid => {
      if (tokenIsValid) {
        // Lookup the user
        dataStore.read('users', phone, (err, data) => {
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
        callback(403, {
          errors: 'missing required token in header or token is invalid'
        })
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

handlers._tokens.get = (data, callback) => {
  const id =
    typeof data.queryStringObject.id === 'string' &&
    data.queryStringObject.id.trim().length === 20
      ? data.queryStringObject.id.trim()
      : false

  if (id) {
    // Lookup the user
    dataStore.read('tokens', id, (err, tokenData) => {
      if (!err && tokenData) {
        callback(200, tokenData)
      } else {
        callback(404, {errors: 'token not found'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

handlers._tokens.put = (data, callback) => {
  const id =
    typeof data.payload.id === 'string' && data.payload.id.trim().length === 20
      ? data.payload.id.trim()
      : false

  const extend = typeof data.payload.extend === 'string' && data.payload.extend

  if (id && extend) {
    dataStore.read('tokens', id, (err, tokenData) => {
      if (!err && tokenData) {
        if (tokenData.expires > Date.now()) {
          tokenData.expires = Date.now() + 1000 * 60 * 60

          dataStore.update('tokens', id, tokenData, err => {
            if (!err) {
              callback(200, tokenData)
            } else {
              callback(500, {errors: 'could not update the token expiration'})
            }
          })
        } else {
          callback(400, {
            errors: 'token has already expired and cannot be extended'
          })
        }
      } else {
        callback(404, {errors: 'token not found'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

handlers._tokens.delete = (data, callback) => {
  const id =
    typeof data.queryStringObject.id === 'string' &&
    data.queryStringObject.id.trim().length === 20
      ? data.queryStringObject.id.trim()
      : false

  if (id) {
    // Lookup the user
    dataStore.read('tokens', id, (err, data) => {
      if (!err && data) {
        dataStore.delete('tokens', id, err => {
          if (!err) {
            callback(200)
          } else {
            callback(500, {errors: 'could not delete token'})
          }
        })
      } else {
        callback(404, {errors: 'token not found'})
      }
    })
  } else {
    callback(400, {errors: 'missing required fields'})
  }
}

handlers._tokens.verifyToken = (id, phone, callback) => {
  dataStore.read('tokens', id, (err, tokenData) => {
    if (!err && tokenData) {
      if (tokenData.phone === phone && tokenData.expires > Date.now()) {
        callback(true)
      } else {
        callback(false)
      }
    } else {
      callback(false)
    }
  })
}

handlers.checks = (data, callback) => {
  const acceptableMethods = ['post']

  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback)
  } else {
    callback(405)
  }
}

// Container for all checks method
handlers._checks = {}

// Checks - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none

handlers._checks.post = (data, callback) => {
  const protocol =
    typeof data.payload.protocol === 'string' &&
    ['https', 'http'].indexOf(data.payload.protocol) > -1
      ? data.payload.protocol
      : false

  const url =
    typeof data.payload.url === 'string' && data.payload.url.length > 0
      ? data.payload.url
      : false

  const method =
    typeof data.payload.method === 'string' &&
    ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1
      ? data.payload.method
      : false

  const successCodes =
    typeof data.payload.successCodes === 'object' &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0
      ? data.payload.successCodes
      : false

  const timeoutSeconds =
    typeof data.payload.timeoutSeconds === 'number' &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5
      ? data.payload.timeoutSeconds
      : false

  if (protocol && url && method && successCodes && timeoutSeconds) {
    const token =
      typeof data.headers.token === 'string' ? data.headers.token : false

    // Lookup the user by reading the token
    dataStore.read('tokens', token, (err, tokenData) => {
      if (!err && tokenData) {
        const userPhone = tokenData.phone

        dataStore.read('users', userPhone, (err, userData) => {
          if (!err && userData) {
            const userChecks =
              typeof userData.checks === 'object' &&
              userData.checks instanceof Array
                ? userData.checks
                : []

            // Verify that the user has less then the number of max-checks-per-user
            if (userChecks.length < config.maxChecks) {
              // Create a random id for the check
              const checkId = helpers.createRandomString(20)

              // Create the check object and include the user's phone
              const checkObject = {
                id: checkId,
                userPhone,
                protocol,
                url,
                method,
                successCodes,
                timeoutSeconds
              }

              dataStore.create('checks', checkId, checkObject, err => {
                if (!err) {
                  userData.checks = userChecks
                  userData.checks.push(checkId)

                  // Save the new user data
                  dataStore.update('users', userPhone, userData, err => {
                    if (!err) {
                      callback(200, checkObject)
                    } else {
                      callback(500, {
                        error: 'could not update the user with the new check'
                      })
                    }
                  })
                } else {
                  callback(500, {error: 'could not create the new check'})
                }
              })
            } else {
              callback(400, {
                error: `the user already has the maximum number of checks (${
                  config.maxChecks
                })`
              })
            }
          } else {
            callback(403)
          }
        })
      } else {
        callback(403)
      }
    })
  } else {
    callback(400, {error: 'missing required fields'})
  }
}

handlers.notFound = (data, callback) => {
  callback(404)
}

module.exports = handlers
