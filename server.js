const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");


// Настраиваем middleware для обработки тела POST запросов
app.use(express.urlencoded({ extended: true }));

// Обрабатываем GET запросы на корневой маршрут и отправляем файл формы клиенту
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'form.html');
  res.sendFile(filePath);
});

// Обрабатываем POST запросы на корневой маршрут и записываем данные в файл
app.post('/', (req, res) => {
  const { name, message } = req.body;
  const data = `${name}: ${message}\n`;

  fs.appendFile('messages.txt', data, (err) => {
    if (err) throw err;
    console.log('Message saved!');
  });

  res.redirect('/');
});

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

