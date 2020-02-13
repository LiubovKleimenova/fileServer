const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.on("connection", client => {
  console.log("You are looking for: ");
  //client.write("Hello there!");
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", data => {
    console.log(`${data}`);
    fs.readFile(data, function (err, dataFromFile) {
      client.write(dataFromFile);
    })
  });
});

server.listen(3000, () => {
  //console.log("Server listening on port 3000!");
});
