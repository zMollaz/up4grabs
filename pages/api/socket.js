import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("sent", (messagesArr) => {
        console.log("Recieved at the back", messagesArr)
        socket.broadcast.emit("return", messagesArr);
      });
    });
  }
  res.end();
};

export default SocketHandler;
