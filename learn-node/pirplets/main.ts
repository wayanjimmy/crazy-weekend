import "babel-polyfill";

import * as http from "http";
import * as url from "url";
import { StringDecoder } from "string_decoder";

const httpServer = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  const queryStringObject = parsedUrl.query;

  const method = req.method.toLowerCase();

  const headers = req.headers;

  const decoder = new StringDecoder("utf-8");
  let buffer = "";

  req.on("data", (data: Buffer) => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();

    console.log(buffer);
  });

  console.log("Request headers: ", headers);

  res.end(`Hello world!`);
});

httpServer.listen(3000, () => {
  console.log(`The server is listening on port ${3000}`);
});
