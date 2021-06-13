const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;

  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);

      newRecipients.push(id);

      socket.broadcast
        .to(recipient)
        .emit("receive-message", {
          recipients: newRecipients,
          sender: id,
          text,
        });
    });
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
