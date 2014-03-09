var BCSocket = require('browserchannel').BCSocket;

var socket = new BCSocket('http://127.0.0.1:4444/channel');
socket.onopen = function() {
  socket.send({hi:'there'});
};
socket.onmessage = function(message) {
  console.log('got message', message);
};


setTimeout(function(){
  console.log('close socket');
  socket.close()
},3000);