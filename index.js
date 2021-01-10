const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const productRouter = require("./router/productRouter");
const http = require('http');
const socketio = require('socket.io');
const productController = require("./controller/productController");
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  app.use(cors());
  app.use("/", productRouter);


  io.on("connection", function(socket)
	{
		socket.on("disconnect", function()
			{
			});
		  socket.on("clentSendData", async function(data)
			{
            const  dataSenClient = await productController.editProductById(data);
            io.emit('dataSenclient',dataSenClient);
      });
	});

  server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
  });

