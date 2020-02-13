const net = require("net");
const conn = net.createConnection({
  host: "127.0.0.1", // change to IP address
  port: 3000
});

conn.setEncoding("utf8"); // interpret data as text

conn.on("connect", () => {
  conn.write("./temp.txt");
});

conn.on("data", data => {
  console.log("Data from file: ", data);
});


