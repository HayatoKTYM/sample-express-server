require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// ルートエンドポイント
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// /health エンドポイント
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
