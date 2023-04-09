const app = require("express")();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/grpc.html");
});

const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log(`a new user connected: ${socket.id}`);

  socket.on("msg", (msg) => {
    console.log(msg);
    io.emit("msg", msg);
  });
});

http.listen(3000, () => {
  console.log("the server has started listening on port 3000");
});
