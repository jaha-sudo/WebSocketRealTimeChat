const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9000 });

wss.on('connection', (ws) => {
  console.log('Новое соединение установлено');

  ws.on('message', (message) => {
    console.log('Получено сообщение:', message);

    // Рассылка сообщения всем клиентам, подключенным к серверу
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Соединение закрыто');
  });
});
