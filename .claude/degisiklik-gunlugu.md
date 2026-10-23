# karadenizmatbaa.com degisiklik gunlugu

Her degisiklik: eski → yeni + neden. En yeni en ustte. (Repoda .claude/ altinda; siteye cikmaz.)

## 23 Eki 2026

### Magnet fiyatlari +50 TL, MAG3 21->25 TL (82 sayfa)
- **Eski -> Yeni:** MAG2 610->660, 10MAG2 6.000->6.050, MAG1 690->740, 10MAG1 6.500->6.550. MAG3 (1 cm kare) 21->25 TL (kullanici ozel istedi, +50 degil).
- Kart fiyati 610->660 TL; acilan magnet yazisi "MAG2 modeli 1.000 adet icin 610 TL" -> 660 TL.
- **Dogrulama:** 82 dosyada 7'ser satir degisti, kalan 610/21 TL yok.

### Kartvizit fiyatlari +50 TL (82 sayfa)
- **Eski -> Yeni (1.000 adet):** NK 195->245, NKA 205->255, MN 230->280, CYP 290->340, CYM 300->350, KL 310->360, O-COK 390->440, S-COK 450->500, O-SEK 590->640, S-SEK 680->730, O-NKA 1.650->1.700, CYML 410->460, SEFFAF 3.950->4.000.
- "Kartvizit 195 TL" gecen her yer 245 TL oldu: title/meta/og/twitter aciklamalari, hero yazisi, SSS (gorunen + JSON-LD), kartvizit yazisi, JSON-LD Product price "245".
- **Neden:** kullanici zam geldi, tum kartvizitlere +50 TL istedi.
- **Dogrulama:** 82 dosyada kalan "195" yok; 13 varyant + kart fiyati degisti.
- **Not:** Search Console baslangic olcumunde basliklar "Kartvizit 195 TL" idi; fiyat degisimi kiyasi etkileyebilir.

### Brosur fiyatlari +200 TL (82 sayfa)
- **Eski -> Yeni (1.000 adet, 2.000 adet olan tek yon dahil):** 1CA6 400->600, 1CA7 600->800, 1CA5 800->1.000, 1CA4 1.350->1.550, 1CA3 2.700->2.900, 1GA6 425->625, 1GA5 850->1.050, 1GA4 1.400->1.600, 1HA5 950->1.150, 1HA4 1.750->1.950, 2TA6 425->625, 2TA5 850->1.050, 2TA4 1.450->1.650.
- Kart fiyati (A6) 400->600 TL; acilan yazi "sadece 400 TL" -> "sadece 600 TL".
- **Neden:** kullanici zam geldi, tum brosurlere +200 TL istedi.
- **Dogrulama:** 82 dosyada 15'er satir (13 varyant + kart + yazi) degisti, baska yer degismedi.

### Brosur karti ve acilan yazi A5 -> A6 (82 sayfa)
- **Eski:** "Cok Satanlar" brosur kartinda "A5, 115gr..." ve 800 TL, ama etiket 1CA6 idi (celiski). Acilan brosur yazisinda "A5 115gr Eko Cift Yon brosurumuz 1.000 adet icin sadece 800 TL".
- **Yeni:** kart "A6, 115gr. Kuse, Cift Yon Parlak", ebat 90x135mm, 400 TL / 1.000 Adet. Acilan yazi "A6 115gr Eko Cift Yon brosurumuz 1.000 adet icin sadece 400 TL".
- **Neden:** kullanici A6 istedi. Fiyat listesinde 1CA6 (A6) = 400 TL, 800 TL A5'in fiyatiydi; A6 yazip 800 birakmak yanlis fiyat olurdu.
- **Dogrulama:** 82 dosyada 2'ser satir degisti, kalan "A5 ... broşürümüz" yok, BOM/satir sonlari korundu.

## 12 Eki 2026

### Laptop icin proje notu
- `.claude/CLAUDE.md` (proje notu) ve `.claude/degisiklik-gunlugu.md` repoya eklendi; baska bilgisayarda klonlayinca Claude kendiliginden okur. `.claude` yayina cikmaz (Pages nokta ile baslayan klasorleri atlar). Eski oturum alintilari yalniz ilk bilgisayarda `_claude-notlari/` altinda kaldi (public repoya konmadi).

## 8 Eki 2026

### Ana sayfa marka adi duzeni (commit 6feeb63)
- **Eski:** her yerde "Karadeniz Toraman Matbaa" (30 Tem 2026'dan beri; il sayfalari "Karadeniz Matbaa").
- **Yeni:** "Karadeniz Matbaa" bolunmeden onde, Toraman arkasinda.
  - title / og:title: `Karadeniz Matbaa | Toraman Matbaa Güvencesiyle Dijital Matbaa – Fiyatı Gör, WhatsApp'tan Yaz`; twitter:title `Karadeniz Matbaa | Toraman Matbaa Güvencesiyle Dijital Matbaa`
  - logo: Karadeniz Matbaa + kucuk "Toraman Matbaa güvencesiyle"; H1 ayni + alt satir "Toraman Matbaa & Uzman Reklam güvencesiyle" (yeni CSS `.logo-by`, `.hero-by`)
  - JSON-LD Organization/LocalBusiness/WebSite: name "Karadeniz Matbaa", alternateName "Karadeniz Toraman Matbaa"; Product brand "Karadeniz Matbaa"
  - govde metinleri, SSS, tablo, alt: "Karadeniz Matbaa"; © satiri ve KVKK metni tam ad "Karadeniz Toraman Matbaa"
  - `site.webmanifest`: name "Karadeniz Matbaa", description "Karadeniz Matbaa - Toraman Matbaa Güvencesiyle Profesyonel Baskı Çözümleri"
- **Neden:** kullanici ana sayfada Toraman gostermek zorunda ama "karadeniz matbaa" aramasi (en cok tiklama getiren sorgu) bozulmasin; il sayfalariyla ad tutarsizligi bitsin. Il sayfalarina dokunulmadi.
- **Dogrulama:** masaustu + 375px mobil ekran goruntusu, JSON-LD parse, inline JS `node --check`, 82 sayfa link/gorsel/canonical taramasi, canlida title + logo-by + hero-by + manifest goruldu.
- **Olcum:** ~5 Kas 2026 ve ~8 Oca 2027 Search Console karsilastirmasi (rakamlar memory `project_karadenizmatbaa_marka_seo`).

### Telefon degisikligi (commit 2d76153)
- **Eski:** 0 501 667 57 55 (`905016675755`) 82 sayfada; 80 il sayfasinin JSON-LD telephone'u yanlislikla `+905322204649` (samsuntabela'nin numarasi).
- **Yeni:** 0 532 139 46 59 (`905321394659`, `+905321394659`) hepsinde; JSON-LD telephone da yeni numara.
- **Bilerek kalan:** "samsuntabela.tr | 0532 220 46 49" (alt bolumde, diger isletmenin kendi numarasi).
- **Dogrulama:** eski numara 0 kalan; canli ana sayfa + Adana sayfasinda yeni numara goruldu.

### Notlarin toplanmasi
- stop82 hafizasindaki karadeniz notu `Claude projects\...karadenizmatbaa\memory` altina tasindi (stop82'den silindi); "commit'e claude yazma" kurali kopyalandi.
- Eski oturumlardan karadeniz konusma parcalari `eski-oturumlardan-alintilar.md` olarak cikarildi (kaynak oturumlar stop82 klasorunde duruyor, tasinmadi: karisik icerik + biri acik).
