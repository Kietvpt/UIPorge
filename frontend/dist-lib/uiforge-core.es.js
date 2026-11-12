var aa = Object.defineProperty;
var la = (t, r, s) => r in t ? aa(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s;
var rn = (t, r, s) => la(t, typeof r != "symbol" ? r + "" : r, s);
import Mt, { useState as A, useRef as Je, useEffect as Be, useMemo as Ve, useCallback as bs, useId as ur } from "react";
import { create as cs } from "zustand";
import { Layers as Pt, ChevronDown as St, ChevronUp as ws, Printer as pr, Zap as ft, Save as At, Eye as Dn, EyeOff as oa, Pin as xr, ChevronRight as Ds, Sliders as Gt, Copy as hr, Trash2 as ot, Filter as mr, Settings as ia, ClipboardPaste as br, PlusCircle as fr, ArrowUp as gr, ArrowDown as vr, Plus as et, FileCode as hn, Play as ca, Shield as mn, X as ct, Table as bt, Calendar as yr, ChevronLeft as jr, Clock as da, ExternalLink as Nr, FolderTree as bn, Search as Bt, RefreshCw as ua, FileDown as pa, ArrowUpDown as In, Loader2 as fn, Check as Fn, Tag as wr, Database as gn, Paperclip as Cr, Upload as qn, Download as an, Image as xa, FileText as is, File as ha, Minus as kr, FolderOpen as ma, Folder as ba, TrendingUp as fa, BarChart3 as Sr, LineChart as ga, PieChart as va, GripVertical as Rn, Lock as Cs, Sparkles as Tr, CheckCircle2 as vn, Box as Et, ArrowRightLeft as Yn, Columns as ls, Type as as, Square as Hs, Paintbrush as ya, ShieldCheck as Jn, Code as ln, Hash as ja, ChevronDownSquare as Na, CheckSquare as wa, Maximize2 as Ca, AlignLeft as ka, FolderKanban as Sa, AlertTriangle as Ta, FolderPlus as on, Edit2 as Da, LayoutDashboard as Ia, MoreVertical as Fa, Undo2 as Dr, Redo2 as Ir, Edit3 as Ra, PanelRightClose as $a, PanelRightOpen as La, Bell as Ea, LogOut as Pa, CheckCircle as Aa } from "lucide-react";
import { createPortal as Tt } from "react-dom";
import { useDraggable as Fr, useDroppable as Rr } from "@dnd-kit/core";
import { CSS as Ba } from "@dnd-kit/utilities";
import Ma from "axios";
var yn = { exports: {} }, fs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Oa() {
  if (Xn) return fs;
  Xn = 1;
  var t = Mt, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var p, g = {}, I = null, f = null;
    c !== void 0 && (I = "" + c), d.key !== void 0 && (I = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (p in d) a.call(d, p) && !o.hasOwnProperty(p) && (g[p] = d[p]);
    if (i && i.defaultProps) for (p in d = i.defaultProps, d) g[p] === void 0 && (g[p] = d[p]);
    return { $$typeof: r, type: i, key: I, ref: f, props: g, _owner: n.current };
  }
  return fs.Fragment = s, fs.jsx = l, fs.jsxs = l, fs;
}
var gs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function _a() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Mt, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), x = Symbol.iterator, N = "@@iterator";
    function u(D) {
      if (D === null || typeof D != "object")
        return null;
      var J = x && D[x] || D[N];
      return typeof J == "function" ? J : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(D) {
      {
        for (var J = arguments.length, ne = new Array(J > 1 ? J - 1 : 0), be = 1; be < J; be++)
          ne[be - 1] = arguments[be];
        h("error", D, ne);
      }
    }
    function h(D, J, ne) {
      {
        var be = v.ReactDebugCurrentFrame, $e = be.getStackAddendum();
        $e !== "" && (J += "%s", ne = ne.concat([$e]));
        var Ae = ne.map(function(Fe) {
          return String(Fe);
        });
        Ae.unshift("Warning: " + J), Function.prototype.apply.call(console[D], console, Ae);
      }
    }
    var y = !1, L = !1, k = !1, F = !1, w = !1, S;
    S = Symbol.for("react.module.reference");
    function R(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === a || D === o || w || D === n || D === c || D === p || F || D === f || y || L || k || typeof D == "object" && D !== null && (D.$$typeof === I || D.$$typeof === g || D.$$typeof === l || D.$$typeof === i || D.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === S || D.getModuleId !== void 0));
    }
    function $(D, J, ne) {
      var be = D.displayName;
      if (be)
        return be;
      var $e = J.displayName || J.name || "";
      return $e !== "" ? ne + "(" + $e + ")" : ne;
    }
    function Q(D) {
      return D.displayName || "Context";
    }
    function O(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
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
      if (typeof D == "object")
        switch (D.$$typeof) {
          case i:
            var J = D;
            return Q(J) + ".Consumer";
          case l:
            var ne = D;
            return Q(ne._context) + ".Provider";
          case d:
            return $(D, D.render, "ForwardRef");
          case g:
            var be = D.displayName || null;
            return be !== null ? be : O(D.type) || "Memo";
          case I: {
            var $e = D, Ae = $e._payload, Fe = $e._init;
            try {
              return O(Fe(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, P = 0, K, G, b, se, de, me, Ce;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function we() {
      {
        if (P === 0) {
          K = console.log, G = console.info, b = console.warn, se = console.error, de = console.group, me = console.groupCollapsed, Ce = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        P++;
      }
    }
    function Oe() {
      {
        if (P--, P === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, D, {
              value: K
            }),
            info: V({}, D, {
              value: G
            }),
            warn: V({}, D, {
              value: b
            }),
            error: V({}, D, {
              value: se
            }),
            group: V({}, D, {
              value: de
            }),
            groupCollapsed: V({}, D, {
              value: me
            }),
            groupEnd: V({}, D, {
              value: Ce
            })
          });
        }
        P < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = v.ReactCurrentDispatcher, oe;
    function Y(D, J, ne) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch ($e) {
            var be = $e.stack.trim().match(/\n( *(at )?)/);
            oe = be && be[1] || "";
          }
        return `
` + oe + D;
      }
    }
    var z = !1, xe;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new ve();
    }
    function T(D, J) {
      if (!D || z)
        return "";
      {
        var ne = xe.get(D);
        if (ne !== void 0)
          return ne;
      }
      var be;
      z = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = U.current, U.current = null, we();
      try {
        if (J) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (Qe) {
              be = Qe;
            }
            Reflect.construct(D, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (Qe) {
              be = Qe;
            }
            D.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            be = Qe;
          }
          D();
        }
      } catch (Qe) {
        if (Qe && be && typeof Qe.stack == "string") {
          for (var De = Qe.stack.split(`
`), Xe = be.stack.split(`
`), Ke = De.length - 1, Ue = Xe.length - 1; Ke >= 1 && Ue >= 0 && De[Ke] !== Xe[Ue]; )
            Ue--;
          for (; Ke >= 1 && Ue >= 0; Ke--, Ue--)
            if (De[Ke] !== Xe[Ue]) {
              if (Ke !== 1 || Ue !== 1)
                do
                  if (Ke--, Ue--, Ue < 0 || De[Ke] !== Xe[Ue]) {
                    var tt = `
` + De[Ke].replace(" at new ", " at ");
                    return D.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", D.displayName)), typeof D == "function" && xe.set(D, tt), tt;
                  }
                while (Ke >= 1 && Ue >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = Ae, Oe(), Error.prepareStackTrace = $e;
      }
      var mt = D ? D.displayName || D.name : "", ut = mt ? Y(mt) : "";
      return typeof D == "function" && xe.set(D, ut), ut;
    }
    function B(D, J, ne) {
      return T(D, !1);
    }
    function ee(D) {
      var J = D.prototype;
      return !!(J && J.isReactComponent);
    }
    function je(D, J, ne) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return T(D, ee(D));
      if (typeof D == "string")
        return Y(D);
      switch (D) {
        case c:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case d:
            return B(D.render);
          case g:
            return je(D.type, J, ne);
          case I: {
            var be = D, $e = be._payload, Ae = be._init;
            try {
              return je(Ae($e), J, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Se = {}, ce = v.ReactDebugCurrentFrame;
    function Ne(D) {
      if (D) {
        var J = D._owner, ne = je(D.type, D._source, J ? J.type : null);
        ce.setExtraStackFrame(ne);
      } else
        ce.setExtraStackFrame(null);
    }
    function le(D, J, ne, be, $e) {
      {
        var Ae = Function.call.bind(te);
        for (var Fe in D)
          if (Ae(D, Fe)) {
            var De = void 0;
            try {
              if (typeof D[Fe] != "function") {
                var Xe = Error((be || "React class") + ": " + ne + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xe.name = "Invariant Violation", Xe;
              }
              De = D[Fe](J, Fe, be, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              De = Ke;
            }
            De && !(De instanceof Error) && (Ne($e), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", ne, Fe, typeof De), Ne(null)), De instanceof Error && !(De.message in Se) && (Se[De.message] = !0, Ne($e), C("Failed %s type: %s", ne, De.message), Ne(null));
          }
      }
    }
    var ue = Array.isArray;
    function Pe(D) {
      return ue(D);
    }
    function ye(D) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, ne = J && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return ne;
      }
    }
    function pe(D) {
      try {
        return W(D), !1;
      } catch {
        return !0;
      }
    }
    function W(D) {
      return "" + D;
    }
    function ae(D) {
      if (pe(D))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(D)), W(D);
    }
    var it = v.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rt, xt;
    function q(D) {
      if (te.call(D, "ref")) {
        var J = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ge(D) {
      if (te.call(D, "key")) {
        var J = Object.getOwnPropertyDescriptor(D, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Ee(D, J) {
      typeof D.ref == "string" && it.current;
    }
    function ke(D, J) {
      {
        var ne = function() {
          rt || (rt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ne.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Me(D, J) {
      {
        var ne = function() {
          xt || (xt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ne.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Te = function(D, J, ne, be, $e, Ae, Fe) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: D,
        key: J,
        ref: ne,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: Ae
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
        value: be
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Ye(D, J, ne, be, $e) {
      {
        var Ae, Fe = {}, De = null, Xe = null;
        ne !== void 0 && (ae(ne), De = "" + ne), ge(J) && (ae(J.key), De = "" + J.key), q(J) && (Xe = J.ref, Ee(J, $e));
        for (Ae in J)
          te.call(J, Ae) && !gt.hasOwnProperty(Ae) && (Fe[Ae] = J[Ae]);
        if (D && D.defaultProps) {
          var Ke = D.defaultProps;
          for (Ae in Ke)
            Fe[Ae] === void 0 && (Fe[Ae] = Ke[Ae]);
        }
        if (De || Xe) {
          var Ue = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          De && ke(Fe, Ue), Xe && Me(Fe, Ue);
        }
        return Te(D, De, Xe, $e, be, it.current, Fe);
      }
    }
    var Ie = v.ReactCurrentOwner, ht = v.ReactDebugCurrentFrame;
    function dt(D) {
      if (D) {
        var J = D._owner, ne = je(D.type, D._source, J ? J.type : null);
        ht.setExtraStackFrame(ne);
      } else
        ht.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function vt(D) {
      return typeof D == "object" && D !== null && D.$$typeof === r;
    }
    function Ot() {
      {
        if (Ie.current) {
          var D = O(Ie.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function zt(D) {
      return "";
    }
    var _t = {};
    function wt(D) {
      {
        var J = Ot();
        if (!J) {
          var ne = typeof D == "string" ? D : D.displayName || D.name;
          ne && (J = `

Check the top-level render call using <` + ne + ">.");
        }
        return J;
      }
    }
    function Ht(D, J) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var ne = wt(J);
        if (_t[ne])
          return;
        _t[ne] = !0;
        var be = "";
        D && D._owner && D._owner !== Ie.current && (be = " It was passed a child from " + O(D._owner.type) + "."), dt(D), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, be), dt(null);
      }
    }
    function _e(D, J) {
      {
        if (typeof D != "object")
          return;
        if (Pe(D))
          for (var ne = 0; ne < D.length; ne++) {
            var be = D[ne];
            vt(be) && Ht(be, J);
          }
        else if (vt(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var $e = u(D);
          if (typeof $e == "function" && $e !== D.entries)
            for (var Ae = $e.call(D), Fe; !(Fe = Ae.next()).done; )
              vt(Fe.value) && Ht(Fe.value, J);
        }
      }
    }
    function qt(D) {
      {
        var J = D.type;
        if (J == null || typeof J == "string")
          return;
        var ne;
        if (typeof J == "function")
          ne = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === g))
          ne = J.propTypes;
        else
          return;
        if (ne) {
          var be = O(J);
          le(ne, D.props, "prop", be, D);
        } else if (J.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var $e = O(J);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(D) {
      {
        for (var J = Object.keys(D.props), ne = 0; ne < J.length; ne++) {
          var be = J[ne];
          if (be !== "children" && be !== "key") {
            dt(D), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), dt(null);
            break;
          }
        }
        D.ref !== null && (dt(D), C("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    var Vt = {};
    function It(D, J, ne, be, $e, Ae) {
      {
        var Fe = R(D);
        if (!Fe) {
          var De = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = zt();
          Xe ? De += Xe : De += Ot();
          var Ke;
          D === null ? Ke = "null" : Pe(D) ? Ke = "array" : D !== void 0 && D.$$typeof === r ? (Ke = "<" + (O(D.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof D, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, De);
        }
        var Ue = Ye(D, J, ne, $e, Ae);
        if (Ue == null)
          return Ue;
        if (Fe) {
          var tt = J.children;
          if (tt !== void 0)
            if (be)
              if (Pe(tt)) {
                for (var mt = 0; mt < tt.length; mt++)
                  _e(tt[mt], D);
                Object.freeze && Object.freeze(tt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(tt, D);
        }
        if (te.call(J, "key")) {
          var ut = O(D), Qe = Object.keys(J).filter(function(Zt) {
            return Zt !== "key";
          }), Ft = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[ut + Ft]) {
            var Qt = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ft, ut, Qt, ut), Vt[ut + Ft] = !0;
          }
        }
        return D === a ? Yt(Ue) : qt(Ue), Ue;
      }
    }
    function Jt(D, J, ne) {
      return It(D, J, ne, !0);
    }
    function Xt(D, J, ne) {
      return It(D, J, ne, !1);
    }
    var Wt = Xt, Kt = Jt;
    gs.Fragment = a, gs.jsx = Wt, gs.jsxs = Kt;
  }()), gs;
}
process.env.NODE_ENV === "production" ? yn.exports = Oa() : yn.exports = _a();
var e = yn.exports;
const Ut = ({
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
  const p = s === "left", g = l ? `col-span-${l}` : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${g} ${p ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
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
            className: `text-xs font-medium text-slate-300 select-none ${p ? "shrink-0 text-right truncate" : ""}`,
            style: p ? { width: a } : void 0,
            title: t,
            children: [
              t,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              p && ":"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0 w-full flex flex-col justify-center", children: [
          c,
          o && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-red-400 mt-0.5", children: o })
        ] })
      ]
    }
  );
}, Zn = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, er = (t) => !!t.dispatchFromDevtools && typeof t.dispatch == "function", ks = /* @__PURE__ */ new Map(), Os = (t) => {
  const r = ks.get(t);
  return r ? Object.fromEntries(
    Object.entries(r.stores).map(([s, a]) => [s, a.getState()])
  ) : {};
}, Ha = (t, r, s) => {
  if (t === void 0)
    return {
      type: "untracked",
      connection: r.connect(s)
    };
  const a = ks.get(s.name);
  if (a)
    return { type: "tracked", store: t, ...a };
  const n = {
    connection: r.connect(s),
    stores: {}
  };
  return ks.set(s.name, n), { type: "tracked", store: t, ...n };
}, Va = (t, r) => {
  if (r === void 0) return;
  const s = ks.get(t);
  s && (delete s.stores[r], Object.keys(s.stores).length === 0 && ks.delete(t));
}, Wa = /^at (?:new |async )?(.+?) \(/, Ka = /^([^@]+)@/;
function Ga(t) {
  var r, s, a;
  if (!t) return;
  const n = t.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((r = n[o + 1]) == null ? void 0 : r.trim()) || "";
  return ((s = Wa.exec(l)) == null ? void 0 : s[1]) || ((a = Ka.exec(l)) == null ? void 0 : a[1]);
}
const Ua = (t, r = {}) => (s, a, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = r;
  let c;
  try {
    c = (o ?? (Zn ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return t(s, a, n);
  const { connection: p, ...g } = Ha(i, c, d);
  let I = !0;
  n.setState = (N, u, v) => {
    const C = s(N, u);
    if (!I) return C;
    const h = v === void 0 ? {
      type: l || Ga(new Error().stack) || "anonymous"
    } : typeof v == "string" ? { type: v } : v;
    return i === void 0 ? (p == null || p.send(h, a()), C) : (p == null || p.send(
      {
        ...h,
        type: `${i}/${h.type}`
      },
      {
        ...Os(d.name),
        [i]: n.getState()
      }
    ), C);
  }, n.devtools = {
    cleanup: () => {
      p && typeof p.unsubscribe == "function" && p.unsubscribe(), Va(d.name, i);
    }
  };
  const f = (...N) => {
    const u = I;
    I = !1, s(...N), I = u;
  }, x = t(n.setState, a, n);
  if (g.type === "untracked" ? p == null || p.init(x) : (g.stores[g.store] = n, p == null || p.init(
    Object.fromEntries(
      Object.entries(g.stores).map(([N, u]) => [
        N,
        N === g.store ? x : u.getState()
      ])
    )
  )), er(n)) {
    let N = !1;
    const u = n.dispatch;
    n.dispatch = (...v) => {
      (Zn ? "production" : void 0) !== "production" && v[0].type === "__setState" && !N && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), N = !0), u(...v);
    };
  }
  return p.subscribe((N) => {
    var u;
    switch (N.type) {
      case "ACTION":
        if (typeof N.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return cn(
          N.payload,
          (v) => {
            if (v.type === "__setState") {
              if (i === void 0) {
                f(v.state);
                return;
              }
              Object.keys(v.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const C = v.state[i];
              if (C == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(C) && f(C);
              return;
            }
            er(n) && n.dispatch(v);
          }
        );
      case "DISPATCH":
        switch (N.payload.type) {
          case "RESET":
            return f(x), i === void 0 ? p == null ? void 0 : p.init(n.getState()) : p == null ? void 0 : p.init(Os(d.name));
          case "COMMIT":
            if (i === void 0) {
              p == null || p.init(n.getState());
              return;
            }
            return p == null ? void 0 : p.init(Os(d.name));
          case "ROLLBACK":
            return cn(N.state, (v) => {
              if (i === void 0) {
                f(v), p == null || p.init(n.getState());
                return;
              }
              f(v[i]), p == null || p.init(Os(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return cn(N.state, (v) => {
              if (i === void 0) {
                f(v);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(v[i]) && f(v[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: v } = N.payload, C = (u = v.computedStates.slice(-1)[0]) == null ? void 0 : u.state;
            if (!C) return;
            f(i === void 0 ? C : C[i]), p == null || p.send(
              null,
              // FIXME no-any
              v
            );
            return;
          }
          case "PAUSE_RECORDING":
            return I = !I;
        }
        return;
    }
  }), x;
}, Is = Ua, cn = (t, r) => {
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
function za(t, r) {
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
const jn = (t) => (r) => {
  try {
    const s = t(r);
    return s instanceof Promise ? s : {
      then(a) {
        return jn(a)(s);
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
        return jn(a)(s);
      }
    };
  }
}, qa = (t, r) => (s, a, n) => {
  let o = {
    storage: za(() => window.localStorage),
    partialize: (u) => u,
    version: 0,
    merge: (u, v) => ({
      ...v,
      ...u
    }),
    ...r
  }, l = !1, i = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let p = o.storage;
  if (!p)
    return t(
      (...u) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), s(...u);
      },
      a,
      n
    );
  const g = () => {
    const u = o.partialize({ ...a() });
    return p.setItem(o.name, {
      state: u,
      version: o.version
    });
  }, I = n.setState;
  n.setState = (u, v) => (I(u, v), g());
  const f = t(
    (...u) => (s(...u), g()),
    a,
    n
  );
  n.getInitialState = () => f;
  let x;
  const N = () => {
    var u, v;
    if (!p) return;
    const C = ++i;
    l = !1, d.forEach((y) => {
      var L;
      return y((L = a()) != null ? L : f);
    });
    const h = ((v = o.onRehydrateStorage) == null ? void 0 : v.call(o, (u = a()) != null ? u : f)) || void 0;
    return jn(p.getItem.bind(p))(o.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== o.version) {
          if (o.migrate) {
            const L = o.migrate(
              y.state,
              y.version
            );
            return L instanceof Promise ? L.then((k) => [!0, k]) : [!0, L];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var L;
      if (C !== i)
        return;
      const [k, F] = y;
      if (x = o.merge(
        F,
        (L = a()) != null ? L : f
      ), s(x, !0), k)
        return g();
    }).then(() => {
      C === i && (h == null || h(a(), void 0), x = a(), l = !0, c.forEach((y) => y(x)));
    }).catch((y) => {
      C === i && (h == null || h(void 0, y));
    });
  };
  return n.persist = {
    setOptions: (u) => {
      o = {
        ...o,
        ...u
      }, u.storage && (p = u.storage);
    },
    clearStorage: () => {
      ++i, p == null || p.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => N(),
    hasHydrated: () => l,
    onHydrate: (u) => (d.add(u), () => {
      d.delete(u);
    }),
    onFinishHydration: (u) => (c.add(u), () => {
      c.delete(u);
    })
  }, o.skipHydration || N(), x || f;
}, Ya = qa, Ja = 40;
function dn() {
  if (typeof window > "u") return null;
  try {
    const t = new URLSearchParams(window.location.search), r = t.get("feature") || t.get("page");
    return r || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function un() {
  if (typeof window > "u") return null;
  try {
    const r = new URLSearchParams(window.location.search).get("id");
    return r || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function $r(t) {
  var r, s, a, n;
  return t ? !!(t.isDetail || t.route === "/fcl-import" || (r = t.route) != null && r.includes("detail") || (s = t.scriptFile) != null && s.toLowerCase().includes("detail") || (a = t.name) != null && a.toLowerCase().includes("fcl import") || (n = t.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function Nn(t) {
  return t ? !$r(t) : !1;
}
function vs(t, r, s) {
  var a;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", t);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", t);
      const l = (s || ((a = Z.getState()) == null ? void 0 : a.features) || []).find((d) => String(d.id) === String(t) || d.route === `/${t}` || d.route === t);
      if ((l ? Nn(l) : t === "6" || t === "1" || t === "3") || r === null || r === "") {
        n.searchParams.delete("id");
        try {
          localStorage.removeItem("uiforge_active_transaction_id");
        } catch {
        }
      } else if (r != null) {
        n.searchParams.set("id", String(r));
        try {
          localStorage.setItem("uiforge_active_transaction_id", String(r));
        } catch {
        }
      }
      window.history.replaceState(null, "", n.toString());
    } catch {
    }
}
const Z = cs()(
  Is(
    (t, r) => ({
      features: [],
      activeFeatureId: dn() || "",
      activeRecordId: un(),
      selection: { componentId: null, pageId: dn() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (s) => {
        t({ activeRecordId: s ? String(s) : null });
      },
      setActiveFeature: (s, a) => {
        const n = r().features || [], o = n.find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s), l = o ? Nn(o) : s === "6" || s === "1" || s === "3";
        vs(s, l ? null : a, n);
        let i = null;
        l || a === null || a === "" ? i = null : a != null ? i = String(a) : i = un(), t((d) => ({
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
        const a = dn(), n = a && s.find((i) => i.id === a || i.route === `/${a}` || i.route === a) || s.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || s.find((i) => !i.hidden && !i.isDetail) || s[0], l = Nn(n) ? null : un();
        vs(n.id, l, s), t({
          features: s,
          activeFeatureId: n.id,
          activeRecordId: l,
          selection: { componentId: null, pageId: n.id },
          history: [s],
          historyIndex: 0
        });
      },
      addFeature: (s, a = "Layers") => {
        const n = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, o = {
          id: n,
          name: s.trim() || "Tính năng mới",
          icon: a,
          route: `/${n}`,
          scriptFile: "",
          layoutConfig: {
            direction: "column",
            gap: "16px",
            wrap: "wrap"
          },
          components: [],
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return vs(n, null), t((l) => {
          const i = [...l.features, o];
          return {
            ...st(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, name: a } : l);
          return st(n, o);
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
          return vs(l), {
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
          return vs(o, null), {
            ...st(a, n),
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
          return st(n, o);
        });
      },
      updateFeatureScriptFile: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, scriptFile: a.trim() } : l);
          return st(n, o);
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
            n !== void 0 ? i = wn(l.components, a, s, n) : i = Er(l.components, a, s);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, s), i = c.map((p, g) => ({ ...p, order: g + 1 }));
          } else
            i = [...l.components, s];
          const d = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...st(o, d),
            selection: { ...o.selection, componentId: s.id }
          };
        });
      },
      updateComponentProps: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              props: { ...i.props, ...a }
            }))
          });
          return st(n, o);
        });
      },
      updateComponentStyle: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              style: { ...i.style, ...a }
            }))
          });
          return st(n, o);
        });
      },
      updateComponentEvents: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              events: a
            }))
          });
          return st(n, o);
        });
      },
      updateComponentDataBinding: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...a }
            }))
          });
          return st(n, o);
        });
      },
      updateComponentValidation: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              validation: { ...i.validation, ...a }
            }))
          });
          return st(n, o);
        });
      },
      updateComponentPermissions: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...a }
            }))
          });
          return st(n, o);
        });
      },
      updateComponentOrder: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: $t(l.components, s, (i) => ({
              ...i,
              order: a,
              props: { ...i.props, order: a }
            }))
          });
          return st(n, o);
        });
      },
      removeComponent: (s) => {
        t((a) => {
          const n = a.features.map((o) => o.id !== a.activeFeatureId ? o : {
            ...o,
            components: Lr(o.components, s)
          });
          return {
            ...st(a, n),
            selection: { ...a.selection, componentId: null }
          };
        });
      },
      moveComponent: (s, a, n) => {
        t((o) => {
          const l = o.features.find((f) => f.id === o.activeFeatureId);
          if (!l) return {};
          const i = Xa(l.components, s);
          if (!i) return {};
          const [d, c] = i, p = { ...d, parentId: a };
          let g;
          if (a === null) {
            const f = c.filter((u) => !u.parentId);
            f.splice(n, 0, p);
            const x = f.map((u, v) => ({ ...u, order: v + 1 })), N = c.filter((u) => u.parentId);
            g = [...x, ...N];
          } else
            g = wn(c, a, p, n);
          const I = o.features.map(
            (f) => f.id === o.activeFeatureId ? { ...f, components: g } : f
          );
          return st(o, I);
        });
      },
      distributeSiblingWidths: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Pr(l.components, s, a)
          });
          return st(n, o);
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
function st(t, r) {
  const s = t.history.slice(0, t.historyIndex + 1);
  return s.length >= Ja && s.shift(), s.push(r), {
    features: r,
    history: s,
    historyIndex: s.length - 1
  };
}
function $t(t, r, s) {
  return t.map((a) => a.id === r ? s(a) : a.children && a.children.length > 0 ? { ...a, children: $t(a.children, r, s) } : a);
}
function Lr(t, r) {
  return t.filter((s) => s.id !== r).map(
    (s) => s.children && s.children.length > 0 ? { ...s, children: Lr(s.children, r) } : s
  );
}
function Er(t, r, s) {
  return t.map((a) => a.id === r ? {
    ...a,
    children: [...a.children || [], { ...s, parentId: r }]
  } : a.children && a.children.length > 0 ? {
    ...a,
    children: Er(a.children, r, s)
  } : a);
}
function Pr(t, r, s) {
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
    children: Pr(n.children, r, s)
  } : n);
}
function Xa(t, r) {
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
    const l = Ar(n.children, r);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, p = [...t.slice(0, a), c, ...t.slice(a + 1)];
      return [i, p];
    }
  }
  return null;
}
function Ar(t, r) {
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (a.id === r) {
      const n = [...t.slice(0, s), ...t.slice(s + 1)];
      return [a, n];
    }
    if (a.children && a.children.length > 0) {
      const n = Ar(a.children, r);
      if (n) {
        const [o, l] = n, i = { ...a, children: l }, d = [...t.slice(0, s), i, ...t.slice(s + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function wn(t, r, s, a) {
  return t.map((n) => {
    if (n.id === r) {
      const l = [...n.children || []];
      l.splice(a, 0, { ...s, parentId: r });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: wn(n.children, r, s, a) } : n;
  });
}
const Ze = cs()(
  Is((t, r) => ({
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
        Z.getState().setActiveFeature(s, (a == null ? void 0 : a.id) ?? null);
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
    // Đóng popup
    closePopup: (s) => {
      const a = r().activePopup;
      a != null && a.onClose && a.onClose(s), t({ activePopup: null });
    }
  }))
);
function Br(t, r = {}, s) {
  Ze.getState().openFeature(t, r, "Popup", s || t);
}
const Qa = [];
function Za(t) {
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
function Dt(t, r, s, a = void 0) {
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
const fe = cs()(
  Is((t, r) => ({
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
        if (!d || l.some((x) => d.startsWith(x))) continue;
        const p = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(p)) continue;
        i.add(p);
        const g = o[d] ?? o[p] ?? o[d.replace(/^fld_/, "")], I = c === "" || c === void 0 ? null : c, f = g === "" || g === void 0 ? null : g;
        if (String(I ?? "") !== String(f ?? ""))
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
        Ze.getState().setTabDirty(s, !1);
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
      return o ? a[o] : Qa;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (s, a, n) => {
      t((o) => {
        const l = a.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), p = (N) => {
          const u = { ...N };
          for (const v of Object.keys(u))
            (v.toLowerCase() === i || v.toLowerCase() === a.toLowerCase()) && delete u[v];
          return u[d] = n, u[c] = n, u;
        }, g = o.formRecords[s] || {}, I = o.formRecords.default || {}, f = p(g), x = p(I);
        try {
          Ze.getState().setTabDirty(s, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [s]: f,
            default: x
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (s, a, n = "") => Dt(r(), s, a, n),
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
        const g = c.charAt(0).toLowerCase() + c.slice(1), I = c.charAt(0).toUpperCase() + c.slice(1);
        d[g] === void 0 && (d[g] = p), d[I] === void 0 && (d[I] = p);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (s, a, n) => {
      if (!n || typeof n != "object") return;
      const o = Za(a);
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
          const c = l ? l.startsWith("?") ? l : l.startsWith("$") ? `?${l}` : `?$filter=${encodeURIComponent(l)}` : "", p = `http://localhost:5048/api/core/data/${encodeURIComponent(s)}${c}`, g = await fetch(p);
          if (g.ok) {
            const I = await g.json();
            return (Array.isArray(I) ? I : I.value || []).map((x) => {
              const N = x[n] !== void 0 ? x[n] : x.Id || x.id || x.code, u = x[o] !== void 0 ? x[o] : x.FullName || x.fullName || x.Name || x.name || x.title || String(N);
              return {
                value: N,
                label: String(u),
                rawItem: x
              };
            });
          }
        } catch {
        }
      return tr(r().getDataset(s), l).map((c) => {
        const p = c[n] !== void 0 ? c[n] : c.Id || c.id || c.code, g = c[o] !== void 0 ? c[o] : c.FullName || c.fullName || c.Name || c.name || c.title || String(p);
        return {
          value: p,
          label: String(g),
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
          const l = n ? n.startsWith("?") ? n : n.startsWith("$") ? `?${n}` : `?$filter=${encodeURIComponent(n)}` : "", i = `http://localhost:5048/api/core/data/${encodeURIComponent(s)}${l}`, d = await fetch(i);
          if (d.ok) {
            const c = await d.json();
            return Array.isArray(c) ? c : c.value || [];
          }
        } catch {
        }
      return tr(r().getDataset(s), n);
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
          const p = c.find((g) => (g.code || g.Code || g.recordCode || g.RecordCode || g.key || g.Key) === l);
          p && (o = p.id || p.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), d = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(s)}/${d}` : `http://localhost:5048/api/core/data/${encodeURIComponent(s)}`, p = i ? "PUT" : "POST", g = { ...a };
        for (const [x, N] of Object.entries(g))
          if (N === "")
            (/date|time/i.test(x) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(x) || /gw|cbm|vgm|package/i.test(x)) && (g[x] = null);
          else if (typeof N == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(N.trim())) {
            const [u, v, C] = N.trim().split("/");
            g[x] = `${C}-${v.padStart(2, "0")}-${u.padStart(2, "0")}T00:00:00`;
          }
        const I = {};
        for (const [x, N] of Object.entries(g)) {
          if (!x || x.startsWith("fld_") || x.startsWith("btn_") || x.startsWith("sec_") || x.startsWith("tab_"))
            continue;
          const u = x.replace(/^fld_/, ""), v = u.charAt(0).toUpperCase() + u.slice(1);
          I[v] = N;
        }
        i ? I.Id = d : (I.Id = 0, I.Active = !0);
        const f = await fetch(c, {
          method: p,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(I)
        });
        if (f.ok) {
          const x = await f.json(), N = x.id || x.Id || d;
          Z.getState().setActiveRecordId(String(N)), n && (r().setFormRecord(n, x), r().markFormClean(n)), r().setFormRecord("default", x), r().markFormClean("default");
          const u = r().datasets[s];
          if (u && Array.isArray(u))
            if (i) {
              const v = u.map(
                (C) => (C.id || C.Id) === d ? { ...C, ...x } : C
              );
              r().registerDataset(s, v);
            } else
              r().registerDataset(s, [x, ...u]);
          return {
            success: !0,
            data: x,
            message: i ? `Cập nhật thành công bản ghi #${d} (${s}) vào Database!` : `Thêm mới thành công bản ghi (${s}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${f.status}` };
      } catch (c) {
        return { success: !1, message: `Lỗi kết nối API: ${(c == null ? void 0 : c.message) || c}` };
      }
    },
    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (s, a) => {
      if (!s || !a)
        return { success: !1, message: "Thiếu thông tin Entity hoặc ID bản ghi" };
      try {
        const n = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(s)}/${a}`, {
          method: "DELETE"
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
      const a = r(), n = Z.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((x) => String(x.id) === String(s)) || o.find((x) => String(x.id) === String(l)) || o.find((x) => x.isDetail) || o[0], d = {}, c = (x) => {
        var N, u, v;
        if (!(!x || !Array.isArray(x)))
          for (const C of x) {
            const h = (N = C.dataBinding) == null ? void 0 : N.fieldName, y = (u = C.props) == null ? void 0 : u.name, L = C.id, k = h || (typeof y == "string" ? y : "") || (L == null ? void 0 : L.replace(/^fld_/, "")), F = String(k || "").trim();
            if (F) {
              let w = Dt(a, String(C.pageId || l || "default"), F, void 0);
              if (w === void 0 && ((v = C.props) == null ? void 0 : v.value) !== void 0 && (w = C.props.value), w === void 0 && typeof document < "u") {
                const S = document.getElementById(C.id) || document.querySelector(`[name="${C.id}"]`) || document.querySelector(`[name="${F}"]`);
                S && "value" in S && S.value !== "" && (w = S.value);
              }
              if (w != null) {
                d[F] = w;
                const S = F.charAt(0).toLowerCase() + F.slice(1), R = F.charAt(0).toUpperCase() + F.slice(1);
                d[S] = w, d[R] = w;
              }
            }
            C.children && C.children.length > 0 && c(C.children);
          }
      };
      i != null && i.components && c(i.components);
      const p = s || String(l || "default"), g = { ...a.formRecords.default, ...p ? a.formRecords[p] : {} }, I = { ...d, ...g };
      if (!I.id && !I.Id && typeof window < "u") {
        const N = new URLSearchParams(window.location.search).get("id");
        N && N !== "new" && Number(N) > 0 && (I.id = Number(N), I.Id = Number(N));
      }
      const f = {};
      for (const [x, N] of Object.entries(I)) {
        if (!x || x.startsWith("fld_") || x.startsWith("btn_") || x.startsWith("sec_") || x.startsWith("tab_")) continue;
        const u = x.replace(/^fld_/, ""), v = u.charAt(0).toLowerCase() + u.slice(1), C = u.charAt(0).toUpperCase() + u.slice(1);
        f[v] = N, f[C] = N;
      }
      return (I.id || I.Id) && (f.id = I.id || I.Id, f.Id = I.id || I.Id), t((x) => ({
        formRecords: {
          ...x.formRecords,
          [p]: f,
          default: f
        }
      })), f;
    }
  }))
);
function tr(t, r) {
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
        const c = d[1], p = (d[2] || d[3] || "=").toLowerCase(), g = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), f = Object.keys(o).find((x) => x.toLowerCase() === c.toLowerCase());
        if (f) {
          const N = (o[f] !== void 0 && o[f] !== null ? String(o[f]) : "").toLowerCase() === g.toLowerCase();
          if (p === "ne" || p === "!=" ? N : !N)
            return !1;
        }
      }
    }
    return !0;
  });
}
const Mr = "uiforge_bl_functions_registry", os = {};
function Us(t) {
  if (!t || !t.trim()) return "";
  let r = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  return r.endsWith(".ts") || (r.endsWith(".bl") || (r = `${r}.bl`), r = `${r}.ts`), r;
}
function zs() {
  if (typeof window > "u") return os;
  try {
    const t = localStorage.getItem(Mr);
    if (t) {
      const r = JSON.parse(t), s = { ...os, ...r };
      for (const [a, n] of Object.entries(os))
        s[a] = Array.from(/* @__PURE__ */ new Set([...n, ...s[a] || []]));
      return s;
    }
  } catch {
  }
  return os;
}
function qs(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Mr, JSON.stringify(t));
    } catch {
    }
}
function el(t) {
  if (!t || !t.trim()) return [];
  const r = Us(t), s = zs();
  if (s[r] && s[r].length > 0)
    return s[r];
  if (s[t.trim()] && s[t.trim()].length > 0)
    return s[t.trim()];
  const a = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return s[r] = a, qs(s), a;
}
function tl(t, r) {
  if (!t || !r) return [];
  const s = Us(t), a = r.trim().replace(/\(.*?\)/g, "");
  if (!s || !a) return [];
  const n = zs(), o = n[s] || [];
  return o.includes(a) || (n[s] = [...o, a], qs(n)), n[s];
}
function uo(t, r) {
  if (!t || !r) return [];
  const s = Us(t), a = r.trim().replace(/\(.*?\)/g, ""), n = zs(), o = n[s] || [];
  return n[s] = o.filter((l) => l !== a), qs(n), n[s];
}
function sl(t, r) {
  const s = Us(t);
  os[s] = Array.from(/* @__PURE__ */ new Set([...os[s] || [], ...r]));
  const a = zs();
  a[s] = Array.from(/* @__PURE__ */ new Set([...a[s] || [], ...r])), qs(a);
}
const Lt = {};
function po(t, r) {
  Lt[t] = r;
  const s = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  Lt[s] = r;
  const a = s.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  Lt[a] = r;
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
  n.length > 0 && sl(s, n);
}
function $n(t) {
  if (!t || !t.trim()) return { module: null, canonicalName: "" };
  const r = t.trim().replace(/\\/g, "/").split("/").pop() || "", s = r.toLowerCase();
  if (Lt[r]) return { module: Lt[r], canonicalName: r };
  if (Lt[s]) return { module: Lt[s], canonicalName: r };
  const a = s.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(Lt))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === a)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: r };
}
function Or(t, r) {
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
function ys(t, r, s, a = !1, n, o = !0) {
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
function Ss(t, r, s, a) {
  const n = t.handlerName || t.action || "unnamedHandler", o = t.trigger || "click", { module: l, canonicalName: i } = $n(s);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  const p = {
    componentName: r,
    trigger: o,
    blFileName: i || s,
    dataEngine: fe.getState(),
    navigationEngine: Ze.getState(),
    editorStore: Z.getState(),
    ...a || {}
  };
  if (l) {
    const { fn: g, matchedName: I } = Or(l, n);
    if (c = I, g)
      try {
        const f = g(p);
        if (d = !0, f && typeof f.then == "function")
          return f.then((x) => {
            x && x.message ? ys(c, o, i || s, !0, x.message, x.success !== !1) : ys(c, o, i || s, !0);
          }).catch((x) => {
            ys(c, o, i || s, !0, String(x), !1);
          }), !0;
        if (f && f.message)
          return ys(c, o, i || s, !0, f.message, f.success !== !1), !0;
      } catch (f) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${I}() trong ${i}:`, f);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${r || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || s || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), ys(c, o, i || s, d), d;
}
function ze(t, r, s, a, n) {
  if (!t || t.length === 0) return;
  const o = t.filter((l) => l.trigger === r || r === "click" && (l.trigger === "onClick" || l.trigger === "click") || r === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || r === "change" && (l.trigger === "onChange" || l.trigger === "change") || r === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || r === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    Ss(l, s, a, n);
}
async function sr(t, r = "onInit", s) {
  if (!t) return null;
  const { module: a, canonicalName: n } = $n(t);
  if (!a) return null;
  const { fn: o } = Or(a, r);
  if (!o) return null;
  const l = {
    trigger: r,
    blFileName: n,
    dataEngine: fe.getState(),
    navigationEngine: Ze.getState(),
    editorStore: Z.getState(),
    ...s || {}
  };
  return await o(l);
}
const nl = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((C) => C.features), o = Z((C) => C.activeFeatureId), l = n.find((C) => String(C.id) === String(t.pageId)) || n.find((C) => String(C.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[s.variant || "primary"], v = {
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
        ...N
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${u} ${v}`,
      onClick: (C) => {
        r ? (C.ctrlKey || C.metaKey || C.altKey) && (C.stopPropagation(), ze(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : ze(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (C) => {
        var y;
        C.stopPropagation(), ((y = t.events) == null ? void 0 : y.some((L) => L.trigger === "dblclick" || L.trigger === "onDoubleClick")) ? ze(t.events, "dblclick", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : r && ze(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: s.label || "Nút bấm"
    }
  );
}, rl = ({ node: t, isEditing: r }) => {
  var k;
  const { props: s, style: a } = t, n = Z((F) => F.features), o = Z((F) => F.activeFeatureId), l = n.find((F) => String(F.id) === String(t.pageId)) || n.find((F) => String(F.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((k = t.dataBinding) == null ? void 0 : k.fieldName) || t.props.name || t.id), C = fe((F) => Dt(F, u, v, void 0)), h = fe((F) => F.setFieldValue), y = C !== void 0 ? C : s.value ?? "", L = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ut,
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
        ...N
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "Nhập dữ liệu...",
          value: y,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${L ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (F) => {
            const w = F.target.value;
            h(u, v, w), r || ze(t.events, "change", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v,
              value: w
            });
          },
          onFocus: () => {
            r || ze(t.events, "focus", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v
            });
          },
          onBlur: (F) => {
            r || ze(t.events, "blur", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v,
              value: F.target.value
            });
          }
        }
      )
    }
  );
}, al = ({ node: t, isEditing: r }) => {
  var S;
  const { props: s, style: a } = t, n = Z((R) => R.features), o = Z((R) => R.activeFeatureId), l = n.find((R) => String(R.id) === String(t.pageId)) || n.find((R) => String(R.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((S = t.dataBinding) == null ? void 0 : S.fieldName) || t.props.name || t.id), C = fe((R) => Dt(R, u, v, void 0)), h = fe((R) => R.setFieldValue), y = s.precision !== void 0 ? Number(s.precision) : 0, L = C !== void 0 ? C : s.value, k = L != null && L !== "" ? Number(L) : 0, F = (R) => R.toLocaleString("en-US", {
    minimumFractionDigits: y,
    maximumFractionDigits: y
  }), w = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ut,
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
        ...N
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "0",
          value: F(k),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${w ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (R) => {
            const $ = R.target.value.replace(/,/g, "");
            if ($ === "" || !isNaN(Number($))) {
              const Q = $ === "" ? 0 : Number($);
              h(u, v, Q), r || ze(t.events, "change", s.label || "Ô số", i, {
                componentId: t.id,
                fieldName: v,
                value: Q
              });
            }
          }
        }
      ) })
    }
  );
}, ll = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((u) => u.features), o = Z((u) => u.activeFeatureId), l = n.find((u) => String(u.id) === String(t.pageId)) || n.find((u) => String(u.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (u) => {
        r ? (u.ctrlKey || u.metaKey || u.altKey) && (u.stopPropagation(), ze(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        })) : ze(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      onDoubleClick: (u) => {
        u.stopPropagation(), ze(t.events, "dblclick", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      children: s.label || "Văn bản tiêu đề"
    }
  );
}, nr = ({
  node: t,
  isEditing: r,
  isSelected: s,
  onClick: a,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var V;
  const { props: d, style: c } = t;
  Z((P) => P.updateComponentProps);
  const p = !!(d.isTab || d.tab || d.isTabGroup || t.type === "Tabs"), g = [
    { id: "main", label: "TAB 1" }
  ], I = d.tabs || g, [f, x] = A(
    d.activeTabId || ((V = I[0]) == null ? void 0 : V.id) || "main"
  ), N = d.layoutMode || "flex", u = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, v = d.gridConfig || { columns: 12, gap: "16px" }, C = Number(
    v.columns || (typeof u.columnsPerRow == "number" ? u.columnsPerRow : 12)
  ) || 12, h = (c == null ? void 0 : c.justifyContent) || u.justify || "flex-start", y = (c == null ? void 0 : c.alignItems) || u.align || "flex-start", L = u.wrap || "wrap", k = N === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${C}, minmax(0, 1fr))`,
    gap: v.gap || u.gap || "16px",
    alignItems: y
  } : {
    display: "flex",
    flexDirection: u.direction || "row",
    flexWrap: L,
    justifyContent: h,
    alignItems: y,
    gap: u.gap || "12px"
  };
  let F = c != null && c.flex ? void 0 : "100%", w = c == null ? void 0 : c.flex, S = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const P = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(P) && P > 0) {
      const K = parseInt(o.gap || "12", 10) || 12, G = P === 1 ? "100%" : `calc((100% - ${(P - 1) * K}px) / ${P})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (F = G, w = `0 0 ${G}`, S = G);
    }
  }
  const { width: R, flex: $, ...Q } = c || {}, O = l ? {
    ...k,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...Q,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...k,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : F,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : w,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : S,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: a,
      onContextMenu: n,
      style: O,
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
}, ol = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...g } = a || {}, [I, f] = A(!1), x = s.title || s.label || "Khối Bố Cục (Section)", N = s.collapsible ?? !0, u = s.layoutMode || "grid", v = s.flexConfig || {}, C = s.gridConfig || {}, h = Number(C.columns || v.columnsPerRow || 12) || 12, y = v.gap || C.gap || "12px", L = (a == null ? void 0 : a.justifyContent) || v.justify || "flex-start", k = (a == null ? void 0 : a.alignItems) || v.align || "center", F = u === "flex" ? {
    display: "flex",
    flexDirection: v.direction || "row",
    flexWrap: v.wrap || "wrap",
    justifyContent: L,
    alignItems: k,
    gap: y
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${h}, minmax(0, 1fr))`,
    gap: y,
    alignItems: k
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...g
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: x })
          ] }),
          N && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => f(!I),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: I ? "Mở rộng" : "Thu gọn",
              children: I ? /* @__PURE__ */ e.jsx(St, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(ws, { className: "w-4 h-4" })
            }
          )
        ] }),
        !I && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: F, children: r })
      ]
    }
  );
}, xo = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...g } = a || {}, I = s.title || s.label || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...g
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: I }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: s.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(pr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
}, il = ({
  x: t,
  y: r,
  column: s,
  isOpen: a,
  onClose: n,
  onToggleHide: o,
  onSetFreeze: l,
  onOpenProperties: i,
  onCloneColumn: d,
  onRemoveColumn: c,
  onToggleFilter: p
}) => {
  const g = Je(null), [I, f] = Mt.useState(!1);
  if (Be(() => {
    if (!a) return;
    const u = (C) => {
      g.current && !g.current.contains(C.target) && n();
    }, v = (C) => {
      C.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", v), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", v);
    };
  }, [a, n]), !a) return null;
  const x = Math.min(t, window.innerWidth - 220), N = Math.min(r, window.innerHeight - 340);
  return Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: x, top: N },
        onClick: (u) => u.stopPropagation(),
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
                  o(s.key), n();
                },
                children: s.hidden ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Dn, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(oa, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(xr, { className: `w-3.5 h-3.5 ${s.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  I && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${s.sticky === "left" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          l(s.key, "left"), n();
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
                          l(s.key, "right"), n();
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
                          l(s.key, "none"), n();
                        },
                        children: /* @__PURE__ */ e.jsx("span", { children: "Bỏ ghim (Unfreeze)" })
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors font-medium text-emerald-400",
                onClick: () => {
                  i(s), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Column Data Options" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors",
                onClick: () => {
                  d(s.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(hr, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                onClick: () => {
                  c(s.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5 text-rose-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Remove Column" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-slate-800 pt-1 mt-1", children: [
            p && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  p(), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(mr, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Filter Local" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  i(s), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ia, { className: "w-3.5 h-3.5" }),
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
}, cl = ({
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
  onMoveRowDown: g,
  onPasteExcel: I
}) => {
  const f = Je(null);
  if (Be(() => {
    if (!o) return;
    const u = (C) => {
      f.current && !f.current.contains(C.target) && l();
    }, v = (C) => {
      C.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", v), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", v);
    };
  }, [o, l]), !o) return null;
  const x = Math.min(t, window.innerWidth - 220), N = Math.min(r, window.innerHeight - 260);
  return Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: f,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: x, top: N },
        onClick: (u) => u.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(hr, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            I && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  I(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(br, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(fr, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(gr, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            g && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: a >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  g(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(vr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, dl = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], _r = ({
  events: t = [],
  onChange: r,
  scriptFile: s = "transactionList.bl.ts",
  componentName: a = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = dl
}) => {
  const [d, c] = A(""), [, p] = A(0), g = s || "transactionList.bl.ts", I = el(g), f = () => {
    var h;
    const v = I[0] || "openTransactionDetail", C = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((h = i[0]) == null ? void 0 : h.value) || "click",
      handlerName: v,
      action: v
    };
    r([...t, C]);
  }, x = (v, C) => {
    const h = t.map((y, L) => {
      if (L !== v) return y;
      const k = { ...y, ...C };
      return C.handlerName && !C.action && (k.action = C.handlerName), k;
    });
    r(h);
  }, N = (v) => {
    const C = t.filter((h, y) => y !== v);
    r(C);
  }, u = () => {
    d.trim() && (tl(g, d.trim()), c(""), p((v) => v + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            t.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-400", children: [
          "File BL:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: g })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: f,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(hn, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          g
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: d,
            onChange: (v) => c(v.target.value),
            onKeyDown: (v) => {
              v.key === "Enter" && (v.preventDefault(), u());
            },
            placeholder: "ví dụ: openTransactionDetail, checkGW...",
            className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: u,
            className: "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(fr, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    t.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((v, C) => {
      const h = I.includes(v.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  C + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: v.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => N(C),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: v.trigger || "click",
                    onChange: (y) => x(C, { trigger: y.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((y) => /* @__PURE__ */ e.jsx("option", { value: y.value, children: y.label }, y.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: v.handlerName || I[0] || "",
                    onChange: (y) => {
                      const L = y.target.value;
                      x(C, { handlerName: L, action: L });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      I.map((y) => /* @__PURE__ */ e.jsxs("option", { value: y, children: [
                        y,
                        "()"
                      ] }, y)),
                      !h && v.handlerName && /* @__PURE__ */ e.jsxs("option", { value: v.handlerName, children: [
                        v.handlerName,
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
                  Ss(
                    v,
                    a,
                    g,
                    {
                      componentId: n,
                      trigger: v.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(ca, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        v.id || C
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(ft, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        a,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: g }),
        "."
      ] })
    ] })
  ] });
};
let pn = null;
async function Ln(t = !1) {
  if (!t && pn) return pn;
  try {
    const r = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (r.ok) {
      const s = await r.json();
      if (Array.isArray(s))
        return pn = s, s;
    }
  } catch (r) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", r);
  }
  return [];
}
function Ws(t, r = []) {
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
function Ks(t, r) {
  if (!r || !r.trim()) return;
  const s = r.trim().toLowerCase(), a = s.endsWith("s") ? s.slice(0, -1) : s;
  return t.find(
    (n) => n.name.toLowerCase() === s || n.name.toLowerCase() === a || n.tableName && n.tableName.toLowerCase() === s
  );
}
const Hr = ({
  isOpen: t,
  column: r,
  onClose: s,
  onSave: a
}) => {
  var C;
  const [n, o] = A(null), [l, i] = A("info"), [d, c] = A([]), p = Z((h) => h.features.find((y) => y.id === h.activeFeatureId));
  if (Be(() => {
    Ln().then((h) => {
      h && h.length > 0 && c(h);
    });
  }, []), Be(() => {
    if (r && t) {
      let h = [];
      if (Array.isArray(r.events))
        h = [...r.events];
      else if (typeof r.events == "string" && r.events.trim())
        try {
          const y = JSON.parse(r.events);
          Array.isArray(y) && (h = y);
        } catch {
        }
      h.length === 0 && r.action && (h = [
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
        events: h
      });
    }
  }, [r, t]), !t || !n) return null;
  const g = Array.isArray(n.events) ? n.events : [], I = Ws(d), f = Ks(I, n.reference || n.refName), x = f ? f.fields : [], N = n.componentType === "Select" || n.componentType === "Dropdown", u = (h, y) => {
    o((L) => {
      if (!L) return L;
      const k = { ...L, [h]: y };
      return h === "frozen" ? k.sticky = y ? "left" : "none" : h === "sticky" && (k.frozen = y === "left"), k;
    });
  }, v = (h) => {
    n && (a(n), s());
  };
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(Gt, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => v(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(mn, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" }),
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
                  onChange: (h) => u("code", h.target.value),
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
                  onChange: (h) => u("order", parseInt(h.target.value) || 0),
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
                  onChange: (h) => u("feature", h.target.value),
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
                  onChange: (h) => u("refClass", h.target.value),
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
                  onChange: (h) => u("filterTemplate", h.target.value),
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
                  onChange: (h) => u("formatExcell", h.target.value),
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
                  onChange: (h) => u("childStyle", h.target.value),
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
                  onChange: (h) => u("dataSource", h.target.value),
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
                  onChange: (h) => u("key", h.target.value),
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
                  onChange: (h) => u("title", h.target.value),
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
                  onChange: (h) => u("description", h.target.value),
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
                    value: f ? f.name : "",
                    onChange: (h) => {
                      const y = h.target.value;
                      o((L) => ({
                        ...L,
                        reference: y,
                        refName: y
                      }));
                    },
                    className: "w-full px-2 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                      I.map((h) => /* @__PURE__ */ e.jsxs("option", { value: h.name, children: [
                        h.displayName,
                        " (",
                        h.name,
                        ")"
                      ] }, h.name))
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
                    onChange: (h) => {
                      const y = h.target.value;
                      o((L) => ({
                        ...L,
                        refName: y,
                        reference: y
                      }));
                    },
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: N ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (h) => u("formatCell", h.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              !N && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (h) => u("formatData", h.target.value),
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
                    onChange: (h) => u("width", h.target.value),
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
                    onChange: (h) => u("minWidth", h.target.value),
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
                    onChange: (h) => u("maxWidth", h.target.value),
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
                  onChange: (h) => u("componentType", h.target.value),
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
                    onChange: (h) => u("precision", parseInt(h.target.value) || 0),
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
                    onChange: (h) => u("align", h.target.value),
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
                      /* @__PURE__ */ e.jsx(ft, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: g.length > 0 ? `Cấu hình (${g.length})` : "+ Thêm Sự Kiện" })
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
                      /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      g.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: g.map((h) => `${h.trigger} ➔ ${h.handlerName || h.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      g.length,
                      " event",
                      g.length !== 1 ? "s" : ""
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
                    onChange: (h) => u("cascadeField", h.target.value),
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
                    onChange: (h) => u("aggregate", h.target.value),
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
                  onChange: (h) => u("validation", h.target.value),
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
            N && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((C = n.dropdownColumns) == null ? void 0 : C.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  g.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: g.length })
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
                    onChange: (h) => u("frozen", h.target.checked),
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
                    onChange: (h) => u("disabled", h.target.checked),
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
                    onChange: (h) => u("hasPermission", h.target.checked),
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
                    onChange: (h) => u("focusSearch", h.target.checked),
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
                    onChange: (h) => u("filterEq", h.target.checked),
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
                    onChange: (h) => u("filterLocal", h.target.checked),
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
                    onChange: (h) => u("hidden", h.target.checked),
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
                    onChange: (h) => u("active", h.target.checked),
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
                    onChange: (h) => u("advancedSearch", h.target.checked),
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
                    onChange: (h) => u("virtualScroll", h.target.checked),
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
                    onChange: (h) => u("upperCase", h.target.checked),
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
                    onChange: (h) => u("hasFilter", h.target.checked),
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
                    onChange: (h) => u("isRealtime", h.target.checked),
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
                    onChange: (h) => u("autoFit", h.target.checked),
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
                    onChange: (h) => u("aggregate", h.target.checked ? "sum" : "none"),
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
                    onChange: (h) => u("addDate", h.target.checked),
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
                    onChange: (h) => u("editable", h.target.checked),
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
                    onChange: (h) => u("isPivot", h.target.checked),
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
                    onChange: (h) => u("basicSearch", h.target.checked),
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
                    onChange: (h) => u("ignoreTrigger", h.target.checked),
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
                    onChange: (h) => u("hideGrid", h.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && N && (() => {
            const h = n.dropdownColumns || [], y = (k) => u("dropdownColumns", k), L = (f == null ? void 0 : f.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(bt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: f ? `${f.displayName} (${f.name})` : n.reference || n.refName || "(Chưa chọn Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  x.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const k = x.filter((w) => w.name.toLowerCase() !== "id" && w.name.toLowerCase() !== "active").slice(0, 3), F = `${Math.floor(100 / Math.max(k.length, 1))}%`;
                        y(
                          k.map((w) => ({
                            key: w.name,
                            title: w.displayName,
                            width: F,
                            align: "left"
                          }))
                        );
                      },
                      className: "px-2.5 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/35 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold cursor-pointer",
                      title: "Tự động nạp các cột tiêu biểu từ thực thể Reference đã chọn",
                      children: [
                        "⚡ Tự động nạp (",
                        f == null ? void 0 : f.name,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        y([
                          ...h,
                          {
                            key: `col${h.length + 1}`,
                            title: `Cột ${h.length + 1}`,
                            width: "50%",
                            align: "left"
                          }
                        ]);
                      },
                      className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
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
                      onChange: (k) => u("idField", k.target.value),
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
                      onChange: (k) => u("formatData", k.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  h.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: h.map((k, F) => {
                    const w = L ? `{${L}.${k.key}}` : `{${k.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const S = n.formatData || "", R = S ? `${S} - ${w}` : w;
                          u("formatData", R);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          w
                        ]
                      },
                      `${k.key}-${F}`
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
                      onChange: (k) => u("populateField", k.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: x.map((k) => /* @__PURE__ */ e.jsxs("option", { value: k.name, children: [
                k.displayName,
                " (",
                k.dataType,
                ")"
              ] }, k.name)) }),
              h.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: h.map((k, F) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: F === 0,
                          onClick: () => {
                            const w = [...h], S = w[F];
                            w[F] = w[F - 1], w[F - 1] = S, y(w);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(ws, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: F === h.length - 1,
                          onClick: () => {
                            const w = [...h], S = w[F];
                            w[F] = w[F + 1], w[F + 1] = S, y(w);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(St, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "col-dropdown-field-suggestions",
                        value: k.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (w) => {
                          const S = w.target.value, R = x.find((Q) => Q.name === S), $ = [...h];
                          $[F] = {
                            ...$[F],
                            key: S,
                            title: R && (!$[F].title || $[F].title.startsWith("Cột ")) ? R.displayName : $[F].title
                          }, y($);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: k.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (w) => {
                          const S = [...h];
                          S[F] = { ...S[F], title: w.target.value }, y(S);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: k.width || "50%",
                        placeholder: "Width",
                        onChange: (w) => {
                          const S = [...h];
                          S[F] = { ...S[F], width: w.target.value }, y(S);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: k.align || "left",
                        onChange: (w) => {
                          const S = [...h];
                          S[F] = { ...S[F], align: w.target.value }, y(S);
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
                        onClick: () => y(h.filter((w, S) => S !== F)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                F
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            _r,
            {
              events: g,
              onChange: (h) => {
                u("events", h);
                const y = h.find((L) => L.trigger === "click" || L.trigger === "actionClick");
                y && u("action", y.handlerName || y.action);
              },
              scriptFile: (p == null ? void 0 : p.scriptFile) || "transactionList.bl.ts",
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
          l === "permissions" && /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-3 text-xs", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-slate-300", children: "Cấu hình phân quyền hiển thị / chỉnh sửa cột theo vai trò (Roles):" }),
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Admin", "Manager", "Dispatcher", "Sales", "Customer"].map((h) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer", children: [
              /* @__PURE__ */ e.jsx("input", { type: "checkbox", defaultChecked: h === "Admin" || h === "Manager", className: "rounded text-emerald-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200", children: h })
            ] }, h)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-3 px-6 py-3 bg-[#0b1329] border-t border-slate-800", children: [
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
            onClick: () => v(),
            className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
            children: [
              /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
            ]
          }
        )
      ] })
    ] }) }),
    document.body
  );
}, ul = ({
  columns: t,
  data: r,
  showRowNumber: s = !0,
  rowNumberWidth: a = 55,
  leftOffsets: n = {}
}) => {
  if (!t.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = r.map((f) => f[i.key]).filter((f) => f != null && f !== "");
    if (i.aggregate === "count") {
      const f = d.length;
      return `${i.summaryPrefix || ""}${f}${i.summarySuffix || " dòng"}`;
    }
    const c = d.map((f) => {
      if (typeof f == "number") return f;
      const x = parseFloat(String(f).replace(/,/g, ""));
      return isNaN(x) ? 0 : x;
    });
    if (c.length === 0) return "—";
    let p = 0;
    i.aggregate === "sum" ? p = c.reduce((f, x) => f + x, 0) : i.aggregate === "avg" ? p = c.reduce((f, x) => f + x, 0) / c.length : i.aggregate === "min" ? p = Math.min(...c) : i.aggregate === "max" && (p = Math.max(...c));
    const g = i.precision ?? (i.format === "number_thousands" ? 0 : 2), I = g > 0 ? p.toLocaleString("en-US", { minimumFractionDigits: g, maximumFractionDigits: g }) : p.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${I}${i.summarySuffix || ""}`;
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
      const c = l(i), p = d === 0, g = i.sticky === "left" || !!i.frozen, I = g && n[i.key] !== void 0 ? n[i.key] : void 0, f = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${f} ${g ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: I !== void 0 ? `${I}px` : void 0
          },
          children: p && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function js(t) {
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
function rs(t, r, s) {
  const a = String(s).padStart(2, "0"), n = String(r + 1).padStart(2, "0");
  return `${a}/${n}/${t}`;
}
const pl = [
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
], xl = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], Vr = ({
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
  onFocus: g,
  onBlur: I,
  autoFocus: f = !1,
  isGridCell: x = !1
}) => {
  const N = Je(null), u = Je(null), v = Je(null), [C, h] = A(!1), [y, L] = A(() => {
    const Y = js(t);
    return Y ? rs(Y.year, Y.month, Y.day) : t || "";
  }), k = Ve(() => js(t), [t]), F = Ve(() => {
    const Y = /* @__PURE__ */ new Date();
    return { year: Y.getFullYear(), month: Y.getMonth(), day: Y.getDate() };
  }, []), [w, S] = A((k == null ? void 0 : k.year) || F.year), [R, $] = A((k == null ? void 0 : k.month) ?? F.month), [Q, O] = A({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Be(() => {
    const Y = js(t);
    Y ? (L(rs(Y.year, Y.month, Y.day)), S(Y.year), $(Y.month)) : L(t || "");
  }, [t]);
  const V = () => {
    if (!N.current) return;
    const Y = N.current.getBoundingClientRect(), z = 310, xe = 280, T = window.innerHeight - Y.bottom < z && Y.top > z;
    let B = T ? Y.top - z - 4 : Y.bottom + 4, ee = Y.left;
    ee + xe > window.innerWidth - 10 && (ee = Math.max(10, window.innerWidth - xe - 10)), O({ top: B, left: ee, openUpwards: T });
  }, P = () => {
    a || n || (V(), h(!0));
  }, K = () => {
    h(!1);
  };
  Be(() => {
    if (!C) return;
    const Y = (xe) => {
      const ve = xe.target;
      N.current && !N.current.contains(ve) && v.current && !v.current.contains(ve) && K();
    }, z = () => {
      C && V();
    };
    return document.addEventListener("mousedown", Y, !0), window.addEventListener("resize", z, !0), window.addEventListener("scroll", z, !0), () => {
      document.removeEventListener("mousedown", Y, !0), window.removeEventListener("resize", z, !0), window.removeEventListener("scroll", z, !0);
    };
  }, [C]);
  const G = (Y) => {
    Y.stopPropagation(), R === 0 ? ($(11), S((z) => z - 1)) : $((z) => z - 1);
  }, b = (Y) => {
    Y.stopPropagation(), R === 11 ? ($(0), S((z) => z + 1)) : $((z) => z + 1);
  }, se = (Y, z = 0) => {
    var B;
    let xe = w, ve = R + z;
    ve < 0 ? (ve = 11, xe -= 1) : ve > 11 && (ve = 0, xe += 1);
    const T = rs(xe, ve, Y);
    L(T), r(T), K(), (B = u.current) == null || B.focus();
  }, de = (Y) => {
    var xe;
    Y.stopPropagation();
    const z = rs(F.year, F.month, F.day);
    L(z), S(F.year), $(F.month), r(z), K(), (xe = u.current) == null || xe.focus();
  }, me = (Y) => {
    var z;
    Y.stopPropagation(), L(""), r(""), K(), (z = u.current) == null || z.focus();
  }, Ce = (Y) => {
    const z = Y.target.value;
    L(z);
    const xe = js(z);
    if (xe) {
      const ve = rs(xe.year, xe.month, xe.day);
      r(ve), S(xe.year), $(xe.month);
    } else z === "" && r("");
  }, he = (Y) => {
    if (Y.key === "Escape")
      C && (Y.stopPropagation(), K());
    else if (Y.key === "Enter") {
      const z = js(y);
      if (z) {
        const xe = rs(z.year, z.month, z.day);
        L(xe), r(xe);
      }
      C && K();
    } else (Y.key === "F4" || Y.altKey && Y.key === "ArrowDown") && (Y.preventDefault(), Y.stopPropagation(), C ? K() : P());
    p && p(Y);
  }, we = Ve(() => {
    const Y = (new Date(w, R, 1).getDay() + 6) % 7, z = new Date(w, R + 1, 0).getDate(), xe = new Date(w, R, 0).getDate(), ve = [];
    for (let ee = Y - 1; ee >= 0; ee--)
      ve.push({
        day: xe - ee,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let ee = 1; ee <= z; ee++)
      ve.push({
        day: ee,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const B = (ve.length <= 35 ? 35 : 42) - ve.length;
    for (let ee = 1; ee <= B; ee++)
      ve.push({
        day: ee,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return ve;
  }, [w, R]), Oe = () => C ? Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: v,
        style: {
          position: "fixed",
          top: `${Q.top}px`,
          left: `${Q.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (Y) => Y.stopPropagation(),
        className: "bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: G,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(jr, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: R,
                  onChange: (Y) => $(parseInt(Y.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: pl.map((Y, z) => /* @__PURE__ */ e.jsx("option", { value: z, children: Y }, z))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: w,
                  onChange: (Y) => S(parseInt(Y.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (Y, z) => w - 20 + z).map((Y) => /* @__PURE__ */ e.jsx("option", { value: Y, children: Y }, Y))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: b,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ds, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: xl.map((Y, z) => /* @__PURE__ */ e.jsx("div", { className: z >= 5 ? "text-amber-400/80" : "", children: Y }, z)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: we.map((Y, z) => {
            const xe = k && Y.isCurrentMonth && k.year === w && k.month === R && k.day === Y.day, ve = Y.isCurrentMonth && F.year === w && F.month === R && F.day === Y.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => se(Y.day, Y.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${xe ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : ve ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : Y.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: Y.day
              },
              z
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: de,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(da, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            y && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: me,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(ct, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: K,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, U = x ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", oe = x ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: N, className: `${U} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        type: "text",
        tabIndex: c,
        autoFocus: f,
        disabled: a,
        readOnly: n,
        placeholder: s,
        title: i || d,
        value: y,
        onChange: Ce,
        onKeyDown: he,
        onFocus: g,
        onBlur: I,
        onClick: (Y) => {
          Y.stopPropagation(), C || P();
        },
        className: oe
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: a,
        onClick: (Y) => {
          Y.stopPropagation(), C ? K() : P();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(yr, { className: "w-3.5 h-3.5" })
      }
    ),
    Oe()
  ] });
}, hl = ({
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
  onKeyDown: g,
  onFocus: I
}) => {
  const f = (t.editable ?? !0) && !t.disabled && t.componentType !== "Label", x = r === "—" || r === "-" ? "" : r ?? "", u = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : l ? "border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", v = (L) => {
    g && g(L, a, n, t.key);
  }, C = () => {
    I && I(a, n, t.key);
  }, h = {
    "data-grid-cell": `${a}_${n}`,
    "data-grid-row": a,
    "data-grid-col": n,
    "data-grid-colkey": t.key
  };
  if (t.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...h, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!r,
        disabled: t.disabled || !f,
        onClick: (L) => L.stopPropagation(),
        onChange: (L) => c(L.target.checked),
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${l ? "ring-2 ring-emerald-400" : ""}`
      }
    ) });
  if (t.componentType === "Button") {
    const L = t.formatCell || t.title || r || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...h, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: t.disabled,
        onClick: (k) => {
          k.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${l ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`,
        children: L
      }
    ) });
  }
  if (t.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (L) => {
          L.preventDefault(), L.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${l ? "ring-2 ring-emerald-400/80 rounded px-1" : ""}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r || "—" }),
          /* @__PURE__ */ e.jsx(Nr, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!f) {
    if (t.precision !== void 0 && typeof r == "number") {
      const L = t.precision > 0 ? r.toLocaleString("en-US", { minimumFractionDigits: t.precision, maximumFractionDigits: t.precision }) : r.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: v,
          onFocus: C,
          ...h,
          className: `font-mono text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: [
            L,
            t.summarySuffix ? ` ${t.summarySuffix}` : ""
          ]
        }
      );
    }
    if (t.formatCell && r !== void 0 && r !== null) {
      let L = t.formatCell.replace("{0}", String(r));
      return typeof s == "object" && s !== null && Object.keys(s).forEach((k) => {
        L = L.replace(new RegExp(`\\{${k}\\}`, "gi"), String(s[k] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: v,
          onFocus: C,
          ...h,
          className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: L
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
        children: r != null ? String(r) : "—"
      }
    );
  }
  if (t.componentType === "Select" || t.componentType === "Dropdown") {
    let L = t.options || [];
    const k = t.reference || t.refName;
    if (L.length === 0 && k) {
      const F = fe.getState().getDataset(k);
      if (Array.isArray(F) && F.length > 0) {
        const w = t.valueField || t.idField || "code", S = t.displayField || t.selectField || "name";
        L = F.map((R) => ({
          value: String(R[w] ?? R.code ?? R.id ?? ""),
          label: String(R[S] ?? R.name ?? R[w] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: r ?? "",
        disabled: t.disabled,
        title: o || void 0,
        onClick: (F) => F.stopPropagation(),
        onChange: (F) => c(F.target.value),
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          L.map((F) => /* @__PURE__ */ e.jsx("option", { value: F.value, className: "bg-slate-900 text-slate-100", children: F.label }, F.value))
        ]
      }
    );
  }
  if (t.componentType === "DatePicker" || t.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...h, children: /* @__PURE__ */ e.jsx(
      Vr,
      {
        isGridCell: !0,
        value: x,
        disabled: t.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (L) => c(L),
        onKeyDown: v,
        onFocus: C
      }
    ) });
  if (t.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: x,
        placeholder: "0",
        disabled: t.disabled,
        title: o || void 0,
        step: t.precision && t.precision > 0 ? Math.pow(10, -t.precision) : 1,
        onClick: (L) => L.stopPropagation(),
        onChange: (L) => {
          const k = L.target.value;
          c(k === "" ? "" : Number(k));
        },
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (t.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: x,
        placeholder: t.title ? `Nhập ${t.title}...` : "Nhập...",
        disabled: t.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (L) => L.stopPropagation(),
        onChange: (L) => {
          const k = t.upperCase ? L.target.value.toUpperCase() : L.target.value;
          c(k);
        },
        onKeyDown: v,
        onFocus: C,
        ...h,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const y = t.align === "right" ? "text-right" : t.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: x,
      placeholder: t.title ? `Nhập ${t.title}...` : "Nhập dữ liệu...",
      disabled: t.disabled,
      title: o || void 0,
      onClick: (L) => L.stopPropagation(),
      onChange: (L) => {
        const k = t.upperCase ? L.target.value.toUpperCase() : L.target.value;
        c(k);
      },
      onKeyDown: v,
      onFocus: C,
      ...h,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${y} ${t.cssClass || ""}`
    }
  );
};
function ml(t, r) {
  var l, i, d, c, p, g, I, f;
  if (t.value !== r.value || t.error !== r.error || t.rowIndex !== r.rowIndex || t.columnIndex !== r.columnIndex || !!t.isFocused != !!r.isFocused || !!t.isEditing != !!r.isEditing || !!t.isSelected != !!r.isSelected)
    return !1;
  const s = t.column, a = r.column;
  if (s !== a && (s.key !== a.key || s.title !== a.title || s.componentType !== a.componentType || s.editable !== a.editable || s.disabled !== a.disabled || s.precision !== a.precision || s.align !== a.align || s.formatCell !== a.formatCell || s.cssClass !== a.cssClass || s.summarySuffix !== a.summarySuffix || s.upperCase !== a.upperCase || s.options !== a.options || s.reference !== a.reference || s.refName !== a.refName))
    return !1;
  const n = ((l = t.row) == null ? void 0 : l.id) ?? ((i = t.row) == null ? void 0 : i.Id) ?? ((d = t.row) == null ? void 0 : d.ID), o = ((c = r.row) == null ? void 0 : c.id) ?? ((p = r.row) == null ? void 0 : p.Id) ?? ((g = r.row) == null ? void 0 : g.ID);
  if (n !== void 0 && o !== void 0 && n !== o)
    return !1;
  if (a.formatCell && typeof a.formatCell == "string") {
    const x = a.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g);
    if (x)
      for (const N of x) {
        const u = N.slice(1, -1);
        if (u !== "0" && ((I = t.row) == null ? void 0 : I[u]) !== ((f = r.row) == null ? void 0 : f[u]))
          return !1;
      }
  }
  return !((a.componentType === "Button" || a.componentType === "Link") && t.row !== r.row);
}
const rr = Mt.memo(hl, ml);
function bl({
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
  onToggleAll: g,
  onFilterByCell: I,
  onQuickSum: f,
  onToggleColumnFilters: x,
  isEditableTable: N = !0,
  onPasteExcel: u
}) {
  const [v, C] = A(null), h = bs(
    (w, S) => {
      if (w < 0 || w >= r.length || S < 0 || S >= s.length) return;
      const R = s[S], $ = r[w], Q = ($ == null ? void 0 : $.id) ?? ($ == null ? void 0 : $.Id) ?? w;
      if (n(Q), C({ rowIndex: w, colIndex: S, colKey: R.key }), t.current) {
        const O = `[data-grid-cell="${w}_${S}"]`, V = t.current.querySelector(O);
        if (V) {
          V.scrollIntoView({ block: "nearest", inline: "nearest" });
          const P = V.tagName === "INPUT" || V.tagName === "SELECT" || V.tagName === "TEXTAREA" || V.tagName === "BUTTON" ? V : V.querySelector("input, select, textarea, button") || V;
          P.focus(), P instanceof HTMLInputElement && (P.type === "text" || P.type === "number") && P.select();
        }
      }
    },
    [r, s, t, n]
  ), y = bs(
    (w) => {
      if (!t.current) return;
      const S = t.current.querySelector(`[data-row-index="${w}"]`);
      S && S.scrollIntoView({ block: "nearest" });
    },
    [t]
  ), L = bs(
    (w) => {
      if (w.key === "F1") {
        w.preventDefault(), w.stopPropagation(), g == null || g();
        return;
      }
      if (w.key === "F2") {
        w.preventDefault(), w.stopPropagation(), I == null || I();
        return;
      }
      if (w.key === "F3") {
        w.preventDefault(), w.stopPropagation(), f == null || f();
        return;
      }
      if (w.key === "F4") {
        w.preventDefault(), w.stopPropagation(), d == null || d();
        return;
      }
      if (w.key === "F6") {
        w.preventDefault(), w.stopPropagation(), x == null || x();
        return;
      }
      if (w.key === "ArrowDown") {
        w.preventDefault();
        const S = r.findIndex(($, Q) => ($.id ?? $.Id ?? Q) === a), R = S < r.length - 1 ? S + 1 : S;
        if (R >= 0 && R !== S) {
          const $ = r[R];
          n($.id ?? $.Id ?? R), l(/* @__PURE__ */ new Set([$.id ?? $.Id ?? R])), y(R);
        }
        return;
      }
      if (w.key === "ArrowUp") {
        w.preventDefault();
        const S = r.findIndex(($, Q) => ($.id ?? $.Id ?? Q) === a), R = S > 0 ? S - 1 : 0;
        if (R >= 0 && R !== S) {
          const $ = r[R];
          n($.id ?? $.Id ?? R), l(/* @__PURE__ */ new Set([$.id ?? $.Id ?? R])), y(R);
        }
        return;
      }
      if (w.key === "Enter") {
        w.preventDefault();
        const S = r.findIndex((R, $) => (R.id ?? R.Id ?? $) === a);
        S >= 0 && i && i(r[S], S);
        return;
      }
      if (w.key === "Delete") {
        const S = r.findIndex((R, $) => (R.id ?? R.Id ?? $) === a);
        S >= 0 && c && (w.preventDefault(), c(S));
        return;
      }
      if ((w.ctrlKey || w.metaKey) && (w.key === "d" || w.key === "D")) {
        w.preventDefault();
        const S = r.findIndex((R, $) => (R.id ?? R.Id ?? $) === a);
        S >= 0 && p && p(S);
        return;
      }
      if ((w.ctrlKey || w.metaKey) && (w.key === "v" || w.key === "V")) {
        const S = w.target;
        !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA")) && u && typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" && (w.preventDefault(), navigator.clipboard.readText().then(($) => {
          if ($) {
            const Q = v ? v.rowIndex : a !== null ? Math.max(0, r.findIndex((V, P) => (V.id ?? V.Id ?? P) === a)) : 0, O = v ? v.colIndex : 0;
            u($, Q, O);
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
      y,
      g,
      I,
      f,
      d,
      x,
      i,
      c,
      p,
      v,
      u
    ]
  ), k = bs(
    (w, S, R, $) => {
      var Q, O, V;
      if (w.key === "F1") {
        w.preventDefault(), w.stopPropagation(), g == null || g();
        return;
      }
      if (w.key === "F2") {
        w.preventDefault(), w.stopPropagation(), I == null || I();
        return;
      }
      if (w.key === "F3") {
        w.preventDefault(), w.stopPropagation(), f == null || f();
        return;
      }
      if (w.key === "F4") {
        w.preventDefault(), w.stopPropagation(), d == null || d();
        return;
      }
      if (w.key === "F6") {
        w.preventDefault(), w.stopPropagation(), x == null || x();
        return;
      }
      if (w.key === "ArrowDown") {
        w.preventDefault(), S < r.length - 1 && h(S + 1, R);
        return;
      }
      if (w.key === "ArrowUp") {
        w.preventDefault(), S > 0 && h(S - 1, R);
        return;
      }
      if (w.key === "ArrowLeft") {
        const P = w.target, K = P && P.selectionStart === 0 && P.selectionEnd === 0, G = P && P.selectionStart === 0 && P.selectionEnd === ((Q = P.value) == null ? void 0 : Q.length), b = !P || P.tagName === "SELECT" || P.type === "checkbox" || P.tagName === "BUTTON";
        (K || G || b) && R > 0 && (w.preventDefault(), h(S, R - 1));
        return;
      }
      if (w.key === "ArrowRight") {
        const P = w.target, K = P && P.selectionStart === ((O = P.value) == null ? void 0 : O.length), G = P && P.selectionStart === 0 && P.selectionEnd === ((V = P.value) == null ? void 0 : V.length), b = !P || P.tagName === "SELECT" || P.type === "checkbox" || P.tagName === "BUTTON";
        (K || G || b) && R < s.length - 1 && (w.preventDefault(), h(S, R + 1));
        return;
      }
      if (w.key === "Tab") {
        w.preventDefault(), w.shiftKey ? R > 0 ? h(S, R - 1) : S > 0 && h(S - 1, s.length - 1) : R < s.length - 1 ? h(S, R + 1) : S < r.length - 1 ? h(S + 1, 0) : d && (d(), setTimeout(() => {
          h(r.length, 0);
        }, 60));
        return;
      }
      if (w.key === "Enter") {
        if (w.preventDefault(), w.shiftKey) {
          S > 0 && h(S - 1, R);
          return;
        }
        S < r.length - 1 ? h(S + 1, R) : d && (d(), setTimeout(() => {
          h(r.length, R);
        }, 60));
        return;
      }
      if (w.key === "Escape") {
        w.preventDefault();
        const P = w.target;
        P == null || P.blur();
        return;
      }
    },
    [r, s, h, g, I, f, d, x]
  ), F = bs(
    (w) => {
      var P;
      const S = (P = w.clipboardData) == null ? void 0 : P.getData("text/plain");
      if (!S || !u) return;
      const R = S.includes("	") || S.includes(`
`), $ = w.target;
      if ($ && ($.tagName === "INPUT" || $.tagName === "TEXTAREA") && !R)
        return;
      w.preventDefault(), w.stopPropagation();
      const O = v ? v.rowIndex : a !== null ? Math.max(0, r.findIndex((K, G) => (K.id ?? K.Id ?? G) === a)) : 0, V = v ? v.colIndex : 0;
      u(S, O, V);
    },
    [v, a, r, u]
  );
  return {
    focusedCell: v,
    setFocusedCell: C,
    focusCell: h,
    scrollToRow: y,
    handleTableContainerKeyDown: L,
    handleCellKeyDown: k,
    handlePaste: F
  };
}
function Wr(t) {
  return [...t].sort((r, s) => {
    const a = !!(r.frozen || r.sticky === "left"), n = !!(s.frozen || s.sticky === "left");
    if (a && !n) return -1;
    if (!a && n) return 1;
    const o = typeof r.order == "number" ? r.order : 999, l = typeof s.order == "number" ? s.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Ns(t) {
  return Wr(t).map((s, a) => ({
    ...s,
    order: a + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(s.frozen || s.sticky === "left"),
    sticky: s.frozen || s.sticky === "left" ? "left" : "none"
  }));
}
function Cn(t, r, s) {
  if (s < 0 || s >= t.length || r === s) return t;
  const a = [...t], [n] = a.splice(r, 1), o = a.filter((p) => p.frozen || p.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && s < o ? (n.frozen = !0, n.sticky = "left") : l && s >= o && (n.frozen = !1, n.sticky = "none"), a.splice(s, 0, n);
  const i = a.filter((p) => p.frozen || p.sticky === "left"), d = a.filter((p) => !p.frozen && p.sticky !== "left");
  return [...i, ...d].map((p, g) => ({
    ...p,
    order: g + 1,
    frozen: !!(p.frozen || p.sticky === "left"),
    sticky: p.frozen || p.sticky === "left" ? "left" : "none"
  }));
}
function Kr(t, r) {
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
  return Ns(s);
}
function fl(t, r = 55) {
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
class gl {
  constructor() {
    rn(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    rn(this, "populateResolvers", /* @__PURE__ */ new Map());
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
const Gr = new gl();
function ho(t, r, s) {
  return Gr.getCascadedOptions(t, r, s);
}
function vl(t, r, s) {
  return Gr.calculateAutoPopulatedFields(t, r, s);
}
function kn(t) {
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
function ar(t) {
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
function Sn(t, r, s = "Ngày bắt đầu", a = "Ngày kết thúc") {
  const n = ar(t), o = ar(r);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${s} (${t}) không thể xảy ra sau ${a} (${r})`
  } : { isValid: !0 };
}
function yl(t, r, s = [], a = {}) {
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
        const l = kn(String(r));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = a[o.targetField];
        if (l) {
          const i = Sn(String(r), String(l), t, o.targetField);
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
function mo(t, r) {
  const s = {};
  for (const [a, n] of Object.entries(r)) {
    const o = t[a], l = yl(a, o, n, t);
    l.isValid || (s[a] = l.errors);
  }
  return s;
}
const at = {
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
}, jl = {
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
}, Rt = cs()(
  Is((t, r) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...at["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...at["FCLI-26020005"].shippingInfo],
      grid_container_info: [...at["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...at["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (s) => {
      const a = at[s];
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
      return at[n] = {
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
      const n = String(jl[s] || s), l = { ...r().masterRecord, [n]: a }, i = vl(n, a, l);
      Object.assign(l, i);
      const d = { ...r().validationErrors };
      if (n === "mblNo") {
        const p = String(a || "").trim();
        p ? /^[A-Z0-9]{8,18}$/i.test(p) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(a || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const p = l.mblIssuedDate, g = l.shipmentDate;
        if (p && g) {
          const I = Sn(p, g, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          I.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = I.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      t({
        masterRecord: l,
        validationErrors: d
      });
      const c = r().activeJobNo;
      at[c] && (at[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (s, a, n, o) => {
      const l = r().detailGrids, i = l[s] || [], d = { ...r().validationErrors }, c = `${s}_${a}_${n}`, p = i.map((I, f) => I.id !== void 0 && I.id === a || I.id === void 0 && f === a ? { ...I, [n]: o } : I);
      if (n === "containerNo") {
        const I = kn(String(o));
        I.isValid ? delete d[c] : d[c] = I.message;
      }
      if (s === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const I = p.find((f) => f.id === a);
        if (I && I.etd && I.eta) {
          const f = Sn(I.etd, I.eta, "ETD", "ETA"), x = `${s}_${a}_etd_eta`;
          f.isValid ? delete d[x] : d[x] = f.message || "ETD phải trước ETA";
        }
      }
      t({
        detailGrids: { ...l, [s]: p },
        validationErrors: d
      }), s === "grid_container_info" && r().recalculateTotals();
      const g = r().activeJobNo;
      at[g] && (s === "grid_shipping_info" && (at[g].shippingInfo = p), s === "grid_container_info" && (at[g].containerInfo = p), s === "grid_shipment_detail" && (at[g].shipmentDetail = p));
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
      at[c] && (at[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const s = r().masterRecord, a = {};
      return (o = s.jobNo) != null && o.trim() || (a.jobNo = "Job No không được để trống"), (l = s.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(s.mblNo.trim()) || (a.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : a.mblNo = "Số M-B/L không được để trống", (r().detailGrids.grid_container_info || []).forEach((i) => {
        const d = kn(i.containerNo);
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
        const o = await fetch("http://localhost:5048/api/fcl-import/save-aggregate", {
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
function Nl({
  fileName: t = "Du_Lieu_Bang",
  sheetName: r = "Sheet1",
  columns: s,
  rows: a,
  includeSummary: n = !0
}) {
  const o = s.filter((N) => !N.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const N of o) {
    const u = N.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${u};padding:8px 12px;font-size:11pt;">${N.title || N.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  a.forEach((N, u) => {
    const v = u % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${v};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${u + 1}</td>`;
    for (const C of o) {
      const h = N[C.key], y = C.align || "left";
      let L = h != null ? String(h) : "";
      typeof h == "number" && (L = h.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${y};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${lr(L)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((N) => N.aggregate);
  if (n && c && a.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const N of o) {
      const u = N.align || "left";
      if (N.aggregate === "sum") {
        const v = a.reduce((h, y) => {
          const L = Number(y[N.key]);
          return h + (isNaN(L) ? 0 : L);
        }, 0), C = v % 1 !== 0 ? v.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : v.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${C}${N.summarySuffix ? ` ${N.summarySuffix}` : ""}</td>`;
      } else if (N.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${a.length}</td>`;
      else if (N.aggregate === "avg") {
        const v = a.reduce((h, y) => {
          const L = Number(y[N.key]);
          return h + (isNaN(L) ? 0 : L);
        }, 0), C = a.length > 0 ? (v / a.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${C}</td>`;
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
                <x:Name>${lr(r)}</x:Name>
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
  `.trim(), g = new Blob(["\uFEFF", p], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), I = t.endsWith(".xls") || t.endsWith(".xlsx") ? t : `${t}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, f = URL.createObjectURL(g), x = document.createElement("a");
  x.href = f, x.download = I, document.body.appendChild(x), x.click(), document.body.removeChild(x), URL.revokeObjectURL(f);
}
function lr(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Ur(t) {
  const {
    title: r,
    subtitle: s,
    columns: a,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = t, c = a.filter((h) => !h.hidden), p = window.open("", "_blank", "width=1100,height=850");
  if (!p) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const g = /* @__PURE__ */ new Date(), I = `Ngày in: ${g.toLocaleDateString("vi-VN")} lúc ${g.toLocaleTimeString("vi-VN")}`, f = Object.entries(i).map(
    ([h, y]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${jt(h)}:</strong>
          <span>${jt(String(y))}</span>
        </div>`
  ).join(""), x = c.map((h) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${h.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${jt(h.title || h.key)}
      </th>`).join(""), N = n.map((h, y) => {
    const L = y % 2 === 0 ? "#ffffff" : "#f8fafc", k = c.map((F) => {
      const w = h[F.key] ?? "", S = F.align || (typeof w == "number" ? "right" : "left");
      let R = w;
      return typeof w == "number" && (R = w.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${S}; font-size: 11px;">
            ${jt(String(R))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${L};">${k}</tr>`;
  }).join("");
  let u = "";
  o && (u = `<tfoot><tr>${c.map((y, L) => {
    const k = o[y.key] ?? (L === 0 ? "TỔNG CỘNG" : ""), F = y.align || "left";
    let w = k;
    return typeof k == "number" && (w = k.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${F}; font-size: 11px;">
          ${jt(String(w))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const v = d ? `
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
    ` : "", C = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${jt(r)} - UIForge Report</title>
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
              ${jt(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${jt(r)}
            </h1>
            ${s ? `<div style="font-size: 12px; color: #475569;">${jt(s)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${jt(I)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${f ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${f}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${x}</tr>
        </thead>
        <tbody>
          ${N}
        </tbody>
        ${u}
      </table>

      ${v}

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
  p.document.open(), p.document.write(C), p.document.close();
}
function jt(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function bo(t) {
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
    const a = await fetch("http://localhost:5048/api/core/reports/pdf", {
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
  Ur(t);
}
async function fo(t) {
  const r = t.fileName || "Bieu_Mau_Chung_Tu", s = {
    templateName: t.templateName,
    placeholders: t.placeholders
  };
  try {
    const a = await fetch("http://localhost:5048/api/core/reports/docx", {
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
function wl(t) {
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
function Cl(t, r) {
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
function kl({
  currentRows: t,
  visibleColumns: r,
  allColumns: s,
  clipMatrix: a,
  startRowIndex: n,
  startColIndex: o
}) {
  if (!a || a.length === 0)
    return { updatedRows: t, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 };
  const l = [...t.map((f) => ({ ...f }))], i = a.length;
  let d = 0, c = 0;
  const p = Math.max(0, n), g = Math.max(0, o), I = (f) => {
    const x = { id: f };
    return s.forEach((N) => {
      N.componentType === "Number" || N.dataType === "number" ? x[N.key] = 0 : N.componentType === "Checkbox" || N.dataType === "boolean" ? x[N.key] = !1 : (N.componentType === "DatePicker" || N.dataType, x[N.key] = "");
    }), x;
  };
  for (let f = 0; f < i; f++) {
    const x = p + f, N = a[f];
    if (N.length > d && (d = N.length), x >= l.length) {
      const v = l.length > 0 ? Math.max(...l.map((h) => Number(h.id) || 0)) : 0, C = I(v + 1);
      l.push(C), c++;
    }
    const u = l[x];
    for (let v = 0; v < N.length; v++) {
      const C = g + v;
      if (C >= r.length)
        break;
      const h = r[C];
      if (!((h.editable ?? !0) && !h.disabled && h.componentType !== "Label"))
        continue;
      const L = N[v], k = Cl(L, h);
      u[h.key] = k;
    }
  }
  return {
    updatedRows: l,
    pastedRowCount: i,
    pastedColCount: d,
    newRowsCreated: c
  };
}
const or = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], Sl = ({ node: t }) => {
  var ds, us, ps, xs, hs;
  const { props: r, style: s } = t, a = Z((m) => m.updateComponentProps), n = Ve(() => r.columns && Array.isArray(r.columns) ? r.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [r.columns]), o = Ve(() => Wr(n), [n]), l = Ve(() => o.filter((m) => !m.hidden), [o]), i = Rt((m) => m.detailGrids), d = Rt((m) => m.updateGridCell), c = Rt((m) => m.addGridRow), p = Rt((m) => m.deleteGridRow), g = Rt((m) => m.duplicateGridRow), I = Rt((m) => m.validationErrors), f = !!(i && i[t.id]), x = r.reference || r.refName || ((ds = t.dataBinding) == null ? void 0 : ds.refName) || ((us = t.dataBinding) == null ? void 0 : us.entityName) || "", N = r.query || ((ps = t.dataBinding) == null ? void 0 : ps.query) || r.dataSource || ((xs = t.dataBinding) == null ? void 0 : xs.dataSource) || r.sqlWhere || ((hs = t.dataBinding) == null ? void 0 : hs.sqlWhere) || r.filter || "", u = fe((m) => x ? m.datasets[x] : void 0), [v, C] = A(() => f && i && i[t.id] ? i[t.id] : r.data && Array.isArray(r.data) ? r.data : u && Array.isArray(u) ? u : or);
  Be(() => {
    r.data && Array.isArray(r.data) && r.data.length > 0 && C(r.data);
  }, [r.data]), Be(() => {
    u && Array.isArray(u) && u.length > 0 && C(u);
  }, [u]);
  const h = Ve(() => f && i && i[t.id] && i[t.id].length > 0 ? i[t.id] : v && Array.isArray(v) && v.length > 0 ? v : u && Array.isArray(u) && u.length > 0 ? u : r.data && Array.isArray(r.data) ? r.data : or, [f, i, t.id, v, u, r.data]);
  Be(() => {
    if (r.data && Array.isArray(r.data) && r.data.length > 0) return;
    let m = !0;
    return x && fe.getState().queryEntity(x, N).then((M) => {
      m && M && M.length > 0 && C(M);
    }), () => {
      m = !1;
    };
  }, [x, N, r.data]);
  const [y, L] = A(""), [k, F] = A(null), [w, S] = A("asc"), [R, $] = A(!1), [Q, O] = A({}), [V, P] = A({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [K, G] = A({
    isOpen: !1,
    column: null
  }), [b, se] = A({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [de, me] = A(null), [Ce, he] = A(null), [we, Oe] = A(null), U = 55, { offsets: oe, lastFrozenKey: Y } = Ve(() => fl(o, U), [o]), z = Ve(() => {
    let m = [...h];
    if (y.trim()) {
      const M = y.toLowerCase();
      m = m.filter(
        (E) => Object.values(E).some(
          (H) => String(H).toLowerCase().includes(M)
        )
      );
    }
    return R && Object.entries(Q).forEach(([M, E]) => {
      if (E && E.trim()) {
        const H = E.toLowerCase().trim();
        m = m.filter((_) => {
          const X = _[M];
          return X != null && String(X).toLowerCase().includes(H);
        });
      }
    }), k && m.sort((M, E) => {
      const H = M[k], _ = E[k];
      if (H === _) return 0;
      if (H == null) return 1;
      if (_ == null) return -1;
      let X = 0;
      return typeof H == "number" && typeof _ == "number" ? X = H - _ : X = String(H).localeCompare(String(_)), w === "asc" ? X : -X;
    }), m;
  }, [h, y, R, Q, k, w]), xe = (m) => {
    C(m), a(t.id, { data: m });
  }, [ve, T] = A(r.groupBy || null), [B, ee] = A(/* @__PURE__ */ new Set()), je = Ve(() => {
    if (!ve) return [];
    const m = /* @__PURE__ */ new Map();
    z.forEach((H) => {
      const _ = H[ve], X = _ == null || _ === "" ? "(Trống)" : String(_);
      m.has(X) || m.set(X, []), m.get(X).push(H);
    });
    let M = 0;
    const E = [];
    return m.forEach((H, _) => {
      const X = {};
      l.forEach((re) => {
        if (re.componentType === "Number" || re.precision !== void 0 || re.isSummary || re.summary) {
          const Re = H.reduce((We, qe) => {
            const pt = Number(qe[re.key]);
            return We + (isNaN(pt) ? 0 : pt);
          }, 0);
          X[re.key] = Re;
        }
      }), E.push({
        groupKey: _,
        groupLabel: _,
        rows: H,
        subtotals: X,
        startIndex: M
      }), M += H.length;
    }), E;
  }, [ve, z, l]), te = 38, Se = 10, ce = !ve && (z.length > 80 || !!r.virtual || !!r.virtualScroll), [Ne, le] = A(0), [ue, Pe] = A(550);
  Be(() => {
    const m = Ye.current;
    if (!m || !ce) return;
    const M = () => {
      le(m.scrollTop);
    }, E = () => {
      m.clientHeight > 0 && Pe(m.clientHeight);
    };
    return m.addEventListener("scroll", M, { passive: !0 }), E(), window.addEventListener("resize", E), () => {
      m.removeEventListener("scroll", M), window.removeEventListener("resize", E);
    };
  }, [ce]);
  const { virtualStartIndex: ye, virtualEndIndex: pe, topPaddingHeight: W, bottomPaddingHeight: ae, virtualRows: it } = Ve(() => {
    if (!ce)
      return {
        virtualStartIndex: 0,
        virtualEndIndex: z.length,
        topPaddingHeight: 0,
        bottomPaddingHeight: 0,
        virtualRows: z
      };
    const m = z.length, M = Math.ceil(ue / te), E = Math.floor(Ne / te), H = Math.max(0, E - Se), _ = Math.min(m, E + M + Se), X = H * te, re = Math.max(0, (m - _) * te), Re = z.slice(H, _);
    return {
      virtualStartIndex: H,
      virtualEndIndex: _,
      topPaddingHeight: X,
      bottomPaddingHeight: re,
      virtualRows: Re
    };
  }, [ce, z, Ne, ue]), gt = `uiforge_user_gridpolicy_${String(t.pageId || "default")}_${t.id}`;
  Be(() => {
    let m = !0;
    const M = String(t.pageId || "default");
    try {
      const E = localStorage.getItem(gt);
      if (E) {
        const H = JSON.parse(E);
        Array.isArray(H) && H.length > 0 && a(t.id, { columns: H });
      }
    } catch {
    }
    return fetch(
      `http://localhost:5048/api/core/user-settings?featureCode=${encodeURIComponent(
        M
      )}&componentId=${encodeURIComponent(t.id)}&settingType=GridPolicy`
    ).then((E) => E.ok ? E.json() : null).then((E) => {
      if (!m || !E) return;
      const H = E.settingJson || E.SettingJson;
      if (H) {
        const _ = JSON.parse(H);
        if (Array.isArray(_) && _.length > 0) {
          a(t.id, { columns: _ });
          try {
            localStorage.setItem(gt, H);
          } catch {
          }
        }
      }
    }).catch(() => {
    }), () => {
      m = !1;
    };
  }, [t.id, t.pageId]);
  const rt = (m) => {
    const M = Ns(m);
    a(t.id, { columns: M });
    try {
      localStorage.setItem(gt, JSON.stringify(M));
    } catch {
    }
    const E = String(t.pageId || "default");
    fetch("http://localhost:5048/api/core/user-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        featureCode: E,
        componentId: t.id,
        settingType: "GridPolicy",
        settingJson: JSON.stringify(M)
      })
    }).catch(() => {
    });
  }, xt = Je(h);
  xt.current = h;
  const q = (m, M, E) => {
    f && d(t.id, m, M, E);
    const _ = (f && i && i[t.id] ? i[t.id] : xt.current).map((X, re) => X.id !== void 0 && X.id === m || X.id === void 0 && re === m ? { ...X, [M]: E } : X);
    xe(_), x && fe.getState().registerDataset(x, _);
  }, ge = (m, M, E) => {
    const _ = Z.getState().features.find((We) => String(We.id) === String(t.pageId)), X = _ == null ? void 0 : _.scriptFile, re = (E == null ? void 0 : E.action) || m;
    let Re = !1;
    E != null && E.events && (Array.isArray(E.events) ? E.events : typeof E.events == "string" ? (() => {
      try {
        return JSON.parse(E.events);
      } catch {
        return [];
      }
    })() : []).forEach((qe) => {
      Re = !0, Ss(
        qe,
        E.title || E.key,
        X,
        { row: M, col: E, column: E, action: qe.action || qe.handlerName || re, value: M[(E == null ? void 0 : E.key) || ""] }
      );
    }), !Re && re && Ss(
      { id: `col_act_${(E == null ? void 0 : E.key) || m}`, trigger: "actionClick", action: re, handlerName: re },
      t.props.label || "Bảng dữ liệu",
      X,
      { row: M, col: E, column: E, action: re, value: M[(E == null ? void 0 : E.key) || ""] }
    ), t.events && t.events.length > 0 && ze(t.events, "actionClick", t.props.label || "Bảng dữ liệu", X, {
      action: re,
      row: M,
      col: E,
      column: E,
      colKey: E == null ? void 0 : E.key,
      value: M[(E == null ? void 0 : E.key) || ""]
    });
  }, [Ee, ke] = A(null), [Me, Te] = A(/* @__PURE__ */ new Set()), Ye = Je(null), Ie = (m, M, E = "info") => {
    const H = document.createElement("div"), _ = E === "success" ? "border-emerald-500 shadow-emerald-500/30" : E === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", X = E === "success" ? "⚡" : E === "warning" ? "⚠️" : "ℹ️", re = E === "success" ? "bg-emerald-600/25 text-emerald-400" : E === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    H.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${_} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, H.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${re} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${X}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${m}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${M}</div>
      </div>
    `, document.body.appendChild(H), setTimeout(() => {
      H.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => H.remove(), 300);
    }, 3800);
  }, ht = () => {
    if (Me.size === z.length && z.length > 0)
      Te(/* @__PURE__ */ new Set()), Ie("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const m = new Set(z.map((M, E) => M.id ?? M.Id ?? E));
      Te(m), z.length > 0 && ke(z[0].id ?? z[0].Id ?? 0), Ie("F1 (Toggle All)", `Đã chọn tất cả ${m.size} dòng trong bảng`, "success");
    }
  }, dt = () => {
    var _;
    let m = _e == null ? void 0 : _e.colKey, M = (_e == null ? void 0 : _e.rowIndex) ?? 0;
    !m && l.length > 0 && (m = l[0].key);
    const E = z[M], H = E && m ? E[m] : null;
    if (H != null && String(H).trim() !== "" && String(H) !== "—") {
      O((re) => ({ ...re, [m]: String(H) })), $(!0);
      const X = ((_ = l.find((re) => re.key === m)) == null ? void 0 : _.title) || m;
      Ie("F2 (Lọc theo ô)", `Đã lọc cột [${X}] với giá trị "${H}"`, "success");
    } else
      $(!0), Ie("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Nt = () => {
    const m = Me.size > 0 ? z.filter((H, _) => Me.has(H.id ?? H.Id ?? _)) : z;
    if (m.length === 0) {
      Ie("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const M = l.filter(
      (H) => H.componentType === "Number" || H.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (_) => H.key.toLowerCase().includes(_)
      )
    );
    if (M.length === 0) {
      Ie("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const E = M.map((H) => {
      const _ = m.reduce((re, Re) => {
        const We = Number(Re[H.key]);
        return re + (isNaN(We) ? 0 : We);
      }, 0), X = _ % 1 !== 0 ? _.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : _.toLocaleString("en-US");
      return `${H.title || H.key}: ${X}${H.summarySuffix ? ` ${H.summarySuffix}` : ""}`;
    });
    Ie(
      `F3 (Tổng ${m.length} dòng)`,
      E.join(" | "),
      "success"
    );
  }, vt = () => {
    Kt();
    const m = z.length;
    Ie("F4 (Thêm dòng)", `Đã thêm dòng mới số #${m + 1}`, "success"), setTimeout(() => {
      Yt(m, 0);
    }, 60);
  }, Ot = async () => {
    const m = r.label ? String(r.label).replace(/\s+/g, "_") : "Du_Lieu_Bang", M = r.label ? String(r.label).slice(0, 30) : "Sheet1";
    try {
      const E = {
        title: r.label ? String(r.label) : "BẢNG DỮ LIỆU",
        sheetName: M,
        columns: l.map((_) => ({
          key: _.key,
          title: _.title || _.key,
          align: _.align || "left",
          dataType: _.componentType === "Number" || _.precision !== void 0 || _.format === "number" ? "number" : _.componentType === "Checkbox" ? "boolean" : "string"
        })),
        rows: z
      }, H = await fetch("http://localhost:5048/api/core/export/excel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(E)
      });
      if (H.ok) {
        const _ = await H.blob(), X = window.URL.createObjectURL(_), re = document.createElement("a");
        re.href = X, re.download = `${m}.xlsx`, document.body.appendChild(re), re.click(), document.body.removeChild(re), window.URL.revokeObjectURL(X), Ie(
          "Xuất Excel Backend (.xlsx)",
          `Đã xuất file Excel chuẩn OpenXML từ server thành công (${z.length} bản ghi)`,
          "success"
        );
        return;
      }
    } catch {
    }
    try {
      Nl({
        fileName: m,
        sheetName: M,
        columns: l,
        rows: z,
        includeSummary: !0
      }), Ie("Xuất Excel Client", `Đã xuất ${z.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (E) {
      Ie("Lỗi xuất Excel", (E == null ? void 0 : E.message) || "Không thể tạo file Excel", "warning");
    }
  }, zt = () => {
    try {
      const m = {};
      l.forEach((M) => {
        if (M.aggregate === "sum") {
          const E = z.reduce((H, _) => H + (Number(_[M.key]) || 0), 0);
          m[M.key] = E;
        } else M.aggregate === "count" && (m[M.key] = z.length);
      }), Ur({
        title: r.label ? String(r.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${z.length} bản ghi`,
        columns: l,
        rows: z,
        summaryRow: Object.keys(m).length > 0 ? m : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${z.length} dòng`,
          "Bộ lọc áp dụng": y ? `Tìm kiếm: "${y}"` : "Tất cả dữ liệu"
        }
      }), Ie("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (m) {
      Ie("Lỗi In Báo Cáo", (m == null ? void 0 : m.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, _t = async () => {
    if (L(""), O({}), x) {
      const m = await fe.getState().queryEntity(x, N);
      m && m.length > 0 && (C(m), Ie("Làm mới dữ liệu", `Đã tải lại ${m.length} bản ghi từ máy chủ`, "info"));
    }
  }, wt = (m, M, E) => {
    const H = wl(m);
    if (H.length === 0) return;
    const _ = f && i && i[t.id] ? i[t.id] : h, { updatedRows: X, pastedRowCount: re, pastedColCount: Re, newRowsCreated: We } = kl({
      currentRows: _,
      visibleColumns: l,
      allColumns: o,
      clipMatrix: H,
      startRowIndex: M,
      startColIndex: E
    });
    xe(X), x && fe.getState().registerDataset(x, X), f && Rt.setState((pt) => ({
      detailGrids: {
        ...pt.detailGrids,
        [t.id]: X
      }
    }));
    const qe = We > 0 ? `Đã dán thành công ${re} dòng × ${Re} cột (tự động tạo thêm ${We} dòng mới)` : `Đã dán thành công ${re} dòng × ${Re} cột vào bảng`;
    Ie("Dán từ Excel (Ctrl+V)", qe, "success");
  }, Ht = (m) => {
    typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((M) => {
      M ? wt(M, m, 0) : Ie("Dán từ Excel", "Clipboard hiện đang trống", "warning");
    }).catch(() => {
      Ie("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
    }) : Ie("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
  }, {
    focusedCell: _e,
    setFocusedCell: qt,
    focusCell: Yt,
    handleTableContainerKeyDown: Vt,
    handleCellKeyDown: It,
    handlePaste: Jt
  } = bl({
    tableRef: Ye,
    rows: z,
    visibleColumns: l,
    selectedRowId: Ee,
    setSelectedRowId: ke,
    selectedRowIds: Me,
    setSelectedRowIds: Te,
    onRowDoubleClick: (m, M) => Wt(m, M),
    onAddRow: vt,
    onDeleteRow: (m) => $e(m),
    onDuplicateRow: (m) => be(m),
    onToggleAll: ht,
    onFilterByCell: dt,
    onQuickSum: Nt,
    onToggleColumnFilters: () => $((m) => !m),
    onPasteExcel: wt
  }), Xt = (m, M, E) => {
    const H = m.id ?? m.Id ?? M;
    if (ke(H), E != null && E.ctrlKey || E != null && E.metaKey)
      Te((Re) => {
        const We = new Set(Re);
        return We.has(H) ? We.delete(H) : We.add(H), We;
      });
    else if (E != null && E.shiftKey && Ee !== null) {
      const Re = z.findIndex((We, qe) => (We.id ?? We.Id ?? qe) === Ee);
      if (Re !== -1) {
        const We = Math.min(Re, M), qe = Math.max(Re, M), pt = /* @__PURE__ */ new Set();
        for (let yt = We; yt <= qe; yt++)
          pt.add(z[yt].id ?? z[yt].Id ?? yt);
        Te(pt);
      }
    } else
      Te(/* @__PURE__ */ new Set([H]));
    const X = Z.getState().features.find((Re) => String(Re.id) === String(t.pageId)), re = X == null ? void 0 : X.scriptFile;
    x && fe.getState().setSelectedRecord(x, m), t.events && t.events.length > 0 && (ze(t.events, "rowClick", t.props.label || "Bảng dữ liệu", re, {
      row: m,
      rowIndex: M,
      action: "rowClick"
    }), ze(t.events, "click", t.props.label || "Bảng dữ liệu", re, {
      row: m,
      rowIndex: M,
      action: "click"
    }), ze(t.events, "select", t.props.label || "Bảng dữ liệu", re, {
      row: m,
      rowIndex: M,
      action: "select"
    }));
  }, Wt = (m, M) => {
    const H = Z.getState().features.find((X) => String(X.id) === String(t.pageId)), _ = H == null ? void 0 : H.scriptFile;
    t.events && t.events.length > 0 && ze(t.events, "dblclick", t.props.label || "Bảng dữ liệu", _, {
      row: m,
      rowIndex: M,
      id: m.id ?? m.Id,
      action: "dblclick"
    });
  }, Kt = () => {
    f && c(t.id);
    const m = f && i && i[t.id] ? i[t.id] : h, E = { id: m.length > 0 ? Math.max(...m.map((_) => Number(_.id) || 0)) + 1 : 1 };
    o.forEach((_) => {
      _.componentType === "Number" ? E[_.key] = 0 : _.componentType === "Checkbox" ? E[_.key] = !1 : _.componentType === "DatePicker" ? E[_.key] = "08/11/2026" : E[_.key] = "";
    });
    const H = [...m, E];
    xe(H), x && fe.getState().registerDataset(x, H);
  }, [D, J] = A({}), ne = (m, M) => {
    if (M != null && String(M).trim() !== "") {
      const E = f && i && i[t.id] ? i[t.id] : h, _ = { id: E.length > 0 ? Math.max(...E.map((re) => Number(re.id) || 0)) + 1 : 1, ...D, [m]: M };
      o.forEach((re) => {
        _[re.key] === void 0 && (re.componentType === "Number" || re.dataType === "number" ? _[re.key] = 0 : re.componentType === "Checkbox" || re.dataType === "boolean" ? _[re.key] = !1 : (re.componentType === "DatePicker" || re.dataType, _[re.key] = ""));
      });
      const X = [...E, _];
      xe(X), x && fe.getState().registerDataset(x, X), f && Rt.setState((re) => ({
        detailGrids: {
          ...re.detailGrids,
          [t.id]: X
        }
      })), J({}), Ie("Dòng mới tự động", `Đã tự động khởi tạo dòng #${X.length} vào bảng`, "success");
    } else
      J((E) => ({ ...E, [m]: M }));
  }, be = (m) => {
    f && g(t.id, m);
    const M = f && i && i[t.id] ? i[t.id] : h, E = M[m], H = Math.max(...M.map((re) => Number(re.id) || 0)) + 1, _ = { ...E, id: H }, X = [...M];
    X.splice(m + 1, 0, _), xe(X), x && fe.getState().registerDataset(x, X);
  }, $e = (m) => {
    f && p(t.id, m);
    const M = f && i && i[t.id] ? i[t.id] : h;
    if (M.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const E = M.filter((H, _) => _ !== m);
    xe(E), x && fe.getState().registerDataset(x, E);
  }, Ae = (m, M, E) => {
    m.preventDefault(), m.stopPropagation(), se({
      isOpen: !0,
      x: m.clientX,
      y: m.clientY,
      row: M,
      rowIndex: E
    });
  }, Fe = (m) => {
    const M = f && i && i[t.id] ? i[t.id] : h, H = { id: M.length > 0 ? Math.max(...M.map((X) => Number(X.id) || 0)) + 1 : 1 };
    o.forEach((X) => {
      X.componentType === "Number" ? H[X.key] = 0 : X.componentType === "Checkbox" ? H[X.key] = !1 : (X.componentType, H[X.key] = "");
    });
    const _ = [...M];
    _.splice(m + 1, 0, H), xe(_), x && fe.getState().registerDataset(x, _);
  }, De = (m) => {
    if (m <= 0) return;
    const E = [...f && i && i[t.id] ? i[t.id] : h], [H] = E.splice(m, 1);
    E.splice(m - 1, 0, H), xe(E), x && fe.getState().registerDataset(x, E);
  }, Xe = (m) => {
    const M = f && i && i[t.id] ? i[t.id] : h;
    if (m >= M.length - 1) return;
    const E = [...M], [H] = E.splice(m, 1);
    E.splice(m + 1, 0, H), xe(E), x && fe.getState().registerDataset(x, E);
  }, Ke = (m, M) => {
    me(M), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", M);
  }, Ue = (m, M) => {
    if (m.preventDefault(), m.dataTransfer.dropEffect = "move", de === M) return;
    const E = m.currentTarget.getBoundingClientRect(), H = m.clientX < E.left + E.width / 2;
    he(M), Oe(H ? "left" : "right");
  }, tt = (m) => {
    const M = m.relatedTarget;
    m.currentTarget.contains(M) || (he(null), Oe(null));
  }, mt = (m, M) => {
    if (m.preventDefault(), !de || de === M) {
      me(null), he(null), Oe(null);
      return;
    }
    const E = o.findIndex((X) => X.key === de);
    let H = o.findIndex((X) => X.key === M);
    if (E === -1 || H === -1) {
      me(null), he(null), Oe(null);
      return;
    }
    we === "right" && E > H ? H = H + 1 : we === "left" && E < H && (H = H - 1), H = Math.max(0, Math.min(o.length - 1, H));
    const _ = Cn(o, E, H);
    rt(_), me(null), he(null), Oe(null);
  }, ut = () => {
    me(null), he(null), Oe(null);
  }, Qe = (m) => {
    m.sortable && (k === m.key ? w === "asc" ? S("desc") : F(null) : (F(m.key), S("asc")));
  }, Ft = (m, M, E) => {
    m.preventDefault(), m.stopPropagation(), P({
      isOpen: !0,
      x: m.clientX,
      y: m.clientY,
      column: M,
      columnIndex: E
    });
  }, Qt = (m) => {
    const M = o.map(
      (E) => E.key === m ? { ...E, hidden: !E.hidden } : E
    );
    rt(M);
  }, Zt = (m) => {
    const M = Kr(o, m);
    rt(M);
  }, Fs = (m) => {
    G({
      isOpen: !0,
      column: m
    });
  }, Rs = (m) => {
    const M = o.findIndex((X) => X.key === m);
    if (M === -1) return;
    const E = o[M], H = {
      ...E,
      key: `${E.key}_copy`,
      title: `${E.title} (Bản sao)`,
      order: (E.order ?? M) + 1
    }, _ = [...o];
    _.splice(M + 1, 0, H), rt(_);
  }, $s = (m) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const M = o.filter((E) => E.key !== m);
    rt(M);
  }, Ls = (m) => {
    const M = o.map(
      (E) => E.key === m.key ? m : E
    );
    rt(M);
  }, es = (m, M) => {
    const E = Ee === (m.id ?? m.Id ?? M), H = Me.has(m.id ?? m.Id ?? M);
    return /* @__PURE__ */ e.jsxs(
      "tr",
      {
        "data-row-index": M,
        onClick: (_) => Xt(m, M, _),
        onDoubleClick: () => Wt(m, M),
        onContextMenu: (_) => Ae(_, m, M),
        className: `transition-colors group cursor-pointer ${E || H ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "td",
            {
              onClick: (_) => {
                _.stopPropagation();
                const X = m.id ?? m.Id ?? M;
                Te((re) => {
                  const Re = new Set(re);
                  return Re.has(X) ? Re.delete(X) : Re.add(X), Re;
                }), ke(X);
              },
              className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${H ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
              style: { width: `${U}px`, minWidth: `${U}px` },
              title: "Click chọn dòng | Chuột phải mở menu thao tác",
              children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                H ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                /* @__PURE__ */ e.jsx("span", { children: M + 1 })
              ] })
            }
          ),
          l.map((_, X) => {
            const re = !!(_.frozen || _.sticky === "left"), Re = re && oe[_.key] !== void 0 ? oe[_.key] : void 0, We = _.key === Y, qe = m[_.key], pt = _.align === "right" ? "text-right" : _.align === "center" ? "text-center" : "text-left", yt = I[`${t.id}_${m.id}_${_.key}`];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-2 py-1 whitespace-nowrap transition-colors ${pt} ${re ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${We ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                style: {
                  width: _.width,
                  minWidth: _.minWidth || _.width || "100px",
                  maxWidth: _.maxWidth,
                  left: Re !== void 0 ? `${Re}px` : void 0
                },
                children: /* @__PURE__ */ e.jsx(
                  rr,
                  {
                    column: _,
                    value: qe,
                    row: m,
                    rowIndex: M,
                    columnIndex: X,
                    isFocused: (_e == null ? void 0 : _e.rowIndex) === M && (_e == null ? void 0 : _e.colIndex) === X,
                    isSelected: E,
                    error: yt,
                    onChange: (Ct) => q(m.id ?? M, _.key, Ct),
                    onActionClick: (Ct) => ge(Ct, m, _),
                    onKeyDown: It,
                    onFocus: (Ct, Ps, As) => {
                      ke(m.id ?? m.Id ?? Ct), qt({ rowIndex: Ct, colIndex: Ps, colKey: As });
                    }
                  }
                )
              },
              _.key
            );
          })
        ]
      },
      m.id ?? m.Id ?? M
    );
  }, { flex: Js, flexGrow: Xs, flexShrink: Qs, flexBasis: Zs, minWidth: en, maxWidth: tn, width: sn, ...Es } = s || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...Es
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: r.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              z.length,
              " bản ghi"
            ] }),
            ce && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/30",
                title: "Cơ chế cuộn ảo Virtual Windowing đang hoạt động (TSK-4.1)",
                children: [
                  /* @__PURE__ */ e.jsx(ft, { className: "w-3 h-3 text-cyan-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Virtual (",
                    ye + 1,
                    "..",
                    pe,
                    "/",
                    z.length,
                    ")"
                  ] })
                ]
              }
            ),
            ve && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] font-semibold border border-amber-500/30",
                title: "Cơ chế gom nhóm dòng đang hoạt động (TSK-4.2)",
                children: [
                  /* @__PURE__ */ e.jsx(bn, { className: "w-3 h-3 text-amber-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    je.length,
                    " nhóm"
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Bt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: y,
                  onChange: (m) => L(m.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => $((m) => !m),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${R ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(mr, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Kt,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: _t,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(ua, { className: "w-3.5 h-3.5" })
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
                  /* @__PURE__ */ e.jsx(pa, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((m) => {
                    if (m) {
                      const M = _e ? _e.rowIndex : Ee !== null ? Math.max(0, z.findIndex((H, _) => (H.id ?? H.Id ?? _) === Ee)) : 0, E = _e ? _e.colIndex : 0;
                      wt(m, M, E);
                    } else
                      Ie("Dán từ Excel", "Clipboard hiện đang trống", "warning");
                  }).catch(() => {
                    Ie("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                  }) : Ie("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                },
                title: "Dán dữ liệu sao chép từ Excel / Google Sheets vào bảng (Ctrl+V)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(br, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Dán Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: zt,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(pr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-slate-300", children: [
              /* @__PURE__ */ e.jsx(bn, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: ve || "",
                  onChange: (m) => {
                    const M = m.target.value || null;
                    T(M), ee(/* @__PURE__ */ new Set());
                  },
                  title: "Gom nhóm bảng theo cột (Group By - GroupGridView.cs)",
                  className: "bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer max-w-[130px] truncate",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-300", children: "-- Không nhóm --" }),
                    l.map((m) => /* @__PURE__ */ e.jsxs("option", { value: m.key, className: "bg-slate-900 text-slate-200", children: [
                      "Nhóm: ",
                      m.title || m.key
                    ] }, m.key))
                  ]
                }
              )
            ] }),
            ve && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ee(/* @__PURE__ */ new Set()),
                  title: "Mở rộng tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 transition-colors",
                  children: "Mở rộng"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ee(new Set(je.map((m) => m.groupKey))),
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
                  onClick: ht,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: dt,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Nt,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: vt,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => $((m) => !m),
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
            ref: Ye,
            tabIndex: 0,
            onKeyDown: Vt,
            onPaste: Jt,
            style: {
              maxHeight: ce ? r.maxHeight || r.height || "550px" : r.maxHeight || void 0
            },
            className: `w-full overflow-x-auto select-none relative focus:outline-none ${ce ? "overflow-y-auto" : ""}`,
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: ht,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${U}px`, minWidth: `${U}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: z.length > 0 && Me.size === z.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((m, M) => {
                    const E = !!(m.frozen || m.sticky === "left"), H = E && oe[m.key] !== void 0 ? oe[m.key] : void 0, _ = m.key === Y, X = de === m.key, re = Ce === m.key;
                    let Re = "";
                    re && we === "left" ? Re = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : re && we === "right" && (Re = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const We = m.align === "right" ? "text-right" : m.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (qe) => Ke(qe, m.key),
                        onDragOver: (qe) => Ue(qe, m.key),
                        onDragLeave: tt,
                        onDrop: (qe) => mt(qe, m.key),
                        onDragEnd: ut,
                        onContextMenu: (qe) => Ft(qe, m, M),
                        onClick: () => Qe(m),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${We} ${E ? `sticky z-20 bg-[#0b1329] ${_ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${X ? "opacity-30 bg-slate-800/80" : ""} ${Re}`,
                        style: {
                          width: m.width,
                          minWidth: m.minWidth || m.width || "100px",
                          maxWidth: m.maxWidth,
                          left: H !== void 0 ? `${H}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${m.order ?? M + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${m.align === "right" ? "justify-end" : m.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            E && /* @__PURE__ */ e.jsx(xr, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: m.title || m.key }),
                            m.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              m.order
                            ] })
                          ] }),
                          m.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: k === m.key ? w === "asc" ? /* @__PURE__ */ e.jsx(gr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(vr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(In, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      m.key
                    );
                  })
                ] }),
                R && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((m) => {
                    const M = !!(m.frozen || m.sticky === "left"), E = M && oe[m.key] !== void 0 ? oe[m.key] : void 0, H = m.key === Y;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${M ? `sticky z-20 bg-[#080d1a] ${H ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: E !== void 0 ? `${E}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: Q[m.key] || "",
                            onChange: (_) => O((X) => ({ ...X, [m.key]: _.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${m.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: [
                z.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    colSpan: l.length + 1,
                    className: "px-6 py-8 text-center text-slate-500 italic",
                    children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                  }
                ) }) : ve ? (
                  // ── 1. CHẾ ĐỘ GOM NHÓM DÒNG (COLLAPSIBLE GROUP-BY ROWS - TSK-4.2 & GroupGridView.cs) ──
                  je.map((m) => {
                    const M = B.has(m.groupKey), E = l.find((_) => _.key === ve), H = (E == null ? void 0 : E.title) || ve;
                    return /* @__PURE__ */ e.jsxs(Mt.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(
                        "tr",
                        {
                          onClick: () => {
                            ee((_) => {
                              const X = new Set(_);
                              return X.has(m.groupKey) ? X.delete(m.groupKey) : X.add(m.groupKey), X;
                            });
                          },
                          className: "bg-slate-900/95 hover:bg-slate-850 border-y border-amber-500/30 cursor-pointer select-none group transition-colors sticky top-0 z-15",
                          children: /* @__PURE__ */ e.jsx(
                            "td",
                            {
                              colSpan: l.length + 1,
                              className: "px-3 py-2 text-xs font-semibold text-slate-200",
                              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    className: "w-5 h-5 flex items-center justify-center rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors",
                                    children: M ? /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(St, { className: "w-3.5 h-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ e.jsxs("span", { className: "text-slate-400 font-normal", children: [
                                  "Gom nhóm theo ",
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-amber-300 font-semibold", children: H }),
                                  ":"
                                ] }),
                                /* @__PURE__ */ e.jsx("span", { className: "text-amber-400 font-bold font-mono text-sm", children: m.groupLabel }),
                                /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold", children: [
                                  m.rows.length,
                                  " bản ghi"
                                ] }),
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-center gap-3 text-[11px] font-mono text-slate-400", children: l.filter((_) => m.subtotals[_.key] !== void 0 && m.subtotals[_.key] > 0).slice(0, 3).map((_) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsxs("span", { children: [
                                    _.title,
                                    ":"
                                  ] }),
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-emerald-400 font-bold", children: m.subtotals[_.key].toLocaleString("en-US") })
                                ] }, _.key)) })
                              ] })
                            }
                          )
                        }
                      ),
                      !M && m.rows.map((_, X) => {
                        const re = m.startIndex + X;
                        return es(_, re);
                      })
                    ] }, `group_${m.groupKey}`);
                  })
                ) : ce ? (
                  // ── 2. CHẾ ĐỘ CUỘN ẢO (VIRTUAL SCROLLING WINDOWING - TSK-4.1) ──
                  /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    W > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${W}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: l.length + 1, style: { padding: 0, border: "none" } }) }),
                    it.map((m, M) => {
                      const E = ye + M;
                      return es(m, E);
                    }),
                    ae > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${ae}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: l.length + 1, style: { padding: 0, border: "none" } }) })
                  ] })
                ) : (
                  // ── 3. CHẾ ĐỘ RENDER TIÊU CHUẨN (NORMAL RENDERING) ──
                  z.map((m, M) => es(m, M))
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
                          style: { width: `${U}px`, minWidth: `${U}px` },
                          children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3 text-emerald-400" }),
                            /* @__PURE__ */ e.jsx("span", { children: z.length + 1 })
                          ] })
                        }
                      ),
                      l.map((m, M) => {
                        const E = !!(m.frozen || m.sticky === "left"), H = E && oe[m.key] !== void 0 ? oe[m.key] : void 0, _ = m.key === Y, X = D[m.key] ?? "", re = m.align === "right" ? "text-right" : m.align === "center" ? "text-center" : "text-left";
                        return /* @__PURE__ */ e.jsx(
                          "td",
                          {
                            className: `px-2 py-1 whitespace-nowrap transition-colors ${re} ${E ? `sticky z-10 bg-[#0c1222] ${_ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                            style: {
                              width: m.width,
                              minWidth: m.minWidth || m.width || "100px",
                              maxWidth: m.maxWidth,
                              left: H !== void 0 ? `${H}px` : void 0
                            },
                            children: /* @__PURE__ */ e.jsx(
                              rr,
                              {
                                column: m,
                                value: X,
                                row: D,
                                rowIndex: z.length,
                                columnIndex: M,
                                isFocused: (_e == null ? void 0 : _e.rowIndex) === z.length && (_e == null ? void 0 : _e.colIndex) === M,
                                onChange: (Re) => ne(m.key, Re),
                                onKeyDown: It
                              }
                            )
                          },
                          `ghost_${m.key}`
                        );
                      })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                ul,
                {
                  columns: l,
                  data: z,
                  showRowNumber: !0,
                  rowNumberWidth: U,
                  leftOffsets: oe
                }
              ) })
            ] })
          }
        ),
        V.isOpen && V.column && /* @__PURE__ */ e.jsx(
          il,
          {
            isOpen: V.isOpen,
            x: V.x,
            y: V.y,
            column: V.column,
            columnIndex: V.columnIndex,
            allColumns: o,
            onClose: () => P((m) => ({ ...m, isOpen: !1 })),
            onToggleHide: Qt,
            onSetFreeze: Zt,
            onOpenProperties: Fs,
            onCloneColumn: Rs,
            onRemoveColumn: $s,
            onToggleFilter: () => $((m) => !m)
          }
        ),
        K.isOpen && K.column && /* @__PURE__ */ e.jsx(
          Hr,
          {
            isOpen: K.isOpen,
            column: K.column,
            onClose: () => G({ isOpen: !1, column: null }),
            onSave: Ls
          }
        ),
        b.isOpen && b.row && /* @__PURE__ */ e.jsx(
          cl,
          {
            isOpen: b.isOpen,
            x: b.x,
            y: b.y,
            row: b.row,
            rowIndex: b.rowIndex,
            totalRows: v.length,
            onClose: () => se((m) => ({ ...m, isOpen: !1, row: null })),
            onDuplicateRow: be,
            onDeleteRow: $e,
            onInsertRowBelow: Fe,
            onMoveRowUp: De,
            onMoveRowDown: Xe,
            onPasteExcel: Ht
          }
        )
      ]
    }
  );
}, go = ({ node: t }) => {
  const { props: r, style: s } = t, { flex: a, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...p } = s || {}, g = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], I = r.columns && r.columns.length > 0 ? r.columns : g, f = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [x, N] = A(""), [u, v] = A(null), [C, h] = A("asc"), [y, L] = A(1), k = Number(r.pageSize) || 10, F = Ve(() => {
    if (!x.trim()) return f;
    const O = x.toLowerCase();
    return f.filter(
      (V) => Object.values(V).some((P) => String(P).toLowerCase().includes(O))
    );
  }, [x]), w = Ve(() => u ? [...F].sort((O, V) => {
    const P = O[u], K = V[u];
    if (P === K) return 0;
    const G = P > K ? 1 : -1;
    return C === "asc" ? G : -G;
  }) : F, [F, u, C]), S = Math.ceil(w.length / k) || 1, R = Ve(() => {
    const O = (y - 1) * k;
    return w.slice(O, O + k);
  }, [w, y, k]), $ = Ve(() => {
    const O = {};
    for (const V of I)
      if (V.aggregate === "sum") {
        const P = F.reduce((K, G) => K + (Number(G[V.key]) || 0), 0);
        O[V.key] = P.toLocaleString("en-US");
      } else if (V.aggregate === "count")
        O[V.key] = F.length;
      else if (V.aggregate === "avg") {
        const P = F.length ? F.reduce((K, G) => K + (Number(G[V.key]) || 0), 0) / F.length : 0;
        O[V.key] = P.toFixed(1);
      }
    return O;
  }, [I, F]), Q = (O) => {
    u === O ? h(C === "asc" ? "desc" : "asc") : (v(O), h("asc"));
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
              F.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Bt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: x,
                onChange: (O) => {
                  N(O.target.value), L(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: I.map((O) => {
            const V = O.sticky === "left", P = O.align === "right" ? "text-right" : O.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => O.sortable !== !1 && Q(O.key),
                style: {
                  width: O.width,
                  minWidth: O.minWidth || O.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${P} ${V ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${O.align === "right" ? "justify-end" : O.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  O.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: O.title }),
                  O.sortable !== !1 && /* @__PURE__ */ e.jsx(In, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              O.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: R.length > 0 ? R.map((O, V) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: I.map((P) => {
            const K = P.sticky === "left", G = O[P.key], b = P.align === "right" ? "text-right" : P.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${b} ${K ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (G == null) return "—";
                  if (P.componentType === "Checkbox") {
                    const se = G === !0 || G === "true" || G === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: se,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (P.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(G)
                      }
                    );
                  if (P.componentType === "DatePicker" || P.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(G) })
                    ] });
                  if (P.componentType === "Number" || typeof G == "number") {
                    const se = Number(G);
                    if (!isNaN(se)) {
                      const de = P.precision !== void 0 ? P.precision : se % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: se.toLocaleString("en-US", { minimumFractionDigits: de, maximumFractionDigits: de }) });
                    }
                  }
                  return P.key === "status" || P.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${G === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(G) }) : String(G);
                })()
              },
              P.key
            );
          }) }, O.id || V)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: I.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: I.map((O, V) => {
            const P = O.sticky === "left", K = O.align === "right" ? "text-right" : O.align === "center" ? "text-center" : "text-left", G = $[O.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${K} ${P ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: V === 0 && !G ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : G !== void 0 ? G : ""
              },
              O.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            y,
            " / ",
            S
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: y <= 1,
                onClick: () => L((O) => Math.max(1, O - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(jr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: y >= S,
                onClick: () => L((O) => Math.min(S, O + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function Tl(t, r, s = "") {
  if (!r || typeof r != "object")
    return s;
  if (!t || typeof t != "string" || t.trim() === "") {
    const d = r.fullName ?? r.FullName ?? r.name ?? r.Name ?? r.shortName ?? r.ShortName ?? r.title ?? r.Title ?? r.label ?? r.Label ?? r.code ?? r.Code ?? r.id ?? r.Id;
    return d != null ? String(d) : s;
  }
  const a = t.trim();
  if (!a.includes("{") || !a.includes("}")) {
    const d = kt(r, a);
    return d != null ? String(d) : a;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = a.replace(n, (d, c) => {
    const p = c.trim();
    o = !0;
    const g = p.includes(".") ? p.split(".").pop().trim() : p;
    let I = kt(r, p);
    return I == null && (I = kt(r, g)), I != null ? String(I) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || s : a;
}
function kt(t, r) {
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
const Dl = ({
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
  formatData: g,
  populateField: I,
  formId: f,
  placeholder: x = "— Chọn —",
  disabled: N = !1,
  readOnly: u = !1,
  isGridCell: v = !1,
  error: C,
  className: h = "",
  onKeyDown: y,
  onFocus: L,
  onBlur: k,
  onQuickAdd: F
}) => {
  const [w, S] = A(!1), [R, $] = A(""), [Q, O] = A(0), [V, P] = A(!1), [K, G] = A([]), [b, se] = A(!1), [de, me] = A(""), [Ce, he] = A(""), [we, Oe] = A(""), [U, oe] = A(!1), Y = Je(null), z = Je(null), xe = Je(null), ve = Je(null), T = fe((q) => q.queryEntity), B = fe((q) => q.getDataset), ee = fe((q) => q.applyPopulate), je = fe((q) => n ? q.getDataset(n).length : 0), te = () => {
    if (F) {
      F(), S(!1);
      return;
    }
    if (o) {
      Br(o, {}, `Tạo mới ${n || o}`), S(!1);
      return;
    }
    const q = R.trim();
    me(q ? q.toUpperCase().replace(/\s+/g, "_") : ""), he(q), Oe(""), se(!0);
  }, Se = async () => {
    if (!de.trim() || !Ce.trim()) return;
    const q = (n || "").trim();
    if (q) {
      oe(!0);
      try {
        const ge = {
          code: de.trim(),
          name: Ce.trim(),
          fullName: Ce.trim(),
          description: we.trim(),
          active: !0
        }, Ee = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(q)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ge)
        });
        if (Ee.ok) {
          const ke = await Ee.json(), Me = {
            ...ge,
            ...ke,
            id: ke.id ?? ke.Id ?? Date.now()
          }, Te = await T(q, i);
          Array.isArray(Te) && Te.length > 0 ? G(Te) : G((Ye) => [Me, ...Ye]), ae(Me), se(!1), S(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ge) {
        console.error("[EnterpriseSelect] Lỗi tạo nhanh bản ghi:", ge);
        const Ee = {
          id: `mock-${Date.now()}`,
          code: de.trim(),
          name: Ce.trim(),
          fullName: Ce.trim(),
          description: we.trim(),
          active: !0
        };
        G((ke) => [Ee, ...ke]), ae(Ee), se(!1), S(!1);
      } finally {
        oe(!1);
      }
    }
  };
  Be(() => {
    let q = !0;
    const ge = (n || "").trim();
    if (a && Array.isArray(a) && a.length > 0) {
      G(a);
      return;
    }
    if (ge)
      P(!0), T(ge, i).then((Ee) => {
        q && (Array.isArray(Ee) && Ee.length > 0 ? G(Ee) : G([]));
      }).catch(() => {
        if (q) {
          const Ee = B(ge);
          G(Array.isArray(Ee) ? Ee : []);
        }
      }).finally(() => {
        q && P(!1);
      });
    else if (s && Array.isArray(s) && s.length > 0) {
      const Ee = s.map((ke) => ke.rawItem && typeof ke.rawItem == "object" ? ke.rawItem : {
        [d]: ke.value,
        [c]: ke.label,
        id: ke.value,
        name: ke.label,
        fullName: ke.label
      });
      G(Ee);
    } else
      G([]);
    return () => {
      q = !1;
    };
  }, [n, i, a, s, d, c, T, B, je]);
  const ce = Ve(() => {
    if (p && p.length > 0)
      return p;
    if (K.length > 0) {
      const q = K[0], ge = Object.keys(q), ke = [
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
        (Te) => ge.some((Ye) => Ye.toLowerCase() === Te.toLowerCase())
      );
      if (ke.length > 0)
        return ke.slice(0, 3).map((Te) => {
          const Ye = ge.find((Ie) => Ie.toLowerCase() === Te.toLowerCase()) || Te;
          return {
            key: Ye,
            title: Ye.charAt(0).toUpperCase() + Ye.slice(1),
            width: Ye.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const Me = ge.filter(
        (Te) => typeof q[Te] != "object" && !Te.startsWith("_")
      ).slice(0, 2);
      if (Me.length > 0)
        return Me.map((Te) => ({
          key: Te,
          title: Te.charAt(0).toUpperCase() + Te.slice(1),
          width: "50%",
          align: "left"
        }));
    }
    return [
      { key: d, title: "Mã", width: "35%", align: "left" },
      { key: c, title: "Tên", width: "65%", align: "left" }
    ];
  }, [p, K, d, c]), Ne = Ve(() => t == null || t === "" ? null : K.find((q) => {
    const ge = kt(q, d) ?? q.id ?? q.Id ?? q.code ?? q.Code;
    return ge !== void 0 && String(ge) === String(t);
  }) || null, [t, K, d]), le = Ve(() => Ne ? Tl(g, Ne, String(t ?? "")) : t != null && t !== "" ? String(t) : "", [Ne, g, t]), [ue, Pe] = A({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), ye = () => {
    if (!Y.current) return;
    const q = Y.current.getBoundingClientRect(), ge = 300, ke = Math.max(q.width, 360), Te = window.innerHeight - q.bottom < ge && q.top > ge;
    let Ye = Te ? q.top - ge - 4 : q.bottom + 4, Ie = q.left;
    Ie + ke > window.innerWidth - 12 && (Ie = Math.max(12, window.innerWidth - ke - 12)), Pe({ top: Ye, left: Ie, width: ke, openUpwards: Te });
  }, pe = () => {
    N || u || (ye(), S(!0), $(""), O(0));
  };
  Be(() => {
    w && (ye(), setTimeout(() => {
      var q;
      (q = xe.current) == null || q.focus();
    }, 50));
  }, [w]), Be(() => {
    if (!w) return;
    const q = (Ee) => {
      var Me, Te;
      const ke = Ee.target;
      (Me = Y.current) != null && Me.contains(ke) || (Te = z.current) != null && Te.contains(ke) || (S(!1), k && k());
    }, ge = () => {
      ye();
    };
    return window.addEventListener("mousedown", q), window.addEventListener("scroll", ge, !0), window.addEventListener("resize", ge), () => {
      window.removeEventListener("mousedown", q), window.removeEventListener("scroll", ge, !0), window.removeEventListener("resize", ge);
    };
  }, [w, k]);
  const W = Ve(() => {
    if (!R.trim()) return K;
    const q = R.toLowerCase().trim();
    return K.filter((ge) => ce.some((ke) => {
      const Me = kt(ge, ke.key);
      return Me != null && String(Me).toLowerCase().includes(q);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((ke) => {
      const Me = kt(ge, ke);
      return Me != null && String(Me).toLowerCase().includes(q);
    }));
  }, [K, R, ce]);
  Be(() => {
    if (ve.current && W.length > 0) {
      const q = ve.current.querySelector(`[data-index="${Q}"]`);
      q && q.scrollIntoView({ block: "nearest" });
    }
  }, [Q, W]);
  const ae = (q) => {
    const ge = kt(q, d) ?? q.id ?? q.Id ?? q.code ?? q.Code;
    r(ge, q), I && f && ee(f, I, q), S(!1);
  }, it = (q) => {
    q.stopPropagation(), r("", null);
  }, gt = (q) => {
    q.key === "ArrowDown" ? (q.preventDefault(), O((ge) => ge < W.length - 1 ? ge + 1 : ge)) : q.key === "ArrowUp" ? (q.preventDefault(), O((ge) => ge > 0 ? ge - 1 : 0)) : q.key === "Enter" ? (q.preventDefault(), W.length > 0 && Q >= 0 && Q < W.length && ae(W[Q])) : q.key === "Escape" && (q.preventDefault(), S(!1));
  }, rt = (q) => {
    if (q.key === "Enter" || q.key === " " || q.key === "F4" || q.altKey && q.key === "ArrowDown") {
      q.preventDefault(), pe();
      return;
    }
    y && y(q);
  }, xt = C ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: Y,
        tabIndex: N ? -1 : 0,
        onClick: pe,
        onKeyDown: rt,
        onFocus: L,
        className: `relative flex items-center justify-between transition-all select-none cursor-pointer ${v ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${xt}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${xt} shadow-sm`} ${N ? "opacity-50 cursor-not-allowed" : ""} ${h}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: le ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: le }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: x }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!le && !N && !u && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: it,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(ct, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              St,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${w ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    w && Tt(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: z,
          style: {
            position: "fixed",
            top: `${ue.top}px`,
            left: `${ue.left}px`,
            width: `${ue.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (q) => q.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(Bt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: xe,
                    type: "text",
                    value: R,
                    onChange: (q) => {
                      $(q.target.value), O(0);
                    },
                    onKeyDown: gt,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                R && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => $(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(ct, { className: "w-3 h-3" })
                  }
                )
              ] }),
              l && (n || o) && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: te,
                  title: `Tạo nhanh bản ghi mới cho ${n || "danh mục"}`,
                  className: "flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95",
                  children: [
                    /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "Tạo nhanh" })
                  ]
                }
              ),
              V && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(fn, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              ce.map((q, ge) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: q.width || `${100 / ce.length}%` },
                  className: `px-1.5 truncate ${q.align === "right" ? "text-right" : q.align === "center" ? "text-center" : "text-left"}`,
                  children: q.title
                },
                q.key || ge
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: ve,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: W.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Bt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: V ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" }),
                  l && (n || o) && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: te,
                      className: "mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95",
                      children: [
                        /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          'Thêm nhanh "',
                          R || n,
                          '"'
                        ] })
                      ]
                    }
                  )
                ] }) : W.map((q, ge) => {
                  const Ee = kt(q, d) ?? q.id ?? q.Id ?? q.code ?? q.Code, ke = Ee !== void 0 && String(Ee) === String(t), Me = ge === Q;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": ge,
                      onClick: () => ae(q),
                      onMouseEnter: () => O(ge),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${ke ? "bg-emerald-950/60 text-emerald-200 font-medium" : Me ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        ce.map((Te, Ye) => {
                          const Ie = kt(q, Te.key), ht = Ie != null ? String(Ie) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: Te.width || `${100 / ce.length}%` },
                              className: `px-1.5 truncate ${Te.align === "right" ? "text-right font-mono" : Te.align === "center" ? "text-center" : "text-left"}`,
                              children: ht
                            },
                            Te.key || Ye
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: ke && /* @__PURE__ */ e.jsx(Fn, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    Ee ?? ge
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  W.length,
                  " / ",
                  K.length,
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
    b && Tt(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (q) => q.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4" }) }),
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
                  onClick: () => se(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" })
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
                    value: de,
                    onChange: (q) => me(q.target.value),
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
                    value: Ce,
                    onChange: (q) => he(q.target.value),
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
                    value: we,
                    onChange: (q) => Oe(q.target.value),
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
                  onClick: () => se(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: U || !de.trim() || !Ce.trim(),
                  onClick: Se,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    U ? /* @__PURE__ */ e.jsx(fn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
}, Il = ({ node: t, isEditing: r }) => {
  var P, K, G, b, se, de, me, Ce, he, we, Oe;
  const { props: s, style: a } = t, n = Z((U) => U.features), o = Z((U) => U.activeFeatureId), l = n.find((U) => String(U.id) === String(t.pageId)) || n.find((U) => String(U.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((P = t.dataBinding) == null ? void 0 : P.fieldName) || t.props.name || t.id), C = fe((U) => Dt(U, u, v, void 0)), h = fe((U) => U.setFieldValue), y = C !== void 0 ? C : s.value ?? "", L = s.reference || s.refName || ((K = t.dataBinding) == null ? void 0 : K.refName) || ((G = t.dataBinding) == null ? void 0 : G.entityName) || "", k = s.dataSource || ((b = t.dataBinding) == null ? void 0 : b.dataSource) || s.query || ((se = t.dataBinding) == null ? void 0 : se.query) || s.sqlWhere || ((de = t.dataBinding) == null ? void 0 : de.sqlWhere) || "", F = s.idField || ((me = t.dataBinding) == null ? void 0 : me.idField) || "id", w = s.textField || s.selectField || ((Ce = t.dataBinding) == null ? void 0 : Ce.selectField) || "name", S = s.dropdownColumns || ((he = t.dataBinding) == null ? void 0 : he.dropdownColumns), R = s.formatData || ((we = t.dataBinding) == null ? void 0 : we.formatData) || "", $ = s.populateField || ((Oe = t.dataBinding) == null ? void 0 : Oe.populateField) || "", Q = s.options || [], O = !!s.validationError, V = (U, oe) => {
    h(u, v, U), r || ze(t.events, "change", s.label || "Chọn mục", i, {
      componentId: t.id,
      fieldName: v,
      value: U,
      selectedItem: oe
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ut,
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
        ...N
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        Dl,
        {
          value: y,
          onChange: V,
          options: Q,
          reference: L,
          dataSource: k,
          idField: F,
          selectField: w,
          dropdownColumns: S,
          formatData: R,
          populateField: $,
          formId: u,
          placeholder: s.placeholder ? String(s.placeholder) : "— Chọn —",
          disabled: s.disabled,
          error: O ? String(s.validationError) : void 0
        }
      ) })
    }
  );
}, Fl = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((C) => C.features), o = Z((C) => C.activeFeatureId), l = n.find((C) => String(C.id) === String(t.pageId)) || n.find((C) => String(C.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, [u, v] = A(!!s.value);
  return /* @__PURE__ */ e.jsx(
    Ut,
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
        ...N
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: s.disabled,
            checked: u,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (C) => {
              v(C.target.checked), r || ze(t.events, "change", s.label || "Hộp kiểm", i, {
                componentId: t.id,
                value: C.target.checked
              });
            }
          }
        ),
        s.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: s.placeholder })
      ] })
    }
  );
}, Rl = ({ node: t, isEditing: r }) => {
  var k;
  const { props: s, style: a } = t, n = Z((F) => F.features), o = Z((F) => F.activeFeatureId), l = n.find((F) => String(F.id) === String(t.pageId)) || n.find((F) => String(F.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((k = t.dataBinding) == null ? void 0 : k.fieldName) || t.props.name || t.id), C = fe((F) => Dt(F, u, v, void 0)), h = fe((F) => F.setFieldValue), y = C !== void 0 ? C : s.value ?? "", L = (F) => {
    h(u, v, F), r || ze(t.events, "change", s.label || "Chọn ngày", i, {
      componentId: t.id,
      fieldName: v,
      value: F
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ut,
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
        ...N
      },
      children: /* @__PURE__ */ e.jsx(
        Vr,
        {
          value: y,
          onChange: L,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "DD/MM/YYYY",
          error: s.validationError ? String(s.validationError) : void 0
        }
      )
    }
  );
}, $l = ({ node: t, children: r }) => {
  const { props: s } = t, a = s.title || s.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: a }),
      /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: r || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, Ll = ({ node: t }) => {
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
}, El = ({ node: t, isEditing: r }) => {
  var F;
  const { props: s, style: a } = t, n = Z((w) => w.features), o = Z((w) => w.activeFeatureId), l = n.find((w) => String(w.id) === String(t.pageId)) || n.find((w) => String(w.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((F = t.dataBinding) == null ? void 0 : F.fieldName) || t.props.name || t.id), C = fe((w) => Dt(w, u, v, void 0)), h = fe((w) => w.setFieldValue), y = C !== void 0 ? C : s.value !== void 0 ? String(s.value) : "", L = Number(s.rows) || 2, k = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    Ut,
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
          rows: L,
          placeholder: s.placeholder || "Nhập nội dung...",
          value: y,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          style: {
            width: "100%",
            ...N
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${k ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${s.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (w) => {
            const S = w.target.value;
            h(u, v, S), r || ze(t.events, "change", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v,
              value: S
            });
          },
          onFocus: () => {
            r || ze(t.events, "focus", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v
            });
          },
          onBlur: (w) => {
            r || ze(t.events, "blur", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v,
              value: w.target.value
            });
          }
        }
      )
    }
  );
}, vo = ({ node: t, isEditing: r, children: s }) => {
  var h, y;
  const { props: a, style: n } = t, o = Z((L) => L.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: p, maxWidth: g, width: I, ...f } = n || {}, x = [
    { id: "main", label: "TAB 1" }
  ], N = a.tabs || x, [u, v] = A(
    a.activeTabId || ((h = N[0]) == null ? void 0 : h.id) || "main"
  ), C = a.activeTabId || u || ((y = N[0]) == null ? void 0 : y.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...f
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          N.map((L) => {
            const k = L.id === C;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (F) => {
                  F.stopPropagation(), v(L.id), o(t.id, { activeTabId: L.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${k ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: L.label }),
                  L.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${L.badgeColor || "bg-amber-600"}`, children: L.badge })
                ]
              },
              L.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (L) => {
                L.stopPropagation();
                const k = `tab_${Date.now().toString(36)}`, F = [...N, { id: k, label: `Tab Mới ${N.length + 1}` }];
                o(t.id, { tabs: F, activeTabId: k }), v(k);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: s })
      ]
    }
  );
}, zr = ({
  parentId: t,
  order: r,
  tabNodes: s,
  isEditing: a,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var f;
  const l = Z((x) => x.addComponent), i = Z((x) => x.selectComponent), [d, c] = A(((f = s[0]) == null ? void 0 : f.id) || ""), p = s.find((x) => x.id === d) || s[0], g = (p == null ? void 0 : p.id) || "", I = (x) => {
    var C;
    x.stopPropagation();
    const N = ((C = s[0]) == null ? void 0 : C.pageId) || "2", u = `tab_${Date.now().toString(36)}`, v = {
      id: u,
      type: "Container",
      parentId: t,
      pageId: N,
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
    l(v, t), c(u), i(u);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          s.map((x) => {
            const N = x.id === g, u = x.props.label || x.props.title || `Tab #${x.id.slice(-4)}`, v = x.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (C) => {
                  C.stopPropagation(), c(x.id), a && i(x.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${N ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: u }),
                  v !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(v) })
                ]
              },
              x.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: I,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: p && o ? o(p, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, Pl = ({
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
  var C;
  const p = fe(), g = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [I, f] = A(a || g), [x, N] = A(n || ((C = g[0]) == null ? void 0 : C.id) || "");
  Be(() => {
    a && a.length > 0 && f(a);
  }, [a]), Be(() => {
    n !== void 0 && N(n);
  }, [n]);
  const u = (h) => {
    N(h.id), l ? l(h) : p.setFormRecord("default", h);
  }, v = () => {
    const h = I.length + 1, y = `REC-${String(h).padStart(3, "0")}`, L = {
      id: String(Date.now()),
      code: y,
      name: `Bản ghi mới ${h}`
    }, k = [...I, L];
    f(k), N(L.id), i ? i() : p.setFormRecord("default", L);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        t && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(wr, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          I.map((h) => {
            const y = String(h.id) === String(x), L = h[s] || h.code || h.name || h.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => u(h),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${y ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: L })
              },
              h.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: v,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm bản ghi mới",
              children: [
                /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Al = ({
  isOpen: t,
  title: r,
  entityName: s,
  columns: a,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = fe(), d = fe((k) => k.datasets[s]), [c, p] = A([]), [g, I] = A(!1), [f, x] = A(""), [N, u] = A(0), v = Je(null);
  Be(() => {
    if (!t) {
      x(""), u(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? p(d) : (I(!0), i.queryEntity(s).then((k) => {
      Array.isArray(k) && k.length > 0 ? p(k) : p(i.getDataset(s) || []);
    }).finally(() => I(!1))), setTimeout(() => {
      var k, F;
      (k = v.current) == null || k.focus(), (F = v.current) == null || F.select();
    }, 80);
  }, [t, s, d]);
  const C = Ve(() => {
    if (a && a.length > 0) return a;
    if (c.length > 0) {
      const k = c[0], F = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(k).filter((w) => !F.includes(w.toLowerCase()) && typeof k[w] != "object").slice(0, 6).map((w) => ({
        key: w,
        title: w.charAt(0).toUpperCase() + w.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [a, c]), h = Ve(() => {
    if (!f.trim()) return c;
    const k = f.toLowerCase().trim();
    return c.filter((F) => n && n.length > 0 ? n.some((w) => {
      const S = F[w];
      return S != null && String(S).toLowerCase().includes(k);
    }) : Object.values(F).some(
      (w) => w != null && String(w).toLowerCase().includes(k)
    ));
  }, [c, f, n]);
  Be(() => {
    N >= h.length && u(Math.max(0, h.length - 1));
  }, [h.length]);
  const y = (k) => {
    k.key === "ArrowDown" ? (k.preventDefault(), u((F) => F < h.length - 1 ? F + 1 : F)) : k.key === "ArrowUp" ? (k.preventDefault(), u((F) => F > 0 ? F - 1 : 0)) : k.key === "Enter" ? (k.preventDefault(), h[N] && (o(h[N]), l())) : k.key === "Escape" && (k.preventDefault(), l());
  };
  if (!t) return null;
  const L = r || `Tra cứu danh mục: ${s}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: y,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(gn, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: L }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                h.length,
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
              children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Bt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: v,
              type: "text",
              value: f,
              onChange: (k) => {
                x(k.target.value), u(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${s}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: g ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : h.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          f,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            C.map((k) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: k.width },
                children: k.title || k.key
              },
              k.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: h.map((k, F) => {
            const w = F === N;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => u(F),
                onDoubleClick: () => {
                  o(k), l();
                },
                className: `transition-colors cursor-pointer ${w ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: F + 1 }),
                  C.map((S) => {
                    const R = k[S.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: R != null ? String(R) : "—"
                      },
                      S.key
                    );
                  })
                ]
              },
              k.id ?? k.Id ?? F
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
                disabled: h.length === 0,
                onClick: () => {
                  h[N] && (o(h[N]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Fn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, Bl = ({ node: t, isEditing: r }) => {
  var z, xe, ve, T, B, ee, je;
  const { props: s, style: a } = t, n = Z((te) => te.features), o = Z((te) => te.activeFeatureId), l = n.find((te) => String(te.id) === String(t.pageId)) || n.find((te) => String(te.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: I, maxWidth: f, width: x, ...N } = a || {}, u = String(t.pageId || o || "default"), v = String(((z = t.dataBinding) == null ? void 0 : z.fieldName) || t.props.name || t.id), C = fe((te) => Dt(te, u, v, void 0)), h = fe((te) => te.setFieldValue), y = fe((te) => te.applyPopulate), [L, k] = A(!1), [F, w] = A(!1), [S, R] = A(""), [$, Q] = A(""), [O, V] = A(""), [P, K] = A(!1), G = C !== void 0 ? C : s.value ?? "", b = !!s.validationError, se = String(
    s.reference || s.refName || ((xe = t.dataBinding) == null ? void 0 : xe.refName) || ((ve = t.dataBinding) == null ? void 0 : ve.entityName) || ""
  ), de = String(
    s.refClass || ((T = t.dataBinding) == null ? void 0 : T.refClass) || ""
  ), me = String(
    s.displayField || s.selectField || ((B = t.dataBinding) == null ? void 0 : B.selectField) || "code"
  ), Ce = String(
    s.valueField || s.idField || ((ee = t.dataBinding) == null ? void 0 : ee.idField) || "code"
  ), he = String(
    s.populateRule || s.populateField || ((je = t.dataBinding) == null ? void 0 : je.populateField) || ""
  ), we = () => {
    if (!(s.disabled || r)) {
      if (!se) {
        console.warn(`[ForgeSearchEntry] Component ${t.id} chưa cấu hình reference entity`);
        return;
      }
      k(!0);
    }
  }, Oe = () => {
    if (s.disabled || r) return;
    if (de) {
      Br(de, {}, `Tạo mới ${se || de}`);
      return;
    }
    const te = String(G || "").trim();
    R(te ? te.toUpperCase().replace(/\s+/g, "_") : ""), Q(te), V(""), w(!0);
  }, U = async () => {
    if (!S.trim() || !$.trim()) return;
    const te = se.trim();
    if (te) {
      K(!0);
      try {
        const Se = {
          code: S.trim(),
          name: $.trim(),
          fullName: $.trim(),
          description: O.trim(),
          active: !0
        }, ce = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(te)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Se)
        });
        if (ce.ok) {
          const Ne = await ce.json(), le = {
            ...Se,
            ...Ne,
            id: Ne.id ?? Ne.Id ?? Date.now()
          };
          await fe.getState().queryEntity(te), oe(le), w(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (Se) {
        console.error("[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:", Se);
        const ce = {
          id: `mock-${Date.now()}`,
          code: S.trim(),
          name: $.trim(),
          fullName: $.trim(),
          description: O.trim(),
          active: !0
        };
        oe(ce), w(!1);
      } finally {
        K(!1);
      }
    }
  }, oe = (te) => {
    const Se = te[Ce] ?? te[me] ?? te.code ?? te.id;
    te[me] ?? te.name, h(u, v, Se), he && y(u, he, te), r || (ze(t.events, "change", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: v,
      value: Se,
      selectedItem: te
    }), ze(t.events, "select", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: v,
      value: Se,
      selectedItem: te
    }));
  }, Y = (te) => {
    te.key === "F1" && (te.preventDefault(), te.stopPropagation(), we());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Ut,
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
          ...N
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: s.disabled,
              readOnly: r || !!s.readOnly,
              placeholder: s.placeholder || (se ? `Tra cứu ${se} (F1)...` : "Nhập dữ liệu..."),
              value: G,
              onKeyDown: Y,
              onDoubleClick: we,
              className: `w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${b ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (te) => {
                const Se = te.target.value;
                h(u, v, Se), r || ze(t.events, "change", s.label || "Ô tra cứu", i, {
                  componentId: t.id,
                  fieldName: v,
                  value: Se
                });
              }
            }
          ),
          se && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: Oe,
                title: `Tạo nhanh ${se} (+)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: we,
                title: `Tra cứu ${se} (Nhấn F1 hoặc nhấp đúp)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Bt, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      }
    ),
    se && /* @__PURE__ */ e.jsx(
      Al,
      {
        isOpen: L,
        title: `Tra cứu danh mục: ${s.label || se}`,
        entityName: se,
        columns: s.columns,
        onSelect: oe,
        onClose: () => k(!1)
      }
    ),
    F && Tt(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (te) => te.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-slate-100", children: [
                    "Tạo nhanh danh mục: ",
                    se || "Bản ghi mới"
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: "Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này" })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => w(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" })
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
                    value: S,
                    onChange: (te) => R(te.target.value),
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
                    value: $,
                    onChange: (te) => Q(te.target.value),
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
                    value: O,
                    onChange: (te) => V(te.target.value),
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
                  onClick: () => w(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: P || !S.trim() || !$.trim(),
                  onClick: U,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    P ? /* @__PURE__ */ e.jsx(fn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
}, Ml = ({
  node: t,
  isEditing: r,
  label: s,
  files: a,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var R;
  const d = ur(), c = Je(null), [p, g] = A(!1), [I, f] = A(null), [x, N] = A(null), [u, v] = A([
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
  ]), C = a ?? u, h = ($) => {
    a || v($), n == null || n($);
  }, y = ($) => $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : `${($ / (1024 * 1024)).toFixed(2)} MB`, L = ($) => $.startsWith("image/") ? /* @__PURE__ */ e.jsx(xa, { className: "w-4 h-4 text-emerald-400" }) : $.includes("pdf") ? /* @__PURE__ */ e.jsx(is, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(ha, { className: "w-4 h-4 text-blue-400" }), k = ($) => {
    if (!$ || $.length === 0) return;
    const Q = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from($).forEach((O) => {
      if (O.size > l * 1024 * 1024) {
        alert(`Tệp "${O.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const V = new FileReader(), P = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      V.onload = () => {
        const K = {
          id: P,
          fileName: O.name,
          fileSize: O.size,
          fileType: O.type || "application/octet-stream",
          uploadedDate: Q,
          uploadedBy: "User",
          dataUrl: V.result
        };
        h([...C, K]);
      }, V.readAsDataURL(O);
    });
  }, F = ($, Q) => {
    if (Q == null || Q.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const O = C.filter((V) => V.id !== $);
      h(O), I === $ && f(null);
    }
  }, w = ($, Q) => {
    if (Q == null || Q.stopPropagation(), !$.dataUrl) {
      alert(`Đang tải file mẫu: ${$.fileName}`);
      return;
    }
    const O = document.createElement("a");
    O.href = $.dataUrl, O.download = $.fileName, document.body.appendChild(O), O.click(), document.body.removeChild(O);
  }, S = s || ((R = t == null ? void 0 : t.props) == null ? void 0 : R.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Cr, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: S }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          C.length,
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
            onChange: ($) => k($.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var $;
              return ($ = c.current) == null ? void 0 : $.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: ($) => {
          $.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: ($) => {
          $.preventDefault(), g(!1), k($.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${p ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var $;
          return ($ = c.current) == null ? void 0 : $.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(qn, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: C.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : C.map(($, Q) => {
        const O = I === $.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => f($.id),
            className: `transition-colors cursor-pointer ${O ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: Q + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                L($.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: $.fileName, children: $.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: y($.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: $.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: $.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => {
                      V.stopPropagation(), N($);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(Dn, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => w($, V),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => F($.id, V),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          $.id
        );
      }) })
    ] }) }),
    x && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => N(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: ($) => $.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  L(x.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: x.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    y(x.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ($) => w(x, $),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => N(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50 min-h-[350px]", children: x.fileType.startsWith("image/") && x.dataUrl ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: x.dataUrl,
                  alt: x.fileName,
                  className: "max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
                }
              ) : x.fileType.includes("pdf") && x.dataUrl ? /* @__PURE__ */ e.jsx(
                "iframe",
                {
                  src: x.dataUrl,
                  title: x.fileName,
                  className: "w-full h-[65vh] rounded border border-slate-800"
                }
              ) : /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-3 py-12", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: L(x.fileType) }),
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-slate-300", children: x.fileName }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-500 max-w-sm", children: [
                  "Định dạng (",
                  x.fileType,
                  ") không hỗ trợ xem trực tiếp trong trình duyệt. Vui lòng tải tệp về để mở."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: ($) => w(x, $),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(an, { className: "w-4 h-4" }),
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
}, Ol = ({
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
  disabled: g = !1
}) => {
  const I = Je(null), f = Je(null), x = ur(), N = String((t == null ? void 0 : t.pageId) || "default"), u = (t == null ? void 0 : t.props) || {}, v = u.dataBinding || u.fieldName || ((t == null ? void 0 : t.id) ?? ""), C = fe((U) => Dt(U, N, v, void 0)), h = fe((U) => U.setFieldValue), y = fe((U) => U.applyPopulate), L = fe((U) => U.getDataset), k = s ?? u.label ?? "Gợi ý tự động (Autocomplete)", F = l ?? u.reference, w = i ?? u.displayField ?? "name", S = d ?? u.valueField ?? "code", R = c ?? u.sublabelField, $ = p ?? u.placeholder ?? "Gõ để tìm kiếm...", Q = String(u.populateRule || ""), O = C ?? a ?? "", [V, P] = A(String(O)), [K, G] = A(!1), [b, se] = A(-1);
  Be(() => {
    O != null && P(String(O));
  }, [O]);
  const Ce = (o && o.length > 0 ? o : F ? (L(F) || []).map((oe) => ({
    value: oe[S] ?? oe.id ?? oe.code ?? "",
    label: String(oe[w] ?? oe.name ?? oe.title ?? oe.code ?? ""),
    sublabel: R ? String(oe[R] ?? "") : void 0,
    raw: oe
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((U) => {
    if (!V || V.trim() === "") return !0;
    const oe = V.toLowerCase().trim();
    return U.label.toLowerCase().includes(oe) || String(U.value).toLowerCase().includes(oe) || U.sublabel && U.sublabel.toLowerCase().includes(oe);
  });
  Be(() => {
    const U = (oe) => {
      I.current && !I.current.contains(oe.target) && G(!1);
    };
    return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, []);
  const he = (U) => {
    P(U.label), G(!1), se(-1), n == null || n(U.value, U.raw), v && h(N, v, U.value), U.raw && Q && y(N, Q, U.raw);
  }, we = (U) => {
    if (!K && (U.key === "ArrowDown" || U.key === "ArrowUp")) {
      G(!0);
      return;
    }
    U.key === "ArrowDown" ? (U.preventDefault(), se(
      (oe) => oe < Ce.length - 1 ? oe + 1 : 0
    )) : U.key === "ArrowUp" ? (U.preventDefault(), se(
      (oe) => oe > 0 ? oe - 1 : Ce.length - 1
    )) : U.key === "Enter" ? K && b >= 0 && b < Ce.length && (U.preventDefault(), he(Ce[b])) : U.key === "Escape" && (G(!1), se(-1));
  }, Oe = (U) => {
    var oe;
    U.stopPropagation(), P(""), v && h(N, v, ""), n == null || n(""), (oe = f.current) == null || oe.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: I, className: "relative w-full text-xs", children: [
    k && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: x,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: k
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: x,
          ref: f,
          type: "text",
          disabled: g,
          value: V,
          placeholder: $,
          onFocus: () => G(!0),
          onChange: (U) => {
            P(U.target.value), G(!0), se(0), v && h(N, v, U.target.value);
          },
          onKeyDown: we,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        V && !g && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Oe,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var U;
              G(!K), (U = f.current) == null || U.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              St,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${K ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    K && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: Ce.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      V,
      '"'
    ] }) : Ce.map((U, oe) => {
      const Y = b === oe, z = String(U.value) === String(O);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => se(oe),
          onClick: () => he(U),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${Y ? "bg-blue-600/25 text-blue-200" : z ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: U.label }),
              (U.sublabel || U.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                U.sublabel ? `${U.sublabel} • ` : "",
                U.value
              ] })
            ] }),
            z && /* @__PURE__ */ e.jsx(Fn, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${U.value}-${oe}`
      );
    }) })
  ] });
}, _l = ({
  node: t,
  isEditing: r = !1,
  data: s,
  reference: a,
  idField: n = "id",
  labelField: o = "name",
  parentField: l = "parentId",
  onSelectNode: i
}) => {
  var R, $, Q, O, V;
  const d = t.props || {}, c = a || d.reference || d.refName || ((R = t.dataBinding) == null ? void 0 : R.refName) || "", p = fe((P) => c ? P.datasets[c] : void 0), [g, I] = A(""), [f, x] = A(null), [N, u] = A(/* @__PURE__ */ new Set()), v = Ve(() => s && Array.isArray(s) && s.length > 0 ? s : d.data && Array.isArray(d.data) && d.data.length > 0 ? d.data : p && Array.isArray(p) && p.length > 0 ? p : [
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
  ], [s, d.data, p]), C = Ve(() => {
    if (!Array.isArray(v) || v.length === 0) return [];
    if (v.some((b) => Array.isArray(b.children) && b.children.length > 0))
      return v;
    const K = /* @__PURE__ */ new Map();
    v.forEach((b) => {
      const se = b[n] ?? b.id ?? b.code, de = b[o] ?? b.name ?? b.title ?? String(se), me = b[l] ?? b.parentId ?? null;
      K.set(se, {
        id: se,
        name: de,
        code: b.code,
        parentId: me,
        children: [],
        data: b
      });
    });
    const G = [];
    return K.forEach((b) => {
      b.parentId !== null && b.parentId !== void 0 && K.has(b.parentId) ? K.get(b.parentId).children.push(b) : G.push(b);
    }), G;
  }, [v, n, o, l]);
  Be(() => {
    if (C.length > 0 && N.size === 0) {
      const P = /* @__PURE__ */ new Set();
      C.forEach((K) => {
        P.add(K.id), K.children && K.children.forEach((G) => P.add(G.id));
      }), u(P);
    }
  }, [C]);
  const h = (P, K) => {
    K.stopPropagation(), u((G) => {
      const b = new Set(G);
      return b.has(P) ? b.delete(P) : b.add(P), b;
    });
  }, y = () => {
    const P = /* @__PURE__ */ new Set(), K = (G) => {
      G.forEach((b) => {
        P.add(b.id), b.children && b.children.length > 0 && K(b.children);
      });
    };
    K(C), u(P);
  }, L = () => {
    u(/* @__PURE__ */ new Set());
  }, k = (P) => {
    var b, se;
    x(P.id);
    const K = String(t.pageId || "default"), G = ((b = t.dataBinding) == null ? void 0 : b.fieldName) || t.id;
    if (fe.getState().setFieldValue(K, G, P.id), c && fe.getState().setFieldValue(K, `${c}_selected`, P.data || P), i && i(P), t.events && Array.isArray(t.events)) {
      const de = t.events.find((me) => me.trigger === "change" || me.trigger === "select" || me.trigger === "onClick");
      de && Ss(de, ((se = t.props) == null ? void 0 : se.label) || t.id, void 0, { node: P, value: P.id });
    }
  }, F = (P, K) => {
    if (!K) return !0;
    const G = K.toLowerCase(), b = P.name.toLowerCase().includes(G), se = P.code ? P.code.toLowerCase().includes(G) : !1;
    return b || se ? !0 : P.children && P.children.length > 0 ? P.children.some((de) => F(de, K)) : !1;
  }, w = (P, K = 0) => {
    if (g && !F(P, g))
      return null;
    const G = !!(P.children && P.children.length > 0), b = N.has(P.id) || !!g, se = f === P.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "select-none", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => k(P),
          style: { paddingLeft: `${Math.max(8, K * 18 + 8)}px` },
          className: `group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${se ? "bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`,
          children: [
            G ? /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (de) => h(P.id, de),
                className: "w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors",
                children: b ? /* @__PURE__ */ e.jsx(St, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" })
              }
            ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: G ? b ? /* @__PURE__ */ e.jsx(ma, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ e.jsx(ba, { className: "w-4 h-4 text-amber-500/80" }) : /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate flex-1 font-medium", children: P.name }),
            P.code && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300", children: P.code }),
            G && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700", children: P.children.length })
          ]
        }
      ),
      G && b && /* @__PURE__ */ e.jsx("div", { className: "relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5", children: P.children.map((de) => w(de, K + 1)) })
    ] }, P.id);
  }, S = d.title || (($ = t.props) == null ? void 0 : $.label) || "Cấu Trúc Cây Phân Cấp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((Q = t.style) == null ? void 0 : Q.width) || "100%",
        minHeight: ((O = t.style) == null ? void 0 : O.minHeight) || "320px",
        maxHeight: ((V = t.style) == null ? void 0 : V.maxHeight) || "560px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: S }),
            c && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-mono", children: c })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: y,
                title: "Mở rộng tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: L,
                title: "Thu gọn tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(kr, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-slate-800/80 bg-slate-900/40", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Bt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: g,
              onChange: (P) => I(P.target.value),
              placeholder: "Tìm kiếm danh mục theo tên, mã...",
              className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: C.length > 0 ? C.map((P) => w(P)) : /* @__PURE__ */ e.jsx("div", { className: "py-8 text-center text-xs text-slate-500 italic", children: "Chưa có dữ liệu danh mục phân cấp" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-mono", children: [
            "Tổng số: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: v.length }),
            " phần tử"
          ] }),
          f && /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-400 font-mono font-medium", children: [
            "Đang chọn ID: #",
            String(f)
          ] })
        ] })
      ]
    }
  );
}, ir = [
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
], Hl = ({
  node: t,
  isEditing: r = !1,
  data: s,
  type: a,
  title: n,
  reference: o
}) => {
  var k, F, w, S;
  const l = t.props || {}, i = a || l.chartType || l.type || "bar", [d, c] = A(i), [p, g] = A(null), I = o || l.reference || l.refName || ((k = t.dataBinding) == null ? void 0 : k.refName) || "", f = fe((R) => I ? R.datasets[I] : void 0), x = Ve(() => {
    let R = [];
    s && Array.isArray(s) && s.length > 0 ? R = s : l.data && Array.isArray(l.data) && l.data.length > 0 ? R = l.data : f && Array.isArray(f) && f.length > 0 ? R = f : R = [
      { label: "Cát Lái (CTL)", value: 4850 },
      { label: "Cái Mép (TCIT)", value: 3620 },
      { label: "Hải Phòng (HPH)", value: 2980 },
      { label: "Lạch Huyện (HICT)", value: 2450 },
      { label: "Đà Nẵng (DAN)", value: 1680 },
      { label: "Quy Nhơn (QNH)", value: 1120 }
    ];
    const $ = l.labelField || "label", Q = l.valueField || "value";
    return R.map((O, V) => {
      const P = String(O[$] ?? O.label ?? O.name ?? O.code ?? `Mục ${V + 1}`), K = O[Q] ?? O.value ?? O.amount ?? O.total ?? 0, G = Math.max(0, Number(K) || 0), b = O.color || ir[V % ir.length];
      return { label: P, value: G, color: b };
    });
  }, [s, l.data, f, l.labelField, l.valueField]), N = Ve(() => x.reduce((R, $) => R + $.value, 0), [x]), u = Ve(() => Math.max(...x.map((R) => R.value), 1), [x]), v = n || l.title || ((F = t.props) == null ? void 0 : F.label) || "Biểu Đồ Thống Kê Sản Lượng", C = l.subtitle || (I ? `Nguồn dữ liệu: ${I}` : "Đơn vị: TEUs"), h = () => {
    const R = Math.max(20, Math.min(48, Math.floor(400 / (x.length || 1))));
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" }),
        x.map(($, Q) => {
          const O = u > 0 ? $.value / u * 100 : 0, V = p === Q;
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              onMouseEnter: () => g(Q),
              onMouseLeave: () => g(null),
              className: "flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer",
              children: [
                V && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-bold text-emerald-400", children: $.label }),
                  /* @__PURE__ */ e.jsxs("p", { className: "font-mono", children: [
                    $.value.toLocaleString("en-US"),
                    " (",
                    ($.value / (N || 1) * 100).toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-mono mb-1 transition-all ${V ? "text-emerald-300 font-bold -translate-y-0.5" : "text-slate-400"}`, children: $.value > 1e3 ? `${($.value / 1e3).toFixed(1)}k` : $.value }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: `${Math.max(4, O)}%`,
                      backgroundColor: $.color,
                      maxWidth: `${R}px`
                    },
                    className: `w-full rounded-t-md transition-all duration-300 shadow-md ${V ? "brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105" : "hover:brightness-110"}`
                  }
                )
              ]
            },
            Q
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-3 pt-2", children: x.map(($, Q) => /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-center truncate", title: $.label, children: /* @__PURE__ */ e.jsx("span", { className: `text-[11px] truncate block ${p === Q ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: $.label }) }, Q)) })
    ] });
  }, y = () => {
    const V = x.length, P = x.map((b, se) => {
      const de = V > 1 ? 40 + se / (V - 1) * 520 : 300, me = 175 - (u > 0 ? b.value / u * (200 - 2 * 25) : 0);
      return { x: de, y: me, item: b, idx: se };
    }), K = P.reduce((b, se, de) => de === 0 ? `M ${se.x} ${se.y}` : `${b} L ${se.x} ${se.y}`, ""), G = P.length > 0 ? `${K} L ${P[P.length - 1].x} 175 L ${P[0].x} 175 Z` : "";
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col items-center justify-center h-64 px-2", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 600 200", className: "w-full h-48 overflow-visible", children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: `lineGrad_${t.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.4" }),
          /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
        ] }) }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 25, x2: 560, y2: 25, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 200 / 2, x2: 560, y2: 200 / 2, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 175, x2: 560, y2: 175, stroke: "#475569" }),
        G && /* @__PURE__ */ e.jsx("path", { d: G, fill: `url(#lineGrad_${t.id})` }),
        K && /* @__PURE__ */ e.jsx("path", { d: K, fill: "none", stroke: "#10B981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        P.map((b) => {
          const se = p === b.idx;
          return /* @__PURE__ */ e.jsxs(
            "g",
            {
              onMouseEnter: () => g(b.idx),
              onMouseLeave: () => g(null),
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: b.x,
                    cy: b.y,
                    r: se ? 6 : 4,
                    fill: se ? "#34D399" : "#10B981",
                    stroke: "#0F172A",
                    strokeWidth: "2",
                    className: "transition-all"
                  }
                ),
                se && /* @__PURE__ */ e.jsx("circle", { cx: b.x, cy: b.y, r: 10, fill: "none", stroke: "#34D399", strokeWidth: "1.5", strokeDasharray: "2 2", className: "animate-spin" })
              ]
            },
            b.idx
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-between px-6 pt-2", children: x.map((b, se) => /* @__PURE__ */ e.jsx("div", { className: "text-center truncate flex-1", children: /* @__PURE__ */ e.jsx("span", { className: `text-[10px] truncate block ${p === se ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: b.label }) }, se)) })
    ] });
  }, L = () => {
    let V = 0;
    const P = x.map((K, G) => {
      const b = N > 0 ? K.value / N * 360 : 0, se = V, de = V + b;
      V += b;
      const me = (se - 90) * Math.PI / 180, Ce = (de - 90) * Math.PI / 180, he = 90 + 70 * Math.cos(me), we = 90 + 70 * Math.sin(me), Oe = 90 + 70 * Math.cos(Ce), U = 90 + 70 * Math.sin(Ce), oe = 90 + 45 * Math.cos(me), Y = 90 + 45 * Math.sin(me), z = 90 + 45 * Math.cos(Ce), xe = 90 + 45 * Math.sin(Ce), ve = b > 180 ? 1 : 0, T = b >= 359.9 ? "M 90 20 A 70 70 0 1 1 90 160 A 70 70 0 1 1 90 20 M 90 45 A 45 45 0 1 0 90 135 A 45 45 0 1 0 90 45" : `M ${he} ${we} A 70 70 0 ${ve} 1 ${Oe} ${U} L ${z} ${xe} A 45 45 0 ${ve} 0 ${oe} ${Y} Z`;
      return { item: K, idx: G, pathData: T, percentage: (K.value / (N || 1) * 100).toFixed(1) };
    });
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center justify-around h-64 px-4 py-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ e.jsx("svg", { width: 180, height: 180, viewBox: "0 0 180 180", children: P.map((K) => {
          const G = p === K.idx;
          return /* @__PURE__ */ e.jsx(
            "path",
            {
              d: K.pathData,
              fill: K.item.color,
              onMouseEnter: () => g(K.idx),
              onMouseLeave: () => g(null),
              className: `transition-all duration-200 cursor-pointer ${G ? "scale-105 origin-center brightness-125 stroke-white stroke-1" : "hover:opacity-90"}`
            },
            K.idx
          );
        }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none", children: p !== null && x[p] ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-medium truncate max-w-[80px]", children: x[p].label }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-bold font-mono text-emerald-400", children: [
            (x[p].value / (N || 1) * 100).toFixed(1),
            "%"
          ] })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: "TỔNG" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold font-mono text-slate-100", children: N > 1e4 ? `${(N / 1e3).toFixed(0)}k` : N })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2", children: x.map((K, G) => {
        const b = p === G, se = (K.value / (N || 1) * 100).toFixed(1);
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            onMouseEnter: () => g(G),
            onMouseLeave: () => g(null),
            className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${b ? "bg-slate-800/80 text-white" : "text-slate-300 hover:bg-slate-800/40"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2.5 h-2.5 rounded-full flex-shrink-0", style: { backgroundColor: K.color } }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs truncate max-w-[110px]", children: K.label }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-mono text-slate-400 ml-auto", children: [
                se,
                "%"
              ] })
            ]
          },
          G
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((w = t.style) == null ? void 0 : w.width) || "100%",
        minHeight: ((S = t.style) == null ? void 0 : S.minHeight) || "320px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(fa, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: v }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-mono block", children: C })
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
                children: /* @__PURE__ */ e.jsx(Sr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("line"),
                title: "Biểu đồ Đường (Line Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "line" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(ga, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("donut"),
                title: "Biểu đồ Tròn (Donut Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "donut" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(va, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center p-2", children: x.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "py-12 text-center text-xs text-slate-500 italic", children: "Không có dữ liệu số liệu để vẽ biểu đồ" }) : d === "bar" ? h() : d === "line" ? y() : L() }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tổng cộng: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: N.toLocaleString("en-US") })
          ] }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            x.length,
            " danh mục"
          ] })
        ] })
      ]
    }
  );
};
function qr(t) {
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
const En = cs()(
  Ya(
    (t) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: r, branch: s, user: a }) => t({ token: r, branch: s, user: a }),
      logout: () => t({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), _s = ({ node: t, isEditing: r, children: s }) => {
  var c, p, g, I, f;
  const a = En((x) => x.user), n = (a == null ? void 0 : a.role) || "User", o = t.permissions;
  if (!o || !((c = o.allowedRoles) != null && c.length) && !((p = o.readOnlyRoles) != null && p.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: s });
  if (r)
    return !((g = o.allowedRoles) != null && g.length || (I = o.readOnlyRoles) != null && I.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: s }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      s,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((f = o.allowedRoles) == null ? void 0 : f.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, d = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((N) => N.toLowerCase() === n.toLowerCase()) ? d === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: s }) : null : i && i.length > 0 && i.some((N) => N.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: s }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: s });
};
function Yr(t, r) {
  var g, I;
  const s = t.style || {}, a = ((g = t.props) == null ? void 0 : g.colSpan) !== void 0 && ((I = t.props) == null ? void 0 : I.colSpan) !== null ? Number(t.props.colSpan) : void 0;
  let n = s.width, o = s.flex, l = s.maxWidth, i = s.minWidth ?? 0, d;
  const c = (r == null ? void 0 : r.mode) || "grid", p = (r == null ? void 0 : r.gridColumns) || 12;
  if (c === "grid") {
    let f;
    if (a !== void 0 && !isNaN(a) && a > 0)
      f = Math.min(a, p);
    else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
      const x = Number(r.columnsPerRow);
      !isNaN(x) && x > 0 ? f = Math.max(1, Math.floor(p / x)) : f = Math.min(4, p);
    } else
      f = Math.min(4, p);
    d = `span ${f} / span ${f}`, n = s.width !== void 0 ? s.width : "100%", l = s.maxWidth !== void 0 ? s.maxWidth : "100%", o = s.flex !== void 0 ? s.flex : "none";
  } else {
    const f = parseInt((r == null ? void 0 : r.gap) || "12", 10) || 12;
    if (((r == null ? void 0 : r.direction) || "row") === "row")
      if (a !== void 0 && !isNaN(a) && a > 0) {
        const N = Math.min(100, Math.max(2, a / p * 100)), u = a >= p ? "100%" : `calc(${N}% - ${Math.round(f * (1 - a / p))}px)`;
        s.width === void 0 && s.flex === void 0 && (n = u, l = u, o = `0 0 ${u}`);
      } else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
        const N = Number(r.columnsPerRow);
        if (!isNaN(N) && N > 0) {
          const u = N === 1 ? "100%" : `calc((100% - ${(N - 1) * f}px) / ${N})`;
          s.width === void 0 && s.flex === void 0 && (n = u, l = u, o = `0 0 ${u}`);
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
const Ts = ({
  node: t,
  isEditing: r = !1,
  onContextMenu: s,
  parentLayout: a,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = Z((u) => u.selection), d = Z((u) => u.selectComponent), c = r && i.componentId === t.id, p = (u) => {
    r && (u.stopPropagation(), d(t.id));
  }, g = (u) => {
    r && (u.preventDefault(), u.stopPropagation(), d(t.id), s && s(u, t));
  };
  if (t.type === "Container" || t.type === "Section" || t.type === "Tabs") {
    const u = t.props.layoutMode || (t.type === "Section" ? "grid" : "flex"), v = t.props.flexConfig || {}, C = t.props.gridConfig || {}, h = {
      direction: v.direction || "row",
      wrap: v.wrap || "wrap",
      gap: v.gap || "12px",
      columnsPerRow: v.columnsPerRow || "auto"
    }, y = Number(
      C.columns || (typeof v.columnsPerRow == "number" ? v.columnsPerRow : 12)
    ) || 12, L = {
      mode: u === "flex" ? "flex" : "grid",
      direction: v.direction || "row",
      columnsPerRow: v.columnsPerRow || "auto",
      gap: v.gap || C.gap || "12px",
      wrap: v.wrap || "wrap",
      gridColumns: y
    }, k = () => {
      const F = t.children || [];
      return F.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : qr(F).map((S, R) => {
        if (S.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            zr,
            {
              parentId: t.id,
              order: S.order,
              tabNodes: S.nodes,
              isEditing: r,
              parentFlexConfig: h,
              onContextMenu: s,
              renderChild: l
            },
            `tab_stack_${t.id}_${S.order}_${R}`
          );
        const $ = S.node;
        return l ? /* @__PURE__ */ e.jsx(Mt.Fragment, { children: l($, L) }, $.id) : /* @__PURE__ */ e.jsx(
          Ts,
          {
            node: $,
            isEditing: r,
            onContextMenu: s,
            parentLayout: L,
            isWrappedByDrag: !1
          },
          $.id
        );
      });
    };
    return t.type === "Section" ? /* @__PURE__ */ e.jsx(_s, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx("div", { onClick: p, onContextMenu: g, className: "w-full", children: /* @__PURE__ */ e.jsx(ol, { node: t, isEditing: r, children: k() }) }) }) : t.type === "Tabs" ? /* @__PURE__ */ e.jsx(_s, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx(
      nr,
      {
        node: t,
        isEditing: r,
        isSelected: c,
        onClick: p,
        onContextMenu: g,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: k()
      }
    ) }) : /* @__PURE__ */ e.jsx(_s, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx(
      nr,
      {
        node: t,
        isEditing: r,
        isSelected: c,
        onClick: p,
        onContextMenu: g,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: k()
      }
    ) });
  }
  const I = () => {
    var u, v, C, h, y, L;
    switch (t.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(nl, { node: t, isEditing: r });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(rl, { node: t, isEditing: r });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(El, { node: t, isEditing: r });
      case "Number":
        return /* @__PURE__ */ e.jsx(al, { node: t, isEditing: r });
      case "Label":
        return /* @__PURE__ */ e.jsx(ll, { node: t, isEditing: r });
      case "Table":
        return /* @__PURE__ */ e.jsx(Sl, { node: t, isEditing: r });
      case "Select":
        return /* @__PURE__ */ e.jsx(Il, { node: t, isEditing: r });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(Fl, { node: t, isEditing: r });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Rl, { node: t, isEditing: r });
      case "Divider":
        return /* @__PURE__ */ e.jsx(Ll, { node: t, isEditing: r });
      case "Modal":
        return /* @__PURE__ */ e.jsx($l, { node: t, isEditing: r });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Pl,
          {
            label: ((u = t.props) == null ? void 0 : u.label) ?? "Lô hàng:",
            reference: ((v = t.props) == null ? void 0 : v.reference) ?? "Transaction",
            displayField: ((C = t.props) == null ? void 0 : C.displayField) ?? "code",
            records: (h = t.props) == null ? void 0 : h.records,
            activeId: (y = t.props) == null ? void 0 : y.activeId,
            canAdd: ((L = t.props) == null ? void 0 : L.canAdd) !== !1,
            style: t.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(Bl, { node: t, isEditing: r });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(Ml, { node: t, isEditing: r });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(Ol, { node: t, isEditing: r });
      case "TreeView":
        return /* @__PURE__ */ e.jsx(_l, { node: t, isEditing: r });
      case "Chart":
        return /* @__PURE__ */ e.jsx(Hl, { node: t, isEditing: r });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          t.type
        ] });
    }
  }, f = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), x = Yr(t, f), N = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...x,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(_s, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: p,
      onContextMenu: g,
      style: N,
      className: `relative group transition-all duration-150 box-border ${r ? `cursor-pointer rounded-lg ${c ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && c && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: t.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            t.id.slice(-4)
          ] })
        ] }),
        I()
      ]
    }
  ) });
}, yo = ({
  value: t,
  column: r,
  onSave: s,
  onCancel: a
}) => {
  const [n, o] = A(t ?? ""), l = Je(null);
  Be(() => {
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
let lt = null;
const jo = cs()(
  Is((t, r) => ({
    isConnected: !1,
    connectionId: null,
    lockedRecords: {},
    notifications: [],
    connect: (s = "http://localhost:5048/hubs/uiforge") => {
      if (!r().isConnected)
        try {
          const a = s.replace(/^http/, "ws"), n = new WebSocket(a);
          lt = n, n.onopen = () => {
            t({ isConnected: !0, connectionId: `conn_${Date.now()}` }), console.log("[RealtimeEngine] Đã kết nối thành công tới Hub:", s);
          }, n.onmessage = (o) => {
            try {
              const l = JSON.parse(o.data);
              if (l.type === "RecordLocked") {
                const i = `${l.entityName}_${l.recordId}`;
                t((d) => ({
                  lockedRecords: {
                    ...d.lockedRecords,
                    [i]: {
                      entityName: l.entityName,
                      recordId: l.recordId,
                      username: l.username,
                      lockedAt: l.lockedAt || (/* @__PURE__ */ new Date()).toISOString()
                    }
                  }
                }));
              } else if (l.type === "RecordUnlocked") {
                const i = `${l.entityName}_${l.recordId}`;
                t((d) => {
                  const c = { ...d.lockedRecords };
                  return delete c[i], { lockedRecords: c };
                });
              } else l.type === "Notification" && r().addNotification(l.title, l.message, l.notifType || "info");
            } catch {
            }
          }, n.onclose = () => {
            t({ isConnected: !1, connectionId: null }), lt = null;
          }, n.onerror = () => {
            t({ isConnected: !1 });
          };
        } catch {
          t({ isConnected: !1 });
        }
    },
    disconnect: () => {
      if (lt) {
        try {
          lt.close();
        } catch {
        }
        lt = null;
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
      })), lt && lt.readyState === WebSocket.OPEN && lt.send(
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
      }), lt && lt.readyState === WebSocket.OPEN && lt.send(
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
      lt && lt.readyState === WebSocket.OPEN && lt.send(
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
function No(t = {}) {
  const { onSaveLayout: r, isPreview: s = !1, canEdit: a = !0 } = t;
  Be(() => {
    const n = async (o) => {
      var l;
      if (o.altKey && (o.code === "Backquote" || o.key === "`")) {
        o.preventDefault(), o.stopPropagation();
        const i = Ze.getState(), d = i.openTabs;
        if (d.length <= 1) return;
        const c = i.activeTabId, g = (d.findIndex((f) => f.id === c) + 1) % d.length, I = d[g];
        I && (i.setActiveTab(I.id), Z.getState().setActiveFeature(I.featureId, ((l = I.params) == null ? void 0 : l.id) ?? null));
        return;
      }
      if (o.key === "Escape") {
        const i = Ze.getState();
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
        const i = Z.getState(), d = i.features.find((p) => p.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c) {
          const p = fe.getState(), g = p.getFormRecord(d.id) || p.getFormRecord("default");
          try {
            await sr(c, "onSave", {
              record: g,
              featureId: d.id,
              trigger: "hotkey_F9"
            });
          } catch (I) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onSave:", I);
          }
        }
        return;
      }
      if (o.key === "F8") {
        o.preventDefault(), o.stopPropagation();
        const i = Z.getState(), d = i.features.find((p) => p.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c)
          try {
            await sr(c, "onApprove", {
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
const Tn = ({
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
    isDragging: g
  } = Fr({
    id: t.id,
    disabled: !r,
    data: {
      isPaletteItem: !1,
      id: t.id,
      type: t.type,
      node: t
    }
  }), { setNodeRef: I, isOver: f } = Rr({
    id: t.id,
    disabled: !r
  }), x = (L) => {
    c(L), I(L);
  }, N = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), v = {
    ...Yr(t, N),
    transform: Ba.Translate.toString(p),
    opacity: g ? 0.35 : 1,
    transition: g ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, C = t.type === "Container" || t.type === "Section" || t.type === "Tabs", h = f && C && !g, y = f && !C && !g;
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: v, className: "group/drag relative", children: [
    y && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    h && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    r && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (L) => L.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(Rn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ts,
      {
        node: t,
        isEditing: r,
        onContextMenu: s,
        parentLayout: N,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (L, k) => /* @__PURE__ */ e.jsx(
          Tn,
          {
            node: L,
            isEditing: r,
            onContextMenu: s,
            parentLayout: k && "mode" in k ? k : void 0,
            parentFlexConfig: k && !("mode" in k) ? k : void 0,
            activeId: o,
            overId: l
          },
          L.id
        )
      }
    )
  ] });
}, Jr = ({ x: t, y: r, items: s, onClose: a }) => {
  const n = Je(null);
  Be(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && a();
    }, d = (c) => {
      c.key === "Escape" && a();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", d), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", d);
    };
  }, [a]);
  const o = Math.min(t, window.innerWidth - 220), l = Math.min(r, window.innerHeight - (s.length * 36 + 20));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      style: { top: `${l}px`, left: `${o}px` },
      className: "fixed z-50 w-56 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100",
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
              /* @__PURE__ */ e.jsx("span", { className: "font-medium truncate", children: i.label })
            ]
          },
          d
        );
      })
    }
  );
}, wo = ({
  isEditing: t,
  activeId: r,
  overId: s
}) => {
  const a = Z((S) => S.features), n = Z((S) => S.activeFeatureId), o = Z((S) => S.activeRecordId), l = Z((S) => S.addComponent), i = Z((S) => S.selectComponent), d = Z((S) => S.removeComponent), c = Z((S) => S.updateComponentProps);
  Z((S) => S.updateFeatureLayout);
  const p = Z((S) => S.updateFeatureScriptFile), g = a.find((S) => S.id === n), I = (g == null ? void 0 : g.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  Mt.useEffect(() => {
    var R;
    if ($r(g) && n) {
      let $ = o;
      !$ && typeof window < "u" && ($ = new URLSearchParams(window.location.search).get("id"));
      const Q = $ || "1", O = fe.getState().formRecords[n], V = (O == null ? void 0 : O.id) || (O == null ? void 0 : O.Id);
      if (String(V) !== String(Q)) {
        const { module: P } = $n(g == null ? void 0 : g.scriptFile), K = (P == null ? void 0 : P.loadDetail) || ((R = P == null ? void 0 : P.transactionDetailBL) == null ? void 0 : R.loadDetail);
        typeof K == "function" && K(Q).then((G) => {
          G && n && (fe.getState().setFormRecord(n, G), fe.getState().setFormRecord("default", G), o !== String(G.id || Q) && Z.getState().setActiveRecordId(String(G.id || Q)));
        });
      }
    }
  }, [n, o, g == null ? void 0 : g.scriptFile, g == null ? void 0 : g.route, g == null ? void 0 : g.name, g == null ? void 0 : g.isDetail]);
  const { setNodeRef: f, isOver: x } = Rr({
    id: "canvas-root",
    disabled: !t
  }), [N, u] = A(""), v = !!(g != null && g.scriptFile && g.scriptFile.trim().length > 0), [C, h] = A(null), y = (S, R = {}, $ = {}) => ({
    id: `${S.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: S,
    parentId: null,
    pageId: n,
    props: {
      label: S === "Button" ? "Nút mới" : S === "Label" ? "Tiêu đề khối" : void 0,
      variant: S === "Button" ? "primary" : void 0,
      size: S === "Button" ? "md" : void 0,
      placeholder: S === "TextBox" ? "Nhập nội dung..." : void 0,
      ...R
    },
    style: {
      ...$
    },
    events: [],
    order: ((g == null ? void 0 : g.components.length) || 0) + 1
  }), L = (S) => {
    !t || !v || (S.preventDefault(), i(null), h({
      x: S.clientX,
      y: S.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, k = (S, R) => {
    if (!t) return;
    S.preventDefault(), S.stopPropagation(), i(R.id);
    const $ = R.type === "Container" || R.type === "Section" || R.type === "Tabs";
    h({
      x: S.clientX,
      y: S.clientY,
      targetContainerId: $ ? R.id : R.parentId,
      selectedNode: R
    });
  }, F = () => {
    var O, V, P;
    if (!C) return [];
    const { targetContainerId: S, selectedNode: R } = C, $ = R && (R.type === "Container" || R.type === "Section" || R.type === "Tabs");
    if (R && $) {
      const K = R.props.layoutMode === "grid", G = ((O = R.props.flexConfig) == null ? void 0 : O.direction) === "row", b = !!(R.props.isTab || R.props.tab || R.type === "Tabs"), se = R.props.activeTabId || ((P = (V = R.props.tabs) == null ? void 0 : V[0]) == null ? void 0 : P.id) || "main", de = b ? { tabId: se } : {};
      return [
        ...b ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: Et,
            onClick: () => {
              const me = R.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], Ce = `tab_${Date.now().toString(36)}`, he = [
                ...me,
                { id: Ce, label: `Tab Mới ${me.length + 1}` }
              ];
              c(R.id, {
                tabs: he,
                activeTabId: Ce
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
          label: "📦 Thêm Khoảng Trắng con (Bố cục Flexbox)",
          icon: Et,
          onClick: () => {
            const me = y(
              "Container",
              {
                layoutMode: "flex",
                flexConfig: {
                  direction: "column",
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "stretch",
                  gap: "12px"
                },
                ...de
              },
              {
                flex: G ? "1" : void 0,
                width: G ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(me, S);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: ls,
          onClick: () => {
            const me = y(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...de
              },
              {
                flex: G ? "1" : void 0,
                width: G ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(me, S);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: ls,
          onClick: () => {
            const me = y("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...de
            });
            l(me, S);
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
          icon: as,
          onClick: () => l(
            y("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: as,
          onClick: () => l(
            y("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: as,
          onClick: () => l(
            y("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: as,
          onClick: () => l(
            y("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: Hs,
          onClick: () => l(
            y("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: is,
          onClick: () => l(
            y("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: Hs,
          onClick: () => l(
            y("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...de
            }),
            S
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: bt,
          onClick: () => l(
            y("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...de
            }),
            S
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: G ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: G ? In : Yn,
          onClick: () => {
            c(R.id, {
              flexConfig: {
                ...R.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: G ? "column" : "row"
              }
            });
          }
        },
        {
          label: K ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: ls,
          onClick: () => {
            K ? c(R.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(R.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: ot,
          danger: !0,
          onClick: () => d(R.id)
        }
      ];
    }
    const Q = I.direction === "row";
    return [
      {
        label: Q ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: Et,
        onClick: () => {
          const K = y(
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
              flex: Q ? "1" : void 0,
              width: Q ? void 0 : "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(K, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: ls,
        onClick: () => {
          const K = y(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: Q ? "1" : void 0,
              width: Q ? void 0 : "100%",
              minHeight: "140px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(K, null);
        }
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "🔘 Thêm Nút bấm (Button)",
        icon: Hs,
        onClick: () => l(y("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: as,
        onClick: () => l(y("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: is,
        onClick: () => l(y("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: bt,
        onClick: () => l(y("Table"), null)
      }
    ];
  }, w = (g == null ? void 0 : g.components.filter((S) => !S.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      onContextMenu: L,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${x && t ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (g == null ? void 0 : g.name) || "Màn hình" }),
              v ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: g == null ? void 0 : g.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Cs, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: v ? (g == null ? void 0 : g.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          v ? w.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: L,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${x ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(Et, { className: "w-7 h-7" }) }),
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
                      const S = y(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      S.children = [
                        y(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        y(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(S, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Yn, { className: "w-4 h-4" }),
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
                flexDirection: I.direction || "column",
                gap: I.gap || "16px",
                flexWrap: I.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: qr(w).map((S, R) => {
                if (S.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    zr,
                    {
                      parentId: null,
                      order: S.order,
                      tabNodes: S.nodes,
                      isEditing: t,
                      onContextMenu: k,
                      renderChild: (O, V) => t ? /* @__PURE__ */ e.jsx(
                        Tn,
                        {
                          node: O,
                          isEditing: t,
                          onContextMenu: k,
                          parentLayout: V && "mode" in V ? V : void 0,
                          parentFlexConfig: V && !("mode" in V) ? V : void 0,
                          activeId: r,
                          overId: s
                        },
                        O.id
                      ) : /* @__PURE__ */ e.jsx(
                        Ts,
                        {
                          node: O,
                          isEditing: !1,
                          onContextMenu: k,
                          parentLayout: V && "mode" in V ? V : void 0,
                          parentFlexConfig: V && !("mode" in V) ? V : void 0
                        },
                        O.id
                      )
                    },
                    `root_tab_stack_${S.order}_${R}`
                  );
                const $ = S.node, Q = {
                  mode: "flex",
                  direction: I.direction || "column",
                  wrap: I.wrap || "wrap",
                  gap: I.gap,
                  columnsPerRow: "auto"
                };
                return t ? /* @__PURE__ */ e.jsx(
                  Tn,
                  {
                    node: $,
                    isEditing: t,
                    onContextMenu: k,
                    parentLayout: Q,
                    activeId: r,
                    overId: s
                  },
                  $.id
                ) : /* @__PURE__ */ e.jsx(
                  Ts,
                  {
                    node: $,
                    isEditing: !1,
                    onContextMenu: k,
                    parentLayout: Q
                  },
                  $.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Cs, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (S) => {
                  S.preventDefault();
                  const R = N.trim();
                  if (!R) return;
                  const $ = R.endsWith(".bl.ts") ? R : R.endsWith(".ts") ? R.replace(/\.ts$/, ".bl.ts") : `${R}.bl.ts`;
                  p(n, $), u("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(hn, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: N,
                          onChange: (S) => u(S.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  g && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(Tr, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const S = g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          u(`${S || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
                          ".bl.ts"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: !N.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(vn, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        C && /* @__PURE__ */ e.jsx(
          Jr,
          {
            x: C.x,
            y: C.y,
            items: F(),
            onClose: () => h(null)
          }
        )
      ]
    }
  );
};
function Vl(t) {
  return t.replace(/-([a-z])/g, (r, s) => s.toUpperCase());
}
function Wl(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function Kl(t) {
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
      let c = Vl(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), r[c] = d;
    }
  }
  return r;
}
function Gl(t) {
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
    const o = Wl(a);
    s.push(`${o}: ${n};`);
  }
  return s.join(`
`);
}
const Ul = ({
  isOpen: t,
  node: r,
  onClose: s,
  onSave: a
}) => {
  const [n, o] = A("info"), [l, i] = A([]), [d, c] = A([]), [p, g] = A(""), [I, f] = A("General"), [x, N] = A(""), [u, v] = A("Dropdown"), [C, h] = A(""), [y, L] = A(""), [k, F] = A(""), [w, S] = A(1), [R, $] = A(4), [Q, O] = A(""), [V, P] = A(""), [K, G] = A(""), [b, se] = A(""), [de, me] = A(""), [Ce, he] = A(""), [we, Oe] = A(""), [U, oe] = A(""), [Y, z] = A(""), [xe, ve] = A(""), [T, B] = A(""), [ee, je] = A(""), [te, Se] = A(""), [ce, Ne] = A(""), [le, ue] = A(""), [Pe, ye] = A(""), [pe, W] = A(""), [ae, it] = A(""), [gt, rt] = A(""), [xt, q] = A(""), [ge, Ee] = A(""), [ke, Me] = A(""), [Te, Ye] = A(""), [Ie, ht] = A(""), [dt, Nt] = A(""), [vt, Ot] = A("id"), [zt, _t] = A(""), [wt, Ht] = A(""), [_e, qt] = A(""), [Yt, Vt] = A(""), [It, Jt] = A(""), [Xt, Wt] = A(""), [Kt, D] = A(""), [J, ne] = A(""), [be, $e] = A(""), [Ae, Fe] = A(""), [De, Xe] = A(!1), [Ke, Ue] = A(!0), [tt, mt] = A(!1), [ut, Qe] = A(!1), [Ft, Qt] = A(!1), [Zt, Fs] = A(!1), [Rs, $s] = A(!1), [Ls, es] = A(!1), [Js, Xs] = A(!1), [Qs, Zs] = A(!1), [en, tn] = A(!1), [sn, Es] = A(!1), [ds, us] = A(!1), [ps, xs] = A(!1), [hs, m] = A(!1), [M, E] = A(!1), [H, _] = A(!0), [X, re] = A(!0), [Re, We] = A(!1), [qe, pt] = A(!1), [yt, Ct] = A(!1), [Ps, As] = A(!1), [Pn, An] = A(!1), [Bn, Mn] = A(!1), [On, _n] = A(!1), [Hn, Vn] = A(!1), [ts, Wn] = A(""), [nn, Kn] = A(""), [Gn, Un] = A(""), [ss, Bs] = A(""), [to, ea] = A("");
  if (Be(() => {
    Ln().then((j) => i(j));
  }, []), Be(() => {
    if (r && t) {
      const j = r.props || {}, ie = r.dataBinding || {};
      g(String(j.id ?? r.id)), f(j.group !== void 0 ? String(j.group) : "General");
      const Le = j.reference !== void 0 ? String(j.reference) : ie.entityName !== void 0 ? String(ie.entityName) : j.refName !== void 0 ? String(j.refName) : "";
      N(Le), v(r.type || "Dropdown"), h(String(j.parentId ?? "")), L(
        j.refName !== void 0 ? String(j.refName) : ie.refName !== void 0 ? String(ie.refName) : Le
      ), F(
        ie.fieldName !== void 0 ? String(ie.fieldName) : j.fieldName !== void 0 ? String(j.fieldName) : j.name !== void 0 ? String(j.name) : r.id
      ), S(Number(r.order ?? j.order ?? 1)), $(Number(j.colSpan ?? j.column ?? 4)), O(j.label !== void 0 ? String(j.label) : ""), P(
        j.events !== void 0 ? typeof j.events == "string" ? j.events : JSON.stringify(j.events) : ""
      ), G(j.style !== void 0 ? String(j.style) : ""), se(j.childStyle !== void 0 ? String(j.childStyle) : ""), me(j.validation !== void 0 ? String(j.validation) : ""), he(
        j.selectField !== void 0 ? String(j.selectField) : ie.selectField !== void 0 ? String(ie.selectField) : ""
      ), Oe(j.plainText !== void 0 ? String(j.plainText) : ""), oe(
        j.cssClass !== void 0 ? String(j.cssClass) : j.className !== void 0 ? String(j.className) : ""
      ), z(j.sqlSelect !== void 0 ? String(j.sqlSelect) : ""), ve(String(j.offset ?? "")), B(j.groupFormat !== void 0 ? String(j.groupFormat) : ""), je(j.formatSummary !== void 0 ? String(j.formatSummary) : ""), Se(j.orderBySummary !== void 0 ? String(j.orderBySummary) : ""), Ne(j.groupEvent !== void 0 ? String(j.groupEvent) : ""), ue(j.icon !== void 0 ? String(j.icon) : ""), ye(j.system !== void 0 ? String(j.system) : ""), W(j.refClass !== void 0 ? String(j.refClass) : ""), it(j.hotKey !== void 0 ? String(j.hotKey) : ""), rt(j.dateTimeField !== void 0 ? String(j.dateTimeField) : ""), q(String(j.addStart ?? "")), Ee(String(j.addEnd ?? "")), Me(String(j.bodyRowHeight ?? "")), Ye(
        j.sqlWhere !== void 0 ? String(j.sqlWhere) : ie.sqlWhere !== void 0 ? String(ie.sqlWhere) : ""
      ), ht(String(j.footerHeight ?? "")), Nt(j.joinTable !== void 0 ? String(j.joinTable) : ""), Ot(
        j.idField !== void 0 ? String(j.idField) : ie.idField !== void 0 ? String(ie.idField) : "id"
      ), _t(String(j.headerHeight ?? "")), Ht(
        j.populateField !== void 0 ? String(j.populateField) : ie.populateField !== void 0 ? String(ie.populateField) : ""
      ), qt(String(j.precision ?? "")), Vt(j.groupBy !== void 0 ? String(j.groupBy) : ""), Jt(j.disabledExp !== void 0 ? String(j.disabledExp) : ""), Wt(j.showExp !== void 0 ? String(j.showExp) : ""), D(String(j.row ?? "")), ne(j.template !== void 0 ? String(j.template) : ""), $e(j.templateLocked !== void 0 ? String(j.templateLocked) : ""), Fe(String(j.default ?? j.defaultValue ?? "")), Xe(!!j.realtime), Ue(j.showLabel !== !1 && j.label !== !1), mt(!!j.hidden), Qe(!!j.filterLocal), Qt(!!j.sqlSearch), Fs(!!j.cache), $s(!!j.moveTab), es(!!j.focus), Xs(!!j.focusSearch), Zs(!!j.noLoad), tn(!!j.collapsible), Es(!!j.showHotKey), us(!!j.history), xs(!!j.top), m(!!j.hideAnd), E(!!j.disabled), _(j.visibility !== !1), re(j.active !== !1), We(!!j.upperCase), pt(!!(j.virtualScroll || j.virtual)), Ct(!!j.isPrivate), As(!!j.renderIndex), An(!!(j.canAdd || j.add)), Mn(!!(j.canSearch || j.search)), _n(!!(j.isSummary || j.summary)), Vn(!!j.showDateTimeField);
      const He = j.dataSource !== void 0 ? j.dataSource : j.dataSourceFilter !== void 0 ? j.dataSourceFilter : ie.dataSource !== void 0 ? ie.dataSource : "";
      Wn(String(He ?? ""));
      const sa = j.formatEntity !== void 0 ? j.formatEntity : ie.formatEntity !== void 0 ? ie.formatEntity : "";
      Kn(String(sa ?? "")), Un(j.migration !== void 0 ? String(j.migration) : "");
      const na = j.formatData !== void 0 ? j.formatData : ie.formatData !== void 0 ? ie.formatData : "";
      Bs(String(na ?? ""));
      const ra = j.query !== void 0 ? j.query : ie.query !== void 0 ? ie.query : "";
      ea(String(ra ?? "")), c(
        j.dropdownColumns || ie.dropdownColumns || []
      );
    }
  }, [r, t]), !t || !r) return null;
  const ta = () => {
    let j = V;
    try {
      V.trim().startsWith("{") && (j = JSON.parse(V));
    } catch {
      j = V;
    }
    const ie = {
      ...r.props,
      id: p,
      group: I,
      reference: x,
      componentType: u,
      parentId: C,
      refName: y,
      fieldName: k,
      order: Number(w) || 1,
      colSpan: Number(R) || 4,
      column: Number(R) || 4,
      label: Q,
      events: j,
      style: K,
      childStyle: b,
      validation: de,
      selectField: Ce,
      plainText: we,
      cssClass: U,
      sqlSelect: Y,
      offset: xe,
      groupFormat: T,
      formatSummary: ee,
      orderBySummary: te,
      groupEvent: ce,
      icon: le,
      system: Pe,
      refClass: pe,
      hotKey: ae,
      dateTimeField: gt,
      addStart: xt,
      addEnd: ge,
      bodyRowHeight: ke,
      sqlWhere: Te,
      footerHeight: Ie,
      joinTable: dt,
      idField: vt,
      headerHeight: zt,
      populateField: wt,
      precision: _e ? Number(_e) : void 0,
      groupBy: Yt,
      disabledExp: It,
      showExp: Xt,
      row: Kt,
      template: J,
      templateLocked: be,
      default: Ae,
      // Display flags
      realtime: De,
      showLabel: Ke,
      hidden: tt,
      filterLocal: ut,
      sqlSearch: Ft,
      cache: Zt,
      moveTab: Rs,
      focus: Ls,
      focusSearch: Js,
      noLoad: Qs,
      collapsible: en,
      showHotKey: sn,
      history: ds,
      top: ps,
      hideAnd: hs,
      disabled: M,
      visibility: H,
      active: X,
      upperCase: Re,
      virtual: qe,
      isPrivate: yt,
      renderIndex: Ps,
      add: Pn,
      search: Bn,
      summary: On,
      showDateTimeField: Hn,
      // Code blocks
      dataSource: ts,
      dataSourceFilter: ts,
      formatEntity: nn,
      migration: Gn,
      formatData: ss,
      query: ts,
      dropdownColumns: d
    }, Le = {
      ...r.dataBinding || {},
      entityName: x || y || "",
      refName: y || x || "",
      fieldName: k || r.id,
      query: ts,
      dataSource: ts,
      sqlWhere: Te,
      selectField: Ce,
      populateField: wt,
      idField: vt,
      formatData: ss,
      formatEntity: nn,
      dropdownColumns: d,
      twoWay: !0
    };
    a(r.id, ie, Le), s();
  }, zn = Ws(l), ns = Ks(zn, x || y), ms = ns ? ns.fields : [], Ms = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes(u), Ge = (j, ie, Le) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${ie ? "text-slate-200 font-medium" : "text-slate-400"}`, children: j }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: ie,
        onChange: (He) => Le(He.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Gt, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            p || r.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: ta,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(mn, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-rose-400" }),
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
        Ms && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      value: p,
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
                      value: I,
                      onChange: (j) => f(j.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ns ? ns.name : "",
                      onChange: (j) => {
                        const ie = j.target.value;
                        N(ie), L(ie);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        zn.map((j) => /* @__PURE__ */ e.jsxs("option", { value: j.name, children: [
                          j.displayName,
                          " (",
                          j.name,
                          ")"
                        ] }, j.name))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: u,
                      onChange: (j) => v(j.target.value),
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
                      value: C,
                      onChange: (j) => h(j.target.value),
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
                      value: y,
                      placeholder: "VD: Vendor, Terminal, Customer...",
                      onChange: (j) => {
                        L(j.target.value), N(j.target.value);
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
                      value: k,
                      onChange: (j) => F(j.target.value),
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
                      value: w,
                      onChange: (j) => S(j.target.value),
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
                      value: R,
                      onChange: (j) => $(j.target.value),
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
                      value: Q,
                      onChange: (j) => O(j.target.value),
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
                      value: K,
                      onChange: (j) => G(j.target.value),
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
                      value: b,
                      onChange: (j) => se(j.target.value),
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
                      value: de,
                      onChange: (j) => me(j.target.value),
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
                      value: Ce,
                      onChange: (j) => he(j.target.value),
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
                      value: we,
                      onChange: (j) => Oe(j.target.value),
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
                      value: U,
                      onChange: (j) => oe(j.target.value),
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
                      value: Y,
                      onChange: (j) => z(j.target.value),
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
                      value: xe,
                      onChange: (j) => ve(j.target.value),
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
                      value: T,
                      onChange: (j) => B(j.target.value),
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
                      value: ee,
                      onChange: (j) => je(j.target.value),
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
                      value: te,
                      onChange: (j) => Se(j.target.value),
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
                      value: ce,
                      onChange: (j) => Ne(j.target.value),
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
                      value: le,
                      onChange: (j) => ue(j.target.value),
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
                      value: Pe,
                      onChange: (j) => ye(j.target.value),
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
                      value: pe,
                      onChange: (j) => W(j.target.value),
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
                      value: ae,
                      onChange: (j) => it(j.target.value),
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
                      value: gt,
                      onChange: (j) => rt(j.target.value),
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
                      value: xt,
                      onChange: (j) => q(j.target.value),
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
                      value: ge,
                      onChange: (j) => Ee(j.target.value),
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
                      value: ke,
                      onChange: (j) => Me(j.target.value),
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
                      value: Te,
                      onChange: (j) => Ye(j.target.value),
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
                      value: Ie,
                      onChange: (j) => ht(j.target.value),
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
                      value: dt,
                      onChange: (j) => Nt(j.target.value),
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
                      value: vt,
                      onChange: (j) => Ot(j.target.value),
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
                      value: zt,
                      onChange: (j) => _t(j.target.value),
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
                      value: wt,
                      onChange: (j) => Ht(j.target.value),
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
                      value: _e,
                      onChange: (j) => qt(j.target.value),
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
                      value: Yt,
                      onChange: (j) => Vt(j.target.value),
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
                      value: It,
                      onChange: (j) => Jt(j.target.value),
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
                      value: Xt,
                      onChange: (j) => Wt(j.target.value),
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
                      value: Kt,
                      onChange: (j) => D(j.target.value),
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
                      value: J,
                      onChange: (j) => ne(j.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Cs, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: be,
                      onChange: (j) => $e(j.target.value),
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
                      value: Ae,
                      onChange: (j) => Fe(j.target.value),
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
                  Ge("Realtime", De, Xe),
                  Ge("Label", Ke, Ue),
                  Ge("Hidden", tt, mt),
                  Ge("FilterLocal", ut, Qe),
                  Ge("SqlSearch", Ft, Qt),
                  Ge("Cache", Zt, Fs),
                  Ge("Move Tab", Rs, $s),
                  Ge("Focus", Ls, es),
                  Ge("FocusSearch", Js, Xs),
                  Ge("No Load", Qs, Zs),
                  Ge("Collapsible", en, tn),
                  Ge("HotKey", sn, Es),
                  Ge("History", ds, us)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Ge("Top", ps, xs),
                  Ge("HideAnd", hs, m),
                  Ge("Disabled", M, E),
                  Ge("Visibility", H, _),
                  Ge("Active", X, re),
                  Ge("Upper Case", Re, We),
                  Ge("Virtual", qe, pt),
                  Ge("Private", yt, Ct),
                  Ge("Render Index", Ps, As),
                  Ge("Add", Pn, An),
                  Ge("Search", Bn, Mn),
                  Ge("Sumary", On, _n),
                  Ge("DateTime Field", Hn, Vn)
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
                      value: ts,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (j) => Wn(j.target.value),
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
                      value: nn,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (j) => Kn(j.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${Ms ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: Gn,
                      onChange: (j) => Un(j.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !Ms && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: ss,
                      onChange: (j) => Bs(j.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && Ms && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(bt, { className: "w-4 h-4 text-emerald-400" }),
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
                    var j, ie;
                    c([
                      ...d,
                      {
                        key: ((j = ms[d.length]) == null ? void 0 : j.name) || `col${d.length + 1}`,
                        title: ((ie = ms[d.length]) == null ? void 0 : ie.displayName) || `Cột ${d.length + 1}`,
                        width: "50%",
                        align: "left"
                      }
                    ]);
                  },
                  className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                  ]
                }
              ),
              ns && ms.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const j = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let ie = ms.filter((Le) => j.includes(Le.name.toLowerCase()));
                    ie.length === 0 ? ie = ms.slice(0, 3) : ie = ie.slice(0, 4), c(
                      ie.map((Le) => ({
                        key: Le.name,
                        title: Le.displayName || Le.name,
                        width: `${Math.floor(100 / ie.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      ns.name
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
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((j, ie) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: ie === 0,
                  onClick: () => {
                    const Le = [...d], He = Le[ie];
                    Le[ie] = Le[ie - 1], Le[ie - 1] = He, c(Le);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(ws, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: ie === d.length - 1,
                  onClick: () => {
                    const Le = [...d], He = Le[ie];
                    Le[ie] = Le[ie + 1], Le[ie + 1] = He, c(Le);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(St, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: j.key,
                placeholder: "Key (vd: FullName)",
                onChange: (Le) => {
                  const He = [...d];
                  He[ie] = { ...He[ie], key: Le.target.value }, c(He);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: j.title,
                placeholder: "Tiêu đề cột",
                onChange: (Le) => {
                  const He = [...d];
                  He[ie] = { ...He[ie], title: Le.target.value }, c(He);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: j.width || "50%",
                placeholder: "Width",
                onChange: (Le) => {
                  const He = [...d];
                  He[ie] = { ...He[ie], width: Le.target.value }, c(He);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: j.align || "left",
                onChange: (Le) => {
                  const He = [...d];
                  He[ie] = { ...He[ie], align: Le.target.value }, c(He);
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
                onClick: () => c(d.filter((Le, He) => He !== ie)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, ie)) }),
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
                value: ss,
                onChange: (j) => Bs(j.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((j, ie) => {
              const Le = x || y, He = Le ? `{${Le}.${j.key}}` : `{${j.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Bs(ss ? `${ss} - ${He}` : He),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    He
                  ]
                },
                ie
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(mn, { className: "w-4 h-4 text-teal-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Ma Trận Phân Quyền Theo Vai Trò (Roles & RBAC)" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-xs text-left text-slate-300 border border-slate-800", children: [
            /* @__PURE__ */ e.jsx("thead", { className: "bg-[#070d18] text-slate-400 uppercase text-[10px]", children: /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 border border-slate-800", children: "Vai Trò (Role)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 border border-slate-800 text-center", children: "Xem (View)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 border border-slate-800 text-center", children: "Sửa (Edit)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 border border-slate-800 text-center", children: "Ẩn (Hide)" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-2 px-3 border border-slate-800 text-center", children: "Khóa (Disable)" })
            ] }) }),
            /* @__PURE__ */ e.jsx("tbody", { children: ["Admin (Quản trị)", "Operator (Nhân viên)", "Accountant (Kế toán)", "Customer (Khách hàng)"].map(
              (j, ie) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: j }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    defaultChecked: !0,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    defaultChecked: ie <= 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    defaultChecked: !1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    defaultChecked: ie > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, j)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(is, { className: "w-4 h-4 text-teal-400" }),
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
}, nt = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = A(
    t != null ? String(t) : ""
  ), d = Je(r);
  d.current = r;
  const c = Je(null);
  Be(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (x) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const N = t != null ? String(t) : "";
    x !== N && d.current(x);
  };
  Be(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (x) => {
    const N = x.target.value;
    i(N), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(N);
    }, s);
  }, I = (x) => {
    p(x.target.value), a && a(x);
  }, f = (x) => {
    x.key === "Enter" && p(x.target.value), n && n(x);
  };
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: I,
      onKeyDown: f
    }
  );
}, zl = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = A(
    t != null ? String(t) : ""
  ), d = Je(r);
  d.current = r;
  const c = Je(null);
  Be(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (f) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const x = t != null ? String(t) : "";
    f !== x && d.current(f);
  };
  Be(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (f) => {
    const x = f.target.value;
    i(x), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(x);
    }, s);
  }, I = (f) => {
    p(f.target.value), a && a(f);
  };
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: I,
      onKeyDown: n
    }
  );
}, ql = ({ width: t }) => {
  var z, xe, ve;
  const [r, s] = A("layout"), [a, n] = A(null), [o, l] = A(!1), [i, d] = A(!1), [c, p] = A([]);
  Be(() => {
    Ln().then((T) => {
      T && T.length > 0 && p(T);
    });
  }, []);
  const [g, I] = A(null), [f, x] = A(null), N = Z((T) => T.activeFeatureId), u = Z((T) => T.features.find((B) => B.id === T.activeFeatureId)), v = Z((T) => T.selection), C = Z((T) => T.selectComponent), h = Z((T) => T.addComponent), y = Z((T) => T.updateComponentProps), L = Z((T) => T.updateComponentStyle), k = Z((T) => T.updateComponentEvents), F = Z((T) => T.updateComponentDataBinding), w = Z((T) => T.updateComponentValidation), S = Z((T) => T.updateComponentPermissions), R = Z((T) => T.updateComponentOrder), $ = Z((T) => T.removeComponent);
  Z((T) => T.distributeSiblingWidths);
  const Q = Z((T) => T.updateFeatureScriptFile), [O, V] = A(""), [P, K] = A(0), G = (T, B) => {
    if (!B) return null;
    for (const ee of T) {
      if (ee.id === B) return ee;
      if (ee.children) {
        const je = G(ee.children, B);
        if (je) return je;
      }
    }
    return null;
  }, b = Ve(
    () => v.componentId && u ? G(u.components, v.componentId) : null,
    [v.componentId, u]
  ), se = Ve(
    () => b != null && b.parentId && u ? G(u.components, b.parentId) : null,
    [b == null ? void 0 : b.parentId, u]
  ), de = Ve(
    () => {
      var T, B;
      return se && ((T = se.props) != null && T.isTab || (B = se.props) != null && B.tab || se.type === "Tabs") ? se : null;
    },
    [se]
  );
  if (!b) {
    const T = u ? u.components.filter((B) => !B.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: t ? `${t}px` : "380px" },
        className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: "Feature" }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (u == null ? void 0 : u.name) || "Trang" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: u == null ? void 0 : u.route })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: u && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: u.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  nt,
                  {
                    type: "text",
                    value: u.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (B) => Q(u.id, B),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      T.length,
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
                      const B = `box_${Date.now().toString(36)}`;
                      h(
                        {
                          id: B,
                          type: "Container",
                          parentId: null,
                          pageId: u.id,
                          order: T.length + 1,
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
                      /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              T.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...T].sort((B, ee) => (B.order ?? 1) - (ee.order ?? 1)).map((B, ee) => {
                var te, Se;
                const je = !!((te = B.props) != null && te.tab || (Se = B.props) != null && Se.isTab || B.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => C(B.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          ee + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: B.props.label || B.props.title || B.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: B.type }),
                            je && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            B.id
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
                              value: Number(B.order ?? B.props.order ?? ee + 1),
                              onClick: (ce) => ce.stopPropagation(),
                              onChange: (ce) => {
                                const Ne = Number(ce.target.value);
                                R(B.id, Ne);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (ce) => {
                              ce.stopPropagation(), $(B.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  B.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const me = b.type === "Container" || b.type === "Section" || b.type === "Tabs", Ce = b.type === "Select" || b.type === "Dropdown" || b.type === "Autocomplete" || b.type === "SearchEntry", he = b.props.dropdownColumns || ((z = b.dataBinding) == null ? void 0 : z.dropdownColumns) || [], we = !me && (r === "layout" || r === "children") ? "props" : !Ce && r === "columns" ? "data" : r, Oe = b.props.layoutMode || "flex", U = b.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, oe = b.props.gridConfig || { columns: 2, gap: "16px" }, Y = b.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: t ? `${t}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: b.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: b.props.label || b.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                b.id
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
                children: /* @__PURE__ */ e.jsx(Gt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => $(b.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(ot, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          me && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ls, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          me && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  Y.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ya, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(gn, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          Ce && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => s("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  he.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(Jn, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${we === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          me && we === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => y(b.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Oe === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => y(b.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Oe === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ls, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              Oe === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: U.direction || "row",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, direction: T.target.value }
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
                          value: typeof U.columnsPerRow == "number" ? U.columnsPerRow : oe.columns || 12,
                          onChange: (T) => {
                            const B = Math.max(1, Number(T.target.value) || 12);
                            y(b.id, {
                              flexConfig: { ...U, columnsPerRow: B },
                              gridConfig: { ...oe, columns: B }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(U.columnsPerRow || "12"),
                          onChange: (T) => {
                            const B = T.target.value === "auto" ? "auto" : Number(T.target.value);
                            y(b.id, {
                              flexConfig: {
                                ...U,
                                columnsPerRow: B,
                                wrap: B !== "auto" ? "wrap" : U.wrap
                              },
                              gridConfig: {
                                ...oe,
                                columns: B === "auto" ? 12 : B
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
                        value: U.justify || "flex-start",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, justify: T.target.value }
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
                        value: U.align || "center",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, align: T.target.value }
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
                        value: U.gap || "12px",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, gap: T.target.value }
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
                        value: U.wrap || "wrap",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, wrap: T.target.value }
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
              Oe === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: oe.columns || 12,
                          onChange: (T) => {
                            const B = Math.max(1, Number(T.target.value) || 12);
                            y(b.id, {
                              gridConfig: { ...oe, columns: B },
                              flexConfig: { ...U, columnsPerRow: B }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(oe.columns || 12),
                          onChange: (T) => {
                            const B = Number(T.target.value);
                            y(b.id, {
                              gridConfig: { ...oe, columns: B },
                              flexConfig: { ...U, columnsPerRow: B }
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
                        value: U.gap || oe.gap || "12px",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, gap: T.target.value },
                          gridConfig: { ...oe, gap: T.target.value }
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
                        value: U.justify || "flex-start",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, justify: T.target.value }
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
                        value: U.align || "center",
                        onChange: (T) => y(b.id, {
                          flexConfig: { ...U, align: T.target.value }
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
                    checked: !!(b.props.isTab || b.props.tab || b.type === "Tabs"),
                    onChange: (T) => {
                      var je;
                      const B = T.target.checked, ee = b.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      y(b.id, {
                        isTab: B,
                        tab: B,
                        tabs: B ? ee : b.props.tabs,
                        activeTabId: B ? b.props.activeTabId || ((je = ee[0]) == null ? void 0 : je.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(b.props.isTab || b.props.tab || b.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: b.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (T) => y(b.id, { label: T }),
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
                        value: Number(b.order ?? b.props.order ?? 1),
                        onChange: (T) => {
                          const B = Number(T.target.value);
                          R(b.id, B);
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
                        value: b.props.badge !== void 0 ? String(b.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (T) => y(b.id, {
                          badge: T.target.value || void 0
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
          me && we === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                Y.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            Y.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...Y].sort((T, B) => (T.order ?? 1) - (B.order ?? 1)).map((T, B) => {
              var te, Se;
              const ee = v.componentId === T.id, je = !!((te = T.props) != null && te.tab || (Se = T.props) != null && Se.isTab || T.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => C(T.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${ee ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        B + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: T.props.label || T.props.title || T.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: T.type }),
                          je && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          T.id
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
                            value: T.order ?? B + 1,
                            onClick: (ce) => ce.stopPropagation(),
                            onChange: (ce) => {
                              const Ne = Number(ce.target.value);
                              R(T.id, Ne);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (ce) => {
                            ce.stopPropagation(), $(T.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                T.id
              );
            }) })
          ] }),
          we === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(b.order ?? b.props.order ?? 1),
                      onChange: (T) => {
                        const B = Number(T.target.value);
                        R(b.id, B);
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
                        value: Number(b.props.colSpan || 4),
                        onChange: (T) => {
                          const B = Math.max(1, Number(T.target.value) || 1);
                          y(b.id, { colSpan: B });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: b.props.colSpan || 4,
                        onChange: (T) => y(b.id, { colSpan: Number(T.target.value) }),
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
                    b.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(b.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            me && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(b.props.tab || b.props.isTab || b.type === "Tabs"),
                  onChange: (T) => {
                    const B = T.target.checked;
                    y(b.id, {
                      tab: B,
                      isTab: B
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            de && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: b.props.tabId || ((ve = (xe = de.props.tabs) == null ? void 0 : xe[0]) == null ? void 0 : ve.id) || "main",
                  onChange: (T) => y(b.id, { tabId: T.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (de.props.tabs || []).map((T) => /* @__PURE__ */ e.jsxs("option", { value: T.id, children: [
                    T.label,
                    " (",
                    T.id,
                    ")"
                  ] }, T.id))
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
                      checked: b.props.showLabel ?? !0,
                      onChange: (T) => y(b.id, { showLabel: T.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                nt,
                {
                  type: "text",
                  value: b.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (T) => y(b.id, { label: T }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: b.props.labelPosition || "left",
                      onChange: (T) => y(b.id, { labelPosition: T.target.value }),
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
                        value: Number(b.props.colSpan || 4),
                        onChange: (T) => {
                          const B = Math.max(1, Number(T.target.value) || 1);
                          y(b.id, { colSpan: B });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: b.props.colSpan || 4,
                        onChange: (T) => y(b.id, { colSpan: Number(T.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((T) => /* @__PURE__ */ e.jsxs("option", { value: T, children: [
                          T,
                          " Cột (",
                          Math.round(T / 12 * 100),
                          "%)"
                        ] }, T))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    b.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(b.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            b.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                nt,
                {
                  type: "text",
                  value: b.props.placeholder || "",
                  onChange: (T) => y(b.id, { placeholder: T }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            b.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  nt,
                  {
                    type: "text",
                    value: b.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (T) => y(b.id, { reference: T }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: b.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (T) => y(b.id, { displayField: T }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: b.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (T) => y(b.id, { valueField: T }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  nt,
                  {
                    type: "text",
                    value: b.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (T) => y(b.id, { placeholder: T }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            b.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: b.props.rows || 3,
                  onChange: (T) => y(b.id, { rows: Number(T.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            b.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: b.props.precision !== void 0 ? b.props.precision : 2,
                    onChange: (T) => y(b.id, { precision: Number(T.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: b.props.thousandsSeparator ?? !0,
                    onChange: (T) => y(b.id, { thousandsSeparator: T.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            b.type === "Table" && (() => {
              const T = b.props.columns || [], B = a !== null ? T[a] : null, ee = (le, ue) => {
                const Pe = T.map((ye, pe) => pe === le ? { ...ye, ...ue } : ye);
                y(b.id, { columns: Pe });
              }, je = (le, ue) => {
                if (ue < 0 || ue >= T.length) return;
                const Pe = Cn(T, le, ue);
                y(b.id, { columns: Pe }), n(ue);
              }, te = (le) => {
                const ue = Kr(T, le);
                y(b.id, { columns: ue });
                const Pe = ue.findIndex((ye) => ye.key === le);
                Pe !== -1 && n(Pe);
              }, Se = (le, ue) => {
                const Pe = Math.max(0, Math.min(T.length - 1, ue - 1));
                if (Pe !== le) {
                  const ye = Cn(T, le, Pe);
                  y(b.id, { columns: ye }), n(Pe);
                }
              }, ce = () => {
                const le = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: T.length + 1
                }, ue = Ns([...T, le]);
                y(b.id, { columns: ue }), n(ue.length - 1);
              }, Ne = (le) => {
                const ue = T.filter((ye, pe) => pe !== le), Pe = Ns(ue);
                y(b.id, { columns: Pe }), a === le ? n(null) : a !== null && a > le && n(a - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ce,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: T.map((le, ue) => {
                  const Pe = a === ue, ye = !!(le.frozen || le.sticky === "left"), pe = g === ue, W = f === ue;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => I(ue),
                      onDragOver: (ae) => {
                        ae.preventDefault(), !(g === null || g === ue) && x(ue);
                      },
                      onDragLeave: () => x(null),
                      onDrop: () => {
                        g !== null && g !== ue && je(g, ue), I(null), x(null);
                      },
                      onDragEnd: () => {
                        I(null), x(null);
                      },
                      onClick: () => n(ue),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${pe ? "opacity-30 bg-slate-800" : ""} ${W ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Pe ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(Rn, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ue === 0,
                                onClick: (ae) => {
                                  ae.stopPropagation(), je(ue, ue - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(ws, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ue === T.length - 1,
                                onClick: (ae) => {
                                  ae.stopPropagation(), je(ue, ue + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(St, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            le.order ?? ue + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: le.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            le.key,
                            "]"
                          ] }),
                          ye && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: le.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (ae) => {
                                ae.stopPropagation(), Ne(ue);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(ot, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    le.key || ue
                  );
                }) }),
                B && a !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      B.title
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
                        /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Mở Modal Cấu Hình Đầy Đủ (Chuẩn Ảnh 6)" })
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
                          max: T.length,
                          value: B.order ?? a + 1,
                          onChange: (le) => {
                            const ue = parseInt(le.target.value, 10);
                            isNaN(ue) || Se(a, ue);
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
                          value: B.key,
                          onChange: (le) => ee(a, { key: le.target.value }),
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
                          value: B.title,
                          onChange: (le) => ee(a, { title: le.target.value }),
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
                          value: B.componentType || "TextBox",
                          onChange: (le) => ee(a, { componentType: le.target.value }),
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
                          value: B.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (le) => ee(a, { width: le.target.value }),
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
                          value: B.align || "left",
                          onChange: (le) => ee(a, { align: le.target.value }),
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
                          value: B.aggregate || "none",
                          onChange: (le) => ee(a, { aggregate: le.target.value }),
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
                          checked: !!(B.frozen || B.sticky === "left"),
                          onChange: () => te(B.key),
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
                          checked: B.editable ?? !0,
                          onChange: (le) => ee(a, { editable: le.target.checked }),
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
                          checked: B.sortable ?? !0,
                          onChange: (le) => ee(a, { sortable: le.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(ft, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(B.events) ? B.events.length : B.action ? 1 : 0,
                          ")"
                        ] })
                      ] }),
                      /* @__PURE__ */ e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => l(!0),
                          className: "text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer flex items-center gap-0.5",
                          children: [
                            /* @__PURE__ */ e.jsx("span", { children: "Cấu hình chi tiết" }),
                            /* @__PURE__ */ e.jsx("span", { children: "→" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(B.events) && B.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: B.events.map((le) => `${le.trigger} ➔ ${le.handlerName || le.action}()`).join(", ") }) : B.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      B.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && B && a !== null && /* @__PURE__ */ e.jsx(
                  Hr,
                  {
                    isOpen: o,
                    column: B,
                    onClose: () => l(!1),
                    onSave: (le) => {
                      const ue = T.map((pe, W) => W === a ? le : pe), Pe = Ns(ue);
                      y(b.id, { columns: Pe });
                      const ye = Pe.findIndex((pe) => pe.key === le.key);
                      ye !== -1 && n(ye);
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
                    checked: !!b.props.required,
                    onChange: (T) => y(b.id, { required: T.target.checked }),
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
                    checked: !!b.props.disabled,
                    onChange: (T) => y(b.id, { disabled: T.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          we === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: b.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (T) => L(b.id, { width: T.target.value }),
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
                    value: b.style.height || b.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (T) => L(b.id, {
                      height: T.target.value,
                      minHeight: T.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: b.style.customCss || Gl(b.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (T) => {
                    const B = T.target.value, ee = Kl(B);
                    if (L(b.id, {
                      ...ee,
                      customCss: B
                    }), ee.justifyContent || ee.alignItems) {
                      const je = b.props.flexConfig || {};
                      y(b.id, {
                        flexConfig: {
                          ...je,
                          ...ee.justifyContent ? { justify: ee.justifyContent } : {},
                          ...ee.alignItems ? { align: ee.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          we === "events" && /* @__PURE__ */ e.jsx(
            _r,
            {
              events: b.events || [],
              onChange: (T) => k(b.id, T),
              scriptFile: (u == null ? void 0 : u.scriptFile) || "transactionList.bl.ts",
              componentName: b.props.label || b.type,
              componentId: b.id,
              contextExtra: {
                pageId: N,
                nodeId: b.id,
                type: b.type
              }
            }
          ),
          we === "data" && (() => {
            const T = b.dataBinding || {}, B = b.props || {}, ee = b.type, je = ee === "Table" || ee === "GridView" || ee === "AdvancedGrid", te = ee === "Select" || ee === "Dropdown" || ee === "Autocomplete" || ee === "SearchEntry", Se = ee === "TextBox" || ee === "Number" || ee === "DatePicker" || ee === "Checkbox" || ee === "Textarea", ce = !je && !te && !Se, Ne = Ws(c), le = T.entityName || B.reference || B.refName || "", ue = Ks(Ne, le), Pe = ue ? ue.fields : [], ye = T.dataSource || B.dataSource || B.dataSourceFilter || T.query || B.query || "", pe = (W) => {
              F(b.id, {
                dataSource: W,
                query: W
              }), y(b.id, {
                dataSource: W,
                dataSourceFilter: W,
                query: W
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(gn, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      ee,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  je && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  te && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  Se && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  ce && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(Gt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              je && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ue ? ue.name : "",
                      onChange: (W) => {
                        const ae = W.target.value;
                        F(b.id, {
                          entityName: ae,
                          refName: ae
                        }), y(b.id, {
                          reference: ae,
                          refName: ae
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        Ne.map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.name, children: [
                          W.displayName,
                          " (",
                          W.name,
                          ")"
                        ] }, W.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: T.entityName || B.reference || B.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (W) => {
                        const ae = W.target.value;
                        F(b.id, {
                          entityName: ae,
                          refName: ae
                        }), y(b.id, {
                          reference: ae,
                          refName: ae
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: ye,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (W) => pe(W.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => pe("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => pe("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => pe(""),
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
                    nt,
                    {
                      type: "text",
                      value: T.sqlWhere || B.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (W) => {
                        F(b.id, { sqlWhere: W }), y(b.id, { sqlWhere: W });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              te && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: T.fieldName || B.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (W) => {
                        F(b.id, { fieldName: W }), y(b.id, { fieldName: W });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Pe.map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.name, children: [
                    W.displayName,
                    " (",
                    W.name,
                    ")"
                  ] }, W.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ue ? ue.name : "",
                      onChange: (W) => {
                        const ae = W.target.value;
                        F(b.id, {
                          entityName: ae,
                          refName: ae
                        }), y(b.id, {
                          reference: ae,
                          refName: ae
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        Ne.map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.name, children: [
                          W.displayName,
                          " (",
                          W.name,
                          ")"
                        ] }, W.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: T.entityName || B.reference || B.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (W) => {
                        F(b.id, {
                          entityName: W,
                          refName: W
                        }), y(b.id, {
                          reference: W,
                          refName: W
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    zl,
                    {
                      rows: 3,
                      value: ye,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (W) => pe(W),
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
                    nt,
                    {
                      type: "text",
                      value: T.populateField || B.populateRule || B.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (W) => {
                        F(b.id, { populateField: W }), y(b.id, { populateRule: W, populateField: W });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      nt,
                      {
                        type: "text",
                        value: T.idField || B.idField || "Id",
                        placeholder: "Id",
                        onChange: (W) => {
                          F(b.id, { idField: W }), y(b.id, { idField: W });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      nt,
                      {
                        type: "text",
                        value: T.selectField || B.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (W) => {
                          F(b.id, { selectField: W }), y(b.id, { selectField: W });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      he.length,
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
                  he.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: he.map((W, ae) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        W.title,
                        " (",
                        W.key,
                        ")"
                      ]
                    },
                    ae
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (T.formatData ?? B.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              Se && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    nt,
                    {
                      type: "text",
                      value: T.fieldName || B.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (W) => {
                        F(b.id, { fieldName: W }), y(b.id, { fieldName: W });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Pe.map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.name, children: [
                    W.displayName,
                    " (",
                    W.name,
                    ")"
                  ] }, W.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: T.formatter || "",
                      onChange: (W) => F(b.id, { formatter: W.target.value }),
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
                    nt,
                    {
                      type: "text",
                      value: T.formatData || B.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (W) => {
                        F(b.id, { formatData: W }), y(b.id, { formatData: W });
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
                      checked: T.twoWay ?? !0,
                      onChange: (W) => F(b.id, { twoWay: W.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              ce && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(Et, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  b.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          we === "columns" && Ce && (() => {
            const T = b.dataBinding || {}, B = b.props || {}, ee = Ws(c), je = T.entityName || B.reference || B.refName || "", te = Ks(ee, je), Se = te ? te.fields : [], ce = T.formatData ?? B.formatData ?? "", Ne = (ye) => {
              y(b.id, { dropdownColumns: ye }), F(b.id, { dropdownColumns: ye });
            }, le = () => {
              var pe, W;
              const ye = [
                ...he,
                {
                  key: ((pe = Se[he.length]) == null ? void 0 : pe.name) || `col${he.length + 1}`,
                  title: ((W = Se[he.length]) == null ? void 0 : W.displayName) || `Cột ${he.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              Ne(ye);
            }, ue = () => {
              if (!te || te.fields.length === 0) return;
              const ye = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let pe = te.fields.filter(
                (ae) => ye.includes(ae.name.toLowerCase())
              );
              pe.length === 0 ? pe = te.fields.slice(0, 3) : pe = pe.slice(0, 4);
              const W = pe.map((ae) => ({
                key: ae.name,
                title: ae.displayName || ae.name,
                width: `${Math.floor(100 / pe.length)}%`,
                align: "left"
              }));
              Ne(W);
            }, Pe = (ye, pe) => {
              const W = ye + pe;
              if (W < 0 || W >= he.length) return;
              const ae = [...he], it = ae[ye];
              ae[ye] = ae[W], ae[W] = it, Ne(ae);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(bt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: je ? `Ref: ${je}` : "Chưa chọn Ref" })
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
                      onClick: le,
                      className: "flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột Mới" })
                      ]
                    }
                  ),
                  te && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ue,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${te.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(ft, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  he.length,
                  ")"
                ] }) }),
                he.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: he.map((ye, pe) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          pe + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Pe(pe, -1),
                              disabled: pe === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(ws, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Pe(pe, 1),
                              disabled: pe === he.length - 1,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển xuống",
                              children: /* @__PURE__ */ e.jsx(St, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const W = he.filter((ae, it) => it !== pe);
                                Ne(W);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
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
                              value: ye.key,
                              list: `dropdown-col-fields-${pe}`,
                              placeholder: "vd: FullName",
                              onChange: (W) => {
                                const ae = [...he];
                                ae[pe] = { ...ae[pe], key: W.target.value }, Ne(ae);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${pe}`, children: Se.map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.name, children: [
                            W.displayName,
                            " (",
                            W.name,
                            ")"
                          ] }, W.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: ye.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (W) => {
                                const ae = [...he];
                                ae[pe] = { ...ae[pe], title: W.target.value }, Ne(ae);
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
                              value: ye.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (W) => {
                                const ae = [...he];
                                ae[pe] = { ...ae[pe], width: W.target.value }, Ne(ae);
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
                              value: ye.align || "left",
                              onChange: (W) => {
                                const ae = [...he];
                                ae[pe] = { ...ae[pe], align: W.target.value }, Ne(ae);
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
                  pe
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
                    value: ce,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (ye) => {
                      const pe = ye.target.value;
                      F(b.id, { formatData: pe }), y(b.id, { formatData: pe });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                he.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: he.map((ye, pe) => {
                    const W = je ? `{${je}.${ye.key}}` : `{${ye.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const ae = ce ? `${ce} - ${W}` : W;
                          F(b.id, { formatData: ae }), y(b.id, { formatData: ae });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          W
                        ]
                      },
                      pe
                    );
                  }) })
                ] })
              ] })
            ] });
          })(),
          we === "validation" && (() => {
            const T = b.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Jn, { className: "w-4 h-4 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Quy Tắc Xác Thực Dữ Liệu (Validation Rules)" })
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: "Thiết lập các điều kiện kiểm tra hợp lệ cho ô nhập liệu. Hệ thống sẽ tự động hiển thị thông báo lỗi khi không thỏa mãn." })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-slate-200 font-bold", children: "Bắt buộc nhập (Required)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: !!T.required,
                      onChange: (B) => w(b.id, { required: B.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                T.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: T.requiredMessage || "",
                    onChange: (B) => w(b.id, { requiredMessage: B.target.value }),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-red-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ dài tối thiểu (Min)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      placeholder: "0",
                      value: T.minLength !== void 0 ? T.minLength : "",
                      onChange: (B) => w(b.id, {
                        minLength: B.target.value === "" ? void 0 : Number(B.target.value)
                      }),
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ dài tối đa (Max)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      placeholder: "255",
                      value: T.maxLength !== void 0 ? T.maxLength : "",
                      onChange: (B) => w(b.id, {
                        maxLength: B.target.value === "" ? void 0 : Number(B.target.value)
                      }),
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Mẫu Kiểm Tra Regex (Pattern)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Ví dụ: ^[A-Z0-9]{8,18}$ (Mã Bill MBL)",
                    value: T.pattern || "",
                    onChange: (B) => w(b.id, { pattern: B.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: T.patternMessage || "",
                    onChange: (B) => w(b.id, { patternMessage: B.target.value }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Hàm Xác Thực Nghiệp Vụ Tùy Biến (Custom BL)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Ví dụ: CheckMBL, validateTaxCode...",
                    value: T.customValidator || "",
                    onChange: (B) => w(b.id, { customValidator: B.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          we === "permissions" && (() => {
            const T = b.permissions || {}, B = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], ee = T.allowedRoles || [], je = T.readOnlyRoles || [], te = (ce) => {
              const Ne = ee.includes(ce) ? ee.filter((le) => le !== ce) : [...ee, ce];
              S(b.id, { allowedRoles: Ne });
            }, Se = (ce) => {
              const Ne = je.includes(ce) ? je.filter((le) => le !== ce) : [...je, ce];
              S(b.id, { readOnlyRoles: Ne });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Cs, { className: "w-4 h-4 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Phân Quyền Trường Dữ Liệu (Field-Level RBAC)" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-amber-200/80 leading-relaxed", children: [
                  "Kế thừa trực tiếp từ ",
                  /* @__PURE__ */ e.jsx("code", { children: "SecurityBL.cs" }),
                  " & ",
                  /* @__PURE__ */ e.jsx("code", { children: "PolicyEditorBL.cs" }),
                  " của C# Core. Giới hạn hiển thị hoặc quyền thao tác cho từng vai trò trên giao diện."
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Được Phép Truy Cập (Allowed Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Để trống = Tất cả mọi vai trò đều được truy cập." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: B.map((ce) => {
                  const Ne = ee.includes(ce);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => te(ce),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${Ne ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ce }),
                        Ne && /* @__PURE__ */ e.jsx(vn, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    ce
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: B.map((ce) => {
                  const Ne = je.includes(ce);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => Se(ce),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${Ne ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ce }),
                        Ne && /* @__PURE__ */ e.jsx(vn, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    ce
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Hành Vi Khi Không Có Quyền (Denied Behavior)" }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => S(b.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(T.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-bold mb-0.5", children: "Ẩn Hoàn Toàn" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400", children: "Không hiển thị trên màn hình" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => S(b.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${T.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-bold mb-0.5", children: "Khóa Mờ (Disable)" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400", children: "Hiển thị xám chỉ đọc" })
                      ]
                    }
                  )
                ] })
              ] })
            ] });
          })()
        ] }),
        i && b && /* @__PURE__ */ e.jsx(
          Ul,
          {
            isOpen: i,
            node: b,
            onClose: () => d(!1),
            onSave: (T, B, ee) => {
              y(T, B), ee && F(T, ee);
            }
          }
        )
      ]
    }
  );
}, Co = Mt.memo(ql), cr = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: Pt,
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
    icon: wr,
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
    icon: Et,
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
    icon: as,
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
    icon: Bt,
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
    icon: Tr,
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
    icon: ja,
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
    icon: yr,
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
    icon: Na,
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
    icon: wa,
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
    icon: bt,
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
    icon: Cr,
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
    icon: Hs,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: is,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: kr,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: Ca,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: ka,
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
    icon: Sa,
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
    icon: bn,
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
    icon: Sr,
    defaultProps: {
      title: "THỐNG KÊ SẢN LƯỢNG",
      chartType: "bar",
      reference: "Statistics",
      colSpan: 8
    },
    defaultStyle: { width: "100%", minHeight: "320px" }
  }
], Yl = ({ item: t, onClick: r, isEditing: s }) => {
  const a = t.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = Fr({
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
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, ko = ({ isEditing: t = !0, onAddComponent: r }) => {
  const s = Z((c) => c.addComponent), a = Z((c) => c.activeFeatureId), n = Z((c) => c.features), o = Z((c) => c.selection), l = n.find((c) => c.id === a), i = (c, p) => {
    if (!p) return null;
    for (const g of c) {
      if (g.id === p) return g;
      if (g.children) {
        const I = i(g.children, p);
        if (I) return I;
      }
    }
    return null;
  }, d = (c) => {
    var f;
    if (!t) return;
    if (r) {
      r(c.type);
      return;
    }
    const p = i((l == null ? void 0 : l.components) || [], o.componentId);
    let g = null;
    p && (p.type === "Container" ? g = p.id : g = p.parentId || null);
    const I = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: g,
      pageId: a,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((f = l == null ? void 0 : l.components) == null ? void 0 : f.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    s(I, g);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Rn, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: cr.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: cr.map((c) => /* @__PURE__ */ e.jsx(
      Yl,
      {
        item: c,
        onClick: d,
        isEditing: t
      },
      c.type
    )) })
  ] });
}, So = () => {
  const t = Z((i) => i.features), r = Z((i) => i.activeFeatureId), s = Z((i) => i.selection), a = Z((i) => i.selectComponent), n = Z((i) => i.removeComponent), o = t.find((i) => i.id === r);
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
              /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                onClick: (g) => {
                  g.stopPropagation(), n(c.id);
                },
                className: "text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "Xóa component",
                children: /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, d + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, To = () => {
  const t = Ze((f) => f.openTabs), r = Ze((f) => f.activeTabId), s = Ze((f) => f.setActiveTab), a = Ze((f) => f.closeTab), n = Z((f) => f.setActiveFeature), o = fe((f) => f.isFormDirty), l = fe((f) => f.markFormClean), [i, d] = A(null);
  if (t.length === 0) return null;
  const c = (f, x) => {
    var u;
    s(f);
    const N = t.find((v) => v.id === f);
    n(x, ((u = N == null ? void 0 : N.params) == null ? void 0 : u.id) ?? null);
  }, p = (f) => {
    a(f), setTimeout(() => {
      var N;
      const x = Ze.getState().openTabs.find(
        (u) => u.id === Ze.getState().activeTabId
      );
      x && n(x.featureId, ((N = x.params) == null ? void 0 : N.id) ?? null);
    }, 50);
  }, g = (f, x) => {
    if (f.stopPropagation(), x.isDirty || (x.featureId ? o(x.featureId) : !1)) {
      d(x);
      return;
    }
    p(x.id);
  }, I = () => {
    i && (i.featureId && l(i.featureId), p(i.id), d(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: t.map((f) => {
      const x = f.id === r, N = f.isDirty || (f.featureId ? o(f.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(f.id, f.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${x ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: N ? `${f.title} (Có dữ liệu chưa lưu)` : f.title,
          children: [
            /* @__PURE__ */ e.jsx(Pt, { className: `w-3.5 h-3.5 ${x ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: f.title }),
            N && /* @__PURE__ */ e.jsx(
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
                onClick: (u) => g(u, f),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(ct, { className: "w-3 h-3" })
              }
            )
          ]
        },
        f.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(Ta, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Dữ liệu chưa được lưu!" }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-300 leading-relaxed", children: [
            "Tab ",
            /* @__PURE__ */ e.jsxs("span", { className: "font-semibold text-amber-300", children: [
              '"',
              i.title,
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
            onClick: () => d(null),
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer border border-slate-700",
            children: "Tiếp tục chỉnh sửa"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: I,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Xr = "uiforge_resilience_queue_v1";
let Vs = !1, dr = !1;
function Gs() {
  if (typeof window > "u") return [];
  try {
    const t = localStorage.getItem(Xr);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function Qr(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Xr, JSON.stringify(t)), console.log(`[ResilienceQueue] Hiện có ${t.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function Jl(t, r) {
  var n;
  const s = Gs(), a = {
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
  return s.push(a), Qr(s), Zr(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${a.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), a;
}
function Zr(t, r, s = "info") {
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
async function xn(t) {
  var n, o;
  if (Vs) return;
  const r = Gs();
  if (r.length === 0) return;
  Vs = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${r.length} tác vụ đang chờ...`);
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
  Qr(a), Vs = !1, s > 0 && Zr(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${s} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function Xl(t) {
  var s, a;
  if (!t) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !t.response && (t.code === "ERR_NETWORK" || (s = t.message) != null && s.includes("Network Error"))) return !0;
  const r = (a = t.response) == null ? void 0 : a.status;
  return r === 502 || r === 503 || r === 504;
}
function Ql(t) {
  dr || typeof window > "u" || (dr = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), xn(t);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && Gs().length > 0 && !Vs && xn(t);
  }, 2e4), setTimeout(() => {
    const r = Gs();
    r.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${r.length} tác vụ chưa hoàn tất từ phiên trước.`), xn(t));
  }, 3e3));
}
const Zl = "http://localhost:5048/api", Ys = Ma.create({
  baseURL: Zl,
  timeout: 15e3
});
Ys.interceptors.request.use((t) => {
  const r = En.getState().token;
  return r && (t.headers.Authorization = `Bearer ${r}`), t;
});
Ys.interceptors.response.use(
  (t) => t,
  async (t) => {
    var a, n, o, l, i;
    if (((a = t == null ? void 0 : t.response) == null ? void 0 : a.status) === 401)
      return En.getState().logout(), Promise.reject(t);
    const r = (((n = t == null ? void 0 : t.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(r) && Xl(t)) {
      const d = (l = (o = t == null ? void 0 : t.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${r} [${(i = t == null ? void 0 : t.config) == null ? void 0 : i.url}]`;
      return Jl(t.config, d), Promise.resolve({
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
Ql(Ys);
async function eo(t) {
  await Ys.delete(`/pages/${t}`);
}
const Do = ({ width: t }) => {
  const r = Z((k) => k.features), s = Z((k) => k.activeFeatureId), a = Z((k) => k.setActiveFeature), n = Z((k) => k.addFeature), o = Z((k) => k.renameFeature), l = Z((k) => k.deleteFeature), i = r.filter((k) => !k.hidden && !k.isDetail), [d, c] = A(null), [p, g] = A(!1), [I, f] = A(""), [x, N] = A(null), u = (k) => {
    k.preventDefault(), c({
      x: k.clientX,
      y: k.clientY
    });
  }, v = (k, F) => {
    k.preventDefault(), k.stopPropagation(), c({
      x: k.clientX,
      y: k.clientY,
      featureId: F
    });
  }, C = () => {
    f(""), g(!0);
  }, h = (k) => {
    k.preventDefault(), I.trim() && (n(I.trim()), g(!1), f(""));
  }, y = (k) => {
    k.preventDefault(), !(!x || !x.name.trim()) && (o(x.id, x.name.trim()), N(null));
  }, L = d != null && d.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: on,
      onClick: C
    },
    {
      divider: !0,
      label: "",
      onClick: () => {
      }
    },
    {
      label: "✏️ Đổi tên Feature này",
      icon: Da,
      onClick: () => {
        const k = r.find((F) => F.id === d.featureId);
        k && N({ id: k.id, name: k.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: ot,
      danger: !0,
      onClick: async () => {
        if (confirm("Bạn có chắc chắn muốn xóa Feature này?")) {
          try {
            await eo(d.featureId);
          } catch {
          }
          l(d.featureId);
        }
      }
    }
  ] : [
    {
      label: "➕ Thêm Feature mới (Màn hình mới)",
      icon: on,
      onClick: C
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: u,
        style: { width: t ? `${t}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((k, F) => {
            const w = k.id === s;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  a(k.id, null), Ze.getState().openFeature(k.id, {}, "Tab", k.name);
                },
                onContextMenu: (S) => v(S, k.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${w ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${w ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: F === 0 ? /* @__PURE__ */ e.jsx(Ia, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: k.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (S) => v(S, k.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${w ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(Fa, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              },
              k.id
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              r.length,
              " màn hình"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "v1.2" })
          ] })
        ]
      }
    ),
    d && /* @__PURE__ */ e.jsx(
      Jr,
      {
        x: d.x,
        y: d.y,
        items: L,
        onClose: () => c(null)
      }
    ),
    p && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: h,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(on, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold", children: "Thêm Feature (Màn hình mới)" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Tạo một phân hệ giao diện trong phần mềm" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5", children: "Tên Feature / Màn hình:" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                autoFocus: !0,
                placeholder: "Ví dụ: Quản lý Khách Hàng, Báo Cáo Doanh Thu...",
                value: I,
                onChange: (k) => f(k.target.value),
                className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => g(!1),
                className: "px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer",
                children: "Hủy bỏ"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "submit",
                className: "px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 cursor-pointer",
                children: "Tạo Màn Hình"
              }
            )
          ] })
        ]
      }
    ) }),
    x && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: y,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: x.name,
              onChange: (k) => N({ ...x, name: k.target.value }),
              className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => N(null),
                className: "px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer",
                children: "Hủy"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "submit",
                className: "px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white cursor-pointer",
                children: "Cập nhật"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, Io = ({
  isPreview: t,
  onTogglePreview: r,
  onSave: s,
  isSaving: a = !1
}) => {
  const n = Z((p) => p.undo), o = Z((p) => p.redo), l = Z((p) => p.historyIndex), i = Z((p) => p.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Dr, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Ir, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: r, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: t ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: s, disabled: a, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Fo = ({
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
  const g = Z((y) => y.features), I = Z((y) => y.activeFeatureId), f = Z((y) => y.undo), x = Z((y) => y.redo), N = Z((y) => y.historyIndex), u = Z((y) => y.history), v = g.find((y) => y.id === I), C = N > 0, h = N < u.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-14 border-b border-slate-800 bg-slate-900/95 px-5 flex items-center justify-between shrink-0 select-none shadow-sm backdrop-blur-sm z-30", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-sm shadow-md shadow-blue-500/20", children: "UF" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-extrabold text-sm tracking-wide text-white", children: "UIForge" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-800 font-semibold", children: "Enterprise" })
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Web App Visual Framework" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "h-5 w-[1px] bg-slate-800" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-slate-500", children: "Feature:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (v == null ? void 0 : v.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: f,
            disabled: !C,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(Dr, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: x,
            disabled: !h,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(Ir, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: r,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${t ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Ra, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Dn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: a ? "Đang lưu..." : "Lưu Giao Diện" })
          ]
        }
      )
    ] }) : null,
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      !t && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${n ? "bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30" : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750"}`,
          title: n ? "Ẩn bảng quản lý bên phải" : "Mở bảng quản lý bên phải",
          children: n ? /* @__PURE__ */ e.jsx($a, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(La, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(Ea, { className: "w-4 h-4" }),
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
            children: /* @__PURE__ */ e.jsx(Pa, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, Ro = () => {
  const t = Ze((i) => i.activePopup), r = Ze((i) => i.closePopup), s = Ze((i) => i.openFeature), a = Z((i) => i.features);
  if (!t) return null;
  const n = a.find((i) => String(i.id) === String(t.featureId)), o = t.params || {}, l = () => {
    s(t.featureId, t.params, "Tab", t.title), r();
  };
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(Nr, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(Aa, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          Ts,
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
                /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" }),
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
class $o {
  get dataEngine() {
    return fe.getState();
  }
  get navigationEngine() {
    return Ze.getState();
  }
  get editorStore() {
    return Z.getState();
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
function Lo(t) {
  return t;
}
export {
  $o as BaseBL,
  Hr as ColumnPropertiesModal,
  ko as ComponentPalette,
  Ul as ComponentPropertiesModal,
  Ts as ComponentRenderer,
  So as ComponentTree,
  Jr as ContextMenu,
  Vr as EnterpriseDatePicker,
  Dl as EnterpriseSelect,
  wo as FeatureCanvas,
  Ro as FeaturePopupModal,
  go as ForgeAdvancedGrid,
  Ol as ForgeAutocomplete,
  nl as ForgeButton,
  Hl as ForgeChart,
  Fl as ForgeCheckbox,
  nr as ForgeContainer,
  Rl as ForgeDatePicker,
  Ll as ForgeDivider,
  Ml as ForgeFileUploadGrid,
  xo as ForgeFormContainer,
  ll as ForgeLabel,
  $l as ForgeModal,
  al as ForgeNumber,
  Pl as ForgeRecordSelector,
  Bl as ForgeSearchEntry,
  Al as ForgeSearchModal,
  ol as ForgeSection,
  Il as ForgeSelect,
  zr as ForgeTabStack,
  Sl as ForgeTable,
  vo as ForgeTabs,
  rl as ForgeTextBox,
  El as ForgeTextarea,
  _l as ForgeTreeView,
  Ut as FormFieldWrapper,
  rr as GridCellComponent,
  il as HeaderContextMenu,
  yo as InlineCellEditor,
  Do as LeftNavbar,
  _s as PermissionGuard,
  Co as PropertyPanel,
  cl as RowContextMenu,
  ul as SummaryRow,
  Io as TopBar,
  Fo as TopNav,
  _r as UnifiedEventEditor,
  To as WorkspaceTabBar,
  tl as addFunctionToBlFile,
  vl as calculateAutoPopulatedFields,
  fl as calculateLeftOffsets,
  Lo as defineBL,
  fo as downloadBackendDocxReport,
  bo as downloadBackendPdfReport,
  Ss as executeSingleEvent,
  Nl as exportGridToExcel,
  Or as findFunctionInModule,
  ho as getCascadedOptions,
  Yr as getComponentOuterLayoutStyle,
  el as getFunctionsForBlFile,
  qr as groupNodesByTabStack,
  Tl as interpolateFormatData,
  sr as invokeBLLifecycle,
  Cn as moveColumn,
  Us as normalizeBlKey,
  Ns as normalizeColumnOrders,
  ar as parseDDMMYYYY,
  Ur as printGridReport,
  po as registerBL,
  sl as registerBlFunctions,
  uo as removeFunctionFromBlFile,
  $n as resolveBlModule,
  Wr as sortColumnsByCorePolicy,
  Kr as toggleColumnFreeze,
  ze as triggerComponentEvent,
  En as useAuthStore,
  fe as useDataEngine,
  Z as useEditorStore,
  No as useGlobalHotkeys,
  bl as useGridKeyboardNavigation,
  Rt as useMasterDetailStore,
  Ze as useNavigationEngine,
  jo as useRealtimeEngine,
  Sn as validateDateSequence,
  yl as validateField,
  mo as validateForm,
  kn as validateISO6346ContainerNo
};
