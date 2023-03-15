var pot = require('@amperka/pot')
  .connect(A0);
var led = require('@amperka/led')
  .connect(P1)
  .turnOn();
 
function updateBrightness() { 
  var val = pot.read();
  led.brightness(val);
}
 
setInterval(updateBrightness, 10);