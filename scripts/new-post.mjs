#!/usr/bin/env node
// Yeni yazı iskeleti oluşturur.
// Kullanım: npm run new -- "Yazının Başlığı"
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Kullanım: npm run new -- "Yazının Başlığı"');
  process.exit(1);
}

const map = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', İ: 'i', I: 'i', Ö: 'o', Ş: 's', Ü: 'u' };
const slug = title
  .split('')
  .map((c) => map[c] ?? c)
  .join('')
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const dir = join('src', 'content', 'blog');
mkdirSync(dir, { recursive: true });
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`Zaten var: ${file}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const safeTitle = title.replace(/'/g, "''");

writeFileSync(
  file,
  `---
title: '${safeTitle}'
description: 'Kısa bir açıklama yaz (SEO ve önizlemeler için).'
pubDate: ${today}
tags: []
draft: true
---

Yazına buradan başla.
`,
);

console.log(`Oluşturuldu: ${file}`);
console.log('Hazır olduğunda draft: false yap, commit et ve main\'e push et.');
