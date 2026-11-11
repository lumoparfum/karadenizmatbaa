// Ana sayfadaki urun listesini ve fason satirini
// index.html icindeki `const categories` verisinden yeniden yazar.
// Fiyat degisince: node _araclar/listeleri-uret.js  (repo kokunden calistir)
const fs = require('fs');
const path = require('path');

const dosya = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(dosya, 'utf8');
const nl = html.includes('\r\n') ? '\r\n' : '\n';

const bas = html.indexOf('const categories = [');
const son = html.indexOf('\n    ];', bas) + '\n    ];'.length;
if (bas < 0 || son < bas) throw new Error('categories bulunamadi');
const categories = new Function(html.slice(bas, son).replace('const categories =', 'return') )();

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const chev = '<svg class="i chev" aria-hidden="true"><use href="#i-chev"/></svg>';
const fiyat = c => c.highlightPrice.trim();



const urunler = categories.filter(c => c.id !== 'fason').map(c =>
    `            <button class="card" data-category="${c.id}"><img src="img/urun/${c.id}.webp" srcset="img/urun/${c.id}-160.webp 160w, img/urun/${c.id}.webp 640w" sizes="64px" alt="${esc(c.name)} baskı" width="64" height="64" loading="lazy" /><span><span class="t">${esc(c.name)}</span><span class="d">${esc(c.desc)}</span><span class="p">${fiyat(c)}</span></span>${chev}</button>`
);

const fason = categories.find(c => c.id === 'fason');
const fasonSatir = [`        <button class="fason" data-category="fason"><span><b>${esc(fason.name)}</b>${esc(fason.desc)}</span><em>Teklif al ›</em></button>`];

function yerlestir(ad, satirlar) {
    const a = `<!--${ad}-->`, b = `<!--/${ad}-->`;
    const i = html.indexOf(a), j = html.indexOf(b);
    if (i < 0 || j < i) throw new Error(ad + ' isareti yok');
    html = html.slice(0, i + a.length) + nl + satirlar.join(nl) + nl + html.slice(j);
}
yerlestir('URUNLER', urunler);
yerlestir('FASON', fasonSatir);
fs.writeFileSync(dosya, html.replace(/\r?\n/g, nl));
console.log('tamam:', urunler.length, 'urun, 1 fason');
