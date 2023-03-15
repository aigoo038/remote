var pot = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/pot.js')
  .connect(A0);
var led = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/led.js')
  .connect(P1)
  .turnOn();
 
function updateBrightness() { 
  var val = pot.read();
  led.brightness(val);
}
 
setInterval(updateBrightness, 10);