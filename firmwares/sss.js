var light = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/led.js')
  .connect(P1)
  .turnOn()
  .brightness(0);
  
var button = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/button.js')
  .connect(P3);
  
var anim = require('https://github.com/amperka/espruino-modcat/blob/master/modules/%40amperka/animation.js')
  .create()
  .reverse();
  
anim.on('update', function(val) { 
  light.brightness(val);
});

button.on('press', function() { 
  anim.reverse().play();
});