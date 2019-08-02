const WebSocket = require('ws');

const ws = new WebSocket('wss://wsapi.altilly.com:2096');

ws.on('open', function open() {
  console.log('connected');
  
  doStuff();
  
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function incoming(data) {
  console.log(JSON.parse(data));
});

function doStuff()
{
  ws.send(JSON.stringify({"method":"subscribeOrderbook","params":{"symbol":"XQRBTC"}}));
  ws.send(JSON.stringify({"method":"subscribeOrderbook","params":{"symbol":"ODINBTC"}}));
}
