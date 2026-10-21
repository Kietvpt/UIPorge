import type { ComponentStyle } from '@/types/schema'

/** Convert CSS kebab-case property to camelCase (e.g. font-weight -> fontWeight) */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, g) => g.toUpperCase())
}

/** Convert camelCase property to CSS kebab-case (e.g. fontWeight -> font-weight) */
export function camelToKebab(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * Parses raw CSS string into React CSSProperties object.
 * Ignores comments and malformed lines gracefully.
 * Example input:
 *   font-weight: bold;
 *   color: red;
 */
export function parseRawCss(cssText: string): Record<string, string> {
  const result: Record<string, string> = {}
  if (!cssText || typeof cssText !== 'string') return result

  // Remove CSS comments /* ... */
  const clean = cssText.replace(/\/\*[\s\S]*?\*\//g, '')

  // Split by semicolon
  const rules = clean.split(';')

  for (const rule of rules) {
    const trimmed = rule.trim()
    if (!trimmed) continue

    const colonIdx = trimmed.indexOf(':')
    if (colonIdx === -1) continue

    const prop = trimmed.slice(0, colonIdx).trim()
    const val = trimmed.slice(colonIdx + 1).trim()

    if (prop && val) {
      const camelProp = kebabToCamel(prop)
      result[camelProp] = val
    }
  }

  return result
}

/**
 * Format React style object into readable raw CSS string for textarea.
 */
export function formatStyleToCss(style: Partial<ComponentStyle>): string {
  const ignoredKeys = new Set([
    'customCss',
    'display',
    'flexDirection',
    'flexWrap',
    'justifyContent',
    'alignItems',
    'gap',
    'gridTemplateColumns',
  ])

  const lines: string[] = []
  for (const [key, val] of Object.entries(style)) {
    if (val === undefined || val === null || val === '' || ignoredKeys.has(key)) {
      continue
    }
    const kebabProp = camelToKebab(key)
    lines.push(`${kebabProp}: ${val};`)
  }

  return lines.join('\n')
}

