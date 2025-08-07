function dw(e, n) {
    for (var i = 0; i < n.length; i++) {
        const o = n[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const a in o)
                if (a !== "default" && !(a in e)) {
                    const u = Object.getOwnPropertyDescriptor(o, a);
                    u && Object.defineProperty(e, a, u.get ? u : {
                        enumerable: !0,
                        get: () => o[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity), a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
    }

    function o(a) {
        if (a.ep) return;
        a.ep = !0;
        const u = i(a);
        fetch(a.href, u)
    }
})();

function eg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var fu = {
        exports: {}
    },
    Ki = {},
    hu = {
        exports: {}
    },
    me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;

function fw() {
    if (np) return me;
    np = 1;
    var e = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function w(N) {
        return N === null || typeof N != "object" ? null : (N = v && N[v] || N["@@iterator"], typeof N == "function" ? N : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = Object.assign,
        S = {};

    function T(N, F, ce) {
        this.props = N, this.context = F, this.refs = S, this.updater = ce || E
    }
    T.prototype.isReactComponent = {}, T.prototype.setState = function(N, F) {
        if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, F, "setState")
    }, T.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    };

    function A() {}
    A.prototype = T.prototype;

    function M(N, F, ce) {
        this.props = N, this.context = F, this.refs = S, this.updater = ce || E
    }
    var O = M.prototype = new A;
    O.constructor = M, b(O, T.prototype), O.isPureReactComponent = !0;
    var I = Array.isArray,
        V = Object.prototype.hasOwnProperty,
        $ = {
            current: null
        },
        H = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function G(N, F, ce) {
        var fe, ve = {},
            xe = null,
            Se = null;
        if (F != null)
            for (fe in F.ref !== void 0 && (Se = F.ref), F.key !== void 0 && (xe = "" + F.key), F) V.call(F, fe) && !H.hasOwnProperty(fe) && (ve[fe] = F[fe]);
        var Pe = arguments.length - 2;
        if (Pe === 1) ve.children = ce;
        else if (1 < Pe) {
            for (var be = Array(Pe), st = 0; st < Pe; st++) be[st] = arguments[st + 2];
            ve.children = be
        }
        if (N && N.defaultProps)
            for (fe in Pe = N.defaultProps, Pe) ve[fe] === void 0 && (ve[fe] = Pe[fe]);
        return {
            $$typeof: e,
            type: N,
            key: xe,
            ref: Se,
            props: ve,
            _owner: $.current
        }
    }

    function oe(N, F) {
        return {
            $$typeof: e,
            type: N.type,
            key: F,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }

    function re(N) {
        return typeof N == "object" && N !== null && N.$$typeof === e
    }

    function de(N) {
        var F = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(ce) {
            return F[ce]
        })
    }
    var ne = /\/+/g;

    function he(N, F) {
        return typeof N == "object" && N !== null && N.key != null ? de("" + N.key) : F.toString(36)
    }

    function q(N, F, ce, fe, ve) {
        var xe = typeof N;
        (xe === "undefined" || xe === "boolean") && (N = null);
        var Se = !1;
        if (N === null) Se = !0;
        else switch (xe) {
            case "string":
            case "number":
                Se = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                    case e:
                    case n:
                        Se = !0
                }
        }
        if (Se) return Se = N, ve = ve(Se), N = fe === "" ? "." + he(Se, 0) : fe, I(ve) ? (ce = "", N != null && (ce = N.replace(ne, "$&/") + "/"), q(ve, F, ce, "", function(st) {
            return st
        })) : ve != null && (re(ve) && (ve = oe(ve, ce + (!ve.key || Se && Se.key === ve.key ? "" : ("" + ve.key).replace(ne, "$&/") + "/") + N)), F.push(ve)), 1;
        if (Se = 0, fe = fe === "" ? "." : fe + ":", I(N))
            for (var Pe = 0; Pe < N.length; Pe++) {
                xe = N[Pe];
                var be = fe + he(xe, Pe);
                Se += q(xe, F, ce, be, ve)
            } else if (be = w(N), typeof be == "function")
                for (N = be.call(N), Pe = 0; !(xe = N.next()).done;) xe = xe.value, be = fe + he(xe, Pe++), Se += q(xe, F, ce, be, ve);
            else if (xe === "object") throw F = String(N), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
        return Se
    }

    function ge(N, F, ce) {
        if (N == null) return N;
        var fe = [],
            ve = 0;
        return q(N, fe, "", "", function(xe) {
            return F.call(ce, xe, ve++)
        }), fe
    }

    function le(N) {
        if (N._status === -1) {
            var F = N._result;
            F = F(), F.then(function(ce) {
                (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ce)
            }, function(ce) {
                (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ce)
            }), N._status === -1 && (N._status = 0, N._result = F)
        }
        if (N._status === 1) return N._result.default;
        throw N._result
    }
    var X = {
            current: null
        },
        _ = {
            transition: null
        },
        Q = {
            ReactCurrentDispatcher: X,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: $
        };

    function K() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return me.Children = {
        map: ge,
        forEach: function(N, F, ce) {
            ge(N, function() {
                F.apply(this, arguments)
            }, ce)
        },
        count: function(N) {
            var F = 0;
            return ge(N, function() {
                F++
            }), F
        },
        toArray: function(N) {
            return ge(N, function(F) {
                return F
            }) || []
        },
        only: function(N) {
            if (!re(N)) throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    }, me.Component = T, me.Fragment = i, me.Profiler = a, me.PureComponent = M, me.StrictMode = o, me.Suspense = p, me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, me.act = K, me.cloneElement = function(N, F, ce) {
        if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var fe = b({}, N.props),
            ve = N.key,
            xe = N.ref,
            Se = N._owner;
        if (F != null) {
            if (F.ref !== void 0 && (xe = F.ref, Se = $.current), F.key !== void 0 && (ve = "" + F.key), N.type && N.type.defaultProps) var Pe = N.type.defaultProps;
            for (be in F) V.call(F, be) && !H.hasOwnProperty(be) && (fe[be] = F[be] === void 0 && Pe !== void 0 ? Pe[be] : F[be])
        }
        var be = arguments.length - 2;
        if (be === 1) fe.children = ce;
        else if (1 < be) {
            Pe = Array(be);
            for (var st = 0; st < be; st++) Pe[st] = arguments[st + 2];
            fe.children = Pe
        }
        return {
            $$typeof: e,
            type: N.type,
            key: ve,
            ref: xe,
            props: fe,
            _owner: Se
        }
    }, me.createContext = function(N) {
        return N = {
            $$typeof: c,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, N.Provider = {
            $$typeof: u,
            _context: N
        }, N.Consumer = N
    }, me.createElement = G, me.createFactory = function(N) {
        var F = G.bind(null, N);
        return F.type = N, F
    }, me.createRef = function() {
        return {
            current: null
        }
    }, me.forwardRef = function(N) {
        return {
            $$typeof: f,
            render: N
        }
    }, me.isValidElement = re, me.lazy = function(N) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: le
        }
    }, me.memo = function(N, F) {
        return {
            $$typeof: m,
            type: N,
            compare: F === void 0 ? null : F
        }
    }, me.startTransition = function(N) {
        var F = _.transition;
        _.transition = {};
        try {
            N()
        } finally {
            _.transition = F
        }
    }, me.unstable_act = K, me.useCallback = function(N, F) {
        return X.current.useCallback(N, F)
    }, me.useContext = function(N) {
        return X.current.useContext(N)
    }, me.useDebugValue = function() {}, me.useDeferredValue = function(N) {
        return X.current.useDeferredValue(N)
    }, me.useEffect = function(N, F) {
        return X.current.useEffect(N, F)
    }, me.useId = function() {
        return X.current.useId()
    }, me.useImperativeHandle = function(N, F, ce) {
        return X.current.useImperativeHandle(N, F, ce)
    }, me.useInsertionEffect = function(N, F) {
        return X.current.useInsertionEffect(N, F)
    }, me.useLayoutEffect = function(N, F) {
        return X.current.useLayoutEffect(N, F)
    }, me.useMemo = function(N, F) {
        return X.current.useMemo(N, F)
    }, me.useReducer = function(N, F, ce) {
        return X.current.useReducer(N, F, ce)
    }, me.useRef = function(N) {
        return X.current.useRef(N)
    }, me.useState = function(N) {
        return X.current.useState(N)
    }, me.useSyncExternalStore = function(N, F, ce) {
        return X.current.useSyncExternalStore(N, F, ce)
    }, me.useTransition = function() {
        return X.current.useTransition()
    }, me.version = "18.3.1", me
}
var rp;

function ea() {
    return rp || (rp = 1, hu.exports = fw()), hu.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip;

function hw() {
    if (ip) return Ki;
    ip = 1;
    var e = ea(),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function c(f, p, m) {
        var g, v = {},
            w = null,
            E = null;
        m !== void 0 && (w = "" + m), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (E = p.ref);
        for (g in p) o.call(p, g) && !u.hasOwnProperty(g) && (v[g] = p[g]);
        if (f && f.defaultProps)
            for (g in p = f.defaultProps, p) v[g] === void 0 && (v[g] = p[g]);
        return {
            $$typeof: n,
            type: f,
            key: w,
            ref: E,
            props: v,
            _owner: a.current
        }
    }
    return Ki.Fragment = i, Ki.jsx = c, Ki.jsxs = c, Ki
}
var sp;

function pw() {
    return sp || (sp = 1, fu.exports = hw()), fu.exports
}
var x = pw(),
    bo = {},
    pu = {
        exports: {}
    },
    pt = {},
    mu = {
        exports: {}
    },
    gu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;

function mw() {
    return op || (op = 1, function(e) {
        function n(_, Q) {
            var K = _.length;
            _.push(Q);
            e: for (; 0 < K;) {
                var N = K - 1 >>> 1,
                    F = _[N];
                if (0 < a(F, Q)) _[N] = Q, _[K] = F, K = N;
                else break e
            }
        }

        function i(_) {
            return _.length === 0 ? null : _[0]
        }

        function o(_) {
            if (_.length === 0) return null;
            var Q = _[0],
                K = _.pop();
            if (K !== Q) {
                _[0] = K;
                e: for (var N = 0, F = _.length, ce = F >>> 1; N < ce;) {
                    var fe = 2 * (N + 1) - 1,
                        ve = _[fe],
                        xe = fe + 1,
                        Se = _[xe];
                    if (0 > a(ve, K)) xe < F && 0 > a(Se, ve) ? (_[N] = Se, _[xe] = K, N = xe) : (_[N] = ve, _[fe] = K, N = fe);
                    else if (xe < F && 0 > a(Se, K)) _[N] = Se, _[xe] = K, N = xe;
                    else break e
                }
            }
            return Q
        }

        function a(_, Q) {
            var K = _.sortIndex - Q.sortIndex;
            return K !== 0 ? K : _.id - Q.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            e.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date,
                f = c.now();
            e.unstable_now = function() {
                return c.now() - f
            }
        }
        var p = [],
            m = [],
            g = 1,
            v = null,
            w = 3,
            E = !1,
            b = !1,
            S = !1,
            T = typeof setTimeout == "function" ? setTimeout : null,
            A = typeof clearTimeout == "function" ? clearTimeout : null,
            M = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function O(_) {
            for (var Q = i(m); Q !== null;) {
                if (Q.callback === null) o(m);
                else if (Q.startTime <= _) o(m), Q.sortIndex = Q.expirationTime, n(p, Q);
                else break;
                Q = i(m)
            }
        }

        function I(_) {
            if (S = !1, O(_), !b)
                if (i(p) !== null) b = !0, le(V);
                else {
                    var Q = i(m);
                    Q !== null && X(I, Q.startTime - _)
                }
        }

        function V(_, Q) {
            b = !1, S && (S = !1, A(G), G = -1), E = !0;
            var K = w;
            try {
                for (O(Q), v = i(p); v !== null && (!(v.expirationTime > Q) || _ && !de());) {
                    var N = v.callback;
                    if (typeof N == "function") {
                        v.callback = null, w = v.priorityLevel;
                        var F = N(v.expirationTime <= Q);
                        Q = e.unstable_now(), typeof F == "function" ? v.callback = F : v === i(p) && o(p), O(Q)
                    } else o(p);
                    v = i(p)
                }
                if (v !== null) var ce = !0;
                else {
                    var fe = i(m);
                    fe !== null && X(I, fe.startTime - Q), ce = !1
                }
                return ce
            } finally {
                v = null, w = K, E = !1
            }
        }
        var $ = !1,
            H = null,
            G = -1,
            oe = 5,
            re = -1;

        function de() {
            return !(e.unstable_now() - re < oe)
        }

        function ne() {
            if (H !== null) {
                var _ = e.unstable_now();
                re = _;
                var Q = !0;
                try {
                    Q = H(!0, _)
                } finally {
                    Q ? he() : ($ = !1, H = null)
                }
            } else $ = !1
        }
        var he;
        if (typeof M == "function") he = function() {
            M(ne)
        };
        else if (typeof MessageChannel < "u") {
            var q = new MessageChannel,
                ge = q.port2;
            q.port1.onmessage = ne, he = function() {
                ge.postMessage(null)
            }
        } else he = function() {
            T(ne, 0)
        };

        function le(_) {
            H = _, $ || ($ = !0, he())
        }

        function X(_, Q) {
            G = T(function() {
                _(e.unstable_now())
            }, Q)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
            _.callback = null
        }, e.unstable_continueExecution = function() {
            b || E || (b = !0, le(V))
        }, e.unstable_forceFrameRate = function(_) {
            0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < _ ? Math.floor(1e3 / _) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return w
        }, e.unstable_getFirstCallbackNode = function() {
            return i(p)
        }, e.unstable_next = function(_) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var Q = 3;
                    break;
                default:
                    Q = w
            }
            var K = w;
            w = Q;
            try {
                return _()
            } finally {
                w = K
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(_, Q) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3
            }
            var K = w;
            w = _;
            try {
                return Q()
            } finally {
                w = K
            }
        }, e.unstable_scheduleCallback = function(_, Q, K) {
            var N = e.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? N + K : N) : K = N, _) {
                case 1:
                    var F = -1;
                    break;
                case 2:
                    F = 250;
                    break;
                case 5:
                    F = 1073741823;
                    break;
                case 4:
                    F = 1e4;
                    break;
                default:
                    F = 5e3
            }
            return F = K + F, _ = {
                id: g++,
                callback: Q,
                priorityLevel: _,
                startTime: K,
                expirationTime: F,
                sortIndex: -1
            }, K > N ? (_.sortIndex = K, n(m, _), i(p) === null && _ === i(m) && (S ? (A(G), G = -1) : S = !0, X(I, K - N))) : (_.sortIndex = F, n(p, _), b || E || (b = !0, le(V))), _
        }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(_) {
            var Q = w;
            return function() {
                var K = w;
                w = Q;
                try {
                    return _.apply(this, arguments)
                } finally {
                    w = K
                }
            }
        }
    }(gu)), gu
}
var ap;

function gw() {
    return ap || (ap = 1, mu.exports = mw()), mu.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;

function yw() {
    if (lp) return pt;
    lp = 1;
    var e = ea(),
        n = gw();

    function i(t) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = new Set,
        a = {};

    function u(t, r) {
        c(t, r), c(t + "Capture", r)
    }

    function c(t, r) {
        for (a[t] = r, t = 0; t < r.length; t++) o.add(r[t])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        p = Object.prototype.hasOwnProperty,
        m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        v = {};

    function w(t) {
        return p.call(v, t) ? !0 : p.call(g, t) ? !1 : m.test(t) ? v[t] = !0 : (g[t] = !0, !1)
    }

    function E(t, r, s, l) {
        if (s !== null && s.type === 0) return !1;
        switch (typeof r) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return l ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
            default:
                return !1
        }
    }

    function b(t, r, s, l) {
        if (r === null || typeof r > "u" || E(t, r, s, l)) return !0;
        if (l) return !1;
        if (s !== null) switch (s.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
        }
        return !1
    }

    function S(t, r, s, l, d, h, y) {
        this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = h, this.removeEmptyString = y
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        T[t] = new S(t, 0, !1, t, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(t) {
        var r = t[0];
        T[r] = new S(r, 1, !1, t[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        T[t] = new S(t, 2, !1, t.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        T[t] = new S(t, 2, !1, t, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        T[t] = new S(t, 3, !1, t.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        T[t] = new S(t, 3, !0, t, null, !1, !1)
    }), ["capture", "download"].forEach(function(t) {
        T[t] = new S(t, 4, !1, t, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(t) {
        T[t] = new S(t, 6, !1, t, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(t) {
        T[t] = new S(t, 5, !1, t.toLowerCase(), null, !1, !1)
    });
    var A = /[\-:]([a-z])/g;

    function M(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var r = t.replace(A, M);
        T[r] = new S(r, 1, !1, t, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var r = t.replace(A, M);
        T[r] = new S(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var r = t.replace(A, M);
        T[r] = new S(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
        T[t] = new S(t, 1, !1, t.toLowerCase(), null, !1, !1)
    }), T.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
        T[t] = new S(t, 1, !1, t.toLowerCase(), null, !0, !0)
    });

    function O(t, r, s, l) {
        var d = T.hasOwnProperty(r) ? T[r] : null;
        (d !== null ? d.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (b(r, s, d, l) && (s = null), l || d === null ? w(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (r = d.attributeName, l = d.attributeNamespace, s === null ? t.removeAttribute(r) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? t.setAttributeNS(l, r, s) : t.setAttribute(r, s))))
    }
    var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        V = Symbol.for("react.element"),
        $ = Symbol.for("react.portal"),
        H = Symbol.for("react.fragment"),
        G = Symbol.for("react.strict_mode"),
        oe = Symbol.for("react.profiler"),
        re = Symbol.for("react.provider"),
        de = Symbol.for("react.context"),
        ne = Symbol.for("react.forward_ref"),
        he = Symbol.for("react.suspense"),
        q = Symbol.for("react.suspense_list"),
        ge = Symbol.for("react.memo"),
        le = Symbol.for("react.lazy"),
        X = Symbol.for("react.offscreen"),
        _ = Symbol.iterator;

    function Q(t) {
        return t === null || typeof t != "object" ? null : (t = _ && t[_] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var K = Object.assign,
        N;

    function F(t) {
        if (N === void 0) try {
            throw Error()
        } catch (s) {
            var r = s.stack.trim().match(/\n( *(at )?)/);
            N = r && r[1] || ""
        }
        return `
` + N + t
    }
    var ce = !1;

    function fe(t, r) {
        if (!t || ce) return "";
        ce = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() {
                        throw Error()
                    }, Object.defineProperty(r.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(r, [])
                    } catch (L) {
                        var l = L
                    }
                    Reflect.construct(t, [], r)
                } else {
                    try {
                        r.call()
                    } catch (L) {
                        l = L
                    }
                    t.call(r.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (L) {
                    l = L
                }
                t()
            }
        } catch (L) {
            if (L && l && typeof L.stack == "string") {
                for (var d = L.stack.split(`
`), h = l.stack.split(`
`), y = d.length - 1, C = h.length - 1; 1 <= y && 0 <= C && d[y] !== h[C];) C--;
                for (; 1 <= y && 0 <= C; y--, C--)
                    if (d[y] !== h[C]) {
                        if (y !== 1 || C !== 1)
                            do
                                if (y--, C--, 0 > C || d[y] !== h[C]) {
                                    var k = `
` + d[y].replace(" at new ", " at ");
                                    return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k
                                } while (1 <= y && 0 <= C);
                        break
                    }
            }
        } finally {
            ce = !1, Error.prepareStackTrace = s
        }
        return (t = t ? t.displayName || t.name : "") ? F(t) : ""
    }

    function ve(t) {
        switch (t.tag) {
            case 5:
                return F(t.type);
            case 16:
                return F("Lazy");
            case 13:
                return F("Suspense");
            case 19:
                return F("SuspenseList");
            case 0:
            case 2:
            case 15:
                return t = fe(t.type, !1), t;
            case 11:
                return t = fe(t.type.render, !1), t;
            case 1:
                return t = fe(t.type, !0), t;
            default:
                return ""
        }
    }

    function xe(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case H:
                return "Fragment";
            case $:
                return "Portal";
            case oe:
                return "Profiler";
            case G:
                return "StrictMode";
            case he:
                return "Suspense";
            case q:
                return "SuspenseList"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case de:
                return (t.displayName || "Context") + ".Consumer";
            case re:
                return (t._context.displayName || "Context") + ".Provider";
            case ne:
                var r = t.render;
                return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case ge:
                return r = t.displayName || null, r !== null ? r : xe(t.type) || "Memo";
            case le:
                r = t._payload, t = t._init;
                try {
                    return xe(t(r))
                } catch {}
        }
        return null
    }

    function Se(t) {
        var r = t.type;
        switch (t.tag) {
            case 24:
                return "Cache";
            case 9:
                return (r.displayName || "Context") + ".Consumer";
            case 10:
                return (r._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return r;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return xe(r);
            case 8:
                return r === G ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof r == "function") return r.displayName || r.name || null;
                if (typeof r == "string") return r
        }
        return null
    }

    function Pe(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function be(t) {
        var r = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
    }

    function st(t) {
        var r = be(t) ? "checked" : "value",
            s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
            l = "" + t[r];
        if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var d = s.get,
                h = s.set;
            return Object.defineProperty(t, r, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(y) {
                    l = "" + y, h.call(this, y)
                }
            }), Object.defineProperty(t, r, {
                enumerable: s.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(y) {
                    l = "" + y
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[r]
                }
            }
        }
    }

    function xr(t) {
        t._valueTracker || (t._valueTracker = st(t))
    }

    function gs(t) {
        if (!t) return !1;
        var r = t._valueTracker;
        if (!r) return !0;
        var s = r.getValue(),
            l = "";
        return t && (l = be(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== s ? (r.setValue(t), !0) : !1
    }

    function tn(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }

    function xa(t, r) {
        var s = r.checked;
        return K({}, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ?? t._wrapperState.initialChecked
        })
    }

    function ld(t, r) {
        var s = r.defaultValue == null ? "" : r.defaultValue,
            l = r.checked != null ? r.checked : r.defaultChecked;
        s = Pe(r.value != null ? r.value : s), t._wrapperState = {
            initialChecked: l,
            initialValue: s,
            controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
        }
    }

    function ud(t, r) {
        r = r.checked, r != null && O(t, "checked", r, !1)
    }

    function wa(t, r) {
        ud(t, r);
        var s = Pe(r.value),
            l = r.type;
        if (s != null) l === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
        else if (l === "submit" || l === "reset") {
            t.removeAttribute("value");
            return
        }
        r.hasOwnProperty("value") ? Sa(t, r.type, s) : r.hasOwnProperty("defaultValue") && Sa(t, r.type, Pe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked)
    }

    function cd(t, r, s) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var l = r.type;
            if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null)) return;
            r = "" + t._wrapperState.initialValue, s || r === t.value || (t.value = r), t.defaultValue = r
        }
        s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s)
    }

    function Sa(t, r, s) {
        (r !== "number" || tn(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s))
    }
    var ai = Array.isArray;

    function wr(t, r, s, l) {
        if (t = t.options, r) {
            r = {};
            for (var d = 0; d < s.length; d++) r["$" + s[d]] = !0;
            for (s = 0; s < t.length; s++) d = r.hasOwnProperty("$" + t[s].value), t[s].selected !== d && (t[s].selected = d), d && l && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + Pe(s), r = null, d = 0; d < t.length; d++) {
                if (t[d].value === s) {
                    t[d].selected = !0, l && (t[d].defaultSelected = !0);
                    return
                }
                r !== null || t[d].disabled || (r = t[d])
            }
            r !== null && (r.selected = !0)
        }
    }

    function Pa(t, r) {
        if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
        return K({}, r, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function dd(t, r) {
        var s = r.value;
        if (s == null) {
            if (s = r.children, r = r.defaultValue, s != null) {
                if (r != null) throw Error(i(92));
                if (ai(s)) {
                    if (1 < s.length) throw Error(i(93));
                    s = s[0]
                }
                r = s
            }
            r == null && (r = ""), s = r
        }
        t._wrapperState = {
            initialValue: Pe(s)
        }
    }

    function fd(t, r) {
        var s = Pe(r.value),
            l = Pe(r.defaultValue);
        s != null && (s = "" + s, s !== t.value && (t.value = s), r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), l != null && (t.defaultValue = "" + l)
    }

    function hd(t) {
        var r = t.textContent;
        r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r)
    }

    function pd(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Ca(t, r) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? pd(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var ys, md = function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, l, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(r, s, l, d)
            })
        } : t
    }(function(t, r) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
        else {
            for (ys = ys || document.createElement("div"), ys.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ys.firstChild; t.firstChild;) t.removeChild(t.firstChild);
            for (; r.firstChild;) t.appendChild(r.firstChild)
        }
    });

    function li(t, r) {
        if (r) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = r;
                return
            }
        }
        t.textContent = r
    }
    var ui = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        m0 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ui).forEach(function(t) {
        m0.forEach(function(r) {
            r = r + t.charAt(0).toUpperCase() + t.substring(1), ui[r] = ui[t]
        })
    });

    function gd(t, r, s) {
        return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || ui.hasOwnProperty(t) && ui[t] ? ("" + r).trim() : r + "px"
    }

    function yd(t, r) {
        t = t.style;
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var l = s.indexOf("--") === 0,
                    d = gd(s, r[s], l);
                s === "float" && (s = "cssFloat"), l ? t.setProperty(s, d) : t[s] = d
            }
    }
    var g0 = K({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Ea(t, r) {
        if (r) {
            if (g0[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, t));
            if (r.dangerouslySetInnerHTML != null) {
                if (r.children != null) throw Error(i(60));
                if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(i(61))
            }
            if (r.style != null && typeof r.style != "object") throw Error(i(62))
        }
    }

    function Ta(t, r) {
        if (t.indexOf("-") === -1) return typeof r.is == "string";
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var ba = null;

    function ka(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Ra = null,
        Sr = null,
        Pr = null;

    function vd(t) {
        if (t = ji(t)) {
            if (typeof Ra != "function") throw Error(i(280));
            var r = t.stateNode;
            r && (r = zs(r), Ra(t.stateNode, t.type, r))
        }
    }

    function xd(t) {
        Sr ? Pr ? Pr.push(t) : Pr = [t] : Sr = t
    }

    function wd() {
        if (Sr) {
            var t = Sr,
                r = Pr;
            if (Pr = Sr = null, vd(t), r)
                for (t = 0; t < r.length; t++) vd(r[t])
        }
    }

    function Sd(t, r) {
        return t(r)
    }

    function Pd() {}
    var Aa = !1;

    function Cd(t, r, s) {
        if (Aa) return t(r, s);
        Aa = !0;
        try {
            return Sd(t, r, s)
        } finally {
            Aa = !1, (Sr !== null || Pr !== null) && (Pd(), wd())
        }
    }

    function ci(t, r) {
        var s = t.stateNode;
        if (s === null) return null;
        var l = zs(s);
        if (l === null) return null;
        s = l[r];
        e: switch (r) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
                break e;
            default:
                t = !1
        }
        if (t) return null;
        if (s && typeof s != "function") throw Error(i(231, r, typeof s));
        return s
    }
    var Na = !1;
    if (f) try {
        var di = {};
        Object.defineProperty(di, "passive", {
            get: function() {
                Na = !0
            }
        }), window.addEventListener("test", di, di), window.removeEventListener("test", di, di)
    } catch {
        Na = !1
    }

    function y0(t, r, s, l, d, h, y, C, k) {
        var L = Array.prototype.slice.call(arguments, 3);
        try {
            r.apply(s, L)
        } catch (B) {
            this.onError(B)
        }
    }
    var fi = !1,
        vs = null,
        xs = !1,
        ja = null,
        v0 = {
            onError: function(t) {
                fi = !0, vs = t
            }
        };

    function x0(t, r, s, l, d, h, y, C, k) {
        fi = !1, vs = null, y0.apply(v0, arguments)
    }

    function w0(t, r, s, l, d, h, y, C, k) {
        if (x0.apply(this, arguments), fi) {
            if (fi) {
                var L = vs;
                fi = !1, vs = null
            } else throw Error(i(198));
            xs || (xs = !0, ja = L)
        }
    }

    function Yn(t) {
        var r = t,
            s = t;
        if (t.alternate)
            for (; r.return;) r = r.return;
        else {
            t = r;
            do r = t, (r.flags & 4098) !== 0 && (s = r.return), t = r.return; while (t)
        }
        return r.tag === 3 ? s : null
    }

    function Ed(t) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated
        }
        return null
    }

    function Td(t) {
        if (Yn(t) !== t) throw Error(i(188))
    }

    function S0(t) {
        var r = t.alternate;
        if (!r) {
            if (r = Yn(t), r === null) throw Error(i(188));
            return r !== t ? null : t
        }
        for (var s = t, l = r;;) {
            var d = s.return;
            if (d === null) break;
            var h = d.alternate;
            if (h === null) {
                if (l = d.return, l !== null) {
                    s = l;
                    continue
                }
                break
            }
            if (d.child === h.child) {
                for (h = d.child; h;) {
                    if (h === s) return Td(d), t;
                    if (h === l) return Td(d), r;
                    h = h.sibling
                }
                throw Error(i(188))
            }
            if (s.return !== l.return) s = d, l = h;
            else {
                for (var y = !1, C = d.child; C;) {
                    if (C === s) {
                        y = !0, s = d, l = h;
                        break
                    }
                    if (C === l) {
                        y = !0, l = d, s = h;
                        break
                    }
                    C = C.sibling
                }
                if (!y) {
                    for (C = h.child; C;) {
                        if (C === s) {
                            y = !0, s = h, l = d;
                            break
                        }
                        if (C === l) {
                            y = !0, l = h, s = d;
                            break
                        }
                        C = C.sibling
                    }
                    if (!y) throw Error(i(189))
                }
            }
            if (s.alternate !== l) throw Error(i(190))
        }
        if (s.tag !== 3) throw Error(i(188));
        return s.stateNode.current === s ? t : r
    }

    function bd(t) {
        return t = S0(t), t !== null ? kd(t) : null
    }

    function kd(t) {
        if (t.tag === 5 || t.tag === 6) return t;
        for (t = t.child; t !== null;) {
            var r = kd(t);
            if (r !== null) return r;
            t = t.sibling
        }
        return null
    }
    var Rd = n.unstable_scheduleCallback,
        Ad = n.unstable_cancelCallback,
        P0 = n.unstable_shouldYield,
        C0 = n.unstable_requestPaint,
        Ie = n.unstable_now,
        E0 = n.unstable_getCurrentPriorityLevel,
        Ma = n.unstable_ImmediatePriority,
        Nd = n.unstable_UserBlockingPriority,
        ws = n.unstable_NormalPriority,
        T0 = n.unstable_LowPriority,
        jd = n.unstable_IdlePriority,
        Ss = null,
        Wt = null;

    function b0(t) {
        if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
            Wt.onCommitFiberRoot(Ss, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
    }
    var Mt = Math.clz32 ? Math.clz32 : A0,
        k0 = Math.log,
        R0 = Math.LN2;

    function A0(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (k0(t) / R0 | 0) | 0
    }
    var Ps = 64,
        Cs = 4194304;

    function hi(t) {
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return t & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return t
        }
    }

    function Es(t, r) {
        var s = t.pendingLanes;
        if (s === 0) return 0;
        var l = 0,
            d = t.suspendedLanes,
            h = t.pingedLanes,
            y = s & 268435455;
        if (y !== 0) {
            var C = y & ~d;
            C !== 0 ? l = hi(C) : (h &= y, h !== 0 && (l = hi(h)))
        } else y = s & ~d, y !== 0 ? l = hi(y) : h !== 0 && (l = hi(h));
        if (l === 0) return 0;
        if (r !== 0 && r !== l && (r & d) === 0 && (d = l & -l, h = r & -r, d >= h || d === 16 && (h & 4194240) !== 0)) return r;
        if ((l & 4) !== 0 && (l |= s & 16), r = t.entangledLanes, r !== 0)
            for (t = t.entanglements, r &= l; 0 < r;) s = 31 - Mt(r), d = 1 << s, l |= t[s], r &= ~d;
        return l
    }

    function N0(t, r) {
        switch (t) {
            case 1:
            case 2:
            case 4:
                return r + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return r + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function j0(t, r) {
        for (var s = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, h = t.pendingLanes; 0 < h;) {
            var y = 31 - Mt(h),
                C = 1 << y,
                k = d[y];
            k === -1 ? ((C & s) === 0 || (C & l) !== 0) && (d[y] = N0(C, r)) : k <= r && (t.expiredLanes |= C), h &= ~C
        }
    }

    function Da(t) {
        return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }

    function Md() {
        var t = Ps;
        return Ps <<= 1, (Ps & 4194240) === 0 && (Ps = 64), t
    }

    function Oa(t) {
        for (var r = [], s = 0; 31 > s; s++) r.push(t);
        return r
    }

    function pi(t, r, s) {
        t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - Mt(r), t[r] = s
    }

    function M0(t, r) {
        var s = t.pendingLanes & ~r;
        t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
        var l = t.eventTimes;
        for (t = t.expirationTimes; 0 < s;) {
            var d = 31 - Mt(s),
                h = 1 << d;
            r[d] = 0, l[d] = -1, t[d] = -1, s &= ~h
        }
    }

    function La(t, r) {
        var s = t.entangledLanes |= r;
        for (t = t.entanglements; s;) {
            var l = 31 - Mt(s),
                d = 1 << l;
            d & r | t[l] & r && (t[l] |= r), s &= ~d
        }
    }
    var Ee = 0;

    function Dd(t) {
        return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Od, _a, Ld, _d, Id, Ia = !1,
        Ts = [],
        vn = null,
        xn = null,
        wn = null,
        mi = new Map,
        gi = new Map,
        Sn = [],
        D0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Vd(t, r) {
        switch (t) {
            case "focusin":
            case "focusout":
                vn = null;
                break;
            case "dragenter":
            case "dragleave":
                xn = null;
                break;
            case "mouseover":
            case "mouseout":
                wn = null;
                break;
            case "pointerover":
            case "pointerout":
                mi.delete(r.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                gi.delete(r.pointerId)
        }
    }

    function yi(t, r, s, l, d, h) {
        return t === null || t.nativeEvent !== h ? (t = {
            blockedOn: r,
            domEventName: s,
            eventSystemFlags: l,
            nativeEvent: h,
            targetContainers: [d]
        }, r !== null && (r = ji(r), r !== null && _a(r)), t) : (t.eventSystemFlags |= l, r = t.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), t)
    }

    function O0(t, r, s, l, d) {
        switch (r) {
            case "focusin":
                return vn = yi(vn, t, r, s, l, d), !0;
            case "dragenter":
                return xn = yi(xn, t, r, s, l, d), !0;
            case "mouseover":
                return wn = yi(wn, t, r, s, l, d), !0;
            case "pointerover":
                var h = d.pointerId;
                return mi.set(h, yi(mi.get(h) || null, t, r, s, l, d)), !0;
            case "gotpointercapture":
                return h = d.pointerId, gi.set(h, yi(gi.get(h) || null, t, r, s, l, d)), !0
        }
        return !1
    }

    function Fd(t) {
        var r = Xn(t.target);
        if (r !== null) {
            var s = Yn(r);
            if (s !== null) {
                if (r = s.tag, r === 13) {
                    if (r = Ed(s), r !== null) {
                        t.blockedOn = r, Id(t.priority, function() {
                            Ld(s)
                        });
                        return
                    }
                } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function bs(t) {
        if (t.blockedOn !== null) return !1;
        for (var r = t.targetContainers; 0 < r.length;) {
            var s = Fa(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var l = new s.constructor(s.type, s);
                ba = l, s.target.dispatchEvent(l), ba = null
            } else return r = ji(s), r !== null && _a(r), t.blockedOn = s, !1;
            r.shift()
        }
        return !0
    }

    function zd(t, r, s) {
        bs(t) && s.delete(r)
    }

    function L0() {
        Ia = !1, vn !== null && bs(vn) && (vn = null), xn !== null && bs(xn) && (xn = null), wn !== null && bs(wn) && (wn = null), mi.forEach(zd), gi.forEach(zd)
    }

    function vi(t, r) {
        t.blockedOn === r && (t.blockedOn = null, Ia || (Ia = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, L0)))
    }

    function xi(t) {
        function r(d) {
            return vi(d, t)
        }
        if (0 < Ts.length) {
            vi(Ts[0], t);
            for (var s = 1; s < Ts.length; s++) {
                var l = Ts[s];
                l.blockedOn === t && (l.blockedOn = null)
            }
        }
        for (vn !== null && vi(vn, t), xn !== null && vi(xn, t), wn !== null && vi(wn, t), mi.forEach(r), gi.forEach(r), s = 0; s < Sn.length; s++) l = Sn[s], l.blockedOn === t && (l.blockedOn = null);
        for (; 0 < Sn.length && (s = Sn[0], s.blockedOn === null);) Fd(s), s.blockedOn === null && Sn.shift()
    }
    var Cr = I.ReactCurrentBatchConfig,
        ks = !0;

    function _0(t, r, s, l) {
        var d = Ee,
            h = Cr.transition;
        Cr.transition = null;
        try {
            Ee = 1, Va(t, r, s, l)
        } finally {
            Ee = d, Cr.transition = h
        }
    }

    function I0(t, r, s, l) {
        var d = Ee,
            h = Cr.transition;
        Cr.transition = null;
        try {
            Ee = 4, Va(t, r, s, l)
        } finally {
            Ee = d, Cr.transition = h
        }
    }

    function Va(t, r, s, l) {
        if (ks) {
            var d = Fa(t, r, s, l);
            if (d === null) nl(t, r, l, Rs, s), Vd(t, l);
            else if (O0(d, t, r, s, l)) l.stopPropagation();
            else if (Vd(t, l), r & 4 && -1 < D0.indexOf(t)) {
                for (; d !== null;) {
                    var h = ji(d);
                    if (h !== null && Od(h), h = Fa(t, r, s, l), h === null && nl(t, r, l, Rs, s), h === d) break;
                    d = h
                }
                d !== null && l.stopPropagation()
            } else nl(t, r, l, null, s)
        }
    }
    var Rs = null;

    function Fa(t, r, s, l) {
        if (Rs = null, t = ka(l), t = Xn(t), t !== null)
            if (r = Yn(t), r === null) t = null;
            else if (s = r.tag, s === 13) {
            if (t = Ed(r), t !== null) return t;
            t = null
        } else if (s === 3) {
            if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
            t = null
        } else r !== t && (t = null);
        return Rs = t, null
    }

    function Bd(t) {
        switch (t) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (E0()) {
                    case Ma:
                        return 1;
                    case Nd:
                        return 4;
                    case ws:
                    case T0:
                        return 16;
                    case jd:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Pn = null,
        za = null,
        As = null;

    function Ud() {
        if (As) return As;
        var t, r = za,
            s = r.length,
            l, d = "value" in Pn ? Pn.value : Pn.textContent,
            h = d.length;
        for (t = 0; t < s && r[t] === d[t]; t++);
        var y = s - t;
        for (l = 1; l <= y && r[s - l] === d[h - l]; l++);
        return As = d.slice(t, 1 < l ? 1 - l : void 0)
    }

    function Ns(t) {
        var r = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function js() {
        return !0
    }

    function $d() {
        return !1
    }

    function yt(t) {
        function r(s, l, d, h, y) {
            this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = h, this.target = y, this.currentTarget = null;
            for (var C in t) t.hasOwnProperty(C) && (s = t[C], this[C] = s ? s(h) : h[C]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? js : $d, this.isPropagationStopped = $d, this
        }
        return K(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = js)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = js)
            },
            persist: function() {},
            isPersistent: js
        }), r
    }
    var Er = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ba = yt(Er),
        wi = K({}, Er, {
            view: 0,
            detail: 0
        }),
        V0 = yt(wi),
        Ua, $a, Si, Ms = K({}, wi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ha,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Si && (Si && t.type === "mousemove" ? (Ua = t.screenX - Si.screenX, $a = t.screenY - Si.screenY) : $a = Ua = 0, Si = t), Ua)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : $a
            }
        }),
        Wd = yt(Ms),
        F0 = K({}, Ms, {
            dataTransfer: 0
        }),
        z0 = yt(F0),
        B0 = K({}, wi, {
            relatedTarget: 0
        }),
        Wa = yt(B0),
        U0 = K({}, Er, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        $0 = yt(U0),
        W0 = K({}, Er, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        H0 = yt(W0),
        K0 = K({}, Er, {
            data: 0
        }),
        Hd = yt(K0),
        G0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Q0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        q0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Y0(t) {
        var r = this.nativeEvent;
        return r.getModifierState ? r.getModifierState(t) : (t = q0[t]) ? !!r[t] : !1
    }

    function Ha() {
        return Y0
    }
    var X0 = K({}, wi, {
            key: function(t) {
                if (t.key) {
                    var r = G0[t.key] || t.key;
                    if (r !== "Unidentified") return r
                }
                return t.type === "keypress" ? (t = Ns(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Q0[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ha,
            charCode: function(t) {
                return t.type === "keypress" ? Ns(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? Ns(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        Z0 = yt(X0),
        J0 = K({}, Ms, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Kd = yt(J0),
        ex = K({}, wi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ha
        }),
        tx = yt(ex),
        nx = K({}, Er, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        rx = yt(nx),
        ix = K({}, Ms, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        sx = yt(ix),
        ox = [9, 13, 27, 32],
        Ka = f && "CompositionEvent" in window,
        Pi = null;
    f && "documentMode" in document && (Pi = document.documentMode);
    var ax = f && "TextEvent" in window && !Pi,
        Gd = f && (!Ka || Pi && 8 < Pi && 11 >= Pi),
        Qd = " ",
        qd = !1;

    function Yd(t, r) {
        switch (t) {
            case "keyup":
                return ox.indexOf(r.keyCode) !== -1;
            case "keydown":
                return r.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Xd(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Tr = !1;

    function lx(t, r) {
        switch (t) {
            case "compositionend":
                return Xd(r);
            case "keypress":
                return r.which !== 32 ? null : (qd = !0, Qd);
            case "textInput":
                return t = r.data, t === Qd && qd ? null : t;
            default:
                return null
        }
    }

    function ux(t, r) {
        if (Tr) return t === "compositionend" || !Ka && Yd(t, r) ? (t = Ud(), As = za = Pn = null, Tr = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
                    if (r.char && 1 < r.char.length) return r.char;
                    if (r.which) return String.fromCharCode(r.which)
                }
                return null;
            case "compositionend":
                return Gd && r.locale !== "ko" ? null : r.data;
            default:
                return null
        }
    }
    var cx = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Zd(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r === "input" ? !!cx[t.type] : r === "textarea"
    }

    function Jd(t, r, s, l) {
        xd(l), r = Is(r, "onChange"), 0 < r.length && (s = new Ba("onChange", "change", null, s, l), t.push({
            event: s,
            listeners: r
        }))
    }
    var Ci = null,
        Ei = null;

    function dx(t) {
        vf(t, 0)
    }

    function Ds(t) {
        var r = Nr(t);
        if (gs(r)) return t
    }

    function fx(t, r) {
        if (t === "change") return r
    }
    var ef = !1;
    if (f) {
        var Ga;
        if (f) {
            var Qa = "oninput" in document;
            if (!Qa) {
                var tf = document.createElement("div");
                tf.setAttribute("oninput", "return;"), Qa = typeof tf.oninput == "function"
            }
            Ga = Qa
        } else Ga = !1;
        ef = Ga && (!document.documentMode || 9 < document.documentMode)
    }

    function nf() {
        Ci && (Ci.detachEvent("onpropertychange", rf), Ei = Ci = null)
    }

    function rf(t) {
        if (t.propertyName === "value" && Ds(Ei)) {
            var r = [];
            Jd(r, Ei, t, ka(t)), Cd(dx, r)
        }
    }

    function hx(t, r, s) {
        t === "focusin" ? (nf(), Ci = r, Ei = s, Ci.attachEvent("onpropertychange", rf)) : t === "focusout" && nf()
    }

    function px(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ds(Ei)
    }

    function mx(t, r) {
        if (t === "click") return Ds(r)
    }

    function gx(t, r) {
        if (t === "input" || t === "change") return Ds(r)
    }

    function yx(t, r) {
        return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r
    }
    var Dt = typeof Object.is == "function" ? Object.is : yx;

    function Ti(t, r) {
        if (Dt(t, r)) return !0;
        if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
        var s = Object.keys(t),
            l = Object.keys(r);
        if (s.length !== l.length) return !1;
        for (l = 0; l < s.length; l++) {
            var d = s[l];
            if (!p.call(r, d) || !Dt(t[d], r[d])) return !1
        }
        return !0
    }

    function sf(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function of(t, r) {
        var s = sf(t);
        t = 0;
        for (var l; s;) {
            if (s.nodeType === 3) {
                if (l = t + s.textContent.length, t <= r && l >= r) return {
                    node: s,
                    offset: r - t
                };
                t = l
            }
            e: {
                for (; s;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = sf(s)
        }
    }

    function af(t, r) {
        return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? af(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1
    }

    function lf() {
        for (var t = window, r = tn(); r instanceof t.HTMLIFrameElement;) {
            try {
                var s = typeof r.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s) t = r.contentWindow;
            else break;
            r = tn(t.document)
        }
        return r
    }

    function qa(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true")
    }

    function vx(t) {
        var r = lf(),
            s = t.focusedElem,
            l = t.selectionRange;
        if (r !== s && s && s.ownerDocument && af(s.ownerDocument.documentElement, s)) {
            if (l !== null && qa(s)) {
                if (r = l.start, t = l.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
                else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
                    t = t.getSelection();
                    var d = s.textContent.length,
                        h = Math.min(l.start, d);
                    l = l.end === void 0 ? h : Math.min(l.end, d), !t.extend && h > l && (d = l, l = h, h = d), d = of(s, h);
                    var y = of(s, l);
                    d && y && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== y.node || t.focusOffset !== y.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), t.removeAllRanges(), h > l ? (t.addRange(r), t.extend(y.node, y.offset)) : (r.setEnd(y.node, y.offset), t.addRange(r)))
                }
            }
            for (r = [], t = s; t = t.parentNode;) t.nodeType === 1 && r.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
        }
    }
    var xx = f && "documentMode" in document && 11 >= document.documentMode,
        br = null,
        Ya = null,
        bi = null,
        Xa = !1;

    function uf(t, r, s) {
        var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Xa || br == null || br !== tn(l) || (l = br, "selectionStart" in l && qa(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), bi && Ti(bi, l) || (bi = l, l = Is(Ya, "onSelect"), 0 < l.length && (r = new Ba("onSelect", "select", null, r, s), t.push({
            event: r,
            listeners: l
        }), r.target = br)))
    }

    function Os(t, r) {
        var s = {};
        return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s
    }
    var kr = {
            animationend: Os("Animation", "AnimationEnd"),
            animationiteration: Os("Animation", "AnimationIteration"),
            animationstart: Os("Animation", "AnimationStart"),
            transitionend: Os("Transition", "TransitionEnd")
        },
        Za = {},
        cf = {};
    f && (cf = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);

    function Ls(t) {
        if (Za[t]) return Za[t];
        if (!kr[t]) return t;
        var r = kr[t],
            s;
        for (s in r)
            if (r.hasOwnProperty(s) && s in cf) return Za[t] = r[s];
        return t
    }
    var df = Ls("animationend"),
        ff = Ls("animationiteration"),
        hf = Ls("animationstart"),
        pf = Ls("transitionend"),
        mf = new Map,
        gf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Cn(t, r) {
        mf.set(t, r), u(r, [t])
    }
    for (var Ja = 0; Ja < gf.length; Ja++) {
        var el = gf[Ja],
            wx = el.toLowerCase(),
            Sx = el[0].toUpperCase() + el.slice(1);
        Cn(wx, "on" + Sx)
    }
    Cn(df, "onAnimationEnd"), Cn(ff, "onAnimationIteration"), Cn(hf, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(pf, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ki = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Px = new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));

    function yf(t, r, s) {
        var l = t.type || "unknown-event";
        t.currentTarget = s, w0(l, r, void 0, t), t.currentTarget = null
    }

    function vf(t, r) {
        r = (r & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var l = t[s],
                d = l.event;
            l = l.listeners;
            e: {
                var h = void 0;
                if (r)
                    for (var y = l.length - 1; 0 <= y; y--) {
                        var C = l[y],
                            k = C.instance,
                            L = C.currentTarget;
                        if (C = C.listener, k !== h && d.isPropagationStopped()) break e;
                        yf(d, C, L), h = k
                    } else
                        for (y = 0; y < l.length; y++) {
                            if (C = l[y], k = C.instance, L = C.currentTarget, C = C.listener, k !== h && d.isPropagationStopped()) break e;
                            yf(d, C, L), h = k
                        }
            }
        }
        if (xs) throw t = ja, xs = !1, ja = null, t
    }

    function Re(t, r) {
        var s = r[ll];
        s === void 0 && (s = r[ll] = new Set);
        var l = t + "__bubble";
        s.has(l) || (xf(r, t, 2, !1), s.add(l))
    }

    function tl(t, r, s) {
        var l = 0;
        r && (l |= 4), xf(s, t, l, r)
    }
    var _s = "_reactListening" + Math.random().toString(36).slice(2);

    function Ri(t) {
        if (!t[_s]) {
            t[_s] = !0, o.forEach(function(s) {
                s !== "selectionchange" && (Px.has(s) || tl(s, !1, t), tl(s, !0, t))
            });
            var r = t.nodeType === 9 ? t : t.ownerDocument;
            r === null || r[_s] || (r[_s] = !0, tl("selectionchange", !1, r))
        }
    }

    function xf(t, r, s, l) {
        switch (Bd(r)) {
            case 1:
                var d = _0;
                break;
            case 4:
                d = I0;
                break;
            default:
                d = Va
        }
        s = d.bind(null, r, s, t), d = void 0, !Na || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(r, s, {
            capture: !0,
            passive: d
        }) : t.addEventListener(r, s, !0) : d !== void 0 ? t.addEventListener(r, s, {
            passive: d
        }) : t.addEventListener(r, s, !1)
    }

    function nl(t, r, s, l, d) {
        var h = l;
        if ((r & 1) === 0 && (r & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var y = l.tag;
            if (y === 3 || y === 4) {
                var C = l.stateNode.containerInfo;
                if (C === d || C.nodeType === 8 && C.parentNode === d) break;
                if (y === 4)
                    for (y = l.return; y !== null;) {
                        var k = y.tag;
                        if ((k === 3 || k === 4) && (k = y.stateNode.containerInfo, k === d || k.nodeType === 8 && k.parentNode === d)) return;
                        y = y.return
                    }
                for (; C !== null;) {
                    if (y = Xn(C), y === null) return;
                    if (k = y.tag, k === 5 || k === 6) {
                        l = h = y;
                        continue e
                    }
                    C = C.parentNode
                }
            }
            l = l.return
        }
        Cd(function() {
            var L = h,
                B = ka(s),
                U = [];
            e: {
                var z = mf.get(t);
                if (z !== void 0) {
                    var Y = Ba,
                        J = t;
                    switch (t) {
                        case "keypress":
                            if (Ns(s) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Y = Z0;
                            break;
                        case "focusin":
                            J = "focus", Y = Wa;
                            break;
                        case "focusout":
                            J = "blur", Y = Wa;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Y = Wa;
                            break;
                        case "click":
                            if (s.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Y = Wd;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Y = z0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Y = tx;
                            break;
                        case df:
                        case ff:
                        case hf:
                            Y = $0;
                            break;
                        case pf:
                            Y = rx;
                            break;
                        case "scroll":
                            Y = V0;
                            break;
                        case "wheel":
                            Y = sx;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Y = H0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Y = Kd
                    }
                    var ee = (r & 4) !== 0,
                        Ve = !ee && t === "scroll",
                        j = ee ? z !== null ? z + "Capture" : null : z;
                    ee = [];
                    for (var R = L, D; R !== null;) {
                        D = R;
                        var W = D.stateNode;
                        if (D.tag === 5 && W !== null && (D = W, j !== null && (W = ci(R, j), W != null && ee.push(Ai(R, W, D)))), Ve) break;
                        R = R.return
                    }
                    0 < ee.length && (z = new Y(z, J, null, s, B), U.push({
                        event: z,
                        listeners: ee
                    }))
                }
            }
            if ((r & 7) === 0) {
                e: {
                    if (z = t === "mouseover" || t === "pointerover", Y = t === "mouseout" || t === "pointerout", z && s !== ba && (J = s.relatedTarget || s.fromElement) && (Xn(J) || J[nn])) break e;
                    if ((Y || z) && (z = B.window === B ? B : (z = B.ownerDocument) ? z.defaultView || z.parentWindow : window, Y ? (J = s.relatedTarget || s.toElement, Y = L, J = J ? Xn(J) : null, J !== null && (Ve = Yn(J), J !== Ve || J.tag !== 5 && J.tag !== 6) && (J = null)) : (Y = null, J = L), Y !== J)) {
                        if (ee = Wd, W = "onMouseLeave", j = "onMouseEnter", R = "mouse", (t === "pointerout" || t === "pointerover") && (ee = Kd, W = "onPointerLeave", j = "onPointerEnter", R = "pointer"), Ve = Y == null ? z : Nr(Y), D = J == null ? z : Nr(J), z = new ee(W, R + "leave", Y, s, B), z.target = Ve, z.relatedTarget = D, W = null, Xn(B) === L && (ee = new ee(j, R + "enter", J, s, B), ee.target = D, ee.relatedTarget = Ve, W = ee), Ve = W, Y && J) t: {
                            for (ee = Y, j = J, R = 0, D = ee; D; D = Rr(D)) R++;
                            for (D = 0, W = j; W; W = Rr(W)) D++;
                            for (; 0 < R - D;) ee = Rr(ee),
                            R--;
                            for (; 0 < D - R;) j = Rr(j),
                            D--;
                            for (; R--;) {
                                if (ee === j || j !== null && ee === j.alternate) break t;
                                ee = Rr(ee), j = Rr(j)
                            }
                            ee = null
                        }
                        else ee = null;
                        Y !== null && wf(U, z, Y, ee, !1), J !== null && Ve !== null && wf(U, Ve, J, ee, !0)
                    }
                }
                e: {
                    if (z = L ? Nr(L) : window, Y = z.nodeName && z.nodeName.toLowerCase(), Y === "select" || Y === "input" && z.type === "file") var te = fx;
                    else if (Zd(z))
                        if (ef) te = gx;
                        else {
                            te = px;
                            var ie = hx
                        }
                    else(Y = z.nodeName) && Y.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (te = mx);
                    if (te && (te = te(t, L))) {
                        Jd(U, te, s, B);
                        break e
                    }
                    ie && ie(t, z, L),
                    t === "focusout" && (ie = z._wrapperState) && ie.controlled && z.type === "number" && Sa(z, "number", z.value)
                }
                switch (ie = L ? Nr(L) : window, t) {
                    case "focusin":
                        (Zd(ie) || ie.contentEditable === "true") && (br = ie, Ya = L, bi = null);
                        break;
                    case "focusout":
                        bi = Ya = br = null;
                        break;
                    case "mousedown":
                        Xa = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Xa = !1, uf(U, s, B);
                        break;
                    case "selectionchange":
                        if (xx) break;
                    case "keydown":
                    case "keyup":
                        uf(U, s, B)
                }
                var se;
                if (Ka) e: {
                    switch (t) {
                        case "compositionstart":
                            var ue = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ue = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ue = "onCompositionUpdate";
                            break e
                    }
                    ue = void 0
                }
                else Tr ? Yd(t, s) && (ue = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ue = "onCompositionStart");ue && (Gd && s.locale !== "ko" && (Tr || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && Tr && (se = Ud()) : (Pn = B, za = "value" in Pn ? Pn.value : Pn.textContent, Tr = !0)), ie = Is(L, ue), 0 < ie.length && (ue = new Hd(ue, t, null, s, B), U.push({
                    event: ue,
                    listeners: ie
                }), se ? ue.data = se : (se = Xd(s), se !== null && (ue.data = se)))),
                (se = ax ? lx(t, s) : ux(t, s)) && (L = Is(L, "onBeforeInput"), 0 < L.length && (B = new Hd("onBeforeInput", "beforeinput", null, s, B), U.push({
                    event: B,
                    listeners: L
                }), B.data = se))
            }
            vf(U, r)
        })
    }

    function Ai(t, r, s) {
        return {
            instance: t,
            listener: r,
            currentTarget: s
        }
    }

    function Is(t, r) {
        for (var s = r + "Capture", l = []; t !== null;) {
            var d = t,
                h = d.stateNode;
            d.tag === 5 && h !== null && (d = h, h = ci(t, s), h != null && l.unshift(Ai(t, h, d)), h = ci(t, r), h != null && l.push(Ai(t, h, d))), t = t.return
        }
        return l
    }

    function Rr(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5);
        return t || null
    }

    function wf(t, r, s, l, d) {
        for (var h = r._reactName, y = []; s !== null && s !== l;) {
            var C = s,
                k = C.alternate,
                L = C.stateNode;
            if (k !== null && k === l) break;
            C.tag === 5 && L !== null && (C = L, d ? (k = ci(s, h), k != null && y.unshift(Ai(s, k, C))) : d || (k = ci(s, h), k != null && y.push(Ai(s, k, C)))), s = s.return
        }
        y.length !== 0 && t.push({
            event: r,
            listeners: y
        })
    }
    var Cx = /\r\n?/g,
        Ex = /\u0000|\uFFFD/g;

    function Sf(t) {
        return (typeof t == "string" ? t : "" + t).replace(Cx, `
`).replace(Ex, "")
    }

    function Vs(t, r, s) {
        if (r = Sf(r), Sf(t) !== r && s) throw Error(i(425))
    }

    function Fs() {}
    var rl = null,
        il = null;

    function sl(t, r) {
        return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
    }
    var ol = typeof setTimeout == "function" ? setTimeout : void 0,
        Tx = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Pf = typeof Promise == "function" ? Promise : void 0,
        bx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function(t) {
            return Pf.resolve(null).then(t).catch(kx)
        } : ol;

    function kx(t) {
        setTimeout(function() {
            throw t
        })
    }

    function al(t, r) {
        var s = r,
            l = 0;
        do {
            var d = s.nextSibling;
            if (t.removeChild(s), d && d.nodeType === 8)
                if (s = d.data, s === "/$") {
                    if (l === 0) {
                        t.removeChild(d), xi(r);
                        return
                    }
                    l--
                } else s !== "$" && s !== "$?" && s !== "$!" || l++;
            s = d
        } while (s);
        xi(r)
    }

    function En(t) {
        for (; t != null; t = t.nextSibling) {
            var r = t.nodeType;
            if (r === 1 || r === 3) break;
            if (r === 8) {
                if (r = t.data, r === "$" || r === "$!" || r === "$?") break;
                if (r === "/$") return null
            }
        }
        return t
    }

    function Cf(t) {
        t = t.previousSibling;
        for (var r = 0; t;) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (r === 0) return t;
                    r--
                } else s === "/$" && r++
            }
            t = t.previousSibling
        }
        return null
    }
    var Ar = Math.random().toString(36).slice(2),
        Ht = "__reactFiber$" + Ar,
        Ni = "__reactProps$" + Ar,
        nn = "__reactContainer$" + Ar,
        ll = "__reactEvents$" + Ar,
        Rx = "__reactListeners$" + Ar,
        Ax = "__reactHandles$" + Ar;

    function Xn(t) {
        var r = t[Ht];
        if (r) return r;
        for (var s = t.parentNode; s;) {
            if (r = s[nn] || s[Ht]) {
                if (s = r.alternate, r.child !== null || s !== null && s.child !== null)
                    for (t = Cf(t); t !== null;) {
                        if (s = t[Ht]) return s;
                        t = Cf(t)
                    }
                return r
            }
            t = s, s = t.parentNode
        }
        return null
    }

    function ji(t) {
        return t = t[Ht] || t[nn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }

    function Nr(t) {
        if (t.tag === 5 || t.tag === 6) return t.stateNode;
        throw Error(i(33))
    }

    function zs(t) {
        return t[Ni] || null
    }
    var ul = [],
        jr = -1;

    function Tn(t) {
        return {
            current: t
        }
    }

    function Ae(t) {
        0 > jr || (t.current = ul[jr], ul[jr] = null, jr--)
    }

    function ke(t, r) {
        jr++, ul[jr] = t.current, t.current = r
    }
    var bn = {},
        Ze = Tn(bn),
        ut = Tn(!1),
        Zn = bn;

    function Mr(t, r) {
        var s = t.type.contextTypes;
        if (!s) return bn;
        var l = t.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
        var d = {},
            h;
        for (h in s) d[h] = r[h];
        return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = d), d
    }

    function ct(t) {
        return t = t.childContextTypes, t != null
    }

    function Bs() {
        Ae(ut), Ae(Ze)
    }

    function Ef(t, r, s) {
        if (Ze.current !== bn) throw Error(i(168));
        ke(Ze, r), ke(ut, s)
    }

    function Tf(t, r, s) {
        var l = t.stateNode;
        if (r = r.childContextTypes, typeof l.getChildContext != "function") return s;
        l = l.getChildContext();
        for (var d in l)
            if (!(d in r)) throw Error(i(108, Se(t) || "Unknown", d));
        return K({}, s, l)
    }

    function Us(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || bn, Zn = Ze.current, ke(Ze, t), ke(ut, ut.current), !0
    }

    function bf(t, r, s) {
        var l = t.stateNode;
        if (!l) throw Error(i(169));
        s ? (t = Tf(t, r, Zn), l.__reactInternalMemoizedMergedChildContext = t, Ae(ut), Ae(Ze), ke(Ze, t)) : Ae(ut), ke(ut, s)
    }
    var rn = null,
        $s = !1,
        cl = !1;

    function kf(t) {
        rn === null ? rn = [t] : rn.push(t)
    }

    function Nx(t) {
        $s = !0, kf(t)
    }

    function kn() {
        if (!cl && rn !== null) {
            cl = !0;
            var t = 0,
                r = Ee;
            try {
                var s = rn;
                for (Ee = 1; t < s.length; t++) {
                    var l = s[t];
                    do l = l(!0); while (l !== null)
                }
                rn = null, $s = !1
            } catch (d) {
                throw rn !== null && (rn = rn.slice(t + 1)), Rd(Ma, kn), d
            } finally {
                Ee = r, cl = !1
            }
        }
        return null
    }
    var Dr = [],
        Or = 0,
        Ws = null,
        Hs = 0,
        Et = [],
        Tt = 0,
        Jn = null,
        sn = 1,
        on = "";

    function er(t, r) {
        Dr[Or++] = Hs, Dr[Or++] = Ws, Ws = t, Hs = r
    }

    function Rf(t, r, s) {
        Et[Tt++] = sn, Et[Tt++] = on, Et[Tt++] = Jn, Jn = t;
        var l = sn;
        t = on;
        var d = 32 - Mt(l) - 1;
        l &= ~(1 << d), s += 1;
        var h = 32 - Mt(r) + d;
        if (30 < h) {
            var y = d - d % 5;
            h = (l & (1 << y) - 1).toString(32), l >>= y, d -= y, sn = 1 << 32 - Mt(r) + d | s << d | l, on = h + t
        } else sn = 1 << h | s << d | l, on = t
    }

    function dl(t) {
        t.return !== null && (er(t, 1), Rf(t, 1, 0))
    }

    function fl(t) {
        for (; t === Ws;) Ws = Dr[--Or], Dr[Or] = null, Hs = Dr[--Or], Dr[Or] = null;
        for (; t === Jn;) Jn = Et[--Tt], Et[Tt] = null, on = Et[--Tt], Et[Tt] = null, sn = Et[--Tt], Et[Tt] = null
    }
    var vt = null,
        xt = null,
        je = !1,
        Ot = null;

    function Af(t, r) {
        var s = At(5, null, null, 0);
        s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s)
    }

    function Nf(t, r) {
        switch (t.tag) {
            case 5:
                var s = t.type;
                return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, vt = t, xt = En(r.firstChild), !0) : !1;
            case 6:
                return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, vt = t, xt = null, !0) : !1;
            case 13:
                return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Jn !== null ? {
                    id: sn,
                    overflow: on
                } : null, t.memoizedState = {
                    dehydrated: r,
                    treeContext: s,
                    retryLane: 1073741824
                }, s = At(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, vt = t, xt = null, !0) : !1;
            default:
                return !1
        }
    }

    function hl(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }

    function pl(t) {
        if (je) {
            var r = xt;
            if (r) {
                var s = r;
                if (!Nf(t, r)) {
                    if (hl(t)) throw Error(i(418));
                    r = En(s.nextSibling);
                    var l = vt;
                    r && Nf(t, r) ? Af(l, s) : (t.flags = t.flags & -4097 | 2, je = !1, vt = t)
                }
            } else {
                if (hl(t)) throw Error(i(418));
                t.flags = t.flags & -4097 | 2, je = !1, vt = t
            }
        }
    }

    function jf(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
        vt = t
    }

    function Ks(t) {
        if (t !== vt) return !1;
        if (!je) return jf(t), je = !0, !1;
        var r;
        if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !sl(t.type, t.memoizedProps)), r && (r = xt)) {
            if (hl(t)) throw Mf(), Error(i(418));
            for (; r;) Af(t, r), r = En(r.nextSibling)
        }
        if (jf(t), t.tag === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
            e: {
                for (t = t.nextSibling, r = 0; t;) {
                    if (t.nodeType === 8) {
                        var s = t.data;
                        if (s === "/$") {
                            if (r === 0) {
                                xt = En(t.nextSibling);
                                break e
                            }
                            r--
                        } else s !== "$" && s !== "$!" && s !== "$?" || r++
                    }
                    t = t.nextSibling
                }
                xt = null
            }
        } else xt = vt ? En(t.stateNode.nextSibling) : null;
        return !0
    }

    function Mf() {
        for (var t = xt; t;) t = En(t.nextSibling)
    }

    function Lr() {
        xt = vt = null, je = !1
    }

    function ml(t) {
        Ot === null ? Ot = [t] : Ot.push(t)
    }
    var jx = I.ReactCurrentBatchConfig;

    function Mi(t, r, s) {
        if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
            if (s._owner) {
                if (s = s._owner, s) {
                    if (s.tag !== 1) throw Error(i(309));
                    var l = s.stateNode
                }
                if (!l) throw Error(i(147, t));
                var d = l,
                    h = "" + t;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(y) {
                    var C = d.refs;
                    y === null ? delete C[h] : C[h] = y
                }, r._stringRef = h, r)
            }
            if (typeof t != "string") throw Error(i(284));
            if (!s._owner) throw Error(i(290, t))
        }
        return t
    }

    function Gs(t, r) {
        throw t = Object.prototype.toString.call(r), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t))
    }

    function Df(t) {
        var r = t._init;
        return r(t._payload)
    }

    function Of(t) {
        function r(j, R) {
            if (t) {
                var D = j.deletions;
                D === null ? (j.deletions = [R], j.flags |= 16) : D.push(R)
            }
        }

        function s(j, R) {
            if (!t) return null;
            for (; R !== null;) r(j, R), R = R.sibling;
            return null
        }

        function l(j, R) {
            for (j = new Map; R !== null;) R.key !== null ? j.set(R.key, R) : j.set(R.index, R), R = R.sibling;
            return j
        }

        function d(j, R) {
            return j = Ln(j, R), j.index = 0, j.sibling = null, j
        }

        function h(j, R, D) {
            return j.index = D, t ? (D = j.alternate, D !== null ? (D = D.index, D < R ? (j.flags |= 2, R) : D) : (j.flags |= 2, R)) : (j.flags |= 1048576, R)
        }

        function y(j) {
            return t && j.alternate === null && (j.flags |= 2), j
        }

        function C(j, R, D, W) {
            return R === null || R.tag !== 6 ? (R = ou(D, j.mode, W), R.return = j, R) : (R = d(R, D), R.return = j, R)
        }

        function k(j, R, D, W) {
            var te = D.type;
            return te === H ? B(j, R, D.props.children, W, D.key) : R !== null && (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === le && Df(te) === R.type) ? (W = d(R, D.props), W.ref = Mi(j, R, D), W.return = j, W) : (W = vo(D.type, D.key, D.props, null, j.mode, W), W.ref = Mi(j, R, D), W.return = j, W)
        }

        function L(j, R, D, W) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = au(D, j.mode, W), R.return = j, R) : (R = d(R, D.children || []), R.return = j, R)
        }

        function B(j, R, D, W, te) {
            return R === null || R.tag !== 7 ? (R = lr(D, j.mode, W, te), R.return = j, R) : (R = d(R, D), R.return = j, R)
        }

        function U(j, R, D) {
            if (typeof R == "string" && R !== "" || typeof R == "number") return R = ou("" + R, j.mode, D), R.return = j, R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case V:
                        return D = vo(R.type, R.key, R.props, null, j.mode, D), D.ref = Mi(j, null, R), D.return = j, D;
                    case $:
                        return R = au(R, j.mode, D), R.return = j, R;
                    case le:
                        var W = R._init;
                        return U(j, W(R._payload), D)
                }
                if (ai(R) || Q(R)) return R = lr(R, j.mode, D, null), R.return = j, R;
                Gs(j, R)
            }
            return null
        }

        function z(j, R, D, W) {
            var te = R !== null ? R.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number") return te !== null ? null : C(j, R, "" + D, W);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case V:
                        return D.key === te ? k(j, R, D, W) : null;
                    case $:
                        return D.key === te ? L(j, R, D, W) : null;
                    case le:
                        return te = D._init, z(j, R, te(D._payload), W)
                }
                if (ai(D) || Q(D)) return te !== null ? null : B(j, R, D, W, null);
                Gs(j, D)
            }
            return null
        }

        function Y(j, R, D, W, te) {
            if (typeof W == "string" && W !== "" || typeof W == "number") return j = j.get(D) || null, C(R, j, "" + W, te);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                    case V:
                        return j = j.get(W.key === null ? D : W.key) || null, k(R, j, W, te);
                    case $:
                        return j = j.get(W.key === null ? D : W.key) || null, L(R, j, W, te);
                    case le:
                        var ie = W._init;
                        return Y(j, R, D, ie(W._payload), te)
                }
                if (ai(W) || Q(W)) return j = j.get(D) || null, B(R, j, W, te, null);
                Gs(R, W)
            }
            return null
        }

        function J(j, R, D, W) {
            for (var te = null, ie = null, se = R, ue = R = 0, Ke = null; se !== null && ue < D.length; ue++) {
                se.index > ue ? (Ke = se, se = null) : Ke = se.sibling;
                var Ce = z(j, se, D[ue], W);
                if (Ce === null) {
                    se === null && (se = Ke);
                    break
                }
                t && se && Ce.alternate === null && r(j, se), R = h(Ce, R, ue), ie === null ? te = Ce : ie.sibling = Ce, ie = Ce, se = Ke
            }
            if (ue === D.length) return s(j, se), je && er(j, ue), te;
            if (se === null) {
                for (; ue < D.length; ue++) se = U(j, D[ue], W), se !== null && (R = h(se, R, ue), ie === null ? te = se : ie.sibling = se, ie = se);
                return je && er(j, ue), te
            }
            for (se = l(j, se); ue < D.length; ue++) Ke = Y(se, j, ue, D[ue], W), Ke !== null && (t && Ke.alternate !== null && se.delete(Ke.key === null ? ue : Ke.key), R = h(Ke, R, ue), ie === null ? te = Ke : ie.sibling = Ke, ie = Ke);
            return t && se.forEach(function(_n) {
                return r(j, _n)
            }), je && er(j, ue), te
        }

        function ee(j, R, D, W) {
            var te = Q(D);
            if (typeof te != "function") throw Error(i(150));
            if (D = te.call(D), D == null) throw Error(i(151));
            for (var ie = te = null, se = R, ue = R = 0, Ke = null, Ce = D.next(); se !== null && !Ce.done; ue++, Ce = D.next()) {
                se.index > ue ? (Ke = se, se = null) : Ke = se.sibling;
                var _n = z(j, se, Ce.value, W);
                if (_n === null) {
                    se === null && (se = Ke);
                    break
                }
                t && se && _n.alternate === null && r(j, se), R = h(_n, R, ue), ie === null ? te = _n : ie.sibling = _n, ie = _n, se = Ke
            }
            if (Ce.done) return s(j, se), je && er(j, ue), te;
            if (se === null) {
                for (; !Ce.done; ue++, Ce = D.next()) Ce = U(j, Ce.value, W), Ce !== null && (R = h(Ce, R, ue), ie === null ? te = Ce : ie.sibling = Ce, ie = Ce);
                return je && er(j, ue), te
            }
            for (se = l(j, se); !Ce.done; ue++, Ce = D.next()) Ce = Y(se, j, ue, Ce.value, W), Ce !== null && (t && Ce.alternate !== null && se.delete(Ce.key === null ? ue : Ce.key), R = h(Ce, R, ue), ie === null ? te = Ce : ie.sibling = Ce, ie = Ce);
            return t && se.forEach(function(cw) {
                return r(j, cw)
            }), je && er(j, ue), te
        }

        function Ve(j, R, D, W) {
            if (typeof D == "object" && D !== null && D.type === H && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case V:
                        e: {
                            for (var te = D.key, ie = R; ie !== null;) {
                                if (ie.key === te) {
                                    if (te = D.type, te === H) {
                                        if (ie.tag === 7) {
                                            s(j, ie.sibling), R = d(ie, D.props.children), R.return = j, j = R;
                                            break e
                                        }
                                    } else if (ie.elementType === te || typeof te == "object" && te !== null && te.$$typeof === le && Df(te) === ie.type) {
                                        s(j, ie.sibling), R = d(ie, D.props), R.ref = Mi(j, ie, D), R.return = j, j = R;
                                        break e
                                    }
                                    s(j, ie);
                                    break
                                } else r(j, ie);
                                ie = ie.sibling
                            }
                            D.type === H ? (R = lr(D.props.children, j.mode, W, D.key), R.return = j, j = R) : (W = vo(D.type, D.key, D.props, null, j.mode, W), W.ref = Mi(j, R, D), W.return = j, j = W)
                        }
                        return y(j);
                    case $:
                        e: {
                            for (ie = D.key; R !== null;) {
                                if (R.key === ie)
                                    if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                                        s(j, R.sibling), R = d(R, D.children || []), R.return = j, j = R;
                                        break e
                                    } else {
                                        s(j, R);
                                        break
                                    }
                                else r(j, R);
                                R = R.sibling
                            }
                            R = au(D, j.mode, W),
                            R.return = j,
                            j = R
                        }
                        return y(j);
                    case le:
                        return ie = D._init, Ve(j, R, ie(D._payload), W)
                }
                if (ai(D)) return J(j, R, D, W);
                if (Q(D)) return ee(j, R, D, W);
                Gs(j, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, R !== null && R.tag === 6 ? (s(j, R.sibling), R = d(R, D), R.return = j, j = R) : (s(j, R), R = ou(D, j.mode, W), R.return = j, j = R), y(j)) : s(j, R)
        }
        return Ve
    }
    var _r = Of(!0),
        Lf = Of(!1),
        Qs = Tn(null),
        qs = null,
        Ir = null,
        gl = null;

    function yl() {
        gl = Ir = qs = null
    }

    function vl(t) {
        var r = Qs.current;
        Ae(Qs), t._currentValue = r
    }

    function xl(t, r, s) {
        for (; t !== null;) {
            var l = t.alternate;
            if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === s) break;
            t = t.return
        }
    }

    function Vr(t, r) {
        qs = t, gl = Ir = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (dt = !0), t.firstContext = null)
    }

    function bt(t) {
        var r = t._currentValue;
        if (gl !== t)
            if (t = {
                    context: t,
                    memoizedValue: r,
                    next: null
                }, Ir === null) {
                if (qs === null) throw Error(i(308));
                Ir = t, qs.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else Ir = Ir.next = t;
        return r
    }
    var tr = null;

    function wl(t) {
        tr === null ? tr = [t] : tr.push(t)
    }

    function _f(t, r, s, l) {
        var d = r.interleaved;
        return d === null ? (s.next = s, wl(r)) : (s.next = d.next, d.next = s), r.interleaved = s, an(t, l)
    }

    function an(t, r) {
        t.lanes |= r;
        var s = t.alternate;
        for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null;) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var Rn = !1;

    function Sl(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function If(t, r) {
        t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }

    function ln(t, r) {
        return {
            eventTime: t,
            lane: r,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function An(t, r, s) {
        var l = t.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (we & 2) !== 0) {
            var d = l.pending;
            return d === null ? r.next = r : (r.next = d.next, d.next = r), l.pending = r, an(t, s)
        }
        return d = l.interleaved, d === null ? (r.next = r, wl(l)) : (r.next = d.next, d.next = r), l.interleaved = r, an(t, s)
    }

    function Ys(t, r, s) {
        if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
            var l = r.lanes;
            l &= t.pendingLanes, s |= l, r.lanes = s, La(t, s)
        }
    }

    function Vf(t, r) {
        var s = t.updateQueue,
            l = t.alternate;
        if (l !== null && (l = l.updateQueue, s === l)) {
            var d = null,
                h = null;
            if (s = s.firstBaseUpdate, s !== null) {
                do {
                    var y = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    h === null ? d = h = y : h = h.next = y, s = s.next
                } while (s !== null);
                h === null ? d = h = r : h = h.next = r
            } else d = h = r;
            s = {
                baseState: l.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: h,
                shared: l.shared,
                effects: l.effects
            }, t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r
    }

    function Xs(t, r, s, l) {
        var d = t.updateQueue;
        Rn = !1;
        var h = d.firstBaseUpdate,
            y = d.lastBaseUpdate,
            C = d.shared.pending;
        if (C !== null) {
            d.shared.pending = null;
            var k = C,
                L = k.next;
            k.next = null, y === null ? h = L : y.next = L, y = k;
            var B = t.alternate;
            B !== null && (B = B.updateQueue, C = B.lastBaseUpdate, C !== y && (C === null ? B.firstBaseUpdate = L : C.next = L, B.lastBaseUpdate = k))
        }
        if (h !== null) {
            var U = d.baseState;
            y = 0, B = L = k = null, C = h;
            do {
                var z = C.lane,
                    Y = C.eventTime;
                if ((l & z) === z) {
                    B !== null && (B = B.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    });
                    e: {
                        var J = t,
                            ee = C;
                        switch (z = r, Y = s, ee.tag) {
                            case 1:
                                if (J = ee.payload, typeof J == "function") {
                                    U = J.call(Y, U, z);
                                    break e
                                }
                                U = J;
                                break e;
                            case 3:
                                J.flags = J.flags & -65537 | 128;
                            case 0:
                                if (J = ee.payload, z = typeof J == "function" ? J.call(Y, U, z) : J, z == null) break e;
                                U = K({}, U, z);
                                break e;
                            case 2:
                                Rn = !0
                        }
                    }
                    C.callback !== null && C.lane !== 0 && (t.flags |= 64, z = d.effects, z === null ? d.effects = [C] : z.push(C))
                } else Y = {
                    eventTime: Y,
                    lane: z,
                    tag: C.tag,
                    payload: C.payload,
                    callback: C.callback,
                    next: null
                }, B === null ? (L = B = Y, k = U) : B = B.next = Y, y |= z;
                if (C = C.next, C === null) {
                    if (C = d.shared.pending, C === null) break;
                    z = C, C = z.next, z.next = null, d.lastBaseUpdate = z, d.shared.pending = null
                }
            } while (!0);
            if (B === null && (k = U), d.baseState = k, d.firstBaseUpdate = L, d.lastBaseUpdate = B, r = d.shared.interleaved, r !== null) {
                d = r;
                do y |= d.lane, d = d.next; while (d !== r)
            } else h === null && (d.shared.lanes = 0);
            ir |= y, t.lanes = y, t.memoizedState = U
        }
    }

    function Ff(t, r, s) {
        if (t = r.effects, r.effects = null, t !== null)
            for (r = 0; r < t.length; r++) {
                var l = t[r],
                    d = l.callback;
                if (d !== null) {
                    if (l.callback = null, l = s, typeof d != "function") throw Error(i(191, d));
                    d.call(l)
                }
            }
    }
    var Di = {},
        Kt = Tn(Di),
        Oi = Tn(Di),
        Li = Tn(Di);

    function nr(t) {
        if (t === Di) throw Error(i(174));
        return t
    }

    function Pl(t, r) {
        switch (ke(Li, r), ke(Oi, t), ke(Kt, Di), t = r.nodeType, t) {
            case 9:
            case 11:
                r = (r = r.documentElement) ? r.namespaceURI : Ca(null, "");
                break;
            default:
                t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = Ca(r, t)
        }
        Ae(Kt), ke(Kt, r)
    }

    function Fr() {
        Ae(Kt), Ae(Oi), Ae(Li)
    }

    function zf(t) {
        nr(Li.current);
        var r = nr(Kt.current),
            s = Ca(r, t.type);
        r !== s && (ke(Oi, t), ke(Kt, s))
    }

    function Cl(t) {
        Oi.current === t && (Ae(Kt), Ae(Oi))
    }
    var Me = Tn(0);

    function Zs(t) {
        for (var r = t; r !== null;) {
            if (r.tag === 13) {
                var s = r.memoizedState;
                if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r
            } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
                if ((r.flags & 128) !== 0) return r
            } else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; r.sibling === null;) {
                if (r.return === null || r.return === t) return null;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
        return null
    }
    var El = [];

    function Tl() {
        for (var t = 0; t < El.length; t++) El[t]._workInProgressVersionPrimary = null;
        El.length = 0
    }
    var Js = I.ReactCurrentDispatcher,
        bl = I.ReactCurrentBatchConfig,
        rr = 0,
        De = null,
        Be = null,
        We = null,
        eo = !1,
        _i = !1,
        Ii = 0,
        Mx = 0;

    function Je() {
        throw Error(i(321))
    }

    function kl(t, r) {
        if (r === null) return !1;
        for (var s = 0; s < r.length && s < t.length; s++)
            if (!Dt(t[s], r[s])) return !1;
        return !0
    }

    function Rl(t, r, s, l, d, h) {
        if (rr = h, De = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Js.current = t === null || t.memoizedState === null ? _x : Ix, t = s(l, d), _i) {
            h = 0;
            do {
                if (_i = !1, Ii = 0, 25 <= h) throw Error(i(301));
                h += 1, We = Be = null, r.updateQueue = null, Js.current = Vx, t = s(l, d)
            } while (_i)
        }
        if (Js.current = ro, r = Be !== null && Be.next !== null, rr = 0, We = Be = De = null, eo = !1, r) throw Error(i(300));
        return t
    }

    function Al() {
        var t = Ii !== 0;
        return Ii = 0, t
    }

    function Gt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return We === null ? De.memoizedState = We = t : We = We.next = t, We
    }

    function kt() {
        if (Be === null) {
            var t = De.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Be.next;
        var r = We === null ? De.memoizedState : We.next;
        if (r !== null) We = r, Be = t;
        else {
            if (t === null) throw Error(i(310));
            Be = t, t = {
                memoizedState: Be.memoizedState,
                baseState: Be.baseState,
                baseQueue: Be.baseQueue,
                queue: Be.queue,
                next: null
            }, We === null ? De.memoizedState = We = t : We = We.next = t
        }
        return We
    }

    function Vi(t, r) {
        return typeof r == "function" ? r(t) : r
    }

    function Nl(t) {
        var r = kt(),
            s = r.queue;
        if (s === null) throw Error(i(311));
        s.lastRenderedReducer = t;
        var l = Be,
            d = l.baseQueue,
            h = s.pending;
        if (h !== null) {
            if (d !== null) {
                var y = d.next;
                d.next = h.next, h.next = y
            }
            l.baseQueue = d = h, s.pending = null
        }
        if (d !== null) {
            h = d.next, l = l.baseState;
            var C = y = null,
                k = null,
                L = h;
            do {
                var B = L.lane;
                if ((rr & B) === B) k !== null && (k = k.next = {
                    lane: 0,
                    action: L.action,
                    hasEagerState: L.hasEagerState,
                    eagerState: L.eagerState,
                    next: null
                }), l = L.hasEagerState ? L.eagerState : t(l, L.action);
                else {
                    var U = {
                        lane: B,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    };
                    k === null ? (C = k = U, y = l) : k = k.next = U, De.lanes |= B, ir |= B
                }
                L = L.next
            } while (L !== null && L !== h);
            k === null ? y = l : k.next = C, Dt(l, r.memoizedState) || (dt = !0), r.memoizedState = l, r.baseState = y, r.baseQueue = k, s.lastRenderedState = l
        }
        if (t = s.interleaved, t !== null) {
            d = t;
            do h = d.lane, De.lanes |= h, ir |= h, d = d.next; while (d !== t)
        } else d === null && (s.lanes = 0);
        return [r.memoizedState, s.dispatch]
    }

    function jl(t) {
        var r = kt(),
            s = r.queue;
        if (s === null) throw Error(i(311));
        s.lastRenderedReducer = t;
        var l = s.dispatch,
            d = s.pending,
            h = r.memoizedState;
        if (d !== null) {
            s.pending = null;
            var y = d = d.next;
            do h = t(h, y.action), y = y.next; while (y !== d);
            Dt(h, r.memoizedState) || (dt = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), s.lastRenderedState = h
        }
        return [h, l]
    }

    function Bf() {}

    function Uf(t, r) {
        var s = De,
            l = kt(),
            d = r(),
            h = !Dt(l.memoizedState, d);
        if (h && (l.memoizedState = d, dt = !0), l = l.queue, Ml(Hf.bind(null, s, l, t), [t]), l.getSnapshot !== r || h || We !== null && We.memoizedState.tag & 1) {
            if (s.flags |= 2048, Fi(9, Wf.bind(null, s, l, d, r), void 0, null), He === null) throw Error(i(349));
            (rr & 30) !== 0 || $f(s, r, d)
        }
        return d
    }

    function $f(t, r, s) {
        t.flags |= 16384, t = {
            getSnapshot: r,
            value: s
        }, r = De.updateQueue, r === null ? (r = {
            lastEffect: null,
            stores: null
        }, De.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t))
    }

    function Wf(t, r, s, l) {
        r.value = s, r.getSnapshot = l, Kf(r) && Gf(t)
    }

    function Hf(t, r, s) {
        return s(function() {
            Kf(r) && Gf(t)
        })
    }

    function Kf(t) {
        var r = t.getSnapshot;
        t = t.value;
        try {
            var s = r();
            return !Dt(t, s)
        } catch {
            return !0
        }
    }

    function Gf(t) {
        var r = an(t, 1);
        r !== null && Vt(r, t, 1, -1)
    }

    function Qf(t) {
        var r = Gt();
        return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vi,
            lastRenderedState: t
        }, r.queue = t, t = t.dispatch = Lx.bind(null, De, t), [r.memoizedState, t]
    }

    function Fi(t, r, s, l) {
        return t = {
            tag: t,
            create: r,
            destroy: s,
            deps: l,
            next: null
        }, r = De.updateQueue, r === null ? (r = {
            lastEffect: null,
            stores: null
        }, De.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, r.lastEffect = t)), t
    }

    function qf() {
        return kt().memoizedState
    }

    function to(t, r, s, l) {
        var d = Gt();
        De.flags |= t, d.memoizedState = Fi(1 | r, s, void 0, l === void 0 ? null : l)
    }

    function no(t, r, s, l) {
        var d = kt();
        l = l === void 0 ? null : l;
        var h = void 0;
        if (Be !== null) {
            var y = Be.memoizedState;
            if (h = y.destroy, l !== null && kl(l, y.deps)) {
                d.memoizedState = Fi(r, s, h, l);
                return
            }
        }
        De.flags |= t, d.memoizedState = Fi(1 | r, s, h, l)
    }

    function Yf(t, r) {
        return to(8390656, 8, t, r)
    }

    function Ml(t, r) {
        return no(2048, 8, t, r)
    }

    function Xf(t, r) {
        return no(4, 2, t, r)
    }

    function Zf(t, r) {
        return no(4, 4, t, r)
    }

    function Jf(t, r) {
        if (typeof r == "function") return t = t(), r(t),
            function() {
                r(null)
            };
        if (r != null) return t = t(), r.current = t,
            function() {
                r.current = null
            }
    }

    function eh(t, r, s) {
        return s = s != null ? s.concat([t]) : null, no(4, 4, Jf.bind(null, r, t), s)
    }

    function Dl() {}

    function th(t, r) {
        var s = kt();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && kl(r, l[1]) ? l[0] : (s.memoizedState = [t, r], t)
    }

    function nh(t, r) {
        var s = kt();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && kl(r, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, r], t)
    }

    function rh(t, r, s) {
        return (rr & 21) === 0 ? (t.baseState && (t.baseState = !1, dt = !0), t.memoizedState = s) : (Dt(s, r) || (s = Md(), De.lanes |= s, ir |= s, t.baseState = !0), r)
    }

    function Dx(t, r) {
        var s = Ee;
        Ee = s !== 0 && 4 > s ? s : 4, t(!0);
        var l = bl.transition;
        bl.transition = {};
        try {
            t(!1), r()
        } finally {
            Ee = s, bl.transition = l
        }
    }

    function ih() {
        return kt().memoizedState
    }

    function Ox(t, r, s) {
        var l = Dn(t);
        if (s = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, sh(t)) oh(r, s);
        else if (s = _f(t, r, s, l), s !== null) {
            var d = at();
            Vt(s, t, l, d), ah(s, r, l)
        }
    }

    function Lx(t, r, s) {
        var l = Dn(t),
            d = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (sh(t)) oh(r, d);
        else {
            var h = t.alternate;
            if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
                var y = r.lastRenderedState,
                    C = h(y, s);
                if (d.hasEagerState = !0, d.eagerState = C, Dt(C, y)) {
                    var k = r.interleaved;
                    k === null ? (d.next = d, wl(r)) : (d.next = k.next, k.next = d), r.interleaved = d;
                    return
                }
            } catch {} finally {}
            s = _f(t, r, d, l), s !== null && (d = at(), Vt(s, t, l, d), ah(s, r, l))
        }
    }

    function sh(t) {
        var r = t.alternate;
        return t === De || r !== null && r === De
    }

    function oh(t, r) {
        _i = eo = !0;
        var s = t.pending;
        s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r
    }

    function ah(t, r, s) {
        if ((s & 4194240) !== 0) {
            var l = r.lanes;
            l &= t.pendingLanes, s |= l, r.lanes = s, La(t, s)
        }
    }
    var ro = {
            readContext: bt,
            useCallback: Je,
            useContext: Je,
            useEffect: Je,
            useImperativeHandle: Je,
            useInsertionEffect: Je,
            useLayoutEffect: Je,
            useMemo: Je,
            useReducer: Je,
            useRef: Je,
            useState: Je,
            useDebugValue: Je,
            useDeferredValue: Je,
            useTransition: Je,
            useMutableSource: Je,
            useSyncExternalStore: Je,
            useId: Je,
            unstable_isNewReconciler: !1
        },
        _x = {
            readContext: bt,
            useCallback: function(t, r) {
                return Gt().memoizedState = [t, r === void 0 ? null : r], t
            },
            useContext: bt,
            useEffect: Yf,
            useImperativeHandle: function(t, r, s) {
                return s = s != null ? s.concat([t]) : null, to(4194308, 4, Jf.bind(null, r, t), s)
            },
            useLayoutEffect: function(t, r) {
                return to(4194308, 4, t, r)
            },
            useInsertionEffect: function(t, r) {
                return to(4, 2, t, r)
            },
            useMemo: function(t, r) {
                var s = Gt();
                return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t
            },
            useReducer: function(t, r, s) {
                var l = Gt();
                return r = s !== void 0 ? s(r) : r, l.memoizedState = l.baseState = r, t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: r
                }, l.queue = t, t = t.dispatch = Ox.bind(null, De, t), [l.memoizedState, t]
            },
            useRef: function(t) {
                var r = Gt();
                return t = {
                    current: t
                }, r.memoizedState = t
            },
            useState: Qf,
            useDebugValue: Dl,
            useDeferredValue: function(t) {
                return Gt().memoizedState = t
            },
            useTransition: function() {
                var t = Qf(!1),
                    r = t[0];
                return t = Dx.bind(null, t[1]), Gt().memoizedState = t, [r, t]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(t, r, s) {
                var l = De,
                    d = Gt();
                if (je) {
                    if (s === void 0) throw Error(i(407));
                    s = s()
                } else {
                    if (s = r(), He === null) throw Error(i(349));
                    (rr & 30) !== 0 || $f(l, r, s)
                }
                d.memoizedState = s;
                var h = {
                    value: s,
                    getSnapshot: r
                };
                return d.queue = h, Yf(Hf.bind(null, l, h, t), [t]), l.flags |= 2048, Fi(9, Wf.bind(null, l, h, s, r), void 0, null), s
            },
            useId: function() {
                var t = Gt(),
                    r = He.identifierPrefix;
                if (je) {
                    var s = on,
                        l = sn;
                    s = (l & ~(1 << 32 - Mt(l) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Ii++, 0 < s && (r += "H" + s.toString(32)), r += ":"
                } else s = Mx++, r = ":" + r + "r" + s.toString(32) + ":";
                return t.memoizedState = r
            },
            unstable_isNewReconciler: !1
        },
        Ix = {
            readContext: bt,
            useCallback: th,
            useContext: bt,
            useEffect: Ml,
            useImperativeHandle: eh,
            useInsertionEffect: Xf,
            useLayoutEffect: Zf,
            useMemo: nh,
            useReducer: Nl,
            useRef: qf,
            useState: function() {
                return Nl(Vi)
            },
            useDebugValue: Dl,
            useDeferredValue: function(t) {
                var r = kt();
                return rh(r, Be.memoizedState, t)
            },
            useTransition: function() {
                var t = Nl(Vi)[0],
                    r = kt().memoizedState;
                return [t, r]
            },
            useMutableSource: Bf,
            useSyncExternalStore: Uf,
            useId: ih,
            unstable_isNewReconciler: !1
        },
        Vx = {
            readContext: bt,
            useCallback: th,
            useContext: bt,
            useEffect: Ml,
            useImperativeHandle: eh,
            useInsertionEffect: Xf,
            useLayoutEffect: Zf,
            useMemo: nh,
            useReducer: jl,
            useRef: qf,
            useState: function() {
                return jl(Vi)
            },
            useDebugValue: Dl,
            useDeferredValue: function(t) {
                var r = kt();
                return Be === null ? r.memoizedState = t : rh(r, Be.memoizedState, t)
            },
            useTransition: function() {
                var t = jl(Vi)[0],
                    r = kt().memoizedState;
                return [t, r]
            },
            useMutableSource: Bf,
            useSyncExternalStore: Uf,
            useId: ih,
            unstable_isNewReconciler: !1
        };

    function Lt(t, r) {
        if (t && t.defaultProps) {
            r = K({}, r), t = t.defaultProps;
            for (var s in t) r[s] === void 0 && (r[s] = t[s]);
            return r
        }
        return r
    }

    function Ol(t, r, s, l) {
        r = t.memoizedState, s = s(l, r), s = s == null ? r : K({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var io = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? Yn(t) === t : !1
        },
        enqueueSetState: function(t, r, s) {
            t = t._reactInternals;
            var l = at(),
                d = Dn(t),
                h = ln(l, d);
            h.payload = r, s != null && (h.callback = s), r = An(t, h, d), r !== null && (Vt(r, t, d, l), Ys(r, t, d))
        },
        enqueueReplaceState: function(t, r, s) {
            t = t._reactInternals;
            var l = at(),
                d = Dn(t),
                h = ln(l, d);
            h.tag = 1, h.payload = r, s != null && (h.callback = s), r = An(t, h, d), r !== null && (Vt(r, t, d, l), Ys(r, t, d))
        },
        enqueueForceUpdate: function(t, r) {
            t = t._reactInternals;
            var s = at(),
                l = Dn(t),
                d = ln(s, l);
            d.tag = 2, r != null && (d.callback = r), r = An(t, d, l), r !== null && (Vt(r, t, l, s), Ys(r, t, l))
        }
    };

    function lh(t, r, s, l, d, h, y) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, h, y) : r.prototype && r.prototype.isPureReactComponent ? !Ti(s, l) || !Ti(d, h) : !0
    }

    function uh(t, r, s) {
        var l = !1,
            d = bn,
            h = r.contextType;
        return typeof h == "object" && h !== null ? h = bt(h) : (d = ct(r) ? Zn : Ze.current, l = r.contextTypes, h = (l = l != null) ? Mr(t, d) : bn), r = new r(s, h), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = io, t.stateNode = r, r._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = h), r
    }

    function ch(t, r, s, l) {
        t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, l), r.state !== t && io.enqueueReplaceState(r, r.state, null)
    }

    function Ll(t, r, s, l) {
        var d = t.stateNode;
        d.props = s, d.state = t.memoizedState, d.refs = {}, Sl(t);
        var h = r.contextType;
        typeof h == "object" && h !== null ? d.context = bt(h) : (h = ct(r) ? Zn : Ze.current, d.context = Mr(t, h)), d.state = t.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Ol(t, r, h, s), d.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && io.enqueueReplaceState(d, d.state, null), Xs(t, s, d, l), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308)
    }

    function zr(t, r) {
        try {
            var s = "",
                l = r;
            do s += ve(l), l = l.return; while (l);
            var d = s
        } catch (h) {
            d = `
Error generating stack: ` + h.message + `
` + h.stack
        }
        return {
            value: t,
            source: r,
            stack: d,
            digest: null
        }
    }

    function _l(t, r, s) {
        return {
            value: t,
            source: null,
            stack: s ?? null,
            digest: r ?? null
        }
    }

    function Il(t, r) {
        try {
            console.error(r.value)
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    var Fx = typeof WeakMap == "function" ? WeakMap : Map;

    function dh(t, r, s) {
        s = ln(-1, s), s.tag = 3, s.payload = {
            element: null
        };
        var l = r.value;
        return s.callback = function() {
            fo || (fo = !0, Zl = l), Il(t, r)
        }, s
    }

    function fh(t, r, s) {
        s = ln(-1, s), s.tag = 3;
        var l = t.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var d = r.value;
            s.payload = function() {
                return l(d)
            }, s.callback = function() {
                Il(t, r)
            }
        }
        var h = t.stateNode;
        return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function() {
            Il(t, r), typeof l != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
            var y = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: y !== null ? y : ""
            })
        }), s
    }

    function hh(t, r, s) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Fx;
            var d = new Set;
            l.set(r, d)
        } else d = l.get(r), d === void 0 && (d = new Set, l.set(r, d));
        d.has(s) || (d.add(s), t = Jx.bind(null, t, r, s), r.then(t, t))
    }

    function ph(t) {
        do {
            var r;
            if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
            t = t.return
        } while (t !== null);
        return null
    }

    function mh(t, r, s, l, d) {
        return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = ln(-1, 1), r.tag = 2, An(s, r, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t)
    }
    var zx = I.ReactCurrentOwner,
        dt = !1;

    function ot(t, r, s, l) {
        r.child = t === null ? Lf(r, null, s, l) : _r(r, t.child, s, l)
    }

    function gh(t, r, s, l, d) {
        s = s.render;
        var h = r.ref;
        return Vr(r, d), l = Rl(t, r, s, l, h, d), s = Al(), t !== null && !dt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, un(t, r, d)) : (je && s && dl(r), r.flags |= 1, ot(t, r, l, d), r.child)
    }

    function yh(t, r, s, l, d) {
        if (t === null) {
            var h = s.type;
            return typeof h == "function" && !su(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = h, vh(t, r, h, l, d)) : (t = vo(s.type, null, l, r, r.mode, d), t.ref = r.ref, t.return = r, r.child = t)
        }
        if (h = t.child, (t.lanes & d) === 0) {
            var y = h.memoizedProps;
            if (s = s.compare, s = s !== null ? s : Ti, s(y, l) && t.ref === r.ref) return un(t, r, d)
        }
        return r.flags |= 1, t = Ln(h, l), t.ref = r.ref, t.return = r, r.child = t
    }

    function vh(t, r, s, l, d) {
        if (t !== null) {
            var h = t.memoizedProps;
            if (Ti(h, l) && t.ref === r.ref)
                if (dt = !1, r.pendingProps = l = h, (t.lanes & d) !== 0)(t.flags & 131072) !== 0 && (dt = !0);
                else return r.lanes = t.lanes, un(t, r, d)
        }
        return Vl(t, r, s, l, d)
    }

    function xh(t, r, s) {
        var l = r.pendingProps,
            d = l.children,
            h = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden")
            if ((r.mode & 1) === 0) r.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, ke(Ur, wt), wt |= s;
            else {
                if ((s & 1073741824) === 0) return t = h !== null ? h.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                }, r.updateQueue = null, ke(Ur, wt), wt |= t, null;
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = h !== null ? h.baseLanes : s, ke(Ur, wt), wt |= l
            }
        else h !== null ? (l = h.baseLanes | s, r.memoizedState = null) : l = s, ke(Ur, wt), wt |= l;
        return ot(t, r, d, s), r.child
    }

    function wh(t, r) {
        var s = r.ref;
        (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152)
    }

    function Vl(t, r, s, l, d) {
        var h = ct(s) ? Zn : Ze.current;
        return h = Mr(r, h), Vr(r, d), s = Rl(t, r, s, l, h, d), l = Al(), t !== null && !dt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, un(t, r, d)) : (je && l && dl(r), r.flags |= 1, ot(t, r, s, d), r.child)
    }

    function Sh(t, r, s, l, d) {
        if (ct(s)) {
            var h = !0;
            Us(r)
        } else h = !1;
        if (Vr(r, d), r.stateNode === null) oo(t, r), uh(r, s, l), Ll(r, s, l, d), l = !0;
        else if (t === null) {
            var y = r.stateNode,
                C = r.memoizedProps;
            y.props = C;
            var k = y.context,
                L = s.contextType;
            typeof L == "object" && L !== null ? L = bt(L) : (L = ct(s) ? Zn : Ze.current, L = Mr(r, L));
            var B = s.getDerivedStateFromProps,
                U = typeof B == "function" || typeof y.getSnapshotBeforeUpdate == "function";
            U || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (C !== l || k !== L) && ch(r, y, l, L), Rn = !1;
            var z = r.memoizedState;
            y.state = z, Xs(r, l, y, d), k = r.memoizedState, C !== l || z !== k || ut.current || Rn ? (typeof B == "function" && (Ol(r, s, B, l), k = r.memoizedState), (C = Rn || lh(r, s, C, l, z, k, L)) ? (U || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = k), y.props = l, y.state = k, y.context = L, l = C) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), l = !1)
        } else {
            y = r.stateNode, If(t, r), C = r.memoizedProps, L = r.type === r.elementType ? C : Lt(r.type, C), y.props = L, U = r.pendingProps, z = y.context, k = s.contextType, typeof k == "object" && k !== null ? k = bt(k) : (k = ct(s) ? Zn : Ze.current, k = Mr(r, k));
            var Y = s.getDerivedStateFromProps;
            (B = typeof Y == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (C !== U || z !== k) && ch(r, y, l, k), Rn = !1, z = r.memoizedState, y.state = z, Xs(r, l, y, d);
            var J = r.memoizedState;
            C !== U || z !== J || ut.current || Rn ? (typeof Y == "function" && (Ol(r, s, Y, l), J = r.memoizedState), (L = Rn || lh(r, s, L, l, z, J, k) || !1) ? (B || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, J, k), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(l, J, k)), typeof y.componentDidUpdate == "function" && (r.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || C === t.memoizedProps && z === t.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && z === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = J), y.props = l, y.state = J, y.context = k, l = L) : (typeof y.componentDidUpdate != "function" || C === t.memoizedProps && z === t.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && z === t.memoizedState || (r.flags |= 1024), l = !1)
        }
        return Fl(t, r, s, l, h, d)
    }

    function Fl(t, r, s, l, d, h) {
        wh(t, r);
        var y = (r.flags & 128) !== 0;
        if (!l && !y) return d && bf(r, s, !1), un(t, r, h);
        l = r.stateNode, zx.current = r;
        var C = y && typeof s.getDerivedStateFromError != "function" ? null : l.render();
        return r.flags |= 1, t !== null && y ? (r.child = _r(r, t.child, null, h), r.child = _r(r, null, C, h)) : ot(t, r, C, h), r.memoizedState = l.state, d && bf(r, s, !0), r.child
    }

    function Ph(t) {
        var r = t.stateNode;
        r.pendingContext ? Ef(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Ef(t, r.context, !1), Pl(t, r.containerInfo)
    }

    function Ch(t, r, s, l, d) {
        return Lr(), ml(d), r.flags |= 256, ot(t, r, s, l), r.child
    }
    var zl = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Bl(t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }

    function Eh(t, r, s) {
        var l = r.pendingProps,
            d = Me.current,
            h = !1,
            y = (r.flags & 128) !== 0,
            C;
        if ((C = y) || (C = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), C ? (h = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), ke(Me, d & 1), t === null) return pl(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (y = l.children, t = l.fallback, h ? (l = r.mode, h = r.child, y = {
            mode: "hidden",
            children: y
        }, (l & 1) === 0 && h !== null ? (h.childLanes = 0, h.pendingProps = y) : h = xo(y, l, 0, null), t = lr(t, l, s, null), h.return = r, t.return = r, h.sibling = t, r.child = h, r.child.memoizedState = Bl(s), r.memoizedState = zl, t) : Ul(r, y));
        if (d = t.memoizedState, d !== null && (C = d.dehydrated, C !== null)) return Bx(t, r, y, l, C, d, s);
        if (h) {
            h = l.fallback, y = r.mode, d = t.child, C = d.sibling;
            var k = {
                mode: "hidden",
                children: l.children
            };
            return (y & 1) === 0 && r.child !== d ? (l = r.child, l.childLanes = 0, l.pendingProps = k, r.deletions = null) : (l = Ln(d, k), l.subtreeFlags = d.subtreeFlags & 14680064), C !== null ? h = Ln(C, h) : (h = lr(h, y, s, null), h.flags |= 2), h.return = r, l.return = r, l.sibling = h, r.child = l, l = h, h = r.child, y = t.child.memoizedState, y = y === null ? Bl(s) : {
                baseLanes: y.baseLanes | s,
                cachePool: null,
                transitions: y.transitions
            }, h.memoizedState = y, h.childLanes = t.childLanes & ~s, r.memoizedState = zl, l
        }
        return h = t.child, t = h.sibling, l = Ln(h, {
            mode: "visible",
            children: l.children
        }), (r.mode & 1) === 0 && (l.lanes = s), l.return = r, l.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = l, r.memoizedState = null, l
    }

    function Ul(t, r) {
        return r = xo({
            mode: "visible",
            children: r
        }, t.mode, 0, null), r.return = t, t.child = r
    }

    function so(t, r, s, l) {
        return l !== null && ml(l), _r(r, t.child, null, s), t = Ul(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t
    }

    function Bx(t, r, s, l, d, h, y) {
        if (s) return r.flags & 256 ? (r.flags &= -257, l = _l(Error(i(422))), so(t, r, y, l)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (h = l.fallback, d = r.mode, l = xo({
            mode: "visible",
            children: l.children
        }, d, 0, null), h = lr(h, d, y, null), h.flags |= 2, l.return = r, h.return = r, l.sibling = h, r.child = l, (r.mode & 1) !== 0 && _r(r, t.child, null, y), r.child.memoizedState = Bl(y), r.memoizedState = zl, h);
        if ((r.mode & 1) === 0) return so(t, r, y, null);
        if (d.data === "$!") {
            if (l = d.nextSibling && d.nextSibling.dataset, l) var C = l.dgst;
            return l = C, h = Error(i(419)), l = _l(h, l, void 0), so(t, r, y, l)
        }
        if (C = (y & t.childLanes) !== 0, dt || C) {
            if (l = He, l !== null) {
                switch (y & -y) {
                    case 4:
                        d = 2;
                        break;
                    case 16:
                        d = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        d = 32;
                        break;
                    case 536870912:
                        d = 268435456;
                        break;
                    default:
                        d = 0
                }
                d = (d & (l.suspendedLanes | y)) !== 0 ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, an(t, d), Vt(l, t, d, -1))
            }
            return iu(), l = _l(Error(i(421))), so(t, r, y, l)
        }
        return d.data === "$?" ? (r.flags |= 128, r.child = t.child, r = ew.bind(null, t), d._reactRetry = r, null) : (t = h.treeContext, xt = En(d.nextSibling), vt = r, je = !0, Ot = null, t !== null && (Et[Tt++] = sn, Et[Tt++] = on, Et[Tt++] = Jn, sn = t.id, on = t.overflow, Jn = r), r = Ul(r, l.children), r.flags |= 4096, r)
    }

    function Th(t, r, s) {
        t.lanes |= r;
        var l = t.alternate;
        l !== null && (l.lanes |= r), xl(t.return, r, s)
    }

    function $l(t, r, s, l, d) {
        var h = t.memoizedState;
        h === null ? t.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: s,
            tailMode: d
        } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = d)
    }

    function bh(t, r, s) {
        var l = r.pendingProps,
            d = l.revealOrder,
            h = l.tail;
        if (ot(t, r, l.children, s), l = Me.current, (l & 2) !== 0) l = l & 1 | 2, r.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Th(t, s, r);
                else if (t.tag === 19) Th(t, s, r);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === r) break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === r) break e;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            l &= 1
        }
        if (ke(Me, l), (r.mode & 1) === 0) r.memoizedState = null;
        else switch (d) {
            case "forwards":
                for (s = r.child, d = null; s !== null;) t = s.alternate, t !== null && Zs(t) === null && (d = s), s = s.sibling;
                s = d, s === null ? (d = r.child, r.child = null) : (d = s.sibling, s.sibling = null), $l(r, !1, d, s, h);
                break;
            case "backwards":
                for (s = null, d = r.child, r.child = null; d !== null;) {
                    if (t = d.alternate, t !== null && Zs(t) === null) {
                        r.child = d;
                        break
                    }
                    t = d.sibling, d.sibling = s, s = d, d = t
                }
                $l(r, !0, s, null, h);
                break;
            case "together":
                $l(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
        }
        return r.child
    }

    function oo(t, r) {
        (r.mode & 1) === 0 && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2)
    }

    function un(t, r, s) {
        if (t !== null && (r.dependencies = t.dependencies), ir |= r.lanes, (s & r.childLanes) === 0) return null;
        if (t !== null && r.child !== t.child) throw Error(i(153));
        if (r.child !== null) {
            for (t = r.child, s = Ln(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null;) t = t.sibling, s = s.sibling = Ln(t, t.pendingProps), s.return = r;
            s.sibling = null
        }
        return r.child
    }

    function Ux(t, r, s) {
        switch (r.tag) {
            case 3:
                Ph(r), Lr();
                break;
            case 5:
                zf(r);
                break;
            case 1:
                ct(r.type) && Us(r);
                break;
            case 4:
                Pl(r, r.stateNode.containerInfo);
                break;
            case 10:
                var l = r.type._context,
                    d = r.memoizedProps.value;
                ke(Qs, l._currentValue), l._currentValue = d;
                break;
            case 13:
                if (l = r.memoizedState, l !== null) return l.dehydrated !== null ? (ke(Me, Me.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Eh(t, r, s) : (ke(Me, Me.current & 1), t = un(t, r, s), t !== null ? t.sibling : null);
                ke(Me, Me.current & 1);
                break;
            case 19:
                if (l = (s & r.childLanes) !== 0, (t.flags & 128) !== 0) {
                    if (l) return bh(t, r, s);
                    r.flags |= 128
                }
                if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), ke(Me, Me.current), l) break;
                return null;
            case 22:
            case 23:
                return r.lanes = 0, xh(t, r, s)
        }
        return un(t, r, s)
    }
    var kh, Wl, Rh, Ah;
    kh = function(t, r) {
        for (var s = r.child; s !== null;) {
            if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === r) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === r) return;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
    }, Wl = function() {}, Rh = function(t, r, s, l) {
        var d = t.memoizedProps;
        if (d !== l) {
            t = r.stateNode, nr(Kt.current);
            var h = null;
            switch (s) {
                case "input":
                    d = xa(t, d), l = xa(t, l), h = [];
                    break;
                case "select":
                    d = K({}, d, {
                        value: void 0
                    }), l = K({}, l, {
                        value: void 0
                    }), h = [];
                    break;
                case "textarea":
                    d = Pa(t, d), l = Pa(t, l), h = [];
                    break;
                default:
                    typeof d.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Fs)
            }
            Ea(s, l);
            var y;
            s = null;
            for (L in d)
                if (!l.hasOwnProperty(L) && d.hasOwnProperty(L) && d[L] != null)
                    if (L === "style") {
                        var C = d[L];
                        for (y in C) C.hasOwnProperty(y) && (s || (s = {}), s[y] = "")
                    } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (a.hasOwnProperty(L) ? h || (h = []) : (h = h || []).push(L, null));
            for (L in l) {
                var k = l[L];
                if (C = d?.[L], l.hasOwnProperty(L) && k !== C && (k != null || C != null))
                    if (L === "style")
                        if (C) {
                            for (y in C) !C.hasOwnProperty(y) || k && k.hasOwnProperty(y) || (s || (s = {}), s[y] = "");
                            for (y in k) k.hasOwnProperty(y) && C[y] !== k[y] && (s || (s = {}), s[y] = k[y])
                        } else s || (h || (h = []), h.push(L, s)), s = k;
                else L === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, C = C ? C.__html : void 0, k != null && C !== k && (h = h || []).push(L, k)) : L === "children" ? typeof k != "string" && typeof k != "number" || (h = h || []).push(L, "" + k) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (a.hasOwnProperty(L) ? (k != null && L === "onScroll" && Re("scroll", t), h || C === k || (h = [])) : (h = h || []).push(L, k))
            }
            s && (h = h || []).push("style", s);
            var L = h;
            (r.updateQueue = L) && (r.flags |= 4)
        }
    }, Ah = function(t, r, s, l) {
        s !== l && (r.flags |= 4)
    };

    function zi(t, r) {
        if (!je) switch (t.tailMode) {
            case "hidden":
                r = t.tail;
                for (var s = null; r !== null;) r.alternate !== null && (s = r), r = r.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var l = null; s !== null;) s.alternate !== null && (l = s), s = s.sibling;
                l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
        }
    }

    function et(t) {
        var r = t.alternate !== null && t.alternate.child === t.child,
            s = 0,
            l = 0;
        if (r)
            for (var d = t.child; d !== null;) s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = t, d = d.sibling;
        else
            for (d = t.child; d !== null;) s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
        return t.subtreeFlags |= l, t.childLanes = s, r
    }

    function $x(t, r, s) {
        var l = r.pendingProps;
        switch (fl(r), r.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return et(r), null;
            case 1:
                return ct(r.type) && Bs(), et(r), null;
            case 3:
                return l = r.stateNode, Fr(), Ae(ut), Ae(Ze), Tl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ks(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Ot !== null && (tu(Ot), Ot = null))), Wl(t, r), et(r), null;
            case 5:
                Cl(r);
                var d = nr(Li.current);
                if (s = r.type, t !== null && r.stateNode != null) Rh(t, r, s, l, d), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
                else {
                    if (!l) {
                        if (r.stateNode === null) throw Error(i(166));
                        return et(r), null
                    }
                    if (t = nr(Kt.current), Ks(r)) {
                        l = r.stateNode, s = r.type;
                        var h = r.memoizedProps;
                        switch (l[Ht] = r, l[Ni] = h, t = (r.mode & 1) !== 0, s) {
                            case "dialog":
                                Re("cancel", l), Re("close", l);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Re("load", l);
                                break;
                            case "video":
                            case "audio":
                                for (d = 0; d < ki.length; d++) Re(ki[d], l);
                                break;
                            case "source":
                                Re("error", l);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Re("error", l), Re("load", l);
                                break;
                            case "details":
                                Re("toggle", l);
                                break;
                            case "input":
                                ld(l, h), Re("invalid", l);
                                break;
                            case "select":
                                l._wrapperState = {
                                    wasMultiple: !!h.multiple
                                }, Re("invalid", l);
                                break;
                            case "textarea":
                                dd(l, h), Re("invalid", l)
                        }
                        Ea(s, h), d = null;
                        for (var y in h)
                            if (h.hasOwnProperty(y)) {
                                var C = h[y];
                                y === "children" ? typeof C == "string" ? l.textContent !== C && (h.suppressHydrationWarning !== !0 && Vs(l.textContent, C, t), d = ["children", C]) : typeof C == "number" && l.textContent !== "" + C && (h.suppressHydrationWarning !== !0 && Vs(l.textContent, C, t), d = ["children", "" + C]) : a.hasOwnProperty(y) && C != null && y === "onScroll" && Re("scroll", l)
                            } switch (s) {
                            case "input":
                                xr(l), cd(l, h, !0);
                                break;
                            case "textarea":
                                xr(l), hd(l);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof h.onClick == "function" && (l.onclick = Fs)
                        }
                        l = d, r.updateQueue = l, l !== null && (r.flags |= 4)
                    } else {
                        y = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = pd(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = y.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = y.createElement(s, {
                            is: l.is
                        }) : (t = y.createElement(s), s === "select" && (y = t, l.multiple ? y.multiple = !0 : l.size && (y.size = l.size))) : t = y.createElementNS(t, s), t[Ht] = r, t[Ni] = l, kh(t, r, !1, !1), r.stateNode = t;
                        e: {
                            switch (y = Ta(s, l), s) {
                                case "dialog":
                                    Re("cancel", t), Re("close", t), d = l;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Re("load", t), d = l;
                                    break;
                                case "video":
                                case "audio":
                                    for (d = 0; d < ki.length; d++) Re(ki[d], t);
                                    d = l;
                                    break;
                                case "source":
                                    Re("error", t), d = l;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Re("error", t), Re("load", t), d = l;
                                    break;
                                case "details":
                                    Re("toggle", t), d = l;
                                    break;
                                case "input":
                                    ld(t, l), d = xa(t, l), Re("invalid", t);
                                    break;
                                case "option":
                                    d = l;
                                    break;
                                case "select":
                                    t._wrapperState = {
                                        wasMultiple: !!l.multiple
                                    }, d = K({}, l, {
                                        value: void 0
                                    }), Re("invalid", t);
                                    break;
                                case "textarea":
                                    dd(t, l), d = Pa(t, l), Re("invalid", t);
                                    break;
                                default:
                                    d = l
                            }
                            Ea(s, d),
                            C = d;
                            for (h in C)
                                if (C.hasOwnProperty(h)) {
                                    var k = C[h];
                                    h === "style" ? yd(t, k) : h === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && md(t, k)) : h === "children" ? typeof k == "string" ? (s !== "textarea" || k !== "") && li(t, k) : typeof k == "number" && li(t, "" + k) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (a.hasOwnProperty(h) ? k != null && h === "onScroll" && Re("scroll", t) : k != null && O(t, h, k, y))
                                } switch (s) {
                                case "input":
                                    xr(t), cd(t, l, !1);
                                    break;
                                case "textarea":
                                    xr(t), hd(t);
                                    break;
                                case "option":
                                    l.value != null && t.setAttribute("value", "" + Pe(l.value));
                                    break;
                                case "select":
                                    t.multiple = !!l.multiple, h = l.value, h != null ? wr(t, !!l.multiple, h, !1) : l.defaultValue != null && wr(t, !!l.multiple, l.defaultValue, !0);
                                    break;
                                default:
                                    typeof d.onClick == "function" && (t.onclick = Fs)
                            }
                            switch (s) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!l.autoFocus;
                                    break e;
                                case "img":
                                    l = !0;
                                    break e;
                                default:
                                    l = !1
                            }
                        }
                        l && (r.flags |= 4)
                    }
                    r.ref !== null && (r.flags |= 512, r.flags |= 2097152)
                }
                return et(r), null;
            case 6:
                if (t && r.stateNode != null) Ah(t, r, t.memoizedProps, l);
                else {
                    if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
                    if (s = nr(Li.current), nr(Kt.current), Ks(r)) {
                        if (l = r.stateNode, s = r.memoizedProps, l[Ht] = r, (h = l.nodeValue !== s) && (t = vt, t !== null)) switch (t.tag) {
                            case 3:
                                Vs(l.nodeValue, s, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 && Vs(l.nodeValue, s, (t.mode & 1) !== 0)
                        }
                        h && (r.flags |= 4)
                    } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Ht] = r, r.stateNode = l
                }
                return et(r), null;
            case 13:
                if (Ae(Me), l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (je && xt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Mf(), Lr(), r.flags |= 98560, h = !1;
                    else if (h = Ks(r), l !== null && l.dehydrated !== null) {
                        if (t === null) {
                            if (!h) throw Error(i(318));
                            if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(i(317));
                            h[Ht] = r
                        } else Lr(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
                        et(r), h = !1
                    } else Ot !== null && (tu(Ot), Ot = null), h = !0;
                    if (!h) return r.flags & 65536 ? r : null
                }
                return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : iu())), r.updateQueue !== null && (r.flags |= 4), et(r), null);
            case 4:
                return Fr(), Wl(t, r), t === null && Ri(r.stateNode.containerInfo), et(r), null;
            case 10:
                return vl(r.type._context), et(r), null;
            case 17:
                return ct(r.type) && Bs(), et(r), null;
            case 19:
                if (Ae(Me), h = r.memoizedState, h === null) return et(r), null;
                if (l = (r.flags & 128) !== 0, y = h.rendering, y === null)
                    if (l) zi(h, !1);
                    else {
                        if (Ue !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = r.child; t !== null;) {
                                if (y = Zs(t), y !== null) {
                                    for (r.flags |= 128, zi(h, !1), l = y.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = s, s = r.child; s !== null;) h = s, t = l, h.flags &= 14680066, y = h.alternate, y === null ? (h.childLanes = 0, h.lanes = t, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = y.childLanes, h.lanes = y.lanes, h.child = y.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = y.memoizedProps, h.memoizedState = y.memoizedState, h.updateQueue = y.updateQueue, h.type = y.type, t = y.dependencies, h.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }), s = s.sibling;
                                    return ke(Me, Me.current & 1 | 2), r.child
                                }
                                t = t.sibling
                            }
                        h.tail !== null && Ie() > $r && (r.flags |= 128, l = !0, zi(h, !1), r.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (t = Zs(y), t !== null) {
                            if (r.flags |= 128, l = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), zi(h, !0), h.tail === null && h.tailMode === "hidden" && !y.alternate && !je) return et(r), null
                        } else 2 * Ie() - h.renderingStartTime > $r && s !== 1073741824 && (r.flags |= 128, l = !0, zi(h, !1), r.lanes = 4194304);
                    h.isBackwards ? (y.sibling = r.child, r.child = y) : (s = h.last, s !== null ? s.sibling = y : r.child = y, h.last = y)
                }
                return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Ie(), r.sibling = null, s = Me.current, ke(Me, l ? s & 1 | 2 : s & 1), r) : (et(r), null);
            case 22:
            case 23:
                return ru(), l = r.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (r.flags |= 8192), l && (r.mode & 1) !== 0 ? (wt & 1073741824) !== 0 && (et(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : et(r), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(i(156, r.tag))
    }

    function Wx(t, r) {
        switch (fl(r), r.tag) {
            case 1:
                return ct(r.type) && Bs(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
            case 3:
                return Fr(), Ae(ut), Ae(Ze), Tl(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
            case 5:
                return Cl(r), null;
            case 13:
                if (Ae(Me), t = r.memoizedState, t !== null && t.dehydrated !== null) {
                    if (r.alternate === null) throw Error(i(340));
                    Lr()
                }
                return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
            case 19:
                return Ae(Me), null;
            case 4:
                return Fr(), null;
            case 10:
                return vl(r.type._context), null;
            case 22:
            case 23:
                return ru(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var ao = !1,
        tt = !1,
        Hx = typeof WeakSet == "function" ? WeakSet : Set,
        Z = null;

    function Br(t, r) {
        var s = t.ref;
        if (s !== null)
            if (typeof s == "function") try {
                s(null)
            } catch (l) {
                Le(t, r, l)
            } else s.current = null
    }

    function Hl(t, r, s) {
        try {
            s()
        } catch (l) {
            Le(t, r, l)
        }
    }
    var Nh = !1;

    function Kx(t, r) {
        if (rl = ks, t = lf(), qa(t)) {
            if ("selectionStart" in t) var s = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else e: {
                s = (s = t.ownerDocument) && s.defaultView || window;
                var l = s.getSelection && s.getSelection();
                if (l && l.rangeCount !== 0) {
                    s = l.anchorNode;
                    var d = l.anchorOffset,
                        h = l.focusNode;
                    l = l.focusOffset;
                    try {
                        s.nodeType, h.nodeType
                    } catch {
                        s = null;
                        break e
                    }
                    var y = 0,
                        C = -1,
                        k = -1,
                        L = 0,
                        B = 0,
                        U = t,
                        z = null;
                    t: for (;;) {
                        for (var Y; U !== s || d !== 0 && U.nodeType !== 3 || (C = y + d), U !== h || l !== 0 && U.nodeType !== 3 || (k = y + l), U.nodeType === 3 && (y += U.nodeValue.length), (Y = U.firstChild) !== null;) z = U, U = Y;
                        for (;;) {
                            if (U === t) break t;
                            if (z === s && ++L === d && (C = y), z === h && ++B === l && (k = y), (Y = U.nextSibling) !== null) break;
                            U = z, z = U.parentNode
                        }
                        U = Y
                    }
                    s = C === -1 || k === -1 ? null : {
                        start: C,
                        end: k
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (il = {
                focusedElem: t,
                selectionRange: s
            }, ks = !1, Z = r; Z !== null;)
            if (r = Z, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, Z = t;
            else
                for (; Z !== null;) {
                    r = Z;
                    try {
                        var J = r.alternate;
                        if ((r.flags & 1024) !== 0) switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (J !== null) {
                                    var ee = J.memoizedProps,
                                        Ve = J.memoizedState,
                                        j = r.stateNode,
                                        R = j.getSnapshotBeforeUpdate(r.elementType === r.type ? ee : Lt(r.type, ee), Ve);
                                    j.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var D = r.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                        }
                    } catch (W) {
                        Le(r, r.return, W)
                    }
                    if (t = r.sibling, t !== null) {
                        t.return = r.return, Z = t;
                        break
                    }
                    Z = r.return
                }
        return J = Nh, Nh = !1, J
    }

    function Bi(t, r, s) {
        var l = r.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
            var d = l = l.next;
            do {
                if ((d.tag & t) === t) {
                    var h = d.destroy;
                    d.destroy = void 0, h !== void 0 && Hl(r, s, h)
                }
                d = d.next
            } while (d !== l)
        }
    }

    function lo(t, r) {
        if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
            var s = r = r.next;
            do {
                if ((s.tag & t) === t) {
                    var l = s.create;
                    s.destroy = l()
                }
                s = s.next
            } while (s !== r)
        }
    }

    function Kl(t) {
        var r = t.ref;
        if (r !== null) {
            var s = t.stateNode;
            switch (t.tag) {
                case 5:
                    t = s;
                    break;
                default:
                    t = s
            }
            typeof r == "function" ? r(t) : r.current = t
        }
    }

    function jh(t) {
        var r = t.alternate;
        r !== null && (t.alternate = null, jh(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[Ht], delete r[Ni], delete r[ll], delete r[Rx], delete r[Ax])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }

    function Mh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }

    function Dh(t) {
        e: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Mh(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Gl(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Fs));
        else if (l !== 4 && (t = t.child, t !== null))
            for (Gl(t, r, s), t = t.sibling; t !== null;) Gl(t, r, s), t = t.sibling
    }

    function Ql(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
        else if (l !== 4 && (t = t.child, t !== null))
            for (Ql(t, r, s), t = t.sibling; t !== null;) Ql(t, r, s), t = t.sibling
    }
    var Qe = null,
        _t = !1;

    function Nn(t, r, s) {
        for (s = s.child; s !== null;) Oh(t, r, s), s = s.sibling
    }

    function Oh(t, r, s) {
        if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
            Wt.onCommitFiberUnmount(Ss, s)
        } catch {}
        switch (s.tag) {
            case 5:
                tt || Br(s, r);
            case 6:
                var l = Qe,
                    d = _t;
                Qe = null, Nn(t, r, s), Qe = l, _t = d, Qe !== null && (_t ? (t = Qe, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : Qe.removeChild(s.stateNode));
                break;
            case 18:
                Qe !== null && (_t ? (t = Qe, s = s.stateNode, t.nodeType === 8 ? al(t.parentNode, s) : t.nodeType === 1 && al(t, s), xi(t)) : al(Qe, s.stateNode));
                break;
            case 4:
                l = Qe, d = _t, Qe = s.stateNode.containerInfo, _t = !0, Nn(t, r, s), Qe = l, _t = d;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!tt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                    d = l = l.next;
                    do {
                        var h = d,
                            y = h.destroy;
                        h = h.tag, y !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && Hl(s, r, y), d = d.next
                    } while (d !== l)
                }
                Nn(t, r, s);
                break;
            case 1:
                if (!tt && (Br(s, r), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
                    l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount()
                } catch (C) {
                    Le(s, r, C)
                }
                Nn(t, r, s);
                break;
            case 21:
                Nn(t, r, s);
                break;
            case 22:
                s.mode & 1 ? (tt = (l = tt) || s.memoizedState !== null, Nn(t, r, s), tt = l) : Nn(t, r, s);
                break;
            default:
                Nn(t, r, s)
        }
    }

    function Lh(t) {
        var r = t.updateQueue;
        if (r !== null) {
            t.updateQueue = null;
            var s = t.stateNode;
            s === null && (s = t.stateNode = new Hx), r.forEach(function(l) {
                var d = tw.bind(null, t, l);
                s.has(l) || (s.add(l), l.then(d, d))
            })
        }
    }

    function It(t, r) {
        var s = r.deletions;
        if (s !== null)
            for (var l = 0; l < s.length; l++) {
                var d = s[l];
                try {
                    var h = t,
                        y = r,
                        C = y;
                    e: for (; C !== null;) {
                        switch (C.tag) {
                            case 5:
                                Qe = C.stateNode, _t = !1;
                                break e;
                            case 3:
                                Qe = C.stateNode.containerInfo, _t = !0;
                                break e;
                            case 4:
                                Qe = C.stateNode.containerInfo, _t = !0;
                                break e
                        }
                        C = C.return
                    }
                    if (Qe === null) throw Error(i(160));
                    Oh(h, y, d), Qe = null, _t = !1;
                    var k = d.alternate;
                    k !== null && (k.return = null), d.return = null
                } catch (L) {
                    Le(d, r, L)
                }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null;) _h(r, t), r = r.sibling
    }

    function _h(t, r) {
        var s = t.alternate,
            l = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (It(r, t), Qt(t), l & 4) {
                    try {
                        Bi(3, t, t.return), lo(3, t)
                    } catch (ee) {
                        Le(t, t.return, ee)
                    }
                    try {
                        Bi(5, t, t.return)
                    } catch (ee) {
                        Le(t, t.return, ee)
                    }
                }
                break;
            case 1:
                It(r, t), Qt(t), l & 512 && s !== null && Br(s, s.return);
                break;
            case 5:
                if (It(r, t), Qt(t), l & 512 && s !== null && Br(s, s.return), t.flags & 32) {
                    var d = t.stateNode;
                    try {
                        li(d, "")
                    } catch (ee) {
                        Le(t, t.return, ee)
                    }
                }
                if (l & 4 && (d = t.stateNode, d != null)) {
                    var h = t.memoizedProps,
                        y = s !== null ? s.memoizedProps : h,
                        C = t.type,
                        k = t.updateQueue;
                    if (t.updateQueue = null, k !== null) try {
                        C === "input" && h.type === "radio" && h.name != null && ud(d, h), Ta(C, y);
                        var L = Ta(C, h);
                        for (y = 0; y < k.length; y += 2) {
                            var B = k[y],
                                U = k[y + 1];
                            B === "style" ? yd(d, U) : B === "dangerouslySetInnerHTML" ? md(d, U) : B === "children" ? li(d, U) : O(d, B, U, L)
                        }
                        switch (C) {
                            case "input":
                                wa(d, h);
                                break;
                            case "textarea":
                                fd(d, h);
                                break;
                            case "select":
                                var z = d._wrapperState.wasMultiple;
                                d._wrapperState.wasMultiple = !!h.multiple;
                                var Y = h.value;
                                Y != null ? wr(d, !!h.multiple, Y, !1) : z !== !!h.multiple && (h.defaultValue != null ? wr(d, !!h.multiple, h.defaultValue, !0) : wr(d, !!h.multiple, h.multiple ? [] : "", !1))
                        }
                        d[Ni] = h
                    } catch (ee) {
                        Le(t, t.return, ee)
                    }
                }
                break;
            case 6:
                if (It(r, t), Qt(t), l & 4) {
                    if (t.stateNode === null) throw Error(i(162));
                    d = t.stateNode, h = t.memoizedProps;
                    try {
                        d.nodeValue = h
                    } catch (ee) {
                        Le(t, t.return, ee)
                    }
                }
                break;
            case 3:
                if (It(r, t), Qt(t), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
                    xi(r.containerInfo)
                } catch (ee) {
                    Le(t, t.return, ee)
                }
                break;
            case 4:
                It(r, t), Qt(t);
                break;
            case 13:
                It(r, t), Qt(t), d = t.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (Xl = Ie())), l & 4 && Lh(t);
                break;
            case 22:
                if (B = s !== null && s.memoizedState !== null, t.mode & 1 ? (tt = (L = tt) || B, It(r, t), tt = L) : It(r, t), Qt(t), l & 8192) {
                    if (L = t.memoizedState !== null, (t.stateNode.isHidden = L) && !B && (t.mode & 1) !== 0)
                        for (Z = t, B = t.child; B !== null;) {
                            for (U = Z = B; Z !== null;) {
                                switch (z = Z, Y = z.child, z.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Bi(4, z, z.return);
                                        break;
                                    case 1:
                                        Br(z, z.return);
                                        var J = z.stateNode;
                                        if (typeof J.componentWillUnmount == "function") {
                                            l = z, s = z.return;
                                            try {
                                                r = l, J.props = r.memoizedProps, J.state = r.memoizedState, J.componentWillUnmount()
                                            } catch (ee) {
                                                Le(l, s, ee)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Br(z, z.return);
                                        break;
                                    case 22:
                                        if (z.memoizedState !== null) {
                                            Fh(U);
                                            continue
                                        }
                                }
                                Y !== null ? (Y.return = z, Z = Y) : Fh(U)
                            }
                            B = B.sibling
                        }
                    e: for (B = null, U = t;;) {
                        if (U.tag === 5) {
                            if (B === null) {
                                B = U;
                                try {
                                    d = U.stateNode, L ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (C = U.stateNode, k = U.memoizedProps.style, y = k != null && k.hasOwnProperty("display") ? k.display : null, C.style.display = gd("display", y))
                                } catch (ee) {
                                    Le(t, t.return, ee)
                                }
                            }
                        } else if (U.tag === 6) {
                            if (B === null) try {
                                U.stateNode.nodeValue = L ? "" : U.memoizedProps
                            } catch (ee) {
                                Le(t, t.return, ee)
                            }
                        } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === t) && U.child !== null) {
                            U.child.return = U, U = U.child;
                            continue
                        }
                        if (U === t) break e;
                        for (; U.sibling === null;) {
                            if (U.return === null || U.return === t) break e;
                            B === U && (B = null), U = U.return
                        }
                        B === U && (B = null), U.sibling.return = U.return, U = U.sibling
                    }
                }
                break;
            case 19:
                It(r, t), Qt(t), l & 4 && Lh(t);
                break;
            case 21:
                break;
            default:
                It(r, t), Qt(t)
        }
    }

    function Qt(t) {
        var r = t.flags;
        if (r & 2) {
            try {
                e: {
                    for (var s = t.return; s !== null;) {
                        if (Mh(s)) {
                            var l = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(i(160))
                }
                switch (l.tag) {
                    case 5:
                        var d = l.stateNode;
                        l.flags & 32 && (li(d, ""), l.flags &= -33);
                        var h = Dh(t);
                        Ql(t, h, d);
                        break;
                    case 3:
                    case 4:
                        var y = l.stateNode.containerInfo,
                            C = Dh(t);
                        Gl(t, C, y);
                        break;
                    default:
                        throw Error(i(161))
                }
            }
            catch (k) {
                Le(t, t.return, k)
            }
            t.flags &= -3
        }
        r & 4096 && (t.flags &= -4097)
    }

    function Gx(t, r, s) {
        Z = t, Ih(t)
    }

    function Ih(t, r, s) {
        for (var l = (t.mode & 1) !== 0; Z !== null;) {
            var d = Z,
                h = d.child;
            if (d.tag === 22 && l) {
                var y = d.memoizedState !== null || ao;
                if (!y) {
                    var C = d.alternate,
                        k = C !== null && C.memoizedState !== null || tt;
                    C = ao;
                    var L = tt;
                    if (ao = y, (tt = k) && !L)
                        for (Z = d; Z !== null;) y = Z, k = y.child, y.tag === 22 && y.memoizedState !== null ? zh(d) : k !== null ? (k.return = y, Z = k) : zh(d);
                    for (; h !== null;) Z = h, Ih(h), h = h.sibling;
                    Z = d, ao = C, tt = L
                }
                Vh(t)
            } else(d.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = d, Z = h) : Vh(t)
        }
    }

    function Vh(t) {
        for (; Z !== null;) {
            var r = Z;
            if ((r.flags & 8772) !== 0) {
                var s = r.alternate;
                try {
                    if ((r.flags & 8772) !== 0) switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            tt || lo(5, r);
                            break;
                        case 1:
                            var l = r.stateNode;
                            if (r.flags & 4 && !tt)
                                if (s === null) l.componentDidMount();
                                else {
                                    var d = r.elementType === r.type ? s.memoizedProps : Lt(r.type, s.memoizedProps);
                                    l.componentDidUpdate(d, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                } var h = r.updateQueue;
                            h !== null && Ff(r, h, l);
                            break;
                        case 3:
                            var y = r.updateQueue;
                            if (y !== null) {
                                if (s = null, r.child !== null) switch (r.child.tag) {
                                    case 5:
                                        s = r.child.stateNode;
                                        break;
                                    case 1:
                                        s = r.child.stateNode
                                }
                                Ff(r, y, s)
                            }
                            break;
                        case 5:
                            var C = r.stateNode;
                            if (s === null && r.flags & 4) {
                                s = C;
                                var k = r.memoizedProps;
                                switch (r.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        k.autoFocus && s.focus();
                                        break;
                                    case "img":
                                        k.src && (s.src = k.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) {
                                var L = r.alternate;
                                if (L !== null) {
                                    var B = L.memoizedState;
                                    if (B !== null) {
                                        var U = B.dehydrated;
                                        U !== null && xi(U)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(i(163))
                    }
                    tt || r.flags & 512 && Kl(r)
                } catch (z) {
                    Le(r, r.return, z)
                }
            }
            if (r === t) {
                Z = null;
                break
            }
            if (s = r.sibling, s !== null) {
                s.return = r.return, Z = s;
                break
            }
            Z = r.return
        }
    }

    function Fh(t) {
        for (; Z !== null;) {
            var r = Z;
            if (r === t) {
                Z = null;
                break
            }
            var s = r.sibling;
            if (s !== null) {
                s.return = r.return, Z = s;
                break
            }
            Z = r.return
        }
    }

    function zh(t) {
        for (; Z !== null;) {
            var r = Z;
            try {
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var s = r.return;
                        try {
                            lo(4, r)
                        } catch (k) {
                            Le(r, s, k)
                        }
                        break;
                    case 1:
                        var l = r.stateNode;
                        if (typeof l.componentDidMount == "function") {
                            var d = r.return;
                            try {
                                l.componentDidMount()
                            } catch (k) {
                                Le(r, d, k)
                            }
                        }
                        var h = r.return;
                        try {
                            Kl(r)
                        } catch (k) {
                            Le(r, h, k)
                        }
                        break;
                    case 5:
                        var y = r.return;
                        try {
                            Kl(r)
                        } catch (k) {
                            Le(r, y, k)
                        }
                }
            } catch (k) {
                Le(r, r.return, k)
            }
            if (r === t) {
                Z = null;
                break
            }
            var C = r.sibling;
            if (C !== null) {
                C.return = r.return, Z = C;
                break
            }
            Z = r.return
        }
    }
    var Qx = Math.ceil,
        uo = I.ReactCurrentDispatcher,
        ql = I.ReactCurrentOwner,
        Rt = I.ReactCurrentBatchConfig,
        we = 0,
        He = null,
        ze = null,
        qe = 0,
        wt = 0,
        Ur = Tn(0),
        Ue = 0,
        Ui = null,
        ir = 0,
        co = 0,
        Yl = 0,
        $i = null,
        ft = null,
        Xl = 0,
        $r = 1 / 0,
        cn = null,
        fo = !1,
        Zl = null,
        jn = null,
        ho = !1,
        Mn = null,
        po = 0,
        Wi = 0,
        Jl = null,
        mo = -1,
        go = 0;

    function at() {
        return (we & 6) !== 0 ? Ie() : mo !== -1 ? mo : mo = Ie()
    }

    function Dn(t) {
        return (t.mode & 1) === 0 ? 1 : (we & 2) !== 0 && qe !== 0 ? qe & -qe : jx.transition !== null ? (go === 0 && (go = Md()), go) : (t = Ee, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Bd(t.type)), t)
    }

    function Vt(t, r, s, l) {
        if (50 < Wi) throw Wi = 0, Jl = null, Error(i(185));
        pi(t, s, l), ((we & 2) === 0 || t !== He) && (t === He && ((we & 2) === 0 && (co |= s), Ue === 4 && On(t, qe)), ht(t, l), s === 1 && we === 0 && (r.mode & 1) === 0 && ($r = Ie() + 500, $s && kn()))
    }

    function ht(t, r) {
        var s = t.callbackNode;
        j0(t, r);
        var l = Es(t, t === He ? qe : 0);
        if (l === 0) s !== null && Ad(s), t.callbackNode = null, t.callbackPriority = 0;
        else if (r = l & -l, t.callbackPriority !== r) {
            if (s != null && Ad(s), r === 1) t.tag === 0 ? Nx(Uh.bind(null, t)) : kf(Uh.bind(null, t)), bx(function() {
                (we & 6) === 0 && kn()
            }), s = null;
            else {
                switch (Dd(l)) {
                    case 1:
                        s = Ma;
                        break;
                    case 4:
                        s = Nd;
                        break;
                    case 16:
                        s = ws;
                        break;
                    case 536870912:
                        s = jd;
                        break;
                    default:
                        s = ws
                }
                s = Yh(s, Bh.bind(null, t))
            }
            t.callbackPriority = r, t.callbackNode = s
        }
    }

    function Bh(t, r) {
        if (mo = -1, go = 0, (we & 6) !== 0) throw Error(i(327));
        var s = t.callbackNode;
        if (Wr() && t.callbackNode !== s) return null;
        var l = Es(t, t === He ? qe : 0);
        if (l === 0) return null;
        if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r) r = yo(t, l);
        else {
            r = l;
            var d = we;
            we |= 2;
            var h = Wh();
            (He !== t || qe !== r) && (cn = null, $r = Ie() + 500, or(t, r));
            do try {
                Xx();
                break
            } catch (C) {
                $h(t, C)
            }
            while (!0);
            yl(), uo.current = h, we = d, ze !== null ? r = 0 : (He = null, qe = 0, r = Ue)
        }
        if (r !== 0) {
            if (r === 2 && (d = Da(t), d !== 0 && (l = d, r = eu(t, d))), r === 1) throw s = Ui, or(t, 0), On(t, l), ht(t, Ie()), s;
            if (r === 6) On(t, l);
            else {
                if (d = t.current.alternate, (l & 30) === 0 && !qx(d) && (r = yo(t, l), r === 2 && (h = Da(t), h !== 0 && (l = h, r = eu(t, h))), r === 1)) throw s = Ui, or(t, 0), On(t, l), ht(t, Ie()), s;
                switch (t.finishedWork = d, t.finishedLanes = l, r) {
                    case 0:
                    case 1:
                        throw Error(i(345));
                    case 2:
                        ar(t, ft, cn);
                        break;
                    case 3:
                        if (On(t, l), (l & 130023424) === l && (r = Xl + 500 - Ie(), 10 < r)) {
                            if (Es(t, 0) !== 0) break;
                            if (d = t.suspendedLanes, (d & l) !== l) {
                                at(), t.pingedLanes |= t.suspendedLanes & d;
                                break
                            }
                            t.timeoutHandle = ol(ar.bind(null, t, ft, cn), r);
                            break
                        }
                        ar(t, ft, cn);
                        break;
                    case 4:
                        if (On(t, l), (l & 4194240) === l) break;
                        for (r = t.eventTimes, d = -1; 0 < l;) {
                            var y = 31 - Mt(l);
                            h = 1 << y, y = r[y], y > d && (d = y), l &= ~h
                        }
                        if (l = d, l = Ie() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Qx(l / 1960)) - l, 10 < l) {
                            t.timeoutHandle = ol(ar.bind(null, t, ft, cn), l);
                            break
                        }
                        ar(t, ft, cn);
                        break;
                    case 5:
                        ar(t, ft, cn);
                        break;
                    default:
                        throw Error(i(329))
                }
            }
        }
        return ht(t, Ie()), t.callbackNode === s ? Bh.bind(null, t) : null
    }

    function eu(t, r) {
        var s = $i;
        return t.current.memoizedState.isDehydrated && (or(t, r).flags |= 256), t = yo(t, r), t !== 2 && (r = ft, ft = s, r !== null && tu(r)), t
    }

    function tu(t) {
        ft === null ? ft = t : ft.push.apply(ft, t)
    }

    function qx(t) {
        for (var r = t;;) {
            if (r.flags & 16384) {
                var s = r.updateQueue;
                if (s !== null && (s = s.stores, s !== null))
                    for (var l = 0; l < s.length; l++) {
                        var d = s[l],
                            h = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!Dt(h(), d)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
            else {
                if (r === t) break;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === t) return !0;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
        }
        return !0
    }

    function On(t, r) {
        for (r &= ~Yl, r &= ~co, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r;) {
            var s = 31 - Mt(r),
                l = 1 << s;
            t[s] = -1, r &= ~l
        }
    }

    function Uh(t) {
        if ((we & 6) !== 0) throw Error(i(327));
        Wr();
        var r = Es(t, 0);
        if ((r & 1) === 0) return ht(t, Ie()), null;
        var s = yo(t, r);
        if (t.tag !== 0 && s === 2) {
            var l = Da(t);
            l !== 0 && (r = l, s = eu(t, l))
        }
        if (s === 1) throw s = Ui, or(t, 0), On(t, r), ht(t, Ie()), s;
        if (s === 6) throw Error(i(345));
        return t.finishedWork = t.current.alternate, t.finishedLanes = r, ar(t, ft, cn), ht(t, Ie()), null
    }

    function nu(t, r) {
        var s = we;
        we |= 1;
        try {
            return t(r)
        } finally {
            we = s, we === 0 && ($r = Ie() + 500, $s && kn())
        }
    }

    function sr(t) {
        Mn !== null && Mn.tag === 0 && (we & 6) === 0 && Wr();
        var r = we;
        we |= 1;
        var s = Rt.transition,
            l = Ee;
        try {
            if (Rt.transition = null, Ee = 1, t) return t()
        } finally {
            Ee = l, Rt.transition = s, we = r, (we & 6) === 0 && kn()
        }
    }

    function ru() {
        wt = Ur.current, Ae(Ur)
    }

    function or(t, r) {
        t.finishedWork = null, t.finishedLanes = 0;
        var s = t.timeoutHandle;
        if (s !== -1 && (t.timeoutHandle = -1, Tx(s)), ze !== null)
            for (s = ze.return; s !== null;) {
                var l = s;
                switch (fl(l), l.tag) {
                    case 1:
                        l = l.type.childContextTypes, l != null && Bs();
                        break;
                    case 3:
                        Fr(), Ae(ut), Ae(Ze), Tl();
                        break;
                    case 5:
                        Cl(l);
                        break;
                    case 4:
                        Fr();
                        break;
                    case 13:
                        Ae(Me);
                        break;
                    case 19:
                        Ae(Me);
                        break;
                    case 10:
                        vl(l.type._context);
                        break;
                    case 22:
                    case 23:
                        ru()
                }
                s = s.return
            }
        if (He = t, ze = t = Ln(t.current, null), qe = wt = r, Ue = 0, Ui = null, Yl = co = ir = 0, ft = $i = null, tr !== null) {
            for (r = 0; r < tr.length; r++)
                if (s = tr[r], l = s.interleaved, l !== null) {
                    s.interleaved = null;
                    var d = l.next,
                        h = s.pending;
                    if (h !== null) {
                        var y = h.next;
                        h.next = d, l.next = y
                    }
                    s.pending = l
                } tr = null
        }
        return t
    }

    function $h(t, r) {
        do {
            var s = ze;
            try {
                if (yl(), Js.current = ro, eo) {
                    for (var l = De.memoizedState; l !== null;) {
                        var d = l.queue;
                        d !== null && (d.pending = null), l = l.next
                    }
                    eo = !1
                }
                if (rr = 0, We = Be = De = null, _i = !1, Ii = 0, ql.current = null, s === null || s.return === null) {
                    Ue = 1, Ui = r, ze = null;
                    break
                }
                e: {
                    var h = t,
                        y = s.return,
                        C = s,
                        k = r;
                    if (r = qe, C.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
                        var L = k,
                            B = C,
                            U = B.tag;
                        if ((B.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
                            var z = B.alternate;
                            z ? (B.updateQueue = z.updateQueue, B.memoizedState = z.memoizedState, B.lanes = z.lanes) : (B.updateQueue = null, B.memoizedState = null)
                        }
                        var Y = ph(y);
                        if (Y !== null) {
                            Y.flags &= -257, mh(Y, y, C, h, r), Y.mode & 1 && hh(h, L, r), r = Y, k = L;
                            var J = r.updateQueue;
                            if (J === null) {
                                var ee = new Set;
                                ee.add(k), r.updateQueue = ee
                            } else J.add(k);
                            break e
                        } else {
                            if ((r & 1) === 0) {
                                hh(h, L, r), iu();
                                break e
                            }
                            k = Error(i(426))
                        }
                    } else if (je && C.mode & 1) {
                        var Ve = ph(y);
                        if (Ve !== null) {
                            (Ve.flags & 65536) === 0 && (Ve.flags |= 256), mh(Ve, y, C, h, r), ml(zr(k, C));
                            break e
                        }
                    }
                    h = k = zr(k, C),
                    Ue !== 4 && (Ue = 2),
                    $i === null ? $i = [h] : $i.push(h),
                    h = y;do {
                        switch (h.tag) {
                            case 3:
                                h.flags |= 65536, r &= -r, h.lanes |= r;
                                var j = dh(h, k, r);
                                Vf(h, j);
                                break e;
                            case 1:
                                C = k;
                                var R = h.type,
                                    D = h.stateNode;
                                if ((h.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (jn === null || !jn.has(D)))) {
                                    h.flags |= 65536, r &= -r, h.lanes |= r;
                                    var W = fh(h, C, r);
                                    Vf(h, W);
                                    break e
                                }
                        }
                        h = h.return
                    } while (h !== null)
                }
                Kh(s)
            } catch (te) {
                r = te, ze === s && s !== null && (ze = s = s.return);
                continue
            }
            break
        } while (!0)
    }

    function Wh() {
        var t = uo.current;
        return uo.current = ro, t === null ? ro : t
    }

    function iu() {
        (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), He === null || (ir & 268435455) === 0 && (co & 268435455) === 0 || On(He, qe)
    }

    function yo(t, r) {
        var s = we;
        we |= 2;
        var l = Wh();
        (He !== t || qe !== r) && (cn = null, or(t, r));
        do try {
            Yx();
            break
        } catch (d) {
            $h(t, d)
        }
        while (!0);
        if (yl(), we = s, uo.current = l, ze !== null) throw Error(i(261));
        return He = null, qe = 0, Ue
    }

    function Yx() {
        for (; ze !== null;) Hh(ze)
    }

    function Xx() {
        for (; ze !== null && !P0();) Hh(ze)
    }

    function Hh(t) {
        var r = qh(t.alternate, t, wt);
        t.memoizedProps = t.pendingProps, r === null ? Kh(t) : ze = r, ql.current = null
    }

    function Kh(t) {
        var r = t;
        do {
            var s = r.alternate;
            if (t = r.return, (r.flags & 32768) === 0) {
                if (s = $x(s, r, wt), s !== null) {
                    ze = s;
                    return
                }
            } else {
                if (s = Wx(s, r), s !== null) {
                    s.flags &= 32767, ze = s;
                    return
                }
                if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
                else {
                    Ue = 6, ze = null;
                    return
                }
            }
            if (r = r.sibling, r !== null) {
                ze = r;
                return
            }
            ze = r = t
        } while (r !== null);
        Ue === 0 && (Ue = 5)
    }

    function ar(t, r, s) {
        var l = Ee,
            d = Rt.transition;
        try {
            Rt.transition = null, Ee = 1, Zx(t, r, s, l)
        } finally {
            Rt.transition = d, Ee = l
        }
        return null
    }

    function Zx(t, r, s, l) {
        do Wr(); while (Mn !== null);
        if ((we & 6) !== 0) throw Error(i(327));
        s = t.finishedWork;
        var d = t.finishedLanes;
        if (s === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(i(177));
        t.callbackNode = null, t.callbackPriority = 0;
        var h = s.lanes | s.childLanes;
        if (M0(t, h), t === He && (ze = He = null, qe = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || ho || (ho = !0, Yh(ws, function() {
                return Wr(), null
            })), h = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || h) {
            h = Rt.transition, Rt.transition = null;
            var y = Ee;
            Ee = 1;
            var C = we;
            we |= 4, ql.current = null, Kx(t, s), _h(s, t), vx(il), ks = !!rl, il = rl = null, t.current = s, Gx(s), C0(), we = C, Ee = y, Rt.transition = h
        } else t.current = s;
        if (ho && (ho = !1, Mn = t, po = d), h = t.pendingLanes, h === 0 && (jn = null), b0(s.stateNode), ht(t, Ie()), r !== null)
            for (l = t.onRecoverableError, s = 0; s < r.length; s++) d = r[s], l(d.value, {
                componentStack: d.stack,
                digest: d.digest
            });
        if (fo) throw fo = !1, t = Zl, Zl = null, t;
        return (po & 1) !== 0 && t.tag !== 0 && Wr(), h = t.pendingLanes, (h & 1) !== 0 ? t === Jl ? Wi++ : (Wi = 0, Jl = t) : Wi = 0, kn(), null
    }

    function Wr() {
        if (Mn !== null) {
            var t = Dd(po),
                r = Rt.transition,
                s = Ee;
            try {
                if (Rt.transition = null, Ee = 16 > t ? 16 : t, Mn === null) var l = !1;
                else {
                    if (t = Mn, Mn = null, po = 0, (we & 6) !== 0) throw Error(i(331));
                    var d = we;
                    for (we |= 4, Z = t.current; Z !== null;) {
                        var h = Z,
                            y = h.child;
                        if ((Z.flags & 16) !== 0) {
                            var C = h.deletions;
                            if (C !== null) {
                                for (var k = 0; k < C.length; k++) {
                                    var L = C[k];
                                    for (Z = L; Z !== null;) {
                                        var B = Z;
                                        switch (B.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Bi(8, B, h)
                                        }
                                        var U = B.child;
                                        if (U !== null) U.return = B, Z = U;
                                        else
                                            for (; Z !== null;) {
                                                B = Z;
                                                var z = B.sibling,
                                                    Y = B.return;
                                                if (jh(B), B === L) {
                                                    Z = null;
                                                    break
                                                }
                                                if (z !== null) {
                                                    z.return = Y, Z = z;
                                                    break
                                                }
                                                Z = Y
                                            }
                                    }
                                }
                                var J = h.alternate;
                                if (J !== null) {
                                    var ee = J.child;
                                    if (ee !== null) {
                                        J.child = null;
                                        do {
                                            var Ve = ee.sibling;
                                            ee.sibling = null, ee = Ve
                                        } while (ee !== null)
                                    }
                                }
                                Z = h
                            }
                        }
                        if ((h.subtreeFlags & 2064) !== 0 && y !== null) y.return = h, Z = y;
                        else e: for (; Z !== null;) {
                            if (h = Z, (h.flags & 2048) !== 0) switch (h.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Bi(9, h, h.return)
                            }
                            var j = h.sibling;
                            if (j !== null) {
                                j.return = h.return, Z = j;
                                break e
                            }
                            Z = h.return
                        }
                    }
                    var R = t.current;
                    for (Z = R; Z !== null;) {
                        y = Z;
                        var D = y.child;
                        if ((y.subtreeFlags & 2064) !== 0 && D !== null) D.return = y, Z = D;
                        else e: for (y = R; Z !== null;) {
                            if (C = Z, (C.flags & 2048) !== 0) try {
                                switch (C.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        lo(9, C)
                                }
                            } catch (te) {
                                Le(C, C.return, te)
                            }
                            if (C === y) {
                                Z = null;
                                break e
                            }
                            var W = C.sibling;
                            if (W !== null) {
                                W.return = C.return, Z = W;
                                break e
                            }
                            Z = C.return
                        }
                    }
                    if (we = d, kn(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
                        Wt.onPostCommitFiberRoot(Ss, t)
                    } catch {}
                    l = !0
                }
                return l
            } finally {
                Ee = s, Rt.transition = r
            }
        }
        return !1
    }

    function Gh(t, r, s) {
        r = zr(s, r), r = dh(t, r, 1), t = An(t, r, 1), r = at(), t !== null && (pi(t, 1, r), ht(t, r))
    }

    function Le(t, r, s) {
        if (t.tag === 3) Gh(t, t, s);
        else
            for (; r !== null;) {
                if (r.tag === 3) {
                    Gh(r, t, s);
                    break
                } else if (r.tag === 1) {
                    var l = r.stateNode;
                    if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (jn === null || !jn.has(l))) {
                        t = zr(s, t), t = fh(r, t, 1), r = An(r, t, 1), t = at(), r !== null && (pi(r, 1, t), ht(r, t));
                        break
                    }
                }
                r = r.return
            }
    }

    function Jx(t, r, s) {
        var l = t.pingCache;
        l !== null && l.delete(r), r = at(), t.pingedLanes |= t.suspendedLanes & s, He === t && (qe & s) === s && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > Ie() - Xl ? or(t, 0) : Yl |= s), ht(t, r)
    }

    function Qh(t, r) {
        r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = Cs, Cs <<= 1, (Cs & 130023424) === 0 && (Cs = 4194304)));
        var s = at();
        t = an(t, r), t !== null && (pi(t, r, s), ht(t, s))
    }

    function ew(t) {
        var r = t.memoizedState,
            s = 0;
        r !== null && (s = r.retryLane), Qh(t, s)
    }

    function tw(t, r) {
        var s = 0;
        switch (t.tag) {
            case 13:
                var l = t.stateNode,
                    d = t.memoizedState;
                d !== null && (s = d.retryLane);
                break;
            case 19:
                l = t.stateNode;
                break;
            default:
                throw Error(i(314))
        }
        l !== null && l.delete(r), Qh(t, s)
    }
    var qh;
    qh = function(t, r, s) {
        if (t !== null)
            if (t.memoizedProps !== r.pendingProps || ut.current) dt = !0;
            else {
                if ((t.lanes & s) === 0 && (r.flags & 128) === 0) return dt = !1, Ux(t, r, s);
                dt = (t.flags & 131072) !== 0
            }
        else dt = !1, je && (r.flags & 1048576) !== 0 && Rf(r, Hs, r.index);
        switch (r.lanes = 0, r.tag) {
            case 2:
                var l = r.type;
                oo(t, r), t = r.pendingProps;
                var d = Mr(r, Ze.current);
                Vr(r, s), d = Rl(null, r, l, t, d, s);
                var h = Al();
                return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ct(l) ? (h = !0, Us(r)) : h = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Sl(r), d.updater = io, r.stateNode = d, d._reactInternals = r, Ll(r, l, t, s), r = Fl(null, r, l, !0, h, s)) : (r.tag = 0, je && h && dl(r), ot(null, r, d, s), r = r.child), r;
            case 16:
                l = r.elementType;
                e: {
                    switch (oo(t, r), t = r.pendingProps, d = l._init, l = d(l._payload), r.type = l, d = r.tag = rw(l), t = Lt(l, t), d) {
                        case 0:
                            r = Vl(null, r, l, t, s);
                            break e;
                        case 1:
                            r = Sh(null, r, l, t, s);
                            break e;
                        case 11:
                            r = gh(null, r, l, t, s);
                            break e;
                        case 14:
                            r = yh(null, r, l, Lt(l.type, t), s);
                            break e
                    }
                    throw Error(i(306, l, ""))
                }
                return r;
            case 0:
                return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Lt(l, d), Vl(t, r, l, d, s);
            case 1:
                return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Lt(l, d), Sh(t, r, l, d, s);
            case 3:
                e: {
                    if (Ph(r), t === null) throw Error(i(387));l = r.pendingProps,
                    h = r.memoizedState,
                    d = h.element,
                    If(t, r),
                    Xs(r, l, null, s);
                    var y = r.memoizedState;
                    if (l = y.element, h.isDehydrated)
                        if (h = {
                                element: l,
                                isDehydrated: !1,
                                cache: y.cache,
                                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                                transitions: y.transitions
                            }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
                            d = zr(Error(i(423)), r), r = Ch(t, r, l, s, d);
                            break e
                        } else if (l !== d) {
                        d = zr(Error(i(424)), r), r = Ch(t, r, l, s, d);
                        break e
                    } else
                        for (xt = En(r.stateNode.containerInfo.firstChild), vt = r, je = !0, Ot = null, s = Lf(r, null, l, s), r.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                    else {
                        if (Lr(), l === d) {
                            r = un(t, r, s);
                            break e
                        }
                        ot(t, r, l, s)
                    }
                    r = r.child
                }
                return r;
            case 5:
                return zf(r), t === null && pl(r), l = r.type, d = r.pendingProps, h = t !== null ? t.memoizedProps : null, y = d.children, sl(l, d) ? y = null : h !== null && sl(l, h) && (r.flags |= 32), wh(t, r), ot(t, r, y, s), r.child;
            case 6:
                return t === null && pl(r), null;
            case 13:
                return Eh(t, r, s);
            case 4:
                return Pl(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = _r(r, null, l, s) : ot(t, r, l, s), r.child;
            case 11:
                return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Lt(l, d), gh(t, r, l, d, s);
            case 7:
                return ot(t, r, r.pendingProps, s), r.child;
            case 8:
                return ot(t, r, r.pendingProps.children, s), r.child;
            case 12:
                return ot(t, r, r.pendingProps.children, s), r.child;
            case 10:
                e: {
                    if (l = r.type._context, d = r.pendingProps, h = r.memoizedProps, y = d.value, ke(Qs, l._currentValue), l._currentValue = y, h !== null)
                        if (Dt(h.value, y)) {
                            if (h.children === d.children && !ut.current) {
                                r = un(t, r, s);
                                break e
                            }
                        } else
                            for (h = r.child, h !== null && (h.return = r); h !== null;) {
                                var C = h.dependencies;
                                if (C !== null) {
                                    y = h.child;
                                    for (var k = C.firstContext; k !== null;) {
                                        if (k.context === l) {
                                            if (h.tag === 1) {
                                                k = ln(-1, s & -s), k.tag = 2;
                                                var L = h.updateQueue;
                                                if (L !== null) {
                                                    L = L.shared;
                                                    var B = L.pending;
                                                    B === null ? k.next = k : (k.next = B.next, B.next = k), L.pending = k
                                                }
                                            }
                                            h.lanes |= s, k = h.alternate, k !== null && (k.lanes |= s), xl(h.return, s, r), C.lanes |= s;
                                            break
                                        }
                                        k = k.next
                                    }
                                } else if (h.tag === 10) y = h.type === r.type ? null : h.child;
                                else if (h.tag === 18) {
                                    if (y = h.return, y === null) throw Error(i(341));
                                    y.lanes |= s, C = y.alternate, C !== null && (C.lanes |= s), xl(y, s, r), y = h.sibling
                                } else y = h.child;
                                if (y !== null) y.return = h;
                                else
                                    for (y = h; y !== null;) {
                                        if (y === r) {
                                            y = null;
                                            break
                                        }
                                        if (h = y.sibling, h !== null) {
                                            h.return = y.return, y = h;
                                            break
                                        }
                                        y = y.return
                                    }
                                h = y
                            }
                    ot(t, r, d.children, s),
                    r = r.child
                }
                return r;
            case 9:
                return d = r.type, l = r.pendingProps.children, Vr(r, s), d = bt(d), l = l(d), r.flags |= 1, ot(t, r, l, s), r.child;
            case 14:
                return l = r.type, d = Lt(l, r.pendingProps), d = Lt(l.type, d), yh(t, r, l, d, s);
            case 15:
                return vh(t, r, r.type, r.pendingProps, s);
            case 17:
                return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Lt(l, d), oo(t, r), r.tag = 1, ct(l) ? (t = !0, Us(r)) : t = !1, Vr(r, s), uh(r, l, d), Ll(r, l, d, s), Fl(null, r, l, !0, t, s);
            case 19:
                return bh(t, r, s);
            case 22:
                return xh(t, r, s)
        }
        throw Error(i(156, r.tag))
    };

    function Yh(t, r) {
        return Rd(t, r)
    }

    function nw(t, r, s, l) {
        this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function At(t, r, s, l) {
        return new nw(t, r, s, l)
    }

    function su(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function rw(t) {
        if (typeof t == "function") return su(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof, t === ne) return 11;
            if (t === ge) return 14
        }
        return 2
    }

    function Ln(t, r) {
        var s = t.alternate;
        return s === null ? (s = At(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s
    }

    function vo(t, r, s, l, d, h) {
        var y = 2;
        if (l = t, typeof t == "function") su(t) && (y = 1);
        else if (typeof t == "string") y = 5;
        else e: switch (t) {
            case H:
                return lr(s.children, d, h, r);
            case G:
                y = 8, d |= 8;
                break;
            case oe:
                return t = At(12, s, r, d | 2), t.elementType = oe, t.lanes = h, t;
            case he:
                return t = At(13, s, r, d), t.elementType = he, t.lanes = h, t;
            case q:
                return t = At(19, s, r, d), t.elementType = q, t.lanes = h, t;
            case X:
                return xo(s, d, h, r);
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case re:
                        y = 10;
                        break e;
                    case de:
                        y = 9;
                        break e;
                    case ne:
                        y = 11;
                        break e;
                    case ge:
                        y = 14;
                        break e;
                    case le:
                        y = 16, l = null;
                        break e
                }
                throw Error(i(130, t == null ? t : typeof t, ""))
        }
        return r = At(y, s, r, d), r.elementType = t, r.type = l, r.lanes = h, r
    }

    function lr(t, r, s, l) {
        return t = At(7, t, l, r), t.lanes = s, t
    }

    function xo(t, r, s, l) {
        return t = At(22, t, l, r), t.elementType = X, t.lanes = s, t.stateNode = {
            isHidden: !1
        }, t
    }

    function ou(t, r, s) {
        return t = At(6, t, null, r), t.lanes = s, t
    }

    function au(t, r, s) {
        return r = At(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, r
    }

    function iw(t, r, s, l, d) {
        this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oa(0), this.expirationTimes = Oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oa(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null
    }

    function lu(t, r, s, l, d, h, y, C, k) {
        return t = new iw(t, r, s, C, k), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = At(3, null, null, r), t.current = h, h.stateNode = t, h.memoizedState = {
            element: l,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Sl(h), t
    }

    function sw(t, r, s) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: $,
            key: l == null ? null : "" + l,
            children: t,
            containerInfo: r,
            implementation: s
        }
    }

    function Xh(t) {
        if (!t) return bn;
        t = t._reactInternals;
        e: {
            if (Yn(t) !== t || t.tag !== 1) throw Error(i(170));
            var r = t;do {
                switch (r.tag) {
                    case 3:
                        r = r.stateNode.context;
                        break e;
                    case 1:
                        if (ct(r.type)) {
                            r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                r = r.return
            } while (r !== null);
            throw Error(i(171))
        }
        if (t.tag === 1) {
            var s = t.type;
            if (ct(s)) return Tf(t, s, r)
        }
        return r
    }

    function Zh(t, r, s, l, d, h, y, C, k) {
        return t = lu(s, l, !0, t, d, h, y, C, k), t.context = Xh(null), s = t.current, l = at(), d = Dn(s), h = ln(l, d), h.callback = r ?? null, An(s, h, d), t.current.lanes = d, pi(t, d, l), ht(t, l), t
    }

    function wo(t, r, s, l) {
        var d = r.current,
            h = at(),
            y = Dn(d);
        return s = Xh(s), r.context === null ? r.context = s : r.pendingContext = s, r = ln(h, y), r.payload = {
            element: t
        }, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = An(d, r, y), t !== null && (Vt(t, d, y, h), Ys(t, d, y)), y
    }

    function So(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
            case 5:
                return t.child.stateNode;
            default:
                return t.child.stateNode
        }
    }

    function Jh(t, r) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < r ? s : r
        }
    }

    function uu(t, r) {
        Jh(t, r), (t = t.alternate) && Jh(t, r)
    }

    function ow() {
        return null
    }
    var ep = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    };

    function cu(t) {
        this._internalRoot = t
    }
    Po.prototype.render = cu.prototype.render = function(t) {
        var r = this._internalRoot;
        if (r === null) throw Error(i(409));
        wo(t, r, null, null)
    }, Po.prototype.unmount = cu.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var r = t.containerInfo;
            sr(function() {
                wo(null, t, null, null)
            }), r[nn] = null
        }
    };

    function Po(t) {
        this._internalRoot = t
    }
    Po.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var r = _d();
            t = {
                blockedOn: null,
                target: t,
                priority: r
            };
            for (var s = 0; s < Sn.length && r !== 0 && r < Sn[s].priority; s++);
            Sn.splice(s, 0, t), s === 0 && Fd(t)
        }
    };

    function du(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function Co(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }

    function tp() {}

    function aw(t, r, s, l, d) {
        if (d) {
            if (typeof l == "function") {
                var h = l;
                l = function() {
                    var L = So(y);
                    h.call(L)
                }
            }
            var y = Zh(r, l, t, 0, null, !1, !1, "", tp);
            return t._reactRootContainer = y, t[nn] = y.current, Ri(t.nodeType === 8 ? t.parentNode : t), sr(), y
        }
        for (; d = t.lastChild;) t.removeChild(d);
        if (typeof l == "function") {
            var C = l;
            l = function() {
                var L = So(k);
                C.call(L)
            }
        }
        var k = lu(t, 0, !1, null, null, !1, !1, "", tp);
        return t._reactRootContainer = k, t[nn] = k.current, Ri(t.nodeType === 8 ? t.parentNode : t), sr(function() {
            wo(r, k, s, l)
        }), k
    }

    function Eo(t, r, s, l, d) {
        var h = s._reactRootContainer;
        if (h) {
            var y = h;
            if (typeof d == "function") {
                var C = d;
                d = function() {
                    var k = So(y);
                    C.call(k)
                }
            }
            wo(r, y, t, d)
        } else y = aw(s, r, t, d, l);
        return So(y)
    }
    Od = function(t) {
        switch (t.tag) {
            case 3:
                var r = t.stateNode;
                if (r.current.memoizedState.isDehydrated) {
                    var s = hi(r.pendingLanes);
                    s !== 0 && (La(r, s | 1), ht(r, Ie()), (we & 6) === 0 && ($r = Ie() + 500, kn()))
                }
                break;
            case 13:
                sr(function() {
                    var l = an(t, 1);
                    if (l !== null) {
                        var d = at();
                        Vt(l, t, 1, d)
                    }
                }), uu(t, 1)
        }
    }, _a = function(t) {
        if (t.tag === 13) {
            var r = an(t, 134217728);
            if (r !== null) {
                var s = at();
                Vt(r, t, 134217728, s)
            }
            uu(t, 134217728)
        }
    }, Ld = function(t) {
        if (t.tag === 13) {
            var r = Dn(t),
                s = an(t, r);
            if (s !== null) {
                var l = at();
                Vt(s, t, r, l)
            }
            uu(t, r)
        }
    }, _d = function() {
        return Ee
    }, Id = function(t, r) {
        var s = Ee;
        try {
            return Ee = t, r()
        } finally {
            Ee = s
        }
    }, Ra = function(t, r, s) {
        switch (r) {
            case "input":
                if (wa(t, s), r = s.name, s.type === "radio" && r != null) {
                    for (s = t; s.parentNode;) s = s.parentNode;
                    for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
                        var l = s[r];
                        if (l !== t && l.form === t.form) {
                            var d = zs(l);
                            if (!d) throw Error(i(90));
                            gs(l), wa(l, d)
                        }
                    }
                }
                break;
            case "textarea":
                fd(t, s);
                break;
            case "select":
                r = s.value, r != null && wr(t, !!s.multiple, r, !1)
        }
    }, Sd = nu, Pd = sr;
    var lw = {
            usingClientEntryPoint: !1,
            Events: [ji, Nr, zs, xd, wd, nu]
        },
        Hi = {
            findFiberByHostInstance: Xn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        uw = {
            bundleType: Hi.bundleType,
            version: Hi.version,
            rendererPackageName: Hi.rendererPackageName,
            rendererConfig: Hi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: I.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(t) {
                return t = bd(t), t === null ? null : t.stateNode
            },
            findFiberByHostInstance: Hi.findFiberByHostInstance || ow,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!To.isDisabled && To.supportsFiber) try {
            Ss = To.inject(uw), Wt = To
        } catch {}
    }
    return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lw, pt.createPortal = function(t, r) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!du(r)) throw Error(i(200));
        return sw(t, r, null, s)
    }, pt.createRoot = function(t, r) {
        if (!du(t)) throw Error(i(299));
        var s = !1,
            l = "",
            d = ep;
        return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = lu(t, 1, !1, null, null, s, !1, l, d), t[nn] = r.current, Ri(t.nodeType === 8 ? t.parentNode : t), new cu(r)
    }, pt.findDOMNode = function(t) {
        if (t == null) return null;
        if (t.nodeType === 1) return t;
        var r = t._reactInternals;
        if (r === void 0) throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
        return t = bd(r), t = t === null ? null : t.stateNode, t
    }, pt.flushSync = function(t) {
        return sr(t)
    }, pt.hydrate = function(t, r, s) {
        if (!Co(r)) throw Error(i(200));
        return Eo(null, t, r, !0, s)
    }, pt.hydrateRoot = function(t, r, s) {
        if (!du(t)) throw Error(i(405));
        var l = s != null && s.hydratedSources || null,
            d = !1,
            h = "",
            y = ep;
        if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (y = s.onRecoverableError)), r = Zh(r, null, t, 1, s ?? null, d, !1, h, y), t[nn] = r.current, Ri(t), l)
            for (t = 0; t < l.length; t++) s = l[t], d = s._getVersion, d = d(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, d] : r.mutableSourceEagerHydrationData.push(s, d);
        return new Po(r)
    }, pt.render = function(t, r, s) {
        if (!Co(r)) throw Error(i(200));
        return Eo(null, t, r, !1, s)
    }, pt.unmountComponentAtNode = function(t) {
        if (!Co(t)) throw Error(i(40));
        return t._reactRootContainer ? (sr(function() {
            Eo(null, null, t, !1, function() {
                t._reactRootContainer = null, t[nn] = null
            })
        }), !0) : !1
    }, pt.unstable_batchedUpdates = nu, pt.unstable_renderSubtreeIntoContainer = function(t, r, s, l) {
        if (!Co(s)) throw Error(i(200));
        if (t == null || t._reactInternals === void 0) throw Error(i(38));
        return Eo(t, r, s, !1, l)
    }, pt.version = "18.3.1-next-f1338f8080-20240426", pt
}
var up;

function tg() {
    if (up) return pu.exports;
    up = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (n) {
            console.error(n)
        }
    }
    return e(), pu.exports = yw(), pu.exports
}
var cp;

function vw() {
    if (cp) return bo;
    cp = 1;
    var e = tg();
    return bo.createRoot = e.createRoot, bo.hydrateRoot = e.hydrateRoot, bo
}
var xw = vw();

function ww(e, n) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var i, o, a, u, c = [],
        f = "",
        p = e.split("/");
    for (p[0] || p.shift(); a = p.shift();) i = a[0], i === "*" ? (c.push(i), f += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : i === ":" ? (o = a.indexOf("?", 1), u = a.indexOf(".", 1), c.push(a.substring(1, ~o ? o : ~u ? u : a.length)), f += ~o && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)", ~u && (f += (~o ? "?" : "") + "\\" + a.substring(u))) : f += "/" + a;
    return {
        keys: c,
        pattern: new RegExp("^" + f + (n ? "(?=$|/)" : "/?$"), "i")
    }
}
var P = ea();
const Fn = eg(P),
    Sw = dw({
        __proto__: null,
        default: Fn
    }, [P]);
var yu = {
        exports: {}
    },
    vu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;

function Pw() {
    if (dp) return vu;
    dp = 1;
    var e = ea();

    function n(v, w) {
        return v === w && (v !== 0 || 1 / v === 1 / w) || v !== v && w !== w
    }
    var i = typeof Object.is == "function" ? Object.is : n,
        o = e.useState,
        a = e.useEffect,
        u = e.useLayoutEffect,
        c = e.useDebugValue;

    function f(v, w) {
        var E = w(),
            b = o({
                inst: {
                    value: E,
                    getSnapshot: w
                }
            }),
            S = b[0].inst,
            T = b[1];
        return u(function() {
            S.value = E, S.getSnapshot = w, p(S) && T({
                inst: S
            })
        }, [v, E, w]), a(function() {
            return p(S) && T({
                inst: S
            }), v(function() {
                p(S) && T({
                    inst: S
                })
            })
        }, [v]), c(E), E
    }

    function p(v) {
        var w = v.getSnapshot;
        v = v.value;
        try {
            var E = w();
            return !i(v, E)
        } catch {
            return !0
        }
    }

    function m(v, w) {
        return w()
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : f;
    return vu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, vu
}
var fp;

function Cw() {
    return fp || (fp = 1, yu.exports = Pw()), yu.exports
}
var Ew = Cw();
const Tw = Sw.useInsertionEffect,
    bw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    kw = bw ? P.useLayoutEffect : P.useEffect,
    Rw = Tw || kw,
    ng = e => {
        const n = P.useRef([e, (...i) => n[0](...i)]).current;
        return Rw(() => {
            n[0] = e
        }), n[1]
    },
    Aw = "popstate",
    dc = "pushState",
    fc = "replaceState",
    Nw = "hashchange",
    hp = [Aw, dc, fc, Nw],
    jw = e => {
        for (const n of hp) addEventListener(n, e);
        return () => {
            for (const n of hp) removeEventListener(n, e)
        }
    },
    rg = (e, n) => Ew.useSyncExternalStore(jw, e, n),
    Mw = () => location.search,
    Dw = ({
        ssrSearch: e = ""
    } = {}) => rg(Mw, () => e),
    pp = () => location.pathname,
    Ow = ({
        ssrPath: e
    } = {}) => rg(pp, e ? () => e : pp),
    Lw = (e, {
        replace: n = !1,
        state: i = null
    } = {}) => history[n ? fc : dc](i, "", e),
    _w = (e = {}) => [Ow(e), Lw],
    mp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[mp] > "u") {
    for (const e of [dc, fc]) {
        const n = history[e];
        history[e] = function() {
            const i = n.apply(this, arguments),
                o = new Event(e);
            return o.arguments = arguments, dispatchEvent(o), i
        }
    }
    Object.defineProperty(window, mp, {
        value: !0
    })
}
const Iw = (e, n) => n.toLowerCase().indexOf(e.toLowerCase()) ? "~" + n : n.slice(e.length) || "/",
    ig = (e = "") => e === "/" ? "" : e,
    Vw = (e, n) => e[0] === "~" ? e.slice(1) : ig(n) + e,
    Fw = (e = "", n) => Iw(gp(ig(e)), gp(n)),
    gp = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    sg = {
        hook: _w,
        searchHook: Dw,
        parser: ww,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        hrefs: e => e
    },
    og = P.createContext(sg),
    ta = () => P.useContext(og),
    ag = {},
    lg = P.createContext(ag),
    zw = () => P.useContext(lg),
    hc = e => {
        const [n, i] = e.hook(e);
        return [Fw(e.base, n), ng((o, a) => i(Vw(o, e.base), a))]
    },
    ug = (e, n, i, o) => {
        const {
            pattern: a,
            keys: u
        } = n instanceof RegExp ? {
            keys: !1,
            pattern: n
        } : e(n || "*", o), c = a.exec(i) || [], [f, ...p] = c;
        return f !== void 0 ? [!0, (() => {
            const m = u !== !1 ? Object.fromEntries(u.map((v, w) => [v, p[w]])) : c.groups;
            let g = {
                ...p
            };
            return m && Object.assign(g, m), g
        })(), ...o ? [f] : []] : [!1, null]
    },
    Bw = ({
        children: e,
        ...n
    }) => {
        const i = ta(),
            o = n.hook ? sg : i;
        let a = o;
        const [u, c] = n.ssrPath?.split("?") ?? [];
        c && (n.ssrSearch = c, n.ssrPath = u), n.hrefs = n.hrefs ?? n.hook?.hrefs;
        let f = P.useRef({}),
            p = f.current,
            m = p;
        for (let g in o) {
            const v = g === "base" ? o[g] + (n[g] || "") : n[g] || o[g];
            p === m && v !== m[g] && (f.current = m = {
                ...m
            }), m[g] = v, v !== o[g] && (a = m)
        }
        return P.createElement(og.Provider, {
            value: a,
            children: e
        })
    },
    yp = ({
        children: e,
        component: n
    }, i) => n ? P.createElement(n, {
        params: i
    }) : typeof e == "function" ? e(i) : e,
    Uw = e => {
        let n = P.useRef(ag),
            i = n.current;
        for (const o in e) e[o] !== i[o] && (i = e);
        return Object.keys(e).length === 0 && (i = e), n.current = i
    },
    vp = ({
        path: e,
        nest: n,
        match: i,
        ...o
    }) => {
        const a = ta(),
            [u] = hc(a),
            [c, f, p] = i ?? ug(a.parser, e, u, n),
            m = Uw({
                ...zw(),
                ...f
            });
        if (!c) return null;
        const g = p ? P.createElement(Bw, {
            base: p
        }, yp(o, m)) : yp(o, m);
        return P.createElement(lg.Provider, {
            value: m,
            children: g
        })
    };
P.forwardRef((e, n) => {
    const i = ta(),
        [o, a] = hc(i),
        {
            to: u = "",
            href: c = u,
            onClick: f,
            asChild: p,
            children: m,
            className: g,
            replace: v,
            state: w,
            ...E
        } = e,
        b = ng(T => {
            T.ctrlKey || T.metaKey || T.altKey || T.shiftKey || T.button !== 0 || (f?.(T), T.defaultPrevented || (T.preventDefault(), a(c, e)))
        }),
        S = i.hrefs(c[0] === "~" ? c.slice(1) : i.base + c, i);
    return p && P.isValidElement(m) ? P.cloneElement(m, {
        onClick: b,
        href: S
    }) : P.createElement("a", {
        ...E,
        onClick: b,
        href: S,
        className: g?.call ? g(o === c) : g,
        children: m,
        ref: n
    })
});
const cg = e => Array.isArray(e) ? e.flatMap(n => cg(n && n.type === P.Fragment ? n.props.children : n)) : [e],
    $w = ({
        children: e,
        location: n
    }) => {
        const i = ta(),
            [o] = hc(i);
        for (const a of cg(e)) {
            let u = 0;
            if (P.isValidElement(a) && (u = ug(i.parser, a.props.path, n || o, a.props.nest))[0]) return P.cloneElement(a, {
                match: u
            })
        }
        return null
    };
var cs = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    na = typeof window > "u" || "Deno" in globalThis;

function zt() {}

function Ww(e, n) {
    return typeof e == "function" ? e(n) : e
}

function Hw(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Kw(e, n) {
    return Math.max(e + (n || 0) - Date.now(), 0)
}

function xp(e, n) {
    return typeof e == "function" ? e(n) : e
}

function Gw(e, n) {
    return typeof e == "function" ? e(n) : e
}

function wp(e, n) {
    const {
        type: i = "all",
        exact: o,
        fetchStatus: a,
        predicate: u,
        queryKey: c,
        stale: f
    } = e;
    if (c) {
        if (o) {
            if (n.queryHash !== pc(c, n.options)) return !1
        } else if (!rs(n.queryKey, c)) return !1
    }
    if (i !== "all") {
        const p = n.isActive();
        if (i === "active" && !p || i === "inactive" && p) return !1
    }
    return !(typeof f == "boolean" && n.isStale() !== f || a && a !== n.state.fetchStatus || u && !u(n))
}

function Sp(e, n) {
    const {
        exact: i,
        status: o,
        predicate: a,
        mutationKey: u
    } = e;
    if (u) {
        if (!n.options.mutationKey) return !1;
        if (i) {
            if (pr(n.options.mutationKey) !== pr(u)) return !1
        } else if (!rs(n.options.mutationKey, u)) return !1
    }
    return !(o && n.state.status !== o || a && !a(n))
}

function pc(e, n) {
    return (n?.queryKeyHashFn || pr)(e)
}

function pr(e) {
    return JSON.stringify(e, (n, i) => Fu(i) ? Object.keys(i).sort().reduce((o, a) => (o[a] = i[a], o), {}) : i)
}

function rs(e, n) {
    return e === n ? !0 : typeof e != typeof n ? !1 : e && n && typeof e == "object" && typeof n == "object" ? !Object.keys(n).some(i => !rs(e[i], n[i])) : !1
}

function dg(e, n) {
    if (e === n) return e;
    const i = Pp(e) && Pp(n);
    if (i || Fu(e) && Fu(n)) {
        const o = i ? e : Object.keys(e),
            a = o.length,
            u = i ? n : Object.keys(n),
            c = u.length,
            f = i ? [] : {};
        let p = 0;
        for (let m = 0; m < c; m++) {
            const g = i ? m : u[m];
            (!i && o.includes(g) || i) && e[g] === void 0 && n[g] === void 0 ? (f[g] = void 0, p++) : (f[g] = dg(e[g], n[g]), f[g] === e[g] && e[g] !== void 0 && p++)
        }
        return a === c && p === a ? e : f
    }
    return n
}

function Qw(e, n) {
    if (!n || Object.keys(e).length !== Object.keys(n).length) return !1;
    for (const i in e)
        if (e[i] !== n[i]) return !1;
    return !0
}

function Pp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Fu(e) {
    if (!Cp(e)) return !1;
    const n = e.constructor;
    if (n === void 0) return !0;
    const i = n.prototype;
    return !(!Cp(i) || !i.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Cp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function qw(e) {
    return new Promise(n => {
        setTimeout(n, e)
    })
}

function Yw(e, n, i) {
    return typeof i.structuralSharing == "function" ? i.structuralSharing(e, n) : i.structuralSharing !== !1 ? dg(e, n) : n
}

function Xw(e, n, i = 0) {
    const o = [...e, n];
    return i && o.length > i ? o.slice(1) : o
}

function Zw(e, n, i = 0) {
    const o = [n, ...e];
    return i && o.length > i ? o.slice(0, -1) : o
}
var mc = Symbol();

function fg(e, n) {
    return !e.queryFn && n?.initialPromise ? () => n.initialPromise : !e.queryFn || e.queryFn === mc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Jw = class extends cs {
        #e;
        #t;
        #n;
        constructor() {
            super(), this.#n = e => {
                if (!na && window.addEventListener) {
                    const n = () => e();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#t?.(), this.#t = e(n => {
                typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(n => {
                n(e)
            })
        }
        isFocused() {
            return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
        }
    },
    hg = new Jw,
    eS = class extends cs {
        #e = !0;
        #t;
        #n;
        constructor() {
            super(), this.#n = e => {
                if (!na && window.addEventListener) {
                    const n = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", i)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return this.#e
        }
    },
    Bo = new eS;

function tS() {
    let e, n;
    const i = new Promise((a, u) => {
        e = a, n = u
    });
    i.status = "pending", i.catch(() => {});

    function o(a) {
        Object.assign(i, a), delete i.resolve, delete i.reject
    }
    return i.resolve = a => {
        o({
            status: "fulfilled",
            value: a
        }), e(a)
    }, i.reject = a => {
        o({
            status: "rejected",
            reason: a
        }), n(a)
    }, i
}

function nS(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function pg(e) {
    return (e ?? "online") === "online" ? Bo.isOnline() : !0
}
var mg = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
    }
};

function xu(e) {
    return e instanceof mg
}

function gg(e) {
    let n = !1,
        i = 0,
        o = !1,
        a;
    const u = tS(),
        c = S => {
            o || (w(new mg(S)), e.abort?.())
        },
        f = () => {
            n = !0
        },
        p = () => {
            n = !1
        },
        m = () => hg.isFocused() && (e.networkMode === "always" || Bo.isOnline()) && e.canRun(),
        g = () => pg(e.networkMode) && e.canRun(),
        v = S => {
            o || (o = !0, e.onSuccess?.(S), a?.(), u.resolve(S))
        },
        w = S => {
            o || (o = !0, e.onError?.(S), a?.(), u.reject(S))
        },
        E = () => new Promise(S => {
            a = T => {
                (o || m()) && S(T)
            }, e.onPause?.()
        }).then(() => {
            a = void 0, o || e.onContinue?.()
        }),
        b = () => {
            if (o) return;
            let S;
            const T = i === 0 ? e.initialPromise : void 0;
            try {
                S = T ?? e.fn()
            } catch (A) {
                S = Promise.reject(A)
            }
            Promise.resolve(S).then(v).catch(A => {
                if (o) return;
                const M = e.retry ?? (na ? 0 : 3),
                    O = e.retryDelay ?? nS,
                    I = typeof O == "function" ? O(i, A) : O,
                    V = M === !0 || typeof M == "number" && i < M || typeof M == "function" && M(i, A);
                if (n || !V) {
                    w(A);
                    return
                }
                i++, e.onFail?.(i, A), qw(I).then(() => m() ? void 0 : E()).then(() => {
                    n ? w(A) : b()
                })
            })
        };
    return {
        promise: u,
        cancel: c,
        continue: () => (a?.(), u),
        cancelRetry: f,
        continueRetry: p,
        canStart: g,
        start: () => (g() ? b() : E().then(b), u)
    }
}

function rS() {
    let e = [],
        n = 0,
        i = f => {
            f()
        },
        o = f => {
            f()
        },
        a = f => setTimeout(f, 0);
    const u = f => {
            n ? e.push(f) : a(() => {
                i(f)
            })
        },
        c = () => {
            const f = e;
            e = [], f.length && a(() => {
                o(() => {
                    f.forEach(p => {
                        i(p)
                    })
                })
            })
        };
    return {
        batch: f => {
            let p;
            n++;
            try {
                p = f()
            } finally {
                n--, n || c()
            }
            return p
        },
        batchCalls: f => (...p) => {
            u(() => {
                f(...p)
            })
        },
        schedule: u,
        setNotifyFunction: f => {
            i = f
        },
        setBatchNotifyFunction: f => {
            o = f
        },
        setScheduler: f => {
            a = f
        }
    }
}
var Xe = rS(),
    yg = class {
        #e;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Hw(this.gcTime) && (this.#e = setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (na ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            this.#e && (clearTimeout(this.#e), this.#e = void 0)
        }
    },
    iS = class extends yg {
        #e;
        #t;
        #n;
        #r;
        #o;
        #i;
        constructor(e) {
            super(), this.#i = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = oS(this.options), this.state = e.state ?? this.#e, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#r?.promise
        }
        setOptions(e) {
            this.options = {
                ...this.#o,
                ...e
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
        }
        setData(e, n) {
            const i = Yw(this.state.data, e, this.options);
            return this.#s({
                data: i,
                type: "success",
                dataUpdatedAt: n?.updatedAt,
                manual: n?.manual
            }), i
        }
        setState(e, n) {
            this.#s({
                type: "setState",
                state: e,
                setStateOptions: n
            })
        }
        cancel(e) {
            const n = this.#r?.promise;
            return this.#r?.cancel(e), n ? n.then(zt).catch(zt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#e)
        }
        isActive() {
            return this.observers.some(e => Gw(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === mc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(e = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !Kw(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(n => n.shouldFetchOnWindowFocus())?.refetch({
                cancelRefetch: !1
            }), this.#r?.continue()
        }
        onOnline() {
            this.observers.find(n => n.shouldFetchOnReconnect())?.refetch({
                cancelRefetch: !1
            }), this.#r?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e), this.observers.length || (this.#r && (this.#i ? this.#r.cancel({
                revert: !0
            }) : this.#r.cancelRetry()), this.scheduleGc()), this.#n.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#s({
                type: "invalidate"
            })
        }
        fetch(e, n) {
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && n?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#r) return this.#r.continueRetry(), this.#r.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const f = this.observers.find(p => p.options.queryFn);
                f && this.setOptions(f.options)
            }
            const i = new AbortController,
                o = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (this.#i = !0, i.signal)
                    })
                },
                a = () => {
                    const f = fg(this.options, n),
                        p = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(p), this.#i = !1, this.options.persister ? this.options.persister(f, p, this) : f(p)
                },
                u = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: a
                };
            o(u), this.options.behavior?.onFetch(u, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== u.fetchOptions?.meta) && this.#s({
                type: "fetch",
                meta: u.fetchOptions?.meta
            });
            const c = f => {
                xu(f) && f.silent || this.#s({
                    type: "error",
                    error: f
                }), xu(f) || (this.#n.config.onError?.(f, this), this.#n.config.onSettled?.(this.state.data, f, this)), this.scheduleGc()
            };
            return this.#r = gg({
                initialPromise: n?.initialPromise,
                fn: u.fetchFn,
                abort: i.abort.bind(i),
                onSuccess: f => {
                    if (f === void 0) {
                        c(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (p) {
                        c(p);
                        return
                    }
                    this.#n.config.onSuccess?.(f, this), this.#n.config.onSettled?.(f, this.state.error, this), this.scheduleGc()
                },
                onError: c,
                onFail: (f, p) => {
                    this.#s({
                        type: "failed",
                        failureCount: f,
                        error: p
                    })
                },
                onPause: () => {
                    this.#s({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#s({
                        type: "continue"
                    })
                },
                retry: u.options.retry,
                retryDelay: u.options.retryDelay,
                networkMode: u.options.networkMode,
                canRun: () => !0
            }), this.#r.start()
        }
        #s(e) {
            const n = i => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...i, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...i, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...i, ...sS(i.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        return {
                            ...i, data: e.data, dataUpdateCount: i.dataUpdateCount + 1, dataUpdatedAt: e.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        const o = e.error;
                        return xu(o) && o.revert && this.#t ? {
                            ...this.#t,
                            fetchStatus: "idle"
                        } : {
                            ...i,
                            error: o,
                            errorUpdateCount: i.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: i.fetchFailureCount + 1,
                            fetchFailureReason: o,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...i, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...i, ...e.state
                        }
                }
            };
            this.state = n(this.state), Xe.batch(() => {
                this.observers.forEach(i => {
                    i.onQueryUpdate()
                }), this.#n.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function sS(e, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: pg(n.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function oS(e) {
    const n = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        i = n !== void 0,
        o = i ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: i ? o ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: i ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var aS = class extends cs {
        constructor(e = {}) {
            super(), this.config = e, this.#e = new Map
        }
        #e;
        build(e, n, i) {
            const o = n.queryKey,
                a = n.queryHash ?? pc(o, n);
            let u = this.get(a);
            return u || (u = new iS({
                cache: this,
                queryKey: o,
                queryHash: a,
                options: e.defaultQueryOptions(n),
                state: i,
                defaultOptions: e.getQueryDefaults(o)
            }), this.add(u)), u
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const n = this.#e.get(e.queryHash);
            n && (e.destroy(), n === e && this.#e.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            Xe.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#e.get(e)
        }
        getAll() {
            return [...this.#e.values()]
        }
        find(e) {
            const n = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => wp(n, i))
        }
        findAll(e = {}) {
            const n = this.getAll();
            return Object.keys(e).length > 0 ? n.filter(i => wp(e, i)) : n
        }
        notify(e) {
            Xe.batch(() => {
                this.listeners.forEach(n => {
                    n(e)
                })
            })
        }
        onFocus() {
            Xe.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            Xe.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    lS = class extends yg {
        #e;
        #t;
        #n;
        constructor(e) {
            super(), this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#e = [], this.state = e.state || vg(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#t.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.#e = this.#e.filter(n => n !== e), this.scheduleGc(), this.#t.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
        }
        continue () {
            return this.#n?.continue() ?? this.execute(this.state.variables)
        }
        async execute(e) {
            this.#n = gg({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
                onFail: (o, a) => {
                    this.#r({
                        type: "failed",
                        failureCount: o,
                        error: a
                    })
                },
                onPause: () => {
                    this.#r({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#r({
                        type: "continue"
                    })
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#t.canRun(this)
            });
            const n = this.state.status === "pending",
                i = !this.#n.canStart();
            try {
                if (!n) {
                    this.#r({
                        type: "pending",
                        variables: e,
                        isPaused: i
                    }), await this.#t.config.onMutate?.(e, this);
                    const a = await this.options.onMutate?.(e);
                    a !== this.state.context && this.#r({
                        type: "pending",
                        context: a,
                        variables: e,
                        isPaused: i
                    })
                }
                const o = await this.#n.start();
                return await this.#t.config.onSuccess?.(o, e, this.state.context, this), await this.options.onSuccess?.(o, e, this.state.context), await this.#t.config.onSettled?.(o, null, this.state.variables, this.state.context, this), await this.options.onSettled?.(o, null, e, this.state.context), this.#r({
                    type: "success",
                    data: o
                }), o
            } catch (o) {
                try {
                    throw await this.#t.config.onError?.(o, e, this.state.context, this), await this.options.onError?.(o, e, this.state.context), await this.#t.config.onSettled?.(void 0, o, this.state.variables, this.state.context, this), await this.options.onSettled?.(void 0, o, e, this.state.context), o
                } finally {
                    this.#r({
                        type: "error",
                        error: o
                    })
                }
            } finally {
                this.#t.runNext(this)
            }
        }
        #r(e) {
            const n = i => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...i, failureCount: e.failureCount, failureReason: e.error
                        };
                    case "pause":
                        return {
                            ...i, isPaused: !0
                        };
                    case "continue":
                        return {
                            ...i, isPaused: !1
                        };
                    case "pending":
                        return {
                            ...i, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...i, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                        };
                    case "error":
                        return {
                            ...i, data: void 0, error: e.error, failureCount: i.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
                        }
                }
            };
            this.state = n(this.state), Xe.batch(() => {
                this.#e.forEach(i => {
                    i.onMutationUpdate(e)
                }), this.#t.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function vg() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var uS = class extends cs {
    constructor(e = {}) {
        super(), this.config = e, this.#e = new Map, this.#t = Date.now()
    }
    #e;
    #t;
    build(e, n, i) {
        const o = new lS({
            mutationCache: this,
            mutationId: ++this.#t,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(o), o
    }
    add(e) {
        const n = ko(e),
            i = this.#e.get(n) ?? [];
        i.push(e), this.#e.set(n, i), this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        const n = ko(e);
        if (this.#e.has(n)) {
            const i = this.#e.get(n)?.filter(o => o !== e);
            i && (i.length === 0 ? this.#e.delete(n) : this.#e.set(n, i))
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = this.#e.get(ko(e))?.find(i => i.state.status === "pending");
        return !n || n === e
    }
    runNext(e) {
        return this.#e.get(ko(e))?.find(i => i !== e && i.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        Xe.batch(() => {
            this.getAll().forEach(e => {
                this.remove(e)
            })
        })
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Sp(n, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(n => Sp(e, n))
    }
    notify(e) {
        Xe.batch(() => {
            this.listeners.forEach(n => {
                n(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return Xe.batch(() => Promise.all(e.map(n => n.continue().catch(zt))))
    }
};

function ko(e) {
    return e.options.scope?.id ?? String(e.mutationId)
}

function Ep(e) {
    return {
        onFetch: (n, i) => {
            const o = n.options,
                a = n.fetchOptions?.meta?.fetchMore?.direction,
                u = n.state.data?.pages || [],
                c = n.state.data?.pageParams || [];
            let f = {
                    pages: [],
                    pageParams: []
                },
                p = 0;
            const m = async () => {
                let g = !1;
                const v = b => {
                        Object.defineProperty(b, "signal", {
                            enumerable: !0,
                            get: () => (n.signal.aborted ? g = !0 : n.signal.addEventListener("abort", () => {
                                g = !0
                            }), n.signal)
                        })
                    },
                    w = fg(n.options, n.fetchOptions),
                    E = async (b, S, T) => {
                        if (g) return Promise.reject();
                        if (S == null && b.pages.length) return Promise.resolve(b);
                        const A = {
                            queryKey: n.queryKey,
                            pageParam: S,
                            direction: T ? "backward" : "forward",
                            meta: n.options.meta
                        };
                        v(A);
                        const M = await w(A),
                            {
                                maxPages: O
                            } = n.options,
                            I = T ? Zw : Xw;
                        return {
                            pages: I(b.pages, M, O),
                            pageParams: I(b.pageParams, S, O)
                        }
                    };
                if (a && u.length) {
                    const b = a === "backward",
                        S = b ? cS : Tp,
                        T = {
                            pages: u,
                            pageParams: c
                        },
                        A = S(o, T);
                    f = await E(T, A, b)
                } else {
                    const b = e ?? u.length;
                    do {
                        const S = p === 0 ? c[0] ?? o.initialPageParam : Tp(o, f);
                        if (p > 0 && S == null) break;
                        f = await E(f, S), p++
                    } while (p < b)
                }
                return f
            };
            n.options.persister ? n.fetchFn = () => n.options.persister?.(m, {
                queryKey: n.queryKey,
                meta: n.options.meta,
                signal: n.signal
            }, i) : n.fetchFn = m
        }
    }
}

function Tp(e, {
    pages: n,
    pageParams: i
}) {
    const o = n.length - 1;
    return n.length > 0 ? e.getNextPageParam(n[o], n, i[o], i) : void 0
}

function cS(e, {
    pages: n,
    pageParams: i
}) {
    return n.length > 0 ? e.getPreviousPageParam?.(n[0], n, i[0], i) : void 0
}
var dS = class {
        #e;
        #t;
        #n;
        #r;
        #o;
        #i;
        #s;
        #a;
        constructor(e = {}) {
            this.#e = e.queryCache || new aS, this.#t = e.mutationCache || new uS, this.#n = e.defaultOptions || {}, this.#r = new Map, this.#o = new Map, this.#i = 0
        }
        mount() {
            this.#i++, this.#i === 1 && (this.#s = hg.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onFocus())
            }), this.#a = Bo.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onOnline())
            }))
        }
        unmount() {
            this.#i--, this.#i === 0 && (this.#s?.(), this.#s = void 0, this.#a?.(), this.#a = void 0)
        }
        isFetching(e) {
            return this.#e.findAll({
                ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#t.findAll({
                ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const n = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(n.queryHash)?.state.data
        }
        ensureQueryData(e) {
            const n = this.getQueryData(e.queryKey);
            if (n === void 0) return this.fetchQuery(e);
            {
                const i = this.defaultQueryOptions(e),
                    o = this.#e.build(this, i);
                return e.revalidateIfStale && o.isStaleByTime(xp(i.staleTime, o)) && this.prefetchQuery(i), Promise.resolve(n)
            }
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({
                queryKey: n,
                state: i
            }) => {
                const o = i.data;
                return [n, o]
            })
        }
        setQueryData(e, n, i) {
            const o = this.defaultQueryOptions({
                    queryKey: e
                }),
                u = this.#e.get(o.queryHash)?.state.data,
                c = Ww(n, u);
            if (c !== void 0) return this.#e.build(this, o).setData(c, {
                ...i,
                manual: !0
            })
        }
        setQueriesData(e, n, i) {
            return Xe.batch(() => this.#e.findAll(e).map(({
                queryKey: o
            }) => [o, this.setQueryData(o, n, i)]))
        }
        getQueryState(e) {
            const n = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(n.queryHash)?.state
        }
        removeQueries(e) {
            const n = this.#e;
            Xe.batch(() => {
                n.findAll(e).forEach(i => {
                    n.remove(i)
                })
            })
        }
        resetQueries(e, n) {
            const i = this.#e,
                o = {
                    type: "active",
                    ...e
                };
            return Xe.batch(() => (i.findAll(e).forEach(a => {
                a.reset()
            }), this.refetchQueries(o, n)))
        }
        cancelQueries(e = {}, n = {}) {
            const i = {
                    revert: !0,
                    ...n
                },
                o = Xe.batch(() => this.#e.findAll(e).map(a => a.cancel(i)));
            return Promise.all(o).then(zt).catch(zt)
        }
        invalidateQueries(e = {}, n = {}) {
            return Xe.batch(() => {
                if (this.#e.findAll(e).forEach(o => {
                        o.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const i = {
                    ...e,
                    type: e.refetchType ?? e.type ?? "active"
                };
                return this.refetchQueries(i, n)
            })
        }
        refetchQueries(e = {}, n) {
            const i = {
                    ...n,
                    cancelRefetch: n?.cancelRefetch ?? !0
                },
                o = Xe.batch(() => this.#e.findAll(e).filter(a => !a.isDisabled()).map(a => {
                    let u = a.fetch(void 0, i);
                    return i.throwOnError || (u = u.catch(zt)), a.state.fetchStatus === "paused" ? Promise.resolve() : u
                }));
            return Promise.all(o).then(zt)
        }
        fetchQuery(e) {
            const n = this.defaultQueryOptions(e);
            n.retry === void 0 && (n.retry = !1);
            const i = this.#e.build(this, n);
            return i.isStaleByTime(xp(n.staleTime, i)) ? i.fetch(n) : Promise.resolve(i.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(zt).catch(zt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Ep(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(zt).catch(zt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Ep(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Bo.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#e
        }
        getMutationCache() {
            return this.#t
        }
        getDefaultOptions() {
            return this.#n
        }
        setDefaultOptions(e) {
            this.#n = e
        }
        setQueryDefaults(e, n) {
            this.#r.set(pr(e), {
                queryKey: e,
                defaultOptions: n
            })
        }
        getQueryDefaults(e) {
            const n = [...this.#r.values()];
            let i = {};
            return n.forEach(o => {
                rs(e, o.queryKey) && (i = {
                    ...i,
                    ...o.defaultOptions
                })
            }), i
        }
        setMutationDefaults(e, n) {
            this.#o.set(pr(e), {
                mutationKey: e,
                defaultOptions: n
            })
        }
        getMutationDefaults(e) {
            const n = [...this.#o.values()];
            let i = {};
            return n.forEach(o => {
                rs(e, o.mutationKey) && (i = {
                    ...i,
                    ...o.defaultOptions
                })
            }), i
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const n = {
                ...this.#n.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = pc(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.enabled !== !0 && n.queryFn === mc && (n.enabled = !1), n
        }
        defaultMutationOptions(e) {
            return e?._defaulted ? e : {
                ...this.#n.mutations,
                ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            this.#e.clear(), this.#t.clear()
        }
    },
    fS = class extends cs {
        #e;
        #t = void 0;
        #n;
        #r;
        constructor(n, i) {
            super(), this.#e = n, this.setOptions(i), this.bindMethods(), this.#o()
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(n) {
            const i = this.options;
            this.options = this.#e.defaultMutationOptions(n), Qw(this.options, i) || this.#e.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#n,
                observer: this
            }), i?.mutationKey && this.options.mutationKey && pr(i.mutationKey) !== pr(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
        }
        onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this)
        }
        onMutationUpdate(n) {
            this.#o(), this.#i(n)
        }
        getCurrentResult() {
            return this.#t
        }
        reset() {
            this.#n?.removeObserver(this), this.#n = void 0, this.#o(), this.#i()
        }
        mutate(n, i) {
            return this.#r = i, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(n)
        }
        #o() {
            const n = this.#n?.state ?? vg();
            this.#t = {
                ...n,
                isPending: n.status === "pending",
                isSuccess: n.status === "success",
                isError: n.status === "error",
                isIdle: n.status === "idle",
                mutate: this.mutate,
                reset: this.reset
            }
        }
        #i(n) {
            Xe.batch(() => {
                if (this.#r && this.hasListeners()) {
                    const i = this.#t.variables,
                        o = this.#t.context;
                    n?.type === "success" ? (this.#r.onSuccess?.(n.data, i, o), this.#r.onSettled?.(n.data, null, i, o)) : n?.type === "error" && (this.#r.onError?.(n.error, i, o), this.#r.onSettled?.(void 0, n.error, i, o))
                }
                this.listeners.forEach(i => {
                    i(this.#t)
                })
            })
        }
    },
    xg = P.createContext(void 0),
    hS = e => {
        const n = P.useContext(xg);
        if (!n) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return n
    },
    pS = ({
        client: e,
        children: n
    }) => (P.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), x.jsx(xg.Provider, {
        value: e,
        children: n
    }));

function mS(e, n) {
    return typeof e == "function" ? e(...n) : !!e
}

function gS() {}

function yS(e, n) {
    const i = hS(),
        [o] = P.useState(() => new fS(i, e));
    P.useEffect(() => {
        o.setOptions(e)
    }, [o, e]);
    const a = P.useSyncExternalStore(P.useCallback(c => o.subscribe(Xe.batchCalls(c)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
        u = P.useCallback((c, f) => {
            o.mutate(c, f).catch(gS)
        }, [o]);
    if (a.error && mS(o.options.throwOnError, [a.error])) throw a.error;
    return {
        ...a,
        mutate: u,
        mutateAsync: a.mutate
    }
}
async function wg(e) {
    if (!e.ok) {
        const n = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${n}`)
    }
}
async function vS(e, n, i) {
    const o = await fetch(n, {
        method: e,
        headers: i ? {
            "Content-Type": "application/json"
        } : {},
        body: i ? JSON.stringify(i) : void 0,
        credentials: "include"
    });
    return await wg(o), o
}
const xS = ({
    on401: e
}) => async ({
    queryKey: n
}) => {
    const i = await fetch(n.join("/"), {
        credentials: "include"
    });
    return await wg(i), await i.json()
}, wS = new dS({
    defaultOptions: {
        queries: {
            queryFn: xS({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
}), SS = 1, PS = 1e6;
let wu = 0;

function CS() {
    return wu = (wu + 1) % Number.MAX_SAFE_INTEGER, wu.toString()
}
const Su = new Map,
    bp = e => {
        if (Su.has(e)) return;
        const n = setTimeout(() => {
            Su.delete(e), Ji({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, PS);
        Su.set(e, n)
    },
    ES = (e, n) => {
        switch (n.type) {
            case "ADD_TOAST":
                return {
                    ...e, toasts: [n.toast, ...e.toasts].slice(0, SS)
                };
            case "UPDATE_TOAST":
                return {
                    ...e, toasts: e.toasts.map(i => i.id === n.toast.id ? {
                        ...i,
                        ...n.toast
                    } : i)
                };
            case "DISMISS_TOAST": {
                const {
                    toastId: i
                } = n;
                return i ? bp(i) : e.toasts.forEach(o => {
                    bp(o.id)
                }), {
                    ...e,
                    toasts: e.toasts.map(o => o.id === i || i === void 0 ? {
                        ...o,
                        open: !1
                    } : o)
                }
            }
            case "REMOVE_TOAST":
                return n.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(i => i.id !== n.toastId)
                }
        }
    },
    Oo = [];
let Lo = {
    toasts: []
};

function Ji(e) {
    Lo = ES(Lo, e), Oo.forEach(n => {
        n(Lo)
    })
}

function TS({
    ...e
}) {
    const n = CS(),
        i = a => Ji({
            type: "UPDATE_TOAST",
            toast: {
                ...a,
                id: n
            }
        }),
        o = () => Ji({
            type: "DISMISS_TOAST",
            toastId: n
        });
    return Ji({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: n,
            open: !0,
            onOpenChange: a => {
                a || o()
            }
        }
    }), {
        id: n,
        dismiss: o,
        update: i
    }
}

function Sg() {
    const [e, n] = P.useState(Lo);
    return P.useEffect(() => (Oo.push(n), () => {
        const i = Oo.indexOf(n);
        i > -1 && Oo.splice(i, 1)
    }), [e]), {
        ...e,
        toast: TS,
        dismiss: i => Ji({
            type: "DISMISS_TOAST",
            toastId: i
        })
    }
}
var ra = tg();
const bS = eg(ra);

function $e(e, n, {
    checkForDefaultPrevented: i = !0
} = {}) {
    return function(a) {
        if (e?.(a), i === !1 || !a.defaultPrevented) return n?.(a)
    }
}

function kp(e, n) {
    if (typeof e == "function") return e(n);
    e != null && (e.current = n)
}

function Pg(...e) {
    return n => {
        let i = !1;
        const o = e.map(a => {
            const u = kp(a, n);
            return !i && typeof u == "function" && (i = !0), u
        });
        if (i) return () => {
            for (let a = 0; a < o.length; a++) {
                const u = o[a];
                typeof u == "function" ? u() : kp(e[a], null)
            }
        }
    }
}

function Bt(...e) {
    return P.useCallback(Pg(...e), e)
}

function ia(e, n = []) {
    let i = [];

    function o(u, c) {
        const f = P.createContext(c),
            p = i.length;
        i = [...i, c];
        const m = v => {
            const {
                scope: w,
                children: E,
                ...b
            } = v, S = w?.[e]?.[p] || f, T = P.useMemo(() => b, Object.values(b));
            return x.jsx(S.Provider, {
                value: T,
                children: E
            })
        };
        m.displayName = u + "Provider";

        function g(v, w) {
            const E = w?.[e]?.[p] || f,
                b = P.useContext(E);
            if (b) return b;
            if (c !== void 0) return c;
            throw new Error(`\`${v}\` must be used within \`${u}\``)
        }
        return [m, g]
    }
    const a = () => {
        const u = i.map(c => P.createContext(c));
        return function(f) {
            const p = f?.[e] || u;
            return P.useMemo(() => ({
                [`__scope${e}`]: {
                    ...f,
                    [e]: p
                }
            }), [f, p])
        }
    };
    return a.scopeName = e, [o, kS(a, ...n)]
}

function kS(...e) {
    const n = e[0];
    if (e.length === 1) return n;
    const i = () => {
        const o = e.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(u) {
            const c = o.reduce((f, {
                useScope: p,
                scopeName: m
            }) => {
                const v = p(u)[`__scope${m}`];
                return {
                    ...f,
                    ...v
                }
            }, {});
            return P.useMemo(() => ({
                [`__scope${n.scopeName}`]: c
            }), [c])
        }
    };
    return i.scopeName = n.scopeName, i
}

function Uo(e) {
    const n = AS(e),
        i = P.forwardRef((o, a) => {
            const {
                children: u,
                ...c
            } = o, f = P.Children.toArray(u), p = f.find(jS);
            if (p) {
                const m = p.props.children,
                    g = f.map(v => v === p ? P.Children.count(m) > 1 ? P.Children.only(null) : P.isValidElement(m) ? m.props.children : null : v);
                return x.jsx(n, {
                    ...c,
                    ref: a,
                    children: P.isValidElement(m) ? P.cloneElement(m, void 0, g) : null
                })
            }
            return x.jsx(n, {
                ...c,
                ref: a,
                children: u
            })
        });
    return i.displayName = `${e}.Slot`, i
}
var RS = Uo("Slot");

function AS(e) {
    const n = P.forwardRef((i, o) => {
        const {
            children: a,
            ...u
        } = i;
        if (P.isValidElement(a)) {
            const c = DS(a),
                f = MS(u, a.props);
            return a.type !== P.Fragment && (f.ref = o ? Pg(o, c) : c), P.cloneElement(a, f)
        }
        return P.Children.count(a) > 1 ? P.Children.only(null) : null
    });
    return n.displayName = `${e}.SlotClone`, n
}
var Cg = Symbol("radix.slottable");

function NS(e) {
    const n = ({
        children: i
    }) => x.jsx(x.Fragment, {
        children: i
    });
    return n.displayName = `${e}.Slottable`, n.__radixId = Cg, n
}

function jS(e) {
    return P.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cg
}

function MS(e, n) {
    const i = {
        ...n
    };
    for (const o in n) {
        const a = e[o],
            u = n[o];
        /^on[A-Z]/.test(o) ? a && u ? i[o] = (...f) => {
            u(...f), a(...f)
        } : a && (i[o] = a) : o === "style" ? i[o] = {
            ...a,
            ...u
        } : o === "className" && (i[o] = [a, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...i
    }
}

function DS(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        i = n && "isReactWarning" in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}

function OS(e) {
    const n = e + "CollectionProvider",
        [i, o] = ia(n),
        [a, u] = i(n, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        c = S => {
            const {
                scope: T,
                children: A
            } = S, M = Fn.useRef(null), O = Fn.useRef(new Map).current;
            return x.jsx(a, {
                scope: T,
                itemMap: O,
                collectionRef: M,
                children: A
            })
        };
    c.displayName = n;
    const f = e + "CollectionSlot",
        p = Uo(f),
        m = Fn.forwardRef((S, T) => {
            const {
                scope: A,
                children: M
            } = S, O = u(f, A), I = Bt(T, O.collectionRef);
            return x.jsx(p, {
                ref: I,
                children: M
            })
        });
    m.displayName = f;
    const g = e + "CollectionItemSlot",
        v = "data-radix-collection-item",
        w = Uo(g),
        E = Fn.forwardRef((S, T) => {
            const {
                scope: A,
                children: M,
                ...O
            } = S, I = Fn.useRef(null), V = Bt(T, I), $ = u(g, A);
            return Fn.useEffect(() => ($.itemMap.set(I, {
                ref: I,
                ...O
            }), () => void $.itemMap.delete(I))), x.jsx(w, {
                [v]: "",
                ref: V,
                children: M
            })
        });
    E.displayName = g;

    function b(S) {
        const T = u(e + "CollectionConsumer", S);
        return Fn.useCallback(() => {
            const M = T.collectionRef.current;
            if (!M) return [];
            const O = Array.from(M.querySelectorAll(`[${v}]`));
            return Array.from(T.itemMap.values()).sort(($, H) => O.indexOf($.ref.current) - O.indexOf(H.ref.current))
        }, [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: c,
        Slot: m,
        ItemSlot: E
    }, b, o]
}
var LS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    lt = LS.reduce((e, n) => {
        const i = Uo(`Primitive.${n}`),
            o = P.forwardRef((a, u) => {
                const {
                    asChild: c,
                    ...f
                } = a, p = c ? i : n;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), x.jsx(p, {
                    ...f,
                    ref: u
                })
            });
        return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
        }
    }, {});

function Eg(e, n) {
    e && ra.flushSync(() => e.dispatchEvent(n))
}

function Zt(e) {
    const n = P.useRef(e);
    return P.useEffect(() => {
        n.current = e
    }), P.useMemo(() => (...i) => n.current?.(...i), [])
}

function _S(e, n = globalThis?.document) {
    const i = Zt(e);
    P.useEffect(() => {
        const o = a => {
            a.key === "Escape" && i(a)
        };
        return n.addEventListener("keydown", o, {
            capture: !0
        }), () => n.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [i, n])
}
var IS = "DismissableLayer",
    zu = "dismissableLayer.update",
    VS = "dismissableLayer.pointerDownOutside",
    FS = "dismissableLayer.focusOutside",
    Rp, Tg = P.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    gc = P.forwardRef((e, n) => {
        const {
            disableOutsidePointerEvents: i = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: u,
            onInteractOutside: c,
            onDismiss: f,
            ...p
        } = e, m = P.useContext(Tg), [g, v] = P.useState(null), w = g?.ownerDocument ?? globalThis?.document, [, E] = P.useState({}), b = Bt(n, H => v(H)), S = Array.from(m.layers), [T] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), A = S.indexOf(T), M = g ? S.indexOf(g) : -1, O = m.layersWithOutsidePointerEventsDisabled.size > 0, I = M >= A, V = BS(H => {
            const G = H.target,
                oe = [...m.branches].some(re => re.contains(G));
            !I || oe || (a?.(H), c?.(H), H.defaultPrevented || f?.())
        }, w), $ = US(H => {
            const G = H.target;
            [...m.branches].some(re => re.contains(G)) || (u?.(H), c?.(H), H.defaultPrevented || f?.())
        }, w);
        return _S(H => {
            M === m.layers.size - 1 && (o?.(H), !H.defaultPrevented && f && (H.preventDefault(), f()))
        }, w), P.useEffect(() => {
            if (g) return i && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Rp = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(g)), m.layers.add(g), Ap(), () => {
                i && m.layersWithOutsidePointerEventsDisabled.size === 1 && (w.body.style.pointerEvents = Rp)
            }
        }, [g, w, i, m]), P.useEffect(() => () => {
            g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), Ap())
        }, [g, m]), P.useEffect(() => {
            const H = () => E({});
            return document.addEventListener(zu, H), () => document.removeEventListener(zu, H)
        }, []), x.jsx(lt.div, {
            ...p,
            ref: b,
            style: {
                pointerEvents: O ? I ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: $e(e.onFocusCapture, $.onFocusCapture),
            onBlurCapture: $e(e.onBlurCapture, $.onBlurCapture),
            onPointerDownCapture: $e(e.onPointerDownCapture, V.onPointerDownCapture)
        })
    });
gc.displayName = IS;
var zS = "DismissableLayerBranch",
    bg = P.forwardRef((e, n) => {
        const i = P.useContext(Tg),
            o = P.useRef(null),
            a = Bt(n, o);
        return P.useEffect(() => {
            const u = o.current;
            if (u) return i.branches.add(u), () => {
                i.branches.delete(u)
            }
        }, [i.branches]), x.jsx(lt.div, {
            ...e,
            ref: a
        })
    });
bg.displayName = zS;

function BS(e, n = globalThis?.document) {
    const i = Zt(e),
        o = P.useRef(!1),
        a = P.useRef(() => {});
    return P.useEffect(() => {
        const u = f => {
                if (f.target && !o.current) {
                    let p = function() {
                        kg(VS, i, m, {
                            discrete: !0
                        })
                    };
                    const m = {
                        originalEvent: f
                    };
                    f.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = p, n.addEventListener("click", a.current, {
                        once: !0
                    })) : p()
                } else n.removeEventListener("click", a.current);
                o.current = !1
            },
            c = window.setTimeout(() => {
                n.addEventListener("pointerdown", u)
            }, 0);
        return () => {
            window.clearTimeout(c), n.removeEventListener("pointerdown", u), n.removeEventListener("click", a.current)
        }
    }, [n, i]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function US(e, n = globalThis?.document) {
    const i = Zt(e),
        o = P.useRef(!1);
    return P.useEffect(() => {
        const a = u => {
            u.target && !o.current && kg(FS, i, {
                originalEvent: u
            }, {
                discrete: !1
            })
        };
        return n.addEventListener("focusin", a), () => n.removeEventListener("focusin", a)
    }, [n, i]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Ap() {
    const e = new CustomEvent(zu);
    document.dispatchEvent(e)
}

function kg(e, n, i, {
    discrete: o
}) {
    const a = i.originalEvent.target,
        u = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: i
        });
    n && a.addEventListener(e, n, {
        once: !0
    }), o ? Eg(a, u) : a.dispatchEvent(u)
}
var $S = gc,
    WS = bg,
    mr = globalThis?.document ? P.useLayoutEffect : () => {},
    HS = "Portal",
    Rg = P.forwardRef((e, n) => {
        const {
            container: i,
            ...o
        } = e, [a, u] = P.useState(!1);
        mr(() => u(!0), []);
        const c = i || a && globalThis?.document?.body;
        return c ? bS.createPortal(x.jsx(lt.div, {
            ...o,
            ref: n
        }), c) : null
    });
Rg.displayName = HS;

function KS(e, n) {
    return P.useReducer((i, o) => n[i][o] ?? i, e)
}
var yc = e => {
    const {
        present: n,
        children: i
    } = e, o = GS(n), a = typeof i == "function" ? i({
        present: o.isPresent
    }) : P.Children.only(i), u = Bt(o.ref, QS(a));
    return typeof i == "function" || o.isPresent ? P.cloneElement(a, {
        ref: u
    }) : null
};
yc.displayName = "Presence";

function GS(e) {
    const [n, i] = P.useState(), o = P.useRef({}), a = P.useRef(e), u = P.useRef("none"), c = e ? "mounted" : "unmounted", [f, p] = KS(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return P.useEffect(() => {
        const m = Ro(o.current);
        u.current = f === "mounted" ? m : "none"
    }, [f]), mr(() => {
        const m = o.current,
            g = a.current;
        if (g !== e) {
            const w = u.current,
                E = Ro(m);
            e ? p("MOUNT") : E === "none" || m?.display === "none" ? p("UNMOUNT") : p(g && w !== E ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
        }
    }, [e, p]), mr(() => {
        if (n) {
            let m;
            const g = n.ownerDocument.defaultView ?? window,
                v = E => {
                    const S = Ro(o.current).includes(E.animationName);
                    if (E.target === n && S && (p("ANIMATION_END"), !a.current)) {
                        const T = n.style.animationFillMode;
                        n.style.animationFillMode = "forwards", m = g.setTimeout(() => {
                            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = T)
                        })
                    }
                },
                w = E => {
                    E.target === n && (u.current = Ro(o.current))
                };
            return n.addEventListener("animationstart", w), n.addEventListener("animationcancel", v), n.addEventListener("animationend", v), () => {
                g.clearTimeout(m), n.removeEventListener("animationstart", w), n.removeEventListener("animationcancel", v), n.removeEventListener("animationend", v)
            }
        } else p("ANIMATION_END")
    }, [n, p]), {
        isPresent: ["mounted", "unmountSuspended"].includes(f),
        ref: P.useCallback(m => {
            m && (o.current = getComputedStyle(m)), i(m)
        }, [])
    }
}

function Ro(e) {
    return e?.animationName || "none"
}

function QS(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        i = n && "isReactWarning" in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}

function qS({
    prop: e,
    defaultProp: n,
    onChange: i = () => {}
}) {
    const [o, a] = YS({
        defaultProp: n,
        onChange: i
    }), u = e !== void 0, c = u ? e : o, f = Zt(i), p = P.useCallback(m => {
        if (u) {
            const v = typeof m == "function" ? m(e) : m;
            v !== e && f(v)
        } else a(m)
    }, [u, e, a, f]);
    return [c, p]
}

function YS({
    defaultProp: e,
    onChange: n
}) {
    const i = P.useState(e),
        [o] = i,
        a = P.useRef(o),
        u = Zt(n);
    return P.useEffect(() => {
        a.current !== o && (u(o), a.current = o)
    }, [o, a, u]), i
}
var XS = "VisuallyHidden",
    sa = P.forwardRef((e, n) => x.jsx(lt.span, {
        ...e,
        ref: n,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
sa.displayName = XS;
var ZS = sa,
    vc = "ToastProvider",
    [xc, JS, e1] = OS("Toast"),
    [Ag, MR] = ia("Toast", [e1]),
    [t1, oa] = Ag(vc),
    Ng = e => {
        const {
            __scopeToast: n,
            label: i = "Notification",
            duration: o = 5e3,
            swipeDirection: a = "right",
            swipeThreshold: u = 50,
            children: c
        } = e, [f, p] = P.useState(null), [m, g] = P.useState(0), v = P.useRef(!1), w = P.useRef(!1);
        return i.trim() || console.error(`Invalid prop \`label\` supplied to \`${vc}\`. Expected non-empty \`string\`.`), x.jsx(xc.Provider, {
            scope: n,
            children: x.jsx(t1, {
                scope: n,
                label: i,
                duration: o,
                swipeDirection: a,
                swipeThreshold: u,
                toastCount: m,
                viewport: f,
                onViewportChange: p,
                onToastAdd: P.useCallback(() => g(E => E + 1), []),
                onToastRemove: P.useCallback(() => g(E => E - 1), []),
                isFocusedToastEscapeKeyDownRef: v,
                isClosePausedRef: w,
                children: c
            })
        })
    };
Ng.displayName = vc;
var jg = "ToastViewport",
    n1 = ["F8"],
    Bu = "toast.viewportPause",
    Uu = "toast.viewportResume",
    Mg = P.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            hotkey: o = n1,
            label: a = "Notifications ({hotkey})",
            ...u
        } = e, c = oa(jg, i), f = JS(i), p = P.useRef(null), m = P.useRef(null), g = P.useRef(null), v = P.useRef(null), w = Bt(n, v, c.onViewportChange), E = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = c.toastCount > 0;
        P.useEffect(() => {
            const T = A => {
                o.length !== 0 && o.every(O => A[O] || A.code === O) && v.current?.focus()
            };
            return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T)
        }, [o]), P.useEffect(() => {
            const T = p.current,
                A = v.current;
            if (b && T && A) {
                const M = () => {
                        if (!c.isClosePausedRef.current) {
                            const $ = new CustomEvent(Bu);
                            A.dispatchEvent($), c.isClosePausedRef.current = !0
                        }
                    },
                    O = () => {
                        if (c.isClosePausedRef.current) {
                            const $ = new CustomEvent(Uu);
                            A.dispatchEvent($), c.isClosePausedRef.current = !1
                        }
                    },
                    I = $ => {
                        !T.contains($.relatedTarget) && O()
                    },
                    V = () => {
                        T.contains(document.activeElement) || O()
                    };
                return T.addEventListener("focusin", M), T.addEventListener("focusout", I), T.addEventListener("pointermove", M), T.addEventListener("pointerleave", V), window.addEventListener("blur", M), window.addEventListener("focus", O), () => {
                    T.removeEventListener("focusin", M), T.removeEventListener("focusout", I), T.removeEventListener("pointermove", M), T.removeEventListener("pointerleave", V), window.removeEventListener("blur", M), window.removeEventListener("focus", O)
                }
            }
        }, [b, c.isClosePausedRef]);
        const S = P.useCallback(({
            tabbingDirection: T
        }) => {
            const M = f().map(O => {
                const I = O.ref.current,
                    V = [I, ...m1(I)];
                return T === "forwards" ? V : V.reverse()
            });
            return (T === "forwards" ? M.reverse() : M).flat()
        }, [f]);
        return P.useEffect(() => {
            const T = v.current;
            if (T) {
                const A = M => {
                    const O = M.altKey || M.ctrlKey || M.metaKey;
                    if (M.key === "Tab" && !O) {
                        const V = document.activeElement,
                            $ = M.shiftKey;
                        if (M.target === T && $) {
                            m.current?.focus();
                            return
                        }
                        const oe = S({
                                tabbingDirection: $ ? "backwards" : "forwards"
                            }),
                            re = oe.findIndex(de => de === V);
                        Pu(oe.slice(re + 1)) ? M.preventDefault() : $ ? m.current?.focus() : g.current?.focus()
                    }
                };
                return T.addEventListener("keydown", A), () => T.removeEventListener("keydown", A)
            }
        }, [f, S]), x.jsxs(WS, {
            ref: p,
            role: "region",
            "aria-label": a.replace("{hotkey}", E),
            tabIndex: -1,
            style: {
                pointerEvents: b ? void 0 : "none"
            },
            children: [b && x.jsx($u, {
                ref: m,
                onFocusFromOutsideViewport: () => {
                    const T = S({
                        tabbingDirection: "forwards"
                    });
                    Pu(T)
                }
            }), x.jsx(xc.Slot, {
                scope: i,
                children: x.jsx(lt.ol, {
                    tabIndex: -1,
                    ...u,
                    ref: w
                })
            }), b && x.jsx($u, {
                ref: g,
                onFocusFromOutsideViewport: () => {
                    const T = S({
                        tabbingDirection: "backwards"
                    });
                    Pu(T)
                }
            })]
        })
    });
Mg.displayName = jg;
var Dg = "ToastFocusProxy",
    $u = P.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            onFocusFromOutsideViewport: o,
            ...a
        } = e, u = oa(Dg, i);
        return x.jsx(sa, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...a,
            ref: n,
            style: {
                position: "fixed"
            },
            onFocus: c => {
                const f = c.relatedTarget;
                !u.viewport?.contains(f) && o()
            }
        })
    });
$u.displayName = Dg;
var aa = "Toast",
    r1 = "toast.swipeStart",
    i1 = "toast.swipeMove",
    s1 = "toast.swipeCancel",
    o1 = "toast.swipeEnd",
    Og = P.forwardRef((e, n) => {
        const {
            forceMount: i,
            open: o,
            defaultOpen: a,
            onOpenChange: u,
            ...c
        } = e, [f = !0, p] = qS({
            prop: o,
            defaultProp: a,
            onChange: u
        });
        return x.jsx(yc, {
            present: i || f,
            children: x.jsx(u1, {
                open: f,
                ...c,
                ref: n,
                onClose: () => p(!1),
                onPause: Zt(e.onPause),
                onResume: Zt(e.onResume),
                onSwipeStart: $e(e.onSwipeStart, m => {
                    m.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: $e(e.onSwipeMove, m => {
                    const {
                        x: g,
                        y: v
                    } = m.detail.delta;
                    m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${v}px`)
                }),
                onSwipeCancel: $e(e.onSwipeCancel, m => {
                    m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: $e(e.onSwipeEnd, m => {
                    const {
                        x: g,
                        y: v
                    } = m.detail.delta;
                    m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${v}px`), p(!1)
                })
            })
        })
    });
Og.displayName = aa;
var [a1, l1] = Ag(aa, {
    onClose() {}
}), u1 = P.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        type: o = "foreground",
        duration: a,
        open: u,
        onClose: c,
        onEscapeKeyDown: f,
        onPause: p,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: v,
        onSwipeCancel: w,
        onSwipeEnd: E,
        ...b
    } = e, S = oa(aa, i), [T, A] = P.useState(null), M = Bt(n, q => A(q)), O = P.useRef(null), I = P.useRef(null), V = a || S.duration, $ = P.useRef(0), H = P.useRef(V), G = P.useRef(0), {
        onToastAdd: oe,
        onToastRemove: re
    } = S, de = Zt(() => {
        T?.contains(document.activeElement) && S.viewport?.focus(), c()
    }), ne = P.useCallback(q => {
        !q || q === 1 / 0 || (window.clearTimeout(G.current), $.current = new Date().getTime(), G.current = window.setTimeout(de, q))
    }, [de]);
    P.useEffect(() => {
        const q = S.viewport;
        if (q) {
            const ge = () => {
                    ne(H.current), m?.()
                },
                le = () => {
                    const X = new Date().getTime() - $.current;
                    H.current = H.current - X, window.clearTimeout(G.current), p?.()
                };
            return q.addEventListener(Bu, le), q.addEventListener(Uu, ge), () => {
                q.removeEventListener(Bu, le), q.removeEventListener(Uu, ge)
            }
        }
    }, [S.viewport, V, p, m, ne]), P.useEffect(() => {
        u && !S.isClosePausedRef.current && ne(V)
    }, [u, V, S.isClosePausedRef, ne]), P.useEffect(() => (oe(), () => re()), [oe, re]);
    const he = P.useMemo(() => T ? Bg(T) : null, [T]);
    return S.viewport ? x.jsxs(x.Fragment, {
        children: [he && x.jsx(c1, {
            __scopeToast: i,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: he
        }), x.jsx(a1, {
            scope: i,
            onClose: de,
            children: ra.createPortal(x.jsx(xc.ItemSlot, {
                scope: i,
                children: x.jsx($S, {
                    asChild: !0,
                    onEscapeKeyDown: $e(f, () => {
                        S.isFocusedToastEscapeKeyDownRef.current || de(), S.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: x.jsx(lt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": u ? "open" : "closed",
                        "data-swipe-direction": S.swipeDirection,
                        ...b,
                        ref: M,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: $e(e.onKeyDown, q => {
                            q.key === "Escape" && (f?.(q.nativeEvent), q.nativeEvent.defaultPrevented || (S.isFocusedToastEscapeKeyDownRef.current = !0, de()))
                        }),
                        onPointerDown: $e(e.onPointerDown, q => {
                            q.button === 0 && (O.current = {
                                x: q.clientX,
                                y: q.clientY
                            })
                        }),
                        onPointerMove: $e(e.onPointerMove, q => {
                            if (!O.current) return;
                            const ge = q.clientX - O.current.x,
                                le = q.clientY - O.current.y,
                                X = !!I.current,
                                _ = ["left", "right"].includes(S.swipeDirection),
                                Q = ["left", "up"].includes(S.swipeDirection) ? Math.min : Math.max,
                                K = _ ? Q(0, ge) : 0,
                                N = _ ? 0 : Q(0, le),
                                F = q.pointerType === "touch" ? 10 : 2,
                                ce = {
                                    x: K,
                                    y: N
                                },
                                fe = {
                                    originalEvent: q,
                                    delta: ce
                                };
                            X ? (I.current = ce, Ao(i1, v, fe, {
                                discrete: !1
                            })) : Np(ce, S.swipeDirection, F) ? (I.current = ce, Ao(r1, g, fe, {
                                discrete: !1
                            }), q.target.setPointerCapture(q.pointerId)) : (Math.abs(ge) > F || Math.abs(le) > F) && (O.current = null)
                        }),
                        onPointerUp: $e(e.onPointerUp, q => {
                            const ge = I.current,
                                le = q.target;
                            if (le.hasPointerCapture(q.pointerId) && le.releasePointerCapture(q.pointerId), I.current = null, O.current = null, ge) {
                                const X = q.currentTarget,
                                    _ = {
                                        originalEvent: q,
                                        delta: ge
                                    };
                                Np(ge, S.swipeDirection, S.swipeThreshold) ? Ao(o1, E, _, {
                                    discrete: !0
                                }) : Ao(s1, w, _, {
                                    discrete: !0
                                }), X.addEventListener("click", Q => Q.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), S.viewport)
        })]
    }) : null
}), c1 = e => {
    const {
        __scopeToast: n,
        children: i,
        ...o
    } = e, a = oa(aa, n), [u, c] = P.useState(!1), [f, p] = P.useState(!1);
    return h1(() => c(!0)), P.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m)
    }, []), f ? null : x.jsx(Rg, {
        asChild: !0,
        children: x.jsx(sa, {
            ...o,
            children: u && x.jsxs(x.Fragment, {
                children: [a.label, " ", i]
            })
        })
    })
}, d1 = "ToastTitle", Lg = P.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        ...o
    } = e;
    return x.jsx(lt.div, {
        ...o,
        ref: n
    })
});
Lg.displayName = d1;
var f1 = "ToastDescription",
    _g = P.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            ...o
        } = e;
        return x.jsx(lt.div, {
            ...o,
            ref: n
        })
    });
_g.displayName = f1;
var Ig = "ToastAction",
    Vg = P.forwardRef((e, n) => {
        const {
            altText: i,
            ...o
        } = e;
        return i.trim() ? x.jsx(zg, {
            altText: i,
            asChild: !0,
            children: x.jsx(wc, {
                ...o,
                ref: n
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ig}\`. Expected non-empty \`string\`.`), null)
    });
Vg.displayName = Ig;
var Fg = "ToastClose",
    wc = P.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            ...o
        } = e, a = l1(Fg, i);
        return x.jsx(zg, {
            asChild: !0,
            children: x.jsx(lt.button, {
                type: "button",
                ...o,
                ref: n,
                onClick: $e(e.onClick, a.onClose)
            })
        })
    });
wc.displayName = Fg;
var zg = P.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        altText: o,
        ...a
    } = e;
    return x.jsx(lt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...a,
        ref: n
    })
});

function Bg(e) {
    const n = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && n.push(o.textContent), p1(o)) {
            const a = o.ariaHidden || o.hidden || o.style.display === "none",
                u = o.dataset.radixToastAnnounceExclude === "";
            if (!a)
                if (u) {
                    const c = o.dataset.radixToastAnnounceAlt;
                    c && n.push(c)
                } else n.push(...Bg(o))
        }
    }), n
}

function Ao(e, n, i, {
    discrete: o
}) {
    const a = i.originalEvent.currentTarget,
        u = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: i
        });
    n && a.addEventListener(e, n, {
        once: !0
    }), o ? Eg(a, u) : a.dispatchEvent(u)
}
var Np = (e, n, i = 0) => {
    const o = Math.abs(e.x),
        a = Math.abs(e.y),
        u = o > a;
    return n === "left" || n === "right" ? u && o > i : !u && a > i
};

function h1(e = () => {}) {
    const n = Zt(e);
    mr(() => {
        let i = 0,
            o = 0;
        return i = window.requestAnimationFrame(() => o = window.requestAnimationFrame(n)), () => {
            window.cancelAnimationFrame(i), window.cancelAnimationFrame(o)
        }
    }, [n])
}

function p1(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function m1(e) {
    const n = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const a = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; i.nextNode();) n.push(i.currentNode);
    return n
}

function Pu(e) {
    const n = document.activeElement;
    return e.some(i => i === n ? !0 : (i.focus(), document.activeElement !== n))
}
var g1 = Ng,
    Ug = Mg,
    $g = Og,
    Wg = Lg,
    Hg = _g,
    Kg = Vg,
    Gg = wc;

function Qg(e) {
    var n, i, o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++) e[n] && (i = Qg(e[n])) && (o && (o += " "), o += i)
        } else
            for (i in e) e[i] && (o && (o += " "), o += i);
    return o
}

function qg() {
    for (var e, n, i = 0, o = "", a = arguments.length; i < a; i++)(e = arguments[i]) && (n = Qg(e)) && (o && (o += " "), o += n);
    return o
}
const jp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Mp = qg,
    la = (e, n) => i => {
        var o;
        if (n?.variants == null) return Mp(e, i?.class, i?.className);
        const {
            variants: a,
            defaultVariants: u
        } = n, c = Object.keys(a).map(m => {
            const g = i?.[m],
                v = u?.[m];
            if (g === null) return null;
            const w = jp(g) || jp(v);
            return a[m][w]
        }), f = i && Object.entries(i).reduce((m, g) => {
            let [v, w] = g;
            return w === void 0 || (m[v] = w), m
        }, {}), p = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, g) => {
            let {
                class: v,
                className: w,
                ...E
            } = g;
            return Object.entries(E).every(b => {
                let [S, T] = b;
                return Array.isArray(T) ? T.includes({
                    ...u,
                    ...f
                } [S]) : {
                    ...u,
                    ...f
                } [S] === T
            }) ? [...m, v, w] : m
        }, []);
        return Mp(e, c, p, i?.class, i?.className)
    };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Yg = (...e) => e.filter((n, i, o) => !!n && o.indexOf(n) === i).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = P.forwardRef(({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: o,
    className: a = "",
    children: u,
    iconNode: c,
    ...f
}, p) => P.createElement("svg", {
    ref: p,
    ...v1,
    width: n,
    height: n,
    stroke: e,
    strokeWidth: o ? Number(i) * 24 / Number(n) : i,
    className: Yg("lucide", a),
    ...f
}, [...c.map(([m, g]) => P.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = (e, n) => {
    const i = P.forwardRef(({
        className: o,
        ...a
    }, u) => P.createElement(x1, {
        ref: u,
        iconNode: n,
        className: Yg(`lucide-${y1(e)}`, o),
        ...a
    }));
    return i.displayName = `${e}`, i
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = Xg("CircleAlert", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = Xg("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Sc = "-",
    P1 = e => {
        const n = E1(e),
            {
                conflictingClassGroups: i,
                conflictingClassGroupModifiers: o
            } = e;
        return {
            getClassGroupId: c => {
                const f = c.split(Sc);
                return f[0] === "" && f.length !== 1 && f.shift(), Zg(f, n) || C1(c)
            },
            getConflictingClassGroupIds: (c, f) => {
                const p = i[c] || [];
                return f && o[c] ? [...p, ...o[c]] : p
            }
        }
    },
    Zg = (e, n) => {
        if (e.length === 0) return n.classGroupId;
        const i = e[0],
            o = n.nextPart.get(i),
            a = o ? Zg(e.slice(1), o) : void 0;
        if (a) return a;
        if (n.validators.length === 0) return;
        const u = e.join(Sc);
        return n.validators.find(({
            validator: c
        }) => c(u))?.classGroupId
    },
    Dp = /^\[(.+)\]$/,
    C1 = e => {
        if (Dp.test(e)) {
            const n = Dp.exec(e)[1],
                i = n?.substring(0, n.indexOf(":"));
            if (i) return "arbitrary.." + i
        }
    },
    E1 = e => {
        const {
            theme: n,
            prefix: i
        } = e, o = {
            nextPart: new Map,
            validators: []
        };
        return b1(Object.entries(e.classGroups), i).forEach(([u, c]) => {
            Wu(c, o, u, n)
        }), o
    },
    Wu = (e, n, i, o) => {
        e.forEach(a => {
            if (typeof a == "string") {
                const u = a === "" ? n : Op(n, a);
                u.classGroupId = i;
                return
            }
            if (typeof a == "function") {
                if (T1(a)) {
                    Wu(a(o), n, i, o);
                    return
                }
                n.validators.push({
                    validator: a,
                    classGroupId: i
                });
                return
            }
            Object.entries(a).forEach(([u, c]) => {
                Wu(c, Op(n, u), i, o)
            })
        })
    },
    Op = (e, n) => {
        let i = e;
        return n.split(Sc).forEach(o => {
            i.nextPart.has(o) || i.nextPart.set(o, {
                nextPart: new Map,
                validators: []
            }), i = i.nextPart.get(o)
        }), i
    },
    T1 = e => e.isThemeGetter,
    b1 = (e, n) => n ? e.map(([i, o]) => {
        const a = o.map(u => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([c, f]) => [n + c, f])) : u);
        return [i, a]
    }) : e,
    k1 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let n = 0,
            i = new Map,
            o = new Map;
        const a = (u, c) => {
            i.set(u, c), n++, n > e && (n = 0, o = i, i = new Map)
        };
        return {
            get(u) {
                let c = i.get(u);
                if (c !== void 0) return c;
                if ((c = o.get(u)) !== void 0) return a(u, c), c
            },
            set(u, c) {
                i.has(u) ? i.set(u, c) : a(u, c)
            }
        }
    },
    Jg = "!",
    R1 = e => {
        const {
            separator: n,
            experimentalParseClassName: i
        } = e, o = n.length === 1, a = n[0], u = n.length, c = f => {
            const p = [];
            let m = 0,
                g = 0,
                v;
            for (let T = 0; T < f.length; T++) {
                let A = f[T];
                if (m === 0) {
                    if (A === a && (o || f.slice(T, T + u) === n)) {
                        p.push(f.slice(g, T)), g = T + u;
                        continue
                    }
                    if (A === "/") {
                        v = T;
                        continue
                    }
                }
                A === "[" ? m++ : A === "]" && m--
            }
            const w = p.length === 0 ? f : f.substring(g),
                E = w.startsWith(Jg),
                b = E ? w.substring(1) : w,
                S = v && v > g ? v - g : void 0;
            return {
                modifiers: p,
                hasImportantModifier: E,
                baseClassName: b,
                maybePostfixModifierPosition: S
            }
        };
        return i ? f => i({
            className: f,
            parseClassName: c
        }) : c
    },
    A1 = e => {
        if (e.length <= 1) return e;
        const n = [];
        let i = [];
        return e.forEach(o => {
            o[0] === "[" ? (n.push(...i.sort(), o), i = []) : i.push(o)
        }), n.push(...i.sort()), n
    },
    N1 = e => ({
        cache: k1(e.cacheSize),
        parseClassName: R1(e),
        ...P1(e)
    }),
    j1 = /\s+/,
    M1 = (e, n) => {
        const {
            parseClassName: i,
            getClassGroupId: o,
            getConflictingClassGroupIds: a
        } = n, u = [], c = e.trim().split(j1);
        let f = "";
        for (let p = c.length - 1; p >= 0; p -= 1) {
            const m = c[p],
                {
                    modifiers: g,
                    hasImportantModifier: v,
                    baseClassName: w,
                    maybePostfixModifierPosition: E
                } = i(m);
            let b = !!E,
                S = o(b ? w.substring(0, E) : w);
            if (!S) {
                if (!b) {
                    f = m + (f.length > 0 ? " " + f : f);
                    continue
                }
                if (S = o(w), !S) {
                    f = m + (f.length > 0 ? " " + f : f);
                    continue
                }
                b = !1
            }
            const T = A1(g).join(":"),
                A = v ? T + Jg : T,
                M = A + S;
            if (u.includes(M)) continue;
            u.push(M);
            const O = a(S, b);
            for (let I = 0; I < O.length; ++I) {
                const V = O[I];
                u.push(A + V)
            }
            f = m + (f.length > 0 ? " " + f : f)
        }
        return f
    };

function D1() {
    let e = 0,
        n, i, o = "";
    for (; e < arguments.length;)(n = arguments[e++]) && (i = ey(n)) && (o && (o += " "), o += i);
    return o
}
const ey = e => {
    if (typeof e == "string") return e;
    let n, i = "";
    for (let o = 0; o < e.length; o++) e[o] && (n = ey(e[o])) && (i && (i += " "), i += n);
    return i
};

function O1(e, ...n) {
    let i, o, a, u = c;

    function c(p) {
        const m = n.reduce((g, v) => v(g), e());
        return i = N1(m), o = i.cache.get, a = i.cache.set, u = f, f(p)
    }

    function f(p) {
        const m = o(p);
        if (m) return m;
        const g = M1(p, i);
        return a(p, g), g
    }
    return function() {
        return u(D1.apply(null, arguments))
    }
}
const Ne = e => {
        const n = i => i[e] || [];
        return n.isThemeGetter = !0, n
    },
    ty = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    L1 = /^\d+\/\d+$/,
    _1 = new Set(["px", "full", "screen"]),
    I1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    V1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    F1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    z1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    B1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    dn = e => Yr(e) || _1.has(e) || L1.test(e),
    In = e => ri(e, "length", q1),
    Yr = e => !!e && !Number.isNaN(Number(e)),
    Cu = e => ri(e, "number", Yr),
    Gi = e => !!e && Number.isInteger(Number(e)),
    U1 = e => e.endsWith("%") && Yr(e.slice(0, -1)),
    pe = e => ty.test(e),
    Vn = e => I1.test(e),
    $1 = new Set(["length", "size", "percentage"]),
    W1 = e => ri(e, $1, ny),
    H1 = e => ri(e, "position", ny),
    K1 = new Set(["image", "url"]),
    G1 = e => ri(e, K1, X1),
    Q1 = e => ri(e, "", Y1),
    Qi = () => !0,
    ri = (e, n, i) => {
        const o = ty.exec(e);
        return o ? o[1] ? typeof n == "string" ? o[1] === n : n.has(o[1]) : i(o[2]) : !1
    },
    q1 = e => V1.test(e) && !F1.test(e),
    ny = () => !1,
    Y1 = e => z1.test(e),
    X1 = e => B1.test(e),
    Z1 = () => {
        const e = Ne("colors"),
            n = Ne("spacing"),
            i = Ne("blur"),
            o = Ne("brightness"),
            a = Ne("borderColor"),
            u = Ne("borderRadius"),
            c = Ne("borderSpacing"),
            f = Ne("borderWidth"),
            p = Ne("contrast"),
            m = Ne("grayscale"),
            g = Ne("hueRotate"),
            v = Ne("invert"),
            w = Ne("gap"),
            E = Ne("gradientColorStops"),
            b = Ne("gradientColorStopPositions"),
            S = Ne("inset"),
            T = Ne("margin"),
            A = Ne("opacity"),
            M = Ne("padding"),
            O = Ne("saturate"),
            I = Ne("scale"),
            V = Ne("sepia"),
            $ = Ne("skew"),
            H = Ne("space"),
            G = Ne("translate"),
            oe = () => ["auto", "contain", "none"],
            re = () => ["auto", "hidden", "clip", "visible", "scroll"],
            de = () => ["auto", pe, n],
            ne = () => [pe, n],
            he = () => ["", dn, In],
            q = () => ["auto", Yr, pe],
            ge = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            le = () => ["solid", "dashed", "dotted", "double", "none"],
            X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            Q = () => ["", "0", pe],
            K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            N = () => [Yr, pe];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Qi],
                spacing: [dn, In],
                blur: ["none", "", Vn, pe],
                brightness: N(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Vn, pe],
                borderSpacing: ne(),
                borderWidth: he(),
                contrast: N(),
                grayscale: Q(),
                hueRotate: N(),
                invert: Q(),
                gap: ne(),
                gradientColorStops: [e],
                gradientColorStopPositions: [U1, In],
                inset: de(),
                margin: de(),
                opacity: N(),
                padding: ne(),
                saturate: N(),
                scale: N(),
                sepia: Q(),
                skew: N(),
                space: ne(),
                translate: ne()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", pe]
                }],
                container: ["container"],
                columns: [{
                    columns: [Vn]
                }],
                "break-after": [{
                    "break-after": K()
                }],
                "break-before": [{
                    "break-before": K()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...ge(), pe]
                }],
                overflow: [{
                    overflow: re()
                }],
                "overflow-x": [{
                    "overflow-x": re()
                }],
                "overflow-y": [{
                    "overflow-y": re()
                }],
                overscroll: [{
                    overscroll: oe()
                }],
                "overscroll-x": [{
                    "overscroll-x": oe()
                }],
                "overscroll-y": [{
                    "overscroll-y": oe()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [S]
                }],
                "inset-x": [{
                    "inset-x": [S]
                }],
                "inset-y": [{
                    "inset-y": [S]
                }],
                start: [{
                    start: [S]
                }],
                end: [{
                    end: [S]
                }],
                top: [{
                    top: [S]
                }],
                right: [{
                    right: [S]
                }],
                bottom: [{
                    bottom: [S]
                }],
                left: [{
                    left: [S]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Gi, pe]
                }],
                basis: [{
                    basis: de()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", pe]
                }],
                grow: [{
                    grow: Q()
                }],
                shrink: [{
                    shrink: Q()
                }],
                order: [{
                    order: ["first", "last", "none", Gi, pe]
                }],
                "grid-cols": [{
                    "grid-cols": [Qi]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Gi, pe]
                    }, pe]
                }],
                "col-start": [{
                    "col-start": q()
                }],
                "col-end": [{
                    "col-end": q()
                }],
                "grid-rows": [{
                    "grid-rows": [Qi]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Gi, pe]
                    }, pe]
                }],
                "row-start": [{
                    "row-start": q()
                }],
                "row-end": [{
                    "row-end": q()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", pe]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", pe]
                }],
                gap: [{
                    gap: [w]
                }],
                "gap-x": [{
                    "gap-x": [w]
                }],
                "gap-y": [{
                    "gap-y": [w]
                }],
                "justify-content": [{
                    justify: ["normal", ..._()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ..._(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [..._(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [M]
                }],
                px: [{
                    px: [M]
                }],
                py: [{
                    py: [M]
                }],
                ps: [{
                    ps: [M]
                }],
                pe: [{
                    pe: [M]
                }],
                pt: [{
                    pt: [M]
                }],
                pr: [{
                    pr: [M]
                }],
                pb: [{
                    pb: [M]
                }],
                pl: [{
                    pl: [M]
                }],
                m: [{
                    m: [T]
                }],
                mx: [{
                    mx: [T]
                }],
                my: [{
                    my: [T]
                }],
                ms: [{
                    ms: [T]
                }],
                me: [{
                    me: [T]
                }],
                mt: [{
                    mt: [T]
                }],
                mr: [{
                    mr: [T]
                }],
                mb: [{
                    mb: [T]
                }],
                ml: [{
                    ml: [T]
                }],
                "space-x": [{
                    "space-x": [H]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [H]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, n]
                }],
                "min-w": [{
                    "min-w": [pe, n, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [pe, n, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Vn]
                    }, Vn]
                }],
                h: [{
                    h: [pe, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [pe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [pe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [pe, n, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Vn, In]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Cu]
                }],
                "font-family": [{
                    font: [Qi]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Yr, Cu]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", dn, pe]
                }],
                "list-image": [{
                    "list-image": ["none", pe]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", pe]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [A]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [A]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...le(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", dn, In]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", dn, pe]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: ne()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", pe]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [A]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...ge(), H1]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", W1]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, G1]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [b]
                }],
                "gradient-via-pos": [{
                    via: [b]
                }],
                "gradient-to-pos": [{
                    to: [b]
                }],
                "gradient-from": [{
                    from: [E]
                }],
                "gradient-via": [{
                    via: [E]
                }],
                "gradient-to": [{
                    to: [E]
                }],
                rounded: [{
                    rounded: [u]
                }],
                "rounded-s": [{
                    "rounded-s": [u]
                }],
                "rounded-e": [{
                    "rounded-e": [u]
                }],
                "rounded-t": [{
                    "rounded-t": [u]
                }],
                "rounded-r": [{
                    "rounded-r": [u]
                }],
                "rounded-b": [{
                    "rounded-b": [u]
                }],
                "rounded-l": [{
                    "rounded-l": [u]
                }],
                "rounded-ss": [{
                    "rounded-ss": [u]
                }],
                "rounded-se": [{
                    "rounded-se": [u]
                }],
                "rounded-ee": [{
                    "rounded-ee": [u]
                }],
                "rounded-es": [{
                    "rounded-es": [u]
                }],
                "rounded-tl": [{
                    "rounded-tl": [u]
                }],
                "rounded-tr": [{
                    "rounded-tr": [u]
                }],
                "rounded-br": [{
                    "rounded-br": [u]
                }],
                "rounded-bl": [{
                    "rounded-bl": [u]
                }],
                "border-w": [{
                    border: [f]
                }],
                "border-w-x": [{
                    "border-x": [f]
                }],
                "border-w-y": [{
                    "border-y": [f]
                }],
                "border-w-s": [{
                    "border-s": [f]
                }],
                "border-w-e": [{
                    "border-e": [f]
                }],
                "border-w-t": [{
                    "border-t": [f]
                }],
                "border-w-r": [{
                    "border-r": [f]
                }],
                "border-w-b": [{
                    "border-b": [f]
                }],
                "border-w-l": [{
                    "border-l": [f]
                }],
                "border-opacity": [{
                    "border-opacity": [A]
                }],
                "border-style": [{
                    border: [...le(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [f]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [f]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [A]
                }],
                "divide-style": [{
                    divide: le()
                }],
                "border-color": [{
                    border: [a]
                }],
                "border-color-x": [{
                    "border-x": [a]
                }],
                "border-color-y": [{
                    "border-y": [a]
                }],
                "border-color-s": [{
                    "border-s": [a]
                }],
                "border-color-e": [{
                    "border-e": [a]
                }],
                "border-color-t": [{
                    "border-t": [a]
                }],
                "border-color-r": [{
                    "border-r": [a]
                }],
                "border-color-b": [{
                    "border-b": [a]
                }],
                "border-color-l": [{
                    "border-l": [a]
                }],
                "divide-color": [{
                    divide: [a]
                }],
                "outline-style": [{
                    outline: ["", ...le()]
                }],
                "outline-offset": [{
                    "outline-offset": [dn, pe]
                }],
                "outline-w": [{
                    outline: [dn, In]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: he()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [A]
                }],
                "ring-offset-w": [{
                    "ring-offset": [dn, In]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Vn, Q1]
                }],
                "shadow-color": [{
                    shadow: [Qi]
                }],
                opacity: [{
                    opacity: [A]
                }],
                "mix-blend": [{
                    "mix-blend": [...X(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": X()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [i]
                }],
                brightness: [{
                    brightness: [o]
                }],
                contrast: [{
                    contrast: [p]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Vn, pe]
                }],
                grayscale: [{
                    grayscale: [m]
                }],
                "hue-rotate": [{
                    "hue-rotate": [g]
                }],
                invert: [{
                    invert: [v]
                }],
                saturate: [{
                    saturate: [O]
                }],
                sepia: [{
                    sepia: [V]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [i]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [o]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [p]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [m]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [g]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [v]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [A]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [O]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [V]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [c]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [c]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [c]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
                }],
                duration: [{
                    duration: N()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", pe]
                }],
                delay: [{
                    delay: N()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", pe]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [I]
                }],
                "scale-x": [{
                    "scale-x": [I]
                }],
                "scale-y": [{
                    "scale-y": [I]
                }],
                rotate: [{
                    rotate: [Gi, pe]
                }],
                "translate-x": [{
                    "translate-x": [G]
                }],
                "translate-y": [{
                    "translate-y": [G]
                }],
                "skew-x": [{
                    "skew-x": [$]
                }],
                "skew-y": [{
                    "skew-y": [$]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": ne()
                }],
                "scroll-mx": [{
                    "scroll-mx": ne()
                }],
                "scroll-my": [{
                    "scroll-my": ne()
                }],
                "scroll-ms": [{
                    "scroll-ms": ne()
                }],
                "scroll-me": [{
                    "scroll-me": ne()
                }],
                "scroll-mt": [{
                    "scroll-mt": ne()
                }],
                "scroll-mr": [{
                    "scroll-mr": ne()
                }],
                "scroll-mb": [{
                    "scroll-mb": ne()
                }],
                "scroll-ml": [{
                    "scroll-ml": ne()
                }],
                "scroll-p": [{
                    "scroll-p": ne()
                }],
                "scroll-px": [{
                    "scroll-px": ne()
                }],
                "scroll-py": [{
                    "scroll-py": ne()
                }],
                "scroll-ps": [{
                    "scroll-ps": ne()
                }],
                "scroll-pe": [{
                    "scroll-pe": ne()
                }],
                "scroll-pt": [{
                    "scroll-pt": ne()
                }],
                "scroll-pr": [{
                    "scroll-pr": ne()
                }],
                "scroll-pb": [{
                    "scroll-pb": ne()
                }],
                "scroll-pl": [{
                    "scroll-pl": ne()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", pe]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [dn, In, Cu]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    J1 = O1(Z1);

function Ge(...e) {
    return J1(qg(e))
}
const eP = g1,
    ry = P.forwardRef(({
        className: e,
        ...n
    }, i) => x.jsx(Ug, {
        ref: i,
        className: Ge("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...n
    }));
ry.displayName = Ug.displayName;
const tP = la("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    iy = P.forwardRef(({
        className: e,
        variant: n,
        ...i
    }, o) => x.jsx($g, {
        ref: o,
        className: Ge(tP({
            variant: n
        }), e),
        ...i
    }));
iy.displayName = $g.displayName;
const nP = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx(Kg, {
    ref: i,
    className: Ge("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...n
}));
nP.displayName = Kg.displayName;
const sy = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx(Gg, {
    ref: i,
    className: Ge("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...n,
    children: x.jsx(S1, {
        className: "h-4 w-4"
    })
}));
sy.displayName = Gg.displayName;
const oy = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx(Wg, {
    ref: i,
    className: Ge("text-sm font-semibold", e),
    ...n
}));
oy.displayName = Wg.displayName;
const ay = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx(Hg, {
    ref: i,
    className: Ge("text-sm opacity-90", e),
    ...n
}));
ay.displayName = Hg.displayName;

function rP() {
    const {
        toasts: e
    } = Sg();
    return x.jsxs(eP, {
        children: [e.map(function({
            id: n,
            title: i,
            description: o,
            action: a,
            ...u
        }) {
            return x.jsxs(iy, {
                ...u,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [i && x.jsx(oy, {
                        children: i
                    }), o && x.jsx(ay, {
                        children: o
                    })]
                }), a, x.jsx(sy, {})]
            }, n)
        }), x.jsx(ry, {})]
    })
}
const iP = ["top", "right", "bottom", "left"],
    $n = Math.min,
    St = Math.max,
    $o = Math.round,
    No = Math.floor,
    qt = e => ({
        x: e,
        y: e
    }),
    sP = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    oP = {
        start: "end",
        end: "start"
    };

function Hu(e, n, i) {
    return St(e, $n(n, i))
}

function mn(e, n) {
    return typeof e == "function" ? e(n) : e
}

function gn(e) {
    return e.split("-")[0]
}

function ii(e) {
    return e.split("-")[1]
}

function Pc(e) {
    return e === "x" ? "y" : "x"
}

function Cc(e) {
    return e === "y" ? "height" : "width"
}

function Wn(e) {
    return ["top", "bottom"].includes(gn(e)) ? "y" : "x"
}

function Ec(e) {
    return Pc(Wn(e))
}

function aP(e, n, i) {
    i === void 0 && (i = !1);
    const o = ii(e),
        a = Ec(e),
        u = Cc(a);
    let c = a === "x" ? o === (i ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return n.reference[u] > n.floating[u] && (c = Wo(c)), [c, Wo(c)]
}

function lP(e) {
    const n = Wo(e);
    return [Ku(e), n, Ku(n)]
}

function Ku(e) {
    return e.replace(/start|end/g, n => oP[n])
}

function uP(e, n, i) {
    const o = ["left", "right"],
        a = ["right", "left"],
        u = ["top", "bottom"],
        c = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return i ? n ? a : o : n ? o : a;
        case "left":
        case "right":
            return n ? u : c;
        default:
            return []
    }
}

function cP(e, n, i, o) {
    const a = ii(e);
    let u = uP(gn(e), i === "start", o);
    return a && (u = u.map(c => c + "-" + a), n && (u = u.concat(u.map(Ku)))), u
}

function Wo(e) {
    return e.replace(/left|right|bottom|top/g, n => sP[n])
}

function dP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function ly(e) {
    return typeof e != "number" ? dP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Ho(e) {
    const {
        x: n,
        y: i,
        width: o,
        height: a
    } = e;
    return {
        width: o,
        height: a,
        top: i,
        left: n,
        right: n + o,
        bottom: i + a,
        x: n,
        y: i
    }
}

function Lp(e, n, i) {
    let {
        reference: o,
        floating: a
    } = e;
    const u = Wn(n),
        c = Ec(n),
        f = Cc(c),
        p = gn(n),
        m = u === "y",
        g = o.x + o.width / 2 - a.width / 2,
        v = o.y + o.height / 2 - a.height / 2,
        w = o[f] / 2 - a[f] / 2;
    let E;
    switch (p) {
        case "top":
            E = {
                x: g,
                y: o.y - a.height
            };
            break;
        case "bottom":
            E = {
                x: g,
                y: o.y + o.height
            };
            break;
        case "right":
            E = {
                x: o.x + o.width,
                y: v
            };
            break;
        case "left":
            E = {
                x: o.x - a.width,
                y: v
            };
            break;
        default:
            E = {
                x: o.x,
                y: o.y
            }
    }
    switch (ii(n)) {
        case "start":
            E[c] -= w * (i && m ? -1 : 1);
            break;
        case "end":
            E[c] += w * (i && m ? -1 : 1);
            break
    }
    return E
}
const fP = async (e, n, i) => {
    const {
        placement: o = "bottom",
        strategy: a = "absolute",
        middleware: u = [],
        platform: c
    } = i, f = u.filter(Boolean), p = await (c.isRTL == null ? void 0 : c.isRTL(n));
    let m = await c.getElementRects({
            reference: e,
            floating: n,
            strategy: a
        }),
        {
            x: g,
            y: v
        } = Lp(m, o, p),
        w = o,
        E = {},
        b = 0;
    for (let S = 0; S < f.length; S++) {
        const {
            name: T,
            fn: A
        } = f[S], {
            x: M,
            y: O,
            data: I,
            reset: V
        } = await A({
            x: g,
            y: v,
            initialPlacement: o,
            placement: w,
            strategy: a,
            middlewareData: E,
            rects: m,
            platform: c,
            elements: {
                reference: e,
                floating: n
            }
        });
        g = M ?? g, v = O ?? v, E = {
            ...E,
            [T]: {
                ...E[T],
                ...I
            }
        }, V && b <= 50 && (b++, typeof V == "object" && (V.placement && (w = V.placement), V.rects && (m = V.rects === !0 ? await c.getElementRects({
            reference: e,
            floating: n,
            strategy: a
        }) : V.rects), {
            x: g,
            y: v
        } = Lp(m, w, p)), S = -1)
    }
    return {
        x: g,
        y: v,
        placement: w,
        strategy: a,
        middlewareData: E
    }
};
async function is(e, n) {
    var i;
    n === void 0 && (n = {});
    const {
        x: o,
        y: a,
        platform: u,
        rects: c,
        elements: f,
        strategy: p
    } = e, {
        boundary: m = "clippingAncestors",
        rootBoundary: g = "viewport",
        elementContext: v = "floating",
        altBoundary: w = !1,
        padding: E = 0
    } = mn(n, e), b = ly(E), T = f[w ? v === "floating" ? "reference" : "floating" : v], A = Ho(await u.getClippingRect({
        element: (i = await (u.isElement == null ? void 0 : u.isElement(T))) == null || i ? T : T.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(f.floating)),
        boundary: m,
        rootBoundary: g,
        strategy: p
    })), M = v === "floating" ? {
        x: o,
        y: a,
        width: c.floating.width,
        height: c.floating.height
    } : c.reference, O = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f.floating)), I = await (u.isElement == null ? void 0 : u.isElement(O)) ? await (u.getScale == null ? void 0 : u.getScale(O)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, V = Ho(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: f,
        rect: M,
        offsetParent: O,
        strategy: p
    }) : M);
    return {
        top: (A.top - V.top + b.top) / I.y,
        bottom: (V.bottom - A.bottom + b.bottom) / I.y,
        left: (A.left - V.left + b.left) / I.x,
        right: (V.right - A.right + b.right) / I.x
    }
}
const hP = e => ({
        name: "arrow",
        options: e,
        async fn(n) {
            const {
                x: i,
                y: o,
                placement: a,
                rects: u,
                platform: c,
                elements: f,
                middlewareData: p
            } = n, {
                element: m,
                padding: g = 0
            } = mn(e, n) || {};
            if (m == null) return {};
            const v = ly(g),
                w = {
                    x: i,
                    y: o
                },
                E = Ec(a),
                b = Cc(E),
                S = await c.getDimensions(m),
                T = E === "y",
                A = T ? "top" : "left",
                M = T ? "bottom" : "right",
                O = T ? "clientHeight" : "clientWidth",
                I = u.reference[b] + u.reference[E] - w[E] - u.floating[b],
                V = w[E] - u.reference[E],
                $ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
            let H = $ ? $[O] : 0;
            (!H || !await (c.isElement == null ? void 0 : c.isElement($))) && (H = f.floating[O] || u.floating[b]);
            const G = I / 2 - V / 2,
                oe = H / 2 - S[b] / 2 - 1,
                re = $n(v[A], oe),
                de = $n(v[M], oe),
                ne = re,
                he = H - S[b] - de,
                q = H / 2 - S[b] / 2 + G,
                ge = Hu(ne, q, he),
                le = !p.arrow && ii(a) != null && q !== ge && u.reference[b] / 2 - (q < ne ? re : de) - S[b] / 2 < 0,
                X = le ? q < ne ? q - ne : q - he : 0;
            return {
                [E]: w[E] + X,
                data: {
                    [E]: ge,
                    centerOffset: q - ge - X,
                    ...le && {
                        alignmentOffset: X
                    }
                },
                reset: le
            }
        }
    }),
    pP = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(n) {
                var i, o;
                const {
                    placement: a,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: f,
                    platform: p,
                    elements: m
                } = n, {
                    mainAxis: g = !0,
                    crossAxis: v = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: E = "bestFit",
                    fallbackAxisSideDirection: b = "none",
                    flipAlignment: S = !0,
                    ...T
                } = mn(e, n);
                if ((i = u.arrow) != null && i.alignmentOffset) return {};
                const A = gn(a),
                    M = Wn(f),
                    O = gn(f) === f,
                    I = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
                    V = w || (O || !S ? [Wo(f)] : lP(f)),
                    $ = b !== "none";
                !w && $ && V.push(...cP(f, S, b, I));
                const H = [f, ...V],
                    G = await is(n, T),
                    oe = [];
                let re = ((o = u.flip) == null ? void 0 : o.overflows) || [];
                if (g && oe.push(G[A]), v) {
                    const q = aP(a, c, I);
                    oe.push(G[q[0]], G[q[1]])
                }
                if (re = [...re, {
                        placement: a,
                        overflows: oe
                    }], !oe.every(q => q <= 0)) {
                    var de, ne;
                    const q = (((de = u.flip) == null ? void 0 : de.index) || 0) + 1,
                        ge = H[q];
                    if (ge) return {
                        data: {
                            index: q,
                            overflows: re
                        },
                        reset: {
                            placement: ge
                        }
                    };
                    let le = (ne = re.filter(X => X.overflows[0] <= 0).sort((X, _) => X.overflows[1] - _.overflows[1])[0]) == null ? void 0 : ne.placement;
                    if (!le) switch (E) {
                        case "bestFit": {
                            var he;
                            const X = (he = re.filter(_ => {
                                if ($) {
                                    const Q = Wn(_.placement);
                                    return Q === M || Q === "y"
                                }
                                return !0
                            }).map(_ => [_.placement, _.overflows.filter(Q => Q > 0).reduce((Q, K) => Q + K, 0)]).sort((_, Q) => _[1] - Q[1])[0]) == null ? void 0 : he[0];
                            X && (le = X);
                            break
                        }
                        case "initialPlacement":
                            le = f;
                            break
                    }
                    if (a !== le) return {
                        reset: {
                            placement: le
                        }
                    }
                }
                return {}
            }
        }
    };

function _p(e, n) {
    return {
        top: e.top - n.height,
        right: e.right - n.width,
        bottom: e.bottom - n.height,
        left: e.left - n.width
    }
}

function Ip(e) {
    return iP.some(n => e[n] >= 0)
}
const mP = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(n) {
            const {
                rects: i
            } = n, {
                strategy: o = "referenceHidden",
                ...a
            } = mn(e, n);
            switch (o) {
                case "referenceHidden": {
                    const u = await is(n, {
                            ...a,
                            elementContext: "reference"
                        }),
                        c = _p(u, i.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: Ip(c)
                        }
                    }
                }
                case "escaped": {
                    const u = await is(n, {
                            ...a,
                            altBoundary: !0
                        }),
                        c = _p(u, i.floating);
                    return {
                        data: {
                            escapedOffsets: c,
                            escaped: Ip(c)
                        }
                    }
                }
                default:
                    return {}
            }
        }
    }
};
async function gP(e, n) {
    const {
        placement: i,
        platform: o,
        elements: a
    } = e, u = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), c = gn(i), f = ii(i), p = Wn(i) === "y", m = ["left", "top"].includes(c) ? -1 : 1, g = u && p ? -1 : 1, v = mn(n, e);
    let {
        mainAxis: w,
        crossAxis: E,
        alignmentAxis: b
    } = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis
    };
    return f && typeof b == "number" && (E = f === "end" ? b * -1 : b), p ? {
        x: E * g,
        y: w * m
    } : {
        x: w * m,
        y: E * g
    }
}
const yP = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(n) {
                var i, o;
                const {
                    x: a,
                    y: u,
                    placement: c,
                    middlewareData: f
                } = n, p = await gP(n, e);
                return c === ((i = f.offset) == null ? void 0 : i.placement) && (o = f.arrow) != null && o.alignmentOffset ? {} : {
                    x: a + p.x,
                    y: u + p.y,
                    data: {
                        ...p,
                        placement: c
                    }
                }
            }
        }
    },
    vP = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(n) {
                const {
                    x: i,
                    y: o,
                    placement: a
                } = n, {
                    mainAxis: u = !0,
                    crossAxis: c = !1,
                    limiter: f = {
                        fn: T => {
                            let {
                                x: A,
                                y: M
                            } = T;
                            return {
                                x: A,
                                y: M
                            }
                        }
                    },
                    ...p
                } = mn(e, n), m = {
                    x: i,
                    y: o
                }, g = await is(n, p), v = Wn(gn(a)), w = Pc(v);
                let E = m[w],
                    b = m[v];
                if (u) {
                    const T = w === "y" ? "top" : "left",
                        A = w === "y" ? "bottom" : "right",
                        M = E + g[T],
                        O = E - g[A];
                    E = Hu(M, E, O)
                }
                if (c) {
                    const T = v === "y" ? "top" : "left",
                        A = v === "y" ? "bottom" : "right",
                        M = b + g[T],
                        O = b - g[A];
                    b = Hu(M, b, O)
                }
                const S = f.fn({
                    ...n,
                    [w]: E,
                    [v]: b
                });
                return {
                    ...S,
                    data: {
                        x: S.x - i,
                        y: S.y - o,
                        enabled: {
                            [w]: u,
                            [v]: c
                        }
                    }
                }
            }
        }
    },
    xP = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(n) {
                const {
                    x: i,
                    y: o,
                    placement: a,
                    rects: u,
                    middlewareData: c
                } = n, {
                    offset: f = 0,
                    mainAxis: p = !0,
                    crossAxis: m = !0
                } = mn(e, n), g = {
                    x: i,
                    y: o
                }, v = Wn(a), w = Pc(v);
                let E = g[w],
                    b = g[v];
                const S = mn(f, n),
                    T = typeof S == "number" ? {
                        mainAxis: S,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...S
                    };
                if (p) {
                    const O = w === "y" ? "height" : "width",
                        I = u.reference[w] - u.floating[O] + T.mainAxis,
                        V = u.reference[w] + u.reference[O] - T.mainAxis;
                    E < I ? E = I : E > V && (E = V)
                }
                if (m) {
                    var A, M;
                    const O = w === "y" ? "width" : "height",
                        I = ["top", "left"].includes(gn(a)),
                        V = u.reference[v] - u.floating[O] + (I && ((A = c.offset) == null ? void 0 : A[v]) || 0) + (I ? 0 : T.crossAxis),
                        $ = u.reference[v] + u.reference[O] + (I ? 0 : ((M = c.offset) == null ? void 0 : M[v]) || 0) - (I ? T.crossAxis : 0);
                    b < V ? b = V : b > $ && (b = $)
                }
                return {
                    [w]: E,
                    [v]: b
                }
            }
        }
    },
    wP = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(n) {
                var i, o;
                const {
                    placement: a,
                    rects: u,
                    platform: c,
                    elements: f
                } = n, {
                    apply: p = () => {},
                    ...m
                } = mn(e, n), g = await is(n, m), v = gn(a), w = ii(a), E = Wn(a) === "y", {
                    width: b,
                    height: S
                } = u.floating;
                let T, A;
                v === "top" || v === "bottom" ? (T = v, A = w === (await (c.isRTL == null ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (A = v, T = w === "end" ? "top" : "bottom");
                const M = S - g.top - g.bottom,
                    O = b - g.left - g.right,
                    I = $n(S - g[T], M),
                    V = $n(b - g[A], O),
                    $ = !n.middlewareData.shift;
                let H = I,
                    G = V;
                if ((i = n.middlewareData.shift) != null && i.enabled.x && (G = O), (o = n.middlewareData.shift) != null && o.enabled.y && (H = M), $ && !w) {
                    const re = St(g.left, 0),
                        de = St(g.right, 0),
                        ne = St(g.top, 0),
                        he = St(g.bottom, 0);
                    E ? G = b - 2 * (re !== 0 || de !== 0 ? re + de : St(g.left, g.right)) : H = S - 2 * (ne !== 0 || he !== 0 ? ne + he : St(g.top, g.bottom))
                }
                await p({
                    ...n,
                    availableWidth: G,
                    availableHeight: H
                });
                const oe = await c.getDimensions(f.floating);
                return b !== oe.width || S !== oe.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function ua() {
    return typeof window < "u"
}

function si(e) {
    return uy(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Pt(e) {
    var n;
    return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window
}

function en(e) {
    var n;
    return (n = (uy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement
}

function uy(e) {
    return ua() ? e instanceof Node || e instanceof Pt(e).Node : !1
}

function Ut(e) {
    return ua() ? e instanceof Element || e instanceof Pt(e).Element : !1
}

function Jt(e) {
    return ua() ? e instanceof HTMLElement || e instanceof Pt(e).HTMLElement : !1
}

function Vp(e) {
    return !ua() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pt(e).ShadowRoot
}

function ds(e) {
    const {
        overflow: n,
        overflowX: i,
        overflowY: o,
        display: a
    } = $t(e);
    return /auto|scroll|overlay|hidden|clip/.test(n + o + i) && !["inline", "contents"].includes(a)
}

function SP(e) {
    return ["table", "td", "th"].includes(si(e))
}

function ca(e) {
    return [":popover-open", ":modal"].some(n => {
        try {
            return e.matches(n)
        } catch {
            return !1
        }
    })
}

function Tc(e) {
    const n = bc(),
        i = Ut(e) ? $t(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(o => i[o] ? i[o] !== "none" : !1) || (i.containerType ? i.containerType !== "normal" : !1) || !n && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !n && (i.filter ? i.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(o => (i.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (i.contain || "").includes(o))
}

function PP(e) {
    let n = Hn(e);
    for (; Jt(n) && !Zr(n);) {
        if (Tc(n)) return n;
        if (ca(n)) return null;
        n = Hn(n)
    }
    return null
}

function bc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Zr(e) {
    return ["html", "body", "#document"].includes(si(e))
}

function $t(e) {
    return Pt(e).getComputedStyle(e)
}

function da(e) {
    return Ut(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Hn(e) {
    if (si(e) === "html") return e;
    const n = e.assignedSlot || e.parentNode || Vp(e) && e.host || en(e);
    return Vp(n) ? n.host : n
}

function cy(e) {
    const n = Hn(e);
    return Zr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Jt(n) && ds(n) ? n : cy(n)
}

function ss(e, n, i) {
    var o;
    n === void 0 && (n = []), i === void 0 && (i = !0);
    const a = cy(e),
        u = a === ((o = e.ownerDocument) == null ? void 0 : o.body),
        c = Pt(a);
    if (u) {
        const f = Gu(c);
        return n.concat(c, c.visualViewport || [], ds(a) ? a : [], f && i ? ss(f) : [])
    }
    return n.concat(a, ss(a, [], i))
}

function Gu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function dy(e) {
    const n = $t(e);
    let i = parseFloat(n.width) || 0,
        o = parseFloat(n.height) || 0;
    const a = Jt(e),
        u = a ? e.offsetWidth : i,
        c = a ? e.offsetHeight : o,
        f = $o(i) !== u || $o(o) !== c;
    return f && (i = u, o = c), {
        width: i,
        height: o,
        $: f
    }
}

function kc(e) {
    return Ut(e) ? e : e.contextElement
}

function Xr(e) {
    const n = kc(e);
    if (!Jt(n)) return qt(1);
    const i = n.getBoundingClientRect(),
        {
            width: o,
            height: a,
            $: u
        } = dy(n);
    let c = (u ? $o(i.width) : i.width) / o,
        f = (u ? $o(i.height) : i.height) / a;
    return (!c || !Number.isFinite(c)) && (c = 1), (!f || !Number.isFinite(f)) && (f = 1), {
        x: c,
        y: f
    }
}
const CP = qt(0);

function fy(e) {
    const n = Pt(e);
    return !bc() || !n.visualViewport ? CP : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}

function EP(e, n, i) {
    return n === void 0 && (n = !1), !i || n && i !== Pt(e) ? !1 : n
}

function gr(e, n, i, o) {
    n === void 0 && (n = !1), i === void 0 && (i = !1);
    const a = e.getBoundingClientRect(),
        u = kc(e);
    let c = qt(1);
    n && (o ? Ut(o) && (c = Xr(o)) : c = Xr(e));
    const f = EP(u, i, o) ? fy(u) : qt(0);
    let p = (a.left + f.x) / c.x,
        m = (a.top + f.y) / c.y,
        g = a.width / c.x,
        v = a.height / c.y;
    if (u) {
        const w = Pt(u),
            E = o && Ut(o) ? Pt(o) : o;
        let b = w,
            S = Gu(b);
        for (; S && o && E !== b;) {
            const T = Xr(S),
                A = S.getBoundingClientRect(),
                M = $t(S),
                O = A.left + (S.clientLeft + parseFloat(M.paddingLeft)) * T.x,
                I = A.top + (S.clientTop + parseFloat(M.paddingTop)) * T.y;
            p *= T.x, m *= T.y, g *= T.x, v *= T.y, p += O, m += I, b = Pt(S), S = Gu(b)
        }
    }
    return Ho({
        width: g,
        height: v,
        x: p,
        y: m
    })
}

function Rc(e, n) {
    const i = da(e).scrollLeft;
    return n ? n.left + i : gr(en(e)).left + i
}

function hy(e, n, i) {
    i === void 0 && (i = !1);
    const o = e.getBoundingClientRect(),
        a = o.left + n.scrollLeft - (i ? 0 : Rc(e, o)),
        u = o.top + n.scrollTop;
    return {
        x: a,
        y: u
    }
}

function TP(e) {
    let {
        elements: n,
        rect: i,
        offsetParent: o,
        strategy: a
    } = e;
    const u = a === "fixed",
        c = en(o),
        f = n ? ca(n.floating) : !1;
    if (o === c || f && u) return i;
    let p = {
            scrollLeft: 0,
            scrollTop: 0
        },
        m = qt(1);
    const g = qt(0),
        v = Jt(o);
    if ((v || !v && !u) && ((si(o) !== "body" || ds(c)) && (p = da(o)), Jt(o))) {
        const E = gr(o);
        m = Xr(o), g.x = E.x + o.clientLeft, g.y = E.y + o.clientTop
    }
    const w = c && !v && !u ? hy(c, p, !0) : qt(0);
    return {
        width: i.width * m.x,
        height: i.height * m.y,
        x: i.x * m.x - p.scrollLeft * m.x + g.x + w.x,
        y: i.y * m.y - p.scrollTop * m.y + g.y + w.y
    }
}

function bP(e) {
    return Array.from(e.getClientRects())
}

function kP(e) {
    const n = en(e),
        i = da(e),
        o = e.ownerDocument.body,
        a = St(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth),
        u = St(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
    let c = -i.scrollLeft + Rc(e);
    const f = -i.scrollTop;
    return $t(o).direction === "rtl" && (c += St(n.clientWidth, o.clientWidth) - a), {
        width: a,
        height: u,
        x: c,
        y: f
    }
}

function RP(e, n) {
    const i = Pt(e),
        o = en(e),
        a = i.visualViewport;
    let u = o.clientWidth,
        c = o.clientHeight,
        f = 0,
        p = 0;
    if (a) {
        u = a.width, c = a.height;
        const m = bc();
        (!m || m && n === "fixed") && (f = a.offsetLeft, p = a.offsetTop)
    }
    return {
        width: u,
        height: c,
        x: f,
        y: p
    }
}

function AP(e, n) {
    const i = gr(e, !0, n === "fixed"),
        o = i.top + e.clientTop,
        a = i.left + e.clientLeft,
        u = Jt(e) ? Xr(e) : qt(1),
        c = e.clientWidth * u.x,
        f = e.clientHeight * u.y,
        p = a * u.x,
        m = o * u.y;
    return {
        width: c,
        height: f,
        x: p,
        y: m
    }
}

function Fp(e, n, i) {
    let o;
    if (n === "viewport") o = RP(e, i);
    else if (n === "document") o = kP(en(e));
    else if (Ut(n)) o = AP(n, i);
    else {
        const a = fy(e);
        o = {
            x: n.x - a.x,
            y: n.y - a.y,
            width: n.width,
            height: n.height
        }
    }
    return Ho(o)
}

function py(e, n) {
    const i = Hn(e);
    return i === n || !Ut(i) || Zr(i) ? !1 : $t(i).position === "fixed" || py(i, n)
}

function NP(e, n) {
    const i = n.get(e);
    if (i) return i;
    let o = ss(e, [], !1).filter(f => Ut(f) && si(f) !== "body"),
        a = null;
    const u = $t(e).position === "fixed";
    let c = u ? Hn(e) : e;
    for (; Ut(c) && !Zr(c);) {
        const f = $t(c),
            p = Tc(c);
        !p && f.position === "fixed" && (a = null), (u ? !p && !a : !p && f.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ds(c) && !p && py(e, c)) ? o = o.filter(g => g !== c) : a = f, c = Hn(c)
    }
    return n.set(e, o), o
}

function jP(e) {
    let {
        element: n,
        boundary: i,
        rootBoundary: o,
        strategy: a
    } = e;
    const c = [...i === "clippingAncestors" ? ca(n) ? [] : NP(n, this._c) : [].concat(i), o],
        f = c[0],
        p = c.reduce((m, g) => {
            const v = Fp(n, g, a);
            return m.top = St(v.top, m.top), m.right = $n(v.right, m.right), m.bottom = $n(v.bottom, m.bottom), m.left = St(v.left, m.left), m
        }, Fp(n, f, a));
    return {
        width: p.right - p.left,
        height: p.bottom - p.top,
        x: p.left,
        y: p.top
    }
}

function MP(e) {
    const {
        width: n,
        height: i
    } = dy(e);
    return {
        width: n,
        height: i
    }
}

function DP(e, n, i) {
    const o = Jt(n),
        a = en(n),
        u = i === "fixed",
        c = gr(e, !0, u, n);
    let f = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = qt(0);
    if (o || !o && !u)
        if ((si(n) !== "body" || ds(a)) && (f = da(n)), o) {
            const w = gr(n, !0, u, n);
            p.x = w.x + n.clientLeft, p.y = w.y + n.clientTop
        } else a && (p.x = Rc(a));
    const m = a && !o && !u ? hy(a, f) : qt(0),
        g = c.left + f.scrollLeft - p.x - m.x,
        v = c.top + f.scrollTop - p.y - m.y;
    return {
        x: g,
        y: v,
        width: c.width,
        height: c.height
    }
}

function Eu(e) {
    return $t(e).position === "static"
}

function zp(e, n) {
    if (!Jt(e) || $t(e).position === "fixed") return null;
    if (n) return n(e);
    let i = e.offsetParent;
    return en(e) === i && (i = i.ownerDocument.body), i
}

function my(e, n) {
    const i = Pt(e);
    if (ca(e)) return i;
    if (!Jt(e)) {
        let a = Hn(e);
        for (; a && !Zr(a);) {
            if (Ut(a) && !Eu(a)) return a;
            a = Hn(a)
        }
        return i
    }
    let o = zp(e, n);
    for (; o && SP(o) && Eu(o);) o = zp(o, n);
    return o && Zr(o) && Eu(o) && !Tc(o) ? i : o || PP(e) || i
}
const OP = async function(e) {
    const n = this.getOffsetParent || my,
        i = this.getDimensions,
        o = await i(e.floating);
    return {
        reference: DP(e.reference, await n(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function LP(e) {
    return $t(e).direction === "rtl"
}
const _P = {
    convertOffsetParentRelativeRectToViewportRelativeRect: TP,
    getDocumentElement: en,
    getClippingRect: jP,
    getOffsetParent: my,
    getElementRects: OP,
    getClientRects: bP,
    getDimensions: MP,
    getScale: Xr,
    isElement: Ut,
    isRTL: LP
};

function gy(e, n) {
    return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
}

function IP(e, n) {
    let i = null,
        o;
    const a = en(e);

    function u() {
        var f;
        clearTimeout(o), (f = i) == null || f.disconnect(), i = null
    }

    function c(f, p) {
        f === void 0 && (f = !1), p === void 0 && (p = 1), u();
        const m = e.getBoundingClientRect(),
            {
                left: g,
                top: v,
                width: w,
                height: E
            } = m;
        if (f || n(), !w || !E) return;
        const b = No(v),
            S = No(a.clientWidth - (g + w)),
            T = No(a.clientHeight - (v + E)),
            A = No(g),
            O = {
                rootMargin: -b + "px " + -S + "px " + -T + "px " + -A + "px",
                threshold: St(0, $n(1, p)) || 1
            };
        let I = !0;

        function V($) {
            const H = $[0].intersectionRatio;
            if (H !== p) {
                if (!I) return c();
                H ? c(!1, H) : o = setTimeout(() => {
                    c(!1, 1e-7)
                }, 1e3)
            }
            H === 1 && !gy(m, e.getBoundingClientRect()) && c(), I = !1
        }
        try {
            i = new IntersectionObserver(V, {
                ...O,
                root: a.ownerDocument
            })
        } catch {
            i = new IntersectionObserver(V, O)
        }
        i.observe(e)
    }
    return c(!0), u
}

function VP(e, n, i, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: a = !0,
        ancestorResize: u = !0,
        elementResize: c = typeof ResizeObserver == "function",
        layoutShift: f = typeof IntersectionObserver == "function",
        animationFrame: p = !1
    } = o, m = kc(e), g = a || u ? [...m ? ss(m) : [], ...ss(n)] : [];
    g.forEach(A => {
        a && A.addEventListener("scroll", i, {
            passive: !0
        }), u && A.addEventListener("resize", i)
    });
    const v = m && f ? IP(m, i) : null;
    let w = -1,
        E = null;
    c && (E = new ResizeObserver(A => {
        let [M] = A;
        M && M.target === m && E && (E.unobserve(n), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
            var O;
            (O = E) == null || O.observe(n)
        })), i()
    }), m && !p && E.observe(m), E.observe(n));
    let b, S = p ? gr(e) : null;
    p && T();

    function T() {
        const A = gr(e);
        S && !gy(S, A) && i(), S = A, b = requestAnimationFrame(T)
    }
    return i(), () => {
        var A;
        g.forEach(M => {
            a && M.removeEventListener("scroll", i), u && M.removeEventListener("resize", i)
        }), v?.(), (A = E) == null || A.disconnect(), E = null, p && cancelAnimationFrame(b)
    }
}
const FP = yP,
    zP = vP,
    BP = pP,
    UP = wP,
    $P = mP,
    Bp = hP,
    WP = xP,
    HP = (e, n, i) => {
        const o = new Map,
            a = {
                platform: _P,
                ...i
            },
            u = {
                ...a.platform,
                _c: o
            };
        return fP(e, n, {
            ...a,
            platform: u
        })
    };
var _o = typeof document < "u" ? P.useLayoutEffect : P.useEffect;

function Ko(e, n) {
    if (e === n) return !0;
    if (typeof e != typeof n) return !1;
    if (typeof e == "function" && e.toString() === n.toString()) return !0;
    let i, o, a;
    if (e && n && typeof e == "object") {
        if (Array.isArray(e)) {
            if (i = e.length, i !== n.length) return !1;
            for (o = i; o-- !== 0;)
                if (!Ko(e[o], n[o])) return !1;
            return !0
        }
        if (a = Object.keys(e), i = a.length, i !== Object.keys(n).length) return !1;
        for (o = i; o-- !== 0;)
            if (!{}.hasOwnProperty.call(n, a[o])) return !1;
        for (o = i; o-- !== 0;) {
            const u = a[o];
            if (!(u === "_owner" && e.$$typeof) && !Ko(e[u], n[u])) return !1
        }
        return !0
    }
    return e !== e && n !== n
}

function yy(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Up(e, n) {
    const i = yy(e);
    return Math.round(n * i) / i
}

function Tu(e) {
    const n = P.useRef(e);
    return _o(() => {
        n.current = e
    }), n
}

function KP(e) {
    e === void 0 && (e = {});
    const {
        placement: n = "bottom",
        strategy: i = "absolute",
        middleware: o = [],
        platform: a,
        elements: {
            reference: u,
            floating: c
        } = {},
        transform: f = !0,
        whileElementsMounted: p,
        open: m
    } = e, [g, v] = P.useState({
        x: 0,
        y: 0,
        strategy: i,
        placement: n,
        middlewareData: {},
        isPositioned: !1
    }), [w, E] = P.useState(o);
    Ko(w, o) || E(o);
    const [b, S] = P.useState(null), [T, A] = P.useState(null), M = P.useCallback(_ => {
        _ !== $.current && ($.current = _, S(_))
    }, []), O = P.useCallback(_ => {
        _ !== H.current && (H.current = _, A(_))
    }, []), I = u || b, V = c || T, $ = P.useRef(null), H = P.useRef(null), G = P.useRef(g), oe = p != null, re = Tu(p), de = Tu(a), ne = Tu(m), he = P.useCallback(() => {
        if (!$.current || !H.current) return;
        const _ = {
            placement: n,
            strategy: i,
            middleware: w
        };
        de.current && (_.platform = de.current), HP($.current, H.current, _).then(Q => {
            const K = {
                ...Q,
                isPositioned: ne.current !== !1
            };
            q.current && !Ko(G.current, K) && (G.current = K, ra.flushSync(() => {
                v(K)
            }))
        })
    }, [w, n, i, de, ne]);
    _o(() => {
        m === !1 && G.current.isPositioned && (G.current.isPositioned = !1, v(_ => ({
            ..._,
            isPositioned: !1
        })))
    }, [m]);
    const q = P.useRef(!1);
    _o(() => (q.current = !0, () => {
        q.current = !1
    }), []), _o(() => {
        if (I && ($.current = I), V && (H.current = V), I && V) {
            if (re.current) return re.current(I, V, he);
            he()
        }
    }, [I, V, he, re, oe]);
    const ge = P.useMemo(() => ({
            reference: $,
            floating: H,
            setReference: M,
            setFloating: O
        }), [M, O]),
        le = P.useMemo(() => ({
            reference: I,
            floating: V
        }), [I, V]),
        X = P.useMemo(() => {
            const _ = {
                position: i,
                left: 0,
                top: 0
            };
            if (!le.floating) return _;
            const Q = Up(le.floating, g.x),
                K = Up(le.floating, g.y);
            return f ? {
                ..._,
                transform: "translate(" + Q + "px, " + K + "px)",
                ...yy(le.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: i,
                left: Q,
                top: K
            }
        }, [i, f, le.floating, g.x, g.y]);
    return P.useMemo(() => ({
        ...g,
        update: he,
        refs: ge,
        elements: le,
        floatingStyles: X
    }), [g, he, ge, le, X])
}
const GP = e => {
        function n(i) {
            return {}.hasOwnProperty.call(i, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(i) {
                const {
                    element: o,
                    padding: a
                } = typeof e == "function" ? e(i) : e;
                return o && n(o) ? o.current != null ? Bp({
                    element: o.current,
                    padding: a
                }).fn(i) : {} : o ? Bp({
                    element: o,
                    padding: a
                }).fn(i) : {}
            }
        }
    },
    QP = (e, n) => ({
        ...FP(e),
        options: [e, n]
    }),
    qP = (e, n) => ({
        ...zP(e),
        options: [e, n]
    }),
    YP = (e, n) => ({
        ...WP(e),
        options: [e, n]
    }),
    XP = (e, n) => ({
        ...BP(e),
        options: [e, n]
    }),
    ZP = (e, n) => ({
        ...UP(e),
        options: [e, n]
    }),
    JP = (e, n) => ({
        ...$P(e),
        options: [e, n]
    }),
    eC = (e, n) => ({
        ...GP(e),
        options: [e, n]
    });
var tC = "Arrow",
    vy = P.forwardRef((e, n) => {
        const {
            children: i,
            width: o = 10,
            height: a = 5,
            ...u
        } = e;
        return x.jsx(lt.svg, {
            ...u,
            ref: n,
            width: o,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? i : x.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
vy.displayName = tC;
var nC = vy;

function rC(e) {
    const [n, i] = P.useState(void 0);
    return mr(() => {
        if (e) {
            i({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length) return;
                const u = a[0];
                let c, f;
                if ("borderBoxSize" in u) {
                    const p = u.borderBoxSize,
                        m = Array.isArray(p) ? p[0] : p;
                    c = m.inlineSize, f = m.blockSize
                } else c = e.offsetWidth, f = e.offsetHeight;
                i({
                    width: c,
                    height: f
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else i(void 0)
    }, [e]), n
}
var xy = "Popper",
    [wy, Sy] = ia(xy),
    [DR, Py] = wy(xy),
    Cy = "PopperAnchor",
    Ey = P.forwardRef((e, n) => {
        const {
            __scopePopper: i,
            virtualRef: o,
            ...a
        } = e, u = Py(Cy, i), c = P.useRef(null), f = Bt(n, c);
        return P.useEffect(() => {
            u.onAnchorChange(o?.current || c.current)
        }), o ? null : x.jsx(lt.div, {
            ...a,
            ref: f
        })
    });
Ey.displayName = Cy;
var Ac = "PopperContent",
    [iC, sC] = wy(Ac),
    Ty = P.forwardRef((e, n) => {
        const {
            __scopePopper: i,
            side: o = "bottom",
            sideOffset: a = 0,
            align: u = "center",
            alignOffset: c = 0,
            arrowPadding: f = 0,
            avoidCollisions: p = !0,
            collisionBoundary: m = [],
            collisionPadding: g = 0,
            sticky: v = "partial",
            hideWhenDetached: w = !1,
            updatePositionStrategy: E = "optimized",
            onPlaced: b,
            ...S
        } = e, T = Py(Ac, i), [A, M] = P.useState(null), O = Bt(n, Se => M(Se)), [I, V] = P.useState(null), $ = rC(I), H = $?.width ?? 0, G = $?.height ?? 0, oe = o + (u !== "center" ? "-" + u : ""), re = typeof g == "number" ? g : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...g
        }, de = Array.isArray(m) ? m : [m], ne = de.length > 0, he = {
            padding: re,
            boundary: de.filter(aC),
            altBoundary: ne
        }, {
            refs: q,
            floatingStyles: ge,
            placement: le,
            isPositioned: X,
            middlewareData: _
        } = KP({
            strategy: "fixed",
            placement: oe,
            whileElementsMounted: (...Se) => VP(...Se, {
                animationFrame: E === "always"
            }),
            elements: {
                reference: T.anchor
            },
            middleware: [QP({
                mainAxis: a + G,
                alignmentAxis: c
            }), p && qP({
                mainAxis: !0,
                crossAxis: !1,
                limiter: v === "partial" ? YP() : void 0,
                ...he
            }), p && XP({
                ...he
            }), ZP({
                ...he,
                apply: ({
                    elements: Se,
                    rects: Pe,
                    availableWidth: be,
                    availableHeight: st
                }) => {
                    const {
                        width: xr,
                        height: gs
                    } = Pe.reference, tn = Se.floating.style;
                    tn.setProperty("--radix-popper-available-width", `${be}px`), tn.setProperty("--radix-popper-available-height", `${st}px`), tn.setProperty("--radix-popper-anchor-width", `${xr}px`), tn.setProperty("--radix-popper-anchor-height", `${gs}px`)
                }
            }), I && eC({
                element: I,
                padding: f
            }), lC({
                arrowWidth: H,
                arrowHeight: G
            }), w && JP({
                strategy: "referenceHidden",
                ...he
            })]
        }), [Q, K] = Ry(le), N = Zt(b);
        mr(() => {
            X && N?.()
        }, [X, N]);
        const F = _.arrow?.x,
            ce = _.arrow?.y,
            fe = _.arrow?.centerOffset !== 0,
            [ve, xe] = P.useState();
        return mr(() => {
            A && xe(window.getComputedStyle(A).zIndex)
        }, [A]), x.jsx("div", {
            ref: q.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...ge,
                transform: X ? ge.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ve,
                "--radix-popper-transform-origin": [_.transformOrigin?.x, _.transformOrigin?.y].join(" "),
                ..._.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: x.jsx(iC, {
                scope: i,
                placedSide: Q,
                onArrowChange: V,
                arrowX: F,
                arrowY: ce,
                shouldHideArrow: fe,
                children: x.jsx(lt.div, {
                    "data-side": Q,
                    "data-align": K,
                    ...S,
                    ref: O,
                    style: {
                        ...S.style,
                        animation: X ? void 0 : "none"
                    }
                })
            })
        })
    });
Ty.displayName = Ac;
var by = "PopperArrow",
    oC = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    ky = P.forwardRef(function(n, i) {
        const {
            __scopePopper: o,
            ...a
        } = n, u = sC(by, o), c = oC[u.placedSide];
        return x.jsx("span", {
            ref: u.onArrowChange,
            style: {
                position: "absolute",
                left: u.arrowX,
                top: u.arrowY,
                [c]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [u.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [u.placedSide],
                visibility: u.shouldHideArrow ? "hidden" : void 0
            },
            children: x.jsx(nC, {
                ...a,
                ref: i,
                style: {
                    ...a.style,
                    display: "block"
                }
            })
        })
    });
ky.displayName = by;

function aC(e) {
    return e !== null
}
var lC = e => ({
    name: "transformOrigin",
    options: e,
    fn(n) {
        const {
            placement: i,
            rects: o,
            middlewareData: a
        } = n, c = a.arrow?.centerOffset !== 0, f = c ? 0 : e.arrowWidth, p = c ? 0 : e.arrowHeight, [m, g] = Ry(i), v = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [g], w = (a.arrow?.x ?? 0) + f / 2, E = (a.arrow?.y ?? 0) + p / 2;
        let b = "",
            S = "";
        return m === "bottom" ? (b = c ? v : `${w}px`, S = `${-p}px`) : m === "top" ? (b = c ? v : `${w}px`, S = `${o.floating.height+p}px`) : m === "right" ? (b = `${-p}px`, S = c ? v : `${E}px`) : m === "left" && (b = `${o.floating.width+p}px`, S = c ? v : `${E}px`), {
            data: {
                x: b,
                y: S
            }
        }
    }
});

function Ry(e) {
    const [n, i = "center"] = e.split("-");
    return [n, i]
}
var uC = Ey,
    cC = Ty,
    dC = ky,
    [fa, OR] = ia("Tooltip", [Sy]),
    Nc = Sy(),
    Ay = "TooltipProvider",
    fC = 700,
    $p = "tooltip.open",
    [hC, Ny] = fa(Ay),
    jy = e => {
        const {
            __scopeTooltip: n,
            delayDuration: i = fC,
            skipDelayDuration: o = 300,
            disableHoverableContent: a = !1,
            children: u
        } = e, c = P.useRef(!0), f = P.useRef(!1), p = P.useRef(0);
        return P.useEffect(() => {
            const m = p.current;
            return () => window.clearTimeout(m)
        }, []), x.jsx(hC, {
            scope: n,
            isOpenDelayedRef: c,
            delayDuration: i,
            onOpen: P.useCallback(() => {
                window.clearTimeout(p.current), c.current = !1
            }, []),
            onClose: P.useCallback(() => {
                window.clearTimeout(p.current), p.current = window.setTimeout(() => c.current = !0, o)
            }, [o]),
            isPointerInTransitRef: f,
            onPointerInTransitChange: P.useCallback(m => {
                f.current = m
            }, []),
            disableHoverableContent: a,
            children: u
        })
    };
jy.displayName = Ay;
var My = "Tooltip",
    [LR, ha] = fa(My),
    Qu = "TooltipTrigger",
    pC = P.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            ...o
        } = e, a = ha(Qu, i), u = Ny(Qu, i), c = Nc(i), f = P.useRef(null), p = Bt(n, f, a.onTriggerChange), m = P.useRef(!1), g = P.useRef(!1), v = P.useCallback(() => m.current = !1, []);
        return P.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), x.jsx(uC, {
            asChild: !0,
            ...c,
            children: x.jsx(lt.button, {
                "aria-describedby": a.open ? a.contentId : void 0,
                "data-state": a.stateAttribute,
                ...o,
                ref: p,
                onPointerMove: $e(e.onPointerMove, w => {
                    w.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (a.onTriggerEnter(), g.current = !0)
                }),
                onPointerLeave: $e(e.onPointerLeave, () => {
                    a.onTriggerLeave(), g.current = !1
                }),
                onPointerDown: $e(e.onPointerDown, () => {
                    a.open && a.onClose(), m.current = !0, document.addEventListener("pointerup", v, {
                        once: !0
                    })
                }),
                onFocus: $e(e.onFocus, () => {
                    m.current || a.onOpen()
                }),
                onBlur: $e(e.onBlur, a.onClose),
                onClick: $e(e.onClick, a.onClose)
            })
        })
    });
pC.displayName = Qu;
var mC = "TooltipPortal",
    [_R, gC] = fa(mC, {
        forceMount: void 0
    }),
    Jr = "TooltipContent",
    Dy = P.forwardRef((e, n) => {
        const i = gC(Jr, e.__scopeTooltip),
            {
                forceMount: o = i.forceMount,
                side: a = "top",
                ...u
            } = e,
            c = ha(Jr, e.__scopeTooltip);
        return x.jsx(yc, {
            present: o || c.open,
            children: c.disableHoverableContent ? x.jsx(Oy, {
                side: a,
                ...u,
                ref: n
            }) : x.jsx(yC, {
                side: a,
                ...u,
                ref: n
            })
        })
    }),
    yC = P.forwardRef((e, n) => {
        const i = ha(Jr, e.__scopeTooltip),
            o = Ny(Jr, e.__scopeTooltip),
            a = P.useRef(null),
            u = Bt(n, a),
            [c, f] = P.useState(null),
            {
                trigger: p,
                onClose: m
            } = i,
            g = a.current,
            {
                onPointerInTransitChange: v
            } = o,
            w = P.useCallback(() => {
                f(null), v(!1)
            }, [v]),
            E = P.useCallback((b, S) => {
                const T = b.currentTarget,
                    A = {
                        x: b.clientX,
                        y: b.clientY
                    },
                    M = PC(A, T.getBoundingClientRect()),
                    O = CC(A, M),
                    I = EC(S.getBoundingClientRect()),
                    V = bC([...O, ...I]);
                f(V), v(!0)
            }, [v]);
        return P.useEffect(() => () => w(), [w]), P.useEffect(() => {
            if (p && g) {
                const b = T => E(T, g),
                    S = T => E(T, p);
                return p.addEventListener("pointerleave", b), g.addEventListener("pointerleave", S), () => {
                    p.removeEventListener("pointerleave", b), g.removeEventListener("pointerleave", S)
                }
            }
        }, [p, g, E, w]), P.useEffect(() => {
            if (c) {
                const b = S => {
                    const T = S.target,
                        A = {
                            x: S.clientX,
                            y: S.clientY
                        },
                        M = p?.contains(T) || g?.contains(T),
                        O = !TC(A, c);
                    M ? w() : O && (w(), m())
                };
                return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b)
            }
        }, [p, g, c, m, w]), x.jsx(Oy, {
            ...e,
            ref: u
        })
    }),
    [vC, xC] = fa(My, {
        isInside: !1
    }),
    wC = NS("TooltipContent"),
    Oy = P.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            children: o,
            "aria-label": a,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            ...f
        } = e, p = ha(Jr, i), m = Nc(i), {
            onClose: g
        } = p;
        return P.useEffect(() => (document.addEventListener($p, g), () => document.removeEventListener($p, g)), [g]), P.useEffect(() => {
            if (p.trigger) {
                const v = w => {
                    w.target?.contains(p.trigger) && g()
                };
                return window.addEventListener("scroll", v, {
                    capture: !0
                }), () => window.removeEventListener("scroll", v, {
                    capture: !0
                })
            }
        }, [p.trigger, g]), x.jsx(gc, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: v => v.preventDefault(),
            onDismiss: g,
            children: x.jsxs(cC, {
                "data-state": p.stateAttribute,
                ...m,
                ...f,
                ref: n,
                style: {
                    ...f.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [x.jsx(wC, {
                    children: o
                }), x.jsx(vC, {
                    scope: i,
                    isInside: !0,
                    children: x.jsx(ZS, {
                        id: p.contentId,
                        role: "tooltip",
                        children: a || o
                    })
                })]
            })
        })
    });
Dy.displayName = Jr;
var Ly = "TooltipArrow",
    SC = P.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            ...o
        } = e, a = Nc(i);
        return xC(Ly, i).isInside ? null : x.jsx(dC, {
            ...a,
            ...o,
            ref: n
        })
    });
SC.displayName = Ly;

function PC(e, n) {
    const i = Math.abs(n.top - e.y),
        o = Math.abs(n.bottom - e.y),
        a = Math.abs(n.right - e.x),
        u = Math.abs(n.left - e.x);
    switch (Math.min(i, o, a, u)) {
        case u:
            return "left";
        case a:
            return "right";
        case i:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function CC(e, n, i = 5) {
    const o = [];
    switch (n) {
        case "top":
            o.push({
                x: e.x - i,
                y: e.y + i
            }, {
                x: e.x + i,
                y: e.y + i
            });
            break;
        case "bottom":
            o.push({
                x: e.x - i,
                y: e.y - i
            }, {
                x: e.x + i,
                y: e.y - i
            });
            break;
        case "left":
            o.push({
                x: e.x + i,
                y: e.y - i
            }, {
                x: e.x + i,
                y: e.y + i
            });
            break;
        case "right":
            o.push({
                x: e.x - i,
                y: e.y - i
            }, {
                x: e.x - i,
                y: e.y + i
            });
            break
    }
    return o
}

function EC(e) {
    const {
        top: n,
        right: i,
        bottom: o,
        left: a
    } = e;
    return [{
        x: a,
        y: n
    }, {
        x: i,
        y: n
    }, {
        x: i,
        y: o
    }, {
        x: a,
        y: o
    }]
}

function TC(e, n) {
    const {
        x: i,
        y: o
    } = e;
    let a = !1;
    for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
        const f = n[u].x,
            p = n[u].y,
            m = n[c].x,
            g = n[c].y;
        p > o != g > o && i < (m - f) * (o - p) / (g - p) + f && (a = !a)
    }
    return a
}

function bC(e) {
    const n = e.slice();
    return n.sort((i, o) => i.x < o.x ? -1 : i.x > o.x ? 1 : i.y < o.y ? -1 : i.y > o.y ? 1 : 0), kC(n)
}

function kC(e) {
    if (e.length <= 1) return e.slice();
    const n = [];
    for (let o = 0; o < e.length; o++) {
        const a = e[o];
        for (; n.length >= 2;) {
            const u = n[n.length - 1],
                c = n[n.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) n.pop();
            else break
        }
        n.push(a)
    }
    n.pop();
    const i = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const a = e[o];
        for (; i.length >= 2;) {
            const u = i[i.length - 1],
                c = i[i.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) i.pop();
            else break
        }
        i.push(a)
    }
    return i.pop(), n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i)
}
var RC = jy,
    _y = Dy;
const AC = RC,
    NC = P.forwardRef(({
        className: e,
        sideOffset: n = 4,
        ...i
    }, o) => x.jsx(_y, {
        ref: o,
        sideOffset: n,
        className: Ge("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
        ...i
    }));
NC.displayName = _y.displayName;
const jC = {
        theme: "system",
        setTheme: () => null
    },
    Iy = P.createContext(jC);

function MC({
    children: e,
    defaultTheme: n = "system",
    storageKey: i = "vite-ui-theme",
    ...o
}) {
    const [a, u] = P.useState(() => localStorage.getItem(i) || n);
    P.useEffect(() => {
        const f = window.document.documentElement;
        if (f.classList.remove("light", "dark"), a === "system") {
            const p = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            f.classList.add(p);
            return
        }
        f.classList.add(a)
    }, [a]);
    const c = {
        theme: a,
        setTheme: f => {
            localStorage.setItem(i, f), u(f)
        }
    };
    return x.jsx(Iy.Provider, {
        ...o,
        value: c,
        children: e
    })
}
const DC = () => {
    const e = P.useContext(Iy);
    if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return e
};

function OC(e) {
    if (typeof Proxy > "u") return e;
    const n = new Map,
        i = (...o) => e(...o);
    return new Proxy(i, {
        get: (o, a) => a === "create" ? e : (n.has(a) || n.set(a, e(a)), n.get(a))
    })
}

function pa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const qu = e => Array.isArray(e);

function Vy(e, n) {
    if (!Array.isArray(n)) return !1;
    const i = n.length;
    if (i !== e.length) return !1;
    for (let o = 0; o < i; o++)
        if (n[o] !== e[o]) return !1;
    return !0
}

function os(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Wp(e) {
    const n = [{}, {}];
    return e?.values.forEach((i, o) => {
        n[0][o] = i.get(), n[1][o] = i.getVelocity()
    }), n
}

function jc(e, n, i, o) {
    if (typeof n == "function") {
        const [a, u] = Wp(o);
        n = n(i !== void 0 ? i : e.custom, a, u)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
        const [a, u] = Wp(o);
        n = n(i !== void 0 ? i : e.custom, a, u)
    }
    return n
}

function ma(e, n, i) {
    const o = e.getProps();
    return jc(o, n, i !== void 0 ? i : o.custom, e)
}
const Mc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Dc = ["initial", ...Mc],
    fs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    vr = new Set(fs),
    hn = e => e * 1e3,
    pn = e => e / 1e3,
    LC = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    _C = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    IC = {
        type: "keyframes",
        duration: .8
    },
    VC = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    FC = (e, {
        keyframes: n
    }) => n.length > 2 ? IC : vr.has(e) ? e.startsWith("scale") ? _C(n[1]) : LC : VC;

function Oc(e, n) {
    return e ? e[n] || e.default || e : void 0
}
const zC = {
        useManualTiming: !1
    },
    BC = e => e !== null;

function ga(e, {
    repeat: n,
    repeatType: i = "loop"
}, o) {
    const a = e.filter(BC),
        u = n && i !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
    return !u || o === void 0 ? a[u] : o
}
const it = e => e;
let Fy = it;

function UC(e) {
    let n = new Set,
        i = new Set,
        o = !1,
        a = !1;
    const u = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function f(m) {
        u.has(m) && (p.schedule(m), e()), m(c)
    }
    const p = {
        schedule: (m, g = !1, v = !1) => {
            const E = v && o ? n : i;
            return g && u.add(m), E.has(m) || E.add(m), m
        },
        cancel: m => {
            i.delete(m), u.delete(m)
        },
        process: m => {
            if (c = m, o) {
                a = !0;
                return
            }
            o = !0, [n, i] = [i, n], i.clear(), n.forEach(f), o = !1, a && (a = !1, p.process(m))
        }
    };
    return p
}
const jo = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    $C = 40;

function zy(e, n) {
    let i = !1,
        o = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        u = () => i = !0,
        c = jo.reduce((A, M) => (A[M] = UC(u), A), {}),
        {
            read: f,
            resolveKeyframes: p,
            update: m,
            preRender: g,
            render: v,
            postRender: w
        } = c,
        E = () => {
            const A = performance.now();
            i = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(A - a.timestamp, $C), 1), a.timestamp = A, a.isProcessing = !0, f.process(a), p.process(a), m.process(a), g.process(a), v.process(a), w.process(a), a.isProcessing = !1, i && n && (o = !1, e(E))
        },
        b = () => {
            i = !0, o = !0, a.isProcessing || e(E)
        };
    return {
        schedule: jo.reduce((A, M) => {
            const O = c[M];
            return A[M] = (I, V = !1, $ = !1) => (i || b(), O.schedule(I, V, $)), A
        }, {}),
        cancel: A => {
            for (let M = 0; M < jo.length; M++) c[jo[M]].cancel(A)
        },
        state: a,
        steps: c
    }
}
const {
    schedule: Te,
    cancel: Kn,
    state: Ye,
    steps: bu
} = zy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : it, !0), By = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e, WC = 1e-7, HC = 12;

function KC(e, n, i, o, a) {
    let u, c, f = 0;
    do c = n + (i - n) / 2, u = By(c, o, a) - e, u > 0 ? i = c : n = c; while (Math.abs(u) > WC && ++f < HC);
    return c
}

function hs(e, n, i, o) {
    if (e === n && i === o) return it;
    const a = u => KC(u, 0, 1, e, i);
    return u => u === 0 || u === 1 ? u : By(a(u), n, o)
}
const Uy = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
    $y = e => n => 1 - e(1 - n),
    Wy = hs(.33, 1.53, .69, .99),
    Lc = $y(Wy),
    Hy = Uy(Lc),
    Ky = e => (e *= 2) < 1 ? .5 * Lc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    _c = e => 1 - Math.sin(Math.acos(e)),
    Gy = $y(_c),
    Qy = Uy(_c),
    qy = e => /^0[^.\s]+$/u.test(e);

function GC(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || qy(e) : !0
}
const Yy = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Xy = e => n => typeof n == "string" && n.startsWith(e),
    Zy = Xy("--"),
    QC = Xy("var(--"),
    Ic = e => QC(e) ? qC.test(e.split("/*")[0].trim()) : !1,
    qC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    YC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function XC(e) {
    const n = YC.exec(e);
    if (!n) return [, ];
    const [, i, o, a] = n;
    return [`--${i??o}`, a]
}

function Jy(e, n, i = 1) {
    const [o, a] = XC(e);
    if (!o) return;
    const u = window.getComputedStyle(n).getPropertyValue(o);
    if (u) {
        const c = u.trim();
        return Yy(c) ? parseFloat(c) : c
    }
    return Ic(a) ? Jy(a, n, i + 1) : a
}
const yn = (e, n, i) => i > n ? n : i < e ? e : i,
    oi = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    as = {
        ...oi,
        transform: e => yn(0, 1, e)
    },
    Mo = {
        ...oi,
        default: 1
    },
    ps = e => ({
        test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
        parse: parseFloat,
        transform: n => `${n}${e}`
    }),
    zn = ps("deg"),
    Yt = ps("%"),
    ae = ps("px"),
    ZC = ps("vh"),
    JC = ps("vw"),
    Hp = {
        ...Yt,
        parse: e => Yt.parse(e) / 100,
        transform: e => Yt.transform(e * 100)
    },
    eE = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Kp = e => e === oi || e === ae,
    Gp = (e, n) => parseFloat(e.split(", ")[n]),
    Qp = (e, n) => (i, {
        transform: o
    }) => {
        if (o === "none" || !o) return 0;
        const a = o.match(/^matrix3d\((.+)\)$/u);
        if (a) return Gp(a[1], n);
        {
            const u = o.match(/^matrix\((.+)\)$/u);
            return u ? Gp(u[1], e) : 0
        }
    },
    tE = new Set(["x", "y", "z"]),
    nE = fs.filter(e => !tE.has(e));

function rE(e) {
    const n = [];
    return nE.forEach(i => {
        const o = e.getValue(i);
        o !== void 0 && (n.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0))
    }), n
}
const ei = {
    width: ({
        x: e
    }, {
        paddingLeft: n = "0",
        paddingRight: i = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
    height: ({
        y: e
    }, {
        paddingTop: n = "0",
        paddingBottom: i = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
    top: (e, {
        top: n
    }) => parseFloat(n),
    left: (e, {
        left: n
    }) => parseFloat(n),
    bottom: ({
        y: e
    }, {
        top: n
    }) => parseFloat(n) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: n
    }) => parseFloat(n) + (e.max - e.min),
    x: Qp(4, 13),
    y: Qp(5, 14)
};
ei.translateX = ei.x;
ei.translateY = ei.y;
const ev = e => n => n.test(e),
    iE = {
        test: e => e === "auto",
        parse: e => e
    },
    tv = [oi, ae, Yt, zn, JC, ZC, iE],
    qp = e => tv.find(ev(e)),
    hr = new Set;
let Yu = !1,
    Xu = !1;

function nv() {
    if (Xu) {
        const e = Array.from(hr).filter(o => o.needsMeasurement),
            n = new Set(e.map(o => o.element)),
            i = new Map;
        n.forEach(o => {
            const a = rE(o);
            a.length && (i.set(o, a), o.render())
        }), e.forEach(o => o.measureInitialState()), n.forEach(o => {
            o.render();
            const a = i.get(o);
            a && a.forEach(([u, c]) => {
                var f;
                (f = o.getValue(u)) === null || f === void 0 || f.set(c)
            })
        }), e.forEach(o => o.measureEndState()), e.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        })
    }
    Xu = !1, Yu = !1, hr.forEach(e => e.complete()), hr.clear()
}

function rv() {
    hr.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Xu = !0)
    })
}

function sE() {
    rv(), nv()
}
class Vc {
    constructor(n, i, o, a, u, c = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...n], this.onComplete = i, this.name = o, this.motionValue = a, this.element = u, this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (hr.add(this), Yu || (Yu = !0, Te.read(rv), Te.resolveKeyframes(nv))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: i,
            element: o,
            motionValue: a
        } = this;
        for (let u = 0; u < n.length; u++)
            if (n[u] === null)
                if (u === 0) {
                    const c = a?.get(),
                        f = n[n.length - 1];
                    if (c !== void 0) n[0] = c;
                    else if (o && i) {
                        const p = o.readValue(i, f);
                        p != null && (n[0] = p)
                    }
                    n[0] === void 0 && (n[0] = f), a && c === void 0 && a.set(n[0])
                } else n[u] = n[u - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), hr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, hr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const es = e => Math.round(e * 1e5) / 1e5,
    Fc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function oE(e) {
    return e == null
}
const aE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    zc = (e, n) => i => !!(typeof i == "string" && aE.test(i) && i.startsWith(e) || n && !oE(i) && Object.prototype.hasOwnProperty.call(i, n)),
    iv = (e, n, i) => o => {
        if (typeof o != "string") return o;
        const [a, u, c, f] = o.match(Fc);
        return {
            [e]: parseFloat(a),
            [n]: parseFloat(u),
            [i]: parseFloat(c),
            alpha: f !== void 0 ? parseFloat(f) : 1
        }
    },
    lE = e => yn(0, 255, e),
    ku = {
        ...oi,
        transform: e => Math.round(lE(e))
    },
    fr = {
        test: zc("rgb", "red"),
        parse: iv("red", "green", "blue"),
        transform: ({
            red: e,
            green: n,
            blue: i,
            alpha: o = 1
        }) => "rgba(" + ku.transform(e) + ", " + ku.transform(n) + ", " + ku.transform(i) + ", " + es(as.transform(o)) + ")"
    };

function uE(e) {
    let n = "",
        i = "",
        o = "",
        a = "";
    return e.length > 5 ? (n = e.substring(1, 3), i = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (n = e.substring(1, 2), i = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), n += n, i += i, o += o, a += a), {
        red: parseInt(n, 16),
        green: parseInt(i, 16),
        blue: parseInt(o, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Zu = {
        test: zc("#"),
        parse: uE,
        transform: fr.transform
    },
    Hr = {
        test: zc("hsl", "hue"),
        parse: iv("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: n,
            lightness: i,
            alpha: o = 1
        }) => "hsla(" + Math.round(e) + ", " + Yt.transform(es(n)) + ", " + Yt.transform(es(i)) + ", " + es(as.transform(o)) + ")"
    },
    nt = {
        test: e => fr.test(e) || Zu.test(e) || Hr.test(e),
        parse: e => fr.test(e) ? fr.parse(e) : Hr.test(e) ? Hr.parse(e) : Zu.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? fr.transform(e) : Hr.transform(e)
    },
    cE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function dE(e) {
    var n, i;
    return isNaN(e) && typeof e == "string" && (((n = e.match(Fc)) === null || n === void 0 ? void 0 : n.length) || 0) + (((i = e.match(cE)) === null || i === void 0 ? void 0 : i.length) || 0) > 0
}
const sv = "number",
    ov = "color",
    fE = "var",
    hE = "var(",
    Yp = "${}",
    pE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ls(e) {
    const n = e.toString(),
        i = [],
        o = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let u = 0;
    const f = n.replace(pE, p => (nt.test(p) ? (o.color.push(u), a.push(ov), i.push(nt.parse(p))) : p.startsWith(hE) ? (o.var.push(u), a.push(fE), i.push(p)) : (o.number.push(u), a.push(sv), i.push(parseFloat(p))), ++u, Yp)).split(Yp);
    return {
        values: i,
        split: f,
        indexes: o,
        types: a
    }
}

function av(e) {
    return ls(e).values
}

function lv(e) {
    const {
        split: n,
        types: i
    } = ls(e), o = n.length;
    return a => {
        let u = "";
        for (let c = 0; c < o; c++)
            if (u += n[c], a[c] !== void 0) {
                const f = i[c];
                f === sv ? u += es(a[c]) : f === ov ? u += nt.transform(a[c]) : u += a[c]
            } return u
    }
}
const mE = e => typeof e == "number" ? 0 : e;

function gE(e) {
    const n = av(e);
    return lv(e)(n.map(mE))
}
const Gn = {
        test: dE,
        parse: av,
        createTransformer: lv,
        getAnimatableNone: gE
    },
    yE = new Set(["brightness", "contrast", "saturate", "opacity"]);

function vE(e) {
    const [n, i] = e.slice(0, -1).split("(");
    if (n === "drop-shadow") return e;
    const [o] = i.match(Fc) || [];
    if (!o) return e;
    const a = i.replace(o, "");
    let u = yE.has(n) ? 1 : 0;
    return o !== i && (u *= 100), n + "(" + u + a + ")"
}
const xE = /\b([a-z-]*)\(.*?\)/gu,
    Ju = {
        ...Gn,
        getAnimatableNone: e => {
            const n = e.match(xE);
            return n ? n.map(vE).join(" ") : e
        }
    },
    wE = {
        borderWidth: ae,
        borderTopWidth: ae,
        borderRightWidth: ae,
        borderBottomWidth: ae,
        borderLeftWidth: ae,
        borderRadius: ae,
        radius: ae,
        borderTopLeftRadius: ae,
        borderTopRightRadius: ae,
        borderBottomRightRadius: ae,
        borderBottomLeftRadius: ae,
        width: ae,
        maxWidth: ae,
        height: ae,
        maxHeight: ae,
        top: ae,
        right: ae,
        bottom: ae,
        left: ae,
        padding: ae,
        paddingTop: ae,
        paddingRight: ae,
        paddingBottom: ae,
        paddingLeft: ae,
        margin: ae,
        marginTop: ae,
        marginRight: ae,
        marginBottom: ae,
        marginLeft: ae,
        backgroundPositionX: ae,
        backgroundPositionY: ae
    },
    SE = {
        rotate: zn,
        rotateX: zn,
        rotateY: zn,
        rotateZ: zn,
        scale: Mo,
        scaleX: Mo,
        scaleY: Mo,
        scaleZ: Mo,
        skew: zn,
        skewX: zn,
        skewY: zn,
        distance: ae,
        translateX: ae,
        translateY: ae,
        translateZ: ae,
        x: ae,
        y: ae,
        z: ae,
        perspective: ae,
        transformPerspective: ae,
        opacity: as,
        originX: Hp,
        originY: Hp,
        originZ: ae
    },
    Xp = {
        ...oi,
        transform: Math.round
    },
    Bc = {
        ...wE,
        ...SE,
        zIndex: Xp,
        size: ae,
        fillOpacity: as,
        strokeOpacity: as,
        numOctaves: Xp
    },
    PE = {
        ...Bc,
        color: nt,
        backgroundColor: nt,
        outlineColor: nt,
        fill: nt,
        stroke: nt,
        borderColor: nt,
        borderTopColor: nt,
        borderRightColor: nt,
        borderBottomColor: nt,
        borderLeftColor: nt,
        filter: Ju,
        WebkitFilter: Ju
    },
    Uc = e => PE[e];

function uv(e, n) {
    let i = Uc(e);
    return i !== Ju && (i = Gn), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
}
const CE = new Set(["auto", "none", "0"]);

function EE(e, n, i) {
    let o = 0,
        a;
    for (; o < e.length && !a;) {
        const u = e[o];
        typeof u == "string" && !CE.has(u) && ls(u).values.length && (a = e[o]), o++
    }
    if (a && i)
        for (const u of n) e[u] = uv(i, a)
}
class cv extends Vc {
    constructor(n, i, o, a, u) {
        super(n, i, o, a, u, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            element: i,
            name: o
        } = this;
        if (!i || !i.current) return;
        super.readKeyframes();
        for (let p = 0; p < n.length; p++) {
            let m = n[p];
            if (typeof m == "string" && (m = m.trim(), Ic(m))) {
                const g = Jy(m, i.current);
                g !== void 0 && (n[p] = g), p === n.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !eE.has(o) || n.length !== 2) return;
        const [a, u] = n, c = qp(a), f = qp(u);
        if (c !== f)
            if (Kp(c) && Kp(f))
                for (let p = 0; p < n.length; p++) {
                    const m = n[p];
                    typeof m == "string" && (n[p] = parseFloat(m))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: i
        } = this, o = [];
        for (let a = 0; a < n.length; a++) GC(n[a]) && o.push(a);
        o.length && EE(n, o, i)
    }
    measureInitialState() {
        const {
            element: n,
            unresolvedKeyframes: i,
            name: o
        } = this;
        if (!n || !n.current) return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ei[o](n.measureViewportBox(), window.getComputedStyle(n.current)), i[0] = this.measuredOrigin;
        const a = i[i.length - 1];
        a !== void 0 && n.getValue(o, a).jump(a, !1)
    }
    measureEndState() {
        var n;
        const {
            element: i,
            name: o,
            unresolvedKeyframes: a
        } = this;
        if (!i || !i.current) return;
        const u = i.getValue(o);
        u && u.jump(this.measuredOrigin, !1);
        const c = a.length - 1,
            f = a[c];
        a[c] = ei[o](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), !((n = this.removedTransforms) === null || n === void 0) && n.length && this.removedTransforms.forEach(([p, m]) => {
            i.getValue(p).set(m)
        }), this.resolveNoneKeyframes()
    }
}

function $c(e) {
    return typeof e == "function"
}
let Io;

function TE() {
    Io = void 0
}
const Xt = {
        now: () => (Io === void 0 && Xt.set(Ye.isProcessing || zC.useManualTiming ? Ye.timestamp : performance.now()), Io),
        set: e => {
            Io = e, queueMicrotask(TE)
        }
    },
    Zp = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Gn.test(e) || e === "0") && !e.startsWith("url("));

function bE(e) {
    const n = e[0];
    if (e.length === 1) return !0;
    for (let i = 0; i < e.length; i++)
        if (e[i] !== n) return !0
}

function kE(e, n, i, o) {
    const a = e[0];
    if (a === null) return !1;
    if (n === "display" || n === "visibility") return !0;
    const u = e[e.length - 1],
        c = Zp(a, n),
        f = Zp(u, n);
    return !c || !f ? !1 : bE(e) || (i === "spring" || $c(i)) && o
}
const RE = 40;
class dv {
    constructor({
        autoplay: n = !0,
        delay: i = 0,
        type: o = "keyframes",
        repeat: a = 0,
        repeatDelay: u = 0,
        repeatType: c = "loop",
        ...f
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Xt.now(), this.options = {
            autoplay: n,
            delay: i,
            type: o,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            ...f
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > RE ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && sE(), this._resolved
    }
    onKeyframesResolved(n, i) {
        this.resolvedAt = Xt.now(), this.hasAttemptedResolve = !0;
        const {
            name: o,
            type: a,
            velocity: u,
            delay: c,
            onComplete: f,
            onUpdate: p,
            isGenerator: m
        } = this.options;
        if (!m && !kE(n, o, a, u))
            if (c) this.options.duration = 0;
            else {
                p?.(ga(n, this.options, i)), f?.(), this.resolveFinishedPromise();
                return
            } const g = this.initPlayback(n, i);
        g !== !1 && (this._resolved = {
            keyframes: n,
            finalKeyframe: i,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(n, i) {
        return this.currentFinishedPromise.then(n, i)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(n => {
            this.resolveFinishedPromise = n
        })
    }
}
const ti = (e, n, i) => {
        const o = n - e;
        return o === 0 ? 1 : (i - e) / o
    },
    fv = (e, n, i = 10) => {
        let o = "";
        const a = Math.max(Math.round(n / i), 2);
        for (let u = 0; u < a; u++) o += e(ti(0, a - 1, u)) + ", ";
        return `linear(${o.substring(0,o.length-2)})`
    };

function hv(e, n) {
    return n ? e * (1e3 / n) : 0
}
const AE = 5;

function pv(e, n, i) {
    const o = Math.max(n - AE, 0);
    return hv(i - e(o), n - o)
}
const _e = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Ru = .001;

function NE({
    duration: e = _e.duration,
    bounce: n = _e.bounce,
    velocity: i = _e.velocity,
    mass: o = _e.mass
}) {
    let a, u, c = 1 - n;
    c = yn(_e.minDamping, _e.maxDamping, c), e = yn(_e.minDuration, _e.maxDuration, pn(e)), c < 1 ? (a = m => {
        const g = m * c,
            v = g * e,
            w = g - i,
            E = ec(m, c),
            b = Math.exp(-v);
        return Ru - w / E * b
    }, u = m => {
        const v = m * c * e,
            w = v * i + i,
            E = Math.pow(c, 2) * Math.pow(m, 2) * e,
            b = Math.exp(-v),
            S = ec(Math.pow(m, 2), c);
        return (-a(m) + Ru > 0 ? -1 : 1) * ((w - E) * b) / S
    }) : (a = m => {
        const g = Math.exp(-m * e),
            v = (m - i) * e + 1;
        return -Ru + g * v
    }, u = m => {
        const g = Math.exp(-m * e),
            v = (i - m) * (e * e);
        return g * v
    });
    const f = 5 / e,
        p = ME(a, u, f);
    if (e = hn(e), isNaN(p)) return {
        stiffness: _e.stiffness,
        damping: _e.damping,
        duration: e
    };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(o * m),
            duration: e
        }
    }
}
const jE = 12;

function ME(e, n, i) {
    let o = i;
    for (let a = 1; a < jE; a++) o = o - e(o) / n(o);
    return o
}

function ec(e, n) {
    return e * Math.sqrt(1 - n * n)
}
const tc = 2e4;

function mv(e) {
    let n = 0;
    const i = 50;
    let o = e.next(n);
    for (; !o.done && n < tc;) n += i, o = e.next(n);
    return n >= tc ? 1 / 0 : n
}
const DE = ["duration", "bounce"],
    OE = ["stiffness", "damping", "mass"];

function Jp(e, n) {
    return n.some(i => e[i] !== void 0)
}

function LE(e) {
    let n = {
        velocity: _e.velocity,
        stiffness: _e.stiffness,
        damping: _e.damping,
        mass: _e.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Jp(e, OE) && Jp(e, DE))
        if (e.visualDuration) {
            const i = e.visualDuration,
                o = 2 * Math.PI / (i * 1.2),
                a = o * o,
                u = 2 * yn(.05, 1, 1 - e.bounce) * Math.sqrt(a);
            n = {
                ...n,
                mass: _e.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const i = NE(e);
            n = {
                ...n,
                ...i,
                mass: _e.mass
            }, n.isResolvedFromDuration = !0
        } return n
}

function gv(e = _e.visualDuration, n = _e.bounce) {
    const i = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
    } : e;
    let {
        restSpeed: o,
        restDelta: a
    } = i;
    const u = i.keyframes[0],
        c = i.keyframes[i.keyframes.length - 1],
        f = {
            done: !1,
            value: u
        },
        {
            stiffness: p,
            damping: m,
            mass: g,
            duration: v,
            velocity: w,
            isResolvedFromDuration: E
        } = LE({
            ...i,
            velocity: -pn(i.velocity || 0)
        }),
        b = w || 0,
        S = m / (2 * Math.sqrt(p * g)),
        T = c - u,
        A = pn(Math.sqrt(p / g)),
        M = Math.abs(T) < 5;
    o || (o = M ? _e.restSpeed.granular : _e.restSpeed.default), a || (a = M ? _e.restDelta.granular : _e.restDelta.default);
    let O;
    if (S < 1) {
        const V = ec(A, S);
        O = $ => {
            const H = Math.exp(-S * A * $);
            return c - H * ((b + S * A * T) / V * Math.sin(V * $) + T * Math.cos(V * $))
        }
    } else if (S === 1) O = V => c - Math.exp(-A * V) * (T + (b + A * T) * V);
    else {
        const V = A * Math.sqrt(S * S - 1);
        O = $ => {
            const H = Math.exp(-S * A * $),
                G = Math.min(V * $, 300);
            return c - H * ((b + S * A * T) * Math.sinh(G) + V * T * Math.cosh(G)) / V
        }
    }
    const I = {
        calculatedDuration: E && v || null,
        next: V => {
            const $ = O(V);
            if (E) f.done = V >= v;
            else {
                let H = 0;
                S < 1 && (H = V === 0 ? hn(b) : pv(O, V, $));
                const G = Math.abs(H) <= o,
                    oe = Math.abs(c - $) <= a;
                f.done = G && oe
            }
            return f.value = f.done ? c : $, f
        },
        toString: () => {
            const V = Math.min(mv(I), tc),
                $ = fv(H => I.next(V * H).value, V, 30);
            return V + "ms " + $
        }
    };
    return I
}

function em({
    keyframes: e,
    velocity: n = 0,
    power: i = .8,
    timeConstant: o = 325,
    bounceDamping: a = 10,
    bounceStiffness: u = 500,
    modifyTarget: c,
    min: f,
    max: p,
    restDelta: m = .5,
    restSpeed: g
}) {
    const v = e[0],
        w = {
            done: !1,
            value: v
        },
        E = G => f !== void 0 && G < f || p !== void 0 && G > p,
        b = G => f === void 0 ? p : p === void 0 || Math.abs(f - G) < Math.abs(p - G) ? f : p;
    let S = i * n;
    const T = v + S,
        A = c === void 0 ? T : c(T);
    A !== T && (S = A - v);
    const M = G => -S * Math.exp(-G / o),
        O = G => A + M(G),
        I = G => {
            const oe = M(G),
                re = O(G);
            w.done = Math.abs(oe) <= m, w.value = w.done ? A : re
        };
    let V, $;
    const H = G => {
        E(w.value) && (V = G, $ = gv({
            keyframes: [w.value, b(w.value)],
            velocity: pv(O, G, w.value),
            damping: a,
            stiffness: u,
            restDelta: m,
            restSpeed: g
        }))
    };
    return H(0), {
        calculatedDuration: null,
        next: G => {
            let oe = !1;
            return !$ && V === void 0 && (oe = !0, I(G), H(G)), V !== void 0 && G >= V ? $.next(G - V) : (!oe && I(G), w)
        }
    }
}
const _E = hs(.42, 0, 1, 1),
    IE = hs(0, 0, .58, 1),
    yv = hs(.42, 0, .58, 1),
    VE = e => Array.isArray(e) && typeof e[0] != "number",
    Wc = e => Array.isArray(e) && typeof e[0] == "number",
    FE = {
        linear: it,
        easeIn: _E,
        easeInOut: yv,
        easeOut: IE,
        circIn: _c,
        circInOut: Qy,
        circOut: Gy,
        backIn: Lc,
        backInOut: Hy,
        backOut: Wy,
        anticipate: Ky
    },
    tm = e => {
        if (Wc(e)) {
            Fy(e.length === 4);
            const [n, i, o, a] = e;
            return hs(n, i, o, a)
        } else if (typeof e == "string") return FE[e];
        return e
    },
    zE = (e, n) => i => n(e(i)),
    Bn = (...e) => e.reduce(zE),
    Oe = (e, n, i) => e + (n - e) * i;

function Au(e, n, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
}

function BE({
    hue: e,
    saturation: n,
    lightness: i,
    alpha: o
}) {
    e /= 360, n /= 100, i /= 100;
    let a = 0,
        u = 0,
        c = 0;
    if (!n) a = u = c = i;
    else {
        const f = i < .5 ? i * (1 + n) : i + n - i * n,
            p = 2 * i - f;
        a = Au(p, f, e + 1 / 3), u = Au(p, f, e), c = Au(p, f, e - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: o
    }
}

function Go(e, n) {
    return i => i > 0 ? n : e
}
const Nu = (e, n, i) => {
        const o = e * e,
            a = i * (n * n - o) + o;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    UE = [Zu, fr, Hr],
    $E = e => UE.find(n => n.test(e));

function nm(e) {
    const n = $E(e);
    if (!n) return !1;
    let i = n.parse(e);
    return n === Hr && (i = BE(i)), i
}
const rm = (e, n) => {
        const i = nm(e),
            o = nm(n);
        if (!i || !o) return Go(e, n);
        const a = {
            ...i
        };
        return u => (a.red = Nu(i.red, o.red, u), a.green = Nu(i.green, o.green, u), a.blue = Nu(i.blue, o.blue, u), a.alpha = Oe(i.alpha, o.alpha, u), fr.transform(a))
    },
    nc = new Set(["none", "hidden"]);

function WE(e, n) {
    return nc.has(e) ? i => i <= 0 ? e : n : i => i >= 1 ? n : e
}

function HE(e, n) {
    return i => Oe(e, n, i)
}

function Hc(e) {
    return typeof e == "number" ? HE : typeof e == "string" ? Ic(e) ? Go : nt.test(e) ? rm : QE : Array.isArray(e) ? vv : typeof e == "object" ? nt.test(e) ? rm : KE : Go
}

function vv(e, n) {
    const i = [...e],
        o = i.length,
        a = e.map((u, c) => Hc(u)(u, n[c]));
    return u => {
        for (let c = 0; c < o; c++) i[c] = a[c](u);
        return i
    }
}

function KE(e, n) {
    const i = {
            ...e,
            ...n
        },
        o = {};
    for (const a in i) e[a] !== void 0 && n[a] !== void 0 && (o[a] = Hc(e[a])(e[a], n[a]));
    return a => {
        for (const u in o) i[u] = o[u](a);
        return i
    }
}

function GE(e, n) {
    var i;
    const o = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let u = 0; u < n.values.length; u++) {
        const c = n.types[u],
            f = e.indexes[c][a[c]],
            p = (i = e.values[f]) !== null && i !== void 0 ? i : 0;
        o[u] = p, a[c]++
    }
    return o
}
const QE = (e, n) => {
    const i = Gn.createTransformer(n),
        o = ls(e),
        a = ls(n);
    return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? nc.has(e) && !a.values.length || nc.has(n) && !o.values.length ? WE(e, n) : Bn(vv(GE(o, a), a.values), i) : Go(e, n)
};

function xv(e, n, i) {
    return typeof e == "number" && typeof n == "number" && typeof i == "number" ? Oe(e, n, i) : Hc(e)(e, n)
}

function qE(e, n, i) {
    const o = [],
        a = i || xv,
        u = e.length - 1;
    for (let c = 0; c < u; c++) {
        let f = a(e[c], e[c + 1]);
        if (n) {
            const p = Array.isArray(n) ? n[c] || it : n;
            f = Bn(p, f)
        }
        o.push(f)
    }
    return o
}

function YE(e, n, {
    clamp: i = !0,
    ease: o,
    mixer: a
} = {}) {
    const u = e.length;
    if (Fy(u === n.length), u === 1) return () => n[0];
    if (u === 2 && e[0] === e[1]) return () => n[1];
    e[0] > e[u - 1] && (e = [...e].reverse(), n = [...n].reverse());
    const c = qE(n, o, a),
        f = c.length,
        p = m => {
            let g = 0;
            if (f > 1)
                for (; g < e.length - 2 && !(m < e[g + 1]); g++);
            const v = ti(e[g], e[g + 1], m);
            return c[g](v)
        };
    return i ? m => p(yn(e[0], e[u - 1], m)) : p
}

function XE(e, n) {
    const i = e[e.length - 1];
    for (let o = 1; o <= n; o++) {
        const a = ti(0, n, o);
        e.push(Oe(i, 1, a))
    }
}

function ZE(e) {
    const n = [0];
    return XE(n, e.length - 1), n
}

function JE(e, n) {
    return e.map(i => i * n)
}

function eT(e, n) {
    return e.map(() => n || yv).splice(0, e.length - 1)
}

function Qo({
    duration: e = 300,
    keyframes: n,
    times: i,
    ease: o = "easeInOut"
}) {
    const a = VE(o) ? o.map(tm) : tm(o),
        u = {
            done: !1,
            value: n[0]
        },
        c = JE(i && i.length === n.length ? i : ZE(n), e),
        f = YE(c, n, {
            ease: Array.isArray(a) ? a : eT(n, a)
        });
    return {
        calculatedDuration: e,
        next: p => (u.value = f(p), u.done = p >= e, u)
    }
}
const tT = e => {
        const n = ({
            timestamp: i
        }) => e(i);
        return {
            start: () => Te.update(n, !0),
            stop: () => Kn(n),
            now: () => Ye.isProcessing ? Ye.timestamp : Xt.now()
        }
    },
    nT = {
        decay: em,
        inertia: em,
        tween: Qo,
        keyframes: Qo,
        spring: gv
    },
    rT = e => e / 100;
class Kc extends dv {
    constructor(n) {
        super(n), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: p
            } = this.options;
            p && p()
        };
        const {
            name: i,
            motionValue: o,
            element: a,
            keyframes: u
        } = this.options, c = a?.KeyframeResolver || Vc, f = (p, m) => this.onKeyframesResolved(p, m);
        this.resolver = new c(u, f, i, o, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(n) {
        const {
            type: i = "keyframes",
            repeat: o = 0,
            repeatDelay: a = 0,
            repeatType: u,
            velocity: c = 0
        } = this.options, f = $c(i) ? i : nT[i] || Qo;
        let p, m;
        f !== Qo && typeof n[0] != "number" && (p = Bn(rT, xv(n[0], n[1])), n = [0, 100]);
        const g = f({
            ...this.options,
            keyframes: n
        });
        u === "mirror" && (m = f({
            ...this.options,
            keyframes: [...n].reverse(),
            velocity: -c
        })), g.calculatedDuration === null && (g.calculatedDuration = mv(g));
        const {
            calculatedDuration: v
        } = g, w = v + a, E = w * (o + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: p,
            calculatedDuration: v,
            resolvedDuration: w,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {
            autoplay: n = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !n ? this.pause() : this.state = this.pendingPlayState
    }
    tick(n, i = !1) {
        const {
            resolved: o
        } = this;
        if (!o) {
            const {
                keyframes: G
            } = this.options;
            return {
                done: !0,
                value: G[G.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: u,
            mirroredGenerator: c,
            mapPercentToKeyframes: f,
            keyframes: p,
            calculatedDuration: m,
            totalDuration: g,
            resolvedDuration: v
        } = o;
        if (this.startTime === null) return u.next(0);
        const {
            delay: w,
            repeat: E,
            repeatType: b,
            repeatDelay: S,
            onUpdate: T
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - g / this.speed, this.startTime)), i ? this.currentTime = n : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(n - this.startTime) * this.speed;
        const A = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            M = this.speed >= 0 ? A < 0 : A > g;
        this.currentTime = Math.max(A, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let O = this.currentTime,
            I = u;
        if (E) {
            const G = Math.min(this.currentTime, g) / v;
            let oe = Math.floor(G),
                re = G % 1;
            !re && G >= 1 && (re = 1), re === 1 && oe--, oe = Math.min(oe, E + 1), !!(oe % 2) && (b === "reverse" ? (re = 1 - re, S && (re -= S / v)) : b === "mirror" && (I = c)), O = yn(0, 1, re) * v
        }
        const V = M ? {
            done: !1,
            value: p[0]
        } : I.next(O);
        f && (V.value = f(V.value));
        let {
            done: $
        } = V;
        !M && m !== null && ($ = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const H = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return H && a !== void 0 && (V.value = ga(p, this.options, a)), T && T(V.value), H && this.finish(), V
    }
    get duration() {
        const {
            resolved: n
        } = this;
        return n ? pn(n.calculatedDuration) : 0
    }
    get time() {
        return pn(this.currentTime)
    }
    set time(n) {
        n = hn(n), this.currentTime = n, this.holdTime !== null || this.speed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        const i = this.playbackSpeed !== n;
        this.playbackSpeed = n, i && (this.time = pn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: n = tT,
            onPlay: i,
            startTime: o
        } = this.options;
        this.driver || (this.driver = n(u => this.tick(u))), i && i();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = o ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var n;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (n = this.currentTime) !== null && n !== void 0 ? n : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: n
        } = this.options;
        n && n()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0, this.tick(n, !0)
    }
}
const iT = new Set(["opacity", "clipPath", "filter", "transform"]);

function Gc(e) {
    let n;
    return () => (n === void 0 && (n = e()), n)
}
const sT = {
    linearEasing: void 0
};

function oT(e, n) {
    const i = Gc(e);
    return () => {
        var o;
        return (o = sT[n]) !== null && o !== void 0 ? o : i()
    }
}
const qo = oT(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function wv(e) {
    return !!(typeof e == "function" && qo() || !e || typeof e == "string" && (e in rc || qo()) || Wc(e) || Array.isArray(e) && e.every(wv))
}
const Yi = ([e, n, i, o]) => `cubic-bezier(${e}, ${n}, ${i}, ${o})`,
    rc = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Yi([0, .65, .55, 1]),
        circOut: Yi([.55, 0, 1, .45]),
        backIn: Yi([.31, .01, .66, -.59]),
        backOut: Yi([.33, 1.53, .69, .99])
    };

function Sv(e, n) {
    if (e) return typeof e == "function" && qo() ? fv(e, n) : Wc(e) ? Yi(e) : Array.isArray(e) ? e.map(i => Sv(i, n) || rc.easeOut) : rc[e]
}

function aT(e, n, i, {
    delay: o = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: f = "easeInOut",
    times: p
} = {}) {
    const m = {
        [n]: i
    };
    p && (m.offset = p);
    const g = Sv(f, a);
    return Array.isArray(g) && (m.easing = g), e.animate(m, {
        delay: o,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}

function im(e, n) {
    e.timeline = n, e.onfinish = null
}
const lT = Gc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Yo = 10,
    uT = 2e4;

function cT(e) {
    return $c(e.type) || e.type === "spring" || !wv(e.ease)
}

function dT(e, n) {
    const i = new Kc({
        ...n,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let o = {
        done: !1,
        value: e[0]
    };
    const a = [];
    let u = 0;
    for (; !o.done && u < uT;) o = i.sample(u), a.push(o.value), u += Yo;
    return {
        times: void 0,
        keyframes: a,
        duration: u - Yo,
        ease: "linear"
    }
}
const Pv = {
    anticipate: Ky,
    backInOut: Hy,
    circInOut: Qy
};

function fT(e) {
    return e in Pv
}
class sm extends dv {
    constructor(n) {
        super(n);
        const {
            name: i,
            motionValue: o,
            element: a,
            keyframes: u
        } = this.options;
        this.resolver = new cv(u, (c, f) => this.onKeyframesResolved(c, f), i, o, a), this.resolver.scheduleResolve()
    }
    initPlayback(n, i) {
        var o;
        let {
            duration: a = 300,
            times: u,
            ease: c,
            type: f,
            motionValue: p,
            name: m,
            startTime: g
        } = this.options;
        if (!(!((o = p.owner) === null || o === void 0) && o.current)) return !1;
        if (typeof c == "string" && qo() && fT(c) && (c = Pv[c]), cT(this.options)) {
            const {
                onComplete: w,
                onUpdate: E,
                motionValue: b,
                element: S,
                ...T
            } = this.options, A = dT(n, T);
            n = A.keyframes, n.length === 1 && (n[1] = n[0]), a = A.duration, u = A.times, c = A.ease, f = "keyframes"
        }
        const v = aT(p.owner.current, m, n, {
            ...this.options,
            duration: a,
            times: u,
            ease: c
        });
        return v.startTime = g ?? this.calcStartTime(), this.pendingTimeline ? (im(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
            const {
                onComplete: w
            } = this.options;
            p.set(ga(n, this.options, i)), w && w(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: v,
            duration: a,
            times: u,
            type: f,
            ease: c,
            keyframes: n
        }
    }
    get duration() {
        const {
            resolved: n
        } = this;
        if (!n) return 0;
        const {
            duration: i
        } = n;
        return pn(i)
    }
    get time() {
        const {
            resolved: n
        } = this;
        if (!n) return 0;
        const {
            animation: i
        } = n;
        return pn(i.currentTime || 0)
    }
    set time(n) {
        const {
            resolved: i
        } = this;
        if (!i) return;
        const {
            animation: o
        } = i;
        o.currentTime = hn(n)
    }
    get speed() {
        const {
            resolved: n
        } = this;
        if (!n) return 1;
        const {
            animation: i
        } = n;
        return i.playbackRate
    }
    set speed(n) {
        const {
            resolved: i
        } = this;
        if (!i) return;
        const {
            animation: o
        } = i;
        o.playbackRate = n
    }
    get state() {
        const {
            resolved: n
        } = this;
        if (!n) return "idle";
        const {
            animation: i
        } = n;
        return i.playState
    }
    get startTime() {
        const {
            resolved: n
        } = this;
        if (!n) return null;
        const {
            animation: i
        } = n;
        return i.startTime
    }
    attachTimeline(n) {
        if (!this._resolved) this.pendingTimeline = n;
        else {
            const {
                resolved: i
            } = this;
            if (!i) return it;
            const {
                animation: o
            } = i;
            im(o, n)
        }
        return it
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: i
        } = n;
        i.playState === "finished" && this.updateFinishedPromise(), i.play()
    }
    pause() {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: i
        } = n;
        i.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: i,
            keyframes: o,
            duration: a,
            type: u,
            ease: c,
            times: f
        } = n;
        if (i.playState === "idle" || i.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: m,
                onUpdate: g,
                onComplete: v,
                element: w,
                ...E
            } = this.options, b = new Kc({
                ...E,
                keyframes: o,
                duration: a,
                type: u,
                ease: c,
                times: f,
                isGenerator: !0
            }), S = hn(this.time);
            m.setWithVelocity(b.sample(S - Yo).value, b.sample(S).value, Yo)
        }
        const {
            onStop: p
        } = this.options;
        p && p(), this.cancel()
    }
    complete() {
        const {
            resolved: n
        } = this;
        n && n.animation.finish()
    }
    cancel() {
        const {
            resolved: n
        } = this;
        n && n.animation.cancel()
    }
    static supports(n) {
        const {
            motionValue: i,
            name: o,
            repeatDelay: a,
            repeatType: u,
            damping: c,
            type: f
        } = n;
        return lT() && o && iT.has(o) && i && i.owner && i.owner.current instanceof HTMLElement && !i.owner.getProps().onUpdate && !a && u !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const hT = Gc(() => window.ScrollTimeline !== void 0);
class pT {
    constructor(n) {
        this.stop = () => this.runAll("stop"), this.animations = n.filter(Boolean)
    }
    then(n, i) {
        return Promise.all(this.animations).then(n).catch(i)
    }
    getAll(n) {
        return this.animations[0][n]
    }
    setAll(n, i) {
        for (let o = 0; o < this.animations.length; o++) this.animations[o][n] = i
    }
    attachTimeline(n, i) {
        const o = this.animations.map(a => hT() && a.attachTimeline ? a.attachTimeline(n) : i(a));
        return () => {
            o.forEach((a, u) => {
                a && a(), this.animations[u].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(n) {
        this.setAll("time", n)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(n) {
        this.setAll("speed", n)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let n = 0;
        for (let i = 0; i < this.animations.length; i++) n = Math.max(n, this.animations[i].duration);
        return n
    }
    runAll(n) {
        this.animations.forEach(i => i[n]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function mT({
    when: e,
    delay: n,
    delayChildren: i,
    staggerChildren: o,
    staggerDirection: a,
    repeat: u,
    repeatType: c,
    repeatDelay: f,
    from: p,
    elapsed: m,
    ...g
}) {
    return !!Object.keys(g).length
}
const Qc = (e, n, i, o = {}, a, u) => c => {
        const f = Oc(o, e) || {},
            p = f.delay || o.delay || 0;
        let {
            elapsed: m = 0
        } = o;
        m = m - hn(p);
        let g = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: n.getVelocity(),
            ...f,
            delay: -m,
            onUpdate: w => {
                n.set(w), f.onUpdate && f.onUpdate(w)
            },
            onComplete: () => {
                c(), f.onComplete && f.onComplete()
            },
            name: e,
            motionValue: n,
            element: u ? void 0 : a
        };
        mT(f) || (g = {
            ...g,
            ...FC(e, g)
        }), g.duration && (g.duration = hn(g.duration)), g.repeatDelay && (g.repeatDelay = hn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
        let v = !1;
        if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (v = !0)), v && !u && n.get() !== void 0) {
            const w = ga(g.keyframes, f);
            if (w !== void 0) return Te.update(() => {
                g.onUpdate(w), g.onComplete()
            }), new pT([])
        }
        return !u && sm.supports(g) ? new sm(g) : new Kc(g)
    },
    gT = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    yT = e => qu(e) ? e[e.length - 1] || 0 : e;

function qc(e, n) {
    e.indexOf(n) === -1 && e.push(n)
}

function Yc(e, n) {
    const i = e.indexOf(n);
    i > -1 && e.splice(i, 1)
}
class Xc {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return qc(this.subscriptions, n), () => Yc(this.subscriptions, n)
    }
    notify(n, i, o) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](n, i, o);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(n, i, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const om = 30,
    vT = e => !isNaN(parseFloat(e));
class xT {
    constructor(n, i = {}) {
        this.version = "11.13.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, a = !0) => {
            const u = Xt.now();
            this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(n), this.owner = i.owner
    }
    setCurrent(n) {
        this.current = n, this.updatedAt = Xt.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = vT(this.current))
    }
    setPrevFrameValue(n = this.current) {
        this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, i) {
        this.events[n] || (this.events[n] = new Xc);
        const o = this.events[n].add(i);
        return n === "change" ? () => {
            o(), Te.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : o
    }
    clearListeners() {
        for (const n in this.events) this.events[n].clear()
    }
    attach(n, i) {
        this.passiveEffect = n, this.stopPassiveEffect = i
    }
    set(n, i = !0) {
        !i || !this.passiveEffect ? this.updateAndNotify(n, i) : this.passiveEffect(n, this.updateAndNotify)
    }
    setWithVelocity(n, i, o) {
        this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - o
    }
    jump(n, i = !0) {
        this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = Xt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > om) return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, om);
        return hv(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(n) {
        return this.stop(), new Promise(i => {
            this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function us(e, n) {
    return new xT(e, n)
}

function wT(e, n, i) {
    e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, us(i))
}

function ST(e, n) {
    const i = ma(e, n);
    let {
        transitionEnd: o = {},
        transition: a = {},
        ...u
    } = i || {};
    u = {
        ...u,
        ...o
    };
    for (const c in u) {
        const f = yT(u[c]);
        wT(e, c, f)
    }
}
const Zc = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    PT = "framerAppearId",
    Cv = "data-" + Zc(PT);

function Ev(e) {
    return e.props[Cv]
}
const rt = e => !!(e && e.getVelocity);

function CT(e) {
    return !!(rt(e) && e.add)
}

function ic(e, n) {
    const i = e.getValue("willChange");
    if (CT(i)) return i.add(n)
}

function ET({
    protectedKeys: e,
    needsAnimating: n
}, i) {
    const o = e.hasOwnProperty(i) && n[i] !== !0;
    return n[i] = !1, o
}

function Tv(e, n, {
    delay: i = 0,
    transitionOverride: o,
    type: a
} = {}) {
    var u;
    let {
        transition: c = e.getDefaultTransition(),
        transitionEnd: f,
        ...p
    } = n;
    o && (c = o);
    const m = [],
        g = a && e.animationState && e.animationState.getState()[a];
    for (const v in p) {
        const w = e.getValue(v, (u = e.latestValues[v]) !== null && u !== void 0 ? u : null),
            E = p[v];
        if (E === void 0 || g && ET(g, v)) continue;
        const b = {
            delay: i,
            ...Oc(c || {}, v)
        };
        let S = !1;
        if (window.MotionHandoffAnimation) {
            const A = Ev(e);
            if (A) {
                const M = window.MotionHandoffAnimation(A, v, Te);
                M !== null && (b.startTime = M, S = !0)
            }
        }
        ic(e, v), w.start(Qc(v, w, E, e.shouldReduceMotion && vr.has(v) ? {
            type: !1
        } : b, e, S));
        const T = w.animation;
        T && m.push(T)
    }
    return f && Promise.all(m).then(() => {
        Te.update(() => {
            f && ST(e, f)
        })
    }), m
}

function sc(e, n, i = {}) {
    var o;
    const a = ma(e, n, i.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
    let {
        transition: u = e.getDefaultTransition() || {}
    } = a || {};
    i.transitionOverride && (u = i.transitionOverride);
    const c = a ? () => Promise.all(Tv(e, a, i)) : () => Promise.resolve(),
        f = e.variantChildren && e.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: v,
                staggerDirection: w
            } = u;
            return TT(e, n, g + m, v, w, i)
        } : () => Promise.resolve(),
        {
            when: p
        } = u;
    if (p) {
        const [m, g] = p === "beforeChildren" ? [c, f] : [f, c];
        return m().then(() => g())
    } else return Promise.all([c(), f(i.delay)])
}

function TT(e, n, i = 0, o = 0, a = 1, u) {
    const c = [],
        f = (e.variantChildren.size - 1) * o,
        p = a === 1 ? (m = 0) => m * o : (m = 0) => f - m * o;
    return Array.from(e.variantChildren).sort(bT).forEach((m, g) => {
        m.notify("AnimationStart", n), c.push(sc(m, n, {
            ...u,
            delay: i + p(g)
        }).then(() => m.notify("AnimationComplete", n)))
    }), Promise.all(c)
}

function bT(e, n) {
    return e.sortNodePosition(n)
}

function kT(e, n, i = {}) {
    e.notify("AnimationStart", n);
    let o;
    if (Array.isArray(n)) {
        const a = n.map(u => sc(e, u, i));
        o = Promise.all(a)
    } else if (typeof n == "string") o = sc(e, n, i);
    else {
        const a = typeof n == "function" ? ma(e, n, i.custom) : n;
        o = Promise.all(Tv(e, a, i))
    }
    return o.then(() => {
        e.notify("AnimationComplete", n)
    })
}
const RT = Dc.length;

function bv(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const i = e.parent ? bv(e.parent) || {} : {};
        return e.props.initial !== void 0 && (i.initial = e.props.initial), i
    }
    const n = {};
    for (let i = 0; i < RT; i++) {
        const o = Dc[i],
            a = e.props[o];
        (os(a) || a === !1) && (n[o] = a)
    }
    return n
}
const AT = [...Mc].reverse(),
    NT = Mc.length;

function jT(e) {
    return n => Promise.all(n.map(({
        animation: i,
        options: o
    }) => kT(e, i, o)))
}

function MT(e) {
    let n = jT(e),
        i = am(),
        o = !0;
    const a = p => (m, g) => {
        var v;
        const w = ma(e, g, p === "exit" ? (v = e.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
        if (w) {
            const {
                transition: E,
                transitionEnd: b,
                ...S
            } = w;
            m = {
                ...m,
                ...S,
                ...b
            }
        }
        return m
    };

    function u(p) {
        n = p(e)
    }

    function c(p) {
        const {
            props: m
        } = e, g = bv(e.parent) || {}, v = [], w = new Set;
        let E = {},
            b = 1 / 0;
        for (let T = 0; T < NT; T++) {
            const A = AT[T],
                M = i[A],
                O = m[A] !== void 0 ? m[A] : g[A],
                I = os(O),
                V = A === p ? M.isActive : null;
            V === !1 && (b = T);
            let $ = O === g[A] && O !== m[A] && I;
            if ($ && o && e.manuallyAnimateOnMount && ($ = !1), M.protectedKeys = {
                    ...E
                }, !M.isActive && V === null || !O && !M.prevProp || pa(O) || typeof O == "boolean") continue;
            const H = DT(M.prevProp, O);
            let G = H || A === p && M.isActive && !$ && I || T > b && I,
                oe = !1;
            const re = Array.isArray(O) ? O : [O];
            let de = re.reduce(a(A), {});
            V === !1 && (de = {});
            const {
                prevResolvedValues: ne = {}
            } = M, he = {
                ...ne,
                ...de
            }, q = X => {
                G = !0, w.has(X) && (oe = !0, w.delete(X)), M.needsAnimating[X] = !0;
                const _ = e.getValue(X);
                _ && (_.liveStyle = !1)
            };
            for (const X in he) {
                const _ = de[X],
                    Q = ne[X];
                if (E.hasOwnProperty(X)) continue;
                let K = !1;
                qu(_) && qu(Q) ? K = !Vy(_, Q) : K = _ !== Q, K ? _ != null ? q(X) : w.add(X) : _ !== void 0 && w.has(X) ? q(X) : M.protectedKeys[X] = !0
            }
            M.prevProp = O, M.prevResolvedValues = de, M.isActive && (E = {
                ...E,
                ...de
            }), o && e.blockInitialAnimation && (G = !1), G && (!($ && H) || oe) && v.push(...re.map(X => ({
                animation: X,
                options: {
                    type: A
                }
            })))
        }
        if (w.size) {
            const T = {};
            w.forEach(A => {
                const M = e.getBaseTarget(A),
                    O = e.getValue(A);
                O && (O.liveStyle = !0), T[A] = M ?? null
            }), v.push({
                animation: T
            })
        }
        let S = !!v.length;
        return o && (m.initial === !1 || m.initial === m.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, S ? n(v) : Promise.resolve()
    }

    function f(p, m) {
        var g;
        if (i[p].isActive === m) return Promise.resolve();
        (g = e.variantChildren) === null || g === void 0 || g.forEach(w => {
            var E;
            return (E = w.animationState) === null || E === void 0 ? void 0 : E.setActive(p, m)
        }), i[p].isActive = m;
        const v = c(p);
        for (const w in i) i[w].protectedKeys = {};
        return v
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: u,
        getState: () => i,
        reset: () => {
            i = am(), o = !0
        }
    }
}

function DT(e, n) {
    return typeof n == "string" ? n !== e : Array.isArray(n) ? !Vy(n, e) : !1
}

function ur(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function am() {
    return {
        animate: ur(!0),
        whileInView: ur(),
        whileHover: ur(),
        whileTap: ur(),
        whileDrag: ur(),
        whileFocus: ur(),
        exit: ur()
    }
}
class qn {
    constructor(n) {
        this.isMounted = !1, this.node = n
    }
    update() {}
}
class OT extends qn {
    constructor(n) {
        super(n), n.animationState || (n.animationState = MT(n))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: n
        } = this.node.getProps();
        pa(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: n
        } = this.node.getProps(), {
            animate: i
        } = this.node.prevProps || {};
        n !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var n;
        this.node.animationState.reset(), (n = this.unmountControls) === null || n === void 0 || n.call(this)
    }
}
let LT = 0;
class _T extends qn {
    constructor() {
        super(...arguments), this.id = LT++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: n,
            onExitComplete: i
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === o) return;
        const a = this.node.animationState.setActive("exit", !n);
        i && !n && a.then(() => i(this.id))
    }
    mount() {
        const {
            register: n
        } = this.node.presenceContext || {};
        n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const IT = {
    animation: {
        Feature: OT
    },
    exit: {
        Feature: _T
    }
};

function VT(e, n, i) {
    var o;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let a = document;
        const u = (o = void 0) !== null && o !== void 0 ? o : a.querySelectorAll(e);
        return u ? Array.from(u) : []
    }
    return Array.from(e)
}
const Ft = {
    x: !1,
    y: !1
};

function kv() {
    return Ft.x || Ft.y
}

function lm(e) {
    return n => {
        n.pointerType === "touch" || kv() || e(n)
    }
}

function FT(e, n, i = {}) {
    const o = new AbortController,
        a = {
            passive: !0,
            ...i,
            signal: o.signal
        },
        u = lm(c => {
            const {
                target: f
            } = c, p = n(c);
            if (!p || !f) return;
            const m = lm(g => {
                p(g), f.removeEventListener("pointerleave", m)
            });
            f.addEventListener("pointerleave", m, a)
        });
    return VT(e).forEach(c => {
        c.addEventListener("pointerenter", u, a)
    }), () => o.abort()
}

function zT(e) {
    return e === "x" || e === "y" ? Ft[e] ? null : (Ft[e] = !0, () => {
        Ft[e] = !1
    }) : Ft.x || Ft.y ? null : (Ft.x = Ft.y = !0, () => {
        Ft.x = Ft.y = !1
    })
}
const Rv = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function ms(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const BT = e => n => Rv(n) && e(n, ms(n));

function fn(e, n, i, o = {
    passive: !0
}) {
    return e.addEventListener(n, i, o), () => e.removeEventListener(n, i)
}

function Un(e, n, i, o) {
    return fn(e, n, BT(i), o)
}
const um = (e, n) => Math.abs(e - n);

function UT(e, n) {
    const i = um(e.x, n.x),
        o = um(e.y, n.y);
    return Math.sqrt(i ** 2 + o ** 2)
}
class Av {
    constructor(n, i, {
        transformPagePoint: o,
        contextWindow: a,
        dragSnapToOrigin: u = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const v = Mu(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    E = UT(v.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !E) return;
                const {
                    point: b
                } = v, {
                    timestamp: S
                } = Ye;
                this.history.push({
                    ...b,
                    timestamp: S
                });
                const {
                    onStart: T,
                    onMove: A
                } = this.handlers;
                w || (T && T(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), A && A(this.lastMoveEvent, v)
            }, this.handlePointerMove = (v, w) => {
                this.lastMoveEvent = v, this.lastMoveEventInfo = ju(w, this.transformPagePoint), Te.update(this.updatePoint, !0)
            }, this.handlePointerUp = (v, w) => {
                this.end();
                const {
                    onEnd: E,
                    onSessionEnd: b,
                    resumeAnimation: S
                } = this.handlers;
                if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const T = Mu(v.type === "pointercancel" ? this.lastMoveEventInfo : ju(w, this.transformPagePoint), this.history);
                this.startEvent && E && E(v, T), b && b(v, T)
            }, !Rv(n)) return;
        this.dragSnapToOrigin = u, this.handlers = i, this.transformPagePoint = o, this.contextWindow = a || window;
        const c = ms(n),
            f = ju(c, this.transformPagePoint),
            {
                point: p
            } = f,
            {
                timestamp: m
            } = Ye;
        this.history = [{
            ...p,
            timestamp: m
        }];
        const {
            onSessionStart: g
        } = i;
        g && g(n, Mu(f, this.history)), this.removeListeners = Bn(Un(this.contextWindow, "pointermove", this.handlePointerMove), Un(this.contextWindow, "pointerup", this.handlePointerUp), Un(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(), Kn(this.updatePoint)
    }
}

function ju(e, n) {
    return n ? {
        point: n(e.point)
    } : e
}

function cm(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}

function Mu({
    point: e
}, n) {
    return {
        point: e,
        delta: cm(e, Nv(n)),
        offset: cm(e, $T(n)),
        velocity: WT(n, .1)
    }
}

function $T(e) {
    return e[0]
}

function Nv(e) {
    return e[e.length - 1]
}

function WT(e, n) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let i = e.length - 1,
        o = null;
    const a = Nv(e);
    for (; i >= 0 && (o = e[i], !(a.timestamp - o.timestamp > hn(n)));) i--;
    if (!o) return {
        x: 0,
        y: 0
    };
    const u = pn(a.timestamp - o.timestamp);
    if (u === 0) return {
        x: 0,
        y: 0
    };
    const c = {
        x: (a.x - o.x) / u,
        y: (a.y - o.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}

function Kr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const jv = 1e-4,
    HT = 1 - jv,
    KT = 1 + jv,
    Mv = .01,
    GT = 0 - Mv,
    QT = 0 + Mv;

function Ct(e) {
    return e.max - e.min
}

function qT(e, n, i) {
    return Math.abs(e - n) <= i
}

function dm(e, n, i, o = .5) {
    e.origin = o, e.originPoint = Oe(n.min, n.max, e.origin), e.scale = Ct(i) / Ct(n), e.translate = Oe(i.min, i.max, e.origin) - e.originPoint, (e.scale >= HT && e.scale <= KT || isNaN(e.scale)) && (e.scale = 1), (e.translate >= GT && e.translate <= QT || isNaN(e.translate)) && (e.translate = 0)
}

function ts(e, n, i, o) {
    dm(e.x, n.x, i.x, o ? o.originX : void 0), dm(e.y, n.y, i.y, o ? o.originY : void 0)
}

function fm(e, n, i) {
    e.min = i.min + n.min, e.max = e.min + Ct(n)
}

function YT(e, n, i) {
    fm(e.x, n.x, i.x), fm(e.y, n.y, i.y)
}

function hm(e, n, i) {
    e.min = n.min - i.min, e.max = e.min + Ct(n)
}

function ns(e, n, i) {
    hm(e.x, n.x, i.x), hm(e.y, n.y, i.y)
}

function XT(e, {
    min: n,
    max: i
}, o) {
    return n !== void 0 && e < n ? e = o ? Oe(n, e, o.min) : Math.max(e, n) : i !== void 0 && e > i && (e = o ? Oe(i, e, o.max) : Math.min(e, i)), e
}

function pm(e, n, i) {
    return {
        min: n !== void 0 ? e.min + n : void 0,
        max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
    }
}

function ZT(e, {
    top: n,
    left: i,
    bottom: o,
    right: a
}) {
    return {
        x: pm(e.x, i, a),
        y: pm(e.y, n, o)
    }
}

function mm(e, n) {
    let i = n.min - e.min,
        o = n.max - e.max;
    return n.max - n.min < e.max - e.min && ([i, o] = [o, i]), {
        min: i,
        max: o
    }
}

function JT(e, n) {
    return {
        x: mm(e.x, n.x),
        y: mm(e.y, n.y)
    }
}

function eb(e, n) {
    let i = .5;
    const o = Ct(e),
        a = Ct(n);
    return a > o ? i = ti(n.min, n.max - o, e.min) : o > a && (i = ti(e.min, e.max - a, n.min)), yn(0, 1, i)
}

function tb(e, n) {
    const i = {};
    return n.min !== void 0 && (i.min = n.min - e.min), n.max !== void 0 && (i.max = n.max - e.min), i
}
const oc = .35;

function nb(e = oc) {
    return e === !1 ? e = 0 : e === !0 && (e = oc), {
        x: gm(e, "left", "right"),
        y: gm(e, "top", "bottom")
    }
}

function gm(e, n, i) {
    return {
        min: ym(e, n),
        max: ym(e, i)
    }
}

function ym(e, n) {
    return typeof e == "number" ? e : e[n] || 0
}
const vm = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Gr = () => ({
        x: vm(),
        y: vm()
    }),
    xm = () => ({
        min: 0,
        max: 0
    }),
    Fe = () => ({
        x: xm(),
        y: xm()
    });

function jt(e) {
    return [e("x"), e("y")]
}

function Dv({
    top: e,
    left: n,
    right: i,
    bottom: o
}) {
    return {
        x: {
            min: n,
            max: i
        },
        y: {
            min: e,
            max: o
        }
    }
}

function rb({
    x: e,
    y: n
}) {
    return {
        top: n.min,
        right: e.max,
        bottom: n.max,
        left: e.min
    }
}

function ib(e, n) {
    if (!n) return e;
    const i = n({
            x: e.left,
            y: e.top
        }),
        o = n({
            x: e.right,
            y: e.bottom
        });
    return {
        top: i.y,
        left: i.x,
        bottom: o.y,
        right: o.x
    }
}

function Du(e) {
    return e === void 0 || e === 1
}

function ac({
    scale: e,
    scaleX: n,
    scaleY: i
}) {
    return !Du(e) || !Du(n) || !Du(i)
}

function cr(e) {
    return ac(e) || Ov(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Ov(e) {
    return wm(e.x) || wm(e.y)
}

function wm(e) {
    return e && e !== "0%"
}

function Xo(e, n, i) {
    const o = e - i,
        a = n * o;
    return i + a
}

function Sm(e, n, i, o, a) {
    return a !== void 0 && (e = Xo(e, a, o)), Xo(e, i, o) + n
}

function lc(e, n = 0, i = 1, o, a) {
    e.min = Sm(e.min, n, i, o, a), e.max = Sm(e.max, n, i, o, a)
}

function Lv(e, {
    x: n,
    y: i
}) {
    lc(e.x, n.translate, n.scale, n.originPoint), lc(e.y, i.translate, i.scale, i.originPoint)
}
const Pm = .999999999999,
    Cm = 1.0000000000001;

function sb(e, n, i, o = !1) {
    const a = i.length;
    if (!a) return;
    n.x = n.y = 1;
    let u, c;
    for (let f = 0; f < a; f++) {
        u = i[f], c = u.projectionDelta;
        const {
            visualElement: p
        } = u.options;
        p && p.props.style && p.props.style.display === "contents" || (o && u.options.layoutScroll && u.scroll && u !== u.root && qr(e, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }), c && (n.x *= c.x.scale, n.y *= c.y.scale, Lv(e, c)), o && cr(u.latestValues) && qr(e, u.latestValues))
    }
    n.x < Cm && n.x > Pm && (n.x = 1), n.y < Cm && n.y > Pm && (n.y = 1)
}

function Qr(e, n) {
    e.min = e.min + n, e.max = e.max + n
}

function Em(e, n, i, o, a = .5) {
    const u = Oe(e.min, e.max, a);
    lc(e, n, i, u, o)
}

function qr(e, n) {
    Em(e.x, n.x, n.scaleX, n.scale, n.originX), Em(e.y, n.y, n.scaleY, n.scale, n.originY)
}

function _v(e, n) {
    return Dv(ib(e.getBoundingClientRect(), n))
}

function ob(e, n, i) {
    const o = _v(e, i),
        {
            scroll: a
        } = n;
    return a && (Qr(o.x, a.offset.x), Qr(o.y, a.offset.y)), o
}
const Iv = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    ab = new WeakMap;
class lb {
    constructor(n) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Fe(), this.visualElement = n
    }
    start(n, {
        snapToCursor: i = !1
    } = {}) {
        const {
            presenceContext: o
        } = this.visualElement;
        if (o && o.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: v
                } = this.getProps();
                v ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(ms(g).point)
            },
            u = (g, v) => {
                const {
                    drag: w,
                    dragPropagation: E,
                    onDragStart: b
                } = this.getProps();
                if (w && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = zT(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), jt(T => {
                    let A = this.getAxisMotionValue(T).get() || 0;
                    if (Yt.test(A)) {
                        const {
                            projection: M
                        } = this.visualElement;
                        if (M && M.layout) {
                            const O = M.layout.layoutBox[T];
                            O && (A = Ct(O) * (parseFloat(A) / 100))
                        }
                    }
                    this.originPoint[T] = A
                }), b && Te.postRender(() => b(g, v)), ic(this.visualElement, "transform");
                const {
                    animationState: S
                } = this.visualElement;
                S && S.setActive("whileDrag", !0)
            },
            c = (g, v) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: E,
                    onDirectionLock: b,
                    onDrag: S
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: T
                } = v;
                if (E && this.currentDirection === null) {
                    this.currentDirection = ub(T), this.currentDirection !== null && b && b(this.currentDirection);
                    return
                }
                this.updateAxis("x", v.point, T), this.updateAxis("y", v.point, T), this.visualElement.render(), S && S(g, v)
            },
            f = (g, v) => this.stop(g, v),
            p = () => jt(g => {
                var v;
                return this.getAnimationState(g) === "paused" && ((v = this.getAxisMotionValue(g).animation) === null || v === void 0 ? void 0 : v.play())
            }),
            {
                dragSnapToOrigin: m
            } = this.getProps();
        this.panSession = new Av(n, {
            onSessionStart: a,
            onStart: u,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Iv(this.visualElement)
        })
    }
    stop(n, i) {
        const o = this.isDragging;
        if (this.cancel(), !o) return;
        const {
            velocity: a
        } = i;
        this.startAnimation(a);
        const {
            onDragEnd: u
        } = this.getProps();
        u && Te.postRender(() => u(n, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: n,
            animationState: i
        } = this.visualElement;
        n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: o
        } = this.getProps();
        !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1)
    }
    updateAxis(n, i, o) {
        const {
            drag: a
        } = this.getProps();
        if (!o || !Do(n, a, this.currentDirection)) return;
        const u = this.getAxisMotionValue(n);
        let c = this.originPoint[n] + o[n];
        this.constraints && this.constraints[n] && (c = XT(c, this.constraints[n], this.elastic[n])), u.set(c)
    }
    resolveConstraints() {
        var n;
        const {
            dragConstraints: i,
            dragElastic: o
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout, u = this.constraints;
        i && Kr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = ZT(a.layoutBox, i) : this.constraints = !1, this.elastic = nb(o), u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && jt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = tb(a.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: n,
            onMeasureDragConstraints: i
        } = this.getProps();
        if (!n || !Kr(n)) return !1;
        const o = n.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const u = ob(o, a.root, this.visualElement.getTransformPagePoint());
        let c = JT(a.layout.layoutBox, u);
        if (i) {
            const f = i(rb(c));
            this.hasMutatedConstraints = !!f, f && (c = Dv(f))
        }
        return c
    }
    startAnimation(n) {
        const {
            drag: i,
            dragMomentum: o,
            dragElastic: a,
            dragTransition: u,
            dragSnapToOrigin: c,
            onDragTransitionEnd: f
        } = this.getProps(), p = this.constraints || {}, m = jt(g => {
            if (!Do(g, i, this.currentDirection)) return;
            let v = p && p[g] || {};
            c && (v = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6,
                E = a ? 40 : 1e7,
                b = {
                    type: "inertia",
                    velocity: o ? n[g] : 0,
                    bounceStiffness: w,
                    bounceDamping: E,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...u,
                    ...v
                };
            return this.startAxisValueAnimation(g, b)
        });
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(n, i) {
        const o = this.getAxisMotionValue(n);
        return ic(this.visualElement, n), o.start(Qc(n, o, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        jt(n => this.getAxisMotionValue(n).stop())
    }
    pauseAnimation() {
        jt(n => {
            var i;
            return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.pause()
        })
    }
    getAnimationState(n) {
        var i;
        return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.state
    }
    getAxisMotionValue(n) {
        const i = `_drag${n.toUpperCase()}`,
            o = this.visualElement.getProps(),
            a = o[i];
        return a || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        jt(i => {
            const {
                drag: o
            } = this.getProps();
            if (!Do(i, o, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, u = this.getAxisMotionValue(i);
            if (a && a.layout) {
                const {
                    min: c,
                    max: f
                } = a.layout.layoutBox[i];
                u.set(n[i] - Oe(c, f, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: n,
            dragConstraints: i
        } = this.getProps(), {
            projection: o
        } = this.visualElement;
        if (!Kr(i) || !o || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        jt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const p = f.get();
                a[c] = eb({
                    min: p,
                    max: p
                }, this.constraints[c])
            }
        });
        const {
            transformTemplate: u
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), jt(c => {
            if (!Do(c, n, null)) return;
            const f = this.getAxisMotionValue(c),
                {
                    min: p,
                    max: m
                } = this.constraints[c];
            f.set(Oe(p, m, a[c]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        ab.set(this.visualElement, this);
        const n = this.visualElement.current,
            i = Un(n, "pointerdown", p => {
                const {
                    drag: m,
                    dragListener: g = !0
                } = this.getProps();
                m && g && this.start(p)
            }),
            o = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                Kr(p) && p.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            u = a.addEventListener("measure", o);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Te.read(o);
        const c = fn(window, "resize", () => this.scalePositionWithinConstraints()),
            f = a.addEventListener("didUpdate", ({
                delta: p,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (jt(g => {
                    const v = this.getAxisMotionValue(g);
                    v && (this.originPoint[g] += p[g].translate, v.set(v.get() + p[g].translate))
                }), this.visualElement.render())
            });
        return () => {
            c(), i(), u(), f && f()
        }
    }
    getProps() {
        const n = this.visualElement.getProps(),
            {
                drag: i = !1,
                dragDirectionLock: o = !1,
                dragPropagation: a = !1,
                dragConstraints: u = !1,
                dragElastic: c = oc,
                dragMomentum: f = !0
            } = n;
        return {
            ...n,
            drag: i,
            dragDirectionLock: o,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: f
        }
    }
}

function Do(e, n, i) {
    return (n === !0 || n === e) && (i === null || i === e)
}

function ub(e, n = 10) {
    let i = null;
    return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"), i
}
class cb extends qn {
    constructor(n) {
        super(n), this.removeGroupControls = it, this.removeListeners = it, this.controls = new lb(n)
    }
    mount() {
        const {
            dragControls: n
        } = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || it
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Tm = e => (n, i) => {
    e && Te.postRender(() => e(n, i))
};
class db extends qn {
    constructor() {
        super(...arguments), this.removePointerDownListener = it
    }
    onPointerDown(n) {
        this.session = new Av(n, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Iv(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: n,
            onPanStart: i,
            onPan: o,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: Tm(n),
            onStart: Tm(i),
            onMove: o,
            onEnd: (u, c) => {
                delete this.session, a && Te.postRender(() => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Un(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Jc = P.createContext(null);

function fb() {
    const e = P.useContext(Jc);
    if (e === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: i,
        register: o
    } = e, a = P.useId();
    P.useEffect(() => o(a), []);
    const u = P.useCallback(() => i && i(a), [a, i]);
    return !n && i ? [!1, u] : [!0]
}
const Vv = P.createContext({}),
    Fv = P.createContext({}),
    Vo = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function bm(e, n) {
    return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const qi = {
        correct: (e, n) => {
            if (!n.target) return e;
            if (typeof e == "string")
                if (ae.test(e)) e = parseFloat(e);
                else return e;
            const i = bm(e, n.target.x),
                o = bm(e, n.target.y);
            return `${i}% ${o}%`
        }
    },
    hb = {
        correct: (e, {
            treeScale: n,
            projectionDelta: i
        }) => {
            const o = e,
                a = Gn.parse(e);
            if (a.length > 5) return o;
            const u = Gn.createTransformer(e),
                c = typeof a[0] != "number" ? 1 : 0,
                f = i.x.scale * n.x,
                p = i.y.scale * n.y;
            a[0 + c] /= f, a[1 + c] /= p;
            const m = Oe(f, p, .5);
            return typeof a[2 + c] == "number" && (a[2 + c] /= m), typeof a[3 + c] == "number" && (a[3 + c] /= m), u(a)
        }
    },
    Zo = {};

function pb(e) {
    Object.assign(Zo, e)
}
const {
    schedule: ed
} = zy(queueMicrotask, !1);
class mb extends P.Component {
    componentDidMount() {
        const {
            visualElement: n,
            layoutGroup: i,
            switchLayoutGroup: o,
            layoutId: a
        } = this.props, {
            projection: u
        } = n;
        pb(gb), u && (i.group && i.group.add(u), o && o.register && a && o.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })), Vo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {
            layoutDependency: i,
            visualElement: o,
            drag: a,
            isPresent: u
        } = this.props, c = o.projection;
        return c && (c.isPresent = u, a || n.layoutDependency !== i || i === void 0 ? c.willUpdate() : this.safeToRemove(), n.isPresent !== u && (u ? c.promote() : c.relegate() || Te.postRender(() => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: n
        } = this.props.visualElement;
        n && (n.root.didUpdate(), ed.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: n,
            layoutGroup: i,
            switchLayoutGroup: o
        } = this.props, {
            projection: a
        } = n;
        a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), o && o.deregister && o.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: n
        } = this.props;
        n && n()
    }
    render() {
        return null
    }
}

function zv(e) {
    const [n, i] = fb(), o = P.useContext(Vv);
    return x.jsx(mb, {
        ...e,
        layoutGroup: o,
        switchLayoutGroup: P.useContext(Fv),
        isPresent: n,
        safeToRemove: i
    })
}
const gb = {
        borderRadius: {
            ...qi,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: qi,
        borderTopRightRadius: qi,
        borderBottomLeftRadius: qi,
        borderBottomRightRadius: qi,
        boxShadow: hb
    },
    Bv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    yb = Bv.length,
    km = e => typeof e == "string" ? parseFloat(e) : e,
    Rm = e => typeof e == "number" || ae.test(e);

function vb(e, n, i, o, a, u) {
    a ? (e.opacity = Oe(0, i.opacity !== void 0 ? i.opacity : 1, xb(o)), e.opacityExit = Oe(n.opacity !== void 0 ? n.opacity : 1, 0, wb(o))) : u && (e.opacity = Oe(n.opacity !== void 0 ? n.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, o));
    for (let c = 0; c < yb; c++) {
        const f = `border${Bv[c]}Radius`;
        let p = Am(n, f),
            m = Am(i, f);
        if (p === void 0 && m === void 0) continue;
        p || (p = 0), m || (m = 0), p === 0 || m === 0 || Rm(p) === Rm(m) ? (e[f] = Math.max(Oe(km(p), km(m), o), 0), (Yt.test(m) || Yt.test(p)) && (e[f] += "%")) : e[f] = m
    }(n.rotate || i.rotate) && (e.rotate = Oe(n.rotate || 0, i.rotate || 0, o))
}

function Am(e, n) {
    return e[n] !== void 0 ? e[n] : e.borderRadius
}
const xb = Uv(0, .5, Gy),
    wb = Uv(.5, .95, it);

function Uv(e, n, i) {
    return o => o < e ? 0 : o > n ? 1 : i(ti(e, n, o))
}

function Nm(e, n) {
    e.min = n.min, e.max = n.max
}

function Nt(e, n) {
    Nm(e.x, n.x), Nm(e.y, n.y)
}

function jm(e, n) {
    e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin
}

function Mm(e, n, i, o, a) {
    return e -= n, e = Xo(e, 1 / i, o), a !== void 0 && (e = Xo(e, 1 / a, o)), e
}

function Sb(e, n = 0, i = 1, o = .5, a, u = e, c = e) {
    if (Yt.test(n) && (n = parseFloat(n), n = Oe(c.min, c.max, n / 100) - c.min), typeof n != "number") return;
    let f = Oe(u.min, u.max, o);
    e === u && (f -= n), e.min = Mm(e.min, n, i, f, a), e.max = Mm(e.max, n, i, f, a)
}

function Dm(e, n, [i, o, a], u, c) {
    Sb(e, n[i], n[o], n[a], n.scale, u, c)
}
const Pb = ["x", "scaleX", "originX"],
    Cb = ["y", "scaleY", "originY"];

function Om(e, n, i, o) {
    Dm(e.x, n, Pb, i ? i.x : void 0, o ? o.x : void 0), Dm(e.y, n, Cb, i ? i.y : void 0, o ? o.y : void 0)
}

function Lm(e) {
    return e.translate === 0 && e.scale === 1
}

function $v(e) {
    return Lm(e.x) && Lm(e.y)
}

function _m(e, n) {
    return e.min === n.min && e.max === n.max
}

function Eb(e, n) {
    return _m(e.x, n.x) && _m(e.y, n.y)
}

function Im(e, n) {
    return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}

function Wv(e, n) {
    return Im(e.x, n.x) && Im(e.y, n.y)
}

function Vm(e) {
    return Ct(e.x) / Ct(e.y)
}

function Fm(e, n) {
    return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}
class Tb {
    constructor() {
        this.members = []
    }
    add(n) {
        qc(this.members, n), n.scheduleRender()
    }
    remove(n) {
        if (Yc(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(n) {
        const i = this.members.findIndex(a => n === a);
        if (i === 0) return !1;
        let o;
        for (let a = i; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                o = u;
                break
            }
        }
        return o ? (this.promote(o), !0) : !1
    }
    promote(n, i) {
        const o = this.lead;
        if (n !== o && (this.prevLead = o, this.lead = n, n.show(), o)) {
            o.instance && o.scheduleRender(), n.scheduleRender(), n.resumeFrom = o, i && (n.resumeFrom.preserveOpacity = !0), o.snapshot && (n.snapshot = o.snapshot, n.snapshot.latestValues = o.animationValues || o.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
            const {
                crossfade: a
            } = n.options;
            a === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            const {
                options: i,
                resumingFrom: o
            } = n;
            i.onExitComplete && i.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(n => {
            n.instance && n.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function bb(e, n, i) {
    let o = "";
    const a = e.x.translate / n.x,
        u = e.y.translate / n.y,
        c = i?.z || 0;
    if ((a || u || c) && (o = `translate3d(${a}px, ${u}px, ${c}px) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1/n.x}, ${1/n.y}) `), i) {
        const {
            transformPerspective: m,
            rotate: g,
            rotateX: v,
            rotateY: w,
            skewX: E,
            skewY: b
        } = i;
        m && (o = `perspective(${m}px) ${o}`), g && (o += `rotate(${g}deg) `), v && (o += `rotateX(${v}deg) `), w && (o += `rotateY(${w}deg) `), E && (o += `skewX(${E}deg) `), b && (o += `skewY(${b}deg) `)
    }
    const f = e.x.scale * n.x,
        p = e.y.scale * n.y;
    return (f !== 1 || p !== 1) && (o += `scale(${f}, ${p})`), o || "none"
}
const kb = (e, n) => e.depth - n.depth;
class Rb {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(n) {
        qc(this.children, n), this.isDirty = !0
    }
    remove(n) {
        Yc(this.children, n), this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(kb), this.isDirty = !1, this.children.forEach(n)
    }
}

function Fo(e) {
    const n = rt(e) ? e.get() : e;
    return gT(n) ? n.toValue() : n
}

function Ab(e, n) {
    const i = Xt.now(),
        o = ({
            timestamp: a
        }) => {
            const u = a - i;
            u >= n && (Kn(o), e(u - n))
        };
    return Te.read(o, !0), () => Kn(o)
}

function Nb(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function jb(e, n, i) {
    const o = rt(e) ? e : us(e);
    return o.start(Qc("", o, n, i)), o.animation
}
const dr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Xi = typeof window < "u" && window.MotionDebug !== void 0,
    Ou = ["", "X", "Y", "Z"],
    Mb = {
        visibility: "hidden"
    },
    zm = 1e3;
let Db = 0;

function Lu(e, n, i, o) {
    const {
        latestValues: a
    } = n;
    a[e] && (i[e] = a[e], n.setStaticValue(e, 0), o && (o[e] = 0))
}

function Hv(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: n
    } = e.options;
    if (!n) return;
    const i = Ev(n);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {
            layout: a,
            layoutId: u
        } = e.options;
        window.MotionCancelOptimisedAnimation(i, "transform", Te, !(a || u))
    }
    const {
        parent: o
    } = e;
    o && !o.hasCheckedOptimisedAppear && Hv(o)
}

function Kv({
    attachResizeListener: e,
    defaultParent: n,
    measureScroll: i,
    checkIsScrollRoot: o,
    resetTransform: a
}) {
    return class {
        constructor(c = {}, f = n?.()) {
            this.id = Db++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Xi && (dr.totalNodes = dr.resolvedTargetDeltas = dr.recalculatedProjection = 0), this.nodes.forEach(_b), this.nodes.forEach(Bb), this.nodes.forEach(Ub), this.nodes.forEach(Ib), Xi && window.MotionDebug.record(dr)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = f ? f.root || f : this, this.path = f ? [...f.path, f] : [], this.parent = f, this.depth = f ? f.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Rb)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Xc), this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const p = this.eventHandlers.get(c);
            p && p.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Nb(c), this.instance = c;
            const {
                layoutId: p,
                layout: m,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), f && (m || p) && (this.isLayoutDirty = !0), e) {
                let v;
                const w = () => this.root.updateBlockedByResize = !1;
                e(c, () => {
                    this.root.updateBlockedByResize = !0, v && v(), v = Ab(w, 250), Vo.hasAnimatedSinceResize && (Vo.hasAnimatedSinceResize = !1, this.nodes.forEach(Um))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({
                delta: v,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: E,
                layout: b
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const S = this.options.transition || g.getDefaultTransition() || Gb,
                    {
                        onLayoutAnimationStart: T,
                        onLayoutAnimationComplete: A
                    } = g.getProps(),
                    M = !this.targetLayout || !Wv(this.targetLayout, b) || E,
                    O = !w && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || w && (M || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, O);
                    const I = {
                        ...Oc(S, "layout"),
                        onPlay: T,
                        onComplete: A
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I)
                } else w || Um(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Kn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach($b), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: c
            } = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Hv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: f,
                layout: p
            } = this.options;
            if (f === void 0 && !p) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bm);
                return
            }
            this.isUpdating || this.nodes.forEach(Fb), this.isUpdating = !1, this.nodes.forEach(zb), this.nodes.forEach(Ob), this.nodes.forEach(Lb), this.clearAllSnapshots();
            const f = Xt.now();
            Ye.delta = yn(0, 1e3 / 60, f - Ye.timestamp), Ye.timestamp = f, Ye.isProcessing = !0, bu.update.process(Ye), bu.preRender.process(Ye), bu.render.process(Ye), Ye.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ed.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Vb), this.sharedNodes.forEach(Wb)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Te.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Te.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Fe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: f
            } = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c = "measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1), f) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: p,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                f = this.projectionDelta && !$v(this.projectionDelta),
                p = this.getTransformTemplate(),
                m = p ? p(this.latestValues, "") : void 0,
                g = m !== this.prevTransformTemplateValue;
            c && (f || cr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(c = !0) {
            const f = this.measurePageBox();
            let p = this.removeElementScroll(f);
            return c && (p = this.removeTransform(p)), Qb(p), {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {
                visualElement: f
            } = this.options;
            if (!f) return Fe();
            const p = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(qb))) {
                const {
                    scroll: g
                } = this.root;
                g && (Qr(p.x, g.offset.x), Qr(p.y, g.offset.y))
            }
            return p
        }
        removeElementScroll(c) {
            var f;
            const p = Fe();
            if (Nt(p, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot) return p;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m],
                    {
                        scroll: v,
                        options: w
                    } = g;
                g !== this.root && v && w.layoutScroll && (v.wasRoot && Nt(p, c), Qr(p.x, v.offset.x), Qr(p.y, v.offset.y))
            }
            return p
        }
        applyTransform(c, f = !1) {
            const p = Fe();
            Nt(p, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && qr(p, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), cr(g.latestValues) && qr(p, g.latestValues)
            }
            return cr(this.latestValues) && qr(p, this.latestValues), p
        }
        removeTransform(c) {
            const f = Fe();
            Nt(f, c);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !cr(m.latestValues)) continue;
                ac(m.latestValues) && m.updateSnapshot();
                const g = Fe(),
                    v = m.measurePageBox();
                Nt(g, v), Om(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return cr(this.latestValues) && Om(f, this.latestValues), f
        }
        setTargetDelta(c) {
            this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ye.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c = !1) {
            var f;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: v,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(v || w))) {
                if (this.resolvedRelativeTargetAt = Ye.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Fe(), this.relativeTargetOrigin = Fe(), ns(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Fe(), this.targetWithTransforms = Fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), YT(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nt(this.target, this.layout.layoutBox), Lv(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Fe(), this.relativeTargetOrigin = Fe(), ns(this.relativeTargetOrigin, this.target, E.target), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Xi && dr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ac(this.parent.latestValues) || Ov(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead(),
                p = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Ye.timestamp && (m = !1), m) return;
            const {
                layout: g,
                layoutId: v
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v)) return;
            Nt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                E = this.treeScale.y;
            sb(this.layoutCorrected, this.treeScale, this.path, p), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Fe());
            const {
                target: b
            } = f;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (jm(this.prevProjectionDelta.x, this.projectionDelta.x), jm(this.prevProjectionDelta.y, this.projectionDelta.y)), ts(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== E || !Fm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), Xi && dr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c = !0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(), c) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Gr(), this.projectionDelta = Gr(), this.projectionDeltaWithTransform = Gr()
        }
        setAnimationOrigin(c, f = !1) {
            const p = this.snapshot,
                m = p ? p.latestValues : {},
                g = {
                    ...this.latestValues
                },
                v = Gr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !f;
            const w = Fe(),
                E = p ? p.source : void 0,
                b = this.layout ? this.layout.source : void 0,
                S = E !== b,
                T = this.getStack(),
                A = !T || T.members.length <= 1,
                M = !!(S && !A && this.options.crossfade === !0 && !this.path.some(Kb));
            this.animationProgress = 0;
            let O;
            this.mixTargetDelta = I => {
                const V = I / 1e3;
                $m(v.x, c.x, V), $m(v.y, c.y, V), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ns(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Hb(this.relativeTarget, this.relativeTargetOrigin, w, V), O && Eb(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = Fe()), Nt(O, this.relativeTarget)), S && (this.animationValues = g, vb(g, m, this.latestValues, V, M, A)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Te.update(() => {
                Vo.hasAnimatedSinceResize = !0, this.currentAnimation = jb(0, zm, {
                    ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f)
                    },
                    onComplete: () => {
                        c.onComplete && c.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(zm), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: f,
                target: p,
                layout: m,
                latestValues: g
            } = c;
            if (!(!f || !p || !m)) {
                if (this !== c && this.layout && m && Gv(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || Fe();
                    const v = Ct(this.layout.layoutBox.x);
                    p.x.min = c.target.x.min, p.x.max = p.x.min + v;
                    const w = Ct(this.layout.layoutBox.y);
                    p.y.min = c.target.y.min, p.y.max = p.y.min + w
                }
                Nt(f, p), qr(f, g), ts(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new Tb), this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: c
            } = this.options;
            if (c) return this.root.sharedNodes.get(c)
        }
        promote({
            needsReset: c,
            transition: f,
            preserveFollowOpacity: p
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, p), c && (this.projectionDelta = void 0, this.needsReset = !0), f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: c
            } = this.options;
            if (!c) return;
            let f = !1;
            const {
                latestValues: p
            } = c;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (f = !0), !f) return;
            const m = {};
            p.z && Lu("z", c, m, this.animationValues);
            for (let g = 0; g < Ou.length; g++) Lu(`rotate${Ou[g]}`, c, m, this.animationValues), Lu(`skew${Ou[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m) c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, p;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Mb;
            const m = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = Fo(c?.pointerEvents) || "", m.transform = g ? g(this.latestValues, "") : "none", m;
            const v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
                const S = {};
                return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = Fo(c?.pointerEvents) || ""), this.hasProjected && !cr(this.latestValues) && (S.transform = g ? g({}, "") : "none", this.hasProjected = !1), S
            }
            const w = v.animationValues || v.latestValues;
            this.applyTransformsToTarget(), m.transform = bb(this.projectionDeltaWithTransform, this.treeScale, w), g && (m.transform = g(w, m.transform));
            const {
                x: E,
                y: b
            } = this.projectionDelta;
            m.transformOrigin = `${E.origin*100}% ${b.origin*100}% 0`, v.animationValues ? m.opacity = v === this ? (p = (f = w.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = v === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const S in Zo) {
                if (w[S] === void 0) continue;
                const {
                    correct: T,
                    applyTo: A
                } = Zo[S], M = m.transform === "none" ? w[S] : T(w[S], v);
                if (A) {
                    const O = A.length;
                    for (let I = 0; I < O; I++) m[A[I]] = M
                } else m[S] = M
            }
            return this.options.layoutId && (m.pointerEvents = v === this ? Fo(c?.pointerEvents) || "" : "none"), m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }), this.root.nodes.forEach(Bm), this.root.sharedNodes.clear()
        }
    }
}

function Ob(e) {
    e.updateLayout()
}

function Lb(e) {
    var n;
    const i = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {
            layoutBox: o,
            measuredBox: a
        } = e.layout, {
            animationType: u
        } = e.options, c = i.source !== e.layout.source;
        u === "size" ? jt(v => {
            const w = c ? i.measuredBox[v] : i.layoutBox[v],
                E = Ct(w);
            w.min = o[v].min, w.max = w.min + E
        }) : Gv(u, i.layoutBox, o) && jt(v => {
            const w = c ? i.measuredBox[v] : i.layoutBox[v],
                E = Ct(o[v]);
            w.max = w.min + E, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[v].max = e.relativeTarget[v].min + E)
        });
        const f = Gr();
        ts(f, o, i.layoutBox);
        const p = Gr();
        c ? ts(p, e.applyTransform(a, !0), i.measuredBox) : ts(p, o, i.layoutBox);
        const m = !$v(f);
        let g = !1;
        if (!e.resumeFrom) {
            const v = e.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const {
                    snapshot: w,
                    layout: E
                } = v;
                if (w && E) {
                    const b = Fe();
                    ns(b, i.layoutBox, w.layoutBox);
                    const S = Fe();
                    ns(S, o, E.layoutBox), Wv(b, S) || (g = !0), v.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = b, e.relativeParent = v)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: i,
            delta: p,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: o
        } = e.options;
        o && o()
    }
    e.options.transition = void 0
}

function _b(e) {
    Xi && dr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Ib(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Vb(e) {
    e.clearSnapshot()
}

function Bm(e) {
    e.clearMeasurements()
}

function Fb(e) {
    e.isLayoutDirty = !1
}

function zb(e) {
    const {
        visualElement: n
    } = e.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Um(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Bb(e) {
    e.resolveTargetDelta()
}

function Ub(e) {
    e.calcProjection()
}

function $b(e) {
    e.resetSkewAndRotation()
}

function Wb(e) {
    e.removeLeadSnapshot()
}

function $m(e, n, i) {
    e.translate = Oe(n.translate, 0, i), e.scale = Oe(n.scale, 1, i), e.origin = n.origin, e.originPoint = n.originPoint
}

function Wm(e, n, i, o) {
    e.min = Oe(n.min, i.min, o), e.max = Oe(n.max, i.max, o)
}

function Hb(e, n, i, o) {
    Wm(e.x, n.x, i.x, o), Wm(e.y, n.y, i.y, o)
}

function Kb(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Gb = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Hm = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Km = Hm("applewebkit/") && !Hm("chrome/") ? Math.round : it;

function Gm(e) {
    e.min = Km(e.min), e.max = Km(e.max)
}

function Qb(e) {
    Gm(e.x), Gm(e.y)
}

function Gv(e, n, i) {
    return e === "position" || e === "preserve-aspect" && !qT(Vm(n), Vm(i), .2)
}

function qb(e) {
    var n;
    return e !== e.root && ((n = e.scroll) === null || n === void 0 ? void 0 : n.wasRoot)
}
const Yb = Kv({
        attachResizeListener: (e, n) => fn(e, "resize", n),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    _u = {
        current: void 0
    },
    Qv = Kv({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!_u.current) {
                const e = new Yb({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), _u.current = e
            }
            return _u.current
        },
        resetTransform: (e, n) => {
            e.style.transform = n !== void 0 ? n : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Xb = {
        pan: {
            Feature: db
        },
        drag: {
            Feature: cb,
            ProjectionNode: Qv,
            MeasureLayout: zv
        }
    };

function Qm(e, n, i) {
    const {
        props: o
    } = e;
    e.animationState && o.whileHover && e.animationState.setActive("whileHover", i);
    const a = o[i ? "onHoverStart" : "onHoverEnd"];
    a && Te.postRender(() => a(n, ms(n)))
}
class Zb extends qn {
    mount() {
        const {
            current: n,
            props: i
        } = this.node;
        n && (this.unmount = FT(n, o => (Qm(this.node, o, !0), a => Qm(this.node, a, !1)), {
            passive: !i.onHoverStart && !i.onHoverEnd
        }))
    }
    unmount() {}
}
class Jb extends qn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }!n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Bn(fn(this.node.current, "focus", () => this.onFocus()), fn(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const qv = (e, n) => n ? e === n ? !0 : qv(e, n.parentElement) : !1;

function Iu(e, n) {
    if (!n) return;
    const i = new PointerEvent("pointer" + e);
    n(i, ms(i))
}
class ek extends qn {
    constructor() {
        super(...arguments), this.removeStartListeners = it, this.removeEndListeners = it, this.removeAccessibleListeners = it, this.startPointerPress = (n, i) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const o = this.node.getProps(),
                u = Un(window, "pointerup", (f, p) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: m,
                        onTapCancel: g,
                        globalTapTarget: v
                    } = this.node.getProps(), w = !v && !qv(this.node.current, f.target) ? g : m;
                    w && Te.update(() => w(f, p))
                }, {
                    passive: !(o.onTap || o.onPointerUp)
                }),
                c = Un(window, "pointercancel", (f, p) => this.cancelPress(f, p), {
                    passive: !(o.onTapCancel || o.onPointerCancel)
                });
            this.removeEndListeners = Bn(u, c), this.startPress(n, i)
        }, this.startAccessiblePress = () => {
            const n = u => {
                    if (u.key !== "Enter" || this.isPressing) return;
                    const c = f => {
                        f.key !== "Enter" || !this.checkPressEnd() || Iu("up", (p, m) => {
                            const {
                                onTap: g
                            } = this.node.getProps();
                            g && Te.postRender(() => g(p, m))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = fn(this.node.current, "keyup", c), Iu("down", (f, p) => {
                        this.startPress(f, p)
                    })
                },
                i = fn(this.node.current, "keydown", n),
                o = () => {
                    this.isPressing && Iu("cancel", (u, c) => this.cancelPress(u, c))
                },
                a = fn(this.node.current, "blur", o);
            this.removeAccessibleListeners = Bn(i, a)
        }
    }
    startPress(n, i) {
        this.isPressing = !0;
        const {
            onTapStart: o,
            whileTap: a
        } = this.node.getProps();
        a && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Te.postRender(() => o(n, i))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !kv()
    }
    cancelPress(n, i) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: o
        } = this.node.getProps();
        o && Te.postRender(() => o(n, i))
    }
    mount() {
        const n = this.node.getProps(),
            i = Un(n.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(n.onTapStart || n.onPointerStart)
            }),
            o = fn(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Bn(i, o)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const uc = new WeakMap,
    Vu = new WeakMap,
    tk = e => {
        const n = uc.get(e.target);
        n && n(e)
    },
    nk = e => {
        e.forEach(tk)
    };

function rk({
    root: e,
    ...n
}) {
    const i = e || document;
    Vu.has(i) || Vu.set(i, {});
    const o = Vu.get(i),
        a = JSON.stringify(n);
    return o[a] || (o[a] = new IntersectionObserver(nk, {
        root: e,
        ...n
    })), o[a]
}

function ik(e, n, i) {
    const o = rk(n);
    return uc.set(e, i), o.observe(e), () => {
        uc.delete(e), o.unobserve(e)
    }
}
const sk = {
    some: 0,
    all: 1
};
class ok extends qn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: n = {}
        } = this.node.getProps(), {
            root: i,
            margin: o,
            amount: a = "some",
            once: u
        } = n, c = {
            root: i ? i.current : void 0,
            rootMargin: o,
            threshold: typeof a == "number" ? a : sk[a]
        }, f = p => {
            const {
                isIntersecting: m
            } = p;
            if (this.isInView === m || (this.isInView = m, u && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: g,
                onViewportLeave: v
            } = this.node.getProps(), w = m ? g : v;
            w && w(p)
        };
        return ik(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: n,
            prevProps: i
        } = this.node;
        ["amount", "margin", "root"].some(ak(n, i)) && this.startObserver()
    }
    unmount() {}
}

function ak({
    viewport: e = {}
}, {
    viewport: n = {}
} = {}) {
    return i => e[i] !== n[i]
}
const lk = {
        inView: {
            Feature: ok
        },
        tap: {
            Feature: ek
        },
        focus: {
            Feature: Jb
        },
        hover: {
            Feature: Zb
        }
    },
    uk = {
        layout: {
            ProjectionNode: Qv,
            MeasureLayout: zv
        }
    },
    Yv = P.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    ya = P.createContext({}),
    td = typeof window < "u",
    ck = td ? P.useLayoutEffect : P.useEffect,
    Xv = P.createContext({
        strict: !1
    });

function dk(e, n, i, o, a) {
    var u, c;
    const {
        visualElement: f
    } = P.useContext(ya), p = P.useContext(Xv), m = P.useContext(Jc), g = P.useContext(Yv).reducedMotion, v = P.useRef();
    o = o || p.renderer, !v.current && o && (v.current = o(e, {
        visualState: n,
        parent: f,
        props: i,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = v.current,
        E = P.useContext(Fv);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && fk(v.current, i, a, E);
    const b = P.useRef(!1);
    P.useInsertionEffect(() => {
        w && b.current && w.update(i, m)
    });
    const S = i[Cv],
        T = P.useRef(!!S && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, S)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, S)));
    return ck(() => {
        w && (b.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), ed.render(w.render), T.current && w.animationState && w.animationState.animateChanges())
    }), P.useEffect(() => {
        w && (!T.current && w.animationState && w.animationState.animateChanges(), T.current && (queueMicrotask(() => {
            var A;
            (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, S)
        }), T.current = !1))
    }), w
}

function fk(e, n, i, o) {
    const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: p,
        layoutRoot: m
    } = n;
    e.projection = new i(e.latestValues, n["data-framer-portal-id"] ? void 0 : Zv(e.parent)), e.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || f && Kr(f),
        visualElement: e,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: p,
        layoutRoot: m
    })
}

function Zv(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Zv(e.parent)
}

function hk(e, n, i) {
    return P.useCallback(o => {
        o && e.mount && e.mount(o), n && (o ? n.mount(o) : n.unmount()), i && (typeof i == "function" ? i(o) : Kr(i) && (i.current = o))
    }, [n])
}

function va(e) {
    return pa(e.animate) || Dc.some(n => os(e[n]))
}

function Jv(e) {
    return !!(va(e) || e.variants)
}

function pk(e, n) {
    if (va(e)) {
        const {
            initial: i,
            animate: o
        } = e;
        return {
            initial: i === !1 || os(i) ? i : void 0,
            animate: os(o) ? o : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}

function mk(e) {
    const {
        initial: n,
        animate: i
    } = pk(e, P.useContext(ya));
    return P.useMemo(() => ({
        initial: n,
        animate: i
    }), [qm(n), qm(i)])
}

function qm(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ym = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ni = {};
for (const e in Ym) ni[e] = {
    isEnabled: n => Ym[e].some(i => !!n[i])
};

function gk(e) {
    for (const n in e) ni[n] = {
        ...ni[n],
        ...e[n]
    }
}
const yk = Symbol.for("motionComponentSymbol");

function vk({
    preloadedFeatures: e,
    createVisualElement: n,
    useRender: i,
    useVisualState: o,
    Component: a
}) {
    e && gk(e);

    function u(f, p) {
        let m;
        const g = {
                ...P.useContext(Yv),
                ...f,
                layoutId: xk(f)
            },
            {
                isStatic: v
            } = g,
            w = mk(f),
            E = o(f, v);
        if (!v && td) {
            wk();
            const b = Sk(g);
            m = b.MeasureLayout, w.visualElement = dk(a, E, g, n, b.ProjectionNode)
        }
        return x.jsxs(ya.Provider, {
            value: w,
            children: [m && w.visualElement ? x.jsx(m, {
                visualElement: w.visualElement,
                ...g
            }) : null, i(a, f, hk(E, w.visualElement, p), E, v, w.visualElement)]
        })
    }
    const c = P.forwardRef(u);
    return c[yk] = a, c
}

function xk({
    layoutId: e
}) {
    const n = P.useContext(Vv).id;
    return n && e !== void 0 ? n + "-" + e : e
}

function wk(e, n) {
    P.useContext(Xv).strict
}

function Sk(e) {
    const {
        drag: n,
        layout: i
    } = ni;
    if (!n && !i) return {};
    const o = {
        ...n,
        ...i
    };
    return {
        MeasureLayout: n?.isEnabled(e) || i?.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const Pk = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function nd(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Pk.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function e0(e, {
    style: n,
    vars: i
}, o, a) {
    Object.assign(e.style, n, a && a.getProjectionStyles(o));
    for (const u in i) e.style.setProperty(u, i[u])
}
const t0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function n0(e, n, i, o) {
    e0(e, n, void 0, o);
    for (const a in n.attrs) e.setAttribute(t0.has(a) ? a : Zc(a), n.attrs[a])
}

function r0(e, {
    layout: n,
    layoutId: i
}) {
    return vr.has(e) || e.startsWith("origin") || (n || i !== void 0) && (!!Zo[e] || e === "opacity")
}

function rd(e, n, i) {
    var o;
    const {
        style: a
    } = e, u = {};
    for (const c in a)(rt(a[c]) || n.style && rt(n.style[c]) || r0(c, e) || ((o = i?.getValue(c)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (u[c] = a[c]);
    return u
}

function i0(e, n, i) {
    const o = rd(e, n, i);
    for (const a in e)
        if (rt(e[a]) || rt(n[a])) {
            const u = fs.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            o[u] = e[a]
        } return o
}

function Ck(e) {
    const n = P.useRef(null);
    return n.current === null && (n.current = e()), n.current
}

function Ek({
    scrapeMotionValuesFromProps: e,
    createRenderState: n,
    onMount: i
}, o, a, u) {
    const c = {
        latestValues: Tk(o, a, u, e),
        renderState: n()
    };
    return i && (c.mount = f => i(o, f, c)), c
}
const s0 = e => (n, i) => {
    const o = P.useContext(ya),
        a = P.useContext(Jc),
        u = () => Ek(e, n, o, a);
    return i ? u() : Ck(u)
};

function Tk(e, n, i, o) {
    const a = {},
        u = o(e, {});
    for (const w in u) a[w] = Fo(u[w]);
    let {
        initial: c,
        animate: f
    } = e;
    const p = va(e),
        m = Jv(e);
    n && m && !p && e.inherit !== !1 && (c === void 0 && (c = n.initial), f === void 0 && (f = n.animate));
    let g = i ? i.initial === !1 : !1;
    g = g || c === !1;
    const v = g ? f : c;
    if (v && typeof v != "boolean" && !pa(v)) {
        const w = Array.isArray(v) ? v : [v];
        for (let E = 0; E < w.length; E++) {
            const b = jc(e, w[E]);
            if (b) {
                const {
                    transitionEnd: S,
                    transition: T,
                    ...A
                } = b;
                for (const M in A) {
                    let O = A[M];
                    if (Array.isArray(O)) {
                        const I = g ? O.length - 1 : 0;
                        O = O[I]
                    }
                    O !== null && (a[M] = O)
                }
                for (const M in S) a[M] = S[M]
            }
        }
    }
    return a
}
const id = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    o0 = () => ({
        ...id(),
        attrs: {}
    }),
    a0 = (e, n) => n && typeof e == "number" ? n.transform(e) : e,
    bk = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    kk = fs.length;

function Rk(e, n, i) {
    let o = "",
        a = !0;
    for (let u = 0; u < kk; u++) {
        const c = fs[u],
            f = e[c];
        if (f === void 0) continue;
        let p = !0;
        if (typeof f == "number" ? p = f === (c.startsWith("scale") ? 1 : 0) : p = parseFloat(f) === 0, !p || i) {
            const m = a0(f, Bc[c]);
            if (!p) {
                a = !1;
                const g = bk[c] || c;
                o += `${g}(${m}) `
            }
            i && (n[c] = m)
        }
    }
    return o = o.trim(), i ? o = i(n, a ? "" : o) : a && (o = "none"), o
}

function sd(e, n, i) {
    const {
        style: o,
        vars: a,
        transformOrigin: u
    } = e;
    let c = !1,
        f = !1;
    for (const p in n) {
        const m = n[p];
        if (vr.has(p)) {
            c = !0;
            continue
        } else if (Zy(p)) {
            a[p] = m;
            continue
        } else {
            const g = a0(m, Bc[p]);
            p.startsWith("origin") ? (f = !0, u[p] = g) : o[p] = g
        }
    }
    if (n.transform || (c || i ? o.transform = Rk(n, e.transform, i) : o.transform && (o.transform = "none")), f) {
        const {
            originX: p = "50%",
            originY: m = "50%",
            originZ: g = 0
        } = u;
        o.transformOrigin = `${p} ${m} ${g}`
    }
}

function Xm(e, n, i) {
    return typeof e == "string" ? e : ae.transform(n + i * e)
}

function Ak(e, n, i) {
    const o = Xm(n, e.x, e.width),
        a = Xm(i, e.y, e.height);
    return `${o} ${a}`
}
const Nk = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    jk = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Mk(e, n, i = 1, o = 0, a = !0) {
    e.pathLength = 1;
    const u = a ? Nk : jk;
    e[u.offset] = ae.transform(-o);
    const c = ae.transform(n),
        f = ae.transform(i);
    e[u.array] = `${c} ${f}`
}

function od(e, {
    attrX: n,
    attrY: i,
    attrScale: o,
    originX: a,
    originY: u,
    pathLength: c,
    pathSpacing: f = 1,
    pathOffset: p = 0,
    ...m
}, g, v) {
    if (sd(e, m, v), g) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: w,
        style: E,
        dimensions: b
    } = e;
    w.transform && (b && (E.transform = w.transform), delete w.transform), b && (a !== void 0 || u !== void 0 || E.transform) && (E.transformOrigin = Ak(b, a !== void 0 ? a : .5, u !== void 0 ? u : .5)), n !== void 0 && (w.x = n), i !== void 0 && (w.y = i), o !== void 0 && (w.scale = o), c !== void 0 && Mk(w, c, f, p, !1)
}
const ad = e => typeof e == "string" && e.toLowerCase() === "svg",
    Dk = {
        useVisualState: s0({
            scrapeMotionValuesFromProps: i0,
            createRenderState: o0,
            onMount: (e, n, {
                renderState: i,
                latestValues: o
            }) => {
                Te.read(() => {
                    try {
                        i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect()
                    } catch {
                        i.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), Te.render(() => {
                    od(i, o, ad(n.tagName), e.transformTemplate), n0(n, i)
                })
            }
        })
    },
    Ok = {
        useVisualState: s0({
            scrapeMotionValuesFromProps: rd,
            createRenderState: id
        })
    };

function l0(e, n, i) {
    for (const o in n) !rt(n[o]) && !r0(o, i) && (e[o] = n[o])
}

function Lk({
    transformTemplate: e
}, n) {
    return P.useMemo(() => {
        const i = id();
        return sd(i, n, e), Object.assign({}, i.vars, i.style)
    }, [n])
}

function _k(e, n) {
    const i = e.style || {},
        o = {};
    return l0(o, i, e), Object.assign(o, Lk(e, n)), o
}

function Ik(e, n) {
    const i = {},
        o = _k(e, n);
    return e.drag && e.dragListener !== !1 && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i
}
const Vk = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Jo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Vk.has(e)
}
let u0 = e => !Jo(e);

function Fk(e) {
    e && (u0 = n => n.startsWith("on") ? !Jo(n) : e(n))
}
try {
    Fk(require("@emotion/is-prop-valid").default)
} catch {}

function zk(e, n, i) {
    const o = {};
    for (const a in e) a === "values" && typeof e.values == "object" || (u0(a) || i === !0 && Jo(a) || !n && !Jo(a) || e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
    return o
}

function Bk(e, n, i, o) {
    const a = P.useMemo(() => {
        const u = o0();
        return od(u, n, ad(o), e.transformTemplate), {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }, [n]);
    if (e.style) {
        const u = {};
        l0(u, e.style, e), a.style = {
            ...u,
            ...a.style
        }
    }
    return a
}

function Uk(e = !1) {
    return (i, o, a, {
        latestValues: u
    }, c) => {
        const p = (nd(i) ? Bk : Ik)(o, u, c, i),
            m = zk(o, typeof i == "string", e),
            g = i !== P.Fragment ? {
                ...m,
                ...p,
                ref: a
            } : {},
            {
                children: v
            } = o,
            w = P.useMemo(() => rt(v) ? v.get() : v, [v]);
        return P.createElement(i, {
            ...g,
            children: w
        })
    }
}

function $k(e, n) {
    return function(o, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const c = {
            ...nd(o) ? Dk : Ok,
            preloadedFeatures: e,
            useRender: Uk(a),
            createVisualElement: n,
            Component: o
        };
        return vk(c)
    }
}
const cc = {
        current: null
    },
    c0 = {
        current: !1
    };

function Wk() {
    if (c0.current = !0, !!td)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                n = () => cc.current = e.matches;
            e.addListener(n), n()
        } else cc.current = !1
}

function Hk(e, n, i) {
    for (const o in n) {
        const a = n[o],
            u = i[o];
        if (rt(a)) e.addValue(o, a);
        else if (rt(u)) e.addValue(o, us(a, {
            owner: e
        }));
        else if (u !== a)
            if (e.hasValue(o)) {
                const c = e.getValue(o);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = e.getStaticValue(o);
                e.addValue(o, us(c !== void 0 ? c : a, {
                    owner: e
                }))
            }
    }
    for (const o in i) n[o] === void 0 && e.removeValue(o);
    return n
}
const Zm = new WeakMap,
    Kk = [...tv, nt, Gn],
    Gk = e => Kk.find(ev(e)),
    Jm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Qk {
    scrapeMotionValuesFromProps(n, i, o) {
        return {}
    }
    constructor({
        parent: n,
        props: i,
        presenceContext: o,
        reducedMotionConfig: a,
        blockInitialAnimation: u,
        visualState: c
    }, f = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Vc, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const w = Xt.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w, Te.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: m
        } = c;
        this.latestValues = p, this.baseTarget = {
            ...p
        }, this.initialValues = i.initial ? {
            ...p
        } : {}, this.renderState = m, this.parent = n, this.props = i, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.blockInitialAnimation = !!u, this.isControllingVariants = va(i), this.isVariantNode = Jv(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(n && n.current);
        const {
            willChange: g,
            ...v
        } = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const w in v) {
            const E = v[w];
            p[w] !== void 0 && rt(E) && E.set(p[w], !1)
        }
    }
    mount(n) {
        this.current = n, Zm.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), c0.current || Wk(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Zm.delete(this.current), this.projection && this.projection.unmount(), Kn(this.notifyUpdate), Kn(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const i = this.features[n];
            i && (i.unmount(), i.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(n, i) {
        this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
        const o = vr.has(n),
            a = i.on("change", f => {
                this.latestValues[n] = f, this.props.onUpdate && Te.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0)
            }),
            u = i.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, i)), this.valueSubscriptions.set(n, () => {
            a(), u(), c && c(), i.owner && i.stop()
        })
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in ni) {
            const i = ni[n];
            if (!i) continue;
            const {
                isEnabled: o,
                Feature: a
            } = i;
            if (!this.features[n] && a && o(this.props) && (this.features[n] = new a(this)), this.features[n]) {
                const u = this.features[n];
                u.isMounted ? u.update() : (u.mount(), u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Fe()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, i) {
        this.latestValues[n] = i
    }
    update(n, i) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
        for (let o = 0; o < Jm.length; o++) {
            const a = Jm[o];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const u = "on" + a,
                c = n[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = Hk(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const i = this.getClosestVariantNode();
        if (i) return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n)
    }
    addValue(n, i) {
        const o = this.values.get(n);
        i !== o && (o && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), this.latestValues[n] = i.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const i = this.valueSubscriptions.get(n);
        i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, i) {
        if (this.props.values && this.props.values[n]) return this.props.values[n];
        let o = this.values.get(n);
        return o === void 0 && i !== void 0 && (o = us(i === null ? void 0 : i, {
            owner: this
        }), this.addValue(n, o)), o
    }
    readValue(n, i) {
        var o;
        let a = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (o = this.getBaseTargetFromProps(this.props, n)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, n, this.options);
        return a != null && (typeof a == "string" && (Yy(a) || qy(a)) ? a = parseFloat(a) : !Gk(a) && Gn.test(i) && (a = uv(n, i)), this.setBaseTarget(n, rt(a) ? a.get() : a)), rt(a) ? a.get() : a
    }
    setBaseTarget(n, i) {
        this.baseTarget[n] = i
    }
    getBaseTarget(n) {
        var i;
        const {
            initial: o
        } = this.props;
        let a;
        if (typeof o == "string" || typeof o == "object") {
            const c = jc(this.props, o, (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom);
            c && (a = c[n])
        }
        if (o && a !== void 0) return a;
        const u = this.getBaseTargetFromProps(this.props, n);
        return u !== void 0 && !rt(u) ? u : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, i) {
        return this.events[n] || (this.events[n] = new Xc), this.events[n].add(i)
    }
    notify(n, ...i) {
        this.events[n] && this.events[n].notify(...i)
    }
}
class d0 extends Qk {
    constructor() {
        super(...arguments), this.KeyframeResolver = cv
    }
    sortInstanceNodePosition(n, i) {
        return n.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, i) {
        return n.style ? n.style[i] : void 0
    }
    removeValueFromRenderState(n, {
        vars: i,
        style: o
    }) {
        delete i[n], delete o[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: n
        } = this.props;
        rt(n) && (this.childSubscription = n.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }))
    }
}

function qk(e) {
    return window.getComputedStyle(e)
}
class Yk extends d0 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = e0
    }
    readValueFromInstance(n, i) {
        if (vr.has(i)) {
            const o = Uc(i);
            return o && o.default || 0
        } else {
            const o = qk(n),
                a = (Zy(i) ? o.getPropertyValue(i) : o[i]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(n, {
        transformPagePoint: i
    }) {
        return _v(n, i)
    }
    build(n, i, o) {
        sd(n, i, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, i, o) {
        return rd(n, i, o)
    }
}
class Xk extends d0 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Fe
    }
    getBaseTargetFromProps(n, i) {
        return n[i]
    }
    readValueFromInstance(n, i) {
        if (vr.has(i)) {
            const o = Uc(i);
            return o && o.default || 0
        }
        return i = t0.has(i) ? i : Zc(i), n.getAttribute(i)
    }
    scrapeMotionValuesFromProps(n, i, o) {
        return i0(n, i, o)
    }
    build(n, i, o) {
        od(n, i, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(n, i, o, a) {
        n0(n, i, o, a)
    }
    mount(n) {
        this.isSVGTag = ad(n.tagName), super.mount(n)
    }
}
const Zk = (e, n) => nd(e) ? new Xk(n) : new Yk(n, {
        allowProjection: e !== P.Fragment
    }),
    Jk = $k({
        ...IT,
        ...lk,
        ...Xb,
        ...uk
    }, Zk),
    ye = OC(Jk),
    eR = la("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    yr = P.forwardRef(({
        className: e,
        variant: n,
        size: i,
        asChild: o = !1,
        ...a
    }, u) => {
        const c = o ? RS : "button";
        return x.jsx(c, {
            className: Ge(eR({
                variant: n,
                size: i,
                className: e
            })),
            ref: u,
            ...a
        })
    });
yr.displayName = "Button";

function tR() {
    const [e, n] = P.useState(!1), [i, o] = P.useState("home"), {
        theme: a,
        setTheme: u
    } = DC(), c = [{
        href: "#home",
        label: "Home"
    }, {
        href: "#about",
        label: "About"
    }, {
        href: "#education",
        label: "Education"
    }, {
        href: "#experience",
        label: "Experience"
    }, {
        href: "#projects",
        label: "Projects"
    }, {
        href: "#research",
        label: "Research"
    }, {
        href: "#contact",
        label: "Contact"
    }];
    P.useEffect(() => {
        const m = () => {
            const g = c.map(w => w.href.substring(1)),
                v = window.scrollY + 100;
            for (const w of g) {
                const E = document.getElementById(w);
                if (E) {
                    const b = E.offsetTop,
                        S = E.offsetHeight;
                    if (v >= b && v < b + S) {
                        o(w);
                        break
                    }
                }
            }
        };
        return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m)
    }, []);
    const f = m => {
            const g = document.getElementById(m.substring(1));
            if (g) {
                const v = g.offsetTop - 80;
                window.scrollTo({
                    top: v,
                    behavior: "smooth"
                })
            }
            n(!1)
        },
        p = () => {
            u(a === "light" ? "dark" : "light")
        };
    return x.jsx(ye.nav, {
        className: "fixed top-0 w-full z-50 glass-effect",
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: .5
        },
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs("div", {
                className: "flex justify-between items-center py-4",
                children: [x.jsx("div", {
                    className: "text-xl font-bold text-gray-800 dark:text-gray-200",
                    children: "Suganthan Prabhu"
                }), x.jsx("div", {
                    className: "hidden md:flex space-x-8",
                    children: c.map(m => x.jsx("button", {
                        onClick: () => f(m.href),
                        className: `transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${i===m.href.substring(1)?"text-gray-800 dark:text-gray-200 font-semibold":"text-gray-600 dark:text-gray-400"}`,
                        children: m.label
                    }, m.href))
                }), x.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [x.jsx(yr, {
                        variant: "ghost",
                        size: "icon",
                        onClick: p,
                        children: a === "light" ? x.jsx("i", {
                            className: "fas fa-moon"
                        }) : x.jsx("i", {
                            className: "fas fa-sun"
                        })
                    }), x.jsx(yr, {
                        className: "md:hidden",
                        variant: "ghost",
                        size: "icon",
                        onClick: () => n(!e),
                        children: x.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })]
                })]
            }), e && x.jsx(ye.div, {
                className: "md:hidden bg-background border-t border-border",
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                children: x.jsx("div", {
                    className: "px-4 py-2 space-y-2",
                    children: c.map(m => x.jsx("button", {
                        onClick: () => f(m.href),
                        className: "block py-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                        children: m.label
                    }, m.href))
                })
            })]
        })
    })
}
const nR = "./assets/photocopy-DZRhKElq.jpg",
    rR = "./assets/Suganthan_resume-Cg99YzGR.pdf";

function iR() {
    const e = () => {
            const i = document.getElementById("contact");
            if (i) {
                const o = i.offsetTop - 80;
                window.scrollTo({
                    top: o,
                    behavior: "smooth"
                })
            }
        },
        n = () => {
            const i = document.createElement("a");
            i.href = rR, i.download = "Suganthan_Prabhu_Resume.pdf", document.body.appendChild(i), i.click(), document.body.removeChild(i)
        };
    return x.jsx("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-blue-950",
        children: x.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: x.jsxs(ye.div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [x.jsx(ye.div, {
                    className: "w-72 h-72 mx-auto mt-20 mb-8",
                    children: x.jsx("img", {
                        src: nR,
                        alt: "Suganthan Prabhu",
                        className: "w-full h-full object-cover rounded-full"
                    })
                }), x.jsx(ye.h1, {
                    className: "text-5xl md:text-7xl font-bold mb-6 text-primary",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    children: "Suganthan Prabhu"
                }), x.jsx(ye.p, {
                    className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    children: "Enthusiastic ECE student passionate about Embedded Systems, Renewable Energy, and Control Systems"
                }), x.jsxs(ye.div, {
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    children: [x.jsx("span", {
                        className: "px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full",
                        children: "Electronics Engineering"
                    }), x.jsx("span", {
                        className: "px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 rounded-full",
                        children: "Embedded Systems"
                    }), x.jsx("span", {
                        className: "px-4 py-2 bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800 rounded-full",
                        children: "Renewable Energy"
                    })]
                }), x.jsxs(ye.div, {
                    className: "flex flex-wrap justify-center gap-6",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .8
                    },
                    children: [x.jsx(yr, {
                        onClick: e,
                        size: "lg",
                        className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                        children: "Get In Touch"
                    }), x.jsxs(yr, {
                        onClick: n,
                        variant: "outline",
                        size: "lg",
                        className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                        children: [x.jsx("i", {
                            className: "fas fa-download mr-2"
                        }), "Download Resume"]
                    })]
                })]
            })
        })
    })
}
const mt = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...n
}));
mt.displayName = "Card";
const sR = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("flex flex-col space-y-1.5 p-6", e),
    ...n
}));
sR.displayName = "CardHeader";
const oR = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("text-2xl font-semibold leading-none tracking-tight", e),
    ...n
}));
oR.displayName = "CardTitle";
const aR = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("text-sm text-muted-foreground", e),
    ...n
}));
aR.displayName = "CardDescription";
const gt = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("p-6 pt-0", e),
    ...n
}));
gt.displayName = "CardContent";
const lR = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("div", {
    ref: i,
    className: Ge("flex items-center p-6 pt-0", e),
    ...n
}));
lR.displayName = "CardFooter";

function uR() {
    const e = [{
        icon: "fas fa-tools",
        title: "Hardware Electronics",
        description: "Specialized in Control systems and Analog Systems",
        color: "amber"
    }, {
        icon: "fas fa-microchip",
        title: "Embedded Systems",
        description: "Control algorithms and sensor integration",
        color: "accent"
    }, {
        icon: "fas fa-leaf",
        title: "Renewable Energy",
        description: "Solar, Wind Energy and energy storage systems",
        color: "primary"
    }];
    return x.jsx("section", {
        id: "about",
        className: "section-padding",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "About Me"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    viewport: {
                        once: !0
                    },
                    children: x.jsx(mt, {
                        className: "p-8 shadow-xl mb-8",
                        children: x.jsx(gt, {
                            className: "p-0",
                            children: x.jsx("p", {
                                className: "text-lg leading-relaxed text-muted-foreground mb-8",
                                children: "Enthusiastic student with a profound interest in control systems, space technology, and embedded systems. Currently engaged in active participation within renewable energy projects, emphasizing innovative solutions. Committed to leveraging skills in sustainable technologies to generate a positive influence. Actively seeking opportunities in the dynamic domains of space technology and embedded systems to contribute meaningfully."
                            })
                        })
                    })
                }), x.jsx("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: e.map((n, i) => x.jsx(ye.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .4 + i * .1
                        },
                        viewport: {
                            once: !0
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        children: x.jsx(mt, {
                            className: "text-center p-6 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300",
                            children: x.jsxs(gt, {
                                className: "p-0",
                                children: [x.jsx("i", {
                                    className: `${n.icon} text-3xl text-gray-600 dark:text-gray-400 mb-4`
                                }), x.jsx("h3", {
                                    className: "font-semibold mb-2",
                                    children: n.title
                                }), x.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: n.description
                                })]
                            })
                        })
                    }, n.title))
                })]
            })]
        })
    })
}

function cR() {
    return x.jsx("section", {
        id: "education",
        className: "section-padding bg-muted/50",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Education"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "relative max-w-4xl mx-auto",
                children: x.jsxs("div", {
                    className: "timeline-line relative",
                    children: [x.jsxs(ye.div, {
                        className: "flex flex-col md:flex-row items-center mb-12",
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        viewport: {
                            once: !0
                        },
                        children: [x.jsx("div", {
                            className: "md:w-1/2 md:pr-8 mb-6 md:mb-0",
                            children: x.jsx(mt, {
                                className: "shadow-lg hover:shadow-xl transition-shadow",
                                children: x.jsxs(gt, {
                                    className: "p-6",
                                    children: [x.jsx("span", {
                                        className: "text-primary font-semibold",
                                        children: "2022 - 2026"
                                    }), x.jsx("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: "B.E  Electronics and Communication Engineering"
                                    }), x.jsx("p", {
                                        className: "text-muted-foreground mb-3",
                                        children: "Kumaraguru College of Technology, Anna University"
                                    }), x.jsxs("div", {
                                        className: "flex items-center",
                                        children: [x.jsx("span", {
                                            className: "text-2xl font-bold text-blue-600",
                                            children: "8.4"
                                        }), " ", x.jsx("span", {
                                            className: "ml-2 text-muted-foreground",
                                            children: "CGPA (Till 6th Semester)"
                                        })]
                                    })]
                                })
                            })
                        }), x.jsx("div", {
                            className: "relative z-10",
                            children: x.jsx(ye.div, {
                                className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                                whileHover: {
                                    scale: 1.1
                                },
                                children: x.jsx("i", {
                                    className: "fas fa-graduation-cap text-white"
                                })
                            })
                        }), x.jsx("div", {
                            className: "md:w-1/2 md:pl-8"
                        })]
                    }), x.jsxs(ye.div, {
                        className: "flex flex-col md:flex-row items-center",
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        viewport: {
                            once: !0
                        },
                        children: [x.jsx("div", {
                            className: "md:w-1/2 md:pr-8 order-2 md:order-1"
                        }), x.jsx("div", {
                            className: "relative z-10 order-1 md:order-2",
                            children: x.jsx(ye.div, {
                                className: "w-12 h-12 bg-accent rounded-full flex items-center justify-center",
                                whileHover: {
                                    scale: 1.1
                                },
                                children: x.jsx("i", {
                                    className: "fas fa-school text-blue-600"
                                })
                            })
                        }), x.jsx("div", {
                            className: "md:w-1/2 md:pl-8 mb-6 md:mb-0 order-3",
                            children: x.jsx(mt, {
                                className: "shadow-lg hover:shadow-xl transition-shadow",
                                children: x.jsxs(gt, {
                                    className: "p-6",
                                    children: [x.jsx("span", {
                                        className: "text-primary font-semibold",
                                        children: "2020 - 2022"
                                    }), x.jsx("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Higher Secondary Education"
                                    }), x.jsx("p", {
                                        className: "text-muted-foreground mb-3",
                                        children: "Rasi Matric Hr. Sec School, Tamil Nadu State Board"
                                    }), x.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [x.jsxs("div", {
                                            children: [x.jsx("span", {
                                                className: "text-2xl font-bold text-blue-600",
                                                children: "99%"
                                            }), x.jsx("span", {
                                                className: "block text-sm text-muted-foreground",
                                                children: "10th Grade"
                                            })]
                                        }), x.jsxs("div", {
                                            children: [x.jsx("span", {
                                                className: "text-2xl font-bold text-blue-600",
                                                children: "97%"
                                            }), x.jsx("span", {
                                                className: "block text-sm text-muted-foreground",
                                                children: "12th Grade"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })]
        })
    })
}
const dR = la("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

function Qn({
    className: e,
    variant: n,
    ...i
}) {
    return x.jsx("div", {
        className: Ge(dR({
            variant: n
        }), e),
        ...i
    })
}

function fR() {
    const e = [{
        title: "Project Intern",
        company: "URSC (U R Rao Satellite Centre), ISRO",
        year: "May 2025 - July 2025",
        icon: "fas fa-rocket",
        color: "primary",
        description: "Worked on the design, control algorithms, and sensor integration for a Hexapod Spider Robot for autonomous movement and obstacle navigation.",
        skills: ["Control Algorithms", "Sensor Integration", "Robotics"]
    }, {
        title: "Research Intern",
        company: "Kinowave",
        year: "June 2024 - July 2024",
        icon: "fas fa-solar-panel",
        color: "accent",
        description: "Worked on renewable energy projects, contributing to control system design, automation, and SCADA integration.",
        skills: ["Control Systems", "SCADA", "Automation", "Sensor Fusion"]
    }];
    return x.jsx("section", {
        id: "experience",
        className: "section-padding",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Experience"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto",
                children: e.map((n, i) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: i * .2
                    },
                    viewport: {
                        once: !0
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: x.jsx(mt, {
                        className: "p-8 h-full bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300",
                        children: x.jsxs(gt, {
                            className: "p-0",
                            children: [x.jsxs("div", {
                                className: "flex items-center mb-6",
                                children: [x.jsx("div", {
                                    className: "w-16 h-16 bg-gray-600 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4",
                                    children: x.jsx("i", {
                                        className: `${n.icon} text-white text-2xl`
                                    })
                                }), x.jsxs("div", {
                                    children: [x.jsx("h3", {
                                        className: "text-xl font-bold",
                                        children: n.title
                                    }), x.jsx("p", {
                                        className: "text-gray-600 dark:text-gray-400 font-semibold",
                                        children: n.company
                                    })]
                                })]
                            }), x.jsx(Qn, {
                                className: "bg-gray-600 dark:bg-gray-700 text-white mb-4",
                                children: n.year
                            }), x.jsx("p", {
                                className: "text-muted-foreground leading-relaxed mb-6",
                                children: n.description
                            }), x.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: n.skills.map(o => x.jsx(Qn, {
                                    variant: "secondary",
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: o
                                }, o))
                            })]
                        })
                    })
                }, n.company))
            })]
        })
    })
}
const hR = "./assets/solar_tracker_icon-ROYtEFp4.jpg",
    pR = "./assets/ICI-DceYuKae.jpg",
    mR = "./assets/WI-4fgI6hRj.png",
    gR = "./assets/Picture21-BT-BAAbZ.jpg",
    yR = "./assets/SC-Dr9qWH-7.jpg",
    vR = "./assets/ML-zQn25eB8.jpg";

function xR() {
    const e = [{
        title: "Pneumatic-Based Solar Trackers",
        period: "Dec 2022 – May 2023",
        description: "Designed a cost-effective tracking system to enhance PV efficiency, comparing its performance with motor and hydraulic systems for solar power applications.",
        category: "Solar Energy",
        image: hR,
        gradient: "from-yellow-400 to-orange-500"
    }, {
        title: "Plastic Incineration and Waste Management",
        period: "Jul 2023 – Oct 2023",
        description: "Gained insights into the efficiency and emissions profiles of different methods to optimize and scale up the incineration process.",
        category: "Environmental",
        image: pR,
        gradient: "from-gray-600 to-gray-800"
    }, {
        title: "Mooring-Less Wave Energy Platform",
        period: "Nov 2023 – Apr 2024",
        description: "Designed a mooring-less system to harness wave energy using Pascal's principle, enabling cost-effective power generation and desalination.",
        category: "Wave Energy",
        image: mR,
        gradient: "from-blue-400 to-cyan-500"
    }, {
        title: "Vacuum-Based Energy Storage System",
        period: "May 2024 – Jul 2024",
        description: "Developed a vacuum-based energy storage system that efficiently stores excess renewable energy and releases it on demand.",
        category: "Energy Storage",
        image: gR,
        gradient: "from-purple-500 to-blue-600"
    }, {
        title: "PV Cooling System with Metal Chip-Based Thermal Regulation",
        period: "Jul 2024 – Feb 2025",
        description: "Circulating water behind solar panels reduces heat, improving efficiency, while the heated water can be reused for other purposes.",
        category: "Thermal Management",
        image: yR,
        gradient: "from-green-400 to-blue-500"
    }, {
        title: "Optimizing Solar Power Plant Installation Using Machine Learning",
        period: "Mar 2025 – Present",
        description: "Developing a machine learning system to predict solar plant inefficiencies, estimate financial losses, and optimize configurations for maximum ROI.",
        category: "Machine Learning",
        image: vR,
        gradient: "from-red-400 to-pink-500"
    }];
    return x.jsx("section", {
        id: "projects",
        className: "section-padding bg-muted/50",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Projects"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: e.map((n, i) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: i * .1
                    },
                    viewport: {
                        once: !0
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: x.jsxs(mt, {
                        className: "h-full overflow-hidden hover:shadow-xl transition-all duration-300 group",
                        children: [x.jsx("div", {
                            className: "h-48 w-full overflow-hidden",
                            children: n.image && x.jsx("img", {
                                src: n.image,
                                alt: n.title,
                                className: "h-full w-full object-cover"
                            })
                        }), x.jsxs(gt, {
                            className: "p-6",
                            children: [x.jsx(Qn, {
                                variant: "secondary",
                                className: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 mb-3",
                                children: n.period
                            }), x.jsx("h3", {
                                className: "text-xl font-bold mb-3 line-clamp-2",
                                children: n.title
                            }), x.jsx("p", {
                                className: "text-muted-foreground mb-4 line-clamp-3",
                                children: n.description
                            }), x.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [x.jsx(Qn, {
                                    className: "bg-primary/10 text-primary border border-primary/20",
                                    children: n.category
                                }), x.jsx(yr, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
                                    children: x.jsx("i", {
                                        className: "fas fa-external-link-alt"
                                    })
                                })]
                            })]
                        })]
                    })
                }, n.title))
            })]
        })
    })
}

function wR() {
    const e = [{
            title: "Runner-up at IIT Madras",
            year: "2023",
            description: "Student Presentation Competition in International Workshop on Ocean Engineering",
            icon: "fas fa-trophy",
            color: "yellow"
        }, {
            title: "Bronze Medal",
            year: "2023",
            description: "International Inter Varsity Innovation Challenge for vacuum-based energy storage solution",
            icon: "fas fa-medal",
            color: "orange"
        }, {
            title: "Mahatma Gandhi Merit Scholarship",
            year: "2023-2025",
            description: "Awarded for academic excellence for three consecutive years",
            icon: "fas fa-award",
            color: "green"
        }, {
            title: "IEEE YESIST12 Finalist",
            year: "2024",
            description: 'WEPOWER Track for "Vacuum Energy Storage System"',
            icon: "fas fa-star",
            color: "blue"
        }, {
            title: "Vishwakarma Award Semifinalist",
            year: "2024",
            description: 'Engineering Innovation for "Active Solar Panel Cooling"',
            icon: "fas fa-lightbulb",
            color: "purple"
        }, {
            title: "Visvesvaraya Award",
            year: "2024-2025",
            description: "Technological Excellence in Research and Innovation Group",
            icon: "fas fa-certificate",
            color: "indigo"
        }],
        n = {
            yellow: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300",
            orange: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300",
            green: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300",
            blue: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300",
            purple: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300",
            indigo: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300"
        };
    return x.jsx("section", {
        className: "section-padding",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Awards & Achievements"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: e.map((i, o) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: o * .1
                    },
                    viewport: {
                        once: !0
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: x.jsx(mt, {
                        className: `bg-gradient-to-br ${n[i.color]} p-6 hover:shadow-lg transition-all duration-300`,
                        children: x.jsxs(gt, {
                            className: "p-0",
                            children: [x.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [x.jsx("i", {
                                    className: `${i.icon} text-2xl mr-3`
                                }), x.jsx(Qn, {
                                    variant: "secondary",
                                    className: "text-xs bg-white/20 text-white border-white/30",
                                    children: i.year
                                })]
                            }), x.jsx("h3", {
                                className: "font-bold mb-2",
                                children: i.title
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: i.description
                            })]
                        })
                    })
                }, i.title))
            })]
        })
    })
}

function SR() {
    const e = [{
        title: "Programming",
        icon: "fas fa-code",
        color: "primary",
        skills: ["C", "Python", "C++", "VHDL", "Verilog"]
    }, {
        title: "Tools",
        icon: "fas fa-tools",
        color: "accent",
        skills: ["MATLAB", "PCB Design", "Cadence"]
    }, {
        title: "Core Skills",
        icon: "fas fa-microchip",
        color: "primary",
        skills: ["Control Systems", "Embedded Systems", "SCADA", "Sensor Fusion"]
    }, {
        title: "Interests",
        icon: "fas fa-rocket",
        color: "accent",
        skills: ["Space Technology", "Sustainability", "IoT"]
    }];
    return x.jsx("section", {
        className: "section-padding bg-muted/50",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Technical Skills"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: e.map((n, i) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: i * .1
                    },
                    viewport: {
                        once: !0
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: x.jsx(mt, {
                        className: "p-6 h-full hover:shadow-lg transition-all duration-300",
                        children: x.jsxs(gt, {
                            className: "p-0",
                            children: [x.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4",
                                children: x.jsx("i", {
                                    className: `${n.icon} text-2xl text-primary`
                                })
                            }), x.jsx("h3", {
                                className: "text-xl font-bold mb-4",
                                children: n.title
                            }), x.jsx("div", {
                                className: "space-y-2",
                                children: n.skills.map(o => x.jsx(Qn, {
                                    variant: "secondary",
                                    className: "mr-2 mb-2 bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
                                    children: o
                                }, o))
                            })]
                        })
                    })
                }, n.title))
            })]
        })
    })
}

function PR() {
    const e = [{
            title: "A Novel Approach Towards Sustainable Energy Storage: Vacuum Based Energy Storage",
            authors: "Sudalaimuthu Suresh P, Sivakeerthana S, Sriganesh S, Suganthan P, Mithun T N, Janarthanan Venkatachalam, Sreeharan B N",
            venue: "WEECON 2023",
            color: "primary"
        }, {
            title: "Sensor Technologies in Industrial Incinerators - A Review",
            authors: "Suganthan P, Archana A R, Sivakeerthana S, Sudalaimuthu Suresh P, Janarthanan Venkatachalam, Sreeharan B N",
            venue: "ICETITE 2024",
            color: "accent"
        }, {
            title: "Design and Analysis of Novel Cooling System for Photovoltaic Modules",
            authors: "Krisnan K, Janarthanan Venkatachalam, Suganthan P, Sriganesh S, Sangeetha N",
            venue: "ASME 2025 Hyderabad",
            color: "primary"
        }, {
            title: "Mathematical Modeling for an active Cooling system for Photovoltaic Modules",
            authors: "Krisnan K, Suganthan P, Janarthanan Venkatachalam, Sangeetha N",
            venue: "ICSTEPS 2025",
            color: "accent"
        }],
        n = [{
            title: "Wave Energy Converter Mathematical Model",
            amount: "₹25,000",
            color: "green"
        }, {
            title: "Pneumatic-Based Solar Trackers",
            amount: "₹49,000",
            color: "blue"
        }, {
            title: "PV Module Cooling System",
            amount: "₹27,000",
            color: "purple"
        }, {
            title: "Active Solar Panel Cooling",
            amount: "₹10,000",
            color: "orange"
        }],
        i = [{
            title: "KCT Research Cell - Lead & Research Intern",
            description: "Energy Engineering (2022 - Present)",
            details: "Organized Ré Day, Kumaraguru Intra Ideathon 2023, and Yugam India Ideathon 2023"
        }, {
            title: "Student Coordinator - Kumaraguru Intra Ideathon 2023",
            description: "Event Management",
            details: "Actively managed and assisted participants throughout the event"
        }, {
            title: "Event Coordinator - Yugam India Ideathon '23",
            description: "48-hour Ideathon",
            details: "Facilitated participants from various colleges across Tamil Nadu"
        }];
    return x.jsx("section", {
        id: "research",
        className: "section-padding",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Research & Publications"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "space-y-6 max-w-4xl mx-auto mb-16",
                children: e.map((o, a) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: a * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: x.jsx(mt, {
                        className: "p-6 hover:shadow-lg transition-shadow",
                        children: x.jsx(gt, {
                            className: "p-0",
                            children: x.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [x.jsx("div", {
                                    className: "w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: x.jsx("i", {
                                        className: "fas fa-file-alt text-gray-600 dark:text-gray-400"
                                    })
                                }), x.jsxs("div", {
                                    className: "flex-1",
                                    children: [x.jsxs("h3", {
                                        className: "font-bold mb-2",
                                        children: ['"', o.title, '"']
                                    }), x.jsx("p", {
                                        className: "text-sm text-muted-foreground mb-2",
                                        children: o.authors.split(", ").map((u, c) => x.jsxs("span", {
                                            children: [u === "Suganthan P" ? x.jsx("strong", {
                                                children: u
                                            }) : u, c < o.authors.split(", ").length - 1 ? ", " : ""]
                                        }, c))
                                    }), x.jsx(Qn, {
                                        className: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                                        children: o.venue
                                    })]
                                })]
                            })
                        })
                    })
                }, o.title))
            }), x.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [x.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: [x.jsx("h3", {
                        className: "text-2xl font-bold mb-6 text-center",
                        children: "Research Grants"
                    }), x.jsx("div", {
                        className: "space-y-4",
                        children: n.map((o, a) => x.jsx(ye.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .4,
                                delay: a * .1
                            },
                            viewport: {
                                once: !0
                            },
                            children: x.jsx(mt, {
                                className: "p-4 bg-gray-50 dark:bg-gray-800",
                                children: x.jsx(gt, {
                                    className: "p-0",
                                    children: x.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [x.jsx("span", {
                                            className: "font-semibold",
                                            children: o.title
                                        }), x.jsx("span", {
                                            className: "font-bold text-gray-700 dark:text-gray-300",
                                            children: o.amount
                                        })]
                                    })
                                })
                            })
                        }, o.title))
                    })]
                }), x.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: [x.jsx("h3", {
                        className: "text-2xl font-bold mb-6 text-center",
                        children: "Leadership & Volunteering"
                    }), x.jsx("div", {
                        className: "space-y-4",
                        children: i.map((o, a) => x.jsx(ye.div, {
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .4,
                                delay: a * .1
                            },
                            viewport: {
                                once: !0
                            },
                            children: x.jsx(mt, {
                                className: "p-4 hover:shadow-md transition-shadow",
                                children: x.jsxs(gt, {
                                    className: "p-0",
                                    children: [x.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: o.title
                                    }), x.jsx("p", {
                                        className: "text-sm text-muted-foreground mb-2",
                                        children: o.description
                                    }), x.jsx("p", {
                                        className: "text-sm",
                                        children: o.details
                                    })]
                                })
                            })
                        }, o.title))
                    })]
                })]
            })]
        })
    })
}

function CR() {
    const e = [{
        title: "Control Systems",
        platform: "NPTEL",
        year: "Jul – Oct 2023",
        color: "primary"
    }, {
        title: "MATLAB Numerical Computation",
        platform: "Udemy",
        year: "Jan 2024",
        color: "accent"
    }, {
        title: "Introduction to Internet of Things",
        platform: "NPTEL",
        year: "Jan – April 2024",
        color: "primary"
    }, {
        title: "Machine Learning with Python",
        platform: "Coursera",
        year: "2024",
        color: "accent"
    }, {
        title: "Geo-data Sharing Cyber Security",
        platform: "IIRS",
        year: "2025",
        color: "primary"
    }, {
        title: "Embedded Systems",
        platform: "NIELIT",
        year: "Jan 2025",
        color: "accent"
    }];
    return x.jsx("section", {
        className: "section-padding bg-muted/50",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Certifications"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                })]
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: e.map((n, i) => x.jsx(ye.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: i * .1
                    },
                    viewport: {
                        once: !0
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: x.jsx(mt, {
                        className: "p-6 h-full hover:shadow-lg transition-all duration-300",
                        children: x.jsxs(gt, {
                            className: "p-0",
                            children: [x.jsxs("div", {
                                className: "flex items-center mb-4",
                                children: [x.jsx("i", {
                                    className: "fas fa-certificate text-2xl text-primary mr-3"
                                }), x.jsx(Qn, {
                                    variant: "secondary",
                                    className: "text-sm bg-primary/10 text-primary border border-primary/20",
                                    children: n.platform
                                })]
                            }), x.jsx("h3", {
                                className: "font-bold mb-2",
                                children: n.title
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: n.year
                            })]
                        })
                    })
                }, n.title))
            })]
        })
    })
}
const zo = P.forwardRef(({
    className: e,
    type: n,
    ...i
}, o) => x.jsx("input", {
    type: n,
    className: Ge("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: o,
    ...i
}));
zo.displayName = "Input";
const f0 = P.forwardRef(({
    className: e,
    ...n
}, i) => x.jsx("textarea", {
    className: Ge("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: i,
    ...n
}));
f0.displayName = "Textarea";
var ER = "Label",
    h0 = P.forwardRef((e, n) => x.jsx(lt.label, {
        ...e,
        ref: n,
        onMouseDown: i => {
            i.target.closest("button, input, select, textarea") || (e.onMouseDown?.(i), !i.defaultPrevented && i.detail > 1 && i.preventDefault())
        }
    }));
h0.displayName = ER;
var p0 = h0;
const TR = la("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    Zi = P.forwardRef(({
        className: e,
        ...n
    }, i) => x.jsx(p0, {
        ref: i,
        className: Ge(TR(), e),
        ...n
    }));
Zi.displayName = p0.displayName;

function bR() {
    const [e, n] = P.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    }), {
        toast: i
    } = Sg(), o = yS({
        mutationFn: async f => await vS("POST", "/api/contact", f),
        onSuccess: () => {
            i({
                title: "Message sent successfully!",
                description: "Thank you for your message. I'll get back to you soon."
            }), n({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        },
        onError: f => {
            i({
                title: "Error sending message",
                description: "Please try again later or contact me directly via email.",
                variant: "destructive"
            })
        }
    }), a = f => {
        if (f.preventDefault(), !e.name || !e.email || !e.message) {
            i({
                title: "Please fill in all required fields",
                description: "Name, email, and message are required.",
                variant: "destructive"
            });
            return
        }
        o.mutate(e)
    }, u = f => {
        n(p => ({
            ...p,
            [f.target.name]: f.target.value
        }))
    }, c = [{
        icon: "fas fa-envelope",
        title: "Email",
        value: "suganthanprabhu7@gmail.com",
        href: "mailto:suganthanprabhu7@gmail.com"
    }, {
        icon: "fas fa-phone",
        title: "Phone",
        value: "+91 6369688017",
        href: "tel:+916369688017"
    }, {
        icon: "fab fa-linkedin",
        title: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/suganthan-prabhu-710aa9256/"
    }, {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        value: "Coimbatore, Tamil Nadu, India",
        href: null
    }];
    return x.jsx("section", {
        id: "contact",
        className: "section-padding bg-gray-900 text-white",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [x.jsxs(ye.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: "Get In Touch"
                }), x.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"
                }), x.jsx("p", {
                    className: "text-xl text-gray-300 mt-6 max-w-2xl mx-auto",
                    children: "Ready to collaborate on innovative projects in space technology, embedded systems, or renewable energy? Let's connect!"
                })]
            }), x.jsxs("div", {
                className: "grid place-items-center h-screen",
                children: [x.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: [x.jsx("h3", {
                        className: "text-2xl font-bold mb-8 w-fit mx-auto text-center",
                        children: "Contact Information"
                    }), x.jsx("div", {
                        className: "space-y-6 grid h-screen items-start justify-center grid-cols-1 mx-auto",
                        children: c.map((f, p) => x.jsxs(ye.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .4,
                                delay: p * .1
                            },
                            viewport: {
                                once: !0
                            },
                            className: "flex items-center space-x-4",
                            children: [x.jsx("div", {
                                className: "w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center",
                                children: x.jsx("i", {
                                    className: `${f.icon} text-xl`
                                })
                            }), x.jsxs("div", {
                                children: [x.jsx("h4", {
                                    className: "font-semibold",
                                    children: f.title
                                }), f.href ? x.jsx("a", {
                                    href: f.href,
                                    target: f.href.startsWith("http") ? "_blank" : void 0,
                                    rel: f.href.startsWith("http") ? "noopener noreferrer" : void 0,
                                    className: "text-gray-200 hover:text-white transition-colors",
                                    children: f.value
                                }) : x.jsx("p", {
                                    className: "text-gray-200",
                                    children: f.value
                                })]
                            })]
                        }, f.title))
                    })]
                }), x.jsxs(ye.div, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
		})]
            })]
        })
    })
}

function kR() {
    return x.jsxs("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [x.jsx(tR, {}), x.jsx(iR, {}), x.jsx(uR, {}), x.jsx(cR, {}), x.jsx(fR, {}), x.jsx(xR, {}), x.jsx(wR, {}), x.jsx(SR, {}), x.jsx(PR, {}), x.jsx(CR, {}), x.jsx(bR, {}), x.jsx("footer", {
            className: "bg-gray-900 text-white py-8",
            children: x.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: x.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [x.jsx("div", {
                        className: "mb-4 md:mb-0",
                        children: x.jsx("p", {
                            className: "text-gray-400",
                            children: "© 2025 Suganthan Prabhu. All rights reserved."
                        })
                    }), x.jsxs("div", {
                        className: "flex space-x-6",
                        children: [x.jsx("a", {
                            href: "mailto:suganthanprabhu7@gmail.com",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: x.jsx("i", {
                                className: "fas fa-envelope text-xl"
                            })
                        }), x.jsx("a", {
                            href: "https://www.linkedin.com/in/suganthan-prabhu-710aa9256/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: x.jsx("i", {
                                className: "fab fa-linkedin text-xl"
                            })
                        }), x.jsx("a", {
                            href: "tel:+916369688017",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: x.jsx("i", {
                                className: "fas fa-phone text-xl"
                            })
                        })]
                    })]
                })
            })
        })]
    })
}

function RR() {
    return x.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: x.jsx(mt, {
            className: "w-full max-w-md mx-4",
            children: x.jsxs(gt, {
                className: "pt-6",
                children: [x.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [x.jsx(w1, {
                        className: "h-8 w-8 text-red-500"
                    }), x.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), x.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}

function AR() {
    return x.jsxs($w, {
        children: [x.jsx(vp, {
            path: "*",
            component: kR
	}), x.jsx(vp, {
            component: RR
        })]
    })
}

function NR() {
    return x.jsx(pS, {
        client: wS,
        children: x.jsx(MC, {
            defaultTheme: "light",
            storageKey: "portfolio-theme",
            children: x.jsxs(AC, {
                children: [x.jsx(rP, {}), x.jsx(AR, {})]
            })
        })
    })
}
xw.createRoot(document.getElementById("root")).render(x.jsx(NR, {}));
