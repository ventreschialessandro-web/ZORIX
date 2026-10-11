const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());

// تشغيل المخ
try {
  const brain = require('./backend/brain.js');
  app.use('/api', brain);
} catch (e) {
  console.log('المخ لسه بيحمل');
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`السيرفر شغال على http://localhost:${PORT}`);
});
