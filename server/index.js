const express = require("express");
const path = require("path");
var jsonServer = require("json-server");

var server = jsonServer.create();
var db = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();

const app = express();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
// server.get("/echo", (req, res) => {
//   res.jsonp(req.query);
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === "POST") {
//     req.body.createdAt = Date.now();
//   }
//   // Continue to JSON Server router
//   next();
// });

// Use default router
server.use("/", db);
server.listen(8100, () => {
  console.log("JSON Server is running");
});

// app.use(express.static(path.join(__dirname, "../my-app/build")));

app.use("/", express.static(path.join(__dirname, "../build/")));

// viewed at http://localhost:8080
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(8000);
