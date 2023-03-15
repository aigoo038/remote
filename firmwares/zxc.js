var ir = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/ir-receiver.js')
  .connect(P7);
 
var light = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/led.js')
  .connect(P1);
 
var powerCode = null;
 
ir.on('receive', function(code, repeat) { 
  if (repeat) {
    return; 
  }
 
  if (powerCode === null) {
    powerCode = code; 
  }
 
  if (code === powerCode) {
    light.toggle(); 
  }
});