const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
require("dotenv").config();

const PORT = process.env.PORT || 2002;
app.use(express.static(__dirname + '/client'));
app.use(express.static("./client/libs"));
app.use(express.static("./client/v3"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/index.html");
});
app.get("/world", function (req, res) {
  res.sendFile(__dirname + "/client/world.html");
});
app.get("/cart", function (req, res) {
  res.sendFile(__dirname + "/client/cart.html");
});
app.get("/Chair", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/chair.html`);
});
app.get("/Hoddie", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/hoddie.html`);
});

io.sockets.on("connection", function (socket) {
  // ...
});

http.listen(PORT, function () {
  console.log("listening on *:2002");
});

setInterval(function () {
  const nsp = io.of("/");
  let pack = [];

  for (let id in io.sockets.sockets) {
    const socket = nsp.connected[id];
    //Only push sockets that have been initialised
    if (socket.userData.model !== undefined) {
      pack.push({
        id: socket.id,
        model: socket.userData.model,
        colour: socket.userData.colour,
        x: socket.userData.x,
        y: socket.userData.y,
        z: socket.userData.z,
        heading: socket.userData.heading,
        pb: socket.userData.pb,
        action: socket.userData.action,
      });
    }
  }
  if (pack.length > 0) io.emit("remoteData", pack);
}, 40);