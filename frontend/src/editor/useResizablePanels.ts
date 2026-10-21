import { useState, useCallback, useEffect } from 'react'

const MIN_LEFT_WIDTH = 180
const MAX_LEFT_WIDTH = 450
const DEFAULT_LEFT_WIDTH = 256

const MIN_RIGHT_WIDTH = 260
const MAX_RIGHT_WIDTH = 600
const DEFAULT_RIGHT_WIDTH = 320

export function useResizablePanels() {
  const [leftWidth, setLeftWidth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('uiforge_left_width')
      if (saved) {
        const parsed = parseInt(saved, 10)
        if (!isNaN(parsed) && parsed >= MIN_LEFT_WIDTH && parsed <= MAX_LEFT_WIDTH) {
          return parsed
        }
      }
    } catch {}
    return DEFAULT_LEFT_WIDTH
  })

  const [rightWidth, setRightWidth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('uiforge_right_width')
      if (saved) {
        const parsed = parseInt(saved, 10)
        if (!isNaN(parsed) && parsed >= MIN_RIGHT_WIDTH && parsed <= MAX_RIGHT_WIDTH) {
          return parsed
        }
      }
    } catch {}
    return DEFAULT_RIGHT_WIDTH
  })

  // Start resizing LeftNavbar
  const startLeftResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = leftWidth

    const onMouseMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientX - startX
      const newWidth = Math.min(MAX_LEFT_WIDTH, Math.max(MIN_LEFT_WIDTH, startWidth + delta))
      setLeftWidth(newWidth)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }, [leftWidth])

  // Start resizing PropertyPanel
  const startRightResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = rightWidth

    const onMouseMove = (moveEvent: MouseEvent) => {
      const delta = startX - moveEvent.clientX // Dragging left increases rightWidth
      const newWidth = Math.min(MAX_RIGHT_WIDTH, Math.max(MIN_RIGHT_WIDTH, startWidth + delta))
      setRightWidth(newWidth)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }, [rightWidth])

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('uiforge_left_width', String(leftWidth))
    } catch {}
  }, [leftWidth])

  useEffect(() => {
    try {
      localStorage.setItem('uiforge_right_width', String(rightWidth))
    } catch {}
  }, [rightWidth])

  return {
    leftWidth,
    rightWidth,
    startLeftResize,
    startRightResize,
  }
}

