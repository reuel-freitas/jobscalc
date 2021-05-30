const express = require("express");
const routes = require("./routes");
const server = express();
const path = require("path");

server.set('views', path.join(__dirname, 'views'))

server.set('view engine', 'ejs');

server.use(express.static("public"))

//using the req.body
server.use(express.urlencoded({extended: true}))


// routes
server.use(routes);

server.listen(3000, () => console.log('running'));