var servo = require('@amperka/servo').connect(P13);
 
var pot = require('@amperka/pot').connect(A0);
 
setInterval(function() {
  var angle = 180 * pot.read(); 
  servo.write(angle);
}, 20);