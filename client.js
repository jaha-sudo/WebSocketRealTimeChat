const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:9000');

ws.on('open', () => {
  console.log('Соединение установлено');

  // Простой пример отправки сообщения на сервер
  ws.send('Привет сервер, это клиент!');
});

ws.on('message', (message) => {
  console.log('Получено сообщение с сервера:', message);
});
