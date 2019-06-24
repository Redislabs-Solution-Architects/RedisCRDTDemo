/*
* Copyright © 2018 Redis Labs, Inc.
* This program should be used for demo puposes only. The software
* is provided “as is”, without warranty of any kind.
*
* Usage: 
*  
*   export HTTP_PORT=3232; export REDIS_PORT=6379; export REDIS_HOST=localhost; \
*   export APP_LOCATION="CityA"; \
*   node server.js  
*
*/


var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('redis');

var httpPort = process.env.HTTP_PORT || 3000;
var redisPort = process.env.REDIS_PORT || 6379;
var redisHost = process.env.REDIS_HOST || 'localhost';
appLocation = process.env.APP_LOCATION || "";

// Redis client to query and publish to a channel
var redisClient = redis.createClient({
  port : redisPort,
  host : redisHost
});

// Redis client to listen to a channel
var redisSub = redis.createClient({
  port : redisPort,
  host : redisHost
});

// Init modules to process get and post parameters
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser());

var session = require('express-session');
// All static files are under $HOME/public
app.use(express.static('public'))
app.set('view engine','ejs');
require('./app/routes.js')(app, redisClient);

// Initialize socket.io for asynchronous communication between the Server
// and the web application
io.on('connection', function(socket){
});

// Listen to pub/sub messages on a Redis channel
msglistener = require('./app/msglistener.js');
msglistener.listen(redisSub, redisClient, io);

// Start the HTTP server
http.listen(httpPort, function(){
  console.log('HTTP listening on :'+httpPort);

});
