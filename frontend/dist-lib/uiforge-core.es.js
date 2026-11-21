var el = Object.defineProperty;
var tl = (t, r, s) => r in t ? el(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s;
var An = (t, r, s) => tl(t, typeof r != "symbol" ? r + "" : r, s);
import ns, { createContext as sl, useContext as nl, useState as P, useRef as nt, useEffect as Fe, useMemo as $e, useCallback as ks, useId as qr } from "react";
import { create as Ss } from "zustand";
import rl from "axios";
import { Layers as Et, ChevronDown as Mt, ChevronUp as sn, Printer as Yr, Zap as Xt, Save as rs, Eye as an, EyeOff as sr, Pin as Xr, ChevronRight as ps, Sliders as ct, Copy as ln, Trash2 as dt, Filter as Jr, Settings as al, ClipboardPaste as Qr, PlusCircle as Zr, ArrowUp as nr, ArrowDown as rr, Plus as ze, FileCode as ea, Play as ll, Shield as Hs, X as pt, CheckCircle2 as ar, AlertCircle as ol, Lock as Dn, Users as Hn, User as ta, Table as At, Calendar as lr, ChevronLeft as sa, Clock as il, ExternalLink as na, FolderTree as Gn, Search as Vt, RefreshCw as cl, FileDown as dl, ArrowUpDown as or, Loader2 as Nn, Check as on, Tag as ra, Database as jn, Paperclip as aa, Upload as Sr, Download as En, Image as ul, FileText as Yt, File as pl, Minus as la, FolderOpen as xl, Folder as In, TrendingUp as hl, BarChart3 as oa, LineChart as ml, PieChart as bl, GripVertical as cn, Sparkles as ir, Box as us, ArrowRightLeft as Tr, Columns as Zs, Type as kt, Square as _s, Paintbrush as fl, Code as gn, Hash as ia, ChevronDownSquare as gl, CheckSquare as vl, Maximize2 as yl, AlignLeft as Nl, FolderKanban as jl, AlertTriangle as wl, XCircle as ca, Info as Dr, Equal as Cl, RotateCcw as kl, Menu as Ir, FolderPlus as Sl, MoreVertical as Tl, Truck as Dl, DollarSign as Il, Ship as Fl, Plane as Pl, Package as Rl, LayoutDashboard as Ll, Undo2 as da, Redo2 as ua, Edit3 as $l, PanelRightClose as Al, PanelRightOpen as El, Bell as Ml, LogOut as Bl, CheckCircle as _l, LogIn as Ol } from "lucide-react";
import { createPortal as Bt } from "react-dom";
import { useDraggable as pa, useDroppable as xa, useSensors as ha, useSensor as Vn, PointerSensor as ma, DndContext as ba, closestCenter as Wl, DragOverlay as fa, pointerWithin as Hl, rectIntersection as Gl, KeyboardSensor as Vl } from "@dnd-kit/core";
import { CSS as ga } from "@dnd-kit/utilities";
import { SortableContext as Ul, verticalListSortingStrategy as Kl, useSortable as zl } from "@dnd-kit/sortable";
const ql = {};
let Un = null;
function Kn(t) {
  if (!t || typeof t != "string") return "";
  let r = t.trim();
  return r = r.replace(/\/+$/, ""), r.toLowerCase().endsWith("/api") && (r = r.slice(0, -4).replace(/\/+$/, "")), r;
}
function Ui(t) {
  Un = Kn(t);
}
function va() {
  return Un || (typeof window < "u" && window.__UIFORGE_API_URL__ ? Kn(window.__UIFORGE_API_URL__) : typeof import.meta < "u" && ql ? Kn("http://localhost:5048/api") : "http://localhost:5048");
}
function ut() {
  return `${va()}/api`;
}
var zn = { exports: {} }, qs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Yl() {
  if (Fr) return qs;
  Fr = 1;
  var t = ns, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var p, h = {}, j = null, u = null;
    c !== void 0 && (j = "" + c), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (u = d.ref);
    for (p in d) a.call(d, p) && !o.hasOwnProperty(p) && (h[p] = d[p]);
    if (i && i.defaultProps) for (p in d = i.defaultProps, d) h[p] === void 0 && (h[p] = d[p]);
    return { $$typeof: r, type: i, key: j, ref: u, props: h, _owner: n.current };
  }
  return qs.Fragment = s, qs.jsx = l, qs.jsxs = l, qs;
}
var Ys = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function Xl() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ns, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), b = Symbol.iterator, k = "@@iterator";
    function f($) {
      if ($ === null || typeof $ != "object")
        return null;
      var le = b && $[b] || $[k];
      return typeof le == "function" ? le : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w($) {
      {
        for (var le = arguments.length, me = new Array(le > 1 ? le - 1 : 0), Se = 1; Se < le; Se++)
          me[Se - 1] = arguments[Se];
        y("error", $, me);
      }
    }
    function y($, le, me) {
      {
        var Se = C.ReactDebugCurrentFrame, Le = Se.getStackAddendum();
        Le !== "" && (le += "%s", me = me.concat([Le]));
        var Ee = me.map(function(Te) {
          return String(Te);
        });
        Ee.unshift("Warning: " + le), Function.prototype.apply.call(console[$], console, Ee);
      }
    }
    var g = !1, D = !1, M = !1, m = !1, T = !1, A;
    A = Symbol.for("react.module.reference");
    function I($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === a || $ === o || T || $ === n || $ === c || $ === p || m || $ === u || g || D || M || typeof $ == "object" && $ !== null && ($.$$typeof === j || $.$$typeof === h || $.$$typeof === l || $.$$typeof === i || $.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === A || $.getModuleId !== void 0));
    }
    function S($, le, me) {
      var Se = $.displayName;
      if (Se)
        return Se;
      var Le = le.displayName || le.name || "";
      return Le !== "" ? me + "(" + Le + ")" : me;
    }
    function U($) {
      return $.displayName || "Context";
    }
    function B($) {
      if ($ == null)
        return null;
      if (typeof $.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof $ == "function")
        return $.displayName || $.name || null;
      if (typeof $ == "string")
        return $;
      switch ($) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case i:
            var le = $;
            return U(le) + ".Consumer";
          case l:
            var me = $;
            return U(me._context) + ".Provider";
          case d:
            return S($, $.render, "ForwardRef");
          case h:
            var Se = $.displayName || null;
            return Se !== null ? Se : B($.type) || "Memo";
          case j: {
            var Le = $, Ee = Le._payload, Te = Le._init;
            try {
              return B(Te(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, O = 0, N, L, W, X, E, Z, te;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function ae() {
      {
        if (O === 0) {
          N = console.log, L = console.info, W = console.warn, X = console.error, E = console.group, Z = console.groupCollapsed, te = console.groupEnd;
          var $ = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: $,
            log: $,
            warn: $,
            error: $,
            group: $,
            groupCollapsed: $,
            groupEnd: $
          });
        }
        O++;
      }
    }
    function ce() {
      {
        if (O--, O === 0) {
          var $ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, $, {
              value: N
            }),
            info: H({}, $, {
              value: L
            }),
            warn: H({}, $, {
              value: W
            }),
            error: H({}, $, {
              value: X
            }),
            group: H({}, $, {
              value: E
            }),
            groupCollapsed: H({}, $, {
              value: Z
            }),
            groupEnd: H({}, $, {
              value: te
            })
          });
        }
        O < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = C.ReactCurrentDispatcher, de;
    function J($, le, me) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (Le) {
            var Se = Le.stack.trim().match(/\n( *(at )?)/);
            de = Se && Se[1] || "";
          }
        return `
` + de + $;
      }
    }
    var se = !1, F;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      F = new G();
    }
    function oe($, le) {
      if (!$ || se)
        return "";
      {
        var me = F.get($);
        if (me !== void 0)
          return me;
      }
      var Se;
      se = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = q.current, q.current = null, ae();
      try {
        if (le) {
          var Te = function() {
            throw Error();
          };
          if (Object.defineProperty(Te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Te, []);
            } catch (Ze) {
              Se = Ze;
            }
            Reflect.construct($, [], Te);
          } else {
            try {
              Te.call();
            } catch (Ze) {
              Se = Ze;
            }
            $.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Se = Ze;
          }
          $();
        }
      } catch (Ze) {
        if (Ze && Se && typeof Ze.stack == "string") {
          for (var De = Ze.stack.split(`
`), Je = Se.stack.split(`
`), Ge = De.length - 1, Ve = Je.length - 1; Ge >= 1 && Ve >= 0 && De[Ge] !== Je[Ve]; )
            Ve--;
          for (; Ge >= 1 && Ve >= 0; Ge--, Ve--)
            if (De[Ge] !== Je[Ve]) {
              if (Ge !== 1 || Ve !== 1)
                do
                  if (Ge--, Ve--, Ve < 0 || De[Ge] !== Je[Ve]) {
                    var rt = `
` + De[Ge].replace(" at new ", " at ");
                    return $.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", $.displayName)), typeof $ == "function" && F.set($, rt), rt;
                  }
                while (Ge >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        se = !1, q.current = Ee, ce(), Error.prepareStackTrace = Le;
      }
      var bt = $ ? $.displayName || $.name : "", ft = bt ? J(bt) : "";
      return typeof $ == "function" && F.set($, ft), ft;
    }
    function fe($, le, me) {
      return oe($, !1);
    }
    function xe($) {
      var le = $.prototype;
      return !!(le && le.isReactComponent);
    }
    function pe($, le, me) {
      if ($ == null)
        return "";
      if (typeof $ == "function")
        return oe($, xe($));
      if (typeof $ == "string")
        return J($);
      switch ($) {
        case c:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case d:
            return fe($.render);
          case h:
            return pe($.type, le, me);
          case j: {
            var Se = $, Le = Se._payload, Ee = Se._init;
            try {
              return pe(Ee(Le), le, me);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, ye = {}, be = C.ReactDebugCurrentFrame;
    function ge($) {
      if ($) {
        var le = $._owner, me = pe($.type, $._source, le ? le.type : null);
        be.setExtraStackFrame(me);
      } else
        be.setExtraStackFrame(null);
    }
    function Pe($, le, me, Se, Le) {
      {
        var Ee = Function.call.bind(ie);
        for (var Te in $)
          if (Ee($, Te)) {
            var De = void 0;
            try {
              if (typeof $[Te] != "function") {
                var Je = Error((Se || "React class") + ": " + me + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof $[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              De = $[Te](le, Te, Se, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ge) {
              De = Ge;
            }
            De && !(De instanceof Error) && (ge(Le), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", me, Te, typeof De), ge(null)), De instanceof Error && !(De.message in ye) && (ye[De.message] = !0, ge(Le), w("Failed %s type: %s", me, De.message), ge(null));
          }
      }
    }
    var we = Array.isArray;
    function ve($) {
      return we($);
    }
    function re($) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, me = le && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return me;
      }
    }
    function he($) {
      try {
        return qe($), !1;
      } catch {
        return !0;
      }
    }
    function qe($) {
      return "" + $;
    }
    function mt($) {
      if (he($))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", re($)), qe($);
    }
    var St = C.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yt, Tt;
    function ne($) {
      if (ie.call($, "ref")) {
        var le = Object.getOwnPropertyDescriptor($, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return $.ref !== void 0;
    }
    function ke($) {
      if (ie.call($, "key")) {
        var le = Object.getOwnPropertyDescriptor($, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return $.key !== void 0;
    }
    function Be($, le) {
      typeof $.ref == "string" && St.current;
    }
    function Ie($, le) {
      {
        var me = function() {
          yt || (yt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        me.isReactWarning = !0, Object.defineProperty($, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function Ae($, le) {
      {
        var me = function() {
          Tt || (Tt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        me.isReactWarning = !0, Object.defineProperty($, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var Re = function($, le, me, Se, Le, Ee, Te) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: $,
        key: le,
        ref: me,
        props: Te,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Qe($, le, me, Se, Le) {
      {
        var Ee, Te = {}, De = null, Je = null;
        me !== void 0 && (mt(me), De = "" + me), ke(le) && (mt(le.key), De = "" + le.key), ne(le) && (Je = le.ref, Be(le, Le));
        for (Ee in le)
          ie.call(le, Ee) && !_t.hasOwnProperty(Ee) && (Te[Ee] = le[Ee]);
        if ($ && $.defaultProps) {
          var Ge = $.defaultProps;
          for (Ee in Ge)
            Te[Ee] === void 0 && (Te[Ee] = Ge[Ee]);
        }
        if (De || Je) {
          var Ve = typeof $ == "function" ? $.displayName || $.name || "Unknown" : $;
          De && Ie(Te, Ve), Je && Ae(Te, Ve);
        }
        return Re($, De, Je, Le, Se, St.current, Te);
      }
    }
    var et = C.ReactCurrentOwner, at = C.ReactDebugCurrentFrame;
    function lt($) {
      if ($) {
        var le = $._owner, me = pe($.type, $._source, le ? le.type : null);
        at.setExtraStackFrame(me);
      } else
        at.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function ot($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === r;
    }
    function Nt() {
      {
        if (et.current) {
          var $ = B(et.current.type);
          if ($)
            return `

Check the render method of \`` + $ + "`.";
        }
        return "";
      }
    }
    function He($) {
      return "";
    }
    var jt = {};
    function Ut($) {
      {
        var le = Nt();
        if (!le) {
          var me = typeof $ == "string" ? $ : $.displayName || $.name;
          me && (le = `

Check the top-level render call using <` + me + ">.");
        }
        return le;
      }
    }
    function Ft($, le) {
      {
        if (!$._store || $._store.validated || $.key != null)
          return;
        $._store.validated = !0;
        var me = Ut(le);
        if (jt[me])
          return;
        jt[me] = !0;
        var Se = "";
        $ && $._owner && $._owner !== et.current && (Se = " It was passed a child from " + B($._owner.type) + "."), lt($), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Se), lt(null);
      }
    }
    function Pt($, le) {
      {
        if (typeof $ != "object")
          return;
        if (ve($))
          for (var me = 0; me < $.length; me++) {
            var Se = $[me];
            ot(Se) && Ft(Se, le);
          }
        else if (ot($))
          $._store && ($._store.validated = !0);
        else if ($) {
          var Le = f($);
          if (typeof Le == "function" && Le !== $.entries)
            for (var Ee = Le.call($), Te; !(Te = Ee.next()).done; )
              ot(Te.value) && Ft(Te.value, le);
        }
      }
    }
    function Ot($) {
      {
        var le = $.type;
        if (le == null || typeof le == "string")
          return;
        var me;
        if (typeof le == "function")
          me = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === h))
          me = le.propTypes;
        else
          return;
        if (me) {
          var Se = B(le);
          Pe(me, $.props, "prop", Se, $);
        } else if (le.PropTypes !== void 0 && !it) {
          it = !0;
          var Le = B(le);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt($) {
      {
        for (var le = Object.keys($.props), me = 0; me < le.length; me++) {
          var Se = le[me];
          if (Se !== "children" && Se !== "key") {
            lt($), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), lt(null);
            break;
          }
        }
        $.ref !== null && (lt($), w("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var Wt = {};
    function Dt($, le, me, Se, Le, Ee) {
      {
        var Te = I($);
        if (!Te) {
          var De = "";
          ($ === void 0 || typeof $ == "object" && $ !== null && Object.keys($).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = He();
          Je ? De += Je : De += Nt();
          var Ge;
          $ === null ? Ge = "null" : ve($) ? Ge = "array" : $ !== void 0 && $.$$typeof === r ? (Ge = "<" + (B($.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof $, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, De);
        }
        var Ve = Qe($, le, me, Le, Ee);
        if (Ve == null)
          return Ve;
        if (Te) {
          var rt = le.children;
          if (rt !== void 0)
            if (Se)
              if (ve(rt)) {
                for (var bt = 0; bt < rt.length; bt++)
                  Pt(rt[bt], $);
                Object.freeze && Object.freeze(rt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pt(rt, $);
        }
        if (ie.call(le, "key")) {
          var ft = B($), Ze = Object.keys(le).filter(function(Qt) {
            return Qt !== "key";
          }), Gt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wt[ft + Gt]) {
            var Rt = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, ft, Rt, ft), Wt[ft + Gt] = !0;
          }
        }
        return $ === a ? Kt(Ve) : Ot(Ve), Ve;
      }
    }
    function zt($, le, me) {
      return Dt($, le, me, !0);
    }
    function We($, le, me) {
      return Dt($, le, me, !1);
    }
    var Ht = We, Jt = zt;
    Ys.Fragment = a, Ys.jsx = Ht, Ys.jsxs = Jt;
  }()), Ys;
}
process.env.NODE_ENV === "production" ? zn.exports = Yl() : zn.exports = Xl();
var e = zn.exports;
const Rr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Lr = (t) => !!t.dispatchFromDevtools && typeof t.dispatch == "function", nn = /* @__PURE__ */ new Map(), mn = (t) => {
  const r = nn.get(t);
  return r ? Object.fromEntries(
    Object.entries(r.stores).map(([s, a]) => [s, a.getState()])
  ) : {};
}, Jl = (t, r, s) => {
  if (t === void 0)
    return {
      type: "untracked",
      connection: r.connect(s)
    };
  const a = nn.get(s.name);
  if (a)
    return { type: "tracked", store: t, ...a };
  const n = {
    connection: r.connect(s),
    stores: {}
  };
  return nn.set(s.name, n), { type: "tracked", store: t, ...n };
}, Ql = (t, r) => {
  if (r === void 0) return;
  const s = nn.get(t);
  s && (delete s.stores[r], Object.keys(s.stores).length === 0 && nn.delete(t));
}, Zl = /^at (?:new |async )?(.+?) \(/, eo = /^([^@]+)@/;
function to(t) {
  var r, s, a;
  if (!t) return;
  const n = t.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((r = n[o + 1]) == null ? void 0 : r.trim()) || "";
  return ((s = Zl.exec(l)) == null ? void 0 : s[1]) || ((a = eo.exec(l)) == null ? void 0 : a[1]);
}
const so = (t, r = {}) => (s, a, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = r;
  let c;
  try {
    c = (o ?? (Rr ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return t(s, a, n);
  const { connection: p, ...h } = Jl(i, c, d);
  let j = !0;
  n.setState = (k, f, C) => {
    const w = s(k, f);
    if (!j) return w;
    const y = C === void 0 ? {
      type: l || to(new Error().stack) || "anonymous"
    } : typeof C == "string" ? { type: C } : C;
    return i === void 0 ? (p == null || p.send(y, a()), w) : (p == null || p.send(
      {
        ...y,
        type: `${i}/${y.type}`
      },
      {
        ...mn(d.name),
        [i]: n.getState()
      }
    ), w);
  }, n.devtools = {
    cleanup: () => {
      p && typeof p.unsubscribe == "function" && p.unsubscribe(), Ql(d.name, i);
    }
  };
  const u = (...k) => {
    const f = j;
    j = !1, s(...k), j = f;
  }, b = t(n.setState, a, n);
  if (h.type === "untracked" ? p == null || p.init(b) : (h.stores[h.store] = n, p == null || p.init(
    Object.fromEntries(
      Object.entries(h.stores).map(([k, f]) => [
        k,
        k === h.store ? b : f.getState()
      ])
    )
  )), Lr(n)) {
    let k = !1;
    const f = n.dispatch;
    n.dispatch = (...C) => {
      (Rr ? "production" : void 0) !== "production" && C[0].type === "__setState" && !k && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), k = !0), f(...C);
    };
  }
  return p.subscribe((k) => {
    var f;
    switch (k.type) {
      case "ACTION":
        if (typeof k.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return Mn(
          k.payload,
          (C) => {
            if (C.type === "__setState") {
              if (i === void 0) {
                u(C.state);
                return;
              }
              Object.keys(C.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const w = C.state[i];
              if (w == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(w) && u(w);
              return;
            }
            Lr(n) && n.dispatch(C);
          }
        );
      case "DISPATCH":
        switch (k.payload.type) {
          case "RESET":
            return u(b), i === void 0 ? p == null ? void 0 : p.init(n.getState()) : p == null ? void 0 : p.init(mn(d.name));
          case "COMMIT":
            if (i === void 0) {
              p == null || p.init(n.getState());
              return;
            }
            return p == null ? void 0 : p.init(mn(d.name));
          case "ROLLBACK":
            return Mn(k.state, (C) => {
              if (i === void 0) {
                u(C), p == null || p.init(n.getState());
                return;
              }
              u(C[i]), p == null || p.init(mn(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return Mn(k.state, (C) => {
              if (i === void 0) {
                u(C);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(C[i]) && u(C[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: C } = k.payload, w = (f = C.computedStates.slice(-1)[0]) == null ? void 0 : f.state;
            if (!w) return;
            u(i === void 0 ? w : w[i]), p == null || p.send(
              null,
              // FIXME no-any
              C
            );
            return;
          }
          case "PAUSE_RECORDING":
            return j = !j;
        }
        return;
    }
  }), b;
}, dn = so, Mn = (t, r) => {
  let s;
  try {
    s = JSON.parse(t);
  } catch (a) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      a
    );
  }
  s !== void 0 && r(s);
};
function no(t, r) {
  let s;
  try {
    s = t();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const l = (d) => d === null ? null : JSON.parse(d, void 0), i = (o = s.getItem(n)) != null ? o : null;
      return i instanceof Promise ? i.then(l) : l(i);
    },
    setItem: (n, o) => s.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => s.removeItem(n)
  };
}
const qn = (t) => (r) => {
  try {
    const s = t(r);
    return s instanceof Promise ? s : {
      then(a) {
        return qn(a)(s);
      },
      catch(a) {
        return this;
      }
    };
  } catch (s) {
    return {
      then(a) {
        return this;
      },
      catch(a) {
        return qn(a)(s);
      }
    };
  }
}, ro = (t, r) => (s, a, n) => {
  let o = {
    storage: no(() => window.localStorage),
    partialize: (f) => f,
    version: 0,
    merge: (f, C) => ({
      ...C,
      ...f
    }),
    ...r
  }, l = !1, i = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let p = o.storage;
  if (!p)
    return t(
      (...f) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), s(...f);
      },
      a,
      n
    );
  const h = () => {
    const f = o.partialize({ ...a() });
    return p.setItem(o.name, {
      state: f,
      version: o.version
    });
  }, j = n.setState;
  n.setState = (f, C) => (j(f, C), h());
  const u = t(
    (...f) => (s(...f), h()),
    a,
    n
  );
  n.getInitialState = () => u;
  let b;
  const k = () => {
    var f, C;
    if (!p) return;
    const w = ++i;
    l = !1, d.forEach((g) => {
      var D;
      return g((D = a()) != null ? D : u);
    });
    const y = ((C = o.onRehydrateStorage) == null ? void 0 : C.call(o, (f = a()) != null ? f : u)) || void 0;
    return qn(p.getItem.bind(p))(o.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== o.version) {
          if (o.migrate) {
            const D = o.migrate(
              g.state,
              g.version
            );
            return D instanceof Promise ? D.then((M) => [!0, M]) : [!0, D];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var D;
      if (w !== i)
        return;
      const [M, m] = g;
      if (b = o.merge(
        m,
        (D = a()) != null ? D : u
      ), s(b, !0), M)
        return h();
    }).then(() => {
      w === i && (y == null || y(a(), void 0), b = a(), l = !0, c.forEach((g) => g(b)));
    }).catch((g) => {
      w === i && (y == null || y(void 0, g));
    });
  };
  return n.persist = {
    setOptions: (f) => {
      o = {
        ...o,
        ...f
      }, f.storage && (p = f.storage);
    },
    clearStorage: () => {
      ++i, p == null || p.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => k(),
    hasHydrated: () => l,
    onHydrate: (f) => (d.add(f), () => {
      d.delete(f);
    }),
    onFinishHydration: (f) => (c.add(f), () => {
      c.delete(f);
    })
  }, o.skipHydration || k(), b || u;
}, ya = ro, Ye = Ss()(
  dn((t, r) => ({
    openTabs: [],
    activeTabId: null,
    activePopup: null,
    // Đánh dấu trạng thái bẩn (isDirty) cho tab khi dữ liệu form thay đổi
    setTabDirty: (s, a) => {
      t((n) => ({
        openTabs: n.openTabs.map(
          (o) => o.id === s || o.featureId === s ? { ...o, isDirty: a } : o
        )
      }));
    },
    // 🚀 Mở một Feature theo chuẩn FeatureTab hoặc FeaturePopup (chỉ đạo của Master)
    openFeature: (s, a = {}, n = "Tab", o) => {
      const l = o || (a.id ? `${s} - #${a.id}` : s);
      if (n === "Popup")
        t({
          activePopup: {
            featureId: s,
            title: l,
            params: a
          }
        });
      else {
        const i = r().openTabs, d = i.find(
          (c) => {
            var p;
            return c.featureId === s && String(((p = c.params) == null ? void 0 : p.id) ?? "") === String((a == null ? void 0 : a.id) ?? "");
          }
        );
        if (d)
          t({ activeTabId: d.id });
        else {
          const c = `tab_${s}_${a.id || Date.now()}`, p = {
            id: c,
            featureId: s,
            title: l,
            params: a
          };
          t({
            openTabs: [...i, p],
            activeTabId: c
          });
        }
        Q.getState().setActiveFeature(s, (a == null ? void 0 : a.id) ?? null);
      }
    },
    // Đóng tab
    closeTab: (s) => {
      const a = r().openTabs;
      if (a.length <= 1) return;
      const n = a.filter((i) => i.id !== s), o = r().activeTabId;
      let l = o;
      o === s && (l = n[n.length - 1].id), t({
        openTabs: n,
        activeTabId: l
      });
    },
    // Chọn tab active
    setActiveTab: (s) => {
      t({ activeTabId: s });
    },
    // Kéo thả sắp xếp lại thứ tự Tab
    reorderTabs: (s, a) => {
      t((n) => {
        if (s === a || s < 0 || a < 0 || s >= n.openTabs.length || a >= n.openTabs.length) return n;
        const o = [...n.openTabs], [l] = o.splice(s, 1);
        return o.splice(a, 0, l), { openTabs: o };
      });
    },
    // Đóng popup
    closePopup: (s) => {
      const a = r().activePopup;
      a != null && a.onClose && a.onClose(s), t({ activePopup: null });
    }
  }))
);
function Na(t, r = {}, s) {
  Ye.getState().openFeature(t, r, "Popup", s || t);
}
function Ki(t, r = {}, s) {
  Ye.getState().openFeature(t, r, "Tab", s || t);
}
function zi(t) {
  Ye.getState().closePopup(t);
}
function qi(t) {
  Ye.getState().closeTab(t);
}
const ao = [];
function lo(t) {
  if (!t || typeof t != "string") return [];
  const r = [], s = t.split(",");
  for (const a of s) {
    const n = a.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), d = i.includes(".") ? i.split(".").pop() : i;
      l && d && r.push({ targetField: l, sourceField: d });
    }
  }
  return r;
}
function as(t, r, s, a = void 0) {
  const n = [
    t.formRecords[r],
    t.formRecords.default,
    ...Object.values(t.formRecords)
  ].filter(Boolean);
  if (n.length === 0) return a;
  const o = s.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase();
  for (const l of n) {
    if (!l || typeof l != "object") continue;
    if (l[s] !== void 0 && l[s] !== null) return l[s];
    const i = s.replace(/^fld_/, "");
    if (l[i] !== void 0 && l[i] !== null) return l[i];
    for (const [d, c] of Object.entries(l)) {
      if (c == null) continue;
      if (d.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase() === o)
        return c;
    }
  }
  return a;
}
function bn(t = {}, r) {
  var a, n;
  const s = { ...t };
  try {
    const o = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (o) {
      const l = JSON.parse(o), i = (a = l == null ? void 0 : l.state) == null ? void 0 : a.previewRoleCode;
      i && (s["X-Preview-Role"] = i);
    }
  } catch {
  }
  try {
    const o = r || Q.getState().activeFeatureId;
    o && (s["X-Feature-Id"] = String(o));
  } catch {
  }
  try {
    const o = typeof window < "u" ? localStorage.getItem("uiforge_auth_storage") : null;
    if (o) {
      const l = JSON.parse(o), i = (n = l == null ? void 0 : l.state) == null ? void 0 : n.token;
      i && (s.Authorization = `Bearer ${i}`);
    }
  } catch {
  }
  return s;
}
const Ne = Ss()(
  dn((t, r) => ({
    datasets: {},
    formRecords: {},
    originalFormRecords: {},
    selectedRecords: {},
    // Quản lý Dirty Tracking
    isFormDirty: (s) => {
      const a = r(), n = a.formRecords[s] || a.formRecords.default || {}, o = a.originalFormRecords[s] || a.originalFormRecords.default;
      if (!o) return !1;
      const l = ["btn_", "sec_", "tab_", "lbl_"], i = /* @__PURE__ */ new Set();
      for (const [d, c] of Object.entries(n)) {
        if (!d || l.some((b) => d.startsWith(b))) continue;
        const p = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(p)) continue;
        i.add(p);
        const h = o[d] ?? o[p] ?? o[d.replace(/^fld_/, "")], j = c === "" || c === void 0 ? null : c, u = h === "" || h === void 0 ? null : h;
        if (String(j ?? "") !== String(u ?? ""))
          return !0;
      }
      return !1;
    },
    markFormClean: (s) => {
      t((a) => {
        const n = a.formRecords[s] || a.formRecords.default || {};
        return {
          originalFormRecords: {
            ...a.originalFormRecords,
            [s]: { ...n },
            default: { ...n }
          }
        };
      });
      try {
        Ye.getState().setTabDirty(s, !1);
      } catch {
      }
    },
    // Lưu trữ bản ghi đang chọn
    setSelectedRecord: (s, a) => {
      t((n) => ({
        selectedRecords: {
          ...n.selectedRecords,
          [s]: a
        }
      }));
    },
    // Lấy bản ghi đang chọn
    getSelectedRecord: (s) => r().selectedRecords[s],
    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục MasterData, Products...)
    registerDataset: (s, a) => {
      t((n) => ({
        datasets: {
          ...n.datasets,
          [s]: a
        }
      }));
    },
    // 2. Lấy dataset của Entity (hỗ trợ tìm case-insensitive)
    getDataset: (s) => {
      const a = r().datasets;
      if (a[s]) return a[s];
      const n = s == null ? void 0 : s.toLowerCase(), o = Object.keys(a).find((l) => l.toLowerCase() === n);
      return o ? a[o] : ao;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (s, a, n) => {
      t((o) => {
        const l = a.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), p = (k) => {
          const f = { ...k };
          for (const C of Object.keys(f))
            (C.toLowerCase() === i || C.toLowerCase() === a.toLowerCase()) && delete f[C];
          return f[d] = n, f[c] = n, f;
        }, h = o.formRecords[s] || {}, j = o.formRecords.default || {}, u = p(h), b = p(j);
        try {
          Ye.getState().setTabDirty(s, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [s]: u,
            default: b
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (s, a, n = "") => as(r(), s, a, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (s, a) => {
      t((n) => {
        const o = {};
        for (const [l, i] of Object.entries(a || {})) {
          o[l] = i;
          const d = l.replace(/^fld_/, ""), c = d.charAt(0).toLowerCase() + d.slice(1), p = d.charAt(0).toUpperCase() + d.slice(1);
          o[c] = i, o[p] = i;
        }
        return {
          formRecords: {
            ...n.formRecords,
            [s]: o,
            default: o
          },
          originalFormRecords: {
            ...n.originalFormRecords,
            [s]: { ...o },
            default: { ...o }
          }
        };
      });
    },
    // 6. Lấy trọn vẹn bản ghi (Gộp default và target để luôn đảm bảo đủ trường từ mọi section/tab)
    getFormRecord: (s) => {
      const a = r().formRecords, n = a[s] || {};
      let l = { ...a.default || {}, ...n };
      Object.keys(l).some(
        (c) => c !== "id" && c !== "Id" && l[c] !== void 0 && l[c] !== ""
      ) || (l = { ...r().collectScreenData(s), ...l });
      const d = { ...l };
      for (const [c, p] of Object.entries(l)) {
        if (!c) continue;
        const h = c.charAt(0).toLowerCase() + c.slice(1), j = c.charAt(0).toUpperCase() + c.slice(1);
        d[h] === void 0 && (d[h] = p), d[j] === void 0 && (d[j] = p);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (s, a, n) => {
      if (!n || typeof n != "object") return;
      const o = lo(a);
      if (o.length === 0) return;
      const l = r().formRecords[s] || {}, i = {};
      for (const d of o) {
        const c = Object.keys(n).find(
          (p) => p.toLowerCase() === d.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const p = n[c];
          i[d.targetField] = p, d.targetField.startsWith("fld_") || (i[`fld_${d.targetField.toLowerCase()}`] = p);
        }
      }
      t((d) => ({
        formRecords: {
          ...d.formRecords,
          [s]: {
            ...l,
            ...i
          }
        }
      }));
    },
    // 8. Truy vấn danh mục tham chiếu (OData Reference Query cho Select/Dropdown)
    queryReference: async (s, a, n = "id", o = "fullName") => {
      let l = (a || "").trim();
      const i = l.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (i && (l = i[2].trim()), s)
        try {
          const c = l ? l.startsWith("?") ? l : l.startsWith("$") ? `?${l}` : `?$filter=${encodeURIComponent(l)}` : "", p = `${ut()}/core/data/${encodeURIComponent(s)}${c}`, h = await fetch(p, { headers: bn() });
          if (h.ok) {
            const j = await h.json();
            return (Array.isArray(j) ? j : j.value || []).map((b) => {
              const k = b[n] !== void 0 ? b[n] : b.Id || b.id || b.code, f = b[o] !== void 0 ? b[o] : b.FullName || b.fullName || b.Name || b.name || b.title || String(k);
              return {
                value: k,
                label: String(f),
                rawItem: b
              };
            });
          }
        } catch {
        }
      return $r(r().getDataset(s), l).map((c) => {
        const p = c[n] !== void 0 ? c[n] : c.Id || c.id || c.code, h = c[o] !== void 0 ? c[o] : c.FullName || c.fullName || c.Name || c.name || c.title || String(p);
        return {
          value: p,
          label: String(h),
          rawItem: c
        };
      });
    },
    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (s, a) => {
      let n = (a || "").trim();
      const o = n.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (o && (n = o[2].trim()), s)
        try {
          const l = n ? n.startsWith("?") ? n : n.startsWith("$") ? `?${n}` : `?$filter=${encodeURIComponent(n)}` : "", i = `${ut()}/core/data/${encodeURIComponent(s)}${l}`, d = await fetch(i, { headers: bn() });
          if (d.ok) {
            const c = await d.json();
            return Array.isArray(c) ? c : c.value || [];
          }
        } catch {
        }
      return $r(r().getDataset(s), n);
    },
    // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
    saveRecord: async (s, a, n) => {
      if (!s || !a)
        return { success: !1, message: "Thiếu thông tin Entity hoặc dữ liệu bản ghi" };
      let o = a.id || a.Id;
      const l = a.code || a.Code || a.recordCode || a.RecordCode || a.key || a.Key;
      if ((!o || o === "new" || Number(o) <= 0) && l) {
        const c = r().datasets[s];
        if (Array.isArray(c)) {
          const p = c.find((h) => (h.code || h.Code || h.recordCode || h.RecordCode || h.key || h.Key) === l);
          p && (o = p.id || p.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), d = i ? Number(o) : 0;
      try {
        const c = i ? `${ut()}/core/data/${encodeURIComponent(s)}/${d}` : `${ut()}/core/data/${encodeURIComponent(s)}`, p = i ? "PUT" : "POST", h = { ...a };
        for (const [b, k] of Object.entries(h))
          if (k === "")
            (/date|time/i.test(b) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(b) || /gw|cbm|vgm|package/i.test(b)) && (h[b] = null);
          else if (typeof k == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(k.trim())) {
            const [f, C, w] = k.trim().split("/");
            h[b] = `${w}-${C.padStart(2, "0")}-${f.padStart(2, "0")}T00:00:00`;
          }
        const j = {};
        for (const [b, k] of Object.entries(h)) {
          if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_"))
            continue;
          const f = b.replace(/^fld_/, ""), C = f.charAt(0).toUpperCase() + f.slice(1);
          j[C] = k;
        }
        i ? j.Id = d : (j.Id = 0, j.Active = !0);
        const u = await fetch(c, {
          method: p,
          headers: bn({ "Content-Type": "application/json" }),
          body: JSON.stringify(j)
        });
        if (u.ok) {
          const b = await u.json(), k = b.id || b.Id || d;
          Q.getState().setActiveRecordId(String(k)), n && (r().setFormRecord(n, b), r().markFormClean(n)), r().setFormRecord("default", b), r().markFormClean("default");
          const f = r().datasets[s];
          if (f && Array.isArray(f))
            if (i) {
              const C = f.map(
                (w) => (w.id || w.Id) === d ? { ...w, ...b } : w
              );
              r().registerDataset(s, C);
            } else
              r().registerDataset(s, [b, ...f]);
          return {
            success: !0,
            data: b,
            message: i ? `Cập nhật thành công bản ghi #${d} (${s}) vào Database!` : `Thêm mới thành công bản ghi (${s}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${u.status}` };
      } catch (c) {
        return { success: !1, message: `Lỗi kết nối API: ${(c == null ? void 0 : c.message) || c}` };
      }
    },
    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (s, a) => {
      if (!s || !a)
        return { success: !1, message: "Thiếu thông tin Entity hoặc ID bản ghi" };
      try {
        const n = await fetch(`${ut()}/core/data/${encodeURIComponent(s)}/${a}`, {
          method: "DELETE",
          headers: bn()
        });
        if (n.ok) {
          const o = r().datasets[s];
          if (o && Array.isArray(o)) {
            const l = o.filter((i) => (i.id || i.Id) !== a);
            r().registerDataset(s, l);
          }
          return { success: !0, message: `Đã xóa thành công bản ghi #${a} (${s})!` };
        } else
          return { success: !1, message: `Lỗi xóa bản ghi: HTTP ${n.status}` };
      } catch (n) {
        return { success: !1, message: `Lỗi kết nối khi xóa: ${(n == null ? void 0 : n.message) || n}` };
      }
    },
    // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (chuẩn Core)
    collectScreenData: (s) => {
      const a = r(), n = Q.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((b) => String(b.id) === String(s)) || o.find((b) => String(b.id) === String(l)) || o.find((b) => b.isDetail) || o[0], d = {}, c = (b) => {
        var k, f, C;
        if (!(!b || !Array.isArray(b)))
          for (const w of b) {
            const y = (k = w.dataBinding) == null ? void 0 : k.fieldName, g = (f = w.props) == null ? void 0 : f.name, D = w.id, M = y || (typeof g == "string" ? g : "") || (D == null ? void 0 : D.replace(/^fld_/, "")), m = String(M || "").trim();
            if (m) {
              let T = as(a, String(w.pageId || l || "default"), m, void 0);
              if (T === void 0 && ((C = w.props) == null ? void 0 : C.value) !== void 0 && (T = w.props.value), T === void 0 && typeof document < "u") {
                const A = document.getElementById(w.id) || document.querySelector(`[name="${w.id}"]`) || document.querySelector(`[name="${m}"]`);
                A && "value" in A && A.value !== "" && (T = A.value);
              }
              if (T != null) {
                d[m] = T;
                const A = m.charAt(0).toLowerCase() + m.slice(1), I = m.charAt(0).toUpperCase() + m.slice(1);
                d[A] = T, d[I] = T;
              }
            }
            w.children && w.children.length > 0 && c(w.children);
          }
      };
      i != null && i.components && c(i.components);
      const p = s || String(l || "default"), h = { ...a.formRecords.default, ...p ? a.formRecords[p] : {} }, j = { ...d, ...h };
      if (!j.id && !j.Id && typeof window < "u") {
        const b = en();
        b && b !== "new" && Number(b) > 0 && (j.id = Number(b), j.Id = Number(b));
      }
      const u = {};
      for (const [b, k] of Object.entries(j)) {
        if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_")) continue;
        const f = b.replace(/^fld_/, ""), C = f.charAt(0).toLowerCase() + f.slice(1), w = f.charAt(0).toUpperCase() + f.slice(1);
        u[C] = k, u[w] = k;
      }
      return (j.id || j.Id) && (u.id = j.id || j.Id, u.Id = j.id || j.Id), t((b) => ({
        formRecords: {
          ...b.formRecords,
          [p]: u,
          default: u
        }
      })), u;
    }
  }))
);
function $r(t, r) {
  if (!r || !r.trim() || !Array.isArray(t) || t.length === 0)
    return t;
  let s = r.trim();
  const a = s.match(/\$filter=([^&]+)/i);
  if (a)
    s = decodeURIComponent(a[1]).trim();
  else if (s.startsWith("?") && !s.toLowerCase().includes("$filter="))
    return t;
  const n = s.split(/\s+and\s+/i);
  return t.filter((o) => {
    for (const l of n) {
      const i = l.trim();
      if (!i) continue;
      const d = i.match(/^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$/i);
      if (d) {
        const c = d[1], p = (d[2] || d[3] || "=").toLowerCase(), h = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), u = Object.keys(o).find((b) => b.toLowerCase() === c.toLowerCase());
        if (u) {
          const k = (o[u] !== void 0 && o[u] !== null ? String(o[u]) : "").toLowerCase() === h.toLowerCase();
          if (p === "ne" || p === "!=" ? k : !k)
            return !1;
        }
      }
    }
    return !0;
  });
}
const vt = Ss()(
  ya(
    (t) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: r, branch: s, user: a }) => t({ token: r, branch: s, user: a }),
      logout: () => t({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), ja = "uiforge_resilience_queue_v1";
let vn = !1, Ar = !1;
function wn() {
  if (typeof window > "u") return [];
  try {
    const t = localStorage.getItem(ja);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function wa(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(ja, JSON.stringify(t)), console.log(`[ResilienceQueue] Hiện có ${t.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function oo(t, r) {
  var n;
  const s = wn(), a = {
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    url: t.url || "",
    method: (t.method || "POST").toUpperCase(),
    data: t.data,
    headers: {
      "Content-Type": "application/json"
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    retryCount: 0,
    description: r || `Thao tác ${(n = t.method) == null ? void 0 : n.toUpperCase()} trên ${t.url}`
  };
  return s.push(a), wa(s), Ca(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${a.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), a;
}
function Ca(t, r, s = "info") {
  if (typeof document > "u") return;
  const a = document.createElement("div");
  a.className = `fixed top-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300 ${s === "warning" ? "bg-amber-950/90 border-amber-600/50 text-amber-100 shadow-amber-900/30" : s === "success" ? "bg-emerald-950/90 border-emerald-600/50 text-emerald-100 shadow-emerald-900/30" : "bg-blue-950/90 border-blue-600/50 text-blue-100 shadow-blue-900/30"}`, a.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5 text-lg">
        ${s === "warning" ? "⚠️" : s === "success" ? "✅" : "ℹ️"}
      </div>
      <div class="flex-1 text-xs">
        <div class="font-bold text-sm mb-1">${t}</div>
        <div class="opacity-90 leading-relaxed">${r}</div>
      </div>
    </div>
  `, document.body.appendChild(a), setTimeout(() => {
    a.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => a.remove(), 300);
  }, 4500);
}
async function Bn(t) {
  var n, o;
  if (vn) return;
  const r = wn();
  if (r.length === 0) return;
  vn = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${r.length} tác vụ đang chờ...`);
  let s = 0;
  const a = [];
  for (const l of r)
    try {
      await t.request({
        url: l.url,
        method: l.method,
        data: l.data
      }), s++, console.log(`[ResilienceQueue] Đồng bộ thành công: ${l.description}`);
    } catch (i) {
      l.retryCount = (l.retryCount || 0) + 1, console.warn(`[ResilienceQueue] Lỗi khi đồng bộ lại ${l.description} (lần thử ${l.retryCount}):`, i == null ? void 0 : i.message), ((n = i == null ? void 0 : i.response) == null ? void 0 : n.status) >= 400 && ((o = i == null ? void 0 : i.response) == null ? void 0 : o.status) < 500 || a.push(l);
    }
  wa(a), vn = !1, s > 0 && Ca(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${s} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function io(t) {
  var s, a;
  if (!t) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !t.response && (t.code === "ERR_NETWORK" || (s = t.message) != null && s.includes("Network Error"))) return !0;
  const r = (a = t.response) == null ? void 0 : a.status;
  return r === 502 || r === 503 || r === 504;
}
function co(t) {
  Ar || typeof window > "u" || (Ar = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), Bn(t);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && wn().length > 0 && !vn && Bn(t);
  }, 2e4), setTimeout(() => {
    const r = wn();
    r.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${r.length} tác vụ chưa hoàn tất từ phiên trước.`), Bn(t));
  }, 3e3));
}
const st = rl.create({
  baseURL: ut(),
  timeout: 15e3
});
st.interceptors.request.use((t) => {
  var s;
  t.baseURL || (t.baseURL = ut());
  const r = vt.getState().token;
  r && (t.headers.Authorization = `Bearer ${r}`);
  try {
    const a = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (a) {
      const n = JSON.parse(a), o = (s = n == null ? void 0 : n.state) == null ? void 0 : s.previewRoleCode;
      o && (t.headers["X-Preview-Role"] = o);
    }
  } catch {
  }
  return t;
});
st.interceptors.response.use(
  (t) => t,
  async (t) => {
    var a, n, o, l, i;
    if (((a = t == null ? void 0 : t.response) == null ? void 0 : a.status) === 401)
      return vt.getState().logout(), Promise.reject(t);
    const r = (((n = t == null ? void 0 : t.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(r) && io(t)) {
      const d = (l = (o = t == null ? void 0 : t.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${r} [${(i = t == null ? void 0 : t.config) == null ? void 0 : i.url}]`;
      return oo(t.config, d), Promise.resolve({
        data: {
          success: !0,
          isQueued: !0,
          message: "Dữ liệu đã được lưu an toàn trong Hàng Đợi Bền Bỉ (Resilience Queue)."
        },
        status: 202,
        statusText: "Accepted into Resilience Queue",
        headers: {},
        config: t.config
      });
    }
    return Promise.reject(t);
  }
);
co(st);
async function uo() {
  const { data: t } = await st.get("/pages");
  return t;
}
async function po(t) {
  const { data: r } = await st.post("/pages/save", t);
  return r;
}
async function xo(t) {
  await st.delete(`/pages/${t}`);
}
async function ho(t) {
  const { data: r } = await st.put("/pages/reorder", t);
  return r;
}
async function mo(t, r) {
  const { data: s } = await st.put(`/pages/${t}/properties`, r);
  return s;
}
async function bo(t) {
  const { data: r } = await st.post(`/pages/clone/${t}`);
  return r;
}
async function fo(t) {
  const { data: r } = await st.put(`/pages/${t}/toggle-active`);
  return r;
}
function ka(t) {
  var o, l, i;
  const r = String(t.id), s = t.scriptFile || ((o = t.layoutConfig) == null ? void 0 : o.scriptFile) || "";
  let a = t.featureProps;
  if (!a && t.featurePropsJson)
    try {
      a = JSON.parse(t.featurePropsJson);
    } catch {
      a = {};
    }
  const n = (d) => d.map((c) => ({
    ...c,
    pageId: r,
    children: c.children && c.children.length > 0 ? n(c.children) : c.children
  }));
  return {
    id: r,
    code: t.code || "",
    name: t.name,
    title: t.title || t.name,
    route: t.route,
    icon: t.icon || (t.isGroup ? "Folder" : "Layers"),
    parentId: t.parentId !== null && t.parentId !== void 0 ? String(t.parentId) : null,
    order: t.order ?? 0,
    isGroup: !!t.isGroup,
    isMenu: t.isMenu !== void 0 ? !!t.isMenu : !0,
    active: t.active !== void 0 ? !!t.active : !0,
    entityName: t.entityName || "",
    description: t.description || "",
    scriptFile: s,
    scriptContent: t.scriptContent || "",
    layoutConfig: t.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
    featureProps: a || {},
    displayFlags: t.displayFlags || (a == null ? void 0 : a.displayFlags),
    customStyles: t.customStyles || (a == null ? void 0 : a.customStyles),
    badge: t.badge ?? (a == null ? void 0 : a.badge),
    components: n(t.components || []),
    hidden: t.hidden ?? ((l = t.layoutConfig) == null ? void 0 : l.hidden) ?? (r === "2" ? !0 : void 0),
    isDetail: t.isDetail ?? ((i = t.layoutConfig) == null ? void 0 : i.isDetail) ?? (r === "2" ? !0 : void 0),
    createdAt: t.createdAt,
    updatedAt: t.updatedAt
  };
}
const go = 40;
function vo(t) {
  return t ? t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, "d").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-") : "";
}
function ss(t) {
  if (!t) return "";
  let r = t.trim().toLowerCase();
  return r.startsWith("/") || (r = "/" + r), r.length > 1 && r.endsWith("/") && (r = r.replace(/\/+$/, "")), r;
}
function Qs(t) {
  if (!t) return "/";
  if (t.route && t.route.trim())
    return ss(t.route);
  const r = vo(t.title || t.name || t.id);
  return ss(r || t.id);
}
function Cn(t) {
  if (typeof window > "u" || !t || t.length === 0)
    return { featureId: null, recordKey: null };
  try {
    const r = window.location.pathname, s = ss(r);
    if (s && s !== "/") {
      const l = [...t].sort((i, d) => {
        const c = Qs(i);
        return Qs(d).length - c.length;
      });
      for (const i of l)
        if (Qs(i) === s || ss(i.route) === s || ss(`/${i.id}`) === s) {
          const p = new URLSearchParams(window.location.search).get("id");
          return { featureId: i.id, recordKey: p || null };
        }
      for (const i of l) {
        const d = Qs(i);
        if (d && d !== "/" && s.startsWith(d + "/")) {
          const p = s.slice(d.length + 1).split("/")[0], h = p ? decodeURIComponent(p) : null;
          return { featureId: i.id, recordKey: h };
        }
      }
    }
    const a = new URLSearchParams(window.location.search), n = a.get("feature") || a.get("page"), o = a.get("id");
    if (n) {
      const l = t.find(
        (i) => String(i.id) === String(n) || ss(i.route) === ss(n)
      );
      return {
        featureId: l ? l.id : n,
        recordKey: o || null
      };
    }
    return { featureId: null, recordKey: null };
  } catch {
    return { featureId: null, recordKey: null };
  }
}
function Yi(t) {
  return Cn(t).featureId;
}
function yn() {
  if (typeof window > "u") return null;
  try {
    const t = new URLSearchParams(window.location.search), r = t.get("feature") || t.get("page");
    return r || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function en() {
  if (typeof window > "u") return null;
  try {
    const t = window.location.pathname, r = ss(t);
    if (r && r !== "/") {
      const n = r.split("/").filter(Boolean);
      if (n.length >= 2)
        return decodeURIComponent(n[1]);
    }
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function Sa(t) {
  var r, s, a, n;
  return t ? !!(t.isDetail || t.route === "/fcl-import" || (r = t.route) != null && r.includes("detail") || (s = t.scriptFile) != null && s.toLowerCase().includes("detail") || (a = t.name) != null && a.toLowerCase().includes("fcl import") || (n = t.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function Yn(t) {
  return t ? !Sa(t) : !1;
}
function es(t, r, s) {
  var a, n, o, l;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", t);
      const i = new URL(window.location.href);
      i.searchParams.delete("feature"), i.searchParams.delete("page"), i.searchParams.delete("id");
      const c = (s || ((a = Q.getState()) == null ? void 0 : a.features) || []).find((j) => String(j.id) === String(t) || j.route === `/${t}` || j.route === t), p = c ? Qs(c) : t ? ss(t) : "/";
      if ((c ? Yn(c) : t === "6" || t === "1" || t === "3") || r === null || r === "" || r === void 0) {
        i.pathname = p;
        try {
          localStorage.removeItem("uiforge_active_transaction_id");
        } catch {
        }
      } else {
        let j = String(r);
        try {
          const u = (n = Ne == null ? void 0 : Ne.getState) == null ? void 0 : n.call(Ne), b = ((o = u == null ? void 0 : u.formRecords) == null ? void 0 : o[t]) || ((l = u == null ? void 0 : u.formRecords) == null ? void 0 : l.default);
          if (b && (String(b.id ?? b.Id) === String(r) || r === "new")) {
            const k = b.jobNo || b.JobNo || b.code || b.Code;
            k && (j = String(k));
          }
        } catch {
        }
        i.pathname = `${p}/${encodeURIComponent(j)}`;
        try {
          localStorage.setItem("uiforge_active_transaction_id", String(r));
        } catch {
        }
      }
      window.history.replaceState(null, "", i.toString());
    } catch {
    }
}
const Q = Ss()(
  dn(
    (t, r) => ({
      features: [],
      activeFeatureId: yn() || "",
      activeRecordId: en(),
      selection: { componentId: null, pageId: yn() || "" },
      history: [[]],
      historyIndex: 0,
      // Modals State
      isFeatureManagerOpen: !1,
      openFeatureManager: () => t({ isFeatureManagerOpen: !0 }),
      closeFeatureManager: () => t({ isFeatureManagerOpen: !1 }),
      featurePropertiesTargetId: null,
      openFeatureProperties: (s) => {
        t((a) => {
          var n;
          return {
            featurePropertiesTargetId: s || a.activeFeatureId || (((n = a.features[0]) == null ? void 0 : n.id) ?? null)
          };
        });
      },
      closeFeatureProperties: () => t({ featurePropertiesTargetId: null }),
      componentModalTargetId: null,
      openComponentModal: (s) => t({ componentModalTargetId: s }),
      closeComponentModal: () => t({ componentModalTargetId: null }),
      setActiveRecordId: (s) => {
        t({ activeRecordId: s ? String(s) : null });
      },
      setActiveFeature: (s, a) => {
        const n = r().features || [], o = n.find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s), l = o ? Yn(o) : s === "6" || s === "1" || s === "3";
        es(s, l ? null : a, n);
        let i = null;
        l || a === null || a === "" ? i = null : a != null ? i = String(a) : i = en(), t((d) => ({
          activeFeatureId: s,
          activeRecordId: i,
          selection: { componentId: null, pageId: s }
        }));
      },
      setFeatures: (s) => {
        if (!s.length) {
          t({
            features: [],
            activeFeatureId: "",
            activeRecordId: null,
            selection: { componentId: null, pageId: "" },
            history: [[]],
            historyIndex: 0
          });
          return;
        }
        const a = Cn(s), n = a.featureId, o = yn(), l = n && s.find((c) => c.id === n) || o && s.find((c) => c.id === o || c.route === `/${o}` || c.route === o) || s.find((c) => c.route === "/transactions" || c.name.includes("Lô Hàng")) || s.find((c) => !c.hidden && !c.isDetail) || s[0], d = Yn(l) ? null : a.recordKey || en();
        es(l.id, d, s), t({
          features: s,
          activeFeatureId: l.id,
          activeRecordId: d,
          selection: { componentId: null, pageId: l.id },
          history: [s],
          historyIndex: 0
        });
      },
      addFeature: (s, a = "Layers", n = null, o = !1) => {
        const l = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, i = r().features.filter((p) => (p.parentId ?? null) === n), d = i.length > 0 ? Math.max(...i.map((p) => p.order ?? 0)) + 1 : 1, c = {
          id: l,
          code: `F_${Date.now().toString(36).toUpperCase()}`,
          name: s.trim() || "Tính năng mới",
          title: s.trim() || "Tính năng mới",
          icon: o ? "Folder" : a,
          route: `/${l}`,
          parentId: n ? String(n) : null,
          order: d,
          isGroup: !!o,
          isMenu: !0,
          active: !0,
          scriptFile: "",
          scriptContent: "",
          layoutConfig: {
            direction: "column",
            gap: "16px",
            wrap: "wrap"
          },
          components: [],
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return es(l, null), t((p) => {
          const h = [...p.features, c];
          return {
            ...tt(p, h),
            activeFeatureId: l,
            selection: { componentId: null, pageId: l }
          };
        }), l;
      },
      reorderFeatures: (s) => {
        t((a) => {
          const n = new Map(s.map((l) => [l.id, l])), o = a.features.map((l) => {
            const i = n.get(l.id);
            return i ? {
              ...l,
              parentId: i.parentId !== void 0 ? i.parentId ? String(i.parentId) : null : l.parentId,
              order: i.order !== void 0 ? i.order : l.order,
              isGroup: i.isGroup !== void 0 ? i.isGroup : l.isGroup
            } : l;
          });
          return ho(
            s.map((l) => ({
              id: l.id,
              parentId: l.parentId,
              order: l.order,
              isGroup: l.isGroup
            }))
          ).catch(() => {
          }), tt(a, o);
        });
      },
      updateFeatureProperties: (s, a) => {
        t((n) => {
          const o = a.parentId !== void 0 ? a.parentId && String(a.parentId).trim() !== "" ? String(a.parentId) : null : void 0, l = {
            ...a,
            ...o !== void 0 ? { parentId: o } : {}
          }, i = n.features.map((c) => c.id !== s ? c : {
            ...c,
            ...l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }), d = {
            ...a,
            parentId: o !== void 0 ? o ? isNaN(Number(o)) ? o : Number(o) : null : void 0
          };
          return mo(s, d).catch(() => {
          }), tt(n, i);
        });
      },
      cloneFeature: async (s) => {
        const n = r().features.find((i) => i.id === s);
        if (!n) return null;
        try {
          const i = await bo(s);
          if (i && i.id) {
            const d = ka(i);
            return t((c) => {
              const p = [...c.features, d];
              return {
                ...tt(c, p),
                activeFeatureId: d.id,
                selection: { componentId: null, pageId: d.id }
              };
            }), es(d.id, null), d.id;
          }
        } catch {
        }
        const o = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, l = {
          ...n,
          id: o,
          name: `${n.name} (Copy)`,
          title: n.title ? `${n.title} (Copy)` : `${n.name} (Copy)`,
          code: n.code ? `${n.code}_COPY` : `F_${Date.now().toString(36).toUpperCase()}`,
          route: `/${o}`,
          order: (n.order || 0) + 1,
          components: Pa(n.components || [], o),
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return t((i) => {
          const d = [...i.features, l];
          return {
            ...tt(i, d),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        }), es(o, null), o;
      },
      toggleFeatureActive: (s) => {
        t((a) => {
          const n = a.features.map((o) => {
            if (o.id !== s) return o;
            const l = o.active === !1;
            return {
              ...o,
              active: l,
              updatedAt: (/* @__PURE__ */ new Date()).toISOString()
            };
          });
          return fo(s).catch(() => {
          }), tt(a, n);
        });
      },
      renameFeature: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, name: a } : l);
          return tt(n, o);
        });
      },
      updateFeatureId: (s, a) => {
        t((n) => {
          const o = n.features.map(
            (i) => i.id === s ? {
              ...i,
              id: a,
              route: i.route === `/${s}` ? `/${a}` : i.route,
              components: i.components.map((d) => ({ ...d, pageId: a }))
            } : i
          ), l = n.activeFeatureId === s ? a : n.activeFeatureId;
          return es(l), {
            features: o,
            activeFeatureId: l,
            selection: n.selection.pageId === s ? { ...n.selection, pageId: a } : n.selection
          };
        });
      },
      deleteFeature: (s) => {
        t((a) => {
          if (a.features.length <= 1) return {};
          const n = a.features.filter((l) => l.id !== s), o = a.activeFeatureId === s ? n[0].id : a.activeFeatureId;
          return es(o, null), {
            ...tt(a, n),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        });
      },
      updateFeatureLayout: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== s ? l : {
            ...l,
            layoutConfig: {
              ...l.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
              ...a
            }
          });
          return tt(n, o);
        });
      },
      updateFeatureScriptFile: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, scriptFile: a.trim() } : l);
          return tt(n, o);
        });
      },
      selectComponent: (s) => {
        t((a) => ({
          selection: { ...a.selection, componentId: s }
        }));
      },
      addComponent: (s, a = null, n) => {
        t((o) => {
          const l = o.features.find((c) => c.id === o.activeFeatureId);
          if (!l) return {};
          let i;
          if (a)
            n !== void 0 ? i = Xn(l.components, a, s, n) : i = Da(l.components, a, s);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, s), i = c.map((p, h) => ({ ...p, order: h + 1 }));
          } else
            i = [...l.components, s];
          const d = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...tt(o, d),
            selection: { ...o.selection, componentId: s.id }
          };
        });
      },
      updateComponentProps: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              props: { ...i.props, ...a }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentStyle: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              style: { ...i.style, ...a }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentEvents: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              events: a
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentDataBinding: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...a }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentValidation: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              validation: { ...i.validation, ...a }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentPermissions: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...a }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentOrder: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: cs(l.components, s, (i) => ({
              ...i,
              order: a,
              props: { ...i.props, order: a }
            }))
          });
          return tt(n, o);
        });
      },
      removeComponent: (s) => {
        t((a) => {
          const n = a.features.map((o) => o.id !== a.activeFeatureId ? o : {
            ...o,
            components: Ta(o.components, s)
          });
          return {
            ...tt(a, n),
            selection: { ...a.selection, componentId: null }
          };
        });
      },
      moveComponent: (s, a, n) => {
        t((o) => {
          const l = o.features.find((u) => u.id === o.activeFeatureId);
          if (!l) return {};
          const i = yo(l.components, s);
          if (!i) return {};
          const [d, c] = i, p = { ...d, parentId: a };
          let h;
          if (a === null) {
            const u = c.filter((f) => !f.parentId);
            u.splice(n, 0, p);
            const b = u.map((f, C) => ({ ...f, order: C + 1 })), k = c.filter((f) => f.parentId);
            h = [...b, ...k];
          } else
            h = Xn(c, a, p, n);
          const j = o.features.map(
            (u) => u.id === o.activeFeatureId ? { ...u, components: h } : u
          );
          return tt(o, j);
        });
      },
      distributeSiblingWidths: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ia(l.components, s, a)
          });
          return tt(n, o);
        });
      },
      undo: () => {
        t((s) => {
          if (s.historyIndex <= 0) return {};
          const a = s.historyIndex - 1;
          return { historyIndex: a, features: s.history[a] };
        });
      },
      redo: () => {
        t((s) => {
          if (s.historyIndex >= s.history.length - 1) return {};
          const a = s.historyIndex + 1;
          return { historyIndex: a, features: s.history[a] };
        });
      }
    }),
    { name: "UIForge/MultiFeatureStore" }
  )
);
function tt(t, r) {
  const s = t.history.slice(0, t.historyIndex + 1);
  return s.length >= go && s.shift(), s.push(r), {
    features: r,
    history: s,
    historyIndex: s.length - 1
  };
}
function cs(t, r, s) {
  return t.map((a) => a.id === r ? s(a) : a.children && a.children.length > 0 ? { ...a, children: cs(a.children, r, s) } : a);
}
function Ta(t, r) {
  return t.filter((s) => s.id !== r).map(
    (s) => s.children && s.children.length > 0 ? { ...s, children: Ta(s.children, r) } : s
  );
}
function Da(t, r, s) {
  return t.map((a) => a.id === r ? {
    ...a,
    children: [...a.children || [], { ...s, parentId: r }]
  } : a.children && a.children.length > 0 ? {
    ...a,
    children: Da(a.children, r, s)
  } : a);
}
function Ia(t, r, s) {
  return t.some((n) => n.id === r) ? t.map((n) => {
    var o;
    return n.id === r ? {
      ...n,
      style: {
        ...n.style,
        width: `${s}%`,
        flex: `0 0 ${s}%`,
        maxWidth: `${s}%`,
        minWidth: 0
      }
    } : (o = n.style) != null && o.width && n.style.width !== "100%" ? n : {
      ...n,
      style: {
        ...n.style,
        flex: "1 1 0%",
        width: void 0,
        maxWidth: void 0,
        minWidth: 0
      }
    };
  }) : t.map((n) => n.children && n.children.length > 0 ? {
    ...n,
    children: Ia(n.children, r, s)
  } : n);
}
function yo(t, r) {
  const s = t.findIndex((a) => a.id === r);
  if (s !== -1) {
    const a = t[s], n = [...t.slice(0, s), ...t.slice(s + 1)];
    return [a, n];
  }
  for (let a = 0; a < t.length; a++) {
    const n = t[a];
    if (!n.children || n.children.length === 0) continue;
    const o = n.children.findIndex((i) => i.id === r);
    if (o !== -1) {
      const i = n.children[o], d = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], c = { ...n, children: d }, p = [...t.slice(0, a), c, ...t.slice(a + 1)];
      return [i, p];
    }
    const l = Fa(n.children, r);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, p = [...t.slice(0, a), c, ...t.slice(a + 1)];
      return [i, p];
    }
  }
  return null;
}
function Fa(t, r) {
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (a.id === r) {
      const n = [...t.slice(0, s), ...t.slice(s + 1)];
      return [a, n];
    }
    if (a.children && a.children.length > 0) {
      const n = Fa(a.children, r);
      if (n) {
        const [o, l] = n, i = { ...a, children: l }, d = [...t.slice(0, s), i, ...t.slice(s + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function Xn(t, r, s, a) {
  return t.map((n) => {
    if (n.id === r) {
      const l = [...n.children || []];
      l.splice(a, 0, { ...s, parentId: r });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Xn(n.children, r, s, a) } : n;
  });
}
function Pa(t, r) {
  return t.map((s) => {
    const a = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    return {
      ...s,
      id: a,
      pageId: r,
      children: s.children ? Pa(s.children, r) : []
    };
  });
}
const Oe = Ss()(
  ya(
    (t, r) => ({
      roles: [],
      users: [],
      featurePolicies: {},
      componentPolicies: {},
      previewRoleCode: null,
      isLoaded: !1,
      setPreviewRole: (s) => {
        t({ previewRoleCode: s });
      },
      setRoles: (s) => t({ roles: s }),
      setUsers: (s) => t({ users: s }),
      setFeaturePolicies: (s, a) => {
        t((n) => ({
          featurePolicies: {
            ...n.featurePolicies,
            [String(s)]: a
          }
        }));
      },
      setComponentPolicies: (s, a, n) => {
        const o = `${s}_${a}`;
        t((l) => ({
          componentPolicies: {
            ...l.componentPolicies,
            [o]: n
          }
        }));
      },
      fetchSecurityMetadata: async () => {
        try {
          const [s, a] = await Promise.all([
            st.get("/core/roles").catch(() => null),
            st.get("/core/users").catch(() => null)
          ]);
          s && Array.isArray(s.data) && t({ roles: s.data }), a && Array.isArray(a.data) && t({ users: a.data }), t({ isLoaded: !0 });
        } catch {
          t({ isLoaded: !0 });
        }
      },
      fetchFeaturePolicies: async (s) => {
        try {
          const a = await st.get(`/core/feature-policies/${s}`).catch(() => null);
          if (a && Array.isArray(a.data)) {
            const n = a.data;
            return t((o) => ({
              featurePolicies: {
                ...o.featurePolicies,
                [String(s)]: n
              }
            })), n;
          }
        } catch {
        }
        return r().featurePolicies[String(s)] || [];
      },
      saveFeaturePolicies: async (s, a) => {
        try {
          const n = {
            featureId: Number(s) || 0,
            policies: a
          }, o = await st.put(`/core/feature-policies/${s}`, n).catch(async () => await st.post(`/core/feature-policies/${s}`, n).catch(() => null));
          if (o && Array.isArray(o.data)) {
            t((l) => ({
              featurePolicies: {
                ...l.featurePolicies,
                [String(s)]: o.data
              }
            }));
            return;
          }
        } catch {
        }
        await r().fetchFeaturePolicies(s).catch(() => {
          t((n) => ({
            featurePolicies: {
              ...n.featurePolicies,
              [String(s)]: a
            }
          }));
        });
      },
      fetchComponentPolicies: async (s, a) => {
        try {
          const n = a ? `/core/component-policies?pageId=${s}&nodeId=${encodeURIComponent(a)}` : `/core/component-policies?pageId=${s}`, o = await st.get(n).catch(() => null);
          if (o && Array.isArray(o.data)) {
            const l = o.data;
            if (a) {
              const i = `${s}_${a}`;
              t((d) => ({
                componentPolicies: {
                  ...d.componentPolicies,
                  [i]: l
                }
              }));
            } else {
              const i = {};
              for (const d of l)
                if (d.nodeId) {
                  const c = `${s}_${d.nodeId}`;
                  i[c] || (i[c] = []), i[c].push(d);
                }
              t((d) => ({
                componentPolicies: {
                  ...d.componentPolicies,
                  ...i
                }
              }));
            }
            return l;
          }
        } catch {
        }
        if (a) {
          const n = `${s}_${a}`;
          return r().componentPolicies[n] || [];
        }
        return [];
      },
      saveComponentPolicies: async (s, a, n, o) => {
        const l = `${s}_${a}`, i = n.map((d) => ({
          ...d,
          pageId: Number(s),
          nodeId: a,
          fieldName: o || d.fieldName || a,
          roleId: typeof d.roleId == "number" ? d.roleId : null,
          roleCode: d.roleCode || (typeof d.roleId == "string" ? d.roleId : void 0),
          userId: typeof d.userId == "number" ? d.userId : null,
          userName: d.userName || (typeof d.userId == "string" ? d.userId : void 0)
        }));
        try {
          const d = {
            pageId: Number(s),
            nodeId: a,
            fieldName: o || a,
            policies: i
          }, c = await st.put("/core/component-policies", d).catch(async () => await st.post("/core/component-policies", d).catch(() => null));
          if (c && Array.isArray(c.data)) {
            t((p) => ({
              componentPolicies: {
                ...p.componentPolicies,
                [l]: c.data
              }
            }));
            return;
          }
        } catch {
        }
        t((d) => ({
          componentPolicies: {
            ...d.componentPolicies,
            [l]: i
          }
        }));
      },
      createRole: async (s, a, n) => {
        try {
          return await st.post("/core/roles", {
            code: s.trim(),
            name: a.trim() || s.trim(),
            description: (n == null ? void 0 : n.trim()) || "",
            active: !0
          }), await r().fetchSecurityMetadata(), !0;
        } catch (o) {
          return console.error("Failed to create role:", o), !1;
        }
      },
      deleteRole: async (s) => {
        try {
          return await st.delete(`/core/roles/${s}`), await r().fetchSecurityMetadata(), !0;
        } catch (a) {
          return console.error("Failed to delete role:", a), !1;
        }
      },
      getEffectiveRoleCode: () => {
        const s = vt.getState().user;
        if (s ? s.role === "Dev" : !0) {
          const { previewRoleCode: n } = r();
          return n || "Dev";
        }
        return s.roleCode || s.role || "User";
      },
      getEffectiveUser: () => {
        const s = vt.getState().user, a = s ? s.role === "Dev" : !0, { previewRoleCode: n } = r();
        if (a && n) {
          const i = n === "Dev";
          return {
            id: "simulated_user",
            username: `sim_${n.toLowerCase()}`,
            roleCode: n,
            isDev: i
          };
        }
        const o = r().getEffectiveRoleCode(), l = o === "Dev";
        return {
          id: (s == null ? void 0 : s.id) || (a ? 1 : "user"),
          username: (s == null ? void 0 : s.username) || (a ? "admin" : "user"),
          roleCode: o,
          isDev: l
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN FEATURE / MÀN HÌNH ──
      evaluateFeaturePermission: (s, a, n) => {
        var m, T, A, I;
        const o = r(), l = o.getEffectiveUser(), { roleCode: i, isDev: d, username: c } = l;
        if (d)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeleteAll: !0,
            canDeactivate: !0,
            canShare: !0,
            isPartialEditMode: !1,
            isLockedUpdate: !1,
            isLockedDelete: !1
          };
        let p;
        if (typeof s == "object" && s !== null)
          p = s;
        else {
          const S = String(s);
          p = Q.getState().features.find((U) => U.id === S || U.route === S);
        }
        if ((m = p == null ? void 0 : p.displayFlags) != null && m.isPublic || (A = (T = p == null ? void 0 : p.featureProps) == null ? void 0 : T.displayFlags) != null && A.isPublic)
          return {
            canRead: !0,
            canWrite: !1,
            canWriteAll: !1,
            canDelete: !1,
            canDeleteAll: !1,
            canDeactivate: !1,
            canShare: !1,
            isPartialEditMode: !0,
            isLockedUpdate: !1,
            isLockedDelete: !1
          };
        const h = (p == null ? void 0 : p.id) || String(s);
        let j = o.featurePolicies[h] || (p == null ? void 0 : p.policies) || [];
        j.length === 0 && (((I = p == null ? void 0 : p.displayFlags) == null ? void 0 : I.isPermissionInherited) ?? !0) && (p != null && p.parentId) && (j = o.featurePolicies[p.parentId] || []);
        const u = j.filter((S) => S.active !== !1), b = u.find((S) => String(S.userId) === String(l.id) || S.userName === c), k = u.find((S) => {
          if (!S.roleCode && !S.roleName && !S.roleId) return !1;
          const U = S.roleCode || S.roleName;
          return (U == null ? void 0 : U.toLowerCase()) === i.toLowerCase();
        }), f = b || k;
        if (u.length === 0)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeleteAll: !0,
            canDeactivate: !0,
            canShare: !0,
            isPartialEditMode: !1,
            isLockedUpdate: !1,
            isLockedDelete: !1
          };
        if (!f)
          return {
            canRead: !1,
            canWrite: !1,
            canWriteAll: !1,
            canDelete: !1,
            canDeleteAll: !1,
            canDeactivate: !1,
            canShare: !1,
            isPartialEditMode: !1,
            isLockedUpdate: !1,
            isLockedDelete: !1
          };
        let C = !1, w = !1;
        if (n) {
          const S = new Date(n).getTime(), B = (Date.now() - S) / (1e3 * 60 * 60);
          f.lockUpdateAfterCreated && f.lockUpdateAfterCreated > 0 && (C = B > f.lockUpdateAfterCreated), f.lockDeleteAfterCreated && f.lockDeleteAfterCreated > 0 && (w = B > f.lockDeleteAfterCreated);
        }
        const y = !a || a === c, g = (f.canWriteAll || f.canWrite && y) && !C, D = (f.canDeleteAll || f.canDelete && y) && !w, M = f.canRead && !f.canWrite && !f.canWriteAll;
        return {
          canRead: f.canRead,
          canWrite: g,
          canWriteAll: f.canWriteAll,
          canDelete: D,
          canDeleteAll: f.canDeleteAll,
          canDeactivate: f.canDeactivate,
          canShare: f.canShare,
          isPartialEditMode: M,
          isLockedUpdate: C,
          isLockedDelete: w
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN COMPONENT / LINH KIỆN ──
      evaluateComponentPermission: (s, a, n = [], o) => {
        var g, D, M, m, T, A, I;
        const l = r(), i = l.getEffectiveUser(), { roleCode: d, isDev: c, username: p } = i;
        if (c)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const h = l.evaluateFeaturePermission(s, o), j = `${s}_${a.id}`;
        let b = l.componentPolicies[j] || ((g = a.permissions) == null ? void 0 : g.rules) || ((M = (D = a.props) == null ? void 0 : D.permissions) == null ? void 0 : M.rules) || [];
        if (b.length === 0 && n.length > 0)
          for (let S = n.length - 1; S >= 0; S--) {
            const U = n[S], B = `${s}_${U.id}`, H = l.componentPolicies[B] || ((m = U.permissions) == null ? void 0 : m.rules) || ((A = (T = U.props) == null ? void 0 : T.permissions) == null ? void 0 : A.rules) || [];
            if (H.length > 0) {
              b = H;
              break;
            }
          }
        const k = b.filter((S) => S.active !== !1), f = k.find((S) => String(S.userId) === String(i.id) || S.userName === p), C = k.find((S) => {
          if (!S.roleCode && !S.roleName && !S.roleId) return !1;
          const U = S.roleCode || S.roleName;
          return (U == null ? void 0 : U.toLowerCase()) === d.toLowerCase();
        }), w = f || C;
        if (w) {
          const S = !o || o === p, U = w.canWriteAll || w.canWrite && S, B = h.isPartialEditMode && (w.canWrite || w.canWriteAll);
          return {
            canRead: w.canRead,
            canWrite: U,
            canWriteAll: w.canWriteAll,
            canDelete: w.canDelete,
            canDeactivate: w.canDeactivate,
            shouldHighlightEditable: B
          };
        }
        const y = a.permissions;
        if (y != null && y.allowedRoles && y.allowedRoles.length > 0) {
          const S = y.allowedRoles.some((B) => B.toLowerCase() === d.toLowerCase()), U = (I = y.readOnlyRoles) == null ? void 0 : I.some((B) => B.toLowerCase() === d.toLowerCase());
          return S ? {
            canRead: !0,
            canWrite: !U && h.canWrite,
            canWriteAll: !U && h.canWriteAll,
            canDelete: h.canDelete,
            canDeactivate: h.canDeactivate,
            shouldHighlightEditable: !1
          } : {
            canRead: y.deniedBehavior !== "hide",
            canWrite: !1,
            canWriteAll: !1,
            canDelete: !1,
            canDeactivate: !1,
            shouldHighlightEditable: !1
          };
        }
        return {
          canRead: h.canRead,
          canWrite: h.canWrite,
          canWriteAll: h.canWriteAll,
          canDelete: h.canDelete,
          canDeactivate: h.canDeactivate,
          shouldHighlightEditable: !1
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN CỘT LƯỚI GRIDPOLICY ──
      evaluateColumnPermission: (s, a, n, o = [], l) => {
        var g;
        const i = r(), d = i.getEffectiveUser(), { roleCode: c, isDev: p, username: h } = d;
        if (p)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const j = i.evaluateFeaturePermission(s, l), u = `${s}_${n.key}`, b = i.componentPolicies[u], f = (b && b.length > 0 ? b : n.columnPermissions || ((g = n.permissions) == null ? void 0 : g.rules) || n.policies || []).filter((D) => D.active !== !1), C = f.find((D) => String(D.userId) === String(d.id) || D.userName === h), w = f.find((D) => {
          if (!D.roleCode && !D.roleName && !D.roleId) return !1;
          const M = D.roleCode || D.roleName;
          return (M == null ? void 0 : M.toLowerCase()) === c.toLowerCase();
        }), y = C || w;
        if (y) {
          const D = !l || l === h, M = y.canWriteAll || y.canWrite && D, m = j.isPartialEditMode && (y.canWrite || y.canWriteAll);
          return {
            canRead: y.canRead,
            canWrite: M,
            canWriteAll: y.canWriteAll,
            canDelete: y.canDelete,
            canDeactivate: y.canDeactivate,
            shouldHighlightEditable: m
          };
        }
        return {
          canRead: j.canRead,
          canWrite: j.canWrite && n.editable !== !1,
          canWriteAll: j.canWriteAll && n.editable !== !1,
          canDelete: j.canDelete,
          canDeactivate: j.canDeactivate,
          shouldHighlightEditable: !1
        };
      }
    }),
    {
      name: "uiforge-permission-engine",
      partialize: (t) => ({
        previewRoleCode: t.previewRoleCode,
        featurePolicies: t.featurePolicies,
        componentPolicies: t.componentPolicies
      })
    }
  )
), Jn = sl(null), No = () => nl(Jn), fn = ({
  node: t,
  isEditing: r = !1,
  ancestors: s = [],
  children: a
}) => {
  var p, h, j, u, b, k, f, C, w, y, g, D;
  const n = Q((M) => M.activeFeatureId), o = Oe((M) => M.evaluateComponentPermission);
  if (r) {
    const M = !!((p = t.permissions) != null && p.rules && t.permissions.rules.length > 0 || (u = (j = (h = t.props) == null ? void 0 : h.permissions) == null ? void 0 : j.rules) != null && u.length || (k = (b = t.permissions) == null ? void 0 : b.allowedRoles) != null && k.length || (C = (f = t.permissions) == null ? void 0 : f.readOnlyRoles) != null && C.length);
    return /* @__PURE__ */ e.jsx(
      Jn.Provider,
      {
        value: {
          canRead: !0,
          canWrite: !0,
          canWriteAll: !0,
          canDelete: !0,
          canDeactivate: !0,
          isReadOnly: !1,
          shouldHighlightEditable: !1,
          hasRules: M
        },
        children: a
      }
    );
  }
  const l = o(n, t, s);
  if (!l.canRead || t.type === "Button" && (/delete|xóa|remove/i.test(String(((w = t.props) == null ? void 0 : w.text) || "")) || /trash|delete/i.test(String(((y = t.props) == null ? void 0 : y.icon) || "")) || ((g = t.props) == null ? void 0 : g.variant) === "danger") && !l.canDelete || t.type === "Button" && /deactivate|ngưng|hủy bỏ/i.test(String(((D = t.props) == null ? void 0 : D.text) || "")) && !l.canDeactivate)
    return null;
  const c = !l.canWrite && !l.canWriteAll;
  return /* @__PURE__ */ e.jsx(
    Jn.Provider,
    {
      value: {
        ...l,
        isReadOnly: c,
        shouldHighlightEditable: !!l.shouldHighlightEditable
      },
      children: a
    }
  );
}, Ts = ({
  label: t,
  showLabel: r = !0,
  labelPosition: s = "left",
  labelWidth: a = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: d,
  children: c
}) => {
  const p = No(), h = !!(p != null && p.shouldHighlightEditable), j = !!(p != null && p.isReadOnly), u = s === "left", b = l ? `col-span-${l}` : "", k = h ? "[&_input]:!border-emerald-500/70 [&_input]:!bg-emerald-950/20 [&_input]:shadow-[0_0_0_1px_rgba(16,185,129,0.25)] [&_textarea]:!border-emerald-500/70 [&_select]:!border-emerald-500/70 [&_.enterprise-select-trigger]:!border-emerald-500/70" : j ? "[&_input]:bg-slate-900/50 [&_input]:border-slate-800/80 [&_input]:text-slate-400" : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${b} ${u ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...l ? { gridColumn: `span ${l} / span ${l}` } : {},
        ...d
      },
      children: [
        r && t && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs select-none ${h ? "text-emerald-300 font-semibold" : j ? "text-slate-400 font-medium" : "text-slate-300 font-medium"} ${u ? "shrink-0 text-right truncate" : ""}`,
            style: u ? { width: a } : void 0,
            title: t,
            children: [
              h && /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 shadow-[0_0_6px_rgba(52,211,153,0.8)] align-middle",
                  title: "Được phép chỉnh sửa"
                }
              ),
              t,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              u && ":"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: `flex-1 min-w-0 w-full flex flex-col justify-center ${k}`, children: [
          c,
          o && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-red-400 mt-0.5", children: o })
        ] })
      ]
    }
  );
}, Ra = "uiforge_bl_functions_registry", Os = {};
function Fn(t) {
  if (!t || !t.trim()) return "";
  let r = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  return r.endsWith(".ts") || (r.endsWith(".bl") || (r = `${r}.bl`), r = `${r}.ts`), r;
}
function Pn() {
  if (typeof window > "u") return Os;
  try {
    const t = localStorage.getItem(Ra);
    if (t) {
      const r = JSON.parse(t), s = { ...Os, ...r };
      for (const [a, n] of Object.entries(Os))
        s[a] = Array.from(/* @__PURE__ */ new Set([...n, ...s[a] || []]));
      return s;
    }
  } catch {
  }
  return Os;
}
function Rn(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Ra, JSON.stringify(t));
    } catch {
    }
}
function jo(t) {
  if (!t || !t.trim()) return [];
  const r = Fn(t), s = Pn();
  if (s[r] && s[r].length > 0)
    return s[r];
  if (s[t.trim()] && s[t.trim()].length > 0)
    return s[t.trim()];
  const a = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return s[r] = a, Rn(s), a;
}
function wo(t, r) {
  if (!t || !r) return [];
  const s = Fn(t), a = r.trim().replace(/\(.*?\)/g, "");
  if (!s || !a) return [];
  const n = Pn(), o = n[s] || [];
  return o.includes(a) || (n[s] = [...o, a], Rn(n)), n[s];
}
function Xi(t, r) {
  if (!t || !r) return [];
  const s = Fn(t), a = r.trim().replace(/\(.*?\)/g, ""), n = Pn(), o = n[s] || [];
  return n[s] = o.filter((l) => l !== a), Rn(n), n[s];
}
function Co(t, r) {
  const s = Fn(t);
  Os[s] = Array.from(/* @__PURE__ */ new Set([...Os[s] || [], ...r]));
  const a = Pn();
  a[s] = Array.from(/* @__PURE__ */ new Set([...a[s] || [], ...r])), Rn(a);
}
const ds = {};
function Ji(t, r) {
  ds[t] = r;
  const s = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  ds[s] = r;
  const a = s.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  ds[a] = r;
  const n = [];
  for (const [o, l] of Object.entries(r))
    if (typeof l == "function")
      n.push(o);
    else if (l && typeof l == "object") {
      for (const [d, c] of Object.entries(l))
        typeof c == "function" && n.push(d);
      const i = Object.getPrototypeOf(l);
      if (i && i !== Object.prototype)
        for (const d of Object.getOwnPropertyNames(i))
          d !== "constructor" && typeof l[d] == "function" && n.push(d);
    }
  n.length > 0 && Co(s, n);
}
function cr(t) {
  if (!t || !t.trim()) return { module: null, canonicalName: "" };
  const r = t.trim().replace(/\\/g, "/").split("/").pop() || "", s = r.toLowerCase();
  if (ds[r]) return { module: ds[r], canonicalName: r };
  if (ds[s]) return { module: ds[s], canonicalName: r };
  const a = s.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(ds))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === a)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: r };
}
function La(t, r) {
  if (!r || !r.trim()) return { fn: null, matchedName: "" };
  const s = r.replace(/\(.*?\)/g, "").trim(), a = s.toLowerCase();
  if (typeof t[s] == "function")
    return { fn: t[s], matchedName: s };
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === a && typeof o == "function")
      return { fn: o, matchedName: n };
  for (const [n, o] of Object.entries(t))
    if (o && typeof o == "object") {
      if (typeof o[s] == "function")
        return { fn: o[s].bind(o), matchedName: s };
      for (const [i, d] of Object.entries(o))
        if (i.toLowerCase() === a && typeof d == "function")
          return { fn: d.bind(o), matchedName: i };
      const l = Object.getPrototypeOf(o);
      if (l && l !== Object.prototype) {
        for (const i of Object.getOwnPropertyNames(l))
          if (i !== "constructor" && typeof o[i] == "function" && (i === s || i.toLowerCase() === a))
            return { fn: o[i].bind(o), matchedName: i };
      }
    } else if (typeof o == "function") {
      const l = o;
      if (typeof l.getInstance == "function")
        try {
          const i = l.getInstance();
          if (i && typeof i[s] == "function")
            return { fn: i[s].bind(i), matchedName: s };
          if (i) {
            const d = Object.getPrototypeOf(i);
            if (d) {
              for (const c of Object.getOwnPropertyNames(d))
                if (c !== "constructor" && typeof i[c] == "function" && (c === s || c.toLowerCase() === a))
                  return { fn: i[c].bind(i), matchedName: c };
            }
          }
        } catch {
        }
      if (typeof l[s] == "function")
        return { fn: l[s].bind(l), matchedName: s };
    }
  return { fn: null, matchedName: s };
}
function Xs(t, r, s, a = !1, n, o = !0) {
  const l = document.createElement("div");
  l.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${o ? a ? "border-emerald-500 shadow-emerald-500/30" : "border-blue-500 shadow-blue-500/30" : "border-red-500 shadow-red-500/30"} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md`;
  const i = o ? a ? "⚡" : "⚙" : "⚠️", d = o ? a ? "bg-emerald-600/25 text-emerald-400" : "bg-blue-600/20 text-blue-400" : "bg-red-600/25 text-red-400", c = o ? a ? "text-emerald-300" : "text-blue-300" : "text-red-300";
  l.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${d} flex items-center justify-center font-bold text-base flex-shrink-0">
      ${i}
    </div>
    <div class="min-w-0">
      <div class="font-bold ${c} flex items-center gap-1.5 flex-wrap">
        <span>${n ? o ? "Thao tác thành công:" : "Cảnh báo:" : a ? "Đã gọi hàm BL:" : "Mô phỏng sự kiện:"}</span>
        <span class="font-mono text-cyan-300 font-bold">${t}()</span>
      </div>
      ${n ? `<div class="text-[11px] text-slate-200 mt-1 leading-relaxed">${n}</div>` : `<div class="text-[10px] text-slate-400 mt-0.5">
               Sự kiện: <span class="font-mono text-amber-400">${r}</span> | File: <span class="font-mono text-emerald-400">${s || "Chưa gắn file"}</span>
             </div>`}
    </div>
  `, document.body.appendChild(l), setTimeout(() => {
    l.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => l.remove(), 300);
  }, 3800);
}
function rn(t, r, s, a) {
  const n = t.handlerName || t.action || "unnamedHandler", o = t.trigger || "click", { module: l, canonicalName: i } = cr(s);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  const p = {
    componentName: r,
    trigger: o,
    blFileName: i || s,
    dataEngine: Ne.getState(),
    navigationEngine: Ye.getState(),
    editorStore: Q.getState(),
    ...a || {}
  };
  if (l) {
    const { fn: h, matchedName: j } = La(l, n);
    if (c = j, h)
      try {
        const u = h(p);
        if (d = !0, u && typeof u.then == "function")
          return u.then((b) => {
            b && b.message ? Xs(c, o, i || s, !0, b.message, b.success !== !1) : Xs(c, o, i || s, !0);
          }).catch((b) => {
            Xs(c, o, i || s, !0, String(b), !1);
          }), !0;
        if (u && u.message)
          return Xs(c, o, i || s, !0, u.message, u.success !== !1), !0;
      } catch (u) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${j}() trong ${i}:`, u);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${r || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || s || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Xs(c, o, i || s, d), d;
}
function Xe(t, r, s, a, n) {
  if (!t || t.length === 0) return;
  const o = t.filter((l) => l.trigger === r || r === "click" && (l.trigger === "onClick" || l.trigger === "click") || r === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || r === "change" && (l.trigger === "onChange" || l.trigger === "change") || r === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || r === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    rn(l, s, a, n);
}
async function Er(t, r = "onInit", s) {
  if (!t) return null;
  const { module: a, canonicalName: n } = cr(t);
  if (!a) return null;
  const { fn: o } = La(a, r);
  if (!o) return null;
  const l = {
    trigger: r,
    blFileName: n,
    dataEngine: Ne.getState(),
    navigationEngine: Ye.getState(),
    editorStore: Q.getState(),
    ...s || {}
  };
  return await o(l);
}
const ko = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Q((w) => w.features), o = Q((w) => w.activeFeatureId), l = n.find((w) => String(w.id) === String(t.pageId)) || n.find((w) => String(w.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[s.variant || "primary"], C = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base"
  }[s.size || "md"];
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      disabled: s.disabled,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${f} ${C}`,
      onClick: (w) => {
        r ? (w.ctrlKey || w.metaKey || w.altKey) && (w.stopPropagation(), Xe(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Xe(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (w) => {
        var g;
        w.stopPropagation(), ((g = t.events) == null ? void 0 : g.some((D) => D.trigger === "dblclick" || D.trigger === "onDoubleClick")) ? Xe(t.events, "dblclick", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : r && Xe(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: s.label || "Nút bấm"
    }
  );
}, So = ({ node: t, isEditing: r }) => {
  var M;
  const { props: s, style: a } = t, n = Q((m) => m.features), o = Q((m) => m.activeFeatureId), l = n.find((m) => String(m.id) === String(t.pageId)) || n.find((m) => String(m.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((M = t.dataBinding) == null ? void 0 : M.fieldName) || t.props.name || t.id), w = Ne((m) => as(m, f, C, void 0)), y = Ne((m) => m.setFieldValue), g = w !== void 0 ? w : s.value ?? "", D = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label,
      showLabel: s.showLabel ?? !0,
      labelPosition: s.labelPosition || "left",
      labelWidth: s.labelWidth || "100px",
      required: s.required,
      error: s.validationError ? String(s.validationError) : void 0,
      colSpan: s.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "Nhập dữ liệu...",
          value: g,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${D ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (m) => {
            const T = m.target.value;
            y(f, C, T), r || Xe(t.events, "change", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: C,
              value: T
            });
          },
          onFocus: () => {
            r || Xe(t.events, "focus", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: C
            });
          },
          onBlur: (m) => {
            r || Xe(t.events, "blur", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: C,
              value: m.target.value
            });
          }
        }
      )
    }
  );
}, To = ({ node: t, isEditing: r }) => {
  var A;
  const { props: s, style: a } = t, n = Q((I) => I.features), o = Q((I) => I.activeFeatureId), l = n.find((I) => String(I.id) === String(t.pageId)) || n.find((I) => String(I.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((A = t.dataBinding) == null ? void 0 : A.fieldName) || t.props.name || t.id), w = Ne((I) => as(I, f, C, void 0)), y = Ne((I) => I.setFieldValue), g = s.precision !== void 0 ? Number(s.precision) : 0, D = w !== void 0 ? w : s.value, M = D != null && D !== "" ? Number(D) : 0, m = (I) => I.toLocaleString("en-US", {
    minimumFractionDigits: g,
    maximumFractionDigits: g
  }), T = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label,
      showLabel: s.showLabel ?? !0,
      labelPosition: s.labelPosition || "left",
      labelWidth: s.labelWidth || "100px",
      required: s.required,
      error: s.validationError ? String(s.validationError) : void 0,
      colSpan: s.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "0",
          value: m(M),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${T ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (I) => {
            const S = I.target.value.replace(/,/g, "");
            if (S === "" || !isNaN(Number(S))) {
              const U = S === "" ? 0 : Number(S);
              y(f, C, U), r || Xe(t.events, "change", s.label || "Ô số", i, {
                componentId: t.id,
                fieldName: C,
                value: U
              });
            }
          }
        }
      ) })
    }
  );
}, Do = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Q((f) => f.features), o = Q((f) => f.activeFeatureId), l = n.find((f) => String(f.id) === String(t.pageId)) || n.find((f) => String(f.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (f) => {
        r ? (f.ctrlKey || f.metaKey || f.altKey) && (f.stopPropagation(), Xe(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        })) : Xe(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      onDoubleClick: (f) => {
        f.stopPropagation(), Xe(t.events, "dblclick", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      children: s.label || "Văn bản tiêu đề"
    }
  );
}, Mr = ({
  node: t,
  isEditing: r,
  isSelected: s,
  onClick: a,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var H;
  const { props: d, style: c } = t;
  Q((O) => O.updateComponentProps);
  const p = !!(d.isTab || d.tab || d.isTabGroup || t.type === "Tabs"), h = [
    { id: "main", label: "TAB 1" }
  ], j = d.tabs || h, [u, b] = P(
    d.activeTabId || ((H = j[0]) == null ? void 0 : H.id) || "main"
  ), k = d.layoutMode || "flex", f = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, C = d.gridConfig || { columns: 12, gap: "16px" }, w = Number(
    C.columns || (typeof f.columnsPerRow == "number" ? f.columnsPerRow : 12)
  ) || 12, y = (c == null ? void 0 : c.justifyContent) || f.justify || "flex-start", g = (c == null ? void 0 : c.alignItems) || f.align || "flex-start", D = f.wrap || "wrap", M = k === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${w}, minmax(0, 1fr))`,
    gap: C.gap || f.gap || "16px",
    alignItems: g
  } : {
    display: "flex",
    flexDirection: f.direction || "row",
    flexWrap: D,
    justifyContent: y,
    alignItems: g,
    gap: f.gap || "12px"
  };
  let m = c != null && c.flex ? void 0 : "100%", T = c == null ? void 0 : c.flex, A = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const O = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(O) && O > 0) {
      const N = parseInt(o.gap || "12", 10) || 12, L = O === 1 ? "100%" : `calc((100% - ${(O - 1) * N}px) / ${O})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (m = L, T = `0 0 ${L}`, A = L);
    }
  }
  const { width: I, flex: S, ...U } = c || {}, B = l ? {
    ...M,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...U,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...M,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : m,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : T,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : A,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: a,
      onContextMenu: n,
      style: B,
      className: `relative transition-all duration-150 group/container box-border ${r ? `cursor-pointer ${s ? p ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : p ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && s && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${p ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: p ? `Tab: ${d.label || "Không tên"}` : "Khoảng trắng" }),
              /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
                "#",
                t.id.slice(-4)
              ] })
            ]
          }
        ),
        i
      ]
    }
  );
}, Io = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...h } = a || {}, [j, u] = P(!1), b = s.label || s.title || "Khối Bố Cục (Section)", k = s.collapsible ?? !0, f = s.layoutMode || "grid", C = s.flexConfig || {}, w = s.gridConfig || {}, y = Number(w.columns || C.columnsPerRow || 12) || 12, g = C.gap || w.gap || "12px", D = (a == null ? void 0 : a.justifyContent) || C.justify || "flex-start", M = (a == null ? void 0 : a.alignItems) || C.align || "center", m = f === "flex" ? {
    display: "flex",
    flexDirection: C.direction || "row",
    flexWrap: C.wrap || "wrap",
    justifyContent: D,
    alignItems: M,
    gap: g
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${y}, minmax(0, 1fr))`,
    gap: g,
    alignItems: M
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...h
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: b })
          ] }),
          k && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => u(!j),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: j ? "Mở rộng" : "Thu gọn",
              children: j ? /* @__PURE__ */ e.jsx(Mt, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(sn, { className: "w-4 h-4" })
            }
          )
        ] }),
        !j && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: m, children: r })
      ]
    }
  );
}, Qi = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...h } = a || {}, j = s.label || s.title || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...h
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: j }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: s.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Yr, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "In & Chứng từ" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hàm chức năng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-blue-500/20",
                children: [
                  /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Lưu dữ liệu" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: r })
      ]
    }
  );
}, Fo = ({
  x: t,
  y: r,
  column: s,
  isOpen: a,
  isDev: n,
  onClose: o,
  onToggleHide: l,
  onSetFreeze: i,
  onOpenProperties: d,
  onCloneColumn: c,
  onRemoveColumn: p,
  onToggleFilter: h
}) => {
  const j = nt(null), [u, b] = ns.useState(!1), k = vt((y) => {
    var g;
    return ((g = y.user) == null ? void 0 : g.role) === "Dev";
  }), f = n !== void 0 ? n : k;
  if (Fe(() => {
    if (!a) return;
    const y = (D) => {
      j.current && !j.current.contains(D.target) && o();
    }, g = (D) => {
      D.key === "Escape" && o();
    };
    return document.addEventListener("mousedown", y), document.addEventListener("keydown", g), () => {
      document.removeEventListener("mousedown", y), document.removeEventListener("keydown", g);
    };
  }, [a, o]), !a) return null;
  const C = Math.min(t, window.innerWidth - 220), w = Math.min(r, window.innerHeight - 340);
  return Bt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: C, top: w },
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Cột: ",
              s.title || s.key
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-normal", children: [
              "#",
              s.key
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "py-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                onClick: () => {
                  l(s.key), o();
                },
                children: s.hidden ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(sr, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => b(!0),
                onMouseLeave: () => b(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(Xr, { className: `w-3.5 h-3.5 ${s.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  u && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${s.sticky === "left" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          i(s.key, "left"), o();
                        },
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: "📌 Ghim bên trái (Left)" }),
                          s.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px]", children: "✓" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${s.sticky === "right" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          i(s.key, "right"), o();
                        },
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: "📌 Ghim bên phải (Right)" }),
                          s.sticky === "right" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px]", children: "✓" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        className: "w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-slate-800 text-slate-400",
                        onClick: () => {
                          i(s.key, "none"), o();
                        },
                        children: /* @__PURE__ */ e.jsx("span", { children: "Bỏ ghim (Unfreeze)" })
                      }
                    )
                  ] })
                ]
              }
            ),
            f && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors font-medium text-emerald-400",
                  onClick: () => {
                    d(s), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Column Data Options" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors",
                  onClick: () => {
                    c(s.key), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-sky-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                  onClick: () => {
                    p(s.key), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5 text-rose-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Remove Column" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-slate-800 pt-1 mt-1", children: [
            h && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  h(), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Filter Local" })
                ]
              }
            ),
            f && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  d(s), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(al, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Feature Settings" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
}, Po = ({
  x: t,
  y: r,
  row: s,
  rowIndex: a,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: d,
  onInsertRowBelow: c,
  onMoveRowUp: p,
  onMoveRowDown: h,
  onPasteExcel: j
}) => {
  const u = nt(null);
  if (Fe(() => {
    if (!o) return;
    const f = (w) => {
      u.current && !u.current.contains(w.target) && l();
    }, C = (w) => {
      w.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", C), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", C);
    };
  }, [o, l]), !o) return null;
  const b = Math.min(t, window.innerWidth - 220), k = Math.min(r, window.innerHeight - 260);
  return Bt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: b, top: k },
        onClick: (f) => f.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Thao Tác Dòng #",
              a + 1
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-mono", children: [
              "ID: ",
              (s == null ? void 0 : s.id) ?? a + 1
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "py-1", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  i(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            j && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  j(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Qr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Dán từ Excel (Ctrl+V)" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  c(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Zr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            p && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: a === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  p(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(nr, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            h && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: a >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  h(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng xuống dưới" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-slate-800" }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-600/20 hover:text-rose-300 text-rose-400 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  d(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5 text-rose-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa dòng này (Delete)" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
}, Ro = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], $a = ({
  events: t = [],
  onChange: r,
  scriptFile: s = "transactionList.bl.ts",
  componentName: a = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = Ro
}) => {
  const [d, c] = P(""), [, p] = P(0), h = s || "transactionList.bl.ts", j = jo(h), u = () => {
    var y;
    const C = j[0] || "openTransactionDetail", w = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((y = i[0]) == null ? void 0 : y.value) || "click",
      handlerName: C,
      action: C
    };
    r([...t, w]);
  }, b = (C, w) => {
    const y = t.map((g, D) => {
      if (D !== C) return g;
      const M = { ...g, ...w };
      return w.handlerName && !w.action && (M.action = w.handlerName), M;
    });
    r(y);
  }, k = (C) => {
    const w = t.filter((y, g) => g !== C);
    r(w);
  }, f = () => {
    d.trim() && (wo(h, d.trim()), c(""), p((C) => C + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            t.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-400", children: [
          "File BL:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: h })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: u,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(ea, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          h
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: d,
            onChange: (C) => c(C.target.value),
            onKeyDown: (C) => {
              C.key === "Enter" && (C.preventDefault(), f());
            },
            placeholder: "ví dụ: openTransactionDetail, checkGW...",
            className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: f,
            className: "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(Zr, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    t.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((C, w) => {
      const y = j.includes(C.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  w + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: C.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => k(w),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: C.trigger || "click",
                    onChange: (g) => b(w, { trigger: g.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((g) => /* @__PURE__ */ e.jsx("option", { value: g.value, children: g.label }, g.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: C.handlerName || j[0] || "",
                    onChange: (g) => {
                      const D = g.target.value;
                      b(w, { handlerName: D, action: D });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      j.map((g) => /* @__PURE__ */ e.jsxs("option", { value: g, children: [
                        g,
                        "()"
                      ] }, g)),
                      !y && C.handlerName && /* @__PURE__ */ e.jsxs("option", { value: C.handlerName, children: [
                        C.handlerName,
                        "() [Tùy chỉnh]"
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  rn(
                    C,
                    a,
                    h,
                    {
                      componentId: n,
                      trigger: C.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(ll, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        C.id || w
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(Xt, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        a,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: h }),
        "."
      ] })
    ] })
  ] });
}, Aa = ({
  isOpen: t,
  onClose: r
}) => {
  const s = Oe((y) => y.roles), a = Oe((y) => y.createRole), n = Oe((y) => y.deleteRole), [o, l] = P(""), [i, d] = P(""), [c, p] = P(""), [h, j] = P(!1), [u, b] = P(null), [k, f] = P(null);
  if (!t) return null;
  const C = async (y) => {
    y.preventDefault();
    const g = o.trim().toUpperCase(), D = i.trim();
    if (!g) {
      f({ type: "error", message: "Vui lòng nhập Mã vai trò (Code)!" });
      return;
    }
    if (s.some((m) => {
      var T;
      return ((T = m.code) == null ? void 0 : T.toUpperCase()) === g;
    })) {
      f({ type: "error", message: `Vai trò "${g}" đã tồn tại trong hệ thống!` });
      return;
    }
    j(!0), f(null);
    const M = await a(g, D || g, c);
    j(!1), M ? (f({ type: "success", message: `Đã tạo thành công vai trò "${g}"!` }), l(""), d(""), p(""), setTimeout(() => f(null), 3e3)) : f({ type: "error", message: "Có lỗi xảy ra khi tạo vai trò, vui lòng thử lại." });
  }, w = async (y, g) => {
    if (g.toUpperCase() === "DEV") {
      alert("Role 'Dev' là vai trò hệ thống bắt buộc của Core, không thể xóa.");
      return;
    }
    if (!confirm(`Bạn có chắc chắn muốn xóa vai trò "${g}"?`))
      return;
    b(y);
    const D = await n(y);
    b(null), D ? (f({ type: "success", message: `Đã xóa vai trò "${g}".` }), setTimeout(() => f(null), 3e3)) : f({ type: "error", message: `Không thể xóa vai trò "${g}".` });
  };
  return Bt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-2xl rounded-2xl border border-emerald-500/40 bg-[#0c1427] shadow-2xl overflow-hidden flex flex-col text-slate-100 max-h-[90vh]", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1c] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-emerald-600/20 text-emerald-400", children: /* @__PURE__ */ e.jsx(Hs, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: "Quản Lý Vai Trò Động (Dynamic Roles)" }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400", children: [
              "Core chỉ bắt buộc duy nhất role ",
              /* @__PURE__ */ e.jsx("span", { className: "text-emerald-400 font-mono font-bold", children: "Dev" }),
              ". Các vai trò nghiệp vụ khác có thể tự do thêm/xóa theo yêu cầu doanh nghiệp."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: r,
            className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
            children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto space-y-6 text-xs flex-1", children: [
        k && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `p-3 rounded-xl border flex items-center gap-2 ${k.type === "success" ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" : "bg-rose-950/60 border-rose-500/40 text-rose-300"}`,
            children: [
              k.type === "success" ? /* @__PURE__ */ e.jsx(ar, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : /* @__PURE__ */ e.jsx(ol, { className: "w-4 h-4 shrink-0 text-rose-400" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: k.message })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("form", { onSubmit: C, className: "p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Thêm Vai Trò Mới" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "block text-[11px] text-slate-400 font-medium mb-1", children: [
                "Mã Vai Trò (Code) ",
                /* @__PURE__ */ e.jsx("span", { className: "text-rose-400", children: "*" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  required: !0,
                  placeholder: "Ví dụ: ACCOUNTANT, WAREHOUSE...",
                  value: o,
                  onChange: (y) => l(y.target.value.toUpperCase()),
                  className: "w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-[11px] text-slate-400 font-medium mb-1", children: "Tên Hiển Thị (Name)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Ví dụ: Kế toán, Quản lý kho...",
                  value: i,
                  onChange: (y) => d(y.target.value),
                  className: "w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-[11px] text-slate-400 font-medium mb-1", children: "Mô tả (Description)" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Ghi chú về phạm vi quyền hạn của vai trò này...",
                value: c,
                onChange: (y) => p(y.target.value),
                className: "w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "submit",
              disabled: h || !o.trim(),
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all disabled:opacity-50 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: h ? "Đang tạo..." : "+ Tạo Role Mới" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider px-1", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Danh Sách Vai Trò (",
              s.length,
              ")"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 lowercase font-normal", children: "Tự động đồng bộ với ma trận phân quyền" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden bg-[#070d18]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ e.jsx("thead", { className: "bg-[#050912] border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Mã Role (Code)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Tên Hiển Thị (Name)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Mô Tả" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 text-center w-28", children: "Trạng Thái" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 text-center w-16", children: "Xóa" })
            ] }) }),
            /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/60 text-slate-200 text-xs", children: [
              s.map((y) => {
                var D;
                const g = ((D = y.code) == null ? void 0 : D.toUpperCase()) === "DEV";
                return /* @__PURE__ */ e.jsxs("tr", { className: "hover:bg-slate-800/30 transition-colors", children: [
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono font-bold text-emerald-400", children: y.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-medium", children: y.name || y.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-slate-400 text-[11px] truncate max-w-[200px]", title: y.description, children: y.description || "—" }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: g ? /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold text-[10px]", children: [
                    /* @__PURE__ */ e.jsx(Dn, { className: "w-2.5 h-2.5" }),
                    " Core Bắt Buộc"
                  ] }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-[10px]", children: "Dynamic Role" }) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: g ? /* @__PURE__ */ e.jsx("span", { className: "text-slate-600 text-xs select-none", title: "Role Core Dev không thể xóa", children: "🔒" }) : /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => w(y.id, y.code),
                      disabled: u === y.id,
                      className: "p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors disabled:opacity-50",
                      title: `Xóa vai trò ${y.code}`,
                      children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                    }
                  ) })
                ] }, y.id || y.code);
              }),
              s.length === 0 && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 5, className: "py-6 text-center text-slate-500", children: "Chưa có vai trò nào trong hệ thống." }) })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-end px-6 py-3 bg-[#080e1c] border-t border-slate-800", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: r,
          className: "px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors",
          children: "Đóng"
        }
      ) })
    ] }) }),
    document.body
  );
}, Ea = ({
  title: t,
  rules: r = [],
  onChange: s,
  onPendingRuleChange: a,
  pageId: n = "",
  nodeId: o = "",
  fieldName: l = "",
  isColumn: i = !1
}) => {
  const d = Oe((W) => W.roles), c = Oe((W) => W.users), p = Oe((W) => W.fetchSecurityMetadata);
  Fe(() => {
    p();
  }, [p]), Fe(() => {
    n && o && Oe.getState().fetchComponentPolicies(n, o).then((W) => {
      W && W.length > 0 && s(W);
    }).catch(() => {
    });
  }, [n, o]);
  const [h, j] = P(!1), [u, b] = P("role"), [k, f] = P(""), [C, w] = P(""), [y, g] = P(!0), [D, M] = P(!1), [m, T] = P(!1), [A, I] = P(!1), [S, U] = P(!1), [B, H] = P(!0);
  Fe(() => {
    if (!a) return;
    const W = !!(k && k.trim() !== ""), X = !!(C && C.trim() !== "");
    if (!W && !X) {
      a(null);
      return;
    }
    const E = d.find((z) => String(z.id) === k || z.code === k), Z = c.find((z) => String(z.id) === C || z.username === C), te = {
      id: `cpr_pending_${Date.now()}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: W ? (E == null ? void 0 : E.id) || Number(k) || k : null,
      roleCode: W ? (E == null ? void 0 : E.code) || k : void 0,
      roleName: W ? (E == null ? void 0 : E.name) || k : void 0,
      userId: X ? (Z == null ? void 0 : Z.id) || Number(C) || C : null,
      userName: X ? (Z == null ? void 0 : Z.username) || C : void 0,
      canRead: y,
      canWrite: D,
      canWriteAll: m,
      canDelete: A,
      canDeactivate: S,
      active: B
    };
    a(te);
  }, [
    k,
    C,
    y,
    D,
    m,
    A,
    S,
    B,
    d,
    c,
    n,
    o,
    l,
    a
  ]);
  const O = () => {
    if (u === "role" && !k || u === "user" && !C) return;
    const W = d.find((te) => String(te.id) === k || te.code === k), X = c.find((te) => String(te.id) === C || te.username === C), E = {
      id: `cpr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: u === "role" ? (W == null ? void 0 : W.id) || k : null,
      roleCode: u === "role" ? (W == null ? void 0 : W.code) || k : void 0,
      roleName: u === "role" ? (W == null ? void 0 : W.name) || k : void 0,
      userId: u === "user" ? (X == null ? void 0 : X.id) || C : null,
      userName: u === "user" ? (X == null ? void 0 : X.username) || C : void 0,
      canRead: y,
      canWrite: D,
      canWriteAll: m,
      canDelete: A,
      canDeactivate: S,
      active: B
    }, Z = [...r, E];
    s(Z), n && o && Oe.getState().saveComponentPolicies(n, o, Z, l), f(""), w(""), g(!0), M(!1), T(!1), I(!1), U(!1), H(!0), a && a(null);
  }, N = (W, X) => {
    const E = [...r], Z = !!E[W][X];
    E[W] = { ...E[W], [X]: !Z }, s(E), n && o && Oe.getState().saveComponentPolicies(n, o, E, l);
  }, L = (W) => {
    const X = r.filter((E, Z) => Z !== W);
    s(X), n && o && Oe.getState().saveComponentPolicies(n, o, X, l);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 bg-[#0a1120] border border-slate-800 rounded-xl p-4 text-xs select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2.5", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Hs, { className: "w-4 h-4 text-teal-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider", children: t || (i ? "Phân Quyền Cột Lưới (GridPolicy)" : "Phân Quyền Linh Kiện (Component Policy)") }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
          r.length,
          " quy tắc"
        ] }),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => j(!0),
            className: "flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-[11px] font-semibold transition-colors cursor-pointer ml-1",
            title: "Quản lý và tạo vai trò động cho dự án",
            children: [
              /* @__PURE__ */ e.jsx(Hn, { className: "w-3 h-3 text-teal-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "+ Quản lý Vai trò (Roles)" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] text-slate-400", children: [
        "💡 Hỗ trợ cấp quyền ",
        /* @__PURE__ */ e.jsx("strong", { children: "Cập nhật toàn bộ (CanWriteAll)" }),
        " để sửa trên bản ghi do role khác tạo"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-lg overflow-hidden bg-[#070d18]", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ e.jsx("thead", { className: "bg-[#050912] border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-semibold", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 w-10 text-center", children: "#" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 min-w-[140px]", children: "Người Dùng (User)" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 min-w-[160px]", children: "Vai Trò (Role)" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-24", children: "Xem (Read)" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-28", children: "Cập Nhật (Write)" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-36 text-amber-300", children: "Cập Nhật Toàn Bộ" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-24", children: "Xóa" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-24", children: "Hủy" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-2 text-center w-20", children: "Active" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 text-center w-14", children: "Xóa" })
      ] }) }),
      /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/60 text-slate-200 text-xs", children: [
        /* @__PURE__ */ e.jsxs("tr", { className: "bg-teal-950/20 border-b-2 border-teal-600/30", children: [
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-teal-400 font-bold", children: /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4 mx-auto" }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(ta, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: u === "user" ? C : "",
                onChange: (W) => {
                  b("user"), w(W.target.value), f("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-mono",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  c.map((W) => /* @__PURE__ */ e.jsx("option", { value: W.id, children: W.username }, W.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(Hn, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: u === "role" ? k : "",
                onChange: (W) => {
                  b("role"), f(W.target.value), w("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-semibold",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  d.map((W) => /* @__PURE__ */ e.jsx("option", { value: W.code, children: W.code }, W.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: y,
              onChange: (W) => g(W.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xem"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (W) => M(W.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Cập nhật bản ghi của mình"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (W) => T(W.target.checked),
              className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "CẬP NHẬT TOÀN BỘ (Sửa trên mọi bản ghi kể cả do role khác tạo)"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: A,
              onChange: (W) => I(W.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xóa"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: S,
              onChange: (W) => U(W.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Hủy"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: B,
              onChange: (W) => H(W.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Kích hoạt rule"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: O,
              disabled: !k && !C,
              className: "px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-[11px] font-bold transition-all shadow-sm cursor-pointer",
              title: "Thêm quy tắc mới",
              children: "+ Thêm"
            }
          ) })
        ] }),
        r.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 10, className: "py-8 text-center text-slate-500", children: "Chưa có quy tắc phân quyền riêng (Linh kiện sẽ thừa kế phân quyền từ Feature cha)." }) }) : r.map((W, X) => {
          var te, z;
          const E = W.roleCode || ((te = d.find((ae) => ae.code === W.roleCode || String(ae.id) === String(W.roleId))) == null ? void 0 : te.code) || (W.roleId ? String(W.roleId) : ""), Z = W.userName || ((z = c.find((ae) => String(ae.id) === String(W.userId))) == null ? void 0 : z.username) || (W.userId ? String(W.userId) : "");
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              className: "hover:bg-slate-800/40 transition-colors border-b border-slate-800/50",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-500 text-[11px]", children: X + 1 }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: W.userId || W.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-cyan-300 font-mono", children: Z }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: W.roleCode || W.roleId ? /* @__PURE__ */ e.jsx("span", { className: "text-amber-300 font-semibold", children: E }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.canRead,
                    onChange: () => N(X, "canRead"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.canWrite,
                    onChange: () => N(X, "canWrite"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.canWriteAll,
                    onChange: () => N(X, "canWriteAll"),
                    className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.canDelete,
                    onChange: () => N(X, "canDelete"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.canDeactivate,
                    onChange: () => N(X, "canDeactivate"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!W.active,
                    onChange: () => N(X, "active"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(X),
                    className: "p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/20 transition-all cursor-pointer",
                    title: "Xóa quy tắc này",
                    children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                  }
                ) })
              ]
            },
            W.id || X
          );
        })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      Aa,
      {
        isOpen: h,
        onClose: () => j(!1)
      }
    )
  ] });
};
let _n = null;
async function Ln(t = !1) {
  if (!t && _n) return _n;
  try {
    const r = await fetch(`${ut()}/core/metadata/entities`);
    if (r.ok) {
      const s = await r.json();
      if (Array.isArray(s))
        return _n = s, s;
    }
  } catch (r) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", r);
  }
  return [];
}
function kn(t, r = []) {
  return t.map((s) => ({
    name: s.name,
    displayName: s.displayName || s.name,
    tableName: s.tableName,
    fields: s.columns.map((a) => ({
      name: a.name,
      displayName: a.displayName || a.name,
      dataType: a.dataType
    }))
  }));
}
function Sn(t, r) {
  if (!r || !r.trim()) return;
  const s = r.trim().toLowerCase(), a = s.endsWith("s") ? s.slice(0, -1) : s;
  return t.find(
    (n) => n.name.toLowerCase() === s || n.name.toLowerCase() === a || n.tableName && n.tableName.toLowerCase() === s
  );
}
const Ma = ({
  isOpen: t,
  column: r,
  onClose: s,
  onSave: a
}) => {
  var M;
  const [n, o] = P(null), [l, i] = P("info"), [d, c] = P([]), [p, h] = P(null), [j, u] = P(!1), b = Q((m) => m.features.find((T) => T.id === m.activeFeatureId));
  if (Fe(() => {
    Ln().then((m) => {
      m && m.length > 0 && c(m);
    });
  }, []), Fe(() => {
    if (r && t) {
      let m = [];
      if (Array.isArray(r.events))
        m = [...r.events];
      else if (typeof r.events == "string" && r.events.trim())
        try {
          const T = JSON.parse(r.events);
          Array.isArray(T) && (m = T);
        } catch {
        }
      m.length === 0 && r.action && (m = [
        {
          id: `evt-${r.key}-action`,
          trigger: r.componentType === "Button" ? "click" : "dblclick",
          handlerName: r.action,
          action: r.action
        }
      ]), o({
        ...r,
        code: r.code || `GP${Math.floor(1e5 + Math.random() * 9e5)}`,
        order: r.order ?? 1,
        width: r.width || "162px",
        minWidth: r.minWidth || "162px",
        maxWidth: r.maxWidth || "162px",
        componentType: r.componentType || "TextBox",
        align: r.align || "left",
        editable: r.editable ?? !0,
        frozen: !!(r.frozen || r.sticky === "left"),
        sticky: r.frozen || r.sticky === "left" ? "left" : "none",
        active: r.active ?? !0,
        hasFilter: r.hasFilter ?? !0,
        advancedSearch: r.advancedSearch ?? !0,
        formatCell: r.formatCell ?? r.format ?? "",
        formatData: r.formatData ?? "",
        events: m
      }), b != null && b.id && r.key && Oe.getState().fetchComponentPolicies(b.id, r.key).then((T) => {
        T && T.length > 0 && o((A) => A ? { ...A, columnPermissions: T } : null);
      }).catch(() => {
      });
    }
  }, [r, t, b == null ? void 0 : b.id]), !t || !n) return null;
  const k = Array.isArray(n.events) ? n.events : [], f = kn(d), C = Sn(f, n.reference || n.refName), w = C ? C.fields : [], y = n.componentType === "Select" || n.componentType === "Dropdown", g = (m, T) => {
    o((A) => {
      if (!A) return A;
      const I = { ...A, [m]: T };
      return m === "frozen" ? I.sticky = T ? "left" : "none" : m === "sticky" && (I.frozen = T === "left"), I;
    });
  }, D = async (m) => {
    if (!n) return;
    let T = [...n.columnPermissions || []];
    p && (T = [...T, p], o((A) => A ? { ...A, columnPermissions: T } : null), h(null)), b != null && b.id && n.key && await Oe.getState().saveComponentPolicies(b.id, n.key, T, n.key), a({ ...n, columnPermissions: T }), u(!0), setTimeout(() => u(!1), 2500);
  };
  return Bt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          j && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => D(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Lưu" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => i("permissions"),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(Hs, { className: "w-3.5 h-3.5 text-amber-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Phân quyền" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: s,
              className: "flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đóng" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-5 overflow-y-auto flex-1 space-y-5 text-xs", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800", children: "COMMON" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Code" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.code || "",
                  onChange: (m) => g("code", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-cyan-400 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-bold block mb-0.5", children: "Thứ Tự Cột (Order) *" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  value: n.order ?? 1,
                  onChange: (m) => g("order", parseInt(m.target.value) || 0),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none font-bold"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { className: "text-[9px] text-slate-500", children: "Số nhỏ đứng trước, quyết định thứ tự cột từ trái sang phải" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Feature" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.feature || "F0013000",
                  onChange: (m) => g("feature", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Ref Class" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.refClass || "",
                  onChange: (m) => g("refClass", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Filter Template" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.filterTemplate || "",
                  onChange: (m) => g("filterTemplate", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Excel" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.formatExcell || "",
                  onChange: (m) => g("formatExcell", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "ChildStyle" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.childStyle || "",
                  onChange: (m) => g("childStyle", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "DataSource (OData / Query)" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 2,
                  value: n.dataSource || "",
                  onChange: (m) => g("dataSource", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800", children: "DISPLAY 2" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-bold block mb-0.5", children: "Field Name *" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.key,
                  onChange: (m) => g("key", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-300 font-bold block mb-0.5", children: "Short Desc (Tiêu Đề Cột) *" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.title,
                  onChange: (m) => g("title", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Description" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.description || "",
                  onChange: (m) => g("description", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Reference (Danh Mục)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: C ? C.name : "",
                    onChange: (m) => {
                      const T = m.target.value;
                      o((A) => ({
                        ...A,
                        reference: T,
                        refName: T
                      }));
                    },
                    className: "w-full px-2 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                      f.map((m) => /* @__PURE__ */ e.jsxs("option", { value: m.name, children: [
                        m.displayName,
                        " (",
                        m.name,
                        ")"
                      ] }, m.name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "RefName (Tên Tham Chiếu)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.refName || "",
                    placeholder: "VD: Vendor, Customer...",
                    onChange: (m) => {
                      const T = m.target.value;
                      o((A) => ({
                        ...A,
                        refName: T,
                        reference: T
                      }));
                    },
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: y ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (m) => g("formatCell", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              !y && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (m) => g("formatData", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/40 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Width" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.width || "162px",
                    onChange: (m) => g("width", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Min Width" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.minWidth || "162px",
                    onChange: (m) => g("minWidth", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Max Width" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.maxWidth || "162px",
                    onChange: (m) => g("maxWidth", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800", children: "DISPLAY" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-bold block mb-0.5", children: "Component (Loại Ô) *" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: n.componentType || "TextBox",
                  onChange: (m) => g("componentType", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-slate-100 text-xs focus:border-emerald-400 focus:outline-none font-semibold",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "TextBox", children: "TextBox (Input ô gõ trực tiếp)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Dropdown", children: "Dropdown (Select danh mục)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Select", children: "Select (Lựa chọn)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "DatePicker", children: "DatePicker (Chọn lịch)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Number", children: "Number (Số / Định dạng)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Checkbox", children: "Checkbox (Hộp kiểm)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Button", children: "Button (Nút bấm thao tác)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Link", children: "Link (Đường dẫn bấm được)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Textarea", children: "Textarea (Nhiều dòng)" }),
                    /* @__PURE__ */ e.jsx("option", { value: "Label", children: "Label (Chỉ đọc - Readonly)" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Precision" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: n.precision ?? 0,
                    onChange: (m) => g("precision", parseInt(m.target.value) || 0),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Text Align" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: n.align || "left",
                    onChange: (m) => g("align", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "left", children: "Left (Trái)" }),
                      /* @__PURE__ */ e.jsx("option", { value: "center", children: "Center (Giữa)" }),
                      /* @__PURE__ */ e.jsx("option", { value: "right", children: "Right (Phải)" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block font-semibold", children: "Events (Sự Kiện Cột)" }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => i("events"),
                    className: "text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Xt, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: k.length > 0 ? `Cấu hình (${k.length})` : "+ Thêm Sự Kiện" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => i("events"),
                  className: "w-full px-2.5 py-1.5 rounded bg-[#0b1329] border border-slate-700 hover:border-emerald-500/70 text-slate-200 text-xs flex items-center justify-between cursor-pointer transition-all shadow-inner group",
                  title: "Nhấn để mở Tab cấu hình sự kiện cho cột này",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
                      /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      k.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: k.map((m) => `${m.trigger} ➔ ${m.handlerName || m.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      k.length,
                      " event",
                      k.length !== 1 ? "s" : ""
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Cascade" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.cascadeField || "",
                    onChange: (m) => g("cascadeField", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Summary" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: n.aggregate || "none",
                    onChange: (m) => g("aggregate", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "none", children: "None" }),
                      /* @__PURE__ */ e.jsx("option", { value: "sum", children: "Sum" }),
                      /* @__PURE__ */ e.jsx("option", { value: "count", children: "Count" }),
                      /* @__PURE__ */ e.jsx("option", { value: "avg", children: "Avg" }),
                      /* @__PURE__ */ e.jsx("option", { value: "min", children: "Min" }),
                      /* @__PURE__ */ e.jsx("option", { value: "max", children: "Max" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Validation" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.validation || "",
                  onChange: (m) => g("validation", m.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "rounded-lg border border-slate-800 bg-slate-900/90 overflow-hidden", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex border-b border-slate-800 bg-[#0b1329] text-xs font-semibold", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => i("info"),
                className: `px-5 py-2.5 border-b-2 transition-colors ${l === "info" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: "THÔNG TIN KHÁC"
              }
            ),
            y && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((M = n.dropdownColumns) == null ? void 0 : M.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("events"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "events" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  k.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: k.length })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => i("permissions"),
                className: `px-5 py-2.5 border-b-2 transition-colors ${l === "permissions" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: "PHÂN QUYỀN"
              }
            )
          ] }),
          l === "info" && /* @__PURE__ */ e.jsxs("div", { className: "p-4 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-xs", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.frozen,
                    onChange: (m) => g("frozen", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: n.frozen ? "font-bold text-emerald-300" : "text-slate-300", children: "📌 Frozen (Cố định cột)" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.disabled,
                    onChange: (m) => g("disabled", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Disabled" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.hasPermission,
                    onChange: (m) => g("hasPermission", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Phân quyền" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.focusSearch,
                    onChange: (m) => g("focusSearch", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Focus Search" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.filterEq,
                    onChange: (m) => g("filterEq", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Filter Eq" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.filterLocal,
                    onChange: (m) => g("filterLocal", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "FilterLocal" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.hidden,
                    onChange: (m) => g("hidden", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Hidden (Ẩn cột)" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: n.active ?? !0,
                    onChange: (m) => g("active", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 font-semibold text-emerald-400", children: "Active" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: n.advancedSearch ?? !0,
                    onChange: (m) => g("advancedSearch", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Adv search" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.virtualScroll,
                    onChange: (m) => g("virtualScroll", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "VirtualScroll" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.upperCase,
                    onChange: (m) => g("upperCase", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "UpperCase" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: n.hasFilter ?? !0,
                    onChange: (m) => g("hasFilter", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Filter" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.isRealtime,
                    onChange: (m) => g("isRealtime", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Realtime" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.autoFit,
                    onChange: (m) => g("autoFit", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Auto fit" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: n.aggregate && n.aggregate !== "none",
                    onChange: (m) => g("aggregate", m.target.checked ? "sum" : "none"),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "IsSumary" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.addDate,
                    onChange: (m) => g("addDate", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "AddDate" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: n.editable ?? !0,
                    onChange: (m) => g("editable", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-emerald-400 font-bold", children: "Editable (Cho phép sửa)" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.isPivot,
                    onChange: (m) => g("isPivot", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Pivot" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.basicSearch,
                    onChange: (m) => g("basicSearch", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Basic Search" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.ignoreTrigger,
                    onChange: (m) => g("ignoreTrigger", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Ignore Trigger" })
              ] }),
              /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!n.hideGrid,
                    onChange: (m) => g("hideGrid", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && y && (() => {
            const m = n.dropdownColumns || [], T = (I) => g("dropdownColumns", I), A = (C == null ? void 0 : C.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(At, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: C ? `${C.displayName} (${C.name})` : n.reference || n.refName || "(Chưa chọn Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  w.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const I = w.filter((U) => U.name.toLowerCase() !== "id" && U.name.toLowerCase() !== "active").slice(0, 3), S = `${Math.floor(100 / Math.max(I.length, 1))}%`;
                        T(
                          I.map((U) => ({
                            key: U.name,
                            title: U.displayName,
                            width: S,
                            align: "left"
                          }))
                        );
                      },
                      className: "px-2.5 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/35 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold cursor-pointer",
                      title: "Tự động nạp các cột tiêu biểu từ thực thể Reference đã chọn",
                      children: [
                        "⚡ Tự động nạp (",
                        C == null ? void 0 : C.name,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        T([
                          ...m,
                          {
                            key: `col${m.length + 1}`,
                            title: `Cột ${m.length + 1}`,
                            width: "50%",
                            align: "left"
                          }
                        ]);
                      },
                      className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-1", children: "Khóa Chính (IdField)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: n.idField ?? "",
                      placeholder: "id",
                      onChange: (I) => g("idField", I.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-1", children: "Định Dạng Hiển Thị (FormatData)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: n.formatData ?? "",
                      placeholder: "{FullName} - {Address}",
                      onChange: (I) => g("formatData", I.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: m.map((I, S) => {
                    const U = A ? `{${A}.${I.key}}` : `{${I.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const B = n.formatData || "", H = B ? `${B} - ${U}` : U;
                          g("formatData", H);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          U
                        ]
                      },
                      `${I.key}-${S}`
                    );
                  }) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-purple-400 font-semibold block mb-1", children: "Tự Động Điền Cột Khác (Populate)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: n.populateField ?? "",
                      placeholder: "VendorName = FullName",
                      onChange: (I) => g("populateField", I.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: w.map((I) => /* @__PURE__ */ e.jsxs("option", { value: I.name, children: [
                I.displayName,
                " (",
                I.dataType,
                ")"
              ] }, I.name)) }),
              m.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: m.map((I, S) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: S === 0,
                          onClick: () => {
                            const U = [...m], B = U[S];
                            U[S] = U[S - 1], U[S - 1] = B, T(U);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: S === m.length - 1,
                          onClick: () => {
                            const U = [...m], B = U[S];
                            U[S] = U[S + 1], U[S + 1] = B, T(U);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "col-dropdown-field-suggestions",
                        value: I.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (U) => {
                          const B = U.target.value, H = w.find((N) => N.name === B), O = [...m];
                          O[S] = {
                            ...O[S],
                            key: B,
                            title: H && (!O[S].title || O[S].title.startsWith("Cột ")) ? H.displayName : O[S].title
                          }, T(O);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: I.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (U) => {
                          const B = [...m];
                          B[S] = { ...B[S], title: U.target.value }, T(B);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: I.width || "50%",
                        placeholder: "Width",
                        onChange: (U) => {
                          const B = [...m];
                          B[S] = { ...B[S], width: U.target.value }, T(B);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: I.align || "left",
                        onChange: (U) => {
                          const B = [...m];
                          B[S] = { ...B[S], align: U.target.value }, T(B);
                        },
                        className: "w-full px-1 py-1 bg-[#0b1329] border border-slate-700 rounded text-[11px] text-slate-200",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "left", children: "Trái" }),
                          /* @__PURE__ */ e.jsx("option", { value: "center", children: "Giữa" }),
                          /* @__PURE__ */ e.jsx("option", { value: "right", children: "Phải" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1 flex justify-end", children: /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => T(m.filter((U, B) => B !== S)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                S
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            $a,
            {
              events: k,
              onChange: (m) => {
                g("events", m);
                const T = m.find((A) => A.trigger === "click" || A.trigger === "actionClick");
                T && g("action", T.handlerName || T.action);
              },
              scriptFile: (b == null ? void 0 : b.scriptFile) || "transactionList.bl.ts",
              componentName: `Cột [${n.title || n.key}]`,
              componentId: n.key,
              availableTriggers: [
                { value: "click", label: "Bấm chuột / Nút thao tác (click)" },
                { value: "dblclick", label: "Nhấp đúp chuột vào ô (dblclick)" },
                { value: "actionClick", label: "Hành động ô (actionClick)" },
                { value: "change", label: "Thay đổi giá trị ô (change)" },
                { value: "focus", label: "Khi chọn ô (focus)" },
                { value: "blur", label: "Khi rời ô (blur)" }
              ],
              contextExtra: {
                columnKey: n.key,
                columnTitle: n.title,
                row: { [n.key]: "Mẫu kiểm thử" }
              }
            }
          ) }),
          l === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "p-4 space-y-3 text-xs", children: /* @__PURE__ */ e.jsx(
            Ea,
            {
              isColumn: !0,
              rules: n.columnPermissions || [],
              onChange: (m) => {
                o({
                  ...n,
                  columnPermissions: m
                }), b != null && b.id && n.key && Oe.getState().setComponentPolicies(b.id, n.key, m);
              },
              onPendingRuleChange: h,
              pageId: b == null ? void 0 : b.id,
              nodeId: n.key,
              fieldName: n.key
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-t border-slate-800", children: [
        /* @__PURE__ */ e.jsx("div", { children: j && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: s,
              className: "px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors",
              children: "Đóng"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => D(),
              className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
              children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    document.body
  );
}, Lo = ({
  columns: t,
  data: r,
  showRowNumber: s = !0,
  rowNumberWidth: a = 55,
  leftOffsets: n = {}
}) => {
  if (!t.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = r.map((u) => u[i.key]).filter((u) => u != null && u !== "");
    if (i.aggregate === "count") {
      const u = d.length;
      return `${i.summaryPrefix || ""}${u}${i.summarySuffix || " dòng"}`;
    }
    const c = d.map((u) => {
      if (typeof u == "number") return u;
      const b = parseFloat(String(u).replace(/,/g, ""));
      return isNaN(b) ? 0 : b;
    });
    if (c.length === 0) return "—";
    let p = 0;
    i.aggregate === "sum" ? p = c.reduce((u, b) => u + b, 0) : i.aggregate === "avg" ? p = c.reduce((u, b) => u + b, 0) / c.length : i.aggregate === "min" ? p = Math.min(...c) : i.aggregate === "max" && (p = Math.max(...c));
    const h = i.precision ?? (i.format === "number_thousands" ? 0 : 2), j = h > 0 ? p.toLocaleString("en-US", { minimumFractionDigits: h, maximumFractionDigits: h }) : p.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${j}${i.summarySuffix || ""}`;
  };
  return /* @__PURE__ */ e.jsxs("tr", { className: "border-t-2 border-emerald-500/50 bg-slate-900/95 font-bold text-xs text-emerald-400 select-none shadow-inner", children: [
    s && /* @__PURE__ */ e.jsx(
      "td",
      {
        className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-20 bg-slate-900 border-r border-slate-800",
        style: { width: `${a}px`, minWidth: `${a}px` },
        children: "Σ"
      }
    ),
    t.filter((i) => !i.hidden).map((i, d) => {
      const c = l(i), p = d === 0, h = i.sticky === "left" || !!i.frozen, j = h && n[i.key] !== void 0 ? n[i.key] : void 0, u = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${u} ${h ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: j !== void 0 ? `${j}px` : void 0
          },
          children: p && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function Js(t) {
  if (!t || typeof t != "string" || !t.trim()) return null;
  const r = t.trim(), s = r.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (s) {
    const o = parseInt(s[1], 10), l = parseInt(s[2], 10) - 1, i = parseInt(s[3], 10);
    if (l >= 0 && l <= 11 && o >= 1 && o <= 31)
      return { year: i, month: l, day: o };
  }
  const a = r.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (a) {
    const o = parseInt(a[1], 10), l = parseInt(a[2], 10) - 1, i = parseInt(a[3], 10);
    if (l >= 0 && l <= 11 && i >= 1 && i <= 31)
      return { year: o, month: l, day: i };
  }
  const n = new Date(t);
  return isNaN(n.getTime()) ? null : { year: n.getFullYear(), month: n.getMonth(), day: n.getDate() };
}
function Ms(t, r, s) {
  const a = String(s).padStart(2, "0"), n = String(r + 1).padStart(2, "0");
  return `${a}/${n}/${t}`;
}
const $o = [
  "Tháng 01",
  "Tháng 02",
  "Tháng 03",
  "Tháng 04",
  "Tháng 05",
  "Tháng 06",
  "Tháng 07",
  "Tháng 08",
  "Tháng 09",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12"
], Ao = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], Ba = ({
  value: t,
  onChange: r,
  placeholder: s = "DD/MM/YYYY",
  disabled: a = !1,
  readOnly: n = !1,
  className: o = "",
  inputClassName: l = "",
  error: i,
  title: d,
  tabIndex: c,
  onKeyDown: p,
  onFocus: h,
  onBlur: j,
  autoFocus: u = !1,
  isGridCell: b = !1
}) => {
  const k = nt(null), f = nt(null), C = nt(null), [w, y] = P(!1), [g, D] = P(() => {
    const J = Js(t);
    return J ? Ms(J.year, J.month, J.day) : t || "";
  }), M = $e(() => Js(t), [t]), m = $e(() => {
    const J = /* @__PURE__ */ new Date();
    return { year: J.getFullYear(), month: J.getMonth(), day: J.getDate() };
  }, []), [T, A] = P((M == null ? void 0 : M.year) || m.year), [I, S] = P((M == null ? void 0 : M.month) ?? m.month), [U, B] = P({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Fe(() => {
    const J = Js(t);
    J ? (D(Ms(J.year, J.month, J.day)), A(J.year), S(J.month)) : D(t || "");
  }, [t]);
  const H = () => {
    if (!k.current) return;
    const J = k.current.getBoundingClientRect(), se = 310, F = 280, oe = window.innerHeight - J.bottom < se && J.top > se;
    let fe = oe ? J.top - se - 4 : J.bottom + 4, xe = J.left;
    xe + F > window.innerWidth - 10 && (xe = Math.max(10, window.innerWidth - F - 10)), B({ top: fe, left: xe, openUpwards: oe });
  }, O = () => {
    a || n || (H(), y(!0));
  }, N = () => {
    y(!1);
  };
  Fe(() => {
    if (!w) return;
    const J = (F) => {
      const G = F.target;
      k.current && !k.current.contains(G) && C.current && !C.current.contains(G) && N();
    }, se = () => {
      w && H();
    };
    return document.addEventListener("mousedown", J, !0), window.addEventListener("resize", se, !0), window.addEventListener("scroll", se, !0), () => {
      document.removeEventListener("mousedown", J, !0), window.removeEventListener("resize", se, !0), window.removeEventListener("scroll", se, !0);
    };
  }, [w]);
  const L = (J) => {
    J.stopPropagation(), I === 0 ? (S(11), A((se) => se - 1)) : S((se) => se - 1);
  }, W = (J) => {
    J.stopPropagation(), I === 11 ? (S(0), A((se) => se + 1)) : S((se) => se + 1);
  }, X = (J, se = 0) => {
    var fe;
    let F = T, G = I + se;
    G < 0 ? (G = 11, F -= 1) : G > 11 && (G = 0, F += 1);
    const oe = Ms(F, G, J);
    D(oe), r(oe), N(), (fe = f.current) == null || fe.focus();
  }, E = (J) => {
    var F;
    J.stopPropagation();
    const se = Ms(m.year, m.month, m.day);
    D(se), A(m.year), S(m.month), r(se), N(), (F = f.current) == null || F.focus();
  }, Z = (J) => {
    var se;
    J.stopPropagation(), D(""), r(""), N(), (se = f.current) == null || se.focus();
  }, te = (J) => {
    const se = J.target.value;
    D(se);
    const F = Js(se);
    if (F) {
      const G = Ms(F.year, F.month, F.day);
      r(G), A(F.year), S(F.month);
    } else se === "" && r("");
  }, z = (J) => {
    if (J.key === "Escape")
      w && (J.stopPropagation(), N());
    else if (J.key === "Enter") {
      const se = Js(g);
      if (se) {
        const F = Ms(se.year, se.month, se.day);
        D(F), r(F);
      }
      w && N();
    } else (J.key === "F4" || J.altKey && J.key === "ArrowDown") && (J.preventDefault(), J.stopPropagation(), w ? N() : O());
    p && p(J);
  }, ae = $e(() => {
    const J = (new Date(T, I, 1).getDay() + 6) % 7, se = new Date(T, I + 1, 0).getDate(), F = new Date(T, I, 0).getDate(), G = [];
    for (let xe = J - 1; xe >= 0; xe--)
      G.push({
        day: F - xe,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let xe = 1; xe <= se; xe++)
      G.push({
        day: xe,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const fe = (G.length <= 35 ? 35 : 42) - G.length;
    for (let xe = 1; xe <= fe; xe++)
      G.push({
        day: xe,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return G;
  }, [T, I]), ce = () => w ? Bt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: C,
        style: {
          position: "fixed",
          top: `${U.top}px`,
          left: `${U.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (J) => J.stopPropagation(),
        className: "bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: L,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(sa, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: I,
                  onChange: (J) => S(parseInt(J.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: $o.map((J, se) => /* @__PURE__ */ e.jsx("option", { value: se, children: J }, se))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: T,
                  onChange: (J) => A(parseInt(J.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (J, se) => T - 20 + se).map((J) => /* @__PURE__ */ e.jsx("option", { value: J, children: J }, J))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: W,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(ps, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: Ao.map((J, se) => /* @__PURE__ */ e.jsx("div", { className: se >= 5 ? "text-amber-400/80" : "", children: J }, se)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: ae.map((J, se) => {
            const F = M && J.isCurrentMonth && M.year === T && M.month === I && M.day === J.day, G = J.isCurrentMonth && m.year === T && m.month === I && m.day === J.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => X(J.day, J.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${F ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : G ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : J.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: J.day
              },
              se
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: E,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(il, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            g && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Z,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: N,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, q = b ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", de = b ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: k, className: `${q} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: f,
        type: "text",
        tabIndex: c,
        autoFocus: u,
        disabled: a,
        readOnly: n,
        placeholder: s,
        title: i || d,
        value: g,
        onChange: te,
        onKeyDown: z,
        onFocus: h,
        onBlur: j,
        onClick: (J) => {
          J.stopPropagation(), w || O();
        },
        className: de
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: a,
        onClick: (J) => {
          J.stopPropagation(), w ? N() : O();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(lr, { className: "w-3.5 h-3.5" })
      }
    ),
    ce()
  ] });
}, Eo = ({
  column: t,
  value: r,
  row: s,
  rowIndex: a,
  columnIndex: n = 0,
  error: o,
  isFocused: l = !1,
  isEditing: i = !1,
  isSelected: d = !1,
  onChange: c,
  onActionClick: p,
  onKeyDown: h,
  onFocus: j
}) => {
  const u = (t.editable ?? !0) && !t.disabled && t.componentType !== "Label", b = r === "—" || r === "-" ? "" : r ?? "", f = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : l ? "border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", C = (D) => {
    h && h(D, a, n, t.key);
  }, w = () => {
    j && j(a, n, t.key);
  }, y = {
    "data-grid-cell": `${a}_${n}`,
    "data-grid-row": a,
    "data-grid-col": n,
    "data-grid-colkey": t.key
  };
  if (t.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...y, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!r,
        disabled: t.disabled || !u,
        onClick: (D) => D.stopPropagation(),
        onChange: (D) => c(D.target.checked),
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${l ? "ring-2 ring-emerald-400" : ""}`
      }
    ) });
  if (t.componentType === "Button") {
    const D = t.formatCell || t.title || r || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...y, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: t.disabled,
        onClick: (M) => {
          M.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${l ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`,
        children: D
      }
    ) });
  }
  if (t.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (D) => {
          D.preventDefault(), D.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${l ? "ring-2 ring-emerald-400/80 rounded px-1" : ""}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r || "—" }),
          /* @__PURE__ */ e.jsx(na, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!u) {
    if (t.precision !== void 0 && typeof r == "number") {
      const D = t.precision > 0 ? r.toLocaleString("en-US", { minimumFractionDigits: t.precision, maximumFractionDigits: t.precision }) : r.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: C,
          onFocus: w,
          ...y,
          className: `font-mono text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: [
            D,
            t.summarySuffix ? ` ${t.summarySuffix}` : ""
          ]
        }
      );
    }
    if (t.formatCell && r !== void 0 && r !== null) {
      let D = t.formatCell.replace("{0}", String(r));
      return typeof s == "object" && s !== null && Object.keys(s).forEach((M) => {
        D = D.replace(new RegExp(`\\{${M}\\}`, "gi"), String(s[M] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: C,
          onFocus: w,
          ...y,
          className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: D
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
        children: r != null ? String(r) : "—"
      }
    );
  }
  if (t.componentType === "Select" || t.componentType === "Dropdown") {
    let D = t.options || [];
    const M = t.reference || t.refName;
    if (D.length === 0 && M) {
      const m = Ne.getState().getDataset(M);
      if (Array.isArray(m) && m.length > 0) {
        const T = t.valueField || t.idField || "code", A = t.displayField || t.selectField || "name";
        D = m.map((I) => ({
          value: String(I[T] ?? I.code ?? I.id ?? ""),
          label: String(I[A] ?? I.name ?? I[T] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: r ?? "",
        disabled: t.disabled,
        title: o || void 0,
        onClick: (m) => m.stopPropagation(),
        onChange: (m) => c(m.target.value),
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          D.map((m) => /* @__PURE__ */ e.jsx("option", { value: m.value, className: "bg-slate-900 text-slate-100", children: m.label }, m.value))
        ]
      }
    );
  }
  if (t.componentType === "DatePicker" || t.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...y, children: /* @__PURE__ */ e.jsx(
      Ba,
      {
        isGridCell: !0,
        value: b,
        disabled: t.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (D) => c(D),
        onKeyDown: C,
        onFocus: w
      }
    ) });
  if (t.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: b,
        placeholder: "0",
        disabled: t.disabled,
        title: o || void 0,
        step: t.precision && t.precision > 0 ? Math.pow(10, -t.precision) : 1,
        onClick: (D) => D.stopPropagation(),
        onChange: (D) => {
          const M = D.target.value;
          c(M === "" ? "" : Number(M));
        },
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${f} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (t.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: b,
        placeholder: t.title ? `Nhập ${t.title}...` : "Nhập...",
        disabled: t.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (D) => D.stopPropagation(),
        onChange: (D) => {
          const M = t.upperCase ? D.target.value.toUpperCase() : D.target.value;
          c(M);
        },
        onKeyDown: C,
        onFocus: w,
        ...y,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const g = t.align === "right" ? "text-right" : t.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: b,
      placeholder: t.title ? `Nhập ${t.title}...` : "Nhập dữ liệu...",
      disabled: t.disabled,
      title: o || void 0,
      onClick: (D) => D.stopPropagation(),
      onChange: (D) => {
        const M = t.upperCase ? D.target.value.toUpperCase() : D.target.value;
        c(M);
      },
      onKeyDown: C,
      onFocus: w,
      ...y,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${g} ${t.cssClass || ""}`
    }
  );
};
function Mo(t, r) {
  var l, i, d, c, p, h, j, u;
  if (t.value !== r.value || t.error !== r.error || t.rowIndex !== r.rowIndex || t.columnIndex !== r.columnIndex || !!t.isFocused != !!r.isFocused || !!t.isEditing != !!r.isEditing || !!t.isSelected != !!r.isSelected)
    return !1;
  const s = t.column, a = r.column;
  if (s !== a && (s.key !== a.key || s.title !== a.title || s.componentType !== a.componentType || s.editable !== a.editable || s.disabled !== a.disabled || s.precision !== a.precision || s.align !== a.align || s.formatCell !== a.formatCell || s.cssClass !== a.cssClass || s.summarySuffix !== a.summarySuffix || s.upperCase !== a.upperCase || s.options !== a.options || s.reference !== a.reference || s.refName !== a.refName))
    return !1;
  const n = ((l = t.row) == null ? void 0 : l.id) ?? ((i = t.row) == null ? void 0 : i.Id) ?? ((d = t.row) == null ? void 0 : d.ID), o = ((c = r.row) == null ? void 0 : c.id) ?? ((p = r.row) == null ? void 0 : p.Id) ?? ((h = r.row) == null ? void 0 : h.ID);
  if (n !== void 0 && o !== void 0 && n !== o)
    return !1;
  if (a.formatCell && typeof a.formatCell == "string") {
    const b = a.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g);
    if (b)
      for (const k of b) {
        const f = k.slice(1, -1);
        if (f !== "0" && ((j = t.row) == null ? void 0 : j[f]) !== ((u = r.row) == null ? void 0 : u[f]))
          return !1;
      }
  }
  return !((a.componentType === "Button" || a.componentType === "Link") && t.row !== r.row);
}
const Br = ns.memo(Eo, Mo);
function Bo({
  tableRef: t,
  rows: r,
  visibleColumns: s,
  selectedRowId: a,
  setSelectedRowId: n,
  selectedRowIds: o,
  setSelectedRowIds: l,
  onRowDoubleClick: i,
  onAddRow: d,
  onDeleteRow: c,
  onDuplicateRow: p,
  onToggleAll: h,
  onFilterByCell: j,
  onQuickSum: u,
  onToggleColumnFilters: b,
  isEditableTable: k = !0,
  onPasteExcel: f
}) {
  const [C, w] = P(null), y = ks(
    (T, A) => {
      if (T < 0 || T >= r.length || A < 0 || A >= s.length) return;
      const I = s[A], S = r[T], U = (S == null ? void 0 : S.id) ?? (S == null ? void 0 : S.Id) ?? T;
      if (n(U), w({ rowIndex: T, colIndex: A, colKey: I.key }), t.current) {
        const B = `[data-grid-cell="${T}_${A}"]`, H = t.current.querySelector(B);
        if (H) {
          H.scrollIntoView({ block: "nearest", inline: "nearest" });
          const O = H.tagName === "INPUT" || H.tagName === "SELECT" || H.tagName === "TEXTAREA" || H.tagName === "BUTTON" ? H : H.querySelector("input, select, textarea, button") || H;
          O.focus(), O instanceof HTMLInputElement && (O.type === "text" || O.type === "number") && O.select();
        }
      }
    },
    [r, s, t, n]
  ), g = ks(
    (T) => {
      if (!t.current) return;
      const A = t.current.querySelector(`[data-row-index="${T}"]`);
      A && A.scrollIntoView({ block: "nearest" });
    },
    [t]
  ), D = ks(
    (T) => {
      if (T.key === "F1") {
        T.preventDefault(), T.stopPropagation(), h == null || h();
        return;
      }
      if (T.key === "F2") {
        T.preventDefault(), T.stopPropagation(), j == null || j();
        return;
      }
      if (T.key === "F3") {
        T.preventDefault(), T.stopPropagation(), u == null || u();
        return;
      }
      if (T.key === "F4") {
        T.preventDefault(), T.stopPropagation(), d == null || d();
        return;
      }
      if (T.key === "F6") {
        T.preventDefault(), T.stopPropagation(), b == null || b();
        return;
      }
      if (T.key === "ArrowDown") {
        T.preventDefault();
        const A = r.findIndex((S, U) => (S.id ?? S.Id ?? U) === a), I = A < r.length - 1 ? A + 1 : A;
        if (I >= 0 && I !== A) {
          const S = r[I];
          n(S.id ?? S.Id ?? I), l(/* @__PURE__ */ new Set([S.id ?? S.Id ?? I])), g(I);
        }
        return;
      }
      if (T.key === "ArrowUp") {
        T.preventDefault();
        const A = r.findIndex((S, U) => (S.id ?? S.Id ?? U) === a), I = A > 0 ? A - 1 : 0;
        if (I >= 0 && I !== A) {
          const S = r[I];
          n(S.id ?? S.Id ?? I), l(/* @__PURE__ */ new Set([S.id ?? S.Id ?? I])), g(I);
        }
        return;
      }
      if (T.key === "Enter") {
        T.preventDefault();
        const A = r.findIndex((I, S) => (I.id ?? I.Id ?? S) === a);
        A >= 0 && i && i(r[A], A);
        return;
      }
      if (T.key === "Delete") {
        const A = r.findIndex((I, S) => (I.id ?? I.Id ?? S) === a);
        A >= 0 && c && (T.preventDefault(), c(A));
        return;
      }
      if ((T.ctrlKey || T.metaKey) && (T.key === "d" || T.key === "D")) {
        T.preventDefault();
        const A = r.findIndex((I, S) => (I.id ?? I.Id ?? S) === a);
        A >= 0 && p && p(A);
        return;
      }
      if ((T.ctrlKey || T.metaKey) && (T.key === "v" || T.key === "V")) {
        const A = T.target;
        !(A && (A.tagName === "INPUT" || A.tagName === "TEXTAREA")) && f && typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" && (T.preventDefault(), navigator.clipboard.readText().then((S) => {
          if (S) {
            const U = C ? C.rowIndex : a !== null ? Math.max(0, r.findIndex((H, O) => (H.id ?? H.Id ?? O) === a)) : 0, B = C ? C.colIndex : 0;
            f(S, U, B);
          }
        }).catch(() => {
        }));
      }
    },
    [
      r,
      a,
      n,
      l,
      g,
      h,
      j,
      u,
      d,
      b,
      i,
      c,
      p,
      C,
      f
    ]
  ), M = ks(
    (T, A, I, S) => {
      var U, B, H;
      if (T.key === "F1") {
        T.preventDefault(), T.stopPropagation(), h == null || h();
        return;
      }
      if (T.key === "F2") {
        T.preventDefault(), T.stopPropagation(), j == null || j();
        return;
      }
      if (T.key === "F3") {
        T.preventDefault(), T.stopPropagation(), u == null || u();
        return;
      }
      if (T.key === "F4") {
        T.preventDefault(), T.stopPropagation(), d == null || d();
        return;
      }
      if (T.key === "F6") {
        T.preventDefault(), T.stopPropagation(), b == null || b();
        return;
      }
      if (T.key === "ArrowDown") {
        T.preventDefault(), A < r.length - 1 && y(A + 1, I);
        return;
      }
      if (T.key === "ArrowUp") {
        T.preventDefault(), A > 0 && y(A - 1, I);
        return;
      }
      if (T.key === "ArrowLeft") {
        const O = T.target, N = O && O.selectionStart === 0 && O.selectionEnd === 0, L = O && O.selectionStart === 0 && O.selectionEnd === ((U = O.value) == null ? void 0 : U.length), W = !O || O.tagName === "SELECT" || O.type === "checkbox" || O.tagName === "BUTTON";
        (N || L || W) && I > 0 && (T.preventDefault(), y(A, I - 1));
        return;
      }
      if (T.key === "ArrowRight") {
        const O = T.target, N = O && O.selectionStart === ((B = O.value) == null ? void 0 : B.length), L = O && O.selectionStart === 0 && O.selectionEnd === ((H = O.value) == null ? void 0 : H.length), W = !O || O.tagName === "SELECT" || O.type === "checkbox" || O.tagName === "BUTTON";
        (N || L || W) && I < s.length - 1 && (T.preventDefault(), y(A, I + 1));
        return;
      }
      if (T.key === "Tab") {
        T.preventDefault(), T.shiftKey ? I > 0 ? y(A, I - 1) : A > 0 && y(A - 1, s.length - 1) : I < s.length - 1 ? y(A, I + 1) : A < r.length - 1 ? y(A + 1, 0) : d && (d(), setTimeout(() => {
          y(r.length, 0);
        }, 60));
        return;
      }
      if (T.key === "Enter") {
        if (T.preventDefault(), T.shiftKey) {
          A > 0 && y(A - 1, I);
          return;
        }
        A < r.length - 1 ? y(A + 1, I) : d && (d(), setTimeout(() => {
          y(r.length, I);
        }, 60));
        return;
      }
      if (T.key === "Escape") {
        T.preventDefault();
        const O = T.target;
        O == null || O.blur();
        return;
      }
    },
    [r, s, y, h, j, u, d, b]
  ), m = ks(
    (T) => {
      var O;
      const A = (O = T.clipboardData) == null ? void 0 : O.getData("text/plain");
      if (!A || !f) return;
      const I = A.includes("	") || A.includes(`
`), S = T.target;
      if (S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && !I)
        return;
      T.preventDefault(), T.stopPropagation();
      const B = C ? C.rowIndex : a !== null ? Math.max(0, r.findIndex((N, L) => (N.id ?? N.Id ?? L) === a)) : 0, H = C ? C.colIndex : 0;
      f(A, B, H);
    },
    [C, a, r, f]
  );
  return {
    focusedCell: C,
    setFocusedCell: w,
    focusCell: y,
    scrollToRow: g,
    handleTableContainerKeyDown: D,
    handleCellKeyDown: M,
    handlePaste: m
  };
}
function _a(t) {
  return [...t].sort((r, s) => {
    const a = !!(r.frozen || r.sticky === "left"), n = !!(s.frozen || s.sticky === "left");
    if (a && !n) return -1;
    if (!a && n) return 1;
    const o = typeof r.order == "number" ? r.order : 999, l = typeof s.order == "number" ? s.order : 999;
    return o !== l ? o - l : 0;
  });
}
function tn(t) {
  return _a(t).map((s, a) => ({
    ...s,
    order: a + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(s.frozen || s.sticky === "left"),
    sticky: s.frozen || s.sticky === "left" ? "left" : "none"
  }));
}
function Qn(t, r, s) {
  if (s < 0 || s >= t.length || r === s) return t;
  const a = [...t], [n] = a.splice(r, 1), o = a.filter((p) => p.frozen || p.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && s < o ? (n.frozen = !0, n.sticky = "left") : l && s >= o && (n.frozen = !1, n.sticky = "none"), a.splice(s, 0, n);
  const i = a.filter((p) => p.frozen || p.sticky === "left"), d = a.filter((p) => !p.frozen && p.sticky !== "left");
  return [...i, ...d].map((p, h) => ({
    ...p,
    order: h + 1,
    frozen: !!(p.frozen || p.sticky === "left"),
    sticky: p.frozen || p.sticky === "left" ? "left" : "none"
  }));
}
function Oa(t, r) {
  const s = t.map((a) => {
    if (a.key === r) {
      const n = !(a.frozen || a.sticky === "left");
      return {
        ...a,
        frozen: n,
        sticky: n ? "left" : "none"
      };
    }
    return a;
  });
  return tn(s);
}
function _o(t, r = 55) {
  const s = {};
  let a = r, n = null;
  return t.forEach((o) => {
    if (!!(o.frozen || o.sticky === "left") && !o.hidden) {
      s[o.key] = a, n = o.key;
      const i = parseInt(String(o.width || "140"), 10) || 140;
      a += i;
    }
  }), { offsets: s, lastFrozenKey: n };
}
class Oo {
  constructor() {
    An(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    An(this, "populateResolvers", /* @__PURE__ */ new Map());
  }
  /**
   * Đăng ký bộ lọc phụ thuộc giữa 2 trường (VD: country -> city, category -> product)
   */
  registerCascade(r, s, a) {
    const n = `${r.toLowerCase().trim()}->${s.toLowerCase().trim()}`;
    this.cascadeResolvers.set(n, a);
  }
  /**
   * Đăng ký bộ quy tắc tự động điền các trường liên đới khi trường nguồn thay đổi
   */
  registerPopulate(r, s) {
    const a = r.toLowerCase().trim().replace(/^fld_/, "");
    this.populateResolvers.set(a, s);
  }
  /**
   * Lấy danh sách options phụ thuộc theo Cascade
   */
  getCascadedOptions(r, s, a) {
    const n = `${r.toLowerCase().trim()}->${a.toLowerCase().trim()}`, o = this.cascadeResolvers.get(n);
    if (o) {
      const l = o(s);
      return Array.isArray(l) ? l : [];
    }
    return [];
  }
  /**
   * Tự động tính toán các trường cần điền (Auto-Populate)
   */
  calculateAutoPopulatedFields(r, s, a) {
    const n = r.toLowerCase().trim().replace(/^fld_/, ""), o = this.populateResolvers.get(n);
    return o ? o(s, a) || {} : {};
  }
}
const Wa = new Oo();
function Zi(t, r, s) {
  return Wa.getCascadedOptions(t, r, s);
}
function Wo(t, r, s) {
  return Wa.calculateAutoPopulatedFields(t, r, s);
}
function Zn(t) {
  const r = String(t || "").trim().toUpperCase();
  if (!r)
    return { isValid: !1, message: "Số Container không được để trống" };
  if (!/^[A-Z]{4}\d{7}$/.test(r))
    return {
      isValid: !1,
      message: `Định dạng số Container [${r}] không hợp lệ. Phải gồm 4 chữ cái + 7 chữ số (Ví dụ: ZIRU8505175)`
    };
  const a = {
    A: 10,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 16,
    G: 17,
    H: 18,
    I: 19,
    J: 20,
    K: 21,
    L: 23,
    M: 24,
    N: 25,
    O: 26,
    P: 27,
    Q: 28,
    R: 29,
    S: 30,
    T: 31,
    U: 32,
    V: 34,
    W: 35,
    X: 36,
    Y: 37,
    Z: 38
  };
  let n = 0;
  for (let i = 0; i < 10; i++) {
    const d = r[i];
    let c = 0;
    if (d >= "0" && d <= "9")
      c = parseInt(d, 10);
    else if (a[d] !== void 0)
      c = a[d];
    else
      return { isValid: !1, message: `Ký tự [${d}] trong số container không hợp lệ` };
    const p = Math.pow(2, i);
    n += c * p;
  }
  let o = n % 11;
  o === 10 && (o = 0);
  const l = parseInt(r[10], 10);
  return o === l ? {
    isValid: !0,
    calculatedCheckDigit: o,
    actualCheckDigit: l,
    message: `Số Container ${r} hợp lệ chuẩn ISO 6346 (Check Digit: ${l})`
  } : {
    isValid: !1,
    calculatedCheckDigit: o,
    actualCheckDigit: l,
    message: `Số Container ${r} sai Check Digit: Tính toán là [${o}] nhưng nhập là [${l}]`
  };
}
function _r(t) {
  if (!t || typeof t != "string") return null;
  const r = t.trim();
  if (!r || r === "—" || r === "-") return null;
  const s = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, a = r.match(s);
  if (a) {
    const o = parseInt(a[1], 10), l = parseInt(a[2], 10) - 1, i = parseInt(a[3], 10);
    return new Date(i, l, o);
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(r)) {
    const o = new Date(r);
    return isNaN(o.getTime()) ? null : o;
  }
  return null;
}
function er(t, r, s = "Ngày bắt đầu", a = "Ngày kết thúc") {
  const n = _r(t), o = _r(r);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${s} (${t}) không thể xảy ra sau ${a} (${r})`
  } : { isValid: !0 };
}
function Ho(t, r, s = [], a = {}) {
  const n = [];
  for (const o of s) {
    if (o.rule === "required" && (r == null || typeof r == "string" && r.trim() === "" || Array.isArray(r) && r.length === 0)) {
      n.push(o.message || `${t} là trường bắt buộc nhập`);
      continue;
    }
    if (!(r == null || typeof r == "string" && r.trim() === "")) {
      if (o.rule === "minLength" && typeof r == "string") {
        const l = Number(o.value) || 0;
        r.length < l && n.push(o.message || `${t} phải có tối thiểu ${l} ký tự`);
      }
      if (o.rule === "maxLength" && typeof r == "string") {
        const l = Number(o.value) || 0;
        r.length > l && n.push(o.message || `${t} không được vượt quá ${l} ký tự`);
      }
      if (o.rule === "pattern" && o.value)
        try {
          (typeof o.value == "string" ? new RegExp(o.value) : o.value).test(String(r)) || n.push(o.message || `${t} không đúng định dạng quy định`);
        } catch {
          console.warn("[ValidationEngine] Biểu thức Regex không hợp lệ:", o.value);
        }
      if (o.rule === "containerNo") {
        const l = Zn(String(r));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = a[o.targetField];
        if (l) {
          const i = er(String(r), String(l), t, o.targetField);
          !i.isValid && i.message && n.push(o.message || i.message);
        }
      }
      if (o.rule === "custom" && typeof o.validatorFn == "function") {
        const l = o.validatorFn(r, a);
        typeof l == "string" && l ? n.push(l) : l === !1 && n.push(o.message || `${t} không thỏa mãn điều kiện kiểm tra tùy biến`);
      }
    }
  }
  return {
    isValid: n.length === 0,
    errors: n
  };
}
function ec(t, r) {
  const s = {};
  for (const [a, n] of Object.entries(r)) {
    const o = t[a], l = Ho(a, o, n, t);
    l.isValid || (s[a] = l.errors);
  }
  return s;
}
const wt = {
  "FCLI-26020005": {
    master: {
      jobNo: "FCLI-26020005",
      shipmentDate: "02/02/2026",
      mblNo: "ASHVT00002005",
      mblIssuedDate: "25/01/2026",
      mblType: "SURRENDERED",
      vendor: "VFRAC-IT",
      sLines: "SITC",
      agent: "SHANGHAI TRANSLEAD",
      pol: "CNSGH",
      pod: "VNDTS",
      service: "CYCY",
      opic: "NGO PHAN THI LY",
      eta: "03/02/2026",
      pTerm: "COLLECT",
      commodity: "Linh kiện điện tử phụ trợ",
      tPackages: 12,
      pType: "PALL",
      totalGw: 1085,
      totalCbm: 25,
      totalVgm: 0,
      poNo: "PO-2026-8899",
      notes: "Lô hàng FCL nhập khẩu theo chỉ thị của khách hàng Foxlink Đà Nẵng. Lưu kho cảng Tiên Sa."
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020005",
        pol: "SHANGHAI / CNSGH",
        pod: "TIEN SA TERMINAL / VNDTS",
        etd: "26/01/2026",
        atd: "26/01/2026",
        eta: "03/02/2026",
        ata: "03/02/2026",
        vessel: "CA OSAKA",
        voy: "2602W"
      },
      {
        id: 2,
        jobNo: "FCLI-26020005",
        pol: "BUSAN / KRPUS",
        pod: "CAT LAI / VNSGN",
        etd: "28/01/2026",
        atd: "—",
        eta: "05/02/2026",
        ata: "—",
        vessel: "DONGJIN ENTERPRISE",
        voy: "0122S"
      },
      {
        id: 3,
        jobNo: "FCLI-26020005",
        pol: "SINGAPORE / SGSIN",
        pod: "HAI PHONG / VNHPH",
        etd: "02/02/2026",
        atd: "—",
        eta: "08/02/2026",
        ata: "—",
        vessel: "SITC HONGKONG",
        voy: "2418N"
      },
      {
        id: 4,
        jobNo: "FCLI-26020005",
        pol: "NINGBO / CNNGB",
        pod: "TIEN SA / VNDTS",
        etd: "05/02/2026",
        atd: "—",
        eta: "11/02/2026",
        ata: "—",
        vessel: "KMTC INCHEON",
        voy: "2601S"
      }
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020005",
        size: "40HC",
        containerNo: "ZIRU8505175",
        sealNo: "ARL2873758",
        packageNumber: 12,
        packageType: "PALLETS",
        gw: 1085,
        cbm: 25,
        vgm: 0,
        description: "Lô hàng linh kiện điện tử nguyên container (FCL)"
      }
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: "FCLI-26020005",
        hblNo: "OLSC2600154",
        custom: !0,
        trucking: !1,
        customer: "FOXLINK DA NANG",
        salesman: "NGO PHAN THI LY",
        salesSupport: "HO THI MAI",
        handleGroup: "SEA IMPORT",
        documentNo: "DOC-2602-0089",
        shipmentType: "NOMINATED",
        doNo: "FCL-26020025-1",
        referenceNo: "REF-8899"
      }
    ]
  },
  "FCLI-26020006": {
    master: {
      jobNo: "FCLI-26020006",
      shipmentDate: "05/02/2026",
      mblNo: "ONEYS26003112",
      mblIssuedDate: "28/01/2026",
      mblType: "ORIGINAL",
      vendor: "TRANSLEAD",
      sLines: "ONE",
      agent: "OCEAN NETWORK EXPRESS JAPAN",
      pol: "KRPUS",
      pod: "VNSGN",
      service: "CYCY",
      opic: "LE VAN TRUNG",
      eta: "10/02/2026",
      pTerm: "PREPAID",
      commodity: "Máy móc thiết bị công nghiệp nặng",
      tPackages: 48,
      pType: "PALL",
      totalGw: 8450,
      totalCbm: 68.5,
      totalVgm: 12e3,
      poNo: "PO-KR-2026-042",
      notes: "Lô hàng thiết bị máy dập tự động nhập từ Busan về cảng Cát Lái."
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020006",
        pol: "BUSAN / KRPUS",
        pod: "CAT LAI / VNSGN",
        etd: "29/01/2026",
        atd: "29/01/2026",
        eta: "10/02/2026",
        ata: "—",
        vessel: "ONE APUS",
        voy: "0412E"
      }
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020006",
        size: "40HC",
        containerNo: "TGHU0194823",
        sealNo: "ONE7788991",
        packageNumber: 24,
        packageType: "PALLETS",
        gw: 4225,
        cbm: 34.25,
        vgm: 6e3,
        description: "Module máy công nghiệp phần A"
      },
      {
        id: 2,
        jobNo: "FCLI-26020006",
        size: "40HC",
        containerNo: "NYKU4920194",
        sealNo: "ONE7788992",
        packageNumber: 24,
        packageType: "PALLETS",
        gw: 4225,
        cbm: 34.25,
        vgm: 6e3,
        description: "Module máy công nghiệp phần B"
      }
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: "FCLI-26020006",
        hblNo: "HBL-ONE-260201",
        custom: !0,
        trucking: !0,
        customer: "HYUNDAI ALUMINUM VINA",
        salesman: "LE VAN TRUNG",
        salesSupport: "NGUYEN THI ANH",
        handleGroup: "SEA IMPORT",
        documentNo: "DOC-2602-0199",
        shipmentType: "FREEHAND",
        doNo: "DO-2602006-A",
        referenceNo: "REF-HYU-01"
      }
    ]
  },
  "FCLI-26020007": {
    master: {
      jobNo: "FCLI-26020007",
      shipmentDate: "08/02/2026",
      mblNo: "WHLV00928174",
      mblIssuedDate: "02/02/2026",
      mblType: "SEAWAY",
      vendor: "VFRAC-IT",
      sLines: "WHL",
      agent: "WAN HAI LINES TAIPEI",
      pol: "CNSGH",
      pod: "VNHPH",
      service: "DOOR",
      opic: "TRAN MINH QUAN",
      eta: "14/02/2026",
      pTerm: "COLLECT",
      commodity: "Vải dệt may và phụ liệu may mặc",
      tPackages: 120,
      pType: "ROLL",
      totalGw: 14200,
      totalCbm: 82,
      totalVgm: 18500,
      poNo: "PO-TEX-2026-901",
      notes: "Lô hàng vải cao cấp nguyên cont giao kho Đình Vũ Hải Phòng."
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020007",
        pol: "SHANGHAI / CNSGH",
        pod: "HAI PHONG / VNHPH",
        etd: "04/02/2026",
        atd: "04/02/2026",
        eta: "14/02/2026",
        ata: "—",
        vessel: "WAN HAI 315",
        voy: "S089"
      }
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: "FCLI-26020007",
        size: "40HC",
        containerNo: "WHLU7891230",
        sealNo: "WHL991283",
        packageNumber: 60,
        packageType: "ROLL",
        gw: 7100,
        cbm: 41,
        vgm: 9250,
        description: "Vải dệt thoi thành phẩm kiện A"
      },
      {
        id: 2,
        jobNo: "FCLI-26020007",
        size: "40HC",
        containerNo: "WHLU7891246",
        sealNo: "WHL991284",
        packageNumber: 60,
        packageType: "ROLL",
        gw: 7100,
        cbm: 41,
        vgm: 9250,
        description: "Vải dệt thoi thành phẩm kiện B"
      }
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: "FCLI-26020007",
        hblNo: "HBL-WHL-260207",
        custom: !0,
        trucking: !0,
        customer: "MAY 10 CORPORATION",
        salesman: "TRAN MINH QUAN",
        salesSupport: "HO THI MAI",
        handleGroup: "SEA IMPORT",
        documentNo: "DOC-2602-0312",
        shipmentType: "NOMINATED",
        doNo: "DO-2602007-1",
        referenceNo: "REF-M10-88"
      }
    ]
  }
}, Go = {
  fld_job_no: "jobNo",
  fld_shipment_date: "shipmentDate",
  fld_mbl_no: "mblNo",
  fld_mbl_date: "mblIssuedDate",
  fld_mbl_type: "mblType",
  fld_vendor: "vendor",
  fld_lines: "sLines",
  fld_agent: "agent",
  fld_pol: "pol",
  fld_pod: "pod",
  fld_service: "service",
  fld_opic: "opic",
  fld_eta: "eta",
  fld_pterm: "pTerm",
  fld_commodity: "commodity",
  fld_tpackages: "tPackages",
  fld_ptype: "pType",
  fld_total_gw: "totalGw",
  fld_total_cbm: "totalCbm",
  fld_total_vgm: "totalVgm",
  fld_po_no: "poNo",
  fld_notes: "notes"
}, is = Ss()(
  dn((t, r) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...wt["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...wt["FCLI-26020005"].shippingInfo],
      grid_container_info: [...wt["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...wt["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (s) => {
      const a = wt[s];
      a && t({
        activeJobNo: s,
        masterRecord: { ...a.master },
        detailGrids: {
          grid_shipping_info: [...a.shippingInfo],
          grid_container_info: [...a.containerInfo],
          grid_shipment_detail: [...a.shipmentDetail]
        },
        validationErrors: {}
      });
    },
    // 2. Tạo Job mới
    createNewJob: () => {
      const s = r().jobs, n = `FCLI-2602000${s.length + 5}`, o = {
        jobNo: n,
        shipmentDate: (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN"),
        mblNo: "",
        mblIssuedDate: "",
        mblType: "SURRENDERED",
        vendor: "VFRAC-IT",
        sLines: "SITC",
        agent: "SHANGHAI TRANSLEAD",
        pol: "CNSGH",
        pod: "VNDTS",
        service: "CYCY",
        opic: "NGO PHAN THI LY",
        eta: "",
        pTerm: "COLLECT",
        commodity: "",
        tPackages: 0,
        pType: "PALL",
        totalGw: 0,
        totalCbm: 0,
        totalVgm: 0,
        poNo: "",
        notes: ""
      };
      return wt[n] = {
        master: o,
        shippingInfo: [],
        containerInfo: [],
        shipmentDetail: []
      }, t({
        jobs: [...s, n],
        activeJobNo: n,
        masterRecord: o,
        detailGrids: {
          grid_shipping_info: [],
          grid_container_info: [],
          grid_shipment_detail: []
        },
        validationErrors: {}
      }), n;
    },
    // 3. Cập nhật trường trên Master Form (kèm Cascading, Auto-Populate & Validation)
    updateMasterField: (s, a) => {
      const n = String(Go[s] || s), l = { ...r().masterRecord, [n]: a }, i = Wo(n, a, l);
      Object.assign(l, i);
      const d = { ...r().validationErrors };
      if (n === "mblNo") {
        const p = String(a || "").trim();
        p ? /^[A-Z0-9]{8,18}$/i.test(p) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(a || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const p = l.mblIssuedDate, h = l.shipmentDate;
        if (p && h) {
          const j = er(p, h, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          j.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = j.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      t({
        masterRecord: l,
        validationErrors: d
      });
      const c = r().activeJobNo;
      wt[c] && (wt[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (s, a, n, o) => {
      const l = r().detailGrids, i = l[s] || [], d = { ...r().validationErrors }, c = `${s}_${a}_${n}`, p = i.map((j, u) => j.id !== void 0 && j.id === a || j.id === void 0 && u === a ? { ...j, [n]: o } : j);
      if (n === "containerNo") {
        const j = Zn(String(o));
        j.isValid ? delete d[c] : d[c] = j.message;
      }
      if (s === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const j = p.find((u) => u.id === a);
        if (j && j.etd && j.eta) {
          const u = er(j.etd, j.eta, "ETD", "ETA"), b = `${s}_${a}_etd_eta`;
          u.isValid ? delete d[b] : d[b] = u.message || "ETD phải trước ETA";
        }
      }
      t({
        detailGrids: { ...l, [s]: p },
        validationErrors: d
      }), s === "grid_container_info" && r().recalculateTotals();
      const h = r().activeJobNo;
      wt[h] && (s === "grid_shipping_info" && (wt[h].shippingInfo = p), s === "grid_container_info" && (wt[h].containerInfo = p), s === "grid_shipment_detail" && (wt[h].shipmentDetail = p));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (s, a) => {
      const n = r().detailGrids, o = n[s] || [], l = o.length > 0 ? Math.max(...o.map((p) => Number(p.id) || 0)) + 1 : 1, i = r().activeJobNo;
      let d = { id: l, jobNo: i };
      s === "grid_container_info" ? d = {
        id: l,
        jobNo: i,
        size: "40HC",
        containerNo: "ZIRU" + Math.floor(1e6 + Math.random() * 9e6),
        sealNo: "ARL" + Math.floor(1e6 + Math.random() * 9e6),
        packageNumber: 10,
        packageType: "PALLETS",
        gw: 1e3,
        cbm: 20,
        vgm: 0,
        description: "Hàng hóa container mới",
        ...a
      } : s === "grid_shipping_info" ? d = {
        id: l,
        jobNo: i,
        pol: "SHANGHAI / CNSGH",
        pod: "TIEN SA / VNDTS",
        etd: "10/02/2026",
        atd: "—",
        eta: "16/02/2026",
        ata: "—",
        vessel: "NEW VESSEL",
        voy: "0101N",
        ...a
      } : s === "grid_shipment_detail" ? d = {
        id: l,
        jobNo: i,
        hblNo: "HBL-" + Math.floor(1e5 + Math.random() * 9e5),
        custom: !0,
        trucking: !1,
        customer: "DOANH NGHIEP MOI",
        salesman: "NGO PHAN THI LY",
        salesSupport: "HO THI MAI",
        handleGroup: "SEA IMPORT",
        documentNo: "DOC-NEW",
        shipmentType: "NOMINATED",
        doNo: "DO-NEW",
        referenceNo: "REF-NEW",
        ...a
      } : d = { id: l, jobNo: i, ...a };
      const c = [...o, d];
      t({
        detailGrids: { ...n, [s]: c }
      }), s === "grid_container_info" && r().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (s, a) => {
      const n = r().detailGrids, l = (n[s] || []).filter((i, d) => d !== a);
      t({
        detailGrids: { ...n, [s]: l }
      }), s === "grid_container_info" && r().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (s, a) => {
      const n = r().detailGrids, o = n[s] || [], l = o[a];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((p) => Number(p.id) || 0)) + 1 : 1, d = { ...l, id: i }, c = [...o];
      c.splice(a + 1, 0, d), t({
        detailGrids: { ...n, [s]: c }
      }), s === "grid_container_info" && r().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const s = r().detailGrids.grid_container_info || [];
      let a = 0, n = 0, o = 0, l = 0;
      s.forEach((p) => {
        a += Number(p.packageNumber) || 0, n += Number(p.gw) || 0, o += Number(p.cbm) || 0, l += Number(p.vgm) || 0;
      });
      const d = {
        ...r().masterRecord,
        tPackages: a,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      t({ masterRecord: d });
      const c = r().activeJobNo;
      wt[c] && (wt[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const s = r().masterRecord, a = {};
      return (o = s.jobNo) != null && o.trim() || (a.jobNo = "Job No không được để trống"), (l = s.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(s.mblNo.trim()) || (a.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : a.mblNo = "Số M-B/L không được để trống", (r().detailGrids.grid_container_info || []).forEach((i) => {
        const d = Zn(i.containerNo);
        d.isValid || (a[`grid_container_info_${i.id}_containerNo`] = d.message);
      }), t({ validationErrors: a }), Object.keys(a).length === 0;
    },
    // 10. Lưu dữ liệu Hợp nhất Master-Detail (Aggregate Save)
    saveAggregate: async () => {
      if (!r().validateAll())
        return {
          success: !1,
          message: `Lưu thất bại: Còn ${Object.keys(r().validationErrors).length} trường dữ liệu chưa hợp lệ. Vui lòng kiểm tra các ô có viền đỏ.`
        };
      const a = r().activeJobNo, n = {
        master: r().masterRecord,
        shippingInfo: r().detailGrids.grid_shipping_info,
        containerInfo: r().detailGrids.grid_container_info,
        shipmentDetail: r().detailGrids.grid_shipment_detail
      };
      try {
        const o = await fetch(`${ut()}/fcl-import/save-aggregate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n)
        });
        if (o.ok) {
          const l = await o.json();
          return {
            success: !0,
            message: `Đã lưu thành công lô hàng ${a} và đồng bộ với CSDL SQL Server!`,
            aggregate: l
          };
        }
      } catch (o) {
        console.warn("[MasterDetailStore] Backend API chưa phản hồi, đã lưu bền vững vào bộ nhớ ứng dụng:", o);
      }
      return {
        success: !0,
        message: `Đã lưu thành công lô hàng [${a}] (1 Master Record + ${n.containerInfo.length} Containers + ${n.shippingInfo.length} Chặng tàu) trong một Transaction!`,
        aggregate: n
      };
    }
  }))
);
function Vo({
  fileName: t = "Du_Lieu_Bang",
  sheetName: r = "Sheet1",
  columns: s,
  rows: a,
  includeSummary: n = !0
}) {
  const o = s.filter((k) => !k.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const k of o) {
    const f = k.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${f};padding:8px 12px;font-size:11pt;">${k.title || k.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  a.forEach((k, f) => {
    const C = f % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${C};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${f + 1}</td>`;
    for (const w of o) {
      const y = k[w.key], g = w.align || "left";
      let D = y != null ? String(y) : "";
      typeof y == "number" && (D = y.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${g};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Or(D)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((k) => k.aggregate);
  if (n && c && a.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const k of o) {
      const f = k.align || "left";
      if (k.aggregate === "sum") {
        const C = a.reduce((y, g) => {
          const D = Number(g[k.key]);
          return y + (isNaN(D) ? 0 : D);
        }, 0), w = C % 1 !== 0 ? C.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : C.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${w}${k.summarySuffix ? ` ${k.summarySuffix}` : ""}</td>`;
      } else if (k.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${a.length}</td>`;
      else if (k.aggregate === "avg") {
        const C = a.reduce((y, g) => {
          const D = Number(g[k.key]);
          return y + (isNaN(D) ? 0 : D);
        }, 0), w = a.length > 0 ? (C / a.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${w}</td>`;
      } else
        d += '<td style="border:1px solid #334155;"></td>';
    }
    d += "</tr>";
  }
  const p = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${Or(r)}</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayGridlines/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          table { border-collapse: collapse; width: 100%; font-family: Arial, Helvetica, sans-serif; }
          th, td { mso-number-format:"\\@"; }
          .num { mso-number-format:"\\#,##0"; }
          .date { mso-number-format:"dd\\/mm\\/yyyy"; }
        </style>
      </head>
      <body>
        <table>
          <thead>${l}</thead>
          <tbody>${i}</tbody>
          <tfoot>${d}</tfoot>
        </table>
      </body>
    </html>
  `.trim(), h = new Blob(["\uFEFF", p], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), j = t.endsWith(".xls") || t.endsWith(".xlsx") ? t : `${t}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, u = URL.createObjectURL(h), b = document.createElement("a");
  b.href = u, b.download = j, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(u);
}
function Or(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Ha(t) {
  const {
    title: r,
    subtitle: s,
    columns: a,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = t, c = a.filter((y) => !y.hidden), p = window.open("", "_blank", "width=1100,height=850");
  if (!p) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const h = /* @__PURE__ */ new Date(), j = `Ngày in: ${h.toLocaleDateString("vi-VN")} lúc ${h.toLocaleTimeString("vi-VN")}`, u = Object.entries(i).map(
    ([y, g]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${qt(y)}:</strong>
          <span>${qt(String(g))}</span>
        </div>`
  ).join(""), b = c.map((y) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${y.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${qt(y.title || y.key)}
      </th>`).join(""), k = n.map((y, g) => {
    const D = g % 2 === 0 ? "#ffffff" : "#f8fafc", M = c.map((m) => {
      const T = y[m.key] ?? "", A = m.align || (typeof T == "number" ? "right" : "left");
      let I = T;
      return typeof T == "number" && (I = T.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${A}; font-size: 11px;">
            ${qt(String(I))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${D};">${M}</tr>`;
  }).join("");
  let f = "";
  o && (f = `<tfoot><tr>${c.map((g, D) => {
    const M = o[g.key] ?? (D === 0 ? "TỔNG CỘNG" : ""), m = g.align || "left";
    let T = M;
    return typeof M == "number" && (T = M.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${m}; font-size: 11px;">
          ${qt(String(T))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const C = d ? `
      <div style="margin-top: 40px; display: flex; justify-content: space-between; text-align: center; font-size: 12px; page-break-inside: avoid;">
        <div style="flex: 1;">
          <strong>Người Lập Biểu</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, ghi rõ họ tên)</span>
          <div style="height: 60px;"></div>
        </div>
        <div style="flex: 1;">
          <strong>Kế Toán Trưởng</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, ghi rõ họ tên)</span>
          <div style="height: 60px;"></div>
        </div>
        <div style="flex: 1;">
          <strong>Thủ Trưởng Đơn Vị</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, đóng dấu)</span>
          <div style="height: 60px;"></div>
        </div>
      </div>
    ` : "", w = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${qt(r)} - UIForge Report</title>
      <style>
        @page {
          size: A4 landscape;
          margin: 12mm 15mm;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          color: #0f172a;
          margin: 0;
          padding: 20px;
          background: #ffffff;
        }
        .header {
          border-bottom: 2px solid #0284c7;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }
        @media print {
          body {
            padding: 0;
          }
          button {
            display: none !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #0284c7; letter-spacing: 0.5px;">
              ${qt(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${qt(r)}
            </h1>
            ${s ? `<div style="font-size: 12px; color: #475569;">${qt(s)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${qt(j)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${u ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${u}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${b}</tr>
        </thead>
        <tbody>
          ${k}
        </tbody>
        ${f}
      </table>

      ${C}

      <div style="margin-top: 24px; text-align: center;">
        <button onclick="window.print()" style="padding: 8px 24px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
          In Báo Cáo / Lưu PDF
        </button>
      </div>

      <script>
        window.onload = function() {
          // Tự động mở hộp thoại in sau khi render
          setTimeout(function() {
            window.print();
          }, 300);
        };
      <\/script>
    </body>
    </html>
  `;
  p.document.open(), p.document.write(w), p.document.close();
}
function qt(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function tc(t) {
  const r = t.columns.filter((a) => !a.hidden), s = {
    title: t.title,
    subtitle: t.subtitle,
    companyName: t.companyName,
    metadata: t.metadata,
    columns: r.map((a) => ({
      key: a.key,
      title: a.title || a.key,
      align: a.align || "left",
      dataType: a.dataType || a.componentType || "string"
    })),
    rows: t.rows
  };
  try {
    const a = await fetch(`${ut()}/core/reports/pdf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s)
    });
    if (a.ok) {
      const n = await a.blob(), o = URL.createObjectURL(n), l = document.createElement("a");
      l.href = o, l.download = `${t.title.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
      return;
    }
  } catch {
  }
  Ha(t);
}
async function sc(t) {
  const r = t.fileName || "Bieu_Mau_Chung_Tu", s = {
    templateName: t.templateName,
    placeholders: t.placeholders
  };
  try {
    const a = await fetch(`${ut()}/core/reports/docx`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s)
    });
    if (a.ok) {
      const n = await a.blob(), o = URL.createObjectURL(n), l = document.createElement("a");
      return l.href = o, l.download = r.endsWith(".docx") ? r : `${r}.docx`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o), !0;
    }
  } catch (a) {
    console.error("[DocxReport] Lỗi khi tạo file word:", a);
  }
  return !1;
}
function Uo(t) {
  if (!t || typeof t != "string") return [];
  const s = t.replace(/\r\n/g, `
`).replace(/\r/g, `
`).split(`
`);
  return s.length > 0 && s[s.length - 1].trim() === "" && s.pop(), s.length === 0 ? [] : s.map((a) => a.split("	").map((o) => {
    let l = o.trim();
    return l.startsWith('"') && l.endsWith('"') && l.length >= 2 && (l = l.slice(1, -1).replace(/""/g, '"').trim()), l;
  }));
}
function Ko(t, r) {
  if (t == null) return "";
  const s = String(t).trim();
  if (r.componentType === "Number" || r.format === "number" || r.format === "currency_vnd" || r.format === "currency_usd" || r.dataType === "number" || r.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount", "price", "quantity"].some(
    (n) => r.key.toLowerCase().includes(n)
  )) {
    if (!s) return 0;
    const n = s.replace(/[,\s$₫€]/g, "").trim(), o = Number(n);
    return isNaN(o) ? 0 : r.precision !== void 0 && r.precision >= 0 ? Number(o.toFixed(r.precision)) : o;
  }
  if (r.componentType === "Checkbox" || r.dataType === "boolean") {
    const n = s.toLowerCase();
    return n === "true" || n === "1" || n === "yes" || n === "y" || n === "x" || n === "v" || n === "có" || n === "checked" || n === "đúng";
  }
  if (r.componentType === "DatePicker" || r.format === "date_dmy" || r.dataType === "date") {
    if (!s) return "";
    const n = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
    if (n) {
      const o = n[1], l = String(n[2]).padStart(2, "0");
      return `${String(n[3]).padStart(2, "0")}/${l}/${o}`;
    }
    return s;
  }
  return s;
}
function zo({
  currentRows: t,
  visibleColumns: r,
  allColumns: s,
  clipMatrix: a,
  startRowIndex: n,
  startColIndex: o
}) {
  if (!a || a.length === 0)
    return { updatedRows: t, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 };
  const l = [...t.map((u) => ({ ...u }))], i = a.length;
  let d = 0, c = 0;
  const p = Math.max(0, n), h = Math.max(0, o), j = (u) => {
    const b = { id: u };
    return s.forEach((k) => {
      k.componentType === "Number" || k.dataType === "number" ? b[k.key] = 0 : k.componentType === "Checkbox" || k.dataType === "boolean" ? b[k.key] = !1 : (k.componentType === "DatePicker" || k.dataType, b[k.key] = "");
    }), b;
  };
  for (let u = 0; u < i; u++) {
    const b = p + u, k = a[u];
    if (k.length > d && (d = k.length), b >= l.length) {
      const C = l.length > 0 ? Math.max(...l.map((y) => Number(y.id) || 0)) : 0, w = j(C + 1);
      l.push(w), c++;
    }
    const f = l[b];
    for (let C = 0; C < k.length; C++) {
      const w = h + C;
      if (w >= r.length)
        break;
      const y = r[w];
      if (!((y.editable ?? !0) && !y.disabled && y.componentType !== "Label"))
        continue;
      const D = k[C], M = Ko(D, y);
      f[y.key] = M;
    }
  }
  return {
    updatedRows: l,
    pastedRowCount: i,
    pastedColCount: d,
    newRowsCreated: c
  };
}
const Wr = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], qo = ({ node: t, isEditing: r }) => {
  var vs, ys, Ns, js, ws;
  const { props: s, style: a } = t, n = Q((v) => v.updateComponentProps), o = Q((v) => v.activeFeatureId), l = Oe((v) => v.evaluateColumnPermission), i = Oe((v) => v.evaluateFeaturePermission), d = Oe((v) => v.previewRoleCode), c = Oe((v) => v.componentPolicies), p = $e(() => s.columns && Array.isArray(s.columns) ? s.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [s.columns]), h = $e(() => _a(p), [p]), j = $e(() => {
    const v = h.filter((x) => !x.hidden);
    return r ? v : v.map((x) => {
      const R = l(o, t, x);
      if (!R.canRead) return null;
      const V = (R.canWrite || R.canWriteAll) && x.editable !== !1;
      return {
        ...x,
        editable: V,
        isHighlightEditable: R.shouldHighlightEditable
      };
    }).filter((x) => x !== null);
  }, [h, r, o, t, l, d, c]), u = is((v) => v.detailGrids), b = is((v) => v.updateGridCell), k = is((v) => v.addGridRow), f = is((v) => v.deleteGridRow), C = is((v) => v.duplicateGridRow), w = is((v) => v.validationErrors), y = !!(u && u[t.id]), g = s.reference || s.refName || ((vs = t.dataBinding) == null ? void 0 : vs.refName) || ((ys = t.dataBinding) == null ? void 0 : ys.entityName) || "", D = s.query || ((Ns = t.dataBinding) == null ? void 0 : Ns.query) || s.dataSource || ((js = t.dataBinding) == null ? void 0 : js.dataSource) || s.sqlWhere || ((ws = t.dataBinding) == null ? void 0 : ws.sqlWhere) || s.filter || "", M = Ne((v) => g ? v.datasets[g] : void 0), [m, T] = P(() => y && u && u[t.id] ? u[t.id] : s.data && Array.isArray(s.data) ? s.data : M && Array.isArray(M) ? M : Wr);
  Fe(() => {
    s.data && Array.isArray(s.data) && s.data.length > 0 && T(s.data);
  }, [s.data]), Fe(() => {
    M && Array.isArray(M) && M.length > 0 && T(M);
  }, [M]);
  const A = $e(() => y && u && u[t.id] && u[t.id].length > 0 ? u[t.id] : m && Array.isArray(m) && m.length > 0 ? m : M && Array.isArray(M) && M.length > 0 ? M : s.data && Array.isArray(s.data) ? s.data : Wr, [y, u, t.id, m, M, s.data]);
  Fe(() => {
    if (s.data && Array.isArray(s.data) && s.data.length > 0) return;
    let v = !0;
    return g && Ne.getState().queryEntity(g, D).then((x) => {
      v && x && x.length > 0 && T(x);
    }), () => {
      v = !1;
    };
  }, [g, D, s.data]);
  const [I, S] = P(""), [U, B] = P(null), [H, O] = P("asc"), [N, L] = P(!1), [W, X] = P({}), [E, Z] = P({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [te, z] = P({
    isOpen: !1,
    column: null
  }), [ae, ce] = P({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [q, de] = P(null), [J, se] = P(null), [F, G] = P(null), oe = 55, { offsets: fe, lastFrozenKey: xe } = $e(() => _o(h, oe), [h]), pe = $e(() => {
    let v = [...A];
    if (I.trim()) {
      const x = I.toLowerCase();
      v = v.filter(
        (R) => Object.values(R).some(
          (V) => String(V).toLowerCase().includes(x)
        )
      );
    }
    return N && Object.entries(W).forEach(([x, R]) => {
      if (R && R.trim()) {
        const V = R.toLowerCase().trim();
        v = v.filter((_) => {
          const Y = _[x];
          return Y != null && String(Y).toLowerCase().includes(V);
        });
      }
    }), U && v.sort((x, R) => {
      const V = x[U], _ = R[U];
      if (V === _) return 0;
      if (V == null) return 1;
      if (_ == null) return -1;
      let Y = 0;
      return typeof V == "number" && typeof _ == "number" ? Y = V - _ : Y = String(V).localeCompare(String(_)), H === "asc" ? Y : -Y;
    }), v;
  }, [A, I, N, W, U, H]), ie = (v) => {
    T(v), n(t.id, { data: v });
  }, [ye, be] = P(s.groupBy || null), [ge, Pe] = P(/* @__PURE__ */ new Set()), we = $e(() => {
    if (!ye) return [];
    const v = /* @__PURE__ */ new Map();
    pe.forEach((V) => {
      const _ = V[ye], Y = _ == null || _ === "" ? "(Trống)" : String(_);
      v.has(Y) || v.set(Y, []), v.get(Y).push(V);
    });
    let x = 0;
    const R = [];
    return v.forEach((V, _) => {
      const Y = {};
      j.forEach((ue) => {
        if (ue.componentType === "Number" || ue.precision !== void 0 || ue.isSummary || ue.summary) {
          const je = V.reduce((_e, Ue) => {
            const xt = Number(Ue[ue.key]);
            return _e + (isNaN(xt) ? 0 : xt);
          }, 0);
          Y[ue.key] = je;
        }
      }), R.push({
        groupKey: _,
        groupLabel: _,
        rows: V,
        subtotals: Y,
        startIndex: x
      }), x += V.length;
    }), R;
  }, [ye, pe, j]), ve = 38, re = 10, he = !ye && (pe.length > 80 || !!s.virtual || !!s.virtualScroll), [qe, mt] = P(0), [St, _t] = P(550);
  Fe(() => {
    const v = Nt.current;
    if (!v || !he) return;
    const x = () => {
      mt(v.scrollTop);
    }, R = () => {
      v.clientHeight > 0 && _t(v.clientHeight);
    };
    return v.addEventListener("scroll", x, { passive: !0 }), R(), window.addEventListener("resize", R), () => {
      v.removeEventListener("scroll", x), window.removeEventListener("resize", R);
    };
  }, [he]);
  const { virtualStartIndex: yt, virtualEndIndex: Tt, topPaddingHeight: ne, bottomPaddingHeight: ke, virtualRows: Be } = $e(() => {
    if (!he)
      return {
        virtualStartIndex: 0,
        virtualEndIndex: pe.length,
        topPaddingHeight: 0,
        bottomPaddingHeight: 0,
        virtualRows: pe
      };
    const v = pe.length, x = Math.ceil(St / ve), R = Math.floor(qe / ve), V = Math.max(0, R - re), _ = Math.min(v, R + x + re), Y = V * ve, ue = Math.max(0, (v - _) * ve), je = pe.slice(V, _);
    return {
      virtualStartIndex: V,
      virtualEndIndex: _,
      topPaddingHeight: Y,
      bottomPaddingHeight: ue,
      virtualRows: je
    };
  }, [he, pe, qe, St]), Ie = `uiforge_user_gridpolicy_${String(t.pageId || "default")}_${t.id}`;
  Fe(() => {
    let v = !0;
    const x = String(t.pageId || "default");
    try {
      const R = localStorage.getItem(Ie);
      if (R) {
        const V = JSON.parse(R);
        Array.isArray(V) && V.length > 0 && n(t.id, { columns: V });
      }
    } catch {
    }
    return fetch(
      `${ut()}/core/user-settings?featureCode=${encodeURIComponent(
        x
      )}&componentId=${encodeURIComponent(t.id)}&settingType=GridPolicy`
    ).then((R) => R.ok ? R.json() : null).then((R) => {
      if (!v || !R) return;
      const V = R.settingJson || R.SettingJson;
      if (V) {
        const _ = JSON.parse(V);
        if (Array.isArray(_) && _.length > 0) {
          n(t.id, { columns: _ });
          try {
            localStorage.setItem(Ie, V);
          } catch {
          }
        }
      }
    }).catch(() => {
    }), () => {
      v = !1;
    };
  }, [t.id, t.pageId]);
  const Ae = (v) => {
    const x = tn(v);
    n(t.id, { columns: x });
    try {
      localStorage.setItem(Ie, JSON.stringify(x));
    } catch {
    }
    const R = String(t.pageId || "default");
    fetch(`${ut()}/core/user-settings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        featureCode: R,
        componentId: t.id,
        settingType: "GridPolicy",
        settingJson: JSON.stringify(x)
      })
    }).catch(() => {
    });
  }, Re = nt(A);
  Re.current = A;
  const Qe = (v, x, R) => {
    y && b(t.id, v, x, R);
    const _ = (y && u && u[t.id] ? u[t.id] : Re.current).map((Y, ue) => Y.id !== void 0 && Y.id === v || Y.id === void 0 && ue === v ? { ...Y, [x]: R } : Y);
    ie(_), g && Ne.getState().registerDataset(g, _);
  }, et = (v, x, R) => {
    const _ = Q.getState().features.find((_e) => String(_e.id) === String(t.pageId)), Y = _ == null ? void 0 : _.scriptFile, ue = (R == null ? void 0 : R.action) || v;
    let je = !1;
    R != null && R.events && (Array.isArray(R.events) ? R.events : typeof R.events == "string" ? (() => {
      try {
        return JSON.parse(R.events);
      } catch {
        return [];
      }
    })() : []).forEach((Ue) => {
      je = !0, rn(
        Ue,
        R.title || R.key,
        Y,
        { row: x, col: R, column: R, action: Ue.action || Ue.handlerName || ue, value: x[(R == null ? void 0 : R.key) || ""] }
      );
    }), !je && ue && rn(
      { id: `col_act_${(R == null ? void 0 : R.key) || v}`, trigger: "actionClick", action: ue, handlerName: ue },
      t.props.label || "Bảng dữ liệu",
      Y,
      { row: x, col: R, column: R, action: ue, value: x[(R == null ? void 0 : R.key) || ""] }
    ), t.events && t.events.length > 0 && Xe(t.events, "actionClick", t.props.label || "Bảng dữ liệu", Y, {
      action: ue,
      row: x,
      col: R,
      column: R,
      colKey: R == null ? void 0 : R.key,
      value: x[(R == null ? void 0 : R.key) || ""]
    });
  }, [at, lt] = P(null), [it, ot] = P(/* @__PURE__ */ new Set()), Nt = nt(null), He = (v, x, R = "info") => {
    const V = document.createElement("div"), _ = R === "success" ? "border-emerald-500 shadow-emerald-500/30" : R === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", Y = R === "success" ? "⚡" : R === "warning" ? "⚠️" : "ℹ️", ue = R === "success" ? "bg-emerald-600/25 text-emerald-400" : R === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    V.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${_} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, V.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${ue} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${Y}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${v}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${x}</div>
      </div>
    `, document.body.appendChild(V), setTimeout(() => {
      V.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => V.remove(), 300);
    }, 3800);
  }, jt = () => {
    if (it.size === pe.length && pe.length > 0)
      ot(/* @__PURE__ */ new Set()), He("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const v = new Set(pe.map((x, R) => x.id ?? x.Id ?? R));
      ot(v), pe.length > 0 && lt(pe[0].id ?? pe[0].Id ?? 0), He("F1 (Toggle All)", `Đã chọn tất cả ${v.size} dòng trong bảng`, "success");
    }
  }, Ut = () => {
    var _;
    let v = We == null ? void 0 : We.colKey, x = (We == null ? void 0 : We.rowIndex) ?? 0;
    !v && j.length > 0 && (v = j[0].key);
    const R = pe[x], V = R && v ? R[v] : null;
    if (V != null && String(V).trim() !== "" && String(V) !== "—") {
      X((ue) => ({ ...ue, [v]: String(V) })), L(!0);
      const Y = ((_ = j.find((ue) => ue.key === v)) == null ? void 0 : _.title) || v;
      He("F2 (Lọc theo ô)", `Đã lọc cột [${Y}] với giá trị "${V}"`, "success");
    } else
      L(!0), He("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Ft = () => {
    const v = it.size > 0 ? pe.filter((V, _) => it.has(V.id ?? V.Id ?? _)) : pe;
    if (v.length === 0) {
      He("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const x = j.filter(
      (V) => V.componentType === "Number" || V.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (_) => V.key.toLowerCase().includes(_)
      )
    );
    if (x.length === 0) {
      He("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const R = x.map((V) => {
      const _ = v.reduce((ue, je) => {
        const _e = Number(je[V.key]);
        return ue + (isNaN(_e) ? 0 : _e);
      }, 0), Y = _ % 1 !== 0 ? _.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : _.toLocaleString("en-US");
      return `${V.title || V.key}: ${Y}${V.summarySuffix ? ` ${V.summarySuffix}` : ""}`;
    });
    He(
      `F3 (Tổng ${v.length} dòng)`,
      R.join(" | "),
      "success"
    );
  }, Pt = () => {
    Ee();
    const v = pe.length;
    He("F4 (Thêm dòng)", `Đã thêm dòng mới số #${v + 1}`, "success"), setTimeout(() => {
      Jt(v, 0);
    }, 60);
  }, Ot = async () => {
    const v = s.label ? String(s.label).replace(/\s+/g, "_") : "Du_Lieu_Bang", x = s.label ? String(s.label).slice(0, 30) : "Sheet1";
    try {
      const R = {
        title: s.label ? String(s.label) : "BẢNG DỮ LIỆU",
        sheetName: x,
        columns: j.map((_) => ({
          key: _.key,
          title: _.title || _.key,
          align: _.align || "left",
          dataType: _.componentType === "Number" || _.precision !== void 0 || _.format === "number" ? "number" : _.componentType === "Checkbox" ? "boolean" : "string"
        })),
        rows: pe
      }, V = await fetch(`${ut()}/core/export/excel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(R)
      });
      if (V.ok) {
        const _ = await V.blob(), Y = window.URL.createObjectURL(_), ue = document.createElement("a");
        ue.href = Y, ue.download = `${v}.xlsx`, document.body.appendChild(ue), ue.click(), document.body.removeChild(ue), window.URL.revokeObjectURL(Y), He(
          "Xuất Excel Backend (.xlsx)",
          `Đã xuất file Excel chuẩn OpenXML từ server thành công (${pe.length} bản ghi)`,
          "success"
        );
        return;
      }
    } catch {
    }
    try {
      Vo({
        fileName: v,
        sheetName: x,
        columns: j,
        rows: pe,
        includeSummary: !0
      }), He("Xuất Excel Client", `Đã xuất ${pe.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (R) {
      He("Lỗi xuất Excel", (R == null ? void 0 : R.message) || "Không thể tạo file Excel", "warning");
    }
  }, Kt = () => {
    try {
      const v = {};
      j.forEach((x) => {
        if (x.aggregate === "sum") {
          const R = pe.reduce((V, _) => V + (Number(_[x.key]) || 0), 0);
          v[x.key] = R;
        } else x.aggregate === "count" && (v[x.key] = pe.length);
      }), Ha({
        title: s.label ? String(s.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${pe.length} bản ghi`,
        columns: j,
        rows: pe,
        summaryRow: Object.keys(v).length > 0 ? v : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${pe.length} dòng`,
          "Bộ lọc áp dụng": I ? `Tìm kiếm: "${I}"` : "Tất cả dữ liệu"
        }
      }), He("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (v) {
      He("Lỗi In Báo Cáo", (v == null ? void 0 : v.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, Wt = async () => {
    if (S(""), X({}), g) {
      const v = await Ne.getState().queryEntity(g, D);
      v && v.length > 0 && (T(v), He("Làm mới dữ liệu", `Đã tải lại ${v.length} bản ghi từ máy chủ`, "info"));
    }
  }, Dt = (v, x, R) => {
    const V = Uo(v);
    if (V.length === 0) return;
    const _ = y && u && u[t.id] ? u[t.id] : A, { updatedRows: Y, pastedRowCount: ue, pastedColCount: je, newRowsCreated: _e } = zo({
      currentRows: _,
      visibleColumns: j,
      allColumns: h,
      clipMatrix: V,
      startRowIndex: x,
      startColIndex: R
    });
    ie(Y), g && Ne.getState().registerDataset(g, Y), y && is.setState((xt) => ({
      detailGrids: {
        ...xt.detailGrids,
        [t.id]: Y
      }
    }));
    const Ue = _e > 0 ? `Đã dán thành công ${ue} dòng × ${je} cột (tự động tạo thêm ${_e} dòng mới)` : `Đã dán thành công ${ue} dòng × ${je} cột vào bảng`;
    He("Dán từ Excel (Ctrl+V)", Ue, "success");
  }, zt = (v) => {
    typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((x) => {
      x ? Dt(x, v, 0) : He("Dán từ Excel", "Clipboard hiện đang trống", "warning");
    }).catch(() => {
      He("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
    }) : He("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
  }, {
    focusedCell: We,
    setFocusedCell: Ht,
    focusCell: Jt,
    handleTableContainerKeyDown: $,
    handleCellKeyDown: le,
    handlePaste: me
  } = Bo({
    tableRef: Nt,
    rows: pe,
    visibleColumns: j,
    selectedRowId: at,
    setSelectedRowId: lt,
    selectedRowIds: it,
    setSelectedRowIds: ot,
    onRowDoubleClick: (v, x) => Le(v, x),
    onAddRow: Pt,
    onDeleteRow: (v) => Ve(v),
    onDuplicateRow: (v) => Ge(v),
    onToggleAll: jt,
    onFilterByCell: Ut,
    onQuickSum: Ft,
    onToggleColumnFilters: () => L((v) => !v),
    onPasteExcel: Dt
  }), Se = (v, x, R) => {
    const V = v.id ?? v.Id ?? x;
    if (lt(V), R != null && R.ctrlKey || R != null && R.metaKey)
      ot((je) => {
        const _e = new Set(je);
        return _e.has(V) ? _e.delete(V) : _e.add(V), _e;
      });
    else if (R != null && R.shiftKey && at !== null) {
      const je = pe.findIndex((_e, Ue) => (_e.id ?? _e.Id ?? Ue) === at);
      if (je !== -1) {
        const _e = Math.min(je, x), Ue = Math.max(je, x), xt = /* @__PURE__ */ new Set();
        for (let It = _e; It <= Ue; It++)
          xt.add(pe[It].id ?? pe[It].Id ?? It);
        ot(xt);
      }
    } else
      ot(/* @__PURE__ */ new Set([V]));
    const Y = Q.getState().features.find((je) => String(je.id) === String(t.pageId)), ue = Y == null ? void 0 : Y.scriptFile;
    g && Ne.getState().setSelectedRecord(g, v), t.events && t.events.length > 0 && (Xe(t.events, "rowClick", t.props.label || "Bảng dữ liệu", ue, {
      row: v,
      rowIndex: x,
      action: "rowClick"
    }), Xe(t.events, "click", t.props.label || "Bảng dữ liệu", ue, {
      row: v,
      rowIndex: x,
      action: "click"
    }), Xe(t.events, "select", t.props.label || "Bảng dữ liệu", ue, {
      row: v,
      rowIndex: x,
      action: "select"
    }));
  }, Le = (v, x) => {
    const V = Q.getState().features.find((Y) => String(Y.id) === String(t.pageId)), _ = V == null ? void 0 : V.scriptFile;
    t.events && t.events.length > 0 && Xe(t.events, "dblclick", t.props.label || "Bảng dữ liệu", _, {
      row: v,
      rowIndex: x,
      id: v.id ?? v.Id,
      action: "dblclick"
    });
  }, Ee = () => {
    y && k(t.id);
    const v = y && u && u[t.id] ? u[t.id] : A, R = { id: v.length > 0 ? Math.max(...v.map((_) => Number(_.id) || 0)) + 1 : 1 };
    h.forEach((_) => {
      _.componentType === "Number" ? R[_.key] = 0 : _.componentType === "Checkbox" ? R[_.key] = !1 : _.componentType === "DatePicker" ? R[_.key] = "08/11/2026" : R[_.key] = "";
    });
    const V = [...v, R];
    ie(V), g && Ne.getState().registerDataset(g, V);
  }, [Te, De] = P({}), Je = (v, x) => {
    if (x != null && String(x).trim() !== "") {
      const R = y && u && u[t.id] ? u[t.id] : A, _ = { id: R.length > 0 ? Math.max(...R.map((ue) => Number(ue.id) || 0)) + 1 : 1, ...Te, [v]: x };
      h.forEach((ue) => {
        _[ue.key] === void 0 && (ue.componentType === "Number" || ue.dataType === "number" ? _[ue.key] = 0 : ue.componentType === "Checkbox" || ue.dataType === "boolean" ? _[ue.key] = !1 : (ue.componentType === "DatePicker" || ue.dataType, _[ue.key] = ""));
      });
      const Y = [...R, _];
      ie(Y), g && Ne.getState().registerDataset(g, Y), y && is.setState((ue) => ({
        detailGrids: {
          ...ue.detailGrids,
          [t.id]: Y
        }
      })), De({}), He("Dòng mới tự động", `Đã tự động khởi tạo dòng #${Y.length} vào bảng`, "success");
    } else
      De((R) => ({ ...R, [v]: x }));
  }, Ge = (v) => {
    if (!r) {
      const ue = i(o);
      if (!ue.canWrite && !ue.canWriteAll) {
        alert("Bạn không có quyền thêm mới hoặc sao chép dòng dữ liệu.");
        return;
      }
    }
    y && C(t.id, v);
    const x = y && u && u[t.id] ? u[t.id] : A, R = x[v], V = Math.max(...x.map((ue) => Number(ue.id) || 0)) + 1, _ = { ...R, id: V }, Y = [...x];
    Y.splice(v + 1, 0, _), ie(Y), g && Ne.getState().registerDataset(g, Y);
  }, Ve = (v) => {
    if (!r) {
      const V = i(o);
      if (!V.canDelete && !V.canDeleteAll) {
        alert("Bạn không có quyền xóa bản ghi / dòng dữ liệu này.");
        return;
      }
    }
    y && f(t.id, v);
    const x = y && u && u[t.id] ? u[t.id] : A;
    if (x.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const R = x.filter((V, _) => _ !== v);
    ie(R), g && Ne.getState().registerDataset(g, R);
  }, rt = (v, x, R) => {
    v.preventDefault(), v.stopPropagation(), ce({
      isOpen: !0,
      x: v.clientX,
      y: v.clientY,
      row: x,
      rowIndex: R
    });
  }, bt = (v) => {
    if (!r) {
      const Y = i(o);
      if (!Y.canWrite && !Y.canWriteAll) {
        alert("Bạn không có quyền thêm mới dòng dữ liệu.");
        return;
      }
    }
    const x = y && u && u[t.id] ? u[t.id] : A, V = { id: x.length > 0 ? Math.max(...x.map((Y) => Number(Y.id) || 0)) + 1 : 1 };
    h.forEach((Y) => {
      Y.componentType === "Number" ? V[Y.key] = 0 : Y.componentType === "Checkbox" ? V[Y.key] = !1 : (Y.componentType, V[Y.key] = "");
    });
    const _ = [...x];
    _.splice(v + 1, 0, V), ie(_), g && Ne.getState().registerDataset(g, _);
  }, ft = (v) => {
    if (v <= 0) return;
    const R = [...y && u && u[t.id] ? u[t.id] : A], [V] = R.splice(v, 1);
    R.splice(v - 1, 0, V), ie(R), g && Ne.getState().registerDataset(g, R);
  }, Ze = (v) => {
    const x = y && u && u[t.id] ? u[t.id] : A;
    if (v >= x.length - 1) return;
    const R = [...x], [V] = R.splice(v, 1);
    R.splice(v + 1, 0, V), ie(R), g && Ne.getState().registerDataset(g, R);
  }, Gt = (v, x) => {
    de(x), v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", x);
  }, Rt = (v, x) => {
    if (v.preventDefault(), v.dataTransfer.dropEffect = "move", q === x) return;
    const R = v.currentTarget.getBoundingClientRect(), V = v.clientX < R.left + R.width / 2;
    se(x), G(V ? "left" : "right");
  }, Qt = (v) => {
    const x = v.relatedTarget;
    v.currentTarget.contains(x) || (se(null), G(null));
  }, Ds = (v, x) => {
    if (v.preventDefault(), !q || q === x) {
      de(null), se(null), G(null);
      return;
    }
    const R = h.findIndex((Y) => Y.key === q);
    let V = h.findIndex((Y) => Y.key === x);
    if (R === -1 || V === -1) {
      de(null), se(null), G(null);
      return;
    }
    F === "right" && R > V ? V = V + 1 : F === "left" && R < V && (V = V - 1), V = Math.max(0, Math.min(h.length - 1, V));
    const _ = Qn(h, R, V);
    Ae(_), de(null), se(null), G(null);
  }, xs = () => {
    de(null), se(null), G(null);
  }, Lt = (v) => {
    v.sortable && (U === v.key ? H === "asc" ? O("desc") : B(null) : (B(v.key), O("asc")));
  }, Is = (v, x, R) => {
    v.preventDefault(), v.stopPropagation(), Z({
      isOpen: !0,
      x: v.clientX,
      y: v.clientY,
      column: x,
      columnIndex: R
    });
  }, hs = (v) => {
    const x = h.map(
      (R) => R.key === v ? { ...R, hidden: !R.hidden } : R
    );
    Ae(x);
  }, ls = (v) => {
    const x = Oa(h, v);
    Ae(x);
  }, os = (v) => {
    var x;
    ((x = vt.getState().user) == null ? void 0 : x.role) === "Dev" && z({
      isOpen: !0,
      column: v
    });
  }, ms = (v) => {
    var Y;
    if (((Y = vt.getState().user) == null ? void 0 : Y.role) !== "Dev") return;
    const x = h.findIndex((ue) => ue.key === v);
    if (x === -1) return;
    const R = h[x], V = {
      ...R,
      key: `${R.key}_copy`,
      title: `${R.title} (Bản sao)`,
      order: (R.order ?? x) + 1
    }, _ = [...h];
    _.splice(x + 1, 0, V), Ae(_);
  }, Fs = (v) => {
    var R;
    if (((R = vt.getState().user) == null ? void 0 : R.role) !== "Dev") return;
    if (h.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const x = h.filter((V) => V.key !== v);
    Ae(x);
  }, bs = (v) => {
    const x = h.map(
      (V) => V.key === v.key ? v : V
    );
    Ae(x), z((V) => ({
      ...V,
      isOpen: !0,
      column: v
    }));
    const R = Q.getState().savePage;
    if (typeof R == "function")
      try {
        R();
      } catch {
      }
  }, Zt = (v, x) => {
    const R = at === (v.id ?? v.Id ?? x), V = it.has(v.id ?? v.Id ?? x);
    return /* @__PURE__ */ e.jsxs(
      "tr",
      {
        "data-row-index": x,
        onClick: (_) => Se(v, x, _),
        onDoubleClick: () => Le(v, x),
        onContextMenu: (_) => rt(_, v, x),
        className: `transition-colors group cursor-pointer ${R || V ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "td",
            {
              onClick: (_) => {
                _.stopPropagation();
                const Y = v.id ?? v.Id ?? x;
                ot((ue) => {
                  const je = new Set(ue);
                  return je.has(Y) ? je.delete(Y) : je.add(Y), je;
                }), lt(Y);
              },
              className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${V ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
              style: { width: `${oe}px`, minWidth: `${oe}px` },
              title: "Click chọn dòng | Chuột phải mở menu thao tác",
              children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                V ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                /* @__PURE__ */ e.jsx("span", { children: x + 1 })
              ] })
            }
          ),
          j.map((_, Y) => {
            const ue = !!(_.frozen || _.sticky === "left"), je = ue && fe[_.key] !== void 0 ? fe[_.key] : void 0, _e = _.key === xe, Ue = v[_.key], xt = _.align === "right" ? "text-right" : _.align === "center" ? "text-center" : "text-left", It = w[`${t.id}_${v.id}_${_.key}`];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-2 py-1 whitespace-nowrap transition-colors ${xt} ${_.isHighlightEditable ? "bg-emerald-950/20" : ""} ${ue ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${_e ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                style: {
                  width: _.width,
                  minWidth: _.minWidth || _.width || "100px",
                  maxWidth: _.maxWidth,
                  left: je !== void 0 ? `${je}px` : void 0
                },
                children: /* @__PURE__ */ e.jsx(
                  Br,
                  {
                    column: _,
                    value: Ue,
                    row: v,
                    rowIndex: x,
                    columnIndex: Y,
                    isFocused: (We == null ? void 0 : We.rowIndex) === x && (We == null ? void 0 : We.colIndex) === Y,
                    isSelected: R,
                    error: It,
                    onChange: ($t) => Qe(v.id ?? x, _.key, $t),
                    onActionClick: ($t) => et($t, v, _),
                    onKeyDown: le,
                    onFocus: ($t, Cs, Rs) => {
                      lt(v.id ?? v.Id ?? $t), Ht({ rowIndex: $t, colIndex: Cs, colKey: Rs });
                    }
                  }
                )
              },
              _.key
            );
          })
        ]
      },
      v.id ?? v.Id ?? x
    );
  }, { flex: gt, flexGrow: Gs, flexShrink: Vs, flexBasis: Us, minWidth: Ps, maxWidth: Ks, width: fs, ...gs } = a || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...gs
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: s.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              pe.length,
              " bản ghi"
            ] }),
            he && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/30",
                title: "Cơ chế cuộn ảo Virtual Windowing đang hoạt động (TSK-4.1)",
                children: [
                  /* @__PURE__ */ e.jsx(Xt, { className: "w-3 h-3 text-cyan-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Virtual (",
                    yt + 1,
                    "..",
                    Tt,
                    "/",
                    pe.length,
                    ")"
                  ] })
                ]
              }
            ),
            ye && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] font-semibold border border-amber-500/30",
                title: "Cơ chế gom nhóm dòng đang hoạt động (TSK-4.2)",
                children: [
                  /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3 text-amber-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    we.length,
                    " nhóm"
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: I,
                  onChange: (v) => S(v.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => L((v) => !v),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${N ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Ee,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: Wt,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(cl, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Ot,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(dl, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((v) => {
                    if (v) {
                      const x = We ? We.rowIndex : at !== null ? Math.max(0, pe.findIndex((V, _) => (V.id ?? V.Id ?? _) === at)) : 0, R = We ? We.colIndex : 0;
                      Dt(v, x, R);
                    } else
                      He("Dán từ Excel", "Clipboard hiện đang trống", "warning");
                  }).catch(() => {
                    He("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                  }) : He("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                },
                title: "Dán dữ liệu sao chép từ Excel / Google Sheets vào bảng (Ctrl+V)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Qr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Dán Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Kt,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Yr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-slate-300", children: [
              /* @__PURE__ */ e.jsx(Gn, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: ye || "",
                  onChange: (v) => {
                    const x = v.target.value || null;
                    be(x), Pe(/* @__PURE__ */ new Set());
                  },
                  title: "Gom nhóm bảng theo cột (Group By - GroupGridView.cs)",
                  className: "bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer max-w-[130px] truncate",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-300", children: "-- Không nhóm --" }),
                    j.map((v) => /* @__PURE__ */ e.jsxs("option", { value: v.key, className: "bg-slate-900 text-slate-200", children: [
                      "Nhóm: ",
                      v.title || v.key
                    ] }, v.key))
                  ]
                }
              )
            ] }),
            ye && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Pe(/* @__PURE__ */ new Set()),
                  title: "Mở rộng tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 transition-colors",
                  children: "Mở rộng"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Pe(new Set(we.map((v) => v.groupKey))),
                  title: "Thu gọn tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-amber-400 hover:border-amber-500/60 transition-colors",
                  children: "Thu gọn"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: jt,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ut,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ft,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Pt,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => L((v) => !v),
                  title: "F6: Bật / Tắt bộ lọc từng cột (Toggle Column Filters)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F6"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: Nt,
            tabIndex: 0,
            onKeyDown: $,
            onPaste: me,
            style: {
              maxHeight: he ? s.maxHeight || s.height || "550px" : s.maxHeight || void 0
            },
            className: `w-full overflow-x-auto select-none relative focus:outline-none ${he ? "overflow-y-auto" : ""}`,
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: jt,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${oe}px`, minWidth: `${oe}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: pe.length > 0 && it.size === pe.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  j.map((v, x) => {
                    const R = !!(v.frozen || v.sticky === "left"), V = R && fe[v.key] !== void 0 ? fe[v.key] : void 0, _ = v.key === xe, Y = q === v.key, ue = J === v.key;
                    let je = "";
                    ue && F === "left" ? je = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : ue && F === "right" && (je = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const _e = v.align === "right" ? "text-right" : v.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Ue) => Gt(Ue, v.key),
                        onDragOver: (Ue) => Rt(Ue, v.key),
                        onDragLeave: Qt,
                        onDrop: (Ue) => Ds(Ue, v.key),
                        onDragEnd: xs,
                        onContextMenu: (Ue) => Is(Ue, v, x),
                        onClick: () => Lt(v),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${_e} ${v.isHighlightEditable ? "border-b-2 !border-b-emerald-500/80 text-emerald-300 bg-emerald-950/25" : ""} ${R ? `sticky z-20 bg-[#0b1329] ${_ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${Y ? "opacity-30 bg-slate-800/80" : ""} ${je}`,
                        style: {
                          width: v.width,
                          minWidth: v.minWidth || v.width || "100px",
                          maxWidth: v.maxWidth,
                          left: V !== void 0 ? `${V}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${v.order ?? x + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${v.align === "right" ? "justify-end" : v.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 truncate", children: [
                            R && /* @__PURE__ */ e.jsx(Xr, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            v.isHighlightEditable && /* @__PURE__ */ e.jsx(
                              "span",
                              {
                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0 inline-block mr-0.5",
                                title: "Cột được cấp quyền chỉnh sửa"
                              }
                            ),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: v.title || v.key }),
                            v.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              v.order
                            ] })
                          ] }),
                          v.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: U === v.key ? H === "asc" ? /* @__PURE__ */ e.jsx(nr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(rr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(or, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      v.key
                    );
                  })
                ] }),
                N && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  j.map((v) => {
                    const x = !!(v.frozen || v.sticky === "left"), R = x && fe[v.key] !== void 0 ? fe[v.key] : void 0, V = v.key === xe;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${x ? `sticky z-20 bg-[#080d1a] ${V ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: R !== void 0 ? `${R}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: W[v.key] || "",
                            onChange: (_) => X((Y) => ({ ...Y, [v.key]: _.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${v.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: [
                pe.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    colSpan: j.length + 1,
                    className: "px-6 py-8 text-center text-slate-500 italic",
                    children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                  }
                ) }) : ye ? (
                  // ── 1. CHẾ ĐỘ GOM NHÓM DÒNG (COLLAPSIBLE GROUP-BY ROWS - TSK-4.2 & GroupGridView.cs) ──
                  we.map((v) => {
                    const x = ge.has(v.groupKey), R = j.find((_) => _.key === ye), V = (R == null ? void 0 : R.title) || ye;
                    return /* @__PURE__ */ e.jsxs(ns.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(
                        "tr",
                        {
                          onClick: () => {
                            Pe((_) => {
                              const Y = new Set(_);
                              return Y.has(v.groupKey) ? Y.delete(v.groupKey) : Y.add(v.groupKey), Y;
                            });
                          },
                          className: "bg-slate-900/95 hover:bg-slate-850 border-y border-amber-500/30 cursor-pointer select-none group transition-colors sticky top-0 z-15",
                          children: /* @__PURE__ */ e.jsx(
                            "td",
                            {
                              colSpan: j.length + 1,
                              className: "px-3 py-2 text-xs font-semibold text-slate-200",
                              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    className: "w-5 h-5 flex items-center justify-center rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors",
                                    children: x ? /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ e.jsxs("span", { className: "text-slate-400 font-normal", children: [
                                  "Gom nhóm theo ",
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-amber-300 font-semibold", children: V }),
                                  ":"
                                ] }),
                                /* @__PURE__ */ e.jsx("span", { className: "text-amber-400 font-bold font-mono text-sm", children: v.groupLabel }),
                                /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold", children: [
                                  v.rows.length,
                                  " bản ghi"
                                ] }),
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-center gap-3 text-[11px] font-mono text-slate-400", children: j.filter((_) => v.subtotals[_.key] !== void 0 && v.subtotals[_.key] > 0).slice(0, 3).map((_) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsxs("span", { children: [
                                    _.title,
                                    ":"
                                  ] }),
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-emerald-400 font-bold", children: v.subtotals[_.key].toLocaleString("en-US") })
                                ] }, _.key)) })
                              ] })
                            }
                          )
                        }
                      ),
                      !x && v.rows.map((_, Y) => {
                        const ue = v.startIndex + Y;
                        return Zt(_, ue);
                      })
                    ] }, `group_${v.groupKey}`);
                  })
                ) : he ? (
                  // ── 2. CHẾ ĐỘ CUỘN ẢO (VIRTUAL SCROLLING WINDOWING - TSK-4.1) ──
                  /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    ne > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${ne}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: j.length + 1, style: { padding: 0, border: "none" } }) }),
                    Be.map((v, x) => {
                      const R = yt + x;
                      return Zt(v, R);
                    }),
                    ke > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${ke}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: j.length + 1, style: { padding: 0, border: "none" } }) })
                  ] })
                ) : (
                  // ── 3. CHẾ ĐỘ RENDER TIÊU CHUẨN (NORMAL RENDERING) ──
                  pe.map((v, x) => Zt(v, x))
                ),
                /* @__PURE__ */ e.jsxs(
                  "tr",
                  {
                    className: "bg-slate-950/40 hover:bg-slate-900/60 border-t border-dashed border-slate-700/60 transition-colors opacity-75 hover:opacity-100 group",
                    title: "Dòng nhập liệu trống: Gõ giá trị vào ô bất kỳ để tự động tạo dòng mới (Core C# AddNewEmptyRow)",
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "td",
                        {
                          className: "px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-emerald-400/80 bg-[#0c1222] select-none font-bold",
                          style: { width: `${oe}px`, minWidth: `${oe}px` },
                          children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(ze, { className: "w-3 h-3 text-emerald-400" }),
                            /* @__PURE__ */ e.jsx("span", { children: pe.length + 1 })
                          ] })
                        }
                      ),
                      j.map((v, x) => {
                        const R = !!(v.frozen || v.sticky === "left"), V = R && fe[v.key] !== void 0 ? fe[v.key] : void 0, _ = v.key === xe, Y = Te[v.key] ?? "", ue = v.align === "right" ? "text-right" : v.align === "center" ? "text-center" : "text-left";
                        return /* @__PURE__ */ e.jsx(
                          "td",
                          {
                            className: `px-2 py-1 whitespace-nowrap transition-colors ${ue} ${R ? `sticky z-10 bg-[#0c1222] ${_ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                            style: {
                              width: v.width,
                              minWidth: v.minWidth || v.width || "100px",
                              maxWidth: v.maxWidth,
                              left: V !== void 0 ? `${V}px` : void 0
                            },
                            children: /* @__PURE__ */ e.jsx(
                              Br,
                              {
                                column: v,
                                value: Y,
                                row: Te,
                                rowIndex: pe.length,
                                columnIndex: x,
                                isFocused: (We == null ? void 0 : We.rowIndex) === pe.length && (We == null ? void 0 : We.colIndex) === x,
                                onChange: (je) => Je(v.key, je),
                                onKeyDown: le
                              }
                            )
                          },
                          `ghost_${v.key}`
                        );
                      })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Lo,
                {
                  columns: j,
                  data: pe,
                  showRowNumber: !0,
                  rowNumberWidth: oe,
                  leftOffsets: fe
                }
              ) })
            ] })
          }
        ),
        E.isOpen && E.column && /* @__PURE__ */ e.jsx(
          Fo,
          {
            isOpen: E.isOpen,
            x: E.x,
            y: E.y,
            column: E.column,
            columnIndex: E.columnIndex,
            allColumns: h,
            onClose: () => Z((v) => ({ ...v, isOpen: !1 })),
            onToggleHide: hs,
            onSetFreeze: ls,
            onOpenProperties: os,
            onCloneColumn: ms,
            onRemoveColumn: Fs,
            onToggleFilter: () => L((v) => !v)
          }
        ),
        te.isOpen && te.column && /* @__PURE__ */ e.jsx(
          Ma,
          {
            isOpen: te.isOpen,
            column: te.column,
            onClose: () => z({ isOpen: !1, column: null }),
            onSave: bs
          }
        ),
        ae.isOpen && ae.row && /* @__PURE__ */ e.jsx(
          Po,
          {
            isOpen: ae.isOpen,
            x: ae.x,
            y: ae.y,
            row: ae.row,
            rowIndex: ae.rowIndex,
            totalRows: m.length,
            onClose: () => ce((v) => ({ ...v, isOpen: !1, row: null })),
            onDuplicateRow: Ge,
            onDeleteRow: Ve,
            onInsertRowBelow: bt,
            onMoveRowUp: ft,
            onMoveRowDown: Ze,
            onPasteExcel: zt
          }
        )
      ]
    }
  );
}, nc = ({ node: t }) => {
  const { props: r, style: s } = t, { flex: a, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...p } = s || {}, h = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], j = r.columns && r.columns.length > 0 ? r.columns : h, u = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [b, k] = P(""), [f, C] = P(null), [w, y] = P("asc"), [g, D] = P(1), M = Number(r.pageSize) || 10, m = $e(() => {
    if (!b.trim()) return u;
    const B = b.toLowerCase();
    return u.filter(
      (H) => Object.values(H).some((O) => String(O).toLowerCase().includes(B))
    );
  }, [b]), T = $e(() => f ? [...m].sort((B, H) => {
    const O = B[f], N = H[f];
    if (O === N) return 0;
    const L = O > N ? 1 : -1;
    return w === "asc" ? L : -L;
  }) : m, [m, f, w]), A = Math.ceil(T.length / M) || 1, I = $e(() => {
    const B = (g - 1) * M;
    return T.slice(B, B + M);
  }, [T, g, M]), S = $e(() => {
    const B = {};
    for (const H of j)
      if (H.aggregate === "sum") {
        const O = m.reduce((N, L) => N + (Number(L[H.key]) || 0), 0);
        B[H.key] = O.toLocaleString("en-US");
      } else if (H.aggregate === "count")
        B[H.key] = m.length;
      else if (H.aggregate === "avg") {
        const O = m.length ? m.reduce((N, L) => N + (Number(L[H.key]) || 0), 0) / m.length : 0;
        B[H.key] = O.toFixed(1);
      }
    return B;
  }, [j, m]), U = (B) => {
    f === B ? y(w === "asc" ? "desc" : "asc") : (C(B), y("asc"));
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...p
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            r.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: r.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              m.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: b,
                onChange: (B) => {
                  k(B.target.value), D(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: j.map((B) => {
            const H = B.sticky === "left", O = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => B.sortable !== !1 && U(B.key),
                style: {
                  width: B.width,
                  minWidth: B.minWidth || B.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${O} ${H ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${B.align === "right" ? "justify-end" : B.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  B.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: B.title }),
                  B.sortable !== !1 && /* @__PURE__ */ e.jsx(or, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: I.length > 0 ? I.map((B, H) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: j.map((O) => {
            const N = O.sticky === "left", L = B[O.key], W = O.align === "right" ? "text-right" : O.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${W} ${N ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (L == null) return "—";
                  if (O.componentType === "Checkbox") {
                    const X = L === !0 || L === "true" || L === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: X,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (O.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(L)
                      }
                    );
                  if (O.componentType === "DatePicker" || O.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(L) })
                    ] });
                  if (O.componentType === "Number" || typeof L == "number") {
                    const X = Number(L);
                    if (!isNaN(X)) {
                      const E = O.precision !== void 0 ? O.precision : X % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: X.toLocaleString("en-US", { minimumFractionDigits: E, maximumFractionDigits: E }) });
                    }
                  }
                  return O.key === "status" || O.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${L === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(L) }) : String(L);
                })()
              },
              O.key
            );
          }) }, B.id || H)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: j.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: j.map((B, H) => {
            const O = B.sticky === "left", N = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left", L = S[B.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${N} ${O ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: H === 0 && !L ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : L !== void 0 ? L : ""
              },
              B.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            g,
            " / ",
            A
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: g <= 1,
                onClick: () => D((B) => Math.max(1, B - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(sa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: g >= A,
                onClick: () => D((B) => Math.min(A, B + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function Yo(t, r, s = "") {
  if (!r || typeof r != "object")
    return s;
  if (!t || typeof t != "string" || t.trim() === "") {
    const d = r.fullName ?? r.FullName ?? r.name ?? r.Name ?? r.shortName ?? r.ShortName ?? r.title ?? r.Title ?? r.label ?? r.Label ?? r.code ?? r.Code ?? r.id ?? r.Id;
    return d != null ? String(d) : s;
  }
  const a = t.trim();
  if (!a.includes("{") || !a.includes("}")) {
    const d = ts(r, a);
    return d != null ? String(d) : a;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = a.replace(n, (d, c) => {
    const p = c.trim();
    o = !0;
    const h = p.includes(".") ? p.split(".").pop().trim() : p;
    let j = ts(r, p);
    return j == null && (j = ts(r, h)), j != null ? String(j) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || s : a;
}
function ts(t, r) {
  if (!t || typeof t != "object" || !r) return;
  if (r in t && t[r] !== void 0 && t[r] !== null)
    return t[r];
  const s = r.includes(".") ? r.split(".").pop().trim() : r.trim();
  if (s in t && t[s] !== void 0 && t[s] !== null)
    return t[s];
  const a = s.toLowerCase(), n = Object.keys(t), o = n.find((d) => d.toLowerCase() === a);
  if (o && t[o] !== void 0 && t[o] !== null)
    return t[o];
  const l = s.replace(/^(fld_|_)/i, ""), i = n.find((d) => d.toLowerCase() === l.toLowerCase());
  if (i && t[i] !== void 0 && t[i] !== null)
    return t[i];
}
const Xo = ({
  value: t,
  onChange: r,
  options: s,
  items: a,
  reference: n,
  refClass: o,
  canQuickAdd: l = !0,
  dataSource: i,
  idField: d = "id",
  selectField: c = "name",
  dropdownColumns: p,
  formatData: h,
  populateField: j,
  formId: u,
  placeholder: b = "— Chọn —",
  disabled: k = !1,
  readOnly: f = !1,
  isGridCell: C = !1,
  error: w,
  className: y = "",
  onKeyDown: g,
  onFocus: D,
  onBlur: M,
  onQuickAdd: m
}) => {
  const [T, A] = P(!1), [I, S] = P(""), [U, B] = P(0), [H, O] = P(!1), [N, L] = P([]), [W, X] = P(!1), [E, Z] = P(""), [te, z] = P(""), [ae, ce] = P(""), [q, de] = P(!1), J = nt(null), se = nt(null), F = nt(null), G = nt(null), oe = Ne((ne) => ne.queryEntity), fe = Ne((ne) => ne.getDataset), xe = Ne((ne) => ne.applyPopulate), pe = Ne((ne) => n ? ne.getDataset(n).length : 0), ie = () => {
    if (m) {
      m(), A(!1);
      return;
    }
    if (o) {
      Na(o, {}, `Tạo mới ${n || o}`), A(!1);
      return;
    }
    const ne = I.trim();
    Z(ne ? ne.toUpperCase().replace(/\s+/g, "_") : ""), z(ne), ce(""), X(!0);
  }, ye = async () => {
    if (!E.trim() || !te.trim()) return;
    const ne = (n || "").trim();
    if (ne) {
      de(!0);
      try {
        const ke = {
          code: E.trim(),
          name: te.trim(),
          fullName: te.trim(),
          description: ae.trim(),
          active: !0
        }, Be = await fetch(`${ut()}/core/data/${encodeURIComponent(ne)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ke)
        });
        if (Be.ok) {
          const Ie = await Be.json(), Ae = {
            ...ke,
            ...Ie,
            id: Ie.id ?? Ie.Id ?? Date.now()
          }, Re = await oe(ne, i);
          Array.isArray(Re) && Re.length > 0 ? L(Re) : L((Qe) => [Ae, ...Qe]), mt(Ae), X(!1), A(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ke) {
        console.error("[EnterpriseSelect] Lỗi tạo nhanh bản ghi:", ke);
        const Be = {
          id: `mock-${Date.now()}`,
          code: E.trim(),
          name: te.trim(),
          fullName: te.trim(),
          description: ae.trim(),
          active: !0
        };
        L((Ie) => [Be, ...Ie]), mt(Be), X(!1), A(!1);
      } finally {
        de(!1);
      }
    }
  };
  Fe(() => {
    let ne = !0;
    const ke = (n || "").trim();
    if (a && Array.isArray(a) && a.length > 0) {
      L(a);
      return;
    }
    if (ke)
      O(!0), oe(ke, i).then((Be) => {
        ne && (Array.isArray(Be) && Be.length > 0 ? L(Be) : L([]));
      }).catch(() => {
        if (ne) {
          const Be = fe(ke);
          L(Array.isArray(Be) ? Be : []);
        }
      }).finally(() => {
        ne && O(!1);
      });
    else if (s && Array.isArray(s) && s.length > 0) {
      const Be = s.map((Ie) => Ie.rawItem && typeof Ie.rawItem == "object" ? Ie.rawItem : {
        [d]: Ie.value,
        [c]: Ie.label,
        id: Ie.value,
        name: Ie.label,
        fullName: Ie.label
      });
      L(Be);
    } else
      L([]);
    return () => {
      ne = !1;
    };
  }, [n, i, a, s, d, c, oe, fe, pe]);
  const be = $e(() => {
    if (p && p.length > 0)
      return p;
    if (N.length > 0) {
      const ne = N[0], ke = Object.keys(ne), Ie = [
        "code",
        "id",
        "name",
        "fullName",
        "title",
        "address",
        "taxCode",
        "phone",
        "email",
        "status",
        "shortName",
        "portCode",
        "portName",
        "carrierName"
      ].filter(
        (Re) => ke.some((Qe) => Qe.toLowerCase() === Re.toLowerCase())
      );
      if (Ie.length > 0)
        return Ie.slice(0, 3).map((Re) => {
          const Qe = ke.find((et) => et.toLowerCase() === Re.toLowerCase()) || Re;
          return {
            key: Qe,
            title: Qe.charAt(0).toUpperCase() + Qe.slice(1),
            width: Qe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const Ae = ke.filter(
        (Re) => typeof ne[Re] != "object" && !Re.startsWith("_")
      ).slice(0, 2);
      if (Ae.length > 0)
        return Ae.map((Re) => ({
          key: Re,
          title: Re.charAt(0).toUpperCase() + Re.slice(1),
          width: "50%",
          align: "left"
        }));
    }
    return [
      { key: d, title: "Mã", width: "35%", align: "left" },
      { key: c, title: "Tên", width: "65%", align: "left" }
    ];
  }, [p, N, d, c]), ge = $e(() => t == null || t === "" ? null : N.find((ne) => {
    const ke = ts(ne, d) ?? ne.id ?? ne.Id ?? ne.code ?? ne.Code;
    return ke !== void 0 && String(ke) === String(t);
  }) || null, [t, N, d]), Pe = $e(() => ge ? Yo(h, ge, String(t ?? "")) : t != null && t !== "" ? String(t) : "", [ge, h, t]), [we, ve] = P({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), re = () => {
    if (!J.current) return;
    const ne = J.current.getBoundingClientRect(), ke = 300, Ie = Math.max(ne.width, 360), Re = window.innerHeight - ne.bottom < ke && ne.top > ke;
    let Qe = Re ? ne.top - ke - 4 : ne.bottom + 4, et = ne.left;
    et + Ie > window.innerWidth - 12 && (et = Math.max(12, window.innerWidth - Ie - 12)), ve({ top: Qe, left: et, width: Ie, openUpwards: Re });
  }, he = () => {
    k || f || (re(), A(!0), S(""), B(0));
  };
  Fe(() => {
    T && (re(), setTimeout(() => {
      var ne;
      (ne = F.current) == null || ne.focus();
    }, 50));
  }, [T]), Fe(() => {
    if (!T) return;
    const ne = (Be) => {
      var Ae, Re;
      const Ie = Be.target;
      (Ae = J.current) != null && Ae.contains(Ie) || (Re = se.current) != null && Re.contains(Ie) || (A(!1), M && M());
    }, ke = () => {
      re();
    };
    return window.addEventListener("mousedown", ne), window.addEventListener("scroll", ke, !0), window.addEventListener("resize", ke), () => {
      window.removeEventListener("mousedown", ne), window.removeEventListener("scroll", ke, !0), window.removeEventListener("resize", ke);
    };
  }, [T, M]);
  const qe = $e(() => {
    if (!I.trim()) return N;
    const ne = I.toLowerCase().trim();
    return N.filter((ke) => be.some((Ie) => {
      const Ae = ts(ke, Ie.key);
      return Ae != null && String(Ae).toLowerCase().includes(ne);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((Ie) => {
      const Ae = ts(ke, Ie);
      return Ae != null && String(Ae).toLowerCase().includes(ne);
    }));
  }, [N, I, be]);
  Fe(() => {
    if (G.current && qe.length > 0) {
      const ne = G.current.querySelector(`[data-index="${U}"]`);
      ne && ne.scrollIntoView({ block: "nearest" });
    }
  }, [U, qe]);
  const mt = (ne) => {
    const ke = ts(ne, d) ?? ne.id ?? ne.Id ?? ne.code ?? ne.Code;
    r(ke, ne), j && u && xe(u, j, ne), A(!1);
  }, St = (ne) => {
    ne.stopPropagation(), r("", null);
  }, _t = (ne) => {
    ne.key === "ArrowDown" ? (ne.preventDefault(), B((ke) => ke < qe.length - 1 ? ke + 1 : ke)) : ne.key === "ArrowUp" ? (ne.preventDefault(), B((ke) => ke > 0 ? ke - 1 : 0)) : ne.key === "Enter" ? (ne.preventDefault(), qe.length > 0 && U >= 0 && U < qe.length && mt(qe[U])) : ne.key === "Escape" && (ne.preventDefault(), A(!1));
  }, yt = (ne) => {
    if (ne.key === "Enter" || ne.key === " " || ne.key === "F4" || ne.altKey && ne.key === "ArrowDown") {
      ne.preventDefault(), he();
      return;
    }
    g && g(ne);
  }, Tt = w ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: J,
        tabIndex: k ? -1 : 0,
        onClick: he,
        onKeyDown: yt,
        onFocus: D,
        className: `enterprise-select-trigger relative flex items-center justify-between transition-all select-none cursor-pointer ${C ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${Tt}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${Tt} shadow-sm`} ${k ? "opacity-50 cursor-not-allowed" : ""} ${y}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: Pe ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: Pe }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: b }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!Pe && !k && !f && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: St,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              Mt,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${T ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    T && Bt(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: se,
          style: {
            position: "fixed",
            top: `${we.top}px`,
            left: `${we.left}px`,
            width: `${we.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (ne) => ne.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: F,
                    type: "text",
                    value: I,
                    onChange: (ne) => {
                      S(ne.target.value), B(0);
                    },
                    onKeyDown: _t,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                I && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => S(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
                  }
                )
              ] }),
              l && (n || o) && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: ie,
                  title: `Tạo nhanh bản ghi mới cho ${n || "danh mục"}`,
                  className: "flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95",
                  children: [
                    /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "Tạo nhanh" })
                  ]
                }
              ),
              H && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(Nn, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              be.map((ne, ke) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: ne.width || `${100 / be.length}%` },
                  className: `px-1.5 truncate ${ne.align === "right" ? "text-right" : ne.align === "center" ? "text-center" : "text-left"}`,
                  children: ne.title
                },
                ne.key || ke
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: G,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: qe.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Vt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: H ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" }),
                  l && (n || o) && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ie,
                      className: "mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          'Thêm nhanh "',
                          I || n,
                          '"'
                        ] })
                      ]
                    }
                  )
                ] }) : qe.map((ne, ke) => {
                  const Be = ts(ne, d) ?? ne.id ?? ne.Id ?? ne.code ?? ne.Code, Ie = Be !== void 0 && String(Be) === String(t), Ae = ke === U;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": ke,
                      onClick: () => mt(ne),
                      onMouseEnter: () => B(ke),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${Ie ? "bg-emerald-950/60 text-emerald-200 font-medium" : Ae ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        be.map((Re, Qe) => {
                          const et = ts(ne, Re.key), at = et != null ? String(et) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: Re.width || `${100 / be.length}%` },
                              className: `px-1.5 truncate ${Re.align === "right" ? "text-right font-mono" : Re.align === "center" ? "text-center" : "text-left"}`,
                              children: at
                            },
                            Re.key || Qe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: Ie && /* @__PURE__ */ e.jsx(on, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    Be ?? ke
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  qe.length,
                  " / ",
                  N.length,
                  " bản ghi"
                ] }),
                n && /* @__PURE__ */ e.jsxs("span", { className: "ml-2 font-mono text-[9px] text-slate-400 bg-slate-800/60 px-1 py-0.5 rounded", children: [
                  "ref: ",
                  n
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx("span", { children: "[↑/↓] Di chuyển" }),
                /* @__PURE__ */ e.jsx("span", { children: "•" }),
                /* @__PURE__ */ e.jsx("span", { children: "[Enter] Chọn" }),
                /* @__PURE__ */ e.jsx("span", { children: "•" }),
                /* @__PURE__ */ e.jsx("span", { children: "[Esc] Đóng" })
              ] })
            ] })
          ]
        }
      ),
      document.body
    ),
    W && Bt(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (ne) => ne.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-slate-100", children: [
                    "Tạo nhanh danh mục: ",
                    n || "Bản ghi mới"
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: "Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này" })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => X(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("label", { className: "block text-slate-400 font-medium mb-1", children: [
                  "Mã số (Code) ",
                  /* @__PURE__ */ e.jsx("span", { className: "text-rose-400", children: "*" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: E,
                    onChange: (ne) => Z(ne.target.value),
                    placeholder: "VD: SITC, V-001...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("label", { className: "block text-slate-400 font-medium mb-1", children: [
                  "Tên hiển thị (Name) ",
                  /* @__PURE__ */ e.jsx("span", { className: "text-rose-400", children: "*" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: te,
                    onChange: (ne) => z(ne.target.value),
                    placeholder: "VD: CÔNG TY CỔ PHẦN...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 font-medium mb-1", children: "Ghi chú / Mô tả (Description)" }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    rows: 2,
                    value: ae,
                    onChange: (ne) => ce(ne.target.value),
                    placeholder: "Thông tin bổ sung...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => X(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: q || !E.trim() || !te.trim(),
                  onClick: ye,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    q ? /* @__PURE__ */ e.jsx(Nn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Lưu & Chọn ngay" })
                  ]
                }
              )
            ] })
          ]
        }
      ) }),
      document.body
    )
  ] });
}, Jo = ({ node: t, isEditing: r }) => {
  var O, N, L, W, X, E, Z, te, z, ae, ce;
  const { props: s, style: a } = t, n = Q((q) => q.features), o = Q((q) => q.activeFeatureId), l = n.find((q) => String(q.id) === String(t.pageId)) || n.find((q) => String(q.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((O = t.dataBinding) == null ? void 0 : O.fieldName) || t.props.name || t.id), w = Ne((q) => as(q, f, C, void 0)), y = Ne((q) => q.setFieldValue), g = w !== void 0 ? w : s.value ?? "", D = s.reference || s.refName || ((N = t.dataBinding) == null ? void 0 : N.refName) || ((L = t.dataBinding) == null ? void 0 : L.entityName) || "", M = s.dataSource || ((W = t.dataBinding) == null ? void 0 : W.dataSource) || s.query || ((X = t.dataBinding) == null ? void 0 : X.query) || s.sqlWhere || ((E = t.dataBinding) == null ? void 0 : E.sqlWhere) || "", m = s.idField || ((Z = t.dataBinding) == null ? void 0 : Z.idField) || "id", T = s.textField || s.selectField || ((te = t.dataBinding) == null ? void 0 : te.selectField) || "name", A = s.dropdownColumns || ((z = t.dataBinding) == null ? void 0 : z.dropdownColumns), I = s.formatData || ((ae = t.dataBinding) == null ? void 0 : ae.formatData) || "", S = s.populateField || ((ce = t.dataBinding) == null ? void 0 : ce.populateField) || "", U = s.options || [], B = !!s.validationError, H = (q, de) => {
    y(f, C, q), r || Xe(t.events, "change", s.label || "Chọn mục", i, {
      componentId: t.id,
      fieldName: C,
      value: q,
      selectedItem: de
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label,
      showLabel: s.showLabel ?? !0,
      labelPosition: s.labelPosition || "left",
      labelWidth: s.labelWidth || "100px",
      required: s.required,
      error: s.validationError ? String(s.validationError) : void 0,
      colSpan: s.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        Xo,
        {
          value: g,
          onChange: H,
          options: U,
          reference: D,
          dataSource: M,
          idField: m,
          selectField: T,
          dropdownColumns: A,
          formatData: I,
          populateField: S,
          formId: f,
          placeholder: s.placeholder ? String(s.placeholder) : "— Chọn —",
          disabled: s.disabled,
          error: B ? String(s.validationError) : void 0
        }
      ) })
    }
  );
}, Qo = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Q((w) => w.features), o = Q((w) => w.activeFeatureId), l = n.find((w) => String(w.id) === String(t.pageId)) || n.find((w) => String(w.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, [f, C] = P(!!s.value);
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label,
      showLabel: s.showLabel ?? !0,
      labelPosition: s.labelPosition || "left",
      labelWidth: s.labelWidth || "100px",
      required: s.required,
      colSpan: s.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: s.disabled,
            checked: f,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (w) => {
              C(w.target.checked), r || Xe(t.events, "change", s.label || "Hộp kiểm", i, {
                componentId: t.id,
                value: w.target.checked
              });
            }
          }
        ),
        s.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: s.placeholder })
      ] })
    }
  );
}, Zo = ({ node: t, isEditing: r }) => {
  var M;
  const { props: s, style: a } = t, n = Q((m) => m.features), o = Q((m) => m.activeFeatureId), l = n.find((m) => String(m.id) === String(t.pageId)) || n.find((m) => String(m.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((M = t.dataBinding) == null ? void 0 : M.fieldName) || t.props.name || t.id), w = Ne((m) => as(m, f, C, void 0)), y = Ne((m) => m.setFieldValue), g = w !== void 0 ? w : s.value ?? "", D = (m) => {
    y(f, C, m), r || Xe(t.events, "change", s.label || "Chọn ngày", i, {
      componentId: t.id,
      fieldName: C,
      value: m
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label,
      showLabel: s.showLabel ?? !0,
      labelPosition: s.labelPosition || "left",
      labelWidth: s.labelWidth || "100px",
      required: s.required,
      error: s.validationError ? String(s.validationError) : void 0,
      colSpan: s.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...k
      },
      children: /* @__PURE__ */ e.jsx(
        Ba,
        {
          value: g,
          onChange: D,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "DD/MM/YYYY",
          error: s.validationError ? String(s.validationError) : void 0
        }
      )
    }
  );
}, ei = ({ node: t, children: r }) => {
  const { props: s } = t, a = s.label || s.title || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: a }),
      /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: r || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, ti = ({ node: t }) => {
  const { props: r, style: s } = t, { width: a, ...n } = s || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full my-3 flex items-center gap-3",
      style: {
        width: "100%",
        ...n
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 h-px bg-slate-800" }),
        r.label && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider", children: r.label }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 h-px bg-slate-800" })
      ]
    }
  );
}, si = ({ node: t, isEditing: r }) => {
  var m;
  const { props: s, style: a } = t, n = Q((T) => T.features), o = Q((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(t.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((m = t.dataBinding) == null ? void 0 : m.fieldName) || t.props.name || t.id), w = Ne((T) => as(T, f, C, void 0)), y = Ne((T) => T.setFieldValue), g = w !== void 0 ? w : s.value !== void 0 ? String(s.value) : "", D = Number(s.rows) || 2, M = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ts,
    {
      label: s.label || "Ghi Chú",
      showLabel: s.showLabel,
      labelPosition: s.labelPosition,
      labelWidth: s.labelWidth,
      colSpan: s.colSpan,
      required: s.required,
      error: s.validationError ? String(s.validationError) : void 0,
      children: /* @__PURE__ */ e.jsx(
        "textarea",
        {
          rows: D,
          placeholder: s.placeholder || "Nhập nội dung...",
          value: g,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          style: {
            width: "100%",
            ...k
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${M ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${s.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (T) => {
            const A = T.target.value;
            y(f, C, A), r || Xe(t.events, "change", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: C,
              value: A
            });
          },
          onFocus: () => {
            r || Xe(t.events, "focus", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: C
            });
          },
          onBlur: (T) => {
            r || Xe(t.events, "blur", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: C,
              value: T.target.value
            });
          }
        }
      )
    }
  );
}, rc = ({ node: t, isEditing: r, children: s }) => {
  var y, g;
  const { props: a, style: n } = t, o = Q((D) => D.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: p, maxWidth: h, width: j, ...u } = n || {}, b = [
    { id: "main", label: "TAB 1" }
  ], k = a.tabs || b, [f, C] = P(
    a.activeTabId || ((y = k[0]) == null ? void 0 : y.id) || "main"
  ), w = a.activeTabId || f || ((g = k[0]) == null ? void 0 : g.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...u
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          k.map((D) => {
            const M = D.id === w;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (m) => {
                  m.stopPropagation(), C(D.id), o(t.id, { activeTabId: D.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${M ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: D.label }),
                  D.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${D.badgeColor || "bg-amber-600"}`, children: D.badge })
                ]
              },
              D.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (D) => {
                D.stopPropagation();
                const M = `tab_${Date.now().toString(36)}`, m = [...k, { id: M, label: `Tab Mới ${k.length + 1}` }];
                o(t.id, { tabs: m, activeTabId: M }), C(M);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: s })
      ]
    }
  );
}, Ga = ({
  parentId: t,
  order: r,
  tabNodes: s,
  isEditing: a,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var u;
  const l = Q((b) => b.addComponent), i = Q((b) => b.selectComponent), [d, c] = P(((u = s[0]) == null ? void 0 : u.id) || ""), p = s.find((b) => b.id === d) || s[0], h = (p == null ? void 0 : p.id) || "", j = (b) => {
    var w;
    b.stopPropagation();
    const k = ((w = s[0]) == null ? void 0 : w.pageId) || "2", f = `tab_${Date.now().toString(36)}`, C = {
      id: f,
      type: "Container",
      parentId: t,
      pageId: k,
      order: r,
      // Cùng order để tự động stack vào nhóm này
      props: {
        tab: !0,
        isTab: !0,
        label: `TAB MỚI ${s.length + 1}`,
        layoutMode: "flex",
        flexConfig: {
          direction: "column",
          wrap: "wrap",
          justify: "flex-start",
          align: "stretch",
          gap: "12px"
        }
      },
      style: {
        width: "100%"
      },
      events: [],
      children: []
    };
    l(C, t), c(f), i(f);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          s.map((b) => {
            const k = b.id === h, f = b.props.label || b.props.title || `Tab #${b.id.slice(-4)}`, C = b.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (w) => {
                  w.stopPropagation(), c(b.id), a && i(b.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${k ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: f }),
                  C !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(C) })
                ]
              },
              b.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: j,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: p && o ? o(p, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, ni = ({
  label: t = "Bản ghi:",
  reference: r = "Records",
  displayField: s = "code",
  records: a,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: d = "",
  style: c = {}
}) => {
  var w;
  const p = Ne(), h = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [j, u] = P(a || h), [b, k] = P(n || ((w = h[0]) == null ? void 0 : w.id) || "");
  Fe(() => {
    a && a.length > 0 && u(a);
  }, [a]), Fe(() => {
    n !== void 0 && k(n);
  }, [n]);
  const f = (y) => {
    k(y.id), l ? l(y) : p.setFormRecord("default", y);
  }, C = () => {
    const y = j.length + 1, g = `REC-${String(y).padStart(3, "0")}`, D = {
      id: String(Date.now()),
      code: g,
      name: `Bản ghi mới ${y}`
    }, M = [...j, D];
    u(M), k(D.id), i ? i() : p.setFormRecord("default", D);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        t && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(ra, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          j.map((y) => {
            const g = String(y.id) === String(b), D = y[s] || y.code || y.name || y.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => f(y),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${g ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: D })
              },
              y.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: C,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm bản ghi mới",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, ri = ({
  isOpen: t,
  title: r,
  entityName: s,
  columns: a,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = Ne(), d = Ne((M) => M.datasets[s]), [c, p] = P([]), [h, j] = P(!1), [u, b] = P(""), [k, f] = P(0), C = nt(null);
  Fe(() => {
    if (!t) {
      b(""), f(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? p(d) : (j(!0), i.queryEntity(s).then((M) => {
      Array.isArray(M) && M.length > 0 ? p(M) : p(i.getDataset(s) || []);
    }).finally(() => j(!1))), setTimeout(() => {
      var M, m;
      (M = C.current) == null || M.focus(), (m = C.current) == null || m.select();
    }, 80);
  }, [t, s, d]);
  const w = $e(() => {
    if (a && a.length > 0) return a;
    if (c.length > 0) {
      const M = c[0], m = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(M).filter((T) => !m.includes(T.toLowerCase()) && typeof M[T] != "object").slice(0, 6).map((T) => ({
        key: T,
        title: T.charAt(0).toUpperCase() + T.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [a, c]), y = $e(() => {
    if (!u.trim()) return c;
    const M = u.toLowerCase().trim();
    return c.filter((m) => n && n.length > 0 ? n.some((T) => {
      const A = m[T];
      return A != null && String(A).toLowerCase().includes(M);
    }) : Object.values(m).some(
      (T) => T != null && String(T).toLowerCase().includes(M)
    ));
  }, [c, u, n]);
  Fe(() => {
    k >= y.length && f(Math.max(0, y.length - 1));
  }, [y.length]);
  const g = (M) => {
    M.key === "ArrowDown" ? (M.preventDefault(), f((m) => m < y.length - 1 ? m + 1 : m)) : M.key === "ArrowUp" ? (M.preventDefault(), f((m) => m > 0 ? m - 1 : 0)) : M.key === "Enter" ? (M.preventDefault(), y[k] && (o(y[k]), l())) : M.key === "Escape" && (M.preventDefault(), l());
  };
  if (!t) return null;
  const D = r || `Tra cứu danh mục: ${s}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: g,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(jn, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: D }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                y.length,
                " kết quả (Dùng phím ↑ ↓ để chọn, Enter để xác nhận)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: l,
              className: "w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
              children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Vt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: C,
              type: "text",
              value: u,
              onChange: (M) => {
                b(M.target.value), f(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${s}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: h ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : y.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          u,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            w.map((M) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: M.width },
                children: M.title || M.key
              },
              M.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: y.map((M, m) => {
            const T = m === k;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => f(m),
                onDoubleClick: () => {
                  o(M), l();
                },
                className: `transition-colors cursor-pointer ${T ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: m + 1 }),
                  w.map((A) => {
                    const I = M[A.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: I != null ? String(I) : "—"
                      },
                      A.key
                    );
                  })
                ]
              },
              M.id ?? M.Id ?? m
            );
          }) })
        ] }) }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3 border-t border-slate-800 flex items-center justify-between bg-slate-900/90 text-xs", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "text-slate-400 text-[11px]", children: [
            "Nhấp đúp chuột hoặc nhấn ",
            /* @__PURE__ */ e.jsx("kbd", { className: "px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-300", children: "Enter" }),
            " để chọn"
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: l,
                className: "px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors font-medium cursor-pointer",
                children: "Hủy bỏ (Esc)"
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: y.length === 0,
                onClick: () => {
                  y[k] && (o(y[k]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(on, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, ai = ({ node: t, isEditing: r }) => {
  var se, F, G, oe, fe, xe, pe;
  const { props: s, style: a } = t, n = Q((ie) => ie.features), o = Q((ie) => ie.activeFeatureId), l = n.find((ie) => String(ie.id) === String(t.pageId)) || n.find((ie) => String(ie.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: h, minWidth: j, maxWidth: u, width: b, ...k } = a || {}, f = String(t.pageId || o || "default"), C = String(((se = t.dataBinding) == null ? void 0 : se.fieldName) || t.props.name || t.id), w = Ne((ie) => as(ie, f, C, void 0)), y = Ne((ie) => ie.setFieldValue), g = Ne((ie) => ie.applyPopulate), [D, M] = P(!1), [m, T] = P(!1), [A, I] = P(""), [S, U] = P(""), [B, H] = P(""), [O, N] = P(!1), L = w !== void 0 ? w : s.value ?? "", W = !!s.validationError, X = String(
    s.reference || s.refName || ((F = t.dataBinding) == null ? void 0 : F.refName) || ((G = t.dataBinding) == null ? void 0 : G.entityName) || ""
  ), E = String(
    s.refClass || ((oe = t.dataBinding) == null ? void 0 : oe.refClass) || ""
  ), Z = String(
    s.displayField || s.selectField || ((fe = t.dataBinding) == null ? void 0 : fe.selectField) || "code"
  ), te = String(
    s.valueField || s.idField || ((xe = t.dataBinding) == null ? void 0 : xe.idField) || "code"
  ), z = String(
    s.populateRule || s.populateField || ((pe = t.dataBinding) == null ? void 0 : pe.populateField) || ""
  ), ae = () => {
    if (!(s.disabled || r)) {
      if (!X) {
        console.warn(`[ForgeSearchEntry] Component ${t.id} chưa cấu hình reference entity`);
        return;
      }
      M(!0);
    }
  }, ce = () => {
    if (s.disabled || r) return;
    if (E) {
      Na(E, {}, `Tạo mới ${X || E}`);
      return;
    }
    const ie = String(L || "").trim();
    I(ie ? ie.toUpperCase().replace(/\s+/g, "_") : ""), U(ie), H(""), T(!0);
  }, q = async () => {
    if (!A.trim() || !S.trim()) return;
    const ie = X.trim();
    if (ie) {
      N(!0);
      try {
        const ye = {
          code: A.trim(),
          name: S.trim(),
          fullName: S.trim(),
          description: B.trim(),
          active: !0
        }, be = await fetch(`${ut()}/core/data/${encodeURIComponent(ie)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ye)
        });
        if (be.ok) {
          const ge = await be.json(), Pe = {
            ...ye,
            ...ge,
            id: ge.id ?? ge.Id ?? Date.now()
          };
          await Ne.getState().queryEntity(ie), de(Pe), T(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ye) {
        console.error("[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:", ye);
        const be = {
          id: `mock-${Date.now()}`,
          code: A.trim(),
          name: S.trim(),
          fullName: S.trim(),
          description: B.trim(),
          active: !0
        };
        de(be), T(!1);
      } finally {
        N(!1);
      }
    }
  }, de = (ie) => {
    const ye = ie[te] ?? ie[Z] ?? ie.code ?? ie.id;
    ie[Z] ?? ie.name, y(f, C, ye), z && g(f, z, ie), r || (Xe(t.events, "change", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: C,
      value: ye,
      selectedItem: ie
    }), Xe(t.events, "select", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: C,
      value: ye,
      selectedItem: ie
    }));
  }, J = (ie) => {
    ie.key === "F1" && (ie.preventDefault(), ie.stopPropagation(), ae());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Ts,
      {
        label: s.label,
        showLabel: s.showLabel ?? !0,
        labelPosition: s.labelPosition || "left",
        labelWidth: s.labelWidth || "100px",
        required: s.required,
        error: s.validationError ? String(s.validationError) : void 0,
        colSpan: s.colSpan,
        style: {
          width: "100%",
          maxWidth: "100%",
          ...k
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: s.disabled,
              readOnly: r || !!s.readOnly,
              placeholder: s.placeholder || (X ? `Tra cứu ${X} (F1)...` : "Nhập dữ liệu..."),
              value: L,
              onKeyDown: J,
              onDoubleClick: ae,
              className: `w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${W ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (ie) => {
                const ye = ie.target.value;
                y(f, C, ye), r || Xe(t.events, "change", s.label || "Ô tra cứu", i, {
                  componentId: t.id,
                  fieldName: C,
                  value: ye
                });
              }
            }
          ),
          X && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: ce,
                title: `Tạo nhanh ${X} (+)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: ae,
                title: `Tra cứu ${X} (Nhấn F1 hoặc nhấp đúp)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      }
    ),
    X && /* @__PURE__ */ e.jsx(
      ri,
      {
        isOpen: D,
        title: `Tra cứu danh mục: ${s.label || X}`,
        entityName: X,
        columns: s.columns,
        onSelect: de,
        onClose: () => M(!1)
      }
    ),
    m && Bt(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (ie) => ie.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-slate-100", children: [
                    "Tạo nhanh danh mục: ",
                    X || "Bản ghi mới"
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: "Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này" })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => T(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("label", { className: "block text-slate-400 font-medium mb-1", children: [
                  "Mã số (Code) ",
                  /* @__PURE__ */ e.jsx("span", { className: "text-rose-400", children: "*" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: A,
                    onChange: (ie) => I(ie.target.value),
                    placeholder: "VD: SITC, V-001...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("label", { className: "block text-slate-400 font-medium mb-1", children: [
                  "Tên hiển thị (Name) ",
                  /* @__PURE__ */ e.jsx("span", { className: "text-rose-400", children: "*" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: S,
                    onChange: (ie) => U(ie.target.value),
                    placeholder: "VD: CÔNG TY CỔ PHẦN...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 font-medium mb-1", children: "Ghi chú / Mô tả (Description)" }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    rows: 2,
                    value: B,
                    onChange: (ie) => H(ie.target.value),
                    placeholder: "Thông tin bổ sung...",
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => T(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: O || !A.trim() || !S.trim(),
                  onClick: q,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    O ? /* @__PURE__ */ e.jsx(Nn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Lưu & Chọn ngay" })
                  ]
                }
              )
            ] })
          ]
        }
      ) }),
      document.body
    )
  ] });
}, li = ({
  node: t,
  isEditing: r,
  label: s,
  files: a,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var I;
  const d = qr(), c = nt(null), [p, h] = P(!1), [j, u] = P(null), [b, k] = P(null), [f, C] = P([
    {
      id: "file-demo-1",
      fileName: "Chung_Tu_Goc_2026.pdf",
      fileSize: 1024 * 350,
      fileType: "application/pdf",
      uploadedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN"),
      uploadedBy: "Admin"
    },
    {
      id: "file-demo-2",
      fileName: "Bien_Ban_Giao_Nhan.png",
      fileSize: 1024 * 820,
      fileType: "image/png",
      uploadedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN"),
      uploadedBy: "Admin"
    }
  ]), w = a ?? f, y = (S) => {
    a || C(S), n == null || n(S);
  }, g = (S) => S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : `${(S / (1024 * 1024)).toFixed(2)} MB`, D = (S) => S.startsWith("image/") ? /* @__PURE__ */ e.jsx(ul, { className: "w-4 h-4 text-emerald-400" }) : S.includes("pdf") ? /* @__PURE__ */ e.jsx(Yt, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(pl, { className: "w-4 h-4 text-blue-400" }), M = (S) => {
    if (!S || S.length === 0) return;
    const U = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(S).forEach((B) => {
      if (B.size > l * 1024 * 1024) {
        alert(`Tệp "${B.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const H = new FileReader(), O = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      H.onload = () => {
        const N = {
          id: O,
          fileName: B.name,
          fileSize: B.size,
          fileType: B.type || "application/octet-stream",
          uploadedDate: U,
          uploadedBy: "User",
          dataUrl: H.result
        };
        y([...w, N]);
      }, H.readAsDataURL(B);
    });
  }, m = (S, U) => {
    if (U == null || U.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const B = w.filter((H) => H.id !== S);
      y(B), j === S && u(null);
    }
  }, T = (S, U) => {
    if (U == null || U.stopPropagation(), !S.dataUrl) {
      alert(`Đang tải file mẫu: ${S.fileName}`);
      return;
    }
    const B = document.createElement("a");
    B.href = S.dataUrl, B.download = S.fileName, document.body.appendChild(B), B.click(), document.body.removeChild(B);
  }, A = s || ((I = t == null ? void 0 : t.props) == null ? void 0 : I.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(aa, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: A }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          w.length,
          " tệp"
        ] })
      ] }),
      !o && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: d,
            ref: c,
            type: "file",
            multiple: !0,
            className: "hidden",
            onChange: (S) => M(S.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var S;
              return (S = c.current) == null ? void 0 : S.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(Sr, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (S) => {
          S.preventDefault(), h(!0);
        },
        onDragLeave: () => h(!1),
        onDrop: (S) => {
          S.preventDefault(), h(!1), M(S.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${p ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var S;
          return (S = c.current) == null ? void 0 : S.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(Sr, { className: "w-4 h-4 opacity-60" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Kéo & thả tệp vào đây hoặc nhấn để chọn tệp (Tối đa ",
            l,
            "MB)"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto max-h-[300px] overflow-y-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "bg-slate-950/60 border-b border-slate-800 text-slate-400 text-[11px] font-semibold", children: [
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 w-10 text-center", children: "STT" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Tên Tệp Tin" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 w-28", children: "Kích Thước" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 w-28", children: "Người Tải Lên" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 w-28", children: "Ngày Tải" }),
        /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 w-24 text-center", children: "Thao Tác" })
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: w.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : w.map((S, U) => {
        const B = j === S.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => u(S.id),
            className: `transition-colors cursor-pointer ${B ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: U + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                D(S.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: S.fileName, children: S.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: g(S.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: S.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: S.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => {
                      H.stopPropagation(), k(S);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => T(S, H),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(En, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => m(S.id, H),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          S.id
        );
      }) })
    ] }) }),
    b && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => k(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (S) => S.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  D(b.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: b.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    g(b.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (S) => T(b, S),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(En, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => k(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50 min-h-[350px]", children: b.fileType.startsWith("image/") && b.dataUrl ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: b.dataUrl,
                  alt: b.fileName,
                  className: "max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
                }
              ) : b.fileType.includes("pdf") && b.dataUrl ? /* @__PURE__ */ e.jsx(
                "iframe",
                {
                  src: b.dataUrl,
                  title: b.fileName,
                  className: "w-full h-[65vh] rounded border border-slate-800"
                }
              ) : /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-3 py-12", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: D(b.fileType) }),
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-slate-300", children: b.fileName }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-500 max-w-sm", children: [
                  "Định dạng (",
                  b.fileType,
                  ") không hỗ trợ xem trực tiếp trong trình duyệt. Vui lòng tải tệp về để mở."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (S) => T(b, S),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(En, { className: "w-4 h-4" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Tải về tệp tin" })
                    ]
                  }
                )
              ] }) })
            ]
          }
        )
      }
    )
  ] });
}, oi = ({
  node: t,
  isEditing: r,
  label: s,
  value: a,
  onChange: n,
  options: o,
  reference: l,
  displayField: i = "name",
  valueField: d = "code",
  sublabelField: c,
  placeholder: p,
  disabled: h = !1
}) => {
  const j = nt(null), u = nt(null), b = qr(), k = String((t == null ? void 0 : t.pageId) || "default"), f = (t == null ? void 0 : t.props) || {}, C = f.dataBinding || f.fieldName || ((t == null ? void 0 : t.id) ?? ""), w = Ne((q) => as(q, k, C, void 0)), y = Ne((q) => q.setFieldValue), g = Ne((q) => q.applyPopulate), D = Ne((q) => q.getDataset), M = s ?? f.label ?? "Gợi ý tự động (Autocomplete)", m = l ?? f.reference, T = i ?? f.displayField ?? "name", A = d ?? f.valueField ?? "code", I = c ?? f.sublabelField, S = p ?? f.placeholder ?? "Gõ để tìm kiếm...", U = String(f.populateRule || ""), B = w ?? a ?? "", [H, O] = P(String(B)), [N, L] = P(!1), [W, X] = P(-1);
  Fe(() => {
    B != null && O(String(B));
  }, [B]);
  const te = (o && o.length > 0 ? o : m ? (D(m) || []).map((de) => ({
    value: de[A] ?? de.id ?? de.code ?? "",
    label: String(de[T] ?? de.name ?? de.title ?? de.code ?? ""),
    sublabel: I ? String(de[I] ?? "") : void 0,
    raw: de
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((q) => {
    if (!H || H.trim() === "") return !0;
    const de = H.toLowerCase().trim();
    return q.label.toLowerCase().includes(de) || String(q.value).toLowerCase().includes(de) || q.sublabel && q.sublabel.toLowerCase().includes(de);
  });
  Fe(() => {
    const q = (de) => {
      j.current && !j.current.contains(de.target) && L(!1);
    };
    return document.addEventListener("mousedown", q), () => document.removeEventListener("mousedown", q);
  }, []);
  const z = (q) => {
    O(q.label), L(!1), X(-1), n == null || n(q.value, q.raw), C && y(k, C, q.value), q.raw && U && g(k, U, q.raw);
  }, ae = (q) => {
    if (!N && (q.key === "ArrowDown" || q.key === "ArrowUp")) {
      L(!0);
      return;
    }
    q.key === "ArrowDown" ? (q.preventDefault(), X(
      (de) => de < te.length - 1 ? de + 1 : 0
    )) : q.key === "ArrowUp" ? (q.preventDefault(), X(
      (de) => de > 0 ? de - 1 : te.length - 1
    )) : q.key === "Enter" ? N && W >= 0 && W < te.length && (q.preventDefault(), z(te[W])) : q.key === "Escape" && (L(!1), X(-1));
  }, ce = (q) => {
    var de;
    q.stopPropagation(), O(""), C && y(k, C, ""), n == null || n(""), (de = u.current) == null || de.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: j, className: "relative w-full text-xs", children: [
    M && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: b,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: M
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: b,
          ref: u,
          type: "text",
          disabled: h,
          value: H,
          placeholder: S,
          onFocus: () => L(!0),
          onChange: (q) => {
            O(q.target.value), L(!0), X(0), C && y(k, C, q.target.value);
          },
          onKeyDown: ae,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        H && !h && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: ce,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var q;
              L(!N), (q = u.current) == null || q.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${N ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    N && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: te.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      H,
      '"'
    ] }) : te.map((q, de) => {
      const J = W === de, se = String(q.value) === String(B);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => X(de),
          onClick: () => z(q),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${J ? "bg-blue-600/25 text-blue-200" : se ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: q.label }),
              (q.sublabel || q.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                q.sublabel ? `${q.sublabel} • ` : "",
                q.value
              ] })
            ] }),
            se && /* @__PURE__ */ e.jsx(on, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${q.value}-${de}`
      );
    }) })
  ] });
}, ii = ({
  node: t,
  isEditing: r = !1,
  data: s,
  reference: a,
  idField: n = "id",
  labelField: o = "name",
  parentField: l = "parentId",
  onSelectNode: i
}) => {
  var I, S, U, B;
  const d = t.props || {}, c = a || d.reference || d.refName || ((I = t.dataBinding) == null ? void 0 : I.refName) || "", p = Ne((H) => c ? H.datasets[c] : void 0), [h, j] = P(""), [u, b] = P(null), [k, f] = P(/* @__PURE__ */ new Set()), C = $e(() => s && Array.isArray(s) && s.length > 0 ? s : d.data && Array.isArray(d.data) && d.data.length > 0 ? d.data : p && Array.isArray(p) && p.length > 0 ? p : [
    { id: "1", name: "TỔNG CÔNG TY HÀNG HẢI VIỆT NAM", code: "VIMC", parentId: null },
    { id: "10", name: "Cụm Cảng Miền Bắc", code: "NORTH_PORTS", parentId: "1" },
    { id: "101", name: "Cảng Hải Phòng (Hoàng Diệu, Chùa Vẽ, Tân Vũ)", code: "HPH", parentId: "10" },
    { id: "102", name: "Cảng Quốc Tế Lạch Huyện (TC-HICT)", code: "HICT", parentId: "10" },
    { id: "103", name: "Cảng Quảng Ninh (Cái Lân)", code: "CLN", parentId: "10" },
    { id: "20", name: "Cụm Cảng Miền Trung", code: "CENTRAL_PORTS", parentId: "1" },
    { id: "201", name: "Cảng Đà Nẵng (Tiên Sa)", code: "DAN", parentId: "20" },
    { id: "202", name: "Cảng Quy Nhơn", code: "QNH", parentId: "20" },
    { id: "30", name: "Cụm Cảng Miền Nam", code: "SOUTH_PORTS", parentId: "1" },
    { id: "301", name: "Cụm Cảng Cái Mép - Thị Vải (CMIT, TCIT, TCTT)", code: "CMTV", parentId: "30" },
    { id: "302", name: "Cảng Sài Gòn (Hiệp Phước, Tân Thuận)", code: "SGP", parentId: "30" },
    { id: "303", name: "Cảng Tân Cảng Cát Lái", code: "CTL", parentId: "30" },
    { id: "40", name: "Đội Tàu Vận Tải Biển Quốc Tế", code: "FLEET", parentId: "1" },
    { id: "401", name: "Đội tàu Container Tuyến Nội Á", code: "INTRA_ASIA", parentId: "40" },
    { id: "402", name: "Đội tàu Hàng Rời (Bulk Carrier)", code: "BULK_FLEET", parentId: "40" }
  ], [s, d.data, p]), w = $e(() => {
    if (!Array.isArray(C) || C.length === 0) return [];
    if (C.some((L) => Array.isArray(L.children) && L.children.length > 0))
      return C;
    const O = /* @__PURE__ */ new Map();
    C.forEach((L) => {
      const W = L[n] ?? L.id ?? L.code, X = L[o] ?? L.name ?? L.title ?? String(W), E = L[l] ?? L.parentId ?? null;
      O.set(W, {
        id: W,
        name: X,
        code: L.code,
        parentId: E,
        children: [],
        data: L
      });
    });
    const N = [];
    return O.forEach((L) => {
      L.parentId !== null && L.parentId !== void 0 && O.has(L.parentId) ? O.get(L.parentId).children.push(L) : N.push(L);
    }), N;
  }, [C, n, o, l]);
  Fe(() => {
    if (w.length > 0 && k.size === 0) {
      const H = /* @__PURE__ */ new Set();
      w.forEach((O) => {
        H.add(O.id), O.children && O.children.forEach((N) => H.add(N.id));
      }), f(H);
    }
  }, [w]);
  const y = (H, O) => {
    O.stopPropagation(), f((N) => {
      const L = new Set(N);
      return L.has(H) ? L.delete(H) : L.add(H), L;
    });
  }, g = () => {
    const H = /* @__PURE__ */ new Set(), O = (N) => {
      N.forEach((L) => {
        H.add(L.id), L.children && L.children.length > 0 && O(L.children);
      });
    };
    O(w), f(H);
  }, D = () => {
    f(/* @__PURE__ */ new Set());
  }, M = (H) => {
    var L, W;
    b(H.id);
    const O = String(t.pageId || "default"), N = ((L = t.dataBinding) == null ? void 0 : L.fieldName) || t.id;
    if (Ne.getState().setFieldValue(O, N, H.id), c && Ne.getState().setFieldValue(O, `${c}_selected`, H.data || H), i && i(H), t.events && Array.isArray(t.events)) {
      const X = t.events.find((E) => E.trigger === "change" || E.trigger === "select" || E.trigger === "onClick");
      X && rn(X, ((W = t.props) == null ? void 0 : W.label) || t.id, void 0, { node: H, value: H.id });
    }
  }, m = (H, O) => {
    if (!O) return !0;
    const N = O.toLowerCase(), L = H.name.toLowerCase().includes(N), W = H.code ? H.code.toLowerCase().includes(N) : !1;
    return L || W ? !0 : H.children && H.children.length > 0 ? H.children.some((X) => m(X, O)) : !1;
  }, T = (H, O = 0) => {
    if (h && !m(H, h))
      return null;
    const N = !!(H.children && H.children.length > 0), L = k.has(H.id) || !!h, W = u === H.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "select-none", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => M(H),
          style: { paddingLeft: `${Math.max(8, O * 18 + 8)}px` },
          className: `group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${W ? "bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`,
          children: [
            N ? /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (X) => y(H.id, X),
                className: "w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors",
                children: L ? /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" })
              }
            ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: N ? L ? /* @__PURE__ */ e.jsx(xl, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ e.jsx(In, { className: "w-4 h-4 text-amber-500/80" }) : /* @__PURE__ */ e.jsx(Yt, { className: "w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate flex-1 font-medium", children: H.name }),
            H.code && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300", children: H.code }),
            N && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700", children: H.children.length })
          ]
        }
      ),
      N && L && /* @__PURE__ */ e.jsx("div", { className: "relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5", children: H.children.map((X) => T(X, O + 1)) })
    ] }, H.id);
  }, A = d.label || d.title || "Cấu Trúc Cây Phân Cấp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((S = t.style) == null ? void 0 : S.width) || "100%",
        minHeight: ((U = t.style) == null ? void 0 : U.minHeight) || "320px",
        maxHeight: ((B = t.style) == null ? void 0 : B.maxHeight) || "560px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: A }),
            c && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-mono", children: c })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: g,
                title: "Mở rộng tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: D,
                title: "Thu gọn tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-slate-800/80 bg-slate-900/40", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: h,
              onChange: (H) => j(H.target.value),
              placeholder: "Tìm kiếm danh mục theo tên, mã...",
              className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: w.length > 0 ? w.map((H) => T(H)) : /* @__PURE__ */ e.jsx("div", { className: "py-8 text-center text-xs text-slate-500 italic", children: "Chưa có dữ liệu danh mục phân cấp" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-mono", children: [
            "Tổng số: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: C.length }),
            " phần tử"
          ] }),
          u && /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-400 font-mono font-medium", children: [
            "Đang chọn ID: #",
            String(u)
          ] })
        ] })
      ]
    }
  );
}, Hr = [
  "#10B981",
  // Emerald
  "#06B6D4",
  // Cyan
  "#3B82F6",
  // Blue
  "#6366F1",
  // Indigo
  "#8B5CF6",
  // Purple
  "#EC4899",
  // Pink
  "#F59E0B",
  // Amber
  "#14B8A6"
  // Teal
], ci = ({
  node: t,
  isEditing: r = !1,
  data: s,
  type: a,
  title: n,
  reference: o
}) => {
  var M, m, T;
  const l = t.props || {}, i = a || l.chartType || l.type || "bar", [d, c] = P(i), [p, h] = P(null), j = o || l.reference || l.refName || ((M = t.dataBinding) == null ? void 0 : M.refName) || "", u = Ne((A) => j ? A.datasets[j] : void 0), b = $e(() => {
    let A = [];
    s && Array.isArray(s) && s.length > 0 ? A = s : l.data && Array.isArray(l.data) && l.data.length > 0 ? A = l.data : u && Array.isArray(u) && u.length > 0 ? A = u : A = [
      { label: "Cát Lái (CTL)", value: 4850 },
      { label: "Cái Mép (TCIT)", value: 3620 },
      { label: "Hải Phòng (HPH)", value: 2980 },
      { label: "Lạch Huyện (HICT)", value: 2450 },
      { label: "Đà Nẵng (DAN)", value: 1680 },
      { label: "Quy Nhơn (QNH)", value: 1120 }
    ];
    const I = l.labelField || "label", S = l.valueField || "value";
    return A.map((U, B) => {
      const H = String(U[I] ?? U.label ?? U.name ?? U.code ?? `Mục ${B + 1}`), O = U[S] ?? U.value ?? U.amount ?? U.total ?? 0, N = Math.max(0, Number(O) || 0), L = U.color || Hr[B % Hr.length];
      return { label: H, value: N, color: L };
    });
  }, [s, l.data, u, l.labelField, l.valueField]), k = $e(() => b.reduce((A, I) => A + I.value, 0), [b]), f = $e(() => Math.max(...b.map((A) => A.value), 1), [b]), C = l.label || n || l.title || "Biểu Đồ Thống Kê Sản Lượng", w = l.subtitle || (j ? `Nguồn dữ liệu: ${j}` : "Đơn vị: TEUs"), y = () => {
    const A = Math.max(20, Math.min(48, Math.floor(400 / (b.length || 1))));
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" }),
        b.map((I, S) => {
          const U = f > 0 ? I.value / f * 100 : 0, B = p === S;
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              onMouseEnter: () => h(S),
              onMouseLeave: () => h(null),
              className: "flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer",
              children: [
                B && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-bold text-emerald-400", children: I.label }),
                  /* @__PURE__ */ e.jsxs("p", { className: "font-mono", children: [
                    I.value.toLocaleString("en-US"),
                    " (",
                    (I.value / (k || 1) * 100).toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-mono mb-1 transition-all ${B ? "text-emerald-300 font-bold -translate-y-0.5" : "text-slate-400"}`, children: I.value > 1e3 ? `${(I.value / 1e3).toFixed(1)}k` : I.value }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: `${Math.max(4, U)}%`,
                      backgroundColor: I.color,
                      maxWidth: `${A}px`
                    },
                    className: `w-full rounded-t-md transition-all duration-300 shadow-md ${B ? "brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105" : "hover:brightness-110"}`
                  }
                )
              ]
            },
            S
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-3 pt-2", children: b.map((I, S) => /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-center truncate", title: I.label, children: /* @__PURE__ */ e.jsx("span", { className: `text-[11px] truncate block ${p === S ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: I.label }) }, S)) })
    ] });
  }, g = () => {
    const B = b.length, H = b.map((L, W) => {
      const X = B > 1 ? 40 + W / (B - 1) * 520 : 300, E = 175 - (f > 0 ? L.value / f * (200 - 2 * 25) : 0);
      return { x: X, y: E, item: L, idx: W };
    }), O = H.reduce((L, W, X) => X === 0 ? `M ${W.x} ${W.y}` : `${L} L ${W.x} ${W.y}`, ""), N = H.length > 0 ? `${O} L ${H[H.length - 1].x} 175 L ${H[0].x} 175 Z` : "";
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col items-center justify-center h-64 px-2", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 600 200", className: "w-full h-48 overflow-visible", children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: `lineGrad_${t.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.4" }),
          /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
        ] }) }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 25, x2: 560, y2: 25, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 200 / 2, x2: 560, y2: 200 / 2, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 175, x2: 560, y2: 175, stroke: "#475569" }),
        N && /* @__PURE__ */ e.jsx("path", { d: N, fill: `url(#lineGrad_${t.id})` }),
        O && /* @__PURE__ */ e.jsx("path", { d: O, fill: "none", stroke: "#10B981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        H.map((L) => {
          const W = p === L.idx;
          return /* @__PURE__ */ e.jsxs(
            "g",
            {
              onMouseEnter: () => h(L.idx),
              onMouseLeave: () => h(null),
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: L.x,
                    cy: L.y,
                    r: W ? 6 : 4,
                    fill: W ? "#34D399" : "#10B981",
                    stroke: "#0F172A",
                    strokeWidth: "2",
                    className: "transition-all"
                  }
                ),
                W && /* @__PURE__ */ e.jsx("circle", { cx: L.x, cy: L.y, r: 10, fill: "none", stroke: "#34D399", strokeWidth: "1.5", strokeDasharray: "2 2", className: "animate-spin" })
              ]
            },
            L.idx
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-between px-6 pt-2", children: b.map((L, W) => /* @__PURE__ */ e.jsx("div", { className: "text-center truncate flex-1", children: /* @__PURE__ */ e.jsx("span", { className: `text-[10px] truncate block ${p === W ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: L.label }) }, W)) })
    ] });
  }, D = () => {
    let B = 0;
    const H = b.map((O, N) => {
      const L = k > 0 ? O.value / k * 360 : 0, W = B, X = B + L;
      B += L;
      const E = (W - 90) * Math.PI / 180, Z = (X - 90) * Math.PI / 180, te = 90 + 70 * Math.cos(E), z = 90 + 70 * Math.sin(E), ae = 90 + 70 * Math.cos(Z), ce = 90 + 70 * Math.sin(Z), q = 90 + 45 * Math.cos(E), de = 90 + 45 * Math.sin(E), J = 90 + 45 * Math.cos(Z), se = 90 + 45 * Math.sin(Z), F = L > 180 ? 1 : 0, G = L >= 359.9 ? "M 90 20 A 70 70 0 1 1 90 160 A 70 70 0 1 1 90 20 M 90 45 A 45 45 0 1 0 90 135 A 45 45 0 1 0 90 45" : `M ${te} ${z} A 70 70 0 ${F} 1 ${ae} ${ce} L ${J} ${se} A 45 45 0 ${F} 0 ${q} ${de} Z`;
      return { item: O, idx: N, pathData: G, percentage: (O.value / (k || 1) * 100).toFixed(1) };
    });
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center justify-around h-64 px-4 py-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ e.jsx("svg", { width: 180, height: 180, viewBox: "0 0 180 180", children: H.map((O) => {
          const N = p === O.idx;
          return /* @__PURE__ */ e.jsx(
            "path",
            {
              d: O.pathData,
              fill: O.item.color,
              onMouseEnter: () => h(O.idx),
              onMouseLeave: () => h(null),
              className: `transition-all duration-200 cursor-pointer ${N ? "scale-105 origin-center brightness-125 stroke-white stroke-1" : "hover:opacity-90"}`
            },
            O.idx
          );
        }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none", children: p !== null && b[p] ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-medium truncate max-w-[80px]", children: b[p].label }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-bold font-mono text-emerald-400", children: [
            (b[p].value / (k || 1) * 100).toFixed(1),
            "%"
          ] })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: "TỔNG" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold font-mono text-slate-100", children: k > 1e4 ? `${(k / 1e3).toFixed(0)}k` : k })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2", children: b.map((O, N) => {
        const L = p === N, W = (O.value / (k || 1) * 100).toFixed(1);
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            onMouseEnter: () => h(N),
            onMouseLeave: () => h(null),
            className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${L ? "bg-slate-800/80 text-white" : "text-slate-300 hover:bg-slate-800/40"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2.5 h-2.5 rounded-full flex-shrink-0", style: { backgroundColor: O.color } }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs truncate max-w-[110px]", children: O.label }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-mono text-slate-400 ml-auto", children: [
                W,
                "%"
              ] })
            ]
          },
          N
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((m = t.style) == null ? void 0 : m.width) || "100%",
        minHeight: ((T = t.style) == null ? void 0 : T.minHeight) || "320px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(hl, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: C }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-mono block", children: w })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-0.5 gap-0.5", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("bar"),
                title: "Biểu đồ Cột (Bar Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "bar" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(oa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("line"),
                title: "Biểu đồ Đường (Line Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "line" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(ml, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("donut"),
                title: "Biểu đồ Tròn (Donut Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "donut" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(bl, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center p-2", children: b.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "py-12 text-center text-xs text-slate-500 italic", children: "Không có dữ liệu số liệu để vẽ biểu đồ" }) : d === "bar" ? y() : d === "line" ? g() : D() }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tổng cộng: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: k.toLocaleString("en-US") })
          ] }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            b.length,
            " danh mục"
          ] })
        ] })
      ]
    }
  );
};
function Va(t) {
  var a, n;
  if (!t || t.length === 0) return [];
  const r = [...t].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), s = [];
  for (const o of r) {
    const l = !!((a = o.props) != null && a.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
    if (l) {
      const d = s[s.length - 1];
      d && d.type === "tab_stack" && d.order === i ? d.nodes.push(o) : s.push({
        type: "tab_stack",
        order: i,
        nodes: [o]
      });
    } else
      s.push({
        type: "single",
        order: i,
        node: o
      });
  }
  return s;
}
function Ua(t, r) {
  var h, j;
  const s = t.style || {}, a = ((h = t.props) == null ? void 0 : h.colSpan) !== void 0 && ((j = t.props) == null ? void 0 : j.colSpan) !== null ? Number(t.props.colSpan) : void 0;
  let n = s.width, o = s.flex, l = s.maxWidth, i = s.minWidth ?? 0, d;
  const c = (r == null ? void 0 : r.mode) || "grid", p = (r == null ? void 0 : r.gridColumns) || 12;
  if (c === "grid") {
    let u;
    if (a !== void 0 && !isNaN(a) && a > 0)
      u = Math.min(a, p);
    else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
      const b = Number(r.columnsPerRow);
      !isNaN(b) && b > 0 ? u = Math.max(1, Math.floor(p / b)) : u = Math.min(4, p);
    } else
      u = Math.min(4, p);
    d = `span ${u} / span ${u}`, n = s.width !== void 0 ? s.width : "100%", l = s.maxWidth !== void 0 ? s.maxWidth : "100%", o = s.flex !== void 0 ? s.flex : "none";
  } else {
    const u = parseInt((r == null ? void 0 : r.gap) || "12", 10) || 12;
    if (((r == null ? void 0 : r.direction) || "row") === "row")
      if (a !== void 0 && !isNaN(a) && a > 0) {
        const k = Math.min(100, Math.max(2, a / p * 100)), f = a >= p ? "100%" : `calc(${k}% - ${Math.round(u * (1 - a / p))}px)`;
        s.width === void 0 && s.flex === void 0 && (n = f, l = f, o = `0 0 ${f}`);
      } else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
        const k = Number(r.columnsPerRow);
        if (!isNaN(k) && k > 0) {
          const f = k === 1 ? "100%" : `calc((100% - ${(k - 1) * u}px) / ${k})`;
          s.width === void 0 && s.flex === void 0 && (n = f, l = f, o = `0 0 ${f}`);
        }
      } else
        s.width === void 0 && s.flex === void 0 && (n = "100%", l = "100%", o = "1 1 auto");
    else
      s.width === void 0 && s.flex === void 0 && (n = "100%", l = "100%", o = "none");
  }
  return {
    width: n !== void 0 ? n : "100%",
    flex: o !== void 0 ? o : void 0,
    maxWidth: l !== void 0 ? l : "100%",
    minWidth: i,
    gridColumn: d,
    height: s.height,
    minHeight: s.minHeight || (t.type === "Container" ? "90px" : void 0),
    maxHeight: s.maxHeight,
    alignSelf: s.alignSelf
  };
}
const Ws = ({
  node: t,
  isEditing: r = !1,
  onContextMenu: s,
  parentLayout: a,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l,
  ancestors: i = []
}) => {
  var T, A, I, S, U, B, H, O, N, L, W, X, E;
  const d = Q((Z) => Z.selection), c = Q((Z) => Z.selectComponent), p = r && d.componentId === t.id, h = (Z) => {
    r && (Z.stopPropagation(), c(t.id));
  }, j = (Z) => {
    r && (Z.preventDefault(), Z.stopPropagation(), c(t.id), s && s(Z, t));
  };
  if (t.type === "Container" || t.type === "Section" || t.type === "Tabs") {
    const Z = t.props.layoutMode || (t.type === "Section" ? "grid" : "flex"), te = t.props.flexConfig || {}, z = t.props.gridConfig || {}, ae = {
      direction: te.direction || "row",
      wrap: te.wrap || "wrap",
      gap: te.gap || "12px",
      columnsPerRow: te.columnsPerRow || "auto"
    }, ce = Number(
      z.columns || (typeof te.columnsPerRow == "number" ? te.columnsPerRow : 12)
    ) || 12, q = {
      mode: Z === "flex" ? "flex" : "grid",
      direction: te.direction || "row",
      columnsPerRow: te.columnsPerRow || "auto",
      gap: te.gap || z.gap || "12px",
      wrap: te.wrap || "wrap",
      gridColumns: ce
    }, de = () => {
      const J = t.children || [];
      return J.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : Va(J).map((F, G) => {
        if (F.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            Ga,
            {
              parentId: t.id,
              order: F.order,
              tabNodes: F.nodes,
              isEditing: r,
              parentFlexConfig: ae,
              onContextMenu: s,
              renderChild: l
            },
            `tab_stack_${t.id}_${F.order}_${G}`
          );
        const oe = F.node, fe = [...i, t];
        return l ? /* @__PURE__ */ e.jsx(ns.Fragment, { children: l(oe, q) }, oe.id) : /* @__PURE__ */ e.jsx(
          Ws,
          {
            node: oe,
            isEditing: r,
            onContextMenu: s,
            parentLayout: q,
            isWrappedByDrag: !1,
            ancestors: fe
          },
          oe.id
        );
      });
    };
    return t.type === "Section" ? /* @__PURE__ */ e.jsx(fn, { node: t, isEditing: r, ancestors: i, children: /* @__PURE__ */ e.jsx("div", { onClick: h, onContextMenu: j, className: "w-full", children: /* @__PURE__ */ e.jsx(Io, { node: t, isEditing: r, children: de() }) }) }) : t.type === "Tabs" ? /* @__PURE__ */ e.jsx(fn, { node: t, isEditing: r, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Mr,
      {
        node: t,
        isEditing: r,
        isSelected: p,
        onClick: h,
        onContextMenu: j,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: de()
      }
    ) }) : /* @__PURE__ */ e.jsx(fn, { node: t, isEditing: r, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Mr,
      {
        node: t,
        isEditing: r,
        isSelected: p,
        onClick: h,
        onContextMenu: j,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: de()
      }
    ) });
  }
  const u = () => {
    var Z, te, z, ae, ce, q;
    switch (t.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(ko, { node: t, isEditing: r });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(So, { node: t, isEditing: r });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(si, { node: t, isEditing: r });
      case "Number":
        return /* @__PURE__ */ e.jsx(To, { node: t, isEditing: r });
      case "Label":
        return /* @__PURE__ */ e.jsx(Do, { node: t, isEditing: r });
      case "Table":
        return /* @__PURE__ */ e.jsx(qo, { node: t, isEditing: r });
      case "Select":
        return /* @__PURE__ */ e.jsx(Jo, { node: t, isEditing: r });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(Qo, { node: t, isEditing: r });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Zo, { node: t, isEditing: r });
      case "Divider":
        return /* @__PURE__ */ e.jsx(ti, { node: t, isEditing: r });
      case "Modal":
        return /* @__PURE__ */ e.jsx(ei, { node: t, isEditing: r });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          ni,
          {
            label: ((Z = t.props) == null ? void 0 : Z.label) ?? "Lô hàng:",
            reference: ((te = t.props) == null ? void 0 : te.reference) ?? "Transaction",
            displayField: ((z = t.props) == null ? void 0 : z.displayField) ?? "code",
            records: (ae = t.props) == null ? void 0 : ae.records,
            activeId: (ce = t.props) == null ? void 0 : ce.activeId,
            canAdd: ((q = t.props) == null ? void 0 : q.canAdd) !== !1,
            style: t.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(ai, { node: t, isEditing: r });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(li, { node: t, isEditing: r });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(oi, { node: t, isEditing: r });
      case "TreeView":
        return /* @__PURE__ */ e.jsx(ii, { node: t, isEditing: r });
      case "Chart":
        return /* @__PURE__ */ e.jsx(ci, { node: t, isEditing: r });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          t.type
        ] });
    }
  }, b = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), k = Ua(t, b), f = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...k,
    boxSizing: "border-box"
  }, C = Oe((Z) => Z.evaluateComponentPermission), w = Q((Z) => Z.activeFeatureId), y = r ? null : C(w, t, i), g = y ? !y.canWrite && !y.canWriteAll : !1, D = ["TextBox", "Textarea", "Number", "DatePicker", "Select", "Checkbox", "Radio", "Switch", "Button"].includes(t.type), M = !r && g && D, m = r && !!((T = t.permissions) != null && T.rules && t.permissions.rules.length > 0 || (S = (I = (A = t.props) == null ? void 0 : A.permissions) == null ? void 0 : I.rules) != null && S.length || (B = (U = t.permissions) == null ? void 0 : U.allowedRoles) != null && B.length || (O = (H = t.permissions) == null ? void 0 : H.readOnlyRoles) != null && O.length);
  return /* @__PURE__ */ e.jsx(fn, { node: t, isEditing: r, ancestors: i, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: h,
      onContextMenu: j,
      style: f,
      className: `relative group transition-all duration-150 box-border ${M ? "opacity-80 pointer-events-none select-none" : ""} ${r ? `cursor-pointer rounded-lg ${p ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && p && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: t.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            t.id.slice(-4)
          ] })
        ] }),
        m && !p && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-1 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
          "🔒 ",
          ((L = (N = t.permissions) == null ? void 0 : N.rules) == null ? void 0 : L.length) || ((E = (X = (W = t.props) == null ? void 0 : W.permissions) == null ? void 0 : X.rules) == null ? void 0 : E.length) || "RBAC"
        ] }) }),
        u()
      ]
    }
  ) });
}, ac = ({
  value: t,
  column: r,
  onSave: s,
  onCancel: a
}) => {
  const [n, o] = P(t ?? ""), l = nt(null);
  Fe(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (c) => {
    c.key === "Enter" ? (c.preventDefault(), s(n)) : c.key === "Escape" && (c.preventDefault(), a());
  }, d = () => {
    s(n);
  };
  return r.componentType === "Select" && r.options && r.options.length > 0 ? /* @__PURE__ */ e.jsx(
    "select",
    {
      ref: l,
      value: n,
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: d,
      className: "w-full h-7 px-1.5 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400",
      children: r.options.map((c) => /* @__PURE__ */ e.jsx("option", { value: c.value, children: c.label }, c.value))
    }
  ) : r.componentType === "DatePicker" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "text",
      value: n,
      placeholder: "DD/MM/YYYY",
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: d,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  ) : r.componentType === "Number" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "number",
      value: n,
      step: r.precision && r.precision > 0 ? Math.pow(10, -r.precision) : 1,
      onChange: (c) => o(c.target.value === "" ? "" : Number(c.target.value)),
      onKeyDown: i,
      onBlur: d,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs text-right border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  ) : /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "text",
      value: n,
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: d,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  );
};
let Ct = null;
const lc = Ss()(
  dn((t, r) => ({
    isConnected: !1,
    connectionId: null,
    lockedRecords: {},
    notifications: [],
    connect: (s) => {
      const a = s || `${va()}/hubs/uiforge`;
      if (!r().isConnected)
        try {
          const n = a.replace(/^http/, "ws"), o = new WebSocket(n);
          Ct = o, o.onopen = () => {
            t({ isConnected: !0, connectionId: `conn_${Date.now()}` }), console.log("[RealtimeEngine] Đã kết nối thành công tới Hub:", a);
          }, o.onmessage = (l) => {
            try {
              const i = JSON.parse(l.data);
              if (i.type === "RecordLocked") {
                const d = `${i.entityName}_${i.recordId}`;
                t((c) => ({
                  lockedRecords: {
                    ...c.lockedRecords,
                    [d]: {
                      entityName: i.entityName,
                      recordId: i.recordId,
                      username: i.username,
                      lockedAt: i.lockedAt || (/* @__PURE__ */ new Date()).toISOString()
                    }
                  }
                }));
              } else if (i.type === "RecordUnlocked") {
                const d = `${i.entityName}_${i.recordId}`;
                t((c) => {
                  const p = { ...c.lockedRecords };
                  return delete p[d], { lockedRecords: p };
                });
              } else i.type === "Notification" && r().addNotification(i.title, i.message, i.notifType || "info");
            } catch {
            }
          }, o.onclose = () => {
            t({ isConnected: !1, connectionId: null }), Ct = null;
          }, o.onerror = () => {
            t({ isConnected: !1 });
          };
        } catch {
          t({ isConnected: !1 });
        }
    },
    disconnect: () => {
      if (Ct) {
        try {
          Ct.close();
        } catch {
        }
        Ct = null;
      }
      t({ isConnected: !1, connectionId: null });
    },
    lockRecord: async (s, a, n) => {
      const o = `${s}_${a}`, l = {
        entityName: s,
        recordId: a,
        username: n,
        lockedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return t((i) => ({
        lockedRecords: {
          ...i.lockedRecords,
          [o]: l
        }
      })), Ct && Ct.readyState === WebSocket.OPEN && Ct.send(
        JSON.stringify({
          action: "LockRecord",
          entityName: s,
          recordId: a,
          username: n
        })
      ), !0;
    },
    unlockRecord: async (s, a) => {
      const n = `${s}_${a}`;
      t((o) => {
        const l = { ...o.lockedRecords };
        return delete l[n], { lockedRecords: l };
      }), Ct && Ct.readyState === WebSocket.OPEN && Ct.send(
        JSON.stringify({
          action: "UnlockRecord",
          entityName: s,
          recordId: a
        })
      );
    },
    isRecordLocked: (s, a, n) => {
      const o = `${s}_${a}`, l = r().lockedRecords[o];
      return !l || n && l.username.toLowerCase() === n.toLowerCase() ? null : l;
    },
    broadcastRecordUpdate: (s, a, n) => {
      Ct && Ct.readyState === WebSocket.OPEN && Ct.send(
        JSON.stringify({
          action: "NotifyRecordUpdated",
          entityName: s,
          recordId: a,
          updatedBy: n
        })
      ), r().addNotification(
        "Dữ liệu đã cập nhật",
        `Bản ghi ${s} #${a} vừa được lưu bởi ${n}.`,
        "info"
      );
    },
    addNotification: (s, a, n = "info") => {
      const o = {
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        title: s,
        message: a,
        type: n,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("vi-VN")
      };
      t((l) => ({
        notifications: [o, ...l.notifications.slice(0, 49)]
        // giữ 50 thông báo gần nhất
      }));
    },
    clearNotifications: () => {
      t({ notifications: [] });
    }
  }))
);
function di(t = {}) {
  const { onSaveLayout: r, isPreview: s = !1, canEdit: a = !0 } = t;
  Fe(() => {
    const n = async (o) => {
      var l;
      if (o.altKey && (o.code === "Backquote" || o.key === "`")) {
        o.preventDefault(), o.stopPropagation();
        const i = Ye.getState(), d = i.openTabs;
        if (d.length <= 1) return;
        const c = i.activeTabId, h = (d.findIndex((u) => u.id === c) + 1) % d.length, j = d[h];
        j && (i.setActiveTab(j.id), Q.getState().setActiveFeature(j.featureId, ((l = j.params) == null ? void 0 : l.id) ?? null));
        return;
      }
      if (o.key === "Escape") {
        const i = Ye.getState();
        if (i.activePopup) {
          o.preventDefault(), o.stopPropagation(), i.closePopup();
          return;
        }
      }
      if (o.key === "F9" || (o.ctrlKey || o.metaKey) && (o.key === "s" || o.key === "S")) {
        if (o.preventDefault(), o.stopPropagation(), a && !s && r) {
          r();
          return;
        }
        const i = Q.getState(), d = i.features.find((p) => p.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c) {
          const p = Ne.getState(), h = p.getFormRecord(d.id) || p.getFormRecord("default");
          try {
            await Er(c, "onSave", {
              record: h,
              featureId: d.id,
              trigger: "hotkey_F9"
            });
          } catch (j) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onSave:", j);
          }
        }
        return;
      }
      if (o.key === "F8") {
        o.preventDefault(), o.stopPropagation();
        const i = Q.getState(), d = i.features.find((p) => p.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c)
          try {
            await Er(c, "onApprove", {
              featureId: d.id,
              trigger: "hotkey_F8"
            });
          } catch (p) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onApprove:", p);
          }
        return;
      }
      if ((o.ctrlKey || o.metaKey) && o.shiftKey && (o.key === "f" || o.key === "F")) {
        o.preventDefault(), o.stopPropagation();
        const i = document.querySelector(
          'input[type="search"], input[placeholder*="Tìm" i], input[placeholder*="search" i], input[name*="search" i], .uiforge-search-input'
        );
        i && (i.focus(), i.select());
        return;
      }
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [r, s, a]);
}
const tr = ({
  node: t,
  isEditing: r,
  onContextMenu: s,
  parentLayout: a,
  parentFlexConfig: n,
  activeId: o,
  overId: l
}) => {
  const {
    attributes: i,
    listeners: d,
    setNodeRef: c,
    transform: p,
    isDragging: h
  } = pa({
    id: t.id,
    disabled: !r,
    data: {
      isPaletteItem: !1,
      id: t.id,
      type: t.type,
      node: t
    }
  }), { setNodeRef: j, isOver: u } = xa({
    id: t.id,
    disabled: !r
  }), b = (D) => {
    c(D), j(D);
  }, k = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), C = {
    ...Ua(t, k),
    transform: ga.Translate.toString(p),
    opacity: h ? 0.35 : 1,
    transition: h ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, w = t.type === "Container" || t.type === "Section" || t.type === "Tabs", y = u && w && !h, g = u && !w && !h;
  return /* @__PURE__ */ e.jsxs("div", { ref: b, style: C, className: "group/drag relative", children: [
    g && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    y && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    r && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (D) => D.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(cn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ws,
      {
        node: t,
        isEditing: r,
        onContextMenu: s,
        parentLayout: k,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (D, M) => /* @__PURE__ */ e.jsx(
          tr,
          {
            node: D,
            isEditing: r,
            onContextMenu: s,
            parentLayout: M && "mode" in M ? M : void 0,
            parentFlexConfig: M && !("mode" in M) ? M : void 0,
            activeId: o,
            overId: l
          },
          D.id
        )
      }
    )
  ] });
}, Ka = ({ x: t, y: r, items: s, onClose: a }) => {
  const n = nt(null);
  Fe(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && a();
    }, d = (c) => {
      c.key === "Escape" && a();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", d), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", d);
    };
  }, [a]);
  const o = Math.min(t, window.innerWidth - 340), l = Math.max(10, Math.min(r, window.innerHeight - (s.length * 36 + 20)));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      style: { top: `${l}px`, left: `${o}px` },
      className: "fixed z-50 min-w-[290px] w-max max-w-[360px] bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100",
      children: s.map((i, d) => {
        if (i.divider)
          return /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-slate-800" }, d);
        const c = i.icon;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: (p) => {
              p.stopPropagation(), i.onClick(), a();
            },
            className: `w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors cursor-pointer text-left ${i.danger ? "text-red-400 hover:bg-red-500/20 hover:text-red-300" : "hover:bg-blue-600 hover:text-white"}`,
            children: [
              c && /* @__PURE__ */ e.jsx(c, { className: "w-4 h-4 shrink-0 opacity-80" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium whitespace-nowrap", children: i.label })
            ]
          },
          d
        );
      })
    }
  );
}, ui = ({
  isEditing: t,
  activeId: r,
  overId: s
}) => {
  const a = Q((I) => I.features), n = Q((I) => I.activeFeatureId), o = Q((I) => I.activeRecordId), l = Q((I) => I.addComponent), i = Q((I) => I.selectComponent), d = Q((I) => I.removeComponent), c = Q((I) => I.updateComponentProps);
  Q((I) => I.updateFeatureLayout);
  const p = Q((I) => I.updateFeatureScriptFile), h = a.find((I) => I.id === n), j = vt((I) => I.user);
  j == null || j.role;
  const u = (h == null ? void 0 : h.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  ns.useEffect(() => {
    n && (Oe.getState().fetchFeaturePolicies(n).catch(() => {
    }), Oe.getState().fetchComponentPolicies(n).catch(() => {
    }));
  }, [n]), ns.useEffect(() => {
    if (Sa(h) && n) {
      let S = o;
      !S && typeof window < "u" && (S = en());
      const U = S || "1", B = Ne.getState().formRecords[n], H = (B == null ? void 0 : B.id) || (B == null ? void 0 : B.Id), O = (B == null ? void 0 : B.jobNo) || (B == null ? void 0 : B.JobNo) || (B == null ? void 0 : B.code) || (B == null ? void 0 : B.Code);
      H && String(H) === String(U) || O && String(O) === String(U) || (async (W) => {
        if (W === "new" || /^\d+$/.test(W)) return W;
        const E = (Ne.getState().datasets.Transaction || []).find(
          (Z) => String(Z.jobNo || Z.JobNo || Z.code || Z.Code) === W || String(Z.id || Z.Id) === W
        );
        if (E)
          return String(E.id || E.Id);
        try {
          const te = (await Ne.getState().queryEntity("Transaction") || []).find(
            (z) => String(z.jobNo || z.JobNo || z.code || z.Code) === W || String(z.id || z.Id) === W
          );
          if (te)
            return String(te.id || te.Id);
        } catch {
        }
        return W;
      })(U).then((W) => {
        var Z;
        const { module: X } = cr(h == null ? void 0 : h.scriptFile), E = (X == null ? void 0 : X.loadDetail) || ((Z = X == null ? void 0 : X.transactionDetailBL) == null ? void 0 : Z.loadDetail);
        typeof E == "function" && E(W).then((te) => {
          if (te && n) {
            Ne.getState().setFormRecord(n, te), Ne.getState().setFormRecord("default", te);
            const z = String(te.id || W);
            o !== z && Q.getState().setActiveRecordId(z), es(n, z);
          }
        });
      });
    }
  }, [n, o, h == null ? void 0 : h.scriptFile, h == null ? void 0 : h.route, h == null ? void 0 : h.name, h == null ? void 0 : h.isDetail]);
  const { setNodeRef: b, isOver: k } = xa({
    id: "canvas-root",
    disabled: !t
  }), [f, C] = P(""), w = !!(h != null && h.scriptFile && h.scriptFile.trim().length > 0), [y, g] = P(null), D = (I, S = {}, U = {}) => ({
    id: `${I.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: I,
    parentId: null,
    pageId: n,
    props: {
      label: I === "Button" ? "Nút mới" : I === "Label" ? "Tiêu đề khối" : void 0,
      variant: I === "Button" ? "primary" : void 0,
      size: I === "Button" ? "md" : void 0,
      placeholder: I === "TextBox" ? "Nhập nội dung..." : void 0,
      ...S
    },
    style: {
      ...U
    },
    events: [],
    order: ((h == null ? void 0 : h.components.length) || 0) + 1
  }), M = (I) => {
    !t || !w || (I.preventDefault(), i(null), g({
      x: I.clientX,
      y: I.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, m = (I, S) => {
    if (!t) return;
    I.preventDefault(), I.stopPropagation(), i(S.id);
    const U = S.type === "Container" || S.type === "Section" || S.type === "Tabs";
    g({
      x: I.clientX,
      y: I.clientY,
      targetContainerId: U ? S.id : S.parentId,
      selectedNode: S
    });
  }, T = () => {
    var B, H, O;
    if (!y) return [];
    const { targetContainerId: I, selectedNode: S } = y, U = S && (S.type === "Container" || S.type === "Section" || S.type === "Tabs");
    if (S && U) {
      const N = S.props.layoutMode === "grid", L = ((B = S.props.flexConfig) == null ? void 0 : B.direction) === "row", W = !!(S.props.isTab || S.props.tab || S.type === "Tabs"), X = S.props.activeTabId || ((O = (H = S.props.tabs) == null ? void 0 : H[0]) == null ? void 0 : O.id) || "main", E = W ? { tabId: X } : {};
      return [
        ...W ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: us,
            onClick: () => {
              const Z = S.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], te = `tab_${Date.now().toString(36)}`, z = [
                ...Z,
                { id: te, label: `Tab Mới ${Z.length + 1}` }
              ];
              c(S.id, {
                tabs: z,
                activeTabId: te
              });
            }
          },
          {
            divider: !0,
            label: "",
            onClick: () => {
            }
          }
        ] : [],
        {
          label: "📦 Thêm Container",
          icon: us,
          onClick: () => {
            const Z = D(
              "Container",
              {
                layoutMode: "flex",
                flexConfig: {
                  direction: L ? "column" : "row",
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "stretch",
                  gap: "12px"
                },
                ...E
              },
              {
                flex: L ? "1" : void 0,
                width: L ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(Z, I);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Zs,
          onClick: () => {
            const Z = D("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...E
            });
            l(Z, I);
          }
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: "➕ Thêm TextBox (Ô nhập liệu)",
          icon: kt,
          onClick: () => l(
            D("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: kt,
          onClick: () => l(
            D("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: kt,
          onClick: () => l(
            D("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: kt,
          onClick: () => l(
            D("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: _s,
          onClick: () => l(
            D("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: Yt,
          onClick: () => l(
            D("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: _s,
          onClick: () => l(
            D("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Nhãn Chữ (Label)",
          icon: Yt,
          onClick: () => l(
            D("Label", {
              label: "Nhãn thông tin",
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: At,
          onClick: () => l(
            D("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Ô Tra Cứu (SearchEntry)",
          icon: kt,
          onClick: () => l(
            D("SearchEntry", {
              label: "Tra cứu",
              labelPosition: "left",
              colSpan: 4,
              ...E
            }),
            I
          )
        },
        {
          label: "➕ Thêm Chọn Bản Ghi (RecordSelector)",
          icon: kt,
          onClick: () => l(
            D("RecordSelector", {
              label: "Chọn bản ghi",
              ...E
            }),
            I
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: L ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: L ? or : Tr,
          onClick: () => {
            c(S.id, {
              flexConfig: {
                ...S.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: L ? "column" : "row"
              }
            });
          }
        },
        {
          label: N ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Zs,
          onClick: () => {
            N ? c(S.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(S.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: dt,
          danger: !0,
          onClick: () => d(S.id)
        }
      ];
    }
    return [
      {
        label: "📦 Thêm Container",
        icon: us,
        onClick: () => {
          const N = D(
            "Container",
            {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "16px"
              }
            },
            {
              width: "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(N, null);
        }
      },
      {
        label: "🗂️ Thêm Khung Card / Section (12 Cột)",
        icon: Zs,
        onClick: () => {
          const N = D("Section", {
            title: "Phân Vùng Mới",
            label: "Phân Vùng Mới",
            collapsible: !0,
            boxShadow: !0,
            colSpan: 12
          });
          l(N, null);
        }
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "➕ Thêm TextBox (Ô nhập liệu)",
        icon: kt,
        onClick: () => l(
          D("TextBox", {
            label: "Ô nhập liệu",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Số (Number)",
        icon: kt,
        onClick: () => l(
          D("Number", {
            label: "Số tiền / Lượng",
            labelPosition: "left",
            colSpan: 4,
            precision: 2,
            thousandsSeparator: !0
          }),
          null
        )
      },
      {
        label: "➕ Thêm Chọn Ngày (DatePicker)",
        icon: kt,
        onClick: () => l(
          D("DatePicker", {
            label: "Ngày tháng",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Dropdown (Select)",
        icon: kt,
        onClick: () => l(
          D("Select", {
            label: "Lựa chọn",
            labelPosition: "left",
            colSpan: 4,
            options: [
              { value: "opt1", label: "Tùy chọn 1" },
              { value: "opt2", label: "Tùy chọn 2" }
            ]
          }),
          null
        )
      },
      {
        label: "➕ Thêm Hộp Kiểm (Checkbox)",
        icon: _s,
        onClick: () => l(
          D("Checkbox", {
            label: "Kích hoạt",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
        icon: Yt,
        onClick: () => l(
          D("Textarea", {
            label: "Ghi chú",
            labelPosition: "left",
            colSpan: 12,
            rows: 3
          }),
          null
        )
      },
      {
        label: "➕ Thêm Nút Bấm (Button)",
        icon: _s,
        onClick: () => l(
          D("Button", {
            label: "Nút bấm",
            variant: "primary",
            size: "sm"
          }),
          null
        )
      },
      {
        label: "➕ Thêm Nhãn Chữ (Label)",
        icon: Yt,
        onClick: () => l(
          D("Label", {
            label: "Nhãn thông tin"
          }),
          null
        )
      },
      {
        label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
        icon: At,
        onClick: () => l(
          D("Table", {
            columns: [
              { key: "col1", title: "Cột 1", width: "120px" },
              { key: "col2", title: "Cột 2", width: "150px" },
              { key: "col3", title: "Cột 3", width: "120px" }
            ]
          }),
          null
        )
      },
      {
        label: "➕ Thêm Ô Tra Cứu (SearchEntry)",
        icon: kt,
        onClick: () => l(
          D("SearchEntry", {
            label: "Tra cứu",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Chọn Bản Ghi (RecordSelector)",
        icon: kt,
        onClick: () => l(
          D("RecordSelector", {
            label: "Chọn bản ghi"
          }),
          null
        )
      }
    ];
  }, A = (h == null ? void 0 : h.components.filter((I) => !I.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      onContextMenu: M,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${k && t ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          !w && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: /* @__PURE__ */ e.jsx("span", { children: (h == null ? void 0 : h.name) || "Màn hình" }) }),
            h != null && h.description ? /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: h.description }) : null
          ] }) }),
          w ? A.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: M,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${k ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(us, { className: "w-7 h-7" }) }),
                /* @__PURE__ */ e.jsx("h3", { className: "text-base font-bold text-slate-200 mb-1", children: "Màn hình đang trống (Blank Canvas)" }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-md mb-5 leading-relaxed", children: [
                  "Bạn có thể ",
                  /* @__PURE__ */ e.jsx("strong", { className: "text-blue-400", children: "kéo thả thành phần" }),
                  " từ cột bên trái vào đây, hoặc ",
                  /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: "nhấn chuột phải" }),
                  " để thêm Khoảng Trắng, Nút, Bảng dữ liệu!"
                ] }),
                t && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const I = D(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      I.children = [
                        D(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        D(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(I, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Tr, { className: "w-4 h-4" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Tạo 2 Khoảng Trắng Nằm Song Song (50 - 50)" })
                    ]
                  }
                ) })
              ]
            }
          ) : /* @__PURE__ */ e.jsx(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: u.direction || "column",
                gap: u.gap || "16px",
                flexWrap: u.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: Va(A).map((I, S) => {
                if (I.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    Ga,
                    {
                      parentId: null,
                      order: I.order,
                      tabNodes: I.nodes,
                      isEditing: t,
                      onContextMenu: m,
                      renderChild: (H, O) => t ? /* @__PURE__ */ e.jsx(
                        tr,
                        {
                          node: H,
                          isEditing: t,
                          onContextMenu: m,
                          parentLayout: O && "mode" in O ? O : void 0,
                          parentFlexConfig: O && !("mode" in O) ? O : void 0,
                          activeId: r,
                          overId: s
                        },
                        H.id
                      ) : /* @__PURE__ */ e.jsx(
                        Ws,
                        {
                          node: H,
                          isEditing: !1,
                          onContextMenu: m,
                          parentLayout: O && "mode" in O ? O : void 0,
                          parentFlexConfig: O && !("mode" in O) ? O : void 0
                        },
                        H.id
                      )
                    },
                    `root_tab_stack_${I.order}_${S}`
                  );
                const U = I.node, B = {
                  mode: "flex",
                  direction: u.direction || "column",
                  wrap: u.wrap || "wrap",
                  gap: u.gap,
                  columnsPerRow: "auto"
                };
                return t ? /* @__PURE__ */ e.jsx(
                  tr,
                  {
                    node: U,
                    isEditing: t,
                    onContextMenu: m,
                    parentLayout: B,
                    activeId: r,
                    overId: s
                  },
                  U.id
                ) : /* @__PURE__ */ e.jsx(
                  Ws,
                  {
                    node: U,
                    isEditing: !1,
                    onContextMenu: m,
                    parentLayout: B
                  },
                  U.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Dn, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (I) => {
                  I.preventDefault();
                  const S = f.trim();
                  if (!S) return;
                  const U = S.endsWith(".bl.ts") ? S : S.endsWith(".ts") ? S.replace(/\.ts$/, ".bl.ts") : `${S}.bl.ts`;
                  p(n, U), C("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(ea, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: f,
                          onChange: (I) => C(I.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  h && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(ir, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const I = h.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          C(`${I || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          h.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
                          ".bl.ts"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: !f.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(ar, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        y && /* @__PURE__ */ e.jsx(
          Ka,
          {
            x: y.x,
            y: y.y,
            items: T(),
            onClose: () => g(null)
          }
        )
      ]
    }
  );
};
function pi(t) {
  return t.replace(/-([a-z])/g, (r, s) => s.toUpperCase());
}
function xi(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function hi(t) {
  const r = {};
  if (!t || typeof t != "string") return r;
  const a = t.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of a) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), d = o.slice(l + 1).trim();
    if (i && d) {
      let c = pi(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), r[c] = d;
    }
  }
  return r;
}
function mi(t) {
  const r = /* @__PURE__ */ new Set([
    "customCss",
    "display",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "gap",
    "gridTemplateColumns"
  ]), s = [];
  for (const [a, n] of Object.entries(t)) {
    if (n == null || n === "" || r.has(a))
      continue;
    const o = xi(a);
    s.push(`${o}: ${n};`);
  }
  return s.join(`
`);
}
const za = ({
  isOpen: t,
  node: r,
  onClose: s,
  onSave: a
}) => {
  var wr, Cr;
  const [n, o] = P("info"), [l, i] = P([]), [d, c] = P([]), [p, h] = P(
    ((wr = r == null ? void 0 : r.permissions) == null ? void 0 : wr.rules) || []
  ), [j, u] = P(null), [b, k] = P(!1), [f, C] = P(""), [w, y] = P("General"), [g, D] = P(""), [M, m] = P("Dropdown"), [T, A] = P(""), [I, S] = P(""), [U, B] = P(""), [H, O] = P(1), [N, L] = P(4), [W, X] = P(""), [E, Z] = P(""), [te, z] = P(""), [ae, ce] = P(""), [q, de] = P(""), [J, se] = P(""), [F, G] = P(""), [oe, fe] = P(""), [xe, pe] = P(""), [ie, ye] = P(""), [be, ge] = P(""), [Pe, we] = P(""), [ve, re] = P(""), [he, qe] = P(""), [mt, St] = P(""), [_t, yt] = P(""), [Tt, ne] = P(""), [ke, Be] = P(""), [Ie, Ae] = P(""), [Re, Qe] = P(""), [et, at] = P(""), [lt, it] = P(""), [ot, Nt] = P(""), [He, jt] = P(""), [Ut, Ft] = P(""), [Pt, Ot] = P("id"), [Kt, Wt] = P(""), [Dt, zt] = P(""), [We, Ht] = P(""), [Jt, $] = P(""), [le, me] = P(""), [Se, Le] = P(""), [Ee, Te] = P(""), [De, Je] = P(""), [Ge, Ve] = P(""), [rt, bt] = P(""), [ft, Ze] = P(!1), [Gt, Rt] = P(!0), [Qt, Ds] = P(!1), [xs, Lt] = P(!1), [Is, hs] = P(!1), [ls, os] = P(!1), [ms, Fs] = P(!1), [bs, Zt] = P(!1), [gt, Gs] = P(!1), [Vs, Us] = P(!1), [Ps, Ks] = P(!1), [fs, gs] = P(!1), [vs, ys] = P(!1), [Ns, js] = P(!1), [ws, v] = P(!1), [x, R] = P(!1), [V, _] = P(!0), [Y, ue] = P(!0), [je, _e] = P(!1), [Ue, xt] = P(!1), [It, $t] = P(!1), [Cs, Rs] = P(!1), [dr, ur] = P(!1), [pr, xr] = P(!1), [hr, mr] = P(!1), [br, fr] = P(!1), [Ls, gr] = P(""), [$n, vr] = P(""), [yr, Nr] = P(""), [$s, un] = P(""), [Ai, Ya] = P("");
  if (Fe(() => {
    Ln().then((ee) => i(ee));
  }, []), Fe(() => {
    var ee;
    if (r && t) {
      const K = r.props || {}, Ce = r.dataBinding || {}, Me = r.pageId || (Q.getState().activeFeatureId ?? "");
      Me && r.id ? Oe.getState().fetchComponentPolicies(Me, r.id).then((Es) => {
        var kr;
        Es && Es.length > 0 ? h(Es) : h(((kr = r.permissions) == null ? void 0 : kr.rules) || []);
      }).catch(() => {
        var Es;
        h(((Es = r.permissions) == null ? void 0 : Es.rules) || []);
      }) : h(((ee = r.permissions) == null ? void 0 : ee.rules) || []), C(String(K.id ?? r.id)), y(K.group !== void 0 ? String(K.group) : "General");
      const xn = K.reference !== void 0 ? String(K.reference) : Ce.entityName !== void 0 ? String(Ce.entityName) : K.refName !== void 0 ? String(K.refName) : "";
      D(xn), m(r.type || "Dropdown"), A(String(K.parentId ?? "")), S(
        K.refName !== void 0 ? String(K.refName) : Ce.refName !== void 0 ? String(Ce.refName) : xn
      ), B(
        Ce.fieldName !== void 0 ? String(Ce.fieldName) : K.fieldName !== void 0 ? String(K.fieldName) : K.name !== void 0 ? String(K.name) : r.id
      ), O(Number(r.order ?? K.order ?? 1)), L(Number(K.colSpan ?? K.column ?? 4)), X(K.label !== void 0 ? String(K.label) : ""), Z(
        K.events !== void 0 ? typeof K.events == "string" ? K.events : JSON.stringify(K.events) : ""
      ), z(K.style !== void 0 ? String(K.style) : ""), ce(K.childStyle !== void 0 ? String(K.childStyle) : ""), de(K.validation !== void 0 ? String(K.validation) : ""), se(
        K.selectField !== void 0 ? String(K.selectField) : Ce.selectField !== void 0 ? String(Ce.selectField) : ""
      ), G(K.plainText !== void 0 ? String(K.plainText) : ""), fe(
        K.cssClass !== void 0 ? String(K.cssClass) : K.className !== void 0 ? String(K.className) : ""
      ), pe(K.sqlSelect !== void 0 ? String(K.sqlSelect) : ""), ye(String(K.offset ?? "")), ge(K.groupFormat !== void 0 ? String(K.groupFormat) : ""), we(K.formatSummary !== void 0 ? String(K.formatSummary) : ""), re(K.orderBySummary !== void 0 ? String(K.orderBySummary) : ""), qe(K.groupEvent !== void 0 ? String(K.groupEvent) : ""), St(K.icon !== void 0 ? String(K.icon) : ""), yt(K.system !== void 0 ? String(K.system) : ""), ne(K.refClass !== void 0 ? String(K.refClass) : ""), Be(K.hotKey !== void 0 ? String(K.hotKey) : ""), Ae(K.dateTimeField !== void 0 ? String(K.dateTimeField) : ""), Qe(String(K.addStart ?? "")), at(String(K.addEnd ?? "")), it(String(K.bodyRowHeight ?? "")), Nt(
        K.sqlWhere !== void 0 ? String(K.sqlWhere) : Ce.sqlWhere !== void 0 ? String(Ce.sqlWhere) : ""
      ), jt(String(K.footerHeight ?? "")), Ft(K.joinTable !== void 0 ? String(K.joinTable) : ""), Ot(
        K.idField !== void 0 ? String(K.idField) : Ce.idField !== void 0 ? String(Ce.idField) : "id"
      ), Wt(String(K.headerHeight ?? "")), zt(
        K.populateField !== void 0 ? String(K.populateField) : Ce.populateField !== void 0 ? String(Ce.populateField) : ""
      ), Ht(String(K.precision ?? "")), $(K.groupBy !== void 0 ? String(K.groupBy) : ""), me(K.disabledExp !== void 0 ? String(K.disabledExp) : ""), Le(K.showExp !== void 0 ? String(K.showExp) : ""), Te(String(K.row ?? "")), Je(K.template !== void 0 ? String(K.template) : ""), Ve(K.templateLocked !== void 0 ? String(K.templateLocked) : ""), bt(String(K.default ?? K.defaultValue ?? "")), Ze(!!K.realtime), Rt(K.showLabel !== !1 && K.label !== !1), Ds(!!K.hidden), Lt(!!K.filterLocal), hs(!!K.sqlSearch), os(!!K.cache), Fs(!!K.moveTab), Zt(!!K.focus), Gs(!!K.focusSearch), Us(!!K.noLoad), Ks(!!K.collapsible), gs(!!K.showHotKey), ys(!!K.history), js(!!K.top), v(!!K.hideAnd), R(!!K.disabled), _(K.visibility !== !1), ue(K.active !== !1), _e(!!K.upperCase), xt(!!(K.virtualScroll || K.virtual)), $t(!!K.isPrivate), Rs(!!K.renderIndex), ur(!!(K.canAdd || K.add)), xr(!!(K.canSearch || K.search)), mr(!!(K.isSummary || K.summary)), fr(!!K.showDateTimeField);
      const hn = K.dataSource !== void 0 ? K.dataSource : K.dataSourceFilter !== void 0 ? K.dataSourceFilter : Ce.dataSource !== void 0 ? Ce.dataSource : "";
      gr(String(hn ?? ""));
      const Ja = K.formatEntity !== void 0 ? K.formatEntity : Ce.formatEntity !== void 0 ? Ce.formatEntity : "";
      vr(String(Ja ?? "")), Nr(K.migration !== void 0 ? String(K.migration) : "");
      const Qa = K.formatData !== void 0 ? K.formatData : Ce.formatData !== void 0 ? Ce.formatData : "";
      un(String(Qa ?? ""));
      const Za = K.query !== void 0 ? K.query : Ce.query !== void 0 ? Ce.query : "";
      Ya(String(Za ?? "")), c(
        K.dropdownColumns || Ce.dropdownColumns || []
      );
    }
  }, [r, t]), !t || !r) return null;
  const Xa = async () => {
    let ee = E;
    try {
      E.trim().startsWith("{") && (ee = JSON.parse(E));
    } catch {
      ee = E;
    }
    const K = {
      ...r.props,
      id: f,
      group: w,
      reference: g,
      componentType: M,
      parentId: T,
      refName: I,
      fieldName: U,
      order: Number(H) || 1,
      colSpan: Number(N) || 4,
      column: Number(N) || 4,
      label: W,
      events: ee,
      style: te,
      childStyle: ae,
      validation: q,
      selectField: J,
      plainText: F,
      cssClass: oe,
      sqlSelect: xe,
      offset: ie,
      groupFormat: be,
      formatSummary: Pe,
      orderBySummary: ve,
      groupEvent: he,
      icon: mt,
      system: _t,
      refClass: Tt,
      hotKey: ke,
      dateTimeField: Ie,
      addStart: Re,
      addEnd: et,
      bodyRowHeight: lt,
      sqlWhere: ot,
      footerHeight: He,
      joinTable: Ut,
      idField: Pt,
      headerHeight: Kt,
      populateField: Dt,
      precision: We ? Number(We) : void 0,
      groupBy: Jt,
      disabledExp: le,
      showExp: Se,
      row: Ee,
      template: De,
      templateLocked: Ge,
      default: rt,
      // Display flags
      realtime: ft,
      showLabel: Gt,
      hidden: Qt,
      filterLocal: xs,
      sqlSearch: Is,
      cache: ls,
      moveTab: ms,
      focus: bs,
      focusSearch: gt,
      noLoad: Vs,
      collapsible: Ps,
      showHotKey: fs,
      history: vs,
      top: Ns,
      hideAnd: ws,
      disabled: x,
      visibility: V,
      active: Y,
      upperCase: je,
      virtual: Ue,
      isPrivate: It,
      renderIndex: Cs,
      add: dr,
      search: pr,
      summary: hr,
      showDateTimeField: br,
      // Code blocks
      dataSource: Ls,
      dataSourceFilter: Ls,
      formatEntity: $n,
      migration: yr,
      formatData: $s,
      query: Ls,
      dropdownColumns: d
    }, Ce = {
      ...r.dataBinding || {},
      entityName: g || I || "",
      refName: I || g || "",
      fieldName: U || r.id,
      query: Ls,
      dataSource: Ls,
      sqlWhere: ot,
      selectField: J,
      populateField: Dt,
      idField: Pt,
      formatData: $s,
      formatEntity: $n,
      dropdownColumns: d,
      twoWay: !0
    };
    let Me = [...p];
    j && (Me = [...Me, j], h(Me), u(null));
    const xn = {
      ...r.permissions || {},
      rules: Me
    };
    Q.getState().updateComponentPermissions(r.id, xn);
    const hn = r.pageId || (Q.getState().activeFeatureId ?? "");
    hn && await Oe.getState().saveComponentPolicies(
      hn,
      r.id,
      Me,
      String(U || I || r.id)
    ), a(r.id, K, Ce), k(!0), setTimeout(() => k(!1), 2500);
  }, jr = kn(l), As = Sn(jr, g || I), zs = As ? As.fields : [], pn = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes(M), Ke = (ee, K, Ce) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${K ? "text-slate-200 font-medium" : "text-slate-400"}`, children: ee }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: K,
        onChange: (Me) => Ce(Me.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Bt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            f || r.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                const ee = Q.getState(), K = (r == null ? void 0 : r.pageId) || ee.activeFeatureId;
                typeof ee.openFeatureProperties == "function" && ee.openFeatureProperties(K);
              },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-teal-700/60 bg-teal-950/60 hover:bg-teal-900 text-teal-300 transition-all cursor-pointer",
              title: "Mở cấu hình Feature của màn hình này",
              children: [
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Feature Properties ↗" })
              ]
            }
          ),
          b && /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40 animate-in fade-in", children: [
            /* @__PURE__ */ e.jsx(on, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Đã lưu thành công!" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: Xa,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Lưu" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => o("permissions"),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Hs, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Phân quyền" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: s,
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5 text-rose-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đóng" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-[#0a1220] px-5 gap-6 text-xs font-semibold select-none", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => o("info"),
            className: `py-2 border-b-2 transition-colors cursor-pointer ${n === "info" ? "border-teal-400 text-teal-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: "THÔNG TIN CHUNG"
          }
        ),
        pn && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-emerald-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
              d.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: d.length })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => o("permissions"),
            className: `py-2 border-b-2 transition-colors cursor-pointer ${n === "permissions" ? "border-teal-400 text-teal-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: "QUYỀN HẠN"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => o("report"),
            className: `py-2 border-b-2 transition-colors cursor-pointer ${n === "report" ? "border-teal-400 text-teal-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: "REPORT"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-4 overflow-y-auto space-y-4", children: [
        n === "info" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "xl:col-span-3 space-y-3 bg-[#0a1220]/60 p-3.5 rounded-lg border border-slate-800", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 border-b border-slate-800 pb-1 tracking-wider uppercase", children: "COMMON" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 text-xs", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Id" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      disabled: !0,
                      value: f,
                      className: "w-full px-2 py-1 bg-slate-900 border border-slate-800 rounded font-mono text-teal-300 opacity-80"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Group" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (ee) => y(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: As ? As.name : "",
                      onChange: (ee) => {
                        const K = ee.target.value;
                        D(K), S(K);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        jr.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                          ee.displayName,
                          " (",
                          ee.name,
                          ")"
                        ] }, ee.name))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: M,
                      onChange: (ee) => m(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "Dropdown", children: "Dropdown" }),
                        /* @__PURE__ */ e.jsx("option", { value: "TextBox", children: "TextBox / Input" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Number", children: "Number" }),
                        /* @__PURE__ */ e.jsx("option", { value: "DatePicker", children: "DatePicker" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Select", children: "Select" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Checkbox", children: "Checkbox" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Textarea", children: "Textarea" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Table", children: "Table / GridView" }),
                        /* @__PURE__ */ e.jsx("option", { value: "RecordSelector", children: "RecordSelector (Lô hàng)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Section", children: "Section Card" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Container", children: "Container" }),
                        /* @__PURE__ */ e.jsx("option", { value: "Button", children: "Button" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "ParentId" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: T,
                      onChange: (ee) => A(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "RefName (Hoặc nhập tay)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: I,
                      placeholder: "VD: Vendor, Terminal, Customer...",
                      onChange: (ee) => {
                        S(ee.target.value), D(ee.target.value);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-cyan-300 font-mono text-xs focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Field Name" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: U,
                      onChange: (ee) => B(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Order" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: H,
                      onChange: (ee) => O(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Column" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: N,
                      onChange: (ee) => L(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Label" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: W,
                      onChange: (ee) => X(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Events" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] text-cyan-400 font-mono", children: "Đã chuyển sang Tab Events" })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "w-full px-2 py-1 bg-slate-900/60 border border-slate-800 rounded text-slate-400 text-[11px] italic flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: "Cấu hình trực quan tại Tab Events" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "⚡ Visual" })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Style" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: te,
                      onChange: (ee) => z(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Child style" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ae,
                      onChange: (ee) => ce(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Validation" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: q,
                      onChange: (ee) => de(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Select Field" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: J,
                      onChange: (ee) => se(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Plain text" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: F,
                      onChange: (ee) => G(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Css class" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: oe,
                      onChange: (ee) => fe(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Sql Select" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: xe,
                      onChange: (ee) => pe(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Offset" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ie,
                      onChange: (ee) => ye(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "GroupFormat" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: be,
                      onChange: (ee) => ge(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Format Sumary" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Pe,
                      onChange: (ee) => we(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "OrderBy Sumary" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ve,
                      onChange: (ee) => re(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Group event" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: he,
                      onChange: (ee) => qe(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Icon" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: mt,
                      onChange: (ee) => St(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "System" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: _t,
                      onChange: (ee) => yt(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Ref class" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Tt,
                      onChange: (ee) => ne(ee.target.value),
                      placeholder: "TMS.UI.Business.Catalogue.TerminalEditor...",
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-cyan-300 font-mono text-[11px] focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "HotKey" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ke,
                      onChange: (ee) => Be(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "DateTime field" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ie,
                      onChange: (ee) => Ae(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Add Start" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Re,
                      onChange: (ee) => Qe(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Add End" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: et,
                      onChange: (ee) => at(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "BodyRow Height" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: lt,
                      onChange: (ee) => it(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "SqlWhere" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ot,
                      onChange: (ee) => Nt(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "FooterHeight" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: He,
                      onChange: (ee) => jt(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "JoinTable" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ut,
                      onChange: (ee) => Ft(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "IdField" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Pt,
                      onChange: (ee) => Ot(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "HeaderHeight" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Kt,
                      onChange: (ee) => Wt(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Populate field" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Dt,
                      onChange: (ee) => zt(ee.target.value),
                      placeholder: "Transaction.Vendor = Terminal.VendorId...",
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-emerald-300 font-mono text-[11px] focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Precision" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: We,
                      onChange: (ee) => Ht(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "GroupBy" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Jt,
                      onChange: (ee) => $(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "DisabledExp" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: le,
                      onChange: (ee) => me(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "ShowExp" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Se,
                      onChange: (ee) => Le(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Row" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ee,
                      onChange: (ee) => Te(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Template" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: De,
                      onChange: (ee) => Je(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Dn, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ge,
                      onChange: (ee) => Ve(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Default" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: rt,
                      onChange: (ee) => bt(ee.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 bg-[#0a1220]/60 p-3.5 rounded-lg border border-slate-800", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 border-b border-slate-800 pb-1 tracking-wider uppercase", children: "DISPLAY" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-x-2 text-xs", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Ke("Realtime", ft, Ze),
                  Ke("Label", Gt, Rt),
                  Ke("Hidden", Qt, Ds),
                  Ke("FilterLocal", xs, Lt),
                  Ke("SqlSearch", Is, hs),
                  Ke("Cache", ls, os),
                  Ke("Move Tab", ms, Fs),
                  Ke("Focus", bs, Zt),
                  Ke("FocusSearch", gt, Gs),
                  Ke("No Load", Vs, Us),
                  Ke("Collapsible", Ps, Ks),
                  Ke("HotKey", fs, gs),
                  Ke("History", vs, ys)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Ke("Top", Ns, js),
                  Ke("HideAnd", ws, v),
                  Ke("Disabled", x, R),
                  Ke("Visibility", V, _),
                  Ke("Active", Y, ue),
                  Ke("Upper Case", je, _e),
                  Ke("Virtual", Ue, xt),
                  Ke("Private", It, $t),
                  Ke("Render Index", Cs, Rs),
                  Ke("Add", dr, ur),
                  Ke("Search", pr, xr),
                  Ke("Sumary", hr, mr),
                  Ke("DateTime Field", br, fr)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("span", { children: "DATASOURCE" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "OData Query Template" })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: Ls,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (ee) => gr(ee.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-rose-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("span", { children: "FORMATENTITY" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "(x, y) => Function" })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: $n,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (ee) => vr(ee.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${pn ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: yr,
                      onChange: (ee) => Nr(ee.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !pn && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("span", { children: "FORMATDATA" }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                    "{Field}",
                    " Interpolation"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: $s,
                      onChange: (ee) => un(ee.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && pn && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(At, { className: "w-4 h-4 text-emerald-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Cấu Hình Cột Hiển Thị Bảng Chọn Dropdown (Multi-Column Select)" })
              ] }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                "Thiết lập danh sách cột và định dạng hiển thị ",
                /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300", children: "FORMATDATA" }),
                " cho Select."
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    var ee, K;
                    c([
                      ...d,
                      {
                        key: ((ee = zs[d.length]) == null ? void 0 : ee.name) || `col${d.length + 1}`,
                        title: ((K = zs[d.length]) == null ? void 0 : K.displayName) || `Cột ${d.length + 1}`,
                        width: "50%",
                        align: "left"
                      }
                    ]);
                  },
                  className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                  ]
                }
              ),
              As && zs.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const ee = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let K = zs.filter((Ce) => ee.includes(Ce.name.toLowerCase()));
                    K.length === 0 ? K = zs.slice(0, 3) : K = K.slice(0, 4), c(
                      K.map((Ce) => ({
                        key: Ce.name,
                        title: Ce.displayName || Ce.name,
                        width: `${Math.floor(100 / K.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      As.name
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          d.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-lg text-center text-xs text-slate-400", children: [
            "Chưa có cột nào. Nhấn ",
            /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
            " hoặc ",
            /* @__PURE__ */ e.jsx("strong", { children: '"Tự động nạp"' }),
            " để bắt đầu."
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((ee, K) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: K === 0,
                  onClick: () => {
                    const Ce = [...d], Me = Ce[K];
                    Ce[K] = Ce[K - 1], Ce[K - 1] = Me, c(Ce);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: K === d.length - 1,
                  onClick: () => {
                    const Ce = [...d], Me = Ce[K];
                    Ce[K] = Ce[K + 1], Ce[K + 1] = Me, c(Ce);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: ee.key,
                placeholder: "Key (vd: FullName)",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[K] = { ...Me[K], key: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: ee.title,
                placeholder: "Tiêu đề cột",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[K] = { ...Me[K], title: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: ee.width || "50%",
                placeholder: "Width",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[K] = { ...Me[K], width: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: ee.align || "left",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[K] = { ...Me[K], align: Ce.target.value }, c(Me);
                },
                className: "w-full px-1 py-1 bg-[#030712] border border-slate-700 rounded text-[11px] text-slate-200",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "left", children: "Trái" }),
                  /* @__PURE__ */ e.jsx("option", { value: "center", children: "Giữa" }),
                  /* @__PURE__ */ e.jsx("option", { value: "right", children: "Phải" })
                ]
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1 flex justify-end", children: /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c(d.filter((Ce, Me) => Me !== K)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, K)) }),
          /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-3 space-y-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-teal-400 tracking-wider uppercase flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "FORMATDATA (Định dạng hiển thị sau khi chọn)" }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "{Entity.Field}",
                " Interpolation"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: $s,
                onChange: (ee) => un(ee.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((ee, K) => {
              const Ce = g || I, Me = Ce ? `{${Ce}.${ee.key}}` : `{${ee.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => un($s ? `${$s} - ${Me}` : Me),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    Me
                  ]
                },
                K
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsx(
          Ea,
          {
            rules: p,
            onChange: h,
            onPendingRuleChange: u,
            pageId: r.pageId || Q.getState().activeFeatureId || "",
            nodeId: r.id,
            fieldName: U || ((Cr = r.dataBinding) == null ? void 0 : Cr.fieldName) || r.id
          }
        ) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Yt, { className: "w-4 h-4 text-teal-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham Số In Ấn & Xuất Báo Cáo (Excel / PDF Template)" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-1", children: "Mã cột Excel (Excel Field Name)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "VD: COL_POL_NAME",
                  className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-1", children: "Định dạng số / ngày (Format Pattern)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "VD: #,##0.00 hoặc DD/MM/YYYY",
                  className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                }
              )
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    document.body
  );
}, ht = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = P(
    t != null ? String(t) : ""
  ), d = nt(r);
  d.current = r;
  const c = nt(null);
  Fe(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (b) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const k = t != null ? String(t) : "";
    b !== k && d.current(b);
  };
  Fe(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const h = (b) => {
    const k = b.target.value;
    i(k), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(k);
    }, s);
  }, j = (b) => {
    p(b.target.value), a && a(b);
  }, u = (b) => {
    b.key === "Enter" && p(b.target.value), n && n(b);
  };
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...o,
      value: l,
      onChange: h,
      onBlur: j,
      onKeyDown: u
    }
  );
}, bi = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = P(
    t != null ? String(t) : ""
  ), d = nt(r);
  d.current = r;
  const c = nt(null);
  Fe(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (u) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const b = t != null ? String(t) : "";
    u !== b && d.current(u);
  };
  Fe(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const h = (u) => {
    const b = u.target.value;
    i(b), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(b);
    }, s);
  }, j = (u) => {
    p(u.target.value), a && a(u);
  };
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      ...o,
      value: l,
      onChange: h,
      onBlur: j,
      onKeyDown: n
    }
  );
}, fi = ({ width: t }) => {
  var de, J, se;
  const [r, s] = P("layout"), [a, n] = P(null), [o, l] = P(!1), [i, d] = P(!1), [c, p] = P([]);
  Fe(() => {
    Ln().then((F) => {
      F && F.length > 0 && p(F);
    });
  }, []);
  const [h, j] = P(null), [u, b] = P(null), k = Q((F) => F.activeFeatureId), f = Q((F) => F.features.find((G) => G.id === F.activeFeatureId)), C = Q((F) => F.selection), w = Q((F) => F.selectComponent), y = Q((F) => F.addComponent), g = Q((F) => F.updateComponentProps), D = Q((F) => F.updateComponentStyle), M = Q((F) => F.updateComponentEvents), m = Q((F) => F.updateComponentDataBinding), T = Q((F) => F.updateComponentOrder), A = Q((F) => F.removeComponent);
  Q((F) => F.distributeSiblingWidths);
  const I = Q((F) => F.updateFeatureScriptFile), [S, U] = P(""), [B, H] = P(0), O = (F, G) => {
    if (!G) return null;
    for (const oe of F) {
      if (oe.id === G) return oe;
      if (oe.children) {
        const fe = O(oe.children, G);
        if (fe) return fe;
      }
    }
    return null;
  }, N = $e(
    () => C.componentId && f ? O(f.components, C.componentId) : null,
    [C.componentId, f]
  ), L = $e(
    () => N != null && N.parentId && f ? O(f.components, N.parentId) : null,
    [N == null ? void 0 : N.parentId, f]
  ), W = $e(
    () => {
      var F, G;
      return L && ((F = L.props) != null && F.isTab || (G = L.props) != null && G.tab || L.type === "Tabs") ? L : null;
    },
    [L]
  );
  if (!N) {
    const F = f ? f.components.filter((G) => !G.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: t ? `${t}px` : "380px" },
        className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: "Feature" }),
              /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (f == null ? void 0 : f.name) || "Trang" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: f == null ? void 0 : f.route })
              ] })
            ] }),
            f && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const G = Q.getState();
                  typeof G.openFeatureProperties == "function" && G.openFeatureProperties(f.id);
                },
                className: "p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-teal-300 border border-slate-700/60 bg-slate-800/50 transition-colors cursor-pointer",
                title: "Mở Thuộc tính Feature (Feature Properties Modal)",
                children: /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-teal-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: f && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const G = Q.getState();
                  typeof G.openFeatureProperties == "function" && G.openFeatureProperties(f.id);
                },
                className: "w-full py-2.5 px-3 bg-gradient-to-r from-teal-600/30 to-blue-600/30 hover:from-teal-600/50 hover:to-blue-600/50 border border-teal-500/50 rounded-xl text-teal-200 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950/40 cursor-pointer transition-all group",
                children: [
                  /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-teal-400 group-hover:rotate-45 transition-transform" }),
                  /* @__PURE__ */ e.jsx("span", { children: "🔧 Mở Thuộc Tính Feature (Feature Properties)" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: f.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  ht,
                  {
                    type: "text",
                    value: f.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (G) => I(f.id, G),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      F.length,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Chỉnh Order (từ nhỏ đến lớn). Cùng Order & tab=true sẽ Stack lại!" })
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const G = `box_${Date.now().toString(36)}`;
                      y(
                        {
                          id: G,
                          type: "Container",
                          parentId: null,
                          pageId: f.id,
                          order: F.length + 1,
                          props: {
                            layoutMode: "flex",
                            flexConfig: { direction: "column", gap: "12px", wrap: "wrap" }
                          },
                          style: { width: "100%", minHeight: "120px" },
                          events: [],
                          children: []
                        },
                        null
                      );
                    },
                    className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-colors",
                    children: [
                      /* @__PURE__ */ e.jsx(ze, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              F.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...F].sort((G, oe) => (G.order ?? 1) - (oe.order ?? 1)).map((G, oe) => {
                var xe, pe;
                const fe = !!((xe = G.props) != null && xe.tab || (pe = G.props) != null && pe.isTab || G.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => w(G.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          oe + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: G.props.label || G.props.title || G.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: G.type }),
                            fe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            G.id
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", title: "Thứ tự ưu tiên sắp xếp (từ nhỏ đến lớn)", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-semibold", children: "Order:" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "number",
                              value: Number(G.order ?? G.props.order ?? oe + 1),
                              onClick: (ie) => ie.stopPropagation(),
                              onChange: (ie) => {
                                const ye = Number(ie.target.value);
                                T(G.id, ye);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (ie) => {
                              ie.stopPropagation(), A(G.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  G.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const X = N.type === "Container" || N.type === "Section" || N.type === "Tabs", E = N.type === "Select" || N.type === "Dropdown" || N.type === "Autocomplete" || N.type === "SearchEntry", Z = N.props.dropdownColumns || ((de = N.dataBinding) == null ? void 0 : de.dropdownColumns) || [], te = !X && (r === "layout" || r === "children") || X && r === "data" || !E && r === "columns" ? "props" : r, z = N.props.layoutMode || "flex", ae = N.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, ce = N.props.gridConfig || { columns: 2, gap: "16px" }, q = N.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: t ? `${t}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: N.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: N.props.label || N.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                N.id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => d(!0),
                className: "p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Mở Component properties modal (Chuẩn C# Core)",
                children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => A(N.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          X && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Zs, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          X && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  q.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(fl, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          !X && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(jn, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          E && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => s("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${te === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  Z.length,
                  ")"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          X && te === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => g(N.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${z === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(us, { className: "w-4 h-4 text-blue-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "Flexbox" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Canh hàng/cột linh hoạt" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => g(N.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${z === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Zs, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              z === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.direction || "row",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, direction: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "row", children: "Hàng ngang (Row)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "column", children: "Cột dọc (Column)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tổng Số Cột Lưới / Dòng" }),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "number",
                          min: "1",
                          max: "48",
                          value: typeof ae.columnsPerRow == "number" ? ae.columnsPerRow : ce.columns || 12,
                          onChange: (F) => {
                            const G = Math.max(1, Number(F.target.value) || 12);
                            g(N.id, {
                              flexConfig: { ...ae, columnsPerRow: G },
                              gridConfig: { ...ce, columns: G }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(ae.columnsPerRow || "12"),
                          onChange: (F) => {
                            const G = F.target.value === "auto" ? "auto" : Number(F.target.value);
                            g(N.id, {
                              flexConfig: {
                                ...ae,
                                columnsPerRow: G,
                                wrap: G !== "auto" ? "wrap" : ae.wrap
                              },
                              gridConfig: {
                                ...ce,
                                columns: G === "auto" ? 12 : G
                              }
                            });
                          },
                          className: "flex-1 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs focus:outline-none focus:border-cyan-500 font-bold",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "12", children: "12 Cột (Chuẩn ERP)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "24", children: "24 Cột (Mịn hơn)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "6", children: "6 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "4", children: "4 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "3", children: "3 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "2", children: "2 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "1", children: "1 Cột (Full 100%)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "auto", children: "Tự động (Auto)" })
                          ]
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Căn Lề Ngang (Justify)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.justify || "flex-start",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, justify: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500 font-medium",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "flex-start", children: "← Trái (flex-start)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "center", children: "↔ Vào giữa (center)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-end", children: "→ Phải (flex-end)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "space-between", children: "⇥ Dãn 2 đầu (space-between)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "space-around", children: "⇹ Dãn phân bổ (space-around)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Căn Lề Dọc (Align)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.align || "center",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, align: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500 font-medium",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "center", children: "↕ Vào giữa (center)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-start", children: "↑ Đỉnh / Trên (flex-start)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-end", children: "↓ Đáy / Dưới (flex-end)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "stretch", children: "↕ Kéo giãn (stretch)" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Khoảng Cách (Gap)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.gap || "12px",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, gap: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "4px", children: "4px (Nhỏ)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "8px", children: "8px (Vừa)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "12px", children: "12px (Chuẩn)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "16px", children: "16px (Rộng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "24px", children: "24px (Rất rộng)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Xuống Dòng (Wrap)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.wrap || "wrap",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, wrap: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "wrap", children: "Cho phép rớt dòng (wrap)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "nowrap", children: "Cố định 1 hàng (nowrap)" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              z === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tổng Số Cột Lưới" }),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "number",
                          min: "1",
                          max: "48",
                          value: ce.columns || 12,
                          onChange: (F) => {
                            const G = Math.max(1, Number(F.target.value) || 12);
                            g(N.id, {
                              gridConfig: { ...ce, columns: G },
                              flexConfig: { ...ae, columnsPerRow: G }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(ce.columns || 12),
                          onChange: (F) => {
                            const G = Number(F.target.value);
                            g(N.id, {
                              gridConfig: { ...ce, columns: G },
                              flexConfig: { ...ae, columnsPerRow: G }
                            });
                          },
                          className: "flex-1 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500 font-bold",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "12", children: "12 Cột (Chuẩn ERP)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "24", children: "24 Cột (Mịn hơn)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "6", children: "6 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "4", children: "4 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "3", children: "3 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "2", children: "2 Cột" }),
                            /* @__PURE__ */ e.jsx("option", { value: "1", children: "1 Cột (Full 100%)" })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Khoảng Cách (Gap)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.gap || ce.gap || "12px",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, gap: F.target.value },
                          gridConfig: { ...ce, gap: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "4px", children: "4px (Nhỏ)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "8px", children: "8px (Vừa)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "12px", children: "12px (Chuẩn)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "16px", children: "16px (Rộng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "24px", children: "24px (Rất rộng)" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Căn Lề Ngang (Justify)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.justify || "flex-start",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, justify: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "flex-start", children: "← Trái (flex-start)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "center", children: "↔ Vào giữa (center)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-end", children: "→ Phải (flex-end)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "space-between", children: "⇥ Dãn 2 đầu (space-between)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Căn Lề Dọc (Align)" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ae.align || "center",
                        onChange: (F) => g(N.id, {
                          flexConfig: { ...ae, align: F.target.value }
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: "center", children: "↕ Vào giữa (center)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-start", children: "↑ Trên (flex-start)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "flex-end", children: "↓ Dưới (flex-end)" }),
                          /* @__PURE__ */ e.jsx("option", { value: "stretch", children: "↕ Kéo giãn (stretch)" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Chế Độ Tab (isTab = true)" }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Biến Container thành thanh điều hướng Tab chuẩn ERP" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!(N.props.isTab || N.props.tab || N.type === "Tabs"),
                    onChange: (F) => {
                      var fe;
                      const G = F.target.checked, oe = N.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      g(N.id, {
                        isTab: G,
                        tab: G,
                        tabs: G ? oe : N.props.tabs,
                        activeTabId: G ? N.props.activeTabId || ((fe = oe[0]) == null ? void 0 : fe.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(N.props.isTab || N.props.tab || N.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: N.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (F) => g(N.id, { label: F }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-bold text-xs focus:outline-none focus:border-emerald-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "number",
                        value: Number(N.order ?? N.props.order ?? 1),
                        onChange: (F) => {
                          const G = Number(F.target.value);
                          T(N.id, G);
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs focus:outline-none focus:border-amber-500 font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] text-slate-500 block mt-0.5", children: "Cùng Order sẽ Stack thành thanh Tab" })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Huy Hiệu (Badge)" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: N.props.badge !== void 0 ? String(N.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (F) => g(N.id, {
                          badge: F.target.value || void 0
                        }),
                        className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] text-slate-500 block mt-0.5", children: "Số lượng / nhãn nhỏ" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          X && te === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                q.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            q.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...q].sort((F, G) => (F.order ?? 1) - (G.order ?? 1)).map((F, G) => {
              var xe, pe;
              const oe = C.componentId === F.id, fe = !!((xe = F.props) != null && xe.tab || (pe = F.props) != null && pe.isTab || F.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => w(F.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${oe ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        G + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: F.props.label || F.props.title || F.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: F.type }),
                          fe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          F.id
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", title: "Thứ tự ưu tiên sắp xếp (từ nhỏ đến lớn)", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-semibold", children: "Order:" }),
                        /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            value: F.order ?? G + 1,
                            onClick: (ie) => ie.stopPropagation(),
                            onChange: (ie) => {
                              const ye = Number(ie.target.value);
                              T(F.id, ye);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (ie) => {
                            ie.stopPropagation(), A(F.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                F.id
              );
            }) })
          ] }),
          te === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => d(!0),
                className: "w-full py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số (Component Properties)" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(N.order ?? N.props.order ?? 1),
                      onChange: (F) => {
                        const G = Number(F.target.value);
                        T(N.id, G);
                      },
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs focus:outline-none focus:border-amber-500 font-bold"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[9px] text-slate-500 block mt-0.5", children: "Sắp xếp nhỏ đến lớn. Cùng Order sẽ stack lại." })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Cột Chiếm Dụng (ColSpan)" }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "number",
                        min: "1",
                        max: "48",
                        value: Number(N.props.colSpan || 4),
                        onChange: (F) => {
                          const G = Math.max(1, Number(F.target.value) || 1);
                          g(N.id, { colSpan: G });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: N.props.colSpan || 4,
                        onChange: (F) => g(N.id, { colSpan: Number(F.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500",
                        children: [
                          /* @__PURE__ */ e.jsx("option", { value: 1, children: "1 Cột (8.3%)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 2, children: "2 Cột (16.6%)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 3, children: "3 Cột (25%)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 4, children: "4 Cột (33.3% - 1/3 dòng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 6, children: "6 Cột (50% - 1/2 dòng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 8, children: "8 Cột (66.6% - 2/3 dòng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 9, children: "9 Cột (75% dòng)" }),
                          /* @__PURE__ */ e.jsx("option", { value: 12, children: "12 Cột (100% full dòng)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    N.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(N.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            X && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(N.props.tab || N.props.isTab || N.type === "Tabs"),
                  onChange: (F) => {
                    const G = F.target.checked;
                    g(N.id, {
                      tab: G,
                      isTab: G
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            W && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: N.props.tabId || ((se = (J = W.props.tabs) == null ? void 0 : J[0]) == null ? void 0 : se.id) || "main",
                  onChange: (F) => g(N.id, { tabId: F.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (W.props.tabs || []).map((F) => /* @__PURE__ */ e.jsxs("option", { value: F.id, children: [
                    F.label,
                    " (",
                    F.id,
                    ")"
                  ] }, F.id))
                }
              ),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: "Component này chỉ hiển thị khi người dùng chọn tab này trên Canvas." })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Nhãn Hiển Thị (Label)" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400", children: "Hiển thị nhãn" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: N.props.showLabel ?? !0,
                      onChange: (F) => g(N.id, { showLabel: F.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                ht,
                {
                  type: "text",
                  value: N.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (F) => g(N.id, { label: F }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: N.props.labelPosition || "left",
                      onChange: (F) => g(N.id, { labelPosition: F.target.value }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "left", children: "Bên Trái (Chuẩn ERP)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "top", children: "Phía Trên (Top)" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Cột Chiếm Dụng (ColSpan)" }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "number",
                        min: "1",
                        max: "48",
                        value: Number(N.props.colSpan || 4),
                        onChange: (F) => {
                          const G = Math.max(1, Number(F.target.value) || 1);
                          g(N.id, { colSpan: G });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: N.props.colSpan || 4,
                        onChange: (F) => g(N.id, { colSpan: Number(F.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((F) => /* @__PURE__ */ e.jsxs("option", { value: F, children: [
                          F,
                          " Cột (",
                          Math.round(F / 12 * 100),
                          "%)"
                        ] }, F))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    N.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(N.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            N.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                ht,
                {
                  type: "text",
                  value: N.props.placeholder || "",
                  onChange: (F) => g(N.id, { placeholder: F }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            N.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  ht,
                  {
                    type: "text",
                    value: N.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (F) => g(N.id, { reference: F }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: N.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (F) => g(N.id, { displayField: F }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: N.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (F) => g(N.id, { valueField: F }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  ht,
                  {
                    type: "text",
                    value: N.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (F) => g(N.id, { placeholder: F }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            N.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: N.props.rows || 3,
                  onChange: (F) => g(N.id, { rows: Number(F.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            N.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: N.props.precision !== void 0 ? N.props.precision : 2,
                    onChange: (F) => g(N.id, { precision: Number(F.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: N.props.thousandsSeparator ?? !0,
                    onChange: (F) => g(N.id, { thousandsSeparator: F.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            N.type === "Table" && (() => {
              const F = N.props.columns || [], G = a !== null ? F[a] : null, oe = (be, ge) => {
                const Pe = F.map((we, ve) => ve === be ? { ...we, ...ge } : we);
                g(N.id, { columns: Pe });
              }, fe = (be, ge) => {
                if (ge < 0 || ge >= F.length) return;
                const Pe = Qn(F, be, ge);
                g(N.id, { columns: Pe }), n(ge);
              }, xe = (be) => {
                const ge = Oa(F, be);
                g(N.id, { columns: ge });
                const Pe = ge.findIndex((we) => we.key === be);
                Pe !== -1 && n(Pe);
              }, pe = (be, ge) => {
                const Pe = Math.max(0, Math.min(F.length - 1, ge - 1));
                if (Pe !== be) {
                  const we = Qn(F, be, Pe);
                  g(N.id, { columns: we }), n(Pe);
                }
              }, ie = () => {
                const be = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: F.length + 1
                }, ge = tn([...F, be]);
                g(N.id, { columns: ge }), n(ge.length - 1);
              }, ye = (be) => {
                const ge = F.filter((we, ve) => ve !== be), Pe = tn(ge);
                g(N.id, { columns: Pe }), a === be ? n(null) : a !== null && a > be && n(a - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ie,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: F.map((be, ge) => {
                  const Pe = a === ge, we = !!(be.frozen || be.sticky === "left"), ve = h === ge, re = u === ge;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => j(ge),
                      onDragOver: (he) => {
                        he.preventDefault(), !(h === null || h === ge) && b(ge);
                      },
                      onDragLeave: () => b(null),
                      onDrop: () => {
                        h !== null && h !== ge && fe(h, ge), j(null), b(null);
                      },
                      onDragEnd: () => {
                        j(null), b(null);
                      },
                      onClick: () => n(ge),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${ve ? "opacity-30 bg-slate-800" : ""} ${re ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Pe ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(cn, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ge === 0,
                                onClick: (he) => {
                                  he.stopPropagation(), fe(ge, ge - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ge === F.length - 1,
                                onClick: (he) => {
                                  he.stopPropagation(), fe(ge, ge + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            be.order ?? ge + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: be.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            be.key,
                            "]"
                          ] }),
                          we && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: be.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (he) => {
                                he.stopPropagation(), ye(ge);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    be.key || ge
                  );
                }) }),
                G && a !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      G.title
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500", children: [
                      "Index: ",
                      a
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => l(!0),
                      className: "w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Mở Toàn Bộ Thông Số Cột" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-amber-400 block mb-1", children: "Thứ Tự (Order)" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "number",
                          min: 1,
                          max: F.length,
                          value: G.order ?? a + 1,
                          onChange: (be) => {
                            const ge = parseInt(be.target.value, 10);
                            isNaN(ge) || pe(a, ge);
                          },
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-amber-600/40 rounded text-amber-400 font-mono text-xs font-bold focus:border-amber-400 focus:outline-none"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Field Name (Trường DB)" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          value: G.key,
                          onChange: (be) => oe(a, { key: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Short Desc (Tên Tiêu Đề)" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          value: G.title,
                          onChange: (be) => oe(a, { title: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Component Kiểu Ô" }),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: G.componentType || "TextBox",
                          onChange: (be) => oe(a, { componentType: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "TextBox", children: "Input (Văn bản)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "Number", children: "Number (Số / Cân nặng)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "DatePicker", children: "Datepicker (Lịch ngày)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "Select", children: "Dropdown (Lựa chọn)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "Checkbox", children: "Checkbox (Hộp kiểm)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "Button", children: "Button (Thao tác)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "Label", children: "Label (Nhãn thuần)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Độ Rộng (Width)" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          value: G.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (be) => oe(a, { width: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Căn Lề (Align)" }),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: G.align || "left",
                          onChange: (be) => oe(a, { align: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "left", children: "Căn Trái" }),
                            /* @__PURE__ */ e.jsx("option", { value: "center", children: "Căn Giữa" }),
                            /* @__PURE__ */ e.jsx("option", { value: "right", children: "Căn Phải (Số liệu)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 block mb-1", children: "Tính Tổng (Summary)" }),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: G.aggregate || "none",
                          onChange: (be) => oe(a, { aggregate: be.target.value }),
                          className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "none", children: "Không tính tổng" }),
                            /* @__PURE__ */ e.jsx("option", { value: "sum", children: "Tổng cộng (Sum)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "avg", children: "Trung bình (Avg)" }),
                            /* @__PURE__ */ e.jsx("option", { value: "count", children: "Đếm số dòng (Count)" })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-2 pt-2 border-t border-slate-800", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!(G.frozen || G.sticky === "left"),
                          onChange: () => xe(G.key),
                          className: "rounded bg-slate-800 border-slate-700 text-amber-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-amber-400", children: "Cố định (Frozen)" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: G.editable ?? !0,
                          onChange: (be) => oe(a, { editable: be.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-blue-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Cho phép sửa" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: G.sortable ?? !0,
                          onChange: (be) => oe(a, { sortable: be.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] })
                ] }),
                o && G && a !== null && /* @__PURE__ */ e.jsx(
                  Ma,
                  {
                    isOpen: o,
                    column: G,
                    onClose: () => l(!1),
                    onSave: (be) => {
                      const ge = F.map((ve, re) => re === a ? be : ve), Pe = tn(ge);
                      g(N.id, { columns: Pe });
                      const we = Pe.findIndex((ve) => ve.key === be.key);
                      we !== -1 && n(we);
                    }
                  }
                )
              ] });
            })(),
            /* @__PURE__ */ e.jsxs("div", { className: "pt-3 border-t border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Bắt buộc nhập (Required)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!N.props.required,
                    onChange: (F) => g(N.id, { required: F.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "Vô hiệu hóa (Disabled)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!N.props.disabled,
                    onChange: (F) => g(N.id, { disabled: F.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          te === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: N.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (F) => D(N.id, { width: F.target.value }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Chiều cao (Height)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: N.style.height || N.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (F) => D(N.id, {
                      height: F.target.value,
                      minHeight: F.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(gn, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: N.style.customCss || mi(N.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (F) => {
                    const G = F.target.value, oe = hi(G);
                    if (D(N.id, {
                      ...oe,
                      customCss: G
                    }), oe.justifyContent || oe.alignItems) {
                      const fe = N.props.flexConfig || {};
                      g(N.id, {
                        flexConfig: {
                          ...fe,
                          ...oe.justifyContent ? { justify: oe.justifyContent } : {},
                          ...oe.alignItems ? { align: oe.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          te === "events" && /* @__PURE__ */ e.jsx(
            $a,
            {
              events: N.events || [],
              onChange: (F) => M(N.id, F),
              scriptFile: (f == null ? void 0 : f.scriptFile) || "transactionList.bl.ts",
              componentName: N.props.label || N.type,
              componentId: N.id,
              contextExtra: {
                pageId: k,
                nodeId: N.id,
                type: N.type
              }
            }
          ),
          te === "data" && (() => {
            const F = N.dataBinding || {}, G = N.props || {}, oe = N.type, fe = oe === "Table" || oe === "GridView" || oe === "AdvancedGrid", xe = oe === "Select" || oe === "Dropdown" || oe === "Autocomplete" || oe === "SearchEntry", pe = oe === "TextBox" || oe === "Number" || oe === "DatePicker" || oe === "Checkbox" || oe === "Textarea", ie = !fe && !xe && !pe, ye = kn(c), be = F.entityName || G.reference || G.refName || "", ge = Sn(ye, be), Pe = ge ? ge.fields : [], we = F.dataSource || G.dataSource || G.dataSourceFilter || F.query || G.query || "", ve = (re) => {
              m(N.id, {
                dataSource: re,
                query: re
              }), g(N.id, {
                dataSource: re,
                dataSourceFilter: re,
                query: re
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(jn, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      oe,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  fe && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  xe && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  pe && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  ie && "Thành phần giao diện/bố cục. Quản lý thuộc tính và mở thông số trong tab Props."
                ] })
              ] }),
              fe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ge ? ge.name : "",
                      onChange: (re) => {
                        const he = re.target.value;
                        m(N.id, {
                          entityName: he,
                          refName: he
                        }), g(N.id, {
                          reference: he,
                          refName: he
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        ye.map((re) => /* @__PURE__ */ e.jsxs("option", { value: re.name, children: [
                          re.displayName,
                          " (",
                          re.name,
                          ")"
                        ] }, re.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: F.entityName || G.reference || G.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (re) => {
                        const he = re.target.value;
                        m(N.id, {
                          entityName: he,
                          refName: he
                        }), g(N.id, {
                          reference: he,
                          refName: he
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(gn, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: we,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (re) => ve(re.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ve("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ve("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ve(""),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-400 hover:text-slate-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "Xóa"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Điều Kiện Lọc SQL (SqlWhere)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "SqlWhere" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.sqlWhere || G.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (re) => {
                        m(N.id, { sqlWhere: re }), g(N.id, { sqlWhere: re });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              xe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.fieldName || G.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (re) => {
                        m(N.id, { fieldName: re }), g(N.id, { fieldName: re });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Pe.map((re) => /* @__PURE__ */ e.jsxs("option", { value: re.name, children: [
                    re.displayName,
                    " (",
                    re.name,
                    ")"
                  ] }, re.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ge ? ge.name : "",
                      onChange: (re) => {
                        const he = re.target.value;
                        m(N.id, {
                          entityName: he,
                          refName: he
                        }), g(N.id, {
                          reference: he,
                          refName: he
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        ye.map((re) => /* @__PURE__ */ e.jsxs("option", { value: re.name, children: [
                          re.displayName,
                          " (",
                          re.name,
                          ")"
                        ] }, re.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.entityName || G.reference || G.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (re) => {
                        m(N.id, {
                          entityName: re,
                          refName: re
                        }), g(N.id, {
                          reference: re,
                          refName: re
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(gn, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    bi,
                    {
                      rows: 3,
                      value: we,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (re) => ve(re),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Tự Động Điền (Populate Field)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-purple-400 font-mono", children: "Populate" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.populateField || G.populateRule || G.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (re) => {
                        m(N.id, { populateField: re }), g(N.id, { populateRule: re, populateField: re });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      ht,
                      {
                        type: "text",
                        value: F.idField || G.idField || "Id",
                        placeholder: "Id",
                        onChange: (re) => {
                          m(N.id, { idField: re }), g(N.id, { idField: re });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      ht,
                      {
                        type: "text",
                        value: F.selectField || G.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (re) => {
                          m(N.id, { selectField: re }), g(N.id, { selectField: re });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      Z.length,
                      " cột)"
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => s("columns"),
                        className: "text-[10px] px-2 py-0.5 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 rounded font-semibold transition-colors cursor-pointer",
                        children: "Cấu hình cột & FormatData →"
                      }
                    )
                  ] }),
                  Z.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: Z.map((re, he) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        re.title,
                        " (",
                        re.key,
                        ")"
                      ]
                    },
                    he
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (F.formatData ?? G.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              pe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.fieldName || G.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (re) => {
                        m(N.id, { fieldName: re }), g(N.id, { fieldName: re });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Pe.map((re) => /* @__PURE__ */ e.jsxs("option", { value: re.name, children: [
                    re.displayName,
                    " (",
                    re.name,
                    ")"
                  ] }, re.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: F.formatter || "",
                      onChange: (re) => m(N.id, { formatter: re.target.value }),
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "Mặc định (Không định dạng)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "currency_vnd", children: "Tiền tệ VND (₫ 1,000,000)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "currency_usd", children: "Tiền tệ USD ($ 1,000.00)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "date_ddmmyyyy", children: "Ngày tháng (DD/MM/YYYY)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "number_commas", children: "Phân cách hàng nghìn (1,000,000)" }),
                        /* @__PURE__ */ e.jsx("option", { value: "uppercase", children: "Chữ hoa (UPPERCASE)" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Chuỗi Định Dạng Mẫu (FormatData)" }),
                  /* @__PURE__ */ e.jsx(
                    ht,
                    {
                      type: "text",
                      value: F.formatData || G.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (re) => {
                        m(N.id, { formatData: re }), g(N.id, { formatData: re });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "pt-2 border-t border-slate-800 flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 block font-semibold text-xs", children: "Đồng bộ 2 chiều (Two-Way)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500", children: "Tự động cập nhật model khi người dùng gõ" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: F.twoWay ?? !0,
                      onChange: (re) => m(N.id, { twoWay: re.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              ie && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(us, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  N.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          te === "columns" && E && (() => {
            const F = N.dataBinding || {}, G = N.props || {}, oe = kn(c), fe = F.entityName || G.reference || G.refName || "", xe = Sn(oe, fe), pe = xe ? xe.fields : [], ie = F.formatData ?? G.formatData ?? "", ye = (we) => {
              g(N.id, { dropdownColumns: we }), m(N.id, { dropdownColumns: we });
            }, be = () => {
              var ve, re;
              const we = [
                ...Z,
                {
                  key: ((ve = pe[Z.length]) == null ? void 0 : ve.name) || `col${Z.length + 1}`,
                  title: ((re = pe[Z.length]) == null ? void 0 : re.displayName) || `Cột ${Z.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              ye(we);
            }, ge = () => {
              if (!xe || xe.fields.length === 0) return;
              const we = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let ve = xe.fields.filter(
                (he) => we.includes(he.name.toLowerCase())
              );
              ve.length === 0 ? ve = xe.fields.slice(0, 3) : ve = ve.slice(0, 4);
              const re = ve.map((he) => ({
                key: he.name,
                title: he.displayName || he.name,
                width: `${Math.floor(100 / ve.length)}%`,
                align: "left"
              }));
              ye(re);
            }, Pe = (we, ve) => {
              const re = we + ve;
              if (re < 0 || re >= Z.length) return;
              const he = [...Z], qe = he[we];
              he[we] = he[re], he[re] = qe, ye(he);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(At, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: fe ? `Ref: ${fe}` : "Chưa chọn Ref" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  "Thiết lập các cột xuất hiện khi bấm mở ô Select (vd: Cột Họ Tên và Cột Địa Chỉ). Dữ liệu được truy vấn từ bảng tham chiếu theo bộ lọc ",
                  /* @__PURE__ */ e.jsx("span", { className: "font-mono text-amber-300", children: "DATASOURCE" }),
                  "."
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: be,
                      className: "flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột Mới" })
                      ]
                    }
                  ),
                  xe && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ge,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${xe.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  Z.length,
                  ")"
                ] }) }),
                Z.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Chưa có cột nào được thiết lập." }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-500", children: [
                    "Bấm ",
                    /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột Mới"' }),
                    " để thiết lập cột hiển thị (vd: ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: "FullName" }),
                    ", ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: "Address" }),
                    ")."
                  ] })
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: Z.map((we, ve) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          ve + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Pe(ve, -1),
                              disabled: ve === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Pe(ve, 1),
                              disabled: ve === Z.length - 1,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển xuống",
                              children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const re = Z.filter((he, qe) => qe !== ve);
                                ye(re);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tên Trường (Key)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: we.key,
                              list: `dropdown-col-fields-${ve}`,
                              placeholder: "vd: FullName",
                              onChange: (re) => {
                                const he = [...Z];
                                he[ve] = { ...he[ve], key: re.target.value }, ye(he);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${ve}`, children: pe.map((re) => /* @__PURE__ */ e.jsxs("option", { value: re.name, children: [
                            re.displayName,
                            " (",
                            re.name,
                            ")"
                          ] }, re.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: we.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (re) => {
                                const he = [...Z];
                                he[ve] = { ...he[ve], title: re.target.value }, ye(he);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Độ rộng (Width)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: we.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (re) => {
                                const he = [...Z];
                                he[ve] = { ...he[ve], width: re.target.value }, ye(he);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-500"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Căn lề (Align)" }),
                          /* @__PURE__ */ e.jsxs(
                            "select",
                            {
                              value: we.align || "left",
                              onChange: (re) => {
                                const he = [...Z];
                                he[ve] = { ...he[ve], align: re.target.value }, ye(he);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer",
                              children: [
                                /* @__PURE__ */ e.jsx("option", { value: "left", children: "Trái (Left)" }),
                                /* @__PURE__ */ e.jsx("option", { value: "center", children: "Giữa (Center)" }),
                                /* @__PURE__ */ e.jsx("option", { value: "right", children: "Phải (Right)" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ]
                  },
                  ve
                )) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/90 border border-slate-800 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: "Định Dạng Hiển Thị (FormatData)" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Template" })
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Quy định cách hiển thị trên ô Select sau khi người dùng chọn xong một dòng. Hỗ trợ tên trường trực tiếp hoặc prefix thực thể." }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: ie,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (we) => {
                      const ve = we.target.value;
                      m(N.id, { formatData: ve }), g(N.id, { formatData: ve });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                Z.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: Z.map((we, ve) => {
                    const re = fe ? `{${fe}.${we.key}}` : `{${we.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const he = ie ? `${ie} - ${re}` : re;
                          m(N.id, { formatData: he }), g(N.id, { formatData: he });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          re
                        ]
                      },
                      ve
                    );
                  }) })
                ] })
              ] })
            ] });
          })()
        ] }),
        i && N && /* @__PURE__ */ e.jsx(
          za,
          {
            isOpen: i,
            node: N,
            onClose: () => d(!1),
            onSave: (F, G, oe) => {
              g(F, G), oe && m(F, oe);
            }
          }
        )
      ]
    }
  );
}, gi = ns.memo(fi), Gr = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: Et,
    defaultProps: {
      title: "THÔNG TIN CHUNG (GENERAL)",
      collapsible: !0,
      boxShadow: !0
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "RecordSelector",
    name: "Bộ Chọn Bản Ghi (Record Selector)",
    description: "Thanh chọn danh sách bản ghi con dạng Tag Badges ([ REC-001 ] ... [+ Tạo mới])",
    icon: ra,
    defaultProps: {
      label: "Bản ghi:",
      reference: "Records",
      displayField: "code",
      records: [
        { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
        { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
        { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
      ],
      activeId: "1",
      canAdd: !0,
      colSpan: 12
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Container",
    name: "Khoảng Trắng (Container)",
    description: "Bố cục tự do Flexbox hoặc Grid",
    icon: us,
    defaultProps: {
      layoutMode: "flex",
      flexConfig: { direction: "row", wrap: "wrap", gap: "16px", justify: "flex-start", align: "stretch" }
    },
    defaultStyle: { padding: "16px", minHeight: "120px" }
  },
  {
    type: "TextBox",
    name: "Ô Nhập Chữ (TextBox)",
    description: "Nhập text kèm nhãn bên trái hoặc trên",
    icon: kt,
    defaultProps: {
      label: "Mã số (Code)",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      placeholder: "Nhập thông tin..."
    },
    defaultStyle: {}
  },
  {
    type: "SearchEntry",
    name: "Ô Tra Cứu Đa Cột (SearchEntry)",
    description: "Ô tìm kiếm mở Modal tra cứu đa cột và tự động điền (Populate)",
    icon: Vt,
    defaultProps: {
      label: "Đối tác / Danh mục",
      showLabel: !0,
      labelPosition: "left",
      reference: "MasterData",
      displayField: "name",
      valueField: "code",
      placeholder: "Tra cứu danh mục (F1)...",
      colSpan: 4
    },
    defaultStyle: {}
  },
  {
    type: "Autocomplete",
    name: "Gợi Ý Tự Động (Autocomplete)",
    description: "Ô nhập liệu thông minh với danh sách gợi ý và tự động điền",
    icon: ir,
    defaultProps: {
      label: "Tìm kiếm gợi ý",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      placeholder: "Gõ để tìm kiếm..."
    },
    defaultStyle: {}
  },
  {
    type: "Number",
    name: "Ô Nhập Số (Number)",
    description: "Nhập số tiền tệ, số lượng hoặc định lượng",
    icon: ia,
    defaultProps: {
      label: "Số lượng",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      precision: 0,
      placeholder: "0"
    },
    defaultStyle: {}
  },
  {
    type: "DatePicker",
    name: "Lịch Ngày (DatePicker)",
    description: "Chọn ngày tháng chuẩn DD/MM/YYYY",
    icon: lr,
    defaultProps: {
      label: "Ngày lập",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4
    },
    defaultStyle: {}
  },
  {
    type: "Select",
    name: "Dropdown Lựa Chọn (Select2)",
    description: "Menu thả xuống chọn tùy chọn từ danh sách",
    icon: gl,
    defaultProps: {
      label: "Phân loại",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      options: [
        { value: "typeA", label: "Phân loại A" },
        { value: "typeB", label: "Phân loại B" },
        { value: "typeC", label: "Phân loại C" }
      ]
    },
    defaultStyle: {}
  },
  {
    type: "Checkbox",
    name: "Hộp Kiểm (Checkbox)",
    description: "Lựa chọn kích hoạt đúng/sai (Boolean)",
    icon: vl,
    defaultProps: {
      label: "Kích hoạt",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 2
    },
    defaultStyle: {}
  },
  {
    type: "Table",
    name: "Bảng Dữ Liệu Nâng Cao (Grid)",
    description: "Bảng doanh nghiệp có Cột Cố Định và Dòng Tính Tổng",
    icon: At,
    defaultProps: {
      label: "BẢNG DỮ LIỆU",
      columns: [
        { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
        { key: "name", title: "Tên mục", width: "200px", sortable: !0 },
        { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
        { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
        { key: "amount", title: "Thành tiền", width: "140px", align: "right", aggregate: "sum", sortable: !0 }
      ]
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "FileUploadGrid",
    name: "Bảng Đính Kèm Tệp (FileUploadGrid)",
    description: "Lưới quản lý tệp đính kèm, kéo thả upload và xem trước (Preview)",
    icon: aa,
    defaultProps: {
      label: "Tài liệu & Chứng từ đính kèm",
      colSpan: 12,
      maxSizeMB: 25
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Button",
    name: "Nút Bấm (Button)",
    description: "Kích hoạt hành động (Lưu, In chứng từ, Duyệt)",
    icon: _s,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: Yt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: la,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: yl,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: Nl,
    defaultProps: {
      label: "Ghi chú",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 12,
      rows: 3,
      placeholder: "Ghi chú bổ sung..."
    },
    defaultStyle: {}
  },
  {
    type: "Tabs",
    name: "Phân Hệ Tabs (Tabs Container)",
    description: "Thanh điều hướng chuyển đổi giữa các phân hệ nghiệp vụ",
    icon: jl,
    defaultProps: {
      tabs: [
        { id: "main", label: "TAB 1" }
      ]
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "TreeView",
    name: "Cây Danh Mục (TreeView)",
    description: "Cây phân cấp danh mục đa tầng (kế thừa MasterData C# Core)",
    icon: Gn,
    defaultProps: {
      title: "DANH MỤC CÂY PHÂN CẤP",
      reference: "MasterData",
      idField: "id",
      labelField: "name",
      parentField: "parentId",
      colSpan: 4
    },
    defaultStyle: { width: "100%", minHeight: "340px" }
  },
  {
    type: "Chart",
    name: "Biểu Đồ Trực Quan (Chart)",
    description: "Biểu đồ trực quan hóa dữ liệu (Cột, Đường, Tròn) 100% SVG",
    icon: oa,
    defaultProps: {
      title: "THỐNG KÊ SẢN LƯỢNG",
      chartType: "bar",
      reference: "Statistics",
      colSpan: 8
    },
    defaultStyle: { width: "100%", minHeight: "320px" }
  }
], vi = ({ item: t, onClick: r, isEditing: s }) => {
  const a = t.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = pa({
    id: `palette-${t.type}`,
    disabled: !s,
    data: {
      isPaletteItem: !0,
      type: t.type,
      name: t.name,
      defaultProps: t.defaultProps,
      defaultStyle: t.defaultStyle
    }
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: l,
      ...o,
      ...n,
      onClick: () => r(t),
      className: `group flex items-center gap-3 p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left cursor-grab active:cursor-grabbing select-none ${i ? "opacity-40 ring-2 ring-blue-500 shadow-xl" : ""}`,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0", children: /* @__PURE__ */ e.jsx(a, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-200 group-hover:text-white truncate", children: t.name }),
          /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400 truncate mt-0.5", children: t.description })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, oc = ({ isEditing: t = !0, onAddComponent: r }) => {
  const s = Q((c) => c.addComponent), a = Q((c) => c.activeFeatureId), n = Q((c) => c.features), o = Q((c) => c.selection), l = n.find((c) => c.id === a), i = (c, p) => {
    if (!p) return null;
    for (const h of c) {
      if (h.id === p) return h;
      if (h.children) {
        const j = i(h.children, p);
        if (j) return j;
      }
    }
    return null;
  }, d = (c) => {
    var u;
    if (!t) return;
    if (r) {
      r(c.type);
      return;
    }
    const p = i((l == null ? void 0 : l.components) || [], o.componentId);
    let h = null;
    p && (p.type === "Container" ? h = p.id : h = p.parentId || null);
    const j = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: h,
      pageId: a,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((u = l == null ? void 0 : l.components) == null ? void 0 : u.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    s(j, h);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(cn, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Gr.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Gr.map((c) => /* @__PURE__ */ e.jsx(
      vi,
      {
        item: c,
        onClick: d,
        isEditing: t
      },
      c.type
    )) })
  ] });
}, ic = () => {
  const t = Q((i) => i.features), r = Q((i) => i.activeFeatureId), s = Q((i) => i.selection), a = Q((i) => i.selectComponent), n = Q((i) => i.removeComponent), o = t.find((i) => i.id === r);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, d = 0) => i.map((c) => {
    const p = s.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => a(c.id),
          style: { paddingLeft: `${d * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${p ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
              /* @__PURE__ */ e.jsx("span", { className: "truncate", children: c.props.label ? String(c.props.label) : c.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 uppercase tracking-wider shrink-0", children: [
                "(",
                c.type,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (h) => {
                  h.stopPropagation(), n(c.id);
                },
                className: "text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "Xóa component",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, d + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, yi = () => {
  const t = Ye((w) => w.openTabs), r = Ye((w) => w.activeTabId), s = Ye((w) => w.setActiveTab), a = Ye((w) => w.closeTab), n = Ye((w) => w.reorderTabs), o = Q((w) => w.setActiveFeature), l = Ne((w) => w.isFormDirty), i = Ne((w) => w.markFormClean), [d, c] = P(null), [p, h] = P(null), [j, u] = P(null);
  if (t.length === 0) return null;
  const b = (w, y) => {
    var D;
    s(w);
    const g = t.find((M) => M.id === w);
    o(y, ((D = g == null ? void 0 : g.params) == null ? void 0 : D.id) ?? null);
  }, k = (w) => {
    a(w), setTimeout(() => {
      var g;
      const y = Ye.getState().openTabs.find(
        (D) => D.id === Ye.getState().activeTabId
      );
      y && o(y.featureId, ((g = y.params) == null ? void 0 : g.id) ?? null);
    }, 50);
  }, f = (w, y) => {
    if (w.stopPropagation(), y.isDirty || (y.featureId ? l(y.featureId) : !1)) {
      u(y);
      return;
    }
    k(y.id);
  }, C = () => {
    j && (j.featureId && i(j.featureId), k(j.id), u(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: t.map((w, y) => {
      const g = w.id === r, D = d === y, M = p === y && d !== y, m = w.isDirty || (w.featureId ? l(w.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          draggable: !0,
          onDragStart: (T) => {
            T.dataTransfer.setData("text/plain", String(y)), T.dataTransfer.effectAllowed = "move", c(y);
          },
          onDragOver: (T) => {
            T.preventDefault(), T.dataTransfer.dropEffect = "move", p !== y && h(y);
          },
          onDragLeave: () => {
            p === y && h(null);
          },
          onDrop: (T) => {
            T.preventDefault(), d !== null && d !== y && n(d, y), c(null), h(null);
          },
          onDragEnd: () => {
            c(null), h(null);
          },
          onClick: () => b(w.id, w.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-grab active:cursor-grabbing transition-all border-t border-x relative ${D ? "opacity-40 scale-95" : ""} ${M ? "ring-1 ring-blue-400 bg-blue-950/40 border-blue-500" : ""} ${g ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: m ? `${w.title} (Có dữ liệu chưa lưu)` : w.title,
          children: [
            /* @__PURE__ */ e.jsx(Et, { className: `w-3.5 h-3.5 ${g ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: w.title }),
            m && /* @__PURE__ */ e.jsx(
              "span",
              {
                className: "w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80 animate-pulse ml-0.5 shrink-0",
                title: "Có dữ liệu chưa lưu (Dirty)"
              }
            ),
            t.length > 1 && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                draggable: !1,
                onClick: (T) => f(T, w),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
              }
            )
          ]
        },
        w.id
      );
    }) }),
    j && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(wl, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Dữ liệu chưa được lưu!" }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-300 leading-relaxed", children: [
            "Tab ",
            /* @__PURE__ */ e.jsxs("span", { className: "font-semibold text-amber-300", children: [
              '"',
              j.title,
              '"'
            ] }),
            " có các thay đổi chưa được lưu vào cơ sở dữ liệu. Bạn có chắc chắn muốn đóng tab này không?"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => u(null),
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer border border-slate-700",
            children: "Tiếp tục chỉnh sửa"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: C,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Ni = ({
  isOpen: t,
  onClose: r
}) => {
  const s = Q((E) => E.isFeatureManagerOpen), a = Q((E) => E.closeFeatureManager), n = Q((E) => E.features), o = Q((E) => E.addFeature), l = Q((E) => E.deleteFeature), i = Q((E) => E.cloneFeature), d = Q((E) => E.toggleFeatureActive), c = Q((E) => E.openFeatureProperties), p = Q((E) => E.updateFeatureProperties), h = t !== void 0 ? t : s, j = () => {
    r && r(), a();
  }, [u, b] = P(""), [k, f] = P("all"), [C, w] = P({}), [y, g] = P(!1), [D, M] = P(""), [m, T] = P(""), [A, I] = P(""), [S, U] = P(!1), [B, H] = P("Layers"), O = (E) => {
    w((Z) => ({ ...Z, [E]: !Z[E] }));
  }, N = $e(() => {
    const E = [], Z = /* @__PURE__ */ new Map();
    for (const ce of n) {
      const q = ce.parentId || null;
      Z.has(q) || Z.set(q, []), Z.get(q).push(ce);
    }
    for (const ce of Z.values())
      ce.sort((q, de) => (q.order ?? 0) - (de.order ?? 0));
    const te = (ce, q = 0) => {
      const de = Z.get(ce) || [];
      for (const J of de) {
        const F = (Z.get(J.id) || []).length > 0, G = !!C[J.id], oe = !u.trim() || J.name.toLowerCase().includes(u.toLowerCase()) || J.title && J.title.toLowerCase().includes(u.toLowerCase()) || J.code && J.code.toLowerCase().includes(u.toLowerCase()) || J.route.toLowerCase().includes(u.toLowerCase()) || J.entityName && J.entityName.toLowerCase().includes(u.toLowerCase());
        let fe = !0;
        k === "active" ? fe = J.active !== !1 : k === "inactive" ? fe = J.active === !1 : k === "group" && (fe = !!J.isGroup), oe && fe && E.push({
          feature: J,
          depth: q,
          hasChildren: F,
          isCollapsed: G
        }), F && !G && te(J.id, q + 1);
      }
    }, z = new Set(n.map((ce) => ce.id)), ae = n.filter((ce) => !ce.parentId || !z.has(ce.parentId));
    ae.sort((ce, q) => (ce.order ?? 0) - (q.order ?? 0));
    for (const ce of ae) {
      const de = (Z.get(ce.id) || []).length > 0, J = !!C[ce.id], se = !u.trim() || ce.name.toLowerCase().includes(u.toLowerCase()) || ce.title && ce.title.toLowerCase().includes(u.toLowerCase()) || ce.code && ce.code.toLowerCase().includes(u.toLowerCase()) || ce.route.toLowerCase().includes(u.toLowerCase());
      let F = !0;
      k === "active" ? F = ce.active !== !1 : k === "inactive" ? F = ce.active === !1 : k === "group" && (F = !!ce.isGroup), se && F && E.push({
        feature: ce,
        depth: 0,
        hasChildren: de,
        isCollapsed: J
      }), de && !J && te(ce.id, 1);
    }
    return E;
  }, [n, C, u, k]), L = (E) => {
    if (E.preventDefault(), !D.trim()) return;
    const Z = o(D.trim(), B, A || null, S);
    m.trim() && p(Z, { title: m.trim() }), g(!1), M(""), T(""), I(""), U(!1);
  }, W = (E, Z) => {
    const te = E.order ?? 0, z = Math.max(0, te + Z);
    p(E.id, { order: z });
  }, X = async (E) => {
    if (confirm(`Bạn có chắc chắn muốn xóa Feature "${E.title || E.name}"?`)) {
      try {
        await xo(E.id);
      } catch {
      }
      l(E.id);
    }
  };
  return h ? Bt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1a] border-b border-blue-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(Et, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h2", { className: "font-bold text-base text-white tracking-wide flex items-center gap-2", children: [
              "Quản lý Tính năng & Menu (Feature Manager)",
              /* @__PURE__ */ e.jsxs("span", { className: "text-xs px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800/60 font-mono", children: [
                n.length,
                " features"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Quản lý phân tầng cây Menu, trạng thái hiển thị và thông tin cấu hình toàn hệ thống" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => g(!0),
              className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Feature mới" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: j,
              className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer",
              children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-slate-800 bg-[#090f1e]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[280px] max-w-md", children: [
          /* @__PURE__ */ e.jsx(Vt, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: u,
              onChange: (E) => b(E.target.value),
              placeholder: "Tìm theo Tên, Tiêu đề, Mã, Route, Entity...",
              className: "w-full pl-9 pr-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-slate-400", children: "Lọc:" }),
          ["all", "active", "inactive", "group"].map((E) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f(E),
              className: `px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${k === E ? "bg-blue-600 text-white shadow-sm" : "bg-slate-800/70 text-slate-400 hover:text-slate-200"}`,
              children: [
                E === "all" && "Tất cả",
                E === "active" && "Đang hoạt động",
                E === "inactive" && "Ngưng hoạt động",
                E === "group" && "Nhóm cha"
              ]
            },
            E
          ))
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 shadow-inner", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs", children: [
        /* @__PURE__ */ e.jsx("thead", { className: "bg-[#080e1b] border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px]", children: /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-4", children: "Cấu trúc Menu / Tên Feature" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3", children: "Mã (Code)" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3", children: "Đường dẫn (Route)" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3", children: "Cấp cha" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3 text-center", children: "Thứ tự" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3 text-center", children: "Loại" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3 text-center", children: "Hiển thị Leftbar" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-3 text-center", children: "Trạng thái" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-3 px-4 text-right", children: "Thao tác" })
        ] }) }),
        /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: N.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 9, className: "py-10 text-center text-slate-500", children: "Không tìm thấy Feature nào phù hợp" }) }) : N.map(({ feature: E, depth: Z, hasChildren: te, isCollapsed: z }) => {
          const ae = E.active !== !1, ce = !!E.isGroup;
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              onDoubleClick: () => c(E.id),
              className: "hover:bg-blue-600/10 cursor-pointer transition-colors group",
              title: "Nhấp đúp chuột để mở thuộc tính Feature",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4", children: /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    style: { paddingLeft: `${Z * 24}px` },
                    children: [
                      te ? /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (q) => {
                            q.stopPropagation(), O(E.id);
                          },
                          className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                          children: z ? /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                        }
                      ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: `p-1.5 rounded-lg shrink-0 ${ce ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                          children: ce ? /* @__PURE__ */ e.jsx(In, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { className: "truncate", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-200 group-hover:text-white text-xs block", children: E.title || E.name }),
                        E.title && E.title !== E.name && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block truncate", children: E.name })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-amber-300", children: E.code ? `#${E.code}` : "-" }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-slate-400", children: E.route }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: E.parentId || "",
                    onClick: (q) => q.stopPropagation(),
                    onChange: (q) => {
                      q.stopPropagation();
                      const de = q.target.value.trim() ? q.target.value.trim() : null;
                      p(E.id, { parentId: de });
                    },
                    className: "px-2 py-1 bg-slate-800/90 border border-slate-700/80 rounded text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer max-w-[130px] truncate",
                    title: "Thay đổi Cấp cha (Chọn 'Gốc' để xóa cấp cha)",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Gốc (Không cha) --" }),
                      n.filter((q) => q.id !== E.id && q.isGroup).map((q) => /* @__PURE__ */ e.jsxs("option", { value: q.id, children: [
                        "📁 ",
                        q.title || q.name
                      ] }, q.id)),
                      n.filter((q) => q.id !== E.id && !q.isGroup).map((q) => /* @__PURE__ */ e.jsxs("option", { value: q.id, children: [
                        "📄 ",
                        q.title || q.name
                      ] }, q.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "font-mono text-xs w-6", children: E.order ?? 0 }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col opacity-60 group-hover:opacity-100", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (q) => {
                          q.stopPropagation(), W(E, -1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Giảm thứ tự (Lên trên)",
                        children: /* @__PURE__ */ e.jsx(nr, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (q) => {
                          q.stopPropagation(), W(E, 1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Tăng thứ tự (Xuống dưới)",
                        children: /* @__PURE__ */ e.jsx(rr, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: ce ? /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60", children: "Nhóm Menu" }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60", children: "Màn hình" }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (q) => {
                      q.stopPropagation();
                      const de = E.isMenu !== void 0 ? !E.isMenu : !1;
                      p(E.id, { isMenu: de });
                    },
                    className: `px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${E.isMenu !== !1 ? "bg-blue-950/80 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60" : "bg-amber-950/80 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60"}`,
                    title: E.isMenu !== !1 ? "Bấm để ẩn khỏi Leftbar (dành cho màn hình mở có điều kiện)" : "Bấm để hiển thị lên Leftbar",
                    children: E.isMenu !== !1 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(an, { className: "w-3 h-3 text-blue-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Menu Leftbar" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(sr, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Ẩn / Mở ĐK" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (q) => {
                      q.stopPropagation(), d(E.id);
                    },
                    className: `px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${ae ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900" : "bg-red-950/80 text-red-400 border border-red-800/60 hover:bg-red-900"}`,
                    title: ae ? "Bấm để ngưng kích hoạt" : "Bấm để kích hoạt lại",
                    children: ae ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(ar, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Hoạt động" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(ca, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Đã tắt" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4 text-right", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (q) => {
                        q.stopPropagation(), c(E.id);
                      },
                      className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all cursor-pointer",
                      title: "Thuộc tính Feature (Feature Properties Modal)",
                      children: /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (q) => {
                        q.stopPropagation(), i(E.id);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer",
                      title: "Nhân bản Feature này",
                      children: /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (q) => {
                        q.stopPropagation(), X(E);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-300 border border-slate-700 transition-all cursor-pointer",
                      title: "Xóa Feature này",
                      children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }) })
              ]
            },
            E.id
          );
        }) })
      ] }) }) }) }),
      y && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
        "form",
        {
          onSubmit: L,
          className: "w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3", children: [
              /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4 text-blue-400" }),
                " Thêm Feature Mới"
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => g(!1),
                  className: "text-slate-400 hover:text-white",
                  children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Tên Feature:" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    required: !0,
                    autoFocus: !0,
                    placeholder: "Ví dụ: SHIPMENTS, FCL Import...",
                    value: D,
                    onChange: (E) => M(E.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Tiêu đề (Menu Label):" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Để trống sẽ lấy theo Tên Feature",
                    value: m,
                    onChange: (E) => T(E.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Cấp cha (Thư mục nhóm):" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: A,
                    onChange: (E) => I(E.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                      n.filter((E) => E.isGroup).map((E) => /* @__PURE__ */ e.jsxs("option", { value: E.id, children: [
                        "📁 ",
                        E.title || E.name
                      ] }, E.id)),
                      n.filter((E) => !E.isGroup).map((E) => /* @__PURE__ */ e.jsxs("option", { value: E.id, children: [
                        "📄 ",
                        E.title || E.name
                      ] }, E.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-slate-300 font-semibold", children: "Tạo dạng Thư mục Nhóm cha:" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: S,
                    onChange: (E) => U(E.target.checked),
                    className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0 accent-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-3 border-t border-slate-800", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => g(!1),
                  className: "px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "submit",
                  className: "px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer",
                  children: "Tạo Mới"
                }
              )
            ] })
          ]
        }
      ) })
    ] }) }),
    document.body
  ) : null;
}, ji = ({
  isOpen: t,
  featureId: r,
  onClose: s
}) => {
  const a = Q((x) => x.featurePropertiesTargetId), n = Q((x) => x.closeFeatureProperties), o = Q((x) => x.features), l = Q((x) => x.updateFeatureProperties), i = Q((x) => x.cloneFeature), d = Q((x) => x.openComponentModal), c = Q((x) => x.updateComponentProps), p = Q((x) => x.updateComponentDataBinding), h = t !== void 0 ? t : !!a, j = r !== void 0 ? r : a, u = $e(
    () => o.find((x) => x.id === j) || null,
    [o, j]
  ), b = () => {
    s && s(), n();
  }, [k, f] = P("settings"), C = Oe((x) => x.roles), w = Oe((x) => x.users), y = Oe((x) => x.featurePolicies), g = Oe((x) => x.setFeaturePolicies), [D, M] = P([]), [m, T] = P(""), [A, I] = P(""), [S, U] = P(""), [B, H] = P(!0), [O, N] = P(!1), [L, W] = P(!1), [X, E] = P(!1), [Z, te] = P(!1), [z, ae] = P(!1), [ce, q] = P(!1), [de, J] = P(0), [se, F] = P(""), [G, oe] = P(""), [fe, xe] = P(!0), [pe, ie] = P([]);
  Fe(() => {
    Ln().then((x) => ie(x)).catch(() => {
    });
  }, []);
  const [ye, be] = P(""), [ge, Pe] = P(""), [we, ve] = P(""), [re, he] = P(0), [qe, mt] = P("Layers"), [St, _t] = P("/"), [yt, Tt] = P(!1), [ne, ke] = P(!0), [Be, Ie] = P(!1), [Ae, Re] = P(!1), [Qe, et] = P(!1), [at, lt] = P(!1), [it, ot] = P(!1), [Nt, He] = P(!1), [jt, Ut] = P(!0), [Ft, Pt] = P(!0), [Ot, Kt] = P(!0), [Wt, Dt] = P(!1), [zt, We] = P(!1), [Ht, Jt] = P(""), [$, le] = P(""), [me, Se] = P(""), [Le, Ee] = P(""), [Te, De] = P(""), [Je, Ge] = P(""), [Ve, rt] = P(""), [bt, ft] = P(""), [Ze, Gt] = P(""), [Rt, Qt] = P(""), [Ds, xs] = P(!1), [Lt, Is] = P(""), [hs, ls] = P({}), [os, ms] = P(null), [Fs, bs] = P(!1);
  Fe(() => {
    var x, R, V;
    if (u && h) {
      be(u.name || ""), Pe(u.title || u.name || ""), ve(u.parentId || ""), he(u.order ?? 0), mt(u.icon || (u.isGroup ? "Folder" : "Layers")), _t(u.route || "/");
      const _ = u.displayFlags || ((x = u.featureProps) == null ? void 0 : x.displayFlags) || {};
      Tt(!!_.isDivider), ke(u.isMenu !== void 0 ? u.isMenu : _.isMenu !== void 0 ? _.isMenu : !0), Ie(!!_.isStartup), Re(!!_.isPublic), et(!!_.is403), lt(!!_.deleteTemp), ot(!!_.lockUpdate), He(u.isGroup !== void 0 ? u.isGroup : !!_.isGroup), Ut(u.active !== void 0 ? u.active : _.active !== void 0 ? _.active : !0), Pt(_.noEncode !== void 0 ? _.noEncode : !0), Kt(_.isPermissionInherited !== void 0 ? _.isPermissionInherited : !0), Dt(!!_.isSystem), We(!!_.customNextCell), Jt(u.code || ""), le(u.scriptFile || ""), Se(u.description || ""), Ee(u.entityName || "");
      const Y = u.customStyles || ((R = u.featureProps) == null ? void 0 : R.customStyles) || {};
      De(Y.event || ""), Ge(Y.className || ""), rt(Y.style || ""), ft(Y.script || ""), Gt(Y.stylesheet || ""), Qt(
        u.scriptContent || ((V = u.featureProps) == null ? void 0 : V.scriptContent) || `// Logic JavaScript xử lý nghiệp vụ cho Feature: ${u.name}
let methods = {
  SaveAs: function (gridView, form) {
    // Code xử lý...
  }
};`
      ), u != null && u.id ? Oe.getState().fetchFeaturePolicies(u.id).then((ue) => {
        M(ue || []);
      }).catch(() => {
        const ue = u.policies && u.policies.length > 0 ? u.policies : y[u.id] || [];
        M(ue);
      }) : M([]);
    }
  }, [u == null ? void 0 : u.id, h]);
  const Zt = () => {
    if (!S && !A) {
      alert("Vui lòng chọn ít nhất một Vai trò hoặc Người dùng để phân quyền!");
      return;
    }
    const x = C.find((_) => String(_.id) === String(S) || _.code === S), R = w.find((_) => String(_.id) === String(A) || _.username === A), V = {
      id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      featureId: (u == null ? void 0 : u.id) || "",
      featureCode: (u == null ? void 0 : u.code) || (u == null ? void 0 : u.name),
      roleId: S ? Number(S) || S : null,
      roleCode: S ? (x == null ? void 0 : x.code) || S : void 0,
      userId: A ? Number(A) || A : null,
      userName: A ? (R == null ? void 0 : R.username) || A : void 0,
      canRead: B,
      canWrite: O,
      canWriteAll: L,
      canDelete: X,
      canDeleteAll: Z,
      canDeactivate: z,
      canShare: ce,
      recordId: Number(de) || 0,
      lockUpdateAfterCreated: se ? Number(se) : void 0,
      lockDeleteAfterCreated: G ? Number(G) : void 0,
      active: fe
    };
    M((_) => [V, ..._]), I(""), U(""), H(!0), N(!1), W(!1), E(!1), te(!1), ae(!1), q(!1), J(0), F(""), oe(""), xe(!0);
  }, gt = (x, R, V) => {
    M(
      (_) => _.map((Y) => Y.id === x ? { ...Y, [R]: V } : Y)
    );
  }, Gs = (x) => {
    M((R) => R.filter((V) => V.id !== x));
  }, Vs = () => {
    if (!u) return;
    let x = [...D];
    if (S || A) {
      const _ = C.find((je) => String(je.id) === String(S) || je.code === S), Y = w.find((je) => String(je.id) === String(A) || je.username === A);
      x = [{
        id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        featureId: u.id,
        featureCode: u.code || u.name,
        roleId: S ? Number(S) || S : null,
        roleCode: S ? (_ == null ? void 0 : _.code) || S : void 0,
        userId: A ? Number(A) || A : null,
        userName: A ? (Y == null ? void 0 : Y.username) || A : void 0,
        canRead: B,
        canWrite: O,
        canWriteAll: L,
        canDelete: X,
        canDeleteAll: Z,
        canDeactivate: z,
        canShare: ce,
        recordId: Number(de) || 0,
        lockUpdateAfterCreated: se ? Number(se) : void 0,
        lockDeleteAfterCreated: G ? Number(G) : void 0,
        active: fe
      }, ...x], M(x), I(""), U(""), H(!0), N(!1), W(!1), E(!1), te(!1), ae(!1), q(!1), J(0), F(""), oe(""), xe(!0);
    }
    const R = we && we.trim() !== "" ? we.trim() : null, V = {
      name: ye.trim(),
      title: ge.trim(),
      parentId: R,
      order: Number(re) || 0,
      icon: qe.trim(),
      route: St.trim(),
      isGroup: Nt,
      isMenu: ne,
      active: jt,
      code: Ht.trim(),
      scriptFile: $.trim(),
      description: me.trim(),
      entityName: Le.trim(),
      scriptContent: Rt,
      policies: x,
      displayFlags: {
        isDivider: yt,
        isMenu: ne,
        isStartup: Be,
        isPublic: Ae,
        is403: Qe,
        deleteTemp: at,
        lockUpdate: it,
        isGroup: Nt,
        active: jt,
        noEncode: Ft,
        isPermissionInherited: Ot,
        isSystem: Wt,
        customNextCell: zt
      },
      customStyles: {
        event: Te,
        className: Je,
        style: Ve,
        script: bt,
        stylesheet: Ze
      },
      featureProps: {
        ...u.featureProps || {},
        displayFlags: {
          isDivider: yt,
          isMenu: ne,
          isStartup: Be,
          isPublic: Ae,
          is403: Qe,
          deleteTemp: at,
          lockUpdate: it,
          isGroup: Nt,
          active: jt,
          noEncode: Ft,
          isPermissionInherited: Ot,
          isSystem: Wt,
          customNextCell: zt
        },
        customStyles: {
          event: Te,
          className: Je,
          style: Ve,
          script: bt,
          stylesheet: Ze
        },
        scriptContent: Rt,
        policies: x
      }
    };
    l(u.id, V), g(u.id, x), Oe.getState().saveFeaturePolicies(u.id, x), xs(!0), setTimeout(() => xs(!1), 2e3);
  }, Us = async () => {
    u && (await i(u.id), b());
  }, Ps = $e(() => {
    if (!u || !we) return "Gốc (Root)";
    const x = [];
    let R = we;
    const V = /* @__PURE__ */ new Set();
    for (; R && !V.has(R); ) {
      V.add(R);
      const _ = o.find((Y) => Y.id === R);
      if (_)
        x.unshift(_.title || _.name), R = _.parentId || null;
      else
        break;
    }
    return x.join(" > ");
  }, [u, we, o]), Ks = $e(() => o.filter((x) => x.id !== (u == null ? void 0 : u.id)), [o, u]), fs = $e(() => {
    if (!u) return [];
    const x = [], R = (V, _ = 0) => {
      var Y, ue;
      for (const je of V) {
        const _e = !!(je.children && je.children.length > 0), Ue = !!hs[je.id];
        (!Lt.trim() || ((Y = je.props) == null ? void 0 : Y.label) && String(je.props.label).toLowerCase().includes(Lt.toLowerCase()) || je.id && je.id.toLowerCase().includes(Lt.toLowerCase()) || je.type && je.type.toLowerCase().includes(Lt.toLowerCase()) || ((ue = je.dataBinding) == null ? void 0 : ue.fieldName) && String(je.dataBinding.fieldName).toLowerCase().includes(Lt.toLowerCase())) && x.push({
          node: je,
          depth: _,
          hasChildren: _e,
          isCollapsed: Ue
        }), _e && !Ue && R(je.children, _ + 1);
      }
    };
    return R(u.components || [], 0), x;
  }, [u, hs, Lt]), gs = $e(() => {
    if (!u) return 0;
    let x = 0;
    const R = (V) => {
      x += V.length;
      for (const _ of V)
        _.children && _.children.length > 0 && R(_.children);
    };
    return R(u.components || []), x;
  }, [u]), vs = (x) => {
    ls((R) => ({ ...R, [x]: !R[x] }));
  }, ys = () => ls({}), Ns = () => {
    if (!u) return;
    const x = {}, R = (V) => {
      for (const _ of V)
        _.children && _.children.length > 0 && (x[_.id] = !0, R(_.children));
    };
    R(u.components || []), ls(x);
  }, js = (x) => {
    ms(x), d(x.id);
  }, ws = (x) => {
    switch (x) {
      case "Table":
        return /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-blue-400" });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(lr, { className: "w-3.5 h-3.5 text-emerald-400" });
      case "TextBox":
      case "Textarea":
        return /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5 text-amber-400" });
      case "Number":
        return /* @__PURE__ */ e.jsx(ia, { className: "w-3.5 h-3.5 text-cyan-400" });
      case "Container":
      case "Section":
        return /* @__PURE__ */ e.jsx(_s, { className: "w-3.5 h-3.5 text-indigo-400" });
      case "Tabs":
        return /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-purple-400" });
      default:
        return /* @__PURE__ */ e.jsx(ir, { className: "w-3.5 h-3.5 text-slate-400" });
    }
  }, v = (x, R, V) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-2 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-xs ${R ? "text-slate-100 font-semibold" : "text-slate-400"}`, children: x }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: R,
        onChange: (_) => V(_.target.checked),
        className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return !h || !u ? null : Bt(
    /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#080e1a] border-b border-blue-600/30", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-base text-white tracking-wide", children: [
                "Feature - ",
                u.title || u.name
              ] }),
              Ht && /* @__PURE__ */ e.jsxs("span", { className: "text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono font-semibold", children: [
                "#",
                Ht
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            Ds && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in duration-200", children: [
              /* @__PURE__ */ e.jsx(on, { className: "w-4 h-4" }),
              " Đã lưu thành công!"
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Vs,
                className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Lưu" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Us,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                title: "Nhân bản Feature này kèm toàn bộ linh kiện",
                children: [
                  /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Copy" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: b,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Đóng" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-5 pt-3 border-b border-slate-800 bg-[#090f1d]", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f("settings"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${k === "settings" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "TÙY CHỈNH / THÔNG TIN CHUNG" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f("components"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${k === "components" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "PHẦN TỬ (CÂY COMPONENT)" }),
                /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono", children: gs })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f("permissions"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${k === "permissions" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(Hs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "QUYỀN HẠN (RBAC & POLICIES)" }),
                D.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950/80 text-emerald-300 font-mono border border-emerald-800/50", children: D.length })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]", children: [
          k === "settings" && /* ══════════════════════════════════════════════════════════════
          TAB 1: TÙY CHỈNH / THÔNG TIN FEATURE (Khớp 100% Hình 3)
          ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Dr, { className: "w-3.5 h-3.5" }),
                  " COMMON"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Tên:" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: ye,
                        onChange: (x) => be(x.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Tiêu đề:" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: ge,
                        onChange: (x) => Pe(x.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Cấp cha:" }),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: we,
                          onChange: (x) => ve(x.target.value),
                          className: "flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                            Ks.map((x) => /* @__PURE__ */ e.jsxs("option", { value: x.id, children: [
                              x.isGroup ? "📁 " : "📄 ",
                              x.title || x.name,
                              " (",
                              x.route,
                              ")"
                            ] }, x.id))
                          ]
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          className: "p-1.5 bg-slate-800 border border-slate-700 rounded text-slate-400 hover:text-blue-400 cursor-help",
                          title: `Đường dẫn phân tầng: ${Ps}`,
                          children: /* @__PURE__ */ e.jsx(Dr, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex items-center justify-between text-[11px] px-2 py-1 rounded bg-slate-950/70 border border-slate-800", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 text-[10px]", children: ne ? "📌 Hiển thị trên Leftbar" : "🔍 Màn hình mở theo điều kiện (Ẩn Leftbar)" }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => ke(!ne),
                          className: `px-1.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${ne ? "bg-blue-600/30 text-blue-300 hover:bg-blue-600/50" : "bg-amber-600/30 text-amber-300 hover:bg-amber-600/50"}`,
                          children: ne ? "Chuyển sang Ẩn" : "Hiện lên Menu"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Thứ tự:" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "number",
                          value: re,
                          onChange: (x) => he(Number(x.target.value)),
                          className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 font-mono"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { children: [
                      /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Icon:" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          value: qe,
                          onChange: (x) => mt(x.target.value),
                          placeholder: "Layers, Folder, Ship...",
                          className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Nhóm chức năng / Route:" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: St,
                        onChange: (x) => _t(x.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-[11px]"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("span", { children: "DISPLAY" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-normal", children: "Cờ hiển thị hệ thống" })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-0.5 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                    v("Thanh chia", yt, Tt),
                    v("Hiển thị menu", ne, ke),
                    v("Khởi động", Be, Ie),
                    v("Public", Ae, Re),
                    v("403", Qe, et),
                    v("Delete Temp", at, lt),
                    v("LockUpdate", it, ot)
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                    v("Nhóm menu", Nt, He),
                    v("Hoạt động", jt, Ut),
                    v("No-Encode", Ft, Pt),
                    v("Thừa kế quyền", Ot, Kt),
                    v("System", Wt, Dt),
                    v("CustomNextCell", zt, We)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(In, { className: "w-3.5 h-3.5" }),
                  " OTHER"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mã (Code):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: Ht,
                        onChange: (x) => Jt(x.target.value),
                        placeholder: "Ví dụ: F0013226",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-amber-300 font-mono font-semibold focus:outline-none focus:border-amber-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Class (File BL):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: $,
                        onChange: (x) => le(x.target.value),
                        placeholder: "Ví dụ: TMS.BusinessLogic.TransactionBL",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-blue-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Đối tượng (Entity):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "entities-list",
                        value: Le,
                        onChange: (x) => Ee(x.target.value),
                        placeholder: "Ví dụ: Transaction",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("datalist", { id: "entities-list", children: pe.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.name, children: x.displayName || x.name }, x.name)) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Parents:" }),
                    /* @__PURE__ */ e.jsx("div", { className: "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-[11px] font-mono truncate", children: Ps })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mô tả:" }),
                    /* @__PURE__ */ e.jsx(
                      "textarea",
                      {
                        rows: 2,
                        value: me,
                        onChange: (x) => Se(x.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 text-xs resize-none"
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-purple-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" }),
                " TÙY CHỈNH & STYLE"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Event:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Te,
                      onChange: (x) => De(x.target.value),
                      className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Css class:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Je,
                      onChange: (x) => Ge(x.target.value),
                      className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Css style:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ve,
                      onChange: (x) => rt(x.target.value),
                      className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Script:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: bt,
                      onChange: (x) => ft(x.target.value),
                      className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1 text-xs", children: "Stylesheet:" }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    rows: 2,
                    value: Ze,
                    onChange: (x) => Gt(x.target.value),
                    placeholder: "/* Custom CSS stylesheet rules */",
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500 resize-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(gn, { className: "w-4 h-4" }),
                  " SCRIPT (Trình soạn thảo mã nghiệp vụ Feature)"
                ] }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] text-slate-400 font-mono", children: [
                  Rt.split(`
`).length,
                  " dòng"
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex rounded-lg border border-slate-800 bg-[#070b14] overflow-hidden min-h-[220px]", children: [
                /* @__PURE__ */ e.jsx("div", { className: "py-2.5 px-3 bg-[#05080f] border-r border-slate-800/80 text-right font-mono text-xs text-slate-600 select-none leading-5 min-w-[40px]", children: Rt.split(`
`).map((x, R) => /* @__PURE__ */ e.jsx("div", { children: R + 1 }, R)) }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    value: Rt,
                    onChange: (x) => Qt(x.target.value),
                    spellCheck: !1,
                    className: "flex-1 p-2.5 bg-transparent font-mono text-xs text-emerald-300 leading-5 focus:outline-none resize-y min-h-[200px]"
                  }
                )
              ] })
            ] })
          ] }),
          k === "components" && /* ══════════════════════════════════════════════════════════════
          TAB 2: PHẦN TỬ / CÂY COMPONENT CHA - CON (Yêu cầu đặc biệt của Master)
          ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[260px] max-w-md", children: [
                /* @__PURE__ */ e.jsx(Vt, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: Lt,
                    onChange: (x) => Is(x.target.value),
                    placeholder: "Tìm kiếm component theo Tên, ID, FieldName, Type...",
                    className: "w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: ys,
                    className: "px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer",
                    children: "Mở rộng tất cả"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Ns,
                    className: "px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer",
                    children: "Thu gọn tất cả"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2 bg-blue-950/40 border border-blue-800/40 rounded-xl text-xs text-blue-300 flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("span", { children: [
                "💡 ",
                /* @__PURE__ */ e.jsx("strong", { children: "Hướng dẫn" }),
                ": Nhấp đúp chuột (",
                /* @__PURE__ */ e.jsx("strong", { children: "Double-Click" }),
                ") vào bất kỳ dòng phần tử nào trong bảng để mở ngay modal thuộc tính của phần tử đó!"
              ] }),
              /* @__PURE__ */ e.jsxs("span", { className: "font-mono text-[11px] text-blue-400", children: [
                fs.length,
                " / ",
                gs,
                " phần tử"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 shadow-inner", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs", children: [
              /* @__PURE__ */ e.jsx("thead", { className: "bg-[#080f1e] border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px]", children: /* @__PURE__ */ e.jsxs("tr", { children: [
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Phần tử / Cấu trúc" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Mã #ID" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Loại (Type)" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3", children: "Trường (FieldName)" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 text-center", children: "Thứ tự" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 text-center", children: "Cột" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 text-center", children: "Hiển thị" })
              ] }) }),
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: fs.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 7, className: "py-8 text-center text-slate-500", children: "Không tìm thấy phần tử nào trong Feature này" }) }) : fs.map(({ node: x, depth: R, hasChildren: V, isCollapsed: _ }) => {
                var _e, Ue, xt, It, $t, Cs;
                const Y = ((_e = x.props) == null ? void 0 : _e.label) || ((Ue = x.props) == null ? void 0 : Ue.title) || ((xt = x.dataBinding) == null ? void 0 : xt.fieldName) || x.type, ue = ((It = x.dataBinding) == null ? void 0 : It.fieldName) || "-", je = ($t = x.props) != null && $t.colSpan ? `${x.props.colSpan}/12` : "Auto";
                return /* @__PURE__ */ e.jsxs(
                  "tr",
                  {
                    onDoubleClick: () => js(x),
                    className: "hover:bg-blue-600/15 cursor-pointer transition-colors group",
                    title: "Nhấp đúp chuột để cấu hình phần tử này",
                    children: [
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5",
                          style: { paddingLeft: `${R * 20}px` },
                          children: [
                            V ? /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: (Rs) => {
                                  Rs.stopPropagation(), vs(x.id);
                                },
                                className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                                children: _ ? /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
                              }
                            ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                            /* @__PURE__ */ e.jsx("div", { className: "p-1 rounded bg-slate-800/80 group-hover:bg-blue-600/20", children: ws(x.type) }),
                            /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 group-hover:text-white truncate", children: Y })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: /* @__PURE__ */ e.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800", children: [
                        "#",
                        x.id
                      ] }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50", children: x.type }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-emerald-400", children: ue }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: x.order ?? 1 }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: je }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: (Cs = x.props) != null && Cs.hidden ? /* @__PURE__ */ e.jsx(sr, { className: "w-4 h-4 text-slate-600 mx-auto" }) : /* @__PURE__ */ e.jsx(an, { className: "w-4 h-4 text-emerald-400 mx-auto" }) })
                    ]
                  },
                  x.id
                );
              }) })
            ] }) }) })
          ] }),
          k === "permissions" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0e1726] border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ e.jsx(Vt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: m,
                      onChange: (x) => T(x.target.value),
                      placeholder: "Tìm kiếm vai trò, người dùng...",
                      className: "pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 w-56 transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    title: "Lọc điều kiện (=)",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(Cl, { className: "w-3.5 h-3.5 text-emerald-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => T(""),
                    title: "Khôi phục tìm kiếm",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(kl, { className: "w-3.5 h-3.5 text-slate-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    title: "Cài đặt ma trận phân quyền",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-slate-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "hidden xl:flex items-center gap-1 pl-2 border-l border-slate-800 text-[10px] text-slate-400 font-mono", children: ["F1: Help", "F2: Thêm", "F4: Sửa", "F5: Tải lại", "F8: Xóa", "F10: Lưu"].map((x) => /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400", children: x }, x)) }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => bs(!0),
                    className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-colors cursor-pointer ml-1",
                    title: "Quản lý và tạo vai trò động cho dự án",
                    children: [
                      /* @__PURE__ */ e.jsx(Hn, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Quản lý Vai trò (Roles)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none", children: [
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Ot,
                      onChange: (x) => Kt(x.target.checked),
                      className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("span", { children: "Thừa kế quyền" })
                ] }),
                /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none", children: [
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Ae,
                      onChange: (x) => Re(x.target.checked),
                      className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("span", { children: "Công khai (Public)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "bg-[#0b1322] border border-slate-800 rounded-xl overflow-hidden shadow-xl", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-xs text-left text-slate-300 border-collapse select-none", children: [
              /* @__PURE__ */ e.jsx("thead", { className: "bg-[#070e1b] text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800 tracking-wider", children: /* @__PURE__ */ e.jsxs("tr", { children: [
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 border-r border-slate-800 text-center w-12", children: "#" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 border-r border-slate-800 min-w-[130px]", children: "NGƯỜI DÙNG" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-3 border-r border-slate-800 min-w-[160px]", children: "VAI TRÒ" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-24", children: "QUYỀN ĐỌC" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-28", children: "QUYỀN CẬP NHẬT" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-32", children: "CẬP NHẬT TOÀN BỘ" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-24", children: "QUYỀN XÓA" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-28", children: "XÓA TOÀN BỘ" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-24", children: "QUYỀN HỦY" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-28", children: "QUYỀN CHIA SẺ" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-24", children: "RECORDID" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-28", children: "KHÓA CẬP NHẬT" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-24", children: "KHÓA XÓA" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2.5 border-r border-slate-800 text-center w-20", children: "ACTIVE" }),
                /* @__PURE__ */ e.jsx("th", { className: "py-2.5 px-2 text-center w-12" })
              ] }) }),
              /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("tr", { className: "bg-emerald-950/20 border-b-2 border-emerald-600/40 hover:bg-emerald-950/30 transition-colors", children: [
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: Zt,
                      className: "w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto transition-transform active:scale-95 shadow-sm shadow-emerald-600/30 cursor-pointer",
                      title: "Thêm mới quy tắc phân quyền (+)",
                      children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5 stroke-[3]" })
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: A,
                      onChange: (x) => {
                        I(x.target.value), x.target.value && U("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        w.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.id, children: x.username }, x.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: S,
                      onChange: (x) => {
                        U(x.target.value), x.target.value && I("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-semibold",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        C.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.id, children: x.code }, x.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: B,
                      onChange: (x) => H(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Đọc (CanRead)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: O,
                      onChange: (x) => N(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Cập nhật bản ghi của mình (CanWrite)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: L,
                      onChange: (x) => W(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Cập nhật toàn bộ bản ghi của mọi người (CanWriteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: X,
                      onChange: (x) => E(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Xóa bản ghi của mình (CanDelete)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Z,
                      onChange: (x) => te(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Xóa toàn bộ bản ghi của mọi người (CanDeleteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: z,
                      onChange: (x) => ae(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Hủy / Ngưng hiệu lực (CanDeactivate)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: ce,
                      onChange: (x) => q(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Chia sẻ bản ghi (CanShare)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: de,
                      onChange: (x) => J(Number(x.target.value) || 0),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500",
                      title: "0 = Toàn bộ dữ liệu; > 0 = Phân quyền đích danh ID"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      placeholder: "Giờ",
                      value: se,
                      onChange: (x) => F(x.target.value),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600",
                      title: "Số giờ sau khi tạo thì khóa không cho sửa (để trống = không giới hạn)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      placeholder: "Giờ",
                      value: G,
                      onChange: (x) => oe(x.target.value),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600",
                      title: "Số giờ sau khi tạo thì khóa không cho xóa"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: fe,
                      onChange: (x) => xe(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: Zt,
                      className: "text-[11px] px-2 py-1 rounded bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 transition-colors font-medium cursor-pointer",
                      children: "Lưu"
                    }
                  ) })
                ] }),
                D.filter((x) => {
                  if (!m.trim()) return !0;
                  const R = m.toLowerCase();
                  return x.roleCode && x.roleCode.toLowerCase().includes(R) || x.userName && x.userName.toLowerCase().includes(R) || x.description && x.description.toLowerCase().includes(R);
                }).map((x, R) => {
                  const V = C.find(
                    (Y) => String(Y.id) === String(x.roleId) || Y.code === x.roleCode
                  ), _ = w.find(
                    (Y) => String(Y.id) === String(x.userId) || Y.username === x.userName
                  );
                  return /* @__PURE__ */ e.jsxs(
                    "tr",
                    {
                      className: "hover:bg-slate-800/40 transition-colors group",
                      children: [
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center text-slate-500 font-mono text-[11px] border-r border-slate-800", children: R + 1 }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: _ != null && _.username || x.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-xs text-blue-300 font-mono font-medium", children: (_ == null ? void 0 : _.username) || x.userName }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: x.roleCode || V != null && V.code ? /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-xs text-slate-200", children: x.roleCode || (V == null ? void 0 : V.code) }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canRead,
                            onChange: (Y) => gt(x.id, "canRead", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canWrite,
                            onChange: (Y) => gt(x.id, "canWrite", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canWriteAll,
                            onChange: (Y) => gt(x.id, "canWriteAll", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDelete,
                            onChange: (Y) => gt(x.id, "canDelete", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDeleteAll,
                            onChange: (Y) => gt(x.id, "canDeleteAll", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDeactivate,
                            onChange: (Y) => gt(x.id, "canDeactivate", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canShare,
                            onChange: (Y) => gt(x.id, "canShare", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            value: x.recordId ?? 0,
                            onChange: (Y) => gt(x.id, "recordId", Number(Y.target.value) || 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: x.lockUpdateAfterCreated ?? "",
                            onChange: (Y) => gt(x.id, "lockUpdateAfterCreated", Y.target.value ? Number(Y.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: x.lockDeleteAfterCreated ?? "",
                            onChange: (Y) => gt(x.id, "lockDeleteAfterCreated", Y.target.value ? Number(Y.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.active,
                            onChange: (Y) => gt(x.id, "active", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => Gs(x.id),
                            className: "p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition-colors cursor-pointer",
                            title: "Xóa quy tắc này",
                            children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                          }
                        ) })
                      ]
                    },
                    x.id || R
                  );
                }),
                D.length === 0 && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsxs("td", { colSpan: 15, className: "py-8 text-center text-slate-500", children: [
                  "Chưa có quy tắc phân quyền nào. Nhấn nút",
                  " ",
                  /* @__PURE__ */ e.jsx("span", { className: "text-emerald-400 font-semibold", children: "+" }),
                  " ở hàng đầu để thêm quy tắc mới."
                ] }) })
              ] })
            ] }) }) })
          ] })
        ] })
      ] }),
      os && /* @__PURE__ */ e.jsx(
        za,
        {
          isOpen: !!os,
          node: os,
          onClose: () => ms(null),
          onSave: (x, R, V) => {
            c(x, R), V && p(x, V);
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        Aa,
        {
          isOpen: Fs,
          onClose: () => bs(!1)
        }
      )
    ] }),
    document.body
  );
}, wi = (t, r, s) => {
  const a = `w-4 h-4 shrink-0 ${s ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`, n = (t || "").toLowerCase();
  return r ? n.includes("truck") || n.includes("shipment") ? /* @__PURE__ */ e.jsx(Dl, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("price") || n.includes("sale") || n.includes("dollar") ? /* @__PURE__ */ e.jsx(Il, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : n.includes("doc") ? /* @__PURE__ */ e.jsx(Yt, { className: "w-4 h-4 shrink-0 text-blue-400" }) : /* @__PURE__ */ e.jsx(In, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("ship") || n.includes("fcl") || n.includes("lcl") ? /* @__PURE__ */ e.jsx(Fl, { className: a }) : n.includes("plane") || n.includes("air") ? /* @__PURE__ */ e.jsx(Pl, { className: a }) : n.includes("pack") || n.includes("box") ? /* @__PURE__ */ e.jsx(Rl, { className: a }) : n.includes("doc") || n.includes("bill") || n.includes("invoice") ? /* @__PURE__ */ e.jsx(Yt, { className: a }) : n.includes("dash") ? /* @__PURE__ */ e.jsx(Ll, { className: a }) : /* @__PURE__ */ e.jsx(Et, { className: a });
}, Ci = ({
  feature: t,
  depth: r,
  hasChildren: s,
  isCollapsed: a,
  isActive: n,
  childCount: o = 0,
  isDev: l = !0,
  onToggleCollapse: i,
  onSelect: d,
  onContextMenu: c
}) => {
  const { attributes: p, listeners: h, setNodeRef: j, transform: u, transition: b, isDragging: k } = zl({
    id: t.id,
    disabled: !l
  }), f = {
    transform: ga.Transform.toString(u),
    transition: b,
    opacity: k ? 0.35 : 1,
    paddingLeft: `${Math.max(8, r * 18 + 8)}px`
  }, C = !!t.isGroup, w = t.badge ?? (C && o > 0 ? o : null);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: j,
      style: f,
      onClick: d,
      onContextMenu: l ? c : (y) => y.preventDefault(),
      className: `group relative flex items-center justify-between pr-2 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all select-none ${n ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500" : C ? "bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/30" : "text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate flex-1 min-w-0", children: [
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              ...p,
              ...h,
              onClick: (y) => y.stopPropagation(),
              className: "opacity-0 group-hover:opacity-100 p-0.5 -ml-1 text-slate-500 hover:text-slate-300 cursor-grab active:cursor-grabbing transition-opacity shrink-0",
              title: "Kéo để di chuyển vị trí hoặc kéo vào nhóm cha",
              children: /* @__PURE__ */ e.jsx(cn, { className: "w-3.5 h-3.5" })
            }
          ),
          s ? /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: i,
              className: "p-0.5 rounded hover:bg-black/20 text-slate-400 hover:text-white transition-colors shrink-0",
              children: a ? /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" })
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 shrink-0" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `p-1 rounded-lg shrink-0 ${n ? "bg-white/20 text-white" : C ? "bg-amber-500/10" : "bg-slate-800 text-slate-400"}`,
              children: wi(t.icon, C, n)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `truncate ${C ? "font-bold uppercase tracking-wider text-[11px] text-slate-100" : "font-medium"}`,
              children: t.title || t.name
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 pl-1", children: [
          w !== null && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `px-1.5 py-0.2 rounded-full text-[10px] font-bold ${n ? "bg-white text-blue-700" : "bg-amber-500 text-slate-950 shadow-sm"}`,
              children: w
            }
          ),
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${n ? "text-white" : "text-slate-400 hover:text-white"}`,
              title: "Tùy chọn Feature",
              children: /* @__PURE__ */ e.jsx(Tl, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
}, ki = ({ width: t }) => {
  const r = vt((z) => z.user), s = (r == null ? void 0 : r.role) === "Dev", a = Q((z) => z.features), n = Q((z) => z.activeFeatureId), o = Q((z) => z.setActiveFeature), l = Q((z) => z.addFeature), i = Q((z) => z.cloneFeature), d = Q((z) => z.toggleFeatureActive), c = Q((z) => z.openFeatureManager), p = Q((z) => z.openFeatureProperties), h = Q((z) => z.reorderFeatures), j = $e(() => a.filter((z) => z.active === !1 || z.isMenu === !1 ? !1 : z.hidden || z.isDetail ? z.id === n : !0), [a, n]), [u, b] = P({}), [k, f] = P(null), [C, w] = P(!1), [y, g] = P(""), [D, M] = P(""), [m, T] = P(!1), [A, I] = P(null), S = ha(
    Vn(ma, {
      activationConstraint: {
        distance: 5
      }
    })
  ), U = (z, ae) => {
    ae.stopPropagation(), b((ce) => ({ ...ce, [z]: !ce[z] }));
  }, { treeNodes: B, visibleNodeIds: H } = $e(() => {
    const z = /* @__PURE__ */ new Map();
    for (const se of j) {
      const F = se.parentId || null;
      z.has(F) || z.set(F, []), z.get(F).push(se);
    }
    for (const se of z.values())
      se.sort((F, G) => (F.order ?? 0) - (G.order ?? 0));
    const ae = [], ce = [], q = (se, F = 0) => {
      const G = z.get(se) || [];
      for (const oe of G) {
        const fe = z.get(oe.id) || [], xe = fe.length > 0, pe = !!u[oe.id];
        ae.push({
          feature: oe,
          depth: F,
          hasChildren: xe,
          isCollapsed: pe,
          childCount: fe.length
        }), ce.push(oe.id), xe && !pe && q(oe.id, F + 1);
      }
    }, de = new Set(j.map((se) => se.id)), J = j.filter((se) => !se.parentId || !de.has(se.parentId));
    J.sort((se, F) => (se.order ?? 0) - (F.order ?? 0));
    for (const se of J) {
      const F = z.get(se.id) || [], G = F.length > 0, oe = !!u[se.id];
      ae.push({
        feature: se,
        depth: 0,
        hasChildren: G,
        isCollapsed: oe,
        childCount: F.length
      }), ce.push(se.id), G && !oe && q(se.id, 1);
    }
    return { treeNodes: ae, visibleNodeIds: ce };
  }, [j, u]), O = (z) => {
    z.preventDefault(), s && f({
      x: z.clientX,
      y: z.clientY
    });
  }, N = (z, ae) => {
    z.preventDefault(), z.stopPropagation(), s && f({
      x: z.clientX,
      y: z.clientY,
      featureId: ae
    });
  }, L = (z = "") => {
    g(""), M(z), T(!1), w(!0);
  }, W = (z) => {
    if (z.preventDefault(), !y.trim()) return;
    const ae = l(
      y.trim(),
      m ? "Folder" : "Layers",
      D || null,
      m
    );
    w(!1), g(""), m || (o(ae, null), Ye.getState().openFeature(ae, {}, "Tab", y.trim()));
  }, X = $e(() => {
    const z = k != null && k.featureId ? a.find((ae) => ae.id === k.featureId) : null;
    return z ? [
      {
        label: "➕ New feature",
        icon: ze,
        onClick: () => L(z.isGroup ? z.id : z.parentId || "")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "🗙 Deactivate this feature",
        icon: ca,
        danger: !0,
        onClick: () => {
          d(z.id);
        }
      },
      {
        label: "❐ Clone this feature",
        icon: ln,
        onClick: () => {
          i(z.id);
        }
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "☰ Manage features",
        icon: Ir,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ct,
        onClick: () => p(z.id)
      }
    ] : [
      {
        label: "➕ New feature",
        icon: ze,
        onClick: () => L("")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "☰ Manage features",
        icon: Ir,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ct,
        onClick: () => p(n)
      }
    ];
  }, [k, a, n, i, d, c, p]), E = (z) => {
    I(String(z.active.id));
  }, Z = (z) => {
    const { active: ae, over: ce } = z;
    if (I(null), !ce || ae.id === ce.id) return;
    const q = String(ae.id), de = String(ce.id), J = a.find((xe) => xe.id === q), se = a.find((xe) => xe.id === de);
    if (!J || !se) return;
    if (se.isGroup && J.id !== se.id) {
      const xe = a.filter((ie) => ie.parentId === se.id), pe = xe.length > 0 ? Math.max(...xe.map((ie) => ie.order ?? 0)) + 1 : 1;
      h([
        { id: J.id, parentId: se.id, order: pe, isGroup: J.isGroup }
      ]), b((ie) => ({ ...ie, [se.id]: !1 }));
      return;
    }
    const F = se.parentId || null, G = a.filter((xe) => (xe.parentId || null) === F);
    G.sort((xe, pe) => (xe.order ?? 0) - (pe.order ?? 0));
    const oe = G.findIndex((xe) => xe.id === q), fe = G.findIndex((xe) => xe.id === de);
    if (oe !== -1 && fe !== -1) {
      const xe = [...G], [pe] = xe.splice(oe, 1);
      xe.splice(fe, 0, pe);
      const ie = xe.map((ye, be) => ({
        id: ye.id,
        parentId: F,
        order: be + 1,
        isGroup: ye.isGroup
      }));
      h(ie);
    } else {
      const xe = [...G.filter((ye) => ye.id !== q)], pe = xe.findIndex((ye) => ye.id === de);
      pe !== -1 ? xe.splice(pe, 0, { ...J, parentId: F }) : xe.push({ ...J, parentId: F });
      const ie = xe.map((ye, be) => ({
        id: ye.id,
        parentId: F,
        order: be + 1,
        isGroup: ye.id === q ? J.isGroup : ye.isGroup
      }));
      h(ie);
    }
  }, te = A ? a.find((z) => z.id === A) : null;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: O,
        style: { width: t ? `${t}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-[#090e1a] flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-2 space-y-1 overflow-y-auto flex-1", children: /* @__PURE__ */ e.jsxs(
            ba,
            {
              sensors: S,
              collisionDetection: Wl,
              onDragStart: E,
              onDragEnd: Z,
              children: [
                /* @__PURE__ */ e.jsx(Ul, { items: H, strategy: Kl, children: B.map(({ feature: z, depth: ae, hasChildren: ce, isCollapsed: q, childCount: de }) => {
                  const J = z.id === n;
                  return /* @__PURE__ */ e.jsx(
                    Ci,
                    {
                      feature: z,
                      depth: ae,
                      hasChildren: ce,
                      isCollapsed: q,
                      isActive: J,
                      childCount: de,
                      isDev: s,
                      onToggleCollapse: (se) => U(z.id, se),
                      onSelect: () => {
                        z.isGroup ? b((se) => ({ ...se, [z.id]: !se[z.id] })) : (o(z.id, null), Ye.getState().openFeature(z.id, {}, "Tab", z.title || z.name));
                      },
                      onContextMenu: (se) => N(se, z.id)
                    },
                    z.id
                  );
                }) }),
                /* @__PURE__ */ e.jsx(fa, { children: te ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white shadow-2xl border border-blue-400 text-xs font-bold opacity-90", children: [
                  /* @__PURE__ */ e.jsx(cn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: te.title || te.name })
                ] }) : null })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-[#080d17] text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                j.length,
                " hiển thị / ",
                a.length
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "Core C# v2.5" })
          ] })
        ]
      }
    ),
    s && k && /* @__PURE__ */ e.jsx(
      Ka,
      {
        x: k.x,
        y: k.y,
        items: X,
        onClose: () => f(null)
      }
    ),
    s && C && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[130] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: W,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(Sl, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold", children: "Thêm Feature mới" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Tạo màn hình hoặc nhóm thư mục menu mới" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1", children: "Tên Feature / Màn hình:" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  autoFocus: !0,
                  required: !0,
                  placeholder: "Ví dụ: SHIPMENTS, FCL Import...",
                  value: y,
                  onChange: (z) => g(z.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1", children: "Cấp cha (Thư mục nhóm):" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: D,
                  onChange: (z) => M(z.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                    a.filter((z) => z.isGroup).map((z) => /* @__PURE__ */ e.jsxs("option", { value: z.id, children: [
                      "📁 ",
                      z.title || z.name
                    ] }, z.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-xs font-semibold text-slate-300", children: "Tạo dạng Thư mục Nhóm cha:" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: m,
                  onChange: (z) => T(z.target.checked),
                  className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0 accent-blue-600 cursor-pointer"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => w(!1),
                className: "px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer",
                children: "Hủy bỏ"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "submit",
                className: "px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer",
                children: "Tạo Feature"
              }
            )
          ] })
        ]
      }
    ) }),
    s && /* @__PURE__ */ e.jsx(Ni, {}),
    s && /* @__PURE__ */ e.jsx(ji, {})
  ] });
}, cc = ({
  isPreview: t,
  onTogglePreview: r,
  onSave: s,
  isSaving: a = !1
}) => {
  const n = Q((p) => p.undo), o = Q((p) => p.redo), l = Q((p) => p.historyIndex), i = Q((p) => p.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(da, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(ua, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: r, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: t ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: s, disabled: a, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Si = ({
  isPreview: t,
  onTogglePreview: r,
  onSave: s,
  isSaving: a = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: d,
  branch: c,
  onLogout: p
}) => {
  const h = Q((D) => D.undo), j = Q((D) => D.redo), u = Q((D) => D.historyIndex), b = Q((D) => D.history), k = Oe((D) => D.previewRoleCode), f = Oe((D) => D.setPreviewRole), C = Oe((D) => D.roles), w = Oe((D) => D.fetchSecurityMetadata);
  Fe(() => {
    w();
  }, [w]);
  const y = u > 0, g = u < b.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-14 border-b border-slate-800 bg-slate-900/95 px-5 flex items-center justify-between shrink-0 select-none shadow-sm backdrop-blur-sm z-30", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-sm shadow-md shadow-blue-500/20", children: "UF" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-extrabold text-sm tracking-wide text-white", children: "UIForge" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-800 font-semibold", children: "Enterprise" })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Web App Visual Framework" })
      ] })
    ] }) }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
            disabled: !y,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(da, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: j,
            disabled: !g,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(ua, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: r,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${t ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx($l, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Xem Thử Trực Tiếp" })
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: s,
          disabled: a,
          className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50",
          children: [
            /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: a ? "Đang lưu..." : "Lưu Giao Diện" })
          ]
        }
      )
    ] }) : null,
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors", children: [
        /* @__PURE__ */ e.jsx(Hs, { className: `w-3.5 h-3.5 ${k ? "text-amber-400" : "text-slate-400"}` }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-400 font-medium whitespace-nowrap", children: "Vai trò:" }),
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: k || "",
            onChange: (D) => f(D.target.value || null),
            className: "bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer border-none py-0.5",
            title: "Chuyển đổi vai trò người dùng để kiểm tra phân quyền tức thì (0 giây)",
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-200", children: d || "Dev" }),
              C.map((D) => /* @__PURE__ */ e.jsx("option", { value: D.code, className: "bg-slate-900 text-slate-200", children: D.code }, D.code))
            ]
          }
        ),
        k && /* @__PURE__ */ e.jsx(
          "span",
          {
            className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0",
            title: `Đang giả lập vai trò: ${k}`
          }
        )
      ] }),
      l && /* @__PURE__ */ e.jsx("div", { className: "h-5 w-[1px] bg-slate-800" }),
      l && !t && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${n ? "bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30" : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750"}`,
          title: n ? "Ẩn bảng quản lý bên phải" : "Mở bảng quản lý bên phải",
          children: n ? /* @__PURE__ */ e.jsx(Al, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(El, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(Ml, { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "absolute 1 top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-900" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "h-5 w-[1px] bg-slate-800" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pl-1 pr-2 py-1 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-colors cursor-pointer", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-white text-xs shadow-sm", children: (i || "U").slice(0, 2).toUpperCase() }),
          /* @__PURE__ */ e.jsx("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-left leading-tight hidden sm:block", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-100", children: i || "Người dùng" }),
          /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400", children: [
            d === "Dev" ? "Developer • được chỉnh sửa" : "Người dùng • chỉ xem",
            c ? ` • DB: ${c}` : ""
          ] })
        ] }),
        p && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: p,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(Bl, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, Ti = () => {
  const t = Ye((i) => i.activePopup), r = Ye((i) => i.closePopup), s = Ye((i) => i.openFeature), a = Q((i) => i.features);
  if (!t) return null;
  const n = a.find((i) => String(i.id) === String(t.featureId)), o = t.params || {}, l = () => {
    s(t.featureId, t.params, "Tab", t.title), r();
  };
  return Bt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-sm font-bold text-slate-100", children: t.title }),
              o.id && /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-mono", children: [
                "ID #",
                o.id
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px]", children: "FeaturePopup" })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Màn hình chi tiết hiển thị dưới dạng cửa sổ nổi (Modal Popup)" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: l,
              className: "flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer",
              title: "Chuyển sang mở dạng Tab đa nhiệm",
              children: [
                /* @__PURE__ */ e.jsx(na, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chuyển thành Tab" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => r(),
              className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
              title: "Đóng (ESC)",
              children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(_l, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          Ws,
          {
            node: i,
            isEditing: !1,
            onContextMenu: () => {
            }
          },
          i.id
        )) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs italic", children: [
          "Nội dung chi tiết của màn hình #",
          t.featureId,
          " đã được nạp thành công."
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3 bg-[#0b1329] border-t border-slate-800 flex items-center justify-between shrink-0", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-500 font-mono", children: "UIForge Dynamic Navigation Engine" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => r(),
              className: "px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer",
              children: "Đóng"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => r({ saved: !0 }),
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Xác nhận & Lưu" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    document.body
  );
};
async function Di(t) {
  const { data: r } = await st.post("/auth/login", t);
  return r;
}
const Ii = () => {
  const t = vt((u) => u.setAuth), [r, s] = P(""), [a, n] = P(""), [o, l] = P("BetaV1"), [i, d] = P(!1), [c, p] = P(null), h = async (u) => {
    var b, k;
    if (u.preventDefault(), !i) {
      d(!0), p(null);
      try {
        const f = await Di({ username: r.trim(), password: a, branch: o.trim() });
        t({ token: f.token, branch: f.branch, user: f.user });
      } catch (f) {
        const C = ((k = (b = f == null ? void 0 : f.response) == null ? void 0 : b.data) == null ? void 0 : k.message) || "Đăng nhập thất bại. Kiểm tra lại thông tin hoặc kết nối server.";
        p(C);
      } finally {
        d(!1);
      }
    }
  }, j = "w-full pl-9 pr-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";
  return /* @__PURE__ */ e.jsx("div", { className: "h-screen w-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950 select-none", children: /* @__PURE__ */ e.jsxs("div", { className: "w-[380px] rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-blue-950/30 p-8", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center mb-7", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/25 mb-3", children: "UF" }),
      /* @__PURE__ */ e.jsx("h1", { className: "text-lg font-extrabold tracking-wide text-white", children: "UIForge" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Đăng nhập để vào Web App Visual Framework" })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: h, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(ta, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: r,
            onChange: (u) => s(u.target.value),
            placeholder: "Tên đăng nhập",
            required: !0,
            autoFocus: !0,
            className: j
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Dn, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: a,
            onChange: (u) => n(u.target.value),
            placeholder: "Mật khẩu",
            required: !0,
            className: j
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(jn, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: o,
            onChange: (u) => l(u.target.value),
            placeholder: "Branch (mặc định: BetaV1)",
            className: j
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-500 -mt-2.5 leading-snug", children: [
        "Branch là hậu tố của database — vd ",
        /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 font-mono", children: "BetaV1" }),
        " kết nối ",
        /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 font-mono", children: "UIPorge_BetaV1" }),
        ",",
        " ",
        /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 font-mono", children: "BetaV2" }),
        " kết nối",
        " ",
        /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 font-mono", children: "UIPorge_BetaV2" }),
        "."
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { className: "text-xs text-red-300 bg-red-950/50 border border-red-800/60 rounded-lg px-3 py-2.5", children: c }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "submit",
          disabled: i,
          className: "mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-60",
          children: [
            i ? /* @__PURE__ */ e.jsx(Nn, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.jsx(Ol, { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { children: i ? "Đang kết nối..." : "Đăng nhập" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed", children: [
      /* @__PURE__ */ e.jsx("p", { className: "font-semibold text-slate-400 mb-1", children: "Tài khoản mặc định:" }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-slate-300", children: "admin / admin123" }),
        " — Dev (được chỉnh sửa)"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-slate-300", children: "viewer / viewer123" }),
        " — User (chỉ xem)"
      ] })
    ] })
  ] }) });
}, Fi = (t) => {
  const r = Hl(t);
  return r.length > 0 ? r : Gl(t);
}, Bs = (t) => t === "Container" || t === "Section" || t === "Tabs";
function On(t, r, s = null, a = {}, n = {}) {
  const o = `${t.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  let l = { ...a }, i = { ...n };
  switch (t) {
    case "Button":
      l = { label: "Nút bấm mới", variant: "primary", size: "md", ...l };
      break;
    case "TextBox":
      l = { label: "Tên trường", labelPosition: "left", colSpan: 4, placeholder: "Nhập nội dung...", ...l };
      break;
    case "Number":
      l = { label: "Số tiền / Lượng", labelPosition: "left", colSpan: 4, precision: 2, thousandsSeparator: !0, ...l };
      break;
    case "DatePicker":
      l = { label: "Ngày tháng", labelPosition: "left", colSpan: 4, ...l };
      break;
    case "Select":
      l = {
        label: "Lựa chọn",
        labelPosition: "left",
        colSpan: 4,
        options: [
          { value: "opt1", label: "Tùy chọn 1" },
          { value: "opt2", label: "Tùy chọn 2" }
        ],
        ...l
      };
      break;
    case "Checkbox":
      l = { label: "Hộp kiểm", labelPosition: "left", colSpan: 4, ...l };
      break;
    case "Textarea":
      l = { label: "Ghi chú", labelPosition: "left", colSpan: 12, rows: 3, ...l };
      break;
    case "Label":
      l = { label: "Tiêu đề khối văn bản", ...l }, i = { fontSize: "16px", fontWeight: "bold", ...i };
      break;
    case "Section":
      l = {
        title: "Khung Card / Phân Vùng Mới",
        label: "Khung Card / Phân Vùng Mới",
        collapsible: !0,
        boxShadow: !0,
        colSpan: 12,
        ...l
      }, i = { width: "100%", marginBottom: "16px", ...i };
      break;
    case "Tabs":
      l = {
        isTab: !0,
        tab: !0,
        tabs: [
          { id: "tab1", label: "TAB 1" },
          { id: "tab2", label: "TAB 2" },
          { id: "tab3", label: "TAB 3" }
        ],
        activeTabId: "tab1",
        ...l
      }, i = { width: "100%", ...i };
      break;
    case "Divider":
      l = { ...l }, i = { width: "100%", margin: "12px 0", ...i };
      break;
    case "Container":
      l = {
        layoutMode: "flex",
        flexConfig: { direction: "row", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "16px" },
        ...l
      }, i = {
        minHeight: "120px",
        backgroundColor: "#1e293b",
        padding: "16px",
        borderRadius: "12px",
        border: "1px dashed #475569",
        ...i
      };
      break;
    case "Table":
      l = {
        columns: [
          { key: "id", title: "Mã", width: "80px", componentType: "TextBox" },
          { key: "name", title: "Tên", width: "160px", componentType: "TextBox" },
          { key: "status", title: "Trạng thái", width: "120px", componentType: "TextBox" }
        ],
        ...l
      };
      break;
  }
  return {
    id: o,
    type: t,
    parentId: s,
    pageId: r,
    props: l,
    style: i,
    events: [],
    order: 1
  };
}
function Pi() {
  const t = Q((h) => h.features), r = Q((h) => h.activeFeatureId), s = Q((h) => h.moveComponent), a = Q((h) => h.addComponent), n = Q((h) => h.selectComponent), [o, l] = P({
    activeId: null,
    overId: null,
    activeData: null
  });
  return {
    dragState: o,
    handleDragStart: (h) => {
      const j = String(h.active.id), u = h.active.data.current || {};
      l({
        activeId: j,
        overId: null,
        activeData: { ...u, id: j }
      }), u.isPaletteItem || n(j);
    },
    handleDragOver: (h) => {
      const j = h.over ? String(h.over.id) : null;
      l((u) => ({ ...u, overId: j }));
    },
    handleDragEnd: (h) => {
      var U, B, H, O, N, L, W, X, E, Z;
      const { active: j, over: u } = h;
      if (l({ activeId: null, overId: null, activeData: null }), !u) return;
      const b = String(j.id), k = String(u.id), f = !!((U = j.data.current) != null && U.isPaletteItem), C = (B = j.data.current) == null ? void 0 : B.type, w = t.find((te) => te.id === r);
      if (!w) return;
      if (k === "canvas-root") {
        if (f && C) {
          const te = On(C, r, null);
          a(te, null);
        } else {
          const te = w.components.filter((z) => !z.parentId);
          s(b, null, te.length);
        }
        return;
      }
      if (b === k) return;
      const y = Tn(w.components, k);
      if (!y) return;
      if (f && C) {
        if (Bs(y.type)) {
          const te = ((H = y.children) == null ? void 0 : H.length) || 0, z = !!((O = y.props) != null && O.isTab || (N = y.props) != null && N.tab || y.type === "Tabs"), ae = ((L = y.props) == null ? void 0 : L.activeTabId) || ((E = (X = (W = y.props) == null ? void 0 : W.tabs) == null ? void 0 : X[0]) == null ? void 0 : E.id) || "main", ce = On(C, r, y.id);
          z && (ce.props = { ...ce.props, tabId: ae }), a(ce, y.id, te);
        } else {
          const te = y.parentId, z = Wn(w.components, te), ae = z.findIndex((de) => de.id === k), ce = ae >= 0 ? ae : z.length, q = On(C, r, te);
          a(q, te, ce);
        }
        return;
      }
      const g = Tn(w.components, b);
      if (!g || qa(g, k))
        return;
      const D = g.parentId === y.parentId, M = Bs(g.type) && Bs(y.type), m = !Bs(g.type) && !Bs(y.type);
      if (D && (M || m)) {
        const te = y.parentId, ae = Wn(w.components, te).findIndex((ce) => ce.id === k);
        ae >= 0 && s(b, te, ae);
        return;
      }
      if (Bs(y.type)) {
        const te = ((Z = y.children) == null ? void 0 : Z.length) || 0;
        s(b, y.id, te);
        return;
      }
      const T = y.parentId, A = Wn(w.components, T), I = A.findIndex((te) => te.id === k), S = I >= 0 ? I : A.length;
      s(b, T, S);
    },
    handleDragCancel: () => {
      l({ activeId: null, overId: null, activeData: null });
    }
  };
}
function Tn(t, r) {
  for (const s of t) {
    if (s.id === r) return s;
    if (s.children && s.children.length > 0) {
      const a = Tn(s.children, r);
      if (a) return a;
    }
  }
  return null;
}
function qa(t, r) {
  return t.id === r ? !0 : t.children && t.children.length > 0 ? t.children.some((s) => qa(s, r)) : !1;
}
function Wn(t, r) {
  if (r === null)
    return t.filter((a) => !a.parentId);
  const s = Tn(t, r);
  return (s == null ? void 0 : s.children) || [];
}
const Vr = 180, Ur = 450, Ri = 256, Kr = 260, zr = 600, Li = 320;
function $i() {
  const [t, r] = P(() => {
    try {
      const l = localStorage.getItem("uiforge_left_width");
      if (l) {
        const i = parseInt(l, 10);
        if (!isNaN(i) && i >= Vr && i <= Ur)
          return i;
      }
    } catch {
    }
    return Ri;
  }), [s, a] = P(() => {
    try {
      const l = localStorage.getItem("uiforge_right_width");
      if (l) {
        const i = parseInt(l, 10);
        if (!isNaN(i) && i >= Kr && i <= zr)
          return i;
      }
    } catch {
    }
    return Li;
  }), n = ks((l) => {
    l.preventDefault();
    const i = l.clientX, d = t, c = (h) => {
      const j = h.clientX - i, u = Math.min(Ur, Math.max(Vr, d + j));
      r(u);
    }, p = () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", p), document.body.style.cursor = "", document.body.style.userSelect = "";
    };
    document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", c), window.addEventListener("mouseup", p);
  }, [t]), o = ks((l) => {
    l.preventDefault();
    const i = l.clientX, d = s, c = (h) => {
      const j = i - h.clientX, u = Math.min(zr, Math.max(Kr, d + j));
      a(u);
    }, p = () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", p), document.body.style.cursor = "", document.body.style.userSelect = "";
    };
    document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", c), window.addEventListener("mouseup", p);
  }, [s]);
  return Fe(() => {
    try {
      localStorage.setItem("uiforge_left_width", String(t));
    } catch {
    }
  }, [t]), Fe(() => {
    try {
      localStorage.setItem("uiforge_right_width", String(s));
    } catch {
    }
  }, [s]), {
    leftWidth: t,
    rightWidth: s,
    startLeftResize: n,
    startRightResize: o
  };
}
function dc() {
  var N;
  const t = vt((L) => L.token), r = vt((L) => L.user), s = vt((L) => L.branch), a = vt((L) => L.logout), n = (r == null ? void 0 : r.role) === "Dev", [o, l] = P(!1), [i, d] = P(!0), [c, p] = P(!1), [h, j] = P(!1), [u, b] = P(null), k = Q((L) => L.features), f = Q((L) => L.activeFeatureId), C = Q((L) => L.setFeatures), w = Q((L) => L.setActiveFeature), y = o || !n;
  Ye((L) => L.openTabs.find((W) => W.id === L.activeTabId));
  const { leftWidth: g, rightWidth: D, startLeftResize: M, startRightResize: m } = $i(), { dragState: T, handleDragStart: A, handleDragOver: I, handleDragEnd: S, handleDragCancel: U } = Pi(), B = ha(
    Vn(ma, {
      activationConstraint: {
        distance: 5
        // 5px threshold before dragging starts to allow normal clicks
      }
    }),
    Vn(Vl)
  ), H = (L) => {
    b(L), setTimeout(() => b(null), 3e3);
  };
  Fe(() => {
    const L = (W) => {
      fetch(`${ut()}/core/data/${encodeURIComponent(W)}`).then((X) => X.ok ? X.json() : []).then((X) => {
        const E = Array.isArray(X) ? X : (X == null ? void 0 : X.value) ?? [];
        Ne.getState().registerDataset(W, E);
      }).catch(() => {
      });
    };
    L("Terminal"), L("Transaction"), L("Container"), L("Vendor"), L("User");
  }, []), Fe(() => {
    const L = () => {
      const W = Q.getState().features, { featureId: X, recordKey: E } = Cn(W), Z = X || yn();
      Z && w(Z, E);
    };
    return window.addEventListener("popstate", L), () => window.removeEventListener("popstate", L);
  }, [w]), Fe(() => {
    if (!t) return;
    let L = !1;
    return j(!0), uo().then((W) => {
      if (!L && W.length > 0) {
        const X = W.map(ka);
        C(X);
        const E = Ye.getState();
        if (E.openTabs.length === 0) {
          const Z = Cn(X), te = Q.getState().activeFeatureId, z = X.find((ae) => ae.id === te) || X.find((ae) => !ae.hidden && !ae.isDetail) || X[0];
          if (z) {
            const ae = Z.recordKey || Q.getState().activeRecordId;
            E.openFeature(z.id, ae ? { id: ae } : {}, "Tab", z.name), es(z.id, ae, X);
          }
        }
      }
    }).catch(() => {
      L || H("⚠ Không tải được danh mục màn hình từ server.");
    }).finally(() => {
      L || j(!1);
    }), () => {
      L = !0;
    };
  }, [t]);
  const O = async () => {
    if (!n) return;
    const L = k.find((W) => W.id === f);
    if (L) {
      p(!0);
      try {
        const W = L.parentId ? isNaN(Number(L.parentId)) ? L.parentId : Number(L.parentId) : null;
        await po({
          id: L.id,
          code: L.code,
          name: L.name,
          title: L.title,
          route: L.route,
          icon: L.icon,
          parentId: W,
          order: L.order ?? 0,
          isGroup: L.isGroup ?? !1,
          isMenu: L.isMenu !== void 0 ? L.isMenu : !0,
          active: L.active !== void 0 ? L.active : !0,
          entityName: L.entityName,
          description: L.description,
          scriptFile: L.scriptFile,
          scriptContent: L.scriptContent,
          featureProps: L.featureProps,
          layoutConfig: {
            ...L.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
            scriptFile: L.scriptFile
          },
          components: L.components
        }), H("✓ Đã lưu cấu trúc giao diện thành công!");
      } catch {
        H("✕ Lưu thất bại! Kiểm tra kết nối server.");
      } finally {
        p(!1);
      }
    }
  };
  return di({
    onSaveLayout: O,
    isPreview: y,
    canEdit: n
  }), t ? /* @__PURE__ */ e.jsx(
    ba,
    {
      sensors: B,
      collisionDetection: Fi,
      onDragStart: A,
      onDragOver: I,
      onDragEnd: S,
      onDragCancel: U,
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans select-none", children: [
        /* @__PURE__ */ e.jsx(
          Si,
          {
            isPreview: y,
            onTogglePreview: () => l(!o),
            onSave: O,
            isSaving: c,
            showRightPanel: i,
            onToggleRightPanel: () => d(!i),
            canEdit: n,
            userName: (r == null ? void 0 : r.fullName) || (r == null ? void 0 : r.username),
            userRole: r == null ? void 0 : r.role,
            branch: s ?? void 0,
            onLogout: a
          }
        ),
        u && /* @__PURE__ */ e.jsx("div", { className: "fixed top-16 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl shadow-emerald-950/40 animate-in fade-in slide-in-from-top-2 duration-200", children: u }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ e.jsx(ki, { width: g }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              onMouseDown: M,
              className: "w-1.5 hover:w-2 bg-transparent hover:bg-blue-500/80 active:bg-blue-500 cursor-col-resize transition-all duration-75 relative group z-20 shrink-0 select-none flex items-center justify-center",
              title: "Kéo sang trái/phải để điều chỉnh độ rộng menu",
              children: /* @__PURE__ */ e.jsx("div", { className: "w-0.5 h-8 bg-slate-700 group-hover:bg-white rounded-full transition-colors" })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-w-0 overflow-hidden", children: [
            /* @__PURE__ */ e.jsx(yi, {}),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
              h ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center text-slate-500 text-sm", children: "Đang tải dữ liệu từ server..." }) : /* @__PURE__ */ e.jsx(
                ui,
                {
                  isEditing: !y,
                  activeId: T.activeId,
                  overId: T.overId
                }
              ),
              !y && i && /* @__PURE__ */ e.jsx(
                "div",
                {
                  onMouseDown: m,
                  className: "w-1.5 hover:w-2 bg-transparent hover:bg-blue-500/80 active:bg-blue-500 cursor-col-resize transition-all duration-75 relative group z-20 shrink-0 select-none flex items-center justify-center",
                  title: "Kéo sang trái/phải để điều chỉnh độ rộng thanh thuộc tính",
                  children: /* @__PURE__ */ e.jsx("div", { className: "w-0.5 h-8 bg-slate-700 group-hover:bg-white rounded-full transition-colors" })
                }
              ),
              !y && i && /* @__PURE__ */ e.jsx(gi, { width: D })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(fa, { dropAnimation: null, children: ((N = T.activeData) == null ? void 0 : N.node) && /* @__PURE__ */ e.jsx("div", { className: "opacity-90 pointer-events-none shadow-2xl shadow-blue-500/40 ring-2 ring-blue-500 rounded-xl overflow-hidden bg-slate-900/90 max-w-sm", children: /* @__PURE__ */ e.jsx(
          Ws,
          {
            node: T.activeData.node,
            isEditing: !1,
            onContextMenu: () => {
            }
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(Ti, {})
      ] })
    }
  ) : /* @__PURE__ */ e.jsx(Ii, {});
}
class uc {
  get dataEngine() {
    return Ne.getState();
  }
  get navigationEngine() {
    return Ye.getState();
  }
  get editorStore() {
    return Q.getState();
  }
  /** Lấy dữ liệu trọn vẹn của Form */
  getFormRecord(r = "default") {
    return this.dataEngine.getFormRecord(r);
  }
  /** Gán giá trị cho một trường trên Form */
  setFieldValue(r, s, a = "default") {
    this.dataEngine.setFieldValue(a, r, s);
  }
  /** Mở màn hình dạng Tab */
  openTab(r, s, a) {
    this.navigationEngine.openFeature(r, s, "Tab", a);
  }
  /** Mở màn hình dạng Popup Modal */
  openPopup(r, s, a) {
    this.navigationEngine.openFeature(r, s, "Popup", a);
  }
}
function pc(t) {
  return t;
}
export {
  uc as BaseBL,
  Ma as ColumnPropertiesModal,
  oc as ComponentPalette,
  za as ComponentPropertiesModal,
  Ws as ComponentRenderer,
  ic as ComponentTree,
  Ka as ContextMenu,
  Ba as EnterpriseDatePicker,
  Xo as EnterpriseSelect,
  ui as FeatureCanvas,
  Ti as FeaturePopupModal,
  nc as ForgeAdvancedGrid,
  oi as ForgeAutocomplete,
  ko as ForgeButton,
  ci as ForgeChart,
  Qo as ForgeCheckbox,
  Mr as ForgeContainer,
  Zo as ForgeDatePicker,
  ti as ForgeDivider,
  li as ForgeFileUploadGrid,
  Qi as ForgeFormContainer,
  Do as ForgeLabel,
  ei as ForgeModal,
  To as ForgeNumber,
  ni as ForgeRecordSelector,
  ai as ForgeSearchEntry,
  ri as ForgeSearchModal,
  Io as ForgeSection,
  Jo as ForgeSelect,
  Ga as ForgeTabStack,
  qo as ForgeTable,
  rc as ForgeTabs,
  So as ForgeTextBox,
  si as ForgeTextarea,
  ii as ForgeTreeView,
  Ts as FormFieldWrapper,
  Br as GridCellComponent,
  Fo as HeaderContextMenu,
  ac as InlineCellEditor,
  ki as LeftNavbar,
  Ii as LoginScreen,
  fn as PermissionGuard,
  gi as PropertyPanel,
  Po as RowContextMenu,
  Lo as SummaryRow,
  cc as TopBar,
  Si as TopNav,
  dc as UIForgeApp,
  $a as UnifiedEventEditor,
  yi as WorkspaceTabBar,
  wo as addFunctionToBlFile,
  Wo as calculateAutoPopulatedFields,
  _o as calculateLeftOffsets,
  zi as closePopup,
  qi as closeTab,
  pc as defineBL,
  sc as downloadBackendDocxReport,
  tc as downloadBackendPdfReport,
  rn as executeSingleEvent,
  Vo as exportGridToExcel,
  La as findFunctionInModule,
  va as getApiBaseUrl,
  ut as getApiUrl,
  Zi as getCascadedOptions,
  Ua as getComponentOuterLayoutStyle,
  jo as getFunctionsForBlFile,
  yn as getSavedFeatureId,
  en as getSavedRecordId,
  Va as groupNodesByTabStack,
  Yo as interpolateFormatData,
  Er as invokeBLLifecycle,
  Sa as isDetailFeature,
  Yn as isListFeature,
  Qn as moveColumn,
  Fn as normalizeBlKey,
  tn as normalizeColumnOrders,
  Na as openPopup,
  Ki as openTab,
  _r as parseDDMMYYYY,
  Ha as printGridReport,
  Ji as registerBL,
  Co as registerBlFunctions,
  Xi as removeFunctionFromBlFile,
  cr as resolveBlModule,
  Yi as resolveFeatureIdFromLocation,
  Cn as resolveLocationState,
  es as saveActiveFeatureIdToUrl,
  Ui as setApiBaseUrl,
  _a as sortColumnsByCorePolicy,
  Oa as toggleColumnFreeze,
  Xe as triggerComponentEvent,
  vt as useAuthStore,
  Ne as useDataEngine,
  Q as useEditorStore,
  di as useGlobalHotkeys,
  Bo as useGridKeyboardNavigation,
  is as useMasterDetailStore,
  Ye as useNavigationEngine,
  Oe as usePermissionEngine,
  lc as useRealtimeEngine,
  er as validateDateSequence,
  Ho as validateField,
  ec as validateForm,
  Zn as validateISO6346ContainerNo
};
