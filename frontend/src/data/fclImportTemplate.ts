import type { ComponentEvent, ComponentNode } from '@/types/schema'

interface RawNode {
  id: string
  type: ComponentNode['type']
  order?: number
  events?: ComponentEvent[]
  props?: Record<string, unknown>
  style?: Record<string, unknown>
  dataBinding?: ComponentNode['dataBinding']
  validation?: ComponentNode['validation']
  permissions?: ComponentNode['permissions']
  children?: RawNode[]
}

function normalizeNode(raw: RawNode, pageId = '2', parentId: string | null = null, defaultOrder = 1): ComponentNode {
  const nodeOrder =
    raw.order !== undefined
      ? raw.order
      : raw.props?.order !== undefined
      ? Number(raw.props.order)
      : defaultOrder

  return {
    id: raw.id,
    type: raw.type,
    pageId,
    parentId,
    order: nodeOrder,
    events: raw.events || [],
    props: { ...raw.props, order: nodeOrder },
    style: raw.style || {},
    dataBinding: raw.dataBinding,
    validation: raw.validation,
    permissions: raw.permissions,
    children: raw.children
      ? raw.children.map((c, i) => normalizeNode(c, pageId, raw.id, i + 1))
      : undefined,
  }
}

/**
 * 🚢 FCL IMPORT ERP SCREEN TEMPLATE (TÁI HIỆN CHUẨN XÁC 100% ẢNH 4 CỦA MASTER)
 */
