const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();
require("dotenv").config();

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// Route to handle the homepage (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Route for /world page
app.get("/world", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/world.html'));
});

// Route for /cart page
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/cart.html'));
});

// Add other routes as needed
app.get("/Chair", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/ARViews/chair.html'));
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Export the app as a serverless function
module.exports.handler = serverless(app);

// WebSocket handling (remove if running on Vercel)
const io = require('socket.io')(server); // You should set up socket.io only in local environments or non-serverless setups

io.sockets.on("connection", function (socket) {
  socket.userData = { x: 0, y: 0, z: 0, heading: 0 }; //Default values;

  console.log(`${socket.id} connected`);
  socket.emit("setId", { id: socket.id });
  socket.on("disconnect", function () {
    console.log(`${socket.id} disconnected`);
    socket.broadcast.emit("deletePlayer", { id: socket.id });
  });

  socket.on("init", function (data) {
    console.log(`socket.init ${data.model}`);
    socket.userData.model = data.model;
    socket.userData.colour = data.colour;
    socket.userData.x = data.x;
    socket.userData.y = data.y;
    socket.userData.z = data.z;
    socket.userData.heading = data.h;
    socket.userData.pb = data.pb;
    socket.userData.action = "Idle";
  });

  socket.on("update", function (data) {
    socket.userData.x = data.x;
    socket.userData.y = data.y;
    socket.userData.z = data.z;
    socket.userData.heading = data.h;
    socket.userData.pb = data.pb;
    socket.userData.action = data.action;
  });

  socket.on("added to cart", function (data) {
    socket.broadcast.emit("show added to cart", data);
  });

  socket.on("chat message", function (data) {
    console.log(`chat message:${data.id} ${data.message}`);
    io.to(data.id).emit("chat message", {
      id: socket.id,
      message: data.message,
    });
  });
});

// Sending data periodically (remove if using serverless environments)
setInterval(function () {
  const nsp = io.of("/");
  let pack = [];

  for (let id in io.sockets.sockets) {
    const socket = nsp.connected[id];
    // Only push sockets that have been initialised
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
