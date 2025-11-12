import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

 // io.emit("welcome", `welcome on onboard`);


  socket.emit("only-socket",`hello socket - ${socket.id}`)
  socket.broadcast.emit("user:joined",`A socket ${socket.id} joined`)
  socket.join("room1")
  io.to("room1").emit("room1:message",`welcome to room1`)

  io.to("room1").except(socket.id).emit("Someone joined the room!");
  socket.to("room1").emit("room1:message", `New message from ${socket.id}`);

  socket.on("welcome",(msg)=>{
    console.log(msg)
  })

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});