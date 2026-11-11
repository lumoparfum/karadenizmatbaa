// 81 il sayfasini ana sayfanin tasarimiyla yeniden uretir.
// Veri: _araclar/iller.json (ilce listesi, ilce aciklamalari, SSS, giris metni).
// Her sayfanin kendi <head> bilgisi (title, meta, canonical, JSON-LD) korunur;
// yalniz sahte "Temsilciligi" kaydi Service'e cevrilir ve SSS semasi gorunen SSS ile esitlenir.
// Calistir: node _araclar/il-sayfalari-uret.js   (repo kokunden; once listeleri-uret.js)
const fs = require('fs');
const path = require('path');

const kok = path.join(__dirname, '..');
const veri = JSON.parse(fs.readFileSync(path.join(__dirname, 'iller.json'), 'utf8'));
const ana = fs.readFileSync(path.join(kok, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

const BOLGE = {
    'Marmara': ['Edirne', 'Kırklareli', 'Tekirdağ', 'İstanbul', 'Kocaeli', 'Sakarya', 'Yalova', 'Bursa', 'Bilecik', 'Balıkesir', 'Çanakkale'],
    'Ege': ['İzmir', 'Manisa', 'Aydın', 'Denizli', 'Muğla', 'Uşak', 'Kütahya', 'Afyonkarahisar'],
    'Akdeniz': ['Antalya', 'Isparta', 'Burdur', 'Mersin', 'Adana', 'Osmaniye', 'Hatay', 'Kahramanmaraş'],
    'İç Anadolu': ['Ankara', 'Konya', 'Karaman', 'Aksaray', 'Niğde', 'Nevşehir', 'Kırşehir', 'Kırıkkale', 'Kayseri', 'Sivas', 'Yozgat', 'Çankırı', 'Eskişehir'],
    'Karadeniz': ['Zonguldak', 'Bartın', 'Karabük', 'Düzce', 'Bolu', 'Kastamonu', 'Sinop', 'Samsun', 'Amasya', 'Tokat', 'Çorum', 'Ordu', 'Giresun', 'Trabzon', 'Rize', 'Artvin', 'Gümüşhane', 'Bayburt'],
    'Doğu Anadolu': ['Erzurum', 'Erzincan', 'Kars', 'Ardahan', 'Iğdır', 'Ağrı', 'Van', 'Muş', 'Bitlis', 'Bingöl', 'Tunceli', 'Elazığ', 'Malatya', 'Hakkâri'],
    'Güneydoğu Anadolu': ['Gaziantep', 'Kilis', 'Şanlıurfa', 'Adıyaman', 'Diyarbakır', 'Mardin', 'Batman', 'Siirt', 'Şırnak'],
};

// ana sayfadaki il linklerinden ad -> adres
const adres = {};
for (const m of ana.matchAll(/<a href="\/([a-z-]+-matbaa)">([^<]+)<\/a>/g)) adres[m[2]] = m[1];
const TAM = { 'Afyon': 'Afyonkarahisar', 'Hakkari': 'Hakkâri' };
const tam = ad => TAM[ad] || ad;
const bolgeBul = ad => Object.keys(BOLGE).find(b => BOLGE[b].includes(tam(ad)));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const bol = (bas, son) => {
    const i = ana.indexOf(bas), j = ana.indexOf(son, i);
    if (i < 0 || j < 0) throw new Error('ana sayfada bulunamadi: ' + bas);
    return ana.slice(i, j);
};

const css = bol('    <style>', '</head>');
const ust = bol('<body>', '<main>');
const urunler = bol('<!-- ========== URUNLER VE FIYATLAR ========== -->', '<!-- ========== SSS ========== -->');
const iletisim = bol('<!-- ========== ILETISIM ========== -->', '</body>');

const ekCss = `
        /* ========== IL SAYFASI ========== */
        .il-giris { max-width: 760px; color: var(--muted); margin-bottom: 28px; }
        .ilceler { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 48px; border-top: 1px solid var(--line); }
        .ilce { padding: 14px 0; border-bottom: 1px solid var(--line); }
        .ilce h3 { font-size: 1rem; font-weight: 600; }
        .ilce p { font-size: .9375rem; color: var(--muted); margin-top: 2px; }
        .yakin { display: flex; flex-wrap: wrap; gap: 0 20px; }
        .yakin a { display: inline-flex; align-items: center; min-height: 44px; color: var(--ink); font-weight: 500; }
        .yakin a:hover { color: var(--orange-btn); }
        .kirinti { font-size: .8125rem; color: rgba(255,255,255,.7); margin-bottom: 10px; }
        .kirinti a { color: rgba(255,255,255,.85); display: inline-flex; align-items: center; min-height: 44px; }
        @media (max-width: 760px) { .ilceler { grid-template-columns: minmax(0,1fr); } }
    </style>
`;

// Turkce bulunma eki: Ankara'da, Bayburt'ta, Denizli'de, Muş'ta
function deEki(ad) {
    const k = ad.toLocaleLowerCase('tr-TR');
    const unlu = [...k].reverse().find(c => 'aeıioöuüâ'.includes(c));
    const kalin = 'aıouâ'.includes(unlu);
    const sert = 'fstkçşhp'.includes(k[k.length - 1]);
    return ad + "'" + (sert ? 't' : 'd') + (kalin ? 'a' : 'e');
}

// Turkce iyelik eki: Ankara'nin, Istanbul'un, Denizli'nin, Mus'un, Igdir'in
function ekiBul(v) {
    const k = v.il.toLocaleLowerCase('tr-TR');
    const unlu = [...k].reverse().find(c => 'aeıioöuüâ'.includes(c));
    const e = { a: 'ı', 'â': 'i', 'ı': 'ı', e: 'i', i: 'i', o: 'u', u: 'u', 'ö': 'ü', 'ü': 'ü' }[unlu];
    const unluyleBiter = 'aeıioöuüâ'.includes(k[k.length - 1]);
    return v.il + "'" + (unluyleBiter ? 'n' : '') + e + 'n';
}

function sema(v, slug) {
    const servis = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: v.il + ' Matbaa ve Baskı Hizmeti',
        serviceType: 'Matbaa ve baskı',
        url: 'https://karadenizmatbaa.com/' + slug,
        provider: {
            '@type': 'Organization',
            name: 'Karadeniz Matbaa',
            url: 'https://karadenizmatbaa.com',
            telephone: '+905321394659',
        },
        areaServed: [{ '@type': 'AdministrativeArea', name: v.il }].concat(
            v.ilceler.map(i => ({ '@type': 'Place', name: i + ', ' + v.il }))),
    };
    const sss = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: v.sss.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
    };
    return [servis, sss].map(o => '    <script type="application/ld+json">\n' + JSON.stringify(o, null, 2).replace(/^/gm, '    ') + '\n    </script>');
}

