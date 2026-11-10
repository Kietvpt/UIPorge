var Ra = Object.defineProperty;
var Pa = (s, a, t) => a in s ? Ra(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var gs = (s, a, t) => Pa(s, typeof a != "symbol" ? a + "" : a, t);
import qt, { useState as L, useRef as qe, useEffect as Ae, useCallback as es, useMemo as We, useId as Kn } from "react";
import { create as Yt } from "zustand";
import { Layers as Nt, ChevronDown as cs, ChevronUp as Gn, Printer as Un, Zap as nt, Save as $t, Eye as Os, EyeOff as La, Pin as zn, ChevronRight as qn, Sliders as vt, Copy as Yn, Trash2 as Ge, Filter as Jn, Settings as Ea, PlusCircle as Xn, ArrowUp as Qn, ArrowDown as Zn, Plus as at, FileCode as Ss, Play as $a, Shield as Ts, X as rt, ExternalLink as ea, Calendar as _s, Search as Jt, RefreshCw as Aa, FileDown as Ba, ArrowUpDown as Ms, ChevronLeft as Oa, Tag as ta, Database as Ds, Check as sa, Paperclip as na, Upload as In, Download as ys, Image as _a, FileText as Kt, File as Ma, GripVertical as Hs, Lock as Gt, Sparkles as aa, CheckCircle2 as Fs, Box as st, ArrowRightLeft as Rn, Columns as Lt, Type as Pt, Square as as, Table as ls, Paintbrush as Ha, ShieldCheck as Pn, Code as vs, Hash as Va, ChevronDownSquare as Wa, CheckSquare as Ka, Minus as Ga, Maximize2 as Ua, AlignLeft as za, FolderKanban as qa, AlertTriangle as Ya, FolderPlus as Ns, Edit2 as Ja, LayoutDashboard as Xa, MoreVertical as Qa, Undo2 as ra, Redo2 as la, Edit3 as Za, PanelRightClose as er, PanelRightOpen as tr, Bell as sr, LogOut as nr, CheckCircle as ar } from "lucide-react";
import { createPortal as Xt } from "react-dom";
import { useDraggable as oa, useDroppable as ia } from "@dnd-kit/core";
import { CSS as rr } from "@dnd-kit/utilities";
import lr from "axios";
var Is = { exports: {} }, _t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function or() {
  if (Ln) return _t;
  Ln = 1;
  var s = qt, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, p, c) {
    var d, y = {}, u = null, f = null;
    c !== void 0 && (u = "" + c), p.key !== void 0 && (u = "" + p.key), p.ref !== void 0 && (f = p.ref);
    for (d in p) r.call(p, d) && !o.hasOwnProperty(d) && (y[d] = p[d]);
    if (i && i.defaultProps) for (d in p = i.defaultProps, p) y[d] === void 0 && (y[d] = p[d]);
    return { $$typeof: a, type: i, key: u, ref: f, props: y, _owner: n.current };
  }
  return _t.Fragment = t, _t.jsx = l, _t.jsxs = l, _t;
}
var Mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function ir() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var s = qt, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), h = Symbol.iterator, S = "@@iterator";
    function g(v) {
      if (v === null || typeof v != "object")
        return null;
      var H = h && v[h] || v[S];
      return typeof H == "function" ? H : null;
    }
    var x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(v) {
      {
        for (var H = arguments.length, q = new Array(H > 1 ? H - 1 : 0), ae = 1; ae < H; ae++)
          q[ae - 1] = arguments[ae];
        I("error", v, q);
      }
    }
    function I(v, H, q) {
      {
        var ae = x.ReactDebugCurrentFrame, he = ae.getStackAddendum();
        he !== "" && (H += "%s", q = q.concat([he]));
        var fe = q.map(function(pe) {
          return String(pe);
        });
        fe.unshift("Warning: " + H), Function.prototype.apply.call(console[v], console, fe);
      }
    }
    var j = !1, A = !1, b = !1, T = !1, P = !1, D;
    D = Symbol.for("react.module.reference");
    function O(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === o || P || v === n || v === c || v === d || T || v === f || j || A || b || typeof v == "object" && v !== null && (v.$$typeof === u || v.$$typeof === y || v.$$typeof === l || v.$$typeof === i || v.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === D || v.getModuleId !== void 0));
    }
    function B(v, H, q) {
      var ae = v.displayName;
      if (ae)
        return ae;
      var he = H.displayName || H.name || "";
      return he !== "" ? q + "(" + he + ")" : q;
    }
    function J(v) {
      return v.displayName || "Context";
    }
    function R(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case i:
            var H = v;
            return J(H) + ".Consumer";
          case l:
            var q = v;
            return J(q._context) + ".Provider";
          case p:
            return B(v, v.render, "ForwardRef");
          case y:
            var ae = v.displayName || null;
            return ae !== null ? ae : R(v.type) || "Memo";
          case u: {
            var he = v, fe = he._payload, pe = he._init;
            try {
              return R(pe(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, z = 0, ne, W, be, k, ue, ye, ee;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Ee() {
      {
        if (z === 0) {
          ne = console.log, W = console.info, be = console.warn, k = console.error, ue = console.group, ye = console.groupCollapsed, ee = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        z++;
      }
    }
    function de() {
      {
        if (z--, z === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, v, {
              value: ne
            }),
            info: V({}, v, {
              value: W
            }),
            warn: V({}, v, {
              value: be
            }),
            error: V({}, v, {
              value: k
            }),
            group: V({}, v, {
              value: ue
            }),
            groupCollapsed: V({}, v, {
              value: ye
            }),
            groupEnd: V({}, v, {
              value: ee
            })
          });
        }
        z < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, se;
    function Ie(v, H, q) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (he) {
            var ae = he.stack.trim().match(/\n( *(at )?)/);
            se = ae && ae[1] || "";
          }
        return `
` + se + v;
      }
    }
    var oe = !1, Pe;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Oe();
    }
    function w(v, H) {
      if (!v || oe)
        return "";
      {
        var q = Pe.get(v);
        if (q !== void 0)
          return q;
      }
      var ae;
      oe = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = M.current, M.current = null, Ee();
      try {
        if (H) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (G) {
              ae = G;
            }
            Reflect.construct(v, [], pe);
          } else {
            try {
              pe.call();
            } catch (G) {
              ae = G;
            }
            v.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            ae = G;
          }
          v();
        }
      } catch (G) {
        if (G && ae && typeof G.stack == "string") {
          for (var ce = G.stack.split(`
`), Re = ae.stack.split(`
`), we = ce.length - 1, m = Re.length - 1; we >= 1 && m >= 0 && ce[we] !== Re[m]; )
            m--;
          for (; we >= 1 && m >= 0; we--, m--)
            if (ce[we] !== Re[m]) {
              if (we !== 1 || m !== 1)
                do
                  if (we--, m--, m < 0 || ce[we] !== Re[m]) {
                    var $ = `
` + ce[we].replace(" at new ", " at ");
                    return v.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", v.displayName)), typeof v == "function" && Pe.set(v, $), $;
                  }
                while (we >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        oe = !1, M.current = fe, de(), Error.prepareStackTrace = he;
      }
      var F = v ? v.displayName || v.name : "", _ = F ? Ie(F) : "";
      return typeof v == "function" && Pe.set(v, _), _;
    }
    function E(v, H, q) {
      return w(v, !1);
    }
    function Q(v) {
      var H = v.prototype;
      return !!(H && H.isReactComponent);
    }
    function me(v, H, q) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return w(v, Q(v));
      if (typeof v == "string")
        return Ie(v);
      switch (v) {
        case c:
          return Ie("Suspense");
        case d:
          return Ie("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case p:
            return E(v.render);
          case y:
            return me(v.type, H, q);
          case u: {
            var ae = v, he = ae._payload, fe = ae._init;
            try {
              return me(fe(he), H, q);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, je = {}, ie = x.ReactDebugCurrentFrame;
    function le(v) {
      if (v) {
        var H = v._owner, q = me(v.type, v._source, H ? H.type : null);
        ie.setExtraStackFrame(q);
      } else
        ie.setExtraStackFrame(null);
    }
    function Z(v, H, q, ae, he) {
      {
        var fe = Function.call.bind(ve);
        for (var pe in v)
          if (fe(v, pe)) {
            var ce = void 0;
            try {
              if (typeof v[pe] != "function") {
                var Re = Error((ae || "React class") + ": " + q + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              ce = v[pe](H, pe, ae, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              ce = we;
            }
            ce && !(ce instanceof Error) && (le(he), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", q, pe, typeof ce), le(null)), ce instanceof Error && !(ce.message in je) && (je[ce.message] = !0, le(he), N("Failed %s type: %s", q, ce.message), le(null));
          }
      }
    }
    var te = Array.isArray;
    function Ne(v) {
      return te(v);
    }
    function Te(v) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, q = H && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return q;
      }
    }
    function De(v) {
      try {
        return U(v), !1;
      } catch {
        return !0;
      }
    }
    function U(v) {
      return "" + v;
    }
    function Y(v) {
      if (De(v))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(v)), U(v);
    }
    var Me = x.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ot;
    function Ct(v) {
      if (ve.call(v, "ref")) {
        var H = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function kt(v) {
      if (ve.call(v, "key")) {
        var H = Object.getOwnPropertyDescriptor(v, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function it(v, H) {
      typeof v.ref == "string" && Me.current;
    }
    function Je(v, H) {
      {
        var q = function() {
          lt || (lt = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function ct(v, H) {
      {
        var q = function() {
          ot || (ot = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var dt = function(v, H, q, ae, he, fe, pe) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: v,
        key: H,
        ref: q,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function St(v, H, q, ae, he) {
      {
        var fe, pe = {}, ce = null, Re = null;
        q !== void 0 && (Y(q), ce = "" + q), kt(H) && (Y(H.key), ce = "" + H.key), Ct(H) && (Re = H.ref, it(H, he));
        for (fe in H)
          ve.call(H, fe) && !wt.hasOwnProperty(fe) && (pe[fe] = H[fe]);
        if (v && v.defaultProps) {
          var we = v.defaultProps;
          for (fe in we)
            pe[fe] === void 0 && (pe[fe] = we[fe]);
        }
        if (ce || Re) {
          var m = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          ce && Je(pe, m), Re && ct(pe, m);
        }
        return dt(v, ce, Re, he, ae, Me.current, pe);
      }
    }
    var Xe = x.ReactCurrentOwner, ut = x.ReactDebugCurrentFrame;
    function He(v) {
      if (v) {
        var H = v._owner, q = me(v.type, v._source, H ? H.type : null);
        ut.setExtraStackFrame(q);
      } else
        ut.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function Ze(v) {
      return typeof v == "object" && v !== null && v.$$typeof === a;
    }
    function pt() {
      {
        if (Xe.current) {
          var v = R(Xe.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function xt(v) {
      return "";
    }
    var mt = {};
    function ht(v) {
      {
        var H = pt();
        if (!H) {
          var q = typeof v == "string" ? v : v.displayName || v.name;
          q && (H = `

Check the top-level render call using <` + q + ">.");
        }
        return H;
      }
    }
    function bt(v, H) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var q = ht(H);
        if (mt[q])
          return;
        mt[q] = !0;
        var ae = "";
        v && v._owner && v._owner !== Xe.current && (ae = " It was passed a child from " + R(v._owner.type) + "."), He(v), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ae), He(null);
      }
    }
    function ft(v, H) {
      {
        if (typeof v != "object")
          return;
        if (Ne(v))
          for (var q = 0; q < v.length; q++) {
            var ae = v[q];
            Ze(ae) && bt(ae, H);
          }
        else if (Ze(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var he = g(v);
          if (typeof he == "function" && he !== v.entries)
            for (var fe = he.call(v), pe; !(pe = fe.next()).done; )
              Ze(pe.value) && bt(pe.value, H);
        }
      }
    }
    function Tt(v) {
      {
        var H = v.type;
        if (H == null || typeof H == "string")
          return;
        var q;
        if (typeof H == "function")
          q = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === y))
          q = H.propTypes;
        else
          return;
        if (q) {
          var ae = R(H);
          Z(q, v.props, "prop", ae, v);
        } else if (H.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var he = R(H);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dt(v) {
      {
        for (var H = Object.keys(v.props), q = 0; q < H.length; q++) {
          var ae = H[q];
          if (ae !== "children" && ae !== "key") {
            He(v), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), He(null);
            break;
          }
        }
        v.ref !== null && (He(v), N("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    var gt = {};
    function yt(v, H, q, ae, he, fe) {
      {
        var pe = O(v);
        if (!pe) {
          var ce = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = xt();
          Re ? ce += Re : ce += pt();
          var we;
          v === null ? we = "null" : Ne(v) ? we = "array" : v !== void 0 && v.$$typeof === a ? (we = "<" + (R(v.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : we = typeof v, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ce);
        }
        var m = St(v, H, q, he, fe);
        if (m == null)
          return m;
        if (pe) {
          var $ = H.children;
          if ($ !== void 0)
            if (ae)
              if (Ne($)) {
                for (var F = 0; F < $.length; F++)
                  ft($[F], v);
                Object.freeze && Object.freeze($);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft($, v);
        }
        if (ve.call(H, "key")) {
          var _ = R(v), G = Object.keys(H).filter(function(Se) {
            return Se !== "key";
          }), X = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gt[_ + X]) {
            var ge = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, _, ge, _), gt[_ + X] = !0;
          }
        }
        return v === r ? Dt(m) : Tt(m), m;
      }
    }
    function Ft(v, H, q) {
      return yt(v, H, q, !0);
    }
    function At(v, H, q) {
      return yt(v, H, q, !1);
    }
    var Bt = At, Ot = Ft;
    Mt.Fragment = r, Mt.jsx = Bt, Mt.jsxs = Ot;
  }()), Mt;
}
process.env.NODE_ENV === "production" ? Is.exports = or() : Is.exports = ir();
var e = Is.exports;
const jt = ({
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
  const d = t === "left", y = l ? `col-span-${l}` : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${y} ${d ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
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
            className: `text-xs font-medium text-slate-300 select-none ${d ? "shrink-0 text-right truncate" : ""}`,
            style: d ? { width: r } : void 0,
            title: s,
            children: [
              s,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              d && ":"
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
}, ca = "uiforge_bl_functions_registry", Et = {};
function ds(s) {
  if (!s || !s.trim()) return "";
  let a = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function us() {
  if (typeof window > "u") return Et;
  try {
    const s = localStorage.getItem(ca);
    if (s) {
      const a = JSON.parse(s), t = { ...Et, ...a };
      for (const [r, n] of Object.entries(Et))
        t[r] = Array.from(/* @__PURE__ */ new Set([...n, ...t[r] || []]));
      return t;
    }
  } catch {
  }
  return Et;
}
function ps(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(ca, JSON.stringify(s));
    } catch {
    }
}
function cr(s) {
  if (!s || !s.trim()) return [];
  const a = ds(s), t = us();
  if (t[a] && t[a].length > 0)
    return t[a];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[a] = r, ps(t), r;
}
function dr(s, a) {
  if (!s || !a) return [];
  const t = ds(s), r = a.trim().replace(/\(.*?\)/g, "");
  if (!t || !r) return [];
  const n = us(), o = n[t] || [];
  return o.includes(r) || (n[t] = [...o, r], ps(n)), n[t];
}
function wl(s, a) {
  if (!s || !a) return [];
  const t = ds(s), r = a.trim().replace(/\(.*?\)/g, ""), n = us(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== r), ps(n), n[t];
}
function ur(s, a) {
  const t = ds(s);
  Et[t] = Array.from(/* @__PURE__ */ new Set([...Et[t] || [], ...a]));
  const r = us();
  r[t] = Array.from(/* @__PURE__ */ new Set([...r[t] || [], ...a])), ps(r);
}
const tt = {};
function Cl(s, a) {
  tt[s] = a;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  tt[t] = a;
  const r = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  tt[r] = a;
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
  n.length > 0 && ur(t, n);
}
function da(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const a = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = a.toLowerCase();
  if (tt[a]) return { module: tt[a], canonicalName: a };
  if (tt[t]) return { module: tt[t], canonicalName: a };
  const r = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(tt))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === r)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: a };
}
function pr(s, a) {
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
function Ht(s, a, t, r = !1, n, o = !0) {
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
function os(s, a, t, r) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = da(t);
  let p = !1, c = n.replace(/\(.*?\)/g, "").trim();
  if (l) {
    const { fn: d, matchedName: y } = pr(l, n);
    if (c = y, d)
      try {
        const u = d(r || { componentName: a, trigger: o, blFileName: i });
        if (p = !0, u && typeof u.then == "function")
          return u.then((f) => {
            f && f.message ? Ht(c, o, i || t, !0, f.message, f.success !== !1) : Ht(c, o, i || t, !0);
          }).catch((f) => {
            Ht(c, o, i || t, !0, String(f), !1);
          }), !0;
        if (u && u.message)
          return Ht(c, o, i || t, !0, u.message, u.success !== !1), !0;
      } catch (u) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${y}() trong ${i}:`, u);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${a || "Component"} -> Event: ${o} -> ${p ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || t || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Ht(c, o, i || t, p), p;
}
function ke(s, a, t, r, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    os(l, t, r, n);
}
const $n = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, An = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", Ut = /* @__PURE__ */ new Map(), ts = (s) => {
  const a = Ut.get(s);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([t, r]) => [t, r.getState()])
  ) : {};
}, xr = (s, a, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: a.connect(t)
    };
  const r = Ut.get(t.name);
  if (r)
    return { type: "tracked", store: s, ...r };
  const n = {
    connection: a.connect(t),
    stores: {}
  };
  return Ut.set(t.name, n), { type: "tracked", store: s, ...n };
}, mr = (s, a) => {
  if (a === void 0) return;
  const t = Ut.get(s);
  t && (delete t.stores[a], Object.keys(t.stores).length === 0 && Ut.delete(s));
}, hr = /^at (?:new |async )?(.+?) \(/, br = /^([^@]+)@/;
function fr(s) {
  var a, t, r;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((t = hr.exec(l)) == null ? void 0 : t[1]) || ((r = br.exec(l)) == null ? void 0 : r[1]);
}
const gr = (s, a = {}) => (t, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...p } = a;
  let c;
  try {
    c = (o ?? ($n ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return s(t, r, n);
  const { connection: d, ...y } = xr(i, c, p);
  let u = !0;
  n.setState = (S, g, x) => {
    const N = t(S, g);
    if (!u) return N;
    const I = x === void 0 ? {
      type: l || fr(new Error().stack) || "anonymous"
    } : typeof x == "string" ? { type: x } : x;
    return i === void 0 ? (d == null || d.send(I, r()), N) : (d == null || d.send(
      {
        ...I,
        type: `${i}/${I.type}`
      },
      {
        ...ts(p.name),
        [i]: n.getState()
      }
    ), N);
  }, n.devtools = {
    cleanup: () => {
      d && typeof d.unsubscribe == "function" && d.unsubscribe(), mr(p.name, i);
    }
  };
  const f = (...S) => {
    const g = u;
    u = !1, t(...S), u = g;
  }, h = s(n.setState, r, n);
  if (y.type === "untracked" ? d == null || d.init(h) : (y.stores[y.store] = n, d == null || d.init(
    Object.fromEntries(
      Object.entries(y.stores).map(([S, g]) => [
        S,
        S === y.store ? h : g.getState()
      ])
    )
  )), An(n)) {
    let S = !1;
    const g = n.dispatch;
    n.dispatch = (...x) => {
      ($n ? "production" : void 0) !== "production" && x[0].type === "__setState" && !S && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), S = !0), g(...x);
    };
  }
  return d.subscribe((S) => {
    var g;
    switch (S.type) {
      case "ACTION":
        if (typeof S.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return js(
          S.payload,
          (x) => {
            if (x.type === "__setState") {
              if (i === void 0) {
                f(x.state);
                return;
              }
              Object.keys(x.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const N = x.state[i];
              if (N == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(N) && f(N);
              return;
            }
            An(n) && n.dispatch(x);
          }
        );
      case "DISPATCH":
        switch (S.payload.type) {
          case "RESET":
            return f(h), i === void 0 ? d == null ? void 0 : d.init(n.getState()) : d == null ? void 0 : d.init(ts(p.name));
          case "COMMIT":
            if (i === void 0) {
              d == null || d.init(n.getState());
              return;
            }
            return d == null ? void 0 : d.init(ts(p.name));
          case "ROLLBACK":
            return js(S.state, (x) => {
              if (i === void 0) {
                f(x), d == null || d.init(n.getState());
                return;
              }
              f(x[i]), d == null || d.init(ts(p.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return js(S.state, (x) => {
              if (i === void 0) {
                f(x);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(x[i]) && f(x[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: x } = S.payload, N = (g = x.computedStates.slice(-1)[0]) == null ? void 0 : g.state;
            if (!N) return;
            f(i === void 0 ? N : N[i]), d == null || d.send(
              null,
              // FIXME no-any
              x
            );
            return;
          }
          case "PAUSE_RECORDING":
            return u = !u;
        }
        return;
    }
  }), h;
}, xs = gr, js = (s, a) => {
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
function yr(s, a) {
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
const Rs = (s) => (a) => {
  try {
    const t = s(a);
    return t instanceof Promise ? t : {
      then(r) {
        return Rs(r)(t);
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
        return Rs(r)(t);
      }
    };
  }
}, vr = (s, a) => (t, r, n) => {
  let o = {
    storage: yr(() => window.localStorage),
    partialize: (g) => g,
    version: 0,
    merge: (g, x) => ({
      ...x,
      ...g
    }),
    ...a
  }, l = !1, i = 0;
  const p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let d = o.storage;
  if (!d)
    return s(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...g);
      },
      r,
      n
    );
  const y = () => {
    const g = o.partialize({ ...r() });
    return d.setItem(o.name, {
      state: g,
      version: o.version
    });
  }, u = n.setState;
  n.setState = (g, x) => (u(g, x), y());
  const f = s(
    (...g) => (t(...g), y()),
    r,
    n
  );
  n.getInitialState = () => f;
  let h;
  const S = () => {
    var g, x;
    if (!d) return;
    const N = ++i;
    l = !1, p.forEach((j) => {
      var A;
      return j((A = r()) != null ? A : f);
    });
    const I = ((x = o.onRehydrateStorage) == null ? void 0 : x.call(o, (g = r()) != null ? g : f)) || void 0;
    return Rs(d.getItem.bind(d))(o.name).then((j) => {
      if (j)
        if (typeof j.version == "number" && j.version !== o.version) {
          if (o.migrate) {
            const A = o.migrate(
              j.state,
              j.version
            );
            return A instanceof Promise ? A.then((b) => [!0, b]) : [!0, A];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, j.state];
      return [!1, void 0];
    }).then((j) => {
      var A;
      if (N !== i)
        return;
      const [b, T] = j;
      if (h = o.merge(
        T,
        (A = r()) != null ? A : f
      ), t(h, !0), b)
        return y();
    }).then(() => {
      N === i && (I == null || I(r(), void 0), h = r(), l = !0, c.forEach((j) => j(h)));
    }).catch((j) => {
      N === i && (I == null || I(void 0, j));
    });
  };
  return n.persist = {
    setOptions: (g) => {
      o = {
        ...o,
        ...g
      }, g.storage && (d = g.storage);
    },
    clearStorage: () => {
      ++i, d == null || d.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => S(),
    hasHydrated: () => l,
    onHydrate: (g) => (p.add(g), () => {
      p.delete(g);
    }),
    onFinishHydration: (g) => (c.add(g), () => {
      c.delete(g);
    })
  }, o.skipHydration || S(), h || f;
}, Nr = vr, jr = 40;
function ws() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), a = s.get("feature") || s.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function Cs() {
  if (typeof window > "u") return null;
  try {
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function ua(s) {
  var a, t, r, n;
  return s ? !!(s.isDetail || s.route === "/fcl-import" || (a = s.route) != null && a.includes("detail") || (t = s.scriptFile) != null && t.toLowerCase().includes("detail") || (r = s.name) != null && r.toLowerCase().includes("fcl import") || (n = s.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function Ps(s) {
  return s ? !ua(s) : !1;
}
function Vt(s, a, t) {
  var r;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", s);
      const l = (t || ((r = K.getState()) == null ? void 0 : r.features) || []).find((p) => String(p.id) === String(s) || p.route === `/${s}` || p.route === s);
      if ((l ? Ps(l) : s === "6" || s === "1" || s === "3") || a === null || a === "") {
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
const K = Yt()(
  xs(
    (s, a) => ({
      features: [],
      activeFeatureId: ws() || "",
      activeRecordId: Cs(),
      selection: { componentId: null, pageId: ws() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, r) => {
        const n = a().features || [], o = n.find((p) => String(p.id) === String(t) || p.route === `/${t}` || p.route === t), l = o ? Ps(o) : t === "6" || t === "1" || t === "3";
        Vt(t, l ? null : r, n);
        let i = null;
        l || r === null || r === "" ? i = null : r != null ? i = String(r) : i = Cs(), s((p) => ({
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
        const r = ws(), n = r && t.find((i) => i.id === r || i.route === `/${r}` || i.route === r) || t.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || t.find((i) => !i.hidden && !i.isDetail) || t[0], l = Ps(n) ? null : Cs();
        Vt(n.id, l, t), s({
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
        return Vt(n, null), s((l) => {
          const i = [...l.features, o];
          return {
            ...Be(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: r } : l);
          return Be(n, o);
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
          return Vt(l), {
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
          return Vt(o, null), {
            ...Be(r, n),
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
          return Be(n, o);
        });
      },
      updateFeatureScriptFile: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: r.trim() } : l);
          return Be(n, o);
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
            n !== void 0 ? i = Ls(l.components, r, t, n) : i = xa(l.components, r, t);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, t), i = c.map((d, y) => ({ ...d, order: y + 1 }));
          } else
            i = [...l.components, t];
          const p = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...Be(o, p),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentStyle: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentEvents: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              events: r
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentDataBinding: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentValidation: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentPermissions: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return Be(n, o);
        });
      },
      updateComponentOrder: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: et(l.components, t, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return Be(n, o);
        });
      },
      removeComponent: (t) => {
        s((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: pa(o.components, t)
          });
          return {
            ...Be(r, n),
            selection: { ...r.selection, componentId: null }
          };
        });
      },
      moveComponent: (t, r, n) => {
        s((o) => {
          const l = o.features.find((f) => f.id === o.activeFeatureId);
          if (!l) return {};
          const i = wr(l.components, t);
          if (!i) return {};
          const [p, c] = i, d = { ...p, parentId: r };
          let y;
          if (r === null) {
            const f = c.filter((g) => !g.parentId);
            f.splice(n, 0, d);
            const h = f.map((g, x) => ({ ...g, order: x + 1 })), S = c.filter((g) => g.parentId);
            y = [...h, ...S];
          } else
            y = Ls(c, r, d, n);
          const u = o.features.map(
            (f) => f.id === o.activeFeatureId ? { ...f, components: y } : f
          );
          return Be(o, u);
        });
      },
      distributeSiblingWidths: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ma(l.components, t, r)
          });
          return Be(n, o);
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
function Be(s, a) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= jr && t.shift(), t.push(a), {
    features: a,
    history: t,
    historyIndex: t.length - 1
  };
}
function et(s, a, t) {
  return s.map((r) => r.id === a ? t(r) : r.children && r.children.length > 0 ? { ...r, children: et(r.children, a, t) } : r);
}
function pa(s, a) {
  return s.filter((t) => t.id !== a).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: pa(t.children, a) } : t
  );
}
function xa(s, a, t) {
  return s.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...t, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: xa(r.children, a, t)
  } : r);
}
function ma(s, a, t) {
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
    children: ma(n.children, a, t)
  } : n);
}
function wr(s, a) {
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
      ], c = { ...n, children: p }, d = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, d];
    }
    const l = ha(n.children, a);
    if (l) {
      const [i, p] = l, c = { ...n, children: p }, d = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, d];
    }
  }
  return null;
}
function ha(s, a) {
  for (let t = 0; t < s.length; t++) {
    const r = s[t];
    if (r.id === a) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = ha(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, p = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, p];
      }
    }
  }
  return null;
}
function Ls(s, a, t, r) {
  return s.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...t, parentId: a });
      const i = l.map((p, c) => ({ ...p, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Ls(n.children, a, t, r) } : n;
  });
}
const Cr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = K((N) => N.features), o = K((N) => N.activeFeatureId), l = n.find((N) => String(N.id) === String(s.pageId)) || n.find((N) => String(N.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = {
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
        ...S
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${g} ${x}`,
      onClick: (N) => {
        a ? (N.ctrlKey || N.metaKey || N.altKey) && (N.stopPropagation(), ke(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : ke(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (N) => {
        var j;
        N.stopPropagation(), ((j = s.events) == null ? void 0 : j.some((A) => A.trigger === "dblclick" || A.trigger === "onDoubleClick")) ? ke(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && ke(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, Ke = Yt()(
  xs((s, a) => ({
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
            var d;
            return c.featureId === t && String(((d = c.params) == null ? void 0 : d.id) ?? "") === String((r == null ? void 0 : r.id) ?? "");
          }
        );
        if (p)
          s({ activeTabId: p.id });
        else {
          const c = `tab_${t}_${r.id || Date.now()}`, d = {
            id: c,
            featureId: t,
            title: l,
            params: r
          };
          s({
            openTabs: [...i, d],
            activeTabId: c
          });
        }
        K.getState().setActiveFeature(t, (r == null ? void 0 : r.id) ?? null);
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
), kr = [];
function Sr(s) {
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
function Ye(s, a, t, r = void 0) {
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
const xe = Yt()(
  xs((s, a) => ({
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
        const d = p.replace(/^fld_/, "").toLowerCase();
        if (i.has(d)) continue;
        i.add(d);
        const y = o[p] ?? o[d] ?? o[p.replace(/^fld_/, "")], u = c === "" || c === void 0 ? null : c, f = y === "" || y === void 0 ? null : y;
        if (String(u ?? "") !== String(f ?? ""))
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
        Ke.getState().setTabDirty(t, !1);
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
    // 2. Lấy dataset của Entity
    getDataset: (t) => a().datasets[t] || kr,
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (t, r, n) => {
      s((o) => {
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), p = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), d = (S) => {
          const g = { ...S };
          for (const x of Object.keys(g))
            (x.toLowerCase() === i || x.toLowerCase() === r.toLowerCase()) && delete g[x];
          return g[p] = n, g[c] = n, g;
        }, y = o.formRecords[t] || {}, u = o.formRecords.default || {}, f = d(y), h = d(u);
        try {
          Ke.getState().setTabDirty(t, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [t]: f,
            default: h
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, r, n = "") => Ye(a(), t, r, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (t, r) => {
      s((n) => {
        const o = {};
        for (const [l, i] of Object.entries(r || {})) {
          o[l] = i;
          const p = l.replace(/^fld_/, ""), c = p.charAt(0).toLowerCase() + p.slice(1), d = p.charAt(0).toUpperCase() + p.slice(1);
          o[c] = i, o[d] = i;
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
      for (const [c, d] of Object.entries(l)) {
        if (!c) continue;
        const y = c.charAt(0).toLowerCase() + c.slice(1), u = c.charAt(0).toUpperCase() + c.slice(1);
        p[y] === void 0 && (p[y] = d), p[u] === void 0 && (p[u] = d);
      }
      return p;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (t, r, n) => {
      if (!n || typeof n != "object") return;
      const o = Sr(r);
      if (o.length === 0) return;
      const l = a().formRecords[t] || {}, i = {};
      for (const p of o) {
        const c = Object.keys(n).find(
          (d) => d.toLowerCase() === p.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const d = n[c];
          i[p.targetField] = d, p.targetField.startsWith("fld_") || (i[`fld_${p.targetField.toLowerCase()}`] = d);
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
            const d = await c.json();
            return (Array.isArray(d) ? d : d.value || []).map((u) => {
              const f = u[n] !== void 0 ? u[n] : u.Id || u.id || u.code, h = u[o] !== void 0 ? u[o] : u.FullName || u.fullName || u.Name || u.name || u.title || String(f);
              return {
                value: f,
                label: String(h),
                rawItem: u
              };
            });
          }
        } catch {
        }
      return (a().datasets[t] || []).map((i) => {
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
      return a().datasets[t] || [];
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
          const d = c.find((y) => (y.code || y.Code || y.recordCode || y.RecordCode || y.key || y.Key) === l);
          d && (o = d.id || d.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), p = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${p}` : `http://localhost:5048/api/core/data/${encodeURIComponent(t)}`, d = i ? "PUT" : "POST", y = { ...r };
        for (const [h, S] of Object.entries(y))
          if (S === "")
            (/date|time/i.test(h) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(h) || /gw|cbm|vgm|package/i.test(h)) && (y[h] = null);
          else if (typeof S == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(S.trim())) {
            const [g, x, N] = S.trim().split("/");
            y[h] = `${N}-${x.padStart(2, "0")}-${g.padStart(2, "0")}T00:00:00`;
          }
        const u = {};
        for (const [h, S] of Object.entries(y)) {
          if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_"))
            continue;
          const g = h.replace(/^fld_/, ""), x = g.charAt(0).toUpperCase() + g.slice(1);
          u[x] = S;
        }
        i ? u.Id = p : (u.Id = 0, u.Active = !0);
        const f = await fetch(c, {
          method: d,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(u)
        });
        if (f.ok) {
          const h = await f.json(), S = h.id || h.Id || p;
          K.getState().setActiveRecordId(String(S)), n && (a().setFormRecord(n, h), a().markFormClean(n)), a().setFormRecord("default", h), a().markFormClean("default");
          const g = a().datasets[t];
          if (g && Array.isArray(g))
            if (i) {
              const x = g.map(
                (N) => (N.id || N.Id) === p ? { ...N, ...h } : N
              );
              a().registerDataset(t, x);
            } else
              a().registerDataset(t, [h, ...g]);
          return {
            success: !0,
            data: h,
            message: i ? `Cập nhật thành công bản ghi #${p} (${t}) vào Database!` : `Thêm mới thành công bản ghi (${t}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${f.status}` };
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
      const r = a(), n = K.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((h) => String(h.id) === String(t)) || o.find((h) => String(h.id) === String(l)) || o.find((h) => h.isDetail) || o[0], p = {}, c = (h) => {
        var S, g, x;
        if (!(!h || !Array.isArray(h)))
          for (const N of h) {
            const I = (S = N.dataBinding) == null ? void 0 : S.fieldName, j = (g = N.props) == null ? void 0 : g.name, A = N.id, b = I || (typeof j == "string" ? j : "") || (A == null ? void 0 : A.replace(/^fld_/, "")), T = String(b || "").trim();
            if (T) {
              let P = Ye(r, String(N.pageId || l || "default"), T, void 0);
              if (P === void 0 && ((x = N.props) == null ? void 0 : x.value) !== void 0 && (P = N.props.value), P === void 0 && typeof document < "u") {
                const D = document.getElementById(N.id) || document.querySelector(`[name="${N.id}"]`) || document.querySelector(`[name="${T}"]`);
                D && "value" in D && D.value !== "" && (P = D.value);
              }
              if (P != null) {
                p[T] = P;
                const D = T.charAt(0).toLowerCase() + T.slice(1), O = T.charAt(0).toUpperCase() + T.slice(1);
                p[D] = P, p[O] = P;
              }
            }
            N.children && N.children.length > 0 && c(N.children);
          }
      };
      i != null && i.components && c(i.components);
      const d = t || String(l || "default"), y = { ...r.formRecords.default, ...d ? r.formRecords[d] : {} }, u = { ...p, ...y };
      if (!u.id && !u.Id && typeof window < "u") {
        const S = new URLSearchParams(window.location.search).get("id");
        S && S !== "new" && Number(S) > 0 && (u.id = Number(S), u.Id = Number(S));
      }
      const f = {};
      for (const [h, S] of Object.entries(u)) {
        if (!h || h.startsWith("fld_") || h.startsWith("btn_") || h.startsWith("sec_") || h.startsWith("tab_")) continue;
        const g = h.replace(/^fld_/, ""), x = g.charAt(0).toLowerCase() + g.slice(1), N = g.charAt(0).toUpperCase() + g.slice(1);
        f[x] = S, f[N] = S;
      }
      return (u.id || u.Id) && (f.id = u.id || u.Id, f.Id = u.id || u.Id), s((h) => ({
        formRecords: {
          ...h.formRecords,
          [d]: f,
          default: f
        }
      })), f;
    }
  }))
), Tr = ({ node: s, isEditing: a }) => {
  var b;
  const { props: t, style: r } = s, n = K((T) => T.features), o = K((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((b = s.dataBinding) == null ? void 0 : b.fieldName) || s.props.name || s.id), N = xe((T) => Ye(T, g, x, void 0)), I = xe((T) => T.setFieldValue), j = N !== void 0 ? N : t.value ?? "", A = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    jt,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "Nhập dữ liệu...",
          value: j,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${A ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (T) => {
            const P = T.target.value;
            I(g, x, P), a || ke(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x,
              value: P
            });
          },
          onFocus: () => {
            a || ke(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x
            });
          },
          onBlur: (T) => {
            a || ke(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: x,
              value: T.target.value
            });
          }
        }
      )
    }
  );
}, Dr = ({ node: s, isEditing: a }) => {
  var D;
  const { props: t, style: r } = s, n = K((O) => O.features), o = K((O) => O.activeFeatureId), l = n.find((O) => String(O.id) === String(s.pageId)) || n.find((O) => String(O.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((D = s.dataBinding) == null ? void 0 : D.fieldName) || s.props.name || s.id), N = xe((O) => Ye(O, g, x, void 0)), I = xe((O) => O.setFieldValue), j = t.precision !== void 0 ? Number(t.precision) : 0, A = N !== void 0 ? N : t.value, b = A != null && A !== "" ? Number(A) : 0, T = (O) => O.toLocaleString("en-US", {
    minimumFractionDigits: j,
    maximumFractionDigits: j
  }), P = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    jt,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "0",
          value: T(b),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (O) => {
            const B = O.target.value.replace(/,/g, "");
            if (B === "" || !isNaN(Number(B))) {
              const J = B === "" ? 0 : Number(B);
              I(g, x, J), a || ke(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: x,
                value: J
              });
            }
          }
        }
      ) })
    }
  );
}, Fr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = K((g) => g.features), o = K((g) => g.activeFeatureId), l = n.find((g) => String(g.id) === String(s.pageId)) || n.find((g) => String(g.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...S
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (g) => {
        a ? (g.ctrlKey || g.metaKey || g.altKey) && (g.stopPropagation(), ke(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : ke(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (g) => {
        g.stopPropagation(), ke(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, Bn = ({
  node: s,
  isEditing: a,
  isSelected: t,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var V;
  const { props: p, style: c } = s;
  K((z) => z.updateComponentProps);
  const d = !!(p.isTab || p.tab || p.isTabGroup || s.type === "Tabs"), y = [
    { id: "main", label: "TAB 1" }
  ], u = p.tabs || y, [f, h] = L(
    p.activeTabId || ((V = u[0]) == null ? void 0 : V.id) || "main"
  ), S = p.layoutMode || "flex", g = p.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, x = p.gridConfig || { columns: 12, gap: "16px" }, N = Number(
    x.columns || (typeof g.columnsPerRow == "number" ? g.columnsPerRow : 12)
  ) || 12, I = (c == null ? void 0 : c.justifyContent) || g.justify || "flex-start", j = (c == null ? void 0 : c.alignItems) || g.align || "flex-start", A = g.wrap || "wrap", b = S === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))`,
    gap: x.gap || g.gap || "16px",
    alignItems: j
  } : {
    display: "flex",
    flexDirection: g.direction || "row",
    flexWrap: A,
    justifyContent: I,
    alignItems: j,
    gap: g.gap || "12px"
  };
  let T = c != null && c.flex ? void 0 : "100%", P = c == null ? void 0 : c.flex, D = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const z = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(z) && z > 0) {
      const ne = parseInt(o.gap || "12", 10) || 12, W = z === 1 ? "100%" : `calc((100% - ${(z - 1) * ne}px) / ${z})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (T = W, P = `0 0 ${W}`, D = W);
    }
  }
  const { width: O, flex: B, ...J } = c || {}, R = l ? {
    ...b,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: d ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (d ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (d ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...J,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...b,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: d ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (d ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (d ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : T,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : P,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : D,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: r,
      onContextMenu: n,
      style: R,
      className: `relative transition-all duration-150 group/container box-border ${a ? `cursor-pointer ${t ? d ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : d ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${d ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: d ? `Tab: ${p.label || "Không tên"}` : "Khoảng trắng" }),
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
}, Ir = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: p, maxWidth: c, width: d, ...y } = r || {}, [u, f] = L(!1), h = t.title || t.label || "Khối Bố Cục (Section)", S = t.collapsible ?? !0, g = t.layoutMode || "grid", x = t.flexConfig || {}, N = t.gridConfig || {}, I = Number(N.columns || x.columnsPerRow || 12) || 12, j = x.gap || N.gap || "12px", A = (r == null ? void 0 : r.justifyContent) || x.justify || "flex-start", b = (r == null ? void 0 : r.alignItems) || x.align || "center", T = g === "flex" ? {
    display: "flex",
    flexDirection: x.direction || "row",
    flexWrap: x.wrap || "wrap",
    justifyContent: A,
    alignItems: b,
    gap: j
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${I}, minmax(0, 1fr))`,
    gap: j,
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
            /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: h })
          ] }),
          S && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => f(!u),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: u ? "Mở rộng" : "Thu gọn",
              children: u ? /* @__PURE__ */ e.jsx(cs, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Gn, { className: "w-4 h-4" })
            }
          )
        ] }),
        !u && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: T, children: a })
      ]
    }
  );
}, kl = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: p, maxWidth: c, width: d, ...y } = r || {}, u = t.title || t.label || "Biểu Mẫu Doanh Nghiệp";
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
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: u }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: t.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Un, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
}, Rr = ({
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
  onToggleFilter: d
}) => {
  const y = qe(null), [u, f] = qt.useState(!1);
  if (Ae(() => {
    if (!r) return;
    const g = (N) => {
      y.current && !y.current.contains(N.target) && n();
    }, x = (N) => {
      N.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", x), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", x);
    };
  }, [r, n]), !r) return null;
  const h = Math.min(s, window.innerWidth - 220), S = Math.min(a, window.innerHeight - 340);
  return Xt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: y,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: h, top: S },
        onClick: (g) => g.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(Os, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(La, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                          /* @__PURE__ */ e.jsx(zn, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  u && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
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
                  /* @__PURE__ */ e.jsx(vt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5 text-sky-400" }),
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
            d && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  d(), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Jn, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(Ea, { className: "w-3.5 h-3.5" }),
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
}, Pr = ({
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
  onMoveRowUp: d,
  onMoveRowDown: y
}) => {
  const u = qe(null);
  if (Ae(() => {
    if (!o) return;
    const S = (x) => {
      u.current && !u.current.contains(x.target) && l();
    }, g = (x) => {
      x.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", g), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", g);
    };
  }, [o, l]), !o) return null;
  const f = Math.min(s, window.innerWidth - 220), h = Math.min(a, window.innerHeight - 260);
  return Xt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: f, top: h },
        onClick: (S) => S.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            d && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  d(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Zn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
}, Lr = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], ba = ({
  events: s = [],
  onChange: a,
  scriptFile: t = "transactionList.bl.ts",
  componentName: r = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = Lr
}) => {
  const [p, c] = L(""), [, d] = L(0), y = t || "transactionList.bl.ts", u = cr(y), f = () => {
    var I;
    const x = u[0] || "openTransactionDetail", N = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((I = i[0]) == null ? void 0 : I.value) || "click",
      handlerName: x,
      action: x
    };
    a([...s, N]);
  }, h = (x, N) => {
    const I = s.map((j, A) => {
      if (A !== x) return j;
      const b = { ...j, ...N };
      return N.handlerName && !N.action && (b.action = N.handlerName), b;
    });
    a(I);
  }, S = (x) => {
    const N = s.filter((I, j) => j !== x);
    a(N);
  }, g = () => {
    p.trim() && (dr(y, p.trim()), c(""), d((x) => x + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
          onClick: f,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(Ss, { className: "w-3 h-3 text-cyan-400" }),
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
              x.key === "Enter" && (x.preventDefault(), g());
            },
            placeholder: "ví dụ: openTransactionDetail, checkGW...",
            className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: g,
            className: "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((x, N) => {
      const I = u.includes(x.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  N + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: x.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => S(N),
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
                    onChange: (j) => h(N, { trigger: j.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((j) => /* @__PURE__ */ e.jsx("option", { value: j.value, children: j.label }, j.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: x.handlerName || u[0] || "",
                    onChange: (j) => {
                      const A = j.target.value;
                      h(N, { handlerName: A, action: A });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      u.map((j) => /* @__PURE__ */ e.jsxs("option", { value: j, children: [
                        j,
                        "()"
                      ] }, j)),
                      !I && x.handlerName && /* @__PURE__ */ e.jsxs("option", { value: x.handlerName, children: [
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
                  os(
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
                  /* @__PURE__ */ e.jsx($a, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        x.id || N
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(nt, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
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
}, fa = ({
  isOpen: s,
  column: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = L(null), [l, i] = L("info"), p = K((u) => u.features.find((f) => f.id === u.activeFeatureId));
  if (Ae(() => {
    if (a) {
      let u = [];
      if (Array.isArray(a.events))
        u = [...a.events];
      else if (typeof a.events == "string" && a.events.trim())
        try {
          const f = JSON.parse(a.events);
          Array.isArray(f) && (u = f);
        } catch {
        }
      u.length === 0 && a.action && (u = [
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
        events: u
      });
    }
  }, [a]), !s || !n) return null;
  const c = Array.isArray(n.events) ? n.events : [], d = (u, f) => {
    o((h) => {
      if (!h) return h;
      const S = { ...h, [u]: f };
      return u === "frozen" ? S.sticky = f ? "left" : "none" : u === "sticky" && (S.frozen = f === "left"), S;
    });
  }, y = (u) => {
    n && (r(n), t());
  };
  return Xt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4 text-emerald-400" }),
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
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Ts, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(rt, { className: "w-3.5 h-3.5" }),
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
                  onChange: (u) => d("code", u.target.value),
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
                  onChange: (u) => d("order", parseInt(u.target.value) || 0),
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
                  onChange: (u) => d("feature", u.target.value),
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
                  onChange: (u) => d("refClass", u.target.value),
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
                  onChange: (u) => d("filterTemplate", u.target.value),
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
                  onChange: (u) => d("formatExcell", u.target.value),
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
                  onChange: (u) => d("childStyle", u.target.value),
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
                  onChange: (u) => d("dataSource", u.target.value),
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
                  onChange: (u) => d("key", u.target.value),
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
                  onChange: (u) => d("title", u.target.value),
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
                  onChange: (u) => d("description", u.target.value),
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
                    onChange: (u) => d("refName", u.target.value),
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
                    onChange: (u) => d("reference", u.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: n.formatCell || "",
                  placeholder: "{Name}",
                  onChange: (u) => d("formatCell", u.target.value),
                  className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Width" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.width || "162px",
                    onChange: (u) => d("width", u.target.value),
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
                    onChange: (u) => d("minWidth", u.target.value),
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
                    onChange: (u) => d("maxWidth", u.target.value),
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
                  onChange: (u) => d("componentType", u.target.value),
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
                    onChange: (u) => d("precision", parseInt(u.target.value) || 0),
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
                    onChange: (u) => d("align", u.target.value),
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
                      /* @__PURE__ */ e.jsx(nt, { className: "w-3 h-3 text-amber-400" }),
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
                      /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      c.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: c.map((u) => `${u.trigger} ➔ ${u.handlerName || u.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
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
                    onChange: (u) => d("cascadeField", u.target.value),
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
                    onChange: (u) => d("aggregate", u.target.value),
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
                  onChange: (u) => d("validation", u.target.value),
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
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("events"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "events" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                    onChange: (u) => d("frozen", u.target.checked),
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
                    onChange: (u) => d("disabled", u.target.checked),
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
                    onChange: (u) => d("hasPermission", u.target.checked),
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
                    onChange: (u) => d("focusSearch", u.target.checked),
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
                    onChange: (u) => d("filterEq", u.target.checked),
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
                    onChange: (u) => d("filterLocal", u.target.checked),
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
                    onChange: (u) => d("hidden", u.target.checked),
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
                    onChange: (u) => d("active", u.target.checked),
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
                    onChange: (u) => d("advancedSearch", u.target.checked),
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
                    onChange: (u) => d("virtualScroll", u.target.checked),
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
                    onChange: (u) => d("upperCase", u.target.checked),
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
                    onChange: (u) => d("hasFilter", u.target.checked),
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
                    onChange: (u) => d("isRealtime", u.target.checked),
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
                    onChange: (u) => d("autoFit", u.target.checked),
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
                    onChange: (u) => d("aggregate", u.target.checked ? "sum" : "none"),
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
                    onChange: (u) => d("addDate", u.target.checked),
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
                    onChange: (u) => d("editable", u.target.checked),
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
                    onChange: (u) => d("isPivot", u.target.checked),
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
                    onChange: (u) => d("basicSearch", u.target.checked),
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
                    onChange: (u) => d("ignoreTrigger", u.target.checked),
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
                    onChange: (u) => d("hideGrid", u.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            ba,
            {
              events: c,
              onChange: (u) => {
                d("events", u);
                const f = u.find((h) => h.trigger === "click" || h.trigger === "actionClick");
                f && d("action", f.handlerName || f.action);
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
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Admin", "Manager", "Dispatcher", "Sales", "Customer"].map((u) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer", children: [
              /* @__PURE__ */ e.jsx("input", { type: "checkbox", defaultChecked: u === "Admin" || u === "Manager", className: "rounded text-emerald-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200", children: u })
            ] }, u)) })
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
              /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
            ]
          }
        )
      ] })
    ] }) }),
    document.body
  );
}, Er = ({
  columns: s,
  data: a,
  showRowNumber: t = !0,
  rowNumberWidth: r = 55,
  leftOffsets: n = {}
}) => {
  if (!s.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const p = a.map((f) => f[i.key]).filter((f) => f != null && f !== "");
    if (i.aggregate === "count") {
      const f = p.length;
      return `${i.summaryPrefix || ""}${f}${i.summarySuffix || " dòng"}`;
    }
    const c = p.map((f) => {
      if (typeof f == "number") return f;
      const h = parseFloat(String(f).replace(/,/g, ""));
      return isNaN(h) ? 0 : h;
    });
    if (c.length === 0) return "—";
    let d = 0;
    i.aggregate === "sum" ? d = c.reduce((f, h) => f + h, 0) : i.aggregate === "avg" ? d = c.reduce((f, h) => f + h, 0) / c.length : i.aggregate === "min" ? d = Math.min(...c) : i.aggregate === "max" && (d = Math.max(...c));
    const y = i.precision ?? (i.format === "number_thousands" ? 0 : 2), u = y > 0 ? d.toLocaleString("en-US", { minimumFractionDigits: y, maximumFractionDigits: y }) : d.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${u}${i.summarySuffix || ""}`;
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
      const c = l(i), d = p === 0, y = i.sticky === "left" || !!i.frozen, u = y && n[i.key] !== void 0 ? n[i.key] : void 0, f = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${f} ${y ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: u !== void 0 ? `${u}px` : void 0
          },
          children: d && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
}, $r = ({
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
  const d = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", y = a === "—" || a === "-" ? "" : a ?? "", u = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", f = (x) => {
    p && p(x, r, n, s.key);
  }, h = () => {
    c && c(r, n, s.key);
  }, S = {
    "data-grid-cell": `${r}_${n}`,
    "data-grid-row": r,
    "data-grid-col": n,
    "data-grid-colkey": s.key
  };
  if (s.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...S, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!a,
        disabled: s.disabled || !d,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => l(x.target.checked),
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: "w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      }
    ) });
  if (s.componentType === "Button") {
    const x = s.formatCell || s.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...S, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: (N) => {
          N.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: f,
        onFocus: h,
        ...S,
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
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: "text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate",
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(ea, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!d) {
    if (s.precision !== void 0 && typeof a == "number") {
      const x = s.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: h,
          ...S,
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
      return typeof t == "object" && t !== null && Object.keys(t).forEach((N) => {
        x = x.replace(new RegExp(`\\{${N}\\}`, "gi"), String(t[N] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: h,
          ...S,
          className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: x
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
        children: a != null ? String(a) : "—"
      }
    );
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let x = s.options || [];
    const N = s.reference || s.refName;
    if (x.length === 0 && N) {
      const I = xe.getState().getDataset(N);
      if (Array.isArray(I) && I.length > 0) {
        const j = s.valueField || s.idField || "code", A = s.displayField || s.selectField || "name";
        x = I.map((b) => ({
          value: String(b[j] ?? b.code ?? b.id ?? ""),
          label: String(b[A] ?? b.name ?? b[j] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: s.disabled,
        title: o || void 0,
        onClick: (I) => I.stopPropagation(),
        onChange: (I) => l(I.target.value),
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          x.map((I) => /* @__PURE__ */ e.jsx("option", { value: I.value, className: "bg-slate-900 text-slate-100", children: I.label }, I.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", title: o || void 0, ...S, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: y,
          placeholder: "DD/MM/YYYY",
          disabled: s.disabled,
          onClick: (x) => x.stopPropagation(),
          onChange: (x) => l(x.target.value),
          onKeyDown: f,
          onFocus: h,
          ...S,
          className: `w-full h-7 pl-2.5 pr-7 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
        }
      ),
      /* @__PURE__ */ e.jsx(_s, { className: "w-3.5 h-3.5 text-emerald-400 absolute right-2 pointer-events-none" })
    ] });
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
          const N = x.target.value;
          l(N === "" ? "" : Number(N));
        },
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
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
          const N = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
          l(N);
        },
        onKeyDown: f,
        onFocus: h,
        ...S,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const g = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
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
        const N = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
        l(N);
      },
      onKeyDown: f,
      onFocus: h,
      ...S,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${g} ${s.cssClass || ""}`
    }
  );
};
function Ar({
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
  onDuplicateRow: d,
  onToggleAll: y,
  onFilterByCell: u,
  onQuickSum: f,
  onToggleColumnFilters: h,
  isEditableTable: S = !0
}) {
  const [g, x] = L(null), N = es(
    (b, T) => {
      if (b < 0 || b >= a.length || T < 0 || T >= t.length) return;
      const P = t[T], D = a[b], O = (D == null ? void 0 : D.id) ?? (D == null ? void 0 : D.Id) ?? b;
      if (n(O), x({ rowIndex: b, colIndex: T, colKey: P.key }), s.current) {
        const B = `[data-grid-cell="${b}_${T}"]`, J = s.current.querySelector(B);
        if (J) {
          J.scrollIntoView({ block: "nearest", inline: "nearest" });
          const R = J.tagName === "INPUT" || J.tagName === "SELECT" || J.tagName === "TEXTAREA" || J.tagName === "BUTTON" ? J : J.querySelector("input, select, textarea, button") || J;
          R.focus(), R instanceof HTMLInputElement && (R.type === "text" || R.type === "number") && R.select();
        }
      }
    },
    [a, t, s, n]
  ), I = es(
    (b) => {
      if (!s.current) return;
      const T = s.current.querySelector(`[data-row-index="${b}"]`);
      T && T.scrollIntoView({ block: "nearest" });
    },
    [s]
  ), j = es(
    (b) => {
      if (b.key === "F1") {
        b.preventDefault(), b.stopPropagation(), y == null || y();
        return;
      }
      if (b.key === "F2") {
        b.preventDefault(), b.stopPropagation(), u == null || u();
        return;
      }
      if (b.key === "F3") {
        b.preventDefault(), b.stopPropagation(), f == null || f();
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
        const T = a.findIndex((D, O) => (D.id ?? D.Id ?? O) === r), P = T < a.length - 1 ? T + 1 : T;
        if (P >= 0 && P !== T) {
          const D = a[P];
          n(D.id ?? D.Id ?? P), l(/* @__PURE__ */ new Set([D.id ?? D.Id ?? P])), I(P);
        }
        return;
      }
      if (b.key === "ArrowUp") {
        b.preventDefault();
        const T = a.findIndex((D, O) => (D.id ?? D.Id ?? O) === r), P = T > 0 ? T - 1 : 0;
        if (P >= 0 && P !== T) {
          const D = a[P];
          n(D.id ?? D.Id ?? P), l(/* @__PURE__ */ new Set([D.id ?? D.Id ?? P])), I(P);
        }
        return;
      }
      if (b.key === "Enter") {
        b.preventDefault();
        const T = a.findIndex((P, D) => (P.id ?? P.Id ?? D) === r);
        T >= 0 && i && i(a[T], T);
        return;
      }
      if (b.key === "Delete") {
        const T = a.findIndex((P, D) => (P.id ?? P.Id ?? D) === r);
        T >= 0 && c && (b.preventDefault(), c(T));
        return;
      }
      if ((b.ctrlKey || b.metaKey) && (b.key === "d" || b.key === "D")) {
        b.preventDefault();
        const T = a.findIndex((P, D) => (P.id ?? P.Id ?? D) === r);
        T >= 0 && d && d(T);
        return;
      }
    },
    [
      a,
      r,
      n,
      l,
      I,
      y,
      u,
      f,
      p,
      h,
      i,
      c,
      d
    ]
  ), A = es(
    (b, T, P, D) => {
      var O, B, J;
      if (b.key === "F1") {
        b.preventDefault(), b.stopPropagation(), y == null || y();
        return;
      }
      if (b.key === "F2") {
        b.preventDefault(), b.stopPropagation(), u == null || u();
        return;
      }
      if (b.key === "F3") {
        b.preventDefault(), b.stopPropagation(), f == null || f();
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
        b.preventDefault(), T < a.length - 1 && N(T + 1, P);
        return;
      }
      if (b.key === "ArrowUp") {
        b.preventDefault(), T > 0 && N(T - 1, P);
        return;
      }
      if (b.key === "ArrowLeft") {
        const R = b.target, V = R && R.selectionStart === 0 && R.selectionEnd === 0, z = R && R.selectionStart === 0 && R.selectionEnd === ((O = R.value) == null ? void 0 : O.length), ne = !R || R.tagName === "SELECT" || R.type === "checkbox" || R.tagName === "BUTTON";
        (V || z || ne) && P > 0 && (b.preventDefault(), N(T, P - 1));
        return;
      }
      if (b.key === "ArrowRight") {
        const R = b.target, V = R && R.selectionStart === ((B = R.value) == null ? void 0 : B.length), z = R && R.selectionStart === 0 && R.selectionEnd === ((J = R.value) == null ? void 0 : J.length), ne = !R || R.tagName === "SELECT" || R.type === "checkbox" || R.tagName === "BUTTON";
        (V || z || ne) && P < t.length - 1 && (b.preventDefault(), N(T, P + 1));
        return;
      }
      if (b.key === "Tab") {
        b.preventDefault(), b.shiftKey ? P > 0 ? N(T, P - 1) : T > 0 && N(T - 1, t.length - 1) : P < t.length - 1 ? N(T, P + 1) : T < a.length - 1 ? N(T + 1, 0) : p && (p(), setTimeout(() => {
          N(a.length, 0);
        }, 60));
        return;
      }
      if (b.key === "Enter") {
        if (b.preventDefault(), b.shiftKey) {
          T > 0 && N(T - 1, P);
          return;
        }
        T < a.length - 1 ? N(T + 1, P) : p && (p(), setTimeout(() => {
          N(a.length, P);
        }, 60));
        return;
      }
      if (b.key === "Escape") {
        b.preventDefault();
        const R = b.target;
        R == null || R.blur();
        return;
      }
    },
    [a, t, N, y, u, f, p, h]
  );
  return {
    focusedCell: g,
    setFocusedCell: x,
    focusCell: N,
    scrollToRow: I,
    handleTableContainerKeyDown: j,
    handleCellKeyDown: A
  };
}
function ga(s) {
  return [...s].sort((a, t) => {
    const r = !!(a.frozen || a.sticky === "left"), n = !!(t.frozen || t.sticky === "left");
    if (r && !n) return -1;
    if (!r && n) return 1;
    const o = typeof a.order == "number" ? a.order : 999, l = typeof t.order == "number" ? t.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Wt(s) {
  return ga(s).map((t, r) => ({
    ...t,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function Es(s, a, t) {
  if (t < 0 || t >= s.length || a === t) return s;
  const r = [...s], [n] = r.splice(a, 1), o = r.filter((d) => d.frozen || d.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && t < o ? (n.frozen = !0, n.sticky = "left") : l && t >= o && (n.frozen = !1, n.sticky = "none"), r.splice(t, 0, n);
  const i = r.filter((d) => d.frozen || d.sticky === "left"), p = r.filter((d) => !d.frozen && d.sticky !== "left");
  return [...i, ...p].map((d, y) => ({
    ...d,
    order: y + 1,
    frozen: !!(d.frozen || d.sticky === "left"),
    sticky: d.frozen || d.sticky === "left" ? "left" : "none"
  }));
}
function ya(s, a) {
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
  return Wt(t);
}
function Br(s, a = 55) {
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
class Or {
  constructor() {
    gs(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    gs(this, "populateResolvers", /* @__PURE__ */ new Map());
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
const va = new Or();
function Sl(s, a, t) {
  return va.getCascadedOptions(s, a, t);
}
function _r(s, a, t) {
  return va.calculateAutoPopulatedFields(s, a, t);
}
function $s(s) {
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
    const d = Math.pow(2, i);
    n += c * d;
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
function On(s) {
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
function As(s, a, t = "Ngày bắt đầu", r = "Ngày kết thúc") {
  const n = On(s), o = On(a);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${t} (${s}) không thể xảy ra sau ${r} (${a})`
  } : { isValid: !0 };
}
function Mr(s, a, t = [], r = {}) {
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
        const l = $s(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = As(String(a), String(l), s, o.targetField);
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
function Tl(s, a) {
  const t = {};
  for (const [r, n] of Object.entries(a)) {
    const o = s[r], l = Mr(r, o, n, s);
    l.isValid || (t[r] = l.errors);
  }
  return t;
}
const _e = {
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
}, Hr = {
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
}, Rt = Yt()(
  xs((s, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ..._e["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [..._e["FCLI-26020005"].shippingInfo],
      grid_container_info: [..._e["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [..._e["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const r = _e[t];
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
      return _e[n] = {
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
      const n = String(Hr[t] || t), l = { ...a().masterRecord, [n]: r }, i = _r(n, r, l);
      Object.assign(l, i);
      const p = { ...a().validationErrors };
      if (n === "mblNo") {
        const d = String(r || "").trim();
        d ? /^[A-Z0-9]{8,18}$/i.test(d) ? delete p.mblNo : p.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : p.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete p.jobNo : p.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const d = l.mblIssuedDate, y = l.shipmentDate;
        if (d && y) {
          const u = As(d, y, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          u.isValid ? delete p.mblIssuedDate : p.mblIssuedDate = u.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: p
      });
      const c = a().activeJobNo;
      _e[c] && (_e[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, r, n, o) => {
      const l = a().detailGrids, i = l[t] || [], p = { ...a().validationErrors }, c = `${t}_${r}_${n}`, d = i.map((u, f) => u.id !== void 0 && u.id === r || u.id === void 0 && f === r ? { ...u, [n]: o } : u);
      if (n === "containerNo") {
        const u = $s(String(o));
        u.isValid ? delete p[c] : p[c] = u.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const u = d.find((f) => f.id === r);
        if (u && u.etd && u.eta) {
          const f = As(u.etd, u.eta, "ETD", "ETA"), h = `${t}_${r}_etd_eta`;
          f.isValid ? delete p[h] : p[h] = f.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: d },
        validationErrors: p
      }), t === "grid_container_info" && a().recalculateTotals();
      const y = a().activeJobNo;
      _e[y] && (t === "grid_shipping_info" && (_e[y].shippingInfo = d), t === "grid_container_info" && (_e[y].containerInfo = d), t === "grid_shipment_detail" && (_e[y].shipmentDetail = d));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o.length > 0 ? Math.max(...o.map((d) => Number(d.id) || 0)) + 1 : 1, i = a().activeJobNo;
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
      const i = o.length > 0 ? Math.max(...o.map((d) => Number(d.id) || 0)) + 1 : 1, p = { ...l, id: i }, c = [...o];
      c.splice(r + 1, 0, p), s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const t = a().detailGrids.grid_container_info || [];
      let r = 0, n = 0, o = 0, l = 0;
      t.forEach((d) => {
        r += Number(d.packageNumber) || 0, n += Number(d.gw) || 0, o += Number(d.cbm) || 0, l += Number(d.vgm) || 0;
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
      _e[c] && (_e[c].master = p);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = a().masterRecord, r = {};
      return (o = t.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const p = $s(i.containerNo);
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
function Vr({
  fileName: s = "Du_Lieu_Bang",
  sheetName: a = "Sheet1",
  columns: t,
  rows: r,
  includeSummary: n = !0
}) {
  const o = t.filter((S) => !S.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const S of o) {
    const g = S.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${g};padding:8px 12px;font-size:11pt;">${S.title || S.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  r.forEach((S, g) => {
    const x = g % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${x};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${g + 1}</td>`;
    for (const N of o) {
      const I = S[N.key], j = N.align || "left";
      let A = I != null ? String(I) : "";
      typeof I == "number" && (A = I.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${j};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${_n(A)}</td>`;
    }
    i += "</tr>";
  });
  let p = "";
  const c = o.some((S) => S.aggregate);
  if (n && c && r.length > 0) {
    p += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', p += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const S of o) {
      const g = S.align || "left";
      if (S.aggregate === "sum") {
        const x = r.reduce((I, j) => {
          const A = Number(j[S.key]);
          return I + (isNaN(A) ? 0 : A);
        }, 0), N = x % 1 !== 0 ? x.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : x.toLocaleString("vi-VN");
        p += `<td style="border:1px solid #334155;text-align:${g};padding:8px 10px;font-weight:bold;">${N}${S.summarySuffix ? ` ${S.summarySuffix}` : ""}</td>`;
      } else if (S.aggregate === "count")
        p += `<td style="border:1px solid #334155;text-align:${g};padding:8px 10px;font-weight:bold;">${r.length}</td>`;
      else if (S.aggregate === "avg") {
        const x = r.reduce((I, j) => {
          const A = Number(j[S.key]);
          return I + (isNaN(A) ? 0 : A);
        }, 0), N = r.length > 0 ? (x / r.length).toFixed(2) : "0";
        p += `<td style="border:1px solid #334155;text-align:${g};padding:8px 10px;font-weight:bold;">${N}</td>`;
      } else
        p += '<td style="border:1px solid #334155;"></td>';
    }
    p += "</tr>";
  }
  const d = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${_n(a)}</x:Name>
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
  `.trim(), y = new Blob(["\uFEFF", d], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), u = s.endsWith(".xls") || s.endsWith(".xlsx") ? s : `${s}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, f = URL.createObjectURL(y), h = document.createElement("a");
  h.href = f, h.download = u, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(f);
}
function _n(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Wr(s) {
  const {
    title: a,
    subtitle: t,
    columns: r,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: p = !0
  } = s, c = r.filter((I) => !I.hidden), d = window.open("", "_blank", "width=1100,height=850");
  if (!d) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const y = /* @__PURE__ */ new Date(), u = `Ngày in: ${y.toLocaleDateString("vi-VN")} lúc ${y.toLocaleTimeString("vi-VN")}`, f = Object.entries(i).map(
    ([I, j]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${ze(I)}:</strong>
          <span>${ze(String(j))}</span>
        </div>`
  ).join(""), h = c.map((I) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${I.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${ze(I.title || I.key)}
      </th>`).join(""), S = n.map((I, j) => {
    const A = j % 2 === 0 ? "#ffffff" : "#f8fafc", b = c.map((T) => {
      const P = I[T.key] ?? "", D = T.align || (typeof P == "number" ? "right" : "left");
      let O = P;
      return typeof P == "number" && (O = P.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${D}; font-size: 11px;">
            ${ze(String(O))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${A};">${b}</tr>`;
  }).join("");
  let g = "";
  o && (g = `<tfoot><tr>${c.map((j, A) => {
    const b = o[j.key] ?? (A === 0 ? "TỔNG CỘNG" : ""), T = j.align || "left";
    let P = b;
    return typeof b == "number" && (P = b.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${T}; font-size: 11px;">
          ${ze(String(P))}
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
    ` : "", N = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${ze(a)} - UIForge Report</title>
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
              ${ze(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${ze(a)}
            </h1>
            ${t ? `<div style="font-size: 12px; color: #475569;">${ze(t)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${ze(u)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${f ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${f}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${h}</tr>
        </thead>
        <tbody>
          ${S}
        </tbody>
        ${g}
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
  d.document.open(), d.document.write(N), d.document.close();
}
function ze(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const Mn = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], Kr = ({ node: s }) => {
  var fe, pe, ce, Re, we;
  const { props: a, style: t } = s, r = K((m) => m.updateComponentProps), n = We(() => a.columns && Array.isArray(a.columns) ? a.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [a.columns]), o = We(() => ga(n), [n]), l = We(() => o.filter((m) => !m.hidden), [o]), i = Rt((m) => m.detailGrids), p = Rt((m) => m.updateGridCell), c = Rt((m) => m.addGridRow), d = Rt((m) => m.deleteGridRow), y = Rt((m) => m.duplicateGridRow), u = Rt((m) => m.validationErrors), f = !!(i && i[s.id]), h = a.reference || a.refName || ((fe = s.dataBinding) == null ? void 0 : fe.refName) || ((pe = s.dataBinding) == null ? void 0 : pe.entityName) || "", S = a.query || ((ce = s.dataBinding) == null ? void 0 : ce.query) || a.dataSource || ((Re = s.dataBinding) == null ? void 0 : Re.dataSource) || a.sqlWhere || ((we = s.dataBinding) == null ? void 0 : we.sqlWhere) || a.filter || "", g = xe((m) => h ? m.datasets[h] : void 0), [x, N] = L(() => f && i && i[s.id] ? i[s.id] : a.data && Array.isArray(a.data) ? a.data : g && Array.isArray(g) ? g : Mn);
  Ae(() => {
    a.data && Array.isArray(a.data) && a.data.length > 0 && N(a.data);
  }, [a.data]), Ae(() => {
    g && Array.isArray(g) && g.length > 0 && N(g);
  }, [g]);
  const I = We(() => f && i && i[s.id] && i[s.id].length > 0 ? i[s.id] : x && Array.isArray(x) && x.length > 0 ? x : g && Array.isArray(g) && g.length > 0 ? g : a.data && Array.isArray(a.data) ? a.data : Mn, [f, i, s.id, x, g, a.data]);
  Ae(() => {
    if (a.data && Array.isArray(a.data) && a.data.length > 0) return;
    let m = !0;
    return h && xe.getState().queryEntity(h, S).then(($) => {
      m && $ && $.length > 0 && N($);
    }), () => {
      m = !1;
    };
  }, [h, S, a.data]);
  const [j, A] = L(""), [b, T] = L(null), [P, D] = L("asc"), [O, B] = L(!1), [J, R] = L({}), [V, z] = L({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [ne, W] = L({
    isOpen: !1,
    column: null
  }), [be, k] = L({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [ue, ye] = L(null), [ee, re] = L(null), [Ee, de] = L(null), M = 55, { offsets: se, lastFrozenKey: Ie } = We(() => Br(o, M), [o]), oe = We(() => {
    let m = [...I];
    if (j.trim()) {
      const $ = j.toLowerCase();
      m = m.filter(
        (F) => Object.values(F).some(
          (_) => String(_).toLowerCase().includes($)
        )
      );
    }
    return O && Object.entries(J).forEach(([$, F]) => {
      if (F && F.trim()) {
        const _ = F.toLowerCase().trim();
        m = m.filter((G) => {
          const X = G[$];
          return X != null && String(X).toLowerCase().includes(_);
        });
      }
    }), b && m.sort(($, F) => {
      const _ = $[b], G = F[b];
      if (_ === G) return 0;
      if (_ == null) return 1;
      if (G == null) return -1;
      let X = 0;
      return typeof _ == "number" && typeof G == "number" ? X = _ - G : X = String(_).localeCompare(String(G)), P === "asc" ? X : -X;
    }), m;
  }, [I, j, O, J, b, P]), Pe = (m) => {
    N(m), r(s.id, { data: m });
  }, Oe = (m) => {
    const $ = Wt(m);
    r(s.id, { columns: $ });
  }, w = (m, $, F) => {
    f && p(s.id, m, $, F);
    const G = (f && i && i[s.id] ? i[s.id] : I).map((X, ge) => X.id !== void 0 && X.id === m || X.id === void 0 && ge === m ? { ...X, [$]: F } : X);
    Pe(G), h && xe.getState().registerDataset(h, G);
  }, E = (m, $, F) => {
    const G = K.getState().features.find((Fe) => String(Fe.id) === String(s.pageId)), X = G == null ? void 0 : G.scriptFile, ge = (F == null ? void 0 : F.action) || m;
    let Se = !1;
    F != null && F.events && (Array.isArray(F.events) ? F.events : typeof F.events == "string" ? (() => {
      try {
        return JSON.parse(F.events);
      } catch {
        return [];
      }
    })() : []).forEach((Le) => {
      Se = !0, os(
        Le,
        F.title || F.key,
        X,
        { row: $, col: F, column: F, action: Le.action || Le.handlerName || ge, value: $[(F == null ? void 0 : F.key) || ""] }
      );
    }), !Se && ge && os(
      { id: `col_act_${(F == null ? void 0 : F.key) || m}`, trigger: "actionClick", action: ge, handlerName: ge },
      s.props.label || "Bảng dữ liệu",
      X,
      { row: $, col: F, column: F, action: ge, value: $[(F == null ? void 0 : F.key) || ""] }
    ), s.events && s.events.length > 0 && ke(s.events, "actionClick", s.props.label || "Bảng dữ liệu", X, {
      action: ge,
      row: $,
      col: F,
      column: F,
      colKey: F == null ? void 0 : F.key,
      value: $[(F == null ? void 0 : F.key) || ""]
    });
  }, [Q, me] = L(null), [ve, je] = L(/* @__PURE__ */ new Set()), ie = qe(null), le = (m, $, F = "info") => {
    const _ = document.createElement("div"), G = F === "success" ? "border-emerald-500 shadow-emerald-500/30" : F === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", X = F === "success" ? "⚡" : F === "warning" ? "⚠️" : "ℹ️", ge = F === "success" ? "bg-emerald-600/25 text-emerald-400" : F === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    _.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${G} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, _.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${ge} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${X}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${m}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${$}</div>
      </div>
    `, document.body.appendChild(_), setTimeout(() => {
      _.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => _.remove(), 300);
    }, 3800);
  }, Z = () => {
    if (ve.size === oe.length && oe.length > 0)
      je(/* @__PURE__ */ new Set()), le("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const m = new Set(oe.map(($, F) => $.id ?? $.Id ?? F));
      je(m), oe.length > 0 && me(oe[0].id ?? oe[0].Id ?? 0), le("F1 (Toggle All)", `Đã chọn tất cả ${m.size} dòng trong bảng`, "success");
    }
  }, te = () => {
    var G;
    let m = Me == null ? void 0 : Me.colKey, $ = (Me == null ? void 0 : Me.rowIndex) ?? 0;
    !m && l.length > 0 && (m = l[0].key);
    const F = oe[$], _ = F && m ? F[m] : null;
    if (_ != null && String(_).trim() !== "" && String(_) !== "—") {
      R((ge) => ({ ...ge, [m]: String(_) })), B(!0);
      const X = ((G = l.find((ge) => ge.key === m)) == null ? void 0 : G.title) || m;
      le("F2 (Lọc theo ô)", `Đã lọc cột [${X}] với giá trị "${_}"`, "success");
    } else
      B(!0), le("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Ne = () => {
    const m = ve.size > 0 ? oe.filter((_, G) => ve.has(_.id ?? _.Id ?? G)) : oe;
    if (m.length === 0) {
      le("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const $ = l.filter(
      (_) => _.componentType === "Number" || _.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (G) => _.key.toLowerCase().includes(G)
      )
    );
    if ($.length === 0) {
      le("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const F = $.map((_) => {
      const G = m.reduce((ge, Se) => {
        const Fe = Number(Se[_.key]);
        return ge + (isNaN(Fe) ? 0 : Fe);
      }, 0), X = G % 1 !== 0 ? G.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : G.toLocaleString("en-US");
      return `${_.title || _.key}: ${X}${_.summarySuffix ? ` ${_.summarySuffix}` : ""}`;
    });
    le(
      `F3 (Tổng ${m.length} dòng)`,
      F.join(" | "),
      "success"
    );
  }, Te = () => {
    Je();
    const m = oe.length;
    le("F4 (Thêm dòng)", `Đã thêm dòng mới số #${m + 1}`, "success"), setTimeout(() => {
      lt(m, 0);
    }, 60);
  }, De = () => {
    try {
      Vr({
        fileName: a.label ? String(a.label).replace(/\s+/g, "_") : "Du_Lieu_Bang",
        sheetName: a.label ? String(a.label).slice(0, 30) : "Sheet1",
        columns: l,
        rows: oe,
        includeSummary: !0
      }), le("Xuất Excel", `Đã xuất ${oe.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (m) {
      le("Lỗi xuất Excel", (m == null ? void 0 : m.message) || "Không thể tạo file Excel", "warning");
    }
  }, U = () => {
    try {
      const m = {};
      l.forEach(($) => {
        if ($.aggregate === "sum") {
          const F = oe.reduce((_, G) => _ + (Number(G[$.key]) || 0), 0);
          m[$.key] = F;
        } else $.aggregate === "count" && (m[$.key] = oe.length);
      }), Wr({
        title: a.label ? String(a.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${oe.length} bản ghi`,
        columns: l,
        rows: oe,
        summaryRow: Object.keys(m).length > 0 ? m : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${oe.length} dòng`,
          "Bộ lọc áp dụng": j ? `Tìm kiếm: "${j}"` : "Tất cả dữ liệu"
        }
      }), le("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (m) {
      le("Lỗi In Báo Cáo", (m == null ? void 0 : m.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, Y = async () => {
    if (A(""), R({}), h) {
      const m = await xe.getState().queryEntity(h, S);
      m && m.length > 0 && (N(m), le("Làm mới dữ liệu", `Đã tải lại ${m.length} bản ghi từ máy chủ`, "info"));
    }
  }, {
    focusedCell: Me,
    setFocusedCell: wt,
    focusCell: lt,
    handleTableContainerKeyDown: ot,
    handleCellKeyDown: Ct
  } = Ar({
    tableRef: ie,
    rows: oe,
    visibleColumns: l,
    selectedRowId: Q,
    setSelectedRowId: me,
    selectedRowIds: ve,
    setSelectedRowIds: je,
    onRowDoubleClick: (m, $) => it(m, $),
    onAddRow: Te,
    onDeleteRow: (m) => dt(m),
    onDuplicateRow: (m) => ct(m),
    onToggleAll: Z,
    onFilterByCell: te,
    onQuickSum: Ne,
    onToggleColumnFilters: () => B((m) => !m)
  }), kt = (m, $, F) => {
    const _ = m.id ?? m.Id ?? $;
    if (me(_), F != null && F.ctrlKey || F != null && F.metaKey)
      je((Se) => {
        const Fe = new Set(Se);
        return Fe.has(_) ? Fe.delete(_) : Fe.add(_), Fe;
      });
    else if (F != null && F.shiftKey && Q !== null) {
      const Se = oe.findIndex((Fe, Le) => (Fe.id ?? Fe.Id ?? Le) === Q);
      if (Se !== -1) {
        const Fe = Math.min(Se, $), Le = Math.max(Se, $), Ve = /* @__PURE__ */ new Set();
        for (let Ue = Fe; Ue <= Le; Ue++)
          Ve.add(oe[Ue].id ?? oe[Ue].Id ?? Ue);
        je(Ve);
      }
    } else
      je(/* @__PURE__ */ new Set([_]));
    const X = K.getState().features.find((Se) => String(Se.id) === String(s.pageId)), ge = X == null ? void 0 : X.scriptFile;
    h && xe.getState().setSelectedRecord(h, m), s.events && s.events.length > 0 && (ke(s.events, "rowClick", s.props.label || "Bảng dữ liệu", ge, {
      row: m,
      rowIndex: $,
      action: "rowClick"
    }), ke(s.events, "click", s.props.label || "Bảng dữ liệu", ge, {
      row: m,
      rowIndex: $,
      action: "click"
    }), ke(s.events, "select", s.props.label || "Bảng dữ liệu", ge, {
      row: m,
      rowIndex: $,
      action: "select"
    }));
  }, it = (m, $) => {
    const _ = K.getState().features.find((X) => String(X.id) === String(s.pageId)), G = _ == null ? void 0 : _.scriptFile;
    s.events && s.events.length > 0 && ke(s.events, "dblclick", s.props.label || "Bảng dữ liệu", G, {
      row: m,
      rowIndex: $,
      id: m.id ?? m.Id,
      action: "dblclick"
    });
  }, Je = () => {
    f && c(s.id);
    const m = f && i && i[s.id] ? i[s.id] : I, F = { id: m.length > 0 ? Math.max(...m.map((G) => Number(G.id) || 0)) + 1 : 1 };
    o.forEach((G) => {
      G.componentType === "Number" ? F[G.key] = 0 : G.componentType === "Checkbox" ? F[G.key] = !1 : G.componentType === "DatePicker" ? F[G.key] = "08/11/2026" : F[G.key] = "";
    });
    const _ = [...m, F];
    Pe(_), h && xe.getState().registerDataset(h, _);
  }, ct = (m) => {
    f && y(s.id, m);
    const $ = f && i && i[s.id] ? i[s.id] : I, F = $[m], _ = Math.max(...$.map((ge) => Number(ge.id) || 0)) + 1, G = { ...F, id: _ }, X = [...$];
    X.splice(m + 1, 0, G), Pe(X), h && xe.getState().registerDataset(h, X);
  }, dt = (m) => {
    f && d(s.id, m);
    const $ = f && i && i[s.id] ? i[s.id] : I;
    if ($.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const F = $.filter((_, G) => G !== m);
    Pe(F), h && xe.getState().registerDataset(h, F);
  }, St = (m, $, F) => {
    m.preventDefault(), m.stopPropagation(), k({
      isOpen: !0,
      x: m.clientX,
      y: m.clientY,
      row: $,
      rowIndex: F
    });
  }, Xe = (m) => {
    const $ = f && i && i[s.id] ? i[s.id] : I, _ = { id: $.length > 0 ? Math.max(...$.map((X) => Number(X.id) || 0)) + 1 : 1 };
    o.forEach((X) => {
      X.componentType === "Number" ? _[X.key] = 0 : X.componentType === "Checkbox" ? _[X.key] = !1 : (X.componentType, _[X.key] = "");
    });
    const G = [...$];
    G.splice(m + 1, 0, _), Pe(G), h && xe.getState().registerDataset(h, G);
  }, ut = (m) => {
    if (m <= 0) return;
    const F = [...f && i && i[s.id] ? i[s.id] : I], [_] = F.splice(m, 1);
    F.splice(m - 1, 0, _), Pe(F), h && xe.getState().registerDataset(h, F);
  }, He = (m) => {
    const $ = f && i && i[s.id] ? i[s.id] : I;
    if (m >= $.length - 1) return;
    const F = [...$], [_] = F.splice(m, 1);
    F.splice(m + 1, 0, _), Pe(F), h && xe.getState().registerDataset(h, F);
  }, Qe = (m, $) => {
    ye($), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", $);
  }, Ze = (m, $) => {
    if (m.preventDefault(), m.dataTransfer.dropEffect = "move", ue === $) return;
    const F = m.currentTarget.getBoundingClientRect(), _ = m.clientX < F.left + F.width / 2;
    re($), de(_ ? "left" : "right");
  }, pt = (m) => {
    const $ = m.relatedTarget;
    m.currentTarget.contains($) || (re(null), de(null));
  }, xt = (m, $) => {
    if (m.preventDefault(), !ue || ue === $) {
      ye(null), re(null), de(null);
      return;
    }
    const F = o.findIndex((X) => X.key === ue);
    let _ = o.findIndex((X) => X.key === $);
    if (F === -1 || _ === -1) {
      ye(null), re(null), de(null);
      return;
    }
    Ee === "right" && F > _ ? _ = _ + 1 : Ee === "left" && F < _ && (_ = _ - 1), _ = Math.max(0, Math.min(o.length - 1, _));
    const G = Es(o, F, _);
    Oe(G), ye(null), re(null), de(null);
  }, mt = () => {
    ye(null), re(null), de(null);
  }, ht = (m) => {
    m.sortable && (b === m.key ? P === "asc" ? D("desc") : T(null) : (T(m.key), D("asc")));
  }, bt = (m, $, F) => {
    m.preventDefault(), m.stopPropagation(), z({
      isOpen: !0,
      x: m.clientX,
      y: m.clientY,
      column: $,
      columnIndex: F
    });
  }, ft = (m) => {
    const $ = o.map(
      (F) => F.key === m ? { ...F, hidden: !F.hidden } : F
    );
    Oe($);
  }, Tt = (m) => {
    const $ = ya(o, m);
    Oe($);
  }, Dt = (m) => {
    W({
      isOpen: !0,
      column: m
    });
  }, gt = (m) => {
    const $ = o.findIndex((X) => X.key === m);
    if ($ === -1) return;
    const F = o[$], _ = {
      ...F,
      key: `${F.key}_copy`,
      title: `${F.title} (Bản sao)`,
      order: (F.order ?? $) + 1
    }, G = [...o];
    G.splice($ + 1, 0, _), Oe(G);
  }, yt = (m) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const $ = o.filter((F) => F.key !== m);
    Oe($);
  }, Ft = (m) => {
    const $ = o.map(
      (F) => F.key === m.key ? m : F
    );
    Oe($);
  }, { flex: At, flexGrow: Bt, flexShrink: Ot, flexBasis: v, minWidth: H, maxWidth: q, width: ae, ...he } = t || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...he
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: a.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              oe.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Jt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: j,
                  onChange: (m) => A(m.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => B((m) => !m),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${O ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Jn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Je,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: Y,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(Aa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: De,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Ba, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: U,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Un, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Z,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: te,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ne,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Te,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => B((m) => !m),
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
            ref: ie,
            tabIndex: 0,
            onKeyDown: ot,
            className: "w-full overflow-x-auto select-none relative focus:outline-none",
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: Z,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${M}px`, minWidth: `${M}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: oe.length > 0 && ve.size === oe.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((m, $) => {
                    const F = !!(m.frozen || m.sticky === "left"), _ = F && se[m.key] !== void 0 ? se[m.key] : void 0, G = m.key === Ie, X = ue === m.key, ge = ee === m.key;
                    let Se = "";
                    ge && Ee === "left" ? Se = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : ge && Ee === "right" && (Se = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const Fe = m.align === "right" ? "text-right" : m.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Le) => Qe(Le, m.key),
                        onDragOver: (Le) => Ze(Le, m.key),
                        onDragLeave: pt,
                        onDrop: (Le) => xt(Le, m.key),
                        onDragEnd: mt,
                        onContextMenu: (Le) => bt(Le, m, $),
                        onClick: () => ht(m),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${Fe} ${F ? `sticky z-20 bg-[#0b1329] ${G ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${X ? "opacity-30 bg-slate-800/80" : ""} ${Se}`,
                        style: {
                          width: m.width,
                          minWidth: m.minWidth || m.width || "100px",
                          maxWidth: m.maxWidth,
                          left: _ !== void 0 ? `${_}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${m.order ?? $ + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${m.align === "right" ? "justify-end" : m.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            F && /* @__PURE__ */ e.jsx(zn, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: m.title || m.key }),
                            m.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              m.order
                            ] })
                          ] }),
                          m.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: b === m.key ? P === "asc" ? /* @__PURE__ */ e.jsx(Qn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Zn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Ms, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      m.key
                    );
                  })
                ] }),
                O && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((m) => {
                    const $ = !!(m.frozen || m.sticky === "left"), F = $ && se[m.key] !== void 0 ? se[m.key] : void 0, _ = m.key === Ie;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${$ ? `sticky z-20 bg-[#080d1a] ${_ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: F !== void 0 ? `${F}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: J[m.key] || "",
                            onChange: (G) => R((X) => ({ ...X, [m.key]: G.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${m.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: oe.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                "td",
                {
                  colSpan: l.length + 1,
                  className: "px-6 py-8 text-center text-slate-500 italic",
                  children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                }
              ) }) : oe.map((m, $) => /* @__PURE__ */ e.jsxs(
                "tr",
                {
                  "data-row-index": $,
                  onClick: (F) => kt(m, $, F),
                  onDoubleClick: () => it(m, $),
                  onContextMenu: (F) => St(F, m, $),
                  className: `transition-colors group cursor-pointer ${Q === (m.id ?? m.Id ?? $) || ve.has(m.id ?? m.Id ?? $) ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        onClick: (F) => {
                          F.stopPropagation();
                          const _ = m.id ?? m.Id ?? $;
                          je((G) => {
                            const X = new Set(G);
                            return X.has(_) ? X.delete(_) : X.add(_), X;
                          }), me(_);
                        },
                        className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${ve.has(m.id ?? m.Id ?? $) ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
                        style: { width: `${M}px`, minWidth: `${M}px` },
                        title: "Click chọn dòng | Chuột phải mở menu thao tác",
                        children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                          ve.has(m.id ?? m.Id ?? $) ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                          /* @__PURE__ */ e.jsx("span", { children: $ + 1 })
                        ] })
                      }
                    ),
                    l.map((F, _) => {
                      const G = !!(F.frozen || F.sticky === "left"), X = G && se[F.key] !== void 0 ? se[F.key] : void 0, ge = F.key === Ie, Se = m[F.key], Fe = F.align === "right" ? "text-right" : F.align === "center" ? "text-center" : "text-left", Le = u[`${s.id}_${m.id}_${F.key}`];
                      return /* @__PURE__ */ e.jsx(
                        "td",
                        {
                          className: `px-2 py-1 whitespace-nowrap transition-colors ${Fe} ${G ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${ge ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                          style: {
                            width: F.width,
                            minWidth: F.minWidth || F.width || "100px",
                            maxWidth: F.maxWidth,
                            left: X !== void 0 ? `${X}px` : void 0
                          },
                          children: /* @__PURE__ */ e.jsx(
                            $r,
                            {
                              column: F,
                              value: Se,
                              row: m,
                              rowIndex: $,
                              columnIndex: _,
                              error: Le,
                              onChange: (Ve) => w(m.id ?? $, F.key, Ve),
                              onActionClick: (Ve) => E(Ve, m, F),
                              onKeyDown: Ct,
                              onFocus: (Ve, Ue, Qt) => {
                                me(m.id ?? m.Id ?? Ve), wt({ rowIndex: Ve, colIndex: Ue, colKey: Qt });
                              }
                            }
                          )
                        },
                        F.key
                      );
                    })
                  ]
                },
                m.id || $
              )) }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Er,
                {
                  columns: l,
                  data: oe,
                  showRowNumber: !0,
                  rowNumberWidth: M,
                  leftOffsets: se
                }
              ) })
            ] })
          }
        ),
        V.isOpen && V.column && /* @__PURE__ */ e.jsx(
          Rr,
          {
            isOpen: V.isOpen,
            x: V.x,
            y: V.y,
            column: V.column,
            columnIndex: V.columnIndex,
            allColumns: o,
            onClose: () => z((m) => ({ ...m, isOpen: !1 })),
            onToggleHide: ft,
            onSetFreeze: Tt,
            onOpenProperties: Dt,
            onCloneColumn: gt,
            onRemoveColumn: yt,
            onToggleFilter: () => B((m) => !m)
          }
        ),
        ne.isOpen && ne.column && /* @__PURE__ */ e.jsx(
          fa,
          {
            isOpen: ne.isOpen,
            column: ne.column,
            onClose: () => W({ isOpen: !1, column: null }),
            onSave: Ft
          }
        ),
        be.isOpen && be.row && /* @__PURE__ */ e.jsx(
          Pr,
          {
            isOpen: be.isOpen,
            x: be.x,
            y: be.y,
            row: be.row,
            rowIndex: be.rowIndex,
            totalRows: x.length,
            onClose: () => k((m) => ({ ...m, isOpen: !1, row: null })),
            onDuplicateRow: ct,
            onDeleteRow: dt,
            onInsertRowBelow: Xe,
            onMoveRowUp: ut,
            onMoveRowDown: He
          }
        )
      ]
    }
  );
}, Dl = ({ node: s }) => {
  const { props: a, style: t } = s, { flex: r, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: p, width: c, ...d } = t || {}, y = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], u = a.columns && a.columns.length > 0 ? a.columns : y, f = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [h, S] = L(""), [g, x] = L(null), [N, I] = L("asc"), [j, A] = L(1), b = Number(a.pageSize) || 10, T = We(() => {
    if (!h.trim()) return f;
    const R = h.toLowerCase();
    return f.filter(
      (V) => Object.values(V).some((z) => String(z).toLowerCase().includes(R))
    );
  }, [h]), P = We(() => g ? [...T].sort((R, V) => {
    const z = R[g], ne = V[g];
    if (z === ne) return 0;
    const W = z > ne ? 1 : -1;
    return N === "asc" ? W : -W;
  }) : T, [T, g, N]), D = Math.ceil(P.length / b) || 1, O = We(() => {
    const R = (j - 1) * b;
    return P.slice(R, R + b);
  }, [P, j, b]), B = We(() => {
    const R = {};
    for (const V of u)
      if (V.aggregate === "sum") {
        const z = T.reduce((ne, W) => ne + (Number(W[V.key]) || 0), 0);
        R[V.key] = z.toLocaleString("en-US");
      } else if (V.aggregate === "count")
        R[V.key] = T.length;
      else if (V.aggregate === "avg") {
        const z = T.length ? T.reduce((ne, W) => ne + (Number(W[V.key]) || 0), 0) / T.length : 0;
        R[V.key] = z.toFixed(1);
      }
    return R;
  }, [u, T]), J = (R) => {
    g === R ? I(N === "asc" ? "desc" : "asc") : (x(R), I("asc"));
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...d
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            a.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: a.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              T.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Jt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: h,
                onChange: (R) => {
                  S(R.target.value), A(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((R) => {
            const V = R.sticky === "left", z = R.align === "right" ? "text-right" : R.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => R.sortable !== !1 && J(R.key),
                style: {
                  width: R.width,
                  minWidth: R.minWidth || R.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${z} ${V ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${R.align === "right" ? "justify-end" : R.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  R.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: R.title }),
                  R.sortable !== !1 && /* @__PURE__ */ e.jsx(Ms, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              R.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: O.length > 0 ? O.map((R, V) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: u.map((z) => {
            const ne = z.sticky === "left", W = R[z.key], be = z.align === "right" ? "text-right" : z.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${be} ${ne ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (W == null) return "—";
                  if (z.componentType === "Checkbox") {
                    const k = W === !0 || W === "true" || W === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: k,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (z.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(W)
                      }
                    );
                  if (z.componentType === "DatePicker" || z.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(W) })
                    ] });
                  if (z.componentType === "Number" || typeof W == "number") {
                    const k = Number(W);
                    if (!isNaN(k)) {
                      const ue = z.precision !== void 0 ? z.precision : k % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: k.toLocaleString("en-US", { minimumFractionDigits: ue, maximumFractionDigits: ue }) });
                    }
                  }
                  return z.key === "status" || z.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${W === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(W) }) : String(W);
                })()
              },
              z.key
            );
          }) }, R.id || V)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: u.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((R, V) => {
            const z = R.sticky === "left", ne = R.align === "right" ? "text-right" : R.align === "center" ? "text-center" : "text-left", W = B[R.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${ne} ${z ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: V === 0 && !W ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : W !== void 0 ? W : ""
              },
              R.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            j,
            " / ",
            D
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: j <= 1,
                onClick: () => A((R) => Math.max(1, R - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Oa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: j >= D,
                onClick: () => A((R) => Math.min(D, R + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Gr = ({ node: s, isEditing: a }) => {
  var ne, W, be, k, ue, ye, ee, re, Ee, de;
  const { props: t, style: r } = s, n = K((M) => M.features), o = K((M) => M.activeFeatureId), l = n.find((M) => String(M.id) === String(s.pageId)) || n.find((M) => String(M.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((ne = s.dataBinding) == null ? void 0 : ne.fieldName) || s.props.name || s.id), N = xe((M) => Ye(M, g, x, void 0)), I = xe((M) => M.setFieldValue), j = xe((M) => M.applyPopulate), A = xe((M) => M.queryReference), b = N !== void 0 ? N : t.value ?? "", [T, P] = L([]), D = t.reference || t.refName || ((W = s.dataBinding) == null ? void 0 : W.refName) || ((be = s.dataBinding) == null ? void 0 : be.entityName) || "", O = t.query || ((k = s.dataBinding) == null ? void 0 : k.query) || t.dataSource || ((ue = s.dataBinding) == null ? void 0 : ue.dataSource) || t.sqlWhere || ((ye = s.dataBinding) == null ? void 0 : ye.sqlWhere) || "", B = t.idField || ((ee = s.dataBinding) == null ? void 0 : ee.idField) || "id", J = t.textField || t.selectField || ((re = s.dataBinding) == null ? void 0 : re.selectField) || t.fieldName || ((Ee = s.dataBinding) == null ? void 0 : Ee.fieldName) || "name", R = t.populateField || ((de = s.dataBinding) == null ? void 0 : de.populateField) || "";
  Ae(() => {
    let M = !0;
    return D && A(D, O, B, J).then((se) => {
      M && P(se);
    }), () => {
      M = !1;
    };
  }, [D, O, B, J, A]);
  const V = T.length > 0 ? T : t.options || [], z = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    jt,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            disabled: t.disabled,
            value: b,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 transition-all appearance-none cursor-pointer disabled:opacity-50 ${z ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (M) => {
              const se = M.target.value;
              I(g, x, se);
              const Ie = V.find((Pe) => String(Pe.value) === String(se)), oe = (Ie == null ? void 0 : Ie.rawItem) || Ie;
              R && typeof R == "string" && j(g, R, oe), a || ke(s.events, "change", t.label || "Chọn mục", i, {
                componentId: s.id,
                fieldName: x,
                value: se,
                selectedItem: oe
              });
            },
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn --" }),
              V.map((M) => /* @__PURE__ */ e.jsx("option", { value: M.value, className: "bg-slate-900 text-slate-100 py-1", children: M.label }, M.value))
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(cs, { className: "w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" })
      ] })
    }
  );
}, Ur = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = K((N) => N.features), o = K((N) => N.activeFeatureId), l = n.find((N) => String(N.id) === String(s.pageId)) || n.find((N) => String(N.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, [g, x] = L(!!t.value);
  return /* @__PURE__ */ e.jsx(
    jt,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: t.disabled,
            checked: g,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (N) => {
              x(N.target.checked), a || ke(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: N.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, zr = ({ node: s, isEditing: a }) => {
  var b;
  const { props: t, style: r } = s, n = K((T) => T.features), o = K((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((b = s.dataBinding) == null ? void 0 : b.fieldName) || s.props.name || s.id), N = xe((T) => Ye(T, g, x, void 0)), I = xe((T) => T.setFieldValue), j = N !== void 0 ? N : t.value ?? "", A = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    jt,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            disabled: t.disabled,
            readOnly: a || !!t.readOnly,
            placeholder: "DD/MM/YYYY",
            value: j,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${A ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (T) => {
              const P = T.target.value;
              I(g, x, P), a || ke(s.events, "change", t.label || "Chọn ngày", i, {
                componentId: s.id,
                fieldName: x,
                value: P
              });
            }
          }
        ),
        /* @__PURE__ */ e.jsx(_s, { className: "w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" })
      ] })
    }
  );
}, qr = ({ node: s, children: a }) => {
  const { props: t } = s, r = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(rt, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: a || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, Yr = ({ node: s }) => {
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
}, Jr = ({ node: s, isEditing: a }) => {
  var T;
  const { props: t, style: r } = s, n = K((P) => P.features), o = K((P) => P.activeFeatureId), l = n.find((P) => String(P.id) === String(s.pageId)) || n.find((P) => String(P.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((T = s.dataBinding) == null ? void 0 : T.fieldName) || s.props.name || s.id), N = xe((P) => Ye(P, g, x, void 0)), I = xe((P) => P.setFieldValue), j = N !== void 0 ? N : t.value !== void 0 ? String(t.value) : "", A = Number(t.rows) || 2, b = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    jt,
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
          rows: A,
          placeholder: t.placeholder || "Nhập nội dung...",
          value: j,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          style: {
            width: "100%",
            ...S
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${b ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (P) => {
            const D = P.target.value;
            I(g, x, D), a || ke(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x,
              value: D
            });
          },
          onFocus: () => {
            a || ke(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x
            });
          },
          onBlur: (P) => {
            a || ke(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: x,
              value: P.target.value
            });
          }
        }
      )
    }
  );
}, Fl = ({ node: s, isEditing: a, children: t }) => {
  var I, j;
  const { props: r, style: n } = s, o = K((A) => A.updateComponentProps), { flex: l, flexGrow: i, flexShrink: p, flexBasis: c, minWidth: d, maxWidth: y, width: u, ...f } = n || {}, h = [
    { id: "main", label: "TAB 1" }
  ], S = r.tabs || h, [g, x] = L(
    r.activeTabId || ((I = S[0]) == null ? void 0 : I.id) || "main"
  ), N = r.activeTabId || g || ((j = S[0]) == null ? void 0 : j.id) || "main";
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
          S.map((A) => {
            const b = A.id === N;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (T) => {
                  T.stopPropagation(), x(A.id), o(s.id, { activeTabId: A.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${b ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: A.label }),
                  A.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${A.badgeColor || "bg-amber-600"}`, children: A.badge })
                ]
              },
              A.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (A) => {
                A.stopPropagation();
                const b = `tab_${Date.now().toString(36)}`, T = [...S, { id: b, label: `Tab Mới ${S.length + 1}` }];
                o(s.id, { tabs: T, activeTabId: b }), x(b);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: t })
      ]
    }
  );
}, Na = ({
  parentId: s,
  order: a,
  tabNodes: t,
  isEditing: r,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var f;
  const l = K((h) => h.addComponent), i = K((h) => h.selectComponent), [p, c] = L(((f = t[0]) == null ? void 0 : f.id) || ""), d = t.find((h) => h.id === p) || t[0], y = (d == null ? void 0 : d.id) || "", u = (h) => {
    var N;
    h.stopPropagation();
    const S = ((N = t[0]) == null ? void 0 : N.pageId) || "2", g = `tab_${Date.now().toString(36)}`, x = {
      id: g,
      type: "Container",
      parentId: s,
      pageId: S,
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
    l(x, s), c(g), i(g);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((h) => {
            const S = h.id === y, g = h.props.label || h.props.title || `Tab #${h.id.slice(-4)}`, x = h.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (N) => {
                  N.stopPropagation(), c(h.id), r && i(h.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${S ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: g }),
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
              onClick: u,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: d && o ? o(d, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, Xr = ({
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
  var N;
  const d = xe(), y = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [u, f] = L(r || y), [h, S] = L(n || ((N = y[0]) == null ? void 0 : N.id) || "");
  Ae(() => {
    r && r.length > 0 && f(r);
  }, [r]), Ae(() => {
    n !== void 0 && S(n);
  }, [n]);
  const g = (I) => {
    S(I.id), l ? l(I) : d.setFormRecord("default", I);
  }, x = () => {
    const I = u.length + 1, j = `REC-${String(I).padStart(3, "0")}`, A = {
      id: String(Date.now()),
      code: j,
      name: `Bản ghi mới ${I}`
    }, b = [...u, A];
    f(b), S(A.id), i ? i() : d.setFormRecord("default", A);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${p}`,
      style: c,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(ta, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          u.map((I) => {
            const j = String(I.id) === String(h), A = I[t] || I.code || I.name || I.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => g(I),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${j ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: A })
              },
              I.id
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
                /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Qr = ({
  isOpen: s,
  title: a,
  entityName: t,
  columns: r,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = xe(), p = xe((b) => b.datasets[t]), [c, d] = L([]), [y, u] = L(!1), [f, h] = L(""), [S, g] = L(0), x = qe(null);
  Ae(() => {
    if (!s) {
      h(""), g(0);
      return;
    }
    Array.isArray(p) && p.length > 0 ? d(p) : (u(!0), i.queryEntity(t).then((b) => {
      Array.isArray(b) && b.length > 0 ? d(b) : d(i.getDataset(t) || []);
    }).finally(() => u(!1))), setTimeout(() => {
      var b, T;
      (b = x.current) == null || b.focus(), (T = x.current) == null || T.select();
    }, 80);
  }, [s, t, p]);
  const N = We(() => {
    if (r && r.length > 0) return r;
    if (c.length > 0) {
      const b = c[0], T = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(b).filter((P) => !T.includes(P.toLowerCase()) && typeof b[P] != "object").slice(0, 6).map((P) => ({
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
  }, [r, c]), I = We(() => {
    if (!f.trim()) return c;
    const b = f.toLowerCase().trim();
    return c.filter((T) => n && n.length > 0 ? n.some((P) => {
      const D = T[P];
      return D != null && String(D).toLowerCase().includes(b);
    }) : Object.values(T).some(
      (P) => P != null && String(P).toLowerCase().includes(b)
    ));
  }, [c, f, n]);
  Ae(() => {
    S >= I.length && g(Math.max(0, I.length - 1));
  }, [I.length]);
  const j = (b) => {
    b.key === "ArrowDown" ? (b.preventDefault(), g((T) => T < I.length - 1 ? T + 1 : T)) : b.key === "ArrowUp" ? (b.preventDefault(), g((T) => T > 0 ? T - 1 : 0)) : b.key === "Enter" ? (b.preventDefault(), I[S] && (o(I[S]), l())) : b.key === "Escape" && (b.preventDefault(), l());
  };
  if (!s) return null;
  const A = a || `Tra cứu danh mục: ${t}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: j,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(Ds, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: A }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                I.length,
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
              children: /* @__PURE__ */ e.jsx(rt, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Jt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: x,
              type: "text",
              value: f,
              onChange: (b) => {
                h(b.target.value), g(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${t}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: y ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : I.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          f,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            N.map((b) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: b.width },
                children: b.title || b.key
              },
              b.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: I.map((b, T) => {
            const P = T === S;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => g(T),
                onDoubleClick: () => {
                  o(b), l();
                },
                className: `transition-colors cursor-pointer ${P ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: T + 1 }),
                  N.map((D) => {
                    const O = b[D.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: O != null ? String(O) : "—"
                      },
                      D.key
                    );
                  })
                ]
              },
              b.id ?? b.Id ?? T
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
                disabled: I.length === 0,
                onClick: () => {
                  I[S] && (o(I[S]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(sa, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, Zr = ({ node: s, isEditing: a }) => {
  var ne, W, be, k, ue, ye;
  const { props: t, style: r } = s, n = K((ee) => ee.features), o = K((ee) => ee.activeFeatureId), l = n.find((ee) => String(ee.id) === String(s.pageId)) || n.find((ee) => String(ee.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: h, ...S } = r || {}, g = String(s.pageId || o || "default"), x = String(((ne = s.dataBinding) == null ? void 0 : ne.fieldName) || s.props.name || s.id), N = xe((ee) => Ye(ee, g, x, void 0)), I = xe((ee) => ee.setFieldValue), j = xe((ee) => ee.applyPopulate), [A, b] = L(!1), T = N !== void 0 ? N : t.value ?? "", P = !!t.validationError, D = String(
    t.reference || t.refName || ((W = s.dataBinding) == null ? void 0 : W.refName) || ((be = s.dataBinding) == null ? void 0 : be.entityName) || ""
  ), O = String(
    t.displayField || t.selectField || ((k = s.dataBinding) == null ? void 0 : k.selectField) || "code"
  ), B = String(
    t.valueField || t.idField || ((ue = s.dataBinding) == null ? void 0 : ue.idField) || "code"
  ), J = String(
    t.populateRule || t.populateField || ((ye = s.dataBinding) == null ? void 0 : ye.populateField) || ""
  ), R = () => {
    if (!(t.disabled || a)) {
      if (!D) {
        console.warn(`[ForgeSearchEntry] Component ${s.id} chưa cấu hình reference entity`);
        return;
      }
      b(!0);
    }
  }, V = (ee) => {
    const re = ee[B] ?? ee[O] ?? ee.code ?? ee.id;
    ee[O] ?? ee.name, I(g, x, re), J && j(g, J, ee), a || (ke(s.events, "change", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: x,
      value: re,
      selectedItem: ee
    }), ke(s.events, "select", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: x,
      value: re,
      selectedItem: ee
    }));
  }, z = (ee) => {
    ee.key === "F1" && (ee.preventDefault(), ee.stopPropagation(), R());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      jt,
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
          ...S
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: t.disabled,
              readOnly: a || !!t.readOnly,
              placeholder: t.placeholder || (D ? `Tra cứu ${D} (F1)...` : "Nhập dữ liệu..."),
              value: T,
              onKeyDown: z,
              onDoubleClick: R,
              className: `w-full pl-3 pr-8 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (ee) => {
                const re = ee.target.value;
                I(g, x, re), a || ke(s.events, "change", t.label || "Ô tra cứu", i, {
                  componentId: s.id,
                  fieldName: x,
                  value: re
                });
              }
            }
          ),
          D && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              disabled: t.disabled || a,
              onClick: R,
              title: `Tra cứu ${D} (Nhấn F1 hoặc nhấp đúp)`,
              className: "absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
              children: /* @__PURE__ */ e.jsx(Jt, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      }
    ),
    D && /* @__PURE__ */ e.jsx(
      Qr,
      {
        isOpen: A,
        title: `Tra cứu danh mục: ${t.label || D}`,
        entityName: D,
        columns: t.columns,
        onSelect: V,
        onClose: () => b(!1)
      }
    )
  ] });
}, el = ({
  node: s,
  isEditing: a,
  label: t,
  files: r,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var O;
  const p = Kn(), c = qe(null), [d, y] = L(!1), [u, f] = L(null), [h, S] = L(null), [g, x] = L([
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
  ]), N = r ?? g, I = (B) => {
    r || x(B), n == null || n(B);
  }, j = (B) => B < 1024 ? `${B} B` : B < 1024 * 1024 ? `${(B / 1024).toFixed(1)} KB` : `${(B / (1024 * 1024)).toFixed(2)} MB`, A = (B) => B.startsWith("image/") ? /* @__PURE__ */ e.jsx(_a, { className: "w-4 h-4 text-emerald-400" }) : B.includes("pdf") ? /* @__PURE__ */ e.jsx(Kt, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(Ma, { className: "w-4 h-4 text-blue-400" }), b = (B) => {
    if (!B || B.length === 0) return;
    const J = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(B).forEach((R) => {
      if (R.size > l * 1024 * 1024) {
        alert(`Tệp "${R.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const V = new FileReader(), z = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      V.onload = () => {
        const ne = {
          id: z,
          fileName: R.name,
          fileSize: R.size,
          fileType: R.type || "application/octet-stream",
          uploadedDate: J,
          uploadedBy: "User",
          dataUrl: V.result
        };
        I([...N, ne]);
      }, V.readAsDataURL(R);
    });
  }, T = (B, J) => {
    if (J == null || J.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const R = N.filter((V) => V.id !== B);
      I(R), u === B && f(null);
    }
  }, P = (B, J) => {
    if (J == null || J.stopPropagation(), !B.dataUrl) {
      alert(`Đang tải file mẫu: ${B.fileName}`);
      return;
    }
    const R = document.createElement("a");
    R.href = B.dataUrl, R.download = B.fileName, document.body.appendChild(R), R.click(), document.body.removeChild(R);
  }, D = t || ((O = s == null ? void 0 : s.props) == null ? void 0 : O.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(na, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: D }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          N.length,
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
            onChange: (B) => b(B.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var B;
              return (B = c.current) == null ? void 0 : B.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(In, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (B) => {
          B.preventDefault(), y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (B) => {
          B.preventDefault(), y(!1), b(B.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${d ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var B;
          return (B = c.current) == null ? void 0 : B.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(In, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: N.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : N.map((B, J) => {
        const R = u === B.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => f(B.id),
            className: `transition-colors cursor-pointer ${R ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: J + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                A(B.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: B.fileName, children: B.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: j(B.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: B.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: B.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => {
                      V.stopPropagation(), S(B);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(Os, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => P(B, V),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(ys, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (V) => T(B.id, V),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          B.id
        );
      }) })
    ] }) }),
    h && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => S(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (B) => B.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  A(h.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: h.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    j(h.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (B) => P(h, B),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(ys, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => S(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(rt, { className: "w-4 h-4" })
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
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: A(h.fileType) }),
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
                    onClick: (B) => P(h, B),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(ys, { className: "w-4 h-4" }),
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
}, tl = ({
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
  placeholder: d,
  disabled: y = !1
}) => {
  const u = qe(null), f = qe(null), h = Kn(), S = String((s == null ? void 0 : s.pageId) || "default"), g = (s == null ? void 0 : s.props) || {}, x = g.dataBinding || g.fieldName || ((s == null ? void 0 : s.id) ?? ""), N = xe((M) => Ye(M, S, x, void 0)), I = xe((M) => M.setFieldValue), j = xe((M) => M.applyPopulate), A = xe((M) => M.getDataset), b = t ?? g.label ?? "Gợi ý tự động (Autocomplete)", T = l ?? g.reference, P = i ?? g.displayField ?? "name", D = p ?? g.valueField ?? "code", O = c ?? g.sublabelField, B = d ?? g.placeholder ?? "Gõ để tìm kiếm...", J = String(g.populateRule || ""), R = N ?? r ?? "", [V, z] = L(String(R)), [ne, W] = L(!1), [be, k] = L(-1);
  Ae(() => {
    R != null && z(String(R));
  }, [R]);
  const ee = (o && o.length > 0 ? o : T ? (A(T) || []).map((se) => ({
    value: se[D] ?? se.id ?? se.code ?? "",
    label: String(se[P] ?? se.name ?? se.title ?? se.code ?? ""),
    sublabel: O ? String(se[O] ?? "") : void 0,
    raw: se
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((M) => {
    if (!V || V.trim() === "") return !0;
    const se = V.toLowerCase().trim();
    return M.label.toLowerCase().includes(se) || String(M.value).toLowerCase().includes(se) || M.sublabel && M.sublabel.toLowerCase().includes(se);
  });
  Ae(() => {
    const M = (se) => {
      u.current && !u.current.contains(se.target) && W(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, []);
  const re = (M) => {
    z(M.label), W(!1), k(-1), n == null || n(M.value, M.raw), x && I(S, x, M.value), M.raw && J && j(S, J, M.raw);
  }, Ee = (M) => {
    if (!ne && (M.key === "ArrowDown" || M.key === "ArrowUp")) {
      W(!0);
      return;
    }
    M.key === "ArrowDown" ? (M.preventDefault(), k(
      (se) => se < ee.length - 1 ? se + 1 : 0
    )) : M.key === "ArrowUp" ? (M.preventDefault(), k(
      (se) => se > 0 ? se - 1 : ee.length - 1
    )) : M.key === "Enter" ? ne && be >= 0 && be < ee.length && (M.preventDefault(), re(ee[be])) : M.key === "Escape" && (W(!1), k(-1));
  }, de = (M) => {
    var se;
    M.stopPropagation(), z(""), x && I(S, x, ""), n == null || n(""), (se = f.current) == null || se.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: u, className: "relative w-full text-xs", children: [
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
          ref: f,
          type: "text",
          disabled: y,
          value: V,
          placeholder: B,
          onFocus: () => W(!0),
          onChange: (M) => {
            z(M.target.value), W(!0), k(0), x && I(S, x, M.target.value);
          },
          onKeyDown: Ee,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        V && !y && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: de,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(rt, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var M;
              W(!ne), (M = f.current) == null || M.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              cs,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${ne ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    ne && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: ee.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      V,
      '"'
    ] }) : ee.map((M, se) => {
      const Ie = be === se, oe = String(M.value) === String(R);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => k(se),
          onClick: () => re(M),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${Ie ? "bg-blue-600/25 text-blue-200" : oe ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: M.label }),
              (M.sublabel || M.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                M.sublabel ? `${M.sublabel} • ` : "",
                M.value
              ] })
            ] }),
            oe && /* @__PURE__ */ e.jsx(sa, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${M.value}-${se}`
      );
    }) })
  ] });
};
function ja(s) {
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
const Vs = Yt()(
  Nr(
    (s) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: a, branch: t, user: r }) => s({ token: a, branch: t, user: r }),
      logout: () => s({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), ss = ({ node: s, isEditing: a, children: t }) => {
  var c, d, y, u, f;
  const r = Vs((h) => h.user), n = (r == null ? void 0 : r.role) || "User", o = s.permissions;
  if (!o || !((c = o.allowedRoles) != null && c.length) && !((d = o.readOnlyRoles) != null && d.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
  if (a)
    return !((y = o.allowedRoles) != null && y.length || (u = o.readOnlyRoles) != null && u.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: t }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      t,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((f = o.allowedRoles) == null ? void 0 : f.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, p = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((S) => S.toLowerCase() === n.toLowerCase()) ? p === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: t }) : null : i && i.length > 0 && i.some((S) => S.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: t }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
};
function wa(s, a) {
  var y, u;
  const t = s.style || {}, r = ((y = s.props) == null ? void 0 : y.colSpan) !== void 0 && ((u = s.props) == null ? void 0 : u.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, p;
  const c = (a == null ? void 0 : a.mode) || "grid", d = (a == null ? void 0 : a.gridColumns) || 12;
  if (c === "grid") {
    let f;
    if (r !== void 0 && !isNaN(r) && r > 0)
      f = Math.min(r, d);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const h = Number(a.columnsPerRow);
      !isNaN(h) && h > 0 ? f = Math.max(1, Math.floor(d / h)) : f = Math.min(4, d);
    } else
      f = Math.min(4, d);
    p = `span ${f} / span ${f}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const f = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const S = Math.min(100, Math.max(2, r / d * 100)), g = r >= d ? "100%" : `calc(${S}% - ${Math.round(f * (1 - r / d))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = g, l = g, o = `0 0 ${g}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const S = Number(a.columnsPerRow);
        if (!isNaN(S) && S > 0) {
          const g = S === 1 ? "100%" : `calc((100% - ${(S - 1) * f}px) / ${S})`;
          t.width === void 0 && t.flex === void 0 && (n = g, l = g, o = `0 0 ${g}`);
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
const zt = ({
  node: s,
  isEditing: a = !1,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = K((g) => g.selection), p = K((g) => g.selectComponent), c = a && i.componentId === s.id, d = (g) => {
    a && (g.stopPropagation(), p(s.id));
  }, y = (g) => {
    a && (g.preventDefault(), g.stopPropagation(), p(s.id), t && t(g, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const g = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), x = s.props.flexConfig || {}, N = s.props.gridConfig || {}, I = {
      direction: x.direction || "row",
      wrap: x.wrap || "wrap",
      gap: x.gap || "12px",
      columnsPerRow: x.columnsPerRow || "auto"
    }, j = Number(
      N.columns || (typeof x.columnsPerRow == "number" ? x.columnsPerRow : 12)
    ) || 12, A = {
      mode: g === "flex" ? "flex" : "grid",
      direction: x.direction || "row",
      columnsPerRow: x.columnsPerRow || "auto",
      gap: x.gap || N.gap || "12px",
      wrap: x.wrap || "wrap",
      gridColumns: j
    }, b = () => {
      const T = s.children || [];
      return T.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : ja(T).map((D, O) => {
        if (D.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            Na,
            {
              parentId: s.id,
              order: D.order,
              tabNodes: D.nodes,
              isEditing: a,
              parentFlexConfig: I,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${D.order}_${O}`
          );
        const B = D.node;
        return l ? /* @__PURE__ */ e.jsx(qt.Fragment, { children: l(B, A) }, B.id) : /* @__PURE__ */ e.jsx(
          zt,
          {
            node: B,
            isEditing: a,
            onContextMenu: t,
            parentLayout: A,
            isWrappedByDrag: !1
          },
          B.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(ss, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx("div", { onClick: d, onContextMenu: y, className: "w-full", children: /* @__PURE__ */ e.jsx(Ir, { node: s, isEditing: a, children: b() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(ss, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      Bn,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: d,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: b()
      }
    ) }) : /* @__PURE__ */ e.jsx(ss, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      Bn,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: d,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: b()
      }
    ) });
  }
  const u = () => {
    var g, x, N, I, j, A;
    switch (s.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(Cr, { node: s, isEditing: a });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(Tr, { node: s, isEditing: a });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(Jr, { node: s, isEditing: a });
      case "Number":
        return /* @__PURE__ */ e.jsx(Dr, { node: s, isEditing: a });
      case "Label":
        return /* @__PURE__ */ e.jsx(Fr, { node: s, isEditing: a });
      case "Table":
        return /* @__PURE__ */ e.jsx(Kr, { node: s, isEditing: a });
      case "Select":
        return /* @__PURE__ */ e.jsx(Gr, { node: s, isEditing: a });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(Ur, { node: s, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(zr, { node: s, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx(Yr, { node: s, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(qr, { node: s, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Xr,
          {
            label: ((g = s.props) == null ? void 0 : g.label) ?? "Lô hàng:",
            reference: ((x = s.props) == null ? void 0 : x.reference) ?? "Transaction",
            displayField: ((N = s.props) == null ? void 0 : N.displayField) ?? "code",
            records: (I = s.props) == null ? void 0 : I.records,
            activeId: (j = s.props) == null ? void 0 : j.activeId,
            canAdd: ((A = s.props) == null ? void 0 : A.canAdd) !== !1,
            style: s.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(Zr, { node: s, isEditing: a });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(el, { node: s, isEditing: a });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(tl, { node: s, isEditing: a });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          s.type
        ] });
    }
  }, f = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), h = wa(s, f), S = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...h,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(ss, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: d,
      onContextMenu: y,
      style: S,
      className: `relative group transition-all duration-150 box-border ${a ? `cursor-pointer rounded-lg ${c ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && c && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: s.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            s.id.slice(-4)
          ] })
        ] }),
        u()
      ]
    }
  ) });
}, Il = ({
  value: s,
  column: a,
  onSave: t,
  onCancel: r
}) => {
  const [n, o] = L(s ?? ""), l = qe(null);
  Ae(() => {
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
}, Bs = ({
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
    transform: d,
    isDragging: y
  } = oa({
    id: s.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: u, isOver: f } = ia({
    id: s.id,
    disabled: !a
  }), h = (A) => {
    c(A), u(A);
  }, S = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), x = {
    ...wa(s, S),
    transform: rr.Translate.toString(d),
    opacity: y ? 0.35 : 1,
    transition: y ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, N = s.type === "Container" || s.type === "Section" || s.type === "Tabs", I = f && N && !y, j = f && !N && !y;
  return /* @__PURE__ */ e.jsxs("div", { ref: h, style: x, className: "group/drag relative", children: [
    j && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    I && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...p,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (A) => A.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(Hs, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      zt,
      {
        node: s,
        isEditing: a,
        onContextMenu: t,
        parentLayout: S,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (A, b) => /* @__PURE__ */ e.jsx(
          Bs,
          {
            node: A,
            isEditing: a,
            onContextMenu: t,
            parentLayout: b && "mode" in b ? b : void 0,
            parentFlexConfig: b && !("mode" in b) ? b : void 0,
            activeId: o,
            overId: l
          },
          A.id
        )
      }
    )
  ] });
}, Ca = ({ x: s, y: a, items: t, onClose: r }) => {
  const n = qe(null);
  Ae(() => {
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
            onClick: (d) => {
              d.stopPropagation(), i.onClick(), r();
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
}, Rl = ({
  isEditing: s,
  activeId: a,
  overId: t
}) => {
  const r = K((D) => D.features), n = K((D) => D.activeFeatureId), o = K((D) => D.activeRecordId), l = K((D) => D.addComponent), i = K((D) => D.selectComponent), p = K((D) => D.removeComponent), c = K((D) => D.updateComponentProps);
  K((D) => D.updateFeatureLayout);
  const d = K((D) => D.updateFeatureScriptFile), y = r.find((D) => D.id === n), u = (y == null ? void 0 : y.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  qt.useEffect(() => {
    var O;
    if (ua(y) && n) {
      let B = o;
      !B && typeof window < "u" && (B = new URLSearchParams(window.location.search).get("id"));
      const J = B || "1", R = xe.getState().formRecords[n], V = (R == null ? void 0 : R.id) || (R == null ? void 0 : R.Id);
      if (String(V) !== String(J)) {
        const { module: z } = da(y == null ? void 0 : y.scriptFile), ne = (z == null ? void 0 : z.loadDetail) || ((O = z == null ? void 0 : z.transactionDetailBL) == null ? void 0 : O.loadDetail);
        typeof ne == "function" && ne(J).then((W) => {
          W && n && (xe.getState().setFormRecord(n, W), xe.getState().setFormRecord("default", W), o !== String(W.id || J) && K.getState().setActiveRecordId(String(W.id || J)));
        });
      }
    }
  }, [n, o, y == null ? void 0 : y.scriptFile, y == null ? void 0 : y.route, y == null ? void 0 : y.name, y == null ? void 0 : y.isDetail]);
  const { setNodeRef: f, isOver: h } = ia({
    id: "canvas-root",
    disabled: !s
  }), [S, g] = L(""), x = !!(y != null && y.scriptFile && y.scriptFile.trim().length > 0), [N, I] = L(null), j = (D, O = {}, B = {}) => ({
    id: `${D.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: D,
    parentId: null,
    pageId: n,
    props: {
      label: D === "Button" ? "Nút mới" : D === "Label" ? "Tiêu đề khối" : void 0,
      variant: D === "Button" ? "primary" : void 0,
      size: D === "Button" ? "md" : void 0,
      placeholder: D === "TextBox" ? "Nhập nội dung..." : void 0,
      ...O
    },
    style: {
      ...B
    },
    events: [],
    order: ((y == null ? void 0 : y.components.length) || 0) + 1
  }), A = (D) => {
    !s || !x || (D.preventDefault(), i(null), I({
      x: D.clientX,
      y: D.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, b = (D, O) => {
    if (!s) return;
    D.preventDefault(), D.stopPropagation(), i(O.id);
    const B = O.type === "Container" || O.type === "Section" || O.type === "Tabs";
    I({
      x: D.clientX,
      y: D.clientY,
      targetContainerId: B ? O.id : O.parentId,
      selectedNode: O
    });
  }, T = () => {
    var R, V, z;
    if (!N) return [];
    const { targetContainerId: D, selectedNode: O } = N, B = O && (O.type === "Container" || O.type === "Section" || O.type === "Tabs");
    if (O && B) {
      const ne = O.props.layoutMode === "grid", W = ((R = O.props.flexConfig) == null ? void 0 : R.direction) === "row", be = !!(O.props.isTab || O.props.tab || O.type === "Tabs"), k = O.props.activeTabId || ((z = (V = O.props.tabs) == null ? void 0 : V[0]) == null ? void 0 : z.id) || "main", ue = be ? { tabId: k } : {};
      return [
        ...be ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: st,
            onClick: () => {
              const ye = O.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], ee = `tab_${Date.now().toString(36)}`, re = [
                ...ye,
                { id: ee, label: `Tab Mới ${ye.length + 1}` }
              ];
              c(O.id, {
                tabs: re,
                activeTabId: ee
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
          icon: st,
          onClick: () => {
            const ye = j(
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
                ...ue
              },
              {
                flex: W ? "1" : void 0,
                width: W ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ye, D);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: Lt,
          onClick: () => {
            const ye = j(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...ue
              },
              {
                flex: W ? "1" : void 0,
                width: W ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ye, D);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Lt,
          onClick: () => {
            const ye = j("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...ue
            });
            l(ye, D);
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
          icon: Pt,
          onClick: () => l(
            j("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: Pt,
          onClick: () => l(
            j("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: Pt,
          onClick: () => l(
            j("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: Pt,
          onClick: () => l(
            j("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: as,
          onClick: () => l(
            j("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: Kt,
          onClick: () => l(
            j("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: as,
          onClick: () => l(
            j("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...ue
            }),
            D
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: ls,
          onClick: () => l(
            j("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...ue
            }),
            D
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: W ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: W ? Ms : Rn,
          onClick: () => {
            c(O.id, {
              flexConfig: {
                ...O.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: W ? "column" : "row"
              }
            });
          }
        },
        {
          label: ne ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Lt,
          onClick: () => {
            ne ? c(O.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(O.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: Ge,
          danger: !0,
          onClick: () => p(O.id)
        }
      ];
    }
    const J = u.direction === "row";
    return [
      {
        label: J ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: st,
        onClick: () => {
          const ne = j(
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
              flex: J ? "1" : void 0,
              width: J ? void 0 : "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(ne, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: Lt,
        onClick: () => {
          const ne = j(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: J ? "1" : void 0,
              width: J ? void 0 : "100%",
              minHeight: "140px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(ne, null);
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
        icon: as,
        onClick: () => l(j("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: Pt,
        onClick: () => l(j("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: Kt,
        onClick: () => l(j("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: ls,
        onClick: () => l(j("Table"), null)
      }
    ];
  }, P = (y == null ? void 0 : y.components.filter((D) => !D.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      onContextMenu: A,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${h && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (y == null ? void 0 : y.name) || "Màn hình" }),
              x ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: y == null ? void 0 : y.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: x ? (y == null ? void 0 : y.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          x ? P.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: A,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${h ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(st, { className: "w-7 h-7" }) }),
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
                      const D = j(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      D.children = [
                        j(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        j(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(D, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Rn, { className: "w-4 h-4" }),
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
              children: ja(P).map((D, O) => {
                if (D.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    Na,
                    {
                      parentId: null,
                      order: D.order,
                      tabNodes: D.nodes,
                      isEditing: s,
                      onContextMenu: b,
                      renderChild: (R, V) => s ? /* @__PURE__ */ e.jsx(
                        Bs,
                        {
                          node: R,
                          isEditing: s,
                          onContextMenu: b,
                          parentLayout: V && "mode" in V ? V : void 0,
                          parentFlexConfig: V && !("mode" in V) ? V : void 0,
                          activeId: a,
                          overId: t
                        },
                        R.id
                      ) : /* @__PURE__ */ e.jsx(
                        zt,
                        {
                          node: R,
                          isEditing: !1,
                          onContextMenu: b,
                          parentLayout: V && "mode" in V ? V : void 0,
                          parentFlexConfig: V && !("mode" in V) ? V : void 0
                        },
                        R.id
                      )
                    },
                    `root_tab_stack_${D.order}_${O}`
                  );
                const B = D.node, J = {
                  mode: "flex",
                  direction: u.direction || "column",
                  wrap: u.wrap || "wrap",
                  gap: u.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  Bs,
                  {
                    node: B,
                    isEditing: s,
                    onContextMenu: b,
                    parentLayout: J,
                    activeId: a,
                    overId: t
                  },
                  B.id
                ) : /* @__PURE__ */ e.jsx(
                  zt,
                  {
                    node: B,
                    isEditing: !1,
                    onContextMenu: b,
                    parentLayout: J
                  },
                  B.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Gt, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (D) => {
                  D.preventDefault();
                  const O = S.trim();
                  if (!O) return;
                  const B = O.endsWith(".bl.ts") ? O : O.endsWith(".ts") ? O.replace(/\.ts$/, ".bl.ts") : `${O}.bl.ts`;
                  d(n, B), g("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(Ss, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: S,
                          onChange: (D) => g(D.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  y && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(aa, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const D = y.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          g(`${D || "feature"}.bl.ts`);
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
                      disabled: !S.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(Fs, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        N && /* @__PURE__ */ e.jsx(
          Ca,
          {
            x: N.x,
            y: N.y,
            items: T(),
            onClose: () => I(null)
          }
        )
      ]
    }
  );
};
function sl(s) {
  return s.replace(/-([a-z])/g, (a, t) => t.toUpperCase());
}
function nl(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function al(s) {
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
      let c = sl(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), a[c] = p;
    }
  }
  return a;
}
function rl(s) {
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
    const o = nl(r);
    t.push(`${o}: ${n};`);
  }
  return t.join(`
`);
}
const Hn = [
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
let ns = null;
async function ka() {
  if (ns) return ns;
  try {
    const s = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (s.ok) {
      const a = await s.json();
      if (Array.isArray(a) && a.length > 0)
        return ns = a, a;
    }
  } catch {
    console.warn("[MetadataService] Server offline, using fallback entity catalogs");
  }
  return ns = Hn, Hn;
}
const ll = ({
  isOpen: s,
  node: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = L("info"), [l, i] = L([]), [p, c] = L(""), [d, y] = L("General"), [u, f] = L(""), [h, S] = L("Dropdown"), [g, x] = L(""), [N, I] = L(""), [j, A] = L(""), [b, T] = L(1), [P, D] = L(4), [O, B] = L(""), [J, R] = L('{"change":"AutoPOL"}'), [V, z] = L(""), [ne, W] = L(""), [be, k] = L(""), [ue, ye] = L(""), [ee, re] = L(""), [Ee, de] = L(""), [M, se] = L(""), [Ie, oe] = L(""), [Pe, Oe] = L(""), [w, E] = L(""), [Q, me] = L(""), [ve, je] = L(""), [ie, le] = L(""), [Z, te] = L(""), [Ne, Te] = L(""), [De, U] = L(""), [Y, Me] = L(""), [wt, lt] = L(""), [ot, Ct] = L(""), [kt, it] = L(""), [Je, ct] = L(""), [dt, St] = L(""), [Xe, ut] = L(""), [He, Qe] = L("id"), [Ze, pt] = L(""), [xt, mt] = L(""), [ht, bt] = L(""), [ft, Tt] = L(""), [Dt, gt] = L(""), [yt, Ft] = L(""), [At, Bt] = L(""), [Ot, v] = L(""), [H, q] = L(""), [ae, he] = L(""), [fe, pe] = L(!1), [ce, Re] = L(!0), [we, m] = L(!1), [$, F] = L(!1), [_, G] = L(!1), [X, ge] = L(!1), [Se, Fe] = L(!1), [Le, Ve] = L(!1), [Ue, Qt] = L(!1), [Ws, Ks] = L(!1), [Gs, Us] = L(!1), [zs, qs] = L(!1), [Ys, Js] = L(!1), [Xs, Qs] = L(!1), [Zs, en] = L(!1), [tn, sn] = L(!1), [nn, an] = L(!0), [rn, ln] = L(!0), [on, cn] = L(!1), [dn, un] = L(!1), [pn, xn] = L(!1), [mn, hn] = L(!1), [bn, fn] = L(!1), [gn, yn] = L(!1), [vn, Nn] = L(!1), [jn, wn] = L(!1), [It, Cn] = L(
    'return "?$filter=Active eq true and TerminalType/any(a:a/TypeId in ({${1}})) &$orderby=Id desc"'
  ), [hs, kn] = L(
    '(x, y) => { return (x.PortCode !== null && x.PortCode !== undefined && x.PortCode !== "") ? (x.PortCode + " - " + x.Name) : x.Name; }'
  ), [Sn, Tn] = L(""), [bs, Dn] = L("{ShortName}"), [ml, Fa] = L("");
  if (Ae(() => {
    ka().then((C) => i(C));
  }, []), Ae(() => {
    if (a) {
      const C = a.props || {}, $e = a.dataBinding || {};
      c(String(C.id ?? a.id)), y(C.group || "General"), f(C.reference || $e.entityName || ""), S(a.type || "Dropdown"), x(String(C.parentId ?? "")), I(C.refName || C.reference || $e.entityName || ""), A($e.fieldName || C.name || C.fieldName || a.id), T(Number(a.order ?? C.order ?? 1)), D(Number(C.colSpan ?? C.column ?? 4)), B(C.label || ""), R(
        typeof C.events == "string" ? C.events : C.events ? JSON.stringify(C.events) : '{"change":"AutoPOL"}'
      ), z(C.style || ""), W(C.childStyle || ""), k(C.validation || ""), ye(C.selectField || ""), re(C.plainText || ""), de(C.cssClass || C.className || ""), se(C.sqlSelect || ""), oe(String(C.offset ?? "")), Oe(C.groupFormat || ""), E(C.formatSummary || ""), me(C.orderBySummary || ""), je(C.groupEvent || ""), le(C.icon || ""), te(C.system || ""), Te(C.refClass || "TMS.UI.Business.Catalogue.TerminalEditor"), U(C.hotKey || ""), Me(C.dateTimeField || ""), lt(String(C.addStart ?? "")), Ct(String(C.addEnd ?? "")), it(String(C.bodyRowHeight ?? "")), ct(C.sqlWhere || ""), St(String(C.footerHeight ?? "")), ut(C.joinTable || ""), Qe(C.idField || "id"), pt(String(C.headerHeight ?? "")), mt(C.populateField || ""), bt(String(C.precision ?? "")), Tt(C.groupBy || ""), gt(C.disabledExp || ""), Ft(C.showExp || ""), Bt(String(C.row ?? "")), v(C.template || ""), q(C.templateLocked || ""), he(String(C.default ?? C.defaultValue ?? "")), pe(!!C.realtime), Re(C.showLabel !== !1 && C.label !== !1), m(!!C.hidden), F(!!C.filterLocal), G(!!C.sqlSearch), ge(!!C.cache), Fe(!!C.moveTab), Ve(!!C.focus), Qt(!!C.focusSearch), Ks(!!C.noLoad), Us(!!C.collapsible), qs(!!C.showHotKey), Js(!!C.history), Qs(!!C.top), en(!!C.hideAnd), sn(!!C.disabled), an(C.visibility !== !1), ln(C.active !== !1), cn(!!C.upperCase), un(!!(C.virtualScroll || C.virtual)), xn(!!C.isPrivate), hn(!!C.renderIndex), fn(!!(C.canAdd || C.add)), yn(!!(C.canSearch || C.search)), Nn(!!(C.isSummary || C.summary)), wn(!!C.showDateTimeField), (C.dataSource || C.dataSourceFilter || $e.dataSource) && Cn(String(C.dataSource || C.dataSourceFilter || $e.dataSource)), (C.formatEntity || $e.formatEntity) && kn(String(C.formatEntity || $e.formatEntity)), C.migration && Tn(String(C.migration)), (C.formatData || $e.formatData) && Dn(String(C.formatData || $e.formatData)), (C.query || $e.query) && Fa(String(C.query || $e.query));
    }
  }, [a]), !s || !a) return null;
  const Ia = () => {
    var Zt, Fn;
    let C = J;
    try {
      J.trim().startsWith("{") && (C = JSON.parse(J));
    } catch {
      C = J;
    }
    const $e = {
      ...a.props,
      id: p,
      group: d,
      reference: u,
      componentType: h,
      parentId: g,
      refName: N,
      fieldName: j,
      order: Number(b) || 1,
      colSpan: Number(P) || 4,
      column: Number(P) || 4,
      label: O,
      events: C,
      style: V,
      childStyle: ne,
      validation: be,
      selectField: ue,
      plainText: ee,
      cssClass: Ee,
      sqlSelect: M,
      offset: Ie,
      groupFormat: Pe,
      formatSummary: w,
      orderBySummary: Q,
      groupEvent: ve,
      icon: ie,
      system: Z,
      refClass: Ne,
      hotKey: De,
      dateTimeField: Y,
      addStart: wt,
      addEnd: ot,
      bodyRowHeight: kt,
      sqlWhere: Je,
      footerHeight: dt,
      joinTable: Xe,
      idField: He,
      headerHeight: Ze,
      populateField: xt,
      precision: ht ? Number(ht) : void 0,
      groupBy: ft,
      disabledExp: Dt,
      showExp: yt,
      row: At,
      template: Ot,
      templateLocked: H,
      default: ae,
      // Display flags
      realtime: fe,
      showLabel: ce,
      hidden: we,
      filterLocal: $,
      sqlSearch: _,
      cache: X,
      moveTab: Se,
      focus: Le,
      focusSearch: Ue,
      noLoad: Ws,
      collapsible: Gs,
      showHotKey: zs,
      history: Ys,
      top: Xs,
      hideAnd: Zs,
      disabled: tn,
      visibility: nn,
      active: rn,
      upperCase: on,
      virtual: dn,
      isPrivate: pn,
      renderIndex: mn,
      add: bn,
      search: gn,
      summary: vn,
      showDateTimeField: jn,
      // Code blocks
      dataSource: It,
      dataSourceFilter: It,
      formatEntity: hs,
      migration: Sn,
      formatData: bs,
      query: It
    }, fs = {
      ...a.dataBinding || {},
      entityName: u || N || ((Zt = a.dataBinding) == null ? void 0 : Zt.entityName) || d || "General",
      refName: N || u || ((Fn = a.dataBinding) == null ? void 0 : Fn.refName) || "",
      fieldName: j || a.id,
      query: It,
      dataSource: It,
      sqlWhere: Je,
      selectField: ue,
      populateField: xt,
      idField: He,
      formatData: bs,
      formatEntity: hs,
      twoWay: !0
    };
    r(a.id, $e, fs), t();
  }, Ce = (C, $e, fs) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${$e ? "text-slate-200 font-medium" : "text-slate-400"}`, children: C }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: $e,
        onChange: (Zt) => fs(Zt.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Xt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4 text-teal-400" }),
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
              onClick: Ia,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(Ts, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(rt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                      value: d,
                      onChange: (C) => y(C.target.value),
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
                      value: u,
                      onChange: (C) => {
                        f(C.target.value), N || I(C.target.value);
                      },
                      list: "entity-list",
                      placeholder: "VD: Terminal, Transaction...",
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "entity-list", children: l.map((C) => /* @__PURE__ */ e.jsx("option", { value: C.name, children: C.displayName }, C.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: h,
                      onChange: (C) => S(C.target.value),
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
                      value: g,
                      onChange: (C) => x(C.target.value),
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
                      value: N,
                      onChange: (C) => I(C.target.value),
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
                      value: j,
                      onChange: (C) => A(C.target.value),
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
                      onChange: (C) => T(C.target.value),
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
                      onChange: (C) => D(C.target.value),
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
                      value: O,
                      onChange: (C) => B(C.target.value),
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
                      value: V,
                      onChange: (C) => z(C.target.value),
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
                      value: ne,
                      onChange: (C) => W(C.target.value),
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
                      value: be,
                      onChange: (C) => k(C.target.value),
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
                      value: ue,
                      onChange: (C) => ye(C.target.value),
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
                      value: ee,
                      onChange: (C) => re(C.target.value),
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
                      value: Ee,
                      onChange: (C) => de(C.target.value),
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
                      value: M,
                      onChange: (C) => se(C.target.value),
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
                      value: Ie,
                      onChange: (C) => oe(C.target.value),
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
                      value: Pe,
                      onChange: (C) => Oe(C.target.value),
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
                      value: w,
                      onChange: (C) => E(C.target.value),
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
                      value: Q,
                      onChange: (C) => me(C.target.value),
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
                      value: ve,
                      onChange: (C) => je(C.target.value),
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
                      value: ie,
                      onChange: (C) => le(C.target.value),
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
                      value: Z,
                      onChange: (C) => te(C.target.value),
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
                      value: Ne,
                      onChange: (C) => Te(C.target.value),
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
                      value: De,
                      onChange: (C) => U(C.target.value),
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
                      value: Y,
                      onChange: (C) => Me(C.target.value),
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
                      value: wt,
                      onChange: (C) => lt(C.target.value),
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
                      value: ot,
                      onChange: (C) => Ct(C.target.value),
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
                      value: kt,
                      onChange: (C) => it(C.target.value),
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
                      value: Je,
                      onChange: (C) => ct(C.target.value),
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
                      value: dt,
                      onChange: (C) => St(C.target.value),
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
                      value: Xe,
                      onChange: (C) => ut(C.target.value),
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
                      value: He,
                      onChange: (C) => Qe(C.target.value),
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
                      value: Ze,
                      onChange: (C) => pt(C.target.value),
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
                      value: xt,
                      onChange: (C) => mt(C.target.value),
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
                      value: ht,
                      onChange: (C) => bt(C.target.value),
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
                      value: ft,
                      onChange: (C) => Tt(C.target.value),
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
                      value: Dt,
                      onChange: (C) => gt(C.target.value),
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
                      value: yt,
                      onChange: (C) => Ft(C.target.value),
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
                      value: At,
                      onChange: (C) => Bt(C.target.value),
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
                      value: Ot,
                      onChange: (C) => v(C.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Gt, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: H,
                      onChange: (C) => q(C.target.value),
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
                      value: ae,
                      onChange: (C) => he(C.target.value),
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
                  Ce("Realtime", fe, pe),
                  Ce("Label", ce, Re),
                  Ce("Hidden", we, m),
                  Ce("FilterLocal", $, F),
                  Ce("SqlSearch", _, G),
                  Ce("Cache", X, ge),
                  Ce("Move Tab", Se, Fe),
                  Ce("Focus", Le, Ve),
                  Ce("FocusSearch", Ue, Qt),
                  Ce("No Load", Ws, Ks),
                  Ce("Collapsible", Gs, Us),
                  Ce("HotKey", zs, qs),
                  Ce("History", Ys, Js)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Ce("Top", Xs, Qs),
                  Ce("HideAnd", Zs, en),
                  Ce("Disabled", tn, sn),
                  Ce("Visibility", nn, an),
                  Ce("Active", rn, ln),
                  Ce("Upper Case", on, cn),
                  Ce("Virtual", dn, un),
                  Ce("Private", pn, xn),
                  Ce("Render Index", mn, hn),
                  Ce("Add", bn, fn),
                  Ce("Search", gn, yn),
                  Ce("Sumary", vn, Nn),
                  Ce("DateTime Field", jn, wn)
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
                      value: It,
                      onChange: (C) => Cn(C.target.value),
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
                      value: hs,
                      onChange: (C) => kn(C.target.value),
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
                      value: Sn,
                      onChange: (C) => Tn(C.target.value),
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
                      value: bs,
                      onChange: (C) => Dn(C.target.value),
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
            /* @__PURE__ */ e.jsx(Ts, { className: "w-4 h-4 text-teal-400" }),
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
              (C, $e) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: C }),
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
                    defaultChecked: $e <= 1,
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
                    defaultChecked: $e > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, C)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Kt, { className: "w-4 h-4 text-teal-400" }),
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
}, ol = [
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
      { name: "CompanyLocalFullName", displayName: "Tên Doanh Nghiệp (Tiếng Việt)", dataType: "string", isRequired: !0 },
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
], Pl = ({ width: s }) => {
  var Ie, oe, Pe, Oe;
  const [a, t] = L("layout"), [r, n] = L(null), [o, l] = L(!1), [i, p] = L(!1), [c, d] = L([]);
  Ae(() => {
    ka().then((w) => {
      w && w.length > 0 && d(w);
    });
  }, []);
  const [y, u] = L(null), [f, h] = L(null), S = K((w) => w.features), g = K((w) => w.activeFeatureId), x = K((w) => w.selection), N = K((w) => w.selectComponent), I = K((w) => w.addComponent), j = K((w) => w.updateComponentProps), A = K((w) => w.updateComponentStyle), b = K((w) => w.updateComponentEvents), T = K((w) => w.updateComponentDataBinding), P = K((w) => w.updateComponentValidation), D = K((w) => w.updateComponentPermissions), O = K((w) => w.updateComponentOrder), B = K((w) => w.removeComponent);
  K((w) => w.distributeSiblingWidths);
  const J = K((w) => w.updateFeatureScriptFile), [R, V] = L(""), [z, ne] = L(0), W = S.find((w) => w.id === g), be = (w, E) => {
    if (!E) return null;
    for (const Q of w) {
      if (Q.id === E) return Q;
      if (Q.children) {
        const me = be(Q.children, E);
        if (me) return me;
      }
    }
    return null;
  }, k = x.componentId && W ? be(W.components, x.componentId) : null, ue = k != null && k.parentId && W ? be(W.components, k.parentId) : null, ye = ue && ((Ie = ue.props) != null && Ie.isTab || (oe = ue.props) != null && oe.tab || ue.type === "Tabs") ? ue : null;
  if (!k) {
    const w = W ? W.components.filter((E) => !E.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: s ? `${s}px` : "380px" },
        className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: "Feature" }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (W == null ? void 0 : W.name) || "Trang" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: W == null ? void 0 : W.route })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: W && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: W.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: W.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (E) => J(W.id, E.target.value),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      w.length,
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
                      const E = `box_${Date.now().toString(36)}`;
                      I(
                        {
                          id: E,
                          type: "Container",
                          parentId: null,
                          pageId: W.id,
                          order: w.length + 1,
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
                      /* @__PURE__ */ e.jsx(at, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              w.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...w].sort((E, Q) => (E.order ?? 1) - (Q.order ?? 1)).map((E, Q) => {
                var ve, je;
                const me = !!((ve = E.props) != null && ve.tab || (je = E.props) != null && je.isTab || E.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => N(E.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          Q + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: E.props.label || E.props.title || E.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: E.type }),
                            me && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            E.id
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
                              value: Number(E.order ?? E.props.order ?? Q + 1),
                              onClick: (ie) => ie.stopPropagation(),
                              onChange: (ie) => {
                                const le = Number(ie.target.value);
                                O(E.id, le);
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
                              ie.stopPropagation(), B(E.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  E.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const ee = k.type === "Container" || k.type === "Section" || k.type === "Tabs", re = !ee && (a === "layout" || a === "children") ? "props" : a, Ee = k.props.layoutMode || "flex", de = k.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, M = k.props.gridConfig || { columns: 2, gap: "16px" }, se = k.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: k.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: k.props.label || k.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                k.id
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
                children: /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => B(k.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(Ge, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          ee && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          ee && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  se.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(vt, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ha, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(Pn, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${re === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          ee && re === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => j(k.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Ee === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(st, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => j(k.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Ee === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              Ee === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: de.direction || "row",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, direction: w.target.value }
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
                          value: typeof de.columnsPerRow == "number" ? de.columnsPerRow : M.columns || 12,
                          onChange: (w) => {
                            const E = Math.max(1, Number(w.target.value) || 12);
                            j(k.id, {
                              flexConfig: { ...de, columnsPerRow: E },
                              gridConfig: { ...M, columns: E }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(de.columnsPerRow || "12"),
                          onChange: (w) => {
                            const E = w.target.value === "auto" ? "auto" : Number(w.target.value);
                            j(k.id, {
                              flexConfig: {
                                ...de,
                                columnsPerRow: E,
                                wrap: E !== "auto" ? "wrap" : de.wrap
                              },
                              gridConfig: {
                                ...M,
                                columns: E === "auto" ? 12 : E
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
                        value: de.justify || "flex-start",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, justify: w.target.value }
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
                        value: de.align || "center",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, align: w.target.value }
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
                        value: de.gap || "12px",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, gap: w.target.value }
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
                        value: de.wrap || "wrap",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, wrap: w.target.value }
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
              Ee === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: M.columns || 12,
                          onChange: (w) => {
                            const E = Math.max(1, Number(w.target.value) || 12);
                            j(k.id, {
                              gridConfig: { ...M, columns: E },
                              flexConfig: { ...de, columnsPerRow: E }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(M.columns || 12),
                          onChange: (w) => {
                            const E = Number(w.target.value);
                            j(k.id, {
                              gridConfig: { ...M, columns: E },
                              flexConfig: { ...de, columnsPerRow: E }
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
                        value: de.gap || M.gap || "12px",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, gap: w.target.value },
                          gridConfig: { ...M, gap: w.target.value }
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
                        value: de.justify || "flex-start",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, justify: w.target.value }
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
                        value: de.align || "center",
                        onChange: (w) => j(k.id, {
                          flexConfig: { ...de, align: w.target.value }
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
                    checked: !!(k.props.isTab || k.props.tab || k.type === "Tabs"),
                    onChange: (w) => {
                      var me;
                      const E = w.target.checked, Q = k.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      j(k.id, {
                        isTab: E,
                        tab: E,
                        tabs: E ? Q : k.props.tabs,
                        activeTabId: E ? k.props.activeTabId || ((me = Q[0]) == null ? void 0 : me.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(k.props.isTab || k.props.tab || k.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: k.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (w) => j(k.id, { label: w.target.value }),
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
                        value: Number(k.order ?? k.props.order ?? 1),
                        onChange: (w) => {
                          const E = Number(w.target.value);
                          O(k.id, E);
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
                        value: k.props.badge !== void 0 ? String(k.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (w) => j(k.id, {
                          badge: w.target.value || void 0
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
          ee && re === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                se.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            se.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...se].sort((w, E) => (w.order ?? 1) - (E.order ?? 1)).map((w, E) => {
              var ve, je;
              const Q = x.componentId === w.id, me = !!((ve = w.props) != null && ve.tab || (je = w.props) != null && je.isTab || w.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => N(w.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${Q ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        E + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: w.props.label || w.props.title || w.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: w.type }),
                          me && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          w.id
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
                            value: w.order ?? E + 1,
                            onClick: (ie) => ie.stopPropagation(),
                            onChange: (ie) => {
                              const le = Number(ie.target.value);
                              O(w.id, le);
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
                            ie.stopPropagation(), B(w.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                w.id
              );
            }) })
          ] }),
          re === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(k.order ?? k.props.order ?? 1),
                      onChange: (w) => {
                        const E = Number(w.target.value);
                        O(k.id, E);
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
                        value: Number(k.props.colSpan || 4),
                        onChange: (w) => {
                          const E = Math.max(1, Number(w.target.value) || 1);
                          j(k.id, { colSpan: E });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: k.props.colSpan || 4,
                        onChange: (w) => j(k.id, { colSpan: Number(w.target.value) }),
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
                    k.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(k.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            ee && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(k.props.tab || k.props.isTab || k.type === "Tabs"),
                  onChange: (w) => {
                    const E = w.target.checked;
                    j(k.id, {
                      tab: E,
                      isTab: E
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            ye && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: k.props.tabId || ((Oe = (Pe = ye.props.tabs) == null ? void 0 : Pe[0]) == null ? void 0 : Oe.id) || "main",
                  onChange: (w) => j(k.id, { tabId: w.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (ye.props.tabs || []).map((w) => /* @__PURE__ */ e.jsxs("option", { value: w.id, children: [
                    w.label,
                    " (",
                    w.id,
                    ")"
                  ] }, w.id))
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
                      checked: k.props.showLabel ?? !0,
                      onChange: (w) => j(k.id, { showLabel: w.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: k.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (w) => j(k.id, { label: w.target.value }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: k.props.labelPosition || "left",
                      onChange: (w) => j(k.id, { labelPosition: w.target.value }),
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
                        value: Number(k.props.colSpan || 4),
                        onChange: (w) => {
                          const E = Math.max(1, Number(w.target.value) || 1);
                          j(k.id, { colSpan: E });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: k.props.colSpan || 4,
                        onChange: (w) => j(k.id, { colSpan: Number(w.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((w) => /* @__PURE__ */ e.jsxs("option", { value: w, children: [
                          w,
                          " Cột (",
                          Math.round(w / 12 * 100),
                          "%)"
                        ] }, w))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    k.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(k.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            k.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: k.props.placeholder || "",
                  onChange: (w) => j(k.id, { placeholder: w.target.value }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            k.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: k.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (w) => j(k.id, { reference: w.target.value }),
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
                      value: k.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (w) => j(k.id, { displayField: w.target.value }),
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
                      value: k.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (w) => j(k.id, { valueField: w.target.value }),
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
                    value: k.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (w) => j(k.id, { placeholder: w.target.value }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            k.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: k.props.rows || 3,
                  onChange: (w) => j(k.id, { rows: Number(w.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            k.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: k.props.precision !== void 0 ? k.props.precision : 2,
                    onChange: (w) => j(k.id, { precision: Number(w.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: k.props.thousandsSeparator ?? !0,
                    onChange: (w) => j(k.id, { thousandsSeparator: w.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            k.type === "Table" && (() => {
              const w = k.props.columns || [], E = r !== null ? w[r] : null, Q = (Z, te) => {
                const Ne = w.map((Te, De) => De === Z ? { ...Te, ...te } : Te);
                j(k.id, { columns: Ne });
              }, me = (Z, te) => {
                if (te < 0 || te >= w.length) return;
                const Ne = Es(w, Z, te);
                j(k.id, { columns: Ne }), n(te);
              }, ve = (Z) => {
                const te = ya(w, Z);
                j(k.id, { columns: te });
                const Ne = te.findIndex((Te) => Te.key === Z);
                Ne !== -1 && n(Ne);
              }, je = (Z, te) => {
                const Ne = Math.max(0, Math.min(w.length - 1, te - 1));
                if (Ne !== Z) {
                  const Te = Es(w, Z, Ne);
                  j(k.id, { columns: Te }), n(Ne);
                }
              }, ie = () => {
                const Z = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: w.length + 1
                }, te = Wt([...w, Z]);
                j(k.id, { columns: te }), n(te.length - 1);
              }, le = (Z) => {
                const te = w.filter((Te, De) => De !== Z), Ne = Wt(te);
                j(k.id, { columns: Ne }), r === Z ? n(null) : r !== null && r > Z && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(ls, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ie,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(at, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: w.map((Z, te) => {
                  const Ne = r === te, Te = !!(Z.frozen || Z.sticky === "left"), De = y === te, U = f === te;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => u(te),
                      onDragOver: (Y) => {
                        Y.preventDefault(), !(y === null || y === te) && h(te);
                      },
                      onDragLeave: () => h(null),
                      onDrop: () => {
                        y !== null && y !== te && me(y, te), u(null), h(null);
                      },
                      onDragEnd: () => {
                        u(null), h(null);
                      },
                      onClick: () => n(te),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${De ? "opacity-30 bg-slate-800" : ""} ${U ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Ne ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(Hs, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: te === 0,
                                onClick: (Y) => {
                                  Y.stopPropagation(), me(te, te - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: te === w.length - 1,
                                onClick: (Y) => {
                                  Y.stopPropagation(), me(te, te + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(cs, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            Z.order ?? te + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: Z.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            Z.key,
                            "]"
                          ] }),
                          Te && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: Z.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (Y) => {
                                Y.stopPropagation(), le(te);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(Ge, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    Z.key || te
                  );
                }) }),
                E && r !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      E.title
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
                        /* @__PURE__ */ e.jsx(vt, { className: "w-3.5 h-3.5" }),
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
                          max: w.length,
                          value: E.order ?? r + 1,
                          onChange: (Z) => {
                            const te = parseInt(Z.target.value, 10);
                            isNaN(te) || je(r, te);
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
                          value: E.key,
                          onChange: (Z) => Q(r, { key: Z.target.value }),
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
                          value: E.title,
                          onChange: (Z) => Q(r, { title: Z.target.value }),
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
                          value: E.componentType || "TextBox",
                          onChange: (Z) => Q(r, { componentType: Z.target.value }),
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
                          value: E.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (Z) => Q(r, { width: Z.target.value }),
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
                          value: E.align || "left",
                          onChange: (Z) => Q(r, { align: Z.target.value }),
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
                          value: E.aggregate || "none",
                          onChange: (Z) => Q(r, { aggregate: Z.target.value }),
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
                          checked: !!(E.frozen || E.sticky === "left"),
                          onChange: () => ve(E.key),
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
                          checked: E.editable ?? !0,
                          onChange: (Z) => Q(r, { editable: Z.target.checked }),
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
                          checked: E.sortable ?? !0,
                          onChange: (Z) => Q(r, { sortable: Z.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(nt, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(E.events) ? E.events.length : E.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(E.events) && E.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: E.events.map((Z) => `${Z.trigger} ➔ ${Z.handlerName || Z.action}()`).join(", ") }) : E.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      E.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && E && r !== null && /* @__PURE__ */ e.jsx(
                  fa,
                  {
                    isOpen: o,
                    column: E,
                    onClose: () => l(!1),
                    onSave: (Z) => {
                      const te = w.map((De, U) => U === r ? Z : De), Ne = Wt(te);
                      j(k.id, { columns: Ne });
                      const Te = Ne.findIndex((De) => De.key === Z.key);
                      Te !== -1 && n(Te);
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
                    checked: !!k.props.required,
                    onChange: (w) => j(k.id, { required: w.target.checked }),
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
                    checked: !!k.props.disabled,
                    onChange: (w) => j(k.id, { disabled: w.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          re === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: k.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (w) => A(k.id, { width: w.target.value }),
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
                    value: k.style.height || k.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (w) => A(k.id, {
                      height: w.target.value,
                      minHeight: w.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(vs, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: k.style.customCss || rl(k.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (w) => {
                    const E = w.target.value, Q = al(E);
                    if (A(k.id, {
                      ...Q,
                      customCss: E
                    }), Q.justifyContent || Q.alignItems) {
                      const me = k.props.flexConfig || {};
                      j(k.id, {
                        flexConfig: {
                          ...me,
                          ...Q.justifyContent ? { justify: Q.justifyContent } : {},
                          ...Q.alignItems ? { align: Q.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          re === "events" && /* @__PURE__ */ e.jsx(
            ba,
            {
              events: k.events || [],
              onChange: (w) => b(k.id, w),
              scriptFile: (W == null ? void 0 : W.scriptFile) || "transactionList.bl.ts",
              componentName: k.props.label || k.type,
              componentId: k.id,
              contextExtra: {
                pageId: g,
                nodeId: k.id,
                type: k.type
              }
            }
          ),
          re === "data" && (() => {
            const w = k.dataBinding || {}, E = k.props || {}, Q = k.type, me = Q === "Table" || Q === "GridView" || Q === "AdvancedGrid", ve = Q === "Select" || Q === "Dropdown" || Q === "Autocomplete" || Q === "SearchEntry", je = Q === "TextBox" || Q === "Number" || Q === "DatePicker" || Q === "Checkbox" || Q === "Textarea", ie = !me && !ve && !je, le = [];
            c.forEach((U) => {
              le.push({
                name: U.name,
                displayName: U.displayName || U.name,
                fields: U.columns.map((Y) => ({
                  name: Y.name,
                  displayName: Y.displayName || Y.name,
                  dataType: Y.dataType
                }))
              });
            }), ol.forEach((U) => {
              le.some((Y) => Y.name.toLowerCase() === U.name.toLowerCase()) || le.push({
                name: U.name,
                displayName: U.displayName,
                fields: U.fields.map((Y) => ({
                  name: Y.name,
                  displayName: Y.displayName,
                  dataType: Y.dataType
                }))
              });
            });
            const Z = w.entityName || E.reference || E.refName || "", te = le.find((U) => U.name.toLowerCase() === Z.toLowerCase()), Ne = te ? te.fields : [], Te = w.dataSource || E.dataSource || E.dataSourceFilter || w.query || E.query || "", De = (U) => {
              T(k.id, {
                dataSource: U,
                query: U
              }), j(k.id, {
                dataSource: U,
                dataSourceFilter: U,
                query: U
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Ds, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      Q,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  me && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  ve && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  je && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  ie && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => p(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              me && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: te ? te.name : "",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, {
                          entityName: Y,
                          refName: Y
                        }), j(k.id, {
                          reference: Y,
                          refName: Y
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        le.map((U) => /* @__PURE__ */ e.jsxs("option", { value: U.name, children: [
                          U.displayName,
                          " (",
                          U.name,
                          ")"
                        ] }, U.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w.entityName || E.reference || E.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, {
                          entityName: Y,
                          refName: Y
                        }), j(k.id, {
                          reference: Y,
                          refName: Y
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(vs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: Te,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (U) => De(U.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => De("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => De("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => De(""),
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
                      value: w.sqlWhere || E.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { sqlWhere: Y }), j(k.id, { sqlWhere: Y });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              ve && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w.fieldName || E.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { fieldName: Y }), j(k.id, { fieldName: Y });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Ne.map((U) => /* @__PURE__ */ e.jsxs("option", { value: U.name, children: [
                    U.displayName,
                    " (",
                    U.name,
                    ")"
                  ] }, U.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: te ? te.name : "",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, {
                          entityName: Y,
                          refName: Y
                        }), j(k.id, {
                          reference: Y,
                          refName: Y
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        le.map((U) => /* @__PURE__ */ e.jsxs("option", { value: U.name, children: [
                          U.displayName,
                          " (",
                          U.name,
                          ")"
                        ] }, U.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w.entityName || E.reference || E.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, {
                          entityName: Y,
                          refName: Y
                        }), j(k.id, {
                          reference: Y,
                          refName: Y
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(vs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 3,
                      value: Te,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (U) => De(U.target.value),
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
                      value: w.populateField || E.populateRule || E.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { populateField: Y }), j(k.id, { populateRule: Y, populateField: Y });
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
                        value: w.idField || E.idField || "Id",
                        placeholder: "Id",
                        onChange: (U) => {
                          const Y = U.target.value;
                          T(k.id, { idField: Y }), j(k.id, { idField: Y });
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
                        value: w.selectField || E.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (U) => {
                          const Y = U.target.value;
                          T(k.id, { selectField: Y }), j(k.id, { selectField: Y });
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
                      value: w.formatData || E.formatData || "",
                      placeholder: "VD: {ShortName} hoặc {Code} - {Name}",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { formatData: Y }), j(k.id, { formatData: Y });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                    }
                  )
                ] })
              ] }),
              je && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w.fieldName || E.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { fieldName: Y }), j(k.id, { fieldName: Y });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Ne.map((U) => /* @__PURE__ */ e.jsxs("option", { value: U.name, children: [
                    U.displayName,
                    " (",
                    U.name,
                    ")"
                  ] }, U.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: w.formatter || "",
                      onChange: (U) => T(k.id, { formatter: U.target.value }),
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
                      value: w.formatData || E.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (U) => {
                        const Y = U.target.value;
                        T(k.id, { formatData: Y }), j(k.id, { formatData: Y });
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
                      checked: w.twoWay ?? !0,
                      onChange: (U) => T(k.id, { twoWay: U.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              ie && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(st, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  k.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          re === "validation" && (() => {
            const w = k.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Pn, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!w.required,
                      onChange: (E) => P(k.id, { required: E.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                w.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: w.requiredMessage || "",
                    onChange: (E) => P(k.id, { requiredMessage: E.target.value }),
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
                      value: w.minLength !== void 0 ? w.minLength : "",
                      onChange: (E) => P(k.id, {
                        minLength: E.target.value === "" ? void 0 : Number(E.target.value)
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
                      value: w.maxLength !== void 0 ? w.maxLength : "",
                      onChange: (E) => P(k.id, {
                        maxLength: E.target.value === "" ? void 0 : Number(E.target.value)
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
                    value: w.pattern || "",
                    onChange: (E) => P(k.id, { pattern: E.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: w.patternMessage || "",
                    onChange: (E) => P(k.id, { patternMessage: E.target.value }),
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
                    value: w.customValidator || "",
                    onChange: (E) => P(k.id, { customValidator: E.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          re === "permissions" && (() => {
            const w = k.permissions || {}, E = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], Q = w.allowedRoles || [], me = w.readOnlyRoles || [], ve = (ie) => {
              const le = Q.includes(ie) ? Q.filter((Z) => Z !== ie) : [...Q, ie];
              D(k.id, { allowedRoles: le });
            }, je = (ie) => {
              const le = me.includes(ie) ? me.filter((Z) => Z !== ie) : [...me, ie];
              D(k.id, { readOnlyRoles: le });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Gt, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: E.map((ie) => {
                  const le = Q.includes(ie);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => ve(ie),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${le ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ie }),
                        le && /* @__PURE__ */ e.jsx(Fs, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    ie
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: E.map((ie) => {
                  const le = me.includes(ie);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => je(ie),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${le ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ie }),
                        le && /* @__PURE__ */ e.jsx(Fs, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    ie
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
                      onClick: () => D(k.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(w.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      onClick: () => D(k.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${w.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
        i && k && /* @__PURE__ */ e.jsx(
          ll,
          {
            isOpen: i,
            node: k,
            onClose: () => p(!1),
            onSave: (w, E, Q) => {
              j(w, E), Q && T(w, Q);
            }
          }
        )
      ]
    }
  );
}, Vn = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: Nt,
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
    icon: ta,
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
    icon: st,
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
    icon: Pt,
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
    icon: Jt,
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
    icon: aa,
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
    icon: Va,
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
    icon: _s,
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
    icon: Wa,
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
    icon: Ka,
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
    icon: ls,
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
    icon: na,
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
    icon: as,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: Kt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: Ga,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: Ua,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: za,
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
    icon: qa,
    defaultProps: {
      tabs: [
        { id: "main", label: "TAB 1" }
      ]
    },
    defaultStyle: { width: "100%" }
  }
], il = ({ item: s, onClick: a, isEditing: t }) => {
  const r = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = oa({
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
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(at, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Ll = ({ isEditing: s = !0, onAddComponent: a }) => {
  const t = K((c) => c.addComponent), r = K((c) => c.activeFeatureId), n = K((c) => c.features), o = K((c) => c.selection), l = n.find((c) => c.id === r), i = (c, d) => {
    if (!d) return null;
    for (const y of c) {
      if (y.id === d) return y;
      if (y.children) {
        const u = i(y.children, d);
        if (u) return u;
      }
    }
    return null;
  }, p = (c) => {
    var f;
    if (!s) return;
    if (a) {
      a(c.type);
      return;
    }
    const d = i((l == null ? void 0 : l.components) || [], o.componentId);
    let y = null;
    d && (d.type === "Container" ? y = d.id : y = d.parentId || null);
    const u = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: y,
      pageId: r,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((f = l == null ? void 0 : l.components) == null ? void 0 : f.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    t(u, y);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Hs, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Vn.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Vn.map((c) => /* @__PURE__ */ e.jsx(
      il,
      {
        item: c,
        onClick: p,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, El = () => {
  const s = K((i) => i.features), a = K((i) => i.activeFeatureId), t = K((i) => i.selection), r = K((i) => i.selectComponent), n = K((i) => i.removeComponent), o = s.find((i) => i.id === a);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, p = 0) => i.map((c) => {
    const d = t.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => r(c.id),
          style: { paddingLeft: `${p * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${d ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(st, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
}, $l = () => {
  const s = Ke((f) => f.openTabs), a = Ke((f) => f.activeTabId), t = Ke((f) => f.setActiveTab), r = Ke((f) => f.closeTab), n = K((f) => f.setActiveFeature), o = xe((f) => f.isFormDirty), l = xe((f) => f.markFormClean), [i, p] = L(null);
  if (s.length === 0) return null;
  const c = (f, h) => {
    var g;
    t(f);
    const S = s.find((x) => x.id === f);
    n(h, ((g = S == null ? void 0 : S.params) == null ? void 0 : g.id) ?? null);
  }, d = (f) => {
    r(f), setTimeout(() => {
      var S;
      const h = Ke.getState().openTabs.find(
        (g) => g.id === Ke.getState().activeTabId
      );
      h && n(h.featureId, ((S = h.params) == null ? void 0 : S.id) ?? null);
    }, 50);
  }, y = (f, h) => {
    if (f.stopPropagation(), h.isDirty || (h.featureId ? o(h.featureId) : !1)) {
      p(h);
      return;
    }
    d(h.id);
  }, u = () => {
    i && (i.featureId && l(i.featureId), d(i.id), p(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((f) => {
      const h = f.id === a, S = f.isDirty || (f.featureId ? o(f.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(f.id, f.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${h ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: S ? `${f.title} (Có dữ liệu chưa lưu)` : f.title,
          children: [
            /* @__PURE__ */ e.jsx(Nt, { className: `w-3.5 h-3.5 ${h ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: f.title }),
            S && /* @__PURE__ */ e.jsx(
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
                onClick: (g) => y(g, f),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(rt, { className: "w-3 h-3" })
              }
            )
          ]
        },
        f.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(Ya, { className: "w-5 h-5" }) }),
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
            onClick: u,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Sa = "uiforge_resilience_queue_v1";
let rs = !1, Wn = !1;
function is() {
  if (typeof window > "u") return [];
  try {
    const s = localStorage.getItem(Sa);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}
function Ta(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Sa, JSON.stringify(s)), console.log(`[ResilienceQueue] Hiện có ${s.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function cl(s, a) {
  var n;
  const t = is(), r = {
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
  return t.push(r), Ta(t), Da(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${r.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), r;
}
function Da(s, a, t = "info") {
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
async function ks(s) {
  var n, o;
  if (rs) return;
  const a = is();
  if (a.length === 0) return;
  rs = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
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
  Ta(r), rs = !1, t > 0 && Da(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${t} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function dl(s) {
  var t, r;
  if (!s) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !s.response && (s.code === "ERR_NETWORK" || (t = s.message) != null && t.includes("Network Error"))) return !0;
  const a = (r = s.response) == null ? void 0 : r.status;
  return a === 502 || a === 503 || a === 504;
}
function ul(s) {
  Wn || typeof window > "u" || (Wn = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), ks(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && is().length > 0 && !rs && ks(s);
  }, 2e4), setTimeout(() => {
    const a = is();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), ks(s));
  }, 3e3));
}
const pl = "http://localhost:5048/api", ms = lr.create({
  baseURL: pl,
  timeout: 15e3
});
ms.interceptors.request.use((s) => {
  const a = Vs.getState().token;
  return a && (s.headers.Authorization = `Bearer ${a}`), s;
});
ms.interceptors.response.use(
  (s) => s,
  async (s) => {
    var r, n, o, l, i;
    if (((r = s == null ? void 0 : s.response) == null ? void 0 : r.status) === 401)
      return Vs.getState().logout(), Promise.reject(s);
    const a = (((n = s == null ? void 0 : s.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(a) && dl(s)) {
      const p = (l = (o = s == null ? void 0 : s.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${a} [${(i = s == null ? void 0 : s.config) == null ? void 0 : i.url}]`;
      return cl(s.config, p), Promise.resolve({
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
ul(ms);
async function xl(s) {
  await ms.delete(`/pages/${s}`);
}
const Al = ({ width: s }) => {
  const a = K((b) => b.features), t = K((b) => b.activeFeatureId), r = K((b) => b.setActiveFeature), n = K((b) => b.addFeature), o = K((b) => b.renameFeature), l = K((b) => b.deleteFeature), i = a.filter((b) => !b.hidden && !b.isDetail), [p, c] = L(null), [d, y] = L(!1), [u, f] = L(""), [h, S] = L(null), g = (b) => {
    b.preventDefault(), c({
      x: b.clientX,
      y: b.clientY
    });
  }, x = (b, T) => {
    b.preventDefault(), b.stopPropagation(), c({
      x: b.clientX,
      y: b.clientY,
      featureId: T
    });
  }, N = () => {
    f(""), y(!0);
  }, I = (b) => {
    b.preventDefault(), u.trim() && (n(u.trim()), y(!1), f(""));
  }, j = (b) => {
    b.preventDefault(), !(!h || !h.name.trim()) && (o(h.id, h.name.trim()), S(null));
  }, A = p != null && p.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: Ns,
      onClick: N
    },
    {
      divider: !0,
      label: "",
      onClick: () => {
      }
    },
    {
      label: "✏️ Đổi tên Feature này",
      icon: Ja,
      onClick: () => {
        const b = a.find((T) => T.id === p.featureId);
        b && S({ id: b.id, name: b.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: Ge,
      danger: !0,
      onClick: async () => {
        if (confirm("Bạn có chắc chắn muốn xóa Feature này?")) {
          try {
            await xl(p.featureId);
          } catch {
          }
          l(p.featureId);
        }
      }
    }
  ] : [
    {
      label: "➕ Thêm Feature mới (Màn hình mới)",
      icon: Ns,
      onClick: N
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: g,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((b, T) => {
            const P = b.id === t;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  r(b.id, null), Ke.getState().openFeature(b.id, {}, "Tab", b.name);
                },
                onContextMenu: (D) => x(D, b.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${P ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${P ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: T === 0 ? /* @__PURE__ */ e.jsx(Xa, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: b.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (D) => x(D, b.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${P ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(Qa, { className: "w-3.5 h-3.5" })
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
      Ca,
      {
        x: p.x,
        y: p.y,
        items: A,
        onClose: () => c(null)
      }
    ),
    d && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: I,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(Ns, { className: "w-5 h-5" }) }),
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
                value: u,
                onChange: (b) => f(b.target.value),
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
        onSubmit: j,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: h.name,
              onChange: (b) => S({ ...h, name: b.target.value }),
              className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => S(null),
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
}, Bl = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1
}) => {
  const n = K((d) => d.undo), o = K((d) => d.redo), l = K((d) => d.historyIndex), i = K((d) => d.history), p = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !p, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(ra, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Ol = ({
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
  onLogout: d
}) => {
  const y = K((j) => j.features), u = K((j) => j.activeFeatureId), f = K((j) => j.undo), h = K((j) => j.redo), S = K((j) => j.historyIndex), g = K((j) => j.history), x = y.find((j) => j.id === u), N = S > 0, I = S < g.length - 1;
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
            onClick: f,
            disabled: !N,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(ra, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
            disabled: !I,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${s ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Za, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Os, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
          children: n ? /* @__PURE__ */ e.jsx(er, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(tr, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(sr, { className: "w-4 h-4" }),
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
        d && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: d,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(nr, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, _l = () => {
  const s = Ke((i) => i.activePopup), a = Ke((i) => i.closePopup), t = Ke((i) => i.openFeature), r = K((i) => i.features);
  if (!s) return null;
  const n = r.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), a();
  };
  return Xt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(ea, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(rt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(ar, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, p]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(p ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          zt,
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
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
  fa as ColumnPropertiesModal,
  Ll as ComponentPalette,
  ll as ComponentPropertiesModal,
  zt as ComponentRenderer,
  El as ComponentTree,
  Ca as ContextMenu,
  Rl as FeatureCanvas,
  _l as FeaturePopupModal,
  Dl as ForgeAdvancedGrid,
  tl as ForgeAutocomplete,
  Cr as ForgeButton,
  Ur as ForgeCheckbox,
  Bn as ForgeContainer,
  zr as ForgeDatePicker,
  Yr as ForgeDivider,
  el as ForgeFileUploadGrid,
  kl as ForgeFormContainer,
  Fr as ForgeLabel,
  qr as ForgeModal,
  Dr as ForgeNumber,
  Xr as ForgeRecordSelector,
  Zr as ForgeSearchEntry,
  Qr as ForgeSearchModal,
  Ir as ForgeSection,
  Gr as ForgeSelect,
  Na as ForgeTabStack,
  Kr as ForgeTable,
  Fl as ForgeTabs,
  Tr as ForgeTextBox,
  Jr as ForgeTextarea,
  jt as FormFieldWrapper,
  $r as GridCellComponent,
  Rr as HeaderContextMenu,
  Il as InlineCellEditor,
  Al as LeftNavbar,
  ss as PermissionGuard,
  Pl as PropertyPanel,
  Pr as RowContextMenu,
  Er as SummaryRow,
  Bl as TopBar,
  Ol as TopNav,
  ba as UnifiedEventEditor,
  $l as WorkspaceTabBar,
  dr as addFunctionToBlFile,
  _r as calculateAutoPopulatedFields,
  Br as calculateLeftOffsets,
  os as executeSingleEvent,
  Vr as exportGridToExcel,
  pr as findFunctionInModule,
  Sl as getCascadedOptions,
  wa as getComponentOuterLayoutStyle,
  cr as getFunctionsForBlFile,
  ja as groupNodesByTabStack,
  Es as moveColumn,
  ds as normalizeBlKey,
  Wt as normalizeColumnOrders,
  On as parseDDMMYYYY,
  Wr as printGridReport,
  Cl as registerBL,
  ur as registerBlFunctions,
  wl as removeFunctionFromBlFile,
  da as resolveBlModule,
  ga as sortColumnsByCorePolicy,
  ya as toggleColumnFreeze,
  ke as triggerComponentEvent,
  Vs as useAuthStore,
  xe as useDataEngine,
  K as useEditorStore,
  Ar as useGridKeyboardNavigation,
  Rt as useMasterDetailStore,
  Ke as useNavigationEngine,
  As as validateDateSequence,
  Mr as validateField,
  Tl as validateForm,
  $s as validateISO6346ContainerNo
};
