const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express()
const port = process.env.PORT || 3300

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on :', port);