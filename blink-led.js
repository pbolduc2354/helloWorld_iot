var jfive = require("johnny-five");
var board, led;

board = new jfive.Board();

board.on("ready", function() {
    led = new jfive.Led(10)
    led.blink(1000)
});