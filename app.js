const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
require("dotenv").config();

const PORT = process.env.PORT || 2002;

// Serve static files
app.use(express.static(__dirname + '/client'));
app.use(express.static("./client/libs"));
app.use(express.static("./client/v3"));

// Routes for your pages
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
app.get("/Headphones", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/headphones.html`);
});
app.get("/Lamp", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/lamp.html`);
});
app.get("/Sandal", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/sandal.html`);
});
app.get("/Almirah", function (req, res) {
  res.sendFile(__dirname + `/client/ARViews/almirah.html`);
});

// Socket.io connection handler
io.sockets.on("connection", function (socket) {
  // Handle socket.io events
  // Your socket logic here...
});

// This setInterval logic is fine as long as it's needed for your real-time data updates
setInterval(function () {
  const nsp = io.of("/");
  let pack = [];

  for (let id in io.sockets.sockets) {
    const socket = nsp.connected[id];
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

// Export the app to be used by Vercel's serverless functions
module.exports = app;
