const express= require('express')
const http=  require('http');
const bodyParser=require('body-parser')
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config = require("./config/config")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);


connectDB();


const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 8080!");
});

// http.createServer(function(req,res){
//     res.write("hello wold");
//     console.log('okk')
//     res.end();
// }).listen(8080,console.log('okk'))