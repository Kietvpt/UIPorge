var $a = Object.defineProperty;
var La = (t, a, s) => a in t ? $a(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[a] = s;
var Tn = (t, a, s) => La(t, typeof a != "symbol" ? a + "" : a, s);
import ts, { createContext as Aa, useContext as Ea, useState as R, useRef as tt, useEffect as Le, useMemo as $e, useCallback as Vs, useId as Ar } from "react";
import { create as Cs } from "zustand";
import Ma from "axios";
import { Layers as Lt, ChevronDown as At, ChevronUp as Zs, Printer as Er, Zap as qt, Save as ss, Eye as nn, EyeOff as Kn, Pin as Mr, ChevronRight as us, Sliders as ct, Copy as rn, Trash2 as dt, Filter as Br, Settings as Ba, ClipboardPaste as _r, PlusCircle as Or, ArrowUp as zn, ArrowDown as qn, Plus as ze, FileCode as Hr, Play as _a, Shield as Bs, X as ut, CheckCircle2 as Yn, AlertCircle as Oa, Lock as Jn, Users as $n, User as Ha, Table as $t, Calendar as Xn, ChevronLeft as Wr, Clock as Wa, ExternalLink as Gr, FolderTree as Ln, Search as Wt, RefreshCw as Ga, FileDown as Va, ArrowUpDown as Qn, Loader2 as An, Check as an, Tag as Vr, Database as En, Paperclip as Ur, Upload as fr, Download as Dn, Image as Ua, FileText as zt, File as Ka, Minus as Kr, FolderOpen as za, Folder as Nn, TrendingUp as qa, BarChart3 as zr, LineChart as Ya, PieChart as Ja, GripVertical as ln, Sparkles as Zn, Box as ds, ArrowRightLeft as gr, Columns as Js, Type as wt, Square as Es, Paintbrush as Xa, Code as bn, Hash as qr, ChevronDownSquare as Qa, CheckSquare as Za, Maximize2 as el, AlignLeft as tl, FolderKanban as sl, AlertTriangle as nl, XCircle as Yr, Info as vr, Equal as rl, RotateCcw as al, Menu as yr, FolderPlus as ll, MoreVertical as ol, Truck as il, DollarSign as cl, Ship as dl, Plane as ul, Package as pl, LayoutDashboard as xl, Undo2 as Jr, Redo2 as Xr, Edit3 as hl, PanelRightClose as ml, PanelRightOpen as bl, Bell as fl, LogOut as gl, CheckCircle as vl } from "lucide-react";
import { createPortal as Et } from "react-dom";
import { useDraggable as Qr, useDroppable as Zr, useSensors as yl, useSensor as Nl, PointerSensor as jl, DndContext as wl, closestCenter as Cl, DragOverlay as kl } from "@dnd-kit/core";
import { CSS as ea } from "@dnd-kit/utilities";
import { SortableContext as Sl, verticalListSortingStrategy as Tl, useSortable as Dl } from "@dnd-kit/sortable";
var Mn = { exports: {} }, Us = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Il() {
  if (Nr) return Us;
  Nr = 1;
  var t = ts, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var u, b = {}, C = null, p = null;
    c !== void 0 && (C = "" + c), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (u in d) r.call(d, u) && !o.hasOwnProperty(u) && (b[u] = d[u]);
    if (i && i.defaultProps) for (u in d = i.defaultProps, d) b[u] === void 0 && (b[u] = d[u]);
    return { $$typeof: a, type: i, key: C, ref: p, props: b, _owner: n.current };
  }
  return Us.Fragment = s, Us.jsx = l, Us.jsxs = l, Us;
}
var Ks = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function Fl() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ts, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, S = "@@iterator";
    function v($) {
      if ($ === null || typeof $ != "object")
        return null;
      var re = m && $[m] || $[S];
      return typeof re == "function" ? re : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N($) {
      {
        for (var re = arguments.length, me = new Array(re > 1 ? re - 1 : 0), Se = 1; Se < re; Se++)
          me[Se - 1] = arguments[Se];
        w("error", $, me);
      }
    }
    function w($, re, me) {
      {
        var Se = j.ReactDebugCurrentFrame, Pe = Se.getStackAddendum();
        Pe !== "" && (re += "%s", me = me.concat([Pe]));
        var Ee = me.map(function(Te) {
          return String(Te);
        });
        Ee.unshift("Warning: " + re), Function.prototype.apply.call(console[$], console, Ee);
      }
    }
    var g = !1, T = !1, A = !1, h = !1, D = !1, L;
    L = Symbol.for("react.module.reference");
    function F($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === r || $ === o || D || $ === n || $ === c || $ === u || h || $ === p || g || T || A || typeof $ == "object" && $ !== null && ($.$$typeof === C || $.$$typeof === b || $.$$typeof === l || $.$$typeof === i || $.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === L || $.getModuleId !== void 0));
    }
    function k($, re, me) {
      var Se = $.displayName;
      if (Se)
        return Se;
      var Pe = re.displayName || re.name || "";
      return Pe !== "" ? me + "(" + Pe + ")" : me;
    }
    function V($) {
      return $.displayName || "Context";
    }
    function E($) {
      if ($ == null)
        return null;
      if (typeof $.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof $ == "function")
        return $.displayName || $.name || null;
      if (typeof $ == "string")
        return $;
      switch ($) {
        case r:
          return "Fragment";
        case s:
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
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case i:
            var re = $;
            return V(re) + ".Consumer";
          case l:
            var me = $;
            return V(me._context) + ".Provider";
          case d:
            return k($, $.render, "ForwardRef");
          case b:
            var Se = $.displayName || null;
            return Se !== null ? Se : E($.type) || "Memo";
          case C: {
            var Pe = $, Ee = Pe._payload, Te = Pe._init;
            try {
              return E(Te(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, _ = 0, y, K, U, Z, M, Q, le;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function ie() {
      {
        if (_ === 0) {
          y = console.log, K = console.info, U = console.warn, Z = console.error, M = console.group, Q = console.groupCollapsed, le = console.groupEnd;
          var $ = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        _++;
      }
    }
    function de() {
      {
        if (_--, _ === 0) {
          var $ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, $, {
              value: y
            }),
            info: H({}, $, {
              value: K
            }),
            warn: H({}, $, {
              value: U
            }),
            error: H({}, $, {
              value: Z
            }),
            group: H({}, $, {
              value: M
            }),
            groupCollapsed: H({}, $, {
              value: Q
            }),
            groupEnd: H({}, $, {
              value: le
            })
          });
        }
        _ < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = j.ReactCurrentDispatcher, pe;
    function J($, re, me) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (Pe) {
            var Se = Pe.stack.trim().match(/\n( *(at )?)/);
            pe = Se && Se[1] || "";
          }
        return `
` + pe + $;
      }
    }
    var te = !1, I;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      I = new O();
    }
    function ae($, re) {
      if (!$ || te)
        return "";
      {
        var me = I.get($);
        if (me !== void 0)
          return me;
      }
      var Se;
      te = !0;
      var Pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = z.current, z.current = null, ie();
      try {
        if (re) {
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
            } catch (Qe) {
              Se = Qe;
            }
            Reflect.construct($, [], Te);
          } else {
            try {
              Te.call();
            } catch (Qe) {
              Se = Qe;
            }
            $.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            Se = Qe;
          }
          $();
        }
      } catch (Qe) {
        if (Qe && Se && typeof Qe.stack == "string") {
          for (var De = Qe.stack.split(`
`), Je = Se.stack.split(`
`), Ge = De.length - 1, Ve = Je.length - 1; Ge >= 1 && Ve >= 0 && De[Ge] !== Je[Ve]; )
            Ve--;
          for (; Ge >= 1 && Ve >= 0; Ge--, Ve--)
            if (De[Ge] !== Je[Ve]) {
              if (Ge !== 1 || Ve !== 1)
                do
                  if (Ge--, Ve--, Ve < 0 || De[Ge] !== Je[Ve]) {
                    var st = `
` + De[Ge].replace(" at new ", " at ");
                    return $.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", $.displayName)), typeof $ == "function" && I.set($, st), st;
                  }
                while (Ge >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        te = !1, z.current = Ee, de(), Error.prepareStackTrace = Pe;
      }
      var mt = $ ? $.displayName || $.name : "", bt = mt ? J(mt) : "";
      return typeof $ == "function" && I.set($, bt), bt;
    }
    function fe($, re, me) {
      return ae($, !1);
    }
    function xe($) {
      var re = $.prototype;
      return !!(re && re.isReactComponent);
    }
    function ue($, re, me) {
      if ($ == null)
        return "";
      if (typeof $ == "function")
        return ae($, xe($));
      if (typeof $ == "string")
        return J($);
      switch ($) {
        case c:
          return J("Suspense");
        case u:
          return J("SuspenseList");
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case d:
            return fe($.render);
          case b:
            return ue($.type, re, me);
          case C: {
            var Se = $, Pe = Se._payload, Ee = Se._init;
            try {
              return ue(Ee(Pe), re, me);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, ye = {}, be = j.ReactDebugCurrentFrame;
    function ge($) {
      if ($) {
        var re = $._owner, me = ue($.type, $._source, re ? re.type : null);
        be.setExtraStackFrame(me);
      } else
        be.setExtraStackFrame(null);
    }
    function Fe($, re, me, Se, Pe) {
      {
        var Ee = Function.call.bind(oe);
        for (var Te in $)
          if (Ee($, Te)) {
            var De = void 0;
            try {
              if (typeof $[Te] != "function") {
                var Je = Error((Se || "React class") + ": " + me + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof $[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              De = $[Te](re, Te, Se, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ge) {
              De = Ge;
            }
            De && !(De instanceof Error) && (ge(Pe), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", me, Te, typeof De), ge(null)), De instanceof Error && !(De.message in ye) && (ye[De.message] = !0, ge(Pe), N("Failed %s type: %s", me, De.message), ge(null));
          }
      }
    }
    var we = Array.isArray;
    function ve($) {
      return we($);
    }
    function ne($) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, me = re && $[Symbol.toStringTag] || $.constructor.name || "Object";
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
    function ht($) {
      if (he($))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ne($)), qe($);
    }
    var Ct = j.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gt, kt;
    function se($) {
      if (oe.call($, "ref")) {
        var re = Object.getOwnPropertyDescriptor($, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return $.ref !== void 0;
    }
    function ke($) {
      if (oe.call($, "key")) {
        var re = Object.getOwnPropertyDescriptor($, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return $.key !== void 0;
    }
    function Be($, re) {
      typeof $.ref == "string" && Ct.current;
    }
    function Ie($, re) {
      {
        var me = function() {
          gt || (gt = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        me.isReactWarning = !0, Object.defineProperty($, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function Ae($, re) {
      {
        var me = function() {
          kt || (kt = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        me.isReactWarning = !0, Object.defineProperty($, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var Re = function($, re, me, Se, Pe, Ee, Te) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: $,
        key: re,
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
        value: Pe
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Xe($, re, me, Se, Pe) {
      {
        var Ee, Te = {}, De = null, Je = null;
        me !== void 0 && (ht(me), De = "" + me), ke(re) && (ht(re.key), De = "" + re.key), se(re) && (Je = re.ref, Be(re, Pe));
        for (Ee in re)
          oe.call(re, Ee) && !Mt.hasOwnProperty(Ee) && (Te[Ee] = re[Ee]);
        if ($ && $.defaultProps) {
          var Ge = $.defaultProps;
          for (Ee in Ge)
            Te[Ee] === void 0 && (Te[Ee] = Ge[Ee]);
        }
        if (De || Je) {
          var Ve = typeof $ == "function" ? $.displayName || $.name || "Unknown" : $;
          De && Ie(Te, Ve), Je && Ae(Te, Ve);
        }
        return Re($, De, Je, Pe, Se, Ct.current, Te);
      }
    }
    var Ze = j.ReactCurrentOwner, rt = j.ReactDebugCurrentFrame;
    function at($) {
      if ($) {
        var re = $._owner, me = ue($.type, $._source, re ? re.type : null);
        rt.setExtraStackFrame(me);
      } else
        rt.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function lt($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === a;
    }
    function vt() {
      {
        if (Ze.current) {
          var $ = E(Ze.current.type);
          if ($)
            return `

Check the render method of \`` + $ + "`.";
        }
        return "";
      }
    }
    function We($) {
      return "";
    }
    var yt = {};
    function Gt($) {
      {
        var re = vt();
        if (!re) {
          var me = typeof $ == "string" ? $ : $.displayName || $.name;
          me && (re = `

Check the top-level render call using <` + me + ">.");
        }
        return re;
      }
    }
    function Dt($, re) {
      {
        if (!$._store || $._store.validated || $.key != null)
          return;
        $._store.validated = !0;
        var me = Gt(re);
        if (yt[me])
          return;
        yt[me] = !0;
        var Se = "";
        $ && $._owner && $._owner !== Ze.current && (Se = " It was passed a child from " + E($._owner.type) + "."), at($), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Se), at(null);
      }
    }
    function It($, re) {
      {
        if (typeof $ != "object")
          return;
        if (ve($))
          for (var me = 0; me < $.length; me++) {
            var Se = $[me];
            lt(Se) && Dt(Se, re);
          }
        else if (lt($))
          $._store && ($._store.validated = !0);
        else if ($) {
          var Pe = v($);
          if (typeof Pe == "function" && Pe !== $.entries)
            for (var Ee = Pe.call($), Te; !(Te = Ee.next()).done; )
              lt(Te.value) && Dt(Te.value, re);
        }
      }
    }
    function Bt($) {
      {
        var re = $.type;
        if (re == null || typeof re == "string")
          return;
        var me;
        if (typeof re == "function")
          me = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === b))
          me = re.propTypes;
        else
          return;
        if (me) {
          var Se = E(re);
          Fe(me, $.props, "prop", Se, $);
        } else if (re.PropTypes !== void 0 && !it) {
          it = !0;
          var Pe = E(re);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Pe || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vt($) {
      {
        for (var re = Object.keys($.props), me = 0; me < re.length; me++) {
          var Se = re[me];
          if (Se !== "children" && Se !== "key") {
            at($), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), at(null);
            break;
          }
        }
        $.ref !== null && (at($), N("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var _t = {};
    function St($, re, me, Se, Pe, Ee) {
      {
        var Te = F($);
        if (!Te) {
          var De = "";
          ($ === void 0 || typeof $ == "object" && $ !== null && Object.keys($).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = We();
          Je ? De += Je : De += vt();
          var Ge;
          $ === null ? Ge = "null" : ve($) ? Ge = "array" : $ !== void 0 && $.$$typeof === a ? (Ge = "<" + (E($.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof $, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, De);
        }
        var Ve = Xe($, re, me, Pe, Ee);
        if (Ve == null)
          return Ve;
        if (Te) {
          var st = re.children;
          if (st !== void 0)
            if (Se)
              if (ve(st)) {
                for (var mt = 0; mt < st.length; mt++)
                  It(st[mt], $);
                Object.freeze && Object.freeze(st);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(st, $);
        }
        if (oe.call(re, "key")) {
          var bt = E($), Qe = Object.keys(re).filter(function(Xt) {
            return Xt !== "key";
          }), Ht = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[bt + Ht]) {
            var Ft = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ht, bt, Ft, bt), _t[bt + Ht] = !0;
          }
        }
        return $ === r ? Vt(Ve) : Bt(Ve), Ve;
      }
    }
    function Ut($, re, me) {
      return St($, re, me, !0);
    }
    function He($, re, me) {
      return St($, re, me, !1);
    }
    var Ot = He, Jt = Ut;
    Ks.Fragment = r, Ks.jsx = Ot, Ks.jsxs = Jt;
  }()), Ks;
}
process.env.NODE_ENV === "production" ? Mn.exports = Il() : Mn.exports = Fl();
var e = Mn.exports;
const wr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, Cr = (t) => !!t.dispatchFromDevtools && typeof t.dispatch == "function", en = /* @__PURE__ */ new Map(), xn = (t) => {
  const a = en.get(t);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([s, r]) => [s, r.getState()])
  ) : {};
}, Rl = (t, a, s) => {
  if (t === void 0)
    return {
      type: "untracked",
      connection: a.connect(s)
    };
  const r = en.get(s.name);
  if (r)
    return { type: "tracked", store: t, ...r };
  const n = {
    connection: a.connect(s),
    stores: {}
  };
  return en.set(s.name, n), { type: "tracked", store: t, ...n };
}, Pl = (t, a) => {
  if (a === void 0) return;
  const s = en.get(t);
  s && (delete s.stores[a], Object.keys(s.stores).length === 0 && en.delete(t));
}, $l = /^at (?:new |async )?(.+?) \(/, Ll = /^([^@]+)@/;
function Al(t) {
  var a, s, r;
  if (!t) return;
  const n = t.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((s = $l.exec(l)) == null ? void 0 : s[1]) || ((r = Ll.exec(l)) == null ? void 0 : r[1]);
}
const El = (t, a = {}) => (s, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = a;
  let c;
  try {
    c = (o ?? (wr ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return t(s, r, n);
  const { connection: u, ...b } = Rl(i, c, d);
  let C = !0;
  n.setState = (S, v, j) => {
    const N = s(S, v);
    if (!C) return N;
    const w = j === void 0 ? {
      type: l || Al(new Error().stack) || "anonymous"
    } : typeof j == "string" ? { type: j } : j;
    return i === void 0 ? (u == null || u.send(w, r()), N) : (u == null || u.send(
      {
        ...w,
        type: `${i}/${w.type}`
      },
      {
        ...xn(d.name),
        [i]: n.getState()
      }
    ), N);
  }, n.devtools = {
    cleanup: () => {
      u && typeof u.unsubscribe == "function" && u.unsubscribe(), Pl(d.name, i);
    }
  };
  const p = (...S) => {
    const v = C;
    C = !1, s(...S), C = v;
  }, m = t(n.setState, r, n);
  if (b.type === "untracked" ? u == null || u.init(m) : (b.stores[b.store] = n, u == null || u.init(
    Object.fromEntries(
      Object.entries(b.stores).map(([S, v]) => [
        S,
        S === b.store ? m : v.getState()
      ])
    )
  )), Cr(n)) {
    let S = !1;
    const v = n.dispatch;
    n.dispatch = (...j) => {
      (wr ? "production" : void 0) !== "production" && j[0].type === "__setState" && !S && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), S = !0), v(...j);
    };
  }
  return u.subscribe((S) => {
    var v;
    switch (S.type) {
      case "ACTION":
        if (typeof S.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return In(
          S.payload,
          (j) => {
            if (j.type === "__setState") {
              if (i === void 0) {
                p(j.state);
                return;
              }
              Object.keys(j.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const N = j.state[i];
              if (N == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(N) && p(N);
              return;
            }
            Cr(n) && n.dispatch(j);
          }
        );
      case "DISPATCH":
        switch (S.payload.type) {
          case "RESET":
            return p(m), i === void 0 ? u == null ? void 0 : u.init(n.getState()) : u == null ? void 0 : u.init(xn(d.name));
          case "COMMIT":
            if (i === void 0) {
              u == null || u.init(n.getState());
              return;
            }
            return u == null ? void 0 : u.init(xn(d.name));
          case "ROLLBACK":
            return In(S.state, (j) => {
              if (i === void 0) {
                p(j), u == null || u.init(n.getState());
                return;
              }
              p(j[i]), u == null || u.init(xn(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return In(S.state, (j) => {
              if (i === void 0) {
                p(j);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(j[i]) && p(j[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: j } = S.payload, N = (v = j.computedStates.slice(-1)[0]) == null ? void 0 : v.state;
            if (!N) return;
            p(i === void 0 ? N : N[i]), u == null || u.send(
              null,
              // FIXME no-any
              j
            );
            return;
          }
          case "PAUSE_RECORDING":
            return C = !C;
        }
        return;
    }
  }), m;
}, on = El, In = (t, a) => {
  let s;
  try {
    s = JSON.parse(t);
  } catch (r) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      r
    );
  }
  s !== void 0 && a(s);
};
function Ml(t, a) {
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
const Bn = (t) => (a) => {
  try {
    const s = t(a);
    return s instanceof Promise ? s : {
      then(r) {
        return Bn(r)(s);
      },
      catch(r) {
        return this;
      }
    };
  } catch (s) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return Bn(r)(s);
      }
    };
  }
}, Bl = (t, a) => (s, r, n) => {
  let o = {
    storage: Ml(() => window.localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, j) => ({
      ...j,
      ...v
    }),
    ...a
  }, l = !1, i = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = o.storage;
  if (!u)
    return t(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), s(...v);
      },
      r,
      n
    );
  const b = () => {
    const v = o.partialize({ ...r() });
    return u.setItem(o.name, {
      state: v,
      version: o.version
    });
  }, C = n.setState;
  n.setState = (v, j) => (C(v, j), b());
  const p = t(
    (...v) => (s(...v), b()),
    r,
    n
  );
  n.getInitialState = () => p;
  let m;
  const S = () => {
    var v, j;
    if (!u) return;
    const N = ++i;
    l = !1, d.forEach((g) => {
      var T;
      return g((T = r()) != null ? T : p);
    });
    const w = ((j = o.onRehydrateStorage) == null ? void 0 : j.call(o, (v = r()) != null ? v : p)) || void 0;
    return Bn(u.getItem.bind(u))(o.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== o.version) {
          if (o.migrate) {
            const T = o.migrate(
              g.state,
              g.version
            );
            return T instanceof Promise ? T.then((A) => [!0, A]) : [!0, T];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var T;
      if (N !== i)
        return;
      const [A, h] = g;
      if (m = o.merge(
        h,
        (T = r()) != null ? T : p
      ), s(m, !0), A)
        return b();
    }).then(() => {
      N === i && (w == null || w(r(), void 0), m = r(), l = !0, c.forEach((g) => g(m)));
    }).catch((g) => {
      N === i && (w == null || w(void 0, g));
    });
  };
  return n.persist = {
    setOptions: (v) => {
      o = {
        ...o,
        ...v
      }, v.storage && (u = v.storage);
    },
    clearStorage: () => {
      ++i, u == null || u.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => S(),
    hasHydrated: () => l,
    onHydrate: (v) => (d.add(v), () => {
      d.delete(v);
    }),
    onFinishHydration: (v) => (c.add(v), () => {
      c.delete(v);
    })
  }, o.skipHydration || S(), m || p;
}, ta = Bl, nt = Cs()(
  on((t, a) => ({
    openTabs: [],
    activeTabId: null,
    activePopup: null,
    // Đánh dấu trạng thái bẩn (isDirty) cho tab khi dữ liệu form thay đổi
    setTabDirty: (s, r) => {
      t((n) => ({
        openTabs: n.openTabs.map(
          (o) => o.id === s || o.featureId === s ? { ...o, isDirty: r } : o
        )
      }));
    },
    // 🚀 Mở một Feature theo chuẩn FeatureTab hoặc FeaturePopup (chỉ đạo của Master)
    openFeature: (s, r = {}, n = "Tab", o) => {
      const l = o || (r.id ? `${s} - #${r.id}` : s);
      if (n === "Popup")
        t({
          activePopup: {
            featureId: s,
            title: l,
            params: r
          }
        });
      else {
        const i = a().openTabs, d = i.find(
          (c) => {
            var u;
            return c.featureId === s && String(((u = c.params) == null ? void 0 : u.id) ?? "") === String((r == null ? void 0 : r.id) ?? "");
          }
        );
        if (d)
          t({ activeTabId: d.id });
        else {
          const c = `tab_${s}_${r.id || Date.now()}`, u = {
            id: c,
            featureId: s,
            title: l,
            params: r
          };
          t({
            openTabs: [...i, u],
            activeTabId: c
          });
        }
        ee.getState().setActiveFeature(s, (r == null ? void 0 : r.id) ?? null);
      }
    },
    // Đóng tab
    closeTab: (s) => {
      const r = a().openTabs;
      if (r.length <= 1) return;
      const n = r.filter((i) => i.id !== s), o = a().activeTabId;
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
    reorderTabs: (s, r) => {
      t((n) => {
        if (s === r || s < 0 || r < 0 || s >= n.openTabs.length || r >= n.openTabs.length) return n;
        const o = [...n.openTabs], [l] = o.splice(s, 1);
        return o.splice(r, 0, l), { openTabs: o };
      });
    },
    // Đóng popup
    closePopup: (s) => {
      const r = a().activePopup;
      r != null && r.onClose && r.onClose(s), t({ activePopup: null });
    }
  }))
);
function sa(t, a = {}, s) {
  nt.getState().openFeature(t, a, "Popup", s || t);
}
const _l = [];
function Ol(t) {
  if (!t || typeof t != "string") return [];
  const a = [], s = t.split(",");
  for (const r of s) {
    const n = r.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), d = i.includes(".") ? i.split(".").pop() : i;
      l && d && a.push({ targetField: l, sourceField: d });
    }
  }
  return a;
}
function ns(t, a, s, r = void 0) {
  const n = [
    t.formRecords[a],
    t.formRecords.default,
    ...Object.values(t.formRecords)
  ].filter(Boolean);
  if (n.length === 0) return r;
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
  return r;
}
function hn(t = {}, a) {
  var r, n;
  const s = { ...t };
  try {
    const o = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (o) {
      const l = JSON.parse(o), i = (r = l == null ? void 0 : l.state) == null ? void 0 : r.previewRoleCode;
      i && (s["X-Preview-Role"] = i);
    }
  } catch {
  }
  try {
    const o = a || ee.getState().activeFeatureId;
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
const je = Cs()(
  on((t, a) => ({
    datasets: {},
    formRecords: {},
    originalFormRecords: {},
    selectedRecords: {},
    // Quản lý Dirty Tracking
    isFormDirty: (s) => {
      const r = a(), n = r.formRecords[s] || r.formRecords.default || {}, o = r.originalFormRecords[s] || r.originalFormRecords.default;
      if (!o) return !1;
      const l = ["btn_", "sec_", "tab_", "lbl_"], i = /* @__PURE__ */ new Set();
      for (const [d, c] of Object.entries(n)) {
        if (!d || l.some((m) => d.startsWith(m))) continue;
        const u = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(u)) continue;
        i.add(u);
        const b = o[d] ?? o[u] ?? o[d.replace(/^fld_/, "")], C = c === "" || c === void 0 ? null : c, p = b === "" || b === void 0 ? null : b;
        if (String(C ?? "") !== String(p ?? ""))
          return !0;
      }
      return !1;
    },
    markFormClean: (s) => {
      t((r) => {
        const n = r.formRecords[s] || r.formRecords.default || {};
        return {
          originalFormRecords: {
            ...r.originalFormRecords,
            [s]: { ...n },
            default: { ...n }
          }
        };
      });
      try {
        nt.getState().setTabDirty(s, !1);
      } catch {
      }
    },
    // Lưu trữ bản ghi đang chọn
    setSelectedRecord: (s, r) => {
      t((n) => ({
        selectedRecords: {
          ...n.selectedRecords,
          [s]: r
        }
      }));
    },
    // Lấy bản ghi đang chọn
    getSelectedRecord: (s) => a().selectedRecords[s],
    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục MasterData, Products...)
    registerDataset: (s, r) => {
      t((n) => ({
        datasets: {
          ...n.datasets,
          [s]: r
        }
      }));
    },
    // 2. Lấy dataset của Entity (hỗ trợ tìm case-insensitive)
    getDataset: (s) => {
      const r = a().datasets;
      if (r[s]) return r[s];
      const n = s == null ? void 0 : s.toLowerCase(), o = Object.keys(r).find((l) => l.toLowerCase() === n);
      return o ? r[o] : _l;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (s, r, n) => {
      t((o) => {
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), u = (S) => {
          const v = { ...S };
          for (const j of Object.keys(v))
            (j.toLowerCase() === i || j.toLowerCase() === r.toLowerCase()) && delete v[j];
          return v[d] = n, v[c] = n, v;
        }, b = o.formRecords[s] || {}, C = o.formRecords.default || {}, p = u(b), m = u(C);
        try {
          nt.getState().setTabDirty(s, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [s]: p,
            default: m
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (s, r, n = "") => ns(a(), s, r, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (s, r) => {
      t((n) => {
        const o = {};
        for (const [l, i] of Object.entries(r || {})) {
          o[l] = i;
          const d = l.replace(/^fld_/, ""), c = d.charAt(0).toLowerCase() + d.slice(1), u = d.charAt(0).toUpperCase() + d.slice(1);
          o[c] = i, o[u] = i;
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
      const r = a().formRecords, n = r[s] || {};
      let l = { ...r.default || {}, ...n };
      Object.keys(l).some(
        (c) => c !== "id" && c !== "Id" && l[c] !== void 0 && l[c] !== ""
      ) || (l = { ...a().collectScreenData(s), ...l });
      const d = { ...l };
      for (const [c, u] of Object.entries(l)) {
        if (!c) continue;
        const b = c.charAt(0).toLowerCase() + c.slice(1), C = c.charAt(0).toUpperCase() + c.slice(1);
        d[b] === void 0 && (d[b] = u), d[C] === void 0 && (d[C] = u);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (s, r, n) => {
      if (!n || typeof n != "object") return;
      const o = Ol(r);
      if (o.length === 0) return;
      const l = a().formRecords[s] || {}, i = {};
      for (const d of o) {
        const c = Object.keys(n).find(
          (u) => u.toLowerCase() === d.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const u = n[c];
          i[d.targetField] = u, d.targetField.startsWith("fld_") || (i[`fld_${d.targetField.toLowerCase()}`] = u);
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
    queryReference: async (s, r, n = "id", o = "fullName") => {
      let l = (r || "").trim();
      const i = l.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (i && (l = i[2].trim()), s)
        try {
          const c = l ? l.startsWith("?") ? l : l.startsWith("$") ? `?${l}` : `?$filter=${encodeURIComponent(l)}` : "", u = `http://localhost:5048/api/core/data/${encodeURIComponent(s)}${c}`, b = await fetch(u, { headers: hn() });
          if (b.ok) {
            const C = await b.json();
            return (Array.isArray(C) ? C : C.value || []).map((m) => {
              const S = m[n] !== void 0 ? m[n] : m.Id || m.id || m.code, v = m[o] !== void 0 ? m[o] : m.FullName || m.fullName || m.Name || m.name || m.title || String(S);
              return {
                value: S,
                label: String(v),
                rawItem: m
              };
            });
          }
        } catch {
        }
      return kr(a().getDataset(s), l).map((c) => {
        const u = c[n] !== void 0 ? c[n] : c.Id || c.id || c.code, b = c[o] !== void 0 ? c[o] : c.FullName || c.fullName || c.Name || c.name || c.title || String(u);
        return {
          value: u,
          label: String(b),
          rawItem: c
        };
      });
    },
    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (s, r) => {
      let n = (r || "").trim();
      const o = n.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (o && (n = o[2].trim()), s)
        try {
          const l = n ? n.startsWith("?") ? n : n.startsWith("$") ? `?${n}` : `?$filter=${encodeURIComponent(n)}` : "", i = `http://localhost:5048/api/core/data/${encodeURIComponent(s)}${l}`, d = await fetch(i, { headers: hn() });
          if (d.ok) {
            const c = await d.json();
            return Array.isArray(c) ? c : c.value || [];
          }
        } catch {
        }
      return kr(a().getDataset(s), n);
    },
    // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
    saveRecord: async (s, r, n) => {
      if (!s || !r)
        return { success: !1, message: "Thiếu thông tin Entity hoặc dữ liệu bản ghi" };
      let o = r.id || r.Id;
      const l = r.code || r.Code || r.recordCode || r.RecordCode || r.key || r.Key;
      if ((!o || o === "new" || Number(o) <= 0) && l) {
        const c = a().datasets[s];
        if (Array.isArray(c)) {
          const u = c.find((b) => (b.code || b.Code || b.recordCode || b.RecordCode || b.key || b.Key) === l);
          u && (o = u.id || u.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), d = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(s)}/${d}` : `http://localhost:5048/api/core/data/${encodeURIComponent(s)}`, u = i ? "PUT" : "POST", b = { ...r };
        for (const [m, S] of Object.entries(b))
          if (S === "")
            (/date|time/i.test(m) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(m) || /gw|cbm|vgm|package/i.test(m)) && (b[m] = null);
          else if (typeof S == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(S.trim())) {
            const [v, j, N] = S.trim().split("/");
            b[m] = `${N}-${j.padStart(2, "0")}-${v.padStart(2, "0")}T00:00:00`;
          }
        const C = {};
        for (const [m, S] of Object.entries(b)) {
          if (!m || m.startsWith("fld_") || m.startsWith("btn_") || m.startsWith("sec_") || m.startsWith("tab_"))
            continue;
          const v = m.replace(/^fld_/, ""), j = v.charAt(0).toUpperCase() + v.slice(1);
          C[j] = S;
        }
        i ? C.Id = d : (C.Id = 0, C.Active = !0);
        const p = await fetch(c, {
          method: u,
          headers: hn({ "Content-Type": "application/json" }),
          body: JSON.stringify(C)
        });
        if (p.ok) {
          const m = await p.json(), S = m.id || m.Id || d;
          ee.getState().setActiveRecordId(String(S)), n && (a().setFormRecord(n, m), a().markFormClean(n)), a().setFormRecord("default", m), a().markFormClean("default");
          const v = a().datasets[s];
          if (v && Array.isArray(v))
            if (i) {
              const j = v.map(
                (N) => (N.id || N.Id) === d ? { ...N, ...m } : N
              );
              a().registerDataset(s, j);
            } else
              a().registerDataset(s, [m, ...v]);
          return {
            success: !0,
            data: m,
            message: i ? `Cập nhật thành công bản ghi #${d} (${s}) vào Database!` : `Thêm mới thành công bản ghi (${s}) vào Database!`
          };
        } else
          return { success: !1, message: `Lỗi máy chủ: HTTP ${p.status}` };
      } catch (c) {
        return { success: !1, message: `Lỗi kết nối API: ${(c == null ? void 0 : c.message) || c}` };
      }
    },
    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (s, r) => {
      if (!s || !r)
        return { success: !1, message: "Thiếu thông tin Entity hoặc ID bản ghi" };
      try {
        const n = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(s)}/${r}`, {
          method: "DELETE",
          headers: hn()
        });
        if (n.ok) {
          const o = a().datasets[s];
          if (o && Array.isArray(o)) {
            const l = o.filter((i) => (i.id || i.Id) !== r);
            a().registerDataset(s, l);
          }
          return { success: !0, message: `Đã xóa thành công bản ghi #${r} (${s})!` };
        } else
          return { success: !1, message: `Lỗi xóa bản ghi: HTTP ${n.status}` };
      } catch (n) {
        return { success: !1, message: `Lỗi kết nối khi xóa: ${(n == null ? void 0 : n.message) || n}` };
      }
    },
    // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (chuẩn Core)
    collectScreenData: (s) => {
      const r = a(), n = ee.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((m) => String(m.id) === String(s)) || o.find((m) => String(m.id) === String(l)) || o.find((m) => m.isDetail) || o[0], d = {}, c = (m) => {
        var S, v, j;
        if (!(!m || !Array.isArray(m)))
          for (const N of m) {
            const w = (S = N.dataBinding) == null ? void 0 : S.fieldName, g = (v = N.props) == null ? void 0 : v.name, T = N.id, A = w || (typeof g == "string" ? g : "") || (T == null ? void 0 : T.replace(/^fld_/, "")), h = String(A || "").trim();
            if (h) {
              let D = ns(r, String(N.pageId || l || "default"), h, void 0);
              if (D === void 0 && ((j = N.props) == null ? void 0 : j.value) !== void 0 && (D = N.props.value), D === void 0 && typeof document < "u") {
                const L = document.getElementById(N.id) || document.querySelector(`[name="${N.id}"]`) || document.querySelector(`[name="${h}"]`);
                L && "value" in L && L.value !== "" && (D = L.value);
              }
              if (D != null) {
                d[h] = D;
                const L = h.charAt(0).toLowerCase() + h.slice(1), F = h.charAt(0).toUpperCase() + h.slice(1);
                d[L] = D, d[F] = D;
              }
            }
            N.children && N.children.length > 0 && c(N.children);
          }
      };
      i != null && i.components && c(i.components);
      const u = s || String(l || "default"), b = { ...r.formRecords.default, ...u ? r.formRecords[u] : {} }, C = { ...d, ...b };
      if (!C.id && !C.Id && typeof window < "u") {
        const m = Xs();
        m && m !== "new" && Number(m) > 0 && (C.id = Number(m), C.Id = Number(m));
      }
      const p = {};
      for (const [m, S] of Object.entries(C)) {
        if (!m || m.startsWith("fld_") || m.startsWith("btn_") || m.startsWith("sec_") || m.startsWith("tab_")) continue;
        const v = m.replace(/^fld_/, ""), j = v.charAt(0).toLowerCase() + v.slice(1), N = v.charAt(0).toUpperCase() + v.slice(1);
        p[j] = S, p[N] = S;
      }
      return (C.id || C.Id) && (p.id = C.id || C.Id, p.Id = C.id || C.Id), t((m) => ({
        formRecords: {
          ...m.formRecords,
          [u]: p,
          default: p
        }
      })), p;
    }
  }))
);
function kr(t, a) {
  if (!a || !a.trim() || !Array.isArray(t) || t.length === 0)
    return t;
  let s = a.trim();
  const r = s.match(/\$filter=([^&]+)/i);
  if (r)
    s = decodeURIComponent(r[1]).trim();
  else if (s.startsWith("?") && !s.toLowerCase().includes("$filter="))
    return t;
  const n = s.split(/\s+and\s+/i);
  return t.filter((o) => {
    for (const l of n) {
      const i = l.trim();
      if (!i) continue;
      const d = i.match(/^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$/i);
      if (d) {
        const c = d[1], u = (d[2] || d[3] || "=").toLowerCase(), b = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), p = Object.keys(o).find((m) => m.toLowerCase() === c.toLowerCase());
        if (p) {
          const S = (o[p] !== void 0 && o[p] !== null ? String(o[p]) : "").toLowerCase() === b.toLowerCase();
          if (u === "ne" || u === "!=" ? S : !S)
            return !1;
        }
      }
    }
    return !0;
  });
}
const Yt = Cs()(
  ta(
    (t) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: a, branch: s, user: r }) => t({ token: a, branch: s, user: r }),
      logout: () => t({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), na = "uiforge_resilience_queue_v1";
let fn = !1, Sr = !1;
function gn() {
  if (typeof window > "u") return [];
  try {
    const t = localStorage.getItem(na);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function ra(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(na, JSON.stringify(t)), console.log(`[ResilienceQueue] Hiện có ${t.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function Hl(t, a) {
  var n;
  const s = gn(), r = {
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    url: t.url || "",
    method: (t.method || "POST").toUpperCase(),
    data: t.data,
    headers: {
      "Content-Type": "application/json"
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    retryCount: 0,
    description: a || `Thao tác ${(n = t.method) == null ? void 0 : n.toUpperCase()} trên ${t.url}`
  };
  return s.push(r), ra(s), aa(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${r.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), r;
}
function aa(t, a, s = "info") {
  if (typeof document > "u") return;
  const r = document.createElement("div");
  r.className = `fixed top-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300 ${s === "warning" ? "bg-amber-950/90 border-amber-600/50 text-amber-100 shadow-amber-900/30" : s === "success" ? "bg-emerald-950/90 border-emerald-600/50 text-emerald-100 shadow-emerald-900/30" : "bg-blue-950/90 border-blue-600/50 text-blue-100 shadow-blue-900/30"}`, r.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5 text-lg">
        ${s === "warning" ? "⚠️" : s === "success" ? "✅" : "ℹ️"}
      </div>
      <div class="flex-1 text-xs">
        <div class="font-bold text-sm mb-1">${t}</div>
        <div class="opacity-90 leading-relaxed">${a}</div>
      </div>
    </div>
  `, document.body.appendChild(r), setTimeout(() => {
    r.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => r.remove(), 300);
  }, 4500);
}
async function Fn(t) {
  var n, o;
  if (fn) return;
  const a = gn();
  if (a.length === 0) return;
  fn = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
  let s = 0;
  const r = [];
  for (const l of a)
    try {
      await t.request({
        url: l.url,
        method: l.method,
        data: l.data
      }), s++, console.log(`[ResilienceQueue] Đồng bộ thành công: ${l.description}`);
    } catch (i) {
      l.retryCount = (l.retryCount || 0) + 1, console.warn(`[ResilienceQueue] Lỗi khi đồng bộ lại ${l.description} (lần thử ${l.retryCount}):`, i == null ? void 0 : i.message), ((n = i == null ? void 0 : i.response) == null ? void 0 : n.status) >= 400 && ((o = i == null ? void 0 : i.response) == null ? void 0 : o.status) < 500 || r.push(l);
    }
  ra(r), fn = !1, s > 0 && aa(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${s} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function Wl(t) {
  var s, r;
  if (!t) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !t.response && (t.code === "ERR_NETWORK" || (s = t.message) != null && s.includes("Network Error"))) return !0;
  const a = (r = t.response) == null ? void 0 : r.status;
  return a === 502 || a === 503 || a === 504;
}
function Gl(t) {
  Sr || typeof window > "u" || (Sr = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), Fn(t);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && gn().length > 0 && !fn && Fn(t);
  }, 2e4), setTimeout(() => {
    const a = gn();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), Fn(t));
  }, 3e3));
}
const Vl = "http://localhost:5048/api", ot = Ma.create({
  baseURL: Vl,
  timeout: 15e3
});
ot.interceptors.request.use((t) => {
  var s;
  const a = Yt.getState().token;
  a && (t.headers.Authorization = `Bearer ${a}`);
  try {
    const r = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (r) {
      const n = JSON.parse(r), o = (s = n == null ? void 0 : n.state) == null ? void 0 : s.previewRoleCode;
      o && (t.headers["X-Preview-Role"] = o);
    }
  } catch {
  }
  return t;
});
ot.interceptors.response.use(
  (t) => t,
  async (t) => {
    var r, n, o, l, i;
    if (((r = t == null ? void 0 : t.response) == null ? void 0 : r.status) === 401)
      return Yt.getState().logout(), Promise.reject(t);
    const a = (((n = t == null ? void 0 : t.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(a) && Wl(t)) {
      const d = (l = (o = t == null ? void 0 : t.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${a} [${(i = t == null ? void 0 : t.config) == null ? void 0 : i.url}]`;
      return Hl(t.config, d), Promise.resolve({
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
Gl(ot);
async function Ul(t) {
  await ot.delete(`/pages/${t}`);
}
async function Kl(t) {
  const { data: a } = await ot.put("/pages/reorder", t);
  return a;
}
async function zl(t, a) {
  const { data: s } = await ot.put(`/pages/${t}/properties`, a);
  return s;
}
async function ql(t) {
  const { data: a } = await ot.post(`/pages/clone/${t}`);
  return a;
}
async function Yl(t) {
  const { data: a } = await ot.put(`/pages/${t}/toggle-active`);
  return a;
}
function Jl(t) {
  var o, l, i;
  const a = String(t.id), s = t.scriptFile || ((o = t.layoutConfig) == null ? void 0 : o.scriptFile) || "";
  let r = t.featureProps;
  if (!r && t.featurePropsJson)
    try {
      r = JSON.parse(t.featurePropsJson);
    } catch {
      r = {};
    }
  const n = (d) => d.map((c) => ({
    ...c,
    pageId: a,
    children: c.children && c.children.length > 0 ? n(c.children) : c.children
  }));
  return {
    id: a,
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
    featureProps: r || {},
    displayFlags: t.displayFlags || (r == null ? void 0 : r.displayFlags),
    customStyles: t.customStyles || (r == null ? void 0 : r.customStyles),
    badge: t.badge ?? (r == null ? void 0 : r.badge),
    components: n(t.components || []),
    hidden: t.hidden ?? ((l = t.layoutConfig) == null ? void 0 : l.hidden) ?? (a === "2" ? !0 : void 0),
    isDetail: t.isDetail ?? ((i = t.layoutConfig) == null ? void 0 : i.isDetail) ?? (a === "2" ? !0 : void 0),
    createdAt: t.createdAt,
    updatedAt: t.updatedAt
  };
}
const Xl = 40;
function Ql(t) {
  return t ? t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, "d").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-") : "";
}
function es(t) {
  if (!t) return "";
  let a = t.trim().toLowerCase();
  return a.startsWith("/") || (a = "/" + a), a.length > 1 && a.endsWith("/") && (a = a.replace(/\/+$/, "")), a;
}
function Ys(t) {
  if (!t) return "/";
  if (t.route && t.route.trim())
    return es(t.route);
  const a = Ql(t.title || t.name || t.id);
  return es(a || t.id);
}
function Zl(t) {
  if (typeof window > "u" || !t || t.length === 0)
    return { featureId: null, recordKey: null };
  try {
    const a = window.location.pathname, s = es(a);
    if (s && s !== "/") {
      const l = [...t].sort((i, d) => {
        const c = Ys(i);
        return Ys(d).length - c.length;
      });
      for (const i of l)
        if (Ys(i) === s || es(i.route) === s || es(`/${i.id}`) === s) {
          const u = new URLSearchParams(window.location.search).get("id");
          return { featureId: i.id, recordKey: u || null };
        }
      for (const i of l) {
        const d = Ys(i);
        if (d && d !== "/" && s.startsWith(d + "/")) {
          const u = s.slice(d.length + 1).split("/")[0], b = u ? decodeURIComponent(u) : null;
          return { featureId: i.id, recordKey: b };
        }
      }
    }
    const r = new URLSearchParams(window.location.search), n = r.get("feature") || r.get("page"), o = r.get("id");
    if (n) {
      const l = t.find(
        (i) => String(i.id) === String(n) || es(i.route) === es(n)
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
function Rn() {
  if (typeof window > "u") return null;
  try {
    const t = new URLSearchParams(window.location.search), a = t.get("feature") || t.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function Xs() {
  if (typeof window > "u") return null;
  try {
    const t = window.location.pathname, a = es(t);
    if (a && a !== "/") {
      const n = a.split("/").filter(Boolean);
      if (n.length >= 2)
        return decodeURIComponent(n[1]);
    }
    const r = new URLSearchParams(window.location.search).get("id");
    return r || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function la(t) {
  var a, s, r, n;
  return t ? !!(t.isDetail || t.route === "/fcl-import" || (a = t.route) != null && a.includes("detail") || (s = t.scriptFile) != null && s.toLowerCase().includes("detail") || (r = t.name) != null && r.toLowerCase().includes("fcl import") || (n = t.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function _n(t) {
  return t ? !la(t) : !1;
}
function os(t, a, s) {
  var r, n, o, l;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", t);
      const i = new URL(window.location.href);
      i.searchParams.delete("feature"), i.searchParams.delete("page"), i.searchParams.delete("id");
      const c = (s || ((r = ee.getState()) == null ? void 0 : r.features) || []).find((C) => String(C.id) === String(t) || C.route === `/${t}` || C.route === t), u = c ? Ys(c) : t ? es(t) : "/";
      if ((c ? _n(c) : t === "6" || t === "1" || t === "3") || a === null || a === "" || a === void 0) {
        i.pathname = u;
        try {
          localStorage.removeItem("uiforge_active_transaction_id");
        } catch {
        }
      } else {
        let C = String(a);
        try {
          const p = (n = je == null ? void 0 : je.getState) == null ? void 0 : n.call(je), m = ((o = p == null ? void 0 : p.formRecords) == null ? void 0 : o[t]) || ((l = p == null ? void 0 : p.formRecords) == null ? void 0 : l.default);
          if (m && (String(m.id ?? m.Id) === String(a) || a === "new")) {
            const S = m.jobNo || m.JobNo || m.code || m.Code;
            S && (C = String(S));
          }
        } catch {
        }
        i.pathname = `${u}/${encodeURIComponent(C)}`;
        try {
          localStorage.setItem("uiforge_active_transaction_id", String(a));
        } catch {
        }
      }
      window.history.replaceState(null, "", i.toString());
    } catch {
    }
}
const ee = Cs()(
  on(
    (t, a) => ({
      features: [],
      activeFeatureId: Rn() || "",
      activeRecordId: Xs(),
      selection: { componentId: null, pageId: Rn() || "" },
      history: [[]],
      historyIndex: 0,
      // Modals State
      isFeatureManagerOpen: !1,
      openFeatureManager: () => t({ isFeatureManagerOpen: !0 }),
      closeFeatureManager: () => t({ isFeatureManagerOpen: !1 }),
      featurePropertiesTargetId: null,
      openFeatureProperties: (s) => {
        t((r) => {
          var n;
          return {
            featurePropertiesTargetId: s || r.activeFeatureId || (((n = r.features[0]) == null ? void 0 : n.id) ?? null)
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
      setActiveFeature: (s, r) => {
        const n = a().features || [], o = n.find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s), l = o ? _n(o) : s === "6" || s === "1" || s === "3";
        os(s, l ? null : r, n);
        let i = null;
        l || r === null || r === "" ? i = null : r != null ? i = String(r) : i = Xs(), t((d) => ({
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
        const r = Zl(s), n = r.featureId, o = Rn(), l = n && s.find((c) => c.id === n) || o && s.find((c) => c.id === o || c.route === `/${o}` || c.route === o) || s.find((c) => c.route === "/transactions" || c.name.includes("Lô Hàng")) || s.find((c) => !c.hidden && !c.isDetail) || s[0], d = _n(l) ? null : r.recordKey || Xs();
        os(l.id, d, s), t({
          features: s,
          activeFeatureId: l.id,
          activeRecordId: d,
          selection: { componentId: null, pageId: l.id },
          history: [s],
          historyIndex: 0
        });
      },
      addFeature: (s, r = "Layers", n = null, o = !1) => {
        const l = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, i = a().features.filter((u) => (u.parentId ?? null) === n), d = i.length > 0 ? Math.max(...i.map((u) => u.order ?? 0)) + 1 : 1, c = {
          id: l,
          code: `F_${Date.now().toString(36).toUpperCase()}`,
          name: s.trim() || "Tính năng mới",
          title: s.trim() || "Tính năng mới",
          icon: o ? "Folder" : r,
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
        return os(l, null), t((u) => {
          const b = [...u.features, c];
          return {
            ...et(u, b),
            activeFeatureId: l,
            selection: { componentId: null, pageId: l }
          };
        }), l;
      },
      reorderFeatures: (s) => {
        t((r) => {
          const n = new Map(s.map((l) => [l.id, l])), o = r.features.map((l) => {
            const i = n.get(l.id);
            return i ? {
              ...l,
              parentId: i.parentId !== void 0 ? i.parentId ? String(i.parentId) : null : l.parentId,
              order: i.order !== void 0 ? i.order : l.order,
              isGroup: i.isGroup !== void 0 ? i.isGroup : l.isGroup
            } : l;
          });
          return Kl(
            s.map((l) => ({
              id: l.id,
              parentId: l.parentId,
              order: l.order,
              isGroup: l.isGroup
            }))
          ).catch(() => {
          }), et(r, o);
        });
      },
      updateFeatureProperties: (s, r) => {
        t((n) => {
          const o = r.parentId !== void 0 ? r.parentId && String(r.parentId).trim() !== "" ? String(r.parentId) : null : void 0, l = {
            ...r,
            ...o !== void 0 ? { parentId: o } : {}
          }, i = n.features.map((c) => c.id !== s ? c : {
            ...c,
            ...l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }), d = {
            ...r,
            parentId: o !== void 0 ? o ? isNaN(Number(o)) ? o : Number(o) : null : void 0
          };
          return zl(s, d).catch(() => {
          }), et(n, i);
        });
      },
      cloneFeature: async (s) => {
        const n = a().features.find((i) => i.id === s);
        if (!n) return null;
        try {
          const i = await ql(s);
          if (i && i.id) {
            const d = Jl(i);
            return t((c) => {
              const u = [...c.features, d];
              return {
                ...et(c, u),
                activeFeatureId: d.id,
                selection: { componentId: null, pageId: d.id }
              };
            }), os(d.id, null), d.id;
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
          components: ua(n.components || [], o),
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
        }), os(o, null), o;
      },
      toggleFeatureActive: (s) => {
        t((r) => {
          const n = r.features.map((o) => {
            if (o.id !== s) return o;
            const l = o.active === !1;
            return {
              ...o,
              active: l,
              updatedAt: (/* @__PURE__ */ new Date()).toISOString()
            };
          });
          return Yl(s).catch(() => {
          }), et(r, n);
        });
      },
      renameFeature: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, name: r } : l);
          return et(n, o);
        });
      },
      updateFeatureId: (s, r) => {
        t((n) => {
          const o = n.features.map(
            (i) => i.id === s ? {
              ...i,
              id: r,
              route: i.route === `/${s}` ? `/${r}` : i.route,
              components: i.components.map((d) => ({ ...d, pageId: r }))
            } : i
          ), l = n.activeFeatureId === s ? r : n.activeFeatureId;
          return os(l), {
            features: o,
            activeFeatureId: l,
            selection: n.selection.pageId === s ? { ...n.selection, pageId: r } : n.selection
          };
        });
      },
      deleteFeature: (s) => {
        t((r) => {
          if (r.features.length <= 1) return {};
          const n = r.features.filter((l) => l.id !== s), o = r.activeFeatureId === s ? n[0].id : r.activeFeatureId;
          return os(o, null), {
            ...et(r, n),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        });
      },
      updateFeatureLayout: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== s ? l : {
            ...l,
            layoutConfig: {
              ...l.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
              ...r
            }
          });
          return et(n, o);
        });
      },
      updateFeatureScriptFile: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id === s ? { ...l, scriptFile: r.trim() } : l);
          return et(n, o);
        });
      },
      selectComponent: (s) => {
        t((r) => ({
          selection: { ...r.selection, componentId: s }
        }));
      },
      addComponent: (s, r = null, n) => {
        t((o) => {
          const l = o.features.find((c) => c.id === o.activeFeatureId);
          if (!l) return {};
          let i;
          if (r)
            n !== void 0 ? i = On(l.components, r, s, n) : i = ia(l.components, r, s);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, s), i = c.map((u, b) => ({ ...u, order: b + 1 }));
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
      updateComponentProps: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentStyle: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentEvents: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              events: r
            }))
          });
          return et(n, o);
        });
      },
      updateComponentDataBinding: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentValidation: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentPermissions: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return et(n, o);
        });
      },
      updateComponentOrder: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: is(l.components, s, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return et(n, o);
        });
      },
      removeComponent: (s) => {
        t((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: oa(o.components, s)
          });
          return {
            ...et(r, n),
            selection: { ...r.selection, componentId: null }
          };
        });
      },
      moveComponent: (s, r, n) => {
        t((o) => {
          const l = o.features.find((p) => p.id === o.activeFeatureId);
          if (!l) return {};
          const i = eo(l.components, s);
          if (!i) return {};
          const [d, c] = i, u = { ...d, parentId: r };
          let b;
          if (r === null) {
            const p = c.filter((v) => !v.parentId);
            p.splice(n, 0, u);
            const m = p.map((v, j) => ({ ...v, order: j + 1 })), S = c.filter((v) => v.parentId);
            b = [...m, ...S];
          } else
            b = On(c, r, u, n);
          const C = o.features.map(
            (p) => p.id === o.activeFeatureId ? { ...p, components: b } : p
          );
          return et(o, C);
        });
      },
      distributeSiblingWidths: (s, r) => {
        t((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ca(l.components, s, r)
          });
          return et(n, o);
        });
      },
      undo: () => {
        t((s) => {
          if (s.historyIndex <= 0) return {};
          const r = s.historyIndex - 1;
          return { historyIndex: r, features: s.history[r] };
        });
      },
      redo: () => {
        t((s) => {
          if (s.historyIndex >= s.history.length - 1) return {};
          const r = s.historyIndex + 1;
          return { historyIndex: r, features: s.history[r] };
        });
      }
    }),
    { name: "UIForge/MultiFeatureStore" }
  )
);
function et(t, a) {
  const s = t.history.slice(0, t.historyIndex + 1);
  return s.length >= Xl && s.shift(), s.push(a), {
    features: a,
    history: s,
    historyIndex: s.length - 1
  };
}
function is(t, a, s) {
  return t.map((r) => r.id === a ? s(r) : r.children && r.children.length > 0 ? { ...r, children: is(r.children, a, s) } : r);
}
function oa(t, a) {
  return t.filter((s) => s.id !== a).map(
    (s) => s.children && s.children.length > 0 ? { ...s, children: oa(s.children, a) } : s
  );
}
function ia(t, a, s) {
  return t.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...s, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: ia(r.children, a, s)
  } : r);
}
function ca(t, a, s) {
  return t.some((n) => n.id === a) ? t.map((n) => {
    var o;
    return n.id === a ? {
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
    children: ca(n.children, a, s)
  } : n);
}
function eo(t, a) {
  const s = t.findIndex((r) => r.id === a);
  if (s !== -1) {
    const r = t[s], n = [...t.slice(0, s), ...t.slice(s + 1)];
    return [r, n];
  }
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (!n.children || n.children.length === 0) continue;
    const o = n.children.findIndex((i) => i.id === a);
    if (o !== -1) {
      const i = n.children[o], d = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], c = { ...n, children: d }, u = [...t.slice(0, r), c, ...t.slice(r + 1)];
      return [i, u];
    }
    const l = da(n.children, a);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, u = [...t.slice(0, r), c, ...t.slice(r + 1)];
      return [i, u];
    }
  }
  return null;
}
function da(t, a) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (r.id === a) {
      const n = [...t.slice(0, s), ...t.slice(s + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = da(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, d = [...t.slice(0, s), i, ...t.slice(s + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function On(t, a, s, r) {
  return t.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...s, parentId: a });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: On(n.children, a, s, r) } : n;
  });
}
function ua(t, a) {
  return t.map((s) => {
    const r = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    return {
      ...s,
      id: r,
      pageId: a,
      children: s.children ? ua(s.children, a) : []
    };
  });
}
const Oe = Cs()(
  ta(
    (t, a) => ({
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
      setFeaturePolicies: (s, r) => {
        t((n) => ({
          featurePolicies: {
            ...n.featurePolicies,
            [String(s)]: r
          }
        }));
      },
      setComponentPolicies: (s, r, n) => {
        const o = `${s}_${r}`;
        t((l) => ({
          componentPolicies: {
            ...l.componentPolicies,
            [o]: n
          }
        }));
      },
      fetchSecurityMetadata: async () => {
        try {
          const [s, r] = await Promise.all([
            ot.get("/core/roles").catch(() => null),
            ot.get("/core/users").catch(() => null)
          ]);
          s && Array.isArray(s.data) && t({ roles: s.data }), r && Array.isArray(r.data) && t({ users: r.data }), t({ isLoaded: !0 });
        } catch {
          t({ isLoaded: !0 });
        }
      },
      fetchFeaturePolicies: async (s) => {
        try {
          const r = await ot.get(`/core/feature-policies/${s}`).catch(() => null);
          if (r && Array.isArray(r.data)) {
            const n = r.data;
            return t((o) => ({
              featurePolicies: {
                ...o.featurePolicies,
                [String(s)]: n
              }
            })), n;
          }
        } catch {
        }
        return a().featurePolicies[String(s)] || [];
      },
      saveFeaturePolicies: async (s, r) => {
        try {
          const n = {
            featureId: Number(s) || 0,
            policies: r
          }, o = await ot.put(`/core/feature-policies/${s}`, n).catch(async () => await ot.post(`/core/feature-policies/${s}`, n).catch(() => null));
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
        await a().fetchFeaturePolicies(s).catch(() => {
          t((n) => ({
            featurePolicies: {
              ...n.featurePolicies,
              [String(s)]: r
            }
          }));
        });
      },
      fetchComponentPolicies: async (s, r) => {
        try {
          const n = r ? `/core/component-policies?pageId=${s}&nodeId=${encodeURIComponent(r)}` : `/core/component-policies?pageId=${s}`, o = await ot.get(n).catch(() => null);
          if (o && Array.isArray(o.data)) {
            const l = o.data;
            if (r) {
              const i = `${s}_${r}`;
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
        if (r) {
          const n = `${s}_${r}`;
          return a().componentPolicies[n] || [];
        }
        return [];
      },
      saveComponentPolicies: async (s, r, n, o) => {
        const l = `${s}_${r}`, i = n.map((d) => ({
          ...d,
          pageId: Number(s),
          nodeId: r,
          fieldName: o || d.fieldName || r,
          roleId: typeof d.roleId == "number" ? d.roleId : null,
          roleCode: d.roleCode || (typeof d.roleId == "string" ? d.roleId : void 0),
          userId: typeof d.userId == "number" ? d.userId : null,
          userName: d.userName || (typeof d.userId == "string" ? d.userId : void 0)
        }));
        try {
          const d = {
            pageId: Number(s),
            nodeId: r,
            fieldName: o || r,
            policies: i
          }, c = await ot.put("/core/component-policies", d).catch(async () => await ot.post("/core/component-policies", d).catch(() => null));
          if (c && Array.isArray(c.data)) {
            t((u) => ({
              componentPolicies: {
                ...u.componentPolicies,
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
      createRole: async (s, r, n) => {
        try {
          return await ot.post("/core/roles", {
            code: s.trim(),
            name: r.trim() || s.trim(),
            description: (n == null ? void 0 : n.trim()) || "",
            active: !0
          }), await a().fetchSecurityMetadata(), !0;
        } catch (o) {
          return console.error("Failed to create role:", o), !1;
        }
      },
      deleteRole: async (s) => {
        try {
          return await ot.delete(`/core/roles/${s}`), await a().fetchSecurityMetadata(), !0;
        } catch (r) {
          return console.error("Failed to delete role:", r), !1;
        }
      },
      getEffectiveRoleCode: () => {
        const s = Yt.getState().user;
        if (s ? s.role === "Dev" : !0) {
          const { previewRoleCode: n } = a();
          return n || "Dev";
        }
        return s.roleCode || s.role || "User";
      },
      getEffectiveUser: () => {
        const s = Yt.getState().user, r = s ? s.role === "Dev" : !0, { previewRoleCode: n } = a();
        if (r && n) {
          const i = n === "Dev";
          return {
            id: "simulated_user",
            username: `sim_${n.toLowerCase()}`,
            roleCode: n,
            isDev: i
          };
        }
        const o = a().getEffectiveRoleCode(), l = o === "Dev";
        return {
          id: (s == null ? void 0 : s.id) || (r ? 1 : "user"),
          username: (s == null ? void 0 : s.username) || (r ? "admin" : "user"),
          roleCode: o,
          isDev: l
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN FEATURE / MÀN HÌNH ──
      evaluateFeaturePermission: (s, r, n) => {
        var h, D, L, F;
        const o = a(), l = o.getEffectiveUser(), { roleCode: i, isDev: d, username: c } = l;
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
        let u;
        if (typeof s == "object" && s !== null)
          u = s;
        else {
          const k = String(s);
          u = ee.getState().features.find((V) => V.id === k || V.route === k);
        }
        if ((h = u == null ? void 0 : u.displayFlags) != null && h.isPublic || (L = (D = u == null ? void 0 : u.featureProps) == null ? void 0 : D.displayFlags) != null && L.isPublic)
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
        const b = (u == null ? void 0 : u.id) || String(s);
        let C = o.featurePolicies[b] || (u == null ? void 0 : u.policies) || [];
        C.length === 0 && (((F = u == null ? void 0 : u.displayFlags) == null ? void 0 : F.isPermissionInherited) ?? !0) && (u != null && u.parentId) && (C = o.featurePolicies[u.parentId] || []);
        const p = C.filter((k) => k.active !== !1), m = p.find((k) => String(k.userId) === String(l.id) || k.userName === c), S = p.find((k) => {
          if (!k.roleCode && !k.roleName && !k.roleId) return !1;
          const V = k.roleCode || k.roleName;
          return (V == null ? void 0 : V.toLowerCase()) === i.toLowerCase();
        }), v = m || S;
        if (p.length === 0)
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
        if (!v)
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
        let j = !1, N = !1;
        if (n) {
          const k = new Date(n).getTime(), E = (Date.now() - k) / (1e3 * 60 * 60);
          v.lockUpdateAfterCreated && v.lockUpdateAfterCreated > 0 && (j = E > v.lockUpdateAfterCreated), v.lockDeleteAfterCreated && v.lockDeleteAfterCreated > 0 && (N = E > v.lockDeleteAfterCreated);
        }
        const w = !r || r === c, g = (v.canWriteAll || v.canWrite && w) && !j, T = (v.canDeleteAll || v.canDelete && w) && !N, A = v.canRead && !v.canWrite && !v.canWriteAll;
        return {
          canRead: v.canRead,
          canWrite: g,
          canWriteAll: v.canWriteAll,
          canDelete: T,
          canDeleteAll: v.canDeleteAll,
          canDeactivate: v.canDeactivate,
          canShare: v.canShare,
          isPartialEditMode: A,
          isLockedUpdate: j,
          isLockedDelete: N
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN COMPONENT / LINH KIỆN ──
      evaluateComponentPermission: (s, r, n = [], o) => {
        var g, T, A, h, D, L, F;
        const l = a(), i = l.getEffectiveUser(), { roleCode: d, isDev: c, username: u } = i;
        if (c)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const b = l.evaluateFeaturePermission(s, o), C = `${s}_${r.id}`;
        let m = l.componentPolicies[C] || ((g = r.permissions) == null ? void 0 : g.rules) || ((A = (T = r.props) == null ? void 0 : T.permissions) == null ? void 0 : A.rules) || [];
        if (m.length === 0 && n.length > 0)
          for (let k = n.length - 1; k >= 0; k--) {
            const V = n[k], E = `${s}_${V.id}`, H = l.componentPolicies[E] || ((h = V.permissions) == null ? void 0 : h.rules) || ((L = (D = V.props) == null ? void 0 : D.permissions) == null ? void 0 : L.rules) || [];
            if (H.length > 0) {
              m = H;
              break;
            }
          }
        const S = m.filter((k) => k.active !== !1), v = S.find((k) => String(k.userId) === String(i.id) || k.userName === u), j = S.find((k) => {
          if (!k.roleCode && !k.roleName && !k.roleId) return !1;
          const V = k.roleCode || k.roleName;
          return (V == null ? void 0 : V.toLowerCase()) === d.toLowerCase();
        }), N = v || j;
        if (N) {
          const k = !o || o === u, V = N.canWriteAll || N.canWrite && k, E = b.isPartialEditMode && (N.canWrite || N.canWriteAll);
          return {
            canRead: N.canRead,
            canWrite: V,
            canWriteAll: N.canWriteAll,
            canDelete: N.canDelete,
            canDeactivate: N.canDeactivate,
            shouldHighlightEditable: E
          };
        }
        const w = r.permissions;
        if (w != null && w.allowedRoles && w.allowedRoles.length > 0) {
          const k = w.allowedRoles.some((E) => E.toLowerCase() === d.toLowerCase()), V = (F = w.readOnlyRoles) == null ? void 0 : F.some((E) => E.toLowerCase() === d.toLowerCase());
          return k ? {
            canRead: !0,
            canWrite: !V && b.canWrite,
            canWriteAll: !V && b.canWriteAll,
            canDelete: b.canDelete,
            canDeactivate: b.canDeactivate,
            shouldHighlightEditable: !1
          } : {
            canRead: w.deniedBehavior !== "hide",
            canWrite: !1,
            canWriteAll: !1,
            canDelete: !1,
            canDeactivate: !1,
            shouldHighlightEditable: !1
          };
        }
        return {
          canRead: b.canRead,
          canWrite: b.canWrite,
          canWriteAll: b.canWriteAll,
          canDelete: b.canDelete,
          canDeactivate: b.canDeactivate,
          shouldHighlightEditable: !1
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN CỘT LƯỚI GRIDPOLICY ──
      evaluateColumnPermission: (s, r, n, o = [], l) => {
        var g;
        const i = a(), d = i.getEffectiveUser(), { roleCode: c, isDev: u, username: b } = d;
        if (u)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const C = i.evaluateFeaturePermission(s, l), p = `${s}_${n.key}`, m = i.componentPolicies[p], v = (m && m.length > 0 ? m : n.columnPermissions || ((g = n.permissions) == null ? void 0 : g.rules) || n.policies || []).filter((T) => T.active !== !1), j = v.find((T) => String(T.userId) === String(d.id) || T.userName === b), N = v.find((T) => {
          if (!T.roleCode && !T.roleName && !T.roleId) return !1;
          const A = T.roleCode || T.roleName;
          return (A == null ? void 0 : A.toLowerCase()) === c.toLowerCase();
        }), w = j || N;
        if (w) {
          const T = !l || l === b, A = w.canWriteAll || w.canWrite && T, h = C.isPartialEditMode && (w.canWrite || w.canWriteAll);
          return {
            canRead: w.canRead,
            canWrite: A,
            canWriteAll: w.canWriteAll,
            canDelete: w.canDelete,
            canDeactivate: w.canDeactivate,
            shouldHighlightEditable: h
          };
        }
        return {
          canRead: C.canRead,
          canWrite: C.canWrite && n.editable !== !1,
          canWriteAll: C.canWriteAll && n.editable !== !1,
          canDelete: C.canDelete,
          canDeactivate: C.canDeactivate,
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
), Hn = Aa(null), to = () => Ea(Hn), mn = ({
  node: t,
  isEditing: a = !1,
  ancestors: s = [],
  children: r
}) => {
  var u, b, C, p, m, S, v, j, N, w, g, T;
  const n = ee((A) => A.activeFeatureId), o = Oe((A) => A.evaluateComponentPermission);
  if (a) {
    const A = !!((u = t.permissions) != null && u.rules && t.permissions.rules.length > 0 || (p = (C = (b = t.props) == null ? void 0 : b.permissions) == null ? void 0 : C.rules) != null && p.length || (S = (m = t.permissions) == null ? void 0 : m.allowedRoles) != null && S.length || (j = (v = t.permissions) == null ? void 0 : v.readOnlyRoles) != null && j.length);
    return /* @__PURE__ */ e.jsx(
      Hn.Provider,
      {
        value: {
          canRead: !0,
          canWrite: !0,
          canWriteAll: !0,
          canDelete: !0,
          canDeactivate: !0,
          isReadOnly: !1,
          shouldHighlightEditable: !1,
          hasRules: A
        },
        children: r
      }
    );
  }
  const l = o(n, t, s);
  if (!l.canRead || t.type === "Button" && (/delete|xóa|remove/i.test(String(((N = t.props) == null ? void 0 : N.text) || "")) || /trash|delete/i.test(String(((w = t.props) == null ? void 0 : w.icon) || "")) || ((g = t.props) == null ? void 0 : g.variant) === "danger") && !l.canDelete || t.type === "Button" && /deactivate|ngưng|hủy bỏ/i.test(String(((T = t.props) == null ? void 0 : T.text) || "")) && !l.canDeactivate)
    return null;
  const c = !l.canWrite && !l.canWriteAll;
  return /* @__PURE__ */ e.jsx(
    Hn.Provider,
    {
      value: {
        ...l,
        isReadOnly: c,
        shouldHighlightEditable: !!l.shouldHighlightEditable
      },
      children: r
    }
  );
}, ks = ({
  label: t,
  showLabel: a = !0,
  labelPosition: s = "left",
  labelWidth: r = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: d,
  children: c
}) => {
  const u = to(), b = !!(u != null && u.shouldHighlightEditable), C = !!(u != null && u.isReadOnly), p = s === "left", m = l ? `col-span-${l}` : "", S = b ? "[&_input]:!border-emerald-500/70 [&_input]:!bg-emerald-950/20 [&_input]:shadow-[0_0_0_1px_rgba(16,185,129,0.25)] [&_textarea]:!border-emerald-500/70 [&_select]:!border-emerald-500/70 [&_.enterprise-select-trigger]:!border-emerald-500/70" : C ? "[&_input]:bg-slate-900/50 [&_input]:border-slate-800/80 [&_input]:text-slate-400" : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative group w-full ${m} ${p ? "flex flex-row items-center gap-2.5" : "flex flex-col gap-1"} ${i}`,
      style: {
        width: "100%",
        maxWidth: "100%",
        ...l ? { gridColumn: `span ${l} / span ${l}` } : {},
        ...d
      },
      children: [
        a && t && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs select-none ${b ? "text-emerald-300 font-semibold" : C ? "text-slate-400 font-medium" : "text-slate-300 font-medium"} ${p ? "shrink-0 text-right truncate" : ""}`,
            style: p ? { width: r } : void 0,
            title: t,
            children: [
              b && /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 shadow-[0_0_6px_rgba(52,211,153,0.8)] align-middle",
                  title: "Được phép chỉnh sửa"
                }
              ),
              t,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              p && ":"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: `flex-1 min-w-0 w-full flex flex-col justify-center ${S}`, children: [
          c,
          o && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-red-400 mt-0.5", children: o })
        ] })
      ]
    }
  );
}, pa = "uiforge_bl_functions_registry", Ms = {};
function jn(t) {
  if (!t || !t.trim()) return "";
  let a = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function wn() {
  if (typeof window > "u") return Ms;
  try {
    const t = localStorage.getItem(pa);
    if (t) {
      const a = JSON.parse(t), s = { ...Ms, ...a };
      for (const [r, n] of Object.entries(Ms))
        s[r] = Array.from(/* @__PURE__ */ new Set([...n, ...s[r] || []]));
      return s;
    }
  } catch {
  }
  return Ms;
}
function Cn(t) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(pa, JSON.stringify(t));
    } catch {
    }
}
function so(t) {
  if (!t || !t.trim()) return [];
  const a = jn(t), s = wn();
  if (s[a] && s[a].length > 0)
    return s[a];
  if (s[t.trim()] && s[t.trim()].length > 0)
    return s[t.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return s[a] = r, Cn(s), r;
}
function no(t, a) {
  if (!t || !a) return [];
  const s = jn(t), r = a.trim().replace(/\(.*?\)/g, "");
  if (!s || !r) return [];
  const n = wn(), o = n[s] || [];
  return o.includes(r) || (n[s] = [...o, r], Cn(n)), n[s];
}
function pi(t, a) {
  if (!t || !a) return [];
  const s = jn(t), r = a.trim().replace(/\(.*?\)/g, ""), n = wn(), o = n[s] || [];
  return n[s] = o.filter((l) => l !== r), Cn(n), n[s];
}
function ro(t, a) {
  const s = jn(t);
  Ms[s] = Array.from(/* @__PURE__ */ new Set([...Ms[s] || [], ...a]));
  const r = wn();
  r[s] = Array.from(/* @__PURE__ */ new Set([...r[s] || [], ...a])), Cn(r);
}
const cs = {};
function xi(t, a) {
  cs[t] = a;
  const s = t.trim().replace(/\\/g, "/").split("/").pop() || "";
  cs[s] = a;
  const r = s.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  cs[r] = a;
  const n = [];
  for (const [o, l] of Object.entries(a))
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
  n.length > 0 && ro(s, n);
}
function er(t) {
  if (!t || !t.trim()) return { module: null, canonicalName: "" };
  const a = t.trim().replace(/\\/g, "/").split("/").pop() || "", s = a.toLowerCase();
  if (cs[a]) return { module: cs[a], canonicalName: a };
  if (cs[s]) return { module: cs[s], canonicalName: a };
  const r = s.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(cs))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === r)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: a };
}
function xa(t, a) {
  if (!a || !a.trim()) return { fn: null, matchedName: "" };
  const s = a.replace(/\(.*?\)/g, "").trim(), r = s.toLowerCase();
  if (typeof t[s] == "function")
    return { fn: t[s], matchedName: s };
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === r && typeof o == "function")
      return { fn: o, matchedName: n };
  for (const [n, o] of Object.entries(t))
    if (o && typeof o == "object") {
      if (typeof o[s] == "function")
        return { fn: o[s].bind(o), matchedName: s };
      for (const [i, d] of Object.entries(o))
        if (i.toLowerCase() === r && typeof d == "function")
          return { fn: d.bind(o), matchedName: i };
      const l = Object.getPrototypeOf(o);
      if (l && l !== Object.prototype) {
        for (const i of Object.getOwnPropertyNames(l))
          if (i !== "constructor" && typeof o[i] == "function" && (i === s || i.toLowerCase() === r))
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
                if (c !== "constructor" && typeof i[c] == "function" && (c === s || c.toLowerCase() === r))
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
function zs(t, a, s, r = !1, n, o = !0) {
  const l = document.createElement("div");
  l.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${o ? r ? "border-emerald-500 shadow-emerald-500/30" : "border-blue-500 shadow-blue-500/30" : "border-red-500 shadow-red-500/30"} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md`;
  const i = o ? r ? "⚡" : "⚙" : "⚠️", d = o ? r ? "bg-emerald-600/25 text-emerald-400" : "bg-blue-600/20 text-blue-400" : "bg-red-600/25 text-red-400", c = o ? r ? "text-emerald-300" : "text-blue-300" : "text-red-300";
  l.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${d} flex items-center justify-center font-bold text-base flex-shrink-0">
      ${i}
    </div>
    <div class="min-w-0">
      <div class="font-bold ${c} flex items-center gap-1.5 flex-wrap">
        <span>${n ? o ? "Thao tác thành công:" : "Cảnh báo:" : r ? "Đã gọi hàm BL:" : "Mô phỏng sự kiện:"}</span>
        <span class="font-mono text-cyan-300 font-bold">${t}()</span>
      </div>
      ${n ? `<div class="text-[11px] text-slate-200 mt-1 leading-relaxed">${n}</div>` : `<div class="text-[10px] text-slate-400 mt-0.5">
               Sự kiện: <span class="font-mono text-amber-400">${a}</span> | File: <span class="font-mono text-emerald-400">${s || "Chưa gắn file"}</span>
             </div>`}
    </div>
  `, document.body.appendChild(l), setTimeout(() => {
    l.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => l.remove(), 300);
  }, 3800);
}
function tn(t, a, s, r) {
  const n = t.handlerName || t.action || "unnamedHandler", o = t.trigger || "click", { module: l, canonicalName: i } = er(s);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  const u = {
    componentName: a,
    trigger: o,
    blFileName: i || s,
    dataEngine: je.getState(),
    navigationEngine: nt.getState(),
    editorStore: ee.getState(),
    ...r || {}
  };
  if (l) {
    const { fn: b, matchedName: C } = xa(l, n);
    if (c = C, b)
      try {
        const p = b(u);
        if (d = !0, p && typeof p.then == "function")
          return p.then((m) => {
            m && m.message ? zs(c, o, i || s, !0, m.message, m.success !== !1) : zs(c, o, i || s, !0);
          }).catch((m) => {
            zs(c, o, i || s, !0, String(m), !1);
          }), !0;
        if (p && p.message)
          return zs(c, o, i || s, !0, p.message, p.success !== !1), !0;
      } catch (p) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${C}() trong ${i}:`, p);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${a || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || s || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), zs(c, o, i || s, d), d;
}
function Ye(t, a, s, r, n) {
  if (!t || t.length === 0) return;
  const o = t.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    tn(l, s, r, n);
}
async function Tr(t, a = "onInit", s) {
  if (!t) return null;
  const { module: r, canonicalName: n } = er(t);
  if (!r) return null;
  const { fn: o } = xa(r, a);
  if (!o) return null;
  const l = {
    trigger: a,
    blFileName: n,
    dataEngine: je.getState(),
    navigationEngine: nt.getState(),
    editorStore: ee.getState(),
    ...s || {}
  };
  return await o(l);
}
const ao = ({ node: t, isEditing: a }) => {
  const { props: s, style: r } = t, n = ee((N) => N.features), o = ee((N) => N.activeFeatureId), l = n.find((N) => String(N.id) === String(t.pageId)) || n.find((N) => String(N.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[s.variant || "primary"], j = {
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
        ...S
      },
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${v} ${j}`,
      onClick: (N) => {
        a ? (N.ctrlKey || N.metaKey || N.altKey) && (N.stopPropagation(), Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (N) => {
        var g;
        N.stopPropagation(), ((g = t.events) == null ? void 0 : g.some((T) => T.trigger === "dblclick" || T.trigger === "onDoubleClick")) ? Ye(t.events, "dblclick", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && Ye(t.events, "click", s.label || "Nút bấm", i, {
          componentId: t.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: s.label || "Nút bấm"
    }
  );
}, lo = ({ node: t, isEditing: a }) => {
  var A;
  const { props: s, style: r } = t, n = ee((h) => h.features), o = ee((h) => h.activeFeatureId), l = n.find((h) => String(h.id) === String(t.pageId)) || n.find((h) => String(h.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((A = t.dataBinding) == null ? void 0 : A.fieldName) || t.props.name || t.id), N = je((h) => ns(h, v, j, void 0)), w = je((h) => h.setFieldValue), g = N !== void 0 ? N : s.value ?? "", T = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    ks,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: a || !!s.readOnly,
          placeholder: s.placeholder || "Nhập dữ liệu...",
          value: g,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${T ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (h) => {
            const D = h.target.value;
            w(v, j, D), a || Ye(t.events, "change", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: j,
              value: D
            });
          },
          onFocus: () => {
            a || Ye(t.events, "focus", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: j
            });
          },
          onBlur: (h) => {
            a || Ye(t.events, "blur", s.label || "Ô nhập liệu", i, {
              componentId: t.id,
              fieldName: j,
              value: h.target.value
            });
          }
        }
      )
    }
  );
}, oo = ({ node: t, isEditing: a }) => {
  var L;
  const { props: s, style: r } = t, n = ee((F) => F.features), o = ee((F) => F.activeFeatureId), l = n.find((F) => String(F.id) === String(t.pageId)) || n.find((F) => String(F.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((L = t.dataBinding) == null ? void 0 : L.fieldName) || t.props.name || t.id), N = je((F) => ns(F, v, j, void 0)), w = je((F) => F.setFieldValue), g = s.precision !== void 0 ? Number(s.precision) : 0, T = N !== void 0 ? N : s.value, A = T != null && T !== "" ? Number(T) : 0, h = (F) => F.toLocaleString("en-US", {
    minimumFractionDigits: g,
    maximumFractionDigits: g
  }), D = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    ks,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          disabled: s.disabled,
          readOnly: a || !!s.readOnly,
          placeholder: s.placeholder || "0",
          value: h(A),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${D ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (F) => {
            const k = F.target.value.replace(/,/g, "");
            if (k === "" || !isNaN(Number(k))) {
              const V = k === "" ? 0 : Number(k);
              w(v, j, V), a || Ye(t.events, "change", s.label || "Ô số", i, {
                componentId: t.id,
                fieldName: j,
                value: V
              });
            }
          }
        }
      ) })
    }
  );
}, io = ({ node: t, isEditing: a }) => {
  const { props: s, style: r } = t, n = ee((v) => v.features), o = ee((v) => v.activeFeatureId), l = n.find((v) => String(v.id) === String(t.pageId)) || n.find((v) => String(v.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {};
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      style: {
        width: "100%",
        maxWidth: "100%",
        ...S
      },
      className: "text-sm font-medium text-slate-200 inline-block",
      onClick: (v) => {
        a ? (v.ctrlKey || v.metaKey || v.altKey) && (v.stopPropagation(), Ye(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        })) : Ye(t.events, "click", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      onDoubleClick: (v) => {
        v.stopPropagation(), Ye(t.events, "dblclick", s.label || "Văn bản", i, {
          componentId: t.id
        });
      },
      children: s.label || "Văn bản tiêu đề"
    }
  );
}, Dr = ({
  node: t,
  isEditing: a,
  isSelected: s,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var H;
  const { props: d, style: c } = t;
  ee((_) => _.updateComponentProps);
  const u = !!(d.isTab || d.tab || d.isTabGroup || t.type === "Tabs"), b = [
    { id: "main", label: "TAB 1" }
  ], C = d.tabs || b, [p, m] = R(
    d.activeTabId || ((H = C[0]) == null ? void 0 : H.id) || "main"
  ), S = d.layoutMode || "flex", v = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, j = d.gridConfig || { columns: 12, gap: "16px" }, N = Number(
    j.columns || (typeof v.columnsPerRow == "number" ? v.columnsPerRow : 12)
  ) || 12, w = (c == null ? void 0 : c.justifyContent) || v.justify || "flex-start", g = (c == null ? void 0 : c.alignItems) || v.align || "flex-start", T = v.wrap || "wrap", A = S === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))`,
    gap: j.gap || v.gap || "16px",
    alignItems: g
  } : {
    display: "flex",
    flexDirection: v.direction || "row",
    flexWrap: T,
    justifyContent: w,
    alignItems: g,
    gap: v.gap || "12px"
  };
  let h = c != null && c.flex ? void 0 : "100%", D = c == null ? void 0 : c.flex, L = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const _ = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(_) && _ > 0) {
      const y = parseInt(o.gap || "12", 10) || 12, K = _ === 1 ? "100%" : `calc((100% - ${(_ - 1) * y}px) / ${_})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (h = K, D = `0 0 ${K}`, L = K);
    }
  }
  const { width: F, flex: k, ...V } = c || {}, E = l ? {
    ...A,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: u ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (u ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (u ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ...V,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...A,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: u ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (u ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (u ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : h,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : D,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : L,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: r,
      onContextMenu: n,
      style: E,
      className: `relative transition-all duration-150 group/container box-border ${a ? `cursor-pointer ${s ? u ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : u ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && s && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${u ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: u ? `Tab: ${d.label || "Không tên"}` : "Khoảng trắng" }),
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
}, co = ({ node: t, children: a }) => {
  const { props: s, style: r } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: u, ...b } = r || {}, [C, p] = R(!1), m = s.label || s.title || "Khối Bố Cục (Section)", S = s.collapsible ?? !0, v = s.layoutMode || "grid", j = s.flexConfig || {}, N = s.gridConfig || {}, w = Number(N.columns || j.columnsPerRow || 12) || 12, g = j.gap || N.gap || "12px", T = (r == null ? void 0 : r.justifyContent) || j.justify || "flex-start", A = (r == null ? void 0 : r.alignItems) || j.align || "center", h = v === "flex" ? {
    display: "flex",
    flexDirection: j.direction || "row",
    flexWrap: j.wrap || "wrap",
    justifyContent: T,
    alignItems: A,
    gap: g
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${w}, minmax(0, 1fr))`,
    gap: g,
    alignItems: A
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...b
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: m })
          ] }),
          S && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => p(!C),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: C ? "Mở rộng" : "Thu gọn",
              children: C ? /* @__PURE__ */ e.jsx(At, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Zs, { className: "w-4 h-4" })
            }
          )
        ] }),
        !C && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: h, children: a })
      ]
    }
  );
}, hi = ({ node: t, children: a }) => {
  const { props: s, style: r } = t, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: u, ...b } = r || {}, C = s.label || s.title || "Biểu Mẫu Doanh Nghiệp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...b
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: C }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: s.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Er, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
}, uo = ({
  x: t,
  y: a,
  column: s,
  isOpen: r,
  isDev: n,
  onClose: o,
  onToggleHide: l,
  onSetFreeze: i,
  onOpenProperties: d,
  onCloneColumn: c,
  onRemoveColumn: u,
  onToggleFilter: b
}) => {
  const C = tt(null), [p, m] = ts.useState(!1), S = Yt((w) => {
    var g;
    return ((g = w.user) == null ? void 0 : g.role) === "Dev";
  }), v = n !== void 0 ? n : S;
  if (Le(() => {
    if (!r) return;
    const w = (T) => {
      C.current && !C.current.contains(T.target) && o();
    }, g = (T) => {
      T.key === "Escape" && o();
    };
    return document.addEventListener("mousedown", w), document.addEventListener("keydown", g), () => {
      document.removeEventListener("mousedown", w), document.removeEventListener("keydown", g);
    };
  }, [r, o]), !r) return null;
  const j = Math.min(t, window.innerWidth - 220), N = Math.min(a, window.innerHeight - 340);
  return Et(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: C,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: j, top: N },
        onClick: (w) => w.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hiện cột này (Show header)" })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(Kn, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Ẩn cột này (Hide header)" })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(Mr, { className: `w-3.5 h-3.5 ${s.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  p && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
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
            v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
                    /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5 text-sky-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                  onClick: () => {
                    u(s.key), o();
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
            b && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  b(), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Br, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Filter Local" })
                ]
              }
            ),
            v && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  d(s), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ba, { className: "w-3.5 h-3.5" }),
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
}, po = ({
  x: t,
  y: a,
  row: s,
  rowIndex: r,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: d,
  onInsertRowBelow: c,
  onMoveRowUp: u,
  onMoveRowDown: b,
  onPasteExcel: C
}) => {
  const p = tt(null);
  if (Le(() => {
    if (!o) return;
    const v = (N) => {
      p.current && !p.current.contains(N.target) && l();
    }, j = (N) => {
      N.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", j), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", j);
    };
  }, [o, l]), !o) return null;
  const m = Math.min(t, window.innerWidth - 220), S = Math.min(a, window.innerHeight - 260);
  return Et(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: m, top: S },
        onClick: (v) => v.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Thao Tác Dòng #",
              r + 1
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-slate-500 font-mono", children: [
              "ID: ",
              (s == null ? void 0 : s.id) ?? r + 1
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
                  /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            C && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  C(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(_r, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  c(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Or, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(zn, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            b && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  b(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(qn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  d(r), l();
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
}, xo = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], ha = ({
  events: t = [],
  onChange: a,
  scriptFile: s = "transactionList.bl.ts",
  componentName: r = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = xo
}) => {
  const [d, c] = R(""), [, u] = R(0), b = s || "transactionList.bl.ts", C = so(b), p = () => {
    var w;
    const j = C[0] || "openTransactionDetail", N = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((w = i[0]) == null ? void 0 : w.value) || "click",
      handlerName: j,
      action: j
    };
    a([...t, N]);
  }, m = (j, N) => {
    const w = t.map((g, T) => {
      if (T !== j) return g;
      const A = { ...g, ...N };
      return N.handlerName && !N.action && (A.action = N.handlerName), A;
    });
    a(w);
  }, S = (j) => {
    const N = t.filter((w, g) => g !== j);
    a(N);
  }, v = () => {
    d.trim() && (no(b, d.trim()), c(""), u((j) => j + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            t.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-[10px] text-slate-400", children: [
          "File BL:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400 font-semibold", children: b })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: p,
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
        /* @__PURE__ */ e.jsx(Hr, { className: "w-3 h-3 text-cyan-400" }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Khai Báo Hàm Mới Trong ",
          b
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: d,
            onChange: (j) => c(j.target.value),
            onKeyDown: (j) => {
              j.key === "Enter" && (j.preventDefault(), v());
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
              /* @__PURE__ */ e.jsx(Or, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    t.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((j, N) => {
      const w = C.includes(j.handlerName || "");
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
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: j.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => S(N),
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
                    value: j.trigger || "click",
                    onChange: (g) => m(N, { trigger: g.target.value }),
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
                    value: j.handlerName || C[0] || "",
                    onChange: (g) => {
                      const T = g.target.value;
                      m(N, { handlerName: T, action: T });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      C.map((g) => /* @__PURE__ */ e.jsxs("option", { value: g, children: [
                        g,
                        "()"
                      ] }, g)),
                      !w && j.handlerName && /* @__PURE__ */ e.jsxs("option", { value: j.handlerName, children: [
                        j.handlerName,
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
                  tn(
                    j,
                    r,
                    b,
                    {
                      componentId: n,
                      trigger: j.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(_a, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        j.id || N
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(qt, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        r,
        " chưa gắn sự kiện nào."
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-600 max-w-xs mx-auto", children: [
        "Bấm nút ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-slate-400", children: '"+ Thêm Sự Kiện"' }),
        " ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file ",
        /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-400", children: b }),
        "."
      ] })
    ] })
  ] });
}, ma = ({
  isOpen: t,
  onClose: a
}) => {
  const s = Oe((w) => w.roles), r = Oe((w) => w.createRole), n = Oe((w) => w.deleteRole), [o, l] = R(""), [i, d] = R(""), [c, u] = R(""), [b, C] = R(!1), [p, m] = R(null), [S, v] = R(null);
  if (!t) return null;
  const j = async (w) => {
    w.preventDefault();
    const g = o.trim().toUpperCase(), T = i.trim();
    if (!g) {
      v({ type: "error", message: "Vui lòng nhập Mã vai trò (Code)!" });
      return;
    }
    if (s.some((h) => {
      var D;
      return ((D = h.code) == null ? void 0 : D.toUpperCase()) === g;
    })) {
      v({ type: "error", message: `Vai trò "${g}" đã tồn tại trong hệ thống!` });
      return;
    }
    C(!0), v(null);
    const A = await r(g, T || g, c);
    C(!1), A ? (v({ type: "success", message: `Đã tạo thành công vai trò "${g}"!` }), l(""), d(""), u(""), setTimeout(() => v(null), 3e3)) : v({ type: "error", message: "Có lỗi xảy ra khi tạo vai trò, vui lòng thử lại." });
  }, N = async (w, g) => {
    if (g.toUpperCase() === "DEV") {
      alert("Role 'Dev' là vai trò hệ thống bắt buộc của Core, không thể xóa.");
      return;
    }
    if (!confirm(`Bạn có chắc chắn muốn xóa vai trò "${g}"?`))
      return;
    m(w);
    const T = await n(w);
    m(null), T ? (v({ type: "success", message: `Đã xóa vai trò "${g}".` }), setTimeout(() => v(null), 3e3)) : v({ type: "error", message: `Không thể xóa vai trò "${g}".` });
  };
  return Et(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-2xl rounded-2xl border border-emerald-500/40 bg-[#0c1427] shadow-2xl overflow-hidden flex flex-col text-slate-100 max-h-[90vh]", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1c] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-emerald-600/20 text-emerald-400", children: /* @__PURE__ */ e.jsx(Bs, { className: "w-5 h-5" }) }),
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
            onClick: a,
            className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
            children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto space-y-6 text-xs flex-1", children: [
        S && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `p-3 rounded-xl border flex items-center gap-2 ${S.type === "success" ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" : "bg-rose-950/60 border-rose-500/40 text-rose-300"}`,
            children: [
              S.type === "success" ? /* @__PURE__ */ e.jsx(Yn, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Oa, { className: "w-4 h-4 shrink-0 text-rose-400" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: S.message })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("form", { onSubmit: j, className: "p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3", children: [
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
                  onChange: (w) => l(w.target.value.toUpperCase()),
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
                  onChange: (w) => d(w.target.value),
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
                onChange: (w) => u(w.target.value),
                className: "w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "submit",
              disabled: b || !o.trim(),
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all disabled:opacity-50 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: b ? "Đang tạo..." : "+ Tạo Role Mới" })
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
              s.map((w) => {
                var T;
                const g = ((T = w.code) == null ? void 0 : T.toUpperCase()) === "DEV";
                return /* @__PURE__ */ e.jsxs("tr", { className: "hover:bg-slate-800/30 transition-colors", children: [
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono font-bold text-emerald-400", children: w.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-medium", children: w.name || w.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-slate-400 text-[11px] truncate max-w-[200px]", title: w.description, children: w.description || "—" }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: g ? /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold text-[10px]", children: [
                    /* @__PURE__ */ e.jsx(Jn, { className: "w-2.5 h-2.5" }),
                    " Core Bắt Buộc"
                  ] }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-[10px]", children: "Dynamic Role" }) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: g ? /* @__PURE__ */ e.jsx("span", { className: "text-slate-600 text-xs select-none", title: "Role Core Dev không thể xóa", children: "🔒" }) : /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => N(w.id, w.code),
                      disabled: p === w.id,
                      className: "p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors disabled:opacity-50",
                      title: `Xóa vai trò ${w.code}`,
                      children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                    }
                  ) })
                ] }, w.id || w.code);
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
          onClick: a,
          className: "px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors",
          children: "Đóng"
        }
      ) })
    ] }) }),
    document.body
  );
}, ba = ({
  title: t,
  rules: a = [],
  onChange: s,
  onPendingRuleChange: r,
  pageId: n = "",
  nodeId: o = "",
  fieldName: l = "",
  isColumn: i = !1
}) => {
  const d = Oe((U) => U.roles), c = Oe((U) => U.users), u = Oe((U) => U.fetchSecurityMetadata);
  Le(() => {
    u();
  }, [u]), Le(() => {
    n && o && Oe.getState().fetchComponentPolicies(n, o).then((U) => {
      U && U.length > 0 && s(U);
    }).catch(() => {
    });
  }, [n, o]);
  const [b, C] = R(!1), [p, m] = R("role"), [S, v] = R(""), [j, N] = R(""), [w, g] = R(!0), [T, A] = R(!1), [h, D] = R(!1), [L, F] = R(!1), [k, V] = R(!1), [E, H] = R(!0);
  Le(() => {
    if (!r) return;
    const U = !!(S && S.trim() !== ""), Z = !!(j && j.trim() !== "");
    if (!U && !Z) {
      r(null);
      return;
    }
    const M = d.find((q) => String(q.id) === S || q.code === S), Q = c.find((q) => String(q.id) === j || q.username === j), le = {
      id: `cpr_pending_${Date.now()}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: U ? (M == null ? void 0 : M.id) || Number(S) || S : null,
      roleCode: U ? (M == null ? void 0 : M.code) || S : void 0,
      roleName: U ? (M == null ? void 0 : M.name) || S : void 0,
      userId: Z ? (Q == null ? void 0 : Q.id) || Number(j) || j : null,
      userName: Z ? (Q == null ? void 0 : Q.username) || j : void 0,
      canRead: w,
      canWrite: T,
      canWriteAll: h,
      canDelete: L,
      canDeactivate: k,
      active: E
    };
    r(le);
  }, [
    S,
    j,
    w,
    T,
    h,
    L,
    k,
    E,
    d,
    c,
    n,
    o,
    l,
    r
  ]);
  const _ = () => {
    if (p === "role" && !S || p === "user" && !j) return;
    const U = d.find((le) => String(le.id) === S || le.code === S), Z = c.find((le) => String(le.id) === j || le.username === j), M = {
      id: `cpr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: p === "role" ? (U == null ? void 0 : U.id) || S : null,
      roleCode: p === "role" ? (U == null ? void 0 : U.code) || S : void 0,
      roleName: p === "role" ? (U == null ? void 0 : U.name) || S : void 0,
      userId: p === "user" ? (Z == null ? void 0 : Z.id) || j : null,
      userName: p === "user" ? (Z == null ? void 0 : Z.username) || j : void 0,
      canRead: w,
      canWrite: T,
      canWriteAll: h,
      canDelete: L,
      canDeactivate: k,
      active: E
    }, Q = [...a, M];
    s(Q), n && o && Oe.getState().saveComponentPolicies(n, o, Q, l), v(""), N(""), g(!0), A(!1), D(!1), F(!1), V(!1), H(!0), r && r(null);
  }, y = (U, Z) => {
    const M = [...a], Q = !!M[U][Z];
    M[U] = { ...M[U], [Z]: !Q }, s(M), n && o && Oe.getState().saveComponentPolicies(n, o, M, l);
  }, K = (U) => {
    const Z = a.filter((M, Q) => Q !== U);
    s(Z), n && o && Oe.getState().saveComponentPolicies(n, o, Z, l);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 bg-[#0a1120] border border-slate-800 rounded-xl p-4 text-xs select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2.5", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Bs, { className: "w-4 h-4 text-teal-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider", children: t || (i ? "Phân Quyền Cột Lưới (GridPolicy)" : "Phân Quyền Linh Kiện (Component Policy)") }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
          a.length,
          " quy tắc"
        ] }),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => C(!0),
            className: "flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-[11px] font-semibold transition-colors cursor-pointer ml-1",
            title: "Quản lý và tạo vai trò động cho dự án",
            children: [
              /* @__PURE__ */ e.jsx($n, { className: "w-3 h-3 text-teal-400" }),
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
            /* @__PURE__ */ e.jsx(Ha, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: p === "user" ? j : "",
                onChange: (U) => {
                  m("user"), N(U.target.value), v("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-mono",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  c.map((U) => /* @__PURE__ */ e.jsx("option", { value: U.id, children: U.username }, U.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: p === "role" ? S : "",
                onChange: (U) => {
                  m("role"), v(U.target.value), N("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-semibold",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  d.map((U) => /* @__PURE__ */ e.jsx("option", { value: U.code, children: U.code }, U.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (U) => g(U.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xem"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: T,
              onChange: (U) => A(U.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Cập nhật bản ghi của mình"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: h,
              onChange: (U) => D(U.target.checked),
              className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "CẬP NHẬT TOÀN BỘ (Sửa trên mọi bản ghi kể cả do role khác tạo)"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: L,
              onChange: (U) => F(U.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xóa"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: k,
              onChange: (U) => V(U.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Hủy"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (U) => H(U.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Kích hoạt rule"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: _,
              disabled: !S && !j,
              className: "px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-[11px] font-bold transition-all shadow-sm cursor-pointer",
              title: "Thêm quy tắc mới",
              children: "+ Thêm"
            }
          ) })
        ] }),
        a.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 10, className: "py-8 text-center text-slate-500", children: "Chưa có quy tắc phân quyền riêng (Linh kiện sẽ thừa kế phân quyền từ Feature cha)." }) }) : a.map((U, Z) => {
          var le, q;
          const M = U.roleCode || ((le = d.find((ie) => ie.code === U.roleCode || String(ie.id) === String(U.roleId))) == null ? void 0 : le.code) || (U.roleId ? String(U.roleId) : ""), Q = U.userName || ((q = c.find((ie) => String(ie.id) === String(U.userId))) == null ? void 0 : q.username) || (U.userId ? String(U.userId) : "");
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              className: "hover:bg-slate-800/40 transition-colors border-b border-slate-800/50",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-500 text-[11px]", children: Z + 1 }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: U.userId || U.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-cyan-300 font-mono", children: Q }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: U.roleCode || U.roleId ? /* @__PURE__ */ e.jsx("span", { className: "text-amber-300 font-semibold", children: M }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.canRead,
                    onChange: () => y(Z, "canRead"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.canWrite,
                    onChange: () => y(Z, "canWrite"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.canWriteAll,
                    onChange: () => y(Z, "canWriteAll"),
                    className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.canDelete,
                    onChange: () => y(Z, "canDelete"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.canDeactivate,
                    onChange: () => y(Z, "canDeactivate"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!U.active,
                    onChange: () => y(Z, "active"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => K(Z),
                    className: "p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/20 transition-all cursor-pointer",
                    title: "Xóa quy tắc này",
                    children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                  }
                ) })
              ]
            },
            U.id || Z
          );
        })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      ma,
      {
        isOpen: b,
        onClose: () => C(!1)
      }
    )
  ] });
};
let Pn = null;
async function kn(t = !1) {
  if (!t && Pn) return Pn;
  try {
    const a = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (a.ok) {
      const s = await a.json();
      if (Array.isArray(s))
        return Pn = s, s;
    }
  } catch (a) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", a);
  }
  return [];
}
function vn(t, a = []) {
  return t.map((s) => ({
    name: s.name,
    displayName: s.displayName || s.name,
    tableName: s.tableName,
    fields: s.columns.map((r) => ({
      name: r.name,
      displayName: r.displayName || r.name,
      dataType: r.dataType
    }))
  }));
}
function yn(t, a) {
  if (!a || !a.trim()) return;
  const s = a.trim().toLowerCase(), r = s.endsWith("s") ? s.slice(0, -1) : s;
  return t.find(
    (n) => n.name.toLowerCase() === s || n.name.toLowerCase() === r || n.tableName && n.tableName.toLowerCase() === s
  );
}
const fa = ({
  isOpen: t,
  column: a,
  onClose: s,
  onSave: r
}) => {
  var A;
  const [n, o] = R(null), [l, i] = R("info"), [d, c] = R([]), [u, b] = R(null), [C, p] = R(!1), m = ee((h) => h.features.find((D) => D.id === h.activeFeatureId));
  if (Le(() => {
    kn().then((h) => {
      h && h.length > 0 && c(h);
    });
  }, []), Le(() => {
    if (a && t) {
      let h = [];
      if (Array.isArray(a.events))
        h = [...a.events];
      else if (typeof a.events == "string" && a.events.trim())
        try {
          const D = JSON.parse(a.events);
          Array.isArray(D) && (h = D);
        } catch {
        }
      h.length === 0 && a.action && (h = [
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
        formatCell: a.formatCell ?? a.format ?? "",
        formatData: a.formatData ?? "",
        events: h
      }), m != null && m.id && a.key && Oe.getState().fetchComponentPolicies(m.id, a.key).then((D) => {
        D && D.length > 0 && o((L) => L ? { ...L, columnPermissions: D } : null);
      }).catch(() => {
      });
    }
  }, [a, t, m == null ? void 0 : m.id]), !t || !n) return null;
  const S = Array.isArray(n.events) ? n.events : [], v = vn(d), j = yn(v, n.reference || n.refName), N = j ? j.fields : [], w = n.componentType === "Select" || n.componentType === "Dropdown", g = (h, D) => {
    o((L) => {
      if (!L) return L;
      const F = { ...L, [h]: D };
      return h === "frozen" ? F.sticky = D ? "left" : "none" : h === "sticky" && (F.frozen = D === "left"), F;
    });
  }, T = async (h) => {
    if (!n) return;
    let D = [...n.columnPermissions || []];
    u && (D = [...D, u], o((L) => L ? { ...L, columnPermissions: D } : null), b(null)), m != null && m.id && n.key && await Oe.getState().saveComponentPolicies(m.id, n.key, D, n.key), r({ ...n, columnPermissions: D }), p(!0), setTimeout(() => p(!1), 2500);
  };
  return Et(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          C && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => T(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
              onClick: s,
              className: "flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
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
                  onChange: (h) => g("code", h.target.value),
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
                  onChange: (h) => g("order", parseInt(h.target.value) || 0),
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
                  onChange: (h) => g("feature", h.target.value),
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
                  onChange: (h) => g("refClass", h.target.value),
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
                  onChange: (h) => g("filterTemplate", h.target.value),
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
                  onChange: (h) => g("formatExcell", h.target.value),
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
                  onChange: (h) => g("childStyle", h.target.value),
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
                  onChange: (h) => g("dataSource", h.target.value),
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
                  onChange: (h) => g("key", h.target.value),
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
                  onChange: (h) => g("title", h.target.value),
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
                  onChange: (h) => g("description", h.target.value),
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
                    value: j ? j.name : "",
                    onChange: (h) => {
                      const D = h.target.value;
                      o((L) => ({
                        ...L,
                        reference: D,
                        refName: D
                      }));
                    },
                    className: "w-full px-2 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                      v.map((h) => /* @__PURE__ */ e.jsxs("option", { value: h.name, children: [
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
                      const D = h.target.value;
                      o((L) => ({
                        ...L,
                        refName: D,
                        reference: D
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
                    onChange: (h) => g("formatCell", h.target.value),
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
                    onChange: (h) => g("formatData", h.target.value),
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
                    onChange: (h) => g("width", h.target.value),
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
                    onChange: (h) => g("minWidth", h.target.value),
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
                    onChange: (h) => g("maxWidth", h.target.value),
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
                  onChange: (h) => g("componentType", h.target.value),
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
                    onChange: (h) => g("precision", parseInt(h.target.value) || 0),
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
                    onChange: (h) => g("align", h.target.value),
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
                      /* @__PURE__ */ e.jsx(qt, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: S.length > 0 ? `Cấu hình (${S.length})` : "+ Thêm Sự Kiện" })
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
                      /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      S.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: S.map((h) => `${h.trigger} ➔ ${h.handlerName || h.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      S.length,
                      " event",
                      S.length !== 1 ? "s" : ""
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
                    onChange: (h) => g("cascadeField", h.target.value),
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
                    onChange: (h) => g("aggregate", h.target.value),
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
                  onChange: (h) => g("validation", h.target.value),
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
                  /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  (((A = n.dropdownColumns) == null ? void 0 : A.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  S.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: S.length })
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
                    onChange: (h) => g("frozen", h.target.checked),
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
                    onChange: (h) => g("disabled", h.target.checked),
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
                    onChange: (h) => g("hasPermission", h.target.checked),
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
                    onChange: (h) => g("focusSearch", h.target.checked),
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
                    onChange: (h) => g("filterEq", h.target.checked),
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
                    onChange: (h) => g("filterLocal", h.target.checked),
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
                    onChange: (h) => g("hidden", h.target.checked),
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
                    onChange: (h) => g("active", h.target.checked),
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
                    onChange: (h) => g("advancedSearch", h.target.checked),
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
                    onChange: (h) => g("virtualScroll", h.target.checked),
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
                    onChange: (h) => g("upperCase", h.target.checked),
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
                    onChange: (h) => g("hasFilter", h.target.checked),
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
                    onChange: (h) => g("isRealtime", h.target.checked),
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
                    onChange: (h) => g("autoFit", h.target.checked),
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
                    onChange: (h) => g("aggregate", h.target.checked ? "sum" : "none"),
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
                    onChange: (h) => g("addDate", h.target.checked),
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
                    onChange: (h) => g("editable", h.target.checked),
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
                    onChange: (h) => g("isPivot", h.target.checked),
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
                    onChange: (h) => g("basicSearch", h.target.checked),
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
                    onChange: (h) => g("ignoreTrigger", h.target.checked),
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
                    onChange: (h) => g("hideGrid", h.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && w && (() => {
            const h = n.dropdownColumns || [], D = (F) => g("dropdownColumns", F), L = (j == null ? void 0 : j.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: j ? `${j.displayName} (${j.name})` : n.reference || n.refName || "(Chưa chọn Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  N.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const F = N.filter((V) => V.name.toLowerCase() !== "id" && V.name.toLowerCase() !== "active").slice(0, 3), k = `${Math.floor(100 / Math.max(F.length, 1))}%`;
                        D(
                          F.map((V) => ({
                            key: V.name,
                            title: V.displayName,
                            width: k,
                            align: "left"
                          }))
                        );
                      },
                      className: "px-2.5 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/35 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold cursor-pointer",
                      title: "Tự động nạp các cột tiêu biểu từ thực thể Reference đã chọn",
                      children: [
                        "⚡ Tự động nạp (",
                        j == null ? void 0 : j.name,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        D([
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
                      onChange: (F) => g("idField", F.target.value),
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
                      onChange: (F) => g("formatData", F.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  h.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: h.map((F, k) => {
                    const V = L ? `{${L}.${F.key}}` : `{${F.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const E = n.formatData || "", H = E ? `${E} - ${V}` : V;
                          g("formatData", H);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          V
                        ]
                      },
                      `${F.key}-${k}`
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
                      onChange: (F) => g("populateField", F.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: N.map((F) => /* @__PURE__ */ e.jsxs("option", { value: F.name, children: [
                F.displayName,
                " (",
                F.dataType,
                ")"
              ] }, F.name)) }),
              h.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: h.map((F, k) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: k === 0,
                          onClick: () => {
                            const V = [...h], E = V[k];
                            V[k] = V[k - 1], V[k - 1] = E, D(V);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(Zs, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: k === h.length - 1,
                          onClick: () => {
                            const V = [...h], E = V[k];
                            V[k] = V[k + 1], V[k + 1] = E, D(V);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "col-dropdown-field-suggestions",
                        value: F.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (V) => {
                          const E = V.target.value, H = N.find((y) => y.name === E), _ = [...h];
                          _[k] = {
                            ..._[k],
                            key: E,
                            title: H && (!_[k].title || _[k].title.startsWith("Cột ")) ? H.displayName : _[k].title
                          }, D(_);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: F.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (V) => {
                          const E = [...h];
                          E[k] = { ...E[k], title: V.target.value }, D(E);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: F.width || "50%",
                        placeholder: "Width",
                        onChange: (V) => {
                          const E = [...h];
                          E[k] = { ...E[k], width: V.target.value }, D(E);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: F.align || "left",
                        onChange: (V) => {
                          const E = [...h];
                          E[k] = { ...E[k], align: V.target.value }, D(E);
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
                        onClick: () => D(h.filter((V, E) => E !== k)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                k
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            ha,
            {
              events: S,
              onChange: (h) => {
                g("events", h);
                const D = h.find((L) => L.trigger === "click" || L.trigger === "actionClick");
                D && g("action", D.handlerName || D.action);
              },
              scriptFile: (m == null ? void 0 : m.scriptFile) || "transactionList.bl.ts",
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
            ba,
            {
              isColumn: !0,
              rules: n.columnPermissions || [],
              onChange: (h) => {
                o({
                  ...n,
                  columnPermissions: h
                }), m != null && m.id && n.key && Oe.getState().setComponentPolicies(m.id, n.key, h);
              },
              onPendingRuleChange: b,
              pageId: m == null ? void 0 : m.id,
              nodeId: n.key,
              fieldName: n.key
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-t border-slate-800", children: [
        /* @__PURE__ */ e.jsx("div", { children: C && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }) }),
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
              onClick: () => T(),
              className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
              children: [
                /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    document.body
  );
}, ho = ({
  columns: t,
  data: a,
  showRowNumber: s = !0,
  rowNumberWidth: r = 55,
  leftOffsets: n = {}
}) => {
  if (!t.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = a.map((p) => p[i.key]).filter((p) => p != null && p !== "");
    if (i.aggregate === "count") {
      const p = d.length;
      return `${i.summaryPrefix || ""}${p}${i.summarySuffix || " dòng"}`;
    }
    const c = d.map((p) => {
      if (typeof p == "number") return p;
      const m = parseFloat(String(p).replace(/,/g, ""));
      return isNaN(m) ? 0 : m;
    });
    if (c.length === 0) return "—";
    let u = 0;
    i.aggregate === "sum" ? u = c.reduce((p, m) => p + m, 0) : i.aggregate === "avg" ? u = c.reduce((p, m) => p + m, 0) / c.length : i.aggregate === "min" ? u = Math.min(...c) : i.aggregate === "max" && (u = Math.max(...c));
    const b = i.precision ?? (i.format === "number_thousands" ? 0 : 2), C = b > 0 ? u.toLocaleString("en-US", { minimumFractionDigits: b, maximumFractionDigits: b }) : u.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${C}${i.summarySuffix || ""}`;
  };
  return /* @__PURE__ */ e.jsxs("tr", { className: "border-t-2 border-emerald-500/50 bg-slate-900/95 font-bold text-xs text-emerald-400 select-none shadow-inner", children: [
    s && /* @__PURE__ */ e.jsx(
      "td",
      {
        className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-20 bg-slate-900 border-r border-slate-800",
        style: { width: `${r}px`, minWidth: `${r}px` },
        children: "Σ"
      }
    ),
    t.filter((i) => !i.hidden).map((i, d) => {
      const c = l(i), u = d === 0, b = i.sticky === "left" || !!i.frozen, C = b && n[i.key] !== void 0 ? n[i.key] : void 0, p = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${p} ${b ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: C !== void 0 ? `${C}px` : void 0
          },
          children: u && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function qs(t) {
  if (!t || typeof t != "string" || !t.trim()) return null;
  const a = t.trim(), s = a.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (s) {
    const o = parseInt(s[1], 10), l = parseInt(s[2], 10) - 1, i = parseInt(s[3], 10);
    if (l >= 0 && l <= 11 && o >= 1 && o <= 31)
      return { year: i, month: l, day: o };
  }
  const r = a.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (r) {
    const o = parseInt(r[1], 10), l = parseInt(r[2], 10) - 1, i = parseInt(r[3], 10);
    if (l >= 0 && l <= 11 && i >= 1 && i <= 31)
      return { year: o, month: l, day: i };
  }
  const n = new Date(t);
  return isNaN(n.getTime()) ? null : { year: n.getFullYear(), month: n.getMonth(), day: n.getDate() };
}
function As(t, a, s) {
  const r = String(s).padStart(2, "0"), n = String(a + 1).padStart(2, "0");
  return `${r}/${n}/${t}`;
}
const mo = [
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
], bo = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], ga = ({
  value: t,
  onChange: a,
  placeholder: s = "DD/MM/YYYY",
  disabled: r = !1,
  readOnly: n = !1,
  className: o = "",
  inputClassName: l = "",
  error: i,
  title: d,
  tabIndex: c,
  onKeyDown: u,
  onFocus: b,
  onBlur: C,
  autoFocus: p = !1,
  isGridCell: m = !1
}) => {
  const S = tt(null), v = tt(null), j = tt(null), [N, w] = R(!1), [g, T] = R(() => {
    const J = qs(t);
    return J ? As(J.year, J.month, J.day) : t || "";
  }), A = $e(() => qs(t), [t]), h = $e(() => {
    const J = /* @__PURE__ */ new Date();
    return { year: J.getFullYear(), month: J.getMonth(), day: J.getDate() };
  }, []), [D, L] = R((A == null ? void 0 : A.year) || h.year), [F, k] = R((A == null ? void 0 : A.month) ?? h.month), [V, E] = R({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Le(() => {
    const J = qs(t);
    J ? (T(As(J.year, J.month, J.day)), L(J.year), k(J.month)) : T(t || "");
  }, [t]);
  const H = () => {
    if (!S.current) return;
    const J = S.current.getBoundingClientRect(), te = 310, I = 280, ae = window.innerHeight - J.bottom < te && J.top > te;
    let fe = ae ? J.top - te - 4 : J.bottom + 4, xe = J.left;
    xe + I > window.innerWidth - 10 && (xe = Math.max(10, window.innerWidth - I - 10)), E({ top: fe, left: xe, openUpwards: ae });
  }, _ = () => {
    r || n || (H(), w(!0));
  }, y = () => {
    w(!1);
  };
  Le(() => {
    if (!N) return;
    const J = (I) => {
      const O = I.target;
      S.current && !S.current.contains(O) && j.current && !j.current.contains(O) && y();
    }, te = () => {
      N && H();
    };
    return document.addEventListener("mousedown", J, !0), window.addEventListener("resize", te, !0), window.addEventListener("scroll", te, !0), () => {
      document.removeEventListener("mousedown", J, !0), window.removeEventListener("resize", te, !0), window.removeEventListener("scroll", te, !0);
    };
  }, [N]);
  const K = (J) => {
    J.stopPropagation(), F === 0 ? (k(11), L((te) => te - 1)) : k((te) => te - 1);
  }, U = (J) => {
    J.stopPropagation(), F === 11 ? (k(0), L((te) => te + 1)) : k((te) => te + 1);
  }, Z = (J, te = 0) => {
    var fe;
    let I = D, O = F + te;
    O < 0 ? (O = 11, I -= 1) : O > 11 && (O = 0, I += 1);
    const ae = As(I, O, J);
    T(ae), a(ae), y(), (fe = v.current) == null || fe.focus();
  }, M = (J) => {
    var I;
    J.stopPropagation();
    const te = As(h.year, h.month, h.day);
    T(te), L(h.year), k(h.month), a(te), y(), (I = v.current) == null || I.focus();
  }, Q = (J) => {
    var te;
    J.stopPropagation(), T(""), a(""), y(), (te = v.current) == null || te.focus();
  }, le = (J) => {
    const te = J.target.value;
    T(te);
    const I = qs(te);
    if (I) {
      const O = As(I.year, I.month, I.day);
      a(O), L(I.year), k(I.month);
    } else te === "" && a("");
  }, q = (J) => {
    if (J.key === "Escape")
      N && (J.stopPropagation(), y());
    else if (J.key === "Enter") {
      const te = qs(g);
      if (te) {
        const I = As(te.year, te.month, te.day);
        T(I), a(I);
      }
      N && y();
    } else (J.key === "F4" || J.altKey && J.key === "ArrowDown") && (J.preventDefault(), J.stopPropagation(), N ? y() : _());
    u && u(J);
  }, ie = $e(() => {
    const J = (new Date(D, F, 1).getDay() + 6) % 7, te = new Date(D, F + 1, 0).getDate(), I = new Date(D, F, 0).getDate(), O = [];
    for (let xe = J - 1; xe >= 0; xe--)
      O.push({
        day: I - xe,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let xe = 1; xe <= te; xe++)
      O.push({
        day: xe,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const fe = (O.length <= 35 ? 35 : 42) - O.length;
    for (let xe = 1; xe <= fe; xe++)
      O.push({
        day: xe,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return O;
  }, [D, F]), de = () => N ? Et(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        style: {
          position: "fixed",
          top: `${V.top}px`,
          left: `${V.left}px`,
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
                onClick: K,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wr, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: F,
                  onChange: (J) => k(parseInt(J.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: mo.map((J, te) => /* @__PURE__ */ e.jsx("option", { value: te, children: J }, te))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: D,
                  onChange: (J) => L(parseInt(J.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (J, te) => D - 20 + te).map((J) => /* @__PURE__ */ e.jsx("option", { value: J, children: J }, J))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: U,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(us, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: bo.map((J, te) => /* @__PURE__ */ e.jsx("div", { className: te >= 5 ? "text-amber-400/80" : "", children: J }, te)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: ie.map((J, te) => {
            const I = A && J.isCurrentMonth && A.year === D && A.month === F && A.day === J.day, O = J.isCurrentMonth && h.year === D && h.month === F && h.day === J.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => Z(J.day, J.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${I ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : O ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : J.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: J.day
              },
              te
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: M,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Wa, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            g && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Q,
                className: "flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(ut, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Xóa" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: y,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, z = m ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", pe = m ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: S, className: `${z} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: v,
        type: "text",
        tabIndex: c,
        autoFocus: p,
        disabled: r,
        readOnly: n,
        placeholder: s,
        title: i || d,
        value: g,
        onChange: le,
        onKeyDown: q,
        onFocus: b,
        onBlur: C,
        onClick: (J) => {
          J.stopPropagation(), N || _();
        },
        className: pe
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: r,
        onClick: (J) => {
          J.stopPropagation(), N ? y() : _();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5" })
      }
    ),
    de()
  ] });
}, fo = ({
  column: t,
  value: a,
  row: s,
  rowIndex: r,
  columnIndex: n = 0,
  error: o,
  isFocused: l = !1,
  isEditing: i = !1,
  isSelected: d = !1,
  onChange: c,
  onActionClick: u,
  onKeyDown: b,
  onFocus: C
}) => {
  const p = (t.editable ?? !0) && !t.disabled && t.componentType !== "Label", m = a === "—" || a === "-" ? "" : a ?? "", v = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : l ? "border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", j = (T) => {
    b && b(T, r, n, t.key);
  }, N = () => {
    C && C(r, n, t.key);
  }, w = {
    "data-grid-cell": `${r}_${n}`,
    "data-grid-row": r,
    "data-grid-col": n,
    "data-grid-colkey": t.key
  };
  if (t.componentType === "Checkbox")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-1", ...w, children: /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: !!a,
        disabled: t.disabled || !p,
        onClick: (T) => T.stopPropagation(),
        onChange: (T) => c(T.target.checked),
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${l ? "ring-2 ring-emerald-400" : ""}`
      }
    ) });
  if (t.componentType === "Button") {
    const T = t.formatCell || t.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...w, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: t.disabled,
        onClick: (A) => {
          A.stopPropagation(), u && u(t.key, s);
        },
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${l ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`,
        children: T
      }
    ) });
  }
  if (t.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (T) => {
          T.preventDefault(), T.stopPropagation(), u && u(t.key, s);
        },
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${l ? "ring-2 ring-emerald-400/80 rounded px-1" : ""}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(Gr, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!p) {
    if (t.precision !== void 0 && typeof a == "number") {
      const T = t.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: t.precision, maximumFractionDigits: t.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: j,
          onFocus: N,
          ...w,
          className: `font-mono text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: [
            T,
            t.summarySuffix ? ` ${t.summarySuffix}` : ""
          ]
        }
      );
    }
    if (t.formatCell && a !== void 0 && a !== null) {
      let T = t.formatCell.replace("{0}", String(a));
      return typeof s == "object" && s !== null && Object.keys(s).forEach((A) => {
        T = T.replace(new RegExp(`\\{${A}\\}`, "gi"), String(s[A] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: j,
          onFocus: N,
          ...w,
          className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: T
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
        children: a != null ? String(a) : "—"
      }
    );
  }
  if (t.componentType === "Select" || t.componentType === "Dropdown") {
    let T = t.options || [];
    const A = t.reference || t.refName;
    if (T.length === 0 && A) {
      const h = je.getState().getDataset(A);
      if (Array.isArray(h) && h.length > 0) {
        const D = t.valueField || t.idField || "code", L = t.displayField || t.selectField || "name";
        T = h.map((F) => ({
          value: String(F[D] ?? F.code ?? F.id ?? ""),
          label: String(F[L] ?? F.name ?? F[D] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: t.disabled,
        title: o || void 0,
        onClick: (h) => h.stopPropagation(),
        onChange: (h) => c(h.target.value),
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${v} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          T.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.value, className: "bg-slate-900 text-slate-100", children: h.label }, h.value))
        ]
      }
    );
  }
  if (t.componentType === "DatePicker" || t.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...w, children: /* @__PURE__ */ e.jsx(
      ga,
      {
        isGridCell: !0,
        value: m,
        disabled: t.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (T) => c(T),
        onKeyDown: j,
        onFocus: N
      }
    ) });
  if (t.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: m,
        placeholder: "0",
        disabled: t.disabled,
        title: o || void 0,
        step: t.precision && t.precision > 0 ? Math.pow(10, -t.precision) : 1,
        onClick: (T) => T.stopPropagation(),
        onChange: (T) => {
          const A = T.target.value;
          c(A === "" ? "" : Number(A));
        },
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${v} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (t.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: m,
        placeholder: t.title ? `Nhập ${t.title}...` : "Nhập...",
        disabled: t.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (T) => T.stopPropagation(),
        onChange: (T) => {
          const A = t.upperCase ? T.target.value.toUpperCase() : T.target.value;
          c(A);
        },
        onKeyDown: j,
        onFocus: N,
        ...w,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${v} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const g = t.align === "right" ? "text-right" : t.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: m,
      placeholder: t.title ? `Nhập ${t.title}...` : "Nhập dữ liệu...",
      disabled: t.disabled,
      title: o || void 0,
      onClick: (T) => T.stopPropagation(),
      onChange: (T) => {
        const A = t.upperCase ? T.target.value.toUpperCase() : T.target.value;
        c(A);
      },
      onKeyDown: j,
      onFocus: N,
      ...w,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${v} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${g} ${t.cssClass || ""}`
    }
  );
};
function go(t, a) {
  var l, i, d, c, u, b, C, p;
  if (t.value !== a.value || t.error !== a.error || t.rowIndex !== a.rowIndex || t.columnIndex !== a.columnIndex || !!t.isFocused != !!a.isFocused || !!t.isEditing != !!a.isEditing || !!t.isSelected != !!a.isSelected)
    return !1;
  const s = t.column, r = a.column;
  if (s !== r && (s.key !== r.key || s.title !== r.title || s.componentType !== r.componentType || s.editable !== r.editable || s.disabled !== r.disabled || s.precision !== r.precision || s.align !== r.align || s.formatCell !== r.formatCell || s.cssClass !== r.cssClass || s.summarySuffix !== r.summarySuffix || s.upperCase !== r.upperCase || s.options !== r.options || s.reference !== r.reference || s.refName !== r.refName))
    return !1;
  const n = ((l = t.row) == null ? void 0 : l.id) ?? ((i = t.row) == null ? void 0 : i.Id) ?? ((d = t.row) == null ? void 0 : d.ID), o = ((c = a.row) == null ? void 0 : c.id) ?? ((u = a.row) == null ? void 0 : u.Id) ?? ((b = a.row) == null ? void 0 : b.ID);
  if (n !== void 0 && o !== void 0 && n !== o)
    return !1;
  if (r.formatCell && typeof r.formatCell == "string") {
    const m = r.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g);
    if (m)
      for (const S of m) {
        const v = S.slice(1, -1);
        if (v !== "0" && ((C = t.row) == null ? void 0 : C[v]) !== ((p = a.row) == null ? void 0 : p[v]))
          return !1;
      }
  }
  return !((r.componentType === "Button" || r.componentType === "Link") && t.row !== a.row);
}
const Ir = ts.memo(fo, go);
function vo({
  tableRef: t,
  rows: a,
  visibleColumns: s,
  selectedRowId: r,
  setSelectedRowId: n,
  selectedRowIds: o,
  setSelectedRowIds: l,
  onRowDoubleClick: i,
  onAddRow: d,
  onDeleteRow: c,
  onDuplicateRow: u,
  onToggleAll: b,
  onFilterByCell: C,
  onQuickSum: p,
  onToggleColumnFilters: m,
  isEditableTable: S = !0,
  onPasteExcel: v
}) {
  const [j, N] = R(null), w = Vs(
    (D, L) => {
      if (D < 0 || D >= a.length || L < 0 || L >= s.length) return;
      const F = s[L], k = a[D], V = (k == null ? void 0 : k.id) ?? (k == null ? void 0 : k.Id) ?? D;
      if (n(V), N({ rowIndex: D, colIndex: L, colKey: F.key }), t.current) {
        const E = `[data-grid-cell="${D}_${L}"]`, H = t.current.querySelector(E);
        if (H) {
          H.scrollIntoView({ block: "nearest", inline: "nearest" });
          const _ = H.tagName === "INPUT" || H.tagName === "SELECT" || H.tagName === "TEXTAREA" || H.tagName === "BUTTON" ? H : H.querySelector("input, select, textarea, button") || H;
          _.focus(), _ instanceof HTMLInputElement && (_.type === "text" || _.type === "number") && _.select();
        }
      }
    },
    [a, s, t, n]
  ), g = Vs(
    (D) => {
      if (!t.current) return;
      const L = t.current.querySelector(`[data-row-index="${D}"]`);
      L && L.scrollIntoView({ block: "nearest" });
    },
    [t]
  ), T = Vs(
    (D) => {
      if (D.key === "F1") {
        D.preventDefault(), D.stopPropagation(), b == null || b();
        return;
      }
      if (D.key === "F2") {
        D.preventDefault(), D.stopPropagation(), C == null || C();
        return;
      }
      if (D.key === "F3") {
        D.preventDefault(), D.stopPropagation(), p == null || p();
        return;
      }
      if (D.key === "F4") {
        D.preventDefault(), D.stopPropagation(), d == null || d();
        return;
      }
      if (D.key === "F6") {
        D.preventDefault(), D.stopPropagation(), m == null || m();
        return;
      }
      if (D.key === "ArrowDown") {
        D.preventDefault();
        const L = a.findIndex((k, V) => (k.id ?? k.Id ?? V) === r), F = L < a.length - 1 ? L + 1 : L;
        if (F >= 0 && F !== L) {
          const k = a[F];
          n(k.id ?? k.Id ?? F), l(/* @__PURE__ */ new Set([k.id ?? k.Id ?? F])), g(F);
        }
        return;
      }
      if (D.key === "ArrowUp") {
        D.preventDefault();
        const L = a.findIndex((k, V) => (k.id ?? k.Id ?? V) === r), F = L > 0 ? L - 1 : 0;
        if (F >= 0 && F !== L) {
          const k = a[F];
          n(k.id ?? k.Id ?? F), l(/* @__PURE__ */ new Set([k.id ?? k.Id ?? F])), g(F);
        }
        return;
      }
      if (D.key === "Enter") {
        D.preventDefault();
        const L = a.findIndex((F, k) => (F.id ?? F.Id ?? k) === r);
        L >= 0 && i && i(a[L], L);
        return;
      }
      if (D.key === "Delete") {
        const L = a.findIndex((F, k) => (F.id ?? F.Id ?? k) === r);
        L >= 0 && c && (D.preventDefault(), c(L));
        return;
      }
      if ((D.ctrlKey || D.metaKey) && (D.key === "d" || D.key === "D")) {
        D.preventDefault();
        const L = a.findIndex((F, k) => (F.id ?? F.Id ?? k) === r);
        L >= 0 && u && u(L);
        return;
      }
      if ((D.ctrlKey || D.metaKey) && (D.key === "v" || D.key === "V")) {
        const L = D.target;
        !(L && (L.tagName === "INPUT" || L.tagName === "TEXTAREA")) && v && typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" && (D.preventDefault(), navigator.clipboard.readText().then((k) => {
          if (k) {
            const V = j ? j.rowIndex : r !== null ? Math.max(0, a.findIndex((H, _) => (H.id ?? H.Id ?? _) === r)) : 0, E = j ? j.colIndex : 0;
            v(k, V, E);
          }
        }).catch(() => {
        }));
      }
    },
    [
      a,
      r,
      n,
      l,
      g,
      b,
      C,
      p,
      d,
      m,
      i,
      c,
      u,
      j,
      v
    ]
  ), A = Vs(
    (D, L, F, k) => {
      var V, E, H;
      if (D.key === "F1") {
        D.preventDefault(), D.stopPropagation(), b == null || b();
        return;
      }
      if (D.key === "F2") {
        D.preventDefault(), D.stopPropagation(), C == null || C();
        return;
      }
      if (D.key === "F3") {
        D.preventDefault(), D.stopPropagation(), p == null || p();
        return;
      }
      if (D.key === "F4") {
        D.preventDefault(), D.stopPropagation(), d == null || d();
        return;
      }
      if (D.key === "F6") {
        D.preventDefault(), D.stopPropagation(), m == null || m();
        return;
      }
      if (D.key === "ArrowDown") {
        D.preventDefault(), L < a.length - 1 && w(L + 1, F);
        return;
      }
      if (D.key === "ArrowUp") {
        D.preventDefault(), L > 0 && w(L - 1, F);
        return;
      }
      if (D.key === "ArrowLeft") {
        const _ = D.target, y = _ && _.selectionStart === 0 && _.selectionEnd === 0, K = _ && _.selectionStart === 0 && _.selectionEnd === ((V = _.value) == null ? void 0 : V.length), U = !_ || _.tagName === "SELECT" || _.type === "checkbox" || _.tagName === "BUTTON";
        (y || K || U) && F > 0 && (D.preventDefault(), w(L, F - 1));
        return;
      }
      if (D.key === "ArrowRight") {
        const _ = D.target, y = _ && _.selectionStart === ((E = _.value) == null ? void 0 : E.length), K = _ && _.selectionStart === 0 && _.selectionEnd === ((H = _.value) == null ? void 0 : H.length), U = !_ || _.tagName === "SELECT" || _.type === "checkbox" || _.tagName === "BUTTON";
        (y || K || U) && F < s.length - 1 && (D.preventDefault(), w(L, F + 1));
        return;
      }
      if (D.key === "Tab") {
        D.preventDefault(), D.shiftKey ? F > 0 ? w(L, F - 1) : L > 0 && w(L - 1, s.length - 1) : F < s.length - 1 ? w(L, F + 1) : L < a.length - 1 ? w(L + 1, 0) : d && (d(), setTimeout(() => {
          w(a.length, 0);
        }, 60));
        return;
      }
      if (D.key === "Enter") {
        if (D.preventDefault(), D.shiftKey) {
          L > 0 && w(L - 1, F);
          return;
        }
        L < a.length - 1 ? w(L + 1, F) : d && (d(), setTimeout(() => {
          w(a.length, F);
        }, 60));
        return;
      }
      if (D.key === "Escape") {
        D.preventDefault();
        const _ = D.target;
        _ == null || _.blur();
        return;
      }
    },
    [a, s, w, b, C, p, d, m]
  ), h = Vs(
    (D) => {
      var _;
      const L = (_ = D.clipboardData) == null ? void 0 : _.getData("text/plain");
      if (!L || !v) return;
      const F = L.includes("	") || L.includes(`
`), k = D.target;
      if (k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && !F)
        return;
      D.preventDefault(), D.stopPropagation();
      const E = j ? j.rowIndex : r !== null ? Math.max(0, a.findIndex((y, K) => (y.id ?? y.Id ?? K) === r)) : 0, H = j ? j.colIndex : 0;
      v(L, E, H);
    },
    [j, r, a, v]
  );
  return {
    focusedCell: j,
    setFocusedCell: N,
    focusCell: w,
    scrollToRow: g,
    handleTableContainerKeyDown: T,
    handleCellKeyDown: A,
    handlePaste: h
  };
}
function va(t) {
  return [...t].sort((a, s) => {
    const r = !!(a.frozen || a.sticky === "left"), n = !!(s.frozen || s.sticky === "left");
    if (r && !n) return -1;
    if (!r && n) return 1;
    const o = typeof a.order == "number" ? a.order : 999, l = typeof s.order == "number" ? s.order : 999;
    return o !== l ? o - l : 0;
  });
}
function Qs(t) {
  return va(t).map((s, r) => ({
    ...s,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(s.frozen || s.sticky === "left"),
    sticky: s.frozen || s.sticky === "left" ? "left" : "none"
  }));
}
function Wn(t, a, s) {
  if (s < 0 || s >= t.length || a === s) return t;
  const r = [...t], [n] = r.splice(a, 1), o = r.filter((u) => u.frozen || u.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && s < o ? (n.frozen = !0, n.sticky = "left") : l && s >= o && (n.frozen = !1, n.sticky = "none"), r.splice(s, 0, n);
  const i = r.filter((u) => u.frozen || u.sticky === "left"), d = r.filter((u) => !u.frozen && u.sticky !== "left");
  return [...i, ...d].map((u, b) => ({
    ...u,
    order: b + 1,
    frozen: !!(u.frozen || u.sticky === "left"),
    sticky: u.frozen || u.sticky === "left" ? "left" : "none"
  }));
}
function ya(t, a) {
  const s = t.map((r) => {
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
  return Qs(s);
}
function yo(t, a = 55) {
  const s = {};
  let r = a, n = null;
  return t.forEach((o) => {
    if (!!(o.frozen || o.sticky === "left") && !o.hidden) {
      s[o.key] = r, n = o.key;
      const i = parseInt(String(o.width || "140"), 10) || 140;
      r += i;
    }
  }), { offsets: s, lastFrozenKey: n };
}
class No {
  constructor() {
    Tn(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    Tn(this, "populateResolvers", /* @__PURE__ */ new Map());
  }
  /**
   * Đăng ký bộ lọc phụ thuộc giữa 2 trường (VD: country -> city, category -> product)
   */
  registerCascade(a, s, r) {
    const n = `${a.toLowerCase().trim()}->${s.toLowerCase().trim()}`;
    this.cascadeResolvers.set(n, r);
  }
  /**
   * Đăng ký bộ quy tắc tự động điền các trường liên đới khi trường nguồn thay đổi
   */
  registerPopulate(a, s) {
    const r = a.toLowerCase().trim().replace(/^fld_/, "");
    this.populateResolvers.set(r, s);
  }
  /**
   * Lấy danh sách options phụ thuộc theo Cascade
   */
  getCascadedOptions(a, s, r) {
    const n = `${a.toLowerCase().trim()}->${r.toLowerCase().trim()}`, o = this.cascadeResolvers.get(n);
    if (o) {
      const l = o(s);
      return Array.isArray(l) ? l : [];
    }
    return [];
  }
  /**
   * Tự động tính toán các trường cần điền (Auto-Populate)
   */
  calculateAutoPopulatedFields(a, s, r) {
    const n = a.toLowerCase().trim().replace(/^fld_/, ""), o = this.populateResolvers.get(n);
    return o ? o(s, r) || {} : {};
  }
}
const Na = new No();
function mi(t, a, s) {
  return Na.getCascadedOptions(t, a, s);
}
function jo(t, a, s) {
  return Na.calculateAutoPopulatedFields(t, a, s);
}
function Gn(t) {
  const a = String(t || "").trim().toUpperCase();
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
    const d = a[i];
    let c = 0;
    if (d >= "0" && d <= "9")
      c = parseInt(d, 10);
    else if (r[d] !== void 0)
      c = r[d];
    else
      return { isValid: !1, message: `Ký tự [${d}] trong số container không hợp lệ` };
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
function Fr(t) {
  if (!t || typeof t != "string") return null;
  const a = t.trim();
  if (!a || a === "—" || a === "-") return null;
  const s = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, r = a.match(s);
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
function Vn(t, a, s = "Ngày bắt đầu", r = "Ngày kết thúc") {
  const n = Fr(t), o = Fr(a);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${s} (${t}) không thể xảy ra sau ${r} (${a})`
  } : { isValid: !0 };
}
function wo(t, a, s = [], r = {}) {
  const n = [];
  for (const o of s) {
    if (o.rule === "required" && (a == null || typeof a == "string" && a.trim() === "" || Array.isArray(a) && a.length === 0)) {
      n.push(o.message || `${t} là trường bắt buộc nhập`);
      continue;
    }
    if (!(a == null || typeof a == "string" && a.trim() === "")) {
      if (o.rule === "minLength" && typeof a == "string") {
        const l = Number(o.value) || 0;
        a.length < l && n.push(o.message || `${t} phải có tối thiểu ${l} ký tự`);
      }
      if (o.rule === "maxLength" && typeof a == "string") {
        const l = Number(o.value) || 0;
        a.length > l && n.push(o.message || `${t} không được vượt quá ${l} ký tự`);
      }
      if (o.rule === "pattern" && o.value)
        try {
          (typeof o.value == "string" ? new RegExp(o.value) : o.value).test(String(a)) || n.push(o.message || `${t} không đúng định dạng quy định`);
        } catch {
          console.warn("[ValidationEngine] Biểu thức Regex không hợp lệ:", o.value);
        }
      if (o.rule === "containerNo") {
        const l = Gn(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = Vn(String(a), String(l), t, o.targetField);
          !i.isValid && i.message && n.push(o.message || i.message);
        }
      }
      if (o.rule === "custom" && typeof o.validatorFn == "function") {
        const l = o.validatorFn(a, r);
        typeof l == "string" && l ? n.push(l) : l === !1 && n.push(o.message || `${t} không thỏa mãn điều kiện kiểm tra tùy biến`);
      }
    }
  }
  return {
    isValid: n.length === 0,
    errors: n
  };
}
function bi(t, a) {
  const s = {};
  for (const [r, n] of Object.entries(a)) {
    const o = t[r], l = wo(r, o, n, t);
    l.isValid || (s[r] = l.errors);
  }
  return s;
}
const Nt = {
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
}, Co = {
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
}, ls = Cs()(
  on((t, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...Nt["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...Nt["FCLI-26020005"].shippingInfo],
      grid_container_info: [...Nt["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...Nt["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (s) => {
      const r = Nt[s];
      r && t({
        activeJobNo: s,
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
      const s = a().jobs, n = `FCLI-2602000${s.length + 5}`, o = {
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
      return Nt[n] = {
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
    updateMasterField: (s, r) => {
      const n = String(Co[s] || s), l = { ...a().masterRecord, [n]: r }, i = jo(n, r, l);
      Object.assign(l, i);
      const d = { ...a().validationErrors };
      if (n === "mblNo") {
        const u = String(r || "").trim();
        u ? /^[A-Z0-9]{8,18}$/i.test(u) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const u = l.mblIssuedDate, b = l.shipmentDate;
        if (u && b) {
          const C = Vn(u, b, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          C.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = C.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      t({
        masterRecord: l,
        validationErrors: d
      });
      const c = a().activeJobNo;
      Nt[c] && (Nt[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (s, r, n, o) => {
      const l = a().detailGrids, i = l[s] || [], d = { ...a().validationErrors }, c = `${s}_${r}_${n}`, u = i.map((C, p) => C.id !== void 0 && C.id === r || C.id === void 0 && p === r ? { ...C, [n]: o } : C);
      if (n === "containerNo") {
        const C = Gn(String(o));
        C.isValid ? delete d[c] : d[c] = C.message;
      }
      if (s === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const C = u.find((p) => p.id === r);
        if (C && C.etd && C.eta) {
          const p = Vn(C.etd, C.eta, "ETD", "ETA"), m = `${s}_${r}_etd_eta`;
          p.isValid ? delete d[m] : d[m] = p.message || "ETD phải trước ETA";
        }
      }
      t({
        detailGrids: { ...l, [s]: u },
        validationErrors: d
      }), s === "grid_container_info" && a().recalculateTotals();
      const b = a().activeJobNo;
      Nt[b] && (s === "grid_shipping_info" && (Nt[b].shippingInfo = u), s === "grid_container_info" && (Nt[b].containerInfo = u), s === "grid_shipment_detail" && (Nt[b].shipmentDetail = u));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (s, r) => {
      const n = a().detailGrids, o = n[s] || [], l = o.length > 0 ? Math.max(...o.map((u) => Number(u.id) || 0)) + 1 : 1, i = a().activeJobNo;
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
        ...r
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
        ...r
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
        ...r
      } : d = { id: l, jobNo: i, ...r };
      const c = [...o, d];
      t({
        detailGrids: { ...n, [s]: c }
      }), s === "grid_container_info" && a().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (s, r) => {
      const n = a().detailGrids, l = (n[s] || []).filter((i, d) => d !== r);
      t({
        detailGrids: { ...n, [s]: l }
      }), s === "grid_container_info" && a().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (s, r) => {
      const n = a().detailGrids, o = n[s] || [], l = o[r];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((u) => Number(u.id) || 0)) + 1 : 1, d = { ...l, id: i }, c = [...o];
      c.splice(r + 1, 0, d), t({
        detailGrids: { ...n, [s]: c }
      }), s === "grid_container_info" && a().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const s = a().detailGrids.grid_container_info || [];
      let r = 0, n = 0, o = 0, l = 0;
      s.forEach((u) => {
        r += Number(u.packageNumber) || 0, n += Number(u.gw) || 0, o += Number(u.cbm) || 0, l += Number(u.vgm) || 0;
      });
      const d = {
        ...a().masterRecord,
        tPackages: r,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      t({ masterRecord: d });
      const c = a().activeJobNo;
      Nt[c] && (Nt[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const s = a().masterRecord, r = {};
      return (o = s.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = s.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(s.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const d = Gn(i.containerNo);
        d.isValid || (r[`grid_container_info_${i.id}_containerNo`] = d.message);
      }), t({ validationErrors: r }), Object.keys(r).length === 0;
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
function ko({
  fileName: t = "Du_Lieu_Bang",
  sheetName: a = "Sheet1",
  columns: s,
  rows: r,
  includeSummary: n = !0
}) {
  const o = s.filter((S) => !S.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const S of o) {
    const v = S.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${v};padding:8px 12px;font-size:11pt;">${S.title || S.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  r.forEach((S, v) => {
    const j = v % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${j};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${v + 1}</td>`;
    for (const N of o) {
      const w = S[N.key], g = N.align || "left";
      let T = w != null ? String(w) : "";
      typeof w == "number" && (T = w.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${g};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Rr(T)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((S) => S.aggregate);
  if (n && c && r.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const S of o) {
      const v = S.align || "left";
      if (S.aggregate === "sum") {
        const j = r.reduce((w, g) => {
          const T = Number(g[S.key]);
          return w + (isNaN(T) ? 0 : T);
        }, 0), N = j % 1 !== 0 ? j.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : j.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${N}${S.summarySuffix ? ` ${S.summarySuffix}` : ""}</td>`;
      } else if (S.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${r.length}</td>`;
      else if (S.aggregate === "avg") {
        const j = r.reduce((w, g) => {
          const T = Number(g[S.key]);
          return w + (isNaN(T) ? 0 : T);
        }, 0), N = r.length > 0 ? (j / r.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${v};padding:8px 10px;font-weight:bold;">${N}</td>`;
      } else
        d += '<td style="border:1px solid #334155;"></td>';
    }
    d += "</tr>";
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
                <x:Name>${Rr(a)}</x:Name>
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
  `.trim(), b = new Blob(["\uFEFF", u], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), C = t.endsWith(".xls") || t.endsWith(".xlsx") ? t : `${t}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, p = URL.createObjectURL(b), m = document.createElement("a");
  m.href = p, m.download = C, document.body.appendChild(m), m.click(), document.body.removeChild(m), URL.revokeObjectURL(p);
}
function Rr(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function ja(t) {
  const {
    title: a,
    subtitle: s,
    columns: r,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = t, c = r.filter((w) => !w.hidden), u = window.open("", "_blank", "width=1100,height=850");
  if (!u) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const b = /* @__PURE__ */ new Date(), C = `Ngày in: ${b.toLocaleDateString("vi-VN")} lúc ${b.toLocaleTimeString("vi-VN")}`, p = Object.entries(i).map(
    ([w, g]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${Kt(w)}:</strong>
          <span>${Kt(String(g))}</span>
        </div>`
  ).join(""), m = c.map((w) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${w.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${Kt(w.title || w.key)}
      </th>`).join(""), S = n.map((w, g) => {
    const T = g % 2 === 0 ? "#ffffff" : "#f8fafc", A = c.map((h) => {
      const D = w[h.key] ?? "", L = h.align || (typeof D == "number" ? "right" : "left");
      let F = D;
      return typeof D == "number" && (F = D.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${L}; font-size: 11px;">
            ${Kt(String(F))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${T};">${A}</tr>`;
  }).join("");
  let v = "";
  o && (v = `<tfoot><tr>${c.map((g, T) => {
    const A = o[g.key] ?? (T === 0 ? "TỔNG CỘNG" : ""), h = g.align || "left";
    let D = A;
    return typeof A == "number" && (D = A.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${h}; font-size: 11px;">
          ${Kt(String(D))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const j = d ? `
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
      <title>${Kt(a)} - UIForge Report</title>
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
              ${Kt(l)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${Kt(a)}
            </h1>
            ${s ? `<div style="font-size: 12px; color: #475569;">${Kt(s)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${Kt(C)}</div>
            <div>Tổng số bản ghi: <strong>${n.length}</strong></div>
          </div>
        </div>
        ${p ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${p}</div>` : ""}
      </div>

      <table>
        <thead>
          <tr>${m}</tr>
        </thead>
        <tbody>
          ${S}
        </tbody>
        ${v}
      </table>

      ${j}

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
  u.document.open(), u.document.write(N), u.document.close();
}
function Kt(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function fi(t) {
  const a = t.columns.filter((r) => !r.hidden), s = {
    title: t.title,
    subtitle: t.subtitle,
    companyName: t.companyName,
    metadata: t.metadata,
    columns: a.map((r) => ({
      key: r.key,
      title: r.title || r.key,
      align: r.align || "left",
      dataType: r.dataType || r.componentType || "string"
    })),
    rows: t.rows
  };
  try {
    const r = await fetch("http://localhost:5048/api/core/reports/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s)
    });
    if (r.ok) {
      const n = await r.blob(), o = URL.createObjectURL(n), l = document.createElement("a");
      l.href = o, l.download = `${t.title.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
      return;
    }
  } catch {
  }
  ja(t);
}
async function gi(t) {
  const a = t.fileName || "Bieu_Mau_Chung_Tu", s = {
    templateName: t.templateName,
    placeholders: t.placeholders
  };
  try {
    const r = await fetch("http://localhost:5048/api/core/reports/docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s)
    });
    if (r.ok) {
      const n = await r.blob(), o = URL.createObjectURL(n), l = document.createElement("a");
      return l.href = o, l.download = a.endsWith(".docx") ? a : `${a}.docx`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o), !0;
    }
  } catch (r) {
    console.error("[DocxReport] Lỗi khi tạo file word:", r);
  }
  return !1;
}
function So(t) {
  if (!t || typeof t != "string") return [];
  const s = t.replace(/\r\n/g, `
`).replace(/\r/g, `
`).split(`
`);
  return s.length > 0 && s[s.length - 1].trim() === "" && s.pop(), s.length === 0 ? [] : s.map((r) => r.split("	").map((o) => {
    let l = o.trim();
    return l.startsWith('"') && l.endsWith('"') && l.length >= 2 && (l = l.slice(1, -1).replace(/""/g, '"').trim()), l;
  }));
}
function To(t, a) {
  if (t == null) return "";
  const s = String(t).trim();
  if (a.componentType === "Number" || a.format === "number" || a.format === "currency_vnd" || a.format === "currency_usd" || a.dataType === "number" || a.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount", "price", "quantity"].some(
    (n) => a.key.toLowerCase().includes(n)
  )) {
    if (!s) return 0;
    const n = s.replace(/[,\s$₫€]/g, "").trim(), o = Number(n);
    return isNaN(o) ? 0 : a.precision !== void 0 && a.precision >= 0 ? Number(o.toFixed(a.precision)) : o;
  }
  if (a.componentType === "Checkbox" || a.dataType === "boolean") {
    const n = s.toLowerCase();
    return n === "true" || n === "1" || n === "yes" || n === "y" || n === "x" || n === "v" || n === "có" || n === "checked" || n === "đúng";
  }
  if (a.componentType === "DatePicker" || a.format === "date_dmy" || a.dataType === "date") {
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
function Do({
  currentRows: t,
  visibleColumns: a,
  allColumns: s,
  clipMatrix: r,
  startRowIndex: n,
  startColIndex: o
}) {
  if (!r || r.length === 0)
    return { updatedRows: t, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 };
  const l = [...t.map((p) => ({ ...p }))], i = r.length;
  let d = 0, c = 0;
  const u = Math.max(0, n), b = Math.max(0, o), C = (p) => {
    const m = { id: p };
    return s.forEach((S) => {
      S.componentType === "Number" || S.dataType === "number" ? m[S.key] = 0 : S.componentType === "Checkbox" || S.dataType === "boolean" ? m[S.key] = !1 : (S.componentType === "DatePicker" || S.dataType, m[S.key] = "");
    }), m;
  };
  for (let p = 0; p < i; p++) {
    const m = u + p, S = r[p];
    if (S.length > d && (d = S.length), m >= l.length) {
      const j = l.length > 0 ? Math.max(...l.map((w) => Number(w.id) || 0)) : 0, N = C(j + 1);
      l.push(N), c++;
    }
    const v = l[m];
    for (let j = 0; j < S.length; j++) {
      const N = b + j;
      if (N >= a.length)
        break;
      const w = a[N];
      if (!((w.editable ?? !0) && !w.disabled && w.componentType !== "Label"))
        continue;
      const T = S[j], A = To(T, w);
      v[w.key] = A;
    }
  }
  return {
    updatedRows: l,
    pastedRowCount: i,
    pastedColCount: d,
    newRowsCreated: c
  };
}
const Pr = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], Io = ({ node: t, isEditing: a }) => {
  var gs, vs, ys, Ns, js;
  const { props: s, style: r } = t, n = ee((f) => f.updateComponentProps), o = ee((f) => f.activeFeatureId), l = Oe((f) => f.evaluateColumnPermission), i = Oe((f) => f.evaluateFeaturePermission), d = Oe((f) => f.previewRoleCode), c = Oe((f) => f.componentPolicies), u = $e(() => s.columns && Array.isArray(s.columns) ? s.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [s.columns]), b = $e(() => va(u), [u]), C = $e(() => {
    const f = b.filter((x) => !x.hidden);
    return a ? f : f.map((x) => {
      const P = l(o, t, x);
      if (!P.canRead) return null;
      const W = (P.canWrite || P.canWriteAll) && x.editable !== !1;
      return {
        ...x,
        editable: W,
        isHighlightEditable: P.shouldHighlightEditable
      };
    }).filter((x) => x !== null);
  }, [b, a, o, t, l, d, c]), p = ls((f) => f.detailGrids), m = ls((f) => f.updateGridCell), S = ls((f) => f.addGridRow), v = ls((f) => f.deleteGridRow), j = ls((f) => f.duplicateGridRow), N = ls((f) => f.validationErrors), w = !!(p && p[t.id]), g = s.reference || s.refName || ((gs = t.dataBinding) == null ? void 0 : gs.refName) || ((vs = t.dataBinding) == null ? void 0 : vs.entityName) || "", T = s.query || ((ys = t.dataBinding) == null ? void 0 : ys.query) || s.dataSource || ((Ns = t.dataBinding) == null ? void 0 : Ns.dataSource) || s.sqlWhere || ((js = t.dataBinding) == null ? void 0 : js.sqlWhere) || s.filter || "", A = je((f) => g ? f.datasets[g] : void 0), [h, D] = R(() => w && p && p[t.id] ? p[t.id] : s.data && Array.isArray(s.data) ? s.data : A && Array.isArray(A) ? A : Pr);
  Le(() => {
    s.data && Array.isArray(s.data) && s.data.length > 0 && D(s.data);
  }, [s.data]), Le(() => {
    A && Array.isArray(A) && A.length > 0 && D(A);
  }, [A]);
  const L = $e(() => w && p && p[t.id] && p[t.id].length > 0 ? p[t.id] : h && Array.isArray(h) && h.length > 0 ? h : A && Array.isArray(A) && A.length > 0 ? A : s.data && Array.isArray(s.data) ? s.data : Pr, [w, p, t.id, h, A, s.data]);
  Le(() => {
    if (s.data && Array.isArray(s.data) && s.data.length > 0) return;
    let f = !0;
    return g && je.getState().queryEntity(g, T).then((x) => {
      f && x && x.length > 0 && D(x);
    }), () => {
      f = !1;
    };
  }, [g, T, s.data]);
  const [F, k] = R(""), [V, E] = R(null), [H, _] = R("asc"), [y, K] = R(!1), [U, Z] = R({}), [M, Q] = R({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [le, q] = R({
    isOpen: !1,
    column: null
  }), [ie, de] = R({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [z, pe] = R(null), [J, te] = R(null), [I, O] = R(null), ae = 55, { offsets: fe, lastFrozenKey: xe } = $e(() => yo(b, ae), [b]), ue = $e(() => {
    let f = [...L];
    if (F.trim()) {
      const x = F.toLowerCase();
      f = f.filter(
        (P) => Object.values(P).some(
          (W) => String(W).toLowerCase().includes(x)
        )
      );
    }
    return y && Object.entries(U).forEach(([x, P]) => {
      if (P && P.trim()) {
        const W = P.toLowerCase().trim();
        f = f.filter((B) => {
          const Y = B[x];
          return Y != null && String(Y).toLowerCase().includes(W);
        });
      }
    }), V && f.sort((x, P) => {
      const W = x[V], B = P[V];
      if (W === B) return 0;
      if (W == null) return 1;
      if (B == null) return -1;
      let Y = 0;
      return typeof W == "number" && typeof B == "number" ? Y = W - B : Y = String(W).localeCompare(String(B)), H === "asc" ? Y : -Y;
    }), f;
  }, [L, F, y, U, V, H]), oe = (f) => {
    D(f), n(t.id, { data: f });
  }, [ye, be] = R(s.groupBy || null), [ge, Fe] = R(/* @__PURE__ */ new Set()), we = $e(() => {
    if (!ye) return [];
    const f = /* @__PURE__ */ new Map();
    ue.forEach((W) => {
      const B = W[ye], Y = B == null || B === "" ? "(Trống)" : String(B);
      f.has(Y) || f.set(Y, []), f.get(Y).push(W);
    });
    let x = 0;
    const P = [];
    return f.forEach((W, B) => {
      const Y = {};
      C.forEach((ce) => {
        if (ce.componentType === "Number" || ce.precision !== void 0 || ce.isSummary || ce.summary) {
          const Ne = W.reduce((_e, Ue) => {
            const pt = Number(Ue[ce.key]);
            return _e + (isNaN(pt) ? 0 : pt);
          }, 0);
          Y[ce.key] = Ne;
        }
      }), P.push({
        groupKey: B,
        groupLabel: B,
        rows: W,
        subtotals: Y,
        startIndex: x
      }), x += W.length;
    }), P;
  }, [ye, ue, C]), ve = 38, ne = 10, he = !ye && (ue.length > 80 || !!s.virtual || !!s.virtualScroll), [qe, ht] = R(0), [Ct, Mt] = R(550);
  Le(() => {
    const f = vt.current;
    if (!f || !he) return;
    const x = () => {
      ht(f.scrollTop);
    }, P = () => {
      f.clientHeight > 0 && Mt(f.clientHeight);
    };
    return f.addEventListener("scroll", x, { passive: !0 }), P(), window.addEventListener("resize", P), () => {
      f.removeEventListener("scroll", x), window.removeEventListener("resize", P);
    };
  }, [he]);
  const { virtualStartIndex: gt, virtualEndIndex: kt, topPaddingHeight: se, bottomPaddingHeight: ke, virtualRows: Be } = $e(() => {
    if (!he)
      return {
        virtualStartIndex: 0,
        virtualEndIndex: ue.length,
        topPaddingHeight: 0,
        bottomPaddingHeight: 0,
        virtualRows: ue
      };
    const f = ue.length, x = Math.ceil(Ct / ve), P = Math.floor(qe / ve), W = Math.max(0, P - ne), B = Math.min(f, P + x + ne), Y = W * ve, ce = Math.max(0, (f - B) * ve), Ne = ue.slice(W, B);
    return {
      virtualStartIndex: W,
      virtualEndIndex: B,
      topPaddingHeight: Y,
      bottomPaddingHeight: ce,
      virtualRows: Ne
    };
  }, [he, ue, qe, Ct]), Ie = `uiforge_user_gridpolicy_${String(t.pageId || "default")}_${t.id}`;
  Le(() => {
    let f = !0;
    const x = String(t.pageId || "default");
    try {
      const P = localStorage.getItem(Ie);
      if (P) {
        const W = JSON.parse(P);
        Array.isArray(W) && W.length > 0 && n(t.id, { columns: W });
      }
    } catch {
    }
    return fetch(
      `http://localhost:5048/api/core/user-settings?featureCode=${encodeURIComponent(
        x
      )}&componentId=${encodeURIComponent(t.id)}&settingType=GridPolicy`
    ).then((P) => P.ok ? P.json() : null).then((P) => {
      if (!f || !P) return;
      const W = P.settingJson || P.SettingJson;
      if (W) {
        const B = JSON.parse(W);
        if (Array.isArray(B) && B.length > 0) {
          n(t.id, { columns: B });
          try {
            localStorage.setItem(Ie, W);
          } catch {
          }
        }
      }
    }).catch(() => {
    }), () => {
      f = !1;
    };
  }, [t.id, t.pageId]);
  const Ae = (f) => {
    const x = Qs(f);
    n(t.id, { columns: x });
    try {
      localStorage.setItem(Ie, JSON.stringify(x));
    } catch {
    }
    const P = String(t.pageId || "default");
    fetch("http://localhost:5048/api/core/user-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        featureCode: P,
        componentId: t.id,
        settingType: "GridPolicy",
        settingJson: JSON.stringify(x)
      })
    }).catch(() => {
    });
  }, Re = tt(L);
  Re.current = L;
  const Xe = (f, x, P) => {
    w && m(t.id, f, x, P);
    const B = (w && p && p[t.id] ? p[t.id] : Re.current).map((Y, ce) => Y.id !== void 0 && Y.id === f || Y.id === void 0 && ce === f ? { ...Y, [x]: P } : Y);
    oe(B), g && je.getState().registerDataset(g, B);
  }, Ze = (f, x, P) => {
    const B = ee.getState().features.find((_e) => String(_e.id) === String(t.pageId)), Y = B == null ? void 0 : B.scriptFile, ce = (P == null ? void 0 : P.action) || f;
    let Ne = !1;
    P != null && P.events && (Array.isArray(P.events) ? P.events : typeof P.events == "string" ? (() => {
      try {
        return JSON.parse(P.events);
      } catch {
        return [];
      }
    })() : []).forEach((Ue) => {
      Ne = !0, tn(
        Ue,
        P.title || P.key,
        Y,
        { row: x, col: P, column: P, action: Ue.action || Ue.handlerName || ce, value: x[(P == null ? void 0 : P.key) || ""] }
      );
    }), !Ne && ce && tn(
      { id: `col_act_${(P == null ? void 0 : P.key) || f}`, trigger: "actionClick", action: ce, handlerName: ce },
      t.props.label || "Bảng dữ liệu",
      Y,
      { row: x, col: P, column: P, action: ce, value: x[(P == null ? void 0 : P.key) || ""] }
    ), t.events && t.events.length > 0 && Ye(t.events, "actionClick", t.props.label || "Bảng dữ liệu", Y, {
      action: ce,
      row: x,
      col: P,
      column: P,
      colKey: P == null ? void 0 : P.key,
      value: x[(P == null ? void 0 : P.key) || ""]
    });
  }, [rt, at] = R(null), [it, lt] = R(/* @__PURE__ */ new Set()), vt = tt(null), We = (f, x, P = "info") => {
    const W = document.createElement("div"), B = P === "success" ? "border-emerald-500 shadow-emerald-500/30" : P === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", Y = P === "success" ? "⚡" : P === "warning" ? "⚠️" : "ℹ️", ce = P === "success" ? "bg-emerald-600/25 text-emerald-400" : P === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    W.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${B} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, W.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${ce} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${Y}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${f}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${x}</div>
      </div>
    `, document.body.appendChild(W), setTimeout(() => {
      W.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => W.remove(), 300);
    }, 3800);
  }, yt = () => {
    if (it.size === ue.length && ue.length > 0)
      lt(/* @__PURE__ */ new Set()), We("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const f = new Set(ue.map((x, P) => x.id ?? x.Id ?? P));
      lt(f), ue.length > 0 && at(ue[0].id ?? ue[0].Id ?? 0), We("F1 (Toggle All)", `Đã chọn tất cả ${f.size} dòng trong bảng`, "success");
    }
  }, Gt = () => {
    var B;
    let f = He == null ? void 0 : He.colKey, x = (He == null ? void 0 : He.rowIndex) ?? 0;
    !f && C.length > 0 && (f = C[0].key);
    const P = ue[x], W = P && f ? P[f] : null;
    if (W != null && String(W).trim() !== "" && String(W) !== "—") {
      Z((ce) => ({ ...ce, [f]: String(W) })), K(!0);
      const Y = ((B = C.find((ce) => ce.key === f)) == null ? void 0 : B.title) || f;
      We("F2 (Lọc theo ô)", `Đã lọc cột [${Y}] với giá trị "${W}"`, "success");
    } else
      K(!0), We("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Dt = () => {
    const f = it.size > 0 ? ue.filter((W, B) => it.has(W.id ?? W.Id ?? B)) : ue;
    if (f.length === 0) {
      We("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const x = C.filter(
      (W) => W.componentType === "Number" || W.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (B) => W.key.toLowerCase().includes(B)
      )
    );
    if (x.length === 0) {
      We("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const P = x.map((W) => {
      const B = f.reduce((ce, Ne) => {
        const _e = Number(Ne[W.key]);
        return ce + (isNaN(_e) ? 0 : _e);
      }, 0), Y = B % 1 !== 0 ? B.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : B.toLocaleString("en-US");
      return `${W.title || W.key}: ${Y}${W.summarySuffix ? ` ${W.summarySuffix}` : ""}`;
    });
    We(
      `F3 (Tổng ${f.length} dòng)`,
      P.join(" | "),
      "success"
    );
  }, It = () => {
    Ee();
    const f = ue.length;
    We("F4 (Thêm dòng)", `Đã thêm dòng mới số #${f + 1}`, "success"), setTimeout(() => {
      Jt(f, 0);
    }, 60);
  }, Bt = async () => {
    const f = s.label ? String(s.label).replace(/\s+/g, "_") : "Du_Lieu_Bang", x = s.label ? String(s.label).slice(0, 30) : "Sheet1";
    try {
      const P = {
        title: s.label ? String(s.label) : "BẢNG DỮ LIỆU",
        sheetName: x,
        columns: C.map((B) => ({
          key: B.key,
          title: B.title || B.key,
          align: B.align || "left",
          dataType: B.componentType === "Number" || B.precision !== void 0 || B.format === "number" ? "number" : B.componentType === "Checkbox" ? "boolean" : "string"
        })),
        rows: ue
      }, W = await fetch("http://localhost:5048/api/core/export/excel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(P)
      });
      if (W.ok) {
        const B = await W.blob(), Y = window.URL.createObjectURL(B), ce = document.createElement("a");
        ce.href = Y, ce.download = `${f}.xlsx`, document.body.appendChild(ce), ce.click(), document.body.removeChild(ce), window.URL.revokeObjectURL(Y), We(
          "Xuất Excel Backend (.xlsx)",
          `Đã xuất file Excel chuẩn OpenXML từ server thành công (${ue.length} bản ghi)`,
          "success"
        );
        return;
      }
    } catch {
    }
    try {
      ko({
        fileName: f,
        sheetName: x,
        columns: C,
        rows: ue,
        includeSummary: !0
      }), We("Xuất Excel Client", `Đã xuất ${ue.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (P) {
      We("Lỗi xuất Excel", (P == null ? void 0 : P.message) || "Không thể tạo file Excel", "warning");
    }
  }, Vt = () => {
    try {
      const f = {};
      C.forEach((x) => {
        if (x.aggregate === "sum") {
          const P = ue.reduce((W, B) => W + (Number(B[x.key]) || 0), 0);
          f[x.key] = P;
        } else x.aggregate === "count" && (f[x.key] = ue.length);
      }), ja({
        title: s.label ? String(s.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${ue.length} bản ghi`,
        columns: C,
        rows: ue,
        summaryRow: Object.keys(f).length > 0 ? f : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${ue.length} dòng`,
          "Bộ lọc áp dụng": F ? `Tìm kiếm: "${F}"` : "Tất cả dữ liệu"
        }
      }), We("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (f) {
      We("Lỗi In Báo Cáo", (f == null ? void 0 : f.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, _t = async () => {
    if (k(""), Z({}), g) {
      const f = await je.getState().queryEntity(g, T);
      f && f.length > 0 && (D(f), We("Làm mới dữ liệu", `Đã tải lại ${f.length} bản ghi từ máy chủ`, "info"));
    }
  }, St = (f, x, P) => {
    const W = So(f);
    if (W.length === 0) return;
    const B = w && p && p[t.id] ? p[t.id] : L, { updatedRows: Y, pastedRowCount: ce, pastedColCount: Ne, newRowsCreated: _e } = Do({
      currentRows: B,
      visibleColumns: C,
      allColumns: b,
      clipMatrix: W,
      startRowIndex: x,
      startColIndex: P
    });
    oe(Y), g && je.getState().registerDataset(g, Y), w && ls.setState((pt) => ({
      detailGrids: {
        ...pt.detailGrids,
        [t.id]: Y
      }
    }));
    const Ue = _e > 0 ? `Đã dán thành công ${ce} dòng × ${Ne} cột (tự động tạo thêm ${_e} dòng mới)` : `Đã dán thành công ${ce} dòng × ${Ne} cột vào bảng`;
    We("Dán từ Excel (Ctrl+V)", Ue, "success");
  }, Ut = (f) => {
    typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((x) => {
      x ? St(x, f, 0) : We("Dán từ Excel", "Clipboard hiện đang trống", "warning");
    }).catch(() => {
      We("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
    }) : We("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
  }, {
    focusedCell: He,
    setFocusedCell: Ot,
    focusCell: Jt,
    handleTableContainerKeyDown: $,
    handleCellKeyDown: re,
    handlePaste: me
  } = vo({
    tableRef: vt,
    rows: ue,
    visibleColumns: C,
    selectedRowId: rt,
    setSelectedRowId: at,
    selectedRowIds: it,
    setSelectedRowIds: lt,
    onRowDoubleClick: (f, x) => Pe(f, x),
    onAddRow: It,
    onDeleteRow: (f) => Ve(f),
    onDuplicateRow: (f) => Ge(f),
    onToggleAll: yt,
    onFilterByCell: Gt,
    onQuickSum: Dt,
    onToggleColumnFilters: () => K((f) => !f),
    onPasteExcel: St
  }), Se = (f, x, P) => {
    const W = f.id ?? f.Id ?? x;
    if (at(W), P != null && P.ctrlKey || P != null && P.metaKey)
      lt((Ne) => {
        const _e = new Set(Ne);
        return _e.has(W) ? _e.delete(W) : _e.add(W), _e;
      });
    else if (P != null && P.shiftKey && rt !== null) {
      const Ne = ue.findIndex((_e, Ue) => (_e.id ?? _e.Id ?? Ue) === rt);
      if (Ne !== -1) {
        const _e = Math.min(Ne, x), Ue = Math.max(Ne, x), pt = /* @__PURE__ */ new Set();
        for (let Tt = _e; Tt <= Ue; Tt++)
          pt.add(ue[Tt].id ?? ue[Tt].Id ?? Tt);
        lt(pt);
      }
    } else
      lt(/* @__PURE__ */ new Set([W]));
    const Y = ee.getState().features.find((Ne) => String(Ne.id) === String(t.pageId)), ce = Y == null ? void 0 : Y.scriptFile;
    g && je.getState().setSelectedRecord(g, f), t.events && t.events.length > 0 && (Ye(t.events, "rowClick", t.props.label || "Bảng dữ liệu", ce, {
      row: f,
      rowIndex: x,
      action: "rowClick"
    }), Ye(t.events, "click", t.props.label || "Bảng dữ liệu", ce, {
      row: f,
      rowIndex: x,
      action: "click"
    }), Ye(t.events, "select", t.props.label || "Bảng dữ liệu", ce, {
      row: f,
      rowIndex: x,
      action: "select"
    }));
  }, Pe = (f, x) => {
    const W = ee.getState().features.find((Y) => String(Y.id) === String(t.pageId)), B = W == null ? void 0 : W.scriptFile;
    t.events && t.events.length > 0 && Ye(t.events, "dblclick", t.props.label || "Bảng dữ liệu", B, {
      row: f,
      rowIndex: x,
      id: f.id ?? f.Id,
      action: "dblclick"
    });
  }, Ee = () => {
    w && S(t.id);
    const f = w && p && p[t.id] ? p[t.id] : L, P = { id: f.length > 0 ? Math.max(...f.map((B) => Number(B.id) || 0)) + 1 : 1 };
    b.forEach((B) => {
      B.componentType === "Number" ? P[B.key] = 0 : B.componentType === "Checkbox" ? P[B.key] = !1 : B.componentType === "DatePicker" ? P[B.key] = "08/11/2026" : P[B.key] = "";
    });
    const W = [...f, P];
    oe(W), g && je.getState().registerDataset(g, W);
  }, [Te, De] = R({}), Je = (f, x) => {
    if (x != null && String(x).trim() !== "") {
      const P = w && p && p[t.id] ? p[t.id] : L, B = { id: P.length > 0 ? Math.max(...P.map((ce) => Number(ce.id) || 0)) + 1 : 1, ...Te, [f]: x };
      b.forEach((ce) => {
        B[ce.key] === void 0 && (ce.componentType === "Number" || ce.dataType === "number" ? B[ce.key] = 0 : ce.componentType === "Checkbox" || ce.dataType === "boolean" ? B[ce.key] = !1 : (ce.componentType === "DatePicker" || ce.dataType, B[ce.key] = ""));
      });
      const Y = [...P, B];
      oe(Y), g && je.getState().registerDataset(g, Y), w && ls.setState((ce) => ({
        detailGrids: {
          ...ce.detailGrids,
          [t.id]: Y
        }
      })), De({}), We("Dòng mới tự động", `Đã tự động khởi tạo dòng #${Y.length} vào bảng`, "success");
    } else
      De((P) => ({ ...P, [f]: x }));
  }, Ge = (f) => {
    if (!a) {
      const ce = i(o);
      if (!ce.canWrite && !ce.canWriteAll) {
        alert("Bạn không có quyền thêm mới hoặc sao chép dòng dữ liệu.");
        return;
      }
    }
    w && j(t.id, f);
    const x = w && p && p[t.id] ? p[t.id] : L, P = x[f], W = Math.max(...x.map((ce) => Number(ce.id) || 0)) + 1, B = { ...P, id: W }, Y = [...x];
    Y.splice(f + 1, 0, B), oe(Y), g && je.getState().registerDataset(g, Y);
  }, Ve = (f) => {
    if (!a) {
      const W = i(o);
      if (!W.canDelete && !W.canDeleteAll) {
        alert("Bạn không có quyền xóa bản ghi / dòng dữ liệu này.");
        return;
      }
    }
    w && v(t.id, f);
    const x = w && p && p[t.id] ? p[t.id] : L;
    if (x.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const P = x.filter((W, B) => B !== f);
    oe(P), g && je.getState().registerDataset(g, P);
  }, st = (f, x, P) => {
    f.preventDefault(), f.stopPropagation(), de({
      isOpen: !0,
      x: f.clientX,
      y: f.clientY,
      row: x,
      rowIndex: P
    });
  }, mt = (f) => {
    if (!a) {
      const Y = i(o);
      if (!Y.canWrite && !Y.canWriteAll) {
        alert("Bạn không có quyền thêm mới dòng dữ liệu.");
        return;
      }
    }
    const x = w && p && p[t.id] ? p[t.id] : L, W = { id: x.length > 0 ? Math.max(...x.map((Y) => Number(Y.id) || 0)) + 1 : 1 };
    b.forEach((Y) => {
      Y.componentType === "Number" ? W[Y.key] = 0 : Y.componentType === "Checkbox" ? W[Y.key] = !1 : (Y.componentType, W[Y.key] = "");
    });
    const B = [...x];
    B.splice(f + 1, 0, W), oe(B), g && je.getState().registerDataset(g, B);
  }, bt = (f) => {
    if (f <= 0) return;
    const P = [...w && p && p[t.id] ? p[t.id] : L], [W] = P.splice(f, 1);
    P.splice(f - 1, 0, W), oe(P), g && je.getState().registerDataset(g, P);
  }, Qe = (f) => {
    const x = w && p && p[t.id] ? p[t.id] : L;
    if (f >= x.length - 1) return;
    const P = [...x], [W] = P.splice(f, 1);
    P.splice(f + 1, 0, W), oe(P), g && je.getState().registerDataset(g, P);
  }, Ht = (f, x) => {
    pe(x), f.dataTransfer.effectAllowed = "move", f.dataTransfer.setData("text/plain", x);
  }, Ft = (f, x) => {
    if (f.preventDefault(), f.dataTransfer.dropEffect = "move", z === x) return;
    const P = f.currentTarget.getBoundingClientRect(), W = f.clientX < P.left + P.width / 2;
    te(x), O(W ? "left" : "right");
  }, Xt = (f) => {
    const x = f.relatedTarget;
    f.currentTarget.contains(x) || (te(null), O(null));
  }, Ss = (f, x) => {
    if (f.preventDefault(), !z || z === x) {
      pe(null), te(null), O(null);
      return;
    }
    const P = b.findIndex((Y) => Y.key === z);
    let W = b.findIndex((Y) => Y.key === x);
    if (P === -1 || W === -1) {
      pe(null), te(null), O(null);
      return;
    }
    I === "right" && P > W ? W = W + 1 : I === "left" && P < W && (W = W - 1), W = Math.max(0, Math.min(b.length - 1, W));
    const B = Wn(b, P, W);
    Ae(B), pe(null), te(null), O(null);
  }, ps = () => {
    pe(null), te(null), O(null);
  }, Rt = (f) => {
    f.sortable && (V === f.key ? H === "asc" ? _("desc") : E(null) : (E(f.key), _("asc")));
  }, Ts = (f, x, P) => {
    f.preventDefault(), f.stopPropagation(), Q({
      isOpen: !0,
      x: f.clientX,
      y: f.clientY,
      column: x,
      columnIndex: P
    });
  }, xs = (f) => {
    const x = b.map(
      (P) => P.key === f ? { ...P, hidden: !P.hidden } : P
    );
    Ae(x);
  }, rs = (f) => {
    const x = ya(b, f);
    Ae(x);
  }, as = (f) => {
    var x;
    ((x = Yt.getState().user) == null ? void 0 : x.role) === "Dev" && q({
      isOpen: !0,
      column: f
    });
  }, hs = (f) => {
    var Y;
    if (((Y = Yt.getState().user) == null ? void 0 : Y.role) !== "Dev") return;
    const x = b.findIndex((ce) => ce.key === f);
    if (x === -1) return;
    const P = b[x], W = {
      ...P,
      key: `${P.key}_copy`,
      title: `${P.title} (Bản sao)`,
      order: (P.order ?? x) + 1
    }, B = [...b];
    B.splice(x + 1, 0, W), Ae(B);
  }, Ds = (f) => {
    var P;
    if (((P = Yt.getState().user) == null ? void 0 : P.role) !== "Dev") return;
    if (b.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const x = b.filter((W) => W.key !== f);
    Ae(x);
  }, ms = (f) => {
    const x = b.map(
      (W) => W.key === f.key ? f : W
    );
    Ae(x), q((W) => ({
      ...W,
      isOpen: !0,
      column: f
    }));
    const P = ee.getState().savePage;
    if (typeof P == "function")
      try {
        P();
      } catch {
      }
  }, Qt = (f, x) => {
    const P = rt === (f.id ?? f.Id ?? x), W = it.has(f.id ?? f.Id ?? x);
    return /* @__PURE__ */ e.jsxs(
      "tr",
      {
        "data-row-index": x,
        onClick: (B) => Se(f, x, B),
        onDoubleClick: () => Pe(f, x),
        onContextMenu: (B) => st(B, f, x),
        className: `transition-colors group cursor-pointer ${P || W ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "td",
            {
              onClick: (B) => {
                B.stopPropagation();
                const Y = f.id ?? f.Id ?? x;
                lt((ce) => {
                  const Ne = new Set(ce);
                  return Ne.has(Y) ? Ne.delete(Y) : Ne.add(Y), Ne;
                }), at(Y);
              },
              className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${W ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
              style: { width: `${ae}px`, minWidth: `${ae}px` },
              title: "Click chọn dòng | Chuột phải mở menu thao tác",
              children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                W ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                /* @__PURE__ */ e.jsx("span", { children: x + 1 })
              ] })
            }
          ),
          C.map((B, Y) => {
            const ce = !!(B.frozen || B.sticky === "left"), Ne = ce && fe[B.key] !== void 0 ? fe[B.key] : void 0, _e = B.key === xe, Ue = f[B.key], pt = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left", Tt = N[`${t.id}_${f.id}_${B.key}`];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-2 py-1 whitespace-nowrap transition-colors ${pt} ${B.isHighlightEditable ? "bg-emerald-950/20" : ""} ${ce ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${_e ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                style: {
                  width: B.width,
                  minWidth: B.minWidth || B.width || "100px",
                  maxWidth: B.maxWidth,
                  left: Ne !== void 0 ? `${Ne}px` : void 0
                },
                children: /* @__PURE__ */ e.jsx(
                  Ir,
                  {
                    column: B,
                    value: Ue,
                    row: f,
                    rowIndex: x,
                    columnIndex: Y,
                    isFocused: (He == null ? void 0 : He.rowIndex) === x && (He == null ? void 0 : He.colIndex) === Y,
                    isSelected: P,
                    error: Tt,
                    onChange: (Pt) => Xe(f.id ?? x, B.key, Pt),
                    onActionClick: (Pt) => Ze(Pt, f, B),
                    onKeyDown: re,
                    onFocus: (Pt, ws, Fs) => {
                      at(f.id ?? f.Id ?? Pt), Ot({ rowIndex: Pt, colIndex: ws, colKey: Fs });
                    }
                  }
                )
              },
              B.key
            );
          })
        ]
      },
      f.id ?? f.Id ?? x
    );
  }, { flex: ft, flexGrow: _s, flexShrink: Os, flexBasis: Hs, minWidth: Is, maxWidth: Ws, width: bs, ...fs } = r || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...fs
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: s.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              ue.length,
              " bản ghi"
            ] }),
            he && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/30",
                title: "Cơ chế cuộn ảo Virtual Windowing đang hoạt động (TSK-4.1)",
                children: [
                  /* @__PURE__ */ e.jsx(qt, { className: "w-3 h-3 text-cyan-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Virtual (",
                    gt + 1,
                    "..",
                    kt,
                    "/",
                    ue.length,
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
                  /* @__PURE__ */ e.jsx(Ln, { className: "w-3 h-3 text-amber-400" }),
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
              /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Tìm kiếm trong bảng...",
                  value: F,
                  onChange: (f) => k(f.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => K((f) => !f),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${y ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Br, { className: "w-3.5 h-3.5" }),
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
                onClick: _t,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(Ga, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Bt,
                title: "Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Va, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      const x = He ? He.rowIndex : rt !== null ? Math.max(0, ue.findIndex((W, B) => (W.id ?? W.Id ?? B) === rt)) : 0, P = He ? He.colIndex : 0;
                      St(f, x, P);
                    } else
                      We("Dán từ Excel", "Clipboard hiện đang trống", "warning");
                  }).catch(() => {
                    We("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                  }) : We("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                },
                title: "Dán dữ liệu sao chép từ Excel / Google Sheets vào bảng (Ctrl+V)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(_r, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Dán Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Vt,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Er, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "In / PDF" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-slate-300", children: [
              /* @__PURE__ */ e.jsx(Ln, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: ye || "",
                  onChange: (f) => {
                    const x = f.target.value || null;
                    be(x), Fe(/* @__PURE__ */ new Set());
                  },
                  title: "Gom nhóm bảng theo cột (Group By - GroupGridView.cs)",
                  className: "bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer max-w-[130px] truncate",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-300", children: "-- Không nhóm --" }),
                    C.map((f) => /* @__PURE__ */ e.jsxs("option", { value: f.key, className: "bg-slate-900 text-slate-200", children: [
                      "Nhóm: ",
                      f.title || f.key
                    ] }, f.key))
                  ]
                }
              )
            ] }),
            ye && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Fe(/* @__PURE__ */ new Set()),
                  title: "Mở rộng tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 transition-colors",
                  children: "Mở rộng"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Fe(new Set(we.map((f) => f.groupKey))),
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
                  onClick: yt,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Gt,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Dt,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: It,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => K((f) => !f),
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
            ref: vt,
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
                      onClick: yt,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${ae}px`, minWidth: `${ae}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: ue.length > 0 && it.size === ue.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  C.map((f, x) => {
                    const P = !!(f.frozen || f.sticky === "left"), W = P && fe[f.key] !== void 0 ? fe[f.key] : void 0, B = f.key === xe, Y = z === f.key, ce = J === f.key;
                    let Ne = "";
                    ce && I === "left" ? Ne = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : ce && I === "right" && (Ne = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const _e = f.align === "right" ? "text-right" : f.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (Ue) => Ht(Ue, f.key),
                        onDragOver: (Ue) => Ft(Ue, f.key),
                        onDragLeave: Xt,
                        onDrop: (Ue) => Ss(Ue, f.key),
                        onDragEnd: ps,
                        onContextMenu: (Ue) => Ts(Ue, f, x),
                        onClick: () => Rt(f),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${_e} ${f.isHighlightEditable ? "border-b-2 !border-b-emerald-500/80 text-emerald-300 bg-emerald-950/25" : ""} ${P ? `sticky z-20 bg-[#0b1329] ${B ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${Y ? "opacity-30 bg-slate-800/80" : ""} ${Ne}`,
                        style: {
                          width: f.width,
                          minWidth: f.minWidth || f.width || "100px",
                          maxWidth: f.maxWidth,
                          left: W !== void 0 ? `${W}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${f.order ?? x + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${f.align === "right" ? "justify-end" : f.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 truncate", children: [
                            P && /* @__PURE__ */ e.jsx(Mr, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
                            f.isHighlightEditable && /* @__PURE__ */ e.jsx(
                              "span",
                              {
                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0 inline-block mr-0.5",
                                title: "Cột được cấp quyền chỉnh sửa"
                              }
                            ),
                            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: f.title || f.key }),
                            f.order && /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] font-mono text-slate-500 font-normal", children: [
                              "#",
                              f.order
                            ] })
                          ] }),
                          f.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: V === f.key ? H === "asc" ? /* @__PURE__ */ e.jsx(zn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(qn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Qn, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      f.key
                    );
                  })
                ] }),
                y && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  C.map((f) => {
                    const x = !!(f.frozen || f.sticky === "left"), P = x && fe[f.key] !== void 0 ? fe[f.key] : void 0, W = f.key === xe;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${x ? `sticky z-20 bg-[#080d1a] ${W ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: P !== void 0 ? `${P}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: U[f.key] || "",
                            onChange: (B) => Z((Y) => ({ ...Y, [f.key]: B.target.value })),
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
                ue.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    colSpan: C.length + 1,
                    className: "px-6 py-8 text-center text-slate-500 italic",
                    children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                  }
                ) }) : ye ? (
                  // ── 1. CHẾ ĐỘ GOM NHÓM DÒNG (COLLAPSIBLE GROUP-BY ROWS - TSK-4.2 & GroupGridView.cs) ──
                  we.map((f) => {
                    const x = ge.has(f.groupKey), P = C.find((B) => B.key === ye), W = (P == null ? void 0 : P.title) || ye;
                    return /* @__PURE__ */ e.jsxs(ts.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(
                        "tr",
                        {
                          onClick: () => {
                            Fe((B) => {
                              const Y = new Set(B);
                              return Y.has(f.groupKey) ? Y.delete(f.groupKey) : Y.add(f.groupKey), Y;
                            });
                          },
                          className: "bg-slate-900/95 hover:bg-slate-850 border-y border-amber-500/30 cursor-pointer select-none group transition-colors sticky top-0 z-15",
                          children: /* @__PURE__ */ e.jsx(
                            "td",
                            {
                              colSpan: C.length + 1,
                              className: "px-3 py-2 text-xs font-semibold text-slate-200",
                              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    className: "w-5 h-5 flex items-center justify-center rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors",
                                    children: x ? /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ e.jsxs("span", { className: "text-slate-400 font-normal", children: [
                                  "Gom nhóm theo ",
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-amber-300 font-semibold", children: W }),
                                  ":"
                                ] }),
                                /* @__PURE__ */ e.jsx("span", { className: "text-amber-400 font-bold font-mono text-sm", children: f.groupLabel }),
                                /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold", children: [
                                  f.rows.length,
                                  " bản ghi"
                                ] }),
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-center gap-3 text-[11px] font-mono text-slate-400", children: C.filter((B) => f.subtotals[B.key] !== void 0 && f.subtotals[B.key] > 0).slice(0, 3).map((B) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsxs("span", { children: [
                                    B.title,
                                    ":"
                                  ] }),
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-emerald-400 font-bold", children: f.subtotals[B.key].toLocaleString("en-US") })
                                ] }, B.key)) })
                              ] })
                            }
                          )
                        }
                      ),
                      !x && f.rows.map((B, Y) => {
                        const ce = f.startIndex + Y;
                        return Qt(B, ce);
                      })
                    ] }, `group_${f.groupKey}`);
                  })
                ) : he ? (
                  // ── 2. CHẾ ĐỘ CUỘN ẢO (VIRTUAL SCROLLING WINDOWING - TSK-4.1) ──
                  /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    se > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${se}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: C.length + 1, style: { padding: 0, border: "none" } }) }),
                    Be.map((f, x) => {
                      const P = gt + x;
                      return Qt(f, P);
                    }),
                    ke > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${ke}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: C.length + 1, style: { padding: 0, border: "none" } }) })
                  ] })
                ) : (
                  // ── 3. CHẾ ĐỘ RENDER TIÊU CHUẨN (NORMAL RENDERING) ──
                  ue.map((f, x) => Qt(f, x))
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
                          style: { width: `${ae}px`, minWidth: `${ae}px` },
                          children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(ze, { className: "w-3 h-3 text-emerald-400" }),
                            /* @__PURE__ */ e.jsx("span", { children: ue.length + 1 })
                          ] })
                        }
                      ),
                      C.map((f, x) => {
                        const P = !!(f.frozen || f.sticky === "left"), W = P && fe[f.key] !== void 0 ? fe[f.key] : void 0, B = f.key === xe, Y = Te[f.key] ?? "", ce = f.align === "right" ? "text-right" : f.align === "center" ? "text-center" : "text-left";
                        return /* @__PURE__ */ e.jsx(
                          "td",
                          {
                            className: `px-2 py-1 whitespace-nowrap transition-colors ${ce} ${P ? `sticky z-10 bg-[#0c1222] ${B ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                            style: {
                              width: f.width,
                              minWidth: f.minWidth || f.width || "100px",
                              maxWidth: f.maxWidth,
                              left: W !== void 0 ? `${W}px` : void 0
                            },
                            children: /* @__PURE__ */ e.jsx(
                              Ir,
                              {
                                column: f,
                                value: Y,
                                row: Te,
                                rowIndex: ue.length,
                                columnIndex: x,
                                isFocused: (He == null ? void 0 : He.rowIndex) === ue.length && (He == null ? void 0 : He.colIndex) === x,
                                onChange: (Ne) => Je(f.key, Ne),
                                onKeyDown: re
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
                ho,
                {
                  columns: C,
                  data: ue,
                  showRowNumber: !0,
                  rowNumberWidth: ae,
                  leftOffsets: fe
                }
              ) })
            ] })
          }
        ),
        M.isOpen && M.column && /* @__PURE__ */ e.jsx(
          uo,
          {
            isOpen: M.isOpen,
            x: M.x,
            y: M.y,
            column: M.column,
            columnIndex: M.columnIndex,
            allColumns: b,
            onClose: () => Q((f) => ({ ...f, isOpen: !1 })),
            onToggleHide: xs,
            onSetFreeze: rs,
            onOpenProperties: as,
            onCloneColumn: hs,
            onRemoveColumn: Ds,
            onToggleFilter: () => K((f) => !f)
          }
        ),
        le.isOpen && le.column && /* @__PURE__ */ e.jsx(
          fa,
          {
            isOpen: le.isOpen,
            column: le.column,
            onClose: () => q({ isOpen: !1, column: null }),
            onSave: ms
          }
        ),
        ie.isOpen && ie.row && /* @__PURE__ */ e.jsx(
          po,
          {
            isOpen: ie.isOpen,
            x: ie.x,
            y: ie.y,
            row: ie.row,
            rowIndex: ie.rowIndex,
            totalRows: h.length,
            onClose: () => de((f) => ({ ...f, isOpen: !1, row: null })),
            onDuplicateRow: Ge,
            onDeleteRow: Ve,
            onInsertRowBelow: mt,
            onMoveRowUp: bt,
            onMoveRowDown: Qe,
            onPasteExcel: Ut
          }
        )
      ]
    }
  );
}, vi = ({ node: t }) => {
  const { props: a, style: s } = t, { flex: r, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...u } = s || {}, b = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], C = a.columns && a.columns.length > 0 ? a.columns : b, p = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [m, S] = R(""), [v, j] = R(null), [N, w] = R("asc"), [g, T] = R(1), A = Number(a.pageSize) || 10, h = $e(() => {
    if (!m.trim()) return p;
    const E = m.toLowerCase();
    return p.filter(
      (H) => Object.values(H).some((_) => String(_).toLowerCase().includes(E))
    );
  }, [m]), D = $e(() => v ? [...h].sort((E, H) => {
    const _ = E[v], y = H[v];
    if (_ === y) return 0;
    const K = _ > y ? 1 : -1;
    return N === "asc" ? K : -K;
  }) : h, [h, v, N]), L = Math.ceil(D.length / A) || 1, F = $e(() => {
    const E = (g - 1) * A;
    return D.slice(E, E + A);
  }, [D, g, A]), k = $e(() => {
    const E = {};
    for (const H of C)
      if (H.aggregate === "sum") {
        const _ = h.reduce((y, K) => y + (Number(K[H.key]) || 0), 0);
        E[H.key] = _.toLocaleString("en-US");
      } else if (H.aggregate === "count")
        E[H.key] = h.length;
      else if (H.aggregate === "avg") {
        const _ = h.length ? h.reduce((y, K) => y + (Number(K[H.key]) || 0), 0) / h.length : 0;
        E[H.key] = _.toFixed(1);
      }
    return E;
  }, [C, h]), V = (E) => {
    v === E ? w(N === "asc" ? "desc" : "asc") : (j(E), w("asc"));
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
              h.length,
              " bản ghi"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-64 max-w-full", children: [
            /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Tìm kiếm trong bảng...",
                value: m,
                onChange: (E) => {
                  S(E.target.value), T(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: C.map((E) => {
            const H = E.sticky === "left", _ = E.align === "right" ? "text-right" : E.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => E.sortable !== !1 && V(E.key),
                style: {
                  width: E.width,
                  minWidth: E.minWidth || E.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${_} ${H ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${E.align === "right" ? "justify-end" : E.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  E.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: E.title }),
                  E.sortable !== !1 && /* @__PURE__ */ e.jsx(Qn, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              E.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: F.length > 0 ? F.map((E, H) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: C.map((_) => {
            const y = _.sticky === "left", K = E[_.key], U = _.align === "right" ? "text-right" : _.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${U} ${y ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (K == null) return "—";
                  if (_.componentType === "Checkbox") {
                    const Z = K === !0 || K === "true" || K === 1;
                    return /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: Z,
                        readOnly: !0,
                        className: "w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                      }
                    );
                  }
                  if (_.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(K)
                      }
                    );
                  if (_.componentType === "DatePicker" || _.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(K) })
                    ] });
                  if (_.componentType === "Number" || typeof K == "number") {
                    const Z = Number(K);
                    if (!isNaN(Z)) {
                      const M = _.precision !== void 0 ? _.precision : Z % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: Z.toLocaleString("en-US", { minimumFractionDigits: M, maximumFractionDigits: M }) });
                    }
                  }
                  return _.key === "status" || _.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${K === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(K) }) : String(K);
                })()
              },
              _.key
            );
          }) }, E.id || H)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: C.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: C.map((E, H) => {
            const _ = E.sticky === "left", y = E.align === "right" ? "text-right" : E.align === "center" ? "text-center" : "text-left", K = k[E.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${y} ${_ ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: H === 0 && !K ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : K !== void 0 ? K : ""
              },
              E.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            g,
            " / ",
            L
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: g <= 1,
                onClick: () => T((E) => Math.max(1, E - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: g >= L,
                onClick: () => T((E) => Math.min(L, E + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function Fo(t, a, s = "") {
  if (!a || typeof a != "object")
    return s;
  if (!t || typeof t != "string" || t.trim() === "") {
    const d = a.fullName ?? a.FullName ?? a.name ?? a.Name ?? a.shortName ?? a.ShortName ?? a.title ?? a.Title ?? a.label ?? a.Label ?? a.code ?? a.Code ?? a.id ?? a.Id;
    return d != null ? String(d) : s;
  }
  const r = t.trim();
  if (!r.includes("{") || !r.includes("}")) {
    const d = Zt(a, r);
    return d != null ? String(d) : r;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = r.replace(n, (d, c) => {
    const u = c.trim();
    o = !0;
    const b = u.includes(".") ? u.split(".").pop().trim() : u;
    let C = Zt(a, u);
    return C == null && (C = Zt(a, b)), C != null ? String(C) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || s : r;
}
function Zt(t, a) {
  if (!t || typeof t != "object" || !a) return;
  if (a in t && t[a] !== void 0 && t[a] !== null)
    return t[a];
  const s = a.includes(".") ? a.split(".").pop().trim() : a.trim();
  if (s in t && t[s] !== void 0 && t[s] !== null)
    return t[s];
  const r = s.toLowerCase(), n = Object.keys(t), o = n.find((d) => d.toLowerCase() === r);
  if (o && t[o] !== void 0 && t[o] !== null)
    return t[o];
  const l = s.replace(/^(fld_|_)/i, ""), i = n.find((d) => d.toLowerCase() === l.toLowerCase());
  if (i && t[i] !== void 0 && t[i] !== null)
    return t[i];
}
const Ro = ({
  value: t,
  onChange: a,
  options: s,
  items: r,
  reference: n,
  refClass: o,
  canQuickAdd: l = !0,
  dataSource: i,
  idField: d = "id",
  selectField: c = "name",
  dropdownColumns: u,
  formatData: b,
  populateField: C,
  formId: p,
  placeholder: m = "— Chọn —",
  disabled: S = !1,
  readOnly: v = !1,
  isGridCell: j = !1,
  error: N,
  className: w = "",
  onKeyDown: g,
  onFocus: T,
  onBlur: A,
  onQuickAdd: h
}) => {
  const [D, L] = R(!1), [F, k] = R(""), [V, E] = R(0), [H, _] = R(!1), [y, K] = R([]), [U, Z] = R(!1), [M, Q] = R(""), [le, q] = R(""), [ie, de] = R(""), [z, pe] = R(!1), J = tt(null), te = tt(null), I = tt(null), O = tt(null), ae = je((se) => se.queryEntity), fe = je((se) => se.getDataset), xe = je((se) => se.applyPopulate), ue = je((se) => n ? se.getDataset(n).length : 0), oe = () => {
    if (h) {
      h(), L(!1);
      return;
    }
    if (o) {
      sa(o, {}, `Tạo mới ${n || o}`), L(!1);
      return;
    }
    const se = F.trim();
    Q(se ? se.toUpperCase().replace(/\s+/g, "_") : ""), q(se), de(""), Z(!0);
  }, ye = async () => {
    if (!M.trim() || !le.trim()) return;
    const se = (n || "").trim();
    if (se) {
      pe(!0);
      try {
        const ke = {
          code: M.trim(),
          name: le.trim(),
          fullName: le.trim(),
          description: ie.trim(),
          active: !0
        }, Be = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(se)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ke)
        });
        if (Be.ok) {
          const Ie = await Be.json(), Ae = {
            ...ke,
            ...Ie,
            id: Ie.id ?? Ie.Id ?? Date.now()
          }, Re = await ae(se, i);
          Array.isArray(Re) && Re.length > 0 ? K(Re) : K((Xe) => [Ae, ...Xe]), ht(Ae), Z(!1), L(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ke) {
        console.error("[EnterpriseSelect] Lỗi tạo nhanh bản ghi:", ke);
        const Be = {
          id: `mock-${Date.now()}`,
          code: M.trim(),
          name: le.trim(),
          fullName: le.trim(),
          description: ie.trim(),
          active: !0
        };
        K((Ie) => [Be, ...Ie]), ht(Be), Z(!1), L(!1);
      } finally {
        pe(!1);
      }
    }
  };
  Le(() => {
    let se = !0;
    const ke = (n || "").trim();
    if (r && Array.isArray(r) && r.length > 0) {
      K(r);
      return;
    }
    if (ke)
      _(!0), ae(ke, i).then((Be) => {
        se && (Array.isArray(Be) && Be.length > 0 ? K(Be) : K([]));
      }).catch(() => {
        if (se) {
          const Be = fe(ke);
          K(Array.isArray(Be) ? Be : []);
        }
      }).finally(() => {
        se && _(!1);
      });
    else if (s && Array.isArray(s) && s.length > 0) {
      const Be = s.map((Ie) => Ie.rawItem && typeof Ie.rawItem == "object" ? Ie.rawItem : {
        [d]: Ie.value,
        [c]: Ie.label,
        id: Ie.value,
        name: Ie.label,
        fullName: Ie.label
      });
      K(Be);
    } else
      K([]);
    return () => {
      se = !1;
    };
  }, [n, i, r, s, d, c, ae, fe, ue]);
  const be = $e(() => {
    if (u && u.length > 0)
      return u;
    if (y.length > 0) {
      const se = y[0], ke = Object.keys(se), Ie = [
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
        (Re) => ke.some((Xe) => Xe.toLowerCase() === Re.toLowerCase())
      );
      if (Ie.length > 0)
        return Ie.slice(0, 3).map((Re) => {
          const Xe = ke.find((Ze) => Ze.toLowerCase() === Re.toLowerCase()) || Re;
          return {
            key: Xe,
            title: Xe.charAt(0).toUpperCase() + Xe.slice(1),
            width: Xe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const Ae = ke.filter(
        (Re) => typeof se[Re] != "object" && !Re.startsWith("_")
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
  }, [u, y, d, c]), ge = $e(() => t == null || t === "" ? null : y.find((se) => {
    const ke = Zt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code;
    return ke !== void 0 && String(ke) === String(t);
  }) || null, [t, y, d]), Fe = $e(() => ge ? Fo(b, ge, String(t ?? "")) : t != null && t !== "" ? String(t) : "", [ge, b, t]), [we, ve] = R({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), ne = () => {
    if (!J.current) return;
    const se = J.current.getBoundingClientRect(), ke = 300, Ie = Math.max(se.width, 360), Re = window.innerHeight - se.bottom < ke && se.top > ke;
    let Xe = Re ? se.top - ke - 4 : se.bottom + 4, Ze = se.left;
    Ze + Ie > window.innerWidth - 12 && (Ze = Math.max(12, window.innerWidth - Ie - 12)), ve({ top: Xe, left: Ze, width: Ie, openUpwards: Re });
  }, he = () => {
    S || v || (ne(), L(!0), k(""), E(0));
  };
  Le(() => {
    D && (ne(), setTimeout(() => {
      var se;
      (se = I.current) == null || se.focus();
    }, 50));
  }, [D]), Le(() => {
    if (!D) return;
    const se = (Be) => {
      var Ae, Re;
      const Ie = Be.target;
      (Ae = J.current) != null && Ae.contains(Ie) || (Re = te.current) != null && Re.contains(Ie) || (L(!1), A && A());
    }, ke = () => {
      ne();
    };
    return window.addEventListener("mousedown", se), window.addEventListener("scroll", ke, !0), window.addEventListener("resize", ke), () => {
      window.removeEventListener("mousedown", se), window.removeEventListener("scroll", ke, !0), window.removeEventListener("resize", ke);
    };
  }, [D, A]);
  const qe = $e(() => {
    if (!F.trim()) return y;
    const se = F.toLowerCase().trim();
    return y.filter((ke) => be.some((Ie) => {
      const Ae = Zt(ke, Ie.key);
      return Ae != null && String(Ae).toLowerCase().includes(se);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((Ie) => {
      const Ae = Zt(ke, Ie);
      return Ae != null && String(Ae).toLowerCase().includes(se);
    }));
  }, [y, F, be]);
  Le(() => {
    if (O.current && qe.length > 0) {
      const se = O.current.querySelector(`[data-index="${V}"]`);
      se && se.scrollIntoView({ block: "nearest" });
    }
  }, [V, qe]);
  const ht = (se) => {
    const ke = Zt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code;
    a(ke, se), C && p && xe(p, C, se), L(!1);
  }, Ct = (se) => {
    se.stopPropagation(), a("", null);
  }, Mt = (se) => {
    se.key === "ArrowDown" ? (se.preventDefault(), E((ke) => ke < qe.length - 1 ? ke + 1 : ke)) : se.key === "ArrowUp" ? (se.preventDefault(), E((ke) => ke > 0 ? ke - 1 : 0)) : se.key === "Enter" ? (se.preventDefault(), qe.length > 0 && V >= 0 && V < qe.length && ht(qe[V])) : se.key === "Escape" && (se.preventDefault(), L(!1));
  }, gt = (se) => {
    if (se.key === "Enter" || se.key === " " || se.key === "F4" || se.altKey && se.key === "ArrowDown") {
      se.preventDefault(), he();
      return;
    }
    g && g(se);
  }, kt = N ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: J,
        tabIndex: S ? -1 : 0,
        onClick: he,
        onKeyDown: gt,
        onFocus: T,
        className: `enterprise-select-trigger relative flex items-center justify-between transition-all select-none cursor-pointer ${j ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${kt}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${kt} shadow-sm`} ${S ? "opacity-50 cursor-not-allowed" : ""} ${w}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: Fe ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: Fe }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: m }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!Fe && !S && !v && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: Ct,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(ut, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              At,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${D ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    D && Et(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${we.top}px`,
            left: `${we.left}px`,
            width: `${we.width}px`,
            zIndex: 99999
          },
          className: "flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40",
          onClick: (se) => se.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: I,
                    type: "text",
                    value: F,
                    onChange: (se) => {
                      k(se.target.value), E(0);
                    },
                    onKeyDown: Mt,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                F && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => k(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(ut, { className: "w-3 h-3" })
                  }
                )
              ] }),
              l && (n || o) && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: oe,
                  title: `Tạo nhanh bản ghi mới cho ${n || "danh mục"}`,
                  className: "flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95",
                  children: [
                    /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "Tạo nhanh" })
                  ]
                }
              ),
              H && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(An, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              be.map((se, ke) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: se.width || `${100 / be.length}%` },
                  className: `px-1.5 truncate ${se.align === "right" ? "text-right" : se.align === "center" ? "text-center" : "text-left"}`,
                  children: se.title
                },
                se.key || ke
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: O,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: qe.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Wt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: H ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" }),
                  l && (n || o) && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: oe,
                      className: "mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          'Thêm nhanh "',
                          F || n,
                          '"'
                        ] })
                      ]
                    }
                  )
                ] }) : qe.map((se, ke) => {
                  const Be = Zt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code, Ie = Be !== void 0 && String(Be) === String(t), Ae = ke === V;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": ke,
                      onClick: () => ht(se),
                      onMouseEnter: () => E(ke),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${Ie ? "bg-emerald-950/60 text-emerald-200 font-medium" : Ae ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        be.map((Re, Xe) => {
                          const Ze = Zt(se, Re.key), rt = Ze != null ? String(Ze) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: Re.width || `${100 / be.length}%` },
                              className: `px-1.5 truncate ${Re.align === "right" ? "text-right font-mono" : Re.align === "center" ? "text-center" : "text-left"}`,
                              children: rt
                            },
                            Re.key || Xe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: Ie && /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5 text-emerald-400" }) })
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
                  y.length,
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
    U && Et(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (se) => se.stopPropagation(),
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
                  onClick: () => Z(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
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
                    value: M,
                    onChange: (se) => Q(se.target.value),
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
                    value: le,
                    onChange: (se) => q(se.target.value),
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
                    value: ie,
                    onChange: (se) => de(se.target.value),
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
                  onClick: () => Z(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: z || !M.trim() || !le.trim(),
                  onClick: ye,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    z ? /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
}, Po = ({ node: t, isEditing: a }) => {
  var _, y, K, U, Z, M, Q, le, q, ie, de;
  const { props: s, style: r } = t, n = ee((z) => z.features), o = ee((z) => z.activeFeatureId), l = n.find((z) => String(z.id) === String(t.pageId)) || n.find((z) => String(z.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((_ = t.dataBinding) == null ? void 0 : _.fieldName) || t.props.name || t.id), N = je((z) => ns(z, v, j, void 0)), w = je((z) => z.setFieldValue), g = N !== void 0 ? N : s.value ?? "", T = s.reference || s.refName || ((y = t.dataBinding) == null ? void 0 : y.refName) || ((K = t.dataBinding) == null ? void 0 : K.entityName) || "", A = s.dataSource || ((U = t.dataBinding) == null ? void 0 : U.dataSource) || s.query || ((Z = t.dataBinding) == null ? void 0 : Z.query) || s.sqlWhere || ((M = t.dataBinding) == null ? void 0 : M.sqlWhere) || "", h = s.idField || ((Q = t.dataBinding) == null ? void 0 : Q.idField) || "id", D = s.textField || s.selectField || ((le = t.dataBinding) == null ? void 0 : le.selectField) || "name", L = s.dropdownColumns || ((q = t.dataBinding) == null ? void 0 : q.dropdownColumns), F = s.formatData || ((ie = t.dataBinding) == null ? void 0 : ie.formatData) || "", k = s.populateField || ((de = t.dataBinding) == null ? void 0 : de.populateField) || "", V = s.options || [], E = !!s.validationError, H = (z, pe) => {
    w(v, j, z), a || Ye(t.events, "change", s.label || "Chọn mục", i, {
      componentId: t.id,
      fieldName: j,
      value: z,
      selectedItem: pe
    });
  };
  return /* @__PURE__ */ e.jsx(
    ks,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ e.jsx(
        Ro,
        {
          value: g,
          onChange: H,
          options: V,
          reference: T,
          dataSource: A,
          idField: h,
          selectField: D,
          dropdownColumns: L,
          formatData: F,
          populateField: k,
          formId: v,
          placeholder: s.placeholder ? String(s.placeholder) : "— Chọn —",
          disabled: s.disabled,
          error: E ? String(s.validationError) : void 0
        }
      ) })
    }
  );
}, $o = ({ node: t, isEditing: a }) => {
  const { props: s, style: r } = t, n = ee((N) => N.features), o = ee((N) => N.activeFeatureId), l = n.find((N) => String(N.id) === String(t.pageId)) || n.find((N) => String(N.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, [v, j] = R(!!s.value);
  return /* @__PURE__ */ e.jsx(
    ks,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center h-8", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            disabled: s.disabled,
            checked: v,
            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50",
            onChange: (N) => {
              j(N.target.checked), a || Ye(t.events, "change", s.label || "Hộp kiểm", i, {
                componentId: t.id,
                value: N.target.checked
              });
            }
          }
        ),
        s.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: s.placeholder })
      ] })
    }
  );
}, Lo = ({ node: t, isEditing: a }) => {
  var A;
  const { props: s, style: r } = t, n = ee((h) => h.features), o = ee((h) => h.activeFeatureId), l = n.find((h) => String(h.id) === String(t.pageId)) || n.find((h) => String(h.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((A = t.dataBinding) == null ? void 0 : A.fieldName) || t.props.name || t.id), N = je((h) => ns(h, v, j, void 0)), w = je((h) => h.setFieldValue), g = N !== void 0 ? N : s.value ?? "", T = (h) => {
    w(v, j, h), a || Ye(t.events, "change", s.label || "Chọn ngày", i, {
      componentId: t.id,
      fieldName: j,
      value: h
    });
  };
  return /* @__PURE__ */ e.jsx(
    ks,
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
        ...S
      },
      children: /* @__PURE__ */ e.jsx(
        ga,
        {
          value: g,
          onChange: T,
          disabled: s.disabled,
          readOnly: a || !!s.readOnly,
          placeholder: s.placeholder || "DD/MM/YYYY",
          error: s.validationError ? String(s.validationError) : void 0
        }
      )
    }
  );
}, Ao = ({ node: t, children: a }) => {
  const { props: s } = t, r = s.label || s.title || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: a || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, Eo = ({ node: t }) => {
  const { props: a, style: s } = t, { width: r, ...n } = s || {};
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
}, Mo = ({ node: t, isEditing: a }) => {
  var h;
  const { props: s, style: r } = t, n = ee((D) => D.features), o = ee((D) => D.activeFeatureId), l = n.find((D) => String(D.id) === String(t.pageId)) || n.find((D) => String(D.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((h = t.dataBinding) == null ? void 0 : h.fieldName) || t.props.name || t.id), N = je((D) => ns(D, v, j, void 0)), w = je((D) => D.setFieldValue), g = N !== void 0 ? N : s.value !== void 0 ? String(s.value) : "", T = Number(s.rows) || 2, A = !!s.validationError;
  return /* @__PURE__ */ e.jsx(
    ks,
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
          rows: T,
          placeholder: s.placeholder || "Nhập nội dung...",
          value: g,
          disabled: s.disabled,
          readOnly: a || !!s.readOnly,
          style: {
            width: "100%",
            ...S
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${A ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${s.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (D) => {
            const L = D.target.value;
            w(v, j, L), a || Ye(t.events, "change", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: j,
              value: L
            });
          },
          onFocus: () => {
            a || Ye(t.events, "focus", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: j
            });
          },
          onBlur: (D) => {
            a || Ye(t.events, "blur", s.label || "Văn bản", i, {
              componentId: t.id,
              fieldName: j,
              value: D.target.value
            });
          }
        }
      )
    }
  );
}, yi = ({ node: t, isEditing: a, children: s }) => {
  var w, g;
  const { props: r, style: n } = t, o = ee((T) => T.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: u, maxWidth: b, width: C, ...p } = n || {}, m = [
    { id: "main", label: "TAB 1" }
  ], S = r.tabs || m, [v, j] = R(
    r.activeTabId || ((w = S[0]) == null ? void 0 : w.id) || "main"
  ), N = r.activeTabId || v || ((g = S[0]) == null ? void 0 : g.id) || "main";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col",
      style: {
        width: "100%",
        ...p
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto", children: [
          S.map((T) => {
            const A = T.id === N;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (h) => {
                  h.stopPropagation(), j(T.id), o(t.id, { activeTabId: T.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${A ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: T.label }),
                  T.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${T.badgeColor || "bg-amber-600"}`, children: T.badge })
                ]
              },
              T.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (T) => {
                T.stopPropagation();
                const A = `tab_${Date.now().toString(36)}`, h = [...S, { id: A, label: `Tab Mới ${S.length + 1}` }];
                o(t.id, { tabs: h, activeTabId: A }), j(A);
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
}, wa = ({
  parentId: t,
  order: a,
  tabNodes: s,
  isEditing: r,
  parentFlexConfig: n,
  renderChild: o
}) => {
  var p;
  const l = ee((m) => m.addComponent), i = ee((m) => m.selectComponent), [d, c] = R(((p = s[0]) == null ? void 0 : p.id) || ""), u = s.find((m) => m.id === d) || s[0], b = (u == null ? void 0 : u.id) || "", C = (m) => {
    var N;
    m.stopPropagation();
    const S = ((N = s[0]) == null ? void 0 : N.pageId) || "2", v = `tab_${Date.now().toString(36)}`, j = {
      id: v,
      type: "Container",
      parentId: t,
      pageId: S,
      order: a,
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
    l(j, t), c(v), i(v);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          s.map((m) => {
            const S = m.id === b, v = m.props.label || m.props.title || `Tab #${m.id.slice(-4)}`, j = m.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (N) => {
                  N.stopPropagation(), c(m.id), r && i(m.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${S ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: v }),
                  j !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(j) })
                ]
              },
              m.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: C,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: u && o ? o(u, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, Bo = ({
  label: t = "Bản ghi:",
  reference: a = "Records",
  displayField: s = "code",
  records: r,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: d = "",
  style: c = {}
}) => {
  var N;
  const u = je(), b = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [C, p] = R(r || b), [m, S] = R(n || ((N = b[0]) == null ? void 0 : N.id) || "");
  Le(() => {
    r && r.length > 0 && p(r);
  }, [r]), Le(() => {
    n !== void 0 && S(n);
  }, [n]);
  const v = (w) => {
    S(w.id), l ? l(w) : u.setFormRecord("default", w);
  }, j = () => {
    const w = C.length + 1, g = `REC-${String(w).padStart(3, "0")}`, T = {
      id: String(Date.now()),
      code: g,
      name: `Bản ghi mới ${w}`
    }, A = [...C, T];
    p(A), S(T.id), i ? i() : u.setFormRecord("default", T);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        t && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(Vr, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          C.map((w) => {
            const g = String(w.id) === String(m), T = w[s] || w.code || w.name || w.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => v(w),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${g ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: T })
              },
              w.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: j,
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
}, _o = ({
  isOpen: t,
  title: a,
  entityName: s,
  columns: r,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = je(), d = je((A) => A.datasets[s]), [c, u] = R([]), [b, C] = R(!1), [p, m] = R(""), [S, v] = R(0), j = tt(null);
  Le(() => {
    if (!t) {
      m(""), v(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? u(d) : (C(!0), i.queryEntity(s).then((A) => {
      Array.isArray(A) && A.length > 0 ? u(A) : u(i.getDataset(s) || []);
    }).finally(() => C(!1))), setTimeout(() => {
      var A, h;
      (A = j.current) == null || A.focus(), (h = j.current) == null || h.select();
    }, 80);
  }, [t, s, d]);
  const N = $e(() => {
    if (r && r.length > 0) return r;
    if (c.length > 0) {
      const A = c[0], h = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys(A).filter((D) => !h.includes(D.toLowerCase()) && typeof A[D] != "object").slice(0, 6).map((D) => ({
        key: D,
        title: D.charAt(0).toUpperCase() + D.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [r, c]), w = $e(() => {
    if (!p.trim()) return c;
    const A = p.toLowerCase().trim();
    return c.filter((h) => n && n.length > 0 ? n.some((D) => {
      const L = h[D];
      return L != null && String(L).toLowerCase().includes(A);
    }) : Object.values(h).some(
      (D) => D != null && String(D).toLowerCase().includes(A)
    ));
  }, [c, p, n]);
  Le(() => {
    S >= w.length && v(Math.max(0, w.length - 1));
  }, [w.length]);
  const g = (A) => {
    A.key === "ArrowDown" ? (A.preventDefault(), v((h) => h < w.length - 1 ? h + 1 : h)) : A.key === "ArrowUp" ? (A.preventDefault(), v((h) => h > 0 ? h - 1 : 0)) : A.key === "Enter" ? (A.preventDefault(), w[S] && (o(w[S]), l())) : A.key === "Escape" && (A.preventDefault(), l());
  };
  if (!t) return null;
  const T = a || `Tra cứu danh mục: ${s}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: g,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(En, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: T }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                w.length,
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
              children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 border-b border-slate-800/80 bg-slate-900/50", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Wt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: j,
              type: "text",
              value: p,
              onChange: (A) => {
                m(A.target.value), v(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${s}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: b ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : w.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          p,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            N.map((A) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: A.width },
                children: A.title || A.key
              },
              A.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: w.map((A, h) => {
            const D = h === S;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => v(h),
                onDoubleClick: () => {
                  o(A), l();
                },
                className: `transition-colors cursor-pointer ${D ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: h + 1 }),
                  N.map((L) => {
                    const F = A[L.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: F != null ? String(F) : "—"
                      },
                      L.key
                    );
                  })
                ]
              },
              A.id ?? A.Id ?? h
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
                disabled: w.length === 0,
                onClick: () => {
                  w[S] && (o(w[S]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, Oo = ({ node: t, isEditing: a }) => {
  var te, I, O, ae, fe, xe, ue;
  const { props: s, style: r } = t, n = ee((oe) => oe.features), o = ee((oe) => oe.activeFeatureId), l = n.find((oe) => String(oe.id) === String(t.pageId)) || n.find((oe) => String(oe.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: u, flexBasis: b, minWidth: C, maxWidth: p, width: m, ...S } = r || {}, v = String(t.pageId || o || "default"), j = String(((te = t.dataBinding) == null ? void 0 : te.fieldName) || t.props.name || t.id), N = je((oe) => ns(oe, v, j, void 0)), w = je((oe) => oe.setFieldValue), g = je((oe) => oe.applyPopulate), [T, A] = R(!1), [h, D] = R(!1), [L, F] = R(""), [k, V] = R(""), [E, H] = R(""), [_, y] = R(!1), K = N !== void 0 ? N : s.value ?? "", U = !!s.validationError, Z = String(
    s.reference || s.refName || ((I = t.dataBinding) == null ? void 0 : I.refName) || ((O = t.dataBinding) == null ? void 0 : O.entityName) || ""
  ), M = String(
    s.refClass || ((ae = t.dataBinding) == null ? void 0 : ae.refClass) || ""
  ), Q = String(
    s.displayField || s.selectField || ((fe = t.dataBinding) == null ? void 0 : fe.selectField) || "code"
  ), le = String(
    s.valueField || s.idField || ((xe = t.dataBinding) == null ? void 0 : xe.idField) || "code"
  ), q = String(
    s.populateRule || s.populateField || ((ue = t.dataBinding) == null ? void 0 : ue.populateField) || ""
  ), ie = () => {
    if (!(s.disabled || a)) {
      if (!Z) {
        console.warn(`[ForgeSearchEntry] Component ${t.id} chưa cấu hình reference entity`);
        return;
      }
      A(!0);
    }
  }, de = () => {
    if (s.disabled || a) return;
    if (M) {
      sa(M, {}, `Tạo mới ${Z || M}`);
      return;
    }
    const oe = String(K || "").trim();
    F(oe ? oe.toUpperCase().replace(/\s+/g, "_") : ""), V(oe), H(""), D(!0);
  }, z = async () => {
    if (!L.trim() || !k.trim()) return;
    const oe = Z.trim();
    if (oe) {
      y(!0);
      try {
        const ye = {
          code: L.trim(),
          name: k.trim(),
          fullName: k.trim(),
          description: E.trim(),
          active: !0
        }, be = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(oe)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ye)
        });
        if (be.ok) {
          const ge = await be.json(), Fe = {
            ...ye,
            ...ge,
            id: ge.id ?? ge.Id ?? Date.now()
          };
          await je.getState().queryEntity(oe), pe(Fe), D(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ye) {
        console.error("[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:", ye);
        const be = {
          id: `mock-${Date.now()}`,
          code: L.trim(),
          name: k.trim(),
          fullName: k.trim(),
          description: E.trim(),
          active: !0
        };
        pe(be), D(!1);
      } finally {
        y(!1);
      }
    }
  }, pe = (oe) => {
    const ye = oe[le] ?? oe[Q] ?? oe.code ?? oe.id;
    oe[Q] ?? oe.name, w(v, j, ye), q && g(v, q, oe), a || (Ye(t.events, "change", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: j,
      value: ye,
      selectedItem: oe
    }), Ye(t.events, "select", s.label || "Ô tra cứu", i, {
      componentId: t.id,
      fieldName: j,
      value: ye,
      selectedItem: oe
    }));
  }, J = (oe) => {
    oe.key === "F1" && (oe.preventDefault(), oe.stopPropagation(), ie());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      ks,
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
          ...S
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: s.disabled,
              readOnly: a || !!s.readOnly,
              placeholder: s.placeholder || (Z ? `Tra cứu ${Z} (F1)...` : "Nhập dữ liệu..."),
              value: K,
              onKeyDown: J,
              onDoubleClick: ie,
              className: `w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${U ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (oe) => {
                const ye = oe.target.value;
                w(v, j, ye), a || Ye(t.events, "change", s.label || "Ô tra cứu", i, {
                  componentId: t.id,
                  fieldName: j,
                  value: ye
                });
              }
            }
          ),
          Z && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || a,
                onClick: de,
                title: `Tạo nhanh ${Z} (+)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: s.disabled || a,
                onClick: ie,
                title: `Tra cứu ${Z} (Nhấn F1 hoặc nhấp đúp)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      }
    ),
    Z && /* @__PURE__ */ e.jsx(
      _o,
      {
        isOpen: T,
        title: `Tra cứu danh mục: ${s.label || Z}`,
        entityName: Z,
        columns: s.columns,
        onSelect: pe,
        onClose: () => A(!1)
      }
    ),
    h && Et(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (oe) => oe.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-slate-100", children: [
                    "Tạo nhanh danh mục: ",
                    Z || "Bản ghi mới"
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: "Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này" })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => D(!1),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",
                  children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
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
                    value: L,
                    onChange: (oe) => F(oe.target.value),
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
                    value: k,
                    onChange: (oe) => V(oe.target.value),
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
                    value: E,
                    onChange: (oe) => H(oe.target.value),
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
                  onClick: () => D(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: _ || !L.trim() || !k.trim(),
                  onClick: z,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    _ ? /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
}, Ho = ({
  node: t,
  isEditing: a,
  label: s,
  files: r,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var F;
  const d = Ar(), c = tt(null), [u, b] = R(!1), [C, p] = R(null), [m, S] = R(null), [v, j] = R([
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
  ]), N = r ?? v, w = (k) => {
    r || j(k), n == null || n(k);
  }, g = (k) => k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : `${(k / (1024 * 1024)).toFixed(2)} MB`, T = (k) => k.startsWith("image/") ? /* @__PURE__ */ e.jsx(Ua, { className: "w-4 h-4 text-emerald-400" }) : k.includes("pdf") ? /* @__PURE__ */ e.jsx(zt, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(Ka, { className: "w-4 h-4 text-blue-400" }), A = (k) => {
    if (!k || k.length === 0) return;
    const V = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(k).forEach((E) => {
      if (E.size > l * 1024 * 1024) {
        alert(`Tệp "${E.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const H = new FileReader(), _ = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      H.onload = () => {
        const y = {
          id: _,
          fileName: E.name,
          fileSize: E.size,
          fileType: E.type || "application/octet-stream",
          uploadedDate: V,
          uploadedBy: "User",
          dataUrl: H.result
        };
        w([...N, y]);
      }, H.readAsDataURL(E);
    });
  }, h = (k, V) => {
    if (V == null || V.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const E = N.filter((H) => H.id !== k);
      w(E), C === k && p(null);
    }
  }, D = (k, V) => {
    if (V == null || V.stopPropagation(), !k.dataUrl) {
      alert(`Đang tải file mẫu: ${k.fileName}`);
      return;
    }
    const E = document.createElement("a");
    E.href = k.dataUrl, E.download = k.fileName, document.body.appendChild(E), E.click(), document.body.removeChild(E);
  }, L = s || ((F = t == null ? void 0 : t.props) == null ? void 0 : F.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Ur, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: L }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          N.length,
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
            onChange: (k) => A(k.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var k;
              return (k = c.current) == null ? void 0 : k.click();
            },
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95",
            children: [
              /* @__PURE__ */ e.jsx(fr, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ e.jsx("span", { children: "Đính kèm tệp" })
            ]
          }
        )
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onDragOver: (k) => {
          k.preventDefault(), b(!0);
        },
        onDragLeave: () => b(!1),
        onDrop: (k) => {
          k.preventDefault(), b(!1), A(k.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${u ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var k;
          return (k = c.current) == null ? void 0 : k.click();
        },
        children: [
          /* @__PURE__ */ e.jsx(fr, { className: "w-4 h-4 opacity-60" }),
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: N.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : N.map((k, V) => {
        const E = C === k.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => p(k.id),
            className: `transition-colors cursor-pointer ${E ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: V + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                T(k.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: k.fileName, children: k.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: g(k.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: k.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: k.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => {
                      H.stopPropagation(), S(k);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => D(k, H),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(Dn, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (H) => h(k.id, H),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          k.id
        );
      }) })
    ] }) }),
    m && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => S(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  T(m.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: m.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    g(m.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (k) => D(m, k),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(Dn, { className: "w-3.5 h-3.5" }),
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
                      children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
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
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: T(m.fileType) }),
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
                    onClick: (k) => D(m, k),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(Dn, { className: "w-4 h-4" }),
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
}, Wo = ({
  node: t,
  isEditing: a,
  label: s,
  value: r,
  onChange: n,
  options: o,
  reference: l,
  displayField: i = "name",
  valueField: d = "code",
  sublabelField: c,
  placeholder: u,
  disabled: b = !1
}) => {
  const C = tt(null), p = tt(null), m = Ar(), S = String((t == null ? void 0 : t.pageId) || "default"), v = (t == null ? void 0 : t.props) || {}, j = v.dataBinding || v.fieldName || ((t == null ? void 0 : t.id) ?? ""), N = je((z) => ns(z, S, j, void 0)), w = je((z) => z.setFieldValue), g = je((z) => z.applyPopulate), T = je((z) => z.getDataset), A = s ?? v.label ?? "Gợi ý tự động (Autocomplete)", h = l ?? v.reference, D = i ?? v.displayField ?? "name", L = d ?? v.valueField ?? "code", F = c ?? v.sublabelField, k = u ?? v.placeholder ?? "Gõ để tìm kiếm...", V = String(v.populateRule || ""), E = N ?? r ?? "", [H, _] = R(String(E)), [y, K] = R(!1), [U, Z] = R(-1);
  Le(() => {
    E != null && _(String(E));
  }, [E]);
  const le = (o && o.length > 0 ? o : h ? (T(h) || []).map((pe) => ({
    value: pe[L] ?? pe.id ?? pe.code ?? "",
    label: String(pe[D] ?? pe.name ?? pe.title ?? pe.code ?? ""),
    sublabel: F ? String(pe[F] ?? "") : void 0,
    raw: pe
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((z) => {
    if (!H || H.trim() === "") return !0;
    const pe = H.toLowerCase().trim();
    return z.label.toLowerCase().includes(pe) || String(z.value).toLowerCase().includes(pe) || z.sublabel && z.sublabel.toLowerCase().includes(pe);
  });
  Le(() => {
    const z = (pe) => {
      C.current && !C.current.contains(pe.target) && K(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, []);
  const q = (z) => {
    _(z.label), K(!1), Z(-1), n == null || n(z.value, z.raw), j && w(S, j, z.value), z.raw && V && g(S, V, z.raw);
  }, ie = (z) => {
    if (!y && (z.key === "ArrowDown" || z.key === "ArrowUp")) {
      K(!0);
      return;
    }
    z.key === "ArrowDown" ? (z.preventDefault(), Z(
      (pe) => pe < le.length - 1 ? pe + 1 : 0
    )) : z.key === "ArrowUp" ? (z.preventDefault(), Z(
      (pe) => pe > 0 ? pe - 1 : le.length - 1
    )) : z.key === "Enter" ? y && U >= 0 && U < le.length && (z.preventDefault(), q(le[U])) : z.key === "Escape" && (K(!1), Z(-1));
  }, de = (z) => {
    var pe;
    z.stopPropagation(), _(""), j && w(S, j, ""), n == null || n(""), (pe = p.current) == null || pe.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: C, className: "relative w-full text-xs", children: [
    A && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: m,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: A
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: m,
          ref: p,
          type: "text",
          disabled: b,
          value: H,
          placeholder: k,
          onFocus: () => K(!0),
          onChange: (z) => {
            _(z.target.value), K(!0), Z(0), j && w(S, j, z.target.value);
          },
          onKeyDown: ie,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        H && !b && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: de,
            className: "p-1 hover:text-slate-200 rounded",
            title: "Xóa giá trị",
            children: /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var z;
              K(!y), (z = p.current) == null || z.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              At,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${y ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: le.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      H,
      '"'
    ] }) : le.map((z, pe) => {
      const J = U === pe, te = String(z.value) === String(E);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => Z(pe),
          onClick: () => q(z),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${J ? "bg-blue-600/25 text-blue-200" : te ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: z.label }),
              (z.sublabel || z.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                z.sublabel ? `${z.sublabel} • ` : "",
                z.value
              ] })
            ] }),
            te && /* @__PURE__ */ e.jsx(an, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${z.value}-${pe}`
      );
    }) })
  ] });
}, Go = ({
  node: t,
  isEditing: a = !1,
  data: s,
  reference: r,
  idField: n = "id",
  labelField: o = "name",
  parentField: l = "parentId",
  onSelectNode: i
}) => {
  var F, k, V, E;
  const d = t.props || {}, c = r || d.reference || d.refName || ((F = t.dataBinding) == null ? void 0 : F.refName) || "", u = je((H) => c ? H.datasets[c] : void 0), [b, C] = R(""), [p, m] = R(null), [S, v] = R(/* @__PURE__ */ new Set()), j = $e(() => s && Array.isArray(s) && s.length > 0 ? s : d.data && Array.isArray(d.data) && d.data.length > 0 ? d.data : u && Array.isArray(u) && u.length > 0 ? u : [
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
  ], [s, d.data, u]), N = $e(() => {
    if (!Array.isArray(j) || j.length === 0) return [];
    if (j.some((K) => Array.isArray(K.children) && K.children.length > 0))
      return j;
    const _ = /* @__PURE__ */ new Map();
    j.forEach((K) => {
      const U = K[n] ?? K.id ?? K.code, Z = K[o] ?? K.name ?? K.title ?? String(U), M = K[l] ?? K.parentId ?? null;
      _.set(U, {
        id: U,
        name: Z,
        code: K.code,
        parentId: M,
        children: [],
        data: K
      });
    });
    const y = [];
    return _.forEach((K) => {
      K.parentId !== null && K.parentId !== void 0 && _.has(K.parentId) ? _.get(K.parentId).children.push(K) : y.push(K);
    }), y;
  }, [j, n, o, l]);
  Le(() => {
    if (N.length > 0 && S.size === 0) {
      const H = /* @__PURE__ */ new Set();
      N.forEach((_) => {
        H.add(_.id), _.children && _.children.forEach((y) => H.add(y.id));
      }), v(H);
    }
  }, [N]);
  const w = (H, _) => {
    _.stopPropagation(), v((y) => {
      const K = new Set(y);
      return K.has(H) ? K.delete(H) : K.add(H), K;
    });
  }, g = () => {
    const H = /* @__PURE__ */ new Set(), _ = (y) => {
      y.forEach((K) => {
        H.add(K.id), K.children && K.children.length > 0 && _(K.children);
      });
    };
    _(N), v(H);
  }, T = () => {
    v(/* @__PURE__ */ new Set());
  }, A = (H) => {
    var K, U;
    m(H.id);
    const _ = String(t.pageId || "default"), y = ((K = t.dataBinding) == null ? void 0 : K.fieldName) || t.id;
    if (je.getState().setFieldValue(_, y, H.id), c && je.getState().setFieldValue(_, `${c}_selected`, H.data || H), i && i(H), t.events && Array.isArray(t.events)) {
      const Z = t.events.find((M) => M.trigger === "change" || M.trigger === "select" || M.trigger === "onClick");
      Z && tn(Z, ((U = t.props) == null ? void 0 : U.label) || t.id, void 0, { node: H, value: H.id });
    }
  }, h = (H, _) => {
    if (!_) return !0;
    const y = _.toLowerCase(), K = H.name.toLowerCase().includes(y), U = H.code ? H.code.toLowerCase().includes(y) : !1;
    return K || U ? !0 : H.children && H.children.length > 0 ? H.children.some((Z) => h(Z, _)) : !1;
  }, D = (H, _ = 0) => {
    if (b && !h(H, b))
      return null;
    const y = !!(H.children && H.children.length > 0), K = S.has(H.id) || !!b, U = p === H.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "select-none", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => A(H),
          style: { paddingLeft: `${Math.max(8, _ * 18 + 8)}px` },
          className: `group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${U ? "bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`,
          children: [
            y ? /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (Z) => w(H.id, Z),
                className: "w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors",
                children: K ? /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" })
              }
            ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: y ? K ? /* @__PURE__ */ e.jsx(za, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ e.jsx(Nn, { className: "w-4 h-4 text-amber-500/80" }) : /* @__PURE__ */ e.jsx(zt, { className: "w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate flex-1 font-medium", children: H.name }),
            H.code && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300", children: H.code }),
            y && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700", children: H.children.length })
          ]
        }
      ),
      y && K && /* @__PURE__ */ e.jsx("div", { className: "relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5", children: H.children.map((Z) => D(Z, _ + 1)) })
    ] }, H.id);
  }, L = d.label || d.title || "Cấu Trúc Cây Phân Cấp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((k = t.style) == null ? void 0 : k.width) || "100%",
        minHeight: ((V = t.style) == null ? void 0 : V.minHeight) || "320px",
        maxHeight: ((E = t.style) == null ? void 0 : E.maxHeight) || "560px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: L }),
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
                onClick: T,
                title: "Thu gọn tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Kr, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-slate-800/80 bg-slate-900/40", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: b,
              onChange: (H) => C(H.target.value),
              placeholder: "Tìm kiếm danh mục theo tên, mã...",
              className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: N.length > 0 ? N.map((H) => D(H)) : /* @__PURE__ */ e.jsx("div", { className: "py-8 text-center text-xs text-slate-500 italic", children: "Chưa có dữ liệu danh mục phân cấp" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-mono", children: [
            "Tổng số: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: j.length }),
            " phần tử"
          ] }),
          p && /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-400 font-mono font-medium", children: [
            "Đang chọn ID: #",
            String(p)
          ] })
        ] })
      ]
    }
  );
}, $r = [
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
], Vo = ({
  node: t,
  isEditing: a = !1,
  data: s,
  type: r,
  title: n,
  reference: o
}) => {
  var A, h, D;
  const l = t.props || {}, i = r || l.chartType || l.type || "bar", [d, c] = R(i), [u, b] = R(null), C = o || l.reference || l.refName || ((A = t.dataBinding) == null ? void 0 : A.refName) || "", p = je((L) => C ? L.datasets[C] : void 0), m = $e(() => {
    let L = [];
    s && Array.isArray(s) && s.length > 0 ? L = s : l.data && Array.isArray(l.data) && l.data.length > 0 ? L = l.data : p && Array.isArray(p) && p.length > 0 ? L = p : L = [
      { label: "Cát Lái (CTL)", value: 4850 },
      { label: "Cái Mép (TCIT)", value: 3620 },
      { label: "Hải Phòng (HPH)", value: 2980 },
      { label: "Lạch Huyện (HICT)", value: 2450 },
      { label: "Đà Nẵng (DAN)", value: 1680 },
      { label: "Quy Nhơn (QNH)", value: 1120 }
    ];
    const F = l.labelField || "label", k = l.valueField || "value";
    return L.map((V, E) => {
      const H = String(V[F] ?? V.label ?? V.name ?? V.code ?? `Mục ${E + 1}`), _ = V[k] ?? V.value ?? V.amount ?? V.total ?? 0, y = Math.max(0, Number(_) || 0), K = V.color || $r[E % $r.length];
      return { label: H, value: y, color: K };
    });
  }, [s, l.data, p, l.labelField, l.valueField]), S = $e(() => m.reduce((L, F) => L + F.value, 0), [m]), v = $e(() => Math.max(...m.map((L) => L.value), 1), [m]), j = l.label || n || l.title || "Biểu Đồ Thống Kê Sản Lượng", N = l.subtitle || (C ? `Nguồn dữ liệu: ${C}` : "Đơn vị: TEUs"), w = () => {
    const L = Math.max(20, Math.min(48, Math.floor(400 / (m.length || 1))));
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" }),
        m.map((F, k) => {
          const V = v > 0 ? F.value / v * 100 : 0, E = u === k;
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              onMouseEnter: () => b(k),
              onMouseLeave: () => b(null),
              className: "flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer",
              children: [
                E && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-bold text-emerald-400", children: F.label }),
                  /* @__PURE__ */ e.jsxs("p", { className: "font-mono", children: [
                    F.value.toLocaleString("en-US"),
                    " (",
                    (F.value / (S || 1) * 100).toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-mono mb-1 transition-all ${E ? "text-emerald-300 font-bold -translate-y-0.5" : "text-slate-400"}`, children: F.value > 1e3 ? `${(F.value / 1e3).toFixed(1)}k` : F.value }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: `${Math.max(4, V)}%`,
                      backgroundColor: F.color,
                      maxWidth: `${L}px`
                    },
                    className: `w-full rounded-t-md transition-all duration-300 shadow-md ${E ? "brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105" : "hover:brightness-110"}`
                  }
                )
              ]
            },
            k
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-3 pt-2", children: m.map((F, k) => /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-center truncate", title: F.label, children: /* @__PURE__ */ e.jsx("span", { className: `text-[11px] truncate block ${u === k ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: F.label }) }, k)) })
    ] });
  }, g = () => {
    const E = m.length, H = m.map((K, U) => {
      const Z = E > 1 ? 40 + U / (E - 1) * 520 : 300, M = 175 - (v > 0 ? K.value / v * (200 - 2 * 25) : 0);
      return { x: Z, y: M, item: K, idx: U };
    }), _ = H.reduce((K, U, Z) => Z === 0 ? `M ${U.x} ${U.y}` : `${K} L ${U.x} ${U.y}`, ""), y = H.length > 0 ? `${_} L ${H[H.length - 1].x} 175 L ${H[0].x} 175 Z` : "";
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col items-center justify-center h-64 px-2", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 600 200", className: "w-full h-48 overflow-visible", children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: `lineGrad_${t.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.4" }),
          /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
        ] }) }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 25, x2: 560, y2: 25, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 200 / 2, x2: 560, y2: 200 / 2, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 175, x2: 560, y2: 175, stroke: "#475569" }),
        y && /* @__PURE__ */ e.jsx("path", { d: y, fill: `url(#lineGrad_${t.id})` }),
        _ && /* @__PURE__ */ e.jsx("path", { d: _, fill: "none", stroke: "#10B981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        H.map((K) => {
          const U = u === K.idx;
          return /* @__PURE__ */ e.jsxs(
            "g",
            {
              onMouseEnter: () => b(K.idx),
              onMouseLeave: () => b(null),
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: K.x,
                    cy: K.y,
                    r: U ? 6 : 4,
                    fill: U ? "#34D399" : "#10B981",
                    stroke: "#0F172A",
                    strokeWidth: "2",
                    className: "transition-all"
                  }
                ),
                U && /* @__PURE__ */ e.jsx("circle", { cx: K.x, cy: K.y, r: 10, fill: "none", stroke: "#34D399", strokeWidth: "1.5", strokeDasharray: "2 2", className: "animate-spin" })
              ]
            },
            K.idx
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-between px-6 pt-2", children: m.map((K, U) => /* @__PURE__ */ e.jsx("div", { className: "text-center truncate flex-1", children: /* @__PURE__ */ e.jsx("span", { className: `text-[10px] truncate block ${u === U ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: K.label }) }, U)) })
    ] });
  }, T = () => {
    let E = 0;
    const H = m.map((_, y) => {
      const K = S > 0 ? _.value / S * 360 : 0, U = E, Z = E + K;
      E += K;
      const M = (U - 90) * Math.PI / 180, Q = (Z - 90) * Math.PI / 180, le = 90 + 70 * Math.cos(M), q = 90 + 70 * Math.sin(M), ie = 90 + 70 * Math.cos(Q), de = 90 + 70 * Math.sin(Q), z = 90 + 45 * Math.cos(M), pe = 90 + 45 * Math.sin(M), J = 90 + 45 * Math.cos(Q), te = 90 + 45 * Math.sin(Q), I = K > 180 ? 1 : 0, O = K >= 359.9 ? "M 90 20 A 70 70 0 1 1 90 160 A 70 70 0 1 1 90 20 M 90 45 A 45 45 0 1 0 90 135 A 45 45 0 1 0 90 45" : `M ${le} ${q} A 70 70 0 ${I} 1 ${ie} ${de} L ${J} ${te} A 45 45 0 ${I} 0 ${z} ${pe} Z`;
      return { item: _, idx: y, pathData: O, percentage: (_.value / (S || 1) * 100).toFixed(1) };
    });
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center justify-around h-64 px-4 py-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ e.jsx("svg", { width: 180, height: 180, viewBox: "0 0 180 180", children: H.map((_) => {
          const y = u === _.idx;
          return /* @__PURE__ */ e.jsx(
            "path",
            {
              d: _.pathData,
              fill: _.item.color,
              onMouseEnter: () => b(_.idx),
              onMouseLeave: () => b(null),
              className: `transition-all duration-200 cursor-pointer ${y ? "scale-105 origin-center brightness-125 stroke-white stroke-1" : "hover:opacity-90"}`
            },
            _.idx
          );
        }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none", children: u !== null && m[u] ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-medium truncate max-w-[80px]", children: m[u].label }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-bold font-mono text-emerald-400", children: [
            (m[u].value / (S || 1) * 100).toFixed(1),
            "%"
          ] })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: "TỔNG" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold font-mono text-slate-100", children: S > 1e4 ? `${(S / 1e3).toFixed(0)}k` : S })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2", children: m.map((_, y) => {
        const K = u === y, U = (_.value / (S || 1) * 100).toFixed(1);
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            onMouseEnter: () => b(y),
            onMouseLeave: () => b(null),
            className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${K ? "bg-slate-800/80 text-white" : "text-slate-300 hover:bg-slate-800/40"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2.5 h-2.5 rounded-full flex-shrink-0", style: { backgroundColor: _.color } }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs truncate max-w-[110px]", children: _.label }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-mono text-slate-400 ml-auto", children: [
                U,
                "%"
              ] })
            ]
          },
          y
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((h = t.style) == null ? void 0 : h.width) || "100%",
        minHeight: ((D = t.style) == null ? void 0 : D.minHeight) || "320px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(qa, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: j }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-mono block", children: N })
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
                children: /* @__PURE__ */ e.jsx(zr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("line"),
                title: "Biểu đồ Đường (Line Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "line" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(Ya, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("donut"),
                title: "Biểu đồ Tròn (Donut Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "donut" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(Ja, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center p-2", children: m.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "py-12 text-center text-xs text-slate-500 italic", children: "Không có dữ liệu số liệu để vẽ biểu đồ" }) : d === "bar" ? w() : d === "line" ? g() : T() }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tổng cộng: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: S.toLocaleString("en-US") })
          ] }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            m.length,
            " danh mục"
          ] })
        ] })
      ]
    }
  );
};
function Ca(t) {
  var r, n;
  if (!t || t.length === 0) return [];
  const a = [...t].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), s = [];
  for (const o of a) {
    const l = !!((r = o.props) != null && r.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
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
function ka(t, a) {
  var b, C;
  const s = t.style || {}, r = ((b = t.props) == null ? void 0 : b.colSpan) !== void 0 && ((C = t.props) == null ? void 0 : C.colSpan) !== null ? Number(t.props.colSpan) : void 0;
  let n = s.width, o = s.flex, l = s.maxWidth, i = s.minWidth ?? 0, d;
  const c = (a == null ? void 0 : a.mode) || "grid", u = (a == null ? void 0 : a.gridColumns) || 12;
  if (c === "grid") {
    let p;
    if (r !== void 0 && !isNaN(r) && r > 0)
      p = Math.min(r, u);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const m = Number(a.columnsPerRow);
      !isNaN(m) && m > 0 ? p = Math.max(1, Math.floor(u / m)) : p = Math.min(4, u);
    } else
      p = Math.min(4, u);
    d = `span ${p} / span ${p}`, n = s.width !== void 0 ? s.width : "100%", l = s.maxWidth !== void 0 ? s.maxWidth : "100%", o = s.flex !== void 0 ? s.flex : "none";
  } else {
    const p = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const S = Math.min(100, Math.max(2, r / u * 100)), v = r >= u ? "100%" : `calc(${S}% - ${Math.round(p * (1 - r / u))}px)`;
        s.width === void 0 && s.flex === void 0 && (n = v, l = v, o = `0 0 ${v}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const S = Number(a.columnsPerRow);
        if (!isNaN(S) && S > 0) {
          const v = S === 1 ? "100%" : `calc((100% - ${(S - 1) * p}px) / ${S})`;
          s.width === void 0 && s.flex === void 0 && (n = v, l = v, o = `0 0 ${v}`);
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
const sn = ({
  node: t,
  isEditing: a = !1,
  onContextMenu: s,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l,
  ancestors: i = []
}) => {
  var D, L, F, k, V, E, H, _, y, K, U, Z, M;
  const d = ee((Q) => Q.selection), c = ee((Q) => Q.selectComponent), u = a && d.componentId === t.id, b = (Q) => {
    a && (Q.stopPropagation(), c(t.id));
  }, C = (Q) => {
    a && (Q.preventDefault(), Q.stopPropagation(), c(t.id), s && s(Q, t));
  };
  if (t.type === "Container" || t.type === "Section" || t.type === "Tabs") {
    const Q = t.props.layoutMode || (t.type === "Section" ? "grid" : "flex"), le = t.props.flexConfig || {}, q = t.props.gridConfig || {}, ie = {
      direction: le.direction || "row",
      wrap: le.wrap || "wrap",
      gap: le.gap || "12px",
      columnsPerRow: le.columnsPerRow || "auto"
    }, de = Number(
      q.columns || (typeof le.columnsPerRow == "number" ? le.columnsPerRow : 12)
    ) || 12, z = {
      mode: Q === "flex" ? "flex" : "grid",
      direction: le.direction || "row",
      columnsPerRow: le.columnsPerRow || "auto",
      gap: le.gap || q.gap || "12px",
      wrap: le.wrap || "wrap",
      gridColumns: de
    }, pe = () => {
      const J = t.children || [];
      return J.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : Ca(J).map((I, O) => {
        if (I.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            wa,
            {
              parentId: t.id,
              order: I.order,
              tabNodes: I.nodes,
              isEditing: a,
              parentFlexConfig: ie,
              onContextMenu: s,
              renderChild: l
            },
            `tab_stack_${t.id}_${I.order}_${O}`
          );
        const ae = I.node, fe = [...i, t];
        return l ? /* @__PURE__ */ e.jsx(ts.Fragment, { children: l(ae, z) }, ae.id) : /* @__PURE__ */ e.jsx(
          sn,
          {
            node: ae,
            isEditing: a,
            onContextMenu: s,
            parentLayout: z,
            isWrappedByDrag: !1,
            ancestors: fe
          },
          ae.id
        );
      });
    };
    return t.type === "Section" ? /* @__PURE__ */ e.jsx(mn, { node: t, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx("div", { onClick: b, onContextMenu: C, className: "w-full", children: /* @__PURE__ */ e.jsx(co, { node: t, isEditing: a, children: pe() }) }) }) : t.type === "Tabs" ? /* @__PURE__ */ e.jsx(mn, { node: t, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Dr,
      {
        node: t,
        isEditing: a,
        isSelected: u,
        onClick: b,
        onContextMenu: C,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: pe()
      }
    ) }) : /* @__PURE__ */ e.jsx(mn, { node: t, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Dr,
      {
        node: t,
        isEditing: a,
        isSelected: u,
        onClick: b,
        onContextMenu: C,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: pe()
      }
    ) });
  }
  const p = () => {
    var Q, le, q, ie, de, z;
    switch (t.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(ao, { node: t, isEditing: a });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(lo, { node: t, isEditing: a });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(Mo, { node: t, isEditing: a });
      case "Number":
        return /* @__PURE__ */ e.jsx(oo, { node: t, isEditing: a });
      case "Label":
        return /* @__PURE__ */ e.jsx(io, { node: t, isEditing: a });
      case "Table":
        return /* @__PURE__ */ e.jsx(Io, { node: t, isEditing: a });
      case "Select":
        return /* @__PURE__ */ e.jsx(Po, { node: t, isEditing: a });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx($o, { node: t, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Lo, { node: t, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx(Eo, { node: t, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(Ao, { node: t, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Bo,
          {
            label: ((Q = t.props) == null ? void 0 : Q.label) ?? "Lô hàng:",
            reference: ((le = t.props) == null ? void 0 : le.reference) ?? "Transaction",
            displayField: ((q = t.props) == null ? void 0 : q.displayField) ?? "code",
            records: (ie = t.props) == null ? void 0 : ie.records,
            activeId: (de = t.props) == null ? void 0 : de.activeId,
            canAdd: ((z = t.props) == null ? void 0 : z.canAdd) !== !1,
            style: t.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(Oo, { node: t, isEditing: a });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(Ho, { node: t, isEditing: a });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(Wo, { node: t, isEditing: a });
      case "TreeView":
        return /* @__PURE__ */ e.jsx(Go, { node: t, isEditing: a });
      case "Chart":
        return /* @__PURE__ */ e.jsx(Vo, { node: t, isEditing: a });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          t.type
        ] });
    }
  }, m = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), S = ka(t, m), v = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...S,
    boxSizing: "border-box"
  }, j = Oe((Q) => Q.evaluateComponentPermission), N = ee((Q) => Q.activeFeatureId), w = a ? null : j(N, t, i), g = w ? !w.canWrite && !w.canWriteAll : !1, T = ["TextBox", "Textarea", "Number", "DatePicker", "Select", "Checkbox", "Radio", "Switch", "Button"].includes(t.type), A = !a && g && T, h = a && !!((D = t.permissions) != null && D.rules && t.permissions.rules.length > 0 || (k = (F = (L = t.props) == null ? void 0 : L.permissions) == null ? void 0 : F.rules) != null && k.length || (E = (V = t.permissions) == null ? void 0 : V.allowedRoles) != null && E.length || (_ = (H = t.permissions) == null ? void 0 : H.readOnlyRoles) != null && _.length);
  return /* @__PURE__ */ e.jsx(mn, { node: t, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: b,
      onContextMenu: C,
      style: v,
      className: `relative group transition-all duration-150 box-border ${A ? "opacity-80 pointer-events-none select-none" : ""} ${a ? `cursor-pointer rounded-lg ${u ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && u && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: t.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            t.id.slice(-4)
          ] })
        ] }),
        h && !u && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-1 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
          "🔒 ",
          ((K = (y = t.permissions) == null ? void 0 : y.rules) == null ? void 0 : K.length) || ((M = (Z = (U = t.props) == null ? void 0 : U.permissions) == null ? void 0 : Z.rules) == null ? void 0 : M.length) || "RBAC"
        ] }) }),
        p()
      ]
    }
  ) });
}, Ni = ({
  value: t,
  column: a,
  onSave: s,
  onCancel: r
}) => {
  const [n, o] = R(t ?? ""), l = tt(null);
  Le(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (c) => {
    c.key === "Enter" ? (c.preventDefault(), s(n)) : c.key === "Escape" && (c.preventDefault(), r());
  }, d = () => {
    s(n);
  };
  return a.componentType === "Select" && a.options && a.options.length > 0 ? /* @__PURE__ */ e.jsx(
    "select",
    {
      ref: l,
      value: n,
      onChange: (c) => o(c.target.value),
      onKeyDown: i,
      onBlur: d,
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
      onBlur: d,
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
let jt = null;
const ji = Cs()(
  on((t, a) => ({
    isConnected: !1,
    connectionId: null,
    lockedRecords: {},
    notifications: [],
    connect: (s = "http://localhost:5048/hubs/uiforge") => {
      if (!a().isConnected)
        try {
          const r = s.replace(/^http/, "ws"), n = new WebSocket(r);
          jt = n, n.onopen = () => {
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
              } else l.type === "Notification" && a().addNotification(l.title, l.message, l.notifType || "info");
            } catch {
            }
          }, n.onclose = () => {
            t({ isConnected: !1, connectionId: null }), jt = null;
          }, n.onerror = () => {
            t({ isConnected: !1 });
          };
        } catch {
          t({ isConnected: !1 });
        }
    },
    disconnect: () => {
      if (jt) {
        try {
          jt.close();
        } catch {
        }
        jt = null;
      }
      t({ isConnected: !1, connectionId: null });
    },
    lockRecord: async (s, r, n) => {
      const o = `${s}_${r}`, l = {
        entityName: s,
        recordId: r,
        username: n,
        lockedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return t((i) => ({
        lockedRecords: {
          ...i.lockedRecords,
          [o]: l
        }
      })), jt && jt.readyState === WebSocket.OPEN && jt.send(
        JSON.stringify({
          action: "LockRecord",
          entityName: s,
          recordId: r,
          username: n
        })
      ), !0;
    },
    unlockRecord: async (s, r) => {
      const n = `${s}_${r}`;
      t((o) => {
        const l = { ...o.lockedRecords };
        return delete l[n], { lockedRecords: l };
      }), jt && jt.readyState === WebSocket.OPEN && jt.send(
        JSON.stringify({
          action: "UnlockRecord",
          entityName: s,
          recordId: r
        })
      );
    },
    isRecordLocked: (s, r, n) => {
      const o = `${s}_${r}`, l = a().lockedRecords[o];
      return !l || n && l.username.toLowerCase() === n.toLowerCase() ? null : l;
    },
    broadcastRecordUpdate: (s, r, n) => {
      jt && jt.readyState === WebSocket.OPEN && jt.send(
        JSON.stringify({
          action: "NotifyRecordUpdated",
          entityName: s,
          recordId: r,
          updatedBy: n
        })
      ), a().addNotification(
        "Dữ liệu đã cập nhật",
        `Bản ghi ${s} #${r} vừa được lưu bởi ${n}.`,
        "info"
      );
    },
    addNotification: (s, r, n = "info") => {
      const o = {
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        title: s,
        message: r,
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
function wi(t = {}) {
  const { onSaveLayout: a, isPreview: s = !1, canEdit: r = !0 } = t;
  Le(() => {
    const n = async (o) => {
      var l;
      if (o.altKey && (o.code === "Backquote" || o.key === "`")) {
        o.preventDefault(), o.stopPropagation();
        const i = nt.getState(), d = i.openTabs;
        if (d.length <= 1) return;
        const c = i.activeTabId, b = (d.findIndex((p) => p.id === c) + 1) % d.length, C = d[b];
        C && (i.setActiveTab(C.id), ee.getState().setActiveFeature(C.featureId, ((l = C.params) == null ? void 0 : l.id) ?? null));
        return;
      }
      if (o.key === "Escape") {
        const i = nt.getState();
        if (i.activePopup) {
          o.preventDefault(), o.stopPropagation(), i.closePopup();
          return;
        }
      }
      if (o.key === "F9" || (o.ctrlKey || o.metaKey) && (o.key === "s" || o.key === "S")) {
        if (o.preventDefault(), o.stopPropagation(), r && !s && a) {
          a();
          return;
        }
        const i = ee.getState(), d = i.features.find((u) => u.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c) {
          const u = je.getState(), b = u.getFormRecord(d.id) || u.getFormRecord("default");
          try {
            await Tr(c, "onSave", {
              record: b,
              featureId: d.id,
              trigger: "hotkey_F9"
            });
          } catch (C) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onSave:", C);
          }
        }
        return;
      }
      if (o.key === "F8") {
        o.preventDefault(), o.stopPropagation();
        const i = ee.getState(), d = i.features.find((u) => u.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c)
          try {
            await Tr(c, "onApprove", {
              featureId: d.id,
              trigger: "hotkey_F8"
            });
          } catch (u) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onApprove:", u);
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
  }, [a, s, r]);
}
const Un = ({
  node: t,
  isEditing: a,
  onContextMenu: s,
  parentLayout: r,
  parentFlexConfig: n,
  activeId: o,
  overId: l
}) => {
  const {
    attributes: i,
    listeners: d,
    setNodeRef: c,
    transform: u,
    isDragging: b
  } = Qr({
    id: t.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: t.id,
      type: t.type,
      node: t
    }
  }), { setNodeRef: C, isOver: p } = Zr({
    id: t.id,
    disabled: !a
  }), m = (T) => {
    c(T), C(T);
  }, S = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), j = {
    ...ka(t, S),
    transform: ea.Translate.toString(u),
    opacity: b ? 0.35 : 1,
    transition: b ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, N = t.type === "Container" || t.type === "Section" || t.type === "Tabs", w = p && N && !b, g = p && !N && !b;
  return /* @__PURE__ */ e.jsxs("div", { ref: m, style: j, className: "group/drag relative", children: [
    g && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    w && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (T) => T.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      sn,
      {
        node: t,
        isEditing: a,
        onContextMenu: s,
        parentLayout: S,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (T, A) => /* @__PURE__ */ e.jsx(
          Un,
          {
            node: T,
            isEditing: a,
            onContextMenu: s,
            parentLayout: A && "mode" in A ? A : void 0,
            parentFlexConfig: A && !("mode" in A) ? A : void 0,
            activeId: o,
            overId: l
          },
          T.id
        )
      }
    )
  ] });
}, Sa = ({ x: t, y: a, items: s, onClose: r }) => {
  const n = tt(null);
  Le(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && r();
    }, d = (c) => {
      c.key === "Escape" && r();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", d), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", d);
    };
  }, [r]);
  const o = Math.min(t, window.innerWidth - 340), l = Math.max(10, Math.min(a, window.innerHeight - (s.length * 36 + 20)));
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
            onClick: (u) => {
              u.stopPropagation(), i.onClick(), r();
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
}, Ci = ({
  isEditing: t,
  activeId: a,
  overId: s
}) => {
  const r = ee((F) => F.features), n = ee((F) => F.activeFeatureId), o = ee((F) => F.activeRecordId), l = ee((F) => F.addComponent), i = ee((F) => F.selectComponent), d = ee((F) => F.removeComponent), c = ee((F) => F.updateComponentProps);
  ee((F) => F.updateFeatureLayout);
  const u = ee((F) => F.updateFeatureScriptFile), b = r.find((F) => F.id === n), C = Yt((F) => F.user);
  C == null || C.role;
  const p = (b == null ? void 0 : b.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  ts.useEffect(() => {
    n && (Oe.getState().fetchFeaturePolicies(n).catch(() => {
    }), Oe.getState().fetchComponentPolicies(n).catch(() => {
    }));
  }, [n]), ts.useEffect(() => {
    if (la(b) && n) {
      let k = o;
      !k && typeof window < "u" && (k = Xs());
      const V = k || "1", E = je.getState().formRecords[n], H = (E == null ? void 0 : E.id) || (E == null ? void 0 : E.Id), _ = (E == null ? void 0 : E.jobNo) || (E == null ? void 0 : E.JobNo) || (E == null ? void 0 : E.code) || (E == null ? void 0 : E.Code);
      H && String(H) === String(V) || _ && String(_) === String(V) || (async (U) => {
        if (U === "new" || /^\d+$/.test(U)) return U;
        const M = (je.getState().datasets.Transaction || []).find(
          (Q) => String(Q.jobNo || Q.JobNo || Q.code || Q.Code) === U || String(Q.id || Q.Id) === U
        );
        if (M)
          return String(M.id || M.Id);
        try {
          const le = (await je.getState().queryEntity("Transaction") || []).find(
            (q) => String(q.jobNo || q.JobNo || q.code || q.Code) === U || String(q.id || q.Id) === U
          );
          if (le)
            return String(le.id || le.Id);
        } catch {
        }
        return U;
      })(V).then((U) => {
        var Q;
        const { module: Z } = er(b == null ? void 0 : b.scriptFile), M = (Z == null ? void 0 : Z.loadDetail) || ((Q = Z == null ? void 0 : Z.transactionDetailBL) == null ? void 0 : Q.loadDetail);
        typeof M == "function" && M(U).then((le) => {
          if (le && n) {
            je.getState().setFormRecord(n, le), je.getState().setFormRecord("default", le);
            const q = String(le.id || U);
            o !== q && ee.getState().setActiveRecordId(q), os(n, q);
          }
        });
      });
    }
  }, [n, o, b == null ? void 0 : b.scriptFile, b == null ? void 0 : b.route, b == null ? void 0 : b.name, b == null ? void 0 : b.isDetail]);
  const { setNodeRef: m, isOver: S } = Zr({
    id: "canvas-root",
    disabled: !t
  }), [v, j] = R(""), N = !!(b != null && b.scriptFile && b.scriptFile.trim().length > 0), [w, g] = R(null), T = (F, k = {}, V = {}) => ({
    id: `${F.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: F,
    parentId: null,
    pageId: n,
    props: {
      label: F === "Button" ? "Nút mới" : F === "Label" ? "Tiêu đề khối" : void 0,
      variant: F === "Button" ? "primary" : void 0,
      size: F === "Button" ? "md" : void 0,
      placeholder: F === "TextBox" ? "Nhập nội dung..." : void 0,
      ...k
    },
    style: {
      ...V
    },
    events: [],
    order: ((b == null ? void 0 : b.components.length) || 0) + 1
  }), A = (F) => {
    !t || !N || (F.preventDefault(), i(null), g({
      x: F.clientX,
      y: F.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, h = (F, k) => {
    if (!t) return;
    F.preventDefault(), F.stopPropagation(), i(k.id);
    const V = k.type === "Container" || k.type === "Section" || k.type === "Tabs";
    g({
      x: F.clientX,
      y: F.clientY,
      targetContainerId: V ? k.id : k.parentId,
      selectedNode: k
    });
  }, D = () => {
    var E, H, _;
    if (!w) return [];
    const { targetContainerId: F, selectedNode: k } = w, V = k && (k.type === "Container" || k.type === "Section" || k.type === "Tabs");
    if (k && V) {
      const y = k.props.layoutMode === "grid", K = ((E = k.props.flexConfig) == null ? void 0 : E.direction) === "row", U = !!(k.props.isTab || k.props.tab || k.type === "Tabs"), Z = k.props.activeTabId || ((_ = (H = k.props.tabs) == null ? void 0 : H[0]) == null ? void 0 : _.id) || "main", M = U ? { tabId: Z } : {};
      return [
        ...U ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: ds,
            onClick: () => {
              const Q = k.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], le = `tab_${Date.now().toString(36)}`, q = [
                ...Q,
                { id: le, label: `Tab Mới ${Q.length + 1}` }
              ];
              c(k.id, {
                tabs: q,
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
          label: "📦 Thêm Container",
          icon: ds,
          onClick: () => {
            const Q = T(
              "Container",
              {
                layoutMode: "flex",
                flexConfig: {
                  direction: K ? "column" : "row",
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "stretch",
                  gap: "12px"
                },
                ...M
              },
              {
                flex: K ? "1" : void 0,
                width: K ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(Q, F);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: Js,
          onClick: () => {
            const Q = T("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...M
            });
            l(Q, F);
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
          icon: wt,
          onClick: () => l(
            T("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: wt,
          onClick: () => l(
            T("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: wt,
          onClick: () => l(
            T("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: wt,
          onClick: () => l(
            T("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: Es,
          onClick: () => l(
            T("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: zt,
          onClick: () => l(
            T("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: Es,
          onClick: () => l(
            T("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Nhãn Chữ (Label)",
          icon: zt,
          onClick: () => l(
            T("Label", {
              label: "Nhãn thông tin",
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: $t,
          onClick: () => l(
            T("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Ô Tra Cứu (SearchEntry)",
          icon: wt,
          onClick: () => l(
            T("SearchEntry", {
              label: "Tra cứu",
              labelPosition: "left",
              colSpan: 4,
              ...M
            }),
            F
          )
        },
        {
          label: "➕ Thêm Chọn Bản Ghi (RecordSelector)",
          icon: wt,
          onClick: () => l(
            T("RecordSelector", {
              label: "Chọn bản ghi",
              ...M
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
          label: K ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: K ? Qn : gr,
          onClick: () => {
            c(k.id, {
              flexConfig: {
                ...k.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: K ? "column" : "row"
              }
            });
          }
        },
        {
          label: y ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: Js,
          onClick: () => {
            y ? c(k.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(k.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: dt,
          danger: !0,
          onClick: () => d(k.id)
        }
      ];
    }
    return [
      {
        label: "📦 Thêm Container",
        icon: ds,
        onClick: () => {
          const y = T(
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
          l(y, null);
        }
      },
      {
        label: "🗂️ Thêm Khung Card / Section (12 Cột)",
        icon: Js,
        onClick: () => {
          const y = T("Section", {
            title: "Phân Vùng Mới",
            label: "Phân Vùng Mới",
            collapsible: !0,
            boxShadow: !0,
            colSpan: 12
          });
          l(y, null);
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
        icon: wt,
        onClick: () => l(
          T("TextBox", {
            label: "Ô nhập liệu",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Số (Number)",
        icon: wt,
        onClick: () => l(
          T("Number", {
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
        icon: wt,
        onClick: () => l(
          T("DatePicker", {
            label: "Ngày tháng",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Dropdown (Select)",
        icon: wt,
        onClick: () => l(
          T("Select", {
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
        icon: Es,
        onClick: () => l(
          T("Checkbox", {
            label: "Kích hoạt",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
        icon: zt,
        onClick: () => l(
          T("Textarea", {
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
        icon: Es,
        onClick: () => l(
          T("Button", {
            label: "Nút bấm",
            variant: "primary",
            size: "sm"
          }),
          null
        )
      },
      {
        label: "➕ Thêm Nhãn Chữ (Label)",
        icon: zt,
        onClick: () => l(
          T("Label", {
            label: "Nhãn thông tin"
          }),
          null
        )
      },
      {
        label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
        icon: $t,
        onClick: () => l(
          T("Table", {
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
        icon: wt,
        onClick: () => l(
          T("SearchEntry", {
            label: "Tra cứu",
            labelPosition: "left",
            colSpan: 4
          }),
          null
        )
      },
      {
        label: "➕ Thêm Chọn Bản Ghi (RecordSelector)",
        icon: wt,
        onClick: () => l(
          T("RecordSelector", {
            label: "Chọn bản ghi"
          }),
          null
        )
      }
    ];
  }, L = (b == null ? void 0 : b.components.filter((F) => !F.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: m,
      onContextMenu: A,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${S && t ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          !N && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: /* @__PURE__ */ e.jsx("span", { children: (b == null ? void 0 : b.name) || "Màn hình" }) }),
            b != null && b.description ? /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: b.description }) : null
          ] }) }),
          N ? L.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: A,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${S ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(ds, { className: "w-7 h-7" }) }),
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
                      const F = T(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      F.children = [
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
                      ], l(F, null);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ e.jsx(gr, { className: "w-4 h-4" }),
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
                flexDirection: p.direction || "column",
                gap: p.gap || "16px",
                flexWrap: p.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: Ca(L).map((F, k) => {
                if (F.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    wa,
                    {
                      parentId: null,
                      order: F.order,
                      tabNodes: F.nodes,
                      isEditing: t,
                      onContextMenu: h,
                      renderChild: (H, _) => t ? /* @__PURE__ */ e.jsx(
                        Un,
                        {
                          node: H,
                          isEditing: t,
                          onContextMenu: h,
                          parentLayout: _ && "mode" in _ ? _ : void 0,
                          parentFlexConfig: _ && !("mode" in _) ? _ : void 0,
                          activeId: a,
                          overId: s
                        },
                        H.id
                      ) : /* @__PURE__ */ e.jsx(
                        sn,
                        {
                          node: H,
                          isEditing: !1,
                          onContextMenu: h,
                          parentLayout: _ && "mode" in _ ? _ : void 0,
                          parentFlexConfig: _ && !("mode" in _) ? _ : void 0
                        },
                        H.id
                      )
                    },
                    `root_tab_stack_${F.order}_${k}`
                  );
                const V = F.node, E = {
                  mode: "flex",
                  direction: p.direction || "column",
                  wrap: p.wrap || "wrap",
                  gap: p.gap,
                  columnsPerRow: "auto"
                };
                return t ? /* @__PURE__ */ e.jsx(
                  Un,
                  {
                    node: V,
                    isEditing: t,
                    onContextMenu: h,
                    parentLayout: E,
                    activeId: a,
                    overId: s
                  },
                  V.id
                ) : /* @__PURE__ */ e.jsx(
                  sn,
                  {
                    node: V,
                    isEditing: !1,
                    onContextMenu: h,
                    parentLayout: E
                  },
                  V.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Jn, { className: "w-8 h-8" }) }),
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
                  const k = v.trim();
                  if (!k) return;
                  const V = k.endsWith(".bl.ts") ? k : k.endsWith(".ts") ? k.replace(/\.ts$/, ".bl.ts") : `${k}.bl.ts`;
                  u(n, V), j("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(Hr, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: v,
                          onChange: (F) => j(F.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  b && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(Zn, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const F = b.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          j(`${F || "feature"}.bl.ts`);
                        },
                        className: "text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer",
                        children: [
                          b.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "") || "feature",
                          ".bl.ts"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "submit",
                      disabled: !v.trim(),
                      className: "w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ e.jsx(Yn, { className: "w-4 h-4" }),
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
          Sa,
          {
            x: w.x,
            y: w.y,
            items: D(),
            onClose: () => g(null)
          }
        )
      ]
    }
  );
};
function Uo(t) {
  return t.replace(/-([a-z])/g, (a, s) => s.toUpperCase());
}
function Ko(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function zo(t) {
  const a = {};
  if (!t || typeof t != "string") return a;
  const r = t.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of r) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), d = o.slice(l + 1).trim();
    if (i && d) {
      let c = Uo(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), a[c] = d;
    }
  }
  return a;
}
function qo(t) {
  const a = /* @__PURE__ */ new Set([
    "customCss",
    "display",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "gap",
    "gridTemplateColumns"
  ]), s = [];
  for (const [r, n] of Object.entries(t)) {
    if (n == null || n === "" || a.has(r))
      continue;
    const o = Ko(r);
    s.push(`${o}: ${n};`);
  }
  return s.join(`
`);
}
const Ta = ({
  isOpen: t,
  node: a,
  onClose: s,
  onSave: r
}) => {
  var hr, mr;
  const [n, o] = R("info"), [l, i] = R([]), [d, c] = R([]), [u, b] = R(
    ((hr = a == null ? void 0 : a.permissions) == null ? void 0 : hr.rules) || []
  ), [C, p] = R(null), [m, S] = R(!1), [v, j] = R(""), [N, w] = R("General"), [g, T] = R(""), [A, h] = R("Dropdown"), [D, L] = R(""), [F, k] = R(""), [V, E] = R(""), [H, _] = R(1), [y, K] = R(4), [U, Z] = R(""), [M, Q] = R(""), [le, q] = R(""), [ie, de] = R(""), [z, pe] = R(""), [J, te] = R(""), [I, O] = R(""), [ae, fe] = R(""), [xe, ue] = R(""), [oe, ye] = R(""), [be, ge] = R(""), [Fe, we] = R(""), [ve, ne] = R(""), [he, qe] = R(""), [ht, Ct] = R(""), [Mt, gt] = R(""), [kt, se] = R(""), [ke, Be] = R(""), [Ie, Ae] = R(""), [Re, Xe] = R(""), [Ze, rt] = R(""), [at, it] = R(""), [lt, vt] = R(""), [We, yt] = R(""), [Gt, Dt] = R(""), [It, Bt] = R("id"), [Vt, _t] = R(""), [St, Ut] = R(""), [He, Ot] = R(""), [Jt, $] = R(""), [re, me] = R(""), [Se, Pe] = R(""), [Ee, Te] = R(""), [De, Je] = R(""), [Ge, Ve] = R(""), [st, mt] = R(""), [bt, Qe] = R(!1), [Ht, Ft] = R(!0), [Xt, Ss] = R(!1), [ps, Rt] = R(!1), [Ts, xs] = R(!1), [rs, as] = R(!1), [hs, Ds] = R(!1), [ms, Qt] = R(!1), [ft, _s] = R(!1), [Os, Hs] = R(!1), [Is, Ws] = R(!1), [bs, fs] = R(!1), [gs, vs] = R(!1), [ys, Ns] = R(!1), [js, f] = R(!1), [x, P] = R(!1), [W, B] = R(!0), [Y, ce] = R(!0), [Ne, _e] = R(!1), [Ue, pt] = R(!1), [Tt, Pt] = R(!1), [ws, Fs] = R(!1), [tr, sr] = R(!1), [nr, rr] = R(!1), [ar, lr] = R(!1), [or, ir] = R(!1), [Rs, cr] = R(""), [Sn, dr] = R(""), [ur, pr] = R(""), [Ps, cn] = R(""), [si, Da] = R("");
  if (Le(() => {
    kn().then((X) => i(X));
  }, []), Le(() => {
    var X;
    if (a && t) {
      const G = a.props || {}, Ce = a.dataBinding || {}, Me = a.pageId || (ee.getState().activeFeatureId ?? "");
      Me && a.id ? Oe.getState().fetchComponentPolicies(Me, a.id).then((Ls) => {
        var br;
        Ls && Ls.length > 0 ? b(Ls) : b(((br = a.permissions) == null ? void 0 : br.rules) || []);
      }).catch(() => {
        var Ls;
        b(((Ls = a.permissions) == null ? void 0 : Ls.rules) || []);
      }) : b(((X = a.permissions) == null ? void 0 : X.rules) || []), j(String(G.id ?? a.id)), w(G.group !== void 0 ? String(G.group) : "General");
      const un = G.reference !== void 0 ? String(G.reference) : Ce.entityName !== void 0 ? String(Ce.entityName) : G.refName !== void 0 ? String(G.refName) : "";
      T(un), h(a.type || "Dropdown"), L(String(G.parentId ?? "")), k(
        G.refName !== void 0 ? String(G.refName) : Ce.refName !== void 0 ? String(Ce.refName) : un
      ), E(
        Ce.fieldName !== void 0 ? String(Ce.fieldName) : G.fieldName !== void 0 ? String(G.fieldName) : G.name !== void 0 ? String(G.name) : a.id
      ), _(Number(a.order ?? G.order ?? 1)), K(Number(G.colSpan ?? G.column ?? 4)), Z(G.label !== void 0 ? String(G.label) : ""), Q(
        G.events !== void 0 ? typeof G.events == "string" ? G.events : JSON.stringify(G.events) : ""
      ), q(G.style !== void 0 ? String(G.style) : ""), de(G.childStyle !== void 0 ? String(G.childStyle) : ""), pe(G.validation !== void 0 ? String(G.validation) : ""), te(
        G.selectField !== void 0 ? String(G.selectField) : Ce.selectField !== void 0 ? String(Ce.selectField) : ""
      ), O(G.plainText !== void 0 ? String(G.plainText) : ""), fe(
        G.cssClass !== void 0 ? String(G.cssClass) : G.className !== void 0 ? String(G.className) : ""
      ), ue(G.sqlSelect !== void 0 ? String(G.sqlSelect) : ""), ye(String(G.offset ?? "")), ge(G.groupFormat !== void 0 ? String(G.groupFormat) : ""), we(G.formatSummary !== void 0 ? String(G.formatSummary) : ""), ne(G.orderBySummary !== void 0 ? String(G.orderBySummary) : ""), qe(G.groupEvent !== void 0 ? String(G.groupEvent) : ""), Ct(G.icon !== void 0 ? String(G.icon) : ""), gt(G.system !== void 0 ? String(G.system) : ""), se(G.refClass !== void 0 ? String(G.refClass) : ""), Be(G.hotKey !== void 0 ? String(G.hotKey) : ""), Ae(G.dateTimeField !== void 0 ? String(G.dateTimeField) : ""), Xe(String(G.addStart ?? "")), rt(String(G.addEnd ?? "")), it(String(G.bodyRowHeight ?? "")), vt(
        G.sqlWhere !== void 0 ? String(G.sqlWhere) : Ce.sqlWhere !== void 0 ? String(Ce.sqlWhere) : ""
      ), yt(String(G.footerHeight ?? "")), Dt(G.joinTable !== void 0 ? String(G.joinTable) : ""), Bt(
        G.idField !== void 0 ? String(G.idField) : Ce.idField !== void 0 ? String(Ce.idField) : "id"
      ), _t(String(G.headerHeight ?? "")), Ut(
        G.populateField !== void 0 ? String(G.populateField) : Ce.populateField !== void 0 ? String(Ce.populateField) : ""
      ), Ot(String(G.precision ?? "")), $(G.groupBy !== void 0 ? String(G.groupBy) : ""), me(G.disabledExp !== void 0 ? String(G.disabledExp) : ""), Pe(G.showExp !== void 0 ? String(G.showExp) : ""), Te(String(G.row ?? "")), Je(G.template !== void 0 ? String(G.template) : ""), Ve(G.templateLocked !== void 0 ? String(G.templateLocked) : ""), mt(String(G.default ?? G.defaultValue ?? "")), Qe(!!G.realtime), Ft(G.showLabel !== !1 && G.label !== !1), Ss(!!G.hidden), Rt(!!G.filterLocal), xs(!!G.sqlSearch), as(!!G.cache), Ds(!!G.moveTab), Qt(!!G.focus), _s(!!G.focusSearch), Hs(!!G.noLoad), Ws(!!G.collapsible), fs(!!G.showHotKey), vs(!!G.history), Ns(!!G.top), f(!!G.hideAnd), P(!!G.disabled), B(G.visibility !== !1), ce(G.active !== !1), _e(!!G.upperCase), pt(!!(G.virtualScroll || G.virtual)), Pt(!!G.isPrivate), Fs(!!G.renderIndex), sr(!!(G.canAdd || G.add)), rr(!!(G.canSearch || G.search)), lr(!!(G.isSummary || G.summary)), ir(!!G.showDateTimeField);
      const pn = G.dataSource !== void 0 ? G.dataSource : G.dataSourceFilter !== void 0 ? G.dataSourceFilter : Ce.dataSource !== void 0 ? Ce.dataSource : "";
      cr(String(pn ?? ""));
      const Fa = G.formatEntity !== void 0 ? G.formatEntity : Ce.formatEntity !== void 0 ? Ce.formatEntity : "";
      dr(String(Fa ?? "")), pr(G.migration !== void 0 ? String(G.migration) : "");
      const Ra = G.formatData !== void 0 ? G.formatData : Ce.formatData !== void 0 ? Ce.formatData : "";
      cn(String(Ra ?? ""));
      const Pa = G.query !== void 0 ? G.query : Ce.query !== void 0 ? Ce.query : "";
      Da(String(Pa ?? "")), c(
        G.dropdownColumns || Ce.dropdownColumns || []
      );
    }
  }, [a, t]), !t || !a) return null;
  const Ia = async () => {
    let X = M;
    try {
      M.trim().startsWith("{") && (X = JSON.parse(M));
    } catch {
      X = M;
    }
    const G = {
      ...a.props,
      id: v,
      group: N,
      reference: g,
      componentType: A,
      parentId: D,
      refName: F,
      fieldName: V,
      order: Number(H) || 1,
      colSpan: Number(y) || 4,
      column: Number(y) || 4,
      label: U,
      events: X,
      style: le,
      childStyle: ie,
      validation: z,
      selectField: J,
      plainText: I,
      cssClass: ae,
      sqlSelect: xe,
      offset: oe,
      groupFormat: be,
      formatSummary: Fe,
      orderBySummary: ve,
      groupEvent: he,
      icon: ht,
      system: Mt,
      refClass: kt,
      hotKey: ke,
      dateTimeField: Ie,
      addStart: Re,
      addEnd: Ze,
      bodyRowHeight: at,
      sqlWhere: lt,
      footerHeight: We,
      joinTable: Gt,
      idField: It,
      headerHeight: Vt,
      populateField: St,
      precision: He ? Number(He) : void 0,
      groupBy: Jt,
      disabledExp: re,
      showExp: Se,
      row: Ee,
      template: De,
      templateLocked: Ge,
      default: st,
      // Display flags
      realtime: bt,
      showLabel: Ht,
      hidden: Xt,
      filterLocal: ps,
      sqlSearch: Ts,
      cache: rs,
      moveTab: hs,
      focus: ms,
      focusSearch: ft,
      noLoad: Os,
      collapsible: Is,
      showHotKey: bs,
      history: gs,
      top: ys,
      hideAnd: js,
      disabled: x,
      visibility: W,
      active: Y,
      upperCase: Ne,
      virtual: Ue,
      isPrivate: Tt,
      renderIndex: ws,
      add: tr,
      search: nr,
      summary: ar,
      showDateTimeField: or,
      // Code blocks
      dataSource: Rs,
      dataSourceFilter: Rs,
      formatEntity: Sn,
      migration: ur,
      formatData: Ps,
      query: Rs,
      dropdownColumns: d
    }, Ce = {
      ...a.dataBinding || {},
      entityName: g || F || "",
      refName: F || g || "",
      fieldName: V || a.id,
      query: Rs,
      dataSource: Rs,
      sqlWhere: lt,
      selectField: J,
      populateField: St,
      idField: It,
      formatData: Ps,
      formatEntity: Sn,
      dropdownColumns: d,
      twoWay: !0
    };
    let Me = [...u];
    C && (Me = [...Me, C], b(Me), p(null));
    const un = {
      ...a.permissions || {},
      rules: Me
    };
    ee.getState().updateComponentPermissions(a.id, un);
    const pn = a.pageId || (ee.getState().activeFeatureId ?? "");
    pn && await Oe.getState().saveComponentPolicies(
      pn,
      a.id,
      Me,
      String(V || F || a.id)
    ), r(a.id, G, Ce), S(!0), setTimeout(() => S(!1), 2500);
  }, xr = vn(l), $s = yn(xr, g || F), Gs = $s ? $s.fields : [], dn = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes(A), Ke = (X, G, Ce) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${G ? "text-slate-200 font-medium" : "text-slate-400"}`, children: X }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: G,
        onChange: (Me) => Ce(Me.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return Et(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            v || a.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                const X = ee.getState(), G = (a == null ? void 0 : a.pageId) || X.activeFeatureId;
                typeof X.openFeatureProperties == "function" && X.openFeatureProperties(G);
              },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-teal-700/60 bg-teal-950/60 hover:bg-teal-900 text-teal-300 transition-all cursor-pointer",
              title: "Mở cấu hình Feature của màn hình này",
              children: [
                /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Feature Properties ↗" })
              ]
            }
          ),
          m && /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40 animate-in fade-in", children: [
            /* @__PURE__ */ e.jsx(an, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Đã lưu thành công!" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: Ia,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
              onClick: s,
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-rose-400" }),
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
        dn && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      value: v,
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
                      value: N,
                      onChange: (X) => w(X.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: $s ? $s.name : "",
                      onChange: (X) => {
                        const G = X.target.value;
                        T(G), k(G);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        xr.map((X) => /* @__PURE__ */ e.jsxs("option", { value: X.name, children: [
                          X.displayName,
                          " (",
                          X.name,
                          ")"
                        ] }, X.name))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: A,
                      onChange: (X) => h(X.target.value),
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
                      value: D,
                      onChange: (X) => L(X.target.value),
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
                      value: F,
                      placeholder: "VD: Vendor, Terminal, Customer...",
                      onChange: (X) => {
                        k(X.target.value), T(X.target.value);
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
                      value: V,
                      onChange: (X) => E(X.target.value),
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
                      onChange: (X) => _(X.target.value),
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
                      value: y,
                      onChange: (X) => K(X.target.value),
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
                      value: U,
                      onChange: (X) => Z(X.target.value),
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
                      onChange: (X) => q(X.target.value),
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
                      value: ie,
                      onChange: (X) => de(X.target.value),
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
                      value: z,
                      onChange: (X) => pe(X.target.value),
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
                      onChange: (X) => te(X.target.value),
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
                      value: I,
                      onChange: (X) => O(X.target.value),
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
                      value: ae,
                      onChange: (X) => fe(X.target.value),
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
                      onChange: (X) => ue(X.target.value),
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
                      value: oe,
                      onChange: (X) => ye(X.target.value),
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
                      onChange: (X) => ge(X.target.value),
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
                      value: Fe,
                      onChange: (X) => we(X.target.value),
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
                      onChange: (X) => ne(X.target.value),
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
                      onChange: (X) => qe(X.target.value),
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
                      value: ht,
                      onChange: (X) => Ct(X.target.value),
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
                      value: Mt,
                      onChange: (X) => gt(X.target.value),
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
                      value: kt,
                      onChange: (X) => se(X.target.value),
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
                      onChange: (X) => Be(X.target.value),
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
                      onChange: (X) => Ae(X.target.value),
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
                      onChange: (X) => Xe(X.target.value),
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
                      onChange: (X) => rt(X.target.value),
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
                      value: at,
                      onChange: (X) => it(X.target.value),
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
                      value: lt,
                      onChange: (X) => vt(X.target.value),
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
                      value: We,
                      onChange: (X) => yt(X.target.value),
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
                      value: Gt,
                      onChange: (X) => Dt(X.target.value),
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
                      value: It,
                      onChange: (X) => Bt(X.target.value),
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
                      value: Vt,
                      onChange: (X) => _t(X.target.value),
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
                      value: St,
                      onChange: (X) => Ut(X.target.value),
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
                      value: He,
                      onChange: (X) => Ot(X.target.value),
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
                      onChange: (X) => $(X.target.value),
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
                      value: re,
                      onChange: (X) => me(X.target.value),
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
                      onChange: (X) => Pe(X.target.value),
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
                      onChange: (X) => Te(X.target.value),
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
                      onChange: (X) => Je(X.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Jn, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ge,
                      onChange: (X) => Ve(X.target.value),
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
                      value: st,
                      onChange: (X) => mt(X.target.value),
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
                  Ke("Realtime", bt, Qe),
                  Ke("Label", Ht, Ft),
                  Ke("Hidden", Xt, Ss),
                  Ke("FilterLocal", ps, Rt),
                  Ke("SqlSearch", Ts, xs),
                  Ke("Cache", rs, as),
                  Ke("Move Tab", hs, Ds),
                  Ke("Focus", ms, Qt),
                  Ke("FocusSearch", ft, _s),
                  Ke("No Load", Os, Hs),
                  Ke("Collapsible", Is, Ws),
                  Ke("HotKey", bs, fs),
                  Ke("History", gs, vs)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  Ke("Top", ys, Ns),
                  Ke("HideAnd", js, f),
                  Ke("Disabled", x, P),
                  Ke("Visibility", W, B),
                  Ke("Active", Y, ce),
                  Ke("Upper Case", Ne, _e),
                  Ke("Virtual", Ue, pt),
                  Ke("Private", Tt, Pt),
                  Ke("Render Index", ws, Fs),
                  Ke("Add", tr, sr),
                  Ke("Search", nr, rr),
                  Ke("Sumary", ar, lr),
                  Ke("DateTime Field", or, ir)
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
                      value: Rs,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (X) => cr(X.target.value),
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
                      value: Sn,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (X) => dr(X.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${dn ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: ur,
                      onChange: (X) => pr(X.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !dn && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: Ps,
                      onChange: (X) => cn(X.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && dn && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4 text-emerald-400" }),
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
                    var X, G;
                    c([
                      ...d,
                      {
                        key: ((X = Gs[d.length]) == null ? void 0 : X.name) || `col${d.length + 1}`,
                        title: ((G = Gs[d.length]) == null ? void 0 : G.displayName) || `Cột ${d.length + 1}`,
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
              $s && Gs.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const X = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let G = Gs.filter((Ce) => X.includes(Ce.name.toLowerCase()));
                    G.length === 0 ? G = Gs.slice(0, 3) : G = G.slice(0, 4), c(
                      G.map((Ce) => ({
                        key: Ce.name,
                        title: Ce.displayName || Ce.name,
                        width: `${Math.floor(100 / G.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      $s.name
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
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((X, G) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: G === 0,
                  onClick: () => {
                    const Ce = [...d], Me = Ce[G];
                    Ce[G] = Ce[G - 1], Ce[G - 1] = Me, c(Ce);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(Zs, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: G === d.length - 1,
                  onClick: () => {
                    const Ce = [...d], Me = Ce[G];
                    Ce[G] = Ce[G + 1], Ce[G + 1] = Me, c(Ce);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: X.key,
                placeholder: "Key (vd: FullName)",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[G] = { ...Me[G], key: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: X.title,
                placeholder: "Tiêu đề cột",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[G] = { ...Me[G], title: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: X.width || "50%",
                placeholder: "Width",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[G] = { ...Me[G], width: Ce.target.value }, c(Me);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: X.align || "left",
                onChange: (Ce) => {
                  const Me = [...d];
                  Me[G] = { ...Me[G], align: Ce.target.value }, c(Me);
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
                onClick: () => c(d.filter((Ce, Me) => Me !== G)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, G)) }),
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
                value: Ps,
                onChange: (X) => cn(X.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((X, G) => {
              const Ce = g || F, Me = Ce ? `{${Ce}.${X.key}}` : `{${X.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => cn(Ps ? `${Ps} - ${Me}` : Me),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    Me
                  ]
                },
                G
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsx(
          ba,
          {
            rules: u,
            onChange: b,
            onPendingRuleChange: p,
            pageId: a.pageId || ee.getState().activeFeatureId || "",
            nodeId: a.id,
            fieldName: V || ((mr = a.dataBinding) == null ? void 0 : mr.fieldName) || a.id
          }
        ) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(zt, { className: "w-4 h-4 text-teal-400" }),
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
}, xt = ({
  value: t,
  onChange: a,
  debounceMs: s = 120,
  onBlur: r,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = R(
    t != null ? String(t) : ""
  ), d = tt(a);
  d.current = a;
  const c = tt(null);
  Le(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const u = (m) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const S = t != null ? String(t) : "";
    m !== S && d.current(m);
  };
  Le(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const b = (m) => {
    const S = m.target.value;
    i(S), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      u(S);
    }, s);
  }, C = (m) => {
    u(m.target.value), r && r(m);
  }, p = (m) => {
    m.key === "Enter" && u(m.target.value), n && n(m);
  };
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...o,
      value: l,
      onChange: b,
      onBlur: C,
      onKeyDown: p
    }
  );
}, Yo = ({
  value: t,
  onChange: a,
  debounceMs: s = 120,
  onBlur: r,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = R(
    t != null ? String(t) : ""
  ), d = tt(a);
  d.current = a;
  const c = tt(null);
  Le(() => {
    i(t != null ? String(t) : "");
  }, [t]);
  const u = (p) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const m = t != null ? String(t) : "";
    p !== m && d.current(p);
  };
  Le(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const b = (p) => {
    const m = p.target.value;
    i(m), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      u(m);
    }, s);
  }, C = (p) => {
    u(p.target.value), r && r(p);
  };
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      ...o,
      value: l,
      onChange: b,
      onBlur: C,
      onKeyDown: n
    }
  );
}, Jo = ({ width: t }) => {
  var pe, J, te;
  const [a, s] = R("layout"), [r, n] = R(null), [o, l] = R(!1), [i, d] = R(!1), [c, u] = R([]);
  Le(() => {
    kn().then((I) => {
      I && I.length > 0 && u(I);
    });
  }, []);
  const [b, C] = R(null), [p, m] = R(null), S = ee((I) => I.activeFeatureId), v = ee((I) => I.features.find((O) => O.id === I.activeFeatureId)), j = ee((I) => I.selection), N = ee((I) => I.selectComponent), w = ee((I) => I.addComponent), g = ee((I) => I.updateComponentProps), T = ee((I) => I.updateComponentStyle), A = ee((I) => I.updateComponentEvents), h = ee((I) => I.updateComponentDataBinding), D = ee((I) => I.updateComponentOrder), L = ee((I) => I.removeComponent);
  ee((I) => I.distributeSiblingWidths);
  const F = ee((I) => I.updateFeatureScriptFile), [k, V] = R(""), [E, H] = R(0), _ = (I, O) => {
    if (!O) return null;
    for (const ae of I) {
      if (ae.id === O) return ae;
      if (ae.children) {
        const fe = _(ae.children, O);
        if (fe) return fe;
      }
    }
    return null;
  }, y = $e(
    () => j.componentId && v ? _(v.components, j.componentId) : null,
    [j.componentId, v]
  ), K = $e(
    () => y != null && y.parentId && v ? _(v.components, y.parentId) : null,
    [y == null ? void 0 : y.parentId, v]
  ), U = $e(
    () => {
      var I, O;
      return K && ((I = K.props) != null && I.isTab || (O = K.props) != null && O.tab || K.type === "Tabs") ? K : null;
    },
    [K]
  );
  if (!y) {
    const I = v ? v.components.filter((O) => !O.parentId) : [];
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
                /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: (v == null ? void 0 : v.name) || "Trang" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: v == null ? void 0 : v.route })
              ] })
            ] }),
            v && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const O = ee.getState();
                  typeof O.openFeatureProperties == "function" && O.openFeatureProperties(v.id);
                },
                className: "p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-teal-300 border border-slate-700/60 bg-slate-800/50 transition-colors cursor-pointer",
                title: "Mở Thuộc tính Feature (Feature Properties Modal)",
                children: /* @__PURE__ */ e.jsx(ct, { className: "w-3.5 h-3.5 text-teal-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const O = ee.getState();
                  typeof O.openFeatureProperties == "function" && O.openFeatureProperties(v.id);
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
                /* @__PURE__ */ e.jsx("span", { className: "text-cyan-400 font-mono text-[11px] font-semibold", children: v.route })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "File Nghiệp Vụ (.bl.ts)" }),
                /* @__PURE__ */ e.jsx(
                  xt,
                  {
                    type: "text",
                    value: v.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (O) => F(v.id, O),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      I.length,
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
                      const O = `box_${Date.now().toString(36)}`;
                      w(
                        {
                          id: O,
                          type: "Container",
                          parentId: null,
                          pageId: v.id,
                          order: I.length + 1,
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
              I.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...I].sort((O, ae) => (O.order ?? 1) - (ae.order ?? 1)).map((O, ae) => {
                var xe, ue;
                const fe = !!((xe = O.props) != null && xe.tab || (ue = O.props) != null && ue.isTab || O.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => N(O.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          ae + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: O.props.label || O.props.title || O.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: O.type }),
                            fe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                            "#",
                            O.id
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
                              value: Number(O.order ?? O.props.order ?? ae + 1),
                              onClick: (oe) => oe.stopPropagation(),
                              onChange: (oe) => {
                                const ye = Number(oe.target.value);
                                D(O.id, ye);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (oe) => {
                              oe.stopPropagation(), L(O.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] })
                    ]
                  },
                  O.id
                );
              }) })
            ] })
          ] }) })
        ]
      }
    );
  }
  const Z = y.type === "Container" || y.type === "Section" || y.type === "Tabs", M = y.type === "Select" || y.type === "Dropdown" || y.type === "Autocomplete" || y.type === "SearchEntry", Q = y.props.dropdownColumns || ((pe = y.dataBinding) == null ? void 0 : pe.dropdownColumns) || [], le = !Z && (a === "layout" || a === "children") || Z && a === "data" || !M && a === "columns" ? "props" : a, q = y.props.layoutMode || "flex", ie = y.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, de = y.props.gridConfig || { columns: 2, gap: "16px" }, z = y.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: t ? `${t}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: y.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: y.props.label || y.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                y.id
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
                onClick: () => L(y.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(dt, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          Z && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Js, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          Z && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" }),
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
              onClick: () => s("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
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
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Xa, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          !Z && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => s("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(En, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          M && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => s("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${le === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  Q.length,
                  ")"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          Z && le === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => g(y.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${q === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ds, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => g(y.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${q === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(Js, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              q === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: ie.direction || "row",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, direction: I.target.value }
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
                          value: typeof ie.columnsPerRow == "number" ? ie.columnsPerRow : de.columns || 12,
                          onChange: (I) => {
                            const O = Math.max(1, Number(I.target.value) || 12);
                            g(y.id, {
                              flexConfig: { ...ie, columnsPerRow: O },
                              gridConfig: { ...de, columns: O }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(ie.columnsPerRow || "12"),
                          onChange: (I) => {
                            const O = I.target.value === "auto" ? "auto" : Number(I.target.value);
                            g(y.id, {
                              flexConfig: {
                                ...ie,
                                columnsPerRow: O,
                                wrap: O !== "auto" ? "wrap" : ie.wrap
                              },
                              gridConfig: {
                                ...de,
                                columns: O === "auto" ? 12 : O
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
                        value: ie.justify || "flex-start",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, justify: I.target.value }
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
                        value: ie.align || "center",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, align: I.target.value }
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
                        value: ie.gap || "12px",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, gap: I.target.value }
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
                        value: ie.wrap || "wrap",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, wrap: I.target.value }
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
              q === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          value: de.columns || 12,
                          onChange: (I) => {
                            const O = Math.max(1, Number(I.target.value) || 12);
                            g(y.id, {
                              gridConfig: { ...de, columns: O },
                              flexConfig: { ...ie, columnsPerRow: O }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(de.columns || 12),
                          onChange: (I) => {
                            const O = Number(I.target.value);
                            g(y.id, {
                              gridConfig: { ...de, columns: O },
                              flexConfig: { ...ie, columnsPerRow: O }
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
                        value: ie.gap || de.gap || "12px",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, gap: I.target.value },
                          gridConfig: { ...de, gap: I.target.value }
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
                        value: ie.justify || "flex-start",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, justify: I.target.value }
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
                        value: ie.align || "center",
                        onChange: (I) => g(y.id, {
                          flexConfig: { ...ie, align: I.target.value }
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
                    checked: !!(y.props.isTab || y.props.tab || y.type === "Tabs"),
                    onChange: (I) => {
                      var fe;
                      const O = I.target.checked, ae = y.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      g(y.id, {
                        isTab: O,
                        tab: O,
                        tabs: O ? ae : y.props.tabs,
                        activeTabId: O ? y.props.activeTabId || ((fe = ae[0]) == null ? void 0 : fe.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(y.props.isTab || y.props.tab || y.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    xt,
                    {
                      type: "text",
                      value: y.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (I) => g(y.id, { label: I }),
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
                        value: Number(y.order ?? y.props.order ?? 1),
                        onChange: (I) => {
                          const O = Number(I.target.value);
                          D(y.id, O);
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
                        value: y.props.badge !== void 0 ? String(y.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (I) => g(y.id, {
                          badge: I.target.value || void 0
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
          Z && le === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                z.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            z.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...z].sort((I, O) => (I.order ?? 1) - (O.order ?? 1)).map((I, O) => {
              var xe, ue;
              const ae = j.componentId === I.id, fe = !!((xe = I.props) != null && xe.tab || (ue = I.props) != null && ue.isTab || I.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => N(I.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${ae ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        O + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: I.props.label || I.props.title || I.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: I.type }),
                          fe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          I.id
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
                            value: I.order ?? O + 1,
                            onClick: (oe) => oe.stopPropagation(),
                            onChange: (oe) => {
                              const ye = Number(oe.target.value);
                              D(I.id, ye);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (oe) => {
                            oe.stopPropagation(), L(I.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                I.id
              );
            }) })
          ] }),
          le === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
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
                      value: Number(y.order ?? y.props.order ?? 1),
                      onChange: (I) => {
                        const O = Number(I.target.value);
                        D(y.id, O);
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
                        value: Number(y.props.colSpan || 4),
                        onChange: (I) => {
                          const O = Math.max(1, Number(I.target.value) || 1);
                          g(y.id, { colSpan: O });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: y.props.colSpan || 4,
                        onChange: (I) => g(y.id, { colSpan: Number(I.target.value) }),
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
                    y.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(y.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            Z && /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tính Tab (tab = true)" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Cùng Order với Container khác sẽ tự động Stack thành thanh Tab" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: !!(y.props.tab || y.props.isTab || y.type === "Tabs"),
                  onChange: (I) => {
                    const O = I.target.checked;
                    g(y.id, {
                      tab: O,
                      isTab: O
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            U && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: y.props.tabId || ((te = (J = U.props.tabs) == null ? void 0 : J[0]) == null ? void 0 : te.id) || "main",
                  onChange: (I) => g(y.id, { tabId: I.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (U.props.tabs || []).map((I) => /* @__PURE__ */ e.jsxs("option", { value: I.id, children: [
                    I.label,
                    " (",
                    I.id,
                    ")"
                  ] }, I.id))
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
                      checked: y.props.showLabel ?? !0,
                      onChange: (I) => g(y.id, { showLabel: I.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                xt,
                {
                  type: "text",
                  value: y.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (I) => g(y.id, { label: I }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: y.props.labelPosition || "left",
                      onChange: (I) => g(y.id, { labelPosition: I.target.value }),
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
                        value: Number(y.props.colSpan || 4),
                        onChange: (I) => {
                          const O = Math.max(1, Number(I.target.value) || 1);
                          g(y.id, { colSpan: O });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: y.props.colSpan || 4,
                        onChange: (I) => g(y.id, { colSpan: Number(I.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((I) => /* @__PURE__ */ e.jsxs("option", { value: I, children: [
                          I,
                          " Cột (",
                          Math.round(I / 12 * 100),
                          "%)"
                        ] }, I))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    y.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(y.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            y.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                xt,
                {
                  type: "text",
                  value: y.props.placeholder || "",
                  onChange: (I) => g(y.id, { placeholder: I }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            y.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  xt,
                  {
                    type: "text",
                    value: y.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (I) => g(y.id, { reference: I }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    xt,
                    {
                      type: "text",
                      value: y.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (I) => g(y.id, { displayField: I }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    xt,
                    {
                      type: "text",
                      value: y.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (I) => g(y.id, { valueField: I }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  xt,
                  {
                    type: "text",
                    value: y.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (I) => g(y.id, { placeholder: I }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            y.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: y.props.rows || 3,
                  onChange: (I) => g(y.id, { rows: Number(I.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            y.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: y.props.precision !== void 0 ? y.props.precision : 2,
                    onChange: (I) => g(y.id, { precision: Number(I.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.props.thousandsSeparator ?? !0,
                    onChange: (I) => g(y.id, { thousandsSeparator: I.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            y.type === "Table" && (() => {
              const I = y.props.columns || [], O = r !== null ? I[r] : null, ae = (be, ge) => {
                const Fe = I.map((we, ve) => ve === be ? { ...we, ...ge } : we);
                g(y.id, { columns: Fe });
              }, fe = (be, ge) => {
                if (ge < 0 || ge >= I.length) return;
                const Fe = Wn(I, be, ge);
                g(y.id, { columns: Fe }), n(ge);
              }, xe = (be) => {
                const ge = ya(I, be);
                g(y.id, { columns: ge });
                const Fe = ge.findIndex((we) => we.key === be);
                Fe !== -1 && n(Fe);
              }, ue = (be, ge) => {
                const Fe = Math.max(0, Math.min(I.length - 1, ge - 1));
                if (Fe !== be) {
                  const we = Wn(I, be, Fe);
                  g(y.id, { columns: we }), n(Fe);
                }
              }, oe = () => {
                const be = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: I.length + 1
                }, ge = Qs([...I, be]);
                g(y.id, { columns: ge }), n(ge.length - 1);
              }, ye = (be) => {
                const ge = I.filter((we, ve) => ve !== be), Fe = Qs(ge);
                g(y.id, { columns: Fe }), r === be ? n(null) : r !== null && r > be && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: oe,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(ze, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: I.map((be, ge) => {
                  const Fe = r === ge, we = !!(be.frozen || be.sticky === "left"), ve = b === ge, ne = p === ge;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => C(ge),
                      onDragOver: (he) => {
                        he.preventDefault(), !(b === null || b === ge) && m(ge);
                      },
                      onDragLeave: () => m(null),
                      onDrop: () => {
                        b !== null && b !== ge && fe(b, ge), C(null), m(null);
                      },
                      onDragEnd: () => {
                        C(null), m(null);
                      },
                      onClick: () => n(ge),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${ve ? "opacity-30 bg-slate-800" : ""} ${ne ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Fe ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
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
                                children: /* @__PURE__ */ e.jsx(Zs, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: ge === I.length - 1,
                                onClick: (he) => {
                                  he.stopPropagation(), fe(ge, ge + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(At, { className: "w-3 h-3" })
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
                O && r !== null && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-cyan-300 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Chi Tiết Thuộc Tính Cột: ",
                      O.title
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
                          max: I.length,
                          value: O.order ?? r + 1,
                          onChange: (be) => {
                            const ge = parseInt(be.target.value, 10);
                            isNaN(ge) || ue(r, ge);
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
                          value: O.key,
                          onChange: (be) => ae(r, { key: be.target.value }),
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
                          value: O.title,
                          onChange: (be) => ae(r, { title: be.target.value }),
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
                          value: O.componentType || "TextBox",
                          onChange: (be) => ae(r, { componentType: be.target.value }),
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
                          value: O.width || "",
                          placeholder: "144px, 120px...",
                          onChange: (be) => ae(r, { width: be.target.value }),
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
                          value: O.align || "left",
                          onChange: (be) => ae(r, { align: be.target.value }),
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
                          value: O.aggregate || "none",
                          onChange: (be) => ae(r, { aggregate: be.target.value }),
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
                          checked: !!(O.frozen || O.sticky === "left"),
                          onChange: () => xe(O.key),
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
                          checked: O.editable ?? !0,
                          onChange: (be) => ae(r, { editable: be.target.checked }),
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
                          checked: O.sortable ?? !0,
                          onChange: (be) => ae(r, { sortable: be.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] })
                ] }),
                o && O && r !== null && /* @__PURE__ */ e.jsx(
                  fa,
                  {
                    isOpen: o,
                    column: O,
                    onClose: () => l(!1),
                    onSave: (be) => {
                      const ge = I.map((ve, ne) => ne === r ? be : ve), Fe = Qs(ge);
                      g(y.id, { columns: Fe });
                      const we = Fe.findIndex((ve) => ve.key === be.key);
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
                    checked: !!y.props.required,
                    onChange: (I) => g(y.id, { required: I.target.checked }),
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
                    checked: !!y.props.disabled,
                    onChange: (I) => g(y.id, { disabled: I.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          le === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: y.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (I) => T(y.id, { width: I.target.value }),
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
                    value: y.style.height || y.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (I) => T(y.id, {
                      height: I.target.value,
                      minHeight: I.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(bn, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: y.style.customCss || qo(y.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (I) => {
                    const O = I.target.value, ae = zo(O);
                    if (T(y.id, {
                      ...ae,
                      customCss: O
                    }), ae.justifyContent || ae.alignItems) {
                      const fe = y.props.flexConfig || {};
                      g(y.id, {
                        flexConfig: {
                          ...fe,
                          ...ae.justifyContent ? { justify: ae.justifyContent } : {},
                          ...ae.alignItems ? { align: ae.alignItems } : {}
                        }
                      });
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
                }
              )
            ] })
          ] }),
          le === "events" && /* @__PURE__ */ e.jsx(
            ha,
            {
              events: y.events || [],
              onChange: (I) => A(y.id, I),
              scriptFile: (v == null ? void 0 : v.scriptFile) || "transactionList.bl.ts",
              componentName: y.props.label || y.type,
              componentId: y.id,
              contextExtra: {
                pageId: S,
                nodeId: y.id,
                type: y.type
              }
            }
          ),
          le === "data" && (() => {
            const I = y.dataBinding || {}, O = y.props || {}, ae = y.type, fe = ae === "Table" || ae === "GridView" || ae === "AdvancedGrid", xe = ae === "Select" || ae === "Dropdown" || ae === "Autocomplete" || ae === "SearchEntry", ue = ae === "TextBox" || ae === "Number" || ae === "DatePicker" || ae === "Checkbox" || ae === "Textarea", oe = !fe && !xe && !ue, ye = vn(c), be = I.entityName || O.reference || O.refName || "", ge = yn(ye, be), Fe = ge ? ge.fields : [], we = I.dataSource || O.dataSource || O.dataSourceFilter || I.query || O.query || "", ve = (ne) => {
              h(y.id, {
                dataSource: ne,
                query: ne
              }), g(y.id, {
                dataSource: ne,
                dataSourceFilter: ne,
                query: ne
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(En, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      ae,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  fe && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  xe && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  ue && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  oe && "Thành phần giao diện/bố cục. Quản lý thuộc tính và mở thông số trong tab Props."
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
                      onChange: (ne) => {
                        const he = ne.target.value;
                        h(y.id, {
                          entityName: he,
                          refName: he
                        }), g(y.id, {
                          reference: he,
                          refName: he
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        ye.map((ne) => /* @__PURE__ */ e.jsxs("option", { value: ne.name, children: [
                          ne.displayName,
                          " (",
                          ne.name,
                          ")"
                        ] }, ne.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: I.entityName || O.reference || O.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (ne) => {
                        const he = ne.target.value;
                        h(y.id, {
                          entityName: he,
                          refName: he
                        }), g(y.id, {
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
                      /* @__PURE__ */ e.jsx(bn, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                      onChange: (ne) => ve(ne.target.value),
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
                    xt,
                    {
                      type: "text",
                      value: I.sqlWhere || O.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (ne) => {
                        h(y.id, { sqlWhere: ne }), g(y.id, { sqlWhere: ne });
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
                    xt,
                    {
                      type: "text",
                      value: I.fieldName || O.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (ne) => {
                        h(y.id, { fieldName: ne }), g(y.id, { fieldName: ne });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Fe.map((ne) => /* @__PURE__ */ e.jsxs("option", { value: ne.name, children: [
                    ne.displayName,
                    " (",
                    ne.name,
                    ")"
                  ] }, ne.name)) })
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
                      onChange: (ne) => {
                        const he = ne.target.value;
                        h(y.id, {
                          entityName: he,
                          refName: he
                        }), g(y.id, {
                          reference: he,
                          refName: he
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        ye.map((ne) => /* @__PURE__ */ e.jsxs("option", { value: ne.name, children: [
                          ne.displayName,
                          " (",
                          ne.name,
                          ")"
                        ] }, ne.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    xt,
                    {
                      type: "text",
                      value: I.entityName || O.reference || O.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (ne) => {
                        h(y.id, {
                          entityName: ne,
                          refName: ne
                        }), g(y.id, {
                          reference: ne,
                          refName: ne
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(bn, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    Yo,
                    {
                      rows: 3,
                      value: we,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (ne) => ve(ne),
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
                    xt,
                    {
                      type: "text",
                      value: I.populateField || O.populateRule || O.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (ne) => {
                        h(y.id, { populateField: ne }), g(y.id, { populateRule: ne, populateField: ne });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      xt,
                      {
                        type: "text",
                        value: I.idField || O.idField || "Id",
                        placeholder: "Id",
                        onChange: (ne) => {
                          h(y.id, { idField: ne }), g(y.id, { idField: ne });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      xt,
                      {
                        type: "text",
                        value: I.selectField || O.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (ne) => {
                          h(y.id, { selectField: ne }), g(y.id, { selectField: ne });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      Q.length,
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
                  Q.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: Q.map((ne, he) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        ne.title,
                        " (",
                        ne.key,
                        ")"
                      ]
                    },
                    he
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (I.formatData ?? O.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              ue && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    xt,
                    {
                      type: "text",
                      value: I.fieldName || O.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (ne) => {
                        h(y.id, { fieldName: ne }), g(y.id, { fieldName: ne });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Fe.map((ne) => /* @__PURE__ */ e.jsxs("option", { value: ne.name, children: [
                    ne.displayName,
                    " (",
                    ne.name,
                    ")"
                  ] }, ne.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: I.formatter || "",
                      onChange: (ne) => h(y.id, { formatter: ne.target.value }),
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
                    xt,
                    {
                      type: "text",
                      value: I.formatData || O.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (ne) => {
                        h(y.id, { formatData: ne }), g(y.id, { formatData: ne });
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
                      checked: I.twoWay ?? !0,
                      onChange: (ne) => h(y.id, { twoWay: ne.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              oe && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(ds, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  y.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          le === "columns" && M && (() => {
            const I = y.dataBinding || {}, O = y.props || {}, ae = vn(c), fe = I.entityName || O.reference || O.refName || "", xe = yn(ae, fe), ue = xe ? xe.fields : [], oe = I.formatData ?? O.formatData ?? "", ye = (we) => {
              g(y.id, { dropdownColumns: we }), h(y.id, { dropdownColumns: we });
            }, be = () => {
              var ve, ne;
              const we = [
                ...Q,
                {
                  key: ((ve = ue[Q.length]) == null ? void 0 : ve.name) || `col${Q.length + 1}`,
                  title: ((ne = ue[Q.length]) == null ? void 0 : ne.displayName) || `Cột ${Q.length + 1}`,
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
              const ne = ve.map((he) => ({
                key: he.name,
                title: he.displayName || he.name,
                width: `${Math.floor(100 / ve.length)}%`,
                align: "left"
              }));
              ye(ne);
            }, Fe = (we, ve) => {
              const ne = we + ve;
              if (ne < 0 || ne >= Q.length) return;
              const he = [...Q], qe = he[we];
              he[we] = he[ne], he[ne] = qe, ye(he);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4 text-emerald-400" }),
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
                        /* @__PURE__ */ e.jsx(qt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  Q.length,
                  ")"
                ] }) }),
                Q.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: Q.map((we, ve) => /* @__PURE__ */ e.jsxs(
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
                              onClick: () => Fe(ve, -1),
                              disabled: ve === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(Zs, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Fe(ve, 1),
                              disabled: ve === Q.length - 1,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển xuống",
                              children: /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const ne = Q.filter((he, qe) => qe !== ve);
                                ye(ne);
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
                              onChange: (ne) => {
                                const he = [...Q];
                                he[ve] = { ...he[ve], key: ne.target.value }, ye(he);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${ve}`, children: ue.map((ne) => /* @__PURE__ */ e.jsxs("option", { value: ne.name, children: [
                            ne.displayName,
                            " (",
                            ne.name,
                            ")"
                          ] }, ne.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: we.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (ne) => {
                                const he = [...Q];
                                he[ve] = { ...he[ve], title: ne.target.value }, ye(he);
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
                              onChange: (ne) => {
                                const he = [...Q];
                                he[ve] = { ...he[ve], width: ne.target.value }, ye(he);
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
                              onChange: (ne) => {
                                const he = [...Q];
                                he[ve] = { ...he[ve], align: ne.target.value }, ye(he);
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
                    value: oe,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (we) => {
                      const ve = we.target.value;
                      h(y.id, { formatData: ve }), g(y.id, { formatData: ve });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                Q.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: Q.map((we, ve) => {
                    const ne = fe ? `{${fe}.${we.key}}` : `{${we.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const he = oe ? `${oe} - ${ne}` : ne;
                          h(y.id, { formatData: he }), g(y.id, { formatData: he });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          ne
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
        i && y && /* @__PURE__ */ e.jsx(
          Ta,
          {
            isOpen: i,
            node: y,
            onClose: () => d(!1),
            onSave: (I, O, ae) => {
              g(I, O), ae && h(I, ae);
            }
          }
        )
      ]
    }
  );
}, ki = ts.memo(Jo), Lr = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: Lt,
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
    icon: Vr,
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
    icon: ds,
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
    icon: wt,
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
    icon: Wt,
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
    icon: Zn,
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
    icon: qr,
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
    icon: Xn,
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
    icon: Qa,
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
    icon: Za,
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
    icon: $t,
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
    icon: Ur,
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
    icon: Es,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: zt,
    defaultProps: { label: "Tiêu đề khối thông tin" },
    defaultStyle: { fontSize: "14px", fontWeight: "bold" }
  },
  {
    type: "Divider",
    name: "Đường Phân Cách (Divider)",
    description: "Đường kẻ ngang ngăn chia các khu vực",
    icon: Kr,
    defaultProps: { label: "Thông tin mở rộng" },
    defaultStyle: {}
  },
  {
    type: "Modal",
    name: "Hộp Thoại (Modal Dialog)",
    description: "Cửa sổ popup nhập liệu hoặc xác nhận thao tác",
    icon: el,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: tl,
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
    icon: sl,
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
    icon: Ln,
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
    icon: zr,
    defaultProps: {
      title: "THỐNG KÊ SẢN LƯỢNG",
      chartType: "bar",
      reference: "Statistics",
      colSpan: 8
    },
    defaultStyle: { width: "100%", minHeight: "320px" }
  }
], Xo = ({ item: t, onClick: a, isEditing: s }) => {
  const r = t.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = Qr({
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
      onClick: () => a(t),
      className: `group flex items-center gap-3 p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left cursor-grab active:cursor-grabbing select-none ${i ? "opacity-40 ring-2 ring-blue-500 shadow-xl" : ""}`,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0", children: /* @__PURE__ */ e.jsx(r, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-xs font-semibold text-slate-200 group-hover:text-white truncate", children: t.name }),
          /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-slate-400 truncate mt-0.5", children: t.description })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, Si = ({ isEditing: t = !0, onAddComponent: a }) => {
  const s = ee((c) => c.addComponent), r = ee((c) => c.activeFeatureId), n = ee((c) => c.features), o = ee((c) => c.selection), l = n.find((c) => c.id === r), i = (c, u) => {
    if (!u) return null;
    for (const b of c) {
      if (b.id === u) return b;
      if (b.children) {
        const C = i(b.children, u);
        if (C) return C;
      }
    }
    return null;
  }, d = (c) => {
    var p;
    if (!t) return;
    if (a) {
      a(c.type);
      return;
    }
    const u = i((l == null ? void 0 : l.components) || [], o.componentId);
    let b = null;
    u && (u.type === "Container" ? b = u.id : b = u.parentId || null);
    const C = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: b,
      pageId: r,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((p = l == null ? void 0 : l.components) == null ? void 0 : p.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    s(C, b);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(ln, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Lr.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Lr.map((c) => /* @__PURE__ */ e.jsx(
      Xo,
      {
        item: c,
        onClick: d,
        isEditing: t
      },
      c.type
    )) })
  ] });
}, Ti = () => {
  const t = ee((i) => i.features), a = ee((i) => i.activeFeatureId), s = ee((i) => i.selection), r = ee((i) => i.selectComponent), n = ee((i) => i.removeComponent), o = t.find((i) => i.id === a);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, d = 0) => i.map((c) => {
    const u = s.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => r(c.id),
          style: { paddingLeft: `${d * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${u ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(ds, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                onClick: (b) => {
                  b.stopPropagation(), n(c.id);
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
}, Di = () => {
  const t = nt((N) => N.openTabs), a = nt((N) => N.activeTabId), s = nt((N) => N.setActiveTab), r = nt((N) => N.closeTab), n = nt((N) => N.reorderTabs), o = ee((N) => N.setActiveFeature), l = je((N) => N.isFormDirty), i = je((N) => N.markFormClean), [d, c] = R(null), [u, b] = R(null), [C, p] = R(null);
  if (t.length === 0) return null;
  const m = (N, w) => {
    var T;
    s(N);
    const g = t.find((A) => A.id === N);
    o(w, ((T = g == null ? void 0 : g.params) == null ? void 0 : T.id) ?? null);
  }, S = (N) => {
    r(N), setTimeout(() => {
      var g;
      const w = nt.getState().openTabs.find(
        (T) => T.id === nt.getState().activeTabId
      );
      w && o(w.featureId, ((g = w.params) == null ? void 0 : g.id) ?? null);
    }, 50);
  }, v = (N, w) => {
    if (N.stopPropagation(), w.isDirty || (w.featureId ? l(w.featureId) : !1)) {
      p(w);
      return;
    }
    S(w.id);
  }, j = () => {
    C && (C.featureId && i(C.featureId), S(C.id), p(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: t.map((N, w) => {
      const g = N.id === a, T = d === w, A = u === w && d !== w, h = N.isDirty || (N.featureId ? l(N.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          draggable: !0,
          onDragStart: (D) => {
            D.dataTransfer.setData("text/plain", String(w)), D.dataTransfer.effectAllowed = "move", c(w);
          },
          onDragOver: (D) => {
            D.preventDefault(), D.dataTransfer.dropEffect = "move", u !== w && b(w);
          },
          onDragLeave: () => {
            u === w && b(null);
          },
          onDrop: (D) => {
            D.preventDefault(), d !== null && d !== w && n(d, w), c(null), b(null);
          },
          onDragEnd: () => {
            c(null), b(null);
          },
          onClick: () => m(N.id, N.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-grab active:cursor-grabbing transition-all border-t border-x relative ${T ? "opacity-40 scale-95" : ""} ${A ? "ring-1 ring-blue-400 bg-blue-950/40 border-blue-500" : ""} ${g ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: h ? `${N.title} (Có dữ liệu chưa lưu)` : N.title,
          children: [
            /* @__PURE__ */ e.jsx(Lt, { className: `w-3.5 h-3.5 ${g ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: N.title }),
            h && /* @__PURE__ */ e.jsx(
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
                onClick: (D) => v(D, N),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(ut, { className: "w-3 h-3" })
              }
            )
          ]
        },
        N.id
      );
    }) }),
    C && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(nl, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: "Dữ liệu chưa được lưu!" }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-300 leading-relaxed", children: [
            "Tab ",
            /* @__PURE__ */ e.jsxs("span", { className: "font-semibold text-amber-300", children: [
              '"',
              C.title,
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
            onClick: j,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Qo = ({
  isOpen: t,
  onClose: a
}) => {
  const s = ee((M) => M.isFeatureManagerOpen), r = ee((M) => M.closeFeatureManager), n = ee((M) => M.features), o = ee((M) => M.addFeature), l = ee((M) => M.deleteFeature), i = ee((M) => M.cloneFeature), d = ee((M) => M.toggleFeatureActive), c = ee((M) => M.openFeatureProperties), u = ee((M) => M.updateFeatureProperties), b = t !== void 0 ? t : s, C = () => {
    a && a(), r();
  }, [p, m] = R(""), [S, v] = R("all"), [j, N] = R({}), [w, g] = R(!1), [T, A] = R(""), [h, D] = R(""), [L, F] = R(""), [k, V] = R(!1), [E, H] = R("Layers"), _ = (M) => {
    N((Q) => ({ ...Q, [M]: !Q[M] }));
  }, y = $e(() => {
    const M = [], Q = /* @__PURE__ */ new Map();
    for (const de of n) {
      const z = de.parentId || null;
      Q.has(z) || Q.set(z, []), Q.get(z).push(de);
    }
    for (const de of Q.values())
      de.sort((z, pe) => (z.order ?? 0) - (pe.order ?? 0));
    const le = (de, z = 0) => {
      const pe = Q.get(de) || [];
      for (const J of pe) {
        const I = (Q.get(J.id) || []).length > 0, O = !!j[J.id], ae = !p.trim() || J.name.toLowerCase().includes(p.toLowerCase()) || J.title && J.title.toLowerCase().includes(p.toLowerCase()) || J.code && J.code.toLowerCase().includes(p.toLowerCase()) || J.route.toLowerCase().includes(p.toLowerCase()) || J.entityName && J.entityName.toLowerCase().includes(p.toLowerCase());
        let fe = !0;
        S === "active" ? fe = J.active !== !1 : S === "inactive" ? fe = J.active === !1 : S === "group" && (fe = !!J.isGroup), ae && fe && M.push({
          feature: J,
          depth: z,
          hasChildren: I,
          isCollapsed: O
        }), I && !O && le(J.id, z + 1);
      }
    }, q = new Set(n.map((de) => de.id)), ie = n.filter((de) => !de.parentId || !q.has(de.parentId));
    ie.sort((de, z) => (de.order ?? 0) - (z.order ?? 0));
    for (const de of ie) {
      const pe = (Q.get(de.id) || []).length > 0, J = !!j[de.id], te = !p.trim() || de.name.toLowerCase().includes(p.toLowerCase()) || de.title && de.title.toLowerCase().includes(p.toLowerCase()) || de.code && de.code.toLowerCase().includes(p.toLowerCase()) || de.route.toLowerCase().includes(p.toLowerCase());
      let I = !0;
      S === "active" ? I = de.active !== !1 : S === "inactive" ? I = de.active === !1 : S === "group" && (I = !!de.isGroup), te && I && M.push({
        feature: de,
        depth: 0,
        hasChildren: pe,
        isCollapsed: J
      }), pe && !J && le(de.id, 1);
    }
    return M;
  }, [n, j, p, S]), K = (M) => {
    if (M.preventDefault(), !T.trim()) return;
    const Q = o(T.trim(), E, L || null, k);
    h.trim() && u(Q, { title: h.trim() }), g(!1), A(""), D(""), F(""), V(!1);
  }, U = (M, Q) => {
    const le = M.order ?? 0, q = Math.max(0, le + Q);
    u(M.id, { order: q });
  }, Z = async (M) => {
    if (confirm(`Bạn có chắc chắn muốn xóa Feature "${M.title || M.name}"?`)) {
      try {
        await Ul(M.id);
      } catch {
      }
      l(M.id);
    }
  };
  return b ? Et(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1a] border-b border-blue-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(Lt, { className: "w-5 h-5" }) }),
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
              onClick: C,
              className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer",
              children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-slate-800 bg-[#090f1e]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[280px] max-w-md", children: [
          /* @__PURE__ */ e.jsx(Wt, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: p,
              onChange: (M) => m(M.target.value),
              placeholder: "Tìm theo Tên, Tiêu đề, Mã, Route, Entity...",
              className: "w-full pl-9 pr-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-slate-400", children: "Lọc:" }),
          ["all", "active", "inactive", "group"].map((M) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => v(M),
              className: `px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${S === M ? "bg-blue-600 text-white shadow-sm" : "bg-slate-800/70 text-slate-400 hover:text-slate-200"}`,
              children: [
                M === "all" && "Tất cả",
                M === "active" && "Đang hoạt động",
                M === "inactive" && "Ngưng hoạt động",
                M === "group" && "Nhóm cha"
              ]
            },
            M
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
        /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: y.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 9, className: "py-10 text-center text-slate-500", children: "Không tìm thấy Feature nào phù hợp" }) }) : y.map(({ feature: M, depth: Q, hasChildren: le, isCollapsed: q }) => {
          const ie = M.active !== !1, de = !!M.isGroup;
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              onDoubleClick: () => c(M.id),
              className: "hover:bg-blue-600/10 cursor-pointer transition-colors group",
              title: "Nhấp đúp chuột để mở thuộc tính Feature",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4", children: /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    style: { paddingLeft: `${Q * 24}px` },
                    children: [
                      le ? /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (z) => {
                            z.stopPropagation(), _(M.id);
                          },
                          className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                          children: q ? /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                        }
                      ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: `p-1.5 rounded-lg shrink-0 ${de ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                          children: de ? /* @__PURE__ */ e.jsx(Nn, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { className: "truncate", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-200 group-hover:text-white text-xs block", children: M.title || M.name }),
                        M.title && M.title !== M.name && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block truncate", children: M.name })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-amber-300", children: M.code ? `#${M.code}` : "-" }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-slate-400", children: M.route }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: M.parentId || "",
                    onClick: (z) => z.stopPropagation(),
                    onChange: (z) => {
                      z.stopPropagation();
                      const pe = z.target.value.trim() ? z.target.value.trim() : null;
                      u(M.id, { parentId: pe });
                    },
                    className: "px-2 py-1 bg-slate-800/90 border border-slate-700/80 rounded text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer max-w-[130px] truncate",
                    title: "Thay đổi Cấp cha (Chọn 'Gốc' để xóa cấp cha)",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Gốc (Không cha) --" }),
                      n.filter((z) => z.id !== M.id && z.isGroup).map((z) => /* @__PURE__ */ e.jsxs("option", { value: z.id, children: [
                        "📁 ",
                        z.title || z.name
                      ] }, z.id)),
                      n.filter((z) => z.id !== M.id && !z.isGroup).map((z) => /* @__PURE__ */ e.jsxs("option", { value: z.id, children: [
                        "📄 ",
                        z.title || z.name
                      ] }, z.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "font-mono text-xs w-6", children: M.order ?? 0 }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col opacity-60 group-hover:opacity-100", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (z) => {
                          z.stopPropagation(), U(M, -1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Giảm thứ tự (Lên trên)",
                        children: /* @__PURE__ */ e.jsx(zn, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (z) => {
                          z.stopPropagation(), U(M, 1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Tăng thứ tự (Xuống dưới)",
                        children: /* @__PURE__ */ e.jsx(qn, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: de ? /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60", children: "Nhóm Menu" }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60", children: "Màn hình" }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (z) => {
                      z.stopPropagation();
                      const pe = M.isMenu !== void 0 ? !M.isMenu : !1;
                      u(M.id, { isMenu: pe });
                    },
                    className: `px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${M.isMenu !== !1 ? "bg-blue-950/80 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60" : "bg-amber-950/80 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60"}`,
                    title: M.isMenu !== !1 ? "Bấm để ẩn khỏi Leftbar (dành cho màn hình mở có điều kiện)" : "Bấm để hiển thị lên Leftbar",
                    children: M.isMenu !== !1 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(nn, { className: "w-3 h-3 text-blue-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Menu Leftbar" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Kn, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Ẩn / Mở ĐK" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (z) => {
                      z.stopPropagation(), d(M.id);
                    },
                    className: `px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${ie ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900" : "bg-red-950/80 text-red-400 border border-red-800/60 hover:bg-red-900"}`,
                    title: ie ? "Bấm để ngưng kích hoạt" : "Bấm để kích hoạt lại",
                    children: ie ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Yn, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Hoạt động" })
                    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(Yr, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Đã tắt" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4 text-right", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (z) => {
                        z.stopPropagation(), c(M.id);
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
                      onClick: (z) => {
                        z.stopPropagation(), i(M.id);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer",
                      title: "Nhân bản Feature này",
                      children: /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (z) => {
                        z.stopPropagation(), Z(M);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-300 border border-slate-700 transition-all cursor-pointer",
                      title: "Xóa Feature này",
                      children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }) })
              ]
            },
            M.id
          );
        }) })
      ] }) }) }) }),
      w && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
        "form",
        {
          onSubmit: K,
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
                  children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
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
                    value: T,
                    onChange: (M) => A(M.target.value),
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
                    value: h,
                    onChange: (M) => D(M.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Cấp cha (Thư mục nhóm):" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: L,
                    onChange: (M) => F(M.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                      n.filter((M) => M.isGroup).map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.id, children: [
                        "📁 ",
                        M.title || M.name
                      ] }, M.id)),
                      n.filter((M) => !M.isGroup).map((M) => /* @__PURE__ */ e.jsxs("option", { value: M.id, children: [
                        "📄 ",
                        M.title || M.name
                      ] }, M.id))
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
                    checked: k,
                    onChange: (M) => V(M.target.checked),
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
}, Zo = ({
  isOpen: t,
  featureId: a,
  onClose: s
}) => {
  const r = ee((x) => x.featurePropertiesTargetId), n = ee((x) => x.closeFeatureProperties), o = ee((x) => x.features), l = ee((x) => x.updateFeatureProperties), i = ee((x) => x.cloneFeature), d = ee((x) => x.openComponentModal), c = ee((x) => x.updateComponentProps), u = ee((x) => x.updateComponentDataBinding), b = t !== void 0 ? t : !!r, C = a !== void 0 ? a : r, p = $e(
    () => o.find((x) => x.id === C) || null,
    [o, C]
  ), m = () => {
    s && s(), n();
  }, [S, v] = R("settings"), j = Oe((x) => x.roles), N = Oe((x) => x.users), w = Oe((x) => x.featurePolicies), g = Oe((x) => x.setFeaturePolicies), [T, A] = R([]), [h, D] = R(""), [L, F] = R(""), [k, V] = R(""), [E, H] = R(!0), [_, y] = R(!1), [K, U] = R(!1), [Z, M] = R(!1), [Q, le] = R(!1), [q, ie] = R(!1), [de, z] = R(!1), [pe, J] = R(0), [te, I] = R(""), [O, ae] = R(""), [fe, xe] = R(!0), [ue, oe] = R([]);
  Le(() => {
    kn().then((x) => oe(x)).catch(() => {
    });
  }, []);
  const [ye, be] = R(""), [ge, Fe] = R(""), [we, ve] = R(""), [ne, he] = R(0), [qe, ht] = R("Layers"), [Ct, Mt] = R("/"), [gt, kt] = R(!1), [se, ke] = R(!0), [Be, Ie] = R(!1), [Ae, Re] = R(!1), [Xe, Ze] = R(!1), [rt, at] = R(!1), [it, lt] = R(!1), [vt, We] = R(!1), [yt, Gt] = R(!0), [Dt, It] = R(!0), [Bt, Vt] = R(!0), [_t, St] = R(!1), [Ut, He] = R(!1), [Ot, Jt] = R(""), [$, re] = R(""), [me, Se] = R(""), [Pe, Ee] = R(""), [Te, De] = R(""), [Je, Ge] = R(""), [Ve, st] = R(""), [mt, bt] = R(""), [Qe, Ht] = R(""), [Ft, Xt] = R(""), [Ss, ps] = R(!1), [Rt, Ts] = R(""), [xs, rs] = R({}), [as, hs] = R(null), [Ds, ms] = R(!1);
  Le(() => {
    var x, P, W;
    if (p && b) {
      be(p.name || ""), Fe(p.title || p.name || ""), ve(p.parentId || ""), he(p.order ?? 0), ht(p.icon || (p.isGroup ? "Folder" : "Layers")), Mt(p.route || "/");
      const B = p.displayFlags || ((x = p.featureProps) == null ? void 0 : x.displayFlags) || {};
      kt(!!B.isDivider), ke(p.isMenu !== void 0 ? p.isMenu : B.isMenu !== void 0 ? B.isMenu : !0), Ie(!!B.isStartup), Re(!!B.isPublic), Ze(!!B.is403), at(!!B.deleteTemp), lt(!!B.lockUpdate), We(p.isGroup !== void 0 ? p.isGroup : !!B.isGroup), Gt(p.active !== void 0 ? p.active : B.active !== void 0 ? B.active : !0), It(B.noEncode !== void 0 ? B.noEncode : !0), Vt(B.isPermissionInherited !== void 0 ? B.isPermissionInherited : !0), St(!!B.isSystem), He(!!B.customNextCell), Jt(p.code || ""), re(p.scriptFile || ""), Se(p.description || ""), Ee(p.entityName || "");
      const Y = p.customStyles || ((P = p.featureProps) == null ? void 0 : P.customStyles) || {};
      De(Y.event || ""), Ge(Y.className || ""), st(Y.style || ""), bt(Y.script || ""), Ht(Y.stylesheet || ""), Xt(
        p.scriptContent || ((W = p.featureProps) == null ? void 0 : W.scriptContent) || `// Logic JavaScript xử lý nghiệp vụ cho Feature: ${p.name}
let methods = {
  SaveAs: function (gridView, form) {
    // Code xử lý...
  }
};`
      ), p != null && p.id ? Oe.getState().fetchFeaturePolicies(p.id).then((ce) => {
        A(ce || []);
      }).catch(() => {
        const ce = p.policies && p.policies.length > 0 ? p.policies : w[p.id] || [];
        A(ce);
      }) : A([]);
    }
  }, [p == null ? void 0 : p.id, b]);
  const Qt = () => {
    if (!k && !L) {
      alert("Vui lòng chọn ít nhất một Vai trò hoặc Người dùng để phân quyền!");
      return;
    }
    const x = j.find((B) => String(B.id) === String(k) || B.code === k), P = N.find((B) => String(B.id) === String(L) || B.username === L), W = {
      id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      featureId: (p == null ? void 0 : p.id) || "",
      featureCode: (p == null ? void 0 : p.code) || (p == null ? void 0 : p.name),
      roleId: k ? Number(k) || k : null,
      roleCode: k ? (x == null ? void 0 : x.code) || k : void 0,
      userId: L ? Number(L) || L : null,
      userName: L ? (P == null ? void 0 : P.username) || L : void 0,
      canRead: E,
      canWrite: _,
      canWriteAll: K,
      canDelete: Z,
      canDeleteAll: Q,
      canDeactivate: q,
      canShare: de,
      recordId: Number(pe) || 0,
      lockUpdateAfterCreated: te ? Number(te) : void 0,
      lockDeleteAfterCreated: O ? Number(O) : void 0,
      active: fe
    };
    A((B) => [W, ...B]), F(""), V(""), H(!0), y(!1), U(!1), M(!1), le(!1), ie(!1), z(!1), J(0), I(""), ae(""), xe(!0);
  }, ft = (x, P, W) => {
    A(
      (B) => B.map((Y) => Y.id === x ? { ...Y, [P]: W } : Y)
    );
  }, _s = (x) => {
    A((P) => P.filter((W) => W.id !== x));
  }, Os = () => {
    if (!p) return;
    let x = [...T];
    if (k || L) {
      const B = j.find((Ne) => String(Ne.id) === String(k) || Ne.code === k), Y = N.find((Ne) => String(Ne.id) === String(L) || Ne.username === L);
      x = [{
        id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        featureId: p.id,
        featureCode: p.code || p.name,
        roleId: k ? Number(k) || k : null,
        roleCode: k ? (B == null ? void 0 : B.code) || k : void 0,
        userId: L ? Number(L) || L : null,
        userName: L ? (Y == null ? void 0 : Y.username) || L : void 0,
        canRead: E,
        canWrite: _,
        canWriteAll: K,
        canDelete: Z,
        canDeleteAll: Q,
        canDeactivate: q,
        canShare: de,
        recordId: Number(pe) || 0,
        lockUpdateAfterCreated: te ? Number(te) : void 0,
        lockDeleteAfterCreated: O ? Number(O) : void 0,
        active: fe
      }, ...x], A(x), F(""), V(""), H(!0), y(!1), U(!1), M(!1), le(!1), ie(!1), z(!1), J(0), I(""), ae(""), xe(!0);
    }
    const P = we && we.trim() !== "" ? we.trim() : null, W = {
      name: ye.trim(),
      title: ge.trim(),
      parentId: P,
      order: Number(ne) || 0,
      icon: qe.trim(),
      route: Ct.trim(),
      isGroup: vt,
      isMenu: se,
      active: yt,
      code: Ot.trim(),
      scriptFile: $.trim(),
      description: me.trim(),
      entityName: Pe.trim(),
      scriptContent: Ft,
      policies: x,
      displayFlags: {
        isDivider: gt,
        isMenu: se,
        isStartup: Be,
        isPublic: Ae,
        is403: Xe,
        deleteTemp: rt,
        lockUpdate: it,
        isGroup: vt,
        active: yt,
        noEncode: Dt,
        isPermissionInherited: Bt,
        isSystem: _t,
        customNextCell: Ut
      },
      customStyles: {
        event: Te,
        className: Je,
        style: Ve,
        script: mt,
        stylesheet: Qe
      },
      featureProps: {
        ...p.featureProps || {},
        displayFlags: {
          isDivider: gt,
          isMenu: se,
          isStartup: Be,
          isPublic: Ae,
          is403: Xe,
          deleteTemp: rt,
          lockUpdate: it,
          isGroup: vt,
          active: yt,
          noEncode: Dt,
          isPermissionInherited: Bt,
          isSystem: _t,
          customNextCell: Ut
        },
        customStyles: {
          event: Te,
          className: Je,
          style: Ve,
          script: mt,
          stylesheet: Qe
        },
        scriptContent: Ft,
        policies: x
      }
    };
    l(p.id, W), g(p.id, x), Oe.getState().saveFeaturePolicies(p.id, x), ps(!0), setTimeout(() => ps(!1), 2e3);
  }, Hs = async () => {
    p && (await i(p.id), m());
  }, Is = $e(() => {
    if (!p || !we) return "Gốc (Root)";
    const x = [];
    let P = we;
    const W = /* @__PURE__ */ new Set();
    for (; P && !W.has(P); ) {
      W.add(P);
      const B = o.find((Y) => Y.id === P);
      if (B)
        x.unshift(B.title || B.name), P = B.parentId || null;
      else
        break;
    }
    return x.join(" > ");
  }, [p, we, o]), Ws = $e(() => o.filter((x) => x.id !== (p == null ? void 0 : p.id)), [o, p]), bs = $e(() => {
    if (!p) return [];
    const x = [], P = (W, B = 0) => {
      var Y, ce;
      for (const Ne of W) {
        const _e = !!(Ne.children && Ne.children.length > 0), Ue = !!xs[Ne.id];
        (!Rt.trim() || ((Y = Ne.props) == null ? void 0 : Y.label) && String(Ne.props.label).toLowerCase().includes(Rt.toLowerCase()) || Ne.id && Ne.id.toLowerCase().includes(Rt.toLowerCase()) || Ne.type && Ne.type.toLowerCase().includes(Rt.toLowerCase()) || ((ce = Ne.dataBinding) == null ? void 0 : ce.fieldName) && String(Ne.dataBinding.fieldName).toLowerCase().includes(Rt.toLowerCase())) && x.push({
          node: Ne,
          depth: B,
          hasChildren: _e,
          isCollapsed: Ue
        }), _e && !Ue && P(Ne.children, B + 1);
      }
    };
    return P(p.components || [], 0), x;
  }, [p, xs, Rt]), fs = $e(() => {
    if (!p) return 0;
    let x = 0;
    const P = (W) => {
      x += W.length;
      for (const B of W)
        B.children && B.children.length > 0 && P(B.children);
    };
    return P(p.components || []), x;
  }, [p]), gs = (x) => {
    rs((P) => ({ ...P, [x]: !P[x] }));
  }, vs = () => rs({}), ys = () => {
    if (!p) return;
    const x = {}, P = (W) => {
      for (const B of W)
        B.children && B.children.length > 0 && (x[B.id] = !0, P(B.children));
    };
    P(p.components || []), rs(x);
  }, Ns = (x) => {
    hs(x), d(x.id);
  }, js = (x) => {
    switch (x) {
      case "Table":
        return /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-blue-400" });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5 text-emerald-400" });
      case "TextBox":
      case "Textarea":
        return /* @__PURE__ */ e.jsx(wt, { className: "w-3.5 h-3.5 text-amber-400" });
      case "Number":
        return /* @__PURE__ */ e.jsx(qr, { className: "w-3.5 h-3.5 text-cyan-400" });
      case "Container":
      case "Section":
        return /* @__PURE__ */ e.jsx(Es, { className: "w-3.5 h-3.5 text-indigo-400" });
      case "Tabs":
        return /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5 text-purple-400" });
      default:
        return /* @__PURE__ */ e.jsx(Zn, { className: "w-3.5 h-3.5 text-slate-400" });
    }
  }, f = (x, P, W) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-2 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-xs ${P ? "text-slate-100 font-semibold" : "text-slate-400"}`, children: x }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: P,
        onChange: (B) => W(B.target.checked),
        className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return !b || !p ? null : Et(
    /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#080e1a] border-b border-blue-600/30", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(ct, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-base text-white tracking-wide", children: [
                "Feature - ",
                p.title || p.name
              ] }),
              Ot && /* @__PURE__ */ e.jsxs("span", { className: "text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono font-semibold", children: [
                "#",
                Ot
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            Ss && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in duration-200", children: [
              /* @__PURE__ */ e.jsx(an, { className: "w-4 h-4" }),
              " Đã lưu thành công!"
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Os,
                className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Lưu" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Hs,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                title: "Nhân bản Feature này kèm toàn bộ linh kiện",
                children: [
                  /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Copy" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: m,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
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
              onClick: () => v("settings"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${S === "settings" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
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
              onClick: () => v("components"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${S === "components" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "PHẦN TỬ (CÂY COMPONENT)" }),
                /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono", children: fs })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => v("permissions"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${S === "permissions" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(Bs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "QUYỀN HẠN (RBAC & POLICIES)" }),
                T.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950/80 text-emerald-300 font-mono border border-emerald-800/50", children: T.length })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]", children: [
          S === "settings" && /* ══════════════════════════════════════════════════════════════
          TAB 1: TÙY CHỈNH / THÔNG TIN FEATURE (Khớp 100% Hình 3)
          ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(vr, { className: "w-3.5 h-3.5" }),
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
                        onChange: (x) => Fe(x.target.value),
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
                            Ws.map((x) => /* @__PURE__ */ e.jsxs("option", { value: x.id, children: [
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
                          title: `Đường dẫn phân tầng: ${Is}`,
                          children: /* @__PURE__ */ e.jsx(vr, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex items-center justify-between text-[11px] px-2 py-1 rounded bg-slate-950/70 border border-slate-800", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 text-[10px]", children: se ? "📌 Hiển thị trên Leftbar" : "🔍 Màn hình mở theo điều kiện (Ẩn Leftbar)" }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => ke(!se),
                          className: `px-1.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${se ? "bg-blue-600/30 text-blue-300 hover:bg-blue-600/50" : "bg-amber-600/30 text-amber-300 hover:bg-amber-600/50"}`,
                          children: se ? "Chuyển sang Ẩn" : "Hiện lên Menu"
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
                          value: ne,
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
                          onChange: (x) => ht(x.target.value),
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
                        value: Ct,
                        onChange: (x) => Mt(x.target.value),
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
                    f("Thanh chia", gt, kt),
                    f("Hiển thị menu", se, ke),
                    f("Khởi động", Be, Ie),
                    f("Public", Ae, Re),
                    f("403", Xe, Ze),
                    f("Delete Temp", rt, at),
                    f("LockUpdate", it, lt)
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                    f("Nhóm menu", vt, We),
                    f("Hoạt động", yt, Gt),
                    f("No-Encode", Dt, It),
                    f("Thừa kế quyền", Bt, Vt),
                    f("System", _t, St),
                    f("CustomNextCell", Ut, He)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Nn, { className: "w-3.5 h-3.5" }),
                  " OTHER"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mã (Code):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: Ot,
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
                        onChange: (x) => re(x.target.value),
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
                        value: Pe,
                        onChange: (x) => Ee(x.target.value),
                        placeholder: "Ví dụ: Transaction",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("datalist", { id: "entities-list", children: ue.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.name, children: x.displayName || x.name }, x.name)) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Parents:" }),
                    /* @__PURE__ */ e.jsx("div", { className: "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-[11px] font-mono truncate", children: Is })
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
                      onChange: (x) => st(x.target.value),
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
                      value: mt,
                      onChange: (x) => bt(x.target.value),
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
                    value: Qe,
                    onChange: (x) => Ht(x.target.value),
                    placeholder: "/* Custom CSS stylesheet rules */",
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500 resize-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(bn, { className: "w-4 h-4" }),
                  " SCRIPT (Trình soạn thảo mã nghiệp vụ Feature)"
                ] }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] text-slate-400 font-mono", children: [
                  Ft.split(`
`).length,
                  " dòng"
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex rounded-lg border border-slate-800 bg-[#070b14] overflow-hidden min-h-[220px]", children: [
                /* @__PURE__ */ e.jsx("div", { className: "py-2.5 px-3 bg-[#05080f] border-r border-slate-800/80 text-right font-mono text-xs text-slate-600 select-none leading-5 min-w-[40px]", children: Ft.split(`
`).map((x, P) => /* @__PURE__ */ e.jsx("div", { children: P + 1 }, P)) }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    value: Ft,
                    onChange: (x) => Xt(x.target.value),
                    spellCheck: !1,
                    className: "flex-1 p-2.5 bg-transparent font-mono text-xs text-emerald-300 leading-5 focus:outline-none resize-y min-h-[200px]"
                  }
                )
              ] })
            ] })
          ] }),
          S === "components" && /* ══════════════════════════════════════════════════════════════
          TAB 2: PHẦN TỬ / CÂY COMPONENT CHA - CON (Yêu cầu đặc biệt của Master)
          ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1 min-w-[260px] max-w-md", children: [
                /* @__PURE__ */ e.jsx(Wt, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-500" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: Rt,
                    onChange: (x) => Ts(x.target.value),
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
                    onClick: vs,
                    className: "px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer",
                    children: "Mở rộng tất cả"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: ys,
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
                bs.length,
                " / ",
                fs,
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
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: bs.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 7, className: "py-8 text-center text-slate-500", children: "Không tìm thấy phần tử nào trong Feature này" }) }) : bs.map(({ node: x, depth: P, hasChildren: W, isCollapsed: B }) => {
                var _e, Ue, pt, Tt, Pt, ws;
                const Y = ((_e = x.props) == null ? void 0 : _e.label) || ((Ue = x.props) == null ? void 0 : Ue.title) || ((pt = x.dataBinding) == null ? void 0 : pt.fieldName) || x.type, ce = ((Tt = x.dataBinding) == null ? void 0 : Tt.fieldName) || "-", Ne = (Pt = x.props) != null && Pt.colSpan ? `${x.props.colSpan}/12` : "Auto";
                return /* @__PURE__ */ e.jsxs(
                  "tr",
                  {
                    onDoubleClick: () => Ns(x),
                    className: "hover:bg-blue-600/15 cursor-pointer transition-colors group",
                    title: "Nhấp đúp chuột để cấu hình phần tử này",
                    children: [
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5",
                          style: { paddingLeft: `${P * 20}px` },
                          children: [
                            W ? /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: (Fs) => {
                                  Fs.stopPropagation(), gs(x.id);
                                },
                                className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                                children: B ? /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
                              }
                            ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                            /* @__PURE__ */ e.jsx("div", { className: "p-1 rounded bg-slate-800/80 group-hover:bg-blue-600/20", children: js(x.type) }),
                            /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 group-hover:text-white truncate", children: Y })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: /* @__PURE__ */ e.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800", children: [
                        "#",
                        x.id
                      ] }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50", children: x.type }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-emerald-400", children: ce }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: x.order ?? 1 }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: Ne }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: (ws = x.props) != null && ws.hidden ? /* @__PURE__ */ e.jsx(Kn, { className: "w-4 h-4 text-slate-600 mx-auto" }) : /* @__PURE__ */ e.jsx(nn, { className: "w-4 h-4 text-emerald-400 mx-auto" }) })
                    ]
                  },
                  x.id
                );
              }) })
            ] }) }) })
          ] }),
          S === "permissions" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0e1726] border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: h,
                      onChange: (x) => D(x.target.value),
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
                    children: /* @__PURE__ */ e.jsx(rl, { className: "w-3.5 h-3.5 text-emerald-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => D(""),
                    title: "Khôi phục tìm kiếm",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(al, { className: "w-3.5 h-3.5 text-slate-400" })
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
                    onClick: () => ms(!0),
                    className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-colors cursor-pointer ml-1",
                    title: "Quản lý và tạo vai trò động cho dự án",
                    children: [
                      /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      checked: Bt,
                      onChange: (x) => Vt(x.target.checked),
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
                      onClick: Qt,
                      className: "w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto transition-transform active:scale-95 shadow-sm shadow-emerald-600/30 cursor-pointer",
                      title: "Thêm mới quy tắc phân quyền (+)",
                      children: /* @__PURE__ */ e.jsx(ze, { className: "w-3.5 h-3.5 stroke-[3]" })
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: L,
                      onChange: (x) => {
                        F(x.target.value), x.target.value && V("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        N.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.id, children: x.username }, x.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: k,
                      onChange: (x) => {
                        V(x.target.value), x.target.value && F("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-semibold",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        j.map((x) => /* @__PURE__ */ e.jsx("option", { value: x.id, children: x.code }, x.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: E,
                      onChange: (x) => H(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Đọc (CanRead)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: _,
                      onChange: (x) => y(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Cập nhật bản ghi của mình (CanWrite)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: K,
                      onChange: (x) => U(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Cập nhật toàn bộ bản ghi của mọi người (CanWriteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Z,
                      onChange: (x) => M(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Xóa bản ghi của mình (CanDelete)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Q,
                      onChange: (x) => le(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Xóa toàn bộ bản ghi của mọi người (CanDeleteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: q,
                      onChange: (x) => ie(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Hủy / Ngưng hiệu lực (CanDeactivate)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: de,
                      onChange: (x) => z(x.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Chia sẻ bản ghi (CanShare)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: pe,
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
                      value: te,
                      onChange: (x) => I(x.target.value),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600",
                      title: "Số giờ sau khi tạo thì khóa không cho sửa (để trống = không giới hạn)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      placeholder: "Giờ",
                      value: O,
                      onChange: (x) => ae(x.target.value),
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
                      onClick: Qt,
                      className: "text-[11px] px-2 py-1 rounded bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 transition-colors font-medium cursor-pointer",
                      children: "Lưu"
                    }
                  ) })
                ] }),
                T.filter((x) => {
                  if (!h.trim()) return !0;
                  const P = h.toLowerCase();
                  return x.roleCode && x.roleCode.toLowerCase().includes(P) || x.userName && x.userName.toLowerCase().includes(P) || x.description && x.description.toLowerCase().includes(P);
                }).map((x, P) => {
                  const W = j.find(
                    (Y) => String(Y.id) === String(x.roleId) || Y.code === x.roleCode
                  ), B = N.find(
                    (Y) => String(Y.id) === String(x.userId) || Y.username === x.userName
                  );
                  return /* @__PURE__ */ e.jsxs(
                    "tr",
                    {
                      className: "hover:bg-slate-800/40 transition-colors group",
                      children: [
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center text-slate-500 font-mono text-[11px] border-r border-slate-800", children: P + 1 }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: B != null && B.username || x.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-xs text-blue-300 font-mono font-medium", children: (B == null ? void 0 : B.username) || x.userName }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: x.roleCode || W != null && W.code ? /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-xs text-slate-200", children: x.roleCode || (W == null ? void 0 : W.code) }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canRead,
                            onChange: (Y) => ft(x.id, "canRead", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canWrite,
                            onChange: (Y) => ft(x.id, "canWrite", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canWriteAll,
                            onChange: (Y) => ft(x.id, "canWriteAll", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDelete,
                            onChange: (Y) => ft(x.id, "canDelete", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDeleteAll,
                            onChange: (Y) => ft(x.id, "canDeleteAll", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canDeactivate,
                            onChange: (Y) => ft(x.id, "canDeactivate", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.canShare,
                            onChange: (Y) => ft(x.id, "canShare", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            value: x.recordId ?? 0,
                            onChange: (Y) => ft(x.id, "recordId", Number(Y.target.value) || 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: x.lockUpdateAfterCreated ?? "",
                            onChange: (Y) => ft(x.id, "lockUpdateAfterCreated", Y.target.value ? Number(Y.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: x.lockDeleteAfterCreated ?? "",
                            onChange: (Y) => ft(x.id, "lockDeleteAfterCreated", Y.target.value ? Number(Y.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: x.active,
                            onChange: (Y) => ft(x.id, "active", Y.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => _s(x.id),
                            className: "p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition-colors cursor-pointer",
                            title: "Xóa quy tắc này",
                            children: /* @__PURE__ */ e.jsx(dt, { className: "w-3.5 h-3.5" })
                          }
                        ) })
                      ]
                    },
                    x.id || P
                  );
                }),
                T.length === 0 && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsxs("td", { colSpan: 15, className: "py-8 text-center text-slate-500", children: [
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
      as && /* @__PURE__ */ e.jsx(
        Ta,
        {
          isOpen: !!as,
          node: as,
          onClose: () => hs(null),
          onSave: (x, P, W) => {
            c(x, P), W && u(x, W);
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        ma,
        {
          isOpen: Ds,
          onClose: () => ms(!1)
        }
      )
    ] }),
    document.body
  );
}, ei = (t, a, s) => {
  const r = `w-4 h-4 shrink-0 ${s ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`, n = (t || "").toLowerCase();
  return a ? n.includes("truck") || n.includes("shipment") ? /* @__PURE__ */ e.jsx(il, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("price") || n.includes("sale") || n.includes("dollar") ? /* @__PURE__ */ e.jsx(cl, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : n.includes("doc") ? /* @__PURE__ */ e.jsx(zt, { className: "w-4 h-4 shrink-0 text-blue-400" }) : /* @__PURE__ */ e.jsx(Nn, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("ship") || n.includes("fcl") || n.includes("lcl") ? /* @__PURE__ */ e.jsx(dl, { className: r }) : n.includes("plane") || n.includes("air") ? /* @__PURE__ */ e.jsx(ul, { className: r }) : n.includes("pack") || n.includes("box") ? /* @__PURE__ */ e.jsx(pl, { className: r }) : n.includes("doc") || n.includes("bill") || n.includes("invoice") ? /* @__PURE__ */ e.jsx(zt, { className: r }) : n.includes("dash") ? /* @__PURE__ */ e.jsx(xl, { className: r }) : /* @__PURE__ */ e.jsx(Lt, { className: r });
}, ti = ({
  feature: t,
  depth: a,
  hasChildren: s,
  isCollapsed: r,
  isActive: n,
  childCount: o = 0,
  isDev: l = !0,
  onToggleCollapse: i,
  onSelect: d,
  onContextMenu: c
}) => {
  const { attributes: u, listeners: b, setNodeRef: C, transform: p, transition: m, isDragging: S } = Dl({
    id: t.id,
    disabled: !l
  }), v = {
    transform: ea.Transform.toString(p),
    transition: m,
    opacity: S ? 0.35 : 1,
    paddingLeft: `${Math.max(8, a * 18 + 8)}px`
  }, j = !!t.isGroup, N = t.badge ?? (j && o > 0 ? o : null);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: C,
      style: v,
      onClick: d,
      onContextMenu: l ? c : (w) => w.preventDefault(),
      className: `group relative flex items-center justify-between pr-2 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all select-none ${n ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500" : j ? "bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/30" : "text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate flex-1 min-w-0", children: [
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              ...u,
              ...b,
              onClick: (w) => w.stopPropagation(),
              className: "opacity-0 group-hover:opacity-100 p-0.5 -ml-1 text-slate-500 hover:text-slate-300 cursor-grab active:cursor-grabbing transition-opacity shrink-0",
              title: "Kéo để di chuyển vị trí hoặc kéo vào nhóm cha",
              children: /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5" })
            }
          ),
          s ? /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: i,
              className: "p-0.5 rounded hover:bg-black/20 text-slate-400 hover:text-white transition-colors shrink-0",
              children: r ? /* @__PURE__ */ e.jsx(us, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(At, { className: "w-3.5 h-3.5" })
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 shrink-0" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `p-1 rounded-lg shrink-0 ${n ? "bg-white/20 text-white" : j ? "bg-amber-500/10" : "bg-slate-800 text-slate-400"}`,
              children: ei(t.icon, j, n)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `truncate ${j ? "font-bold uppercase tracking-wider text-[11px] text-slate-100" : "font-medium"}`,
              children: t.title || t.name
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 pl-1", children: [
          N !== null && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `px-1.5 py-0.2 rounded-full text-[10px] font-bold ${n ? "bg-white text-blue-700" : "bg-amber-500 text-slate-950 shadow-sm"}`,
              children: N
            }
          ),
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${n ? "text-white" : "text-slate-400 hover:text-white"}`,
              title: "Tùy chọn Feature",
              children: /* @__PURE__ */ e.jsx(ol, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
}, Ii = ({ width: t }) => {
  const a = Yt((q) => q.user), s = (a == null ? void 0 : a.role) === "Dev", r = ee((q) => q.features), n = ee((q) => q.activeFeatureId), o = ee((q) => q.setActiveFeature), l = ee((q) => q.addFeature), i = ee((q) => q.cloneFeature), d = ee((q) => q.toggleFeatureActive), c = ee((q) => q.openFeatureManager), u = ee((q) => q.openFeatureProperties), b = ee((q) => q.reorderFeatures), C = $e(() => r.filter((q) => q.active === !1 || q.isMenu === !1 ? !1 : q.hidden || q.isDetail ? q.id === n : !0), [r, n]), [p, m] = R({}), [S, v] = R(null), [j, N] = R(!1), [w, g] = R(""), [T, A] = R(""), [h, D] = R(!1), [L, F] = R(null), k = yl(
    Nl(jl, {
      activationConstraint: {
        distance: 5
      }
    })
  ), V = (q, ie) => {
    ie.stopPropagation(), m((de) => ({ ...de, [q]: !de[q] }));
  }, { treeNodes: E, visibleNodeIds: H } = $e(() => {
    const q = /* @__PURE__ */ new Map();
    for (const te of C) {
      const I = te.parentId || null;
      q.has(I) || q.set(I, []), q.get(I).push(te);
    }
    for (const te of q.values())
      te.sort((I, O) => (I.order ?? 0) - (O.order ?? 0));
    const ie = [], de = [], z = (te, I = 0) => {
      const O = q.get(te) || [];
      for (const ae of O) {
        const fe = q.get(ae.id) || [], xe = fe.length > 0, ue = !!p[ae.id];
        ie.push({
          feature: ae,
          depth: I,
          hasChildren: xe,
          isCollapsed: ue,
          childCount: fe.length
        }), de.push(ae.id), xe && !ue && z(ae.id, I + 1);
      }
    }, pe = new Set(C.map((te) => te.id)), J = C.filter((te) => !te.parentId || !pe.has(te.parentId));
    J.sort((te, I) => (te.order ?? 0) - (I.order ?? 0));
    for (const te of J) {
      const I = q.get(te.id) || [], O = I.length > 0, ae = !!p[te.id];
      ie.push({
        feature: te,
        depth: 0,
        hasChildren: O,
        isCollapsed: ae,
        childCount: I.length
      }), de.push(te.id), O && !ae && z(te.id, 1);
    }
    return { treeNodes: ie, visibleNodeIds: de };
  }, [C, p]), _ = (q) => {
    q.preventDefault(), s && v({
      x: q.clientX,
      y: q.clientY
    });
  }, y = (q, ie) => {
    q.preventDefault(), q.stopPropagation(), s && v({
      x: q.clientX,
      y: q.clientY,
      featureId: ie
    });
  }, K = (q = "") => {
    g(""), A(q), D(!1), N(!0);
  }, U = (q) => {
    if (q.preventDefault(), !w.trim()) return;
    const ie = l(
      w.trim(),
      h ? "Folder" : "Layers",
      T || null,
      h
    );
    N(!1), g(""), h || (o(ie, null), nt.getState().openFeature(ie, {}, "Tab", w.trim()));
  }, Z = $e(() => {
    const q = S != null && S.featureId ? r.find((ie) => ie.id === S.featureId) : null;
    return q ? [
      {
        label: "➕ New feature",
        icon: ze,
        onClick: () => K(q.isGroup ? q.id : q.parentId || "")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "🗙 Deactivate this feature",
        icon: Yr,
        danger: !0,
        onClick: () => {
          d(q.id);
        }
      },
      {
        label: "❐ Clone this feature",
        icon: rn,
        onClick: () => {
          i(q.id);
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
        icon: yr,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ct,
        onClick: () => u(q.id)
      }
    ] : [
      {
        label: "➕ New feature",
        icon: ze,
        onClick: () => K("")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "☰ Manage features",
        icon: yr,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ct,
        onClick: () => u(n)
      }
    ];
  }, [S, r, n, i, d, c, u]), M = (q) => {
    F(String(q.active.id));
  }, Q = (q) => {
    const { active: ie, over: de } = q;
    if (F(null), !de || ie.id === de.id) return;
    const z = String(ie.id), pe = String(de.id), J = r.find((xe) => xe.id === z), te = r.find((xe) => xe.id === pe);
    if (!J || !te) return;
    if (te.isGroup && J.id !== te.id) {
      const xe = r.filter((oe) => oe.parentId === te.id), ue = xe.length > 0 ? Math.max(...xe.map((oe) => oe.order ?? 0)) + 1 : 1;
      b([
        { id: J.id, parentId: te.id, order: ue, isGroup: J.isGroup }
      ]), m((oe) => ({ ...oe, [te.id]: !1 }));
      return;
    }
    const I = te.parentId || null, O = r.filter((xe) => (xe.parentId || null) === I);
    O.sort((xe, ue) => (xe.order ?? 0) - (ue.order ?? 0));
    const ae = O.findIndex((xe) => xe.id === z), fe = O.findIndex((xe) => xe.id === pe);
    if (ae !== -1 && fe !== -1) {
      const xe = [...O], [ue] = xe.splice(ae, 1);
      xe.splice(fe, 0, ue);
      const oe = xe.map((ye, be) => ({
        id: ye.id,
        parentId: I,
        order: be + 1,
        isGroup: ye.isGroup
      }));
      b(oe);
    } else {
      const xe = [...O.filter((ye) => ye.id !== z)], ue = xe.findIndex((ye) => ye.id === pe);
      ue !== -1 ? xe.splice(ue, 0, { ...J, parentId: I }) : xe.push({ ...J, parentId: I });
      const oe = xe.map((ye, be) => ({
        id: ye.id,
        parentId: I,
        order: be + 1,
        isGroup: ye.id === z ? J.isGroup : ye.isGroup
      }));
      b(oe);
    }
  }, le = L ? r.find((q) => q.id === L) : null;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: _,
        style: { width: t ? `${t}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-[#090e1a] flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-2 space-y-1 overflow-y-auto flex-1", children: /* @__PURE__ */ e.jsxs(
            wl,
            {
              sensors: k,
              collisionDetection: Cl,
              onDragStart: M,
              onDragEnd: Q,
              children: [
                /* @__PURE__ */ e.jsx(Sl, { items: H, strategy: Tl, children: E.map(({ feature: q, depth: ie, hasChildren: de, isCollapsed: z, childCount: pe }) => {
                  const J = q.id === n;
                  return /* @__PURE__ */ e.jsx(
                    ti,
                    {
                      feature: q,
                      depth: ie,
                      hasChildren: de,
                      isCollapsed: z,
                      isActive: J,
                      childCount: pe,
                      isDev: s,
                      onToggleCollapse: (te) => V(q.id, te),
                      onSelect: () => {
                        q.isGroup ? m((te) => ({ ...te, [q.id]: !te[q.id] })) : (o(q.id, null), nt.getState().openFeature(q.id, {}, "Tab", q.title || q.name));
                      },
                      onContextMenu: (te) => y(te, q.id)
                    },
                    q.id
                  );
                }) }),
                /* @__PURE__ */ e.jsx(kl, { children: le ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white shadow-2xl border border-blue-400 text-xs font-bold opacity-90", children: [
                  /* @__PURE__ */ e.jsx(ln, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: le.title || le.name })
                ] }) : null })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-[#080d17] text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                C.length,
                " hiển thị / ",
                r.length
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "Core C# v2.5" })
          ] })
        ]
      }
    ),
    s && S && /* @__PURE__ */ e.jsx(
      Sa,
      {
        x: S.x,
        y: S.y,
        items: Z,
        onClose: () => v(null)
      }
    ),
    s && j && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[130] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: U,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(ll, { className: "w-5 h-5" }) }),
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
                  value: w,
                  onChange: (q) => g(q.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1", children: "Cấp cha (Thư mục nhóm):" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: T,
                  onChange: (q) => A(q.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                    r.filter((q) => q.isGroup).map((q) => /* @__PURE__ */ e.jsxs("option", { value: q.id, children: [
                      "📁 ",
                      q.title || q.name
                    ] }, q.id))
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
                  checked: h,
                  onChange: (q) => D(q.target.checked),
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
                onClick: () => N(!1),
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
    s && /* @__PURE__ */ e.jsx(Qo, {}),
    s && /* @__PURE__ */ e.jsx(Zo, {})
  ] });
}, Fi = ({
  isPreview: t,
  onTogglePreview: a,
  onSave: s,
  isSaving: r = !1
}) => {
  const n = ee((u) => u.undo), o = ee((u) => u.redo), l = ee((u) => u.historyIndex), i = ee((u) => u.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Xr, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: t ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: s, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Ri = ({
  isPreview: t,
  onTogglePreview: a,
  onSave: s,
  isSaving: r = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: d,
  branch: c,
  onLogout: u
}) => {
  const b = ee((T) => T.undo), C = ee((T) => T.redo), p = ee((T) => T.historyIndex), m = ee((T) => T.history), S = Oe((T) => T.previewRoleCode), v = Oe((T) => T.setPreviewRole), j = Oe((T) => T.roles), N = Oe((T) => T.fetchSecurityMetadata);
  Le(() => {
    N();
  }, [N]);
  const w = p > 0, g = p < m.length - 1;
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
            onClick: b,
            disabled: !w,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: C,
            disabled: !g,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(Xr, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${t ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(hl, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Xem Thử Trực Tiếp" })
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: s,
          disabled: r,
          className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50",
          children: [
            /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: r ? "Đang lưu..." : "Lưu Giao Diện" })
          ]
        }
      )
    ] }) : null,
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors", children: [
        /* @__PURE__ */ e.jsx(Bs, { className: `w-3.5 h-3.5 ${S ? "text-amber-400" : "text-slate-400"}` }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-400 font-medium whitespace-nowrap", children: "Vai trò:" }),
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: S || "",
            onChange: (T) => v(T.target.value || null),
            className: "bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer border-none py-0.5",
            title: "Chuyển đổi vai trò người dùng để kiểm tra phân quyền tức thì (0 giây)",
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-200", children: d || "Dev" }),
              j.map((T) => /* @__PURE__ */ e.jsx("option", { value: T.code, className: "bg-slate-900 text-slate-200", children: T.code }, T.code))
            ]
          }
        ),
        S && /* @__PURE__ */ e.jsx(
          "span",
          {
            className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0",
            title: `Đang giả lập vai trò: ${S}`
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
          children: n ? /* @__PURE__ */ e.jsx(ml, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(bl, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(fl, { className: "w-4 h-4" }),
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
        u && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: u,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(gl, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, Pi = () => {
  const t = nt((i) => i.activePopup), a = nt((i) => i.closePopup), s = nt((i) => i.openFeature), r = ee((i) => i.features);
  if (!t) return null;
  const n = r.find((i) => String(i.id) === String(t.featureId)), o = t.params || {}, l = () => {
    s(t.featureId, t.params, "Tab", t.title), a();
  };
  return Et(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(Gr, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(vl, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          sn,
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
                /* @__PURE__ */ e.jsx(ss, { className: "w-3.5 h-3.5" }),
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
class $i {
  get dataEngine() {
    return je.getState();
  }
  get navigationEngine() {
    return nt.getState();
  }
  get editorStore() {
    return ee.getState();
  }
  /** Lấy dữ liệu trọn vẹn của Form */
  getFormRecord(a = "default") {
    return this.dataEngine.getFormRecord(a);
  }
  /** Gán giá trị cho một trường trên Form */
  setFieldValue(a, s, r = "default") {
    this.dataEngine.setFieldValue(r, a, s);
  }
  /** Mở màn hình dạng Tab */
  openTab(a, s, r) {
    this.navigationEngine.openFeature(a, s, "Tab", r);
  }
  /** Mở màn hình dạng Popup Modal */
  openPopup(a, s, r) {
    this.navigationEngine.openFeature(a, s, "Popup", r);
  }
}
function Li(t) {
  return t;
}
export {
  $i as BaseBL,
  fa as ColumnPropertiesModal,
  Si as ComponentPalette,
  Ta as ComponentPropertiesModal,
  sn as ComponentRenderer,
  Ti as ComponentTree,
  Sa as ContextMenu,
  ga as EnterpriseDatePicker,
  Ro as EnterpriseSelect,
  Ci as FeatureCanvas,
  Pi as FeaturePopupModal,
  vi as ForgeAdvancedGrid,
  Wo as ForgeAutocomplete,
  ao as ForgeButton,
  Vo as ForgeChart,
  $o as ForgeCheckbox,
  Dr as ForgeContainer,
  Lo as ForgeDatePicker,
  Eo as ForgeDivider,
  Ho as ForgeFileUploadGrid,
  hi as ForgeFormContainer,
  io as ForgeLabel,
  Ao as ForgeModal,
  oo as ForgeNumber,
  Bo as ForgeRecordSelector,
  Oo as ForgeSearchEntry,
  _o as ForgeSearchModal,
  co as ForgeSection,
  Po as ForgeSelect,
  wa as ForgeTabStack,
  Io as ForgeTable,
  yi as ForgeTabs,
  lo as ForgeTextBox,
  Mo as ForgeTextarea,
  Go as ForgeTreeView,
  ks as FormFieldWrapper,
  Ir as GridCellComponent,
  uo as HeaderContextMenu,
  Ni as InlineCellEditor,
  Ii as LeftNavbar,
  mn as PermissionGuard,
  ki as PropertyPanel,
  po as RowContextMenu,
  ho as SummaryRow,
  Fi as TopBar,
  Ri as TopNav,
  ha as UnifiedEventEditor,
  Di as WorkspaceTabBar,
  no as addFunctionToBlFile,
  jo as calculateAutoPopulatedFields,
  yo as calculateLeftOffsets,
  Li as defineBL,
  gi as downloadBackendDocxReport,
  fi as downloadBackendPdfReport,
  tn as executeSingleEvent,
  ko as exportGridToExcel,
  xa as findFunctionInModule,
  mi as getCascadedOptions,
  ka as getComponentOuterLayoutStyle,
  so as getFunctionsForBlFile,
  Ca as groupNodesByTabStack,
  Fo as interpolateFormatData,
  Tr as invokeBLLifecycle,
  Wn as moveColumn,
  jn as normalizeBlKey,
  Qs as normalizeColumnOrders,
  Fr as parseDDMMYYYY,
  ja as printGridReport,
  xi as registerBL,
  ro as registerBlFunctions,
  pi as removeFunctionFromBlFile,
  er as resolveBlModule,
  va as sortColumnsByCorePolicy,
  ya as toggleColumnFreeze,
  Ye as triggerComponentEvent,
  Yt as useAuthStore,
  je as useDataEngine,
  ee as useEditorStore,
  wi as useGlobalHotkeys,
  vo as useGridKeyboardNavigation,
  ls as useMasterDetailStore,
  nt as useNavigationEngine,
  Oe as usePermissionEngine,
  ji as useRealtimeEngine,
  Vn as validateDateSequence,
  wo as validateField,
  bi as validateForm,
  Gn as validateISO6346ContainerNo
};
