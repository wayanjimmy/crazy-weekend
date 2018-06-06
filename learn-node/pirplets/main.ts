import "babel-polyfill";

import * as http from "http";

const httpServer = http.createServer((req, res) => {
  res.end(`Hello world!`);
});

httpServer.listen(3000, () => {
  console.log(`The server is listening on port ${3000}`);
});
