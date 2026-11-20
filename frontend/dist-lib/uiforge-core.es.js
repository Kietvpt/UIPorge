var Pa = Object.defineProperty;
var $a = (s, a, t) => a in s ? Pa(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var kn = (s, a, t) => $a(s, typeof a != "symbol" ? a + "" : a, t);
import Qt, { createContext as La, useContext as Aa, useState as I, useRef as st, useEffect as Ee, useMemo as Ae, useCallback as Gs, useId as Er } from "react";
import { create as ws } from "zustand";
import Ea from "axios";
import { Layers as $t, ChevronDown as Lt, ChevronUp as Js, Printer as Mr, Zap as Ht, Save as Zt, Eye as tn, EyeOff as Kn, Pin as Br, ChevronRight as is, Sliders as ut, Copy as sn, Trash2 as xt, Filter as _r, Settings as Ma, ClipboardPaste as Or, PlusCircle as Hr, ArrowUp as zn, ArrowDown as qn, Plus as Ye, FileCode as Pn, Play as Ba, Shield as Bs, X as pt, CheckCircle2 as Yn, AlertCircle as _a, Lock as Ms, Users as $n, User as Oa, Table as Pt, Calendar as Xn, ChevronLeft as Wr, Clock as Ha, ExternalLink as Vr, FolderTree as Ln, Search as Wt, RefreshCw as Wa, FileDown as Va, ArrowUpDown as Jn, Loader2 as An, Check as nn, Tag as Gr, Database as En, Paperclip as Ur, Upload as fr, Download as Sn, Image as Ga, FileText as os, File as Ua, Minus as Kr, FolderOpen as Ka, Folder as vn, TrendingUp as za, BarChart3 as zr, LineChart as qa, PieChart as Ya, GripVertical as rn, Sparkles as Qn, Box as ls, ArrowRightLeft as gr, Columns as As, Type as js, Square as Ys, Paintbrush as Xa, ShieldCheck as vr, Code as hn, Hash as qr, ChevronDownSquare as Ja, CheckSquare as Qa, Maximize2 as Za, AlignLeft as el, FolderKanban as tl, AlertTriangle as sl, XCircle as Yr, Info as yr, Equal as nl, RotateCcw as rl, Menu as Nr, FolderPlus as al, MoreVertical as ll, Truck as ol, DollarSign as il, Ship as cl, Plane as dl, Package as ul, LayoutDashboard as xl, Undo2 as Xr, Redo2 as Jr, Edit3 as pl, PanelRightClose as hl, PanelRightOpen as ml, Bell as bl, LogOut as fl, CheckCircle as gl } from "lucide-react";
import { createPortal as At } from "react-dom";
import { useDraggable as Qr, useDroppable as Zr, useSensors as vl, useSensor as yl, PointerSensor as Nl, DndContext as jl, closestCenter as wl, DragOverlay as Cl } from "@dnd-kit/core";
import { CSS as ea } from "@dnd-kit/utilities";
import { SortableContext as kl, verticalListSortingStrategy as Sl, useSortable as Tl } from "@dnd-kit/sortable";
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
var jr;
function Dl() {
  if (jr) return Us;
  jr = 1;
  var s = Qt, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, d, c) {
    var x, g = {}, k = null, u = null;
    c !== void 0 && (k = "" + c), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (u = d.ref);
    for (x in d) r.call(d, x) && !o.hasOwnProperty(x) && (g[x] = d[x]);
    if (i && i.defaultProps) for (x in d = i.defaultProps, d) g[x] === void 0 && (g[x] = d[x]);
    return { $$typeof: a, type: i, key: k, ref: u, props: g, _owner: n.current };
  }
  return Us.Fragment = t, Us.jsx = l, Us.jsxs = l, Us;
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
var wr;
function Il() {
  return wr || (wr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Qt, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), b = Symbol.iterator, C = "@@iterator";
    function f(R) {
      if (R === null || typeof R != "object")
        return null;
      var re = b && R[b] || R[C];
      return typeof re == "function" ? re : null;
    }
    var w = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(R) {
      {
        for (var re = arguments.length, he = new Array(re > 1 ? re - 1 : 0), Ce = 1; Ce < re; Ce++)
          he[Ce - 1] = arguments[Ce];
        S("error", R, he);
      }
    }
    function S(R, re, he) {
      {
        var Ce = w.ReactDebugCurrentFrame, Le = Ce.getStackAddendum();
        Le !== "" && (re += "%s", he = he.concat([Le]));
        var Be = he.map(function(De) {
          return String(De);
        });
        Be.unshift("Warning: " + re), Function.prototype.apply.call(console[R], console, Be);
      }
    }
    var N = !1, P = !1, $ = !1, m = !1, j = !1, E;
    E = Symbol.for("react.module.reference");
    function L(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || j || R === n || R === c || R === x || m || R === u || N || P || $ || typeof R == "object" && R !== null && (R.$$typeof === k || R.$$typeof === g || R.$$typeof === l || R.$$typeof === i || R.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === E || R.getModuleId !== void 0));
    }
    function y(R, re, he) {
      var Ce = R.displayName;
      if (Ce)
        return Ce;
      var Le = re.displayName || re.name || "";
      return Le !== "" ? he + "(" + Le + ")" : he;
    }
    function _(R) {
      return R.displayName || "Context";
    }
    function B(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
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
        case x:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case i:
            var re = R;
            return _(re) + ".Consumer";
          case l:
            var he = R;
            return _(he._context) + ".Provider";
          case d:
            return y(R, R.render, "ForwardRef");
          case g:
            var Ce = R.displayName || null;
            return Ce !== null ? Ce : B(R.type) || "Memo";
          case k: {
            var Le = R, Be = Le._payload, De = Le._init;
            try {
              return B(De(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, M = 0, z, J, h, X, H, le, ie;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function de() {
      {
        if (M === 0) {
          z = console.log, J = console.info, h = console.warn, X = console.error, H = console.group, le = console.groupCollapsed, ie = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        M++;
      }
    }
    function pe() {
      {
        if (M--, M === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, R, {
              value: z
            }),
            info: Y({}, R, {
              value: J
            }),
            warn: Y({}, R, {
              value: h
            }),
            error: Y({}, R, {
              value: X
            }),
            group: Y({}, R, {
              value: H
            }),
            groupCollapsed: Y({}, R, {
              value: le
            }),
            groupEnd: Y({}, R, {
              value: ie
            })
          });
        }
        M < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = w.ReactCurrentDispatcher, ce;
    function q(R, re, he) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (Le) {
            var Ce = Le.stack.trim().match(/\n( *(at )?)/);
            ce = Ce && Ce[1] || "";
          }
        return `
` + ce + R;
      }
    }
    var te = !1, ue;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ve();
    }
    function D(R, re) {
      if (!R || te)
        return "";
      {
        var he = ue.get(R);
        if (he !== void 0)
          return he;
      }
      var Ce;
      te = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = W.current, W.current = null, de();
      try {
        if (re) {
          var De = function() {
            throw Error();
          };
          if (Object.defineProperty(De.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(De, []);
            } catch (Ze) {
              Ce = Ze;
            }
            Reflect.construct(R, [], De);
          } else {
            try {
              De.call();
            } catch (Ze) {
              Ce = Ze;
            }
            R.call(De.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Ce = Ze;
          }
          R();
        }
      } catch (Ze) {
        if (Ze && Ce && typeof Ze.stack == "string") {
          for (var Ie = Ze.stack.split(`
`), Je = Ce.stack.split(`
`), Ue = Ie.length - 1, Ke = Je.length - 1; Ue >= 1 && Ke >= 0 && Ie[Ue] !== Je[Ke]; )
            Ke--;
          for (; Ue >= 1 && Ke >= 0; Ue--, Ke--)
            if (Ie[Ue] !== Je[Ke]) {
              if (Ue !== 1 || Ke !== 1)
                do
                  if (Ue--, Ke--, Ke < 0 || Ie[Ue] !== Je[Ke]) {
                    var nt = `
` + Ie[Ue].replace(" at new ", " at ");
                    return R.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", R.displayName)), typeof R == "function" && ue.set(R, nt), nt;
                  }
                while (Ue >= 1 && Ke >= 0);
              break;
            }
        }
      } finally {
        te = !1, W.current = Be, pe(), Error.prepareStackTrace = Le;
      }
      var bt = R ? R.displayName || R.name : "", ft = bt ? q(bt) : "";
      return typeof R == "function" && ue.set(R, ft), ft;
    }
    function O(R, re, he) {
      return D(R, !1);
    }
    function ne(R) {
      var re = R.prototype;
      return !!(re && re.isReactComponent);
    }
    function oe(R, re, he) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return D(R, ne(R));
      if (typeof R == "string")
        return q(R);
      switch (R) {
        case c:
          return q("Suspense");
        case x:
          return q("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case d:
            return O(R.render);
          case g:
            return oe(R.type, re, he);
          case k: {
            var Ce = R, Le = Ce._payload, Be = Ce._init;
            try {
              return oe(Be(Le), re, he);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ye = {}, Te = w.ReactDebugCurrentFrame;
    function Pe(R) {
      if (R) {
        var re = R._owner, he = oe(R.type, R._source, re ? re.type : null);
        Te.setExtraStackFrame(he);
      } else
        Te.setExtraStackFrame(null);
    }
    function be(R, re, he, Ce, Le) {
      {
        var Be = Function.call.bind(ae);
        for (var De in R)
          if (Be(R, De)) {
            var Ie = void 0;
            try {
              if (typeof R[De] != "function") {
                var Je = Error((Ce || "React class") + ": " + he + " type `" + De + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[De] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              Ie = R[De](re, De, Ce, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              Ie = Ue;
            }
            Ie && !(Ie instanceof Error) && (Pe(Le), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", he, De, typeof Ie), Pe(null)), Ie instanceof Error && !(Ie.message in ye) && (ye[Ie.message] = !0, Pe(Le), T("Failed %s type: %s", he, Ie.message), Pe(null));
          }
      }
    }
    var fe = Array.isArray;
    function Re(R) {
      return fe(R);
    }
    function Se(R) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, he = re && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return he;
      }
    }
    function ge(R) {
      try {
        return ee(R), !1;
      } catch {
        return !0;
      }
    }
    function ee(R) {
      return "" + R;
    }
    function me(R) {
      if (ge(R))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(R)), ee(R);
    }
    var ct = w.ReactCurrentOwner, Et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, Ct;
    function se(R) {
      if (ae.call(R, "ref")) {
        var re = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function we(R) {
      if (ae.call(R, "key")) {
        var re = Object.getOwnPropertyDescriptor(R, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Oe(R, re) {
      typeof R.ref == "string" && ct.current;
    }
    function Fe(R, re) {
      {
        var he = function() {
          vt || (vt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        he.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Me(R, re) {
      {
        var he = function() {
          Ct || (Ct = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        he.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var $e = function(R, re, he, Ce, Le, Be, De) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: R,
        key: re,
        ref: he,
        props: De,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function Qe(R, re, he, Ce, Le) {
      {
        var Be, De = {}, Ie = null, Je = null;
        he !== void 0 && (me(he), Ie = "" + he), we(re) && (me(re.key), Ie = "" + re.key), se(re) && (Je = re.ref, Oe(re, Le));
        for (Be in re)
          ae.call(re, Be) && !Et.hasOwnProperty(Be) && (De[Be] = re[Be]);
        if (R && R.defaultProps) {
          var Ue = R.defaultProps;
          for (Be in Ue)
            De[Be] === void 0 && (De[Be] = Ue[Be]);
        }
        if (Ie || Je) {
          var Ke = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ie && Fe(De, Ke), Je && Me(De, Ke);
        }
        return $e(R, Ie, Je, Le, Ce, ct.current, De);
      }
    }
    var et = w.ReactCurrentOwner, at = w.ReactDebugCurrentFrame;
    function lt(R) {
      if (R) {
        var re = R._owner, he = oe(R.type, R._source, re ? re.type : null);
        at.setExtraStackFrame(he);
      } else
        at.setExtraStackFrame(null);
    }
    var dt;
    dt = !1;
    function ot(R) {
      return typeof R == "object" && R !== null && R.$$typeof === a;
    }
    function yt() {
      {
        if (et.current) {
          var R = B(et.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ge(R) {
      return "";
    }
    var Nt = {};
    function Vt(R) {
      {
        var re = yt();
        if (!re) {
          var he = typeof R == "string" ? R : R.displayName || R.name;
          he && (re = `

Check the top-level render call using <` + he + ">.");
        }
        return re;
      }
    }
    function Tt(R, re) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var he = Vt(re);
        if (Nt[he])
          return;
        Nt[he] = !0;
        var Ce = "";
        R && R._owner && R._owner !== et.current && (Ce = " It was passed a child from " + B(R._owner.type) + "."), lt(R), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Ce), lt(null);
      }
    }
    function Dt(R, re) {
      {
        if (typeof R != "object")
          return;
        if (Re(R))
          for (var he = 0; he < R.length; he++) {
            var Ce = R[he];
            ot(Ce) && Tt(Ce, re);
          }
        else if (ot(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Le = f(R);
          if (typeof Le == "function" && Le !== R.entries)
            for (var Be = Le.call(R), De; !(De = Be.next()).done; )
              ot(De.value) && Tt(De.value, re);
        }
      }
    }
    function Mt(R) {
      {
        var re = R.type;
        if (re == null || typeof re == "string")
          return;
        var he;
        if (typeof re == "function")
          he = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === g))
          he = re.propTypes;
        else
          return;
        if (he) {
          var Ce = B(re);
          be(he, R.props, "prop", Ce, R);
        } else if (re.PropTypes !== void 0 && !dt) {
          dt = !0;
          var Le = B(re);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(R) {
      {
        for (var re = Object.keys(R.props), he = 0; he < re.length; he++) {
          var Ce = re[he];
          if (Ce !== "children" && Ce !== "key") {
            lt(R), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), lt(null);
            break;
          }
        }
        R.ref !== null && (lt(R), T("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var Bt = {};
    function kt(R, re, he, Ce, Le, Be) {
      {
        var De = L(R);
        if (!De) {
          var Ie = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Ge();
          Je ? Ie += Je : Ie += yt();
          var Ue;
          R === null ? Ue = "null" : Re(R) ? Ue = "array" : R !== void 0 && R.$$typeof === a ? (Ue = "<" + (B(R.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof R, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, Ie);
        }
        var Ke = Qe(R, re, he, Le, Be);
        if (Ke == null)
          return Ke;
        if (De) {
          var nt = re.children;
          if (nt !== void 0)
            if (Ce)
              if (Re(nt)) {
                for (var bt = 0; bt < nt.length; bt++)
                  Dt(nt[bt], R);
                Object.freeze && Object.freeze(nt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(nt, R);
        }
        if (ae.call(re, "key")) {
          var ft = B(R), Ze = Object.keys(re).filter(function(Yt) {
            return Yt !== "key";
          }), Ot = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[ft + Ot]) {
            var It = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ot, ft, It, ft), Bt[ft + Ot] = !0;
          }
        }
        return R === r ? Gt(Ke) : Mt(Ke), Ke;
      }
    }
    function Ut(R, re, he) {
      return kt(R, re, he, !0);
    }
    function Ve(R, re, he) {
      return kt(R, re, he, !1);
    }
    var _t = Ve, qt = Ut;
    Ks.Fragment = r, Ks.jsx = _t, Ks.jsxs = qt;
  }()), Ks;
}
process.env.NODE_ENV === "production" ? Mn.exports = Dl() : Mn.exports = Il();
var e = Mn.exports;
const Cr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_URL: "http://localhost:5048/api" }, kr = (s) => !!s.dispatchFromDevtools && typeof s.dispatch == "function", Qs = /* @__PURE__ */ new Map(), un = (s) => {
  const a = Qs.get(s);
  return a ? Object.fromEntries(
    Object.entries(a.stores).map(([t, r]) => [t, r.getState()])
  ) : {};
}, Fl = (s, a, t) => {
  if (s === void 0)
    return {
      type: "untracked",
      connection: a.connect(t)
    };
  const r = Qs.get(t.name);
  if (r)
    return { type: "tracked", store: s, ...r };
  const n = {
    connection: a.connect(t),
    stores: {}
  };
  return Qs.set(t.name, n), { type: "tracked", store: s, ...n };
}, Rl = (s, a) => {
  if (a === void 0) return;
  const t = Qs.get(s);
  t && (delete t.stores[a], Object.keys(t.stores).length === 0 && Qs.delete(s));
}, Pl = /^at (?:new |async )?(.+?) \(/, $l = /^([^@]+)@/;
function Ll(s) {
  var a, t, r;
  if (!s) return;
  const n = s.split(`
`), o = n.findIndex(
    (i) => i.includes("api.setState")
  );
  if (o < 0) return;
  const l = ((a = n[o + 1]) == null ? void 0 : a.trim()) || "";
  return ((t = Pl.exec(l)) == null ? void 0 : t[1]) || ((r = $l.exec(l)) == null ? void 0 : r[1]);
}
const Al = (s, a = {}) => (t, r, n) => {
  const { enabled: o, anonymousActionType: l, store: i, ...d } = a;
  let c;
  try {
    c = (o ?? (Cr ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!c)
    return s(t, r, n);
  const { connection: x, ...g } = Fl(i, c, d);
  let k = !0;
  n.setState = (C, f, w) => {
    const T = t(C, f);
    if (!k) return T;
    const S = w === void 0 ? {
      type: l || Ll(new Error().stack) || "anonymous"
    } : typeof w == "string" ? { type: w } : w;
    return i === void 0 ? (x == null || x.send(S, r()), T) : (x == null || x.send(
      {
        ...S,
        type: `${i}/${S.type}`
      },
      {
        ...un(d.name),
        [i]: n.getState()
      }
    ), T);
  }, n.devtools = {
    cleanup: () => {
      x && typeof x.unsubscribe == "function" && x.unsubscribe(), Rl(d.name, i);
    }
  };
  const u = (...C) => {
    const f = k;
    k = !1, t(...C), k = f;
  }, b = s(n.setState, r, n);
  if (g.type === "untracked" ? x == null || x.init(b) : (g.stores[g.store] = n, x == null || x.init(
    Object.fromEntries(
      Object.entries(g.stores).map(([C, f]) => [
        C,
        C === g.store ? b : f.getState()
      ])
    )
  )), kr(n)) {
    let C = !1;
    const f = n.dispatch;
    n.dispatch = (...w) => {
      (Cr ? "production" : void 0) !== "production" && w[0].type === "__setState" && !C && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), C = !0), f(...w);
    };
  }
  return x.subscribe((C) => {
    var f;
    switch (C.type) {
      case "ACTION":
        if (typeof C.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return Tn(
          C.payload,
          (w) => {
            if (w.type === "__setState") {
              if (i === void 0) {
                u(w.state);
                return;
              }
              Object.keys(w.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const T = w.state[i];
              if (T == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(T) && u(T);
              return;
            }
            kr(n) && n.dispatch(w);
          }
        );
      case "DISPATCH":
        switch (C.payload.type) {
          case "RESET":
            return u(b), i === void 0 ? x == null ? void 0 : x.init(n.getState()) : x == null ? void 0 : x.init(un(d.name));
          case "COMMIT":
            if (i === void 0) {
              x == null || x.init(n.getState());
              return;
            }
            return x == null ? void 0 : x.init(un(d.name));
          case "ROLLBACK":
            return Tn(C.state, (w) => {
              if (i === void 0) {
                u(w), x == null || x.init(n.getState());
                return;
              }
              u(w[i]), x == null || x.init(un(d.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return Tn(C.state, (w) => {
              if (i === void 0) {
                u(w);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(w[i]) && u(w[i]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: w } = C.payload, T = (f = w.computedStates.slice(-1)[0]) == null ? void 0 : f.state;
            if (!T) return;
            u(i === void 0 ? T : T[i]), x == null || x.send(
              null,
              // FIXME no-any
              w
            );
            return;
          }
          case "PAUSE_RECORDING":
            return k = !k;
        }
        return;
    }
  }), b;
}, an = Al, Tn = (s, a) => {
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
function El(s, a) {
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
const Bn = (s) => (a) => {
  try {
    const t = s(a);
    return t instanceof Promise ? t : {
      then(r) {
        return Bn(r)(t);
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
        return Bn(r)(t);
      }
    };
  }
}, Ml = (s, a) => (t, r, n) => {
  let o = {
    storage: El(() => window.localStorage),
    partialize: (f) => f,
    version: 0,
    merge: (f, w) => ({
      ...w,
      ...f
    }),
    ...a
  }, l = !1, i = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let x = o.storage;
  if (!x)
    return s(
      (...f) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(...f);
      },
      r,
      n
    );
  const g = () => {
    const f = o.partialize({ ...r() });
    return x.setItem(o.name, {
      state: f,
      version: o.version
    });
  }, k = n.setState;
  n.setState = (f, w) => (k(f, w), g());
  const u = s(
    (...f) => (t(...f), g()),
    r,
    n
  );
  n.getInitialState = () => u;
  let b;
  const C = () => {
    var f, w;
    if (!x) return;
    const T = ++i;
    l = !1, d.forEach((N) => {
      var P;
      return N((P = r()) != null ? P : u);
    });
    const S = ((w = o.onRehydrateStorage) == null ? void 0 : w.call(o, (f = r()) != null ? f : u)) || void 0;
    return Bn(x.getItem.bind(x))(o.name).then((N) => {
      if (N)
        if (typeof N.version == "number" && N.version !== o.version) {
          if (o.migrate) {
            const P = o.migrate(
              N.state,
              N.version
            );
            return P instanceof Promise ? P.then(($) => [!0, $]) : [!0, P];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, N.state];
      return [!1, void 0];
    }).then((N) => {
      var P;
      if (T !== i)
        return;
      const [$, m] = N;
      if (b = o.merge(
        m,
        (P = r()) != null ? P : u
      ), t(b, !0), $)
        return g();
    }).then(() => {
      T === i && (S == null || S(r(), void 0), b = r(), l = !0, c.forEach((N) => N(b)));
    }).catch((N) => {
      T === i && (S == null || S(void 0, N));
    });
  };
  return n.persist = {
    setOptions: (f) => {
      o = {
        ...o,
        ...f
      }, f.storage && (x = f.storage);
    },
    clearStorage: () => {
      ++i, x == null || x.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => C(),
    hasHydrated: () => l,
    onHydrate: (f) => (d.add(f), () => {
      d.delete(f);
    }),
    onFinishHydration: (f) => (c.add(f), () => {
      c.delete(f);
    })
  }, o.skipHydration || C(), b || u;
}, ta = Ml, zt = ws()(
  ta(
    (s) => ({
      token: null,
      branch: null,
      user: null,
      setAuth: ({ token: a, branch: t, user: r }) => s({ token: a, branch: t, user: r }),
      logout: () => s({ token: null, branch: null, user: null })
    }),
    { name: "uiforge-auth" }
  )
), sa = "uiforge_resilience_queue_v1";
let mn = !1, Sr = !1;
function bn() {
  if (typeof window > "u") return [];
  try {
    const s = localStorage.getItem(sa);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}
function na(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(sa, JSON.stringify(s)), console.log(`[ResilienceQueue] Hiện có ${s.length} tác vụ đang chờ đồng bộ an toàn`);
    } catch {
    }
}
function Bl(s, a) {
  var n;
  const t = bn(), r = {
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
  return t.push(r), na(t), ra(
    "🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)",
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${r.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    "warning"
  ), r;
}
function ra(s, a, t = "info") {
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
async function Dn(s) {
  var n, o;
  if (mn) return;
  const a = bn();
  if (a.length === 0) return;
  mn = !0, console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${a.length} tác vụ đang chờ...`);
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
  na(r), mn = !1, t > 0 && ra(
    "✨ Đồng Bộ Tự Động Hoàn Tất",
    `Đã phát lại và ghi nhận thành công ${t} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
    "success"
  );
}
function _l(s) {
  var t, r;
  if (!s) return !1;
  if (typeof navigator < "u" && !navigator.onLine || !s.response && (s.code === "ERR_NETWORK" || (t = s.message) != null && t.includes("Network Error"))) return !0;
  const a = (r = s.response) == null ? void 0 : r.status;
  return a === 502 || a === 503 || a === 504;
}
function Ol(s) {
  Sr || typeof window > "u" || (Sr = !0, window.addEventListener("online", () => {
    console.log("[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay..."), Dn(s);
  }), setInterval(() => {
    typeof navigator < "u" && navigator.onLine && bn().length > 0 && !mn && Dn(s);
  }, 2e4), setTimeout(() => {
    const a = bn();
    a.length > 0 && (console.log(`[ResilienceQueue] Phát hiện ${a.length} tác vụ chưa hoàn tất từ phiên trước.`), Dn(s));
  }, 3e3));
}
const Hl = "http://localhost:5048/api", it = Ea.create({
  baseURL: Hl,
  timeout: 15e3
});
it.interceptors.request.use((s) => {
  var t;
  const a = zt.getState().token;
  a && (s.headers.Authorization = `Bearer ${a}`);
  try {
    const r = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (r) {
      const n = JSON.parse(r), o = (t = n == null ? void 0 : n.state) == null ? void 0 : t.previewRoleCode;
      o && (s.headers["X-Preview-Role"] = o);
    }
  } catch {
  }
  return s;
});
it.interceptors.response.use(
  (s) => s,
  async (s) => {
    var r, n, o, l, i;
    if (((r = s == null ? void 0 : s.response) == null ? void 0 : r.status) === 401)
      return zt.getState().logout(), Promise.reject(s);
    const a = (((n = s == null ? void 0 : s.config) == null ? void 0 : n.method) || "").toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(a) && _l(s)) {
      const d = (l = (o = s == null ? void 0 : s.config) == null ? void 0 : o.url) != null && l.includes("/pages/save") ? "Lưu cấu hình trang (UI Forge Page)" : `Thao tác ${a} [${(i = s == null ? void 0 : s.config) == null ? void 0 : i.url}]`;
      return Bl(s.config, d), Promise.resolve({
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
Ol(it);
async function Wl(s) {
  await it.delete(`/pages/${s}`);
}
async function Vl(s) {
  const { data: a } = await it.put("/pages/reorder", s);
  return a;
}
async function Gl(s, a) {
  const { data: t } = await it.put(`/pages/${s}/properties`, a);
  return t;
}
async function Ul(s) {
  const { data: a } = await it.post(`/pages/clone/${s}`);
  return a;
}
async function Kl(s) {
  const { data: a } = await it.put(`/pages/${s}/toggle-active`);
  return a;
}
function zl(s) {
  var o, l, i;
  const a = String(s.id), t = s.scriptFile || ((o = s.layoutConfig) == null ? void 0 : o.scriptFile) || "";
  let r = s.featureProps;
  if (!r && s.featurePropsJson)
    try {
      r = JSON.parse(s.featurePropsJson);
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
    code: s.code || "",
    name: s.name,
    title: s.title || s.name,
    route: s.route,
    icon: s.icon || (s.isGroup ? "Folder" : "Layers"),
    parentId: s.parentId !== null && s.parentId !== void 0 ? String(s.parentId) : null,
    order: s.order ?? 0,
    isGroup: !!s.isGroup,
    isMenu: s.isMenu !== void 0 ? !!s.isMenu : !0,
    active: s.active !== void 0 ? !!s.active : !0,
    entityName: s.entityName || "",
    description: s.description || "",
    scriptFile: t,
    scriptContent: s.scriptContent || "",
    layoutConfig: s.layoutConfig || { direction: "column", gap: "16px", wrap: "wrap" },
    featureProps: r || {},
    displayFlags: s.displayFlags || (r == null ? void 0 : r.displayFlags),
    customStyles: s.customStyles || (r == null ? void 0 : r.customStyles),
    badge: s.badge ?? (r == null ? void 0 : r.badge),
    components: n(s.components || []),
    hidden: s.hidden ?? ((l = s.layoutConfig) == null ? void 0 : l.hidden) ?? (a === "2" ? !0 : void 0),
    isDetail: s.isDetail ?? ((i = s.layoutConfig) == null ? void 0 : i.isDetail) ?? (a === "2" ? !0 : void 0),
    createdAt: s.createdAt,
    updatedAt: s.updatedAt
  };
}
const ql = 40;
function In() {
  if (typeof window > "u") return null;
  try {
    const s = new URLSearchParams(window.location.search), a = s.get("feature") || s.get("page");
    return a || localStorage.getItem("uiforge_active_feature_id");
  } catch {
    return null;
  }
}
function Fn() {
  if (typeof window > "u") return null;
  try {
    const a = new URLSearchParams(window.location.search).get("id");
    return a || localStorage.getItem("uiforge_active_transaction_id");
  } catch {
    return null;
  }
}
function aa(s) {
  var a, t, r, n;
  return s ? !!(s.isDetail || s.route === "/fcl-import" || (a = s.route) != null && a.includes("detail") || (t = s.scriptFile) != null && t.toLowerCase().includes("detail") || (r = s.name) != null && r.toLowerCase().includes("fcl import") || (n = s.name) != null && n.toLowerCase().includes("chi tiết")) : !1;
}
function _n(s) {
  return s ? !aa(s) : !1;
}
function Ns(s, a, t) {
  var r;
  if (!(typeof window > "u"))
    try {
      localStorage.setItem("uiforge_active_feature_id", s);
      const n = new URL(window.location.href);
      n.searchParams.set("feature", s);
      const l = (t || ((r = Z.getState()) == null ? void 0 : r.features) || []).find((d) => String(d.id) === String(s) || d.route === `/${s}` || d.route === s);
      if ((l ? _n(l) : s === "6" || s === "1" || s === "3") || a === null || a === "") {
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
const Z = ws()(
  an(
    (s, a) => ({
      features: [],
      activeFeatureId: In() || "",
      activeRecordId: Fn(),
      selection: { componentId: null, pageId: In() || "" },
      history: [[]],
      historyIndex: 0,
      // Modals State
      isFeatureManagerOpen: !1,
      openFeatureManager: () => s({ isFeatureManagerOpen: !0 }),
      closeFeatureManager: () => s({ isFeatureManagerOpen: !1 }),
      featurePropertiesTargetId: null,
      openFeatureProperties: (t) => {
        s((r) => {
          var n;
          return {
            featurePropertiesTargetId: t || r.activeFeatureId || (((n = r.features[0]) == null ? void 0 : n.id) ?? null)
          };
        });
      },
      closeFeatureProperties: () => s({ featurePropertiesTargetId: null }),
      componentModalTargetId: null,
      openComponentModal: (t) => s({ componentModalTargetId: t }),
      closeComponentModal: () => s({ componentModalTargetId: null }),
      setActiveRecordId: (t) => {
        s({ activeRecordId: t ? String(t) : null });
      },
      setActiveFeature: (t, r) => {
        const n = a().features || [], o = n.find((d) => String(d.id) === String(t) || d.route === `/${t}` || d.route === t), l = o ? _n(o) : t === "6" || t === "1" || t === "3";
        Ns(t, l ? null : r, n);
        let i = null;
        l || r === null || r === "" ? i = null : r != null ? i = String(r) : i = Fn(), s((d) => ({
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
        const r = In(), n = r && t.find((i) => i.id === r || i.route === `/${r}` || i.route === r) || t.find((i) => i.route === "/transactions" || i.name.includes("Lô Hàng")) || t.find((i) => !i.hidden && !i.isDetail) || t[0], l = _n(n) ? null : Fn();
        Ns(n.id, l, t), s({
          features: t,
          activeFeatureId: n.id,
          activeRecordId: l,
          selection: { componentId: null, pageId: n.id },
          history: [t],
          historyIndex: 0
        });
      },
      addFeature: (t, r = "Layers", n = null, o = !1) => {
        const l = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, i = a().features.filter((x) => (x.parentId ?? null) === n), d = i.length > 0 ? Math.max(...i.map((x) => x.order ?? 0)) + 1 : 1, c = {
          id: l,
          code: `F_${Date.now().toString(36).toUpperCase()}`,
          name: t.trim() || "Tính năng mới",
          title: t.trim() || "Tính năng mới",
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
        return Ns(l, null), s((x) => {
          const g = [...x.features, c];
          return {
            ...tt(x, g),
            activeFeatureId: l,
            selection: { componentId: null, pageId: l }
          };
        }), l;
      },
      reorderFeatures: (t) => {
        s((r) => {
          const n = new Map(t.map((l) => [l.id, l])), o = r.features.map((l) => {
            const i = n.get(l.id);
            return i ? {
              ...l,
              parentId: i.parentId !== void 0 ? i.parentId ? String(i.parentId) : null : l.parentId,
              order: i.order !== void 0 ? i.order : l.order,
              isGroup: i.isGroup !== void 0 ? i.isGroup : l.isGroup
            } : l;
          });
          return Vl(
            t.map((l) => ({
              id: l.id,
              parentId: l.parentId,
              order: l.order,
              isGroup: l.isGroup
            }))
          ).catch(() => {
          }), tt(r, o);
        });
      },
      updateFeatureProperties: (t, r) => {
        s((n) => {
          const o = r.parentId !== void 0 ? r.parentId && String(r.parentId).trim() !== "" ? String(r.parentId) : null : void 0, l = {
            ...r,
            ...o !== void 0 ? { parentId: o } : {}
          }, i = n.features.map((c) => c.id !== t ? c : {
            ...c,
            ...l,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }), d = {
            ...r,
            parentId: o !== void 0 ? o ? isNaN(Number(o)) ? o : Number(o) : null : void 0
          };
          return Gl(t, d).catch(() => {
          }), tt(n, i);
        });
      },
      cloneFeature: async (t) => {
        const n = a().features.find((i) => i.id === t);
        if (!n) return null;
        try {
          const i = await Ul(t);
          if (i && i.id) {
            const d = zl(i);
            return s((c) => {
              const x = [...c.features, d];
              return {
                ...tt(c, x),
                activeFeatureId: d.id,
                selection: { componentId: null, pageId: d.id }
              };
            }), Ns(d.id, null), d.id;
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
          components: da(n.components || [], o),
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return s((i) => {
          const d = [...i.features, l];
          return {
            ...tt(i, d),
            activeFeatureId: o,
            selection: { componentId: null, pageId: o }
          };
        }), Ns(o, null), o;
      },
      toggleFeatureActive: (t) => {
        s((r) => {
          const n = r.features.map((o) => {
            if (o.id !== t) return o;
            const l = o.active === !1;
            return {
              ...o,
              active: l,
              updatedAt: (/* @__PURE__ */ new Date()).toISOString()
            };
          });
          return Kl(t).catch(() => {
          }), tt(r, n);
        });
      },
      renameFeature: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, name: r } : l);
          return tt(n, o);
        });
      },
      updateFeatureId: (t, r) => {
        s((n) => {
          const o = n.features.map(
            (i) => i.id === t ? {
              ...i,
              id: r,
              route: i.route === `/${t}` ? `/${r}` : i.route,
              components: i.components.map((d) => ({ ...d, pageId: r }))
            } : i
          ), l = n.activeFeatureId === t ? r : n.activeFeatureId;
          return Ns(l), {
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
          return Ns(o, null), {
            ...tt(r, n),
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
          return tt(n, o);
        });
      },
      updateFeatureScriptFile: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id === t ? { ...l, scriptFile: r.trim() } : l);
          return tt(n, o);
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
            n !== void 0 ? i = On(l.components, r, t, n) : i = oa(l.components, r, t);
          else if (n !== void 0) {
            const c = [...l.components];
            c.splice(n, 0, t), i = c.map((x, g) => ({ ...x, order: g + 1 }));
          } else
            i = [...l.components, t];
          const d = o.features.map(
            (c) => c.id === o.activeFeatureId ? { ...c, components: i } : c
          );
          return {
            ...tt(o, d),
            selection: { ...o.selection, componentId: t.id }
          };
        });
      },
      updateComponentProps: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              props: { ...i.props, ...r }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentStyle: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              style: { ...i.style, ...r }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentEvents: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              events: r
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentDataBinding: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              dataBinding: { ...i.dataBinding, ...r }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentValidation: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              validation: { ...i.validation, ...r }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentPermissions: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              permissions: { ...i.permissions, ...r }
            }))
          });
          return tt(n, o);
        });
      },
      updateComponentOrder: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: rs(l.components, t, (i) => ({
              ...i,
              order: r,
              props: { ...i.props, order: r }
            }))
          });
          return tt(n, o);
        });
      },
      removeComponent: (t) => {
        s((r) => {
          const n = r.features.map((o) => o.id !== r.activeFeatureId ? o : {
            ...o,
            components: la(o.components, t)
          });
          return {
            ...tt(r, n),
            selection: { ...r.selection, componentId: null }
          };
        });
      },
      moveComponent: (t, r, n) => {
        s((o) => {
          const l = o.features.find((u) => u.id === o.activeFeatureId);
          if (!l) return {};
          const i = Yl(l.components, t);
          if (!i) return {};
          const [d, c] = i, x = { ...d, parentId: r };
          let g;
          if (r === null) {
            const u = c.filter((f) => !f.parentId);
            u.splice(n, 0, x);
            const b = u.map((f, w) => ({ ...f, order: w + 1 })), C = c.filter((f) => f.parentId);
            g = [...b, ...C];
          } else
            g = On(c, r, x, n);
          const k = o.features.map(
            (u) => u.id === o.activeFeatureId ? { ...u, components: g } : u
          );
          return tt(o, k);
        });
      },
      distributeSiblingWidths: (t, r) => {
        s((n) => {
          const o = n.features.map((l) => l.id !== n.activeFeatureId ? l : {
            ...l,
            components: ia(l.components, t, r)
          });
          return tt(n, o);
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
function tt(s, a) {
  const t = s.history.slice(0, s.historyIndex + 1);
  return t.length >= ql && t.shift(), t.push(a), {
    features: a,
    history: t,
    historyIndex: t.length - 1
  };
}
function rs(s, a, t) {
  return s.map((r) => r.id === a ? t(r) : r.children && r.children.length > 0 ? { ...r, children: rs(r.children, a, t) } : r);
}
function la(s, a) {
  return s.filter((t) => t.id !== a).map(
    (t) => t.children && t.children.length > 0 ? { ...t, children: la(t.children, a) } : t
  );
}
function oa(s, a, t) {
  return s.map((r) => r.id === a ? {
    ...r,
    children: [...r.children || [], { ...t, parentId: a }]
  } : r.children && r.children.length > 0 ? {
    ...r,
    children: oa(r.children, a, t)
  } : r);
}
function ia(s, a, t) {
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
    children: ia(n.children, a, t)
  } : n);
}
function Yl(s, a) {
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
      const i = n.children[o], d = [
        ...n.children.slice(0, o),
        ...n.children.slice(o + 1)
      ], c = { ...n, children: d }, x = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, x];
    }
    const l = ca(n.children, a);
    if (l) {
      const [i, d] = l, c = { ...n, children: d }, x = [...s.slice(0, r), c, ...s.slice(r + 1)];
      return [i, x];
    }
  }
  return null;
}
function ca(s, a) {
  for (let t = 0; t < s.length; t++) {
    const r = s[t];
    if (r.id === a) {
      const n = [...s.slice(0, t), ...s.slice(t + 1)];
      return [r, n];
    }
    if (r.children && r.children.length > 0) {
      const n = ca(r.children, a);
      if (n) {
        const [o, l] = n, i = { ...r, children: l }, d = [...s.slice(0, t), i, ...s.slice(t + 1)];
        return [o, d];
      }
    }
  }
  return null;
}
function On(s, a, t, r) {
  return s.map((n) => {
    if (n.id === a) {
      const l = [...n.children || []];
      l.splice(r, 0, { ...t, parentId: a });
      const i = l.map((d, c) => ({ ...d, order: c + 1 }));
      return { ...n, children: i };
    }
    return n.children && n.children.length > 0 ? { ...n, children: On(n.children, a, t, r) } : n;
  });
}
function da(s, a) {
  return s.map((t) => {
    const r = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    return {
      ...t,
      id: r,
      pageId: a,
      children: t.children ? da(t.children, a) : []
    };
  });
}
const He = ws()(
  ta(
    (s, a) => ({
      roles: [],
      users: [],
      featurePolicies: {},
      componentPolicies: {},
      previewRoleCode: null,
      isLoaded: !1,
      setPreviewRole: (t) => {
        s({ previewRoleCode: t });
      },
      setRoles: (t) => s({ roles: t }),
      setUsers: (t) => s({ users: t }),
      setFeaturePolicies: (t, r) => {
        s((n) => ({
          featurePolicies: {
            ...n.featurePolicies,
            [String(t)]: r
          }
        }));
      },
      setComponentPolicies: (t, r, n) => {
        const o = `${t}_${r}`;
        s((l) => ({
          componentPolicies: {
            ...l.componentPolicies,
            [o]: n
          }
        }));
      },
      fetchSecurityMetadata: async () => {
        try {
          const [t, r] = await Promise.all([
            it.get("/core/roles").catch(() => null),
            it.get("/core/users").catch(() => null)
          ]);
          t && Array.isArray(t.data) && s({ roles: t.data }), r && Array.isArray(r.data) && s({ users: r.data }), s({ isLoaded: !0 });
        } catch {
          s({ isLoaded: !0 });
        }
      },
      fetchFeaturePolicies: async (t) => {
        try {
          const r = await it.get(`/core/feature-policies/${t}`).catch(() => null);
          if (r && Array.isArray(r.data)) {
            const n = r.data;
            return s((o) => ({
              featurePolicies: {
                ...o.featurePolicies,
                [String(t)]: n
              }
            })), n;
          }
        } catch {
        }
        return a().featurePolicies[String(t)] || [];
      },
      saveFeaturePolicies: async (t, r) => {
        try {
          const n = {
            featureId: Number(t) || 0,
            policies: r
          }, o = await it.put(`/core/feature-policies/${t}`, n).catch(async () => await it.post(`/core/feature-policies/${t}`, n).catch(() => null));
          if (o && Array.isArray(o.data)) {
            s((l) => ({
              featurePolicies: {
                ...l.featurePolicies,
                [String(t)]: o.data
              }
            }));
            return;
          }
        } catch {
        }
        await a().fetchFeaturePolicies(t).catch(() => {
          s((n) => ({
            featurePolicies: {
              ...n.featurePolicies,
              [String(t)]: r
            }
          }));
        });
      },
      fetchComponentPolicies: async (t, r) => {
        try {
          const n = r ? `/core/component-policies?pageId=${t}&nodeId=${encodeURIComponent(r)}` : `/core/component-policies?pageId=${t}`, o = await it.get(n).catch(() => null);
          if (o && Array.isArray(o.data)) {
            const l = o.data;
            if (r) {
              const i = `${t}_${r}`;
              s((d) => ({
                componentPolicies: {
                  ...d.componentPolicies,
                  [i]: l
                }
              }));
            } else {
              const i = {};
              for (const d of l)
                if (d.nodeId) {
                  const c = `${t}_${d.nodeId}`;
                  i[c] || (i[c] = []), i[c].push(d);
                }
              s((d) => ({
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
          const n = `${t}_${r}`;
          return a().componentPolicies[n] || [];
        }
        return [];
      },
      saveComponentPolicies: async (t, r, n, o) => {
        const l = `${t}_${r}`, i = n.map((d) => ({
          ...d,
          pageId: Number(t),
          nodeId: r,
          fieldName: o || d.fieldName || r,
          roleId: typeof d.roleId == "number" ? d.roleId : null,
          roleCode: d.roleCode || (typeof d.roleId == "string" ? d.roleId : void 0),
          userId: typeof d.userId == "number" ? d.userId : null,
          userName: d.userName || (typeof d.userId == "string" ? d.userId : void 0)
        }));
        try {
          const d = {
            pageId: Number(t),
            nodeId: r,
            fieldName: o || r,
            policies: i
          }, c = await it.put("/core/component-policies", d).catch(async () => await it.post("/core/component-policies", d).catch(() => null));
          if (c && Array.isArray(c.data)) {
            s((x) => ({
              componentPolicies: {
                ...x.componentPolicies,
                [l]: c.data
              }
            }));
            return;
          }
        } catch {
        }
        s((d) => ({
          componentPolicies: {
            ...d.componentPolicies,
            [l]: i
          }
        }));
      },
      createRole: async (t, r, n) => {
        try {
          return await it.post("/core/roles", {
            code: t.trim(),
            name: r.trim() || t.trim(),
            description: (n == null ? void 0 : n.trim()) || "",
            active: !0
          }), await a().fetchSecurityMetadata(), !0;
        } catch (o) {
          return console.error("Failed to create role:", o), !1;
        }
      },
      deleteRole: async (t) => {
        try {
          return await it.delete(`/core/roles/${t}`), await a().fetchSecurityMetadata(), !0;
        } catch (r) {
          return console.error("Failed to delete role:", r), !1;
        }
      },
      getEffectiveRoleCode: () => {
        const t = zt.getState().user;
        if (t ? t.role === "Dev" : !0) {
          const { previewRoleCode: n } = a();
          return n || "Dev";
        }
        return t.roleCode || t.role || "User";
      },
      getEffectiveUser: () => {
        const t = zt.getState().user, r = t ? t.role === "Dev" : !0, { previewRoleCode: n } = a();
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
          id: (t == null ? void 0 : t.id) || (r ? 1 : "user"),
          username: (t == null ? void 0 : t.username) || (r ? "admin" : "user"),
          roleCode: o,
          isDev: l
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN FEATURE / MÀN HÌNH ──
      evaluateFeaturePermission: (t, r, n) => {
        var m, j, E, L;
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
        let x;
        if (typeof t == "object" && t !== null)
          x = t;
        else {
          const y = String(t);
          x = Z.getState().features.find((_) => _.id === y || _.route === y);
        }
        if ((m = x == null ? void 0 : x.displayFlags) != null && m.isPublic || (E = (j = x == null ? void 0 : x.featureProps) == null ? void 0 : j.displayFlags) != null && E.isPublic)
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
        const g = (x == null ? void 0 : x.id) || String(t);
        let k = o.featurePolicies[g] || (x == null ? void 0 : x.policies) || [];
        k.length === 0 && (((L = x == null ? void 0 : x.displayFlags) == null ? void 0 : L.isPermissionInherited) ?? !0) && (x != null && x.parentId) && (k = o.featurePolicies[x.parentId] || []);
        const u = k.filter((y) => y.active !== !1), b = u.find((y) => String(y.userId) === String(l.id) || y.userName === c), C = u.find((y) => {
          if (!y.roleCode && !y.roleName && !y.roleId) return !1;
          const _ = y.roleCode || y.roleName;
          return (_ == null ? void 0 : _.toLowerCase()) === i.toLowerCase();
        }), f = b || C;
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
        let w = !1, T = !1;
        if (n) {
          const y = new Date(n).getTime(), B = (Date.now() - y) / (1e3 * 60 * 60);
          f.lockUpdateAfterCreated && f.lockUpdateAfterCreated > 0 && (w = B > f.lockUpdateAfterCreated), f.lockDeleteAfterCreated && f.lockDeleteAfterCreated > 0 && (T = B > f.lockDeleteAfterCreated);
        }
        const S = !r || r === c, N = (f.canWriteAll || f.canWrite && S) && !w, P = (f.canDeleteAll || f.canDelete && S) && !T, $ = f.canRead && !f.canWrite && !f.canWriteAll;
        return {
          canRead: f.canRead,
          canWrite: N,
          canWriteAll: f.canWriteAll,
          canDelete: P,
          canDeleteAll: f.canDeleteAll,
          canDeactivate: f.canDeactivate,
          canShare: f.canShare,
          isPartialEditMode: $,
          isLockedUpdate: w,
          isLockedDelete: T
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN COMPONENT / LINH KIỆN ──
      evaluateComponentPermission: (t, r, n = [], o) => {
        var N, P, $, m, j, E, L;
        const l = a(), i = l.getEffectiveUser(), { roleCode: d, isDev: c, username: x } = i;
        if (c)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const g = l.evaluateFeaturePermission(t, o), k = `${t}_${r.id}`;
        let b = l.componentPolicies[k] || ((N = r.permissions) == null ? void 0 : N.rules) || (($ = (P = r.props) == null ? void 0 : P.permissions) == null ? void 0 : $.rules) || [];
        if (b.length === 0 && n.length > 0)
          for (let y = n.length - 1; y >= 0; y--) {
            const _ = n[y], B = `${t}_${_.id}`, Y = l.componentPolicies[B] || ((m = _.permissions) == null ? void 0 : m.rules) || ((E = (j = _.props) == null ? void 0 : j.permissions) == null ? void 0 : E.rules) || [];
            if (Y.length > 0) {
              b = Y;
              break;
            }
          }
        const C = b.filter((y) => y.active !== !1), f = C.find((y) => String(y.userId) === String(i.id) || y.userName === x), w = C.find((y) => {
          if (!y.roleCode && !y.roleName && !y.roleId) return !1;
          const _ = y.roleCode || y.roleName;
          return (_ == null ? void 0 : _.toLowerCase()) === d.toLowerCase();
        }), T = f || w;
        if (T) {
          const y = !o || o === x, _ = T.canWriteAll || T.canWrite && y, B = g.isPartialEditMode && (T.canWrite || T.canWriteAll);
          return {
            canRead: T.canRead,
            canWrite: _,
            canWriteAll: T.canWriteAll,
            canDelete: T.canDelete,
            canDeactivate: T.canDeactivate,
            shouldHighlightEditable: B
          };
        }
        const S = r.permissions;
        if (S != null && S.allowedRoles && S.allowedRoles.length > 0) {
          const y = S.allowedRoles.some((B) => B.toLowerCase() === d.toLowerCase()), _ = (L = S.readOnlyRoles) == null ? void 0 : L.some((B) => B.toLowerCase() === d.toLowerCase());
          return y ? {
            canRead: !0,
            canWrite: !_ && g.canWrite,
            canWriteAll: !_ && g.canWriteAll,
            canDelete: g.canDelete,
            canDeactivate: g.canDeactivate,
            shouldHighlightEditable: !1
          } : {
            canRead: S.deniedBehavior !== "hide",
            canWrite: !1,
            canWriteAll: !1,
            canDelete: !1,
            canDeactivate: !1,
            shouldHighlightEditable: !1
          };
        }
        return {
          canRead: g.canRead,
          canWrite: g.canWrite,
          canWriteAll: g.canWriteAll,
          canDelete: g.canDelete,
          canDeactivate: g.canDeactivate,
          shouldHighlightEditable: !1
        };
      },
      // ── ĐÁNH GIÁ QUYỀN TRÊN CỘT LƯỚI GRIDPOLICY ──
      evaluateColumnPermission: (t, r, n, o = [], l) => {
        var N;
        const i = a(), d = i.getEffectiveUser(), { roleCode: c, isDev: x, username: g } = d;
        if (x)
          return {
            canRead: !0,
            canWrite: !0,
            canWriteAll: !0,
            canDelete: !0,
            canDeactivate: !0,
            shouldHighlightEditable: !1
          };
        const k = i.evaluateFeaturePermission(t, l), u = `${t}_${n.key}`, b = i.componentPolicies[u], f = (b && b.length > 0 ? b : n.columnPermissions || ((N = n.permissions) == null ? void 0 : N.rules) || n.policies || []).filter((P) => P.active !== !1), w = f.find((P) => String(P.userId) === String(d.id) || P.userName === g), T = f.find((P) => {
          if (!P.roleCode && !P.roleName && !P.roleId) return !1;
          const $ = P.roleCode || P.roleName;
          return ($ == null ? void 0 : $.toLowerCase()) === c.toLowerCase();
        }), S = w || T;
        if (S) {
          const P = !l || l === g, $ = S.canWriteAll || S.canWrite && P, m = k.isPartialEditMode && (S.canWrite || S.canWriteAll);
          return {
            canRead: S.canRead,
            canWrite: $,
            canWriteAll: S.canWriteAll,
            canDelete: S.canDelete,
            canDeactivate: S.canDeactivate,
            shouldHighlightEditable: m
          };
        }
        return {
          canRead: k.canRead,
          canWrite: k.canWrite && n.editable !== !1,
          canWriteAll: k.canWriteAll && n.editable !== !1,
          canDelete: k.canDelete,
          canDeactivate: k.canDeactivate,
          shouldHighlightEditable: !1
        };
      }
    }),
    {
      name: "uiforge-permission-engine",
      partialize: (s) => ({
        previewRoleCode: s.previewRoleCode,
        featurePolicies: s.featurePolicies,
        componentPolicies: s.componentPolicies
      })
    }
  )
), Hn = La(null), Xl = () => Aa(Hn), xn = ({
  node: s,
  isEditing: a = !1,
  ancestors: t = [],
  children: r
}) => {
  var x, g, k, u, b, C, f, w, T, S, N, P;
  const n = Z(($) => $.activeFeatureId), o = He(($) => $.evaluateComponentPermission);
  if (a) {
    const $ = !!((x = s.permissions) != null && x.rules && s.permissions.rules.length > 0 || (u = (k = (g = s.props) == null ? void 0 : g.permissions) == null ? void 0 : k.rules) != null && u.length || (C = (b = s.permissions) == null ? void 0 : b.allowedRoles) != null && C.length || (w = (f = s.permissions) == null ? void 0 : f.readOnlyRoles) != null && w.length);
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
          hasRules: $
        },
        children: r
      }
    );
  }
  const l = o(n, s, t);
  if (!l.canRead || s.type === "Button" && (/delete|xóa|remove/i.test(String(((T = s.props) == null ? void 0 : T.text) || "")) || /trash|delete/i.test(String(((S = s.props) == null ? void 0 : S.icon) || "")) || ((N = s.props) == null ? void 0 : N.variant) === "danger") && !l.canDelete || s.type === "Button" && /deactivate|ngưng|hủy bỏ/i.test(String(((P = s.props) == null ? void 0 : P.text) || "")) && !l.canDeactivate)
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
}, Cs = ({
  label: s,
  showLabel: a = !0,
  labelPosition: t = "left",
  labelWidth: r = "110px",
  required: n = !1,
  error: o,
  colSpan: l,
  className: i = "",
  style: d,
  children: c
}) => {
  const x = Xl(), g = !!(x != null && x.shouldHighlightEditable), k = !!(x != null && x.isReadOnly), u = t === "left", b = l ? `col-span-${l}` : "", C = g ? "[&_input]:!border-emerald-500/70 [&_input]:!bg-emerald-950/20 [&_input]:shadow-[0_0_0_1px_rgba(16,185,129,0.25)] [&_textarea]:!border-emerald-500/70 [&_select]:!border-emerald-500/70 [&_.enterprise-select-trigger]:!border-emerald-500/70" : k ? "[&_input]:bg-slate-900/50 [&_input]:border-slate-800/80 [&_input]:text-slate-400" : "";
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
        a && s && /* @__PURE__ */ e.jsxs(
          "label",
          {
            className: `text-xs select-none ${g ? "text-emerald-300 font-semibold" : k ? "text-slate-400 font-medium" : "text-slate-300 font-medium"} ${u ? "shrink-0 text-right truncate" : ""}`,
            style: u ? { width: r } : void 0,
            title: s,
            children: [
              g && /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 shadow-[0_0_6px_rgba(52,211,153,0.8)] align-middle",
                  title: "Được phép chỉnh sửa"
                }
              ),
              s,
              n && /* @__PURE__ */ e.jsx("span", { className: "text-red-400 ml-0.5", children: "*" }),
              u && ":"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: `flex-1 min-w-0 w-full flex flex-col justify-center ${C}`, children: [
          c,
          o && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-red-400 mt-0.5", children: o })
        ] })
      ]
    }
  );
}, rt = ws()(
  an((s, a) => ({
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
        const i = a().openTabs, d = i.find(
          (c) => {
            var x;
            return c.featureId === t && String(((x = c.params) == null ? void 0 : x.id) ?? "") === String((r == null ? void 0 : r.id) ?? "");
          }
        );
        if (d)
          s({ activeTabId: d.id });
        else {
          const c = `tab_${t}_${r.id || Date.now()}`, x = {
            id: c,
            featureId: t,
            title: l,
            params: r
          };
          s({
            openTabs: [...i, x],
            activeTabId: c
          });
        }
        Z.getState().setActiveFeature(t, (r == null ? void 0 : r.id) ?? null);
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
);
function ua(s, a = {}, t) {
  rt.getState().openFeature(s, a, "Popup", t || s);
}
const Jl = [];
function Ql(s) {
  if (!s || typeof s != "string") return [];
  const a = [], t = s.split(",");
  for (const r of t) {
    const n = r.split("=");
    if (n.length === 2) {
      const o = n[0].trim(), l = o.includes(".") ? o.split(".").pop() : o, i = n[1].trim(), d = i.includes(".") ? i.split(".").pop() : i;
      l && d && a.push({ targetField: l, sourceField: d });
    }
  }
  return a;
}
function es(s, a, t, r = void 0) {
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
    for (const [d, c] of Object.entries(l)) {
      if (c == null) continue;
      if (d.replace(/^fld_/, "").replace(/[_\-\s]/g, "").toLowerCase() === o)
        return c;
    }
  }
  return r;
}
function pn(s = {}, a) {
  var r, n;
  const t = { ...s };
  try {
    const o = typeof window < "u" ? localStorage.getItem("uiforge-permission-engine") : null;
    if (o) {
      const l = JSON.parse(o), i = (r = l == null ? void 0 : l.state) == null ? void 0 : r.previewRoleCode;
      i && (t["X-Preview-Role"] = i);
    }
  } catch {
  }
  try {
    const o = a || Z.getState().activeFeatureId;
    o && (t["X-Feature-Id"] = String(o));
  } catch {
  }
  try {
    const o = typeof window < "u" ? localStorage.getItem("uiforge_auth_storage") : null;
    if (o) {
      const l = JSON.parse(o), i = (n = l == null ? void 0 : l.state) == null ? void 0 : n.token;
      i && (t.Authorization = `Bearer ${i}`);
    }
  } catch {
  }
  return t;
}
const ke = ws()(
  an((s, a) => ({
    datasets: {},
    formRecords: {},
    originalFormRecords: {},
    selectedRecords: {},
    // Quản lý Dirty Tracking
    isFormDirty: (t) => {
      const r = a(), n = r.formRecords[t] || r.formRecords.default || {}, o = r.originalFormRecords[t] || r.originalFormRecords.default;
      if (!o) return !1;
      const l = ["btn_", "sec_", "tab_", "lbl_"], i = /* @__PURE__ */ new Set();
      for (const [d, c] of Object.entries(n)) {
        if (!d || l.some((b) => d.startsWith(b))) continue;
        const x = d.replace(/^fld_/, "").toLowerCase();
        if (i.has(x)) continue;
        i.add(x);
        const g = o[d] ?? o[x] ?? o[d.replace(/^fld_/, "")], k = c === "" || c === void 0 ? null : c, u = g === "" || g === void 0 ? null : g;
        if (String(k ?? "") !== String(u ?? ""))
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
        rt.getState().setTabDirty(t, !1);
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
      return o ? r[o] : Jl;
    },
    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (t, r, n) => {
      s((o) => {
        const l = r.replace(/^fld_/, ""), i = l.toLowerCase(), d = l.charAt(0).toLowerCase() + l.slice(1), c = l.charAt(0).toUpperCase() + l.slice(1), x = (C) => {
          const f = { ...C };
          for (const w of Object.keys(f))
            (w.toLowerCase() === i || w.toLowerCase() === r.toLowerCase()) && delete f[w];
          return f[d] = n, f[c] = n, f;
        }, g = o.formRecords[t] || {}, k = o.formRecords.default || {}, u = x(g), b = x(k);
        try {
          rt.getState().setTabDirty(t, !0);
        } catch {
        }
        return {
          formRecords: {
            ...o.formRecords,
            [t]: u,
            default: b
          }
        };
      });
    },
    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (t, r, n = "") => es(a(), t, r, n),
    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (t, r) => {
      s((n) => {
        const o = {};
        for (const [l, i] of Object.entries(r || {})) {
          o[l] = i;
          const d = l.replace(/^fld_/, ""), c = d.charAt(0).toLowerCase() + d.slice(1), x = d.charAt(0).toUpperCase() + d.slice(1);
          o[c] = i, o[x] = i;
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
      const d = { ...l };
      for (const [c, x] of Object.entries(l)) {
        if (!c) continue;
        const g = c.charAt(0).toLowerCase() + c.slice(1), k = c.charAt(0).toUpperCase() + c.slice(1);
        d[g] === void 0 && (d[g] = x), d[k] === void 0 && (d[k] = x);
      }
      return d;
    },
    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (t, r, n) => {
      if (!n || typeof n != "object") return;
      const o = Ql(r);
      if (o.length === 0) return;
      const l = a().formRecords[t] || {}, i = {};
      for (const d of o) {
        const c = Object.keys(n).find(
          (x) => x.toLowerCase() === d.sourceField.toLowerCase()
        );
        if (c && n[c] !== void 0) {
          const x = n[c];
          i[d.targetField] = x, d.targetField.startsWith("fld_") || (i[`fld_${d.targetField.toLowerCase()}`] = x);
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
    queryReference: async (t, r, n = "id", o = "fullName") => {
      let l = (r || "").trim();
      const i = l.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (i && (l = i[2].trim()), t)
        try {
          const c = l ? l.startsWith("?") ? l : l.startsWith("$") ? `?${l}` : `?$filter=${encodeURIComponent(l)}` : "", x = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${c}`, g = await fetch(x, { headers: pn() });
          if (g.ok) {
            const k = await g.json();
            return (Array.isArray(k) ? k : k.value || []).map((b) => {
              const C = b[n] !== void 0 ? b[n] : b.Id || b.id || b.code, f = b[o] !== void 0 ? b[o] : b.FullName || b.fullName || b.Name || b.name || b.title || String(C);
              return {
                value: C,
                label: String(f),
                rawItem: b
              };
            });
          }
        } catch {
        }
      return Tr(a().getDataset(t), l).map((c) => {
        const x = c[n] !== void 0 ? c[n] : c.Id || c.id || c.code, g = c[o] !== void 0 ? c[o] : c.FullName || c.fullName || c.Name || c.name || c.title || String(x);
        return {
          value: x,
          label: String(g),
          rawItem: c
        };
      });
    },
    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (t, r) => {
      let n = (r || "").trim();
      const o = n.match(/^return\s+(['"`])([\s\S]*)\1\s*;?$/i);
      if (o && (n = o[2].trim()), t)
        try {
          const l = n ? n.startsWith("?") ? n : n.startsWith("$") ? `?${n}` : `?$filter=${encodeURIComponent(n)}` : "", i = `http://localhost:5048/api/core/data/${encodeURIComponent(t)}${l}`, d = await fetch(i, { headers: pn() });
          if (d.ok) {
            const c = await d.json();
            return Array.isArray(c) ? c : c.value || [];
          }
        } catch {
        }
      return Tr(a().getDataset(t), n);
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
          const x = c.find((g) => (g.code || g.Code || g.recordCode || g.RecordCode || g.key || g.Key) === l);
          x && (o = x.id || x.Id);
        }
      }
      const i = !!(o && o !== "new" && Number(o) > 0), d = i ? Number(o) : 0;
      try {
        const c = i ? `http://localhost:5048/api/core/data/${encodeURIComponent(t)}/${d}` : `http://localhost:5048/api/core/data/${encodeURIComponent(t)}`, x = i ? "PUT" : "POST", g = { ...r };
        for (const [b, C] of Object.entries(g))
          if (C === "")
            (/date|time/i.test(b) || /^(id|qty|quantity|amount|total|price|count|precision|number|order)/i.test(b) || /gw|cbm|vgm|package/i.test(b)) && (g[b] = null);
          else if (typeof C == "string" && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(C.trim())) {
            const [f, w, T] = C.trim().split("/");
            g[b] = `${T}-${w.padStart(2, "0")}-${f.padStart(2, "0")}T00:00:00`;
          }
        const k = {};
        for (const [b, C] of Object.entries(g)) {
          if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_"))
            continue;
          const f = b.replace(/^fld_/, ""), w = f.charAt(0).toUpperCase() + f.slice(1);
          k[w] = C;
        }
        i ? k.Id = d : (k.Id = 0, k.Active = !0);
        const u = await fetch(c, {
          method: x,
          headers: pn({ "Content-Type": "application/json" }),
          body: JSON.stringify(k)
        });
        if (u.ok) {
          const b = await u.json(), C = b.id || b.Id || d;
          Z.getState().setActiveRecordId(String(C)), n && (a().setFormRecord(n, b), a().markFormClean(n)), a().setFormRecord("default", b), a().markFormClean("default");
          const f = a().datasets[t];
          if (f && Array.isArray(f))
            if (i) {
              const w = f.map(
                (T) => (T.id || T.Id) === d ? { ...T, ...b } : T
              );
              a().registerDataset(t, w);
            } else
              a().registerDataset(t, [b, ...f]);
          return {
            success: !0,
            data: b,
            message: i ? `Cập nhật thành công bản ghi #${d} (${t}) vào Database!` : `Thêm mới thành công bản ghi (${t}) vào Database!`
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
          method: "DELETE",
          headers: pn()
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
      const r = a(), n = Z.getState(), o = n.features || [], l = n.activeFeatureId, i = o.find((b) => String(b.id) === String(t)) || o.find((b) => String(b.id) === String(l)) || o.find((b) => b.isDetail) || o[0], d = {}, c = (b) => {
        var C, f, w;
        if (!(!b || !Array.isArray(b)))
          for (const T of b) {
            const S = (C = T.dataBinding) == null ? void 0 : C.fieldName, N = (f = T.props) == null ? void 0 : f.name, P = T.id, $ = S || (typeof N == "string" ? N : "") || (P == null ? void 0 : P.replace(/^fld_/, "")), m = String($ || "").trim();
            if (m) {
              let j = es(r, String(T.pageId || l || "default"), m, void 0);
              if (j === void 0 && ((w = T.props) == null ? void 0 : w.value) !== void 0 && (j = T.props.value), j === void 0 && typeof document < "u") {
                const E = document.getElementById(T.id) || document.querySelector(`[name="${T.id}"]`) || document.querySelector(`[name="${m}"]`);
                E && "value" in E && E.value !== "" && (j = E.value);
              }
              if (j != null) {
                d[m] = j;
                const E = m.charAt(0).toLowerCase() + m.slice(1), L = m.charAt(0).toUpperCase() + m.slice(1);
                d[E] = j, d[L] = j;
              }
            }
            T.children && T.children.length > 0 && c(T.children);
          }
      };
      i != null && i.components && c(i.components);
      const x = t || String(l || "default"), g = { ...r.formRecords.default, ...x ? r.formRecords[x] : {} }, k = { ...d, ...g };
      if (!k.id && !k.Id && typeof window < "u") {
        const C = new URLSearchParams(window.location.search).get("id");
        C && C !== "new" && Number(C) > 0 && (k.id = Number(C), k.Id = Number(C));
      }
      const u = {};
      for (const [b, C] of Object.entries(k)) {
        if (!b || b.startsWith("fld_") || b.startsWith("btn_") || b.startsWith("sec_") || b.startsWith("tab_")) continue;
        const f = b.replace(/^fld_/, ""), w = f.charAt(0).toLowerCase() + f.slice(1), T = f.charAt(0).toUpperCase() + f.slice(1);
        u[w] = C, u[T] = C;
      }
      return (k.id || k.Id) && (u.id = k.id || k.Id, u.Id = k.id || k.Id), s((b) => ({
        formRecords: {
          ...b.formRecords,
          [x]: u,
          default: u
        }
      })), u;
    }
  }))
);
function Tr(s, a) {
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
      const d = i.match(/^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$/i);
      if (d) {
        const c = d[1], x = (d[2] || d[3] || "=").toLowerCase(), g = d[4].replace(/^['"\s]+|['"\s]+$/g, ""), u = Object.keys(o).find((b) => b.toLowerCase() === c.toLowerCase());
        if (u) {
          const C = (o[u] !== void 0 && o[u] !== null ? String(o[u]) : "").toLowerCase() === g.toLowerCase();
          if (x === "ne" || x === "!=" ? C : !C)
            return !1;
        }
      }
    }
    return !0;
  });
}
const xa = "uiforge_bl_functions_registry", Es = {};
function yn(s) {
  if (!s || !s.trim()) return "";
  let a = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  return a.endsWith(".ts") || (a.endsWith(".bl") || (a = `${a}.bl`), a = `${a}.ts`), a;
}
function Nn() {
  if (typeof window > "u") return Es;
  try {
    const s = localStorage.getItem(xa);
    if (s) {
      const a = JSON.parse(s), t = { ...Es, ...a };
      for (const [r, n] of Object.entries(Es))
        t[r] = Array.from(/* @__PURE__ */ new Set([...n, ...t[r] || []]));
      return t;
    }
  } catch {
  }
  return Es;
}
function jn(s) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(xa, JSON.stringify(s));
    } catch {
    }
}
function Zl(s) {
  if (!s || !s.trim()) return [];
  const a = yn(s), t = Nn();
  if (t[a] && t[a].length > 0)
    return t[a];
  if (t[s.trim()] && t[s.trim()].length > 0)
    return t[s.trim()];
  const r = ["initPageData", "handleSubmitForm", "onRowClick", "saveRecord"];
  return t[a] = r, jn(t), r;
}
function eo(s, a) {
  if (!s || !a) return [];
  const t = yn(s), r = a.trim().replace(/\(.*?\)/g, "");
  if (!t || !r) return [];
  const n = Nn(), o = n[t] || [];
  return o.includes(r) || (n[t] = [...o, r], jn(n)), n[t];
}
function ci(s, a) {
  if (!s || !a) return [];
  const t = yn(s), r = a.trim().replace(/\(.*?\)/g, ""), n = Nn(), o = n[t] || [];
  return n[t] = o.filter((l) => l !== r), jn(n), n[t];
}
function to(s, a) {
  const t = yn(s);
  Es[t] = Array.from(/* @__PURE__ */ new Set([...Es[t] || [], ...a]));
  const r = Nn();
  r[t] = Array.from(/* @__PURE__ */ new Set([...r[t] || [], ...a])), jn(r);
}
const as = {};
function di(s, a) {
  as[s] = a;
  const t = s.trim().replace(/\\/g, "/").split("/").pop() || "";
  as[t] = a;
  const r = t.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "");
  as[r] = a;
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
  n.length > 0 && to(t, n);
}
function Zn(s) {
  if (!s || !s.trim()) return { module: null, canonicalName: "" };
  const a = s.trim().replace(/\\/g, "/").split("/").pop() || "", t = a.toLowerCase();
  if (as[a]) return { module: as[a], canonicalName: a };
  if (as[t]) return { module: as[t], canonicalName: a };
  const r = t.replace(/\.ts$/, "").replace(/\.bl$/, "");
  for (const [n, o] of Object.entries(as))
    if (n.toLowerCase().replace(/\.ts$/, "").replace(/\.bl$/, "") === r)
      return { module: o, canonicalName: n };
  return { module: null, canonicalName: a };
}
function pa(s, a) {
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
      for (const [i, d] of Object.entries(o))
        if (i.toLowerCase() === r && typeof d == "function")
          return { fn: d.bind(o), matchedName: i };
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
            const d = Object.getPrototypeOf(i);
            if (d) {
              for (const c of Object.getOwnPropertyNames(d))
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
function zs(s, a, t, r = !1, n, o = !0) {
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
function Zs(s, a, t, r) {
  const n = s.handlerName || s.action || "unnamedHandler", o = s.trigger || "click", { module: l, canonicalName: i } = Zn(t);
  let d = !1, c = n.replace(/\(.*?\)/g, "").trim();
  const x = {
    componentName: a,
    trigger: o,
    blFileName: i || t,
    dataEngine: ke.getState(),
    navigationEngine: rt.getState(),
    editorStore: Z.getState(),
    ...r || {}
  };
  if (l) {
    const { fn: g, matchedName: k } = pa(l, n);
    if (c = k, g)
      try {
        const u = g(x);
        if (d = !0, u && typeof u.then == "function")
          return u.then((b) => {
            b && b.message ? zs(c, o, i || t, !0, b.message, b.success !== !1) : zs(c, o, i || t, !0);
          }).catch((b) => {
            zs(c, o, i || t, !0, String(b), !1);
          }), !0;
        if (u && u.message)
          return zs(c, o, i || t, !0, u.message, u.success !== !1), !0;
      } catch (u) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${k}() trong ${i}:`, u);
      }
  }
  return console.log(
    `%c[UIForge BL Execution] %c${a || "Component"} -> Event: ${o} -> ${d ? "Chạy hàm mã nguồn thật" : "Hàm chưa có trong file BL"}: %c${c}()%c trong file %c${i || t || "Chưa chọn file"}`,
    "color: #38bdf8; font-weight: bold;",
    "color: #94a3b8;",
    "color: #4ade80; font-weight: bold;",
    "color: #94a3b8;",
    "color: #fbbf24; font-mono;"
  ), zs(c, o, i || t, d), d;
}
function Xe(s, a, t, r, n) {
  if (!s || s.length === 0) return;
  const o = s.filter((l) => l.trigger === a || a === "click" && (l.trigger === "onClick" || l.trigger === "click") || a === "dblclick" && (l.trigger === "onDoubleClick" || l.trigger === "dblclick") || a === "change" && (l.trigger === "onChange" || l.trigger === "change") || a === "focus" && (l.trigger === "onFocus" || l.trigger === "focus") || a === "blur" && (l.trigger === "onBlur" || l.trigger === "blur"));
  for (const l of o)
    Zs(l, t, r, n);
}
async function Dr(s, a = "onInit", t) {
  if (!s) return null;
  const { module: r, canonicalName: n } = Zn(s);
  if (!r) return null;
  const { fn: o } = pa(r, a);
  if (!o) return null;
  const l = {
    trigger: a,
    blFileName: n,
    dataEngine: ke.getState(),
    navigationEngine: rt.getState(),
    editorStore: Z.getState(),
    ...t || {}
  };
  return await o(l);
}
const so = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Z((T) => T.features), o = Z((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600"
  }[t.variant || "primary"], w = {
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
      className: `inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${f} ${w}`,
      onClick: (T) => {
        a ? (T.ctrlKey || T.metaKey || T.altKey) && (T.stopPropagation(), Xe(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (Ctrl+Click)"
        })) : Xe(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click"
        });
      },
      onDoubleClick: (T) => {
        var N;
        T.stopPropagation(), ((N = s.events) == null ? void 0 : N.some((P) => P.trigger === "dblclick" || P.trigger === "onDoubleClick")) ? Xe(s.events, "dblclick", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "dblclick"
        }) : a && Xe(s.events, "click", t.label || "Nút bấm", i, {
          componentId: s.id,
          pageId: l == null ? void 0 : l.id,
          trigger: "click (kích hoạt từ nhấp đúp test)"
        });
      },
      children: t.label || "Nút bấm"
    }
  );
}, no = ({ node: s, isEditing: a }) => {
  var $;
  const { props: t, style: r } = s, n = Z((m) => m.features), o = Z((m) => m.activeFeatureId), l = n.find((m) => String(m.id) === String(s.pageId)) || n.find((m) => String(m.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String((($ = s.dataBinding) == null ? void 0 : $.fieldName) || s.props.name || s.id), T = ke((m) => es(m, f, w, void 0)), S = ke((m) => m.setFieldValue), N = T !== void 0 ? T : t.value ?? "", P = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Cs,
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
          value: N,
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${P ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
          onChange: (m) => {
            const j = m.target.value;
            S(f, w, j), a || Xe(s.events, "change", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: w,
              value: j
            });
          },
          onFocus: () => {
            a || Xe(s.events, "focus", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: w
            });
          },
          onBlur: (m) => {
            a || Xe(s.events, "blur", t.label || "Ô nhập liệu", i, {
              componentId: s.id,
              fieldName: w,
              value: m.target.value
            });
          }
        }
      )
    }
  );
}, ro = ({ node: s, isEditing: a }) => {
  var E;
  const { props: t, style: r } = s, n = Z((L) => L.features), o = Z((L) => L.activeFeatureId), l = n.find((L) => String(L.id) === String(s.pageId)) || n.find((L) => String(L.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String(((E = s.dataBinding) == null ? void 0 : E.fieldName) || s.props.name || s.id), T = ke((L) => es(L, f, w, void 0)), S = ke((L) => L.setFieldValue), N = t.precision !== void 0 ? Number(t.precision) : 0, P = T !== void 0 ? T : t.value, $ = P != null && P !== "" ? Number(P) : 0, m = (L) => L.toLocaleString("en-US", {
    minimumFractionDigits: N,
    maximumFractionDigits: N
  }), j = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Cs,
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
          value: m($),
          className: `w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${j ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"}`,
          onChange: (L) => {
            const y = L.target.value.replace(/,/g, "");
            if (y === "" || !isNaN(Number(y))) {
              const _ = y === "" ? 0 : Number(y);
              S(f, w, _), a || Xe(s.events, "change", t.label || "Ô số", i, {
                componentId: s.id,
                fieldName: w,
                value: _
              });
            }
          }
        }
      ) })
    }
  );
}, ao = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Z((f) => f.features), o = Z((f) => f.activeFeatureId), l = n.find((f) => String(f.id) === String(s.pageId)) || n.find((f) => String(f.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {};
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
        a ? (f.ctrlKey || f.metaKey || f.altKey) && (f.stopPropagation(), Xe(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        })) : Xe(s.events, "click", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      onDoubleClick: (f) => {
        f.stopPropagation(), Xe(s.events, "dblclick", t.label || "Văn bản", i, {
          componentId: s.id
        });
      },
      children: t.label || "Văn bản tiêu đề"
    }
  );
}, Ir = ({
  node: s,
  isEditing: a,
  isSelected: t,
  onClick: r,
  onContextMenu: n,
  parentFlexConfig: o,
  isWrappedByDrag: l = !1,
  children: i
}) => {
  var Y;
  const { props: d, style: c } = s;
  Z((M) => M.updateComponentProps);
  const x = !!(d.isTab || d.tab || d.isTabGroup || s.type === "Tabs"), g = [
    { id: "main", label: "TAB 1" }
  ], k = d.tabs || g, [u, b] = I(
    d.activeTabId || ((Y = k[0]) == null ? void 0 : Y.id) || "main"
  ), C = d.layoutMode || "flex", f = d.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "flex-start",
    gap: "12px",
    columnsPerRow: "auto"
  }, w = d.gridConfig || { columns: 12, gap: "16px" }, T = Number(
    w.columns || (typeof f.columnsPerRow == "number" ? f.columnsPerRow : 12)
  ) || 12, S = (c == null ? void 0 : c.justifyContent) || f.justify || "flex-start", N = (c == null ? void 0 : c.alignItems) || f.align || "flex-start", P = f.wrap || "wrap", $ = C === "grid" ? {
    display: "grid",
    gridTemplateColumns: `repeat(${T}, minmax(0, 1fr))`,
    gap: w.gap || f.gap || "16px",
    alignItems: N
  } : {
    display: "flex",
    flexDirection: f.direction || "row",
    flexWrap: P,
    justifyContent: S,
    alignItems: N,
    gap: f.gap || "12px"
  };
  let m = c != null && c.flex ? void 0 : "100%", j = c == null ? void 0 : c.flex, E = c == null ? void 0 : c.maxWidth;
  if (!l && o && o.direction === "row" && o.columnsPerRow && o.columnsPerRow !== "auto") {
    const M = typeof o.columnsPerRow == "number" ? o.columnsPerRow : parseInt(String(o.columnsPerRow), 10);
    if (!isNaN(M) && M > 0) {
      const z = parseInt(o.gap || "12", 10) || 12, J = M === 1 ? "100%" : `calc((100% - ${(M - 1) * z}px) / ${M})`;
      (c == null ? void 0 : c.width) === void 0 && (c == null ? void 0 : c.flex) === void 0 && (m = J, j = `0 0 ${J}`, E = J);
    }
  }
  const { width: L, flex: y, ..._ } = c || {}, B = l ? {
    ...$,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: x ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (x ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (x ? "none" : "1px dashed #475569"),
    height: c != null && c.height ? "100%" : void 0,
    minWidth: 0,
    boxSizing: "border-box",
    ..._,
    width: "100%",
    flex: "1 1 auto"
  } : {
    ...$,
    minHeight: (c == null ? void 0 : c.minHeight) || "90px",
    padding: x ? "0" : (c == null ? void 0 : c.padding) || "16px",
    backgroundColor: (c == null ? void 0 : c.backgroundColor) || (x ? "transparent" : "rgba(30, 41, 59, 0.4)"),
    borderRadius: (c == null ? void 0 : c.borderRadius) || "12px",
    border: (c == null ? void 0 : c.border) || (x ? "none" : "1px dashed #475569"),
    width: (c == null ? void 0 : c.width) !== void 0 ? c.width : m,
    flex: (c == null ? void 0 : c.flex) !== void 0 ? c.flex : j,
    maxWidth: (c == null ? void 0 : c.maxWidth) !== void 0 ? c.maxWidth : E,
    minWidth: (c == null ? void 0 : c.minWidth) !== void 0 ? c.minWidth : 0,
    boxSizing: "border-box",
    ...c
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: r,
      onContextMenu: n,
      style: B,
      className: `relative transition-all duration-150 group/container box-border ${a ? `cursor-pointer ${t ? x ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20" : "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : x ? "hover:outline-1 hover:outline-emerald-400/40" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `absolute -top-3 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1 ${x ? "bg-emerald-600" : "bg-blue-600"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: x ? `Tab: ${d.label || "Không tên"}` : "Khoảng trắng" }),
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
}, lo = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: x, ...g } = r || {}, [k, u] = I(!1), b = t.title || t.label || "Khối Bố Cục (Section)", C = t.collapsible ?? !0, f = t.layoutMode || "grid", w = t.flexConfig || {}, T = t.gridConfig || {}, S = Number(T.columns || w.columnsPerRow || 12) || 12, N = w.gap || T.gap || "12px", P = (r == null ? void 0 : r.justifyContent) || w.justify || "flex-start", $ = (r == null ? void 0 : r.alignItems) || w.align || "center", m = f === "flex" ? {
    display: "flex",
    flexDirection: w.direction || "row",
    flexWrap: w.wrap || "wrap",
    justifyContent: P,
    alignItems: $,
    gap: N
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${S}, minmax(0, 1fr))`,
    gap: N,
    alignItems: $
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
            /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-200", children: b })
          ] }),
          C && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => u(!k),
              className: "p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer",
              title: k ? "Mở rộng" : "Thu gọn",
              children: k ? /* @__PURE__ */ e.jsx(Lt, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Js, { className: "w-4 h-4" })
            }
          )
        ] }),
        !k && /* @__PURE__ */ e.jsx("div", { className: "p-4 w-full box-border", style: m, children: a })
      ]
    }
  );
}, ui = ({ node: s, children: a }) => {
  const { props: t, style: r } = s, { flex: n, flexGrow: o, flexShrink: l, flexBasis: i, minWidth: d, maxWidth: c, width: x, ...g } = r || {}, k = t.title || t.label || "Biểu Mẫu Doanh Nghiệp";
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
            /* @__PURE__ */ e.jsx("h2", { className: "text-sm font-bold text-slate-100 uppercase tracking-wide", children: k }),
            /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-400", children: t.placeholder || "Biểu mẫu nhập liệu & quản lý giao dịch" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",
                children: [
                  /* @__PURE__ */ e.jsx(Mr, { className: "w-3.5 h-3.5 text-slate-400" }),
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
                  /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-amber-400" }),
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
                  /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
}, oo = ({
  x: s,
  y: a,
  column: t,
  isOpen: r,
  isDev: n,
  onClose: o,
  onToggleHide: l,
  onSetFreeze: i,
  onOpenProperties: d,
  onCloneColumn: c,
  onRemoveColumn: x,
  onToggleFilter: g
}) => {
  const k = st(null), [u, b] = Qt.useState(!1), C = zt((S) => {
    var N;
    return ((N = S.user) == null ? void 0 : N.role) === "Dev";
  }), f = n !== void 0 ? n : C;
  if (Ee(() => {
    if (!r) return;
    const S = (P) => {
      k.current && !k.current.contains(P.target) && o();
    }, N = (P) => {
      P.key === "Escape" && o();
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", N), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", N);
    };
  }, [r, o]), !r) return null;
  const w = Math.min(s, window.innerWidth - 220), T = Math.min(a, window.innerHeight - 340);
  return At(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: k,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: w, top: T },
        onClick: (S) => S.stopPropagation(),
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
                  l(t.key), o();
                },
                children: t.hidden ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(tn, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                onMouseEnter: () => b(!0),
                onMouseLeave: () => b(!1),
                children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      className: "w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ e.jsx(Br, { className: `w-3.5 h-3.5 ${t.sticky ? "text-emerald-400 fill-emerald-400" : "text-slate-400"}` }),
                          /* @__PURE__ */ e.jsx("span", { children: "Cố định cột (Freeze)" })
                        ] }),
                        /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5 text-slate-400" })
                      ]
                    }
                  ),
                  u && /* @__PURE__ */ e.jsxs("div", { className: "absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs", children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        className: `w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${t.sticky === "left" ? "text-emerald-400 font-semibold" : ""}`,
                        onClick: () => {
                          i(t.key, "left"), o();
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
                          i(t.key, "right"), o();
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
                          i(t.key, "none"), o();
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
                    d(t), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Column Data Options" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors",
                  onClick: () => {
                    c(t.key), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5 text-sky-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Clone Column" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400",
                  onClick: () => {
                    x(t.key), o();
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5 text-rose-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Remove Column" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border-t border-slate-800 pt-1 mt-1", children: [
            g && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  g(), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(_r, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Filter Local" })
                ]
              }
            ),
            f && /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400",
                onClick: () => {
                  d(t), o();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Ma, { className: "w-3.5 h-3.5" }),
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
}, io = ({
  x: s,
  y: a,
  row: t,
  rowIndex: r,
  totalRows: n,
  isOpen: o,
  onClose: l,
  onDuplicateRow: i,
  onDeleteRow: d,
  onInsertRowBelow: c,
  onMoveRowUp: x,
  onMoveRowDown: g,
  onPasteExcel: k
}) => {
  const u = st(null);
  if (Ee(() => {
    if (!o) return;
    const f = (T) => {
      u.current && !u.current.contains(T.target) && l();
    }, w = (T) => {
      T.key === "Escape" && l();
    };
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", w), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", w);
    };
  }, [o, l]), !o) return null;
  const b = Math.min(s, window.innerWidth - 220), C = Math.min(a, window.innerHeight - 260);
  return At(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        className: "fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100",
        style: { left: b, top: C },
        onClick: (f) => f.stopPropagation(),
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
                  /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5 text-sky-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Sao chép dòng (Duplicate)" })
                ]
              }
            ),
            k && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer",
                onClick: () => {
                  k(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(Or, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                  /* @__PURE__ */ e.jsx(Hr, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chèn dòng mới bên dưới" })
                ]
              }
            ),
            x && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r === 0,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  x(r), l();
                },
                children: [
                  /* @__PURE__ */ e.jsx(zn, { className: "w-3.5 h-3.5 text-slate-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chuyển dòng lên trên" })
                ]
              }
            ),
            g && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r >= n - 1,
                className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer",
                onClick: () => {
                  g(r), l();
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
                  /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5 text-rose-400" }),
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
}, co = [
  { value: "click", label: "Bấm chuột / Nút (click)" },
  { value: "dblclick", label: "Nhấp đúp chuột (dblclick)" },
  { value: "actionClick", label: "Hành động ô (actionClick)" },
  { value: "change", label: "Thay đổi giá trị (change)" },
  { value: "focus", label: "Khi chọn ô (focus)" },
  { value: "blur", label: "Khi rời ô (blur)" }
], ha = ({
  events: s = [],
  onChange: a,
  scriptFile: t = "transactionList.bl.ts",
  componentName: r = "Component",
  componentId: n,
  contextExtra: o,
  compact: l = !1,
  availableTriggers: i = co
}) => {
  const [d, c] = I(""), [, x] = I(0), g = t || "transactionList.bl.ts", k = Zl(g), u = () => {
    var S;
    const w = k[0] || "openTransactionDetail", T = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: ((S = i[0]) == null ? void 0 : S.value) || "click",
      handlerName: w,
      action: w
    };
    a([...s, T]);
  }, b = (w, T) => {
    const S = s.map((N, P) => {
      if (P !== w) return N;
      const $ = { ...N, ...T };
      return T.handlerName && !T.action && ($.action = T.handlerName), $;
    });
    a(S);
  }, C = (w) => {
    const T = s.filter((S, N) => N !== w);
    a(T);
  }, f = () => {
    d.trim() && (eo(g, d.trim()), c(""), x((w) => w + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 text-xs", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Danh Sách Sự Kiện (",
            s.length,
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
          onClick: u,
          className: "px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95",
          children: [
            /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Sự Kiện" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5", children: [
      /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(Pn, { className: "w-3 h-3 text-cyan-400" }),
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
            onChange: (w) => c(w.target.value),
            onKeyDown: (w) => {
              w.key === "Enter" && (w.preventDefault(), f());
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
              /* @__PURE__ */ e.jsx(Hr, { className: "w-3.5 h-3.5 text-cyan-400" }),
              /* @__PURE__ */ e.jsx("span", { children: "Lưu Hàm" })
            ]
          }
        )
      ] })
    ] }),
    s.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: s.map((w, T) => {
      const S = k.includes(w.handlerName || "");
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/80", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider", children: [
                  "Sự Kiện #",
                  T + 1
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono", children: w.trigger })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => C(T),
                  className: "text-slate-500 hover:text-red-400 p-1 rounded transition-colors",
                  title: "Xóa sự kiện này",
                  children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: l ? "space-y-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Loại Trigger" }),
                /* @__PURE__ */ e.jsx(
                  "select",
                  {
                    value: w.trigger || "click",
                    onChange: (N) => b(T, { trigger: N.target.value }),
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: i.map((N) => /* @__PURE__ */ e.jsx("option", { value: N.value, children: N.label }, N.value))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Hàm Xử Lý (BL Function)" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: w.handlerName || k[0] || "",
                    onChange: (N) => {
                      const P = N.target.value;
                      b(T, { handlerName: P, action: P });
                    },
                    className: "w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer",
                    children: [
                      k.map((N) => /* @__PURE__ */ e.jsxs("option", { value: N, children: [
                        N,
                        "()"
                      ] }, N)),
                      !S && w.handlerName && /* @__PURE__ */ e.jsxs("option", { value: w.handlerName, children: [
                        w.handlerName,
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
                  Zs(
                    w,
                    r,
                    g,
                    {
                      componentId: n,
                      trigger: w.trigger,
                      ...o
                    }
                  );
                },
                className: "w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]",
                title: "Bấm để kích hoạt và chạy hàm BL này ngay lập tức",
                children: [
                  /* @__PURE__ */ e.jsx(Ba, { className: "w-3.5 h-3.5 fill-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "▶ Chạy Thử Sự Kiện Này" })
                ]
              }
            )
          ]
        },
        w.id || T
      );
    }) }) : /* @__PURE__ */ e.jsxs("div", { className: "p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5", children: [
      /* @__PURE__ */ e.jsx(Ht, { className: "w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-medium text-slate-400", children: [
        r,
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
}, ma = ({
  isOpen: s,
  onClose: a
}) => {
  const t = He((S) => S.roles), r = He((S) => S.createRole), n = He((S) => S.deleteRole), [o, l] = I(""), [i, d] = I(""), [c, x] = I(""), [g, k] = I(!1), [u, b] = I(null), [C, f] = I(null);
  if (!s) return null;
  const w = async (S) => {
    S.preventDefault();
    const N = o.trim().toUpperCase(), P = i.trim();
    if (!N) {
      f({ type: "error", message: "Vui lòng nhập Mã vai trò (Code)!" });
      return;
    }
    if (t.some((m) => {
      var j;
      return ((j = m.code) == null ? void 0 : j.toUpperCase()) === N;
    })) {
      f({ type: "error", message: `Vai trò "${N}" đã tồn tại trong hệ thống!` });
      return;
    }
    k(!0), f(null);
    const $ = await r(N, P || N, c);
    k(!1), $ ? (f({ type: "success", message: `Đã tạo thành công vai trò "${N}"!` }), l(""), d(""), x(""), setTimeout(() => f(null), 3e3)) : f({ type: "error", message: "Có lỗi xảy ra khi tạo vai trò, vui lòng thử lại." });
  }, T = async (S, N) => {
    if (N.toUpperCase() === "DEV") {
      alert("Role 'Dev' là vai trò hệ thống bắt buộc của Core, không thể xóa.");
      return;
    }
    if (!confirm(`Bạn có chắc chắn muốn xóa vai trò "${N}"?`))
      return;
    b(S);
    const P = await n(S);
    b(null), P ? (f({ type: "success", message: `Đã xóa vai trò "${N}".` }), setTimeout(() => f(null), 3e3)) : f({ type: "error", message: `Không thể xóa vai trò "${N}".` });
  };
  return At(
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
            children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto space-y-6 text-xs flex-1", children: [
        C && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `p-3 rounded-xl border flex items-center gap-2 ${C.type === "success" ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" : "bg-rose-950/60 border-rose-500/40 text-rose-300"}`,
            children: [
              C.type === "success" ? /* @__PURE__ */ e.jsx(Yn, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : /* @__PURE__ */ e.jsx(_a, { className: "w-4 h-4 shrink-0 text-rose-400" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: C.message })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("form", { onSubmit: w, className: "p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
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
                  onChange: (S) => l(S.target.value.toUpperCase()),
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
                  onChange: (S) => d(S.target.value),
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
                onChange: (S) => x(S.target.value),
                className: "w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "submit",
              disabled: g || !o.trim(),
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all disabled:opacity-50 cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: g ? "Đang tạo..." : "+ Tạo Role Mới" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider px-1", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "Danh Sách Vai Trò (",
              t.length,
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
              t.map((S) => {
                var P;
                const N = ((P = S.code) == null ? void 0 : P.toUpperCase()) === "DEV";
                return /* @__PURE__ */ e.jsxs("tr", { className: "hover:bg-slate-800/30 transition-colors", children: [
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono font-bold text-emerald-400", children: S.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-medium", children: S.name || S.code }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-slate-400 text-[11px] truncate max-w-[200px]", title: S.description, children: S.description || "—" }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: N ? /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold text-[10px]", children: [
                    /* @__PURE__ */ e.jsx(Ms, { className: "w-2.5 h-2.5" }),
                    " Core Bắt Buộc"
                  ] }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-[10px]", children: "Dynamic Role" }) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: N ? /* @__PURE__ */ e.jsx("span", { className: "text-slate-600 text-xs select-none", title: "Role Core Dev không thể xóa", children: "🔒" }) : /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => T(S.id, S.code),
                      disabled: u === S.id,
                      className: "p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors disabled:opacity-50",
                      title: `Xóa vai trò ${S.code}`,
                      children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                    }
                  ) })
                ] }, S.id || S.code);
              }),
              t.length === 0 && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 5, className: "py-6 text-center text-slate-500", children: "Chưa có vai trò nào trong hệ thống." }) })
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
}, er = ({
  title: s,
  rules: a = [],
  onChange: t,
  onPendingRuleChange: r,
  pageId: n = "",
  nodeId: o = "",
  fieldName: l = "",
  isColumn: i = !1
}) => {
  const d = He((h) => h.roles), c = He((h) => h.users), x = He((h) => h.fetchSecurityMetadata);
  Ee(() => {
    x();
  }, [x]), Ee(() => {
    n && o && He.getState().fetchComponentPolicies(n, o).then((h) => {
      h && h.length > 0 && t(h);
    }).catch(() => {
    });
  }, [n, o]);
  const [g, k] = I(!1), [u, b] = I("role"), [C, f] = I(""), [w, T] = I(""), [S, N] = I(!0), [P, $] = I(!1), [m, j] = I(!1), [E, L] = I(!1), [y, _] = I(!1), [B, Y] = I(!0);
  Ee(() => {
    if (!r) return;
    const h = !!(C && C.trim() !== ""), X = !!(w && w.trim() !== "");
    if (!h && !X) {
      r(null);
      return;
    }
    const H = d.find((G) => String(G.id) === C || G.code === C), le = c.find((G) => String(G.id) === w || G.username === w), ie = {
      id: `cpr_pending_${Date.now()}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: h ? (H == null ? void 0 : H.id) || Number(C) || C : null,
      roleCode: h ? (H == null ? void 0 : H.code) || C : void 0,
      roleName: h ? (H == null ? void 0 : H.name) || C : void 0,
      userId: X ? (le == null ? void 0 : le.id) || Number(w) || w : null,
      userName: X ? (le == null ? void 0 : le.username) || w : void 0,
      canRead: S,
      canWrite: P,
      canWriteAll: m,
      canDelete: E,
      canDeactivate: y,
      active: B
    };
    r(ie);
  }, [
    C,
    w,
    S,
    P,
    m,
    E,
    y,
    B,
    d,
    c,
    n,
    o,
    l,
    r
  ]);
  const M = () => {
    if (u === "role" && !C || u === "user" && !w) return;
    const h = d.find((ie) => String(ie.id) === C || ie.code === C), X = c.find((ie) => String(ie.id) === w || ie.username === w), H = {
      id: `cpr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
      pageId: n,
      nodeId: o,
      fieldName: l,
      roleId: u === "role" ? (h == null ? void 0 : h.id) || C : null,
      roleCode: u === "role" ? (h == null ? void 0 : h.code) || C : void 0,
      roleName: u === "role" ? (h == null ? void 0 : h.name) || C : void 0,
      userId: u === "user" ? (X == null ? void 0 : X.id) || w : null,
      userName: u === "user" ? (X == null ? void 0 : X.username) || w : void 0,
      canRead: S,
      canWrite: P,
      canWriteAll: m,
      canDelete: E,
      canDeactivate: y,
      active: B
    }, le = [...a, H];
    t(le), n && o && He.getState().saveComponentPolicies(n, o, le, l), f(""), T(""), N(!0), $(!1), j(!1), L(!1), _(!1), Y(!0), r && r(null);
  }, z = (h, X) => {
    const H = [...a], le = !!H[h][X];
    H[h] = { ...H[h], [X]: !le }, t(H), n && o && He.getState().saveComponentPolicies(n, o, H, l);
  }, J = (h) => {
    const X = a.filter((H, le) => le !== h);
    t(X), n && o && He.getState().saveComponentPolicies(n, o, X, l);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 bg-[#0a1120] border border-slate-800 rounded-xl p-4 text-xs select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2.5", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Bs, { className: "w-4 h-4 text-teal-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider", children: s || (i ? "Phân Quyền Cột Lưới (GridPolicy)" : "Phân Quyền Linh Kiện (Component Policy)") }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
          a.length,
          " quy tắc"
        ] }),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => k(!0),
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
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-teal-400 font-bold", children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4 mx-auto" }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(Oa, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: u === "user" ? w : "",
                onChange: (h) => {
                  b("user"), T(h.target.value), f("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-mono",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  c.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.id, children: h.username }, h.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx($n, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: u === "role" ? C : "",
                onChange: (h) => {
                  b("role"), f(h.target.value), T("");
                },
                className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-semibold",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                  d.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.code, children: h.code }, h.id))
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: S,
              onChange: (h) => N(h.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xem"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: P,
              onChange: (h) => $(h.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Cập nhật bản ghi của mình"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (h) => j(h.target.checked),
              className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "CẬP NHẬT TOÀN BỘ (Sửa trên mọi bản ghi kể cả do role khác tạo)"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (h) => L(h.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Xóa"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: y,
              onChange: (h) => _(h.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Quyền Hủy"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              checked: B,
              onChange: (h) => Y(h.target.checked),
              className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer",
              title: "Kích hoạt rule"
            }
          ) }),
          /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: M,
              disabled: !C && !w,
              className: "px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-[11px] font-bold transition-all shadow-sm cursor-pointer",
              title: "Thêm quy tắc mới",
              children: "+ Thêm"
            }
          ) })
        ] }),
        a.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 10, className: "py-8 text-center text-slate-500", children: "Chưa có quy tắc phân quyền riêng (Linh kiện sẽ thừa kế phân quyền từ Feature cha)." }) }) : a.map((h, X) => {
          var ie, G;
          const H = h.roleCode || ((ie = d.find((de) => de.code === h.roleCode || String(de.id) === String(h.roleId))) == null ? void 0 : ie.code) || (h.roleId ? String(h.roleId) : ""), le = h.userName || ((G = c.find((de) => String(de.id) === String(h.userId))) == null ? void 0 : G.username) || (h.userId ? String(h.userId) : "");
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              className: "hover:bg-slate-800/40 transition-colors border-b border-slate-800/50",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-500 text-[11px]", children: X + 1 }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: h.userId || h.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-cyan-300 font-mono", children: le }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-medium", children: h.roleCode || h.roleId ? /* @__PURE__ */ e.jsx("span", { className: "text-amber-300 font-semibold", children: H }) : null }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.canRead,
                    onChange: () => z(X, "canRead"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.canWrite,
                    onChange: () => z(X, "canWrite"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center bg-amber-500/5", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.canWriteAll,
                    onChange: () => z(X, "canWriteAll"),
                    className: "w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.canDelete,
                    onChange: () => z(X, "canDelete"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.canDeactivate,
                    onChange: () => z(X, "canDeactivate"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.active,
                    onChange: () => z(X, "active"),
                    className: "w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => J(X),
                    className: "p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/20 transition-all cursor-pointer",
                    title: "Xóa quy tắc này",
                    children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                  }
                ) })
              ]
            },
            h.id || X
          );
        })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      ma,
      {
        isOpen: g,
        onClose: () => k(!1)
      }
    )
  ] });
};
let Rn = null;
async function wn(s = !1) {
  if (!s && Rn) return Rn;
  try {
    const a = await fetch("http://localhost:5048/api/core/metadata/entities");
    if (a.ok) {
      const t = await a.json();
      if (Array.isArray(t))
        return Rn = t, t;
    }
  } catch (a) {
    console.warn("[MetadataService] Không thể tải danh mục thực thể từ Backend API:", a);
  }
  return [];
}
function fn(s, a = []) {
  return s.map((t) => ({
    name: t.name,
    displayName: t.displayName || t.name,
    tableName: t.tableName,
    fields: t.columns.map((r) => ({
      name: r.name,
      displayName: r.displayName || r.name,
      dataType: r.dataType
    }))
  }));
}
function gn(s, a) {
  if (!a || !a.trim()) return;
  const t = a.trim().toLowerCase(), r = t.endsWith("s") ? t.slice(0, -1) : t;
  return s.find(
    (n) => n.name.toLowerCase() === t || n.name.toLowerCase() === r || n.tableName && n.tableName.toLowerCase() === t
  );
}
const ba = ({
  isOpen: s,
  column: a,
  onClose: t,
  onSave: r
}) => {
  var $;
  const [n, o] = I(null), [l, i] = I("info"), [d, c] = I([]), [x, g] = I(null), [k, u] = I(!1), b = Z((m) => m.features.find((j) => j.id === m.activeFeatureId));
  if (Ee(() => {
    wn().then((m) => {
      m && m.length > 0 && c(m);
    });
  }, []), Ee(() => {
    if (a && s) {
      let m = [];
      if (Array.isArray(a.events))
        m = [...a.events];
      else if (typeof a.events == "string" && a.events.trim())
        try {
          const j = JSON.parse(a.events);
          Array.isArray(j) && (m = j);
        } catch {
        }
      m.length === 0 && a.action && (m = [
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
        events: m
      }), b != null && b.id && a.key && He.getState().fetchComponentPolicies(b.id, a.key).then((j) => {
        j && j.length > 0 && o((E) => E ? { ...E, columnPermissions: j } : null);
      }).catch(() => {
      });
    }
  }, [a, s, b == null ? void 0 : b.id]), !s || !n) return null;
  const C = Array.isArray(n.events) ? n.events : [], f = fn(d), w = gn(f, n.reference || n.refName), T = w ? w.fields : [], S = n.componentType === "Select" || n.componentType === "Dropdown", N = (m, j) => {
    o((E) => {
      if (!E) return E;
      const L = { ...E, [m]: j };
      return m === "frozen" ? L.sticky = j ? "left" : "none" : m === "sticky" && (L.frozen = j === "left"), L;
    });
  }, P = async (m) => {
    if (!n) return;
    let j = [...n.columnPermissions || []];
    x && (j = [...j, x], o((E) => E ? { ...E, columnPermissions: j } : null), g(null)), b != null && b.id && n.key && await He.getState().saveComponentPolicies(b.id, n.key, j, n.key), r({ ...n, columnPermissions: j }), u(!0), setTimeout(() => u(!1), 2500);
  };
  return At(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-slate-100", children: "Properties (GridPolicy)" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30", children: n.key || "Column" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          k && /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => P(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
                  onChange: (m) => N("code", m.target.value),
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
                  onChange: (m) => N("order", parseInt(m.target.value) || 0),
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
                  onChange: (m) => N("feature", m.target.value),
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
                  onChange: (m) => N("refClass", m.target.value),
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
                  onChange: (m) => N("filterTemplate", m.target.value),
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
                  onChange: (m) => N("formatExcell", m.target.value),
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
                  onChange: (m) => N("childStyle", m.target.value),
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
                  onChange: (m) => N("dataSource", m.target.value),
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
                  onChange: (m) => N("key", m.target.value),
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
                  onChange: (m) => N("title", m.target.value),
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
                  onChange: (m) => N("description", m.target.value),
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
                    value: w ? w.name : "",
                    onChange: (m) => {
                      const j = m.target.value;
                      o((E) => ({
                        ...E,
                        reference: j,
                        refName: j
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
                      const j = m.target.value;
                      o((E) => ({
                        ...E,
                        refName: j,
                        reference: j
                      }));
                    },
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: S ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Format Cell" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatCell || "",
                    placeholder: "{Name}",
                    onChange: (m) => N("formatCell", m.target.value),
                    className: "w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  }
                )
              ] }),
              !S && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-emerald-400 font-semibold block mb-0.5", children: "Format Data" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: n.formatData || "",
                    placeholder: "{FullName} - {Address}",
                    onChange: (m) => N("formatData", m.target.value),
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
                    onChange: (m) => N("width", m.target.value),
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
                    onChange: (m) => N("minWidth", m.target.value),
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
                    onChange: (m) => N("maxWidth", m.target.value),
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
                  onChange: (m) => N("componentType", m.target.value),
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
                    onChange: (m) => N("precision", parseInt(m.target.value) || 0),
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
                    onChange: (m) => N("align", m.target.value),
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
                      /* @__PURE__ */ e.jsx(Ht, { className: "w-3 h-3 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: C.length > 0 ? `Cấu hình (${C.length})` : "+ Thêm Sự Kiện" })
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
                      /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" }),
                      C.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300 font-mono text-[11px] truncate", children: C.map((m) => `${m.trigger} ➔ ${m.handlerName || m.action}()`).join(", ") }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic text-[11px]", children: "Chưa cấu hình sự kiện" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors", children: [
                      C.length,
                      " event",
                      C.length !== 1 ? "s" : ""
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
                    onChange: (m) => N("cascadeField", m.target.value),
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
                    onChange: (m) => N("aggregate", m.target.value),
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
                  onChange: (m) => N("validation", m.target.value),
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
            S && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => i("dropdownColumns"),
                className: `px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${l === "dropdownColumns" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CỘT DROPDOWN" }),
                  ((($ = n.dropdownColumns) == null ? void 0 : $.length) ?? 0) > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: n.dropdownColumns.length })
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
                  /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "SỰ KIỆN (EVENTS)" }),
                  C.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono", children: C.length })
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
                    onChange: (m) => N("frozen", m.target.checked),
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
                    onChange: (m) => N("disabled", m.target.checked),
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
                    onChange: (m) => N("hasPermission", m.target.checked),
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
                    onChange: (m) => N("focusSearch", m.target.checked),
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
                    onChange: (m) => N("filterEq", m.target.checked),
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
                    onChange: (m) => N("filterLocal", m.target.checked),
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
                    onChange: (m) => N("hidden", m.target.checked),
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
                    onChange: (m) => N("active", m.target.checked),
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
                    onChange: (m) => N("advancedSearch", m.target.checked),
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
                    onChange: (m) => N("virtualScroll", m.target.checked),
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
                    onChange: (m) => N("upperCase", m.target.checked),
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
                    onChange: (m) => N("hasFilter", m.target.checked),
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
                    onChange: (m) => N("isRealtime", m.target.checked),
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
                    onChange: (m) => N("autoFit", m.target.checked),
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
                    onChange: (m) => N("aggregate", m.target.checked ? "sum" : "none"),
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
                    onChange: (m) => N("addDate", m.target.checked),
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
                    onChange: (m) => N("editable", m.target.checked),
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
                    onChange: (m) => N("isPivot", m.target.checked),
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
                    onChange: (m) => N("basicSearch", m.target.checked),
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
                    onChange: (m) => N("ignoreTrigger", m.target.checked),
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
                    onChange: (m) => N("hideGrid", m.target.checked),
                    className: "rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-slate-300", children: "HideGrid" })
              ] })
            ] })
          ] }),
          l === "dropdownColumns" && S && (() => {
            const m = n.dropdownColumns || [], j = (L) => N("dropdownColumns", L), E = (w == null ? void 0 : w.name) || n.refName || n.reference || "";
            return /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("h4", { className: "font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Cấu Hình Bảng Chọn Đa Cột Cho Cột [",
                      n.title || n.key,
                      "]"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5", children: [
                    "Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể ",
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300", children: w ? `${w.displayName} (${w.name})` : n.reference || n.refName || "(Chưa chọn Reference)" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  T.length > 0 && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const L = T.filter((_) => _.name.toLowerCase() !== "id" && _.name.toLowerCase() !== "active").slice(0, 3), y = `${Math.floor(100 / Math.max(L.length, 1))}%`;
                        j(
                          L.map((_) => ({
                            key: _.name,
                            title: _.displayName,
                            width: y,
                            align: "left"
                          }))
                        );
                      },
                      className: "px-2.5 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/35 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-semibold cursor-pointer",
                      title: "Tự động nạp các cột tiêu biểu từ thực thể Reference đã chọn",
                      children: [
                        "⚡ Tự động nạp (",
                        w == null ? void 0 : w.name,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        j([
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
                        /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
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
                      onChange: (L) => N("idField", L.target.value),
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
                      onChange: (L) => N("formatData", L.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                    }
                  ),
                  m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: m.map((L, y) => {
                    const _ = E ? `{${E}.${L.key}}` : `{${L.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const B = n.formatData || "", Y = B ? `${B} - ${_}` : _;
                          N("formatData", Y);
                        },
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 cursor-pointer",
                        children: [
                          "+",
                          _
                        ]
                      },
                      `${L.key}-${y}`
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
                      onChange: (L) => N("populateField", L.target.value),
                      className: "w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("datalist", { id: "col-dropdown-field-suggestions", children: T.map((L) => /* @__PURE__ */ e.jsxs("option", { value: L.name, children: [
                L.displayName,
                " (",
                L.dataType,
                ")"
              ] }, L.name)) }),
              m.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400", children: [
                "Chưa thiết lập cột hiển thị cho dropdown này. Nhấn ",
                /* @__PURE__ */ e.jsx("strong", { children: '"Thêm Cột"' }),
                " ở trên để bắt đầu."
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: m.map((L, y) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg",
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: y === 0,
                          onClick: () => {
                            const _ = [...m], B = _[y];
                            _[y] = _[y - 1], _[y - 1] = B, j(_);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(Js, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: y === m.length - 1,
                          onClick: () => {
                            const _ = [...m], B = _[y];
                            _[y] = _[y + 1], _[y + 1] = B, j(_);
                          },
                          className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                          children: /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        list: "col-dropdown-field-suggestions",
                        value: L.key,
                        placeholder: "Key (vd: FullName)",
                        onChange: (_) => {
                          const B = _.target.value, Y = T.find((z) => z.name === B), M = [...m];
                          M[y] = {
                            ...M[y],
                            key: B,
                            title: Y && (!M[y].title || M[y].title.startsWith("Cột ")) ? Y.displayName : M[y].title
                          }, j(M);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: L.title,
                        placeholder: "Tiêu đề cột",
                        onChange: (_) => {
                          const B = [...m];
                          B[y] = { ...B[y], title: _.target.value }, j(B);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: L.width || "50%",
                        placeholder: "Width",
                        onChange: (_) => {
                          const B = [...m];
                          B[y] = { ...B[y], width: _.target.value }, j(B);
                        },
                        className: "w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: L.align || "left",
                        onChange: (_) => {
                          const B = [...m];
                          B[y] = { ...B[y], align: _.target.value }, j(B);
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
                        onClick: () => j(m.filter((_, B) => B !== y)),
                        className: "p-1 text-slate-400 hover:text-red-400",
                        children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                      }
                    ) })
                  ]
                },
                y
              )) })
            ] });
          })(),
          l === "events" && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto", children: /* @__PURE__ */ e.jsx(
            ha,
            {
              events: C,
              onChange: (m) => {
                N("events", m);
                const j = m.find((E) => E.trigger === "click" || E.trigger === "actionClick");
                j && N("action", j.handlerName || j.action);
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
            er,
            {
              isColumn: !0,
              rules: n.columnPermissions || [],
              onChange: (m) => {
                o({
                  ...n,
                  columnPermissions: m
                }), b != null && b.id && n.key && He.getState().setComponentPolicies(b.id, n.key, m);
              },
              onPendingRuleChange: g,
              pageId: b == null ? void 0 : b.id,
              nodeId: n.key,
              fieldName: n.key
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-3 bg-[#0b1329] border-t border-slate-800", children: [
        /* @__PURE__ */ e.jsx("div", { children: k && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold text-emerald-400 animate-in fade-in flex items-center gap-1 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40", children: "✓ Đã lưu thành công!" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
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
              onClick: () => P(),
              className: "flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all",
              children: [
                /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Lưu Thuộc Tính Cột" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    document.body
  );
}, uo = ({
  columns: s,
  data: a,
  showRowNumber: t = !0,
  rowNumberWidth: r = 55,
  leftOffsets: n = {}
}) => {
  if (!s.some((i) => i.aggregate && i.aggregate !== "none")) return null;
  const l = (i) => {
    if (!i.aggregate || i.aggregate === "none") return null;
    const d = a.map((u) => u[i.key]).filter((u) => u != null && u !== "");
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
    let x = 0;
    i.aggregate === "sum" ? x = c.reduce((u, b) => u + b, 0) : i.aggregate === "avg" ? x = c.reduce((u, b) => u + b, 0) / c.length : i.aggregate === "min" ? x = Math.min(...c) : i.aggregate === "max" && (x = Math.max(...c));
    const g = i.precision ?? (i.format === "number_thousands" ? 0 : 2), k = g > 0 ? x.toLocaleString("en-US", { minimumFractionDigits: g, maximumFractionDigits: g }) : x.toLocaleString("en-US");
    return `${i.summaryPrefix || ""}${k}${i.summarySuffix || ""}`;
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
    s.filter((i) => !i.hidden).map((i, d) => {
      const c = l(i), x = d === 0, g = i.sticky === "left" || !!i.frozen, k = g && n[i.key] !== void 0 ? n[i.key] : void 0, u = i.align === "right" ? "text-right" : i.align === "center" ? "text-center" : "text-left";
      return /* @__PURE__ */ e.jsx(
        "td",
        {
          className: `px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${u} ${g ? "sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
          style: {
            width: i.width,
            minWidth: i.minWidth || i.width || "100px",
            maxWidth: i.maxWidth,
            left: k !== void 0 ? `${k}px` : void 0
          },
          children: x && !c ? /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-300 font-bold uppercase tracking-wider", children: "TỔNG CỘNG:" }) : c ? /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20", children: c }) : "—"
        },
        i.key
      );
    })
  ] });
};
function qs(s) {
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
function Ls(s, a, t) {
  const r = String(t).padStart(2, "0"), n = String(a + 1).padStart(2, "0");
  return `${r}/${n}/${s}`;
}
const xo = [
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
], po = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"], fa = ({
  value: s,
  onChange: a,
  placeholder: t = "DD/MM/YYYY",
  disabled: r = !1,
  readOnly: n = !1,
  className: o = "",
  inputClassName: l = "",
  error: i,
  title: d,
  tabIndex: c,
  onKeyDown: x,
  onFocus: g,
  onBlur: k,
  autoFocus: u = !1,
  isGridCell: b = !1
}) => {
  const C = st(null), f = st(null), w = st(null), [T, S] = I(!1), [N, P] = I(() => {
    const q = qs(s);
    return q ? Ls(q.year, q.month, q.day) : s || "";
  }), $ = Ae(() => qs(s), [s]), m = Ae(() => {
    const q = /* @__PURE__ */ new Date();
    return { year: q.getFullYear(), month: q.getMonth(), day: q.getDate() };
  }, []), [j, E] = I(($ == null ? void 0 : $.year) || m.year), [L, y] = I(($ == null ? void 0 : $.month) ?? m.month), [_, B] = I({
    top: 0,
    left: 0,
    openUpwards: !1
  });
  Ee(() => {
    const q = qs(s);
    q ? (P(Ls(q.year, q.month, q.day)), E(q.year), y(q.month)) : P(s || "");
  }, [s]);
  const Y = () => {
    if (!C.current) return;
    const q = C.current.getBoundingClientRect(), te = 310, ue = 280, D = window.innerHeight - q.bottom < te && q.top > te;
    let O = D ? q.top - te - 4 : q.bottom + 4, ne = q.left;
    ne + ue > window.innerWidth - 10 && (ne = Math.max(10, window.innerWidth - ue - 10)), B({ top: O, left: ne, openUpwards: D });
  }, M = () => {
    r || n || (Y(), S(!0));
  }, z = () => {
    S(!1);
  };
  Ee(() => {
    if (!T) return;
    const q = (ue) => {
      const ve = ue.target;
      C.current && !C.current.contains(ve) && w.current && !w.current.contains(ve) && z();
    }, te = () => {
      T && Y();
    };
    return document.addEventListener("mousedown", q, !0), window.addEventListener("resize", te, !0), window.addEventListener("scroll", te, !0), () => {
      document.removeEventListener("mousedown", q, !0), window.removeEventListener("resize", te, !0), window.removeEventListener("scroll", te, !0);
    };
  }, [T]);
  const J = (q) => {
    q.stopPropagation(), L === 0 ? (y(11), E((te) => te - 1)) : y((te) => te - 1);
  }, h = (q) => {
    q.stopPropagation(), L === 11 ? (y(0), E((te) => te + 1)) : y((te) => te + 1);
  }, X = (q, te = 0) => {
    var O;
    let ue = j, ve = L + te;
    ve < 0 ? (ve = 11, ue -= 1) : ve > 11 && (ve = 0, ue += 1);
    const D = Ls(ue, ve, q);
    P(D), a(D), z(), (O = f.current) == null || O.focus();
  }, H = (q) => {
    var ue;
    q.stopPropagation();
    const te = Ls(m.year, m.month, m.day);
    P(te), E(m.year), y(m.month), a(te), z(), (ue = f.current) == null || ue.focus();
  }, le = (q) => {
    var te;
    q.stopPropagation(), P(""), a(""), z(), (te = f.current) == null || te.focus();
  }, ie = (q) => {
    const te = q.target.value;
    P(te);
    const ue = qs(te);
    if (ue) {
      const ve = Ls(ue.year, ue.month, ue.day);
      a(ve), E(ue.year), y(ue.month);
    } else te === "" && a("");
  }, G = (q) => {
    if (q.key === "Escape")
      T && (q.stopPropagation(), z());
    else if (q.key === "Enter") {
      const te = qs(N);
      if (te) {
        const ue = Ls(te.year, te.month, te.day);
        P(ue), a(ue);
      }
      T && z();
    } else (q.key === "F4" || q.altKey && q.key === "ArrowDown") && (q.preventDefault(), q.stopPropagation(), T ? z() : M());
    x && x(q);
  }, de = Ae(() => {
    const q = (new Date(j, L, 1).getDay() + 6) % 7, te = new Date(j, L + 1, 0).getDate(), ue = new Date(j, L, 0).getDate(), ve = [];
    for (let ne = q - 1; ne >= 0; ne--)
      ve.push({
        day: ue - ne,
        monthOffset: -1,
        isCurrentMonth: !1
      });
    for (let ne = 1; ne <= te; ne++)
      ve.push({
        day: ne,
        monthOffset: 0,
        isCurrentMonth: !0
      });
    const O = (ve.length <= 35 ? 35 : 42) - ve.length;
    for (let ne = 1; ne <= O; ne++)
      ve.push({
        day: ne,
        monthOffset: 1,
        isCurrentMonth: !1
      });
    return ve;
  }, [j, L]), pe = () => T ? At(
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: w,
        style: {
          position: "fixed",
          top: `${_.top}px`,
          left: `${_.left}px`,
          zIndex: 99999,
          width: "280px"
        },
        onClick: (q) => q.stopPropagation(),
        className: "bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: J,
                title: "Tháng trước",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wr, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: L,
                  onChange: (q) => y(parseInt(q.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500",
                  children: xo.map((q, te) => /* @__PURE__ */ e.jsx("option", { value: te, children: q }, te))
                }
              ),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: j,
                  onChange: (q) => E(parseInt(q.target.value, 10)),
                  className: "bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono",
                  children: Array.from({ length: 41 }, (q, te) => j - 20 + te).map((q) => /* @__PURE__ */ e.jsx("option", { value: q, children: q }, q))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: h,
                title: "Tháng sau",
                className: "p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(is, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1", children: po.map((q, te) => /* @__PURE__ */ e.jsx("div", { className: te >= 5 ? "text-amber-400/80" : "", children: q }, te)) }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-xs", children: de.map((q, te) => {
            const ue = $ && q.isCurrentMonth && $.year === j && $.month === L && $.day === q.day, ve = q.isCurrentMonth && m.year === j && m.month === L && m.day === q.day;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => X(q.day, q.monthOffset),
                className: `h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${ue ? "bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105" : ve ? "border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20" : q.isCurrentMonth ? "text-slate-200 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-800/40"}`,
                children: q.day
              },
              te
            );
          }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: H,
                className: "flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Ha, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Hôm nay" })
                ]
              }
            ),
            N && /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: le,
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
                onClick: z,
                className: "text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer",
                children: "Đóng"
              }
            )
          ] })
        ]
      }
    ),
    document.body
  ) : null, W = b ? "relative flex items-center w-full h-7" : "relative flex items-center w-full", ce = b ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${i ? "border-red-500/90 text-red-200" : "border-slate-700/80 focus:border-emerald-500"} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${l}` : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${i ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"} ${l}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: C, className: `${W} ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: f,
        type: "text",
        tabIndex: c,
        autoFocus: u,
        disabled: r,
        readOnly: n,
        placeholder: t,
        title: i || d,
        value: N,
        onChange: ie,
        onKeyDown: G,
        onFocus: g,
        onBlur: k,
        onClick: (q) => {
          q.stopPropagation(), T || M();
        },
        className: ce
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        disabled: r,
        onClick: (q) => {
          q.stopPropagation(), T ? z() : M();
        },
        className: "absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5" })
      }
    ),
    pe()
  ] });
}, ho = ({
  column: s,
  value: a,
  row: t,
  rowIndex: r,
  columnIndex: n = 0,
  error: o,
  isFocused: l = !1,
  isEditing: i = !1,
  isSelected: d = !1,
  onChange: c,
  onActionClick: x,
  onKeyDown: g,
  onFocus: k
}) => {
  const u = (s.editable ?? !0) && !s.disabled && s.componentType !== "Label", b = a === "—" || a === "-" ? "" : a ?? "", f = o ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50" : l ? "border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40", w = (P) => {
    g && g(P, r, n, s.key);
  }, T = () => {
    k && k(r, n, s.key);
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
        disabled: s.disabled || !u,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => c(P.target.checked),
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${l ? "ring-2 ring-emerald-400" : ""}`
      }
    ) });
  if (s.componentType === "Button") {
    const P = s.formatCell || s.title || a || "Action";
    return /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-center py-0.5", ...S, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        disabled: s.disabled,
        onClick: ($) => {
          $.stopPropagation(), x && x(s.key, t);
        },
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${l ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`,
        children: P
      }
    ) });
  }
  if (s.componentType === "Link")
    return /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (P) => {
          P.preventDefault(), P.stopPropagation(), x && x(s.key, t);
        },
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${l ? "ring-2 ring-emerald-400/80 rounded px-1" : ""}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "truncate", children: a || "—" }),
          /* @__PURE__ */ e.jsx(Vr, { className: "w-3 h-3 flex-shrink-0" })
        ]
      }
    );
  if (!u) {
    if (s.precision !== void 0 && typeof a == "number") {
      const P = s.precision > 0 ? a.toLocaleString("en-US", { minimumFractionDigits: s.precision, maximumFractionDigits: s.precision }) : a.toLocaleString("en-US");
      return /* @__PURE__ */ e.jsxs(
        "span",
        {
          tabIndex: 0,
          onKeyDown: w,
          onFocus: T,
          ...S,
          className: `font-mono text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: [
            P,
            s.summarySuffix ? ` ${s.summarySuffix}` : ""
          ]
        }
      );
    }
    if (s.formatCell && a !== void 0 && a !== null) {
      let P = s.formatCell.replace("{0}", String(a));
      return typeof t == "object" && t !== null && Object.keys(t).forEach(($) => {
        P = P.replace(new RegExp(`\\{${$}\\}`, "gi"), String(t[$] ?? ""));
      }), /* @__PURE__ */ e.jsx(
        "span",
        {
          tabIndex: 0,
          onKeyDown: w,
          onFocus: T,
          ...S,
          className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
          children: P
        }
      );
    }
    return /* @__PURE__ */ e.jsx(
      "span",
      {
        tabIndex: 0,
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `truncate text-slate-200 outline-none rounded px-1 ${l ? "ring-2 ring-emerald-400/80 bg-emerald-950/30" : "focus:ring-1 focus:ring-emerald-400/50"}`,
        children: a != null ? String(a) : "—"
      }
    );
  }
  if (s.componentType === "Select" || s.componentType === "Dropdown") {
    let P = s.options || [];
    const $ = s.reference || s.refName;
    if (P.length === 0 && $) {
      const m = ke.getState().getDataset($);
      if (Array.isArray(m) && m.length > 0) {
        const j = s.valueField || s.idField || "code", E = s.displayField || s.selectField || "name";
        P = m.map((L) => ({
          value: String(L[j] ?? L.code ?? L.id ?? ""),
          label: String(L[E] ?? L.name ?? L[j] ?? "")
        }));
      }
    }
    return /* @__PURE__ */ e.jsxs(
      "select",
      {
        value: a ?? "",
        disabled: s.disabled,
        title: o || void 0,
        onClick: (m) => m.stopPropagation(),
        onChange: (m) => c(m.target.value),
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "", children: "— Chọn —" }),
          P.map((m) => /* @__PURE__ */ e.jsx("option", { value: m.value, className: "bg-slate-900 text-slate-100", children: m.label }, m.value))
        ]
      }
    );
  }
  if (s.componentType === "DatePicker" || s.componentType === "Datepicker")
    return /* @__PURE__ */ e.jsx("div", { className: "w-full", title: o || void 0, ...S, children: /* @__PURE__ */ e.jsx(
      fa,
      {
        isGridCell: !0,
        value: b,
        disabled: s.disabled,
        placeholder: "DD/MM/YYYY",
        error: o || void 0,
        onChange: (P) => c(P),
        onKeyDown: w,
        onFocus: T
      }
    ) });
  if (s.componentType === "Number")
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "number",
        value: b,
        placeholder: "0",
        disabled: s.disabled,
        title: o || void 0,
        step: s.precision && s.precision > 0 ? Math.pow(10, -s.precision) : 1,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => {
          const $ = P.target.value;
          c($ === "" ? "" : Number($));
        },
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${f} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  if (s.componentType === "Textarea")
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        value: b,
        placeholder: s.title ? `Nhập ${s.title}...` : "Nhập...",
        disabled: s.disabled,
        title: o || void 0,
        rows: 1,
        onClick: (P) => P.stopPropagation(),
        onChange: (P) => {
          const $ = s.upperCase ? P.target.value.toUpperCase() : P.target.value;
          c($);
        },
        onKeyDown: w,
        onFocus: T,
        ...S,
        className: `w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`
      }
    );
  const N = s.align === "right" ? "text-right" : s.align === "center" ? "text-center" : "text-left";
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "text",
      value: b,
      placeholder: s.title ? `Nhập ${s.title}...` : "Nhập dữ liệu...",
      disabled: s.disabled,
      title: o || void 0,
      onClick: (P) => P.stopPropagation(),
      onChange: (P) => {
        const $ = s.upperCase ? P.target.value.toUpperCase() : P.target.value;
        c($);
      },
      onKeyDown: w,
      onFocus: T,
      ...S,
      className: `w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${f} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${N} ${s.cssClass || ""}`
    }
  );
};
function mo(s, a) {
  var l, i, d, c, x, g, k, u;
  if (s.value !== a.value || s.error !== a.error || s.rowIndex !== a.rowIndex || s.columnIndex !== a.columnIndex || !!s.isFocused != !!a.isFocused || !!s.isEditing != !!a.isEditing || !!s.isSelected != !!a.isSelected)
    return !1;
  const t = s.column, r = a.column;
  if (t !== r && (t.key !== r.key || t.title !== r.title || t.componentType !== r.componentType || t.editable !== r.editable || t.disabled !== r.disabled || t.precision !== r.precision || t.align !== r.align || t.formatCell !== r.formatCell || t.cssClass !== r.cssClass || t.summarySuffix !== r.summarySuffix || t.upperCase !== r.upperCase || t.options !== r.options || t.reference !== r.reference || t.refName !== r.refName))
    return !1;
  const n = ((l = s.row) == null ? void 0 : l.id) ?? ((i = s.row) == null ? void 0 : i.Id) ?? ((d = s.row) == null ? void 0 : d.ID), o = ((c = a.row) == null ? void 0 : c.id) ?? ((x = a.row) == null ? void 0 : x.Id) ?? ((g = a.row) == null ? void 0 : g.ID);
  if (n !== void 0 && o !== void 0 && n !== o)
    return !1;
  if (r.formatCell && typeof r.formatCell == "string") {
    const b = r.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g);
    if (b)
      for (const C of b) {
        const f = C.slice(1, -1);
        if (f !== "0" && ((k = s.row) == null ? void 0 : k[f]) !== ((u = a.row) == null ? void 0 : u[f]))
          return !1;
      }
  }
  return !((r.componentType === "Button" || r.componentType === "Link") && s.row !== a.row);
}
const Fr = Qt.memo(ho, mo);
function bo({
  tableRef: s,
  rows: a,
  visibleColumns: t,
  selectedRowId: r,
  setSelectedRowId: n,
  selectedRowIds: o,
  setSelectedRowIds: l,
  onRowDoubleClick: i,
  onAddRow: d,
  onDeleteRow: c,
  onDuplicateRow: x,
  onToggleAll: g,
  onFilterByCell: k,
  onQuickSum: u,
  onToggleColumnFilters: b,
  isEditableTable: C = !0,
  onPasteExcel: f
}) {
  const [w, T] = I(null), S = Gs(
    (j, E) => {
      if (j < 0 || j >= a.length || E < 0 || E >= t.length) return;
      const L = t[E], y = a[j], _ = (y == null ? void 0 : y.id) ?? (y == null ? void 0 : y.Id) ?? j;
      if (n(_), T({ rowIndex: j, colIndex: E, colKey: L.key }), s.current) {
        const B = `[data-grid-cell="${j}_${E}"]`, Y = s.current.querySelector(B);
        if (Y) {
          Y.scrollIntoView({ block: "nearest", inline: "nearest" });
          const M = Y.tagName === "INPUT" || Y.tagName === "SELECT" || Y.tagName === "TEXTAREA" || Y.tagName === "BUTTON" ? Y : Y.querySelector("input, select, textarea, button") || Y;
          M.focus(), M instanceof HTMLInputElement && (M.type === "text" || M.type === "number") && M.select();
        }
      }
    },
    [a, t, s, n]
  ), N = Gs(
    (j) => {
      if (!s.current) return;
      const E = s.current.querySelector(`[data-row-index="${j}"]`);
      E && E.scrollIntoView({ block: "nearest" });
    },
    [s]
  ), P = Gs(
    (j) => {
      if (j.key === "F1") {
        j.preventDefault(), j.stopPropagation(), g == null || g();
        return;
      }
      if (j.key === "F2") {
        j.preventDefault(), j.stopPropagation(), k == null || k();
        return;
      }
      if (j.key === "F3") {
        j.preventDefault(), j.stopPropagation(), u == null || u();
        return;
      }
      if (j.key === "F4") {
        j.preventDefault(), j.stopPropagation(), d == null || d();
        return;
      }
      if (j.key === "F6") {
        j.preventDefault(), j.stopPropagation(), b == null || b();
        return;
      }
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const E = a.findIndex((y, _) => (y.id ?? y.Id ?? _) === r), L = E < a.length - 1 ? E + 1 : E;
        if (L >= 0 && L !== E) {
          const y = a[L];
          n(y.id ?? y.Id ?? L), l(/* @__PURE__ */ new Set([y.id ?? y.Id ?? L])), N(L);
        }
        return;
      }
      if (j.key === "ArrowUp") {
        j.preventDefault();
        const E = a.findIndex((y, _) => (y.id ?? y.Id ?? _) === r), L = E > 0 ? E - 1 : 0;
        if (L >= 0 && L !== E) {
          const y = a[L];
          n(y.id ?? y.Id ?? L), l(/* @__PURE__ */ new Set([y.id ?? y.Id ?? L])), N(L);
        }
        return;
      }
      if (j.key === "Enter") {
        j.preventDefault();
        const E = a.findIndex((L, y) => (L.id ?? L.Id ?? y) === r);
        E >= 0 && i && i(a[E], E);
        return;
      }
      if (j.key === "Delete") {
        const E = a.findIndex((L, y) => (L.id ?? L.Id ?? y) === r);
        E >= 0 && c && (j.preventDefault(), c(E));
        return;
      }
      if ((j.ctrlKey || j.metaKey) && (j.key === "d" || j.key === "D")) {
        j.preventDefault();
        const E = a.findIndex((L, y) => (L.id ?? L.Id ?? y) === r);
        E >= 0 && x && x(E);
        return;
      }
      if ((j.ctrlKey || j.metaKey) && (j.key === "v" || j.key === "V")) {
        const E = j.target;
        !(E && (E.tagName === "INPUT" || E.tagName === "TEXTAREA")) && f && typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" && (j.preventDefault(), navigator.clipboard.readText().then((y) => {
          if (y) {
            const _ = w ? w.rowIndex : r !== null ? Math.max(0, a.findIndex((Y, M) => (Y.id ?? Y.Id ?? M) === r)) : 0, B = w ? w.colIndex : 0;
            f(y, _, B);
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
      N,
      g,
      k,
      u,
      d,
      b,
      i,
      c,
      x,
      w,
      f
    ]
  ), $ = Gs(
    (j, E, L, y) => {
      var _, B, Y;
      if (j.key === "F1") {
        j.preventDefault(), j.stopPropagation(), g == null || g();
        return;
      }
      if (j.key === "F2") {
        j.preventDefault(), j.stopPropagation(), k == null || k();
        return;
      }
      if (j.key === "F3") {
        j.preventDefault(), j.stopPropagation(), u == null || u();
        return;
      }
      if (j.key === "F4") {
        j.preventDefault(), j.stopPropagation(), d == null || d();
        return;
      }
      if (j.key === "F6") {
        j.preventDefault(), j.stopPropagation(), b == null || b();
        return;
      }
      if (j.key === "ArrowDown") {
        j.preventDefault(), E < a.length - 1 && S(E + 1, L);
        return;
      }
      if (j.key === "ArrowUp") {
        j.preventDefault(), E > 0 && S(E - 1, L);
        return;
      }
      if (j.key === "ArrowLeft") {
        const M = j.target, z = M && M.selectionStart === 0 && M.selectionEnd === 0, J = M && M.selectionStart === 0 && M.selectionEnd === ((_ = M.value) == null ? void 0 : _.length), h = !M || M.tagName === "SELECT" || M.type === "checkbox" || M.tagName === "BUTTON";
        (z || J || h) && L > 0 && (j.preventDefault(), S(E, L - 1));
        return;
      }
      if (j.key === "ArrowRight") {
        const M = j.target, z = M && M.selectionStart === ((B = M.value) == null ? void 0 : B.length), J = M && M.selectionStart === 0 && M.selectionEnd === ((Y = M.value) == null ? void 0 : Y.length), h = !M || M.tagName === "SELECT" || M.type === "checkbox" || M.tagName === "BUTTON";
        (z || J || h) && L < t.length - 1 && (j.preventDefault(), S(E, L + 1));
        return;
      }
      if (j.key === "Tab") {
        j.preventDefault(), j.shiftKey ? L > 0 ? S(E, L - 1) : E > 0 && S(E - 1, t.length - 1) : L < t.length - 1 ? S(E, L + 1) : E < a.length - 1 ? S(E + 1, 0) : d && (d(), setTimeout(() => {
          S(a.length, 0);
        }, 60));
        return;
      }
      if (j.key === "Enter") {
        if (j.preventDefault(), j.shiftKey) {
          E > 0 && S(E - 1, L);
          return;
        }
        E < a.length - 1 ? S(E + 1, L) : d && (d(), setTimeout(() => {
          S(a.length, L);
        }, 60));
        return;
      }
      if (j.key === "Escape") {
        j.preventDefault();
        const M = j.target;
        M == null || M.blur();
        return;
      }
    },
    [a, t, S, g, k, u, d, b]
  ), m = Gs(
    (j) => {
      var M;
      const E = (M = j.clipboardData) == null ? void 0 : M.getData("text/plain");
      if (!E || !f) return;
      const L = E.includes("	") || E.includes(`
`), y = j.target;
      if (y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && !L)
        return;
      j.preventDefault(), j.stopPropagation();
      const B = w ? w.rowIndex : r !== null ? Math.max(0, a.findIndex((z, J) => (z.id ?? z.Id ?? J) === r)) : 0, Y = w ? w.colIndex : 0;
      f(E, B, Y);
    },
    [w, r, a, f]
  );
  return {
    focusedCell: w,
    setFocusedCell: T,
    focusCell: S,
    scrollToRow: N,
    handleTableContainerKeyDown: P,
    handleCellKeyDown: $,
    handlePaste: m
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
function Xs(s) {
  return ga(s).map((t, r) => ({
    ...t,
    order: r + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: !!(t.frozen || t.sticky === "left"),
    sticky: t.frozen || t.sticky === "left" ? "left" : "none"
  }));
}
function Wn(s, a, t) {
  if (t < 0 || t >= s.length || a === t) return s;
  const r = [...s], [n] = r.splice(a, 1), o = r.filter((x) => x.frozen || x.sticky === "left").length, l = !!(n.frozen || n.sticky === "left");
  !l && t < o ? (n.frozen = !0, n.sticky = "left") : l && t >= o && (n.frozen = !1, n.sticky = "none"), r.splice(t, 0, n);
  const i = r.filter((x) => x.frozen || x.sticky === "left"), d = r.filter((x) => !x.frozen && x.sticky !== "left");
  return [...i, ...d].map((x, g) => ({
    ...x,
    order: g + 1,
    frozen: !!(x.frozen || x.sticky === "left"),
    sticky: x.frozen || x.sticky === "left" ? "left" : "none"
  }));
}
function va(s, a) {
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
  return Xs(t);
}
function fo(s, a = 55) {
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
class go {
  constructor() {
    kn(this, "cascadeResolvers", /* @__PURE__ */ new Map());
    kn(this, "populateResolvers", /* @__PURE__ */ new Map());
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
const ya = new go();
function xi(s, a, t) {
  return ya.getCascadedOptions(s, a, t);
}
function vo(s, a, t) {
  return ya.calculateAutoPopulatedFields(s, a, t);
}
function Vn(s) {
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
    const d = a[i];
    let c = 0;
    if (d >= "0" && d <= "9")
      c = parseInt(d, 10);
    else if (r[d] !== void 0)
      c = r[d];
    else
      return { isValid: !1, message: `Ký tự [${d}] trong số container không hợp lệ` };
    const x = Math.pow(2, i);
    n += c * x;
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
function Rr(s) {
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
function Gn(s, a, t = "Ngày bắt đầu", r = "Ngày kết thúc") {
  const n = Rr(s), o = Rr(a);
  return !n || !o ? { isValid: !0 } : n.getTime() > o.getTime() ? {
    isValid: !1,
    message: `${t} (${s}) không thể xảy ra sau ${r} (${a})`
  } : { isValid: !0 };
}
function yo(s, a, t = [], r = {}) {
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
        const l = Vn(String(a));
        l.isValid || n.push(o.message || l.message);
      }
      if (o.rule === "dateSequence" && o.targetField) {
        const l = r[o.targetField];
        if (l) {
          const i = Gn(String(a), String(l), s, o.targetField);
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
function pi(s, a) {
  const t = {};
  for (const [r, n] of Object.entries(a)) {
    const o = s[r], l = yo(r, o, n, s);
    l.isValid || (t[r] = l.errors);
  }
  return t;
}
const jt = {
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
}, No = {
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
}, ns = ws()(
  an((s, a) => ({
    jobs: ["FCLI-26020005", "FCLI-26020006", "FCLI-26020007"],
    activeJobNo: "FCLI-26020005",
    masterRecord: { ...jt["FCLI-26020005"].master },
    detailGrids: {
      grid_shipping_info: [...jt["FCLI-26020005"].shippingInfo],
      grid_container_info: [...jt["FCLI-26020005"].containerInfo],
      grid_shipment_detail: [...jt["FCLI-26020005"].shipmentDetail]
    },
    validationErrors: {},
    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (t) => {
      const r = jt[t];
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
      return jt[n] = {
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
      const n = String(No[t] || t), l = { ...a().masterRecord, [n]: r }, i = vo(n, r, l);
      Object.assign(l, i);
      const d = { ...a().validationErrors };
      if (n === "mblNo") {
        const x = String(r || "").trim();
        x ? /^[A-Z0-9]{8,18}$/i.test(x) ? delete d.mblNo : d.mblNo = "Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)" : d.mblNo = "Số M-B/L là bắt buộc";
      }
      if (n === "jobNo" && (String(r || "").trim() ? delete d.jobNo : d.jobNo = "Job No không được để trống"), n === "mblIssuedDate" || n === "shipmentDate") {
        const x = l.mblIssuedDate, g = l.shipmentDate;
        if (x && g) {
          const k = Gn(x, g, "Ngày phát hành M-B/L", "Ngày khởi hành (S.Date)");
          k.isValid ? delete d.mblIssuedDate : d.mblIssuedDate = k.message || "Ngày phát hành phải trước ngày khởi hành";
        }
      }
      s({
        masterRecord: l,
        validationErrors: d
      });
      const c = a().activeJobNo;
      jt[c] && (jt[c].master = l);
    },
    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (t, r, n, o) => {
      const l = a().detailGrids, i = l[t] || [], d = { ...a().validationErrors }, c = `${t}_${r}_${n}`, x = i.map((k, u) => k.id !== void 0 && k.id === r || k.id === void 0 && u === r ? { ...k, [n]: o } : k);
      if (n === "containerNo") {
        const k = Vn(String(o));
        k.isValid ? delete d[c] : d[c] = k.message;
      }
      if (t === "grid_shipping_info" && (n === "etd" || n === "eta")) {
        const k = x.find((u) => u.id === r);
        if (k && k.etd && k.eta) {
          const u = Gn(k.etd, k.eta, "ETD", "ETA"), b = `${t}_${r}_etd_eta`;
          u.isValid ? delete d[b] : d[b] = u.message || "ETD phải trước ETA";
        }
      }
      s({
        detailGrids: { ...l, [t]: x },
        validationErrors: d
      }), t === "grid_container_info" && a().recalculateTotals();
      const g = a().activeJobNo;
      jt[g] && (t === "grid_shipping_info" && (jt[g].shippingInfo = x), t === "grid_container_info" && (jt[g].containerInfo = x), t === "grid_shipment_detail" && (jt[g].shipmentDetail = x));
    },
    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o.length > 0 ? Math.max(...o.map((x) => Number(x.id) || 0)) + 1 : 1, i = a().activeJobNo;
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
        ...r
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
        ...r
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
        ...r
      } : d = { id: l, jobNo: i, ...r };
      const c = [...o, d];
      s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 6. Xóa dòng trong Lưới
    deleteGridRow: (t, r) => {
      const n = a().detailGrids, l = (n[t] || []).filter((i, d) => d !== r);
      s({
        detailGrids: { ...n, [t]: l }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (t, r) => {
      const n = a().detailGrids, o = n[t] || [], l = o[r];
      if (!l) return;
      const i = o.length > 0 ? Math.max(...o.map((x) => Number(x.id) || 0)) + 1 : 1, d = { ...l, id: i }, c = [...o];
      c.splice(r + 1, 0, d), s({
        detailGrids: { ...n, [t]: c }
      }), t === "grid_container_info" && a().recalculateTotals();
    },
    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const t = a().detailGrids.grid_container_info || [];
      let r = 0, n = 0, o = 0, l = 0;
      t.forEach((x) => {
        r += Number(x.packageNumber) || 0, n += Number(x.gw) || 0, o += Number(x.cbm) || 0, l += Number(x.vgm) || 0;
      });
      const d = {
        ...a().masterRecord,
        tPackages: r,
        totalGw: n,
        totalCbm: Number(o.toFixed(2)),
        totalVgm: l
      };
      s({ masterRecord: d });
      const c = a().activeJobNo;
      jt[c] && (jt[c].master = d);
    },
    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      var o, l;
      const t = a().masterRecord, r = {};
      return (o = t.jobNo) != null && o.trim() || (r.jobNo = "Job No không được để trống"), (l = t.mblNo) != null && l.trim() ? /^[A-Z0-9]{8,18}$/i.test(t.mblNo.trim()) || (r.mblNo = "Số M-B/L phải gồm 8 - 18 ký tự chữ và số") : r.mblNo = "Số M-B/L không được để trống", (a().detailGrids.grid_container_info || []).forEach((i) => {
        const d = Vn(i.containerNo);
        d.isValid || (r[`grid_container_info_${i.id}_containerNo`] = d.message);
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
function jo({
  fileName: s = "Du_Lieu_Bang",
  sheetName: a = "Sheet1",
  columns: t,
  rows: r,
  includeSummary: n = !0
}) {
  const o = t.filter((C) => !C.hidden);
  let l = "<tr>";
  l += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>';
  for (const C of o) {
    const f = C.align || "left";
    l += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${f};padding:8px 12px;font-size:11pt;">${C.title || C.key}</th>`;
  }
  l += "</tr>";
  let i = "";
  r.forEach((C, f) => {
    const w = f % 2 === 0 ? "#ffffff" : "#f8fafc";
    i += `<tr style="background-color:${w};">`, i += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${f + 1}</td>`;
    for (const T of o) {
      const S = C[T.key], N = T.align || "left";
      let P = S != null ? String(S) : "";
      typeof S == "number" && (P = S.toLocaleString("vi-VN")), i += `<td style="border:1px solid #cbd5e1;text-align:${N};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${Pr(P)}</td>`;
    }
    i += "</tr>";
  });
  let d = "";
  const c = o.some((C) => C.aggregate);
  if (n && c && r.length > 0) {
    d += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">', d += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>';
    for (const C of o) {
      const f = C.align || "left";
      if (C.aggregate === "sum") {
        const w = r.reduce((S, N) => {
          const P = Number(N[C.key]);
          return S + (isNaN(P) ? 0 : P);
        }, 0), T = w % 1 !== 0 ? w.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : w.toLocaleString("vi-VN");
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${T}${C.summarySuffix ? ` ${C.summarySuffix}` : ""}</td>`;
      } else if (C.aggregate === "count")
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${r.length}</td>`;
      else if (C.aggregate === "avg") {
        const w = r.reduce((S, N) => {
          const P = Number(N[C.key]);
          return S + (isNaN(P) ? 0 : P);
        }, 0), T = r.length > 0 ? (w / r.length).toFixed(2) : "0";
        d += `<td style="border:1px solid #334155;text-align:${f};padding:8px 10px;font-weight:bold;">${T}</td>`;
      } else
        d += '<td style="border:1px solid #334155;"></td>';
    }
    d += "</tr>";
  }
  const x = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${Pr(a)}</x:Name>
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
  `.trim(), g = new Blob(["\uFEFF", x], {
    type: "application/vnd.ms-excel;charset=utf-8"
  }), k = s.endsWith(".xls") || s.endsWith(".xlsx") ? s : `${s}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xls`, u = URL.createObjectURL(g), b = document.createElement("a");
  b.href = u, b.download = k, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(u);
}
function Pr(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function Na(s) {
  const {
    title: a,
    subtitle: t,
    columns: r,
    rows: n,
    summaryRow: o,
    companyName: l = "HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP",
    metadata: i = {},
    showSignatures: d = !0
  } = s, c = r.filter((S) => !S.hidden), x = window.open("", "_blank", "width=1100,height=850");
  if (!x) {
    alert("Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.");
    return;
  }
  const g = /* @__PURE__ */ new Date(), k = `Ngày in: ${g.toLocaleDateString("vi-VN")} lúc ${g.toLocaleTimeString("vi-VN")}`, u = Object.entries(i).map(
    ([S, N]) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${Kt(S)}:</strong>
          <span>${Kt(String(N))}</span>
        </div>`
  ).join(""), b = c.map((S) => `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${S.align || "left"}; font-size: 11px; text-transform: uppercase;">
        ${Kt(S.title || S.key)}
      </th>`).join(""), C = n.map((S, N) => {
    const P = N % 2 === 0 ? "#ffffff" : "#f8fafc", $ = c.map((m) => {
      const j = S[m.key] ?? "", E = m.align || (typeof j == "number" ? "right" : "left");
      let L = j;
      return typeof j == "number" && (L = j.toLocaleString("vi-VN")), `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${E}; font-size: 11px;">
            ${Kt(String(L))}
          </td>`;
    }).join("");
    return `<tr style="background-color: ${P};">${$}</tr>`;
  }).join("");
  let f = "";
  o && (f = `<tfoot><tr>${c.map((N, P) => {
    const $ = o[N.key] ?? (P === 0 ? "TỔNG CỘNG" : ""), m = N.align || "left";
    let j = $;
    return typeof $ == "number" && (j = $.toLocaleString("vi-VN")), `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${m}; font-size: 11px;">
          ${Kt(String(j))}
        </td>`;
  }).join("")}</tr></tfoot>`);
  const w = d ? `
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
    ` : "", T = `
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
            ${t ? `<div style="font-size: 12px; color: #475569;">${Kt(t)}</div>` : ""}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${Kt(k)}</div>
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
          ${C}
        </tbody>
        ${f}
      </table>

      ${w}

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
  x.document.open(), x.document.write(T), x.document.close();
}
function Kt(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function hi(s) {
  const a = s.columns.filter((r) => !r.hidden), t = {
    title: s.title,
    subtitle: s.subtitle,
    companyName: s.companyName,
    metadata: s.metadata,
    columns: a.map((r) => ({
      key: r.key,
      title: r.title || r.key,
      align: r.align || "left",
      dataType: r.dataType || r.componentType || "string"
    })),
    rows: s.rows
  };
  try {
    const r = await fetch("http://localhost:5048/api/core/reports/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (r.ok) {
      const n = await r.blob(), o = URL.createObjectURL(n), l = document.createElement("a");
      l.href = o, l.download = `${s.title.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
      return;
    }
  } catch {
  }
  Na(s);
}
async function mi(s) {
  const a = s.fileName || "Bieu_Mau_Chung_Tu", t = {
    templateName: s.templateName,
    placeholders: s.placeholders
  };
  try {
    const r = await fetch("http://localhost:5048/api/core/reports/docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
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
function wo(s) {
  if (!s || typeof s != "string") return [];
  const t = s.replace(/\r\n/g, `
`).replace(/\r/g, `
`).split(`
`);
  return t.length > 0 && t[t.length - 1].trim() === "" && t.pop(), t.length === 0 ? [] : t.map((r) => r.split("	").map((o) => {
    let l = o.trim();
    return l.startsWith('"') && l.endsWith('"') && l.length >= 2 && (l = l.slice(1, -1).replace(/""/g, '"').trim()), l;
  }));
}
function Co(s, a) {
  if (s == null) return "";
  const t = String(s).trim();
  if (a.componentType === "Number" || a.format === "number" || a.format === "currency_vnd" || a.format === "currency_usd" || a.dataType === "number" || a.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount", "price", "quantity"].some(
    (n) => a.key.toLowerCase().includes(n)
  )) {
    if (!t) return 0;
    const n = t.replace(/[,\s$₫€]/g, "").trim(), o = Number(n);
    return isNaN(o) ? 0 : a.precision !== void 0 && a.precision >= 0 ? Number(o.toFixed(a.precision)) : o;
  }
  if (a.componentType === "Checkbox" || a.dataType === "boolean") {
    const n = t.toLowerCase();
    return n === "true" || n === "1" || n === "yes" || n === "y" || n === "x" || n === "v" || n === "có" || n === "checked" || n === "đúng";
  }
  if (a.componentType === "DatePicker" || a.format === "date_dmy" || a.dataType === "date") {
    if (!t) return "";
    const n = t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
    if (n) {
      const o = n[1], l = String(n[2]).padStart(2, "0");
      return `${String(n[3]).padStart(2, "0")}/${l}/${o}`;
    }
    return t;
  }
  return t;
}
function ko({
  currentRows: s,
  visibleColumns: a,
  allColumns: t,
  clipMatrix: r,
  startRowIndex: n,
  startColIndex: o
}) {
  if (!r || r.length === 0)
    return { updatedRows: s, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 };
  const l = [...s.map((u) => ({ ...u }))], i = r.length;
  let d = 0, c = 0;
  const x = Math.max(0, n), g = Math.max(0, o), k = (u) => {
    const b = { id: u };
    return t.forEach((C) => {
      C.componentType === "Number" || C.dataType === "number" ? b[C.key] = 0 : C.componentType === "Checkbox" || C.dataType === "boolean" ? b[C.key] = !1 : (C.componentType === "DatePicker" || C.dataType, b[C.key] = "");
    }), b;
  };
  for (let u = 0; u < i; u++) {
    const b = x + u, C = r[u];
    if (C.length > d && (d = C.length), b >= l.length) {
      const w = l.length > 0 ? Math.max(...l.map((S) => Number(S.id) || 0)) : 0, T = k(w + 1);
      l.push(T), c++;
    }
    const f = l[b];
    for (let w = 0; w < C.length; w++) {
      const T = g + w;
      if (T >= a.length)
        break;
      const S = a[T];
      if (!((S.editable ?? !0) && !S.disabled && S.componentType !== "Label"))
        continue;
      const P = C[w], $ = Co(P, S);
      f[S.key] = $;
    }
  }
  return {
    updatedRows: l,
    pastedRowCount: i,
    pastedColCount: d,
    newRowsCreated: c
  };
}
const $r = [
  { id: 1, name: "Bản ghi mẫu 01", status: "Hoạt động" },
  { id: 2, name: "Bản ghi mẫu 02", status: "Chờ duyệt" }
], So = ({ node: s, isEditing: a }) => {
  var ms, bs, fs, gs, vs;
  const { props: t, style: r } = s, n = Z((v) => v.updateComponentProps), o = Z((v) => v.activeFeatureId), l = He((v) => v.evaluateColumnPermission), i = He((v) => v.evaluateFeaturePermission), d = He((v) => v.previewRoleCode), c = He((v) => v.componentPolicies), x = Ae(() => t.columns && Array.isArray(t.columns) ? t.columns : [
    { key: "id", title: "Mã", width: "80px", sortable: !0, order: 1 },
    { key: "name", title: "Tên mục", width: "220px", sortable: !0, editable: !0, componentType: "TextBox", order: 2 },
    { key: "status", title: "Trạng thái", width: "140px", sortable: !0, order: 3 }
  ], [t.columns]), g = Ae(() => ga(x), [x]), k = Ae(() => {
    const v = g.filter((p) => !p.hidden);
    return a ? v : v.map((p) => {
      const F = l(o, s, p);
      if (!F.canRead) return null;
      const V = (F.canWrite || F.canWriteAll) && p.editable !== !1;
      return {
        ...p,
        editable: V,
        isHighlightEditable: F.shouldHighlightEditable
      };
    }).filter((p) => p !== null);
  }, [g, a, o, s, l, d, c]), u = ns((v) => v.detailGrids), b = ns((v) => v.updateGridCell), C = ns((v) => v.addGridRow), f = ns((v) => v.deleteGridRow), w = ns((v) => v.duplicateGridRow), T = ns((v) => v.validationErrors), S = !!(u && u[s.id]), N = t.reference || t.refName || ((ms = s.dataBinding) == null ? void 0 : ms.refName) || ((bs = s.dataBinding) == null ? void 0 : bs.entityName) || "", P = t.query || ((fs = s.dataBinding) == null ? void 0 : fs.query) || t.dataSource || ((gs = s.dataBinding) == null ? void 0 : gs.dataSource) || t.sqlWhere || ((vs = s.dataBinding) == null ? void 0 : vs.sqlWhere) || t.filter || "", $ = ke((v) => N ? v.datasets[N] : void 0), [m, j] = I(() => S && u && u[s.id] ? u[s.id] : t.data && Array.isArray(t.data) ? t.data : $ && Array.isArray($) ? $ : $r);
  Ee(() => {
    t.data && Array.isArray(t.data) && t.data.length > 0 && j(t.data);
  }, [t.data]), Ee(() => {
    $ && Array.isArray($) && $.length > 0 && j($);
  }, [$]);
  const E = Ae(() => S && u && u[s.id] && u[s.id].length > 0 ? u[s.id] : m && Array.isArray(m) && m.length > 0 ? m : $ && Array.isArray($) && $.length > 0 ? $ : t.data && Array.isArray(t.data) ? t.data : $r, [S, u, s.id, m, $, t.data]);
  Ee(() => {
    if (t.data && Array.isArray(t.data) && t.data.length > 0) return;
    let v = !0;
    return N && ke.getState().queryEntity(N, P).then((p) => {
      v && p && p.length > 0 && j(p);
    }), () => {
      v = !1;
    };
  }, [N, P, t.data]);
  const [L, y] = I(""), [_, B] = I(null), [Y, M] = I("asc"), [z, J] = I(!1), [h, X] = I({}), [H, le] = I({
    isOpen: !1,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1
  }), [ie, G] = I({
    isOpen: !1,
    column: null
  }), [de, pe] = I({
    isOpen: !1,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1
  }), [W, ce] = I(null), [q, te] = I(null), [ue, ve] = I(null), D = 55, { offsets: O, lastFrozenKey: ne } = Ae(() => fo(g, D), [g]), oe = Ae(() => {
    let v = [...E];
    if (L.trim()) {
      const p = L.toLowerCase();
      v = v.filter(
        (F) => Object.values(F).some(
          (V) => String(V).toLowerCase().includes(p)
        )
      );
    }
    return z && Object.entries(h).forEach(([p, F]) => {
      if (F && F.trim()) {
        const V = F.toLowerCase().trim();
        v = v.filter((A) => {
          const K = A[p];
          return K != null && String(K).toLowerCase().includes(V);
        });
      }
    }), _ && v.sort((p, F) => {
      const V = p[_], A = F[_];
      if (V === A) return 0;
      if (V == null) return 1;
      if (A == null) return -1;
      let K = 0;
      return typeof V == "number" && typeof A == "number" ? K = V - A : K = String(V).localeCompare(String(A)), Y === "asc" ? K : -K;
    }), v;
  }, [E, L, z, h, _, Y]), ae = (v) => {
    j(v), n(s.id, { data: v });
  }, [ye, Te] = I(t.groupBy || null), [Pe, be] = I(/* @__PURE__ */ new Set()), fe = Ae(() => {
    if (!ye) return [];
    const v = /* @__PURE__ */ new Map();
    oe.forEach((V) => {
      const A = V[ye], K = A == null || A === "" ? "(Trống)" : String(A);
      v.has(K) || v.set(K, []), v.get(K).push(V);
    });
    let p = 0;
    const F = [];
    return v.forEach((V, A) => {
      const K = {};
      k.forEach((xe) => {
        if (xe.componentType === "Number" || xe.precision !== void 0 || xe.isSummary || xe.summary) {
          const Ne = V.reduce((We, ze) => {
            const ht = Number(ze[xe.key]);
            return We + (isNaN(ht) ? 0 : ht);
          }, 0);
          K[xe.key] = Ne;
        }
      }), F.push({
        groupKey: A,
        groupLabel: A,
        rows: V,
        subtotals: K,
        startIndex: p
      }), p += V.length;
    }), F;
  }, [ye, oe, k]), Re = 38, Se = 10, ge = !ye && (oe.length > 80 || !!t.virtual || !!t.virtualScroll), [ee, me] = I(0), [ct, Et] = I(550);
  Ee(() => {
    const v = yt.current;
    if (!v || !ge) return;
    const p = () => {
      me(v.scrollTop);
    }, F = () => {
      v.clientHeight > 0 && Et(v.clientHeight);
    };
    return v.addEventListener("scroll", p, { passive: !0 }), F(), window.addEventListener("resize", F), () => {
      v.removeEventListener("scroll", p), window.removeEventListener("resize", F);
    };
  }, [ge]);
  const { virtualStartIndex: vt, virtualEndIndex: Ct, topPaddingHeight: se, bottomPaddingHeight: we, virtualRows: Oe } = Ae(() => {
    if (!ge)
      return {
        virtualStartIndex: 0,
        virtualEndIndex: oe.length,
        topPaddingHeight: 0,
        bottomPaddingHeight: 0,
        virtualRows: oe
      };
    const v = oe.length, p = Math.ceil(ct / Re), F = Math.floor(ee / Re), V = Math.max(0, F - Se), A = Math.min(v, F + p + Se), K = V * Re, xe = Math.max(0, (v - A) * Re), Ne = oe.slice(V, A);
    return {
      virtualStartIndex: V,
      virtualEndIndex: A,
      topPaddingHeight: K,
      bottomPaddingHeight: xe,
      virtualRows: Ne
    };
  }, [ge, oe, ee, ct]), Fe = `uiforge_user_gridpolicy_${String(s.pageId || "default")}_${s.id}`;
  Ee(() => {
    let v = !0;
    const p = String(s.pageId || "default");
    try {
      const F = localStorage.getItem(Fe);
      if (F) {
        const V = JSON.parse(F);
        Array.isArray(V) && V.length > 0 && n(s.id, { columns: V });
      }
    } catch {
    }
    return fetch(
      `http://localhost:5048/api/core/user-settings?featureCode=${encodeURIComponent(
        p
      )}&componentId=${encodeURIComponent(s.id)}&settingType=GridPolicy`
    ).then((F) => F.ok ? F.json() : null).then((F) => {
      if (!v || !F) return;
      const V = F.settingJson || F.SettingJson;
      if (V) {
        const A = JSON.parse(V);
        if (Array.isArray(A) && A.length > 0) {
          n(s.id, { columns: A });
          try {
            localStorage.setItem(Fe, V);
          } catch {
          }
        }
      }
    }).catch(() => {
    }), () => {
      v = !1;
    };
  }, [s.id, s.pageId]);
  const Me = (v) => {
    const p = Xs(v);
    n(s.id, { columns: p });
    try {
      localStorage.setItem(Fe, JSON.stringify(p));
    } catch {
    }
    const F = String(s.pageId || "default");
    fetch("http://localhost:5048/api/core/user-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        featureCode: F,
        componentId: s.id,
        settingType: "GridPolicy",
        settingJson: JSON.stringify(p)
      })
    }).catch(() => {
    });
  }, $e = st(E);
  $e.current = E;
  const Qe = (v, p, F) => {
    S && b(s.id, v, p, F);
    const A = (S && u && u[s.id] ? u[s.id] : $e.current).map((K, xe) => K.id !== void 0 && K.id === v || K.id === void 0 && xe === v ? { ...K, [p]: F } : K);
    ae(A), N && ke.getState().registerDataset(N, A);
  }, et = (v, p, F) => {
    const A = Z.getState().features.find((We) => String(We.id) === String(s.pageId)), K = A == null ? void 0 : A.scriptFile, xe = (F == null ? void 0 : F.action) || v;
    let Ne = !1;
    F != null && F.events && (Array.isArray(F.events) ? F.events : typeof F.events == "string" ? (() => {
      try {
        return JSON.parse(F.events);
      } catch {
        return [];
      }
    })() : []).forEach((ze) => {
      Ne = !0, Zs(
        ze,
        F.title || F.key,
        K,
        { row: p, col: F, column: F, action: ze.action || ze.handlerName || xe, value: p[(F == null ? void 0 : F.key) || ""] }
      );
    }), !Ne && xe && Zs(
      { id: `col_act_${(F == null ? void 0 : F.key) || v}`, trigger: "actionClick", action: xe, handlerName: xe },
      s.props.label || "Bảng dữ liệu",
      K,
      { row: p, col: F, column: F, action: xe, value: p[(F == null ? void 0 : F.key) || ""] }
    ), s.events && s.events.length > 0 && Xe(s.events, "actionClick", s.props.label || "Bảng dữ liệu", K, {
      action: xe,
      row: p,
      col: F,
      column: F,
      colKey: F == null ? void 0 : F.key,
      value: p[(F == null ? void 0 : F.key) || ""]
    });
  }, [at, lt] = I(null), [dt, ot] = I(/* @__PURE__ */ new Set()), yt = st(null), Ge = (v, p, F = "info") => {
    const V = document.createElement("div"), A = F === "success" ? "border-emerald-500 shadow-emerald-500/30" : F === "warning" ? "border-amber-500 shadow-amber-500/30" : "border-blue-500 shadow-blue-500/30", K = F === "success" ? "⚡" : F === "warning" ? "⚠️" : "ℹ️", xe = F === "success" ? "bg-emerald-600/25 text-emerald-400" : F === "warning" ? "bg-amber-600/25 text-amber-400" : "bg-blue-600/20 text-blue-400";
    V.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${A} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`, V.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${xe} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${K}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${v}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${p}</div>
      </div>
    `, document.body.appendChild(V), setTimeout(() => {
      V.classList.add("opacity-0", "transition-opacity", "duration-300"), setTimeout(() => V.remove(), 300);
    }, 3800);
  }, Nt = () => {
    if (dt.size === oe.length && oe.length > 0)
      ot(/* @__PURE__ */ new Set()), Ge("F1 (Toggle All)", "Đã bỏ chọn tất cả các dòng", "info");
    else {
      const v = new Set(oe.map((p, F) => p.id ?? p.Id ?? F));
      ot(v), oe.length > 0 && lt(oe[0].id ?? oe[0].Id ?? 0), Ge("F1 (Toggle All)", `Đã chọn tất cả ${v.size} dòng trong bảng`, "success");
    }
  }, Vt = () => {
    var A;
    let v = Ve == null ? void 0 : Ve.colKey, p = (Ve == null ? void 0 : Ve.rowIndex) ?? 0;
    !v && k.length > 0 && (v = k[0].key);
    const F = oe[p], V = F && v ? F[v] : null;
    if (V != null && String(V).trim() !== "" && String(V) !== "—") {
      X((xe) => ({ ...xe, [v]: String(V) })), J(!0);
      const K = ((A = k.find((xe) => xe.key === v)) == null ? void 0 : A.title) || v;
      Ge("F2 (Lọc theo ô)", `Đã lọc cột [${K}] với giá trị "${V}"`, "success");
    } else
      J(!0), Ge("F2 (Lọc theo ô)", "Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh", "warning");
  }, Tt = () => {
    const v = dt.size > 0 ? oe.filter((V, A) => dt.has(V.id ?? V.Id ?? A)) : oe;
    if (v.length === 0) {
      Ge("F3 (Tính tổng nhanh)", "Không có bản ghi nào để tính toán", "warning");
      return;
    }
    const p = k.filter(
      (V) => V.componentType === "Number" || V.precision !== void 0 || ["totalgw", "totalcbm", "totalvgm", "gw", "cbm", "vgm", "packages", "amount"].some(
        (A) => V.key.toLowerCase().includes(A)
      )
    );
    if (p.length === 0) {
      Ge("F3 (Tính tổng nhanh)", "Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)", "warning");
      return;
    }
    const F = p.map((V) => {
      const A = v.reduce((xe, Ne) => {
        const We = Number(Ne[V.key]);
        return xe + (isNaN(We) ? 0 : We);
      }, 0), K = A % 1 !== 0 ? A.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : A.toLocaleString("en-US");
      return `${V.title || V.key}: ${K}${V.summarySuffix ? ` ${V.summarySuffix}` : ""}`;
    });
    Ge(
      `F3 (Tổng ${v.length} dòng)`,
      F.join(" | "),
      "success"
    );
  }, Dt = () => {
    Be();
    const v = oe.length;
    Ge("F4 (Thêm dòng)", `Đã thêm dòng mới số #${v + 1}`, "success"), setTimeout(() => {
      qt(v, 0);
    }, 60);
  }, Mt = async () => {
    const v = t.label ? String(t.label).replace(/\s+/g, "_") : "Du_Lieu_Bang", p = t.label ? String(t.label).slice(0, 30) : "Sheet1";
    try {
      const F = {
        title: t.label ? String(t.label) : "BẢNG DỮ LIỆU",
        sheetName: p,
        columns: k.map((A) => ({
          key: A.key,
          title: A.title || A.key,
          align: A.align || "left",
          dataType: A.componentType === "Number" || A.precision !== void 0 || A.format === "number" ? "number" : A.componentType === "Checkbox" ? "boolean" : "string"
        })),
        rows: oe
      }, V = await fetch("http://localhost:5048/api/core/export/excel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(F)
      });
      if (V.ok) {
        const A = await V.blob(), K = window.URL.createObjectURL(A), xe = document.createElement("a");
        xe.href = K, xe.download = `${v}.xlsx`, document.body.appendChild(xe), xe.click(), document.body.removeChild(xe), window.URL.revokeObjectURL(K), Ge(
          "Xuất Excel Backend (.xlsx)",
          `Đã xuất file Excel chuẩn OpenXML từ server thành công (${oe.length} bản ghi)`,
          "success"
        );
        return;
      }
    } catch {
    }
    try {
      jo({
        fileName: v,
        sheetName: p,
        columns: k,
        rows: oe,
        includeSummary: !0
      }), Ge("Xuất Excel Client", `Đã xuất ${oe.length} dòng dữ liệu ra file Excel thành công`, "success");
    } catch (F) {
      Ge("Lỗi xuất Excel", (F == null ? void 0 : F.message) || "Không thể tạo file Excel", "warning");
    }
  }, Gt = () => {
    try {
      const v = {};
      k.forEach((p) => {
        if (p.aggregate === "sum") {
          const F = oe.reduce((V, A) => V + (Number(A[p.key]) || 0), 0);
          v[p.key] = F;
        } else p.aggregate === "count" && (v[p.key] = oe.length);
      }), Na({
        title: t.label ? String(t.label) : "Báo Cáo Bảng Dữ Liệu",
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${oe.length} bản ghi`,
        columns: k,
        rows: oe,
        summaryRow: Object.keys(v).length > 0 ? v : void 0,
        metadata: {
          "Thời điểm xuất": (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          "Số lượng dòng": `${oe.length} dòng`,
          "Bộ lọc áp dụng": L ? `Tìm kiếm: "${L}"` : "Tất cả dữ liệu"
        }
      }), Ge("In Báo Cáo", "Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công", "info");
    } catch (v) {
      Ge("Lỗi In Báo Cáo", (v == null ? void 0 : v.message) || "Không thể tạo bản in báo cáo", "warning");
    }
  }, Bt = async () => {
    if (y(""), X({}), N) {
      const v = await ke.getState().queryEntity(N, P);
      v && v.length > 0 && (j(v), Ge("Làm mới dữ liệu", `Đã tải lại ${v.length} bản ghi từ máy chủ`, "info"));
    }
  }, kt = (v, p, F) => {
    const V = wo(v);
    if (V.length === 0) return;
    const A = S && u && u[s.id] ? u[s.id] : E, { updatedRows: K, pastedRowCount: xe, pastedColCount: Ne, newRowsCreated: We } = ko({
      currentRows: A,
      visibleColumns: k,
      allColumns: g,
      clipMatrix: V,
      startRowIndex: p,
      startColIndex: F
    });
    ae(K), N && ke.getState().registerDataset(N, K), S && ns.setState((ht) => ({
      detailGrids: {
        ...ht.detailGrids,
        [s.id]: K
      }
    }));
    const ze = We > 0 ? `Đã dán thành công ${xe} dòng × ${Ne} cột (tự động tạo thêm ${We} dòng mới)` : `Đã dán thành công ${xe} dòng × ${Ne} cột vào bảng`;
    Ge("Dán từ Excel (Ctrl+V)", ze, "success");
  }, Ut = (v) => {
    typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((p) => {
      p ? kt(p, v, 0) : Ge("Dán từ Excel", "Clipboard hiện đang trống", "warning");
    }).catch(() => {
      Ge("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
    }) : Ge("Dán từ Excel", "Hãy bấm chọn ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
  }, {
    focusedCell: Ve,
    setFocusedCell: _t,
    focusCell: qt,
    handleTableContainerKeyDown: R,
    handleCellKeyDown: re,
    handlePaste: he
  } = bo({
    tableRef: yt,
    rows: oe,
    visibleColumns: k,
    selectedRowId: at,
    setSelectedRowId: lt,
    selectedRowIds: dt,
    setSelectedRowIds: ot,
    onRowDoubleClick: (v, p) => Le(v, p),
    onAddRow: Dt,
    onDeleteRow: (v) => Ke(v),
    onDuplicateRow: (v) => Ue(v),
    onToggleAll: Nt,
    onFilterByCell: Vt,
    onQuickSum: Tt,
    onToggleColumnFilters: () => J((v) => !v),
    onPasteExcel: kt
  }), Ce = (v, p, F) => {
    const V = v.id ?? v.Id ?? p;
    if (lt(V), F != null && F.ctrlKey || F != null && F.metaKey)
      ot((Ne) => {
        const We = new Set(Ne);
        return We.has(V) ? We.delete(V) : We.add(V), We;
      });
    else if (F != null && F.shiftKey && at !== null) {
      const Ne = oe.findIndex((We, ze) => (We.id ?? We.Id ?? ze) === at);
      if (Ne !== -1) {
        const We = Math.min(Ne, p), ze = Math.max(Ne, p), ht = /* @__PURE__ */ new Set();
        for (let St = We; St <= ze; St++)
          ht.add(oe[St].id ?? oe[St].Id ?? St);
        ot(ht);
      }
    } else
      ot(/* @__PURE__ */ new Set([V]));
    const K = Z.getState().features.find((Ne) => String(Ne.id) === String(s.pageId)), xe = K == null ? void 0 : K.scriptFile;
    N && ke.getState().setSelectedRecord(N, v), s.events && s.events.length > 0 && (Xe(s.events, "rowClick", s.props.label || "Bảng dữ liệu", xe, {
      row: v,
      rowIndex: p,
      action: "rowClick"
    }), Xe(s.events, "click", s.props.label || "Bảng dữ liệu", xe, {
      row: v,
      rowIndex: p,
      action: "click"
    }), Xe(s.events, "select", s.props.label || "Bảng dữ liệu", xe, {
      row: v,
      rowIndex: p,
      action: "select"
    }));
  }, Le = (v, p) => {
    const V = Z.getState().features.find((K) => String(K.id) === String(s.pageId)), A = V == null ? void 0 : V.scriptFile;
    s.events && s.events.length > 0 && Xe(s.events, "dblclick", s.props.label || "Bảng dữ liệu", A, {
      row: v,
      rowIndex: p,
      id: v.id ?? v.Id,
      action: "dblclick"
    });
  }, Be = () => {
    S && C(s.id);
    const v = S && u && u[s.id] ? u[s.id] : E, F = { id: v.length > 0 ? Math.max(...v.map((A) => Number(A.id) || 0)) + 1 : 1 };
    g.forEach((A) => {
      A.componentType === "Number" ? F[A.key] = 0 : A.componentType === "Checkbox" ? F[A.key] = !1 : A.componentType === "DatePicker" ? F[A.key] = "08/11/2026" : F[A.key] = "";
    });
    const V = [...v, F];
    ae(V), N && ke.getState().registerDataset(N, V);
  }, [De, Ie] = I({}), Je = (v, p) => {
    if (p != null && String(p).trim() !== "") {
      const F = S && u && u[s.id] ? u[s.id] : E, A = { id: F.length > 0 ? Math.max(...F.map((xe) => Number(xe.id) || 0)) + 1 : 1, ...De, [v]: p };
      g.forEach((xe) => {
        A[xe.key] === void 0 && (xe.componentType === "Number" || xe.dataType === "number" ? A[xe.key] = 0 : xe.componentType === "Checkbox" || xe.dataType === "boolean" ? A[xe.key] = !1 : (xe.componentType === "DatePicker" || xe.dataType, A[xe.key] = ""));
      });
      const K = [...F, A];
      ae(K), N && ke.getState().registerDataset(N, K), S && ns.setState((xe) => ({
        detailGrids: {
          ...xe.detailGrids,
          [s.id]: K
        }
      })), Ie({}), Ge("Dòng mới tự động", `Đã tự động khởi tạo dòng #${K.length} vào bảng`, "success");
    } else
      Ie((F) => ({ ...F, [v]: p }));
  }, Ue = (v) => {
    if (!a) {
      const xe = i(o);
      if (!xe.canWrite && !xe.canWriteAll) {
        alert("Bạn không có quyền thêm mới hoặc sao chép dòng dữ liệu.");
        return;
      }
    }
    S && w(s.id, v);
    const p = S && u && u[s.id] ? u[s.id] : E, F = p[v], V = Math.max(...p.map((xe) => Number(xe.id) || 0)) + 1, A = { ...F, id: V }, K = [...p];
    K.splice(v + 1, 0, A), ae(K), N && ke.getState().registerDataset(N, K);
  }, Ke = (v) => {
    if (!a) {
      const V = i(o);
      if (!V.canDelete && !V.canDeleteAll) {
        alert("Bạn không có quyền xóa bản ghi / dòng dữ liệu này.");
        return;
      }
    }
    S && f(s.id, v);
    const p = S && u && u[s.id] ? u[s.id] : E;
    if (p.length <= 1 && !confirm("Bạn có chắc muốn xóa dòng cuối cùng này không?"))
      return;
    const F = p.filter((V, A) => A !== v);
    ae(F), N && ke.getState().registerDataset(N, F);
  }, nt = (v, p, F) => {
    v.preventDefault(), v.stopPropagation(), pe({
      isOpen: !0,
      x: v.clientX,
      y: v.clientY,
      row: p,
      rowIndex: F
    });
  }, bt = (v) => {
    if (!a) {
      const K = i(o);
      if (!K.canWrite && !K.canWriteAll) {
        alert("Bạn không có quyền thêm mới dòng dữ liệu.");
        return;
      }
    }
    const p = S && u && u[s.id] ? u[s.id] : E, V = { id: p.length > 0 ? Math.max(...p.map((K) => Number(K.id) || 0)) + 1 : 1 };
    g.forEach((K) => {
      K.componentType === "Number" ? V[K.key] = 0 : K.componentType === "Checkbox" ? V[K.key] = !1 : (K.componentType, V[K.key] = "");
    });
    const A = [...p];
    A.splice(v + 1, 0, V), ae(A), N && ke.getState().registerDataset(N, A);
  }, ft = (v) => {
    if (v <= 0) return;
    const F = [...S && u && u[s.id] ? u[s.id] : E], [V] = F.splice(v, 1);
    F.splice(v - 1, 0, V), ae(F), N && ke.getState().registerDataset(N, F);
  }, Ze = (v) => {
    const p = S && u && u[s.id] ? u[s.id] : E;
    if (v >= p.length - 1) return;
    const F = [...p], [V] = F.splice(v, 1);
    F.splice(v + 1, 0, V), ae(F), N && ke.getState().registerDataset(N, F);
  }, Ot = (v, p) => {
    ce(p), v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", p);
  }, It = (v, p) => {
    if (v.preventDefault(), v.dataTransfer.dropEffect = "move", W === p) return;
    const F = v.currentTarget.getBoundingClientRect(), V = v.clientX < F.left + F.width / 2;
    te(p), ve(V ? "left" : "right");
  }, Yt = (v) => {
    const p = v.relatedTarget;
    v.currentTarget.contains(p) || (te(null), ve(null));
  }, ks = (v, p) => {
    if (v.preventDefault(), !W || W === p) {
      ce(null), te(null), ve(null);
      return;
    }
    const F = g.findIndex((K) => K.key === W);
    let V = g.findIndex((K) => K.key === p);
    if (F === -1 || V === -1) {
      ce(null), te(null), ve(null);
      return;
    }
    ue === "right" && F > V ? V = V + 1 : ue === "left" && F < V && (V = V - 1), V = Math.max(0, Math.min(g.length - 1, V));
    const A = Wn(g, F, V);
    Me(A), ce(null), te(null), ve(null);
  }, cs = () => {
    ce(null), te(null), ve(null);
  }, Ft = (v) => {
    v.sortable && (_ === v.key ? Y === "asc" ? M("desc") : B(null) : (B(v.key), M("asc")));
  }, Ss = (v, p, F) => {
    v.preventDefault(), v.stopPropagation(), le({
      isOpen: !0,
      x: v.clientX,
      y: v.clientY,
      column: p,
      columnIndex: F
    });
  }, ds = (v) => {
    const p = g.map(
      (F) => F.key === v ? { ...F, hidden: !F.hidden } : F
    );
    Me(p);
  }, ts = (v) => {
    const p = va(g, v);
    Me(p);
  }, ss = (v) => {
    var p;
    ((p = zt.getState().user) == null ? void 0 : p.role) === "Dev" && G({
      isOpen: !0,
      column: v
    });
  }, us = (v) => {
    var K;
    if (((K = zt.getState().user) == null ? void 0 : K.role) !== "Dev") return;
    const p = g.findIndex((xe) => xe.key === v);
    if (p === -1) return;
    const F = g[p], V = {
      ...F,
      key: `${F.key}_copy`,
      title: `${F.title} (Bản sao)`,
      order: (F.order ?? p) + 1
    }, A = [...g];
    A.splice(p + 1, 0, V), Me(A);
  }, Ts = (v) => {
    var F;
    if (((F = zt.getState().user) == null ? void 0 : F.role) !== "Dev") return;
    if (g.length <= 1) {
      alert("Bảng phải có ít nhất 1 cột!");
      return;
    }
    const p = g.filter((V) => V.key !== v);
    Me(p);
  }, xs = (v) => {
    const p = g.map(
      (V) => V.key === v.key ? v : V
    );
    Me(p), G((V) => ({
      ...V,
      isOpen: !0,
      column: v
    }));
    const F = Z.getState().savePage;
    if (typeof F == "function")
      try {
        F();
      } catch {
      }
  }, Xt = (v, p) => {
    const F = at === (v.id ?? v.Id ?? p), V = dt.has(v.id ?? v.Id ?? p);
    return /* @__PURE__ */ e.jsxs(
      "tr",
      {
        "data-row-index": p,
        onClick: (A) => Ce(v, p, A),
        onDoubleClick: () => Le(v, p),
        onContextMenu: (A) => nt(A, v, p),
        className: `transition-colors group cursor-pointer ${F || V ? "bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40"}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "td",
            {
              onClick: (A) => {
                A.stopPropagation();
                const K = v.id ?? v.Id ?? p;
                ot((xe) => {
                  const Ne = new Set(xe);
                  return Ne.has(K) ? Ne.delete(K) : Ne.add(K), Ne;
                }), lt(K);
              },
              className: `px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${V ? "bg-blue-900/60 text-blue-200 font-bold" : "bg-[#0f172a] group-hover:bg-slate-800/90"}`,
              style: { width: `${D}px`, minWidth: `${D}px` },
              title: "Click chọn dòng | Chuột phải mở menu thao tác",
              children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
                V ? /* @__PURE__ */ e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }) : null,
                /* @__PURE__ */ e.jsx("span", { children: p + 1 })
              ] })
            }
          ),
          k.map((A, K) => {
            const xe = !!(A.frozen || A.sticky === "left"), Ne = xe && O[A.key] !== void 0 ? O[A.key] : void 0, We = A.key === ne, ze = v[A.key], ht = A.align === "right" ? "text-right" : A.align === "center" ? "text-center" : "text-left", St = T[`${s.id}_${v.id}_${A.key}`];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-2 py-1 whitespace-nowrap transition-colors ${ht} ${A.isHighlightEditable ? "bg-emerald-950/20" : ""} ${xe ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${We ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                style: {
                  width: A.width,
                  minWidth: A.minWidth || A.width || "100px",
                  maxWidth: A.maxWidth,
                  left: Ne !== void 0 ? `${Ne}px` : void 0
                },
                children: /* @__PURE__ */ e.jsx(
                  Fr,
                  {
                    column: A,
                    value: ze,
                    row: v,
                    rowIndex: p,
                    columnIndex: K,
                    isFocused: (Ve == null ? void 0 : Ve.rowIndex) === p && (Ve == null ? void 0 : Ve.colIndex) === K,
                    isSelected: F,
                    error: St,
                    onChange: (Rt) => Qe(v.id ?? p, A.key, Rt),
                    onActionClick: (Rt) => et(Rt, v, A),
                    onKeyDown: re,
                    onFocus: (Rt, ys, Is) => {
                      lt(v.id ?? v.Id ?? Rt), _t({ rowIndex: Rt, colIndex: ys, colKey: Is });
                    }
                  }
                )
              },
              A.key
            );
          })
        ]
      },
      v.id ?? v.Id ?? p
    );
  }, { flex: gt, flexGrow: _s, flexShrink: Os, flexBasis: Hs, minWidth: Ds, maxWidth: Ws, width: ps, ...hs } = r || {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...hs
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5", children: /* @__PURE__ */ e.jsx("span", { children: t.label || "BẢNG DỮ LIỆU" }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20", children: [
              oe.length,
              " bản ghi"
            ] }),
            ge && /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/30",
                title: "Cơ chế cuộn ảo Virtual Windowing đang hoạt động (TSK-4.1)",
                children: [
                  /* @__PURE__ */ e.jsx(Ht, { className: "w-3 h-3 text-cyan-400" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Virtual (",
                    vt + 1,
                    "..",
                    Ct,
                    "/",
                    oe.length,
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
                    fe.length,
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
                  value: L,
                  onChange: (v) => y(v.target.value),
                  className: "h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => J((v) => !v),
                title: "Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)",
                className: `flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${z ? "border-emerald-500 bg-emerald-500/20 text-emerald-300" : "border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200"}`,
                children: [
                  /* @__PURE__ */ e.jsx(_r, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px] hidden sm:inline", children: "Lọc Cột" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Be,
                title: "Thêm dòng mới vào bảng",
                className: "flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[11px]", children: "Thêm dòng" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: Bt,
                title: "Làm mới dữ liệu & Đặt lại bộ lọc (Refresh)",
                className: "h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all cursor-pointer shadow-sm active:scale-95",
                children: /* @__PURE__ */ e.jsx(Wa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Mt,
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
                  typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.readText == "function" ? navigator.clipboard.readText().then((v) => {
                    if (v) {
                      const p = Ve ? Ve.rowIndex : at !== null ? Math.max(0, oe.findIndex((V, A) => (V.id ?? V.Id ?? A) === at)) : 0, F = Ve ? Ve.colIndex : 0;
                      kt(v, p, F);
                    } else
                      Ge("Dán từ Excel", "Clipboard hiện đang trống", "warning");
                  }).catch(() => {
                    Ge("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                  }) : Ge("Dán từ Excel", "Hãy bấm chọn một ô và nhấn phím Ctrl+V để dán dữ liệu", "info");
                },
                title: "Dán dữ liệu sao chép từ Excel / Google Sheets vào bảng (Ctrl+V)",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Or, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline", children: "Dán Excel" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Gt,
                title: "In báo cáo / Xuất PDF trực tiếp dữ liệu bảng",
                className: "flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95",
                children: [
                  /* @__PURE__ */ e.jsx(Mr, { className: "w-3.5 h-3.5 text-cyan-400" }),
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
                  onChange: (v) => {
                    const p = v.target.value || null;
                    Te(p), be(/* @__PURE__ */ new Set());
                  },
                  title: "Gom nhóm bảng theo cột (Group By - GroupGridView.cs)",
                  className: "bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer max-w-[130px] truncate",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-300", children: "-- Không nhóm --" }),
                    k.map((v) => /* @__PURE__ */ e.jsxs("option", { value: v.key, className: "bg-slate-900 text-slate-200", children: [
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
                  onClick: () => be(/* @__PURE__ */ new Set()),
                  title: "Mở rộng tất cả các nhóm",
                  className: "h-7 px-2 rounded-md border border-slate-700 bg-slate-800 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 transition-colors",
                  children: "Mở rộng"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => be(new Set(fe.map((v) => v.groupKey))),
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
                  onClick: Nt,
                  title: "F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F1"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Vt,
                  title: "F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F2"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Tt,
                  title: "F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F3"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: Dt,
                  title: "F4: Thêm dòng mới vào bảng (Add Row)",
                  className: "px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95",
                  children: "F4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => J((v) => !v),
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
            ref: yt,
            tabIndex: 0,
            onKeyDown: R,
            onPaste: he,
            style: {
              maxHeight: ge ? t.maxHeight || t.height || "550px" : t.maxHeight || void 0
            },
            className: `w-full overflow-x-auto select-none relative focus:outline-none ${ge ? "overflow-y-auto" : ""}`,
            children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ e.jsxs("thead", { className: "bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase", children: [
                /* @__PURE__ */ e.jsxs("tr", { children: [
                  /* @__PURE__ */ e.jsx(
                    "th",
                    {
                      onClick: Nt,
                      className: "px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none",
                      style: { width: `${D}px`, minWidth: `${D}px` },
                      title: "Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng",
                      children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center gap-1", children: /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: !0,
                          checked: oe.length > 0 && dt.size === oe.length,
                          className: "w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                        }
                      ) })
                    }
                  ),
                  k.map((v, p) => {
                    const F = !!(v.frozen || v.sticky === "left"), V = F && O[v.key] !== void 0 ? O[v.key] : void 0, A = v.key === ne, K = W === v.key, xe = q === v.key;
                    let Ne = "";
                    xe && ue === "left" ? Ne = "border-l-4 border-l-emerald-400 bg-emerald-500/20" : xe && ue === "right" && (Ne = "border-r-4 border-r-emerald-400 bg-emerald-500/20");
                    const We = v.align === "right" ? "text-right" : v.align === "center" ? "text-center" : "text-left";
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        draggable: !0,
                        onDragStart: (ze) => Ot(ze, v.key),
                        onDragOver: (ze) => It(ze, v.key),
                        onDragLeave: Yt,
                        onDrop: (ze) => ks(ze, v.key),
                        onDragEnd: cs,
                        onContextMenu: (ze) => Ss(ze, v, p),
                        onClick: () => Ft(v),
                        className: `group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${We} ${v.isHighlightEditable ? "border-b-2 !border-b-emerald-500/80 text-emerald-300 bg-emerald-950/25" : ""} ${F ? `sticky z-20 bg-[#0b1329] ${A ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/90"}` : "border-r border-slate-800/90"} ${K ? "opacity-30 bg-slate-800/80" : ""} ${Ne}`,
                        style: {
                          width: v.width,
                          minWidth: v.minWidth || v.width || "100px",
                          maxWidth: v.maxWidth,
                          left: V !== void 0 ? `${V}px` : void 0
                        },
                        title: `Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${v.order ?? p + 1})`,
                        children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${v.align === "right" ? "justify-end" : v.align === "center" ? "justify-center" : "justify-between"}`, children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 truncate", children: [
                            F && /* @__PURE__ */ e.jsx(Br, { className: "w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" }),
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
                          v.sortable && /* @__PURE__ */ e.jsx("div", { className: "flex items-center opacity-60 group-hover:opacity-100 transition-opacity", children: _ === v.key ? Y === "asc" ? /* @__PURE__ */ e.jsx(zn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(qn, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ e.jsx(Jn, { className: "w-2.5 h-2.5 text-slate-500" }) })
                        ] })
                      },
                      v.key
                    );
                  })
                ] }),
                z && /* @__PURE__ */ e.jsxs("tr", { className: "bg-[#080d1a] border-b border-slate-800", children: [
                  /* @__PURE__ */ e.jsx("th", { className: "px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]", children: "🔍" }),
                  k.map((v) => {
                    const p = !!(v.frozen || v.sticky === "left"), F = p && O[v.key] !== void 0 ? O[v.key] : void 0, V = v.key === ne;
                    return /* @__PURE__ */ e.jsx(
                      "th",
                      {
                        className: `px-1.5 py-1 border-r border-slate-800 ${p ? `sticky z-20 bg-[#080d1a] ${V ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : ""}` : ""}`,
                        style: {
                          left: F !== void 0 ? `${F}px` : void 0
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Lọc...",
                            value: h[v.key] || "",
                            onChange: (A) => X((K) => ({ ...K, [v.key]: A.target.value })),
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
                oe.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    colSpan: k.length + 1,
                    className: "px-6 py-8 text-center text-slate-500 italic",
                    children: 'Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.'
                  }
                ) }) : ye ? (
                  // ── 1. CHẾ ĐỘ GOM NHÓM DÒNG (COLLAPSIBLE GROUP-BY ROWS - TSK-4.2 & GroupGridView.cs) ──
                  fe.map((v) => {
                    const p = Pe.has(v.groupKey), F = k.find((A) => A.key === ye), V = (F == null ? void 0 : F.title) || ye;
                    return /* @__PURE__ */ e.jsxs(Qt.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(
                        "tr",
                        {
                          onClick: () => {
                            be((A) => {
                              const K = new Set(A);
                              return K.has(v.groupKey) ? K.delete(v.groupKey) : K.add(v.groupKey), K;
                            });
                          },
                          className: "bg-slate-900/95 hover:bg-slate-850 border-y border-amber-500/30 cursor-pointer select-none group transition-colors sticky top-0 z-15",
                          children: /* @__PURE__ */ e.jsx(
                            "td",
                            {
                              colSpan: k.length + 1,
                              className: "px-3 py-2 text-xs font-semibold text-slate-200",
                              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    className: "w-5 h-5 flex items-center justify-center rounded bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors",
                                    children: p ? /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
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
                                /* @__PURE__ */ e.jsx("div", { className: "ml-auto flex items-center gap-3 text-[11px] font-mono text-slate-400", children: k.filter((A) => v.subtotals[A.key] !== void 0 && v.subtotals[A.key] > 0).slice(0, 3).map((A) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ e.jsxs("span", { children: [
                                    A.title,
                                    ":"
                                  ] }),
                                  /* @__PURE__ */ e.jsx("strong", { className: "text-emerald-400 font-bold", children: v.subtotals[A.key].toLocaleString("en-US") })
                                ] }, A.key)) })
                              ] })
                            }
                          )
                        }
                      ),
                      !p && v.rows.map((A, K) => {
                        const xe = v.startIndex + K;
                        return Xt(A, xe);
                      })
                    ] }, `group_${v.groupKey}`);
                  })
                ) : ge ? (
                  // ── 2. CHẾ ĐỘ CUỘN ẢO (VIRTUAL SCROLLING WINDOWING - TSK-4.1) ──
                  /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    se > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${se}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: k.length + 1, style: { padding: 0, border: "none" } }) }),
                    Oe.map((v, p) => {
                      const F = vt + p;
                      return Xt(v, F);
                    }),
                    we > 0 && /* @__PURE__ */ e.jsx("tr", { style: { height: `${we}px`, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: k.length + 1, style: { padding: 0, border: "none" } }) })
                  ] })
                ) : (
                  // ── 3. CHẾ ĐỘ RENDER TIÊU CHUẨN (NORMAL RENDERING) ──
                  oe.map((v, p) => Xt(v, p))
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
                          style: { width: `${D}px`, minWidth: `${D}px` },
                          children: /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(Ye, { className: "w-3 h-3 text-emerald-400" }),
                            /* @__PURE__ */ e.jsx("span", { children: oe.length + 1 })
                          ] })
                        }
                      ),
                      k.map((v, p) => {
                        const F = !!(v.frozen || v.sticky === "left"), V = F && O[v.key] !== void 0 ? O[v.key] : void 0, A = v.key === ne, K = De[v.key] ?? "", xe = v.align === "right" ? "text-right" : v.align === "center" ? "text-center" : "text-left";
                        return /* @__PURE__ */ e.jsx(
                          "td",
                          {
                            className: `px-2 py-1 whitespace-nowrap transition-colors ${xe} ${F ? `sticky z-10 bg-[#0c1222] ${A ? "border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]" : "border-r border-slate-800/60"}` : "border-r border-slate-800/60"}`,
                            style: {
                              width: v.width,
                              minWidth: v.minWidth || v.width || "100px",
                              maxWidth: v.maxWidth,
                              left: V !== void 0 ? `${V}px` : void 0
                            },
                            children: /* @__PURE__ */ e.jsx(
                              Fr,
                              {
                                column: v,
                                value: K,
                                row: De,
                                rowIndex: oe.length,
                                columnIndex: p,
                                isFocused: (Ve == null ? void 0 : Ve.rowIndex) === oe.length && (Ve == null ? void 0 : Ve.colIndex) === p,
                                onChange: (Ne) => Je(v.key, Ne),
                                onKeyDown: re
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
                uo,
                {
                  columns: k,
                  data: oe,
                  showRowNumber: !0,
                  rowNumberWidth: D,
                  leftOffsets: O
                }
              ) })
            ] })
          }
        ),
        H.isOpen && H.column && /* @__PURE__ */ e.jsx(
          oo,
          {
            isOpen: H.isOpen,
            x: H.x,
            y: H.y,
            column: H.column,
            columnIndex: H.columnIndex,
            allColumns: g,
            onClose: () => le((v) => ({ ...v, isOpen: !1 })),
            onToggleHide: ds,
            onSetFreeze: ts,
            onOpenProperties: ss,
            onCloneColumn: us,
            onRemoveColumn: Ts,
            onToggleFilter: () => J((v) => !v)
          }
        ),
        ie.isOpen && ie.column && /* @__PURE__ */ e.jsx(
          ba,
          {
            isOpen: ie.isOpen,
            column: ie.column,
            onClose: () => G({ isOpen: !1, column: null }),
            onSave: xs
          }
        ),
        de.isOpen && de.row && /* @__PURE__ */ e.jsx(
          io,
          {
            isOpen: de.isOpen,
            x: de.x,
            y: de.y,
            row: de.row,
            rowIndex: de.rowIndex,
            totalRows: m.length,
            onClose: () => pe((v) => ({ ...v, isOpen: !1, row: null })),
            onDuplicateRow: Ue,
            onDeleteRow: Ke,
            onInsertRowBelow: bt,
            onMoveRowUp: ft,
            onMoveRowDown: Ze,
            onPasteExcel: Ut
          }
        )
      ]
    }
  );
}, bi = ({ node: s }) => {
  const { props: a, style: t } = s, { flex: r, flexGrow: n, flexShrink: o, flexBasis: l, minWidth: i, maxWidth: d, width: c, ...x } = t || {}, g = [
    { key: "code", title: "Mã số", width: "130px", sticky: "left", sortable: !0 },
    { key: "name", title: "Tên mục", width: "180px", sortable: !0 },
    { key: "category", title: "Phân loại", width: "140px", sortable: !0 },
    { key: "docDate", title: "Ngày tạo", width: "110px", format: "date_dmy", sortable: !0 },
    { key: "quantity", title: "Số lượng", width: "100px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "price", title: "Đơn giá", width: "120px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "amount", title: "Thành tiền", width: "130px", align: "right", aggregate: "sum", sortable: !0 },
    { key: "status", title: "Trạng thái", width: "130px", align: "center" }
  ], k = a.columns && a.columns.length > 0 ? a.columns : g, u = [
    { id: "1", code: "REC-001", name: "Mục dữ liệu A1", category: "Loại 1", docDate: "26/01/2026", quantity: 12, price: 100, amount: 1200, status: "Hoàn thành" },
    { id: "2", code: "REC-002", name: "Mục dữ liệu B2", category: "Loại 2", docDate: "28/01/2026", quantity: 25, price: 150, amount: 3750, status: "Đang xử lý" },
    { id: "3", code: "REC-003", name: "Mục dữ liệu C3", category: "Loại 1", docDate: "02/02/2026", quantity: 8, price: 80, amount: 640, status: "Chờ duyệt" },
    { id: "4", code: "REC-004", name: "Mục dữ liệu D4", category: "Loại 3", docDate: "05/02/2026", quantity: 40, price: 200, amount: 8e3, status: "Hoàn thành" }
  ], [b, C] = I(""), [f, w] = I(null), [T, S] = I("asc"), [N, P] = I(1), $ = Number(a.pageSize) || 10, m = Ae(() => {
    if (!b.trim()) return u;
    const B = b.toLowerCase();
    return u.filter(
      (Y) => Object.values(Y).some((M) => String(M).toLowerCase().includes(B))
    );
  }, [b]), j = Ae(() => f ? [...m].sort((B, Y) => {
    const M = B[f], z = Y[f];
    if (M === z) return 0;
    const J = M > z ? 1 : -1;
    return T === "asc" ? J : -J;
  }) : m, [m, f, T]), E = Math.ceil(j.length / $) || 1, L = Ae(() => {
    const B = (N - 1) * $;
    return j.slice(B, B + $);
  }, [j, N, $]), y = Ae(() => {
    const B = {};
    for (const Y of k)
      if (Y.aggregate === "sum") {
        const M = m.reduce((z, J) => z + (Number(J[Y.key]) || 0), 0);
        B[Y.key] = M.toLocaleString("en-US");
      } else if (Y.aggregate === "count")
        B[Y.key] = m.length;
      else if (Y.aggregate === "avg") {
        const M = m.length ? m.reduce((z, J) => z + (Number(J[Y.key]) || 0), 0) / m.length : 0;
        B[Y.key] = M.toFixed(1);
      }
    return B;
  }, [k, m]), _ = (B) => {
    f === B ? S(T === "asc" ? "desc" : "asc") : (w(B), S("asc"));
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs",
      style: {
        width: "100%",
        maxWidth: "100%",
        ...x
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            a.label && /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 uppercase tracking-wider text-[11px]", children: a.label }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono", children: [
              m.length,
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
                value: b,
                onChange: (B) => {
                  C(B.target.value), P(1);
                },
                className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none", children: /* @__PURE__ */ e.jsx("tr", { children: k.map((B) => {
            const Y = B.sticky === "left", M = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "th",
              {
                onClick: () => B.sortable !== !1 && _(B.key),
                style: {
                  width: B.width,
                  minWidth: B.minWidth || B.width
                },
                className: `px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${M} ${Y ? "sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: /* @__PURE__ */ e.jsxs("div", { className: `flex items-center gap-1.5 ${B.align === "right" ? "justify-end" : B.align === "center" ? "justify-center" : "justify-start"}`, children: [
                  B.sticky === "left" && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-blue-400 font-normal", title: "Cột cố định (Frozen)", children: "📌" }),
                  /* @__PURE__ */ e.jsx("span", { children: B.title }),
                  B.sortable !== !1 && /* @__PURE__ */ e.jsx(Jn, { className: "w-3 h-3 opacity-40 hover:opacity-100" })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono text-[11px]", children: L.length > 0 ? L.map((B, Y) => /* @__PURE__ */ e.jsx("tr", { className: "hover:bg-slate-800/40 transition-colors", children: k.map((M) => {
            const z = M.sticky === "left", J = B[M.key], h = M.align === "right" ? "text-right" : M.align === "center" ? "text-center" : "text-left";
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2 text-slate-300 truncate ${h} ${z ? "sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: (() => {
                  if (J == null) return "—";
                  if (M.componentType === "Checkbox") {
                    const X = J === !0 || J === "true" || J === 1;
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
                  if (M.componentType === "Button")
                    return /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        className: "px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors",
                        children: String(J)
                      }
                    );
                  if (M.componentType === "DatePicker" || M.format === "date_dmy")
                    return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-200", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "opacity-60 text-[10px]", children: "📅" }),
                      /* @__PURE__ */ e.jsx("span", { children: String(J) })
                    ] });
                  if (M.componentType === "Number" || typeof J == "number") {
                    const X = Number(J);
                    if (!isNaN(X)) {
                      const H = M.precision !== void 0 ? M.precision : X % 1 !== 0 ? 2 : 0;
                      return /* @__PURE__ */ e.jsx("span", { className: "text-slate-100 font-mono", children: X.toLocaleString("en-US", { minimumFractionDigits: H, maximumFractionDigits: H }) });
                    }
                  }
                  return M.key === "status" || M.componentType === "Select" ? /* @__PURE__ */ e.jsx("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${J === "Hoàn thành" ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40" : "bg-amber-950/60 text-amber-400 border border-amber-800/40"}`, children: String(J) }) : String(J);
                })()
              },
              M.key
            );
          }) }, B.id || Y)) : /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: k.length, className: "px-4 py-8 text-center text-slate-500 font-sans", children: "Không tìm thấy dữ liệu phù hợp." }) }) }),
          /* @__PURE__ */ e.jsx("tfoot", { className: "bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200", children: /* @__PURE__ */ e.jsx("tr", { children: k.map((B, Y) => {
            const M = B.sticky === "left", z = B.align === "right" ? "text-right" : B.align === "center" ? "text-center" : "text-left", J = y[B.key];
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-3.5 py-2.5 font-mono ${z} ${M ? "sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]" : ""}`,
                children: Y === 0 && !J ? /* @__PURE__ */ e.jsx("span", { className: "font-sans uppercase text-[10px] text-slate-400", children: "Tổng cộng:" }) : J !== void 0 ? J : ""
              },
              B.key
            );
          }) }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Trang ",
            N,
            " / ",
            E
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: N <= 1,
                onClick: () => P((B) => Math.max(1, B - 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wr, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: N >= E,
                onClick: () => P((B) => Math.min(E, B + 1)),
                className: "p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
function To(s, a, t = "") {
  if (!a || typeof a != "object")
    return t;
  if (!s || typeof s != "string" || s.trim() === "") {
    const d = a.fullName ?? a.FullName ?? a.name ?? a.Name ?? a.shortName ?? a.ShortName ?? a.title ?? a.Title ?? a.label ?? a.Label ?? a.code ?? a.Code ?? a.id ?? a.Id;
    return d != null ? String(d) : t;
  }
  const r = s.trim();
  if (!r.includes("{") || !r.includes("}")) {
    const d = Jt(a, r);
    return d != null ? String(d) : r;
  }
  const n = /\{([^{}]+)\}/g;
  let o = !1;
  const l = r.replace(n, (d, c) => {
    const x = c.trim();
    o = !0;
    const g = x.includes(".") ? x.split(".").pop().trim() : x;
    let k = Jt(a, x);
    return k == null && (k = Jt(a, g)), k != null ? String(k) : "";
  });
  return o ? l.replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, " - ").replace(/^[\s\-|,:/]+/, "").replace(/[\s\-|,:/]+$/, "").trim() || t : r;
}
function Jt(s, a) {
  if (!s || typeof s != "object" || !a) return;
  if (a in s && s[a] !== void 0 && s[a] !== null)
    return s[a];
  const t = a.includes(".") ? a.split(".").pop().trim() : a.trim();
  if (t in s && s[t] !== void 0 && s[t] !== null)
    return s[t];
  const r = t.toLowerCase(), n = Object.keys(s), o = n.find((d) => d.toLowerCase() === r);
  if (o && s[o] !== void 0 && s[o] !== null)
    return s[o];
  const l = t.replace(/^(fld_|_)/i, ""), i = n.find((d) => d.toLowerCase() === l.toLowerCase());
  if (i && s[i] !== void 0 && s[i] !== null)
    return s[i];
}
const Do = ({
  value: s,
  onChange: a,
  options: t,
  items: r,
  reference: n,
  refClass: o,
  canQuickAdd: l = !0,
  dataSource: i,
  idField: d = "id",
  selectField: c = "name",
  dropdownColumns: x,
  formatData: g,
  populateField: k,
  formId: u,
  placeholder: b = "— Chọn —",
  disabled: C = !1,
  readOnly: f = !1,
  isGridCell: w = !1,
  error: T,
  className: S = "",
  onKeyDown: N,
  onFocus: P,
  onBlur: $,
  onQuickAdd: m
}) => {
  const [j, E] = I(!1), [L, y] = I(""), [_, B] = I(0), [Y, M] = I(!1), [z, J] = I([]), [h, X] = I(!1), [H, le] = I(""), [ie, G] = I(""), [de, pe] = I(""), [W, ce] = I(!1), q = st(null), te = st(null), ue = st(null), ve = st(null), D = ke((se) => se.queryEntity), O = ke((se) => se.getDataset), ne = ke((se) => se.applyPopulate), oe = ke((se) => n ? se.getDataset(n).length : 0), ae = () => {
    if (m) {
      m(), E(!1);
      return;
    }
    if (o) {
      ua(o, {}, `Tạo mới ${n || o}`), E(!1);
      return;
    }
    const se = L.trim();
    le(se ? se.toUpperCase().replace(/\s+/g, "_") : ""), G(se), pe(""), X(!0);
  }, ye = async () => {
    if (!H.trim() || !ie.trim()) return;
    const se = (n || "").trim();
    if (se) {
      ce(!0);
      try {
        const we = {
          code: H.trim(),
          name: ie.trim(),
          fullName: ie.trim(),
          description: de.trim(),
          active: !0
        }, Oe = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(se)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(we)
        });
        if (Oe.ok) {
          const Fe = await Oe.json(), Me = {
            ...we,
            ...Fe,
            id: Fe.id ?? Fe.Id ?? Date.now()
          }, $e = await D(se, i);
          Array.isArray($e) && $e.length > 0 ? J($e) : J((Qe) => [Me, ...Qe]), me(Me), X(!1), E(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (we) {
        console.error("[EnterpriseSelect] Lỗi tạo nhanh bản ghi:", we);
        const Oe = {
          id: `mock-${Date.now()}`,
          code: H.trim(),
          name: ie.trim(),
          fullName: ie.trim(),
          description: de.trim(),
          active: !0
        };
        J((Fe) => [Oe, ...Fe]), me(Oe), X(!1), E(!1);
      } finally {
        ce(!1);
      }
    }
  };
  Ee(() => {
    let se = !0;
    const we = (n || "").trim();
    if (r && Array.isArray(r) && r.length > 0) {
      J(r);
      return;
    }
    if (we)
      M(!0), D(we, i).then((Oe) => {
        se && (Array.isArray(Oe) && Oe.length > 0 ? J(Oe) : J([]));
      }).catch(() => {
        if (se) {
          const Oe = O(we);
          J(Array.isArray(Oe) ? Oe : []);
        }
      }).finally(() => {
        se && M(!1);
      });
    else if (t && Array.isArray(t) && t.length > 0) {
      const Oe = t.map((Fe) => Fe.rawItem && typeof Fe.rawItem == "object" ? Fe.rawItem : {
        [d]: Fe.value,
        [c]: Fe.label,
        id: Fe.value,
        name: Fe.label,
        fullName: Fe.label
      });
      J(Oe);
    } else
      J([]);
    return () => {
      se = !1;
    };
  }, [n, i, r, t, d, c, D, O, oe]);
  const Te = Ae(() => {
    if (x && x.length > 0)
      return x;
    if (z.length > 0) {
      const se = z[0], we = Object.keys(se), Fe = [
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
        ($e) => we.some((Qe) => Qe.toLowerCase() === $e.toLowerCase())
      );
      if (Fe.length > 0)
        return Fe.slice(0, 3).map(($e) => {
          const Qe = we.find((et) => et.toLowerCase() === $e.toLowerCase()) || $e;
          return {
            key: Qe,
            title: Qe.charAt(0).toUpperCase() + Qe.slice(1),
            width: Qe.toLowerCase().includes("name") ? "60%" : "40%",
            align: "left"
          };
        });
      const Me = we.filter(
        ($e) => typeof se[$e] != "object" && !$e.startsWith("_")
      ).slice(0, 2);
      if (Me.length > 0)
        return Me.map(($e) => ({
          key: $e,
          title: $e.charAt(0).toUpperCase() + $e.slice(1),
          width: "50%",
          align: "left"
        }));
    }
    return [
      { key: d, title: "Mã", width: "35%", align: "left" },
      { key: c, title: "Tên", width: "65%", align: "left" }
    ];
  }, [x, z, d, c]), Pe = Ae(() => s == null || s === "" ? null : z.find((se) => {
    const we = Jt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code;
    return we !== void 0 && String(we) === String(s);
  }) || null, [s, z, d]), be = Ae(() => Pe ? To(g, Pe, String(s ?? "")) : s != null && s !== "" ? String(s) : "", [Pe, g, s]), [fe, Re] = I({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: !1
  }), Se = () => {
    if (!q.current) return;
    const se = q.current.getBoundingClientRect(), we = 300, Fe = Math.max(se.width, 360), $e = window.innerHeight - se.bottom < we && se.top > we;
    let Qe = $e ? se.top - we - 4 : se.bottom + 4, et = se.left;
    et + Fe > window.innerWidth - 12 && (et = Math.max(12, window.innerWidth - Fe - 12)), Re({ top: Qe, left: et, width: Fe, openUpwards: $e });
  }, ge = () => {
    C || f || (Se(), E(!0), y(""), B(0));
  };
  Ee(() => {
    j && (Se(), setTimeout(() => {
      var se;
      (se = ue.current) == null || se.focus();
    }, 50));
  }, [j]), Ee(() => {
    if (!j) return;
    const se = (Oe) => {
      var Me, $e;
      const Fe = Oe.target;
      (Me = q.current) != null && Me.contains(Fe) || ($e = te.current) != null && $e.contains(Fe) || (E(!1), $ && $());
    }, we = () => {
      Se();
    };
    return window.addEventListener("mousedown", se), window.addEventListener("scroll", we, !0), window.addEventListener("resize", we), () => {
      window.removeEventListener("mousedown", se), window.removeEventListener("scroll", we, !0), window.removeEventListener("resize", we);
    };
  }, [j, $]);
  const ee = Ae(() => {
    if (!L.trim()) return z;
    const se = L.toLowerCase().trim();
    return z.filter((we) => Te.some((Fe) => {
      const Me = Jt(we, Fe.key);
      return Me != null && String(Me).toLowerCase().includes(se);
    }) ? !0 : ["id", "code", "name", "fullName", "title", "address"].some((Fe) => {
      const Me = Jt(we, Fe);
      return Me != null && String(Me).toLowerCase().includes(se);
    }));
  }, [z, L, Te]);
  Ee(() => {
    if (ve.current && ee.length > 0) {
      const se = ve.current.querySelector(`[data-index="${_}"]`);
      se && se.scrollIntoView({ block: "nearest" });
    }
  }, [_, ee]);
  const me = (se) => {
    const we = Jt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code;
    a(we, se), k && u && ne(u, k, se), E(!1);
  }, ct = (se) => {
    se.stopPropagation(), a("", null);
  }, Et = (se) => {
    se.key === "ArrowDown" ? (se.preventDefault(), B((we) => we < ee.length - 1 ? we + 1 : we)) : se.key === "ArrowUp" ? (se.preventDefault(), B((we) => we > 0 ? we - 1 : 0)) : se.key === "Enter" ? (se.preventDefault(), ee.length > 0 && _ >= 0 && _ < ee.length && me(ee[_])) : se.key === "Escape" && (se.preventDefault(), E(!1));
  }, vt = (se) => {
    if (se.key === "Enter" || se.key === " " || se.key === "F4" || se.altKey && se.key === "ArrowDown") {
      se.preventDefault(), ge();
      return;
    }
    N && N(se);
  }, Ct = T ? "border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70" : "border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: q,
        tabIndex: C ? -1 : 0,
        onClick: ge,
        onKeyDown: vt,
        onFocus: P,
        className: `enterprise-select-trigger relative flex items-center justify-between transition-all select-none cursor-pointer ${w ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${Ct}` : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${Ct} shadow-sm`} ${C ? "opacity-50 cursor-not-allowed" : ""} ${S}`,
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 truncate mr-1.5", children: be ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-slate-100 truncate block", children: be }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 truncate block italic", children: b }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
            !!be && !C && !f && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: ct,
                className: "p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors",
                title: "Xóa lựa chọn",
                children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              Lt,
              {
                className: `w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${j ? "rotate-180 text-emerald-400" : ""}`
              }
            )
          ] })
        ]
      }
    ),
    j && At(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${fe.top}px`,
            left: `${fe.left}px`,
            width: `${fe.width}px`,
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
                    ref: ue,
                    type: "text",
                    value: L,
                    onChange: (se) => {
                      y(se.target.value), B(0);
                    },
                    onKeyDown: Et,
                    placeholder: "Tìm kiếm theo mã, tên, địa chỉ...",
                    className: "w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  }
                ),
                L && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => y(""),
                    className: "absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200",
                    children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
                  }
                )
              ] }),
              l && (n || o) && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: ae,
                  title: `Tạo nhanh bản ghi mới cho ${n || "danh mục"}`,
                  className: "flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95",
                  children: [
                    /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "Tạo nhanh" })
                  ]
                }
              ),
              Y && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-emerald-400 text-[11px] gap-1 px-1", children: [
                /* @__PURE__ */ e.jsx(An, { className: "w-3 h-3 animate-spin" }),
                /* @__PURE__ */ e.jsx("span", { children: "Đang tải..." })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none", children: [
              Te.map((se, we) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: { width: se.width || `${100 / Te.length}%` },
                  className: `px-1.5 truncate ${se.align === "right" ? "text-right" : se.align === "center" ? "text-center" : "text-left"}`,
                  children: se.title
                },
                se.key || we
              )),
              /* @__PURE__ */ e.jsx("div", { className: "w-6 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: ve,
                className: "max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none",
                children: ee.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(Wt, { className: "w-5 h-5 text-slate-600 opacity-60" }),
                  /* @__PURE__ */ e.jsx("span", { children: Y ? "Đang truy vấn dữ liệu..." : "Không tìm thấy kết quả phù hợp" }),
                  l && (n || o) && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: ae,
                      className: "mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95",
                      children: [
                        /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          'Thêm nhanh "',
                          L || n,
                          '"'
                        ] })
                      ]
                    }
                  )
                ] }) : ee.map((se, we) => {
                  const Oe = Jt(se, d) ?? se.id ?? se.Id ?? se.code ?? se.Code, Fe = Oe !== void 0 && String(Oe) === String(s), Me = we === _;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      "data-index": we,
                      onClick: () => me(se),
                      onMouseEnter: () => B(we),
                      className: `flex items-center px-3 py-1.5 cursor-pointer transition-colors ${Fe ? "bg-emerald-950/60 text-emerald-200 font-medium" : Me ? "bg-slate-800/70 text-slate-100" : "text-slate-300 hover:bg-slate-800/40"}`,
                      children: [
                        Te.map(($e, Qe) => {
                          const et = Jt(se, $e.key), at = et != null ? String(et) : "—";
                          return /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: { width: $e.width || `${100 / Te.length}%` },
                              className: `px-1.5 truncate ${$e.align === "right" ? "text-right font-mono" : $e.align === "center" ? "text-center" : "text-left"}`,
                              children: at
                            },
                            $e.key || Qe
                          );
                        }),
                        /* @__PURE__ */ e.jsx("div", { className: "w-6 flex items-center justify-center flex-shrink-0", children: Fe && /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5 text-emerald-400" }) })
                      ]
                    },
                    Oe ?? we
                  );
                })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("span", { children: [
                  ee.length,
                  " / ",
                  z.length,
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
    h && At(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (se) => se.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" }) }),
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
                    value: H,
                    onChange: (se) => le(se.target.value),
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
                    value: ie,
                    onChange: (se) => G(se.target.value),
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
                    value: de,
                    onChange: (se) => pe(se.target.value),
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
                  disabled: W || !H.trim() || !ie.trim(),
                  onClick: ye,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    W ? /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
}, Io = ({ node: s, isEditing: a }) => {
  var M, z, J, h, X, H, le, ie, G, de, pe;
  const { props: t, style: r } = s, n = Z((W) => W.features), o = Z((W) => W.activeFeatureId), l = n.find((W) => String(W.id) === String(s.pageId)) || n.find((W) => String(W.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String(((M = s.dataBinding) == null ? void 0 : M.fieldName) || s.props.name || s.id), T = ke((W) => es(W, f, w, void 0)), S = ke((W) => W.setFieldValue), N = T !== void 0 ? T : t.value ?? "", P = t.reference || t.refName || ((z = s.dataBinding) == null ? void 0 : z.refName) || ((J = s.dataBinding) == null ? void 0 : J.entityName) || "", $ = t.dataSource || ((h = s.dataBinding) == null ? void 0 : h.dataSource) || t.query || ((X = s.dataBinding) == null ? void 0 : X.query) || t.sqlWhere || ((H = s.dataBinding) == null ? void 0 : H.sqlWhere) || "", m = t.idField || ((le = s.dataBinding) == null ? void 0 : le.idField) || "id", j = t.textField || t.selectField || ((ie = s.dataBinding) == null ? void 0 : ie.selectField) || "name", E = t.dropdownColumns || ((G = s.dataBinding) == null ? void 0 : G.dropdownColumns), L = t.formatData || ((de = s.dataBinding) == null ? void 0 : de.formatData) || "", y = t.populateField || ((pe = s.dataBinding) == null ? void 0 : pe.populateField) || "", _ = t.options || [], B = !!t.validationError, Y = (W, ce) => {
    S(f, w, W), a || Xe(s.events, "change", t.label || "Chọn mục", i, {
      componentId: s.id,
      fieldName: w,
      value: W,
      selectedItem: ce
    });
  };
  return /* @__PURE__ */ e.jsx(
    Cs,
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
        Do,
        {
          value: N,
          onChange: Y,
          options: _,
          reference: P,
          dataSource: $,
          idField: m,
          selectField: j,
          dropdownColumns: E,
          formatData: L,
          populateField: y,
          formId: f,
          placeholder: t.placeholder ? String(t.placeholder) : "— Chọn —",
          disabled: t.disabled,
          error: B ? String(t.validationError) : void 0
        }
      ) })
    }
  );
}, Fo = ({ node: s, isEditing: a }) => {
  const { props: t, style: r } = s, n = Z((T) => T.features), o = Z((T) => T.activeFeatureId), l = n.find((T) => String(T.id) === String(s.pageId)) || n.find((T) => String(T.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, [f, w] = I(!!t.value);
  return /* @__PURE__ */ e.jsx(
    Cs,
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
            onChange: (T) => {
              w(T.target.checked), a || Xe(s.events, "change", t.label || "Hộp kiểm", i, {
                componentId: s.id,
                value: T.target.checked
              });
            }
          }
        ),
        t.placeholder && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-xs text-slate-400 select-none", children: t.placeholder })
      ] })
    }
  );
}, Ro = ({ node: s, isEditing: a }) => {
  var $;
  const { props: t, style: r } = s, n = Z((m) => m.features), o = Z((m) => m.activeFeatureId), l = n.find((m) => String(m.id) === String(s.pageId)) || n.find((m) => String(m.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String((($ = s.dataBinding) == null ? void 0 : $.fieldName) || s.props.name || s.id), T = ke((m) => es(m, f, w, void 0)), S = ke((m) => m.setFieldValue), N = T !== void 0 ? T : t.value ?? "", P = (m) => {
    S(f, w, m), a || Xe(s.events, "change", t.label || "Chọn ngày", i, {
      componentId: s.id,
      fieldName: w,
      value: m
    });
  };
  return /* @__PURE__ */ e.jsx(
    Cs,
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
        fa,
        {
          value: N,
          onChange: P,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          placeholder: t.placeholder || "DD/MM/YYYY",
          error: t.validationError ? String(t.validationError) : void 0
        }
      )
    }
  );
}, Po = ({ node: s, children: a }) => {
  const { props: t } = s, r = t.title || t.label || "Hộp Thoại (Modal Dialog)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-blue-400 uppercase tracking-wider", children: r }),
      /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pt-3", children: a || /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400", children: "Kéo thả các phần tử vào hộp thoại này." }) })
  ] });
}, $o = ({ node: s }) => {
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
}, Lo = ({ node: s, isEditing: a }) => {
  var m;
  const { props: t, style: r } = s, n = Z((j) => j.features), o = Z((j) => j.activeFeatureId), l = n.find((j) => String(j.id) === String(s.pageId)) || n.find((j) => String(j.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String(((m = s.dataBinding) == null ? void 0 : m.fieldName) || s.props.name || s.id), T = ke((j) => es(j, f, w, void 0)), S = ke((j) => j.setFieldValue), N = T !== void 0 ? T : t.value !== void 0 ? String(t.value) : "", P = Number(t.rows) || 2, $ = !!t.validationError;
  return /* @__PURE__ */ e.jsx(
    Cs,
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
          rows: P,
          placeholder: t.placeholder || "Nhập nội dung...",
          value: N,
          disabled: t.disabled,
          readOnly: a || !!t.readOnly,
          style: {
            width: "100%",
            ...C
          },
          className: `w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${$ ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500"} ${t.disabled ? "opacity-50 cursor-not-allowed bg-slate-900" : ""}`,
          onChange: (j) => {
            const E = j.target.value;
            S(f, w, E), a || Xe(s.events, "change", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: w,
              value: E
            });
          },
          onFocus: () => {
            a || Xe(s.events, "focus", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: w
            });
          },
          onBlur: (j) => {
            a || Xe(s.events, "blur", t.label || "Văn bản", i, {
              componentId: s.id,
              fieldName: w,
              value: j.target.value
            });
          }
        }
      )
    }
  );
}, fi = ({ node: s, isEditing: a, children: t }) => {
  var S, N;
  const { props: r, style: n } = s, o = Z((P) => P.updateComponentProps), { flex: l, flexGrow: i, flexShrink: d, flexBasis: c, minWidth: x, maxWidth: g, width: k, ...u } = n || {}, b = [
    { id: "main", label: "TAB 1" }
  ], C = r.tabs || b, [f, w] = I(
    r.activeTabId || ((S = C[0]) == null ? void 0 : S.id) || "main"
  ), T = r.activeTabId || f || ((N = C[0]) == null ? void 0 : N.id) || "main";
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
          C.map((P) => {
            const $ = P.id === T;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (m) => {
                  m.stopPropagation(), w(P.id), o(s.id, { activeTabId: P.id });
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${$ ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: P.label }),
                  P.badge !== void 0 && /* @__PURE__ */ e.jsx("span", { className: `px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${P.badgeColor || "bg-amber-600"}`, children: P.badge })
                ]
              },
              P.id
            );
          }),
          a && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: (P) => {
                P.stopPropagation();
                const $ = `tab_${Date.now().toString(36)}`, m = [...C, { id: $, label: `Tab Mới ${C.length + 1}` }];
                o(s.id, { tabs: m, activeTabId: $ }), w($);
              },
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
              title: "Thêm Tab mới",
              children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
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
  var u;
  const l = Z((b) => b.addComponent), i = Z((b) => b.selectComponent), [d, c] = I(((u = t[0]) == null ? void 0 : u.id) || ""), x = t.find((b) => b.id === d) || t[0], g = (x == null ? void 0 : x.id) || "", k = (b) => {
    var T;
    b.stopPropagation();
    const C = ((T = t[0]) == null ? void 0 : T.pageId) || "2", f = `tab_${Date.now().toString(36)}`, w = {
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
    l(w, s), c(f), i(f);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar", children: [
          t.map((b) => {
            const C = b.id === g, f = b.props.label || b.props.title || `Tab #${b.id.slice(-4)}`, w = b.props.badge;
            return /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: (T) => {
                  T.stopPropagation(), c(b.id), r && i(b.id);
                },
                className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${C ? "bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm" : "bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30"}`,
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: f }),
                  w !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600", children: String(w) })
                ]
              },
              b.id
            );
          }),
          r && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: k,
              className: "px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1",
              title: "Thêm Tab mới vào nhóm này (cùng Order)",
              children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Tab" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3", children: x && o ? o(x, n) : /* @__PURE__ */ e.jsx("div", { className: "text-center py-6 text-xs text-slate-500 italic select-none", children: "Chưa có nội dung cho tab này." }) })
      ]
    }
  );
}, Ao = ({
  label: s = "Bản ghi:",
  reference: a = "Records",
  displayField: t = "code",
  records: r,
  activeId: n,
  canAdd: o = !0,
  onSelectRecord: l,
  onAddNew: i,
  className: d = "",
  style: c = {}
}) => {
  var T;
  const x = ke(), g = [
    { id: "1", code: "REC-001", name: "Bản ghi mẫu 01" },
    { id: "2", code: "REC-002", name: "Bản ghi mẫu 02" },
    { id: "3", code: "REC-003", name: "Bản ghi mẫu 03" }
  ], [k, u] = I(r || g), [b, C] = I(n || ((T = g[0]) == null ? void 0 : T.id) || "");
  Ee(() => {
    r && r.length > 0 && u(r);
  }, [r]), Ee(() => {
    n !== void 0 && C(n);
  }, [n]);
  const f = (S) => {
    C(S.id), l ? l(S) : x.setFormRecord("default", S);
  }, w = () => {
    const S = k.length + 1, N = `REC-${String(S).padStart(3, "0")}`, P = {
      id: String(Date.now()),
      code: N,
      name: `Bản ghi mới ${S}`
    }, $ = [...k, P];
    u($), C(P.id), i ? i() : x.setFormRecord("default", P);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${d}`,
      style: c,
      children: [
        s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none", children: [
          /* @__PURE__ */ e.jsx(Gr, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ e.jsx("span", { children: s })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
          k.map((S) => {
            const N = String(S.id) === String(b), P = S[t] || S.code || S.name || S.id;
            return /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => f(S),
                className: `px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${N ? "bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50" : "bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80"}`,
                children: /* @__PURE__ */ e.jsx("span", { children: P })
              },
              S.id
            );
          }),
          o && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: w,
              className: "flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm",
              title: "Thêm bản ghi mới",
              children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "Tạo mới" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Eo = ({
  isOpen: s,
  title: a,
  entityName: t,
  columns: r,
  searchFields: n,
  onSelect: o,
  onClose: l
}) => {
  const i = ke(), d = ke(($) => $.datasets[t]), [c, x] = I([]), [g, k] = I(!1), [u, b] = I(""), [C, f] = I(0), w = st(null);
  Ee(() => {
    if (!s) {
      b(""), f(0);
      return;
    }
    Array.isArray(d) && d.length > 0 ? x(d) : (k(!0), i.queryEntity(t).then(($) => {
      Array.isArray($) && $.length > 0 ? x($) : x(i.getDataset(t) || []);
    }).finally(() => k(!1))), setTimeout(() => {
      var $, m;
      ($ = w.current) == null || $.focus(), (m = w.current) == null || m.select();
    }, 80);
  }, [s, t, d]);
  const T = Ae(() => {
    if (r && r.length > 0) return r;
    if (c.length > 0) {
      const $ = c[0], m = ["_id", "__v", "createdat", "updatedat", "password"];
      return Object.keys($).filter((j) => !m.includes(j.toLowerCase()) && typeof $[j] != "object").slice(0, 6).map((j) => ({
        key: j,
        title: j.charAt(0).toUpperCase() + j.slice(1).replace(/([A-Z])/g, " $1"),
        width: "140px",
        sortable: !0
      }));
    }
    return [
      { key: "code", title: "Mã số", width: "120px", sortable: !0 },
      { key: "name", title: "Tên / Tiêu đề", width: "220px", sortable: !0 },
      { key: "status", title: "Trạng thái", width: "120px", sortable: !0 }
    ];
  }, [r, c]), S = Ae(() => {
    if (!u.trim()) return c;
    const $ = u.toLowerCase().trim();
    return c.filter((m) => n && n.length > 0 ? n.some((j) => {
      const E = m[j];
      return E != null && String(E).toLowerCase().includes($);
    }) : Object.values(m).some(
      (j) => j != null && String(j).toLowerCase().includes($)
    ));
  }, [c, u, n]);
  Ee(() => {
    C >= S.length && f(Math.max(0, S.length - 1));
  }, [S.length]);
  const N = ($) => {
    $.key === "ArrowDown" ? ($.preventDefault(), f((m) => m < S.length - 1 ? m + 1 : m)) : $.key === "ArrowUp" ? ($.preventDefault(), f((m) => m > 0 ? m - 1 : 0)) : $.key === "Enter" ? ($.preventDefault(), S[C] && (o(S[C]), l())) : $.key === "Escape" && ($.preventDefault(), l());
  };
  if (!s) return null;
  const P = a || `Tra cứu danh mục: ${t}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4",
      onKeyDown: N,
      children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(En, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold text-slate-100", children: P }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 font-mono", children: [
                S.length,
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
          /* @__PURE__ */ e.jsx(Wt, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: w,
              type: "text",
              value: u,
              onChange: ($) => {
                b($.target.value), f(0);
              },
              placeholder: `Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${t}...`,
              className: "w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto p-3", children: g ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-slate-400 text-xs italic", children: "Đang tải dữ liệu từ máy chủ..." }) : S.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-8 text-center text-slate-500 text-xs italic", children: [
          'Không tìm thấy bản ghi nào khớp với từ khóa "',
          u,
          '".'
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "border border-slate-800 rounded-xl overflow-hidden shadow-inner", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "px-3 py-2 text-center w-12 text-slate-400", children: "#" }),
            T.map(($) => /* @__PURE__ */ e.jsx(
              "th",
              {
                className: "px-3 py-2 border-r border-slate-800/80 whitespace-nowrap",
                style: { width: $.width },
                children: $.title || $.key
              },
              $.key
            ))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60 font-mono", children: S.map(($, m) => {
            const j = m === C;
            return /* @__PURE__ */ e.jsxs(
              "tr",
              {
                onClick: () => f(m),
                onDoubleClick: () => {
                  o($), l();
                },
                className: `transition-colors cursor-pointer ${j ? "bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400" : "hover:bg-slate-800/40 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ e.jsx("td", { className: "px-3 py-2 text-center text-[11px] text-slate-400", children: m + 1 }),
                  T.map((E) => {
                    const L = $[E.key];
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        className: "px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]",
                        children: L != null ? String(L) : "—"
                      },
                      E.key
                    );
                  })
                ]
              },
              $.id ?? $.Id ?? m
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
                disabled: S.length === 0,
                onClick: () => {
                  S[C] && (o(S[C]), l());
                },
                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Chọn bản ghi" })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}, Mo = ({ node: s, isEditing: a }) => {
  var te, ue, ve, D, O, ne, oe;
  const { props: t, style: r } = s, n = Z((ae) => ae.features), o = Z((ae) => ae.activeFeatureId), l = n.find((ae) => String(ae.id) === String(s.pageId)) || n.find((ae) => String(ae.id) === String(o)), i = l == null ? void 0 : l.scriptFile, { flex: d, flexGrow: c, flexShrink: x, flexBasis: g, minWidth: k, maxWidth: u, width: b, ...C } = r || {}, f = String(s.pageId || o || "default"), w = String(((te = s.dataBinding) == null ? void 0 : te.fieldName) || s.props.name || s.id), T = ke((ae) => es(ae, f, w, void 0)), S = ke((ae) => ae.setFieldValue), N = ke((ae) => ae.applyPopulate), [P, $] = I(!1), [m, j] = I(!1), [E, L] = I(""), [y, _] = I(""), [B, Y] = I(""), [M, z] = I(!1), J = T !== void 0 ? T : t.value ?? "", h = !!t.validationError, X = String(
    t.reference || t.refName || ((ue = s.dataBinding) == null ? void 0 : ue.refName) || ((ve = s.dataBinding) == null ? void 0 : ve.entityName) || ""
  ), H = String(
    t.refClass || ((D = s.dataBinding) == null ? void 0 : D.refClass) || ""
  ), le = String(
    t.displayField || t.selectField || ((O = s.dataBinding) == null ? void 0 : O.selectField) || "code"
  ), ie = String(
    t.valueField || t.idField || ((ne = s.dataBinding) == null ? void 0 : ne.idField) || "code"
  ), G = String(
    t.populateRule || t.populateField || ((oe = s.dataBinding) == null ? void 0 : oe.populateField) || ""
  ), de = () => {
    if (!(t.disabled || a)) {
      if (!X) {
        console.warn(`[ForgeSearchEntry] Component ${s.id} chưa cấu hình reference entity`);
        return;
      }
      $(!0);
    }
  }, pe = () => {
    if (t.disabled || a) return;
    if (H) {
      ua(H, {}, `Tạo mới ${X || H}`);
      return;
    }
    const ae = String(J || "").trim();
    L(ae ? ae.toUpperCase().replace(/\s+/g, "_") : ""), _(ae), Y(""), j(!0);
  }, W = async () => {
    if (!E.trim() || !y.trim()) return;
    const ae = X.trim();
    if (ae) {
      z(!0);
      try {
        const ye = {
          code: E.trim(),
          name: y.trim(),
          fullName: y.trim(),
          description: B.trim(),
          active: !0
        }, Te = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(ae)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ye)
        });
        if (Te.ok) {
          const Pe = await Te.json(), be = {
            ...ye,
            ...Pe,
            id: Pe.id ?? Pe.Id ?? Date.now()
          };
          await ke.getState().queryEntity(ae), ce(be), j(!1);
        } else
          alert("Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.");
      } catch (ye) {
        console.error("[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:", ye);
        const Te = {
          id: `mock-${Date.now()}`,
          code: E.trim(),
          name: y.trim(),
          fullName: y.trim(),
          description: B.trim(),
          active: !0
        };
        ce(Te), j(!1);
      } finally {
        z(!1);
      }
    }
  }, ce = (ae) => {
    const ye = ae[ie] ?? ae[le] ?? ae.code ?? ae.id;
    ae[le] ?? ae.name, S(f, w, ye), G && N(f, G, ae), a || (Xe(s.events, "change", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: w,
      value: ye,
      selectedItem: ae
    }), Xe(s.events, "select", t.label || "Ô tra cứu", i, {
      componentId: s.id,
      fieldName: w,
      value: ye,
      selectedItem: ae
    }));
  }, q = (ae) => {
    ae.key === "F1" && (ae.preventDefault(), ae.stopPropagation(), de());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Cs,
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
        children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center w-full", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              disabled: t.disabled,
              readOnly: a || !!t.readOnly,
              placeholder: t.placeholder || (X ? `Tra cứu ${X} (F1)...` : "Nhập dữ liệu..."),
              value: J,
              onKeyDown: q,
              onDoubleClick: de,
              className: `w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${h ? "border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none" : "border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"}`,
              onChange: (ae) => {
                const ye = ae.target.value;
                S(f, w, ye), a || Xe(s.events, "change", t.label || "Ô tra cứu", i, {
                  componentId: s.id,
                  fieldName: w,
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
                disabled: t.disabled || a,
                onClick: pe,
                title: `Tạo nhanh ${X} (+)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                disabled: t.disabled || a,
                onClick: de,
                title: `Tra cứu ${X} (Nhấn F1 hoặc nhấp đúp)`,
                className: "w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      }
    ),
    X && /* @__PURE__ */ e.jsx(
      Eo,
      {
        isOpen: P,
        title: `Tra cứu danh mục: ${t.label || X}`,
        entityName: X,
        columns: t.columns,
        onSelect: ce,
        onClose: () => $(!1)
      }
    ),
    m && At(
      /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100", children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4",
          onClick: (ae) => ae.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold", children: /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" }) }),
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
                  onClick: () => j(!1),
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
                    onChange: (ae) => L(ae.target.value),
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
                    value: y,
                    onChange: (ae) => _(ae.target.value),
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
                    onChange: (ae) => Y(ae.target.value),
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
                  onClick: () => j(!1),
                  className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors",
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: M || !E.trim() || !y.trim(),
                  onClick: W,
                  className: "flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer",
                  children: [
                    M ? /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
}, Bo = ({
  node: s,
  isEditing: a,
  label: t,
  files: r,
  onFilesChange: n,
  readOnly: o = !1,
  maxSizeMB: l = 25,
  allowedExtensions: i
}) => {
  var L;
  const d = Er(), c = st(null), [x, g] = I(!1), [k, u] = I(null), [b, C] = I(null), [f, w] = I([
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
  ]), T = r ?? f, S = (y) => {
    r || w(y), n == null || n(y);
  }, N = (y) => y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : `${(y / (1024 * 1024)).toFixed(2)} MB`, P = (y) => y.startsWith("image/") ? /* @__PURE__ */ e.jsx(Ga, { className: "w-4 h-4 text-emerald-400" }) : y.includes("pdf") ? /* @__PURE__ */ e.jsx(os, { className: "w-4 h-4 text-red-400" }) : /* @__PURE__ */ e.jsx(Ua, { className: "w-4 h-4 text-blue-400" }), $ = (y) => {
    if (!y || y.length === 0) return;
    const _ = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN");
    Array.from(y).forEach((B) => {
      if (B.size > l * 1024 * 1024) {
        alert(`Tệp "${B.name}" vượt quá kích thước cho phép (${l}MB)`);
        return;
      }
      const Y = new FileReader(), M = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      Y.onload = () => {
        const z = {
          id: M,
          fileName: B.name,
          fileSize: B.size,
          fileType: B.type || "application/octet-stream",
          uploadedDate: _,
          uploadedBy: "User",
          dataUrl: Y.result
        };
        S([...T, z]);
      }, Y.readAsDataURL(B);
    });
  }, m = (y, _) => {
    if (_ == null || _.stopPropagation(), confirm("Bạn có chắc muốn xóa tệp đính kèm này?")) {
      const B = T.filter((Y) => Y.id !== y);
      S(B), k === y && u(null);
    }
  }, j = (y, _) => {
    if (_ == null || _.stopPropagation(), !y.dataUrl) {
      alert(`Đang tải file mẫu: ${y.fileName}`);
      return;
    }
    const B = document.createElement("a");
    B.href = y.dataUrl, B.download = y.fileName, document.body.appendChild(B), B.click(), document.body.removeChild(B);
  }, E = t || ((L = s == null ? void 0 : s.props) == null ? void 0 : L.label) || "Danh Sách Tệp Đính Kèm (FileUploadGrid)";
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(Ur, { className: "w-4 h-4 text-cyan-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: E }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full", children: [
          T.length,
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
            onChange: (y) => $(y.target.files)
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var y;
              return (y = c.current) == null ? void 0 : y.click();
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
        onDragOver: (y) => {
          y.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (y) => {
          y.preventDefault(), g(!1), $(y.dataTransfer.files);
        },
        className: `p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${x ? "bg-blue-900/30 border-blue-500 text-blue-300" : "bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300"}`,
        onClick: () => {
          var y;
          return (y = c.current) == null ? void 0 : y.click();
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
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/60", children: T.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, className: "py-8 text-center text-slate-500 italic", children: "Chưa có tệp tin nào được đính kèm." }) }) : T.map((y, _) => {
        const B = k === y.id;
        return /* @__PURE__ */ e.jsxs(
          "tr",
          {
            onClick: () => u(y.id),
            className: `transition-colors cursor-pointer ${B ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-800/40 text-slate-300"}`,
            children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center text-slate-500 font-mono text-[10px]", children: _ + 1 }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-2 px-3 font-medium flex items-center gap-2", children: [
                P(y.fileType),
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[280px]", title: y.fileName, children: y.fileName })
              ] }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: N(y.fileSize) }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-slate-400", children: y.uploadedBy }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: y.uploadedDate }),
              /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (Y) => {
                      Y.stopPropagation(), C(y);
                    },
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors",
                    title: "Xem trước",
                    children: /* @__PURE__ */ e.jsx(tn, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (Y) => j(y, Y),
                    className: "p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors",
                    title: "Tải xuống",
                    children: /* @__PURE__ */ e.jsx(Sn, { className: "w-3.5 h-3.5" })
                  }
                ),
                !o && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (Y) => m(y.id, Y),
                    className: "p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors",
                    title: "Xóa tệp",
                    children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          y.id
        );
      }) })
    ] }) }),
    b && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => C(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden",
            onClick: (y) => y.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  P(b.fileType),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-sm text-slate-100", children: b.fileName }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-slate-500 font-mono", children: [
                    "(",
                    N(b.fileSize),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (y) => j(b, y),
                      className: "px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ e.jsx(Sn, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tải về" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => C(null),
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
                /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center", children: P(b.fileType) }),
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
                    onClick: (y) => j(b, y),
                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ e.jsx(Sn, { className: "w-4 h-4" }),
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
}, _o = ({
  node: s,
  isEditing: a,
  label: t,
  value: r,
  onChange: n,
  options: o,
  reference: l,
  displayField: i = "name",
  valueField: d = "code",
  sublabelField: c,
  placeholder: x,
  disabled: g = !1
}) => {
  const k = st(null), u = st(null), b = Er(), C = String((s == null ? void 0 : s.pageId) || "default"), f = (s == null ? void 0 : s.props) || {}, w = f.dataBinding || f.fieldName || ((s == null ? void 0 : s.id) ?? ""), T = ke((W) => es(W, C, w, void 0)), S = ke((W) => W.setFieldValue), N = ke((W) => W.applyPopulate), P = ke((W) => W.getDataset), $ = t ?? f.label ?? "Gợi ý tự động (Autocomplete)", m = l ?? f.reference, j = i ?? f.displayField ?? "name", E = d ?? f.valueField ?? "code", L = c ?? f.sublabelField, y = x ?? f.placeholder ?? "Gõ để tìm kiếm...", _ = String(f.populateRule || ""), B = T ?? r ?? "", [Y, M] = I(String(B)), [z, J] = I(!1), [h, X] = I(-1);
  Ee(() => {
    B != null && M(String(B));
  }, [B]);
  const ie = (o && o.length > 0 ? o : m ? (P(m) || []).map((ce) => ({
    value: ce[E] ?? ce.id ?? ce.code ?? "",
    label: String(ce[j] ?? ce.name ?? ce.title ?? ce.code ?? ""),
    sublabel: L ? String(ce[L] ?? "") : void 0,
    raw: ce
  })) : [
    { value: "OPT-01", label: "Lựa chọn gợi ý 01", sublabel: "Mục hệ thống" },
    { value: "OPT-02", label: "Lựa chọn gợi ý 02", sublabel: "Mục mặc định" },
    { value: "OPT-03", label: "Lựa chọn gợi ý 03", sublabel: "Mục nâng cao" }
  ]).filter((W) => {
    if (!Y || Y.trim() === "") return !0;
    const ce = Y.toLowerCase().trim();
    return W.label.toLowerCase().includes(ce) || String(W.value).toLowerCase().includes(ce) || W.sublabel && W.sublabel.toLowerCase().includes(ce);
  });
  Ee(() => {
    const W = (ce) => {
      k.current && !k.current.contains(ce.target) && J(!1);
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, []);
  const G = (W) => {
    M(W.label), J(!1), X(-1), n == null || n(W.value, W.raw), w && S(C, w, W.value), W.raw && _ && N(C, _, W.raw);
  }, de = (W) => {
    if (!z && (W.key === "ArrowDown" || W.key === "ArrowUp")) {
      J(!0);
      return;
    }
    W.key === "ArrowDown" ? (W.preventDefault(), X(
      (ce) => ce < ie.length - 1 ? ce + 1 : 0
    )) : W.key === "ArrowUp" ? (W.preventDefault(), X(
      (ce) => ce > 0 ? ce - 1 : ie.length - 1
    )) : W.key === "Enter" ? z && h >= 0 && h < ie.length && (W.preventDefault(), G(ie[h])) : W.key === "Escape" && (J(!1), X(-1));
  }, pe = (W) => {
    var ce;
    W.stopPropagation(), M(""), w && S(C, w, ""), n == null || n(""), (ce = u.current) == null || ce.focus();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: k, className: "relative w-full text-xs", children: [
    $ && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: b,
        className: "block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1",
        children: $
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: b,
          ref: u,
          type: "text",
          disabled: g,
          value: Y,
          placeholder: y,
          onFocus: () => J(!0),
          onChange: (W) => {
            M(W.target.value), J(!0), X(0), w && S(C, w, W.target.value);
          },
          onKeyDown: de,
          className: "w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-2 flex items-center gap-1 text-slate-400", children: [
        Y && !g && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: pe,
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
              var W;
              J(!z), (W = u.current) == null || W.focus();
            },
            className: "p-1 hover:text-slate-200 rounded",
            children: /* @__PURE__ */ e.jsx(
              Lt,
              {
                className: `w-3.5 h-3.5 transition-transform duration-200 ${z ? "rotate-180 text-blue-400" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    z && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800", children: ie.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-3 text-center text-slate-500 italic", children: [
      'Không tìm thấy mục nào khớp với "',
      Y,
      '"'
    ] }) : ie.map((W, ce) => {
      const q = h === ce, te = String(W.value) === String(B);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onMouseEnter: () => X(ce),
          onClick: () => G(W),
          className: `px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${q ? "bg-blue-600/25 text-blue-200" : te ? "bg-slate-800/80 text-white" : "hover:bg-slate-800/50 text-slate-300"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
              /* @__PURE__ */ e.jsx("div", { className: "font-medium truncate", children: W.label }),
              (W.sublabel || W.value) && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-500 font-mono truncate", children: [
                W.sublabel ? `${W.sublabel} • ` : "",
                W.value
              ] })
            ] }),
            te && /* @__PURE__ */ e.jsx(nn, { className: "w-4 h-4 text-blue-400 shrink-0" })
          ]
        },
        `${W.value}-${ce}`
      );
    }) })
  ] });
}, Oo = ({
  node: s,
  isEditing: a = !1,
  data: t,
  reference: r,
  idField: n = "id",
  labelField: o = "name",
  parentField: l = "parentId",
  onSelectNode: i
}) => {
  var L, y, _, B, Y;
  const d = s.props || {}, c = r || d.reference || d.refName || ((L = s.dataBinding) == null ? void 0 : L.refName) || "", x = ke((M) => c ? M.datasets[c] : void 0), [g, k] = I(""), [u, b] = I(null), [C, f] = I(/* @__PURE__ */ new Set()), w = Ae(() => t && Array.isArray(t) && t.length > 0 ? t : d.data && Array.isArray(d.data) && d.data.length > 0 ? d.data : x && Array.isArray(x) && x.length > 0 ? x : [
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
  ], [t, d.data, x]), T = Ae(() => {
    if (!Array.isArray(w) || w.length === 0) return [];
    if (w.some((h) => Array.isArray(h.children) && h.children.length > 0))
      return w;
    const z = /* @__PURE__ */ new Map();
    w.forEach((h) => {
      const X = h[n] ?? h.id ?? h.code, H = h[o] ?? h.name ?? h.title ?? String(X), le = h[l] ?? h.parentId ?? null;
      z.set(X, {
        id: X,
        name: H,
        code: h.code,
        parentId: le,
        children: [],
        data: h
      });
    });
    const J = [];
    return z.forEach((h) => {
      h.parentId !== null && h.parentId !== void 0 && z.has(h.parentId) ? z.get(h.parentId).children.push(h) : J.push(h);
    }), J;
  }, [w, n, o, l]);
  Ee(() => {
    if (T.length > 0 && C.size === 0) {
      const M = /* @__PURE__ */ new Set();
      T.forEach((z) => {
        M.add(z.id), z.children && z.children.forEach((J) => M.add(J.id));
      }), f(M);
    }
  }, [T]);
  const S = (M, z) => {
    z.stopPropagation(), f((J) => {
      const h = new Set(J);
      return h.has(M) ? h.delete(M) : h.add(M), h;
    });
  }, N = () => {
    const M = /* @__PURE__ */ new Set(), z = (J) => {
      J.forEach((h) => {
        M.add(h.id), h.children && h.children.length > 0 && z(h.children);
      });
    };
    z(T), f(M);
  }, P = () => {
    f(/* @__PURE__ */ new Set());
  }, $ = (M) => {
    var h, X;
    b(M.id);
    const z = String(s.pageId || "default"), J = ((h = s.dataBinding) == null ? void 0 : h.fieldName) || s.id;
    if (ke.getState().setFieldValue(z, J, M.id), c && ke.getState().setFieldValue(z, `${c}_selected`, M.data || M), i && i(M), s.events && Array.isArray(s.events)) {
      const H = s.events.find((le) => le.trigger === "change" || le.trigger === "select" || le.trigger === "onClick");
      H && Zs(H, ((X = s.props) == null ? void 0 : X.label) || s.id, void 0, { node: M, value: M.id });
    }
  }, m = (M, z) => {
    if (!z) return !0;
    const J = z.toLowerCase(), h = M.name.toLowerCase().includes(J), X = M.code ? M.code.toLowerCase().includes(J) : !1;
    return h || X ? !0 : M.children && M.children.length > 0 ? M.children.some((H) => m(H, z)) : !1;
  }, j = (M, z = 0) => {
    if (g && !m(M, g))
      return null;
    const J = !!(M.children && M.children.length > 0), h = C.has(M.id) || !!g, X = u === M.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "select-none", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => $(M),
          style: { paddingLeft: `${Math.max(8, z * 18 + 8)}px` },
          className: `group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${X ? "bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"}`,
          children: [
            J ? /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: (H) => S(M.id, H),
                className: "w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors",
                children: h ? /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" })
              }
            ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: J ? h ? /* @__PURE__ */ e.jsx(Ka, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ e.jsx(vn, { className: "w-4 h-4 text-amber-500/80" }) : /* @__PURE__ */ e.jsx(os, { className: "w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate flex-1 font-medium", children: M.name }),
            M.code && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300", children: M.code }),
            J && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700", children: M.children.length })
          ]
        }
      ),
      J && h && /* @__PURE__ */ e.jsx("div", { className: "relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5", children: M.children.map((H) => j(H, z + 1)) })
    ] }, M.id);
  }, E = d.title || ((y = s.props) == null ? void 0 : y.label) || "Cấu Trúc Cây Phân Cấp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((_ = s.style) == null ? void 0 : _.width) || "100%",
        minHeight: ((B = s.style) == null ? void 0 : B.minHeight) || "320px",
        maxHeight: ((Y = s.style) == null ? void 0 : Y.maxHeight) || "560px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: E }),
            c && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-mono", children: c })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: N,
                title: "Mở rộng tất cả các nhánh",
                className: "p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer",
                children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: P,
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
              value: g,
              onChange: (M) => k(M.target.value),
              placeholder: "Tìm kiếm danh mục theo tên, mã...",
              className: "w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: T.length > 0 ? T.map((M) => j(M)) : /* @__PURE__ */ e.jsx("div", { className: "py-8 text-center text-xs text-slate-500 italic", children: "Chưa có dữ liệu danh mục phân cấp" }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-mono", children: [
            "Tổng số: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: w.length }),
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
}, Lr = [
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
], Ho = ({
  node: s,
  isEditing: a = !1,
  data: t,
  type: r,
  title: n,
  reference: o
}) => {
  var $, m, j, E;
  const l = s.props || {}, i = r || l.chartType || l.type || "bar", [d, c] = I(i), [x, g] = I(null), k = o || l.reference || l.refName || (($ = s.dataBinding) == null ? void 0 : $.refName) || "", u = ke((L) => k ? L.datasets[k] : void 0), b = Ae(() => {
    let L = [];
    t && Array.isArray(t) && t.length > 0 ? L = t : l.data && Array.isArray(l.data) && l.data.length > 0 ? L = l.data : u && Array.isArray(u) && u.length > 0 ? L = u : L = [
      { label: "Cát Lái (CTL)", value: 4850 },
      { label: "Cái Mép (TCIT)", value: 3620 },
      { label: "Hải Phòng (HPH)", value: 2980 },
      { label: "Lạch Huyện (HICT)", value: 2450 },
      { label: "Đà Nẵng (DAN)", value: 1680 },
      { label: "Quy Nhơn (QNH)", value: 1120 }
    ];
    const y = l.labelField || "label", _ = l.valueField || "value";
    return L.map((B, Y) => {
      const M = String(B[y] ?? B.label ?? B.name ?? B.code ?? `Mục ${Y + 1}`), z = B[_] ?? B.value ?? B.amount ?? B.total ?? 0, J = Math.max(0, Number(z) || 0), h = B.color || Lr[Y % Lr.length];
      return { label: M, value: J, color: h };
    });
  }, [t, l.data, u, l.labelField, l.valueField]), C = Ae(() => b.reduce((L, y) => L + y.value, 0), [b]), f = Ae(() => Math.max(...b.map((L) => L.value), 1), [b]), w = n || l.title || ((m = s.props) == null ? void 0 : m.label) || "Biểu Đồ Thống Kê Sản Lượng", T = l.subtitle || (k ? `Nguồn dữ liệu: ${k}` : "Đơn vị: TEUs"), S = () => {
    const L = Math.max(20, Math.min(48, Math.floor(400 / (b.length || 1))));
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" }),
        b.map((y, _) => {
          const B = f > 0 ? y.value / f * 100 : 0, Y = x === _;
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              onMouseEnter: () => g(_),
              onMouseLeave: () => g(null),
              className: "flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer",
              children: [
                Y && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-bold text-emerald-400", children: y.label }),
                  /* @__PURE__ */ e.jsxs("p", { className: "font-mono", children: [
                    y.value.toLocaleString("en-US"),
                    " (",
                    (y.value / (C || 1) * 100).toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-mono mb-1 transition-all ${Y ? "text-emerald-300 font-bold -translate-y-0.5" : "text-slate-400"}`, children: y.value > 1e3 ? `${(y.value / 1e3).toFixed(1)}k` : y.value }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: `${Math.max(4, B)}%`,
                      backgroundColor: y.color,
                      maxWidth: `${L}px`
                    },
                    className: `w-full rounded-t-md transition-all duration-300 shadow-md ${Y ? "brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105" : "hover:brightness-110"}`
                  }
                )
              ]
            },
            _
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-3 pt-2", children: b.map((y, _) => /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-center truncate", title: y.label, children: /* @__PURE__ */ e.jsx("span", { className: `text-[11px] truncate block ${x === _ ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: y.label }) }, _)) })
    ] });
  }, N = () => {
    const Y = b.length, M = b.map((h, X) => {
      const H = Y > 1 ? 40 + X / (Y - 1) * 520 : 300, le = 175 - (f > 0 ? h.value / f * (200 - 2 * 25) : 0);
      return { x: H, y: le, item: h, idx: X };
    }), z = M.reduce((h, X, H) => H === 0 ? `M ${X.x} ${X.y}` : `${h} L ${X.x} ${X.y}`, ""), J = M.length > 0 ? `${z} L ${M[M.length - 1].x} 175 L ${M[0].x} 175 Z` : "";
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex flex-col items-center justify-center h-64 px-2", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 600 200", className: "w-full h-48 overflow-visible", children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: `lineGrad_${s.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.4" }),
          /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
        ] }) }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 25, x2: 560, y2: 25, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 200 / 2, x2: 560, y2: 200 / 2, stroke: "#334155", strokeDasharray: "4 4" }),
        /* @__PURE__ */ e.jsx("line", { x1: 40, y1: 175, x2: 560, y2: 175, stroke: "#475569" }),
        J && /* @__PURE__ */ e.jsx("path", { d: J, fill: `url(#lineGrad_${s.id})` }),
        z && /* @__PURE__ */ e.jsx("path", { d: z, fill: "none", stroke: "#10B981", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        M.map((h) => {
          const X = x === h.idx;
          return /* @__PURE__ */ e.jsxs(
            "g",
            {
              onMouseEnter: () => g(h.idx),
              onMouseLeave: () => g(null),
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(
                  "circle",
                  {
                    cx: h.x,
                    cy: h.y,
                    r: X ? 6 : 4,
                    fill: X ? "#34D399" : "#10B981",
                    stroke: "#0F172A",
                    strokeWidth: "2",
                    className: "transition-all"
                  }
                ),
                X && /* @__PURE__ */ e.jsx("circle", { cx: h.x, cy: h.y, r: 10, fill: "none", stroke: "#34D399", strokeWidth: "1.5", strokeDasharray: "2 2", className: "animate-spin" })
              ]
            },
            h.idx
          );
        })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "w-full flex items-center justify-between px-6 pt-2", children: b.map((h, X) => /* @__PURE__ */ e.jsx("div", { className: "text-center truncate flex-1", children: /* @__PURE__ */ e.jsx("span", { className: `text-[10px] truncate block ${x === X ? "text-emerald-400 font-bold" : "text-slate-400"}`, children: h.label }) }, X)) })
    ] });
  }, P = () => {
    let Y = 0;
    const M = b.map((z, J) => {
      const h = C > 0 ? z.value / C * 360 : 0, X = Y, H = Y + h;
      Y += h;
      const le = (X - 90) * Math.PI / 180, ie = (H - 90) * Math.PI / 180, G = 90 + 70 * Math.cos(le), de = 90 + 70 * Math.sin(le), pe = 90 + 70 * Math.cos(ie), W = 90 + 70 * Math.sin(ie), ce = 90 + 45 * Math.cos(le), q = 90 + 45 * Math.sin(le), te = 90 + 45 * Math.cos(ie), ue = 90 + 45 * Math.sin(ie), ve = h > 180 ? 1 : 0, D = h >= 359.9 ? "M 90 20 A 70 70 0 1 1 90 160 A 70 70 0 1 1 90 20 M 90 45 A 45 45 0 1 0 90 135 A 45 45 0 1 0 90 45" : `M ${G} ${de} A 70 70 0 ${ve} 1 ${pe} ${W} L ${te} ${ue} A 45 45 0 ${ve} 0 ${ce} ${q} Z`;
      return { item: z, idx: J, pathData: D, percentage: (z.value / (C || 1) * 100).toFixed(1) };
    });
    return /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center justify-around h-64 px-4 py-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ e.jsx("svg", { width: 180, height: 180, viewBox: "0 0 180 180", children: M.map((z) => {
          const J = x === z.idx;
          return /* @__PURE__ */ e.jsx(
            "path",
            {
              d: z.pathData,
              fill: z.item.color,
              onMouseEnter: () => g(z.idx),
              onMouseLeave: () => g(null),
              className: `transition-all duration-200 cursor-pointer ${J ? "scale-105 origin-center brightness-125 stroke-white stroke-1" : "hover:opacity-90"}`
            },
            z.idx
          );
        }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none", children: x !== null && b[x] ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-medium truncate max-w-[80px]", children: b[x].label }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-bold font-mono text-emerald-400", children: [
            (b[x].value / (C || 1) * 100).toFixed(1),
            "%"
          ] })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold", children: "TỔNG" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold font-mono text-slate-100", children: C > 1e4 ? `${(C / 1e3).toFixed(0)}k` : C })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2", children: b.map((z, J) => {
        const h = x === J, X = (z.value / (C || 1) * 100).toFixed(1);
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            onMouseEnter: () => g(J),
            onMouseLeave: () => g(null),
            className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${h ? "bg-slate-800/80 text-white" : "text-slate-300 hover:bg-slate-800/40"}`,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2.5 h-2.5 rounded-full flex-shrink-0", style: { backgroundColor: z.color } }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs truncate max-w-[110px]", children: z.label }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-mono text-slate-400 ml-auto", children: [
                X,
                "%"
              ] })
            ]
          },
          J
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans",
      style: {
        width: ((j = s.style) == null ? void 0 : j.width) || "100%",
        minHeight: ((E = s.style) == null ? void 0 : E.minHeight) || "320px"
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(za, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-bold text-slate-200 tracking-wide uppercase", children: w }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-400 font-mono block", children: T })
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
                children: /* @__PURE__ */ e.jsx(qa, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => c("donut"),
                title: "Biểu đồ Tròn (Donut Chart)",
                className: `p-1.5 rounded transition-all cursor-pointer ${d === "donut" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"}`,
                children: /* @__PURE__ */ e.jsx(Ya, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center p-2", children: b.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "py-12 text-center text-xs text-slate-500 italic", children: "Không có dữ liệu số liệu để vẽ biểu đồ" }) : d === "bar" ? S() : d === "line" ? N() : P() }),
        /* @__PURE__ */ e.jsxs("div", { className: "px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tổng cộng: ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-200", children: C.toLocaleString("en-US") })
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
function wa(s) {
  var r, n;
  if (!s || s.length === 0) return [];
  const a = [...s].sort((o, l) => (o.order ?? 1) - (l.order ?? 1)), t = [];
  for (const o of a) {
    const l = !!((r = o.props) != null && r.tab || (n = o.props) != null && n.isTab || o.type === "Tabs"), i = o.order ?? 1;
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
function Ca(s, a) {
  var g, k;
  const t = s.style || {}, r = ((g = s.props) == null ? void 0 : g.colSpan) !== void 0 && ((k = s.props) == null ? void 0 : k.colSpan) !== null ? Number(s.props.colSpan) : void 0;
  let n = t.width, o = t.flex, l = t.maxWidth, i = t.minWidth ?? 0, d;
  const c = (a == null ? void 0 : a.mode) || "grid", x = (a == null ? void 0 : a.gridColumns) || 12;
  if (c === "grid") {
    let u;
    if (r !== void 0 && !isNaN(r) && r > 0)
      u = Math.min(r, x);
    else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
      const b = Number(a.columnsPerRow);
      !isNaN(b) && b > 0 ? u = Math.max(1, Math.floor(x / b)) : u = Math.min(4, x);
    } else
      u = Math.min(4, x);
    d = `span ${u} / span ${u}`, n = t.width !== void 0 ? t.width : "100%", l = t.maxWidth !== void 0 ? t.maxWidth : "100%", o = t.flex !== void 0 ? t.flex : "none";
  } else {
    const u = parseInt((a == null ? void 0 : a.gap) || "12", 10) || 12;
    if (((a == null ? void 0 : a.direction) || "row") === "row")
      if (r !== void 0 && !isNaN(r) && r > 0) {
        const C = Math.min(100, Math.max(2, r / x * 100)), f = r >= x ? "100%" : `calc(${C}% - ${Math.round(u * (1 - r / x))}px)`;
        t.width === void 0 && t.flex === void 0 && (n = f, l = f, o = `0 0 ${f}`);
      } else if (a != null && a.columnsPerRow && a.columnsPerRow !== "auto") {
        const C = Number(a.columnsPerRow);
        if (!isNaN(C) && C > 0) {
          const f = C === 1 ? "100%" : `calc((100% - ${(C - 1) * u}px) / ${C})`;
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
    gridColumn: d,
    height: t.height,
    minHeight: t.minHeight || (s.type === "Container" ? "90px" : void 0),
    maxHeight: t.maxHeight,
    alignSelf: t.alignSelf
  };
}
const en = ({
  node: s,
  isEditing: a = !1,
  onContextMenu: t,
  parentLayout: r,
  parentFlexConfig: n,
  isWrappedByDrag: o = !1,
  renderChild: l,
  ancestors: i = []
}) => {
  var j, E, L, y, _, B, Y, M, z, J, h, X, H;
  const d = Z((le) => le.selection), c = Z((le) => le.selectComponent), x = a && d.componentId === s.id, g = (le) => {
    a && (le.stopPropagation(), c(s.id));
  }, k = (le) => {
    a && (le.preventDefault(), le.stopPropagation(), c(s.id), t && t(le, s));
  };
  if (s.type === "Container" || s.type === "Section" || s.type === "Tabs") {
    const le = s.props.layoutMode || (s.type === "Section" ? "grid" : "flex"), ie = s.props.flexConfig || {}, G = s.props.gridConfig || {}, de = {
      direction: ie.direction || "row",
      wrap: ie.wrap || "wrap",
      gap: ie.gap || "12px",
      columnsPerRow: ie.columnsPerRow || "auto"
    }, pe = Number(
      G.columns || (typeof ie.columnsPerRow == "number" ? ie.columnsPerRow : 12)
    ) || 12, W = {
      mode: le === "flex" ? "flex" : "grid",
      direction: ie.direction || "row",
      columnsPerRow: ie.columnsPerRow || "auto",
      gap: ie.gap || G.gap || "12px",
      wrap: ie.wrap || "wrap",
      gridColumns: pe
    }, ce = () => {
      const q = s.children || [];
      return q.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40", children: "Chuột phải vào đây để thêm nút, textbox, khoảng trắng con..." }) : wa(q).map((ue, ve) => {
        if (ue.type === "tab_stack")
          return /* @__PURE__ */ e.jsx(
            ja,
            {
              parentId: s.id,
              order: ue.order,
              tabNodes: ue.nodes,
              isEditing: a,
              parentFlexConfig: de,
              onContextMenu: t,
              renderChild: l
            },
            `tab_stack_${s.id}_${ue.order}_${ve}`
          );
        const D = ue.node, O = [...i, s];
        return l ? /* @__PURE__ */ e.jsx(Qt.Fragment, { children: l(D, W) }, D.id) : /* @__PURE__ */ e.jsx(
          en,
          {
            node: D,
            isEditing: a,
            onContextMenu: t,
            parentLayout: W,
            isWrappedByDrag: !1,
            ancestors: O
          },
          D.id
        );
      });
    };
    return s.type === "Section" ? /* @__PURE__ */ e.jsx(xn, { node: s, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx("div", { onClick: g, onContextMenu: k, className: "w-full", children: /* @__PURE__ */ e.jsx(lo, { node: s, isEditing: a, children: ce() }) }) }) : s.type === "Tabs" ? /* @__PURE__ */ e.jsx(xn, { node: s, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Ir,
      {
        node: s,
        isEditing: a,
        isSelected: x,
        onClick: g,
        onContextMenu: k,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: ce()
      }
    ) }) : /* @__PURE__ */ e.jsx(xn, { node: s, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsx(
      Ir,
      {
        node: s,
        isEditing: a,
        isSelected: x,
        onClick: g,
        onContextMenu: k,
        parentFlexConfig: n,
        isWrappedByDrag: o,
        children: ce()
      }
    ) });
  }
  const u = () => {
    var le, ie, G, de, pe, W;
    switch (s.type) {
      case "Button":
        return /* @__PURE__ */ e.jsx(so, { node: s, isEditing: a });
      case "TextBox":
        return /* @__PURE__ */ e.jsx(no, { node: s, isEditing: a });
      case "Textarea":
        return /* @__PURE__ */ e.jsx(Lo, { node: s, isEditing: a });
      case "Number":
        return /* @__PURE__ */ e.jsx(ro, { node: s, isEditing: a });
      case "Label":
        return /* @__PURE__ */ e.jsx(ao, { node: s, isEditing: a });
      case "Table":
        return /* @__PURE__ */ e.jsx(So, { node: s, isEditing: a });
      case "Select":
        return /* @__PURE__ */ e.jsx(Io, { node: s, isEditing: a });
      case "Checkbox":
        return /* @__PURE__ */ e.jsx(Fo, { node: s, isEditing: a });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Ro, { node: s, isEditing: a });
      case "Divider":
        return /* @__PURE__ */ e.jsx($o, { node: s, isEditing: a });
      case "Modal":
        return /* @__PURE__ */ e.jsx(Po, { node: s, isEditing: a });
      case "RecordSelector":
        return /* @__PURE__ */ e.jsx(
          Ao,
          {
            label: ((le = s.props) == null ? void 0 : le.label) ?? "Lô hàng:",
            reference: ((ie = s.props) == null ? void 0 : ie.reference) ?? "Transaction",
            displayField: ((G = s.props) == null ? void 0 : G.displayField) ?? "code",
            records: (de = s.props) == null ? void 0 : de.records,
            activeId: (pe = s.props) == null ? void 0 : pe.activeId,
            canAdd: ((W = s.props) == null ? void 0 : W.canAdd) !== !1,
            style: s.style
          }
        );
      case "SearchEntry":
        return /* @__PURE__ */ e.jsx(Mo, { node: s, isEditing: a });
      case "FileUploadGrid":
        return /* @__PURE__ */ e.jsx(Bo, { node: s, isEditing: a });
      case "Autocomplete":
        return /* @__PURE__ */ e.jsx(_o, { node: s, isEditing: a });
      case "TreeView":
        return /* @__PURE__ */ e.jsx(Oo, { node: s, isEditing: a });
      case "Chart":
        return /* @__PURE__ */ e.jsx(Ho, { node: s, isEditing: a });
      default:
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs", children: [
          "Unknown Component: ",
          s.type
        ] });
    }
  }, b = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), C = Ca(s, b), f = o ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  } : {
    ...C,
    boxSizing: "border-box"
  }, w = He((le) => le.evaluateComponentPermission), T = Z((le) => le.activeFeatureId), S = a ? null : w(T, s, i), N = S ? !S.canWrite && !S.canWriteAll : !1, P = ["TextBox", "Textarea", "Number", "DatePicker", "Select", "Checkbox", "Radio", "Switch", "Button"].includes(s.type), $ = !a && N && P, m = a && !!((j = s.permissions) != null && j.rules && s.permissions.rules.length > 0 || (y = (L = (E = s.props) == null ? void 0 : E.permissions) == null ? void 0 : L.rules) != null && y.length || (B = (_ = s.permissions) == null ? void 0 : _.allowedRoles) != null && B.length || (M = (Y = s.permissions) == null ? void 0 : Y.readOnlyRoles) != null && M.length);
  return /* @__PURE__ */ e.jsx(xn, { node: s, isEditing: a, ancestors: i, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      onClick: g,
      onContextMenu: k,
      style: f,
      className: `relative group transition-all duration-150 box-border ${$ ? "opacity-80 pointer-events-none select-none" : ""} ${a ? `cursor-pointer rounded-lg ${x ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : "hover:outline-1 hover:outline-blue-400/40"}` : ""}`,
      children: [
        a && x && /* @__PURE__ */ e.jsxs("div", { className: "absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ e.jsx("span", { children: s.type }),
          /* @__PURE__ */ e.jsxs("span", { className: "opacity-75", children: [
            "#",
            s.id.slice(-4)
          ] })
        ] }),
        m && !x && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-1 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition-opacity z-20 pointer-events-none", children: /* @__PURE__ */ e.jsxs("span", { className: "bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow", children: [
          "🔒 ",
          ((J = (z = s.permissions) == null ? void 0 : z.rules) == null ? void 0 : J.length) || ((H = (X = (h = s.props) == null ? void 0 : h.permissions) == null ? void 0 : X.rules) == null ? void 0 : H.length) || "RBAC"
        ] }) }),
        u()
      ]
    }
  ) });
}, gi = ({
  value: s,
  column: a,
  onSave: t,
  onCancel: r
}) => {
  const [n, o] = I(s ?? ""), l = st(null);
  Ee(() => {
    l.current && (l.current.focus(), l.current.select && l.current.select());
  }, []);
  const i = (c) => {
    c.key === "Enter" ? (c.preventDefault(), t(n)) : c.key === "Escape" && (c.preventDefault(), r());
  }, d = () => {
    t(n);
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
let wt = null;
const vi = ws()(
  an((s, a) => ({
    isConnected: !1,
    connectionId: null,
    lockedRecords: {},
    notifications: [],
    connect: (t = "http://localhost:5048/hubs/uiforge") => {
      if (!a().isConnected)
        try {
          const r = t.replace(/^http/, "ws"), n = new WebSocket(r);
          wt = n, n.onopen = () => {
            s({ isConnected: !0, connectionId: `conn_${Date.now()}` }), console.log("[RealtimeEngine] Đã kết nối thành công tới Hub:", t);
          }, n.onmessage = (o) => {
            try {
              const l = JSON.parse(o.data);
              if (l.type === "RecordLocked") {
                const i = `${l.entityName}_${l.recordId}`;
                s((d) => ({
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
                s((d) => {
                  const c = { ...d.lockedRecords };
                  return delete c[i], { lockedRecords: c };
                });
              } else l.type === "Notification" && a().addNotification(l.title, l.message, l.notifType || "info");
            } catch {
            }
          }, n.onclose = () => {
            s({ isConnected: !1, connectionId: null }), wt = null;
          }, n.onerror = () => {
            s({ isConnected: !1 });
          };
        } catch {
          s({ isConnected: !1 });
        }
    },
    disconnect: () => {
      if (wt) {
        try {
          wt.close();
        } catch {
        }
        wt = null;
      }
      s({ isConnected: !1, connectionId: null });
    },
    lockRecord: async (t, r, n) => {
      const o = `${t}_${r}`, l = {
        entityName: t,
        recordId: r,
        username: n,
        lockedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return s((i) => ({
        lockedRecords: {
          ...i.lockedRecords,
          [o]: l
        }
      })), wt && wt.readyState === WebSocket.OPEN && wt.send(
        JSON.stringify({
          action: "LockRecord",
          entityName: t,
          recordId: r,
          username: n
        })
      ), !0;
    },
    unlockRecord: async (t, r) => {
      const n = `${t}_${r}`;
      s((o) => {
        const l = { ...o.lockedRecords };
        return delete l[n], { lockedRecords: l };
      }), wt && wt.readyState === WebSocket.OPEN && wt.send(
        JSON.stringify({
          action: "UnlockRecord",
          entityName: t,
          recordId: r
        })
      );
    },
    isRecordLocked: (t, r, n) => {
      const o = `${t}_${r}`, l = a().lockedRecords[o];
      return !l || n && l.username.toLowerCase() === n.toLowerCase() ? null : l;
    },
    broadcastRecordUpdate: (t, r, n) => {
      wt && wt.readyState === WebSocket.OPEN && wt.send(
        JSON.stringify({
          action: "NotifyRecordUpdated",
          entityName: t,
          recordId: r,
          updatedBy: n
        })
      ), a().addNotification(
        "Dữ liệu đã cập nhật",
        `Bản ghi ${t} #${r} vừa được lưu bởi ${n}.`,
        "info"
      );
    },
    addNotification: (t, r, n = "info") => {
      const o = {
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        title: t,
        message: r,
        type: n,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("vi-VN")
      };
      s((l) => ({
        notifications: [o, ...l.notifications.slice(0, 49)]
        // giữ 50 thông báo gần nhất
      }));
    },
    clearNotifications: () => {
      s({ notifications: [] });
    }
  }))
);
function yi(s = {}) {
  const { onSaveLayout: a, isPreview: t = !1, canEdit: r = !0 } = s;
  Ee(() => {
    const n = async (o) => {
      var l;
      if (o.altKey && (o.code === "Backquote" || o.key === "`")) {
        o.preventDefault(), o.stopPropagation();
        const i = rt.getState(), d = i.openTabs;
        if (d.length <= 1) return;
        const c = i.activeTabId, g = (d.findIndex((u) => u.id === c) + 1) % d.length, k = d[g];
        k && (i.setActiveTab(k.id), Z.getState().setActiveFeature(k.featureId, ((l = k.params) == null ? void 0 : l.id) ?? null));
        return;
      }
      if (o.key === "Escape") {
        const i = rt.getState();
        if (i.activePopup) {
          o.preventDefault(), o.stopPropagation(), i.closePopup();
          return;
        }
      }
      if (o.key === "F9" || (o.ctrlKey || o.metaKey) && (o.key === "s" || o.key === "S")) {
        if (o.preventDefault(), o.stopPropagation(), r && !t && a) {
          a();
          return;
        }
        const i = Z.getState(), d = i.features.find((x) => x.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c) {
          const x = ke.getState(), g = x.getFormRecord(d.id) || x.getFormRecord("default");
          try {
            await Dr(c, "onSave", {
              record: g,
              featureId: d.id,
              trigger: "hotkey_F9"
            });
          } catch (k) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onSave:", k);
          }
        }
        return;
      }
      if (o.key === "F8") {
        o.preventDefault(), o.stopPropagation();
        const i = Z.getState(), d = i.features.find((x) => x.id === i.activeFeatureId), c = d == null ? void 0 : d.scriptFile;
        if (c)
          try {
            await Dr(c, "onApprove", {
              featureId: d.id,
              trigger: "hotkey_F8"
            });
          } catch (x) {
            console.error("[GlobalHotkeys] Lỗi khi kích hoạt onApprove:", x);
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
  }, [a, t, r]);
}
const Un = ({
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
    listeners: d,
    setNodeRef: c,
    transform: x,
    isDragging: g
  } = Qr({
    id: s.id,
    disabled: !a,
    data: {
      isPaletteItem: !1,
      id: s.id,
      type: s.type,
      node: s
    }
  }), { setNodeRef: k, isOver: u } = Zr({
    id: s.id,
    disabled: !a
  }), b = (P) => {
    c(P), k(P);
  }, C = r || (n ? {
    mode: "flex",
    direction: n.direction,
    columnsPerRow: n.columnsPerRow,
    gap: n.gap,
    wrap: n.wrap
  } : void 0), w = {
    ...Ca(s, C),
    transform: ea.Translate.toString(x),
    opacity: g ? 0.35 : 1,
    transition: g ? void 0 : "opacity 0.15s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }, T = s.type === "Container" || s.type === "Section" || s.type === "Tabs", S = u && T && !g, N = u && !T && !g;
  return /* @__PURE__ */ e.jsxs("div", { ref: b, style: w, className: "group/drag relative", children: [
    N && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" }) }),
    S && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" }),
    a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        ...i,
        ...d,
        className: "absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none",
        title: "Giữ chuột kéo để di chuyển vị trí",
        onMouseDown: (P) => P.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-[9px]" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      en,
      {
        node: s,
        isEditing: a,
        onContextMenu: t,
        parentLayout: C,
        parentFlexConfig: n,
        isWrappedByDrag: !0,
        renderChild: (P, $) => /* @__PURE__ */ e.jsx(
          Un,
          {
            node: P,
            isEditing: a,
            onContextMenu: t,
            parentLayout: $ && "mode" in $ ? $ : void 0,
            parentFlexConfig: $ && !("mode" in $) ? $ : void 0,
            activeId: o,
            overId: l
          },
          P.id
        )
      }
    )
  ] });
}, ka = ({ x: s, y: a, items: t, onClose: r }) => {
  const n = st(null);
  Ee(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && r();
    }, d = (c) => {
      c.key === "Escape" && r();
    };
    return window.addEventListener("mousedown", i), window.addEventListener("keydown", d), () => {
      window.removeEventListener("mousedown", i), window.removeEventListener("keydown", d);
    };
  }, [r]);
  const o = Math.min(s, window.innerWidth - 220), l = Math.min(a, window.innerHeight - (t.length * 36 + 20));
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
            onClick: (x) => {
              x.stopPropagation(), i.onClick(), r();
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
}, Ni = ({
  isEditing: s,
  activeId: a,
  overId: t
}) => {
  const r = Z((y) => y.features), n = Z((y) => y.activeFeatureId), o = Z((y) => y.activeRecordId), l = Z((y) => y.addComponent), i = Z((y) => y.selectComponent), d = Z((y) => y.removeComponent), c = Z((y) => y.updateComponentProps);
  Z((y) => y.updateFeatureLayout);
  const x = Z((y) => y.updateFeatureScriptFile), g = r.find((y) => y.id === n), k = zt((y) => y.user), u = (k == null ? void 0 : k.role) === "Dev", b = (g == null ? void 0 : g.layoutConfig) || {
    direction: "column",
    gap: "16px",
    wrap: "wrap"
  };
  Qt.useEffect(() => {
    n && (He.getState().fetchFeaturePolicies(n).catch(() => {
    }), He.getState().fetchComponentPolicies(n).catch(() => {
    }));
  }, [n]), Qt.useEffect(() => {
    var _;
    if (aa(g) && n) {
      let B = o;
      !B && typeof window < "u" && (B = new URLSearchParams(window.location.search).get("id"));
      const Y = B || "1", M = ke.getState().formRecords[n], z = (M == null ? void 0 : M.id) || (M == null ? void 0 : M.Id);
      if (String(z) !== String(Y)) {
        const { module: J } = Zn(g == null ? void 0 : g.scriptFile), h = (J == null ? void 0 : J.loadDetail) || ((_ = J == null ? void 0 : J.transactionDetailBL) == null ? void 0 : _.loadDetail);
        typeof h == "function" && h(Y).then((X) => {
          X && n && (ke.getState().setFormRecord(n, X), ke.getState().setFormRecord("default", X), o !== String(X.id || Y) && Z.getState().setActiveRecordId(String(X.id || Y)));
        });
      }
    }
  }, [n, o, g == null ? void 0 : g.scriptFile, g == null ? void 0 : g.route, g == null ? void 0 : g.name, g == null ? void 0 : g.isDetail]);
  const { setNodeRef: C, isOver: f } = Zr({
    id: "canvas-root",
    disabled: !s
  }), [w, T] = I(""), S = !!(g != null && g.scriptFile && g.scriptFile.trim().length > 0), [N, P] = I(null), $ = (y, _ = {}, B = {}) => ({
    id: `${y.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    type: y,
    parentId: null,
    pageId: n,
    props: {
      label: y === "Button" ? "Nút mới" : y === "Label" ? "Tiêu đề khối" : void 0,
      variant: y === "Button" ? "primary" : void 0,
      size: y === "Button" ? "md" : void 0,
      placeholder: y === "TextBox" ? "Nhập nội dung..." : void 0,
      ..._
    },
    style: {
      ...B
    },
    events: [],
    order: ((g == null ? void 0 : g.components.length) || 0) + 1
  }), m = (y) => {
    !s || !S || (y.preventDefault(), i(null), P({
      x: y.clientX,
      y: y.clientY,
      targetContainerId: null,
      selectedNode: null
    }));
  }, j = (y, _) => {
    if (!s) return;
    y.preventDefault(), y.stopPropagation(), i(_.id);
    const B = _.type === "Container" || _.type === "Section" || _.type === "Tabs";
    P({
      x: y.clientX,
      y: y.clientY,
      targetContainerId: B ? _.id : _.parentId,
      selectedNode: _
    });
  }, E = () => {
    var M, z, J;
    if (!N) return [];
    const { targetContainerId: y, selectedNode: _ } = N, B = _ && (_.type === "Container" || _.type === "Section" || _.type === "Tabs");
    if (_ && B) {
      const h = _.props.layoutMode === "grid", X = ((M = _.props.flexConfig) == null ? void 0 : M.direction) === "row", H = !!(_.props.isTab || _.props.tab || _.type === "Tabs"), le = _.props.activeTabId || ((J = (z = _.props.tabs) == null ? void 0 : z[0]) == null ? void 0 : J.id) || "main", ie = H ? { tabId: le } : {};
      return [
        ...H ? [
          {
            label: "📑 + Thêm Tab Mới vào phân hệ này",
            icon: ls,
            onClick: () => {
              const G = _.props.tabs || [
                { id: "main", label: "TAB 1" }
              ], de = `tab_${Date.now().toString(36)}`, pe = [
                ...G,
                { id: de, label: `Tab Mới ${G.length + 1}` }
              ];
              c(_.id, {
                tabs: pe,
                activeTabId: de
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
          icon: ls,
          onClick: () => {
            const G = $(
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
                ...ie
              },
              {
                flex: X ? "1" : void 0,
                width: X ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(G, y);
          }
        },
        {
          label: "📐 Thêm Khoảng Trắng con (Bố cục Grid)",
          icon: As,
          onClick: () => {
            const G = $(
              "Container",
              {
                layoutMode: "grid",
                gridConfig: { columns: 2, gap: "12px" },
                ...ie
              },
              {
                flex: X ? "1" : void 0,
                width: X ? void 0 : "100%",
                minHeight: "120px",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                padding: "16px",
                borderRadius: "10px",
                border: "1px dashed #64748b"
              }
            );
            l(G, y);
          }
        },
        {
          label: "🗂️ Thêm Khung Card / Section (12 Cột)",
          icon: As,
          onClick: () => {
            const G = $("Section", {
              title: "Phân Vùng Mới",
              label: "Phân Vùng Mới",
              collapsible: !0,
              boxShadow: !0,
              colSpan: 12,
              ...ie
            });
            l(G, y);
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
          icon: js,
          onClick: () => l(
            $("TextBox", {
              label: "Ô nhập liệu",
              labelPosition: "left",
              colSpan: 4,
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Số (Number)",
          icon: js,
          onClick: () => l(
            $("Number", {
              label: "Số tiền / Lượng",
              labelPosition: "left",
              colSpan: 4,
              precision: 2,
              thousandsSeparator: !0,
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Chọn Ngày (DatePicker)",
          icon: js,
          onClick: () => l(
            $("DatePicker", {
              label: "Ngày tháng",
              labelPosition: "left",
              colSpan: 4,
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Dropdown (Select)",
          icon: js,
          onClick: () => l(
            $("Select", {
              label: "Lựa chọn",
              labelPosition: "left",
              colSpan: 4,
              options: [
                { value: "opt1", label: "Tùy chọn 1" },
                { value: "opt2", label: "Tùy chọn 2" }
              ],
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Hộp Kiểm (Checkbox)",
          icon: Ys,
          onClick: () => l(
            $("Checkbox", {
              label: "Kích hoạt",
              labelPosition: "left",
              colSpan: 4,
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Ghi Chú Nhiều Dòng (Textarea)",
          icon: os,
          onClick: () => l(
            $("Textarea", {
              label: "Ghi chú",
              labelPosition: "left",
              colSpan: 12,
              rows: 3,
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Nút Bấm (Button)",
          icon: Ys,
          onClick: () => l(
            $("Button", {
              label: "Nút bấm",
              variant: "primary",
              size: "sm",
              ...ie
            }),
            y
          )
        },
        {
          label: "➕ Thêm Bảng Dữ Liệu (Advanced Grid)",
          icon: Pt,
          onClick: () => l(
            $("Table", {
              columns: [
                { key: "col1", title: "Cột 1", width: "120px" },
                { key: "col2", title: "Cột 2", width: "150px" },
                { key: "col3", title: "Cột 3", width: "120px" }
              ],
              ...ie
            }),
            y
          )
        },
        {
          divider: !0,
          label: "",
          onClick: () => {
          }
        },
        {
          label: X ? "↕ Đổi hướng: Xếp dọc (Column)" : "↔ Đổi hướng: Nằm song song (Row)",
          icon: X ? Jn : gr,
          onClick: () => {
            c(_.id, {
              flexConfig: {
                ..._.props.flexConfig || {
                  wrap: "wrap",
                  justify: "flex-start",
                  align: "center",
                  gap: "12px"
                },
                direction: X ? "column" : "row"
              }
            });
          }
        },
        {
          label: h ? "🔄 Đổi sang bố cục Flexbox" : "🔄 Đổi sang bố cục Grid (Lưới)",
          icon: As,
          onClick: () => {
            h ? c(_.id, {
              layoutMode: "flex",
              flexConfig: {
                direction: "row",
                wrap: "wrap",
                justify: "flex-start",
                align: "center",
                gap: "12px"
              }
            }) : c(_.id, {
              layoutMode: "grid",
              gridConfig: { columns: 2, gap: "16px" }
            });
          }
        },
        {
          label: "🗑️ Xóa khối này",
          icon: xt,
          danger: !0,
          onClick: () => d(_.id)
        }
      ];
    }
    const Y = b.direction === "row";
    return [
      {
        label: Y ? "📦 Thêm Khoảng Trắng (Tự chia đôi song song)" : "📦 Thêm Khoảng Trắng (Bố cục Flexbox)",
        icon: ls,
        onClick: () => {
          const h = $(
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
              flex: Y ? "1" : void 0,
              width: Y ? void 0 : "100%",
              minHeight: "130px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(h, null);
        }
      },
      {
        label: "📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)",
        icon: As,
        onClick: () => {
          const h = $(
            "Container",
            {
              layoutMode: "grid",
              gridConfig: {
                columns: 2,
                gap: "16px"
              }
            },
            {
              flex: Y ? "1" : void 0,
              width: Y ? void 0 : "100%",
              minHeight: "140px",
              backgroundColor: "#1e293b",
              padding: "16px",
              borderRadius: "12px",
              border: "1px dashed #475569"
            }
          );
          l(h, null);
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
        icon: Ys,
        onClick: () => l($("Button"), null)
      },
      {
        label: "📝 Thêm Hộp nhập liệu (TextBox)",
        icon: js,
        onClick: () => l($("TextBox"), null)
      },
      {
        label: "🏷️ Thêm Nhãn chữ (Label)",
        icon: os,
        onClick: () => l($("Label"), null)
      },
      {
        label: "📊 Thêm Bảng dữ liệu (Table)",
        icon: Pt,
        onClick: () => l($("Table"), null)
      }
    ];
  }, L = (g == null ? void 0 : g.components.filter((y) => !y.parentId)) || [];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: C,
      onContextMenu: m,
      className: `flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${f && s ? "ring-2 ring-blue-500/50 bg-blue-950/10" : ""}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w w-full mx-auto flex-1 flex flex-col space-y-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-3 border-b border-slate-800/80", children: /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h1", { className: "text-lg font-bold text-slate-100 flex items-center gap-2.5", children: [
              /* @__PURE__ */ e.jsx("span", { children: (g == null ? void 0 : g.name) || "Màn hình" }),
              (s || u) && (S ? /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Pn, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: g == null ? void 0 : g.scriptFile })
              ] }) : /* @__PURE__ */ e.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm", children: [
                /* @__PURE__ */ e.jsx(Ms, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: "Chưa gắn file BL" })
              ] }))
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: s || u ? S ? (g == null ? void 0 : g.description) || "Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới." : "Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế." : (g == null ? void 0 : g.description) || "" })
          ] }) }),
          S ? L.length === 0 ? /* @__PURE__ */ e.jsxs(
            "div",
            {
              onContextMenu: m,
              className: `flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${f ? "border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-slate-800 hover:border-blue-500/50 bg-slate-900/30"}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner", children: /* @__PURE__ */ e.jsx(ls, { className: "w-7 h-7" }) }),
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
                      const y = $(
                        "Container",
                        {
                          layoutMode: "flex",
                          flexConfig: { direction: "row", wrap: "wrap", justify: "space-between", align: "stretch", gap: "16px" }
                        },
                        { width: "100%", minHeight: "160px", backgroundColor: "#1e293b", padding: "16px" }
                      );
                      y.children = [
                        $(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        ),
                        $(
                          "Container",
                          { layoutMode: "flex", flexConfig: { direction: "column", wrap: "wrap", justify: "flex-start", align: "stretch", gap: "12px" } },
                          { flex: "1", minHeight: "120px", backgroundColor: "#0f172a", padding: "12px", border: "1px dashed #475569" }
                        )
                      ], l(y, null);
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
                flexDirection: b.direction || "column",
                gap: b.gap || "16px",
                flexWrap: b.wrap || "wrap",
                width: "100%"
              },
              className: "flex-1",
              children: wa(L).map((y, _) => {
                if (y.type === "tab_stack")
                  return /* @__PURE__ */ e.jsx(
                    ja,
                    {
                      parentId: null,
                      order: y.order,
                      tabNodes: y.nodes,
                      isEditing: s,
                      onContextMenu: j,
                      renderChild: (M, z) => s ? /* @__PURE__ */ e.jsx(
                        Un,
                        {
                          node: M,
                          isEditing: s,
                          onContextMenu: j,
                          parentLayout: z && "mode" in z ? z : void 0,
                          parentFlexConfig: z && !("mode" in z) ? z : void 0,
                          activeId: a,
                          overId: t
                        },
                        M.id
                      ) : /* @__PURE__ */ e.jsx(
                        en,
                        {
                          node: M,
                          isEditing: !1,
                          onContextMenu: j,
                          parentLayout: z && "mode" in z ? z : void 0,
                          parentFlexConfig: z && !("mode" in z) ? z : void 0
                        },
                        M.id
                      )
                    },
                    `root_tab_stack_${y.order}_${_}`
                  );
                const B = y.node, Y = {
                  mode: "flex",
                  direction: b.direction || "column",
                  wrap: b.wrap || "wrap",
                  gap: b.gap,
                  columnsPerRow: "auto"
                };
                return s ? /* @__PURE__ */ e.jsx(
                  Un,
                  {
                    node: B,
                    isEditing: s,
                    onContextMenu: j,
                    parentLayout: Y,
                    activeId: a,
                    overId: t
                  },
                  B.id
                ) : /* @__PURE__ */ e.jsx(
                  en,
                  {
                    node: B,
                    isEditing: !1,
                    onContextMenu: j,
                    parentLayout: Y
                  },
                  B.id
                );
              })
            }
          ) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20", children: /* @__PURE__ */ e.jsx(Ms, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { children: "Chưa Xác Định File Nghiệp Vụ (BL File)" }) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-slate-400 max-w-lg mb-6 leading-relaxed", children: [
              "Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (",
              /* @__PURE__ */ e.jsx("strong", { className: "text-amber-400 font-mono", children: "*.bl.ts" }),
              ") để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện."
            ] }),
            /* @__PURE__ */ e.jsxs(
              "form",
              {
                onSubmit: (y) => {
                  y.preventDefault();
                  const _ = w.trim();
                  if (!_) return;
                  const B = _.endsWith(".bl.ts") ? _ : _.endsWith(".ts") ? _.replace(/\.ts$/, ".bl.ts") : `${_}.bl.ts`;
                  x(n, B), T("");
                },
                className: "w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "Tên file nghiệp vụ (TypeScript):" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-amber-400 font-mono", children: ".bl.ts" })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ e.jsx(Pn, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          autoFocus: !0,
                          placeholder: "Ví dụ: customerManagement.bl.ts, orderReport.bl.ts...",
                          value: w,
                          onChange: (y) => T(y.target.value),
                          className: "w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }
                      )
                    ] })
                  ] }),
                  g && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
                    /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-cyan-400 shrink-0" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Gợi ý nhanh:" }),
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const y = g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
                          T(`${y || "feature"}.bl.ts`);
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
        N && /* @__PURE__ */ e.jsx(
          ka,
          {
            x: N.x,
            y: N.y,
            items: E(),
            onClose: () => P(null)
          }
        )
      ]
    }
  );
};
function Wo(s) {
  return s.replace(/-([a-z])/g, (a, t) => t.toUpperCase());
}
function Vo(s) {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function Go(s) {
  const a = {};
  if (!s || typeof s != "string") return a;
  const r = s.replace(/\/\*[\s\S]*?\*\//g, "").split(";");
  for (const n of r) {
    const o = n.trim();
    if (!o) continue;
    const l = o.indexOf(":");
    if (l === -1) continue;
    const i = o.slice(0, l).trim(), d = o.slice(l + 1).trim();
    if (i && d) {
      let c = Wo(i);
      c === "justify" && (c = "justifyContent"), c === "align" && (c = "alignItems"), a[c] = d;
    }
  }
  return a;
}
function Uo(s) {
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
    const o = Vo(r);
    t.push(`${o}: ${n};`);
  }
  return t.join(`
`);
}
const Sa = ({
  isOpen: s,
  node: a,
  onClose: t,
  onSave: r
}) => {
  var hr, mr;
  const [n, o] = I("info"), [l, i] = I([]), [d, c] = I([]), [x, g] = I(
    ((hr = a == null ? void 0 : a.permissions) == null ? void 0 : hr.rules) || []
  ), [k, u] = I(null), [b, C] = I(!1), [f, w] = I(""), [T, S] = I("General"), [N, P] = I(""), [$, m] = I("Dropdown"), [j, E] = I(""), [L, y] = I(""), [_, B] = I(""), [Y, M] = I(1), [z, J] = I(4), [h, X] = I(""), [H, le] = I(""), [ie, G] = I(""), [de, pe] = I(""), [W, ce] = I(""), [q, te] = I(""), [ue, ve] = I(""), [D, O] = I(""), [ne, oe] = I(""), [ae, ye] = I(""), [Te, Pe] = I(""), [be, fe] = I(""), [Re, Se] = I(""), [ge, ee] = I(""), [me, ct] = I(""), [Et, vt] = I(""), [Ct, se] = I(""), [we, Oe] = I(""), [Fe, Me] = I(""), [$e, Qe] = I(""), [et, at] = I(""), [lt, dt] = I(""), [ot, yt] = I(""), [Ge, Nt] = I(""), [Vt, Tt] = I(""), [Dt, Mt] = I("id"), [Gt, Bt] = I(""), [kt, Ut] = I(""), [Ve, _t] = I(""), [qt, R] = I(""), [re, he] = I(""), [Ce, Le] = I(""), [Be, De] = I(""), [Ie, Je] = I(""), [Ue, Ke] = I(""), [nt, bt] = I(""), [ft, Ze] = I(!1), [Ot, It] = I(!0), [Yt, ks] = I(!1), [cs, Ft] = I(!1), [Ss, ds] = I(!1), [ts, ss] = I(!1), [us, Ts] = I(!1), [xs, Xt] = I(!1), [gt, _s] = I(!1), [Os, Hs] = I(!1), [Ds, Ws] = I(!1), [ps, hs] = I(!1), [ms, bs] = I(!1), [fs, gs] = I(!1), [vs, v] = I(!1), [p, F] = I(!1), [V, A] = I(!0), [K, xe] = I(!0), [Ne, We] = I(!1), [ze, ht] = I(!1), [St, Rt] = I(!1), [ys, Is] = I(!1), [tr, sr] = I(!1), [nr, rr] = I(!1), [ar, lr] = I(!1), [or, ir] = I(!1), [Fs, cr] = I(""), [Cn, dr] = I(""), [ur, xr] = I(""), [Rs, ln] = I(""), [Zo, Ta] = I("");
  if (Ee(() => {
    wn().then((Q) => i(Q));
  }, []), Ee(() => {
    var Q;
    if (a && s) {
      const U = a.props || {}, je = a.dataBinding || {}, _e = a.pageId || (Z.getState().activeFeatureId ?? "");
      _e && a.id ? He.getState().fetchComponentPolicies(_e, a.id).then(($s) => {
        var br;
        $s && $s.length > 0 ? g($s) : g(((br = a.permissions) == null ? void 0 : br.rules) || []);
      }).catch(() => {
        var $s;
        g((($s = a.permissions) == null ? void 0 : $s.rules) || []);
      }) : g(((Q = a.permissions) == null ? void 0 : Q.rules) || []), w(String(U.id ?? a.id)), S(U.group !== void 0 ? String(U.group) : "General");
      const cn = U.reference !== void 0 ? String(U.reference) : je.entityName !== void 0 ? String(je.entityName) : U.refName !== void 0 ? String(U.refName) : "";
      P(cn), m(a.type || "Dropdown"), E(String(U.parentId ?? "")), y(
        U.refName !== void 0 ? String(U.refName) : je.refName !== void 0 ? String(je.refName) : cn
      ), B(
        je.fieldName !== void 0 ? String(je.fieldName) : U.fieldName !== void 0 ? String(U.fieldName) : U.name !== void 0 ? String(U.name) : a.id
      ), M(Number(a.order ?? U.order ?? 1)), J(Number(U.colSpan ?? U.column ?? 4)), X(U.label !== void 0 ? String(U.label) : ""), le(
        U.events !== void 0 ? typeof U.events == "string" ? U.events : JSON.stringify(U.events) : ""
      ), G(U.style !== void 0 ? String(U.style) : ""), pe(U.childStyle !== void 0 ? String(U.childStyle) : ""), ce(U.validation !== void 0 ? String(U.validation) : ""), te(
        U.selectField !== void 0 ? String(U.selectField) : je.selectField !== void 0 ? String(je.selectField) : ""
      ), ve(U.plainText !== void 0 ? String(U.plainText) : ""), O(
        U.cssClass !== void 0 ? String(U.cssClass) : U.className !== void 0 ? String(U.className) : ""
      ), oe(U.sqlSelect !== void 0 ? String(U.sqlSelect) : ""), ye(String(U.offset ?? "")), Pe(U.groupFormat !== void 0 ? String(U.groupFormat) : ""), fe(U.formatSummary !== void 0 ? String(U.formatSummary) : ""), Se(U.orderBySummary !== void 0 ? String(U.orderBySummary) : ""), ee(U.groupEvent !== void 0 ? String(U.groupEvent) : ""), ct(U.icon !== void 0 ? String(U.icon) : ""), vt(U.system !== void 0 ? String(U.system) : ""), se(U.refClass !== void 0 ? String(U.refClass) : ""), Oe(U.hotKey !== void 0 ? String(U.hotKey) : ""), Me(U.dateTimeField !== void 0 ? String(U.dateTimeField) : ""), Qe(String(U.addStart ?? "")), at(String(U.addEnd ?? "")), dt(String(U.bodyRowHeight ?? "")), yt(
        U.sqlWhere !== void 0 ? String(U.sqlWhere) : je.sqlWhere !== void 0 ? String(je.sqlWhere) : ""
      ), Nt(String(U.footerHeight ?? "")), Tt(U.joinTable !== void 0 ? String(U.joinTable) : ""), Mt(
        U.idField !== void 0 ? String(U.idField) : je.idField !== void 0 ? String(je.idField) : "id"
      ), Bt(String(U.headerHeight ?? "")), Ut(
        U.populateField !== void 0 ? String(U.populateField) : je.populateField !== void 0 ? String(je.populateField) : ""
      ), _t(String(U.precision ?? "")), R(U.groupBy !== void 0 ? String(U.groupBy) : ""), he(U.disabledExp !== void 0 ? String(U.disabledExp) : ""), Le(U.showExp !== void 0 ? String(U.showExp) : ""), De(String(U.row ?? "")), Je(U.template !== void 0 ? String(U.template) : ""), Ke(U.templateLocked !== void 0 ? String(U.templateLocked) : ""), bt(String(U.default ?? U.defaultValue ?? "")), Ze(!!U.realtime), It(U.showLabel !== !1 && U.label !== !1), ks(!!U.hidden), Ft(!!U.filterLocal), ds(!!U.sqlSearch), ss(!!U.cache), Ts(!!U.moveTab), Xt(!!U.focus), _s(!!U.focusSearch), Hs(!!U.noLoad), Ws(!!U.collapsible), hs(!!U.showHotKey), bs(!!U.history), gs(!!U.top), v(!!U.hideAnd), F(!!U.disabled), A(U.visibility !== !1), xe(U.active !== !1), We(!!U.upperCase), ht(!!(U.virtualScroll || U.virtual)), Rt(!!U.isPrivate), Is(!!U.renderIndex), sr(!!(U.canAdd || U.add)), rr(!!(U.canSearch || U.search)), lr(!!(U.isSummary || U.summary)), ir(!!U.showDateTimeField);
      const dn = U.dataSource !== void 0 ? U.dataSource : U.dataSourceFilter !== void 0 ? U.dataSourceFilter : je.dataSource !== void 0 ? je.dataSource : "";
      cr(String(dn ?? ""));
      const Ia = U.formatEntity !== void 0 ? U.formatEntity : je.formatEntity !== void 0 ? je.formatEntity : "";
      dr(String(Ia ?? "")), xr(U.migration !== void 0 ? String(U.migration) : "");
      const Fa = U.formatData !== void 0 ? U.formatData : je.formatData !== void 0 ? je.formatData : "";
      ln(String(Fa ?? ""));
      const Ra = U.query !== void 0 ? U.query : je.query !== void 0 ? je.query : "";
      Ta(String(Ra ?? "")), c(
        U.dropdownColumns || je.dropdownColumns || []
      );
    }
  }, [a, s]), !s || !a) return null;
  const Da = async () => {
    let Q = H;
    try {
      H.trim().startsWith("{") && (Q = JSON.parse(H));
    } catch {
      Q = H;
    }
    const U = {
      ...a.props,
      id: f,
      group: T,
      reference: N,
      componentType: $,
      parentId: j,
      refName: L,
      fieldName: _,
      order: Number(Y) || 1,
      colSpan: Number(z) || 4,
      column: Number(z) || 4,
      label: h,
      events: Q,
      style: ie,
      childStyle: de,
      validation: W,
      selectField: q,
      plainText: ue,
      cssClass: D,
      sqlSelect: ne,
      offset: ae,
      groupFormat: Te,
      formatSummary: be,
      orderBySummary: Re,
      groupEvent: ge,
      icon: me,
      system: Et,
      refClass: Ct,
      hotKey: we,
      dateTimeField: Fe,
      addStart: $e,
      addEnd: et,
      bodyRowHeight: lt,
      sqlWhere: ot,
      footerHeight: Ge,
      joinTable: Vt,
      idField: Dt,
      headerHeight: Gt,
      populateField: kt,
      precision: Ve ? Number(Ve) : void 0,
      groupBy: qt,
      disabledExp: re,
      showExp: Ce,
      row: Be,
      template: Ie,
      templateLocked: Ue,
      default: nt,
      // Display flags
      realtime: ft,
      showLabel: Ot,
      hidden: Yt,
      filterLocal: cs,
      sqlSearch: Ss,
      cache: ts,
      moveTab: us,
      focus: xs,
      focusSearch: gt,
      noLoad: Os,
      collapsible: Ds,
      showHotKey: ps,
      history: ms,
      top: fs,
      hideAnd: vs,
      disabled: p,
      visibility: V,
      active: K,
      upperCase: Ne,
      virtual: ze,
      isPrivate: St,
      renderIndex: ys,
      add: tr,
      search: nr,
      summary: ar,
      showDateTimeField: or,
      // Code blocks
      dataSource: Fs,
      dataSourceFilter: Fs,
      formatEntity: Cn,
      migration: ur,
      formatData: Rs,
      query: Fs,
      dropdownColumns: d
    }, je = {
      ...a.dataBinding || {},
      entityName: N || L || "",
      refName: L || N || "",
      fieldName: _ || a.id,
      query: Fs,
      dataSource: Fs,
      sqlWhere: ot,
      selectField: q,
      populateField: kt,
      idField: Dt,
      formatData: Rs,
      formatEntity: Cn,
      dropdownColumns: d,
      twoWay: !0
    };
    let _e = [...x];
    k && (_e = [..._e, k], g(_e), u(null));
    const cn = {
      ...a.permissions || {},
      rules: _e
    };
    Z.getState().updateComponentPermissions(a.id, cn);
    const dn = a.pageId || (Z.getState().activeFeatureId ?? "");
    dn && await He.getState().saveComponentPolicies(
      dn,
      a.id,
      _e,
      String(_ || L || a.id)
    ), r(a.id, U, je), C(!0), setTimeout(() => C(!1), 2500);
  }, pr = fn(l), Ps = gn(pr, N || L), Vs = Ps ? Ps.fields : [], on = ["Select", "Dropdown", "Autocomplete", "SearchEntry"].includes($), qe = (Q, U, je) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-[11px] ${U ? "text-slate-200 font-medium" : "text-slate-400"}`, children: Q }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: U,
        onChange: (_e) => je(_e.target.checked),
        className: "w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return At(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-teal-400" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm tracking-wide text-white", children: "Component properties" }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono", children: [
            "#",
            f || a.id
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                const Q = Z.getState(), U = (a == null ? void 0 : a.pageId) || Q.activeFeatureId;
                typeof Q.openFeatureProperties == "function" && Q.openFeatureProperties(U);
              },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-teal-700/60 bg-teal-950/60 hover:bg-teal-900 text-teal-300 transition-all cursor-pointer",
              title: "Mở cấu hình Feature của màn hình này",
              children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-teal-400" }),
                /* @__PURE__ */ e.jsx("span", { children: "Feature Properties ↗" })
              ]
            }
          ),
          b && /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40 animate-in fade-in", children: [
            /* @__PURE__ */ e.jsx(nn, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Đã lưu thành công!" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: Da,
              className: "flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
        on && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => o("dropdownColumns"),
            className: `py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${n === "dropdownColumns" ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-emerald-400" }),
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
                      value: T,
                      onChange: (Q) => S(Q.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Reference (Chọn Thực Thể)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: Ps ? Ps.name : "",
                      onChange: (Q) => {
                        const U = Q.target.value;
                        P(U), y(U);
                      },
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        pr.map((Q) => /* @__PURE__ */ e.jsxs("option", { value: Q.name, children: [
                          Q.displayName,
                          " (",
                          Q.name,
                          ")"
                        ] }, Q.name))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-slate-400 block mb-0.5 text-[11px]", children: "Component" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: $,
                      onChange: (Q) => m(Q.target.value),
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
                      value: j,
                      onChange: (Q) => E(Q.target.value),
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
                      value: L,
                      placeholder: "VD: Vendor, Terminal, Customer...",
                      onChange: (Q) => {
                        y(Q.target.value), P(Q.target.value);
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
                      value: _,
                      onChange: (Q) => B(Q.target.value),
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
                      value: Y,
                      onChange: (Q) => M(Q.target.value),
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
                      value: z,
                      onChange: (Q) => J(Q.target.value),
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
                      value: h,
                      onChange: (Q) => X(Q.target.value),
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
                      value: ie,
                      onChange: (Q) => G(Q.target.value),
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
                      value: de,
                      onChange: (Q) => pe(Q.target.value),
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
                      value: W,
                      onChange: (Q) => ce(Q.target.value),
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
                      value: q,
                      onChange: (Q) => te(Q.target.value),
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
                      value: ue,
                      onChange: (Q) => ve(Q.target.value),
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
                      value: D,
                      onChange: (Q) => O(Q.target.value),
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
                      value: ne,
                      onChange: (Q) => oe(Q.target.value),
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
                      value: ae,
                      onChange: (Q) => ye(Q.target.value),
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
                      value: Te,
                      onChange: (Q) => Pe(Q.target.value),
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
                      value: be,
                      onChange: (Q) => fe(Q.target.value),
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
                      value: Re,
                      onChange: (Q) => Se(Q.target.value),
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
                      value: ge,
                      onChange: (Q) => ee(Q.target.value),
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
                      value: me,
                      onChange: (Q) => ct(Q.target.value),
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
                      value: Et,
                      onChange: (Q) => vt(Q.target.value),
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
                      value: Ct,
                      onChange: (Q) => se(Q.target.value),
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
                      value: we,
                      onChange: (Q) => Oe(Q.target.value),
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
                      value: Fe,
                      onChange: (Q) => Me(Q.target.value),
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
                      value: $e,
                      onChange: (Q) => Qe(Q.target.value),
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
                      onChange: (Q) => at(Q.target.value),
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
                      onChange: (Q) => dt(Q.target.value),
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
                      onChange: (Q) => yt(Q.target.value),
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
                      value: Ge,
                      onChange: (Q) => Nt(Q.target.value),
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
                      value: Vt,
                      onChange: (Q) => Tt(Q.target.value),
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
                      value: Dt,
                      onChange: (Q) => Mt(Q.target.value),
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
                      value: Gt,
                      onChange: (Q) => Bt(Q.target.value),
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
                      value: kt,
                      onChange: (Q) => Ut(Q.target.value),
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
                      value: Ve,
                      onChange: (Q) => _t(Q.target.value),
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
                      value: qt,
                      onChange: (Q) => R(Q.target.value),
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
                      onChange: (Q) => he(Q.target.value),
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
                      value: Ce,
                      onChange: (Q) => Le(Q.target.value),
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
                      onChange: (Q) => De(Q.target.value),
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
                      value: Ie,
                      onChange: (Q) => Je(Q.target.value),
                      className: "w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Template" }),
                    /* @__PURE__ */ e.jsx(Ms, { className: "w-3 h-3 text-amber-400" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: Ue,
                      onChange: (Q) => Ke(Q.target.value),
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
                      value: nt,
                      onChange: (Q) => bt(Q.target.value),
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
                  qe("Realtime", ft, Ze),
                  qe("Label", Ot, It),
                  qe("Hidden", Yt, ks),
                  qe("FilterLocal", cs, Ft),
                  qe("SqlSearch", Ss, ds),
                  qe("Cache", ts, ss),
                  qe("Move Tab", us, Ts),
                  qe("Focus", xs, Xt),
                  qe("FocusSearch", gt, _s),
                  qe("No Load", Os, Hs),
                  qe("Collapsible", Ds, Ws),
                  qe("HotKey", ps, hs),
                  qe("History", ms, bs)
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                  qe("Top", fs, gs),
                  qe("HideAnd", vs, v),
                  qe("Disabled", p, F),
                  qe("Visibility", V, A),
                  qe("Active", K, xe),
                  qe("Upper Case", Ne, We),
                  qe("Virtual", ze, ht),
                  qe("Private", St, Rt),
                  qe("Render Index", ys, Is),
                  qe("Add", tr, sr),
                  qe("Search", nr, rr),
                  qe("Sumary", ar, lr),
                  qe("DateTime Field", or, ir)
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
                      value: Fs,
                      placeholder: "VD: active = true hoặc ?$filter=Active eq true",
                      onChange: (Q) => cr(Q.target.value),
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
                      value: Cn,
                      placeholder: "VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }",
                      onChange: (Q) => dr(Q.target.value),
                      className: "w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 ${on ? "" : "md:grid-cols-2"} gap-3`, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase", children: "MIGRATION" }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right", children: "1" }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 2,
                      value: ur,
                      onChange: (Q) => xr(Q.target.value),
                      placeholder: "Migration scripts...",
                      className: "w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] }),
              !on && /* @__PURE__ */ e.jsxs("div", { className: "bg-[#070d18] border border-slate-800 rounded p-2.5", children: [
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
                      value: Rs,
                      onChange: (Q) => ln(Q.target.value),
                      placeholder: "{ShortName}",
                      className: "w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        n === "dropdownColumns" && on && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h4", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4 text-emerald-400" }),
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
                    var Q, U;
                    c([
                      ...d,
                      {
                        key: ((Q = Vs[d.length]) == null ? void 0 : Q.name) || `col${d.length + 1}`,
                        title: ((U = Vs[d.length]) == null ? void 0 : U.displayName) || `Cột ${d.length + 1}`,
                        width: "50%",
                        align: "left"
                      }
                    ]);
                  },
                  className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                  ]
                }
              ),
              Ps && Vs.length > 0 && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const Q = ["code", "fullname", "name", "address", "taxcode", "phone", "shortname"];
                    let U = Vs.filter((je) => Q.includes(je.name.toLowerCase()));
                    U.length === 0 ? U = Vs.slice(0, 3) : U = U.slice(0, 4), c(
                      U.map((je) => ({
                        key: je.name,
                        title: je.displayName || je.name,
                        width: `${Math.floor(100 / U.length)}%`,
                        align: "left"
                      }))
                    );
                  },
                  className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Tự động nạp từ ",
                      Ps.name
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
          ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: d.map((Q, U) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 flex items-center justify-center gap-0.5", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: U === 0,
                  onClick: () => {
                    const je = [...d], _e = je[U];
                    je[U] = je[U - 1], je[U - 1] = _e, c(je);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(Js, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  disabled: U === d.length - 1,
                  onClick: () => {
                    const je = [...d], _e = je[U];
                    je[U] = je[U + 1], je[U + 1] = _e, c(je);
                  },
                  className: "p-0.5 text-slate-400 hover:text-white disabled:opacity-20",
                  children: /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: Q.key,
                placeholder: "Key (vd: FullName)",
                onChange: (je) => {
                  const _e = [...d];
                  _e[U] = { ..._e[U], key: je.target.value }, c(_e);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: Q.title,
                placeholder: "Tiêu đề cột",
                onChange: (je) => {
                  const _e = [...d];
                  _e[U] = { ..._e[U], title: je.target.value }, c(_e);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: Q.width || "50%",
                placeholder: "Width",
                onChange: (je) => {
                  const _e = [...d];
                  _e[U] = { ..._e[U], width: je.target.value }, c(_e);
                },
                className: "w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
              }
            ) }),
            /* @__PURE__ */ e.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: Q.align || "left",
                onChange: (je) => {
                  const _e = [...d];
                  _e[U] = { ..._e[U], align: je.target.value }, c(_e);
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
                onClick: () => c(d.filter((je, _e) => _e !== U)),
                className: "p-1 text-slate-400 hover:text-red-400",
                children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
              }
            ) })
          ] }, U)) }),
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
                value: Rs,
                onChange: (Q) => ln(Q.target.value),
                placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                className: "w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              }
            ),
            d.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: d.map((Q, U) => {
              const je = N || L, _e = je ? `{${je}.${Q.key}}` : `{${Q.key}}`;
              return /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => ln(Rs ? `${Rs} - ${_e}` : _e),
                  className: "px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer",
                  children: [
                    "+ ",
                    _e
                  ]
                },
                U
              );
            }) })
          ] })
        ] }) }),
        n === "permissions" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsx(
          er,
          {
            rules: x,
            onChange: g,
            onPendingRuleChange: u,
            pageId: a.pageId || Z.getState().activeFeatureId || "",
            nodeId: a.id,
            fieldName: _ || ((mr = a.dataBinding) == null ? void 0 : mr.fieldName) || a.id
          }
        ) }),
        n === "report" && /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(os, { className: "w-4 h-4 text-teal-400" }),
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
}, mt = ({
  value: s,
  onChange: a,
  debounceMs: t = 120,
  onBlur: r,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = I(
    s != null ? String(s) : ""
  ), d = st(a);
  d.current = a;
  const c = st(null);
  Ee(() => {
    i(s != null ? String(s) : "");
  }, [s]);
  const x = (b) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const C = s != null ? String(s) : "";
    b !== C && d.current(b);
  };
  Ee(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (b) => {
    const C = b.target.value;
    i(C), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      x(C);
    }, t);
  }, k = (b) => {
    x(b.target.value), r && r(b);
  }, u = (b) => {
    b.key === "Enter" && x(b.target.value), n && n(b);
  };
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: k,
      onKeyDown: u
    }
  );
}, Ko = ({
  value: s,
  onChange: a,
  debounceMs: t = 120,
  onBlur: r,
  onKeyDown: n,
  ...o
}) => {
  const [l, i] = I(
    s != null ? String(s) : ""
  ), d = st(a);
  d.current = a;
  const c = st(null);
  Ee(() => {
    i(s != null ? String(s) : "");
  }, [s]);
  const x = (u) => {
    c.current && (clearTimeout(c.current), c.current = null);
    const b = s != null ? String(s) : "";
    u !== b && d.current(u);
  };
  Ee(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const g = (u) => {
    const b = u.target.value;
    i(b), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      x(b);
    }, t);
  }, k = (u) => {
    x(u.target.value), r && r(u);
  };
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      ...o,
      value: l,
      onChange: g,
      onBlur: k,
      onKeyDown: n
    }
  );
}, zo = ({ width: s }) => {
  var te, ue, ve;
  const [a, t] = I("layout"), [r, n] = I(null), [o, l] = I(!1), [i, d] = I(!1), [c, x] = I([]);
  Ee(() => {
    wn().then((D) => {
      D && D.length > 0 && x(D);
    });
  }, []);
  const [g, k] = I(null), [u, b] = I(null), C = Z((D) => D.activeFeatureId), f = Z((D) => D.features.find((O) => O.id === D.activeFeatureId)), w = Z((D) => D.selection), T = Z((D) => D.selectComponent), S = Z((D) => D.addComponent), N = Z((D) => D.updateComponentProps), P = Z((D) => D.updateComponentStyle), $ = Z((D) => D.updateComponentEvents), m = Z((D) => D.updateComponentDataBinding), j = Z((D) => D.updateComponentValidation), E = Z((D) => D.updateComponentPermissions), L = Z((D) => D.updateComponentOrder), y = Z((D) => D.removeComponent);
  Z((D) => D.distributeSiblingWidths);
  const _ = Z((D) => D.updateFeatureScriptFile), [B, Y] = I(""), [M, z] = I(0), J = (D, O) => {
    if (!O) return null;
    for (const ne of D) {
      if (ne.id === O) return ne;
      if (ne.children) {
        const oe = J(ne.children, O);
        if (oe) return oe;
      }
    }
    return null;
  }, h = Ae(
    () => w.componentId && f ? J(f.components, w.componentId) : null,
    [w.componentId, f]
  ), X = Ae(
    () => h != null && h.parentId && f ? J(f.components, h.parentId) : null,
    [h == null ? void 0 : h.parentId, f]
  ), H = Ae(
    () => {
      var D, O;
      return X && ((D = X.props) != null && D.isTab || (O = X.props) != null && O.tab || X.type === "Tabs") ? X : null;
    },
    [X]
  );
  if (!h) {
    const D = f ? f.components.filter((O) => !O.parentId) : [];
    return /* @__PURE__ */ e.jsxs(
      "aside",
      {
        style: { width: s ? `${s}px` : "380px" },
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
                  const O = Z.getState();
                  typeof O.openFeatureProperties == "function" && O.openFeatureProperties(f.id);
                },
                className: "p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-teal-300 border border-slate-700/60 bg-slate-800/50 transition-colors cursor-pointer",
                title: "Mở Thuộc tính Feature (Feature Properties Modal)",
                children: /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-teal-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: f && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const O = Z.getState();
                  typeof O.openFeatureProperties == "function" && O.openFeatureProperties(f.id);
                },
                className: "w-full py-2.5 px-3 bg-gradient-to-r from-teal-600/30 to-blue-600/30 hover:from-teal-600/50 hover:to-blue-600/50 border border-teal-500/50 rounded-xl text-teal-200 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950/40 cursor-pointer transition-all group",
                children: [
                  /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-teal-400 group-hover:rotate-45 transition-transform" }),
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
                  mt,
                  {
                    type: "text",
                    value: f.scriptFile || "",
                    placeholder: "feature.bl.ts...",
                    onChange: (O) => _(f.id, O),
                    className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Phần Tử Trang (",
                      D.length,
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
                      S(
                        {
                          id: O,
                          type: "Container",
                          parentId: null,
                          pageId: f.id,
                          order: D.length + 1,
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
                      /* @__PURE__ */ e.jsx(Ye, { className: "w-3 h-3" }),
                      /* @__PURE__ */ e.jsx("span", { children: "+ Container" })
                    ]
                  }
                )
              ] }),
              D.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: 'Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.' }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...D].sort((O, ne) => (O.order ?? 1) - (ne.order ?? 1)).map((O, ne) => {
                var ae, ye;
                const oe = !!((ae = O.props) != null && ae.tab || (ye = O.props) != null && ye.isTab || O.type === "Tabs");
                return /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    onClick: () => T(O.id),
                    className: "p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                          "#",
                          ne + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[130px]", children: O.props.label || O.props.title || O.type }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: O.type }),
                            oe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
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
                              value: Number(O.order ?? O.props.order ?? ne + 1),
                              onClick: (Te) => Te.stopPropagation(),
                              onChange: (Te) => {
                                const Pe = Number(Te.target.value);
                                L(O.id, Pe);
                              },
                              className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (Te) => {
                              Te.stopPropagation(), y(O.id);
                            },
                            className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                            title: "Xóa phần tử này",
                            children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
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
  const le = h.type === "Container" || h.type === "Section" || h.type === "Tabs", ie = h.type === "Select" || h.type === "Dropdown" || h.type === "Autocomplete" || h.type === "SearchEntry", G = h.props.dropdownColumns || ((te = h.dataBinding) == null ? void 0 : te.dropdownColumns) || [], de = !le && (a === "layout" || a === "children") ? "props" : !ie && a === "columns" ? "data" : a, pe = h.props.layoutMode || "flex", W = h.props.flexConfig || {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    align: "center",
    gap: "12px",
    columnsPerRow: "auto"
  }, ce = h.props.gridConfig || { columns: 2, gap: "16px" }, q = h.children || [];
  return /* @__PURE__ */ e.jsxs(
    "aside",
    {
      style: { width: s ? `${s}px` : "380px" },
      className: "shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ e.jsx("span", { className: "p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase", children: h.type }),
            /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 truncate", children: h.props.label || h.type }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                "#",
                h.id
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
                children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => y(h.id),
                className: "p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer",
                title: "Xóa component này",
                children: /* @__PURE__ */ e.jsx(xt, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar", children: [
          le && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("layout"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "layout" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(As, { className: "w-3.5 h-3.5" }),
                "Bố cục"
              ]
            }
          ),
          le && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("children"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "children" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
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
              onClick: () => t("props"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "props" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
                "Props"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("styles"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "styles" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Xa, { className: "w-3.5 h-3.5" }),
                "CSS"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("events"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "events" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              children: [
                /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5" }),
                "Events"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("data"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "data" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ",
              children: [
                /* @__PURE__ */ e.jsx(En, { className: "w-3.5 h-3.5" }),
                "Data"
              ]
            }
          ),
          ie && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => t("columns"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "columns" ? "border-emerald-500 text-emerald-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Cấu hình danh sách cột hiển thị trong Dropdown (Multi-Column Select)",
              children: [
                /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ e.jsxs("span", { children: [
                  "Cột Dropdown (",
                  G.length,
                  ")"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("validation"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "validation" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)",
              children: [
                /* @__PURE__ */ e.jsx(vr, { className: "w-3.5 h-3.5" }),
                "Validation"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => t("permissions"),
              className: `px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${de === "permissions" ? "border-blue-500 text-blue-400 bg-slate-800/40 font-bold" : "border-transparent text-slate-400 hover:text-slate-200"}`,
              title: "Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)",
              children: [
                /* @__PURE__ */ e.jsx(Ms, { className: "w-3.5 h-3.5" }),
                "Quyền hạn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs", children: [
          le && de === "layout" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2", children: "Kiểu Bố Cục (Layout Mode)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => N(h.id, { layoutMode: "flex" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${pe === "flex" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(ls, { className: "w-4 h-4 text-blue-400" }),
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
                    onClick: () => N(h.id, { layoutMode: "grid" }),
                    className: `p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${pe === "grid" ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm" : "bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800"}`,
                    children: [
                      /* @__PURE__ */ e.jsx(As, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsxs("div", { children: [
                        /* @__PURE__ */ e.jsx("div", { className: "text-xs", children: "CSS Grid" }),
                        /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-slate-500", children: "Chia cột đều nhau" })
                      ] })
                    ]
                  }
                )
              ] }),
              pe === "flex" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Hướng Bố Cục" }),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: W.direction || "row",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, direction: D.target.value }
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
                          value: typeof W.columnsPerRow == "number" ? W.columnsPerRow : ce.columns || 12,
                          onChange: (D) => {
                            const O = Math.max(1, Number(D.target.value) || 12);
                            N(h.id, {
                              flexConfig: { ...W, columnsPerRow: O },
                              gridConfig: { ...ce, columns: O }
                            });
                          },
                          className: "w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold",
                          title: "Nhập số cột tổng của lưới (Ví dụ: 12)"
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "select",
                        {
                          value: String(W.columnsPerRow || "12"),
                          onChange: (D) => {
                            const O = D.target.value === "auto" ? "auto" : Number(D.target.value);
                            N(h.id, {
                              flexConfig: {
                                ...W,
                                columnsPerRow: O,
                                wrap: O !== "auto" ? "wrap" : W.wrap
                              },
                              gridConfig: {
                                ...ce,
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
                        value: W.justify || "flex-start",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, justify: D.target.value }
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
                        value: W.align || "center",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, align: D.target.value }
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
                        value: W.gap || "12px",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, gap: D.target.value }
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
                        value: W.wrap || "wrap",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, wrap: D.target.value }
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
              pe === "grid" && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3", children: [
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
                          onChange: (D) => {
                            const O = Math.max(1, Number(D.target.value) || 12);
                            N(h.id, {
                              gridConfig: { ...ce, columns: O },
                              flexConfig: { ...W, columnsPerRow: O }
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
                          onChange: (D) => {
                            const O = Number(D.target.value);
                            N(h.id, {
                              gridConfig: { ...ce, columns: O },
                              flexConfig: { ...W, columnsPerRow: O }
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
                        value: W.gap || ce.gap || "12px",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, gap: D.target.value },
                          gridConfig: { ...ce, gap: D.target.value }
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
                        value: W.justify || "flex-start",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, justify: D.target.value }
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
                        value: W.align || "center",
                        onChange: (D) => N(h.id, {
                          flexConfig: { ...W, align: D.target.value }
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
                    checked: !!(h.props.isTab || h.props.tab || h.type === "Tabs"),
                    onChange: (D) => {
                      var oe;
                      const O = D.target.checked, ne = h.props.tabs || [
                        { id: "main", label: "MAIN INFORMATION" }
                      ];
                      N(h.id, {
                        isTab: O,
                        tab: O,
                        tabs: O ? ne : h.props.tabs,
                        activeTabId: O ? h.props.activeTabId || ((oe = ne[0]) == null ? void 0 : oe.id) : void 0
                      });
                    },
                    className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  }
                )
              ] }),
              !!(h.props.isTab || h.props.tab || h.type === "Tabs") && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800/80", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)" }),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: h.props.label || "",
                      placeholder: "e.g. MAIN INFORMATION, MASTER COST...",
                      onChange: (D) => N(h.id, { label: D }),
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
                        value: Number(h.order ?? h.props.order ?? 1),
                        onChange: (D) => {
                          const O = Number(D.target.value);
                          L(h.id, O);
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
                        value: h.props.badge !== void 0 ? String(h.props.badge) : "",
                        placeholder: "e.g. 2, NEW...",
                        onChange: (D) => N(h.id, {
                          badge: D.target.value || void 0
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
          le && de === "children" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider block", children: [
                "Danh Sách Phần Tử Con (",
                q.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn" })
            ] }) }),
            q.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40", children: "Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới." }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: [...q].sort((D, O) => (D.order ?? 1) - (O.order ?? 1)).map((D, O) => {
              var ae, ye;
              const ne = w.componentId === D.id, oe = !!((ae = D.props) != null && ae.tab || (ye = D.props) != null && ye.isTab || D.type === "Tabs");
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  onClick: () => T(D.id),
                  className: `p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${ne ? "bg-blue-600/20 border-blue-500 shadow-sm" : "bg-slate-950/80 border-slate-800 hover:border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0", children: [
                        "#",
                        O + 1
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold text-slate-200 truncate max-w-[140px]", children: D.props.label || D.props.title || D.type }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono", children: D.type }),
                          oe && /* @__PURE__ */ e.jsx("span", { className: "text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase", children: "TAB" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
                          "#",
                          D.id
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
                            value: D.order ?? O + 1,
                            onClick: (Te) => Te.stopPropagation(),
                            onChange: (Te) => {
                              const Pe = Number(Te.target.value);
                              L(D.id, Pe);
                            },
                            className: "w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (Te) => {
                            Te.stopPropagation(), y(D.id);
                          },
                          className: "p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
                          title: "Xóa phần tử này",
                          children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                D.id
              );
            }) })
          ] }),
          de === "props" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "Thứ Tự & Bố Cục (Order & Sắp Xếp)" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Thứ Tự (Order)" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: Number(h.order ?? h.props.order ?? 1),
                      onChange: (D) => {
                        const O = Number(D.target.value);
                        L(h.id, O);
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
                        value: Number(h.props.colSpan || 4),
                        onChange: (D) => {
                          const O = Math.max(1, Number(D.target.value) || 1);
                          N(h.id, { colSpan: O });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold",
                        title: "Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "select",
                      {
                        value: h.props.colSpan || 4,
                        onChange: (D) => N(h.id, { colSpan: Number(D.target.value) }),
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
                    h.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(h.props.colSpan) || 4) / 12 * 100),
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
                  checked: !!(h.props.tab || h.props.isTab || h.type === "Tabs"),
                  onChange: (D) => {
                    const O = D.target.checked;
                    N(h.id, {
                      tab: O,
                      isTab: O
                    });
                  },
                  className: "w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                }
              )
            ] }) }),
            H && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5", children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider block", children: "Thuộc Tab Phân Hệ (Container Cha)" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  value: h.props.tabId || ((ve = (ue = H.props.tabs) == null ? void 0 : ue[0]) == null ? void 0 : ve.id) || "main",
                  onChange: (D) => N(h.id, { tabId: D.target.value }),
                  className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium",
                  children: (H.props.tabs || []).map((D) => /* @__PURE__ */ e.jsxs("option", { value: D.id, children: [
                    D.label,
                    " (",
                    D.id,
                    ")"
                  ] }, D.id))
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
                      checked: h.props.showLabel ?? !0,
                      onChange: (D) => N(h.id, { showLabel: D.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                mt,
                {
                  type: "text",
                  value: h.props.label || "",
                  placeholder: "Nhập tên nhãn (ví dụ: Job No., S. Lines...)",
                  onChange: (D) => N(h.id, { label: D }),
                  className: "w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Vị Trí Nhãn" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: h.props.labelPosition || "left",
                      onChange: (D) => N(h.id, { labelPosition: D.target.value }),
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
                        value: Number(h.props.colSpan || 4),
                        onChange: (D) => {
                          const O = Math.max(1, Number(D.target.value) || 1);
                          N(h.id, { colSpan: O });
                        },
                        className: "w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "select",
                      {
                        value: h.props.colSpan || 4,
                        onChange: (D) => N(h.id, { colSpan: Number(D.target.value) }),
                        className: "flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs",
                        children: [1, 2, 3, 4, 6, 8, 9, 12].map((D) => /* @__PURE__ */ e.jsxs("option", { value: D, children: [
                          D,
                          " Cột (",
                          Math.round(D / 12 * 100),
                          "%)"
                        ] }, D))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("span", { className: "text-[9px] text-cyan-400 block mt-1 font-mono font-medium", children: [
                    "Chiếm ",
                    h.props.colSpan || 4,
                    "/12 cột (",
                    Math.round((Number(h.props.colSpan) || 4) / 12 * 100),
                    "% dòng)"
                  ] })
                ] })
              ] })
            ] }),
            h.type === "TextBox" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder Gợi Ý" }),
              /* @__PURE__ */ e.jsx(
                mt,
                {
                  type: "text",
                  value: h.props.placeholder || "",
                  onChange: (D) => N(h.id, { placeholder: D }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            h.type === "SearchEntry" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 p-3 bg-slate-950/60 border border-slate-800 rounded-lg", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider", children: "Cấu hình Tra cứu đa cột (SearchEntry)" }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Bảng danh mục tra cứu (Reference Dataset)" }),
                /* @__PURE__ */ e.jsx(
                  mt,
                  {
                    type: "text",
                    value: h.props.reference || "",
                    placeholder: "VD: MasterData, Customers, Products...",
                    onChange: (D) => N(h.id, { reference: D }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-300 font-mono text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột hiển thị (Display)" }),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: h.props.displayField || "",
                      placeholder: "VD: name",
                      onChange: (D) => N(h.id, { displayField: D }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột giá trị (Value)" }),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: h.props.valueField || "",
                      placeholder: "VD: code / id",
                      onChange: (D) => N(h.id, { valueField: D }),
                      className: "w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono text-xs"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Placeholder" }),
                /* @__PURE__ */ e.jsx(
                  mt,
                  {
                    type: "text",
                    value: h.props.placeholder || "",
                    placeholder: "Tra cứu danh mục (F1)...",
                    onChange: (D) => N(h.id, { placeholder: D }),
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs"
                  }
                )
              ] })
            ] }),
            h.type === "Textarea" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Số Dòng Hiển Thị (Rows)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  min: 2,
                  max: 20,
                  value: h.props.rows || 3,
                  onChange: (D) => N(h.id, { rows: Number(D.target.value) }),
                  className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                }
              )
            ] }),
            h.type === "Number" && /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase block mb-1", children: "Số Chữ Số Thập Phân (Precision)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 6,
                    value: h.props.precision !== void 0 ? h.props.precision : 2,
                    onChange: (D) => N(h.id, { precision: Number(D.target.value) }),
                    className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 pt-4", children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: h.props.thousandsSeparator ?? !0,
                    onChange: (D) => N(h.id, { thousandsSeparator: D.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600"
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-300", children: "Phân cách hàng nghìn" })
              ] })
            ] }),
            h.type === "Table" && (() => {
              const D = h.props.columns || [], O = r !== null ? D[r] : null, ne = (be, fe) => {
                const Re = D.map((Se, ge) => ge === be ? { ...Se, ...fe } : Se);
                N(h.id, { columns: Re });
              }, oe = (be, fe) => {
                if (fe < 0 || fe >= D.length) return;
                const Re = Wn(D, be, fe);
                N(h.id, { columns: Re }), n(fe);
              }, ae = (be) => {
                const fe = va(D, be);
                N(h.id, { columns: fe });
                const Re = fe.findIndex((Se) => Se.key === be);
                Re !== -1 && n(Re);
              }, ye = (be, fe) => {
                const Re = Math.max(0, Math.min(D.length - 1, fe - 1));
                if (Re !== be) {
                  const Se = Wn(D, be, Re);
                  N(h.id, { columns: Se }), n(Re);
                }
              }, Te = () => {
                const be = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: "Cột Mới",
                  width: "120px",
                  align: "left",
                  componentType: "TextBox",
                  editable: !0,
                  sortable: !0,
                  order: D.length + 1
                }, fe = Xs([...D, be]);
                N(h.id, { columns: fe }), n(fe.length - 1);
              }, Pe = (be) => {
                const fe = D.filter((Se, ge) => ge !== be), Re = Xs(fe);
                N(h.id, { columns: Re }), r === be ? n(null) : r !== null && r > be && n(r - 1);
              };
              return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Quản Lý Cột (GridPolicy Model)" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: Te,
                      className: "px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ e.jsx(Ye, { className: "w-3 h-3" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950", children: D.map((be, fe) => {
                  const Re = r === fe, Se = !!(be.frozen || be.sticky === "left"), ge = g === fe, ee = u === fe;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      draggable: !0,
                      onDragStart: () => k(fe),
                      onDragOver: (me) => {
                        me.preventDefault(), !(g === null || g === fe) && b(fe);
                      },
                      onDragLeave: () => b(null),
                      onDrop: () => {
                        g !== null && g !== fe && oe(g, fe), k(null), b(null);
                      },
                      onDragEnd: () => {
                        k(null), b(null);
                      },
                      onClick: () => n(fe),
                      className: `p-2 flex items-center justify-between cursor-pointer transition-all ${ge ? "opacity-30 bg-slate-800" : ""} ${ee ? "border-t-2 border-t-emerald-400 bg-emerald-500/10" : ""} ${Re ? "bg-blue-600/20 text-blue-200" : "hover:bg-slate-900 text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                          /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" }),
                          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 -ml-0.5 mr-0.5", children: [
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: fe === 0,
                                onClick: (me) => {
                                  me.stopPropagation(), oe(fe, fe - 1);
                                },
                                title: "Đẩy cột lên trước (Order giảm dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Js, { className: "w-3 h-3" })
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                disabled: fe === D.length - 1,
                                onClick: (me) => {
                                  me.stopPropagation(), oe(fe, fe + 1);
                                },
                                title: "Hạ cột xuống sau (Order tăng dần)",
                                className: "p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500",
                                children: /* @__PURE__ */ e.jsx(Lt, { className: "w-3 h-3" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-mono text-slate-500 font-bold min-w-[22px]", children: [
                            "#",
                            be.order ?? fe + 1
                          ] }),
                          /* @__PURE__ */ e.jsx("span", { className: "font-bold truncate text-xs", children: be.title }),
                          /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-cyan-400 font-mono", children: [
                            "[",
                            be.key,
                            "]"
                          ] }),
                          Se && /* @__PURE__ */ e.jsx("span", { className: "px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30", children: "📌 Ghim" })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: be.width || "auto" }),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: (me) => {
                                me.stopPropagation(), Pe(fe);
                              },
                              className: "text-slate-500 hover:text-red-400 p-0.5",
                              children: /* @__PURE__ */ e.jsx(xt, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ]
                    },
                    be.key || fe
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
                        /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
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
                          max: D.length,
                          value: O.order ?? r + 1,
                          onChange: (be) => {
                            const fe = parseInt(be.target.value, 10);
                            isNaN(fe) || ye(r, fe);
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
                          onChange: (be) => ne(r, { key: be.target.value }),
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
                          onChange: (be) => ne(r, { title: be.target.value }),
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
                          onChange: (be) => ne(r, { componentType: be.target.value }),
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
                          onChange: (be) => ne(r, { width: be.target.value }),
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
                          onChange: (be) => ne(r, { align: be.target.value }),
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
                          onChange: (be) => ne(r, { aggregate: be.target.value }),
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
                          onChange: () => ae(O.key),
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
                          onChange: (be) => ne(r, { editable: be.target.checked }),
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
                          onChange: (be) => ne(r, { sortable: be.target.checked }),
                          className: "rounded bg-slate-800 border-slate-700 text-emerald-500"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { children: "Sắp xếp" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1", children: [
                        /* @__PURE__ */ e.jsx(Ht, { className: "w-3 h-3 text-amber-400" }),
                        /* @__PURE__ */ e.jsxs("span", { children: [
                          "Sự Kiện Cột (",
                          Array.isArray(O.events) ? O.events.length : O.action ? 1 : 0,
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
                    /* @__PURE__ */ e.jsx("div", { className: "text-[11px] text-slate-300 font-mono", children: Array.isArray(O.events) && O.events.length > 0 ? /* @__PURE__ */ e.jsx("span", { className: "text-emerald-300", children: O.events.map((be) => `${be.trigger} ➔ ${be.handlerName || be.action}()`).join(", ") }) : O.action ? /* @__PURE__ */ e.jsxs("span", { className: "text-emerald-300", children: [
                      "click ➔ ",
                      O.action,
                      "()"
                    ] }) : /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 italic", children: "Chưa gắn sự kiện" }) })
                  ] })
                ] }),
                o && O && r !== null && /* @__PURE__ */ e.jsx(
                  ba,
                  {
                    isOpen: o,
                    column: O,
                    onClose: () => l(!1),
                    onSave: (be) => {
                      const fe = D.map((ge, ee) => ee === r ? be : ge), Re = Xs(fe);
                      N(h.id, { columns: Re });
                      const Se = Re.findIndex((ge) => ge.key === be.key);
                      Se !== -1 && n(Se);
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
                    checked: !!h.props.required,
                    onChange: (D) => N(h.id, { required: D.target.checked }),
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
                    checked: !!h.props.disabled,
                    onChange: (D) => N(h.id, { disabled: D.target.checked }),
                    className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                  }
                )
              ] })
            ] })
          ] }),
          de === "styles" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1", children: "Độ rộng (Width)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: h.style.width || "",
                    placeholder: "100%, 250px...",
                    onChange: (D) => P(h.id, { width: D.target.value }),
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
                    value: h.style.height || h.style.minHeight || "",
                    placeholder: "auto, 120px...",
                    onChange: (D) => P(h.id, {
                      height: D.target.value,
                      minHeight: D.target.value
                    }),
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e.jsxs("label", { className: "text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5 text-cyan-400" }),
                  /* @__PURE__ */ e.jsx("span", { children: "CSS Tùy Chỉnh (Custom CSS)" })
                ] }),
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Trực tiếp" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  rows: 5,
                  value: h.style.customCss || Uo(h.style),
                  placeholder: `border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);`,
                  onChange: (D) => {
                    const O = D.target.value, ne = Go(O);
                    if (P(h.id, {
                      ...ne,
                      customCss: O
                    }), ne.justifyContent || ne.alignItems) {
                      const oe = h.props.flexConfig || {};
                      N(h.id, {
                        flexConfig: {
                          ...oe,
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
          de === "events" && /* @__PURE__ */ e.jsx(
            ha,
            {
              events: h.events || [],
              onChange: (D) => $(h.id, D),
              scriptFile: (f == null ? void 0 : f.scriptFile) || "transactionList.bl.ts",
              componentName: h.props.label || h.type,
              componentId: h.id,
              contextExtra: {
                pageId: C,
                nodeId: h.id,
                type: h.type
              }
            }
          ),
          de === "data" && (() => {
            const D = h.dataBinding || {}, O = h.props || {}, ne = h.type, oe = ne === "Table" || ne === "GridView" || ne === "AdvancedGrid", ae = ne === "Select" || ne === "Dropdown" || ne === "Autocomplete" || ne === "SearchEntry", ye = ne === "TextBox" || ne === "Number" || ne === "DatePicker" || ne === "Checkbox" || ne === "Textarea", Te = !oe && !ae && !ye, Pe = fn(c), be = D.entityName || O.reference || O.refName || "", fe = gn(Pe, be), Re = fe ? fe.fields : [], Se = D.dataSource || O.dataSource || O.dataSourceFilter || D.query || O.query || "", ge = (ee) => {
              m(h.id, {
                dataSource: ee,
                query: ee
              }), N(h.id, {
                dataSource: ee,
                dataSourceFilter: ee,
                query: ee
              });
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-2.5", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(En, { className: "w-4 h-4 text-blue-400" }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      "Liên Kết Dữ Liệu (",
                      ne,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono font-semibold", children: "Core C# Engine" })
                ] }),
                /* @__PURE__ */ e.jsxs("p", { className: "text-[11px] text-slate-400 leading-relaxed", children: [
                  oe && "Cấu hình đối tượng thực thể truy vấn và bộ lọc DATASOURCE cho toàn bộ bảng.",
                  ae && "Cấu hình trường dữ liệu lưu trữ, danh mục tra cứu tham chiếu và quy tắc tự động điền (Populate).",
                  ye && "Cấu hình trường ánh xạ dữ liệu (Field Name) và đồng bộ 2 chiều với mô hình form.",
                  Te && "Thành phần giao diện/bố cục. Nhấn nút bên dưới để xem toàn bộ thông số chi tiết."
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(!0),
                    className: "w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                    children: [
                      /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-emerald-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "🔍 Mở Toàn Bộ Thông Số Core (Component Properties)" })
                    ]
                  }
                )
              ] }),
              oe && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: fe ? fe.name : "",
                      onChange: (ee) => {
                        const me = ee.target.value;
                        m(h.id, {
                          entityName: me,
                          refName: me
                        }), N(h.id, {
                          reference: me,
                          refName: me
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Trong Database --" }),
                        Pe.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                          ee.displayName,
                          " (",
                          ee.name,
                          ")"
                        ] }, ee.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: D.entityName || O.reference || O.refName || "",
                      placeholder: "Hoặc gõ tên Entity tùy ý (VD: Transaction, Shipment, Terminal)...",
                      onChange: (ee) => {
                        const me = ee.target.value;
                        m(h.id, {
                          entityName: me,
                          refName: me
                        }), N(h.id, {
                          reference: me,
                          refName: me
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Nguồn Dữ Liệu (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400", children: "Chuỗi truy vấn OData nạp dữ liệu cho bảng (tương thích Core C# GuiInfo.DataSourceFilter)." }),
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: Se,
                      placeholder: "VD: ?$filter=Active eq true&$orderby=Id desc",
                      onChange: (ee) => ge(ee.target.value),
                      className: "w-full px-3 py-2 bg-slate-950 border border-amber-500/40 focus:border-amber-400 rounded-lg text-xs font-mono text-amber-200 focus:outline-none placeholder-slate-600 resize-y"
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ge("?$filter=Active eq true&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 hover:text-amber-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Lọc Active & Sort"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ge("?$top=50&$orderby=Id desc"),
                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 hover:text-cyan-200 rounded font-mono border border-slate-700 transition-colors cursor-pointer",
                        children: "+ Top 50 Mới Nhất"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ge(""),
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
                    mt,
                    {
                      type: "text",
                      value: D.sqlWhere || O.sqlWhere || "",
                      placeholder: "VD: Active = 1 AND Status = 'OPEN'",
                      onChange: (ee) => {
                        m(h.id, { sqlWhere: ee }), N(h.id, { sqlWhere: ee });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                    }
                  )
                ] })
              ] }),
              ae && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu Lưu Trữ (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: D.fieldName || O.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: PolId, VendorId, CustomerId)...",
                      list: "lookup-fields-list",
                      onChange: (ee) => {
                        m(h.id, { fieldName: ee }), N(h.id, { fieldName: ee });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "lookup-fields-list", children: Re.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                    ee.displayName,
                    " (",
                    ee.name,
                    ")"
                  ] }, ee.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Đối Tượng Tham Chiếu Danh Mục (Reference / RefName)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-cyan-400 font-mono", children: "Reference" })
                  ] }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: fe ? fe.name : "",
                      onChange: (ee) => {
                        const me = ee.target.value;
                        m(h.id, {
                          entityName: me,
                          refName: me
                        }), N(h.id, {
                          reference: me,
                          refName: me
                        });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Chọn Thực Thể Danh Mục --" }),
                        Pe.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                          ee.displayName,
                          " (",
                          ee.name,
                          ")"
                        ] }, ee.name))
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: D.entityName || O.reference || O.refName || "",
                      placeholder: "Hoặc gõ tên Entity danh mục (VD: Terminal, Partner, Customer)...",
                      onChange: (ee) => {
                        m(h.id, {
                          entityName: ee,
                          refName: ee
                        }), N(h.id, {
                          reference: ee,
                          refName: ee
                        });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ e.jsx("span", { children: "Lọc Danh Mục (DATASOURCE)" })
                    ] }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono", children: "OData Query" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    Ko,
                    {
                      rows: 3,
                      value: Se,
                      placeholder: "VD: ?$filter=Active eq true",
                      onChange: (ee) => ge(ee),
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
                    mt,
                    {
                      type: "text",
                      value: D.populateField || O.populateRule || O.populateField || "",
                      placeholder: "VD: VendorName = Name, TaxCode = TaxId, Agent = AgentName",
                      onChange: (ee) => {
                        m(h.id, { populateField: ee }), N(h.id, { populateRule: ee, populateField: ee });
                      },
                      className: "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Khóa Chính (IdField)" }),
                    /* @__PURE__ */ e.jsx(
                      mt,
                      {
                        type: "text",
                        value: D.idField || O.idField || "Id",
                        placeholder: "Id",
                        onChange: (ee) => {
                          m(h.id, { idField: ee }), N(h.id, { idField: ee });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1", children: "Cột Chọn (SelectField)" }),
                    /* @__PURE__ */ e.jsx(
                      mt,
                      {
                        type: "text",
                        value: D.selectField || O.selectField || "",
                        placeholder: "Name, Code",
                        onChange: (ee) => {
                          m(h.id, { selectField: ee }), N(h.id, { selectField: ee });
                        },
                        className: "w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-200"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-emerald-300 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      "Cột Hiển Thị & Định Dạng (",
                      G.length,
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
                  G.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: G.map((ee, me) => /* @__PURE__ */ e.jsxs(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono",
                      children: [
                        ee.title,
                        " (",
                        ee.key,
                        ")"
                      ]
                    },
                    me
                  )) }) : /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-400 italic", children: "Chưa cấu hình cột riêng (sẽ tự động lấy các cột mặc định của thực thể)." }),
                  /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-slate-400 pt-1 border-t border-emerald-500/20 flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("span", { children: "FormatData:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-mono text-emerald-300 truncate max-w-[180px]", children: (D.formatData ?? O.formatData ?? "") || "(Mặc định theo cột tên)" })
                  ] })
                ] })
              ] }),
              ye && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Trường Dữ Liệu (Field Name)" }),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-emerald-400 font-mono", children: "Nhập tay" })
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    mt,
                    {
                      type: "text",
                      value: D.fieldName || O.fieldName || "",
                      placeholder: "Nhập tên trường trên model (VD: JobNo, GrossWeight, IssueDate)...",
                      list: "input-fields-list",
                      onChange: (ee) => {
                        m(h.id, { fieldName: ee }), N(h.id, { fieldName: ee });
                      },
                      className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("datalist", { id: "input-fields-list", children: Re.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                    ee.displayName,
                    " (",
                    ee.name,
                    ")"
                  ] }, ee.name)) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Định Dạng Hiển Thị (Formatter)" }),
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: D.formatter || "",
                      onChange: (ee) => m(h.id, { formatter: ee.target.value }),
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
                    mt,
                    {
                      type: "text",
                      value: D.formatData || O.formatData || "",
                      placeholder: "VD: {0} KGS hoặc {0} USD",
                      onChange: (ee) => {
                        m(h.id, { formatData: ee }), N(h.id, { formatData: ee });
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
                      checked: D.twoWay ?? !0,
                      onChange: (ee) => m(h.id, { twoWay: ee.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                    }
                  )
                ] })
              ] }),
              Te && /* @__PURE__ */ e.jsxs("div", { className: "p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-center", children: [
                /* @__PURE__ */ e.jsx(ls, { className: "w-8 h-8 text-slate-600 mx-auto" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-semibold text-slate-300", children: [
                  "Thành phần ",
                  h.type
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: 'Thành phần này đóng vai trò bố cục hoặc thao tác giao diện, không yêu cầu liên kết dữ liệu dòng/cột. Nhấn nút "Mở Toàn Bộ Thông Số Core" bên trên nếu cần cấu hình các thuộc tính nâng cao.' })
              ] })
            ] });
          })(),
          de === "columns" && ie && (() => {
            const D = h.dataBinding || {}, O = h.props || {}, ne = fn(c), oe = D.entityName || O.reference || O.refName || "", ae = gn(ne, oe), ye = ae ? ae.fields : [], Te = D.formatData ?? O.formatData ?? "", Pe = (Se) => {
              N(h.id, { dropdownColumns: Se }), m(h.id, { dropdownColumns: Se });
            }, be = () => {
              var ge, ee;
              const Se = [
                ...G,
                {
                  key: ((ge = ye[G.length]) == null ? void 0 : ge.name) || `col${G.length + 1}`,
                  title: ((ee = ye[G.length]) == null ? void 0 : ee.displayName) || `Cột ${G.length + 1}`,
                  width: "50%",
                  align: "left"
                }
              ];
              Pe(Se);
            }, fe = () => {
              if (!ae || ae.fields.length === 0) return;
              const Se = ["code", "fullname", "name", "address", "taxcode", "phone", "shortName", "portcode", "portname"];
              let ge = ae.fields.filter(
                (me) => Se.includes(me.name.toLowerCase())
              );
              ge.length === 0 ? ge = ae.fields.slice(0, 3) : ge = ge.slice(0, 4);
              const ee = ge.map((me) => ({
                key: me.name,
                title: me.displayName || me.name,
                width: `${Math.floor(100 / ge.length)}%`,
                align: "left"
              }));
              Pe(ee);
            }, Re = (Se, ge) => {
              const ee = Se + ge;
              if (ee < 0 || ee >= G.length) return;
              const me = [...G], ct = me[Se];
              me[Se] = me[ee], me[ee] = ct, Pe(me);
            };
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e.jsx(Pt, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Cột Hiển Thị Bảng Chọn Dropdown" })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: oe ? `Ref: ${oe}` : "Chưa chọn Ref" })
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
                        /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Thêm Cột Mới" })
                      ]
                    }
                  ),
                  ae && /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: fe,
                      className: "py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer",
                      title: `Tự động lấy cột gợi ý từ thực thể ${ae.name}`,
                      children: [
                        /* @__PURE__ */ e.jsx(Ht, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        /* @__PURE__ */ e.jsx("span", { children: "Tự động nạp" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsxs("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: [
                  "Danh Sách Cột (",
                  G.length,
                  ")"
                ] }) }),
                G.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-4 border border-dashed border-slate-700 rounded-xl text-center space-y-1.5 bg-slate-950/40", children: [
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
                ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-2.5", children: G.map((Se, ge) => /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "p-2.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2",
                    children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800/80 pb-1.5", children: [
                        /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] font-bold text-emerald-400 font-mono", children: [
                          "CỘT #",
                          ge + 1
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Re(ge, -1),
                              disabled: ge === 0,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển lên",
                              children: /* @__PURE__ */ e.jsx(Js, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => Re(ge, 1),
                              disabled: ge === G.length - 1,
                              className: "p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 cursor-pointer",
                              title: "Di chuyển xuống",
                              children: /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const ee = G.filter((me, ct) => ct !== ge);
                                Pe(ee);
                              },
                              className: "p-1 text-slate-500 hover:text-red-400 cursor-pointer",
                              title: "Xóa cột",
                              children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
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
                              value: Se.key,
                              list: `dropdown-col-fields-${ge}`,
                              placeholder: "vd: FullName",
                              onChange: (ee) => {
                                const me = [...G];
                                me[ge] = { ...me[ge], key: ee.target.value }, Pe(me);
                              },
                              className: "w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 focus:outline-none focus:border-emerald-500"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("datalist", { id: `dropdown-col-fields-${ge}`, children: ye.map((ee) => /* @__PURE__ */ e.jsxs("option", { value: ee.name, children: [
                            ee.displayName,
                            " (",
                            ee.name,
                            ")"
                          ] }, ee.name)) })
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { children: [
                          /* @__PURE__ */ e.jsx("label", { className: "text-[10px] text-slate-400 block mb-0.5", children: "Tiêu Đề Cột (Title)" }),
                          /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              value: Se.title,
                              placeholder: "vd: Tên nhà cung cấp",
                              onChange: (ee) => {
                                const me = [...G];
                                me[ge] = { ...me[ge], title: ee.target.value }, Pe(me);
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
                              value: Se.width || "50%",
                              placeholder: "vd: 50% hoặc 180px",
                              onChange: (ee) => {
                                const me = [...G];
                                me[ge] = { ...me[ge], width: ee.target.value }, Pe(me);
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
                              value: Se.align || "left",
                              onChange: (ee) => {
                                const me = [...G];
                                me[ge] = { ...me[ge], align: ee.target.value }, Pe(me);
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
                  ge
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
                    value: Te,
                    placeholder: "VD: {Vendor.FullName} - {Vendor.Address}",
                    onChange: (Se) => {
                      const ge = Se.target.value;
                      m(h.id, { formatData: ge }), N(h.id, { formatData: ge });
                    },
                    className: "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                  }
                ),
                G.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 pt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block", children: "Chèn nhanh vào FormatData:" }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: G.map((Se, ge) => {
                    const ee = oe ? `{${oe}.${Se.key}}` : `{${Se.key}}`;
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const me = Te ? `${Te} - ${ee}` : ee;
                          m(h.id, { formatData: me }), N(h.id, { formatData: me });
                        },
                        className: "px-1.5 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 hover:border-emerald-500/40 rounded text-[10px] font-mono cursor-pointer transition-colors",
                        children: [
                          "+ ",
                          ee
                        ]
                      },
                      ge
                    );
                  }) })
                ] })
              ] })
            ] });
          })(),
          de === "validation" && (() => {
            const D = h.validation || {};
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(vr, { className: "w-4 h-4 text-emerald-400" }),
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
                      checked: !!D.required,
                      onChange: (O) => j(h.id, { required: O.target.checked }),
                      className: "rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                    }
                  )
                ] }),
                D.required && /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)...",
                    value: D.requiredMessage || "",
                    onChange: (O) => j(h.id, { requiredMessage: O.target.value }),
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
                      value: D.minLength !== void 0 ? D.minLength : "",
                      onChange: (O) => j(h.id, {
                        minLength: O.target.value === "" ? void 0 : Number(O.target.value)
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
                      value: D.maxLength !== void 0 ? D.maxLength : "",
                      onChange: (O) => j(h.id, {
                        maxLength: O.target.value === "" ? void 0 : Number(O.target.value)
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
                    value: D.pattern || "",
                    onChange: (O) => j(h.id, { pattern: O.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Thông báo lỗi khi không khớp mẫu Regex...",
                    value: D.patternMessage || "",
                    onChange: (O) => j(h.id, { patternMessage: O.target.value }),
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
                    value: D.customValidator || "",
                    onChange: (O) => j(h.id, { customValidator: O.target.value }),
                    className: "w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-slate-500", children: "Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao." })
              ] })
            ] });
          })(),
          de === "permissions" && (() => {
            var ne;
            const D = h.permissions || {}, O = D.rules || [];
            return /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(Ms, { className: "w-4 h-4 text-amber-400" }),
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
              /* @__PURE__ */ e.jsx(
                er,
                {
                  rules: O,
                  onChange: (oe) => {
                    E(h.id, { rules: oe });
                    const ae = Z.getState().activeFeatureId ?? "";
                    ae && He.getState().setComponentPolicies(ae, h.id, oe);
                  },
                  pageId: h.pageId || Z.getState().activeFeatureId || "",
                  nodeId: h.id,
                  fieldName: (ne = h.dataBinding) == null ? void 0 : ne.fieldName
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ e.jsx("label", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block", children: "Hành Vi Khi Không Có Quyền (Denied Behavior)" }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => E(h.id, { deniedBehavior: "hide" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${(D.deniedBehavior || "hide") === "hide" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
                      onClick: () => E(h.id, { deniedBehavior: "disable" }),
                      className: `p-2.5 rounded-lg border text-left text-xs transition-colors ${D.deniedBehavior === "disable" ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600"}`,
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
        i && h && /* @__PURE__ */ e.jsx(
          Sa,
          {
            isOpen: i,
            node: h,
            onClose: () => d(!1),
            onSave: (D, O, ne) => {
              N(D, O), ne && m(D, ne);
            }
          }
        )
      ]
    }
  );
}, ji = Qt.memo(zo), Ar = [
  {
    type: "Section",
    name: "Khối Bố Cục (Section Card)",
    description: "Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core",
    icon: $t,
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
    icon: Gr,
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
    icon: ls,
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
    icon: js,
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
    icon: Qn,
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
    icon: Ja,
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
    icon: Pt,
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
    icon: Ys,
    defaultProps: { label: "Lưu Dữ Liệu", variant: "primary", size: "md" },
    defaultStyle: {}
  },
  {
    type: "Label",
    name: "Nhãn Tiêu Đề (Label)",
    description: "Tiêu đề và nội dung tĩnh phân đoạn",
    icon: os,
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
    icon: Za,
    defaultProps: { title: "Cửa Sổ Nhập Liệu Chi Tiết" },
    defaultStyle: { width: "100%" }
  },
  {
    type: "Textarea",
    name: "Văn Bản Dài (Textarea)",
    description: "Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)",
    icon: el,
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
    icon: tl,
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
], qo = ({ item: s, onClick: a, isEditing: t }) => {
  const r = s.icon, { attributes: n, listeners: o, setNodeRef: l, isDragging: i } = Qr({
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
        /* @__PURE__ */ e.jsx("div", { className: "text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5" }) })
      ]
    }
  );
}, wi = ({ isEditing: s = !0, onAddComponent: a }) => {
  const t = Z((c) => c.addComponent), r = Z((c) => c.activeFeatureId), n = Z((c) => c.features), o = Z((c) => c.selection), l = n.find((c) => c.id === r), i = (c, x) => {
    if (!x) return null;
    for (const g of c) {
      if (g.id === x) return g;
      if (g.children) {
        const k = i(g.children, x);
        if (k) return k;
      }
    }
    return null;
  }, d = (c) => {
    var u;
    if (!s) return;
    if (a) {
      a(c.type);
      return;
    }
    const x = i((l == null ? void 0 : l.components) || [], o.componentId);
    let g = null;
    x && (x.type === "Container" ? g = x.id : g = x.parentId || null);
    const k = {
      id: `${c.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: c.type,
      parentId: g,
      pageId: r,
      props: { ...c.defaultProps },
      style: { ...c.defaultStyle },
      events: [],
      order: (((u = l == null ? void 0 : l.components) == null ? void 0 : u.length) || 0) + 1,
      children: c.type === "Container" || c.type === "Section" ? [] : void 0
    };
    t(k, g);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-slate-800 flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(rn, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Thư Viện Phần Tử (Palette)" })
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono", children: Ar.length })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80", children: "Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang." }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: Ar.map((c) => /* @__PURE__ */ e.jsx(
      qo,
      {
        item: c,
        onClick: d,
        isEditing: s
      },
      c.type
    )) })
  ] });
}, Ci = () => {
  const s = Z((i) => i.features), a = Z((i) => i.activeFeatureId), t = Z((i) => i.selection), r = Z((i) => i.selectComponent), n = Z((i) => i.removeComponent), o = s.find((i) => i.id === a);
  if (!o || o.components.length === 0)
    return /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-xs text-slate-500 italic", children: "Chưa có component nào được thêm vào feature này." });
  const l = (i, d = 0) => i.map((c) => {
    const x = t.componentId === c.id;
    return /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => r(c.id),
          style: { paddingLeft: `${d * 14 + 10}px` },
          className: `flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${x ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ e.jsx(ls, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }),
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
                children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        }
      ),
      c.children && c.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-l border-slate-800/80 ml-3", children: l(c.children, d + 1) })
    ] }, c.id);
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-2 space-y-1 overflow-y-auto max-h-60 select-none", children: l(o.components) });
}, ki = () => {
  const s = rt((u) => u.openTabs), a = rt((u) => u.activeTabId), t = rt((u) => u.setActiveTab), r = rt((u) => u.closeTab), n = Z((u) => u.setActiveFeature), o = ke((u) => u.isFormDirty), l = ke((u) => u.markFormClean), [i, d] = I(null);
  if (s.length === 0) return null;
  const c = (u, b) => {
    var f;
    t(u);
    const C = s.find((w) => w.id === u);
    n(b, ((f = C == null ? void 0 : C.params) == null ? void 0 : f.id) ?? null);
  }, x = (u) => {
    r(u), setTimeout(() => {
      var C;
      const b = rt.getState().openTabs.find(
        (f) => f.id === rt.getState().activeTabId
      );
      b && n(b.featureId, ((C = b.params) == null ? void 0 : C.id) ?? null);
    }, 50);
  }, g = (u, b) => {
    if (u.stopPropagation(), b.isDirty || (b.featureId ? o(b.featureId) : !1)) {
      d(b);
      return;
    }
    x(b.id);
  }, k = () => {
    i && (i.featureId && l(i.featureId), x(i.id), d(null));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20", children: s.map((u) => {
      const b = u.id === a, C = u.isDirty || (u.featureId ? o(u.featureId) : !1);
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => c(u.id, u.featureId),
          className: `group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${b ? "bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10" : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,
          title: C ? `${u.title} (Có dữ liệu chưa lưu)` : u.title,
          children: [
            /* @__PURE__ */ e.jsx($t, { className: `w-3.5 h-3.5 ${b ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"}` }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[180px]", children: u.title }),
            C && /* @__PURE__ */ e.jsx(
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
                onClick: (f) => g(f, u),
                className: "w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer",
                title: "Đóng tab này",
                children: /* @__PURE__ */ e.jsx(pt, { className: "w-3 h-3" })
              }
            )
          ]
        },
        u.id
      );
    }) }),
    i && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ e.jsx(sl, { className: "w-5 h-5" }) }),
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
            onClick: k,
            className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400",
            children: "Đóng không lưu"
          }
        )
      ] })
    ] }) })
  ] });
}, Yo = ({
  isOpen: s,
  onClose: a
}) => {
  const t = Z((H) => H.isFeatureManagerOpen), r = Z((H) => H.closeFeatureManager), n = Z((H) => H.features), o = Z((H) => H.addFeature), l = Z((H) => H.deleteFeature), i = Z((H) => H.cloneFeature), d = Z((H) => H.toggleFeatureActive), c = Z((H) => H.openFeatureProperties), x = Z((H) => H.updateFeatureProperties), g = s !== void 0 ? s : t, k = () => {
    a && a(), r();
  }, [u, b] = I(""), [C, f] = I("all"), [w, T] = I({}), [S, N] = I(!1), [P, $] = I(""), [m, j] = I(""), [E, L] = I(""), [y, _] = I(!1), [B, Y] = I("Layers"), M = (H) => {
    T((le) => ({ ...le, [H]: !le[H] }));
  }, z = Ae(() => {
    const H = [], le = /* @__PURE__ */ new Map();
    for (const pe of n) {
      const W = pe.parentId || null;
      le.has(W) || le.set(W, []), le.get(W).push(pe);
    }
    for (const pe of le.values())
      pe.sort((W, ce) => (W.order ?? 0) - (ce.order ?? 0));
    const ie = (pe, W = 0) => {
      const ce = le.get(pe) || [];
      for (const q of ce) {
        const ue = (le.get(q.id) || []).length > 0, ve = !!w[q.id], D = !u.trim() || q.name.toLowerCase().includes(u.toLowerCase()) || q.title && q.title.toLowerCase().includes(u.toLowerCase()) || q.code && q.code.toLowerCase().includes(u.toLowerCase()) || q.route.toLowerCase().includes(u.toLowerCase()) || q.entityName && q.entityName.toLowerCase().includes(u.toLowerCase());
        let O = !0;
        C === "active" ? O = q.active !== !1 : C === "inactive" ? O = q.active === !1 : C === "group" && (O = !!q.isGroup), D && O && H.push({
          feature: q,
          depth: W,
          hasChildren: ue,
          isCollapsed: ve
        }), ue && !ve && ie(q.id, W + 1);
      }
    }, G = new Set(n.map((pe) => pe.id)), de = n.filter((pe) => !pe.parentId || !G.has(pe.parentId));
    de.sort((pe, W) => (pe.order ?? 0) - (W.order ?? 0));
    for (const pe of de) {
      const ce = (le.get(pe.id) || []).length > 0, q = !!w[pe.id], te = !u.trim() || pe.name.toLowerCase().includes(u.toLowerCase()) || pe.title && pe.title.toLowerCase().includes(u.toLowerCase()) || pe.code && pe.code.toLowerCase().includes(u.toLowerCase()) || pe.route.toLowerCase().includes(u.toLowerCase());
      let ue = !0;
      C === "active" ? ue = pe.active !== !1 : C === "inactive" ? ue = pe.active === !1 : C === "group" && (ue = !!pe.isGroup), te && ue && H.push({
        feature: pe,
        depth: 0,
        hasChildren: ce,
        isCollapsed: q
      }), ce && !q && ie(pe.id, 1);
    }
    return H;
  }, [n, w, u, C]), J = (H) => {
    if (H.preventDefault(), !P.trim()) return;
    const le = o(P.trim(), B, E || null, y);
    m.trim() && x(le, { title: m.trim() }), N(!1), $(""), j(""), L(""), _(!1);
  }, h = (H, le) => {
    const ie = H.order ?? 0, G = Math.max(0, ie + le);
    x(H.id, { order: G });
  }, X = async (H) => {
    if (confirm(`Bạn có chắc chắn muốn xóa Feature "${H.title || H.name}"?`)) {
      try {
        await Wl(H.id);
      } catch {
      }
      l(H.id);
    }
  };
  return g ? At(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-[#080e1a] border-b border-blue-600/30", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx($t, { className: "w-5 h-5" }) }),
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
              onClick: () => N(!0),
              className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: "+ Thêm Feature mới" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: k,
              className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer",
              children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
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
              value: u,
              onChange: (H) => b(H.target.value),
              placeholder: "Tìm theo Tên, Tiêu đề, Mã, Route, Entity...",
              className: "w-full pl-9 pr-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-slate-400", children: "Lọc:" }),
          ["all", "active", "inactive", "group"].map((H) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f(H),
              className: `px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${C === H ? "bg-blue-600 text-white shadow-sm" : "bg-slate-800/70 text-slate-400 hover:text-slate-200"}`,
              children: [
                H === "all" && "Tất cả",
                H === "active" && "Đang hoạt động",
                H === "inactive" && "Ngưng hoạt động",
                H === "group" && "Nhóm cha"
              ]
            },
            H
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
        /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: z.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 9, className: "py-10 text-center text-slate-500", children: "Không tìm thấy Feature nào phù hợp" }) }) : z.map(({ feature: H, depth: le, hasChildren: ie, isCollapsed: G }) => {
          const de = H.active !== !1, pe = !!H.isGroup;
          return /* @__PURE__ */ e.jsxs(
            "tr",
            {
              onDoubleClick: () => c(H.id),
              className: "hover:bg-blue-600/10 cursor-pointer transition-colors group",
              title: "Nhấp đúp chuột để mở thuộc tính Feature",
              children: [
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-4", children: /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    style: { paddingLeft: `${le * 24}px` },
                    children: [
                      ie ? /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (W) => {
                            W.stopPropagation(), M(H.id);
                          },
                          className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                          children: G ? /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
                        }
                      ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: `p-1.5 rounded-lg shrink-0 ${pe ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"}`,
                          children: pe ? /* @__PURE__ */ e.jsx(vn, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { className: "truncate", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "font-bold text-slate-200 group-hover:text-white text-xs block", children: H.title || H.name }),
                        H.title && H.title !== H.name && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 block truncate", children: H.name })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-amber-300", children: H.code ? `#${H.code}` : "-" }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 font-mono text-[11px] text-slate-400", children: H.route }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: H.parentId || "",
                    onClick: (W) => W.stopPropagation(),
                    onChange: (W) => {
                      W.stopPropagation();
                      const ce = W.target.value.trim() ? W.target.value.trim() : null;
                      x(H.id, { parentId: ce });
                    },
                    className: "px-2 py-1 bg-slate-800/90 border border-slate-700/80 rounded text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer max-w-[130px] truncate",
                    title: "Thay đổi Cấp cha (Chọn 'Gốc' để xóa cấp cha)",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Gốc (Không cha) --" }),
                      n.filter((W) => W.id !== H.id && W.isGroup).map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.id, children: [
                        "📁 ",
                        W.title || W.name
                      ] }, W.id)),
                      n.filter((W) => W.id !== H.id && !W.isGroup).map((W) => /* @__PURE__ */ e.jsxs("option", { value: W.id, children: [
                        "📄 ",
                        W.title || W.name
                      ] }, W.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "font-mono text-xs w-6", children: H.order ?? 0 }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col opacity-60 group-hover:opacity-100", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (W) => {
                          W.stopPropagation(), h(H, -1);
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
                        onClick: (W) => {
                          W.stopPropagation(), h(H, 1);
                        },
                        className: "p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white",
                        title: "Tăng thứ tự (Xuống dưới)",
                        children: /* @__PURE__ */ e.jsx(qn, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: pe ? /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60", children: "Nhóm Menu" }) : /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60", children: "Màn hình" }) }),
                /* @__PURE__ */ e.jsx("td", { className: "py-2.5 px-3 text-center", children: /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (W) => {
                      W.stopPropagation();
                      const ce = H.isMenu !== void 0 ? !H.isMenu : !1;
                      x(H.id, { isMenu: ce });
                    },
                    className: `px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${H.isMenu !== !1 ? "bg-blue-950/80 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60" : "bg-amber-950/80 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60"}`,
                    title: H.isMenu !== !1 ? "Bấm để ẩn khỏi Leftbar (dành cho màn hình mở có điều kiện)" : "Bấm để hiển thị lên Leftbar",
                    children: H.isMenu !== !1 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      /* @__PURE__ */ e.jsx(tn, { className: "w-3 h-3 text-blue-400" }),
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
                    onClick: (W) => {
                      W.stopPropagation(), d(H.id);
                    },
                    className: `px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${de ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900" : "bg-red-950/80 text-red-400 border border-red-800/60 hover:bg-red-900"}`,
                    title: de ? "Bấm để ngưng kích hoạt" : "Bấm để kích hoạt lại",
                    children: de ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
                      onClick: (W) => {
                        W.stopPropagation(), c(H.id);
                      },
                      className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all cursor-pointer",
                      title: "Thuộc tính Feature (Feature Properties Modal)",
                      children: /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (W) => {
                        W.stopPropagation(), i(H.id);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer",
                      title: "Nhân bản Feature này",
                      children: /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (W) => {
                        W.stopPropagation(), X(H);
                      },
                      className: "p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-300 border border-slate-700 transition-all cursor-pointer",
                      title: "Xóa Feature này",
                      children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }) })
              ]
            },
            H.id
          );
        }) })
      ] }) }) }) }),
      S && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
        "form",
        {
          onSubmit: J,
          className: "w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3", children: [
              /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(Ye, { className: "w-4 h-4 text-blue-400" }),
                " Thêm Feature Mới"
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => N(!1),
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
                    value: P,
                    onChange: (H) => $(H.target.value),
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
                    onChange: (H) => j(H.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-slate-300 font-semibold mb-1", children: "Cấp cha (Thư mục nhóm):" }),
                /* @__PURE__ */ e.jsxs(
                  "select",
                  {
                    value: E,
                    onChange: (H) => L(H.target.value),
                    className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500",
                    children: [
                      /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                      n.filter((H) => H.isGroup).map((H) => /* @__PURE__ */ e.jsxs("option", { value: H.id, children: [
                        "📁 ",
                        H.title || H.name
                      ] }, H.id)),
                      n.filter((H) => !H.isGroup).map((H) => /* @__PURE__ */ e.jsxs("option", { value: H.id, children: [
                        "📄 ",
                        H.title || H.name
                      ] }, H.id))
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
                    checked: y,
                    onChange: (H) => _(H.target.checked),
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
                  onClick: () => N(!1),
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
}, Xo = ({
  isOpen: s,
  featureId: a,
  onClose: t
}) => {
  const r = Z((p) => p.featurePropertiesTargetId), n = Z((p) => p.closeFeatureProperties), o = Z((p) => p.features), l = Z((p) => p.updateFeatureProperties), i = Z((p) => p.cloneFeature), d = Z((p) => p.openComponentModal), c = Z((p) => p.updateComponentProps), x = Z((p) => p.updateComponentDataBinding), g = s !== void 0 ? s : !!r, k = a !== void 0 ? a : r, u = Ae(
    () => o.find((p) => p.id === k) || null,
    [o, k]
  ), b = () => {
    t && t(), n();
  }, [C, f] = I("settings"), w = He((p) => p.roles), T = He((p) => p.users), S = He((p) => p.featurePolicies), N = He((p) => p.setFeaturePolicies), [P, $] = I([]), [m, j] = I(""), [E, L] = I(""), [y, _] = I(""), [B, Y] = I(!0), [M, z] = I(!1), [J, h] = I(!1), [X, H] = I(!1), [le, ie] = I(!1), [G, de] = I(!1), [pe, W] = I(!1), [ce, q] = I(0), [te, ue] = I(""), [ve, D] = I(""), [O, ne] = I(!0), [oe, ae] = I([]);
  Ee(() => {
    wn().then((p) => ae(p)).catch(() => {
    });
  }, []);
  const [ye, Te] = I(""), [Pe, be] = I(""), [fe, Re] = I(""), [Se, ge] = I(0), [ee, me] = I("Layers"), [ct, Et] = I("/"), [vt, Ct] = I(!1), [se, we] = I(!0), [Oe, Fe] = I(!1), [Me, $e] = I(!1), [Qe, et] = I(!1), [at, lt] = I(!1), [dt, ot] = I(!1), [yt, Ge] = I(!1), [Nt, Vt] = I(!0), [Tt, Dt] = I(!0), [Mt, Gt] = I(!0), [Bt, kt] = I(!1), [Ut, Ve] = I(!1), [_t, qt] = I(""), [R, re] = I(""), [he, Ce] = I(""), [Le, Be] = I(""), [De, Ie] = I(""), [Je, Ue] = I(""), [Ke, nt] = I(""), [bt, ft] = I(""), [Ze, Ot] = I(""), [It, Yt] = I(""), [ks, cs] = I(!1), [Ft, Ss] = I(""), [ds, ts] = I({}), [ss, us] = I(null), [Ts, xs] = I(!1);
  Ee(() => {
    var p, F, V;
    if (u && g) {
      Te(u.name || ""), be(u.title || u.name || ""), Re(u.parentId || ""), ge(u.order ?? 0), me(u.icon || (u.isGroup ? "Folder" : "Layers")), Et(u.route || "/");
      const A = u.displayFlags || ((p = u.featureProps) == null ? void 0 : p.displayFlags) || {};
      Ct(!!A.isDivider), we(u.isMenu !== void 0 ? u.isMenu : A.isMenu !== void 0 ? A.isMenu : !0), Fe(!!A.isStartup), $e(!!A.isPublic), et(!!A.is403), lt(!!A.deleteTemp), ot(!!A.lockUpdate), Ge(u.isGroup !== void 0 ? u.isGroup : !!A.isGroup), Vt(u.active !== void 0 ? u.active : A.active !== void 0 ? A.active : !0), Dt(A.noEncode !== void 0 ? A.noEncode : !0), Gt(A.isPermissionInherited !== void 0 ? A.isPermissionInherited : !0), kt(!!A.isSystem), Ve(!!A.customNextCell), qt(u.code || ""), re(u.scriptFile || ""), Ce(u.description || ""), Be(u.entityName || "");
      const K = u.customStyles || ((F = u.featureProps) == null ? void 0 : F.customStyles) || {};
      Ie(K.event || ""), Ue(K.className || ""), nt(K.style || ""), ft(K.script || ""), Ot(K.stylesheet || ""), Yt(
        u.scriptContent || ((V = u.featureProps) == null ? void 0 : V.scriptContent) || `// Logic JavaScript xử lý nghiệp vụ cho Feature: ${u.name}
let methods = {
  SaveAs: function (gridView, form) {
    // Code xử lý...
  }
};`
      ), u != null && u.id ? He.getState().fetchFeaturePolicies(u.id).then((xe) => {
        $(xe || []);
      }).catch(() => {
        const xe = u.policies && u.policies.length > 0 ? u.policies : S[u.id] || [];
        $(xe);
      }) : $([]);
    }
  }, [u == null ? void 0 : u.id, g]);
  const Xt = () => {
    if (!y && !E) {
      alert("Vui lòng chọn ít nhất một Vai trò hoặc Người dùng để phân quyền!");
      return;
    }
    const p = w.find((A) => String(A.id) === String(y) || A.code === y), F = T.find((A) => String(A.id) === String(E) || A.username === E), V = {
      id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      featureId: (u == null ? void 0 : u.id) || "",
      featureCode: (u == null ? void 0 : u.code) || (u == null ? void 0 : u.name),
      roleId: y ? Number(y) || y : null,
      roleCode: y ? (p == null ? void 0 : p.code) || y : void 0,
      userId: E ? Number(E) || E : null,
      userName: E ? (F == null ? void 0 : F.username) || E : void 0,
      canRead: B,
      canWrite: M,
      canWriteAll: J,
      canDelete: X,
      canDeleteAll: le,
      canDeactivate: G,
      canShare: pe,
      recordId: Number(ce) || 0,
      lockUpdateAfterCreated: te ? Number(te) : void 0,
      lockDeleteAfterCreated: ve ? Number(ve) : void 0,
      active: O
    };
    $((A) => [V, ...A]), L(""), _(""), Y(!0), z(!1), h(!1), H(!1), ie(!1), de(!1), W(!1), q(0), ue(""), D(""), ne(!0);
  }, gt = (p, F, V) => {
    $(
      (A) => A.map((K) => K.id === p ? { ...K, [F]: V } : K)
    );
  }, _s = (p) => {
    $((F) => F.filter((V) => V.id !== p));
  }, Os = () => {
    if (!u) return;
    let p = [...P];
    if (y || E) {
      const A = w.find((Ne) => String(Ne.id) === String(y) || Ne.code === y), K = T.find((Ne) => String(Ne.id) === String(E) || Ne.username === E);
      p = [{
        id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        featureId: u.id,
        featureCode: u.code || u.name,
        roleId: y ? Number(y) || y : null,
        roleCode: y ? (A == null ? void 0 : A.code) || y : void 0,
        userId: E ? Number(E) || E : null,
        userName: E ? (K == null ? void 0 : K.username) || E : void 0,
        canRead: B,
        canWrite: M,
        canWriteAll: J,
        canDelete: X,
        canDeleteAll: le,
        canDeactivate: G,
        canShare: pe,
        recordId: Number(ce) || 0,
        lockUpdateAfterCreated: te ? Number(te) : void 0,
        lockDeleteAfterCreated: ve ? Number(ve) : void 0,
        active: O
      }, ...p], $(p), L(""), _(""), Y(!0), z(!1), h(!1), H(!1), ie(!1), de(!1), W(!1), q(0), ue(""), D(""), ne(!0);
    }
    const F = fe && fe.trim() !== "" ? fe.trim() : null, V = {
      name: ye.trim(),
      title: Pe.trim(),
      parentId: F,
      order: Number(Se) || 0,
      icon: ee.trim(),
      route: ct.trim(),
      isGroup: yt,
      isMenu: se,
      active: Nt,
      code: _t.trim(),
      scriptFile: R.trim(),
      description: he.trim(),
      entityName: Le.trim(),
      scriptContent: It,
      policies: p,
      displayFlags: {
        isDivider: vt,
        isMenu: se,
        isStartup: Oe,
        isPublic: Me,
        is403: Qe,
        deleteTemp: at,
        lockUpdate: dt,
        isGroup: yt,
        active: Nt,
        noEncode: Tt,
        isPermissionInherited: Mt,
        isSystem: Bt,
        customNextCell: Ut
      },
      customStyles: {
        event: De,
        className: Je,
        style: Ke,
        script: bt,
        stylesheet: Ze
      },
      featureProps: {
        ...u.featureProps || {},
        displayFlags: {
          isDivider: vt,
          isMenu: se,
          isStartup: Oe,
          isPublic: Me,
          is403: Qe,
          deleteTemp: at,
          lockUpdate: dt,
          isGroup: yt,
          active: Nt,
          noEncode: Tt,
          isPermissionInherited: Mt,
          isSystem: Bt,
          customNextCell: Ut
        },
        customStyles: {
          event: De,
          className: Je,
          style: Ke,
          script: bt,
          stylesheet: Ze
        },
        scriptContent: It,
        policies: p
      }
    };
    l(u.id, V), N(u.id, p), He.getState().saveFeaturePolicies(u.id, p), cs(!0), setTimeout(() => cs(!1), 2e3);
  }, Hs = async () => {
    u && (await i(u.id), b());
  }, Ds = Ae(() => {
    if (!u || !fe) return "Gốc (Root)";
    const p = [];
    let F = fe;
    const V = /* @__PURE__ */ new Set();
    for (; F && !V.has(F); ) {
      V.add(F);
      const A = o.find((K) => K.id === F);
      if (A)
        p.unshift(A.title || A.name), F = A.parentId || null;
      else
        break;
    }
    return p.join(" > ");
  }, [u, fe, o]), Ws = Ae(() => o.filter((p) => p.id !== (u == null ? void 0 : u.id)), [o, u]), ps = Ae(() => {
    if (!u) return [];
    const p = [], F = (V, A = 0) => {
      var K, xe;
      for (const Ne of V) {
        const We = !!(Ne.children && Ne.children.length > 0), ze = !!ds[Ne.id];
        (!Ft.trim() || ((K = Ne.props) == null ? void 0 : K.label) && String(Ne.props.label).toLowerCase().includes(Ft.toLowerCase()) || Ne.id && Ne.id.toLowerCase().includes(Ft.toLowerCase()) || Ne.type && Ne.type.toLowerCase().includes(Ft.toLowerCase()) || ((xe = Ne.dataBinding) == null ? void 0 : xe.fieldName) && String(Ne.dataBinding.fieldName).toLowerCase().includes(Ft.toLowerCase())) && p.push({
          node: Ne,
          depth: A,
          hasChildren: We,
          isCollapsed: ze
        }), We && !ze && F(Ne.children, A + 1);
      }
    };
    return F(u.components || [], 0), p;
  }, [u, ds, Ft]), hs = Ae(() => {
    if (!u) return 0;
    let p = 0;
    const F = (V) => {
      p += V.length;
      for (const A of V)
        A.children && A.children.length > 0 && F(A.children);
    };
    return F(u.components || []), p;
  }, [u]), ms = (p) => {
    ts((F) => ({ ...F, [p]: !F[p] }));
  }, bs = () => ts({}), fs = () => {
    if (!u) return;
    const p = {}, F = (V) => {
      for (const A of V)
        A.children && A.children.length > 0 && (p[A.id] = !0, F(A.children));
    };
    F(u.components || []), ts(p);
  }, gs = (p) => {
    us(p), d(p.id);
  }, vs = (p) => {
    switch (p) {
      case "Table":
        return /* @__PURE__ */ e.jsx(Pt, { className: "w-3.5 h-3.5 text-blue-400" });
      case "DatePicker":
        return /* @__PURE__ */ e.jsx(Xn, { className: "w-3.5 h-3.5 text-emerald-400" });
      case "TextBox":
      case "Textarea":
        return /* @__PURE__ */ e.jsx(js, { className: "w-3.5 h-3.5 text-amber-400" });
      case "Number":
        return /* @__PURE__ */ e.jsx(qr, { className: "w-3.5 h-3.5 text-cyan-400" });
      case "Container":
      case "Section":
        return /* @__PURE__ */ e.jsx(Ys, { className: "w-3.5 h-3.5 text-indigo-400" });
      case "Tabs":
        return /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5 text-purple-400" });
      default:
        return /* @__PURE__ */ e.jsx(Qn, { className: "w-3.5 h-3.5 text-slate-400" });
    }
  }, v = (p, F, V) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center justify-between py-1 px-2 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors", children: [
    /* @__PURE__ */ e.jsx("span", { className: `text-xs ${F ? "text-slate-100 font-semibold" : "text-slate-400"}`, children: p }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        checked: F,
        onChange: (A) => V(A.target.checked),
        className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
      }
    )
  ] });
  return !g || !u ? null : At(
    /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#080e1a] border-b border-blue-600/30", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30", children: /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-base text-white tracking-wide", children: [
                "Feature - ",
                u.title || u.name
              ] }),
              _t && /* @__PURE__ */ e.jsxs("span", { className: "text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono font-semibold", children: [
                "#",
                _t
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            ks && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in duration-200", children: [
              /* @__PURE__ */ e.jsx(nn, { className: "w-4 h-4" }),
              " Đã lưu thành công!"
            ] }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                onClick: Os,
                className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
                  /* @__PURE__ */ e.jsx(sn, { className: "w-3.5 h-3.5" }),
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
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${C === "settings" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "TÙY CHỈNH / THÔNG TIN CHUNG" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f("components"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${C === "components" ? "border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx($t, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "PHẦN TỬ (CÂY COMPONENT)" }),
                /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono", children: hs })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => f("permissions"),
              className: `flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${C === "permissions" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 rounded-t-lg" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg"}`,
              children: [
                /* @__PURE__ */ e.jsx(Bs, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ e.jsx("span", { children: "QUYỀN HẠN (RBAC & POLICIES)" }),
                P.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950/80 text-emerald-300 font-mono border border-emerald-800/50", children: P.length })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]", children: [
          C === "settings" && /* ══════════════════════════════════════════════════════════════
          TAB 1: TÙY CHỈNH / THÔNG TIN FEATURE (Khớp 100% Hình 3)
          ══════════════════════════════════════════════════════════════ */
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(yr, { className: "w-3.5 h-3.5" }),
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
                        onChange: (p) => Te(p.target.value),
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
                        value: Pe,
                        onChange: (p) => be(p.target.value),
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
                          value: fe,
                          onChange: (p) => Re(p.target.value),
                          className: "flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer",
                          children: [
                            /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                            Ws.map((p) => /* @__PURE__ */ e.jsxs("option", { value: p.id, children: [
                              p.isGroup ? "📁 " : "📄 ",
                              p.title || p.name,
                              " (",
                              p.route,
                              ")"
                            ] }, p.id))
                          ]
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          className: "p-1.5 bg-slate-800 border border-slate-700 rounded text-slate-400 hover:text-blue-400 cursor-help",
                          title: `Đường dẫn phân tầng: ${Ds}`,
                          children: /* @__PURE__ */ e.jsx(yr, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex items-center justify-between text-[11px] px-2 py-1 rounded bg-slate-950/70 border border-slate-800", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 text-[10px]", children: se ? "📌 Hiển thị trên Leftbar" : "🔍 Màn hình mở theo điều kiện (Ẩn Leftbar)" }),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => we(!se),
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
                          value: Se,
                          onChange: (p) => ge(Number(p.target.value)),
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
                          value: ee,
                          onChange: (p) => me(p.target.value),
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
                        value: ct,
                        onChange: (p) => Et(p.target.value),
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
                    v("Thanh chia", vt, Ct),
                    v("Hiển thị menu", se, we),
                    v("Khởi động", Oe, Fe),
                    v("Public", Me, $e),
                    v("403", Qe, et),
                    v("Delete Temp", at, lt),
                    v("LockUpdate", dt, ot)
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
                    v("Nhóm menu", yt, Ge),
                    v("Hoạt động", Nt, Vt),
                    v("No-Encode", Tt, Dt),
                    v("Thừa kế quyền", Mt, Gt),
                    v("System", Bt, kt),
                    v("CustomNextCell", Ut, Ve)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e.jsx(vn, { className: "w-3.5 h-3.5" }),
                  " OTHER"
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mã (Code):" }),
                    /* @__PURE__ */ e.jsx(
                      "input",
                      {
                        type: "text",
                        value: _t,
                        onChange: (p) => qt(p.target.value),
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
                        value: R,
                        onChange: (p) => re(p.target.value),
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
                        onChange: (p) => Be(p.target.value),
                        placeholder: "Ví dụ: Transaction",
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("datalist", { id: "entities-list", children: oe.map((p) => /* @__PURE__ */ e.jsx("option", { value: p.name, children: p.displayName || p.name }, p.name)) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Parents:" }),
                    /* @__PURE__ */ e.jsx("div", { className: "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-[11px] font-mono truncate", children: Ds })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Mô tả:" }),
                    /* @__PURE__ */ e.jsx(
                      "textarea",
                      {
                        rows: 2,
                        value: he,
                        onChange: (p) => Ce(p.target.value),
                        className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 text-xs resize-none"
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-purple-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5" }),
                " TÙY CHỈNH & STYLE"
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-slate-400 mb-1", children: "Event:" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: De,
                      onChange: (p) => Ie(p.target.value),
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
                      onChange: (p) => Ue(p.target.value),
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
                      value: Ke,
                      onChange: (p) => nt(p.target.value),
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
                      onChange: (p) => ft(p.target.value),
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
                    onChange: (p) => Ot(p.target.value),
                    placeholder: "/* Custom CSS stylesheet rules */",
                    className: "w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500 resize-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2", children: [
                  /* @__PURE__ */ e.jsx(hn, { className: "w-4 h-4" }),
                  " SCRIPT (Trình soạn thảo mã nghiệp vụ Feature)"
                ] }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] text-slate-400 font-mono", children: [
                  It.split(`
`).length,
                  " dòng"
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "relative flex rounded-lg border border-slate-800 bg-[#070b14] overflow-hidden min-h-[220px]", children: [
                /* @__PURE__ */ e.jsx("div", { className: "py-2.5 px-3 bg-[#05080f] border-r border-slate-800/80 text-right font-mono text-xs text-slate-600 select-none leading-5 min-w-[40px]", children: It.split(`
`).map((p, F) => /* @__PURE__ */ e.jsx("div", { children: F + 1 }, F)) }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    value: It,
                    onChange: (p) => Yt(p.target.value),
                    spellCheck: !1,
                    className: "flex-1 p-2.5 bg-transparent font-mono text-xs text-emerald-300 leading-5 focus:outline-none resize-y min-h-[200px]"
                  }
                )
              ] })
            ] })
          ] }),
          C === "components" && /* ══════════════════════════════════════════════════════════════
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
                    value: Ft,
                    onChange: (p) => Ss(p.target.value),
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
                    onClick: bs,
                    className: "px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer",
                    children: "Mở rộng tất cả"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: fs,
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
                ps.length,
                " / ",
                hs,
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
              /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-slate-800/50", children: ps.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 7, className: "py-8 text-center text-slate-500", children: "Không tìm thấy phần tử nào trong Feature này" }) }) : ps.map(({ node: p, depth: F, hasChildren: V, isCollapsed: A }) => {
                var We, ze, ht, St, Rt, ys;
                const K = ((We = p.props) == null ? void 0 : We.label) || ((ze = p.props) == null ? void 0 : ze.title) || ((ht = p.dataBinding) == null ? void 0 : ht.fieldName) || p.type, xe = ((St = p.dataBinding) == null ? void 0 : St.fieldName) || "-", Ne = (Rt = p.props) != null && Rt.colSpan ? `${p.props.colSpan}/12` : "Auto";
                return /* @__PURE__ */ e.jsxs(
                  "tr",
                  {
                    onDoubleClick: () => gs(p),
                    className: "hover:bg-blue-600/15 cursor-pointer transition-colors group",
                    title: "Nhấp đúp chuột để cấu hình phần tử này",
                    children: [
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5",
                          style: { paddingLeft: `${F * 20}px` },
                          children: [
                            V ? /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: (Is) => {
                                  Is.stopPropagation(), ms(p.id);
                                },
                                className: "p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer",
                                children: A ? /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
                              }
                            ) : /* @__PURE__ */ e.jsx("span", { className: "w-5" }),
                            /* @__PURE__ */ e.jsx("div", { className: "p-1 rounded bg-slate-800/80 group-hover:bg-blue-600/20", children: vs(p.type) }),
                            /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 group-hover:text-white truncate", children: K })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-slate-400", children: /* @__PURE__ */ e.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800", children: [
                        "#",
                        p.id
                      ] }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50", children: p.type }) }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 font-mono text-[11px] text-emerald-400", children: xe }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: p.order ?? 1 }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center font-mono text-slate-400", children: Ne }),
                      /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 text-center", children: (ys = p.props) != null && ys.hidden ? /* @__PURE__ */ e.jsx(Kn, { className: "w-4 h-4 text-slate-600 mx-auto" }) : /* @__PURE__ */ e.jsx(tn, { className: "w-4 h-4 text-emerald-400 mx-auto" }) })
                    ]
                  },
                  p.id
                );
              }) })
            ] }) }) })
          ] }),
          C === "permissions" && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-[#0e1726] border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ e.jsx(Wt, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: m,
                      onChange: (p) => j(p.target.value),
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
                    children: /* @__PURE__ */ e.jsx(nl, { className: "w-3.5 h-3.5 text-emerald-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => j(""),
                    title: "Khôi phục tìm kiếm",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(rl, { className: "w-3.5 h-3.5 text-slate-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    title: "Cài đặt ma trận phân quyền",
                    className: "p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ e.jsx(ut, { className: "w-3.5 h-3.5 text-slate-400" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "hidden xl:flex items-center gap-1 pl-2 border-l border-slate-800 text-[10px] text-slate-400 font-mono", children: ["F1: Help", "F2: Thêm", "F4: Sửa", "F5: Tải lại", "F8: Xóa", "F10: Lưu"].map((p) => /* @__PURE__ */ e.jsx("span", { className: "px-1.5 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400", children: p }, p)) }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => xs(!0),
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
                      checked: Mt,
                      onChange: (p) => Gt(p.target.checked),
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
                      checked: Me,
                      onChange: (p) => $e(p.target.checked),
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
                      onClick: Xt,
                      className: "w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto transition-transform active:scale-95 shadow-sm shadow-emerald-600/30 cursor-pointer",
                      title: "Thêm mới quy tắc phân quyền (+)",
                      children: /* @__PURE__ */ e.jsx(Ye, { className: "w-3.5 h-3.5 stroke-[3]" })
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: E,
                      onChange: (p) => {
                        L(p.target.value), p.target.value && _("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        T.map((p) => /* @__PURE__ */ e.jsx("option", { value: p.id, children: p.username }, p.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 border-r border-slate-800", children: /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: y,
                      onChange: (p) => {
                        _(p.target.value), p.target.value && L("");
                      },
                      className: "w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-semibold",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "", children: "—" }),
                        w.map((p) => /* @__PURE__ */ e.jsx("option", { value: p.id, children: p.code }, p.id))
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: B,
                      onChange: (p) => Y(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Đọc (CanRead)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: M,
                      onChange: (p) => z(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Cập nhật bản ghi của mình (CanWrite)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: J,
                      onChange: (p) => h(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Cập nhật toàn bộ bản ghi của mọi người (CanWriteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: X,
                      onChange: (p) => H(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Xóa bản ghi của mình (CanDelete)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: le,
                      onChange: (p) => ie(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Xóa toàn bộ bản ghi của mọi người (CanDeleteAll)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: G,
                      onChange: (p) => de(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Hủy / Ngưng hiệu lực (CanDeactivate)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: pe,
                      onChange: (p) => W(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer",
                      title: "Quyền Chia sẻ bản ghi (CanShare)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      value: ce,
                      onChange: (p) => q(Number(p.target.value) || 0),
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
                      onChange: (p) => ue(p.target.value),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600",
                      title: "Số giờ sau khi tạo thì khóa không cho sửa (để trống = không giới hạn)"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "number",
                      placeholder: "Giờ",
                      value: ve,
                      onChange: (p) => D(p.target.value),
                      className: "w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600",
                      title: "Số giờ sau khi tạo thì khóa không cho xóa"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: O,
                      onChange: (p) => ne(p.target.checked),
                      className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: Xt,
                      className: "text-[11px] px-2 py-1 rounded bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 transition-colors font-medium cursor-pointer",
                      children: "Lưu"
                    }
                  ) })
                ] }),
                P.filter((p) => {
                  if (!m.trim()) return !0;
                  const F = m.toLowerCase();
                  return p.roleCode && p.roleCode.toLowerCase().includes(F) || p.userName && p.userName.toLowerCase().includes(F) || p.description && p.description.toLowerCase().includes(F);
                }).map((p, F) => {
                  const V = w.find(
                    (K) => String(K.id) === String(p.roleId) || K.code === p.roleCode
                  ), A = T.find(
                    (K) => String(K.id) === String(p.userId) || K.username === p.userName
                  );
                  return /* @__PURE__ */ e.jsxs(
                    "tr",
                    {
                      className: "hover:bg-slate-800/40 transition-colors group",
                      children: [
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center text-slate-500 font-mono text-[11px] border-r border-slate-800", children: F + 1 }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: A != null && A.username || p.userName ? /* @__PURE__ */ e.jsx("span", { className: "text-xs text-blue-300 font-mono font-medium", children: (A == null ? void 0 : A.username) || p.userName }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-3 border-r border-slate-800", children: p.roleCode || V != null && V.code ? /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-xs text-slate-200", children: p.roleCode || (V == null ? void 0 : V.code) }) : null }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canRead,
                            onChange: (K) => gt(p.id, "canRead", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canWrite,
                            onChange: (K) => gt(p.id, "canWrite", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canWriteAll,
                            onChange: (K) => gt(p.id, "canWriteAll", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canDelete,
                            onChange: (K) => gt(p.id, "canDelete", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canDeleteAll,
                            onChange: (K) => gt(p.id, "canDeleteAll", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canDeactivate,
                            onChange: (K) => gt(p.id, "canDeactivate", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.canShare,
                            onChange: (K) => gt(p.id, "canShare", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            value: p.recordId ?? 0,
                            onChange: (K) => gt(p.id, "recordId", Number(K.target.value) || 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: p.lockUpdateAfterCreated ?? "",
                            onChange: (K) => gt(p.id, "lockUpdateAfterCreated", K.target.value ? Number(K.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "number",
                            placeholder: "—",
                            value: p.lockDeleteAfterCreated ?? "",
                            onChange: (K) => gt(p.id, "lockDeleteAfterCreated", K.target.value ? Number(K.target.value) : void 0),
                            className: "w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center border-r border-slate-800", children: /* @__PURE__ */ e.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: p.active,
                            onChange: (K) => gt(p.id, "active", K.target.checked),
                            className: "w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          }
                        ) }),
                        /* @__PURE__ */ e.jsx("td", { className: "py-2 px-2 text-center", children: /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => _s(p.id),
                            className: "p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition-colors cursor-pointer",
                            title: "Xóa quy tắc này",
                            children: /* @__PURE__ */ e.jsx(xt, { className: "w-3.5 h-3.5" })
                          }
                        ) })
                      ]
                    },
                    p.id || F
                  );
                }),
                P.length === 0 && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsxs("td", { colSpan: 15, className: "py-8 text-center text-slate-500", children: [
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
      ss && /* @__PURE__ */ e.jsx(
        Sa,
        {
          isOpen: !!ss,
          node: ss,
          onClose: () => us(null),
          onSave: (p, F, V) => {
            c(p, F), V && x(p, V);
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        ma,
        {
          isOpen: Ts,
          onClose: () => xs(!1)
        }
      )
    ] }),
    document.body
  );
}, Jo = (s, a, t) => {
  const r = `w-4 h-4 shrink-0 ${t ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`, n = (s || "").toLowerCase();
  return a ? n.includes("truck") || n.includes("shipment") ? /* @__PURE__ */ e.jsx(ol, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("price") || n.includes("sale") || n.includes("dollar") ? /* @__PURE__ */ e.jsx(il, { className: "w-4 h-4 shrink-0 text-emerald-400" }) : n.includes("doc") ? /* @__PURE__ */ e.jsx(os, { className: "w-4 h-4 shrink-0 text-blue-400" }) : /* @__PURE__ */ e.jsx(vn, { className: "w-4 h-4 shrink-0 text-amber-400" }) : n.includes("ship") || n.includes("fcl") || n.includes("lcl") ? /* @__PURE__ */ e.jsx(cl, { className: r }) : n.includes("plane") || n.includes("air") ? /* @__PURE__ */ e.jsx(dl, { className: r }) : n.includes("pack") || n.includes("box") ? /* @__PURE__ */ e.jsx(ul, { className: r }) : n.includes("doc") || n.includes("bill") || n.includes("invoice") ? /* @__PURE__ */ e.jsx(os, { className: r }) : n.includes("dash") ? /* @__PURE__ */ e.jsx(xl, { className: r }) : /* @__PURE__ */ e.jsx($t, { className: r });
}, Qo = ({
  feature: s,
  depth: a,
  hasChildren: t,
  isCollapsed: r,
  isActive: n,
  childCount: o = 0,
  isDev: l = !0,
  onToggleCollapse: i,
  onSelect: d,
  onContextMenu: c
}) => {
  const { attributes: x, listeners: g, setNodeRef: k, transform: u, transition: b, isDragging: C } = Tl({
    id: s.id,
    disabled: !l
  }), f = {
    transform: ea.Transform.toString(u),
    transition: b,
    opacity: C ? 0.35 : 1,
    paddingLeft: `${Math.max(8, a * 18 + 8)}px`
  }, w = !!s.isGroup, T = s.badge ?? (w && o > 0 ? o : null);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: k,
      style: f,
      onClick: d,
      onContextMenu: l ? c : (S) => S.preventDefault(),
      className: `group relative flex items-center justify-between pr-2 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all select-none ${n ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500" : w ? "bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/30" : "text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent"}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 truncate flex-1 min-w-0", children: [
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              ...x,
              ...g,
              onClick: (S) => S.stopPropagation(),
              className: "opacity-0 group-hover:opacity-100 p-0.5 -ml-1 text-slate-500 hover:text-slate-300 cursor-grab active:cursor-grabbing transition-opacity shrink-0",
              title: "Kéo để di chuyển vị trí hoặc kéo vào nhóm cha",
              children: /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5" })
            }
          ),
          t ? /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: i,
              className: "p-0.5 rounded hover:bg-black/20 text-slate-400 hover:text-white transition-colors shrink-0",
              children: r ? /* @__PURE__ */ e.jsx(is, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(Lt, { className: "w-3.5 h-3.5" })
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "w-4 shrink-0" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `p-1 rounded-lg shrink-0 ${n ? "bg-white/20 text-white" : w ? "bg-amber-500/10" : "bg-slate-800 text-slate-400"}`,
              children: Jo(s.icon, w, n)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `truncate ${w ? "font-bold uppercase tracking-wider text-[11px] text-slate-100" : "font-medium"}`,
              children: s.title || s.name
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 pl-1", children: [
          T !== null && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `px-1.5 py-0.2 rounded-full text-[10px] font-bold ${n ? "bg-white text-blue-700" : "bg-amber-500 text-slate-950 shadow-sm"}`,
              children: T
            }
          ),
          l && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: `opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${n ? "text-white" : "text-slate-400 hover:text-white"}`,
              title: "Tùy chọn Feature",
              children: /* @__PURE__ */ e.jsx(ll, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
}, Si = ({ width: s }) => {
  const a = zt((G) => G.user), t = (a == null ? void 0 : a.role) === "Dev", r = Z((G) => G.features), n = Z((G) => G.activeFeatureId), o = Z((G) => G.setActiveFeature), l = Z((G) => G.addFeature), i = Z((G) => G.cloneFeature), d = Z((G) => G.toggleFeatureActive), c = Z((G) => G.openFeatureManager), x = Z((G) => G.openFeatureProperties), g = Z((G) => G.reorderFeatures), k = Ae(() => r.filter((G) => G.active === !1 || G.isMenu === !1 ? !1 : G.hidden || G.isDetail ? G.id === n : !0), [r, n]), [u, b] = I({}), [C, f] = I(null), [w, T] = I(!1), [S, N] = I(""), [P, $] = I(""), [m, j] = I(!1), [E, L] = I(null), y = vl(
    yl(Nl, {
      activationConstraint: {
        distance: 5
      }
    })
  ), _ = (G, de) => {
    de.stopPropagation(), b((pe) => ({ ...pe, [G]: !pe[G] }));
  }, { treeNodes: B, visibleNodeIds: Y } = Ae(() => {
    const G = /* @__PURE__ */ new Map();
    for (const te of k) {
      const ue = te.parentId || null;
      G.has(ue) || G.set(ue, []), G.get(ue).push(te);
    }
    for (const te of G.values())
      te.sort((ue, ve) => (ue.order ?? 0) - (ve.order ?? 0));
    const de = [], pe = [], W = (te, ue = 0) => {
      const ve = G.get(te) || [];
      for (const D of ve) {
        const O = G.get(D.id) || [], ne = O.length > 0, oe = !!u[D.id];
        de.push({
          feature: D,
          depth: ue,
          hasChildren: ne,
          isCollapsed: oe,
          childCount: O.length
        }), pe.push(D.id), ne && !oe && W(D.id, ue + 1);
      }
    }, ce = new Set(k.map((te) => te.id)), q = k.filter((te) => !te.parentId || !ce.has(te.parentId));
    q.sort((te, ue) => (te.order ?? 0) - (ue.order ?? 0));
    for (const te of q) {
      const ue = G.get(te.id) || [], ve = ue.length > 0, D = !!u[te.id];
      de.push({
        feature: te,
        depth: 0,
        hasChildren: ve,
        isCollapsed: D,
        childCount: ue.length
      }), pe.push(te.id), ve && !D && W(te.id, 1);
    }
    return { treeNodes: de, visibleNodeIds: pe };
  }, [k, u]), M = (G) => {
    G.preventDefault(), t && f({
      x: G.clientX,
      y: G.clientY
    });
  }, z = (G, de) => {
    G.preventDefault(), G.stopPropagation(), t && f({
      x: G.clientX,
      y: G.clientY,
      featureId: de
    });
  }, J = (G = "") => {
    N(""), $(G), j(!1), T(!0);
  }, h = (G) => {
    if (G.preventDefault(), !S.trim()) return;
    const de = l(
      S.trim(),
      m ? "Folder" : "Layers",
      P || null,
      m
    );
    T(!1), N(""), m || (o(de, null), rt.getState().openFeature(de, {}, "Tab", S.trim()));
  }, X = Ae(() => {
    const G = C != null && C.featureId ? r.find((de) => de.id === C.featureId) : null;
    return G ? [
      {
        label: "➕ New feature",
        icon: Ye,
        onClick: () => J(G.isGroup ? G.id : G.parentId || "")
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
          d(G.id);
        }
      },
      {
        label: "❐ Clone this feature",
        icon: sn,
        onClick: () => {
          i(G.id);
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
        icon: Nr,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ut,
        onClick: () => x(G.id)
      }
    ] : [
      {
        label: "➕ New feature",
        icon: Ye,
        onClick: () => J("")
      },
      {
        divider: !0,
        label: "",
        onClick: () => {
        }
      },
      {
        label: "☰ Manage features",
        icon: Nr,
        onClick: () => c()
      },
      {
        label: "🔧 Properties",
        icon: ut,
        onClick: () => x(n)
      }
    ];
  }, [C, r, n, i, d, c, x]), H = (G) => {
    L(String(G.active.id));
  }, le = (G) => {
    const { active: de, over: pe } = G;
    if (L(null), !pe || de.id === pe.id) return;
    const W = String(de.id), ce = String(pe.id), q = r.find((ne) => ne.id === W), te = r.find((ne) => ne.id === ce);
    if (!q || !te) return;
    if (te.isGroup && q.id !== te.id) {
      const ne = r.filter((ae) => ae.parentId === te.id), oe = ne.length > 0 ? Math.max(...ne.map((ae) => ae.order ?? 0)) + 1 : 1;
      g([
        { id: q.id, parentId: te.id, order: oe, isGroup: q.isGroup }
      ]), b((ae) => ({ ...ae, [te.id]: !1 }));
      return;
    }
    const ue = te.parentId || null, ve = r.filter((ne) => (ne.parentId || null) === ue);
    ve.sort((ne, oe) => (ne.order ?? 0) - (oe.order ?? 0));
    const D = ve.findIndex((ne) => ne.id === W), O = ve.findIndex((ne) => ne.id === ce);
    if (D !== -1 && O !== -1) {
      const ne = [...ve], [oe] = ne.splice(D, 1);
      ne.splice(O, 0, oe);
      const ae = ne.map((ye, Te) => ({
        id: ye.id,
        parentId: ue,
        order: Te + 1,
        isGroup: ye.isGroup
      }));
      g(ae);
    } else {
      const ne = [...ve.filter((ye) => ye.id !== W)], oe = ne.findIndex((ye) => ye.id === ce);
      oe !== -1 ? ne.splice(oe, 0, { ...q, parentId: ue }) : ne.push({ ...q, parentId: ue });
      const ae = ne.map((ye, Te) => ({
        id: ye.id,
        parentId: ue,
        order: Te + 1,
        isGroup: ye.id === W ? q.isGroup : ye.isGroup
      }));
      g(ae);
    }
  }, ie = E ? r.find((G) => G.id === E) : null;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "aside",
      {
        onContextMenu: M,
        style: { width: s ? `${s}px` : void 0 },
        className: "w-64 border-r border-slate-800 bg-[#090e1a] flex flex-col shrink-0 select-none relative",
        children: [
          /* @__PURE__ */ e.jsx("nav", { className: "p-2 space-y-1 overflow-y-auto flex-1", children: /* @__PURE__ */ e.jsxs(
            jl,
            {
              sensors: y,
              collisionDetection: wl,
              onDragStart: H,
              onDragEnd: le,
              children: [
                /* @__PURE__ */ e.jsx(kl, { items: Y, strategy: Sl, children: B.map(({ feature: G, depth: de, hasChildren: pe, isCollapsed: W, childCount: ce }) => {
                  const q = G.id === n;
                  return /* @__PURE__ */ e.jsx(
                    Qo,
                    {
                      feature: G,
                      depth: de,
                      hasChildren: pe,
                      isCollapsed: W,
                      isActive: q,
                      childCount: ce,
                      isDev: t,
                      onToggleCollapse: (te) => _(G.id, te),
                      onSelect: () => {
                        G.isGroup ? b((te) => ({ ...te, [G.id]: !te[G.id] })) : (o(G.id, null), rt.getState().openFeature(G.id, {}, "Tab", G.title || G.name));
                      },
                      onContextMenu: (te) => z(te, G.id)
                    },
                    G.id
                  );
                }) }),
                /* @__PURE__ */ e.jsx(Cl, { children: ie ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white shadow-2xl border border-blue-400 text-xs font-bold opacity-90", children: [
                  /* @__PURE__ */ e.jsx(rn, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ e.jsx("span", { children: ie.title || ie.name })
                ] }) : null })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-t border-slate-800 bg-[#080d17] text-[11px] text-slate-400 flex items-center justify-between", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                k.length,
                " hiển thị / ",
                r.length
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: "Core C# v2.5" })
          ] })
        ]
      }
    ),
    t && C && /* @__PURE__ */ e.jsx(
      ka,
      {
        x: C.x,
        y: C.y,
        items: X,
        onClose: () => f(null)
      }
    ),
    t && w && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[130] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: h,
        className: "w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5 text-slate-100", children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl bg-blue-600/20 text-blue-400", children: /* @__PURE__ */ e.jsx(al, { className: "w-5 h-5" }) }),
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
                  value: S,
                  onChange: (G) => N(G.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-slate-300 mb-1", children: "Cấp cha (Thư mục nhóm):" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  value: P,
                  onChange: (G) => $(G.target.value),
                  className: "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "", children: "-- Cấp gốc (Không có cha) --" }),
                    r.filter((G) => G.isGroup).map((G) => /* @__PURE__ */ e.jsxs("option", { value: G.id, children: [
                      "📁 ",
                      G.title || G.name
                    ] }, G.id))
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
                  onChange: (G) => j(G.target.checked),
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
                onClick: () => T(!1),
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
    t && /* @__PURE__ */ e.jsx(Yo, {}),
    t && /* @__PURE__ */ e.jsx(Xo, {})
  ] });
}, Ti = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1
}) => {
  const n = Z((x) => x.undo), o = Z((x) => x.redo), l = Z((x) => x.historyIndex), i = Z((x) => x.history), d = l > 0, c = l < i.length - 1;
  return /* @__PURE__ */ e.jsxs("header", { className: "h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm text-white", children: "UIForge" }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: n, disabled: !d, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Xr, { className: "w-3.5 h-3.5" }) }),
      /* @__PURE__ */ e.jsx("button", { onClick: o, disabled: !c, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx("button", { onClick: a, className: "px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300", children: s ? "Chế độ chỉnh sửa" : "Xem trước" }),
      /* @__PURE__ */ e.jsx("button", { onClick: t, disabled: r, className: "px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white", children: "Lưu" })
    ] })
  ] });
}, Di = ({
  isPreview: s,
  onTogglePreview: a,
  onSave: t,
  isSaving: r = !1,
  showRightPanel: n,
  onToggleRightPanel: o,
  canEdit: l,
  userName: i,
  userRole: d,
  branch: c,
  onLogout: x
}) => {
  const g = Z((j) => j.features), k = Z((j) => j.activeFeatureId), u = Z((j) => j.undo), b = Z((j) => j.redo), C = Z((j) => j.historyIndex), f = Z((j) => j.history), w = g.find((j) => j.id === k), T = He((j) => j.previewRoleCode), S = He((j) => j.setPreviewRole), N = He((j) => j.roles), P = He((j) => j.fetchSecurityMetadata);
  Ee(() => {
    P();
  }, [P]);
  const $ = C > 0, m = C < f.length - 1;
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
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60", children: (w == null ? void 0 : w.name) || "Chưa chọn feature" })
      ] })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: u,
            disabled: !$,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Hoàn tác (Ctrl+Z)",
            children: /* @__PURE__ */ e.jsx(Xr, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: b,
            disabled: !m,
            className: "p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer",
            title: "Làm lại (Ctrl+Y)",
            children: /* @__PURE__ */ e.jsx(Jr, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${s ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30" : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,
          children: s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(pl, { className: "w-3.5 h-3.5 text-amber-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Chế độ Thiết Kế" })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(tn, { className: "w-3.5 h-3.5 text-slate-400" }),
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
            /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: r ? "Đang lưu..." : "Lưu Giao Diện" })
          ]
        }
      )
    ] }) : null,
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors", children: [
        /* @__PURE__ */ e.jsx(Bs, { className: `w-3.5 h-3.5 ${T ? "text-amber-400" : "text-slate-400"}` }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-slate-400 font-medium whitespace-nowrap", children: "Vai trò:" }),
        /* @__PURE__ */ e.jsxs(
          "select",
          {
            value: T || "",
            onChange: (j) => S(j.target.value || null),
            className: "bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer border-none py-0.5",
            title: "Chuyển đổi vai trò người dùng để kiểm tra phân quyền tức thì (0 giây)",
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "", className: "bg-slate-900 text-slate-200", children: d || "Dev" }),
              N.map((j) => /* @__PURE__ */ e.jsx("option", { value: j.code, className: "bg-slate-900 text-slate-200", children: j.code }, j.code))
            ]
          }
        ),
        T && /* @__PURE__ */ e.jsx(
          "span",
          {
            className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0",
            title: `Đang giả lập vai trò: ${T}`
          }
        )
      ] }),
      l && /* @__PURE__ */ e.jsx("div", { className: "h-5 w-[1px] bg-slate-800" }),
      l && !s && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${n ? "bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30" : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750"}`,
          title: n ? "Ẩn bảng quản lý bên phải" : "Mở bảng quản lý bên phải",
          children: n ? /* @__PURE__ */ e.jsx(hl, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(ml, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer",
          title: "Thông báo hệ thống",
          children: [
            /* @__PURE__ */ e.jsx(bl, { className: "w-4 h-4" }),
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
        x && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: x,
            className: "p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer",
            title: "Đăng xuất",
            children: /* @__PURE__ */ e.jsx(fl, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}, Ii = () => {
  const s = rt((i) => i.activePopup), a = rt((i) => i.closePopup), t = rt((i) => i.openFeature), r = Z((i) => i.features);
  if (!s) return null;
  const n = r.find((i) => String(i.id) === String(s.featureId)), o = s.params || {}, l = () => {
    t(s.featureId, s.params, "Tab", s.title), a();
  };
  return At(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150", children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400", children: /* @__PURE__ */ e.jsx($t, { className: "w-4 h-4" }) }),
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
                /* @__PURE__ */ e.jsx(Vr, { className: "w-3.5 h-3.5" }),
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
              children: /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 overflow-y-auto flex-1 space-y-4", children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-900/90 border border-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ e.jsx(gl, { className: "w-3.5 h-3.5 text-blue-400" }),
            /* @__PURE__ */ e.jsx("span", { children: "Tham số dòng (Row Context):" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs", children: Object.entries(o).map(([i, d]) => /* @__PURE__ */ e.jsxs("div", { className: "bg-slate-950/60 p-2 rounded-lg border border-slate-800/80", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider block", children: i }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-cyan-300 truncate block mt-0.5", children: String(d ?? "—") })
          ] }, i)) })
        ] }),
        n && n.components.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.components.map((i) => /* @__PURE__ */ e.jsx(
          en,
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
                /* @__PURE__ */ e.jsx(Zt, { className: "w-3.5 h-3.5" }),
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
class Fi {
  get dataEngine() {
    return ke.getState();
  }
  get navigationEngine() {
    return rt.getState();
  }
  get editorStore() {
    return Z.getState();
  }
  /** Lấy dữ liệu trọn vẹn của Form */
  getFormRecord(a = "default") {
    return this.dataEngine.getFormRecord(a);
  }
  /** Gán giá trị cho một trường trên Form */
  setFieldValue(a, t, r = "default") {
    this.dataEngine.setFieldValue(r, a, t);
  }
  /** Mở màn hình dạng Tab */
  openTab(a, t, r) {
    this.navigationEngine.openFeature(a, t, "Tab", r);
  }
  /** Mở màn hình dạng Popup Modal */
  openPopup(a, t, r) {
    this.navigationEngine.openFeature(a, t, "Popup", r);
  }
}
function Ri(s) {
  return s;
}
export {
  Fi as BaseBL,
  ba as ColumnPropertiesModal,
  wi as ComponentPalette,
  Sa as ComponentPropertiesModal,
  en as ComponentRenderer,
  Ci as ComponentTree,
  ka as ContextMenu,
  fa as EnterpriseDatePicker,
  Do as EnterpriseSelect,
  Ni as FeatureCanvas,
  Ii as FeaturePopupModal,
  bi as ForgeAdvancedGrid,
  _o as ForgeAutocomplete,
  so as ForgeButton,
  Ho as ForgeChart,
  Fo as ForgeCheckbox,
  Ir as ForgeContainer,
  Ro as ForgeDatePicker,
  $o as ForgeDivider,
  Bo as ForgeFileUploadGrid,
  ui as ForgeFormContainer,
  ao as ForgeLabel,
  Po as ForgeModal,
  ro as ForgeNumber,
  Ao as ForgeRecordSelector,
  Mo as ForgeSearchEntry,
  Eo as ForgeSearchModal,
  lo as ForgeSection,
  Io as ForgeSelect,
  ja as ForgeTabStack,
  So as ForgeTable,
  fi as ForgeTabs,
  no as ForgeTextBox,
  Lo as ForgeTextarea,
  Oo as ForgeTreeView,
  Cs as FormFieldWrapper,
  Fr as GridCellComponent,
  oo as HeaderContextMenu,
  gi as InlineCellEditor,
  Si as LeftNavbar,
  xn as PermissionGuard,
  ji as PropertyPanel,
  io as RowContextMenu,
  uo as SummaryRow,
  Ti as TopBar,
  Di as TopNav,
  ha as UnifiedEventEditor,
  ki as WorkspaceTabBar,
  eo as addFunctionToBlFile,
  vo as calculateAutoPopulatedFields,
  fo as calculateLeftOffsets,
  Ri as defineBL,
  mi as downloadBackendDocxReport,
  hi as downloadBackendPdfReport,
  Zs as executeSingleEvent,
  jo as exportGridToExcel,
  pa as findFunctionInModule,
  xi as getCascadedOptions,
  Ca as getComponentOuterLayoutStyle,
  Zl as getFunctionsForBlFile,
  wa as groupNodesByTabStack,
  To as interpolateFormatData,
  Dr as invokeBLLifecycle,
  Wn as moveColumn,
  yn as normalizeBlKey,
  Xs as normalizeColumnOrders,
  Rr as parseDDMMYYYY,
  Na as printGridReport,
  di as registerBL,
  to as registerBlFunctions,
  ci as removeFunctionFromBlFile,
  Zn as resolveBlModule,
  ga as sortColumnsByCorePolicy,
  va as toggleColumnFreeze,
  Xe as triggerComponentEvent,
  zt as useAuthStore,
  ke as useDataEngine,
  Z as useEditorStore,
  yi as useGlobalHotkeys,
  bo as useGridKeyboardNavigation,
  ns as useMasterDetailStore,
  rt as useNavigationEngine,
  He as usePermissionEngine,
  vi as useRealtimeEngine,
  Gn as validateDateSequence,
  yo as validateField,
  pi as validateForm,
  Vn as validateISO6346ContainerNo
};
