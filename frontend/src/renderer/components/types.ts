import type React from 'react'
import type { ComponentNode } from '@/types/schema'

// Props dùng chung cho các leaf component (Button, TextBox, Label, Table...)
export interface ComponentProps {
  node: ComponentNode
  isEditing?: boolean
  onRightClick?: (e: React.MouseEvent, node: ComponentNode) => void
}
