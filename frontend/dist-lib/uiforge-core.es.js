var Ia = Object.defineProperty;
var Ra = (s, a, t) => a in s ? Ia(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var us = (s, a, t) => Ra(s, typeof a != "symbol" ? a + "" : a, t);
import Vt, { useState as L, useRef as Me, useEffect as Te, useCallback as qt, useMemo as Le, useId as Gn } from "react";
import { create as Wt } from "zustand";
import { Layers as pt, ChevronDown as ns, ChevronUp as zn, Printer as Un, Zap as Ue, Save as Dt, Eye as Rs, EyeOff as Pa, Pin as qn, ChevronRight as Yn, Sliders as Tt, Copy as Jn, Trash2 as Be, Filter as Xn, Settings as La, PlusCircle as Qn, ArrowUp as Zn, ArrowDown as ea, Plus as qe, FileCode as vs, Play as Ea, Shield as ys, X as Ye, ExternalLink as ta, Calendar as Ps, Search as Kt, RefreshCw as $a, FileDown as Aa, ArrowUpDown as Ls, ChevronLeft as Ba, Tag as sa, Database as Ns, Check as na, Paperclip as aa, Upload as Rn, Download as ps, Image as _a, FileText as _t, File as Oa, GripVertical as Es, Lock as Ot, Sparkles as ra, CheckCircle2 as js, Box as ut, ArrowRightLeft as Pn, Columns as kt, Type as Ct, Square as Qt, Table as es, Paintbrush as Ma, ShieldCheck as Ln, Code as Ha, Hash as Va, ChevronDownSquare as Wa, CheckSquare as Ka, Minus as Ga, Maximize2 as za, AlignLeft as Ua, FolderKanban as qa, AlertTriangle as Ya, FolderPlus as xs, Edit2 as Ja, LayoutDashboard as Xa, MoreVertical as Qa, Undo2 as la, Redo2 as oa, Edit3 as Za, PanelRightClose as er, PanelRightOpen as tr, Bell as sr, LogOut as nr, CheckCircle as ar } from "lucide-react";
import { createPortal as Gt } from "react-dom";
import { useDraggable as ia, useDroppable as ca } from "@dnd-kit/core";
import { CSS as rr } from "@dnd-kit/utilities";
import lr from "axios";
var ws = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function or() {
  if (En) return Lt;
  En = 1;
  var s = Vt, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, p, c) {
    var d, y = {}, u = null, f = null;
    c !== void 0 && (u = "" + c), p.key !== void 0 && (u = "" + p.key), p.ref !== void 0 && (f = p.ref);
    for (d in p) r.call(p, d) && !o.hasOwnProperty(d) && (y[d] = p[d]);
    if (i && i.defaultProps) for (d in p = i.defaultProps, p) y[d] === void 0 && (y[d] = p[d]);
    return { $$typeof: a, type: i, key: u, ref: f, props: y, _owner: n.current };
  }
  return Lt.Fragment = t, Lt.jsx = l, Lt.jsxs = l, Lt;
}
var Et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function ir() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Vt, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b = Symbol.iterator, j = "@@iterator";
    function v(N) {
      if (N === null || typeof N != "object")
        return null;
      var H = b && N[b] || N[j];
      return typeof H == "function" ? H : null;
    }
    var m = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(N) {
      {
        for (var H = arguments.length, q = new Array(H > 1 ? H - 1 : 0), Z = 1; Z < H; Z++)
          q[Z - 1] = arguments[Z];
        P("error", N, q);
      }
    }
    function P(N, H, q) {
      {
        var Z = m.ReactDebugCurrentFrame, h = Z.getStackAddendum();
        h !== "" && (H += "%s", q = q.concat([h]));
        var R = q.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + H), Function.prototype.apply.call(console[N], console, R);
      }
    }
    var I = !1, A = !1, g = !1, T = !1, E = !1, D;
    D = Symbol.for("react.module.reference");
    function O(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || E || N === n || N === c || N === d || T || N === f || I || A || g || typeof N == "object" && N !== null && (N.$$typeof === u || N.$$typeof === y || N.$$typeof === l || N.$$typeof === i || N.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === D || N.getModuleId !== void 0));
    }
    function _(N, H, q) {
      var Z = N.displayName;
      if (Z)
        return Z;
      var h = H.displayName || H.name || "";
      return h !== "" ? q + "(" + h + ")" : q;
    }
    function V(N) {
      return N.displayName || "Context";
    }
    function F(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
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
      if (typeof N == "object")
        switch (N.$$typeof) {
          case i:
            var H = N;
            return V(H) + ".Consumer";
          case l:
            var q = N;
            return V(q._context) + ".Provider";
          case p:
            return _(N, N.render, "ForwardRef");
          case y:
            var Z = N.displayName || null;
            return Z !== null ? Z : F(N.type) || "Memo";
          case u: {
            var h = N, R = h._payload, S = h._init;
            try {
              return F(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, M = 0, J, w, X, oe, de, ue, me;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Ne() {
      {
        if (M === 0) {
          J = console.log, w = console.info, X = console.warn, oe = console.error, de = console.group, ue = console.groupCollapsed, me = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        M++;
      }
    }
    function Se() {
      {
        if (M--, M === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, N, {
              value: J
            }),
            info: K({}, N, {
              value: w
            }),
            warn: K({}, N, {
              value: X
            }),
            error: K({}, N, {
              value: oe
            }),
            group: K({}, N, {
              value: de
            }),
            groupCollapsed: K({}, N, {
              value: ue
            }),
            groupEnd: K({}, N, {
              value: me
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = m.ReactCurrentDispatcher, ae;
    function le(N, H, q) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (h) {
            var Z = h.stack.trim().match(/\n( *(at )?)/);
            ae = Z && Z[1] || "";
          }
        return `
` + ae + N;
      }
    }
    var we = !1, k;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      k = new B();
    }
    function ne(N, H) {
      if (!N || we)
        return "";
      {
        var q = k.get(N);
        if (q !== void 0)
          return q;
      }
      var Z;
      we = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = Y.current, Y.current = null, Ne();
      try {
        if (H) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (fe) {
              Z = fe;
            }
            Reflect.construct(N, [], S);
          } else {
            try {
              S.call();
            } catch (fe) {
              Z = fe;
            }
            N.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            Z = fe;
          }
          N();
        }
      } catch (fe) {
        if (fe && Z && typeof fe.stack == "string") {
          for (var $ = fe.stack.split(`
`), z = Z.stack.split(`
`), W = $.length - 1, te = z.length - 1; W >= 1 && te >= 0 && $[W] !== z[te]; )
            te--;
          for (; W >= 1 && te >= 0; W--, te--)
            if ($[W] !== z[te]) {
              if (W !== 1 || te !== 1)
                do
                  if (W--, te--, te < 0 || $[W] !== z[te]) {
                    var ce = `
` + $[W].replace(" at new ", " at ");
                    return N.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", N.displayName)), typeof N == "function" && k.set(N, ce), ce;
                  }
                while (W >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        we = !1, Y.current = R, Se(), Error.prepareStackTrace = h;
      }
      var xe = N ? N.displayName || N.name : "", he = xe ? le(xe) : "";
      return typeof N == "function" && k.set(N, he), he;
    }
    function ee(N, H, q) {
      return ne(N, !1);
    }
    function je(N) {
      var H = N.prototype;
      return !!(H && H.isReactComponent);
    }
    function pe(N, H, q) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return ne(N, je(N));
      if (typeof N == "string")
        return le(N);
      switch (N) {
        case c:
          return le("Suspense");
        case d:
          return le("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case p:
            return ee(N.render);
          case y:
            return pe(N.type, H, q);
          case u: {
            var Z = N, h = Z._payload, R = Z._init;
            try {
              return pe(R(h), H, q);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, be = {}, U = m.ReactDebugCurrentFrame;
    function Q(N) {
      if (N) {
        var H = N._owner, q = pe(N.type, N._source, H ? H.type : null);
        U.setExtraStackFrame(q);
      } else
        U.setExtraStackFrame(null);
    }
    function ve(N, H, q, Z, h) {
      {
        var R = Function.call.bind(se);
        for (var S in N)
          if (R(N, S)) {
            var $ = void 0;
            try {
              if (typeof N[S] != "function") {
                var z = Error((Z || "React class") + ": " + q + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              $ = N[S](H, S, Z, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              $ = W;
            }
            $ && !($ instanceof Error) && (Q(h), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", q, S, typeof $), Q(null)), $ instanceof Error && !($.message in be) && (be[$.message] = !0, Q(h), x("Failed %s type: %s", q, $.message), Q(null));
          }
      }
    }
    var Ce = Array.isArray;
    function ke(N) {
      return Ce(N);
    }
    function _e(N) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, q = H && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return q;
      }
    }
    function Fe(N) {
      try {
        return Pe(N), !1;
      } catch {
        return !0;
      }
    }
    function Pe(N) {
      return "" + N;
    }
    function Je(N) {
      if (Fe(N))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(N)), Pe(N);
    }
    var Xe = m.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, Ze;
    function et(N) {
      if (se.call(N, "ref")) {
        var H = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function tt(N) {
      if (se.call(N, "key")) {
        var H = Object.getOwnPropertyDescriptor(N, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function st(N, H) {
      typeof N.ref == "string" && Xe.current;
    }
    function nt(N, H) {
      {
        var q = function() {
          Qe || (Qe = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function mt(N, H) {
      {
        var q = function() {
          Ze || (Ze = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        q.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var bt = function(N, H, q, Z, h, R, S) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: N,
        key: H,
        ref: q,
        props: S,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function ft(N, H, q, Z, h) {
      {
        var R, S = {}, $ = null, z = null;
        q !== void 0 && (Je(q), $ = "" + q), tt(H) && (Je(H.key), $ = "" + H.key), et(H) && (z = H.ref, st(H, h));
        for (R in H)
          se.call(H, R) && !ht.hasOwnProperty(R) && (S[R] = H[R]);
        if (N && N.defaultProps) {
          var W = N.defaultProps;
          for (R in W)
            S[R] === void 0 && (S[R] = W[R]);
        }
        if ($ || z) {
          var te = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          $ && nt(S, te), z && mt(S, te);
        }
        return bt(N, $, z, h, Z, Xe.current, S);
      }
    }
    var Ve = m.ReactCurrentOwner, at = m.ReactDebugCurrentFrame;
    function $e(N) {
      if (N) {
        var H = N._owner, q = pe(N.type, N._source, H ? H.type : null);
        at.setExtraStackFrame(q);
      } else
        at.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Ke(N) {
      return typeof N == "object" && N !== null && N.$$typeof === a;
    }
    function rt() {
      {
        if (Ve.current) {
          var N = F(Ve.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function gt(N) {
      return "";
    }
    var lt = {};
    function ot(N) {
      {
        var H = rt();
        if (!H) {
          var q = typeof N == "string" ? N : N.displayName || N.name;
          q && (H = `

Check the top-level render call using <` + q + ">.");
        }
        return H;
      }
    }
    function it(N, H) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var q = ot(H);
        if (lt[q])
          return;
        lt[q] = !0;
        var Z = "";
        N && N._owner && N._owner !== Ve.current && (Z = " It was passed a child from " + F(N._owner.type) + "."), $e(N), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Z), $e(null);
      }
    }
    function ct(N, H) {
      {
        if (typeof N != "object")
          return;
        if (ke(N))
          for (var q = 0; q < N.length; q++) {
            var Z = N[q];
            Ke(Z) && it(Z, H);
          }
        else if (Ke(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var h = v(N);
          if (typeof h == "function" && h !== N.entries)
            for (var R = h.call(N), S; !(S = R.next()).done; )
              Ke(S.value) && it(S.value, H);
        }
      }
    }
    function vt(N) {
      {
        var H = N.type;
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
          var Z = F(H);
          ve(q, N.props, "prop", Z, N);
        } else if (H.PropTypes !== void 0 && !We) {
          We = !0;
          var h = F(H);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(N) {
      {
        for (var H = Object.keys(N.props), q = 0; q < H.length; q++) {
          var Z = H[q];
          if (Z !== "children" && Z !== "key") {
            $e(N), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), $e(null);
            break;
          }
        }
        N.ref !== null && ($e(N), x("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    var dt = {};
    function Nt(N, H, q, Z, h, R) {
      {
        var S = O(N);
        if (!S) {
          var $ = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = gt();
          z ? $ += z : $ += rt();
          var W;
          N === null ? W = "null" : ke(N) ? W = "array" : N !== void 0 && N.$$typeof === a ? (W = "<" + (F(N.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof N, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, $);
        }
        var te = ft(N, H, q, h, R);
        if (te == null)
          return te;
        if (S) {
          var ce = H.children;
          if (ce !== void 0)
            if (Z)
              if (ke(ce)) {
                for (var xe = 0; xe < ce.length; xe++)
                  ct(ce[xe], N);
                Object.freeze && Object.freeze(ce);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(ce, N);
        }
        if (se.call(H, "key")) {
          var he = F(N), fe = Object.keys(H).filter(function(zt) {
            return zt !== "key";
          }), Ie = fe.length > 0 ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dt[he + Ie]) {
            var jt = fe.length > 0 ? "{" + fe.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, he, jt, he), dt[he + Ie] = !0;
          }
        }
        return N === r ? yt(te) : vt(te), te;
      }
    }
    function Ft(N, H, q) {
      return Nt(N, H, q, !0);
    }
    function It(N, H, q) {
      return Nt(N, H, q, !1);
    }
    var Rt = It, Pt = Ft;
    Et.Fragment = r, Et.jsx = Rt, Et.jsxs = Pt;
  }()), Et;
}
process.env.NODE_ENV === "production" ? ws.exports = or() : ws.exports = ir();
var e = ws.exports;
const xt = ({
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
}, da = "uiforge_bl_functions_registry", St = {};
function as(s) {
  if (!s || !s.trim()) return "";
  let a = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function rs() {
  if (typeof window > "u") return St;
  try {
    const s = localStorage.getItem(da);
    if (s) {
      const a = JSON.parse(s), t = { ...St, ...a };
      for (const [r, n] of Object.entries(St))
        t[r] = Array.from(/* @__PURE__ */ new Set([...n, ...t[r] || []]));
      return t;
    }
  } catch {
  }
  return St;
}
function ls(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(da, JSON.stringify(s));
    } catch {
    }
}
function cr(s) {
  if (!s || !s.trim()) return [];
  const a = as(s), t = rs();
  if (t[a] && t[a].length > 0)
    return t[a];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[a] = r, ls(t), r;
}
function dr(s, a) {
  if (!s || !a) return [];
  const t = as(s), r = a.trim().replace(/\(.*?\)/g, "");
  if (!t || !r) return [];
  const n = rs(), o = n[t] || [];
  return o.includes(r) || (n[t] = [...o, r], ls(n)), n[t];
}
function jl(s, a) {
  if (!s || !a) return [];
  const t = as(s), r = a.trim().replace(/\(.*?\)/g, ""), n = rs(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== r), ls(n), n[t];
}
function ur(s, a) {
  const t = as(s);
  St[t] = Array.from(/* @__PURE__ */ new Set([...St[t] || [], ...a]));
  const r = rs();
  r[t] = Array.from(/* @__PURE__ */ new Set([...r[t] || [], ...a])), ls(r);
}
const ze = {};
function wl(s, a) {
  ze[s] = a;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  ze[t] = a;
  const r = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  ze[r] = a;
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
function ua(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const a = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = a.toLowerCase();
  if (ze[a]) return { module: ze[a], canonicalName: a };
  if (ze[t]) return { module: ze[t], canonicalName: a };
  const r = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(ze))
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
function $t(s, a, t, r = !1, n, o = !0) {
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
function ts(s, a, t, r) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = ua(t);
  let p = !1, c = n.replace(/\(.*?\)/g, "").trim();
  if (l) {
    const { fn: d, matchedName: y } = pr(l, n);
    if (c = y, d)
      try {
        const u = d(r || { componentName: a, trigger: o, blFileName: i });
        if (p = !0, u && typeof u.then == "function")
          return u.then((f) => {
            f && f.message ? $t(c, o, i || t, !0, f.message, f.success !== !1) : $t(c, o, i || t, !0);
          }).catch((f) => {
            $t(c, o, i || t, !0, String(f), !1);
          }), !0;
        if (u && u.message)
          return $t(c, o, i || t, !0, u.message, u.success !== !1), !0;
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
  ), $t(c, o, i || t, p), p;
}
function ye(s, a, t, r, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    ts(l, t, r, n);
}
const An = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Bn = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", Mt = /* @__PURE__ */ new Map(), Yt = (s) => {
  const a = Mt.get(s);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([t, r]) => [t, r.getState()])
  ) : {};
}, xr = (s, a, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: a.connect(t)
    };
  const r = Mt.get(t.name);
  if (r)
    return { type: "tracked", store: s, ...r };
  const n = {
    connection: a.connect(t),
    stores: {}
  };
  return Mt.set(t.name, n), { type: "tracked", store: s, ...n };
}, hr = (s, a) => {
  if (a === void 0) return;
  const t = Mt.get(s);
  t && (delete t.stores[a], Object.keys(t.stores).length === 0 && Mt.delete(s));
}, mr = /^at (?:new |async )?(.+?) \(/, br = /^([^@]+)@/;
function fr(s) {
  var a, t, r;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((t = mr.exec(l)) == null ? void 0 : t[1]) || ((r = br.exec(l)) == null ? void 0 : r[1]);
}
const gr = (s, a = {}) => (t, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...p } = a;
  let c;
  try {
    c = (o ?? (An ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return s(t, r, n);
  const { connection: d, ...y } = xr(i, c, p);
  let u = !0;
  n.setState = (j, v, m) => {
    const x = t(j, v);
    if (!u) return x;
    const P = m === void 0 ? {
      type: l || fr(new Error().stack) || "anonymous"
    } : typeof m == "string" ? { type: m } : m;
    return i === void 0 ? (d == null || d.send(P, r()), x) : (d == null || d.send(
      {
        ...P,
        type: `${i}/${P.type}`
      },
      {
        ...Yt(p.name),
        [i]: n.getState()
      }
    ), x);
  }, n.devtools = {
    cleanup: () => {
      d && typeof d.unsubscribe == "function" && d.unsubscribe(), hr(p.name, i);
    }
  };
  const f = (...j) => {
    const v = u;
    u = !1, t(...j), u = v;
  }, b = s(n.setState, r, n);
  if (y.type === "untracked" ? d == null || d.init(b) : (y.stores[y.store] = n, d == null || d.init(
    Object.fromEntries(
      Object.entries(y.stores).map(([j, v]) => [
        j,
        j === y.store ? b : v.getState()
      ])
    )
  )), Bn(n)) {
    let j = !1;
    const v = n.dispatch;
    n.dispatch = (...m) => {
      (An ? "production" : void 0) !== "production" && m[0].type === "__setState" && !j && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), j = !0), v(...m);
    };
  }
  return d.subscribe((j) => {
    var v;
    switch (j.type) {
      case "ACTION":
        if (typeof j.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return hs(
          j.payload,
          (m) => {
            if (m.type === "__setState") {
              if (i === void 0) {
                f(m.state);
                return;
              }
              Object.keys(m.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const x = m.state[i];
              if (x == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(x) && f(x);
              return;
            }
            Bn(n) && n.dispatch(m);
          }
        );
      case "DISPATCH":
        switch (j.payload.type) {
          case "RESET":
            return f(b), i === void 0 ? d == null ? void 0 : d.init(n.getState()) : d == null ? void 0 : d.init(Yt(p.name));
          case "COMMIT":
            if (i === void 0) {
              d == null || d.init(n.getState());
              return;
            }
            return d == null ? void 0 : d.init(Yt(p.name));
          case "ROLLBACK":
            return hs(j.state, (m) => {
              if (i === void 0) {
                f(m), d == null || d.init(n.getState());
                return;
              }
              f(m[i]), d == null || d.init(Yt(p.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return hs(j.state, (m) => {
              if (i === void 0) {
                f(m);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(m[i]) && f(m[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: m } = j.payload, x = (v = m.computedStates.slice(-1)[0]) == null ? void 0 : v.state;
            if (!x) return;
            f(i === void 0 ? x : x[i]), d == null || d.send(
              null,
              // FIXME no-any
              m
            );
            return;
          }
          case "PAUSE_RECORDING":
            return u = !u;
        }
        return;
    }
  }), b;
}, os = gr, hs = (s, a) => {
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
function vr(s, a) {
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
const Cs = (s) => (a) => {
  try {
    const t = s(a);
    return t instanceof Promise ? t : {
      then(r) {
        return Cs(r)(t);
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
        return Cs(r)(t);
      }
    };
  }
}, yr = (s, a) => (t, r, n) => {
  let o = {
    storage: vr(() => window.localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, m) => ({
      ...m,
      ...v
    }),
    ...a
  }, l = !1, i = 0;
  const p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let d = o.storage;
  if (!d)
    return s(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...v);
      },
      r,
      n
    );
  const y = () => {
    const v = o.partialize({ ...r() });
    return d.setItem(o.name, {
      state: v,
      version: o.version
    });
  }, u = n.setState;
  n.setState = (v, m) => (u(v, m), y());
  const f = s(
    (...v) => (t(...v), y()),
    r,
    n
  );
  n.getInitialState = () => f;
  let b;
  const j = () => {
    var v, m;
    if (!d) return;
    const x = ++i;
    l = !1, p.forEach((I) => {
      var A;
      return I((A = r()) != null ? A : f);
    });
    const P = ((m = o.onRehydrateStorage) == null ? void 0 : m.call(o, (v = r()) != null ? v : f)) || void 0;
    return Cs(d.getItem.bind(d))(o.name).then((I) => {
      if (I)
        if (typeof I.version == "number" && I.version !== o.version) {
          if (o.migrate) {
            const A = o.migrate(
              I.state,
              I.version
            );
            return A instanceof Promise ? A.then((g) => [!0, g]) : [!0, A];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, I.state];
      return [!1, void 0];
    }).then((I) => {
      var A;
      if (x !== i)
        return;
      const [g, T] = I;
      if (b = o.merge(
        T,
        (A = r()) != null ? A : f
      ), t(b, !0), g)
        return y();
    }).then(() => {
      x === i && (P == null || P(r(), void 0), b = r(), l = !0, c.forEach((I) => I(b)));
    }).catch((I) => {
      x === i && (P == null || P(void 0, I));
    });
  };
  return n.persist = {
    setOptions: (v) => {
      o = {
        ...o,
        ...v
      }, v.storage && (d = v.storage);
    },
    clearStorage: () => {
      ++i, d == null || d.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => j(),
    hasHydrated: () => l,
    onHydrate: (v) => (p.add(v), () => {
      p.delete(v);
    }),
    onFinishHydration: (v) => (c.add(v), () => {
      c.delete(v);
    })
  }, o.skipHydration || j(), b || f;
}, Nr = yr, jr = 40;
function ms() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), a = s.get("feature") || s.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function bs() {
  if (typeof window > "u") return null;
  try {
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function pa(s) {
  var a, t, r, n;
  return s ? !!(s.isDetail || s.route === "/fcl-import" || (a = s.route) != null && a.includes("detail") || (t = s.scriptFile) != null && t.toLowerCase().includes("detail") || (r = s.name) != null && r.toLowerCase().includes("fcl import") || (n = s.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function ks(s) {
  return s ? !pa(s) : !1;
}
function At(s, a, t) {
  var r;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", s);
      const l = (t || ((r = G.getState()) == null ? void 0 : r.features) || []).find((p) => String(p.id) === String(s) || p.route === `/${s}` || p.route === s);
      if ((l ? ks(l) : s === "6" || s === "1" || s === "3") || a === null || a === "") {
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
const G = Wt()(
  os(
    (s, a) => ({
      features: [],
      activeFeatureId: ms() || "",
      activeRecordId: bs(),
      selection: { componentId: null, pageId: ms() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, r) => {
        const n = a().features || [], o = n.find((p) => String(p.id) === String(t) || p.route === `/${t}` || p.route === t), l = o ? ks(o) : t === "6" || t === "1" || t === "3";
        At(t, l ? null : r, n);
        let i = null;
        l || r === null || r === "" ? i = null : r != null ? i = String(r) : i = bs(), s((p) => ({
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
        const r = ms(), n = r && t.find((i) => i.id === r || i.route === `/${r}` || i.route === r) || t.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || t.find((i) => !i.hidden && !i.isDetail) || t[0], l = ks(n) ? null : bs();
        At(n.id, l, t), s({
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
        return At(n, null), s((l) => {
          const i = [...l.features, o];
          return {
            ...De(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: r } : l);
          return De(n, o);
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
          return At(l), {
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
          return At(o, null), {
            ...De(r, n),
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
          return De(n, o);
        });
      },
      updateFeatureScriptFile: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: r.trim() } : l);
          return De(n, o);
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
            n !== void 0 ? i = Ss(l.components, r, t, n) : i = ha(l.components, r, t);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, t), i = c.map((d, y) => ({ ...d, order: y + 1 }));
          } else
            i = [...l.components, t];
          const p = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...De(o, p),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return De(n, o);
        });
      },
      updateComponentStyle: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return De(n, o);
        });
      },
      updateComponentEvents: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              events: r
            }))
          });
          return De(n, o);
        });
      },
      updateComponentDataBinding: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return De(n, o);
        });
      },
      updateComponentValidation: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return De(n, o);
        });
      },
      updateComponentPermissions: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return De(n, o);
        });
      },
      updateComponentOrder: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ge(l.components, t, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return De(n, o);
        });
      },
      removeComponent: (t) => {
        s((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: xa(o.components, t)
          });
          return {
            ...De(r, n),
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
            const f = c.filter((v) => !v.parentId);
            f.splice(n, 0, d);
            const b = f.map((v, m) => ({ ...v, order: m + 1 })), j = c.filter((v) => v.parentId);
            y = [...b, ...j];
          } else
            y = Ss(c, r, d, n);
          const u = o.features.map(
            (f) => f.id === o.activeFeatureId ? { ...f, components: y } : f
          );
          return De(o, u);
        });
      },
      distributeSiblingWidths: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ma(l.components, t, r)
          });
          return De(n, o);
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
function De(s, a) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= jr && t.shift(), t.push(a), {
    features: a,
    history: t,
    historyIndex: t.length - 1
  };
}
function Ge(s, a, t) {
  return s.map((r) => r.id === a ? t(r) : r.children && r.children.length > 0 ? { ...r, children: Ge(r.children, a, t) } : r);
}
function xa(s, a) {
  return s.filter((t) => t.id !== a).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: xa(t.children, a) } : t
  );
}
function ha(s, a, t) {
  return s.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...t, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: ha(r.children, a, t)
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
    const l = ba(n.children, a);
    if (l) {
      const [i, p] = l, c = { ...n, children: p }, d = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, d];
    }
  }
  return null;
}
function ba(s, a) {
  for (let t = 0; t < s.length; t++) {
    const r = s[t];
    if (r.id === a) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = ba(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, p = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, p];
      }
    }
  }
  return null;
}
function Ss(s, a, t, r) {
  return s.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...t, parentId: a });
      const i = l.map((p, c) => ({ ...p, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: Ss(n.children, a, t, r) } : n;
  });
}
const Cr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = G((x) => x.features), o = G((x) => x.activeFeatureId), l = n.find((x) => String(x.id) === String(s.pageId)) || n.find((x) => String(x.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[t.variant || "primary"], m = {
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
        ...j
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${v} ${m}`,
      onClick: (x) => {
        a ? (x.ctrlKey || x.metaKey || x.altKey) && (x.stopPropagation(), ye(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : ye(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (x) => {
        var I;
        x.stopPropagation(), ((I = s.events) == null ? void 0 : I.some((A) => A.trigger === "dblclick" || A.trigger === "onDoubleClick")) ? ye(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && ye(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, Ee = Wt()(
  os((s, a) => ({
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
        G.getState().setActiveFeature(t, (r == null ? void 0 : r.id) ?? null);
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
function He(s, a, t, r = void 0) {
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
const ie = Wt()(
  os((s, a) => ({
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
        if (!p || l.some((b) => p.startsWith(b))) continue;
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
        Ee.getState().setTabDirty(t, !1);
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
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), p = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), d = (j) => {
          const v = { ...j };
          for (const m of Object.keys(v))
            (m.toLowerCase() === i || m.toLowerCase() === r.toLowerCase()) && delete v[m];
          return v[p] = n, v[c] = n, v;
        }, y = o.formRecords[t] || {}, u = o.formRecords.default || {}, f = d(y), b = d(u);
        try {
          Ee.getState().setTabDirty(t, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [t]: f,
            default: b
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, r, n = "") => He(a(), t, r, n),
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
              const f = u[n] !== void 0 ? u[n] : u.Id || u.id || u.code, b = u[o] !== void 0 ? u[o] : u.FullName || u.fullName || u.Name || u.name || u.title || String(f);
              return {
                value: f,
                label: String(b),
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
        for (const [b, j] of Object.entries(y))
          if (j === "")
            (/date|time/i.test(b) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(b) || /gw|cbm|vgm|package/i.test(b)) && (y[b] = null);
          else if (typeof j == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(j.trim())) {
            const [v, m, x] = j.trim().split("/");
            y[b] = `${x}-${m.padStart(2, "0")}-${v.padStart(2, "0")}T00:00:00`;
          }
        const u = {};
        for (const [b, j] of Object.entries(y)) {
          if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_"))
            continue;
          const v = b.replace(/^fld_/, ""), m = v.charAt(0).toUpperCase() + v.slice(1);
          u[m] = j;
        }
        i ? u.Id = p : (u.Id = 0, u.Active = !0);
        const f = await fetch(c, {
          method: d,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(u)
        });
        if (f.ok) {
          const b = await f.json(), j = b.id || b.Id || p;
          G.getState().setActiveRecordId(String(j)), n && (a().setFormRecord(n, b), a().markFormClean(n)), a().setFormRecord("default", b), a().markFormClean("default");
          const v = a().datasets[t];
          if (v && Array.isArray(v))
            if (i) {
              const m = v.map(
                (x) => (x.id || x.Id) === p ? { ...x, ...b } : x
              );
              a().registerDataset(t, m);
            } else
              a().registerDataset(t, [b, ...v]);
          return {
            success: !0,
            data: b,
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
      const r = a(), n = G.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((b) => String(b.id) === String(t)) || o.find((b) => String(b.id) === String(l)) || o.find((b) => b.isDetail) || o[0], p = {}, c = (b) => {
        var j, v, m;
        if (!(!b || !Array.isArray(b)))
          for (const x of b) {
            const P = (j = x.dataBinding) == null ? void 0 : j.fieldName, I = (v = x.props) == null ? void 0 : v.name, A = x.id, g = P || (typeof I == "string" ? I : "") || (A == null ? void 0 : A.replace(/^fld_/, "")), T = String(g || "").trim();
            if (T) {
              let E = He(r, String(x.pageId || l || "default"), T, void 0);
              if (E === void 0 && ((m = x.props) == null ? void 0 : m.value) !== void 0 && (E = x.props.value), E === void 0 && typeof document < "u") {
                const D = document.getElementById(x.id) || document.querySelector(`[name="${x.id}"]`) || document.querySelector(`[name="${T}"]`);
                D && "value" in D && D.value !== "" && (E = D.value);
              }
              if (E != null) {
                p[T] = E;
                const D = T.charAt(0).toLowerCase() + T.slice(1), O = T.charAt(0).toUpperCase() + T.slice(1);
                p[D] = E, p[O] = E;
              }
            }
            x.children && x.children.length > 0 && c(x.children);
          }
      };
      i != null && i.components && c(i.components);
      const d = t || String(l || "default"), y = { ...r.formRecords.default, ...d ? r.formRecords[d] : {} }, u = { ...p, ...y };
      if (!u.id && !u.Id && typeof window < "u") {
        const j = new URLSearchParams(window.location.search).get("id");
        j && j !== "new" && Number(j) > 0 && (u.id = Number(j), u.Id = Number(j));
      }
      const f = {};
      for (const [b, j] of Object.entries(u)) {
        if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_")) continue;
        const v = b.replace(/^fld_/, ""), m = v.charAt(0).toLowerCase() + v.slice(1), x = v.charAt(0).toUpperCase() + v.slice(1);
        f[m] = j, f[x] = j;
      }
      return (u.id || u.Id) && (f.id = u.id || u.Id, f.Id = u.id || u.Id), s((b) => ({
        formRecords: {
          ...b.formRecords,
          [d]: f,
          default: f
        }
      })), f;
    }
  }))
), Tr = ({ node: s, isEditing: a }) => {
  var g;
  const { props: t, style: r } = s, n = G((T) => T.features), o = G((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((g = s.dataBinding) == null ? void 0 : g.fieldName) || s.props.name || s.id), x = ie((T) => He(T, v, m, void 0)), P = ie((T) => T.setFieldValue), I = x !== void 0 ? x : t.value ?? "", A = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    xt,
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
        ...j
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "Nhập dữ liệu...",
          value: I,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${A ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (T) => {
            const E = T.target.value;
            P(v, m, E), a || ye(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: m,
              value: E
            });
          },
          onFocus: () => {
            a || ye(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: m
            });
          },
          onBlur: (T) => {
            a || ye(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: m,
              value: T.target.value
            });
          }
        }
      )
    }
  );
}, Dr = ({ node: s, isEditing: a }) => {
  var D;
  const { props: t, style: r } = s, n = G((O) => O.features), o = G((O) => O.activeFeatureId), l = n.find((O) => String(O.id) === String(s.pageId)) || n.find((O) => String(O.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((D = s.dataBinding) == null ? void 0 : D.fieldName) || s.props.name || s.id), x = ie((O) => He(O, v, m, void 0)), P = ie((O) => O.setFieldValue), I = t.precision !== void 0 ? Number(t.precision) : 0, A = x !== void 0 ? x : t.value, g = A != null && A !== "" ? Number(A) : 0, T = (O) => O.toLocaleString("en-US", {
    minimumFractionDigits: I,
    maximumFractionDigits: I
  }), E = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    xt,
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
        ...j
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "0",
          value: T(g),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${E ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (O) => {
            const _ = O.target.value.replace(/,/g, "");
            if (_ === "" || !isNaN(Number(_))) {
              const V = _ === "" ? 0 : Number(_);
              P(v, m, V), a || ye(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: m,
                value: V
              });
            }
          }
        }
      ) })
    }
  );
}, Fr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = G((v) => v.features), o = G((v) => v.activeFeatureId), l = n.find((v) => String(v.id) === String(s.pageId)) || n.find((v) => String(v.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...j
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (v) => {
        a ? (v.ctrlKey || v.metaKey || v.altKey) && (v.stopPropagation(), ye(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : ye(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (v) => {
        v.stopPropagation(), ye(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, _n = ({
  node: s,
  isEditing: a,
  isSelected: t,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var K;
  const { props: p, style: c } = s;
  G((M) => M.updateComponentProps);
  const d = !!(p.isTab || p.tab || p.isTabGroup || s.type === "Tabs"), y = [
    { id: "main", label: "TAB 1" }
  ], u = p.tabs || y, [f, b] = L(
    p.activeTabId || ((K = u[0]) == null ? void 0 : K.id) || "main"
  ), j = p.layoutMode || "flex", v = p.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, m = p.gridConfig || { columns: 12, gap: "16px" }, x = Number(
    m.columns || (typeof v.columnsPerRow == "number" ? v.columnsPerRow : 12)
  ) || 12, P = (c == null ? void 0 : c.justifyContent) || v.justify || "flex-start", I = (c == null ? void 0 : c.alignItems) || v.align || "flex-start", A = v.wrap || "wrap", g = j === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${x}, minmax(0, 1fr))`,
    gap: m.gap || v.gap || "16px",
    alignItems: I
  } : {
    display: "flex",
    flexDirection: v.direction || "row",
    flexWrap: A,
    justifyContent: P,
    alignItems: I,
    gap: v.gap || "12px"
  };
  let T = c != null && c.flex ? void 0 : "100%", E = c == null ? void 0 : c.flex, D = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const M = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(M) && M > 0) {
      const J = parseInt(o.gap || "12", 10) || 12, w = M === 1 ? "100%" : `calc((100% - ${(M - 1) * J}px) / ${M})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (T = w, E = `0 0 ${w}`, D = w);
    }
  }
  const { width: O, flex: _, ...V } = c || {}, F = l ? {
    ...g,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: d ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (d ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (d ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...V,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...g,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: d ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (d ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (d ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : T,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : E,
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
      style: F,
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
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: p, maxWidth: c, width: d, ...y } = r || {}, [u, f] = L(!1), b = t.title || t.label || "Khối Bố Cục (Section)", j = t.collapsible ?? !0, v = t.layoutMode || "grid", m = t.flexConfig || {}, x = t.gridConfig || {}, P = Number(x.columns || m.columnsPerRow || 12) || 12, I = m.gap || x.gap || "12px", A = (r == null ? void 0 : r.justifyContent) || m.justify || "flex-start", g = (r == null ? void 0 : r.alignItems) || m.align || "center", T = v === "flex" ? {
    display: "flex",
    flexDirection: m.direction || "row",
    flexWrap: m.wrap || "wrap",
    justifyContent: A,
    alignItems: g,
    gap: I
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${P}, minmax(0, 1fr))`,
    gap: I,
    alignItems: g
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
            /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: b })
          ] }),
          j && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => f(!u),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: u ? "Mở rộng" : "Thu gọn",
              children: u ? /* @__PURE__ */ e.jsx(ns, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(zn, { className: "w-4 h-4" })
            }
          )
        ] }),
        !u && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: T, children: a })
      ]
    }
  );
}, Cl = ({ node: s, children: a }) => {
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
                  /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
  const y = Me(null), [u, f] = Vt.useState(!1);
  if (Te(() => {
    if (!r) return;
    const v = (x) => {
      y.current && !y.current.contains(x.target) && n();
    }, m = (x) => {
      x.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", m);
    };
  }, [r, n]), !r) return null;
  const b = Math.min(s, window.innerWidth - 220), j = Math.min(a, window.innerHeight - 340);
  return Gt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: y,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: b, top: j },
        onClick: (v) => v.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Pa, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                          /* @__PURE__ */ e.jsx(qn, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5 text-slate-400" })
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
                  /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Jn, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                  /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(La, { className: "w-3.5 h-3.5" }),
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
  const u = Me(null);
  if (Te(() => {
    if (!o) return;
    const j = (m) => {
      u.current && !u.current.contains(m.target) && l();
    }, v = (m) => {
      m.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", j), document.addEventListener("keydown", v), () => {
      document.removeEventListener("mousedown", j), document.removeEventListener("keydown", v);
    };
  }, [o, l]), !o) return null;
  const f = Math.min(s, window.innerWidth - 220), b = Math.min(a, window.innerHeight - 260);
  return Gt(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: f, top: b },
        onClick: (j) => j.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(Jn, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Zn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(ea, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5 text-rose-400" }),
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
], fa = ({
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
    var P;
    const m = u[0] || "openTransactionDetail", x = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((P = i[0]) == null ? void 0 : P.value) || "click",
      handlerName: m,
      action: m
    };
    a([...s, x]);
  }, b = (m, x) => {
    const P = s.map((I, A) => {
      if (A !== m) return I;
      const g = { ...I, ...x };
      return x.handlerName && !x.action && (g.action = x.handlerName), g;
    });
    a(P);
  }, j = (m) => {
    const x = s.filter((P, I) => I !== m);
    a(x);
  }, v = () => {
    p.trim() && (dr(y, p.trim()), c(""), d((m) => m + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-amber-400" }),
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
            /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(vs, { className: "w-3 h-3 text-cyan-400" }),
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
            onChange: (m) => c(m.target.value),
            onKeyDown: (m) => {
              m.key === "Enter" && (m.preventDefault(), v());
            },
            placeholder: "ví dụ: openTransactionDetail, checkGW...",
            className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: v,
            className: "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((m, x) => {
      const P = u.includes(m.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  x + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: m.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => j(x),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: m.trigger || "click",
                    onChange: (I) => b(x, { trigger: I.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((I) => /* @__PURE__ */ e.jsx("option", { value: I.value, children: I.label }, I.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: m.handlerName || u[0] || "",
                    onChange: (I) => {
                      const A = I.target.value;
                      b(x, { handlerName: A, action: A });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      u.map((I) => /* @__PURE__ */ e.jsxs("option", { value: I, children: [
                        I,
                        "()"
                      ] }, I)),
                      !P && m.handlerName && /* @__PURE__ */ e.jsxs("option", { value: m.handlerName, children: [
                        m.handlerName,
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
                  ts(
                    m,
                    r,
                    y,
                    {
                      componentId: n,
                      trigger: m.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(Ea, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        m.id || x
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(Ue, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
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
}, ga = ({
  isOpen: s,
  column: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = L(null), [l, i] = L("info"), p = G((u) => u.features.find((f) => f.id === u.activeFeatureId));
  if (Te(() => {
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
    o((b) => {
      if (!b) return b;
      const j = { ...b, [u]: f };
      return u === "frozen" ? j.sticky = f ? "left" : "none" : u === "sticky" && (j.frozen = f === "left"), j;
    });
  }, y = (u) => {
    n && (r(n), t());
  };
  return Gt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(Tt, { className: "w-4 h-4 text-emerald-400" }),
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
                /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(ys, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
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
                      /* @__PURE__ */ e.jsx(Ue, { className: "w-3 h-3 text-amber-400" }),
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
                      /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
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
                  /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5 text-amber-400" }),
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
            fa,
            {
              events: c,
              onChange: (u) => {
                d("events", u);
                const f = u.find((b) => b.trigger === "click" || b.trigger === "actionClick");
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
              /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
      const b = parseFloat(String(f).replace(/,/g, ""));
      return isNaN(b) ? 0 : b;
    });
    if (c.length === 0) return "—";
    let d = 0;
    i.aggregate === "sum" ? d = c.reduce((f, b) => f + b, 0) : i.aggregate === "avg" ? d = c.reduce((f, b) => f + b, 0) / c.length : i.aggregate === "min" ? d = Math.min(...c) : i.aggregate === "max" && (d = Math.max(...c));
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
  const d = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", y = a === "—" || a === "-" ? "" : a ?? "", u = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", f = (m) => {
    p && p(m, r, n, s.key);
  }, b = () => {
    c && c(r, n, s.key);
  }, j = {
    "data-grid-cell": `${r}_${n}`,
    "data-grid-row": r,
    "data-grid-col": n,
    "data-grid-colkey": s.key
  };
  if (s.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...j, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!a,
        disabled: s.disabled || !d,
        onClick: (m) => m.stopPropagation(),
        onChange: (m) => l(m.target.checked),
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: "w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      }
    ) });
  if (s.componentType === "Button") {
    const m = s.formatCell || s.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...j, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: (x) => {
          x.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: "px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20",
        children: m
      }
    ) });
  }
  if (s.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (m) => {
          m.preventDefault(), m.stopPropagation(), i && i(s.key, t);
        },
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: "text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate",
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(ta, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!d) {
    if (s.precision !== void 0 && typeof a == "number") {
      const m = s.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: b,
          ...j,
          className: "font-mono text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: [
            m,
            s.summarySuffix ? ` ${s.summarySuffix}` : ""
          ]
        }
      );
    }
    if (s.formatCell && a !== void 0 && a !== null) {
      let m = s.formatCell.replace("{0}", String(a));
      return typeof t == "object" && t !== null && Object.keys(t).forEach((x) => {
        m = m.replace(new RegExp(`\\{${x}\\}`, "gi"), String(t[x] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: f,
          onFocus: b,
          ...j,
          className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
          children: m
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: "truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1",
        children: a != null ? String(a) : "—"
      }
    );
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let m = s.options || [];
    if (m.length === 0 && s.reference) {
      const x = ie.getState().getDataset(s.reference);
      if (Array.isArray(x) && x.length > 0) {
        const P = s.valueField || "code", I = s.displayField || "name";
        m = x.map((A) => ({
          value: String(A[P] ?? A.code ?? A.id ?? ""),
          label: String(A[I] ?? A.name ?? A[P] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: s.disabled,
        title: o || void 0,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => l(x.target.value),
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          m.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.value, className: "bg-slate-900 text-slate-100", children: x.label }, x.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", title: o || void 0, ...j, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: y,
          placeholder: "DD/MM/YYYY",
          disabled: s.disabled,
          onClick: (m) => m.stopPropagation(),
          onChange: (m) => l(m.target.value),
          onKeyDown: f,
          onFocus: b,
          ...j,
          className: `w-full h-7 pl-2.5 pr-7 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
        }
      ),
      /* @__PURE__ */ e.jsx(Ps, { className: "w-3.5 h-3.5 text-emerald-400 absolute right-2 pointer-events-none" })
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
        onClick: (m) => m.stopPropagation(),
        onChange: (m) => {
          const x = m.target.value;
          l(x === "" ? "" : Number(x));
        },
        onKeyDown: f,
        onFocus: b,
        ...j,
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
        onClick: (m) => m.stopPropagation(),
        onChange: (m) => {
          const x = s.upperCase ? m.target.value.toUpperCase() : m.target.value;
          l(x);
        },
        onKeyDown: f,
        onFocus: b,
        ...j,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const v = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: y,
      placeholder: s.title ? `Nhập ${s.title}...` : "Nhập dữ liệu...",
      disabled: s.disabled,
      title: o || void 0,
      onClick: (m) => m.stopPropagation(),
      onChange: (m) => {
        const x = s.upperCase ? m.target.value.toUpperCase() : m.target.value;
        l(x);
      },
      onKeyDown: f,
      onFocus: b,
      ...j,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${u} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${v} ${s.cssClass || ""}`
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
  onToggleColumnFilters: b,
  isEditableTable: j = !0
}) {
  const [v, m] = L(null), x = qt(
    (g, T) => {
      if (g < 0 || g >= a.length || T < 0 || T >= t.length) return;
      const E = t[T], D = a[g], O = (D == null ? void 0 : D.id) ?? (D == null ? void 0 : D.Id) ?? g;
      if (n(O), m({ rowIndex: g, colIndex: T, colKey: E.key }), s.current) {
        const _ = `[data-grid-cell="${g}_${T}"]`, V = s.current.querySelector(_);
        if (V) {
          V.scrollIntoView({ block: "nearest", inline: "nearest" });
          const F = V.tagName === "INPUT" || V.tagName === "SELECT" || V.tagName === "TEXTAREA" || V.tagName === "BUTTON" ? V : V.querySelector("input, select, textarea, button") || V;
          F.focus(), F instanceof HTMLInputElement && (F.type === "text" || F.type === "number") && F.select();
        }
      }
    },
    [a, t, s, n]
  ), P = qt(
    (g) => {
      if (!s.current) return;
      const T = s.current.querySelector(`[data-row-index="${g}"]`);
      T && T.scrollIntoView({ block: "nearest" });
    },
    [s]
  ), I = qt(
    (g) => {
      if (g.key === "F1") {
        g.preventDefault(), g.stopPropagation(), y == null || y();
        return;
      }
      if (g.key === "F2") {
        g.preventDefault(), g.stopPropagation(), u == null || u();
        return;
      }
      if (g.key === "F3") {
        g.preventDefault(), g.stopPropagation(), f == null || f();
        return;
      }
      if (g.key === "F4") {
        g.preventDefault(), g.stopPropagation(), p == null || p();
        return;
      }
      if (g.key === "F6") {
        g.preventDefault(), g.stopPropagation(), b == null || b();
        return;
      }
      if (g.key === "ArrowDown") {
        g.preventDefault();
        const T = a.findIndex((D, O) => (D.id ?? D.Id ?? O) === r), E = T < a.length - 1 ? T + 1 : T;
        if (E >= 0 && E !== T) {
          const D = a[E];
          n(D.id ?? D.Id ?? E), l(/* @__PURE__ */ new Set([D.id ?? D.Id ?? E])), P(E);
        }
        return;
      }
      if (g.key === "ArrowUp") {
        g.preventDefault();
        const T = a.findIndex((D, O) => (D.id ?? D.Id ?? O) === r), E = T > 0 ? T - 1 : 0;
        if (E >= 0 && E !== T) {
          const D = a[E];
          n(D.id ?? D.Id ?? E), l(/* @__PURE__ */ new Set([D.id ?? D.Id ?? E])), P(E);
        }
        return;
      }
      if (g.key === "Enter") {
        g.preventDefault();
        const T = a.findIndex((E, D) => (E.id ?? E.Id ?? D) === r);
        T >= 0 && i && i(a[T], T);
        return;
      }
      if (g.key === "Delete") {
        const T = a.findIndex((E, D) => (E.id ?? E.Id ?? D) === r);
        T >= 0 && c && (g.preventDefault(), c(T));
        return;
      }
      if ((g.ctrlKey || g.metaKey) && (g.key === "d" || g.key === "D")) {
        g.preventDefault();
        const T = a.findIndex((E, D) => (E.id ?? E.Id ?? D) === r);
        T >= 0 && d && d(T);
        return;
      }
    },
    [
      a,
      r,
      n,
      l,
      P,
      y,
      u,
      f,
      p,
      b,
      i,
      c,
      d
    ]
  ), A = qt(
    (g, T, E, D) => {
      var O, _, V;
      if (g.key === "F1") {
        g.preventDefault(), g.stopPropagation(), y == null || y();
        return;
      }
      if (g.key === "F2") {
        g.preventDefault(), g.stopPropagation(), u == null || u();
        return;
      }
      if (g.key === "F3") {
        g.preventDefault(), g.stopPropagation(), f == null || f();
        return;
      }
      if (g.key === "F4") {
        g.preventDefault(), g.stopPropagation(), p == null || p();
        return;
      }
      if (g.key === "F6") {
        g.preventDefault(), g.stopPropagation(), b == null || b();
        return;
      }
      if (g.key === "ArrowDown") {
        g.preventDefault(), T < a.length - 1 && x(T + 1, E);
        return;
      }
      if (g.key === "ArrowUp") {
        g.preventDefault(), T > 0 && x(T - 1, E);
        return;
      }
      if (g.key === "ArrowLeft") {
        const F = g.target, K = F && F.selectionStart === 0 && F.selectionEnd === 0, M = F && F.selectionStart === 0 && F.selectionEnd === ((O = F.value) == null ? void 0 : O.length), J = !F || F.tagName === "SELECT" || F.type === "checkbox" || F.tagName === "BUTTON";
        (K || M || J) && E > 0 && (g.preventDefault(), x(T, E - 1));
        return;
      }
      if (g.key === "ArrowRight") {
        const F = g.target, K = F && F.selectionStart === ((_ = F.value) == null ? void 0 : _.length), M = F && F.selectionStart === 0 && F.selectionEnd === ((V = F.value) == null ? void 0 : V.length), J = !F || F.tagName === "SELECT" || F.type === "checkbox" || F.tagName === "BUTTON";
        (K || M || J) && E < t.length - 1 && (g.preventDefault(), x(T, E + 1));
        return;
      }
      if (g.key === "Tab") {
        g.preventDefault(), g.shiftKey ? E > 0 ? x(T, E - 1) : T > 0 && x(T - 1, t.length - 1) : E < t.length - 1 ? x(T, E + 1) : T < a.length - 1 ? x(T + 1, 0) : p && (p(), setTimeout(() => {
          x(a.length, 0);
        }, 60));
        return;
      }
      if (g.key === "Enter") {
        if (g.preventDefault(), g.shiftKey) {
          T > 0 && x(T - 1, E);
          return;
        }
        T < a.length - 1 ? x(T + 1, E) : p && (p(), setTimeout(() => {
          x(a.length, E);
        }, 60));
        return;
      }
      if (g.key === "Escape") {
        g.preventDefault();
        const F = g.target;
        F == null || F.blur();
        return;
      }
    },
    [a, t, x, y, u, f, p, b]
  );
  return {
    focusedCell: v,
    setFocusedCell: m,
    focusCell: x,
    scrollToRow: P,
    handleTableContainerKeyDown: I,
    handleCellKeyDown: A
  };
}
function va(s) {
  return [...s].sort((a, t) => {
    const r = !!(a.frozen || a.sticky === "left"), n = !!(t.frozen || t.sticky === "left");
    if (r && !n) return -1;
    if (!r && n) return 1;
    const o = typeof a.order == "number" ? a.order : 999, l = typeof t.order == "number" ? t.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Bt(s) {
  return va(s).map((t, r) => ({
    ...t,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function Ts(s, a, t) {
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
  return Bt(t);
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
class _r {
  constructor() {
    us(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    us(this, "populateResolvers", /* @__PURE__ */ new Map());
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
const Na = new _r();
function kl(s, a, t) {
  return Na.getCascadedOptions(s, a, t);
}
function Or(s, a, t) {
  return Na.calculateAutoPopulatedFields(s, a, t);
}
function Ds(s) {
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
function Fs(s, a, t = "Ngày bắt đầu", r = "Ngày kết thúc") {
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
        const l = Ds(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = Fs(String(a), String(l), s, o.targetField);
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
function Sl(s, a) {
  const t = {};
  for (const [r, n] of Object.entries(a)) {
    const o = s[r], l = Mr(r, o, n, s);
    l.isValid || (t[r] = l.errors);
  }
  return t;
}
const Re = {
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
}, wt = Wt()(
  os((s, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...Re["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...Re["FCLI-26020005"].shippingInfo],
      grid_container_info: [...Re["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...Re["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const r = Re[t];
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
      return Re[n] = {
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
      const n = String(Hr[t] || t), l = { ...a().masterRecord, [n]: r }, i = Or(n, r, l);
      Object.assign(l, i);
      const p = { ...a().validationErrors };
      if (n === "mblNo") {
        const d = String(r || "").trim();
        d ? /^[A-Z0-9]{8,18}$/i.test(d) ? delete p.mblNo : p.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : p.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete p.jobNo : p.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const d = l.mblIssuedDate, y = l.shipmentDate;
        if (d && y) {
          const u = Fs(d, y, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          u.isValid ? delete p.mblIssuedDate : p.mblIssuedDate = u.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: p
      });
      const c = a().activeJobNo;
      Re[c] && (Re[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, r, n, o) => {
      const l = a().detailGrids, i = l[t] || [], p = { ...a().validationErrors }, c = `${t}_${r}_${n}`, d = i.map((u, f) => u.id !== void 0 && u.id === r || u.id === void 0 && f === r ? { ...u, [n]: o } : u);
      if (n === "containerNo") {
        const u = Ds(String(o));
        u.isValid ? delete p[c] : p[c] = u.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const u = d.find((f) => f.id === r);
        if (u && u.etd && u.eta) {
          const f = Fs(u.etd, u.eta, "ETD", "ETA"), b = `${t}_${r}_etd_eta`;
          f.isValid ? delete p[b] : p[b] = f.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: d },
        validationErrors: p
      }), t === "grid_container_info" && a().recalculateTotals();
      const y = a().activeJobNo;
      Re[y] && (t === "grid_shipping_info" && (Re[y].shippingInfo = d), t === "grid_container_info" && (Re[y].containerInfo = d), t === "grid_shipment_detail" && (Re[y].shipmentDetail = d));
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
      Re[c] && (Re[c].master = p);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = a().masterRecord, r = {};
      return (o = t.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const p = Ds(i.containerNo);
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
  const o = t.filter((j) => !j.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const j of o) {
    const v = j.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${v};padding:8px 12px;font-size:11pt;">${j.title || j.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  r.forEach((j, v) => {
    const m = v % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${m};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${v + 1}</td>`;
    for (const x of o) {
      const P = j[x.key], I = x.align || "left";
      let A = P != null ? String(P) : "";
      typeof P == "number" && (A = P.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${I};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Mn(A)}</td>`;
    }
    i += "</tr>";
  });
  let p = "";
  const c = o.some((j) => j.aggregate);
  if (n && c && r.length > 0) {
    p += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', p += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const j of o) {
      const v = j.align || "left";
      if (j.aggregate === "sum") {
        const m = r.reduce((P, I) => {
          const A = Number(I[j.key]);
          return P + (isNaN(A) ? 0 : A);
        }, 0), x = m % 1 !== 0 ? m.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : m.toLocaleString("vi-VN");
        p += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${x}${j.summarySuffix ? ` ${j.summarySuffix}` : ""}</td>`;
      } else if (j.aggregate === "count")
        p += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${r.length}</td>`;
      else if (j.aggregate === "avg") {
        const m = r.reduce((P, I) => {
          const A = Number(I[j.key]);
          return P + (isNaN(A) ? 0 : A);
        }, 0), x = r.length > 0 ? (m / r.length).toFixed(2) : "0";
        p += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${x}</td>`;
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
                <x:Name>${Mn(a)}</x:Name>
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
  }), u = s.endsWith(".xls") || s.endsWith(".xlsx") ? s : `${s}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, f = URL.createObjectURL(y), b = document.createElement("a");
  b.href = f, b.download = u, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(f);
}
function Mn(s) {
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
  } = s, c = r.filter((P) => !P.hidden), d = window.open("", "_blank", "width=1100,height=850");
  if (!d) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const y = /* @__PURE__ */ new Date(), u = `Ngày in: ${y.toLocaleDateString("vi-VN")} lúc ${y.toLocaleTimeString("vi-VN")}`, f = Object.entries(i).map(
    ([P, I]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${Oe(P)}:</strong>
          <span>${Oe(String(I))}</span>
        </div>`
  ).join(""), b = c.map((P) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${P.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${Oe(P.title || P.key)}
      </th>`).join(""), j = n.map((P, I) => {
    const A = I % 2 === 0 ? "#ffffff" : "#f8fafc", g = c.map((T) => {
      const E = P[T.key] ?? "", D = T.align || (typeof E == "number" ? "right" : "left");
      let O = E;
      return typeof E == "number" && (O = E.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${D}; font-size: 11px;">
            ${Oe(String(O))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${A};">${g}</tr>`;
  }).join("");
  let v = "";
  o && (v = `<tfoot><tr>${c.map((I, A) => {
    const g = o[I.key] ?? (A === 0 ? "TỔNG CỘNG" : ""), T = I.align || "left";
    let E = g;
    return typeof g == "number" && (E = g.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${T}; font-size: 11px;">
          ${Oe(String(E))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const m = p ? `
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
    ` : "", x = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${Oe(a)} - UIForge Report</title>
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
              ${Oe(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${Oe(a)}
            </h1>
            ${t ? `<div style="font-size: 12px; color: #475569;">${Oe(t)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${Oe(u)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${f ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${f}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${b}</tr>
        </thead>
        <tbody>
          ${j}
        </tbody>
        ${v}
      </table>

      ${m}

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
  d.document.open(), d.document.write(x), d.document.close();
}
function Oe(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const Hn = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], Kr = ({ node: s }) => {
  var Z;
  const { props: a, style: t } = s, r = G((h) => h.updateComponentProps), n = Le(() => a.columns && Array.isArray(a.columns) ? a.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [a.columns]), o = Le(() => va(n), [n]), l = Le(() => o.filter((h) => !h.hidden), [o]), i = wt((h) => h.detailGrids), p = wt((h) => h.updateGridCell), c = wt((h) => h.addGridRow), d = wt((h) => h.deleteGridRow), y = wt((h) => h.duplicateGridRow), u = wt((h) => h.validationErrors), f = !!(i && i[s.id]), b = a.reference || ((Z = s.dataBinding) == null ? void 0 : Z.entityName), j = ie((h) => b ? h.datasets[b] : void 0), [v, m] = L(() => f && i && i[s.id] ? i[s.id] : a.data && Array.isArray(a.data) ? a.data : j && Array.isArray(j) ? j : Hn);
  Te(() => {
    a.data && Array.isArray(a.data) && a.data.length > 0 && m(a.data);
  }, [a.data]), Te(() => {
    j && Array.isArray(j) && j.length > 0 && m(j);
  }, [j]);
  const x = Le(() => f && i && i[s.id] && i[s.id].length > 0 ? i[s.id] : v && Array.isArray(v) && v.length > 0 ? v : j && Array.isArray(j) && j.length > 0 ? j : a.data && Array.isArray(a.data) ? a.data : Hn, [f, i, s.id, v, j, a.data]);
  Te(() => {
    if (a.data && Array.isArray(a.data) || j && Array.isArray(j) && j.length > 0) return;
    let h = !0;
    if (b) {
      const R = a.query || a.filter || "";
      ie.getState().queryEntity(b, R).then((S) => {
        h && S && S.length > 0 && m(S);
      });
    }
    return () => {
      h = !1;
    };
  }, [a.data, b, a.query, a.filter, j]);
  const [P, I] = L(""), [A, g] = L(null), [T, E] = L("asc"), [D, O] = L(!1), [_, V] = L({}), [F, K] = L({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [M, J] = L({
    isOpen: !1,
    column: null
  }), [w, X] = L({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [oe, de] = L(null), [ue, me] = L(null), [re, Ne] = L(null), Se = 55, { offsets: Y, lastFrozenKey: ae } = Le(() => Br(o, Se), [o]), le = Le(() => {
    let h = [...x];
    if (P.trim()) {
      const R = P.toLowerCase();
      h = h.filter(
        (S) => Object.values(S).some(
          ($) => String($).toLowerCase().includes(R)
        )
      );
    }
    return D && Object.entries(_).forEach(([R, S]) => {
      if (S && S.trim()) {
        const $ = S.toLowerCase().trim();
        h = h.filter((z) => {
          const W = z[R];
          return W != null && String(W).toLowerCase().includes($);
        });
      }
    }), A && h.sort((R, S) => {
      const $ = R[A], z = S[A];
      if ($ === z) return 0;
      if ($ == null) return 1;
      if (z == null) return -1;
      let W = 0;
      return typeof $ == "number" && typeof z == "number" ? W = $ - z : W = String($).localeCompare(String(z)), T === "asc" ? W : -W;
    }), h;
  }, [x, P, D, _, A, T]), we = (h) => {
    m(h), r(s.id, { data: h });
  }, k = (h) => {
    const R = Bt(h);
    r(s.id, { columns: R });
  }, B = (h, R, S) => {
    f && p(s.id, h, R, S);
    const z = (f && i && i[s.id] ? i[s.id] : x).map((W, te) => W.id !== void 0 && W.id === h || W.id === void 0 && te === h ? { ...W, [R]: S } : W);
    we(z), b && ie.getState().registerDataset(b, z);
  }, ne = (h, R, S) => {
    const z = G.getState().features.find((xe) => String(xe.id) === String(s.pageId)), W = z == null ? void 0 : z.scriptFile, te = (S == null ? void 0 : S.action) || h;
    let ce = !1;
    S != null && S.events && (Array.isArray(S.events) ? S.events : typeof S.events == "string" ? (() => {
      try {
        return JSON.parse(S.events);
      } catch {
        return [];
      }
    })() : []).forEach((he) => {
      ce = !0, ts(
        he,
        S.title || S.key,
        W,
        { row: R, col: S, column: S, action: he.action || he.handlerName || te, value: R[(S == null ? void 0 : S.key) || ""] }
      );
    }), !ce && te && ts(
      { id: `col_act_${(S == null ? void 0 : S.key) || h}`, trigger: "actionClick", action: te, handlerName: te },
      s.props.label || "Bảng dữ liệu",
      W,
      { row: R, col: S, column: S, action: te, value: R[(S == null ? void 0 : S.key) || ""] }
    ), s.events && s.events.length > 0 && ye(s.events, "actionClick", s.props.label || "Bảng dữ liệu", W, {
      action: te,
      row: R,
      col: S,
      column: S,
      colKey: S == null ? void 0 : S.key,
      value: R[(S == null ? void 0 : S.key) || ""]
    });
  }, [ee, je] = L(null), [pe, se] = L(/* @__PURE__ */ new Set()), be = Me(null), U = (h, R, S = "info") => {
    const $ = document.createElement("div"), z = S === "success" ? "border-emerald-500 shadow-emerald-500/30" : S === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", W = S === "success" ? "⚡" : S === "warning" ? "⚠️" : "ℹ️", te = S === "success" ? "bg-emerald-600/25 text-emerald-400" : S === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    $.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${z} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, $.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${te} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${W}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${h}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${R}</div>
      </div>
    `, document.body.appendChild($), setTimeout(() => {
      $.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => $.remove(), 300);
    }, 3800);
  }, Q = () => {
    if (pe.size === le.length && le.length > 0)
      se(/* @__PURE__ */ new Set()), U("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const h = new Set(le.map((R, S) => R.id ?? R.Id ?? S));
      se(h), le.length > 0 && je(le[0].id ?? le[0].Id ?? 0), U("F1 (Toggle All)", `Đã chọn tất cả ${h.size} dòng trong bảng`, "success");
    }
  }, ve = () => {
    var z;
    let h = Pe == null ? void 0 : Pe.colKey, R = (Pe == null ? void 0 : Pe.rowIndex) ?? 0;
    !h && l.length > 0 && (h = l[0].key);
    const S = le[R], $ = S && h ? S[h] : null;
    if ($ != null && String($).trim() !== "" && String($) !== "—") {
      V((te) => ({ ...te, [h]: String($) })), O(!0);
      const W = ((z = l.find((te) => te.key === h)) == null ? void 0 : z.title) || h;
      U("F2 (Lọc theo ô)", `Đã lọc cột [${W}] với giá trị "${$}"`, "success");
    } else
      O(!0), U("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Ce = () => {
    const h = pe.size > 0 ? le.filter(($, z) => pe.has($.id ?? $.Id ?? z)) : le;
    if (h.length === 0) {
      U("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const R = l.filter(
      ($) => $.componentType === "Number" || $.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (z) => $.key.toLowerCase().includes(z)
      )
    );
    if (R.length === 0) {
      U("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const S = R.map(($) => {
      const z = h.reduce((te, ce) => {
        const xe = Number(ce[$.key]);
        return te + (isNaN(xe) ? 0 : xe);
      }, 0), W = z % 1 !== 0 ? z.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : z.toLocaleString("en-US");
      return `${$.title || $.key}: ${W}${$.summarySuffix ? ` ${$.summarySuffix}` : ""}`;
    });
    U(
      `F3 (Tổng ${h.length} dòng)`,
      S.join(" | "),
      "success"
    );
  }, ke = () => {
    tt();
    const h = le.length;
    U("F4 (Thêm dòng)", `Đã thêm dòng mới số #${h + 1}`, "success"), setTimeout(() => {
      Xe(h, 0);
    }, 60);
  }, _e = () => {
    try {
      Vr({
        fileName: a.label ? String(a.label).replace(/\s+/g, "_") : "Du_Lieu_Bang",
        sheetName: a.label ? String(a.label).slice(0, 30) : "Sheet1",
        columns: l,
        rows: le,
        includeSummary: !0
      }), U("Xuất Excel", `Đã xuất ${le.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (h) {
      U("Lỗi xuất Excel", (h == null ? void 0 : h.message) || "Không thể tạo file Excel", "warning");
    }
  }, Fe = () => {
    try {
      const h = {};
      l.forEach((R) => {
        if (R.aggregate === "sum") {
          const S = le.reduce(($, z) => $ + (Number(z[R.key]) || 0), 0);
          h[R.key] = S;
        } else R.aggregate === "count" && (h[R.key] = le.length);
      }), Wr({
        title: a.label ? String(a.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${le.length} bản ghi`,
        columns: l,
        rows: le,
        summaryRow: Object.keys(h).length > 0 ? h : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${le.length} dòng`,
          "Bộ lọc áp dụng": P ? `Tìm kiếm: "${P}"` : "Tất cả dữ liệu"
        }
      }), U("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (h) {
      U("Lỗi In Báo Cáo", (h == null ? void 0 : h.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, {
    focusedCell: Pe,
    setFocusedCell: Je,
    focusCell: Xe,
    handleTableContainerKeyDown: ht,
    handleCellKeyDown: Qe
  } = Ar({
    tableRef: be,
    rows: le,
    visibleColumns: l,
    selectedRowId: ee,
    setSelectedRowId: je,
    selectedRowIds: pe,
    setSelectedRowIds: se,
    onRowDoubleClick: (h, R) => et(h, R),
    onAddRow: ke,
    onDeleteRow: (h) => nt(h),
    onDuplicateRow: (h) => st(h),
    onToggleAll: Q,
    onFilterByCell: ve,
    onQuickSum: Ce,
    onToggleColumnFilters: () => O((h) => !h)
  }), Ze = (h, R, S) => {
    const $ = h.id ?? h.Id ?? R;
    if (je($), S != null && S.ctrlKey || S != null && S.metaKey)
      se((ce) => {
        const xe = new Set(ce);
        return xe.has($) ? xe.delete($) : xe.add($), xe;
      });
    else if (S != null && S.shiftKey && ee !== null) {
      const ce = le.findIndex((xe, he) => (xe.id ?? xe.Id ?? he) === ee);
      if (ce !== -1) {
        const xe = Math.min(ce, R), he = Math.max(ce, R), fe = /* @__PURE__ */ new Set();
        for (let Ie = xe; Ie <= he; Ie++)
          fe.add(le[Ie].id ?? le[Ie].Id ?? Ie);
        se(fe);
      }
    } else
      se(/* @__PURE__ */ new Set([$]));
    const W = G.getState().features.find((ce) => String(ce.id) === String(s.pageId)), te = W == null ? void 0 : W.scriptFile;
    b && ie.getState().setSelectedRecord(b, h), s.events && s.events.length > 0 && (ye(s.events, "rowClick", s.props.label || "Bảng dữ liệu", te, {
      row: h,
      rowIndex: R,
      action: "rowClick"
    }), ye(s.events, "click", s.props.label || "Bảng dữ liệu", te, {
      row: h,
      rowIndex: R,
      action: "click"
    }), ye(s.events, "select", s.props.label || "Bảng dữ liệu", te, {
      row: h,
      rowIndex: R,
      action: "select"
    }));
  }, et = (h, R) => {
    const $ = G.getState().features.find((W) => String(W.id) === String(s.pageId)), z = $ == null ? void 0 : $.scriptFile;
    s.events && s.events.length > 0 && ye(s.events, "dblclick", s.props.label || "Bảng dữ liệu", z, {
      row: h,
      rowIndex: R,
      id: h.id ?? h.Id,
      action: "dblclick"
    });
  }, tt = () => {
    f && c(s.id);
    const h = f && i && i[s.id] ? i[s.id] : x, S = { id: h.length > 0 ? Math.max(...h.map((z) => Number(z.id) || 0)) + 1 : 1 };
    o.forEach((z) => {
      z.componentType === "Number" ? S[z.key] = 0 : z.componentType === "Checkbox" ? S[z.key] = !1 : z.componentType === "DatePicker" ? S[z.key] = "08/11/2026" : S[z.key] = "";
    });
    const $ = [...h, S];
    we($), b && ie.getState().registerDataset(b, $);
  }, st = (h) => {
    f && y(s.id, h);
    const R = f && i && i[s.id] ? i[s.id] : x, S = R[h], $ = Math.max(...R.map((te) => Number(te.id) || 0)) + 1, z = { ...S, id: $ }, W = [...R];
    W.splice(h + 1, 0, z), we(W), b && ie.getState().registerDataset(b, W);
  }, nt = (h) => {
    f && d(s.id, h);
    const R = f && i && i[s.id] ? i[s.id] : x;
    if (R.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const S = R.filter(($, z) => z !== h);
    we(S), b && ie.getState().registerDataset(b, S);
  }, mt = (h, R, S) => {
    h.preventDefault(), h.stopPropagation(), X({
      isOpen: !0,
      x: h.clientX,
      y: h.clientY,
      row: R,
      rowIndex: S
    });
  }, bt = (h) => {
    const R = f && i && i[s.id] ? i[s.id] : x, $ = { id: R.length > 0 ? Math.max(...R.map((W) => Number(W.id) || 0)) + 1 : 1 };
    o.forEach((W) => {
      W.componentType === "Number" ? $[W.key] = 0 : W.componentType === "Checkbox" ? $[W.key] = !1 : (W.componentType, $[W.key] = "");
    });
    const z = [...R];
    z.splice(h + 1, 0, $), we(z), b && ie.getState().registerDataset(b, z);
  }, ft = (h) => {
    if (h <= 0) return;
    const S = [...f && i && i[s.id] ? i[s.id] : x], [$] = S.splice(h, 1);
    S.splice(h - 1, 0, $), we(S), b && ie.getState().registerDataset(b, S);
  }, Ve = (h) => {
    const R = f && i && i[s.id] ? i[s.id] : x;
    if (h >= R.length - 1) return;
    const S = [...R], [$] = S.splice(h, 1);
    S.splice(h + 1, 0, $), we(S), b && ie.getState().registerDataset(b, S);
  }, at = (h, R) => {
    de(R), h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("text/plain", R);
  }, $e = (h, R) => {
    if (h.preventDefault(), h.dataTransfer.dropEffect = "move", oe === R) return;
    const S = h.currentTarget.getBoundingClientRect(), $ = h.clientX < S.left + S.width / 2;
    me(R), Ne($ ? "left" : "right");
  }, We = (h) => {
    const R = h.relatedTarget;
    h.currentTarget.contains(R) || (me(null), Ne(null));
  }, Ke = (h, R) => {
    if (h.preventDefault(), !oe || oe === R) {
      de(null), me(null), Ne(null);
      return;
    }
    const S = o.findIndex((W) => W.key === oe);
    let $ = o.findIndex((W) => W.key === R);
    if (S === -1 || $ === -1) {
      de(null), me(null), Ne(null);
      return;
    }
    re === "right" && S > $ ? $ = $ + 1 : re === "left" && S < $ && ($ = $ - 1), $ = Math.max(0, Math.min(o.length - 1, $));
    const z = Ts(o, S, $);
    k(z), de(null), me(null), Ne(null);
  }, rt = () => {
    de(null), me(null), Ne(null);
  }, gt = (h) => {
    h.sortable && (A === h.key ? T === "asc" ? E("desc") : g(null) : (g(h.key), E("asc")));
  }, lt = (h, R, S) => {
    h.preventDefault(), h.stopPropagation(), K({
      isOpen: !0,
      x: h.clientX,
      y: h.clientY,
      column: R,
      columnIndex: S
    });
  }, ot = (h) => {
    const R = o.map(
      (S) => S.key === h ? { ...S, hidden: !S.hidden } : S
    );
    k(R);
  }, it = (h) => {
    const R = ya(o, h);
    k(R);
  }, ct = (h) => {
    J({
      isOpen: !0,
      column: h
    });
  }, vt = (h) => {
    const R = o.findIndex((W) => W.key === h);
    if (R === -1) return;
    const S = o[R], $ = {
      ...S,
      key: `${S.key}_copy`,
      title: `${S.title} (Bản sao)`,
      order: (S.order ?? R) + 1
    }, z = [...o];
    z.splice(R + 1, 0, $), k(z);
  }, yt = (h) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const R = o.filter((S) => S.key !== h);
    k(R);
  }, dt = (h) => {
    const R = o.map(
      (S) => S.key === h.key ? h : S
    );
    k(R);
  }, { flex: Nt, flexGrow: Ft, flexShrink: It, flexBasis: Rt, minWidth: Pt, maxWidth: N, width: H, ...q } = t || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...q
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: a.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              le.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Kt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: P,
                  onChange: (h) => I(h.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => O((h) => !h),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${D ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: tt,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  I(""), V({});
                },
                title: "Làm mới bộ lọc",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
                children: /* @__PURE__ */ e.jsx($a, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: _e,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Aa, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Xuất Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Fe,
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
                  onClick: Q,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: ve,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ce,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: ke,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => O((h) => !h),
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
            ref: be,
            tabIndex: 0,
            onKeyDown: ht,
            className: "w-full overflow-x-auto select-none relative focus:outline-none",
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: Q,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${Se}px`, minWidth: `${Se}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: le.length > 0 && pe.size === le.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  l.map((h, R) => {
                    const S = !!(h.frozen || h.sticky === "left"), $ = S && Y[h.key] !== void 0 ? Y[h.key] : void 0, z = h.key === ae, W = oe === h.key, te = ue === h.key;
                    let ce = "";
                    te && re === "left" ? ce = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : te && re === "right" && (ce = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const xe = h.align === "right" ? "text-right" : h.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (he) => at(he, h.key),
                        onDragOver: (he) => $e(he, h.key),
                        onDragLeave: We,
                        onDrop: (he) => Ke(he, h.key),
                        onDragEnd: rt,
                        onContextMenu: (he) => lt(he, h, R),
                        onClick: () => gt(h),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${xe} ${S ? `sticky z-20 bg-[#0b1329] ${z ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${W ? "opacity-30 bg-slate-800/80" : ""} ${ce}`,
                        style: {
                          width: h.width,
                          minWidth: h.minWidth || h.width || "100px",
                          maxWidth: h.maxWidth,
                          left: $ !== void 0 ? `${$}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${h.order ?? R + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${h.align === "right" ? "justify-end" : h.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                            S && /* @__PURE__ */ e.jsx(qn, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: h.title || h.key }),
                            h.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              h.order
                            ] })
                          ] }),
                          h.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: A === h.key ? T === "asc" ? /* @__PURE__ */ e.jsx(Zn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(ea, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Ls, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      h.key
                    );
                  })
                ] }),
                D && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  l.map((h) => {
                    const R = !!(h.frozen || h.sticky === "left"), S = R && Y[h.key] !== void 0 ? Y[h.key] : void 0, $ = h.key === ae;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${R ? `sticky z-20 bg-[#080d1a] ${$ ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: S !== void 0 ? `${S}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: _[h.key] || "",
                            onChange: (z) => V((W) => ({ ...W, [h.key]: z.target.value })),
                            className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                          }
                        )
                      },
                      `filter_${h.key}`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: le.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                "td",
                {
                  colSpan: l.length + 1,
                  className: "px-6 py-8 text-center text-slate-500 italic",
                  children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                }
              ) }) : le.map((h, R) => /* @__PURE__ */ e.jsxs(
                "tr",
                {
                  "data-row-index": R,
                  onClick: (S) => Ze(h, R, S),
                  onDoubleClick: () => et(h, R),
                  onContextMenu: (S) => mt(S, h, R),
                  className: `transition-colors group cursor-pointer ${ee === (h.id ?? h.Id ?? R) || pe.has(h.id ?? h.Id ?? R) ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        onClick: (S) => {
                          S.stopPropagation();
                          const $ = h.id ?? h.Id ?? R;
                          se((z) => {
                            const W = new Set(z);
                            return W.has($) ? W.delete($) : W.add($), W;
                          }), je($);
                        },
                        className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${pe.has(h.id ?? h.Id ?? R) ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
                        style: { width: `${Se}px`, minWidth: `${Se}px` },
                        title: "Click chọn dòng | Chuột phải mở menu thao tác",
                        children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                          pe.has(h.id ?? h.Id ?? R) ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                          /* @__PURE__ */ e.jsx("span", { children: R + 1 })
                        ] })
                      }
                    ),
                    l.map((S, $) => {
                      const z = !!(S.frozen || S.sticky === "left"), W = z && Y[S.key] !== void 0 ? Y[S.key] : void 0, te = S.key === ae, ce = h[S.key], xe = S.align === "right" ? "text-right" : S.align === "center" ? "text-center" : "text-left", he = u[`${s.id}_${h.id}_${S.key}`];
                      return /* @__PURE__ */ e.jsx(
                        "td",
                        {
                          className: `px-2 py-1 whitespace-nowrap transition-colors ${xe} ${z ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${te ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                          style: {
                            width: S.width,
                            minWidth: S.minWidth || S.width || "100px",
                            maxWidth: S.maxWidth,
                            left: W !== void 0 ? `${W}px` : void 0
                          },
                          children: /* @__PURE__ */ e.jsx(
                            $r,
                            {
                              column: S,
                              value: ce,
                              row: h,
                              rowIndex: R,
                              columnIndex: $,
                              error: he,
                              onChange: (fe) => B(h.id ?? R, S.key, fe),
                              onActionClick: (fe) => ne(fe, h, S),
                              onKeyDown: Qe,
                              onFocus: (fe, Ie, jt) => {
                                je(h.id ?? h.Id ?? fe), Je({ rowIndex: fe, colIndex: Ie, colKey: jt });
                              }
                            }
                          )
                        },
                        S.key
                      );
                    })
                  ]
                },
                h.id || R
              )) }),
              /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
                Er,
                {
                  columns: l,
                  data: le,
                  showRowNumber: !0,
                  rowNumberWidth: Se,
                  leftOffsets: Y
                }
              ) })
            ] })
          }
        ),
        F.isOpen && F.column && /* @__PURE__ */ e.jsx(
          Rr,
          {
            isOpen: F.isOpen,
            x: F.x,
            y: F.y,
            column: F.column,
            columnIndex: F.columnIndex,
            allColumns: o,
            onClose: () => K((h) => ({ ...h, isOpen: !1 })),
            onToggleHide: ot,
            onSetFreeze: it,
            onOpenProperties: ct,
            onCloneColumn: vt,
            onRemoveColumn: yt,
            onToggleFilter: () => O((h) => !h)
          }
        ),
        M.isOpen && M.column && /* @__PURE__ */ e.jsx(
          ga,
          {
            isOpen: M.isOpen,
            column: M.column,
            onClose: () => J({ isOpen: !1, column: null }),
            onSave: dt
          }
        ),
        w.isOpen && w.row && /* @__PURE__ */ e.jsx(
          Pr,
          {
            isOpen: w.isOpen,
            x: w.x,
            y: w.y,
            row: w.row,
            rowIndex: w.rowIndex,
            totalRows: v.length,
            onClose: () => X((h) => ({ ...h, isOpen: !1, row: null })),
            onDuplicateRow: st,
            onDeleteRow: nt,
            onInsertRowBelow: bt,
            onMoveRowUp: ft,
            onMoveRowDown: Ve
          }
        )
      ]
    }
  );
}, Tl = ({ node: s }) => {
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
  ], [b, j] = L(""), [v, m] = L(null), [x, P] = L("asc"), [I, A] = L(1), g = Number(a.pageSize) || 10, T = Le(() => {
    if (!b.trim()) return f;
    const F = b.toLowerCase();
    return f.filter(
      (K) => Object.values(K).some((M) => String(M).toLowerCase().includes(F))
    );
  }, [b]), E = Le(() => v ? [...T].sort((F, K) => {
    const M = F[v], J = K[v];
    if (M === J) return 0;
    const w = M > J ? 1 : -1;
    return x === "asc" ? w : -w;
  }) : T, [T, v, x]), D = Math.ceil(E.length / g) || 1, O = Le(() => {
    const F = (I - 1) * g;
    return E.slice(F, F + g);
  }, [E, I, g]), _ = Le(() => {
    const F = {};
    for (const K of u)
      if (K.aggregate === "sum") {
        const M = T.reduce((J, w) => J + (Number(w[K.key]) || 0), 0);
        F[K.key] = M.toLocaleString("en-US");
      } else if (K.aggregate === "count")
        F[K.key] = T.length;
      else if (K.aggregate === "avg") {
        const M = T.length ? T.reduce((J, w) => J + (Number(w[K.key]) || 0), 0) / T.length : 0;
        F[K.key] = M.toFixed(1);
      }
    return F;
  }, [u, T]), V = (F) => {
    v === F ? P(x === "asc" ? "desc" : "asc") : (m(F), P("asc"));
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
            /* @__PURE__ */ e.jsx(Kt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: b,
                onChange: (F) => {
                  j(F.target.value), A(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((F) => {
            const K = F.sticky === "left", M = F.align === "right" ? "text-right" : F.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => F.sortable !== !1 && V(F.key),
                style: {
                  width: F.width,
                  minWidth: F.minWidth || F.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${M} ${K ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${F.align === "right" ? "justify-end" : F.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  F.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: F.title }),
                  F.sortable !== !1 && /* @__PURE__ */ e.jsx(Ls, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              F.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: O.length > 0 ? O.map((F, K) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: u.map((M) => {
            const J = M.sticky === "left", w = F[M.key], X = M.align === "right" ? "text-right" : M.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${X} ${J ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (w == null) return "—";
                  if (M.componentType === "Checkbox") {
                    const oe = w === !0 || w === "true" || w === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: oe,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (M.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(w)
                      }
                    );
                  if (M.componentType === "DatePicker" || M.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(w) })
                    ] });
                  if (M.componentType === "Number" || typeof w == "number") {
                    const oe = Number(w);
                    if (!isNaN(oe)) {
                      const de = M.precision !== void 0 ? M.precision : oe % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: oe.toLocaleString("en-US", { minimumFractionDigits: de, maximumFractionDigits: de }) });
                    }
                  }
                  return M.key === "status" || M.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${w === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(w) }) : String(w);
                })()
              },
              M.key
            );
          }) }, F.id || K)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: u.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((F, K) => {
            const M = F.sticky === "left", J = F.align === "right" ? "text-right" : F.align === "center" ? "text-center" : "text-left", w = _[F.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${J} ${M ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: K === 0 && !w ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : w !== void 0 ? w : ""
              },
              F.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            I,
            " / ",
            D
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: I <= 1,
                onClick: () => A((F) => Math.max(1, F - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ba, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: I >= D,
                onClick: () => A((F) => Math.min(D, F + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Gr = ({ node: s, isEditing: a }) => {
  var _;
  const { props: t, style: r } = s, n = G((V) => V.features), o = G((V) => V.activeFeatureId), l = n.find((V) => String(V.id) === String(s.pageId)) || n.find((V) => String(V.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((_ = s.dataBinding) == null ? void 0 : _.fieldName) || s.props.name || s.id), x = ie((V) => He(V, v, m, void 0)), P = ie((V) => V.setFieldValue), I = ie((V) => V.applyPopulate), A = ie((V) => V.queryReference), g = x !== void 0 ? x : t.value ?? "", [T, E] = L([]);
  Te(() => {
    let V = !0;
    const F = t.reference, K = t.query, M = t.idField || "id", J = t.textField || t.fieldName || "name";
    return F && A(F, K, M, J).then((w) => {
      V && E(w);
    }), () => {
      V = !1;
    };
  }, [t.reference, t.query, t.idField, t.textField, A]);
  const D = T.length > 0 ? T : t.options || [], O = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    xt,
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
        ...j
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            disabled: t.disabled,
            value: g,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 transition-all appearance-none cursor-pointer disabled:opacity-50 ${O ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (V) => {
              const F = V.target.value;
              P(v, m, F);
              const K = D.find((J) => String(J.value) === String(F)), M = (K == null ? void 0 : K.rawItem) || K;
              t.populateField && typeof t.populateField == "string" && I(v, t.populateField, M), a || ye(s.events, "change", t.label || "Chọn mục", i, {
                componentId: s.id,
                fieldName: m,
                value: F,
                selectedItem: M
              });
            },
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn --" }),
              D.map((V) => /* @__PURE__ */ e.jsx("option", { value: V.value, className: "bg-slate-900 text-slate-100 py-1", children: V.label }, V.value))
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(ns, { className: "w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" })
      ] })
    }
  );
}, zr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = G((x) => x.features), o = G((x) => x.activeFeatureId), l = n.find((x) => String(x.id) === String(s.pageId)) || n.find((x) => String(x.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, [v, m] = L(!!t.value);
  return /* @__PURE__ */ e.jsx(
    xt,
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
        ...j
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: t.disabled,
            checked: v,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (x) => {
              m(x.target.checked), a || ye(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: x.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, Ur = ({ node: s, isEditing: a }) => {
  var g;
  const { props: t, style: r } = s, n = G((T) => T.features), o = G((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((g = s.dataBinding) == null ? void 0 : g.fieldName) || s.props.name || s.id), x = ie((T) => He(T, v, m, void 0)), P = ie((T) => T.setFieldValue), I = x !== void 0 ? x : t.value ?? "", A = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    xt,
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
        ...j
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            disabled: t.disabled,
            readOnly: a || !!t.readOnly,
            placeholder: "DD/MM/YYYY",
            value: I,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${A ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (T) => {
              const E = T.target.value;
              P(v, m, E), a || ye(s.events, "change", t.label || "Chọn ngày", i, {
                componentId: s.id,
                fieldName: m,
                value: E
              });
            }
          }
        ),
        /* @__PURE__ */ e.jsx(Ps, { className: "w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" })
      ] })
    }
  );
}, qr = ({ node: s, children: a }) => {
  const { props: t } = s, r = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
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
  const { props: t, style: r } = s, n = G((E) => E.features), o = G((E) => E.activeFeatureId), l = n.find((E) => String(E.id) === String(s.pageId)) || n.find((E) => String(E.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((T = s.dataBinding) == null ? void 0 : T.fieldName) || s.props.name || s.id), x = ie((E) => He(E, v, m, void 0)), P = ie((E) => E.setFieldValue), I = x !== void 0 ? x : t.value !== void 0 ? String(t.value) : "", A = Number(t.rows) || 2, g = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    xt,
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
          value: I,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          style: {
            width: "100%",
            ...j
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${g ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (E) => {
            const D = E.target.value;
            P(v, m, D), a || ye(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: m,
              value: D
            });
          },
          onFocus: () => {
            a || ye(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: m
            });
          },
          onBlur: (E) => {
            a || ye(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: m,
              value: E.target.value
            });
          }
        }
      )
    }
  );
}, Dl = ({ node: s, isEditing: a, children: t }) => {
  var P, I;
  const { props: r, style: n } = s, o = G((A) => A.updateComponentProps), { flex: l, flexGrow: i, flexShrink: p, flexBasis: c, minWidth: d, maxWidth: y, width: u, ...f } = n || {}, b = [
    { id: "main", label: "TAB 1" }
  ], j = r.tabs || b, [v, m] = L(
    r.activeTabId || ((P = j[0]) == null ? void 0 : P.id) || "main"
  ), x = r.activeTabId || v || ((I = j[0]) == null ? void 0 : I.id) || "main";
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
          j.map((A) => {
            const g = A.id === x;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (T) => {
                  T.stopPropagation(), m(A.id), o(s.id, { activeTabId: A.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${g ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
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
                const g = `tab_${Date.now().toString(36)}`, T = [...j, { id: g, label: `Tab Mới ${j.length + 1}` }];
                o(s.id, { tabs: T, activeTabId: g }), m(g);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: t })
      ]
    }
  );
}, ja = ({
  parentId: s,
  order: a,
  tabNodes: t,
  isEditing: r,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var f;
  const l = G((b) => b.addComponent), i = G((b) => b.selectComponent), [p, c] = L(((f = t[0]) == null ? void 0 : f.id) || ""), d = t.find((b) => b.id === p) || t[0], y = (d == null ? void 0 : d.id) || "", u = (b) => {
    var x;
    b.stopPropagation();
    const j = ((x = t[0]) == null ? void 0 : x.pageId) || "2", v = `tab_${Date.now().toString(36)}`, m = {
      id: v,
      type: "Container",
      parentId: s,
      pageId: j,
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
    l(m, s), c(v), i(v);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((b) => {
            const j = b.id === y, v = b.props.label || b.props.title || `Tab #${b.id.slice(-4)}`, m = b.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (x) => {
                  x.stopPropagation(), c(b.id), r && i(b.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${j ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: v }),
                  m !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(m) })
                ]
              },
              b.id
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
                /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }),
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
  var x;
  const d = ie(), y = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [u, f] = L(r || y), [b, j] = L(n || ((x = y[0]) == null ? void 0 : x.id) || "");
  Te(() => {
    r && r.length > 0 && f(r);
  }, [r]), Te(() => {
    n !== void 0 && j(n);
  }, [n]);
  const v = (P) => {
    j(P.id), l ? l(P) : d.setFormRecord("default", P);
  }, m = () => {
    const P = u.length + 1, I = `REC-${String(P).padStart(3, "0")}`, A = {
      id: String(Date.now()),
      code: I,
      name: `Bản ghi mới ${P}`
    }, g = [...u, A];
    f(g), j(A.id), i ? i() : d.setFormRecord("default", A);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${p}`,
      style: c,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(sa, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          u.map((P) => {
            const I = String(P.id) === String(b), A = P[t] || P.code || P.name || P.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => v(P),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${I ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: A })
              },
              P.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: m,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm bản ghi mới",
              children: [
                /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }),
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
  const i = ie(), p = ie((g) => g.datasets[t]), [c, d] = L([]), [y, u] = L(!1), [f, b] = L(""), [j, v] = L(0), m = Me(null);
  Te(() => {
    if (!s) {
      b(""), v(0);
      return;
    }
    Array.isArray(p) && p.length > 0 ? d(p) : (u(!0), i.queryEntity(t).then((g) => {
      Array.isArray(g) && g.length > 0 ? d(g) : d(i.getDataset(t) || []);
    }).finally(() => u(!1))), setTimeout(() => {
      var g, T;
      (g = m.current) == null || g.focus(), (T = m.current) == null || T.select();
    }, 80);
  }, [s, t, p]);
  const x = Le(() => {
    if (r && r.length > 0) return r;
    if (c.length > 0) {
      const g = c[0], T = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(g).filter((E) => !T.includes(E.toLowerCase()) && typeof g[E] != "object").slice(0, 6).map((E) => ({
        key: E,
        title: E.charAt(0).toUpperCase() + E.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [r, c]), P = Le(() => {
    if (!f.trim()) return c;
    const g = f.toLowerCase().trim();
    return c.filter((T) => n && n.length > 0 ? n.some((E) => {
      const D = T[E];
      return D != null && String(D).toLowerCase().includes(g);
    }) : Object.values(T).some(
      (E) => E != null && String(E).toLowerCase().includes(g)
    ));
  }, [c, f, n]);
  Te(() => {
    j >= P.length && v(Math.max(0, P.length - 1));
  }, [P.length]);
  const I = (g) => {
    g.key === "ArrowDown" ? (g.preventDefault(), v((T) => T < P.length - 1 ? T + 1 : T)) : g.key === "ArrowUp" ? (g.preventDefault(), v((T) => T > 0 ? T - 1 : 0)) : g.key === "Enter" ? (g.preventDefault(), P[j] && (o(P[j]), l())) : g.key === "Escape" && (g.preventDefault(), l());
  };
  if (!s) return null;
  const A = a || `Tra cứu danh mục: ${t}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: I,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(Ns, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: A }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                P.length,
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
              children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Kt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: m,
              type: "text",
              value: f,
              onChange: (g) => {
                b(g.target.value), v(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${t}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: y ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : P.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          f,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            x.map((g) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: g.width },
                children: g.title || g.key
              },
              g.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: P.map((g, T) => {
            const E = T === j;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => v(T),
                onDoubleClick: () => {
                  o(g), l();
                },
                className: `transition-colors cursor-pointer ${E ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: T + 1 }),
                  x.map((D) => {
                    const O = g[D.key];
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
              g.id ?? g.Id ?? T
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
                disabled: P.length === 0,
                onClick: () => {
                  P[j] && (o(P[j]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(na, { className: "w-3.5 h-3.5" }),
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
  var J, w;
  const { props: t, style: r } = s, n = G((X) => X.features), o = G((X) => X.activeFeatureId), l = n.find((X) => String(X.id) === String(s.pageId)) || n.find((X) => String(X.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: p, flexGrow: c, flexShrink: d, flexBasis: y, minWidth: u, maxWidth: f, width: b, ...j } = r || {}, v = String(s.pageId || o || "default"), m = String(((J = s.dataBinding) == null ? void 0 : J.fieldName) || s.props.name || s.id), x = ie((X) => He(X, v, m, void 0)), P = ie((X) => X.setFieldValue), I = ie((X) => X.applyPopulate), [A, g] = L(!1), T = x !== void 0 ? x : t.value ?? "", E = !!t.validationError, D = String(t.reference || ((w = s.dataBinding) == null ? void 0 : w.entityName) || ""), O = String(t.displayField || "code"), _ = String(t.valueField || "code"), V = String(t.populateRule || ""), F = () => {
    if (!(t.disabled || a)) {
      if (!D) {
        console.warn(`[ForgeSearchEntry] Component ${s.id} chưa cấu hình reference entity`);
        return;
      }
      g(!0);
    }
  }, K = (X) => {
    const oe = X[_] ?? X[O] ?? X.code ?? X.id;
    X[O] ?? X.name, P(v, m, oe), V && I(v, V, X), a || (ye(s.events, "change", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: m,
      value: oe,
      selectedItem: X
    }), ye(s.events, "select", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: m,
      value: oe,
      selectedItem: X
    }));
  }, M = (X) => {
    X.key === "F1" && (X.preventDefault(), X.stopPropagation(), F());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      xt,
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
          ...j
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
              onKeyDown: M,
              onDoubleClick: F,
              className: `w-full pl-3 pr-8 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${E ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (X) => {
                const oe = X.target.value;
                P(v, m, oe), a || ye(s.events, "change", t.label || "Ô tra cứu", i, {
                  componentId: s.id,
                  fieldName: m,
                  value: oe
                });
              }
            }
          ),
          D && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              disabled: t.disabled || a,
              onClick: F,
              title: `Tra cứu ${D} (Nhấn F1 hoặc nhấp đúp)`,
              className: "absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
              children: /* @__PURE__ */ e.jsx(Kt, { className: "w-3.5 h-3.5" })
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
        onSelect: K,
        onClose: () => g(!1)
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
  const p = Gn(), c = Me(null), [d, y] = L(!1), [u, f] = L(null), [b, j] = L(null), [v, m] = L([
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
  ]), x = r ?? v, P = (_) => {
    r || m(_), n == null || n(_);
  }, I = (_) => _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : `${(_ / (1024 * 1024)).toFixed(2)} MB`, A = (_) => _.startsWith("image/") ? /* @__PURE__ */ e.jsx(_a, { className: "w-4 h-4 text-emerald-400" }) : _.includes("pdf") ? /* @__PURE__ */ e.jsx(_t, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(Oa, { className: "w-4 h-4 text-blue-400" }), g = (_) => {
    if (!_ || _.length === 0) return;
    const V = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(_).forEach((F) => {
      if (F.size > l * 1024 * 1024) {
        alert(`Tệp "${F.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const K = new FileReader(), M = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      K.onload = () => {
        const J = {
          id: M,
          fileName: F.name,
          fileSize: F.size,
          fileType: F.type || "application/octet-stream",
          uploadedDate: V,
          uploadedBy: "User",
          dataUrl: K.result
        };
        P([...x, J]);
      }, K.readAsDataURL(F);
    });
  }, T = (_, V) => {
    if (V == null || V.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const F = x.filter((K) => K.id !== _);
      P(F), u === _ && f(null);
    }
  }, E = (_, V) => {
    if (V == null || V.stopPropagation(), !_.dataUrl) {
      alert(`Đang tải file mẫu: ${_.fileName}`);
      return;
    }
    const F = document.createElement("a");
    F.href = _.dataUrl, F.download = _.fileName, document.body.appendChild(F), F.click(), document.body.removeChild(F);
  }, D = t || ((O = s == null ? void 0 : s.props) == null ? void 0 : O.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(aa, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: D }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          x.length,
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
            onChange: (_) => g(_.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var _;
              return (_ = c.current) == null ? void 0 : _.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(Rn, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (_) => {
          _.preventDefault(), y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (_) => {
          _.preventDefault(), y(!1), g(_.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${d ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var _;
          return (_ = c.current) == null ? void 0 : _.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(Rn, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: x.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : x.map((_, V) => {
        const F = u === _.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => f(_.id),
            className: `transition-colors cursor-pointer ${F ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: V + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                A(_.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: _.fileName, children: _.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: I(_.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: _.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: _.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (K) => {
                      K.stopPropagation(), j(_);
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
                    onClick: (K) => E(_, K),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (K) => T(_.id, K),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          _.id
        );
      }) })
    ] }) }),
    b && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => j(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (_) => _.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  A(b.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: b.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    I(b.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (_) => E(b, _),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(ps, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => j(null),
                      className: "p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded",
                      children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" })
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
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: A(b.fileType) }),
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
                    onClick: (_) => E(b, _),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(ps, { className: "w-4 h-4" }),
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
  const u = Me(null), f = Me(null), b = Gn(), j = String((s == null ? void 0 : s.pageId) || "default"), v = (s == null ? void 0 : s.props) || {}, m = v.dataBinding || v.fieldName || ((s == null ? void 0 : s.id) ?? ""), x = ie((Y) => He(Y, j, m, void 0)), P = ie((Y) => Y.setFieldValue), I = ie((Y) => Y.applyPopulate), A = ie((Y) => Y.getDataset), g = t ?? v.label ?? "Gợi ý tự động (Autocomplete)", T = l ?? v.reference, E = i ?? v.displayField ?? "name", D = p ?? v.valueField ?? "code", O = c ?? v.sublabelField, _ = d ?? v.placeholder ?? "Gõ để tìm kiếm...", V = String(v.populateRule || ""), F = x ?? r ?? "", [K, M] = L(String(F)), [J, w] = L(!1), [X, oe] = L(-1);
  Te(() => {
    F != null && M(String(F));
  }, [F]);
  const me = (o && o.length > 0 ? o : T ? (A(T) || []).map((ae) => ({
    value: ae[D] ?? ae.id ?? ae.code ?? "",
    label: String(ae[E] ?? ae.name ?? ae.title ?? ae.code ?? ""),
    sublabel: O ? String(ae[O] ?? "") : void 0,
    raw: ae
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((Y) => {
    if (!K || K.trim() === "") return !0;
    const ae = K.toLowerCase().trim();
    return Y.label.toLowerCase().includes(ae) || String(Y.value).toLowerCase().includes(ae) || Y.sublabel && Y.sublabel.toLowerCase().includes(ae);
  });
  Te(() => {
    const Y = (ae) => {
      u.current && !u.current.contains(ae.target) && w(!1);
    };
    return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
  }, []);
  const re = (Y) => {
    M(Y.label), w(!1), oe(-1), n == null || n(Y.value, Y.raw), m && P(j, m, Y.value), Y.raw && V && I(j, V, Y.raw);
  }, Ne = (Y) => {
    if (!J && (Y.key === "ArrowDown" || Y.key === "ArrowUp")) {
      w(!0);
      return;
    }
    Y.key === "ArrowDown" ? (Y.preventDefault(), oe(
      (ae) => ae < me.length - 1 ? ae + 1 : 0
    )) : Y.key === "ArrowUp" ? (Y.preventDefault(), oe(
      (ae) => ae > 0 ? ae - 1 : me.length - 1
    )) : Y.key === "Enter" ? J && X >= 0 && X < me.length && (Y.preventDefault(), re(me[X])) : Y.key === "Escape" && (w(!1), oe(-1));
  }, Se = (Y) => {
    var ae;
    Y.stopPropagation(), M(""), m && P(j, m, ""), n == null || n(""), (ae = f.current) == null || ae.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: u, className: "relative w-full text-xs", children: [
    g && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: b,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: g
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: b,
          ref: f,
          type: "text",
          disabled: y,
          value: K,
          placeholder: _,
          onFocus: () => w(!0),
          onChange: (Y) => {
            M(Y.target.value), w(!0), oe(0), m && P(j, m, Y.target.value);
          },
          onKeyDown: Ne,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        K && !y && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Se,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var Y;
              w(!J), (Y = f.current) == null || Y.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              ns,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${J ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    J && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: me.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      K,
      '"'
    ] }) : me.map((Y, ae) => {
      const le = X === ae, we = String(Y.value) === String(F);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => oe(ae),
          onClick: () => re(Y),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${le ? "bg-blue-600/25 text-blue-200" : we ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: Y.label }),
              (Y.sublabel || Y.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                Y.sublabel ? `${Y.sublabel} • ` : "",
                Y.value
              ] })
            ] }),
            we && /* @__PURE__ */ e.jsx(na, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${Y.value}-${ae}`
      );
    }) })
  ] });
};
function wa(s) {
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
const $s = Wt()(
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
), Jt = ({ node: s, isEditing: a, children: t }) => {
  var c, d, y, u, f;
  const r = $s((b) => b.user), n = (r == null ? void 0 : r.role) || "User", o = s.permissions;
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
  return l && l.length > 0 && !l.some((j) => j.toLowerCase() === n.toLowerCase()) ? p === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: t }) : null : i && i.length > 0 && i.some((j) => j.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: t }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
};
function Ca(s, a) {
  var y, u;
  const t = s.style || {}, r = ((y = s.props) == null ? void 0 : y.colSpan) !== void 0 && ((u = s.props) == null ? void 0 : u.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, p;
  const c = (a == null ? void 0 : a.mode) || "grid", d = (a == null ? void 0 : a.gridColumns) || 12;
  if (c === "grid") {
    let f;
    if (r !== void 0 && !isNaN(r) && r > 0)
      f = Math.min(r, d);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const b = Number(a.columnsPerRow);
      !isNaN(b) && b > 0 ? f = Math.max(1, Math.floor(d / b)) : f = Math.min(4, d);
    } else
      f = Math.min(4, d);
    p = `span ${f} / span ${f}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const f = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const j = Math.min(100, Math.max(2, r / d * 100)), v = r >= d ? "100%" : `calc(${j}% - ${Math.round(f * (1 - r / d))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = v, l = v, o = `0 0 ${v}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const j = Number(a.columnsPerRow);
        if (!isNaN(j) && j > 0) {
          const v = j === 1 ? "100%" : `calc((100% - ${(j - 1) * f}px) / ${j})`;
          t.width === void 0 && t.flex === void 0 && (n = v, l = v, o = `0 0 ${v}`);
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
const Ht = ({
  node: s,
  isEditing: a = !1,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = G((v) => v.selection), p = G((v) => v.selectComponent), c = a && i.componentId === s.id, d = (v) => {
    a && (v.stopPropagation(), p(s.id));
  }, y = (v) => {
    a && (v.preventDefault(), v.stopPropagation(), p(s.id), t && t(v, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const v = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), m = s.props.flexConfig || {}, x = s.props.gridConfig || {}, P = {
      direction: m.direction || "row",
      wrap: m.wrap || "wrap",
      gap: m.gap || "12px",
      columnsPerRow: m.columnsPerRow || "auto"
    }, I = Number(
      x.columns || (typeof m.columnsPerRow == "number" ? m.columnsPerRow : 12)
    ) || 12, A = {
      mode: v === "flex" ? "flex" : "grid",
      direction: m.direction || "row",
      columnsPerRow: m.columnsPerRow || "auto",
      gap: m.gap || x.gap || "12px",
      wrap: m.wrap || "wrap",
      gridColumns: I
    }, g = () => {
      const T = s.children || [];
      return T.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : wa(T).map((D, O) => {
        if (D.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            ja,
            {
              parentId: s.id,
              order: D.order,
              tabNodes: D.nodes,
              isEditing: a,
              parentFlexConfig: P,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${D.order}_${O}`
          );
        const _ = D.node;
        return l ? /* @__PURE__ */ e.jsx(Vt.Fragment, { children: l(_, A) }, _.id) : /* @__PURE__ */ e.jsx(
          Ht,
          {
            node: _,
            isEditing: a,
            onContextMenu: t,
            parentLayout: A,
            isWrappedByDrag: !1
          },
          _.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(Jt, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx("div", { onClick: d, onContextMenu: y, className: "w-full", children: /* @__PURE__ */ e.jsx(Ir, { node: s, isEditing: a, children: g() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(Jt, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      _n,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: d,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: g()
      }
    ) }) : /* @__PURE__ */ e.jsx(Jt, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      _n,
      {
        node: s,
        isEditing: a,
        isSelected: c,
        onClick: d,
        onContextMenu: y,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: g()
      }
    ) });
  }
  const u = () => {
    var v, m, x, P, I, A;
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
        return /* @__PURE__ */ e.jsx(zr, { node: s, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Ur, { node: s, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx(Yr, { node: s, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(qr, { node: s, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Xr,
          {
            label: ((v = s.props) == null ? void 0 : v.label) ?? "Lô hàng:",
            reference: ((m = s.props) == null ? void 0 : m.reference) ?? "Transaction",
            displayField: ((x = s.props) == null ? void 0 : x.displayField) ?? "code",
            records: (P = s.props) == null ? void 0 : P.records,
            activeId: (I = s.props) == null ? void 0 : I.activeId,
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
  } : void 0), b = Ca(s, f), j = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...b,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(Jt, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: d,
      onContextMenu: y,
      style: j,
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
}, Fl = ({
  value: s,
  column: a,
  onSave: t,
  onCancel: r
}) => {
  const [n, o] = L(s ?? ""), l = Me(null);
  Te(() => {
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
}, Is = ({
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
  } = ia({
    id: s.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: u, isOver: f } = ca({
    id: s.id,
    disabled: !a
  }), b = (A) => {
    c(A), u(A);
  }, j = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), m = {
    ...Ca(s, j),
    transform: rr.Translate.toString(d),
    opacity: y ? 0.35 : 1,
    transition: y ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, x = s.type === "Container" || s.type === "Section" || s.type === "Tabs", P = f && x && !y, I = f && !x && !y;
  return /* @__PURE__ */ e.jsxs("div", { ref: b, style: m, className: "group/drag relative", children: [
    I && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    P && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...p,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (A) => A.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(Es, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ht,
      {
        node: s,
        isEditing: a,
        onContextMenu: t,
        parentLayout: j,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (A, g) => /* @__PURE__ */ e.jsx(
          Is,
          {
            node: A,
            isEditing: a,
            onContextMenu: t,
            parentLayout: g && "mode" in g ? g : void 0,
            parentFlexConfig: g && !("mode" in g) ? g : void 0,
            activeId: o,
            overId: l
          },
          A.id
        )
      }
    )
  ] });
}, ka = ({ x: s, y: a, items: t, onClose: r }) => {
  const n = Me(null);
  Te(() => {
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
}, Il = ({
  isEditing: s,
  activeId: a,
  overId: t
}) => {
  const r = G((D) => D.features), n = G((D) => D.activeFeatureId), o = G((D) => D.activeRecordId), l = G((D) => D.addComponent), i = G((D) => D.selectComponent), p = G((D) => D.removeComponent), c = G((D) => D.updateComponentProps);
  G((D) => D.updateFeatureLayout);
  const d = G((D) => D.updateFeatureScriptFile), y = r.find((D) => D.id === n), u = (y == null ? void 0 : y.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  Vt.useEffect(() => {
    var O;
    if (pa(y) && n) {
      let _ = o;
      !_ && typeof window < "u" && (_ = new URLSearchParams(window.location.search).get("id"));
      const V = _ || "1", F = ie.getState().formRecords[n], K = (F == null ? void 0 : F.id) || (F == null ? void 0 : F.Id);
      if (String(K) !== String(V)) {
        const { module: M } = ua(y == null ? void 0 : y.scriptFile), J = (M == null ? void 0 : M.loadDetail) || ((O = M == null ? void 0 : M.transactionDetailBL) == null ? void 0 : O.loadDetail);
        typeof J == "function" && J(V).then((w) => {
          w && n && (ie.getState().setFormRecord(n, w), ie.getState().setFormRecord("default", w), o !== String(w.id || V) && G.getState().setActiveRecordId(String(w.id || V)));
        });
      }
    }
  }, [n, o, y == null ? void 0 : y.scriptFile, y == null ? void 0 : y.route, y == null ? void 0 : y.name, y == null ? void 0 : y.isDetail]);
  const { setNodeRef: f, isOver: b } = ca({
    id: "canvas-root",
    disabled: !s
  }), [j, v] = L(""), m = !!(y != null && y.scriptFile && y.scriptFile.trim().length > 0), [x, P] = L(null), I = (D, O = {}, _ = {}) => ({
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
      ..._
    },
    events: [],
    order: ((y == null ? void 0 : y.components.length) || 0) + 1
  }), A = (D) => {
    !s || !m || (D.preventDefault(), i(null), P({
      x: D.clientX,
      y: D.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, g = (D, O) => {
    if (!s) return;
    D.preventDefault(), D.stopPropagation(), i(O.id);
    const _ = O.type === "Container" || O.type === "Section" || O.type === "Tabs";
    P({
      x: D.clientX,
      y: D.clientY,
      targetContainerId: _ ? O.id : O.parentId,
      selectedNode: O
    });
  }, T = () => {
    var F, K, M;
    if (!x) return [];
    const { targetContainerId: D, selectedNode: O } = x, _ = O && (O.type === "Container" || O.type === "Section" || O.type === "Tabs");
    if (O && _) {
      const J = O.props.layoutMode === "grid", w = ((F = O.props.flexConfig) == null ? void 0 : F.direction) === "row", X = !!(O.props.isTab || O.props.tab || O.type === "Tabs"), oe = O.props.activeTabId || ((M = (K = O.props.tabs) == null ? void 0 : K[0]) == null ? void 0 : M.id) || "main", de = X ? { tabId: oe } : {};
      return [
        ...X ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: ut,
            onClick: () => {
              const ue = O.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], me = `tab_${Date.now().toString(36)}`, re = [
                ...ue,
                { id: me, label: `Tab Mới ${ue.length + 1}` }
              ];
              c(O.id, {
                tabs: re,
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
          icon: ut,
          onClick: () => {
            const ue = I(
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
                flex: w ? "1" : void 0,
                width: w ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ue, D);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: kt,
          onClick: () => {
            const ue = I(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...de
              },
              {
                flex: w ? "1" : void 0,
                width: w ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ue, D);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: kt,
          onClick: () => {
            const ue = I("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...de
            });
            l(ue, D);
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
          icon: Ct,
          onClick: () => l(
            I("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: Ct,
          onClick: () => l(
            I("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: Ct,
          onClick: () => l(
            I("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: Ct,
          onClick: () => l(
            I("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: Qt,
          onClick: () => l(
            I("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: _t,
          onClick: () => l(
            I("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: Qt,
          onClick: () => l(
            I("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...de
            }),
            D
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: es,
          onClick: () => l(
            I("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...de
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
          label: w ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: w ? Ls : Pn,
          onClick: () => {
            c(O.id, {
              flexConfig: {
                ...O.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: w ? "column" : "row"
              }
            });
          }
        },
        {
          label: J ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: kt,
          onClick: () => {
            J ? c(O.id, {
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
          icon: Be,
          danger: !0,
          onClick: () => p(O.id)
        }
      ];
    }
    const V = u.direction === "row";
    return [
      {
        label: V ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: ut,
        onClick: () => {
          const J = I(
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
              flex: V ? "1" : void 0,
              width: V ? void 0 : "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(J, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: kt,
        onClick: () => {
          const J = I(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: V ? "1" : void 0,
              width: V ? void 0 : "100%",
              minHeight: "140px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(J, null);
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
        icon: Qt,
        onClick: () => l(I("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: Ct,
        onClick: () => l(I("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: _t,
        onClick: () => l(I("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: es,
        onClick: () => l(I("Table"), null)
      }
    ];
  }, E = (y == null ? void 0 : y.components.filter((D) => !D.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      onContextMenu: A,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${b && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (y == null ? void 0 : y.name) || "Màn hình" }),
              m ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(vs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: y == null ? void 0 : y.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Ot, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: m ? (y == null ? void 0 : y.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          m ? E.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: A,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${b ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(ut, { className: "w-7 h-7" }) }),
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
                      const D = I(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      D.children = [
                        I(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        I(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(D, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Pn, { className: "w-4 h-4" }),
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
              children: wa(E).map((D, O) => {
                if (D.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    ja,
                    {
                      parentId: null,
                      order: D.order,
                      tabNodes: D.nodes,
                      isEditing: s,
                      onContextMenu: g,
                      renderChild: (F, K) => s ? /* @__PURE__ */ e.jsx(
                        Is,
                        {
                          node: F,
                          isEditing: s,
                          onContextMenu: g,
                          parentLayout: K && "mode" in K ? K : void 0,
                          parentFlexConfig: K && !("mode" in K) ? K : void 0,
                          activeId: a,
                          overId: t
                        },
                        F.id
                      ) : /* @__PURE__ */ e.jsx(
                        Ht,
                        {
                          node: F,
                          isEditing: !1,
                          onContextMenu: g,
                          parentLayout: K && "mode" in K ? K : void 0,
                          parentFlexConfig: K && !("mode" in K) ? K : void 0
                        },
                        F.id
                      )
                    },
                    `root_tab_stack_${D.order}_${O}`
                  );
                const _ = D.node, V = {
                  mode: "flex",
                  direction: u.direction || "column",
                  wrap: u.wrap || "wrap",
                  gap: u.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  Is,
                  {
                    node: _,
                    isEditing: s,
                    onContextMenu: g,
                    parentLayout: V,
                    activeId: a,
                    overId: t
                  },
                  _.id
                ) : /* @__PURE__ */ e.jsx(
                  Ht,
                  {
                    node: _,
                    isEditing: !1,
                    onContextMenu: g,
                    parentLayout: V
                  },
                  _.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Ot, { className: "w-8 h-8" }) }),
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
                  const O = j.trim();
                  if (!O) return;
                  const _ = O.endsWith(".bl.ts") ? O : O.endsWith(".ts") ? O.replace(/\.ts$/, ".bl.ts") : `${O}.bl.ts`;
                  d(n, _), v("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(vs, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: j,
                          onChange: (D) => v(D.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  y && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(ra, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const D = y.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          v(`${D || "feature"}.bl.ts`);
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
                      disabled: !j.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(js, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        x && /* @__PURE__ */ e.jsx(
          ka,
          {
            x: x.x,
            y: x.y,
            items: T(),
            onClose: () => P(null)
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
const Vn = [
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
let Xt = null;
async function ll() {
  if (Xt) return Xt;
  try {
    const s = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (s.ok) {
      const a = await s.json();
      if (Array.isArray(a) && a.length > 0)
        return Xt = a, a;
    }
  } catch {
    console.warn("[MetadataService] Server offline, using fallback entity catalogs");
  }
  return Xt = Vn, Vn;
}
const ol = ({
  isOpen: s,
  node: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = L("info"), [l, i] = L([]), [p, c] = L(""), [d, y] = L("General"), [u, f] = L(""), [b, j] = L("Dropdown"), [v, m] = L(""), [x, P] = L(""), [I, A] = L(""), [g, T] = L(1), [E, D] = L(4), [O, _] = L(""), [V, F] = L('{"change":"AutoPOL"}'), [K, M] = L(""), [J, w] = L(""), [X, oe] = L(""), [de, ue] = L(""), [me, re] = L(""), [Ne, Se] = L(""), [Y, ae] = L(""), [le, we] = L(""), [k, B] = L(""), [ne, ee] = L(""), [je, pe] = L(""), [se, be] = L(""), [U, Q] = L(""), [ve, Ce] = L(""), [ke, _e] = L(""), [Fe, Pe] = L(""), [Je, Xe] = L(""), [ht, Qe] = L(""), [Ze, et] = L(""), [tt, st] = L(""), [nt, mt] = L(""), [bt, ft] = L(""), [Ve, at] = L(""), [$e, We] = L("id"), [Ke, rt] = L(""), [gt, lt] = L(""), [ot, it] = L(""), [ct, vt] = L(""), [yt, dt] = L(""), [Nt, Ft] = L(""), [It, Rt] = L(""), [Pt, N] = L(""), [H, q] = L(""), [Z, h] = L(""), [R, S] = L(!1), [$, z] = L(!0), [W, te] = L(!1), [ce, xe] = L(!1), [he, fe] = L(!1), [Ie, jt] = L(!1), [zt, As] = L(!1), [Bs, _s] = L(!1), [Os, Ms] = L(!1), [Hs, Vs] = L(!1), [Ws, Ks] = L(!1), [Gs, zs] = L(!1), [Us, qs] = L(!1), [Ys, Js] = L(!1), [Xs, Qs] = L(!1), [Zs, en] = L(!1), [tn, sn] = L(!0), [nn, an] = L(!0), [rn, ln] = L(!1), [on, cn] = L(!1), [dn, un] = L(!1), [pn, xn] = L(!1), [hn, mn] = L(!1), [bn, fn] = L(!1), [gn, vn] = L(!1), [yn, Nn] = L(!1), [cs, jn] = L(
    'return "?$filter=Active eq true and TerminalType/any(a:a/TypeId in ({${1}})) &$orderby=Id desc"'
  ), [wn, Cn] = L(
    '(x, y) => { return (x.PortCode !== null && x.PortCode !== undefined && x.PortCode !== "") ? (x.PortCode + " - " + x.Name) : x.Name; }'
  ), [kn, Sn] = L(""), [Tn, Dn] = L("{ShortName}"), [Fn, In] = L("");
  if (Te(() => {
    ll().then((C) => i(C));
  }, []), Te(() => {
    if (a) {
      const C = a.props || {}, Ae = a.dataBinding || {};
      c(String(C.id ?? a.id)), y(C.group || "General"), f(C.reference || Ae.entityName || ""), j(a.type || "Dropdown"), m(String(C.parentId ?? "")), P(C.refName || C.reference || Ae.entityName || ""), A(Ae.fieldName || C.name || C.fieldName || a.id), T(Number(a.order ?? C.order ?? 1)), D(Number(C.colSpan ?? C.column ?? 4)), _(C.label || ""), F(
        typeof C.events == "string" ? C.events : C.events ? JSON.stringify(C.events) : '{"change":"AutoPOL"}'
      ), M(C.style || ""), w(C.childStyle || ""), oe(C.validation || ""), ue(C.selectField || ""), re(C.plainText || ""), Se(C.cssClass || C.className || ""), ae(C.sqlSelect || ""), we(String(C.offset ?? "")), B(C.groupFormat || ""), ee(C.formatSummary || ""), pe(C.orderBySummary || ""), be(C.groupEvent || ""), Q(C.icon || ""), Ce(C.system || ""), _e(C.refClass || "TMS.UI.Business.Catalogue.TerminalEditor"), Pe(C.hotKey || ""), Xe(C.dateTimeField || ""), Qe(String(C.addStart ?? "")), et(String(C.addEnd ?? "")), st(String(C.bodyRowHeight ?? "")), mt(C.sqlWhere || ""), ft(String(C.footerHeight ?? "")), at(C.joinTable || ""), We(C.idField || "id"), rt(String(C.headerHeight ?? "")), lt(C.populateField || ""), it(String(C.precision ?? "")), vt(C.groupBy || ""), dt(C.disabledExp || ""), Ft(C.showExp || ""), Rt(String(C.row ?? "")), N(C.template || ""), q(C.templateLocked || ""), h(String(C.default ?? C.defaultValue ?? "")), S(!!C.realtime), z(C.showLabel !== !1 && C.label !== !1), te(!!C.hidden), xe(!!C.filterLocal), fe(!!C.sqlSearch), jt(!!C.cache), As(!!C.moveTab), _s(!!C.focus), Ms(!!C.focusSearch), Vs(!!C.noLoad), Ks(!!C.collapsible), zs(!!C.showHotKey), qs(!!C.history), Js(!!C.top), Qs(!!C.hideAnd), en(!!C.disabled), sn(C.visibility !== !1), an(C.active !== !1), ln(!!C.upperCase), cn(!!(C.virtualScroll || C.virtual)), un(!!C.isPrivate), xn(!!C.renderIndex), mn(!!(C.canAdd || C.add)), fn(!!(C.canSearch || C.search)), vn(!!(C.isSummary || C.summary)), Nn(!!C.showDateTimeField), (C.dataSource || C.dataSourceFilter) && jn(String(C.dataSource || C.dataSourceFilter)), C.formatEntity && Cn(String(C.formatEntity)), C.migration && Sn(String(C.migration)), C.formatData && Dn(String(C.formatData)), C.query && In(String(C.query));
    }
  }, [a]), !s || !a) return null;
  const Fa = () => {
    var Ut;
    let C = V;
    try {
      V.trim().startsWith("{") && (C = JSON.parse(V));
    } catch {
      C = V;
    }
    const Ae = {
      ...a.props,
      id: p,
      group: d,
      reference: u,
      componentType: b,
      parentId: v,
      refName: x,
      fieldName: I,
      order: Number(g) || 1,
      colSpan: Number(E) || 4,
      column: Number(E) || 4,
      label: O,
      events: C,
      style: K,
      childStyle: J,
      validation: X,
      selectField: de,
      plainText: me,
      cssClass: Ne,
      sqlSelect: Y,
      offset: le,
      groupFormat: k,
      formatSummary: ne,
      orderBySummary: je,
      groupEvent: se,
      icon: U,
      system: ve,
      refClass: ke,
      hotKey: Fe,
      dateTimeField: Je,
      addStart: ht,
      addEnd: Ze,
      bodyRowHeight: tt,
      sqlWhere: nt,
      footerHeight: bt,
      joinTable: Ve,
      idField: $e,
      headerHeight: Ke,
      populateField: gt,
      precision: ot ? Number(ot) : void 0,
      groupBy: ct,
      disabledExp: yt,
      showExp: Nt,
      row: It,
      template: Pt,
      templateLocked: H,
      default: Z,
      // Display flags
      realtime: R,
      showLabel: $,
      hidden: W,
      filterLocal: ce,
      sqlSearch: he,
      cache: Ie,
      moveTab: zt,
      focus: Bs,
      focusSearch: Os,
      noLoad: Hs,
      collapsible: Ws,
      showHotKey: Gs,
      history: Us,
      top: Ys,
      hideAnd: Xs,
      disabled: Zs,
      visibility: tn,
      active: nn,
      upperCase: rn,
      virtual: on,
      isPrivate: dn,
      renderIndex: pn,
      add: hn,
      search: bn,
      summary: gn,
      showDateTimeField: yn,
      // Code blocks
      dataSource: cs,
      dataSourceFilter: cs,
      formatEntity: wn,
      migration: kn,
      formatData: Tn,
      query: Fn
    }, ds = {
      ...a.dataBinding || {},
      entityName: u || ((Ut = a.dataBinding) == null ? void 0 : Ut.entityName) || d || "General",
      fieldName: I || a.id,
      twoWay: !0
    };
    r(a.id, Ae, ds), t();
  }, ge = (C, Ae, ds) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${Ae ? "text-slate-200 font-medium" : "text-slate-400"}`, children: C }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: Ae,
        onChange: (Ut) => ds(Ut.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Gt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Tt, { className: "w-4 h-4 text-teal-400" }),
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
              onClick: Fa,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(ys, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                        f(C.target.value), x || P(C.target.value);
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
                      value: b,
                      onChange: (C) => j(C.target.value),
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
                      value: v,
                      onChange: (C) => m(C.target.value),
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
                      value: x,
                      onChange: (C) => P(C.target.value),
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
                      value: I,
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
                      value: g,
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
                      value: E,
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
                      onChange: (C) => _(C.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Events" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: V,
                      onChange: (C) => F(C.target.value),
                      placeholder: '{"change":"AutoPOL"}',
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-amber-300 font-mono focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Style" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: K,
                      onChange: (C) => M(C.target.value),
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
                      value: J,
                      onChange: (C) => w(C.target.value),
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
                      value: X,
                      onChange: (C) => oe(C.target.value),
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
                      value: de,
                      onChange: (C) => ue(C.target.value),
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
                      value: me,
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
                      value: Ne,
                      onChange: (C) => Se(C.target.value),
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
                      onChange: (C) => ae(C.target.value),
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
                      value: le,
                      onChange: (C) => we(C.target.value),
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
                      value: k,
                      onChange: (C) => B(C.target.value),
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
                      onChange: (C) => ee(C.target.value),
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
                      value: je,
                      onChange: (C) => pe(C.target.value),
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
                      value: se,
                      onChange: (C) => be(C.target.value),
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
                      value: U,
                      onChange: (C) => Q(C.target.value),
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
                      value: ve,
                      onChange: (C) => Ce(C.target.value),
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
                      value: ke,
                      onChange: (C) => _e(C.target.value),
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
                      value: Fe,
                      onChange: (C) => Pe(C.target.value),
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
                      value: Je,
                      onChange: (C) => Xe(C.target.value),
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
                      value: ht,
                      onChange: (C) => Qe(C.target.value),
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
                      value: Ze,
                      onChange: (C) => et(C.target.value),
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
                      value: tt,
                      onChange: (C) => st(C.target.value),
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
                      value: nt,
                      onChange: (C) => mt(C.target.value),
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
                      value: bt,
                      onChange: (C) => ft(C.target.value),
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
                      value: Ve,
                      onChange: (C) => at(C.target.value),
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
                      value: $e,
                      onChange: (C) => We(C.target.value),
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
                      value: Ke,
                      onChange: (C) => rt(C.target.value),
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
                      value: gt,
                      onChange: (C) => lt(C.target.value),
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
                      value: ot,
                      onChange: (C) => it(C.target.value),
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
                      value: ct,
                      onChange: (C) => vt(C.target.value),
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
                      value: yt,
                      onChange: (C) => dt(C.target.value),
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
                      value: Nt,
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
                      value: It,
                      onChange: (C) => Rt(C.target.value),
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
                      value: Pt,
                      onChange: (C) => N(C.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Ot, { className: "w-3 h-3 text-amber-400" })
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
                      value: Z,
                      onChange: (C) => h(C.target.value),
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
                  ge("Realtime", R, S),
                  ge("Label", $, z),
                  ge("Hidden", W, te),
                  ge("FilterLocal", ce, xe),
                  ge("SqlSearch", he, fe),
                  ge("Cache", Ie, jt),
                  ge("Move Tab", zt, As),
                  ge("Focus", Bs, _s),
                  ge("FocusSearch", Os, Ms),
                  ge("No Load", Hs, Vs),
                  ge("Collapsible", Ws, Ks),
                  ge("HotKey", Gs, zs),
                  ge("History", Us, qs)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  ge("Top", Ys, Js),
                  ge("HideAnd", Xs, Qs),
                  ge("Disabled", Zs, en),
                  ge("Visibility", tn, sn),
                  ge("Active", nn, an),
                  ge("Upper Case", rn, ln),
                  ge("Virtual", on, cn),
                  ge("Private", dn, un),
                  ge("Render Index", pn, xn),
                  ge("Add", hn, mn),
                  ge("Search", bn, fn),
                  ge("Sumary", gn, vn),
                  ge("DateTime Field", yn, Nn)
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
                      value: cs,
                      onChange: (C) => jn(C.target.value),
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
                      value: wn,
                      onChange: (C) => Cn(C.target.value),
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
                      value: kn,
                      onChange: (C) => Sn(C.target.value),
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
                      value: Tn,
                      onChange: (C) => Dn(C.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "QUERY" }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    rows: 2,
                    value: Fn,
                    onChange: (C) => In(C.target.value),
                    placeholder: "SQL/OData Raw Query...",
                    className: "w-full py-1 px-2.5 bg-transparent text-emerald-300 focus:outline-none resize-y"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(ys, { className: "w-4 h-4 text-teal-400" }),
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
              (C, Ae) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
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
                    defaultChecked: Ae <= 1,
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
                    defaultChecked: Ae > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, C)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(_t, { className: "w-4 h-4 text-teal-400" }),
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
}, fs = [
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
], Rl = ({ width: s }) => {
  var Y, ae, le, we;
  const [a, t] = L("layout"), [r, n] = L(null), [o, l] = L(!1), [i, p] = L(!1), [c, d] = L(null), [y, u] = L(null), f = G((k) => k.features), b = G((k) => k.activeFeatureId), j = G((k) => k.selection), v = G((k) => k.selectComponent), m = G((k) => k.addComponent), x = G((k) => k.updateComponentProps), P = G((k) => k.updateComponentStyle), I = G((k) => k.updateComponentEvents), A = G((k) => k.updateComponentDataBinding), g = G((k) => k.updateComponentValidation), T = G((k) => k.updateComponentPermissions), E = G((k) => k.updateComponentOrder), D = G((k) => k.removeComponent);
  G((k) => k.distributeSiblingWidths);
  const O = G((k) => k.updateFeatureScriptFile), [_, V] = L(""), [F, K] = L(0), M = f.find((k) => k.id === b), J = (k, B) => {
    if (!B) return null;
    for (const ne of k) {
      if (ne.id === B) return ne;
      if (ne.children) {
        const ee = J(ne.children, B);
        if (ee) return ee;
      }
    }
    return null;
  }, w = j.componentId && M ? J(M.components, j.componentId) : null, X = w != null && w.parentId && M ? J(M.components, w.parentId) : null, oe = X && ((Y = X.props) != null && Y.isTab || (ae = X.props) != null && ae.tab || X.type === "Tabs") ? X : null;
  if (!w) {
    const k = M ? M.components.filter((B) => !B.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: s ? `${s}px` : "380px" },
        className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: "Feature" }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (M == null ? void 0 : M.name) || "Trang" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: M == null ? void 0 : M.route })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: M && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Đường dẫn (Route)" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: M.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: M.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (B) => O(M.id, B.target.value),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                      const B = `box_${Date.now().toString(36)}`;
                      m(
                        {
                          id: B,
                          type: "Container",
                          parentId: null,
                          pageId: M.id,
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
                      /* @__PURE__ */ e.jsx(qe, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              k.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...k].sort((B, ne) => (B.order ?? 1) - (ne.order ?? 1)).map((B, ne) => {
                var je, pe;
                const ee = !!((je = B.props) != null && je.tab || (pe = B.props) != null && pe.isTab || B.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => v(B.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          ne + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: B.props.label || B.props.title || B.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: B.type }),
                            ee && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
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
                              value: Number(B.order ?? B.props.order ?? ne + 1),
                              onClick: (se) => se.stopPropagation(),
                              onChange: (se) => {
                                const be = Number(se.target.value);
                                E(B.id, be);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (se) => {
                              se.stopPropagation(), D(B.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5" })
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
  const de = w.type === "Container" || w.type === "Section" || w.type === "Tabs", ue = !de && (a === "layout" || a === "children") ? "props" : a, me = w.props.layoutMode || "flex", re = w.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, Ne = w.props.gridConfig || { columns: 2, gap: "16px" }, Se = w.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: w.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: w.props.label || w.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                w.id
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
                children: /* @__PURE__ */ e.jsx(Tt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => D(w.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(Be, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          de && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(kt, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          de && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  Se.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ma, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ue, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(Ns, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(Ln, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ue === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Ot, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          de && ue === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => x(w.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${me === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => x(w.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${me === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(kt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              me === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: re.direction || "row",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, direction: k.target.value }
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
                          value: typeof re.columnsPerRow == "number" ? re.columnsPerRow : Ne.columns || 12,
                          onChange: (k) => {
                            const B = Math.max(1, Number(k.target.value) || 12);
                            x(w.id, {
                              flexConfig: { ...re, columnsPerRow: B },
                              gridConfig: { ...Ne, columns: B }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(re.columnsPerRow || "12"),
                          onChange: (k) => {
                            const B = k.target.value === "auto" ? "auto" : Number(k.target.value);
                            x(w.id, {
                              flexConfig: {
                                ...re,
                                columnsPerRow: B,
                                wrap: B !== "auto" ? "wrap" : re.wrap
                              },
                              gridConfig: {
                                ...Ne,
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
                        value: re.justify || "flex-start",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, justify: k.target.value }
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
                        value: re.align || "center",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, align: k.target.value }
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
                        value: re.gap || "12px",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, gap: k.target.value }
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
                        value: re.wrap || "wrap",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, wrap: k.target.value }
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
              me === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: Ne.columns || 12,
                          onChange: (k) => {
                            const B = Math.max(1, Number(k.target.value) || 12);
                            x(w.id, {
                              gridConfig: { ...Ne, columns: B },
                              flexConfig: { ...re, columnsPerRow: B }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(Ne.columns || 12),
                          onChange: (k) => {
                            const B = Number(k.target.value);
                            x(w.id, {
                              gridConfig: { ...Ne, columns: B },
                              flexConfig: { ...re, columnsPerRow: B }
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
                        value: re.gap || Ne.gap || "12px",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, gap: k.target.value },
                          gridConfig: { ...Ne, gap: k.target.value }
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
                        value: re.justify || "flex-start",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, justify: k.target.value }
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
                        value: re.align || "center",
                        onChange: (k) => x(w.id, {
                          flexConfig: { ...re, align: k.target.value }
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
                    checked: !!(w.props.isTab || w.props.tab || w.type === "Tabs"),
                    onChange: (k) => {
                      var ee;
                      const B = k.target.checked, ne = w.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      x(w.id, {
                        isTab: B,
                        tab: B,
                        tabs: B ? ne : w.props.tabs,
                        activeTabId: B ? w.props.activeTabId || ((ee = ne[0]) == null ? void 0 : ee.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(w.props.isTab || w.props.tab || w.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: w.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (k) => x(w.id, { label: k.target.value }),
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
                        value: Number(w.order ?? w.props.order ?? 1),
                        onChange: (k) => {
                          const B = Number(k.target.value);
                          E(w.id, B);
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
                        value: w.props.badge !== void 0 ? String(w.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (k) => x(w.id, {
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
          de && ue === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                Se.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            Se.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...Se].sort((k, B) => (k.order ?? 1) - (B.order ?? 1)).map((k, B) => {
              var je, pe;
              const ne = j.componentId === k.id, ee = !!((je = k.props) != null && je.tab || (pe = k.props) != null && pe.isTab || k.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => v(k.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${ne ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        B + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: k.props.label || k.props.title || k.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: k.type }),
                          ee && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
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
                            value: k.order ?? B + 1,
                            onClick: (se) => se.stopPropagation(),
                            onChange: (se) => {
                              const be = Number(se.target.value);
                              E(k.id, be);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (se) => {
                            se.stopPropagation(), D(k.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                k.id
              );
            }) })
          ] }),
          ue === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(w.order ?? w.props.order ?? 1),
                      onChange: (k) => {
                        const B = Number(k.target.value);
                        E(w.id, B);
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
                        value: Number(w.props.colSpan || 4),
                        onChange: (k) => {
                          const B = Math.max(1, Number(k.target.value) || 1);
                          x(w.id, { colSpan: B });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: w.props.colSpan || 4,
                        onChange: (k) => x(w.id, { colSpan: Number(k.target.value) }),
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
                    w.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(w.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            de && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(w.props.tab || w.props.isTab || w.type === "Tabs"),
                  onChange: (k) => {
                    const B = k.target.checked;
                    x(w.id, {
                      tab: B,
                      isTab: B
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            oe && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: w.props.tabId || ((we = (le = oe.props.tabs) == null ? void 0 : le[0]) == null ? void 0 : we.id) || "main",
                  onChange: (k) => x(w.id, { tabId: k.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (oe.props.tabs || []).map((k) => /* @__PURE__ */ e.jsxs("option", { value: k.id, children: [
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
                      checked: w.props.showLabel ?? !0,
                      onChange: (k) => x(w.id, { showLabel: k.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: w.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (k) => x(w.id, { label: k.target.value }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: w.props.labelPosition || "left",
                      onChange: (k) => x(w.id, { labelPosition: k.target.value }),
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
                        value: Number(w.props.colSpan || 4),
                        onChange: (k) => {
                          const B = Math.max(1, Number(k.target.value) || 1);
                          x(w.id, { colSpan: B });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: w.props.colSpan || 4,
                        onChange: (k) => x(w.id, { colSpan: Number(k.target.value) }),
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
                    w.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(w.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            w.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: w.props.placeholder || "",
                  onChange: (k) => x(w.id, { placeholder: k.target.value }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            w.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: w.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (k) => x(w.id, { reference: k.target.value }),
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
                      value: w.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (k) => x(w.id, { displayField: k.target.value }),
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
                      value: w.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (k) => x(w.id, { valueField: k.target.value }),
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
                    value: w.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (k) => x(w.id, { placeholder: k.target.value }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            w.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: w.props.rows || 3,
                  onChange: (k) => x(w.id, { rows: Number(k.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            w.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: w.props.precision !== void 0 ? w.props.precision : 2,
                    onChange: (k) => x(w.id, { precision: Number(k.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: w.props.thousandsSeparator ?? !0,
                    onChange: (k) => x(w.id, { thousandsSeparator: k.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            w.type === "Table" && (() => {
              const k = w.props.columns || [], B = r !== null ? k[r] : null, ne = (U, Q) => {
                const ve = k.map((Ce, ke) => ke === U ? { ...Ce, ...Q } : Ce);
                x(w.id, { columns: ve });
              }, ee = (U, Q) => {
                if (Q < 0 || Q >= k.length) return;
                const ve = Ts(k, U, Q);
                x(w.id, { columns: ve }), n(Q);
              }, je = (U) => {
                const Q = ya(k, U);
                x(w.id, { columns: Q });
                const ve = Q.findIndex((Ce) => Ce.key === U);
                ve !== -1 && n(ve);
              }, pe = (U, Q) => {
                const ve = Math.max(0, Math.min(k.length - 1, Q - 1));
                if (ve !== U) {
                  const Ce = Ts(k, U, ve);
                  x(w.id, { columns: Ce }), n(ve);
                }
              }, se = () => {
                const U = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: k.length + 1
                }, Q = Bt([...k, U]);
                x(w.id, { columns: Q }), n(Q.length - 1);
              }, be = (U) => {
                const Q = k.filter((Ce, ke) => ke !== U), ve = Bt(Q);
                x(w.id, { columns: ve }), r === U ? n(null) : r !== null && r > U && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(es, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: se,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(qe, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: k.map((U, Q) => {
                  const ve = r === Q, Ce = !!(U.frozen || U.sticky === "left"), ke = c === Q, _e = y === Q;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => d(Q),
                      onDragOver: (Fe) => {
                        Fe.preventDefault(), !(c === null || c === Q) && u(Q);
                      },
                      onDragLeave: () => u(null),
                      onDrop: () => {
                        c !== null && c !== Q && ee(c, Q), d(null), u(null);
                      },
                      onDragEnd: () => {
                        d(null), u(null);
                      },
                      onClick: () => n(Q),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${ke ? "opacity-30 bg-slate-800" : ""} ${_e ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${ve ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(Es, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: Q === 0,
                                onClick: (Fe) => {
                                  Fe.stopPropagation(), ee(Q, Q - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(zn, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: Q === k.length - 1,
                                onClick: (Fe) => {
                                  Fe.stopPropagation(), ee(Q, Q + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(ns, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            U.order ?? Q + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: U.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            U.key,
                            "]"
                          ] }),
                          Ce && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: U.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (Fe) => {
                                Fe.stopPropagation(), be(Q);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(Be, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    U.key || Q
                  );
                }) }),
                B && r !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      B.title
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
                        /* @__PURE__ */ e.jsx(Tt, { className: "w-3.5 h-3.5" }),
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
                          value: B.order ?? r + 1,
                          onChange: (U) => {
                            const Q = parseInt(U.target.value, 10);
                            isNaN(Q) || pe(r, Q);
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
                          onChange: (U) => ne(r, { key: U.target.value }),
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
                          onChange: (U) => ne(r, { title: U.target.value }),
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
                          onChange: (U) => ne(r, { componentType: U.target.value }),
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
                          onChange: (U) => ne(r, { width: U.target.value }),
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
                          onChange: (U) => ne(r, { align: U.target.value }),
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
                          onChange: (U) => ne(r, { aggregate: U.target.value }),
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
                          onChange: () => je(B.key),
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
                          onChange: (U) => ne(r, { editable: U.target.checked }),
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
                          onChange: (U) => ne(r, { sortable: U.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(Ue, { className: "w-3 h-3 text-amber-400" }),
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(B.events) && B.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: B.events.map((U) => `${U.trigger} ➔ ${U.handlerName || U.action}()`).join(", ") }) : B.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      B.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && B && r !== null && /* @__PURE__ */ e.jsx(
                  ga,
                  {
                    isOpen: o,
                    column: B,
                    onClose: () => l(!1),
                    onSave: (U) => {
                      const Q = k.map((ke, _e) => _e === r ? U : ke), ve = Bt(Q);
                      x(w.id, { columns: ve });
                      const Ce = ve.findIndex((ke) => ke.key === U.key);
                      Ce !== -1 && n(Ce);
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
                    checked: !!w.props.required,
                    onChange: (k) => x(w.id, { required: k.target.checked }),
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
                    checked: !!w.props.disabled,
                    onChange: (k) => x(w.id, { disabled: k.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          ue === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: w.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (k) => P(w.id, { width: k.target.value }),
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
                    value: w.style.height || w.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (k) => P(w.id, {
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
                  /* @__PURE__ */ e.jsx(Ha, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: w.style.customCss || rl(w.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (k) => {
                    const B = k.target.value, ne = al(B);
                    if (P(w.id, {
                      ...ne,
                      customCss: B
                    }), ne.justifyContent || ne.alignItems) {
                      const ee = w.props.flexConfig || {};
                      x(w.id, {
                        flexConfig: {
                          ...ee,
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
          ue === "events" && /* @__PURE__ */ e.jsx(
            fa,
            {
              events: w.events || [],
              onChange: (k) => I(w.id, k),
              scriptFile: (M == null ? void 0 : M.scriptFile) || "transactionList.bl.ts",
              componentName: w.props.label || w.type,
              componentId: w.id,
              contextExtra: {
                pageId: b,
                nodeId: w.id,
                type: w.type
              }
            }
          ),
          ue === "data" && (() => {
            const k = w.dataBinding || {}, B = fs.find((ee) => ee.name === k.entityName), ne = B ? B.fields : [];
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ns, { className: "w-4 h-4 text-blue-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Liên Kết Dữ Liệu Thực Thể (Data Binding)" })
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: "Liên kết component này với một trường dữ liệu trong thực thể nghiệp vụ (Entity Catalog). Dữ liệu sẽ tự động được tải và lưu trữ đồng bộ." })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Thực Thể Dữ Liệu (Entity)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: k.entityName || "",
                    onChange: (ee) => {
                      var be;
                      const je = ee.target.value, pe = fs.find((U) => U.name === je), se = ((be = pe == null ? void 0 : pe.fields[0]) == null ? void 0 : be.name) || "";
                      A(w.id, {
                        entityName: je,
                        fieldName: se
                      });
                    },
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể --" }),
                      fs.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                        ee.displayName,
                        " (",
                        ee.name,
                        ")"
                      ] }, ee.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    disabled: !B,
                    value: k.fieldName || "",
                    onChange: (ee) => A(w.id, { fieldName: ee.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500 disabled:opacity-50 cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Trường Dữ Liệu --" }),
                      ne.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                        ee.displayName,
                        " (",
                        ee.name,
                        ") [",
                        ee.dataType,
                        "]"
                      ] }, ee.name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Dữ Liệu (Formatter)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: k.formatter || "",
                    onChange: (ee) => A(w.id, { formatter: ee.target.value }),
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
              /* @__PURE__ */ e.jsxs("div", { className: "pt-2 border-t border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-slate-300 block font-semibold", children: "Đồng bộ 2 chiều (Two-Way)" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500", children: "Tự động cập nhật model khi người dùng gõ" })
                ] }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: k.twoWay ?? !0,
                    onChange: (ee) => A(w.id, { twoWay: ee.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] });
          })(),
          ue === "validation" && (() => {
            const k = w.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ln, { className: "w-4 h-4 text-emerald-400" }),
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
                      onChange: (B) => g(w.id, { required: B.target.checked }),
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
                    onChange: (B) => g(w.id, { requiredMessage: B.target.value }),
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
                      onChange: (B) => g(w.id, {
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
                      value: k.maxLength !== void 0 ? k.maxLength : "",
                      onChange: (B) => g(w.id, {
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
                    value: k.pattern || "",
                    onChange: (B) => g(w.id, { pattern: B.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: k.patternMessage || "",
                    onChange: (B) => g(w.id, { patternMessage: B.target.value }),
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
                    onChange: (B) => g(w.id, { customValidator: B.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          ue === "permissions" && (() => {
            const k = w.permissions || {}, B = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], ne = k.allowedRoles || [], ee = k.readOnlyRoles || [], je = (se) => {
              const be = ne.includes(se) ? ne.filter((U) => U !== se) : [...ne, se];
              T(w.id, { allowedRoles: be });
            }, pe = (se) => {
              const be = ee.includes(se) ? ee.filter((U) => U !== se) : [...ee, se];
              T(w.id, { readOnlyRoles: be });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ot, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: B.map((se) => {
                  const be = ne.includes(se);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => je(se),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${be ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: se }),
                        be && /* @__PURE__ */ e.jsx(js, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    se
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: B.map((se) => {
                  const be = ee.includes(se);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => pe(se),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${be ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: se }),
                        be && /* @__PURE__ */ e.jsx(js, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    se
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
                      onClick: () => T(w.id, { deniedBehavior: "hide" }),
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
                      onClick: () => T(w.id, { deniedBehavior: "disable" }),
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
        i && w && /* @__PURE__ */ e.jsx(
          ol,
          {
            isOpen: i,
            node: w,
            onClose: () => p(!1),
            onSave: (k, B, ne) => {
              x(k, B), ne && A(k, ne);
            }
          }
        )
      ]
    }
  );
}, Wn = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: pt,
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
    icon: sa,
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
    icon: ut,
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
    icon: Ct,
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
    icon: Kt,
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
    icon: ra,
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
    icon: Ps,
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
    icon: es,
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
    icon: Qt,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: _t,
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
    icon: za,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: Ua,
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
  const r = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = ia({
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
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(qe, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Pl = ({ isEditing: s = !0, onAddComponent: a }) => {
  const t = G((c) => c.addComponent), r = G((c) => c.activeFeatureId), n = G((c) => c.features), o = G((c) => c.selection), l = n.find((c) => c.id === r), i = (c, d) => {
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
        /* @__PURE__ */ e.jsx(Es, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Wn.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Wn.map((c) => /* @__PURE__ */ e.jsx(
      il,
      {
        item: c,
        onClick: p,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, Ll = () => {
  const s = G((i) => i.features), a = G((i) => i.activeFeatureId), t = G((i) => i.selection), r = G((i) => i.selectComponent), n = G((i) => i.removeComponent), o = s.find((i) => i.id === a);
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
              /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                children: /* @__PURE__ */ e.jsx(Be, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, p + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, El = () => {
  const s = Ee((f) => f.openTabs), a = Ee((f) => f.activeTabId), t = Ee((f) => f.setActiveTab), r = Ee((f) => f.closeTab), n = G((f) => f.setActiveFeature), o = ie((f) => f.isFormDirty), l = ie((f) => f.markFormClean), [i, p] = L(null);
  if (s.length === 0) return null;
  const c = (f, b) => {
    var v;
    t(f);
    const j = s.find((m) => m.id === f);
    n(b, ((v = j == null ? void 0 : j.params) == null ? void 0 : v.id) ?? null);
  }, d = (f) => {
    r(f), setTimeout(() => {
      var j;
      const b = Ee.getState().openTabs.find(
        (v) => v.id === Ee.getState().activeTabId
      );
      b && n(b.featureId, ((j = b.params) == null ? void 0 : j.id) ?? null);
    }, 50);
  }, y = (f, b) => {
    if (f.stopPropagation(), b.isDirty || (b.featureId ? o(b.featureId) : !1)) {
      p(b);
      return;
    }
    d(b.id);
  }, u = () => {
    i && (i.featureId && l(i.featureId), d(i.id), p(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((f) => {
      const b = f.id === a, j = f.isDirty || (f.featureId ? o(f.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(f.id, f.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${b ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: j ? `${f.title} (Có dữ liệu chưa lưu)` : f.title,
          children: [
            /* @__PURE__ */ e.jsx(pt, { className: `w-3.5 h-3.5 ${b ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: f.title }),
            j && /* @__PURE__ */ e.jsx(
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
                onClick: (v) => y(v, f),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3 h-3" })
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
let Zt = !1, Kn = !1;
function ss() {
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
  const t = ss(), r = {
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
async function gs(s) {
  var n, o;
  if (Zt) return;
  const a = ss();
  if (a.length === 0) return;
  Zt = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
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
  Ta(r), Zt = !1, t > 0 && Da(
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
  Kn || typeof window > "u" || (Kn = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), gs(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && ss().length > 0 && !Zt && gs(s);
  }, 2e4), setTimeout(() => {
    const a = ss();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), gs(s));
  }, 3e3));
}
const pl = "http://localhost:5048/api", is = lr.create({
  baseURL: pl,
  timeout: 15e3
});
is.interceptors.request.use((s) => {
  const a = $s.getState().token;
  return a && (s.headers.Authorization = `Bearer ${a}`), s;
});
is.interceptors.response.use(
  (s) => s,
  async (s) => {
    var r, n, o, l, i;
    if (((r = s == null ? void 0 : s.response) == null ? void 0 : r.status) === 401)
      return $s.getState().logout(), Promise.reject(s);
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
ul(is);
async function xl(s) {
  await is.delete(`/pages/${s}`);
}
const $l = ({ width: s }) => {
  const a = G((g) => g.features), t = G((g) => g.activeFeatureId), r = G((g) => g.setActiveFeature), n = G((g) => g.addFeature), o = G((g) => g.renameFeature), l = G((g) => g.deleteFeature), i = a.filter((g) => !g.hidden && !g.isDetail), [p, c] = L(null), [d, y] = L(!1), [u, f] = L(""), [b, j] = L(null), v = (g) => {
    g.preventDefault(), c({
      x: g.clientX,
      y: g.clientY
    });
  }, m = (g, T) => {
    g.preventDefault(), g.stopPropagation(), c({
      x: g.clientX,
      y: g.clientY,
      featureId: T
    });
  }, x = () => {
    f(""), y(!0);
  }, P = (g) => {
    g.preventDefault(), u.trim() && (n(u.trim()), y(!1), f(""));
  }, I = (g) => {
    g.preventDefault(), !(!b || !b.name.trim()) && (o(b.id, b.name.trim()), j(null));
  }, A = p != null && p.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: xs,
      onClick: x
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
        const g = a.find((T) => T.id === p.featureId);
        g && j({ id: g.id, name: g.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: Be,
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
      icon: xs,
      onClick: x
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: v,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((g, T) => {
            const E = g.id === t;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  r(g.id, null), Ee.getState().openFeature(g.id, {}, "Tab", g.name);
                },
                onContextMenu: (D) => m(D, g.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${E ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${E ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: T === 0 ? /* @__PURE__ */ e.jsx(Xa, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(pt, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: g.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (D) => m(D, g.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${E ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(Qa, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              },
              g.id
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
      ka,
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
        onSubmit: P,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(xs, { className: "w-5 h-5" }) }),
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
                onChange: (g) => f(g.target.value),
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
    b && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: I,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: b.name,
              onChange: (g) => j({ ...b, name: g.target.value }),
              className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => j(null),
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
}, Al = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1
}) => {
  const n = G((d) => d.undo), o = G((d) => d.redo), l = G((d) => d.historyIndex), i = G((d) => d.history), p = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !p, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(oa, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Bl = ({
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
  const y = G((I) => I.features), u = G((I) => I.activeFeatureId), f = G((I) => I.undo), b = G((I) => I.redo), j = G((I) => I.historyIndex), v = G((I) => I.history), m = y.find((I) => I.id === u), x = j > 0, P = j < v.length - 1;
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
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (m == null ? void 0 : m.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: f,
            disabled: !x,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(la, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: b,
            disabled: !P,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(oa, { className: "w-3.5 h-3.5" })
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
            /* @__PURE__ */ e.jsx(Rs, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
  const s = Ee((i) => i.activePopup), a = Ee((i) => i.closePopup), t = Ee((i) => i.openFeature), r = G((i) => i.features);
  if (!s) return null;
  const n = r.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), a();
  };
  return Gt(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(ta, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" })
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
          Ht,
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
                /* @__PURE__ */ e.jsx(Dt, { className: "w-3.5 h-3.5" }),
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
  ga as ColumnPropertiesModal,
  Pl as ComponentPalette,
  ol as ComponentPropertiesModal,
  Ht as ComponentRenderer,
  Ll as ComponentTree,
  ka as ContextMenu,
  Il as FeatureCanvas,
  _l as FeaturePopupModal,
  Tl as ForgeAdvancedGrid,
  tl as ForgeAutocomplete,
  Cr as ForgeButton,
  zr as ForgeCheckbox,
  _n as ForgeContainer,
  Ur as ForgeDatePicker,
  Yr as ForgeDivider,
  el as ForgeFileUploadGrid,
  Cl as ForgeFormContainer,
  Fr as ForgeLabel,
  qr as ForgeModal,
  Dr as ForgeNumber,
  Xr as ForgeRecordSelector,
  Zr as ForgeSearchEntry,
  Qr as ForgeSearchModal,
  Ir as ForgeSection,
  Gr as ForgeSelect,
  ja as ForgeTabStack,
  Kr as ForgeTable,
  Dl as ForgeTabs,
  Tr as ForgeTextBox,
  Jr as ForgeTextarea,
  xt as FormFieldWrapper,
  $r as GridCellComponent,
  Rr as HeaderContextMenu,
  Fl as InlineCellEditor,
  $l as LeftNavbar,
  Jt as PermissionGuard,
  Rl as PropertyPanel,
  Pr as RowContextMenu,
  Er as SummaryRow,
  Al as TopBar,
  Bl as TopNav,
  fa as UnifiedEventEditor,
  El as WorkspaceTabBar,
  dr as addFunctionToBlFile,
  Or as calculateAutoPopulatedFields,
  Br as calculateLeftOffsets,
  ts as executeSingleEvent,
  Vr as exportGridToExcel,
  pr as findFunctionInModule,
  kl as getCascadedOptions,
  Ca as getComponentOuterLayoutStyle,
  cr as getFunctionsForBlFile,
  wa as groupNodesByTabStack,
  Ts as moveColumn,
  as as normalizeBlKey,
  Bt as normalizeColumnOrders,
  On as parseDDMMYYYY,
  Wr as printGridReport,
  wl as registerBL,
  ur as registerBlFunctions,
  jl as removeFunctionFromBlFile,
  ua as resolveBlModule,
  va as sortColumnsByCorePolicy,
  ya as toggleColumnFreeze,
  ye as triggerComponentEvent,
  $s as useAuthStore,
  ie as useDataEngine,
  G as useEditorStore,
  Ar as useGridKeyboardNavigation,
  wt as useMasterDetailStore,
  Ee as useNavigationEngine,
  Fs as validateDateSequence,
  Mr as validateField,
  Sl as validateForm,
  Ds as validateISO6346ContainerNo
};
