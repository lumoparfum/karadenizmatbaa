# karadenizmatbaa.com - Claude icin proje notu

Her oturumda oku. Tek dogru kaynak bu dosya; bilgi degisince eskisini sil, yenisini yaz. Gecmis degisiklikler: `.claude/degisiklik-gunlugu.md` (eski -> yeni + neden).

## Genel
- Site **karadenizmatbaa.com**: ana sayfa + 81 il sayfasi. Repo `github.com/lumoparfum/karadenizmatbaa` (PUBLIC: sifre/kisisel bilgi yazma).
- Yayin: GitHub Pages. **main'e push = 1-2 dk icinde canli.** Tasarim isleri once `tasarim` dalinda; kullanici "top sende" dediyse dogrulayip yayinla.
- Commit mesaji ASCII, **Co-Authored-By/Claude imzasi YOK**.
- Yalniz bu klasorde calis; samsuntabela.tr, stop82, mucash projelerine dokunma.
- Kullanici (Mucahit): kisa, sade Turkce; ara mesaj yok, sonda kisa rapor. Dogrulamadan "hazir" deme. Is bitince gecici dosya, ekran goruntusu, sunucu, tarayici kapat/sil.

## Sabit bilgiler
- Telefon/WhatsApp: **0532 139 46 59** (`wa.me/905321394659`). "samsuntabela.tr | 0532 220 46 49" baska isletmenin, dokunma.
- Marka: title/H1'de "Karadeniz Matbaa"; logo altinda kucuk "Toraman Matbaa guvencesiyle" (tum sayfalarda). JSON-LD `alternateName` Karadeniz Toraman Matbaa; tam ad yalniz © ve KVKK'da.
- Adresler: uretim Toraman Matbaa, Topkapi/Istanbul; Uzman Reklam, Bafra/Samsun. Illerde sube YOK; sahte adres/sube yazma.
- Gorsellerdeki "Organize Matbaa" logosu da bizim, sorun degil.
- `/xinwenzixun/87.html` 404'u Cin spam agindan, dokunma.

## Tasarim kurallari (11 Kas 2026, yayinda)
- Ilke: **sade, kolay, hizli; once mobil** (390 px), iOS kalitesi. Sablon gorunumu, kutu kutu kart, ikonlu kart, numarali sus yok.
- Tek font Inter (en fazla 700). Lacivert #0a1e3a; turuncu yalniz ana dugme (#c0520a, beyazla 4,7:1). Istisna: sag alttaki Instagram dugmesi Instagram renginde (kullanici istedi).
- Ikonlar sayfa basindaki SVG `<symbol>`ler (#i-wa, #i-tel, #i-mail, #i-ig, #i-chev); Font Awesome yok.
- Ana sayfa: giris (lacivert + makine fotografi, H1, 2 satir slogan, tek WhatsApp dugmesi) > urunler ve fiyatlar (16 urun liste + fason satiri; dokununca alttan fiyat penceresi) > SSS > Hakkimizda > Iletisim (banka bilgisi katli) > alt bilgi (81 il, telefonda katli).
- Il sayfasi: giris (kirinti, "Il Matbaa", ilce sayisi) > "Il matbaa fiyatlari" > "Il'de matbaa hizmeti" (giris metni + tum ilceler ve aciklamalari) > ile ozel SSS > ayni bolgedeki iller > iletisim > alt bilgi.
- Gorseller: `img/urun/<id>.webp` (640 + `-160` kucuk), `img/giris-makine.webp` (Unsplash, ticari serbest; kendi fotografi gelirse degistir), `img/makina-parkuru.webp`. Kokte yalniz ikonlar, `og-image.jpg`, `kartvizit.webp` (JSON-LD), `makinaparkuru.png` (il og:image).

## Uretim araclari (`_araclar/`, yayina cikmaz; Node: `C:/Program Files/nodejs`)
- **Fiyat degisince:** `index.html` icindeki `const categories` guncelle -> `node _araclar/listeleri-uret.js` (ana sayfa listesi + `/llms.txt`) -> `node _araclar/il-sayfalari-uret.js` (81 il).
- **Il sayfalarina elle dokunma.** Icerik `_araclar/iller.json` (ilceler, ilce aciklamalari, SSS, buyuk 10 il icin `giris`); tasarim ana sayfadan kopyalanir. Ana sayfa tasarimi degisince ureticiyi tekrar calistir.
- Ana sayfa SSS metni dogrudan `index.html`de. Ikon: `_araclar/ikon-uret.py`.
- Dosyalar CRLF, BOM'suz. `Set-Content` kullanma (Turkce bozar).
- Kontrol (her degisiklikte): JSON-LD parse, JS `node --check`, tekrar id, eksik gorsel/capa; 320-1440 px tasma ve 44 px dokunma; push sonrasi canlida 82 sayfa 200.

## SEO
- Korunur: title, meta, canonical, URL'ler, GA (`G-ZLY5H5JPKR`) + `whatsapp_tikla` sayaci.
- Sema: ana sayfa Organization/LocalBusiness/FAQPage/Product/WebSite; il sayfasi Service + areaServed, FAQPage (gorunen SSS ile ayni), Breadcrumb.
- `/llms.txt` yapay zeka araclari icin (otomatik). robots.txt herkese acik. Sitemap 82 URL.
- Search Console `sc-domain:karadenizmatbaa.com` ve Bing Webmaster: Playwright tarayicisinda Google hesabiyla girisli. Google'da gunluk ~10 "dizine eklenmesini iste" hakki.
- Google Isletme Profili: hesapta yalniz "Uzman Reklam Tabela" (Bafra, samsuntabela isi) var, ona dokunma.

## Olcum
- 11 Kas 2026 (son 28 gun): 60 tik, 2.660 gosterim, ort. konum 12,9; 81/82 sayfa dizinde. Il+matbaa konumlari: Denizli 9,6, Tekirdag 10,3, Sivas/Tokat 11, Konya 34, Antalya 42, Ankara 57, Adana 58, Gaziantep 64, Bursa/Mersin 73. "toraman matbaa" 918 gosterim / 1 tik.
- Kiyas: ~25 Kas ve ~11 Ara 2026. Dusus varsa nedenini bul, kullaniciya sade anlat.

## Siradaki isler
1. Karadeniz Matbaa icin Topkapi adresiyle Google Isletme Profili + musteri yorumlari (kullanici dogrulamasi gerekir; en buyuk eksik).
2. 16 urun icin ayri sayfa (ornek /kartvizit-baski), il sayfalarindan link.
3. Kullanicidan gercek makine/is fotograflari gelirse giris ve urun gorsellerini degistir.
