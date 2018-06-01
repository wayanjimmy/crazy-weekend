/**
 * Primary file for the API
 */

// Depedencies
const http = require('http')
const url = require('url')

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true)

  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  res.end('Hello World\n')

  // Log the request path
  console.log('Request received on this path: ' + trimmedPath)
})

// Start the server
server.listen(3000, () => {
  console.log('The server is listening on port 3000 now.')
})
