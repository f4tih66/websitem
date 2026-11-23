---
title: 'Merhaba Dünya: Bu Blog Nasıl Kuruldu?'
description: 'Astro, Markdown ve GitHub Pages ile sunucusuz, hızlı ve sade bir teknoloji blogu kurmanın kısa hikâyesi.'
pubDate: 2026-11-23
tags: ['yazılım', 'astro', 'web']
draft: false
---

Her geliştiricinin bir noktada "kendi blogumu kurayım" dediği bir an vardır. Benim için o an geldi. Bu ilk yazıda blogun nasıl çalıştığını ve neden bu araçları seçtiğimi kısaca anlatıyorum.

## Neden statik site?

Kişisel bir blog için sunucu, veritabanı ya da yönetim paneli gerekmiyor. Statik site:

- **Hızlıdır:** Sayfalar önceden üretilir, tarayıcıya hazır HTML gider.
- **Güvenlidir:** Saldırı yüzeyi çok küçüktür; ortada çalışan bir sunucu uygulaması yoktur.
- **Ucuzdur:** GitHub Pages gibi servislerde ücretsiz barındırılır.
- **Sürdürülebilirdir:** Her şey Git'te durur, yazılar düz Markdown dosyalarıdır.

## Yığın (stack)

| Katman        | Araç                     |
| ------------- | ------------------------ |
| Site üretici  | Astro                    |
| İçerik        | Markdown / MDX           |
| Kod renklendirme | Shiki                 |
| Yayın         | GitHub Actions + Pages   |

## Yeni bir yazı nasıl eklenir?

Yazılar `src/content/blog/` klasöründe duruyor. Yeni bir dosya oluşturup başına şu frontmatter'ı eklemek yeterli:

```yaml
---
title: 'Yazı başlığı'
description: 'Kısa açıklama'
pubDate: 2026-11-23
tags: ['siber-güvenlik']
draft: true
---
```

Hazır olduğunda `draft: false` yapıp `main` branch'ine push ediyorum; gerisini GitHub Actions hallediyor.

## Küçük bir kod örneği

Okuma süresini hesaplayan fonksiyonun sade bir hâli:

```ts
export function readingTime(text: string, wpm = 200): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}
```

Terminal tarafında ise yerelde çalıştırmak şu kadar:

```bash
npm install
npm run dev
```

## Sırada ne var?

Önümüzdeki yazılarda siber güvenliğin temelleri, yapay zekâ araçlarının pratik kullanımı ve geliştirici araçları üzerine notlar paylaşmayı planlıyorum. Takipte kalmak için RSS beslemesine abone olabilirsin.
