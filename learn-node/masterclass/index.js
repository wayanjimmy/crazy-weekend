/**
 * Primary file for the API
 */

// Depedencies
const http = require('http')
const https = require('https')
const url = require('url')
const {StringDecoder} = require('string_decoder')
const fs = require('fs')

const config = require('./config')
const handlers = require('./lib/handlers')
const helpers = require('./lib/helpers')

// Define a request router
const router = {
  sample: handlers.sample,
  users: handlers.users,
  tokens: handlers.tokens,
}

const unifiedServer = (req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true)

  const path = parsedUrl.pathname

  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Get the HTTP method
  const method = req.method.toLowerCase()

  // Get the headers as an object
  const headers = req.headers

  // Get query string as an object
  const queryStringObject = parsedUrl.query

  // Get the payload if any
  const decoder = new StringDecoder('utf-8')
  let buffer = ''
  req.on('data', data => {
    buffer += decoder.write(data)
  })
  req.on('end', () => {
    buffer += decoder.end()

    // Choose the handler this request should go to

    const chosenHandler =
      Object.keys(handlers).indexOf(trimmedPath) !== -1
        ? handlers[trimmedPath]
        : handlers.notFound

    // Construct data to send to the handler
    data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: helpers.parseJsonToObject(buffer)
    }

    chosenHandler(data, (statusCode = 200, payload = {}) => {
      const payloadString = JSON.stringify(payload)

      res.setHeader('Content-Type', 'application/json')
      res.writeHead(statusCode)
      res.end(payloadString)
    })
  })
}

// The server should respond to all requests with a string
const httpServer = http.createServer((req, res) => unifiedServer(req, res))

// Start the server
httpServer.listen(config.httpPort, () => {
  console.log(
    `The server is listening on port ${config.httpPort} now with environment ${
      config.envName
    }`
  )
})

// The server should respond to all requests with a string
const httpsServerOptions = {
  key: fs.readFileSync('./https/key.pem'),
  cert: fs.readFileSync('./https/cert.pem')
}
const httpsServer = https.createServer(httpsServerOptions, (req, res) =>
  unifiedServer(req, res)
)

// Start the server
httpsServer.listen(config.httpsPort, () => {
  console.log(
    `The server is listening on port ${config.httpsPort} now with environment ${
      config.envName
    }`
  )
})
