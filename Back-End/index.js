const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express()
const port = process.env.PORT || 3300

// DB Setup
// 
//mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://localhost:27017/auth');
// mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false/auth', {userNewUrlParser: "true"});
// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on :', port);