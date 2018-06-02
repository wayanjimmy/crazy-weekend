/**
 * Create and export configuration variables
 *
 */

// Container for all the environments
const environments = {}

// Development (default) environment
environments.development = {
  port: 3000,
  envName: 'development'
}

// Production environment
environments.production = {
  port: 5000,
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
