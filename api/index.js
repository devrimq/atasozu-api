const express = require('express');
const app = express();

// JSON dosyamızı içeri aktarıyoruz
const sozler = require('./atasozleri_ve_deyimler.json');

// Sadece ana dizine girilirse genel bilgi verelim
app.get('/', (req, res) => {
  res.send('Atasözü ve Deyim API - Rastgele söz için /rastgele adresine gidin.');
});

// adviceslip mantığı: /rastgele endpoint'i
app.get('/rastgele', (req, res) => {
  // Veri setinden rastgele bir index seçiyoruz
  const rastgeleIndex = Math.floor(Math.random() * sozler.length);
  const secilen = sozler[rastgeleIndex];
  
  // JSON formatında tek bir söz kartı dönüyoruz
  res.json({
    soz_karti: {
      id: secilen.id,
      soz: secilen.soz,
      anlami: secilen.anlami
    }
  });
});

// Sunucuyu başlat (Vercel için export ediyoruz)
module.exports = app;