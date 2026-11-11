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
## SU ANKI IS: tasarim yenileme (11 Kas 2026'da basladi)
Kullanici (Mucahit) istedi: site PC'de daginik, markaya yakismiyor. Sira: (1) ana sayfa, (2) 81 il sayfasi, (3) buyuk sehirlere (Ankara, Istanbul, Izmir, Bursa, Antalya, Adana, Konya, Gaziantep, Mersin, Kocaeli) sehre ozel icerik.
- **Ana sayfa YAYINDA (11 Kas 2026, kullanici onayladi).** Sonraki tasarim isleri de once `tasarim` dalinda yapilir, onaysiz main'e alinmaz.
- **Ilke: rakiplerden farkimiz SADE, KOLAY, HIZLI. Once MOBIL** (musteri cogunlukla telefondan gelir; once 390 px kontrol).
- Gorsellerdeki "Organize Matbaa" logosu sorun degil, o da bizim.
- Az bolum, tek tikla WhatsApp, hafif sayfa.
- **Hedef kalite: iOS/Apple sadeligi** (bol bosluk, buyuk net basliklar, ince golge, yumusak koseler, az ama net renk).
- **Marka:** tek yazi tipi Inter; ana renk lacivert #0a1e3a, tek vurgu turuncu #f47b20; beyaz/acik gri zemin. Yesil (WhatsApp) ve Instagram pembesi buton rengi olarak kullanilmaz (yalniz kucuk ikon).
- **Korunacak (SEO):** title, meta, H1 metni, canonical, JSON-LD, URL'ler, `const categories` fiyat dizisi, WhatsApp linkleri, GA + tiklama sayaci.
- **Eski sayfadaki sorunlar:** hero'da makine fotografi ustunde cok yazi + 2 sira etiket; urunler iki kez (hizmetler + fiyat listesi); "neden biz" iki kez + rakip kotuleyen tablo; 81 il etiket yigini; SSS tek kapali kutu; iletisimde banka bilgisi; footer "Hizmetler" bos acilir; mobilde 3 sutun sikisik kart, 5 sutun minik yazi, telif satiri tasiyor.
- **Ilerleme:** [x] eski hal  [x] rakipler (turmatsan, ankaramatbaa: eski usul, karisik)  [x] ana sayfa taslagi (`tasarim` dali)  [x] iOS denetcisi duzeltmeleri (kontrast, 44px dokunma, telefonda fiyat penceresi satir duzeni, 160px kucuk gorseller, yuzen dugme giriste gizli)  [x] kullanici onayi  [x] yayin (ana sayfa)  [x] il sayfalari (yayinda)
- **IL SAYFALARI (11 Kas 2026, yayinda):** 81 sayfa `_araclar/il-sayfalari-uret.js` ile ana sayfanin tasarimindan uretilir; veri `_araclar/iller.json` (ilce listesi + ilce aciklamalari + ile ozel SSS + buyuk 10 il icin ozel giris metni). Il sayfasina ELLE DOKUNMA; json'u veya ureticiyi degistir, sonra calistir. Her sayfa: H1 'Il Matbaa', 'Il matbaa fiyatlari' (16 urun), ilceler (statik), ile ozel SSS, ayni bolgedeki iller, iletisim. Sema: sahte 'Il Temsilciligi' LocalBusiness kaldirildi -> Service + areaServed; FAQPage gorunen SSS ile ayni. Title/meta/canonical korunur. 'Ayni gun teslimat' iddialari 'ertesi gun kargo' yapildi (Istanbul SSS'i haric).
- **FIYAT DEGISINCE SIRA:** index.html `const categories` guncelle -> `node _araclar/listeleri-uret.js` (ana sayfa listesi + /llms.txt) -> `node _araclar/il-sayfalari-uret.js` (81 il). Node: `C:/Program Files/nodejs`.
- **11 Kas 2026 SEO adimlari:** Search Console'da ana sayfa + 10 buyuk il icin 'dizine eklenmesini iste' yapildi (gunluk kota ~10; digerleri sitemap ile). Bing Webmaster'a 82 URL gonderildi (Bing, ChatGPT/Copilot aramasini besler; Google girisiyle acilir). Google Isletme Profili: hesapta yalniz 'Uzman Reklam Tabela' (Bafra, dogrulanmis, samsuntabela isi) var; ona DOKUNMA. Karadeniz Matbaa icin Topkapi adresiyle ayri profil + musteri yorumlari en buyuk eksik (kullanici dogrulamasi gerekir).
- **Olcum:** ~25 Kas ve ~11 Ara 2026 Search Console'da il+matbaa sorgularinin ortalama konumunu 11 Kas degerleriyle kiyasla (Ankara 57, Adana 58, Bursa/Mersin 73, Gaziantep 64, Antalya 42, Konya 34, Denizli 9,6, Tekirdag 10,3).
- **Yapay zeka gorunurlugu:** /llms.txt (fiyat + iletisim + 81 il linki; listeleri-uret.js uretir). robots.txt herkese acik.
- **Taslak yapisi (3. tur, 3 denetci sonrasi):** urun listesi, giris fiyat karti ve SSS artik STATIK HTML (Google gorur). **Fiyat degisince:** `const categories` guncelle, sonra `node _araclar/listeleri-uret.js` calistir (listeleri yeniden yazar). SSS metni dogrudan HTML'de. Font Awesome kaldirildi, ikonlar sayfa basindaki SVG `<symbol>`ler (#i-wa, #i-tel, #i-mail, #i-ig, #i-chev). Dugme turuncusu #c0520a (beyazla 4,7:1). Yuzen WhatsApp dugmesi ve giristeki fiyat kutusu kaldirildi (kullanici: tekrar ediyor). Sag altta yuzen Instagram dugmesi, Instagram'in kendi renk gecisiyle (kullanici istedi; marka renk kuralina tek istisna). Masaustu menude sade 'WhatsApp' linki; telefonda ustte 'Yaz' (380px alti yalniz ikon). Giris lacivert + makine fotografi. 81 il alt bilgide, telefonda katli. Pencere: role=dialog, odak hapsi, iOS kaydirma kilidi.
- **Gorseller:** `img/urun/<id>.webp` (640 kare, q80, toplam ~450 KB), `img/makina-parkuru.webp`. Eski jpg/png'ler il sayfalari tasinana kadar silinmez. Giris fotografi `img/giris-makine.webp`: Unsplash 'printing machine' (unsplash.com/photos/Tzm3Oyu_6sk), Unsplash Lisansi (ticari serbest, kaynak gosterme zorunlu degil). Kullanicinin kendi makine fotografi gelirse onunla degistir.
- **Search Console (11 Kas):** 81/82 sayfa dizinde. Kucuk sehirler 1. sayfada (Denizli 9, Tekirdag 10, Sivas/Tokat 11), buyukler 5-7. sayfada (Ankara 57, Adana 58, Bursa/Mersin 73). Son 28 gun 60 tik, 2.660 gosterim, ort. konum 12,9. "toraman matbaa" 918 gosterim / 1 tik.

## Sonraki plan (tasarimdan sonra)
(1) fiyat listesini statik HTML'e al, (2) 16 urun sayfasi ac, (3) Bafra adresi icin Google Business Profile.
