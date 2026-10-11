const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// يشغل ملفات الواجهة
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// يشغل قاعدة البيانات
const db = require('../database/db.js');

// يشغل اوامر الذكاء الاصطناعي
const prompts = require('../prompts/index.js');

// اي طلب يجي يروح للواجهة
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`السيرفر شغال على http://localhost:${PORT}`);
});
