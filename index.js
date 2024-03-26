const { Server } = require("socket.io");

const io = new Server(3000);

io.on("connection", (socket) => {
   socket.emit("con","hello");
   socket.on("join", function(room, username){
    if (username != ""){
      rooms[socket.id] = room;
      usernames[socket.id] = username;
      socket.leaveAll();
      socket.join(room);
      io.in(room).emit("recieve", "Server : " + username + " has entered the chat.");
      socket.emit("join", room);
    }
  })

  socket.on("send", function(message){
    io.in(rooms[socket.id]).emit("recieve", usernames[socket.id] +" : " + message);
  })

  socket.on("recieve", function(message){
    socket.emit("recieve", message);
  })
   socket.on("RoadOne",() => {
     socket.join("wtech-001");
     io.to("wtech-001").emit("welcome","Hello,you are in wtech-001 road.");
   });
   socket.on("RoadTwo",() => {
     socket.join("wtech-002");
      let device = {
  state: 'on', // 初始狀態
  toggle: function() { // 切換狀態的方法
    this.state = (this.state === 'off') ? 'on' : 'off';
    console.log('Device is now ' + this.state);
  }
}
     io.to("wtech-002").emit("state",device.state);
   });
});
