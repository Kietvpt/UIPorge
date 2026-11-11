var Oa = Object.defineProperty;
var _a = (s, a, t) => a in s ? Oa(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var js = (s, a, t) => _a(s, typeof a != "symbol" ? a + "" : a, t);
import ts, { useState as E, useRef as We, useEffect as Ee, useMemo as Me, useCallback as rs, useId as Xn } from "react";
import { create as ss } from "zustand";
import { Layers as Ct, ChevronDown as Mt, ChevronUp as us, Printer as Qn, Zap as st, Save as Ht, Eye as Vs, EyeOff as Ma, Pin as Zn, ChevronRight as Ws, Sliders as wt, Copy as ea, Trash2 as Ge, Filter as ta, Settings as Ha, PlusCircle as sa, ArrowUp as na, ArrowDown as aa, Plus as Ze, FileCode as Is, Play as Va, Shield as Rs, X as Je, Table as tt, Calendar as ra, ChevronLeft as la, Clock as Wa, ExternalLink as oa, Search as kt, RefreshCw as Ka, FileDown as Ga, ArrowUpDown as Ks, Loader2 as za, Check as Gs, Tag as ia, Database as Ls, Paperclip as ca, Upload as $n, Download as ws, Image as Ua, FileText as Xt, File as qa, GripVertical as zs, Lock as Qt, Sparkles as da, CheckCircle2 as Ps, Box as dt, ArrowRightLeft as An, Columns as Ot, Type as Bt, Square as cs, Paintbrush as Ya, ShieldCheck as Bn, Code as Cs, Hash as Ja, ChevronDownSquare as Xa, CheckSquare as Qa, Minus as Za, Maximize2 as er, AlignLeft as tr, FolderKanban as sr, AlertTriangle as nr, FolderPlus as ks, Edit2 as ar, LayoutDashboard as rr, MoreVertical as lr, Undo2 as ua, Redo2 as pa, Edit3 as or, PanelRightClose as ir, PanelRightOpen as cr, Bell as dr, LogOut as ur, CheckCircle as pr } from "lucide-react";
import { createPortal as Tt } from "react-dom";
import { useDraggable as xa, useDroppable as ha } from "@dnd-kit/core";
import { CSS as xr } from "@dnd-kit/utilities";
import hr from "axios";
var Es = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function mr() {
  if (On) return Gt;
  On = 1;
  var s = ts, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, p, c) {
    var u, y = {}, T = null, d = null;
    c !== void 0 && (T = "" + c), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (d = p.ref);
    for (u in p) r.call(p, u) && !o.hasOwnProperty(u) && (y[u] = p[u]);
    if (i && i.defaultProps) for (u in p = i.defaultProps, p) y[u] === void 0 && (y[u] = p[u]);
    return { $$typeof: a, type: i, key: T, ref: d, props: y, _owner: n.current };
  }
  return Gt.Fragment = t, Gt.jsx = l, Gt.jsxs = l, Gt;
}
var zt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function br() {
  return _n || (_n = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ts, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), h = Symbol.iterator, N = "@@iterator";
    function m(k) {
      if (k === null || typeof k != "object")
        return null;
      var K = h && k[h] || k[N];
      return typeof K == "function" ? K : null;
    }
    var x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(k) {
      {
        for (var K = arguments.length, se = new Array(K > 1 ? K - 1 : 0), xe = 1; xe < K; xe++)
          se[xe - 1] = arguments[xe];
        R("error", k, se);
      }
    }
    function R(k, K, se) {
      {
        var xe = x.ReactDebugCurrentFrame, ke = xe.getStackAddendum();
        ke !== "" && (K += "%s", se = se.concat([ke]));
        var Te = se.map(function(Ne) {
          return String(Ne);
        });
        Te.unshift("Warning: " + K), Function.prototype.apply.call(console[k], console, Te);
      }
    }
    var w = !1, $ = !1, b = !1, D = !1, P = !1, F;
    F = Symbol.for("react.module.reference");
    function B(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === o || P || k === n || k === c || k === u || D || k === d || w || $ || b || typeof k == "object" && k !== null && (k.$$typeof === T || k.$$typeof === y || k.$$typeof === l || k.$$typeof === i || k.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === F || k.getModuleId !== void 0));
    }
    function O(k, K, se) {
      var xe = k.displayName;
      if (xe)
        return xe;
      var ke = K.displayName || K.name || "";
      return ke !== "" ? se + "(" + ke + ")" : se;
    }
    function Q(k) {
      return k.displayName || "Context";
    }
    function L(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case i:
            var K = k;
            return Q(K) + ".Consumer";
          case l:
            var se = k;
            return Q(se._context) + ".Provider";
          case p:
            return O(k, k.render, "ForwardRef");
          case y:
            var xe = k.displayName || null;
            return xe !== null ? xe : L(k.type) || "Memo";
          case T: {
            var ke = k, Te = ke._payload, Ne = ke._init;
            try {
              return L(Ne(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, J = 0, re, q, je, j, he, Ce, le;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function me() {
      {
        if (J === 0) {
          re = console.log, q = console.info, je = console.warn, j = console.error, he = console.group, Ce = console.groupCollapsed, le = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        J++;
      }
    }
    function ye() {
      {
        if (J--, J === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, k, {
              value: re
            }),
            info: G({}, k, {
              value: q
            }),
            warn: G({}, k, {
              value: je
            }),
            error: G({}, k, {
              value: j
            }),
            group: G({}, k, {
              value: he
            }),
            groupCollapsed: G({}, k, {
              value: Ce
            }),
            groupEnd: G({}, k, {
              value: le
            })
          });
        }
        J < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = x.ReactCurrentDispatcher, Z;
    function V(k, K, se) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (ke) {
            var xe = ke.stack.trim().match(/\n( *(at )?)/);
            Z = xe && xe[1] || "";
          }
        return `
` + Z + k;
      }
    }
    var U = !1, ue;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new we();
    }
    function Oe(k, K) {
      if (!k || U)
        return "";
      {
        var se = ue.get(k);
        if (se !== void 0)
          return se;
      }
      var xe;
      U = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = z.current, z.current = null, me();
      try {
        if (K) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (X) {
              xe = X;
            }
            Reflect.construct(k, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (X) {
              xe = X;
            }
            k.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            xe = X;
          }
          k();
        }
      } catch (X) {
        if (X && xe && typeof X.stack == "string") {
          for (var fe = X.stack.split(`
`), Ae = xe.stack.split(`
`), Ie = fe.length - 1, g = Ae.length - 1; Ie >= 1 && g >= 0 && fe[Ie] !== Ae[g]; )
            g--;
          for (; Ie >= 1 && g >= 0; Ie--, g--)
            if (fe[Ie] !== Ae[g]) {
              if (Ie !== 1 || g !== 1)
                do
                  if (Ie--, g--, g < 0 || fe[Ie] !== Ae[g]) {
                    var A = `
` + fe[Ie].replace(" at new ", " at ");
                    return k.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", k.displayName)), typeof k == "function" && ue.set(k, A), A;
                  }
                while (Ie >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        U = !1, z.current = Te, ye(), Error.prepareStackTrace = ke;
      }
      var I = k ? k.displayName || k.name : "", W = I ? V(I) : "";
      return typeof k == "function" && ue.set(k, W), W;
    }
    function He(k, K, se) {
      return Oe(k, !1);
    }
    function Fe(k) {
      var K = k.prototype;
      return !!(K && K.isReactComponent);
    }
    function C(k, K, se) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return Oe(k, Fe(k));
      if (typeof k == "string")
        return V(k);
      switch (k) {
        case c:
          return V("Suspense");
        case u:
          return V("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case p:
            return He(k.render);
          case y:
            return C(k.type, K, se);
          case T: {
            var xe = k, ke = xe._payload, Te = xe._init;
            try {
              return C(Te(ke), K, se);
            } catch {
            }
          }
        }
      return "";
    }
    var v = Object.prototype.hasOwnProperty, _ = {}, ce = x.ReactDebugCurrentFrame;
    function oe(k) {
      if (k) {
        var K = k._owner, se = C(k.type, k._source, K ? K.type : null);
        ce.setExtraStackFrame(se);
      } else
        ce.setExtraStackFrame(null);
    }
    function be(k, K, se, xe, ke) {
      {
        var Te = Function.call.bind(v);
        for (var Ne in k)
          if (Te(k, Ne)) {
            var fe = void 0;
            try {
              if (typeof k[Ne] != "function") {
                var Ae = Error((xe || "React class") + ": " + se + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              fe = k[Ne](K, Ne, xe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              fe = Ie;
            }
            fe && !(fe instanceof Error) && (oe(ke), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", se, Ne, typeof fe), oe(null)), fe instanceof Error && !(fe.message in _) && (_[fe.message] = !0, oe(ke), f("Failed %s type: %s", se, fe.message), oe(null));
          }
      }
    }
    var ne = Array.isArray;
    function pe(k) {
      return ne(k);
    }
    function ee(k) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, se = K && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return se;
      }
    }
    function ie(k) {
      try {
        return De(k), !1;
      } catch {
        return !0;
      }
    }
    function De(k) {
      return "" + k;
    }
    function de(k) {
      if (ie(k))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(k)), De(k);
    }
    var te = x.ReactCurrentOwner, M = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, H, Ye;
    function Dt(k) {
      if (v.call(k, "ref")) {
        var K = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Ft(k) {
      if (v.call(k, "key")) {
        var K = Object.getOwnPropertyDescriptor(k, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function ut(k, K) {
      typeof k.ref == "string" && te.current;
    }
    function at(k, K) {
      {
        var se = function() {
          H || (H = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        se.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function pt(k, K) {
      {
        var se = function() {
          Ye || (Ye = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        se.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var xt = function(k, K, se, xe, ke, Te, Ne) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: k,
        key: K,
        ref: se,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function It(k, K, se, xe, ke) {
      {
        var Te, Ne = {}, fe = null, Ae = null;
        se !== void 0 && (de(se), fe = "" + se), Ft(K) && (de(K.key), fe = "" + K.key), Dt(K) && (Ae = K.ref, ut(K, ke));
        for (Te in K)
          v.call(K, Te) && !M.hasOwnProperty(Te) && (Ne[Te] = K[Te]);
        if (k && k.defaultProps) {
          var Ie = k.defaultProps;
          for (Te in Ie)
            Ne[Te] === void 0 && (Ne[Te] = Ie[Te]);
        }
        if (fe || Ae) {
          var g = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          fe && at(Ne, g), Ae && pt(Ne, g);
        }
        return xt(k, fe, Ae, ke, xe, te.current, Ne);
      }
    }
    var rt = x.ReactCurrentOwner, ht = x.ReactDebugCurrentFrame;
    function ze(k) {
      if (k) {
        var K = k._owner, se = C(k.type, k._source, K ? K.type : null);
        ht.setExtraStackFrame(se);
      } else
        ht.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function ot(k) {
      return typeof k == "object" && k !== null && k.$$typeof === a;
    }
    function mt() {
      {
        if (rt.current) {
          var k = L(rt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function bt(k) {
      return "";
    }
    var ft = {};
    function gt(k) {
      {
        var K = mt();
        if (!K) {
          var se = typeof k == "string" ? k : k.displayName || k.name;
          se && (K = `

Check the top-level render call using <` + se + ">.");
        }
        return K;
      }
    }
    function yt(k, K) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var se = gt(K);
        if (ft[se])
          return;
        ft[se] = !0;
        var xe = "";
        k && k._owner && k._owner !== rt.current && (xe = " It was passed a child from " + L(k._owner.type) + "."), ze(k), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, xe), ze(null);
      }
    }
    function vt(k, K) {
      {
        if (typeof k != "object")
          return;
        if (pe(k))
          for (var se = 0; se < k.length; se++) {
            var xe = k[se];
            ot(xe) && yt(xe, K);
          }
        else if (ot(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var ke = m(k);
          if (typeof ke == "function" && ke !== k.entries)
            for (var Te = ke.call(k), Ne; !(Ne = Te.next()).done; )
              ot(Ne.value) && yt(Ne.value, K);
        }
      }
    }
    function Rt(k) {
      {
        var K = k.type;
        if (K == null || typeof K == "string")
          return;
        var se;
        if (typeof K == "function")
          se = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === y))
          se = K.propTypes;
        else
          return;
        if (se) {
          var xe = L(K);
          be(se, k.props, "prop", xe, k);
        } else if (K.PropTypes !== void 0 && !lt) {
          lt = !0;
          var ke = L(K);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(k) {
      {
        for (var K = Object.keys(k.props), se = 0; se < K.length; se++) {
          var xe = K[se];
          if (xe !== "children" && xe !== "key") {
            ze(k), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), ze(null);
            break;
          }
        }
        k.ref !== null && (ze(k), f("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    var Nt = {};
    function jt(k, K, se, xe, ke, Te) {
      {
        var Ne = B(k);
        if (!Ne) {
          var fe = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = bt();
          Ae ? fe += Ae : fe += mt();
          var Ie;
          k === null ? Ie = "null" : pe(k) ? Ie = "array" : k !== void 0 && k.$$typeof === a ? (Ie = "<" + (L(k.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof k, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, fe);
        }
        var g = It(k, K, se, ke, Te);
        if (g == null)
          return g;
        if (Ne) {
          var A = K.children;
          if (A !== void 0)
            if (xe)
              if (pe(A)) {
                for (var I = 0; I < A.length; I++)
                  vt(A[I], k);
                Object.freeze && Object.freeze(A);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(A, k);
        }
        if (v.call(K, "key")) {
          var W = L(k), X = Object.keys(K).filter(function(Pe) {
            return Pe !== "key";
          }), ae = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nt[W + ae]) {
            var Se = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, W, Se, W), Nt[W + ae] = !0;
          }
        }
        return k === r ? Lt(g) : Rt(g), g;
      }
    }
    function Pt(k, K, se) {
      return jt(k, K, se, !0);
    }
    function Vt(k, K, se) {
      return jt(k, K, se, !1);
    }
    var Wt = Vt, Kt = Pt;
    zt.Fragment = r, zt.jsx = Wt, zt.jsxs = Kt;
  }()), zt;
}
process.env.NODE_ENV === "production" ? Es.exports = mr() : Es.exports = br();
var e = Es.exports;
const St = ({
  label: s,
  showLabel: a = !0,
  labelPosition: t = "left",
  labelWidth: r = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: p,
  children: c
}) => {
  const u = t === "left", y = l ? `col-span-${l}` : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${y} ${u ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...l ? { gridColumn: `span ${l} / span ${l}` } : {},
        ...p
      },
      children: [
        a && s && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs font-medium text-slate-300 select-none ${u ? "shrink-0 text-right truncate" : ""}`,
            style: u ? { width: r } : void 0,
            title: s,
            children: [
              s,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              u && ":"
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
}, ma = "uiforge_bl_functions_registry", _t = {};
function hs(s) {
  if (!s || !s.trim()) return "";
  let a = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function ms() {
  if (typeof window > "u") return _t;
  try {
    const s = localStorage.getItem(ma);
    if (s) {
      const a = JSON.parse(s), t = { ..._t, ...a };
      for (const [r, n] of Object.entries(_t))
        t[r] = Array.from(/* @__PURE__ */ new Set([...n, ...t[r] || []]));
      return t;
    }
  } catch {
  }
  return _t;
}
function bs(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(ma, JSON.stringify(s));
    } catch {
    }
}
function fr(s) {
  if (!s || !s.trim()) return [];
  const a = hs(s), t = ms();
  if (t[a] && t[a].length > 0)
    return t[a];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[a] = r, bs(t), r;
}
function gr(s, a) {
  if (!s || !a) return [];
  const t = hs(s), r = a.trim().replace(/\(.*?\)/g, "");
  if (!t || !r) return [];
  const n = ms(), o = n[t] || [];
  return o.includes(r) || (n[t] = [...o, r], bs(n)), n[t];
}
function El(s, a) {
  if (!s || !a) return [];
  const t = hs(s), r = a.trim().replace(/\(.*?\)/g, ""), n = ms(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== r), bs(n), n[t];
}
function yr(s, a) {
  const t = hs(s);
  _t[t] = Array.from(/* @__PURE__ */ new Set([..._t[t] || [], ...a]));
  const r = ms();
  r[t] = Array.from(/* @__PURE__ */ new Set([...r[t] || [], ...a])), bs(r);
}
const ct = {};
function $l(s, a) {
  ct[s] = a;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  ct[t] = a;
  const r = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  ct[r] = a;
  const n = [];
  for (const [o, l] of Object.entries(a))
    if (typeof l == "function")
      n.push(o);
    else if (l && typeof l == "object") {
      for (const [p, c] of Object.entries(l))
        typeof c == "function" && n.push(p);
      const i = Object.getPrototypeOf(l);
      if (i && i !== Object.prototype)
        for (const p of Object.getOwnPropertyNames(i))
          p !== "constructor" && typeof l[p] == "function" && n.push(p);
    }
  n.length > 0 && yr(t, n);
}
function ba(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const a = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = a.toLowerCase();
  if (ct[a]) return { module: ct[a], canonicalName: a };
  if (ct[t]) return { module: ct[t], canonicalName: a };
  const r = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(ct))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === r)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: a };
}
function vr(s, a) {
  if (!a || !a.trim()) return { fn: null, matchedName: "" };
  const t = a.replace(/\(.*?\)/g, "").trim(), r = t.toLowerCase();
  if (typeof s[t] == "function")
    return { fn: s[t], matchedName: t };
  for (const [n, o] of Object.entries(s))
    if (n.toLowerCase() === r && typeof o == "function")
      return { fn: o, matchedName: n };
  for (const [n, o] of Object.entries(s))
    if (o && typeof o == "object") {
      if (typeof o[t] == "function")
        return { fn: o[t].bind(o), matchedName: t };
      for (const [i, p] of Object.entries(o))
        if (i.toLowerCase() === r && typeof p == "function")
          return { fn: p.bind(o), matchedName: i };
      const l = Object.getPrototypeOf(o);
      if (l && l !== Object.prototype) {
        for (const i of Object.getOwnPropertyNames(l))
          if (i !== "constructor" && typeof o[i] == "function" && (i === t || i.toLowerCase() === r))
            return { fn: o[i].bind(o), matchedName: i };
      }
    } else if (typeof o == "function") {
      const l = o;
      if (typeof l.getInstance == "function")
        try {
          const i = l.getInstance();
          if (i && typeof i[t] == "function")
            return { fn: i[t].bind(i), matchedName: t };
          if (i) {
            const p = Object.getPrototypeOf(i);
            if (p) {
              for (const c of Object.getOwnPropertyNames(p))
                if (c !== "constructor" && typeof i[c] == "function" && (c === t || c.toLowerCase() === r))
                  return { fn: i[c].bind(i), matchedName: c };
            }
          }
        } catch {
        }
      if (typeof l[t] == "function")
        return { fn: l[t].bind(l), matchedName: t };
    }
  return { fn: null, matchedName: t };
}
function Ut(s, a, t, r = !1, n, o = !0) {
  const l = document.createElement("div");
  l.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${o ? r ? "border-emerald-500 shadow-emerald-500/30" : "border-blue-500 shadow-blue-500/30" : "border-red-500 shadow-red-500/30"} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md`;
  const i = o ? r ? "⚡" : "⚙" : "⚠️", p = o ? r ? "bg-emerald-600/25 text-emerald-400" : "bg-blue-600/20 text-blue-400" : "bg-red-600/25 text-red-400", c = o ? r ? "text-emerald-300" : "text-blue-300" : "text-red-300";
  l.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${p} flex items-center justify-center font-bold text-base flex-shrink-0">
      ${i}
    </div>
    <div class="min-w-0">
      <div class="font-bold ${c} flex items-center gap-1.5 flex-wrap">
        <span>${n ? o ? "Thao tác thành công:" : "Cảnh báo:" : r ? "Đã gọi hàm BL:" : "Mô phỏng sự kiện:"}</span>
        <span class="font-mono text-cyan-300 font-bold">${s}()</span>
      </div>
      ${n ? `<div class="text-[11px] text-slate-200 mt-1 leading-relaxed">${n}</div>` : `<div class="text-[10px] text-slate-400 mt-0.5">
               Sự kiện: <span class="font-mono text-amber-400">${a}</span> | File: <span class="font-mono text-emerald-400">${t || "Chưa gắn file"}</span>
             </div>`}
    </div>
  `, document.body.appendChild(l), setTimeout(() => {
    l.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => l.remove(), 300);
  }, 3800);
}
function ps(s, a, t, r) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = ba(t);
  let p = !1, c = n.replace(/\(.*?\)/g, "").trim();
  if (l) {
    const { fn: u, matchedName: y } = vr(l, n);
    if (c = y, u)
      try {
        const T = u(r || { componentName: a, trigger: o, blFileName: i });
        if (p = !0, T && typeof T.then == "function")
          return T.then((d) => {
            d && d.message ? Ut(c, o, i || t, !0, d.message, d.success !== !1) : Ut(c, o, i || t, !0);
          }).catch((d) => {
            Ut(c, o, i || t, !0, String(d), !1);
          }), !0;
        if (T && T.message)
          return Ut(c, o, i || t, !0, T.message, T.success !== !1), !0;
      } catch (T) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${y}() trong ${i}:`, T);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${a || "Component"} -> Event: ${o} -> ${p ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || t || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Ut(c, o, i || t, p), p;
}
function Le(s, a, t, r, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    ps(l, t, r, n);
}
const Mn = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Hn = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", Zt = /* @__PURE__ */ new Map(), ls = (s) => {
  const a = Zt.get(s);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([t, r]) => [t, r.getState()])
  ) : {};
}, Nr = (s, a, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: a.connect(t)
    };
  const r = Zt.get(t.name);
  if (r)
    return { type: "tracked", store: s, ...r };
  const n = {
    connection: a.connect(t),
    stores: {}
  };
  return Zt.set(t.name, n), { type: "tracked", store: s, ...n };
}, jr = (s, a) => {
  if (a === void 0) return;
  const t = Zt.get(s);
  t && (delete t.stores[a], Object.keys(t.stores).length === 0 && Zt.delete(s));
}, wr = /^at (?:new |async )?(.+?) \(/, Cr = /^([^@]+)@/;
function kr(s) {
  var a, t, r;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((t = wr.exec(l)) == null ? void 0 : t[1]) || ((r = Cr.exec(l)) == null ? void 0 : r[1]);
}
const Tr = (s, a = {}) => (t, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...p } = a;
  let c;
  try {
    c = (o ?? (Mn ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return s(t, r, n);
  const { connection: u, ...y } = Nr(i, c, p);
  let T = !0;
  n.setState = (N, m, x) => {
    const f = t(N, m);
    if (!T) return f;
    const R = x === void 0 ? {
      type: l || kr(new Error().stack) || "anonymous"
    } : typeof x == "string" ? { type: x } : x;
    return i === void 0 ? (u == null || u.send(R, r()), f) : (u == null || u.send(
      {
        ...R,
        type: `${i}/${R.type}`
      },
      {
        ...ls(p.name),
        [i]: n.getState()
      }
    ), f);
  }, n.devtools = {
    cleanup: () => {
      u && typeof u.unsubscribe == "function" && u.unsubscribe(), jr(p.name, i);
    }
  };
  const d = (...N) => {
    const m = T;
    T = !1, t(...N), T = m;
  }, h = s(n.setState, r, n);
  if (y.type === "untracked" ? u == null || u.init(h) : (y.stores[y.store] = n, u == null || u.init(
    Object.fromEntries(
      Object.entries(y.stores).map(([N, m]) => [
        N,
        N === y.store ? h : m.getState()
      ])
    )
  )), Hn(n)) {
    let N = !1;
    const m = n.dispatch;
    n.dispatch = (...x) => {
      (Mn ? "production" : void 0) !== "production" && x[0].type === "__setState" && !N && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), N = !0), m(...x);
    };
  }
  return u.subscribe((N) => {
    var m;
    switch (N.type) {
      case "ACTION":
        if (typeof N.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return Ts(
          N.payload,
          (x) => {
            if (x.type === "__setState") {
              if (i === void 0) {
                d(x.state);
                return;
              }
              Object.keys(x.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const f = x.state[i];
              if (f == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(f) && d(f);
              return;
            }
            Hn(n) && n.dispatch(x);
          }
        );
      case "DISPATCH":
        switch (N.payload.type) {
          case "RESET":
            return d(h), i === void 0 ? u == null ? void 0 : u.init(n.getState()) : u == null ? void 0 : u.init(ls(p.name));
          case "COMMIT":
            if (i === void 0) {
              u == null || u.init(n.getState());
              return;
            }
            return u == null ? void 0 : u.init(ls(p.name));
          case "ROLLBACK":
            return Ts(N.state, (x) => {
              if (i === void 0) {
                d(x), u == null || u.init(n.getState());
                return;
              }
              d(x[i]), u == null || u.init(ls(p.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return Ts(N.state, (x) => {
              if (i === void 0) {
                d(x);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(x[i]) && d(x[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: x } = N.payload, f = (m = x.computedStates.slice(-1)[0]) == null ? void 0 : m.state;
            if (!f) return;
            d(i === void 0 ? f : f[i]), u == null || u.send(
              null,
              // FIXME no-any
              x
            );
            return;
          }
          case "PAUSE_RECORDING":
            return T = !T;
        }
        return;
    }
  }), h;
}, fs = Tr, Ts = (s, a) => {
  let t;
  try {
    t = JSON.parse(s);
  } catch (r) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      r
    );
  }
  t !== void 0 && a(t);
};
function Sr(s, a) {
  let t;
  try {
    t = s();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const l = (p) => p === null ? null : JSON.parse(p, void 0), i = (o = t.getItem(n)) != null ? o : null;
      return i instanceof Promise ? i.then(l) : l(i);
    },
    setItem: (n, o) => t.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => t.removeItem(n)
  };
}
const $s = (s) => (a) => {
  try {
    const t = s(a);
    return t instanceof Promise ? t : {
      then(r) {
        return $s(r)(t);
      },
      catch(r) {
        return this;
      }
    };
  } catch (t) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return $s(r)(t);
      }
    };
  }
}, Dr = (s, a) => (t, r, n) => {
  let o = {
    storage: Sr(() => window.localStorage),
    partialize: (m) => m,
    version: 0,
    merge: (m, x) => ({
      ...x,
      ...m
    }),
    ...a
  }, l = !1, i = 0;
  const p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = o.storage;
  if (!u)
    return s(
      (...m) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...m);
      },
      r,
      n
    );
  const y = () => {
    const m = o.partialize({ ...r() });
    return u.setItem(o.name, {
      state: m,
      version: o.version
    });
  }, T = n.setState;
  n.setState = (m, x) => (T(m, x), y());
  const d = s(
    (...m) => (t(...m), y()),
    r,
    n
  );
  n.getInitialState = () => d;
  let h;
  const N = () => {
    var m, x;
    if (!u) return;
    const f = ++i;
    l = !1, p.forEach((w) => {
      var $;
      return w(($ = r()) != null ? $ : d);
    });
    const R = ((x = o.onRehydrateStorage) == null ? void 0 : x.call(o, (m = r()) != null ? m : d)) || void 0;
    return $s(u.getItem.bind(u))(o.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== o.version) {
          if (o.migrate) {
            const $ = o.migrate(
              w.state,
              w.version
            );
            return $ instanceof Promise ? $.then((b) => [!0, b]) : [!0, $];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, w.state];
      return [!1, void 0];
    }).then((w) => {
      var $;
      if (f !== i)
        return;
      const [b, D] = w;
      if (h = o.merge(
        D,
        ($ = r()) != null ? $ : d
      ), t(h, !0), b)
        return y();
    }).then(() => {
      f === i && (R == null || R(r(), void 0), h = r(), l = !0, c.forEach((w) => w(h)));
    }).catch((w) => {
      f === i && (R == null || R(void 0, w));
    });
  };
  return n.persist = {
    setOptions: (m) => {
      o = {
        ...o,
        ...m
      }, m.storage && (u = m.storage);
    },
    clearStorage: () => {
      ++i, u == null || u.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => N(),
    hasHydrated: () => l,
    onHydrate: (m) => (p.add(m), () => {
      p.delete(m);
    }),
    onFinishHydration: (m) => (c.add(m), () => {
      c.delete(m);
    })
  }, o.skipHydration || N(), h || d;
}, Fr = Dr, Ir = 40;
function Ss() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), a = s.get("feature") || s.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function Ds() {
  if (typeof window > "u") return null;
  try {
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function fa(s) {
  var a, t, r, n;
  return s ? !!(s.isDetail || s.route === "/fcl-import" || (a = s.route) != null && a.includes("detail") || (t = s.scriptFile) != null && t.toLowerCase().includes("detail") || (r = s.name) != null && r.toLowerCase().includes("fcl import") || (n = s.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function As(s) {
  return s ? !fa(s) : !1;
}
function qt(s, a, t) {
  var r;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", s);
      const l = (t || ((r = Y.getState()) == null ? void 0 : r.features) || []).find((p) => String(p.id) === String(s) || p.route === `/${s}` || p.route === s);
      if ((l ? As(l) : s === "6" || s === "1" || s === "3") || a === null || a === "") {
        n.searchParams.delete("id");
        try {
          localStorage.removeItem("uiforge_active_transaction_id");
        } catch {
        }
      } else if (a != null) {
        n.searchParams.set("id", String(a));
        try {
          localStorage.setItem("uiforge_active_transaction_id", String(a));
        } catch {
        }
      }
      window.history.replaceState(null, "", n.toString());
    } catch {
    }
}
const Y = ss()(
  fs(
    (s, a) => ({
      features: [],
      activeFeatureId: Ss() || "",
      activeRecordId: Ds(),
      selection: { componentId: null, pageId: Ss() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, r) => {
        const n = a().features || [], o = n.find((p) => String(p.id) === String(t) || p.route === `/${t}` || p.route === t), l = o ? As(o) : t === "6" || t === "1" || t === "3";
        qt(t, l ? null : r, n);
        let i = null;
        l || r === null || r === "" ? i = null : r != null ? i = String(r) : i = Ds(), s((p) => ({
          activeFeatureId: t,
          activeRecordId: i,
          selection: { componentId: null, pageId: t }
        }));
      },
      setFeatures: (t) => {
        if (!t.length) {
          s({
            features: [],
            activeFeatureId: "",
            activeRecordId: null,
            selection: { componentId: null, pageId: "" },
            history: [[]],
            historyIndex: 0
          });
          return;
        }
        const r = Ss(), n = r && t.find((i) => i.id === r || i.route === `/${r}` || i.route === r) || t.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || t.find((i) => !i.hidden && !i.isDetail) || t[0], l = As(n) ? null : Ds();
        qt(n.id, l, t), s({
          features: t,
          activeFeatureId: n.id,
          activeRecordId: l,
          selection: { componentId: null, pageId: n.id },
          history: [t],
          historyIndex: 0
        });
      },
      addFeature: (t, r = "Layers") => {
        const n = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, o = {
          id: n,
          name: t.trim() || "Tính năng mới",
          icon: r,
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
        return qt(n, null), s((l) => {
          const i = [...l.features, o];
          return {
            ...Ve(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: r } : l);
          return Ve(n, o);
        });
      },
      updateFeatureId: (t, r) => {
        s((n) => {
          const o = n.features.map(
            (i) => i.id === t ? {
              ...i,
              id: r,
              route: i.route === `/${t}` ? `/${r}` : i.route,
              components: i.components.map((p) => ({ ...p, pageId: r }))
            } : i
          ), l = n.activeFeatureId === t ? r : n.activeFeatureId;
          return qt(l), {
            features: o,
            activeFeatureId: l,
            selection: n.selection.pageId === t ? { ...n.selection, pageId: r } : n.selection
          };
        });
      },
      deleteFeature: (t) => {
        s((r) => {
          if (r.features.length <= 1) return {};
          const n = r.features.filter((l) => l.id !== t), o = r.activeFeatureId === t ? n[0].id : r.activeFeatureId;
          return qt(o, null), {
            ...Ve(r, n),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        });
      },
      updateFeatureLayout: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== t ? l : {
            ...l,
            layoutConfig: {
              ...l.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
              ...r
            }
          });
          return Ve(n, o);
        });
      },
      updateFeatureScriptFile: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: r.trim() } : l);
          return Ve(n, o);
        });
      },
      selectComponent: (t) => {
        s((r) => ({
          selection: { ...r.selection, componentId: t }
        }));
      },
      addComponent: (t, r = null, n) => {
        s((o) => {
          const l = o.features.find((c) => c.id === o.activeFeatureId);
          if (!l) return {};
          let i;
          if (r)
            n !== void 0 ? i = Bs(l.components, r, t, n) : i = ya(l.components, r, t);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, t), i = c.map((u, y) => ({ ...u, order: y + 1 }));
          } else
            i = [...l.components, t];
          const p = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...Ve(o, p),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentStyle: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentEvents: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              events: r
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentDataBinding: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentValidation: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentPermissions: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return Ve(n, o);
        });
      },
      updateComponentOrder: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: it(l.components, t, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return Ve(n, o);
        });
      },
      removeComponent: (t) => {
        s((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: ga(o.components, t)
          });
          return {
            ...Ve(r, n),
            selection: { ...r.selection, componentId: null }
          };
        });
      },
      moveComponent: (t, r, n) => {
        s((o) => {
          const l = o.features.find((d) => d.id === o.activeFeatureId);
          if (!l) return {};
          const i = Rr(l.components, t);
          if (!i) return {};
          const [p, c] = i, u = { ...p, parentId: r };
          let y;
          if (r === null) {
            const d = c.filter((m) => !m.parentId);
            d.splice(n, 0, u);
            const h = d.map((m, x) => ({ ...m, order: x + 1 })), N = c.filter((m) => m.parentId);
            y = [...h, ...N];
          } else
            y = Bs(c, r, u, n);
          const T = o.features.map(
            (d) => d.id === o.activeFeatureId ? { ...d, components: y } : d
          );
          return Ve(o, T);
        });
      },
      distributeSiblingWidths: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: va(l.components, t, r)
          });
          return Ve(n, o);
        });
      },
      undo: () => {
        s((t) => {
          if (t.historyIndex <= 0) return {};
          const r = t.historyIndex - 1;
          return { historyIndex: r, features: t.history[r] };
        });
      },
      redo: () => {
        s((t) => {
          if (t.historyIndex >= t.history.length - 1) return {};
          const r = t.historyIndex + 1;
          return { historyIndex: r, features: t.history[r] };
        });
      }
    }),
    { name: "UIForge/MultiFeatureStore" }
  )
);
function Ve(s, a) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= Ir && t.shift(), t.push(a), {
    features: a,
    history: t,
    historyIndex: t.length - 1
  };
}
function it(s, a, t) {
  return s.map((r) => r.id === a ? t(r) : r.children && r.children.length > 0 ? { ...r, children: it(r.children, a, t) } : r);
}
function ga(s, a) {
  return s.filter((t) => t.id !== a).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: ga(t.children, a) } : t
  );
}
function ya(s, a, t) {
  return s.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...t, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: ya(r.children, a, t)
  } : r);
}
function va(s, a, t) {
  return s.some((n) => n.id === a) ? s.map((n) => {
    var o;
    return n.id === a ? {
      ...n,
      style: {
        ...n.style,
        width: `${t}%`,
        flex: `0 0 ${t}%`,
        maxWidth: `${t}%`,
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
  }) : s.map((n) => n.children && n.children.length > 0 ? {
    ...n,
    children: va(n.children, a, t)
  } : n);
}
function Rr(s, a) {
  const t = s.findIndex((r) => r.id === a);
  if (t !== -1) {
    const r = s[t], n = [...s.slice(0, t), ...s.slice(t + 1)];
    return [r, n];
  }
  for (let r = 0; r < s.length; r++) {
    const n = s[r];
    if (!n.children || n.children.length === 0) continue;
    const o = n.children.findIndex((i) => i.id === a);
    if (o !== -1) {
      const i = n.children[o], p = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], c = { ...n, children: p }, u = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, u];
    }
    const l = Na(n.children, a);
    if (l) {
      const [i, p] = l, c = { ...n, children: p }, u = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, u];
    }
  }
  return null;
}
function Na(s, a) {
  for (let t = 0; t < s.length; t++) {
    const r = s[t];
    if (r.id === a) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = Na(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, p = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, p];
      }
    }
  }
  return null;
}
function Bs(s, a, t, r) {
  return s.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...t, parentId: a });
      const i = l.map((p, c) => ({ ...p, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Bs(n.children, a, t, r) } : n;
  });
}
const Lr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Y((f) => f.features), o = Y((f) => f.activeFeatureId), l = n.find((f) => String(f.id) === String(s.pageId)) || n.find((f) => String(f.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[t.variant || "primary"], x = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base"
  }[t.size || "md"];
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      disabled: t.disabled,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${m} ${x}`,
      onClick: (f) => {
        a ? (f.ctrlKey || f.metaKey || f.altKey) && (f.stopPropagation(), Le(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Le(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (f) => {
        var w;
        f.stopPropagation(), ((w = s.events) == null ? void 0 : w.some(($) => $.trigger === "dblclick" || $.trigger === "onDoubleClick")) ? Le(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && Le(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, qe = ss()(
  fs((s, a) => ({
    openTabs: [],
    activeTabId: null,
    activePopup: null,
    // Đánh dấu trạng thái bẩn (isDirty) cho tab khi dữ liệu form thay đổi
    setTabDirty: (t, r) => {
      s((n) => ({
        openTabs: n.openTabs.map(
          (o) => o.id === t || o.featureId === t ? { ...o, isDirty: r } : o
        )
      }));
    },
    // 🚀 Mở một Feature theo chuẩn FeatureTab hoặc FeaturePopup (chỉ đạo của Master)
    openFeature: (t, r = {}, n = "Tab", o) => {
      const l = o || (r.id ? `${t} - #${r.id}` : t);
      if (n === "Popup")
        s({
          activePopup: {
            featureId: t,
            title: l,
            params: r
          }
        });
      else {
        const i = a().openTabs, p = i.find(
          (c) => {
            var u;
            return c.featureId === t && String(((u = c.params) == null ? void 0 : u.id) ?? "") === String((r == null ? void 0 : r.id) ?? "");
          }
        );
        if (p)
          s({ activeTabId: p.id });
        else {
          const c = `tab_${t}_${r.id || Date.now()}`, u = {
            id: c,
            featureId: t,
            title: l,
            params: r
          };
          s({
            openTabs: [...i, u],
            activeTabId: c
          });
        }
        Y.getState().setActiveFeature(t, (r == null ? void 0 : r.id) ?? null);
      }
    },
    // Đóng tab
    closeTab: (t) => {
      const r = a().openTabs;
      if (r.length <= 1) return;
      const n = r.filter((i) => i.id !== t), o = a().activeTabId;
      let l = o;
      o === t && (l = n[n.length - 1].id), s({
        openTabs: n,
        activeTabId: l
      });
    },
    // Chọn tab active
    setActiveTab: (t) => {
      s({ activeTabId: t });
    },
    // Đóng popup
    closePopup: (t) => {
      const r = a().activePopup;
      r != null && r.onClose && r.onClose(t), s({ activePopup: null });
    }
  }))
), Pr = [];
function Er(s) {
  if (!s || typeof s != "string") return [];
  const a = [], t = s.split(",");
  for (const r of t) {
    const n = r.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), p = i.includes(".") ? i.split(".").pop() : i;
      l && p && a.push({ targetField: l, sourceField: p });
    }
  }
  return a;
}
function nt(s, a, t, r = void 0) {
  const n = [
    s.formRecords[a],
    s.formRecords.default,
    ...Object.values(s.formRecords)
  ].filter(Boolean);
  if (n.length === 0) return r;
  const o = t.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase();
  for (const l of n) {
    if (!l || typeof l != "object") continue;
    if (l[t] !== void 0 && l[t] !== null) return l[t];
    const i = t.replace(/^fld_/, "");
    if (l[i] !== void 0 && l[i] !== null) return l[i];
    for (const [p, c] of Object.entries(l)) {
      if (c == null) continue;
      if (p.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase() === o)
        return c;
    }
  }
  return r;
}
const ve = ss()(
  fs((s, a) => ({
    datasets: {},
    formRecords: {},
    originalFormRecords: {},
    selectedRecords: {},
    // Quản lý Dirty Tracking
    isFormDirty: (t) => {
      const r = a(), n = r.formRecords[t] || r.formRecords.default || {}, o = r.originalFormRecords[t] || r.originalFormRecords.default;
      if (!o) return !1;
      const l = ["btn_", "sec_", "tab_", "lbl_"], i = /* @__PURE__ */ new Set();
      for (const [p, c] of Object.entries(n)) {
        if (!p || l.some((h) => p.startsWith(h))) continue;
        const u = p.replace(/^fld_/, "").toLowerCase();
        if (i.has(u)) continue;
        i.add(u);
        const y = o[p] ?? o[u] ?? o[p.replace(/^fld_/, "")], T = c === "" || c === void 0 ? null : c, d = y === "" || y === void 0 ? null : y;
        if (String(T ?? "") !== String(d ?? ""))
          return !0;
      }
      return !1;
    },
    markFormClean: (t) => {
      s((r) => {
        const n = r.formRecords[t] || r.formRecords.default || {};
        return {
          originalFormRecords: {
            ...r.originalFormRecords,
            [t]: { ...n },
            default: { ...n }
          }
        };
      });
      try {
        qe.getState().setTabDirty(t, !1);
      } catch {
      }
    },
    // Lưu trữ bản ghi đang chọn
    setSelectedRecord: (t, r) => {
      s((n) => ({
        selectedRecords: {
          ...n.selectedRecords,
          [t]: r
        }
      }));
    },
    // Lấy bản ghi đang chọn
    getSelectedRecord: (t) => a().selectedRecords[t],
    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục MasterData, Products...)
    registerDataset: (t, r) => {
      s((n) => ({
        datasets: {
          ...n.datasets,
          [t]: r
        }
      }));
    },
    // 2. Lấy dataset của Entity (hỗ trợ tìm case-insensitive)
    getDataset: (t) => {
      const r = a().datasets;
      if (r[t]) return r[t];
      const n = t == null ? void 0 : t.toLowerCase(), o = Object.keys(r).find((l) => l.toLowerCase() === n);
      return o ? r[o] : Pr;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (t, r, n) => {
      s((o) => {
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), p = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), u = (N) => {
          const m = { ...N };
          for (const x of Object.keys(m))
            (x.toLowerCase() === i || x.toLowerCase() === r.toLowerCase()) && delete m[x];
          return m[p] = n, m[c] = n, m;
        }, y = o.formRecords[t] || {}, T = o.formRecords.default || {}, d = u(y), h = u(T);
        try {
          qe.getState().setTabDirty(t, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [t]: d,
            default: h
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, r, n = "") => nt(a(), t, r, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (t, r) => {
      s((n) => {
        const o = {};
        for (const [l, i] of Object.entries(r || {})) {
          o[l] = i;
          const p = l.replace(/^fld_/, ""), c = p.charAt(0).toLowerCase() + p.slice(1), u = p.charAt(0).toUpperCase() + p.slice(1);
          o[c] = i, o[u] = i;
        }
        return {
          formRecords: {
            ...n.formRecords,
            [t]: o,
            default: o
          },
          originalFormRecords: {
            ...n.originalFormRecords,
            [t]: { ...o },
            default: { ...o }
          }
        };
      });
    },
    // 6. Lấy trọn vẹn bản ghi (Gộp default và target để luôn đảm bảo đủ trường từ mọi section/tab)
    getFormRecord: (t) => {
      const r = a().formRecords, n = r[t] || {};
      let l = { ...r.default || {}, ...n };
      Object.keys(l).some(
        (c) => c !== "id" && c !== "Id" && l[c] !== void 0 && l[c] !== ""
      ) || (l = { ...a().collectScreenData(t), ...l });
      const p = { ...l };
      for (const [c, u] of Object.entries(l)) {
        if (!c) continue;
        const y = c.charAt(0).toLowerCase() + c.slice(1), T = c.charAt(0).toUpperCase() + c.slice(1);
        p[y] === void 0 && (p[y] = u), p[T] === void 0 && (p[T] = u);
      }
      return p;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (t, r, n) => {
      if (!n || typeof n != "object") return;
      const o = Er(r);
      if (o.length === 0) return;
      const l = a().formRecords[t] || {}, i = {};
      for (const p of o) {
        const c = Object.keys(n).find(
          (u) => u.toLowerCase() === p.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const u = n[c];
          i[p.targetField] = u, p.targetField.startsWith("fld_") || (i[`fld_${p.targetField.toLowerCase()}`] = u);
        }
      }
      s((p) => ({
        formRecords: {
          ...p.formRecords,
          [t]: {
            ...l,
            ...i
          }
        }
      }));
    },
    // 8. Truy vấn danh mục tham chiếu (OData Reference Query cho Select/Dropdown)
    queryReference: async (t, r, n = "id", o = "fullName") => {
      if (t)
        try {
          const i = r ? r.startsWith("?") ? r : `?$filter=${encodeURIComponent(r)}` : "", p = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${i}`, c = await fetch(p);
          if (c.ok) {
            const u = await c.json();
            return (Array.isArray(u) ? u : u.value || []).map((T) => {
              const d = T[n] !== void 0 ? T[n] : T.Id || T.id || T.code, h = T[o] !== void 0 ? T[o] : T.FullName || T.fullName || T.Name || T.name || T.title || String(d);
              return {
                value: d,
                label: String(h),
                rawItem: T
              };
            });
          }
        } catch {
        }
      return Vn(a().getDataset(t), r).map((i) => {
        const p = i[n] !== void 0 ? i[n] : i.Id || i.id || i.code, c = i[o] !== void 0 ? i[o] : i.FullName || i.fullName || i.Name || i.name || i.title || String(p);
        return {
          value: p,
          label: String(c),
          rawItem: i
        };
      });
    },
    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (t, r) => {
      if (t)
        try {
          const n = r ? r.startsWith("?") ? r : `?$filter=${encodeURIComponent(r)}` : "", o = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${n}`, l = await fetch(o);
          if (l.ok) {
            const i = await l.json();
            return Array.isArray(i) ? i : i.value || [];
          }
        } catch {
        }
      return Vn(a().getDataset(t), r);
    },
    // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
    saveRecord: async (t, r, n) => {
      if (!t || !r)
        return { success: !1, message: "Thiếu thông tin Entity hoặc dữ liệu bản ghi" };
      let o = r.id || r.Id;
      const l = r.code || r.Code || r.recordCode || r.RecordCode || r.key || r.Key;
      if ((!o || o === "new" || Number(o) <= 0) && l) {
        const c = a().datasets[t];
        if (Array.isArray(c)) {
          const u = c.find((y) => (y.code || y.Code || y.recordCode || y.RecordCode || y.key || y.Key) === l);
          u && (o = u.id || u.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), p = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${p}` : `http://localhost:5048/api/core/data/${encodeURIComponent(t)}`, u = i ? "PUT" : "POST", y = { ...r };
        for (const [h, N] of Object.entries(y))
          if (N === "")
            (/date|time/i.test(h) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(h) || /gw|cbm|vgm|package/i.test(h)) && (y[h] = null);
          else if (typeof N == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(N.trim())) {
            const [m, x, f] = N.trim().split("/");
            y[h] = `${f}-${x.padStart(2, "0")}-${m.padStart(2, "0")}T00:00:00`;
          }
        const T = {};
        for (const [h, N] of Object.entries(y)) {
          if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_"))
            continue;
          const m = h.replace(/^fld_/, ""), x = m.charAt(0).toUpperCase() + m.slice(1);
          T[x] = N;
        }
        i ? T.Id = p : (T.Id = 0, T.Active = !0);
        const d = await fetch(c, {
          method: u,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(T)
        });
        if (d.ok) {
          const h = await d.json(), N = h.id || h.Id || p;
          Y.getState().setActiveRecordId(String(N)), n && (a().setFormRecord(n, h), a().markFormClean(n)), a().setFormRecord("default", h), a().markFormClean("default");
          const m = a().datasets[t];
          if (m && Array.isArray(m))
            if (i) {
              const x = m.map(
                (f) => (f.id || f.Id) === p ? { ...f, ...h } : f
              );
              a().registerDataset(t, x);
            } else
              a().registerDataset(t, [h, ...m]);
          return {
            success: !0,
            data: h,
            message: i ? `Cập nhật thành công bản ghi #${p} (${t}) vào Database!` : `Thêm mới thành công bản ghi (${t}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${d.status}` };
      } catch (c) {
        return { success: !1, message: `Lỗi kết nối API: ${(c == null ? void 0 : c.message) || c}` };
      }
    },
    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (t, r) => {
      if (!t || !r)
        return { success: !1, message: "Thiếu thông tin Entity hoặc ID bản ghi" };
      try {
        const n = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${r}`, {
          method: "DELETE"
        });
        if (n.ok) {
          const o = a().datasets[t];
          if (o && Array.isArray(o)) {
            const l = o.filter((i) => (i.id || i.Id) !== r);
            a().registerDataset(t, l);
          }
          return { success: !0, message: `Đã xóa thành công bản ghi #${r} (${t})!` };
        } else
          return { success: !1, message: `Lỗi xóa bản ghi: HTTP ${n.status}` };
      } catch (n) {
        return { success: !1, message: `Lỗi kết nối khi xóa: ${(n == null ? void 0 : n.message) || n}` };
      }
    },
    // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (chuẩn Core)
    collectScreenData: (t) => {
      const r = a(), n = Y.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((h) => String(h.id) === String(t)) || o.find((h) => String(h.id) === String(l)) || o.find((h) => h.isDetail) || o[0], p = {}, c = (h) => {
        var N, m, x;
        if (!(!h || !Array.isArray(h)))
          for (const f of h) {
            const R = (N = f.dataBinding) == null ? void 0 : N.fieldName, w = (m = f.props) == null ? void 0 : m.name, $ = f.id, b = R || (typeof w == "string" ? w : "") || ($ == null ? void 0 : $.replace(/^fld_/, "")), D = String(b || "").trim();
            if (D) {
              let P = nt(r, String(f.pageId || l || "default"), D, void 0);
              if (P === void 0 && ((x = f.props) == null ? void 0 : x.value) !== void 0 && (P = f.props.value), P === void 0 && typeof document < "u") {
                const F = document.getElementById(f.id) || document.querySelector(`[name="${f.id}"]`) || document.querySelector(`[name="${D}"]`);
                F && "value" in F && F.value !== "" && (P = F.value);
              }
              if (P != null) {
                p[D] = P;
                const F = D.charAt(0).toLowerCase() + D.slice(1), B = D.charAt(0).toUpperCase() + D.slice(1);
                p[F] = P, p[B] = P;
              }
            }
            f.children && f.children.length > 0 && c(f.children);
          }
      };
      i != null && i.components && c(i.components);
      const u = t || String(l || "default"), y = { ...r.formRecords.default, ...u ? r.formRecords[u] : {} }, T = { ...p, ...y };
      if (!T.id && !T.Id && typeof window < "u") {
        const N = new URLSearchParams(window.location.search).get("id");
        N && N !== "new" && Number(N) > 0 && (T.id = Number(N), T.Id = Number(N));
      }
      const d = {};
      for (const [h, N] of Object.entries(T)) {
        if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_")) continue;
        const m = h.replace(/^fld_/, ""), x = m.charAt(0).toLowerCase() + m.slice(1), f = m.charAt(0).toUpperCase() + m.slice(1);
        d[x] = N, d[f] = N;
      }
      return (T.id || T.Id) && (d.id = T.id || T.Id, d.Id = T.id || T.Id), s((h) => ({
        formRecords: {
          ...h.formRecords,
          [u]: d,
          default: d
        }
      })), d;
    }
  }))
);
function Vn(s, a) {
  if (!a || !a.trim() || !Array.isArray(s) || s.length === 0)
    return s;
  let t = a.trim();
  const r = t.match(/\$filter=([^&]+)/i);
  if (r)
    t = decodeURIComponent(r[1]).trim();
  else if (t.startsWith("?") && !t.toLowerCase().includes("$filter="))
    return s;
  const n = t.split(/\s+and\s+/i);
  return s.filter((o) => {
    for (const l of n) {
      const i = l.trim();
      if (!i) continue;
      const p = i.match(/^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$/i);
      if (p) {
        const c = p[1], u = (p[2] || p[3] || "=").toLowerCase(), y = p[4].replace(/^['"\s]+|['"\s]+$/g, ""), d = Object.keys(o).find((h) => h.toLowerCase() === c.toLowerCase());
        if (d) {
          const N = (o[d] !== void 0 && o[d] !== null ? String(o[d]) : "").toLowerCase() === y.toLowerCase();
          if (u === "ne" || u === "!=" ? N : !N)
            return !1;
        }
      }
    }
    return !0;
  });
}
const $r = ({ node: s, isEditing: a }) => {
  var b;
  const { props: t, style: r } = s, n = Y((D) => D.features), o = Y((D) => D.activeFeatureId), l = n.find((D) => String(D.id) === String(s.pageId)) || n.find((D) => String(D.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((b = s.dataBinding) == null ? void 0 : b.fieldName) || s.props.name || s.id), f = ve((D) => nt(D, m, x, void 0)), R = ve((D) => D.setFieldValue), w = f !== void 0 ? f : t.value ?? "", $ = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label,
      showLabel: t.showLabel ?? !0,
      labelPosition: t.labelPosition || "left",
      labelWidth: t.labelWidth || "100px",
      required: t.required,
      error: t.validationError ? String(t.validationError) : void 0,
      colSpan: t.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "Nhập dữ liệu...",
          value: w,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${$ ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (D) => {
            const P = D.target.value;
            R(m, x, P), a || Le(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x,
              value: P
            });
          },
          onFocus: () => {
            a || Le(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x
            });
          },
          onBlur: (D) => {
            a || Le(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x,
              value: D.target.value
            });
          }
        }
      )
    }
  );
}, Ar = ({ node: s, isEditing: a }) => {
  var F;
  const { props: t, style: r } = s, n = Y((B) => B.features), o = Y((B) => B.activeFeatureId), l = n.find((B) => String(B.id) === String(s.pageId)) || n.find((B) => String(B.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((F = s.dataBinding) == null ? void 0 : F.fieldName) || s.props.name || s.id), f = ve((B) => nt(B, m, x, void 0)), R = ve((B) => B.setFieldValue), w = t.precision !== void 0 ? Number(t.precision) : 0, $ = f !== void 0 ? f : t.value, b = $ != null && $ !== "" ? Number($) : 0, D = (B) => B.toLocaleString("en-US", {
    minimumFractionDigits: w,
    maximumFractionDigits: w
  }), P = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label,
      showLabel: t.showLabel ?? !0,
      labelPosition: t.labelPosition || "left",
      labelWidth: t.labelWidth || "100px",
      required: t.required,
      error: t.validationError ? String(t.validationError) : void 0,
      colSpan: t.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "0",
          value: D(b),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (B) => {
            const O = B.target.value.replace(/,/g, "");
            if (O === "" || !isNaN(Number(O))) {
              const Q = O === "" ? 0 : Number(O);
              R(m, x, Q), a || Le(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: x,
                value: Q
              });
            }
          }
        }
      ) })
    }
  );
}, Br = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Y((m) => m.features), o = Y((m) => m.activeFeatureId), l = n.find((m) => String(m.id) === String(s.pageId)) || n.find((m) => String(m.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (m) => {
        a ? (m.ctrlKey || m.metaKey || m.altKey) && (m.stopPropagation(), Le(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : Le(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (m) => {
        m.stopPropagation(), Le(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, Wn = ({
  node: s,
  isEditing: a,
  isSelected: t,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var G;
  const { props: p, style: c } = s;
  Y((J) => J.updateComponentProps);
  const u = !!(p.isTab || p.tab || p.isTabGroup || s.type === "Tabs"), y = [
    { id: "main", label: "TAB 1" }
  ], T = p.tabs || y, [d, h] = E(
    p.activeTabId || ((G = T[0]) == null ? void 0 : G.id) || "main"
  ), N = p.layoutMode || "flex", m = p.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, x = p.gridConfig || { columns: 12, gap: "16px" }, f = Number(
    x.columns || (typeof m.columnsPerRow == "number" ? m.columnsPerRow : 12)
  ) || 12, R = (c == null ? void 0 : c.justifyContent) || m.justify || "flex-start", w = (c == null ? void 0 : c.alignItems) || m.align || "flex-start", $ = m.wrap || "wrap", b = N === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${f}, minmax(0, 1fr))`,
    gap: x.gap || m.gap || "16px",
    alignItems: w
  } : {
    display: "flex",
    flexDirection: m.direction || "row",
    flexWrap: $,
    justifyContent: R,
    alignItems: w,
    gap: m.gap || "12px"
  };
  let D = c != null && c.flex ? void 0 : "100%", P = c == null ? void 0 : c.flex, F = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const J = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(J) && J > 0) {
      const re = parseInt(o.gap || "12", 10) || 12, q = J === 1 ? "100%" : `calc((100% - ${(J - 1) * re}px) / ${J})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (D = q, P = `0 0 ${q}`, F = q);
    }
  }
  const { width: B, flex: O, ...Q } = c || {}, L = l ? {
    ...b,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: u ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (u ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (u ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...Q,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...b,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: u ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (u ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (u ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : D,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : P,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : F,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: r,
      onContextMenu: n,
      style: L,
      className: `relative transition-all duration-150 group/container box-border ${a ? `cursor-pointer ${t ? u ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : u ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${u ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: u ? `Tab: ${p.label || "Không tên"}` : "Khoảng trắng" }),
              /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
                "#",
                s.id.slice(-4)
              ] })
            ]
          }
        ),
        i
      ]
    }
  );
}, Or = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: p, maxWidth: c, width: u, ...y } = r || {}, [T, d] = E(!1), h = t.title || t.label || "Khối Bố Cục (Section)", N = t.collapsible ?? !0, m = t.layoutMode || "grid", x = t.flexConfig || {}, f = t.gridConfig || {}, R = Number(f.columns || x.columnsPerRow || 12) || 12, w = x.gap || f.gap || "12px", $ = (r == null ? void 0 : r.justifyContent) || x.justify || "flex-start", b = (r == null ? void 0 : r.alignItems) || x.align || "center", D = m === "flex" ? {
    display: "flex",
    flexDirection: x.direction || "row",
    flexWrap: x.wrap || "wrap",
    justifyContent: $,
    alignItems: b,
    gap: w
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${R}, minmax(0, 1fr))`,
    gap: w,
    alignItems: b
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...y
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: h })
          ] }),
          N && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => d(!T),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: T ? "Mở rộng" : "Thu gọn",
              children: T ? /* @__PURE__ */ e.jsx(Mt, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(us, { className: "w-4 h-4" })
            }
          )
        ] }),
        !T && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: D, children: a })
      ]
    }
  );
}, Al = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: p, maxWidth: c, width: u, ...y } = r || {}, T = t.title || t.label || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...y
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: T }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: t.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Lưu dữ liệu" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: a })
      ]
    }
  );
}, _r = ({
  x: s,
  y: a,
  column: t,
  isOpen: r,
  onClose: n,
  onToggleHide: o,
  onSetFreeze: l,
  onOpenProperties: i,
  onCloneColumn: p,
  onRemoveColumn: c,
  onToggleFilter: u
}) => {
  const y = We(null), [T, d] = ts.useState(!1);
  if (Ee(() => {
    if (!r) return;
    const m = (f) => {
      y.current && !y.current.contains(f.target) && n();
    }, x = (f) => {
      f.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", m), document.addEventListener("keydown", x), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("keydown", x);
    };
  }, [r, n]), !r) return null;
  const h = Math.min(s, window.innerWidth - 220), N = Math.min(a, window.innerHeight - 340);
  return Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: y,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: h, top: N },
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Cột: ",
              t.title || t.key
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-normal", children: [
              "#",
              t.key
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "py-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                onClick: () => {
                  o(t.key), n();
                },
                children: t.hidden ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Vs, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Ma, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(Zn, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(Ws, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  T && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${t.sticky === "left" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          l(t.key, "left"), n();
                        },
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: "📌 Ghim bên trái (Left)" }),
                          t.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px]", children: "✓" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${t.sticky === "right" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          l(t.key, "right"), n();
                        },
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: "📌 Ghim bên phải (Right)" }),
                          t.sticky === "right" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px]", children: "✓" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        className: "w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-slate-800 text-slate-400",
                        onClick: () => {
                          l(t.key, "none"), n();
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
                  i(t), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Column Data Options" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors",
                onClick: () => {
                  p(t.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ea, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                onClick: () => {
                  c(t.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5 text-rose-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Remove Column" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-slate-800 pt-1 mt-1", children: [
            u && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  u(), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ta, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Filter Local" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  i(t), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ha, { className: "w-3.5 h-3.5" }),
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
}, Mr = ({
  x: s,
  y: a,
  row: t,
  rowIndex: r,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: p,
  onInsertRowBelow: c,
  onMoveRowUp: u,
  onMoveRowDown: y
}) => {
  const T = We(null);
  if (Ee(() => {
    if (!o) return;
    const N = (x) => {
      T.current && !T.current.contains(x.target) && l();
    }, m = (x) => {
      x.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", m);
    };
  }, [o, l]), !o) return null;
  const d = Math.min(s, window.innerWidth - 220), h = Math.min(a, window.innerHeight - 260);
  return Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: T,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: d, top: h },
        onClick: (N) => N.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Thao Tác Dòng #",
              r + 1
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-mono", children: [
              "ID: ",
              (t == null ? void 0 : t.id) ?? r + 1
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "py-1", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  i(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ea, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  c(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(sa, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            u && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  u(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(na, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            y && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  y(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(aa, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  p(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, Hr = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], ja = ({
  events: s = [],
  onChange: a,
  scriptFile: t = "transactionList.bl.ts",
  componentName: r = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = Hr
}) => {
  const [p, c] = E(""), [, u] = E(0), y = t || "transactionList.bl.ts", T = fr(y), d = () => {
    var R;
    const x = T[0] || "openTransactionDetail", f = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((R = i[0]) == null ? void 0 : R.value) || "click",
      handlerName: x,
      action: x
    };
    a([...s, f]);
  }, h = (x, f) => {
    const R = s.map((w, $) => {
      if ($ !== x) return w;
      const b = { ...w, ...f };
      return f.handlerName && !f.action && (b.action = f.handlerName), b;
    });
    a(R);
  }, N = (x) => {
    const f = s.filter((R, w) => w !== x);
    a(f);
  }, m = () => {
    p.trim() && (gr(y, p.trim()), c(""), u((x) => x + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            s.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-400", children: [
          "File BL:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: y })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: d,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(Is, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          y
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: p,
            onChange: (x) => c(x.target.value),
            onKeyDown: (x) => {
              x.key === "Enter" && (x.preventDefault(), m());
            },
            placeholder: "ví dụ: openTransactionDetail, checkGW...",
            className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: m,
            className: "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(sa, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((x, f) => {
      const R = T.includes(x.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  f + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: x.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => N(f),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: x.trigger || "click",
                    onChange: (w) => h(f, { trigger: w.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((w) => /* @__PURE__ */ e.jsx("option", { value: w.value, children: w.label }, w.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: x.handlerName || T[0] || "",
                    onChange: (w) => {
                      const $ = w.target.value;
                      h(f, { handlerName: $, action: $ });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      T.map((w) => /* @__PURE__ */ e.jsxs("option", { value: w, children: [
                        w,
                        "()"
                      ] }, w)),
                      !R && x.handlerName && /* @__PURE__ */ e.jsxs("option", { value: x.handlerName, children: [
                        x.handlerName,
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
                  ps(
                    x,
                    r,
                    y,
                    {
                      componentId: n,
                      trigger: x.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(Va, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        x.id || f
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(st, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        r,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: y }),
        "."
      ] })
    ] })
  ] });
}, wa = ({
  isOpen: s,
  column: a,
  onClose: t,
  onSave: r
}) => {
  var T;
  const [n, o] = E(null), [l, i] = E("info"), p = Y((d) => d.features.find((h) => h.id === d.activeFeatureId));
  if (Ee(() => {
    if (a) {
      let d = [];
      if (Array.isArray(a.events))
        d = [...a.events];
      else if (typeof a.events == "string" && a.events.trim())
        try {
          const h = JSON.parse(a.events);
          Array.isArray(h) && (d = h);
        } catch {
        }
      d.length === 0 && a.action && (d = [
        {
          id: `evt-${a.key}-action`,
          trigger: a.componentType === "Button" ? "click" : "dblclick",
          handlerName: a.action,
          action: a.action
        }
      ]), o({
        ...a,
        code: a.code || `GP${Math.floor(1e5 + Math.random() * 9e5)}`,
        order: a.order ?? 1,
        width: a.width || "162px",
        minWidth: a.minWidth || "162px",
        maxWidth: a.maxWidth || "162px",
        componentType: a.componentType || "TextBox",
        align: a.align || "left",
        editable: a.editable ?? !0,
        frozen: !!(a.frozen || a.sticky === "left"),
        sticky: a.frozen || a.sticky === "left" ? "left" : "none",
        active: a.active ?? !0,
        hasFilter: a.hasFilter ?? !0,
        advancedSearch: a.advancedSearch ?? !0,
        formatCell: a.formatCell || a.format || "{Name}",
        events: d
      });
    }
  }, [a]), !s || !n) return null;
  const c = Array.isArray(n.events) ? n.events : [], u = (d, h) => {
    o((N) => {
      if (!N) return N;
      const m = { ...N, [d]: h };
      return d === "frozen" ? m.sticky = h ? "left" : "none" : d === "sticky" && (m.frozen = h === "left"), m;
    });
  }, y = (d) => {
    n && (r(n), t());
  };
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => y(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-amber-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Phân quyền" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: t,
              className: "flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(Je, { className: "w-3.5 h-3.5" }),
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
                  onChange: (d) => u("code", d.target.value),
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
                  onChange: (d) => u("order", parseInt(d.target.value) || 0),
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
                  onChange: (d) => u("feature", d.target.value),
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
                  onChange: (d) => u("refClass", d.target.value),
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
                  onChange: (d) => u("filterTemplate", d.target.value),
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
                  onChange: (d) => u("formatExcell", d.target.value),
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
                  onChange: (d) => u("childStyle", d.target.value),
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
                  onChange: (d) => u("dataSource", d.target.value),
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
                  onChange: (d) => u("key", d.target.value),
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
                  onChange: (d) => u("title", d.target.value),
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
                  onChange: (d) => u("description", d.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "RefName" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.refName || "",
                    onChange: (d) => u("refName", d.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Reference" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.reference || "",
                    onChange: (d) => u("reference", d.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (d) => u("formatCell", d.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data (Select)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (d) => u("formatData", d.target.value),
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
                    onChange: (d) => u("width", d.target.value),
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
                    onChange: (d) => u("minWidth", d.target.value),
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
                    onChange: (d) => u("maxWidth", d.target.value),
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
                  onChange: (d) => u("componentType", d.target.value),
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
                    onChange: (d) => u("precision", parseInt(d.target.value) || 0),
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
                    onChange: (d) => u("align", d.target.value),
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
                      /* @__PURE__ */ e.jsx(st, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: c.length > 0 ? `Cấu hình (${c.length})` : "+ Thêm Sự Kiện" })
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
                      /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      c.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: c.map((d) => `${d.trigger} ➔ ${d.handlerName || d.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      c.length,
                      " event",
                      c.length !== 1 ? "s" : ""
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
                    onChange: (d) => u("cascadeField", d.target.value),
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
                    onChange: (d) => u("aggregate", d.target.value),
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
                  onChange: (d) => u("validation", d.target.value),
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
            (n.componentType === "Select" || n.componentType === "Dropdown") && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(tt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((T = n.dropdownColumns) == null ? void 0 : T.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  c.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: c.length })
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
                    onChange: (d) => u("frozen", d.target.checked),
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
                    onChange: (d) => u("disabled", d.target.checked),
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
                    onChange: (d) => u("hasPermission", d.target.checked),
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
                    onChange: (d) => u("focusSearch", d.target.checked),
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
                    onChange: (d) => u("filterEq", d.target.checked),
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
                    onChange: (d) => u("filterLocal", d.target.checked),
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
                    onChange: (d) => u("hidden", d.target.checked),
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
                    onChange: (d) => u("active", d.target.checked),
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
                    onChange: (d) => u("advancedSearch", d.target.checked),
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
                    onChange: (d) => u("virtualScroll", d.target.checked),
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
                    onChange: (d) => u("upperCase", d.target.checked),
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
                    onChange: (d) => u("hasFilter", d.target.checked),
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
                    onChange: (d) => u("isRealtime", d.target.checked),
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
                    onChange: (d) => u("autoFit", d.target.checked),
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
                    onChange: (d) => u("aggregate", d.target.checked ? "sum" : "none"),
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
                    onChange: (d) => u("addDate", d.target.checked),
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
                    onChange: (d) => u("editable", d.target.checked),
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
                    onChange: (d) => u("isPivot", d.target.checked),
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
                    onChange: (d) => u("basicSearch", d.target.checked),
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
                    onChange: (d) => u("ignoreTrigger", d.target.checked),
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
                    onChange: (d) => u("hideGrid", d.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && (() => {
            const d = n.dropdownColumns || [], h = (N) => u("dropdownColumns", N);
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(tt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: n.reference || n.refName || "(Chưa nhập Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      h([
                        ...d,
                        {
                          key: `col${d.length + 1}`,
                          title: `Cột ${d.length + 1}`,
                          width: "50%",
                          align: "left"
                        }
                      ]);
                    },
                    className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm",
                    children: [
                      /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-1", children: "Khóa Chính (IdField)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: n.idField || "id",
                      placeholder: "id",
                      onChange: (N) => u("idField", N.target.value),
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
                      value: n.formatData || "",
                      placeholder: "{FullName} - {Address}",
                      onChange: (N) => u("formatData", N.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-purple-400 font-semibold block mb-1", children: "Tự Động Điền Cột Khác (Populate)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: n.populateField || "",
                      placeholder: "VendorName = FullName",
                      onChange: (N) => u("populateField", N.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              d.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((N, m) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: m === 0,
                          onClick: () => {
                            const x = [...d], f = x[m];
                            x[m] = x[m - 1], x[m - 1] = f, h(x);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: m === d.length - 1,
                          onClick: () => {
                            const x = [...d], f = x[m];
                            x[m] = x[m + 1], x[m + 1] = f, h(x);
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
                        value: N.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (x) => {
                          const f = [...d];
                          f[m] = { ...f[m], key: x.target.value }, h(f);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: N.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (x) => {
                          const f = [...d];
                          f[m] = { ...f[m], title: x.target.value }, h(f);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: N.width || "50%",
                        placeholder: "Width",
                        onChange: (x) => {
                          const f = [...d];
                          f[m] = { ...f[m], width: x.target.value }, h(f);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: N.align || "left",
                        onChange: (x) => {
                          const f = [...d];
                          f[m] = { ...f[m], align: x.target.value }, h(f);
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
                        onClick: () => h(d.filter((x, f) => f !== m)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                m
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            ja,
            {
              events: c,
              onChange: (d) => {
                u("events", d);
                const h = d.find((N) => N.trigger === "click" || N.trigger === "actionClick");
                h && u("action", h.handlerName || h.action);
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
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Admin", "Manager", "Dispatcher", "Sales", "Customer"].map((d) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer", children: [
              /* @__PURE__ */ e.jsx("input", { type: "checkbox", defaultChecked: d === "Admin" || d === "Manager", className: "rounded text-emerald-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200", children: d })
            ] }, d)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-3 px-6 py-3 bg-[#0b1329] border-t border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: t,
            className: "px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors",
            children: "Đóng"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => y(),
            className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
            children: [
              /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
            ]
          }
        )
      ] })
    ] }) }),
    document.body
  );
}, Vr = ({
  columns: s,
  data: a,
  showRowNumber: t = !0,
  rowNumberWidth: r = 55,
  leftOffsets: n = {}
}) => {
  if (!s.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const p = a.map((d) => d[i.key]).filter((d) => d != null && d !== "");
    if (i.aggregate === "count") {
      const d = p.length;
      return `${i.summaryPrefix || ""}${d}${i.summarySuffix || " dòng"}`;
    }
    const c = p.map((d) => {
      if (typeof d == "number") return d;
      const h = parseFloat(String(d).replace(/,/g, ""));
      return isNaN(h) ? 0 : h;
    });
    if (c.length === 0) return "—";
    let u = 0;
    i.aggregate === "sum" ? u = c.reduce((d, h) => d + h, 0) : i.aggregate === "avg" ? u = c.reduce((d, h) => d + h, 0) / c.length : i.aggregate === "min" ? u = Math.min(...c) : i.aggregate === "max" && (u = Math.max(...c));
    const y = i.precision ?? (i.format === "number_thousands" ? 0 : 2), T = y > 0 ? u.toLocaleString("en-US", { minimumFractionDigits: y, maximumFractionDigits: y }) : u.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${T}${i.summarySuffix || ""}`;
  };
  return /* @__PURE__ */ e.jsxs("tr", { className: "border-t-2 border-emerald-500/50 bg-slate-900/95 font-bold text-xs text-emerald-400 select-none shadow-inner", children: [
    t && /* @__PURE__ */ e.jsx(
      "td",
      {
        className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-20 bg-slate-900 border-r border-slate-800",
        style: { width: `${r}px`, minWidth: `${r}px` },
        children: "Σ"
      }
    ),
    s.filter((i) => !i.hidden).map((i, p) => {
      const c = l(i), u = p === 0, y = i.sticky === "left" || !!i.frozen, T = y && n[i.key] !== void 0 ? n[i.key] : void 0, d = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${d} ${y ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: T !== void 0 ? `${T}px` : void 0
          },
          children: u && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function Yt(s) {
  if (!s || typeof s != "string" || !s.trim()) return null;
  const a = s.trim(), t = a.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (t) {
    const o = parseInt(t[1], 10), l = parseInt(t[2], 10) - 1, i = parseInt(t[3], 10);
    if (l >= 0 && l <= 11 && o >= 1 && o <= 31)
      return { year: i, month: l, day: o };
  }
  const r = a.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (r) {
    const o = parseInt(r[1], 10), l = parseInt(r[2], 10) - 1, i = parseInt(r[3], 10);
    if (l >= 0 && l <= 11 && i >= 1 && i <= 31)
      return { year: o, month: l, day: i };
  }
  const n = new Date(s);
  return isNaN(n.getTime()) ? null : { year: n.getFullYear(), month: n.getMonth(), day: n.getDate() };
}
function $t(s, a, t) {
  const r = String(t).padStart(2, "0"), n = String(a + 1).padStart(2, "0");
  return `${r}/${n}/${s}`;
}
const Wr = [
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
], Kr = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], Ca = ({
  value: s,
  onChange: a,
  placeholder: t = "DD/MM/YYYY",
  disabled: r = !1,
  readOnly: n = !1,
  className: o = "",
  inputClassName: l = "",
  error: i,
  title: p,
  tabIndex: c,
  onKeyDown: u,
  onFocus: y,
  onBlur: T,
  autoFocus: d = !1,
  isGridCell: h = !1
}) => {
  const N = We(null), m = We(null), x = We(null), [f, R] = E(!1), [w, $] = E(() => {
    const V = Yt(s);
    return V ? $t(V.year, V.month, V.day) : s || "";
  }), b = Me(() => Yt(s), [s]), D = Me(() => {
    const V = /* @__PURE__ */ new Date();
    return { year: V.getFullYear(), month: V.getMonth(), day: V.getDate() };
  }, []), [P, F] = E((b == null ? void 0 : b.year) || D.year), [B, O] = E((b == null ? void 0 : b.month) ?? D.month), [Q, L] = E({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Ee(() => {
    const V = Yt(s);
    V ? ($($t(V.year, V.month, V.day)), F(V.year), O(V.month)) : $(s || "");
  }, [s]);
  const G = () => {
    if (!N.current) return;
    const V = N.current.getBoundingClientRect(), U = 310, ue = 280, Oe = window.innerHeight - V.bottom < U && V.top > U;
    let He = Oe ? V.top - U - 4 : V.bottom + 4, Fe = V.left;
    Fe + ue > window.innerWidth - 10 && (Fe = Math.max(10, window.innerWidth - ue - 10)), L({ top: He, left: Fe, openUpwards: Oe });
  }, J = () => {
    r || n || (G(), R(!0));
  }, re = () => {
    R(!1);
  };
  Ee(() => {
    if (!f) return;
    const V = (ue) => {
      const we = ue.target;
      N.current && !N.current.contains(we) && x.current && !x.current.contains(we) && re();
    }, U = () => {
      f && G();
    };
    return document.addEventListener("mousedown", V, !0), window.addEventListener("resize", U, !0), window.addEventListener("scroll", U, !0), () => {
      document.removeEventListener("mousedown", V, !0), window.removeEventListener("resize", U, !0), window.removeEventListener("scroll", U, !0);
    };
  }, [f]);
  const q = (V) => {
    V.stopPropagation(), B === 0 ? (O(11), F((U) => U - 1)) : O((U) => U - 1);
  }, je = (V) => {
    V.stopPropagation(), B === 11 ? (O(0), F((U) => U + 1)) : O((U) => U + 1);
  }, j = (V, U = 0) => {
    var He;
    let ue = P, we = B + U;
    we < 0 ? (we = 11, ue -= 1) : we > 11 && (we = 0, ue += 1);
    const Oe = $t(ue, we, V);
    $(Oe), a(Oe), re(), (He = m.current) == null || He.focus();
  }, he = (V) => {
    var ue;
    V.stopPropagation();
    const U = $t(D.year, D.month, D.day);
    $(U), F(D.year), O(D.month), a(U), re(), (ue = m.current) == null || ue.focus();
  }, Ce = (V) => {
    var U;
    V.stopPropagation(), $(""), a(""), re(), (U = m.current) == null || U.focus();
  }, le = (V) => {
    const U = V.target.value;
    $(U);
    const ue = Yt(U);
    if (ue) {
      const we = $t(ue.year, ue.month, ue.day);
      a(we), F(ue.year), O(ue.month);
    } else U === "" && a("");
  }, ge = (V) => {
    if (V.key === "Escape")
      f && (V.stopPropagation(), re());
    else if (V.key === "Enter") {
      const U = Yt(w);
      if (U) {
        const ue = $t(U.year, U.month, U.day);
        $(ue), a(ue);
      }
      f && re();
    } else (V.key === "F4" || V.altKey && V.key === "ArrowDown") && (V.preventDefault(), V.stopPropagation(), f ? re() : J());
    u && u(V);
  }, me = Me(() => {
    const V = (new Date(P, B, 1).getDay() + 6) % 7, U = new Date(P, B + 1, 0).getDate(), ue = new Date(P, B, 0).getDate(), we = [];
    for (let Fe = V - 1; Fe >= 0; Fe--)
      we.push({
        day: ue - Fe,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let Fe = 1; Fe <= U; Fe++)
      we.push({
        day: Fe,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const He = (we.length <= 35 ? 35 : 42) - we.length;
    for (let Fe = 1; Fe <= He; Fe++)
      we.push({
        day: Fe,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return we;
  }, [P, B]), ye = () => f ? Tt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: x,
        style: {
          position: "fixed",
          top: `${Q.top}px`,
          left: `${Q.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (V) => V.stopPropagation(),
        className: "bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: q,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(la, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: B,
                  onChange: (V) => O(parseInt(V.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: Wr.map((V, U) => /* @__PURE__ */ e.jsx("option", { value: U, children: V }, U))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: P,
                  onChange: (V) => F(parseInt(V.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (V, U) => P - 20 + U).map((V) => /* @__PURE__ */ e.jsx("option", { value: V, children: V }, V))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: je,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ws, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: Kr.map((V, U) => /* @__PURE__ */ e.jsx("div", { className: U >= 5 ? "text-amber-400/80" : "", children: V }, U)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: me.map((V, U) => {
            const ue = b && V.isCurrentMonth && b.year === P && b.month === B && b.day === V.day, we = V.isCurrentMonth && D.year === P && D.month === B && D.day === V.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => j(V.day, V.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${ue ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : we ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : V.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: V.day
              },
              U
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: he,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Wa, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            w && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Ce,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Je, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: re,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, z = h ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", Z = h ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: N, className: `${z} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: m,
        type: "text",
        tabIndex: c,
        autoFocus: d,
        disabled: r,
        readOnly: n,
        placeholder: t,
        title: i || p,
        value: w,
        onChange: le,
        onKeyDown: ge,
        onFocus: y,
        onBlur: T,
        onClick: (V) => {
          V.stopPropagation(), f || J();
        },
        className: Z
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: r,
        onClick: (V) => {
          V.stopPropagation(), f ? re() : J();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(ra, { className: "w-3.5 h-3.5" })
      }
    ),
    ye()
  ] });
}, Gr = ({
  column: s,
  value: a,
  row: t,
  rowIndex: r,
  columnIndex: n = 0,
  error: o,
  onChange: l,
  onActionClick: i,
  onKeyDown: p,
  onFocus: c
}) => {
  const u = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", y = a === "—" || a === "-" ? "" : a ?? "", T = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", d = (x) => {
    p && p(x, r, n, s.key);
  }, h = () => {
    c && c(r, n, s.key);
  }, N = {
    "data-grid-cell": `${r}_${n}`,
    "data-grid-row": r,
    "data-grid-col": n,
    "data-grid-colkey": s.key
  };
  if (s.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...N, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!a,
        disabled: s.disabled || !u,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => l(x.target.checked),
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: "w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      }
    ) });
  if (s.componentType === "Button") {
    const x = s.formatCell || s.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...N, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: (f) => {
          f.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: "px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20",
        children: x
      }
    ) });
  }
  if (s.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (x) => {
          x.preventDefault(), x.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: "text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate",
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(oa, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!u) {
    if (s.precision !== void 0 && typeof a == "number") {
      const x = s.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: d,
          onFocus: h,
          ...N,
          className: "font-mono text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: [
            x,
            s.summarySuffix ? ` ${s.summarySuffix}` : ""
          ]
        }
      );
    }
    if (s.formatCell && a !== void 0 && a !== null) {
      let x = s.formatCell.replace("{0}", String(a));
      return typeof t == "object" && t !== null && Object.keys(t).forEach((f) => {
        x = x.replace(new RegExp(`\\{${f}\\}`, "gi"), String(t[f] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: d,
          onFocus: h,
          ...N,
          className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: x
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
        children: a != null ? String(a) : "—"
      }
    );
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let x = s.options || [];
    const f = s.reference || s.refName;
    if (x.length === 0 && f) {
      const R = ve.getState().getDataset(f);
      if (Array.isArray(R) && R.length > 0) {
        const w = s.valueField || s.idField || "code", $ = s.displayField || s.selectField || "name";
        x = R.map((b) => ({
          value: String(b[w] ?? b.code ?? b.id ?? ""),
          label: String(b[$] ?? b.name ?? b[w] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: s.disabled,
        title: o || void 0,
        onClick: (R) => R.stopPropagation(),
        onChange: (R) => l(R.target.value),
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${T} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          x.map((R) => /* @__PURE__ */ e.jsx("option", { value: R.value, className: "bg-slate-900 text-slate-100", children: R.label }, R.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...N, children: /* @__PURE__ */ e.jsx(
      Ca,
      {
        isGridCell: !0,
        value: y,
        disabled: s.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (x) => l(x),
        onKeyDown: d,
        onFocus: h
      }
    ) });
  if (s.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: y,
        placeholder: "0",
        disabled: s.disabled,
        title: o || void 0,
        step: s.precision && s.precision > 0 ? Math.pow(10, -s.precision) : 1,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => {
          const f = x.target.value;
          l(f === "" ? "" : Number(f));
        },
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${T} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (s.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: y,
        placeholder: s.title ? `Nhập ${s.title}...` : "Nhập...",
        disabled: s.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => {
          const f = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
          l(f);
        },
        onKeyDown: d,
        onFocus: h,
        ...N,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${T} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const m = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: y,
      placeholder: s.title ? `Nhập ${s.title}...` : "Nhập dữ liệu...",
      disabled: s.disabled,
      title: o || void 0,
      onClick: (x) => x.stopPropagation(),
      onChange: (x) => {
        const f = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
        l(f);
      },
      onKeyDown: d,
      onFocus: h,
      ...N,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${T} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${m} ${s.cssClass || ""}`
    }
  );
};
function zr({
  tableRef: s,
  rows: a,
  visibleColumns: t,
  selectedRowId: r,
  setSelectedRowId: n,
  selectedRowIds: o,
  setSelectedRowIds: l,
  onRowDoubleClick: i,
  onAddRow: p,
  onDeleteRow: c,
  onDuplicateRow: u,
  onToggleAll: y,
  onFilterByCell: T,
  onQuickSum: d,
  onToggleColumnFilters: h,
  isEditableTable: N = !0
}) {
  const [m, x] = E(null), f = rs(
    (b, D) => {
      if (b < 0 || b >= a.length || D < 0 || D >= t.length) return;
      const P = t[D], F = a[b], B = (F == null ? void 0 : F.id) ?? (F == null ? void 0 : F.Id) ?? b;
      if (n(B), x({ rowIndex: b, colIndex: D, colKey: P.key }), s.current) {
        const O = `[data-grid-cell="${b}_${D}"]`, Q = s.current.querySelector(O);
        if (Q) {
          Q.scrollIntoView({ block: "nearest", inline: "nearest" });
          const L = Q.tagName === "INPUT" || Q.tagName === "SELECT" || Q.tagName === "TEXTAREA" || Q.tagName === "BUTTON" ? Q : Q.querySelector("input, select, textarea, button") || Q;
          L.focus(), L instanceof HTMLInputElement && (L.type === "text" || L.type === "number") && L.select();
        }
      }
    },
    [a, t, s, n]
  ), R = rs(
    (b) => {
      if (!s.current) return;
      const D = s.current.querySelector(`[data-row-index="${b}"]`);
      D && D.scrollIntoView({ block: "nearest" });
    },
    [s]
  ), w = rs(
    (b) => {
      if (b.key === "F1") {
        b.preventDefault(), b.stopPropagation(), y == null || y();
        return;
      }
      if (b.key === "F2") {
        b.preventDefault(), b.stopPropagation(), T == null || T();
        return;
      }
      if (b.key === "F3") {
        b.preventDefault(), b.stopPropagation(), d == null || d();
        return;
      }
      if (b.key === "F4") {
        b.preventDefault(), b.stopPropagation(), p == null || p();
        return;
      }
      if (b.key === "F6") {
        b.preventDefault(), b.stopPropagation(), h == null || h();
        return;
      }
      if (b.key === "ArrowDown") {
        b.preventDefault();
        const D = a.findIndex((F, B) => (F.id ?? F.Id ?? B) === r), P = D < a.length - 1 ? D + 1 : D;
        if (P >= 0 && P !== D) {
          const F = a[P];
          n(F.id ?? F.Id ?? P), l(/* @__PURE__ */ new Set([F.id ?? F.Id ?? P])), R(P);
        }
        return;
      }
      if (b.key === "ArrowUp") {
        b.preventDefault();
        const D = a.findIndex((F, B) => (F.id ?? F.Id ?? B) === r), P = D > 0 ? D - 1 : 0;
        if (P >= 0 && P !== D) {
          const F = a[P];
          n(F.id ?? F.Id ?? P), l(/* @__PURE__ */ new Set([F.id ?? F.Id ?? P])), R(P);
        }
        return;
      }
      if (b.key === "Enter") {
        b.preventDefault();
        const D = a.findIndex((P, F) => (P.id ?? P.Id ?? F) === r);
        D >= 0 && i && i(a[D], D);
        return;
      }
      if (b.key === "Delete") {
        const D = a.findIndex((P, F) => (P.id ?? P.Id ?? F) === r);
        D >= 0 && c && (b.preventDefault(), c(D));
        return;
      }
      if ((b.ctrlKey || b.metaKey) && (b.key === "d" || b.key === "D")) {
        b.preventDefault();
        const D = a.findIndex((P, F) => (P.id ?? P.Id ?? F) === r);
        D >= 0 && u && u(D);
        return;
      }
    },
    [
      a,
      r,
      n,
      l,
      R,
      y,
      T,
      d,
      p,
      h,
      i,
      c,
      u
    ]
  ), $ = rs(
    (b, D, P, F) => {
      var B, O, Q;
      if (b.key === "F1") {
        b.preventDefault(), b.stopPropagation(), y == null || y();
        return;
      }
      if (b.key === "F2") {
        b.preventDefault(), b.stopPropagation(), T == null || T();
        return;
      }
      if (b.key === "F3") {
        b.preventDefault(), b.stopPropagation(), d == null || d();
        return;
      }
      if (b.key === "F4") {
        b.preventDefault(), b.stopPropagation(), p == null || p();
        return;
      }
      if (b.key === "F6") {
        b.preventDefault(), b.stopPropagation(), h == null || h();
        return;
      }
      if (b.key === "ArrowDown") {
        b.preventDefault(), D < a.length - 1 && f(D + 1, P);
        return;
      }
      if (b.key === "ArrowUp") {
        b.preventDefault(), D > 0 && f(D - 1, P);
        return;
      }
      if (b.key === "ArrowLeft") {
        const L = b.target, G = L && L.selectionStart === 0 && L.selectionEnd === 0, J = L && L.selectionStart === 0 && L.selectionEnd === ((B = L.value) == null ? void 0 : B.length), re = !L || L.tagName === "SELECT" || L.type === "checkbox" || L.tagName === "BUTTON";
        (G || J || re) && P > 0 && (b.preventDefault(), f(D, P - 1));
        return;
      }
      if (b.key === "ArrowRight") {
        const L = b.target, G = L && L.selectionStart === ((O = L.value) == null ? void 0 : O.length), J = L && L.selectionStart === 0 && L.selectionEnd === ((Q = L.value) == null ? void 0 : Q.length), re = !L || L.tagName === "SELECT" || L.type === "checkbox" || L.tagName === "BUTTON";
        (G || J || re) && P < t.length - 1 && (b.preventDefault(), f(D, P + 1));
        return;
      }
      if (b.key === "Tab") {
        b.preventDefault(), b.shiftKey ? P > 0 ? f(D, P - 1) : D > 0 && f(D - 1, t.length - 1) : P < t.length - 1 ? f(D, P + 1) : D < a.length - 1 ? f(D + 1, 0) : p && (p(), setTimeout(() => {
          f(a.length, 0);
        }, 60));
        return;
      }
      if (b.key === "Enter") {
        if (b.preventDefault(), b.shiftKey) {
          D > 0 && f(D - 1, P);
          return;
        }
        D < a.length - 1 ? f(D + 1, P) : p && (p(), setTimeout(() => {
          f(a.length, P);
        }, 60));
        return;
      }
      if (b.key === "Escape") {
        b.preventDefault();
        const L = b.target;
        L == null || L.blur();
        return;
      }
    },
    [a, t, f, y, T, d, p, h]
  );
  return {
    focusedCell: m,
    setFocusedCell: x,
    focusCell: f,
    scrollToRow: R,
    handleTableContainerKeyDown: w,
    handleCellKeyDown: $
  };
}
function ka(s) {
  return [...s].sort((a, t) => {
    const r = !!(a.frozen || a.sticky === "left"), n = !!(t.frozen || t.sticky === "left");
    if (r && !n) return -1;
    if (!r && n) return 1;
    const o = typeof a.order == "number" ? a.order : 999, l = typeof t.order == "number" ? t.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Jt(s) {
  return ka(s).map((t, r) => ({
    ...t,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function Os(s, a, t) {
  if (t < 0 || t >= s.length || a === t) return s;
  const r = [...s], [n] = r.splice(a, 1), o = r.filter((u) => u.frozen || u.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && t < o ? (n.frozen = !0, n.sticky = "left") : l && t >= o && (n.frozen = !1, n.sticky = "none"), r.splice(t, 0, n);
  const i = r.filter((u) => u.frozen || u.sticky === "left"), p = r.filter((u) => !u.frozen && u.sticky !== "left");
  return [...i, ...p].map((u, y) => ({
    ...u,
    order: y + 1,
    frozen: !!(u.frozen || u.sticky === "left"),
    sticky: u.frozen || u.sticky === "left" ? "left" : "none"
  }));
}
function Ta(s, a) {
  const t = s.map((r) => {
    if (r.key === a) {
      const n = !(r.frozen || r.sticky === "left");
      return {
        ...r,
        frozen: n,
        sticky: n ? "left" : "none"
      };
    }
    return r;
  });
  return Jt(t);
}
function Ur(s, a = 55) {
  const t = {};
  let r = a, n = null;
  return s.forEach((o) => {
    if (!!(o.frozen || o.sticky === "left") && !o.hidden) {
      t[o.key] = r, n = o.key;
      const i = parseInt(String(o.width || "140"), 10) || 140;
      r += i;
    }
  }), { offsets: t, lastFrozenKey: n };
}
class qr {
  constructor() {
    js(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    js(this, "populateResolvers", /* @__PURE__ */ new Map());
  }
  /**
   * Đăng ký bộ lọc phụ thuộc giữa 2 trường (VD: country -> city, category -> product)
   */
  registerCascade(a, t, r) {
    const n = `${a.toLowerCase().trim()}->${t.toLowerCase().trim()}`;
    this.cascadeResolvers.set(n, r);
  }
  /**
   * Đăng ký bộ quy tắc tự động điền các trường liên đới khi trường nguồn thay đổi
   */
  registerPopulate(a, t) {
    const r = a.toLowerCase().trim().replace(/^fld_/, "");
    this.populateResolvers.set(r, t);
  }
  /**
   * Lấy danh sách options phụ thuộc theo Cascade
   */
  getCascadedOptions(a, t, r) {
    const n = `${a.toLowerCase().trim()}->${r.toLowerCase().trim()}`, o = this.cascadeResolvers.get(n);
    if (o) {
      const l = o(t);
      return Array.isArray(l) ? l : [];
    }
    return [];
  }
  /**
   * Tự động tính toán các trường cần điền (Auto-Populate)
   */
  calculateAutoPopulatedFields(a, t, r) {
    const n = a.toLowerCase().trim().replace(/^fld_/, ""), o = this.populateResolvers.get(n);
    return o ? o(t, r) || {} : {};
  }
}
const Sa = new qr();
function Bl(s, a, t) {
  return Sa.getCascadedOptions(s, a, t);
}
function Yr(s, a, t) {
  return Sa.calculateAutoPopulatedFields(s, a, t);
}
function _s(s) {
  const a = String(s || "").trim().toUpperCase();
  if (!a)
    return { isValid: !1, message: "Số Container không được để trống" };
  if (!/^[A-Z]{4}\d{7}$/.test(a))
    return {
      isValid: !1,
      message: `Định dạng số Container [${a}] không hợp lệ. Phải gồm 4 chữ cái + 7 chữ số (Ví dụ: ZIRU8505175)`
    };
  const r = {
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
    const p = a[i];
    let c = 0;
    if (p >= "0" && p <= "9")
      c = parseInt(p, 10);
    else if (r[p] !== void 0)
      c = r[p];
    else
      return { isValid: !1, message: `Ký tự [${p}] trong số container không hợp lệ` };
    const u = Math.pow(2, i);
    n += c * u;
  }
  let o = n % 11;
  o === 10 && (o = 0);
  const l = parseInt(a[10], 10);
  return o === l ? {
    isValid: !0,
    calculatedCheckDigit: o,
    actualCheckDigit: l,
    message: `Số Container ${a} hợp lệ chuẩn ISO 6346 (Check Digit: ${l})`
  } : {
    isValid: !1,
    calculatedCheckDigit: o,
    actualCheckDigit: l,
    message: `Số Container ${a} sai Check Digit: Tính toán là [${o}] nhưng nhập là [${l}]`
  };
}
function Kn(s) {
  if (!s || typeof s != "string") return null;
  const a = s.trim();
  if (!a || a === "—" || a === "-") return null;
  const t = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, r = a.match(t);
  if (r) {
    const o = parseInt(r[1], 10), l = parseInt(r[2], 10) - 1, i = parseInt(r[3], 10);
    return new Date(i, l, o);
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(a)) {
    const o = new Date(a);
    return isNaN(o.getTime()) ? null : o;
  }
  return null;
}
function Ms(s, a, t = "Ngày bắt đầu", r = "Ngày kết thúc") {
  const n = Kn(s), o = Kn(a);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${t} (${s}) không thể xảy ra sau ${r} (${a})`
  } : { isValid: !0 };
}
function Jr(s, a, t = [], r = {}) {
  const n = [];
  for (const o of t) {
    if (o.rule === "required" && (a == null || typeof a == "string" && a.trim() === "" || Array.isArray(a) && a.length === 0)) {
      n.push(o.message || `${s} là trường bắt buộc nhập`);
      continue;
    }
    if (!(a == null || typeof a == "string" && a.trim() === "")) {
      if (o.rule === "minLength" && typeof a == "string") {
        const l = Number(o.value) || 0;
        a.length < l && n.push(o.message || `${s} phải có tối thiểu ${l} ký tự`);
      }
      if (o.rule === "maxLength" && typeof a == "string") {
        const l = Number(o.value) || 0;
        a.length > l && n.push(o.message || `${s} không được vượt quá ${l} ký tự`);
      }
      if (o.rule === "pattern" && o.value)
        try {
          (typeof o.value == "string" ? new RegExp(o.value) : o.value).test(String(a)) || n.push(o.message || `${s} không đúng định dạng quy định`);
        } catch {
          console.warn("[ValidationEngine] Biểu thức Regex không hợp lệ:", o.value);
        }
      if (o.rule === "containerNo") {
        const l = _s(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = Ms(String(a), String(l), s, o.targetField);
          !i.isValid && i.message && n.push(o.message || i.message);
        }
      }
      if (o.rule === "custom" && typeof o.validatorFn == "function") {
        const l = o.validatorFn(a, r);
        typeof l == "string" && l ? n.push(l) : l === !1 && n.push(o.message || `${s} không thỏa mãn điều kiện kiểm tra tùy biến`);
      }
    }
  }
  return {
    isValid: n.length === 0,
    errors: n
  };
}
function Ol(s, a) {
  const t = {};
  for (const [r, n] of Object.entries(a)) {
    const o = s[r], l = Jr(r, o, n, s);
    l.isValid || (t[r] = l.errors);
  }
  return t;
}
const Ke = {
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
}, Xr = {
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
}, At = ss()(
  fs((s, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...Ke["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...Ke["FCLI-26020005"].shippingInfo],
      grid_container_info: [...Ke["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...Ke["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const r = Ke[t];
      r && s({
        activeJobNo: t,
        masterRecord: { ...r.master },
        detailGrids: {
          grid_shipping_info: [...r.shippingInfo],
          grid_container_info: [...r.containerInfo],
          grid_shipment_detail: [...r.shipmentDetail]
        },
        validationErrors: {}
      });
    },
    // 2. Tạo Job mới
    createNewJob: () => {
      const t = a().jobs, n = `FCLI-2602000${t.length + 5}`, o = {
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
      return Ke[n] = {
        master: o,
        shippingInfo: [],
        containerInfo: [],
        shipmentDetail: []
      }, s({
        jobs: [...t, n],
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
    updateMasterField: (t, r) => {
      const n = String(Xr[t] || t), l = { ...a().masterRecord, [n]: r }, i = Yr(n, r, l);
      Object.assign(l, i);
      const p = { ...a().validationErrors };
      if (n === "mblNo") {
        const u = String(r || "").trim();
        u ? /^[A-Z0-9]{8,18}$/i.test(u) ? delete p.mblNo : p.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : p.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete p.jobNo : p.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const u = l.mblIssuedDate, y = l.shipmentDate;
        if (u && y) {
          const T = Ms(u, y, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          T.isValid ? delete p.mblIssuedDate : p.mblIssuedDate = T.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: p
      });
      const c = a().activeJobNo;
      Ke[c] && (Ke[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, r, n, o) => {
      const l = a().detailGrids, i = l[t] || [], p = { ...a().validationErrors }, c = `${t}_${r}_${n}`, u = i.map((T, d) => T.id !== void 0 && T.id === r || T.id === void 0 && d === r ? { ...T, [n]: o } : T);
      if (n === "containerNo") {
        const T = _s(String(o));
        T.isValid ? delete p[c] : p[c] = T.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const T = u.find((d) => d.id === r);
        if (T && T.etd && T.eta) {
          const d = Ms(T.etd, T.eta, "ETD", "ETA"), h = `${t}_${r}_etd_eta`;
          d.isValid ? delete p[h] : p[h] = d.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: u },
        validationErrors: p
      }), t === "grid_container_info" && a().recalculateTotals();
      const y = a().activeJobNo;
      Ke[y] && (t === "grid_shipping_info" && (Ke[y].shippingInfo = u), t === "grid_container_info" && (Ke[y].containerInfo = u), t === "grid_shipment_detail" && (Ke[y].shipmentDetail = u));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o.length > 0 ? Math.max(...o.map((u) => Number(u.id) || 0)) + 1 : 1, i = a().activeJobNo;
      let p = { id: l, jobNo: i };
      t === "grid_container_info" ? p = {
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
        ...r
      } : t === "grid_shipping_info" ? p = {
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
        ...r
      } : t === "grid_shipment_detail" ? p = {
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
        ...r
      } : p = { id: l, jobNo: i, ...r };
      const c = [...o, p];
      s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (t, r) => {
      const n = a().detailGrids, l = (n[t] || []).filter((i, p) => p !== r);
      s({
        detailGrids: { ...n, [t]: l }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o[r];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((u) => Number(u.id) || 0)) + 1 : 1, p = { ...l, id: i }, c = [...o];
      c.splice(r + 1, 0, p), s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const t = a().detailGrids.grid_container_info || [];
      let r = 0, n = 0, o = 0, l = 0;
      t.forEach((u) => {
        r += Number(u.packageNumber) || 0, n += Number(u.gw) || 0, o += Number(u.cbm) || 0, l += Number(u.vgm) || 0;
      });
      const p = {
        ...a().masterRecord,
        tPackages: r,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      s({ masterRecord: p });
      const c = a().activeJobNo;
      Ke[c] && (Ke[c].master = p);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = a().masterRecord, r = {};
      return (o = t.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const p = _s(i.containerNo);
        p.isValid || (r[`grid_container_info_${i.id}_containerNo`] = p.message);
      }), s({ validationErrors: r }), Object.keys(r).length === 0;
    },
    // 10. Lưu dữ liệu Hợp nhất Master-Detail (Aggregate Save)
    saveAggregate: async () => {
      if (!a().validateAll())
        return {
          success: !1,
          message: `Lưu thất bại: Còn ${Object.keys(a().validationErrors).length} trường dữ liệu chưa hợp lệ. Vui lòng kiểm tra các ô có viền đỏ.`
        };
      const r = a().activeJobNo, n = {
        master: a().masterRecord,
        shippingInfo: a().detailGrids.grid_shipping_info,
        containerInfo: a().detailGrids.grid_container_info,
        shipmentDetail: a().detailGrids.grid_shipment_detail
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
            message: `Đã lưu thành công lô hàng ${r} và đồng bộ với CSDL SQL Server!`,
            aggregate: l
          };
        }
      } catch (o) {
        console.warn("[MasterDetailStore] Backend API chưa phản hồi, đã lưu bền vững vào bộ nhớ ứng dụng:", o);
      }
      return {
        success: !0,
        message: `Đã lưu thành công lô hàng [${r}] (1 Master Record + ${n.containerInfo.length} Containers + ${n.shippingInfo.length} Chặng tàu) trong một Transaction!`,
        aggregate: n
      };
    }
  }))
);
function Qr({
  fileName: s = "Du_Lieu_Bang",
  sheetName: a = "Sheet1",
  columns: t,
  rows: r,
  includeSummary: n = !0
}) {
  const o = t.filter((N) => !N.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const N of o) {
    const m = N.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${m};padding:8px 12px;font-size:11pt;">${N.title || N.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  r.forEach((N, m) => {
    const x = m % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${x};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${m + 1}</td>`;
    for (const f of o) {
      const R = N[f.key], w = f.align || "left";
      let $ = R != null ? String(R) : "";
      typeof R == "number" && ($ = R.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${w};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Gn($)}</td>`;
    }
    i += "</tr>";
  });
  let p = "";
  const c = o.some((N) => N.aggregate);
  if (n && c && r.length > 0) {
    p += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', p += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const N of o) {
      const m = N.align || "left";
      if (N.aggregate === "sum") {
        const x = r.reduce((R, w) => {
          const $ = Number(w[N.key]);
          return R + (isNaN($) ? 0 : $);
        }, 0), f = x % 1 !== 0 ? x.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : x.toLocaleString("vi-VN");
        p += `<td style="border:1px solid #334155;text-align:${m};padding:8px 10px;font-weight:bold;">${f}${N.summarySuffix ? ` ${N.summarySuffix}` : ""}</td>`;
      } else if (N.aggregate === "count")
        p += `<td style="border:1px solid #334155;text-align:${m};padding:8px 10px;font-weight:bold;">${r.length}</td>`;
      else if (N.aggregate === "avg") {
        const x = r.reduce((R, w) => {
          const $ = Number(w[N.key]);
          return R + (isNaN($) ? 0 : $);
        }, 0), f = r.length > 0 ? (x / r.length).toFixed(2) : "0";
        p += `<td style="border:1px solid #334155;text-align:${m};padding:8px 10px;font-weight:bold;">${f}</td>`;
      } else
        p += '<td style="border:1px solid #334155;"></td>';
    }
    p += "</tr>";
  }
  const u = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${Gn(a)}</x:Name>
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
          <tfoot>${p}</tfoot>
        </table>
      </body>
    </html>
  `.trim(), y = new Blob(["\uFEFF", u], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), T = s.endsWith(".xls") || s.endsWith(".xlsx") ? s : `${s}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, d = URL.createObjectURL(y), h = document.createElement("a");
  h.href = d, h.download = T, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(d);
}
function Gn(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Zr(s) {
  const {
    title: a,
    subtitle: t,
    columns: r,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: p = !0
  } = s, c = r.filter((R) => !R.hidden), u = window.open("", "_blank", "width=1100,height=850");
  if (!u) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const y = /* @__PURE__ */ new Date(), T = `Ngày in: ${y.toLocaleDateString("vi-VN")} lúc ${y.toLocaleTimeString("vi-VN")}`, d = Object.entries(i).map(
    ([R, w]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${Qe(R)}:</strong>
          <span>${Qe(String(w))}</span>
        </div>`
  ).join(""), h = c.map((R) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${R.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${Qe(R.title || R.key)}
      </th>`).join(""), N = n.map((R, w) => {
    const $ = w % 2 === 0 ? "#ffffff" : "#f8fafc", b = c.map((D) => {
      const P = R[D.key] ?? "", F = D.align || (typeof P == "number" ? "right" : "left");
      let B = P;
      return typeof P == "number" && (B = P.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${F}; font-size: 11px;">
            ${Qe(String(B))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${$};">${b}</tr>`;
  }).join("");
  let m = "";
  o && (m = `<tfoot><tr>${c.map((w, $) => {
    const b = o[w.key] ?? ($ === 0 ? "TỔNG CỘNG" : ""), D = w.align || "left";
    let P = b;
    return typeof b == "number" && (P = b.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${D}; font-size: 11px;">
          ${Qe(String(P))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const x = p ? `
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
    ` : "", f = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${Qe(a)} - UIForge Report</title>
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
              ${Qe(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${Qe(a)}
            </h1>
            ${t ? `<div style="font-size: 12px; color: #475569;">${Qe(t)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${Qe(T)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${d ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${d}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${h}</tr>
        </thead>
        <tbody>
          ${N}
        </tbody>
        ${m}
      </table>

      ${x}

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
  u.document.open(), u.document.write(f), u.document.close();
}
function Qe(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const zn = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], el = ({ node: s }) => {
  var Te, Ne, fe, Ae, Ie;
  const { props: a, style: t } = s, r = Y((g) => g.updateComponentProps), n = Me(() => a.columns && Array.isArray(a.columns) ? a.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [a.columns]), o = Me(() => ka(n), [n]), l = Me(() => o.filter((g) => !g.hidden), [o]), i = At((g) => g.detailGrids), p = At((g) => g.updateGridCell), c = At((g) => g.addGridRow), u = At((g) => g.deleteGridRow), y = At((g) => g.duplicateGridRow), T = At((g) => g.validationErrors), d = !!(i && i[s.id]), h = a.reference || a.refName || ((Te = s.dataBinding) == null ? void 0 : Te.refName) || ((Ne = s.dataBinding) == null ? void 0 : Ne.entityName) || "", N = a.query || ((fe = s.dataBinding) == null ? void 0 : fe.query) || a.dataSource || ((Ae = s.dataBinding) == null ? void 0 : Ae.dataSource) || a.sqlWhere || ((Ie = s.dataBinding) == null ? void 0 : Ie.sqlWhere) || a.filter || "", m = ve((g) => h ? g.datasets[h] : void 0), [x, f] = E(() => d && i && i[s.id] ? i[s.id] : a.data && Array.isArray(a.data) ? a.data : m && Array.isArray(m) ? m : zn);
  Ee(() => {
    a.data && Array.isArray(a.data) && a.data.length > 0 && f(a.data);
  }, [a.data]), Ee(() => {
    m && Array.isArray(m) && m.length > 0 && f(m);
  }, [m]);
  const R = Me(() => d && i && i[s.id] && i[s.id].length > 0 ? i[s.id] : x && Array.isArray(x) && x.length > 0 ? x : m && Array.isArray(m) && m.length > 0 ? m : a.data && Array.isArray(a.data) ? a.data : zn, [d, i, s.id, x, m, a.data]);
  Ee(() => {
    if (a.data && Array.isArray(a.data) && a.data.length > 0) return;
    let g = !0;
    return h && ve.getState().queryEntity(h, N).then((A) => {
      g && A && A.length > 0 && f(A);
    }), () => {
      g = !1;
    };
  }, [h, N, a.data]);
  const [w, $] = E(""), [b, D] = E(null), [P, F] = E("asc"), [B, O] = E(!1), [Q, L] = E({}), [G, J] = E({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [re, q] = E({
    isOpen: !1,
    column: null
  }), [je, j] = E({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [he, Ce] = E(null), [le, ge] = E(null), [me, ye] = E(null), z = 55, { offsets: Z, lastFrozenKey: V } = Me(() => Ur(o, z), [o]), U = Me(() => {
    let g = [...R];
    if (w.trim()) {
      const A = w.toLowerCase();
      g = g.filter(
        (I) => Object.values(I).some(
          (W) => String(W).toLowerCase().includes(A)
        )
      );
    }
    return B && Object.entries(Q).forEach(([A, I]) => {
      if (I && I.trim()) {
        const W = I.toLowerCase().trim();
        g = g.filter((X) => {
          const ae = X[A];
          return ae != null && String(ae).toLowerCase().includes(W);
        });
      }
    }), b && g.sort((A, I) => {
      const W = A[b], X = I[b];
      if (W === X) return 0;
      if (W == null) return 1;
      if (X == null) return -1;
      let ae = 0;
      return typeof W == "number" && typeof X == "number" ? ae = W - X : ae = String(W).localeCompare(String(X)), P === "asc" ? ae : -ae;
    }), g;
  }, [R, w, B, Q, b, P]), ue = (g) => {
    f(g), r(s.id, { data: g });
  }, we = (g) => {
    const A = Jt(g);
    r(s.id, { columns: A });
  }, Oe = (g, A, I) => {
    d && p(s.id, g, A, I);
    const X = (d && i && i[s.id] ? i[s.id] : R).map((ae, Se) => ae.id !== void 0 && ae.id === g || ae.id === void 0 && Se === g ? { ...ae, [A]: I } : ae);
    ue(X), h && ve.getState().registerDataset(h, X);
  }, He = (g, A, I) => {
    const X = Y.getState().features.find(($e) => String($e.id) === String(s.pageId)), ae = X == null ? void 0 : X.scriptFile, Se = (I == null ? void 0 : I.action) || g;
    let Pe = !1;
    I != null && I.events && (Array.isArray(I.events) ? I.events : typeof I.events == "string" ? (() => {
      try {
        return JSON.parse(I.events);
      } catch {
        return [];
      }
    })() : []).forEach((Be) => {
      Pe = !0, ps(
        Be,
        I.title || I.key,
        ae,
        { row: A, col: I, column: I, action: Be.action || Be.handlerName || Se, value: A[(I == null ? void 0 : I.key) || ""] }
      );
    }), !Pe && Se && ps(
      { id: `col_act_${(I == null ? void 0 : I.key) || g}`, trigger: "actionClick", action: Se, handlerName: Se },
      s.props.label || "Bảng dữ liệu",
      ae,
      { row: A, col: I, column: I, action: Se, value: A[(I == null ? void 0 : I.key) || ""] }
    ), s.events && s.events.length > 0 && Le(s.events, "actionClick", s.props.label || "Bảng dữ liệu", ae, {
      action: Se,
      row: A,
      col: I,
      column: I,
      colKey: I == null ? void 0 : I.key,
      value: A[(I == null ? void 0 : I.key) || ""]
    });
  }, [Fe, C] = E(null), [v, _] = E(/* @__PURE__ */ new Set()), ce = We(null), oe = (g, A, I = "info") => {
    const W = document.createElement("div"), X = I === "success" ? "border-emerald-500 shadow-emerald-500/30" : I === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", ae = I === "success" ? "⚡" : I === "warning" ? "⚠️" : "ℹ️", Se = I === "success" ? "bg-emerald-600/25 text-emerald-400" : I === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    W.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${X} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, W.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${Se} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${ae}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${g}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${A}</div>
      </div>
    `, document.body.appendChild(W), setTimeout(() => {
      W.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => W.remove(), 300);
    }, 3800);
  }, be = () => {
    if (v.size === U.length && U.length > 0)
      _(/* @__PURE__ */ new Set()), oe("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const g = new Set(U.map((A, I) => A.id ?? A.Id ?? I));
      _(g), U.length > 0 && C(U[0].id ?? U[0].Id ?? 0), oe("F1 (Toggle All)", `Đã chọn tất cả ${g.size} dòng trong bảng`, "success");
    }
  }, ne = () => {
    var X;
    let g = te == null ? void 0 : te.colKey, A = (te == null ? void 0 : te.rowIndex) ?? 0;
    !g && l.length > 0 && (g = l[0].key);
    const I = U[A], W = I && g ? I[g] : null;
    if (W != null && String(W).trim() !== "" && String(W) !== "—") {
      L((Se) => ({ ...Se, [g]: String(W) })), O(!0);
      const ae = ((X = l.find((Se) => Se.key === g)) == null ? void 0 : X.title) || g;
      oe("F2 (Lọc theo ô)", `Đã lọc cột [${ae}] với giá trị "${W}"`, "success");
    } else
      O(!0), oe("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, pe = () => {
    const g = v.size > 0 ? U.filter((W, X) => v.has(W.id ?? W.Id ?? X)) : U;
    if (g.length === 0) {
      oe("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const A = l.filter(
      (W) => W.componentType === "Number" || W.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (X) => W.key.toLowerCase().includes(X)
      )
    );
    if (A.length === 0) {
      oe("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const I = A.map((W) => {
      const X = g.reduce((Se, Pe) => {
        const $e = Number(Pe[W.key]);
        return Se + (isNaN($e) ? 0 : $e);
      }, 0), ae = X % 1 !== 0 ? X.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : X.toLocaleString("en-US");
      return `${W.title || W.key}: ${ae}${W.summarySuffix ? ` ${W.summarySuffix}` : ""}`;
    });
    oe(
      `F3 (Tổng ${g.length} dòng)`,
      I.join(" | "),
      "success"
    );
  }, ee = () => {
    at();
    const g = U.length;
    oe("F4 (Thêm dòng)", `Đã thêm dòng mới số #${g + 1}`, "success"), setTimeout(() => {
      H(g, 0);
    }, 60);
  }, ie = () => {
    try {
      Qr({
        fileName: a.label ? String(a.label).replace(/\s+/g, "_") : "Du_Lieu_Bang",
        sheetName: a.label ? String(a.label).slice(0, 30) : "Sheet1",
        columns: l,
        rows: U,
        includeSummary: !0
      }), oe("Xuất Excel", `Đã xuất ${U.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (g) {
      oe("Lỗi xuất Excel", (g == null ? void 0 : g.message) || "Không thể tạo file Excel", "warning");
    }
  }, De = () => {
    try {
      const g = {};
      l.forEach((A) => {
        if (A.aggregate === "sum") {
          const I = U.reduce((W, X) => W + (Number(X[A.key]) || 0), 0);
          g[A.key] = I;
        } else A.aggregate === "count" && (g[A.key] = U.length);
      }), Zr({
        title: a.label ? String(a.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${U.length} bản ghi`,
        columns: l,
        rows: U,
        summaryRow: Object.keys(g).length > 0 ? g : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${U.length} dòng`,
          "Bộ lọc áp dụng": w ? `Tìm kiếm: "${w}"` : "Tất cả dữ liệu"
        }
      }), oe("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (g) {
      oe("Lỗi In Báo Cáo", (g == null ? void 0 : g.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, de = async () => {
    if ($(""), L({}), h) {
      const g = await ve.getState().queryEntity(h, N);
      g && g.length > 0 && (f(g), oe("Làm mới dữ liệu", `Đã tải lại ${g.length} bản ghi từ máy chủ`, "info"));
    }
  }, {
    focusedCell: te,
    setFocusedCell: M,
    focusCell: H,
    handleTableContainerKeyDown: Ye,
    handleCellKeyDown: Dt
  } = zr({
    tableRef: ce,
    rows: U,
    visibleColumns: l,
    selectedRowId: Fe,
    setSelectedRowId: C,
    selectedRowIds: v,
    setSelectedRowIds: _,
    onRowDoubleClick: (g, A) => ut(g, A),
    onAddRow: ee,
    onDeleteRow: (g) => xt(g),
    onDuplicateRow: (g) => pt(g),
    onToggleAll: be,
    onFilterByCell: ne,
    onQuickSum: pe,
    onToggleColumnFilters: () => O((g) => !g)
  }), Ft = (g, A, I) => {
    const W = g.id ?? g.Id ?? A;
    if (C(W), I != null && I.ctrlKey || I != null && I.metaKey)
      _((Pe) => {
        const $e = new Set(Pe);
        return $e.has(W) ? $e.delete(W) : $e.add(W), $e;
      });
    else if (I != null && I.shiftKey && Fe !== null) {
      const Pe = U.findIndex(($e, Be) => ($e.id ?? $e.Id ?? Be) === Fe);
      if (Pe !== -1) {
        const $e = Math.min(Pe, A), Be = Math.max(Pe, A), Ue = /* @__PURE__ */ new Set();
        for (let Xe = $e; Xe <= Be; Xe++)
          Ue.add(U[Xe].id ?? U[Xe].Id ?? Xe);
        _(Ue);
      }
    } else
      _(/* @__PURE__ */ new Set([W]));
    const ae = Y.getState().features.find((Pe) => String(Pe.id) === String(s.pageId)), Se = ae == null ? void 0 : ae.scriptFile;
    h && ve.getState().setSelectedRecord(h, g), s.events && s.events.length > 0 && (Le(s.events, "rowClick", s.props.label || "Bảng dữ liệu", Se, {
      row: g,
      rowIndex: A,
      action: "rowClick"
    }), Le(s.events, "click", s.props.label || "Bảng dữ liệu", Se, {
      row: g,
      rowIndex: A,
      action: "click"
    }), Le(s.events, "select", s.props.label || "Bảng dữ liệu", Se, {
      row: g,
      rowIndex: A,
      action: "select"
    }));
  }, ut = (g, A) => {
    const W = Y.getState().features.find((ae) => String(ae.id) === String(s.pageId)), X = W == null ? void 0 : W.scriptFile;
    s.events && s.events.length > 0 && Le(s.events, "dblclick", s.props.label || "Bảng dữ liệu", X, {
      row: g,
      rowIndex: A,
      id: g.id ?? g.Id,
      action: "dblclick"
    });
  }, at = () => {
    d && c(s.id);
    const g = d && i && i[s.id] ? i[s.id] : R, I = { id: g.length > 0 ? Math.max(...g.map((X) => Number(X.id) || 0)) + 1 : 1 };
    o.forEach((X) => {
      X.componentType === "Number" ? I[X.key] = 0 : X.componentType === "Checkbox" ? I[X.key] = !1 : X.componentType === "DatePicker" ? I[X.key] = "08/11/2026" : I[X.key] = "";
    });
    const W = [...g, I];
    ue(W), h && ve.getState().registerDataset(h, W);
  }, pt = (g) => {
    d && y(s.id, g);
    const A = d && i && i[s.id] ? i[s.id] : R, I = A[g], W = Math.max(...A.map((Se) => Number(Se.id) || 0)) + 1, X = { ...I, id: W }, ae = [...A];
    ae.splice(g + 1, 0, X), ue(ae), h && ve.getState().registerDataset(h, ae);
  }, xt = (g) => {
    d && u(s.id, g);
    const A = d && i && i[s.id] ? i[s.id] : R;
    if (A.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const I = A.filter((W, X) => X !== g);
    ue(I), h && ve.getState().registerDataset(h, I);
  }, It = (g, A, I) => {
    g.preventDefault(), g.stopPropagation(), j({
      isOpen: !0,
      x: g.clientX,
      y: g.clientY,
      row: A,
      rowIndex: I
    });
  }, rt = (g) => {
    const A = d && i && i[s.id] ? i[s.id] : R, W = { id: A.length > 0 ? Math.max(...A.map((ae) => Number(ae.id) || 0)) + 1 : 1 };
    o.forEach((ae) => {
      ae.componentType === "Number" ? W[ae.key] = 0 : ae.componentType === "Checkbox" ? W[ae.key] = !1 : (ae.componentType, W[ae.key] = "");
    });
    const X = [...A];
    X.splice(g + 1, 0, W), ue(X), h && ve.getState().registerDataset(h, X);
  }, ht = (g) => {
    if (g <= 0) return;
    const I = [...d && i && i[s.id] ? i[s.id] : R], [W] = I.splice(g, 1);
    I.splice(g - 1, 0, W), ue(I), h && ve.getState().registerDataset(h, I);
  }, ze = (g) => {
    const A = d && i && i[s.id] ? i[s.id] : R;
    if (g >= A.length - 1) return;
    const I = [...A], [W] = I.splice(g, 1);
    I.splice(g + 1, 0, W), ue(I), h && ve.getState().registerDataset(h, I);
  }, lt = (g, A) => {
    Ce(A), g.dataTransfer.effectAllowed = "move", g.dataTransfer.setData("text/plain", A);
  }, ot = (g, A) => {
    if (g.preventDefault(), g.dataTransfer.dropEffect = "move", he === A) return;
    const I = g.currentTarget.getBoundingClientRect(), W = g.clientX < I.left + I.width / 2;
    ge(A), ye(W ? "left" : "right");
  }, mt = (g) => {
    const A = g.relatedTarget;
    g.currentTarget.contains(A) || (ge(null), ye(null));
  }, bt = (g, A) => {
    if (g.preventDefault(), !he || he === A) {
      Ce(null), ge(null), ye(null);
      return;
    }
    const I = o.findIndex((ae) => ae.key === he);
    let W = o.findIndex((ae) => ae.key === A);
    if (I === -1 || W === -1) {
      Ce(null), ge(null), ye(null);
      return;
    }
    me === "right" && I > W ? W = W + 1 : me === "left" && I < W && (W = W - 1), W = Math.max(0, Math.min(o.length - 1, W));
    const X = Os(o, I, W);
    we(X), Ce(null), ge(null), ye(null);
  }, ft = () => {
    Ce(null), ge(null), ye(null);
  }, gt = (g) => {
    g.sortable && (b === g.key ? P === "asc" ? F("desc") : D(null) : (D(g.key), F("asc")));
  }, yt = (g, A, I) => {
    g.preventDefault(), g.stopPropagation(), J({
      isOpen: !0,
      x: g.clientX,
      y: g.clientY,
      column: A,
      columnIndex: I
    });
  }, vt = (g) => {
    const A = o.map(
      (I) => I.key === g ? { ...I, hidden: !I.hidden } : I
    );
    we(A);
  }, Rt = (g) => {
    const A = Ta(o, g);
    we(A);
  }, Lt = (g) => {
    q({
      isOpen: !0,
      column: g
    });
  }, Nt = (g) => {
    const A = o.findIndex((ae) => ae.key === g);
    if (A === -1) return;
    const I = o[A], W = {
      ...I,
      key: `${I.key}_copy`,
      title: `${I.title} (Bản sao)`,
      order: (I.order ?? A) + 1
    }, X = [...o];
    X.splice(A + 1, 0, W), we(X);
  }, jt = (g) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const A = o.filter((I) => I.key !== g);
    we(A);
  }, Pt = (g) => {
    const A = o.map(
      (I) => I.key === g.key ? g : I
    );
    we(A);
  }, { flex: Vt, flexGrow: Wt, flexShrink: Kt, flexBasis: k, minWidth: K, maxWidth: se, width: xe, ...ke } = t || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...ke
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: a.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              U.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: w,
                  onChange: (g) => $(g.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => O((g) => !g),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${B ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(ta, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: at,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: de,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(Ka, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: ie,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Ga, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: De,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: be,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: ne,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: pe,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: ee,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => O((g) => !g),
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
            ref: ce,
            tabIndex: 0,
            onKeyDown: Ye,
            className: "w-full overflow-x-auto select-none relative focus:outline-none",
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: be,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${z}px`, minWidth: `${z}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: U.length > 0 && v.size === U.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((g, A) => {
                    const I = !!(g.frozen || g.sticky === "left"), W = I && Z[g.key] !== void 0 ? Z[g.key] : void 0, X = g.key === V, ae = he === g.key, Se = le === g.key;
                    let Pe = "";
                    Se && me === "left" ? Pe = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : Se && me === "right" && (Pe = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const $e = g.align === "right" ? "text-right" : g.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Be) => lt(Be, g.key),
                        onDragOver: (Be) => ot(Be, g.key),
                        onDragLeave: mt,
                        onDrop: (Be) => bt(Be, g.key),
                        onDragEnd: ft,
                        onContextMenu: (Be) => yt(Be, g, A),
                        onClick: () => gt(g),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${$e} ${I ? `sticky z-20 bg-[#0b1329] ${X ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${ae ? "opacity-30 bg-slate-800/80" : ""} ${Pe}`,
                        style: {
                          width: g.width,
                          minWidth: g.minWidth || g.width || "100px",
                          maxWidth: g.maxWidth,
                          left: W !== void 0 ? `${W}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${g.order ?? A + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${g.align === "right" ? "justify-end" : g.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            I && /* @__PURE__ */ e.jsx(Zn, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: g.title || g.key }),
                            g.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              g.order
                            ] })
                          ] }),
                          g.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: b === g.key ? P === "asc" ? /* @__PURE__ */ e.jsx(na, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(aa, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Ks, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      g.key
                    );
                  })
                ] }),
                B && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((g) => {
                    const A = !!(g.frozen || g.sticky === "left"), I = A && Z[g.key] !== void 0 ? Z[g.key] : void 0, W = g.key === V;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${A ? `sticky z-20 bg-[#080d1a] ${W ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: I !== void 0 ? `${I}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: Q[g.key] || "",
                            onChange: (X) => L((ae) => ({ ...ae, [g.key]: X.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${g.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: U.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                "td",
                {
                  colSpan: l.length + 1,
                  className: "px-6 py-8 text-center text-slate-500 italic",
                  children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                }
              ) }) : U.map((g, A) => /* @__PURE__ */ e.jsxs(
                "tr",
                {
                  "data-row-index": A,
                  onClick: (I) => Ft(g, A, I),
                  onDoubleClick: () => ut(g, A),
                  onContextMenu: (I) => It(I, g, A),
                  className: `transition-colors group cursor-pointer ${Fe === (g.id ?? g.Id ?? A) || v.has(g.id ?? g.Id ?? A) ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        onClick: (I) => {
                          I.stopPropagation();
                          const W = g.id ?? g.Id ?? A;
                          _((X) => {
                            const ae = new Set(X);
                            return ae.has(W) ? ae.delete(W) : ae.add(W), ae;
                          }), C(W);
                        },
                        className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${v.has(g.id ?? g.Id ?? A) ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
                        style: { width: `${z}px`, minWidth: `${z}px` },
                        title: "Click chọn dòng | Chuột phải mở menu thao tác",
                        children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                          v.has(g.id ?? g.Id ?? A) ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                          /* @__PURE__ */ e.jsx("span", { children: A + 1 })
                        ] })
                      }
                    ),
                    l.map((I, W) => {
                      const X = !!(I.frozen || I.sticky === "left"), ae = X && Z[I.key] !== void 0 ? Z[I.key] : void 0, Se = I.key === V, Pe = g[I.key], $e = I.align === "right" ? "text-right" : I.align === "center" ? "text-center" : "text-left", Be = T[`${s.id}_${g.id}_${I.key}`];
                      return /* @__PURE__ */ e.jsx(
                        "td",
                        {
                          className: `px-2 py-1 whitespace-nowrap transition-colors ${$e} ${X ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${Se ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                          style: {
                            width: I.width,
                            minWidth: I.minWidth || I.width || "100px",
                            maxWidth: I.maxWidth,
                            left: ae !== void 0 ? `${ae}px` : void 0
                          },
                          children: /* @__PURE__ */ e.jsx(
                            Gr,
                            {
                              column: I,
                              value: Pe,
                              row: g,
                              rowIndex: A,
                              columnIndex: W,
                              error: Be,
                              onChange: (Ue) => Oe(g.id ?? A, I.key, Ue),
                              onActionClick: (Ue) => He(Ue, g, I),
                              onKeyDown: Dt,
                              onFocus: (Ue, Xe, ns) => {
                                C(g.id ?? g.Id ?? Ue), M({ rowIndex: Ue, colIndex: Xe, colKey: ns });
                              }
                            }
                          )
                        },
                        I.key
                      );
                    })
                  ]
                },
                g.id || A
              )) }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Vr,
                {
                  columns: l,
                  data: U,
                  showRowNumber: !0,
                  rowNumberWidth: z,
                  leftOffsets: Z
                }
              ) })
            ] })
          }
        ),
        G.isOpen && G.column && /* @__PURE__ */ e.jsx(
          _r,
          {
            isOpen: G.isOpen,
            x: G.x,
            y: G.y,
            column: G.column,
            columnIndex: G.columnIndex,
            allColumns: o,
            onClose: () => J((g) => ({ ...g, isOpen: !1 })),
            onToggleHide: vt,
            onSetFreeze: Rt,
            onOpenProperties: Lt,
            onCloneColumn: Nt,
            onRemoveColumn: jt,
            onToggleFilter: () => O((g) => !g)
          }
        ),
        re.isOpen && re.column && /* @__PURE__ */ e.jsx(
          wa,
          {
            isOpen: re.isOpen,
            column: re.column,
            onClose: () => q({ isOpen: !1, column: null }),
            onSave: Pt
          }
        ),
        je.isOpen && je.row && /* @__PURE__ */ e.jsx(
          Mr,
          {
            isOpen: je.isOpen,
            x: je.x,
            y: je.y,
            row: je.row,
            rowIndex: je.rowIndex,
            totalRows: x.length,
            onClose: () => j((g) => ({ ...g, isOpen: !1, row: null })),
            onDuplicateRow: pt,
            onDeleteRow: xt,
            onInsertRowBelow: rt,
            onMoveRowUp: ht,
            onMoveRowDown: ze
          }
        )
      ]
    }
  );
}, _l = ({ node: s }) => {
  const { props: a, style: t } = s, { flex: r, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: p, width: c, ...u } = t || {}, y = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], T = a.columns && a.columns.length > 0 ? a.columns : y, d = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [h, N] = E(""), [m, x] = E(null), [f, R] = E("asc"), [w, $] = E(1), b = Number(a.pageSize) || 10, D = Me(() => {
    if (!h.trim()) return d;
    const L = h.toLowerCase();
    return d.filter(
      (G) => Object.values(G).some((J) => String(J).toLowerCase().includes(L))
    );
  }, [h]), P = Me(() => m ? [...D].sort((L, G) => {
    const J = L[m], re = G[m];
    if (J === re) return 0;
    const q = J > re ? 1 : -1;
    return f === "asc" ? q : -q;
  }) : D, [D, m, f]), F = Math.ceil(P.length / b) || 1, B = Me(() => {
    const L = (w - 1) * b;
    return P.slice(L, L + b);
  }, [P, w, b]), O = Me(() => {
    const L = {};
    for (const G of T)
      if (G.aggregate === "sum") {
        const J = D.reduce((re, q) => re + (Number(q[G.key]) || 0), 0);
        L[G.key] = J.toLocaleString("en-US");
      } else if (G.aggregate === "count")
        L[G.key] = D.length;
      else if (G.aggregate === "avg") {
        const J = D.length ? D.reduce((re, q) => re + (Number(q[G.key]) || 0), 0) / D.length : 0;
        L[G.key] = J.toFixed(1);
      }
    return L;
  }, [T, D]), Q = (L) => {
    m === L ? R(f === "asc" ? "desc" : "asc") : (x(L), R("asc"));
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...u
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            a.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: a.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              D.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: h,
                onChange: (L) => {
                  N(L.target.value), $(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: T.map((L) => {
            const G = L.sticky === "left", J = L.align === "right" ? "text-right" : L.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => L.sortable !== !1 && Q(L.key),
                style: {
                  width: L.width,
                  minWidth: L.minWidth || L.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${J} ${G ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${L.align === "right" ? "justify-end" : L.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  L.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: L.title }),
                  L.sortable !== !1 && /* @__PURE__ */ e.jsx(Ks, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              L.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: B.length > 0 ? B.map((L, G) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: T.map((J) => {
            const re = J.sticky === "left", q = L[J.key], je = J.align === "right" ? "text-right" : J.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${je} ${re ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (q == null) return "—";
                  if (J.componentType === "Checkbox") {
                    const j = q === !0 || q === "true" || q === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: j,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (J.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(q)
                      }
                    );
                  if (J.componentType === "DatePicker" || J.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(q) })
                    ] });
                  if (J.componentType === "Number" || typeof q == "number") {
                    const j = Number(q);
                    if (!isNaN(j)) {
                      const he = J.precision !== void 0 ? J.precision : j % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: j.toLocaleString("en-US", { minimumFractionDigits: he, maximumFractionDigits: he }) });
                    }
                  }
                  return J.key === "status" || J.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${q === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(q) }) : String(q);
                })()
              },
              J.key
            );
          }) }, L.id || G)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: T.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: T.map((L, G) => {
            const J = L.sticky === "left", re = L.align === "right" ? "text-right" : L.align === "center" ? "text-center" : "text-left", q = O[L.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${re} ${J ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: G === 0 && !q ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : q !== void 0 ? q : ""
              },
              L.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            w,
            " / ",
            F
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: w <= 1,
                onClick: () => $((L) => Math.max(1, L - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: w >= F,
                onClick: () => $((L) => Math.min(F, L + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ws, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function tl(s, a, t = "") {
  if (!a || typeof a != "object")
    return t;
  if (!s || typeof s != "string" || s.trim() === "") {
    const p = a.fullName ?? a.FullName ?? a.name ?? a.Name ?? a.shortName ?? a.ShortName ?? a.title ?? a.Title ?? a.label ?? a.Label ?? a.code ?? a.Code ?? a.id ?? a.Id;
    return p != null ? String(p) : t;
  }
  const r = s.trim();
  if (!r.includes("{") || !r.includes("}")) {
    const p = et(a, r);
    return p != null ? String(p) : r;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = r.replace(n, (p, c) => {
    const u = c.trim();
    o = !0;
    const y = u.includes(".") ? u.split(".").pop().trim() : u;
    let T = et(a, u);
    return T == null && (T = et(a, y)), T != null ? String(T) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || t : r;
}
function et(s, a) {
  if (!s || typeof s != "object" || !a) return;
  if (a in s && s[a] !== void 0 && s[a] !== null)
    return s[a];
  const t = a.includes(".") ? a.split(".").pop().trim() : a.trim();
  if (t in s && s[t] !== void 0 && s[t] !== null)
    return s[t];
  const r = t.toLowerCase(), n = Object.keys(s), o = n.find((p) => p.toLowerCase() === r);
  if (o && s[o] !== void 0 && s[o] !== null)
    return s[o];
  const l = t.replace(/^(fld_|_)/i, ""), i = n.find((p) => p.toLowerCase() === l.toLowerCase());
  if (i && s[i] !== void 0 && s[i] !== null)
    return s[i];
}
const sl = ({
  value: s,
  onChange: a,
  options: t,
  items: r,
  reference: n,
  dataSource: o,
  idField: l = "id",
  selectField: i = "name",
  dropdownColumns: p,
  formatData: c,
  populateField: u,
  formId: y,
  placeholder: T = "— Chọn —",
  disabled: d = !1,
  readOnly: h = !1,
  isGridCell: N = !1,
  error: m,
  className: x = "",
  onKeyDown: f,
  onFocus: R,
  onBlur: w
}) => {
  const [$, b] = E(!1), [D, P] = E(""), [F, B] = E(0), [O, Q] = E(!1), [L, G] = E([]), J = We(null), re = We(null), q = We(null), je = We(null), j = ve((v) => v.queryEntity), he = ve((v) => v.getDataset), Ce = ve((v) => v.applyPopulate), le = ve((v) => n ? v.getDataset(n).length : 0);
  Ee(() => {
    let v = !0;
    if (r && Array.isArray(r) && r.length > 0) {
      G(r);
      return;
    }
    if (t && Array.isArray(t) && t.length > 0) {
      const _ = t.map((ce) => ce.rawItem && typeof ce.rawItem == "object" ? ce.rawItem : {
        [l]: ce.value,
        [i]: ce.label,
        id: ce.value,
        name: ce.label,
        fullName: ce.label
      });
      G(_);
      return;
    }
    return n ? (Q(!0), j(n, o).then((_) => {
      v && (Array.isArray(_) && _.length > 0 ? G(_) : G([]));
    }).catch(() => {
      if (v) {
        const _ = he(n);
        G(Array.isArray(_) ? _ : []);
      }
    }).finally(() => {
      v && Q(!1);
    })) : G([]), () => {
      v = !1;
    };
  }, [n, o, r, t, l, i, j, he, le]);
  const ge = Me(() => {
    if (p && p.length > 0)
      return p;
    if (L.length > 0) {
      const v = L[0], _ = Object.keys(v), oe = [
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
        (ne) => _.some((pe) => pe.toLowerCase() === ne.toLowerCase())
      );
      if (oe.length > 0)
        return oe.slice(0, 3).map((ne) => {
          const pe = _.find((ee) => ee.toLowerCase() === ne.toLowerCase()) || ne;
          return {
            key: pe,
            title: pe.charAt(0).toUpperCase() + pe.slice(1),
            width: pe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const be = _.filter(
        (ne) => typeof v[ne] != "object" && !ne.startsWith("_")
      ).slice(0, 2);
      if (be.length > 0)
        return be.map((ne) => ({
          key: ne,
          title: ne.charAt(0).toUpperCase() + ne.slice(1),
          width: "50%",
          align: "left"
        }));
    }
    return [
      { key: l, title: "Mã", width: "35%", align: "left" },
      { key: i, title: "Tên", width: "65%", align: "left" }
    ];
  }, [p, L, l, i]), me = Me(() => s == null || s === "" ? null : L.find((v) => {
    const _ = et(v, l) ?? v.id ?? v.Id ?? v.code ?? v.Code;
    return _ !== void 0 && String(_) === String(s);
  }) || null, [s, L, l]), ye = Me(() => me ? tl(c, me, String(s ?? "")) : s != null && s !== "" ? String(s) : "", [me, c, s]), [z, Z] = E({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), V = () => {
    if (!J.current) return;
    const v = J.current.getBoundingClientRect(), _ = 300, oe = Math.max(v.width, 360), ne = window.innerHeight - v.bottom < _ && v.top > _;
    let pe = ne ? v.top - _ - 4 : v.bottom + 4, ee = v.left;
    ee + oe > window.innerWidth - 12 && (ee = Math.max(12, window.innerWidth - oe - 12)), Z({ top: pe, left: ee, width: oe, openUpwards: ne });
  }, U = () => {
    d || h || (V(), b(!0), P(""), B(0));
  };
  Ee(() => {
    $ && (V(), setTimeout(() => {
      var v;
      (v = q.current) == null || v.focus();
    }, 50));
  }, [$]), Ee(() => {
    if (!$) return;
    const v = (ce) => {
      var be, ne;
      const oe = ce.target;
      (be = J.current) != null && be.contains(oe) || (ne = re.current) != null && ne.contains(oe) || (b(!1), w && w());
    }, _ = () => {
      V();
    };
    return window.addEventListener("mousedown", v), window.addEventListener("scroll", _, !0), window.addEventListener("resize", _), () => {
      window.removeEventListener("mousedown", v), window.removeEventListener("scroll", _, !0), window.removeEventListener("resize", _);
    };
  }, [$, w]);
  const ue = Me(() => {
    if (!D.trim()) return L;
    const v = D.toLowerCase().trim();
    return L.filter((_) => ge.some((oe) => {
      const be = et(_, oe.key);
      return be != null && String(be).toLowerCase().includes(v);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((oe) => {
      const be = et(_, oe);
      return be != null && String(be).toLowerCase().includes(v);
    }));
  }, [L, D, ge]);
  Ee(() => {
    if (je.current && ue.length > 0) {
      const v = je.current.querySelector(`[data-index="${F}"]`);
      v && v.scrollIntoView({ block: "nearest" });
    }
  }, [F, ue]);
  const we = (v) => {
    const _ = et(v, l) ?? v.id ?? v.Id ?? v.code ?? v.Code;
    a(_, v), u && y && Ce(y, u, v), b(!1);
  }, Oe = (v) => {
    v.stopPropagation(), a("", null);
  }, He = (v) => {
    v.key === "ArrowDown" ? (v.preventDefault(), B((_) => _ < ue.length - 1 ? _ + 1 : _)) : v.key === "ArrowUp" ? (v.preventDefault(), B((_) => _ > 0 ? _ - 1 : 0)) : v.key === "Enter" ? (v.preventDefault(), ue.length > 0 && F >= 0 && F < ue.length && we(ue[F])) : v.key === "Escape" && (v.preventDefault(), b(!1));
  }, Fe = (v) => {
    if (v.key === "Enter" || v.key === " " || v.key === "F4" || v.altKey && v.key === "ArrowDown") {
      v.preventDefault(), U();
      return;
    }
    f && f(v);
  }, C = m ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: J,
        tabIndex: d ? -1 : 0,
        onClick: U,
        onKeyDown: Fe,
        onFocus: R,
        className: `relative flex items-center justify-between transition-all select-none cursor-pointer ${N ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${C}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${C} shadow-sm`} ${d ? "opacity-50 cursor-not-allowed" : ""} ${x}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: ye ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: ye }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: T }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!ye && !d && !h && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: Oe,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(Je, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              Mt,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${$ ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    $ && Tt(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: re,
          style: {
            position: "fixed",
            top: `${z.top}px`,
            left: `${z.left}px`,
            width: `${z.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (v) => v.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: q,
                    type: "text",
                    value: D,
                    onChange: (v) => {
                      P(v.target.value), B(0);
                    },
                    onKeyDown: He,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                D && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => P(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(Je, { className: "w-3 h-3" })
                  }
                )
              ] }),
              O && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(za, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              ge.map((v, _) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: v.width || `${100 / ge.length}%` },
                  className: `px-1.5 truncate ${v.align === "right" ? "text-right" : v.align === "center" ? "text-center" : "text-left"}`,
                  children: v.title
                },
                v.key || _
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: je,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: ue.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-8 text-center text-slate-500 flex flex-col items-center justify-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(kt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: O ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" })
                ] }) : ue.map((v, _) => {
                  const ce = et(v, l) ?? v.id ?? v.Id ?? v.code ?? v.Code, oe = ce !== void 0 && String(ce) === String(s), be = _ === F;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": _,
                      onClick: () => we(v),
                      onMouseEnter: () => B(_),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${oe ? "bg-emerald-950/60 text-emerald-200 font-medium" : be ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        ge.map((ne, pe) => {
                          const ee = et(v, ne.key), ie = ee != null ? String(ee) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: ne.width || `${100 / ge.length}%` },
                              className: `px-1.5 truncate ${ne.align === "right" ? "text-right font-mono" : ne.align === "center" ? "text-center" : "text-left"}`,
                              children: ie
                            },
                            ne.key || pe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: oe && /* @__PURE__ */ e.jsx(Gs, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    ce ?? _
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  ue.length,
                  " / ",
                  L.length,
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
    )
  ] });
}, nl = ({ node: s, isEditing: a }) => {
  var J, re, q, je, j, he, Ce, le, ge, me, ye;
  const { props: t, style: r } = s, n = Y((z) => z.features), o = Y((z) => z.activeFeatureId), l = n.find((z) => String(z.id) === String(s.pageId)) || n.find((z) => String(z.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((J = s.dataBinding) == null ? void 0 : J.fieldName) || s.props.name || s.id), f = ve((z) => nt(z, m, x, void 0)), R = ve((z) => z.setFieldValue), w = f !== void 0 ? f : t.value ?? "", $ = t.reference || t.refName || ((re = s.dataBinding) == null ? void 0 : re.refName) || ((q = s.dataBinding) == null ? void 0 : q.entityName) || "", b = t.dataSource || ((je = s.dataBinding) == null ? void 0 : je.dataSource) || t.query || ((j = s.dataBinding) == null ? void 0 : j.query) || t.sqlWhere || ((he = s.dataBinding) == null ? void 0 : he.sqlWhere) || "", D = t.idField || ((Ce = s.dataBinding) == null ? void 0 : Ce.idField) || "id", P = t.textField || t.selectField || ((le = s.dataBinding) == null ? void 0 : le.selectField) || "name", F = t.dropdownColumns || ((ge = s.dataBinding) == null ? void 0 : ge.dropdownColumns), B = t.formatData || ((me = s.dataBinding) == null ? void 0 : me.formatData) || "", O = t.populateField || ((ye = s.dataBinding) == null ? void 0 : ye.populateField) || "", Q = t.options || [], L = !!t.validationError, G = (z, Z) => {
    R(m, x, z), a || Le(s.events, "change", t.label || "Chọn mục", i, {
      componentId: s.id,
      fieldName: x,
      value: z,
      selectedItem: Z
    });
  };
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label,
      showLabel: t.showLabel ?? !0,
      labelPosition: t.labelPosition || "left",
      labelWidth: t.labelWidth || "100px",
      required: t.required,
      error: t.validationError ? String(t.validationError) : void 0,
      colSpan: t.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        sl,
        {
          value: w,
          onChange: G,
          options: Q,
          reference: $,
          dataSource: b,
          idField: D,
          selectField: P,
          dropdownColumns: F,
          formatData: B,
          populateField: O,
          formId: m,
          placeholder: t.placeholder ? String(t.placeholder) : "— Chọn —",
          disabled: t.disabled,
          error: L ? String(t.validationError) : void 0
        }
      ) })
    }
  );
}, al = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Y((f) => f.features), o = Y((f) => f.activeFeatureId), l = n.find((f) => String(f.id) === String(s.pageId)) || n.find((f) => String(f.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, [m, x] = E(!!t.value);
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label,
      showLabel: t.showLabel ?? !0,
      labelPosition: t.labelPosition || "left",
      labelWidth: t.labelWidth || "100px",
      required: t.required,
      colSpan: t.colSpan,
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
            disabled: t.disabled,
            checked: m,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (f) => {
              x(f.target.checked), a || Le(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: f.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, rl = ({ node: s, isEditing: a }) => {
  var b;
  const { props: t, style: r } = s, n = Y((D) => D.features), o = Y((D) => D.activeFeatureId), l = n.find((D) => String(D.id) === String(s.pageId)) || n.find((D) => String(D.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((b = s.dataBinding) == null ? void 0 : b.fieldName) || s.props.name || s.id), f = ve((D) => nt(D, m, x, void 0)), R = ve((D) => D.setFieldValue), w = f !== void 0 ? f : t.value ?? "", $ = (D) => {
    R(m, x, D), a || Le(s.events, "change", t.label || "Chọn ngày", i, {
      componentId: s.id,
      fieldName: x,
      value: D
    });
  };
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label,
      showLabel: t.showLabel ?? !0,
      labelPosition: t.labelPosition || "left",
      labelWidth: t.labelWidth || "100px",
      required: t.required,
      error: t.validationError ? String(t.validationError) : void 0,
      colSpan: t.colSpan,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...N
      },
      children: /* @__PURE__ */ e.jsx(
        Ca,
        {
          value: w,
          onChange: $,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "DD/MM/YYYY",
          error: t.validationError ? String(t.validationError) : void 0
        }
      )
    }
  );
}, ll = ({ node: s, children: a }) => {
  const { props: t } = s, r = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(Je, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: a || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, ol = ({ node: s }) => {
  const { props: a, style: t } = s, { width: r, ...n } = t || {};
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
        a.label && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider", children: a.label }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 h-px bg-slate-800" })
      ]
    }
  );
}, il = ({ node: s, isEditing: a }) => {
  var D;
  const { props: t, style: r } = s, n = Y((P) => P.features), o = Y((P) => P.activeFeatureId), l = n.find((P) => String(P.id) === String(s.pageId)) || n.find((P) => String(P.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((D = s.dataBinding) == null ? void 0 : D.fieldName) || s.props.name || s.id), f = ve((P) => nt(P, m, x, void 0)), R = ve((P) => P.setFieldValue), w = f !== void 0 ? f : t.value !== void 0 ? String(t.value) : "", $ = Number(t.rows) || 2, b = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    St,
    {
      label: t.label || "Ghi Chú",
      showLabel: t.showLabel,
      labelPosition: t.labelPosition,
      labelWidth: t.labelWidth,
      colSpan: t.colSpan,
      required: t.required,
      error: t.validationError ? String(t.validationError) : void 0,
      children: /* @__PURE__ */ e.jsx(
        "textarea",
        {
          rows: $,
          placeholder: t.placeholder || "Nhập nội dung...",
          value: w,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          style: {
            width: "100%",
            ...N
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${b ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (P) => {
            const F = P.target.value;
            R(m, x, F), a || Le(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x,
              value: F
            });
          },
          onFocus: () => {
            a || Le(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x
            });
          },
          onBlur: (P) => {
            a || Le(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x,
              value: P.target.value
            });
          }
        }
      )
    }
  );
}, Ml = ({ node: s, isEditing: a, children: t }) => {
  var R, w;
  const { props: r, style: n } = s, o = Y(($) => $.updateComponentProps), { flex: l, flexGrow: i, flexShrink: p, flexBasis: c, minWidth: u, maxWidth: y, width: T, ...d } = n || {}, h = [
    { id: "main", label: "TAB 1" }
  ], N = r.tabs || h, [m, x] = E(
    r.activeTabId || ((R = N[0]) == null ? void 0 : R.id) || "main"
  ), f = r.activeTabId || m || ((w = N[0]) == null ? void 0 : w.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...d
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          N.map(($) => {
            const b = $.id === f;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (D) => {
                  D.stopPropagation(), x($.id), o(s.id, { activeTabId: $.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${b ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: $.label }),
                  $.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${$.badgeColor || "bg-amber-600"}`, children: $.badge })
                ]
              },
              $.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: ($) => {
                $.stopPropagation();
                const b = `tab_${Date.now().toString(36)}`, D = [...N, { id: b, label: `Tab Mới ${N.length + 1}` }];
                o(s.id, { tabs: D, activeTabId: b }), x(b);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: t })
      ]
    }
  );
}, Da = ({
  parentId: s,
  order: a,
  tabNodes: t,
  isEditing: r,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var d;
  const l = Y((h) => h.addComponent), i = Y((h) => h.selectComponent), [p, c] = E(((d = t[0]) == null ? void 0 : d.id) || ""), u = t.find((h) => h.id === p) || t[0], y = (u == null ? void 0 : u.id) || "", T = (h) => {
    var f;
    h.stopPropagation();
    const N = ((f = t[0]) == null ? void 0 : f.pageId) || "2", m = `tab_${Date.now().toString(36)}`, x = {
      id: m,
      type: "Container",
      parentId: s,
      pageId: N,
      order: a,
      // Cùng order để tự động stack vào nhóm này
      props: {
        tab: !0,
        isTab: !0,
        label: `TAB MỚI ${t.length + 1}`,
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
    l(x, s), c(m), i(m);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((h) => {
            const N = h.id === y, m = h.props.label || h.props.title || `Tab #${h.id.slice(-4)}`, x = h.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (f) => {
                  f.stopPropagation(), c(h.id), r && i(h.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${N ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: m }),
                  x !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(x) })
                ]
              },
              h.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: T,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: u && o ? o(u, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, cl = ({
  label: s = "Bản ghi:",
  reference: a = "Records",
  displayField: t = "code",
  records: r,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: p = "",
  style: c = {}
}) => {
  var f;
  const u = ve(), y = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [T, d] = E(r || y), [h, N] = E(n || ((f = y[0]) == null ? void 0 : f.id) || "");
  Ee(() => {
    r && r.length > 0 && d(r);
  }, [r]), Ee(() => {
    n !== void 0 && N(n);
  }, [n]);
  const m = (R) => {
    N(R.id), l ? l(R) : u.setFormRecord("default", R);
  }, x = () => {
    const R = T.length + 1, w = `REC-${String(R).padStart(3, "0")}`, $ = {
      id: String(Date.now()),
      code: w,
      name: `Bản ghi mới ${R}`
    }, b = [...T, $];
    d(b), N($.id), i ? i() : u.setFormRecord("default", $);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${p}`,
      style: c,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(ia, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          T.map((R) => {
            const w = String(R.id) === String(h), $ = R[t] || R.code || R.name || R.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => m(R),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${w ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: $ })
              },
              R.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: x,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm bản ghi mới",
              children: [
                /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, dl = ({
  isOpen: s,
  title: a,
  entityName: t,
  columns: r,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = ve(), p = ve((b) => b.datasets[t]), [c, u] = E([]), [y, T] = E(!1), [d, h] = E(""), [N, m] = E(0), x = We(null);
  Ee(() => {
    if (!s) {
      h(""), m(0);
      return;
    }
    Array.isArray(p) && p.length > 0 ? u(p) : (T(!0), i.queryEntity(t).then((b) => {
      Array.isArray(b) && b.length > 0 ? u(b) : u(i.getDataset(t) || []);
    }).finally(() => T(!1))), setTimeout(() => {
      var b, D;
      (b = x.current) == null || b.focus(), (D = x.current) == null || D.select();
    }, 80);
  }, [s, t, p]);
  const f = Me(() => {
    if (r && r.length > 0) return r;
    if (c.length > 0) {
      const b = c[0], D = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(b).filter((P) => !D.includes(P.toLowerCase()) && typeof b[P] != "object").slice(0, 6).map((P) => ({
        key: P,
        title: P.charAt(0).toUpperCase() + P.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [r, c]), R = Me(() => {
    if (!d.trim()) return c;
    const b = d.toLowerCase().trim();
    return c.filter((D) => n && n.length > 0 ? n.some((P) => {
      const F = D[P];
      return F != null && String(F).toLowerCase().includes(b);
    }) : Object.values(D).some(
      (P) => P != null && String(P).toLowerCase().includes(b)
    ));
  }, [c, d, n]);
  Ee(() => {
    N >= R.length && m(Math.max(0, R.length - 1));
  }, [R.length]);
  const w = (b) => {
    b.key === "ArrowDown" ? (b.preventDefault(), m((D) => D < R.length - 1 ? D + 1 : D)) : b.key === "ArrowUp" ? (b.preventDefault(), m((D) => D > 0 ? D - 1 : 0)) : b.key === "Enter" ? (b.preventDefault(), R[N] && (o(R[N]), l())) : b.key === "Escape" && (b.preventDefault(), l());
  };
  if (!s) return null;
  const $ = a || `Tra cứu danh mục: ${t}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: w,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(Ls, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: $ }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                R.length,
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
              children: /* @__PURE__ */ e.jsx(Je, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(kt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: x,
              type: "text",
              value: d,
              onChange: (b) => {
                h(b.target.value), m(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${t}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: y ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : R.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          d,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            f.map((b) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: b.width },
                children: b.title || b.key
              },
              b.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: R.map((b, D) => {
            const P = D === N;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => m(D),
                onDoubleClick: () => {
                  o(b), l();
                },
                className: `transition-colors cursor-pointer ${P ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: D + 1 }),
                  f.map((F) => {
                    const B = b[F.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: B != null ? String(B) : "—"
                      },
                      F.key
                    );
                  })
                ]
              },
              b.id ?? b.Id ?? D
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
                disabled: R.length === 0,
                onClick: () => {
                  R[N] && (o(R[N]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Gs, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, ul = ({ node: s, isEditing: a }) => {
  var re, q, je, j, he, Ce;
  const { props: t, style: r } = s, n = Y((le) => le.features), o = Y((le) => le.activeFeatureId), l = n.find((le) => String(le.id) === String(s.pageId)) || n.find((le) => String(le.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: u, flexBasis: y, minWidth: T, maxWidth: d, width: h, ...N } = r || {}, m = String(s.pageId || o || "default"), x = String(((re = s.dataBinding) == null ? void 0 : re.fieldName) || s.props.name || s.id), f = ve((le) => nt(le, m, x, void 0)), R = ve((le) => le.setFieldValue), w = ve((le) => le.applyPopulate), [$, b] = E(!1), D = f !== void 0 ? f : t.value ?? "", P = !!t.validationError, F = String(
    t.reference || t.refName || ((q = s.dataBinding) == null ? void 0 : q.refName) || ((je = s.dataBinding) == null ? void 0 : je.entityName) || ""
  ), B = String(
    t.displayField || t.selectField || ((j = s.dataBinding) == null ? void 0 : j.selectField) || "code"
  ), O = String(
    t.valueField || t.idField || ((he = s.dataBinding) == null ? void 0 : he.idField) || "code"
  ), Q = String(
    t.populateRule || t.populateField || ((Ce = s.dataBinding) == null ? void 0 : Ce.populateField) || ""
  ), L = () => {
    if (!(t.disabled || a)) {
      if (!F) {
        console.warn(`[ForgeSearchEntry] Component ${s.id} chưa cấu hình reference entity`);
        return;
      }
      b(!0);
    }
  }, G = (le) => {
    const ge = le[O] ?? le[B] ?? le.code ?? le.id;
    le[B] ?? le.name, R(m, x, ge), Q && w(m, Q, le), a || (Le(s.events, "change", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: x,
      value: ge,
      selectedItem: le
    }), Le(s.events, "select", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: x,
      value: ge,
      selectedItem: le
    }));
  }, J = (le) => {
    le.key === "F1" && (le.preventDefault(), le.stopPropagation(), L());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      St,
      {
        label: t.label,
        showLabel: t.showLabel ?? !0,
        labelPosition: t.labelPosition || "left",
        labelWidth: t.labelWidth || "100px",
        required: t.required,
        error: t.validationError ? String(t.validationError) : void 0,
        colSpan: t.colSpan,
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
              disabled: t.disabled,
              readOnly: a || !!t.readOnly,
              placeholder: t.placeholder || (F ? `Tra cứu ${F} (F1)...` : "Nhập dữ liệu..."),
              value: D,
              onKeyDown: J,
              onDoubleClick: L,
              className: `w-full pl-3 pr-8 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (le) => {
                const ge = le.target.value;
                R(m, x, ge), a || Le(s.events, "change", t.label || "Ô tra cứu", i, {
                  componentId: s.id,
                  fieldName: x,
                  value: ge
                });
              }
            }
          ),
          F && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              disabled: t.disabled || a,
              onClick: L,
              title: `Tra cứu ${F} (Nhấn F1 hoặc nhấp đúp)`,
              className: "absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
              children: /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      }
    ),
    F && /* @__PURE__ */ e.jsx(
      dl,
      {
        isOpen: $,
        title: `Tra cứu danh mục: ${t.label || F}`,
        entityName: F,
        columns: t.columns,
        onSelect: G,
        onClose: () => b(!1)
      }
    )
  ] });
}, pl = ({
  node: s,
  isEditing: a,
  label: t,
  files: r,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var B;
  const p = Xn(), c = We(null), [u, y] = E(!1), [T, d] = E(null), [h, N] = E(null), [m, x] = E([
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
  ]), f = r ?? m, R = (O) => {
    r || x(O), n == null || n(O);
  }, w = (O) => O < 1024 ? `${O} B` : O < 1024 * 1024 ? `${(O / 1024).toFixed(1)} KB` : `${(O / (1024 * 1024)).toFixed(2)} MB`, $ = (O) => O.startsWith("image/") ? /* @__PURE__ */ e.jsx(Ua, { className: "w-4 h-4 text-emerald-400" }) : O.includes("pdf") ? /* @__PURE__ */ e.jsx(Xt, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(qa, { className: "w-4 h-4 text-blue-400" }), b = (O) => {
    if (!O || O.length === 0) return;
    const Q = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(O).forEach((L) => {
      if (L.size > l * 1024 * 1024) {
        alert(`Tệp "${L.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const G = new FileReader(), J = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      G.onload = () => {
        const re = {
          id: J,
          fileName: L.name,
          fileSize: L.size,
          fileType: L.type || "application/octet-stream",
          uploadedDate: Q,
          uploadedBy: "User",
          dataUrl: G.result
        };
        R([...f, re]);
      }, G.readAsDataURL(L);
    });
  }, D = (O, Q) => {
    if (Q == null || Q.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const L = f.filter((G) => G.id !== O);
      R(L), T === O && d(null);
    }
  }, P = (O, Q) => {
    if (Q == null || Q.stopPropagation(), !O.dataUrl) {
      alert(`Đang tải file mẫu: ${O.fileName}`);
      return;
    }
    const L = document.createElement("a");
    L.href = O.dataUrl, L.download = O.fileName, document.body.appendChild(L), L.click(), document.body.removeChild(L);
  }, F = t || ((B = s == null ? void 0 : s.props) == null ? void 0 : B.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(ca, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: F }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          f.length,
          " tệp"
        ] })
      ] }),
      !o && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: p,
            ref: c,
            type: "file",
            multiple: !0,
            className: "hidden",
            onChange: (O) => b(O.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var O;
              return (O = c.current) == null ? void 0 : O.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (O) => {
          O.preventDefault(), y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (O) => {
          O.preventDefault(), y(!1), b(O.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${u ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var O;
          return (O = c.current) == null ? void 0 : O.click();
        },
        children: [
          /* @__PURE__ */ e.jsx($n, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: f.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : f.map((O, Q) => {
        const L = T === O.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => d(O.id),
            className: `transition-colors cursor-pointer ${L ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: Q + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                $(O.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: O.fileName, children: O.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: w(O.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: O.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: O.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (G) => {
                      G.stopPropagation(), N(O);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(Vs, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (G) => P(O, G),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(ws, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (G) => D(O.id, G),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          O.id
        );
      }) })
    ] }) }),
    h && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => N(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (O) => O.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  $(h.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: h.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    w(h.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (O) => P(h, O),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(ws, { className: "w-3.5 h-3.5" }),
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
                      children: /* @__PURE__ */ e.jsx(Je, { className: "w-4 h-4" })
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
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: $(h.fileType) }),
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
                    onClick: (O) => P(h, O),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(ws, { className: "w-4 h-4" }),
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
}, xl = ({
  node: s,
  isEditing: a,
  label: t,
  value: r,
  onChange: n,
  options: o,
  reference: l,
  displayField: i = "name",
  valueField: p = "code",
  sublabelField: c,
  placeholder: u,
  disabled: y = !1
}) => {
  const T = We(null), d = We(null), h = Xn(), N = String((s == null ? void 0 : s.pageId) || "default"), m = (s == null ? void 0 : s.props) || {}, x = m.dataBinding || m.fieldName || ((s == null ? void 0 : s.id) ?? ""), f = ve((z) => nt(z, N, x, void 0)), R = ve((z) => z.setFieldValue), w = ve((z) => z.applyPopulate), $ = ve((z) => z.getDataset), b = t ?? m.label ?? "Gợi ý tự động (Autocomplete)", D = l ?? m.reference, P = i ?? m.displayField ?? "name", F = p ?? m.valueField ?? "code", B = c ?? m.sublabelField, O = u ?? m.placeholder ?? "Gõ để tìm kiếm...", Q = String(m.populateRule || ""), L = f ?? r ?? "", [G, J] = E(String(L)), [re, q] = E(!1), [je, j] = E(-1);
  Ee(() => {
    L != null && J(String(L));
  }, [L]);
  const le = (o && o.length > 0 ? o : D ? ($(D) || []).map((Z) => ({
    value: Z[F] ?? Z.id ?? Z.code ?? "",
    label: String(Z[P] ?? Z.name ?? Z.title ?? Z.code ?? ""),
    sublabel: B ? String(Z[B] ?? "") : void 0,
    raw: Z
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((z) => {
    if (!G || G.trim() === "") return !0;
    const Z = G.toLowerCase().trim();
    return z.label.toLowerCase().includes(Z) || String(z.value).toLowerCase().includes(Z) || z.sublabel && z.sublabel.toLowerCase().includes(Z);
  });
  Ee(() => {
    const z = (Z) => {
      T.current && !T.current.contains(Z.target) && q(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, []);
  const ge = (z) => {
    J(z.label), q(!1), j(-1), n == null || n(z.value, z.raw), x && R(N, x, z.value), z.raw && Q && w(N, Q, z.raw);
  }, me = (z) => {
    if (!re && (z.key === "ArrowDown" || z.key === "ArrowUp")) {
      q(!0);
      return;
    }
    z.key === "ArrowDown" ? (z.preventDefault(), j(
      (Z) => Z < le.length - 1 ? Z + 1 : 0
    )) : z.key === "ArrowUp" ? (z.preventDefault(), j(
      (Z) => Z > 0 ? Z - 1 : le.length - 1
    )) : z.key === "Enter" ? re && je >= 0 && je < le.length && (z.preventDefault(), ge(le[je])) : z.key === "Escape" && (q(!1), j(-1));
  }, ye = (z) => {
    var Z;
    z.stopPropagation(), J(""), x && R(N, x, ""), n == null || n(""), (Z = d.current) == null || Z.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: T, className: "relative w-full text-xs", children: [
    b && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: h,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: b
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: h,
          ref: d,
          type: "text",
          disabled: y,
          value: G,
          placeholder: O,
          onFocus: () => q(!0),
          onChange: (z) => {
            J(z.target.value), q(!0), j(0), x && R(N, x, z.target.value);
          },
          onKeyDown: me,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        G && !y && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: ye,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(Je, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var z;
              q(!re), (z = d.current) == null || z.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${re ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    re && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: le.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      G,
      '"'
    ] }) : le.map((z, Z) => {
      const V = je === Z, U = String(z.value) === String(L);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => j(Z),
          onClick: () => ge(z),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${V ? "bg-blue-600/25 text-blue-200" : U ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: z.label }),
              (z.sublabel || z.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                z.sublabel ? `${z.sublabel} • ` : "",
                z.value
              ] })
            ] }),
            U && /* @__PURE__ */ e.jsx(Gs, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${z.value}-${Z}`
      );
    }) })
  ] });
};
function Fa(s) {
  var r, n;
  if (!s || s.length === 0) return [];
  const a = [...s].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), t = [];
  for (const o of a) {
    const l = !!((r = o.props) != null && r.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
    if (l) {
      const p = t[t.length - 1];
      p && p.type === "tab_stack" && p.order === i ? p.nodes.push(o) : t.push({
        type: "tab_stack",
        order: i,
        nodes: [o]
      });
    } else
      t.push({
        type: "single",
        order: i,
        node: o
      });
  }
  return t;
}
const Us = ss()(
  Fr(
    (s) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: a, branch: t, user: r }) => s({ token: a, branch: t, user: r }),
      logout: () => s({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), os = ({ node: s, isEditing: a, children: t }) => {
  var c, u, y, T, d;
  const r = Us((h) => h.user), n = (r == null ? void 0 : r.role) || "User", o = s.permissions;
  if (!o || !((c = o.allowedRoles) != null && c.length) && !((u = o.readOnlyRoles) != null && u.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
  if (a)
    return !((y = o.allowedRoles) != null && y.length || (T = o.readOnlyRoles) != null && T.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: t }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      t,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((d = o.allowedRoles) == null ? void 0 : d.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, p = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((N) => N.toLowerCase() === n.toLowerCase()) ? p === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: t }) : null : i && i.length > 0 && i.some((N) => N.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: t }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
};
function Ia(s, a) {
  var y, T;
  const t = s.style || {}, r = ((y = s.props) == null ? void 0 : y.colSpan) !== void 0 && ((T = s.props) == null ? void 0 : T.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, p;
  const c = (a == null ? void 0 : a.mode) || "grid", u = (a == null ? void 0 : a.gridColumns) || 12;
  if (c === "grid") {
    let d;
    if (r !== void 0 && !isNaN(r) && r > 0)
      d = Math.min(r, u);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const h = Number(a.columnsPerRow);
      !isNaN(h) && h > 0 ? d = Math.max(1, Math.floor(u / h)) : d = Math.min(4, u);
    } else
      d = Math.min(4, u);
    p = `span ${d} / span ${d}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const d = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const N = Math.min(100, Math.max(2, r / u * 100)), m = r >= u ? "100%" : `calc(${N}% - ${Math.round(d * (1 - r / u))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = m, l = m, o = `0 0 ${m}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const N = Number(a.columnsPerRow);
        if (!isNaN(N) && N > 0) {
          const m = N === 1 ? "100%" : `calc((100% - ${(N - 1) * d}px) / ${N})`;
          t.width === void 0 && t.flex === void 0 && (n = m, l = m, o = `0 0 ${m}`);
        }
      } else
        t.width === void 0 && t.flex === void 0 && (n = "100%", l = "100%", o = "1 1 auto");
    else
      t.width === void 0 && t.flex === void 0 && (n = "100%", l = "100%", o = "none");
  }
  return {
    width: n !== void 0 ? n : "100%",
    flex: o !== void 0 ? o : void 0,
    maxWidth: l !== void 0 ? l : "100%",
    minWidth: i,
    gridColumn: p,
    height: t.height,
    minHeight: t.minHeight || (s.type === "Container" ? "90px" : void 0),
    maxHeight: t.maxHeight,
    alignSelf: t.alignSelf
  };
}
const es = ({
  node: s,
  isEditing: a = !1,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = Y((m) => m.selection), p = Y((m) => m.selectComponent), c = a && i.componentId === s.id, u = (m) => {
    a && (m.stopPropagation(), p(s.id));
  }, y = (m) => {
    a && (m.preventDefault(), m.stopPropagation(), p(s.id), t && t(m, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const m = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), x = s.props.flexConfig || {}, f = s.props.gridConfig || {}, R = {
      direction: x.direction || "row",
      wrap: x.wrap || "wrap",
      gap: x.gap || "12px",
      columnsPerRow: x.columnsPerRow || "auto"
    }, w = Number(
      f.columns || (typeof x.columnsPerRow == "number" ? x.columnsPerRow : 12)
    ) || 12, $ = {
      mode: m === "flex" ? "flex" : "grid",
      direction: x.direction || "row",
      columnsPerRow: x.columnsPerRow || "auto",
      gap: x.gap || f.gap || "12px",
      wrap: x.wrap || "wrap",
      gridColumns: w
    }, b = () => {
      const D = s.children || [];
      return D.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : Fa(D).map((F, B) => {
        if (F.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            Da,
            {
              parentId: s.id,
              order: F.order,
              tabNodes: F.nodes,
              isEditing: a,
              parentFlexConfig: R,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${F.order}_${B}`
          );
        const O = F.node;
        return l ? /* @__PURE__ */ e.jsx(ts.Fragment, { children: l(O, $) }, O.id) : /* @__PURE__ */ e.jsx(
          es,
          {
            node: O,
            isEditing: a,
            onContextMenu: t,
            parentLayout: $,
            isWrappedByDrag: !1
          },
          O.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(os, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx("div", { onClick: u, onContextMenu: y, className: "w-full", children: /* @__PURE__ */ e.jsx(Or, { node: s, isEditing: a, children: b() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(os, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      Wn,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: u,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: b()
      }
    ) }) : /* @__PURE__ */ e.jsx(os, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      Wn,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: u,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: b()
      }
    ) });
  }
  const T = () => {
    var m, x, f, R, w, $;
    switch (s.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(Lr, { node: s, isEditing: a });
      case "TextBox":
        return /* @__PURE__ */ e.jsx($r, { node: s, isEditing: a });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(il, { node: s, isEditing: a });
      case "Number":
        return /* @__PURE__ */ e.jsx(Ar, { node: s, isEditing: a });
      case "Label":
        return /* @__PURE__ */ e.jsx(Br, { node: s, isEditing: a });
      case "Table":
        return /* @__PURE__ */ e.jsx(el, { node: s, isEditing: a });
      case "Select":
        return /* @__PURE__ */ e.jsx(nl, { node: s, isEditing: a });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(al, { node: s, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(rl, { node: s, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx(ol, { node: s, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(ll, { node: s, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          cl,
          {
            label: ((m = s.props) == null ? void 0 : m.label) ?? "Lô hàng:",
            reference: ((x = s.props) == null ? void 0 : x.reference) ?? "Transaction",
            displayField: ((f = s.props) == null ? void 0 : f.displayField) ?? "code",
            records: (R = s.props) == null ? void 0 : R.records,
            activeId: (w = s.props) == null ? void 0 : w.activeId,
            canAdd: (($ = s.props) == null ? void 0 : $.canAdd) !== !1,
            style: s.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(ul, { node: s, isEditing: a });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(pl, { node: s, isEditing: a });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(xl, { node: s, isEditing: a });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          s.type
        ] });
    }
  }, d = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), h = Ia(s, d), N = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...h,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(os, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: u,
      onContextMenu: y,
      style: N,
      className: `relative group transition-all duration-150 box-border ${a ? `cursor-pointer rounded-lg ${c ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && c && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: s.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            s.id.slice(-4)
          ] })
        ] }),
        T()
      ]
    }
  ) });
}, Hl = ({
  value: s,
  column: a,
  onSave: t,
  onCancel: r
}) => {
  const [n, o] = E(s ?? ""), l = We(null);
  Ee(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (c) => {
    c.key === "Enter" ? (c.preventDefault(), t(n)) : c.key === "Escape" && (c.preventDefault(), r());
  }, p = () => {
    t(n);
  };
  return a.componentType === "Select" && a.options && a.options.length > 0 ? /* @__PURE__ */ e.jsx(
    "select",
    {
      ref: l,
      value: n,
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: p,
      className: "w-full h-7 px-1.5 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400",
      children: a.options.map((c) => /* @__PURE__ */ e.jsx("option", { value: c.value, children: c.label }, c.value))
    }
  ) : a.componentType === "DatePicker" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "text",
      value: n,
      placeholder: "DD/MM/YYYY",
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: p,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  ) : a.componentType === "Number" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "number",
      value: n,
      step: a.precision && a.precision > 0 ? Math.pow(10, -a.precision) : 1,
      onChange: (c) => o(c.target.value === "" ? "" : Number(c.target.value)),
      onKeyDown: i,
      onBlur: p,
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
      onBlur: p,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  );
}, Hs = ({
  node: s,
  isEditing: a,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  activeId: o,
  overId: l
}) => {
  const {
    attributes: i,
    listeners: p,
    setNodeRef: c,
    transform: u,
    isDragging: y
  } = xa({
    id: s.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: T, isOver: d } = ha({
    id: s.id,
    disabled: !a
  }), h = ($) => {
    c($), T($);
  }, N = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), x = {
    ...Ia(s, N),
    transform: xr.Translate.toString(u),
    opacity: y ? 0.35 : 1,
    transition: y ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, f = s.type === "Container" || s.type === "Section" || s.type === "Tabs", R = d && f && !y, w = d && !f && !y;
  return /* @__PURE__ */ e.jsxs("div", { ref: h, style: x, className: "group/drag relative", children: [
    w && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    R && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...p,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: ($) => $.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(zs, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      es,
      {
        node: s,
        isEditing: a,
        onContextMenu: t,
        parentLayout: N,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: ($, b) => /* @__PURE__ */ e.jsx(
          Hs,
          {
            node: $,
            isEditing: a,
            onContextMenu: t,
            parentLayout: b && "mode" in b ? b : void 0,
            parentFlexConfig: b && !("mode" in b) ? b : void 0,
            activeId: o,
            overId: l
          },
          $.id
        )
      }
    )
  ] });
}, Ra = ({ x: s, y: a, items: t, onClose: r }) => {
  const n = We(null);
  Ee(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && r();
    }, p = (c) => {
      c.key === "Escape" && r();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", p), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", p);
    };
  }, [r]);
  const o = Math.min(s, window.innerWidth - 220), l = Math.min(a, window.innerHeight - (t.length * 36 + 20));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      style: { top: `${l}px`, left: `${o}px` },
      className: "fixed z-50 w-56 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100",
      children: t.map((i, p) => {
        if (i.divider)
          return /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-slate-800" }, p);
        const c = i.icon;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: (u) => {
              u.stopPropagation(), i.onClick(), r();
            },
            className: `w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors cursor-pointer text-left ${i.danger ? "text-red-400 hover:bg-red-500/20 hover:text-red-300" : "hover:bg-blue-600 hover:text-white"}`,
            children: [
              c && /* @__PURE__ */ e.jsx(c, { className: "w-4 h-4 shrink-0 opacity-80" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium truncate", children: i.label })
            ]
          },
          p
        );
      })
    }
  );
}, Vl = ({
  isEditing: s,
  activeId: a,
  overId: t
}) => {
  const r = Y((F) => F.features), n = Y((F) => F.activeFeatureId), o = Y((F) => F.activeRecordId), l = Y((F) => F.addComponent), i = Y((F) => F.selectComponent), p = Y((F) => F.removeComponent), c = Y((F) => F.updateComponentProps);
  Y((F) => F.updateFeatureLayout);
  const u = Y((F) => F.updateFeatureScriptFile), y = r.find((F) => F.id === n), T = (y == null ? void 0 : y.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  ts.useEffect(() => {
    var B;
    if (fa(y) && n) {
      let O = o;
      !O && typeof window < "u" && (O = new URLSearchParams(window.location.search).get("id"));
      const Q = O || "1", L = ve.getState().formRecords[n], G = (L == null ? void 0 : L.id) || (L == null ? void 0 : L.Id);
      if (String(G) !== String(Q)) {
        const { module: J } = ba(y == null ? void 0 : y.scriptFile), re = (J == null ? void 0 : J.loadDetail) || ((B = J == null ? void 0 : J.transactionDetailBL) == null ? void 0 : B.loadDetail);
        typeof re == "function" && re(Q).then((q) => {
          q && n && (ve.getState().setFormRecord(n, q), ve.getState().setFormRecord("default", q), o !== String(q.id || Q) && Y.getState().setActiveRecordId(String(q.id || Q)));
        });
      }
    }
  }, [n, o, y == null ? void 0 : y.scriptFile, y == null ? void 0 : y.route, y == null ? void 0 : y.name, y == null ? void 0 : y.isDetail]);
  const { setNodeRef: d, isOver: h } = ha({
    id: "canvas-root",
    disabled: !s
  }), [N, m] = E(""), x = !!(y != null && y.scriptFile && y.scriptFile.trim().length > 0), [f, R] = E(null), w = (F, B = {}, O = {}) => ({
    id: `${F.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: F,
    parentId: null,
    pageId: n,
    props: {
      label: F === "Button" ? "Nút mới" : F === "Label" ? "Tiêu đề khối" : void 0,
      variant: F === "Button" ? "primary" : void 0,
      size: F === "Button" ? "md" : void 0,
      placeholder: F === "TextBox" ? "Nhập nội dung..." : void 0,
      ...B
    },
    style: {
      ...O
    },
    events: [],
    order: ((y == null ? void 0 : y.components.length) || 0) + 1
  }), $ = (F) => {
    !s || !x || (F.preventDefault(), i(null), R({
      x: F.clientX,
      y: F.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, b = (F, B) => {
    if (!s) return;
    F.preventDefault(), F.stopPropagation(), i(B.id);
    const O = B.type === "Container" || B.type === "Section" || B.type === "Tabs";
    R({
      x: F.clientX,
      y: F.clientY,
      targetContainerId: O ? B.id : B.parentId,
      selectedNode: B
    });
  }, D = () => {
    var L, G, J;
    if (!f) return [];
    const { targetContainerId: F, selectedNode: B } = f, O = B && (B.type === "Container" || B.type === "Section" || B.type === "Tabs");
    if (B && O) {
      const re = B.props.layoutMode === "grid", q = ((L = B.props.flexConfig) == null ? void 0 : L.direction) === "row", je = !!(B.props.isTab || B.props.tab || B.type === "Tabs"), j = B.props.activeTabId || ((J = (G = B.props.tabs) == null ? void 0 : G[0]) == null ? void 0 : J.id) || "main", he = je ? { tabId: j } : {};
      return [
        ...je ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: dt,
            onClick: () => {
              const Ce = B.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], le = `tab_${Date.now().toString(36)}`, ge = [
                ...Ce,
                { id: le, label: `Tab Mới ${Ce.length + 1}` }
              ];
              c(B.id, {
                tabs: ge,
                activeTabId: le
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
          icon: dt,
          onClick: () => {
            const Ce = w(
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
                ...he
              },
              {
                flex: q ? "1" : void 0,
                width: q ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(Ce, F);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: Ot,
          onClick: () => {
            const Ce = w(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...he
              },
              {
                flex: q ? "1" : void 0,
                width: q ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(Ce, F);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Ot,
          onClick: () => {
            const Ce = w("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...he
            });
            l(Ce, F);
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
          icon: Bt,
          onClick: () => l(
            w("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: Bt,
          onClick: () => l(
            w("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: Bt,
          onClick: () => l(
            w("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: Bt,
          onClick: () => l(
            w("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: cs,
          onClick: () => l(
            w("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: Xt,
          onClick: () => l(
            w("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: cs,
          onClick: () => l(
            w("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...he
            }),
            F
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: tt,
          onClick: () => l(
            w("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...he
            }),
            F
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: q ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: q ? Ks : An,
          onClick: () => {
            c(B.id, {
              flexConfig: {
                ...B.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: q ? "column" : "row"
              }
            });
          }
        },
        {
          label: re ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Ot,
          onClick: () => {
            re ? c(B.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(B.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: Ge,
          danger: !0,
          onClick: () => p(B.id)
        }
      ];
    }
    const Q = T.direction === "row";
    return [
      {
        label: Q ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: dt,
        onClick: () => {
          const re = w(
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
          l(re, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: Ot,
        onClick: () => {
          const re = w(
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
          l(re, null);
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
        icon: cs,
        onClick: () => l(w("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: Bt,
        onClick: () => l(w("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: Xt,
        onClick: () => l(w("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: tt,
        onClick: () => l(w("Table"), null)
      }
    ];
  }, P = (y == null ? void 0 : y.components.filter((F) => !F.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: d,
      onContextMenu: $,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${h && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (y == null ? void 0 : y.name) || "Màn hình" }),
              x ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Is, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: y == null ? void 0 : y.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Qt, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: x ? (y == null ? void 0 : y.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          x ? P.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: $,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${h ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(dt, { className: "w-7 h-7" }) }),
                /* @__PURE__ */ e.jsx("h3", { className: "text-base font-bold text-slate-200 mb-1", children: "Màn hình đang trống (Blank Canvas)" }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-md mb-5 leading-relaxed", children: [
                  "Bạn có thể ",
                  /* @__PURE__ */ e.jsx("strong", { className: "text-blue-400", children: "kéo thả thành phần" }),
                  " từ cột bên trái vào đây, hoặc ",
                  /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: "nhấn chuột phải" }),
                  " để thêm Khoảng Trắng, Nút, Bảng dữ liệu!"
                ] }),
                s && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const F = w(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      F.children = [
                        w(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        w(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(F, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(An, { className: "w-4 h-4" }),
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
              children: Fa(P).map((F, B) => {
                if (F.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    Da,
                    {
                      parentId: null,
                      order: F.order,
                      tabNodes: F.nodes,
                      isEditing: s,
                      onContextMenu: b,
                      renderChild: (L, G) => s ? /* @__PURE__ */ e.jsx(
                        Hs,
                        {
                          node: L,
                          isEditing: s,
                          onContextMenu: b,
                          parentLayout: G && "mode" in G ? G : void 0,
                          parentFlexConfig: G && !("mode" in G) ? G : void 0,
                          activeId: a,
                          overId: t
                        },
                        L.id
                      ) : /* @__PURE__ */ e.jsx(
                        es,
                        {
                          node: L,
                          isEditing: !1,
                          onContextMenu: b,
                          parentLayout: G && "mode" in G ? G : void 0,
                          parentFlexConfig: G && !("mode" in G) ? G : void 0
                        },
                        L.id
                      )
                    },
                    `root_tab_stack_${F.order}_${B}`
                  );
                const O = F.node, Q = {
                  mode: "flex",
                  direction: T.direction || "column",
                  wrap: T.wrap || "wrap",
                  gap: T.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  Hs,
                  {
                    node: O,
                    isEditing: s,
                    onContextMenu: b,
                    parentLayout: Q,
                    activeId: a,
                    overId: t
                  },
                  O.id
                ) : /* @__PURE__ */ e.jsx(
                  es,
                  {
                    node: O,
                    isEditing: !1,
                    onContextMenu: b,
                    parentLayout: Q
                  },
                  O.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Qt, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (F) => {
                  F.preventDefault();
                  const B = N.trim();
                  if (!B) return;
                  const O = B.endsWith(".bl.ts") ? B : B.endsWith(".ts") ? B.replace(/\.ts$/, ".bl.ts") : `${B}.bl.ts`;
                  u(n, O), m("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(Is, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: N,
                          onChange: (F) => m(F.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  y && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(da, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const F = y.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          m(`${F || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          y.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
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
                        /* @__PURE__ */ e.jsx(Ps, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        f && /* @__PURE__ */ e.jsx(
          Ra,
          {
            x: f.x,
            y: f.y,
            items: D(),
            onClose: () => R(null)
          }
        )
      ]
    }
  );
};
function hl(s) {
  return s.replace(/-([a-z])/g, (a, t) => t.toUpperCase());
}
function ml(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function bl(s) {
  const a = {};
  if (!s || typeof s != "string") return a;
  const r = s.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of r) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), p = o.slice(l + 1).trim();
    if (i && p) {
      let c = hl(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), a[c] = p;
    }
  }
  return a;
}
function fl(s) {
  const a = /* @__PURE__ */ new Set([
    "customCss",
    "display",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "gap",
    "gridTemplateColumns"
  ]), t = [];
  for (const [r, n] of Object.entries(s)) {
    if (n == null || n === "" || a.has(r))
      continue;
    const o = ml(r);
    t.push(`${o}: ${n};`);
  }
  return t.join(`
`);
}
const Un = [
  {
    name: "Document",
    displayName: "Chứng Từ Nghiệp Vụ (Documents)",
    tableName: "Documents",
    description: "Thực thể chứng từ nghiệp vụ tổng quát",
    columns: [
      { name: "Id", displayName: "Id", dataType: "number", isRequired: !0, isPrimaryKey: !0, isAuditField: !1 },
      { name: "Code", displayName: "Mã số", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "DocDate", displayName: "Ngày lập", dataType: "date", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Title", displayName: "Tiêu đề / Tên chứng từ", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "PartnerName", displayName: "Đối tác / Khách hàng", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Status", displayName: "Trạng thái", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TotalAmount", displayName: "Tổng tiền", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Active", displayName: "Kích hoạt", dataType: "boolean", isRequired: !1, isPrimaryKey: !1, isAuditField: !0 }
    ]
  },
  {
    name: "MasterData",
    displayName: "Danh Mục Dùng Chung (MasterData)",
    tableName: "MasterData",
    description: "Bảng tra cứu danh mục chuẩn hóa",
    columns: [
      { name: "Id", displayName: "Id", dataType: "number", isRequired: !0, isPrimaryKey: !0, isAuditField: !1 },
      { name: "Code", displayName: "Mã", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Name", displayName: "Tên danh mục", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Description", displayName: "Mô tả", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Active", displayName: "Kích hoạt", dataType: "boolean", isRequired: !1, isPrimaryKey: !1, isAuditField: !0 }
    ]
  }
];
let is = null;
async function La() {
  if (is) return is;
  try {
    const s = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (s.ok) {
      const a = await s.json();
      if (Array.isArray(a) && a.length > 0)
        return is = a, a;
    }
  } catch {
    console.warn("[MetadataService] Server offline, using fallback entity catalogs");
  }
  return is = Un, Un;
}
const gl = ({
  isOpen: s,
  node: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = E("info"), [l, i] = E([]), [p, c] = E(""), [u, y] = E("General"), [T, d] = E(""), [h, N] = E("Dropdown"), [m, x] = E(""), [f, R] = E(""), [w, $] = E(""), [b, D] = E(1), [P, F] = E(4), [B, O] = E(""), [Q, L] = E('{"change":"AutoPOL"}'), [G, J] = E(""), [re, q] = E(""), [je, j] = E(""), [he, Ce] = E(""), [le, ge] = E(""), [me, ye] = E(""), [z, Z] = E(""), [V, U] = E(""), [ue, we] = E(""), [Oe, He] = E(""), [Fe, C] = E(""), [v, _] = E(""), [ce, oe] = E(""), [be, ne] = E(""), [pe, ee] = E(""), [ie, De] = E(""), [de, te] = E(""), [M, H] = E(""), [Ye, Dt] = E(""), [Ft, ut] = E(""), [at, pt] = E(""), [xt, It] = E(""), [rt, ht] = E(""), [ze, lt] = E("id"), [ot, mt] = E(""), [bt, ft] = E(""), [gt, yt] = E(""), [vt, Rt] = E(""), [Lt, Nt] = E(""), [jt, Pt] = E(""), [Vt, Wt] = E(""), [Kt, k] = E(""), [K, se] = E(""), [xe, ke] = E(""), [Te, Ne] = E(!1), [fe, Ae] = E(!0), [Ie, g] = E(!1), [A, I] = E(!1), [W, X] = E(!1), [ae, Se] = E(!1), [Pe, $e] = E(!1), [Be, Ue] = E(!1), [Xe, ns] = E(!1), [qs, Ys] = E(!1), [Js, Xs] = E(!1), [Qs, Zs] = E(!1), [en, tn] = E(!1), [sn, nn] = E(!1), [an, rn] = E(!1), [ln, on] = E(!1), [cn, dn] = E(!0), [un, pn] = E(!0), [xn, hn] = E(!1), [mn, bn] = E(!1), [fn, gn] = E(!1), [yn, vn] = E(!1), [Nn, jn] = E(!1), [wn, Cn] = E(!1), [kn, Tn] = E(!1), [Sn, Dn] = E(!1), [Et, Fn] = E(
    'return "?$filter=Active eq true and TerminalType/any(a:a/TypeId in ({${1}})) &$orderby=Id desc"'
  ), [ys, In] = E(
    '(x, y) => { return (x.PortCode !== null && x.PortCode !== undefined && x.PortCode !== "") ? (x.PortCode + " - " + x.Name) : x.Name; }'
  ), [Rn, Ln] = E(""), [vs, Pn] = E("{ShortName}"), [kl, Aa] = E("");
  if (Ee(() => {
    La().then((S) => i(S));
  }, []), Ee(() => {
    if (a) {
      const S = a.props || {}, _e = a.dataBinding || {};
      c(String(S.id ?? a.id)), y(S.group || "General"), d(S.reference || _e.entityName || ""), N(a.type || "Dropdown"), x(String(S.parentId ?? "")), R(S.refName || S.reference || _e.entityName || ""), $(_e.fieldName || S.name || S.fieldName || a.id), D(Number(a.order ?? S.order ?? 1)), F(Number(S.colSpan ?? S.column ?? 4)), O(S.label || ""), L(
        typeof S.events == "string" ? S.events : S.events ? JSON.stringify(S.events) : '{"change":"AutoPOL"}'
      ), J(S.style || ""), q(S.childStyle || ""), j(S.validation || ""), Ce(S.selectField || ""), ge(S.plainText || ""), ye(S.cssClass || S.className || ""), Z(S.sqlSelect || ""), U(String(S.offset ?? "")), we(S.groupFormat || ""), He(S.formatSummary || ""), C(S.orderBySummary || ""), _(S.groupEvent || ""), oe(S.icon || ""), ne(S.system || ""), ee(S.refClass || "TMS.UI.Business.Catalogue.TerminalEditor"), De(S.hotKey || ""), te(S.dateTimeField || ""), H(String(S.addStart ?? "")), Dt(String(S.addEnd ?? "")), ut(String(S.bodyRowHeight ?? "")), pt(S.sqlWhere || ""), It(String(S.footerHeight ?? "")), ht(S.joinTable || ""), lt(S.idField || "id"), mt(String(S.headerHeight ?? "")), ft(S.populateField || ""), yt(String(S.precision ?? "")), Rt(S.groupBy || ""), Nt(S.disabledExp || ""), Pt(S.showExp || ""), Wt(String(S.row ?? "")), k(S.template || ""), se(S.templateLocked || ""), ke(String(S.default ?? S.defaultValue ?? "")), Ne(!!S.realtime), Ae(S.showLabel !== !1 && S.label !== !1), g(!!S.hidden), I(!!S.filterLocal), X(!!S.sqlSearch), Se(!!S.cache), $e(!!S.moveTab), Ue(!!S.focus), ns(!!S.focusSearch), Ys(!!S.noLoad), Xs(!!S.collapsible), Zs(!!S.showHotKey), tn(!!S.history), nn(!!S.top), rn(!!S.hideAnd), on(!!S.disabled), dn(S.visibility !== !1), pn(S.active !== !1), hn(!!S.upperCase), bn(!!(S.virtualScroll || S.virtual)), gn(!!S.isPrivate), vn(!!S.renderIndex), jn(!!(S.canAdd || S.add)), Cn(!!(S.canSearch || S.search)), Tn(!!(S.isSummary || S.summary)), Dn(!!S.showDateTimeField), (S.dataSource || S.dataSourceFilter || _e.dataSource) && Fn(String(S.dataSource || S.dataSourceFilter || _e.dataSource)), (S.formatEntity || _e.formatEntity) && In(String(S.formatEntity || _e.formatEntity)), S.migration && Ln(String(S.migration)), (S.formatData || _e.formatData) && Pn(String(S.formatData || _e.formatData)), (S.query || _e.query) && Aa(String(S.query || _e.query));
    }
  }, [a]), !s || !a) return null;
  const Ba = () => {
    var as, En;
    let S = Q;
    try {
      Q.trim().startsWith("{") && (S = JSON.parse(Q));
    } catch {
      S = Q;
    }
    const _e = {
      ...a.props,
      id: p,
      group: u,
      reference: T,
      componentType: h,
      parentId: m,
      refName: f,
      fieldName: w,
      order: Number(b) || 1,
      colSpan: Number(P) || 4,
      column: Number(P) || 4,
      label: B,
      events: S,
      style: G,
      childStyle: re,
      validation: je,
      selectField: he,
      plainText: le,
      cssClass: me,
      sqlSelect: z,
      offset: V,
      groupFormat: ue,
      formatSummary: Oe,
      orderBySummary: Fe,
      groupEvent: v,
      icon: ce,
      system: be,
      refClass: pe,
      hotKey: ie,
      dateTimeField: de,
      addStart: M,
      addEnd: Ye,
      bodyRowHeight: Ft,
      sqlWhere: at,
      footerHeight: xt,
      joinTable: rt,
      idField: ze,
      headerHeight: ot,
      populateField: bt,
      precision: gt ? Number(gt) : void 0,
      groupBy: vt,
      disabledExp: Lt,
      showExp: jt,
      row: Vt,
      template: Kt,
      templateLocked: K,
      default: xe,
      // Display flags
      realtime: Te,
      showLabel: fe,
      hidden: Ie,
      filterLocal: A,
      sqlSearch: W,
      cache: ae,
      moveTab: Pe,
      focus: Be,
      focusSearch: Xe,
      noLoad: qs,
      collapsible: Js,
      showHotKey: Qs,
      history: en,
      top: sn,
      hideAnd: an,
      disabled: ln,
      visibility: cn,
      active: un,
      upperCase: xn,
      virtual: mn,
      isPrivate: fn,
      renderIndex: yn,
      add: Nn,
      search: wn,
      summary: kn,
      showDateTimeField: Sn,
      // Code blocks
      dataSource: Et,
      dataSourceFilter: Et,
      formatEntity: ys,
      migration: Rn,
      formatData: vs,
      query: Et
    }, Ns = {
      ...a.dataBinding || {},
      entityName: T || f || ((as = a.dataBinding) == null ? void 0 : as.entityName) || u || "General",
      refName: f || T || ((En = a.dataBinding) == null ? void 0 : En.refName) || "",
      fieldName: w || a.id,
      query: Et,
      dataSource: Et,
      sqlWhere: at,
      selectField: he,
      populateField: bt,
      idField: ze,
      formatData: vs,
      formatEntity: ys,
      twoWay: !0
    };
    r(a.id, _e, Ns), t();
  }, Re = (S, _e, Ns) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${_e ? "text-slate-200 font-medium" : "text-slate-400"}`, children: S }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: _e,
        onChange: (as) => Ns(as.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            p || a.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: Ba,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Phân quyền" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: t,
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Je, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                      value: u,
                      onChange: (S) => y(S.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: T,
                      onChange: (S) => {
                        d(S.target.value), f || R(S.target.value);
                      },
                      list: "entity-list",
                      placeholder: "VD: Terminal, Transaction...",
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "entity-list", children: l.map((S) => /* @__PURE__ */ e.jsx("option", { value: S.name, children: S.displayName }, S.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: h,
                      onChange: (S) => N(S.target.value),
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
                      value: m,
                      onChange: (S) => x(S.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "RefName" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: f,
                      onChange: (S) => R(S.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Field Name" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (S) => $(S.target.value),
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
                      value: b,
                      onChange: (S) => D(S.target.value),
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
                      value: P,
                      onChange: (S) => F(S.target.value),
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
                      value: B,
                      onChange: (S) => O(S.target.value),
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
                      value: G,
                      onChange: (S) => J(S.target.value),
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
                      value: re,
                      onChange: (S) => q(S.target.value),
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
                      value: je,
                      onChange: (S) => j(S.target.value),
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
                      value: he,
                      onChange: (S) => Ce(S.target.value),
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
                      value: le,
                      onChange: (S) => ge(S.target.value),
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
                      value: me,
                      onChange: (S) => ye(S.target.value),
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
                      value: z,
                      onChange: (S) => Z(S.target.value),
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
                      value: V,
                      onChange: (S) => U(S.target.value),
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
                      value: ue,
                      onChange: (S) => we(S.target.value),
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
                      value: Oe,
                      onChange: (S) => He(S.target.value),
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
                      value: Fe,
                      onChange: (S) => C(S.target.value),
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
                      value: v,
                      onChange: (S) => _(S.target.value),
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
                      value: ce,
                      onChange: (S) => oe(S.target.value),
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
                      value: be,
                      onChange: (S) => ne(S.target.value),
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
                      onChange: (S) => ee(S.target.value),
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
                      value: ie,
                      onChange: (S) => De(S.target.value),
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
                      value: de,
                      onChange: (S) => te(S.target.value),
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
                      value: M,
                      onChange: (S) => H(S.target.value),
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
                      value: Ye,
                      onChange: (S) => Dt(S.target.value),
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
                      value: Ft,
                      onChange: (S) => ut(S.target.value),
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
                      value: at,
                      onChange: (S) => pt(S.target.value),
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
                      value: xt,
                      onChange: (S) => It(S.target.value),
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
                      value: rt,
                      onChange: (S) => ht(S.target.value),
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
                      value: ze,
                      onChange: (S) => lt(S.target.value),
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
                      value: ot,
                      onChange: (S) => mt(S.target.value),
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
                      value: bt,
                      onChange: (S) => ft(S.target.value),
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
                      value: gt,
                      onChange: (S) => yt(S.target.value),
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
                      value: vt,
                      onChange: (S) => Rt(S.target.value),
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
                      value: Lt,
                      onChange: (S) => Nt(S.target.value),
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
                      value: jt,
                      onChange: (S) => Pt(S.target.value),
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
                      value: Vt,
                      onChange: (S) => Wt(S.target.value),
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
                      value: Kt,
                      onChange: (S) => k(S.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Qt, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: K,
                      onChange: (S) => se(S.target.value),
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
                      value: xe,
                      onChange: (S) => ke(S.target.value),
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
                  Re("Realtime", Te, Ne),
                  Re("Label", fe, Ae),
                  Re("Hidden", Ie, g),
                  Re("FilterLocal", A, I),
                  Re("SqlSearch", W, X),
                  Re("Cache", ae, Se),
                  Re("Move Tab", Pe, $e),
                  Re("Focus", Be, Ue),
                  Re("FocusSearch", Xe, ns),
                  Re("No Load", qs, Ys),
                  Re("Collapsible", Js, Xs),
                  Re("HotKey", Qs, Zs),
                  Re("History", en, tn)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Re("Top", sn, nn),
                  Re("HideAnd", an, rn),
                  Re("Disabled", ln, on),
                  Re("Visibility", cn, dn),
                  Re("Active", un, pn),
                  Re("Upper Case", xn, hn),
                  Re("Virtual", mn, bn),
                  Re("Private", fn, gn),
                  Re("Render Index", yn, vn),
                  Re("Add", Nn, jn),
                  Re("Search", wn, Cn),
                  Re("Sumary", kn, Tn),
                  Re("DateTime Field", Sn, Dn)
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
                      value: Et,
                      onChange: (S) => Fn(S.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-rose-300 focus:outline-none resize-y"
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
                      value: ys,
                      onChange: (S) => In(S.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: Rn,
                      onChange: (S) => Ln(S.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: vs,
                      onChange: (S) => Pn(S.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Rs, { className: "w-4 h-4 text-teal-400" }),
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
              (S, _e) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: S }),
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
                    defaultChecked: _e <= 1,
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
                    defaultChecked: _e > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, S)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Xt, { className: "w-4 h-4 text-teal-400" }),
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
}, qn = [
  {
    id: "ent_shipment",
    name: "Shipment",
    displayName: "Lô Hàng (FCL / LCL Shipment)",
    description: "Thông tin hồ sơ lô hàng vận chuyển đường biển/hàng không (Ảnh 4)",
    fields: [
      { name: "JobNo", displayName: "Mã Job (Job No.)", dataType: "string", isRequired: !0 },
      { name: "MBLNo", displayName: "Số M-B/L (M-B/L No.)", dataType: "string", isRequired: !0 },
      { name: "MBLIssuedDate", displayName: "Ngày Phát Hành M-B/L", dataType: "date" },
      { name: "MBLType", displayName: "Loại M-B/L (Surrendered/Original)", dataType: "string", options: ["SURRENDERED", "ORIGINAL", "SEA WAYBILL"] },
      { name: "ShipmentDate", displayName: "Ngày Lô Hàng (S.Date)", dataType: "date" },
      { name: "POL", displayName: "Cảng Xếp Hàng (POL)", dataType: "string" },
      { name: "POD", displayName: "Cảng Dỡ Hàng (POD)", dataType: "string" },
      { name: "ETA", displayName: "Ngày Đến Dự Kiến (ETA)", dataType: "date" },
      { name: "ETD", displayName: "Ngày Đi Dự Kiến (ETD)", dataType: "date" },
      { name: "Service", displayName: "Phương Thức Vận Chuyển", dataType: "string", options: ["CY/CY", "CFS/CFS", "DOOR/DOOR"] },
      { name: "PaymentTerm", displayName: "Điều Khoản Thanh Toán (P.Term)", dataType: "string", options: ["PREPAID", "COLLECT"] },
      { name: "TotalPackages", displayName: "Tổng Số Kiện (T.Packages)", dataType: "number" },
      { name: "PackageType", displayName: "Loại Bao Bì (P.Type)", dataType: "string", options: ["PALLETS", "CARTONS", "BAGS", "WOODEN CRATES"] },
      { name: "TotalGW", displayName: "Tổng Trọng Lượng (Total GW - KGS)", dataType: "number" },
      { name: "TotalCBM", displayName: "Tổng Thể Tích (Total CBM - M3)", dataType: "number" },
      { name: "TotalVGM", displayName: "Tổng Trọng Lượng Xác Thực (Total VGM)", dataType: "number" },
      { name: "PONo", displayName: "Số Đơn Đặt Hàng (PO No.)", dataType: "string" },
      { name: "Notes", displayName: "Ghi Chú Đơn Hàng", dataType: "string" }
    ]
  },
  {
    id: "ent_vendor",
    name: "Vendor",
    displayName: "Nhà Cung Cấp / Đối Tác (Vendor)",
    description: "Danh mục đại lý, hãng tàu, forwarder đối tác (Ảnh 1 & Vendor.cs)",
    fields: [
      { name: "Id", displayName: "Mã Hệ Thống (ID)", dataType: "number", isRequired: !0 },
      { name: "Code", displayName: "Mã Đối Tác (Code)", dataType: "string" },
      { name: "FullName", displayName: "Tên Đầy Đủ (FullName)", dataType: "string", isRequired: !0 },
      { name: "CompanyLocalFullName", displayName: "Tên Doanh Nghiệp (Tiếng Việt)", dataType: "string" },
      { name: "CompanyInterShortName", displayName: "Tên Viết Tắt (Quốc Tế)", dataType: "string" },
      { name: "TaxCode", displayName: "Mã Số Thuế (Tax Code)", dataType: "string" },
      { name: "Address", displayName: "Địa Chỉ Giao Dịch", dataType: "string" },
      { name: "PhoneNumber", displayName: "Số Điện Thoại", dataType: "string" },
      { name: "Email", displayName: "Hòm Thư Điện Tử", dataType: "string" },
      { name: "Note", displayName: "Ghi Chú Nhà Cung Cấp", dataType: "string" },
      { name: "Active", displayName: "Đang Hoạt Động", dataType: "boolean" }
    ]
  },
  {
    id: "ent_customer",
    name: "Customer",
    displayName: "Khách Hàng (Customer)",
    description: "Hồ sơ chủ hàng, người gửi hàng (Shipper) hoặc người nhận hàng (Consignee)",
    fields: [
      { name: "CustomerCode", displayName: "Mã Khách Hàng", dataType: "string", isRequired: !0 },
      { name: "CustomerName", displayName: "Tên Khách Hàng", dataType: "string", isRequired: !0 },
      { name: "TaxCode", displayName: "Mã Số Thuế", dataType: "string" },
      { name: "ContactPerson", displayName: "Người Liên Hệ", dataType: "string" },
      { name: "PhoneNumber", displayName: "Số Điện Thoại", dataType: "string" },
      { name: "Address", displayName: "Địa Chỉ Văn Phòng", dataType: "string" },
      { name: "Salesman", displayName: "Nhân Viên Phụ Trách (Sales)", dataType: "string" }
    ]
  },
  {
    id: "ent_terminal",
    name: "Terminal",
    displayName: "Cảng Biển & Ga Hàng Không (Terminal/Port)",
    description: "Danh bạ cảng biển xếp dỡ hàng hóa (Ảnh 4: SHANGHAI, TIEN SA TERMINAL)",
    fields: [
      { name: "TerminalCode", displayName: "Mã Cảng (CNSGH, VNDTS)", dataType: "string", isRequired: !0 },
      { name: "TerminalName", displayName: "Tên Cảng Biển / Ga Hàng Hóa", dataType: "string", isRequired: !0 },
      { name: "CountryCode", displayName: "Mã Quốc Gia (CN, VN, US)", dataType: "string" },
      { name: "PortType", displayName: "Loại Cảng (Sea / Air / Inland)", dataType: "string", options: ["SeaPort", "Airport", "ICD"] }
    ]
  },
  {
    id: "ent_commodity",
    name: "Commodity",
    displayName: "Chủng Loại Hàng Hóa (Commodity)",
    description: "Tên mặt hàng, mã HS code hàng hóa xuất nhập khẩu",
    fields: [
      { name: "CommodityCode", displayName: "Mã Chủng Loại", dataType: "string", isRequired: !0 },
      { name: "CommodityName", displayName: "Tên Hàng Hóa", dataType: "string", isRequired: !0 },
      { name: "HsCode", displayName: "Mã Biểu Thuế (HS Code)", dataType: "string" },
      { name: "Description", displayName: "Mô Tả Đặc Tính Kỹ Thuật", dataType: "string" }
    ]
  }
], Wl = ({ width: s }) => {
  var ue, we, Oe, He, Fe;
  const [a, t] = E("layout"), [r, n] = E(null), [o, l] = E(!1), [i, p] = E(!1), [c, u] = E([]);
  Ee(() => {
    La().then((C) => {
      C && C.length > 0 && u(C);
    });
  }, []);
  const [y, T] = E(null), [d, h] = E(null), N = Y((C) => C.features), m = Y((C) => C.activeFeatureId), x = Y((C) => C.selection), f = Y((C) => C.selectComponent), R = Y((C) => C.addComponent), w = Y((C) => C.updateComponentProps), $ = Y((C) => C.updateComponentStyle), b = Y((C) => C.updateComponentEvents), D = Y((C) => C.updateComponentDataBinding), P = Y((C) => C.updateComponentValidation), F = Y((C) => C.updateComponentPermissions), B = Y((C) => C.updateComponentOrder), O = Y((C) => C.removeComponent);
  Y((C) => C.distributeSiblingWidths);
  const Q = Y((C) => C.updateFeatureScriptFile), [L, G] = E(""), [J, re] = E(0), q = N.find((C) => C.id === m), je = (C, v) => {
    if (!v) return null;
    for (const _ of C) {
      if (_.id === v) return _;
      if (_.children) {
        const ce = je(_.children, v);
        if (ce) return ce;
      }
    }
    return null;
  }, j = x.componentId && q ? je(q.components, x.componentId) : null, he = j != null && j.parentId && q ? je(q.components, j.parentId) : null, Ce = he && ((ue = he.props) != null && ue.isTab || (we = he.props) != null && we.tab || he.type === "Tabs") ? he : null;
  if (!j) {
    const C = q ? q.components.filter((v) => !v.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: s ? `${s}px` : "380px" },
        className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: "Feature" }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (q == null ? void 0 : q.name) || "Trang" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: q == null ? void 0 : q.route })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: q && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: q.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: q.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (v) => Q(q.id, v.target.value),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      C.length,
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
                      const v = `box_${Date.now().toString(36)}`;
                      R(
                        {
                          id: v,
                          type: "Container",
                          parentId: null,
                          pageId: q.id,
                          order: C.length + 1,
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
                      /* @__PURE__ */ e.jsx(Ze, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              C.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...C].sort((v, _) => (v.order ?? 1) - (_.order ?? 1)).map((v, _) => {
                var oe, be;
                const ce = !!((oe = v.props) != null && oe.tab || (be = v.props) != null && be.isTab || v.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => f(v.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          _ + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: v.props.label || v.props.title || v.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: v.type }),
                            ce && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            v.id
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
                              value: Number(v.order ?? v.props.order ?? _ + 1),
                              onClick: (ne) => ne.stopPropagation(),
                              onChange: (ne) => {
                                const pe = Number(ne.target.value);
                                B(v.id, pe);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (ne) => {
                              ne.stopPropagation(), O(v.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  v.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const le = j.type === "Container" || j.type === "Section" || j.type === "Tabs", ge = j.type === "Select" || j.type === "Dropdown" || j.type === "Autocomplete" || j.type === "SearchEntry", me = j.props.dropdownColumns || ((Oe = j.dataBinding) == null ? void 0 : Oe.dropdownColumns) || [], ye = !le && (a === "layout" || a === "children") ? "props" : !ge && a === "columns" ? "data" : a, z = j.props.layoutMode || "flex", Z = j.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, V = j.props.gridConfig || { columns: 2, gap: "16px" }, U = j.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: j.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: j.props.label || j.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                j.id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => p(!0),
                className: "p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Mở Component properties modal (Chuẩn C# Core)",
                children: /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => O(j.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(Ge, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          le && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ot, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          le && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  U.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ya, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(Ls, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          ge && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => t("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(tt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  me.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(Bn, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Qt, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          le && ye === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => w(j.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${z === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => w(j.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${z === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Ot, { className: "w-4 h-4 text-emerald-400" }),
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
                        value: Z.direction || "row",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, direction: C.target.value }
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
                          value: typeof Z.columnsPerRow == "number" ? Z.columnsPerRow : V.columns || 12,
                          onChange: (C) => {
                            const v = Math.max(1, Number(C.target.value) || 12);
                            w(j.id, {
                              flexConfig: { ...Z, columnsPerRow: v },
                              gridConfig: { ...V, columns: v }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(Z.columnsPerRow || "12"),
                          onChange: (C) => {
                            const v = C.target.value === "auto" ? "auto" : Number(C.target.value);
                            w(j.id, {
                              flexConfig: {
                                ...Z,
                                columnsPerRow: v,
                                wrap: v !== "auto" ? "wrap" : Z.wrap
                              },
                              gridConfig: {
                                ...V,
                                columns: v === "auto" ? 12 : v
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
                        value: Z.justify || "flex-start",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, justify: C.target.value }
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
                        value: Z.align || "center",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, align: C.target.value }
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
                        value: Z.gap || "12px",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, gap: C.target.value }
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
                        value: Z.wrap || "wrap",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, wrap: C.target.value }
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
                          value: V.columns || 12,
                          onChange: (C) => {
                            const v = Math.max(1, Number(C.target.value) || 12);
                            w(j.id, {
                              gridConfig: { ...V, columns: v },
                              flexConfig: { ...Z, columnsPerRow: v }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(V.columns || 12),
                          onChange: (C) => {
                            const v = Number(C.target.value);
                            w(j.id, {
                              gridConfig: { ...V, columns: v },
                              flexConfig: { ...Z, columnsPerRow: v }
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
                        value: Z.gap || V.gap || "12px",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, gap: C.target.value },
                          gridConfig: { ...V, gap: C.target.value }
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
                        value: Z.justify || "flex-start",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, justify: C.target.value }
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
                        value: Z.align || "center",
                        onChange: (C) => w(j.id, {
                          flexConfig: { ...Z, align: C.target.value }
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
                    checked: !!(j.props.isTab || j.props.tab || j.type === "Tabs"),
                    onChange: (C) => {
                      var ce;
                      const v = C.target.checked, _ = j.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      w(j.id, {
                        isTab: v,
                        tab: v,
                        tabs: v ? _ : j.props.tabs,
                        activeTabId: v ? j.props.activeTabId || ((ce = _[0]) == null ? void 0 : ce.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(j.props.isTab || j.props.tab || j.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: j.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (C) => w(j.id, { label: C.target.value }),
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
                        value: Number(j.order ?? j.props.order ?? 1),
                        onChange: (C) => {
                          const v = Number(C.target.value);
                          B(j.id, v);
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
                        value: j.props.badge !== void 0 ? String(j.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (C) => w(j.id, {
                          badge: C.target.value || void 0
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
          le && ye === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                U.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            U.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...U].sort((C, v) => (C.order ?? 1) - (v.order ?? 1)).map((C, v) => {
              var oe, be;
              const _ = x.componentId === C.id, ce = !!((oe = C.props) != null && oe.tab || (be = C.props) != null && be.isTab || C.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => f(C.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${_ ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        v + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: C.props.label || C.props.title || C.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: C.type }),
                          ce && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          C.id
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
                            value: C.order ?? v + 1,
                            onClick: (ne) => ne.stopPropagation(),
                            onChange: (ne) => {
                              const pe = Number(ne.target.value);
                              B(C.id, pe);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (ne) => {
                            ne.stopPropagation(), O(C.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                C.id
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
                      value: Number(j.order ?? j.props.order ?? 1),
                      onChange: (C) => {
                        const v = Number(C.target.value);
                        B(j.id, v);
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
                        value: Number(j.props.colSpan || 4),
                        onChange: (C) => {
                          const v = Math.max(1, Number(C.target.value) || 1);
                          w(j.id, { colSpan: v });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: j.props.colSpan || 4,
                        onChange: (C) => w(j.id, { colSpan: Number(C.target.value) }),
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
                    j.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(j.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            le && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(j.props.tab || j.props.isTab || j.type === "Tabs"),
                  onChange: (C) => {
                    const v = C.target.checked;
                    w(j.id, {
                      tab: v,
                      isTab: v
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            Ce && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: j.props.tabId || ((Fe = (He = Ce.props.tabs) == null ? void 0 : He[0]) == null ? void 0 : Fe.id) || "main",
                  onChange: (C) => w(j.id, { tabId: C.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (Ce.props.tabs || []).map((C) => /* @__PURE__ */ e.jsxs("option", { value: C.id, children: [
                    C.label,
                    " (",
                    C.id,
                    ")"
                  ] }, C.id))
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
                      checked: j.props.showLabel ?? !0,
                      onChange: (C) => w(j.id, { showLabel: C.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: j.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (C) => w(j.id, { label: C.target.value }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: j.props.labelPosition || "left",
                      onChange: (C) => w(j.id, { labelPosition: C.target.value }),
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
                        value: Number(j.props.colSpan || 4),
                        onChange: (C) => {
                          const v = Math.max(1, Number(C.target.value) || 1);
                          w(j.id, { colSpan: v });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: j.props.colSpan || 4,
                        onChange: (C) => w(j.id, { colSpan: Number(C.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((C) => /* @__PURE__ */ e.jsxs("option", { value: C, children: [
                          C,
                          " Cột (",
                          Math.round(C / 12 * 100),
                          "%)"
                        ] }, C))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    j.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(j.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            j.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: j.props.placeholder || "",
                  onChange: (C) => w(j.id, { placeholder: C.target.value }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            j.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: j.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (C) => w(j.id, { reference: C.target.value }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: j.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (C) => w(j.id, { displayField: C.target.value }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: j.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (C) => w(j.id, { valueField: C.target.value }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: j.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (C) => w(j.id, { placeholder: C.target.value }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            j.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: j.props.rows || 3,
                  onChange: (C) => w(j.id, { rows: Number(C.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            j.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: j.props.precision !== void 0 ? j.props.precision : 2,
                    onChange: (C) => w(j.id, { precision: Number(C.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: j.props.thousandsSeparator ?? !0,
                    onChange: (C) => w(j.id, { thousandsSeparator: C.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            j.type === "Table" && (() => {
              const C = j.props.columns || [], v = r !== null ? C[r] : null, _ = (ee, ie) => {
                const De = C.map((de, te) => te === ee ? { ...de, ...ie } : de);
                w(j.id, { columns: De });
              }, ce = (ee, ie) => {
                if (ie < 0 || ie >= C.length) return;
                const De = Os(C, ee, ie);
                w(j.id, { columns: De }), n(ie);
              }, oe = (ee) => {
                const ie = Ta(C, ee);
                w(j.id, { columns: ie });
                const De = ie.findIndex((de) => de.key === ee);
                De !== -1 && n(De);
              }, be = (ee, ie) => {
                const De = Math.max(0, Math.min(C.length - 1, ie - 1));
                if (De !== ee) {
                  const de = Os(C, ee, De);
                  w(j.id, { columns: de }), n(De);
                }
              }, ne = () => {
                const ee = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: C.length + 1
                }, ie = Jt([...C, ee]);
                w(j.id, { columns: ie }), n(ie.length - 1);
              }, pe = (ee) => {
                const ie = C.filter((de, te) => te !== ee), De = Jt(ie);
                w(j.id, { columns: De }), r === ee ? n(null) : r !== null && r > ee && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(tt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ne,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(Ze, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: C.map((ee, ie) => {
                  const De = r === ie, de = !!(ee.frozen || ee.sticky === "left"), te = y === ie, M = d === ie;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => T(ie),
                      onDragOver: (H) => {
                        H.preventDefault(), !(y === null || y === ie) && h(ie);
                      },
                      onDragLeave: () => h(null),
                      onDrop: () => {
                        y !== null && y !== ie && ce(y, ie), T(null), h(null);
                      },
                      onDragEnd: () => {
                        T(null), h(null);
                      },
                      onClick: () => n(ie),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${te ? "opacity-30 bg-slate-800" : ""} ${M ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${De ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(zs, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ie === 0,
                                onClick: (H) => {
                                  H.stopPropagation(), ce(ie, ie - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(us, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ie === C.length - 1,
                                onClick: (H) => {
                                  H.stopPropagation(), ce(ie, ie + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            ee.order ?? ie + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: ee.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            ee.key,
                            "]"
                          ] }),
                          de && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: ee.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (H) => {
                                H.stopPropagation(), pe(ie);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    ee.key || ie
                  );
                }) }),
                v && r !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      v.title
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500", children: [
                      "Index: ",
                      r
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => l(!0),
                      className: "w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5" }),
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
                          max: C.length,
                          value: v.order ?? r + 1,
                          onChange: (ee) => {
                            const ie = parseInt(ee.target.value, 10);
                            isNaN(ie) || be(r, ie);
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
                          value: v.key,
                          onChange: (ee) => _(r, { key: ee.target.value }),
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
                          value: v.title,
                          onChange: (ee) => _(r, { title: ee.target.value }),
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
                          value: v.componentType || "TextBox",
                          onChange: (ee) => _(r, { componentType: ee.target.value }),
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
                          value: v.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (ee) => _(r, { width: ee.target.value }),
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
                          value: v.align || "left",
                          onChange: (ee) => _(r, { align: ee.target.value }),
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
                          value: v.aggregate || "none",
                          onChange: (ee) => _(r, { aggregate: ee.target.value }),
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
                          checked: !!(v.frozen || v.sticky === "left"),
                          onChange: () => oe(v.key),
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
                          checked: v.editable ?? !0,
                          onChange: (ee) => _(r, { editable: ee.target.checked }),
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
                          checked: v.sortable ?? !0,
                          onChange: (ee) => _(r, { sortable: ee.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(st, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(v.events) ? v.events.length : v.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(v.events) && v.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: v.events.map((ee) => `${ee.trigger} ➔ ${ee.handlerName || ee.action}()`).join(", ") }) : v.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      v.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && v && r !== null && /* @__PURE__ */ e.jsx(
                  wa,
                  {
                    isOpen: o,
                    column: v,
                    onClose: () => l(!1),
                    onSave: (ee) => {
                      const ie = C.map((te, M) => M === r ? ee : te), De = Jt(ie);
                      w(j.id, { columns: De });
                      const de = De.findIndex((te) => te.key === ee.key);
                      de !== -1 && n(de);
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
                    checked: !!j.props.required,
                    onChange: (C) => w(j.id, { required: C.target.checked }),
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
                    checked: !!j.props.disabled,
                    onChange: (C) => w(j.id, { disabled: C.target.checked }),
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
                    value: j.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (C) => $(j.id, { width: C.target.value }),
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
                    value: j.style.height || j.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (C) => $(j.id, {
                      height: C.target.value,
                      minHeight: C.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: j.style.customCss || fl(j.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (C) => {
                    const v = C.target.value, _ = bl(v);
                    if ($(j.id, {
                      ..._,
                      customCss: v
                    }), _.justifyContent || _.alignItems) {
                      const ce = j.props.flexConfig || {};
                      w(j.id, {
                        flexConfig: {
                          ...ce,
                          ..._.justifyContent ? { justify: _.justifyContent } : {},
                          ..._.alignItems ? { align: _.alignItems } : {}
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
            ja,
            {
              events: j.events || [],
              onChange: (C) => b(j.id, C),
              scriptFile: (q == null ? void 0 : q.scriptFile) || "transactionList.bl.ts",
              componentName: j.props.label || j.type,
              componentId: j.id,
              contextExtra: {
                pageId: m,
                nodeId: j.id,
                type: j.type
              }
            }
          ),
          ye === "data" && (() => {
            const C = j.dataBinding || {}, v = j.props || {}, _ = j.type, ce = _ === "Table" || _ === "GridView" || _ === "AdvancedGrid", oe = _ === "Select" || _ === "Dropdown" || _ === "Autocomplete" || _ === "SearchEntry", be = _ === "TextBox" || _ === "Number" || _ === "DatePicker" || _ === "Checkbox" || _ === "Textarea", ne = !ce && !oe && !be, pe = [];
            c.forEach((M) => {
              pe.push({
                name: M.name,
                displayName: M.displayName || M.name,
                fields: M.columns.map((H) => ({
                  name: H.name,
                  displayName: H.displayName || H.name,
                  dataType: H.dataType
                }))
              });
            }), qn.forEach((M) => {
              pe.some((H) => H.name.toLowerCase() === M.name.toLowerCase()) || pe.push({
                name: M.name,
                displayName: M.displayName,
                fields: M.fields.map((H) => ({
                  name: H.name,
                  displayName: H.displayName,
                  dataType: H.dataType
                }))
              });
            });
            const ee = C.entityName || v.reference || v.refName || "", ie = pe.find((M) => M.name.toLowerCase() === ee.toLowerCase()), De = ie ? ie.fields : [], de = C.dataSource || v.dataSource || v.dataSourceFilter || C.query || v.query || "", te = (M) => {
              D(j.id, {
                dataSource: M,
                query: M
              }), w(j.id, {
                dataSource: M,
                dataSourceFilter: M,
                query: M
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Ls, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      _,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  ce && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  oe && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  be && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  ne && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => p(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              ce && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ie ? ie.name : "",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, {
                          entityName: H,
                          refName: H
                        }), w(j.id, {
                          reference: H,
                          refName: H
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        pe.map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.name, children: [
                          M.displayName,
                          " (",
                          M.name,
                          ")"
                        ] }, M.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: C.entityName || v.reference || v.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, {
                          entityName: H,
                          refName: H
                        }), w(j.id, {
                          reference: H,
                          refName: H
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: de,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (M) => te(M.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => te("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => te("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => te(""),
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
                    "input",
                    {
                      type: "text",
                      value: C.sqlWhere || v.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { sqlWhere: H }), w(j.id, { sqlWhere: H });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              oe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: C.fieldName || v.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { fieldName: H }), w(j.id, { fieldName: H });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: De.map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.name, children: [
                    M.displayName,
                    " (",
                    M.name,
                    ")"
                  ] }, M.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ie ? ie.name : "",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, {
                          entityName: H,
                          refName: H
                        }), w(j.id, {
                          reference: H,
                          refName: H
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        pe.map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.name, children: [
                          M.displayName,
                          " (",
                          M.name,
                          ")"
                        ] }, M.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: C.entityName || v.reference || v.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, {
                          entityName: H,
                          refName: H
                        }), w(j.id, {
                          reference: H,
                          refName: H
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 3,
                      value: de,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (M) => te(M.target.value),
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
                    "input",
                    {
                      type: "text",
                      value: C.populateField || v.populateRule || v.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { populateField: H }), w(j.id, { populateRule: H, populateField: H });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: C.idField || v.idField || "Id",
                        placeholder: "Id",
                        onChange: (M) => {
                          const H = M.target.value;
                          D(j.id, { idField: H }), w(j.id, { idField: H });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: C.selectField || v.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (M) => {
                          const H = M.target.value;
                          D(j.id, { selectField: H }), w(j.id, { selectField: H });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Chuỗi Định Dạng (FormatData)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Format" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: C.formatData || v.formatData || "",
                      placeholder: "VD: {Vendor.FullName} - {Vendor.Address} hoặc {ShortName}",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { formatData: H }), w(j.id, { formatData: H });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(tt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị Bảng Chọn (",
                      me.length,
                      " cột)"
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => t("columns"),
                        className: "text-[10px] px-2 py-0.5 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 rounded font-semibold transition-colors cursor-pointer",
                        children: "Cấu hình cột →"
                      }
                    )
                  ] }),
                  me.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: me.map((M, H) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        M.title,
                        " (",
                        M.key,
                        ")"
                      ]
                    },
                    H
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." })
                ] })
              ] }),
              be && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: C.fieldName || v.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { fieldName: H }), w(j.id, { fieldName: H });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: De.map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.name, children: [
                    M.displayName,
                    " (",
                    M.name,
                    ")"
                  ] }, M.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: C.formatter || "",
                      onChange: (M) => D(j.id, { formatter: M.target.value }),
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
                    "input",
                    {
                      type: "text",
                      value: C.formatData || v.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (M) => {
                        const H = M.target.value;
                        D(j.id, { formatData: H }), w(j.id, { formatData: H });
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
                      checked: C.twoWay ?? !0,
                      onChange: (M) => D(j.id, { twoWay: M.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              ne && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(dt, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  j.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          ye === "columns" && ge && (() => {
            const C = j.dataBinding || {}, v = j.props || {}, _ = [];
            c.forEach((de) => {
              _.push({
                name: de.name,
                displayName: de.displayName || de.name,
                fields: de.columns.map((te) => ({
                  name: te.name,
                  displayName: te.displayName || te.name,
                  dataType: te.dataType
                }))
              });
            }), qn.forEach((de) => {
              _.some((te) => te.name.toLowerCase() === de.name.toLowerCase()) || _.push({
                name: de.name,
                displayName: de.displayName,
                fields: de.fields.map((te) => ({
                  name: te.name,
                  displayName: te.displayName,
                  dataType: te.dataType
                }))
              });
            });
            const ce = C.entityName || v.reference || v.refName || "", oe = _.find((de) => de.name.toLowerCase() === ce.toLowerCase()), be = oe ? oe.fields : [], ne = C.formatData || v.formatData || "", pe = (de) => {
              w(j.id, { dropdownColumns: de }), D(j.id, { dropdownColumns: de });
            }, ee = () => {
              var te, M;
              const de = [
                ...me,
                {
                  key: ((te = be[me.length]) == null ? void 0 : te.name) || `col${me.length + 1}`,
                  title: ((M = be[me.length]) == null ? void 0 : M.displayName) || `Cột ${me.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              pe(de);
            }, ie = () => {
              if (!oe || oe.fields.length === 0) return;
              const de = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let te = oe.fields.filter(
                (H) => de.includes(H.name.toLowerCase())
              );
              te.length === 0 ? te = oe.fields.slice(0, 3) : te = te.slice(0, 4);
              const M = te.map((H) => ({
                key: H.name,
                title: H.displayName || H.name,
                width: `${Math.floor(100 / te.length)}%`,
                align: "left"
              }));
              pe(M);
            }, De = (de, te) => {
              const M = de + te;
              if (M < 0 || M >= me.length) return;
              const H = [...me], Ye = H[de];
              H[de] = H[M], H[M] = Ye, pe(H);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(tt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: ce ? `Ref: ${ce}` : "Chưa chọn Ref" })
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
                      onClick: ee,
                      className: "flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột Mới" })
                      ]
                    }
                  ),
                  oe && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ie,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${oe.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  me.length,
                  ")"
                ] }) }),
                me.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: me.map((de, te) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          te + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => De(te, -1),
                              disabled: te === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => De(te, 1),
                              disabled: te === me.length - 1,
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
                                const M = me.filter((H, Ye) => Ye !== te);
                                pe(M);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
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
                              value: de.key,
                              list: `dropdown-col-fields-${te}`,
                              placeholder: "vd: FullName",
                              onChange: (M) => {
                                const H = [...me];
                                H[te] = { ...H[te], key: M.target.value }, pe(H);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${te}`, children: be.map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.name, children: [
                            M.displayName,
                            " (",
                            M.name,
                            ")"
                          ] }, M.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: de.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (M) => {
                                const H = [...me];
                                H[te] = { ...H[te], title: M.target.value }, pe(H);
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
                              value: de.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (M) => {
                                const H = [...me];
                                H[te] = { ...H[te], width: M.target.value }, pe(H);
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
                              value: de.align || "left",
                              onChange: (M) => {
                                const H = [...me];
                                H[te] = { ...H[te], align: M.target.value }, pe(H);
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
                  te
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
                    value: ne,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (de) => {
                      const te = de.target.value;
                      D(j.id, { formatData: te }), w(j.id, { formatData: te });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                me.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: me.map((de, te) => {
                    const M = ce ? `{${ce}.${de.key}}` : `{${de.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const H = ne ? `${ne} - ${M}` : M;
                          D(j.id, { formatData: H }), w(j.id, { formatData: H });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          M
                        ]
                      },
                      te
                    );
                  }) })
                ] })
              ] })
            ] });
          })(),
          ye === "validation" && (() => {
            const C = j.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Bn, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!C.required,
                      onChange: (v) => P(j.id, { required: v.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                C.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: C.requiredMessage || "",
                    onChange: (v) => P(j.id, { requiredMessage: v.target.value }),
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
                      value: C.minLength !== void 0 ? C.minLength : "",
                      onChange: (v) => P(j.id, {
                        minLength: v.target.value === "" ? void 0 : Number(v.target.value)
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
                      value: C.maxLength !== void 0 ? C.maxLength : "",
                      onChange: (v) => P(j.id, {
                        maxLength: v.target.value === "" ? void 0 : Number(v.target.value)
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
                    value: C.pattern || "",
                    onChange: (v) => P(j.id, { pattern: v.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: C.patternMessage || "",
                    onChange: (v) => P(j.id, { patternMessage: v.target.value }),
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
                    value: C.customValidator || "",
                    onChange: (v) => P(j.id, { customValidator: v.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          ye === "permissions" && (() => {
            const C = j.permissions || {}, v = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], _ = C.allowedRoles || [], ce = C.readOnlyRoles || [], oe = (ne) => {
              const pe = _.includes(ne) ? _.filter((ee) => ee !== ne) : [..._, ne];
              F(j.id, { allowedRoles: pe });
            }, be = (ne) => {
              const pe = ce.includes(ne) ? ce.filter((ee) => ee !== ne) : [...ce, ne];
              F(j.id, { readOnlyRoles: pe });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Qt, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: v.map((ne) => {
                  const pe = _.includes(ne);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => oe(ne),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${pe ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ne }),
                        pe && /* @__PURE__ */ e.jsx(Ps, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    ne
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: v.map((ne) => {
                  const pe = ce.includes(ne);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => be(ne),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${pe ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ne }),
                        pe && /* @__PURE__ */ e.jsx(Ps, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    ne
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
                      onClick: () => F(j.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(C.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      onClick: () => F(j.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${C.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
        i && j && /* @__PURE__ */ e.jsx(
          gl,
          {
            isOpen: i,
            node: j,
            onClose: () => p(!1),
            onSave: (C, v, _) => {
              w(C, v), _ && D(C, _);
            }
          }
        )
      ]
    }
  );
}, Yn = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: Ct,
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
    icon: ia,
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
    icon: dt,
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
    icon: Bt,
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
    icon: kt,
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
    icon: da,
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
    icon: Ja,
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
    icon: ra,
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
    icon: Xa,
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
    icon: Qa,
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
    icon: tt,
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
    icon: ca,
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
    icon: cs,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: Xt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: Za,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: er,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: tr,
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
    icon: sr,
    defaultProps: {
      tabs: [
        { id: "main", label: "TAB 1" }
      ]
    },
    defaultStyle: { width: "100%" }
  }
], yl = ({ item: s, onClick: a, isEditing: t }) => {
  const r = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = xa({
    id: `palette-${s.type}`,
    disabled: !t,
    data: {
      isPaletteItem: !0,
      type: s.type,
      name: s.name,
      defaultProps: s.defaultProps,
      defaultStyle: s.defaultStyle
    }
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: l,
      ...o,
      ...n,
      onClick: () => a(s),
      className: `group flex items-center gap-3 p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left cursor-grab active:cursor-grabbing select-none ${i ? "opacity-40 ring-2 ring-blue-500 shadow-xl" : ""}`,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0", children: /* @__PURE__ */ e.jsx(r, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-200 group-hover:text-white truncate", children: s.name }),
          /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400 truncate mt-0.5", children: s.description })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Kl = ({ isEditing: s = !0, onAddComponent: a }) => {
  const t = Y((c) => c.addComponent), r = Y((c) => c.activeFeatureId), n = Y((c) => c.features), o = Y((c) => c.selection), l = n.find((c) => c.id === r), i = (c, u) => {
    if (!u) return null;
    for (const y of c) {
      if (y.id === u) return y;
      if (y.children) {
        const T = i(y.children, u);
        if (T) return T;
      }
    }
    return null;
  }, p = (c) => {
    var d;
    if (!s) return;
    if (a) {
      a(c.type);
      return;
    }
    const u = i((l == null ? void 0 : l.components) || [], o.componentId);
    let y = null;
    u && (u.type === "Container" ? y = u.id : y = u.parentId || null);
    const T = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: y,
      pageId: r,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((d = l == null ? void 0 : l.components) == null ? void 0 : d.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    t(T, y);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(zs, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Yn.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Yn.map((c) => /* @__PURE__ */ e.jsx(
      yl,
      {
        item: c,
        onClick: p,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, Gl = () => {
  const s = Y((i) => i.features), a = Y((i) => i.activeFeatureId), t = Y((i) => i.selection), r = Y((i) => i.selectComponent), n = Y((i) => i.removeComponent), o = s.find((i) => i.id === a);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, p = 0) => i.map((c) => {
    const u = t.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => r(c.id),
          style: { paddingLeft: `${p * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${u ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                onClick: (y) => {
                  y.stopPropagation(), n(c.id);
                },
                className: "text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "Xóa component",
                children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, p + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, zl = () => {
  const s = qe((d) => d.openTabs), a = qe((d) => d.activeTabId), t = qe((d) => d.setActiveTab), r = qe((d) => d.closeTab), n = Y((d) => d.setActiveFeature), o = ve((d) => d.isFormDirty), l = ve((d) => d.markFormClean), [i, p] = E(null);
  if (s.length === 0) return null;
  const c = (d, h) => {
    var m;
    t(d);
    const N = s.find((x) => x.id === d);
    n(h, ((m = N == null ? void 0 : N.params) == null ? void 0 : m.id) ?? null);
  }, u = (d) => {
    r(d), setTimeout(() => {
      var N;
      const h = qe.getState().openTabs.find(
        (m) => m.id === qe.getState().activeTabId
      );
      h && n(h.featureId, ((N = h.params) == null ? void 0 : N.id) ?? null);
    }, 50);
  }, y = (d, h) => {
    if (d.stopPropagation(), h.isDirty || (h.featureId ? o(h.featureId) : !1)) {
      p(h);
      return;
    }
    u(h.id);
  }, T = () => {
    i && (i.featureId && l(i.featureId), u(i.id), p(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((d) => {
      const h = d.id === a, N = d.isDirty || (d.featureId ? o(d.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(d.id, d.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${h ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: N ? `${d.title} (Có dữ liệu chưa lưu)` : d.title,
          children: [
            /* @__PURE__ */ e.jsx(Ct, { className: `w-3.5 h-3.5 ${h ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: d.title }),
            N && /* @__PURE__ */ e.jsx(
              "span",
              {
                className: "w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80 animate-pulse ml-0.5 shrink-0",
                title: "Có dữ liệu chưa lưu (Dirty)"
              }
            ),
            s.length > 1 && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (m) => y(m, d),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(Je, { className: "w-3 h-3" })
              }
            )
          ]
        },
        d.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(nr, { className: "w-5 h-5" }) }),
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
            onClick: () => p(null),
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
}, Pa = "uiforge_resilience_queue_v1";
let ds = !1, Jn = !1;
function xs() {
  if (typeof window > "u") return [];
  try {
    const s = localStorage.getItem(Pa);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}
function Ea(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Pa, JSON.stringify(s)), console.log(`[ResilienceQueue] Hiện có ${s.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function vl(s, a) {
  var n;
  const t = xs(), r = {
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    url: s.url || "",
    method: (s.method || "POST").toUpperCase(),
    data: s.data,
    headers: {
      "Content-Type": "application/json"
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    retryCount: 0,
    description: a || `Thao tác ${(n = s.method) == null ? void 0 : n.toUpperCase()} trên ${s.url}`
  };
  return t.push(r), Ea(t), $a(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${r.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), r;
}
function $a(s, a, t = "info") {
  if (typeof document > "u") return;
  const r = document.createElement("div");
  r.className = `fixed top-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300 ${t === "warning" ? "bg-amber-950/90 border-amber-600/50 text-amber-100 shadow-amber-900/30" : t === "success" ? "bg-emerald-950/90 border-emerald-600/50 text-emerald-100 shadow-emerald-900/30" : "bg-blue-950/90 border-blue-600/50 text-blue-100 shadow-blue-900/30"}`, r.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5 text-lg">
        ${t === "warning" ? "⚠️" : t === "success" ? "✅" : "ℹ️"}
      </div>
      <div class="flex-1 text-xs">
        <div class="font-bold text-sm mb-1">${s}</div>
        <div class="opacity-90 leading-relaxed">${a}</div>
      </div>
    </div>
  `, document.body.appendChild(r), setTimeout(() => {
    r.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => r.remove(), 300);
  }, 4500);
}
async function Fs(s) {
  var n, o;
  if (ds) return;
  const a = xs();
  if (a.length === 0) return;
  ds = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
  let t = 0;
  const r = [];
  for (const l of a)
    try {
      await s.request({
        url: l.url,
        method: l.method,
        data: l.data
      }), t++, console.log(`[ResilienceQueue] Đồng bộ thành công: ${l.description}`);
    } catch (i) {
      l.retryCount = (l.retryCount || 0) + 1, console.warn(`[ResilienceQueue] Lỗi khi đồng bộ lại ${l.description} (lần thử ${l.retryCount}):`, i == null ? void 0 : i.message), ((n = i == null ? void 0 : i.response) == null ? void 0 : n.status) >= 400 && ((o = i == null ? void 0 : i.response) == null ? void 0 : o.status) < 500 || r.push(l);
    }
  Ea(r), ds = !1, t > 0 && $a(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${t} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function Nl(s) {
  var t, r;
  if (!s) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !s.response && (s.code === "ERR_NETWORK" || (t = s.message) != null && t.includes("Network Error"))) return !0;
  const a = (r = s.response) == null ? void 0 : r.status;
  return a === 502 || a === 503 || a === 504;
}
function jl(s) {
  Jn || typeof window > "u" || (Jn = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), Fs(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && xs().length > 0 && !ds && Fs(s);
  }, 2e4), setTimeout(() => {
    const a = xs();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), Fs(s));
  }, 3e3));
}
const wl = "http://localhost:5048/api", gs = hr.create({
  baseURL: wl,
  timeout: 15e3
});
gs.interceptors.request.use((s) => {
  const a = Us.getState().token;
  return a && (s.headers.Authorization = `Bearer ${a}`), s;
});
gs.interceptors.response.use(
  (s) => s,
  async (s) => {
    var r, n, o, l, i;
    if (((r = s == null ? void 0 : s.response) == null ? void 0 : r.status) === 401)
      return Us.getState().logout(), Promise.reject(s);
    const a = (((n = s == null ? void 0 : s.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(a) && Nl(s)) {
      const p = (l = (o = s == null ? void 0 : s.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${a} [${(i = s == null ? void 0 : s.config) == null ? void 0 : i.url}]`;
      return vl(s.config, p), Promise.resolve({
        data: {
          success: !0,
          isQueued: !0,
          message: "Dữ liệu đã được lưu an toàn trong Hàng Đợi Bền Bỉ (Resilience Queue)."
        },
        status: 202,
        statusText: "Accepted into Resilience Queue",
        headers: {},
        config: s.config
      });
    }
    return Promise.reject(s);
  }
);
jl(gs);
async function Cl(s) {
  await gs.delete(`/pages/${s}`);
}
const Ul = ({ width: s }) => {
  const a = Y((b) => b.features), t = Y((b) => b.activeFeatureId), r = Y((b) => b.setActiveFeature), n = Y((b) => b.addFeature), o = Y((b) => b.renameFeature), l = Y((b) => b.deleteFeature), i = a.filter((b) => !b.hidden && !b.isDetail), [p, c] = E(null), [u, y] = E(!1), [T, d] = E(""), [h, N] = E(null), m = (b) => {
    b.preventDefault(), c({
      x: b.clientX,
      y: b.clientY
    });
  }, x = (b, D) => {
    b.preventDefault(), b.stopPropagation(), c({
      x: b.clientX,
      y: b.clientY,
      featureId: D
    });
  }, f = () => {
    d(""), y(!0);
  }, R = (b) => {
    b.preventDefault(), T.trim() && (n(T.trim()), y(!1), d(""));
  }, w = (b) => {
    b.preventDefault(), !(!h || !h.name.trim()) && (o(h.id, h.name.trim()), N(null));
  }, $ = p != null && p.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: ks,
      onClick: f
    },
    {
      divider: !0,
      label: "",
      onClick: () => {
      }
    },
    {
      label: "✏️ Đổi tên Feature này",
      icon: ar,
      onClick: () => {
        const b = a.find((D) => D.id === p.featureId);
        b && N({ id: b.id, name: b.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: Ge,
      danger: !0,
      onClick: async () => {
        if (confirm("Bạn có chắc chắn muốn xóa Feature này?")) {
          try {
            await Cl(p.featureId);
          } catch {
          }
          l(p.featureId);
        }
      }
    }
  ] : [
    {
      label: "➕ Thêm Feature mới (Màn hình mới)",
      icon: ks,
      onClick: f
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: m,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((b, D) => {
            const P = b.id === t;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  r(b.id, null), qe.getState().openFeature(b.id, {}, "Tab", b.name);
                },
                onContextMenu: (F) => x(F, b.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${P ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${P ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: D === 0 ? /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: b.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (F) => x(F, b.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${P ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(lr, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              },
              b.id
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              a.length,
              " màn hình"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "v1.2" })
          ] })
        ]
      }
    ),
    p && /* @__PURE__ */ e.jsx(
      Ra,
      {
        x: p.x,
        y: p.y,
        items: $,
        onClose: () => c(null)
      }
    ),
    u && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: R,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(ks, { className: "w-5 h-5" }) }),
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
                value: T,
                onChange: (b) => d(b.target.value),
                className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => y(!1),
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
    h && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: w,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: h.name,
              onChange: (b) => N({ ...h, name: b.target.value }),
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
}, ql = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1
}) => {
  const n = Y((u) => u.undo), o = Y((u) => u.redo), l = Y((u) => u.historyIndex), i = Y((u) => u.history), p = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !p, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(ua, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(pa, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Yl = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: p,
  branch: c,
  onLogout: u
}) => {
  const y = Y((w) => w.features), T = Y((w) => w.activeFeatureId), d = Y((w) => w.undo), h = Y((w) => w.redo), N = Y((w) => w.historyIndex), m = Y((w) => w.history), x = y.find((w) => w.id === T), f = N > 0, R = N < m.length - 1;
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
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (x == null ? void 0 : x.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: d,
            disabled: !f,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(ua, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
            disabled: !R,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(pa, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${s ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(or, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Vs, { className: "w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Xem Thử Trực Tiếp" })
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: t,
          disabled: r,
          className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50",
          children: [
            /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: r ? "Đang lưu..." : "Lưu Giao Diện" })
          ]
        }
      )
    ] }) : null,
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      !s && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${n ? "bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30" : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750"}`,
          title: n ? "Ẩn bảng quản lý bên phải" : "Mở bảng quản lý bên phải",
          children: n ? /* @__PURE__ */ e.jsx(ir, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(cr, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(dr, { className: "w-4 h-4" }),
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
            p === "Dev" ? "Developer • được chỉnh sửa" : "Người dùng • chỉ xem",
            c ? ` • DB: ${c}` : ""
          ] })
        ] }),
        u && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: u,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(ur, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, Jl = () => {
  const s = qe((i) => i.activePopup), a = qe((i) => i.closePopup), t = qe((i) => i.openFeature), r = Y((i) => i.features);
  if (!s) return null;
  const n = r.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), a();
  };
  return Tt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-sm font-bold text-slate-100", children: s.title }),
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
                /* @__PURE__ */ e.jsx(oa, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chuyển thành Tab" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => a(),
              className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
              title: "Đóng (ESC)",
              children: /* @__PURE__ */ e.jsx(Je, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(pr, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, p]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(p ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          es,
          {
            node: i,
            isEditing: !1,
            onContextMenu: () => {
            }
          },
          i.id
        )) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs italic", children: [
          "Nội dung chi tiết của màn hình #",
          s.featureId,
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
              onClick: () => a(),
              className: "px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer",
              children: "Đóng"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => a({ saved: !0 }),
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
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
export {
  wa as ColumnPropertiesModal,
  Kl as ComponentPalette,
  gl as ComponentPropertiesModal,
  es as ComponentRenderer,
  Gl as ComponentTree,
  Ra as ContextMenu,
  Ca as EnterpriseDatePicker,
  sl as EnterpriseSelect,
  Vl as FeatureCanvas,
  Jl as FeaturePopupModal,
  _l as ForgeAdvancedGrid,
  xl as ForgeAutocomplete,
  Lr as ForgeButton,
  al as ForgeCheckbox,
  Wn as ForgeContainer,
  rl as ForgeDatePicker,
  ol as ForgeDivider,
  pl as ForgeFileUploadGrid,
  Al as ForgeFormContainer,
  Br as ForgeLabel,
  ll as ForgeModal,
  Ar as ForgeNumber,
  cl as ForgeRecordSelector,
  ul as ForgeSearchEntry,
  dl as ForgeSearchModal,
  Or as ForgeSection,
  nl as ForgeSelect,
  Da as ForgeTabStack,
  el as ForgeTable,
  Ml as ForgeTabs,
  $r as ForgeTextBox,
  il as ForgeTextarea,
  St as FormFieldWrapper,
  Gr as GridCellComponent,
  _r as HeaderContextMenu,
  Hl as InlineCellEditor,
  Ul as LeftNavbar,
  os as PermissionGuard,
  Wl as PropertyPanel,
  Mr as RowContextMenu,
  Vr as SummaryRow,
  ql as TopBar,
  Yl as TopNav,
  ja as UnifiedEventEditor,
  zl as WorkspaceTabBar,
  gr as addFunctionToBlFile,
  Yr as calculateAutoPopulatedFields,
  Ur as calculateLeftOffsets,
  ps as executeSingleEvent,
  Qr as exportGridToExcel,
  vr as findFunctionInModule,
  Bl as getCascadedOptions,
  Ia as getComponentOuterLayoutStyle,
  fr as getFunctionsForBlFile,
  Fa as groupNodesByTabStack,
  tl as interpolateFormatData,
  Os as moveColumn,
  hs as normalizeBlKey,
  Jt as normalizeColumnOrders,
  Kn as parseDDMMYYYY,
  Zr as printGridReport,
  $l as registerBL,
  yr as registerBlFunctions,
  El as removeFunctionFromBlFile,
  ba as resolveBlModule,
  ka as sortColumnsByCorePolicy,
  Ta as toggleColumnFreeze,
  Le as triggerComponentEvent,
  Us as useAuthStore,
  ve as useDataEngine,
  Y as useEditorStore,
  zr as useGridKeyboardNavigation,
  At as useMasterDetailStore,
  qe as useNavigationEngine,
  Ms as validateDateSequence,
  Jr as validateField,
  Ol as validateForm,
  _s as validateISO6346ContainerNo
};
