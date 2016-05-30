var ws = require("websocket.io");
var server = ws.listen(8888,
  function () {
    console.log("ws start");
  }
);

server.on("connection",
  (socket) => {
    socket.on("message",
      (data) => {
        console.log("message " + data);
        server.clients.forEach(
          (client) => {
            client.send(data);
          }
        );
      }
    );
  }
);