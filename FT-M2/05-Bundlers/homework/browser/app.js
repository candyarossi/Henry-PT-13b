//(function () {

const whiteboard = require("./whiteboard.js");
//var whiteboard = window.whiteboard;

const socket = require("socket.io-client");
// const io = require('socket.io-client');
// const socket = io(window.location.origin);

//var socket = window.io(window.location.origin);

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});
//})();
