# karadenizmatbaa.com - Claude icin proje notu

Bu dosyayi her yeni oturumda oku. Kullanici derdini bastan anlatmak istemiyor; asagidakiler yeterli. Eksik/yanlis gordugunu duzelt ve bu dosyayi guncelle.

## Genel
- Site: **karadenizmatbaa.com** (matbaa, 81 il + ana sayfa). Repo: `github.com/lumoparfum/karadenizmatbaa` (PUBLIC, bu yuzden buraya sifre/anahtar/kisisel bilgi YAZMA).
- Yayin: GitHub Pages + CNAME. **main'e push = 1-2 dk icinde canli.** Commit + push icin izin sorma; yaptiktan sonra kisaca soyle.
- Commit mesajina **Co-Authored-By: Claude YAZMA** (kullanici GitHub'da "claude" gormek istemiyor). Mesaj ASCII, Turkce karaktersiz.
- Bu is yalniz bu klasorde biter. Baska projelere (samsuntabela.tr, stop82, mucash) dokunma.

## Kullanici beklentisi
- Sade, kisa, ornekli Turkce anlat; teknik terim yok. Hata ve kalitesizlik istemiyor. "Top sende": karari ver, uygula, dogrula, kisaca raporla.
- Her degisiklik `.claude/degisiklik-gunlugu.md` dosyasina yazilir (eski → yeni + neden). Bilgi degisince bu notu da guncelle, eski/yanlis bilgi birakma.
- Isin sonunda gecici dosya (ekran goruntusu, betik, test sunucusu) birakma.

## Dosya yapisi ve tuzaklar
- 82 HTML: `index.html` + 81 il sayfasi (`adana-matbaa.html` ... `zonguldak-matbaa.html`). **Il sayfalari index'in kopya sablonu**; toplu degisiklik 82 dosyada python ile (bayt bazli replace), sonra sayim ile dogrula.
- `index.html` BOM'suz LF. 81 il sayfasinin basinda BOM var (eskiden beri, zararsiz, dokunma). `Set-Content` kullanma (Turkce bozar). Windows'ta `sed -i` CRLF'yi LF'ye cevirebilir.
- Fiyatlar: 16 kategori / 133 varyant fiyat yalniz `index.html` icindeki `const categories` JS dizisinde. Il linkleri statik HTML'de.
- Ikon: `_araclar/ikon-uret.py` (BENIOKU.md'ye bak); ikonlara elle dokunma. `_` ve `.` ile baslayan klasorler yayina cikmaz.
- `/xinwenzixun/87.html` 404'u Cin spam agindan, dokunma.
- Kalite kontrol (her degisiklikten sonra): kirik yerel link, eksik gorsel, JSON-LD parse, canonical, inline JS `node --check`, sitemap (82 URL); yerel sunucu (`python -m http.server`) + masaustu ve 375px mobil ekran goruntusu; push sonrasi canlida dogrula.

## Guncel bilgiler (8 Eki 2026)
- **Telefon:** tek numara **0532 139 46 59** (`+905321394659`, WhatsApp `wa.me/905321394659`). Sayfa altinda "samsuntabela.tr | 0532 220 46 49" baska isletmenin numarasi, dokunma.
- **Marka adi karari:** kullanici "Karadeniz Matbaa"ya donmek istemedi ama ana sayfada Toraman gorunmeli. Cozum: ana sayfada "Karadeniz Matbaa" bolunmeden onde, "Toraman Matbaa guvencesiyle" arkasinda (title, logo alti, H1 alti). JSON-LD: `name` Karadeniz Matbaa, `alternateName` Karadeniz Toraman Matbaa. Tam ad yalniz © satiri ve KVKK metninde. **81 il sayfasi "Karadeniz Matbaa" kalir, onlara Toraman EKLEME.**
- **SEO olcumu** (kullanici ne zaman yazarsa; ~5 Kas 2026 ve ~Oca 2027 uygun): Search Console `sc-domain:karadenizmatbaa.com` (Playwright tarayicisinda Google girisi; kullanicidan ekran goruntusu isteme). Baslangic (21 Tem-5 Eki 2026): 68 tiklama, ~2.760 gosterim, ort. konum 16,8; "karadeniz matbaa" 14 tik / 91 gosterim; "toraman matbaa" 0 tik / 885 gosterim. Kiyasla; dusus varsa nedenini ara ve kullaniciya sade anlat.
- **Acik plan (baslanmadi, once kullaniciyi dinle):** siteyi komple yenileme. Sira: (1) fiyat listesini statik HTML'e al, (2) 16 urun sayfasi ac, (3) 81 il sayfasini azalt (birbirine ~%95 ayni; geri donusu zor, acele etme, 301 gerekir), (4) Bafra adresi icin Google Business Profile.
