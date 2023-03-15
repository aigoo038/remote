var servo = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/servo.js').connect(P13);
var pot = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/pot.js').connect(A0);

setInterval(function() {
  var angle = 180 * pot.read();
  servo.write(angle);
}, 20);