function bas(dosya, v, slug) {
    let h = fs.readFileSync(dosya, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
    h = h.slice(0, h.indexOf('    <style>'));
    h = h.split('\n').filter(l => !/font-awesome|rel="preload" as="image"/.test(l)).join('\n');
    h = h.replace('Inter:wght@400;500;600;700;800;900', 'Inter:wght@400;500;600;700');
    if (!h.includes('<meta name="mobile-web-app-capable"'))
        h = h.replace('<meta name="apple-mobile-web-app-capable"', '<meta name="mobile-web-app-capable" content="yes" />\n    <meta name="apple-mobile-web-app-capable"');
    // eski JSON-LD bloklarindan: Temsilcilik/Service ve FAQPage cikar, yerine yenileri
    const bloklar = [...h.matchAll(/    <script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g)];
    let ilk = -1;
    for (const b of bloklar.reverse()) {
        const icerik = b[0];
        if (/Temsilcili|"@type": "Service"|"FAQPage"/.test(icerik)) {
            h = h.slice(0, b.index) + h.slice(b.index + icerik.length);
            ilk = b.index;
        }
    }
    if (ilk < 0) throw new Error(slug + ': JSON-LD yeri bulunamadi');
    const yeni = sema(v, slug).join('\n') + '\n';
    const son = h.lastIndexOf('</script>') + '</script>\n'.length;
    h = h.slice(0, son) + yeni + h.slice(son);
    return h;
}

function govde(v, slug) {
    const ek = ekiBul(v);
    const wa = 'https://wa.me/905321394659?text=' + encodeURIComponent('Merhaba, ' + v.il + ' için teklif almak istiyorum.');
    const komsu = BOLGE[bolgeBul(v.il)].filter(x => x !== tam(v.il) && adres[x]);
    if (komsu.length !== BOLGE[bolgeBul(v.il)].length - 1) throw new Error(slug + ': komsu il adresi eksik');
    const sayfaUst = ust
        .replace('<a href="#iller">İller</a>', '<a href="#ilceler">İlçeler</a>')
        .replace(/https:\/\/wa\.me\/905321394659\?text=Merhaba,%20karadenizmatbaa\.com%20%C3%BCzerinden%20teklif%20almak%20istiyorum\./g, wa);
    const giris = v.giris || v.hero;
    return `${sayfaUst}<main>
<!-- ========== GIRIS ========== -->
<section class="hero">
    <div class="wrap">
        <nav class="kirinti" aria-label="Konum"><a href="/">Ana Sayfa</a> › ${esc(v.il)} Matbaa</nav>
        <h1>${esc(v.il)} Matbaa</h1>
        <p class="hero-slogan">${esc(ek)} ${v.ilceler.length} ilçesine ertesi gün kargo.<br>Fiyatı gör, WhatsApp'tan yaz.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" class="btn"><svg class="i" aria-hidden="true"><use href="#i-wa"/></svg> WhatsApp'tan Yaz</a>
    </div>
</section>

${urunler.replace('<h2>Ürünler ve fiyatlar</h2>', '<h2>' + esc(v.il) + ' matbaa fiyatları</h2>')}<!-- ========== ILCELER ========== -->
<section id="ilceler">
    <div class="wrap">
        <div class="head"><h2>${esc(deEki(v.il))} matbaa hizmeti</h2></div>
        <p class="il-giris">${esc(giris)}</p>
        <div class="ilceler">
${v.ilceler.map(i => `            <div class="ilce"><h3>${esc(i)}</h3><p>${esc(v.ilceSeo[i])}</p></div>`).join('\n')}
        </div>
    </div>
</section>

<!-- ========== SSS ========== -->
<section id="sss">
    <div class="wrap">
        <div class="head"><h2>${esc(v.il)} için sık sorulanlar</h2></div>
        <div class="faq">
${v.sss.map(x => `            <details><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join('\n')}
        </div>
    </div>
</section>

<!-- ========== YAKIN ILLER ========== -->
<section id="yakin">
    <div class="wrap">
        <div class="head"><h2>${bolgeBul(v.il)} Bölgesi'nde diğer iller</h2></div>
        <div class="yakin">
${komsu.map(x => `            <a href="/${adres[x]}">${esc(x)} Matbaa</a>`).join('\n')}
        </div>
    </div>
</section>

${iletisim.replace('<a href="#hakkimizda">Hakkımızda</a>', '<a href="/#hakkimizda">Hakkımızda</a>')}`;
}

let say = 0;
for (const [slug, v] of Object.entries(veri)) {
    const dosya = path.join(kok, slug + '.html');
    if (!bolgeBul(v.il)) throw new Error('bolge yok: ' + v.il);
    let html = bas(dosya, v, slug) + css.replace(/\n    <\/style>\n$/, '') + ekCss + '</head>\n' + govde(v, slug) + '</body>\n</html>\n';
    // il sayfasinda "#iller" yerine ana sayfa alt bilgisi zaten var; ek duzeltme yok
    fs.writeFileSync(dosya, html.replace(/\n/g, '\r\n'));
    say++;
}
console.log('tamam:', say, 'il sayfasi');
