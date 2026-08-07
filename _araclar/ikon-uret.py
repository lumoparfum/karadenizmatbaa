"""
favicon.svg'den butun PNG/ICO ikonlari yeniden uretir.

Calistirmak icin:  python _araclar/ikon-uret.py
Gereken:           Pillow  (pip install pillow)  +  Google Chrome

NEDEN BU BETIK VAR
30 Tem 2026'da butun PNG/ICO ikonlarin arka plani seffafti: favicon.svg
dogruydu ama disa aktarimda lacivert zemin dikdortgeni kaybolmustu. Beyaz K
beyaz uzerinde gorunmedigi icin Google aramada havada duran turuncu bir "M"
gosteriyordu. Ikonlara bir daha dokunulacaksa PNG'leri elle degil bu betikle
uret, ayni hata tekrarlanmasin.

DIKKAT
Chrome bazi pencere boyutlarinda (96, 180, 192) bos kare uretiyor. Bu yuzden
tek bir 1024px master render edilip Pillow ile kucultuluyor; her boyutu ayri
render ETME.
"""
import subprocess
import sys
from pathlib import Path

from PIL import Image

KOK = Path(__file__).resolve().parent.parent
CIKTI = KOK
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
MASTER = 1024
LACIVERT = (10, 29, 58, 255)

SVG = (KOK / "favicon.svg").read_text(encoding="utf-8")

# Maskable (Android ana ekran): maskeyi sistem uyguladigi icin kose
# yuvarlatmasi yok; logo guvenli alanda kalsin diye %72'ye kucultuldu.
MASKABLE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<rect width="100" height="100" fill="#0a1d3a"/>
<g transform="translate(50,50) scale(0.72) translate(-50,-50)">
<path d="M14 18h12v20l16-20h10l-22 30 22 30h-10l-16-22v22h-12z" fill="#fff"/>
<path d="M54 78V18h10l8 30 8-30h10v60h-10V48l-8 24-8-24v30z" fill="#f76c20"/>
</g>
</svg>"""

SARMAL = """<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;padding:0;width:100%%;height:100%%;overflow:hidden;background:transparent}
svg{display:block;width:100%%;height:100%%}
</style></head><body>%s</body></html>"""


def master_render(svg, ad, gecici):
    """SVG'yi 1024px olarak render eder, seffaf zeminle."""
    kaynak = gecici / f"{ad}.html"
    kaynak.write_text(SARMAL % svg, encoding="utf-8")
    png = gecici / f"{ad}.png"
    sonuc = subprocess.run(
        [
            CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", "--default-background-color=00000000",
            "--virtual-time-budget=4000",
            f"--screenshot={png}", f"--window-size={MASTER},{MASTER}",
            kaynak.as_uri(),
        ],
        capture_output=True, text=True, timeout=180,
    )
    if not png.exists():
        sys.exit(f"Chrome ikon uretemedi:\n{sonuc.stderr[-500:]}")
    im = Image.open(png).convert("RGBA")
    if im.getpixel((MASTER // 2, MASTER // 2))[3] == 0:
        sys.exit(f"{ad}: master seffaf cikti, uretim durduruldu")
    return im


def main():
    gecici = KOK / "_araclar" / ".gecici"
    gecici.mkdir(parents=True, exist_ok=True)

    normal = master_render(SVG, "master-normal", gecici)
    maskable = master_render(MASKABLE, "master-maskable", gecici)

    isler = [
        ("favicon-16x16.png", 16, normal),
        ("favicon-32x32.png", 32, normal),
        ("favicon-48x48.png", 48, normal),
        ("favicon-96x96.png", 96, normal),
        ("icon-192.png", 192, normal),
        ("icon-512.png", 512, normal),
        ("maskable-icon.png", 512, maskable),
    ]
    for ad, boyut, kaynak in isler:
        kaynak.resize((boyut, boyut), Image.LANCZOS).save(CIKTI / ad, format="PNG", optimize=True)
        print(f"  {ad:22} {boyut}x{boyut}")

    # iOS seffaf pikselleri siyaha cevirdigi icin lacivert zemine yassitiliyor
    zemin = Image.new("RGBA", (180, 180), LACIVERT)
    zemin.alpha_composite(normal.resize((180, 180), Image.LANCZOS))
    zemin.convert("RGB").save(CIKTI / "apple-touch-icon.png", format="PNG", optimize=True)
    print(f"  {'apple-touch-icon.png':22} 180x180 (seffaflik lacivert zemine yassitildi)")

    normal.resize((256, 256), Image.LANCZOS).save(
        CIKTI / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print(f"  {'favicon.ico':22} 16+32+48")

    print("\nBitti. Simdi HTML'lerdeki ?v= damgasini da gunun tarihiyle "
          "guncelle, yoksa tarayicilar eski ikonu kullanmaya devam eder.")


if __name__ == "__main__":
    main()
