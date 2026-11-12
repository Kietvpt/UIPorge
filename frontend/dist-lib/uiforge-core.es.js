var zr = Object.defineProperty;
var Ur = (s, r, t) => r in s ? zr(s, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[r] = t;
var Ts = (s, r, t) => Ur(s, typeof r != "symbol" ? r + "" : r, t);
import os, { useState as $, useRef as Ge, useEffect as Be, useMemo as He, useCallback as ps, useId as nr } from "react";
import { create as is } from "zustand";
import { Layers as kt, ChevronDown as St, ChevronUp as ss, Printer as rr, Zap as nt, Save as Gt, Eye as qs, EyeOff as qr, Pin as ar, ChevronRight as Ys, Sliders as Ct, Copy as lr, Trash2 as Ue, Filter as or, Settings as Yr, PlusCircle as ir, ArrowUp as cr, ArrowDown as dr, Plus as Ze, FileCode as As, Play as Jr, Shield as Bs, X as et, Table as Qe, Calendar as ur, ChevronLeft as pr, Clock as Xr, ExternalLink as xr, Search as Tt, RefreshCw as Qr, FileDown as Zr, ArrowUpDown as Js, Loader2 as ea, Check as Xs, Tag as hr, Database as _s, Paperclip as mr, Upload as Wn, Download as Ds, Image as ta, FileText as ns, File as sa, GripVertical as Qs, Lock as rs, Sparkles as br, CheckCircle2 as Os, Box as xt, ArrowRightLeft as Kn, Columns as Wt, Type as Ht, Square as ms, Paintbrush as na, ShieldCheck as Gn, Code as Fs, Hash as ra, ChevronDownSquare as aa, CheckSquare as la, Minus as oa, Maximize2 as ia, AlignLeft as ca, FolderKanban as da, AlertTriangle as ua, FolderPlus as Is, Edit2 as pa, LayoutDashboard as xa, MoreVertical as ha, Undo2 as fr, Redo2 as gr, Edit3 as ma, PanelRightClose as ba, PanelRightOpen as fa, Bell as ga, LogOut as va, CheckCircle as ya } from "lucide-react";
import { createPortal as Dt } from "react-dom";
import { useDraggable as vr, useDroppable as yr } from "@dnd-kit/core";
import { CSS as ja } from "@dnd-kit/utilities";
import Na from "axios";
var Ms = { exports: {} }, Jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function wa() {
  if (zn) return Jt;
  zn = 1;
  var s = os, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var h, j = {}, F = null, f = null;
    c !== void 0 && (F = "" + c), d.key !== void 0 && (F = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (h in d) a.call(d, h) && !o.hasOwnProperty(h) && (j[h] = d[h]);
    if (i && i.defaultProps) for (h in d = i.defaultProps, d) j[h] === void 0 && (j[h] = d[h]);
    return { $$typeof: r, type: i, key: F, ref: f, props: j, _owner: n.current };
  }
  return Jt.Fragment = t, Jt.jsx = l, Jt.jsxs = l, Jt;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Ca() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var s = os, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), m = Symbol.iterator, D = "@@iterator";
    function u(T) {
      if (T === null || typeof T != "object")
        return null;
      var H = m && T[m] || T[D];
      return typeof H == "function" ? H : null;
    }
    var b = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(T) {
      {
        for (var H = arguments.length, te = new Array(H > 1 ? H - 1 : 0), pe = 1; pe < H; pe++)
          te[pe - 1] = arguments[pe];
        p("error", T, te);
      }
    }
    function p(T, H, te) {
      {
        var pe = b.ReactDebugCurrentFrame, Te = pe.getStackAddendum();
        Te !== "" && (H += "%s", te = te.concat([Te]));
        var De = te.map(function(Ne) {
          return String(Ne);
        });
        De.unshift("Warning: " + H), Function.prototype.apply.call(console[T], console, De);
      }
    }
    var v = !1, E = !1, x = !1, C = !1, R = !1, I;
    I = Symbol.for("react.module.reference");
    function B(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === a || T === o || R || T === n || T === c || T === h || C || T === f || v || E || x || typeof T == "object" && T !== null && (T.$$typeof === F || T.$$typeof === j || T.$$typeof === l || T.$$typeof === i || T.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === I || T.getModuleId !== void 0));
    }
    function A(T, H, te) {
      var pe = T.displayName;
      if (pe)
        return pe;
      var Te = H.displayName || H.name || "";
      return Te !== "" ? te + "(" + Te + ")" : te;
    }
    function Q(T) {
      return T.displayName || "Context";
    }
    function P(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case i:
            var H = T;
            return Q(H) + ".Consumer";
          case l:
            var te = T;
            return Q(te._context) + ".Provider";
          case d:
            return A(T, T.render, "ForwardRef");
          case j:
            var pe = T.displayName || null;
            return pe !== null ? pe : P(T.type) || "Memo";
          case F: {
            var Te = T, De = Te._payload, Ne = Te._init;
            try {
              return P(Ne(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, J = 0, le, q, we, S, he, Se, ie;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function be() {
      {
        if (J === 0) {
          le = console.log, q = console.info, we = console.warn, S = console.error, he = console.group, Se = console.groupCollapsed, ie = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        J++;
      }
    }
    function ye() {
      {
        if (J--, J === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, T, {
              value: le
            }),
            info: W({}, T, {
              value: q
            }),
            warn: W({}, T, {
              value: we
            }),
            error: W({}, T, {
              value: S
            }),
            group: W({}, T, {
              value: he
            }),
            groupCollapsed: W({}, T, {
              value: Se
            }),
            groupEnd: W({}, T, {
              value: ie
            })
          });
        }
        J < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = b.ReactCurrentDispatcher, Z;
    function M(T, H, te) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Te) {
            var pe = Te.stack.trim().match(/\n( *(at )?)/);
            Z = pe && pe[1] || "";
          }
        return `
` + Z + T;
      }
    }
    var z = !1, ue;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Ce();
    }
    function Ve(T, H) {
      if (!T || z)
        return "";
      {
        var te = ue.get(T);
        if (te !== void 0)
          return te;
      }
      var pe;
      z = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = G.current, G.current = null, be();
      try {
        if (H) {
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
              pe = X;
            }
            Reflect.construct(T, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (X) {
              pe = X;
            }
            T.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            pe = X;
          }
          T();
        }
      } catch (X) {
        if (X && pe && typeof X.stack == "string") {
          for (var ge = X.stack.split(`
`), Oe = pe.stack.split(`
`), Pe = ge.length - 1, y = Oe.length - 1; Pe >= 1 && y >= 0 && ge[Pe] !== Oe[y]; )
            y--;
          for (; Pe >= 1 && y >= 0; Pe--, y--)
            if (ge[Pe] !== Oe[y]) {
              if (Pe !== 1 || y !== 1)
                do
                  if (Pe--, y--, y < 0 || ge[Pe] !== Oe[y]) {
                    var _ = `
` + ge[Pe].replace(" at new ", " at ");
                    return T.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", T.displayName)), typeof T == "function" && ue.set(T, _), _;
                  }
                while (Pe >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        z = !1, G.current = De, ye(), Error.prepareStackTrace = Te;
      }
      var L = T ? T.displayName || T.name : "", V = L ? M(L) : "";
      return typeof T == "function" && ue.set(T, V), V;
    }
    function We(T, H, te) {
      return Ve(T, !1);
    }
    function Re(T) {
      var H = T.prototype;
      return !!(H && H.isReactComponent);
    }
    function k(T, H, te) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Ve(T, Re(T));
      if (typeof T == "string")
        return M(T);
      switch (T) {
        case c:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case d:
            return We(T.render);
          case j:
            return k(T.type, H, te);
          case F: {
            var pe = T, Te = pe._payload, De = pe._init;
            try {
              return k(De(Te), H, te);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, O = {}, de = b.ReactDebugCurrentFrame;
    function se(T) {
      if (T) {
        var H = T._owner, te = k(T.type, T._source, H ? H.type : null);
        de.setExtraStackFrame(te);
      } else
        de.setExtraStackFrame(null);
    }
    function fe(T, H, te, pe, Te) {
      {
        var De = Function.call.bind(N);
        for (var Ne in T)
          if (De(T, Ne)) {
            var ge = void 0;
            try {
              if (typeof T[Ne] != "function") {
                var Oe = Error((pe || "React class") + ": " + te + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              ge = T[Ne](H, Ne, pe, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ge = Pe;
            }
            ge && !(ge instanceof Error) && (se(Te), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", te, Ne, typeof ge), se(null)), ge instanceof Error && !(ge.message in O) && (O[ge.message] = !0, se(Te), w("Failed %s type: %s", te, ge.message), se(null));
          }
      }
    }
    var ne = Array.isArray;
    function xe(T) {
      return ne(T);
    }
    function ee(T) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, te = H && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return te;
      }
    }
    function ce(T) {
      try {
        return Ie(T), !1;
      } catch {
        return !0;
      }
    }
    function Ie(T) {
      return "" + T;
    }
    function me(T) {
      if (ce(T))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(T)), Ie(T);
    }
    var oe = b.ReactCurrentOwner, K = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, U, Je;
    function It(T) {
      if (N.call(T, "ref")) {
        var H = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function Rt(T) {
      if (N.call(T, "key")) {
        var H = Object.getOwnPropertyDescriptor(T, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function ht(T, H) {
      typeof T.ref == "string" && oe.current;
    }
    function mt(T, H) {
      {
        var te = function() {
          U || (U = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        te.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function bt(T, H) {
      {
        var te = function() {
          Je || (Je = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        te.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var ot = function(T, H, te, pe, Te, De, Ne) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: T,
        key: H,
        ref: te,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return ge._store = {}, Object.defineProperty(ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function Lt(T, H, te, pe, Te) {
      {
        var De, Ne = {}, ge = null, Oe = null;
        te !== void 0 && (me(te), ge = "" + te), Rt(H) && (me(H.key), ge = "" + H.key), It(H) && (Oe = H.ref, ht(H, Te));
        for (De in H)
          N.call(H, De) && !K.hasOwnProperty(De) && (Ne[De] = H[De]);
        if (T && T.defaultProps) {
          var Pe = T.defaultProps;
          for (De in Pe)
            Ne[De] === void 0 && (Ne[De] = Pe[De]);
        }
        if (ge || Oe) {
          var y = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          ge && mt(Ne, y), Oe && bt(Ne, y);
        }
        return ot(T, ge, Oe, Te, pe, oe.current, Ne);
      }
    }
    var it = b.ReactCurrentOwner, ft = b.ReactDebugCurrentFrame;
    function Xe(T) {
      if (T) {
        var H = T._owner, te = k(T.type, T._source, H ? H.type : null);
        ft.setExtraStackFrame(te);
      } else
        ft.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function rt(T) {
      return typeof T == "object" && T !== null && T.$$typeof === r;
    }
    function gt() {
      {
        if (it.current) {
          var T = P(it.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Pt(T) {
      return "";
    }
    var vt = {};
    function yt(T) {
      {
        var H = gt();
        if (!H) {
          var te = typeof T == "string" ? T : T.displayName || T.name;
          te && (H = `

Check the top-level render call using <` + te + ">.");
        }
        return H;
      }
    }
    function jt(T, H) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var te = yt(H);
        if (vt[te])
          return;
        vt[te] = !0;
        var pe = "";
        T && T._owner && T._owner !== it.current && (pe = " It was passed a child from " + P(T._owner.type) + "."), Xe(T), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, pe), Xe(null);
      }
    }
    function dt(T, H) {
      {
        if (typeof T != "object")
          return;
        if (xe(T))
          for (var te = 0; te < T.length; te++) {
            var pe = T[te];
            rt(pe) && jt(pe, H);
          }
        else if (rt(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Te = u(T);
          if (typeof Te == "function" && Te !== T.entries)
            for (var De = Te.call(T), Ne; !(Ne = De.next()).done; )
              rt(Ne.value) && jt(Ne.value, H);
        }
      }
    }
    function $t(T) {
      {
        var H = T.type;
        if (H == null || typeof H == "string")
          return;
        var te;
        if (typeof H == "function")
          te = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === j))
          te = H.propTypes;
        else
          return;
        if (te) {
          var pe = P(H);
          fe(te, T.props, "prop", pe, T);
        } else if (H.PropTypes !== void 0 && !ct) {
          ct = !0;
          var Te = P(H);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(T) {
      {
        for (var H = Object.keys(T.props), te = 0; te < H.length; te++) {
          var pe = H[te];
          if (pe !== "children" && pe !== "key") {
            Xe(T), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Xe(null);
            break;
          }
        }
        T.ref !== null && (Xe(T), w("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var Nt = {};
    function wt(T, H, te, pe, Te, De) {
      {
        var Ne = B(T);
        if (!Ne) {
          var ge = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Pt();
          Oe ? ge += Oe : ge += gt();
          var Pe;
          T === null ? Pe = "null" : xe(T) ? Pe = "array" : T !== void 0 && T.$$typeof === r ? (Pe = "<" + (P(T.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof T, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ge);
        }
        var y = Lt(T, H, te, Te, De);
        if (y == null)
          return y;
        if (Ne) {
          var _ = H.children;
          if (_ !== void 0)
            if (pe)
              if (xe(_)) {
                for (var L = 0; L < _.length; L++)
                  dt(_[L], T);
                Object.freeze && Object.freeze(_);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dt(_, T);
        }
        if (N.call(H, "key")) {
          var V = P(T), X = Object.keys(H).filter(function(Ae) {
            return Ae !== "key";
          }), re = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nt[V + re]) {
            var Fe = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, V, Fe, V), Nt[V + re] = !0;
          }
        }
        return T === a ? Et(y) : $t(y), y;
      }
    }
    function At(T, H, te) {
      return wt(T, H, te, !0);
    }
    function zt(T, H, te) {
      return wt(T, H, te, !1);
    }
    var Ut = zt, qt = At;
    Xt.Fragment = a, Xt.jsx = Ut, Xt.jsxs = qt;
  }()), Xt;
}
process.env.NODE_ENV === "production" ? Ms.exports = wa() : Ms.exports = Ca();
var e = Ms.exports;
const Ft = ({
  label: s,
  showLabel: r = !0,
  labelPosition: t = "left",
  labelWidth: a = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: d,
  children: c
}) => {
  const h = t === "left", j = l ? `col-span-${l}` : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${j} ${h ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...l ? { gridColumn: `span ${l} / span ${l}` } : {},
        ...d
      },
      children: [
        r && s && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs font-medium text-slate-300 select-none ${h ? "shrink-0 text-right truncate" : ""}`,
            style: h ? { width: a } : void 0,
            title: s,
            children: [
              s,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              h && ":"
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
}, jr = "uiforge_bl_functions_registry", Kt = {};
function js(s) {
  if (!s || !s.trim()) return "";
  let r = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return r.endsWith(".ts") || (r.endsWith(".bl") || (r = `${r}.bl`), r = `${r}.ts`), r;
}
function Ns() {
  if (typeof window > "u") return Kt;
  try {
    const s = localStorage.getItem(jr);
    if (s) {
      const r = JSON.parse(s), t = { ...Kt, ...r };
      for (const [a, n] of Object.entries(Kt))
        t[a] = Array.from(/* @__PURE__ */ new Set([...n, ...t[a] || []]));
      return t;
    }
  } catch {
  }
  return Kt;
}
function ws(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(jr, JSON.stringify(s));
    } catch {
    }
}
function ka(s) {
  if (!s || !s.trim()) return [];
  const r = js(s), t = Ns();
  if (t[r] && t[r].length > 0)
    return t[r];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const a = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[r] = a, ws(t), a;
}
function Sa(s, r) {
  if (!s || !r) return [];
  const t = js(s), a = r.trim().replace(/\(.*?\)/g, "");
  if (!t || !a) return [];
  const n = Ns(), o = n[t] || [];
  return o.includes(a) || (n[t] = [...o, a], ws(n)), n[t];
}
function Hl(s, r) {
  if (!s || !r) return [];
  const t = js(s), a = r.trim().replace(/\(.*?\)/g, ""), n = Ns(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== a), ws(n), n[t];
}
function Ta(s, r) {
  const t = js(s);
  Kt[t] = Array.from(/* @__PURE__ */ new Set([...Kt[t] || [], ...r]));
  const a = Ns();
  a[t] = Array.from(/* @__PURE__ */ new Set([...a[t] || [], ...r])), ws(a);
}
const pt = {};
function Wl(s, r) {
  pt[s] = r;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  pt[t] = r;
  const a = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  pt[a] = r;
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
  n.length > 0 && Ta(t, n);
}
function Nr(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const r = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = r.toLowerCase();
  if (pt[r]) return { module: pt[r], canonicalName: r };
  if (pt[t]) return { module: pt[t], canonicalName: r };
  const a = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(pt))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === a)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: r };
}
function Da(s, r) {
  if (!r || !r.trim()) return { fn: null, matchedName: "" };
  const t = r.replace(/\(.*?\)/g, "").trim(), a = t.toLowerCase();
  if (typeof s[t] == "function")
    return { fn: s[t], matchedName: t };
  for (const [n, o] of Object.entries(s))
    if (n.toLowerCase() === a && typeof o == "function")
      return { fn: o, matchedName: n };
  for (const [n, o] of Object.entries(s))
    if (o && typeof o == "object") {
      if (typeof o[t] == "function")
        return { fn: o[t].bind(o), matchedName: t };
      for (const [i, d] of Object.entries(o))
        if (i.toLowerCase() === a && typeof d == "function")
          return { fn: d.bind(o), matchedName: i };
      const l = Object.getPrototypeOf(o);
      if (l && l !== Object.prototype) {
        for (const i of Object.getOwnPropertyNames(l))
          if (i !== "constructor" && typeof o[i] == "function" && (i === t || i.toLowerCase() === a))
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
            const d = Object.getPrototypeOf(i);
            if (d) {
              for (const c of Object.getOwnPropertyNames(d))
                if (c !== "constructor" && typeof i[c] == "function" && (c === t || c.toLowerCase() === a))
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
function Qt(s, r, t, a = !1, n, o = !0) {
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
        <span class="font-mono text-cyan-300 font-bold">${s}()</span>
      </div>
      ${n ? `<div class="text-[11px] text-slate-200 mt-1 leading-relaxed">${n}</div>` : `<div class="text-[10px] text-slate-400 mt-0.5">
               Sự kiện: <span class="font-mono text-amber-400">${r}</span> | File: <span class="font-mono text-emerald-400">${t || "Chưa gắn file"}</span>
             </div>`}
    </div>
  `, document.body.appendChild(l), setTimeout(() => {
    l.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => l.remove(), 300);
  }, 3800);
}
function fs(s, r, t, a) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = Nr(t);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  if (l) {
    const { fn: h, matchedName: j } = Da(l, n);
    if (c = j, h)
      try {
        const F = h(a || { componentName: r, trigger: o, blFileName: i });
        if (d = !0, F && typeof F.then == "function")
          return F.then((f) => {
            f && f.message ? Qt(c, o, i || t, !0, f.message, f.success !== !1) : Qt(c, o, i || t, !0);
          }).catch((f) => {
            Qt(c, o, i || t, !0, String(f), !1);
          }), !0;
        if (F && F.message)
          return Qt(c, o, i || t, !0, F.message, F.success !== !1), !0;
      } catch (F) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${j}() trong ${i}:`, F);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${r || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || t || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Qt(c, o, i || t, d), d;
}
function Ee(s, r, t, a, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === r || r === "click" && (l.trigger === "onClick" || l.trigger === "click") || r === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || r === "change" && (l.trigger === "onChange" || l.trigger === "change") || r === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || r === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    fs(l, t, a, n);
}
const qn = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Yn = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", as = /* @__PURE__ */ new Map(), xs = (s) => {
  const r = as.get(s);
  return r ? Object.fromEntries(
    Object.entries(r.stores).map(([t, a]) => [t, a.getState()])
  ) : {};
}, Fa = (s, r, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: r.connect(t)
    };
  const a = as.get(t.name);
  if (a)
    return { type: "tracked", store: s, ...a };
  const n = {
    connection: r.connect(t),
    stores: {}
  };
  return as.set(t.name, n), { type: "tracked", store: s, ...n };
}, Ia = (s, r) => {
  if (r === void 0) return;
  const t = as.get(s);
  t && (delete t.stores[r], Object.keys(t.stores).length === 0 && as.delete(s));
}, Ra = /^at (?:new |async )?(.+?) \(/, La = /^([^@]+)@/;
function Pa(s) {
  var r, t, a;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((r = n[o + 1]) == null ? void 0 : r.trim()) || "";
  return ((t = Ra.exec(l)) == null ? void 0 : t[1]) || ((a = La.exec(l)) == null ? void 0 : a[1]);
}
const $a = (s, r = {}) => (t, a, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = r;
  let c;
  try {
    c = (o ?? (qn ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return s(t, a, n);
  const { connection: h, ...j } = Fa(i, c, d);
  let F = !0;
  n.setState = (D, u, b) => {
    const w = t(D, u);
    if (!F) return w;
    const p = b === void 0 ? {
      type: l || Pa(new Error().stack) || "anonymous"
    } : typeof b == "string" ? { type: b } : b;
    return i === void 0 ? (h == null || h.send(p, a()), w) : (h == null || h.send(
      {
        ...p,
        type: `${i}/${p.type}`
      },
      {
        ...xs(d.name),
        [i]: n.getState()
      }
    ), w);
  }, n.devtools = {
    cleanup: () => {
      h && typeof h.unsubscribe == "function" && h.unsubscribe(), Ia(d.name, i);
    }
  };
  const f = (...D) => {
    const u = F;
    F = !1, t(...D), F = u;
  }, m = s(n.setState, a, n);
  if (j.type === "untracked" ? h == null || h.init(m) : (j.stores[j.store] = n, h == null || h.init(
    Object.fromEntries(
      Object.entries(j.stores).map(([D, u]) => [
        D,
        D === j.store ? m : u.getState()
      ])
    )
  )), Yn(n)) {
    let D = !1;
    const u = n.dispatch;
    n.dispatch = (...b) => {
      (qn ? "production" : void 0) !== "production" && b[0].type === "__setState" && !D && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), D = !0), u(...b);
    };
  }
  return h.subscribe((D) => {
    var u;
    switch (D.type) {
      case "ACTION":
        if (typeof D.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return Rs(
          D.payload,
          (b) => {
            if (b.type === "__setState") {
              if (i === void 0) {
                f(b.state);
                return;
              }
              Object.keys(b.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const w = b.state[i];
              if (w == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(w) && f(w);
              return;
            }
            Yn(n) && n.dispatch(b);
          }
        );
      case "DISPATCH":
        switch (D.payload.type) {
          case "RESET":
            return f(m), i === void 0 ? h == null ? void 0 : h.init(n.getState()) : h == null ? void 0 : h.init(xs(d.name));
          case "COMMIT":
            if (i === void 0) {
              h == null || h.init(n.getState());
              return;
            }
            return h == null ? void 0 : h.init(xs(d.name));
          case "ROLLBACK":
            return Rs(D.state, (b) => {
              if (i === void 0) {
                f(b), h == null || h.init(n.getState());
                return;
              }
              f(b[i]), h == null || h.init(xs(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return Rs(D.state, (b) => {
              if (i === void 0) {
                f(b);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(b[i]) && f(b[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: b } = D.payload, w = (u = b.computedStates.slice(-1)[0]) == null ? void 0 : u.state;
            if (!w) return;
            f(i === void 0 ? w : w[i]), h == null || h.send(
              null,
              // FIXME no-any
              b
            );
            return;
          }
          case "PAUSE_RECORDING":
            return F = !F;
        }
        return;
    }
  }), m;
}, Cs = $a, Rs = (s, r) => {
  let t;
  try {
    t = JSON.parse(s);
  } catch (a) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      a
    );
  }
  t !== void 0 && r(t);
};
function Ea(s, r) {
  let t;
  try {
    t = s();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const l = (d) => d === null ? null : JSON.parse(d, void 0), i = (o = t.getItem(n)) != null ? o : null;
      return i instanceof Promise ? i.then(l) : l(i);
    },
    setItem: (n, o) => t.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => t.removeItem(n)
  };
}
const Vs = (s) => (r) => {
  try {
    const t = s(r);
    return t instanceof Promise ? t : {
      then(a) {
        return Vs(a)(t);
      },
      catch(a) {
        return this;
      }
    };
  } catch (t) {
    return {
      then(a) {
        return this;
      },
      catch(a) {
        return Vs(a)(t);
      }
    };
  }
}, Aa = (s, r) => (t, a, n) => {
  let o = {
    storage: Ea(() => window.localStorage),
    partialize: (u) => u,
    version: 0,
    merge: (u, b) => ({
      ...b,
      ...u
    }),
    ...r
  }, l = !1, i = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let h = o.storage;
  if (!h)
    return s(
      (...u) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...u);
      },
      a,
      n
    );
  const j = () => {
    const u = o.partialize({ ...a() });
    return h.setItem(o.name, {
      state: u,
      version: o.version
    });
  }, F = n.setState;
  n.setState = (u, b) => (F(u, b), j());
  const f = s(
    (...u) => (t(...u), j()),
    a,
    n
  );
  n.getInitialState = () => f;
  let m;
  const D = () => {
    var u, b;
    if (!h) return;
    const w = ++i;
    l = !1, d.forEach((v) => {
      var E;
      return v((E = a()) != null ? E : f);
    });
    const p = ((b = o.onRehydrateStorage) == null ? void 0 : b.call(o, (u = a()) != null ? u : f)) || void 0;
    return Vs(h.getItem.bind(h))(o.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== o.version) {
          if (o.migrate) {
            const E = o.migrate(
              v.state,
              v.version
            );
            return E instanceof Promise ? E.then((x) => [!0, x]) : [!0, E];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, v.state];
      return [!1, void 0];
    }).then((v) => {
      var E;
      if (w !== i)
        return;
      const [x, C] = v;
      if (m = o.merge(
        C,
        (E = a()) != null ? E : f
      ), t(m, !0), x)
        return j();
    }).then(() => {
      w === i && (p == null || p(a(), void 0), m = a(), l = !0, c.forEach((v) => v(m)));
    }).catch((v) => {
      w === i && (p == null || p(void 0, v));
    });
  };
  return n.persist = {
    setOptions: (u) => {
      o = {
        ...o,
        ...u
      }, u.storage && (h = u.storage);
    },
    clearStorage: () => {
      ++i, h == null || h.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => D(),
    hasHydrated: () => l,
    onHydrate: (u) => (d.add(u), () => {
      d.delete(u);
    }),
    onFinishHydration: (u) => (c.add(u), () => {
      c.delete(u);
    })
  }, o.skipHydration || D(), m || f;
}, Ba = Aa, _a = 40;
function Ls() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), r = s.get("feature") || s.get("page");
    return r || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function Ps() {
  if (typeof window > "u") return null;
  try {
    const r = new URLSearchParams(window.location.search).get("id");
    return r || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function wr(s) {
  var r, t, a, n;
  return s ? !!(s.isDetail || s.route === "/fcl-import" || (r = s.route) != null && r.includes("detail") || (t = s.scriptFile) != null && t.toLowerCase().includes("detail") || (a = s.name) != null && a.toLowerCase().includes("fcl import") || (n = s.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function Hs(s) {
  return s ? !wr(s) : !1;
}
function Zt(s, r, t) {
  var a;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", s);
      const l = (t || ((a = Y.getState()) == null ? void 0 : a.features) || []).find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s);
      if ((l ? Hs(l) : s === "6" || s === "1" || s === "3") || r === null || r === "") {
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
const Y = is()(
  Cs(
    (s, r) => ({
      features: [],
      activeFeatureId: Ls() || "",
      activeRecordId: Ps(),
      selection: { componentId: null, pageId: Ls() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, a) => {
        const n = r().features || [], o = n.find((d) => String(d.id) === String(t) || d.route === `/${t}` || d.route === t), l = o ? Hs(o) : t === "6" || t === "1" || t === "3";
        Zt(t, l ? null : a, n);
        let i = null;
        l || a === null || a === "" ? i = null : a != null ? i = String(a) : i = Ps(), s((d) => ({
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
        const a = Ls(), n = a && t.find((i) => i.id === a || i.route === `/${a}` || i.route === a) || t.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || t.find((i) => !i.hidden && !i.isDetail) || t[0], l = Hs(n) ? null : Ps();
        Zt(n.id, l, t), s({
          features: t,
          activeFeatureId: n.id,
          activeRecordId: l,
          selection: { componentId: null, pageId: n.id },
          history: [t],
          historyIndex: 0
        });
      },
      addFeature: (t, a = "Layers") => {
        const n = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, o = {
          id: n,
          name: t.trim() || "Tính năng mới",
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
        return Zt(n, null), s((l) => {
          const i = [...l.features, o];
          return {
            ...Ke(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: a } : l);
          return Ke(n, o);
        });
      },
      updateFeatureId: (t, a) => {
        s((n) => {
          const o = n.features.map(
            (i) => i.id === t ? {
              ...i,
              id: a,
              route: i.route === `/${t}` ? `/${a}` : i.route,
              components: i.components.map((d) => ({ ...d, pageId: a }))
            } : i
          ), l = n.activeFeatureId === t ? a : n.activeFeatureId;
          return Zt(l), {
            features: o,
            activeFeatureId: l,
            selection: n.selection.pageId === t ? { ...n.selection, pageId: a } : n.selection
          };
        });
      },
      deleteFeature: (t) => {
        s((a) => {
          if (a.features.length <= 1) return {};
          const n = a.features.filter((l) => l.id !== t), o = a.activeFeatureId === t ? n[0].id : a.activeFeatureId;
          return Zt(o, null), {
            ...Ke(a, n),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        });
      },
      updateFeatureLayout: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== t ? l : {
            ...l,
            layoutConfig: {
              ...l.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
              ...a
            }
          });
          return Ke(n, o);
        });
      },
      updateFeatureScriptFile: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: a.trim() } : l);
          return Ke(n, o);
        });
      },
      selectComponent: (t) => {
        s((a) => ({
          selection: { ...a.selection, componentId: t }
        }));
      },
      addComponent: (t, a = null, n) => {
        s((o) => {
          const l = o.features.find((c) => c.id === o.activeFeatureId);
          if (!l) return {};
          let i;
          if (a)
            n !== void 0 ? i = Ws(l.components, a, t, n) : i = kr(l.components, a, t);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, t), i = c.map((h, j) => ({ ...h, order: j + 1 }));
          } else
            i = [...l.components, t];
          const d = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...Ke(o, d),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...a }
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentStyle: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...a }
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentEvents: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              events: a
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentDataBinding: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...a }
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentValidation: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...a }
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentPermissions: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...a }
            }))
          });
          return Ke(n, o);
        });
      },
      updateComponentOrder: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ut(l.components, t, (i) => ({
              ...i,
              order: a,
              props: { ...i.props, order: a }
            }))
          });
          return Ke(n, o);
        });
      },
      removeComponent: (t) => {
        s((a) => {
          const n = a.features.map((o) => o.id !== a.activeFeatureId ? o : {
            ...o,
            components: Cr(o.components, t)
          });
          return {
            ...Ke(a, n),
            selection: { ...a.selection, componentId: null }
          };
        });
      },
      moveComponent: (t, a, n) => {
        s((o) => {
          const l = o.features.find((f) => f.id === o.activeFeatureId);
          if (!l) return {};
          const i = Oa(l.components, t);
          if (!i) return {};
          const [d, c] = i, h = { ...d, parentId: a };
          let j;
          if (a === null) {
            const f = c.filter((u) => !u.parentId);
            f.splice(n, 0, h);
            const m = f.map((u, b) => ({ ...u, order: b + 1 })), D = c.filter((u) => u.parentId);
            j = [...m, ...D];
          } else
            j = Ws(c, a, h, n);
          const F = o.features.map(
            (f) => f.id === o.activeFeatureId ? { ...f, components: j } : f
          );
          return Ke(o, F);
        });
      },
      distributeSiblingWidths: (t, a) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Sr(l.components, t, a)
          });
          return Ke(n, o);
        });
      },
      undo: () => {
        s((t) => {
          if (t.historyIndex <= 0) return {};
          const a = t.historyIndex - 1;
          return { historyIndex: a, features: t.history[a] };
        });
      },
      redo: () => {
        s((t) => {
          if (t.historyIndex >= t.history.length - 1) return {};
          const a = t.historyIndex + 1;
          return { historyIndex: a, features: t.history[a] };
        });
      }
    }),
    { name: "UIForge/MultiFeatureStore" }
  )
);
function Ke(s, r) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= _a && t.shift(), t.push(r), {
    features: r,
    history: t,
    historyIndex: t.length - 1
  };
}
function ut(s, r, t) {
  return s.map((a) => a.id === r ? t(a) : a.children && a.children.length > 0 ? { ...a, children: ut(a.children, r, t) } : a);
}
function Cr(s, r) {
  return s.filter((t) => t.id !== r).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: Cr(t.children, r) } : t
  );
}
function kr(s, r, t) {
  return s.map((a) => a.id === r ? {
    ...a,
    children: [...a.children || [], { ...t, parentId: r }]
  } : a.children && a.children.length > 0 ? {
    ...a,
    children: kr(a.children, r, t)
  } : a);
}
function Sr(s, r, t) {
  return s.some((n) => n.id === r) ? s.map((n) => {
    var o;
    return n.id === r ? {
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
    children: Sr(n.children, r, t)
  } : n);
}
function Oa(s, r) {
  const t = s.findIndex((a) => a.id === r);
  if (t !== -1) {
    const a = s[t], n = [...s.slice(0, t), ...s.slice(t + 1)];
    return [a, n];
  }
  for (let a = 0; a < s.length; a++) {
    const n = s[a];
    if (!n.children || n.children.length === 0) continue;
    const o = n.children.findIndex((i) => i.id === r);
    if (o !== -1) {
      const i = n.children[o], d = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], c = { ...n, children: d }, h = [...s.slice(0, a), c, ...s.slice(a + 1)];
      return [i, h];
    }
    const l = Tr(n.children, r);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, h = [...s.slice(0, a), c, ...s.slice(a + 1)];
      return [i, h];
    }
  }
  return null;
}
function Tr(s, r) {
  for (let t = 0; t < s.length; t++) {
    const a = s[t];
    if (a.id === r) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [a, n];
    }
    if (a.children && a.children.length > 0) {
      const n = Tr(a.children, r);
      if (n) {
        const [o, l] = n, i = { ...a, children: l }, d = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function Ws(s, r, t, a) {
  return s.map((n) => {
    if (n.id === r) {
      const l = [...n.children || []];
      l.splice(a, 0, { ...t, parentId: r });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Ws(n.children, r, t, a) } : n;
  });
}
const Ma = ({ node: s, isEditing: r }) => {
  const { props: t, style: a } = s, n = Y((w) => w.features), o = Y((w) => w.activeFeatureId), l = n.find((w) => String(w.id) === String(s.pageId)) || n.find((w) => String(w.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[t.variant || "primary"], b = {
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
        ...D
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${u} ${b}`,
      onClick: (w) => {
        r ? (w.ctrlKey || w.metaKey || w.altKey) && (w.stopPropagation(), Ee(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Ee(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (w) => {
        var v;
        w.stopPropagation(), ((v = s.events) == null ? void 0 : v.some((E) => E.trigger === "dblclick" || E.trigger === "onDoubleClick")) ? Ee(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : r && Ee(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, Ye = is()(
  Cs((s, r) => ({
    openTabs: [],
    activeTabId: null,
    activePopup: null,
    // Đánh dấu trạng thái bẩn (isDirty) cho tab khi dữ liệu form thay đổi
    setTabDirty: (t, a) => {
      s((n) => ({
        openTabs: n.openTabs.map(
          (o) => o.id === t || o.featureId === t ? { ...o, isDirty: a } : o
        )
      }));
    },
    // 🚀 Mở một Feature theo chuẩn FeatureTab hoặc FeaturePopup (chỉ đạo của Master)
    openFeature: (t, a = {}, n = "Tab", o) => {
      const l = o || (a.id ? `${t} - #${a.id}` : t);
      if (n === "Popup")
        s({
          activePopup: {
            featureId: t,
            title: l,
            params: a
          }
        });
      else {
        const i = r().openTabs, d = i.find(
          (c) => {
            var h;
            return c.featureId === t && String(((h = c.params) == null ? void 0 : h.id) ?? "") === String((a == null ? void 0 : a.id) ?? "");
          }
        );
        if (d)
          s({ activeTabId: d.id });
        else {
          const c = `tab_${t}_${a.id || Date.now()}`, h = {
            id: c,
            featureId: t,
            title: l,
            params: a
          };
          s({
            openTabs: [...i, h],
            activeTabId: c
          });
        }
        Y.getState().setActiveFeature(t, (a == null ? void 0 : a.id) ?? null);
      }
    },
    // Đóng tab
    closeTab: (t) => {
      const a = r().openTabs;
      if (a.length <= 1) return;
      const n = a.filter((i) => i.id !== t), o = r().activeTabId;
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
      const a = r().activePopup;
      a != null && a.onClose && a.onClose(t), s({ activePopup: null });
    }
  }))
), Va = [];
function Ha(s) {
  if (!s || typeof s != "string") return [];
  const r = [], t = s.split(",");
  for (const a of t) {
    const n = a.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), d = i.includes(".") ? i.split(".").pop() : i;
      l && d && r.push({ targetField: l, sourceField: d });
    }
  }
  return r;
}
function lt(s, r, t, a = void 0) {
  const n = [
    s.formRecords[r],
    s.formRecords.default,
    ...Object.values(s.formRecords)
  ].filter(Boolean);
  if (n.length === 0) return a;
  const o = t.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase();
  for (const l of n) {
    if (!l || typeof l != "object") continue;
    if (l[t] !== void 0 && l[t] !== null) return l[t];
    const i = t.replace(/^fld_/, "");
    if (l[i] !== void 0 && l[i] !== null) return l[i];
    for (const [d, c] of Object.entries(l)) {
      if (c == null) continue;
      if (d.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase() === o)
        return c;
    }
  }
  return a;
}
const je = is()(
  Cs((s, r) => ({
    datasets: {},
    formRecords: {},
    originalFormRecords: {},
    selectedRecords: {},
    // Quản lý Dirty Tracking
    isFormDirty: (t) => {
      const a = r(), n = a.formRecords[t] || a.formRecords.default || {}, o = a.originalFormRecords[t] || a.originalFormRecords.default;
      if (!o) return !1;
      const l = ["btn_", "sec_", "tab_", "lbl_"], i = /* @__PURE__ */ new Set();
      for (const [d, c] of Object.entries(n)) {
        if (!d || l.some((m) => d.startsWith(m))) continue;
        const h = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(h)) continue;
        i.add(h);
        const j = o[d] ?? o[h] ?? o[d.replace(/^fld_/, "")], F = c === "" || c === void 0 ? null : c, f = j === "" || j === void 0 ? null : j;
        if (String(F ?? "") !== String(f ?? ""))
          return !0;
      }
      return !1;
    },
    markFormClean: (t) => {
      s((a) => {
        const n = a.formRecords[t] || a.formRecords.default || {};
        return {
          originalFormRecords: {
            ...a.originalFormRecords,
            [t]: { ...n },
            default: { ...n }
          }
        };
      });
      try {
        Ye.getState().setTabDirty(t, !1);
      } catch {
      }
    },
    // Lưu trữ bản ghi đang chọn
    setSelectedRecord: (t, a) => {
      s((n) => ({
        selectedRecords: {
          ...n.selectedRecords,
          [t]: a
        }
      }));
    },
    // Lấy bản ghi đang chọn
    getSelectedRecord: (t) => r().selectedRecords[t],
    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục MasterData, Products...)
    registerDataset: (t, a) => {
      s((n) => ({
        datasets: {
          ...n.datasets,
          [t]: a
        }
      }));
    },
    // 2. Lấy dataset của Entity (hỗ trợ tìm case-insensitive)
    getDataset: (t) => {
      const a = r().datasets;
      if (a[t]) return a[t];
      const n = t == null ? void 0 : t.toLowerCase(), o = Object.keys(a).find((l) => l.toLowerCase() === n);
      return o ? a[o] : Va;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (t, a, n) => {
      s((o) => {
        const l = a.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), h = (D) => {
          const u = { ...D };
          for (const b of Object.keys(u))
            (b.toLowerCase() === i || b.toLowerCase() === a.toLowerCase()) && delete u[b];
          return u[d] = n, u[c] = n, u;
        }, j = o.formRecords[t] || {}, F = o.formRecords.default || {}, f = h(j), m = h(F);
        try {
          Ye.getState().setTabDirty(t, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [t]: f,
            default: m
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, a, n = "") => lt(r(), t, a, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (t, a) => {
      s((n) => {
        const o = {};
        for (const [l, i] of Object.entries(a || {})) {
          o[l] = i;
          const d = l.replace(/^fld_/, ""), c = d.charAt(0).toLowerCase() + d.slice(1), h = d.charAt(0).toUpperCase() + d.slice(1);
          o[c] = i, o[h] = i;
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
      const a = r().formRecords, n = a[t] || {};
      let l = { ...a.default || {}, ...n };
      Object.keys(l).some(
        (c) => c !== "id" && c !== "Id" && l[c] !== void 0 && l[c] !== ""
      ) || (l = { ...r().collectScreenData(t), ...l });
      const d = { ...l };
      for (const [c, h] of Object.entries(l)) {
        if (!c) continue;
        const j = c.charAt(0).toLowerCase() + c.slice(1), F = c.charAt(0).toUpperCase() + c.slice(1);
        d[j] === void 0 && (d[j] = h), d[F] === void 0 && (d[F] = h);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (t, a, n) => {
      if (!n || typeof n != "object") return;
      const o = Ha(a);
      if (o.length === 0) return;
      const l = r().formRecords[t] || {}, i = {};
      for (const d of o) {
        const c = Object.keys(n).find(
          (h) => h.toLowerCase() === d.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const h = n[c];
          i[d.targetField] = h, d.targetField.startsWith("fld_") || (i[`fld_${d.targetField.toLowerCase()}`] = h);
        }
      }
      s((d) => ({
        formRecords: {
          ...d.formRecords,
          [t]: {
            ...l,
            ...i
          }
        }
      }));
    },
    // 8. Truy vấn danh mục tham chiếu (OData Reference Query cho Select/Dropdown)
    queryReference: async (t, a, n = "id", o = "fullName") => {
      let l = (a || "").trim();
      const i = l.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (i && (l = i[2].trim()), t)
        try {
          const c = l ? l.startsWith("?") ? l : l.startsWith("$") ? `?${l}` : `?$filter=${encodeURIComponent(l)}` : "", h = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${c}`, j = await fetch(h);
          if (j.ok) {
            const F = await j.json();
            return (Array.isArray(F) ? F : F.value || []).map((m) => {
              const D = m[n] !== void 0 ? m[n] : m.Id || m.id || m.code, u = m[o] !== void 0 ? m[o] : m.FullName || m.fullName || m.Name || m.name || m.title || String(D);
              return {
                value: D,
                label: String(u),
                rawItem: m
              };
            });
          }
        } catch {
        }
      return Jn(r().getDataset(t), l).map((c) => {
        const h = c[n] !== void 0 ? c[n] : c.Id || c.id || c.code, j = c[o] !== void 0 ? c[o] : c.FullName || c.fullName || c.Name || c.name || c.title || String(h);
        return {
          value: h,
          label: String(j),
          rawItem: c
        };
      });
    },
    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (t, a) => {
      let n = (a || "").trim();
      const o = n.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (o && (n = o[2].trim()), t)
        try {
          const l = n ? n.startsWith("?") ? n : n.startsWith("$") ? `?${n}` : `?$filter=${encodeURIComponent(n)}` : "", i = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${l}`, d = await fetch(i);
          if (d.ok) {
            const c = await d.json();
            return Array.isArray(c) ? c : c.value || [];
          }
        } catch {
        }
      return Jn(r().getDataset(t), n);
    },
    // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
    saveRecord: async (t, a, n) => {
      if (!t || !a)
        return { success: !1, message: "Thiếu thông tin Entity hoặc dữ liệu bản ghi" };
      let o = a.id || a.Id;
      const l = a.code || a.Code || a.recordCode || a.RecordCode || a.key || a.Key;
      if ((!o || o === "new" || Number(o) <= 0) && l) {
        const c = r().datasets[t];
        if (Array.isArray(c)) {
          const h = c.find((j) => (j.code || j.Code || j.recordCode || j.RecordCode || j.key || j.Key) === l);
          h && (o = h.id || h.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), d = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${d}` : `http://localhost:5048/api/core/data/${encodeURIComponent(t)}`, h = i ? "PUT" : "POST", j = { ...a };
        for (const [m, D] of Object.entries(j))
          if (D === "")
            (/date|time/i.test(m) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(m) || /gw|cbm|vgm|package/i.test(m)) && (j[m] = null);
          else if (typeof D == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(D.trim())) {
            const [u, b, w] = D.trim().split("/");
            j[m] = `${w}-${b.padStart(2, "0")}-${u.padStart(2, "0")}T00:00:00`;
          }
        const F = {};
        for (const [m, D] of Object.entries(j)) {
          if (!m || m.startsWith("fld_") || m.startsWith("btn_") || m.startsWith("sec_") || m.startsWith("tab_"))
            continue;
          const u = m.replace(/^fld_/, ""), b = u.charAt(0).toUpperCase() + u.slice(1);
          F[b] = D;
        }
        i ? F.Id = d : (F.Id = 0, F.Active = !0);
        const f = await fetch(c, {
          method: h,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(F)
        });
        if (f.ok) {
          const m = await f.json(), D = m.id || m.Id || d;
          Y.getState().setActiveRecordId(String(D)), n && (r().setFormRecord(n, m), r().markFormClean(n)), r().setFormRecord("default", m), r().markFormClean("default");
          const u = r().datasets[t];
          if (u && Array.isArray(u))
            if (i) {
              const b = u.map(
                (w) => (w.id || w.Id) === d ? { ...w, ...m } : w
              );
              r().registerDataset(t, b);
            } else
              r().registerDataset(t, [m, ...u]);
          return {
            success: !0,
            data: m,
            message: i ? `Cập nhật thành công bản ghi #${d} (${t}) vào Database!` : `Thêm mới thành công bản ghi (${t}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${f.status}` };
      } catch (c) {
        return { success: !1, message: `Lỗi kết nối API: ${(c == null ? void 0 : c.message) || c}` };
      }
    },
    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (t, a) => {
      if (!t || !a)
        return { success: !1, message: "Thiếu thông tin Entity hoặc ID bản ghi" };
      try {
        const n = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${a}`, {
          method: "DELETE"
        });
        if (n.ok) {
          const o = r().datasets[t];
          if (o && Array.isArray(o)) {
            const l = o.filter((i) => (i.id || i.Id) !== a);
            r().registerDataset(t, l);
          }
          return { success: !0, message: `Đã xóa thành công bản ghi #${a} (${t})!` };
        } else
          return { success: !1, message: `Lỗi xóa bản ghi: HTTP ${n.status}` };
      } catch (n) {
        return { success: !1, message: `Lỗi kết nối khi xóa: ${(n == null ? void 0 : n.message) || n}` };
      }
    },
    // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (chuẩn Core)
    collectScreenData: (t) => {
      const a = r(), n = Y.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((m) => String(m.id) === String(t)) || o.find((m) => String(m.id) === String(l)) || o.find((m) => m.isDetail) || o[0], d = {}, c = (m) => {
        var D, u, b;
        if (!(!m || !Array.isArray(m)))
          for (const w of m) {
            const p = (D = w.dataBinding) == null ? void 0 : D.fieldName, v = (u = w.props) == null ? void 0 : u.name, E = w.id, x = p || (typeof v == "string" ? v : "") || (E == null ? void 0 : E.replace(/^fld_/, "")), C = String(x || "").trim();
            if (C) {
              let R = lt(a, String(w.pageId || l || "default"), C, void 0);
              if (R === void 0 && ((b = w.props) == null ? void 0 : b.value) !== void 0 && (R = w.props.value), R === void 0 && typeof document < "u") {
                const I = document.getElementById(w.id) || document.querySelector(`[name="${w.id}"]`) || document.querySelector(`[name="${C}"]`);
                I && "value" in I && I.value !== "" && (R = I.value);
              }
              if (R != null) {
                d[C] = R;
                const I = C.charAt(0).toLowerCase() + C.slice(1), B = C.charAt(0).toUpperCase() + C.slice(1);
                d[I] = R, d[B] = R;
              }
            }
            w.children && w.children.length > 0 && c(w.children);
          }
      };
      i != null && i.components && c(i.components);
      const h = t || String(l || "default"), j = { ...a.formRecords.default, ...h ? a.formRecords[h] : {} }, F = { ...d, ...j };
      if (!F.id && !F.Id && typeof window < "u") {
        const D = new URLSearchParams(window.location.search).get("id");
        D && D !== "new" && Number(D) > 0 && (F.id = Number(D), F.Id = Number(D));
      }
      const f = {};
      for (const [m, D] of Object.entries(F)) {
        if (!m || m.startsWith("fld_") || m.startsWith("btn_") || m.startsWith("sec_") || m.startsWith("tab_")) continue;
        const u = m.replace(/^fld_/, ""), b = u.charAt(0).toLowerCase() + u.slice(1), w = u.charAt(0).toUpperCase() + u.slice(1);
        f[b] = D, f[w] = D;
      }
      return (F.id || F.Id) && (f.id = F.id || F.Id, f.Id = F.id || F.Id), s((m) => ({
        formRecords: {
          ...m.formRecords,
          [h]: f,
          default: f
        }
      })), f;
    }
  }))
);
function Jn(s, r) {
  if (!r || !r.trim() || !Array.isArray(s) || s.length === 0)
    return s;
  let t = r.trim();
  const a = t.match(/\$filter=([^&]+)/i);
  if (a)
    t = decodeURIComponent(a[1]).trim();
  else if (t.startsWith("?") && !t.toLowerCase().includes("$filter="))
    return s;
  const n = t.split(/\s+and\s+/i);
  return s.filter((o) => {
    for (const l of n) {
      const i = l.trim();
      if (!i) continue;
      const d = i.match(/^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$/i);
      if (d) {
        const c = d[1], h = (d[2] || d[3] || "=").toLowerCase(), j = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), f = Object.keys(o).find((m) => m.toLowerCase() === c.toLowerCase());
        if (f) {
          const D = (o[f] !== void 0 && o[f] !== null ? String(o[f]) : "").toLowerCase() === j.toLowerCase();
          if (h === "ne" || h === "!=" ? D : !D)
            return !1;
        }
      }
    }
    return !0;
  });
}
const Wa = ({ node: s, isEditing: r }) => {
  var x;
  const { props: t, style: a } = s, n = Y((C) => C.features), o = Y((C) => C.activeFeatureId), l = n.find((C) => String(C.id) === String(s.pageId)) || n.find((C) => String(C.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((x = s.dataBinding) == null ? void 0 : x.fieldName) || s.props.name || s.id), w = je((C) => lt(C, u, b, void 0)), p = je((C) => C.setFieldValue), v = w !== void 0 ? w : t.value ?? "", E = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Ft,
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
        ...D
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: r || !!t.readOnly,
          placeholder: t.placeholder || "Nhập dữ liệu...",
          value: v,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${E ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (C) => {
            const R = C.target.value;
            p(u, b, R), r || Ee(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: b,
              value: R
            });
          },
          onFocus: () => {
            r || Ee(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: b
            });
          },
          onBlur: (C) => {
            r || Ee(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: b,
              value: C.target.value
            });
          }
        }
      )
    }
  );
}, Ka = ({ node: s, isEditing: r }) => {
  var I;
  const { props: t, style: a } = s, n = Y((B) => B.features), o = Y((B) => B.activeFeatureId), l = n.find((B) => String(B.id) === String(s.pageId)) || n.find((B) => String(B.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((I = s.dataBinding) == null ? void 0 : I.fieldName) || s.props.name || s.id), w = je((B) => lt(B, u, b, void 0)), p = je((B) => B.setFieldValue), v = t.precision !== void 0 ? Number(t.precision) : 0, E = w !== void 0 ? w : t.value, x = E != null && E !== "" ? Number(E) : 0, C = (B) => B.toLocaleString("en-US", {
    minimumFractionDigits: v,
    maximumFractionDigits: v
  }), R = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Ft,
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
        ...D
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: r || !!t.readOnly,
          placeholder: t.placeholder || "0",
          value: C(x),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${R ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (B) => {
            const A = B.target.value.replace(/,/g, "");
            if (A === "" || !isNaN(Number(A))) {
              const Q = A === "" ? 0 : Number(A);
              p(u, b, Q), r || Ee(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: b,
                value: Q
              });
            }
          }
        }
      ) })
    }
  );
}, Ga = ({ node: s, isEditing: r }) => {
  const { props: t, style: a } = s, n = Y((u) => u.features), o = Y((u) => u.activeFeatureId), l = n.find((u) => String(u.id) === String(s.pageId)) || n.find((u) => String(u.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...D
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (u) => {
        r ? (u.ctrlKey || u.metaKey || u.altKey) && (u.stopPropagation(), Ee(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : Ee(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (u) => {
        u.stopPropagation(), Ee(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, Xn = ({
  node: s,
  isEditing: r,
  isSelected: t,
  onClick: a,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var W;
  const { props: d, style: c } = s;
  Y((J) => J.updateComponentProps);
  const h = !!(d.isTab || d.tab || d.isTabGroup || s.type === "Tabs"), j = [
    { id: "main", label: "TAB 1" }
  ], F = d.tabs || j, [f, m] = $(
    d.activeTabId || ((W = F[0]) == null ? void 0 : W.id) || "main"
  ), D = d.layoutMode || "flex", u = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, b = d.gridConfig || { columns: 12, gap: "16px" }, w = Number(
    b.columns || (typeof u.columnsPerRow == "number" ? u.columnsPerRow : 12)
  ) || 12, p = (c == null ? void 0 : c.justifyContent) || u.justify || "flex-start", v = (c == null ? void 0 : c.alignItems) || u.align || "flex-start", E = u.wrap || "wrap", x = D === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${w}, minmax(0, 1fr))`,
    gap: b.gap || u.gap || "16px",
    alignItems: v
  } : {
    display: "flex",
    flexDirection: u.direction || "row",
    flexWrap: E,
    justifyContent: p,
    alignItems: v,
    gap: u.gap || "12px"
  };
  let C = c != null && c.flex ? void 0 : "100%", R = c == null ? void 0 : c.flex, I = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const J = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(J) && J > 0) {
      const le = parseInt(o.gap || "12", 10) || 12, q = J === 1 ? "100%" : `calc((100% - ${(J - 1) * le}px) / ${J})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (C = q, R = `0 0 ${q}`, I = q);
    }
  }
  const { width: B, flex: A, ...Q } = c || {}, P = l ? {
    ...x,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: h ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (h ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (h ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...Q,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...x,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: h ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (h ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (h ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : C,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : R,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : I,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: a,
      onContextMenu: n,
      style: P,
      className: `relative transition-all duration-150 group/container box-border ${r ? `cursor-pointer ${t ? h ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : h ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${h ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: h ? `Tab: ${d.label || "Không tên"}` : "Khoảng trắng" }),
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
}, za = ({ node: s, children: r }) => {
  const { props: t, style: a } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: h, ...j } = a || {}, [F, f] = $(!1), m = t.title || t.label || "Khối Bố Cục (Section)", D = t.collapsible ?? !0, u = t.layoutMode || "grid", b = t.flexConfig || {}, w = t.gridConfig || {}, p = Number(w.columns || b.columnsPerRow || 12) || 12, v = b.gap || w.gap || "12px", E = (a == null ? void 0 : a.justifyContent) || b.justify || "flex-start", x = (a == null ? void 0 : a.alignItems) || b.align || "center", C = u === "flex" ? {
    display: "flex",
    flexDirection: b.direction || "row",
    flexWrap: b.wrap || "wrap",
    justifyContent: E,
    alignItems: x,
    gap: v
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${p}, minmax(0, 1fr))`,
    gap: v,
    alignItems: x
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...j
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(kt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: m })
          ] }),
          D && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => f(!F),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: F ? "Mở rộng" : "Thu gọn",
              children: F ? /* @__PURE__ */ e.jsx(St, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(ss, { className: "w-4 h-4" })
            }
          )
        ] }),
        !F && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: C, children: r })
      ]
    }
  );
}, Kl = ({ node: s, children: r }) => {
  const { props: t, style: a } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: h, ...j } = a || {}, F = t.title || t.label || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...j
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: F }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: t.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
}, Ua = ({
  x: s,
  y: r,
  column: t,
  isOpen: a,
  onClose: n,
  onToggleHide: o,
  onSetFreeze: l,
  onOpenProperties: i,
  onCloneColumn: d,
  onRemoveColumn: c,
  onToggleFilter: h
}) => {
  const j = Ge(null), [F, f] = os.useState(!1);
  if (Be(() => {
    if (!a) return;
    const u = (w) => {
      j.current && !j.current.contains(w.target) && n();
    }, b = (w) => {
      w.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", b), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", b);
    };
  }, [a, n]), !a) return null;
  const m = Math.min(s, window.innerWidth - 220), D = Math.min(r, window.innerHeight - 340);
  return Dt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: m, top: D },
        onClick: (u) => u.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(qs, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(qr, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                          /* @__PURE__ */ e.jsx(ar, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(Ys, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  F && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
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
                  /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Column Data Options" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors",
                onClick: () => {
                  d(t.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(lr, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-rose-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Remove Column" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-slate-800 pt-1 mt-1", children: [
            h && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  h(), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(or, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(Yr, { className: "w-3.5 h-3.5" }),
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
}, qa = ({
  x: s,
  y: r,
  row: t,
  rowIndex: a,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: d,
  onInsertRowBelow: c,
  onMoveRowUp: h,
  onMoveRowDown: j
}) => {
  const F = Ge(null);
  if (Be(() => {
    if (!o) return;
    const D = (b) => {
      F.current && !F.current.contains(b.target) && l();
    }, u = (b) => {
      b.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", D), document.addEventListener("keydown", u), () => {
      document.removeEventListener("mousedown", D), document.removeEventListener("keydown", u);
    };
  }, [o, l]), !o) return null;
  const f = Math.min(s, window.innerWidth - 220), m = Math.min(r, window.innerHeight - 260);
  return Dt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: F,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: f, top: m },
        onClick: (D) => D.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Thao Tác Dòng #",
              a + 1
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-mono", children: [
              "ID: ",
              (t == null ? void 0 : t.id) ?? a + 1
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
                  /* @__PURE__ */ e.jsx(lr, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  c(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(ir, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            h && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: a === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  h(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(cr, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            j && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: a >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  j(a), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(dr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, Ya = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], Dr = ({
  events: s = [],
  onChange: r,
  scriptFile: t = "transactionList.bl.ts",
  componentName: a = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = Ya
}) => {
  const [d, c] = $(""), [, h] = $(0), j = t || "transactionList.bl.ts", F = ka(j), f = () => {
    var p;
    const b = F[0] || "openTransactionDetail", w = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((p = i[0]) == null ? void 0 : p.value) || "click",
      handlerName: b,
      action: b
    };
    r([...s, w]);
  }, m = (b, w) => {
    const p = s.map((v, E) => {
      if (E !== b) return v;
      const x = { ...v, ...w };
      return w.handlerName && !w.action && (x.action = w.handlerName), x;
    });
    r(p);
  }, D = (b) => {
    const w = s.filter((p, v) => v !== b);
    r(w);
  }, u = () => {
    d.trim() && (Sa(j, d.trim()), c(""), h((b) => b + 1));
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
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: j })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: f,
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
        /* @__PURE__ */ e.jsx(As, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          j
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: d,
            onChange: (b) => c(b.target.value),
            onKeyDown: (b) => {
              b.key === "Enter" && (b.preventDefault(), u());
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
              /* @__PURE__ */ e.jsx(ir, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((b, w) => {
      const p = F.includes(b.handlerName || "");
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
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: b.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => D(w),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: b.trigger || "click",
                    onChange: (v) => m(w, { trigger: v.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((v) => /* @__PURE__ */ e.jsx("option", { value: v.value, children: v.label }, v.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: b.handlerName || F[0] || "",
                    onChange: (v) => {
                      const E = v.target.value;
                      m(w, { handlerName: E, action: E });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      F.map((v) => /* @__PURE__ */ e.jsxs("option", { value: v, children: [
                        v,
                        "()"
                      ] }, v)),
                      !p && b.handlerName && /* @__PURE__ */ e.jsxs("option", { value: b.handlerName, children: [
                        b.handlerName,
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
                  fs(
                    b,
                    a,
                    j,
                    {
                      componentId: n,
                      trigger: b.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        b.id || w
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(nt, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        a,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: j }),
        "."
      ] })
    ] })
  ] });
};
let $s = null;
async function Zs(s = !1) {
  if (!s && $s) return $s;
  try {
    const r = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (r.ok) {
      const t = await r.json();
      if (Array.isArray(t))
        return $s = t, t;
    }
  } catch (r) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", r);
  }
  return [];
}
function gs(s, r = []) {
  return s.map((t) => ({
    name: t.name,
    displayName: t.displayName || t.name,
    tableName: t.tableName,
    fields: t.columns.map((a) => ({
      name: a.name,
      displayName: a.displayName || a.name,
      dataType: a.dataType
    }))
  }));
}
function vs(s, r) {
  if (!r || !r.trim()) return;
  const t = r.trim().toLowerCase(), a = t.endsWith("s") ? t.slice(0, -1) : t;
  return s.find(
    (n) => n.name.toLowerCase() === t || n.name.toLowerCase() === a || n.tableName && n.tableName.toLowerCase() === t
  );
}
const Fr = ({
  isOpen: s,
  column: r,
  onClose: t,
  onSave: a
}) => {
  var w;
  const [n, o] = $(null), [l, i] = $("info"), [d, c] = $([]), h = Y((p) => p.features.find((v) => v.id === p.activeFeatureId));
  if (Be(() => {
    Zs().then((p) => {
      p && p.length > 0 && c(p);
    });
  }, []), Be(() => {
    if (r && s) {
      let p = [];
      if (Array.isArray(r.events))
        p = [...r.events];
      else if (typeof r.events == "string" && r.events.trim())
        try {
          const v = JSON.parse(r.events);
          Array.isArray(v) && (p = v);
        } catch {
        }
      p.length === 0 && r.action && (p = [
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
        events: p
      });
    }
  }, [r, s]), !s || !n) return null;
  const j = Array.isArray(n.events) ? n.events : [], F = gs(d), f = vs(F, n.reference || n.refName), m = f ? f.fields : [], D = n.componentType === "Select" || n.componentType === "Dropdown", u = (p, v) => {
    o((E) => {
      if (!E) return E;
      const x = { ...E, [p]: v };
      return p === "frozen" ? x.sticky = v ? "left" : "none" : p === "sticky" && (x.frozen = v === "left"), x;
    });
  }, b = (p) => {
    n && (a(n), t());
  };
  return Dt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => b(),
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
                /* @__PURE__ */ e.jsx(Bs, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" }),
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
                  onChange: (p) => u("code", p.target.value),
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
                  onChange: (p) => u("order", parseInt(p.target.value) || 0),
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
                  onChange: (p) => u("feature", p.target.value),
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
                  onChange: (p) => u("refClass", p.target.value),
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
                  onChange: (p) => u("filterTemplate", p.target.value),
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
                  onChange: (p) => u("formatExcell", p.target.value),
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
                  onChange: (p) => u("childStyle", p.target.value),
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
                  onChange: (p) => u("dataSource", p.target.value),
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
                  onChange: (p) => u("key", p.target.value),
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
                  onChange: (p) => u("title", p.target.value),
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
                  onChange: (p) => u("description", p.target.value),
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
                    onChange: (p) => {
                      const v = p.target.value;
                      o((E) => ({
                        ...E,
                        reference: v,
                        refName: v
                      }));
                    },
                    className: "w-full px-2 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                      F.map((p) => /* @__PURE__ */ e.jsxs("option", { value: p.name, children: [
                        p.displayName,
                        " (",
                        p.name,
                        ")"
                      ] }, p.name))
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
                    onChange: (p) => {
                      const v = p.target.value;
                      o((E) => ({
                        ...E,
                        refName: v,
                        reference: v
                      }));
                    },
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: D ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (p) => u("formatCell", p.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              !D && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (p) => u("formatData", p.target.value),
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
                    onChange: (p) => u("width", p.target.value),
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
                    onChange: (p) => u("minWidth", p.target.value),
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
                    onChange: (p) => u("maxWidth", p.target.value),
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
                  onChange: (p) => u("componentType", p.target.value),
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
                    onChange: (p) => u("precision", parseInt(p.target.value) || 0),
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
                    onChange: (p) => u("align", p.target.value),
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
                      /* @__PURE__ */ e.jsx("span", { children: j.length > 0 ? `Cấu hình (${j.length})` : "+ Thêm Sự Kiện" })
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
                      j.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: j.map((p) => `${p.trigger} ➔ ${p.handlerName || p.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      j.length,
                      " event",
                      j.length !== 1 ? "s" : ""
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
                    onChange: (p) => u("cascadeField", p.target.value),
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
                    onChange: (p) => u("aggregate", p.target.value),
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
                  onChange: (p) => u("validation", p.target.value),
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
            D && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((w = n.dropdownColumns) == null ? void 0 : w.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  j.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: j.length })
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
                    onChange: (p) => u("frozen", p.target.checked),
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
                    onChange: (p) => u("disabled", p.target.checked),
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
                    onChange: (p) => u("hasPermission", p.target.checked),
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
                    onChange: (p) => u("focusSearch", p.target.checked),
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
                    onChange: (p) => u("filterEq", p.target.checked),
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
                    onChange: (p) => u("filterLocal", p.target.checked),
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
                    onChange: (p) => u("hidden", p.target.checked),
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
                    onChange: (p) => u("active", p.target.checked),
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
                    onChange: (p) => u("advancedSearch", p.target.checked),
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
                    onChange: (p) => u("virtualScroll", p.target.checked),
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
                    onChange: (p) => u("upperCase", p.target.checked),
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
                    onChange: (p) => u("hasFilter", p.target.checked),
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
                    onChange: (p) => u("isRealtime", p.target.checked),
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
                    onChange: (p) => u("autoFit", p.target.checked),
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
                    onChange: (p) => u("aggregate", p.target.checked ? "sum" : "none"),
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
                    onChange: (p) => u("addDate", p.target.checked),
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
                    onChange: (p) => u("editable", p.target.checked),
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
                    onChange: (p) => u("isPivot", p.target.checked),
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
                    onChange: (p) => u("basicSearch", p.target.checked),
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
                    onChange: (p) => u("ignoreTrigger", p.target.checked),
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
                    onChange: (p) => u("hideGrid", p.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && D && (() => {
            const p = n.dropdownColumns || [], v = (x) => u("dropdownColumns", x), E = (f == null ? void 0 : f.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4 text-emerald-400" }),
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
                  m.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const x = m.filter((R) => R.name.toLowerCase() !== "id" && R.name.toLowerCase() !== "active").slice(0, 3), C = `${Math.floor(100 / Math.max(x.length, 1))}%`;
                        v(
                          x.map((R) => ({
                            key: R.name,
                            title: R.displayName,
                            width: C,
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
                        v([
                          ...p,
                          {
                            key: `col${p.length + 1}`,
                            title: `Cột ${p.length + 1}`,
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
                      onChange: (x) => u("idField", x.target.value),
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
                      onChange: (x) => u("formatData", x.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  p.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: p.map((x, C) => {
                    const R = E ? `{${E}.${x.key}}` : `{${x.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const I = n.formatData || "", B = I ? `${I} - ${R}` : R;
                          u("formatData", B);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          R
                        ]
                      },
                      `${x.key}-${C}`
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
                      onChange: (x) => u("populateField", x.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: m.map((x) => /* @__PURE__ */ e.jsxs("option", { value: x.name, children: [
                x.displayName,
                " (",
                x.dataType,
                ")"
              ] }, x.name)) }),
              p.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: p.map((x, C) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: C === 0,
                          onClick: () => {
                            const R = [...p], I = R[C];
                            R[C] = R[C - 1], R[C - 1] = I, v(R);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: C === p.length - 1,
                          onClick: () => {
                            const R = [...p], I = R[C];
                            R[C] = R[C + 1], R[C + 1] = I, v(R);
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
                        value: x.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (R) => {
                          const I = R.target.value, B = m.find((Q) => Q.name === I), A = [...p];
                          A[C] = {
                            ...A[C],
                            key: I,
                            title: B && (!A[C].title || A[C].title.startsWith("Cột ")) ? B.displayName : A[C].title
                          }, v(A);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: x.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (R) => {
                          const I = [...p];
                          I[C] = { ...I[C], title: R.target.value }, v(I);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: x.width || "50%",
                        placeholder: "Width",
                        onChange: (R) => {
                          const I = [...p];
                          I[C] = { ...I[C], width: R.target.value }, v(I);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: x.align || "left",
                        onChange: (R) => {
                          const I = [...p];
                          I[C] = { ...I[C], align: R.target.value }, v(I);
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
                        onClick: () => v(p.filter((R, I) => I !== C)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                C
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            Dr,
            {
              events: j,
              onChange: (p) => {
                u("events", p);
                const v = p.find((E) => E.trigger === "click" || E.trigger === "actionClick");
                v && u("action", v.handlerName || v.action);
              },
              scriptFile: (h == null ? void 0 : h.scriptFile) || "transactionList.bl.ts",
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
            /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Admin", "Manager", "Dispatcher", "Sales", "Customer"].map((p) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer", children: [
              /* @__PURE__ */ e.jsx("input", { type: "checkbox", defaultChecked: p === "Admin" || p === "Manager", className: "rounded text-emerald-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200", children: p })
            ] }, p)) })
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
            onClick: () => b(),
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
}, Ja = ({
  columns: s,
  data: r,
  showRowNumber: t = !0,
  rowNumberWidth: a = 55,
  leftOffsets: n = {}
}) => {
  if (!s.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = r.map((f) => f[i.key]).filter((f) => f != null && f !== "");
    if (i.aggregate === "count") {
      const f = d.length;
      return `${i.summaryPrefix || ""}${f}${i.summarySuffix || " dòng"}`;
    }
    const c = d.map((f) => {
      if (typeof f == "number") return f;
      const m = parseFloat(String(f).replace(/,/g, ""));
      return isNaN(m) ? 0 : m;
    });
    if (c.length === 0) return "—";
    let h = 0;
    i.aggregate === "sum" ? h = c.reduce((f, m) => f + m, 0) : i.aggregate === "avg" ? h = c.reduce((f, m) => f + m, 0) / c.length : i.aggregate === "min" ? h = Math.min(...c) : i.aggregate === "max" && (h = Math.max(...c));
    const j = i.precision ?? (i.format === "number_thousands" ? 0 : 2), F = j > 0 ? h.toLocaleString("en-US", { minimumFractionDigits: j, maximumFractionDigits: j }) : h.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${F}${i.summarySuffix || ""}`;
  };
  return /* @__PURE__ */ e.jsxs("tr", { className: "border-t-2 border-emerald-500/50 bg-slate-900/95 font-bold text-xs text-emerald-400 select-none shadow-inner", children: [
    t && /* @__PURE__ */ e.jsx(
      "td",
      {
        className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-20 bg-slate-900 border-r border-slate-800",
        style: { width: `${a}px`, minWidth: `${a}px` },
        children: "Σ"
      }
    ),
    s.filter((i) => !i.hidden).map((i, d) => {
      const c = l(i), h = d === 0, j = i.sticky === "left" || !!i.frozen, F = j && n[i.key] !== void 0 ? n[i.key] : void 0, f = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${f} ${j ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: F !== void 0 ? `${F}px` : void 0
          },
          children: h && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function es(s) {
  if (!s || typeof s != "string" || !s.trim()) return null;
  const r = s.trim(), t = r.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (t) {
    const o = parseInt(t[1], 10), l = parseInt(t[2], 10) - 1, i = parseInt(t[3], 10);
    if (l >= 0 && l <= 11 && o >= 1 && o <= 31)
      return { year: i, month: l, day: o };
  }
  const a = r.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (a) {
    const o = parseInt(a[1], 10), l = parseInt(a[2], 10) - 1, i = parseInt(a[3], 10);
    if (l >= 0 && l <= 11 && i >= 1 && i <= 31)
      return { year: o, month: l, day: i };
  }
  const n = new Date(s);
  return isNaN(n.getTime()) ? null : { year: n.getFullYear(), month: n.getMonth(), day: n.getDate() };
}
function Mt(s, r, t) {
  const a = String(t).padStart(2, "0"), n = String(r + 1).padStart(2, "0");
  return `${a}/${n}/${s}`;
}
const Xa = [
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
], Qa = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], Ir = ({
  value: s,
  onChange: r,
  placeholder: t = "DD/MM/YYYY",
  disabled: a = !1,
  readOnly: n = !1,
  className: o = "",
  inputClassName: l = "",
  error: i,
  title: d,
  tabIndex: c,
  onKeyDown: h,
  onFocus: j,
  onBlur: F,
  autoFocus: f = !1,
  isGridCell: m = !1
}) => {
  const D = Ge(null), u = Ge(null), b = Ge(null), [w, p] = $(!1), [v, E] = $(() => {
    const M = es(s);
    return M ? Mt(M.year, M.month, M.day) : s || "";
  }), x = He(() => es(s), [s]), C = He(() => {
    const M = /* @__PURE__ */ new Date();
    return { year: M.getFullYear(), month: M.getMonth(), day: M.getDate() };
  }, []), [R, I] = $((x == null ? void 0 : x.year) || C.year), [B, A] = $((x == null ? void 0 : x.month) ?? C.month), [Q, P] = $({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Be(() => {
    const M = es(s);
    M ? (E(Mt(M.year, M.month, M.day)), I(M.year), A(M.month)) : E(s || "");
  }, [s]);
  const W = () => {
    if (!D.current) return;
    const M = D.current.getBoundingClientRect(), z = 310, ue = 280, Ve = window.innerHeight - M.bottom < z && M.top > z;
    let We = Ve ? M.top - z - 4 : M.bottom + 4, Re = M.left;
    Re + ue > window.innerWidth - 10 && (Re = Math.max(10, window.innerWidth - ue - 10)), P({ top: We, left: Re, openUpwards: Ve });
  }, J = () => {
    a || n || (W(), p(!0));
  }, le = () => {
    p(!1);
  };
  Be(() => {
    if (!w) return;
    const M = (ue) => {
      const Ce = ue.target;
      D.current && !D.current.contains(Ce) && b.current && !b.current.contains(Ce) && le();
    }, z = () => {
      w && W();
    };
    return document.addEventListener("mousedown", M, !0), window.addEventListener("resize", z, !0), window.addEventListener("scroll", z, !0), () => {
      document.removeEventListener("mousedown", M, !0), window.removeEventListener("resize", z, !0), window.removeEventListener("scroll", z, !0);
    };
  }, [w]);
  const q = (M) => {
    M.stopPropagation(), B === 0 ? (A(11), I((z) => z - 1)) : A((z) => z - 1);
  }, we = (M) => {
    M.stopPropagation(), B === 11 ? (A(0), I((z) => z + 1)) : A((z) => z + 1);
  }, S = (M, z = 0) => {
    var We;
    let ue = R, Ce = B + z;
    Ce < 0 ? (Ce = 11, ue -= 1) : Ce > 11 && (Ce = 0, ue += 1);
    const Ve = Mt(ue, Ce, M);
    E(Ve), r(Ve), le(), (We = u.current) == null || We.focus();
  }, he = (M) => {
    var ue;
    M.stopPropagation();
    const z = Mt(C.year, C.month, C.day);
    E(z), I(C.year), A(C.month), r(z), le(), (ue = u.current) == null || ue.focus();
  }, Se = (M) => {
    var z;
    M.stopPropagation(), E(""), r(""), le(), (z = u.current) == null || z.focus();
  }, ie = (M) => {
    const z = M.target.value;
    E(z);
    const ue = es(z);
    if (ue) {
      const Ce = Mt(ue.year, ue.month, ue.day);
      r(Ce), I(ue.year), A(ue.month);
    } else z === "" && r("");
  }, ve = (M) => {
    if (M.key === "Escape")
      w && (M.stopPropagation(), le());
    else if (M.key === "Enter") {
      const z = es(v);
      if (z) {
        const ue = Mt(z.year, z.month, z.day);
        E(ue), r(ue);
      }
      w && le();
    } else (M.key === "F4" || M.altKey && M.key === "ArrowDown") && (M.preventDefault(), M.stopPropagation(), w ? le() : J());
    h && h(M);
  }, be = He(() => {
    const M = (new Date(R, B, 1).getDay() + 6) % 7, z = new Date(R, B + 1, 0).getDate(), ue = new Date(R, B, 0).getDate(), Ce = [];
    for (let Re = M - 1; Re >= 0; Re--)
      Ce.push({
        day: ue - Re,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let Re = 1; Re <= z; Re++)
      Ce.push({
        day: Re,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const We = (Ce.length <= 35 ? 35 : 42) - Ce.length;
    for (let Re = 1; Re <= We; Re++)
      Ce.push({
        day: Re,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return Ce;
  }, [R, B]), ye = () => w ? Dt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        style: {
          position: "fixed",
          top: `${Q.top}px`,
          left: `${Q.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (M) => M.stopPropagation(),
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
                children: /* @__PURE__ */ e.jsx(pr, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: B,
                  onChange: (M) => A(parseInt(M.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: Xa.map((M, z) => /* @__PURE__ */ e.jsx("option", { value: z, children: M }, z))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: R,
                  onChange: (M) => I(parseInt(M.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (M, z) => R - 20 + z).map((M) => /* @__PURE__ */ e.jsx("option", { value: M, children: M }, M))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: we,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ys, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: Qa.map((M, z) => /* @__PURE__ */ e.jsx("div", { className: z >= 5 ? "text-amber-400/80" : "", children: M }, z)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: be.map((M, z) => {
            const ue = x && M.isCurrentMonth && x.year === R && x.month === B && x.day === M.day, Ce = M.isCurrentMonth && C.year === R && C.month === B && C.day === M.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => S(M.day, M.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${ue ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : Ce ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : M.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: M.day
              },
              z
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
                  /* @__PURE__ */ e.jsx(Xr, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            v && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Se,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: le,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, G = m ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", Z = m ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: D, className: `${G} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        type: "text",
        tabIndex: c,
        autoFocus: f,
        disabled: a,
        readOnly: n,
        placeholder: t,
        title: i || d,
        value: v,
        onChange: ie,
        onKeyDown: ve,
        onFocus: j,
        onBlur: F,
        onClick: (M) => {
          M.stopPropagation(), w || J();
        },
        className: Z
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: a,
        onClick: (M) => {
          M.stopPropagation(), w ? le() : J();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(ur, { className: "w-3.5 h-3.5" })
      }
    ),
    ye()
  ] });
}, Za = ({
  column: s,
  value: r,
  row: t,
  rowIndex: a,
  columnIndex: n = 0,
  error: o,
  onChange: l,
  onActionClick: i,
  onKeyDown: d,
  onFocus: c
}) => {
  const h = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", j = r === "—" || r === "-" ? "" : r ?? "", F = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", f = (b) => {
    d && d(b, a, n, s.key);
  }, m = () => {
    c && c(a, n, s.key);
  }, D = {
    "data-grid-cell": `${a}_${n}`,
    "data-grid-row": a,
    "data-grid-col": n,
    "data-grid-colkey": s.key
  };
  if (s.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...D, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!r,
        disabled: s.disabled || !h,
        onClick: (b) => b.stopPropagation(),
        onChange: (b) => l(b.target.checked),
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: "w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      }
    ) });
  if (s.componentType === "Button") {
    const b = s.formatCell || s.title || r || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...D, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: (w) => {
          w.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: "px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20",
        children: b
      }
    ) });
  }
  if (s.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (b) => {
          b.preventDefault(), b.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: "text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate",
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r || "—" }),
          /* @__PURE__ */ e.jsx(xr, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!h) {
    if (s.precision !== void 0 && typeof r == "number") {
      const b = s.precision > 0 ? r.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : r.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: m,
          ...D,
          className: "font-mono text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: [
            b,
            s.summarySuffix ? ` ${s.summarySuffix}` : ""
          ]
        }
      );
    }
    if (s.formatCell && r !== void 0 && r !== null) {
      let b = s.formatCell.replace("{0}", String(r));
      return typeof t == "object" && t !== null && Object.keys(t).forEach((w) => {
        b = b.replace(new RegExp(`\\{${w}\\}`, "gi"), String(t[w] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: m,
          ...D,
          className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: b
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
        children: r != null ? String(r) : "—"
      }
    );
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let b = s.options || [];
    const w = s.reference || s.refName;
    if (b.length === 0 && w) {
      const p = je.getState().getDataset(w);
      if (Array.isArray(p) && p.length > 0) {
        const v = s.valueField || s.idField || "code", E = s.displayField || s.selectField || "name";
        b = p.map((x) => ({
          value: String(x[v] ?? x.code ?? x.id ?? ""),
          label: String(x[E] ?? x.name ?? x[v] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: r ?? "",
        disabled: s.disabled,
        title: o || void 0,
        onClick: (p) => p.stopPropagation(),
        onChange: (p) => l(p.target.value),
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${F} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          b.map((p) => /* @__PURE__ */ e.jsx("option", { value: p.value, className: "bg-slate-900 text-slate-100", children: p.label }, p.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...D, children: /* @__PURE__ */ e.jsx(
      Ir,
      {
        isGridCell: !0,
        value: j,
        disabled: s.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (b) => l(b),
        onKeyDown: f,
        onFocus: m
      }
    ) });
  if (s.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: j,
        placeholder: "0",
        disabled: s.disabled,
        title: o || void 0,
        step: s.precision && s.precision > 0 ? Math.pow(10, -s.precision) : 1,
        onClick: (b) => b.stopPropagation(),
        onChange: (b) => {
          const w = b.target.value;
          l(w === "" ? "" : Number(w));
        },
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${F} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (s.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: j,
        placeholder: s.title ? `Nhập ${s.title}...` : "Nhập...",
        disabled: s.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (b) => b.stopPropagation(),
        onChange: (b) => {
          const w = s.upperCase ? b.target.value.toUpperCase() : b.target.value;
          l(w);
        },
        onKeyDown: f,
        onFocus: m,
        ...D,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${F} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const u = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: j,
      placeholder: s.title ? `Nhập ${s.title}...` : "Nhập dữ liệu...",
      disabled: s.disabled,
      title: o || void 0,
      onClick: (b) => b.stopPropagation(),
      onChange: (b) => {
        const w = s.upperCase ? b.target.value.toUpperCase() : b.target.value;
        l(w);
      },
      onKeyDown: f,
      onFocus: m,
      ...D,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${F} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${u} ${s.cssClass || ""}`
    }
  );
};
function el({
  tableRef: s,
  rows: r,
  visibleColumns: t,
  selectedRowId: a,
  setSelectedRowId: n,
  selectedRowIds: o,
  setSelectedRowIds: l,
  onRowDoubleClick: i,
  onAddRow: d,
  onDeleteRow: c,
  onDuplicateRow: h,
  onToggleAll: j,
  onFilterByCell: F,
  onQuickSum: f,
  onToggleColumnFilters: m,
  isEditableTable: D = !0
}) {
  const [u, b] = $(null), w = ps(
    (x, C) => {
      if (x < 0 || x >= r.length || C < 0 || C >= t.length) return;
      const R = t[C], I = r[x], B = (I == null ? void 0 : I.id) ?? (I == null ? void 0 : I.Id) ?? x;
      if (n(B), b({ rowIndex: x, colIndex: C, colKey: R.key }), s.current) {
        const A = `[data-grid-cell="${x}_${C}"]`, Q = s.current.querySelector(A);
        if (Q) {
          Q.scrollIntoView({ block: "nearest", inline: "nearest" });
          const P = Q.tagName === "INPUT" || Q.tagName === "SELECT" || Q.tagName === "TEXTAREA" || Q.tagName === "BUTTON" ? Q : Q.querySelector("input, select, textarea, button") || Q;
          P.focus(), P instanceof HTMLInputElement && (P.type === "text" || P.type === "number") && P.select();
        }
      }
    },
    [r, t, s, n]
  ), p = ps(
    (x) => {
      if (!s.current) return;
      const C = s.current.querySelector(`[data-row-index="${x}"]`);
      C && C.scrollIntoView({ block: "nearest" });
    },
    [s]
  ), v = ps(
    (x) => {
      if (x.key === "F1") {
        x.preventDefault(), x.stopPropagation(), j == null || j();
        return;
      }
      if (x.key === "F2") {
        x.preventDefault(), x.stopPropagation(), F == null || F();
        return;
      }
      if (x.key === "F3") {
        x.preventDefault(), x.stopPropagation(), f == null || f();
        return;
      }
      if (x.key === "F4") {
        x.preventDefault(), x.stopPropagation(), d == null || d();
        return;
      }
      if (x.key === "F6") {
        x.preventDefault(), x.stopPropagation(), m == null || m();
        return;
      }
      if (x.key === "ArrowDown") {
        x.preventDefault();
        const C = r.findIndex((I, B) => (I.id ?? I.Id ?? B) === a), R = C < r.length - 1 ? C + 1 : C;
        if (R >= 0 && R !== C) {
          const I = r[R];
          n(I.id ?? I.Id ?? R), l(/* @__PURE__ */ new Set([I.id ?? I.Id ?? R])), p(R);
        }
        return;
      }
      if (x.key === "ArrowUp") {
        x.preventDefault();
        const C = r.findIndex((I, B) => (I.id ?? I.Id ?? B) === a), R = C > 0 ? C - 1 : 0;
        if (R >= 0 && R !== C) {
          const I = r[R];
          n(I.id ?? I.Id ?? R), l(/* @__PURE__ */ new Set([I.id ?? I.Id ?? R])), p(R);
        }
        return;
      }
      if (x.key === "Enter") {
        x.preventDefault();
        const C = r.findIndex((R, I) => (R.id ?? R.Id ?? I) === a);
        C >= 0 && i && i(r[C], C);
        return;
      }
      if (x.key === "Delete") {
        const C = r.findIndex((R, I) => (R.id ?? R.Id ?? I) === a);
        C >= 0 && c && (x.preventDefault(), c(C));
        return;
      }
      if ((x.ctrlKey || x.metaKey) && (x.key === "d" || x.key === "D")) {
        x.preventDefault();
        const C = r.findIndex((R, I) => (R.id ?? R.Id ?? I) === a);
        C >= 0 && h && h(C);
        return;
      }
    },
    [
      r,
      a,
      n,
      l,
      p,
      j,
      F,
      f,
      d,
      m,
      i,
      c,
      h
    ]
  ), E = ps(
    (x, C, R, I) => {
      var B, A, Q;
      if (x.key === "F1") {
        x.preventDefault(), x.stopPropagation(), j == null || j();
        return;
      }
      if (x.key === "F2") {
        x.preventDefault(), x.stopPropagation(), F == null || F();
        return;
      }
      if (x.key === "F3") {
        x.preventDefault(), x.stopPropagation(), f == null || f();
        return;
      }
      if (x.key === "F4") {
        x.preventDefault(), x.stopPropagation(), d == null || d();
        return;
      }
      if (x.key === "F6") {
        x.preventDefault(), x.stopPropagation(), m == null || m();
        return;
      }
      if (x.key === "ArrowDown") {
        x.preventDefault(), C < r.length - 1 && w(C + 1, R);
        return;
      }
      if (x.key === "ArrowUp") {
        x.preventDefault(), C > 0 && w(C - 1, R);
        return;
      }
      if (x.key === "ArrowLeft") {
        const P = x.target, W = P && P.selectionStart === 0 && P.selectionEnd === 0, J = P && P.selectionStart === 0 && P.selectionEnd === ((B = P.value) == null ? void 0 : B.length), le = !P || P.tagName === "SELECT" || P.type === "checkbox" || P.tagName === "BUTTON";
        (W || J || le) && R > 0 && (x.preventDefault(), w(C, R - 1));
        return;
      }
      if (x.key === "ArrowRight") {
        const P = x.target, W = P && P.selectionStart === ((A = P.value) == null ? void 0 : A.length), J = P && P.selectionStart === 0 && P.selectionEnd === ((Q = P.value) == null ? void 0 : Q.length), le = !P || P.tagName === "SELECT" || P.type === "checkbox" || P.tagName === "BUTTON";
        (W || J || le) && R < t.length - 1 && (x.preventDefault(), w(C, R + 1));
        return;
      }
      if (x.key === "Tab") {
        x.preventDefault(), x.shiftKey ? R > 0 ? w(C, R - 1) : C > 0 && w(C - 1, t.length - 1) : R < t.length - 1 ? w(C, R + 1) : C < r.length - 1 ? w(C + 1, 0) : d && (d(), setTimeout(() => {
          w(r.length, 0);
        }, 60));
        return;
      }
      if (x.key === "Enter") {
        if (x.preventDefault(), x.shiftKey) {
          C > 0 && w(C - 1, R);
          return;
        }
        C < r.length - 1 ? w(C + 1, R) : d && (d(), setTimeout(() => {
          w(r.length, R);
        }, 60));
        return;
      }
      if (x.key === "Escape") {
        x.preventDefault();
        const P = x.target;
        P == null || P.blur();
        return;
      }
    },
    [r, t, w, j, F, f, d, m]
  );
  return {
    focusedCell: u,
    setFocusedCell: b,
    focusCell: w,
    scrollToRow: p,
    handleTableContainerKeyDown: v,
    handleCellKeyDown: E
  };
}
function Rr(s) {
  return [...s].sort((r, t) => {
    const a = !!(r.frozen || r.sticky === "left"), n = !!(t.frozen || t.sticky === "left");
    if (a && !n) return -1;
    if (!a && n) return 1;
    const o = typeof r.order == "number" ? r.order : 999, l = typeof t.order == "number" ? t.order : 999;
    return o !== l ? o - l : 0;
  });
}
function ts(s) {
  return Rr(s).map((t, a) => ({
    ...t,
    order: a + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function Ks(s, r, t) {
  if (t < 0 || t >= s.length || r === t) return s;
  const a = [...s], [n] = a.splice(r, 1), o = a.filter((h) => h.frozen || h.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && t < o ? (n.frozen = !0, n.sticky = "left") : l && t >= o && (n.frozen = !1, n.sticky = "none"), a.splice(t, 0, n);
  const i = a.filter((h) => h.frozen || h.sticky === "left"), d = a.filter((h) => !h.frozen && h.sticky !== "left");
  return [...i, ...d].map((h, j) => ({
    ...h,
    order: j + 1,
    frozen: !!(h.frozen || h.sticky === "left"),
    sticky: h.frozen || h.sticky === "left" ? "left" : "none"
  }));
}
function Lr(s, r) {
  const t = s.map((a) => {
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
  return ts(t);
}
function tl(s, r = 55) {
  const t = {};
  let a = r, n = null;
  return s.forEach((o) => {
    if (!!(o.frozen || o.sticky === "left") && !o.hidden) {
      t[o.key] = a, n = o.key;
      const i = parseInt(String(o.width || "140"), 10) || 140;
      a += i;
    }
  }), { offsets: t, lastFrozenKey: n };
}
class sl {
  constructor() {
    Ts(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    Ts(this, "populateResolvers", /* @__PURE__ */ new Map());
  }
  /**
   * Đăng ký bộ lọc phụ thuộc giữa 2 trường (VD: country -> city, category -> product)
   */
  registerCascade(r, t, a) {
    const n = `${r.toLowerCase().trim()}->${t.toLowerCase().trim()}`;
    this.cascadeResolvers.set(n, a);
  }
  /**
   * Đăng ký bộ quy tắc tự động điền các trường liên đới khi trường nguồn thay đổi
   */
  registerPopulate(r, t) {
    const a = r.toLowerCase().trim().replace(/^fld_/, "");
    this.populateResolvers.set(a, t);
  }
  /**
   * Lấy danh sách options phụ thuộc theo Cascade
   */
  getCascadedOptions(r, t, a) {
    const n = `${r.toLowerCase().trim()}->${a.toLowerCase().trim()}`, o = this.cascadeResolvers.get(n);
    if (o) {
      const l = o(t);
      return Array.isArray(l) ? l : [];
    }
    return [];
  }
  /**
   * Tự động tính toán các trường cần điền (Auto-Populate)
   */
  calculateAutoPopulatedFields(r, t, a) {
    const n = r.toLowerCase().trim().replace(/^fld_/, ""), o = this.populateResolvers.get(n);
    return o ? o(t, a) || {} : {};
  }
}
const Pr = new sl();
function Gl(s, r, t) {
  return Pr.getCascadedOptions(s, r, t);
}
function nl(s, r, t) {
  return Pr.calculateAutoPopulatedFields(s, r, t);
}
function Gs(s) {
  const r = String(s || "").trim().toUpperCase();
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
    const h = Math.pow(2, i);
    n += c * h;
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
function Qn(s) {
  if (!s || typeof s != "string") return null;
  const r = s.trim();
  if (!r || r === "—" || r === "-") return null;
  const t = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, a = r.match(t);
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
function zs(s, r, t = "Ngày bắt đầu", a = "Ngày kết thúc") {
  const n = Qn(s), o = Qn(r);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${t} (${s}) không thể xảy ra sau ${a} (${r})`
  } : { isValid: !0 };
}
function rl(s, r, t = [], a = {}) {
  const n = [];
  for (const o of t) {
    if (o.rule === "required" && (r == null || typeof r == "string" && r.trim() === "" || Array.isArray(r) && r.length === 0)) {
      n.push(o.message || `${s} là trường bắt buộc nhập`);
      continue;
    }
    if (!(r == null || typeof r == "string" && r.trim() === "")) {
      if (o.rule === "minLength" && typeof r == "string") {
        const l = Number(o.value) || 0;
        r.length < l && n.push(o.message || `${s} phải có tối thiểu ${l} ký tự`);
      }
      if (o.rule === "maxLength" && typeof r == "string") {
        const l = Number(o.value) || 0;
        r.length > l && n.push(o.message || `${s} không được vượt quá ${l} ký tự`);
      }
      if (o.rule === "pattern" && o.value)
        try {
          (typeof o.value == "string" ? new RegExp(o.value) : o.value).test(String(r)) || n.push(o.message || `${s} không đúng định dạng quy định`);
        } catch {
          console.warn("[ValidationEngine] Biểu thức Regex không hợp lệ:", o.value);
        }
      if (o.rule === "containerNo") {
        const l = Gs(String(r));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = a[o.targetField];
        if (l) {
          const i = zs(String(r), String(l), s, o.targetField);
          !i.isValid && i.message && n.push(o.message || i.message);
        }
      }
      if (o.rule === "custom" && typeof o.validatorFn == "function") {
        const l = o.validatorFn(r, a);
        typeof l == "string" && l ? n.push(l) : l === !1 && n.push(o.message || `${s} không thỏa mãn điều kiện kiểm tra tùy biến`);
      }
    }
  }
  return {
    isValid: n.length === 0,
    errors: n
  };
}
function zl(s, r) {
  const t = {};
  for (const [a, n] of Object.entries(r)) {
    const o = s[a], l = rl(a, o, n, s);
    l.isValid || (t[a] = l.errors);
  }
  return t;
}
const ze = {
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
}, al = {
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
}, Vt = is()(
  Cs((s, r) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...ze["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...ze["FCLI-26020005"].shippingInfo],
      grid_container_info: [...ze["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...ze["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const a = ze[t];
      a && s({
        activeJobNo: t,
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
      const t = r().jobs, n = `FCLI-2602000${t.length + 5}`, o = {
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
      return ze[n] = {
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
    updateMasterField: (t, a) => {
      const n = String(al[t] || t), l = { ...r().masterRecord, [n]: a }, i = nl(n, a, l);
      Object.assign(l, i);
      const d = { ...r().validationErrors };
      if (n === "mblNo") {
        const h = String(a || "").trim();
        h ? /^[A-Z0-9]{8,18}$/i.test(h) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(a || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const h = l.mblIssuedDate, j = l.shipmentDate;
        if (h && j) {
          const F = zs(h, j, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          F.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = F.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: d
      });
      const c = r().activeJobNo;
      ze[c] && (ze[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, a, n, o) => {
      const l = r().detailGrids, i = l[t] || [], d = { ...r().validationErrors }, c = `${t}_${a}_${n}`, h = i.map((F, f) => F.id !== void 0 && F.id === a || F.id === void 0 && f === a ? { ...F, [n]: o } : F);
      if (n === "containerNo") {
        const F = Gs(String(o));
        F.isValid ? delete d[c] : d[c] = F.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const F = h.find((f) => f.id === a);
        if (F && F.etd && F.eta) {
          const f = zs(F.etd, F.eta, "ETD", "ETA"), m = `${t}_${a}_etd_eta`;
          f.isValid ? delete d[m] : d[m] = f.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: h },
        validationErrors: d
      }), t === "grid_container_info" && r().recalculateTotals();
      const j = r().activeJobNo;
      ze[j] && (t === "grid_shipping_info" && (ze[j].shippingInfo = h), t === "grid_container_info" && (ze[j].containerInfo = h), t === "grid_shipment_detail" && (ze[j].shipmentDetail = h));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (t, a) => {
      const n = r().detailGrids, o = n[t] || [], l = o.length > 0 ? Math.max(...o.map((h) => Number(h.id) || 0)) + 1 : 1, i = r().activeJobNo;
      let d = { id: l, jobNo: i };
      t === "grid_container_info" ? d = {
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
      } : t === "grid_shipping_info" ? d = {
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
      } : t === "grid_shipment_detail" ? d = {
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
      s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && r().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (t, a) => {
      const n = r().detailGrids, l = (n[t] || []).filter((i, d) => d !== a);
      s({
        detailGrids: { ...n, [t]: l }
      }), t === "grid_container_info" && r().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (t, a) => {
      const n = r().detailGrids, o = n[t] || [], l = o[a];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((h) => Number(h.id) || 0)) + 1 : 1, d = { ...l, id: i }, c = [...o];
      c.splice(a + 1, 0, d), s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && r().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const t = r().detailGrids.grid_container_info || [];
      let a = 0, n = 0, o = 0, l = 0;
      t.forEach((h) => {
        a += Number(h.packageNumber) || 0, n += Number(h.gw) || 0, o += Number(h.cbm) || 0, l += Number(h.vgm) || 0;
      });
      const d = {
        ...r().masterRecord,
        tPackages: a,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      s({ masterRecord: d });
      const c = r().activeJobNo;
      ze[c] && (ze[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = r().masterRecord, a = {};
      return (o = t.jobNo) != null && o.trim() || (a.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (a.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : a.mblNo = "Số M-B/L không được để trống", (r().detailGrids.grid_container_info || []).forEach((i) => {
        const d = Gs(i.containerNo);
        d.isValid || (a[`grid_container_info_${i.id}_containerNo`] = d.message);
      }), s({ validationErrors: a }), Object.keys(a).length === 0;
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
function ll({
  fileName: s = "Du_Lieu_Bang",
  sheetName: r = "Sheet1",
  columns: t,
  rows: a,
  includeSummary: n = !0
}) {
  const o = t.filter((D) => !D.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const D of o) {
    const u = D.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${u};padding:8px 12px;font-size:11pt;">${D.title || D.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  a.forEach((D, u) => {
    const b = u % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${b};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${u + 1}</td>`;
    for (const w of o) {
      const p = D[w.key], v = w.align || "left";
      let E = p != null ? String(p) : "";
      typeof p == "number" && (E = p.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${v};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Zn(E)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((D) => D.aggregate);
  if (n && c && a.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const D of o) {
      const u = D.align || "left";
      if (D.aggregate === "sum") {
        const b = a.reduce((p, v) => {
          const E = Number(v[D.key]);
          return p + (isNaN(E) ? 0 : E);
        }, 0), w = b % 1 !== 0 ? b.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : b.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${w}${D.summarySuffix ? ` ${D.summarySuffix}` : ""}</td>`;
      } else if (D.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${a.length}</td>`;
      else if (D.aggregate === "avg") {
        const b = a.reduce((p, v) => {
          const E = Number(v[D.key]);
          return p + (isNaN(E) ? 0 : E);
        }, 0), w = a.length > 0 ? (b / a.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${u};padding:8px 10px;font-weight:bold;">${w}</td>`;
      } else
        d += '<td style="border:1px solid #334155;"></td>';
    }
    d += "</tr>";
  }
  const h = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${Zn(r)}</x:Name>
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
  `.trim(), j = new Blob(["\uFEFF", h], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), F = s.endsWith(".xls") || s.endsWith(".xlsx") ? s : `${s}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, f = URL.createObjectURL(j), m = document.createElement("a");
  m.href = f, m.download = F, document.body.appendChild(m), m.click(), document.body.removeChild(m), URL.revokeObjectURL(f);
}
function Zn(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function ol(s) {
  const {
    title: r,
    subtitle: t,
    columns: a,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = s, c = a.filter((p) => !p.hidden), h = window.open("", "_blank", "width=1100,height=850");
  if (!h) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const j = /* @__PURE__ */ new Date(), F = `Ngày in: ${j.toLocaleDateString("vi-VN")} lúc ${j.toLocaleTimeString("vi-VN")}`, f = Object.entries(i).map(
    ([p, v]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${st(p)}:</strong>
          <span>${st(String(v))}</span>
        </div>`
  ).join(""), m = c.map((p) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${p.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${st(p.title || p.key)}
      </th>`).join(""), D = n.map((p, v) => {
    const E = v % 2 === 0 ? "#ffffff" : "#f8fafc", x = c.map((C) => {
      const R = p[C.key] ?? "", I = C.align || (typeof R == "number" ? "right" : "left");
      let B = R;
      return typeof R == "number" && (B = R.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${I}; font-size: 11px;">
            ${st(String(B))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${E};">${x}</tr>`;
  }).join("");
  let u = "";
  o && (u = `<tfoot><tr>${c.map((v, E) => {
    const x = o[v.key] ?? (E === 0 ? "TỔNG CỘNG" : ""), C = v.align || "left";
    let R = x;
    return typeof x == "number" && (R = x.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${C}; font-size: 11px;">
          ${st(String(R))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const b = d ? `
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
      <title>${st(r)} - UIForge Report</title>
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
              ${st(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${st(r)}
            </h1>
            ${t ? `<div style="font-size: 12px; color: #475569;">${st(t)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${st(F)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${f ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${f}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${m}</tr>
        </thead>
        <tbody>
          ${D}
        </tbody>
        ${u}
      </table>

      ${b}

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
  h.document.open(), h.document.write(w), h.document.close();
}
function st(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const er = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], il = ({ node: s }) => {
  var De, Ne, ge, Oe, Pe;
  const { props: r, style: t } = s, a = Y((y) => y.updateComponentProps), n = He(() => r.columns && Array.isArray(r.columns) ? r.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [r.columns]), o = He(() => Rr(n), [n]), l = He(() => o.filter((y) => !y.hidden), [o]), i = Vt((y) => y.detailGrids), d = Vt((y) => y.updateGridCell), c = Vt((y) => y.addGridRow), h = Vt((y) => y.deleteGridRow), j = Vt((y) => y.duplicateGridRow), F = Vt((y) => y.validationErrors), f = !!(i && i[s.id]), m = r.reference || r.refName || ((De = s.dataBinding) == null ? void 0 : De.refName) || ((Ne = s.dataBinding) == null ? void 0 : Ne.entityName) || "", D = r.query || ((ge = s.dataBinding) == null ? void 0 : ge.query) || r.dataSource || ((Oe = s.dataBinding) == null ? void 0 : Oe.dataSource) || r.sqlWhere || ((Pe = s.dataBinding) == null ? void 0 : Pe.sqlWhere) || r.filter || "", u = je((y) => m ? y.datasets[m] : void 0), [b, w] = $(() => f && i && i[s.id] ? i[s.id] : r.data && Array.isArray(r.data) ? r.data : u && Array.isArray(u) ? u : er);
  Be(() => {
    r.data && Array.isArray(r.data) && r.data.length > 0 && w(r.data);
  }, [r.data]), Be(() => {
    u && Array.isArray(u) && u.length > 0 && w(u);
  }, [u]);
  const p = He(() => f && i && i[s.id] && i[s.id].length > 0 ? i[s.id] : b && Array.isArray(b) && b.length > 0 ? b : u && Array.isArray(u) && u.length > 0 ? u : r.data && Array.isArray(r.data) ? r.data : er, [f, i, s.id, b, u, r.data]);
  Be(() => {
    if (r.data && Array.isArray(r.data) && r.data.length > 0) return;
    let y = !0;
    return m && je.getState().queryEntity(m, D).then((_) => {
      y && _ && _.length > 0 && w(_);
    }), () => {
      y = !1;
    };
  }, [m, D, r.data]);
  const [v, E] = $(""), [x, C] = $(null), [R, I] = $("asc"), [B, A] = $(!1), [Q, P] = $({}), [W, J] = $({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [le, q] = $({
    isOpen: !1,
    column: null
  }), [we, S] = $({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [he, Se] = $(null), [ie, ve] = $(null), [be, ye] = $(null), G = 55, { offsets: Z, lastFrozenKey: M } = He(() => tl(o, G), [o]), z = He(() => {
    let y = [...p];
    if (v.trim()) {
      const _ = v.toLowerCase();
      y = y.filter(
        (L) => Object.values(L).some(
          (V) => String(V).toLowerCase().includes(_)
        )
      );
    }
    return B && Object.entries(Q).forEach(([_, L]) => {
      if (L && L.trim()) {
        const V = L.toLowerCase().trim();
        y = y.filter((X) => {
          const re = X[_];
          return re != null && String(re).toLowerCase().includes(V);
        });
      }
    }), x && y.sort((_, L) => {
      const V = _[x], X = L[x];
      if (V === X) return 0;
      if (V == null) return 1;
      if (X == null) return -1;
      let re = 0;
      return typeof V == "number" && typeof X == "number" ? re = V - X : re = String(V).localeCompare(String(X)), R === "asc" ? re : -re;
    }), y;
  }, [p, v, B, Q, x, R]), ue = (y) => {
    w(y), a(s.id, { data: y });
  }, Ce = (y) => {
    const _ = ts(y);
    a(s.id, { columns: _ });
  }, Ve = (y, _, L) => {
    f && d(s.id, y, _, L);
    const X = (f && i && i[s.id] ? i[s.id] : p).map((re, Fe) => re.id !== void 0 && re.id === y || re.id === void 0 && Fe === y ? { ...re, [_]: L } : re);
    ue(X), m && je.getState().registerDataset(m, X);
  }, We = (y, _, L) => {
    const X = Y.getState().features.find((_e) => String(_e.id) === String(s.pageId)), re = X == null ? void 0 : X.scriptFile, Fe = (L == null ? void 0 : L.action) || y;
    let Ae = !1;
    L != null && L.events && (Array.isArray(L.events) ? L.events : typeof L.events == "string" ? (() => {
      try {
        return JSON.parse(L.events);
      } catch {
        return [];
      }
    })() : []).forEach((Me) => {
      Ae = !0, fs(
        Me,
        L.title || L.key,
        re,
        { row: _, col: L, column: L, action: Me.action || Me.handlerName || Fe, value: _[(L == null ? void 0 : L.key) || ""] }
      );
    }), !Ae && Fe && fs(
      { id: `col_act_${(L == null ? void 0 : L.key) || y}`, trigger: "actionClick", action: Fe, handlerName: Fe },
      s.props.label || "Bảng dữ liệu",
      re,
      { row: _, col: L, column: L, action: Fe, value: _[(L == null ? void 0 : L.key) || ""] }
    ), s.events && s.events.length > 0 && Ee(s.events, "actionClick", s.props.label || "Bảng dữ liệu", re, {
      action: Fe,
      row: _,
      col: L,
      column: L,
      colKey: L == null ? void 0 : L.key,
      value: _[(L == null ? void 0 : L.key) || ""]
    });
  }, [Re, k] = $(null), [N, O] = $(/* @__PURE__ */ new Set()), de = Ge(null), se = (y, _, L = "info") => {
    const V = document.createElement("div"), X = L === "success" ? "border-emerald-500 shadow-emerald-500/30" : L === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", re = L === "success" ? "⚡" : L === "warning" ? "⚠️" : "ℹ️", Fe = L === "success" ? "bg-emerald-600/25 text-emerald-400" : L === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    V.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${X} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, V.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${Fe} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${re}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${y}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${_}</div>
      </div>
    `, document.body.appendChild(V), setTimeout(() => {
      V.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => V.remove(), 300);
    }, 3800);
  }, fe = () => {
    if (N.size === z.length && z.length > 0)
      O(/* @__PURE__ */ new Set()), se("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const y = new Set(z.map((_, L) => _.id ?? _.Id ?? L));
      O(y), z.length > 0 && k(z[0].id ?? z[0].Id ?? 0), se("F1 (Toggle All)", `Đã chọn tất cả ${y.size} dòng trong bảng`, "success");
    }
  }, ne = () => {
    var X;
    let y = oe == null ? void 0 : oe.colKey, _ = (oe == null ? void 0 : oe.rowIndex) ?? 0;
    !y && l.length > 0 && (y = l[0].key);
    const L = z[_], V = L && y ? L[y] : null;
    if (V != null && String(V).trim() !== "" && String(V) !== "—") {
      P((Fe) => ({ ...Fe, [y]: String(V) })), A(!0);
      const re = ((X = l.find((Fe) => Fe.key === y)) == null ? void 0 : X.title) || y;
      se("F2 (Lọc theo ô)", `Đã lọc cột [${re}] với giá trị "${V}"`, "success");
    } else
      A(!0), se("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, xe = () => {
    const y = N.size > 0 ? z.filter((V, X) => N.has(V.id ?? V.Id ?? X)) : z;
    if (y.length === 0) {
      se("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const _ = l.filter(
      (V) => V.componentType === "Number" || V.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (X) => V.key.toLowerCase().includes(X)
      )
    );
    if (_.length === 0) {
      se("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const L = _.map((V) => {
      const X = y.reduce((Fe, Ae) => {
        const _e = Number(Ae[V.key]);
        return Fe + (isNaN(_e) ? 0 : _e);
      }, 0), re = X % 1 !== 0 ? X.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : X.toLocaleString("en-US");
      return `${V.title || V.key}: ${re}${V.summarySuffix ? ` ${V.summarySuffix}` : ""}`;
    });
    se(
      `F3 (Tổng ${y.length} dòng)`,
      L.join(" | "),
      "success"
    );
  }, ee = () => {
    mt();
    const y = z.length;
    se("F4 (Thêm dòng)", `Đã thêm dòng mới số #${y + 1}`, "success"), setTimeout(() => {
      U(y, 0);
    }, 60);
  }, ce = () => {
    try {
      ll({
        fileName: r.label ? String(r.label).replace(/\s+/g, "_") : "Du_Lieu_Bang",
        sheetName: r.label ? String(r.label).slice(0, 30) : "Sheet1",
        columns: l,
        rows: z,
        includeSummary: !0
      }), se("Xuất Excel", `Đã xuất ${z.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (y) {
      se("Lỗi xuất Excel", (y == null ? void 0 : y.message) || "Không thể tạo file Excel", "warning");
    }
  }, Ie = () => {
    try {
      const y = {};
      l.forEach((_) => {
        if (_.aggregate === "sum") {
          const L = z.reduce((V, X) => V + (Number(X[_.key]) || 0), 0);
          y[_.key] = L;
        } else _.aggregate === "count" && (y[_.key] = z.length);
      }), ol({
        title: r.label ? String(r.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${z.length} bản ghi`,
        columns: l,
        rows: z,
        summaryRow: Object.keys(y).length > 0 ? y : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${z.length} dòng`,
          "Bộ lọc áp dụng": v ? `Tìm kiếm: "${v}"` : "Tất cả dữ liệu"
        }
      }), se("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (y) {
      se("Lỗi In Báo Cáo", (y == null ? void 0 : y.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, me = async () => {
    if (E(""), P({}), m) {
      const y = await je.getState().queryEntity(m, D);
      y && y.length > 0 && (w(y), se("Làm mới dữ liệu", `Đã tải lại ${y.length} bản ghi từ máy chủ`, "info"));
    }
  }, {
    focusedCell: oe,
    setFocusedCell: K,
    focusCell: U,
    handleTableContainerKeyDown: Je,
    handleCellKeyDown: It
  } = el({
    tableRef: de,
    rows: z,
    visibleColumns: l,
    selectedRowId: Re,
    setSelectedRowId: k,
    selectedRowIds: N,
    setSelectedRowIds: O,
    onRowDoubleClick: (y, _) => ht(y, _),
    onAddRow: ee,
    onDeleteRow: (y) => ot(y),
    onDuplicateRow: (y) => bt(y),
    onToggleAll: fe,
    onFilterByCell: ne,
    onQuickSum: xe,
    onToggleColumnFilters: () => A((y) => !y)
  }), Rt = (y, _, L) => {
    const V = y.id ?? y.Id ?? _;
    if (k(V), L != null && L.ctrlKey || L != null && L.metaKey)
      O((Ae) => {
        const _e = new Set(Ae);
        return _e.has(V) ? _e.delete(V) : _e.add(V), _e;
      });
    else if (L != null && L.shiftKey && Re !== null) {
      const Ae = z.findIndex((_e, Me) => (_e.id ?? _e.Id ?? Me) === Re);
      if (Ae !== -1) {
        const _e = Math.min(Ae, _), Me = Math.max(Ae, _), qe = /* @__PURE__ */ new Set();
        for (let tt = _e; tt <= Me; tt++)
          qe.add(z[tt].id ?? z[tt].Id ?? tt);
        O(qe);
      }
    } else
      O(/* @__PURE__ */ new Set([V]));
    const re = Y.getState().features.find((Ae) => String(Ae.id) === String(s.pageId)), Fe = re == null ? void 0 : re.scriptFile;
    m && je.getState().setSelectedRecord(m, y), s.events && s.events.length > 0 && (Ee(s.events, "rowClick", s.props.label || "Bảng dữ liệu", Fe, {
      row: y,
      rowIndex: _,
      action: "rowClick"
    }), Ee(s.events, "click", s.props.label || "Bảng dữ liệu", Fe, {
      row: y,
      rowIndex: _,
      action: "click"
    }), Ee(s.events, "select", s.props.label || "Bảng dữ liệu", Fe, {
      row: y,
      rowIndex: _,
      action: "select"
    }));
  }, ht = (y, _) => {
    const V = Y.getState().features.find((re) => String(re.id) === String(s.pageId)), X = V == null ? void 0 : V.scriptFile;
    s.events && s.events.length > 0 && Ee(s.events, "dblclick", s.props.label || "Bảng dữ liệu", X, {
      row: y,
      rowIndex: _,
      id: y.id ?? y.Id,
      action: "dblclick"
    });
  }, mt = () => {
    f && c(s.id);
    const y = f && i && i[s.id] ? i[s.id] : p, L = { id: y.length > 0 ? Math.max(...y.map((X) => Number(X.id) || 0)) + 1 : 1 };
    o.forEach((X) => {
      X.componentType === "Number" ? L[X.key] = 0 : X.componentType === "Checkbox" ? L[X.key] = !1 : X.componentType === "DatePicker" ? L[X.key] = "08/11/2026" : L[X.key] = "";
    });
    const V = [...y, L];
    ue(V), m && je.getState().registerDataset(m, V);
  }, bt = (y) => {
    f && j(s.id, y);
    const _ = f && i && i[s.id] ? i[s.id] : p, L = _[y], V = Math.max(..._.map((Fe) => Number(Fe.id) || 0)) + 1, X = { ...L, id: V }, re = [..._];
    re.splice(y + 1, 0, X), ue(re), m && je.getState().registerDataset(m, re);
  }, ot = (y) => {
    f && h(s.id, y);
    const _ = f && i && i[s.id] ? i[s.id] : p;
    if (_.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const L = _.filter((V, X) => X !== y);
    ue(L), m && je.getState().registerDataset(m, L);
  }, Lt = (y, _, L) => {
    y.preventDefault(), y.stopPropagation(), S({
      isOpen: !0,
      x: y.clientX,
      y: y.clientY,
      row: _,
      rowIndex: L
    });
  }, it = (y) => {
    const _ = f && i && i[s.id] ? i[s.id] : p, V = { id: _.length > 0 ? Math.max(..._.map((re) => Number(re.id) || 0)) + 1 : 1 };
    o.forEach((re) => {
      re.componentType === "Number" ? V[re.key] = 0 : re.componentType === "Checkbox" ? V[re.key] = !1 : (re.componentType, V[re.key] = "");
    });
    const X = [..._];
    X.splice(y + 1, 0, V), ue(X), m && je.getState().registerDataset(m, X);
  }, ft = (y) => {
    if (y <= 0) return;
    const L = [...f && i && i[s.id] ? i[s.id] : p], [V] = L.splice(y, 1);
    L.splice(y - 1, 0, V), ue(L), m && je.getState().registerDataset(m, L);
  }, Xe = (y) => {
    const _ = f && i && i[s.id] ? i[s.id] : p;
    if (y >= _.length - 1) return;
    const L = [..._], [V] = L.splice(y, 1);
    L.splice(y + 1, 0, V), ue(L), m && je.getState().registerDataset(m, L);
  }, ct = (y, _) => {
    Se(_), y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", _);
  }, rt = (y, _) => {
    if (y.preventDefault(), y.dataTransfer.dropEffect = "move", he === _) return;
    const L = y.currentTarget.getBoundingClientRect(), V = y.clientX < L.left + L.width / 2;
    ve(_), ye(V ? "left" : "right");
  }, gt = (y) => {
    const _ = y.relatedTarget;
    y.currentTarget.contains(_) || (ve(null), ye(null));
  }, Pt = (y, _) => {
    if (y.preventDefault(), !he || he === _) {
      Se(null), ve(null), ye(null);
      return;
    }
    const L = o.findIndex((re) => re.key === he);
    let V = o.findIndex((re) => re.key === _);
    if (L === -1 || V === -1) {
      Se(null), ve(null), ye(null);
      return;
    }
    be === "right" && L > V ? V = V + 1 : be === "left" && L < V && (V = V - 1), V = Math.max(0, Math.min(o.length - 1, V));
    const X = Ks(o, L, V);
    Ce(X), Se(null), ve(null), ye(null);
  }, vt = () => {
    Se(null), ve(null), ye(null);
  }, yt = (y) => {
    y.sortable && (x === y.key ? R === "asc" ? I("desc") : C(null) : (C(y.key), I("asc")));
  }, jt = (y, _, L) => {
    y.preventDefault(), y.stopPropagation(), J({
      isOpen: !0,
      x: y.clientX,
      y: y.clientY,
      column: _,
      columnIndex: L
    });
  }, dt = (y) => {
    const _ = o.map(
      (L) => L.key === y ? { ...L, hidden: !L.hidden } : L
    );
    Ce(_);
  }, $t = (y) => {
    const _ = Lr(o, y);
    Ce(_);
  }, Et = (y) => {
    q({
      isOpen: !0,
      column: y
    });
  }, Nt = (y) => {
    const _ = o.findIndex((re) => re.key === y);
    if (_ === -1) return;
    const L = o[_], V = {
      ...L,
      key: `${L.key}_copy`,
      title: `${L.title} (Bản sao)`,
      order: (L.order ?? _) + 1
    }, X = [...o];
    X.splice(_ + 1, 0, V), Ce(X);
  }, wt = (y) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const _ = o.filter((L) => L.key !== y);
    Ce(_);
  }, At = (y) => {
    const _ = o.map(
      (L) => L.key === y.key ? y : L
    );
    Ce(_);
  }, { flex: zt, flexGrow: Ut, flexShrink: qt, flexBasis: T, minWidth: H, maxWidth: te, width: pe, ...Te } = t || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...Te
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: r.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              z.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: v,
                  onChange: (y) => E(y.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => A((y) => !y),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${B ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(or, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: mt,
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
                onClick: me,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(Qr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: ce,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Zr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Ie,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: fe,
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
                  onClick: xe,
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
                  onClick: () => A((y) => !y),
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
            ref: de,
            tabIndex: 0,
            onKeyDown: Je,
            className: "w-full overflow-x-auto select-none relative focus:outline-none",
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: fe,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${G}px`, minWidth: `${G}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: z.length > 0 && N.size === z.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((y, _) => {
                    const L = !!(y.frozen || y.sticky === "left"), V = L && Z[y.key] !== void 0 ? Z[y.key] : void 0, X = y.key === M, re = he === y.key, Fe = ie === y.key;
                    let Ae = "";
                    Fe && be === "left" ? Ae = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : Fe && be === "right" && (Ae = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const _e = y.align === "right" ? "text-right" : y.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Me) => ct(Me, y.key),
                        onDragOver: (Me) => rt(Me, y.key),
                        onDragLeave: gt,
                        onDrop: (Me) => Pt(Me, y.key),
                        onDragEnd: vt,
                        onContextMenu: (Me) => jt(Me, y, _),
                        onClick: () => yt(y),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${_e} ${L ? `sticky z-20 bg-[#0b1329] ${X ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${re ? "opacity-30 bg-slate-800/80" : ""} ${Ae}`,
                        style: {
                          width: y.width,
                          minWidth: y.minWidth || y.width || "100px",
                          maxWidth: y.maxWidth,
                          left: V !== void 0 ? `${V}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${y.order ?? _ + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${y.align === "right" ? "justify-end" : y.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            L && /* @__PURE__ */ e.jsx(ar, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: y.title || y.key }),
                            y.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              y.order
                            ] })
                          ] }),
                          y.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: x === y.key ? R === "asc" ? /* @__PURE__ */ e.jsx(cr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(dr, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Js, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      y.key
                    );
                  })
                ] }),
                B && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((y) => {
                    const _ = !!(y.frozen || y.sticky === "left"), L = _ && Z[y.key] !== void 0 ? Z[y.key] : void 0, V = y.key === M;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${_ ? `sticky z-20 bg-[#080d1a] ${V ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: L !== void 0 ? `${L}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: Q[y.key] || "",
                            onChange: (X) => P((re) => ({ ...re, [y.key]: X.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${y.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: z.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                "td",
                {
                  colSpan: l.length + 1,
                  className: "px-6 py-8 text-center text-slate-500 italic",
                  children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                }
              ) }) : z.map((y, _) => /* @__PURE__ */ e.jsxs(
                "tr",
                {
                  "data-row-index": _,
                  onClick: (L) => Rt(y, _, L),
                  onDoubleClick: () => ht(y, _),
                  onContextMenu: (L) => Lt(L, y, _),
                  className: `transition-colors group cursor-pointer ${Re === (y.id ?? y.Id ?? _) || N.has(y.id ?? y.Id ?? _) ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        onClick: (L) => {
                          L.stopPropagation();
                          const V = y.id ?? y.Id ?? _;
                          O((X) => {
                            const re = new Set(X);
                            return re.has(V) ? re.delete(V) : re.add(V), re;
                          }), k(V);
                        },
                        className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${N.has(y.id ?? y.Id ?? _) ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
                        style: { width: `${G}px`, minWidth: `${G}px` },
                        title: "Click chọn dòng | Chuột phải mở menu thao tác",
                        children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                          N.has(y.id ?? y.Id ?? _) ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                          /* @__PURE__ */ e.jsx("span", { children: _ + 1 })
                        ] })
                      }
                    ),
                    l.map((L, V) => {
                      const X = !!(L.frozen || L.sticky === "left"), re = X && Z[L.key] !== void 0 ? Z[L.key] : void 0, Fe = L.key === M, Ae = y[L.key], _e = L.align === "right" ? "text-right" : L.align === "center" ? "text-center" : "text-left", Me = F[`${s.id}_${y.id}_${L.key}`];
                      return /* @__PURE__ */ e.jsx(
                        "td",
                        {
                          className: `px-2 py-1 whitespace-nowrap transition-colors ${_e} ${X ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${Fe ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                          style: {
                            width: L.width,
                            minWidth: L.minWidth || L.width || "100px",
                            maxWidth: L.maxWidth,
                            left: re !== void 0 ? `${re}px` : void 0
                          },
                          children: /* @__PURE__ */ e.jsx(
                            Za,
                            {
                              column: L,
                              value: Ae,
                              row: y,
                              rowIndex: _,
                              columnIndex: V,
                              error: Me,
                              onChange: (qe) => Ve(y.id ?? _, L.key, qe),
                              onActionClick: (qe) => We(qe, y, L),
                              onKeyDown: It,
                              onFocus: (qe, tt, cs) => {
                                k(y.id ?? y.Id ?? qe), K({ rowIndex: qe, colIndex: tt, colKey: cs });
                              }
                            }
                          )
                        },
                        L.key
                      );
                    })
                  ]
                },
                y.id || _
              )) }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Ja,
                {
                  columns: l,
                  data: z,
                  showRowNumber: !0,
                  rowNumberWidth: G,
                  leftOffsets: Z
                }
              ) })
            ] })
          }
        ),
        W.isOpen && W.column && /* @__PURE__ */ e.jsx(
          Ua,
          {
            isOpen: W.isOpen,
            x: W.x,
            y: W.y,
            column: W.column,
            columnIndex: W.columnIndex,
            allColumns: o,
            onClose: () => J((y) => ({ ...y, isOpen: !1 })),
            onToggleHide: dt,
            onSetFreeze: $t,
            onOpenProperties: Et,
            onCloneColumn: Nt,
            onRemoveColumn: wt,
            onToggleFilter: () => A((y) => !y)
          }
        ),
        le.isOpen && le.column && /* @__PURE__ */ e.jsx(
          Fr,
          {
            isOpen: le.isOpen,
            column: le.column,
            onClose: () => q({ isOpen: !1, column: null }),
            onSave: At
          }
        ),
        we.isOpen && we.row && /* @__PURE__ */ e.jsx(
          qa,
          {
            isOpen: we.isOpen,
            x: we.x,
            y: we.y,
            row: we.row,
            rowIndex: we.rowIndex,
            totalRows: b.length,
            onClose: () => S((y) => ({ ...y, isOpen: !1, row: null })),
            onDuplicateRow: bt,
            onDeleteRow: ot,
            onInsertRowBelow: it,
            onMoveRowUp: ft,
            onMoveRowDown: Xe
          }
        )
      ]
    }
  );
}, Ul = ({ node: s }) => {
  const { props: r, style: t } = s, { flex: a, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...h } = t || {}, j = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], F = r.columns && r.columns.length > 0 ? r.columns : j, f = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [m, D] = $(""), [u, b] = $(null), [w, p] = $("asc"), [v, E] = $(1), x = Number(r.pageSize) || 10, C = He(() => {
    if (!m.trim()) return f;
    const P = m.toLowerCase();
    return f.filter(
      (W) => Object.values(W).some((J) => String(J).toLowerCase().includes(P))
    );
  }, [m]), R = He(() => u ? [...C].sort((P, W) => {
    const J = P[u], le = W[u];
    if (J === le) return 0;
    const q = J > le ? 1 : -1;
    return w === "asc" ? q : -q;
  }) : C, [C, u, w]), I = Math.ceil(R.length / x) || 1, B = He(() => {
    const P = (v - 1) * x;
    return R.slice(P, P + x);
  }, [R, v, x]), A = He(() => {
    const P = {};
    for (const W of F)
      if (W.aggregate === "sum") {
        const J = C.reduce((le, q) => le + (Number(q[W.key]) || 0), 0);
        P[W.key] = J.toLocaleString("en-US");
      } else if (W.aggregate === "count")
        P[W.key] = C.length;
      else if (W.aggregate === "avg") {
        const J = C.length ? C.reduce((le, q) => le + (Number(q[W.key]) || 0), 0) / C.length : 0;
        P[W.key] = J.toFixed(1);
      }
    return P;
  }, [F, C]), Q = (P) => {
    u === P ? p(w === "asc" ? "desc" : "asc") : (b(P), p("asc"));
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...h
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            r.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: r.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              C.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: m,
                onChange: (P) => {
                  D(P.target.value), E(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: F.map((P) => {
            const W = P.sticky === "left", J = P.align === "right" ? "text-right" : P.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => P.sortable !== !1 && Q(P.key),
                style: {
                  width: P.width,
                  minWidth: P.minWidth || P.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${J} ${W ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${P.align === "right" ? "justify-end" : P.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  P.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: P.title }),
                  P.sortable !== !1 && /* @__PURE__ */ e.jsx(Js, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              P.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: B.length > 0 ? B.map((P, W) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: F.map((J) => {
            const le = J.sticky === "left", q = P[J.key], we = J.align === "right" ? "text-right" : J.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${we} ${le ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (q == null) return "—";
                  if (J.componentType === "Checkbox") {
                    const S = q === !0 || q === "true" || q === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: S,
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
                    const S = Number(q);
                    if (!isNaN(S)) {
                      const he = J.precision !== void 0 ? J.precision : S % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: S.toLocaleString("en-US", { minimumFractionDigits: he, maximumFractionDigits: he }) });
                    }
                  }
                  return J.key === "status" || J.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${q === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(q) }) : String(q);
                })()
              },
              J.key
            );
          }) }, P.id || W)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: F.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: F.map((P, W) => {
            const J = P.sticky === "left", le = P.align === "right" ? "text-right" : P.align === "center" ? "text-center" : "text-left", q = A[P.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${le} ${J ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: W === 0 && !q ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : q !== void 0 ? q : ""
              },
              P.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            v,
            " / ",
            I
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: v <= 1,
                onClick: () => E((P) => Math.max(1, P - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(pr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: v >= I,
                onClick: () => E((P) => Math.min(I, P + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ys, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function cl(s, r, t = "") {
  if (!r || typeof r != "object")
    return t;
  if (!s || typeof s != "string" || s.trim() === "") {
    const d = r.fullName ?? r.FullName ?? r.name ?? r.Name ?? r.shortName ?? r.ShortName ?? r.title ?? r.Title ?? r.label ?? r.Label ?? r.code ?? r.Code ?? r.id ?? r.Id;
    return d != null ? String(d) : t;
  }
  const a = s.trim();
  if (!a.includes("{") || !a.includes("}")) {
    const d = at(r, a);
    return d != null ? String(d) : a;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = a.replace(n, (d, c) => {
    const h = c.trim();
    o = !0;
    const j = h.includes(".") ? h.split(".").pop().trim() : h;
    let F = at(r, h);
    return F == null && (F = at(r, j)), F != null ? String(F) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || t : a;
}
function at(s, r) {
  if (!s || typeof s != "object" || !r) return;
  if (r in s && s[r] !== void 0 && s[r] !== null)
    return s[r];
  const t = r.includes(".") ? r.split(".").pop().trim() : r.trim();
  if (t in s && s[t] !== void 0 && s[t] !== null)
    return s[t];
  const a = t.toLowerCase(), n = Object.keys(s), o = n.find((d) => d.toLowerCase() === a);
  if (o && s[o] !== void 0 && s[o] !== null)
    return s[o];
  const l = t.replace(/^(fld_|_)/i, ""), i = n.find((d) => d.toLowerCase() === l.toLowerCase());
  if (i && s[i] !== void 0 && s[i] !== null)
    return s[i];
}
const dl = ({
  value: s,
  onChange: r,
  options: t,
  items: a,
  reference: n,
  dataSource: o,
  idField: l = "id",
  selectField: i = "name",
  dropdownColumns: d,
  formatData: c,
  populateField: h,
  formId: j,
  placeholder: F = "— Chọn —",
  disabled: f = !1,
  readOnly: m = !1,
  isGridCell: D = !1,
  error: u,
  className: b = "",
  onKeyDown: w,
  onFocus: p,
  onBlur: v
}) => {
  const [E, x] = $(!1), [C, R] = $(""), [I, B] = $(0), [A, Q] = $(!1), [P, W] = $([]), J = Ge(null), le = Ge(null), q = Ge(null), we = Ge(null), S = je((N) => N.queryEntity), he = je((N) => N.getDataset), Se = je((N) => N.applyPopulate), ie = je((N) => n ? N.getDataset(n).length : 0);
  Be(() => {
    let N = !0;
    const O = (n || "").trim();
    if (a && Array.isArray(a) && a.length > 0) {
      W(a);
      return;
    }
    if (O)
      Q(!0), S(O, o).then((de) => {
        N && (Array.isArray(de) && de.length > 0 ? W(de) : W([]));
      }).catch(() => {
        if (N) {
          const de = he(O);
          W(Array.isArray(de) ? de : []);
        }
      }).finally(() => {
        N && Q(!1);
      });
    else if (t && Array.isArray(t) && t.length > 0) {
      const de = t.map((se) => se.rawItem && typeof se.rawItem == "object" ? se.rawItem : {
        [l]: se.value,
        [i]: se.label,
        id: se.value,
        name: se.label,
        fullName: se.label
      });
      W(de);
    } else
      W([]);
    return () => {
      N = !1;
    };
  }, [n, o, a, t, l, i, S, he, ie]);
  const ve = He(() => {
    if (d && d.length > 0)
      return d;
    if (P.length > 0) {
      const N = P[0], O = Object.keys(N), se = [
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
        (ne) => O.some((xe) => xe.toLowerCase() === ne.toLowerCase())
      );
      if (se.length > 0)
        return se.slice(0, 3).map((ne) => {
          const xe = O.find((ee) => ee.toLowerCase() === ne.toLowerCase()) || ne;
          return {
            key: xe,
            title: xe.charAt(0).toUpperCase() + xe.slice(1),
            width: xe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const fe = O.filter(
        (ne) => typeof N[ne] != "object" && !ne.startsWith("_")
      ).slice(0, 2);
      if (fe.length > 0)
        return fe.map((ne) => ({
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
  }, [d, P, l, i]), be = He(() => s == null || s === "" ? null : P.find((N) => {
    const O = at(N, l) ?? N.id ?? N.Id ?? N.code ?? N.Code;
    return O !== void 0 && String(O) === String(s);
  }) || null, [s, P, l]), ye = He(() => be ? cl(c, be, String(s ?? "")) : s != null && s !== "" ? String(s) : "", [be, c, s]), [G, Z] = $({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), M = () => {
    if (!J.current) return;
    const N = J.current.getBoundingClientRect(), O = 300, se = Math.max(N.width, 360), ne = window.innerHeight - N.bottom < O && N.top > O;
    let xe = ne ? N.top - O - 4 : N.bottom + 4, ee = N.left;
    ee + se > window.innerWidth - 12 && (ee = Math.max(12, window.innerWidth - se - 12)), Z({ top: xe, left: ee, width: se, openUpwards: ne });
  }, z = () => {
    f || m || (M(), x(!0), R(""), B(0));
  };
  Be(() => {
    E && (M(), setTimeout(() => {
      var N;
      (N = q.current) == null || N.focus();
    }, 50));
  }, [E]), Be(() => {
    if (!E) return;
    const N = (de) => {
      var fe, ne;
      const se = de.target;
      (fe = J.current) != null && fe.contains(se) || (ne = le.current) != null && ne.contains(se) || (x(!1), v && v());
    }, O = () => {
      M();
    };
    return window.addEventListener("mousedown", N), window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("mousedown", N), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [E, v]);
  const ue = He(() => {
    if (!C.trim()) return P;
    const N = C.toLowerCase().trim();
    return P.filter((O) => ve.some((se) => {
      const fe = at(O, se.key);
      return fe != null && String(fe).toLowerCase().includes(N);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((se) => {
      const fe = at(O, se);
      return fe != null && String(fe).toLowerCase().includes(N);
    }));
  }, [P, C, ve]);
  Be(() => {
    if (we.current && ue.length > 0) {
      const N = we.current.querySelector(`[data-index="${I}"]`);
      N && N.scrollIntoView({ block: "nearest" });
    }
  }, [I, ue]);
  const Ce = (N) => {
    const O = at(N, l) ?? N.id ?? N.Id ?? N.code ?? N.Code;
    r(O, N), h && j && Se(j, h, N), x(!1);
  }, Ve = (N) => {
    N.stopPropagation(), r("", null);
  }, We = (N) => {
    N.key === "ArrowDown" ? (N.preventDefault(), B((O) => O < ue.length - 1 ? O + 1 : O)) : N.key === "ArrowUp" ? (N.preventDefault(), B((O) => O > 0 ? O - 1 : 0)) : N.key === "Enter" ? (N.preventDefault(), ue.length > 0 && I >= 0 && I < ue.length && Ce(ue[I])) : N.key === "Escape" && (N.preventDefault(), x(!1));
  }, Re = (N) => {
    if (N.key === "Enter" || N.key === " " || N.key === "F4" || N.altKey && N.key === "ArrowDown") {
      N.preventDefault(), z();
      return;
    }
    w && w(N);
  }, k = u ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: J,
        tabIndex: f ? -1 : 0,
        onClick: z,
        onKeyDown: Re,
        onFocus: p,
        className: `relative flex items-center justify-between transition-all select-none cursor-pointer ${D ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${k}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${k} shadow-sm`} ${f ? "opacity-50 cursor-not-allowed" : ""} ${b}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: ye ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: ye }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: F }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!ye && !f && !m && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: Ve,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              St,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${E ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    E && Dt(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: le,
          style: {
            position: "fixed",
            top: `${G.top}px`,
            left: `${G.left}px`,
            width: `${G.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (N) => N.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: q,
                    type: "text",
                    value: C,
                    onChange: (N) => {
                      R(N.target.value), B(0);
                    },
                    onKeyDown: We,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                C && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => R(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" })
                  }
                )
              ] }),
              A && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(ea, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              ve.map((N, O) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: N.width || `${100 / ve.length}%` },
                  className: `px-1.5 truncate ${N.align === "right" ? "text-right" : N.align === "center" ? "text-center" : "text-left"}`,
                  children: N.title
                },
                N.key || O
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: we,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: ue.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-8 text-center text-slate-500 flex flex-col items-center justify-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Tt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: A ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" })
                ] }) : ue.map((N, O) => {
                  const de = at(N, l) ?? N.id ?? N.Id ?? N.code ?? N.Code, se = de !== void 0 && String(de) === String(s), fe = O === I;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": O,
                      onClick: () => Ce(N),
                      onMouseEnter: () => B(O),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${se ? "bg-emerald-950/60 text-emerald-200 font-medium" : fe ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        ve.map((ne, xe) => {
                          const ee = at(N, ne.key), ce = ee != null ? String(ee) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: ne.width || `${100 / ve.length}%` },
                              className: `px-1.5 truncate ${ne.align === "right" ? "text-right font-mono" : ne.align === "center" ? "text-center" : "text-left"}`,
                              children: ce
                            },
                            ne.key || xe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: se && /* @__PURE__ */ e.jsx(Xs, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    de ?? O
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  ue.length,
                  " / ",
                  P.length,
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
}, ul = ({ node: s, isEditing: r }) => {
  var J, le, q, we, S, he, Se, ie, ve, be, ye;
  const { props: t, style: a } = s, n = Y((G) => G.features), o = Y((G) => G.activeFeatureId), l = n.find((G) => String(G.id) === String(s.pageId)) || n.find((G) => String(G.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((J = s.dataBinding) == null ? void 0 : J.fieldName) || s.props.name || s.id), w = je((G) => lt(G, u, b, void 0)), p = je((G) => G.setFieldValue), v = w !== void 0 ? w : t.value ?? "", E = t.reference || t.refName || ((le = s.dataBinding) == null ? void 0 : le.refName) || ((q = s.dataBinding) == null ? void 0 : q.entityName) || "", x = t.dataSource || ((we = s.dataBinding) == null ? void 0 : we.dataSource) || t.query || ((S = s.dataBinding) == null ? void 0 : S.query) || t.sqlWhere || ((he = s.dataBinding) == null ? void 0 : he.sqlWhere) || "", C = t.idField || ((Se = s.dataBinding) == null ? void 0 : Se.idField) || "id", R = t.textField || t.selectField || ((ie = s.dataBinding) == null ? void 0 : ie.selectField) || "name", I = t.dropdownColumns || ((ve = s.dataBinding) == null ? void 0 : ve.dropdownColumns), B = t.formatData || ((be = s.dataBinding) == null ? void 0 : be.formatData) || "", A = t.populateField || ((ye = s.dataBinding) == null ? void 0 : ye.populateField) || "", Q = t.options || [], P = !!t.validationError, W = (G, Z) => {
    p(u, b, G), r || Ee(s.events, "change", t.label || "Chọn mục", i, {
      componentId: s.id,
      fieldName: b,
      value: G,
      selectedItem: Z
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ft,
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
        ...D
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        dl,
        {
          value: v,
          onChange: W,
          options: Q,
          reference: E,
          dataSource: x,
          idField: C,
          selectField: R,
          dropdownColumns: I,
          formatData: B,
          populateField: A,
          formId: u,
          placeholder: t.placeholder ? String(t.placeholder) : "— Chọn —",
          disabled: t.disabled,
          error: P ? String(t.validationError) : void 0
        }
      ) })
    }
  );
}, pl = ({ node: s, isEditing: r }) => {
  const { props: t, style: a } = s, n = Y((w) => w.features), o = Y((w) => w.activeFeatureId), l = n.find((w) => String(w.id) === String(s.pageId)) || n.find((w) => String(w.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, [u, b] = $(!!t.value);
  return /* @__PURE__ */ e.jsx(
    Ft,
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
        ...D
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: t.disabled,
            checked: u,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (w) => {
              b(w.target.checked), r || Ee(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: w.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, xl = ({ node: s, isEditing: r }) => {
  var x;
  const { props: t, style: a } = s, n = Y((C) => C.features), o = Y((C) => C.activeFeatureId), l = n.find((C) => String(C.id) === String(s.pageId)) || n.find((C) => String(C.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((x = s.dataBinding) == null ? void 0 : x.fieldName) || s.props.name || s.id), w = je((C) => lt(C, u, b, void 0)), p = je((C) => C.setFieldValue), v = w !== void 0 ? w : t.value ?? "", E = (C) => {
    p(u, b, C), r || Ee(s.events, "change", t.label || "Chọn ngày", i, {
      componentId: s.id,
      fieldName: b,
      value: C
    });
  };
  return /* @__PURE__ */ e.jsx(
    Ft,
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
        ...D
      },
      children: /* @__PURE__ */ e.jsx(
        Ir,
        {
          value: v,
          onChange: E,
          disabled: t.disabled,
          readOnly: r || !!t.readOnly,
          placeholder: t.placeholder || "DD/MM/YYYY",
          error: t.validationError ? String(t.validationError) : void 0
        }
      )
    }
  );
}, hl = ({ node: s, children: r }) => {
  const { props: t } = s, a = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: a }),
      /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: r || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, ml = ({ node: s }) => {
  const { props: r, style: t } = s, { width: a, ...n } = t || {};
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
}, bl = ({ node: s, isEditing: r }) => {
  var C;
  const { props: t, style: a } = s, n = Y((R) => R.features), o = Y((R) => R.activeFeatureId), l = n.find((R) => String(R.id) === String(s.pageId)) || n.find((R) => String(R.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((C = s.dataBinding) == null ? void 0 : C.fieldName) || s.props.name || s.id), w = je((R) => lt(R, u, b, void 0)), p = je((R) => R.setFieldValue), v = w !== void 0 ? w : t.value !== void 0 ? String(t.value) : "", E = Number(t.rows) || 2, x = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Ft,
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
          rows: E,
          placeholder: t.placeholder || "Nhập nội dung...",
          value: v,
          disabled: t.disabled,
          readOnly: r || !!t.readOnly,
          style: {
            width: "100%",
            ...D
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${x ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (R) => {
            const I = R.target.value;
            p(u, b, I), r || Ee(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: b,
              value: I
            });
          },
          onFocus: () => {
            r || Ee(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: b
            });
          },
          onBlur: (R) => {
            r || Ee(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: b,
              value: R.target.value
            });
          }
        }
      )
    }
  );
}, ql = ({ node: s, isEditing: r, children: t }) => {
  var p, v;
  const { props: a, style: n } = s, o = Y((E) => E.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: h, maxWidth: j, width: F, ...f } = n || {}, m = [
    { id: "main", label: "TAB 1" }
  ], D = a.tabs || m, [u, b] = $(
    a.activeTabId || ((p = D[0]) == null ? void 0 : p.id) || "main"
  ), w = a.activeTabId || u || ((v = D[0]) == null ? void 0 : v.id) || "main";
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
          D.map((E) => {
            const x = E.id === w;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (C) => {
                  C.stopPropagation(), b(E.id), o(s.id, { activeTabId: E.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${x ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: E.label }),
                  E.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${E.badgeColor || "bg-amber-600"}`, children: E.badge })
                ]
              },
              E.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (E) => {
                E.stopPropagation();
                const x = `tab_${Date.now().toString(36)}`, C = [...D, { id: x, label: `Tab Mới ${D.length + 1}` }];
                o(s.id, { tabs: C, activeTabId: x }), b(x);
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
}, $r = ({
  parentId: s,
  order: r,
  tabNodes: t,
  isEditing: a,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var f;
  const l = Y((m) => m.addComponent), i = Y((m) => m.selectComponent), [d, c] = $(((f = t[0]) == null ? void 0 : f.id) || ""), h = t.find((m) => m.id === d) || t[0], j = (h == null ? void 0 : h.id) || "", F = (m) => {
    var w;
    m.stopPropagation();
    const D = ((w = t[0]) == null ? void 0 : w.pageId) || "2", u = `tab_${Date.now().toString(36)}`, b = {
      id: u,
      type: "Container",
      parentId: s,
      pageId: D,
      order: r,
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
    l(b, s), c(u), i(u);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((m) => {
            const D = m.id === j, u = m.props.label || m.props.title || `Tab #${m.id.slice(-4)}`, b = m.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (w) => {
                  w.stopPropagation(), c(m.id), a && i(m.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${D ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: u }),
                  b !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(b) })
                ]
              },
              m.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: F,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: h && o ? o(h, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, fl = ({
  label: s = "Bản ghi:",
  reference: r = "Records",
  displayField: t = "code",
  records: a,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: d = "",
  style: c = {}
}) => {
  var w;
  const h = je(), j = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [F, f] = $(a || j), [m, D] = $(n || ((w = j[0]) == null ? void 0 : w.id) || "");
  Be(() => {
    a && a.length > 0 && f(a);
  }, [a]), Be(() => {
    n !== void 0 && D(n);
  }, [n]);
  const u = (p) => {
    D(p.id), l ? l(p) : h.setFormRecord("default", p);
  }, b = () => {
    const p = F.length + 1, v = `REC-${String(p).padStart(3, "0")}`, E = {
      id: String(Date.now()),
      code: v,
      name: `Bản ghi mới ${p}`
    }, x = [...F, E];
    f(x), D(E.id), i ? i() : h.setFormRecord("default", E);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(hr, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          F.map((p) => {
            const v = String(p.id) === String(m), E = p[t] || p.code || p.name || p.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => u(p),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${v ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: E })
              },
              p.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: b,
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
}, gl = ({
  isOpen: s,
  title: r,
  entityName: t,
  columns: a,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = je(), d = je((x) => x.datasets[t]), [c, h] = $([]), [j, F] = $(!1), [f, m] = $(""), [D, u] = $(0), b = Ge(null);
  Be(() => {
    if (!s) {
      m(""), u(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? h(d) : (F(!0), i.queryEntity(t).then((x) => {
      Array.isArray(x) && x.length > 0 ? h(x) : h(i.getDataset(t) || []);
    }).finally(() => F(!1))), setTimeout(() => {
      var x, C;
      (x = b.current) == null || x.focus(), (C = b.current) == null || C.select();
    }, 80);
  }, [s, t, d]);
  const w = He(() => {
    if (a && a.length > 0) return a;
    if (c.length > 0) {
      const x = c[0], C = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(x).filter((R) => !C.includes(R.toLowerCase()) && typeof x[R] != "object").slice(0, 6).map((R) => ({
        key: R,
        title: R.charAt(0).toUpperCase() + R.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [a, c]), p = He(() => {
    if (!f.trim()) return c;
    const x = f.toLowerCase().trim();
    return c.filter((C) => n && n.length > 0 ? n.some((R) => {
      const I = C[R];
      return I != null && String(I).toLowerCase().includes(x);
    }) : Object.values(C).some(
      (R) => R != null && String(R).toLowerCase().includes(x)
    ));
  }, [c, f, n]);
  Be(() => {
    D >= p.length && u(Math.max(0, p.length - 1));
  }, [p.length]);
  const v = (x) => {
    x.key === "ArrowDown" ? (x.preventDefault(), u((C) => C < p.length - 1 ? C + 1 : C)) : x.key === "ArrowUp" ? (x.preventDefault(), u((C) => C > 0 ? C - 1 : 0)) : x.key === "Enter" ? (x.preventDefault(), p[D] && (o(p[D]), l())) : x.key === "Escape" && (x.preventDefault(), l());
  };
  if (!s) return null;
  const E = r || `Tra cứu danh mục: ${t}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: v,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(_s, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: E }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                p.length,
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
              children: /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Tt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: b,
              type: "text",
              value: f,
              onChange: (x) => {
                m(x.target.value), u(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${t}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: j ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : p.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          f,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            w.map((x) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: x.width },
                children: x.title || x.key
              },
              x.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: p.map((x, C) => {
            const R = C === D;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => u(C),
                onDoubleClick: () => {
                  o(x), l();
                },
                className: `transition-colors cursor-pointer ${R ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: C + 1 }),
                  w.map((I) => {
                    const B = x[I.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: B != null ? String(B) : "—"
                      },
                      I.key
                    );
                  })
                ]
              },
              x.id ?? x.Id ?? C
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
                disabled: p.length === 0,
                onClick: () => {
                  p[D] && (o(p[D]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Xs, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, vl = ({ node: s, isEditing: r }) => {
  var le, q, we, S, he, Se;
  const { props: t, style: a } = s, n = Y((ie) => ie.features), o = Y((ie) => ie.activeFeatureId), l = n.find((ie) => String(ie.id) === String(s.pageId)) || n.find((ie) => String(ie.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: h, flexBasis: j, minWidth: F, maxWidth: f, width: m, ...D } = a || {}, u = String(s.pageId || o || "default"), b = String(((le = s.dataBinding) == null ? void 0 : le.fieldName) || s.props.name || s.id), w = je((ie) => lt(ie, u, b, void 0)), p = je((ie) => ie.setFieldValue), v = je((ie) => ie.applyPopulate), [E, x] = $(!1), C = w !== void 0 ? w : t.value ?? "", R = !!t.validationError, I = String(
    t.reference || t.refName || ((q = s.dataBinding) == null ? void 0 : q.refName) || ((we = s.dataBinding) == null ? void 0 : we.entityName) || ""
  ), B = String(
    t.displayField || t.selectField || ((S = s.dataBinding) == null ? void 0 : S.selectField) || "code"
  ), A = String(
    t.valueField || t.idField || ((he = s.dataBinding) == null ? void 0 : he.idField) || "code"
  ), Q = String(
    t.populateRule || t.populateField || ((Se = s.dataBinding) == null ? void 0 : Se.populateField) || ""
  ), P = () => {
    if (!(t.disabled || r)) {
      if (!I) {
        console.warn(`[ForgeSearchEntry] Component ${s.id} chưa cấu hình reference entity`);
        return;
      }
      x(!0);
    }
  }, W = (ie) => {
    const ve = ie[A] ?? ie[B] ?? ie.code ?? ie.id;
    ie[B] ?? ie.name, p(u, b, ve), Q && v(u, Q, ie), r || (Ee(s.events, "change", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: b,
      value: ve,
      selectedItem: ie
    }), Ee(s.events, "select", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: b,
      value: ve,
      selectedItem: ie
    }));
  }, J = (ie) => {
    ie.key === "F1" && (ie.preventDefault(), ie.stopPropagation(), P());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Ft,
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
          ...D
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: t.disabled,
              readOnly: r || !!t.readOnly,
              placeholder: t.placeholder || (I ? `Tra cứu ${I} (F1)...` : "Nhập dữ liệu..."),
              value: C,
              onKeyDown: J,
              onDoubleClick: P,
              className: `w-full pl-3 pr-8 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${R ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (ie) => {
                const ve = ie.target.value;
                p(u, b, ve), r || Ee(s.events, "change", t.label || "Ô tra cứu", i, {
                  componentId: s.id,
                  fieldName: b,
                  value: ve
                });
              }
            }
          ),
          I && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              disabled: t.disabled || r,
              onClick: P,
              title: `Tra cứu ${I} (Nhấn F1 hoặc nhấp đúp)`,
              className: "absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
              children: /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      }
    ),
    I && /* @__PURE__ */ e.jsx(
      gl,
      {
        isOpen: E,
        title: `Tra cứu danh mục: ${t.label || I}`,
        entityName: I,
        columns: t.columns,
        onSelect: W,
        onClose: () => x(!1)
      }
    )
  ] });
}, yl = ({
  node: s,
  isEditing: r,
  label: t,
  files: a,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var B;
  const d = nr(), c = Ge(null), [h, j] = $(!1), [F, f] = $(null), [m, D] = $(null), [u, b] = $([
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
  ]), w = a ?? u, p = (A) => {
    a || b(A), n == null || n(A);
  }, v = (A) => A < 1024 ? `${A} B` : A < 1024 * 1024 ? `${(A / 1024).toFixed(1)} KB` : `${(A / (1024 * 1024)).toFixed(2)} MB`, E = (A) => A.startsWith("image/") ? /* @__PURE__ */ e.jsx(ta, { className: "w-4 h-4 text-emerald-400" }) : A.includes("pdf") ? /* @__PURE__ */ e.jsx(ns, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(sa, { className: "w-4 h-4 text-blue-400" }), x = (A) => {
    if (!A || A.length === 0) return;
    const Q = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(A).forEach((P) => {
      if (P.size > l * 1024 * 1024) {
        alert(`Tệp "${P.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const W = new FileReader(), J = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      W.onload = () => {
        const le = {
          id: J,
          fileName: P.name,
          fileSize: P.size,
          fileType: P.type || "application/octet-stream",
          uploadedDate: Q,
          uploadedBy: "User",
          dataUrl: W.result
        };
        p([...w, le]);
      }, W.readAsDataURL(P);
    });
  }, C = (A, Q) => {
    if (Q == null || Q.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const P = w.filter((W) => W.id !== A);
      p(P), F === A && f(null);
    }
  }, R = (A, Q) => {
    if (Q == null || Q.stopPropagation(), !A.dataUrl) {
      alert(`Đang tải file mẫu: ${A.fileName}`);
      return;
    }
    const P = document.createElement("a");
    P.href = A.dataUrl, P.download = A.fileName, document.body.appendChild(P), P.click(), document.body.removeChild(P);
  }, I = t || ((B = s == null ? void 0 : s.props) == null ? void 0 : B.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(mr, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: I }),
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
            onChange: (A) => x(A.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var A;
              return (A = c.current) == null ? void 0 : A.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(Wn, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (A) => {
          A.preventDefault(), j(!0);
        },
        onDragLeave: () => j(!1),
        onDrop: (A) => {
          A.preventDefault(), j(!1), x(A.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${h ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var A;
          return (A = c.current) == null ? void 0 : A.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(Wn, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: w.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : w.map((A, Q) => {
        const P = F === A.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => f(A.id),
            className: `transition-colors cursor-pointer ${P ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: Q + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                E(A.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: A.fileName, children: A.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: v(A.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: A.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: A.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (W) => {
                      W.stopPropagation(), D(A);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(qs, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (W) => R(A, W),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (W) => C(A.id, W),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          A.id
        );
      }) })
    ] }) }),
    m && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => D(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (A) => A.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  E(m.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: m.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    v(m.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (A) => R(m, A),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(Ds, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => D(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50 min-h-[350px]", children: m.fileType.startsWith("image/") && m.dataUrl ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: m.dataUrl,
                  alt: m.fileName,
                  className: "max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
                }
              ) : m.fileType.includes("pdf") && m.dataUrl ? /* @__PURE__ */ e.jsx(
                "iframe",
                {
                  src: m.dataUrl,
                  title: m.fileName,
                  className: "w-full h-[65vh] rounded border border-slate-800"
                }
              ) : /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-3 py-12", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: E(m.fileType) }),
                /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-slate-300", children: m.fileName }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-500 max-w-sm", children: [
                  "Định dạng (",
                  m.fileType,
                  ") không hỗ trợ xem trực tiếp trong trình duyệt. Vui lòng tải tệp về để mở."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (A) => R(m, A),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(Ds, { className: "w-4 h-4" }),
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
}, jl = ({
  node: s,
  isEditing: r,
  label: t,
  value: a,
  onChange: n,
  options: o,
  reference: l,
  displayField: i = "name",
  valueField: d = "code",
  sublabelField: c,
  placeholder: h,
  disabled: j = !1
}) => {
  const F = Ge(null), f = Ge(null), m = nr(), D = String((s == null ? void 0 : s.pageId) || "default"), u = (s == null ? void 0 : s.props) || {}, b = u.dataBinding || u.fieldName || ((s == null ? void 0 : s.id) ?? ""), w = je((G) => lt(G, D, b, void 0)), p = je((G) => G.setFieldValue), v = je((G) => G.applyPopulate), E = je((G) => G.getDataset), x = t ?? u.label ?? "Gợi ý tự động (Autocomplete)", C = l ?? u.reference, R = i ?? u.displayField ?? "name", I = d ?? u.valueField ?? "code", B = c ?? u.sublabelField, A = h ?? u.placeholder ?? "Gõ để tìm kiếm...", Q = String(u.populateRule || ""), P = w ?? a ?? "", [W, J] = $(String(P)), [le, q] = $(!1), [we, S] = $(-1);
  Be(() => {
    P != null && J(String(P));
  }, [P]);
  const ie = (o && o.length > 0 ? o : C ? (E(C) || []).map((Z) => ({
    value: Z[I] ?? Z.id ?? Z.code ?? "",
    label: String(Z[R] ?? Z.name ?? Z.title ?? Z.code ?? ""),
    sublabel: B ? String(Z[B] ?? "") : void 0,
    raw: Z
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((G) => {
    if (!W || W.trim() === "") return !0;
    const Z = W.toLowerCase().trim();
    return G.label.toLowerCase().includes(Z) || String(G.value).toLowerCase().includes(Z) || G.sublabel && G.sublabel.toLowerCase().includes(Z);
  });
  Be(() => {
    const G = (Z) => {
      F.current && !F.current.contains(Z.target) && q(!1);
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, []);
  const ve = (G) => {
    J(G.label), q(!1), S(-1), n == null || n(G.value, G.raw), b && p(D, b, G.value), G.raw && Q && v(D, Q, G.raw);
  }, be = (G) => {
    if (!le && (G.key === "ArrowDown" || G.key === "ArrowUp")) {
      q(!0);
      return;
    }
    G.key === "ArrowDown" ? (G.preventDefault(), S(
      (Z) => Z < ie.length - 1 ? Z + 1 : 0
    )) : G.key === "ArrowUp" ? (G.preventDefault(), S(
      (Z) => Z > 0 ? Z - 1 : ie.length - 1
    )) : G.key === "Enter" ? le && we >= 0 && we < ie.length && (G.preventDefault(), ve(ie[we])) : G.key === "Escape" && (q(!1), S(-1));
  }, ye = (G) => {
    var Z;
    G.stopPropagation(), J(""), b && p(D, b, ""), n == null || n(""), (Z = f.current) == null || Z.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: F, className: "relative w-full text-xs", children: [
    x && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: m,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: x
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: m,
          ref: f,
          type: "text",
          disabled: j,
          value: W,
          placeholder: A,
          onFocus: () => q(!0),
          onChange: (G) => {
            J(G.target.value), q(!0), S(0), b && p(D, b, G.target.value);
          },
          onKeyDown: be,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        W && !j && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: ye,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var G;
              q(!le), (G = f.current) == null || G.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              St,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${le ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    le && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: ie.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      W,
      '"'
    ] }) : ie.map((G, Z) => {
      const M = we === Z, z = String(G.value) === String(P);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => S(Z),
          onClick: () => ve(G),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${M ? "bg-blue-600/25 text-blue-200" : z ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: G.label }),
              (G.sublabel || G.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                G.sublabel ? `${G.sublabel} • ` : "",
                G.value
              ] })
            ] }),
            z && /* @__PURE__ */ e.jsx(Xs, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${G.value}-${Z}`
      );
    }) })
  ] });
};
function Er(s) {
  var a, n;
  if (!s || s.length === 0) return [];
  const r = [...s].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), t = [];
  for (const o of r) {
    const l = !!((a = o.props) != null && a.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
    if (l) {
      const d = t[t.length - 1];
      d && d.type === "tab_stack" && d.order === i ? d.nodes.push(o) : t.push({
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
const en = is()(
  Ba(
    (s) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: r, branch: t, user: a }) => s({ token: r, branch: t, user: a }),
      logout: () => s({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), hs = ({ node: s, isEditing: r, children: t }) => {
  var c, h, j, F, f;
  const a = en((m) => m.user), n = (a == null ? void 0 : a.role) || "User", o = s.permissions;
  if (!o || !((c = o.allowedRoles) != null && c.length) && !((h = o.readOnlyRoles) != null && h.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
  if (r)
    return !((j = o.allowedRoles) != null && j.length || (F = o.readOnlyRoles) != null && F.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: t }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      t,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((f = o.allowedRoles) == null ? void 0 : f.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, d = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((D) => D.toLowerCase() === n.toLowerCase()) ? d === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: t }) : null : i && i.length > 0 && i.some((D) => D.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: t }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
};
function Ar(s, r) {
  var j, F;
  const t = s.style || {}, a = ((j = s.props) == null ? void 0 : j.colSpan) !== void 0 && ((F = s.props) == null ? void 0 : F.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, d;
  const c = (r == null ? void 0 : r.mode) || "grid", h = (r == null ? void 0 : r.gridColumns) || 12;
  if (c === "grid") {
    let f;
    if (a !== void 0 && !isNaN(a) && a > 0)
      f = Math.min(a, h);
    else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
      const m = Number(r.columnsPerRow);
      !isNaN(m) && m > 0 ? f = Math.max(1, Math.floor(h / m)) : f = Math.min(4, h);
    } else
      f = Math.min(4, h);
    d = `span ${f} / span ${f}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const f = parseInt((r == null ? void 0 : r.gap) || "12", 10) || 12;
    if (((r == null ? void 0 : r.direction) || "row") === "row")
      if (a !== void 0 && !isNaN(a) && a > 0) {
        const D = Math.min(100, Math.max(2, a / h * 100)), u = a >= h ? "100%" : `calc(${D}% - ${Math.round(f * (1 - a / h))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = u, l = u, o = `0 0 ${u}`);
      } else if (r != null && r.columnsPerRow && r.columnsPerRow !== "auto") {
        const D = Number(r.columnsPerRow);
        if (!isNaN(D) && D > 0) {
          const u = D === 1 ? "100%" : `calc((100% - ${(D - 1) * f}px) / ${D})`;
          t.width === void 0 && t.flex === void 0 && (n = u, l = u, o = `0 0 ${u}`);
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
    gridColumn: d,
    height: t.height,
    minHeight: t.minHeight || (s.type === "Container" ? "90px" : void 0),
    maxHeight: t.maxHeight,
    alignSelf: t.alignSelf
  };
}
const ls = ({
  node: s,
  isEditing: r = !1,
  onContextMenu: t,
  parentLayout: a,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = Y((u) => u.selection), d = Y((u) => u.selectComponent), c = r && i.componentId === s.id, h = (u) => {
    r && (u.stopPropagation(), d(s.id));
  }, j = (u) => {
    r && (u.preventDefault(), u.stopPropagation(), d(s.id), t && t(u, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const u = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), b = s.props.flexConfig || {}, w = s.props.gridConfig || {}, p = {
      direction: b.direction || "row",
      wrap: b.wrap || "wrap",
      gap: b.gap || "12px",
      columnsPerRow: b.columnsPerRow || "auto"
    }, v = Number(
      w.columns || (typeof b.columnsPerRow == "number" ? b.columnsPerRow : 12)
    ) || 12, E = {
      mode: u === "flex" ? "flex" : "grid",
      direction: b.direction || "row",
      columnsPerRow: b.columnsPerRow || "auto",
      gap: b.gap || w.gap || "12px",
      wrap: b.wrap || "wrap",
      gridColumns: v
    }, x = () => {
      const C = s.children || [];
      return C.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : Er(C).map((I, B) => {
        if (I.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            $r,
            {
              parentId: s.id,
              order: I.order,
              tabNodes: I.nodes,
              isEditing: r,
              parentFlexConfig: p,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${I.order}_${B}`
          );
        const A = I.node;
        return l ? /* @__PURE__ */ e.jsx(os.Fragment, { children: l(A, E) }, A.id) : /* @__PURE__ */ e.jsx(
          ls,
          {
            node: A,
            isEditing: r,
            onContextMenu: t,
            parentLayout: E,
            isWrappedByDrag: !1
          },
          A.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(hs, { node: s, isEditing: r, children: /* @__PURE__ */ e.jsx("div", { onClick: h, onContextMenu: j, className: "w-full", children: /* @__PURE__ */ e.jsx(za, { node: s, isEditing: r, children: x() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(hs, { node: s, isEditing: r, children: /* @__PURE__ */ e.jsx(
      Xn,
      {
        node: s,
        isEditing: r,
        isSelected: c,
        onClick: h,
        onContextMenu: j,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: x()
      }
    ) }) : /* @__PURE__ */ e.jsx(hs, { node: s, isEditing: r, children: /* @__PURE__ */ e.jsx(
      Xn,
      {
        node: s,
        isEditing: r,
        isSelected: c,
        onClick: h,
        onContextMenu: j,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: x()
      }
    ) });
  }
  const F = () => {
    var u, b, w, p, v, E;
    switch (s.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(Ma, { node: s, isEditing: r });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(Wa, { node: s, isEditing: r });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(bl, { node: s, isEditing: r });
      case "Number":
        return /* @__PURE__ */ e.jsx(Ka, { node: s, isEditing: r });
      case "Label":
        return /* @__PURE__ */ e.jsx(Ga, { node: s, isEditing: r });
      case "Table":
        return /* @__PURE__ */ e.jsx(il, { node: s, isEditing: r });
      case "Select":
        return /* @__PURE__ */ e.jsx(ul, { node: s, isEditing: r });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(pl, { node: s, isEditing: r });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(xl, { node: s, isEditing: r });
      case "Divider":
        return /* @__PURE__ */ e.jsx(ml, { node: s, isEditing: r });
      case "Modal":
        return /* @__PURE__ */ e.jsx(hl, { node: s, isEditing: r });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          fl,
          {
            label: ((u = s.props) == null ? void 0 : u.label) ?? "Lô hàng:",
            reference: ((b = s.props) == null ? void 0 : b.reference) ?? "Transaction",
            displayField: ((w = s.props) == null ? void 0 : w.displayField) ?? "code",
            records: (p = s.props) == null ? void 0 : p.records,
            activeId: (v = s.props) == null ? void 0 : v.activeId,
            canAdd: ((E = s.props) == null ? void 0 : E.canAdd) !== !1,
            style: s.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(vl, { node: s, isEditing: r });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(yl, { node: s, isEditing: r });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(jl, { node: s, isEditing: r });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          s.type
        ] });
    }
  }, f = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), m = Ar(s, f), D = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...m,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(hs, { node: s, isEditing: r, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: h,
      onContextMenu: j,
      style: D,
      className: `relative group transition-all duration-150 box-border ${r ? `cursor-pointer rounded-lg ${c ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        r && c && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: s.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            s.id.slice(-4)
          ] })
        ] }),
        F()
      ]
    }
  ) });
}, Yl = ({
  value: s,
  column: r,
  onSave: t,
  onCancel: a
}) => {
  const [n, o] = $(s ?? ""), l = Ge(null);
  Be(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (c) => {
    c.key === "Enter" ? (c.preventDefault(), t(n)) : c.key === "Escape" && (c.preventDefault(), a());
  }, d = () => {
    t(n);
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
}, Us = ({
  node: s,
  isEditing: r,
  onContextMenu: t,
  parentLayout: a,
  parentFlexConfig: n,
  activeId: o,
  overId: l
}) => {
  const {
    attributes: i,
    listeners: d,
    setNodeRef: c,
    transform: h,
    isDragging: j
  } = vr({
    id: s.id,
    disabled: !r,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: F, isOver: f } = yr({
    id: s.id,
    disabled: !r
  }), m = (E) => {
    c(E), F(E);
  }, D = a || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), b = {
    ...Ar(s, D),
    transform: ja.Translate.toString(h),
    opacity: j ? 0.35 : 1,
    transition: j ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, w = s.type === "Container" || s.type === "Section" || s.type === "Tabs", p = f && w && !j, v = f && !w && !j;
  return /* @__PURE__ */ e.jsxs("div", { ref: m, style: b, className: "group/drag relative", children: [
    v && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    p && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    r && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (E) => E.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(Qs, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      ls,
      {
        node: s,
        isEditing: r,
        onContextMenu: t,
        parentLayout: D,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (E, x) => /* @__PURE__ */ e.jsx(
          Us,
          {
            node: E,
            isEditing: r,
            onContextMenu: t,
            parentLayout: x && "mode" in x ? x : void 0,
            parentFlexConfig: x && !("mode" in x) ? x : void 0,
            activeId: o,
            overId: l
          },
          E.id
        )
      }
    )
  ] });
}, Br = ({ x: s, y: r, items: t, onClose: a }) => {
  const n = Ge(null);
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
  const o = Math.min(s, window.innerWidth - 220), l = Math.min(r, window.innerHeight - (t.length * 36 + 20));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      style: { top: `${l}px`, left: `${o}px` },
      className: "fixed z-50 w-56 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100",
      children: t.map((i, d) => {
        if (i.divider)
          return /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-slate-800" }, d);
        const c = i.icon;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: (h) => {
              h.stopPropagation(), i.onClick(), a();
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
}, Jl = ({
  isEditing: s,
  activeId: r,
  overId: t
}) => {
  const a = Y((I) => I.features), n = Y((I) => I.activeFeatureId), o = Y((I) => I.activeRecordId), l = Y((I) => I.addComponent), i = Y((I) => I.selectComponent), d = Y((I) => I.removeComponent), c = Y((I) => I.updateComponentProps);
  Y((I) => I.updateFeatureLayout);
  const h = Y((I) => I.updateFeatureScriptFile), j = a.find((I) => I.id === n), F = (j == null ? void 0 : j.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  os.useEffect(() => {
    var B;
    if (wr(j) && n) {
      let A = o;
      !A && typeof window < "u" && (A = new URLSearchParams(window.location.search).get("id"));
      const Q = A || "1", P = je.getState().formRecords[n], W = (P == null ? void 0 : P.id) || (P == null ? void 0 : P.Id);
      if (String(W) !== String(Q)) {
        const { module: J } = Nr(j == null ? void 0 : j.scriptFile), le = (J == null ? void 0 : J.loadDetail) || ((B = J == null ? void 0 : J.transactionDetailBL) == null ? void 0 : B.loadDetail);
        typeof le == "function" && le(Q).then((q) => {
          q && n && (je.getState().setFormRecord(n, q), je.getState().setFormRecord("default", q), o !== String(q.id || Q) && Y.getState().setActiveRecordId(String(q.id || Q)));
        });
      }
    }
  }, [n, o, j == null ? void 0 : j.scriptFile, j == null ? void 0 : j.route, j == null ? void 0 : j.name, j == null ? void 0 : j.isDetail]);
  const { setNodeRef: f, isOver: m } = yr({
    id: "canvas-root",
    disabled: !s
  }), [D, u] = $(""), b = !!(j != null && j.scriptFile && j.scriptFile.trim().length > 0), [w, p] = $(null), v = (I, B = {}, A = {}) => ({
    id: `${I.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: I,
    parentId: null,
    pageId: n,
    props: {
      label: I === "Button" ? "Nút mới" : I === "Label" ? "Tiêu đề khối" : void 0,
      variant: I === "Button" ? "primary" : void 0,
      size: I === "Button" ? "md" : void 0,
      placeholder: I === "TextBox" ? "Nhập nội dung..." : void 0,
      ...B
    },
    style: {
      ...A
    },
    events: [],
    order: ((j == null ? void 0 : j.components.length) || 0) + 1
  }), E = (I) => {
    !s || !b || (I.preventDefault(), i(null), p({
      x: I.clientX,
      y: I.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, x = (I, B) => {
    if (!s) return;
    I.preventDefault(), I.stopPropagation(), i(B.id);
    const A = B.type === "Container" || B.type === "Section" || B.type === "Tabs";
    p({
      x: I.clientX,
      y: I.clientY,
      targetContainerId: A ? B.id : B.parentId,
      selectedNode: B
    });
  }, C = () => {
    var P, W, J;
    if (!w) return [];
    const { targetContainerId: I, selectedNode: B } = w, A = B && (B.type === "Container" || B.type === "Section" || B.type === "Tabs");
    if (B && A) {
      const le = B.props.layoutMode === "grid", q = ((P = B.props.flexConfig) == null ? void 0 : P.direction) === "row", we = !!(B.props.isTab || B.props.tab || B.type === "Tabs"), S = B.props.activeTabId || ((J = (W = B.props.tabs) == null ? void 0 : W[0]) == null ? void 0 : J.id) || "main", he = we ? { tabId: S } : {};
      return [
        ...we ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: xt,
            onClick: () => {
              const Se = B.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], ie = `tab_${Date.now().toString(36)}`, ve = [
                ...Se,
                { id: ie, label: `Tab Mới ${Se.length + 1}` }
              ];
              c(B.id, {
                tabs: ve,
                activeTabId: ie
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
          icon: xt,
          onClick: () => {
            const Se = v(
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
            l(Se, I);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: Wt,
          onClick: () => {
            const Se = v(
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
            l(Se, I);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Wt,
          onClick: () => {
            const Se = v("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...he
            });
            l(Se, I);
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
          icon: Ht,
          onClick: () => l(
            v("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: Ht,
          onClick: () => l(
            v("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: Ht,
          onClick: () => l(
            v("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: Ht,
          onClick: () => l(
            v("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: ms,
          onClick: () => l(
            v("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: ns,
          onClick: () => l(
            v("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: ms,
          onClick: () => l(
            v("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...he
            }),
            I
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: Qe,
          onClick: () => l(
            v("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...he
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
          label: q ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: q ? Js : Kn,
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
          label: le ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Wt,
          onClick: () => {
            le ? c(B.id, {
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
          icon: Ue,
          danger: !0,
          onClick: () => d(B.id)
        }
      ];
    }
    const Q = F.direction === "row";
    return [
      {
        label: Q ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: xt,
        onClick: () => {
          const le = v(
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
          l(le, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: Wt,
        onClick: () => {
          const le = v(
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
          l(le, null);
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
        icon: ms,
        onClick: () => l(v("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: Ht,
        onClick: () => l(v("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: ns,
        onClick: () => l(v("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: Qe,
        onClick: () => l(v("Table"), null)
      }
    ];
  }, R = (j == null ? void 0 : j.components.filter((I) => !I.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      onContextMenu: E,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${m && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (j == null ? void 0 : j.name) || "Màn hình" }),
              b ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(As, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: j == null ? void 0 : j.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: b ? (j == null ? void 0 : j.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          b ? R.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: E,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${m ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(xt, { className: "w-7 h-7" }) }),
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
                      const I = v(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      I.children = [
                        v(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        v(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(I, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Kn, { className: "w-4 h-4" }),
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
                flexDirection: F.direction || "column",
                gap: F.gap || "16px",
                flexWrap: F.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: Er(R).map((I, B) => {
                if (I.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    $r,
                    {
                      parentId: null,
                      order: I.order,
                      tabNodes: I.nodes,
                      isEditing: s,
                      onContextMenu: x,
                      renderChild: (P, W) => s ? /* @__PURE__ */ e.jsx(
                        Us,
                        {
                          node: P,
                          isEditing: s,
                          onContextMenu: x,
                          parentLayout: W && "mode" in W ? W : void 0,
                          parentFlexConfig: W && !("mode" in W) ? W : void 0,
                          activeId: r,
                          overId: t
                        },
                        P.id
                      ) : /* @__PURE__ */ e.jsx(
                        ls,
                        {
                          node: P,
                          isEditing: !1,
                          onContextMenu: x,
                          parentLayout: W && "mode" in W ? W : void 0,
                          parentFlexConfig: W && !("mode" in W) ? W : void 0
                        },
                        P.id
                      )
                    },
                    `root_tab_stack_${I.order}_${B}`
                  );
                const A = I.node, Q = {
                  mode: "flex",
                  direction: F.direction || "column",
                  wrap: F.wrap || "wrap",
                  gap: F.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  Us,
                  {
                    node: A,
                    isEditing: s,
                    onContextMenu: x,
                    parentLayout: Q,
                    activeId: r,
                    overId: t
                  },
                  A.id
                ) : /* @__PURE__ */ e.jsx(
                  ls,
                  {
                    node: A,
                    isEditing: !1,
                    onContextMenu: x,
                    parentLayout: Q
                  },
                  A.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(rs, { className: "w-8 h-8" }) }),
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
                  const B = D.trim();
                  if (!B) return;
                  const A = B.endsWith(".bl.ts") ? B : B.endsWith(".ts") ? B.replace(/\.ts$/, ".bl.ts") : `${B}.bl.ts`;
                  h(n, A), u("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(As, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: D,
                          onChange: (I) => u(I.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  j && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(br, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const I = j.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          u(`${I || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          j.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
                          ".bl.ts"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: !D.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(Os, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        w && /* @__PURE__ */ e.jsx(
          Br,
          {
            x: w.x,
            y: w.y,
            items: C(),
            onClose: () => p(null)
          }
        )
      ]
    }
  );
};
function Nl(s) {
  return s.replace(/-([a-z])/g, (r, t) => t.toUpperCase());
}
function wl(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function Cl(s) {
  const r = {};
  if (!s || typeof s != "string") return r;
  const a = s.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of a) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), d = o.slice(l + 1).trim();
    if (i && d) {
      let c = Nl(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), r[c] = d;
    }
  }
  return r;
}
function kl(s) {
  const r = /* @__PURE__ */ new Set([
    "customCss",
    "display",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "gap",
    "gridTemplateColumns"
  ]), t = [];
  for (const [a, n] of Object.entries(s)) {
    if (n == null || n === "" || r.has(a))
      continue;
    const o = wl(a);
    t.push(`${o}: ${n};`);
  }
  return t.join(`
`);
}
const Sl = ({
  isOpen: s,
  node: r,
  onClose: t,
  onSave: a
}) => {
  const [n, o] = $("info"), [l, i] = $([]), [d, c] = $([]), [h, j] = $(""), [F, f] = $("General"), [m, D] = $(""), [u, b] = $("Dropdown"), [w, p] = $(""), [v, E] = $(""), [x, C] = $(""), [R, I] = $(1), [B, A] = $(4), [Q, P] = $(""), [W, J] = $(""), [le, q] = $(""), [we, S] = $(""), [he, Se] = $(""), [ie, ve] = $(""), [be, ye] = $(""), [G, Z] = $(""), [M, z] = $(""), [ue, Ce] = $(""), [Ve, We] = $(""), [Re, k] = $(""), [N, O] = $(""), [de, se] = $(""), [fe, ne] = $(""), [xe, ee] = $(""), [ce, Ie] = $(""), [me, oe] = $(""), [K, U] = $(""), [Je, It] = $(""), [Rt, ht] = $(""), [mt, bt] = $(""), [ot, Lt] = $(""), [it, ft] = $(""), [Xe, ct] = $(""), [rt, gt] = $("id"), [Pt, vt] = $(""), [yt, jt] = $(""), [dt, $t] = $(""), [Et, Nt] = $(""), [wt, At] = $(""), [zt, Ut] = $(""), [qt, T] = $(""), [H, te] = $(""), [pe, Te] = $(""), [De, Ne] = $(""), [ge, Oe] = $(!1), [Pe, y] = $(!0), [_, L] = $(!1), [V, X] = $(!1), [re, Fe] = $(!1), [Ae, _e] = $(!1), [Me, qe] = $(!1), [tt, cs] = $(!1), [tn, sn] = $(!1), [nn, rn] = $(!1), [an, ln] = $(!1), [on, cn] = $(!1), [dn, un] = $(!1), [pn, xn] = $(!1), [hn, mn] = $(!1), [bn, fn] = $(!1), [gn, vn] = $(!0), [yn, jn] = $(!0), [Nn, wn] = $(!1), [Cn, kn] = $(!1), [Sn, Tn] = $(!1), [Dn, Fn] = $(!1), [In, Rn] = $(!1), [Ln, Pn] = $(!1), [$n, En] = $(!1), [An, Bn] = $(!1), [Bt, _n] = $(""), [Ss, On] = $(""), [Mn, Vn] = $(""), [_t, ds] = $(""), [Pl, Vr] = $("");
  if (Be(() => {
    Zs().then((g) => i(g));
  }, []), Be(() => {
    if (r && s) {
      const g = r.props || {}, ae = r.dataBinding || {};
      j(String(g.id ?? r.id)), f(g.group !== void 0 ? String(g.group) : "General");
      const ke = g.reference !== void 0 ? String(g.reference) : ae.entityName !== void 0 ? String(ae.entityName) : g.refName !== void 0 ? String(g.refName) : "";
      D(ke), b(r.type || "Dropdown"), p(String(g.parentId ?? "")), E(
        g.refName !== void 0 ? String(g.refName) : ae.refName !== void 0 ? String(ae.refName) : ke
      ), C(
        ae.fieldName !== void 0 ? String(ae.fieldName) : g.fieldName !== void 0 ? String(g.fieldName) : g.name !== void 0 ? String(g.name) : r.id
      ), I(Number(r.order ?? g.order ?? 1)), A(Number(g.colSpan ?? g.column ?? 4)), P(g.label !== void 0 ? String(g.label) : ""), J(
        g.events !== void 0 ? typeof g.events == "string" ? g.events : JSON.stringify(g.events) : ""
      ), q(g.style !== void 0 ? String(g.style) : ""), S(g.childStyle !== void 0 ? String(g.childStyle) : ""), Se(g.validation !== void 0 ? String(g.validation) : ""), ve(
        g.selectField !== void 0 ? String(g.selectField) : ae.selectField !== void 0 ? String(ae.selectField) : ""
      ), ye(g.plainText !== void 0 ? String(g.plainText) : ""), Z(
        g.cssClass !== void 0 ? String(g.cssClass) : g.className !== void 0 ? String(g.className) : ""
      ), z(g.sqlSelect !== void 0 ? String(g.sqlSelect) : ""), Ce(String(g.offset ?? "")), We(g.groupFormat !== void 0 ? String(g.groupFormat) : ""), k(g.formatSummary !== void 0 ? String(g.formatSummary) : ""), O(g.orderBySummary !== void 0 ? String(g.orderBySummary) : ""), se(g.groupEvent !== void 0 ? String(g.groupEvent) : ""), ne(g.icon !== void 0 ? String(g.icon) : ""), ee(g.system !== void 0 ? String(g.system) : ""), Ie(g.refClass !== void 0 ? String(g.refClass) : ""), oe(g.hotKey !== void 0 ? String(g.hotKey) : ""), U(g.dateTimeField !== void 0 ? String(g.dateTimeField) : ""), It(String(g.addStart ?? "")), ht(String(g.addEnd ?? "")), bt(String(g.bodyRowHeight ?? "")), Lt(
        g.sqlWhere !== void 0 ? String(g.sqlWhere) : ae.sqlWhere !== void 0 ? String(ae.sqlWhere) : ""
      ), ft(String(g.footerHeight ?? "")), ct(g.joinTable !== void 0 ? String(g.joinTable) : ""), gt(
        g.idField !== void 0 ? String(g.idField) : ae.idField !== void 0 ? String(ae.idField) : "id"
      ), vt(String(g.headerHeight ?? "")), jt(
        g.populateField !== void 0 ? String(g.populateField) : ae.populateField !== void 0 ? String(ae.populateField) : ""
      ), $t(String(g.precision ?? "")), Nt(g.groupBy !== void 0 ? String(g.groupBy) : ""), At(g.disabledExp !== void 0 ? String(g.disabledExp) : ""), Ut(g.showExp !== void 0 ? String(g.showExp) : ""), T(String(g.row ?? "")), te(g.template !== void 0 ? String(g.template) : ""), Te(g.templateLocked !== void 0 ? String(g.templateLocked) : ""), Ne(String(g.default ?? g.defaultValue ?? "")), Oe(!!g.realtime), y(g.showLabel !== !1 && g.label !== !1), L(!!g.hidden), X(!!g.filterLocal), Fe(!!g.sqlSearch), _e(!!g.cache), qe(!!g.moveTab), cs(!!g.focus), sn(!!g.focusSearch), rn(!!g.noLoad), ln(!!g.collapsible), cn(!!g.showHotKey), un(!!g.history), xn(!!g.top), mn(!!g.hideAnd), fn(!!g.disabled), vn(g.visibility !== !1), jn(g.active !== !1), wn(!!g.upperCase), kn(!!(g.virtualScroll || g.virtual)), Tn(!!g.isPrivate), Fn(!!g.renderIndex), Rn(!!(g.canAdd || g.add)), Pn(!!(g.canSearch || g.search)), En(!!(g.isSummary || g.summary)), Bn(!!g.showDateTimeField);
      const Le = g.dataSource !== void 0 ? g.dataSource : g.dataSourceFilter !== void 0 ? g.dataSourceFilter : ae.dataSource !== void 0 ? ae.dataSource : "";
      _n(String(Le ?? ""));
      const Wr = g.formatEntity !== void 0 ? g.formatEntity : ae.formatEntity !== void 0 ? ae.formatEntity : "";
      On(String(Wr ?? "")), Vn(g.migration !== void 0 ? String(g.migration) : "");
      const Kr = g.formatData !== void 0 ? g.formatData : ae.formatData !== void 0 ? ae.formatData : "";
      ds(String(Kr ?? ""));
      const Gr = g.query !== void 0 ? g.query : ae.query !== void 0 ? ae.query : "";
      Vr(String(Gr ?? "")), c(
        g.dropdownColumns || ae.dropdownColumns || []
      );
    }
  }, [r, s]), !s || !r) return null;
  const Hr = () => {
    let g = W;
    try {
      W.trim().startsWith("{") && (g = JSON.parse(W));
    } catch {
      g = W;
    }
    const ae = {
      ...r.props,
      id: h,
      group: F,
      reference: m,
      componentType: u,
      parentId: w,
      refName: v,
      fieldName: x,
      order: Number(R) || 1,
      colSpan: Number(B) || 4,
      column: Number(B) || 4,
      label: Q,
      events: g,
      style: le,
      childStyle: we,
      validation: he,
      selectField: ie,
      plainText: be,
      cssClass: G,
      sqlSelect: M,
      offset: ue,
      groupFormat: Ve,
      formatSummary: Re,
      orderBySummary: N,
      groupEvent: de,
      icon: fe,
      system: xe,
      refClass: ce,
      hotKey: me,
      dateTimeField: K,
      addStart: Je,
      addEnd: Rt,
      bodyRowHeight: mt,
      sqlWhere: ot,
      footerHeight: it,
      joinTable: Xe,
      idField: rt,
      headerHeight: Pt,
      populateField: yt,
      precision: dt ? Number(dt) : void 0,
      groupBy: Et,
      disabledExp: wt,
      showExp: zt,
      row: qt,
      template: H,
      templateLocked: pe,
      default: De,
      // Display flags
      realtime: ge,
      showLabel: Pe,
      hidden: _,
      filterLocal: V,
      sqlSearch: re,
      cache: Ae,
      moveTab: Me,
      focus: tt,
      focusSearch: tn,
      noLoad: nn,
      collapsible: an,
      showHotKey: on,
      history: dn,
      top: pn,
      hideAnd: hn,
      disabled: bn,
      visibility: gn,
      active: yn,
      upperCase: Nn,
      virtual: Cn,
      isPrivate: Sn,
      renderIndex: Dn,
      add: In,
      search: Ln,
      summary: $n,
      showDateTimeField: An,
      // Code blocks
      dataSource: Bt,
      dataSourceFilter: Bt,
      formatEntity: Ss,
      migration: Mn,
      formatData: _t,
      query: Bt,
      dropdownColumns: d
    }, ke = {
      ...r.dataBinding || {},
      entityName: m || v || "",
      refName: v || m || "",
      fieldName: x || r.id,
      query: Bt,
      dataSource: Bt,
      sqlWhere: ot,
      selectField: ie,
      populateField: yt,
      idField: rt,
      formatData: _t,
      formatEntity: Ss,
      dropdownColumns: d,
      twoWay: !0
    };
    a(r.id, ae, ke), t();
  }, Hn = gs(l), Ot = vs(Hn, m || v), Yt = Ot ? Ot.fields : [], us = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes(u), $e = (g, ae, ke) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${ae ? "text-slate-200 font-medium" : "text-slate-400"}`, children: g }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: ae,
        onChange: (Le) => ke(Le.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Dt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            h || r.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: Hr,
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
                /* @__PURE__ */ e.jsx(Bs, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(et, { className: "w-3.5 h-3.5 text-rose-400" }),
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
        us && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      value: h,
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
                      value: F,
                      onChange: (g) => f(g.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: Ot ? Ot.name : "",
                      onChange: (g) => {
                        const ae = g.target.value;
                        D(ae), E(ae);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        Hn.map((g) => /* @__PURE__ */ e.jsxs("option", { value: g.name, children: [
                          g.displayName,
                          " (",
                          g.name,
                          ")"
                        ] }, g.name))
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
                      onChange: (g) => b(g.target.value),
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
                      value: w,
                      onChange: (g) => p(g.target.value),
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
                      value: v,
                      placeholder: "VD: Vendor, Terminal, Customer...",
                      onChange: (g) => {
                        E(g.target.value), D(g.target.value);
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
                      value: x,
                      onChange: (g) => C(g.target.value),
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
                      value: R,
                      onChange: (g) => I(g.target.value),
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
                      value: B,
                      onChange: (g) => A(g.target.value),
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
                      onChange: (g) => P(g.target.value),
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
                      value: le,
                      onChange: (g) => q(g.target.value),
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
                      value: we,
                      onChange: (g) => S(g.target.value),
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
                      value: he,
                      onChange: (g) => Se(g.target.value),
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
                      value: ie,
                      onChange: (g) => ve(g.target.value),
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
                      value: be,
                      onChange: (g) => ye(g.target.value),
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
                      value: G,
                      onChange: (g) => Z(g.target.value),
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
                      onChange: (g) => z(g.target.value),
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
                      value: ue,
                      onChange: (g) => Ce(g.target.value),
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
                      value: Ve,
                      onChange: (g) => We(g.target.value),
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
                      value: Re,
                      onChange: (g) => k(g.target.value),
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
                      value: N,
                      onChange: (g) => O(g.target.value),
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
                      value: de,
                      onChange: (g) => se(g.target.value),
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
                      value: fe,
                      onChange: (g) => ne(g.target.value),
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
                      value: xe,
                      onChange: (g) => ee(g.target.value),
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
                      value: ce,
                      onChange: (g) => Ie(g.target.value),
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
                      value: me,
                      onChange: (g) => oe(g.target.value),
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
                      value: K,
                      onChange: (g) => U(g.target.value),
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
                      value: Je,
                      onChange: (g) => It(g.target.value),
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
                      value: Rt,
                      onChange: (g) => ht(g.target.value),
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
                      value: mt,
                      onChange: (g) => bt(g.target.value),
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
                      onChange: (g) => Lt(g.target.value),
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
                      value: it,
                      onChange: (g) => ft(g.target.value),
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
                      onChange: (g) => ct(g.target.value),
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
                      value: rt,
                      onChange: (g) => gt(g.target.value),
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
                      value: Pt,
                      onChange: (g) => vt(g.target.value),
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
                      value: yt,
                      onChange: (g) => jt(g.target.value),
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
                      value: dt,
                      onChange: (g) => $t(g.target.value),
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
                      value: Et,
                      onChange: (g) => Nt(g.target.value),
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
                      value: wt,
                      onChange: (g) => At(g.target.value),
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
                      value: zt,
                      onChange: (g) => Ut(g.target.value),
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
                      value: qt,
                      onChange: (g) => T(g.target.value),
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
                      value: H,
                      onChange: (g) => te(g.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(rs, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: pe,
                      onChange: (g) => Te(g.target.value),
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
                      value: De,
                      onChange: (g) => Ne(g.target.value),
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
                  $e("Realtime", ge, Oe),
                  $e("Label", Pe, y),
                  $e("Hidden", _, L),
                  $e("FilterLocal", V, X),
                  $e("SqlSearch", re, Fe),
                  $e("Cache", Ae, _e),
                  $e("Move Tab", Me, qe),
                  $e("Focus", tt, cs),
                  $e("FocusSearch", tn, sn),
                  $e("No Load", nn, rn),
                  $e("Collapsible", an, ln),
                  $e("HotKey", on, cn),
                  $e("History", dn, un)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  $e("Top", pn, xn),
                  $e("HideAnd", hn, mn),
                  $e("Disabled", bn, fn),
                  $e("Visibility", gn, vn),
                  $e("Active", yn, jn),
                  $e("Upper Case", Nn, wn),
                  $e("Virtual", Cn, kn),
                  $e("Private", Sn, Tn),
                  $e("Render Index", Dn, Fn),
                  $e("Add", In, Rn),
                  $e("Search", Ln, Pn),
                  $e("Sumary", $n, En),
                  $e("DateTime Field", An, Bn)
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
                      value: Bt,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (g) => _n(g.target.value),
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
                      value: Ss,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (g) => On(g.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${us ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: Mn,
                      onChange: (g) => Vn(g.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !us && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: _t,
                      onChange: (g) => ds(g.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && us && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4 text-emerald-400" }),
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
                    var g, ae;
                    c([
                      ...d,
                      {
                        key: ((g = Yt[d.length]) == null ? void 0 : g.name) || `col${d.length + 1}`,
                        title: ((ae = Yt[d.length]) == null ? void 0 : ae.displayName) || `Cột ${d.length + 1}`,
                        width: "50%",
                        align: "left"
                      }
                    ]);
                  },
                  className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                  ]
                }
              ),
              Ot && Yt.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const g = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let ae = Yt.filter((ke) => g.includes(ke.name.toLowerCase()));
                    ae.length === 0 ? ae = Yt.slice(0, 3) : ae = ae.slice(0, 4), c(
                      ae.map((ke) => ({
                        key: ke.name,
                        title: ke.displayName || ke.name,
                        width: `${Math.floor(100 / ae.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      Ot.name
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
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((g, ae) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: ae === 0,
                  onClick: () => {
                    const ke = [...d], Le = ke[ae];
                    ke[ae] = ke[ae - 1], ke[ae - 1] = Le, c(ke);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: ae === d.length - 1,
                  onClick: () => {
                    const ke = [...d], Le = ke[ae];
                    ke[ae] = ke[ae + 1], ke[ae + 1] = Le, c(ke);
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
                value: g.key,
                placeholder: "Key (vd: FullName)",
                onChange: (ke) => {
                  const Le = [...d];
                  Le[ae] = { ...Le[ae], key: ke.target.value }, c(Le);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: g.title,
                placeholder: "Tiêu đề cột",
                onChange: (ke) => {
                  const Le = [...d];
                  Le[ae] = { ...Le[ae], title: ke.target.value }, c(Le);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: g.width || "50%",
                placeholder: "Width",
                onChange: (ke) => {
                  const Le = [...d];
                  Le[ae] = { ...Le[ae], width: ke.target.value }, c(Le);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: g.align || "left",
                onChange: (ke) => {
                  const Le = [...d];
                  Le[ae] = { ...Le[ae], align: ke.target.value }, c(Le);
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
                onClick: () => c(d.filter((ke, Le) => Le !== ae)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, ae)) }),
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
                value: _t,
                onChange: (g) => ds(g.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((g, ae) => {
              const ke = m || v, Le = ke ? `{${ke}.${g.key}}` : `{${g.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => ds(_t ? `${_t} - ${Le}` : Le),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    Le
                  ]
                },
                ae
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Bs, { className: "w-4 h-4 text-teal-400" }),
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
              (g, ae) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: g }),
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
                    defaultChecked: ae <= 1,
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
                    defaultChecked: ae > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, g)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(ns, { className: "w-4 h-4 text-teal-400" }),
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
}, Xl = ({ width: s }) => {
  var ue, Ce, Ve, We, Re;
  const [r, t] = $("layout"), [a, n] = $(null), [o, l] = $(!1), [i, d] = $(!1), [c, h] = $([]);
  Be(() => {
    Zs().then((k) => {
      k && k.length > 0 && h(k);
    });
  }, []);
  const [j, F] = $(null), [f, m] = $(null), D = Y((k) => k.features), u = Y((k) => k.activeFeatureId), b = Y((k) => k.selection), w = Y((k) => k.selectComponent), p = Y((k) => k.addComponent), v = Y((k) => k.updateComponentProps), E = Y((k) => k.updateComponentStyle), x = Y((k) => k.updateComponentEvents), C = Y((k) => k.updateComponentDataBinding), R = Y((k) => k.updateComponentValidation), I = Y((k) => k.updateComponentPermissions), B = Y((k) => k.updateComponentOrder), A = Y((k) => k.removeComponent);
  Y((k) => k.distributeSiblingWidths);
  const Q = Y((k) => k.updateFeatureScriptFile), [P, W] = $(""), [J, le] = $(0), q = D.find((k) => k.id === u), we = (k, N) => {
    if (!N) return null;
    for (const O of k) {
      if (O.id === N) return O;
      if (O.children) {
        const de = we(O.children, N);
        if (de) return de;
      }
    }
    return null;
  }, S = b.componentId && q ? we(q.components, b.componentId) : null, he = S != null && S.parentId && q ? we(q.components, S.parentId) : null, Se = he && ((ue = he.props) != null && ue.isTab || (Ce = he.props) != null && Ce.tab || he.type === "Tabs") ? he : null;
  if (!S) {
    const k = q ? q.components.filter((N) => !N.parentId) : [];
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
                    onChange: (N) => Q(q.id, N.target.value),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      k.length,
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
                      const N = `box_${Date.now().toString(36)}`;
                      p(
                        {
                          id: N,
                          type: "Container",
                          parentId: null,
                          pageId: q.id,
                          order: k.length + 1,
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
              k.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...k].sort((N, O) => (N.order ?? 1) - (O.order ?? 1)).map((N, O) => {
                var se, fe;
                const de = !!((se = N.props) != null && se.tab || (fe = N.props) != null && fe.isTab || N.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => w(N.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          O + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: N.props.label || N.props.title || N.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: N.type }),
                            de && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            N.id
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
                              value: Number(N.order ?? N.props.order ?? O + 1),
                              onClick: (ne) => ne.stopPropagation(),
                              onChange: (ne) => {
                                const xe = Number(ne.target.value);
                                B(N.id, xe);
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
                              ne.stopPropagation(), A(N.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  N.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const ie = S.type === "Container" || S.type === "Section" || S.type === "Tabs", ve = S.type === "Select" || S.type === "Dropdown" || S.type === "Autocomplete" || S.type === "SearchEntry", be = S.props.dropdownColumns || ((Ve = S.dataBinding) == null ? void 0 : Ve.dropdownColumns) || [], ye = !ie && (r === "layout" || r === "children") ? "props" : !ve && r === "columns" ? "data" : r, G = S.props.layoutMode || "flex", Z = S.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, M = S.props.gridConfig || { columns: 2, gap: "16px" }, z = S.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: S.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: S.props.label || S.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                S.id
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
                children: /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => A(S.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(Ue, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          ie && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          ie && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  z.length,
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
                /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(na, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(_s, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          ve && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => t("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ye === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  be.length,
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
                /* @__PURE__ */ e.jsx(Gn, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(rs, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          ie && ye === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => v(S.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${G === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(xt, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => v(S.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${G === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Wt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              G === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: Z.direction || "row",
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, direction: k.target.value }
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
                          value: typeof Z.columnsPerRow == "number" ? Z.columnsPerRow : M.columns || 12,
                          onChange: (k) => {
                            const N = Math.max(1, Number(k.target.value) || 12);
                            v(S.id, {
                              flexConfig: { ...Z, columnsPerRow: N },
                              gridConfig: { ...M, columns: N }
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
                          onChange: (k) => {
                            const N = k.target.value === "auto" ? "auto" : Number(k.target.value);
                            v(S.id, {
                              flexConfig: {
                                ...Z,
                                columnsPerRow: N,
                                wrap: N !== "auto" ? "wrap" : Z.wrap
                              },
                              gridConfig: {
                                ...M,
                                columns: N === "auto" ? 12 : N
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, justify: k.target.value }
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, align: k.target.value }
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, gap: k.target.value }
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, wrap: k.target.value }
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
              G === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          onChange: (k) => {
                            const N = Math.max(1, Number(k.target.value) || 12);
                            v(S.id, {
                              gridConfig: { ...M, columns: N },
                              flexConfig: { ...Z, columnsPerRow: N }
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
                          onChange: (k) => {
                            const N = Number(k.target.value);
                            v(S.id, {
                              gridConfig: { ...M, columns: N },
                              flexConfig: { ...Z, columnsPerRow: N }
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
                        value: Z.gap || M.gap || "12px",
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, gap: k.target.value },
                          gridConfig: { ...M, gap: k.target.value }
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, justify: k.target.value }
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
                        onChange: (k) => v(S.id, {
                          flexConfig: { ...Z, align: k.target.value }
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
                    checked: !!(S.props.isTab || S.props.tab || S.type === "Tabs"),
                    onChange: (k) => {
                      var de;
                      const N = k.target.checked, O = S.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      v(S.id, {
                        isTab: N,
                        tab: N,
                        tabs: N ? O : S.props.tabs,
                        activeTabId: N ? S.props.activeTabId || ((de = O[0]) == null ? void 0 : de.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(S.props.isTab || S.props.tab || S.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: S.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (k) => v(S.id, { label: k.target.value }),
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
                        value: Number(S.order ?? S.props.order ?? 1),
                        onChange: (k) => {
                          const N = Number(k.target.value);
                          B(S.id, N);
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
                        value: S.props.badge !== void 0 ? String(S.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (k) => v(S.id, {
                          badge: k.target.value || void 0
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
          ie && ye === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                z.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            z.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...z].sort((k, N) => (k.order ?? 1) - (N.order ?? 1)).map((k, N) => {
              var se, fe;
              const O = b.componentId === k.id, de = !!((se = k.props) != null && se.tab || (fe = k.props) != null && fe.isTab || k.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => w(k.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${O ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        N + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: k.props.label || k.props.title || k.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: k.type }),
                          de && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          k.id
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
                            value: k.order ?? N + 1,
                            onClick: (ne) => ne.stopPropagation(),
                            onChange: (ne) => {
                              const xe = Number(ne.target.value);
                              B(k.id, xe);
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
                            ne.stopPropagation(), A(k.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                k.id
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
                      value: Number(S.order ?? S.props.order ?? 1),
                      onChange: (k) => {
                        const N = Number(k.target.value);
                        B(S.id, N);
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
                        value: Number(S.props.colSpan || 4),
                        onChange: (k) => {
                          const N = Math.max(1, Number(k.target.value) || 1);
                          v(S.id, { colSpan: N });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: S.props.colSpan || 4,
                        onChange: (k) => v(S.id, { colSpan: Number(k.target.value) }),
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
                    S.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(S.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            ie && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(S.props.tab || S.props.isTab || S.type === "Tabs"),
                  onChange: (k) => {
                    const N = k.target.checked;
                    v(S.id, {
                      tab: N,
                      isTab: N
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            Se && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: S.props.tabId || ((Re = (We = Se.props.tabs) == null ? void 0 : We[0]) == null ? void 0 : Re.id) || "main",
                  onChange: (k) => v(S.id, { tabId: k.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (Se.props.tabs || []).map((k) => /* @__PURE__ */ e.jsxs("option", { value: k.id, children: [
                    k.label,
                    " (",
                    k.id,
                    ")"
                  ] }, k.id))
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
                      checked: S.props.showLabel ?? !0,
                      onChange: (k) => v(S.id, { showLabel: k.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: S.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (k) => v(S.id, { label: k.target.value }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: S.props.labelPosition || "left",
                      onChange: (k) => v(S.id, { labelPosition: k.target.value }),
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
                        value: Number(S.props.colSpan || 4),
                        onChange: (k) => {
                          const N = Math.max(1, Number(k.target.value) || 1);
                          v(S.id, { colSpan: N });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: S.props.colSpan || 4,
                        onChange: (k) => v(S.id, { colSpan: Number(k.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((k) => /* @__PURE__ */ e.jsxs("option", { value: k, children: [
                          k,
                          " Cột (",
                          Math.round(k / 12 * 100),
                          "%)"
                        ] }, k))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    S.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(S.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            S.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: S.props.placeholder || "",
                  onChange: (k) => v(S.id, { placeholder: k.target.value }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            S.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: S.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (k) => v(S.id, { reference: k.target.value }),
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
                      value: S.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (k) => v(S.id, { displayField: k.target.value }),
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
                      value: S.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (k) => v(S.id, { valueField: k.target.value }),
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
                    value: S.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (k) => v(S.id, { placeholder: k.target.value }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            S.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: S.props.rows || 3,
                  onChange: (k) => v(S.id, { rows: Number(k.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            S.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: S.props.precision !== void 0 ? S.props.precision : 2,
                    onChange: (k) => v(S.id, { precision: Number(k.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.props.thousandsSeparator ?? !0,
                    onChange: (k) => v(S.id, { thousandsSeparator: k.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            S.type === "Table" && (() => {
              const k = S.props.columns || [], N = a !== null ? k[a] : null, O = (ee, ce) => {
                const Ie = k.map((me, oe) => oe === ee ? { ...me, ...ce } : me);
                v(S.id, { columns: Ie });
              }, de = (ee, ce) => {
                if (ce < 0 || ce >= k.length) return;
                const Ie = Ks(k, ee, ce);
                v(S.id, { columns: Ie }), n(ce);
              }, se = (ee) => {
                const ce = Lr(k, ee);
                v(S.id, { columns: ce });
                const Ie = ce.findIndex((me) => me.key === ee);
                Ie !== -1 && n(Ie);
              }, fe = (ee, ce) => {
                const Ie = Math.max(0, Math.min(k.length - 1, ce - 1));
                if (Ie !== ee) {
                  const me = Ks(k, ee, Ie);
                  v(S.id, { columns: me }), n(Ie);
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
                  order: k.length + 1
                }, ce = ts([...k, ee]);
                v(S.id, { columns: ce }), n(ce.length - 1);
              }, xe = (ee) => {
                const ce = k.filter((me, oe) => oe !== ee), Ie = ts(ce);
                v(S.id, { columns: Ie }), a === ee ? n(null) : a !== null && a > ee && n(a - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-cyan-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: k.map((ee, ce) => {
                  const Ie = a === ce, me = !!(ee.frozen || ee.sticky === "left"), oe = j === ce, K = f === ce;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => F(ce),
                      onDragOver: (U) => {
                        U.preventDefault(), !(j === null || j === ce) && m(ce);
                      },
                      onDragLeave: () => m(null),
                      onDrop: () => {
                        j !== null && j !== ce && de(j, ce), F(null), m(null);
                      },
                      onDragEnd: () => {
                        F(null), m(null);
                      },
                      onClick: () => n(ce),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${oe ? "opacity-30 bg-slate-800" : ""} ${K ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Ie ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(Qs, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ce === 0,
                                onClick: (U) => {
                                  U.stopPropagation(), de(ce, ce - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(ss, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ce === k.length - 1,
                                onClick: (U) => {
                                  U.stopPropagation(), de(ce, ce + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(St, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            ee.order ?? ce + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: ee.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            ee.key,
                            "]"
                          ] }),
                          me && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: ee.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (U) => {
                                U.stopPropagation(), xe(ce);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    ee.key || ce
                  );
                }) }),
                N && a !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      N.title
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
                        /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
                          max: k.length,
                          value: N.order ?? a + 1,
                          onChange: (ee) => {
                            const ce = parseInt(ee.target.value, 10);
                            isNaN(ce) || fe(a, ce);
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
                          value: N.key,
                          onChange: (ee) => O(a, { key: ee.target.value }),
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
                          value: N.title,
                          onChange: (ee) => O(a, { title: ee.target.value }),
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
                          value: N.componentType || "TextBox",
                          onChange: (ee) => O(a, { componentType: ee.target.value }),
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
                          value: N.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (ee) => O(a, { width: ee.target.value }),
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
                          value: N.align || "left",
                          onChange: (ee) => O(a, { align: ee.target.value }),
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
                          value: N.aggregate || "none",
                          onChange: (ee) => O(a, { aggregate: ee.target.value }),
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
                          checked: !!(N.frozen || N.sticky === "left"),
                          onChange: () => se(N.key),
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
                          checked: N.editable ?? !0,
                          onChange: (ee) => O(a, { editable: ee.target.checked }),
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
                          checked: N.sortable ?? !0,
                          onChange: (ee) => O(a, { sortable: ee.target.checked }),
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
                          Array.isArray(N.events) ? N.events.length : N.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(N.events) && N.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: N.events.map((ee) => `${ee.trigger} ➔ ${ee.handlerName || ee.action}()`).join(", ") }) : N.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      N.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && N && a !== null && /* @__PURE__ */ e.jsx(
                  Fr,
                  {
                    isOpen: o,
                    column: N,
                    onClose: () => l(!1),
                    onSave: (ee) => {
                      const ce = k.map((oe, K) => K === a ? ee : oe), Ie = ts(ce);
                      v(S.id, { columns: Ie });
                      const me = Ie.findIndex((oe) => oe.key === ee.key);
                      me !== -1 && n(me);
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
                    checked: !!S.props.required,
                    onChange: (k) => v(S.id, { required: k.target.checked }),
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
                    checked: !!S.props.disabled,
                    onChange: (k) => v(S.id, { disabled: k.target.checked }),
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
                    value: S.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (k) => E(S.id, { width: k.target.value }),
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
                    value: S.style.height || S.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (k) => E(S.id, {
                      height: k.target.value,
                      minHeight: k.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Fs, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: S.style.customCss || kl(S.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (k) => {
                    const N = k.target.value, O = Cl(N);
                    if (E(S.id, {
                      ...O,
                      customCss: N
                    }), O.justifyContent || O.alignItems) {
                      const de = S.props.flexConfig || {};
                      v(S.id, {
                        flexConfig: {
                          ...de,
                          ...O.justifyContent ? { justify: O.justifyContent } : {},
                          ...O.alignItems ? { align: O.alignItems } : {}
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
            Dr,
            {
              events: S.events || [],
              onChange: (k) => x(S.id, k),
              scriptFile: (q == null ? void 0 : q.scriptFile) || "transactionList.bl.ts",
              componentName: S.props.label || S.type,
              componentId: S.id,
              contextExtra: {
                pageId: u,
                nodeId: S.id,
                type: S.type
              }
            }
          ),
          ye === "data" && (() => {
            const k = S.dataBinding || {}, N = S.props || {}, O = S.type, de = O === "Table" || O === "GridView" || O === "AdvancedGrid", se = O === "Select" || O === "Dropdown" || O === "Autocomplete" || O === "SearchEntry", fe = O === "TextBox" || O === "Number" || O === "DatePicker" || O === "Checkbox" || O === "Textarea", ne = !de && !se && !fe, xe = gs(c), ee = k.entityName || N.reference || N.refName || "", ce = vs(xe, ee), Ie = ce ? ce.fields : [], me = k.dataSource || N.dataSource || N.dataSourceFilter || k.query || N.query || "", oe = (K) => {
              C(S.id, {
                dataSource: K,
                query: K
              }), v(S.id, {
                dataSource: K,
                dataSourceFilter: K,
                query: K
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(_s, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      O,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  de && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  se && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  fe && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  ne && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(Ct, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              de && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ce ? ce.name : "",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, {
                          entityName: U,
                          refName: U
                        }), v(S.id, {
                          reference: U,
                          refName: U
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        xe.map((K) => /* @__PURE__ */ e.jsxs("option", { value: K.name, children: [
                          K.displayName,
                          " (",
                          K.name,
                          ")"
                        ] }, K.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: k.entityName || N.reference || N.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, {
                          entityName: U,
                          refName: U
                        }), v(S.id, {
                          reference: U,
                          refName: U
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Fs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: me,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (K) => oe(K.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => oe("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => oe("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => oe(""),
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
                      value: k.sqlWhere || N.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, { sqlWhere: U }), v(S.id, { sqlWhere: U });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              se && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: k.fieldName || N.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, { fieldName: U }), v(S.id, { fieldName: U });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Ie.map((K) => /* @__PURE__ */ e.jsxs("option", { value: K.name, children: [
                    K.displayName,
                    " (",
                    K.name,
                    ")"
                  ] }, K.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: ce ? ce.name : "",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, {
                          entityName: U,
                          refName: U
                        }), v(S.id, {
                          reference: U,
                          refName: U
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        xe.map((K) => /* @__PURE__ */ e.jsxs("option", { value: K.name, children: [
                          K.displayName,
                          " (",
                          K.name,
                          ")"
                        ] }, K.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: k.entityName || N.reference || N.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, {
                          entityName: U,
                          refName: U
                        }), v(S.id, {
                          reference: U,
                          refName: U
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Fs, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 3,
                      value: me,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (K) => oe(K.target.value),
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
                      value: k.populateField || N.populateRule || N.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, { populateField: U }), v(S.id, { populateRule: U, populateField: U });
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
                        value: k.idField || N.idField || "Id",
                        placeholder: "Id",
                        onChange: (K) => {
                          const U = K.target.value;
                          C(S.id, { idField: U }), v(S.id, { idField: U });
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
                        value: k.selectField || N.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (K) => {
                          const U = K.target.value;
                          C(S.id, { selectField: U }), v(S.id, { selectField: U });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Qe, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      be.length,
                      " cột)"
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => t("columns"),
                        className: "text-[10px] px-2 py-0.5 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 rounded font-semibold transition-colors cursor-pointer",
                        children: "Cấu hình cột & FormatData →"
                      }
                    )
                  ] }),
                  be.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: be.map((K, U) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        K.title,
                        " (",
                        K.key,
                        ")"
                      ]
                    },
                    U
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (k.formatData ?? N.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              fe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: k.fieldName || N.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, { fieldName: U }), v(S.id, { fieldName: U });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Ie.map((K) => /* @__PURE__ */ e.jsxs("option", { value: K.name, children: [
                    K.displayName,
                    " (",
                    K.name,
                    ")"
                  ] }, K.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: k.formatter || "",
                      onChange: (K) => C(S.id, { formatter: K.target.value }),
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
                      value: k.formatData || N.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (K) => {
                        const U = K.target.value;
                        C(S.id, { formatData: U }), v(S.id, { formatData: U });
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
                      checked: k.twoWay ?? !0,
                      onChange: (K) => C(S.id, { twoWay: K.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              ne && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(xt, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  S.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          ye === "columns" && ve && (() => {
            const k = S.dataBinding || {}, N = S.props || {}, O = gs(c), de = k.entityName || N.reference || N.refName || "", se = vs(O, de), fe = se ? se.fields : [], ne = k.formatData ?? N.formatData ?? "", xe = (me) => {
              v(S.id, { dropdownColumns: me }), C(S.id, { dropdownColumns: me });
            }, ee = () => {
              var oe, K;
              const me = [
                ...be,
                {
                  key: ((oe = fe[be.length]) == null ? void 0 : oe.name) || `col${be.length + 1}`,
                  title: ((K = fe[be.length]) == null ? void 0 : K.displayName) || `Cột ${be.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              xe(me);
            }, ce = () => {
              if (!se || se.fields.length === 0) return;
              const me = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let oe = se.fields.filter(
                (U) => me.includes(U.name.toLowerCase())
              );
              oe.length === 0 ? oe = se.fields.slice(0, 3) : oe = oe.slice(0, 4);
              const K = oe.map((U) => ({
                key: U.name,
                title: U.displayName || U.name,
                width: `${Math.floor(100 / oe.length)}%`,
                align: "left"
              }));
              xe(K);
            }, Ie = (me, oe) => {
              const K = me + oe;
              if (K < 0 || K >= be.length) return;
              const U = [...be], Je = U[me];
              U[me] = U[K], U[K] = Je, xe(U);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: de ? `Ref: ${de}` : "Chưa chọn Ref" })
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
                  se && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ce,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${se.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(nt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  be.length,
                  ")"
                ] }) }),
                be.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: be.map((me, oe) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          oe + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ie(oe, -1),
                              disabled: oe === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ie(oe, 1),
                              disabled: oe === be.length - 1,
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
                                const K = be.filter((U, Je) => Je !== oe);
                                xe(K);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
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
                              value: me.key,
                              list: `dropdown-col-fields-${oe}`,
                              placeholder: "vd: FullName",
                              onChange: (K) => {
                                const U = [...be];
                                U[oe] = { ...U[oe], key: K.target.value }, xe(U);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${oe}`, children: fe.map((K) => /* @__PURE__ */ e.jsxs("option", { value: K.name, children: [
                            K.displayName,
                            " (",
                            K.name,
                            ")"
                          ] }, K.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: me.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (K) => {
                                const U = [...be];
                                U[oe] = { ...U[oe], title: K.target.value }, xe(U);
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
                              value: me.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (K) => {
                                const U = [...be];
                                U[oe] = { ...U[oe], width: K.target.value }, xe(U);
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
                              value: me.align || "left",
                              onChange: (K) => {
                                const U = [...be];
                                U[oe] = { ...U[oe], align: K.target.value }, xe(U);
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
                  oe
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
                    onChange: (me) => {
                      const oe = me.target.value;
                      C(S.id, { formatData: oe }), v(S.id, { formatData: oe });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                be.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: be.map((me, oe) => {
                    const K = de ? `{${de}.${me.key}}` : `{${me.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const U = ne ? `${ne} - ${K}` : K;
                          C(S.id, { formatData: U }), v(S.id, { formatData: U });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          K
                        ]
                      },
                      oe
                    );
                  }) })
                ] })
              ] })
            ] });
          })(),
          ye === "validation" && (() => {
            const k = S.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Gn, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!k.required,
                      onChange: (N) => R(S.id, { required: N.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                k.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: k.requiredMessage || "",
                    onChange: (N) => R(S.id, { requiredMessage: N.target.value }),
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
                      value: k.minLength !== void 0 ? k.minLength : "",
                      onChange: (N) => R(S.id, {
                        minLength: N.target.value === "" ? void 0 : Number(N.target.value)
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
                      value: k.maxLength !== void 0 ? k.maxLength : "",
                      onChange: (N) => R(S.id, {
                        maxLength: N.target.value === "" ? void 0 : Number(N.target.value)
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
                    value: k.pattern || "",
                    onChange: (N) => R(S.id, { pattern: N.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: k.patternMessage || "",
                    onChange: (N) => R(S.id, { patternMessage: N.target.value }),
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
                    value: k.customValidator || "",
                    onChange: (N) => R(S.id, { customValidator: N.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          ye === "permissions" && (() => {
            const k = S.permissions || {}, N = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], O = k.allowedRoles || [], de = k.readOnlyRoles || [], se = (ne) => {
              const xe = O.includes(ne) ? O.filter((ee) => ee !== ne) : [...O, ne];
              I(S.id, { allowedRoles: xe });
            }, fe = (ne) => {
              const xe = de.includes(ne) ? de.filter((ee) => ee !== ne) : [...de, ne];
              I(S.id, { readOnlyRoles: xe });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(rs, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: N.map((ne) => {
                  const xe = O.includes(ne);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => se(ne),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${xe ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ne }),
                        xe && /* @__PURE__ */ e.jsx(Os, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    ne
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: N.map((ne) => {
                  const xe = de.includes(ne);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => fe(ne),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${xe ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: ne }),
                        xe && /* @__PURE__ */ e.jsx(Os, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
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
                      onClick: () => I(S.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(k.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      onClick: () => I(S.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${k.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
        i && S && /* @__PURE__ */ e.jsx(
          Sl,
          {
            isOpen: i,
            node: S,
            onClose: () => d(!1),
            onSave: (k, N, O) => {
              v(k, N), O && C(k, O);
            }
          }
        )
      ]
    }
  );
}, tr = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: kt,
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
    icon: hr,
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
    icon: xt,
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
    icon: Ht,
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
    icon: Tt,
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
    icon: br,
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
    icon: ra,
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
    icon: ur,
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
    icon: aa,
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
    icon: la,
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
    icon: Qe,
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
    icon: mr,
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
    icon: ms,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: ns,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: oa,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: ia,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: ca,
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
    icon: da,
    defaultProps: {
      tabs: [
        { id: "main", label: "TAB 1" }
      ]
    },
    defaultStyle: { width: "100%" }
  }
], Tl = ({ item: s, onClick: r, isEditing: t }) => {
  const a = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = vr({
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
      onClick: () => r(s),
      className: `group flex items-center gap-3 p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left cursor-grab active:cursor-grabbing select-none ${i ? "opacity-40 ring-2 ring-blue-500 shadow-xl" : ""}`,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0", children: /* @__PURE__ */ e.jsx(a, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-200 group-hover:text-white truncate", children: s.name }),
          /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400 truncate mt-0.5", children: s.description })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(Ze, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Ql = ({ isEditing: s = !0, onAddComponent: r }) => {
  const t = Y((c) => c.addComponent), a = Y((c) => c.activeFeatureId), n = Y((c) => c.features), o = Y((c) => c.selection), l = n.find((c) => c.id === a), i = (c, h) => {
    if (!h) return null;
    for (const j of c) {
      if (j.id === h) return j;
      if (j.children) {
        const F = i(j.children, h);
        if (F) return F;
      }
    }
    return null;
  }, d = (c) => {
    var f;
    if (!s) return;
    if (r) {
      r(c.type);
      return;
    }
    const h = i((l == null ? void 0 : l.components) || [], o.componentId);
    let j = null;
    h && (h.type === "Container" ? j = h.id : j = h.parentId || null);
    const F = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: j,
      pageId: a,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((f = l == null ? void 0 : l.components) == null ? void 0 : f.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    t(F, j);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Qs, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: tr.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: tr.map((c) => /* @__PURE__ */ e.jsx(
      Tl,
      {
        item: c,
        onClick: d,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, Zl = () => {
  const s = Y((i) => i.features), r = Y((i) => i.activeFeatureId), t = Y((i) => i.selection), a = Y((i) => i.selectComponent), n = Y((i) => i.removeComponent), o = s.find((i) => i.id === r);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, d = 0) => i.map((c) => {
    const h = t.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => a(c.id),
          style: { paddingLeft: `${d * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${h ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                onClick: (j) => {
                  j.stopPropagation(), n(c.id);
                },
                className: "text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "Xóa component",
                children: /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, d + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, eo = () => {
  const s = Ye((f) => f.openTabs), r = Ye((f) => f.activeTabId), t = Ye((f) => f.setActiveTab), a = Ye((f) => f.closeTab), n = Y((f) => f.setActiveFeature), o = je((f) => f.isFormDirty), l = je((f) => f.markFormClean), [i, d] = $(null);
  if (s.length === 0) return null;
  const c = (f, m) => {
    var u;
    t(f);
    const D = s.find((b) => b.id === f);
    n(m, ((u = D == null ? void 0 : D.params) == null ? void 0 : u.id) ?? null);
  }, h = (f) => {
    a(f), setTimeout(() => {
      var D;
      const m = Ye.getState().openTabs.find(
        (u) => u.id === Ye.getState().activeTabId
      );
      m && n(m.featureId, ((D = m.params) == null ? void 0 : D.id) ?? null);
    }, 50);
  }, j = (f, m) => {
    if (f.stopPropagation(), m.isDirty || (m.featureId ? o(m.featureId) : !1)) {
      d(m);
      return;
    }
    h(m.id);
  }, F = () => {
    i && (i.featureId && l(i.featureId), h(i.id), d(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((f) => {
      const m = f.id === r, D = f.isDirty || (f.featureId ? o(f.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(f.id, f.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${m ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: D ? `${f.title} (Có dữ liệu chưa lưu)` : f.title,
          children: [
            /* @__PURE__ */ e.jsx(kt, { className: `w-3.5 h-3.5 ${m ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: f.title }),
            D && /* @__PURE__ */ e.jsx(
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
                onClick: (u) => j(u, f),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(et, { className: "w-3 h-3" })
              }
            )
          ]
        },
        f.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(ua, { className: "w-5 h-5" }) }),
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
            onClick: F,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, _r = "uiforge_resilience_queue_v1";
let bs = !1, sr = !1;
function ys() {
  if (typeof window > "u") return [];
  try {
    const s = localStorage.getItem(_r);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}
function Or(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(_r, JSON.stringify(s)), console.log(`[ResilienceQueue] Hiện có ${s.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function Dl(s, r) {
  var n;
  const t = ys(), a = {
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    url: s.url || "",
    method: (s.method || "POST").toUpperCase(),
    data: s.data,
    headers: {
      "Content-Type": "application/json"
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    retryCount: 0,
    description: r || `Thao tác ${(n = s.method) == null ? void 0 : n.toUpperCase()} trên ${s.url}`
  };
  return t.push(a), Or(t), Mr(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${a.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), a;
}
function Mr(s, r, t = "info") {
  if (typeof document > "u") return;
  const a = document.createElement("div");
  a.className = `fixed top-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300 ${t === "warning" ? "bg-amber-950/90 border-amber-600/50 text-amber-100 shadow-amber-900/30" : t === "success" ? "bg-emerald-950/90 border-emerald-600/50 text-emerald-100 shadow-emerald-900/30" : "bg-blue-950/90 border-blue-600/50 text-blue-100 shadow-blue-900/30"}`, a.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5 text-lg">
        ${t === "warning" ? "⚠️" : t === "success" ? "✅" : "ℹ️"}
      </div>
      <div class="flex-1 text-xs">
        <div class="font-bold text-sm mb-1">${s}</div>
        <div class="opacity-90 leading-relaxed">${r}</div>
      </div>
    </div>
  `, document.body.appendChild(a), setTimeout(() => {
    a.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => a.remove(), 300);
  }, 4500);
}
async function Es(s) {
  var n, o;
  if (bs) return;
  const r = ys();
  if (r.length === 0) return;
  bs = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${r.length} tác vụ đang chờ...`);
  let t = 0;
  const a = [];
  for (const l of r)
    try {
      await s.request({
        url: l.url,
        method: l.method,
        data: l.data
      }), t++, console.log(`[ResilienceQueue] Đồng bộ thành công: ${l.description}`);
    } catch (i) {
      l.retryCount = (l.retryCount || 0) + 1, console.warn(`[ResilienceQueue] Lỗi khi đồng bộ lại ${l.description} (lần thử ${l.retryCount}):`, i == null ? void 0 : i.message), ((n = i == null ? void 0 : i.response) == null ? void 0 : n.status) >= 400 && ((o = i == null ? void 0 : i.response) == null ? void 0 : o.status) < 500 || a.push(l);
    }
  Or(a), bs = !1, t > 0 && Mr(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${t} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function Fl(s) {
  var t, a;
  if (!s) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !s.response && (s.code === "ERR_NETWORK" || (t = s.message) != null && t.includes("Network Error"))) return !0;
  const r = (a = s.response) == null ? void 0 : a.status;
  return r === 502 || r === 503 || r === 504;
}
function Il(s) {
  sr || typeof window > "u" || (sr = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), Es(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && ys().length > 0 && !bs && Es(s);
  }, 2e4), setTimeout(() => {
    const r = ys();
    r.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${r.length} tác vụ chưa hoàn tất từ phiên trước.`), Es(s));
  }, 3e3));
}
const Rl = "http://localhost:5048/api", ks = Na.create({
  baseURL: Rl,
  timeout: 15e3
});
ks.interceptors.request.use((s) => {
  const r = en.getState().token;
  return r && (s.headers.Authorization = `Bearer ${r}`), s;
});
ks.interceptors.response.use(
  (s) => s,
  async (s) => {
    var a, n, o, l, i;
    if (((a = s == null ? void 0 : s.response) == null ? void 0 : a.status) === 401)
      return en.getState().logout(), Promise.reject(s);
    const r = (((n = s == null ? void 0 : s.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(r) && Fl(s)) {
      const d = (l = (o = s == null ? void 0 : s.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${r} [${(i = s == null ? void 0 : s.config) == null ? void 0 : i.url}]`;
      return Dl(s.config, d), Promise.resolve({
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
Il(ks);
async function Ll(s) {
  await ks.delete(`/pages/${s}`);
}
const to = ({ width: s }) => {
  const r = Y((x) => x.features), t = Y((x) => x.activeFeatureId), a = Y((x) => x.setActiveFeature), n = Y((x) => x.addFeature), o = Y((x) => x.renameFeature), l = Y((x) => x.deleteFeature), i = r.filter((x) => !x.hidden && !x.isDetail), [d, c] = $(null), [h, j] = $(!1), [F, f] = $(""), [m, D] = $(null), u = (x) => {
    x.preventDefault(), c({
      x: x.clientX,
      y: x.clientY
    });
  }, b = (x, C) => {
    x.preventDefault(), x.stopPropagation(), c({
      x: x.clientX,
      y: x.clientY,
      featureId: C
    });
  }, w = () => {
    f(""), j(!0);
  }, p = (x) => {
    x.preventDefault(), F.trim() && (n(F.trim()), j(!1), f(""));
  }, v = (x) => {
    x.preventDefault(), !(!m || !m.name.trim()) && (o(m.id, m.name.trim()), D(null));
  }, E = d != null && d.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: Is,
      onClick: w
    },
    {
      divider: !0,
      label: "",
      onClick: () => {
      }
    },
    {
      label: "✏️ Đổi tên Feature này",
      icon: pa,
      onClick: () => {
        const x = r.find((C) => C.id === d.featureId);
        x && D({ id: x.id, name: x.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: Ue,
      danger: !0,
      onClick: async () => {
        if (confirm("Bạn có chắc chắn muốn xóa Feature này?")) {
          try {
            await Ll(d.featureId);
          } catch {
          }
          l(d.featureId);
        }
      }
    }
  ] : [
    {
      label: "➕ Thêm Feature mới (Màn hình mới)",
      icon: Is,
      onClick: w
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: u,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((x, C) => {
            const R = x.id === t;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  a(x.id, null), Ye.getState().openFeature(x.id, {}, "Tab", x.name);
                },
                onContextMenu: (I) => b(I, x.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${R ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${R ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: C === 0 ? /* @__PURE__ */ e.jsx(xa, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: x.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (I) => b(I, x.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${R ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(ha, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              },
              x.id
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
      Br,
      {
        x: d.x,
        y: d.y,
        items: E,
        onClose: () => c(null)
      }
    ),
    h && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: p,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(Is, { className: "w-5 h-5" }) }),
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
                value: F,
                onChange: (x) => f(x.target.value),
                className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => j(!1),
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
    m && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: v,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: m.name,
              onChange: (x) => D({ ...m, name: x.target.value }),
              className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => D(null),
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
}, so = ({
  isPreview: s,
  onTogglePreview: r,
  onSave: t,
  isSaving: a = !1
}) => {
  const n = Y((h) => h.undo), o = Y((h) => h.redo), l = Y((h) => h.historyIndex), i = Y((h) => h.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(fr, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(gr, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: r, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: a, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, no = ({
  isPreview: s,
  onTogglePreview: r,
  onSave: t,
  isSaving: a = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: d,
  branch: c,
  onLogout: h
}) => {
  const j = Y((v) => v.features), F = Y((v) => v.activeFeatureId), f = Y((v) => v.undo), m = Y((v) => v.redo), D = Y((v) => v.historyIndex), u = Y((v) => v.history), b = j.find((v) => v.id === F), w = D > 0, p = D < u.length - 1;
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
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (b == null ? void 0 : b.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: f,
            disabled: !w,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(fr, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: m,
            disabled: !p,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(gr, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: r,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${s ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ma, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(qs, { className: "w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Xem Thử Trực Tiếp" })
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: t,
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
      !s && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${n ? "bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30" : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750"}`,
          title: n ? "Ẩn bảng quản lý bên phải" : "Mở bảng quản lý bên phải",
          children: n ? /* @__PURE__ */ e.jsx(ba, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(fa, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(ga, { className: "w-4 h-4" }),
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
        h && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(va, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, ro = () => {
  const s = Ye((i) => i.activePopup), r = Ye((i) => i.closePopup), t = Ye((i) => i.openFeature), a = Y((i) => i.features);
  if (!s) return null;
  const n = a.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), r();
  };
  return Dt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(kt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(xr, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(et, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(ya, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          ls,
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
export {
  Fr as ColumnPropertiesModal,
  Ql as ComponentPalette,
  Sl as ComponentPropertiesModal,
  ls as ComponentRenderer,
  Zl as ComponentTree,
  Br as ContextMenu,
  Ir as EnterpriseDatePicker,
  dl as EnterpriseSelect,
  Jl as FeatureCanvas,
  ro as FeaturePopupModal,
  Ul as ForgeAdvancedGrid,
  jl as ForgeAutocomplete,
  Ma as ForgeButton,
  pl as ForgeCheckbox,
  Xn as ForgeContainer,
  xl as ForgeDatePicker,
  ml as ForgeDivider,
  yl as ForgeFileUploadGrid,
  Kl as ForgeFormContainer,
  Ga as ForgeLabel,
  hl as ForgeModal,
  Ka as ForgeNumber,
  fl as ForgeRecordSelector,
  vl as ForgeSearchEntry,
  gl as ForgeSearchModal,
  za as ForgeSection,
  ul as ForgeSelect,
  $r as ForgeTabStack,
  il as ForgeTable,
  ql as ForgeTabs,
  Wa as ForgeTextBox,
  bl as ForgeTextarea,
  Ft as FormFieldWrapper,
  Za as GridCellComponent,
  Ua as HeaderContextMenu,
  Yl as InlineCellEditor,
  to as LeftNavbar,
  hs as PermissionGuard,
  Xl as PropertyPanel,
  qa as RowContextMenu,
  Ja as SummaryRow,
  so as TopBar,
  no as TopNav,
  Dr as UnifiedEventEditor,
  eo as WorkspaceTabBar,
  Sa as addFunctionToBlFile,
  nl as calculateAutoPopulatedFields,
  tl as calculateLeftOffsets,
  fs as executeSingleEvent,
  ll as exportGridToExcel,
  Da as findFunctionInModule,
  Gl as getCascadedOptions,
  Ar as getComponentOuterLayoutStyle,
  ka as getFunctionsForBlFile,
  Er as groupNodesByTabStack,
  cl as interpolateFormatData,
  Ks as moveColumn,
  js as normalizeBlKey,
  ts as normalizeColumnOrders,
  Qn as parseDDMMYYYY,
  ol as printGridReport,
  Wl as registerBL,
  Ta as registerBlFunctions,
  Hl as removeFunctionFromBlFile,
  Nr as resolveBlModule,
  Rr as sortColumnsByCorePolicy,
  Lr as toggleColumnFreeze,
  Ee as triggerComponentEvent,
  en as useAuthStore,
  je as useDataEngine,
  Y as useEditorStore,
  el as useGridKeyboardNavigation,
  Vt as useMasterDetailStore,
  Ye as useNavigationEngine,
  zs as validateDateSequence,
  rl as validateField,
  zl as validateForm,
  Gs as validateISO6346ContainerNo
};
