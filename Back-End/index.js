const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

const app = express()
const port = process.env.PORT || 3300

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');

// App Setup
app.use(morgan('combined'));

// CORS allow for all Access-Control-Allow-Origin: *
app.use(cors())
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on :', port);