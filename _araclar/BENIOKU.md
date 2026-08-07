# _araclar

Siteye ait yardimci betikler. **Bu klasor yayinlanan siteye cikmaz** — GitHub
Pages (Jekyll) alt cizgi ile baslayan klasorleri kopyalamaz. Yani
`karadenizmatbaa.com/_araclar/...` diye bir adres olusmaz.

## ikon-uret.py

`favicon.svg`'den butun PNG ve ICO ikonlari yeniden uretir.

```
python _araclar/ikon-uret.py
```

Gereken: Python + Pillow (`pip install pillow`) ve Google Chrome.

**Ikonlara elle dokunma, bu betigi kullan.** 30 Temmuz 2026'da butun PNG/ICO
dosyalarinin arka plani seffaf cikmisti: `favicon.svg` dogruydu ama disa
aktarimda lacivert zemin kaybolmustu. Beyaz "K" beyaz uzerinde gorunmedigi
icin Google aramada havada duran turuncu bir "M" gosteriyordu. Betik zemini
her seferinde dogru basiyor.

Ikonlari degistirdikten sonra **82 HTML dosyasindaki `?v=` damgasini da gunun
tarihiyle guncelle**, yoksa tarayicilar onbellekteki eski ikonu kullanmaya
devam eder.
