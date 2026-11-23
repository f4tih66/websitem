# websitem — kişisel teknoloji blogu

Teknoloji, yazılım, siber güvenlik ve yapay zekâ üzerine yazdığım kişisel blog.
[Astro](https://astro.build) ile üretilen tamamen statik bir sitedir; sunucu veya veritabanı gerektirmez
ve GitHub Actions ile GitHub Pages'e otomatik yayınlanır.

**Canlı adres:** https://f4tih66.github.io/websitem/

## Özellikler

- Markdown / MDX içerik koleksiyonu (`src/content/blog/`)
- Koyu / açık tema geçişi (varsayılan koyu, tercih `localStorage`'da saklanır)
- Shiki ile kod renklendirme (her iki tema için)
- Okuma süresi, etiket sayfaları ve etikete göre filtreleme
- RSS (`/rss.xml`), sitemap (`/sitemap-index.xml`), `robots.txt`
- SEO meta, canonical, Open Graph ve Twitter kartları
- Responsive, semantik HTML, klavye ile gezinme ("İçeriğe atla" bağlantısı, görünür odak halkası)
- Türkçe arayüz; çok dillilik için `src/i18n/ui.ts` sözlüğü ve yazılarda `lang` alanı hazır

## Gereksinimler

- Node.js **18.20.8+** (önerilen: 22 LTS)
- npm

## Yerelde çalıştırma

```bash
npm install        # bağımlılıkları kur (ilk seferde package-lock.json oluşur, commit et)
npm run dev        # http://localhost:4321/websitem/ adresinde geliştirme sunucusu
npm run build      # ./dist klasörüne üretim derlemesi
npm run preview    # derlenmiş siteyi yerelde önizle
```

> Taslak yazılar (`draft: true`) yalnızca `npm run dev` sırasında görünür; `npm run build` çıktısına girmez.

## Yeni yazı ekleme

**Kısa yol:**

```bash
npm run new -- "Yazının Başlığı"
```

Bu komut `src/content/blog/yazinin-basligi.md` dosyasını `draft: true` ile oluşturur.

**Elle:** `src/content/blog/` altında yeni bir `.md` (veya bileşen kullanacaksan `.mdx`) dosyası oluştur:

```markdown
---
title: 'Yazının başlığı'
description: 'Arama motorları ve paylaşım önizlemeleri için kısa açıklama.'
pubDate: 2026-11-23
updatedDate: 2026-12-01   # isteğe bağlı
tags: ['siber-güvenlik', 'linux']
draft: false
ogImage: '/og/yazi.png'   # isteğe bağlı, public/ altındaki yol
---

Yazının içeriği…
```

Dosya adı URL olur: `src/content/blog/linux-ipuclari.md` → `/websitem/blog/linux-ipuclari/`.

Yayınlamak için:

```bash
git add .
git commit -m "post: Linux ipuçları"
git push
```

## Deploy

`main` branch'ine yapılan her push `.github/workflows/deploy.yml` iş akışını çalıştırır:
bağımlılıkları kurar, `npm run build` ile siteyi derler ve `dist/` klasörünü GitHub Pages'e yayınlar.

İlk kurulumda bir kez: **Repo → Settings → Pages → Build and deployment → Source: "GitHub Actions"** seçili olmalı.

### Repo adı veya alan adı değişirse

`astro.config.mjs` içindeki iki değeri güncelle:

```js
site: 'https://<kullanici>.github.io',
base: '/<repo-adi>',
```

Özel alan adı kullanıyorsan `site: 'https://alanadin.com'`, `base: '/'` yap, `public/CNAME` dosyasına alan adını yaz
ve `public/robots.txt` içindeki sitemap adresini güncelle.

## Proje yapısı

```text
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── public/                        # favicon, OG görseli, robots.txt
├── scripts/new-post.mjs           # yeni yazı iskeleti
├── src/
│   ├── components/                # Header, Footer, ThemeToggle, PostCard…
│   ├── content/blog/              # yazılar (Markdown / MDX)
│   ├── i18n/ui.ts                 # arayüz metinleri (tr / en)
│   ├── layouts/BaseLayout.astro
│   ├── pages/                     # /, /blog, /blog/[slug], /tags, /tags/[tag], /hakkimda, 404, rss.xml
│   ├── styles/global.css          # tema değişkenleri ve tipografi
│   ├── utils/                     # yazı, etiket, okuma süresi, URL yardımcıları
│   ├── consts.ts                  # site başlığı, yazar, sosyal bağlantılar
│   └── content.config.ts          # frontmatter şeması
└── astro.config.mjs
```

## Özelleştirme

- Site adı, yazar, açıklama: `src/consts.ts`
- Renkler ve fontlar: `src/styles/global.css` (`:root` değişkenleri)
- Hakkımda sayfası: `src/pages/hakkimda.astro` (köşeli parantezli yerleri doldur)
- Varsayılan paylaşım görseli: `public/og-default.png` (1200×630)
