const server = require("./src/server");
// server port
const port = process.env.PORT || 5000;

//CLUSTER
const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  //connect db
  require("./src/configDB/db");
  // /server start
  server.listen(port, () => {
    console.log(`Server is up at ${port} `);
  });
}
