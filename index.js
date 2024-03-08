const { Server } = require("socket.io");

const io = new Server(3000);

io.on("connection", (socket) => {
   socket.on("RoadOne",() => {
     socket.join("wtech-001");
   });
  io.to("wtech-001").emit("welocme","Hello")
});
