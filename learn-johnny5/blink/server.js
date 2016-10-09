var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(11);

  led.fadeIn();

  this.wait(5000, function() {
    led.fadeOut();
  });
});
