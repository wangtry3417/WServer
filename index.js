const { Server } = require("socket.io");

const io = new Server(3000);

io.on("connection", (socket) => {
   socket.emit("con","hello");
   socket.on("RoadOne",() => {
     socket.join("wtech-001");
     io.to("wtech-001").emit("welcome","Hello,you are in wtech-001 road.");
   });
   socket.on("RoadTwo",() => {
     socket.join("wtech-002");
      let device = {
  state: 'off', // 初始狀態
  toggle: function() { // 切換狀態的方法
    this.state = (this.state === 'off') ? 'on' : 'off';
    console.log('Device is now ' + this.state);
  }
}
     io.to("wtech-002").emit("state",device.state);
   });
});
