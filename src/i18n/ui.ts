// Arayüz metinleri. Yeni bir dil eklemek için `languages` ve `ui` içine
// aynı anahtarlarla yeni bir blok ekle, ardından sayfalarda `useTranslations(lang)` kullan.
export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'tr';

export const ui = {
  tr: {
    'nav.home': 'Ana sayfa',
    'nav.blog': 'Blog',
    'nav.tags': 'Etiketler',
    'nav.about': 'Hakkımda',
    'nav.rss': 'RSS',
    'nav.skip': 'İçeriğe atla',
    'nav.main': 'Ana menü',
    'theme.toggle': 'Temayı değiştir',
    'theme.toDark': 'Koyu temaya geç',
    'theme.toLight': 'Açık temaya geç',
    'home.intro': 'Merhaba! Burada yazılım, siber güvenlik ve yapay zekâ üzerine öğrendiklerimi yazıyorum.',
    'home.latest': 'Son yazılar',
    'home.all': 'Tüm yazılar →',
    'blog.title': 'Blog',
    'blog.description': 'Tüm yazılar, en yeniden en eskiye.',
    'blog.empty': 'Henüz yayınlanmış yazı yok.',
    'blog.filter': 'Etikete göre filtrele',
    'blog.allTags': 'Tümü',
    'post.readingTime': 'dk okuma',
    'post.updated': 'Güncellendi',
    'post.tags': 'Etiketler',
    'post.back': '← Tüm yazılar',
    'post.draft': 'TASLAK',
    'tags.title': 'Etiketler',
    'tags.description': 'Yazıları konularına göre keşfet.',
    'tags.postsWith': 'etiketli yazılar',
    'tags.count': 'yazı',
    '404.title': 'Sayfa bulunamadı',
    '404.text': 'Aradığın sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.',
    '404.home': 'Ana sayfaya dön',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.built': 'Astro ile yapıldı.',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    'nav.about': 'About',
    'nav.rss': 'RSS',
    'nav.skip': 'Skip to content',
    'nav.main': 'Main menu',
    'theme.toggle': 'Toggle theme',
    'theme.toDark': 'Switch to dark theme',
    'theme.toLight': 'Switch to light theme',
    'home.intro': 'Hi! I write about software, cybersecurity and AI.',
    'home.latest': 'Latest posts',
    'home.all': 'All posts →',
    'blog.title': 'Blog',
    'blog.description': 'All posts, newest first.',
    'blog.empty': 'No published posts yet.',
    'blog.filter': 'Filter by tag',
    'blog.allTags': 'All',
    'post.readingTime': 'min read',
    'post.updated': 'Updated',
    'post.tags': 'Tags',
    'post.back': '← All posts',
    'post.draft': 'DRAFT',
    'tags.title': 'Tags',
    'tags.description': 'Explore posts by topic.',
    'tags.postsWith': 'posts tagged',
    'tags.count': 'posts',
    '404.title': 'Page not found',
    '404.text': 'The page you are looking for may have moved or never existed.',
    '404.home': 'Back to home',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro.',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export const dateLocales: Record<Lang, string> = {
  tr: 'tr-TR',
  en: 'en-US',
};
