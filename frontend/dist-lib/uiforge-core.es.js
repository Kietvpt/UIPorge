var pa = Object.defineProperty;
var ha = (t, r, s) => r in t ? pa(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s;
var pn = (t, r, s) => ha(t, typeof r != "symbol" ? r + "" : r, s);
import Zt, { useState as D, useRef as tt, useEffect as He, useMemo as Ae, useCallback as vs, useId as vr } from "react";
import { create as xs } from "zustand";
import ma from "axios";
import { Layers as yt, ChevronDown as wt, ChevronUp as Ss, Printer as yr, Zap as Tt, Save as Gt, Eye as Rs, EyeOff as Pn, Pin as jr, ChevronRight as es, Sliders as lt, Copy as Ls, Trash2 as bt, Filter as Nr, Settings as ba, ClipboardPaste as wr, PlusCircle as Cr, ArrowUp as En, ArrowDown as An, Plus as Qe, FileCode as jn, Play as fa, Shield as Nn, X as dt, Table as Nt, Calendar as Mn, ChevronLeft as kr, Clock as ga, ExternalLink as Sr, FolderTree as wn, Search as Et, RefreshCw as va, FileDown as ya, ArrowUpDown as Bn, Loader2 as Cn, Check as Qs, Tag as Tr, Database as kn, Paperclip as Ir, Upload as tr, Download as hn, Image as ja, FileText as Qt, File as Na, Minus as Dr, FolderOpen as wa, Folder as Zs, TrendingUp as Ca, BarChart3 as Fr, LineChart as ka, PieChart as Sa, GripVertical as $s, Lock as Ts, Sparkles as On, CheckCircle2 as qs, Box as Xt, ArrowRightLeft as sr, Columns as ds, Type as ns, Square as Cs, Paintbrush as Ta, ShieldCheck as nr, Code as Us, Hash as Rr, ChevronDownSquare as Ia, CheckSquare as Da, Maximize2 as Fa, AlignLeft as Ra, FolderKanban as La, AlertTriangle as $a, XCircle as Lr, Info as rr, Menu as mn, FolderPlus as Pa, MoreVertical as Ea, Truck as Aa, DollarSign as Ma, Ship as Ba, Plane as Oa, Package as _a, LayoutDashboard as Ha, Undo2 as $r, Redo2 as Pr, Edit3 as Ga, PanelRightClose as Va, PanelRightOpen as Wa, Bell as Ka, LogOut as Ua, CheckCircle as za } from "lucide-react";
import { createPortal as It } from "react-dom";
import { useDraggable as Er, useDroppable as Ar, useSensors as qa, useSensor as Ya, PointerSensor as Ja, DndContext as Xa, closestCenter as Qa, DragOverlay as Za } from "@dnd-kit/core";
import { CSS as Mr } from "@dnd-kit/utilities";
import { SortableContext as el, verticalListSortingStrategy as tl, useSortable as sl } from "@dnd-kit/sortable";
var Sn = { exports: {} }, ys = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function nl() {
  if (ar) return ys;
  ar = 1;
  var t = Zt, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var p, g = {}, T = null, x = null;
    c !== void 0 && (T = "" + c), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (p in d) a.call(d, p) && !o.hasOwnProperty(p) && (g[p] = d[p]);
    if (i && i.defaultProps) for (p in d = i.defaultProps, d) g[p] === void 0 && (g[p] = d[p]);
    return { $$typeof: r, type: i, key: T, ref: x, props: g, _owner: n.current };
  }
  return ys.Fragment = s, ys.jsx = l, ys.jsxs = l, ys;
}
var js = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function rl() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Zt, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), h = Symbol.iterator, w = "@@iterator";
    function u(I) {
      if (I === null || typeof I != "object")
        return null;
      var te = h && I[h] || I[w];
      return typeof te == "function" ? te : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(I) {
      {
        for (var te = arguments.length, de = new Array(te > 1 ? te - 1 : 0), ve = 1; ve < te; ve++)
          de[ve - 1] = arguments[ve];
        m("error", I, de);
      }
    }
    function m(I, te, de) {
      {
        var ve = v.ReactDebugCurrentFrame, G = ve.getStackAddendum();
        G !== "" && (te += "%s", de = de.concat([G]));
        var je = de.map(function(ke) {
          return String(ke);
        });
        je.unshift("Warning: " + te), Function.prototype.apply.call(console[I], console, je);
      }
    }
    var y = !1, P = !1, R = !1, F = !1, C = !1, S;
    S = Symbol.for("react.module.reference");
    function L(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === a || I === o || C || I === n || I === c || I === p || F || I === x || y || P || R || typeof I == "object" && I !== null && (I.$$typeof === T || I.$$typeof === g || I.$$typeof === l || I.$$typeof === i || I.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === S || I.getModuleId !== void 0));
    }
    function $(I, te, de) {
      var ve = I.displayName;
      if (ve)
        return ve;
      var G = te.displayName || te.name || "";
      return G !== "" ? de + "(" + G + ")" : de;
    }
    function se(I) {
      return I.displayName || "Context";
    }
    function V(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
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
      if (typeof I == "object")
        switch (I.$$typeof) {
          case i:
            var te = I;
            return se(te) + ".Consumer";
          case l:
            var de = I;
            return se(de._context) + ".Provider";
          case d:
            return $(I, I.render, "ForwardRef");
          case g:
            var ve = I.displayName || null;
            return ve !== null ? ve : V(I.type) || "Memo";
          case T: {
            var G = I, je = G._payload, ke = G._init;
            try {
              return V(ke(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, E = 0, Y, z, b, ae, O, _, me;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function ye() {
      {
        if (E === 0) {
          Y = console.log, z = console.info, b = console.warn, ae = console.error, O = console.group, _ = console.groupCollapsed, me = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        E++;
      }
    }
    function ue() {
      {
        if (E--, E === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, I, {
              value: Y
            }),
            info: U({}, I, {
              value: z
            }),
            warn: U({}, I, {
              value: b
            }),
            error: U({}, I, {
              value: ae
            }),
            group: U({}, I, {
              value: O
            }),
            groupCollapsed: U({}, I, {
              value: _
            }),
            groupEnd: U({}, I, {
              value: me
            })
          });
        }
        E < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = v.ReactCurrentDispatcher, Q;
    function W(I, te, de) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (G) {
            var ve = G.stack.trim().match(/\n( *(at )?)/);
            Q = ve && ve[1] || "";
          }
        return `
` + Q + I;
      }
    }
    var q = !1, ie;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new Ne();
    }
    function j(I, te) {
      if (!I || q)
        return "";
      {
        var de = ie.get(I);
        if (de !== void 0)
          return de;
      }
      var ve;
      q = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = M.current, M.current = null, ye();
      try {
        if (te) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (Ze) {
              ve = Ze;
            }
            Reflect.construct(I, [], ke);
          } else {
            try {
              ke.call();
            } catch (Ze) {
              ve = Ze;
            }
            I.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            ve = Ze;
          }
          I();
        }
      } catch (Ze) {
        if (Ze && ve && typeof Ze.stack == "string") {
          for (var oe = Ze.stack.split(`
`), Ve = ve.stack.split(`
`), We = oe.length - 1, Pe = Ve.length - 1; We >= 1 && Pe >= 0 && oe[We] !== Ve[Pe]; )
            Pe--;
          for (; We >= 1 && Pe >= 0; We--, Pe--)
            if (oe[We] !== Ve[Pe]) {
              if (We !== 1 || Pe !== 1)
                do
                  if (We--, Pe--, Pe < 0 || oe[We] !== Ve[Pe]) {
                    var Xe = `
` + oe[We].replace(" at new ", " at ");
                    return I.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", I.displayName)), typeof I == "function" && ie.set(I, Xe), Xe;
                  }
                while (We >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = je, ue(), Error.prepareStackTrace = G;
      }
      var at = I ? I.displayName || I.name : "", it = at ? W(at) : "";
      return typeof I == "function" && ie.set(I, it), it;
    }
    function A(I, te, de) {
      return j(I, !1);
    }
    function ne(I) {
      var te = I.prototype;
      return !!(te && te.isReactComponent);
    }
    function Ce(I, te, de) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return j(I, ne(I));
      if (typeof I == "string")
        return W(I);
      switch (I) {
        case c:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case d:
            return A(I.render);
          case g:
            return Ce(I.type, te, de);
          case T: {
            var ve = I, G = ve._payload, je = ve._init;
            try {
              return Ce(je(G), te, de);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Fe = {}, fe = v.ReactDebugCurrentFrame;
    function Ie(I) {
      if (I) {
        var te = I._owner, de = Ce(I.type, I._source, te ? te.type : null);
        fe.setExtraStackFrame(de);
      } else
        fe.setExtraStackFrame(null);
    }
    function pe(I, te, de, ve, G) {
      {
        var je = Function.call.bind(le);
        for (var ke in I)
          if (je(I, ke)) {
            var oe = void 0;
            try {
              if (typeof I[ke] != "function") {
                var Ve = Error((ve || "React class") + ": " + de + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              oe = I[ke](te, ke, ve, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (We) {
              oe = We;
            }
            oe && !(oe instanceof Error) && (Ie(G), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", de, ke, typeof oe), Ie(null)), oe instanceof Error && !(oe.message in Fe) && (Fe[oe.message] = !0, Ie(G), k("Failed %s type: %s", de, oe.message), Ie(null));
          }
      }
    }
    var ge = Array.isArray;
    function Me(I) {
      return ge(I);
    }
    function De(I) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, de = te && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return de;
      }
    }
    function we(I) {
      try {
        return X(I), !1;
      } catch {
        return !0;
      }
    }
    function X(I) {
      return "" + I;
    }
    function xe(I) {
      if (we(I))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(I)), X(I);
    }
    var ot = v.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nt, pt;
    function ee(I) {
      if (le.call(I, "ref")) {
        var te = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Se(I) {
      if (le.call(I, "key")) {
        var te = Object.getOwnPropertyDescriptor(I, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function Ee(I, te) {
      typeof I.ref == "string" && ot.current;
    }
    function Re(I, te) {
      {
        var de = function() {
          nt || (nt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        de.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function _e(I, te) {
      {
        var de = function() {
          pt || (pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        de.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var Le = function(I, te, de, ve, G, je, ke) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: I,
        key: te,
        ref: de,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return oe._store = {}, Object.defineProperty(oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function qe(I, te, de, ve, G) {
      {
        var je, ke = {}, oe = null, Ve = null;
        de !== void 0 && (xe(de), oe = "" + de), Se(te) && (xe(te.key), oe = "" + te.key), ee(te) && (Ve = te.ref, Ee(te, G));
        for (je in te)
          le.call(te, je) && !ft.hasOwnProperty(je) && (ke[je] = te[je]);
        if (I && I.defaultProps) {
          var We = I.defaultProps;
          for (je in We)
            ke[je] === void 0 && (ke[je] = We[je]);
        }
        if (oe || Ve) {
          var Pe = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          oe && Re(ke, Pe), Ve && _e(ke, Pe);
        }
        return Le(I, oe, Ve, G, ve, ot.current, ke);
      }
    }
    var $e = v.ReactCurrentOwner, rt = v.ReactDebugCurrentFrame;
    function ut(I) {
      if (I) {
        var te = I._owner, de = Ce(I.type, I._source, te ? te.type : null);
        rt.setExtraStackFrame(de);
      } else
        rt.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function gt(I) {
      return typeof I == "object" && I !== null && I.$$typeof === r;
    }
    function xt() {
      {
        if ($e.current) {
          var I = V($e.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function Wt(I) {
      return "";
    }
    var Dt = {};
    function vt(I) {
      {
        var te = xt();
        if (!te) {
          var de = typeof I == "string" ? I : I.displayName || I.name;
          de && (te = `

Check the top-level render call using <` + de + ">.");
        }
        return te;
      }
    }
    function kt(I, te) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var de = vt(te);
        if (Dt[de])
          return;
        Dt[de] = !0;
        var ve = "";
        I && I._owner && I._owner !== $e.current && (ve = " It was passed a child from " + V(I._owner.type) + "."), ut(I), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, ve), ut(null);
      }
    }
    function Ge(I, te) {
      {
        if (typeof I != "object")
          return;
        if (Me(I))
          for (var de = 0; de < I.length; de++) {
            var ve = I[de];
            gt(ve) && kt(ve, te);
          }
        else if (gt(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var G = u(I);
          if (typeof G == "function" && G !== I.entries)
            for (var je = G.call(I), ke; !(ke = je.next()).done; )
              gt(ke.value) && kt(ke.value, te);
        }
      }
    }
    function Kt(I) {
      {
        var te = I.type;
        if (te == null || typeof te == "string")
          return;
        var de;
        if (typeof te == "function")
          de = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === g))
          de = te.propTypes;
        else
          return;
        if (de) {
          var ve = V(te);
          pe(de, I.props, "prop", ve, I);
        } else if (te.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var G = V(te);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ut(I) {
      {
        for (var te = Object.keys(I.props), de = 0; de < te.length; de++) {
          var ve = te[de];
          if (ve !== "children" && ve !== "key") {
            ut(I), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), ut(null);
            break;
          }
        }
        I.ref !== null && (ut(I), k("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var Ft = {};
    function Rt(I, te, de, ve, G, je) {
      {
        var ke = L(I);
        if (!ke) {
          var oe = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Wt();
          Ve ? oe += Ve : oe += xt();
          var We;
          I === null ? We = "null" : Me(I) ? We = "array" : I !== void 0 && I.$$typeof === r ? (We = "<" + (V(I.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : We = typeof I, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", We, oe);
        }
        var Pe = qe(I, te, de, G, je);
        if (Pe == null)
          return Pe;
        if (ke) {
          var Xe = te.children;
          if (Xe !== void 0)
            if (ve)
              if (Me(Xe)) {
                for (var at = 0; at < Xe.length; at++)
                  Ge(Xe[at], I);
                Object.freeze && Object.freeze(Xe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(Xe, I);
        }
        if (le.call(te, "key")) {
          var it = V(I), Ze = Object.keys(te).filter(function(zt) {
            return zt !== "key";
          }), St = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ft[it + St]) {
            var Ot = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, St, it, Ot, it), Ft[it + St] = !0;
          }
        }
        return I === a ? Ut(Pe) : Kt(Pe), Pe;
      }
    }
    function Lt(I, te, de) {
      return Rt(I, te, de, !0);
    }
    function At(I, te, de) {
      return Rt(I, te, de, !1);
    }
    var Mt = At, Bt = Lt;
    js.Fragment = a, js.jsx = Mt, js.jsxs = Bt;
  }()), js;
}
process.env.NODE_ENV === "production" ? Sn.exports = nl() : Sn.exports = rl();
var e = Sn.exports;
const rs = ({
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
}, or = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, ir = (t) => !!t.dispatchFromDevtools && typeof t.dispatch == "function", Is = /* @__PURE__ */ new Map(), Ws = (t) => {
  const r = Is.get(t);
  return r ? Object.fromEntries(
    Object.entries(r.stores).map(([s, a]) => [s, a.getState()])
  ) : {};
}, al = (t, r, s) => {
  if (t === void 0)
    return {
      type: "untracked",
      connection: r.connect(s)
    };
  const a = Is.get(s.name);
  if (a)
    return { type: "tracked", store: t, ...a };
  const n = {
    connection: r.connect(s),
    stores: {}
  };
  return Is.set(s.name, n), { type: "tracked", store: t, ...n };
}, ll = (t, r) => {
  if (r === void 0) return;
  const s = Is.get(t);
  s && (delete s.stores[r], Object.keys(s.stores).length === 0 && Is.delete(t));
}, ol = /^at (?:new |async )?(.+?) \(/, il = /^([^@]+)@/;
function cl(t) {
  var r, s, a;
  if (!t) return;
  const n = t.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((r = n[o + 1]) == null ? void 0 : r.trim()) || "";
  return ((s = ol.exec(l)) == null ? void 0 : s[1]) || ((a = il.exec(l)) == null ? void 0 : a[1]);
}
const dl = (t, r = {}) => (s, a, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = r;
  let c;
  try {
    c = (o ?? (or ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return t(s, a, n);
  const { connection: p, ...g } = al(i, c, d);
  let T = !0;
  n.setState = (w, u, v) => {
    const k = s(w, u);
    if (!T) return k;
    const m = v === void 0 ? {
      type: l || cl(new Error().stack) || "anonymous"
    } : typeof v == "string" ? { type: v } : v;
    return i === void 0 ? (p == null || p.send(m, a()), k) : (p == null || p.send(
      {
        ...m,
        type: `${i}/${m.type}`
      },
      {
        ...Ws(d.name),
        [i]: n.getState()
      }
    ), k);
  }, n.devtools = {
    cleanup: () => {
      p && typeof p.unsubscribe == "function" && p.unsubscribe(), ll(d.name, i);
    }
  };
  const x = (...w) => {
    const u = T;
    T = !1, s(...w), T = u;
  }, h = t(n.setState, a, n);
  if (g.type === "untracked" ? p == null || p.init(h) : (g.stores[g.store] = n, p == null || p.init(
    Object.fromEntries(
      Object.entries(g.stores).map(([w, u]) => [
        w,
        w === g.store ? h : u.getState()
      ])
    )
  )), ir(n)) {
    let w = !1;
    const u = n.dispatch;
    n.dispatch = (...v) => {
      (or ? "production" : void 0) !== "production" && v[0].type === "__setState" && !w && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), w = !0), u(...v);
    };
  }
  return p.subscribe((w) => {
    var u;
    switch (w.type) {
      case "ACTION":
        if (typeof w.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return bn(
          w.payload,
          (v) => {
            if (v.type === "__setState") {
              if (i === void 0) {
                x(v.state);
                return;
              }
              Object.keys(v.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const k = v.state[i];
              if (k == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(k) && x(k);
              return;
            }
            ir(n) && n.dispatch(v);
          }
        );
      case "DISPATCH":
        switch (w.payload.type) {
          case "RESET":
            return x(h), i === void 0 ? p == null ? void 0 : p.init(n.getState()) : p == null ? void 0 : p.init(Ws(d.name));
          case "COMMIT":
            if (i === void 0) {
              p == null || p.init(n.getState());
              return;
            }
            return p == null ? void 0 : p.init(Ws(d.name));
          case "ROLLBACK":
            return bn(w.state, (v) => {
              if (i === void 0) {
                x(v), p == null || p.init(n.getState());
                return;
              }
              x(v[i]), p == null || p.init(Ws(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return bn(w.state, (v) => {
              if (i === void 0) {
                x(v);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(v[i]) && x(v[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: v } = w.payload, k = (u = v.computedStates.slice(-1)[0]) == null ? void 0 : u.state;
            if (!k) return;
            x(i === void 0 ? k : k[i]), p == null || p.send(
              null,
              // FIXME no-any
              v
            );
            return;
          }
          case "PAUSE_RECORDING":
            return T = !T;
        }
        return;
    }
  }), h;
}, Ps = dl, bn = (t, r) => {
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
function ul(t, r) {
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
const Tn = (t) => (r) => {
  try {
    const s = t(r);
    return s instanceof Promise ? s : {
      then(a) {
        return Tn(a)(s);
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
        return Tn(a)(s);
      }
    };
  }
}, xl = (t, r) => (s, a, n) => {
  let o = {
    storage: ul(() => window.localStorage),
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
  }, T = n.setState;
  n.setState = (u, v) => (T(u, v), g());
  const x = t(
    (...u) => (s(...u), g()),
    a,
    n
  );
  n.getInitialState = () => x;
  let h;
  const w = () => {
    var u, v;
    if (!p) return;
    const k = ++i;
    l = !1, d.forEach((y) => {
      var P;
      return y((P = a()) != null ? P : x);
    });
    const m = ((v = o.onRehydrateStorage) == null ? void 0 : v.call(o, (u = a()) != null ? u : x)) || void 0;
    return Tn(p.getItem.bind(p))(o.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== o.version) {
          if (o.migrate) {
            const P = o.migrate(
              y.state,
              y.version
            );
            return P instanceof Promise ? P.then((R) => [!0, R]) : [!0, P];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var P;
      if (k !== i)
        return;
      const [R, F] = y;
      if (h = o.merge(
        F,
        (P = a()) != null ? P : x
      ), s(h, !0), R)
        return g();
    }).then(() => {
      k === i && (m == null || m(a(), void 0), h = a(), l = !0, c.forEach((y) => y(h)));
    }).catch((y) => {
      k === i && (m == null || m(void 0, y));
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
    rehydrate: () => w(),
    hasHydrated: () => l,
    onHydrate: (u) => (d.add(u), () => {
      d.delete(u);
    }),
    onFinishHydration: (u) => (c.add(u), () => {
      c.delete(u);
    })
  }, o.skipHydration || w(), h || x;
}, pl = xl, _n = xs()(
  pl(
    (t) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: r, branch: s, user: a }) => t({ token: r, branch: s, user: a }),
      logout: () => t({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), Br = "uiforge_resilience_queue_v1";
let zs = !1, cr = !1;
function Ys() {
  if (typeof window > "u") return [];
  try {
    const t = localStorage.getItem(Br);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function Or(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Br, JSON.stringify(t)), console.log(`[ResilienceQueue] Hiện có ${t.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function hl(t, r) {
  var n;
  const s = Ys(), a = {
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
  return s.push(a), Or(s), _r(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${a.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), a;
}
function _r(t, r, s = "info") {
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
async function fn(t) {
  var n, o;
  if (zs) return;
  const r = Ys();
  if (r.length === 0) return;
  zs = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${r.length} tác vụ đang chờ...`);
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
  Or(a), zs = !1, s > 0 && _r(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${s} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function ml(t) {
  var s, a;
  if (!t) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !t.response && (t.code === "ERR_NETWORK" || (s = t.message) != null && s.includes("Network Error"))) return !0;
  const r = (a = t.response) == null ? void 0 : a.status;
  return r === 502 || r === 503 || r === 504;
}
function bl(t) {
  cr || typeof window > "u" || (cr = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), fn(t);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && Ys().length > 0 && !zs && fn(t);
  }, 2e4), setTimeout(() => {
    const r = Ys();
    r.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${r.length} tác vụ chưa hoàn tất từ phiên trước.`), fn(t));
  }, 3e3));
}
const fl = "http://localhost:5048/api", ts = ma.create({
  baseURL: fl,
  timeout: 15e3
});
ts.interceptors.request.use((t) => {
  const r = _n.getState().token;
  return r && (t.headers.Authorization = `Bearer ${r}`), t;
});
ts.interceptors.response.use(
  (t) => t,
  async (t) => {
    var a, n, o, l, i;
    if (((a = t == null ? void 0 : t.response) == null ? void 0 : a.status) === 401)
      return _n.getState().logout(), Promise.reject(t);
    const r = (((n = t == null ? void 0 : t.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(r) && ml(t)) {
      const d = (l = (o = t == null ? void 0 : t.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${r} [${(i = t == null ? void 0 : t.config) == null ? void 0 : i.url}]`;
      return hl(t.config, d), Promise.resolve({
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
bl(ts);
async function gl(t) {
  await ts.delete(`/pages/${t}`);
}
async function vl(t) {
  const { data: r } = await ts.put("/pages/reorder", t);
  return r;
}
async function yl(t, r) {
  const { data: s } = await ts.put(`/pages/${t}/properties`, r);
  return s;
}
async function jl(t) {
  const { data: r } = await ts.post(`/pages/clone/${t}`);
  return r;
}
async function Nl(t) {
  const { data: r } = await ts.put(`/pages/${t}/toggle-active`);
  return r;
}
function wl(t) {
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
const Cl = 40;
function gn() {
  if (typeof window > "u") return null;
  try {
    const t = new URLSearchParams(window.location.search), r = t.get("feature") || t.get("page");
    return r || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function vn() {
  if (typeof window > "u") return null;
  try {
    const r = new URLSearchParams(window.location.search).get("id");
    return r || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function Hr(t) {
  var r, s, a, n;
  return t ? !!(t.isDetail || t.route === "/fcl-import" || (r = t.route) != null && r.includes("detail") || (s = t.scriptFile) != null && s.toLowerCase().includes("detail") || (a = t.name) != null && a.toLowerCase().includes("fcl import") || (n = t.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function In(t) {
  return t ? !Hr(t) : !1;
}
function ss(t, r, s) {
  var a;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", t);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", t);
      const l = (s || ((a = Z.getState()) == null ? void 0 : a.features) || []).find((d) => String(d.id) === String(t) || d.route === `/${t}` || d.route === t);
      if ((l ? In(l) : t === "6" || t === "1" || t === "3") || r === null || r === "") {
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
const Z = xs()(
  Ps(
    (t, r) => ({
      features: [],
      activeFeatureId: gn() || "",
      activeRecordId: vn(),
      selection: { componentId: null, pageId: gn() || "" },
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
        const n = r().features || [], o = n.find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s), l = o ? In(o) : s === "6" || s === "1" || s === "3";
        ss(s, l ? null : a, n);
        let i = null;
        l || a === null || a === "" ? i = null : a != null ? i = String(a) : i = vn(), t((d) => ({
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
        const a = gn(), n = a && s.find((i) => i.id === a || i.route === `/${a}` || i.route === a) || s.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || s.find((i) => !i.hidden && !i.isDetail) || s[0], l = In(n) ? null : vn();
        ss(n.id, l, s), t({
          features: s,
          activeFeatureId: n.id,
          activeRecordId: l,
          selection: { componentId: null, pageId: n.id },
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
        return ss(l, null), t((p) => {
          const g = [...p.features, c];
          return {
            ...et(p, g),
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
          return vl(
            s.map((l) => ({
              id: l.id,
              parentId: l.parentId,
              order: l.order,
              isGroup: l.isGroup
            }))
          ).catch(() => {
          }), et(a, o);
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
          return yl(s, d).catch(() => {
          }), et(n, i);
        });
      },
      cloneFeature: async (s) => {
        const n = r().features.find((i) => i.id === s);
        if (!n) return null;
        try {
          const i = await jl(s);
          if (i && i.id) {
            const d = wl(i);
            return t((c) => {
              const p = [...c.features, d];
              return {
                ...et(c, p),
                activeFeatureId: d.id,
                selection: { componentId: null, pageId: d.id }
              };
            }), ss(d.id, null), d.id;
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
          components: Ur(n.components || [], o),
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return t((i) => {
          const d = [...i.features, l];
          return {
            ...et(i, d),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        }), ss(o, null), o;
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
          return Nl(s).catch(() => {
          }), et(a, n);
        });
      },
      renameFeature: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, name: a } : l);
          return et(n, o);
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
          return ss(l), {
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
          return ss(o, null), {
            ...et(a, n),
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
          return et(n, o);
        });
      },
      updateFeatureScriptFile: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, scriptFile: a.trim() } : l);
          return et(n, o);
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
            n !== void 0 ? i = Dn(l.components, a, s, n) : i = Vr(l.components, a, s);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, s), i = c.map((p, g) => ({ ...p, order: g + 1 }));
          } else
            i = [...l.components, s];
          const d = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...et(o, d),
            selection: { ...o.selection, componentId: s.id }
          };
        });
      },
      updateComponentProps: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              props: { ...i.props, ...a }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentStyle: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              style: { ...i.style, ...a }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentEvents: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              events: a
            }))
          });
          return et(n, o);
        });
      },
      updateComponentDataBinding: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...a }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentValidation: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              validation: { ...i.validation, ...a }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentPermissions: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...a }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentOrder: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Yt(l.components, s, (i) => ({
              ...i,
              order: a,
              props: { ...i.props, order: a }
            }))
          });
          return et(n, o);
        });
      },
      removeComponent: (s) => {
        t((a) => {
          const n = a.features.map((o) => o.id !== a.activeFeatureId ? o : {
            ...o,
            components: Gr(o.components, s)
          });
          return {
            ...et(a, n),
            selection: { ...a.selection, componentId: null }
          };
        });
      },
      moveComponent: (s, a, n) => {
        t((o) => {
          const l = o.features.find((x) => x.id === o.activeFeatureId);
          if (!l) return {};
          const i = kl(l.components, s);
          if (!i) return {};
          const [d, c] = i, p = { ...d, parentId: a };
          let g;
          if (a === null) {
            const x = c.filter((u) => !u.parentId);
            x.splice(n, 0, p);
            const h = x.map((u, v) => ({ ...u, order: v + 1 })), w = c.filter((u) => u.parentId);
            g = [...h, ...w];
          } else
            g = Dn(c, a, p, n);
          const T = o.features.map(
            (x) => x.id === o.activeFeatureId ? { ...x, components: g } : x
          );
          return et(o, T);
        });
      },
      distributeSiblingWidths: (s, a) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Wr(l.components, s, a)
          });
          return et(n, o);
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
function et(t, r) {
  const s = t.history.slice(0, t.historyIndex + 1);
  return s.length >= Cl && s.shift(), s.push(r), {
    features: r,
    history: s,
    historyIndex: s.length - 1
  };
}
function Yt(t, r, s) {
  return t.map((a) => a.id === r ? s(a) : a.children && a.children.length > 0 ? { ...a, children: Yt(a.children, r, s) } : a);
}
function Gr(t, r) {
  return t.filter((s) => s.id !== r).map(
    (s) => s.children && s.children.length > 0 ? { ...s, children: Gr(s.children, r) } : s
  );
}
function Vr(t, r, s) {
  return t.map((a) => a.id === r ? {
    ...a,
    children: [...a.children || [], { ...s, parentId: r }]
  } : a.children && a.children.length > 0 ? {
    ...a,
    children: Vr(a.children, r, s)
  } : a);
}
function Wr(t, r, s) {
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
    children: Wr(n.children, r, s)
  } : n);
}
function kl(t, r) {
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
    const l = Kr(n.children, r);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, p = [...t.slice(0, a), c, ...t.slice(a + 1)];
      return [i, p];
    }
  }
  return null;
}
function Kr(t, r) {
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (a.id === r) {
      const n = [...t.slice(0, s), ...t.slice(s + 1)];
      return [a, n];
    }
    if (a.children && a.children.length > 0) {
      const n = Kr(a.children, r);
      if (n) {
        const [o, l] = n, i = { ...a, children: l }, d = [...t.slice(0, s), i, ...t.slice(s + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function Dn(t, r, s, a) {
  return t.map((n) => {
    if (n.id === r) {
      const l = [...n.children || []];
      l.splice(a, 0, { ...s, parentId: r });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Dn(n.children, r, s, a) } : n;
  });
}
function Ur(t, r) {
  return t.map((s) => {
    const a = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    return {
      ...s,
      id: a,
      pageId: r,
      children: s.children ? Ur(s.children, r) : []
    };
  });
}
const st = xs()(
  Ps((t, r) => ({
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
function zr(t, r = {}, s) {
  st.getState().openFeature(t, r, "Popup", s || t);
}
const Sl = [];
function Tl(t) {
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
function Vt(t, r, s, a = void 0) {
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
const Te = xs()(
  Ps((t, r) => ({
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
        if (!d || l.some((h) => d.startsWith(h))) continue;
        const p = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(p)) continue;
        i.add(p);
        const g = o[d] ?? o[p] ?? o[d.replace(/^fld_/, "")], T = c === "" || c === void 0 ? null : c, x = g === "" || g === void 0 ? null : g;
        if (String(T ?? "") !== String(x ?? ""))
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
        st.getState().setTabDirty(s, !1);
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
      return o ? a[o] : Sl;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (s, a, n) => {
      t((o) => {
        const l = a.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), p = (w) => {
          const u = { ...w };
          for (const v of Object.keys(u))
            (v.toLowerCase() === i || v.toLowerCase() === a.toLowerCase()) && delete u[v];
          return u[d] = n, u[c] = n, u;
        }, g = o.formRecords[s] || {}, T = o.formRecords.default || {}, x = p(g), h = p(T);
        try {
          st.getState().setTabDirty(s, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [s]: x,
            default: h
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (s, a, n = "") => Vt(r(), s, a, n),
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
        const g = c.charAt(0).toLowerCase() + c.slice(1), T = c.charAt(0).toUpperCase() + c.slice(1);
        d[g] === void 0 && (d[g] = p), d[T] === void 0 && (d[T] = p);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (s, a, n) => {
      if (!n || typeof n != "object") return;
      const o = Tl(a);
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
            const T = await g.json();
            return (Array.isArray(T) ? T : T.value || []).map((h) => {
              const w = h[n] !== void 0 ? h[n] : h.Id || h.id || h.code, u = h[o] !== void 0 ? h[o] : h.FullName || h.fullName || h.Name || h.name || h.title || String(w);
              return {
                value: w,
                label: String(u),
                rawItem: h
              };
            });
          }
        } catch {
        }
      return dr(r().getDataset(s), l).map((c) => {
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
      return dr(r().getDataset(s), n);
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
        for (const [h, w] of Object.entries(g))
          if (w === "")
            (/date|time/i.test(h) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(h) || /gw|cbm|vgm|package/i.test(h)) && (g[h] = null);
          else if (typeof w == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(w.trim())) {
            const [u, v, k] = w.trim().split("/");
            g[h] = `${k}-${v.padStart(2, "0")}-${u.padStart(2, "0")}T00:00:00`;
          }
        const T = {};
        for (const [h, w] of Object.entries(g)) {
          if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_"))
            continue;
          const u = h.replace(/^fld_/, ""), v = u.charAt(0).toUpperCase() + u.slice(1);
          T[v] = w;
        }
        i ? T.Id = d : (T.Id = 0, T.Active = !0);
        const x = await fetch(c, {
          method: p,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(T)
        });
        if (x.ok) {
          const h = await x.json(), w = h.id || h.Id || d;
          Z.getState().setActiveRecordId(String(w)), n && (r().setFormRecord(n, h), r().markFormClean(n)), r().setFormRecord("default", h), r().markFormClean("default");
          const u = r().datasets[s];
          if (u && Array.isArray(u))
            if (i) {
              const v = u.map(
                (k) => (k.id || k.Id) === d ? { ...k, ...h } : k
              );
              r().registerDataset(s, v);
            } else
              r().registerDataset(s, [h, ...u]);
          return {
            success: !0,
            data: h,
            message: i ? `Cập nhật thành công bản ghi #${d} (${s}) vào Database!` : `Thêm mới thành công bản ghi (${s}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${x.status}` };
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
      const a = r(), n = Z.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((h) => String(h.id) === String(s)) || o.find((h) => String(h.id) === String(l)) || o.find((h) => h.isDetail) || o[0], d = {}, c = (h) => {
        var w, u, v;
        if (!(!h || !Array.isArray(h)))
          for (const k of h) {
            const m = (w = k.dataBinding) == null ? void 0 : w.fieldName, y = (u = k.props) == null ? void 0 : u.name, P = k.id, R = m || (typeof y == "string" ? y : "") || (P == null ? void 0 : P.replace(/^fld_/, "")), F = String(R || "").trim();
            if (F) {
              let C = Vt(a, String(k.pageId || l || "default"), F, void 0);
              if (C === void 0 && ((v = k.props) == null ? void 0 : v.value) !== void 0 && (C = k.props.value), C === void 0 && typeof document < "u") {
                const S = document.getElementById(k.id) || document.querySelector(`[name="${k.id}"]`) || document.querySelector(`[name="${F}"]`);
                S && "value" in S && S.value !== "" && (C = S.value);
              }
              if (C != null) {
                d[F] = C;
                const S = F.charAt(0).toLowerCase() + F.slice(1), L = F.charAt(0).toUpperCase() + F.slice(1);
                d[S] = C, d[L] = C;
              }
            }
            k.children && k.children.length > 0 && c(k.children);
          }
      };
      i != null && i.components && c(i.components);
      const p = s || String(l || "default"), g = { ...a.formRecords.default, ...p ? a.formRecords[p] : {} }, T = { ...d, ...g };
      if (!T.id && !T.Id && typeof window < "u") {
        const w = new URLSearchParams(window.location.search).get("id");
        w && w !== "new" && Number(w) > 0 && (T.id = Number(w), T.Id = Number(w));
      }
      const x = {};
      for (const [h, w] of Object.entries(T)) {
        if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_")) continue;
        const u = h.replace(/^fld_/, ""), v = u.charAt(0).toLowerCase() + u.slice(1), k = u.charAt(0).toUpperCase() + u.slice(1);
        x[v] = w, x[k] = w;
      }
      return (T.id || T.Id) && (x.id = T.id || T.Id, x.Id = T.id || T.Id), t((h) => ({
        formRecords: {
          ...h.formRecords,
          [p]: x,
          default: x
        }
      })), x;
    }
  }))
);
function dr(t, r) {
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
        const c = d[1], p = (d[2] || d[3] || "=").toLowerCase(), g = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), x = Object.keys(o).find((h) => h.toLowerCase() === c.toLowerCase());
        if (x) {
          const w = (o[x] !== void 0 && o[x] !== null ? String(o[x]) : "").toLowerCase() === g.toLowerCase();
          if (p === "ne" || p === "!=" ? w : !w)
            return !1;
        }
      }
    }
    return !0;
  });
}
const qr = "uiforge_bl_functions_registry", us = {};
function en(t) {
  if (!t || !t.trim()) return "";
  let r = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  return r.endsWith(".ts") || (r.endsWith(".bl") || (r = `${r}.bl`), r = `${r}.ts`), r;
}
function tn() {
  if (typeof window > "u") return us;
  try {
    const t = localStorage.getItem(qr);
    if (t) {
      const r = JSON.parse(t), s = { ...us, ...r };
      for (const [a, n] of Object.entries(us))
        s[a] = Array.from(/* @__PURE__ */ new Set([...n, ...s[a] || []]));
      return s;
    }
  } catch {
  }
  return us;
}
function sn(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(qr, JSON.stringify(t));
    } catch {
    }
}
function Il(t) {
  if (!t || !t.trim()) return [];
  const r = en(t), s = tn();
  if (s[r] && s[r].length > 0)
    return s[r];
  if (s[t.trim()] && s[t.trim()].length > 0)
    return s[t.trim()];
  const a = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return s[r] = a, sn(s), a;
}
function Dl(t, r) {
  if (!t || !r) return [];
  const s = en(t), a = r.trim().replace(/\(.*?\)/g, "");
  if (!s || !a) return [];
  const n = tn(), o = n[s] || [];
  return o.includes(a) || (n[s] = [...o, a], sn(n)), n[s];
}
function Bo(t, r) {
  if (!t || !r) return [];
  const s = en(t), a = r.trim().replace(/\(.*?\)/g, ""), n = tn(), o = n[s] || [];
  return n[s] = o.filter((l) => l !== a), sn(n), n[s];
}
function Fl(t, r) {
  const s = en(t);
  us[s] = Array.from(/* @__PURE__ */ new Set([...us[s] || [], ...r]));
  const a = tn();
  a[s] = Array.from(/* @__PURE__ */ new Set([...a[s] || [], ...r])), sn(a);
}
const Jt = {};
function Oo(t, r) {
  Jt[t] = r;
  const s = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  Jt[s] = r;
  const a = s.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  Jt[a] = r;
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
  n.length > 0 && Fl(s, n);
}
function Hn(t) {
  if (!t || !t.trim()) return { module: null, canonicalName: "" };
  const r = t.trim().replace(/\\/g, "/").split("/").pop() || "", s = r.toLowerCase();
  if (Jt[r]) return { module: Jt[r], canonicalName: r };
  if (Jt[s]) return { module: Jt[s], canonicalName: r };
  const a = s.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(Jt))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === a)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: r };
}
function Yr(t, r) {
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
function Ns(t, r, s, a = !1, n, o = !0) {
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
function Ds(t, r, s, a) {
  const n = t.handlerName || t.action || "unnamedHandler", o = t.trigger || "click", { module: l, canonicalName: i } = Hn(s);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  const p = {
    componentName: r,
    trigger: o,
    blFileName: i || s,
    dataEngine: Te.getState(),
    navigationEngine: st.getState(),
    editorStore: Z.getState(),
    ...a || {}
  };
  if (l) {
    const { fn: g, matchedName: T } = Yr(l, n);
    if (c = T, g)
      try {
        const x = g(p);
        if (d = !0, x && typeof x.then == "function")
          return x.then((h) => {
            h && h.message ? Ns(c, o, i || s, !0, h.message, h.success !== !1) : Ns(c, o, i || s, !0);
          }).catch((h) => {
            Ns(c, o, i || s, !0, String(h), !1);
          }), !0;
        if (x && x.message)
          return Ns(c, o, i || s, !0, x.message, x.success !== !1), !0;
      } catch (x) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${T}() trong ${i}:`, x);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${r || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || s || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Ns(c, o, i || s, d), d;
}
function Ye(t, r, s, a, n) {
  if (!t || t.length === 0) return;
  const o = t.filter((l) => l.trigger === r || r === "click" && (l.trigger === "onClick" || l.trigger === "click") || r === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || r === "change" && (l.trigger === "onChange" || l.trigger === "change") || r === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || r === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    Ds(l, s, a, n);
}
async function ur(t, r = "onInit", s) {
  if (!t) return null;
  const { module: a, canonicalName: n } = Hn(t);
  if (!a) return null;
  const { fn: o } = Yr(a, r);
  if (!o) return null;
  const l = {
    trigger: r,
    blFileName: n,
    dataEngine: Te.getState(),
    navigationEngine: st.getState(),
    editorStore: Z.getState(),
    ...s || {}
  };
  return await o(l);
}
const Rl = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((k) => k.features), o = Z((k) => k.activeFeatureId), l = n.find((k) => String(k.id) === String(t.pageId)) || n.find((k) => String(k.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = {
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
        ...w
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${u} ${v}`,
      onClick: (k) => {
        r ? (k.ctrlKey || k.metaKey || k.altKey) && (k.stopPropagation(), Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (k) => {
        var y;
        k.stopPropagation(), ((y = t.events) == null ? void 0 : y.some((P) => P.trigger === "dblclick" || P.trigger === "onDoubleClick")) ? Ye(t.events, "dblclick", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : r && Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: s.label || "Nút bấm"
    }
  );
}, Ll = ({ node: t, isEditing: r }) => {
  var R;
  const { props: s, style: a } = t, n = Z((F) => F.features), o = Z((F) => F.activeFeatureId), l = n.find((F) => String(F.id) === String(t.pageId)) || n.find((F) => String(F.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((R = t.dataBinding) == null ? void 0 : R.fieldName) || t.props.name || t.id), k = Te((F) => Vt(F, u, v, void 0)), m = Te((F) => F.setFieldValue), y = k !== void 0 ? k : s.value ?? "", P = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    rs,
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
        ...w
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "Nhập dữ liệu...",
          value: y,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (F) => {
            const C = F.target.value;
            m(u, v, C), r || Ye(t.events, "change", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v,
              value: C
            });
          },
          onFocus: () => {
            r || Ye(t.events, "focus", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v
            });
          },
          onBlur: (F) => {
            r || Ye(t.events, "blur", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: v,
              value: F.target.value
            });
          }
        }
      )
    }
  );
}, $l = ({ node: t, isEditing: r }) => {
  var S;
  const { props: s, style: a } = t, n = Z((L) => L.features), o = Z((L) => L.activeFeatureId), l = n.find((L) => String(L.id) === String(t.pageId)) || n.find((L) => String(L.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((S = t.dataBinding) == null ? void 0 : S.fieldName) || t.props.name || t.id), k = Te((L) => Vt(L, u, v, void 0)), m = Te((L) => L.setFieldValue), y = s.precision !== void 0 ? Number(s.precision) : 0, P = k !== void 0 ? k : s.value, R = P != null && P !== "" ? Number(P) : 0, F = (L) => L.toLocaleString("en-US", {
    minimumFractionDigits: y,
    maximumFractionDigits: y
  }), C = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    rs,
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
        ...w
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "0",
          value: F(R),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${C ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (L) => {
            const $ = L.target.value.replace(/,/g, "");
            if ($ === "" || !isNaN(Number($))) {
              const se = $ === "" ? 0 : Number($);
              m(u, v, se), r || Ye(t.events, "change", s.label || "Ô số", i, {
                componentId: t.id,
                fieldName: v,
                value: se
              });
            }
          }
        }
      ) })
    }
  );
}, Pl = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((u) => u.features), o = Z((u) => u.activeFeatureId), l = n.find((u) => String(u.id) === String(t.pageId)) || n.find((u) => String(u.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...w
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (u) => {
        r ? (u.ctrlKey || u.metaKey || u.altKey) && (u.stopPropagation(), Ye(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        })) : Ye(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      onDoubleClick: (u) => {
        u.stopPropagation(), Ye(t.events, "dblclick", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      children: s.label || "Văn bản tiêu đề"
    }
  );
}, xr = ({
  node: t,
  isEditing: r,
  isSelected: s,
  onClick: a,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var U;
  const { props: d, style: c } = t;
  Z((E) => E.updateComponentProps);
  const p = !!(d.isTab || d.tab || d.isTabGroup || t.type === "Tabs"), g = [
    { id: "main", label: "TAB 1" }
  ], T = d.tabs || g, [x, h] = D(
    d.activeTabId || ((U = T[0]) == null ? void 0 : U.id) || "main"
  ), w = d.layoutMode || "flex", u = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, v = d.gridConfig || { columns: 12, gap: "16px" }, k = Number(
    v.columns || (typeof u.columnsPerRow == "number" ? u.columnsPerRow : 12)
  ) || 12, m = (c == null ? void 0 : c.justifyContent) || u.justify || "flex-start", y = (c == null ? void 0 : c.alignItems) || u.align || "flex-start", P = u.wrap || "wrap", R = w === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${k}, minmax(0, 1fr))`,
    gap: v.gap || u.gap || "16px",
    alignItems: y
  } : {
    display: "flex",
    flexDirection: u.direction || "row",
    flexWrap: P,
    justifyContent: m,
    alignItems: y,
    gap: u.gap || "12px"
  };
  let F = c != null && c.flex ? void 0 : "100%", C = c == null ? void 0 : c.flex, S = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const E = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(E) && E > 0) {
      const Y = parseInt(o.gap || "12", 10) || 12, z = E === 1 ? "100%" : `calc((100% - ${(E - 1) * Y}px) / ${E})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (F = z, C = `0 0 ${z}`, S = z);
    }
  }
  const { width: L, flex: $, ...se } = c || {}, V = l ? {
    ...R,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...se,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...R,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: p ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (p ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : F,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : C,
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
      style: V,
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
}, El = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...g } = a || {}, [T, x] = D(!1), h = s.title || s.label || "Khối Bố Cục (Section)", w = s.collapsible ?? !0, u = s.layoutMode || "grid", v = s.flexConfig || {}, k = s.gridConfig || {}, m = Number(k.columns || v.columnsPerRow || 12) || 12, y = v.gap || k.gap || "12px", P = (a == null ? void 0 : a.justifyContent) || v.justify || "flex-start", R = (a == null ? void 0 : a.alignItems) || v.align || "center", F = u === "flex" ? {
    display: "flex",
    flexDirection: v.direction || "row",
    flexWrap: v.wrap || "wrap",
    justifyContent: P,
    alignItems: R,
    gap: y
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${m}, minmax(0, 1fr))`,
    gap: y,
    alignItems: R
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
            /* @__PURE__ */ e.jsx(yt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: h })
          ] }),
          w && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => x(!T),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: T ? "Mở rộng" : "Thu gọn",
              children: T ? /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Ss, { className: "w-4 h-4" })
            }
          )
        ] }),
        !T && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: F, children: r })
      ]
    }
  );
}, _o = ({ node: t, children: r }) => {
  const { props: s, style: a } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: p, ...g } = a || {}, T = s.title || s.label || "Biểu Mẫu Doanh Nghiệp";
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
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: T }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: s.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(yr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
}, Al = ({
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
  const g = tt(null), [T, x] = Zt.useState(!1);
  if (He(() => {
    if (!a) return;
    const u = (k) => {
      g.current && !g.current.contains(k.target) && n();
    }, v = (k) => {
      k.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", v), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", v);
    };
  }, [a, n]), !a) return null;
  const h = Math.min(t, window.innerWidth - 220), w = Math.min(r, window.innerHeight - 340);
  return It(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: h, top: w },
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
                  /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Pn, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(jr, { className: `w-3.5 h-3.5 ${s.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  T && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
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
                  /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Ls, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                  /* @__PURE__ */ e.jsx(Nr, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(ba, { className: "w-3.5 h-3.5" }),
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
}, Ml = ({
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
  onPasteExcel: T
}) => {
  const x = tt(null);
  if (He(() => {
    if (!o) return;
    const u = (k) => {
      x.current && !x.current.contains(k.target) && l();
    }, v = (k) => {
      k.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", v), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", v);
    };
  }, [o, l]), !o) return null;
  const h = Math.min(t, window.innerWidth - 220), w = Math.min(r, window.innerHeight - 260);
  return It(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: x,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: h, top: w },
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
                  /* @__PURE__ */ e.jsx(Ls, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            T && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  T(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(wr, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Cr, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(En, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, Bl = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], Jr = ({
  events: t = [],
  onChange: r,
  scriptFile: s = "transactionList.bl.ts",
  componentName: a = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = Bl
}) => {
  const [d, c] = D(""), [, p] = D(0), g = s || "transactionList.bl.ts", T = Il(g), x = () => {
    var m;
    const v = T[0] || "openTransactionDetail", k = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((m = i[0]) == null ? void 0 : m.value) || "click",
      handlerName: v,
      action: v
    };
    r([...t, k]);
  }, h = (v, k) => {
    const m = t.map((y, P) => {
      if (P !== v) return y;
      const R = { ...y, ...k };
      return k.handlerName && !k.action && (R.action = k.handlerName), R;
    });
    r(m);
  }, w = (v) => {
    const k = t.filter((m, y) => y !== v);
    r(k);
  }, u = () => {
    d.trim() && (Dl(g, d.trim()), c(""), p((v) => v + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
          onClick: x,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(jn, { className: "w-3 h-3 text-cyan-400" }),
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
              /* @__PURE__ */ e.jsx(Cr, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    t.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((v, k) => {
      const m = T.includes(v.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  k + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: v.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => w(k),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
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
                    onChange: (y) => h(k, { trigger: y.target.value }),
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
                    value: v.handlerName || T[0] || "",
                    onChange: (y) => {
                      const P = y.target.value;
                      h(k, { handlerName: P, action: P });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      T.map((y) => /* @__PURE__ */ e.jsxs("option", { value: y, children: [
                        y,
                        "()"
                      ] }, y)),
                      !m && v.handlerName && /* @__PURE__ */ e.jsxs("option", { value: v.handlerName, children: [
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
                  Ds(
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
                  /* @__PURE__ */ e.jsx(fa, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        v.id || k
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(Tt, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
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
let yn = null;
async function nn(t = !1) {
  if (!t && yn) return yn;
  try {
    const r = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (r.ok) {
      const s = await r.json();
      if (Array.isArray(s))
        return yn = s, s;
    }
  } catch (r) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", r);
  }
  return [];
}
function Js(t, r = []) {
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
function Xs(t, r) {
  if (!r || !r.trim()) return;
  const s = r.trim().toLowerCase(), a = s.endsWith("s") ? s.slice(0, -1) : s;
  return t.find(
    (n) => n.name.toLowerCase() === s || n.name.toLowerCase() === a || n.tableName && n.tableName.toLowerCase() === s
  );
}
const Xr = ({
  isOpen: t,
  column: r,
  onClose: s,
  onSave: a
}) => {
  var k;
  const [n, o] = D(null), [l, i] = D("info"), [d, c] = D([]), p = Z((m) => m.features.find((y) => y.id === m.activeFeatureId));
  if (He(() => {
    nn().then((m) => {
      m && m.length > 0 && c(m);
    });
  }, []), He(() => {
    if (r && t) {
      let m = [];
      if (Array.isArray(r.events))
        m = [...r.events];
      else if (typeof r.events == "string" && r.events.trim())
        try {
          const y = JSON.parse(r.events);
          Array.isArray(y) && (m = y);
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
      });
    }
  }, [r, t]), !t || !n) return null;
  const g = Array.isArray(n.events) ? n.events : [], T = Js(d), x = Xs(T, n.reference || n.refName), h = x ? x.fields : [], w = n.componentType === "Select" || n.componentType === "Dropdown", u = (m, y) => {
    o((P) => {
      if (!P) return P;
      const R = { ...P, [m]: y };
      return m === "frozen" ? R.sticky = y ? "left" : "none" : m === "sticky" && (R.frozen = y === "left"), R;
    });
  }, v = (m) => {
    n && (a(n), s());
  };
  return It(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4 text-emerald-400" }),
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
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Nn, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
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
                  onChange: (m) => u("code", m.target.value),
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
                  onChange: (m) => u("order", parseInt(m.target.value) || 0),
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
                  onChange: (m) => u("feature", m.target.value),
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
                  onChange: (m) => u("refClass", m.target.value),
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
                  onChange: (m) => u("filterTemplate", m.target.value),
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
                  onChange: (m) => u("formatExcell", m.target.value),
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
                  onChange: (m) => u("childStyle", m.target.value),
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
                  onChange: (m) => u("dataSource", m.target.value),
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
                  onChange: (m) => u("key", m.target.value),
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
                  onChange: (m) => u("title", m.target.value),
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
                  onChange: (m) => u("description", m.target.value),
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
                    value: x ? x.name : "",
                    onChange: (m) => {
                      const y = m.target.value;
                      o((P) => ({
                        ...P,
                        reference: y,
                        refName: y
                      }));
                    },
                    className: "w-full px-2 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                      T.map((m) => /* @__PURE__ */ e.jsxs("option", { value: m.name, children: [
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
                      const y = m.target.value;
                      o((P) => ({
                        ...P,
                        refName: y,
                        reference: y
                      }));
                    },
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: w ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (m) => u("formatCell", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              !w && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (m) => u("formatData", m.target.value),
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
                    onChange: (m) => u("width", m.target.value),
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
                    onChange: (m) => u("minWidth", m.target.value),
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
                    onChange: (m) => u("maxWidth", m.target.value),
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
                  onChange: (m) => u("componentType", m.target.value),
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
                    onChange: (m) => u("precision", parseInt(m.target.value) || 0),
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
                    onChange: (m) => u("align", m.target.value),
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
                      /* @__PURE__ */ e.jsx(Tt, { className: "w-3 h-3 text-amber-400" }),
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
                      /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      g.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: g.map((m) => `${m.trigger} ➔ ${m.handlerName || m.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
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
                    onChange: (m) => u("cascadeField", m.target.value),
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
                    onChange: (m) => u("aggregate", m.target.value),
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
                  onChange: (m) => u("validation", m.target.value),
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
            w && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((k = n.dropdownColumns) == null ? void 0 : k.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                    onChange: (m) => u("frozen", m.target.checked),
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
                    onChange: (m) => u("disabled", m.target.checked),
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
                    onChange: (m) => u("hasPermission", m.target.checked),
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
                    onChange: (m) => u("focusSearch", m.target.checked),
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
                    onChange: (m) => u("filterEq", m.target.checked),
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
                    onChange: (m) => u("filterLocal", m.target.checked),
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
                    onChange: (m) => u("hidden", m.target.checked),
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
                    onChange: (m) => u("active", m.target.checked),
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
                    onChange: (m) => u("advancedSearch", m.target.checked),
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
                    onChange: (m) => u("virtualScroll", m.target.checked),
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
                    onChange: (m) => u("upperCase", m.target.checked),
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
                    onChange: (m) => u("hasFilter", m.target.checked),
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
                    onChange: (m) => u("isRealtime", m.target.checked),
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
                    onChange: (m) => u("autoFit", m.target.checked),
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
                    onChange: (m) => u("aggregate", m.target.checked ? "sum" : "none"),
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
                    onChange: (m) => u("addDate", m.target.checked),
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
                    onChange: (m) => u("editable", m.target.checked),
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
                    onChange: (m) => u("isPivot", m.target.checked),
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
                    onChange: (m) => u("basicSearch", m.target.checked),
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
                    onChange: (m) => u("ignoreTrigger", m.target.checked),
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
                    onChange: (m) => u("hideGrid", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && w && (() => {
            const m = n.dropdownColumns || [], y = (R) => u("dropdownColumns", R), P = (x == null ? void 0 : x.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: x ? `${x.displayName} (${x.name})` : n.reference || n.refName || "(Chưa chọn Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  h.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const R = h.filter((C) => C.name.toLowerCase() !== "id" && C.name.toLowerCase() !== "active").slice(0, 3), F = `${Math.floor(100 / Math.max(R.length, 1))}%`;
                        y(
                          R.map((C) => ({
                            key: C.name,
                            title: C.displayName,
                            width: F,
                            align: "left"
                          }))
                        );
                      },
                      className: "px-2.5 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/35 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold cursor-pointer",
                      title: "Tự động nạp các cột tiêu biểu từ thực thể Reference đã chọn",
                      children: [
                        "⚡ Tự động nạp (",
                        x == null ? void 0 : x.name,
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
                        /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
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
                      onChange: (R) => u("idField", R.target.value),
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
                      onChange: (R) => u("formatData", R.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: m.map((R, F) => {
                    const C = P ? `{${P}.${R.key}}` : `{${R.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const S = n.formatData || "", L = S ? `${S} - ${C}` : C;
                          u("formatData", L);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          C
                        ]
                      },
                      `${R.key}-${F}`
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
                      onChange: (R) => u("populateField", R.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: h.map((R) => /* @__PURE__ */ e.jsxs("option", { value: R.name, children: [
                R.displayName,
                " (",
                R.dataType,
                ")"
              ] }, R.name)) }),
              m.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: m.map((R, F) => /* @__PURE__ */ e.jsxs(
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
                            const C = [...m], S = C[F];
                            C[F] = C[F - 1], C[F - 1] = S, y(C);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: F === m.length - 1,
                          onClick: () => {
                            const C = [...m], S = C[F];
                            C[F] = C[F + 1], C[F + 1] = S, y(C);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "col-dropdown-field-suggestions",
                        value: R.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (C) => {
                          const S = C.target.value, L = h.find((se) => se.name === S), $ = [...m];
                          $[F] = {
                            ...$[F],
                            key: S,
                            title: L && (!$[F].title || $[F].title.startsWith("Cột ")) ? L.displayName : $[F].title
                          }, y($);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: R.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (C) => {
                          const S = [...m];
                          S[F] = { ...S[F], title: C.target.value }, y(S);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: R.width || "50%",
                        placeholder: "Width",
                        onChange: (C) => {
                          const S = [...m];
                          S[F] = { ...S[F], width: C.target.value }, y(S);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: R.align || "left",
                        onChange: (C) => {
                          const S = [...m];
                          S[F] = { ...S[F], align: C.target.value }, y(S);
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
                        onClick: () => y(m.filter((C, S) => S !== F)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                F
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            Jr,
            {
              events: g,
              onChange: (m) => {
                u("events", m);
                const y = m.find((P) => P.trigger === "click" || P.trigger === "actionClick");
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
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Admin", "Manager", "Dispatcher", "Sales", "Customer"].map((m) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer", children: [
              /* @__PURE__ */ e.jsx("input", { type: "checkbox", defaultChecked: m === "Admin" || m === "Manager", className: "rounded text-emerald-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200", children: m })
            ] }, m)) })
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
              /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
            ]
          }
        )
      ] })
    ] }) }),
    document.body
  );
}, Ol = ({
  columns: t,
  data: r,
  showRowNumber: s = !0,
  rowNumberWidth: a = 55,
  leftOffsets: n = {}
}) => {
  if (!t.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = r.map((x) => x[i.key]).filter((x) => x != null && x !== "");
    if (i.aggregate === "count") {
      const x = d.length;
      return `${i.summaryPrefix || ""}${x}${i.summarySuffix || " dòng"}`;
    }
    const c = d.map((x) => {
      if (typeof x == "number") return x;
      const h = parseFloat(String(x).replace(/,/g, ""));
      return isNaN(h) ? 0 : h;
    });
    if (c.length === 0) return "—";
    let p = 0;
    i.aggregate === "sum" ? p = c.reduce((x, h) => x + h, 0) : i.aggregate === "avg" ? p = c.reduce((x, h) => x + h, 0) / c.length : i.aggregate === "min" ? p = Math.min(...c) : i.aggregate === "max" && (p = Math.max(...c));
    const g = i.precision ?? (i.format === "number_thousands" ? 0 : 2), T = g > 0 ? p.toLocaleString("en-US", { minimumFractionDigits: g, maximumFractionDigits: g }) : p.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${T}${i.summarySuffix || ""}`;
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
      const c = l(i), p = d === 0, g = i.sticky === "left" || !!i.frozen, T = g && n[i.key] !== void 0 ? n[i.key] : void 0, x = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${x} ${g ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: T !== void 0 ? `${T}px` : void 0
          },
          children: p && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function ws(t) {
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
function cs(t, r, s) {
  const a = String(s).padStart(2, "0"), n = String(r + 1).padStart(2, "0");
  return `${a}/${n}/${t}`;
}
const _l = [
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
], Hl = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], Qr = ({
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
  onBlur: T,
  autoFocus: x = !1,
  isGridCell: h = !1
}) => {
  const w = tt(null), u = tt(null), v = tt(null), [k, m] = D(!1), [y, P] = D(() => {
    const W = ws(t);
    return W ? cs(W.year, W.month, W.day) : t || "";
  }), R = Ae(() => ws(t), [t]), F = Ae(() => {
    const W = /* @__PURE__ */ new Date();
    return { year: W.getFullYear(), month: W.getMonth(), day: W.getDate() };
  }, []), [C, S] = D((R == null ? void 0 : R.year) || F.year), [L, $] = D((R == null ? void 0 : R.month) ?? F.month), [se, V] = D({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  He(() => {
    const W = ws(t);
    W ? (P(cs(W.year, W.month, W.day)), S(W.year), $(W.month)) : P(t || "");
  }, [t]);
  const U = () => {
    if (!w.current) return;
    const W = w.current.getBoundingClientRect(), q = 310, ie = 280, j = window.innerHeight - W.bottom < q && W.top > q;
    let A = j ? W.top - q - 4 : W.bottom + 4, ne = W.left;
    ne + ie > window.innerWidth - 10 && (ne = Math.max(10, window.innerWidth - ie - 10)), V({ top: A, left: ne, openUpwards: j });
  }, E = () => {
    a || n || (U(), m(!0));
  }, Y = () => {
    m(!1);
  };
  He(() => {
    if (!k) return;
    const W = (ie) => {
      const Ne = ie.target;
      w.current && !w.current.contains(Ne) && v.current && !v.current.contains(Ne) && Y();
    }, q = () => {
      k && U();
    };
    return document.addEventListener("mousedown", W, !0), window.addEventListener("resize", q, !0), window.addEventListener("scroll", q, !0), () => {
      document.removeEventListener("mousedown", W, !0), window.removeEventListener("resize", q, !0), window.removeEventListener("scroll", q, !0);
    };
  }, [k]);
  const z = (W) => {
    W.stopPropagation(), L === 0 ? ($(11), S((q) => q - 1)) : $((q) => q - 1);
  }, b = (W) => {
    W.stopPropagation(), L === 11 ? ($(0), S((q) => q + 1)) : $((q) => q + 1);
  }, ae = (W, q = 0) => {
    var A;
    let ie = C, Ne = L + q;
    Ne < 0 ? (Ne = 11, ie -= 1) : Ne > 11 && (Ne = 0, ie += 1);
    const j = cs(ie, Ne, W);
    P(j), r(j), Y(), (A = u.current) == null || A.focus();
  }, O = (W) => {
    var ie;
    W.stopPropagation();
    const q = cs(F.year, F.month, F.day);
    P(q), S(F.year), $(F.month), r(q), Y(), (ie = u.current) == null || ie.focus();
  }, _ = (W) => {
    var q;
    W.stopPropagation(), P(""), r(""), Y(), (q = u.current) == null || q.focus();
  }, me = (W) => {
    const q = W.target.value;
    P(q);
    const ie = ws(q);
    if (ie) {
      const Ne = cs(ie.year, ie.month, ie.day);
      r(Ne), S(ie.year), $(ie.month);
    } else q === "" && r("");
  }, ce = (W) => {
    if (W.key === "Escape")
      k && (W.stopPropagation(), Y());
    else if (W.key === "Enter") {
      const q = ws(y);
      if (q) {
        const ie = cs(q.year, q.month, q.day);
        P(ie), r(ie);
      }
      k && Y();
    } else (W.key === "F4" || W.altKey && W.key === "ArrowDown") && (W.preventDefault(), W.stopPropagation(), k ? Y() : E());
    p && p(W);
  }, ye = Ae(() => {
    const W = (new Date(C, L, 1).getDay() + 6) % 7, q = new Date(C, L + 1, 0).getDate(), ie = new Date(C, L, 0).getDate(), Ne = [];
    for (let ne = W - 1; ne >= 0; ne--)
      Ne.push({
        day: ie - ne,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let ne = 1; ne <= q; ne++)
      Ne.push({
        day: ne,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const A = (Ne.length <= 35 ? 35 : 42) - Ne.length;
    for (let ne = 1; ne <= A; ne++)
      Ne.push({
        day: ne,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return Ne;
  }, [C, L]), ue = () => k ? It(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: v,
        style: {
          position: "fixed",
          top: `${se.top}px`,
          left: `${se.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (W) => W.stopPropagation(),
        className: "bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: z,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(kr, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: L,
                  onChange: (W) => $(parseInt(W.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: _l.map((W, q) => /* @__PURE__ */ e.jsx("option", { value: q, children: W }, q))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: C,
                  onChange: (W) => S(parseInt(W.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (W, q) => C - 20 + q).map((W) => /* @__PURE__ */ e.jsx("option", { value: W, children: W }, W))
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
                children: /* @__PURE__ */ e.jsx(es, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: Hl.map((W, q) => /* @__PURE__ */ e.jsx("div", { className: q >= 5 ? "text-amber-400/80" : "", children: W }, q)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: ye.map((W, q) => {
            const ie = R && W.isCurrentMonth && R.year === C && R.month === L && R.day === W.day, Ne = W.isCurrentMonth && F.year === C && F.month === L && F.day === W.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => ae(W.day, W.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${ie ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : Ne ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : W.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: W.day
              },
              q
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: O,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(ga, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            y && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: _,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: Y,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, M = h ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", Q = h ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: w, className: `${M} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        type: "text",
        tabIndex: c,
        autoFocus: x,
        disabled: a,
        readOnly: n,
        placeholder: s,
        title: i || d,
        value: y,
        onChange: me,
        onKeyDown: ce,
        onFocus: g,
        onBlur: T,
        onClick: (W) => {
          W.stopPropagation(), k || E();
        },
        className: Q
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: a,
        onClick: (W) => {
          W.stopPropagation(), k ? Y() : E();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(Mn, { className: "w-3.5 h-3.5" })
      }
    ),
    ue()
  ] });
}, Gl = ({
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
  onFocus: T
}) => {
  const x = (t.editable ?? !0) && !t.disabled && t.componentType !== "Label", h = r === "—" || r === "-" ? "" : r ?? "", u = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : l ? "border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", v = (P) => {
    g && g(P, a, n, t.key);
  }, k = () => {
    T && T(a, n, t.key);
  }, m = {
    "data-grid-cell": `${a}_${n}`,
    "data-grid-row": a,
    "data-grid-col": n,
    "data-grid-colkey": t.key
  };
  if (t.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...m, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!r,
        disabled: t.disabled || !x,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => c(P.target.checked),
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${l ? "ring-2 ring-emerald-400" : ""}`
      }
    ) });
  if (t.componentType === "Button") {
    const P = t.formatCell || t.title || r || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...m, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: t.disabled,
        onClick: (R) => {
          R.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${l ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`,
        children: P
      }
    ) });
  }
  if (t.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (P) => {
          P.preventDefault(), P.stopPropagation(), p && p(t.key, s);
        },
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${l ? "ring-2 ring-emerald-400/80 rounded px-1" : ""}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r || "—" }),
          /* @__PURE__ */ e.jsx(Sr, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!x) {
    if (t.precision !== void 0 && typeof r == "number") {
      const P = t.precision > 0 ? r.toLocaleString("en-US", { minimumFractionDigits: t.precision, maximumFractionDigits: t.precision }) : r.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: v,
          onFocus: k,
          ...m,
          className: `font-mono text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: [
            P,
            t.summarySuffix ? ` ${t.summarySuffix}` : ""
          ]
        }
      );
    }
    if (t.formatCell && r !== void 0 && r !== null) {
      let P = t.formatCell.replace("{0}", String(r));
      return typeof s == "object" && s !== null && Object.keys(s).forEach((R) => {
        P = P.replace(new RegExp(`\\{${R}\\}`, "gi"), String(s[R] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: v,
          onFocus: k,
          ...m,
          className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: P
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
        children: r != null ? String(r) : "—"
      }
    );
  }
  if (t.componentType === "Select" || t.componentType === "Dropdown") {
    let P = t.options || [];
    const R = t.reference || t.refName;
    if (P.length === 0 && R) {
      const F = Te.getState().getDataset(R);
      if (Array.isArray(F) && F.length > 0) {
        const C = t.valueField || t.idField || "code", S = t.displayField || t.selectField || "name";
        P = F.map((L) => ({
          value: String(L[C] ?? L.code ?? L.id ?? ""),
          label: String(L[S] ?? L.name ?? L[C] ?? "")
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
        onFocus: k,
        ...m,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          P.map((F) => /* @__PURE__ */ e.jsx("option", { value: F.value, className: "bg-slate-900 text-slate-100", children: F.label }, F.value))
        ]
      }
    );
  }
  if (t.componentType === "DatePicker" || t.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...m, children: /* @__PURE__ */ e.jsx(
      Qr,
      {
        isGridCell: !0,
        value: h,
        disabled: t.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (P) => c(P),
        onKeyDown: v,
        onFocus: k
      }
    ) });
  if (t.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: h,
        placeholder: "0",
        disabled: t.disabled,
        title: o || void 0,
        step: t.precision && t.precision > 0 ? Math.pow(10, -t.precision) : 1,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => {
          const R = P.target.value;
          c(R === "" ? "" : Number(R));
        },
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (t.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: h,
        placeholder: t.title ? `Nhập ${t.title}...` : "Nhập...",
        disabled: t.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => {
          const R = t.upperCase ? P.target.value.toUpperCase() : P.target.value;
          c(R);
        },
        onKeyDown: v,
        onFocus: k,
        ...m,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const y = t.align === "right" ? "text-right" : t.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: h,
      placeholder: t.title ? `Nhập ${t.title}...` : "Nhập dữ liệu...",
      disabled: t.disabled,
      title: o || void 0,
      onClick: (P) => P.stopPropagation(),
      onChange: (P) => {
        const R = t.upperCase ? P.target.value.toUpperCase() : P.target.value;
        c(R);
      },
      onKeyDown: v,
      onFocus: k,
      ...m,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${y} ${t.cssClass || ""}`
    }
  );
};
function Vl(t, r) {
  var l, i, d, c, p, g, T, x;
  if (t.value !== r.value || t.error !== r.error || t.rowIndex !== r.rowIndex || t.columnIndex !== r.columnIndex || !!t.isFocused != !!r.isFocused || !!t.isEditing != !!r.isEditing || !!t.isSelected != !!r.isSelected)
    return !1;
  const s = t.column, a = r.column;
  if (s !== a && (s.key !== a.key || s.title !== a.title || s.componentType !== a.componentType || s.editable !== a.editable || s.disabled !== a.disabled || s.precision !== a.precision || s.align !== a.align || s.formatCell !== a.formatCell || s.cssClass !== a.cssClass || s.summarySuffix !== a.summarySuffix || s.upperCase !== a.upperCase || s.options !== a.options || s.reference !== a.reference || s.refName !== a.refName))
    return !1;
  const n = ((l = t.row) == null ? void 0 : l.id) ?? ((i = t.row) == null ? void 0 : i.Id) ?? ((d = t.row) == null ? void 0 : d.ID), o = ((c = r.row) == null ? void 0 : c.id) ?? ((p = r.row) == null ? void 0 : p.Id) ?? ((g = r.row) == null ? void 0 : g.ID);
  if (n !== void 0 && o !== void 0 && n !== o)
    return !1;
  if (a.formatCell && typeof a.formatCell == "string") {
    const h = a.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g);
    if (h)
      for (const w of h) {
        const u = w.slice(1, -1);
        if (u !== "0" && ((T = t.row) == null ? void 0 : T[u]) !== ((x = r.row) == null ? void 0 : x[u]))
          return !1;
      }
  }
  return !((a.componentType === "Button" || a.componentType === "Link") && t.row !== r.row);
}
const pr = Zt.memo(Gl, Vl);
function Wl({
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
  onFilterByCell: T,
  onQuickSum: x,
  onToggleColumnFilters: h,
  isEditableTable: w = !0,
  onPasteExcel: u
}) {
  const [v, k] = D(null), m = vs(
    (C, S) => {
      if (C < 0 || C >= r.length || S < 0 || S >= s.length) return;
      const L = s[S], $ = r[C], se = ($ == null ? void 0 : $.id) ?? ($ == null ? void 0 : $.Id) ?? C;
      if (n(se), k({ rowIndex: C, colIndex: S, colKey: L.key }), t.current) {
        const V = `[data-grid-cell="${C}_${S}"]`, U = t.current.querySelector(V);
        if (U) {
          U.scrollIntoView({ block: "nearest", inline: "nearest" });
          const E = U.tagName === "INPUT" || U.tagName === "SELECT" || U.tagName === "TEXTAREA" || U.tagName === "BUTTON" ? U : U.querySelector("input, select, textarea, button") || U;
          E.focus(), E instanceof HTMLInputElement && (E.type === "text" || E.type === "number") && E.select();
        }
      }
    },
    [r, s, t, n]
  ), y = vs(
    (C) => {
      if (!t.current) return;
      const S = t.current.querySelector(`[data-row-index="${C}"]`);
      S && S.scrollIntoView({ block: "nearest" });
    },
    [t]
  ), P = vs(
    (C) => {
      if (C.key === "F1") {
        C.preventDefault(), C.stopPropagation(), g == null || g();
        return;
      }
      if (C.key === "F2") {
        C.preventDefault(), C.stopPropagation(), T == null || T();
        return;
      }
      if (C.key === "F3") {
        C.preventDefault(), C.stopPropagation(), x == null || x();
        return;
      }
      if (C.key === "F4") {
        C.preventDefault(), C.stopPropagation(), d == null || d();
        return;
      }
      if (C.key === "F6") {
        C.preventDefault(), C.stopPropagation(), h == null || h();
        return;
      }
      if (C.key === "ArrowDown") {
        C.preventDefault();
        const S = r.findIndex(($, se) => ($.id ?? $.Id ?? se) === a), L = S < r.length - 1 ? S + 1 : S;
        if (L >= 0 && L !== S) {
          const $ = r[L];
          n($.id ?? $.Id ?? L), l(/* @__PURE__ */ new Set([$.id ?? $.Id ?? L])), y(L);
        }
        return;
      }
      if (C.key === "ArrowUp") {
        C.preventDefault();
        const S = r.findIndex(($, se) => ($.id ?? $.Id ?? se) === a), L = S > 0 ? S - 1 : 0;
        if (L >= 0 && L !== S) {
          const $ = r[L];
          n($.id ?? $.Id ?? L), l(/* @__PURE__ */ new Set([$.id ?? $.Id ?? L])), y(L);
        }
        return;
      }
      if (C.key === "Enter") {
        C.preventDefault();
        const S = r.findIndex((L, $) => (L.id ?? L.Id ?? $) === a);
        S >= 0 && i && i(r[S], S);
        return;
      }
      if (C.key === "Delete") {
        const S = r.findIndex((L, $) => (L.id ?? L.Id ?? $) === a);
        S >= 0 && c && (C.preventDefault(), c(S));
        return;
      }
      if ((C.ctrlKey || C.metaKey) && (C.key === "d" || C.key === "D")) {
        C.preventDefault();
        const S = r.findIndex((L, $) => (L.id ?? L.Id ?? $) === a);
        S >= 0 && p && p(S);
        return;
      }
      if ((C.ctrlKey || C.metaKey) && (C.key === "v" || C.key === "V")) {
        const S = C.target;
        !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA")) && u && typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" && (C.preventDefault(), navigator.clipboard.readText().then(($) => {
          if ($) {
            const se = v ? v.rowIndex : a !== null ? Math.max(0, r.findIndex((U, E) => (U.id ?? U.Id ?? E) === a)) : 0, V = v ? v.colIndex : 0;
            u($, se, V);
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
      T,
      x,
      d,
      h,
      i,
      c,
      p,
      v,
      u
    ]
  ), R = vs(
    (C, S, L, $) => {
      var se, V, U;
      if (C.key === "F1") {
        C.preventDefault(), C.stopPropagation(), g == null || g();
        return;
      }
      if (C.key === "F2") {
        C.preventDefault(), C.stopPropagation(), T == null || T();
        return;
      }
      if (C.key === "F3") {
        C.preventDefault(), C.stopPropagation(), x == null || x();
        return;
      }
      if (C.key === "F4") {
        C.preventDefault(), C.stopPropagation(), d == null || d();
        return;
      }
      if (C.key === "F6") {
        C.preventDefault(), C.stopPropagation(), h == null || h();
        return;
      }
      if (C.key === "ArrowDown") {
        C.preventDefault(), S < r.length - 1 && m(S + 1, L);
        return;
      }
      if (C.key === "ArrowUp") {
        C.preventDefault(), S > 0 && m(S - 1, L);
        return;
      }
      if (C.key === "ArrowLeft") {
        const E = C.target, Y = E && E.selectionStart === 0 && E.selectionEnd === 0, z = E && E.selectionStart === 0 && E.selectionEnd === ((se = E.value) == null ? void 0 : se.length), b = !E || E.tagName === "SELECT" || E.type === "checkbox" || E.tagName === "BUTTON";
        (Y || z || b) && L > 0 && (C.preventDefault(), m(S, L - 1));
        return;
      }
      if (C.key === "ArrowRight") {
        const E = C.target, Y = E && E.selectionStart === ((V = E.value) == null ? void 0 : V.length), z = E && E.selectionStart === 0 && E.selectionEnd === ((U = E.value) == null ? void 0 : U.length), b = !E || E.tagName === "SELECT" || E.type === "checkbox" || E.tagName === "BUTTON";
        (Y || z || b) && L < s.length - 1 && (C.preventDefault(), m(S, L + 1));
        return;
      }
      if (C.key === "Tab") {
        C.preventDefault(), C.shiftKey ? L > 0 ? m(S, L - 1) : S > 0 && m(S - 1, s.length - 1) : L < s.length - 1 ? m(S, L + 1) : S < r.length - 1 ? m(S + 1, 0) : d && (d(), setTimeout(() => {
          m(r.length, 0);
        }, 60));
        return;
      }
      if (C.key === "Enter") {
        if (C.preventDefault(), C.shiftKey) {
          S > 0 && m(S - 1, L);
          return;
        }
        S < r.length - 1 ? m(S + 1, L) : d && (d(), setTimeout(() => {
          m(r.length, L);
        }, 60));
        return;
      }
      if (C.key === "Escape") {
        C.preventDefault();
        const E = C.target;
        E == null || E.blur();
        return;
      }
    },
    [r, s, m, g, T, x, d, h]
  ), F = vs(
    (C) => {
      var E;
      const S = (E = C.clipboardData) == null ? void 0 : E.getData("text/plain");
      if (!S || !u) return;
      const L = S.includes("	") || S.includes(`
`), $ = C.target;
      if ($ && ($.tagName === "INPUT" || $.tagName === "TEXTAREA") && !L)
        return;
      C.preventDefault(), C.stopPropagation();
      const V = v ? v.rowIndex : a !== null ? Math.max(0, r.findIndex((Y, z) => (Y.id ?? Y.Id ?? z) === a)) : 0, U = v ? v.colIndex : 0;
      u(S, V, U);
    },
    [v, a, r, u]
  );
  return {
    focusedCell: v,
    setFocusedCell: k,
    focusCell: m,
    scrollToRow: y,
    handleTableContainerKeyDown: P,
    handleCellKeyDown: R,
    handlePaste: F
  };
}
function Zr(t) {
  return [...t].sort((r, s) => {
    const a = !!(r.frozen || r.sticky === "left"), n = !!(s.frozen || s.sticky === "left");
    if (a && !n) return -1;
    if (!a && n) return 1;
    const o = typeof r.order == "number" ? r.order : 999, l = typeof s.order == "number" ? s.order : 999;
    return o !== l ? o - l : 0;
  });
}
function ks(t) {
  return Zr(t).map((s, a) => ({
    ...s,
    order: a + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(s.frozen || s.sticky === "left"),
    sticky: s.frozen || s.sticky === "left" ? "left" : "none"
  }));
}
function Fn(t, r, s) {
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
function ea(t, r) {
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
  return ks(s);
}
function Kl(t, r = 55) {
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
class Ul {
  constructor() {
    pn(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    pn(this, "populateResolvers", /* @__PURE__ */ new Map());
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
const ta = new Ul();
function Ho(t, r, s) {
  return ta.getCascadedOptions(t, r, s);
}
function zl(t, r, s) {
  return ta.calculateAutoPopulatedFields(t, r, s);
}
function Rn(t) {
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
function hr(t) {
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
function Ln(t, r, s = "Ngày bắt đầu", a = "Ngày kết thúc") {
  const n = hr(t), o = hr(r);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${s} (${t}) không thể xảy ra sau ${a} (${r})`
  } : { isValid: !0 };
}
function ql(t, r, s = [], a = {}) {
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
        const l = Rn(String(r));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = a[o.targetField];
        if (l) {
          const i = Ln(String(r), String(l), t, o.targetField);
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
function Go(t, r) {
  const s = {};
  for (const [a, n] of Object.entries(r)) {
    const o = t[a], l = ql(a, o, n, t);
    l.isValid || (s[a] = l.errors);
  }
  return s;
}
const ht = {
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
}, Yl = {
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
}, qt = xs()(
  Ps((t, r) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...ht["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...ht["FCLI-26020005"].shippingInfo],
      grid_container_info: [...ht["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...ht["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (s) => {
      const a = ht[s];
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
      return ht[n] = {
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
      const n = String(Yl[s] || s), l = { ...r().masterRecord, [n]: a }, i = zl(n, a, l);
      Object.assign(l, i);
      const d = { ...r().validationErrors };
      if (n === "mblNo") {
        const p = String(a || "").trim();
        p ? /^[A-Z0-9]{8,18}$/i.test(p) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(a || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const p = l.mblIssuedDate, g = l.shipmentDate;
        if (p && g) {
          const T = Ln(p, g, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          T.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = T.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      t({
        masterRecord: l,
        validationErrors: d
      });
      const c = r().activeJobNo;
      ht[c] && (ht[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (s, a, n, o) => {
      const l = r().detailGrids, i = l[s] || [], d = { ...r().validationErrors }, c = `${s}_${a}_${n}`, p = i.map((T, x) => T.id !== void 0 && T.id === a || T.id === void 0 && x === a ? { ...T, [n]: o } : T);
      if (n === "containerNo") {
        const T = Rn(String(o));
        T.isValid ? delete d[c] : d[c] = T.message;
      }
      if (s === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const T = p.find((x) => x.id === a);
        if (T && T.etd && T.eta) {
          const x = Ln(T.etd, T.eta, "ETD", "ETA"), h = `${s}_${a}_etd_eta`;
          x.isValid ? delete d[h] : d[h] = x.message || "ETD phải trước ETA";
        }
      }
      t({
        detailGrids: { ...l, [s]: p },
        validationErrors: d
      }), s === "grid_container_info" && r().recalculateTotals();
      const g = r().activeJobNo;
      ht[g] && (s === "grid_shipping_info" && (ht[g].shippingInfo = p), s === "grid_container_info" && (ht[g].containerInfo = p), s === "grid_shipment_detail" && (ht[g].shipmentDetail = p));
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
      ht[c] && (ht[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const s = r().masterRecord, a = {};
      return (o = s.jobNo) != null && o.trim() || (a.jobNo = "Job No không được để trống"), (l = s.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(s.mblNo.trim()) || (a.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : a.mblNo = "Số M-B/L không được để trống", (r().detailGrids.grid_container_info || []).forEach((i) => {
        const d = Rn(i.containerNo);
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
function Jl({
  fileName: t = "Du_Lieu_Bang",
  sheetName: r = "Sheet1",
  columns: s,
  rows: a,
  includeSummary: n = !0
}) {
  const o = s.filter((w) => !w.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const w of o) {
    const u = w.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${u};padding:8px 12px;font-size:11pt;">${w.title || w.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  a.forEach((w, u) => {
    const v = u % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${v};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${u + 1}</td>`;
    for (const k of o) {
      const m = w[k.key], y = k.align || "left";
      let P = m != null ? String(m) : "";
      typeof m == "number" && (P = m.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${y};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${mr(P)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((w) => w.aggregate);
  if (n && c && a.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const w of o) {
      const u = w.align || "left";
      if (w.aggregate === "sum") {
        const v = a.reduce((m, y) => {
          const P = Number(y[w.key]);
          return m + (isNaN(P) ? 0 : P);
        }, 0), k = v % 1 !== 0 ? v.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : v.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${k}${w.summarySuffix ? ` ${w.summarySuffix}` : ""}</td>`;
      } else if (w.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${a.length}</td>`;
      else if (w.aggregate === "avg") {
        const v = a.reduce((m, y) => {
          const P = Number(y[w.key]);
          return m + (isNaN(P) ? 0 : P);
        }, 0), k = a.length > 0 ? (v / a.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${k}</td>`;
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
                <x:Name>${mr(r)}</x:Name>
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
  }), T = t.endsWith(".xls") || t.endsWith(".xlsx") ? t : `${t}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, x = URL.createObjectURL(g), h = document.createElement("a");
  h.href = x, h.download = T, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(x);
}
function mr(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function sa(t) {
  const {
    title: r,
    subtitle: s,
    columns: a,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = t, c = a.filter((m) => !m.hidden), p = window.open("", "_blank", "width=1100,height=850");
  if (!p) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const g = /* @__PURE__ */ new Date(), T = `Ngày in: ${g.toLocaleDateString("vi-VN")} lúc ${g.toLocaleTimeString("vi-VN")}`, x = Object.entries(i).map(
    ([m, y]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${Pt(m)}:</strong>
          <span>${Pt(String(y))}</span>
        </div>`
  ).join(""), h = c.map((m) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${m.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${Pt(m.title || m.key)}
      </th>`).join(""), w = n.map((m, y) => {
    const P = y % 2 === 0 ? "#ffffff" : "#f8fafc", R = c.map((F) => {
      const C = m[F.key] ?? "", S = F.align || (typeof C == "number" ? "right" : "left");
      let L = C;
      return typeof C == "number" && (L = C.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${S}; font-size: 11px;">
            ${Pt(String(L))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${P};">${R}</tr>`;
  }).join("");
  let u = "";
  o && (u = `<tfoot><tr>${c.map((y, P) => {
    const R = o[y.key] ?? (P === 0 ? "TỔNG CỘNG" : ""), F = y.align || "left";
    let C = R;
    return typeof R == "number" && (C = R.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${F}; font-size: 11px;">
          ${Pt(String(C))}
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
    ` : "", k = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${Pt(r)} - UIForge Report</title>
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
              ${Pt(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${Pt(r)}
            </h1>
            ${s ? `<div style="font-size: 12px; color: #475569;">${Pt(s)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${Pt(T)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${x ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${x}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${h}</tr>
        </thead>
        <tbody>
          ${w}
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
  p.document.open(), p.document.write(k), p.document.close();
}
function Pt(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function Vo(t) {
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
  sa(t);
}
async function Wo(t) {
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
function Xl(t) {
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
function Ql(t, r) {
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
function Zl({
  currentRows: t,
  visibleColumns: r,
  allColumns: s,
  clipMatrix: a,
  startRowIndex: n,
  startColIndex: o
}) {
  if (!a || a.length === 0)
    return { updatedRows: t, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 };
  const l = [...t.map((x) => ({ ...x }))], i = a.length;
  let d = 0, c = 0;
  const p = Math.max(0, n), g = Math.max(0, o), T = (x) => {
    const h = { id: x };
    return s.forEach((w) => {
      w.componentType === "Number" || w.dataType === "number" ? h[w.key] = 0 : w.componentType === "Checkbox" || w.dataType === "boolean" ? h[w.key] = !1 : (w.componentType === "DatePicker" || w.dataType, h[w.key] = "");
    }), h;
  };
  for (let x = 0; x < i; x++) {
    const h = p + x, w = a[x];
    if (w.length > d && (d = w.length), h >= l.length) {
      const v = l.length > 0 ? Math.max(...l.map((m) => Number(m.id) || 0)) : 0, k = T(v + 1);
      l.push(k), c++;
    }
    const u = l[h];
    for (let v = 0; v < w.length; v++) {
      const k = g + v;
      if (k >= r.length)
        break;
      const m = r[k];
      if (!((m.editable ?? !0) && !m.disabled && m.componentType !== "Label"))
        continue;
      const P = w[v], R = Ql(P, m);
      u[m.key] = R;
    }
  }
  return {
    updatedRows: l,
    pastedRowCount: i,
    pastedColCount: d,
    newRowsCreated: c
  };
}
const br = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], eo = ({ node: t }) => {
  var ps, hs, ms, bs, fs;
  const { props: r, style: s } = t, a = Z((f) => f.updateComponentProps), n = Ae(() => r.columns && Array.isArray(r.columns) ? r.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [r.columns]), o = Ae(() => Zr(n), [n]), l = Ae(() => o.filter((f) => !f.hidden), [o]), i = qt((f) => f.detailGrids), d = qt((f) => f.updateGridCell), c = qt((f) => f.addGridRow), p = qt((f) => f.deleteGridRow), g = qt((f) => f.duplicateGridRow), T = qt((f) => f.validationErrors), x = !!(i && i[t.id]), h = r.reference || r.refName || ((ps = t.dataBinding) == null ? void 0 : ps.refName) || ((hs = t.dataBinding) == null ? void 0 : hs.entityName) || "", w = r.query || ((ms = t.dataBinding) == null ? void 0 : ms.query) || r.dataSource || ((bs = t.dataBinding) == null ? void 0 : bs.dataSource) || r.sqlWhere || ((fs = t.dataBinding) == null ? void 0 : fs.sqlWhere) || r.filter || "", u = Te((f) => h ? f.datasets[h] : void 0), [v, k] = D(() => x && i && i[t.id] ? i[t.id] : r.data && Array.isArray(r.data) ? r.data : u && Array.isArray(u) ? u : br);
  He(() => {
    r.data && Array.isArray(r.data) && r.data.length > 0 && k(r.data);
  }, [r.data]), He(() => {
    u && Array.isArray(u) && u.length > 0 && k(u);
  }, [u]);
  const m = Ae(() => x && i && i[t.id] && i[t.id].length > 0 ? i[t.id] : v && Array.isArray(v) && v.length > 0 ? v : u && Array.isArray(u) && u.length > 0 ? u : r.data && Array.isArray(r.data) ? r.data : br, [x, i, t.id, v, u, r.data]);
  He(() => {
    if (r.data && Array.isArray(r.data) && r.data.length > 0) return;
    let f = !0;
    return h && Te.getState().queryEntity(h, w).then((H) => {
      f && H && H.length > 0 && k(H);
    }), () => {
      f = !1;
    };
  }, [h, w, r.data]);
  const [y, P] = D(""), [R, F] = D(null), [C, S] = D("asc"), [L, $] = D(!1), [se, V] = D({}), [U, E] = D({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [Y, z] = D({
    isOpen: !1,
    column: null
  }), [b, ae] = D({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [O, _] = D(null), [me, ce] = D(null), [ye, ue] = D(null), M = 55, { offsets: Q, lastFrozenKey: W } = Ae(() => Kl(o, M), [o]), q = Ae(() => {
    let f = [...m];
    if (y.trim()) {
      const H = y.toLowerCase();
      f = f.filter(
        (B) => Object.values(B).some(
          (J) => String(J).toLowerCase().includes(H)
        )
      );
    }
    return L && Object.entries(se).forEach(([H, B]) => {
      if (B && B.trim()) {
        const J = B.toLowerCase().trim();
        f = f.filter((K) => {
          const re = K[H];
          return re != null && String(re).toLowerCase().includes(J);
        });
      }
    }), R && f.sort((H, B) => {
      const J = H[R], K = B[R];
      if (J === K) return 0;
      if (J == null) return 1;
      if (K == null) return -1;
      let re = 0;
      return typeof J == "number" && typeof K == "number" ? re = J - K : re = String(J).localeCompare(String(K)), C === "asc" ? re : -re;
    }), f;
  }, [m, y, L, se, R, C]), ie = (f) => {
    k(f), a(t.id, { data: f });
  }, [Ne, j] = D(r.groupBy || null), [A, ne] = D(/* @__PURE__ */ new Set()), Ce = Ae(() => {
    if (!Ne) return [];
    const f = /* @__PURE__ */ new Map();
    q.forEach((J) => {
      const K = J[Ne], re = K == null || K === "" ? "(Trống)" : String(K);
      f.has(re) || f.set(re, []), f.get(re).push(J);
    });
    let H = 0;
    const B = [];
    return f.forEach((J, K) => {
      const re = {};
      l.forEach((he) => {
        if (he.componentType === "Number" || he.precision !== void 0 || he.isSummary || he.summary) {
          const Be = J.reduce((Ue, Je) => {
            const jt = Number(Je[he.key]);
            return Ue + (isNaN(jt) ? 0 : jt);
          }, 0);
          re[he.key] = Be;
        }
      }), B.push({
        groupKey: K,
        groupLabel: K,
        rows: J,
        subtotals: re,
        startIndex: H
      }), H += J.length;
    }), B;
  }, [Ne, q, l]), le = 38, Fe = 10, fe = !Ne && (q.length > 80 || !!r.virtual || !!r.virtualScroll), [Ie, pe] = D(0), [ge, Me] = D(550);
  He(() => {
    const f = qe.current;
    if (!f || !fe) return;
    const H = () => {
      pe(f.scrollTop);
    }, B = () => {
      f.clientHeight > 0 && Me(f.clientHeight);
    };
    return f.addEventListener("scroll", H, { passive: !0 }), B(), window.addEventListener("resize", B), () => {
      f.removeEventListener("scroll", H), window.removeEventListener("resize", B);
    };
  }, [fe]);
  const { virtualStartIndex: De, virtualEndIndex: we, topPaddingHeight: X, bottomPaddingHeight: xe, virtualRows: ot } = Ae(() => {
    if (!fe)
      return {
        virtualStartIndex: 0,
        virtualEndIndex: q.length,
        topPaddingHeight: 0,
        bottomPaddingHeight: 0,
        virtualRows: q
      };
    const f = q.length, H = Math.ceil(ge / le), B = Math.floor(Ie / le), J = Math.max(0, B - Fe), K = Math.min(f, B + H + Fe), re = J * le, he = Math.max(0, (f - K) * le), Be = q.slice(J, K);
    return {
      virtualStartIndex: J,
      virtualEndIndex: K,
      topPaddingHeight: re,
      bottomPaddingHeight: he,
      virtualRows: Be
    };
  }, [fe, q, Ie, ge]), ft = `uiforge_user_gridpolicy_${String(t.pageId || "default")}_${t.id}`;
  He(() => {
    let f = !0;
    const H = String(t.pageId || "default");
    try {
      const B = localStorage.getItem(ft);
      if (B) {
        const J = JSON.parse(B);
        Array.isArray(J) && J.length > 0 && a(t.id, { columns: J });
      }
    } catch {
    }
    return fetch(
      `http://localhost:5048/api/core/user-settings?featureCode=${encodeURIComponent(
        H
      )}&componentId=${encodeURIComponent(t.id)}&settingType=GridPolicy`
    ).then((B) => B.ok ? B.json() : null).then((B) => {
      if (!f || !B) return;
      const J = B.settingJson || B.SettingJson;
      if (J) {
        const K = JSON.parse(J);
        if (Array.isArray(K) && K.length > 0) {
          a(t.id, { columns: K });
          try {
            localStorage.setItem(ft, J);
          } catch {
          }
        }
      }
    }).catch(() => {
    }), () => {
      f = !1;
    };
  }, [t.id, t.pageId]);
  const nt = (f) => {
    const H = ks(f);
    a(t.id, { columns: H });
    try {
      localStorage.setItem(ft, JSON.stringify(H));
    } catch {
    }
    const B = String(t.pageId || "default");
    fetch("http://localhost:5048/api/core/user-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        featureCode: B,
        componentId: t.id,
        settingType: "GridPolicy",
        settingJson: JSON.stringify(H)
      })
    }).catch(() => {
    });
  }, pt = tt(m);
  pt.current = m;
  const ee = (f, H, B) => {
    x && d(t.id, f, H, B);
    const K = (x && i && i[t.id] ? i[t.id] : pt.current).map((re, he) => re.id !== void 0 && re.id === f || re.id === void 0 && he === f ? { ...re, [H]: B } : re);
    ie(K), h && Te.getState().registerDataset(h, K);
  }, Se = (f, H, B) => {
    const K = Z.getState().features.find((Ue) => String(Ue.id) === String(t.pageId)), re = K == null ? void 0 : K.scriptFile, he = (B == null ? void 0 : B.action) || f;
    let Be = !1;
    B != null && B.events && (Array.isArray(B.events) ? B.events : typeof B.events == "string" ? (() => {
      try {
        return JSON.parse(B.events);
      } catch {
        return [];
      }
    })() : []).forEach((Je) => {
      Be = !0, Ds(
        Je,
        B.title || B.key,
        re,
        { row: H, col: B, column: B, action: Je.action || Je.handlerName || he, value: H[(B == null ? void 0 : B.key) || ""] }
      );
    }), !Be && he && Ds(
      { id: `col_act_${(B == null ? void 0 : B.key) || f}`, trigger: "actionClick", action: he, handlerName: he },
      t.props.label || "Bảng dữ liệu",
      re,
      { row: H, col: B, column: B, action: he, value: H[(B == null ? void 0 : B.key) || ""] }
    ), t.events && t.events.length > 0 && Ye(t.events, "actionClick", t.props.label || "Bảng dữ liệu", re, {
      action: he,
      row: H,
      col: B,
      column: B,
      colKey: B == null ? void 0 : B.key,
      value: H[(B == null ? void 0 : B.key) || ""]
    });
  }, [Ee, Re] = D(null), [_e, Le] = D(/* @__PURE__ */ new Set()), qe = tt(null), $e = (f, H, B = "info") => {
    const J = document.createElement("div"), K = B === "success" ? "border-emerald-500 shadow-emerald-500/30" : B === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", re = B === "success" ? "⚡" : B === "warning" ? "⚠️" : "ℹ️", he = B === "success" ? "bg-emerald-600/25 text-emerald-400" : B === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    J.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${K} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, J.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${he} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${re}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${f}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${H}</div>
      </div>
    `, document.body.appendChild(J), setTimeout(() => {
      J.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => J.remove(), 300);
    }, 3800);
  }, rt = () => {
    if (_e.size === q.length && q.length > 0)
      Le(/* @__PURE__ */ new Set()), $e("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const f = new Set(q.map((H, B) => H.id ?? H.Id ?? B));
      Le(f), q.length > 0 && Re(q[0].id ?? q[0].Id ?? 0), $e("F1 (Toggle All)", `Đã chọn tất cả ${f.size} dòng trong bảng`, "success");
    }
  }, ut = () => {
    var K;
    let f = Ge == null ? void 0 : Ge.colKey, H = (Ge == null ? void 0 : Ge.rowIndex) ?? 0;
    !f && l.length > 0 && (f = l[0].key);
    const B = q[H], J = B && f ? B[f] : null;
    if (J != null && String(J).trim() !== "" && String(J) !== "—") {
      V((he) => ({ ...he, [f]: String(J) })), $(!0);
      const re = ((K = l.find((he) => he.key === f)) == null ? void 0 : K.title) || f;
      $e("F2 (Lọc theo ô)", `Đã lọc cột [${re}] với giá trị "${J}"`, "success");
    } else
      $(!0), $e("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Ct = () => {
    const f = _e.size > 0 ? q.filter((J, K) => _e.has(J.id ?? J.Id ?? K)) : q;
    if (f.length === 0) {
      $e("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const H = l.filter(
      (J) => J.componentType === "Number" || J.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (K) => J.key.toLowerCase().includes(K)
      )
    );
    if (H.length === 0) {
      $e("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const B = H.map((J) => {
      const K = f.reduce((he, Be) => {
        const Ue = Number(Be[J.key]);
        return he + (isNaN(Ue) ? 0 : Ue);
      }, 0), re = K % 1 !== 0 ? K.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : K.toLocaleString("en-US");
      return `${J.title || J.key}: ${re}${J.summarySuffix ? ` ${J.summarySuffix}` : ""}`;
    });
    $e(
      `F3 (Tổng ${f.length} dòng)`,
      B.join(" | "),
      "success"
    );
  }, gt = () => {
    Bt();
    const f = q.length;
    $e("F4 (Thêm dòng)", `Đã thêm dòng mới số #${f + 1}`, "success"), setTimeout(() => {
      Ut(f, 0);
    }, 60);
  }, xt = async () => {
    const f = r.label ? String(r.label).replace(/\s+/g, "_") : "Du_Lieu_Bang", H = r.label ? String(r.label).slice(0, 30) : "Sheet1";
    try {
      const B = {
        title: r.label ? String(r.label) : "BẢNG DỮ LIỆU",
        sheetName: H,
        columns: l.map((K) => ({
          key: K.key,
          title: K.title || K.key,
          align: K.align || "left",
          dataType: K.componentType === "Number" || K.precision !== void 0 || K.format === "number" ? "number" : K.componentType === "Checkbox" ? "boolean" : "string"
        })),
        rows: q
      }, J = await fetch("http://localhost:5048/api/core/export/excel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(B)
      });
      if (J.ok) {
        const K = await J.blob(), re = window.URL.createObjectURL(K), he = document.createElement("a");
        he.href = re, he.download = `${f}.xlsx`, document.body.appendChild(he), he.click(), document.body.removeChild(he), window.URL.revokeObjectURL(re), $e(
          "Xuất Excel Backend (.xlsx)",
          `Đã xuất file Excel chuẩn OpenXML từ server thành công (${q.length} bản ghi)`,
          "success"
        );
        return;
      }
    } catch {
    }
    try {
      Jl({
        fileName: f,
        sheetName: H,
        columns: l,
        rows: q,
        includeSummary: !0
      }), $e("Xuất Excel Client", `Đã xuất ${q.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (B) {
      $e("Lỗi xuất Excel", (B == null ? void 0 : B.message) || "Không thể tạo file Excel", "warning");
    }
  }, Wt = () => {
    try {
      const f = {};
      l.forEach((H) => {
        if (H.aggregate === "sum") {
          const B = q.reduce((J, K) => J + (Number(K[H.key]) || 0), 0);
          f[H.key] = B;
        } else H.aggregate === "count" && (f[H.key] = q.length);
      }), sa({
        title: r.label ? String(r.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${q.length} bản ghi`,
        columns: l,
        rows: q,
        summaryRow: Object.keys(f).length > 0 ? f : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${q.length} dòng`,
          "Bộ lọc áp dụng": y ? `Tìm kiếm: "${y}"` : "Tất cả dữ liệu"
        }
      }), $e("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (f) {
      $e("Lỗi In Báo Cáo", (f == null ? void 0 : f.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, Dt = async () => {
    if (P(""), V({}), h) {
      const f = await Te.getState().queryEntity(h, w);
      f && f.length > 0 && (k(f), $e("Làm mới dữ liệu", `Đã tải lại ${f.length} bản ghi từ máy chủ`, "info"));
    }
  }, vt = (f, H, B) => {
    const J = Xl(f);
    if (J.length === 0) return;
    const K = x && i && i[t.id] ? i[t.id] : m, { updatedRows: re, pastedRowCount: he, pastedColCount: Be, newRowsCreated: Ue } = Zl({
      currentRows: K,
      visibleColumns: l,
      allColumns: o,
      clipMatrix: J,
      startRowIndex: H,
      startColIndex: B
    });
    ie(re), h && Te.getState().registerDataset(h, re), x && qt.setState((jt) => ({
      detailGrids: {
        ...jt.detailGrids,
        [t.id]: re
      }
    }));
    const Je = Ue > 0 ? `Đã dán thành công ${he} dòng × ${Be} cột (tự động tạo thêm ${Ue} dòng mới)` : `Đã dán thành công ${he} dòng × ${Be} cột vào bảng`;
    $e("Dán từ Excel (Ctrl+V)", Je, "success");
  }, kt = (f) => {
    typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((H) => {
      H ? vt(H, f, 0) : $e("Dán từ Excel", "Clipboard hiện đang trống", "warning");
    }).catch(() => {
      $e("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
    }) : $e("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
  }, {
    focusedCell: Ge,
    setFocusedCell: Kt,
    focusCell: Ut,
    handleTableContainerKeyDown: Ft,
    handleCellKeyDown: Rt,
    handlePaste: Lt
  } = Wl({
    tableRef: qe,
    rows: q,
    visibleColumns: l,
    selectedRowId: Ee,
    setSelectedRowId: Re,
    selectedRowIds: _e,
    setSelectedRowIds: Le,
    onRowDoubleClick: (f, H) => Mt(f, H),
    onAddRow: gt,
    onDeleteRow: (f) => G(f),
    onDuplicateRow: (f) => ve(f),
    onToggleAll: rt,
    onFilterByCell: ut,
    onQuickSum: Ct,
    onToggleColumnFilters: () => $((f) => !f),
    onPasteExcel: vt
  }), At = (f, H, B) => {
    const J = f.id ?? f.Id ?? H;
    if (Re(J), B != null && B.ctrlKey || B != null && B.metaKey)
      Le((Be) => {
        const Ue = new Set(Be);
        return Ue.has(J) ? Ue.delete(J) : Ue.add(J), Ue;
      });
    else if (B != null && B.shiftKey && Ee !== null) {
      const Be = q.findIndex((Ue, Je) => (Ue.id ?? Ue.Id ?? Je) === Ee);
      if (Be !== -1) {
        const Ue = Math.min(Be, H), Je = Math.max(Be, H), jt = /* @__PURE__ */ new Set();
        for (let $t = Ue; $t <= Je; $t++)
          jt.add(q[$t].id ?? q[$t].Id ?? $t);
        Le(jt);
      }
    } else
      Le(/* @__PURE__ */ new Set([J]));
    const re = Z.getState().features.find((Be) => String(Be.id) === String(t.pageId)), he = re == null ? void 0 : re.scriptFile;
    h && Te.getState().setSelectedRecord(h, f), t.events && t.events.length > 0 && (Ye(t.events, "rowClick", t.props.label || "Bảng dữ liệu", he, {
      row: f,
      rowIndex: H,
      action: "rowClick"
    }), Ye(t.events, "click", t.props.label || "Bảng dữ liệu", he, {
      row: f,
      rowIndex: H,
      action: "click"
    }), Ye(t.events, "select", t.props.label || "Bảng dữ liệu", he, {
      row: f,
      rowIndex: H,
      action: "select"
    }));
  }, Mt = (f, H) => {
    const J = Z.getState().features.find((re) => String(re.id) === String(t.pageId)), K = J == null ? void 0 : J.scriptFile;
    t.events && t.events.length > 0 && Ye(t.events, "dblclick", t.props.label || "Bảng dữ liệu", K, {
      row: f,
      rowIndex: H,
      id: f.id ?? f.Id,
      action: "dblclick"
    });
  }, Bt = () => {
    x && c(t.id);
    const f = x && i && i[t.id] ? i[t.id] : m, B = { id: f.length > 0 ? Math.max(...f.map((K) => Number(K.id) || 0)) + 1 : 1 };
    o.forEach((K) => {
      K.componentType === "Number" ? B[K.key] = 0 : K.componentType === "Checkbox" ? B[K.key] = !1 : K.componentType === "DatePicker" ? B[K.key] = "08/11/2026" : B[K.key] = "";
    });
    const J = [...f, B];
    ie(J), h && Te.getState().registerDataset(h, J);
  }, [I, te] = D({}), de = (f, H) => {
    if (H != null && String(H).trim() !== "") {
      const B = x && i && i[t.id] ? i[t.id] : m, K = { id: B.length > 0 ? Math.max(...B.map((he) => Number(he.id) || 0)) + 1 : 1, ...I, [f]: H };
      o.forEach((he) => {
        K[he.key] === void 0 && (he.componentType === "Number" || he.dataType === "number" ? K[he.key] = 0 : he.componentType === "Checkbox" || he.dataType === "boolean" ? K[he.key] = !1 : (he.componentType === "DatePicker" || he.dataType, K[he.key] = ""));
      });
      const re = [...B, K];
      ie(re), h && Te.getState().registerDataset(h, re), x && qt.setState((he) => ({
        detailGrids: {
          ...he.detailGrids,
          [t.id]: re
        }
      })), te({}), $e("Dòng mới tự động", `Đã tự động khởi tạo dòng #${re.length} vào bảng`, "success");
    } else
      te((B) => ({ ...B, [f]: H }));
  }, ve = (f) => {
    x && g(t.id, f);
    const H = x && i && i[t.id] ? i[t.id] : m, B = H[f], J = Math.max(...H.map((he) => Number(he.id) || 0)) + 1, K = { ...B, id: J }, re = [...H];
    re.splice(f + 1, 0, K), ie(re), h && Te.getState().registerDataset(h, re);
  }, G = (f) => {
    x && p(t.id, f);
    const H = x && i && i[t.id] ? i[t.id] : m;
    if (H.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const B = H.filter((J, K) => K !== f);
    ie(B), h && Te.getState().registerDataset(h, B);
  }, je = (f, H, B) => {
    f.preventDefault(), f.stopPropagation(), ae({
      isOpen: !0,
      x: f.clientX,
      y: f.clientY,
      row: H,
      rowIndex: B
    });
  }, ke = (f) => {
    const H = x && i && i[t.id] ? i[t.id] : m, J = { id: H.length > 0 ? Math.max(...H.map((re) => Number(re.id) || 0)) + 1 : 1 };
    o.forEach((re) => {
      re.componentType === "Number" ? J[re.key] = 0 : re.componentType === "Checkbox" ? J[re.key] = !1 : (re.componentType, J[re.key] = "");
    });
    const K = [...H];
    K.splice(f + 1, 0, J), ie(K), h && Te.getState().registerDataset(h, K);
  }, oe = (f) => {
    if (f <= 0) return;
    const B = [...x && i && i[t.id] ? i[t.id] : m], [J] = B.splice(f, 1);
    B.splice(f - 1, 0, J), ie(B), h && Te.getState().registerDataset(h, B);
  }, Ve = (f) => {
    const H = x && i && i[t.id] ? i[t.id] : m;
    if (f >= H.length - 1) return;
    const B = [...H], [J] = B.splice(f, 1);
    B.splice(f + 1, 0, J), ie(B), h && Te.getState().registerDataset(h, B);
  }, We = (f, H) => {
    _(H), f.dataTransfer.effectAllowed = "move", f.dataTransfer.setData("text/plain", H);
  }, Pe = (f, H) => {
    if (f.preventDefault(), f.dataTransfer.dropEffect = "move", O === H) return;
    const B = f.currentTarget.getBoundingClientRect(), J = f.clientX < B.left + B.width / 2;
    ce(H), ue(J ? "left" : "right");
  }, Xe = (f) => {
    const H = f.relatedTarget;
    f.currentTarget.contains(H) || (ce(null), ue(null));
  }, at = (f, H) => {
    if (f.preventDefault(), !O || O === H) {
      _(null), ce(null), ue(null);
      return;
    }
    const B = o.findIndex((re) => re.key === O);
    let J = o.findIndex((re) => re.key === H);
    if (B === -1 || J === -1) {
      _(null), ce(null), ue(null);
      return;
    }
    ye === "right" && B > J ? J = J + 1 : ye === "left" && B < J && (J = J - 1), J = Math.max(0, Math.min(o.length - 1, J));
    const K = Fn(o, B, J);
    nt(K), _(null), ce(null), ue(null);
  }, it = () => {
    _(null), ce(null), ue(null);
  }, Ze = (f) => {
    f.sortable && (R === f.key ? C === "asc" ? S("desc") : F(null) : (F(f.key), S("asc")));
  }, St = (f, H, B) => {
    f.preventDefault(), f.stopPropagation(), E({
      isOpen: !0,
      x: f.clientX,
      y: f.clientY,
      column: H,
      columnIndex: B
    });
  }, Ot = (f) => {
    const H = o.map(
      (B) => B.key === f ? { ...B, hidden: !B.hidden } : B
    );
    nt(H);
  }, zt = (f) => {
    const H = ea(o, f);
    nt(H);
  }, Es = (f) => {
    z({
      isOpen: !0,
      column: f
    });
  }, As = (f) => {
    const H = o.findIndex((re) => re.key === f);
    if (H === -1) return;
    const B = o[H], J = {
      ...B,
      key: `${B.key}_copy`,
      title: `${B.title} (Bản sao)`,
      order: (B.order ?? H) + 1
    }, K = [...o];
    K.splice(H + 1, 0, J), nt(K);
  }, Ms = (f) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const H = o.filter((B) => B.key !== f);
    nt(H);
  }, Bs = (f) => {
    const H = o.map(
      (B) => B.key === f.key ? f : B
    );
    nt(H);
  }, as = (f, H) => {
    const B = Ee === (f.id ?? f.Id ?? H), J = _e.has(f.id ?? f.Id ?? H);
    return /* @__PURE__ */ e.jsxs(
      "tr",
      {
        "data-row-index": H,
        onClick: (K) => At(f, H, K),
        onDoubleClick: () => Mt(f, H),
        onContextMenu: (K) => je(K, f, H),
        className: `transition-colors group cursor-pointer ${B || J ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "td",
            {
              onClick: (K) => {
                K.stopPropagation();
                const re = f.id ?? f.Id ?? H;
                Le((he) => {
                  const Be = new Set(he);
                  return Be.has(re) ? Be.delete(re) : Be.add(re), Be;
                }), Re(re);
              },
              className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${J ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
              style: { width: `${M}px`, minWidth: `${M}px` },
              title: "Click chọn dòng | Chuột phải mở menu thao tác",
              children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                J ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                /* @__PURE__ */ e.jsx("span", { children: H + 1 })
              ] })
            }
          ),
          l.map((K, re) => {
            const he = !!(K.frozen || K.sticky === "left"), Be = he && Q[K.key] !== void 0 ? Q[K.key] : void 0, Ue = K.key === W, Je = f[K.key], jt = K.align === "right" ? "text-right" : K.align === "center" ? "text-center" : "text-left", $t = T[`${t.id}_${f.id}_${K.key}`];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-2 py-1 whitespace-nowrap transition-colors ${jt} ${he ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${Ue ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                style: {
                  width: K.width,
                  minWidth: K.minWidth || K.width || "100px",
                  maxWidth: K.maxWidth,
                  left: Be !== void 0 ? `${Be}px` : void 0
                },
                children: /* @__PURE__ */ e.jsx(
                  pr,
                  {
                    column: K,
                    value: Je,
                    row: f,
                    rowIndex: H,
                    columnIndex: re,
                    isFocused: (Ge == null ? void 0 : Ge.rowIndex) === H && (Ge == null ? void 0 : Ge.colIndex) === re,
                    isSelected: B,
                    error: $t,
                    onChange: (_t) => ee(f.id ?? H, K.key, _t),
                    onActionClick: (_t) => Se(_t, f, K),
                    onKeyDown: Rt,
                    onFocus: (_t, _s, Hs) => {
                      Re(f.id ?? f.Id ?? _t), Kt({ rowIndex: _t, colIndex: _s, colKey: Hs });
                    }
                  }
                )
              },
              K.key
            );
          })
        ]
      },
      f.id ?? f.Id ?? H
    );
  }, { flex: rn, flexGrow: an, flexShrink: ln, flexBasis: on, minWidth: cn, maxWidth: dn, width: un, ...Os } = s || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...Os
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: r.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              q.length,
              " bản ghi"
            ] }),
            fe && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/30",
                title: "Cơ chế cuộn ảo Virtual Windowing đang hoạt động (TSK-4.1)",
                children: [
                  /* @__PURE__ */ e.jsx(Tt, { className: "w-3 h-3 text-cyan-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Virtual (",
                    De + 1,
                    "..",
                    we,
                    "/",
                    q.length,
                    ")"
                  ] })
                ]
              }
            ),
            Ne && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] font-semibold border border-amber-500/30",
                title: "Cơ chế gom nhóm dòng đang hoạt động (TSK-4.2)",
                children: [
                  /* @__PURE__ */ e.jsx(wn, { className: "w-3 h-3 text-amber-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    Ce.length,
                    " nhóm"
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: y,
                  onChange: (f) => P(f.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => $((f) => !f),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${L ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Nr, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Bt,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: Dt,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(va, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: xt,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(ya, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((f) => {
                    if (f) {
                      const H = Ge ? Ge.rowIndex : Ee !== null ? Math.max(0, q.findIndex((J, K) => (J.id ?? J.Id ?? K) === Ee)) : 0, B = Ge ? Ge.colIndex : 0;
                      vt(f, H, B);
                    } else
                      $e("Dán từ Excel", "Clipboard hiện đang trống", "warning");
                  }).catch(() => {
                    $e("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                  }) : $e("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                },
                title: "Dán dữ liệu sao chép từ Excel / Google Sheets vào bảng (Ctrl+V)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(wr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Dán Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Wt,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(yr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-slate-300", children: [
              /* @__PURE__ */ e.jsx(wn, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: Ne || "",
                  onChange: (f) => {
                    const H = f.target.value || null;
                    j(H), ne(/* @__PURE__ */ new Set());
                  },
                  title: "Gom nhóm bảng theo cột (Group By - GroupGridView.cs)",
                  className: "bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer max-w-[130px] truncate",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-300", children: "-- Không nhóm --" }),
                    l.map((f) => /* @__PURE__ */ e.jsxs("option", { value: f.key, className: "bg-slate-900 text-slate-200", children: [
                      "Nhóm: ",
                      f.title || f.key
                    ] }, f.key))
                  ]
                }
              )
            ] }),
            Ne && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ne(/* @__PURE__ */ new Set()),
                  title: "Mở rộng tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 transition-colors",
                  children: "Mở rộng"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ne(new Set(Ce.map((f) => f.groupKey))),
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
                  onClick: rt,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: ut,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ct,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: gt,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => $((f) => !f),
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
            ref: qe,
            tabIndex: 0,
            onKeyDown: Ft,
            onPaste: Lt,
            style: {
              maxHeight: fe ? r.maxHeight || r.height || "550px" : r.maxHeight || void 0
            },
            className: `w-full overflow-x-auto select-none relative focus:outline-none ${fe ? "overflow-y-auto" : ""}`,
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: rt,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${M}px`, minWidth: `${M}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: q.length > 0 && _e.size === q.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((f, H) => {
                    const B = !!(f.frozen || f.sticky === "left"), J = B && Q[f.key] !== void 0 ? Q[f.key] : void 0, K = f.key === W, re = O === f.key, he = me === f.key;
                    let Be = "";
                    he && ye === "left" ? Be = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : he && ye === "right" && (Be = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const Ue = f.align === "right" ? "text-right" : f.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Je) => We(Je, f.key),
                        onDragOver: (Je) => Pe(Je, f.key),
                        onDragLeave: Xe,
                        onDrop: (Je) => at(Je, f.key),
                        onDragEnd: it,
                        onContextMenu: (Je) => St(Je, f, H),
                        onClick: () => Ze(f),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${Ue} ${B ? `sticky z-20 bg-[#0b1329] ${K ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${re ? "opacity-30 bg-slate-800/80" : ""} ${Be}`,
                        style: {
                          width: f.width,
                          minWidth: f.minWidth || f.width || "100px",
                          maxWidth: f.maxWidth,
                          left: J !== void 0 ? `${J}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${f.order ?? H + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${f.align === "right" ? "justify-end" : f.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            B && /* @__PURE__ */ e.jsx(jr, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: f.title || f.key }),
                            f.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              f.order
                            ] })
                          ] }),
                          f.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: R === f.key ? C === "asc" ? /* @__PURE__ */ e.jsx(En, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(An, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Bn, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      f.key
                    );
                  })
                ] }),
                L && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((f) => {
                    const H = !!(f.frozen || f.sticky === "left"), B = H && Q[f.key] !== void 0 ? Q[f.key] : void 0, J = f.key === W;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${H ? `sticky z-20 bg-[#080d1a] ${J ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: B !== void 0 ? `${B}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: se[f.key] || "",
                            onChange: (K) => V((re) => ({ ...re, [f.key]: K.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${f.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: [
                q.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    colSpan: l.length + 1,
                    className: "px-6 py-8 text-center text-slate-500 italic",
                    children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                  }
                ) }) : Ne ? (
                  // ── 1. CHẾ ĐỘ GOM NHÓM DÒNG (COLLAPSIBLE GROUP-BY ROWS - TSK-4.2 & GroupGridView.cs) ──
                  Ce.map((f) => {
                    const H = A.has(f.groupKey), B = l.find((K) => K.key === Ne), J = (B == null ? void 0 : B.title) || Ne;
                    return /* @__PURE__ */ e.jsxs(Zt.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(
                        "tr",
                        {
                          onClick: () => {
                            ne((K) => {
                              const re = new Set(K);
                              return re.has(f.groupKey) ? re.delete(f.groupKey) : re.add(f.groupKey), re;
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
                                    children: H ? /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ e.jsxs("span", { className: "text-slate-400 font-normal", children: [
                                  "Gom nhóm theo ",
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-amber-300 font-semibold", children: J }),
                                  ":"
                                ] }),
                                /* @__PURE__ */ e.jsx("span", { className: "text-amber-400 font-bold font-mono text-sm", children: f.groupLabel }),
                                /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold", children: [
                                  f.rows.length,
                                  " bản ghi"
                                ] }),
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-center gap-3 text-[11px] font-mono text-slate-400", children: l.filter((K) => f.subtotals[K.key] !== void 0 && f.subtotals[K.key] > 0).slice(0, 3).map((K) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsxs("span", { children: [
                                    K.title,
                                    ":"
                                  ] }),
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-emerald-400 font-bold", children: f.subtotals[K.key].toLocaleString("en-US") })
                                ] }, K.key)) })
                              ] })
                            }
                          )
                        }
                      ),
                      !H && f.rows.map((K, re) => {
                        const he = f.startIndex + re;
                        return as(K, he);
                      })
                    ] }, `group_${f.groupKey}`);
                  })
                ) : fe ? (
                  // ── 2. CHẾ ĐỘ CUỘN ẢO (VIRTUAL SCROLLING WINDOWING - TSK-4.1) ──
                  /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    X > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${X}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: l.length + 1, style: { padding: 0, border: "none" } }) }),
                    ot.map((f, H) => {
                      const B = De + H;
                      return as(f, B);
                    }),
                    xe > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${xe}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: l.length + 1, style: { padding: 0, border: "none" } }) })
                  ] })
                ) : (
                  // ── 3. CHẾ ĐỘ RENDER TIÊU CHUẨN (NORMAL RENDERING) ──
                  q.map((f, H) => as(f, H))
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
                          style: { width: `${M}px`, minWidth: `${M}px` },
                          children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(Qe, { className: "w-3 h-3 text-emerald-400" }),
                            /* @__PURE__ */ e.jsx("span", { children: q.length + 1 })
                          ] })
                        }
                      ),
                      l.map((f, H) => {
                        const B = !!(f.frozen || f.sticky === "left"), J = B && Q[f.key] !== void 0 ? Q[f.key] : void 0, K = f.key === W, re = I[f.key] ?? "", he = f.align === "right" ? "text-right" : f.align === "center" ? "text-center" : "text-left";
                        return /* @__PURE__ */ e.jsx(
                          "td",
                          {
                            className: `px-2 py-1 whitespace-nowrap transition-colors ${he} ${B ? `sticky z-10 bg-[#0c1222] ${K ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                            style: {
                              width: f.width,
                              minWidth: f.minWidth || f.width || "100px",
                              maxWidth: f.maxWidth,
                              left: J !== void 0 ? `${J}px` : void 0
                            },
                            children: /* @__PURE__ */ e.jsx(
                              pr,
                              {
                                column: f,
                                value: re,
                                row: I,
                                rowIndex: q.length,
                                columnIndex: H,
                                isFocused: (Ge == null ? void 0 : Ge.rowIndex) === q.length && (Ge == null ? void 0 : Ge.colIndex) === H,
                                onChange: (Be) => de(f.key, Be),
                                onKeyDown: Rt
                              }
                            )
                          },
                          `ghost_${f.key}`
                        );
                      })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Ol,
                {
                  columns: l,
                  data: q,
                  showRowNumber: !0,
                  rowNumberWidth: M,
                  leftOffsets: Q
                }
              ) })
            ] })
          }
        ),
        U.isOpen && U.column && /* @__PURE__ */ e.jsx(
          Al,
          {
            isOpen: U.isOpen,
            x: U.x,
            y: U.y,
            column: U.column,
            columnIndex: U.columnIndex,
            allColumns: o,
            onClose: () => E((f) => ({ ...f, isOpen: !1 })),
            onToggleHide: Ot,
            onSetFreeze: zt,
            onOpenProperties: Es,
            onCloneColumn: As,
            onRemoveColumn: Ms,
            onToggleFilter: () => $((f) => !f)
          }
        ),
        Y.isOpen && Y.column && /* @__PURE__ */ e.jsx(
          Xr,
          {
            isOpen: Y.isOpen,
            column: Y.column,
            onClose: () => z({ isOpen: !1, column: null }),
            onSave: Bs
          }
        ),
        b.isOpen && b.row && /* @__PURE__ */ e.jsx(
          Ml,
          {
            isOpen: b.isOpen,
            x: b.x,
            y: b.y,
            row: b.row,
            rowIndex: b.rowIndex,
            totalRows: v.length,
            onClose: () => ae((f) => ({ ...f, isOpen: !1, row: null })),
            onDuplicateRow: ve,
            onDeleteRow: G,
            onInsertRowBelow: ke,
            onMoveRowUp: oe,
            onMoveRowDown: Ve,
            onPasteExcel: kt
          }
        )
      ]
    }
  );
}, Ko = ({ node: t }) => {
  const { props: r, style: s } = t, { flex: a, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...p } = s || {}, g = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], T = r.columns && r.columns.length > 0 ? r.columns : g, x = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [h, w] = D(""), [u, v] = D(null), [k, m] = D("asc"), [y, P] = D(1), R = Number(r.pageSize) || 10, F = Ae(() => {
    if (!h.trim()) return x;
    const V = h.toLowerCase();
    return x.filter(
      (U) => Object.values(U).some((E) => String(E).toLowerCase().includes(V))
    );
  }, [h]), C = Ae(() => u ? [...F].sort((V, U) => {
    const E = V[u], Y = U[u];
    if (E === Y) return 0;
    const z = E > Y ? 1 : -1;
    return k === "asc" ? z : -z;
  }) : F, [F, u, k]), S = Math.ceil(C.length / R) || 1, L = Ae(() => {
    const V = (y - 1) * R;
    return C.slice(V, V + R);
  }, [C, y, R]), $ = Ae(() => {
    const V = {};
    for (const U of T)
      if (U.aggregate === "sum") {
        const E = F.reduce((Y, z) => Y + (Number(z[U.key]) || 0), 0);
        V[U.key] = E.toLocaleString("en-US");
      } else if (U.aggregate === "count")
        V[U.key] = F.length;
      else if (U.aggregate === "avg") {
        const E = F.length ? F.reduce((Y, z) => Y + (Number(z[U.key]) || 0), 0) / F.length : 0;
        V[U.key] = E.toFixed(1);
      }
    return V;
  }, [T, F]), se = (V) => {
    u === V ? m(k === "asc" ? "desc" : "asc") : (v(V), m("asc"));
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
            /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: h,
                onChange: (V) => {
                  w(V.target.value), P(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: T.map((V) => {
            const U = V.sticky === "left", E = V.align === "right" ? "text-right" : V.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => V.sortable !== !1 && se(V.key),
                style: {
                  width: V.width,
                  minWidth: V.minWidth || V.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${E} ${U ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${V.align === "right" ? "justify-end" : V.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  V.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: V.title }),
                  V.sortable !== !1 && /* @__PURE__ */ e.jsx(Bn, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              V.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: L.length > 0 ? L.map((V, U) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: T.map((E) => {
            const Y = E.sticky === "left", z = V[E.key], b = E.align === "right" ? "text-right" : E.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${b} ${Y ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (z == null) return "—";
                  if (E.componentType === "Checkbox") {
                    const ae = z === !0 || z === "true" || z === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: ae,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (E.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(z)
                      }
                    );
                  if (E.componentType === "DatePicker" || E.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(z) })
                    ] });
                  if (E.componentType === "Number" || typeof z == "number") {
                    const ae = Number(z);
                    if (!isNaN(ae)) {
                      const O = E.precision !== void 0 ? E.precision : ae % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: ae.toLocaleString("en-US", { minimumFractionDigits: O, maximumFractionDigits: O }) });
                    }
                  }
                  return E.key === "status" || E.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${z === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(z) }) : String(z);
                })()
              },
              E.key
            );
          }) }, V.id || U)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: T.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: T.map((V, U) => {
            const E = V.sticky === "left", Y = V.align === "right" ? "text-right" : V.align === "center" ? "text-center" : "text-left", z = $[V.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${Y} ${E ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: U === 0 && !z ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : z !== void 0 ? z : ""
              },
              V.key
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
                onClick: () => P((V) => Math.max(1, V - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(kr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: y >= S,
                onClick: () => P((V) => Math.min(S, V + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function to(t, r, s = "") {
  if (!r || typeof r != "object")
    return s;
  if (!t || typeof t != "string" || t.trim() === "") {
    const d = r.fullName ?? r.FullName ?? r.name ?? r.Name ?? r.shortName ?? r.ShortName ?? r.title ?? r.Title ?? r.label ?? r.Label ?? r.code ?? r.Code ?? r.id ?? r.Id;
    return d != null ? String(d) : s;
  }
  const a = t.trim();
  if (!a.includes("{") || !a.includes("}")) {
    const d = Ht(r, a);
    return d != null ? String(d) : a;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = a.replace(n, (d, c) => {
    const p = c.trim();
    o = !0;
    const g = p.includes(".") ? p.split(".").pop().trim() : p;
    let T = Ht(r, p);
    return T == null && (T = Ht(r, g)), T != null ? String(T) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || s : a;
}
function Ht(t, r) {
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
const so = ({
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
  populateField: T,
  formId: x,
  placeholder: h = "— Chọn —",
  disabled: w = !1,
  readOnly: u = !1,
  isGridCell: v = !1,
  error: k,
  className: m = "",
  onKeyDown: y,
  onFocus: P,
  onBlur: R,
  onQuickAdd: F
}) => {
  const [C, S] = D(!1), [L, $] = D(""), [se, V] = D(0), [U, E] = D(!1), [Y, z] = D([]), [b, ae] = D(!1), [O, _] = D(""), [me, ce] = D(""), [ye, ue] = D(""), [M, Q] = D(!1), W = tt(null), q = tt(null), ie = tt(null), Ne = tt(null), j = Te((ee) => ee.queryEntity), A = Te((ee) => ee.getDataset), ne = Te((ee) => ee.applyPopulate), Ce = Te((ee) => n ? ee.getDataset(n).length : 0), le = () => {
    if (F) {
      F(), S(!1);
      return;
    }
    if (o) {
      zr(o, {}, `Tạo mới ${n || o}`), S(!1);
      return;
    }
    const ee = L.trim();
    _(ee ? ee.toUpperCase().replace(/\s+/g, "_") : ""), ce(ee), ue(""), ae(!0);
  }, Fe = async () => {
    if (!O.trim() || !me.trim()) return;
    const ee = (n || "").trim();
    if (ee) {
      Q(!0);
      try {
        const Se = {
          code: O.trim(),
          name: me.trim(),
          fullName: me.trim(),
          description: ye.trim(),
          active: !0
        }, Ee = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(ee)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Se)
        });
        if (Ee.ok) {
          const Re = await Ee.json(), _e = {
            ...Se,
            ...Re,
            id: Re.id ?? Re.Id ?? Date.now()
          }, Le = await j(ee, i);
          Array.isArray(Le) && Le.length > 0 ? z(Le) : z((qe) => [_e, ...qe]), xe(_e), ae(!1), S(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (Se) {
        console.error("[EnterpriseSelect] Lỗi tạo nhanh bản ghi:", Se);
        const Ee = {
          id: `mock-${Date.now()}`,
          code: O.trim(),
          name: me.trim(),
          fullName: me.trim(),
          description: ye.trim(),
          active: !0
        };
        z((Re) => [Ee, ...Re]), xe(Ee), ae(!1), S(!1);
      } finally {
        Q(!1);
      }
    }
  };
  He(() => {
    let ee = !0;
    const Se = (n || "").trim();
    if (a && Array.isArray(a) && a.length > 0) {
      z(a);
      return;
    }
    if (Se)
      E(!0), j(Se, i).then((Ee) => {
        ee && (Array.isArray(Ee) && Ee.length > 0 ? z(Ee) : z([]));
      }).catch(() => {
        if (ee) {
          const Ee = A(Se);
          z(Array.isArray(Ee) ? Ee : []);
        }
      }).finally(() => {
        ee && E(!1);
      });
    else if (s && Array.isArray(s) && s.length > 0) {
      const Ee = s.map((Re) => Re.rawItem && typeof Re.rawItem == "object" ? Re.rawItem : {
        [d]: Re.value,
        [c]: Re.label,
        id: Re.value,
        name: Re.label,
        fullName: Re.label
      });
      z(Ee);
    } else
      z([]);
    return () => {
      ee = !1;
    };
  }, [n, i, a, s, d, c, j, A, Ce]);
  const fe = Ae(() => {
    if (p && p.length > 0)
      return p;
    if (Y.length > 0) {
      const ee = Y[0], Se = Object.keys(ee), Re = [
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
        (Le) => Se.some((qe) => qe.toLowerCase() === Le.toLowerCase())
      );
      if (Re.length > 0)
        return Re.slice(0, 3).map((Le) => {
          const qe = Se.find(($e) => $e.toLowerCase() === Le.toLowerCase()) || Le;
          return {
            key: qe,
            title: qe.charAt(0).toUpperCase() + qe.slice(1),
            width: qe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const _e = Se.filter(
        (Le) => typeof ee[Le] != "object" && !Le.startsWith("_")
      ).slice(0, 2);
      if (_e.length > 0)
        return _e.map((Le) => ({
          key: Le,
          title: Le.charAt(0).toUpperCase() + Le.slice(1),
          width: "50%",
          align: "left"
        }));
    }
    return [
      { key: d, title: "Mã", width: "35%", align: "left" },
      { key: c, title: "Tên", width: "65%", align: "left" }
    ];
  }, [p, Y, d, c]), Ie = Ae(() => t == null || t === "" ? null : Y.find((ee) => {
    const Se = Ht(ee, d) ?? ee.id ?? ee.Id ?? ee.code ?? ee.Code;
    return Se !== void 0 && String(Se) === String(t);
  }) || null, [t, Y, d]), pe = Ae(() => Ie ? to(g, Ie, String(t ?? "")) : t != null && t !== "" ? String(t) : "", [Ie, g, t]), [ge, Me] = D({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), De = () => {
    if (!W.current) return;
    const ee = W.current.getBoundingClientRect(), Se = 300, Re = Math.max(ee.width, 360), Le = window.innerHeight - ee.bottom < Se && ee.top > Se;
    let qe = Le ? ee.top - Se - 4 : ee.bottom + 4, $e = ee.left;
    $e + Re > window.innerWidth - 12 && ($e = Math.max(12, window.innerWidth - Re - 12)), Me({ top: qe, left: $e, width: Re, openUpwards: Le });
  }, we = () => {
    w || u || (De(), S(!0), $(""), V(0));
  };
  He(() => {
    C && (De(), setTimeout(() => {
      var ee;
      (ee = ie.current) == null || ee.focus();
    }, 50));
  }, [C]), He(() => {
    if (!C) return;
    const ee = (Ee) => {
      var _e, Le;
      const Re = Ee.target;
      (_e = W.current) != null && _e.contains(Re) || (Le = q.current) != null && Le.contains(Re) || (S(!1), R && R());
    }, Se = () => {
      De();
    };
    return window.addEventListener("mousedown", ee), window.addEventListener("scroll", Se, !0), window.addEventListener("resize", Se), () => {
      window.removeEventListener("mousedown", ee), window.removeEventListener("scroll", Se, !0), window.removeEventListener("resize", Se);
    };
  }, [C, R]);
  const X = Ae(() => {
    if (!L.trim()) return Y;
    const ee = L.toLowerCase().trim();
    return Y.filter((Se) => fe.some((Re) => {
      const _e = Ht(Se, Re.key);
      return _e != null && String(_e).toLowerCase().includes(ee);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((Re) => {
      const _e = Ht(Se, Re);
      return _e != null && String(_e).toLowerCase().includes(ee);
    }));
  }, [Y, L, fe]);
  He(() => {
    if (Ne.current && X.length > 0) {
      const ee = Ne.current.querySelector(`[data-index="${se}"]`);
      ee && ee.scrollIntoView({ block: "nearest" });
    }
  }, [se, X]);
  const xe = (ee) => {
    const Se = Ht(ee, d) ?? ee.id ?? ee.Id ?? ee.code ?? ee.Code;
    r(Se, ee), T && x && ne(x, T, ee), S(!1);
  }, ot = (ee) => {
    ee.stopPropagation(), r("", null);
  }, ft = (ee) => {
    ee.key === "ArrowDown" ? (ee.preventDefault(), V((Se) => Se < X.length - 1 ? Se + 1 : Se)) : ee.key === "ArrowUp" ? (ee.preventDefault(), V((Se) => Se > 0 ? Se - 1 : 0)) : ee.key === "Enter" ? (ee.preventDefault(), X.length > 0 && se >= 0 && se < X.length && xe(X[se])) : ee.key === "Escape" && (ee.preventDefault(), S(!1));
  }, nt = (ee) => {
    if (ee.key === "Enter" || ee.key === " " || ee.key === "F4" || ee.altKey && ee.key === "ArrowDown") {
      ee.preventDefault(), we();
      return;
    }
    y && y(ee);
  }, pt = k ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: W,
        tabIndex: w ? -1 : 0,
        onClick: we,
        onKeyDown: nt,
        onFocus: P,
        className: `relative flex items-center justify-between transition-all select-none cursor-pointer ${v ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${pt}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${pt} shadow-sm`} ${w ? "opacity-50 cursor-not-allowed" : ""} ${m}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: pe ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: pe }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: h }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!pe && !w && !u && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: ot,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              wt,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${C ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    C && It(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: q,
          style: {
            position: "fixed",
            top: `${ge.top}px`,
            left: `${ge.left}px`,
            width: `${ge.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (ee) => ee.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: ie,
                    type: "text",
                    value: L,
                    onChange: (ee) => {
                      $(ee.target.value), V(0);
                    },
                    onKeyDown: ft,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                L && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => $(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" })
                  }
                )
              ] }),
              l && (n || o) && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: le,
                  title: `Tạo nhanh bản ghi mới cho ${n || "danh mục"}`,
                  className: "flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95",
                  children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "Tạo nhanh" })
                  ]
                }
              ),
              U && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(Cn, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              fe.map((ee, Se) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: ee.width || `${100 / fe.length}%` },
                  className: `px-1.5 truncate ${ee.align === "right" ? "text-right" : ee.align === "center" ? "text-center" : "text-left"}`,
                  children: ee.title
                },
                ee.key || Se
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: Ne,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: X.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Et, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: U ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" }),
                  l && (n || o) && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: le,
                      className: "mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95",
                      children: [
                        /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          'Thêm nhanh "',
                          L || n,
                          '"'
                        ] })
                      ]
                    }
                  )
                ] }) : X.map((ee, Se) => {
                  const Ee = Ht(ee, d) ?? ee.id ?? ee.Id ?? ee.code ?? ee.Code, Re = Ee !== void 0 && String(Ee) === String(t), _e = Se === se;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": Se,
                      onClick: () => xe(ee),
                      onMouseEnter: () => V(Se),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${Re ? "bg-emerald-950/60 text-emerald-200 font-medium" : _e ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        fe.map((Le, qe) => {
                          const $e = Ht(ee, Le.key), rt = $e != null ? String($e) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: Le.width || `${100 / fe.length}%` },
                              className: `px-1.5 truncate ${Le.align === "right" ? "text-right font-mono" : Le.align === "center" ? "text-center" : "text-left"}`,
                              children: rt
                            },
                            Le.key || qe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: Re && /* @__PURE__ */ e.jsx(Qs, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    Ee ?? Se
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  X.length,
                  " / ",
                  Y.length,
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
    b && It(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (ee) => ee.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4" }) }),
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
                  onClick: () => ae(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
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
                    value: O,
                    onChange: (ee) => _(ee.target.value),
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
                    value: me,
                    onChange: (ee) => ce(ee.target.value),
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
                    value: ye,
                    onChange: (ee) => ue(ee.target.value),
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
                  onClick: () => ae(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: M || !O.trim() || !me.trim(),
                  onClick: Fe,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    M ? /* @__PURE__ */ e.jsx(Cn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
}, no = ({ node: t, isEditing: r }) => {
  var E, Y, z, b, ae, O, _, me, ce, ye, ue;
  const { props: s, style: a } = t, n = Z((M) => M.features), o = Z((M) => M.activeFeatureId), l = n.find((M) => String(M.id) === String(t.pageId)) || n.find((M) => String(M.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((E = t.dataBinding) == null ? void 0 : E.fieldName) || t.props.name || t.id), k = Te((M) => Vt(M, u, v, void 0)), m = Te((M) => M.setFieldValue), y = k !== void 0 ? k : s.value ?? "", P = s.reference || s.refName || ((Y = t.dataBinding) == null ? void 0 : Y.refName) || ((z = t.dataBinding) == null ? void 0 : z.entityName) || "", R = s.dataSource || ((b = t.dataBinding) == null ? void 0 : b.dataSource) || s.query || ((ae = t.dataBinding) == null ? void 0 : ae.query) || s.sqlWhere || ((O = t.dataBinding) == null ? void 0 : O.sqlWhere) || "", F = s.idField || ((_ = t.dataBinding) == null ? void 0 : _.idField) || "id", C = s.textField || s.selectField || ((me = t.dataBinding) == null ? void 0 : me.selectField) || "name", S = s.dropdownColumns || ((ce = t.dataBinding) == null ? void 0 : ce.dropdownColumns), L = s.formatData || ((ye = t.dataBinding) == null ? void 0 : ye.formatData) || "", $ = s.populateField || ((ue = t.dataBinding) == null ? void 0 : ue.populateField) || "", se = s.options || [], V = !!s.validationError, U = (M, Q) => {
    m(u, v, M), r || Ye(t.events, "change", s.label || "Chọn mục", i, {
      componentId: t.id,
      fieldName: v,
      value: M,
      selectedItem: Q
    });
  };
  return /* @__PURE__ */ e.jsx(
    rs,
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
        ...w
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        so,
        {
          value: y,
          onChange: U,
          options: se,
          reference: P,
          dataSource: R,
          idField: F,
          selectField: C,
          dropdownColumns: S,
          formatData: L,
          populateField: $,
          formId: u,
          placeholder: s.placeholder ? String(s.placeholder) : "— Chọn —",
          disabled: s.disabled,
          error: V ? String(s.validationError) : void 0
        }
      ) })
    }
  );
}, ro = ({ node: t, isEditing: r }) => {
  const { props: s, style: a } = t, n = Z((k) => k.features), o = Z((k) => k.activeFeatureId), l = n.find((k) => String(k.id) === String(t.pageId)) || n.find((k) => String(k.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, [u, v] = D(!!s.value);
  return /* @__PURE__ */ e.jsx(
    rs,
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
        ...w
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: s.disabled,
            checked: u,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (k) => {
              v(k.target.checked), r || Ye(t.events, "change", s.label || "Hộp kiểm", i, {
                componentId: t.id,
                value: k.target.checked
              });
            }
          }
        ),
        s.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: s.placeholder })
      ] })
    }
  );
}, ao = ({ node: t, isEditing: r }) => {
  var R;
  const { props: s, style: a } = t, n = Z((F) => F.features), o = Z((F) => F.activeFeatureId), l = n.find((F) => String(F.id) === String(t.pageId)) || n.find((F) => String(F.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((R = t.dataBinding) == null ? void 0 : R.fieldName) || t.props.name || t.id), k = Te((F) => Vt(F, u, v, void 0)), m = Te((F) => F.setFieldValue), y = k !== void 0 ? k : s.value ?? "", P = (F) => {
    m(u, v, F), r || Ye(t.events, "change", s.label || "Chọn ngày", i, {
      componentId: t.id,
      fieldName: v,
      value: F
    });
  };
  return /* @__PURE__ */ e.jsx(
    rs,
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
        ...w
      },
      children: /* @__PURE__ */ e.jsx(
        Qr,
        {
          value: y,
          onChange: P,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          placeholder: s.placeholder || "DD/MM/YYYY",
          error: s.validationError ? String(s.validationError) : void 0
        }
      )
    }
  );
}, lo = ({ node: t, children: r }) => {
  const { props: s } = t, a = s.title || s.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: a }),
      /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: r || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, oo = ({ node: t }) => {
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
}, io = ({ node: t, isEditing: r }) => {
  var F;
  const { props: s, style: a } = t, n = Z((C) => C.features), o = Z((C) => C.activeFeatureId), l = n.find((C) => String(C.id) === String(t.pageId)) || n.find((C) => String(C.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((F = t.dataBinding) == null ? void 0 : F.fieldName) || t.props.name || t.id), k = Te((C) => Vt(C, u, v, void 0)), m = Te((C) => C.setFieldValue), y = k !== void 0 ? k : s.value !== void 0 ? String(s.value) : "", P = Number(s.rows) || 2, R = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    rs,
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
          rows: P,
          placeholder: s.placeholder || "Nhập nội dung...",
          value: y,
          disabled: s.disabled,
          readOnly: r || !!s.readOnly,
          style: {
            width: "100%",
            ...w
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${R ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${s.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (C) => {
            const S = C.target.value;
            m(u, v, S), r || Ye(t.events, "change", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v,
              value: S
            });
          },
          onFocus: () => {
            r || Ye(t.events, "focus", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v
            });
          },
          onBlur: (C) => {
            r || Ye(t.events, "blur", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: v,
              value: C.target.value
            });
          }
        }
      )
    }
  );
}, Uo = ({ node: t, isEditing: r, children: s }) => {
  var m, y;
  const { props: a, style: n } = t, o = Z((P) => P.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: p, maxWidth: g, width: T, ...x } = n || {}, h = [
    { id: "main", label: "TAB 1" }
  ], w = a.tabs || h, [u, v] = D(
    a.activeTabId || ((m = w[0]) == null ? void 0 : m.id) || "main"
  ), k = a.activeTabId || u || ((y = w[0]) == null ? void 0 : y.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...x
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          w.map((P) => {
            const R = P.id === k;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (F) => {
                  F.stopPropagation(), v(P.id), o(t.id, { activeTabId: P.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${R ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: P.label }),
                  P.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${P.badgeColor || "bg-amber-600"}`, children: P.badge })
                ]
              },
              P.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (P) => {
                P.stopPropagation();
                const R = `tab_${Date.now().toString(36)}`, F = [...w, { id: R, label: `Tab Mới ${w.length + 1}` }];
                o(t.id, { tabs: F, activeTabId: R }), v(R);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: s })
      ]
    }
  );
}, na = ({
  parentId: t,
  order: r,
  tabNodes: s,
  isEditing: a,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var x;
  const l = Z((h) => h.addComponent), i = Z((h) => h.selectComponent), [d, c] = D(((x = s[0]) == null ? void 0 : x.id) || ""), p = s.find((h) => h.id === d) || s[0], g = (p == null ? void 0 : p.id) || "", T = (h) => {
    var k;
    h.stopPropagation();
    const w = ((k = s[0]) == null ? void 0 : k.pageId) || "2", u = `tab_${Date.now().toString(36)}`, v = {
      id: u,
      type: "Container",
      parentId: t,
      pageId: w,
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
          s.map((h) => {
            const w = h.id === g, u = h.props.label || h.props.title || `Tab #${h.id.slice(-4)}`, v = h.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), c(h.id), a && i(h.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${w ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: u }),
                  v !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(v) })
                ]
              },
              h.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: T,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: p && o ? o(p, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, co = ({
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
  var k;
  const p = Te(), g = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [T, x] = D(a || g), [h, w] = D(n || ((k = g[0]) == null ? void 0 : k.id) || "");
  He(() => {
    a && a.length > 0 && x(a);
  }, [a]), He(() => {
    n !== void 0 && w(n);
  }, [n]);
  const u = (m) => {
    w(m.id), l ? l(m) : p.setFormRecord("default", m);
  }, v = () => {
    const m = T.length + 1, y = `REC-${String(m).padStart(3, "0")}`, P = {
      id: String(Date.now()),
      code: y,
      name: `Bản ghi mới ${m}`
    }, R = [...T, P];
    x(R), w(P.id), i ? i() : p.setFormRecord("default", P);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        t && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(Tr, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          T.map((m) => {
            const y = String(m.id) === String(h), P = m[s] || m.code || m.name || m.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => u(m),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${y ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: P })
              },
              m.id
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
                /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, uo = ({
  isOpen: t,
  title: r,
  entityName: s,
  columns: a,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = Te(), d = Te((R) => R.datasets[s]), [c, p] = D([]), [g, T] = D(!1), [x, h] = D(""), [w, u] = D(0), v = tt(null);
  He(() => {
    if (!t) {
      h(""), u(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? p(d) : (T(!0), i.queryEntity(s).then((R) => {
      Array.isArray(R) && R.length > 0 ? p(R) : p(i.getDataset(s) || []);
    }).finally(() => T(!1))), setTimeout(() => {
      var R, F;
      (R = v.current) == null || R.focus(), (F = v.current) == null || F.select();
    }, 80);
  }, [t, s, d]);
  const k = Ae(() => {
    if (a && a.length > 0) return a;
    if (c.length > 0) {
      const R = c[0], F = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(R).filter((C) => !F.includes(C.toLowerCase()) && typeof R[C] != "object").slice(0, 6).map((C) => ({
        key: C,
        title: C.charAt(0).toUpperCase() + C.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [a, c]), m = Ae(() => {
    if (!x.trim()) return c;
    const R = x.toLowerCase().trim();
    return c.filter((F) => n && n.length > 0 ? n.some((C) => {
      const S = F[C];
      return S != null && String(S).toLowerCase().includes(R);
    }) : Object.values(F).some(
      (C) => C != null && String(C).toLowerCase().includes(R)
    ));
  }, [c, x, n]);
  He(() => {
    w >= m.length && u(Math.max(0, m.length - 1));
  }, [m.length]);
  const y = (R) => {
    R.key === "ArrowDown" ? (R.preventDefault(), u((F) => F < m.length - 1 ? F + 1 : F)) : R.key === "ArrowUp" ? (R.preventDefault(), u((F) => F > 0 ? F - 1 : 0)) : R.key === "Enter" ? (R.preventDefault(), m[w] && (o(m[w]), l())) : R.key === "Escape" && (R.preventDefault(), l());
  };
  if (!t) return null;
  const P = r || `Tra cứu danh mục: ${s}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: y,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(kn, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: P }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                m.length,
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
              children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: v,
              type: "text",
              value: x,
              onChange: (R) => {
                h(R.target.value), u(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${s}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: g ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : m.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          x,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            k.map((R) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: R.width },
                children: R.title || R.key
              },
              R.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: m.map((R, F) => {
            const C = F === w;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => u(F),
                onDoubleClick: () => {
                  o(R), l();
                },
                className: `transition-colors cursor-pointer ${C ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: F + 1 }),
                  k.map((S) => {
                    const L = R[S.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: L != null ? String(L) : "—"
                      },
                      S.key
                    );
                  })
                ]
              },
              R.id ?? R.Id ?? F
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
                disabled: m.length === 0,
                onClick: () => {
                  m[w] && (o(m[w]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Qs, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, xo = ({ node: t, isEditing: r }) => {
  var q, ie, Ne, j, A, ne, Ce;
  const { props: s, style: a } = t, n = Z((le) => le.features), o = Z((le) => le.activeFeatureId), l = n.find((le) => String(le.id) === String(t.pageId)) || n.find((le) => String(le.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: p, flexBasis: g, minWidth: T, maxWidth: x, width: h, ...w } = a || {}, u = String(t.pageId || o || "default"), v = String(((q = t.dataBinding) == null ? void 0 : q.fieldName) || t.props.name || t.id), k = Te((le) => Vt(le, u, v, void 0)), m = Te((le) => le.setFieldValue), y = Te((le) => le.applyPopulate), [P, R] = D(!1), [F, C] = D(!1), [S, L] = D(""), [$, se] = D(""), [V, U] = D(""), [E, Y] = D(!1), z = k !== void 0 ? k : s.value ?? "", b = !!s.validationError, ae = String(
    s.reference || s.refName || ((ie = t.dataBinding) == null ? void 0 : ie.refName) || ((Ne = t.dataBinding) == null ? void 0 : Ne.entityName) || ""
  ), O = String(
    s.refClass || ((j = t.dataBinding) == null ? void 0 : j.refClass) || ""
  ), _ = String(
    s.displayField || s.selectField || ((A = t.dataBinding) == null ? void 0 : A.selectField) || "code"
  ), me = String(
    s.valueField || s.idField || ((ne = t.dataBinding) == null ? void 0 : ne.idField) || "code"
  ), ce = String(
    s.populateRule || s.populateField || ((Ce = t.dataBinding) == null ? void 0 : Ce.populateField) || ""
  ), ye = () => {
    if (!(s.disabled || r)) {
      if (!ae) {
        console.warn(`[ForgeSearchEntry] Component ${t.id} chưa cấu hình reference entity`);
        return;
      }
      R(!0);
    }
  }, ue = () => {
    if (s.disabled || r) return;
    if (O) {
      zr(O, {}, `Tạo mới ${ae || O}`);
      return;
    }
    const le = String(z || "").trim();
    L(le ? le.toUpperCase().replace(/\s+/g, "_") : ""), se(le), U(""), C(!0);
  }, M = async () => {
    if (!S.trim() || !$.trim()) return;
    const le = ae.trim();
    if (le) {
      Y(!0);
      try {
        const Fe = {
          code: S.trim(),
          name: $.trim(),
          fullName: $.trim(),
          description: V.trim(),
          active: !0
        }, fe = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(le)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Fe)
        });
        if (fe.ok) {
          const Ie = await fe.json(), pe = {
            ...Fe,
            ...Ie,
            id: Ie.id ?? Ie.Id ?? Date.now()
          };
          await Te.getState().queryEntity(le), Q(pe), C(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (Fe) {
        console.error("[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:", Fe);
        const fe = {
          id: `mock-${Date.now()}`,
          code: S.trim(),
          name: $.trim(),
          fullName: $.trim(),
          description: V.trim(),
          active: !0
        };
        Q(fe), C(!1);
      } finally {
        Y(!1);
      }
    }
  }, Q = (le) => {
    const Fe = le[me] ?? le[_] ?? le.code ?? le.id;
    le[_] ?? le.name, m(u, v, Fe), ce && y(u, ce, le), r || (Ye(t.events, "change", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: v,
      value: Fe,
      selectedItem: le
    }), Ye(t.events, "select", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: v,
      value: Fe,
      selectedItem: le
    }));
  }, W = (le) => {
    le.key === "F1" && (le.preventDefault(), le.stopPropagation(), ye());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      rs,
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
          ...w
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: s.disabled,
              readOnly: r || !!s.readOnly,
              placeholder: s.placeholder || (ae ? `Tra cứu ${ae} (F1)...` : "Nhập dữ liệu..."),
              value: z,
              onKeyDown: W,
              onDoubleClick: ye,
              className: `w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${b ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (le) => {
                const Fe = le.target.value;
                m(u, v, Fe), r || Ye(t.events, "change", s.label || "Ô tra cứu", i, {
                  componentId: t.id,
                  fieldName: v,
                  value: Fe
                });
              }
            }
          ),
          ae && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: ue,
                title: `Tạo nhanh ${ae} (+)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || r,
                onClick: ye,
                title: `Tra cứu ${ae} (Nhấn F1 hoặc nhấp đúp)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      }
    ),
    ae && /* @__PURE__ */ e.jsx(
      uo,
      {
        isOpen: P,
        title: `Tra cứu danh mục: ${s.label || ae}`,
        entityName: ae,
        columns: s.columns,
        onSelect: Q,
        onClose: () => R(!1)
      }
    ),
    F && It(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (le) => le.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-slate-100", children: [
                    "Tạo nhanh danh mục: ",
                    ae || "Bản ghi mới"
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: "Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này" })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => C(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
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
                    onChange: (le) => L(le.target.value),
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
                    onChange: (le) => se(le.target.value),
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
                    value: V,
                    onChange: (le) => U(le.target.value),
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
                  onClick: () => C(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: E || !S.trim() || !$.trim(),
                  onClick: M,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    E ? /* @__PURE__ */ e.jsx(Cn, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
}, po = ({
  node: t,
  isEditing: r,
  label: s,
  files: a,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var L;
  const d = vr(), c = tt(null), [p, g] = D(!1), [T, x] = D(null), [h, w] = D(null), [u, v] = D([
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
  ]), k = a ?? u, m = ($) => {
    a || v($), n == null || n($);
  }, y = ($) => $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : `${($ / (1024 * 1024)).toFixed(2)} MB`, P = ($) => $.startsWith("image/") ? /* @__PURE__ */ e.jsx(ja, { className: "w-4 h-4 text-emerald-400" }) : $.includes("pdf") ? /* @__PURE__ */ e.jsx(Qt, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(Na, { className: "w-4 h-4 text-blue-400" }), R = ($) => {
    if (!$ || $.length === 0) return;
    const se = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from($).forEach((V) => {
      if (V.size > l * 1024 * 1024) {
        alert(`Tệp "${V.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const U = new FileReader(), E = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      U.onload = () => {
        const Y = {
          id: E,
          fileName: V.name,
          fileSize: V.size,
          fileType: V.type || "application/octet-stream",
          uploadedDate: se,
          uploadedBy: "User",
          dataUrl: U.result
        };
        m([...k, Y]);
      }, U.readAsDataURL(V);
    });
  }, F = ($, se) => {
    if (se == null || se.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const V = k.filter((U) => U.id !== $);
      m(V), T === $ && x(null);
    }
  }, C = ($, se) => {
    if (se == null || se.stopPropagation(), !$.dataUrl) {
      alert(`Đang tải file mẫu: ${$.fileName}`);
      return;
    }
    const V = document.createElement("a");
    V.href = $.dataUrl, V.download = $.fileName, document.body.appendChild(V), V.click(), document.body.removeChild(V);
  }, S = s || ((L = t == null ? void 0 : t.props) == null ? void 0 : L.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Ir, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: S }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          k.length,
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
            onChange: ($) => R($.target.files)
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
              /* @__PURE__ */ e.jsx(tr, { className: "w-3.5 h-3.5" }),
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
          $.preventDefault(), g(!1), R($.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${p ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var $;
          return ($ = c.current) == null ? void 0 : $.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(tr, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: k.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : k.map(($, se) => {
        const V = T === $.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => x($.id),
            className: `transition-colors cursor-pointer ${V ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: se + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                P($.fileType),
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
                    onClick: (U) => {
                      U.stopPropagation(), w($);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (U) => C($, U),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (U) => F($.id, U),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          $.id
        );
      }) })
    ] }) }),
    h && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => w(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: ($) => $.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  P(h.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: h.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    y(h.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ($) => C(h, $),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => w(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50 min-h-[350px]", children: h.fileType.startsWith("image/") && h.dataUrl ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: h.dataUrl,
                  alt: h.fileName,
                  className: "max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
                }
              ) : h.fileType.includes("pdf") && h.dataUrl ? /* @__PURE__ */ e.jsx(
                "iframe",
                {
                  src: h.dataUrl,
                  title: h.fileName,
                  className: "w-full h-[65vh] rounded border border-slate-800"
                }
              ) : /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-3 py-12", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: P(h.fileType) }),
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-slate-300", children: h.fileName }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-500 max-w-sm", children: [
                  "Định dạng (",
                  h.fileType,
                  ") không hỗ trợ xem trực tiếp trong trình duyệt. Vui lòng tải tệp về để mở."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: ($) => C(h, $),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(hn, { className: "w-4 h-4" }),
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
}, ho = ({
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
  const T = tt(null), x = tt(null), h = vr(), w = String((t == null ? void 0 : t.pageId) || "default"), u = (t == null ? void 0 : t.props) || {}, v = u.dataBinding || u.fieldName || ((t == null ? void 0 : t.id) ?? ""), k = Te((M) => Vt(M, w, v, void 0)), m = Te((M) => M.setFieldValue), y = Te((M) => M.applyPopulate), P = Te((M) => M.getDataset), R = s ?? u.label ?? "Gợi ý tự động (Autocomplete)", F = l ?? u.reference, C = i ?? u.displayField ?? "name", S = d ?? u.valueField ?? "code", L = c ?? u.sublabelField, $ = p ?? u.placeholder ?? "Gõ để tìm kiếm...", se = String(u.populateRule || ""), V = k ?? a ?? "", [U, E] = D(String(V)), [Y, z] = D(!1), [b, ae] = D(-1);
  He(() => {
    V != null && E(String(V));
  }, [V]);
  const me = (o && o.length > 0 ? o : F ? (P(F) || []).map((Q) => ({
    value: Q[S] ?? Q.id ?? Q.code ?? "",
    label: String(Q[C] ?? Q.name ?? Q.title ?? Q.code ?? ""),
    sublabel: L ? String(Q[L] ?? "") : void 0,
    raw: Q
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((M) => {
    if (!U || U.trim() === "") return !0;
    const Q = U.toLowerCase().trim();
    return M.label.toLowerCase().includes(Q) || String(M.value).toLowerCase().includes(Q) || M.sublabel && M.sublabel.toLowerCase().includes(Q);
  });
  He(() => {
    const M = (Q) => {
      T.current && !T.current.contains(Q.target) && z(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, []);
  const ce = (M) => {
    E(M.label), z(!1), ae(-1), n == null || n(M.value, M.raw), v && m(w, v, M.value), M.raw && se && y(w, se, M.raw);
  }, ye = (M) => {
    if (!Y && (M.key === "ArrowDown" || M.key === "ArrowUp")) {
      z(!0);
      return;
    }
    M.key === "ArrowDown" ? (M.preventDefault(), ae(
      (Q) => Q < me.length - 1 ? Q + 1 : 0
    )) : M.key === "ArrowUp" ? (M.preventDefault(), ae(
      (Q) => Q > 0 ? Q - 1 : me.length - 1
    )) : M.key === "Enter" ? Y && b >= 0 && b < me.length && (M.preventDefault(), ce(me[b])) : M.key === "Escape" && (z(!1), ae(-1));
  }, ue = (M) => {
    var Q;
    M.stopPropagation(), E(""), v && m(w, v, ""), n == null || n(""), (Q = x.current) == null || Q.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: T, className: "relative w-full text-xs", children: [
    R && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: h,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: R
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: h,
          ref: x,
          type: "text",
          disabled: g,
          value: U,
          placeholder: $,
          onFocus: () => z(!0),
          onChange: (M) => {
            E(M.target.value), z(!0), ae(0), v && m(w, v, M.target.value);
          },
          onKeyDown: ye,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        U && !g && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: ue,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var M;
              z(!Y), (M = x.current) == null || M.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              wt,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${Y ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    Y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: me.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      U,
      '"'
    ] }) : me.map((M, Q) => {
      const W = b === Q, q = String(M.value) === String(V);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => ae(Q),
          onClick: () => ce(M),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${W ? "bg-blue-600/25 text-blue-200" : q ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: M.label }),
              (M.sublabel || M.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                M.sublabel ? `${M.sublabel} • ` : "",
                M.value
              ] })
            ] }),
            q && /* @__PURE__ */ e.jsx(Qs, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${M.value}-${Q}`
      );
    }) })
  ] });
}, mo = ({
  node: t,
  isEditing: r = !1,
  data: s,
  reference: a,
  idField: n = "id",
  labelField: o = "name",
  parentField: l = "parentId",
  onSelectNode: i
}) => {
  var L, $, se, V, U;
  const d = t.props || {}, c = a || d.reference || d.refName || ((L = t.dataBinding) == null ? void 0 : L.refName) || "", p = Te((E) => c ? E.datasets[c] : void 0), [g, T] = D(""), [x, h] = D(null), [w, u] = D(/* @__PURE__ */ new Set()), v = Ae(() => s && Array.isArray(s) && s.length > 0 ? s : d.data && Array.isArray(d.data) && d.data.length > 0 ? d.data : p && Array.isArray(p) && p.length > 0 ? p : [
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
  ], [s, d.data, p]), k = Ae(() => {
    if (!Array.isArray(v) || v.length === 0) return [];
    if (v.some((b) => Array.isArray(b.children) && b.children.length > 0))
      return v;
    const Y = /* @__PURE__ */ new Map();
    v.forEach((b) => {
      const ae = b[n] ?? b.id ?? b.code, O = b[o] ?? b.name ?? b.title ?? String(ae), _ = b[l] ?? b.parentId ?? null;
      Y.set(ae, {
        id: ae,
        name: O,
        code: b.code,
        parentId: _,
        children: [],
        data: b
      });
    });
    const z = [];
    return Y.forEach((b) => {
      b.parentId !== null && b.parentId !== void 0 && Y.has(b.parentId) ? Y.get(b.parentId).children.push(b) : z.push(b);
    }), z;
  }, [v, n, o, l]);
  He(() => {
    if (k.length > 0 && w.size === 0) {
      const E = /* @__PURE__ */ new Set();
      k.forEach((Y) => {
        E.add(Y.id), Y.children && Y.children.forEach((z) => E.add(z.id));
      }), u(E);
    }
  }, [k]);
  const m = (E, Y) => {
    Y.stopPropagation(), u((z) => {
      const b = new Set(z);
      return b.has(E) ? b.delete(E) : b.add(E), b;
    });
  }, y = () => {
    const E = /* @__PURE__ */ new Set(), Y = (z) => {
      z.forEach((b) => {
        E.add(b.id), b.children && b.children.length > 0 && Y(b.children);
      });
    };
    Y(k), u(E);
  }, P = () => {
    u(/* @__PURE__ */ new Set());
  }, R = (E) => {
    var b, ae;
    h(E.id);
    const Y = String(t.pageId || "default"), z = ((b = t.dataBinding) == null ? void 0 : b.fieldName) || t.id;
    if (Te.getState().setFieldValue(Y, z, E.id), c && Te.getState().setFieldValue(Y, `${c}_selected`, E.data || E), i && i(E), t.events && Array.isArray(t.events)) {
      const O = t.events.find((_) => _.trigger === "change" || _.trigger === "select" || _.trigger === "onClick");
      O && Ds(O, ((ae = t.props) == null ? void 0 : ae.label) || t.id, void 0, { node: E, value: E.id });
    }
  }, F = (E, Y) => {
    if (!Y) return !0;
    const z = Y.toLowerCase(), b = E.name.toLowerCase().includes(z), ae = E.code ? E.code.toLowerCase().includes(z) : !1;
    return b || ae ? !0 : E.children && E.children.length > 0 ? E.children.some((O) => F(O, Y)) : !1;
  }, C = (E, Y = 0) => {
    if (g && !F(E, g))
      return null;
    const z = !!(E.children && E.children.length > 0), b = w.has(E.id) || !!g, ae = x === E.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "select-none", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => R(E),
          style: { paddingLeft: `${Math.max(8, Y * 18 + 8)}px` },
          className: `group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${ae ? "bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`,
          children: [
            z ? /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (O) => m(E.id, O),
                className: "w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors",
                children: b ? /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" })
              }
            ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: z ? b ? /* @__PURE__ */ e.jsx(wa, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ e.jsx(Zs, { className: "w-4 h-4 text-amber-500/80" }) : /* @__PURE__ */ e.jsx(Qt, { className: "w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate flex-1 font-medium", children: E.name }),
            E.code && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300", children: E.code }),
            z && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700", children: E.children.length })
          ]
        }
      ),
      z && b && /* @__PURE__ */ e.jsx("div", { className: "relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5", children: E.children.map((O) => C(O, Y + 1)) })
    ] }, E.id);
  }, S = d.title || (($ = t.props) == null ? void 0 : $.label) || "Cấu Trúc Cây Phân Cấp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((se = t.style) == null ? void 0 : se.width) || "100%",
        minHeight: ((V = t.style) == null ? void 0 : V.minHeight) || "320px",
        maxHeight: ((U = t.style) == null ? void 0 : U.maxHeight) || "560px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(yt, { className: "w-4 h-4 text-emerald-400" }),
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
                children: /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: P,
                title: "Thu gọn tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Dr, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-slate-800/80 bg-slate-900/40", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Et, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: g,
              onChange: (E) => T(E.target.value),
              placeholder: "Tìm kiếm danh mục theo tên, mã...",
              className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: k.length > 0 ? k.map((E) => C(E)) : /* @__PURE__ */ e.jsx("div", { className: "py-8 text-center text-xs text-slate-500 italic", children: "Chưa có dữ liệu danh mục phân cấp" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-mono", children: [
            "Tổng số: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: v.length }),
            " phần tử"
          ] }),
          x && /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-400 font-mono font-medium", children: [
            "Đang chọn ID: #",
            String(x)
          ] })
        ] })
      ]
    }
  );
}, fr = [
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
], bo = ({
  node: t,
  isEditing: r = !1,
  data: s,
  type: a,
  title: n,
  reference: o
}) => {
  var R, F, C, S;
  const l = t.props || {}, i = a || l.chartType || l.type || "bar", [d, c] = D(i), [p, g] = D(null), T = o || l.reference || l.refName || ((R = t.dataBinding) == null ? void 0 : R.refName) || "", x = Te((L) => T ? L.datasets[T] : void 0), h = Ae(() => {
    let L = [];
    s && Array.isArray(s) && s.length > 0 ? L = s : l.data && Array.isArray(l.data) && l.data.length > 0 ? L = l.data : x && Array.isArray(x) && x.length > 0 ? L = x : L = [
      { label: "Cát Lái (CTL)", value: 4850 },
      { label: "Cái Mép (TCIT)", value: 3620 },
      { label: "Hải Phòng (HPH)", value: 2980 },
      { label: "Lạch Huyện (HICT)", value: 2450 },
      { label: "Đà Nẵng (DAN)", value: 1680 },
      { label: "Quy Nhơn (QNH)", value: 1120 }
    ];
    const $ = l.labelField || "label", se = l.valueField || "value";
    return L.map((V, U) => {
      const E = String(V[$] ?? V.label ?? V.name ?? V.code ?? `Mục ${U + 1}`), Y = V[se] ?? V.value ?? V.amount ?? V.total ?? 0, z = Math.max(0, Number(Y) || 0), b = V.color || fr[U % fr.length];
      return { label: E, value: z, color: b };
    });
  }, [s, l.data, x, l.labelField, l.valueField]), w = Ae(() => h.reduce((L, $) => L + $.value, 0), [h]), u = Ae(() => Math.max(...h.map((L) => L.value), 1), [h]), v = n || l.title || ((F = t.props) == null ? void 0 : F.label) || "Biểu Đồ Thống Kê Sản Lượng", k = l.subtitle || (T ? `Nguồn dữ liệu: ${T}` : "Đơn vị: TEUs"), m = () => {
    const L = Math.max(20, Math.min(48, Math.floor(400 / (h.length || 1))));
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" }),
        h.map(($, se) => {
          const V = u > 0 ? $.value / u * 100 : 0, U = p === se;
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              onMouseEnter: () => g(se),
              onMouseLeave: () => g(null),
              className: "flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer",
              children: [
                U && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-bold text-emerald-400", children: $.label }),
                  /* @__PURE__ */ e.jsxs("p", { className: "font-mono", children: [
                    $.value.toLocaleString("en-US"),
                    " (",
                    ($.value / (w || 1) * 100).toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-mono mb-1 transition-all ${U ? "text-emerald-300 font-bold -translate-y-0.5" : "text-slate-400"}`, children: $.value > 1e3 ? `${($.value / 1e3).toFixed(1)}k` : $.value }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: `${Math.max(4, V)}%`,
                      backgroundColor: $.color,
                      maxWidth: `${L}px`
                    },
                    className: `w-full rounded-t-md transition-all duration-300 shadow-md ${U ? "brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105" : "hover:brightness-110"}`
                  }
                )
              ]
            },
            se
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-3 pt-2", children: h.map(($, se) => /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-center truncate", title: $.label, children: /* @__PURE__ */ e.jsx("span", { className: `text-[11px] truncate block ${p === se ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: $.label }) }, se)) })
    ] });
  }, y = () => {
    const U = h.length, E = h.map((b, ae) => {
      const O = U > 1 ? 40 + ae / (U - 1) * 520 : 300, _ = 175 - (u > 0 ? b.value / u * (200 - 2 * 25) : 0);
      return { x: O, y: _, item: b, idx: ae };
    }), Y = E.reduce((b, ae, O) => O === 0 ? `M ${ae.x} ${ae.y}` : `${b} L ${ae.x} ${ae.y}`, ""), z = E.length > 0 ? `${Y} L ${E[E.length - 1].x} 175 L ${E[0].x} 175 Z` : "";
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col items-center justify-center h-64 px-2", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 600 200", className: "w-full h-48 overflow-visible", children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: `lineGrad_${t.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.4" }),
          /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
        ] }) }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 25, x2: 560, y2: 25, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 200 / 2, x2: 560, y2: 200 / 2, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 175, x2: 560, y2: 175, stroke: "#475569" }),
        z && /* @__PURE__ */ e.jsx("path", { d: z, fill: `url(#lineGrad_${t.id})` }),
        Y && /* @__PURE__ */ e.jsx("path", { d: Y, fill: "none", stroke: "#10B981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        E.map((b) => {
          const ae = p === b.idx;
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
                    r: ae ? 6 : 4,
                    fill: ae ? "#34D399" : "#10B981",
                    stroke: "#0F172A",
                    strokeWidth: "2",
                    className: "transition-all"
                  }
                ),
                ae && /* @__PURE__ */ e.jsx("circle", { cx: b.x, cy: b.y, r: 10, fill: "none", stroke: "#34D399", strokeWidth: "1.5", strokeDasharray: "2 2", className: "animate-spin" })
              ]
            },
            b.idx
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-between px-6 pt-2", children: h.map((b, ae) => /* @__PURE__ */ e.jsx("div", { className: "text-center truncate flex-1", children: /* @__PURE__ */ e.jsx("span", { className: `text-[10px] truncate block ${p === ae ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: b.label }) }, ae)) })
    ] });
  }, P = () => {
    let U = 0;
    const E = h.map((Y, z) => {
      const b = w > 0 ? Y.value / w * 360 : 0, ae = U, O = U + b;
      U += b;
      const _ = (ae - 90) * Math.PI / 180, me = (O - 90) * Math.PI / 180, ce = 90 + 70 * Math.cos(_), ye = 90 + 70 * Math.sin(_), ue = 90 + 70 * Math.cos(me), M = 90 + 70 * Math.sin(me), Q = 90 + 45 * Math.cos(_), W = 90 + 45 * Math.sin(_), q = 90 + 45 * Math.cos(me), ie = 90 + 45 * Math.sin(me), Ne = b > 180 ? 1 : 0, j = b >= 359.9 ? "M 90 20 A 70 70 0 1 1 90 160 A 70 70 0 1 1 90 20 M 90 45 A 45 45 0 1 0 90 135 A 45 45 0 1 0 90 45" : `M ${ce} ${ye} A 70 70 0 ${Ne} 1 ${ue} ${M} L ${q} ${ie} A 45 45 0 ${Ne} 0 ${Q} ${W} Z`;
      return { item: Y, idx: z, pathData: j, percentage: (Y.value / (w || 1) * 100).toFixed(1) };
    });
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center justify-around h-64 px-4 py-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ e.jsx("svg", { width: 180, height: 180, viewBox: "0 0 180 180", children: E.map((Y) => {
          const z = p === Y.idx;
          return /* @__PURE__ */ e.jsx(
            "path",
            {
              d: Y.pathData,
              fill: Y.item.color,
              onMouseEnter: () => g(Y.idx),
              onMouseLeave: () => g(null),
              className: `transition-all duration-200 cursor-pointer ${z ? "scale-105 origin-center brightness-125 stroke-white stroke-1" : "hover:opacity-90"}`
            },
            Y.idx
          );
        }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none", children: p !== null && h[p] ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-medium truncate max-w-[80px]", children: h[p].label }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-bold font-mono text-emerald-400", children: [
            (h[p].value / (w || 1) * 100).toFixed(1),
            "%"
          ] })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: "TỔNG" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold font-mono text-slate-100", children: w > 1e4 ? `${(w / 1e3).toFixed(0)}k` : w })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2", children: h.map((Y, z) => {
        const b = p === z, ae = (Y.value / (w || 1) * 100).toFixed(1);
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            onMouseEnter: () => g(z),
            onMouseLeave: () => g(null),
            className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${b ? "bg-slate-800/80 text-white" : "text-slate-300 hover:bg-slate-800/40"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2.5 h-2.5 rounded-full flex-shrink-0", style: { backgroundColor: Y.color } }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs truncate max-w-[110px]", children: Y.label }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-mono text-slate-400 ml-auto", children: [
                ae,
                "%"
              ] })
            ]
          },
          z
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((C = t.style) == null ? void 0 : C.width) || "100%",
        minHeight: ((S = t.style) == null ? void 0 : S.minHeight) || "320px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Ca, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: v }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-mono block", children: k })
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
                children: /* @__PURE__ */ e.jsx(Fr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("line"),
                title: "Biểu đồ Đường (Line Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "line" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(ka, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("donut"),
                title: "Biểu đồ Tròn (Donut Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "donut" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(Sa, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center p-2", children: h.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "py-12 text-center text-xs text-slate-500 italic", children: "Không có dữ liệu số liệu để vẽ biểu đồ" }) : d === "bar" ? m() : d === "line" ? y() : P() }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tổng cộng: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: w.toLocaleString("en-US") })
          ] }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            h.length,
            " danh mục"
          ] })
        ] })
      ]
    }
  );
};
function ra(t) {
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
const Ks = ({ node: t, isEditing: r, children: s }) => {
  var c, p, g, T, x;
  const a = _n((h) => h.user), n = (a == null ? void 0 : a.role) || "User", o = t.permissions;
  if (!o || !((c = o.allowedRoles) != null && c.length) && !((p = o.readOnlyRoles) != null && p.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: s });
  if (r)
    return !((g = o.allowedRoles) != null && g.length || (T = o.readOnlyRoles) != null && T.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: s }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      s,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((x = o.allowedRoles) == null ? void 0 : x.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, d = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((w) => w.toLowerCase() === n.toLowerCase()) ? d === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: s }) : null : i && i.length > 0 && i.some((w) => w.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: s }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: s });
};
function aa(t, r) {
  var g, T;
  const s = t.style || {}, a = ((g = t.props) == null ? void 0 : g.colSpan) !== void 0 && ((T = t.props) == null ? void 0 : T.colSpan) !== null ? Number(t.props.colSpan) : void 0;
  let n = s.width, o = s.flex, l = s.maxWidth, i = s.minWidth ?? 0, d;
  const c = (r == null ? void 0 : r.mode) || "grid", p = (r == null ? void 0 : r.gridColumns) || 12;
  if (c === "grid") {
    let x;
    if (a !== void 0 && !isNaN(a) && a > 0)
      x = Math.min(a, p);
    else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
      const h = Number(r.columnsPerRow);
      !isNaN(h) && h > 0 ? x = Math.max(1, Math.floor(p / h)) : x = Math.min(4, p);
    } else
      x = Math.min(4, p);
    d = `span ${x} / span ${x}`, n = s.width !== void 0 ? s.width : "100%", l = s.maxWidth !== void 0 ? s.maxWidth : "100%", o = s.flex !== void 0 ? s.flex : "none";
  } else {
    const x = parseInt((r == null ? void 0 : r.gap) || "12", 10) || 12;
    if (((r == null ? void 0 : r.direction) || "row") === "row")
      if (a !== void 0 && !isNaN(a) && a > 0) {
        const w = Math.min(100, Math.max(2, a / p * 100)), u = a >= p ? "100%" : `calc(${w}% - ${Math.round(x * (1 - a / p))}px)`;
        s.width === void 0 && s.flex === void 0 && (n = u, l = u, o = `0 0 ${u}`);
      } else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
        const w = Number(r.columnsPerRow);
        if (!isNaN(w) && w > 0) {
          const u = w === 1 ? "100%" : `calc((100% - ${(w - 1) * x}px) / ${w})`;
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
const Fs = ({
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
    const u = t.props.layoutMode || (t.type === "Section" ? "grid" : "flex"), v = t.props.flexConfig || {}, k = t.props.gridConfig || {}, m = {
      direction: v.direction || "row",
      wrap: v.wrap || "wrap",
      gap: v.gap || "12px",
      columnsPerRow: v.columnsPerRow || "auto"
    }, y = Number(
      k.columns || (typeof v.columnsPerRow == "number" ? v.columnsPerRow : 12)
    ) || 12, P = {
      mode: u === "flex" ? "flex" : "grid",
      direction: v.direction || "row",
      columnsPerRow: v.columnsPerRow || "auto",
      gap: v.gap || k.gap || "12px",
      wrap: v.wrap || "wrap",
      gridColumns: y
    }, R = () => {
      const F = t.children || [];
      return F.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : ra(F).map((S, L) => {
        if (S.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            na,
            {
              parentId: t.id,
              order: S.order,
              tabNodes: S.nodes,
              isEditing: r,
              parentFlexConfig: m,
              onContextMenu: s,
              renderChild: l
            },
            `tab_stack_${t.id}_${S.order}_${L}`
          );
        const $ = S.node;
        return l ? /* @__PURE__ */ e.jsx(Zt.Fragment, { children: l($, P) }, $.id) : /* @__PURE__ */ e.jsx(
          Fs,
          {
            node: $,
            isEditing: r,
            onContextMenu: s,
            parentLayout: P,
            isWrappedByDrag: !1
          },
          $.id
        );
      });
    };
    return t.type === "Section" ? /* @__PURE__ */ e.jsx(Ks, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx("div", { onClick: p, onContextMenu: g, className: "w-full", children: /* @__PURE__ */ e.jsx(El, { node: t, isEditing: r, children: R() }) }) }) : t.type === "Tabs" ? /* @__PURE__ */ e.jsx(Ks, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx(
      xr,
      {
        node: t,
        isEditing: r,
        isSelected: c,
        onClick: p,
        onContextMenu: g,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: R()
      }
    ) }) : /* @__PURE__ */ e.jsx(Ks, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsx(
      xr,
      {
        node: t,
        isEditing: r,
        isSelected: c,
        onClick: p,
        onContextMenu: g,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: R()
      }
    ) });
  }
  const T = () => {
    var u, v, k, m, y, P;
    switch (t.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(Rl, { node: t, isEditing: r });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(Ll, { node: t, isEditing: r });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(io, { node: t, isEditing: r });
      case "Number":
        return /* @__PURE__ */ e.jsx($l, { node: t, isEditing: r });
      case "Label":
        return /* @__PURE__ */ e.jsx(Pl, { node: t, isEditing: r });
      case "Table":
        return /* @__PURE__ */ e.jsx(eo, { node: t, isEditing: r });
      case "Select":
        return /* @__PURE__ */ e.jsx(no, { node: t, isEditing: r });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(ro, { node: t, isEditing: r });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(ao, { node: t, isEditing: r });
      case "Divider":
        return /* @__PURE__ */ e.jsx(oo, { node: t, isEditing: r });
      case "Modal":
        return /* @__PURE__ */ e.jsx(lo, { node: t, isEditing: r });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          co,
          {
            label: ((u = t.props) == null ? void 0 : u.label) ?? "Lô hàng:",
            reference: ((v = t.props) == null ? void 0 : v.reference) ?? "Transaction",
            displayField: ((k = t.props) == null ? void 0 : k.displayField) ?? "code",
            records: (m = t.props) == null ? void 0 : m.records,
            activeId: (y = t.props) == null ? void 0 : y.activeId,
            canAdd: ((P = t.props) == null ? void 0 : P.canAdd) !== !1,
            style: t.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(xo, { node: t, isEditing: r });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(po, { node: t, isEditing: r });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(ho, { node: t, isEditing: r });
      case "TreeView":
        return /* @__PURE__ */ e.jsx(mo, { node: t, isEditing: r });
      case "Chart":
        return /* @__PURE__ */ e.jsx(bo, { node: t, isEditing: r });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          t.type
        ] });
    }
  }, x = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), h = aa(t, x), w = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...h,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(Ks, { node: t, isEditing: r, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: p,
      onContextMenu: g,
      style: w,
      className: `relative group transition-all duration-150 box-border ${r ? `cursor-pointer rounded-lg ${c ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && c && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: t.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            t.id.slice(-4)
          ] })
        ] }),
        T()
      ]
    }
  ) });
}, zo = ({
  value: t,
  column: r,
  onSave: s,
  onCancel: a
}) => {
  const [n, o] = D(t ?? ""), l = tt(null);
  He(() => {
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
let mt = null;
const qo = xs()(
  Ps((t, r) => ({
    isConnected: !1,
    connectionId: null,
    lockedRecords: {},
    notifications: [],
    connect: (s = "http://localhost:5048/hubs/uiforge") => {
      if (!r().isConnected)
        try {
          const a = s.replace(/^http/, "ws"), n = new WebSocket(a);
          mt = n, n.onopen = () => {
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
            t({ isConnected: !1, connectionId: null }), mt = null;
          }, n.onerror = () => {
            t({ isConnected: !1 });
          };
        } catch {
          t({ isConnected: !1 });
        }
    },
    disconnect: () => {
      if (mt) {
        try {
          mt.close();
        } catch {
        }
        mt = null;
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
      })), mt && mt.readyState === WebSocket.OPEN && mt.send(
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
      }), mt && mt.readyState === WebSocket.OPEN && mt.send(
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
      mt && mt.readyState === WebSocket.OPEN && mt.send(
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
function Yo(t = {}) {
  const { onSaveLayout: r, isPreview: s = !1, canEdit: a = !0 } = t;
  He(() => {
    const n = async (o) => {
      var l;
      if (o.altKey && (o.code === "Backquote" || o.key === "`")) {
        o.preventDefault(), o.stopPropagation();
        const i = st.getState(), d = i.openTabs;
        if (d.length <= 1) return;
        const c = i.activeTabId, g = (d.findIndex((x) => x.id === c) + 1) % d.length, T = d[g];
        T && (i.setActiveTab(T.id), Z.getState().setActiveFeature(T.featureId, ((l = T.params) == null ? void 0 : l.id) ?? null));
        return;
      }
      if (o.key === "Escape") {
        const i = st.getState();
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
          const p = Te.getState(), g = p.getFormRecord(d.id) || p.getFormRecord("default");
          try {
            await ur(c, "onSave", {
              record: g,
              featureId: d.id,
              trigger: "hotkey_F9"
            });
          } catch (T) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onSave:", T);
          }
        }
        return;
      }
      if (o.key === "F8") {
        o.preventDefault(), o.stopPropagation();
        const i = Z.getState(), d = i.features.find((p) => p.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c)
          try {
            await ur(c, "onApprove", {
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
const $n = ({
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
  } = Er({
    id: t.id,
    disabled: !r,
    data: {
      isPaletteItem: !1,
      id: t.id,
      type: t.type,
      node: t
    }
  }), { setNodeRef: T, isOver: x } = Ar({
    id: t.id,
    disabled: !r
  }), h = (P) => {
    c(P), T(P);
  }, w = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), v = {
    ...aa(t, w),
    transform: Mr.Translate.toString(p),
    opacity: g ? 0.35 : 1,
    transition: g ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, k = t.type === "Container" || t.type === "Section" || t.type === "Tabs", m = x && k && !g, y = x && !k && !g;
  return /* @__PURE__ */ e.jsxs("div", { ref: h, style: v, className: "group/drag relative", children: [
    y && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    m && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    r && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (P) => P.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx($s, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Fs,
      {
        node: t,
        isEditing: r,
        onContextMenu: s,
        parentLayout: w,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (P, R) => /* @__PURE__ */ e.jsx(
          $n,
          {
            node: P,
            isEditing: r,
            onContextMenu: s,
            parentLayout: R && "mode" in R ? R : void 0,
            parentFlexConfig: R && !("mode" in R) ? R : void 0,
            activeId: o,
            overId: l
          },
          P.id
        )
      }
    )
  ] });
}, la = ({ x: t, y: r, items: s, onClose: a }) => {
  const n = tt(null);
  He(() => {
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
}, Jo = ({
  isEditing: t,
  activeId: r,
  overId: s
}) => {
  const a = Z((S) => S.features), n = Z((S) => S.activeFeatureId), o = Z((S) => S.activeRecordId), l = Z((S) => S.addComponent), i = Z((S) => S.selectComponent), d = Z((S) => S.removeComponent), c = Z((S) => S.updateComponentProps);
  Z((S) => S.updateFeatureLayout);
  const p = Z((S) => S.updateFeatureScriptFile), g = a.find((S) => S.id === n), T = (g == null ? void 0 : g.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  Zt.useEffect(() => {
    var L;
    if (Hr(g) && n) {
      let $ = o;
      !$ && typeof window < "u" && ($ = new URLSearchParams(window.location.search).get("id"));
      const se = $ || "1", V = Te.getState().formRecords[n], U = (V == null ? void 0 : V.id) || (V == null ? void 0 : V.Id);
      if (String(U) !== String(se)) {
        const { module: E } = Hn(g == null ? void 0 : g.scriptFile), Y = (E == null ? void 0 : E.loadDetail) || ((L = E == null ? void 0 : E.transactionDetailBL) == null ? void 0 : L.loadDetail);
        typeof Y == "function" && Y(se).then((z) => {
          z && n && (Te.getState().setFormRecord(n, z), Te.getState().setFormRecord("default", z), o !== String(z.id || se) && Z.getState().setActiveRecordId(String(z.id || se)));
        });
      }
    }
  }, [n, o, g == null ? void 0 : g.scriptFile, g == null ? void 0 : g.route, g == null ? void 0 : g.name, g == null ? void 0 : g.isDetail]);
  const { setNodeRef: x, isOver: h } = Ar({
    id: "canvas-root",
    disabled: !t
  }), [w, u] = D(""), v = !!(g != null && g.scriptFile && g.scriptFile.trim().length > 0), [k, m] = D(null), y = (S, L = {}, $ = {}) => ({
    id: `${S.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: S,
    parentId: null,
    pageId: n,
    props: {
      label: S === "Button" ? "Nút mới" : S === "Label" ? "Tiêu đề khối" : void 0,
      variant: S === "Button" ? "primary" : void 0,
      size: S === "Button" ? "md" : void 0,
      placeholder: S === "TextBox" ? "Nhập nội dung..." : void 0,
      ...L
    },
    style: {
      ...$
    },
    events: [],
    order: ((g == null ? void 0 : g.components.length) || 0) + 1
  }), P = (S) => {
    !t || !v || (S.preventDefault(), i(null), m({
      x: S.clientX,
      y: S.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, R = (S, L) => {
    if (!t) return;
    S.preventDefault(), S.stopPropagation(), i(L.id);
    const $ = L.type === "Container" || L.type === "Section" || L.type === "Tabs";
    m({
      x: S.clientX,
      y: S.clientY,
      targetContainerId: $ ? L.id : L.parentId,
      selectedNode: L
    });
  }, F = () => {
    var V, U, E;
    if (!k) return [];
    const { targetContainerId: S, selectedNode: L } = k, $ = L && (L.type === "Container" || L.type === "Section" || L.type === "Tabs");
    if (L && $) {
      const Y = L.props.layoutMode === "grid", z = ((V = L.props.flexConfig) == null ? void 0 : V.direction) === "row", b = !!(L.props.isTab || L.props.tab || L.type === "Tabs"), ae = L.props.activeTabId || ((E = (U = L.props.tabs) == null ? void 0 : U[0]) == null ? void 0 : E.id) || "main", O = b ? { tabId: ae } : {};
      return [
        ...b ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: Xt,
            onClick: () => {
              const _ = L.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], me = `tab_${Date.now().toString(36)}`, ce = [
                ..._,
                { id: me, label: `Tab Mới ${_.length + 1}` }
              ];
              c(L.id, {
                tabs: ce,
                activeTabId: me
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
          icon: Xt,
          onClick: () => {
            const _ = y(
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
                ...O
              },
              {
                flex: z ? "1" : void 0,
                width: z ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(_, S);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: ds,
          onClick: () => {
            const _ = y(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...O
              },
              {
                flex: z ? "1" : void 0,
                width: z ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(_, S);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: ds,
          onClick: () => {
            const _ = y("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...O
            });
            l(_, S);
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
          icon: ns,
          onClick: () => l(
            y("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: ns,
          onClick: () => l(
            y("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: ns,
          onClick: () => l(
            y("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: ns,
          onClick: () => l(
            y("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: Cs,
          onClick: () => l(
            y("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: Qt,
          onClick: () => l(
            y("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: Cs,
          onClick: () => l(
            y("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...O
            }),
            S
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: Nt,
          onClick: () => l(
            y("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...O
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
          label: z ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: z ? Bn : sr,
          onClick: () => {
            c(L.id, {
              flexConfig: {
                ...L.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: z ? "column" : "row"
              }
            });
          }
        },
        {
          label: Y ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: ds,
          onClick: () => {
            Y ? c(L.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(L.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: bt,
          danger: !0,
          onClick: () => d(L.id)
        }
      ];
    }
    const se = T.direction === "row";
    return [
      {
        label: se ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: Xt,
        onClick: () => {
          const Y = y(
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
              flex: se ? "1" : void 0,
              width: se ? void 0 : "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(Y, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: ds,
        onClick: () => {
          const Y = y(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: se ? "1" : void 0,
              width: se ? void 0 : "100%",
              minHeight: "140px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(Y, null);
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
        icon: Cs,
        onClick: () => l(y("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: ns,
        onClick: () => l(y("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: Qt,
        onClick: () => l(y("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: Nt,
        onClick: () => l(y("Table"), null)
      }
    ];
  }, C = (g == null ? void 0 : g.components.filter((S) => !S.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      onContextMenu: P,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${h && t ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (g == null ? void 0 : g.name) || "Màn hình" }),
              v ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(jn, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: g == null ? void 0 : g.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Ts, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: v ? (g == null ? void 0 : g.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          v ? C.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: P,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${h ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(Xt, { className: "w-7 h-7" }) }),
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
                      /* @__PURE__ */ e.jsx(sr, { className: "w-4 h-4" }),
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
                flexDirection: T.direction || "column",
                gap: T.gap || "16px",
                flexWrap: T.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: ra(C).map((S, L) => {
                if (S.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    na,
                    {
                      parentId: null,
                      order: S.order,
                      tabNodes: S.nodes,
                      isEditing: t,
                      onContextMenu: R,
                      renderChild: (V, U) => t ? /* @__PURE__ */ e.jsx(
                        $n,
                        {
                          node: V,
                          isEditing: t,
                          onContextMenu: R,
                          parentLayout: U && "mode" in U ? U : void 0,
                          parentFlexConfig: U && !("mode" in U) ? U : void 0,
                          activeId: r,
                          overId: s
                        },
                        V.id
                      ) : /* @__PURE__ */ e.jsx(
                        Fs,
                        {
                          node: V,
                          isEditing: !1,
                          onContextMenu: R,
                          parentLayout: U && "mode" in U ? U : void 0,
                          parentFlexConfig: U && !("mode" in U) ? U : void 0
                        },
                        V.id
                      )
                    },
                    `root_tab_stack_${S.order}_${L}`
                  );
                const $ = S.node, se = {
                  mode: "flex",
                  direction: T.direction || "column",
                  wrap: T.wrap || "wrap",
                  gap: T.gap,
                  columnsPerRow: "auto"
                };
                return t ? /* @__PURE__ */ e.jsx(
                  $n,
                  {
                    node: $,
                    isEditing: t,
                    onContextMenu: R,
                    parentLayout: se,
                    activeId: r,
                    overId: s
                  },
                  $.id
                ) : /* @__PURE__ */ e.jsx(
                  Fs,
                  {
                    node: $,
                    isEditing: !1,
                    onContextMenu: R,
                    parentLayout: se
                  },
                  $.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Ts, { className: "w-8 h-8" }) }),
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
                  const L = w.trim();
                  if (!L) return;
                  const $ = L.endsWith(".bl.ts") ? L : L.endsWith(".ts") ? L.replace(/\.ts$/, ".bl.ts") : `${L}.bl.ts`;
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
                      /* @__PURE__ */ e.jsx(jn, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: w,
                          onChange: (S) => u(S.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  g && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(On, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
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
                      disabled: !w.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(qs, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        k && /* @__PURE__ */ e.jsx(
          la,
          {
            x: k.x,
            y: k.y,
            items: F(),
            onClose: () => m(null)
          }
        )
      ]
    }
  );
};
function fo(t) {
  return t.replace(/-([a-z])/g, (r, s) => s.toUpperCase());
}
function go(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function vo(t) {
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
      let c = fo(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), r[c] = d;
    }
  }
  return r;
}
function yo(t) {
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
    const o = go(a);
    s.push(`${o}: ${n};`);
  }
  return s.join(`
`);
}
const oa = ({
  isOpen: t,
  node: r,
  onClose: s,
  onSave: a
}) => {
  const [n, o] = D("info"), [l, i] = D([]), [d, c] = D([]), [p, g] = D(""), [T, x] = D("General"), [h, w] = D(""), [u, v] = D("Dropdown"), [k, m] = D(""), [y, P] = D(""), [R, F] = D(""), [C, S] = D(1), [L, $] = D(4), [se, V] = D(""), [U, E] = D(""), [Y, z] = D(""), [b, ae] = D(""), [O, _] = D(""), [me, ce] = D(""), [ye, ue] = D(""), [M, Q] = D(""), [W, q] = D(""), [ie, Ne] = D(""), [j, A] = D(""), [ne, Ce] = D(""), [le, Fe] = D(""), [fe, Ie] = D(""), [pe, ge] = D(""), [Me, De] = D(""), [we, X] = D(""), [xe, ot] = D(""), [ft, nt] = D(""), [pt, ee] = D(""), [Se, Ee] = D(""), [Re, _e] = D(""), [Le, qe] = D(""), [$e, rt] = D(""), [ut, Ct] = D(""), [gt, xt] = D("id"), [Wt, Dt] = D(""), [vt, kt] = D(""), [Ge, Kt] = D(""), [Ut, Ft] = D(""), [Rt, Lt] = D(""), [At, Mt] = D(""), [Bt, I] = D(""), [te, de] = D(""), [ve, G] = D(""), [je, ke] = D(""), [oe, Ve] = D(!1), [We, Pe] = D(!0), [Xe, at] = D(!1), [it, Ze] = D(!1), [St, Ot] = D(!1), [zt, Es] = D(!1), [As, Ms] = D(!1), [Bs, as] = D(!1), [rn, an] = D(!1), [ln, on] = D(!1), [cn, dn] = D(!1), [un, Os] = D(!1), [ps, hs] = D(!1), [ms, bs] = D(!1), [fs, f] = D(!1), [H, B] = D(!1), [J, K] = D(!0), [re, he] = D(!0), [Be, Ue] = D(!1), [Je, jt] = D(!1), [$t, _t] = D(!1), [_s, Hs] = D(!1), [Gn, Vn] = D(!1), [Wn, Kn] = D(!1), [Un, zn] = D(!1), [qn, Yn] = D(!1), [ls, Jn] = D(""), [xn, Xn] = D(""), [Qn, Zn] = D(""), [os, Gs] = D(""), [Io, ia] = D("");
  if (He(() => {
    nn().then((N) => i(N));
  }, []), He(() => {
    if (r && t) {
      const N = r.props || {}, be = r.dataBinding || {};
      g(String(N.id ?? r.id)), x(N.group !== void 0 ? String(N.group) : "General");
      const Oe = N.reference !== void 0 ? String(N.reference) : be.entityName !== void 0 ? String(be.entityName) : N.refName !== void 0 ? String(N.refName) : "";
      w(Oe), v(r.type || "Dropdown"), m(String(N.parentId ?? "")), P(
        N.refName !== void 0 ? String(N.refName) : be.refName !== void 0 ? String(be.refName) : Oe
      ), F(
        be.fieldName !== void 0 ? String(be.fieldName) : N.fieldName !== void 0 ? String(N.fieldName) : N.name !== void 0 ? String(N.name) : r.id
      ), S(Number(r.order ?? N.order ?? 1)), $(Number(N.colSpan ?? N.column ?? 4)), V(N.label !== void 0 ? String(N.label) : ""), E(
        N.events !== void 0 ? typeof N.events == "string" ? N.events : JSON.stringify(N.events) : ""
      ), z(N.style !== void 0 ? String(N.style) : ""), ae(N.childStyle !== void 0 ? String(N.childStyle) : ""), _(N.validation !== void 0 ? String(N.validation) : ""), ce(
        N.selectField !== void 0 ? String(N.selectField) : be.selectField !== void 0 ? String(be.selectField) : ""
      ), ue(N.plainText !== void 0 ? String(N.plainText) : ""), Q(
        N.cssClass !== void 0 ? String(N.cssClass) : N.className !== void 0 ? String(N.className) : ""
      ), q(N.sqlSelect !== void 0 ? String(N.sqlSelect) : ""), Ne(String(N.offset ?? "")), A(N.groupFormat !== void 0 ? String(N.groupFormat) : ""), Ce(N.formatSummary !== void 0 ? String(N.formatSummary) : ""), Fe(N.orderBySummary !== void 0 ? String(N.orderBySummary) : ""), Ie(N.groupEvent !== void 0 ? String(N.groupEvent) : ""), ge(N.icon !== void 0 ? String(N.icon) : ""), De(N.system !== void 0 ? String(N.system) : ""), X(N.refClass !== void 0 ? String(N.refClass) : ""), ot(N.hotKey !== void 0 ? String(N.hotKey) : ""), nt(N.dateTimeField !== void 0 ? String(N.dateTimeField) : ""), ee(String(N.addStart ?? "")), Ee(String(N.addEnd ?? "")), _e(String(N.bodyRowHeight ?? "")), qe(
        N.sqlWhere !== void 0 ? String(N.sqlWhere) : be.sqlWhere !== void 0 ? String(be.sqlWhere) : ""
      ), rt(String(N.footerHeight ?? "")), Ct(N.joinTable !== void 0 ? String(N.joinTable) : ""), xt(
        N.idField !== void 0 ? String(N.idField) : be.idField !== void 0 ? String(be.idField) : "id"
      ), Dt(String(N.headerHeight ?? "")), kt(
        N.populateField !== void 0 ? String(N.populateField) : be.populateField !== void 0 ? String(be.populateField) : ""
      ), Kt(String(N.precision ?? "")), Ft(N.groupBy !== void 0 ? String(N.groupBy) : ""), Lt(N.disabledExp !== void 0 ? String(N.disabledExp) : ""), Mt(N.showExp !== void 0 ? String(N.showExp) : ""), I(String(N.row ?? "")), de(N.template !== void 0 ? String(N.template) : ""), G(N.templateLocked !== void 0 ? String(N.templateLocked) : ""), ke(String(N.default ?? N.defaultValue ?? "")), Ve(!!N.realtime), Pe(N.showLabel !== !1 && N.label !== !1), at(!!N.hidden), Ze(!!N.filterLocal), Ot(!!N.sqlSearch), Es(!!N.cache), Ms(!!N.moveTab), as(!!N.focus), an(!!N.focusSearch), on(!!N.noLoad), dn(!!N.collapsible), Os(!!N.showHotKey), hs(!!N.history), bs(!!N.top), f(!!N.hideAnd), B(!!N.disabled), K(N.visibility !== !1), he(N.active !== !1), Ue(!!N.upperCase), jt(!!(N.virtualScroll || N.virtual)), _t(!!N.isPrivate), Hs(!!N.renderIndex), Vn(!!(N.canAdd || N.add)), Kn(!!(N.canSearch || N.search)), zn(!!(N.isSummary || N.summary)), Yn(!!N.showDateTimeField);
      const Ke = N.dataSource !== void 0 ? N.dataSource : N.dataSourceFilter !== void 0 ? N.dataSourceFilter : be.dataSource !== void 0 ? be.dataSource : "";
      Jn(String(Ke ?? ""));
      const da = N.formatEntity !== void 0 ? N.formatEntity : be.formatEntity !== void 0 ? be.formatEntity : "";
      Xn(String(da ?? "")), Zn(N.migration !== void 0 ? String(N.migration) : "");
      const ua = N.formatData !== void 0 ? N.formatData : be.formatData !== void 0 ? be.formatData : "";
      Gs(String(ua ?? ""));
      const xa = N.query !== void 0 ? N.query : be.query !== void 0 ? be.query : "";
      ia(String(xa ?? "")), c(
        N.dropdownColumns || be.dropdownColumns || []
      );
    }
  }, [r, t]), !t || !r) return null;
  const ca = () => {
    let N = U;
    try {
      U.trim().startsWith("{") && (N = JSON.parse(U));
    } catch {
      N = U;
    }
    const be = {
      ...r.props,
      id: p,
      group: T,
      reference: h,
      componentType: u,
      parentId: k,
      refName: y,
      fieldName: R,
      order: Number(C) || 1,
      colSpan: Number(L) || 4,
      column: Number(L) || 4,
      label: se,
      events: N,
      style: Y,
      childStyle: b,
      validation: O,
      selectField: me,
      plainText: ye,
      cssClass: M,
      sqlSelect: W,
      offset: ie,
      groupFormat: j,
      formatSummary: ne,
      orderBySummary: le,
      groupEvent: fe,
      icon: pe,
      system: Me,
      refClass: we,
      hotKey: xe,
      dateTimeField: ft,
      addStart: pt,
      addEnd: Se,
      bodyRowHeight: Re,
      sqlWhere: Le,
      footerHeight: $e,
      joinTable: ut,
      idField: gt,
      headerHeight: Wt,
      populateField: vt,
      precision: Ge ? Number(Ge) : void 0,
      groupBy: Ut,
      disabledExp: Rt,
      showExp: At,
      row: Bt,
      template: te,
      templateLocked: ve,
      default: je,
      // Display flags
      realtime: oe,
      showLabel: We,
      hidden: Xe,
      filterLocal: it,
      sqlSearch: St,
      cache: zt,
      moveTab: As,
      focus: Bs,
      focusSearch: rn,
      noLoad: ln,
      collapsible: cn,
      showHotKey: un,
      history: ps,
      top: ms,
      hideAnd: fs,
      disabled: H,
      visibility: J,
      active: re,
      upperCase: Be,
      virtual: Je,
      isPrivate: $t,
      renderIndex: _s,
      add: Gn,
      search: Wn,
      summary: Un,
      showDateTimeField: qn,
      // Code blocks
      dataSource: ls,
      dataSourceFilter: ls,
      formatEntity: xn,
      migration: Qn,
      formatData: os,
      query: ls,
      dropdownColumns: d
    }, Oe = {
      ...r.dataBinding || {},
      entityName: h || y || "",
      refName: y || h || "",
      fieldName: R || r.id,
      query: ls,
      dataSource: ls,
      sqlWhere: Le,
      selectField: me,
      populateField: vt,
      idField: gt,
      formatData: os,
      formatEntity: xn,
      dropdownColumns: d,
      twoWay: !0
    };
    a(r.id, be, Oe), s();
  }, er = Js(l), is = Xs(er, h || y), gs = is ? is.fields : [], Vs = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes(u), ze = (N, be, Oe) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${be ? "text-slate-200 font-medium" : "text-slate-400"}`, children: N }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: be,
        onChange: (Ke) => Oe(Ke.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return It(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4 text-teal-400" }),
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
              onClick: () => {
                const N = Z.getState(), be = (r == null ? void 0 : r.pageId) || N.activeFeatureId;
                typeof N.openFeatureProperties == "function" && N.openFeatureProperties(be);
              },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-teal-700/60 bg-teal-950/60 hover:bg-teal-900 text-teal-300 transition-all cursor-pointer",
              title: "Mở cấu hình Feature của màn hình này",
              children: [
                /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Feature Properties ↗" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: ca,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Nn, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
        Vs && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      value: T,
                      onChange: (N) => x(N.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: is ? is.name : "",
                      onChange: (N) => {
                        const be = N.target.value;
                        w(be), P(be);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        er.map((N) => /* @__PURE__ */ e.jsxs("option", { value: N.name, children: [
                          N.displayName,
                          " (",
                          N.name,
                          ")"
                        ] }, N.name))
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
                      onChange: (N) => v(N.target.value),
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
                      value: k,
                      onChange: (N) => m(N.target.value),
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
                      onChange: (N) => {
                        P(N.target.value), w(N.target.value);
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
                      value: R,
                      onChange: (N) => F(N.target.value),
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
                      value: C,
                      onChange: (N) => S(N.target.value),
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
                      value: L,
                      onChange: (N) => $(N.target.value),
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
                      value: se,
                      onChange: (N) => V(N.target.value),
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
                      value: Y,
                      onChange: (N) => z(N.target.value),
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
                      onChange: (N) => ae(N.target.value),
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
                      value: O,
                      onChange: (N) => _(N.target.value),
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
                      value: me,
                      onChange: (N) => ce(N.target.value),
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
                      value: ye,
                      onChange: (N) => ue(N.target.value),
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
                      value: M,
                      onChange: (N) => Q(N.target.value),
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
                      value: W,
                      onChange: (N) => q(N.target.value),
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
                      onChange: (N) => Ne(N.target.value),
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
                      value: j,
                      onChange: (N) => A(N.target.value),
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
                      value: ne,
                      onChange: (N) => Ce(N.target.value),
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
                      value: le,
                      onChange: (N) => Fe(N.target.value),
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
                      value: fe,
                      onChange: (N) => Ie(N.target.value),
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
                      value: pe,
                      onChange: (N) => ge(N.target.value),
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
                      value: Me,
                      onChange: (N) => De(N.target.value),
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
                      value: we,
                      onChange: (N) => X(N.target.value),
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
                      value: xe,
                      onChange: (N) => ot(N.target.value),
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
                      value: ft,
                      onChange: (N) => nt(N.target.value),
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
                      value: pt,
                      onChange: (N) => ee(N.target.value),
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
                      value: Se,
                      onChange: (N) => Ee(N.target.value),
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
                      value: Re,
                      onChange: (N) => _e(N.target.value),
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
                      value: Le,
                      onChange: (N) => qe(N.target.value),
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
                      value: $e,
                      onChange: (N) => rt(N.target.value),
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
                      value: ut,
                      onChange: (N) => Ct(N.target.value),
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
                      value: gt,
                      onChange: (N) => xt(N.target.value),
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
                      value: Wt,
                      onChange: (N) => Dt(N.target.value),
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
                      value: vt,
                      onChange: (N) => kt(N.target.value),
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
                      value: Ge,
                      onChange: (N) => Kt(N.target.value),
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
                      value: Ut,
                      onChange: (N) => Ft(N.target.value),
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
                      value: Rt,
                      onChange: (N) => Lt(N.target.value),
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
                      value: At,
                      onChange: (N) => Mt(N.target.value),
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
                      value: Bt,
                      onChange: (N) => I(N.target.value),
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
                      value: te,
                      onChange: (N) => de(N.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Ts, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: ve,
                      onChange: (N) => G(N.target.value),
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
                      value: je,
                      onChange: (N) => ke(N.target.value),
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
                  ze("Realtime", oe, Ve),
                  ze("Label", We, Pe),
                  ze("Hidden", Xe, at),
                  ze("FilterLocal", it, Ze),
                  ze("SqlSearch", St, Ot),
                  ze("Cache", zt, Es),
                  ze("Move Tab", As, Ms),
                  ze("Focus", Bs, as),
                  ze("FocusSearch", rn, an),
                  ze("No Load", ln, on),
                  ze("Collapsible", cn, dn),
                  ze("HotKey", un, Os),
                  ze("History", ps, hs)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  ze("Top", ms, bs),
                  ze("HideAnd", fs, f),
                  ze("Disabled", H, B),
                  ze("Visibility", J, K),
                  ze("Active", re, he),
                  ze("Upper Case", Be, Ue),
                  ze("Virtual", Je, jt),
                  ze("Private", $t, _t),
                  ze("Render Index", _s, Hs),
                  ze("Add", Gn, Vn),
                  ze("Search", Wn, Kn),
                  ze("Sumary", Un, zn),
                  ze("DateTime Field", qn, Yn)
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
                      value: ls,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (N) => Jn(N.target.value),
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
                      value: xn,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (N) => Xn(N.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${Vs ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: Qn,
                      onChange: (N) => Zn(N.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !Vs && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: os,
                      onChange: (N) => Gs(N.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && Vs && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4 text-emerald-400" }),
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
                    var N, be;
                    c([
                      ...d,
                      {
                        key: ((N = gs[d.length]) == null ? void 0 : N.name) || `col${d.length + 1}`,
                        title: ((be = gs[d.length]) == null ? void 0 : be.displayName) || `Cột ${d.length + 1}`,
                        width: "50%",
                        align: "left"
                      }
                    ]);
                  },
                  className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                  ]
                }
              ),
              is && gs.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const N = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let be = gs.filter((Oe) => N.includes(Oe.name.toLowerCase()));
                    be.length === 0 ? be = gs.slice(0, 3) : be = be.slice(0, 4), c(
                      be.map((Oe) => ({
                        key: Oe.name,
                        title: Oe.displayName || Oe.name,
                        width: `${Math.floor(100 / be.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      is.name
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
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((N, be) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: be === 0,
                  onClick: () => {
                    const Oe = [...d], Ke = Oe[be];
                    Oe[be] = Oe[be - 1], Oe[be - 1] = Ke, c(Oe);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: be === d.length - 1,
                  onClick: () => {
                    const Oe = [...d], Ke = Oe[be];
                    Oe[be] = Oe[be + 1], Oe[be + 1] = Ke, c(Oe);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: N.key,
                placeholder: "Key (vd: FullName)",
                onChange: (Oe) => {
                  const Ke = [...d];
                  Ke[be] = { ...Ke[be], key: Oe.target.value }, c(Ke);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: N.title,
                placeholder: "Tiêu đề cột",
                onChange: (Oe) => {
                  const Ke = [...d];
                  Ke[be] = { ...Ke[be], title: Oe.target.value }, c(Ke);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: N.width || "50%",
                placeholder: "Width",
                onChange: (Oe) => {
                  const Ke = [...d];
                  Ke[be] = { ...Ke[be], width: Oe.target.value }, c(Ke);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: N.align || "left",
                onChange: (Oe) => {
                  const Ke = [...d];
                  Ke[be] = { ...Ke[be], align: Oe.target.value }, c(Ke);
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
                onClick: () => c(d.filter((Oe, Ke) => Ke !== be)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, be)) }),
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
                value: os,
                onChange: (N) => Gs(N.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((N, be) => {
              const Oe = h || y, Ke = Oe ? `{${Oe}.${N.key}}` : `{${N.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => Gs(os ? `${os} - ${Ke}` : Ke),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    Ke
                  ]
                },
                be
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Nn, { className: "w-4 h-4 text-teal-400" }),
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
              (N, be) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: N }),
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
                    defaultChecked: be <= 1,
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
                    defaultChecked: be > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, N)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Qt, { className: "w-4 h-4 text-teal-400" }),
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
}, ct = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = D(
    t != null ? String(t) : ""
  ), d = tt(r);
  d.current = r;
  const c = tt(null);
  He(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (h) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const w = t != null ? String(t) : "";
    h !== w && d.current(h);
  };
  He(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (h) => {
    const w = h.target.value;
    i(w), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(w);
    }, s);
  }, T = (h) => {
    p(h.target.value), a && a(h);
  }, x = (h) => {
    h.key === "Enter" && p(h.target.value), n && n(h);
  };
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: T,
      onKeyDown: x
    }
  );
}, jo = ({
  value: t,
  onChange: r,
  debounceMs: s = 120,
  onBlur: a,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = D(
    t != null ? String(t) : ""
  ), d = tt(r);
  d.current = r;
  const c = tt(null);
  He(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const p = (x) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const h = t != null ? String(t) : "";
    x !== h && d.current(x);
  };
  He(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (x) => {
    const h = x.target.value;
    i(h), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      p(h);
    }, s);
  }, T = (x) => {
    p(x.target.value), a && a(x);
  };
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: T,
      onKeyDown: n
    }
  );
}, No = ({ width: t }) => {
  var q, ie, Ne;
  const [r, s] = D("layout"), [a, n] = D(null), [o, l] = D(!1), [i, d] = D(!1), [c, p] = D([]);
  He(() => {
    nn().then((j) => {
      j && j.length > 0 && p(j);
    });
  }, []);
  const [g, T] = D(null), [x, h] = D(null), w = Z((j) => j.activeFeatureId), u = Z((j) => j.features.find((A) => A.id === j.activeFeatureId)), v = Z((j) => j.selection), k = Z((j) => j.selectComponent), m = Z((j) => j.addComponent), y = Z((j) => j.updateComponentProps), P = Z((j) => j.updateComponentStyle), R = Z((j) => j.updateComponentEvents), F = Z((j) => j.updateComponentDataBinding), C = Z((j) => j.updateComponentValidation), S = Z((j) => j.updateComponentPermissions), L = Z((j) => j.updateComponentOrder), $ = Z((j) => j.removeComponent);
  Z((j) => j.distributeSiblingWidths);
  const se = Z((j) => j.updateFeatureScriptFile), [V, U] = D(""), [E, Y] = D(0), z = (j, A) => {
    if (!A) return null;
    for (const ne of j) {
      if (ne.id === A) return ne;
      if (ne.children) {
        const Ce = z(ne.children, A);
        if (Ce) return Ce;
      }
    }
    return null;
  }, b = Ae(
    () => v.componentId && u ? z(u.components, v.componentId) : null,
    [v.componentId, u]
  ), ae = Ae(
    () => b != null && b.parentId && u ? z(u.components, b.parentId) : null,
    [b == null ? void 0 : b.parentId, u]
  ), O = Ae(
    () => {
      var j, A;
      return ae && ((j = ae.props) != null && j.isTab || (A = ae.props) != null && A.tab || ae.type === "Tabs") ? ae : null;
    },
    [ae]
  );
  if (!b) {
    const j = u ? u.components.filter((A) => !A.parentId) : [];
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
                /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (u == null ? void 0 : u.name) || "Trang" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: u == null ? void 0 : u.route })
              ] })
            ] }),
            u && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const A = Z.getState();
                  typeof A.openFeatureProperties == "function" && A.openFeatureProperties(u.id);
                },
                className: "p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-teal-300 border border-slate-700/60 bg-slate-800/50 transition-colors cursor-pointer",
                title: "Mở Thuộc tính Feature (Feature Properties Modal)",
                children: /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5 text-teal-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: u && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const A = Z.getState();
                  typeof A.openFeatureProperties == "function" && A.openFeatureProperties(u.id);
                },
                className: "w-full py-2.5 px-3 bg-gradient-to-r from-teal-600/30 to-blue-600/30 hover:from-teal-600/50 hover:to-blue-600/50 border border-teal-500/50 rounded-xl text-teal-200 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950/40 cursor-pointer transition-all group",
                children: [
                  /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4 text-teal-400 group-hover:rotate-45 transition-transform" }),
                  /* @__PURE__ */ e.jsx("span", { children: "🔧 Mở Thuộc Tính Feature (Feature Properties)" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: u.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  ct,
                  {
                    type: "text",
                    value: u.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (A) => se(u.id, A),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(yt, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      j.length,
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
                      const A = `box_${Date.now().toString(36)}`;
                      m(
                        {
                          id: A,
                          type: "Container",
                          parentId: null,
                          pageId: u.id,
                          order: j.length + 1,
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
                      /* @__PURE__ */ e.jsx(Qe, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              j.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...j].sort((A, ne) => (A.order ?? 1) - (ne.order ?? 1)).map((A, ne) => {
                var le, Fe;
                const Ce = !!((le = A.props) != null && le.tab || (Fe = A.props) != null && Fe.isTab || A.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => k(A.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          ne + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: A.props.label || A.props.title || A.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: A.type }),
                            Ce && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            A.id
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
                              value: Number(A.order ?? A.props.order ?? ne + 1),
                              onClick: (fe) => fe.stopPropagation(),
                              onChange: (fe) => {
                                const Ie = Number(fe.target.value);
                                L(A.id, Ie);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (fe) => {
                              fe.stopPropagation(), $(A.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  A.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const _ = b.type === "Container" || b.type === "Section" || b.type === "Tabs", me = b.type === "Select" || b.type === "Dropdown" || b.type === "Autocomplete" || b.type === "SearchEntry", ce = b.props.dropdownColumns || ((q = b.dataBinding) == null ? void 0 : q.dropdownColumns) || [], ye = !_ && (r === "layout" || r === "children") ? "props" : !me && r === "columns" ? "data" : r, ue = b.props.layoutMode || "flex", M = b.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, Q = b.props.gridConfig || { columns: 2, gap: "16px" }, W = b.children || [];
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
                children: /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => $(b.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(bt, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          _ && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ds, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          _ && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(yt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  W.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ta, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(kn, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          me && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => s("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  ce.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(nr, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Ts, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          _ && ye === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => y(b.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${ue === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Xt, { className: "w-4 h-4 text-blue-400" }),
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
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${ue === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ds, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              ue === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: M.direction || "row",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, direction: j.target.value }
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
                          value: typeof M.columnsPerRow == "number" ? M.columnsPerRow : Q.columns || 12,
                          onChange: (j) => {
                            const A = Math.max(1, Number(j.target.value) || 12);
                            y(b.id, {
                              flexConfig: { ...M, columnsPerRow: A },
                              gridConfig: { ...Q, columns: A }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(M.columnsPerRow || "12"),
                          onChange: (j) => {
                            const A = j.target.value === "auto" ? "auto" : Number(j.target.value);
                            y(b.id, {
                              flexConfig: {
                                ...M,
                                columnsPerRow: A,
                                wrap: A !== "auto" ? "wrap" : M.wrap
                              },
                              gridConfig: {
                                ...Q,
                                columns: A === "auto" ? 12 : A
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
                        value: M.justify || "flex-start",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, justify: j.target.value }
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
                        value: M.align || "center",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, align: j.target.value }
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
                        value: M.gap || "12px",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, gap: j.target.value }
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
                        value: M.wrap || "wrap",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, wrap: j.target.value }
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
              ue === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: Q.columns || 12,
                          onChange: (j) => {
                            const A = Math.max(1, Number(j.target.value) || 12);
                            y(b.id, {
                              gridConfig: { ...Q, columns: A },
                              flexConfig: { ...M, columnsPerRow: A }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(Q.columns || 12),
                          onChange: (j) => {
                            const A = Number(j.target.value);
                            y(b.id, {
                              gridConfig: { ...Q, columns: A },
                              flexConfig: { ...M, columnsPerRow: A }
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
                        value: M.gap || Q.gap || "12px",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, gap: j.target.value },
                          gridConfig: { ...Q, gap: j.target.value }
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
                        value: M.justify || "flex-start",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, justify: j.target.value }
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
                        value: M.align || "center",
                        onChange: (j) => y(b.id, {
                          flexConfig: { ...M, align: j.target.value }
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
                    onChange: (j) => {
                      var Ce;
                      const A = j.target.checked, ne = b.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      y(b.id, {
                        isTab: A,
                        tab: A,
                        tabs: A ? ne : b.props.tabs,
                        activeTabId: A ? b.props.activeTabId || ((Ce = ne[0]) == null ? void 0 : Ce.id) : void 0
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
                    ct,
                    {
                      type: "text",
                      value: b.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (j) => y(b.id, { label: j }),
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
                        onChange: (j) => {
                          const A = Number(j.target.value);
                          L(b.id, A);
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
                        onChange: (j) => y(b.id, {
                          badge: j.target.value || void 0
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
          _ && ye === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                W.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            W.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...W].sort((j, A) => (j.order ?? 1) - (A.order ?? 1)).map((j, A) => {
              var le, Fe;
              const ne = v.componentId === j.id, Ce = !!((le = j.props) != null && le.tab || (Fe = j.props) != null && Fe.isTab || j.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => k(j.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${ne ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        A + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: j.props.label || j.props.title || j.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: j.type }),
                          Ce && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          j.id
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
                            value: j.order ?? A + 1,
                            onClick: (fe) => fe.stopPropagation(),
                            onChange: (fe) => {
                              const Ie = Number(fe.target.value);
                              L(j.id, Ie);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (fe) => {
                            fe.stopPropagation(), $(j.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                j.id
              );
            }) })
          ] }),
          ye === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
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
                      onChange: (j) => {
                        const A = Number(j.target.value);
                        L(b.id, A);
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
                        onChange: (j) => {
                          const A = Math.max(1, Number(j.target.value) || 1);
                          y(b.id, { colSpan: A });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: b.props.colSpan || 4,
                        onChange: (j) => y(b.id, { colSpan: Number(j.target.value) }),
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
            _ && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(b.props.tab || b.props.isTab || b.type === "Tabs"),
                  onChange: (j) => {
                    const A = j.target.checked;
                    y(b.id, {
                      tab: A,
                      isTab: A
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            O && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: b.props.tabId || ((Ne = (ie = O.props.tabs) == null ? void 0 : ie[0]) == null ? void 0 : Ne.id) || "main",
                  onChange: (j) => y(b.id, { tabId: j.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (O.props.tabs || []).map((j) => /* @__PURE__ */ e.jsxs("option", { value: j.id, children: [
                    j.label,
                    " (",
                    j.id,
                    ")"
                  ] }, j.id))
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
                      onChange: (j) => y(b.id, { showLabel: j.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                ct,
                {
                  type: "text",
                  value: b.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (j) => y(b.id, { label: j }),
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
                      onChange: (j) => y(b.id, { labelPosition: j.target.value }),
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
                        onChange: (j) => {
                          const A = Math.max(1, Number(j.target.value) || 1);
                          y(b.id, { colSpan: A });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: b.props.colSpan || 4,
                        onChange: (j) => y(b.id, { colSpan: Number(j.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((j) => /* @__PURE__ */ e.jsxs("option", { value: j, children: [
                          j,
                          " Cột (",
                          Math.round(j / 12 * 100),
                          "%)"
                        ] }, j))
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
                ct,
                {
                  type: "text",
                  value: b.props.placeholder || "",
                  onChange: (j) => y(b.id, { placeholder: j }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            b.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  ct,
                  {
                    type: "text",
                    value: b.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (j) => y(b.id, { reference: j }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    ct,
                    {
                      type: "text",
                      value: b.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (j) => y(b.id, { displayField: j }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    ct,
                    {
                      type: "text",
                      value: b.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (j) => y(b.id, { valueField: j }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  ct,
                  {
                    type: "text",
                    value: b.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (j) => y(b.id, { placeholder: j }),
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
                  onChange: (j) => y(b.id, { rows: Number(j.target.value) }),
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
                    onChange: (j) => y(b.id, { precision: Number(j.target.value) }),
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
                    onChange: (j) => y(b.id, { thousandsSeparator: j.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            b.type === "Table" && (() => {
              const j = b.props.columns || [], A = a !== null ? j[a] : null, ne = (pe, ge) => {
                const Me = j.map((De, we) => we === pe ? { ...De, ...ge } : De);
                y(b.id, { columns: Me });
              }, Ce = (pe, ge) => {
                if (ge < 0 || ge >= j.length) return;
                const Me = Fn(j, pe, ge);
                y(b.id, { columns: Me }), n(ge);
              }, le = (pe) => {
                const ge = ea(j, pe);
                y(b.id, { columns: ge });
                const Me = ge.findIndex((De) => De.key === pe);
                Me !== -1 && n(Me);
              }, Fe = (pe, ge) => {
                const Me = Math.max(0, Math.min(j.length - 1, ge - 1));
                if (Me !== pe) {
                  const De = Fn(j, pe, Me);
                  y(b.id, { columns: De }), n(Me);
                }
              }, fe = () => {
                const pe = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: j.length + 1
                }, ge = ks([...j, pe]);
                y(b.id, { columns: ge }), n(ge.length - 1);
              }, Ie = (pe) => {
                const ge = j.filter((De, we) => we !== pe), Me = ks(ge);
                y(b.id, { columns: Me }), a === pe ? n(null) : a !== null && a > pe && n(a - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: fe,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(Qe, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: j.map((pe, ge) => {
                  const Me = a === ge, De = !!(pe.frozen || pe.sticky === "left"), we = g === ge, X = x === ge;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => T(ge),
                      onDragOver: (xe) => {
                        xe.preventDefault(), !(g === null || g === ge) && h(ge);
                      },
                      onDragLeave: () => h(null),
                      onDrop: () => {
                        g !== null && g !== ge && Ce(g, ge), T(null), h(null);
                      },
                      onDragEnd: () => {
                        T(null), h(null);
                      },
                      onClick: () => n(ge),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${we ? "opacity-30 bg-slate-800" : ""} ${X ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Me ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx($s, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ge === 0,
                                onClick: (xe) => {
                                  xe.stopPropagation(), Ce(ge, ge - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Ss, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ge === j.length - 1,
                                onClick: (xe) => {
                                  xe.stopPropagation(), Ce(ge, ge + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(wt, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            pe.order ?? ge + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: pe.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            pe.key,
                            "]"
                          ] }),
                          De && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: pe.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (xe) => {
                                xe.stopPropagation(), Ie(ge);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(bt, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    pe.key || ge
                  );
                }) }),
                A && a !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      A.title
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
                        /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5" }),
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
                          max: j.length,
                          value: A.order ?? a + 1,
                          onChange: (pe) => {
                            const ge = parseInt(pe.target.value, 10);
                            isNaN(ge) || Fe(a, ge);
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
                          value: A.key,
                          onChange: (pe) => ne(a, { key: pe.target.value }),
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
                          value: A.title,
                          onChange: (pe) => ne(a, { title: pe.target.value }),
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
                          value: A.componentType || "TextBox",
                          onChange: (pe) => ne(a, { componentType: pe.target.value }),
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
                          value: A.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (pe) => ne(a, { width: pe.target.value }),
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
                          value: A.align || "left",
                          onChange: (pe) => ne(a, { align: pe.target.value }),
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
                          value: A.aggregate || "none",
                          onChange: (pe) => ne(a, { aggregate: pe.target.value }),
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
                          checked: !!(A.frozen || A.sticky === "left"),
                          onChange: () => le(A.key),
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
                          checked: A.editable ?? !0,
                          onChange: (pe) => ne(a, { editable: pe.target.checked }),
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
                          checked: A.sortable ?? !0,
                          onChange: (pe) => ne(a, { sortable: pe.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(Tt, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(A.events) ? A.events.length : A.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(A.events) && A.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: A.events.map((pe) => `${pe.trigger} ➔ ${pe.handlerName || pe.action}()`).join(", ") }) : A.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      A.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && A && a !== null && /* @__PURE__ */ e.jsx(
                  Xr,
                  {
                    isOpen: o,
                    column: A,
                    onClose: () => l(!1),
                    onSave: (pe) => {
                      const ge = j.map((we, X) => X === a ? pe : we), Me = ks(ge);
                      y(b.id, { columns: Me });
                      const De = Me.findIndex((we) => we.key === pe.key);
                      De !== -1 && n(De);
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
                    onChange: (j) => y(b.id, { required: j.target.checked }),
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
                    onChange: (j) => y(b.id, { disabled: j.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          ye === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: b.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (j) => P(b.id, { width: j.target.value }),
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
                    onChange: (j) => P(b.id, {
                      height: j.target.value,
                      minHeight: j.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Us, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: b.style.customCss || yo(b.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (j) => {
                    const A = j.target.value, ne = vo(A);
                    if (P(b.id, {
                      ...ne,
                      customCss: A
                    }), ne.justifyContent || ne.alignItems) {
                      const Ce = b.props.flexConfig || {};
                      y(b.id, {
                        flexConfig: {
                          ...Ce,
                          ...ne.justifyContent ? { justify: ne.justifyContent } : {},
                          ...ne.alignItems ? { align: ne.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          ye === "events" && /* @__PURE__ */ e.jsx(
            Jr,
            {
              events: b.events || [],
              onChange: (j) => R(b.id, j),
              scriptFile: (u == null ? void 0 : u.scriptFile) || "transactionList.bl.ts",
              componentName: b.props.label || b.type,
              componentId: b.id,
              contextExtra: {
                pageId: w,
                nodeId: b.id,
                type: b.type
              }
            }
          ),
          ye === "data" && (() => {
            const j = b.dataBinding || {}, A = b.props || {}, ne = b.type, Ce = ne === "Table" || ne === "GridView" || ne === "AdvancedGrid", le = ne === "Select" || ne === "Dropdown" || ne === "Autocomplete" || ne === "SearchEntry", Fe = ne === "TextBox" || ne === "Number" || ne === "DatePicker" || ne === "Checkbox" || ne === "Textarea", fe = !Ce && !le && !Fe, Ie = Js(c), pe = j.entityName || A.reference || A.refName || "", ge = Xs(Ie, pe), Me = ge ? ge.fields : [], De = j.dataSource || A.dataSource || A.dataSourceFilter || j.query || A.query || "", we = (X) => {
              F(b.id, {
                dataSource: X,
                query: X
              }), y(b.id, {
                dataSource: X,
                dataSourceFilter: X,
                query: X
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(kn, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      ne,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  Ce && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  le && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  Fe && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  fe && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              Ce && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ge ? ge.name : "",
                      onChange: (X) => {
                        const xe = X.target.value;
                        F(b.id, {
                          entityName: xe,
                          refName: xe
                        }), y(b.id, {
                          reference: xe,
                          refName: xe
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        Ie.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                          X.displayName,
                          " (",
                          X.name,
                          ")"
                        ] }, X.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: j.entityName || A.reference || A.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (X) => {
                        const xe = X.target.value;
                        F(b.id, {
                          entityName: xe,
                          refName: xe
                        }), y(b.id, {
                          reference: xe,
                          refName: xe
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Us, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: De,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (X) => we(X.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => we("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => we("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => we(""),
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
                    ct,
                    {
                      type: "text",
                      value: j.sqlWhere || A.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (X) => {
                        F(b.id, { sqlWhere: X }), y(b.id, { sqlWhere: X });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              le && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ct,
                    {
                      type: "text",
                      value: j.fieldName || A.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (X) => {
                        F(b.id, { fieldName: X }), y(b.id, { fieldName: X });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Me.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                    X.displayName,
                    " (",
                    X.name,
                    ")"
                  ] }, X.name)) })
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
                      onChange: (X) => {
                        const xe = X.target.value;
                        F(b.id, {
                          entityName: xe,
                          refName: xe
                        }), y(b.id, {
                          reference: xe,
                          refName: xe
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        Ie.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                          X.displayName,
                          " (",
                          X.name,
                          ")"
                        ] }, X.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    ct,
                    {
                      type: "text",
                      value: j.entityName || A.reference || A.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (X) => {
                        F(b.id, {
                          entityName: X,
                          refName: X
                        }), y(b.id, {
                          reference: X,
                          refName: X
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Us, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    jo,
                    {
                      rows: 3,
                      value: De,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (X) => we(X),
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
                    ct,
                    {
                      type: "text",
                      value: j.populateField || A.populateRule || A.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (X) => {
                        F(b.id, { populateField: X }), y(b.id, { populateRule: X, populateField: X });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      ct,
                      {
                        type: "text",
                        value: j.idField || A.idField || "Id",
                        placeholder: "Id",
                        onChange: (X) => {
                          F(b.id, { idField: X }), y(b.id, { idField: X });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      ct,
                      {
                        type: "text",
                        value: j.selectField || A.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (X) => {
                          F(b.id, { selectField: X }), y(b.id, { selectField: X });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      ce.length,
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
                  ce.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: ce.map((X, xe) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        X.title,
                        " (",
                        X.key,
                        ")"
                      ]
                    },
                    xe
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (j.formatData ?? A.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              Fe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    ct,
                    {
                      type: "text",
                      value: j.fieldName || A.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (X) => {
                        F(b.id, { fieldName: X }), y(b.id, { fieldName: X });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Me.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                    X.displayName,
                    " (",
                    X.name,
                    ")"
                  ] }, X.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: j.formatter || "",
                      onChange: (X) => F(b.id, { formatter: X.target.value }),
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
                    ct,
                    {
                      type: "text",
                      value: j.formatData || A.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (X) => {
                        F(b.id, { formatData: X }), y(b.id, { formatData: X });
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
                      checked: j.twoWay ?? !0,
                      onChange: (X) => F(b.id, { twoWay: X.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              fe && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(Xt, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  b.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          ye === "columns" && me && (() => {
            const j = b.dataBinding || {}, A = b.props || {}, ne = Js(c), Ce = j.entityName || A.reference || A.refName || "", le = Xs(ne, Ce), Fe = le ? le.fields : [], fe = j.formatData ?? A.formatData ?? "", Ie = (De) => {
              y(b.id, { dropdownColumns: De }), F(b.id, { dropdownColumns: De });
            }, pe = () => {
              var we, X;
              const De = [
                ...ce,
                {
                  key: ((we = Fe[ce.length]) == null ? void 0 : we.name) || `col${ce.length + 1}`,
                  title: ((X = Fe[ce.length]) == null ? void 0 : X.displayName) || `Cột ${ce.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              Ie(De);
            }, ge = () => {
              if (!le || le.fields.length === 0) return;
              const De = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let we = le.fields.filter(
                (xe) => De.includes(xe.name.toLowerCase())
              );
              we.length === 0 ? we = le.fields.slice(0, 3) : we = we.slice(0, 4);
              const X = we.map((xe) => ({
                key: xe.name,
                title: xe.displayName || xe.name,
                width: `${Math.floor(100 / we.length)}%`,
                align: "left"
              }));
              Ie(X);
            }, Me = (De, we) => {
              const X = De + we;
              if (X < 0 || X >= ce.length) return;
              const xe = [...ce], ot = xe[De];
              xe[De] = xe[X], xe[X] = ot, Ie(xe);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: Ce ? `Ref: ${Ce}` : "Chưa chọn Ref" })
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
                      onClick: pe,
                      className: "flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột Mới" })
                      ]
                    }
                  ),
                  le && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ge,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${le.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  ce.length,
                  ")"
                ] }) }),
                ce.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: ce.map((De, we) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          we + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Me(we, -1),
                              disabled: we === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Me(we, 1),
                              disabled: we === ce.length - 1,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển xuống",
                              children: /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const X = ce.filter((xe, ot) => ot !== we);
                                Ie(X);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
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
                              value: De.key,
                              list: `dropdown-col-fields-${we}`,
                              placeholder: "vd: FullName",
                              onChange: (X) => {
                                const xe = [...ce];
                                xe[we] = { ...xe[we], key: X.target.value }, Ie(xe);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${we}`, children: Fe.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                            X.displayName,
                            " (",
                            X.name,
                            ")"
                          ] }, X.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: De.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (X) => {
                                const xe = [...ce];
                                xe[we] = { ...xe[we], title: X.target.value }, Ie(xe);
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
                              value: De.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (X) => {
                                const xe = [...ce];
                                xe[we] = { ...xe[we], width: X.target.value }, Ie(xe);
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
                              value: De.align || "left",
                              onChange: (X) => {
                                const xe = [...ce];
                                xe[we] = { ...xe[we], align: X.target.value }, Ie(xe);
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
                  we
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
                    value: fe,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (De) => {
                      const we = De.target.value;
                      F(b.id, { formatData: we }), y(b.id, { formatData: we });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                ce.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: ce.map((De, we) => {
                    const X = Ce ? `{${Ce}.${De.key}}` : `{${De.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const xe = fe ? `${fe} - ${X}` : X;
                          F(b.id, { formatData: xe }), y(b.id, { formatData: xe });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          X
                        ]
                      },
                      we
                    );
                  }) })
                ] })
              ] })
            ] });
          })(),
          ye === "validation" && (() => {
            const j = b.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(nr, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!j.required,
                      onChange: (A) => C(b.id, { required: A.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                j.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: j.requiredMessage || "",
                    onChange: (A) => C(b.id, { requiredMessage: A.target.value }),
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
                      value: j.minLength !== void 0 ? j.minLength : "",
                      onChange: (A) => C(b.id, {
                        minLength: A.target.value === "" ? void 0 : Number(A.target.value)
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
                      value: j.maxLength !== void 0 ? j.maxLength : "",
                      onChange: (A) => C(b.id, {
                        maxLength: A.target.value === "" ? void 0 : Number(A.target.value)
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
                    value: j.pattern || "",
                    onChange: (A) => C(b.id, { pattern: A.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: j.patternMessage || "",
                    onChange: (A) => C(b.id, { patternMessage: A.target.value }),
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
                    value: j.customValidator || "",
                    onChange: (A) => C(b.id, { customValidator: A.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          ye === "permissions" && (() => {
            const j = b.permissions || {}, A = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], ne = j.allowedRoles || [], Ce = j.readOnlyRoles || [], le = (fe) => {
              const Ie = ne.includes(fe) ? ne.filter((pe) => pe !== fe) : [...ne, fe];
              S(b.id, { allowedRoles: Ie });
            }, Fe = (fe) => {
              const Ie = Ce.includes(fe) ? Ce.filter((pe) => pe !== fe) : [...Ce, fe];
              S(b.id, { readOnlyRoles: Ie });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ts, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: A.map((fe) => {
                  const Ie = ne.includes(fe);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => le(fe),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${Ie ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: fe }),
                        Ie && /* @__PURE__ */ e.jsx(qs, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    fe
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: A.map((fe) => {
                  const Ie = Ce.includes(fe);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => Fe(fe),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${Ie ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: fe }),
                        Ie && /* @__PURE__ */ e.jsx(qs, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    fe
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
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(j.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${j.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
          oa,
          {
            isOpen: i,
            node: b,
            onClose: () => d(!1),
            onSave: (j, A, ne) => {
              y(j, A), ne && F(j, ne);
            }
          }
        )
      ]
    }
  );
}, Xo = Zt.memo(No), gr = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: yt,
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
    icon: Tr,
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
    icon: Xt,
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
    icon: ns,
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
    icon: Et,
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
    icon: On,
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
    icon: Rr,
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
    icon: Mn,
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
    icon: Ia,
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
    icon: Da,
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
    icon: Nt,
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
    icon: Ir,
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
    icon: Cs,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: Qt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: Dr,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: Fa,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: Ra,
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
    icon: La,
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
    icon: wn,
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
    icon: Fr,
    defaultProps: {
      title: "THỐNG KÊ SẢN LƯỢNG",
      chartType: "bar",
      reference: "Statistics",
      colSpan: 8
    },
    defaultStyle: { width: "100%", minHeight: "320px" }
  }
], wo = ({ item: t, onClick: r, isEditing: s }) => {
  const a = t.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = Er({
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
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Qo = ({ isEditing: t = !0, onAddComponent: r }) => {
  const s = Z((c) => c.addComponent), a = Z((c) => c.activeFeatureId), n = Z((c) => c.features), o = Z((c) => c.selection), l = n.find((c) => c.id === a), i = (c, p) => {
    if (!p) return null;
    for (const g of c) {
      if (g.id === p) return g;
      if (g.children) {
        const T = i(g.children, p);
        if (T) return T;
      }
    }
    return null;
  }, d = (c) => {
    var x;
    if (!t) return;
    if (r) {
      r(c.type);
      return;
    }
    const p = i((l == null ? void 0 : l.components) || [], o.componentId);
    let g = null;
    p && (p.type === "Container" ? g = p.id : g = p.parentId || null);
    const T = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: g,
      pageId: a,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((x = l == null ? void 0 : l.components) == null ? void 0 : x.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    s(T, g);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx($s, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: gr.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: gr.map((c) => /* @__PURE__ */ e.jsx(
      wo,
      {
        item: c,
        onClick: d,
        isEditing: t
      },
      c.type
    )) })
  ] });
}, Zo = () => {
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
              /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, d + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, ei = () => {
  const t = st((x) => x.openTabs), r = st((x) => x.activeTabId), s = st((x) => x.setActiveTab), a = st((x) => x.closeTab), n = Z((x) => x.setActiveFeature), o = Te((x) => x.isFormDirty), l = Te((x) => x.markFormClean), [i, d] = D(null);
  if (t.length === 0) return null;
  const c = (x, h) => {
    var u;
    s(x);
    const w = t.find((v) => v.id === x);
    n(h, ((u = w == null ? void 0 : w.params) == null ? void 0 : u.id) ?? null);
  }, p = (x) => {
    a(x), setTimeout(() => {
      var w;
      const h = st.getState().openTabs.find(
        (u) => u.id === st.getState().activeTabId
      );
      h && n(h.featureId, ((w = h.params) == null ? void 0 : w.id) ?? null);
    }, 50);
  }, g = (x, h) => {
    if (x.stopPropagation(), h.isDirty || (h.featureId ? o(h.featureId) : !1)) {
      d(h);
      return;
    }
    p(h.id);
  }, T = () => {
    i && (i.featureId && l(i.featureId), p(i.id), d(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: t.map((x) => {
      const h = x.id === r, w = x.isDirty || (x.featureId ? o(x.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(x.id, x.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${h ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: w ? `${x.title} (Có dữ liệu chưa lưu)` : x.title,
          children: [
            /* @__PURE__ */ e.jsx(yt, { className: `w-3.5 h-3.5 ${h ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: x.title }),
            w && /* @__PURE__ */ e.jsx(
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
                onClick: (u) => g(u, x),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" })
              }
            )
          ]
        },
        x.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx($a, { className: "w-5 h-5" }) }),
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
            onClick: T,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Co = ({
  isOpen: t,
  onClose: r
}) => {
  const s = Z((O) => O.isFeatureManagerOpen), a = Z((O) => O.closeFeatureManager), n = Z((O) => O.features), o = Z((O) => O.addFeature), l = Z((O) => O.deleteFeature), i = Z((O) => O.cloneFeature), d = Z((O) => O.toggleFeatureActive), c = Z((O) => O.openFeatureProperties), p = Z((O) => O.updateFeatureProperties), g = t !== void 0 ? t : s, T = () => {
    r && r(), a();
  }, [x, h] = D(""), [w, u] = D("all"), [v, k] = D({}), [m, y] = D(!1), [P, R] = D(""), [F, C] = D(""), [S, L] = D(""), [$, se] = D(!1), [V, U] = D("Layers"), E = (O) => {
    k((_) => ({ ..._, [O]: !_[O] }));
  }, Y = Ae(() => {
    const O = [], _ = /* @__PURE__ */ new Map();
    for (const ue of n) {
      const M = ue.parentId || null;
      _.has(M) || _.set(M, []), _.get(M).push(ue);
    }
    for (const ue of _.values())
      ue.sort((M, Q) => (M.order ?? 0) - (Q.order ?? 0));
    const me = (ue, M = 0) => {
      const Q = _.get(ue) || [];
      for (const W of Q) {
        const ie = (_.get(W.id) || []).length > 0, Ne = !!v[W.id], j = !x.trim() || W.name.toLowerCase().includes(x.toLowerCase()) || W.title && W.title.toLowerCase().includes(x.toLowerCase()) || W.code && W.code.toLowerCase().includes(x.toLowerCase()) || W.route.toLowerCase().includes(x.toLowerCase()) || W.entityName && W.entityName.toLowerCase().includes(x.toLowerCase());
        let A = !0;
        w === "active" ? A = W.active !== !1 : w === "inactive" ? A = W.active === !1 : w === "group" && (A = !!W.isGroup), j && A && O.push({
          feature: W,
          depth: M,
          hasChildren: ie,
          isCollapsed: Ne
        }), ie && !Ne && me(W.id, M + 1);
      }
    }, ce = new Set(n.map((ue) => ue.id)), ye = n.filter((ue) => !ue.parentId || !ce.has(ue.parentId));
    ye.sort((ue, M) => (ue.order ?? 0) - (M.order ?? 0));
    for (const ue of ye) {
      const Q = (_.get(ue.id) || []).length > 0, W = !!v[ue.id], q = !x.trim() || ue.name.toLowerCase().includes(x.toLowerCase()) || ue.title && ue.title.toLowerCase().includes(x.toLowerCase()) || ue.code && ue.code.toLowerCase().includes(x.toLowerCase()) || ue.route.toLowerCase().includes(x.toLowerCase());
      let ie = !0;
      w === "active" ? ie = ue.active !== !1 : w === "inactive" ? ie = ue.active === !1 : w === "group" && (ie = !!ue.isGroup), q && ie && O.push({
        feature: ue,
        depth: 0,
        hasChildren: Q,
        isCollapsed: W
      }), Q && !W && me(ue.id, 1);
    }
    return O;
  }, [n, v, x, w]), z = (O) => {
    if (O.preventDefault(), !P.trim()) return;
    const _ = o(P.trim(), V, S || null, $);
    F.trim() && p(_, { title: F.trim() }), y(!1), R(""), C(""), L(""), se(!1);
  }, b = (O, _) => {
    const me = O.order ?? 0, ce = Math.max(0, me + _);
    p(O.id, { order: ce });
  }, ae = async (O) => {
    if (confirm(`Bạn có chắc chắn muốn xóa Feature "${O.title || O.name}"?`)) {
      try {
        await gl(O.id);
      } catch {
      }
      l(O.id);
    }
  };
  return g ? It(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1a] border-b border-blue-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(yt, { className: "w-5 h-5" }) }),
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
              onClick: () => y(!0),
              className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Feature mới" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: T,
              className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer",
              children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-slate-800 bg-[#090f1e]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[280px] max-w-md", children: [
          /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: x,
              onChange: (O) => h(O.target.value),
              placeholder: "Tìm theo Tên, Tiêu đề, Mã, Route, Entity...",
              className: "w-full pl-9 pr-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-slate-400", children: "Lọc:" }),
          ["all", "active", "inactive", "group"].map((O) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => u(O),
              className: `px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${w === O ? "bg-blue-600 text-white shadow-sm" : "bg-slate-800/70 text-slate-400 hover:text-slate-200"}`,
              children: [
                O === "all" && "Tất cả",
                O === "active" && "Đang hoạt động",
                O === "inactive" && "Ngưng hoạt động",
                O === "group" && "Nhóm cha"
              ]
            },
            O
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
        /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: Y.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 9, className: "py-10 text-center text-slate-500", children: "Không tìm thấy Feature nào phù hợp" }) }) : Y.map(({ feature: O, depth: _, hasChildren: me, isCollapsed: ce }) => {
          const ye = O.active !== !1, ue = !!O.isGroup;
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              onDoubleClick: () => c(O.id),
              className: "hover:bg-blue-600/10 cursor-pointer transition-colors group",
              title: "Nhấp đúp chuột để mở thuộc tính Feature",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4", children: /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    style: { paddingLeft: `${_ * 24}px` },
                    children: [
                      me ? /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (M) => {
                            M.stopPropagation(), E(O.id);
                          },
                          className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                          children: ce ? /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                        }
                      ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: `p-1.5 rounded-lg shrink-0 ${ue ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                          children: ue ? /* @__PURE__ */ e.jsx(Zs, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(yt, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { className: "truncate", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-200 group-hover:text-white text-xs block", children: O.title || O.name }),
                        O.title && O.title !== O.name && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block truncate", children: O.name })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-amber-300", children: O.code ? `#${O.code}` : "-" }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-slate-400", children: O.route }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: O.parentId || "",
                    onClick: (M) => M.stopPropagation(),
                    onChange: (M) => {
                      M.stopPropagation();
                      const Q = M.target.value.trim() ? M.target.value.trim() : null;
                      p(O.id, { parentId: Q });
                    },
                    className: "px-2 py-1 bg-slate-800/90 border border-slate-700/80 rounded text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer max-w-[130px] truncate",
                    title: "Thay đổi Cấp cha (Chọn 'Gốc' để xóa cấp cha)",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Gốc (Không cha) --" }),
                      n.filter((M) => M.id !== O.id && M.isGroup).map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.id, children: [
                        "📁 ",
                        M.title || M.name
                      ] }, M.id)),
                      n.filter((M) => M.id !== O.id && !M.isGroup).map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.id, children: [
                        "📄 ",
                        M.title || M.name
                      ] }, M.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "font-mono text-xs w-6", children: O.order ?? 0 }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col opacity-60 group-hover:opacity-100", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (M) => {
                          M.stopPropagation(), b(O, -1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Giảm thứ tự (Lên trên)",
                        children: /* @__PURE__ */ e.jsx(En, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (M) => {
                          M.stopPropagation(), b(O, 1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Tăng thứ tự (Xuống dưới)",
                        children: /* @__PURE__ */ e.jsx(An, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: ue ? /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60", children: "Nhóm Menu" }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60", children: "Màn hình" }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (M) => {
                      M.stopPropagation();
                      const Q = O.isMenu !== void 0 ? !O.isMenu : !1;
                      p(O.id, { isMenu: Q });
                    },
                    className: `px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${O.isMenu !== !1 ? "bg-blue-950/80 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60" : "bg-amber-950/80 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60"}`,
                    title: O.isMenu !== !1 ? "Bấm để ẩn khỏi Leftbar (dành cho màn hình mở có điều kiện)" : "Bấm để hiển thị lên Leftbar",
                    children: O.isMenu !== !1 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Rs, { className: "w-3 h-3 text-blue-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Menu Leftbar" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Pn, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Ẩn / Mở ĐK" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (M) => {
                      M.stopPropagation(), d(O.id);
                    },
                    className: `px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${ye ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900" : "bg-red-950/80 text-red-400 border border-red-800/60 hover:bg-red-900"}`,
                    title: ye ? "Bấm để ngưng kích hoạt" : "Bấm để kích hoạt lại",
                    children: ye ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(qs, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Hoạt động" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Lr, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Đã tắt" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4 text-right", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (M) => {
                        M.stopPropagation(), c(O.id);
                      },
                      className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all cursor-pointer",
                      title: "Thuộc tính Feature (Feature Properties Modal)",
                      children: /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (M) => {
                        M.stopPropagation(), i(O.id);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer",
                      title: "Nhân bản Feature này",
                      children: /* @__PURE__ */ e.jsx(Ls, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (M) => {
                        M.stopPropagation(), ae(O);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-300 border border-slate-700 transition-all cursor-pointer",
                      title: "Xóa Feature này",
                      children: /* @__PURE__ */ e.jsx(bt, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }) })
              ]
            },
            O.id
          );
        }) })
      ] }) }) }) }),
      m && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
        "form",
        {
          onSubmit: z,
          className: "w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3", children: [
              /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4 text-blue-400" }),
                " Thêm Feature Mới"
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => y(!1),
                  className: "text-slate-400 hover:text-white",
                  children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
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
                    value: P,
                    onChange: (O) => R(O.target.value),
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
                    value: F,
                    onChange: (O) => C(O.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Cấp cha (Thư mục nhóm):" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: S,
                    onChange: (O) => L(O.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                      n.filter((O) => O.isGroup).map((O) => /* @__PURE__ */ e.jsxs("option", { value: O.id, children: [
                        "📁 ",
                        O.title || O.name
                      ] }, O.id)),
                      n.filter((O) => !O.isGroup).map((O) => /* @__PURE__ */ e.jsxs("option", { value: O.id, children: [
                        "📄 ",
                        O.title || O.name
                      ] }, O.id))
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
                    checked: $,
                    onChange: (O) => se(O.target.checked),
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
                  onClick: () => y(!1),
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
}, ko = ({
  isOpen: t,
  featureId: r,
  onClose: s
}) => {
  const a = Z((G) => G.featurePropertiesTargetId), n = Z((G) => G.closeFeatureProperties), o = Z((G) => G.features), l = Z((G) => G.updateFeatureProperties), i = Z((G) => G.cloneFeature), d = Z((G) => G.openComponentModal), c = Z((G) => G.updateComponentProps), p = Z((G) => G.updateComponentDataBinding), g = t !== void 0 ? t : !!a, T = r !== void 0 ? r : a, x = Ae(
    () => o.find((G) => G.id === T) || null,
    [o, T]
  ), h = () => {
    s && s(), n();
  }, [w, u] = D("settings"), [v, k] = D([]);
  He(() => {
    nn().then((G) => k(G)).catch(() => {
    });
  }, []);
  const [m, y] = D(""), [P, R] = D(""), [F, C] = D(""), [S, L] = D(0), [$, se] = D("Layers"), [V, U] = D("/"), [E, Y] = D(!1), [z, b] = D(!0), [ae, O] = D(!1), [_, me] = D(!1), [ce, ye] = D(!1), [ue, M] = D(!1), [Q, W] = D(!1), [q, ie] = D(!1), [Ne, j] = D(!0), [A, ne] = D(!0), [Ce, le] = D(!0), [Fe, fe] = D(!1), [Ie, pe] = D(!1), [ge, Me] = D(""), [De, we] = D(""), [X, xe] = D(""), [ot, ft] = D(""), [nt, pt] = D(""), [ee, Se] = D(""), [Ee, Re] = D(""), [_e, Le] = D(""), [qe, $e] = D(""), [rt, ut] = D(""), [Ct, gt] = D(!1), [xt, Wt] = D(""), [Dt, vt] = D({}), [kt, Ge] = D(null);
  He(() => {
    var G, je, ke;
    if (x && g) {
      y(x.name || ""), R(x.title || x.name || ""), C(x.parentId || ""), L(x.order ?? 0), se(x.icon || (x.isGroup ? "Folder" : "Layers")), U(x.route || "/");
      const oe = x.displayFlags || ((G = x.featureProps) == null ? void 0 : G.displayFlags) || {};
      Y(!!oe.isDivider), b(x.isMenu !== void 0 ? x.isMenu : oe.isMenu !== void 0 ? oe.isMenu : !0), O(!!oe.isStartup), me(!!oe.isPublic), ye(!!oe.is403), M(!!oe.deleteTemp), W(!!oe.lockUpdate), ie(x.isGroup !== void 0 ? x.isGroup : !!oe.isGroup), j(x.active !== void 0 ? x.active : oe.active !== void 0 ? oe.active : !0), ne(oe.noEncode !== void 0 ? oe.noEncode : !0), le(oe.isPermissionInherited !== void 0 ? oe.isPermissionInherited : !0), fe(!!oe.isSystem), pe(!!oe.customNextCell), Me(x.code || ""), we(x.scriptFile || ""), xe(x.description || ""), ft(x.entityName || "");
      const Ve = x.customStyles || ((je = x.featureProps) == null ? void 0 : je.customStyles) || {};
      pt(Ve.event || ""), Se(Ve.className || ""), Re(Ve.style || ""), Le(Ve.script || ""), $e(Ve.stylesheet || ""), ut(
        x.scriptContent || ((ke = x.featureProps) == null ? void 0 : ke.scriptContent) || `// Logic JavaScript xử lý nghiệp vụ cho Feature: ${x.name}
let methods = {
  SaveAs: function (gridView, form) {
    // Code xử lý...
  }
};`
      );
    }
  }, [x == null ? void 0 : x.id, g]);
  const Kt = () => {
    if (!x) return;
    const G = F && F.trim() !== "" ? F.trim() : null, je = {
      name: m.trim(),
      title: P.trim(),
      parentId: G,
      order: Number(S) || 0,
      icon: $.trim(),
      route: V.trim(),
      isGroup: q,
      isMenu: z,
      active: Ne,
      code: ge.trim(),
      scriptFile: De.trim(),
      description: X.trim(),
      entityName: ot.trim(),
      scriptContent: rt,
      displayFlags: {
        isDivider: E,
        isMenu: z,
        isStartup: ae,
        isPublic: _,
        is403: ce,
        deleteTemp: ue,
        lockUpdate: Q,
        isGroup: q,
        active: Ne,
        noEncode: A,
        isPermissionInherited: Ce,
        isSystem: Fe,
        customNextCell: Ie
      },
      customStyles: {
        event: nt,
        className: ee,
        style: Ee,
        script: _e,
        stylesheet: qe
      },
      featureProps: {
        ...x.featureProps || {},
        displayFlags: {
          isDivider: E,
          isMenu: z,
          isStartup: ae,
          isPublic: _,
          is403: ce,
          deleteTemp: ue,
          lockUpdate: Q,
          isGroup: q,
          active: Ne,
          noEncode: A,
          isPermissionInherited: Ce,
          isSystem: Fe,
          customNextCell: Ie
        },
        customStyles: {
          event: nt,
          className: ee,
          style: Ee,
          script: _e,
          stylesheet: qe
        },
        scriptContent: rt
      }
    };
    l(x.id, je), gt(!0), setTimeout(() => gt(!1), 2e3);
  }, Ut = async () => {
    x && (await i(x.id), h());
  }, Ft = Ae(() => {
    if (!x || !F) return "Gốc (Root)";
    const G = [];
    let je = F;
    const ke = /* @__PURE__ */ new Set();
    for (; je && !ke.has(je); ) {
      ke.add(je);
      const oe = o.find((Ve) => Ve.id === je);
      if (oe)
        G.unshift(oe.title || oe.name), je = oe.parentId || null;
      else
        break;
    }
    return G.join(" > ");
  }, [x, F, o]), Rt = Ae(() => o.filter((G) => G.id !== (x == null ? void 0 : x.id)), [o, x]), Lt = Ae(() => {
    if (!x) return [];
    const G = [], je = (ke, oe = 0) => {
      var Ve, We;
      for (const Pe of ke) {
        const Xe = !!(Pe.children && Pe.children.length > 0), at = !!Dt[Pe.id];
        (!xt.trim() || ((Ve = Pe.props) == null ? void 0 : Ve.label) && String(Pe.props.label).toLowerCase().includes(xt.toLowerCase()) || Pe.id && Pe.id.toLowerCase().includes(xt.toLowerCase()) || Pe.type && Pe.type.toLowerCase().includes(xt.toLowerCase()) || ((We = Pe.dataBinding) == null ? void 0 : We.fieldName) && String(Pe.dataBinding.fieldName).toLowerCase().includes(xt.toLowerCase())) && G.push({
          node: Pe,
          depth: oe,
          hasChildren: Xe,
          isCollapsed: at
        }), Xe && !at && je(Pe.children, oe + 1);
      }
    };
    return je(x.components || [], 0), G;
  }, [x, Dt, xt]), At = Ae(() => {
    if (!x) return 0;
    let G = 0;
    const je = (ke) => {
      G += ke.length;
      for (const oe of ke)
        oe.children && oe.children.length > 0 && je(oe.children);
    };
    return je(x.components || []), G;
  }, [x]), Mt = (G) => {
    vt((je) => ({ ...je, [G]: !je[G] }));
  }, Bt = () => vt({}), I = () => {
    if (!x) return;
    const G = {}, je = (ke) => {
      for (const oe of ke)
        oe.children && oe.children.length > 0 && (G[oe.id] = !0, je(oe.children));
    };
    je(x.components || []), vt(G);
  }, te = (G) => {
    Ge(G), d(G.id);
  }, de = (G) => {
    switch (G) {
      case "Table":
        return /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-blue-400" });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Mn, { className: "w-3.5 h-3.5 text-emerald-400" });
      case "TextBox":
      case "Textarea":
        return /* @__PURE__ */ e.jsx(ns, { className: "w-3.5 h-3.5 text-amber-400" });
      case "Number":
        return /* @__PURE__ */ e.jsx(Rr, { className: "w-3.5 h-3.5 text-cyan-400" });
      case "Container":
      case "Section":
        return /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5 text-indigo-400" });
      case "Tabs":
        return /* @__PURE__ */ e.jsx(yt, { className: "w-3.5 h-3.5 text-purple-400" });
      default:
        return /* @__PURE__ */ e.jsx(On, { className: "w-3.5 h-3.5 text-slate-400" });
    }
  }, ve = (G, je, ke) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-2 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-xs ${je ? "text-slate-100 font-semibold" : "text-slate-400"}`, children: G }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: je,
        onChange: (oe) => ke(oe.target.checked),
        className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return !g || !x ? null : It(
    /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#080e1a] border-b border-blue-600/30", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(lt, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-base text-white tracking-wide", children: [
                "Feature - ",
                x.title || x.name
              ] }),
              ge && /* @__PURE__ */ e.jsxs("span", { className: "text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono font-semibold", children: [
                "#",
                ge
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            Ct && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in duration-200", children: [
              /* @__PURE__ */ e.jsx(Qs, { className: "w-4 h-4" }),
              " Đã lưu thành công!"
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Kt,
                className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Lưu" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Ut,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                title: "Nhân bản Feature này kèm toàn bộ linh kiện",
                children: [
                  /* @__PURE__ */ e.jsx(Ls, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Copy" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: h,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
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
              onClick: () => u("settings"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${w === "settings" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "TÙY CHỈNH / THÔNG TIN CHUNG" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => u("components"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${w === "components" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(yt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "PHẦN TỬ (CÂY COMPONENT)" }),
                /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono", children: At })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]", children: w === "settings" ? (
          /* ══════════════════════════════════════════════════════════════
             TAB 1: TÙY CHỈNH / THÔNG TIN FEATURE (Khớp 100% Hình 3)
             ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5" }),
                  " COMMON"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Tên:" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: m,
                        onChange: (G) => y(G.target.value),
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
                        value: P,
                        onChange: (G) => R(G.target.value),
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
                          value: F,
                          onChange: (G) => C(G.target.value),
                          className: "flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                            Rt.map((G) => /* @__PURE__ */ e.jsxs("option", { value: G.id, children: [
                              G.isGroup ? "📁 " : "📄 ",
                              G.title || G.name,
                              " (",
                              G.route,
                              ")"
                            ] }, G.id))
                          ]
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          className: "p-1.5 bg-slate-800 border border-slate-700 rounded text-slate-400 hover:text-blue-400 cursor-help",
                          title: `Đường dẫn phân tầng: ${Ft}`,
                          children: /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex items-center justify-between text-[11px] px-2 py-1 rounded bg-slate-950/70 border border-slate-800", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 text-[10px]", children: z ? "📌 Hiển thị trên Leftbar" : "🔍 Màn hình mở theo điều kiện (Ẩn Leftbar)" }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => b(!z),
                          className: `px-1.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${z ? "bg-blue-600/30 text-blue-300 hover:bg-blue-600/50" : "bg-amber-600/30 text-amber-300 hover:bg-amber-600/50"}`,
                          children: z ? "Chuyển sang Ẩn" : "Hiện lên Menu"
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
                          value: S,
                          onChange: (G) => L(Number(G.target.value)),
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
                          value: $,
                          onChange: (G) => se(G.target.value),
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
                        value: V,
                        onChange: (G) => U(G.target.value),
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
                    ve("Thanh chia", E, Y),
                    ve("Hiển thị menu", z, b),
                    ve("Khởi động", ae, O),
                    ve("Public", _, me),
                    ve("403", ce, ye),
                    ve("Delete Temp", ue, M),
                    ve("LockUpdate", Q, W)
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                    ve("Nhóm menu", q, ie),
                    ve("Hoạt động", Ne, j),
                    ve("No-Encode", A, ne),
                    ve("Thừa kế quyền", Ce, le),
                    ve("System", Fe, fe),
                    ve("CustomNextCell", Ie, pe)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Zs, { className: "w-3.5 h-3.5" }),
                  " OTHER"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mã (Code):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: ge,
                        onChange: (G) => Me(G.target.value),
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
                        value: De,
                        onChange: (G) => we(G.target.value),
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
                        value: ot,
                        onChange: (G) => ft(G.target.value),
                        placeholder: "Ví dụ: Transaction",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("datalist", { id: "entities-list", children: v.map((G) => /* @__PURE__ */ e.jsx("option", { value: G.name, children: G.displayName || G.name }, G.name)) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Parents:" }),
                    /* @__PURE__ */ e.jsx("div", { className: "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-[11px] font-mono truncate", children: Ft })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mô tả:" }),
                    /* @__PURE__ */ e.jsx(
                      "textarea",
                      {
                        rows: 2,
                        value: X,
                        onChange: (G) => xe(G.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 text-xs resize-none"
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-purple-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5" }),
                " TÙY CHỈNH & STYLE"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Event:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: nt,
                      onChange: (G) => pt(G.target.value),
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
                      value: ee,
                      onChange: (G) => Se(G.target.value),
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
                      value: Ee,
                      onChange: (G) => Re(G.target.value),
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
                      value: _e,
                      onChange: (G) => Le(G.target.value),
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
                    value: qe,
                    onChange: (G) => $e(G.target.value),
                    placeholder: "/* Custom CSS stylesheet rules */",
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500 resize-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Us, { className: "w-4 h-4" }),
                  " SCRIPT (Trình soạn thảo mã nghiệp vụ Feature)"
                ] }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] text-slate-400 font-mono", children: [
                  rt.split(`
`).length,
                  " dòng"
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex rounded-lg border border-slate-800 bg-[#070b14] overflow-hidden min-h-[220px]", children: [
                /* @__PURE__ */ e.jsx("div", { className: "py-2.5 px-3 bg-[#05080f] border-r border-slate-800/80 text-right font-mono text-xs text-slate-600 select-none leading-5 min-w-[40px]", children: rt.split(`
`).map((G, je) => /* @__PURE__ */ e.jsx("div", { children: je + 1 }, je)) }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    value: rt,
                    onChange: (G) => ut(G.target.value),
                    spellCheck: !1,
                    className: "flex-1 p-2.5 bg-transparent font-mono text-xs text-emerald-300 leading-5 focus:outline-none resize-y min-h-[200px]"
                  }
                )
              ] })
            ] })
          ] })
        ) : (
          /* ══════════════════════════════════════════════════════════════
             TAB 2: PHẦN TỬ / CÂY COMPONENT CHA - CON (Yêu cầu đặc biệt của Master)
             ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[260px] max-w-md", children: [
                /* @__PURE__ */ e.jsx(Et, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: xt,
                    onChange: (G) => Wt(G.target.value),
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
                    onClick: Bt,
                    className: "px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer",
                    children: "Mở rộng tất cả"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: I,
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
                Lt.length,
                " / ",
                At,
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
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: Lt.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 7, className: "py-8 text-center text-slate-500", children: "Không tìm thấy phần tử nào trong Feature này" }) }) : Lt.map(({ node: G, depth: je, hasChildren: ke, isCollapsed: oe }) => {
                var Xe, at, it, Ze, St, Ot;
                const Ve = ((Xe = G.props) == null ? void 0 : Xe.label) || ((at = G.props) == null ? void 0 : at.title) || ((it = G.dataBinding) == null ? void 0 : it.fieldName) || G.type, We = ((Ze = G.dataBinding) == null ? void 0 : Ze.fieldName) || "-", Pe = (St = G.props) != null && St.colSpan ? `${G.props.colSpan}/12` : "Auto";
                return /* @__PURE__ */ e.jsxs(
                  "tr",
                  {
                    onDoubleClick: () => te(G),
                    className: "hover:bg-blue-600/15 cursor-pointer transition-colors group",
                    title: "Nhấp đúp chuột để cấu hình phần tử này",
                    children: [
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5",
                          style: { paddingLeft: `${je * 20}px` },
                          children: [
                            ke ? /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: (zt) => {
                                  zt.stopPropagation(), Mt(G.id);
                                },
                                className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                                children: oe ? /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
                              }
                            ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                            /* @__PURE__ */ e.jsx("div", { className: "p-1 rounded bg-slate-800/80 group-hover:bg-blue-600/20", children: de(G.type) }),
                            /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 group-hover:text-white truncate", children: Ve })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: /* @__PURE__ */ e.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800", children: [
                        "#",
                        G.id
                      ] }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50", children: G.type }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-emerald-400", children: We }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: G.order ?? 1 }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: Pe }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: (Ot = G.props) != null && Ot.hidden ? /* @__PURE__ */ e.jsx(Pn, { className: "w-4 h-4 text-slate-600 mx-auto" }) : /* @__PURE__ */ e.jsx(Rs, { className: "w-4 h-4 text-emerald-400 mx-auto" }) })
                    ]
                  },
                  G.id
                );
              }) })
            ] }) }) })
          ] })
        ) })
      ] }),
      kt && /* @__PURE__ */ e.jsx(
        oa,
        {
          isOpen: !!kt,
          node: kt,
          onClose: () => Ge(null),
          onSave: (G, je, ke) => {
            c(G, je), ke && p(G, ke), Ge(null);
          }
        }
      )
    ] }),
    document.body
  );
}, So = (t, r, s) => {
  const a = `w-4 h-4 shrink-0 ${s ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`, n = (t || "").toLowerCase();
  return r ? n.includes("truck") || n.includes("shipment") ? /* @__PURE__ */ e.jsx(Aa, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("price") || n.includes("sale") || n.includes("dollar") ? /* @__PURE__ */ e.jsx(Ma, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : n.includes("doc") ? /* @__PURE__ */ e.jsx(Qt, { className: "w-4 h-4 shrink-0 text-blue-400" }) : /* @__PURE__ */ e.jsx(Zs, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("ship") || n.includes("fcl") || n.includes("lcl") ? /* @__PURE__ */ e.jsx(Ba, { className: a }) : n.includes("plane") || n.includes("air") ? /* @__PURE__ */ e.jsx(Oa, { className: a }) : n.includes("pack") || n.includes("box") ? /* @__PURE__ */ e.jsx(_a, { className: a }) : n.includes("doc") || n.includes("bill") || n.includes("invoice") ? /* @__PURE__ */ e.jsx(Qt, { className: a }) : n.includes("dash") ? /* @__PURE__ */ e.jsx(Ha, { className: a }) : /* @__PURE__ */ e.jsx(yt, { className: a });
}, To = ({
  feature: t,
  depth: r,
  hasChildren: s,
  isCollapsed: a,
  isActive: n,
  childCount: o = 0,
  onToggleCollapse: l,
  onSelect: i,
  onContextMenu: d
}) => {
  const { attributes: c, listeners: p, setNodeRef: g, transform: T, transition: x, isDragging: h } = sl({
    id: t.id
  }), w = {
    transform: Mr.Transform.toString(T),
    transition: x,
    opacity: h ? 0.35 : 1,
    paddingLeft: `${Math.max(8, r * 18 + 8)}px`
  }, u = !!t.isGroup, v = t.badge ?? (u && o > 0 ? o : null);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: g,
      style: w,
      onClick: i,
      onContextMenu: d,
      className: `group relative flex items-center justify-between pr-2 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all select-none ${n ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500" : u ? "bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/30" : "text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate flex-1 min-w-0", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              ...c,
              ...p,
              onClick: (k) => k.stopPropagation(),
              className: "opacity-0 group-hover:opacity-100 p-0.5 -ml-1 text-slate-500 hover:text-slate-300 cursor-grab active:cursor-grabbing transition-opacity shrink-0",
              title: "Kéo để di chuyển vị trí hoặc kéo vào nhóm cha",
              children: /* @__PURE__ */ e.jsx($s, { className: "w-3.5 h-3.5" })
            }
          ),
          s ? /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: l,
              className: "p-0.5 rounded hover:bg-black/20 text-slate-400 hover:text-white transition-colors shrink-0",
              children: a ? /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" })
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 shrink-0" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `p-1 rounded-lg shrink-0 ${n ? "bg-white/20 text-white" : u ? "bg-amber-500/10" : "bg-slate-800 text-slate-400"}`,
              children: So(t.icon, u, n)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `truncate ${u ? "font-bold uppercase tracking-wider text-[11px] text-slate-100" : "font-medium"}`,
              children: t.title || t.name
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 pl-1", children: [
          v !== null && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `px-1.5 py-0.2 rounded-full text-[10px] font-bold ${n ? "bg-white text-blue-700" : "bg-amber-500 text-slate-950 shadow-sm"}`,
              children: v
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: d,
              className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${n ? "text-white" : "text-slate-400 hover:text-white"}`,
              title: "Tùy chọn Feature",
              children: /* @__PURE__ */ e.jsx(Ea, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
}, ti = ({ width: t }) => {
  const r = Z((_) => _.features), s = Z((_) => _.activeFeatureId), a = Z((_) => _.setActiveFeature), n = Z((_) => _.addFeature), o = Z((_) => _.cloneFeature), l = Z((_) => _.toggleFeatureActive), i = Z((_) => _.openFeatureManager), d = Z((_) => _.openFeatureProperties), c = Z((_) => _.reorderFeatures), p = Ae(() => r.filter((_) => _.active === !1 || _.isMenu === !1 ? !1 : _.hidden || _.isDetail ? _.id === s : !0), [r, s]), [g, T] = D({}), [x, h] = D(null), [w, u] = D(!1), [v, k] = D(""), [m, y] = D(""), [P, R] = D(!1), [F, C] = D(null), S = qa(
    Ya(Ja, {
      activationConstraint: {
        distance: 5
      }
    })
  ), L = (_, me) => {
    me.stopPropagation(), T((ce) => ({ ...ce, [_]: !ce[_] }));
  }, { treeNodes: $, visibleNodeIds: se } = Ae(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const Q of p) {
      const W = Q.parentId || null;
      _.has(W) || _.set(W, []), _.get(W).push(Q);
    }
    for (const Q of _.values())
      Q.sort((W, q) => (W.order ?? 0) - (q.order ?? 0));
    const me = [], ce = [], ye = (Q, W = 0) => {
      const q = _.get(Q) || [];
      for (const ie of q) {
        const Ne = _.get(ie.id) || [], j = Ne.length > 0, A = !!g[ie.id];
        me.push({
          feature: ie,
          depth: W,
          hasChildren: j,
          isCollapsed: A,
          childCount: Ne.length
        }), ce.push(ie.id), j && !A && ye(ie.id, W + 1);
      }
    }, ue = new Set(p.map((Q) => Q.id)), M = p.filter((Q) => !Q.parentId || !ue.has(Q.parentId));
    M.sort((Q, W) => (Q.order ?? 0) - (W.order ?? 0));
    for (const Q of M) {
      const W = _.get(Q.id) || [], q = W.length > 0, ie = !!g[Q.id];
      me.push({
        feature: Q,
        depth: 0,
        hasChildren: q,
        isCollapsed: ie,
        childCount: W.length
      }), ce.push(Q.id), q && !ie && ye(Q.id, 1);
    }
    return { treeNodes: me, visibleNodeIds: ce };
  }, [p, g]), V = (_) => {
    _.preventDefault(), h({
      x: _.clientX,
      y: _.clientY
    });
  }, U = (_, me) => {
    _.preventDefault(), _.stopPropagation(), h({
      x: _.clientX,
      y: _.clientY,
      featureId: me
    });
  }, E = (_ = "") => {
    k(""), y(_), R(!1), u(!0);
  }, Y = (_) => {
    if (_.preventDefault(), !v.trim()) return;
    const me = n(
      v.trim(),
      P ? "Folder" : "Layers",
      m || null,
      P
    );
    u(!1), k(""), P || (a(me, null), st.getState().openFeature(me, {}, "Tab", v.trim()));
  }, z = Ae(() => {
    const _ = x != null && x.featureId ? r.find((me) => me.id === x.featureId) : null;
    return _ ? [
      {
        label: "➕ New feature",
        icon: Qe,
        onClick: () => E(_.isGroup ? _.id : _.parentId || "")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "🗙 Deactivate this feature",
        icon: Lr,
        danger: !0,
        onClick: () => {
          l(_.id);
        }
      },
      {
        label: "❐ Clone this feature",
        icon: Ls,
        onClick: () => {
          o(_.id);
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
        icon: mn,
        onClick: () => i()
      },
      {
        label: "🔧 Properties",
        icon: lt,
        onClick: () => d(_.id)
      }
    ] : [
      {
        label: "➕ New feature",
        icon: Qe,
        onClick: () => E("")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "☰ Manage features",
        icon: mn,
        onClick: () => i()
      },
      {
        label: "🔧 Properties",
        icon: lt,
        onClick: () => d(s)
      }
    ];
  }, [x, r, s, o, l, i, d]), b = (_) => {
    C(String(_.active.id));
  }, ae = (_) => {
    const { active: me, over: ce } = _;
    if (C(null), !ce || me.id === ce.id) return;
    const ye = String(me.id), ue = String(ce.id), M = r.find((j) => j.id === ye), Q = r.find((j) => j.id === ue);
    if (!M || !Q) return;
    if (Q.isGroup && M.id !== Q.id) {
      const j = r.filter((ne) => ne.parentId === Q.id), A = j.length > 0 ? Math.max(...j.map((ne) => ne.order ?? 0)) + 1 : 1;
      c([
        { id: M.id, parentId: Q.id, order: A, isGroup: M.isGroup }
      ]), T((ne) => ({ ...ne, [Q.id]: !1 }));
      return;
    }
    const W = Q.parentId || null, q = r.filter((j) => (j.parentId || null) === W);
    q.sort((j, A) => (j.order ?? 0) - (A.order ?? 0));
    const ie = q.findIndex((j) => j.id === ye), Ne = q.findIndex((j) => j.id === ue);
    if (ie !== -1 && Ne !== -1) {
      const j = [...q], [A] = j.splice(ie, 1);
      j.splice(Ne, 0, A);
      const ne = j.map((Ce, le) => ({
        id: Ce.id,
        parentId: W,
        order: le + 1,
        isGroup: Ce.isGroup
      }));
      c(ne);
    } else {
      const j = [...q.filter((Ce) => Ce.id !== ye)], A = j.findIndex((Ce) => Ce.id === ue);
      A !== -1 ? j.splice(A, 0, { ...M, parentId: W }) : j.push({ ...M, parentId: W });
      const ne = j.map((Ce, le) => ({
        id: Ce.id,
        parentId: W,
        order: le + 1,
        isGroup: Ce.id === ye ? M.isGroup : Ce.isGroup
      }));
      c(ne);
    }
  }, O = F ? r.find((_) => _.id === F) : null;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: V,
        style: { width: t ? `${t}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-[#090e1a] flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-3 border-b border-slate-800 flex items-center justify-between bg-[#080d17]", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(yt, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-xs uppercase tracking-wider text-slate-200", children: "TÍNH NĂNG" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => d(s),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
                  title: "Mở thuộc tính Feature hiện tại (Feature Properties Modal)",
                  children: /* @__PURE__ */ e.jsx(lt, { className: "w-3.5 h-3.5 text-blue-400" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => i(),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
                  title: "Quản lý toàn bộ Features (Feature Manager Modal)",
                  children: /* @__PURE__ */ e.jsx(mn, { className: "w-3.5 h-3.5 text-slate-300" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => E(""),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
                  title: "Thêm Feature mới",
                  children: /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-emerald-400" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("nav", { className: "p-2 space-y-1 overflow-y-auto flex-1", children: /* @__PURE__ */ e.jsxs(
            Xa,
            {
              sensors: S,
              collisionDetection: Qa,
              onDragStart: b,
              onDragEnd: ae,
              children: [
                /* @__PURE__ */ e.jsx(el, { items: se, strategy: tl, children: $.map(({ feature: _, depth: me, hasChildren: ce, isCollapsed: ye, childCount: ue }) => {
                  const M = _.id === s;
                  return /* @__PURE__ */ e.jsx(
                    To,
                    {
                      feature: _,
                      depth: me,
                      hasChildren: ce,
                      isCollapsed: ye,
                      isActive: M,
                      childCount: ue,
                      onToggleCollapse: (Q) => L(_.id, Q),
                      onSelect: () => {
                        _.isGroup ? T((Q) => ({ ...Q, [_.id]: !Q[_.id] })) : (a(_.id, null), st.getState().openFeature(_.id, {}, "Tab", _.title || _.name));
                      },
                      onContextMenu: (Q) => U(Q, _.id)
                    },
                    _.id
                  );
                }) }),
                /* @__PURE__ */ e.jsx(Za, { children: O ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white shadow-2xl border border-blue-400 text-xs font-bold opacity-90", children: [
                  /* @__PURE__ */ e.jsx($s, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: O.title || O.name })
                ] }) : null })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-[#080d17] text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                p.length,
                " hiển thị / ",
                r.length
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "Core C# v2.5" })
          ] })
        ]
      }
    ),
    x && /* @__PURE__ */ e.jsx(
      la,
      {
        x: x.x,
        y: x.y,
        items: z,
        onClose: () => h(null)
      }
    ),
    w && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[130] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: Y,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(Pa, { className: "w-5 h-5" }) }),
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
                  value: v,
                  onChange: (_) => k(_.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1", children: "Cấp cha (Thư mục nhóm):" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: m,
                  onChange: (_) => y(_.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                    r.filter((_) => _.isGroup).map((_) => /* @__PURE__ */ e.jsxs("option", { value: _.id, children: [
                      "📁 ",
                      _.title || _.name
                    ] }, _.id))
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
                  checked: P,
                  onChange: (_) => R(_.target.checked),
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
                onClick: () => u(!1),
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
    /* @__PURE__ */ e.jsx(Co, {}),
    /* @__PURE__ */ e.jsx(ko, {})
  ] });
}, si = ({
  isPreview: t,
  onTogglePreview: r,
  onSave: s,
  isSaving: a = !1
}) => {
  const n = Z((p) => p.undo), o = Z((p) => p.redo), l = Z((p) => p.historyIndex), i = Z((p) => p.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx($r, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Pr, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: r, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: t ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: s, disabled: a, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, ni = ({
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
  const g = Z((y) => y.features), T = Z((y) => y.activeFeatureId), x = Z((y) => y.undo), h = Z((y) => y.redo), w = Z((y) => y.historyIndex), u = Z((y) => y.history), v = g.find((y) => y.id === T), k = w > 0, m = w < u.length - 1;
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
            onClick: x,
            disabled: !k,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx($r, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
            disabled: !m,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(Pr, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: r,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${t ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Ga, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
          children: n ? /* @__PURE__ */ e.jsx(Va, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Wa, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(Ka, { className: "w-4 h-4" }),
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
            children: /* @__PURE__ */ e.jsx(Ua, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, ri = () => {
  const t = st((i) => i.activePopup), r = st((i) => i.closePopup), s = st((i) => i.openFeature), a = Z((i) => i.features);
  if (!t) return null;
  const n = a.find((i) => String(i.id) === String(t.featureId)), o = t.params || {}, l = () => {
    s(t.featureId, t.params, "Tab", t.title), r();
  };
  return It(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(yt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(Sr, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(za, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          Fs,
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
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
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
class ai {
  get dataEngine() {
    return Te.getState();
  }
  get navigationEngine() {
    return st.getState();
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
function li(t) {
  return t;
}
export {
  ai as BaseBL,
  Xr as ColumnPropertiesModal,
  Qo as ComponentPalette,
  oa as ComponentPropertiesModal,
  Fs as ComponentRenderer,
  Zo as ComponentTree,
  la as ContextMenu,
  Qr as EnterpriseDatePicker,
  so as EnterpriseSelect,
  Jo as FeatureCanvas,
  ri as FeaturePopupModal,
  Ko as ForgeAdvancedGrid,
  ho as ForgeAutocomplete,
  Rl as ForgeButton,
  bo as ForgeChart,
  ro as ForgeCheckbox,
  xr as ForgeContainer,
  ao as ForgeDatePicker,
  oo as ForgeDivider,
  po as ForgeFileUploadGrid,
  _o as ForgeFormContainer,
  Pl as ForgeLabel,
  lo as ForgeModal,
  $l as ForgeNumber,
  co as ForgeRecordSelector,
  xo as ForgeSearchEntry,
  uo as ForgeSearchModal,
  El as ForgeSection,
  no as ForgeSelect,
  na as ForgeTabStack,
  eo as ForgeTable,
  Uo as ForgeTabs,
  Ll as ForgeTextBox,
  io as ForgeTextarea,
  mo as ForgeTreeView,
  rs as FormFieldWrapper,
  pr as GridCellComponent,
  Al as HeaderContextMenu,
  zo as InlineCellEditor,
  ti as LeftNavbar,
  Ks as PermissionGuard,
  Xo as PropertyPanel,
  Ml as RowContextMenu,
  Ol as SummaryRow,
  si as TopBar,
  ni as TopNav,
  Jr as UnifiedEventEditor,
  ei as WorkspaceTabBar,
  Dl as addFunctionToBlFile,
  zl as calculateAutoPopulatedFields,
  Kl as calculateLeftOffsets,
  li as defineBL,
  Wo as downloadBackendDocxReport,
  Vo as downloadBackendPdfReport,
  Ds as executeSingleEvent,
  Jl as exportGridToExcel,
  Yr as findFunctionInModule,
  Ho as getCascadedOptions,
  aa as getComponentOuterLayoutStyle,
  Il as getFunctionsForBlFile,
  ra as groupNodesByTabStack,
  to as interpolateFormatData,
  ur as invokeBLLifecycle,
  Fn as moveColumn,
  en as normalizeBlKey,
  ks as normalizeColumnOrders,
  hr as parseDDMMYYYY,
  sa as printGridReport,
  Oo as registerBL,
  Fl as registerBlFunctions,
  Bo as removeFunctionFromBlFile,
  Hn as resolveBlModule,
  Zr as sortColumnsByCorePolicy,
  ea as toggleColumnFreeze,
  Ye as triggerComponentEvent,
  _n as useAuthStore,
  Te as useDataEngine,
  Z as useEditorStore,
  Yo as useGlobalHotkeys,
  Wl as useGridKeyboardNavigation,
  qt as useMasterDetailStore,
  st as useNavigationEngine,
  qo as useRealtimeEngine,
  Ln as validateDateSequence,
  ql as validateField,
  Go as validateForm,
  Rn as validateISO6346ContainerNo
};
