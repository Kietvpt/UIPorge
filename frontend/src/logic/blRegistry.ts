/**
 * Business Logic (BL) File & Function Registry.
 * Manages the list of exported functions available for each BL file.
 */

// Initial default functions for common BL files
const DEFAULT_BL_FUNCTIONS: Record<string, string[]> = {
  'dashboard.bl.ts': [
    'loadDashboardStats',
    'refreshData',
    'exportReportExcel',
    'filterByDateRange',
  ],
  'customerManagement.bl.ts': [
    'Hellowolrk1',
    'hellowork2',
    'fetchCustomerList',
    'saveCustomerDetails',
    'deleteCustomerRecord',
  ],
}

const STORAGE_KEY = 'uiforge_bl_functions_registry'

function loadRegistry(): Record<string, string[]> {
  if (typeof window === 'undefined') return DEFAULT_BL_FUNCTIONS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { ...DEFAULT_BL_FUNCTIONS, ...parsed }
    }
  } catch {}
  return DEFAULT_BL_FUNCTIONS
}

function saveRegistry(registry: Record<string, string[]>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registry))
  } catch {}
}

export function normalizeBlKey(fileName?: string): string {
  if (!fileName || !fileName.trim()) return ''
  let clean = fileName.trim().replace(/\\/g, '/').split('/').pop() || ''
  const lower = clean.toLowerCase()
  if (lower.includes('customer')) return 'customerManagement.bl.ts'
  if (lower.includes('dashboard')) return 'dashboard.bl.ts'
  if (!clean.endsWith('.ts')) {
    if (!clean.endsWith('.bl')) clean = `${clean}.bl`
    clean = `${clean}.ts`
  }
  return clean
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

  // If new file without registered functions, seed with standard starter functions
  const defaultSeeds = ['Hellowolrk1', 'hellowork2', 'initPageData', 'handleSubmitForm']
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

