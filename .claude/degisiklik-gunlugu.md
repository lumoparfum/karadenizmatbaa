# karadenizmatbaa.com degisiklik gunlugu

Her degisiklik: eski → yeni + neden. En yeni en ustte. (Repoda .claude/ altinda; siteye cikmaz.)

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
