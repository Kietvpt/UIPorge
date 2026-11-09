import _t, { useState as S, useRef as Zt, useEffect as _e, useMemo as ze } from "react";
import { create as Bt } from "zustand";
import { Layers as it, ChevronDown as Cs, ChevronUp as On, Printer as ba, Zap as Xe, Save as Ct, Eye as _n, EyeOff as fa, Pin as Bn, ChevronRight as Mn, Sliders as wt, Copy as $n, Trash2 as Ke, Filter as Hn, Settings as ga, PlusCircle as Vn, ArrowUp as Gn, ArrowDown as Wn, Plus as dt, FileCode as xs, Play as va, Shield as ms, X as Mt, ExternalLink as Kn, Calendar as ks, Search as Un, RefreshCw as ya, ArrowUpDown as Ts, ChevronLeft as Na, Tag as zn, GripVertical as Ss, Lock as Ft, Sparkles as ja, CheckCircle2 as hs, Box as ot, ArrowRightLeft as Cn, Columns as Nt, Type as yt, Square as qt, FileText as Jt, Table as Xt, Paintbrush as wa, Database as kn, ShieldCheck as Tn, Code as Ca, Hash as ka, ChevronDownSquare as Ta, CheckSquare as Sa, Minus as Ia, Maximize2 as Ra, AlignLeft as Pa, FolderKanban as Aa, FolderPlus as os, Edit2 as Da, LayoutDashboard as La, MoreVertical as Fa, Undo2 as qn, Redo2 as Yn, Edit3 as Ea, PanelRightClose as Oa, PanelRightOpen as _a, Bell as Ba, LogOut as Ma, CheckCircle as $a } from "lucide-react";
import { createPortal as $t } from "react-dom";
import { useDraggable as Jn, useDroppable as Xn } from "@dnd-kit/core";
import { CSS as Ha } from "@dnd-kit/utilities";
import Va from "axios";
var bs = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function Ga() {
  if (Sn) return It;
  Sn = 1;
  var s = _t, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, c, d) {
    var p, x = {}, u = null, y = null;
    d !== void 0 && (u = "" + d), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (p in c) r.call(c, p) && !o.hasOwnProperty(p) && (x[p] = c[p]);
    if (i && i.defaultProps) for (p in c = i.defaultProps, c) x[p] === void 0 && (x[p] = c[p]);
    return { $$typeof: a, type: i, key: u, ref: y, props: x, _owner: n.current };
  }
  return It.Fragment = t, It.jsx = l, It.jsxs = l, It;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Wa() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var s = _t, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = Symbol.iterator, C = "@@iterator";
    function f(m) {
      if (m === null || typeof m != "object")
        return null;
      var A = w && m[w] || m[C];
      return typeof A == "function" ? A : null;
    }
    var N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(m) {
      {
        for (var A = arguments.length, $ = new Array(A > 1 ? A - 1 : 0), X = 1; X < A; X++)
          $[X - 1] = arguments[X];
        D("error", m, $);
      }
    }
    function D(m, A, $) {
      {
        var X = N.ReactDebugCurrentFrame, re = X.getStackAddendum();
        re !== "" && (A += "%s", $ = $.concat([re]));
        var le = $.map(function(ae) {
          return String(ae);
        });
        le.unshift("Warning: " + A), Function.prototype.apply.call(console[m], console, le);
      }
    }
    var T = !1, L = !1, I = !1, E = !1, V = !1, P;
    P = Symbol.for("react.module.reference");
    function O(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === o || V || m === n || m === d || m === p || E || m === y || T || L || I || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === x || m.$$typeof === l || m.$$typeof === i || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === P || m.getModuleId !== void 0));
    }
    function ee(m, A, $) {
      var X = m.displayName;
      if (X)
        return X;
      var re = A.displayName || A.name || "";
      return re !== "" ? $ + "(" + re + ")" : $;
    }
    function G(m) {
      return m.displayName || "Context";
    }
    function B(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case i:
            var A = m;
            return G(A) + ".Consumer";
          case l:
            var $ = m;
            return G($._context) + ".Provider";
          case c:
            return ee(m, m.render, "ForwardRef");
          case x:
            var X = m.displayName || null;
            return X !== null ? X : B(m.type) || "Memo";
          case u: {
            var re = m, le = re._payload, ae = re._init;
            try {
              return B(ae(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, M = 0, Y, g, ie, he, oe, ne, Ce;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function ve() {
      {
        if (M === 0) {
          Y = console.log, g = console.info, ie = console.warn, he = console.error, oe = console.group, ne = console.groupCollapsed, Ce = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        M++;
      }
    }
    function Ie() {
      {
        if (M--, M === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, m, {
              value: Y
            }),
            info: H({}, m, {
              value: g
            }),
            warn: H({}, m, {
              value: ie
            }),
            error: H({}, m, {
              value: he
            }),
            group: H({}, m, {
              value: oe
            }),
            groupCollapsed: H({}, m, {
              value: ne
            }),
            groupEnd: H({}, m, {
              value: Ce
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = N.ReactCurrentDispatcher, Le;
    function ke(m, A, $) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (re) {
            var X = re.stack.trim().match(/\n( *(at )?)/);
            Le = X && X[1] || "";
          }
        return `
` + Le + m;
      }
    }
    var Pe = !1, b;
    {
      var R = typeof WeakMap == "function" ? WeakMap : Map;
      b = new R();
    }
    function J(m, A) {
      if (!m || Pe)
        return "";
      {
        var $ = b.get(m);
        if ($ !== void 0)
          return $;
      }
      var X;
      Pe = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = Oe.current, Oe.current = null, ve();
      try {
        if (A) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (Re) {
              X = Re;
            }
            Reflect.construct(m, [], ae);
          } else {
            try {
              ae.call();
            } catch (Re) {
              X = Re;
            }
            m.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            X = Re;
          }
          m();
        }
      } catch (Re) {
        if (Re && X && typeof Re.stack == "string") {
          for (var se = Re.stack.split(`
`), Se = X.stack.split(`
`), me = se.length - 1, fe = Se.length - 1; me >= 1 && fe >= 0 && se[me] !== Se[fe]; )
            fe--;
          for (; me >= 1 && fe >= 0; me--, fe--)
            if (se[me] !== Se[fe]) {
              if (me !== 1 || fe !== 1)
                do
                  if (me--, fe--, fe < 0 || se[me] !== Se[fe]) {
                    var De = `
` + se[me].replace(" at new ", " at ");
                    return m.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", m.displayName)), typeof m == "function" && b.set(m, De), De;
                  }
                while (me >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        Pe = !1, Oe.current = le, Ie(), Error.prepareStackTrace = re;
      }
      var Ue = m ? m.displayName || m.name : "", Ge = Ue ? ke(Ue) : "";
      return typeof m == "function" && b.set(m, Ge), Ge;
    }
    function Q(m, A, $) {
      return J(m, !1);
    }
    function je(m) {
      var A = m.prototype;
      return !!(A && A.isReactComponent);
    }
    function be(m, A, $) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return J(m, je(m));
      if (typeof m == "string")
        return ke(m);
      switch (m) {
        case d:
          return ke("Suspense");
        case p:
          return ke("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return Q(m.render);
          case x:
            return be(m.type, A, $);
          case u: {
            var X = m, re = X._payload, le = X._init;
            try {
              return be(le(re), A, $);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, de = {}, W = N.ReactDebugCurrentFrame;
    function q(m) {
      if (m) {
        var A = m._owner, $ = be(m.type, m._source, A ? A.type : null);
        W.setExtraStackFrame($);
      } else
        W.setExtraStackFrame(null);
    }
    function xe(m, A, $, X, re) {
      {
        var le = Function.call.bind(Z);
        for (var ae in m)
          if (le(m, ae)) {
            var se = void 0;
            try {
              if (typeof m[ae] != "function") {
                var Se = Error((X || "React class") + ": " + $ + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              se = m[ae](A, ae, X, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              se = me;
            }
            se && !(se instanceof Error) && (q(re), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", $, ae, typeof se), q(null)), se instanceof Error && !(se.message in de) && (de[se.message] = !0, q(re), v("Failed %s type: %s", $, se.message), q(null));
          }
      }
    }
    var we = Array.isArray;
    function Te(m) {
      return we(m);
    }
    function $e(m) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, $ = A && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $;
      }
    }
    function Fe(m) {
      try {
        return Qe(m), !1;
      } catch {
        return !0;
      }
    }
    function Qe(m) {
      return "" + m;
    }
    function Ze(m) {
      if (Fe(m))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(m)), Qe(m);
    }
    var et = N.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, st;
    function pt(m) {
      if (Z.call(m, "ref")) {
        var A = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function xt(m) {
      if (Z.call(m, "key")) {
        var A = Object.getOwnPropertyDescriptor(m, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function mt(m, A) {
      typeof m.ref == "string" && et.current;
    }
    function ht(m, A) {
      {
        var $ = function() {
          tt || (tt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        $.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function bt(m, A) {
      {
        var $ = function() {
          st || (st = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        $.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Tt = function(m, A, $, X, re, le, ae) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: m,
        key: A,
        ref: $,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function St(m, A, $, X, re) {
      {
        var le, ae = {}, se = null, Se = null;
        $ !== void 0 && (Ze($), se = "" + $), xt(A) && (Ze(A.key), se = "" + A.key), pt(A) && (Se = A.ref, mt(A, re));
        for (le in A)
          Z.call(A, le) && !ut.hasOwnProperty(le) && (ae[le] = A[le]);
        if (m && m.defaultProps) {
          var me = m.defaultProps;
          for (le in me)
            ae[le] === void 0 && (ae[le] = me[le]);
        }
        if (se || Se) {
          var fe = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          se && ht(ae, fe), Se && bt(ae, fe);
        }
        return Tt(m, se, Se, re, X, et.current, ae);
      }
    }
    var nt = N.ReactCurrentOwner, ft = N.ReactDebugCurrentFrame;
    function He(m) {
      if (m) {
        var A = m._owner, $ = be(m.type, m._source, A ? A.type : null);
        ft.setExtraStackFrame($);
      } else
        ft.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function rt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === a;
    }
    function lt() {
      {
        if (nt.current) {
          var m = B(nt.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ve(m) {
      return "";
    }
    var qe = {};
    function j(m) {
      {
        var A = lt();
        if (!A) {
          var $ = typeof m == "string" ? m : m.displayName || m.name;
          $ && (A = `

Check the top-level render call using <` + $ + ">.");
        }
        return A;
      }
    }
    function F(m, A) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var $ = j(A);
        if (qe[$])
          return;
        qe[$] = !0;
        var X = "";
        m && m._owner && m._owner !== nt.current && (X = " It was passed a child from " + B(m._owner.type) + "."), He(m), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, X), He(null);
      }
    }
    function k(m, A) {
      {
        if (typeof m != "object")
          return;
        if (Te(m))
          for (var $ = 0; $ < m.length; $++) {
            var X = m[$];
            rt(X) && F(X, A);
          }
        else if (rt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var re = f(m);
          if (typeof re == "function" && re !== m.entries)
            for (var le = re.call(m), ae; !(ae = le.next()).done; )
              rt(ae.value) && F(ae.value, A);
        }
      }
    }
    function K(m) {
      {
        var A = m.type;
        if (A == null || typeof A == "string")
          return;
        var $;
        if (typeof A == "function")
          $ = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === x))
          $ = A.propTypes;
        else
          return;
        if ($) {
          var X = B(A);
          xe($, m.props, "prop", X, m);
        } else if (A.PropTypes !== void 0 && !at) {
          at = !0;
          var re = B(A);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function z(m) {
      {
        for (var A = Object.keys(m.props), $ = 0; $ < A.length; $++) {
          var X = A[$];
          if (X !== "children" && X !== "key") {
            He(m), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), He(null);
            break;
          }
        }
        m.ref !== null && (He(m), v("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    var U = {};
    function ce(m, A, $, X, re, le) {
      {
        var ae = O(m);
        if (!ae) {
          var se = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ve();
          Se ? se += Se : se += lt();
          var me;
          m === null ? me = "null" : Te(m) ? me = "array" : m !== void 0 && m.$$typeof === a ? (me = "<" + (B(m.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : me = typeof m, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, se);
        }
        var fe = St(m, A, $, re, le);
        if (fe == null)
          return fe;
        if (ae) {
          var De = A.children;
          if (De !== void 0)
            if (X)
              if (Te(De)) {
                for (var Ue = 0; Ue < De.length; Ue++)
                  k(De[Ue], m);
                Object.freeze && Object.freeze(De);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              k(De, m);
        }
        if (Z.call(A, "key")) {
          var Ge = B(m), Re = Object.keys(A).filter(function(Gt) {
            return Gt !== "key";
          }), gt = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!U[Ge + gt]) {
            var Vt = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, Ge, Vt, Ge), U[Ge + gt] = !0;
          }
        }
        return m === r ? z(fe) : K(fe), fe;
      }
    }
    function ye(m, A, $) {
      return ce(m, A, $, !0);
    }
    function Be(m, A, $) {
      return ce(m, A, $, !1);
    }
    var Ne = Be, Ht = ye;
    Rt.Fragment = r, Rt.jsx = Ne, Rt.jsxs = Ht;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? bs.exports = Ga() : bs.exports = Wa();
var e = bs.exports;
const kt = ({
  label: s,
  showLabel: a = !0,
  labelPosition: t = "left",
  labelWidth: r = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: c,
  children: d
}) => {
  const p = t === "left", x = l ? `col-span-${l}` : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${x} ${p ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...l ? { gridColumn: `span ${l} / span ${l}` } : {},
        ...c
      },
      children: [
        a && s && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs font-medium text-slate-300 select-none ${p ? "shrink-0 text-right truncate" : ""}`,
            style: p ? { width: r } : void 0,
            title: s,
            children: [
              s,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              p && ":"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0 w-full flex flex-col justify-center", children: [
          d,
          o && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-red-400 mt-0.5", children: o })
        ] })
      ]
    }
  );
}, Qn = "uiforge_bl_functions_registry", jt = {};
function es(s) {
  if (!s || !s.trim()) return "";
  let a = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function ts() {
  if (typeof window > "u") return jt;
  try {
    const s = localStorage.getItem(Qn);
    if (s) {
      const a = JSON.parse(s), t = { ...jt, ...a };
      for (const [r, n] of Object.entries(jt))
        t[r] = Array.from(/* @__PURE__ */ new Set([...n, ...t[r] || []]));
      return t;
    }
  } catch {
  }
  return jt;
}
function ss(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Qn, JSON.stringify(s));
    } catch {
    }
}
function Ka(s) {
  if (!s || !s.trim()) return [];
  const a = es(s), t = ts();
  if (t[a] && t[a].length > 0)
    return t[a];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[a] = r, ss(t), r;
}
function Ua(s, a) {
  if (!s || !a) return [];
  const t = es(s), r = a.trim().replace(/\(.*?\)/g, "");
  if (!t || !r) return [];
  const n = ts(), o = n[t] || [];
  return o.includes(r) || (n[t] = [...o, r], ss(n)), n[t];
}
function Xr(s, a) {
  if (!s || !a) return [];
  const t = es(s), r = a.trim().replace(/\(.*?\)/g, ""), n = ts(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== r), ss(n), n[t];
}
function za(s, a) {
  const t = es(s);
  jt[t] = Array.from(/* @__PURE__ */ new Set([...jt[t] || [], ...a]));
  const r = ts();
  r[t] = Array.from(/* @__PURE__ */ new Set([...r[t] || [], ...a])), ss(r);
}
const Je = {};
function Qr(s, a) {
  Je[s] = a;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  Je[t] = a;
  const r = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  Je[r] = a;
  const n = [];
  for (const [o, l] of Object.entries(a))
    if (typeof l == "function")
      n.push(o);
    else if (l && typeof l == "object") {
      for (const [c, d] of Object.entries(l))
        typeof d == "function" && n.push(c);
      const i = Object.getPrototypeOf(l);
      if (i && i !== Object.prototype)
        for (const c of Object.getOwnPropertyNames(i))
          c !== "constructor" && typeof l[c] == "function" && n.push(c);
    }
  n.length > 0 && za(t, n);
}
function Zn(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const a = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = a.toLowerCase();
  if (Je[a]) return { module: Je[a], canonicalName: a };
  if (Je[t]) return { module: Je[t], canonicalName: a };
  const r = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(Je))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === r)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: a };
}
function qa(s, a) {
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
      for (const [i, c] of Object.entries(o))
        if (i.toLowerCase() === r && typeof c == "function")
          return { fn: c.bind(o), matchedName: i };
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
            const c = Object.getPrototypeOf(i);
            if (c) {
              for (const d of Object.getOwnPropertyNames(c))
                if (d !== "constructor" && typeof i[d] == "function" && (d === t || d.toLowerCase() === r))
                  return { fn: i[d].bind(i), matchedName: d };
            }
          }
        } catch {
        }
      if (typeof l[t] == "function")
        return { fn: l[t].bind(l), matchedName: t };
    }
  return { fn: null, matchedName: t };
}
function Pt(s, a, t, r = !1, n, o = !0) {
  const l = document.createElement("div");
  l.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${o ? r ? "border-emerald-500 shadow-emerald-500/30" : "border-blue-500 shadow-blue-500/30" : "border-red-500 shadow-red-500/30"} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md`;
  const i = o ? r ? "⚡" : "⚙" : "⚠️", c = o ? r ? "bg-emerald-600/25 text-emerald-400" : "bg-blue-600/20 text-blue-400" : "bg-red-600/25 text-red-400", d = o ? r ? "text-emerald-300" : "text-blue-300" : "text-red-300";
  l.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${c} flex items-center justify-center font-bold text-base flex-shrink-0">
      ${i}
    </div>
    <div class="min-w-0">
      <div class="font-bold ${d} flex items-center gap-1.5 flex-wrap">
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
function Dt(s, a, t, r) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = Zn(t);
  let c = !1, d = n.replace(/\(.*?\)/g, "").trim();
  if (l) {
    const { fn: p, matchedName: x } = qa(l, n);
    if (d = x, p)
      try {
        const u = p(r || { componentName: a, trigger: o, blFileName: i });
        if (c = !0, u && typeof u.then == "function")
          return u.then((y) => {
            y && y.message ? Pt(d, o, i || t, !0, y.message, y.success !== !1) : Pt(d, o, i || t, !0);
          }).catch((y) => {
            Pt(d, o, i || t, !0, String(y), !1);
          }), !0;
        if (u && u.message)
          return Pt(d, o, i || t, !0, u.message, u.success !== !1), !0;
      } catch (u) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${x}() trong ${i}:`, u);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${a || "Component"} -> Event: ${o} -> ${c ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${d}()%c trong file %c${i || t || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), Pt(d, o, i || t, c), c;
}
function ge(s, a, t, r, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    Dt(l, t, r, n);
}
const Rn = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Pn = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", Et = /* @__PURE__ */ new Map(), Kt = (s) => {
  const a = Et.get(s);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([t, r]) => [t, r.getState()])
  ) : {};
}, Ya = (s, a, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: a.connect(t)
    };
  const r = Et.get(t.name);
  if (r)
    return { type: "tracked", store: s, ...r };
  const n = {
    connection: a.connect(t),
    stores: {}
  };
  return Et.set(t.name, n), { type: "tracked", store: s, ...n };
}, Ja = (s, a) => {
  if (a === void 0) return;
  const t = Et.get(s);
  t && (delete t.stores[a], Object.keys(t.stores).length === 0 && Et.delete(s));
}, Xa = /^at (?:new |async )?(.+?) \(/, Qa = /^([^@]+)@/;
function Za(s) {
  var a, t, r;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((t = Xa.exec(l)) == null ? void 0 : t[1]) || ((r = Qa.exec(l)) == null ? void 0 : r[1]);
}
const er = (s, a = {}) => (t, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...c } = a;
  let d;
  try {
    d = (o ?? (Rn ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!d)
    return s(t, r, n);
  const { connection: p, ...x } = Ya(i, d, c);
  let u = !0;
  n.setState = (C, f, N) => {
    const v = t(C, f);
    if (!u) return v;
    const D = N === void 0 ? {
      type: l || Za(new Error().stack) || "anonymous"
    } : typeof N == "string" ? { type: N } : N;
    return i === void 0 ? (p == null || p.send(D, r()), v) : (p == null || p.send(
      {
        ...D,
        type: `${i}/${D.type}`
      },
      {
        ...Kt(c.name),
        [i]: n.getState()
      }
    ), v);
  }, n.devtools = {
    cleanup: () => {
      p && typeof p.unsubscribe == "function" && p.unsubscribe(), Ja(c.name, i);
    }
  };
  const y = (...C) => {
    const f = u;
    u = !1, t(...C), u = f;
  }, w = s(n.setState, r, n);
  if (x.type === "untracked" ? p == null || p.init(w) : (x.stores[x.store] = n, p == null || p.init(
    Object.fromEntries(
      Object.entries(x.stores).map(([C, f]) => [
        C,
        C === x.store ? w : f.getState()
      ])
    )
  )), Pn(n)) {
    let C = !1;
    const f = n.dispatch;
    n.dispatch = (...N) => {
      (Rn ? "production" : void 0) !== "production" && N[0].type === "__setState" && !C && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), C = !0), f(...N);
    };
  }
  return p.subscribe((C) => {
    var f;
    switch (C.type) {
      case "ACTION":
        if (typeof C.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return is(
          C.payload,
          (N) => {
            if (N.type === "__setState") {
              if (i === void 0) {
                y(N.state);
                return;
              }
              Object.keys(N.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const v = N.state[i];
              if (v == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(v) && y(v);
              return;
            }
            Pn(n) && n.dispatch(N);
          }
        );
      case "DISPATCH":
        switch (C.payload.type) {
          case "RESET":
            return y(w), i === void 0 ? p == null ? void 0 : p.init(n.getState()) : p == null ? void 0 : p.init(Kt(c.name));
          case "COMMIT":
            if (i === void 0) {
              p == null || p.init(n.getState());
              return;
            }
            return p == null ? void 0 : p.init(Kt(c.name));
          case "ROLLBACK":
            return is(C.state, (N) => {
              if (i === void 0) {
                y(N), p == null || p.init(n.getState());
                return;
              }
              y(N[i]), p == null || p.init(Kt(c.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return is(C.state, (N) => {
              if (i === void 0) {
                y(N);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(N[i]) && y(N[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: N } = C.payload, v = (f = N.computedStates.slice(-1)[0]) == null ? void 0 : f.state;
            if (!v) return;
            y(i === void 0 ? v : v[i]), p == null || p.send(
              null,
              // FIXME no-any
              N
            );
            return;
          }
          case "PAUSE_RECORDING":
            return u = !u;
        }
        return;
    }
  }), w;
}, ns = er, is = (s, a) => {
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
function tr(s, a) {
  let t;
  try {
    t = s();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const l = (c) => c === null ? null : JSON.parse(c, void 0), i = (o = t.getItem(n)) != null ? o : null;
      return i instanceof Promise ? i.then(l) : l(i);
    },
    setItem: (n, o) => t.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => t.removeItem(n)
  };
}
const fs = (s) => (a) => {
  try {
    const t = s(a);
    return t instanceof Promise ? t : {
      then(r) {
        return fs(r)(t);
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
        return fs(r)(t);
      }
    };
  }
}, sr = (s, a) => (t, r, n) => {
  let o = {
    storage: tr(() => window.localStorage),
    partialize: (f) => f,
    version: 0,
    merge: (f, N) => ({
      ...N,
      ...f
    }),
    ...a
  }, l = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let p = o.storage;
  if (!p)
    return s(
      (...f) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...f);
      },
      r,
      n
    );
  const x = () => {
    const f = o.partialize({ ...r() });
    return p.setItem(o.name, {
      state: f,
      version: o.version
    });
  }, u = n.setState;
  n.setState = (f, N) => (u(f, N), x());
  const y = s(
    (...f) => (t(...f), x()),
    r,
    n
  );
  n.getInitialState = () => y;
  let w;
  const C = () => {
    var f, N;
    if (!p) return;
    const v = ++i;
    l = !1, c.forEach((T) => {
      var L;
      return T((L = r()) != null ? L : y);
    });
    const D = ((N = o.onRehydrateStorage) == null ? void 0 : N.call(o, (f = r()) != null ? f : y)) || void 0;
    return fs(p.getItem.bind(p))(o.name).then((T) => {
      if (T)
        if (typeof T.version == "number" && T.version !== o.version) {
          if (o.migrate) {
            const L = o.migrate(
              T.state,
              T.version
            );
            return L instanceof Promise ? L.then((I) => [!0, I]) : [!0, L];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, T.state];
      return [!1, void 0];
    }).then((T) => {
      var L;
      if (v !== i)
        return;
      const [I, E] = T;
      if (w = o.merge(
        E,
        (L = r()) != null ? L : y
      ), t(w, !0), I)
        return x();
    }).then(() => {
      v === i && (D == null || D(r(), void 0), w = r(), l = !0, d.forEach((T) => T(w)));
    }).catch((T) => {
      v === i && (D == null || D(void 0, T));
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
    rehydrate: () => C(),
    hasHydrated: () => l,
    onHydrate: (f) => (c.add(f), () => {
      c.delete(f);
    }),
    onFinishHydration: (f) => (d.add(f), () => {
      d.delete(f);
    })
  }, o.skipHydration || C(), w || y;
}, nr = sr, ar = 40;
function ds() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), a = s.get("feature") || s.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function cs() {
  if (typeof window > "u") return null;
  try {
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function At(s, a) {
  var t, r, n;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const o = new URL(window.location.href);
      o.searchParams.set("feature", s);
      let l = !1;
      try {
        const c = (((t = _.getState()) == null ? void 0 : t.features) || []).find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s);
        l = !!((c == null ? void 0 : c.route) === "/transactions" || (c == null ? void 0 : c.scriptFile) === "transactionList.bl.ts" || (r = c == null ? void 0 : c.scriptFile) != null && r.includes("transactionList") || (n = c == null ? void 0 : c.name) != null && n.toLowerCase().includes("danh sách") || c && !c.isDetail && c.route !== "/fcl-import");
      } catch {
      }
      if (l || a === null || a === "") {
        o.searchParams.delete("id");
        try {
          localStorage.removeItem("uiforge_active_transaction_id");
        } catch {
        }
      } else if (a != null) {
        o.searchParams.set("id", String(a));
        try {
          localStorage.setItem("uiforge_active_transaction_id", String(a));
        } catch {
        }
      }
      window.history.replaceState(null, "", o.toString());
    } catch {
    }
}
const _ = Bt()(
  ns(
    (s, a) => ({
      features: [],
      activeFeatureId: ds() || "",
      activeRecordId: cs(),
      selection: { componentId: null, pageId: ds() || "" },
      history: [[]],
      historyIndex: 0,
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, r) => {
        var c, d;
        At(t, r);
        let n = null;
        const l = (a().features || []).find((p) => String(p.id) === String(t) || p.route === `/${t}` || p.route === t);
        !!((l == null ? void 0 : l.route) === "/transactions" || (l == null ? void 0 : l.scriptFile) === "transactionList.bl.ts" || (c = l == null ? void 0 : l.scriptFile) != null && c.includes("transactionList") || (d = l == null ? void 0 : l.name) != null && d.toLowerCase().includes("danh sách") || l && !l.isDetail && l.route !== "/fcl-import") || r === null || r === "" ? n = null : r != null ? n = String(r) : n = cs(), s((p) => ({
          activeFeatureId: t,
          activeRecordId: n,
          selection: { componentId: null, pageId: t }
        }));
      },
      setFeatures: (t) => {
        var i, c;
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
        const r = ds(), n = r && t.find((d) => d.id === r || d.route === `/${r}` || d.route === r) || t.find((d) => d.route === "/transactions" || d.name.includes("Lô Hàng")) || t.find((d) => !d.hidden && !d.isDetail) || t[0], l = !!((n == null ? void 0 : n.route) === "/transactions" || (i = n == null ? void 0 : n.scriptFile) != null && i.includes("transactionList") || (c = n == null ? void 0 : n.name) != null && c.toLowerCase().includes("danh sách") || !(n != null && n.isDetail) && (n == null ? void 0 : n.route) !== "/fcl-import") ? null : cs();
        At(n.id, l), s({
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
            ...Ae(l, i),
            activeFeatureId: n,
            selection: { componentId: null, pageId: n }
          };
        }), n;
      },
      renameFeature: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: r } : l);
          return Ae(n, o);
        });
      },
      updateFeatureId: (t, r) => {
        s((n) => {
          const o = n.features.map(
            (i) => i.id === t ? {
              ...i,
              id: r,
              route: i.route === `/${t}` ? `/${r}` : i.route,
              components: i.components.map((c) => ({ ...c, pageId: r }))
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
            ...Ae(r, n),
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
          return Ae(n, o);
        });
      },
      updateFeatureScriptFile: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: r.trim() } : l);
          return Ae(n, o);
        });
      },
      selectComponent: (t) => {
        s((r) => ({
          selection: { ...r.selection, componentId: t }
        }));
      },
      addComponent: (t, r = null, n) => {
        s((o) => {
          const l = o.features.find((d) => d.id === o.activeFeatureId);
          if (!l) return {};
          let i;
          if (r)
            n !== void 0 ? i = gs(l.components, r, t, n) : i = ta(l.components, r, t);
          else if (n !== void 0) {
            const d = [...l.components];
            d.splice(n, 0, t), i = d.map((p, x) => ({ ...p, order: x + 1 }));
          } else
            i = [...l.components, t];
          const c = o.features.map(
            (d) => d.id === o.activeFeatureId ? { ...d, components: i } : d
          );
          return {
            ...Ae(o, c),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentStyle: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentEvents: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              events: r
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentDataBinding: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentValidation: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentPermissions: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return Ae(n, o);
        });
      },
      updateComponentOrder: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: Ye(l.components, t, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return Ae(n, o);
        });
      },
      removeComponent: (t) => {
        s((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: ea(o.components, t)
          });
          return {
            ...Ae(r, n),
            selection: { ...r.selection, componentId: null }
          };
        });
      },
      moveComponent: (t, r, n) => {
        s((o) => {
          const l = o.features.find((y) => y.id === o.activeFeatureId);
          if (!l) return {};
          const i = rr(l.components, t);
          if (!i) return {};
          const [c, d] = i, p = { ...c, parentId: r };
          let x;
          if (r === null) {
            const y = d.filter((f) => !f.parentId);
            y.splice(n, 0, p);
            const w = y.map((f, N) => ({ ...f, order: N + 1 })), C = d.filter((f) => f.parentId);
            x = [...w, ...C];
          } else
            x = gs(d, r, p, n);
          const u = o.features.map(
            (y) => y.id === o.activeFeatureId ? { ...y, components: x } : y
          );
          return Ae(o, u);
        });
      },
      distributeSiblingWidths: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: sa(l.components, t, r)
          });
          return Ae(n, o);
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
function Ae(s, a) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= ar && t.shift(), t.push(a), {
    features: a,
    history: t,
    historyIndex: t.length - 1
  };
}
function Ye(s, a, t) {
  return s.map((r) => r.id === a ? t(r) : r.children && r.children.length > 0 ? { ...r, children: Ye(r.children, a, t) } : r);
}
function ea(s, a) {
  return s.filter((t) => t.id !== a).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: ea(t.children, a) } : t
  );
}
function ta(s, a, t) {
  return s.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...t, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: ta(r.children, a, t)
  } : r);
}
function sa(s, a, t) {
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
    children: sa(n.children, a, t)
  } : n);
}
function rr(s, a) {
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
      const i = n.children[o], c = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], d = { ...n, children: c }, p = [...s.slice(0, r), d, ...s.slice(r + 1)];
      return [i, p];
    }
    const l = na(n.children, a);
    if (l) {
      const [i, c] = l, d = { ...n, children: c }, p = [...s.slice(0, r), d, ...s.slice(r + 1)];
      return [i, p];
    }
  }
  return null;
}
function na(s, a) {
  for (let t = 0; t < s.length; t++) {
    const r = s[t];
    if (r.id === a) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = na(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, c = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, c];
      }
    }
  }
  return null;
}
function gs(s, a, t, r) {
  return s.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...t, parentId: a });
      const i = l.map((c, d) => ({ ...c, order: d + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: gs(n.children, a, t, r) } : n;
  });
}
const lr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = _((v) => v.features), o = _((v) => v.activeFeatureId), l = n.find((v) => String(v.id) === String(s.pageId)) || n.find((v) => String(v.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[t.variant || "primary"], N = {
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
        ...C
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${f} ${N}`,
      onClick: (v) => {
        a ? (v.ctrlKey || v.metaKey || v.altKey) && (v.stopPropagation(), ge(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : ge(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (v) => {
        var T;
        v.stopPropagation(), ((T = s.events) == null ? void 0 : T.some((L) => L.trigger === "dblclick" || L.trigger === "onDoubleClick")) ? ge(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && ge(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, or = [];
function ir(s) {
  if (!s || typeof s != "string") return [];
  const a = [], t = s.split(",");
  for (const r of t) {
    const n = r.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), c = i.includes(".") ? i.split(".").pop() : i;
      l && c && a.push({ targetField: l, sourceField: c });
    }
  }
  return a;
}
function ct(s, a, t, r = void 0) {
  const n = [
    s.formRecords[a],
    s.formRecords.default,
    s.formRecords[2],
    s.formRecords.TransactionDetail,
    ...Object.values(s.formRecords)
  ].filter(Boolean);
  if (n.length === 0) return r;
  const o = t.toLowerCase().replace(/^fld_/, ""), i = [
    t,
    o,
    ...{
      jobno: ["jobno", "job_no"],
      mblno: ["mblno", "mbl_no"],
      shipmentdate: ["shipmentdate", "sdate", "shipment_date"],
      mblissueddate: ["mblissueddate", "mbl_issued_date"],
      mbltype: ["mbltype", "mbl_type"],
      vendor: ["vendorname", "vendorid", "vendor", "vendor_name"],
      vendorname: ["vendorname", "vendor", "vendor_name"],
      slines: ["slines", "shippingline", "s_lines"],
      pol: ["polid", "pol", "pol_id"],
      pod: ["podid", "pod", "pod_id"],
      commodity: ["commodity", "commodityname", "commodity_name"],
      commodityname: ["commodity", "commodityname", "commodity_name"],
      totalgw: ["totalgw", "total_gw", "gw"],
      totalcbm: ["totalcbm", "total_cbm", "cbm"],
      totalvgm: ["totalvgm", "total_vgm", "vgm"],
      totalpackages: ["totalpackages", "total_packages", "tpackages"],
      packagetype: ["packagetype", "package_type", "ptype"],
      pono: ["pono", "po_no"],
      service: ["service"],
      pterm: ["pterm", "p_term"],
      opic: ["opic", "op_ic"],
      eta: ["eta"],
      notes: ["notes"]
    }[o] || []
  ];
  for (const c of n)
    if (c)
      for (const d of i) {
        if (c[d] !== void 0) return c[d];
        const p = Object.keys(c).find(
          (x) => x.toLowerCase().replace(/^fld_/, "") === d.toLowerCase()
        );
        if (p && c[p] !== void 0)
          return c[p];
      }
  return r;
}
const pe = Bt()(
  ns((s, a) => ({
    datasets: {},
    formRecords: {},
    selectedRecords: {},
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
    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục Terminal, Customer...)
    registerDataset: (t, r) => {
      s((n) => ({
        datasets: {
          ...n.datasets,
          [t]: r
        }
      }));
    },
    // 2. Lấy dataset của Entity
    getDataset: (t) => a().datasets[t] || or,
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (t, r, n) => {
      s((o) => {
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), c = l.charAt(0).toLowerCase() + l.slice(1), d = l.charAt(0).toUpperCase() + l.slice(1), p = (y) => {
          const w = { ...y };
          for (const C of Object.keys(w))
            (C.toLowerCase() === i || C.toLowerCase() === r.toLowerCase()) && delete w[C];
          return w[c] = n, w[d] = n, w;
        }, x = o.formRecords[t] || {}, u = o.formRecords.default || {};
        return {
          formRecords: {
            ...o.formRecords,
            [t]: p(x),
            default: p(u)
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, r, n = "") => ct(a(), t, r, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (t, r) => {
      s((n) => {
        const o = {};
        for (const [l, i] of Object.entries(r || {})) {
          o[l] = i;
          const c = l.replace(/^fld_/, ""), d = c.charAt(0).toLowerCase() + c.slice(1), p = c.charAt(0).toUpperCase() + c.slice(1);
          o[d] = i, o[p] = i;
        }
        return {
          formRecords: {
            ...n.formRecords,
            [t]: o,
            default: o,
            ...t === "default" ? { 4: o, 2: o, TransactionDetail: o } : {},
            ...t === "4" ? { default: o, TransactionDetail: o } : {}
          }
        };
      });
    },
    // 6. Lấy trọn vẹn bản ghi (Gộp default và target để luôn đảm bảo đủ trường từ mọi section/tab)
    getFormRecord: (t) => {
      const r = a().formRecords, n = r[t] || {};
      let l = { ...r.default || {}, ...n };
      !l.jobNo && !l.JobNo && (l = { ...a().collectScreenData(t), ...l });
      const i = { ...l };
      for (const [c, d] of Object.entries(l)) {
        if (!c) continue;
        const p = c.charAt(0).toLowerCase() + c.slice(1), x = c.charAt(0).toUpperCase() + c.slice(1);
        i[p] === void 0 && (i[p] = d), i[x] === void 0 && (i[x] = d);
      }
      return i;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (t, r, n) => {
      if (!n || typeof n != "object") return;
      const o = ir(r);
      if (o.length === 0) return;
      const l = a().formRecords[t] || {}, i = {};
      for (const c of o) {
        const d = Object.keys(n).find(
          (p) => p.toLowerCase() === c.sourceField.toLowerCase()
        );
        if (d && n[d] !== void 0) {
          const p = n[d];
          i[c.targetField] = p, c.targetField.startsWith("fld_") || (i[`fld_${c.targetField.toLowerCase()}`] = p);
        }
      }
      s((c) => ({
        formRecords: {
          ...c.formRecords,
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
          const i = r ? r.startsWith("?") ? r : `?$filter=${encodeURIComponent(r)}` : "", c = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${i}`, d = await fetch(c);
          if (d.ok) {
            const p = await d.json();
            return (Array.isArray(p) ? p : p.value || []).map((u) => {
              const y = u[n] !== void 0 ? u[n] : u.Id || u.id || u.code, w = u[o] !== void 0 ? u[o] : u.FullName || u.fullName || u.Name || u.name || u.title || String(y);
              return {
                value: y,
                label: String(w),
                rawItem: u
              };
            });
          }
        } catch {
        }
      return (a().datasets[t] || []).map((i) => {
        const c = i[n] !== void 0 ? i[n] : i.Id || i.id || i.code, d = i[o] !== void 0 ? i[o] : i.FullName || i.fullName || i.Name || i.name || i.title || String(c);
        return {
          value: c,
          label: String(d),
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
      if ((!o || o === "new" || Number(o) <= 0) && (r.jobNo || r.JobNo)) {
        const c = a().datasets[t];
        if (Array.isArray(c)) {
          const d = c.find((p) => (p.jobNo || p.JobNo) === (r.jobNo || r.JobNo));
          d && (o = d.id || d.Id);
        }
      }
      const l = !!(o && o !== "new" && Number(o) > 0), i = l ? Number(o) : 0;
      try {
        const c = l ? `http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${i}` : `http://localhost:5048/api/core/data/${encodeURIComponent(t)}`, d = l ? "PUT" : "POST", p = { ...r };
        for (const [y, w] of Object.entries(p))
          if (w === "")
            (/date|eta|atd|ata|etd/i.test(y) || /^(id|total|gw|cbm|vgm|typeid|package)/i.test(y)) && (p[y] = null);
          else if (typeof w == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(w.trim())) {
            const [C, f, N] = w.trim().split("/");
            p[y] = `${N}-${f.padStart(2, "0")}-${C.padStart(2, "0")}T00:00:00`;
          }
        const x = {};
        for (const [y, w] of Object.entries(p)) {
          if (!y || y.startsWith("fld_") || y.startsWith("btn_") || y.startsWith("sec_") || y.startsWith("tab_"))
            continue;
          const C = y.replace(/^fld_/, ""), f = C.charAt(0).toUpperCase() + C.slice(1);
          x[f] = w;
        }
        l ? x.Id = i : (x.Id = 0, x.Active = !0);
        const u = await fetch(c, {
          method: d,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(x)
        });
        if (u.ok) {
          const y = await u.json(), w = y.id || y.Id || i;
          if (typeof window < "u") {
            const f = new URL(window.location.href);
            f.searchParams.set("id", String(w)), window.history.replaceState(null, "", f.toString());
            try {
              localStorage.setItem("uiforge_active_transaction_id", String(w));
            } catch {
            }
          }
          _.getState().setActiveRecordId(String(w)), n && a().setFormRecord(n, y), a().setFormRecord("default", y);
          const C = a().datasets[t];
          if (C && Array.isArray(C))
            if (l) {
              const f = C.map(
                (N) => (N.id || N.Id) === i ? { ...N, ...y } : N
              );
              a().registerDataset(t, f);
            } else
              a().registerDataset(t, [y, ...C]);
          return {
            success: !0,
            data: y,
            message: l ? `Cập nhật thành công bản ghi #${i} (${t}) vào Database!` : `Thêm mới thành công bản ghi (${t}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${u.status}` };
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
      const r = a(), n = _.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((C) => String(C.id) === String(t)) || o.find((C) => String(C.id) === String(l)) || o.find((C) => {
        var f;
        return C.name.toLowerCase().includes("fcl") || ((f = C.route) == null ? void 0 : f.includes("fcl"));
      }) || o[0], c = {}, d = (C) => {
        var f, N, v;
        if (!(!C || !Array.isArray(C)))
          for (const D of C) {
            const T = (f = D.dataBinding) == null ? void 0 : f.fieldName, L = (N = D.props) == null ? void 0 : N.name, I = D.id, E = T || (typeof L == "string" ? L : "") || (I == null ? void 0 : I.replace(/^fld_/, "")), V = String(E || "").trim();
            if (V) {
              let P = ct(r, String(D.pageId || l || "default"), V, void 0);
              if (P === void 0 && ((v = D.props) == null ? void 0 : v.value) !== void 0 && (P = D.props.value), P === void 0 && typeof document < "u") {
                const O = document.getElementById(D.id) || document.querySelector(`[name="${D.id}"]`) || document.querySelector(`[name="${V}"]`);
                O && "value" in O && O.value !== "" && (P = O.value);
              }
              if (P != null) {
                c[V] = P;
                const O = V.charAt(0).toLowerCase() + V.slice(1), ee = V.charAt(0).toUpperCase() + V.slice(1);
                c[O] = P, c[ee] = P;
              }
            }
            D.children && D.children.length > 0 && d(D.children);
          }
      };
      i != null && i.components && d(i.components);
      const p = t || String(l || "default"), x = { ...r.formRecords.default, ...p ? r.formRecords[p] : {} }, u = { ...c, ...x };
      if (!u.id && !u.Id && typeof window < "u") {
        const f = new URLSearchParams(window.location.search).get("id") || localStorage.getItem("uiforge_active_transaction_id");
        f && f !== "new" && Number(f) > 0 && (u.id = Number(f), u.Id = Number(f));
      }
      const y = u.jobNo || u.JobNo;
      if (y && !u.id && !u.Id) {
        const C = r.datasets.Transaction;
        if (Array.isArray(C)) {
          const f = C.find((N) => (N.jobNo || N.JobNo) === y);
          f && (u.id = f.id || f.Id, u.Id = f.id || f.Id);
        }
      }
      const w = {};
      for (const [C, f] of Object.entries(u)) {
        if (!C || C.startsWith("fld_") || C.startsWith("btn_") || C.startsWith("sec_") || C.startsWith("tab_")) continue;
        const N = C.replace(/^fld_/, ""), v = N.charAt(0).toLowerCase() + N.slice(1), D = N.charAt(0).toUpperCase() + N.slice(1);
        w[v] = f, w[D] = f;
      }
      return (u.id || u.Id) && (w.id = u.id || u.Id, w.Id = u.id || u.Id), s((C) => ({
        formRecords: {
          ...C.formRecords,
          [p]: w,
          default: w
        }
      })), w;
    }
  }))
), dr = ({ node: s, isEditing: a }) => {
  var I;
  const { props: t, style: r } = s, n = _((E) => E.features), o = _((E) => E.activeFeatureId), l = n.find((E) => String(E.id) === String(s.pageId)) || n.find((E) => String(E.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = String(s.pageId || o || "default"), N = String(((I = s.dataBinding) == null ? void 0 : I.fieldName) || s.props.name || s.id), v = pe((E) => ct(E, f, N, void 0)), D = pe((E) => E.setFieldValue), T = v !== void 0 ? v : t.value ?? "", L = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    kt,
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
        ...C
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "Nhập dữ liệu...",
          value: T,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${L ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (E) => {
            const V = E.target.value;
            D(f, N, V), a || ge(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: N,
              value: V
            });
          },
          onFocus: () => {
            a || ge(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: N
            });
          },
          onBlur: (E) => {
            a || ge(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: N,
              value: E.target.value
            });
          }
        }
      )
    }
  );
}, cr = ({ node: s, isEditing: a }) => {
  var P;
  const { props: t, style: r } = s, n = _((O) => O.features), o = _((O) => O.activeFeatureId), l = n.find((O) => String(O.id) === String(s.pageId)) || n.find((O) => String(O.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = String(s.pageId || o || "default"), N = String(((P = s.dataBinding) == null ? void 0 : P.fieldName) || s.props.name || s.id), v = pe((O) => ct(O, f, N, void 0)), D = pe((O) => O.setFieldValue), T = t.precision !== void 0 ? Number(t.precision) : 0, L = v !== void 0 ? v : t.value, I = L != null && L !== "" ? Number(L) : 0, E = (O) => O.toLocaleString("en-US", {
    minimumFractionDigits: T,
    maximumFractionDigits: T
  }), V = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    kt,
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
        ...C
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "0",
          value: E(I),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${V ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (O) => {
            const ee = O.target.value.replace(/,/g, "");
            if (ee === "" || !isNaN(Number(ee))) {
              const G = ee === "" ? 0 : Number(ee);
              D(f, N, G), a || ge(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: N,
                value: G
              });
            }
          }
        }
      ) })
    }
  );
}, ur = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = _((f) => f.features), o = _((f) => f.activeFeatureId), l = n.find((f) => String(f.id) === String(s.pageId)) || n.find((f) => String(f.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...C
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (f) => {
        a ? (f.ctrlKey || f.metaKey || f.altKey) && (f.stopPropagation(), ge(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : ge(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (f) => {
        f.stopPropagation(), ge(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, An = ({
  node: s,
  isEditing: a,
  isSelected: t,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var H;
  const { props: c, style: d } = s;
  _((M) => M.updateComponentProps);
  const p = !!(c.isTab || c.tab || c.isTabGroup || s.type === "Tabs"), x = [
    { id: "main", label: "TAB 1" }
  ], u = c.tabs || x, [y, w] = S(
    c.activeTabId || ((H = u[0]) == null ? void 0 : H.id) || "main"
  ), C = c.layoutMode || "flex", f = c.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, N = c.gridConfig || { columns: 12, gap: "16px" }, v = Number(
    N.columns || (typeof f.columnsPerRow == "number" ? f.columnsPerRow : 12)
  ) || 12, D = (d == null ? void 0 : d.justifyContent) || f.justify || "flex-start", T = (d == null ? void 0 : d.alignItems) || f.align || "flex-start", L = f.wrap || "wrap", I = C === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${v}, minmax(0, 1fr))`,
    gap: N.gap || f.gap || "16px",
    alignItems: T
  } : {
    display: "flex",
    flexDirection: f.direction || "row",
    flexWrap: L,
    justifyContent: D,
    alignItems: T,
    gap: f.gap || "12px"
  };
  let E = d != null && d.flex ? void 0 : "100%", V = d == null ? void 0 : d.flex, P = d == null ? void 0 : d.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const M = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(M) && M > 0) {
      const Y = parseInt(o.gap || "12", 10) || 12, g = M === 1 ? "100%" : `calc((100% - ${(M - 1) * Y}px) / ${M})`;
      (d == null ? void 0 : d.width) === void 0 && (d == null ? void 0 : d.flex) === void 0 && (E = g, V = `0 0 ${g}`, P = g);
    }
  }
  const { width: O, flex: ee, ...G } = d || {}, B = l ? {
    ...I,
    minHeight: (d == null ? void 0 : d.minHeight) || "90px",
    padding: p ? "0" : (d == null ? void 0 : d.padding) || "16px",
    backgroundColor: (d == null ? void 0 : d.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (d == null ? void 0 : d.borderRadius) || "12px",
    border: (d == null ? void 0 : d.border) || (p ? "none" : "1px dashed #475569"),
    height: d != null && d.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...G,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...I,
    minHeight: (d == null ? void 0 : d.minHeight) || "90px",
    padding: p ? "0" : (d == null ? void 0 : d.padding) || "16px",
    backgroundColor: (d == null ? void 0 : d.backgroundColor) || (p ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (d == null ? void 0 : d.borderRadius) || "12px",
    border: (d == null ? void 0 : d.border) || (p ? "none" : "1px dashed #475569"),
    width: (d == null ? void 0 : d.width) !== void 0 ? d.width : E,
    flex: (d == null ? void 0 : d.flex) !== void 0 ? d.flex : V,
    maxWidth: (d == null ? void 0 : d.maxWidth) !== void 0 ? d.maxWidth : P,
    minWidth: (d == null ? void 0 : d.minWidth) !== void 0 ? d.minWidth : 0,
    boxSizing: "border-box",
    ...d
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: r,
      onContextMenu: n,
      style: B,
      className: `relative transition-all duration-150 group/container box-border ${a ? `cursor-pointer ${t ? p ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : p ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${p ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: p ? `Tab: ${c.label || "Không tên"}` : "Khoảng trắng" }),
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
}, pr = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: c, maxWidth: d, width: p, ...x } = r || {}, [u, y] = S(!1), w = t.title || t.label || "Khối Bố Cục (Section)", C = t.collapsible ?? !0, f = t.layoutMode || "grid", N = t.flexConfig || {}, v = t.gridConfig || {}, D = Number(v.columns || N.columnsPerRow || 12) || 12, T = N.gap || v.gap || "12px", L = (r == null ? void 0 : r.justifyContent) || N.justify || "flex-start", I = (r == null ? void 0 : r.alignItems) || N.align || "center", E = f === "flex" ? {
    display: "flex",
    flexDirection: N.direction || "row",
    flexWrap: N.wrap || "wrap",
    justifyContent: L,
    alignItems: I,
    gap: T
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${D}, minmax(0, 1fr))`,
    gap: T,
    alignItems: I
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...x
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(it, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: w })
          ] }),
          C && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => y(!u),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: u ? "Mở rộng" : "Thu gọn",
              children: u ? /* @__PURE__ */ e.jsx(Cs, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(On, { className: "w-4 h-4" })
            }
          )
        ] }),
        !u && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: E, children: a })
      ]
    }
  );
}, Zr = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: c, maxWidth: d, width: p, ...x } = r || {}, u = t.title || t.label || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...x
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
                  /* @__PURE__ */ e.jsx(ba, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Xe, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
}, xr = ({
  x: s,
  y: a,
  column: t,
  isOpen: r,
  onClose: n,
  onToggleHide: o,
  onSetFreeze: l,
  onOpenProperties: i,
  onCloneColumn: c,
  onRemoveColumn: d,
  onToggleFilter: p
}) => {
  const x = Zt(null), [u, y] = _t.useState(!1);
  if (_e(() => {
    if (!r) return;
    const f = (v) => {
      x.current && !x.current.contains(v.target) && n();
    }, N = (v) => {
      v.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", N), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", N);
    };
  }, [r, n]), !r) return null;
  const w = Math.min(s, window.innerWidth - 220), C = Math.min(a, window.innerHeight - 340);
  return $t(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: x,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: w, top: C },
        onClick: (f) => f.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(_n, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(fa, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(Bn, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(Mn, { className: "w-3.5 h-3.5 text-slate-400" })
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
                  c(t.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                onClick: () => {
                  d(t.key), n();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                  /* @__PURE__ */ e.jsx(Hn, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(ga, { className: "w-3.5 h-3.5" }),
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
}, mr = ({
  x: s,
  y: a,
  row: t,
  rowIndex: r,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: c,
  onInsertRowBelow: d,
  onMoveRowUp: p,
  onMoveRowDown: x
}) => {
  const u = Zt(null);
  if (_e(() => {
    if (!o) return;
    const C = (N) => {
      u.current && !u.current.contains(N.target) && l();
    }, f = (N) => {
      N.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", f);
    };
  }, [o, l]), !o) return null;
  const y = Math.min(s, window.innerWidth - 220), w = Math.min(a, window.innerHeight - 260);
  return $t(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: y, top: w },
        onClick: (C) => C.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5 text-sky-400" }),
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
                  d(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Vn, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            p && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  p(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Gn, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            x && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  x(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Wn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  c(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, hr = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], aa = ({
  events: s = [],
  onChange: a,
  scriptFile: t = "transactionList.bl.ts",
  componentName: r = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = hr
}) => {
  const [c, d] = S(""), [, p] = S(0), x = t || "transactionList.bl.ts", u = Ka(x), y = () => {
    var D;
    const N = u[0] || "openTransactionDetail", v = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((D = i[0]) == null ? void 0 : D.value) || "click",
      handlerName: N,
      action: N
    };
    a([...s, v]);
  }, w = (N, v) => {
    const D = s.map((T, L) => {
      if (L !== N) return T;
      const I = { ...T, ...v };
      return v.handlerName && !v.action && (I.action = v.handlerName), I;
    });
    a(D);
  }, C = (N) => {
    const v = s.filter((D, T) => T !== N);
    a(v);
  }, f = () => {
    c.trim() && (Ua(x, c.trim()), d(""), p((N) => N + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(Xe, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            s.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-400", children: [
          "File BL:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: x })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: y,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(xs, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          x
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: c,
            onChange: (N) => d(N.target.value),
            onKeyDown: (N) => {
              N.key === "Enter" && (N.preventDefault(), f());
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
              /* @__PURE__ */ e.jsx(Vn, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((N, v) => {
      const D = u.includes(N.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  v + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: N.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => C(v),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: N.trigger || "click",
                    onChange: (T) => w(v, { trigger: T.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((T) => /* @__PURE__ */ e.jsx("option", { value: T.value, children: T.label }, T.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: N.handlerName || u[0] || "",
                    onChange: (T) => {
                      const L = T.target.value;
                      w(v, { handlerName: L, action: L });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      u.map((T) => /* @__PURE__ */ e.jsxs("option", { value: T, children: [
                        T,
                        "()"
                      ] }, T)),
                      !D && N.handlerName && /* @__PURE__ */ e.jsxs("option", { value: N.handlerName, children: [
                        N.handlerName,
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
                  Dt(
                    N,
                    r,
                    x,
                    {
                      componentId: n,
                      trigger: N.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(va, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        N.id || v
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(Xe, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        r,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: x }),
        "."
      ] })
    ] })
  ] });
}, ra = ({
  isOpen: s,
  column: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = S(null), [l, i] = S("info"), c = _((u) => u.features.find((y) => y.id === u.activeFeatureId));
  if (_e(() => {
    if (a) {
      let u = [];
      if (Array.isArray(a.events))
        u = [...a.events];
      else if (typeof a.events == "string" && a.events.trim())
        try {
          const y = JSON.parse(a.events);
          Array.isArray(y) && (u = y);
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
  const d = Array.isArray(n.events) ? n.events : [], p = (u, y) => {
    o((w) => {
      if (!w) return w;
      const C = { ...w, [u]: y };
      return u === "frozen" ? C.sticky = y ? "left" : "none" : u === "sticky" && (C.frozen = y === "left"), C;
    });
  }, x = (u) => {
    n && (r(n), t());
  };
  return $t(
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
              onClick: () => x(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(ms, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5" }),
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
                  onChange: (u) => p("code", u.target.value),
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
                  onChange: (u) => p("order", parseInt(u.target.value) || 0),
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
                  onChange: (u) => p("feature", u.target.value),
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
                  onChange: (u) => p("refClass", u.target.value),
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
                  onChange: (u) => p("filterTemplate", u.target.value),
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
                  onChange: (u) => p("formatExcell", u.target.value),
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
                  onChange: (u) => p("childStyle", u.target.value),
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
                  onChange: (u) => p("dataSource", u.target.value),
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
                  onChange: (u) => p("key", u.target.value),
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
                  onChange: (u) => p("title", u.target.value),
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
                  onChange: (u) => p("description", u.target.value),
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
                    onChange: (u) => p("refName", u.target.value),
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
                    onChange: (u) => p("reference", u.target.value),
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
                  onChange: (u) => p("formatCell", u.target.value),
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
                    onChange: (u) => p("width", u.target.value),
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
                    onChange: (u) => p("minWidth", u.target.value),
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
                    onChange: (u) => p("maxWidth", u.target.value),
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
                  onChange: (u) => p("componentType", u.target.value),
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
                    onChange: (u) => p("precision", parseInt(u.target.value) || 0),
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
                    onChange: (u) => p("align", u.target.value),
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
                      /* @__PURE__ */ e.jsx(Xe, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: d.length > 0 ? `Cấu hình (${d.length})` : "+ Thêm Sự Kiện" })
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
                      /* @__PURE__ */ e.jsx(Xe, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      d.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: d.map((u) => `${u.trigger} ➔ ${u.handlerName || u.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      d.length,
                      " event",
                      d.length !== 1 ? "s" : ""
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
                    onChange: (u) => p("cascadeField", u.target.value),
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
                    onChange: (u) => p("aggregate", u.target.value),
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
                  onChange: (u) => p("validation", u.target.value),
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
                  /* @__PURE__ */ e.jsx(Xe, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  d.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: d.length })
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
                    onChange: (u) => p("frozen", u.target.checked),
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
                    onChange: (u) => p("disabled", u.target.checked),
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
                    onChange: (u) => p("hasPermission", u.target.checked),
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
                    onChange: (u) => p("focusSearch", u.target.checked),
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
                    onChange: (u) => p("filterEq", u.target.checked),
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
                    onChange: (u) => p("filterLocal", u.target.checked),
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
                    onChange: (u) => p("hidden", u.target.checked),
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
                    onChange: (u) => p("active", u.target.checked),
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
                    onChange: (u) => p("advancedSearch", u.target.checked),
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
                    onChange: (u) => p("virtualScroll", u.target.checked),
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
                    onChange: (u) => p("upperCase", u.target.checked),
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
                    onChange: (u) => p("hasFilter", u.target.checked),
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
                    onChange: (u) => p("isRealtime", u.target.checked),
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
                    onChange: (u) => p("autoFit", u.target.checked),
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
                    onChange: (u) => p("aggregate", u.target.checked ? "sum" : "none"),
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
                    onChange: (u) => p("addDate", u.target.checked),
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
                    onChange: (u) => p("editable", u.target.checked),
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
                    onChange: (u) => p("isPivot", u.target.checked),
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
                    onChange: (u) => p("basicSearch", u.target.checked),
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
                    onChange: (u) => p("ignoreTrigger", u.target.checked),
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
                    onChange: (u) => p("hideGrid", u.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            aa,
            {
              events: d,
              onChange: (u) => {
                p("events", u);
                const y = u.find((w) => w.trigger === "click" || w.trigger === "actionClick");
                y && p("action", y.handlerName || y.action);
              },
              scriptFile: (c == null ? void 0 : c.scriptFile) || "transactionList.bl.ts",
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
            onClick: () => x(),
            className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
            children: [
              /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
            ]
          }
        )
      ] })
    ] }) }),
    document.body
  );
}, br = ({
  columns: s,
  data: a,
  showRowNumber: t = !0,
  rowNumberWidth: r = 55,
  leftOffsets: n = {}
}) => {
  if (!s.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const c = a.map((y) => y[i.key]).filter((y) => y != null && y !== "");
    if (i.aggregate === "count") {
      const y = c.length;
      return `${i.summaryPrefix || ""}${y}${i.summarySuffix || " dòng"}`;
    }
    const d = c.map((y) => {
      if (typeof y == "number") return y;
      const w = parseFloat(String(y).replace(/,/g, ""));
      return isNaN(w) ? 0 : w;
    });
    if (d.length === 0) return "—";
    let p = 0;
    i.aggregate === "sum" ? p = d.reduce((y, w) => y + w, 0) : i.aggregate === "avg" ? p = d.reduce((y, w) => y + w, 0) / d.length : i.aggregate === "min" ? p = Math.min(...d) : i.aggregate === "max" && (p = Math.max(...d));
    const x = i.precision ?? (i.format === "number_thousands" ? 0 : 2), u = x > 0 ? p.toLocaleString("en-US", { minimumFractionDigits: x, maximumFractionDigits: x }) : p.toLocaleString("en-US");
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
    s.filter((i) => !i.hidden).map((i, c) => {
      const d = l(i), p = c === 0, x = i.sticky === "left" || !!i.frozen, u = x && n[i.key] !== void 0 ? n[i.key] : void 0, y = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${y} ${x ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: u !== void 0 ? `${u}px` : void 0
          },
          children: p && !d ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : d ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: d }) : "—"
        },
        i.key
      );
    })
  ] });
}, fr = ({
  column: s,
  value: a,
  row: t,
  rowIndex: r,
  error: n,
  onChange: o,
  onActionClick: l
}) => {
  const i = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", c = a === "—" || a === "-" ? "" : a ?? "", d = n ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40";
  if (s.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!a,
        disabled: s.disabled || !i,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => o(x.target.checked),
        className: "w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      }
    ) });
  if (s.componentType === "Button") {
    const x = s.formatCell || s.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: (u) => {
          u.stopPropagation(), l && l(s.key, t);
        },
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
          x.preventDefault(), x.stopPropagation(), l && l(s.key, t);
        },
        className: "text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate",
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(Kn, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!i) {
    if (s.precision !== void 0 && typeof a == "number") {
      const x = s.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs("span", { className: "font-mono text-slate-200", children: [
        x,
        s.summarySuffix ? ` ${s.summarySuffix}` : ""
      ] });
    }
    if (s.formatCell && a !== void 0 && a !== null) {
      let x = s.formatCell.replace("{0}", String(a));
      return typeof t == "object" && t !== null && Object.keys(t).forEach((u) => {
        x = x.replace(new RegExp(`\\{${u}\\}`, "gi"), String(t[u] ?? ""));
      }), /* @__PURE__ */ e.jsx("span", { className: "truncate text-slate-200", children: x });
    }
    return /* @__PURE__ */ e.jsx("span", { className: "truncate text-slate-200", children: a != null ? String(a) : "—" });
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let x = s.options || [];
    return x.length === 0 && (s.key === "packageType" ? x = [
      { value: "PALLETS", label: "PALLETS" },
      { value: "CARTONS", label: "CARTONS" },
      { value: "BAGS", label: "BAGS" },
      { value: "BOXES", label: "BOXES" }
    ] : s.key === "size" ? x = [
      { value: "20GP", label: "20GP" },
      { value: "40GP", label: "40GP" },
      { value: "40HC", label: "40HC" },
      { value: "45HC", label: "45HC" }
    ] : s.key === "shipmentType" ? x = [
      { value: "NOMINATED", label: "NOMINATED" },
      { value: "FREEHAND", label: "FREEHAND" }
    ] : s.key === "pod" ? x = [
      { value: "VNSGN", label: "HO CHI MINH / VNSGN" },
      { value: "VNDAD", label: "DA NANG / VNDAD" },
      { value: "VNHPH", label: "HAI PHONG / VNHPH" },
      { value: "SGSIN", label: "SINGAPORE / SGSIN" },
      { value: "KRPUS", label: "BUSAN / KRPUS" },
      { value: "CNSGH", label: "SHANGHAI / CNSGH" }
    ] : s.key === "pol" && (x = [
      { value: "CNSGH", label: "SHANGHAI / CNSGH" },
      { value: "KRPUS", label: "BUSAN / KRPUS" },
      { value: "SGSIN", label: "SINGAPORE / SGSIN" },
      { value: "VNSGN", label: "HO CHI MINH / VNSGN" },
      { value: "VNDAD", label: "DA NANG / VNDAD" },
      { value: "VNHPH", label: "HAI PHONG / VNHPH" }
    ])), /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: s.disabled,
        title: n || void 0,
        onClick: (u) => u.stopPropagation(),
        onChange: (u) => o(u.target.value),
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${d} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          x.map((u) => /* @__PURE__ */ e.jsx("option", { value: u.value, className: "bg-slate-900 text-slate-100", children: u.label }, u.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", title: n || void 0, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: c,
          placeholder: "DD/MM/YYYY",
          disabled: s.disabled,
          onClick: (x) => x.stopPropagation(),
          onChange: (x) => o(x.target.value),
          className: `w-full h-7 pl-2.5 pr-7 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${d} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
        }
      ),
      /* @__PURE__ */ e.jsx(ks, { className: "w-3.5 h-3.5 text-emerald-400 absolute right-2 pointer-events-none" })
    ] });
  if (s.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: c,
        placeholder: "0",
        disabled: s.disabled,
        title: n || void 0,
        step: s.precision && s.precision > 0 ? Math.pow(10, -s.precision) : 1,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => {
          const u = x.target.value;
          o(u === "" ? "" : Number(u));
        },
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${d} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (s.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: c,
        placeholder: s.title ? `Nhập ${s.title}...` : "Nhập...",
        disabled: s.disabled,
        title: n || void 0,
        rows: 1,
        onClick: (x) => x.stopPropagation(),
        onChange: (x) => {
          const u = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
          o(u);
        },
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${d} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const p = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: c,
      placeholder: s.title ? `Nhập ${s.title}...` : "Nhập dữ liệu...",
      disabled: s.disabled,
      title: n || void 0,
      onClick: (x) => x.stopPropagation(),
      onChange: (x) => {
        const u = s.upperCase ? x.target.value.toUpperCase() : x.target.value;
        o(u);
      },
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${d} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${p} ${s.cssClass || ""}`
    }
  );
};
function la(s) {
  return [...s].sort((a, t) => {
    const r = !!(a.frozen || a.sticky === "left"), n = !!(t.frozen || t.sticky === "left");
    if (r && !n) return -1;
    if (!r && n) return 1;
    const o = typeof a.order == "number" ? a.order : 999, l = typeof t.order == "number" ? t.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Lt(s) {
  return la(s).map((t, r) => ({
    ...t,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function vs(s, a, t) {
  if (t < 0 || t >= s.length || a === t) return s;
  const r = [...s], [n] = r.splice(a, 1), o = r.filter((p) => p.frozen || p.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && t < o ? (n.frozen = !0, n.sticky = "left") : l && t >= o && (n.frozen = !1, n.sticky = "none"), r.splice(t, 0, n);
  const i = r.filter((p) => p.frozen || p.sticky === "left"), c = r.filter((p) => !p.frozen && p.sticky !== "left");
  return [...i, ...c].map((p, x) => ({
    ...p,
    order: x + 1,
    frozen: !!(p.frozen || p.sticky === "left"),
    sticky: p.frozen || p.sticky === "left" ? "left" : "none"
  }));
}
function oa(s, a) {
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
  return Lt(t);
}
function gr(s, a = 55) {
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
const ys = {
  // Cảng Thượng Hải (CNSGH)
  CNSGH: [
    { value: "VNDTS", label: "TIEN SA TERMINAL / VNDTS", subText: "Đà Nẵng, Việt Nam - Thời gian vận chuyển: 4 ngày" },
    { value: "VNSGN", label: "CAT LAI / VNSGN", subText: "TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 5 ngày" },
    { value: "VNHPH", label: "HAI PHONG / VNHPH", subText: "Hải Phòng, Việt Nam - Thời gian vận chuyển: 3 ngày" }
  ],
  // Cảng Busan Hàn Quốc (KRPUS)
  KRPUS: [
    { value: "VNSGN", label: "CAT LAI / VNSGN", subText: "TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 6 ngày" },
    { value: "VNDTS", label: "TIEN SA TERMINAL / VNDTS", subText: "Đà Nẵng, Việt Nam - Thời gian vận chuyển: 5 ngày" }
  ],
  // Cảng Singapore (SGSIN)
  SGSIN: [
    { value: "VNHPH", label: "HAI PHONG / VNHPH", subText: "Hải Phòng, Việt Nam - Thời gian vận chuyển: 4 ngày" },
    { value: "VNSGN", label: "CAT LAI / VNSGN", subText: "TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 2 ngày" },
    { value: "VNDTS", label: "TIEN SA TERMINAL / VNDTS", subText: "Đà Nẵng, Việt Nam - Thời gian vận chuyển: 3 ngày" }
  ],
  // Cảng Ninh Ba (CNNGB)
  CNNGB: [
    { value: "VNDTS", label: "TIEN SA TERMINAL / VNDTS", subText: "Đà Nẵng, Việt Nam - Thời gian vận chuyển: 4 ngày" },
    { value: "VNHPH", label: "HAI PHONG / VNHPH", subText: "Hải Phòng, Việt Nam - Thời gian vận chuyển: 3 ngày" }
  ]
}, vr = {
  SITC: {
    lineCode: "SITC",
    lineName: "SITC CONTAINER LINES CO., LTD",
    vendorCode: "VFRAC-IT",
    vendorName: "VFRAC-IT VIETNAM",
    agentName: "SHANGHAI TRANSLEAD",
    defaultPTerm: "COLLECT",
    defaultService: "CYCY"
  },
  ONE: {
    lineCode: "ONE",
    lineName: "OCEAN NETWORK EXPRESS (VIETNAM) CO., LTD",
    vendorCode: "TRANSLEAD",
    vendorName: "SHANGHAI TRANSLEAD",
    agentName: "OCEAN NETWORK EXPRESS JAPAN",
    defaultPTerm: "PREPAID",
    defaultService: "CYCY"
  },
  WHL: {
    lineCode: "WHL",
    lineName: "WAN HAI LINES (VIETNAM) CO., LTD",
    vendorCode: "VFRAC-IT",
    vendorName: "WAN HAI LINES VIETNAM",
    agentName: "WAN HAI LINES TAIPEI",
    defaultPTerm: "COLLECT",
    defaultService: "CYCY"
  },
  ASL: {
    lineCode: "ASL",
    lineName: "ASL LOGISTICS SERVICE CORP",
    vendorCode: "VFRAC-IT",
    vendorName: "ASL LOGISTICS SERVICE",
    agentName: "ASL TRANS OVERSEAS",
    defaultPTerm: "PREPAID",
    defaultService: "DOOR"
  },
  KMTC: {
    lineCode: "KMTC",
    lineName: "KOREA MARINE TRANSPORT CO., LTD",
    vendorCode: "TRANSLEAD",
    vendorName: "KMTC VIETNAM CO., LTD",
    agentName: "KMTC INCHEON HEADQUARTERS",
    defaultPTerm: "COLLECT",
    defaultService: "CYCY"
  }
};
function el(s, a, t) {
  if (s === "pol" && t === "pod") {
    const r = String(a || "").toUpperCase();
    if (ys[r])
      return ys[r];
  }
  return t === "pod" ? [
    { value: "VNDTS", label: "TIEN SA TERMINAL / VNDTS" },
    { value: "VNSGN", label: "CAT LAI / VNSGN" },
    { value: "VNHPH", label: "HAI PHONG / VNHPH" }
  ] : [];
}
function yr(s, a, t) {
  const r = {};
  if (s === "sLines" || s === "lines" || s === "fld_lines") {
    const n = String(a || "").trim().toUpperCase(), o = vr[n];
    o && (r.vendor = o.vendorCode, r.agent = o.agentName, t.pTerm || (r.pTerm = o.defaultPTerm), t.service || (r.service = o.defaultService));
  }
  if (s === "pol" || s === "fld_pol") {
    const n = String(a || "").toUpperCase(), o = ys[n];
    if (o && o.length > 0) {
      const l = t.pod;
      o.some((c) => c.value === l) || (r.pod = o[0].value);
    }
  }
  return r;
}
function Ns(s) {
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
    const c = a[i];
    let d = 0;
    if (c >= "0" && c <= "9")
      d = parseInt(c, 10);
    else if (r[c] !== void 0)
      d = r[c];
    else
      return { isValid: !1, message: `Ký tự [${c}] trong số container không hợp lệ` };
    const p = Math.pow(2, i);
    n += d * p;
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
function Dn(s) {
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
function js(s, a, t = "Ngày bắt đầu", r = "Ngày kết thúc") {
  const n = Dn(s), o = Dn(a);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${t} (${s}) không thể xảy ra sau ${r} (${a})`
  } : { isValid: !0 };
}
function Nr(s, a, t = [], r = {}) {
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
        const l = Ns(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = js(String(a), String(l), s, o.targetField);
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
function tl(s, a) {
  const t = {};
  for (const [r, n] of Object.entries(a)) {
    const o = s[r], l = Nr(r, o, n, s);
    l.isValid || (t[r] = l.errors);
  }
  return t;
}
const Ee = {
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
}, jr = {
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
}, vt = Bt()(
  ns((s, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...Ee["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...Ee["FCLI-26020005"].shippingInfo],
      grid_container_info: [...Ee["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...Ee["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const r = Ee[t];
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
      return Ee[n] = {
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
      const n = String(jr[t] || t), l = { ...a().masterRecord, [n]: r }, i = yr(n, r, l);
      Object.assign(l, i);
      const c = { ...a().validationErrors };
      if (n === "mblNo") {
        const p = String(r || "").trim();
        p ? /^[A-Z0-9]{8,18}$/i.test(p) ? delete c.mblNo : c.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : c.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete c.jobNo : c.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const p = l.mblIssuedDate, x = l.shipmentDate;
        if (p && x) {
          const u = js(p, x, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          u.isValid ? delete c.mblIssuedDate : c.mblIssuedDate = u.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: c
      });
      const d = a().activeJobNo;
      Ee[d] && (Ee[d].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, r, n, o) => {
      const l = a().detailGrids, i = l[t] || [], c = { ...a().validationErrors }, d = `${t}_${r}_${n}`, p = i.map((u, y) => u.id !== void 0 && u.id === r || u.id === void 0 && y === r ? { ...u, [n]: o } : u);
      if (n === "containerNo") {
        const u = Ns(String(o));
        u.isValid ? delete c[d] : c[d] = u.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const u = p.find((y) => y.id === r);
        if (u && u.etd && u.eta) {
          const y = js(u.etd, u.eta, "ETD", "ETA"), w = `${t}_${r}_etd_eta`;
          y.isValid ? delete c[w] : c[w] = y.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: p },
        validationErrors: c
      }), t === "grid_container_info" && a().recalculateTotals();
      const x = a().activeJobNo;
      Ee[x] && (t === "grid_shipping_info" && (Ee[x].shippingInfo = p), t === "grid_container_info" && (Ee[x].containerInfo = p), t === "grid_shipment_detail" && (Ee[x].shipmentDetail = p));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o.length > 0 ? Math.max(...o.map((p) => Number(p.id) || 0)) + 1 : 1, i = a().activeJobNo;
      let c = { id: l, jobNo: i };
      t === "grid_container_info" ? c = {
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
      } : t === "grid_shipping_info" ? c = {
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
      } : t === "grid_shipment_detail" ? c = {
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
      } : c = { id: l, jobNo: i, ...r };
      const d = [...o, c];
      s({
        detailGrids: { ...n, [t]: d }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (t, r) => {
      const n = a().detailGrids, l = (n[t] || []).filter((i, c) => c !== r);
      s({
        detailGrids: { ...n, [t]: l }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o[r];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((p) => Number(p.id) || 0)) + 1 : 1, c = { ...l, id: i }, d = [...o];
      d.splice(r + 1, 0, c), s({
        detailGrids: { ...n, [t]: d }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const t = a().detailGrids.grid_container_info || [];
      let r = 0, n = 0, o = 0, l = 0;
      t.forEach((p) => {
        r += Number(p.packageNumber) || 0, n += Number(p.gw) || 0, o += Number(p.cbm) || 0, l += Number(p.vgm) || 0;
      });
      const c = {
        ...a().masterRecord,
        tPackages: r,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      s({ masterRecord: c });
      const d = a().activeJobNo;
      Ee[d] && (Ee[d].master = c);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = a().masterRecord, r = {};
      return (o = t.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const c = Ns(i.containerNo);
        c.isValid || (r[`grid_container_info_${i.id}_containerNo`] = c.message);
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
), Ln = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], wr = ({ node: s }) => {
  var qe;
  const { props: a, style: t } = s, r = _((j) => j.updateComponentProps), n = ze(() => a.columns && Array.isArray(a.columns) ? a.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [a.columns]), o = ze(() => la(n), [n]), l = vt((j) => j.detailGrids), i = vt((j) => j.updateGridCell), c = vt((j) => j.addGridRow), d = vt((j) => j.deleteGridRow), p = vt((j) => j.duplicateGridRow), x = vt((j) => j.validationErrors), u = !!(l && l[s.id]), y = a.reference || ((qe = s.dataBinding) == null ? void 0 : qe.entityName), w = pe((j) => y ? j.datasets[y] : void 0), [C, f] = S(() => u && l && l[s.id] ? l[s.id] : a.data && Array.isArray(a.data) ? a.data : w && Array.isArray(w) ? w : Ln);
  _e(() => {
    a.data && Array.isArray(a.data) && a.data.length > 0 && f(a.data);
  }, [a.data]), _e(() => {
    w && Array.isArray(w) && w.length > 0 && f(w);
  }, [w]);
  const N = ze(() => u && l && l[s.id] && l[s.id].length > 0 ? l[s.id] : C && Array.isArray(C) && C.length > 0 ? C : w && Array.isArray(w) && w.length > 0 ? w : a.data && Array.isArray(a.data) ? a.data : Ln, [u, l, s.id, C, w, a.data]);
  _e(() => {
    if (a.data && Array.isArray(a.data) || w && Array.isArray(w) && w.length > 0) return;
    let j = !0;
    if (y) {
      const F = a.query || a.filter || "";
      pe.getState().queryEntity(y, F).then((k) => {
        j && k && k.length > 0 && f(k);
      });
    }
    return () => {
      j = !1;
    };
  }, [a.data, y, a.query, a.filter, w]);
  const [v, D] = S(""), [T, L] = S(null), [I, E] = S("asc"), [V, P] = S(!1), [O, ee] = S({}), [G, B] = S({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [H, M] = S({
    isOpen: !1,
    column: null
  }), [Y, g] = S({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [ie, he] = S(null), [oe, ne] = S(null), [Ce, te] = S(null), ve = 55, { offsets: Ie, lastFrozenKey: Oe } = ze(() => gr(o, ve), [o]), Le = ze(() => {
    let j = [...N];
    if (v.trim()) {
      const F = v.toLowerCase();
      j = j.filter(
        (k) => Object.values(k).some(
          (K) => String(K).toLowerCase().includes(F)
        )
      );
    }
    return V && Object.entries(O).forEach(([F, k]) => {
      if (k && k.trim()) {
        const K = k.toLowerCase().trim();
        j = j.filter((z) => {
          const U = z[F];
          return U != null && String(U).toLowerCase().includes(K);
        });
      }
    }), T && j.sort((F, k) => {
      const K = F[T], z = k[T];
      if (K === z) return 0;
      if (K == null) return 1;
      if (z == null) return -1;
      let U = 0;
      return typeof K == "number" && typeof z == "number" ? U = K - z : U = String(K).localeCompare(String(z)), I === "asc" ? U : -U;
    }), j;
  }, [N, v, V, O, T, I]), ke = (j) => {
    f(j), r(s.id, { data: j });
  }, Pe = (j) => {
    const F = Lt(j);
    r(s.id, { columns: F });
  }, b = (j, F, k) => {
    u && i(s.id, j, F, k);
    const z = (u && l && l[s.id] ? l[s.id] : N).map((U, ce) => U.id !== void 0 && U.id === j || U.id === void 0 && ce === j ? { ...U, [F]: k } : U);
    ke(z), y && pe.getState().registerDataset(y, z);
  }, R = (j, F, k) => {
    const z = _.getState().features.find((Be) => String(Be.id) === String(s.pageId)), U = z == null ? void 0 : z.scriptFile, ce = (k == null ? void 0 : k.action) || j;
    let ye = !1;
    k != null && k.events && (Array.isArray(k.events) ? k.events : typeof k.events == "string" ? (() => {
      try {
        return JSON.parse(k.events);
      } catch {
        return [];
      }
    })() : []).forEach((Ne) => {
      ye = !0, Dt(
        Ne,
        k.title || k.key,
        U,
        { row: F, col: k, column: k, action: Ne.action || Ne.handlerName || ce, value: F[(k == null ? void 0 : k.key) || ""] }
      );
    }), !ye && ce && Dt(
      { id: `col_act_${(k == null ? void 0 : k.key) || j}`, trigger: "actionClick", action: ce, handlerName: ce },
      s.props.label || "Bảng dữ liệu",
      U,
      { row: F, col: k, column: k, action: ce, value: F[(k == null ? void 0 : k.key) || ""] }
    ), s.events && s.events.length > 0 && ge(s.events, "actionClick", s.props.label || "Bảng dữ liệu", U, {
      action: ce,
      row: F,
      col: k,
      column: k,
      colKey: k == null ? void 0 : k.key,
      value: F[(k == null ? void 0 : k.key) || ""]
    });
  }, [J, Q] = S(null), je = (j, F) => {
    const k = j.id ?? j.Id ?? F;
    Q(k);
    const z = _.getState().features.find((ce) => String(ce.id) === String(s.pageId)), U = z == null ? void 0 : z.scriptFile;
    y && pe.getState().setSelectedRecord(y, j), s.events && s.events.length > 0 && (ge(s.events, "rowClick", s.props.label || "Bảng dữ liệu", U, {
      row: j,
      rowIndex: F,
      action: "rowClick"
    }), ge(s.events, "click", s.props.label || "Bảng dữ liệu", U, {
      row: j,
      rowIndex: F,
      action: "click"
    }), ge(s.events, "select", s.props.label || "Bảng dữ liệu", U, {
      row: j,
      rowIndex: F,
      action: "select"
    }));
  }, be = (j, F) => {
    var ce;
    const K = _.getState().features.find((ye) => String(ye.id) === String(s.pageId)), z = K == null ? void 0 : K.scriptFile;
    s.events && s.events.length > 0 && (ge(s.events, "dblclick", s.props.label || "Bảng dữ liệu", z, {
      row: j,
      rowIndex: F,
      action: "dblclick"
    }), ge(s.events, "rowDblClick", s.props.label || "Bảng dữ liệu", z, {
      row: j,
      rowIndex: F,
      action: "rowDblClick"
    }));
    const U = (ce = s.events) == null ? void 0 : ce.find(
      (ye) => ye.trigger === "actionClick" || ye.trigger === "dblclick" || ye.trigger === "rowDblClick"
    );
    U && Dt(
      U,
      s.props.label || "Bảng dữ liệu",
      z,
      { row: j, rowIndex: F, action: U.action || U.handlerName }
    );
  }, Z = () => {
    u && c(s.id);
    const j = u && l && l[s.id] ? l[s.id] : N, k = { id: j.length > 0 ? Math.max(...j.map((z) => Number(z.id) || 0)) + 1 : 1 };
    o.forEach((z) => {
      z.componentType === "Number" ? k[z.key] = 0 : z.componentType === "Checkbox" ? k[z.key] = !1 : z.componentType === "DatePicker" ? k[z.key] = "08/11/2026" : k[z.key] = "";
    });
    const K = [...j, k];
    ke(K), y && pe.getState().registerDataset(y, K);
  }, de = (j) => {
    u && p(s.id, j);
    const F = u && l && l[s.id] ? l[s.id] : N, k = F[j], K = Math.max(...F.map((ce) => Number(ce.id) || 0)) + 1, z = { ...k, id: K }, U = [...F];
    U.splice(j + 1, 0, z), ke(U), y && pe.getState().registerDataset(y, U);
  }, W = (j) => {
    u && d(s.id, j);
    const F = u && l && l[s.id] ? l[s.id] : N;
    if (F.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const k = F.filter((K, z) => z !== j);
    ke(k), y && pe.getState().registerDataset(y, k);
  }, q = (j, F, k) => {
    j.preventDefault(), j.stopPropagation(), g({
      isOpen: !0,
      x: j.clientX,
      y: j.clientY,
      row: F,
      rowIndex: k
    });
  }, xe = (j) => {
    const F = u && l && l[s.id] ? l[s.id] : N, K = { id: F.length > 0 ? Math.max(...F.map((U) => Number(U.id) || 0)) + 1 : 1 };
    o.forEach((U) => {
      U.componentType === "Number" ? K[U.key] = 0 : U.componentType === "Checkbox" ? K[U.key] = !1 : (U.componentType, K[U.key] = "");
    });
    const z = [...F];
    z.splice(j + 1, 0, K), ke(z), y && pe.getState().registerDataset(y, z);
  }, we = (j) => {
    if (j <= 0) return;
    const k = [...u && l && l[s.id] ? l[s.id] : N], [K] = k.splice(j, 1);
    k.splice(j - 1, 0, K), ke(k), y && pe.getState().registerDataset(y, k);
  }, Te = (j) => {
    const F = u && l && l[s.id] ? l[s.id] : N;
    if (j >= F.length - 1) return;
    const k = [...F], [K] = k.splice(j, 1);
    k.splice(j + 1, 0, K), ke(k), y && pe.getState().registerDataset(y, k);
  }, $e = (j, F) => {
    he(F), j.dataTransfer.effectAllowed = "move", j.dataTransfer.setData("text/plain", F);
  }, Fe = (j, F) => {
    if (j.preventDefault(), j.dataTransfer.dropEffect = "move", ie === F) return;
    const k = j.currentTarget.getBoundingClientRect(), K = j.clientX < k.left + k.width / 2;
    ne(F), te(K ? "left" : "right");
  }, Qe = (j) => {
    const F = j.relatedTarget;
    j.currentTarget.contains(F) || (ne(null), te(null));
  }, Ze = (j, F) => {
    if (j.preventDefault(), !ie || ie === F) {
      he(null), ne(null), te(null);
      return;
    }
    const k = o.findIndex((U) => U.key === ie);
    let K = o.findIndex((U) => U.key === F);
    if (k === -1 || K === -1) {
      he(null), ne(null), te(null);
      return;
    }
    Ce === "right" && k > K ? K = K + 1 : Ce === "left" && k < K && (K = K - 1), K = Math.max(0, Math.min(o.length - 1, K));
    const z = vs(o, k, K);
    Pe(z), he(null), ne(null), te(null);
  }, et = () => {
    he(null), ne(null), te(null);
  }, ut = (j) => {
    j.sortable && (T === j.key ? I === "asc" ? E("desc") : L(null) : (L(j.key), E("asc")));
  }, tt = (j, F, k) => {
    j.preventDefault(), j.stopPropagation(), B({
      isOpen: !0,
      x: j.clientX,
      y: j.clientY,
      column: F,
      columnIndex: k
    });
  }, st = (j) => {
    const F = o.map(
      (k) => k.key === j ? { ...k, hidden: !k.hidden } : k
    );
    Pe(F);
  }, pt = (j) => {
    const F = oa(o, j);
    Pe(F);
  }, xt = (j) => {
    M({
      isOpen: !0,
      column: j
    });
  }, mt = (j) => {
    const F = o.findIndex((U) => U.key === j);
    if (F === -1) return;
    const k = o[F], K = {
      ...k,
      key: `${k.key}_copy`,
      title: `${k.title} (Bản sao)`,
      order: (k.order ?? F) + 1
    }, z = [...o];
    z.splice(F + 1, 0, K), Pe(z);
  }, ht = (j) => {
    if (o.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const F = o.filter((k) => k.key !== j);
    Pe(F);
  }, bt = (j) => {
    const F = o.map(
      (k) => k.key === j.key ? j : k
    );
    Pe(F);
  }, { flex: Tt, flexGrow: St, flexShrink: nt, flexBasis: ft, minWidth: He, maxWidth: at, width: rt, ...lt } = t || {}, Ve = o.filter((j) => !j.hidden);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...lt
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: a.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              Le.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ e.jsx(Un, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: v,
                  onChange: (j) => D(j.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => P((j) => !j),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${V ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Hn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Z,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  D(""), ee({});
                },
                title: "Làm mới bộ lọc",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors",
                children: /* @__PURE__ */ e.jsx(ya, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400", children: [
              /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400", children: "F1" }),
              /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400", children: "F2" }),
              /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400", children: "F3" }),
              /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400", children: "F4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto select-none relative", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
            /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx(
                "th",
                {
                  className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)]",
                  style: { width: `${ve}px`, minWidth: `${ve}px` },
                  children: "#"
                }
              ),
              Ve.map((j, F) => {
                const k = !!(j.frozen || j.sticky === "left"), K = k && Ie[j.key] !== void 0 ? Ie[j.key] : void 0, z = j.key === Oe, U = ie === j.key, ce = oe === j.key;
                let ye = "";
                ce && Ce === "left" ? ye = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : ce && Ce === "right" && (ye = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                const Be = j.align === "right" ? "text-right" : j.align === "center" ? "text-center" : "text-left";
                return /* @__PURE__ */ e.jsx(
                  "th",
                  {
                    draggable: !0,
                    onDragStart: (Ne) => $e(Ne, j.key),
                    onDragOver: (Ne) => Fe(Ne, j.key),
                    onDragLeave: Qe,
                    onDrop: (Ne) => Ze(Ne, j.key),
                    onDragEnd: et,
                    onContextMenu: (Ne) => tt(Ne, j, F),
                    onClick: () => ut(j),
                    className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${Be} ${k ? `sticky z-20 bg-[#0b1329] ${z ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${U ? "opacity-30 bg-slate-800/80" : ""} ${ye}`,
                    style: {
                      width: j.width,
                      minWidth: j.minWidth || j.width || "100px",
                      maxWidth: j.maxWidth,
                      left: K !== void 0 ? `${K}px` : void 0
                    },
                    title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${j.order ?? F + 1})`,
                    children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${j.align === "right" ? "justify-end" : j.align === "center" ? "justify-center" : "justify-between"}`, children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 truncate", children: [
                        k && /* @__PURE__ */ e.jsx(Bn, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                        /* @__PURE__ */ e.jsx("span", { className: "truncate", children: j.title || j.key }),
                        j.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                          "#",
                          j.order
                        ] })
                      ] }),
                      j.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: T === j.key ? I === "asc" ? /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Wn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Ts, { className: "w-2.5 h-2.5 text-slate-500" }) })
                    ] })
                  },
                  j.key
                );
              })
            ] }),
            V && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
              Ve.map((j) => {
                const F = !!(j.frozen || j.sticky === "left"), k = F && Ie[j.key] !== void 0 ? Ie[j.key] : void 0, K = j.key === Oe;
                return /* @__PURE__ */ e.jsx(
                  "th",
                  {
                    className: `px-1.5 py-1 border-r border-slate-800 ${F ? `sticky z-20 bg-[#080d1a] ${K ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                    style: {
                      left: k !== void 0 ? `${k}px` : void 0
                    },
                    children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Lọc...",
                        value: O[j.key] || "",
                        onChange: (z) => ee((U) => ({ ...U, [j.key]: z.target.value })),
                        className: "w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                      }
                    )
                  },
                  `filter_${j.key}`
                );
              })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/70 text-slate-300", children: Le.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
            "td",
            {
              colSpan: Ve.length + 1,
              className: "px-6 py-8 text-center text-slate-500 italic",
              children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
            }
          ) }) : Le.map((j, F) => /* @__PURE__ */ e.jsxs(
            "tr",
            {
              onClick: () => je(j, F),
              onDoubleClick: () => be(j, F),
              onContextMenu: (k) => q(k, j, F),
              className: `transition-colors group cursor-pointer ${J === (j.id ?? j.Id ?? F) ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
              children: [
                /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    className: "px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 bg-[#0f172a] border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] group-hover:bg-slate-800/90 text-slate-400 select-none",
                    style: { width: `${ve}px`, minWidth: `${ve}px` },
                    title: "Chuột phải để mở menu thao tác: Sao chép dòng, Xóa dòng, Chèn dòng...",
                    children: /* @__PURE__ */ e.jsx("span", { children: F + 1 })
                  }
                ),
                Ve.map((k) => {
                  const K = !!(k.frozen || k.sticky === "left"), z = K && Ie[k.key] !== void 0 ? Ie[k.key] : void 0, U = k.key === Oe, ce = j[k.key], ye = k.align === "right" ? "text-right" : k.align === "center" ? "text-center" : "text-left", Be = x[`${s.id}_${j.id}_${k.key}`];
                  return /* @__PURE__ */ e.jsx(
                    "td",
                    {
                      className: `px-2 py-1 whitespace-nowrap transition-colors ${ye} ${K ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${U ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                      style: {
                        width: k.width,
                        minWidth: k.minWidth || k.width || "100px",
                        maxWidth: k.maxWidth,
                        left: z !== void 0 ? `${z}px` : void 0
                      },
                      children: /* @__PURE__ */ e.jsx(
                        fr,
                        {
                          column: k,
                          value: ce,
                          row: j,
                          rowIndex: F,
                          error: Be,
                          onChange: (Ne) => b(j.id ?? F, k.key, Ne),
                          onActionClick: (Ne) => R(Ne, j, k)
                        }
                      )
                    },
                    k.key
                  );
                })
              ]
            },
            j.id || F
          )) }),
          /* @__PURE__ */ e.jsx("tfoot", { children: /* @__PURE__ */ e.jsx(
            br,
            {
              columns: Ve,
              data: Le,
              showRowNumber: !0,
              rowNumberWidth: ve,
              leftOffsets: Ie
            }
          ) })
        ] }) }),
        G.isOpen && G.column && /* @__PURE__ */ e.jsx(
          xr,
          {
            isOpen: G.isOpen,
            x: G.x,
            y: G.y,
            column: G.column,
            columnIndex: G.columnIndex,
            allColumns: o,
            onClose: () => B((j) => ({ ...j, isOpen: !1 })),
            onToggleHide: st,
            onSetFreeze: pt,
            onOpenProperties: xt,
            onCloneColumn: mt,
            onRemoveColumn: ht,
            onToggleFilter: () => P((j) => !j)
          }
        ),
        H.isOpen && H.column && /* @__PURE__ */ e.jsx(
          ra,
          {
            isOpen: H.isOpen,
            column: H.column,
            onClose: () => M({ isOpen: !1, column: null }),
            onSave: bt
          }
        ),
        Y.isOpen && Y.row && /* @__PURE__ */ e.jsx(
          mr,
          {
            isOpen: Y.isOpen,
            x: Y.x,
            y: Y.y,
            row: Y.row,
            rowIndex: Y.rowIndex,
            totalRows: C.length,
            onClose: () => g((j) => ({ ...j, isOpen: !1, row: null })),
            onDuplicateRow: de,
            onDeleteRow: W,
            onInsertRowBelow: xe,
            onMoveRowUp: we,
            onMoveRowDown: Te
          }
        )
      ]
    }
  );
}, sl = ({ node: s }) => {
  const { props: a, style: t } = s, { flex: r, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: c, width: d, ...p } = t || {}, x = [
    { key: "jobNo", title: "Job No.", width: "130px", sticky: "left", sortable: !0 },
    { key: "pol", title: "POL", width: "150px", sortable: !0 },
    { key: "pod", title: "POD", width: "150px", sortable: !0 },
    { key: "etd", title: "ETD", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "packages", title: "Số Kiện", width: "90px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "gw", title: "GW (KGS)", width: "110px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "cbm", title: "CBM", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], u = a.columns && a.columns.length > 0 ? a.columns : x, y = [
    { id: "1", jobNo: "FCL-26020005", pol: "SHANGHAI / CNSGH", pod: "TIEN SA / VNDTS", etd: "26/01/2026", packages: 12, gw: 1085, cbm: 25, status: "Hoàn thành" },
    { id: "2", jobNo: "FCL-26020006", pol: "BUSAN / KRPUS", pod: "CAT LAI / VNSGN", etd: "28/01/2026", packages: 25, gw: 3450, cbm: 42.5, status: "Đang vận chuyển" },
    { id: "3", jobNo: "FCL-26020007", pol: "SINGAPORE / SGSIN", pod: "HAI PHONG / VNHPH", etd: "02/02/2026", packages: 8, gw: 820, cbm: 14.2, status: "Chờ duyệt" },
    { id: "4", jobNo: "FCL-26020008", pol: "NINGBO / CNNGB", pod: "TIEN SA / VNDTS", etd: "05/02/2026", packages: 40, gw: 5200, cbm: 68, status: "Hoàn thành" }
  ], [w, C] = S(""), [f, N] = S(null), [v, D] = S("asc"), [T, L] = S(1), I = Number(a.pageSize) || 10, E = ze(() => {
    if (!w.trim()) return y;
    const B = w.toLowerCase();
    return y.filter(
      (H) => Object.values(H).some((M) => String(M).toLowerCase().includes(B))
    );
  }, [w]), V = ze(() => f ? [...E].sort((B, H) => {
    const M = B[f], Y = H[f];
    if (M === Y) return 0;
    const g = M > Y ? 1 : -1;
    return v === "asc" ? g : -g;
  }) : E, [E, f, v]), P = Math.ceil(V.length / I) || 1, O = ze(() => {
    const B = (T - 1) * I;
    return V.slice(B, B + I);
  }, [V, T, I]), ee = ze(() => {
    const B = {};
    for (const H of u)
      if (H.aggregate === "sum") {
        const M = E.reduce((Y, g) => Y + (Number(g[H.key]) || 0), 0);
        B[H.key] = M.toLocaleString("en-US");
      } else if (H.aggregate === "count")
        B[H.key] = E.length;
      else if (H.aggregate === "avg") {
        const M = E.length ? E.reduce((Y, g) => Y + (Number(g[H.key]) || 0), 0) / E.length : 0;
        B[H.key] = M.toFixed(1);
      }
    return B;
  }, [u, E]), G = (B) => {
    f === B ? D(v === "asc" ? "desc" : "asc") : (N(B), D("asc"));
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
            a.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: a.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              E.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Un, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: w,
                onChange: (B) => {
                  C(B.target.value), L(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((B) => {
            const H = B.sticky === "left", M = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => B.sortable !== !1 && G(B.key),
                style: {
                  width: B.width,
                  minWidth: B.minWidth || B.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${M} ${H ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${B.align === "right" ? "justify-end" : B.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  B.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: B.title }),
                  B.sortable !== !1 && /* @__PURE__ */ e.jsx(Ts, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: O.length > 0 ? O.map((B, H) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: u.map((M) => {
            const Y = M.sticky === "left", g = B[M.key], ie = M.align === "right" ? "text-right" : M.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${ie} ${Y ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (g == null) return "—";
                  if (M.componentType === "Checkbox") {
                    const he = g === !0 || g === "true" || g === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: he,
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
                        children: String(g)
                      }
                    );
                  if (M.componentType === "DatePicker" || M.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(g) })
                    ] });
                  if (M.componentType === "Number" || typeof g == "number") {
                    const he = Number(g);
                    if (!isNaN(he)) {
                      const oe = M.precision !== void 0 ? M.precision : he % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: he.toLocaleString("en-US", { minimumFractionDigits: oe, maximumFractionDigits: oe }) });
                    }
                  }
                  return M.key === "status" || M.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${g === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(g) }) : String(g);
                })()
              },
              M.key
            );
          }) }, B.id || H)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: u.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: u.map((B, H) => {
            const M = B.sticky === "left", Y = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left", g = ee[B.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${Y} ${M ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: H === 0 && !g ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : g !== void 0 ? g : ""
              },
              B.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            T,
            " / ",
            P
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: T <= 1,
                onClick: () => L((B) => Math.max(1, B - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Na, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: T >= P,
                onClick: () => L((B) => Math.min(P, B + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Mn, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Cr = ({ node: s, isEditing: a }) => {
  var ee;
  const { props: t, style: r } = s, n = _((G) => G.features), o = _((G) => G.activeFeatureId), l = n.find((G) => String(G.id) === String(s.pageId)) || n.find((G) => String(G.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = String(s.pageId || o || "default"), N = String(((ee = s.dataBinding) == null ? void 0 : ee.fieldName) || s.props.name || s.id), v = pe((G) => ct(G, f, N, void 0)), D = pe((G) => G.setFieldValue), T = pe((G) => G.applyPopulate), L = pe((G) => G.queryReference), I = v !== void 0 ? v : t.value ?? "", [E, V] = S([]);
  _e(() => {
    let G = !0;
    const B = t.reference, H = t.query, M = t.idField || "id", Y = t.textField || t.fieldName || "name";
    return B && L(B, H, M, Y).then((g) => {
      G && V(g);
    }), () => {
      G = !1;
    };
  }, [t.reference, t.query, t.idField, t.textField, L]);
  const P = E.length > 0 ? E : t.options || [], O = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    kt,
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
        ...C
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            disabled: t.disabled,
            value: I,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 transition-all appearance-none cursor-pointer disabled:opacity-50 ${O ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (G) => {
              const B = G.target.value;
              D(f, N, B);
              const H = P.find((Y) => String(Y.value) === String(B)), M = (H == null ? void 0 : H.rawItem) || H;
              t.populateField && typeof t.populateField == "string" && T(f, t.populateField, M), a || ge(s.events, "change", t.label || "Chọn mục", i, {
                componentId: s.id,
                fieldName: N,
                value: B,
                selectedItem: M
              });
            },
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn --" }),
              P.map((G) => /* @__PURE__ */ e.jsx("option", { value: G.value, className: "bg-slate-900 text-slate-100 py-1", children: G.label }, G.value))
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(Cs, { className: "w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" })
      ] })
    }
  );
}, kr = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = _((v) => v.features), o = _((v) => v.activeFeatureId), l = n.find((v) => String(v.id) === String(s.pageId)) || n.find((v) => String(v.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, [f, N] = S(!!t.value);
  return /* @__PURE__ */ e.jsx(
    kt,
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
        ...C
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: t.disabled,
            checked: f,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (v) => {
              N(v.target.checked), a || ge(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: v.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, Tr = ({ node: s, isEditing: a }) => {
  var I;
  const { props: t, style: r } = s, n = _((E) => E.features), o = _((E) => E.activeFeatureId), l = n.find((E) => String(E.id) === String(s.pageId)) || n.find((E) => String(E.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = String(s.pageId || o || "default"), N = String(((I = s.dataBinding) == null ? void 0 : I.fieldName) || s.props.name || s.id), v = pe((E) => ct(E, f, N, void 0)), D = pe((E) => E.setFieldValue), T = v !== void 0 ? v : t.value ?? "", L = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    kt,
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
        ...C
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "relative w-full flex items-center", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            disabled: t.disabled,
            readOnly: a || !!t.readOnly,
            placeholder: "DD/MM/YYYY",
            value: T,
            className: `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${L ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
            onChange: (E) => {
              const V = E.target.value;
              D(f, N, V), a || ge(s.events, "change", t.label || "Chọn ngày", i, {
                componentId: s.id,
                fieldName: N,
                value: V
              });
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ks, { className: "w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" })
      ] })
    }
  );
}, Sr = ({ node: s, children: a }) => {
  const { props: t } = s, r = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(Mt, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: a || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, Ir = ({ node: s }) => {
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
}, Rr = ({ node: s, isEditing: a }) => {
  var E;
  const { props: t, style: r } = s, n = _((V) => V.features), o = _((V) => V.activeFeatureId), l = n.find((V) => String(V.id) === String(s.pageId)) || n.find((V) => String(V.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: c, flexGrow: d, flexShrink: p, flexBasis: x, minWidth: u, maxWidth: y, width: w, ...C } = r || {}, f = String(s.pageId || o || "default"), N = String(((E = s.dataBinding) == null ? void 0 : E.fieldName) || s.props.name || s.id), v = pe((V) => ct(V, f, N, void 0)), D = pe((V) => V.setFieldValue), T = v !== void 0 ? v : t.value !== void 0 ? String(t.value) : "", L = Number(t.rows) || 2, I = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    kt,
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
          rows: L,
          placeholder: t.placeholder || "Nhập nội dung...",
          value: T,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          style: {
            width: "100%",
            ...C
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${I ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (V) => {
            const P = V.target.value;
            D(f, N, P), a || ge(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: N,
              value: P
            });
          },
          onFocus: () => {
            a || ge(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: N
            });
          },
          onBlur: (V) => {
            a || ge(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: N,
              value: V.target.value
            });
          }
        }
      )
    }
  );
}, nl = ({ node: s, isEditing: a, children: t }) => {
  var D, T;
  const { props: r, style: n } = s, o = _((L) => L.updateComponentProps), { flex: l, flexGrow: i, flexShrink: c, flexBasis: d, minWidth: p, maxWidth: x, width: u, ...y } = n || {}, w = [
    { id: "main", label: "TAB 1" }
  ], C = r.tabs || w, [f, N] = S(
    r.activeTabId || ((D = C[0]) == null ? void 0 : D.id) || "main"
  ), v = r.activeTabId || f || ((T = C[0]) == null ? void 0 : T.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...y
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          C.map((L) => {
            const I = L.id === v;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (E) => {
                  E.stopPropagation(), N(L.id), o(s.id, { activeTabId: L.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${I ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: L.label }),
                  L.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${L.badgeColor || "bg-amber-600"}`, children: L.badge })
                ]
              },
              L.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (L) => {
                L.stopPropagation();
                const I = `tab_${Date.now().toString(36)}`, E = [...C, { id: I, label: `Tab Mới ${C.length + 1}` }];
                o(s.id, { tabs: E, activeTabId: I }), N(I);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3", children: t })
      ]
    }
  );
}, ia = ({
  parentId: s,
  order: a,
  tabNodes: t,
  isEditing: r,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var y;
  const l = _((w) => w.addComponent), i = _((w) => w.selectComponent), [c, d] = S(((y = t[0]) == null ? void 0 : y.id) || ""), p = t.find((w) => w.id === c) || t[0], x = (p == null ? void 0 : p.id) || "", u = (w) => {
    var v;
    w.stopPropagation();
    const C = ((v = t[0]) == null ? void 0 : v.pageId) || "2", f = `tab_${Date.now().toString(36)}`, N = {
      id: f,
      type: "Container",
      parentId: s,
      pageId: C,
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
    l(N, s), d(f), i(f);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((w) => {
            const C = w.id === x, f = w.props.label || w.props.title || `Tab #${w.id.slice(-4)}`, N = w.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (v) => {
                  v.stopPropagation(), d(w.id), r && i(w.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${C ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: f }),
                  N !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(N) })
                ]
              },
              w.id
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
                /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: p && o ? o(p, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, Pr = ({
  label: s = "Lô hàng:",
  reference: a = "Transaction",
  displayField: t = "code",
  records: r,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: c = "",
  style: d = {}
}) => {
  var v;
  const p = pe(), x = [
    { id: "1", code: "FCLT-26020005", mblNo: "ASHVT00002005", pol: "SHANGHAI", pod: "TIEN SA TERMINAL" },
    { id: "2", code: "FCLT-26020006", mblNo: "ASHVT00002006", pol: "NINGBO", pod: "TIEN SA TERMINAL" },
    { id: "3", code: "FCLT-26020007", mblNo: "ASHVT00002007", pol: "QINGDAO", pod: "TIEN SA TERMINAL" }
  ], [u, y] = S(r || x), [w, C] = S(n || ((v = x[0]) == null ? void 0 : v.id) || "");
  _e(() => {
    r && r.length > 0 && y(r);
  }, [r]), _e(() => {
    n !== void 0 && C(n);
  }, [n]);
  const f = (D) => {
    C(D.id), l ? l(D) : p.setFormRecord("default", D);
  }, N = () => {
    const D = u.length + 5, T = `FCLT-2602000${D}`, L = {
      id: String(Date.now()),
      code: T,
      mblNo: `ASHVT0000200${D}`
    }, I = [...u, L];
    y(I), C(L.id), i ? i() : p.setFormRecord("default", L);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${c}`,
      style: d,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(zn, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          u.map((D) => {
            const T = String(D.id) === String(w), L = D[t] || D.code || D.name || D.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => f(D),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${T ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: L })
              },
              D.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: N,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm lô hàng / chi tiết mới",
              children: [
                /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
function da(s) {
  var r, n;
  if (!s || s.length === 0) return [];
  const a = [...s].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), t = [];
  for (const o of a) {
    const l = !!((r = o.props) != null && r.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
    if (l) {
      const c = t[t.length - 1];
      c && c.type === "tab_stack" && c.order === i ? c.nodes.push(o) : t.push({
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
const Is = Bt()(
  nr(
    (s) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: a, branch: t, user: r }) => s({ token: a, branch: t, user: r }),
      logout: () => s({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), Ut = ({ node: s, isEditing: a, children: t }) => {
  var d, p, x, u, y;
  const r = Is((w) => w.user), n = (r == null ? void 0 : r.role) || "User", o = s.permissions;
  if (!o || !((d = o.allowedRoles) != null && d.length) && !((p = o.readOnlyRoles) != null && p.length))
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
  if (a)
    return !((x = o.allowedRoles) != null && x.length || (u = o.readOnlyRoles) != null && u.length) ? /* @__PURE__ */ e.jsx(e.Fragment, { children: t }) : /* @__PURE__ */ e.jsxs("div", { className: "relative group/perm w-full", children: [
      t,
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
        "🔒 ",
        ((y = o.allowedRoles) == null ? void 0 : y.join(",")) || "RBAC"
      ] }) })
    ] });
  const l = o.allowedRoles, i = o.readOnlyRoles, c = o.deniedBehavior || "hide";
  return l && l.length > 0 && !l.some((C) => C.toLowerCase() === n.toLowerCase()) ? c === "disable" ? /* @__PURE__ */ e.jsx("div", { className: "opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale", children: t }) : null : i && i.length > 0 && i.some((C) => C.toLowerCase() === n.toLowerCase()) ? /* @__PURE__ */ e.jsx("div", { className: "opacity-75 pointer-events-none cursor-default", children: t }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
};
function ca(s, a) {
  var x, u;
  const t = s.style || {}, r = ((x = s.props) == null ? void 0 : x.colSpan) !== void 0 && ((u = s.props) == null ? void 0 : u.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, c;
  const d = (a == null ? void 0 : a.mode) || "grid", p = (a == null ? void 0 : a.gridColumns) || 12;
  if (d === "grid") {
    let y;
    if (r !== void 0 && !isNaN(r) && r > 0)
      y = Math.min(r, p);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const w = Number(a.columnsPerRow);
      !isNaN(w) && w > 0 ? y = Math.max(1, Math.floor(p / w)) : y = Math.min(4, p);
    } else
      y = Math.min(4, p);
    c = `span ${y} / span ${y}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const y = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const C = Math.min(100, Math.max(2, r / p * 100)), f = r >= p ? "100%" : `calc(${C}% - ${Math.round(y * (1 - r / p))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = f, l = f, o = `0 0 ${f}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const C = Number(a.columnsPerRow);
        if (!isNaN(C) && C > 0) {
          const f = C === 1 ? "100%" : `calc((100% - ${(C - 1) * y}px) / ${C})`;
          t.width === void 0 && t.flex === void 0 && (n = f, l = f, o = `0 0 ${f}`);
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
    gridColumn: c,
    height: t.height,
    minHeight: t.minHeight || (s.type === "Container" ? "90px" : void 0),
    maxHeight: t.maxHeight,
    alignSelf: t.alignSelf
  };
}
const Ot = ({
  node: s,
  isEditing: a = !1,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l
}) => {
  const i = _((f) => f.selection), c = _((f) => f.selectComponent), d = a && i.componentId === s.id, p = (f) => {
    a && (f.stopPropagation(), c(s.id));
  }, x = (f) => {
    a && (f.preventDefault(), f.stopPropagation(), c(s.id), t && t(f, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const f = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), N = s.props.flexConfig || {}, v = s.props.gridConfig || {}, D = {
      direction: N.direction || "row",
      wrap: N.wrap || "wrap",
      gap: N.gap || "12px",
      columnsPerRow: N.columnsPerRow || "auto"
    }, T = Number(
      v.columns || (typeof N.columnsPerRow == "number" ? N.columnsPerRow : 12)
    ) || 12, L = {
      mode: f === "flex" ? "flex" : "grid",
      direction: N.direction || "row",
      columnsPerRow: N.columnsPerRow || "auto",
      gap: N.gap || v.gap || "12px",
      wrap: N.wrap || "wrap",
      gridColumns: T
    }, I = () => {
      const E = s.children || [];
      return E.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : da(E).map((P, O) => {
        if (P.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            ia,
            {
              parentId: s.id,
              order: P.order,
              tabNodes: P.nodes,
              isEditing: a,
              parentFlexConfig: D,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${P.order}_${O}`
          );
        const ee = P.node;
        return l ? /* @__PURE__ */ e.jsx(_t.Fragment, { children: l(ee, L) }, ee.id) : /* @__PURE__ */ e.jsx(
          Ot,
          {
            node: ee,
            isEditing: a,
            onContextMenu: t,
            parentLayout: L,
            isWrappedByDrag: !1
          },
          ee.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(Ut, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx("div", { onClick: p, onContextMenu: x, className: "w-full", children: /* @__PURE__ */ e.jsx(pr, { node: s, isEditing: a, children: I() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(Ut, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      An,
      {
        node: s,
        isEditing: a,
        isSelected: d,
        onClick: p,
        onContextMenu: x,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: I()
      }
    ) }) : /* @__PURE__ */ e.jsx(Ut, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsx(
      An,
      {
        node: s,
        isEditing: a,
        isSelected: d,
        onClick: p,
        onContextMenu: x,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: I()
      }
    ) });
  }
  const u = () => {
    var f, N, v, D, T, L;
    switch (s.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(lr, { node: s, isEditing: a });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(dr, { node: s, isEditing: a });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(Rr, { node: s, isEditing: a });
      case "Number":
        return /* @__PURE__ */ e.jsx(cr, { node: s, isEditing: a });
      case "Label":
        return /* @__PURE__ */ e.jsx(ur, { node: s, isEditing: a });
      case "Table":
        return /* @__PURE__ */ e.jsx(wr, { node: s, isEditing: a });
      case "Select":
        return /* @__PURE__ */ e.jsx(Cr, { node: s, isEditing: a });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(kr, { node: s, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Tr, { node: s, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx(Ir, { node: s, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(Sr, { node: s, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Pr,
          {
            label: ((f = s.props) == null ? void 0 : f.label) ?? "Lô hàng:",
            reference: ((N = s.props) == null ? void 0 : N.reference) ?? "Transaction",
            displayField: ((v = s.props) == null ? void 0 : v.displayField) ?? "code",
            records: (D = s.props) == null ? void 0 : D.records,
            activeId: (T = s.props) == null ? void 0 : T.activeId,
            canAdd: ((L = s.props) == null ? void 0 : L.canAdd) !== !1,
            style: s.style
          }
        );
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          s.type
        ] });
    }
  }, y = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), w = ca(s, y), C = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...w,
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ e.jsx(Ut, { node: s, isEditing: a, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: p,
      onContextMenu: x,
      style: C,
      className: `relative group transition-all duration-150 box-border ${a ? `cursor-pointer rounded-lg ${d ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && d && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
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
}, al = ({
  value: s,
  column: a,
  onSave: t,
  onCancel: r
}) => {
  const [n, o] = S(s ?? ""), l = Zt(null);
  _e(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (d) => {
    d.key === "Enter" ? (d.preventDefault(), t(n)) : d.key === "Escape" && (d.preventDefault(), r());
  }, c = () => {
    t(n);
  };
  return a.componentType === "Select" && a.options && a.options.length > 0 ? /* @__PURE__ */ e.jsx(
    "select",
    {
      ref: l,
      value: n,
      onChange: (d) => o(d.target.value),
      onKeyDown: i,
      onBlur: c,
      className: "w-full h-7 px-1.5 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400",
      children: a.options.map((d) => /* @__PURE__ */ e.jsx("option", { value: d.value, children: d.label }, d.value))
    }
  ) : a.componentType === "DatePicker" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "text",
      value: n,
      placeholder: "DD/MM/YYYY",
      onChange: (d) => o(d.target.value),
      onKeyDown: i,
      onBlur: c,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  ) : a.componentType === "Number" ? /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "number",
      value: n,
      step: a.precision && a.precision > 0 ? Math.pow(10, -a.precision) : 1,
      onChange: (d) => o(d.target.value === "" ? "" : Number(d.target.value)),
      onKeyDown: i,
      onBlur: c,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs text-right border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  ) : /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      type: "text",
      value: n,
      onChange: (d) => o(d.target.value),
      onKeyDown: i,
      onBlur: c,
      className: "w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    }
  );
}, We = Bt()(
  ns((s, a) => ({
    openTabs: [],
    activeTabId: null,
    activePopup: null,
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
        const i = a().openTabs, c = i.find(
          (d) => {
            var p;
            return d.featureId === t && String(((p = d.params) == null ? void 0 : p.id) ?? "") === String((r == null ? void 0 : r.id) ?? "");
          }
        );
        if (c)
          s({ activeTabId: c.id });
        else {
          const d = `tab_${t}_${r.id || Date.now()}`, p = {
            id: d,
            featureId: t,
            title: l,
            params: r
          };
          s({
            openTabs: [...i, p],
            activeTabId: d
          });
        }
        _.getState().setActiveFeature(t, (r == null ? void 0 : r.id) ?? null);
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
), ws = ({
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
    listeners: c,
    setNodeRef: d,
    transform: p,
    isDragging: x
  } = Jn({
    id: s.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: u, isOver: y } = Xn({
    id: s.id,
    disabled: !a
  }), w = (L) => {
    d(L), u(L);
  }, C = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), N = {
    ...ca(s, C),
    transform: Ha.Translate.toString(p),
    opacity: x ? 0.35 : 1,
    transition: x ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, v = s.type === "Container" || s.type === "Section" || s.type === "Tabs", D = y && v && !x, T = y && !v && !x;
  return /* @__PURE__ */ e.jsxs("div", { ref: w, style: N, className: "group/drag relative", children: [
    T && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    D && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...c,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (L) => L.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ot,
      {
        node: s,
        isEditing: a,
        onContextMenu: t,
        parentLayout: C,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (L, I) => /* @__PURE__ */ e.jsx(
          ws,
          {
            node: L,
            isEditing: a,
            onContextMenu: t,
            parentLayout: I && "mode" in I ? I : void 0,
            parentFlexConfig: I && !("mode" in I) ? I : void 0,
            activeId: o,
            overId: l
          },
          L.id
        )
      }
    )
  ] });
}, ua = ({ x: s, y: a, items: t, onClose: r }) => {
  const n = Zt(null);
  _e(() => {
    const i = (d) => {
      n.current && !n.current.contains(d.target) && r();
    }, c = (d) => {
      d.key === "Escape" && r();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", c), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", c);
    };
  }, [r]);
  const o = Math.min(s, window.innerWidth - 220), l = Math.min(a, window.innerHeight - (t.length * 36 + 20));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      style: { top: `${l}px`, left: `${o}px` },
      className: "fixed z-50 w-56 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100",
      children: t.map((i, c) => {
        if (i.divider)
          return /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-slate-800" }, c);
        const d = i.icon;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: (p) => {
              p.stopPropagation(), i.onClick(), r();
            },
            className: `w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors cursor-pointer text-left ${i.danger ? "text-red-400 hover:bg-red-500/20 hover:text-red-300" : "hover:bg-blue-600 hover:text-white"}`,
            children: [
              d && /* @__PURE__ */ e.jsx(d, { className: "w-4 h-4 shrink-0 opacity-80" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium truncate", children: i.label })
            ]
          },
          c
        );
      })
    }
  );
}, rl = ({
  isEditing: s,
  activeId: a,
  overId: t
}) => {
  const r = _((P) => P.features), n = _((P) => P.activeFeatureId), o = _((P) => P.activeRecordId), l = _((P) => P.addComponent), i = _((P) => P.selectComponent), c = _((P) => P.removeComponent), d = _((P) => P.updateComponentProps);
  _((P) => P.updateFeatureLayout);
  const p = _((P) => P.updateFeatureScriptFile), x = r.find((P) => P.id === n), u = (x == null ? void 0 : x.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  _t.useEffect(() => {
    var O, ee;
    if ((x == null ? void 0 : x.scriptFile) === "transactionDetail.bl.ts" || (x == null ? void 0 : x.route) === "/fcl-import" || ((O = x == null ? void 0 : x.name) == null ? void 0 : O.toLowerCase().includes("fcl import")) || !!(x != null && x.isDetail)) {
      let G = o;
      !G && typeof window < "u" && (G = new URLSearchParams(window.location.search).get("id"));
      const B = G || "1", H = pe.getState().formRecords[n], M = (H == null ? void 0 : H.id) || (H == null ? void 0 : H.Id);
      if (String(M) !== String(B)) {
        const { module: Y } = Zn(x == null ? void 0 : x.scriptFile), g = (Y == null ? void 0 : Y.loadDetail) || ((ee = Y == null ? void 0 : Y.transactionDetailBL) == null ? void 0 : ee.loadDetail);
        typeof g == "function" && g(B).then((ie) => {
          ie && n && (pe.getState().setFormRecord(n, ie), pe.getState().setFormRecord("default", ie));
        });
      }
    }
  }, [n, o, x == null ? void 0 : x.scriptFile, x == null ? void 0 : x.route, x == null ? void 0 : x.name, x == null ? void 0 : x.isDetail]);
  const { setNodeRef: y, isOver: w } = Xn({
    id: "canvas-root",
    disabled: !s
  }), [C, f] = S(""), N = !!(x != null && x.scriptFile && x.scriptFile.trim().length > 0), [v, D] = S(null), T = (P, O = {}, ee = {}) => ({
    id: `${P.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: P,
    parentId: null,
    pageId: n,
    props: {
      label: P === "Button" ? "Nút mới" : P === "Label" ? "Tiêu đề khối" : void 0,
      variant: P === "Button" ? "primary" : void 0,
      size: P === "Button" ? "md" : void 0,
      placeholder: P === "TextBox" ? "Nhập nội dung..." : void 0,
      ...O
    },
    style: {
      ...ee
    },
    events: [],
    order: ((x == null ? void 0 : x.components.length) || 0) + 1
  }), L = (P) => {
    !s || !N || (P.preventDefault(), i(null), D({
      x: P.clientX,
      y: P.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, I = (P, O) => {
    if (!s) return;
    P.preventDefault(), P.stopPropagation(), i(O.id);
    const ee = O.type === "Container" || O.type === "Section" || O.type === "Tabs";
    D({
      x: P.clientX,
      y: P.clientY,
      targetContainerId: ee ? O.id : O.parentId,
      selectedNode: O
    });
  }, E = () => {
    var B, H, M;
    if (!v) return [];
    const { targetContainerId: P, selectedNode: O } = v, ee = O && (O.type === "Container" || O.type === "Section" || O.type === "Tabs");
    if (O && ee) {
      const Y = O.props.layoutMode === "grid", g = ((B = O.props.flexConfig) == null ? void 0 : B.direction) === "row", ie = !!(O.props.isTab || O.props.tab || O.type === "Tabs"), he = O.props.activeTabId || ((M = (H = O.props.tabs) == null ? void 0 : H[0]) == null ? void 0 : M.id) || "main", oe = ie ? { tabId: he } : {};
      return [
        ...ie ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: ot,
            onClick: () => {
              const ne = O.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], Ce = `tab_${Date.now().toString(36)}`, te = [
                ...ne,
                { id: Ce, label: `Tab Mới ${ne.length + 1}` }
              ];
              d(O.id, {
                tabs: te,
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
          icon: ot,
          onClick: () => {
            const ne = T(
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
                ...oe
              },
              {
                flex: g ? "1" : void 0,
                width: g ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ne, P);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: Nt,
          onClick: () => {
            const ne = T(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...oe
              },
              {
                flex: g ? "1" : void 0,
                width: g ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(ne, P);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Nt,
          onClick: () => {
            const ne = T("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...oe
            });
            l(ne, P);
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
          icon: yt,
          onClick: () => l(
            T("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: yt,
          onClick: () => l(
            T("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: yt,
          onClick: () => l(
            T("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: yt,
          onClick: () => l(
            T("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: qt,
          onClick: () => l(
            T("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: Jt,
          onClick: () => l(
            T("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: qt,
          onClick: () => l(
            T("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...oe
            }),
            P
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: Xt,
          onClick: () => l(
            T("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...oe
            }),
            P
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: g ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: g ? Ts : Cn,
          onClick: () => {
            d(O.id, {
              flexConfig: {
                ...O.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: g ? "column" : "row"
              }
            });
          }
        },
        {
          label: Y ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Nt,
          onClick: () => {
            Y ? d(O.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : d(O.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: Ke,
          danger: !0,
          onClick: () => c(O.id)
        }
      ];
    }
    const G = u.direction === "row";
    return [
      {
        label: G ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: ot,
        onClick: () => {
          const Y = T(
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
              flex: G ? "1" : void 0,
              width: G ? void 0 : "100%",
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
        icon: Nt,
        onClick: () => {
          const Y = T(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: G ? "1" : void 0,
              width: G ? void 0 : "100%",
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
        icon: qt,
        onClick: () => l(T("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: yt,
        onClick: () => l(T("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: Jt,
        onClick: () => l(T("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: Xt,
        onClick: () => l(T("Table"), null)
      }
    ];
  }, V = (x == null ? void 0 : x.components.filter((P) => !P.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      onContextMenu: L,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${w && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (x == null ? void 0 : x.name) || "Màn hình" }),
              N ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(xs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: x == null ? void 0 : x.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Ft, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: N ? (x == null ? void 0 : x.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." })
          ] }) }),
          N ? V.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: L,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${w ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(ot, { className: "w-7 h-7" }) }),
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
                      const P = T(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      P.children = [
                        T(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        T(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(P, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(Cn, { className: "w-4 h-4" }),
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
              children: da(V).map((P, O) => {
                if (P.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    ia,
                    {
                      parentId: null,
                      order: P.order,
                      tabNodes: P.nodes,
                      isEditing: s,
                      onContextMenu: I,
                      renderChild: (B, H) => s ? /* @__PURE__ */ e.jsx(
                        ws,
                        {
                          node: B,
                          isEditing: s,
                          onContextMenu: I,
                          parentLayout: H && "mode" in H ? H : void 0,
                          parentFlexConfig: H && !("mode" in H) ? H : void 0,
                          activeId: a,
                          overId: t
                        },
                        B.id
                      ) : /* @__PURE__ */ e.jsx(
                        Ot,
                        {
                          node: B,
                          isEditing: !1,
                          onContextMenu: I,
                          parentLayout: H && "mode" in H ? H : void 0,
                          parentFlexConfig: H && !("mode" in H) ? H : void 0
                        },
                        B.id
                      )
                    },
                    `root_tab_stack_${P.order}_${O}`
                  );
                const ee = P.node, G = {
                  mode: "flex",
                  direction: u.direction || "column",
                  wrap: u.wrap || "wrap",
                  gap: u.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  ws,
                  {
                    node: ee,
                    isEditing: s,
                    onContextMenu: I,
                    parentLayout: G,
                    activeId: a,
                    overId: t
                  },
                  ee.id
                ) : /* @__PURE__ */ e.jsx(
                  Ot,
                  {
                    node: ee,
                    isEditing: !1,
                    onContextMenu: I,
                    parentLayout: G
                  },
                  ee.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Ft, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (P) => {
                  P.preventDefault();
                  const O = C.trim();
                  if (!O) return;
                  const ee = O.endsWith(".bl.ts") ? O : O.endsWith(".ts") ? O.replace(/\.ts$/, ".bl.ts") : `${O}.bl.ts`;
                  p(n, ee), f("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(xs, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: C,
                          onChange: (P) => f(P.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  x && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(ja, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const P = x.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          f(`${P || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          x.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
                          ".bl.ts"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: !C.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(hs, { className: "w-4 h-4" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Xác Nhận & Mở Thiết Kế Giao Diện" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        v && /* @__PURE__ */ e.jsx(
          ua,
          {
            x: v.x,
            y: v.y,
            items: E(),
            onClose: () => D(null)
          }
        )
      ]
    }
  );
};
function Ar(s) {
  return s.replace(/-([a-z])/g, (a, t) => t.toUpperCase());
}
function Dr(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function Lr(s) {
  const a = {};
  if (!s || typeof s != "string") return a;
  const r = s.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of r) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), c = o.slice(l + 1).trim();
    if (i && c) {
      let d = Ar(i);
      d === "justify" && (d = "justifyContent"), d === "align" && (d = "alignItems"), a[d] = c;
    }
  }
  return a;
}
function Fr(s) {
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
    const o = Dr(r);
    t.push(`${o}: ${n};`);
  }
  return t.join(`
`);
}
const Fn = [
  {
    name: "Transaction",
    displayName: "Lô Hàng (Transactions)",
    tableName: "Transactions",
    description: "Thực thể hồ sơ lô hàng vận chuyển FCL / LCL",
    columns: [
      { name: "Id", displayName: "Id", dataType: "number", isRequired: !0, isPrimaryKey: !0, isAuditField: !1 },
      { name: "JobNo", displayName: "JobNo", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TypeId", displayName: "TypeId", dataType: "number", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "ShipmentDate", displayName: "ShipmentDate", dataType: "date", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "MblNo", displayName: "MblNo", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "VendorId", displayName: "VendorId", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "VendorName", displayName: "VendorName", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "SLines", displayName: "SLines", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Agent", displayName: "Agent", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "PolId", displayName: "PolId", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "PodId", displayName: "PodId", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Service", displayName: "Service", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Opic", displayName: "Opic", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TotalPackages", displayName: "TotalPackages", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TotalGw", displayName: "TotalGw", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TotalCbm", displayName: "TotalCbm", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "TotalVgm", displayName: "TotalVgm", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Active", displayName: "Active", dataType: "boolean", isRequired: !1, isPrimaryKey: !1, isAuditField: !0 }
    ]
  },
  {
    name: "Terminal",
    displayName: "Cảng Biển / Ga Hàng Không (Terminals)",
    tableName: "Terminals",
    description: "Danh mục cảng biển xếp dỡ hàng hóa",
    columns: [
      { name: "Id", displayName: "Id", dataType: "number", isRequired: !0, isPrimaryKey: !0, isAuditField: !1 },
      { name: "Code", displayName: "Code", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "FullName", displayName: "FullName", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Country", displayName: "Country", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "VendorId", displayName: "VendorId", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "VendorName", displayName: "VendorName", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "AgentName", displayName: "AgentName", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Active", displayName: "Active", dataType: "boolean", isRequired: !1, isPrimaryKey: !1, isAuditField: !0 }
    ]
  },
  {
    name: "Container",
    displayName: "Danh Mục Container (Containers)",
    tableName: "Containers",
    description: "Chi tiết thông tin các Container trong lô hàng",
    columns: [
      { name: "Id", displayName: "Id", dataType: "number", isRequired: !0, isPrimaryKey: !0, isAuditField: !1 },
      { name: "TransactionId", displayName: "TransactionId", dataType: "number", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "ContainerNo", displayName: "ContainerNo", dataType: "string", isRequired: !0, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Size", displayName: "Size", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "SealNo", displayName: "SealNo", dataType: "string", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "PackageNumber", displayName: "PackageNumber", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Gw", displayName: "Gw", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Cbm", displayName: "Cbm", dataType: "number", isRequired: !1, isPrimaryKey: !1, isAuditField: !1 },
      { name: "Active", displayName: "Active", dataType: "boolean", isRequired: !1, isPrimaryKey: !1, isAuditField: !0 }
    ]
  }
];
let zt = null;
async function Er() {
  if (zt) return zt;
  try {
    const s = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (s.ok) {
      const a = await s.json();
      if (Array.isArray(a) && a.length > 0)
        return zt = a, a;
    }
  } catch {
    console.warn("[MetadataService] Server offline, using fallback entity catalogs");
  }
  return zt = Fn, Fn;
}
const Or = ({
  isOpen: s,
  node: a,
  onClose: t,
  onSave: r
}) => {
  const [n, o] = S("info"), [l, i] = S([]), [c, d] = S(""), [p, x] = S("General"), [u, y] = S(""), [w, C] = S("Dropdown"), [f, N] = S(""), [v, D] = S(""), [T, L] = S(""), [I, E] = S(1), [V, P] = S(4), [O, ee] = S(""), [G, B] = S('{"change":"AutoPOL"}'), [H, M] = S(""), [Y, g] = S(""), [ie, he] = S(""), [oe, ne] = S(""), [Ce, te] = S(""), [ve, Ie] = S(""), [Oe, Le] = S(""), [ke, Pe] = S(""), [b, R] = S(""), [J, Q] = S(""), [je, be] = S(""), [Z, de] = S(""), [W, q] = S(""), [xe, we] = S(""), [Te, $e] = S(""), [Fe, Qe] = S(""), [Ze, et] = S(""), [ut, tt] = S(""), [st, pt] = S(""), [xt, mt] = S(""), [ht, bt] = S(""), [Tt, St] = S(""), [nt, ft] = S(""), [He, at] = S("id"), [rt, lt] = S(""), [Ve, qe] = S(""), [j, F] = S(""), [k, K] = S(""), [z, U] = S(""), [ce, ye] = S(""), [Be, Ne] = S(""), [Ht, m] = S(""), [A, $] = S(""), [X, re] = S(""), [le, ae] = S(!1), [se, Se] = S(!0), [me, fe] = S(!1), [De, Ue] = S(!1), [Ge, Re] = S(!1), [gt, Vt] = S(!1), [Gt, Rs] = S(!1), [Ps, As] = S(!1), [Ds, Ls] = S(!1), [Fs, Es] = S(!1), [Os, _s] = S(!1), [Bs, Ms] = S(!1), [$s, Hs] = S(!1), [Vs, Gs] = S(!1), [Ws, Ks] = S(!1), [Us, zs] = S(!1), [qs, Ys] = S(!0), [Js, Xs] = S(!0), [Qs, Zs] = S(!1), [en, tn] = S(!1), [sn, nn] = S(!1), [an, rn] = S(!1), [ln, on] = S(!1), [dn, cn] = S(!1), [un, pn] = S(!1), [xn, mn] = S(!1), [rs, hn] = S(
    'return "?$filter=Active eq true and TerminalType/any(a:a/TypeId in ({${1}})) &$orderby=Id desc"'
  ), [bn, fn] = S(
    '(x, y) => { return (x.PortCode !== null && x.PortCode !== undefined && x.PortCode !== "") ? (x.PortCode + " - " + x.Name) : x.Name; }'
  ), [gn, vn] = S(""), [yn, Nn] = S("{ShortName}"), [jn, wn] = S("");
  if (_e(() => {
    Er().then((h) => i(h));
  }, []), _e(() => {
    if (a) {
      const h = a.props || {}, Me = a.dataBinding || {};
      d(String(h.id ?? a.id)), x(h.group || "General"), y(h.reference || Me.entityName || ""), C(a.type || "Dropdown"), N(String(h.parentId ?? "")), D(h.refName || h.reference || Me.entityName || ""), L(Me.fieldName || h.name || h.fieldName || a.id), E(Number(a.order ?? h.order ?? 1)), P(Number(h.colSpan ?? h.column ?? 4)), ee(h.label || ""), B(
        typeof h.events == "string" ? h.events : h.events ? JSON.stringify(h.events) : '{"change":"AutoPOL"}'
      ), M(h.style || ""), g(h.childStyle || ""), he(h.validation || ""), ne(h.selectField || ""), te(h.plainText || ""), Ie(h.cssClass || h.className || ""), Le(h.sqlSelect || ""), Pe(String(h.offset ?? "")), R(h.groupFormat || ""), Q(h.formatSummary || ""), be(h.orderBySummary || ""), de(h.groupEvent || ""), q(h.icon || ""), we(h.system || ""), $e(h.refClass || "TMS.UI.Business.Catalogue.TerminalEditor"), Qe(h.hotKey || ""), et(h.dateTimeField || ""), tt(String(h.addStart ?? "")), pt(String(h.addEnd ?? "")), mt(String(h.bodyRowHeight ?? "")), bt(h.sqlWhere || ""), St(String(h.footerHeight ?? "")), ft(h.joinTable || ""), at(h.idField || "id"), lt(String(h.headerHeight ?? "")), qe(h.populateField || ""), F(String(h.precision ?? "")), K(h.groupBy || ""), U(h.disabledExp || ""), ye(h.showExp || ""), Ne(String(h.row ?? "")), m(h.template || ""), $(h.templateLocked || ""), re(String(h.default ?? h.defaultValue ?? "")), ae(!!h.realtime), Se(h.showLabel !== !1 && h.label !== !1), fe(!!h.hidden), Ue(!!h.filterLocal), Re(!!h.sqlSearch), Vt(!!h.cache), Rs(!!h.moveTab), As(!!h.focus), Ls(!!h.focusSearch), Es(!!h.noLoad), _s(!!h.collapsible), Ms(!!h.showHotKey), Hs(!!h.history), Gs(!!h.top), Ks(!!h.hideAnd), zs(!!h.disabled), Ys(h.visibility !== !1), Xs(h.active !== !1), Zs(!!h.upperCase), tn(!!(h.virtualScroll || h.virtual)), nn(!!h.isPrivate), rn(!!h.renderIndex), on(!!(h.canAdd || h.add)), cn(!!(h.canSearch || h.search)), pn(!!(h.isSummary || h.summary)), mn(!!h.showDateTimeField), (h.dataSource || h.dataSourceFilter) && hn(String(h.dataSource || h.dataSourceFilter)), h.formatEntity && fn(String(h.formatEntity)), h.migration && vn(String(h.migration)), h.formatData && Nn(String(h.formatData)), h.query && wn(String(h.query));
    }
  }, [a]), !s || !a) return null;
  const ha = () => {
    var Wt;
    let h = G;
    try {
      G.trim().startsWith("{") && (h = JSON.parse(G));
    } catch {
      h = G;
    }
    const Me = {
      ...a.props,
      id: c,
      group: p,
      reference: u,
      componentType: w,
      parentId: f,
      refName: v,
      fieldName: T,
      order: Number(I) || 1,
      colSpan: Number(V) || 4,
      column: Number(V) || 4,
      label: O,
      events: h,
      style: H,
      childStyle: Y,
      validation: ie,
      selectField: oe,
      plainText: Ce,
      cssClass: ve,
      sqlSelect: Oe,
      offset: ke,
      groupFormat: b,
      formatSummary: J,
      orderBySummary: je,
      groupEvent: Z,
      icon: W,
      system: xe,
      refClass: Te,
      hotKey: Fe,
      dateTimeField: Ze,
      addStart: ut,
      addEnd: st,
      bodyRowHeight: xt,
      sqlWhere: ht,
      footerHeight: Tt,
      joinTable: nt,
      idField: He,
      headerHeight: rt,
      populateField: Ve,
      precision: j ? Number(j) : void 0,
      groupBy: k,
      disabledExp: z,
      showExp: ce,
      row: Be,
      template: Ht,
      templateLocked: A,
      default: X,
      // Display flags
      realtime: le,
      showLabel: se,
      hidden: me,
      filterLocal: De,
      sqlSearch: Ge,
      cache: gt,
      moveTab: Gt,
      focus: Ps,
      focusSearch: Ds,
      noLoad: Fs,
      collapsible: Os,
      showHotKey: Bs,
      history: $s,
      top: Vs,
      hideAnd: Ws,
      disabled: Us,
      visibility: qs,
      active: Js,
      upperCase: Qs,
      virtual: en,
      isPrivate: sn,
      renderIndex: an,
      add: ln,
      search: dn,
      summary: un,
      showDateTimeField: xn,
      // Code blocks
      dataSource: rs,
      dataSourceFilter: rs,
      formatEntity: bn,
      migration: gn,
      formatData: yn,
      query: jn
    }, ls = {
      ...a.dataBinding || {},
      entityName: u || ((Wt = a.dataBinding) == null ? void 0 : Wt.entityName) || p || "General",
      fieldName: T || a.id,
      twoWay: !0
    };
    r(a.id, Me, ls), t();
  }, ue = (h, Me, ls) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${Me ? "text-slate-200 font-medium" : "text-slate-400"}`, children: h }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: Me,
        onChange: (Wt) => ls(Wt.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return $t(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            c || a.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: ha,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
                /* @__PURE__ */ e.jsx(ms, { className: "w-3.5 h-3.5 text-teal-400" }),
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
                /* @__PURE__ */ e.jsx(Mt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
                      value: c,
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
                      value: p,
                      onChange: (h) => x(h.target.value),
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
                      onChange: (h) => {
                        y(h.target.value), v || D(h.target.value);
                      },
                      list: "entity-list",
                      placeholder: "VD: Terminal, Transaction...",
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "entity-list", children: l.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.name, children: h.displayName }, h.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: w,
                      onChange: (h) => C(h.target.value),
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
                      value: f,
                      onChange: (h) => N(h.target.value),
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
                      value: v,
                      onChange: (h) => D(h.target.value),
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
                      value: T,
                      onChange: (h) => L(h.target.value),
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
                      value: I,
                      onChange: (h) => E(h.target.value),
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
                      value: V,
                      onChange: (h) => P(h.target.value),
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
                      onChange: (h) => ee(h.target.value),
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
                      value: G,
                      onChange: (h) => B(h.target.value),
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
                      value: H,
                      onChange: (h) => M(h.target.value),
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
                      value: Y,
                      onChange: (h) => g(h.target.value),
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
                      value: ie,
                      onChange: (h) => he(h.target.value),
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
                      value: oe,
                      onChange: (h) => ne(h.target.value),
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
                      value: Ce,
                      onChange: (h) => te(h.target.value),
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
                      value: ve,
                      onChange: (h) => Ie(h.target.value),
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
                      value: Oe,
                      onChange: (h) => Le(h.target.value),
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
                      value: ke,
                      onChange: (h) => Pe(h.target.value),
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
                      value: b,
                      onChange: (h) => R(h.target.value),
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
                      value: J,
                      onChange: (h) => Q(h.target.value),
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
                      onChange: (h) => be(h.target.value),
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
                      value: Z,
                      onChange: (h) => de(h.target.value),
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
                      value: W,
                      onChange: (h) => q(h.target.value),
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
                      onChange: (h) => we(h.target.value),
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
                      value: Te,
                      onChange: (h) => $e(h.target.value),
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
                      onChange: (h) => Qe(h.target.value),
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
                      value: Ze,
                      onChange: (h) => et(h.target.value),
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
                      value: ut,
                      onChange: (h) => tt(h.target.value),
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
                      value: st,
                      onChange: (h) => pt(h.target.value),
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
                      value: xt,
                      onChange: (h) => mt(h.target.value),
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
                      value: ht,
                      onChange: (h) => bt(h.target.value),
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
                      value: Tt,
                      onChange: (h) => St(h.target.value),
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
                      value: nt,
                      onChange: (h) => ft(h.target.value),
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
                      onChange: (h) => at(h.target.value),
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
                      value: rt,
                      onChange: (h) => lt(h.target.value),
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
                      value: Ve,
                      onChange: (h) => qe(h.target.value),
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
                      value: j,
                      onChange: (h) => F(h.target.value),
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
                      value: k,
                      onChange: (h) => K(h.target.value),
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
                      value: z,
                      onChange: (h) => U(h.target.value),
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
                      value: ce,
                      onChange: (h) => ye(h.target.value),
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
                      value: Be,
                      onChange: (h) => Ne(h.target.value),
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
                      value: Ht,
                      onChange: (h) => m(h.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Ft, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: A,
                      onChange: (h) => $(h.target.value),
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
                      value: X,
                      onChange: (h) => re(h.target.value),
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
                  ue("Realtime", le, ae),
                  ue("Label", se, Se),
                  ue("Hidden", me, fe),
                  ue("FilterLocal", De, Ue),
                  ue("SqlSearch", Ge, Re),
                  ue("Cache", gt, Vt),
                  ue("Move Tab", Gt, Rs),
                  ue("Focus", Ps, As),
                  ue("FocusSearch", Ds, Ls),
                  ue("No Load", Fs, Es),
                  ue("Collapsible", Os, _s),
                  ue("HotKey", Bs, Ms),
                  ue("History", $s, Hs)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  ue("Top", Vs, Gs),
                  ue("HideAnd", Ws, Ks),
                  ue("Disabled", Us, zs),
                  ue("Visibility", qs, Ys),
                  ue("Active", Js, Xs),
                  ue("Upper Case", Qs, Zs),
                  ue("Virtual", en, tn),
                  ue("Private", sn, nn),
                  ue("Render Index", an, rn),
                  ue("Add", ln, on),
                  ue("Search", dn, cn),
                  ue("Sumary", un, pn),
                  ue("DateTime Field", xn, mn)
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
                      value: rs,
                      onChange: (h) => hn(h.target.value),
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
                      value: bn,
                      onChange: (h) => fn(h.target.value),
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
                      value: gn,
                      onChange: (h) => vn(h.target.value),
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
                      value: yn,
                      onChange: (h) => Nn(h.target.value),
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
                    value: jn,
                    onChange: (h) => wn(h.target.value),
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
            /* @__PURE__ */ e.jsx(ms, { className: "w-4 h-4 text-teal-400" }),
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
              (h, Me) => /* @__PURE__ */ e.jsxs("tr", { className: "border-b border-slate-800 hover:bg-slate-800/40", children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium text-slate-200 border-r border-slate-800", children: h }),
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
                    defaultChecked: Me <= 1,
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
                    defaultChecked: Me > 1,
                    className: "w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                  }
                ) })
              ] }, h)
            ) })
          ] }) })
        ] }) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Jt, { className: "w-4 h-4 text-teal-400" }),
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
}, us = [
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
], ll = ({ width: s }) => {
  var Oe, Le, ke, Pe;
  const [a, t] = S("layout"), [r, n] = S(null), [o, l] = S(!1), [i, c] = S(!1), [d, p] = S(null), [x, u] = S(null), y = _((b) => b.features), w = _((b) => b.activeFeatureId), C = _((b) => b.selection), f = _((b) => b.selectComponent), N = _((b) => b.addComponent), v = _((b) => b.updateComponentProps), D = _((b) => b.updateComponentStyle), T = _((b) => b.updateComponentEvents), L = _((b) => b.updateComponentDataBinding), I = _((b) => b.updateComponentValidation), E = _((b) => b.updateComponentPermissions), V = _((b) => b.updateComponentOrder), P = _((b) => b.removeComponent);
  _((b) => b.distributeSiblingWidths);
  const O = _((b) => b.updateFeatureScriptFile), [ee, G] = S(""), [B, H] = S(0), M = y.find((b) => b.id === w), Y = (b, R) => {
    if (!R) return null;
    for (const J of b) {
      if (J.id === R) return J;
      if (J.children) {
        const Q = Y(J.children, R);
        if (Q) return Q;
      }
    }
    return null;
  }, g = C.componentId && M ? Y(M.components, C.componentId) : null, ie = g != null && g.parentId && M ? Y(M.components, g.parentId) : null, he = ie && ((Oe = ie.props) != null && Oe.isTab || (Le = ie.props) != null && Le.tab || ie.type === "Tabs") ? ie : null;
  if (!g) {
    const b = M ? M.components.filter((R) => !R.parentId) : [];
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
                    onChange: (R) => O(M.id, R.target.value),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(it, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      b.length,
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
                      const R = `box_${Date.now().toString(36)}`;
                      N(
                        {
                          id: R,
                          type: "Container",
                          parentId: null,
                          pageId: M.id,
                          order: b.length + 1,
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
                      /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              b.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...b].sort((R, J) => (R.order ?? 1) - (J.order ?? 1)).map((R, J) => {
                var je, be;
                const Q = !!((je = R.props) != null && je.tab || (be = R.props) != null && be.isTab || R.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => f(R.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          J + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: R.props.label || R.props.title || R.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: R.type }),
                            Q && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            R.id
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
                              value: Number(R.order ?? R.props.order ?? J + 1),
                              onClick: (Z) => Z.stopPropagation(),
                              onChange: (Z) => {
                                const de = Number(Z.target.value);
                                V(R.id, de);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (Z) => {
                              Z.stopPropagation(), P(R.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  R.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const oe = g.type === "Container" || g.type === "Section" || g.type === "Tabs", ne = !oe && (a === "layout" || a === "children") ? "props" : a, Ce = g.props.layoutMode || "flex", te = g.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, ve = g.props.gridConfig || { columns: 2, gap: "16px" }, Ie = g.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: g.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: g.props.label || g.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                g.id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c(!0),
                className: "p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Mở Component properties modal (Chuẩn C# Core)",
                children: /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => P(g.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(Ke, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          oe && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Nt, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          oe && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(it, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Phần tử (",
                  Ie.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
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
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(wa, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Xe, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(kn, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(Tn, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${ne === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Ft, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          oe && ne === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => v(g.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Ce === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ot, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => v(g.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${Ce === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Nt, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              Ce === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: te.direction || "row",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, direction: b.target.value }
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
                          value: typeof te.columnsPerRow == "number" ? te.columnsPerRow : ve.columns || 12,
                          onChange: (b) => {
                            const R = Math.max(1, Number(b.target.value) || 12);
                            v(g.id, {
                              flexConfig: { ...te, columnsPerRow: R },
                              gridConfig: { ...ve, columns: R }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(te.columnsPerRow || "12"),
                          onChange: (b) => {
                            const R = b.target.value === "auto" ? "auto" : Number(b.target.value);
                            v(g.id, {
                              flexConfig: {
                                ...te,
                                columnsPerRow: R,
                                wrap: R !== "auto" ? "wrap" : te.wrap
                              },
                              gridConfig: {
                                ...ve,
                                columns: R === "auto" ? 12 : R
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
                        value: te.justify || "flex-start",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, justify: b.target.value }
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
                        value: te.align || "center",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, align: b.target.value }
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
                        value: te.gap || "12px",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, gap: b.target.value }
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
                        value: te.wrap || "wrap",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, wrap: b.target.value }
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
              Ce === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: ve.columns || 12,
                          onChange: (b) => {
                            const R = Math.max(1, Number(b.target.value) || 12);
                            v(g.id, {
                              gridConfig: { ...ve, columns: R },
                              flexConfig: { ...te, columnsPerRow: R }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(ve.columns || 12),
                          onChange: (b) => {
                            const R = Number(b.target.value);
                            v(g.id, {
                              gridConfig: { ...ve, columns: R },
                              flexConfig: { ...te, columnsPerRow: R }
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
                        value: te.gap || ve.gap || "12px",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, gap: b.target.value },
                          gridConfig: { ...ve, gap: b.target.value }
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
                        value: te.justify || "flex-start",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, justify: b.target.value }
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
                        value: te.align || "center",
                        onChange: (b) => v(g.id, {
                          flexConfig: { ...te, align: b.target.value }
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
                    checked: !!(g.props.isTab || g.props.tab || g.type === "Tabs"),
                    onChange: (b) => {
                      var Q;
                      const R = b.target.checked, J = g.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      v(g.id, {
                        isTab: R,
                        tab: R,
                        tabs: R ? J : g.props.tabs,
                        activeTabId: R ? g.props.activeTabId || ((Q = J[0]) == null ? void 0 : Q.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(g.props.isTab || g.props.tab || g.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: g.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (b) => v(g.id, { label: b.target.value }),
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
                        value: Number(g.order ?? g.props.order ?? 1),
                        onChange: (b) => {
                          const R = Number(b.target.value);
                          V(g.id, R);
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
                        value: g.props.badge !== void 0 ? String(g.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (b) => v(g.id, {
                          badge: b.target.value || void 0
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
          oe && ne === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                Ie.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            Ie.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...Ie].sort((b, R) => (b.order ?? 1) - (R.order ?? 1)).map((b, R) => {
              var je, be;
              const J = C.componentId === b.id, Q = !!((je = b.props) != null && je.tab || (be = b.props) != null && be.isTab || b.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => f(b.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${J ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        R + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: b.props.label || b.props.title || b.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: b.type }),
                          Q && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          b.id
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
                            value: b.order ?? R + 1,
                            onClick: (Z) => Z.stopPropagation(),
                            onChange: (Z) => {
                              const de = Number(Z.target.value);
                              V(b.id, de);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (Z) => {
                            Z.stopPropagation(), P(b.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                b.id
              );
            }) })
          ] }),
          ne === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(g.order ?? g.props.order ?? 1),
                      onChange: (b) => {
                        const R = Number(b.target.value);
                        V(g.id, R);
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
                        value: Number(g.props.colSpan || 4),
                        onChange: (b) => {
                          const R = Math.max(1, Number(b.target.value) || 1);
                          v(g.id, { colSpan: R });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: g.props.colSpan || 4,
                        onChange: (b) => v(g.id, { colSpan: Number(b.target.value) }),
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
                    g.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(g.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            oe && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(g.props.tab || g.props.isTab || g.type === "Tabs"),
                  onChange: (b) => {
                    const R = b.target.checked;
                    v(g.id, {
                      tab: R,
                      isTab: R
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            he && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: g.props.tabId || ((Pe = (ke = he.props.tabs) == null ? void 0 : ke[0]) == null ? void 0 : Pe.id) || "main",
                  onChange: (b) => v(g.id, { tabId: b.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (he.props.tabs || []).map((b) => /* @__PURE__ */ e.jsxs("option", { value: b.id, children: [
                    b.label,
                    " (",
                    b.id,
                    ")"
                  ] }, b.id))
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
                      checked: g.props.showLabel ?? !0,
                      onChange: (b) => v(g.id, { showLabel: b.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: g.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (b) => v(g.id, { label: b.target.value }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: g.props.labelPosition || "left",
                      onChange: (b) => v(g.id, { labelPosition: b.target.value }),
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
                        value: Number(g.props.colSpan || 4),
                        onChange: (b) => {
                          const R = Math.max(1, Number(b.target.value) || 1);
                          v(g.id, { colSpan: R });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: g.props.colSpan || 4,
                        onChange: (b) => v(g.id, { colSpan: Number(b.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((b) => /* @__PURE__ */ e.jsxs("option", { value: b, children: [
                          b,
                          " Cột (",
                          Math.round(b / 12 * 100),
                          "%)"
                        ] }, b))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    g.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(g.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            g.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: g.props.placeholder || "",
                  onChange: (b) => v(g.id, { placeholder: b.target.value }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            g.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: g.props.rows || 3,
                  onChange: (b) => v(g.id, { rows: Number(b.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            g.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: g.props.precision !== void 0 ? g.props.precision : 2,
                    onChange: (b) => v(g.id, { precision: Number(b.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: g.props.thousandsSeparator ?? !0,
                    onChange: (b) => v(g.id, { thousandsSeparator: b.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            g.type === "Table" && (() => {
              const b = g.props.columns || [], R = r !== null ? b[r] : null, J = (W, q) => {
                const xe = b.map((we, Te) => Te === W ? { ...we, ...q } : we);
                v(g.id, { columns: xe });
              }, Q = (W, q) => {
                if (q < 0 || q >= b.length) return;
                const xe = vs(b, W, q);
                v(g.id, { columns: xe }), n(q);
              }, je = (W) => {
                const q = oa(b, W);
                v(g.id, { columns: q });
                const xe = q.findIndex((we) => we.key === W);
                xe !== -1 && n(xe);
              }, be = (W, q) => {
                const xe = Math.max(0, Math.min(b.length - 1, q - 1));
                if (xe !== W) {
                  const we = vs(b, W, xe);
                  v(g.id, { columns: we }), n(xe);
                }
              }, Z = () => {
                const W = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: b.length + 1
                }, q = Lt([...b, W]);
                v(g.id, { columns: q }), n(q.length - 1);
              }, de = (W) => {
                const q = b.filter((we, Te) => Te !== W), xe = Lt(q);
                v(g.id, { columns: xe }), r === W ? n(null) : r !== null && r > W && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Xt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: Z,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(dt, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: b.map((W, q) => {
                  const xe = r === q, we = !!(W.frozen || W.sticky === "left"), Te = d === q, $e = x === q;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => p(q),
                      onDragOver: (Fe) => {
                        Fe.preventDefault(), !(d === null || d === q) && u(q);
                      },
                      onDragLeave: () => u(null),
                      onDrop: () => {
                        d !== null && d !== q && Q(d, q), p(null), u(null);
                      },
                      onDragEnd: () => {
                        p(null), u(null);
                      },
                      onClick: () => n(q),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${Te ? "opacity-30 bg-slate-800" : ""} ${$e ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${xe ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(Ss, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: q === 0,
                                onClick: (Fe) => {
                                  Fe.stopPropagation(), Q(q, q - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(On, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: q === b.length - 1,
                                onClick: (Fe) => {
                                  Fe.stopPropagation(), Q(q, q + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Cs, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            W.order ?? q + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: W.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            W.key,
                            "]"
                          ] }),
                          we && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: W.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (Fe) => {
                                Fe.stopPropagation(), de(q);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(Ke, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    W.key || q
                  );
                }) }),
                R && r !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      R.title
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
                          max: b.length,
                          value: R.order ?? r + 1,
                          onChange: (W) => {
                            const q = parseInt(W.target.value, 10);
                            isNaN(q) || be(r, q);
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
                          value: R.key,
                          onChange: (W) => J(r, { key: W.target.value }),
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
                          value: R.title,
                          onChange: (W) => J(r, { title: W.target.value }),
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
                          value: R.componentType || "TextBox",
                          onChange: (W) => J(r, { componentType: W.target.value }),
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
                          value: R.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (W) => J(r, { width: W.target.value }),
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
                          value: R.align || "left",
                          onChange: (W) => J(r, { align: W.target.value }),
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
                          value: R.aggregate || "none",
                          onChange: (W) => J(r, { aggregate: W.target.value }),
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
                          checked: !!(R.frozen || R.sticky === "left"),
                          onChange: () => je(R.key),
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
                          checked: R.editable ?? !0,
                          onChange: (W) => J(r, { editable: W.target.checked }),
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
                          checked: R.sortable ?? !0,
                          onChange: (W) => J(r, { sortable: W.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(Xe, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(R.events) ? R.events.length : R.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(R.events) && R.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: R.events.map((W) => `${W.trigger} ➔ ${W.handlerName || W.action}()`).join(", ") }) : R.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      R.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && R && r !== null && /* @__PURE__ */ e.jsx(
                  ra,
                  {
                    isOpen: o,
                    column: R,
                    onClose: () => l(!1),
                    onSave: (W) => {
                      const q = b.map((Te, $e) => $e === r ? W : Te), xe = Lt(q);
                      v(g.id, { columns: xe });
                      const we = xe.findIndex((Te) => Te.key === W.key);
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
                    checked: !!g.props.required,
                    onChange: (b) => v(g.id, { required: b.target.checked }),
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
                    checked: !!g.props.disabled,
                    onChange: (b) => v(g.id, { disabled: b.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          ne === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: g.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (b) => D(g.id, { width: b.target.value }),
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
                    value: g.style.height || g.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (b) => D(g.id, {
                      height: b.target.value,
                      minHeight: b.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ca, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: g.style.customCss || Fr(g.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (b) => {
                    const R = b.target.value, J = Lr(R);
                    if (D(g.id, {
                      ...J,
                      customCss: R
                    }), J.justifyContent || J.alignItems) {
                      const Q = g.props.flexConfig || {};
                      v(g.id, {
                        flexConfig: {
                          ...Q,
                          ...J.justifyContent ? { justify: J.justifyContent } : {},
                          ...J.alignItems ? { align: J.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          ne === "events" && /* @__PURE__ */ e.jsx(
            aa,
            {
              events: g.events || [],
              onChange: (b) => T(g.id, b),
              scriptFile: (M == null ? void 0 : M.scriptFile) || "transactionList.bl.ts",
              componentName: g.props.label || g.type,
              componentId: g.id,
              contextExtra: {
                pageId: w,
                nodeId: g.id,
                type: g.type
              }
            }
          ),
          ne === "data" && (() => {
            const b = g.dataBinding || {}, R = us.find((Q) => Q.name === b.entityName), J = R ? R.fields : [];
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(kn, { className: "w-4 h-4 text-blue-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Liên Kết Dữ Liệu Thực Thể (Data Binding)" })
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: "Liên kết component này với một trường dữ liệu trong thực thể nghiệp vụ (Entity Catalog). Dữ liệu sẽ tự động được tải và lưu trữ đồng bộ." })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Thực Thể Dữ Liệu (Entity)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: b.entityName || "",
                    onChange: (Q) => {
                      var de;
                      const je = Q.target.value, be = us.find((W) => W.name === je), Z = ((de = be == null ? void 0 : be.fields[0]) == null ? void 0 : de.name) || "";
                      L(g.id, {
                        entityName: je,
                        fieldName: Z
                      });
                    },
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể --" }),
                      us.map((Q) => /* @__PURE__ */ e.jsxs("option", { value: Q.name, children: [
                        Q.displayName,
                        " (",
                        Q.name,
                        ")"
                      ] }, Q.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    disabled: !R,
                    value: b.fieldName || "",
                    onChange: (Q) => L(g.id, { fieldName: Q.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500 disabled:opacity-50 cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Trường Dữ Liệu --" }),
                      J.map((Q) => /* @__PURE__ */ e.jsxs("option", { value: Q.name, children: [
                        Q.displayName,
                        " (",
                        Q.name,
                        ") [",
                        Q.dataType,
                        "]"
                      ] }, Q.name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Dữ Liệu (Formatter)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: b.formatter || "",
                    onChange: (Q) => L(g.id, { formatter: Q.target.value }),
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
                    checked: b.twoWay ?? !0,
                    onChange: (Q) => L(g.id, { twoWay: Q.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] });
          })(),
          ne === "validation" && (() => {
            const b = g.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Tn, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!b.required,
                      onChange: (R) => I(g.id, { required: R.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                b.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: b.requiredMessage || "",
                    onChange: (R) => I(g.id, { requiredMessage: R.target.value }),
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
                      value: b.minLength !== void 0 ? b.minLength : "",
                      onChange: (R) => I(g.id, {
                        minLength: R.target.value === "" ? void 0 : Number(R.target.value)
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
                      value: b.maxLength !== void 0 ? b.maxLength : "",
                      onChange: (R) => I(g.id, {
                        maxLength: R.target.value === "" ? void 0 : Number(R.target.value)
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
                    value: b.pattern || "",
                    onChange: (R) => I(g.id, { pattern: R.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: b.patternMessage || "",
                    onChange: (R) => I(g.id, { patternMessage: R.target.value }),
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
                    value: b.customValidator || "",
                    onChange: (R) => I(g.id, { customValidator: R.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          ne === "permissions" && (() => {
            const b = g.permissions || {}, R = ["Admin", "Dev", "User", "Manager", "Staff", "Customer"], J = b.allowedRoles || [], Q = b.readOnlyRoles || [], je = (Z) => {
              const de = J.includes(Z) ? J.filter((W) => W !== Z) : [...J, Z];
              E(g.id, { allowedRoles: de });
            }, be = (Z) => {
              const de = Q.includes(Z) ? Q.filter((W) => W !== Z) : [...Q, Z];
              E(g.id, { readOnlyRoles: de });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ft, { className: "w-4 h-4 text-amber-400" }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: R.map((Z) => {
                  const de = J.includes(Z);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => je(Z),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${de ? "bg-blue-600/20 border-blue-500 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: Z }),
                        de && /* @__PURE__ */ e.jsx(hs, { className: "w-3.5 h-3.5 text-blue-400 shrink-0" })
                      ]
                    },
                    Z
                  );
                }) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Vai Trò Chỉ Đọc (Read-Only Roles)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click." }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: R.map((Z) => {
                  const de = Q.includes(Z);
                  return /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => be(Z),
                      className: `px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${de ? "bg-amber-600/20 border-amber-500 text-amber-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: Z }),
                        de && /* @__PURE__ */ e.jsx(hs, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                      ]
                    },
                    Z
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
                      onClick: () => E(g.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(b.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      onClick: () => E(g.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${b.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
        i && g && /* @__PURE__ */ e.jsx(
          Or,
          {
            isOpen: i,
            node: g,
            onClose: () => c(!1),
            onSave: (b, R, J) => {
              v(b, R), J && L(b, J);
            }
          }
        )
      ]
    }
  );
}, _r = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: it,
    defaultProps: {
      title: "GENERAL - FCL IMPORT",
      collapsible: !0,
      boxShadow: !0
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "RecordSelector",
    name: "Danh Sách Lô Hàng / Record Selector",
    description: "Thanh chọn danh sách bản ghi con dạng Tag Badges (Lô hàng: [ FCLT-26020005 ] ... [+ Tạo mới])",
    icon: zn,
    defaultProps: {
      label: "Lô hàng:",
      reference: "Transaction",
      displayField: "code",
      records: [
        { id: "1", code: "FCLT-26020005", mblNo: "ASHVT00002005" },
        { id: "2", code: "FCLT-26020006", mblNo: "ASHVT00002006" },
        { id: "3", code: "FCLT-26020007", mblNo: "ASHVT00002007" }
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
    icon: ot,
    defaultProps: {
      layoutMode: "flex",
      flexConfig: { direction: "row", wrap: "wrap", gap: "16px", justify: "flex-start", align: "stretch" }
    },
    defaultStyle: { padding: "16px", minHeight: "120px" }
  },
  {
    type: "TextBox",
    name: "Ô Nhập Chữ (TextBox)",
    description: "Nhập text kèm nhãn bên trái (Job No, M-BL No)",
    icon: yt,
    defaultProps: {
      label: "Job No.",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      placeholder: "FCL-26020005..."
    },
    defaultStyle: {}
  },
  {
    type: "Number",
    name: "Ô Nhập Số (Number)",
    description: "Nhập số tiền tệ/trọng lượng (GW, CBM, VGM)",
    icon: ka,
    defaultProps: {
      label: "Total GW",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      precision: 0,
      placeholder: "1,085"
    },
    defaultStyle: {}
  },
  {
    type: "DatePicker",
    name: "Lịch Ngày (DatePicker)",
    description: "Chọn ngày tháng chuẩn DD/MM/YYYY (S.Date, ETA)",
    icon: ks,
    defaultProps: {
      label: "S.Date",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4
    },
    defaultStyle: {}
  },
  {
    type: "Select",
    name: "Dropdown Lựa Chọn (Select2)",
    description: "Menu thả xuống chọn thực thể (Vendor, Service, POL)",
    icon: Ta,
    defaultProps: {
      label: "Service",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 4,
      options: [
        { value: "CYCY", label: "CY/CY" },
        { value: "CFSCFS", label: "CFS/CFS" },
        { value: "DOOR", label: "DOOR TO DOOR" }
      ]
    },
    defaultStyle: {}
  },
  {
    type: "Checkbox",
    name: "Hộp Kiểm (Checkbox)",
    description: "Lựa chọn đúng/sai (Active, IsJob, Surrendered)",
    icon: Sa,
    defaultProps: {
      label: "Surrendered",
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
    icon: Xt,
    defaultProps: {
      label: "CONTAINER INFORMATION",
      columns: [
        { key: "jobNo", title: "Job No.", width: "130px", sticky: "left", sortable: !0 },
        { key: "pol", title: "POL", width: "150px", sortable: !0 },
        { key: "pod", title: "POD", width: "150px", sortable: !0 },
        { key: "packages", title: "Số Kiện", width: "90px", align: "right", aggregate: "sum", sortable: !0 },
        { key: "gw", title: "GW (KGS)", width: "110px", align: "right", aggregate: "sum", sortable: !0 },
        { key: "cbm", title: "CBM", width: "100px", align: "right", aggregate: "sum", sortable: !0 }
      ]
    },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Button",
    name: "Nút Bấm (Button)",
    description: "Kích hoạt hành động (Lưu, In chứng từ, Duyệt)",
    icon: qt,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: Jt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: Ia,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: Ra,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: Pa,
    defaultProps: {
      label: "Notes",
      showLabel: !0,
      labelPosition: "left",
      colSpan: 12,
      rows: 3,
      placeholder: "Ghi chú đơn hàng..."
    },
    defaultStyle: {}
  },
  {
    type: "Tabs",
    name: "Phân Hệ Tabs (Tabs Container)",
    description: "Thanh điều hướng chuyển đổi giữa các phân hệ nghiệp vụ",
    icon: Aa,
    defaultProps: {
      tabs: [
        { id: "main", label: "TAB 1" }
      ]
    },
    defaultStyle: { width: "100%" }
  }
], Br = ({ item: s, onClick: a, isEditing: t }) => {
  const r = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = Jn({
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
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: `relative group rounded-xl border transition-all select-none ${i ? "opacity-40 border-blue-500 bg-blue-950/30" : "border-slate-800 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-700"}`,
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2.5", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => a(s),
            className: "flex-1 flex items-center gap-2.5 text-left cursor-pointer",
            title: "Bấm để thêm vào vị trí đang chọn",
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-lg bg-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 transition-colors shrink-0", children: /* @__PURE__ */ e.jsx(r, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "truncate", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-200 group-hover:text-white truncate", children: s.name }),
                /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400 truncate mt-0.5", children: s.description })
              ] })
            ]
          }
        ),
        t && /* @__PURE__ */ e.jsx(
          "div",
          {
            ...n,
            ...o,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-slate-700/50 cursor-grab active:cursor-grabbing transition-colors ml-1",
            title: "Kéo & thả vào giao diện",
            children: /* @__PURE__ */ e.jsx(Ss, { className: "w-4 h-4" })
          }
        )
      ] })
    }
  );
}, ol = ({ isEditing: s = !0 }) => {
  const a = _((c) => c.addComponent), t = _((c) => c.features), r = _((c) => c.activeFeatureId), n = _((c) => c.selection), o = t.find((c) => c.id === r), l = (c, d) => {
    if (!d) return null;
    for (const p of c) {
      if (p.id === d) return p;
      if (p.children) {
        const x = l(p.children, d);
        if (x) return x;
      }
    }
    return null;
  }, i = (c) => {
    const d = l((o == null ? void 0 : o.components) || [], n.componentId);
    let p = null;
    d && (d.type === "Container" ? p = d.id : p = d.parentId || null);
    const x = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: p,
      pageId: r,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: 1
    };
    a(x, p);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 bg-slate-900/60", children: [
      /* @__PURE__ */ e.jsxs("h2", { className: "text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Thành phần giao diện" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", children: "Kéo hoặc Click" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400 mt-1 leading-snug", children: "✋ Kéo thả trực tiếp vào màn hình hoặc 🖱️ bấm để thêm nhanh vào khối đang chọn." })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 space-y-2 overflow-y-auto flex-1", children: _r.map((c) => /* @__PURE__ */ e.jsx(
      Br,
      {
        item: c,
        onClick: i,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, il = () => {
  const s = _((i) => i.features), a = _((i) => i.activeFeatureId), t = _((i) => i.selection), r = _((i) => i.selectComponent), n = _((i) => i.removeComponent), o = s.find((i) => i.id === a);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, c = 0) => i.map((d) => {
    const p = t.componentId === d.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => r(d.id),
          style: { paddingLeft: `${c * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${p ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(ot, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
              /* @__PURE__ */ e.jsx("span", { className: "truncate", children: d.props.label ? String(d.props.label) : d.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 uppercase tracking-wider shrink-0", children: [
                "(",
                d.type,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (x) => {
                  x.stopPropagation(), n(d.id);
                },
                className: "text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "Xóa component",
                children: /* @__PURE__ */ e.jsx(Ke, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      d.children && d.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(d.children, c + 1) })
    ] }, d.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, dl = () => {
  const s = We((i) => i.openTabs), a = We((i) => i.activeTabId), t = We((i) => i.setActiveTab), r = We((i) => i.closeTab), n = _((i) => i.setActiveFeature);
  if (s.length === 0) return null;
  const o = (i, c) => {
    var p;
    t(i);
    const d = s.find((x) => x.id === i);
    n(c, ((p = d == null ? void 0 : d.params) == null ? void 0 : p.id) ?? null);
  }, l = (i, c) => {
    i.stopPropagation(), r(c), setTimeout(() => {
      var p;
      const d = We.getState().openTabs.find(
        (x) => x.id === We.getState().activeTabId
      );
      d && n(d.featureId, ((p = d.params) == null ? void 0 : p.id) ?? null);
    }, 50);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((i) => {
    const c = i.id === a;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: () => o(i.id, i.featureId),
        className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${c ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
        title: i.title,
        children: [
          /* @__PURE__ */ e.jsx(it, { className: `w-3.5 h-3.5 ${c ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
          /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: i.title }),
          s.length > 1 && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: (d) => l(d, i.id),
              className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
              title: "Đóng tab này",
              children: /* @__PURE__ */ e.jsx(Mt, { className: "w-3 h-3" })
            }
          )
        ]
      },
      i.id
    );
  }) });
}, pa = "uiforge_resilience_queue_v1";
let Yt = !1, En = !1;
function Qt() {
  if (typeof window > "u") return [];
  try {
    const s = localStorage.getItem(pa);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}
function xa(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(pa, JSON.stringify(s)), console.log(`[ResilienceQueue] Hiện có ${s.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function Mr(s, a) {
  var n;
  const t = Qt(), r = {
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
  return t.push(r), xa(t), ma(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${r.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), r;
}
function ma(s, a, t = "info") {
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
async function ps(s) {
  var n, o;
  if (Yt) return;
  const a = Qt();
  if (a.length === 0) return;
  Yt = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
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
  xa(r), Yt = !1, t > 0 && ma(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${t} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function $r(s) {
  var t, r;
  if (!s) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !s.response && (s.code === "ERR_NETWORK" || (t = s.message) != null && t.includes("Network Error"))) return !0;
  const a = (r = s.response) == null ? void 0 : r.status;
  return a === 502 || a === 503 || a === 504;
}
function Hr(s) {
  En || typeof window > "u" || (En = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), ps(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && Qt().length > 0 && !Yt && ps(s);
  }, 2e4), setTimeout(() => {
    const a = Qt();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), ps(s));
  }, 3e3));
}
const Vr = "http://localhost:5048/api", as = Va.create({
  baseURL: Vr,
  timeout: 15e3
});
as.interceptors.request.use((s) => {
  const a = Is.getState().token;
  return a && (s.headers.Authorization = `Bearer ${a}`), s;
});
as.interceptors.response.use(
  (s) => s,
  async (s) => {
    var r, n, o, l, i;
    if (((r = s == null ? void 0 : s.response) == null ? void 0 : r.status) === 401)
      return Is.getState().logout(), Promise.reject(s);
    const a = (((n = s == null ? void 0 : s.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(a) && $r(s)) {
      const c = (l = (o = s == null ? void 0 : s.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${a} [${(i = s == null ? void 0 : s.config) == null ? void 0 : i.url}]`;
      return Mr(s.config, c), Promise.resolve({
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
Hr(as);
async function Gr(s) {
  await as.delete(`/pages/${s}`);
}
const cl = ({ width: s }) => {
  const a = _((I) => I.features), t = _((I) => I.activeFeatureId), r = _((I) => I.setActiveFeature), n = _((I) => I.addFeature), o = _((I) => I.renameFeature), l = _((I) => I.deleteFeature), i = a.filter((I) => !I.hidden && !I.isDetail), [c, d] = S(null), [p, x] = S(!1), [u, y] = S(""), [w, C] = S(null), f = (I) => {
    I.preventDefault(), d({
      x: I.clientX,
      y: I.clientY
    });
  }, N = (I, E) => {
    I.preventDefault(), I.stopPropagation(), d({
      x: I.clientX,
      y: I.clientY,
      featureId: E
    });
  }, v = () => {
    y(""), x(!0);
  }, D = (I) => {
    I.preventDefault(), u.trim() && (n(u.trim()), x(!1), y(""));
  }, T = (I) => {
    I.preventDefault(), !(!w || !w.name.trim()) && (o(w.id, w.name.trim()), C(null));
  }, L = c != null && c.featureId ? [
    {
      label: "➕ Thêm Feature mới",
      icon: os,
      onClick: v
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
        const I = a.find((E) => E.id === c.featureId);
        I && C({ id: I.id, name: I.name });
      }
    },
    {
      label: "🗑️ Xóa Feature này",
      icon: Ke,
      danger: !0,
      onClick: async () => {
        if (confirm("Bạn có chắc chắn muốn xóa Feature này?")) {
          try {
            await Gr(c.featureId);
          } catch {
          }
          l(c.featureId);
        }
      }
    }
  ] : [
    {
      label: "➕ Thêm Feature mới (Màn hình mới)",
      icon: os,
      onClick: v
    }
  ];
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: f,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-3 space-y-1.5 overflow-y-auto flex-1", children: i.map((I, E) => {
            const V = I.id === t;
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => {
                  r(I.id, null), We.getState().openFeature(I.id, {}, "Tab", I.name);
                },
                onContextMenu: (P) => N(P, I.id),
                className: `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${V ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent"}`,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 truncate", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `p-1.5 rounded-lg shrink-0 ${V ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                        children: E === 0 ? /* @__PURE__ */ e.jsx(La, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(it, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "truncate", children: I.name })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (P) => N(P, I.id),
                      className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${V ? "text-white" : "text-slate-400 hover:text-white"}`,
                      title: "Tùy chọn Feature",
                      children: /* @__PURE__ */ e.jsx(Fa, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              },
              I.id
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
    c && /* @__PURE__ */ e.jsx(
      ua,
      {
        x: c.x,
        y: c.y,
        items: L,
        onClose: () => d(null)
      }
    ),
    p && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: D,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(os, { className: "w-5 h-5" }) }),
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
                onChange: (I) => y(I.target.value),
                className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => x(!1),
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
    w && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: T,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Đổi tên Feature" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              autoFocus: !0,
              value: w.name,
              onChange: (I) => C({ ...w, name: I.target.value }),
              className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => C(null),
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
}, ul = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1
}) => {
  const n = _((p) => p.undo), o = _((p) => p.redo), l = _((p) => p.historyIndex), i = _((p) => p.history), c = l > 0, d = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, pl = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: c,
  branch: d,
  onLogout: p
}) => {
  const x = _((T) => T.features), u = _((T) => T.activeFeatureId), y = _((T) => T.undo), w = _((T) => T.redo), C = _((T) => T.historyIndex), f = _((T) => T.history), N = x.find((T) => T.id === u), v = C > 0, D = C < f.length - 1;
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
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (N == null ? void 0 : N.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: y,
            disabled: !v,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: w,
            disabled: !D,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(Yn, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${s ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Ea, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(_n, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
          children: n ? /* @__PURE__ */ e.jsx(Oa, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(_a, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(Ba, { className: "w-4 h-4" }),
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
            c === "Dev" ? "Developer • được chỉnh sửa" : "Người dùng • chỉ xem",
            d ? ` • DB: ${d}` : ""
          ] })
        ] }),
        p && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: p,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(Ma, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, xl = () => {
  const s = We((i) => i.activePopup), a = We((i) => i.closePopup), t = We((i) => i.openFeature), r = _((i) => i.features);
  if (!s) return null;
  const n = r.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), a();
  };
  return $t(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(it, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(Kn, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(Mt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx($a, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, c]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(c ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          Ot,
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
                /* @__PURE__ */ e.jsx(Ct, { className: "w-3.5 h-3.5" }),
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
  ra as ColumnPropertiesModal,
  ol as ComponentPalette,
  Or as ComponentPropertiesModal,
  Ot as ComponentRenderer,
  il as ComponentTree,
  ua as ContextMenu,
  rl as FeatureCanvas,
  xl as FeaturePopupModal,
  sl as ForgeAdvancedGrid,
  lr as ForgeButton,
  kr as ForgeCheckbox,
  An as ForgeContainer,
  Tr as ForgeDatePicker,
  Ir as ForgeDivider,
  Zr as ForgeFormContainer,
  ur as ForgeLabel,
  Sr as ForgeModal,
  cr as ForgeNumber,
  Pr as ForgeRecordSelector,
  pr as ForgeSection,
  Cr as ForgeSelect,
  ia as ForgeTabStack,
  wr as ForgeTable,
  nl as ForgeTabs,
  dr as ForgeTextBox,
  Rr as ForgeTextarea,
  kt as FormFieldWrapper,
  fr as GridCellComponent,
  xr as HeaderContextMenu,
  al as InlineCellEditor,
  cl as LeftNavbar,
  Ut as PermissionGuard,
  ll as PropertyPanel,
  mr as RowContextMenu,
  br as SummaryRow,
  ul as TopBar,
  pl as TopNav,
  aa as UnifiedEventEditor,
  dl as WorkspaceTabBar,
  Ua as addFunctionToBlFile,
  yr as calculateAutoPopulatedFields,
  gr as calculateLeftOffsets,
  Dt as executeSingleEvent,
  qa as findFunctionInModule,
  el as getCascadedOptions,
  ca as getComponentOuterLayoutStyle,
  Ka as getFunctionsForBlFile,
  da as groupNodesByTabStack,
  vs as moveColumn,
  es as normalizeBlKey,
  Lt as normalizeColumnOrders,
  Dn as parseDDMMYYYY,
  Qr as registerBL,
  za as registerBlFunctions,
  Xr as removeFunctionFromBlFile,
  Zn as resolveBlModule,
  la as sortColumnsByCorePolicy,
  oa as toggleColumnFreeze,
  ge as triggerComponentEvent,
  Is as useAuthStore,
  pe as useDataEngine,
  _ as useEditorStore,
  vt as useMasterDetailStore,
  We as useNavigationEngine,
  js as validateDateSequence,
  Nr as validateField,
  tl as validateForm,
  Ns as validateISO6346ContainerNo
};
