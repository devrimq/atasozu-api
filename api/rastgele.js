// JSON dosyamızı çağırıyoruz
const sozler = require('./atasozleri_ve_deyimler.json');

module.exports = (req, res) => {
  // Gelen istekte Türkçe karakter sorunu yaşamamak için başlık (header) ekliyoruz
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // 831 söz arasından rastgele bir numara seçiyoruz
  const rastgeleIndex = Math.floor(Math.random() * sozler.length);
  const secilen = sozler[rastgeleIndex];
  
  // Ekrana tam adviceslip mantığıyla o tek sözü gönderiyoruz
  res.status(200).json({
    soz_karti: {
      id: secilen.id,
      soz: secilen.soz,
      anlami: secilen.anlami
    }
  });
};