// `base` (örn. /websitem) dikkate alınarak site içi bağlantı üretir.
// withBase('/blog/') -> '/websitem/blog/'
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path = '/'): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}` || '/';
}

// Geçerli yolun bir menü öğesiyle eşleşip eşleşmediğini kontrol eder (aria-current için).
export function isActive(currentPath: string, href: string): boolean {
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  const current = norm(currentPath);
  const target = norm(withBase(href));
  if (target === norm(withBase('/'))) return current === target;
  return current === target || current.startsWith(`${target}/`);
}
