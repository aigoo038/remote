var led = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/led.js') 
  .connect(P1);
 
var pot = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/pot.js') 
  .connect(A0);
 
var sensor = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/light-sensor.js') 
  .connect(A2);
 
setInterval(function() {
  var threshold = pot.read() * 100; var luxes = sensor.read('lx');
  if (luxes < threshold) {
    led.turnOn(); 
  } else {
    led.turnOff(); 
  }
}, 10);