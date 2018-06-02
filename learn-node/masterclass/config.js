/**
 * Create and export configuration variables
 *
 */

// Container for all the environments
const environments = {}

// Development (default) environment
environments.development = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: 'development'
}

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: 'production'
}

const currentEnvironment =
  typeof process.env.NODE_ENV === 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : ''

const environmentToExport =
  Object.keys(environments).indexOf(currentEnvironment) !== -1
    ? environments[currentEnvironment]
    : environments.development

module.exports = environmentToExport
