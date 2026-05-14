import { readFileSync } from 'node:fs';
import { load as parseYaml } from 'js-yaml';
import { resolve as resolvePath } from 'node:path';

export const defaultLang = 'en' as const;
export type Lang = 'en' | 'es';
export const WRITING_PATH = '/writing';

const LOCALES: readonly string[] = ['en', 'es'];
const TRANSLATED_PATHS = ['/', '/services', '/work', '/now', '/contact', WRITING_PATH];

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return LOCALES.includes(maybeLang) ? (maybeLang as Lang) : defaultLang;
}

export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const path = url.pathname;
  if (lang === 'es') {
    return path.replace(/^\/es/, '') || '/';
  }
  const clean = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  if (TRANSLATED_PATHS.includes(clean)) {
    return clean === '/' ? '/es/' : `/es${clean}`;
  }
  return '/es/';
}

export function prefix(lang: Lang): string {
  return lang === 'es' ? '/es' : '';
}

/**
 * Reads site.yml and resolves all bilingual objects for the given language.
 * Any object with an `en` key is treated as a bilingual value and resolved
 * to the matching language (falling back to `en` if the lang key is missing).
 * Arrays and non-bilingual objects are recursed into and returned as-is.
 */
export function getSiteContent(lang: Lang): Record<string, any> {
  const raw = parseYaml(
    readFileSync(resolvePath('src/content/site.yml'), 'utf8')
  ) as Record<string, unknown>;

  function resolve(obj: unknown): unknown {
    if (obj === null || obj === undefined || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return (obj as unknown[]).map(resolve);
    const o = obj as Record<string, unknown>;
    if ('en' in o) {
      const val = o[lang] ?? o.en;
      return val !== null && typeof val === 'object' ? resolve(val) : val;
    }
    const result: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) result[k] = resolve(v);
    return result;
  }

  const resolved = resolve(raw) as Record<string, any>;

  // Second pass: replace {{key}} tokens in strings using resolved links
  const links = resolved.links as Record<string, string> ?? {};
  function resolveTokens(obj: unknown): unknown {
    if (typeof obj === 'string') {
      return obj.replace(/\{\{(\w+)\}\}/g, (_, key) => links[key] ?? `{{${key}}}`);
    }
    if (Array.isArray(obj)) return (obj as unknown[]).map(resolveTokens);
    if (obj !== null && typeof obj === 'object') {
      const result: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        result[k] = resolveTokens(v);
      }
      return result;
    }
    return obj;
  }

  return resolveTokens(resolved) as Record<string, any>;
}
