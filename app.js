require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

// ルートエンドポイント
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/index.html'));
  res.render('layout', {title: 'HOME', content: 'index'});
});

// /health エンドポイント
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/greet', (req, res) => {
  const query = req.query.q || 'Express';
  res.render('layout', { title: 'Greet', content: 'greet', query: query });
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