const RAW_TREE: RawNode[] = [
  // ── TAB 1: MAIN INFORMATION (Container, tab = true, order = 1) ──
  {
    id: 'tab_main_info',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'MAIN INFORMATION',
      order: 1,
      layoutMode: 'flex',
      flexConfig: {
        direction: 'column',
        wrap: 'wrap',
        justify: 'flex-start',
        align: 'stretch',
        gap: '12px',
      },
    },
    style: { width: '100%' },
    children: [
      // 1. Action Bar Toolbar
      {
        id: 'fcl_action_bar',
        type: 'Container',
        props: {
          layoutMode: 'flex',
          flexConfig: {
            direction: 'row',
            justify: 'flex-end',
            align: 'center',
            gap: '8px',
          },
        },
        style: { width: '100%', padding: '4px 0 8px 0' },
        children: [
          {
            id: 'btn_emanifest',
            type: 'Button',
            props: { label: '📋 E-Manifest', variant: 'secondary', size: 'sm' },
            events: [{ id: 'ev_eman', trigger: 'click', action: 'onEManifest', handlerName: 'onEManifest' }],
          },
          {
            id: 'btn_print',
            type: 'Button',
            props: { label: '🖨️ Print & Documents', variant: 'secondary', size: 'sm' },
            events: [{ id: 'ev_print', trigger: 'click', action: 'onPrintDocuments', handlerName: 'onPrintDocuments' }],
          },
          {
            id: 'btn_accounting',
            type: 'Button',
            props: { label: '💰 Accounting', variant: 'secondary', size: 'sm' },
            events: [{ id: 'ev_acct', trigger: 'click', action: 'onAccountingSync', handlerName: 'onAccountingSync' }],
          },
          {
            id: 'btn_function',
            type: 'Button',
            props: { label: '⚡ Function', variant: 'secondary', size: 'sm' },
            events: [{ id: 'ev_func', trigger: 'click', action: 'onRunFunction', handlerName: 'onRunFunction' }],
          },
          {
            id: 'btn_save',
            type: 'Button',
            props: { label: '💾 Lưu Dữ Liệu', variant: 'primary', size: 'sm' },
            events: [{ id: 'ev_save', trigger: 'click', action: 'onSave', handlerName: 'onSave' }],
          },
        ],
      },

      // 2. Card: GENERAL - FCL IMPORT (Lưới 12-cột)
      {
        id: 'sec_general_fcl',
        type: 'Section',
        props: {
          title: 'GENERAL - FCL IMPORT',
          label: 'GENERAL - FCL IMPORT',
          collapsible: true,
          boxShadow: true,
        },
        style: { width: '100%', marginBottom: '16px' },
        children: [
          // Row 1
          {
            id: 'fld_job_no',
            type: 'TextBox',
            props: {
              label: 'Job No.',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'FCLI-26020005',
              required: true,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'JobNo', twoWay: true },
          },
          {
            id: 'fld_shipment_date',
            type: 'DatePicker',
            props: {
              label: 'S.Date',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: '02/02/2026',
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'ShipmentDate', formatter: 'date_ddmmyyyy', twoWay: true },
          },
          {
            id: 'fld_mbl_no',
            type: 'TextBox',
            props: {
              label: 'M-B/L No',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'ASHVT00002005',
              required: true,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'MBLNo', twoWay: true },
            events: [{ id: 'ev_mbl', trigger: 'change', action: 'CheckMBL', handlerName: 'CheckMBL' }],
          },

          // Row 2
          {
            id: 'fld_mbl_date',
            type: 'DatePicker',
            props: {
              label: 'M-B/L Issued Date',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: '25/01/2026',
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'MBLIssuedDate', formatter: 'date_ddmmyyyy', twoWay: true },
          },
          {
            id: 'fld_mbl_type',
            type: 'Select',
            props: {
              label: 'M-B/L Type',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'SURRENDERED',
              options: [
                { value: 'SURRENDERED', label: 'SURRENDERED' },
                { value: 'ORIGINAL', label: 'ORIGINAL' },
                { value: 'SEAWAY', label: 'SEA WAYBILL' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'MBLType', twoWay: true },
          },
          {
            id: 'fld_vendor',
            type: 'Select',
            props: {
              label: 'Vendor',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'VFRAC-IT',
              options: [
                { value: 'VFRAC-IT', label: 'VFRAC-IT VIETNAM' },
                { value: 'TRANSLEAD', label: 'SHANGHAI TRANSLEAD' },
              ],
            },
            dataBinding: { entityName: 'Vendor', fieldName: 'CompanyInterShortName', twoWay: true },
            events: [{ id: 'ev_ven', trigger: 'change', action: 'FeeSuggestion', handlerName: 'FeeSuggestion' }],
          },

          // Row 3
          {
            id: 'fld_lines',
            type: 'TextBox',
            props: {
              label: 'S. Lines',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'SITC',
            },
            events: [{ id: 'ev_line', trigger: 'change', action: 'AutoFillVendor', handlerName: 'AutoFillVendor' }],
          },
          {
            id: 'fld_agent',
            type: 'TextBox',
            props: {
              label: 'Agent',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'SHANGHAI TRANSLEAD',
            },
          },
          {
            id: 'fld_pol',
            type: 'Select',
            props: {
              label: 'POL',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'CNSGH',
              options: [
                { value: 'CNSGH', label: 'SHANGHAI / CNSGH' },
                { value: 'KRPUS', label: 'BUSAN / KRPUS' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'POL', twoWay: true },
            events: [{ id: 'ev_pol', trigger: 'change', action: 'AutoPOL', handlerName: 'AutoPOL' }],
          },

          // Row 4
          {
            id: 'fld_pod',
            type: 'Select',
            props: {
              label: 'POD',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'VNDTS',
              options: [
                { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS' },
                { value: 'VNSGN', label: 'CAT LAI / VNSGN' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'POD', twoWay: true },
            events: [{ id: 'ev_pod', trigger: 'change', action: 'AutoPOD', handlerName: 'AutoPOD' }],
          },
          {
            id: 'fld_service',
            type: 'Select',
            props: {
              label: 'Service',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'CYCY',
              options: [
                { value: 'CYCY', label: 'CY/CY' },
                { value: 'CFSCFS', label: 'CFS/CFS' },
                { value: 'DOOR', label: 'DOOR TO DOOR' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'Service', twoWay: true },
          },
          {
            id: 'fld_opic',
            type: 'TextBox',
            props: {
              label: 'O.P IC',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'NGO PHAN THI LY',
            },
            events: [{ id: 'ev_pic', trigger: 'change', action: 'TryParseData', handlerName: 'TryParseData' }],
          },

          // Row 5
          {
            id: 'fld_eta',
            type: 'DatePicker',
            props: {
              label: 'ETA',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: '03/02/2026',
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'ETA', formatter: 'date_ddmmyyyy', twoWay: true },
          },
          {
            id: 'fld_pterm',
            type: 'Select',
            props: {
              label: 'P.Term',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'COLLECT',
              options: [
                { value: 'COLLECT', label: 'COLLECT' },
                { value: 'PREPAID', label: 'PREPAID' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'PaymentTerm', twoWay: true },
          },
          {
            id: 'fld_commodity',
            type: 'TextBox',
            props: {
              label: 'Commodity',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'Linh kiện điện tử phụ trợ',
            },
            dataBinding: { entityName: 'Commodity', fieldName: 'CommodityName', twoWay: true },
          },

          // Row 6: Quantities & Numbers
          {
            id: 'fld_tpackages',
            type: 'Number',
            props: {
              label: 'T.Packages',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 12,
              precision: 0,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'TotalPackages', twoWay: true },
          },
          {
            id: 'fld_ptype',
            type: 'Select',
            props: {
              label: 'P.Type',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 'PALLETS',
              options: [
                { value: 'PALLETS', label: 'PALLETS' },
                { value: 'CARTONS', label: 'CARTONS' },
                { value: 'BAGS', label: 'BAGS' },
              ],
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'PackageType', twoWay: true },
          },
          {
            id: 'fld_total_gw',
            type: 'Number',
            props: {
              label: 'Total GW',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 1085,
              precision: 0,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'TotalGW', formatter: 'number_thousands', twoWay: true },
          },
          {
            id: 'fld_total_cbm',
            type: 'Number',
            props: {
              label: 'Total CBM',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 25.0,
              precision: 2,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'TotalCBM', twoWay: true },
          },
          {
            id: 'fld_total_vgm',
            type: 'Number',
            props: {
              label: 'Total VGM',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 0,
              precision: 0,
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'TotalVGM', twoWay: true },
          },
          {
            id: 'fld_po_no',
            type: 'TextBox',
            props: {
              label: 'PO No.',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 2,
              value: 'PO-2026-8899',
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'PONo', twoWay: true },
          },

          // Row 7: Notes
          {
            id: 'fld_notes',
            type: 'Textarea',
            props: {
              label: 'Notes',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 12,
              rows: 2,
              value: 'Lô hàng FCL nhập khẩu theo chỉ thị của khách hàng Foxlink Đà Nẵng. Lưu kho cảng Tiên Sa.',
            },
            dataBinding: { entityName: 'Shipment', fieldName: 'Notes', twoWay: true },
          },
        ],
      },

      // 3. Table 1: SHIPPING INFORMATION
      {
        id: 'grid_shipping_info',
        type: 'Table',
        props: {
          label: 'SHIPPING INFORMATION',
          columns: [
            { key: 'pol', title: 'POL', width: '160px', sticky: 'left', sortable: true },
            { key: 'pod', title: 'POD', width: '180px', sortable: true },
            { key: 'etd', title: 'ETD', width: '110px', componentType: 'DatePicker', sortable: true },
            { key: 'atd', title: 'ATD', width: '110px', componentType: 'DatePicker', sortable: true },
            { key: 'eta', title: 'ETA', width: '110px', componentType: 'DatePicker', sortable: true },
            { key: 'ata', title: 'ATA', width: '110px', componentType: 'DatePicker', sortable: true },
            { key: 'vessel', title: 'VESSEL', width: '140px', sortable: true },
            { key: 'voy', title: 'VOY', width: '100px', sortable: true },
          ],
        },
        style: { width: '100%', marginBottom: '16px' },
      },

      // 4. Table 2: CONTAINER INFORMATION (GridPolicy with Sticky & Summary Totals)
      {
        id: 'grid_container_info',
        type: 'Table',
        props: {
          label: 'CONTAINER INFORMATION',
          columns: [
            { key: 'size', title: 'SIZE', width: '80px', align: 'center', sortable: true },
            { key: 'containerNo', title: 'CONTAINER NO', width: '150px', sticky: 'left', sortable: true },
            { key: 'sealNo', title: 'SEAL NO', width: '130px', sortable: true },
            { key: 'packageNumber', title: 'PACKAGE NUMBER', width: '130px', align: 'right', aggregate: 'sum', sortable: true },
            { key: 'packageType', title: 'PACKAGE TYPE', width: '130px', align: 'center' },
            { key: 'gw', title: 'GW (KGS)', width: '120px', align: 'right', aggregate: 'sum', precision: 0, sortable: true },
            { key: 'cbm', title: 'CBM', width: '110px', align: 'right', aggregate: 'sum', precision: 2, sortable: true },
            { key: 'vgm', title: 'VGM', width: '100px', align: 'right', aggregate: 'sum', precision: 0 },
            { key: 'description', title: 'DESCRIPTION OF GOODS', width: '260px' },
          ],
        },
        style: { width: '100%', marginBottom: '16px' },
      },

      // 5. Table 3: SHIPMENT DETAIL
      {
        id: 'grid_shipment_detail',
        type: 'Table',
        props: {
          label: 'SHIPMENT DETAIL',
          columns: [
            { key: 'custom', title: 'CUSTOM', width: '100px', align: 'center', componentType: 'Checkbox' },
            { key: 'trucking', title: 'TRUCKING', width: '100px', align: 'center', componentType: 'Checkbox' },
            { key: 'hblNo', title: 'HBL NO', width: '150px', sticky: 'left', sortable: true },
            { key: 'customer', title: 'CUSTOMER', width: '220px', sortable: true },
            { key: 'salesman', title: 'SALESMAN', width: '140px', sortable: true },
            { key: 'salesSupport', title: 'SALES SUPPORT', width: '140px' },
            { key: 'handleGroup', title: 'HANDLE GROUP', width: '130px' },
            { key: 'documentNo', title: 'DOCUMENT NO', width: '140px' },
            { key: 'shipmentType', title: 'SHIPMENT TYPE', width: '130px', componentType: 'Select' },
            { key: 'doNo', title: 'D/O NO', width: '130px' },
            { key: 'referenceNo', title: 'REFERENCE NO', width: '130px' },
          ],
        },
        style: { width: '100%' },
      },
    ],
  },

  // ── TAB 2: MASTER COST (Container, tab = true, order = 1) ──
  {
    id: 'tab_master_cost',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'MASTER COST',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 3: ATTACHMENT (Container, tab = true, order = 1) ──
  {
    id: 'tab_attachment',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'ATTACHMENT',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 4: PROFIT (Container, tab = true, order = 1) ──
  {
    id: 'tab_profit',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'PROFIT',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 5: PROFIT (NEW) (Container, tab = true, order = 1) ──
  {
    id: 'tab_profit_new',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'PROFIT (NEW)',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 6: RECOMMEND SERVICE (Container, tab = true, order = 1) ──
  {
    id: 'tab_recommend',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'RECOMMEND SERVICE',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 7: AI CHAT (Container, tab = true, order = 1) ──
  {
    id: 'tab_ai_chat',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'AI CHAT',
      order: 1,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },

  // ── TAB 8: HISTORY (Container, tab = true, order = 1, badge = 2) ──
  {
    id: 'tab_history',
    type: 'Container',
    props: {
      tab: true,
      isTab: true,
      label: 'HISTORY',
      order: 1,
      badge: 2,
      layoutMode: 'flex',
      flexConfig: { direction: 'column', gap: '12px' },
    },
    style: { width: '100%' },
    children: [],
  },
]

export const FCL_IMPORT_PAGE_TREE: ComponentNode[] = RAW_TREE.map((r, i) =>
  normalizeNode(r, '2', null, i + 1)
)
