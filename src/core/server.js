const http = require('./configs/express');
const connectDatabase = require('./configs/database');
const connectWebsocket = require('./configs/websocket');

connectDatabase();
connectWebsocket();

http.listen(5002);