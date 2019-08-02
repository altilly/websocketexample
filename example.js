const WebSocket = require('ws');

const ws = new WebSocket('wss://wsapi.altilly.com:2096');

ws.on('open', function open() {
  console.log('connected');
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function incoming(data) {
  console.log(data);
});
