var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port = 8021;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function() {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// API definition
require('./api/login')(app);

exports = module.exports = app;


// var ws = require("websocket.io");
// var server = ws.listen(8888,
//   function () {
//     console.log("ws start");
//   }
// );

// server.on("connection",
//   (socket) => {
//     socket.on("message",
//       (data) => {
//         console.log("message " + data);
//         server.clients.forEach(
//           (client) => {
//             client.send(data);
//           }
//         );
//       }
//     );
//   }
// );