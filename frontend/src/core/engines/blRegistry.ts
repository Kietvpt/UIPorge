/**
 * Business Logic (BL) File & Function Registry.
 * Manages the list of exported functions available for each BL file dynamically.
 */

const STORAGE_KEY = 'uiforge_bl_functions_registry'

const DYNAMIC_BL_FUNCTIONS: Record<string, string[]> = {}

export function normalizeBlKey(fileName?: string): string {
  if (!fileName || !fileName.trim()) return ''
  let clean = fileName.trim().replace(/\\/g, '/').split('/').pop() || ''
  if (!clean.endsWith('.ts')) {
    if (!clean.endsWith('.bl')) clean = `${clean}.bl`
    clean = `${clean}.ts`
  }
  return clean
}

function loadRegistry(): Record<string, string[]> {
  if (typeof window === 'undefined') return DYNAMIC_BL_FUNCTIONS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      const merged = { ...DYNAMIC_BL_FUNCTIONS, ...parsed }
      for (const [key, fns] of Object.entries(DYNAMIC_BL_FUNCTIONS)) {
        merged[key] = Array.from(new Set([...fns, ...(merged[key] || [])]))
      }
      return merged
    }
  } catch {}
  return DYNAMIC_BL_FUNCTIONS
}

function saveRegistry(registry: Record<string, string[]>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registry))
  } catch {}
}

/** Get list of functions exported by a BL file */
export function getFunctionsForBlFile(fileName?: string): string[] {
  if (!fileName || !fileName.trim()) return []
  const norm = normalizeBlKey(fileName)
  const registry = loadRegistry()

  if (registry[norm] && registry[norm].length > 0) {
    return registry[norm]
  }

  if (registry[fileName.trim()] && registry[fileName.trim()].length > 0) {
    return registry[fileName.trim()]
  }

  // Base starter functions for any newly created BL file
  const defaultSeeds = ['initPageData', 'handleSubmitForm', 'onRowClick', 'saveRecord']
  registry[norm] = defaultSeeds
  saveRegistry(registry)
  return defaultSeeds
}

/** Add a new function name to a BL file */
export function addFunctionToBlFile(fileName: string, functionName: string): string[] {
  if (!fileName || !functionName) return []
  const normFile = normalizeBlKey(fileName)
  const normFn = functionName.trim().replace(/\(.*?\)/g, '')
  if (!normFile || !normFn) return []

  const registry = loadRegistry()
  const current = registry[normFile] || []
  if (!current.includes(normFn)) {
    registry[normFile] = [...current, normFn]
    saveRegistry(registry)
  }
  return registry[normFile]
}

/** Remove a function from a BL file */
export function removeFunctionFromBlFile(fileName: string, functionName: string): string[] {
  if (!fileName || !functionName) return []
  const normFile = normalizeBlKey(fileName)
  const normFn = functionName.trim().replace(/\(.*?\)/g, '')

  const registry = loadRegistry()
  const current = registry[normFile] || []
  registry[normFile] = current.filter((fn) => fn !== normFn)
  saveRegistry(registry)
  return registry[normFile]
}

/** Register functions for a BL file directly into the registry */
export function registerBlFunctions(fileName: string, functions: string[]) {
  const norm = normalizeBlKey(fileName)
  DYNAMIC_BL_FUNCTIONS[norm] = Array.from(new Set([...(DYNAMIC_BL_FUNCTIONS[norm] || []), ...functions]))
  const registry = loadRegistry()
  registry[norm] = Array.from(new Set([...(registry[norm] || []), ...functions]))
  saveRegistry(registry)
}

