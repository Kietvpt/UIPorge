import type { ComponentEvent, ComponentNode } from '@/types/schema'
import {
  SAMPLE_SHIPPING_INFO,
  SAMPLE_CONTAINERS,
  SAMPLE_SHIPMENT_DETAILS,
} from '@/samples/logistics/logisticsFixtures'

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
            type: 'SearchEntry',
            props: {
              label: 'Vendor',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'VFRAC-IT',
              reference: 'Terminal',
              displayField: 'vendorName',
              valueField: 'vendorId',
              placeholder: 'Tra cứu đối tác (F1)...',
              populateRule: 'Agent = AgentName',
            },
            dataBinding: { entityName: 'Transaction', fieldName: 'VendorName', twoWay: true },
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
            type: 'Autocomplete',
            props: {
              label: 'Agent',
              showLabel: true,
              labelPosition: 'left',
              colSpan: 4,
              value: 'SHANGHAI TRANSLEAD',
              reference: 'Terminal',
              displayField: 'agentName',
              valueField: 'agentName',
              placeholder: 'Gõ để tìm kiếm đại lý...',
            },
            dataBinding: { entityName: 'Transaction', fieldName: 'Agent', twoWay: true },
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
              reference: 'Terminal',
              idField: 'code',
              textField: 'fullName',
              query: 'Active eq true',
              populateField: 'fld_vendor = vendorName, fld_agent = agentName',
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
              reference: 'Terminal',
              idField: 'code',
              textField: 'fullName',
              query: 'Active eq true',
              populateField: 'fld_vendor = vendorName, fld_agent = agentName',
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
          reference: 'Transaction',
          data: SAMPLE_SHIPPING_INFO,
          columns: [
            { key: 'pol', title: 'POL', width: '160px', sticky: 'left', frozen: true, sortable: true, editable: true, componentType: 'TextBox', order: 1 },
            { key: 'pod', title: 'POD', width: '180px', sortable: true, editable: true, componentType: 'TextBox', order: 2 },
            { key: 'etd', title: 'ETD', width: '110px', componentType: 'DatePicker', sortable: true, editable: true, order: 3 },
            { key: 'atd', title: 'ATD', width: '110px', componentType: 'DatePicker', sortable: true, editable: true, order: 4 },
            { key: 'eta', title: 'ETA', width: '110px', componentType: 'DatePicker', sortable: true, editable: true, order: 5 },
            { key: 'ata', title: 'ATA', width: '110px', componentType: 'DatePicker', sortable: true, editable: true, order: 6 },
            { key: 'vessel', title: 'VESSEL', width: '140px', sortable: true, editable: true, componentType: 'TextBox', order: 7 },
            { key: 'voy', title: 'VOY', width: '100px', sortable: true, editable: true, componentType: 'TextBox', order: 8 },
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
          reference: 'Container',
          data: SAMPLE_CONTAINERS,
          columns: [
            { key: 'containerNo', title: 'CONTAINER NO', width: '160px', sticky: 'left', frozen: true, sortable: true, editable: true, order: 1 },
            { key: 'size', title: 'SIZE', width: '80px', align: 'center', sortable: true, order: 2 },
            { key: 'sealNo', title: 'SEAL NO', width: '140px', sortable: true, editable: true, order: 3 },
            { key: 'packageNumber', title: 'PACKAGE NUMBER', width: '140px', align: 'right', aggregate: 'sum', summarySuffix: ' PALLETS', sortable: true, editable: true, order: 4 },
            { key: 'packageType', title: 'PACKAGE TYPE', width: '130px', align: 'center', componentType: 'Select', order: 5 },
            { key: 'gw', title: 'GW (KGS)', width: '120px', align: 'right', aggregate: 'sum', precision: 0, sortable: true, order: 6 },
            { key: 'cbm', title: 'CBM', width: '110px', align: 'right', aggregate: 'sum', precision: 2, summarySuffix: ' CBM', sortable: true, editable: true, order: 7 },
            { key: 'vgm', title: 'VGM', width: '100px', align: 'right', aggregate: 'sum', precision: 0, summarySuffix: ' VGM', order: 8 },
            { key: 'description', title: 'DESCRIPTION OF GOODS', width: '280px', editable: true, order: 9 },
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
          reference: 'ShipmentDetail',
          data: SAMPLE_SHIPMENT_DETAILS,
          columns: [
            { key: 'hblNo', title: 'HBL NO', width: '160px', sticky: 'left', frozen: true, sortable: true, editable: true, order: 1 },
            { key: 'custom', title: 'CUSTOM', width: '90px', align: 'center', componentType: 'Checkbox', order: 2 },
            { key: 'trucking', title: 'TRUCKING', width: '90px', align: 'center', componentType: 'Checkbox', order: 3 },
            { key: 'customer', title: 'CUSTOMER', width: '220px', sortable: true, editable: true, order: 4 },
            { key: 'salesman', title: 'SALESMAN', width: '140px', sortable: true, order: 5 },
            { key: 'salesSupport', title: 'SALES SUPPORT', width: '140px', order: 6 },
            { key: 'handleGroup', title: 'HANDLE GROUP', width: '130px', order: 7 },
            { key: 'documentNo', title: 'DOCUMENT NO', width: '140px', order: 8 },
            { key: 'shipmentType', title: 'SHIPMENT TYPE', width: '130px', componentType: 'Select', order: 9 },
            { key: 'doNo', title: 'D/O NO', width: '130px', order: 10 },
            { key: 'referenceNo', title: 'REFERENCE NO', width: '130px', order: 11 },
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
    children: [
      {
        id: 'grid_attachment_files',
        type: 'FileUploadGrid',
        props: {
          label: 'Hồ Sơ & Chứng Từ Đính Kèm (FileUploadGrid)',
          colSpan: 12,
          maxSizeMB: 25,
        },
        style: { width: '100%' },
      },
    ],
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
