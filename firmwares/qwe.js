var led = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/led.js')
  .connect(P1);
 
var button = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/button.js')
  .connect(P3);
 
function myCoolButtonHandler() {
  led.toggle();
}
 
button.on('press', myCoolButtonHandler);