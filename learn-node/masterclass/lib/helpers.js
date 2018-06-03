/**
 * Helpers
 */

const crypto = require('crypto')

const config = require('../config')

// Container for all helpers
const helpers = {
  // Hash a string using crypto package
  hash: str => {
    if (typeof str === 'string' && str.length > 0) {
      return crypto
        .createHmac('sha256', config.hashingSecret)
        .update(str)
        .digest('hex')
    } else {
      return false
    }
  },

  // Parse a JSON string to an object in all cases, without throwing
  parseJsonToObject: str => {
    try {
      return JSON.parse(str)
    } catch (e) {
      return {}
    }
  }
}

module.exports = helpers
