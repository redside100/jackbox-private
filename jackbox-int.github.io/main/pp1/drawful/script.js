var fh = Object.defineProperty;
var ph = (t, e, n) => e in t ? fh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var st = (t, e, n) => (ph(t, typeof e != "symbol" ? e + "" : e, n), n);
const gh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const f of a)
            if (f.type === "childList")
                for (const m of f.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(a) {
        const f = {};
        return a.integrity && (f.integrity = a.integrity), a.referrerpolicy && (f.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? f.credentials = "include" : a.crossorigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const f = n(a);
        fetch(a.href, f)
    }
};
gh();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function mh(t) {
    var e = t.default;
    if (typeof e == "function") {
        var n = function() {
            return e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(i) {
        var a = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, a.get ? a : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }), n
}
var Pi = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            a = Array.prototype,
            f = Object.prototype,
            m = Function.prototype,
            _ = a.push,
            k = a.slice,
            I = f.toString,
            D = f.hasOwnProperty,
            M = Array.isArray,
            Y = Object.keys,
            ne = m.bind,
            K = Object.create,
            re = function() {},
            v = function(l) {
                if (l instanceof v) return l;
                if (!(this instanceof v)) return new v(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = v), e._ = v, v.VERSION = "1.8.3";
        var N = function(l, g, S) {
                if (g === void 0) return l;
                switch (S == null ? 3 : S) {
                    case 1:
                        return function(O) {
                            return l.call(g, O)
                        };
                    case 2:
                        return function(O, P) {
                            return l.call(g, O, P)
                        };
                    case 3:
                        return function(O, P, B) {
                            return l.call(g, O, P, B)
                        };
                    case 4:
                        return function(O, P, B, te) {
                            return l.call(g, O, P, B, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            q = function(l, g, S) {
                return l == null ? v.identity : v.isFunction(l) ? N(l, g, S) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, g) {
            return q(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(S) {
                    var O = arguments.length;
                    if (O < 2 || S == null) return S;
                    for (var P = 1; P < O; P++)
                        for (var B = arguments[P], te = l(B), ke = te.length, he = 0; he < ke; he++) {
                            var De = te[he];
                            (!g || S[De] === void 0) && (S[De] = B[De])
                        }
                    return S
                }
            },
            se = function(l) {
                if (!v.isObject(l)) return {};
                if (K) return K(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            ye = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            d = Math.pow(2, 53) - 1,
            _e = ye("length"),
            Oe = function(l) {
                var g = _e(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        v.each = v.forEach = function(l, g, S) {
            g = N(g, S);
            var O, P;
            if (Oe(l))
                for (O = 0, P = l.length; O < P; O++) g(l[O], O, l);
            else {
                var B = v.keys(l);
                for (O = 0, P = B.length; O < P; O++) g(l[B[O]], B[O], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = q(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, B = Array(P), te = 0; te < P; te++) {
                var ke = O ? O[te] : te;
                B[te] = g(l[ke], ke, l)
            }
            return B
        };

        function Pe(l) {
            function g(S, O, P, B, te, ke) {
                for (; te >= 0 && te < ke; te += l) {
                    var he = B ? B[te] : te;
                    P = O(P, S[he], he, S)
                }
                return P
            }
            return function(S, O, P, B) {
                O = N(O, B, 4);
                var te = !Oe(S) && v.keys(S),
                    ke = (te || S).length,
                    he = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (P = S[te ? te[he] : he], he += l), g(S, O, P, te, he, ke)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, g, S) {
            var O;
            if (Oe(l) ? O = v.findIndex(l, g, S) : O = v.findKey(l, g, S), O !== void 0 && O !== -1) return l[O]
        }, v.filter = v.select = function(l, g, S) {
            var O = [];
            return g = q(g, S), v.each(l, function(P, B, te) {
                g(P, B, te) && O.push(P)
            }), O
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(q(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = q(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, B = 0; B < P; B++) {
                var te = O ? O[B] : B;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = q(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, B = 0; B < P; B++) {
                var te = O ? O[B] : B;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, O) {
            return Oe(l) || (l = v.values(l)), (typeof S != "number" || O) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                O = v.isFunction(g);
            return v.map(l, function(P) {
                var B = O ? g : P[g];
                return B == null ? B : B.apply(P, S)
            })
        }, v.pluck = function(l, g) {
            return v.map(l, v.property(g))
        }, v.where = function(l, g) {
            return v.filter(l, v.matcher(g))
        }, v.findWhere = function(l, g) {
            return v.find(l, v.matcher(g))
        }, v.max = function(l, g, S) {
            var O = -1 / 0,
                P = -1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, he = l.length; ke < he; ke++) B = l[ke], B > O && (O = B)
            } else g = q(g, S), v.each(l, function(De, Le, nt) {
                te = g(De, Le, nt), (te > P || te === -1 / 0 && O === -1 / 0) && (O = De, P = te)
            });
            return O
        }, v.min = function(l, g, S) {
            var O = 1 / 0,
                P = 1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, he = l.length; ke < he; ke++) B = l[ke], B < O && (O = B)
            } else g = q(g, S), v.each(l, function(De, Le, nt) {
                te = g(De, Le, nt), (te < P || te === 1 / 0 && O === 1 / 0) && (O = De, P = te)
            });
            return O
        }, v.shuffle = function(l) {
            for (var g = Oe(l) ? l : v.values(l), S = g.length, O = Array(S), P = 0, B; P < S; P++) B = v.random(0, P), B !== P && (O[P] = O[B]), O[B] = g[P];
            return O
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Oe(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = q(g, S), v.pluck(v.map(l, function(O, P, B) {
                return {
                    value: O,
                    index: P,
                    criteria: g(O, P, B)
                }
            }).sort(function(O, P) {
                var B = O.criteria,
                    te = P.criteria;
                if (B !== te) {
                    if (B > te || B === void 0) return 1;
                    if (B < te || te === void 0) return -1
                }
                return O.index - P.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, S, O) {
                var P = {};
                return S = q(S, O), v.each(g, function(B, te) {
                    var ke = S(B, te, g);
                    l(P, B, ke)
                }), P
            }
        };
        v.groupBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S].push(g) : l[S] = [g]
        }), v.indexBy = lt(function(l, g, S) {
            l[S] = g
        }), v.countBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S]++ : l[S] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Oe(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, S) {
            g = q(g, S);
            var O = [],
                P = [];
            return v.each(l, function(B, te, ke) {
                (g(B, te, ke) ? O : P).push(B)
            }), [O, P]
        }, v.first = v.head = v.take = function(l, g, S) {
            if (l != null) return g == null || S ? l[0] : v.initial(l, l.length - g)
        }, v.initial = function(l, g, S) {
            return k.call(l, 0, Math.max(0, l.length - (g == null || S ? 1 : g)))
        }, v.last = function(l, g, S) {
            if (l != null) return g == null || S ? l[l.length - 1] : v.rest(l, Math.max(0, l.length - g))
        }, v.rest = v.tail = v.drop = function(l, g, S) {
            return k.call(l, g == null || S ? 1 : g)
        }, v.compact = function(l) {
            return v.filter(l, v.identity)
        };
        var Be = function(l, g, S, O) {
            for (var P = [], B = 0, te = O || 0, ke = _e(l); te < ke; te++) {
                var he = l[te];
                if (Oe(he) && (v.isArray(he) || v.isArguments(he))) {
                    g || (he = Be(he, g, S));
                    var De = 0,
                        Le = he.length;
                    for (P.length += Le; De < Le;) P[B++] = he[De++]
                } else S || (P[B++] = he)
            }
            return P
        };
        v.flatten = function(l, g) {
            return Be(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, O) {
            v.isBoolean(g) || (O = S, S = g, g = !1), S != null && (S = q(S, O));
            for (var P = [], B = [], te = 0, ke = _e(l); te < ke; te++) {
                var he = l[te],
                    De = S ? S(he, te, l) : he;
                g ? ((!te || B !== De) && P.push(he), B = De) : S ? v.contains(B, De) || (B.push(De), P.push(he)) : v.contains(P, he) || P.push(he)
            }
            return P
        }, v.union = function() {
            return v.uniq(Be(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, O = 0, P = _e(l); O < P; O++) {
                var B = l[O];
                if (!v.contains(g, B)) {
                    for (var te = 1; te < S && v.contains(arguments[te], B); te++);
                    te === S && g.push(B)
                }
            }
            return g
        }, v.difference = function(l) {
            var g = Be(arguments, !0, !0, 1);
            return v.filter(l, function(S) {
                return !v.contains(g, S)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(l) {
            for (var g = l && v.max(l, _e).length || 0, S = Array(g), O = 0; O < g; O++) S[O] = v.pluck(l, O);
            return S
        }, v.object = function(l, g) {
            for (var S = {}, O = 0, P = _e(l); O < P; O++) g ? S[l[O]] = g[O] : S[l[O][0]] = l[O][1];
            return S
        };

        function J(l) {
            return function(g, S, O) {
                S = q(S, O);
                for (var P = _e(g), B = l > 0 ? 0 : P - 1; B >= 0 && B < P; B += l)
                    if (S(g[B], B, g)) return B;
                return -1
            }
        }
        v.findIndex = J(1), v.findLastIndex = J(-1), v.sortedIndex = function(l, g, S, O) {
            S = q(S, O, 1);
            for (var P = S(g), B = 0, te = _e(l); B < te;) {
                var ke = Math.floor((B + te) / 2);
                S(l[ke]) < P ? B = ke + 1 : te = ke
            }
            return B
        };

        function Fe(l, g, S) {
            return function(O, P, B) {
                var te = 0,
                    ke = _e(O);
                if (typeof B == "number") l > 0 ? te = B >= 0 ? B : Math.max(B + ke, te) : ke = B >= 0 ? Math.min(B + 1, ke) : B + ke + 1;
                else if (S && B && ke) return B = S(O, P), O[B] === P ? B : -1;
                if (P !== P) return B = g(k.call(O, te, ke), v.isNaN), B >= 0 ? B + te : -1;
                for (B = l > 0 ? te : ke - 1; B >= 0 && B < ke; B += l)
                    if (O[B] === P) return B;
                return -1
            }
        }
        v.indexOf = Fe(1, v.findIndex, v.sortedIndex), v.lastIndexOf = Fe(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var O = Math.max(Math.ceil((g - l) / S), 0), P = Array(O), B = 0; B < O; B++, l += S) P[B] = l;
            return P
        };
        var G = function(l, g, S, O, P) {
            if (!(O instanceof g)) return l.apply(S, P);
            var B = se(l.prototype),
                te = l.apply(B, P);
            return v.isObject(te) ? te : B
        };
        v.bind = function(l, g) {
            if (ne && l.bind === ne) return ne.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                O = function() {
                    return G(l, O, g, this, S.concat(k.call(arguments)))
                };
            return O
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var O = 0, P = g.length, B = Array(P), te = 0; te < P; te++) B[te] = g[te] === v ? arguments[O++] : g[te];
                    for (; O < arguments.length;) B.push(arguments[O++]);
                    return G(l, S, this, this, B)
                };
            return S
        }, v.bindAll = function(l) {
            var g, S = arguments.length,
                O;
            if (S <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < S; g++) O = arguments[g], l[O] = v.bind(l[O], l);
            return l
        }, v.memoize = function(l, g) {
            var S = function(O) {
                var P = S.cache,
                    B = "" + (g ? g.apply(this, arguments) : O);
                return v.has(P, B) || (P[B] = l.apply(this, arguments)), P[B]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var O, P, B, te = null,
                ke = 0;
            S || (S = {});
            var he = function() {
                ke = S.leading === !1 ? 0 : v.now(), te = null, B = l.apply(O, P), te || (O = P = null)
            };
            return function() {
                var De = v.now();
                !ke && S.leading === !1 && (ke = De);
                var Le = g - (De - ke);
                return O = this, P = arguments, Le <= 0 || Le > g ? (te && (clearTimeout(te), te = null), ke = De, B = l.apply(O, P), te || (O = P = null)) : !te && S.trailing !== !1 && (te = setTimeout(he, Le)), B
            }
        }, v.debounce = function(l, g, S) {
            var O, P, B, te, ke, he = function() {
                var De = v.now() - te;
                De < g && De >= 0 ? O = setTimeout(he, g - De) : (O = null, S || (ke = l.apply(B, P), O || (B = P = null)))
            };
            return function() {
                B = this, P = arguments, te = v.now();
                var De = S && !O;
                return O || (O = setTimeout(he, g)), De && (ke = l.apply(B, P), B = P = null), ke
            }
        }, v.wrap = function(l, g) {
            return v.partial(g, l)
        }, v.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, v.compose = function() {
            var l = arguments,
                g = l.length - 1;
            return function() {
                for (var S = g, O = l[g].apply(this, arguments); S--;) O = l[S].call(this, O);
                return O
            }
        }, v.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, v.before = function(l, g) {
            var S;
            return function() {
                return --l > 0 && (S = g.apply(this, arguments)), l <= 1 && (g = null), S
            }
        }, v.once = v.partial(v.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, g) {
            var S = Ae.length,
                O = l.constructor,
                P = v.isFunction(O) && O.prototype || f,
                B = "constructor";
            for (v.has(l, B) && !v.contains(g, B) && g.push(B); S--;) B = Ae[S], B in l && l[B] !== P[B] && !v.contains(g, B) && g.push(B)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (Y) return Y(l);
            var g = [];
            for (var S in l) v.has(l, S) && g.push(S);
            return oe && be(l, g), g
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var g = [];
            for (var S in l) g.push(S);
            return oe && be(l, g), g
        }, v.values = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), P = 0; P < S; P++) O[P] = l[g[P]];
            return O
        }, v.mapObject = function(l, g, S) {
            g = q(g, S);
            for (var O = v.keys(l), P = O.length, B = {}, te, ke = 0; ke < P; ke++) te = O[ke], B[te] = g(l[te], te, l);
            return B
        }, v.pairs = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), P = 0; P < S; P++) O[P] = [g[P], l[g[P]]];
            return O
        }, v.invert = function(l) {
            for (var g = {}, S = v.keys(l), O = 0, P = S.length; O < P; O++) g[l[S[O]]] = S[O];
            return g
        }, v.functions = v.methods = function(l) {
            var g = [];
            for (var S in l) v.isFunction(l[S]) && g.push(S);
            return g.sort()
        }, v.extend = ae(v.allKeys), v.extendOwn = v.assign = ae(v.keys), v.findKey = function(l, g, S) {
            g = q(g, S);
            for (var O = v.keys(l), P, B = 0, te = O.length; B < te; B++)
                if (P = O[B], g(l[P], P, l)) return P
        }, v.pick = function(l, g, S) {
            var O = {},
                P = l,
                B, te;
            if (P == null) return O;
            v.isFunction(g) ? (te = v.allKeys(P), B = N(g, S)) : (te = Be(arguments, !1, !1, 1), B = function(nt, Ct, rn) {
                return Ct in rn
            }, P = Object(P));
            for (var ke = 0, he = te.length; ke < he; ke++) {
                var De = te[ke],
                    Le = P[De];
                B(Le, De, P) && (O[De] = Le)
            }
            return O
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var O = v.map(Be(arguments, !1, !1, 1), String);
                g = function(P, B) {
                    return !v.contains(O, B)
                }
            }
            return v.pick(l, g, S)
        }, v.defaults = ae(v.allKeys, !0), v.create = function(l, g) {
            var S = se(l);
            return g && v.extendOwn(S, g), S
        }, v.clone = function(l) {
            return v.isObject(l) ? v.isArray(l) ? l.slice() : v.extend({}, l) : l
        }, v.tap = function(l, g) {
            return g(l), l
        }, v.isMatch = function(l, g) {
            var S = v.keys(g),
                O = S.length;
            if (l == null) return !O;
            for (var P = Object(l), B = 0; B < O; B++) {
                var te = S[B];
                if (g[te] !== P[te] || !(te in P)) return !1
            }
            return !0
        };
        var we = function(l, g, S, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof v && (l = l._wrapped), g instanceof v && (g = g._wrapped);
            var P = I.call(l);
            if (P !== I.call(g)) return !1;
            switch (P) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var B = P === "[object Array]";
            if (!B) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    ke = g.constructor;
                if (te !== ke && !(v.isFunction(te) && te instanceof te && v.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], O = O || [];
            for (var he = S.length; he--;)
                if (S[he] === l) return O[he] === g;
            if (S.push(l), O.push(g), B) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!we(l[he], g[he], S, O)) return !1
            } else {
                var De = v.keys(l),
                    Le;
                if (he = De.length, v.keys(g).length !== he) return !1;
                for (; he--;)
                    if (Le = De[he], !(v.has(g, Le) && we(l[Le], g[Le], S, O))) return !1
            }
            return S.pop(), O.pop(), !0
        };
        v.isEqual = function(l, g) {
            return we(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = M || function(l) {
            return I.call(l) === "[object Array]"
        }, v.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            v["is" + l] = function(g) {
                return I.call(g) === "[object " + l + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(l) {
            return v.has(l, "callee")
        }), typeof /./ != "function" && typeof Int8Array != "object" && (v.isFunction = function(l) {
            return typeof l == "function" || !1
        }), v.isFinite = function(l) {
            return isFinite(l) && !isNaN(parseFloat(l))
        }, v.isNaN = function(l) {
            return v.isNumber(l) && l !== +l
        }, v.isBoolean = function(l) {
            return l === !0 || l === !1 || I.call(l) === "[object Boolean]"
        }, v.isNull = function(l) {
            return l === null
        }, v.isUndefined = function(l) {
            return l === void 0
        }, v.has = function(l, g) {
            return l != null && D.call(l, g)
        }, v.noConflict = function() {
            return n._ = i, this
        }, v.identity = function(l) {
            return l
        }, v.constant = function(l) {
            return function() {
                return l
            }
        }, v.noop = function() {}, v.property = ye, v.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, v.matcher = v.matches = function(l) {
            return l = v.extendOwn({}, l),
                function(g) {
                    return v.isMatch(g, l)
                }
        }, v.times = function(l, g, S) {
            var O = Array(Math.max(0, l));
            g = N(g, S, 1);
            for (var P = 0; P < l; P++) O[P] = g(P);
            return O
        }, v.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, v.now = Date.now || function() {
            return new Date().getTime()
        };
        var ue = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            Se = v.invert(ue),
            Te = function(l) {
                var g = function(B) {
                        return l[B]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    O = RegExp(S),
                    P = RegExp(S, "g");
                return function(B) {
                    return B = B == null ? "" : "" + B, O.test(B) ? B.replace(P, g) : B
                }
            };
        v.escape = Te(ue), v.unescape = Te(Se), v.result = function(l, g, S) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = S), v.isFunction(O) ? O.call(l) : O
        };
        var $e = 0;
        v.uniqueId = function(l) {
            var g = ++$e + "";
            return l ? l + g : g
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Ke = /(.)^/,
            dt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Bt = /\\|'|\r|\n|\u2028|\u2029/g,
            qt = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, g, S) {
            !g && S && (g = S), g = v.defaults({}, g, v.templateSettings);
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                P = 0,
                B = "__p+='";
            l.replace(O, function(De, Le, nt, Ct, rn) {
                return B += l.slice(P, rn).replace(Bt, qt), P = rn + De.length, Le ? B += `'+
((__t=(` + Le + `))==null?'':_.escape(__t))+
'` : nt ? B += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : Ct && (B += `';
` + Ct + `
__p+='`), De
            }), B += `';
`, g.variable || (B = `with(obj||{}){
` + B + `}
`), B = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + B + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", B)
            } catch (De) {
                throw De.source = B, De
            }
            var ke = function(De) {
                    return te.call(this, De, v)
                },
                he = g.variable || "obj";
            return ke.source = "function(" + he + `){
` + B + "}", ke
        }, v.chain = function(l) {
            var g = v(l);
            return g._chain = !0, g
        };
        var E = function(l, g) {
            return l._chain ? v(g).chain() : g
        };
        v.mixin = function(l) {
            v.each(v.functions(l), function(g) {
                var S = v[g] = l[g];
                v.prototype[g] = function() {
                    var O = [this._wrapped];
                    return _.apply(O, arguments), E(this, S.apply(v, O))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], E(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(vt)
})(Pi, Pi.exports);
const at = Pi.exports;
var Na = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(t) {
    (function(e, n) {
        t.exports = e.document ? n(e, !0) : function(i) {
            if (!i.document) throw new Error("jQuery requires a window with a document");
            return n(i)
        }
    })(typeof window < "u" ? window : vt, function(e, n) {
        var i = [],
            a = Object.getPrototypeOf,
            f = i.slice,
            m = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            _ = i.push,
            k = i.indexOf,
            I = {},
            D = I.toString,
            M = I.hasOwnProperty,
            Y = M.toString,
            ne = Y.call(Object),
            K = {},
            re = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            v = function(s) {
                return s != null && s === s.window
            },
            N = e.document,
            q = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function ae(r, s, u) {
            u = u || N;
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in q) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            u.head.appendChild(x).parentNode.removeChild(x)
        }

        function se(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? I[D.call(r)] || "object" : typeof r
        }
        var ye = "3.6.0",
            d = function(r, s) {
                return new d.fn.init(r, s)
            };
        d.fn = d.prototype = {
            jquery: ye,
            constructor: d,
            length: 0,
            toArray: function() {
                return f.call(this)
            },
            get: function(r) {
                return r == null ? f.call(this) : r < 0 ? this[r + this.length] : this[r]
            },
            pushStack: function(r) {
                var s = d.merge(this.constructor(), r);
                return s.prevObject = this, s
            },
            each: function(r) {
                return d.each(this, r)
            },
            map: function(r) {
                return this.pushStack(d.map(this, function(s, u) {
                    return r.call(s, u, s)
                }))
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(d.grep(this, function(r, s) {
                    return (s + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(d.grep(this, function(r, s) {
                    return s % 2
                }))
            },
            eq: function(r) {
                var s = this.length,
                    u = +r + (r < 0 ? s : 0);
                return this.pushStack(u >= 0 && u < s ? [this[u]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: _,
            sort: i.sort,
            splice: i.splice
        }, d.extend = d.fn.extend = function() {
            var r, s, u, p, w, x, T = arguments[0] || {},
                z = 1,
                H = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === H && (T = this, z--); z < H; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (d.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !d.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = d.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
            return T
        }, d.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, u;
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = M.call(s, "constructor") && s.constructor, typeof u == "function" && Y.call(u) === ne) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, u) {
                ae(r, {
                    nonce: s && s.nonce
                }, u)
            },
            each: function(r, s) {
                var u, p = 0;
                if (_e(r))
                    for (u = r.length; p < u && s.call(r[p], p, r[p]) !== !1; p++);
                else
                    for (p in r)
                        if (s.call(r[p], p, r[p]) === !1) break;
                return r
            },
            makeArray: function(r, s) {
                var u = s || [];
                return r != null && (_e(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : _.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : k.call(s, r, u)
            },
            merge: function(r, s) {
                for (var u = +s.length, p = 0, w = r.length; p < u; p++) r[w++] = s[p];
                return r.length = w, r
            },
            grep: function(r, s, u) {
                for (var p, w = [], x = 0, T = r.length, z = !u; x < T; x++) p = !s(r[x], x), p !== z && w.push(r[x]);
                return w
            },
            map: function(r, s, u) {
                var p, w, x = 0,
                    T = [];
                if (_e(r))
                    for (p = r.length; x < p; x++) w = s(r[x], x, u), w != null && T.push(w);
                else
                    for (x in r) w = s(r[x], x, u), w != null && T.push(w);
                return m(T)
            },
            guid: 1,
            support: K
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            I["[object " + s + "]"] = s.toLowerCase()
        });

        function _e(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, x, T, z, H, Z, le, Ce, ie, ce, Ue, rt, je, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Yi(),
                _i = Yi(),
                Wi = Yi(),
                hn = Yi(),
                Kn = function(R, F) {
                    return R === F && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Ln = an.pop,
                vn = an.push,
                Cn = an.push,
                _s = an.slice,
                Qn = function(R, F) {
                    for (var X = 0, de = R.length; X < de; X++)
                        if (R[X] === F) return X;
                    return -1
                },
                Fr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ss = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                ks = new RegExp(gt + "+", "g"),
                Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                $o = new RegExp(gt + "|>"),
                jo = new RegExp(zr),
                Fo = new RegExp("^" + Zn + "$"),
                Xi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + Ss),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Fr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                zo = /HTML$/i,
                Ho = /^(?:input|select|textarea|button)$/i,
                Go = /^h\d$/i,
                ki = /^[^{]+\{\s*\[native \w/,
                Uo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Hr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(R, F) {
                    var X = "0x" + R.slice(1) - 65536;
                    return F || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Gr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(R, F) {
                    return F ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                },
                Rs = function() {
                    ie()
                },
                qo = Zi(function(R) {
                    return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = _s.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(F, X) {
                        vn.apply(F, _s.call(X))
                    } : function(F, X) {
                        for (var de = F.length, ee = 0; F[de++] = X[ee++];);
                        F.length = de - 1
                    }
                }
            }

            function St(R, F, X, de) {
                var ee, ve, Ee, Re, Me, ze, Ge, Xe = F && F.ownerDocument,
                    ht = F ? F.nodeType : 9;
                if (X = X || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return X;
                if (!de && (ie(F), F = F || ce, rt)) {
                    if (ht !== 11 && (Me = Uo.exec(R)))
                        if (ee = Me[1]) {
                            if (ht === 9)
                                if (Ee = F.getElementById(ee)) {
                                    if (Ee.id === ee) return X.push(Ee), X
                                } else return X;
                            else if (Xe && (Ee = Xe.getElementById(ee)) && un(F, Ee) && Ee.id === ee) return X.push(Ee), X
                        } else {
                            if (Me[2]) return Cn.apply(X, F.getElementsByTagName(R)), X;
                            if ((ee = Me[3]) && u.getElementsByClassName && F.getElementsByClassName) return Cn.apply(X, F.getElementsByClassName(ee)), X
                        } if (u.qsa && !hn[R + " "] && (!je || !je.test(R)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                        if (Ge = R, Xe = F, ht === 1 && ($o.test(R) || As.test(R))) {
                            for (Xe = Hr.test(R) && Ur(F.parentNode) || F, (Xe !== F || !u.scope) && ((Re = F.getAttribute("id")) ? Re = Re.replace(Gr, Os) : F.setAttribute("id", Re = _t)), ze = T(R), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            Ge = ze.join(",")
                        }
                        try {
                            return Cn.apply(X, Xe.querySelectorAll(Ge)), X
                        } catch {
                            hn(R, !0)
                        } finally {
                            Re === _t && F.removeAttribute("id")
                        }
                    }
                }
                return H(R.replace(Si, "$1"), F, X, de)
            }

            function Yi() {
                var R = [];

                function F(X, de) {
                    return R.push(X + " ") > p.cacheLength && delete F[R.shift()], F[X + " "] = de
                }
                return F
            }

            function dn(R) {
                return R[_t] = !0, R
            }

            function yn(R) {
                var F = ce.createElement("fieldset");
                try {
                    return !!R(F)
                } catch {
                    return !1
                } finally {
                    F.parentNode && F.parentNode.removeChild(F), F = null
                }
            }

            function Ki(R, F) {
                for (var X = R.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = F
            }

            function Ji(R, F) {
                var X = F && R,
                    de = X && R.nodeType === 1 && F.nodeType === 1 && R.sourceIndex - F.sourceIndex;
                if (de) return de;
                if (X) {
                    for (; X = X.nextSibling;)
                        if (X === F) return -1
                }
                return R ? 1 : -1
            }

            function Wo(R) {
                return function(F) {
                    var X = F.nodeName.toLowerCase();
                    return X === "input" && F.type === R
                }
            }

            function Xo(R) {
                return function(F) {
                    var X = F.nodeName.toLowerCase();
                    return (X === "input" || X === "button") && F.type === R
                }
            }

            function Is(R) {
                return function(F) {
                    return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === R : F.disabled === R : F.isDisabled === R || F.isDisabled !== !R && qo(F) === R : F.disabled === R : "label" in F ? F.disabled === R : !1
                }
            }

            function An(R) {
                return dn(function(F) {
                    return F = +F, dn(function(X, de) {
                        for (var ee, ve = R([], X.length, F), Ee = ve.length; Ee--;) X[ee = ve[Ee]] && (X[ee] = !(de[ee] = X[ee]))
                    })
                })
            }

            function Ur(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            u = St.support = {}, x = St.isXML = function(R) {
                var F = R && R.namespaceURI,
                    X = R && (R.ownerDocument || R).documentElement;
                return !zo.test(F || X && X.nodeName || "HTML")
            }, ie = St.setDocument = function(R) {
                var F, X, de = R ? R.ownerDocument || R : et;
                return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ue = ce.documentElement, rt = !x(ce), et != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Rs, !1) : X.attachEvent && X.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                    return Ue.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ee) {
                    return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = ki.test(ce.getElementsByClassName), u.getById = yn(function(ee) {
                    return Ue.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var ve = ee.replace(Tn, xn);
                    return function(Ee) {
                        return Ee.getAttribute("id") === ve
                    }
                }, p.find.ID = function(ee, ve) {
                    if (typeof ve.getElementById < "u" && rt) {
                        var Ee = ve.getElementById(ee);
                        return Ee ? [Ee] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var ve = ee.replace(Tn, xn);
                    return function(Ee) {
                        var Re = typeof Ee.getAttributeNode < "u" && Ee.getAttributeNode("id");
                        return Re && Re.value === ve
                    }
                }, p.find.ID = function(ee, ve) {
                    if (typeof ve.getElementById < "u" && rt) {
                        var Ee, Re, Me, ze = ve.getElementById(ee);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze];
                            for (Me = ve.getElementsByName(ee), Re = 0; ze = Me[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ee);
                    if (u.qsa) return ve.querySelectorAll(ee)
                } : function(ee, ve) {
                    var Ee, Re = [],
                        Me = 0,
                        ze = ve.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ee = ze[Me++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(ee, ve) {
                    if (typeof ve.getElementsByClassName < "u" && rt) return ve.getElementsByClassName(ee)
                }, zt = [], je = [], (u.qsa = ki.test(ce.querySelectorAll)) && (yn(function(ee) {
                    var ve;
                    Ue.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Fr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), ve = ce.createElement("input"), ve.setAttribute("name", ""), ee.appendChild(ve), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), yn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ce.createElement("input");
                    ve.setAttribute("type", "hidden"), ee.appendChild(ve).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ue.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = ki.test(Nt = Ue.matches || Ue.webkitMatchesSelector || Ue.mozMatchesSelector || Ue.oMatchesSelector || Ue.msMatchesSelector)) && yn(function(ee) {
                    u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), zt = zt.length && new RegExp(zt.join("|")), F = ki.test(Ue.compareDocumentPosition), un = F || ki.test(Ue.contains) ? function(ee, ve) {
                    var Ee = ee.nodeType === 9 ? ee.documentElement : ee,
                        Re = ve && ve.parentNode;
                    return ee === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ee.compareDocumentPosition && ee.compareDocumentPosition(Re) & 16))
                } : function(ee, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ee) return !0
                    }
                    return !1
                }, Kn = F ? function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee = !ee.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ee.ownerDocument || ee) == (ve.ownerDocument || ve) ? ee.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ee) === Ee ? ee == ce || ee.ownerDocument == et && un(et, ee) ? -1 : ve == ce || ve.ownerDocument == et && un(et, ve) ? 1 : le ? Qn(le, ee) - Qn(le, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Me = ee.parentNode,
                        ze = ve.parentNode,
                        Ge = [ee],
                        Xe = [ve];
                    if (!Me || !ze) return ee == ce ? -1 : ve == ce ? 1 : Me ? -1 : ze ? 1 : le ? Qn(le, ee) - Qn(le, ve) : 0;
                    if (Me === ze) return Ji(ee, ve);
                    for (Ee = ee; Ee = Ee.parentNode;) Ge.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Xe.unshift(Ee);
                    for (; Ge[Re] === Xe[Re];) Re++;
                    return Re ? Ji(Ge[Re], Xe[Re]) : Ge[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ce
            }, St.matches = function(R, F) {
                return St(R, null, null, F)
            }, St.matchesSelector = function(R, F) {
                if (ie(R), u.matchesSelector && rt && !hn[F + " "] && (!zt || !zt.test(F)) && (!je || !je.test(F))) try {
                    var X = Nt.call(R, F);
                    if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                } catch {
                    hn(F, !0)
                }
                return St(F, ce, null, [R]).length > 0
            }, St.contains = function(R, F) {
                return (R.ownerDocument || R) != ce && ie(R), un(R, F)
            }, St.attr = function(R, F) {
                (R.ownerDocument || R) != ce && ie(R);
                var X = p.attrHandle[F.toLowerCase()],
                    de = X && Jn.call(p.attrHandle, F.toLowerCase()) ? X(R, F, !rt) : void 0;
                return de !== void 0 ? de : u.attributes || !rt ? R.getAttribute(F) : (de = R.getAttributeNode(F)) && de.specified ? de.value : null
            }, St.escape = function(R) {
                return (R + "").replace(Gr, Os)
            }, St.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, St.uniqueSort = function(R) {
                var F, X = [],
                    de = 0,
                    ee = 0;
                if (Ce = !u.detectDuplicates, le = !u.sortStable && R.slice(0), R.sort(Kn), Ce) {
                    for (; F = R[ee++];) F === R[ee] && (de = X.push(ee));
                    for (; de--;) R.splice(X[de], 1)
                }
                return le = null, R
            }, w = St.getText = function(R) {
                var F, X = "",
                    de = 0,
                    ee = R.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof R.textContent == "string") return R.textContent;
                        for (R = R.firstChild; R; R = R.nextSibling) X += w(R)
                    } else if (ee === 3 || ee === 4) return R.nodeValue
                } else
                    for (; F = R[de++];) X += w(F);
                return X
            }, p = St.selectors = {
                cacheLength: 50,
                createPseudo: dn,
                match: Xi,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(R) {
                        return R[1] = R[1].replace(Tn, xn), R[3] = (R[3] || R[4] || R[5] || "").replace(Tn, xn), R[2] === "~=" && (R[3] = " " + R[3] + " "), R.slice(0, 4)
                    },
                    CHILD: function(R) {
                        return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || St.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && St.error(R[0]), R
                    },
                    PSEUDO: function(R) {
                        var F, X = !R[6] && R[2];
                        return Xi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && jo.test(X) && (F = T(X, !0)) && (F = X.indexOf(")", X.length - F) - X.length) && (R[0] = R[0].slice(0, F), R[2] = X.slice(0, F)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var F = R.replace(Tn, xn).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === F
                        }
                    },
                    CLASS: function(R) {
                        var F = Dt[R + " "];
                        return F || (F = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Dt(R, function(X) {
                            return F.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, F, X) {
                        return function(de) {
                            var ee = St.attr(de, R);
                            return ee == null ? F === "!=" : F ? (ee += "", F === "=" ? ee === X : F === "!=" ? ee !== X : F === "^=" ? X && ee.indexOf(X) === 0 : F === "*=" ? X && ee.indexOf(X) > -1 : F === "$=" ? X && ee.slice(-X.length) === X : F === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(X) > -1 : F === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, F, X, de, ee) {
                        var ve = R.slice(0, 3) !== "nth",
                            Ee = R.slice(-4) !== "last",
                            Re = F === "of-type";
                        return de === 1 && ee === 0 ? function(Me) {
                            return !!Me.parentNode
                        } : function(Me, ze, Ge) {
                            var Xe, ht, At, We, Ht, Qt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                Ot = Me.parentNode,
                                c = Re && Me.nodeName.toLowerCase(),
                                h = !Ge && !Re,
                                b = !1;
                            if (Ot) {
                                if (ve) {
                                    for (; fn;) {
                                        for (We = Me; We = We[fn];)
                                            if (Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) return !1;
                                        Qt = fn = R === "only" && !Qt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Qt = [Ee ? Ot.firstChild : Ot.lastChild], Ee && h) {
                                    for (We = Ot, At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Xe = ht[R] || [], Ht = Xe[0] === on && Xe[1], b = Ht && Xe[2], We = Ht && Ot.childNodes[Ht]; We = ++Ht && We && We[fn] || (b = Ht = 0) || Qt.pop();)
                                        if (We.nodeType === 1 && ++b && We === Me) {
                                            ht[R] = [on, Ht, b];
                                            break
                                        }
                                } else if (h && (We = Me, At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Xe = ht[R] || [], Ht = Xe[0] === on && Xe[1], b = Ht), b === !1)
                                    for (;
                                        (We = ++Ht && We && We[fn] || (b = Ht = 0) || Qt.pop()) && !((Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) && ++b && (h && (At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), ht[R] = [on, b]), We === Me)););
                                return b -= ee, b === de || b % de === 0 && b / de >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, F) {
                        var X, de = p.pseudos[R] || p.setFilters[R.toLowerCase()] || St.error("unsupported pseudo: " + R);
                        return de[_t] ? de(F) : de.length > 1 ? (X = [R, R, "", F], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ee, ve) {
                            for (var Ee, Re = de(ee, F), Me = Re.length; Me--;) Ee = Qn(ee, Re[Me]), ee[Ee] = !(ve[Ee] = Re[Me])
                        }) : function(ee) {
                            return de(ee, 0, X)
                        }) : de
                    }
                },
                pseudos: {
                    not: dn(function(R) {
                        var F = [],
                            X = [],
                            de = z(R.replace(Si, "$1"));
                        return de[_t] ? dn(function(ee, ve, Ee, Re) {
                            for (var Me, ze = de(ee, null, Re, []), Ge = ee.length; Ge--;)(Me = ze[Ge]) && (ee[Ge] = !(ve[Ge] = Me))
                        }) : function(ee, ve, Ee) {
                            return F[0] = ee, de(F, null, Ee, X), F[0] = null, !X.pop()
                        }
                    }),
                    has: dn(function(R) {
                        return function(F) {
                            return St(R, F).length > 0
                        }
                    }),
                    contains: dn(function(R) {
                        return R = R.replace(Tn, xn),
                            function(F) {
                                return (F.textContent || w(F)).indexOf(R) > -1
                            }
                    }),
                    lang: dn(function(R) {
                        return Fo.test(R || "") || St.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                            function(F) {
                                var X;
                                do
                                    if (X = rt ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return X = X.toLowerCase(), X === R || X.indexOf(R + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(R) {
                        var F = r.location && r.location.hash;
                        return F && F.slice(1) === R.id
                    },
                    root: function(R) {
                        return R === Ue
                    },
                    focus: function(R) {
                        return R === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                    },
                    enabled: Is(!1),
                    disabled: Is(!0),
                    checked: function(R) {
                        var F = R.nodeName.toLowerCase();
                        return F === "input" && !!R.checked || F === "option" && !!R.selected
                    },
                    selected: function(R) {
                        return R.parentNode && R.parentNode.selectedIndex, R.selected === !0
                    },
                    empty: function(R) {
                        for (R = R.firstChild; R; R = R.nextSibling)
                            if (R.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(R) {
                        return !p.pseudos.empty(R)
                    },
                    header: function(R) {
                        return Go.test(R.nodeName)
                    },
                    input: function(R) {
                        return Ho.test(R.nodeName)
                    },
                    button: function(R) {
                        var F = R.nodeName.toLowerCase();
                        return F === "input" && R.type === "button" || F === "button"
                    },
                    text: function(R) {
                        var F;
                        return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((F = R.getAttribute("type")) == null || F.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(R, F) {
                        return [F - 1]
                    }),
                    eq: An(function(R, F, X) {
                        return [X < 0 ? X + F : X]
                    }),
                    even: An(function(R, F) {
                        for (var X = 0; X < F; X += 2) R.push(X);
                        return R
                    }),
                    odd: An(function(R, F) {
                        for (var X = 1; X < F; X += 2) R.push(X);
                        return R
                    }),
                    lt: An(function(R, F, X) {
                        for (var de = X < 0 ? X + F : X > F ? F : X; --de >= 0;) R.push(de);
                        return R
                    }),
                    gt: An(function(R, F, X) {
                        for (var de = X < 0 ? X + F : X; ++de < F;) R.push(de);
                        return R
                    })
                }
            }, p.pseudos.nth = p.pseudos.eq;
            for (s in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) p.pseudos[s] = Wo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Xo(s);

            function Ds() {}
            Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = St.tokenize = function(R, F) {
                var X, de, ee, ve, Ee, Re, Me, ze = _i[R + " "];
                if (ze) return F ? 0 : ze.slice(0);
                for (Ee = R, Re = [], Me = p.preFilter; Ee;) {
                    (!X || (de = Ts.exec(Ee))) && (de && (Ee = Ee.slice(de[0].length) || Ee), Re.push(ee = [])), X = !1, (de = As.exec(Ee)) && (X = de.shift(), ee.push({
                        value: X,
                        type: de[0].replace(Si, " ")
                    }), Ee = Ee.slice(X.length));
                    for (ve in p.filter)(de = Xi[ve].exec(Ee)) && (!Me[ve] || (de = Me[ve](de))) && (X = de.shift(), ee.push({
                        value: X,
                        type: ve,
                        matches: de
                    }), Ee = Ee.slice(X.length));
                    if (!X) break
                }
                return F ? Ee.length : Ee ? St.error(R) : _i(R, Re).slice(0)
            };

            function Qi(R) {
                for (var F = 0, X = R.length, de = ""; F < X; F++) de += R[F].value;
                return de
            }

            function Zi(R, F, X) {
                var de = F.dir,
                    ee = F.next,
                    ve = ee || de,
                    Ee = X && ve === "parentNode",
                    Re = ft++;
                return F.first ? function(Me, ze, Ge) {
                    for (; Me = Me[de];)
                        if (Me.nodeType === 1 || Ee) return R(Me, ze, Ge);
                    return !1
                } : function(Me, ze, Ge) {
                    var Xe, ht, At, We = [on, Re];
                    if (Ge) {
                        for (; Me = Me[de];)
                            if ((Me.nodeType === 1 || Ee) && R(Me, ze, Ge)) return !0
                    } else
                        for (; Me = Me[de];)
                            if (Me.nodeType === 1 || Ee)
                                if (At = Me[_t] || (Me[_t] = {}), ht = At[Me.uniqueID] || (At[Me.uniqueID] = {}), ee && ee === Me.nodeName.toLowerCase()) Me = Me[de] || Me;
                                else {
                                    if ((Xe = ht[ve]) && Xe[0] === on && Xe[1] === Re) return We[2] = Xe[2];
                                    if (ht[ve] = We, We[2] = R(Me, ze, Ge)) return !0
                                } return !1
                }
            }

            function er(R) {
                return R.length > 1 ? function(F, X, de) {
                    for (var ee = R.length; ee--;)
                        if (!R[ee](F, X, de)) return !1;
                    return !0
                } : R[0]
            }

            function Yo(R, F, X) {
                for (var de = 0, ee = F.length; de < ee; de++) St(R, F[de], X);
                return X
            }

            function tr(R, F, X, de, ee) {
                for (var ve, Ee = [], Re = 0, Me = R.length, ze = F != null; Re < Me; Re++)(ve = R[Re]) && (!X || X(ve, de, ee)) && (Ee.push(ve), ze && F.push(Re));
                return Ee
            }

            function qr(R, F, X, de, ee, ve) {
                return de && !de[_t] && (de = qr(de)), ee && !ee[_t] && (ee = qr(ee, ve)), dn(function(Ee, Re, Me, ze) {
                    var Ge, Xe, ht, At = [],
                        We = [],
                        Ht = Re.length,
                        Qt = Ee || Yo(F || "*", Me.nodeType ? [Me] : Me, []),
                        fn = R && (Ee || !F) ? tr(Qt, At, R, Me, ze) : Qt,
                        Ot = X ? ee || (Ee ? R : Ht || de) ? [] : Re : fn;
                    if (X && X(fn, Ot, Me, ze), de)
                        for (Ge = tr(Ot, We), de(Ge, [], Me, ze), Xe = Ge.length; Xe--;)(ht = Ge[Xe]) && (Ot[We[Xe]] = !(fn[We[Xe]] = ht));
                    if (Ee) {
                        if (ee || R) {
                            if (ee) {
                                for (Ge = [], Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && Ge.push(fn[Xe] = ht);
                                ee(null, Ot = [], Ge, ze)
                            }
                            for (Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && (Ge = ee ? Qn(Ee, ht) : At[Xe]) > -1 && (Ee[Ge] = !(Re[Ge] = ht))
                        }
                    } else Ot = tr(Ot === Re ? Ot.splice(Ht, Ot.length) : Ot), ee ? ee(null, Re, Ot, ze) : Cn.apply(Re, Ot)
                })
            }

            function Wr(R) {
                for (var F, X, de, ee = R.length, ve = p.relative[R[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Me = Zi(function(Xe) {
                        return Xe === F
                    }, Ee, !0), ze = Zi(function(Xe) {
                        return Qn(F, Xe) > -1
                    }, Ee, !0), Ge = [function(Xe, ht, At) {
                        var We = !ve && (At || ht !== Z) || ((F = ht).nodeType ? Me(Xe, ht, At) : ze(Xe, ht, At));
                        return F = null, We
                    }]; Re < ee; Re++)
                    if (X = p.relative[R[Re].type]) Ge = [Zi(er(Ge), X)];
                    else {
                        if (X = p.filter[R[Re].type].apply(null, R[Re].matches), X[_t]) {
                            for (de = ++Re; de < ee && !p.relative[R[de].type]; de++);
                            return qr(Re > 1 && er(Ge), Re > 1 && Qi(R.slice(0, Re - 1).concat({
                                value: R[Re - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), X, Re < de && Wr(R.slice(Re, de)), de < ee && Wr(R = R.slice(de)), de < ee && Qi(R))
                        }
                        Ge.push(X)
                    } return er(Ge)
            }

            function Ls(R, F) {
                var X = F.length > 0,
                    de = R.length > 0,
                    ee = function(ve, Ee, Re, Me, ze) {
                        var Ge, Xe, ht, At = 0,
                            We = "0",
                            Ht = ve && [],
                            Qt = [],
                            fn = Z,
                            Ot = ve || de && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (ze && (Z = Ee == ce || Ee || ze); We !== h && (Ge = Ot[We]) != null; We++) {
                            if (de && Ge) {
                                for (Xe = 0, !Ee && Ge.ownerDocument != ce && (ie(Ge), Re = !rt); ht = R[Xe++];)
                                    if (ht(Ge, Ee || ce, Re)) {
                                        Me.push(Ge);
                                        break
                                    } ze && (on = c)
                            }
                            X && ((Ge = !ht && Ge) && At--, ve && Ht.push(Ge))
                        }
                        if (At += We, X && We !== At) {
                            for (Xe = 0; ht = F[Xe++];) ht(Ht, Qt, Ee, Re);
                            if (ve) {
                                if (At > 0)
                                    for (; We--;) Ht[We] || Qt[We] || (Qt[We] = Ln.call(Me));
                                Qt = tr(Qt)
                            }
                            Cn.apply(Me, Qt), ze && !ve && Qt.length > 0 && At + F.length > 1 && St.uniqueSort(Me)
                        }
                        return ze && (on = c, Z = fn), Ht
                    };
                return X ? dn(ee) : ee
            }
            return z = St.compile = function(R, F) {
                var X, de = [],
                    ee = [],
                    ve = Wi[R + " "];
                if (!ve) {
                    for (F || (F = T(R)), X = F.length; X--;) ve = Wr(F[X]), ve[_t] ? de.push(ve) : ee.push(ve);
                    ve = Wi(R, Ls(ee, de)), ve.selector = R
                }
                return ve
            }, H = St.select = function(R, F, X, de) {
                var ee, ve, Ee, Re, Me, ze = typeof R == "function" && R,
                    Ge = !de && T(R = ze.selector || R);
                if (X = X || [], Ge.length === 1) {
                    if (ve = Ge[0] = Ge[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && F.nodeType === 9 && rt && p.relative[ve[1].type]) {
                        if (F = (p.find.ID(Ee.matches[0].replace(Tn, xn), F) || [])[0], F) ze && (F = F.parentNode);
                        else return X;
                        R = R.slice(ve.shift().value.length)
                    }
                    for (ee = Xi.needsContext.test(R) ? 0 : ve.length; ee-- && (Ee = ve[ee], !p.relative[Re = Ee.type]);)
                        if ((Me = p.find[Re]) && (de = Me(Ee.matches[0].replace(Tn, xn), Hr.test(ve[0].type) && Ur(F.parentNode) || F))) {
                            if (ve.splice(ee, 1), R = de.length && Qi(ve), !R) return Cn.apply(X, de), X;
                            break
                        }
                }
                return (ze || z(R, Ge))(de, F, !rt, X, !F || Hr.test(R) && Ur(F.parentNode) || F), X
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!Ce, ie(), u.sortDetached = yn(function(R) {
                return R.compareDocumentPosition(ce.createElement("fieldset")) & 1
            }), yn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(R, F, X) {
                if (!X) return R.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(R, F, X) {
                if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), yn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ki(Fr, function(R, F, X) {
                var de;
                if (!X) return R[F] === !0 ? F.toLowerCase() : (de = R.getAttributeNode(F)) && de.specified ? de.value : null
            }), St
        }(e);
        d.find = Oe, d.expr = Oe.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Oe.uniqueSort, d.text = Oe.getText, d.isXMLDoc = Oe.isXML, d.contains = Oe.contains, d.escapeSelector = Oe.escape;
        var Pe = function(r, s, u) {
                for (var p = [], w = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (w && d(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            Be = d.expr.match.needsContext;

        function J(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function G(r, s, u) {
            return re(s) ? d.grep(r, function(p, w) {
                return !!s.call(p, w, p) !== u
            }) : s.nodeType ? d.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? d.grep(r, function(p) {
                return k.call(s, p) > -1 !== u
            }) : d.filter(s, r, u)
        }
        d.filter = function(r, s, u) {
            var p = s[0];
            return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? d.find.matchesSelector(p, r) ? [p] : [] : d.find.matches(r, d.grep(s, function(w) {
                return w.nodeType === 1
            }))
        }, d.fn.extend({
            find: function(r) {
                var s, u, p = this.length,
                    w = this;
                if (typeof r != "string") return this.pushStack(d(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (d.contains(w[s], this)) return !0
                }));
                for (u = this.pushStack([]), s = 0; s < p; s++) d.find(r, w[s], u);
                return p > 1 ? d.uniqueSort(u) : u
            },
            filter: function(r) {
                return this.pushStack(G(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(G(this, r || [], !0))
            },
            is: function(r) {
                return !!G(this, typeof r == "string" && Be.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : N, !0)), Fe.test(p[1]) && d.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = N.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                }
                return d.makeArray(r, this)
            };
        be.prototype = d.fn, oe = d(N);
        var we = /^(?:parents|prev(?:Until|All))/,
            ue = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        d.fn.extend({
            has: function(r) {
                var s = d(r, this),
                    u = s.length;
                return this.filter(function() {
                    for (var p = 0; p < u; p++)
                        if (d.contains(this, s[p])) return !0
                })
            },
            closest: function(r, s) {
                var u, p = 0,
                    w = this.length,
                    x = [],
                    T = typeof r != "string" && d(r);
                if (!Be.test(r)) {
                    for (; p < w; p++)
                        for (u = this[p]; u && u !== s; u = u.parentNode)
                            if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && d.find.matchesSelector(u, r))) {
                                x.push(u);
                                break
                            }
                }
                return this.pushStack(x.length > 1 ? d.uniqueSort(x) : x)
            },
            index: function(r) {
                return r ? typeof r == "string" ? k.call(d(r), this[0]) : k.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(r, s) {
                return this.pushStack(d.uniqueSort(d.merge(this.get(), d(r, s))))
            },
            addBack: function(r) {
                return this.add(r == null ? this.prevObject : this.prevObject.filter(r))
            }
        });

        function Se(r, s) {
            for (;
                (r = r[s]) && r.nodeType !== 1;);
            return r
        }
        d.each({
            parent: function(r) {
                var s = r.parentNode;
                return s && s.nodeType !== 11 ? s : null
            },
            parents: function(r) {
                return Pe(r, "parentNode")
            },
            parentsUntil: function(r, s, u) {
                return Pe(r, "parentNode", u)
            },
            next: function(r) {
                return Se(r, "nextSibling")
            },
            prev: function(r) {
                return Se(r, "previousSibling")
            },
            nextAll: function(r) {
                return Pe(r, "nextSibling")
            },
            prevAll: function(r) {
                return Pe(r, "previousSibling")
            },
            nextUntil: function(r, s, u) {
                return Pe(r, "nextSibling", u)
            },
            prevUntil: function(r, s, u) {
                return Pe(r, "previousSibling", u)
            },
            siblings: function(r) {
                return lt((r.parentNode || {}).firstChild, r)
            },
            children: function(r) {
                return lt(r.firstChild)
            },
            contents: function(r) {
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (J(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var w = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (ue[r] || d.uniqueSort(w), we.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function $e(r) {
            var s = {};
            return d.each(r.match(Te) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        d.Callbacks = function(r) {
            r = typeof r == "string" ? $e(r) : d.extend({}, r);
            var s, u, p, w, x = [],
                T = [],
                z = -1,
                H = function() {
                    for (w = w || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                },
                Z = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function le(Ce) {
                            d.each(Ce, function(ie, ce) {
                                re(ce) ? (!r.unique || !Z.has(ce)) && x.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                            })
                        }(arguments), u && !s && H()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(le, Ce) {
                            for (var ie;
                                (ie = d.inArray(Ce, x, ie)) > -1;) x.splice(ie, 1), ie <= z && z--
                        }), this
                    },
                    has: function(le) {
                        return le ? d.inArray(le, x) > -1 : x.length > 0
                    },
                    empty: function() {
                        return x && (x = []), this
                    },
                    disable: function() {
                        return w = T = [], x = u = "", this
                    },
                    disabled: function() {
                        return !x
                    },
                    lock: function() {
                        return w = T = [], !u && !s && (x = u = ""), this
                    },
                    locked: function() {
                        return !!w
                    },
                    fireWith: function(le, Ce) {
                        return w || (Ce = Ce || [], Ce = [le, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || H()), this
                    },
                    fire: function() {
                        return Z.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return Z
        };

        function Ke(r) {
            return r
        }

        function dt(r) {
            throw r
        }

        function Bt(r, s, u, p) {
            var w;
            try {
                r && re(w = r.promise) ? w.call(r).done(s).fail(u) : r && re(w = r.then) ? w.call(r, s, u) : s.apply(void 0, [r].slice(p))
            } catch (x) {
                u.apply(void 0, [x])
            }
        }
        d.extend({
            Deferred: function(r) {
                var s = [
                        ["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2],
                        ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]
                    ],
                    u = "pending",
                    p = {
                        state: function() {
                            return u
                        },
                        always: function() {
                            return w.done(arguments).fail(arguments), this
                        },
                        catch: function(x) {
                            return p.then(null, x)
                        },
                        pipe: function() {
                            var x = arguments;
                            return d.Deferred(function(T) {
                                d.each(s, function(z, H) {
                                    var Z = re(x[H[4]]) && x[H[4]];
                                    w[H[1]](function() {
                                        var le = Z && Z.apply(this, arguments);
                                        le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[H[0] + "With"](this, Z ? [le] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var H = 0;

                            function Z(le, Ce, ie, ce) {
                                return function() {
                                    var Ue = this,
                                        rt = arguments,
                                        je = function() {
                                            var Nt, un;
                                            if (!(le < H)) {
                                                if (Nt = ie.apply(Ue, rt), Nt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(un) ? ce ? un.call(Nt, Z(H, Ce, Ke, ce), Z(H, Ce, dt, ce)) : (H++, un.call(Nt, Z(H, Ce, Ke, ce), Z(H, Ce, dt, ce), Z(H, Ce, Ke, Ce.notifyWith))) : (ie !== Ke && (Ue = void 0, rt = [Nt]), (ce || Ce.resolveWith)(Ue, rt))
                                            }
                                        },
                                        zt = ce ? je : function() {
                                            try {
                                                je()
                                            } catch (Nt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= H && (ie !== dt && (Ue = void 0, rt = [Nt]), Ce.rejectWith(Ue, rt))
                                            }
                                        };
                                    le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(le) {
                                s[0][3].add(Z(0, le, re(z) ? z : Ke, le.notifyWith)), s[1][3].add(Z(0, le, re(x) ? x : Ke)), s[2][3].add(Z(0, le, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? d.extend(x, p) : p
                        }
                    },
                    w = {};
                return d.each(s, function(x, T) {
                    var z = T[2],
                        H = T[5];
                    p[T[1]] = z.add, H && z.add(function() {
                        u = H
                    }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), w[T[0]] = function() {
                        return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                    }, w[T[0] + "With"] = z.fireWith
                }), p.promise(w), r && r.call(w, w), w
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    w = f.call(arguments),
                    x = d.Deferred(),
                    T = function(z) {
                        return function(H) {
                            p[z] = this, w[z] = arguments.length > 1 ? f.call(arguments) : H, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Bt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                for (; u--;) Bt(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var qt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && qt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
        }, d.readyException = function(r) {
            e.setTimeout(function() {
                throw r
            })
        };
        var E = d.Deferred();
        d.fn.ready = function(r) {
            return E.then(r).catch(function(s) {
                d.readyException(s)
            }), this
        }, d.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(r) {
                (r === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0, !(r !== !0 && --d.readyWait > 0) && E.resolveWith(N, [d]))
            }
        }), d.ready.then = E.then;

        function l() {
            N.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), d.ready()
        }
        N.readyState === "complete" || N.readyState !== "loading" && !N.documentElement.doScroll ? e.setTimeout(d.ready) : (N.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, w, x, T) {
                var z = 0,
                    H = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, Ce, ie) {
                        return Z.call(d(le), ie)
                    })), s))
                    for (; z < H; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : Z ? s.call(r) : H ? s(r[0], u) : x
            },
            S = /^-ms-/,
            O = /-([a-z])/g;

        function P(r, s) {
            return s.toUpperCase()
        }

        function B(r) {
            return r.replace(S, "ms-").replace(O, P)
        }
        var te = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function ke() {
            this.expando = d.expando + ke.uid++
        }
        ke.uid = 1, ke.prototype = {
            cache: function(r) {
                var s = r[this.expando];
                return s || (s = {}, te(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
                    value: s,
                    configurable: !0
                }))), s
            },
            set: function(r, s, u) {
                var p, w = this.cache(r);
                if (typeof s == "string") w[B(s)] = u;
                else
                    for (p in s) w[B(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][B(s)]
            },
            access: function(r, s, u) {
                return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
            },
            remove: function(r, s) {
                var u, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map(B) : (s = B(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !d.isEmptyObject(s)
            }
        };
        var he = new ke,
            De = new ke,
            Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            nt = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Le.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(nt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = Ct(u)
                    } catch {}
                    De.set(r, s, u)
                } else u = void 0;
            return u
        }
        d.extend({
            hasData: function(r) {
                return De.hasData(r) || he.hasData(r)
            },
            data: function(r, s, u) {
                return De.access(r, s, u)
            },
            removeData: function(r, s) {
                De.remove(r, s)
            },
            _data: function(r, s, u) {
                return he.access(r, s, u)
            },
            _removeData: function(r, s) {
                he.remove(r, s)
            }
        }), d.fn.extend({
            data: function(r, s) {
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(x, p, w[p])));
                        he.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    De.set(this, r)
                }) : g(this, function(z) {
                    var H;
                    if (x && z === void 0) return H = De.get(x, r), H !== void 0 || (H = rn(x, r), H !== void 0) ? H : void 0;
                    this.each(function() {
                        De.set(this, r, z)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    De.remove(this, r)
                })
            }
        }), d.extend({
            queue: function(r, s, u) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = he.get(r, s), u && (!p || Array.isArray(u) ? p = he.access(r, s, d.makeArray(u)) : p.push(u)), p || []
            },
            dequeue: function(r, s) {
                s = s || "fx";
                var u = d.queue(r, s),
                    p = u.length,
                    w = u.shift(),
                    x = d._queueHooks(r, s),
                    T = function() {
                        d.dequeue(r, s)
                    };
                w === "inprogress" && (w = u.shift(), p--), w && (s === "fx" && u.unshift("inprogress"), delete x.stop, w.call(r, T, x)), !p && x && x.empty.fire()
            },
            _queueHooks: function(r, s) {
                var u = s + "queueHooks";
                return he.get(r, u) || he.access(r, u, {
                    empty: d.Callbacks("once memory").add(function() {
                        he.remove(r, [s + "queue", u])
                    })
                })
            }
        }), d.fn.extend({
            queue: function(r, s) {
                var u = 2;
                return typeof r != "string" && (s = r, r = "fx", u--), arguments.length < u ? d.queue(this[0], r) : s === void 0 ? this : this.each(function() {
                    var p = d.queue(this, r, s);
                    d._queueHooks(this, r), r === "fx" && p[0] !== "inprogress" && d.dequeue(this, r)
                })
            },
            dequeue: function(r) {
                return this.each(function() {
                    d.dequeue(this, r)
                })
            },
            clearQueue: function(r) {
                return this.queue(r || "fx", [])
            },
            promise: function(r, s) {
                var u, p = 1,
                    w = d.Deferred(),
                    x = this,
                    T = this.length,
                    z = function() {
                        --p || w.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                return z(), w.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            bt = ["Top", "Right", "Bottom", "Left"],
            Jt = N.documentElement,
            Je = function(r) {
                return d.contains(r.ownerDocument, r)
            },
            Mt = {
                composed: !0
            };
        Jt.getRootNode && (Je = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Mt) === r.ownerDocument
        });
        var j = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
        };

        function V(r, s, u, p) {
            var w, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                H = z(),
                Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +H) && yt.exec(d.css(r, s));
            if (le && le[3] !== Z) {
                for (H = H / 2, Z = Z || le[3], le = +H || 1; T--;) d.style(r, s, le + Z), (1 - x) * (1 - (x = z() / H || .5)) <= 0 && (T = 0), le = le / x;
                le = le * 2, d.style(r, s, le + Z), u = u || []
            }
            return u && (le = +le || +H || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
        }
        var W = {};

        function L(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = W[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), W[p] = w, w)
        }

        function U(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && j(p) && (w[x] = L(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
            return r
        }
        d.fn.extend({
            show: function() {
                return U(this, !0)
            },
            hide: function() {
                return U(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    j(this) ? d(this).show() : d(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = N.createDocumentFragment(),
                s = r.appendChild(N.createElement("div")),
                u = N.createElement("input");
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), K.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", K.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, K.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && J(r, s) ? d.merge([r], u) : u
        }

        function jt(r, s) {
            for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, z, H, Z, le, Ce = s.createDocumentFragment(), ie = [], ce = 0, Ue = r.length; ce < Ue; ce++)
                if (x = r[ce], x || x === 0)
                    if (se(x) === "object") d.merge(ie, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) ie.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(x) || ["", ""])[1].toLowerCase(), H = Ve[z] || Ve._default, T.innerHTML = H[1] + d.htmlPrefilter(x) + H[2], le = H[0]; le--;) T = T.lastChild;
                d.merge(ie, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ce = 0; x = ie[ce++];) {
                if (p && d.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (Z = Je(x), T = pt(Ce.appendChild(x), "script"), Z && jt(T), u)
                    for (le = 0; x = T[le++];) Ne.test(x.type || "") && u.push(x)
            }
            return Ce
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function it() {
            return !0
        }

        function Dn() {
            return !1
        }

        function gi(r, s) {
            return r === Sr() == (s === "focus")
        }

        function Sr() {
            try {
                return N.activeElement
            } catch {}
        }

        function kn(r, s, u, p, w, x) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) kn(r, z, u, p, s[z], x);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(H) {
                return d().off(H), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, w, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, Ce, ie, ce, Ue, rt, je = he.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Jt, w), u.guid || (u.guid = d.guid++), (H = je.events) || (H = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ce = rt = z[1], Ue = (z[2] || "").split(".").sort(), ce && (Ce = d.event.special[ce] || {}, ce = (w ? Ce.delegateType : Ce.bindType) || ce, Ce = d.event.special[ce] || {}, le = d.extend({
                        type: ce,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: Ue.join(".")
                    }, x), (ie = H[ce]) || (ie = H[ce] = [], ie.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, Ue, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), Ce.add && (Ce.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ie.splice(ie.delegateCount++, 0, le) : ie.push(le), d.event.global[ce] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, Ce, ie, ce, Ue, rt, je = he.hasData(r) && he.get(r);
                if (!(!je || !(H = je.events))) {
                    for (s = (s || "").match(Te) || [""], Z = s.length; Z--;) {
                        if (z = Pn.exec(s[Z]) || [], ce = rt = z[1], Ue = (z[2] || "").split(".").sort(), !ce) {
                            for (ce in H) d.event.remove(r, ce + s[Z], u, p, !0);
                            continue
                        }
                        for (Ce = d.event.special[ce] || {}, ce = (p ? Ce.delegateType : Ce.bindType) || ce, ie = H[ce] || [], z = z[2] && new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ie.length; x--;) le = ie[x], (w || rt === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ie.splice(x, 1), le.selector && ie.delegateCount--, Ce.remove && Ce.remove.call(r, le));
                        T && !ie.length && ((!Ce.teardown || Ce.teardown.call(r, Ue, je.handle) === !1) && d.removeEvent(r, ce, je.handle), delete H[ce])
                    }
                    d.isEmptyObject(H) && he.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    H = d.event.fix(r),
                    Z = (he.get(this, "events") || Object.create(null))[H.type] || [],
                    le = d.event.special[H.type] || {};
                for (z[0] = H, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (H.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, H) === !1)) {
                    for (T = d.event.handlers.call(this, H, Z), s = 0;
                        (w = T[s++]) && !H.isPropagationStopped();)
                        for (H.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !H.isImmediatePropagationStopped();)(!H.rnamespace || x.namespace === !1 || H.rnamespace.test(x.namespace)) && (H.handleObj = x, H.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (H.result = p) === !1 && (H.preventDefault(), H.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, H), H.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, z = [],
                    H = s.delegateCount,
                    Z = r.target;
                if (H && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < H; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && x.push(p);
                            x.length && z.push({
                                elem: Z,
                                handlers: x
                            })
                        }
                }
                return Z = this, H < s.length && z.push({
                    elem: Z,
                    handlers: s.slice(H)
                }), z
            },
            addProp: function(r, s) {
                Object.defineProperty(d.Event.prototype, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: re(s) ? function() {
                        if (this.originalEvent) return s(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[r]
                    },
                    set: function(u) {
                        Object.defineProperty(this, r, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: u
                        })
                    }
                })
            },
            fix: function(r) {
                return r[d.expando] ? r : new d.Event(r)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && J(s, "input") && sn(s, "click", it), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && J(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && J(s, "input") && he.get(s, "click") || J(s, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(r) {
                        r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result)
                    }
                }
            }
        };

        function sn(r, s, u) {
            if (!u) {
                he.get(r, s) === void 0 && d.event.add(r, s, it);
                return
            }
            he.set(r, s, !1), d.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var w, x, T = he.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = f.call(arguments), he.set(this, s, T), w = u(this, s), this[s](), x = he.get(this, s), T !== x || w ? he.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
                    } else T.length && (he.set(this, s, {
                        value: d.event.trigger(d.extend(T[0], d.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        d.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, d.Event = function(r, s) {
            if (!(this instanceof d.Event)) return new d.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? it : Dn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
        }, d.Event.prototype = {
            constructor: d.Event,
            isDefaultPrevented: Dn,
            isPropagationStopped: Dn,
            isImmediatePropagationStopped: Dn,
            isSimulated: !1,
            preventDefault: function() {
                var r = this.originalEvent;
                this.isDefaultPrevented = it, r && !this.isSimulated && r.preventDefault()
            },
            stopPropagation: function() {
                var r = this.originalEvent;
                this.isPropagationStopped = it, r && !this.isSimulated && r.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var r = this.originalEvent;
                this.isImmediatePropagationStopped = it, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
            }
        }, d.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, d.event.addProp), d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            d.event.special[r] = {
                setup: function() {
                    return sn(this, r, gi), !1
                },
                trigger: function() {
                    return sn(this, r), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: s
            }
        }), d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(r, s) {
            d.event.special[r] = {
                delegateType: s,
                bindType: s,
                handle: function(u) {
                    var p, w = this,
                        x = u.relatedTarget,
                        T = u.handleObj;
                    return (!x || x !== w && !d.contains(w, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
                }
            }
        }), d.fn.extend({
            on: function(r, s, u, p) {
                return kn(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return kn(this, r, s, u, p, 1)
            },
            off: function(r, s, u) {
                var p, w;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, d(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (w in r) this.off(w, s, r[w]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Dn), this.each(function() {
                    d.event.remove(this, r, u, s)
                })
            }
        });
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(r, s) {
            return J(r, "table") && J(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function vi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function yi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, w, x, T, z, H;
            if (s.nodeType === 1) {
                if (he.hasData(r) && (x = he.get(r), H = x.events, H)) {
                    he.remove(s, "handle events");
                    for (w in H)
                        for (u = 0, p = H[w].length; u < p; u++) d.event.add(s, w, H[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
            }
        }

        function Fi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = m(s);
            var w, x, T, z, H, Z, le = 0,
                Ce = r.length,
                ie = Ce - 1,
                ce = s[0],
                Ue = re(ce);
            if (Ue || Ce > 1 && typeof ce == "string" && !K.checkClone && Tr.test(ce)) return r.each(function(rt) {
                var je = r.eq(rt);
                Ue && (s[0] = ce.call(this, rt, je.html())), mn(je, s, u, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = d.map(pt(w, "script"), vi), z = T.length; le < Ce; le++) H = w, le !== ie && (H = d.clone(H, !0, !0), z && d.merge(T, pt(H, "script"))), u.call(r[le], H, le);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, d.map(T, yi), le = 0; le < z; le++) H = T[le], Ne.test(H.type || "") && !he.access(H, "globalEval") && d.contains(Z, H) && (H.src && (H.type || "").toLowerCase() !== "module" ? d._evalUrl && !H.noModule && d._evalUrl(H.src, {
                        nonce: H.nonce || H.getAttribute("nonce")
                    }, Z) : ae(H.textContent.replace(mi, ""), H, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && jt(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    H = Je(r);
                if (!K.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) Fi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, z);
                return T = pt(z, "script"), T.length > 0 && jt(T, !H && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = d.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (te(u)) {
                        if (s = u[he.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                            u[he.expando] = void 0
                        }
                        u[De.expando] && (u[De.expando] = void 0)
                    }
            }
        }), d.fn.extend({
            detach: function(r) {
                return zi(this, r, !0)
            },
            remove: function(r) {
                return zi(this, r)
            },
            text: function(r) {
                return g(this, function(s) {
                    return s === void 0 ? d.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s)
                    })
                }, null, r, arguments.length)
            },
            append: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = $i(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = $i(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            },
            before: function() {
                return mn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            },
            after: function() {
                return mn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
                })
            },
            empty: function() {
                for (var r, s = 0;
                    (r = this[s]) != null; s++) r.nodeType === 1 && (d.cleanData(pt(r, !1)), r.textContent = "");
                return this
            },
            clone: function(r, s) {
                return r = r == null ? !1 : r, s = s == null ? r : s, this.map(function() {
                    return d.clone(this, r, s)
                })
            },
            html: function(r) {
                return g(this, function(s) {
                    var u = this[0] || {},
                        p = 0,
                        w = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !kr.test(s) && !Ve[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = d.htmlPrefilter(s);
                        try {
                            for (; p < w; p++) u = this[p] || {}, u.nodeType === 1 && (d.cleanData(pt(u, !1)), u.innerHTML = s);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return mn(this, arguments, function(s) {
                    var u = this.parentNode;
                    d.inArray(this, r) < 0 && (d.cleanData(pt(this)), u && u.replaceChild(s, this))
                }, r)
            }
        }), d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(r, s) {
            d.fn[r] = function(u) {
                for (var p, w = [], x = d(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(x[z])[s](p), _.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var wi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Hn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Hi = function(r, s, u) {
                var p, w, x = {};
                for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                p = u.call(r);
                for (w in s) r.style[w] = x[w];
                return p
            },
            bi = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!Z) {
                    H.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(H).appendChild(Z);
                    var le = e.getComputedStyle(Z);
                    u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Jt.removeChild(H), Z = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, w, x, T, z, H = N.createElement("div"),
                Z = N.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = Z.style.backgroundClip === "content-box", d.extend(K, {
                boxSizingReliable: function() {
                    return r(), p
                },
                pixelBoxStyles: function() {
                    return r(), x
                },
                pixelPosition: function() {
                    return r(), u
                },
                reliableMarginLeft: function() {
                    return r(), z
                },
                scrollboxSize: function() {
                    return r(), w
                },
                reliableTrDimensions: function() {
                    var le, Ce, ie, ce;
                    return T == null && (le = N.createElement("table"), Ce = N.createElement("tr"), ie = N.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", ie.style.height = "9px", ie.style.display = "block", Jt.appendChild(le).appendChild(Ce).appendChild(ie), ce = e.getComputedStyle(Ce), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === Ce.offsetHeight, Jt.removeChild(le)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Hn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !K.pixelBoxStyles() && wi.test(T) && bi.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
        }

        function y(r, s) {
            return {
                get: function() {
                    if (r()) {
                        delete this.get;
                        return
                    }
                    return (this.get = s).apply(this, arguments)
                }
            }
        }
        var o = ["Webkit", "Moz", "ms"],
            C = N.createElement("div").style,
            A = {};

        function Q(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                if (r = o[u] + s, r in C) return r
        }

        function xe(r) {
            var s = d.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Q(r) || r)
        }
        var qe = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Gn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Nn(r, s, u) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Un(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                H = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (H += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (H -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (H -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (H += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? H += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (H += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - H - z - .5)) || 0), H
        }

        function Ar(r, s, u) {
            var p = Hn(r),
                w = !K.boxSizingReliable() || u,
                x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                H = "offset" + s[0].toUpperCase() + s.slice(1);
            if (wi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!K.boxSizingReliable() && x || !K.reliableTrDimensions() && J(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = H in r, T && (z = r[H])), z = parseFloat(z) || 0, z + Un(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(r, s) {
                        if (s) {
                            var u = Ze(r, "opacity");
                            return u === "" ? "1" : u
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(r, s, u, p) {
                if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
                    var w, x, T, z = B(s),
                        H = It.test(s),
                        Z = r.style;
                    if (H || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = V(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !H && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (H ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = B(s),
                    H = It.test(s);
                return H || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Gn && (w = Gn[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return qe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Hi(u, Xt, function() {
                        return Ar(u, s, w)
                    }) : Ar(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Hn(u),
                        z = !K.scrollboxSize() && T.position === "absolute",
                        H = z || w,
                        Z = H && d.css(u, "boxSizing", !1, T) === "border-box",
                        le = w ? Un(u, s, w, Z, T) : 0;
                    return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Un(u, s, "border", !1, T) - .5)), le && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, le)
                }
            }
        }), d.cssHooks.marginLeft = y(K.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Hi(r, {
                marginLeft: 0
            }, function() {
                return r.getBoundingClientRect().left
            })) + "px"
        }), d.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, s) {
            d.cssHooks[r + s] = {
                expand: function(u) {
                    for (var p = 0, w = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + bt[p] + s] = x[p] || x[p - 2] || x[0];
                    return w
                }
            }, r !== "margin" && (d.cssHooks[r + s].set = Nn)
        }), d.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, w) {
                    var x, T, z = {},
                        H = 0;
                    if (Array.isArray(p)) {
                        for (x = Hn(u), T = p.length; H < T; H++) z[p[H]] = d.css(u, p[H], !1, x);
                        return z
                    }
                    return w !== void 0 ? d.style(u, p, w) : d.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Yt(r, s, u, p, w) {
            return new Yt.prototype.init(r, s, u, p, w)
        }
        d.Tween = Yt, Yt.prototype = {
            constructor: Yt,
            init: function(r, s, u, p, w, x) {
                this.elem = r, this.prop = u, this.easing = w || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (d.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Yt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Yt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Yt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = d.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Yt.propHooks._default.set(this), this
            }
        }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = d.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    d.fx.step[r.prop] ? d.fx.step[r.prop](r) : r.elem.nodeType === 1 && (d.cssHooks[r.prop] || r.elem.style[xe(r.prop)] != null) ? d.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
            set: function(r) {
                r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now)
            }
        }, d.easing = {
            linear: function(r) {
                return r
            },
            swing: function(r) {
                return .5 - Math.cos(r * Math.PI) / 2
            },
            _default: "swing"
        }, d.fx = Yt.prototype.init, d.fx.step = {};
        var Ft, Gi, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Gi && (N.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                Ft = void 0
            }), Ft = Date.now()
        }

        function Ui(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = bt[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function gs(r, s, u) {
            for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(u, s, r)) return p
        }

        function xo(r, s, u) {
            var p, w, x, T, z, H, Z, le, Ce = "width" in s || "height" in s,
                ie = this,
                ce = {},
                Ue = r.style,
                rt = r.nodeType && j(r),
                je = he.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ie.always(function() {
                ie.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (rt ? "hide" : "show"))
                        if (w === "show" && je && je[p] !== void 0) rt = !0;
                        else continue;
                    ce[p] = je && je[p] || d.style(r, p)
                } if (H = !d.isEmptyObject(s), !(!H && d.isEmptyObject(ce))) {
                Ce && r.nodeType === 1 && (u.overflow = [Ue.overflow, Ue.overflowX, Ue.overflowY], Z = je && je.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (U([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), U([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (H || (ie.done(function() {
                    Ue.display = Z
                }), Z == null && (le = Ue.display, Z = le === "none" ? "" : le)), Ue.display = "inline-block")), u.overflow && (Ue.overflow = "hidden", ie.always(function() {
                    Ue.overflow = u.overflow[0], Ue.overflowX = u.overflow[1], Ue.overflowY = u.overflow[2]
                })), H = !1;
                for (p in ce) H || (je ? "hidden" in je && (rt = je.hidden) : je = he.access(r, "fxshow", {
                    display: Z
                }), x && (je.hidden = !rt), rt && U([r], !0), ie.done(function() {
                    rt || U([r]), he.remove(r, "fxshow");
                    for (p in ce) d.style(r, p, ce[p])
                })), H = gs(rt ? je[p] : 0, p, ie), p in je || (je[p] = H.start, rt && (H.end = H.start, H.start = 0))
            }
        }

        function ms(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = B(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = w)
                } else s[p] = w
        }

        function bn(r, s, u) {
            var p, w, x = 0,
                T = bn.prefilters.length,
                z = d.Deferred().always(function() {
                    delete H.elem
                }),
                H = function() {
                    if (w) return !1;
                    for (var Ce = Ft || Rr(), ie = Math.max(0, Z.startTime + Z.duration - Ce), ce = ie / Z.duration || 0, Ue = 1 - ce, rt = 0, je = Z.tweens.length; rt < je; rt++) Z.tweens[rt].run(Ue);
                    return z.notifyWith(r, [Z, Ue, ie]), Ue < 1 && je ? ie : (je || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
                },
                Z = z.promise({
                    elem: r,
                    props: d.extend({}, s),
                    opts: d.extend(!0, {
                        specialEasing: {},
                        easing: d.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: Ft || Rr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(Ce, ie) {
                        var ce = d.Tween(r, Z.opts, Ce, ie, Z.opts.specialEasing[Ce] || Z.opts.easing);
                        return Z.tweens.push(ce), ce
                    },
                    stop: function(Ce) {
                        var ie = 0,
                            ce = Ce ? Z.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; ie < ce; ie++) Z.tweens[ie].run(1);
                        return Ce ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, Ce])) : z.rejectWith(r, [Z, Ce]), this
                    }
                }),
                le = Z.props;
            for (ms(le, Z.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(le, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(H, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        d.Animation = d.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return V(u.elem, r, yt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                },
                prefilters: [xo],
                prefilter: function(r, s) {
                    s ? bn.prefilters.unshift(r) : bn.prefilters.push(r)
                }
            }), d.speed = function(r, s, u) {
                var p = r && typeof r == "object" ? d.extend({}, r) : {
                    complete: u || !u && s || re(r) && r,
                    duration: r,
                    easing: u && s || s && !re(s) && s
                };
                return d.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in d.fx.speeds ? p.duration = d.fx.speeds[p.duration] : p.duration = d.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    re(p.old) && p.old.call(this), p.queue && d.dequeue(this, p.queue)
                }, p
            }, d.fn.extend({
                fadeTo: function(r, s, u, p) {
                    return this.filter(j).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = d.isEmptyObject(r),
                        x = d.speed(s, u, p),
                        T = function() {
                            var z = bn(this, d.extend({}, r), x);
                            (w || he.get(this, "finish")) && z.stop(!0)
                        };
                    return T.finish = T, w || x.queue === !1 ? this.each(T) : this.queue(x.queue, T)
                },
                stop: function(r, s, u) {
                    var p = function(w) {
                        var x = w.stop;
                        delete w.stop, x(u)
                    };
                    return typeof r != "string" && (u = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                        var w = !0,
                            x = r != null && r + "queueHooks",
                            T = d.timers,
                            z = he.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && Co.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                        (w || !u) && d.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = he.get(this),
                            p = u[r + "queue"],
                            w = u[r + "queueHooks"],
                            x = d.timers,
                            T = p ? p.length : 0;
                        for (u.finish = !0, d.queue(this, r, []), w && w.stop && w.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                        for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete u.finish
                    })
                }
            }), d.each(["toggle", "show", "hide"], function(r, s) {
                var u = d.fn[s];
                d.fn[s] = function(p, w, x) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Ui(s, !0), p, w, x)
                }
            }), d.each({
                slideDown: Ui("show"),
                slideUp: Ui("hide"),
                slideToggle: Ui("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(r, s) {
                d.fn[r] = function(u, p, w) {
                    return this.animate(s, u, p, w)
                }
            }), d.timers = [], d.fx.tick = function() {
                var r, s = 0,
                    u = d.timers;
                for (Ft = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), Ft = void 0
            }, d.fx.timer = function(r) {
                d.timers.push(r), d.fx.start()
            }, d.fx.interval = 13, d.fx.start = function() {
                Gi || (Gi = !0, Or())
            }, d.fx.stop = function() {
                Gi = null
            }, d.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, d.fn.delay = function(r, s) {
                return r = d.fx && d.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(u, p) {
                    var w = e.setTimeout(u, r);
                    p.stop = function() {
                        e.clearTimeout(w)
                    }
                })
            },
            function() {
                var r = N.createElement("input"),
                    s = N.createElement("select"),
                    u = s.appendChild(N.createElement("option"));
                r.type = "checkbox", K.checkOn = r.value !== "", K.optSelected = u.selected, r = N.createElement("input"), r.value = "t", r.type = "radio", K.radioValue = r.value === "t"
            }();
        var Ir, Ci = d.expr.attrHandle;
        d.fn.extend({
            attr: function(r, s) {
                return g(this, d.attr, r, s, arguments.length > 1)
            },
            removeAttr: function(r) {
                return this.each(function() {
                    d.removeAttr(this, r)
                })
            }
        }), d.extend({
            attr: function(r, s, u) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) {
                    if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                    if ((x !== 1 || !d.isXMLDoc(r)) && (w = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Ir : void 0)), u !== void 0) {
                        if (u === null) {
                            d.removeAttr(r, s);
                            return
                        }
                        return w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                    }
                    return w && "get" in w && (p = w.get(r, s)) !== null ? p : (p = d.find.attr(r, s), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(r, s) {
                        if (!K.radioValue && s === "radio" && J(r, "input")) {
                            var u = r.value;
                            return r.setAttribute("type", s), u && (r.value = u), s
                        }
                    }
                }
            },
            removeAttr: function(r, s) {
                var u, p = 0,
                    w = s && s.match(Te);
                if (w && r.nodeType === 1)
                    for (; u = w[p++];) r.removeAttribute(u)
            }
        }), Ir = {
            set: function(r, s, u) {
                return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = Ci[s] || d.find.attr;
            Ci[s] = function(p, w, x) {
                var T, z, H = w.toLowerCase();
                return x || (z = Ci[H], Ci[H] = T, T = u(p, w, x) != null ? H : null, Ci[H] = z), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            _o = /^(?:a|area)$/i;
        d.fn.extend({
            prop: function(r, s) {
                return g(this, d.prop, r, s, arguments.length > 1)
            },
            removeProp: function(r) {
                return this.each(function() {
                    delete this[d.propFix[r] || r]
                })
            }
        }), d.extend({
            prop: function(r, s, u) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, w = d.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = d.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || _o.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), K.optSelected || (d.propHooks.selected = {
            get: function(r) {
                var s = r.parentNode;
                return s && s.parentNode && s.parentNode.selectedIndex, null
            },
            set: function(r) {
                var s = r.parentNode;
                s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex)
            }
        }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            d.propFix[this.toLowerCase()] = this
        });

        function qn(r) {
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function Wn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Dr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).addClass(r.call(this, Z, Wn(this)))
                });
                if (s = Dr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = qn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).removeClass(r.call(this, Z, Wn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Dr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            z = qn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    d(this).toggleClass(r.call(this, w, Wn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = d(this), z = Dr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = Wn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + qn(Wn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var So = /\r/g;
        d.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(So, "") : u == null ? "" : u)) : void 0
            }
        }), d.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = d.find.attr(r, "value");
                        return s != null ? s : qn(d.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, u, p, w = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            H = T ? x + 1 : w.length;
                        for (x < 0 ? p = H : p = T ? x : 0; p < H; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !J(u.parentNode, "optgroup"))) {
                                if (s = d(u).val(), T) return s;
                                z.push(s)
                            } return z
                    },
                    set: function(r, s) {
                        for (var u, p, w = r.options, x = d.makeArray(s), T = w.length; T--;) p = w[T], (p.selected = d.inArray(d.valHooks.option.get(p), x) > -1) && (u = !0);
                        return u || (r.selectedIndex = -1), x
                    }
                }
            }
        }), d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                set: function(r, s) {
                    if (Array.isArray(s)) return r.checked = d.inArray(d(r).val(), s) > -1
                }
            }, K.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), K.focusin = "onfocusin" in e;
        var Lr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, H, Z, le, Ce, ie = [u || N],
                    ce = M.call(r, "type") ? r.type : r,
                    Ue = M.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = u = u || N, !(u.nodeType === 3 || u.nodeType === 8) && !Lr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (Ue = ce.split("."), ce = Ue.shift(), Ue.sort()), H = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ue.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !v(u)) {
                        for (z = le.delegateType || ce, Lr.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) ie.push(x), T = x;
                        T === (u.ownerDocument || N) && ie.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = ie[w++]) && !r.isPropagationStopped();) Ce = x, r.type = w > 1 ? z : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = H && x[H], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ie.pop(), s) === !1) && te(u) && H && re(u[ce]) && !v(u) && (T = u[H], T && (u[H] = null), d.event.triggered = ce, r.isPropagationStopped() && Ce.addEventListener(ce, Xn), u[ce](), r.isPropagationStopped() && Ce.removeEventListener(ce, Xn), d.event.triggered = void 0, T && (u[H] = T)), r.result
                }
            },
            simulate: function(r, s, u) {
                var p = d.extend(new d.Event, u, {
                    type: r,
                    isSimulated: !0
                });
                d.event.trigger(p, null, s)
            }
        }), d.fn.extend({
            trigger: function(r, s) {
                return this.each(function() {
                    d.event.trigger(r, s, this)
                })
            },
            triggerHandler: function(r, s) {
                var u = this[0];
                if (u) return d.event.trigger(r, s, u, !0)
            }
        }), K.focusin || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                d.event.simulate(s, p.target, d.event.fix(p))
            };
            d.event.special[s] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = he.access(p, s);
                    w || p.addEventListener(r, u, !0), he.access(p, s, (w || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = he.access(p, s) - 1;
                    w ? he.access(p, s, w) : (p.removeEventListener(r, u, !0), he.remove(p, s))
                }
            }
        });
        var xi = e.location,
            Mr = {
                guid: Date.now()
            },
            qi = /\?/;
        d.parseXML = function(r) {
            var s, u;
            if (!r || typeof r != "string") return null;
            try {
                s = new e.DOMParser().parseFromString(r, "text/xml")
            } catch {}
            return u = s && s.getElementsByTagName("parsererror")[0], (!s || u) && d.error("Invalid XML: " + (u ? d.map(u.childNodes, function(p) {
                return p.textContent
            }).join(`
`) : r)), s
        };
        var ko = /\[\]$/,
            vs = /\r?\n/g,
            To = /^(?:submit|button|image|reset|file)$/i,
            Ao = /^(?:input|select|textarea|keygen)/i;

        function Pr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) d.each(s, function(x, T) {
                u || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && se(s) === "object")
                for (w in s) Pr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        d.param = function(r, s) {
            var u, p = [],
                w = function(x, T) {
                    var z = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (u in r) Pr(u, r[u], s, w);
            return p.join("&")
        }, d.fn.extend({
            serialize: function() {
                return d.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var r = d.prop(this, "elements");
                    return r ? d.makeArray(r) : this
                }).filter(function() {
                    var r = this.type;
                    return this.name && !d(this).is(":disabled") && Ao.test(this.nodeName) && !To.test(r) && (this.checked || !pe.test(r))
                }).map(function(r, s) {
                    var u = d(this).val();
                    return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(vs, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(vs, `\r
`)
                    }
                }).get()
            }
        });
        var Oo = /%20/g,
            Ro = /#.*$/,
            Io = /([?&])_=[^&]*/,
            Yn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Do = /^(?:GET|HEAD)$/,
            Lo = /^\/\//,
            ws = {},
            Nr = {},
            bs = "*/".concat("*"),
            Vr = N.createElement("a");
        Vr.href = xi.href;

        function Cs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (re(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function xs(r, s, u, p) {
            var w = {},
                x = r === Nr;

            function T(z) {
                var H;
                return w[z] = !0, d.each(r[z] || [], function(Z, le) {
                    var Ce = le(s, u, p);
                    if (typeof Ce == "string" && !x && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(H = Ce)
                }), H
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function Br(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Mo(r, s, u) {
            for (var p, w, x, T, z = r.contents, H = r.dataTypes; H[0] === "*";) H.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in z)
                    if (z[w] && z[w].test(p)) {
                        H.unshift(w);
                        break
                    }
            }
            if (H[0] in u) x = H[0];
            else {
                for (w in u) {
                    if (!H[0] || r.converters[w + " " + H[0]]) {
                        x = w;
                        break
                    }
                    T || (T = w)
                }
                x = x || T
            }
            if (x) return x !== H[0] && H.unshift(x), u[x]
        }

        function Po(r, s, u, p) {
            var w, x, T, z, H, Z = {},
                le = r.dataTypes.slice();
            if (le[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (x = le.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !H && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), H = x, x = le.shift(), x) {
                    if (x === "*") x = H;
                    else if (H !== "*" && H !== x) {
                        if (T = Z[H + " " + x] || Z["* " + x], !T) {
                            for (w in Z)
                                if (z = w.split(" "), z[1] === x && (T = Z[H + " " + z[0]] || Z["* " + z[0]], T)) {
                                    T === !0 ? T = Z[w] : Z[w] !== !0 && (x = z[0], le.unshift(z[1]));
                                    break
                                }
                        }
                        if (T !== !0)
                            if (T && r.throws) s = T(s);
                            else try {
                                s = T(s)
                            } catch (Ce) {
                                return {
                                    state: "parsererror",
                                    error: T ? Ce : "No conversion from " + H + " to " + x
                                }
                            }
                    }
                } return {
                state: "success",
                data: s
            }
        }
        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xi.href,
                type: "GET",
                isLocal: ys.test(xi.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bs,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": d.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(r, s) {
                return s ? Br(Br(r, d.ajaxSettings), s) : Br(d.ajaxSettings, r)
            },
            ajaxPrefilter: Cs(ws),
            ajaxTransport: Cs(Nr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, x, T, z, H, Z, le, Ce, ie = d.ajaxSetup({}, s),
                    ce = ie.context || ie,
                    Ue = ie.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                    rt = d.Deferred(),
                    je = d.Callbacks("once memory"),
                    zt = ie.statusCode || {},
                    Nt = {},
                    un = {},
                    _t = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Dt;
                            if (H) {
                                if (!x)
                                    for (x = {}; Dt = Yn.exec(w);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = x[ft.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return H ? w : null
                        },
                        setRequestHeader: function(ft, Dt) {
                            return H == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return H == null && (ie.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Dt;
                            if (ft)
                                if (H) et.always(ft[et.status]);
                                else
                                    for (Dt in ft) zt[Dt] = [zt[Dt], ft[Dt]];
                            return this
                        },
                        abort: function(ft) {
                            var Dt = ft || _t;
                            return u && u.abort(Dt), on(0, Dt), this
                        }
                    };
                if (rt.promise(et), ie.url = ((r || ie.url || xi.href) + "").replace(Lo, xi.protocol + "//"), ie.type = s.method || s.type || ie.method || ie.type, ie.dataTypes = (ie.dataType || "*").toLowerCase().match(Te) || [""], ie.crossDomain == null) {
                    z = N.createElement("a");
                    try {
                        z.href = ie.url, z.href = z.href, ie.crossDomain = Vr.protocol + "//" + Vr.host != z.protocol + "//" + z.host
                    } catch {
                        ie.crossDomain = !0
                    }
                }
                if (ie.data && ie.processData && typeof ie.data != "string" && (ie.data = d.param(ie.data, ie.traditional)), xs(ws, ie, s, et), H) return et;
                Z = d.event && ie.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ie.type = ie.type.toUpperCase(), ie.hasContent = !Do.test(ie.type), p = ie.url.replace(Ro, ""), ie.hasContent ? ie.data && ie.processData && (ie.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ie.data = ie.data.replace(Oo, "+")) : (Ce = ie.url.slice(p.length), ie.data && (ie.processData || typeof ie.data == "string") && (p += (qi.test(p) ? "&" : "?") + ie.data, delete ie.data), ie.cache === !1 && (p = p.replace(Io, "$1"), Ce = (qi.test(p) ? "&" : "?") + "_=" + Mr.guid++ + Ce), ie.url = p + Ce), ie.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ie.data && ie.hasContent && ie.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ie.contentType), et.setRequestHeader("Accept", ie.dataTypes[0] && ie.accepts[ie.dataTypes[0]] ? ie.accepts[ie.dataTypes[0]] + (ie.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : ie.accepts["*"]);
                for (le in ie.headers) et.setRequestHeader(le, ie.headers[le]);
                if (ie.beforeSend && (ie.beforeSend.call(ce, et, ie) === !1 || H)) return et.abort();
                if (_t = "abort", je.add(ie.complete), et.done(ie.success), et.fail(ie.error), u = xs(Nr, ie, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, Z && Ue.trigger("ajaxSend", [et, ie]), H) return et;
                    ie.async && ie.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ie.timeout));
                    try {
                        H = !1, u.send(Nt, on)
                    } catch (ft) {
                        if (H) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, _i, Wi) {
                    var hn, Kn, Jn, an, Ln, vn = Dt;
                    H || (H = !0, T && e.clearTimeout(T), u = void 0, w = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Mo(ie, et, _i)), !hn && d.inArray("script", ie.dataTypes) > -1 && d.inArray("json", ie.dataTypes) < 0 && (ie.converters["text script"] = function() {}), an = Po(ie, an, et, hn), hn ? (ie.ifModified && (Ln = et.getResponseHeader("Last-Modified"), Ln && (d.lastModified[p] = Ln), Ln = et.getResponseHeader("etag"), Ln && (d.etag[p] = Ln)), ft === 204 || ie.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ce, [Kn, vn, et]) : rt.rejectWith(ce, [et, vn, Jn]), et.statusCode(zt), zt = void 0, Z && Ue.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ie, hn ? Kn : Jn]), je.fireWith(ce, [et, vn]), Z && (Ue.trigger("ajaxComplete", [et, ie]), --d.active || d.event.trigger("ajaxStop")))
                }
                return et
            },
            getJSON: function(r, s, u) {
                return d.get(r, s, u, "json")
            },
            getScript: function(r, s) {
                return d.get(r, void 0, s, "script")
            }
        }), d.each(["get", "post"], function(r, s) {
            d[s] = function(u, p, w, x) {
                return re(p) && (x = x || w, w = p, p = void 0), d.ajax(d.extend({
                    url: u,
                    type: s,
                    dataType: x,
                    data: p,
                    success: w
                }, d.isPlainObject(u) && u))
            }
        }), d.ajaxPrefilter(function(r) {
            var s;
            for (s in r.headers) s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "")
        }), d._evalUrl = function(r, s, u) {
            return d.ajax({
                url: r,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(p) {
                    d.globalEval(p, s, u)
                }
            })
        }, d.fn.extend({
            wrapAll: function(r) {
                var s;
                return this[0] && (re(r) && (r = r.call(this[0])), s = d(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(r) {
                return re(r) ? this.each(function(s) {
                    d(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = d(this),
                        u = s.contents();
                    u.length ? u.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = re(r);
                return this.each(function(u) {
                    d(this).wrapAll(s ? r.call(this, u) : r)
                })
            },
            unwrap: function(r) {
                return this.parent(r).not("body").each(function() {
                    d(this).replaceWith(this.childNodes)
                }), this
            }
        }), d.expr.pseudos.hidden = function(r) {
            return !d.expr.pseudos.visible(r)
        }, d.expr.pseudos.visible = function(r) {
            return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length)
        }, d.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch {}
        };
        var No = {
                0: 200,
                1223: 204
            },
            Ei = d.ajaxSettings.xhr();
        K.cors = !!Ei && "withCredentials" in Ei, K.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (K.cors || Ei && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(No[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
                                binary: T.response
                            } : {
                                text: T.responseText
                            }, T.getAllResponseHeaders()))
                        }
                    }, T.onload = s(), u = T.onerror = T.ontimeout = s("error"), T.onabort !== void 0 ? T.onabort = u : T.onreadystatechange = function() {
                        T.readyState === 4 && e.setTimeout(function() {
                            s && u()
                        })
                    }, s = s("abort");
                    try {
                        T.send(r.hasContent && r.data || null)
                    } catch (z) {
                        if (s) throw z
                    }
                },
                abort: function() {
                    s && s()
                }
            }
        }), d.ajaxPrefilter(function(r) {
            r.crossDomain && (r.contents.script = !1)
        }), d.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(r) {
                    return d.globalEval(r), r
                }
            }
        }), d.ajaxPrefilter("script", function(r) {
            r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET")
        }), d.ajaxTransport("script", function(r) {
            if (r.crossDomain || r.scriptAttrs) {
                var s, u;
                return {
                    send: function(p, w) {
                        s = d("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", u = function(x) {
                            s.remove(), u = null, x && w(x.type === "error" ? 404 : 200, x.type)
                        }), N.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var $r = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = $r.pop() || d.expando + "_" + Mr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || d.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, $r.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), K.createHTMLDocument = function() {
            var r = N.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (K.createHTMLDocument ? (s = N.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = N.location.href, s.head.appendChild(p)) : s = N), w = Fe.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = qn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(H) {
                x = arguments, T.html(p ? d("<div>").append(d.parseHTML(H)).find(p) : H)
            }).always(u && function(H, Z) {
                T.each(function() {
                    u.apply(this, x || [H.responseText, Z, H])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, H, Z, le = d.css(r, "position"),
                    Ce = d(r),
                    ie = {};
                le === "static" && (r.style.position = "relative"), z = Ce.offset(), x = d.css(r, "top"), H = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + H).indexOf("auto") > -1, Z ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(H) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ie.top = s.top - z.top + T), s.left != null && (ie.left = s.left - z.left + w), "using" in s ? s.using.call(r, ie) : Ce.css(ie)
            }
        }, d.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(w) {
                    d.offset.setOffset(this, r, w)
                });
                var s, u, p = this[0];
                if (!!p) return p.getClientRects().length ? (s = p.getBoundingClientRect(), u = p.ownerDocument.defaultView, {
                    top: s.top + u.pageYOffset,
                    left: s.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (!!this[0]) {
                    var r, s, u, p = this[0],
                        w = {
                            top: 0,
                            left: 0
                        };
                    if (d.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && d.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== p && r.nodeType === 1 && (w = d(r).offset(), w.top += d.css(r, "borderTopWidth", !0), w.left += d.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - w.top - d.css(p, "marginTop", !0),
                        left: s.left - w.left - d.css(p, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var r = this.offsetParent; r && d.css(r, "position") === "static";) r = r.offsetParent;
                    return r || Jt
                })
            }
        }), d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            d.fn[r] = function(p) {
                return g(this, function(w, x, T) {
                    var z;
                    if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(K.pixelPosition, function(u, p) {
                if (p) return p = Ze(u, s), wi.test(p) ? d(u).position()[s] + "px" : p
            })
        }), d.each({
            Height: "height",
            Width: "width"
        }, function(r, s) {
            d.each({
                padding: "inner" + r,
                content: s,
                "": "outer" + r
            }, function(u, p) {
                d.fn[p] = function(w, x) {
                    var T = arguments.length && (u || typeof w != "boolean"),
                        z = u || (w === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(H, Z, le) {
                        var Ce;
                        return v(H) ? p.indexOf("outer") === 0 ? H["inner" + r] : H.document.documentElement["client" + r] : H.nodeType === 9 ? (Ce = H.documentElement, Math.max(H.body["scroll" + r], Ce["scroll" + r], H.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : le === void 0 ? d.css(H, Z, z) : d.style(H, Z, le, z)
                    }, s, T ? w : void 0, T)
                }
            })
        }), d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(r, s) {
            d.fn[s] = function(u) {
                return this.on(s, u)
            }
        }), d.fn.extend({
            bind: function(r, s, u) {
                return this.on(r, null, s, u)
            },
            unbind: function(r, s) {
                return this.off(r, null, s)
            },
            delegate: function(r, s, u, p) {
                return this.on(s, r, u, p)
            },
            undelegate: function(r, s, u) {
                return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", u)
            },
            hover: function(r, s) {
                return this.mouseenter(r).mouseleave(s || r)
            }
        }), d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(r, s) {
            d.fn[s] = function(u, p) {
                return arguments.length > 0 ? this.on(s, null, u, p) : this.trigger(s)
            }
        });
        var Es = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        d.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(f.call(arguments)))
            }, w.guid = r.guid = r.guid || d.guid++, w
        }, d.holdReady = function(r) {
            r ? d.readyWait++ : d.ready(!0)
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = J, d.isFunction = re, d.isWindow = v, d.camelCase = B, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
            var s = d.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, d.trim = function(r) {
            return r == null ? "" : (r + "").replace(Es, "")
        };
        var Vo = e.jQuery,
            Bo = e.$;
        return d.noConflict = function(r) {
            return e.$ === d && (e.$ = Bo), r && e.jQuery === d && (e.jQuery = Vo), d
        }, typeof n > "u" && (e.jQuery = e.$ = d), d
    })
})(Na);
const fe = Na.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Pi.exports,
                a;
            try {
                a = Na.exports
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var f = e.Backbone,
            m = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var _ = function(E, l, g) {
                switch (E) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(S) {
                            return i[l](this[g], S)
                        };
                    case 3:
                        return function(S, O) {
                            return i[l](this[g], I(S, this), O)
                        };
                    case 4:
                        return function(S, O, P) {
                            return i[l](this[g], I(S, this), O, P)
                        };
                    default:
                        return function() {
                            var S = m.call(arguments);
                            return S.unshift(this[g]), i[l].apply(i, S)
                        }
                }
            },
            k = function(E, l, g) {
                i.each(l, function(S, O) {
                    i[O] && (E.prototype[O] = _(S, O, g))
                })
            },
            I = function(E, l) {
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? D(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            D = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            M = n.Events = {},
            Y = /\s+/,
            ne = function(E, l, g, S, O) {
                var P = 0,
                    B;
                if (g && typeof g == "object")
                    for (S !== void 0 && ("context" in O) && O.context === void 0 && (O.context = S), B = i.keys(g); P < B.length; P++) l = ne(E, l, B[P], g[B[P]], O);
                else if (g && Y.test(g))
                    for (B = g.split(Y); P < B.length; P++) l = E(l, B[P], S, O);
                else l = E(l, g, S, O);
                return l
            };
        M.on = function(E, l, g) {
            return K(this, E, l, g)
        };
        var K = function(E, l, g, S, O) {
            if (E._events = ne(re, E._events || {}, l, g, {
                    context: S,
                    ctx: E,
                    listening: O
                }), O) {
                var P = E._listeners || (E._listeners = {});
                P[O.id] = O
            }
            return E
        };
        M.listenTo = function(E, l, g) {
            if (!E) return this;
            var S = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                P = O[S];
            if (!P) {
                var B = this._listenId || (this._listenId = i.uniqueId("l"));
                P = O[S] = {
                    obj: E,
                    objId: S,
                    id: B,
                    listeningTo: O,
                    count: 0
                }
            }
            return K(E, l, g, this, P), this
        };
        var re = function(E, l, g, S) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    P = S.context,
                    B = S.ctx,
                    te = S.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: P,
                    ctx: P || B,
                    listening: te
                })
            }
            return E
        };
        M.off = function(E, l, g) {
            return this._events ? (this._events = ne(v, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, M.stopListening = function(E, l, g) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var O = E ? [E._listenId] : i.keys(S), P = 0; P < O.length; P++) {
                var B = S[O[P]];
                if (!B) break;
                B.obj.off(l, g, this)
            }
            return this
        };
        var v = function(E, l, g, S) {
            if (!!E) {
                var O = 0,
                    P, B = S.context,
                    te = S.listeners;
                if (!l && !g && !B) {
                    for (var ke = i.keys(te); O < ke.length; O++) P = te[ke[O]], delete te[P.id], delete P.listeningTo[P.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var De = E[l];
                    if (!De) break;
                    for (var Le = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || B && B !== Ct.context ? Le.push(Ct) : (P = Ct.listening, P && --P.count === 0 && (delete te[P.id], delete P.listeningTo[P.objId]))
                    }
                    Le.length ? E[l] = Le : delete E[l]
                }
                return E
            }
        };
        M.once = function(E, l, g) {
            var S = ne(N, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(S, l, g)
        }, M.listenToOnce = function(E, l, g) {
            var S = ne(N, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, S)
        };
        var N = function(E, l, g, S) {
            if (g) {
                var O = E[l] = i.once(function() {
                    S(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        M.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
            return ne(q, this._events, E, void 0, g), this
        };
        var q = function(E, l, g, S) {
                if (E) {
                    var O = E[l],
                        P = E.all;
                    O && P && (P = P.slice()), O && ae(O, S), P && ae(P, [l].concat(S))
                }
                return E
            },
            ae = function(E, l) {
                var g, S = -1,
                    O = E.length,
                    P = l[0],
                    B = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P);
                        return;
                    case 2:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P, B);
                        return;
                    case 3:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P, B, te);
                        return;
                    default:
                        for (; ++S < O;)(g = E[S]).callback.apply(g.ctx, l);
                        return
                }
            };
        M.bind = M.on, M.unbind = M.off, i.extend(n, M);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var S = i.result(this, "defaults");
            g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, M, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(E) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            get: function(E) {
                return this.attributes[E]
            },
            escape: function(E) {
                return i.escape(this.get(E))
            },
            has: function(E) {
                return this.get(E) != null
            },
            matches: function(E) {
                return !!i.iteratee(E, this)(this.attributes)
            },
            set: function(E, l, g) {
                if (E == null) return this;
                var S;
                if (typeof E == "object" ? (S = E, g = l) : (S = {})[E] = l, g || (g = {}), !this._validate(S, g)) return !1;
                var O = g.unset,
                    P = g.silent,
                    B = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    he = this.changed,
                    De = this._previousAttributes;
                for (var Le in S) l = S[Le], i.isEqual(ke[Le], l) || B.push(Le), i.isEqual(De[Le], l) ? delete he[Le] : he[Le] = l, O ? delete ke[Le] : ke[Le] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !P) {
                    B.length && (this._pending = g);
                    for (var nt = 0; nt < B.length; nt++) this.trigger("change:" + B[nt], this, ke[B[nt]], g)
                }
                if (te) return this;
                if (!P)
                    for (; this._pending;) g = this._pending, this._pending = !1, this.trigger("change", this, g);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(E, l) {
                return this.set(E, void 0, i.extend({}, l, {
                    unset: !0
                }))
            },
            clear: function(E) {
                var l = {};
                for (var g in this.attributes) l[g] = void 0;
                return this.set(l, i.extend({}, E, {
                    unset: !0
                }))
            },
            hasChanged: function(E) {
                return E == null ? !i.isEmpty(this.changed) : i.has(this.changed, E)
            },
            changedAttributes: function(E) {
                if (!E) return this.hasChanged() ? i.clone(this.changed) : !1;
                var l = this._changing ? this._previousAttributes : this.attributes,
                    g = {};
                for (var S in E) {
                    var O = E[S];
                    i.isEqual(l[S], O) || (g[S] = O)
                }
                return i.size(g) ? g : !1
            },
            previous: function(E) {
                return E == null || !this._previousAttributes ? null : this._previousAttributes[E]
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = this,
                    g = E.success;
                return E.success = function(S) {
                    var O = E.parse ? l.parse(S, E) : S;
                    if (!l.set(O, E)) return !1;
                    g && g.call(E.context, l, S, E), l.trigger("sync", l, S, E)
                }, qt(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var S;
                E == null || typeof E == "object" ? (S = E, g = l) : (S = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var O = g.wait;
                if (S && !O) {
                    if (!this.set(S, g)) return !1
                } else if (!this._validate(S, g)) return !1;
                var P = this,
                    B = g.success,
                    te = this.attributes;
                g.success = function(De) {
                    P.attributes = te;
                    var Le = g.parse ? P.parse(De, g) : De;
                    if (O && (Le = i.extend({}, S, Le)), Le && !P.set(Le, g)) return !1;
                    B && B.call(g.context, P, De, g), P.trigger("sync", P, De, g)
                }, qt(this, g), S && O && (this.attributes = i.extend({}, te, S));
                var ke = this.isNew() ? "create" : g.patch ? "patch" : "update";
                ke === "patch" && !g.attrs && (g.attrs = S);
                var he = this.sync(ke, this, g);
                return this.attributes = te, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    S = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(B) {
                    S && O(), g && g.call(E.context, l, B, E), l.isNew() || l.trigger("sync", l, B, E)
                };
                var P = !1;
                return this.isNew() ? i.defer(E.success) : (qt(this, E), P = this.sync("delete", this, E)), S || O(), P
            },
            url: function() {
                var E = i.result(this, "urlRoot") || i.result(this.collection, "url") || Bt();
                if (this.isNew()) return E;
                var l = this.get(this.idAttribute);
                return E.replace(/[^\/]$/, "$&/") + encodeURIComponent(l)
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(E) {
                return this._validate({}, i.extend({}, E, {
                    validate: !0
                }))
            },
            _validate: function(E, l) {
                if (!l.validate || !this.validate) return !0;
                E = i.extend({}, this.attributes, E);
                var g = this.validationError = this.validate(E, l) || null;
                return g ? (this.trigger("invalid", this, g, i.extend(l, {
                    validationError: g
                })), !1) : !0
            }
        });
        var ye = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        k(se, ye, "attributes");
        var d = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
                    silent: !0
                }, l))
            },
            _e = {
                add: !0,
                remove: !0,
                merge: !0
            },
            Oe = {
                add: !0,
                remove: !1
            },
            Pe = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var S = Array(E.length - g),
                    O = l.length,
                    P;
                for (P = 0; P < S.length; P++) S[P] = E[P + g];
                for (P = 0; P < O; P++) E[P + g] = l[P];
                for (P = 0; P < S.length; P++) E[P + O + g] = S[P]
            };
        i.extend(d.prototype, M, {
            model: se,
            initialize: function() {},
            toJSON: function(E) {
                return this.map(function(l) {
                    return l.toJSON(E)
                })
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            add: function(E, l) {
                return this.set(E, i.extend({
                    merge: !1
                }, l, Oe))
            },
            remove: function(E, l) {
                l = i.extend({}, l);
                var g = !i.isArray(E);
                E = g ? [E] : E.slice();
                var S = this._removeModels(E, l);
                return !l.silent && S.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: S
                }, this.trigger("update", this, l)), g ? S[0] : S
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, _e, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var O = [],
                        P = [],
                        B = [],
                        te = [],
                        ke = {},
                        he = l.add,
                        De = l.merge,
                        Le = l.remove,
                        nt = !1,
                        Ct = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Jt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Jt = bt.parse(Jt, l)), bt.set(Jt, l), B.push(bt), Ct && !nt && (nt = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else he && (ct = E[yt] = this._prepareModel(ct, l), ct && (P.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, O.push(ct)))
                    }
                    if (Le) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Mt = !Ct && he && Le;
                    if (O.length && Mt ? (Je = this.length !== O.length || i.some(this.models, function(j, V) {
                            return j !== O[V]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : P.length && (Ct && (nt = !0), Pe(this.models, P, S == null ? this.length : S), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < P.length; yt++) S != null && (l.index = S + yt), ct = P[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (P.length || te.length || B.length) && (l.changes = {
                            added: P,
                            removed: te,
                            merged: B
                        }, this.trigger("update", this, l))
                    }
                    return g ? E[0] : E
                }
            },
            reset: function(E, l) {
                l = l ? i.clone(l) : {};
                for (var g = 0; g < this.models.length; g++) this._removeReference(this.models[g], l);
                return l.previousModels = this.models, this._reset(), E = this.add(E, i.extend({
                    silent: !0
                }, l)), l.silent || this.trigger("reset", this, l), E
            },
            push: function(E, l) {
                return this.add(E, i.extend({
                    at: this.length
                }, l))
            },
            pop: function(E) {
                var l = this.at(this.length - 1);
                return this.remove(l, E)
            },
            unshift: function(E, l) {
                return this.add(E, i.extend({
                    at: 0
                }, l))
            },
            shift: function(E) {
                var l = this.at(0);
                return this.remove(l, E)
            },
            slice: function() {
                return m.apply(this.models, arguments)
            },
            get: function(E) {
                if (E != null) return this._byId[E] || this._byId[this.modelId(E.attributes || E)] || E.cid && this._byId[E.cid]
            },
            has: function(E) {
                return this.get(E) != null
            },
            at: function(E) {
                return E < 0 && (E += this.length), this.models[E]
            },
            where: function(E, l) {
                return this[l ? "find" : "filter"](E)
            },
            findWhere: function(E) {
                return this.where(E, !0)
            },
            sort: function(E) {
                var l = this.comparator;
                if (!l) throw new Error("Cannot sort a set without a comparator");
                E || (E = {});
                var g = l.length;
                return i.isFunction(l) && (l = i.bind(l, this)), g === 1 || i.isString(l) ? this.models = this.sortBy(l) : this.models.sort(l), E.silent || this.trigger("sort", this, E), this
            },
            pluck: function(E) {
                return this.map(E + "")
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = E.success,
                    g = this;
                return E.success = function(S) {
                    var O = E.reset ? "reset" : "set";
                    g[O](S, E), l && l.call(E.context, g, S, E), g.trigger("sync", g, S, E)
                }, qt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var S = this,
                    O = l.success;
                return l.success = function(P, B, te) {
                    g && S.add(P, te), O && O.call(te.context, P, B, te)
                }, E.save(null, l), E
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(E) {
                return E[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(E, l) {
                if (this._isModel(E)) return E.collection || (E.collection = this), E;
                l = l ? i.clone(l) : {}, l.collection = this;
                var g = new this.model(E, l);
                return g.validationError ? (this.trigger("invalid", this, g.validationError, l), !1) : g
            },
            _removeModels: function(E, l) {
                for (var g = [], S = 0; S < E.length; S++) {
                    var O = this.get(E[S]);
                    if (!!O) {
                        var P = this.indexOf(O);
                        this.models.splice(P, 1), this.length--, delete this._byId[O.cid];
                        var B = this.modelId(O.attributes);
                        B != null && delete this._byId[B], l.silent || (l.index = P, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
                    }
                }
                return g
            },
            _isModel: function(E) {
                return E instanceof se
            },
            _addReference: function(E, l) {
                this._byId[E.cid] = E;
                var g = this.modelId(E.attributes);
                g != null && (this._byId[g] = E), E.on("all", this._onModelEvent, this)
            },
            _removeReference: function(E, l) {
                delete this._byId[E.cid];
                var g = this.modelId(E.attributes);
                g != null && delete this._byId[g], this === E.collection && delete E.collection, E.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(E, l, g, S) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, S), E === "change") {
                        var O = this.modelId(l.previousAttributes()),
                            P = this.modelId(l.attributes);
                        O !== P && (O != null && delete this._byId[O], P != null && (this._byId[P] = l))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        var lt = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        };
        k(d, lt, "models");
        var Be = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, Fe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            J = /^(\S+)\s*(.*)$/,
            Fe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, M, {
            tagName: "div",
            $: function(E) {
                return this.$el.find(E)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(E) {
                return this.undelegateEvents(), this._setElement(E), this.delegateEvents(), this
            },
            _setElement: function(E) {
                this.$el = E instanceof n.$ ? E : n.$(E), this.el = this.$el[0]
            },
            delegateEvents: function(E) {
                if (E || (E = i.result(this, "events")), !E) return this;
                this.undelegateEvents();
                for (var l in E) {
                    var g = E[l];
                    if (i.isFunction(g) || (g = this[g]), !!g) {
                        var S = l.match(J);
                        this.delegate(S[1], S[2], i.bind(g, this))
                    }
                }
                return this
            },
            delegate: function(E, l, g) {
                return this.$el.on(E + ".delegateEvents" + this.cid, l, g), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(E, l, g) {
                return this.$el.off(E + ".delegateEvents" + this.cid, l, g), this
            },
            _createElement: function(E) {
                return document.createElement(E)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var E = i.extend({}, i.result(this, "attributes"));
                    this.id && (E.id = i.result(this, "id")), this.className && (E.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(E)
                }
            },
            _setAttributes: function(E) {
                this.$el.attr(E)
            }
        }), n.sync = function(E, l, g) {
            var S = G[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: S,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || Bt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (S === "PUT" || S === "DELETE" || S === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = S);
                var P = g.beforeSend;
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", S), P) return P.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var B = g.error;
            g.error = function(ke, he, De) {
                g.textStatus = he, g.errorThrown = De, B && B.call(g.context, ke, he, De)
            };
            var te = g.xhr = n.ajax(i.extend(O, g));
            return l.trigger("request", l, te, g), te
        };
        var G = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        n.ajax = function() {
            return n.$.ajax.apply(n.$, arguments)
        };
        var oe = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, M, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var S = this;
                return n.history.route(E, function(O) {
                    var P = S._extractParameters(E, O);
                    S.execute(g, P, l) !== !1 && (S.trigger.apply(S, ["route:" + l].concat(P)), S.trigger("route", l, P), n.history.trigger("route", S, l, P))
                }), this
            },
            execute: function(E, l, g) {
                E && E.apply(this, l)
            },
            navigate: function(E, l) {
                return n.history.navigate(E, l), this
            },
            _bindRoutes: function() {
                if (!!this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var E, l = i.keys(this.routes);
                        (E = l.pop()) != null;) this.route(E, this.routes[E])
                }
            },
            _routeToRegExp: function(E) {
                return E = E.replace(ue, "\\$&").replace(Ae, "(?:$1)?").replace(be, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(S, O) {
                    return O === g.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                })
            }
        });
        var Se = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Ke = /#.*$/;
        Se.started = !1, i.extend(Se.prototype, M, {
            interval: 50,
            atRoot: function() {
                var E = this.location.pathname.replace(/[^\/]$/, "$&/");
                return E === this.root && !this.getSearch()
            },
            matchRoot: function() {
                var E = this.decodeFragment(this.location.pathname),
                    l = E.slice(0, this.root.length - 1) + "/";
                return l === this.root
            },
            decodeFragment: function(E) {
                return decodeURI(E.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var E = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return E ? E[0] : ""
            },
            getHash: function(E) {
                var l = (E || this).location.href.match(/#(.*)$/);
                return l ? l[1] : ""
            },
            getPath: function() {
                var E = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return E.charAt(0) === "/" ? E.slice(1) : E
            },
            getFragment: function(E) {
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(Te, "")
            },
            start: function(E) {
                if (Se.started) throw new Error("Backbone.history has already been started");
                if (Se.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace($e, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var g = document.body,
                        S = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    S.document.open(), S.document.close(), S.location.hash = "#" + this.fragment
                }
                var O = window.addEventListener || function(P, B) {
                    return attachEvent("on" + P, B)
                };
                if (this._usePushState ? O("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? O("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Se.started = !1
            },
            route: function(E, l) {
                this.handlers.unshift({
                    route: E,
                    callback: l
                })
            },
            checkUrl: function(E) {
                var l = this.getFragment();
                if (l === this.fragment && this.iframe && (l = this.getHash(this.iframe.contentWindow)), l === this.fragment) return !1;
                this.iframe && this.navigate(l), this.loadUrl()
            },
            loadUrl: function(E) {
                return this.matchRoot() ? (E = this.fragment = this.getFragment(E), i.some(this.handlers, function(l) {
                    if (l.route.test(E)) return l.callback(E), !0
                })) : !1
            },
            navigate: function(E, l) {
                if (!Se.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var S = g + E;
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, S);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var O = this.iframe.contentWindow;
                            l.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, E, l.replace)
                        }
                    } else return this.location.assign(S);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var S = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(S + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new Se;
        var dt = function(E, l) {
            var g = this,
                S;
            return E && i.has(E, "constructor") ? S = E.constructor : S = function() {
                return g.apply(this, arguments)
            }, i.extend(S, g, l), S.prototype = i.create(g.prototype, E), S.prototype.constructor = S, S.__super__ = g.prototype, S
        };
        se.extend = d.extend = oe.extend = Be.extend = Se.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            qt = function(E, l) {
                var g = l.error;
                l.error = function(S) {
                    g && g.call(l.context, E, S, l), E.trigger("error", E, S, l)
                }
            };
        return n
    })
})(ot);
var bc = {
        exports: {}
    },
    Jo = {
        exports: {}
    },
    pl;

function vh() {
    return pl || (pl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Pi.exports, ot)
        })(vt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                f = i.Radio,
                m = i.Radio = {};
            m.VERSION = "2.0.0", m.noConflict = function() {
                return i.Radio = f, this
            }, m.DEBUG = !1, m._debugText = function(v, N, q) {
                return v + (q ? " on the " + q + " channel" : "") + ': "' + N + '"'
            }, m.debugLog = function(v, N, q) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, N, q))
            };
            var _ = /\s+/;
            m._eventsApi = function(v, N, q, ae) {
                if (!q) return !1;
                var se = {};
                if ((typeof q > "u" ? "undefined" : a(q)) === "object") {
                    for (var ye in q) {
                        var d = v[N].apply(v, [ye, q[ye]].concat(ae));
                        _.test(ye) ? n.extend(se, d) : se[ye] = d
                    }
                    return se
                }
                if (_.test(q)) {
                    for (var _e = q.split(_), Oe = 0, Pe = _e.length; Oe < Pe; Oe++) se[_e[Oe]] = v[N].apply(v, [_e[Oe]].concat(ae));
                    return se
                }
                return !1
            }, m._callHandler = function(v, N, q) {
                var ae = q[0],
                    se = q[1],
                    ye = q[2];
                switch (q.length) {
                    case 0:
                        return v.call(N);
                    case 1:
                        return v.call(N, ae);
                    case 2:
                        return v.call(N, ae, se);
                    case 3:
                        return v.call(N, ae, se, ye);
                    default:
                        return v.apply(N, q)
                }
            };

            function k(v, N, q, ae) {
                var se = v[N];
                if ((!q || q === se.callback || q === se.callback._callback) && (!ae || ae === se.context)) return delete v[N], !0
            }

            function I(v, N, q, ae) {
                v || (v = {});
                for (var se = N ? [N] : n.keys(v), ye = !1, d = 0, _e = se.length; d < _e; d++) N = se[d], !!v[N] && k(v, N, q, ae) && (ye = !0);
                return ye
            }
            var D = {};

            function M(v) {
                return D[v] || (D[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(N, q) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + N + '] "' + q + '"', ae)
                    }
                },
                tuneIn: function(N) {
                    var q = m.channel(N);
                    return q._tunedIn = !0, q.on("all", M(N)), this
                },
                tuneOut: function(N) {
                    var q = m.channel(N);
                    return q._tunedIn = !1, q.off("all", M(N)), delete D[N], this
                }
            });

            function Y(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            m.Requests = {
                request: function(N) {
                    var q = n.toArray(arguments).slice(1),
                        ae = m._eventsApi(this, "request", N, q);
                    if (ae) return ae;
                    var se = this.channelName,
                        ye = this._requests;
                    if (se && this._tunedIn && m.log.apply(this, [se, N].concat(q)), ye && (ye[N] || ye.default)) {
                        var d = ye[N] || ye.default;
                        return q = ye[N] ? q : arguments, m._callHandler(d.callback, d.context, q)
                    } else m.debugLog("An unhandled request was fired", N, se)
                },
                reply: function(N, q, ae) {
                    return m._eventsApi(this, "reply", N, [q, ae]) ? this : (this._requests || (this._requests = {}), this._requests[N] && m.debugLog("A request was overwritten", N, this.channelName), this._requests[N] = {
                        callback: Y(q),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(N, q, ae) {
                    if (m._eventsApi(this, "replyOnce", N, [q, ae])) return this;
                    var se = this,
                        ye = n.once(function() {
                            return se.stopReplying(N), Y(q).apply(this, arguments)
                        });
                    return this.reply(N, ye, ae)
                },
                stopReplying: function(N, q, ae) {
                    return m._eventsApi(this, "stopReplying", N) ? this : (!N && !q && !ae ? delete this._requests : I(this._requests, N, q, ae) || m.debugLog("Attempted to remove the unregistered request", N, this.channelName), this)
                }
            }, m._channels = {}, m.channel = function(v) {
                if (!v) throw new Error("You must provide a name for the channel.");
                return m._channels[v] ? m._channels[v] : m._channels[v] = new m.Channel(v)
            }, m.Channel = function(v) {
                this.channelName = v
            }, n.extend(m.Channel.prototype, i.Events, m.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ne, K, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(N, q) {
                    m[q] = function(ae) {
                        return K = n.toArray(arguments).slice(1), ne = this.channel(ae), ne[q].apply(ne, K)
                    }
                })
            }), m.reset = function(v) {
                var N = v ? [this._channels[v]] : this._channels;
                n.each(N, function(q) {
                    q.reset()
                })
            }, m
        })
    }(Jo)), Jo.exports
}
/**
 * @license
 * MarionetteJS (Backbone.Marionette)
 * ----------------------------------
 * v3.5.1
 *
 * Copyright (c)2017 Derick Bailey, Muted Solutions, LLC.
 * Distributed under MIT license
 *
 * http://marionettejs.com
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i(ot, Pi.exports, vh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            m = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    return o.apply(C, Q)
                }
            },
            _ = n.Model.extend,
            k = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var I = function(o) {
                return document.documentElement.contains(o && o.parentNode)
            },
            D = function(o, C) {
                var A = this;
                !o || i.each(C, function(Q) {
                    var xe = o[Q];
                    xe !== void 0 && (A[Q] = xe)
                })
            },
            M = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            Y = function(o) {
                var C = this;
                return i.reduce(o, function(A, Q, xe) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (A[xe] = Q), A
                }, {})
            },
            ne = /(^|:)(\w)/gi;

        function K(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ne, K)
        });

        function v(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                xe = M.call(this, Q),
                qe = void 0;
            return i.isFunction(xe) && (qe = xe.apply(this, C)), this.trigger.apply(this, arguments), qe
        }

        function N(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function q(y, o, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(A) {
                !C(A) || N(A, o, A)
            })
        }

        function ae(y) {
            return !y._isAttached
        }

        function se(y) {
            return ae(y) ? (y._isAttached = !0, !0) : !1
        }

        function ye(y) {
            return y._isAttached
        }

        function d(y) {
            return ye(y) ? (y._isAttached = !1, !0) : !1
        }

        function _e(y) {
            y._isAttached && y._isRendered && N(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && N(y, "dom:remove", y)
        }

        function Pe() {
            q(this, "before:attach", ae)
        }

        function lt() {
            q(this, "attach", se), _e(this)
        }

        function Be() {
            q(this, "before:detach", ye), Oe(this)
        }

        function J() {
            q(this, "detach", d)
        }

        function Fe() {
            Oe(this)
        }

        function G() {
            _e(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Be,
                detach: J,
                "before:render": Fe,
                render: G
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = _.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var A = Error.call(this, o);
                    i.extend(this, i.pick(A, Ae), i.pick(C, Ae)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = _;

        function we(y, o, C, A, Q) {
            var xe = A.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(qe) {
                var It = y[qe];
                if (!It) throw new be('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
            })
        }

        function ue(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Q, xe) {
                if (i.isString(Q)) {
                    we(y, o, xe, Q, A);
                    return
                }
                y[A](o, xe, Q)
            })
        }

        function Se(y, o) {
            return !y || !o ? this : (ue(this, y, o, "listenTo"), this)
        }

        function Te(y, o) {
            return y ? o ? (ue(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = Y.call(y, C);
            o[A](Q, y)
        }

        function Ke(y, o) {
            return !y || !o ? this : ($e(this, y, o, "reply"), this)
        }

        function dt(y, o) {
            return y ? o ? ($e(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Bt = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            qt = {
                normalizeMethods: Y,
                _setOptions: Bt,
                mergeOptions: D,
                getOption: M,
                bindEvents: Se,
                unbindEvents: Te
            },
            E = {
                _initRadio: function() {
                    var o = i.result(this, "channelName");
                    if (!!o) {
                        if (!a) throw new be({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var C = this._channel = a.channel(o),
                            A = i.result(this, "radioEvents");
                        this.bindEvents(C, A);
                        var Q = i.result(this, "radioRequests");
                        this.bindRequests(C, Q), this.on("destroy", this._destroyRadio)
                    }
                },
                _destroyRadio: function() {
                    this._channel.stopReplying(null, null, this)
                },
                getChannel: function() {
                    return this._channel
                },
                bindEvents: Se,
                unbindEvents: Te,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = _, i.extend(g.prototype, n.Events, qt, E, {
            cidPrefix: "mno",
            _isDestroyed: !1,
            isDestroyed: function() {
                return this._isDestroyed
            },
            initialize: function() {},
            _setCid: function() {
                this.cid || (this.cid = i.uniqueId(this.cidPrefix))
            },
            destroy: function() {
                if (this._isDestroyed) return this;
                for (var o = arguments.length, C = Array(o), A = 0; A < o; A++) C[A] = arguments[A];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(C)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(C)), this.stopListening(), this
            },
            triggerMethod: v
        });
        var S = function(o) {
            this.templateId = o
        };
        i.extend(S, {
            templateCaches: {},
            get: function(o, C) {
                var A = this.templateCaches[o];
                return A || (A = new S(o), this.templateCaches[o] = A), A.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                var xe = A.length;
                if (xe > 0)
                    for (o = 0; o < xe; o++) delete this.templateCaches[A[o]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(o) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var C = this.loadTemplate(this.templateId, o);
                return this.compiledTemplate = this.compileTemplate(C, o), this.compiledTemplate
            },
            loadTemplate: function(o, C) {
                var A = n.$(o);
                if (!A.length) throw new be({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + o + '"'
                });
                return A.html()
            },
            compileTemplate: function(o, C) {
                return i.template(o, C)
            }
        });
        var O = i.invokeMap || i.invoke;

        function P(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function B(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = P(C, A),
                    xe = C === Q ? {} : C,
                    qe = new Q(xe, y),
                    It = B(y, i.result(qe, "behaviors"));
                return [qe].concat(It)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? B(this, o) : {}
                },
                _getBehaviorTriggers: function() {
                    var o = O(this._behaviors, "getTriggers");
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var o = O(this._behaviors, "getEvents");
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _proxyBehaviorViewProperties: function() {
                    O(this._behaviors, "proxyViewProperties")
                },
                _delegateBehaviorEntityEvents: function() {
                    O(this._behaviors, "delegateEntityEvents")
                },
                _undelegateBehaviorEntityEvents: function() {
                    O(this._behaviors, "undelegateEntityEvents")
                },
                _destroyBehaviors: function() {
                    for (var o = arguments.length, C = Array(o), A = 0; A < o; A++) C[A] = arguments[A];
                    O.apply(void 0, [this._behaviors, "destroy"].concat(C))
                },
                _removeBehavior: function(o) {
                    this._isDestroyed || (this.undelegate(".trig" + o.cid + " ." + o.cid), this._behaviors = i.without(this._behaviors, o))
                },
                _bindBehaviorUIElements: function() {
                    O(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    O(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var o = this._behaviors, C = 0, A = o && o.length; C < A; C++) v.apply(o[C], arguments)
                }
            },
            ke = {
                _delegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    A && (Te.call(this, o, A), Se.call(this, o, A));
                    var Q = i.result(this, "collectionEvents");
                    Q && (Te.call(this, C, Q), Se.call(this, C, Q))
                },
                _undelegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    Te.call(this, o, A);
                    var Q = i.result(this, "collectionEvents");
                    Te.call(this, C, Q)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            De = function(o, C) {
                var A = o.match(he);
                return A[1] + "." + C + " " + A[2]
            },
            Le = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(y) {
            return !!Le[y]
        }

        function Ct(y, o) {
            return Le[y] = o
        }

        function rn(y, o) {
            i.isString(o) && (o = {
                event: o
            });
            var C = o.event,
                A = !!o.preventDefault;
            nt("triggersPreventDefault") && (A = o.preventDefault !== !1);
            var Q = !!o.stopPropagation;
            return nt("triggersStopPropagation") && (Q = o.stopPropagation !== !1),
                function(xe) {
                    A && xe.preventDefault(), Q && xe.stopPropagation(), y.triggerMethod(C, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Q, xe, qe) {
                        return qe = De(qe, "trig" + A.cid), Q[qe] = rn(o, xe), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, xe) {
                    var qe = bt(xe, C);
                    return A[qe] = Q, A
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Jt = function y(o, C, A) {
                return i.each(o, function(Q, xe) {
                    i.isString(Q) ? o[xe] = bt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(qe) {
                        var It = Q[qe];
                        i.isString(It) && (Q[qe] = bt(It, C))
                    }))
                }), o
            },
            Je = {
                normalizeUIKeys: function(o) {
                    var C = this._getUIBindings();
                    return yt(o, C)
                },
                normalizeUIString: function(o) {
                    var C = this._getUIBindings();
                    return bt(o, C)
                },
                normalizeUIValues: function(o, C) {
                    var A = this._getUIBindings();
                    return Jt(o, A, C)
                },
                _getUIBindings: function() {
                    var o = i.result(this, "_uiBindings"),
                        C = i.result(this, "ui");
                    return o || C
                },
                _bindUIElements: function() {
                    var o = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var C = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(C, function(A, Q) {
                            o._ui[Q] = o.$(A)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var o = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(C, A) {
                        delete o.ui[A]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(o) {
                    return this._ui[o]
                }
            };

        function Mt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function j(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var V = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(o) {
                    return Mt(o)
                },
                findEl: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(o);
                    return A.find(C)
                },
                hasEl: function(o, C) {
                    return o.contains(C && C.parentNode)
                },
                detachEl: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(o);
                    C.detach()
                },
                replaceEl: function(o, C) {
                    if (o !== C) {
                        var A = C.parentNode;
                        !A || A.replaceChild(o, C)
                    }
                },
                swapEl: function(o, C) {
                    if (o !== C) {
                        var A = o.parentNode,
                            Q = C.parentNode;
                        if (!(!A || !Q)) {
                            var xe = o.nextSibling,
                                qe = C.nextSibling;
                            A.insertBefore(C, xe), Q.insertBefore(o, qe)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = A._$el,
                        xe = Q === void 0 ? Mt(o) : Q,
                        qe = A._$contents,
                        It = qe === void 0 ? Mt(C) : qe;
                    xe.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(o);
                    C.contents().detach()
                }
            },
            W = {
                Dom: V,
                supportsRenderLifecycle: !0,
                supportsDestroyLifecycle: !0,
                _isDestroyed: !1,
                isDestroyed: function() {
                    return !!this._isDestroyed
                },
                _isRendered: !1,
                isRendered: function() {
                    return !!this._isRendered
                },
                _isAttached: !1,
                isAttached: function() {
                    return !!this._isAttached
                },
                delegateEvents: function(o) {
                    this._proxyBehaviorViewProperties(), this._buildEventProxies();
                    var C = this._getEvents(o);
                    typeof o > "u" && (this.events = C);
                    var A = i.extend({}, this._getBehaviorEvents(), C, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, A), this
                },
                _getEvents: function(o) {
                    var C = o || this.events;
                    return i.isFunction(C) ? this.normalizeUIKeys(C.call(this)) : this.normalizeUIKeys(C)
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this, o)
                    }
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this
                },
                destroy: function() {
                    if (this._isDestroyed) return this;
                    for (var o = this._isAttached && !this._shouldDisableEvents, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(A)), o && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), o && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, A), this.triggerMethod.apply(this, ["destroy", this].concat(A)), this.stopListening(), this
                },
                _removeElement: function() {
                    this.$el.off().removeData(), this.Dom.detachEl(this.el, this.$el)
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this._bindBehaviorUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this._unbindBehaviorUIElements(), this
                },
                getUI: function(o) {
                    return this._getUI(o)
                },
                childViewEventPrefix: function() {
                    return nt("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var o = v.apply(this, arguments);
                    return this._triggerEventOnBehaviors.apply(this, arguments), o
                },
                _buildEventProxies: function() {
                    this._childViewEvents = i.result(this, "childViewEvents"), this._childViewTriggers = i.result(this, "childViewTriggers")
                },
                _proxyChildViewEvents: function(o) {
                    this.listenTo(o, "all", this._childViewEventHandler)
                },
                _childViewEventHandler: function(o) {
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[o]) && this.triggerMethod.apply(this, [qe[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Xt = It + ":" + o;
                        this.triggerMethod.apply(this, [Xt].concat(Q))
                    }
                }
            };
        i.extend(W, te, qt, ke, ct, Je);

        function L(y) {
            y._isRendered || (y.supportsRenderLifecycle || N(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, N(y, "render", y)))
        }

        function U(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || N(y, "before:destroy", y);
            var o = y._isAttached && !y._shouldDisableEvents;
            o && N(y, "before:detach", y), y.remove(), o && (y._isAttached = !1, N(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || N(y, "destroy", y)
        }
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = g.extend({
                Dom: V,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, pe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new be({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, o)
                },
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, L(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(o) {
                    oe(o), this._proxyChildViewEvents(o), o.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || C._proxyChildViewEvents(o)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = !o._isAttached && I(this.el) && !this._shouldDisableMonitoring(),
                        Q = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    A && N(o, "before:attach", o), Q ? this._replaceEl(o) : this.attachHtml(o), A && (o._isAttached = !0, N(o, "attach", o))
                },
                _ensureElement: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var C = typeof o.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!o.allowMissingEl;
                        if (C) return !1;
                        throw new be('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(o) {
                    if (!o) throw new be({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (o._isDestroyed) throw new be({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + o.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (o instanceof n.View) return o;
                    var C = this._getViewOptions(o);
                    return new Pn(C)
                },
                _getViewOptions: function(o) {
                    if (i.isFunction(o)) return {
                        template: o
                    };
                    if (i.isObject(o)) return o;
                    var C = function() {
                        return o
                    };
                    return {
                        template: C
                    }
                },
                getEl: function(o) {
                    var C = i.result(this, "parentEl");
                    return C && i.isString(o) ? this.Dom.findEl(C, o) : this.Dom.getEl(o)
                },
                _replaceEl: function(o) {
                    this._restoreEl(), o.on("before:destroy", this._restoreEl, this), this.Dom.replaceEl(o.el, this.el), this._isReplaced = !0
                },
                _restoreEl: function() {
                    if (!!this._isReplaced) {
                        var o = this.currentView;
                        !o || (this._detachView(o), this._isReplaced = !1)
                    }
                },
                isReplaced: function() {
                    return !!this._isReplaced
                },
                isSwappingView: function() {
                    return !!this._isSwappingView
                },
                attachHtml: function(o) {
                    this.Dom.appendContents(this.el, o.el, {
                        _$el: this.$el,
                        _$contents: o.$el
                    })
                },
                empty: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            allowMissingEl: !0
                        },
                        C = this.currentView;
                    if (!C) return this._ensureElement(o) && this.detachHtml(), this;
                    var A = !o.preventDestroy;
                    return A || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, A), this
                },
                _empty: function(o, C) {
                    o.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, o), this._restoreEl(), delete this.currentView, o._isDestroyed || (C ? this.removeView(o) : this._detachView(o), this._stopChildViewEvents(o)), this.triggerMethod("empty", this, o)
                },
                _stopChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(o)
                },
                destroyView: function(o) {
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), U(o)), o
                },
                removeView: function(o) {
                    this.destroyView(o)
                },
                detachView: function() {
                    var o = this.currentView;
                    if (!!o) return this._empty(o), o
                },
                _detachView: function(o) {
                    var C = o._isAttached && !this._shouldDisableMonitoring(),
                        A = this._isReplaced;
                    C && N(o, "before:detach", o), A ? this.Dom.replaceEl(this.el, o.el) : this.detachHtml(), C && (o._isAttached = !1, N(o, "detach", o))
                },
                detachHtml: function() {
                    this.Dom.detachContents(this.el, this.$el)
                },
                hasView: function() {
                    return !!this.currentView
                },
                reset: function(o) {
                    return this.empty(o), this.$el && (this.el = this._initEl), delete this.$el, this
                },
                destroy: function(o) {
                    return this._isDestroyed ? this : (this.reset(o), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, g.prototype.destroy.apply(this, arguments))
                }
            }, {
                setDomApi: j
            }),
            Ne = function(y, o) {
                return y instanceof ge ? y : Ve(y, o)
            };

        function Ve(y, o) {
            var C = i.extend({}, o);
            if (i.isString(y)) return i.extend(C, {
                el: y
            }), pt(C);
            if (i.isFunction(y)) return i.extend(C, {
                regionClass: y
            }), pt(C);
            if (i.isObject(y)) return y.selector && k("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(C, {
                el: y.selector
            }, y), pt(C);
            throw new be({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(y) {
            var o = y.regionClass,
                C = i.omit(y, "regionClass");
            return new o(C)
        }
        var jt = {
                regionClass: ge,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    O(this._regions, "reset")
                },
                addRegion: function(o, C) {
                    var A = {};
                    return A[o] = C, this.addRegions(A)[o]
                },
                addRegions: function(o) {
                    if (!i.isEmpty(o)) return o = this.normalizeUIValues(o, ["selector", "el"]), this.regions = i.extend({}, this.regions, o), this._addRegions(o)
                },
                _addRegions: function(o) {
                    var C = this,
                        A = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(o, function(Q, xe, qe) {
                        return Q[qe] = Ne(xe, A), C._addRegion(Q[qe], qe), Q
                    }, {})
                },
                _addRegion: function(o, C) {
                    this.triggerMethod("before:add:region", this, C, o), o._parentView = this, o._name = C, this._regions[C] = o, this.triggerMethod("add:region", this, C, o)
                },
                removeRegion: function(o) {
                    var C = this._regions[o];
                    return this._removeRegion(C, o), C
                },
                removeRegions: function() {
                    var o = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), o
                },
                _removeRegion: function(o, C) {
                    this.triggerMethod("before:remove:region", this, C, o), o.destroy(), this.triggerMethod("remove:region", this, C, o)
                },
                _removeReferences: function(o) {
                    delete this.regions[o], delete this._regions[o]
                },
                emptyRegions: function() {
                    var o = this.getRegions();
                    return O(o, "empty"), o
                },
                hasRegion: function(o) {
                    return !!this.getRegion(o)
                },
                getRegion: function(o) {
                    return this._isRendered || this.render(), this._regions[o]
                },
                _getRegions: function() {
                    return i.clone(this._regions)
                },
                getRegions: function() {
                    return this._isRendered || this.render(), this._getRegions()
                },
                showChildView: function(o, C) {
                    for (var A = this.getRegion(o), Q = arguments.length, xe = Array(Q > 2 ? Q - 2 : 0), qe = 2; qe < Q; qe++) xe[qe - 2] = arguments[qe];
                    return A.show.apply(A, [C].concat(xe))
                },
                detachChildView: function(o) {
                    return this.getRegion(o).detachView()
                },
                getChildView: function(o) {
                    return this.getRegion(o).currentView
                }
            },
            Ye = {
                render: function(o, C) {
                    if (!o) throw new be({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var A = i.isFunction(o) ? o : S.get(o);
                    return A(C)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, In), oe(this), this._initBehaviors(), this._initRegions();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                serializeData: function() {
                    return !this.model && !this.collection ? {} : this.model ? this.serializeModel() : {
                        items: this.serializeCollection()
                    }
                },
                serializeModel: function() {
                    return this.model ? i.clone(this.model.attributes) : {}
                },
                serializeCollection: function() {
                    return this.collection ? this.collection.map(function(o) {
                        return i.clone(o.attributes)
                    }) : {}
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = I(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var o = this.getTemplate();
                    if (o === !1) {
                        k("template:false is deprecated.  Use _.noop.");
                        return
                    }
                    var C = this.mixinTemplateContext(this.serializeData()),
                        A = this._renderHtml(o, C);
                    this.attachElContent(A)
                },
                _renderHtml: function(o, C) {
                    return Ye.render(o, C, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        C = i.result(this, "templateContext");
                    return i.extend(o, C)
                },
                attachElContent: function(o) {
                    return this.Dom.setContents(this.el, o, this.$el), this
                },
                _removeChildren: function() {
                    this.removeRegions()
                },
                _getImmediateChildren: function() {
                    return i.chain(this._getRegions()).map("currentView").compact().value()
                }
            }, {
                setRenderer: function(o) {
                    return this.prototype._renderHtml = o, this
                },
                setDomApi: j
            });
        i.extend(Pn.prototype, W, jt);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(it, function(A) {
                    o[A] = function() {
                        var Q = i.result(this, C),
                            xe = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Q].concat(xe))
                    }
                })
            },
            gi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Dn(gi.prototype, "_getViews"), i.extend(gi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(o, C) {
                return this._add(o, C)._updateLength()
            },
            _add: function(o, C) {
                var A = o.cid;
                return this._views[A] = o, o.model && (this._indexByModel[o.model.cid] = A), C && (this._indexByCustom[C] = A), this
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var C = this._indexByModel[o];
                return this.findByCid(C)
            },
            findByCustom: function(o) {
                var C = this._indexByCustom[o];
                return this.findByCid(C)
            },
            findByIndex: function(o) {
                return i.values(this._views)[o]
            },
            findByCid: function(o) {
                return this._views[o]
            },
            remove: function(o) {
                return this._remove(o)._updateLength()
            },
            _remove: function(o) {
                var C = o.cid;
                return o.model && delete this._indexByModel[o.model.cid], i.some(this._indexByCustom, i.bind(function(A, Q) {
                    if (A === C) return delete this._indexByCustom[Q], !0
                }, this)), delete this._views[C], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var Sr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Sr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var o = this._isAttached && this.monitorViewEvents !== !1,
                        C = o ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(C, function(A) {
                        N(A, "before:attach", A)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(A) {
                        A._isAttached = !0, N(A, "attach", A)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(o, C, A) {
                    var Q = A.at !== void 0 && (A.index || C.indexOf(o));
                    (this.filter || Q === !1) && (Q = i.indexOf(this._filteredSortedModels(Q), o)), this._shouldAddChild(o, Q) && (this._destroyEmptyView(), this._addChild(o, Q))
                },
                _onCollectionUpdate: function(o, C) {
                    var A = C.changes;
                    this._removeChildModels(A.removed)
                },
                _removeChildModels: function(o) {
                    var C = this._getRemovedViews(o);
                    !C.length || (this.children._updateLength(), this._updateIndices(C, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(o) {
                    var C = this;
                    return i.reduce(o, function(A, Q) {
                        var xe = Q && C.children.findByModel(Q);
                        return !xe || xe._isDestroyed || (C._removeChildView(xe), A.push(xe)), A
                    }, [])
                },
                _removeChildView: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, U(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = I(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this._isRendered && !this._isDestroyed,
                        xe = this.filter !== o,
                        qe = Q && xe && !A;
                    if (qe) {
                        var It = this._filteredSortedModels();
                        this.filter = o;
                        var Xt = this._filteredSortedModels();
                        this._applyModelDeltas(Xt, It)
                    } else this.filter = o;
                    return this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _applyModelDeltas: function(o, C) {
                    var A = this,
                        Q = {};
                    i.each(o, function(qe, It) {
                        var Xt = !A.children.findByModel(qe);
                        Xt && A._onCollectionAdd(qe, A.collection, {
                            at: It
                        }), Q[qe.cid] = !0
                    });
                    var xe = i.filter(C, function(qe) {
                        return !Q[qe.cid] && A.children.findByModel(qe)
                    });
                    this._removeChildModels(xe)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Q = i.some(A, function(Xt) {
                        return !C.findByModel(Xt)
                    });
                    if (Q) this.render();
                    else {
                        var xe = [],
                            qe = i.reduce(this.children._views, function(Xt, Gn) {
                                var Nn = i.indexOf(A, Gn.model);
                                return Nn === -1 ? (xe.push(Gn.model), Xt) : (Gn._index = Nn, Xt[Nn] = Gn.el, Xt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(qe, function(Xt) {
                            o.Dom.appendContents(It, Xt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(xe), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var o = this,
                        C = this._filteredSortedModels(),
                        A = i.find(C, function(Q, xe) {
                            var qe = o.children.findByModel(Q);
                            return !qe || qe._index !== xe
                        });
                    A && this.resortView()
                },
                _emptyViewIndex: -1,
                _appendReorderedChildren: function(o) {
                    this.Dom.appendContents(this.el, o, {
                        _$el: this.$el
                    })
                },
                _renderChildren: function() {
                    this._isRendered && (this._destroyEmptyView(), this._destroyChildren());
                    var o = this._filteredSortedModels();
                    this.isEmpty({
                        processedModels: o
                    }) ? this._showEmptyView() : (this.triggerMethod("before:render:children", this), this._startBuffering(), this._showCollection(o), this._endBuffering(), this.triggerMethod("render:children", this))
                },
                _createView: function(o, C) {
                    var A = this._getChildView(o),
                        Q = this._getChildViewOptions(o, C),
                        xe = this.buildChildView(o, A, Q);
                    return xe
                },
                _setupChildView: function(o, C) {
                    oe(o), this._proxyChildViewEvents(o), this.sort && (o._index = C)
                },
                _showCollection: function(o) {
                    i.each(o, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(o) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        A = this.collection.models;
                    if (o = Math.min(Math.max(o, 0), A.length - 1), C) {
                        var Q = void 0;
                        o && (Q = A[o], A = A.slice(0, o).concat(A.slice(o + 1))), A = this._sortModelsBy(A, C), Q && A.splice(o, 0, Q)
                    }
                    return A = this._filterModels(A), A
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(o) {
                    var C = this;
                    return this.filter && (o = i.filter(o, function(A, Q) {
                        return C._shouldAddChild(A, Q)
                    })), o
                },
                _sortModelsBy: function(o, C) {
                    return typeof C == "string" ? i.sortBy(o, function(A) {
                        return A.get(C)
                    }) : C.length === 1 ? i.sortBy(o, i.bind(C, this)) : i.clone(o).sort(i.bind(C, this))
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (o && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var C = new n.Model,
                            A = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(A) && (A = A.call(this, C, this._emptyViewIndex));
                        var Q = this.buildChildView(C, o, A);
                        this.triggerMethod("before:render:empty", this, Q), this.addChildView(Q, 0), this.triggerMethod("render:empty", this, Q)
                    }
                },
                _destroyEmptyView: function() {
                    this._showingEmptyView && (this.triggerMethod("before:remove:empty", this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty", this))
                },
                _getEmptyView: function() {
                    var o = this.emptyView;
                    if (!!o) return this._getView(o)
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(o, C) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, C)
                },
                _addChild: function(o, C) {
                    var A = this._createView(o, C);
                    return this.addChildView(A, C), A
                },
                _getChildViewOptions: function(o, C) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o, C) : this.childViewOptions
                },
                addChildView: function(o, C) {
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, C), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), L(o), this._attachView(o, C), this.triggerMethod("add:child", this, o), o
                },
                _updateIndices: function(o, C) {
                    if (!!this.sort) {
                        if (!C) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, xe) {
                                Q._index = xe
                            });
                            return
                        }
                        var A = i.isArray(o) ? i.max(o, "_index") : o;
                        i.isObject(A) && i.each(this.children._views, function(Q) {
                            Q._index >= A._index && (Q._index += 1)
                        })
                    }
                },
                _attachView: function(o, C) {
                    var A = !o._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    A && N(o, "before:attach", o), this.attachHtml(this, o, C), A && (o._isAttached = !0, N(o, "attach", o))
                },
                buildChildView: function(o, C, A) {
                    var Q = i.extend({
                        model: o
                    }, A);
                    return new C(Q)
                },
                removeChildView: function(o) {
                    return !o || o._isDestroyed || (this._removeChildView(o), this.children._updateLength(), this._updateIndices(o, !1)), o
                },
                isEmpty: function(o) {
                    var C = void 0;
                    return i.result(o, "processedModels") ? C = o.processedModels : (C = this.collection ? this.collection.models : [], C = this._filterModels(C)), C.length === 0
                },
                attachBuffer: function(o, C) {
                    this.Dom.appendContents(o.el, C, {
                        _$el: o.$el
                    })
                },
                _createBuffer: function() {
                    var o = this,
                        C = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(A) {
                        o.Dom.appendContents(C, A.el, {
                            _$contents: A.$el
                        })
                    }), C
                },
                attachHtml: function(o, C, A) {
                    o._isBuffering ? o._bufferedChildren.splice(A, 0, C) : o._insertBefore(C, A) || o._insertAfter(C)
                },
                _insertBefore: function(o, C) {
                    var A = void 0,
                        Q = this.sort && C < this.children.length - 1;
                    return Q && (A = i.find(this.children._views, function(xe) {
                        return xe._index === C + 1
                    })), A ? (this.beforeEl(A.el, o.el), !0) : !1
                },
                beforeEl: function(o, C) {
                    this.$(o).before(C)
                },
                _insertAfter: function(o) {
                    this.Dom.appendContents(this.el, o.el, {
                        _$el: this.$el,
                        _$contents: o.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new gi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(o) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(o, C) {
                    var A = this.filter;
                    return !i.isFunction(A) || A.call(this, o, C, this.collection)
                }
            }, {
                setDomApi: j
            });
        i.extend(kn.prototype, W);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function kr(y, o) {
            return o.model && o.model.get(y)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(o) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    A = o.cid;
                this._viewsByCid[A] = o, o.model && (this._indexByModel[o.model.cid] = A), this._views.splice(C, 0, o), this._updateLength()
            },
            _sort: function(o, C) {
                return typeof o == "string" ? (o = i.partial(kr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
            },
            _sortBy: function(o) {
                var C = i.sortBy(this._views, o);
                return this._set(C), C
            },
            _set: function(o) {
                this._views.length = 0, this._views.push.apply(this._views, o.slice(0)), this._updateLength()
            },
            _swap: function(o, C) {
                var A = this.findIndexByView(o),
                    Q = this.findIndexByView(C);
                if (!(A === -1 || Q === -1)) {
                    var xe = this._views[A];
                    this._views[A] = this._views[Q], this._views[Q] = xe
                }
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var C = this._indexByModel[o];
                return this.findByCid(C)
            },
            findByIndex: function(o) {
                return this._views[o]
            },
            findIndexByView: function(o) {
                return this._views.indexOf(o)
            },
            findByCid: function(o) {
                return this._viewsByCid[o]
            },
            hasView: function(o) {
                return !!this.findByCid(o.cid)
            },
            _remove: function(o) {
                if (!!this._viewsByCid[o.cid]) {
                    o.model && delete this._indexByModel[o.model.cid], delete this._viewsByCid[o.cid];
                    var C = this.findIndexByView(o);
                    this._views.splice(C, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            mi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Tr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new sn
                },
                getEmptyRegion: function() {
                    return this._emptyRegion && !this._emptyRegion.isDestroyed() ? this._emptyRegion : (this._emptyRegion = new ge({
                        el: this.el,
                        replaceElement: !1
                    }), this._emptyRegion._parentView = this, this._emptyRegion)
                },
                _initialEvents: function() {
                    this.listenTo(this.collection, {
                        sort: this._onCollectionSort,
                        reset: this._onCollectionReset,
                        update: this._onCollectionUpdate
                    })
                },
                _onCollectionSort: function(o, C) {
                    var A = C.add,
                        Q = C.merge,
                        xe = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || A || xe || Q || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(o, C) {
                    var A = C.changes,
                        Q = A.removed.length && this._removeChildModels(A.removed);
                    this._addedViews = A.added.length && this._addChildModels(A.added), this._detachChildren(Q), this._showChildren(), this._removeChildViews(Q)
                },
                _removeChildModels: function(o) {
                    var C = this;
                    return i.reduce(o, function(A, Q) {
                        var xe = C._removeChildModel(Q);
                        return xe && A.push(xe), A
                    }, [])
                },
                _removeChildModel: function(o) {
                    var C = this.children.findByModel(o);
                    return C && this._removeChild(C), C
                },
                _removeChild: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), this.triggerMethod("remove:child", this, o)
                },
                _addChildModels: function(o) {
                    return i.map(o, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(o) {
                    var C = this._createChildView(o);
                    return this._addChild(C), C
                },
                _createChildView: function(o) {
                    var C = this._getChildView(o),
                        A = this._getChildViewOptions(o),
                        Q = this.buildChildView(o, C, A);
                    return Q
                },
                _addChild: function(o, C) {
                    this.triggerMethod("before:add:child", this, o), this._setupChildView(o), this.children._add(o, C), this.triggerMethod("add:child", this, o)
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(o, C) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, C)
                },
                _getChildViewOptions: function(o) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o) : this.childViewOptions
                },
                buildChildView: function(o, C, A) {
                    var Q = i.extend({
                        model: o
                    }, A);
                    return new C(Q)
                },
                _setupChildView: function(o) {
                    oe(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = I(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._destroyChildren(), this.children._init(), this.collection && this._addChildModels(this.collection.models), this._showChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                sort: function() {
                    return this._isDestroyed ? this : this.children.length ? (this._showChildren(), this) : this
                },
                _showChildren: function() {
                    if (this.isEmpty()) {
                        this._showEmptyView();
                        return
                    }
                    this._sortChildren(), this.filter()
                },
                isEmpty: function(o) {
                    return o || !this.children.length
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (!!o) {
                        var C = this._getEmptyViewOptions(),
                            A = this.getEmptyRegion();
                        A.show(new o(C))
                    }
                },
                _getEmptyView: function() {
                    var o = this.emptyView;
                    if (!!o) return this._getView(o)
                },
                _destroyEmptyView: function() {
                    var o = this.getEmptyRegion();
                    o.hasView() && o.empty()
                },
                _getEmptyViewOptions: function() {
                    var o = this.emptyViewOptions || this.childViewOptions;
                    return i.isFunction(o) ? o.call(this) : o
                },
                _sortChildren: function() {
                    var o = this.getComparator();
                    !o || (delete this._addedViews, this.triggerMethod("before:sort", this), this.children._sort(o, this), this.triggerMethod("sort", this))
                },
                setComparator: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this.viewComparator !== o,
                        xe = Q && !A;
                    return this.viewComparator = o, xe && this.sort(), this
                },
                removeComparator: function(o) {
                    return this.setComparator(null, o)
                },
                getComparator: function() {
                    return this.viewComparator ? this.viewComparator : !this.sortWithCollection || this.viewComparator === !1 || !this.collection ? !1 : this._viewComparator
                },
                _viewComparator: function(o) {
                    return this.collection.indexOf(o.model)
                },
                filter: function() {
                    if (this._isDestroyed) return this;
                    if (!this.children.length) return this;
                    var o = this._filterChildren();
                    return this._renderChildren(o), this
                },
                _filterChildren: function() {
                    var o = this,
                        C = this._getFilter(),
                        A = this._addedViews;
                    if (delete this._addedViews, !C) return A || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Q = [],
                        xe = [];
                    return i.each(this.children._views, function(qe, It, Xt) {
                        (C.call(o, qe, It, Xt) ? Q : xe).push(qe)
                    }), this._detachChildren(xe), this.triggerMethod("filter", this, Q, xe), Q
                },
                _getFilter: function() {
                    var o = this.getFilter();
                    if (!o) return !1;
                    if (i.isFunction(o)) return o;
                    if (i.isObject(o)) {
                        var C = i.matches(o);
                        return function(A) {
                            return C(A.model && A.model.attributes)
                        }
                    }
                    if (i.isString(o)) return function(A) {
                        return A.model && A.model.get(o)
                    };
                    throw new be({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this.viewFilter !== o,
                        xe = Q && !A;
                    return this.viewFilter = o, xe && this.filter(), this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _detachChildren: function(o) {
                    i.each(o, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(o) {
                    var C = o._isAttached && this.monitorViewEvents !== !1;
                    C && N(o, "before:detach", o), this.detachHtml(o), C && (o._isAttached = !1, N(o, "detach", o))
                },
                detachHtml: function(o) {
                    this.Dom.detachEl(o.el, o.$el)
                },
                _renderChildren: function(o) {
                    if (this.isEmpty(!o.length)) {
                        this._showEmptyView();
                        return
                    }
                    this._destroyEmptyView(), this.triggerMethod("before:render:children", this, o);
                    var C = this._getBuffer(o);
                    this._attachChildren(C, o), this.triggerMethod("render:children", this, o)
                },
                _attachChildren: function(o, C) {
                    var A = this._isAttached && this.monitorViewEvents !== !1;
                    C = A ? C : [], i.each(C, function(Q) {
                        Q._isAttached || N(Q, "before:attach", Q)
                    }), this.attachHtml(o), i.each(C, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, N(Q, "attach", Q))
                    })
                },
                _getBuffer: function(o) {
                    var C = this,
                        A = this.Dom.createBuffer();
                    return i.each(o, function(Q) {
                        L(Q), C.Dom.appendContents(A, Q.el, {
                            _$contents: Q.$el
                        })
                    }), A
                },
                attachHtml: function(o) {
                    this.Dom.appendContents(this.el, o, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(o, C) {
                    if (!this.children.hasView(o) || !this.children.hasView(C)) throw new be({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(o, C), this.Dom.swapEl(o.el, C.el), this.Dom.hasEl(this.el, o.el) !== this.Dom.hasEl(this.el, C.el) && this.filter(), this
                },
                addChildView: function(o, C) {
                    return !o || o._isDestroyed || ((!C || C >= this.children.length) && (this._addedViews = [o]), this._addChild(o, C), this._showChildren()), o
                },
                detachChildView: function(o) {
                    return this.removeChildView(o, {
                        shouldDetach: !0
                    }), o
                },
                removeChildView: function(o, C) {
                    return o && (this._removeChildView(o, C), this._removeChild(o), this.isEmpty() && this._showEmptyView(), o)
                },
                _removeChildViews: function(o) {
                    i.each(o, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.shouldDetach;
                    o.off("destroy", this.removeChildView, this), A ? this._detachChildView(o) : this._destroyChildView(o), this.stopListening(o)
                },
                _destroyChildView: function(o) {
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, U(o))
                },
                _removeChildren: function() {
                    this._destroyChildren();
                    var o = this.getEmptyRegion();
                    o.destroy(), delete this._addedViews
                },
                _destroyChildren: function() {
                    !this.children || !this.children.length || (this.triggerMethod("before:destroy:children", this), this.monitorViewEvents === !1 && this.Dom.detachContents(this.el, this.$el), i.each(this.children._views, i.bind(this._removeChildView, this)), this.triggerMethod("destroy:children", this))
                }
            }, {
                setDomApi: j
            });
        i.extend(mi.prototype, W);
        var $i = ["childViewContainer", "template", "templateContext"],
            vi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, $i), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) return this.constructor;
                    if (C = this._getView(C, o), !C) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                serializeData: function() {
                    return this.serializeModel()
                },
                render: function() {
                    return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                renderChildren: function() {
                    (this._isRendered || this._isRendering) && kn.prototype._renderChildren.call(this)
                },
                attachBuffer: function(o, C) {
                    var A = this.getChildViewContainer(o);
                    this.Dom.appendContents(A[0], C, {
                        _$el: A
                    })
                },
                _insertAfter: function(o) {
                    var C = this.getChildViewContainer(this, o);
                    this.Dom.appendContents(C[0], o.el, {
                        _$el: C,
                        _$contents: o.$el
                    })
                },
                _appendReorderedChildren: function(o) {
                    var C = this.getChildViewContainer(this);
                    this.Dom.appendContents(C[0], o, {
                        _$el: C
                    })
                },
                getChildViewContainer: function(o, C) {
                    if (o.$childViewContainer) return o.$childViewContainer;
                    var A = void 0,
                        Q = o.childViewContainer;
                    if (Q) {
                        var xe = i.result(o, "childViewContainer");
                        if (xe.charAt(0) === "@" && o.ui ? A = o.ui[xe.substr(4)] : A = this.$(xe), A.length <= 0) throw new be({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + o.childViewContainer
                        })
                    } else A = o.$el;
                    return o.$childViewContainer = A, A
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            yi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(vi.prototype, yi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Fi = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
                },
                $: function() {
                    return this.view.$.apply(this.view, arguments)
                },
                destroy: function() {
                    return this.stopListening(), this.view._removeBehavior(this), this
                },
                proxyViewProperties: function() {
                    return this.$el = this.view.$el, this.el = this.view.el, this
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this
                },
                getUI: function(o) {
                    return this._getUI(o)
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.view.model, this.view.collection), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.view.model, this.view.collection), this
                },
                getEvents: function() {
                    var o = this,
                        C = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(C, function(A, Q, xe) {
                        return i.isFunction(Q) || (Q = o[Q]), Q && (xe = De(xe, o.cid), A[xe] = i.bind(Q, o)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(Fi.prototype, ke, ct, Je);
        var mn = ["region", "regionClass"],
            zi = g.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, mn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: ge,
                _initRegion: function() {
                    var o = this.region;
                    if (!!o) {
                        var C = {
                            regionClass: this.regionClass
                        };
                        this._region = Ne(o, C)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(o) {
                    for (var C = this.getRegion(), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    return C.show.apply(C, [o].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(o) {
                    return this.triggerMethod("before:start", this, o), this.triggerMethod("start", this, o), this
                }
            }),
            wi = ["appRoutes", "controller"],
            Hn = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, wi), n.Router.apply(this, arguments);
                    var C = this.appRoutes,
                        A = this._getController();
                    this.processAppRoutes(A, C), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(o, C) {
                    var A = this._getController();
                    return this._addAppRoute(A, o, C), this
                },
                _processOnRoute: function(o, C) {
                    if (i.isFunction(this.onRoute)) {
                        var A = i.invert(this.appRoutes)[o];
                        this.onRoute(o, A, C)
                    }
                },
                processAppRoutes: function(o, C) {
                    var A = this;
                    if (!C) return this;
                    var Q = i.keys(C).reverse();
                    return i.each(Q, function(xe) {
                        A._addAppRoute(o, xe, C[xe])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, C, A) {
                    var Q = o[A];
                    if (!Q) throw new be('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Q, o))
                },
                triggerMethod: v
            });
        i.extend(Hn.prototype, qt);

        function Hi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var bi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = bi, this
        }, Ze.bindEvents = m(Se), Ze.unbindEvents = m(Te), Ze.bindRequests = m(Ke), Ze.unbindRequests = m(dt), Ze.mergeOptions = m(D), Ze.getOption = m(M), Ze.normalizeMethods = m(Y), Ze.extend = _, Ze.isNodeAttached = I, Ze.deprecate = k, Ze.triggerMethod = m(v), Ze.triggerMethodOn = N, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = oe, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Hi, Ze.Application = zi, Ze.AppRouter = Hn, Ze.Renderer = Ye, Ze.TemplateCache = S, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = Fi, Ze.Region = ge, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Le, Ze.VERSION = f, Ze.DomApi = V, Ze.setDomApi = function(y) {
            kn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), ge.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(bc);
const Et = bc.exports;
class yh {
    static setup() {
        gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        })
    }
    static pageView(e) {
        gtag("event", "page_view", {
            page_title: e,
            page_location: `https://jackbox.tv/${e}`
        })
    }
    static gameStarted(e, n) {
        const i = {
            tag: e
        };
        n.isUGC !== void 0 && (i.is_ugc = n.isUGC), n.isSequel !== void 0 && (i.is_sequel = n.isSequel), n.locale !== void 0 && (i.locale = n.locale), n.mode !== void 0 && (i.mode = n.mode), n.numberOfPlayer !== void 0 && (i.number_of_players = n.numberOfPlayer), gtag("event", "game_start", i)
    }
    static bannerClick(e, n) {
        gtag("event", "banner_click", {
            url: e,
            location: n
        })
    }
    static externalLinkClick(e, n) {
        gtag("event", "external_link_click", {
            url: e,
            location: n
        })
    }
    static galleryClick(e, n) {
        gtag("event", "gallery_click", {
            category_id: e,
            location: n
        })
    }
    static galleryImpression(e, n) {
        gtag("event", "gallery_impression", {
            category_id: e,
            location: n
        })
    }
    static moderatorConnected(e) {
        gtag("event", "moderator_connected", {
            tag: e
        })
    }
    static itemModerated(e, n) {
        gtag("event", "item_moderated", {
            tag: e,
            was_rejected: n
        })
    }
    static playerKicked(e, n) {
        gtag("event", "player_kicked", {
            tag: e,
            is_lobby: n
        })
    }
}

function wh() {
    this.__data__ = [], this.size = 0
}
var bh = wh;

function Ch(t, e) {
    return t === e || t !== t && e !== e
}
var ao = Ch,
    xh = ao;

function Eh(t, e) {
    for (var n = t.length; n--;)
        if (xh(t[n][0], e)) return n;
    return -1
}
var lo = Eh,
    _h = lo,
    Sh = Array.prototype,
    kh = Sh.splice;

function Th(t) {
    var e = this.__data__,
        n = _h(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : kh.call(e, n, 1), --this.size, !0
}
var Ah = Th,
    Oh = lo;

function Rh(t) {
    var e = this.__data__,
        n = Oh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Ih = Rh,
    Dh = lo;

function Lh(t) {
    return Dh(this.__data__, t) > -1
}
var Mh = Lh,
    Ph = lo;

function Nh(t, e) {
    var n = this.__data__,
        i = Ph(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Vh = Nh,
    Bh = bh,
    $h = Ah,
    jh = Ih,
    Fh = Mh,
    zh = Vh;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Bh;
wr.prototype.delete = $h;
wr.prototype.get = jh;
wr.prototype.has = Fh;
wr.prototype.set = zh;
var co = wr,
    Hh = co;

function Gh() {
    this.__data__ = new Hh, this.size = 0
}
var Uh = Gh;

function qh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Wh = qh;

function Xh(t) {
    return this.__data__.get(t)
}
var Yh = Xh;

function Kh(t) {
    return this.__data__.has(t)
}
var Jh = Kh,
    Qh = typeof vt == "object" && vt && vt.Object === Object && vt,
    Cc = Qh,
    Zh = Cc,
    ed = typeof self == "object" && self && self.Object === Object && self,
    td = Zh || ed || Function("return this")(),
    br = td,
    nd = br,
    id = nd.Symbol,
    xc = id,
    gl = xc,
    Ec = Object.prototype,
    rd = Ec.hasOwnProperty,
    sd = Ec.toString,
    Xr = gl ? gl.toStringTag : void 0;

function od(t) {
    var e = rd.call(t, Xr),
        n = t[Xr];
    try {
        t[Xr] = void 0;
        var i = !0
    } catch {}
    var a = sd.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), a
}
var ad = od,
    ld = Object.prototype,
    cd = ld.toString;

function ud(t) {
    return cd.call(t)
}
var hd = ud,
    ml = xc,
    dd = ad,
    fd = hd,
    pd = "[object Null]",
    gd = "[object Undefined]",
    vl = ml ? ml.toStringTag : void 0;

function md(t) {
    return t == null ? t === void 0 ? gd : pd : vl && vl in Object(t) ? dd(t) : fd(t)
}
var uo = md;

function vd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Vi = vd,
    yd = uo,
    wd = Vi,
    bd = "[object AsyncFunction]",
    Cd = "[object Function]",
    xd = "[object GeneratorFunction]",
    Ed = "[object Proxy]";

function _d(t) {
    if (!wd(t)) return !1;
    var e = yd(t);
    return e == Cd || e == xd || e == bd || e == Ed
}
var Va = _d,
    Sd = br,
    kd = Sd["__core-js_shared__"],
    Td = kd,
    Qo = Td,
    yl = function() {
        var t = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Ad(t) {
    return !!yl && yl in t
}
var Od = Ad,
    Rd = Function.prototype,
    Id = Rd.toString;

function Dd(t) {
    if (t != null) {
        try {
            return Id.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Ld = Dd,
    Md = Va,
    Pd = Od,
    Nd = Vi,
    Vd = Ld,
    Bd = /[\\^$.*+?()[\]{}|]/g,
    $d = /^\[object .+?Constructor\]$/,
    jd = Function.prototype,
    Fd = Object.prototype,
    zd = jd.toString,
    Hd = Fd.hasOwnProperty,
    Gd = RegExp("^" + zd.call(Hd).replace(Bd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ud(t) {
    if (!Nd(t) || Pd(t)) return !1;
    var e = Md(t) ? Gd : $d;
    return e.test(Vd(t))
}
var qd = Ud;

function Wd(t, e) {
    return t == null ? void 0 : t[e]
}
var Xd = Wd,
    Yd = qd,
    Kd = Xd;

function Jd(t, e) {
    var n = Kd(t, e);
    return Yd(n) ? n : void 0
}
var Ba = Jd,
    Qd = Ba,
    Zd = br,
    ef = Qd(Zd, "Map"),
    _c = ef,
    tf = Ba,
    nf = tf(Object, "create"),
    ho = nf,
    wl = ho;

function rf() {
    this.__data__ = wl ? wl(null) : {}, this.size = 0
}
var sf = rf;

function of(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var af = of,
    lf = ho,
    cf = "__lodash_hash_undefined__",
    uf = Object.prototype,
    hf = uf.hasOwnProperty;

function df(t) {
    var e = this.__data__;
    if (lf) {
        var n = e[t];
        return n === cf ? void 0 : n
    }
    return hf.call(e, t) ? e[t] : void 0
}
var ff = df,
    pf = ho,
    gf = Object.prototype,
    mf = gf.hasOwnProperty;

function vf(t) {
    var e = this.__data__;
    return pf ? e[t] !== void 0 : mf.call(e, t)
}
var yf = vf,
    wf = ho,
    bf = "__lodash_hash_undefined__";

function Cf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = wf && e === void 0 ? bf : e, this
}
var xf = Cf,
    Ef = sf,
    _f = af,
    Sf = ff,
    kf = yf,
    Tf = xf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = Ef;
Cr.prototype.delete = _f;
Cr.prototype.get = Sf;
Cr.prototype.has = kf;
Cr.prototype.set = Tf;
var Af = Cr,
    bl = Af,
    Of = co,
    Rf = _c;

function If() {
    this.size = 0, this.__data__ = {
        hash: new bl,
        map: new(Rf || Of),
        string: new bl
    }
}
var Df = If;

function Lf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Mf = Lf,
    Pf = Mf;

function Nf(t, e) {
    var n = t.__data__;
    return Pf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Nf,
    Vf = fo;

function Bf(t) {
    var e = Vf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var $f = Bf,
    jf = fo;

function Ff(t) {
    return jf(this, t).get(t)
}
var zf = Ff,
    Hf = fo;

function Gf(t) {
    return Hf(this, t).has(t)
}
var Uf = Gf,
    qf = fo;

function Wf(t, e) {
    var n = qf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Xf = Wf,
    Yf = Df,
    Kf = $f,
    Jf = zf,
    Qf = Uf,
    Zf = Xf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = Yf;
xr.prototype.delete = Kf;
xr.prototype.get = Jf;
xr.prototype.has = Qf;
xr.prototype.set = Zf;
var ep = xr,
    tp = co,
    np = _c,
    ip = ep,
    rp = 200;

function sp(t, e) {
    var n = this.__data__;
    if (n instanceof tp) {
        var i = n.__data__;
        if (!np || i.length < rp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new ip(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var op = sp,
    ap = co,
    lp = Uh,
    cp = Wh,
    up = Yh,
    hp = Jh,
    dp = op;

function Er(t) {
    var e = this.__data__ = new ap(t);
    this.size = e.size
}
Er.prototype.clear = lp;
Er.prototype.delete = cp;
Er.prototype.get = up;
Er.prototype.has = hp;
Er.prototype.set = dp;
var fp = Er,
    pp = Ba,
    gp = function() {
        try {
            var t = pp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Sc = gp,
    Cl = Sc;

function mp(t, e, n) {
    e == "__proto__" && Cl ? Cl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var $a = mp,
    vp = $a,
    yp = ao;

function wp(t, e, n) {
    (n !== void 0 && !yp(t[e], n) || n === void 0 && !(e in t)) && vp(t, e, n)
}
var kc = wp;

function bp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), m = i(e), _ = m.length; _--;) {
            var k = m[t ? _ : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var Cp = bp,
    xp = Cp,
    Ep = xp(),
    _p = Ep,
    ba = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f ? n.Buffer : void 0,
        _ = m ? m.allocUnsafe : void 0;

    function k(I, D) {
        if (D) return I.slice();
        var M = I.length,
            Y = _ ? _(M) : new I.constructor(M);
        return I.copy(Y), Y
    }
    t.exports = k
})(ba, ba.exports);
var Sp = br,
    kp = Sp.Uint8Array,
    Tp = kp,
    xl = Tp;

function Ap(t) {
    var e = new t.constructor(t.byteLength);
    return new xl(e).set(new xl(t)), e
}
var Op = Ap,
    Rp = Op;

function Ip(t, e) {
    var n = e ? Rp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Dp = Ip;

function Lp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Mp = Lp,
    Pp = Vi,
    El = Object.create,
    Np = function() {
        function t() {}
        return function(e) {
            if (!Pp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Vp = Np;

function Bp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var $p = Bp,
    jp = $p,
    Fp = jp(Object.getPrototypeOf, Object),
    Tc = Fp,
    zp = Object.prototype;

function Hp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || zp;
    return t === n
}
var Ac = Hp,
    Gp = Vp,
    Up = Tc,
    qp = Ac;

function Wp(t) {
    return typeof t.constructor == "function" && !qp(t) ? Gp(Up(t)) : {}
}
var Xp = Wp;

function Yp(t) {
    return t != null && typeof t == "object"
}
var us = Yp,
    Kp = uo,
    Jp = us,
    Qp = "[object Arguments]";

function Zp(t) {
    return Jp(t) && Kp(t) == Qp
}
var eg = Zp,
    _l = eg,
    tg = us,
    Oc = Object.prototype,
    ng = Oc.hasOwnProperty,
    ig = Oc.propertyIsEnumerable,
    rg = _l(function() {
        return arguments
    }()) ? _l : function(t) {
        return tg(t) && ng.call(t, "callee") && !ig.call(t, "callee")
    },
    Rc = rg,
    sg = Array.isArray,
    Ic = sg,
    og = 9007199254740991;

function ag(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= og
}
var Dc = ag,
    lg = Va,
    cg = Dc;

function ug(t) {
    return t != null && cg(t.length) && !lg(t)
}
var ja = ug,
    hg = ja,
    dg = us;

function fg(t) {
    return dg(t) && hg(t)
}
var pg = fg,
    Ks = {
        exports: {}
    };

function gg() {
    return !1
}
var mg = gg;
(function(t, e) {
    var n = br,
        i = mg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        m = f && f.exports === a,
        _ = m ? n.Buffer : void 0,
        k = _ ? _.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(Ks, Ks.exports);
var vg = uo,
    yg = Tc,
    wg = us,
    bg = "[object Object]",
    Cg = Function.prototype,
    xg = Object.prototype,
    Lc = Cg.toString,
    Eg = xg.hasOwnProperty,
    _g = Lc.call(Object);

function Sg(t) {
    if (!wg(t) || vg(t) != bg) return !1;
    var e = yg(t);
    if (e === null) return !0;
    var n = Eg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Lc.call(n) == _g
}
var kg = Sg,
    Tg = uo,
    Ag = Dc,
    Og = us,
    Rg = "[object Arguments]",
    Ig = "[object Array]",
    Dg = "[object Boolean]",
    Lg = "[object Date]",
    Mg = "[object Error]",
    Pg = "[object Function]",
    Ng = "[object Map]",
    Vg = "[object Number]",
    Bg = "[object Object]",
    $g = "[object RegExp]",
    jg = "[object Set]",
    Fg = "[object String]",
    zg = "[object WeakMap]",
    Hg = "[object ArrayBuffer]",
    Gg = "[object DataView]",
    Ug = "[object Float32Array]",
    qg = "[object Float64Array]",
    Wg = "[object Int8Array]",
    Xg = "[object Int16Array]",
    Yg = "[object Int32Array]",
    Kg = "[object Uint8Array]",
    Jg = "[object Uint8ClampedArray]",
    Qg = "[object Uint16Array]",
    Zg = "[object Uint32Array]",
    Lt = {};
Lt[Ug] = Lt[qg] = Lt[Wg] = Lt[Xg] = Lt[Yg] = Lt[Kg] = Lt[Jg] = Lt[Qg] = Lt[Zg] = !0;
Lt[Rg] = Lt[Ig] = Lt[Hg] = Lt[Dg] = Lt[Gg] = Lt[Lg] = Lt[Mg] = Lt[Pg] = Lt[Ng] = Lt[Vg] = Lt[Bg] = Lt[$g] = Lt[jg] = Lt[Fg] = Lt[zg] = !1;

function em(t) {
    return Og(t) && Ag(t.length) && !!Lt[Tg(t)]
}
var tm = em;

function nm(t) {
    return function(e) {
        return t(e)
    }
}
var im = nm,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = Cc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f && n.process,
        _ = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = _
})(Ca, Ca.exports);
var rm = tm,
    sm = im,
    Sl = Ca.exports,
    kl = Sl && Sl.isTypedArray,
    om = kl ? sm(kl) : rm,
    Mc = om;

function am(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Pc = am,
    lm = $a,
    cm = ao,
    um = Object.prototype,
    hm = um.hasOwnProperty;

function dm(t, e, n) {
    var i = t[e];
    (!(hm.call(t, e) && cm(i, n)) || n === void 0 && !(e in t)) && lm(t, e, n)
}
var fm = dm,
    pm = fm,
    gm = $a;

function mm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, m = e.length; ++f < m;) {
        var _ = e[f],
            k = i ? i(n[_], t[_], _, n, t) : void 0;
        k === void 0 && (k = t[_]), a ? gm(n, _, k) : pm(n, _, k)
    }
    return n
}
var vm = mm;

function ym(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var wm = ym,
    bm = 9007199254740991,
    Cm = /^(?:0|[1-9]\d*)$/;

function xm(t, e) {
    var n = typeof t;
    return e = e == null ? bm : e, !!e && (n == "number" || n != "symbol" && Cm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Nc = xm,
    Em = wm,
    _m = Rc,
    Sm = Ic,
    km = Ks.exports,
    Tm = Nc,
    Am = Mc,
    Om = Object.prototype,
    Rm = Om.hasOwnProperty;

function Im(t, e) {
    var n = Sm(t),
        i = !n && _m(t),
        a = !n && !i && km(t),
        f = !n && !i && !a && Am(t),
        m = n || i || a || f,
        _ = m ? Em(t.length, String) : [],
        k = _.length;
    for (var I in t)(e || Rm.call(t, I)) && !(m && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Tm(I, k))) && _.push(I);
    return _
}
var Dm = Im;

function Lm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Mm = Lm,
    Pm = Vi,
    Nm = Ac,
    Vm = Mm,
    Bm = Object.prototype,
    $m = Bm.hasOwnProperty;

function jm(t) {
    if (!Pm(t)) return Vm(t);
    var e = Nm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !$m.call(t, i)) || n.push(i);
    return n
}
var Fm = jm,
    zm = Dm,
    Hm = Fm,
    Gm = ja;

function Um(t) {
    return Gm(t) ? zm(t, !0) : Hm(t)
}
var Vc = Um,
    qm = vm,
    Wm = Vc;

function Xm(t) {
    return qm(t, Wm(t))
}
var Ym = Xm,
    Tl = kc,
    Km = ba.exports,
    Jm = Dp,
    Qm = Mp,
    Zm = Xp,
    Al = Rc,
    Ol = Ic,
    ev = pg,
    tv = Ks.exports,
    nv = Va,
    iv = Vi,
    rv = kg,
    sv = Mc,
    Rl = Pc,
    ov = Ym;

function av(t, e, n, i, a, f, m) {
    var _ = Rl(t, n),
        k = Rl(e, n),
        I = m.get(k);
    if (I) {
        Tl(t, n, I);
        return
    }
    var D = f ? f(_, k, n + "", t, e, m) : void 0,
        M = D === void 0;
    if (M) {
        var Y = Ol(k),
            ne = !Y && tv(k),
            K = !Y && !ne && sv(k);
        D = k, Y || ne || K ? Ol(_) ? D = _ : ev(_) ? D = Qm(_) : ne ? (M = !1, D = Km(k, !0)) : K ? (M = !1, D = Jm(k, !0)) : D = [] : rv(k) || Al(k) ? (D = _, Al(_) ? D = ov(_) : (!iv(_) || nv(_)) && (D = Zm(k))) : M = !1
    }
    M && (m.set(k, D), a(D, k, i, f, m), m.delete(k)), Tl(t, n, D)
}
var lv = av,
    cv = fp,
    uv = kc,
    hv = _p,
    dv = lv,
    fv = Vi,
    pv = Vc,
    gv = Pc;

function Bc(t, e, n, i, a) {
    t !== e && hv(e, function(f, m) {
        if (a || (a = new cv), fv(f)) dv(t, e, m, n, Bc, i, a);
        else {
            var _ = i ? i(gv(t, m), f, m + "", t, e, a) : void 0;
            _ === void 0 && (_ = f), uv(t, m, _)
        }
    }, pv)
}
var mv = Bc;

function vv(t) {
    return t
}
var $c = vv;

function yv(t, e, n) {
    switch (n.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
}
var wv = yv,
    bv = wv,
    Il = Math.max;

function Cv(t, e, n) {
    return e = Il(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Il(i.length - e, 0), m = Array(f); ++a < f;) m[a] = i[e + a];
            a = -1;
            for (var _ = Array(e + 1); ++a < e;) _[a] = i[a];
            return _[e] = n(m), bv(t, this, _)
        }
}
var xv = Cv;

function Ev(t) {
    return function() {
        return t
    }
}
var _v = Ev,
    Sv = _v,
    Dl = Sc,
    kv = $c,
    Tv = Dl ? function(t, e) {
        return Dl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Sv(e),
            writable: !0
        })
    } : kv,
    Av = Tv,
    Ov = 800,
    Rv = 16,
    Iv = Date.now;

function Dv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Iv(),
            a = Rv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Ov) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Lv = Dv,
    Mv = Av,
    Pv = Lv,
    Nv = Pv(Mv),
    Vv = Nv,
    Bv = $c,
    $v = xv,
    jv = Vv;

function Fv(t, e) {
    return jv($v(t, e, Bv), t + "")
}
var zv = Fv,
    Hv = ao,
    Gv = ja,
    Uv = Nc,
    qv = Vi;

function Wv(t, e, n) {
    if (!qv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Gv(n) && Uv(e, n.length) : i == "string" && e in n) ? Hv(n[e], t) : !1
}
var Xv = Wv,
    Yv = zv,
    Kv = Xv;

function Jv(t) {
    return Yv(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            m = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, m && Kv(n[0], n[1], m) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var _ = n[i];
            _ && t(e, _, i, f)
        }
        return e
    })
}
var Qv = Jv,
    Zv = mv,
    ey = Qv,
    ty = ey(function(t, e, n) {
        Zv(t, e, n)
    }),
    ny = ty;
class xa {
    static set(e) {
        if (e && this.isSupported(e)) {
            this.locale = e;
            return
        }
        this.locale = this.getPreferredDeviceLocale()
    }
    static getPreferredDeviceLocale() {
        const e = navigator.languages;
        for (let n = 0; n < e.length; n++)
            if (this.isSupported(e[n])) return e[n];
        return this.supported[0]
    }
    static isSupported(e) {
        return Object.values(this.supported).includes(e)
    }
    static mergeMessages(...e) {
        return ny(e[0], ...e)
    }
}
st(xa, "locale"), st(xa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const fl = class {
    static get serverUrl() {
        var n;
        const e = (n = this.getQueryParam("server")) != null ? n : this.getQueryParam("s");
        return !e || e === "live" ? window.location.hostname : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static toPrecision(e, n) {
        const i = 10 ** n;
        return Math.round((e + Number.EPSILON) * i) / i
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const n = this.sanitizeInput(e).replace(/'/g, "\u2019");
        return this.htmlEscape(n).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
    }
    static sanitizeInput(e) {
        return e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const n = document.createElement("div");
        return n.textContent = e, n.innerHTML
    }
    static htmlTagsToBBCode(e, n) {
        if (!n.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return n.reduce((i, a) => (i.replaceAll(`<${a[0]}>`, `[${a[1]}]`), i.replaceAll(`</${a[0]}>`, `</${a[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const n = new ArrayBuffer(4);
        new DataView(n).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const a = new Uint8Array(n);
        return `${a[1]},${a[2]},${a[3]}`
    }
    static adjustColor(e, n) {
        let i = !1,
            a = e;
        a[0] === "#" && (a = a.slice(1), i = !0);
        const f = parseInt(a, 16),
            m = Math.min(Math.max(0, (f >> 16) * n), 255),
            _ = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (f & 255) * n), 255) | _ << 8 | m << 16).toString(16);
        for (; I.length < a.length;) I = `0${I}`;
        return (i ? "#" : "") + I
    }
    static isInTolerance(e, n, i) {
        return !(Math.abs(e.x - n.x) < i || Math.abs(e.y - n.y) > i)
    }
    static getDistanceBetweenPoints(e, n) {
        const i = [e.x - n.x, e.y - n.y],
            a = Math.hypot(...i);
        return Math.round(a * 100) / 100
    }
    static getMidpoint(e, n) {
        return {
            x: (e.x + n.x) / 2,
            y: (e.y + n.y) / 2
        }
    }
    static getAngleBetweenPoints(e, n) {
        let a = Math.atan2(n.y - e.y, n.x - e.x) * (180 / Math.PI);
        return a < 0 && (a += 360), 360 - a
    }
    static getAngularDistance(e, n) {
        let i = (n - e) % 360;
        const a = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? a * (360 - i) : a * i
    }
    static getVelocity(e, n, i, a) {
        return this.getDistanceBetweenPoints(e, i) / (a - n)
    }
    static isInsideElement(e, n) {
        const i = n.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
};
let Ut = fl;
st(Ut, "queryParams", new URLSearchParams(window.location.search)), st(Ut, "getQueryParam", e => fl.queryParams.get(e)), st(Ut, "sleep", e => new Promise(n => {
    window.setTimeout(n, e)
}));
class en {
    static get namespace() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.namespace) != null ? n : this.defaultNamespace
    }
    static get isDisabled() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.isDisabled) != null ? n : !1
    }
    static get tag() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.tag
    }
    static get code() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.code
    }
    static get isSupported() {
        if (this.isDisabled) return !1;
        try {
            return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
        } catch {
            return !1
        }
    }
    static setup(e, n) {
        var i, a;
        delete window.tv.storage, window.tv.storage = {
            namespace: (a = (i = Ut.getQueryParam("namespace")) != null ? i : Ut.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: Ut.queryParams.has("incognito") || Ut.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), n && (window.tv.storage.code = n.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
    }
    static get(e, n) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, n)) : null
    }
    static set(e, n, i = "none") {
        if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), n)
    }
    static remove(e, n) {
        if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, n))
    }
    static setTag(e) {
        var m;
        const n = e.toLowerCase(),
            i = (m = this.get("tags")) != null ? m : "[]",
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(_ => {
            const k = _.split("-")[0];
            return a !== k
        }), f.push(n), this.set("tags", JSON.stringify(f))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            a = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            f = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!a) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return a
        }
        if (n === "code") {
            if (!f) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return f
        }
        return f && window.localStorage.getItem(f) !== null ? f : a && window.localStorage.getItem(a) !== null ? a : i
    }
    static getScopedSetKey(e, n = "none") {
        if (n === "tag") {
            if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (n === "code") {
            if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        !this.isSupported || Object.keys(window.localStorage).forEach(n => {
            const i = n.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(n)
        })
    }
    static migrateNamespace(e, n) {
        !this.isSupported || Object.keys(window.localStorage).forEach(i => {
            if (!i.startsWith(`${e}-`)) return;
            const a = i.replace(`${e}-`, `${n}:`),
                f = window.localStorage.getItem(i);
            !f || (window.localStorage.setItem(a, f), window.localStorage.removeItem(i))
        })
    }
}
st(en, "defaultNamespace", "tv");
class Ni {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Ni.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!en.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = en.get("galleries") || "[]";
        try {
            const _ = JSON.parse(m) || [];
            if (_.some(k => k.url === f)) return;
            _.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), en.set("galleries", JSON.stringify(_.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!en.isSupported) return;
        const n = en.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), en.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        Ni.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!en.isSupported) return;
        const n = en.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), en.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!en.isSupported) return [];
        const e = new Intl.DateTimeFormat(xa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = en.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const m = new Date(f.time),
                    _ = e.format(m),
                    k = f.url.split("/"),
                    I = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let D = f.categoryId;
                return D || (f.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: I,
                    gameName: D,
                    date: _,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Ea = {
    exports: {}
};
(function(t, e) {
    var n = typeof self < "u" ? self : vt,
        i = function() {
            function f() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return f.prototype = n, new f
        }();
    (function(f) {
        (function(m) {
            var _ = {
                searchParams: "URLSearchParams" in f,
                iterable: "Symbol" in f && "iterator" in Symbol,
                blob: "FileReader" in f && "Blob" in f && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in f,
                arrayBuffer: "ArrayBuffer" in f
            };

            function k(G) {
                return G && DataView.prototype.isPrototypeOf(G)
            }
            if (_.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(G) {
                    return G && I.indexOf(Object.prototype.toString.call(G)) > -1
                };

            function M(G) {
                if (typeof G != "string" && (G = String(G)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(G)) throw new TypeError("Invalid character in header field name");
                return G.toLowerCase()
            }

            function Y(G) {
                return typeof G != "string" && (G = String(G)), G
            }

            function ne(G) {
                var oe = {
                    next: function() {
                        var Ae = G.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return _.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function K(G) {
                this.map = {}, G instanceof K ? G.forEach(function(oe, Ae) {
                    this.append(Ae, oe)
                }, this) : Array.isArray(G) ? G.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : G && Object.getOwnPropertyNames(G).forEach(function(oe) {
                    this.append(oe, G[oe])
                }, this)
            }
            K.prototype.append = function(G, oe) {
                G = M(G), oe = Y(oe);
                var Ae = this.map[G];
                this.map[G] = Ae ? Ae + ", " + oe : oe
            }, K.prototype.delete = function(G) {
                delete this.map[M(G)]
            }, K.prototype.get = function(G) {
                return G = M(G), this.has(G) ? this.map[G] : null
            }, K.prototype.has = function(G) {
                return this.map.hasOwnProperty(M(G))
            }, K.prototype.set = function(G, oe) {
                this.map[M(G)] = Y(oe)
            }, K.prototype.forEach = function(G, oe) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && G.call(oe, this.map[Ae], Ae, this)
            }, K.prototype.keys = function() {
                var G = [];
                return this.forEach(function(oe, Ae) {
                    G.push(Ae)
                }), ne(G)
            }, K.prototype.values = function() {
                var G = [];
                return this.forEach(function(oe) {
                    G.push(oe)
                }), ne(G)
            }, K.prototype.entries = function() {
                var G = [];
                return this.forEach(function(oe, Ae) {
                    G.push([Ae, oe])
                }), ne(G)
            }, _.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

            function re(G) {
                if (G.bodyUsed) return Promise.reject(new TypeError("Already read"));
                G.bodyUsed = !0
            }

            function v(G) {
                return new Promise(function(oe, Ae) {
                    G.onload = function() {
                        oe(G.result)
                    }, G.onerror = function() {
                        Ae(G.error)
                    }
                })
            }

            function N(G) {
                var oe = new FileReader,
                    Ae = v(oe);
                return oe.readAsArrayBuffer(G), Ae
            }

            function q(G) {
                var oe = new FileReader,
                    Ae = v(oe);
                return oe.readAsText(G), Ae
            }

            function ae(G) {
                for (var oe = new Uint8Array(G), Ae = new Array(oe.length), be = 0; be < oe.length; be++) Ae[be] = String.fromCharCode(oe[be]);
                return Ae.join("")
            }

            function se(G) {
                if (G.slice) return G.slice(0);
                var oe = new Uint8Array(G.byteLength);
                return oe.set(new Uint8Array(G)), oe.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(G) {
                    this._bodyInit = G, G ? typeof G == "string" ? this._bodyText = G : _.blob && Blob.prototype.isPrototypeOf(G) ? this._bodyBlob = G : _.formData && FormData.prototype.isPrototypeOf(G) ? this._bodyFormData = G : _.searchParams && URLSearchParams.prototype.isPrototypeOf(G) ? this._bodyText = G.toString() : _.arrayBuffer && _.blob && k(G) ? (this._bodyArrayBuffer = se(G.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(G) || D(G)) ? this._bodyArrayBuffer = se(G) : this._bodyText = G = Object.prototype.toString.call(G) : this._bodyText = "", this.headers.get("content-type") || (typeof G == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(G) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
                    var G = re(this);
                    if (G) return G;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(N)
                }), this.text = function() {
                    var G = re(this);
                    if (G) return G;
                    if (this._bodyBlob) return q(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, _.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function _e(G) {
                var oe = G.toUpperCase();
                return d.indexOf(oe) > -1 ? oe : G
            }

            function Oe(G, oe) {
                oe = oe || {};
                var Ae = oe.body;
                if (G instanceof Oe) {
                    if (G.bodyUsed) throw new TypeError("Already read");
                    this.url = G.url, this.credentials = G.credentials, oe.headers || (this.headers = new K(G.headers)), this.method = G.method, this.mode = G.mode, this.signal = G.signal, !Ae && G._bodyInit != null && (Ae = G._bodyInit, G.bodyUsed = !0)
                } else this.url = String(G);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new K(oe.headers)), this.method = _e(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(G) {
                var oe = new FormData;
                return G.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var be = Ae.split("="),
                            we = be.shift().replace(/\+/g, " "),
                            ue = be.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(we), decodeURIComponent(ue))
                    }
                }), oe
            }

            function lt(G) {
                var oe = new K,
                    Ae = G.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(be) {
                    var we = be.split(":"),
                        ue = we.shift().trim();
                    if (ue) {
                        var Se = we.join(":").trim();
                        oe.append(ue, Se)
                    }
                }), oe
            }
            ye.call(Oe.prototype);

            function Be(G, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new K(oe.headers), this.url = oe.url || "", this._initBody(G)
            }
            ye.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new K(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var G = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return G.type = "error", G
            };
            var J = [301, 302, 303, 307, 308];
            Be.redirect = function(G, oe) {
                if (J.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: G
                    }
                })
            }, m.DOMException = f.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(oe, Ae) {
                    this.message = oe, this.name = Ae;
                    var be = Error(oe);
                    this.stack = be.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function Fe(G, oe) {
                return new Promise(function(Ae, be) {
                    var we = new Oe(G, oe);
                    if (we.signal && we.signal.aborted) return be(new m.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function Se() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var Te = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: lt(ue.getAllResponseHeaders() || "")
                        };
                        Te.url = "responseURL" in ue ? ue.responseURL : Te.headers.get("X-Request-URL");
                        var $e = "response" in ue ? ue.response : ue.responseText;
                        Ae(new Be($e, Te))
                    }, ue.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        be(new m.DOMException("Aborted", "AbortError"))
                    }, ue.open(we.method, we.url, !0), we.credentials === "include" ? ue.withCredentials = !0 : we.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && _.blob && (ue.responseType = "blob"), we.headers.forEach(function(Te, $e) {
                        ue.setRequestHeader($e, Te)
                    }), we.signal && (we.signal.addEventListener("abort", Se), ue.onreadystatechange = function() {
                        ue.readyState === 4 && we.signal.removeEventListener("abort", Se)
                    }), ue.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return Fe.polyfill = !0, f.fetch || (f.fetch = Fe, f.Headers = K, f.Request = Oe, f.Response = Be), m.Headers = K, m.Request = Oe, m.Response = Be, m.fetch = Fe, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ea, Ea.exports);
var iy = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            n = Symbol("test"),
            i = Object(n);
        if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]") return !1;
        var a = 42;
        e[n] = a;
        for (n in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var f = Object.getOwnPropertySymbols(e);
        if (f.length !== 1 || f[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var m = Object.getOwnPropertyDescriptor(e, n);
            if (m.value !== a || m.enumerable !== !0) return !1
        }
        return !0
    },
    Ll = typeof Symbol < "u" && Symbol,
    ry = iy,
    sy = function() {
        return typeof Ll != "function" || typeof Symbol != "function" || typeof Ll("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ry()
    },
    oy = "Function.prototype.bind called on incompatible ",
    Zo = Array.prototype.slice,
    ay = Object.prototype.toString,
    ly = "[object Function]",
    cy = function(e) {
        var n = this;
        if (typeof n != "function" || ay.call(n) !== ly) throw new TypeError(oy + n);
        for (var i = Zo.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, m = Math.max(0, n.length - i.length), _ = [], k = 0; k < m; k++) _.push("$" + k);
        if (a = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    uy = cy,
    Fa = Function.prototype.bind || uy,
    hy = Fa,
    dy = hy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    jc = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return jc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Mi = Object.getOwnPropertyDescriptor;
if (Mi) try {
    Mi({}, "")
} catch {
    Mi = null
}
var ta = function() {
        throw new ur
    },
    fy = Mi ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Mi(arguments, "callee").get
            } catch {
                return ta
            }
        }
    }() : ta,
    ir = sy(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    py = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
    hr = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": ir ? ai([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": or,
        "%AsyncGenerator%": or,
        "%AsyncGeneratorFunction%": or,
        "%AsyncIteratorPrototype%": or,
        "%Atomics%": typeof Atomics > "u" ? mt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? mt : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? mt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? mt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? mt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? mt : FinalizationRegistry,
        "%Function%": jc,
        "%GeneratorFunction%": or,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": ir ? ai(ai([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ir ? mt : ai(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? mt : Promise,
        "%Proxy%": typeof Proxy > "u" ? mt : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? mt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? mt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !ir ? mt : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ir ? ai("" [Symbol.iterator]()) : mt,
        "%Symbol%": ir ? Symbol : mt,
        "%SyntaxError%": gr,
        "%ThrowTypeError%": fy,
        "%TypedArray%": py,
        "%TypeError%": ur,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    gy = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = ea("async function () {}");
        else if (e === "%GeneratorFunction%") n = ea("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = ea("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ai(a.prototype))
        }
        return hr[e] = n, n
    },
    Ml = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    hs = Fa,
    Js = dy,
    my = hs.call(Function.call, Array.prototype.concat),
    vy = hs.call(Function.apply, Array.prototype.splice),
    Pl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    yy = hs.call(Function.call, RegExp.prototype.exec),
    wy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    by = /\\(\\)?/g,
    Cy = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Pl(e, wy, function(f, m, _, k) {
            a[a.length] = _ ? Pl(k, by, "$1") : m || f
        }), a
    },
    xy = function(e, n) {
        var i = e,
            a;
        if (Js(Ml, i) && (a = Ml[i], i = "%" + a[0] + "%"), Js(hr, i)) {
            var f = hr[i];
            if (f === or && (f = gy(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    za = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (yy(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Cy(e),
            a = i.length > 0 ? i[0] : "",
            f = xy("%" + a + "%", n),
            m = f.name,
            _ = f.value,
            k = !1,
            I = f.alias;
        I && (a = I[0], vy(i, my([0, 1], I)));
        for (var D = 1, M = !0; D < i.length; D += 1) {
            var Y = i[D],
                ne = Qs(Y, 0, 1),
                K = Qs(Y, -1);
            if ((ne === '"' || ne === "'" || ne === "`" || K === '"' || K === "'" || K === "`") && ne !== K) throw new gr("property names with quotes must have matching quotes");
            if ((Y === "constructor" || !M) && (k = !0), a += "." + Y, m = "%" + a + "%", Js(hr, m)) _ = hr[m];
            else if (_ != null) {
                if (!(Y in _)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Mi && D + 1 >= i.length) {
                    var re = Mi(_, Y);
                    M = !!re, M && "get" in re && !("originalValue" in re.get) ? _ = re.get : _ = _[Y]
                } else M = Js(_, Y), _ = _[Y];
                M && !k && (hr[m] = _)
            }
        }
        return _
    },
    Fc = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = za,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        m = n("%Object.getOwnPropertyDescriptor%", !0),
        _ = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (_) try {
        _({}, "a", {
            value: 1
        })
    } catch {
        _ = null
    }
    t.exports = function(M) {
        var Y = f(e, a, arguments);
        if (m && _) {
            var ne = m(Y, "length");
            ne.configurable && _(Y, "length", {
                value: 1 + k(0, M.length - (arguments.length - 1))
            })
        }
        return Y
    };
    var I = function() {
        return f(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})(Fc);
var zc = za,
    Hc = Fc.exports,
    Ey = Hc(zc("String.prototype.indexOf")),
    _y = function(e, n) {
        var i = zc(e, !!n);
        return typeof i == "function" && Ey(e, ".prototype.") > -1 ? Hc(i) : i
    };
const Sy = {},
    ky = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Sy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ty = mh(ky);
var Ha = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ha && na && typeof na.get == "function" ? na.get : null,
    Ay = Ha && Map.prototype.forEach,
    Ga = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ga && ia && typeof ia.get == "function" ? ia.get : null,
    Oy = Ga && Set.prototype.forEach,
    Ry = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Ry ? WeakMap.prototype.has : null,
    Iy = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Iy ? WeakSet.prototype.has : null,
    Dy = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Dy ? WeakRef.prototype.deref : null,
    Ly = Boolean.prototype.valueOf,
    My = Object.prototype.toString,
    Py = Function.prototype.toString,
    Ny = String.prototype.match,
    Ua = String.prototype.slice,
    hi = String.prototype.replace,
    Vy = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    Gc = RegExp.prototype.test,
    Bl = Array.prototype.concat,
    jn = Array.prototype.join,
    By = Array.prototype.slice,
    $l = Math.floor,
    _a = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Uc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Gc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -$l(-t) : $l(t);
        if (i !== t) {
            var a = String(i),
                f = Ua.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var ka = Ty,
    zl = ka.custom,
    Hl = Wc(zl) ? zl : null,
    $y = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Yc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return _ ? Fl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return _ ? Fl(e, I) : I
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var M = iw(f, i);
        if (typeof a > "u") a = [];
        else if (Xc(a, e) >= 0) return "[Circular]";

        function Y(Fe, G, oe) {
            if (G && (a = By.call(a), a.push(G)), oe) {
                var Ae = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Ae.quoteStyle = f.quoteStyle), t(Fe, Ae, i + 1, a)
            }
            return t(Fe, f, i + 1, a)
        }
        if (typeof e == "function" && !Gl(e)) {
            var ne = Xy(e),
                K = Ms(e, Y);
            return "[Function" + (ne ? ": " + ne : " (anonymous)") + "]" + (K.length > 0 ? " { " + jn.call(K, ", ") + " }" : "")
        }
        if (Wc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !mr ? Yr(re) : re
        }
        if (ew(e)) {
            for (var v = "<" + Vl.call(String(e.nodeName)), N = e.attributes || [], q = 0; q < N.length; q++) v += " " + N[q].name + "=" + qc(jy(N[q].value), "double", f);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + Vl.call(String(e.nodeName)) + ">", v
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var ae = Ms(e, Y);
            return M && !nw(ae) ? "[" + Aa(ae, M) + "]" : "[ " + jn.call(ae, ", ") + " ]"
        }
        if (zy(e)) {
            var se = Ms(e, Y);
            return !("cause" in Error.prototype) && "cause" in e && !Uc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call(Bl.call("[cause]: " + Y(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Hl && typeof e[Hl] == "function" && ka) return ka(e, {
                depth: D - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Yy(e)) {
            var ye = [];
            return Ay.call(e, function(Fe, G) {
                ye.push(Y(G, e, !0) + " => " + Y(Fe, e))
            }), Ul("Map", Zs.call(e), ye, M)
        }
        if (Qy(e)) {
            var d = [];
            return Oy.call(e, function(Fe) {
                d.push(Y(Fe, e))
            }), Ul("Set", eo.call(e), d, M)
        }
        if (Ky(e)) return sa("WeakMap");
        if (Zy(e)) return sa("WeakSet");
        if (Jy(e)) return sa("WeakRef");
        if (Gy(e)) return Yr(Y(Number(e)));
        if (qy(e)) return Yr(Y(_a.call(e)));
        if (Uy(e)) return Yr(Ly.call(e));
        if (Hy(e)) return Yr(Y(String(e)));
        if (!Fy(e) && !Gl(e)) {
            var _e = Ms(e, Y),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ua.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Be = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                J = Be + (lt || Pe ? "[" + jn.call(Bl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return _e.length === 0 ? J + "{}" : M ? J + "{" + Aa(_e, M) + "}" : J + "{ " + jn.call(_e, ", ") + " }"
        }
        return String(e)
    };

function qc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function jy(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gl(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gy(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Uy(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Wc(t) {
    if (mr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}

function qy(t) {
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}
var Wy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Wy.call(t, e)
}

function pi(t) {
    return My.call(t)
}

function Xy(t) {
    if (t.name) return t.name;
    var e = Ny.call(Py.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Xc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Yy(t) {
    if (!Zs || !t || typeof t != "object") return !1;
    try {
        Zs.call(t);
        try {
            eo.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Ky(t) {
    if (!ts || !t || typeof t != "object") return !1;
    try {
        ts.call(t, ts);
        try {
            ns.call(t, ns)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function Jy(t) {
    if (!Nl || !t || typeof t != "object") return !1;
    try {
        return Nl.call(t), !0
    } catch {}
    return !1
}

function Qy(t) {
    if (!eo || !t || typeof t != "object") return !1;
    try {
        eo.call(t);
        try {
            Zs.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function Zy(t) {
    if (!ns || !t || typeof t != "object") return !1;
    try {
        ns.call(t, ns);
        try {
            ts.call(t, ts)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function ew(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Yc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Yc(Ua.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, tw);
    return qc(a, "single", e)
}

function tw(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Vy.call(e.toString(16))
}

function Yr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Ul(t, e, n, i) {
    var a = i ? Aa(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function nw(t) {
    for (var e = 0; e < t.length; e++)
        if (Xc(t[e], `
`) >= 0) return !1;
    return !0
}

function iw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = jn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: jn.call(Array(e + 1), n)
    }
}

function Aa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + jn.call(t, "," + n) + `
` + e.prev
}

function Ms(t, e) {
    var n = Ta(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof ra == "function" ? ra(t) : [],
        m;
    if (mr) {
        m = {};
        for (var _ = 0; _ < f.length; _++) m["$" + f[_]] = f[_]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && m["$" + k] instanceof Symbol || (Gc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var I = 0; I < f.length; I++) Uc.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var qa = za,
    _r = _y,
    rw = $y,
    sw = qa("%TypeError%"),
    Ps = qa("%WeakMap%", !0),
    Ns = qa("%Map%", !0),
    ow = _r("WeakMap.prototype.get", !0),
    aw = _r("WeakMap.prototype.set", !0),
    lw = _r("WeakMap.prototype.has", !0),
    cw = _r("Map.prototype.get", !0),
    uw = _r("Map.prototype.set", !0),
    hw = _r("Map.prototype.has", !0),
    Wa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    dw = function(t, e) {
        var n = Wa(t, e);
        return n && n.value
    },
    fw = function(t, e, n) {
        var i = Wa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    pw = function(t, e) {
        return !!Wa(t, e)
    },
    gw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new sw("Side channel does not contain " + rw(f))
            },
            get: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return ow(e, f)
                } else if (Ns) {
                    if (n) return cw(n, f)
                } else if (i) return dw(i, f)
            },
            has: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return lw(e, f)
                } else if (Ns) {
                    if (n) return hw(n, f)
                } else if (i) return pw(i, f);
                return !1
            },
            set: function(f, m) {
                Ps && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ps), aw(e, f, m)) : Ns ? (n || (n = new Ns), uw(n, f, m)) : (i || (i = {
                    key: {},
                    next: null
                }), fw(i, f, m))
            }
        };
        return a
    },
    mw = String.prototype.replace,
    vw = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Xa = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return mw.call(t, vw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    yw = Xa,
    aa = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    Bn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    ww = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    Kc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    bw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Di(e) && !Di(n) && (a = Kc(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, m) {
            if (aa.call(e, m)) {
                var _ = e[m];
                _ && typeof _ == "object" && f && typeof f == "object" ? e[m] = t(_, f, i) : e.push(f)
            } else e[m] = f
        }), e) : Object.keys(n).reduce(function(f, m) {
            var _ = n[m];
            return aa.call(f, m) ? f[m] = t(f[m], _, i) : f[m] = _, f
        }, a)
    },
    Cw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    xw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Ew = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var _ = "", k = 0; k < m.length; ++k) {
            var I = m.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === yw.RFC1738 && (I === 40 || I === 41)) {
                _ += m.charAt(k);
                continue
            }
            if (I < 128) {
                _ = _ + Bn[I];
                continue
            }
            if (I < 2048) {
                _ = _ + (Bn[192 | I >> 6] + Bn[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                _ = _ + (Bn[224 | I >> 12] + Bn[128 | I >> 6 & 63] + Bn[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | m.charCodeAt(k) & 1023), _ += Bn[240 | I >> 18] + Bn[128 | I >> 12 & 63] + Bn[128 | I >> 6 & 63] + Bn[128 | I & 63]
        }
        return _
    },
    _w = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], m = f.obj[f.prop], _ = Object.keys(m), k = 0; k < _.length; ++k) {
                var I = _[k],
                    D = m[I];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: m,
                    prop: I
                }), i.push(D))
            }
        return ww(n), e
    },
    Sw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    kw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Tw = function(e, n) {
        return [].concat(e, n)
    },
    Aw = function(e, n) {
        if (Di(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Jc = {
        arrayToObject: Kc,
        assign: Cw,
        combine: Tw,
        compact: _w,
        decode: xw,
        encode: Ew,
        isBuffer: kw,
        isRegExp: Sw,
        maybeMap: Aw,
        merge: bw
    },
    Qc = gw,
    Oa = Jc,
    is = Xa,
    Ow = Object.prototype.hasOwnProperty,
    ql = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, n) {
            return e + "[" + n + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    ei = Array.isArray,
    Rw = String.prototype.split,
    Iw = Array.prototype.push,
    Zc = function(t, e) {
        Iw.apply(t, ei(e) ? e : [e])
    },
    Dw = Date.prototype.toISOString,
    Wl = is.default,
    nn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: Wl,
        formatter: is.formatters[Wl],
        indices: !1,
        serializeDate: function(e) {
            return Dw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Lw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Mw = function t(e, n, i, a, f, m, _, k, I, D, M, Y, ne, K, re, v) {
        for (var N = e, q = v, ae = 0, se = !1;
            (q = q.get(la)) !== void 0 && !se;) {
            var ye = q.get(e);
            if (ae += 1, typeof ye < "u") {
                if (ye === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(la) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? N = k(n, N) : N instanceof Date ? N = M(N) : i === "comma" && ei(N) && (N = Oa.maybeMap(N, function(ue) {
                return ue instanceof Date ? M(ue) : ue
            })), N === null) {
            if (f) return _ && !K ? _(n, nn.encoder, re, "key", Y) : n;
            N = ""
        }
        if (Lw(N) || Oa.isBuffer(N)) {
            if (_) {
                var d = K ? n : _(n, nn.encoder, re, "key", Y);
                if (i === "comma" && K) {
                    for (var _e = Rw.call(String(N), ","), Oe = "", Pe = 0; Pe < _e.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ne(_(_e[Pe], nn.encoder, re, "value", Y));
                    return [ne(d) + (a && ei(N) && _e.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ne(d) + "=" + ne(_(N, nn.encoder, re, "value", Y))]
            }
            return [ne(n) + "=" + ne(String(N))]
        }
        var lt = [];
        if (typeof N > "u") return lt;
        var Be;
        if (i === "comma" && ei(N)) Be = [{
            value: N.length > 0 ? N.join(",") || null : void 0
        }];
        else if (ei(k)) Be = k;
        else {
            var J = Object.keys(N);
            Be = I ? J.sort(I) : J
        }
        for (var Fe = a && ei(N) && N.length === 1 ? n + "[]" : n, G = 0; G < Be.length; ++G) {
            var oe = Be[G],
                Ae = typeof oe == "object" && typeof oe.value < "u" ? oe.value : N[oe];
            if (!(m && Ae === null)) {
                var be = ei(N) ? typeof i == "function" ? i(Fe, oe) : Fe : Fe + (D ? "." + oe : "[" + oe + "]");
                v.set(e, ae);
                var we = Qc();
                we.set(la, v), Zc(lt, t(Ae, be, i, a, f, m, _, k, I, D, M, Y, ne, K, re, we))
            }
        }
        return lt
    },
    Pw = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Ow.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = is.formatters[i],
            f = nn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (f = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : nn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? nn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : nn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? nn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : nn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : nn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : nn.encodeValuesOnly,
            filter: f,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : nn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : nn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : nn.strictNullHandling
        }
    },
    Nw = function(t, e) {
        var n = t,
            i = Pw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in ql ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var k = ql[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = Qc(), M = 0; M < a.length; ++M) {
            var Y = a[M];
            i.skipNulls && n[Y] === null || Zc(m, Mw(n[Y], Y, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ne = m.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ne.length > 0 ? K + ne : ""
    },
    vr = Jc,
    Ra = Object.prototype.hasOwnProperty,
    Vw = Array.isArray,
    Zt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: vr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    Bw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    eu = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    $w = "utf8=%26%2310003%3B",
    jw = "utf8=%E2%9C%93",
    Fw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = a.split(n.delimiter, f),
            _ = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === jw ? I = "utf-8" : m[k] === $w && (I = "iso-8859-1"), _ = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== _) {
                var D = m[k],
                    M = D.indexOf("]="),
                    Y = M === -1 ? D.indexOf("=") : M + 1,
                    ne, K;
                Y === -1 ? (ne = n.decoder(D, Zt.decoder, I, "key"), K = n.strictNullHandling ? null : "") : (ne = n.decoder(D.slice(0, Y), Zt.decoder, I, "key"), K = vr.maybeMap(eu(D.slice(Y + 1), n), function(re) {
                    return n.decoder(re, Zt.decoder, I, "value")
                })), K && n.interpretNumericEntities && I === "iso-8859-1" && (K = Bw(K)), D.indexOf("[]=") > -1 && (K = Vw(K) ? [K] : K), Ra.call(i, ne) ? i[ne] = vr.combine(i[ne], K) : i[ne] = K
            } return i
    },
    zw = function(t, e, n, i) {
        for (var a = i ? e : eu(e, n), f = t.length - 1; f >= 0; --f) {
            var m, _ = t[f];
            if (_ === "[]" && n.parseArrays) m = [].concat(a);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    I = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: a
                } : !isNaN(I) && _ !== k && String(I) === k && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (m = [], m[I] = a) : k !== "__proto__" && (m[k] = a)
            }
            a = m
        }
        return a
    },
    Hw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(f),
                I = k ? f.slice(0, k.index) : f,
                D = [];
            if (I) {
                if (!i.plainObjects && Ra.call(Object.prototype, I) && !i.allowPrototypes) return;
                D.push(I)
            }
            for (var M = 0; i.depth > 0 && (k = _.exec(f)) !== null && M < i.depth;) {
                if (M += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + f.slice(k.index) + "]"), zw(D, n, i, a)
        }
    },
    Gw = function(e) {
        if (!e) return Zt;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = typeof e.charset > "u" ? Zt.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? Zt.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Zt.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Zt.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Zt.arrayLimit,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Zt.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : Zt.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : Zt.decoder,
            delimiter: typeof e.delimiter == "string" || vr.isRegExp(e.delimiter) ? e.delimiter : Zt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Zt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Zt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Zt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Zt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Zt.strictNullHandling
        }
    },
    Uw = function(t, e) {
        var n = Gw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Fw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), m = 0; m < f.length; ++m) {
            var _ = f[m],
                k = Hw(_, i[_], n, typeof t == "string");
            a = vr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    qw = Nw,
    Ww = Uw,
    Xw = Xa,
    tu = {
        formats: Xw,
        parse: Ww,
        stringify: qw
    };
class Yw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Kw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Jw {
    constructor(e) {
        this.connections = e.connections
    }
}
class Qw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Zw {}
var po = {
    CreateRoomReply: Yw,
    GetRoomReply: Kw,
    GetAudienceReply: Jw,
    RoomExit: Qw,
    RoomLock: Zw
};
const Xl = Ea.exports,
    eb = tu,
    {
        CreateRoomReply: tb,
        GetRoomReply: nb
    } = po;
class ib {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = eb.stringify(n);
            return `${this.scheme}://${window.location.hostname}/api/v2${e}?${i}`
        }
        return `${this.scheme}://${window.location.hostname}/api/v2${e}`
    }
    async createRoom(e) {
        let n = {
            userId: e.userId || "fart",
            appTag: e.appTag || "test"
        };
        e.password && (n.password = e.password), e.moderatorPassword && (n.moderatorPassword = e.moderatorPassword), e.twitchLocked && (n.twitchLocked = e.twitchLocked), e.locale && (n.locale = e.locale), e.keepalive && (n.keepalive = e.keepalive), e.controllerBranch && (n.controllerBranch = e.controllerBranch);
        let i = this.url("/rooms", n),
            m = await (await Xl(i, {
                method: "POST"
            })).json();
        if (!m.ok) throw new Error(`failed to create room: ${m.error}`);
        let _ = m.body;
        return new tb({
            code: _.code,
            token: _.token,
            host: _.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Xl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new nb({
            appId: f.appId,
            appTag: f.appTag,
            audienceEnabled: f.audienceEnabled,
            code: f.code,
            host: f.host,
            audienceHost: f.audienceHost,
            locked: f.locked,
            full: f.full,
            moderationEnabled: f.moderationEnabled,
            passwordRequired: f.passwordRequired,
            twitchLocked: f.twitchLocked,
            locale: f.locale,
            keepalive: f.keepalive,
            controllerBranch: f.controllerBranch
        })
    }
}
var rb = {
        APIClient: ib
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var sb = ar,
    Ya = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Yl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Hs;
dr && typeof dr.ownKeys == "function" ? Hs = dr.ownKeys : Object.getOwnPropertySymbols ? Hs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Hs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function ob(t) {
    console && console.warn && console.warn(t)
}
var nu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ya.exports = Rt;
Ya.exports.once = ub;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var Kl = 10;

function go(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Kl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || nu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || nu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function iu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return iu(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var _ = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw _.context = m, _
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Yl(k, this, n);
    else
        for (var I = k.length, D = lu(k, I), i = 0; i < I; ++i) Yl(D[i], this, n);
    return !0
};

function ru(t, e, n, i) {
    var a, f, m;
    if (go(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), m = f[e]), m === void 0) m = f[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = f[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), a = iu(t), a > 0 && m.length > a && !m.warned) {
        m.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = m.length, ob(_)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return ru(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return ru(this, e, n, !0)
};

function ab() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function su(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = ab.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, su(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, su(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, m, _;
    if (go(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                _ = i[m].listener, f = m;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : lb(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
    }
    return this
};
Rt.prototype.off = Rt.prototype.removeListener;
Rt.prototype.removeAllListeners = function(e) {
    var n, i, a;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var f = Object.keys(i),
            m;
        for (a = 0; a < f.length; ++a) m = f[a], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function ou(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? cb(a) : lu(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return ou(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return ou(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : au.call(t, e)
};
Rt.prototype.listenerCount = au;

function au(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Hs(this._events) : []
};

function lu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function lb(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function cb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function ub(t, e) {
    return new Promise(function(n, i) {
        function a(m) {
            t.removeListener(e, f), i(m)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        cu(t, e, f, {
            once: !0
        }), e !== "error" && hb(t, a, {
            once: !0
        })
    })
}

function hb(t, e, n) {
    typeof t.on == "function" && cu(t, "error", e, n)
}

function cu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class db {
    constructor(e) {
        e && (this.error = e.error, this.to = e.to)
    }
    toString() {
        return `ObservedError{
	to:${this.to}
	error:${this.error}
}`
    }
}
class mo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ds extends mo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class uu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class hu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class du extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class fu extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class pu extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class gu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class mu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class vu extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class yu extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class wu extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Bu extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class ju extends Tt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function fb({
    code: t,
    message: e
}) {
    const n = pb[t];
    return n ? new n({
        message: e
    }) : new mo({
        message: e
    })
}
var ti = {
    createError: fb,
    CallError: mo,
    EcastServerError: ds,
    EcastCreateRoomFailed: uu,
    EcastDialRoomFailed: hu,
    EcastServerIsShuttingDown: du,
    EcastClientError: Tt,
    EcastParseError: fu,
    EcastRequestIsMissingOpcode: pu,
    EcastRequestHasInvalidOpcode: gu,
    EcastRequestHasInvalidArguments: mu,
    EcastEntityNotFound: vu,
    EcastEntityAlreadyExists: yu,
    EcastEntityTypeError: wu,
    EcastNoSuchClient: bu,
    EcastRoomIsLocked: Cu,
    EcastRoomIsFull: xu,
    EcastLicenseNotFound: Eu,
    EcastLicenseCheckFailed: _u,
    EcastRoomNotFound: Su,
    EcastInvalidRole: ku,
    EcastTwitchLoginRequired: Tu,
    EcastInvalidOption: Au,
    EcastPasswordRequired: Ou,
    EcastInvalidPassword: Ru,
    EcastNameRequired: Iu,
    EcastFilterError: Du,
    EcastNoSuchFilter: Lu,
    EcastPermissionDenied: Mu,
    EcastNotConnected: Pu,
    EcastIllegalOperation: Nu,
    EcastACLChangeDenied: Vu,
    EcastRoomHasEnded: Bu,
    EcastEntityLocked: $u,
    EcastRateLimitExceeded: ju,
    ObservedError: db
};
const pb = {
    1e3: ds,
    1001: uu,
    1002: hu,
    1003: du,
    2e3: Tt,
    2001: fu,
    2002: pu,
    2003: gu,
    2004: mu,
    2005: vu,
    2006: yu,
    2007: wu,
    2008: bu,
    2009: Cu,
    2010: xu,
    2011: Eu,
    2012: _u,
    2013: Su,
    2014: ku,
    2015: Tu,
    2016: Au,
    2017: Ou,
    2018: Ru,
    2019: Iu,
    2021: Du,
    2022: Lu,
    2023: Mu,
    2024: Pu,
    2025: Nu,
    2026: Vu,
    2027: Bu,
    2028: $u,
    2420: ju
};
class gb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class mb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class vb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class yb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class wb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ka = {
    ClientConnected: mb,
    ClientDisconnected: vb,
    ClientKicked: wb,
    ClientSend: yb,
    ClientWelcome: gb
};
class bb {
    constructor(e) {
        this.choices = e.choices, this.key = e.key, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var Ja = {
    CountGroup: bb
};
class Cb {
    constructor(e) {
        this.key = e.key, this.count = e.count, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
    }
}
var Qa = {
    GCounter: Cb
};
class xb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Fu = {
    Notification: xb
};
class Eb {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ObjectEntity{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return this.val
    }
}
class _b {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Za = {
    ObjectEntity: Eb,
    ObjectEcho: _b
};
class Sb {
    constructor(e) {
        this.key = e.key, this.count = e.count, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var el = {
    PNCounter: Sb
};
class kb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var zu = {
    Reply: kb
};
class Tb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Ab = {
    Request: Tb
};
class Ob {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.text = e.text, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this, e.emit("text " + this.key, this)
    }
    toString() {
        return `TextEntity{
	key:${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return JSON.parse(this.text)
    }
}
class Rb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: Ob,
    TextEcho: Rb
};
class Ib {
    constructor(e) {
        this.key = e.key, this.elements = e.elements, this.limit = e.limit, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var nl = {
    TextRing: Ib
};
class Db {
    constructor(e) {
        this.key = e.key, this.artifactId = e.artifactId, this.categoryId = e.categoryId, this.rootId = e.rootId, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ArtifactEntity${JSON.stringify(this)}
`
    }
}
var Hu = {
    ArtifactEntity: Db
};
class Lb {
    constructor(e) {
        this.key = e.key, this.colors = e.colors, this.lines = e.lines, this.live = e.live, this.maxPoints = e.maxPoints, this.size = e.size, this.weights = e.weights, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
class Mb {
    constructor(e) {
        this.key = e.key, this.line = e.line
    }
    whenReceived(e) {
        e.entities[this.key].lines.push(this.line)
    }
    toString() {
        return `DoodleLine{
	val:${this.line}
}`
    }
}
class Pb {
    constructor(e) {
        this.key = e.key, this.index = e.index
    }
    whenReceived(e) {
        e.entities[this.key].lines.splice(this.index, 1)
    }
    toString() {
        return `DoodleLineRemoved{
	index:${this.index}
}`
    }
}
var il = {
    DoodleEntity: Lb,
    DoodleLine: Mb,
    DoodleLineRemoved: Pb
};
class Nb {
    constructor(e) {
        this.key = e.key, this.size = e.size, this.version = e.version, this.from = e.from, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenRecived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Stack{
	key:${this.key}
	size:${this.size}
	version:${this.version}
	from:${this.from}
	meta:${this.meta}
}`
    }
}
class Vb {
    constructor(e) {
        this.key = e.key, this.val = e.val
    }
    toString() {
        return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
    }
}
class Bb {
    constructor(e) {
        this.key = e.key, this.vals = e.vals
    }
    toString() {
        return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
    }
}
var Gu = {
    StackEntity: Nb,
    StackElement: Vb,
    StackElements: Bb
};
class $b {
    constructor(e) {
        this.key = e.key
    }
    whenReceived(e) {
        delete e.entities[this.key]
    }
    toString() {
        return `DropEntity{
	key:${this.key}
}`
    }
}
var Uu = {
    DropEntity: $b
};
class jb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var Fb = {
    Echo: jb
};
class zb {
    constructor(e) {
        this.key = e.key, this.from = e.from
    }
    whenReceived(e) {
        e.entities[this.key] && (e.entities[this.key].meta.locked = !0)
    }
    toString() {
        return `LockEntity{
	key:${this.key}
}`
    }
}
var Hb = {
    LockEntity: zb
};
class Gb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var qu = {
    OK: Gb
};
class Ub {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`
    }
}
var Wu = {
    NumberEntity: Ub
};
const {
    ArtifactEntity: qb
} = Hu, {
    ClientWelcome: Wb,
    ClientConnected: Xb,
    ClientDisconnected: Yb,
    ClientKicked: Kb,
    ClientSend: Jb
} = Ka, {
    CountGroup: Qb
} = Ja, {
    DoodleEntity: Zb,
    DoodleLine: e0,
    DoodleLineRemoved: t0
} = il, {
    StackEntity: n0,
    StackElement: i0,
    StackElements: r0
} = Gu, {
    DropEntity: s0
} = Uu, {
    Echo: o0
} = Fb, {
    LockEntity: a0
} = Hb, {
    GCounter: l0
} = Qa, {
    GetAudienceReply: c0,
    RoomExit: u0,
    RoomLock: h0
} = po, {
    Notification: d0
} = Fu, {
    OK: f0
} = qu, {
    NumberEntity: p0
} = Wu, {
    ObjectEcho: g0,
    ObjectEntity: m0
} = Za, {
    PNCounter: Jl
} = el, {
    Reply: v0
} = zu, {
    TextEcho: y0,
    TextEntity: w0
} = tl, {
    TextRing: b0
} = nl, {
    createError: Ql,
    ObservedError: C0
} = ti;

function Ia(t, e, n) {
    switch (t) {
        case "ok":
            return new f0;
        case "echo":
            return new o0({
                message: e.message
            });
        case "lock":
            return new a0({
                key: e.key,
                from: e.from
            });
        case "error":
            return Ql({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new C0({
                to: e.to,
                error: Ql({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new w0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new y0({
                message: e.message
            });
        case "object":
            return new m0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new g0({
                message: e.message
            });
        case "drop":
            return new s0({
                key: e.key
            });
        case "artifact":
            return new qb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new Xb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Yb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Kb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Jb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Wb({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let a = {};
                Object.entries(e.entities).forEach(([f, m]) => {
                    a[f] = Ia(m[0], m[1], m[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new Zb({
                key: e.key,
                colors: e.val.colors,
                lines: e.val.lines,
                live: e.val.live,
                maxPoints: e.val.maxPoints,
                size: e.val.size,
                weights: e.val.weights,
                meta: n,
                acl: e.acl
            });
        case "doodle/line":
            return new e0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new t0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new n0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new i0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new r0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new p0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new u0({
                cause: e.cause
            });
        case "room/lock":
            return new h0;
        case "room/get-audience":
            return new c0({
                connections: e.connections
            });
        case "audience":
            return new Jl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Qb({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new b0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new l0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Jl({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function x0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new v0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ia(n, e.result)
    }) : new d0({
        pc: e.pc,
        opcode: n,
        result: Ia(n, e.result)
    })
}
var E0 = {
    parseResponseMessage: x0
};
const Zl = sb,
    _0 = tu,
    S0 = Ya.exports,
    {
        CallError: k0
    } = ti,
    {
        ClientWelcome: T0
    } = Ka,
    {
        CountGroup: A0
    } = Ja,
    {
        GCounter: O0
    } = Qa,
    {
        Notification: ec
    } = Fu,
    {
        ObjectEntity: ca
    } = Za,
    {
        PNCounter: R0
    } = el,
    {
        Reply: I0
    } = zu,
    {
        Request: D0
    } = Ab,
    {
        TextEntity: ua
    } = tl,
    {
        TextRing: L0
    } = nl,
    {
        parseResponseMessage: M0
    } = E0,
    {
        DoodleEntity: P0
    } = il,
    {
        StackEntity: N0
    } = Gu,
    V0 = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class B0 extends S0 {
    constructor(e) {
        if (super(), this.debug = e.debug || !1, !e.host) throw new Error("unable to create ecast WSClient: no host provided");
        if (this.host = e.host, !e.code) throw new Error("unable to create ecast WSClient: no room code provided");
        if (this.code = e.code, e.scheme ? this.scheme = e.scheme : this.scheme = "wss", e.secret && e.id) this.id = e.id, this.secret = e.secret;
        else {
            switch (e.role) {
                case "player":
                    if (!e.name) throw new Error("unable to create ecast WSClient: no name provided");
                    break;
                case "host":
                    if (!e.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                    this.token = e.token;
                    break;
                case "moderator":
                    if (!e.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                    break
            }
            e.password && (this.password = e.password), e.twitchToken && (this.twitchToken = e.twitchToken)
        }
        this.name = e.name, this.role = e.role, this.deviceId = e.deviceId, this.userId = e.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, e.role == "host" && (this.replaySince = e.replaySince || 0, this.syncEntities = e.syncEntities || !1)
    }
    connect() {
        const e = {
            id: this.id,
            role: this.role,
            name: this.name,
            format: "json",
            "user-id": this.userId,
            password: this.password
        };
        this.deviceId && (e["device-id"] = this.deviceId), this.twitchToken && (e["twitch-token"] = this.twitchToken), this.secret && (e.secret = this.secret), this.role === "host" && (e["host-token"] = this.token, this.replaySince > 0 && (e["replay-since"] = this.replaySince), this.syncEntities && (e["sync-entities"] = this.syncEntities));
        const n = _0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${window.location.hostname}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${window.location.hostname}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let m = !1,
                _ = !1,
                k = D => {
                    a(D), m = !0
                },
                I = D => {
                    f(D), m = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const M = M0(D);
                if (M instanceof I0) this.onReply(M);
                else if (M instanceof ec) {
                    if (M.result instanceof T0) _ = !0, this.id = M.result.id, this.deviceId = M.result.deviceId, this.entities = M.result.entities, this.secret = M.result.secret, M.result.name && (this.name = M.result.name), k(M.result);
                    else if (!m) {
                        I(M.result);
                        return
                    }
                    this.onNotification(M)
                } else console.error(`failed to parse response messsage: ${M}`)
            }, this.conn.onerror = D => {
                m ? this.emit("socketError", D) : I(D)
            }, this.conn.onclose = D => {
                this.debugLog("onclose", D.code), _ && D.code === 1006 ? this.reconnect() : this.emit("socketClose", D)
            }, this.conn.onopen = D => {
                this.emit("socketOpen", D)
            }
        })
    }
    sleep(e) {
        return new Promise(n => setTimeout(n, e))
    }
    debugLog(...e) {
        !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
    }
    async reconnect() {
        this.disconnect(), this.debugLog("Attempting to reconnect");
        let e = 1,
            n = V0;
        for (;;) try {
            this.emit("connection", {
                status: "connecting",
                attempt: e
            }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                status: "connected"
            });
            return
        } catch (i) {
            if (this.debugLog("reconnect error", i), i.code === 1005 || i.code === 1e3) {
                this.debugLog("unable to reconnect!", i), this.emit("socketClose", i);
                return
            }
            if (n >= tc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(tc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new ec(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof k0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Zl.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new D0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((_, k) => {
                this.pending[i] = {
                    resolve: _,
                    reject: k,
                    request: a
                }
            }),
            m = JSON.stringify(a);
        return this.debugLog(`send -> ${m}`), this.conn.send(m), f
    }
    lockRoom() {
        return this.send("room/lock")
    }
    startAudience() {
        return this.send("room/start-audience")
    }
    getAudience() {
        return this.send("room/get-audience")
    }
    mail(e, n) {
        return this.send("client/send", {
            from: this.id,
            to: e,
            body: n
        })
    }
    kick(e, n = !1, i) {
        return this.send("client/kick", {
            id: e,
            ban: n,
            reason: i
        })
    }
    async drop(e) {
        const n = await this.send("drop", {
            key: e
        });
        return delete this.entities[e], n
    }
    echo(e) {
        return this.send("echo", {
            message: e
        })
    }
    async lock(e) {
        const n = await this.send("lock", {
            key: e
        });
        return this.entities[e].meta.locked = !0, n
    }
    async getNumber(e) {
        const n = await this.send("number/get", {
            key: e
        });
        return this.entities[e].val = n.val, this.entities[e].restrictions = n.restrictions, n
    }
    async updateNumber(e, n) {
        const i = await this.send("number/update", {
            key: e,
            val: n
        });
        return this.entities[e].val = n, i
    }
    async createObject(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/create", a);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    echoObject(e) {
        return this.send("object/echo", {
            message: e
        })
    }
    async setObject(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/set", a);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateObject(e, n) {
        const i = await this.send("object/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), i
    }
    echoText(e) {
        return this.send("text/echo", {
            message: e
        })
    }
    getText(e) {
        return this.send("text/get", {
            key: e
        })
    }
    async createText(e, n, i) {
        const a = {
                key: e,
                val: n
            },
            {
                acl: f,
                accept: m,
                reject: _
            } = i;
        f && (a.acl = f), m && (a.accept = m), _ && (a.reject = _);
        const k = await this.send("text/create", a);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), k
    }
    async setText(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("text/set", a);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateText(e, n) {
        const i = await this.send("text/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), i
    }
    async createDoodle(e, n) {
        let i = {
            key: e
        };
        const {
            acl: a,
            colors: f,
            live: m,
            maxPoints: _,
            size: k,
            weights: I
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = m, _ != null && (i.maxPoints = _), k && (i.size = k), I && (i.weights = I);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new P0({
            key: e,
            colors: f,
            lines: [],
            live: m,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: I,
            meta: {
                locked: !1
            }
        }), D
    }
    async getDoodle(e) {
        return this.send("doodle/get", {
            key: e
        })
    }
    async strokeDoodle(e, n) {
        const {
            layer: i,
            color: a,
            weight: f,
            points: m
        } = n, _ = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: m
        }), k = {
            layer: i,
            color: a,
            weight: f,
            points: m
        };
        return this.entities[e].lines.push(k), _
    }
    async undoDoodle(e) {
        const n = await this.send("doodle/undo", {
            key: e
        });
        return this.entities[e].lines.pop(), n
    }
    async createStack(e, n) {
        const i = {
            key: e
        };
        n && (i.acl = n);
        const a = await this.send("stack/create", i);
        return this.entities[e] = new N0({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), a
    }
    async pushStack(e, n) {
        return await this.send("stack/push", {
            key: e,
            val: n
        })
    }
    async bulkPushStack(e, n) {
        return await this.send("stack/bulkpush", {
            key: e,
            vals: n
        })
    }
    async peekStack(e, n) {
        return await this.send("stack/peek", {
            key: e,
            size: n
        })
    }
    async popStack(e) {
        return await this.send("stack/pop", {
            key: e
        })
    }
    async createCountGroup(e, n) {
        const i = await this.send("audience/count-group/create", {
            name: e,
            options: n
        });
        return this.entities[e] = new A0({
            key: e,
            choices: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementCountGroupCounter(e, n, i = 1) {
        return this.send("audience/count-group/increment", {
            name: e,
            vote: n,
            times: i
        })
    }
    getCountGroup(e) {
        return this.send("audience/count-group/get", {
            name: e
        })
    }
    async createGCounter(e, n) {
        const i = await this.send("audience/g-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new O0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementGCounter(e, n) {
        return this.send("audience/g-counter/increment", {
            key: e,
            times: n
        })
    }
    getGCounter(e) {
        return this.send("audience/g-counter/get", {
            key: e
        })
    }
    async createPNCounter(e, n) {
        const i = await this.send("audience/pn-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new R0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementPNCounter(e, n) {
        return this.send("audience/pn-counter/increment", {
            key: e,
            times: n
        })
    }
    decrementPNCounter(e, n) {
        return this.send("audience/pn-counter/decrement", {
            key: e,
            times: n
        })
    }
    getPNCounter(e) {
        return this.send("audience/pn-counter/get", {
            key: e
        })
    }
    async createTextRing(e, n) {
        const i = {
                key: e
            },
            {
                limit: a,
                accept: f,
                reject: m
            } = n;
        a && (i.limit = a), f && (i.accept = f), m && (i.reject = m);
        const _ = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new L0({
            key: e,
            elements: [],
            limit: a,
            meta: {
                locked: !1
            }
        }), _
    }
    getTextRing(e) {
        return this.send("audience/text-ring/get", {
            name: e
        })
    }
    pushTextRing(e, n) {
        return this.send("audience/text-ring/push", {
            name: e,
            text: n
        })
    }
}
var $0 = {
    WSClient: B0
};
const {
    APIClient: j0
} = rb, {
    WSClient: F0
} = $0, {
    CreateRoomReply: z0,
    GetRoomReply: H0
} = po, {
    ClientWelcome: G0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: q0
} = Hu, {
    GCounter: W0
} = Qa, {
    NumberEntity: X0
} = Wu, {
    TextEntity: Y0
} = tl, {
    DoodleEntity: K0
} = il, {
    ObjectEntity: J0
} = Za, {
    CountGroup: Q0
} = Ja, {
    DropEntity: Z0
} = Uu, {
    OK: eC
} = qu, {
    RoomExit: tC
} = po, {
    TextRing: nC
} = nl, {
    PNCounter: iC
} = el;
var Ri = {
    APIClient: j0,
    WSClient: F0,
    ClientWelcome: G0,
    CreateRoomReply: z0,
    DropEntity: Z0,
    GetRoomReply: H0,
    ClientDisconnected: U0,
    RoomExit: tC,
    OK: eC,
    ArtifactEntity: q0,
    DoodleEntity: K0,
    NumberEntity: X0,
    CountGroup: Q0,
    GCounter: W0,
    ObjectEntity: J0,
    PNCounter: iC,
    TextEntity: Y0,
    TextRing: nC
};

function nc(...t) {
    console.log(...t)
}

function rC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ic = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(vt, function(n) {
        var i = typeof window < "u" ? window : typeof vt < "u" ? vt : typeof self < "u" ? self : {},
            a = function(V, W) {
                if (W = W.split(":")[0], V = +V, !V) return !1;
                switch (W) {
                    case "http":
                    case "ws":
                        return V !== 80;
                    case "https":
                    case "wss":
                        return V !== 443;
                    case "ftp":
                        return V !== 21;
                    case "gopher":
                        return V !== 70;
                    case "file":
                        return !1
                }
                return V !== 0
            },
            f = Object.prototype.hasOwnProperty,
            m;

        function _(j) {
            try {
                return decodeURIComponent(j.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function k(j) {
            try {
                return encodeURIComponent(j)
            } catch {
                return null
            }
        }

        function I(j) {
            for (var V = /([^=?#&]+)=?([^&]*)/g, W = {}, L; L = V.exec(j);) {
                var U = _(L[1]),
                    pe = _(L[2]);
                U === null || pe === null || U in W || (W[U] = pe)
            }
            return W
        }

        function D(j, V) {
            V = V || "";
            var W = [],
                L, U;
            typeof V != "string" && (V = "?");
            for (U in j)
                if (f.call(j, U)) {
                    if (L = j[U], !L && (L === null || L === m || isNaN(L)) && (L = ""), U = k(U), L = k(L), U === null || L === null) continue;
                    W.push(U + "=" + L)
                } return W.length ? V + W.join("&") : ""
        }
        var M = D,
            Y = I,
            ne = {
                stringify: M,
                parse: Y
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            N = new RegExp("^" + v + "+");

        function q(j) {
            return (j || "").toString().replace(N, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(V, W) {
                    return d(W.protocol) ? V.replace(/\\/g, "/") : V
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            se = {
                hash: 1,
                query: 1
            };

        function ye(j) {
            var V;
            typeof window < "u" ? V = window : typeof i < "u" ? V = i : typeof self < "u" ? V = self : V = {};
            var W = V.location || {};
            j = j || W;
            var L = {},
                U = typeof j,
                pe;
            if (j.protocol === "blob:") L = new Pe(unescape(j.pathname), {});
            else if (U === "string") {
                L = new Pe(j, {});
                for (pe in se) delete L[pe]
            } else if (U === "object") {
                for (pe in j) pe in se || (L[pe] = j[pe]);
                L.slashes === void 0 && (L.slashes = K.test(j.href))
            }
            return L
        }

        function d(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function _e(j, V) {
            j = q(j), V = V || {};
            var W = re.exec(j),
                L = W[1] ? W[1].toLowerCase() : "",
                U = !!W[2],
                pe = !!W[3],
                ge = 0,
                Ne;
            return U ? pe ? (Ne = W[2] + W[3] + W[4], ge = W[2].length + W[3].length) : (Ne = W[2] + W[4], ge = W[2].length) : pe ? (Ne = W[3] + W[4], ge = W[3].length) : Ne = W[4], L === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : d(L) ? Ne = W[4] : L ? U && (Ne = Ne.slice(2)) : ge >= 2 && d(V.protocol) && (Ne = W[4]), {
                protocol: L,
                slashes: U || d(L),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(j, V) {
            if (j === "") return V;
            for (var W = (V || "/").split("/").slice(0, -1).concat(j.split("/")), L = W.length, U = W[L - 1], pe = !1, ge = 0; L--;) W[L] === "." ? W.splice(L, 1) : W[L] === ".." ? (W.splice(L, 1), ge++) : ge && (L === 0 && (pe = !0), W.splice(L, 1), ge--);
            return pe && W.unshift(""), (U === "." || U === "..") && W.push(""), W.join("/")
        }

        function Pe(j, V, W) {
            if (j = q(j), !(this instanceof Pe)) return new Pe(j, V, W);
            var L, U, pe, ge, Ne, Ve, pt = ae.slice(),
                jt = typeof V,
                Ye = this,
                In = 0;
            for (jt !== "object" && jt !== "string" && (W = V, V = null), W && typeof W != "function" && (W = ne.parse), V = ye(V), U = _e(j || "", V), L = !U.protocol && !U.slashes, Ye.slashes = U.slashes || L && V.slashes, Ye.protocol = U.protocol || V.protocol || "", j = U.rest, (Ye.protocol === "file:" || !U.slashes && (U.protocol || U.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    j = ge(j, Ye);
                    continue
                }
                pe = ge[0], Ve = ge[1], pe !== pe ? Ye[Ve] = j : typeof pe == "string" ? ~(Ne = j.indexOf(pe)) && (typeof ge[2] == "number" ? (Ye[Ve] = j.slice(0, Ne), j = j.slice(Ne + ge[2])) : (Ye[Ve] = j.slice(Ne), j = j.slice(0, Ne))) : (Ne = pe.exec(j)) && (Ye[Ve] = Ne[1], j = j.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || L && ge[3] && V[Ve] || "", ge[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            W && (Ye.query = W(Ye.query)), L && V.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || V.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, V.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (ge = Ye.auth.split(":"), Ye.username = ge[0] || "", Ye.password = ge[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(j, V, W) {
            var L = this;
            switch (j) {
                case "query":
                    typeof V == "string" && V.length && (V = (W || ne.parse)(V)), L[j] = V;
                    break;
                case "port":
                    L[j] = V, a(V, L.protocol) ? V && (L.host = L.hostname + ":" + V) : (L.host = L.hostname, L[j] = "");
                    break;
                case "hostname":
                    L[j] = V, L.port && (V += ":" + L.port), L.host = V;
                    break;
                case "host":
                    L[j] = V, /:\d+$/.test(V) ? (V = V.split(":"), L.port = V.pop(), L.hostname = V.join(":")) : (L.hostname = V, L.port = "");
                    break;
                case "protocol":
                    L.protocol = V.toLowerCase(), L.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (V) {
                        var U = j === "pathname" ? "/" : "#";
                        L[j] = V.charAt(0) !== U ? U + V : V
                    } else L[j] = V;
                    break;
                default:
                    L[j] = V
            }
            for (var pe = 0; pe < ae.length; pe++) {
                var ge = ae[pe];
                ge[4] && (L[ge[1]] = L[ge[1]].toLowerCase())
            }
            return L.origin = L.protocol !== "file:" && d(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString(), L
        }

        function Be(j) {
            (!j || typeof j != "function") && (j = ne.stringify);
            var V, W = this,
                L = W.protocol;
            L && L.charAt(L.length - 1) !== ":" && (L += ":");
            var U = L + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (U += W.username, W.password && (U += ":" + W.password), U += "@"), U += W.host + W.pathname, V = typeof W.query == "object" ? j(W.query) : W.query, V && (U += V.charAt(0) !== "?" ? "?" + V : V), W.hash && (U += W.hash), U
        }
        Pe.prototype = {
            set: lt,
            toString: Be
        }, Pe.extractProtocol = _e, Pe.location = ye, Pe.trimLeft = q, Pe.qs = ne;
        var J = Pe;

        function Fe(j, V) {
            setTimeout(function(W) {
                return j.call(W)
            }, 4, V)
        }

        function G(j, V) {
            typeof process < "u" && console[j].call(null, V)
        }

        function oe(j, V) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(L) {
                V(L) || W.push(L)
            }), W
        }

        function Ae(j, V) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(L) {
                V(L) && W.push(L)
            }), W
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(V, W) {
            typeof W == "function" && (Array.isArray(this.listeners[V]) || (this.listeners[V] = []), Ae(this.listeners[V], function(L) {
                return L === W
            }).length === 0 && this.listeners[V].push(W))
        }, be.prototype.removeEventListener = function(V, W) {
            var L = this.listeners[V];
            this.listeners[V] = oe(L, function(U) {
                return U === W
            })
        }, be.prototype.dispatchEvent = function(V) {
            for (var W = this, L = [], U = arguments.length - 1; U-- > 0;) L[U] = arguments[U + 1];
            var pe = V.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                L.length > 0 ? Ne.apply(W, L) : Ne.call(W, V)
            }), !0) : !1
        };

        function we(j) {
            var V = j.indexOf("?");
            return V >= 0 ? j.slice(0, V) : j
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(V, W) {
            var L = we(W),
                U = this.urlMap[L];
            if (U && U.server && U.websockets.indexOf(V) === -1) return U.websockets.push(V), U.server
        }, ue.prototype.addMembershipToRoom = function(V, W) {
            var L = this.urlMap[we(V.url)];
            L && L.server && L.websockets.indexOf(V) !== -1 && (L.roomMemberships[W] || (L.roomMemberships[W] = []), L.roomMemberships[W].push(V))
        }, ue.prototype.attachServer = function(V, W) {
            var L = we(W),
                U = this.urlMap[L];
            if (!U) return this.urlMap[L] = {
                server: V,
                websockets: [],
                roomMemberships: {}
            }, V
        }, ue.prototype.serverLookup = function(V) {
            var W = we(V),
                L = this.urlMap[W];
            if (L) return L.server
        }, ue.prototype.websocketsLookup = function(V, W, L) {
            var U = we(V),
                pe, ge = this.urlMap[U];
            if (pe = ge ? ge.websockets : [], W) {
                var Ne = ge.roomMemberships[W];
                pe = Ne || []
            }
            return L ? pe.filter(function(Ve) {
                return Ve !== L
            }) : pe
        }, ue.prototype.removeServer = function(V) {
            delete this.urlMap[we(V)]
        }, ue.prototype.removeWebSocket = function(V, W) {
            var L = we(W),
                U = this.urlMap[L];
            U && (U.websockets = oe(U.websockets, function(pe) {
                return pe === V
            }))
        }, ue.prototype.removeMembershipFromRoom = function(V, W) {
            var L = this.urlMap[we(V.url)],
                U = L.roomMemberships[W];
            L && U !== null && (L.roomMemberships[W] = oe(U, function(pe) {
                return pe === V
            }))
        };
        var Se = new ue,
            Te = {
                CLOSE_NORMAL: 1e3,
                CLOSE_GOING_AWAY: 1001,
                CLOSE_PROTOCOL_ERROR: 1002,
                CLOSE_UNSUPPORTED: 1003,
                CLOSE_NO_STATUS: 1005,
                CLOSE_ABNORMAL: 1006,
                UNSUPPORTED_DATA: 1007,
                POLICY_VIOLATION: 1008,
                CLOSE_TOO_LARGE: 1009,
                MISSING_EXTENSION: 1010,
                INTERNAL_ERROR: 1011,
                SERVICE_RESTART: 1012,
                TRY_AGAIN_LATER: 1013,
                TLS_HANDSHAKE: 1015
            },
            $e = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ke = function() {};
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(V, W, L) {
            V === void 0 && (V = "undefined"), W === void 0 && (W = !1), L === void 0 && (L = !1), this.type = "" + V, this.bubbles = Boolean(W), this.cancelable = Boolean(L)
        };
        var dt = function(j) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var U = L.bubbles,
                        pe = L.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Ke),
            Bt = function(j) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var U = L.bubbles,
                        pe = L.cancelable,
                        ge = L.data,
                        Ne = L.origin,
                        Ve = L.lastEventId,
                        pt = L.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ve || "")
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Ke),
            qt = function(j) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var U = L.bubbles,
                        pe = L.cancelable,
                        ge = L.code,
                        Ne = L.reason,
                        Ve = L.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Ke);

        function E(j) {
            var V = j.type,
                W = j.target,
                L = new dt(V);
            return W && (L.target = W, L.srcElement = W, L.currentTarget = W), L
        }

        function l(j) {
            var V = j.type,
                W = j.origin,
                L = j.data,
                U = j.target,
                pe = new Bt(V, {
                    data: L,
                    origin: W
                });
            return U && (pe.target = U, pe.srcElement = U, pe.currentTarget = U), pe
        }

        function g(j) {
            var V = j.code,
                W = j.reason,
                L = j.type,
                U = j.target,
                pe = j.wasClean;
            pe || (pe = V === Te.CLOSE_NORMAL || V === Te.CLOSE_NO_STATUS);
            var ge = new qt(L, {
                code: V,
                reason: W,
                wasClean: pe
            });
            return U && (ge.target = U, ge.srcElement = U, ge.currentTarget = U), ge
        }

        function S(j, V, W) {
            j.readyState = Le.CLOSING;
            var L = Se.serverLookup(j.url),
                U = g({
                    type: "close",
                    target: j.target,
                    code: V,
                    reason: W
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: V,
                    reason: W
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Le.CLOSED, j.dispatchEvent(U), j.dispatchEvent(pe), L && L.dispatchEvent(U, L)
            }, j)
        }

        function O(j, V, W) {
            j.readyState = Le.CLOSING;
            var L = Se.serverLookup(j.url),
                U = g({
                    type: "close",
                    target: j.target,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                ge = E({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Le.CLOSED, j.dispatchEvent(ge), j.dispatchEvent(U), j.dispatchEvent(pe), L && L.dispatchEvent(U, L)
            }, j)
        }

        function P(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var B = new WeakMap;

        function te(j) {
            if (B.has(j)) return B.get(j);
            var V = new Proxy(j, {
                get: function(L, U) {
                    return U === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Ve = ge.reason || "";
                        S(V, Ne, Ve)
                    } : U === "send" ? function(ge) {
                        ge = P(ge), j.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: j
                        }))
                    } : U === "on" ? function(ge, Ne) {
                        j.addEventListener("server::" + ge, Ne)
                    } : U === "target" ? j : L[U]
                }
            });
            return B.set(j, V), V
        }

        function ke(j) {
            var V = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (V ? V.length : 0)
        }

        function he(j) {
            var V = new J(j),
                W = V.pathname,
                L = V.protocol,
                U = V.hash;
            if (!j) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (V.pathname = "/"), L === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + V.toString() + "' is invalid.");
            if (L !== "ws:" && L !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + L + "' is not allowed.");
            if (U !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + U + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return V.toString()
        }

        function De(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var V = j.map(function(L) {
                    return {
                        count: 1,
                        protocol: L
                    }
                }).reduce(function(L, U) {
                    return L[U.protocol] = (L[U.protocol] || 0) + U.count, L
                }, {}),
                W = Object.keys(V).filter(function(L) {
                    return V[L] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return j
        }
        var Le = function(j) {
            function V(L, U) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(L), U = De(U), this.protocol = U[0] || "", this.binaryType = "blob", this.readyState = V.CONNECTING;
                var pe = te(this),
                    ge = Se.attachWebSocket(pe, this.url);
                Fe(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = V.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ve = ge.options.selectProtocol(U),
                                    pt = Ve !== "",
                                    jt = U.indexOf(Ve) !== -1;
                                if (pt && !jt) {
                                    this.readyState = V.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Te.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ve
                            }
                            this.readyState = V.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(E({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = V.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), G("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V;
            var W = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return W.onopen.get = function() {
                return this._onopen
            }, W.onmessage.get = function() {
                return this._onmessage
            }, W.onclose.get = function() {
                return this._onclose
            }, W.onerror.get = function() {
                return this._onerror
            }, W.onopen.set = function(L) {
                this.removeEventListener("open", this._onopen), this._onopen = L, this.addEventListener("open", L)
            }, W.onmessage.set = function(L) {
                this.removeEventListener("message", this._onmessage), this._onmessage = L, this.addEventListener("message", L)
            }, W.onclose.set = function(L) {
                this.removeEventListener("close", this._onclose), this._onclose = L, this.addEventListener("close", L)
            }, W.onerror.set = function(L) {
                this.removeEventListener("error", this._onerror), this._onerror = L, this.addEventListener("error", L)
            }, V.prototype.send = function(U) {
                var pe = this;
                if (this.readyState === V.CLOSING || this.readyState === V.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: P(U)
                    }),
                    Ne = Se.serverLookup(this.url);
                Ne && Fe(function() {
                    pe.dispatchEvent(ge, U)
                }, Ne)
            }, V.prototype.close = function(U, pe) {
                if (U !== void 0 && (typeof U != "number" || U !== 1e3 && (U < 3e3 || U > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + U + " is neither.");
                if (pe !== void 0) {
                    var ge = ke(pe);
                    if (ge > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === V.CLOSING || this.readyState === V.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === V.CONNECTING ? O(Ne, U || Te.CLOSE_ABNORMAL, pe) : S(Ne, U || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(V.prototype, W), V
        }(be);
        Le.CONNECTING = 0, Le.prototype.CONNECTING = Le.CONNECTING, Le.OPEN = 1, Le.prototype.OPEN = Le.OPEN, Le.CLOSING = 2, Le.prototype.CLOSING = Le.CLOSING, Le.CLOSED = 3, Le.prototype.CLOSED = Le.CLOSED;
        var nt = function(j) {
            return j.reduce(function(V, W) {
                return V.indexOf(W) > -1 ? V : V.concat(W)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof rC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(j) {
                function V(W, L) {
                    L === void 0 && (L = rn), j.call(this);
                    var U = new J(W);
                    U.pathname || (U.pathname = "/"), this.url = U.toString(), this.originalWebSocket = null;
                    var pe = Se.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, L), this.options.mock && this.mockWebsocket()
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V.prototype.mockWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket = L.WebSocket, L.WebSocket = Le
                }, V.prototype.restoreWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket !== null && (L.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, V.prototype.stop = function(L) {
                    L === void 0 && (L = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof L == "function" && L()
                }, V.prototype.on = function(L, U) {
                    this.addEventListener(L, U)
                }, V.prototype.close = function(L) {
                    L === void 0 && (L = {});
                    var U = L.code,
                        pe = L.reason,
                        ge = L.wasClean,
                        Ne = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = Le.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: U || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, V.prototype.emit = function(L, U, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = Se.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (U = Array.prototype.slice.call(arguments, 1, arguments.length), U = U.map(function(Ve) {
                        return P(Ve)
                    })) : U = P(U), Ne.forEach(function(Ve) {
                        Array.isArray(U) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: L,
                            data: U,
                            origin: ge.url,
                            target: Ve.target
                        })].concat(U)) : Ve.dispatchEvent(l({
                            type: L,
                            data: U,
                            origin: ge.url,
                            target: Ve.target
                        }))
                    })
                }, V.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, V.prototype.to = function(L, U, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Ve = nt(pe.concat(Se.websocketsLookup(this.url, L, U)));
                    return {
                        to: function(pt, jt) {
                            return ge.to.call(ge, pt, jt, Ve)
                        },
                        emit: function(jt, Ye) {
                            Ne.emit(jt, Ye, {
                                websockets: Ve
                            })
                        }
                    }
                }, V.prototype.in = function() {
                    for (var L = [], U = arguments.length; U--;) L[U] = arguments[U];
                    return this.to.apply(null, L)
                }, V.prototype.simulate = function(L) {
                    var U = Se.websocketsLookup(this.url);
                    L === "error" && U.forEach(function(pe) {
                        pe.readyState = Le.CLOSED, pe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, V
            }(be);
        ct.of = function(V) {
            return new ct(V)
        };
        var yt = function(j) {
            function V(L, U) {
                var pe = this;
                L === void 0 && (L = "socket.io"), U === void 0 && (U = ""), j.call(this), this.binaryType = "blob";
                var ge = new J(L);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = V.CONNECTING, this.protocol = "", this.target = this, typeof U == "string" || typeof U == "object" && U !== null ? this.protocol = U : Array.isArray(U) && U.length > 0 && (this.protocol = U[0]);
                var Ne = Se.attachWebSocket(this, this.url);
                Fe(function() {
                    Ne ? (this.readyState = V.OPEN, Ne.dispatchEvent(E({
                        type: "connection"
                    }), Ne, this), Ne.dispatchEvent(E({
                        type: "connect"
                    }), Ne, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = V.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), G("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V;
            var W = {
                broadcast: {}
            };
            return V.prototype.close = function() {
                if (this.readyState === V.OPEN) {
                    var U = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = V.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U && U.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), U), this
                }
            }, V.prototype.disconnect = function() {
                return this.close()
            }, V.prototype.emit = function(U) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: U,
                        origin: this.url,
                        data: pe
                    }),
                    Ve = Se.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(pe)), this
            }, V.prototype.send = function(U) {
                return this.emit("message", U), this
            }, W.broadcast.get = function() {
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var L = this,
                    U = Se.serverLookup(this.url);
                if (!U) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return U.emit(ge, Ne, {
                            websockets: Se.websocketsLookup(L.url, null, L)
                        }), L
                    },
                    to: function(ge) {
                        return U.to(ge, L)
                    },
                    in: function(ge) {
                        return U.in(ge, L)
                    }
                }
            }, V.prototype.on = function(U, pe) {
                return this.addEventListener(U, pe), this
            }, V.prototype.off = function(U, pe) {
                this.removeEventListener(U, pe)
            }, V.prototype.hasListeners = function(U) {
                var pe = this.listeners[U];
                return Array.isArray(pe) ? !!pe.length : !1
            }, V.prototype.join = function(U) {
                Se.addMembershipToRoom(this, U)
            }, V.prototype.leave = function(U) {
                Se.removeMembershipFromRoom(this, U)
            }, V.prototype.to = function(U) {
                return this.broadcast.to(U)
            }, V.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, V.prototype.dispatchEvent = function(U) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Ve = U.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(jt) {
                    ge.length > 0 ? jt.apply(pe, ge) : jt.call(pe, U.data ? U.data : U)
                })
            }, Object.defineProperties(V.prototype, W), V
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(V, W) {
            return new yt(V, W)
        };
        bt.connect = function(V, W) {
            return bt(V, W)
        };
        var Jt = ct,
            Je = Le,
            Mt = bt;
        n.Server = Jt, n.WebSocket = Je, n.SocketIO = Mt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var sC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(_, k) {
            var I = _.x - k.x,
                D = _.y - k.y;
            return I * I + D * D
        }

        function n(_, k, I) {
            var D = k.x,
                M = k.y,
                Y = I.x - D,
                ne = I.y - M;
            if (Y !== 0 || ne !== 0) {
                var K = ((_.x - D) * Y + (_.y - M) * ne) / (Y * Y + ne * ne);
                K > 1 ? (D = I.x, M = I.y) : K > 0 && (D += Y * K, M += ne * K)
            }
            return Y = _.x - D, ne = _.y - M, Y * Y + ne * ne
        }

        function i(_, k) {
            for (var I = _[0], D = [I], M, Y = 1, ne = _.length; Y < ne; Y++) M = _[Y], e(M, I) > k && (D.push(M), I = M);
            return I !== M && D.push(M), D
        }

        function a(_, k, I, D, M) {
            for (var Y = D, ne, K = k + 1; K < I; K++) {
                var re = n(_[K], _[k], _[I]);
                re > Y && (ne = K, Y = re)
            }
            Y > D && (ne - k > 1 && a(_, k, ne, D, M), M.push(_[ne]), I - ne > 1 && a(_, ne, I, D, M))
        }

        function f(_, k) {
            var I = _.length - 1,
                D = [_[0]];
            return a(_, 0, I, k, D), D.push(_[I]), D
        }

        function m(_, k, I) {
            if (_.length <= 2) return _;
            var D = k !== void 0 ? k * k : 1;
            return _ = I ? _ : i(_, D), _ = f(_, D), _
        }
        t.exports = m, t.exports.default = m
    })()
})(sC);
const oC = Et.View.extend({
    el: "#banner",
    template: at.template(`
        <div class="banner-image"></div>
        <div class="banner-text"></div>
        <div class="banner-cta"></div>
    `),
    events: {
        click: "onBannerClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: ["visible", "theme"],
                onGet([t, e]) {
                    let n = e || "no-theme";
                    return t && (n += " show"), n
                }
            }]
        },
        ".banner-text": "copy",
        ".banner-cta": "cta"
    },
    initialize() {
        this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
    },
    onBannerClick() {
        yh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            fe(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class ni {
    static get isVisible() {
        return this.view ? this.view.state === "on" : !1
    }
    static async update(e, n) {
        if (!n || n.lobbyState !== "PostGame") {
            this.hide();
            return
        }
        this.view || await this.init(e, n), this.show()
    }
    static async init(e) {
        if (!e) {
            this.bannerData = !1;
            return
        }
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new oC({
            model: new ot.Model(this.bannerData)
        }), this.isInitialized = !0)
    }
    static show() {
        !this.view || this.view.model.set({
            visible: !0
        })
    }
    static hide() {
        !this.view || this.view.model.set({
            visible: !1
        })
    }
    static async loadBannerData(e) {
        try {
            const i = await (await fetch({
                TV_ADROLL_ADVERTISABLE_ID: "WN335VM7RVAMPDZAOWMIHP",
                TV_ADROLL_PIXEL_ID: "WN335VM7RVAMPDZAOWMIHP",
                TV_CDN_IMAGES_URL: "https://s3.amazonaws.com/static.jackboxgames.com/game-images",
                TV_DEBUG: "false",
                TV_DOMAINS: "https://dev.jackbox.tv,https://qa.jackbox.tv,https://jackbox.tv,https://tinyshirts.jackboxgames.com",
                TV_ECAST: window.location.hostname,
                TV_GA_STREAM_ID: "3795853220",
                TV_GA_MEASUREMENT_ID: "G-V1QJVQMYF1",
                TV_S3_BUNDLES: "https://bundles.jackbox.tv",
                TV_S3_DEBUG: "https://jbg-ops.s3.amazonaws.com",
                TV_SENTRY_ALLOWED_URLS: "/(http|https):\\/\\/(\\S*\\.)?jackbox\\.tv/i",
                TV_SENTRY_DSN: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                TV_SENTRY_RATE: "0.2",
                TV_SLACK_DEBUG: "https://hooks.slack.com/services/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",
                TV_TWITCH_CLIENT_ID: "yn2iepd23vskpmkzgeg2lkfsct7gsc",
                BASE_URL: "https://bundles.jackbox.tv/main/pp1-drawful/",
                MODE: "production",
                DEV: !1,
                PROD: !0
            }.TV_BANNERS_URL)).json();
            return !i || !i.postGameBanners ? !1 : i.postGameBanners[e]
        } catch (n) {
            return console.error("Unable to load banner data", n), !1
        }
    }
}
st(ni, "view", null), st(ni, "isInitialized", !1), st(ni, "bannerConfig", null);
var aC = {};
(function(t) {
    (function(e) {
        e(Pi.exports, ot, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(v) {
            v = e.map(e.flatten([v]), function(N) {
                return e.defaults({}, N, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(v)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(v, N) {
                if (e.isObject(N)) {
                    e.each(N, function(se, ye) {
                        this.unstickit(v, ye)
                    }, this);
                    return
                }
                var q = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(v && se.model !== v) && !(N && se.config.selector != N)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), q.push(se.model), !0
                }), e.invoke(e.uniq(q), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), N)
            },
            stickit: function(v, N) {
                var q = v || this.model,
                    ae = N || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(q, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), se && (ye = se.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, N, q) {
                var ae = v || this.model,
                    se = ".stickit." + ae.cid;
                if (q = q || {}, e.isObject(N)) {
                    var ye = N;
                    e.each(ye, function(J, Fe) {
                        this.addBinding(ae, Fe, J)
                    }, this);
                    return
                }
                var d = N === ":el" ? this.$el : this.$(N);
                if (this.unstickit(ae, N), !!d.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var _e = M(d, q),
                        Oe = _e.observe;
                    _e.selector = N, _e.view = this;
                    var Pe = _e.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: _e
                        }, _e.setOptions);
                    if (_e._destroy = function() {
                            m.call(this, _e.destroy, d, ae, _e)
                        }, Y(d, _e, ae, Oe), K(d, _e, ae, Oe), ne(d, _e, ae), Oe) {
                        e.each(_e.events, function(J) {
                            var Fe = J + se,
                                G = function(Ae) {
                                    var be = m.call(this, _e.getVal, d, Ae, _e, a.call(arguments, 1)),
                                        we = _(_e.updateModel, be, Ae, _e);
                                    we && I(ae, Oe, be, lt, _e)
                                },
                                oe = N === ":el" ? "" : N;
                            this.$el.on(Fe, oe, e.bind(G, this))
                        }, this), e.each(e.flatten([Oe]), function(J) {
                            k(ae, "change:" + J, _e, function(Fe, G, oe) {
                                var Ae = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = D(ae, Oe, _e);
                                    re(d, _e, be, ae)
                                }
                            })
                        });
                        var Be = D(ae, Oe, _e);
                        re(d, _e, Be, ae, !0)
                    }
                    m.call(this, _e.initialize, d, ae, _e)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(v, N) {
                var q = (N || "").split("."),
                    ae = e.reduce(q, function(se, ye) {
                        return se[ye]
                    }, v);
                return ae == null ? v : ae
            },
            m = function(v) {
                if (v = e.isString(v) ? f(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            _ = function(v, N, q) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var ae = e.last(arguments).view;
                    return m.apply(ae, arguments)
                }
                return !1
            },
            k = function(v, N, q, ae) {
                var se = q.view;
                v.on(N, ae, se), se._modelBindings.push({
                    model: v,
                    event: N,
                    fn: ae,
                    config: q
                })
            },
            I = function(v, N, q, ae, se) {
                var ye = {},
                    d = se.view;
                se.onSet && (q = m.call(d, se.onSet, q, se)), se.set ? m.call(d, se.set, N, q, ae, se) : (ye[N] = q, e.isArray(N) && e.isArray(q) && (ye = e.reduce(N, function(_e, Oe, Pe) {
                    return _e[Oe] = e.has(q, Pe) ? q[Pe] : null, _e
                }, {})), v.set(ye, ae))
            },
            D = function(v, N, q) {
                var ae = q.view,
                    se = function(_e) {
                        return v[q.escape ? "escape" : "get"](_e)
                    },
                    ye = function(_e) {
                        return _e == null ? "" : _e
                    },
                    d = e.isArray(N) ? e.map(N, se) : se(N);
                return q.onGet && (d = m.call(ae, q.onGet, d, q)), e.isArray(d) ? e.map(d, ye) : ye(d)
            },
            M = i.getConfiguration = function(v, N) {
                var q = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ye, d, _e) {
                        se[_e.updateMethod] && se[_e.updateMethod](ye)
                    },
                    getVal: function(se, ye, d) {
                        return se[d.updateMethod]()
                    }
                }];
                q = q.concat(e.filter(i._handlers, function(se) {
                    return v.is(se.selector)
                })), q.push(N);
                var ae = e.extend.apply(e, q);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            Y = function(v, N, q, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = N.view;
                e.each(N.attributes || [], function(d) {
                    d = e.clone(d), d.view = ye;
                    var _e = "",
                        Oe = d.observe || (d.observe = ae),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = D(q, Oe, d);
                            d.name === "class" ? (v.removeClass(_e).addClass(Be), _e = Be) : v[lt](d.name, Be)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(q, "change:" + lt, N, Pe)
                    }), Pe()
                })
            },
            ne = function(v, N, q, ae) {
                e.each(N.classes || [], function(se, ye) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = N.view;
                    var d = se.observe,
                        _e = function() {
                            var Oe = D(q, d, se);
                            v.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([d]), function(Oe) {
                        k(q, "change:" + Oe, N, _e)
                    }), _e()
                })
            },
            K = function(v, N, q, ae) {
                if (N.visible != null) {
                    var se = N.view,
                        ye = function() {
                            var d = N.visible,
                                _e = N.visibleFn,
                                Oe = D(q, ae, N),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!m.call(se, d, Oe, N)), _e ? m.call(se, _e, v, Pe, N) : v.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        k(q, "change:" + d, N, ye)
                    }), ye()
                }
            },
            re = function(v, N, q, ae, se) {
                var ye = N.view;
                !_(N.updateView, q, N) || (m.call(ye, N.update, v, q, ae, N), se || m.call(ye, N.afterUpdate, v, q, N))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(v, N) {
                v.val(N)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(v, N) {
                v.val(N)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(v, N) {
                v.filter('[value="' + N + '"]').prop("checked", !0)
            },
            getVal: function(v) {
                return v.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(v, N, q, ae) {
                if (v.length > 1) N || (N = []), v.each(function(ye, d) {
                    var _e = n.$(d),
                        Oe = e.contains(N, _e.val());
                    _e.prop("checked", Oe)
                });
                else {
                    var se = e.isBoolean(N) ? N : N === v.val();
                    v.prop("checked", se)
                }
            },
            getVal: function(v) {
                var N;
                if (v.length > 1) N = e.reduce(v, function(ae, se) {
                    var ye = n.$(se);
                    return ye.prop("checked") && ae.push(ye.val()), ae
                }, []);
                else {
                    N = v.prop("checked");
                    var q = v.val();
                    q !== "on" && q != null && (N = N ? v.val() : null)
                }
                return N
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(v, N, q, ae) {
                var se, ye = ae.selectOptions,
                    d = ye && ye.collection || void 0,
                    _e = v.prop("multiple");
                if (!ye) {
                    ye = {};
                    var Oe = function(ue) {
                        return ue.map(function(Se, Te) {
                            var $e = n.$(Te).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : Te.value,
                                label: Te.text
                            }
                        }).get()
                    };
                    v.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, v.find("> option").length && (d.opt_labels.push(void 0), e.each(v.find("> option"), function(ue) {
                        d[void 0] = Oe(n.$(ue))
                    })), e.each(v.find("optgroup"), function(ue) {
                        var Se = n.$(ue).attr("label");
                        d.opt_labels.push(Se), d[Se] = Oe(n.$(ue).find("option"))
                    })) : d = Oe(v.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(ue, Se, Te) {
                    e.each(ue, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, O, P) {
                                Ke.text(S), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), P === !0 && Ke.prop("disabled", "disabled")
                            },
                            qt, E, l;
                        $e === "__default__" ? (qt = Te.label, E = Te.value, l = Te.disabled) : (qt = f($e, ye.labelPath), E = f($e, ye.valuePath), l = f($e, ye.disabledPath)), Bt(qt, E, l);
                        var g = function() {
                            return !_e && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : _e && e.isArray(Te) && e.each(Te, function(S) {
                            e.isObject(S) && (S = f(S, ye.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = m.call(this, d, v, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        J = function() {
                            var ue = D(q, ae.observe, ae);
                            m.call(this, ae.update, v, ue, q, ae)
                        },
                        Fe = function() {
                            Be.off("add remove reset sort", J)
                        },
                        G = function() {
                            Fe(), Be.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", Fe, this), Be.on("add remove reset sort", J, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", G)
                    }), q.once("stickit:unstuck", G, this), se = se.toJSON()
                }
                if (ye.defaultOption) {
                    var oe = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, v, ae) : ye.defaultOption;
                    Pe(["__default__"], v, oe)
                }
                if (e.isArray(se)) Pe(se, v, N);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var Se = n.$("<optgroup/>").attr("label", ue);
                    Pe(se[ue], Se, N), v.append(Se)
                });
                else {
                    var Ae = [],
                        be;
                    for (var we in se) be = {}, be[ye.valuePath] = we, be[ye.labelPath] = se[we], Ae.push(be);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, v, N)
                }
            },
            getVal: function(v) {
                var N = v.find("option:selected");
                return v.prop("multiple") ? e.map(N, function(q) {
                    return n.$(q).data("stickit-bind-val")
                }) : N.data("stickit-bind-val")
            }
        }]), i
    })
})(aC);
const lC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    Xu = Et.View.extend({
        template: at.template(lC),
        model: new ot.Model({}),
        className() {
            let t = "button-group btn-group";
            return this.options.block !== !1 && (t += " btn-block"), t
        },
        events: {
            "click .button": "onClick"
        },
        bindings: {
            ":el": {
                observe: "visible",
                visible(t) {
                    return t !== !1
                },
                visibleFn(t, e) {
                    t.css("display", e ? "" : "none")
                },
                attributes: [{
                    name: "class",
                    observe: ["className", "selected", "disabled", "active"],
                    onGet([t, e, n, i]) {
                        let a = "";
                        return t && (a += t), e && (a += " selected"), n && (a += " disabled"), i && (a += " active"), a
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || fe("<div />").text(t).html()
                },
                attributes: [{
                    name: "disabled",
                    observe: "disabled"
                }, {
                    name: "data-action",
                    observe: "action",
                    onGet(t) {
                        return t || "choose"
                    }
                }, {
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "data-key",
                    observe: "key"
                }, {
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        if (!t) return "";
                        let e = "";
                        return t.text && (e += `color: ${t.text};`), t.background && (e += `background-color: ${t.background};`), e
                    }
                }, {
                    name: "type",
                    observe: "action",
                    onGet(t) {
                        return t === "submit" ? "submit" : "button"
                    }
                }]
            },
            ".censor-button": {
                observe: "censorable",
                visible: !0,
                visibleFn(t, e) {
                    e || t.remove()
                },
                attributes: [{
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "class",
                    observe: ["className", "isWarned"],
                    onGet(t) {
                        if (!t) return null;
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " isWarned"), e
                    }
                }]
            }
        },
        onRender() {
            this.model.set("index", this.getOption("index")), this.getOption("action") && this.model.set("action", this.getOption("action")), this.stickit()
        },
        onClick(t) {
            const e = fe(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Vs, rs = typeof Map == "function" ? new Map : (Ti = [], Vs = [], {
        has: function(t) {
            return Ti.indexOf(t) > -1
        },
        get: function(t) {
            return Vs[Ti.indexOf(t)]
        },
        set: function(t, e) {
            Ti.indexOf(t) === -1 && (Ti.push(t), Vs.push(e))
        },
        delete: function(t) {
            var e = Ti.indexOf(t);
            e > -1 && (Ti.splice(e, 1), Vs.splice(e, 1))
        }
    }),
    Yu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Yu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function cC(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function uC(t) {
    var e = rs.get(t);
    e && e.update()
}
var Kr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Kr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Kr.update = function(t) {
    return t
}) : ((Kr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !rs.has(i)) {
                var a, f = null,
                    m = null,
                    _ = null,
                    k = function() {
                        i.clientWidth !== m && Y()
                    },
                    I = function(ne) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", Y, !1), i.removeEventListener("keyup", Y, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", Y, !1), Object.keys(ne).forEach(function(K) {
                            i.style[K] = ne[K]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", Y, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", Y, !1), i.addEventListener("autosize:update", Y, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: I,
                    update: Y
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), Y()
            }

            function D(ne) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ne
            }

            function M() {
                if (i.scrollHeight !== 0) {
                    var ne = function(re) {
                            for (var v = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && v.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return v
                        }(i),
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", m = i.clientWidth, ne.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function Y() {
                M();
                var ne = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ne ? K.overflowY === "hidden" && (D("scroll"), M(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (D("hidden"), M(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== re) {
                    _ = re;
                    var v = Yu("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], cC), t
}, Kr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], uC), t
});
var rc = Kr;
const hC = `<form>\r
    <div class="form-group">\r
        <div class="inputGroup">\r
            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>\r
            <span class="inlineSubmit">\r
                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>\r
            </span>\r
            <span id="helpBlock2" class="help-block errorText"></span>\r
            <div class="charCountDisplay"><span class="charRemaining">70</span></div>\r
        </div>\r
    </div>\r
</form>`,
    to = Et.View.extend({
        tagName: "div",
        className: "input",
        model: new ot.Model({}),
        template: at.template(hC),
        events: {
            "keypress textarea": "onKeypress",
            "click .inlineSubmitButton": "onSubmitClick",
            "input textarea": "onInputChange"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "hidden",
                    onGet(t) {
                        return t === !0 ? "display: none;" : "display: block;"
                    }
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `input ${t!==void 0?t:""}`
                    }
                }]
            },
            textarea: {
                attributes: [{
                    name: "maxlength",
                    observe: "maxLength"
                }, {
                    name: "placeholder",
                    observe: "placeholder"
                }, {
                    name: "autocapitalize",
                    observe: "autocapitalize"
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `form-control ${t!==void 0?t:""}`
                    }
                }]
            },
            ".inputGroup": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group" : ""
                    }
                }]
            },
            ".inlineSubmit": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group-btn" : ""
                    }
                }, {
                    name: "style",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "" : "display:none;"
                    }
                }]
            },
            ".inlineSubmitText": {
                observe: "inlineSubmitText",
                onGet(t) {
                    return t !== void 0 ? t : "Send"
                }
            },
            ".form-group": {
                attributes: [{
                    name: "class",
                    observe: "error",
                    onGet(t) {
                        return t ? "has-error" : ""
                    }
                }]
            },
            ".errorText": {
                observe: "error",
                updateMethod: "html",
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t ? typeof t == "object" ? t.html ? t.html : fe("<div />").text(t.text).html() : t : null
                }
            },
            ".charRemaining": "remaining",
            ".maxChars": "maxLength",
            ".charCountDisplay": {
                observe: ["maxLength", "counter"],
                visible(t) {
                    return t[0] && t[1]
                }
            }
        },
        render() {
            this.$el.html(this.template()), this.stickit(), this.model.set("remaining", this.model.get("maxLength"))
        },
        onAttach() {
            this.getOption("preventAutosize") || rc(fe("textarea"))
        },
        onSubmitClick() {
            return fe("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (fe("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            fe(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = fe(this.$el).find("textarea");
            fe(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = fe(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return Ut.sanitize(this.getValue())
        },
        sanitize(t) {
            return Ut.sanitize(t)
        },
        sanitizeInput(t) {
            return Ut.sanitizeInput(t)
        }
    }),
    dC = '<div class="text"></div>',
    Bi = Et.View.extend({
        tagName: "div",
        template: at.template(dC),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : fe("<div />").text(t).html()
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "background",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "class",
                    observe: "className"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    fi = Et.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Bi : Xu
        },
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block", "action"])
        },
        childViewOptions(t, e) {
            let n = !0,
                i;
            return t.get("block") !== void 0 ? n = t.get("block") : this.getOption("block") !== void 0 && (n = this.getOption("block")), t.get("action") !== void 0 ? i = t.get("action") : this.getOption("action") !== void 0 && (i = this.getOption("action")), {
                block: n,
                action: i,
                index: t.get("key") !== void 0 ? t.get("key") : e
            }
        }
    });
let sc = {};

function Ku(t, ...e) {
    !sc[t] || sc[t].map(n => n(...e))
}
let Jr, Gs;

function Li() {
    return Jr
}

function vo() {
    return Gs
}

function fC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Gs = Jr.getContext("2d"), Gs.imageSmoothingEnabled = !1, Ku("init"), {
        canvas: Jr,
        context: Gs
    }
}
class rl {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: a = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = a;
        let {
            width: f,
            height: m,
            margin: _ = 0
        } = e.frame;
        this.width = f, this.height = m, this.margin = _, this._f = 0, this._a = 0
    }
    clone() {
        return yo(this)
    }
    reset() {
        this._f = 0, this._a = 0
    }
    update(e = 1 / 60) {
        if (!(!this.loop && this._f == this.frames.length - 1))
            for (this._a += e; this._a * this.frameRate >= 1;) this._f = ++this._f % this.frames.length, this._a -= 1 / this.frameRate
    }
    render({
        x: e,
        y: n,
        width: i = this.width,
        height: a = this.height,
        context: f = vo()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const pC = () => {};

function gC() {
    let t = Li();
    vo().clearRect(0, 0, t.width, t.height)
}

function mC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        m = 1 / t,
        _ = e ? gC : pC,
        k, I, D, M, Y;
    const ne = window.performance || Date;

    function K() {
        if (I = requestAnimationFrame(K), D = ne.now(), M = D - k, k = D, !(M > 1e3)) {
            for (Ku("tick"), a += M; a >= f;) Y.update(m), a -= f;
            _(), Y.render()
        }
    }
    return Y = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ne.now(), this.isStopped = !1, requestAnimationFrame(K)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: K,
        set _last(re) {
            k = re
        }
    }, Y
}
class vC {
    constructor({
        create: e,
        maxSize: n = 1024
    } = {}) {
        let i;
        if (!e || !(i = e()) || !(i.update && i.init && i.isAlive)) throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");
        this._c = e, this.objects = [e()], this.size = 0, this.maxSize = n
    }
    get(e = {}) {
        if (this.size === this.objects.length) {
            if (this.size === this.maxSize) return;
            for (let i = 0; i < this.size && this.objects.length < this.maxSize; i++) this.objects.push(this._c())
        }
        let n = this.objects[this.size];
        return this.size++, n.init(e), n
    }
    getAliveObjects() {
        return this.objects.slice(0, this.size)
    }
    clear() {
        this.size = this.objects.length = 0, this.objects.push(this._c())
    }
    update(e) {
        let n, i = !1;
        for (let a = this.size; a--;) n = this.objects[a], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((a, f) => f.isAlive() - a.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
vC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        m = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), m && n.push(3)), n
}
class sl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Li();
        this.bounds = i || {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        }, this._b = !1, this._d = 0, this._o = [], this._s = [], this._p = null
    }
    clear() {
        this._s.map(function(e) {
            e.clear()
        }), this._b = !1, this._o.length = 0
    }
    get(e) {
        let n = new Set,
            i, a;
        for (; this._s.length && this._b;) {
            for (i = oc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
            return Array.from(n)
        }
        return this._o.filter(f => f !== e)
    }
    add() {
        let e, n, i, a;
        for (n = 0; n < arguments.length; n++) {
            if (i = arguments[n], Array.isArray(i)) {
                this.add.apply(this, i);
                continue
            }
            if (this._b) {
                this._a(i);
                continue
            }
            if (this._o.push(i), this._o.length > this.maxObjects && this._d < this.maxDepth) {
                for (this._sp(), e = 0; a = this._o[e]; e++) this._a(a);
                this._o.length = 0
            }
        }
    }
    _a(e, n, i) {
        for (n = oc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = ol({
                bounds: {
                    x: this.bounds.x + (i % 2 === 1 ? e : 0),
                    y: this.bounds.y + (i >= 2 ? n : 0),
                    width: e,
                    height: n
                },
                maxDepth: this.maxDepth,
                maxObjects: this.maxObjects
            }), this._s[i]._d = this._d + 1, this._s[i]._p = this
    }
}

function ol(t) {
    return new sl(t)
}
ol.prototype = sl.prototype;
ol.class = sl;
class al {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return fr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
    }
    clamp(e, n, i, a) {
        this._c = !0, this._a = e, this._b = n, this._d = i, this._e = a
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    set x(e) {
        this._x = this._c ? Math.min(Math.max(this._a, e), this._d) : e
    }
    set y(e) {
        this._y = this._c ? Math.min(Math.max(this._b, e), this._e) : e
    }
}

function fr(t, e, n = {}) {
    let i = new al(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
fr.prototype = al.prototype;
fr.class = al;
class ll {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: a,
            dy: f,
            ddx: m,
            ddy: _,
            width: k,
            height: I,
            image: D
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, f), this.acceleration = fr(m, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
        for (let M in e) this[M] = e[M];
        D && (this.width = k !== void 0 ? k : D.width, this.height = I !== void 0 ? I : D.height), this.sx = 0, this.sy = 0
    }
    get x() {
        return this.position.x
    }
    get y() {
        return this.position.y
    }
    get dx() {
        return this.velocity.x
    }
    get dy() {
        return this.velocity.y
    }
    get ddx() {
        return this.acceleration.x
    }
    get ddy() {
        return this.acceleration.y
    }
    get animations() {
        return this._a
    }
    get viewX() {
        return this.x - this.sx
    }
    get viewY() {
        return this.y - this.sy
    }
    get width() {
        return this._w
    }
    get height() {
        return this._h
    }
    set x(e) {
        this.position.x = e
    }
    set y(e) {
        this.position.y = e
    }
    set dx(e) {
        this.velocity.x = e
    }
    set dy(e) {
        this.velocity.y = e
    }
    set ddx(e) {
        this.acceleration.x = e
    }
    set ddy(e) {
        this.acceleration.y = e
    }
    set animations(e) {
        let n, i;
        this._a = {};
        for (n in e) this._a[n] = e[n].clone(), i = i || this._a[n];
        this.currentAnimation = i, this.width = this.width || i.width, this.height = this.height || i.height
    }
    set viewX(e) {}
    set viewY(e) {}
    set width(e) {
        let n = e < 0 ? -1 : 1;
        this._fx = n, this._w = e * n
    }
    set height(e) {
        let n = e < 0 ? -1 : 1;
        this._fy = n, this._h = e * n
    }
    isAlive() {
        return this.ttl > 0
    }
    collidesWith(e) {
        if (this.rotation || e.rotation) return null;
        let n = this.x - this.width * this.anchor.x,
            i = this.y - this.height * this.anchor.y,
            a = e.x,
            f = e.y;
        return e.anchor && (a -= e.width * e.anchor.x, f -= e.height * e.anchor.y), n < a + e.width && n + this.width > a && i < f + e.height && i + this.height > f
    }
    update(e) {
        this.advance(e)
    }
    render() {
        this.draw()
    }
    playAnimation(e) {
        this.currentAnimation = this.animations[e], this.currentAnimation.loop || this.currentAnimation.reset()
    }
    advance(e) {
        this.velocity = this.velocity.add(this.acceleration, e), this.position = this.position.add(this.velocity, e), this.ttl--, this.currentAnimation && this.currentAnimation.update(e)
    }
    draw() {
        let e = -this.width * this.anchor.x,
            n = -this.height * this.anchor.y;
        if (this.context.save(), this.context.translate(this.viewX, this.viewY), this.rotation && this.context.rotate(this.rotation), this._fx == -1 || this._fy == -1) {
            let i = this.width / 2 + e,
                a = this.height / 2 + n;
            this.context.translate(i, a), this.context.scale(this._fx, this._fy), this.context.translate(-i, -a)
        }
        this.image ? this.context.drawImage(this.image, e, n, this.width, this.height) : this.currentAnimation ? this.currentAnimation.render({
            x: e,
            y: n,
            width: this.width,
            height: this.height,
            context: this.context
        }) : (this.context.fillStyle = this.color, this.context.fillRect(e, n, this.width, this.height)), this.context.restore()
    }
}

function cl(t) {
    return new ll(t)
}
cl.prototype = ll.prototype;
cl.class = ll;

function yC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        a = +n[1],
        f = i;
    if (i < a)
        for (; f <= a; f++) e.push(f);
    else
        for (; f >= a; f--) e.push(f);
    return e
}
class wC {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: a,
        animations: f
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: a
        }, this._f = e.width / n | 0, this.createAnimations(f)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: a,
                frameRate: f,
                loop: m
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(_ => {
                n = n.concat(yC(_))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: m
            })
        }
    }
}
wC.prototype;
var Ju = {
    exports: {}
};
/*!
 * sweetalert2 v11.4.26
 * Released under the MIT License.
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i()
    })(vt, function() {
        const n = "SweetAlert2:",
            i = c => {
                const h = [];
                for (let b = 0; b < c.length; b++) h.indexOf(c[b]) === -1 && h.push(c[b]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            m = c => {
                console.error("".concat(n, " ").concat(c))
            },
            _ = [],
            k = c => {
                _.includes(c) || (_.push(c), f(c))
            },
            I = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
            M = c => c && typeof c.toPromise == "function",
            Y = c => M(c) ? c.toPromise() : Promise.resolve(c),
            ne = c => c && Promise.resolve(c) === c,
            K = c => c[Math.floor(Math.random() * c.length)],
            re = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                template: void 0,
                toast: !1,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: {},
                target: "body",
                color: void 0,
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                preDeny: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                returnFocus: !0,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                showLoaderOnDeny: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputLabel: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                returnInputValueOnDeny: !1,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                willOpen: void 0,
                didOpen: void 0,
                didRender: void 0,
                willClose: void 0,
                didClose: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            },
            v = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            N = {},
            q = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => v.indexOf(c) !== -1,
            ye = c => N[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            _e = c => {
                q.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && I(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && _e(h), Oe(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            J = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Fe = Be(["success", "warning", "info", "question", "error"]),
            G = () => document.body.querySelector(".".concat(J.container)),
            oe = c => {
                const h = G();
                return h ? h.querySelector(c) : null
            },
            Ae = c => oe(".".concat(c)),
            be = () => Ae(J.popup),
            we = () => Ae(J.icon),
            ue = () => Ae(J.title),
            Se = () => Ae(J["html-container"]),
            Te = () => Ae(J.image),
            $e = () => Ae(J["progress-steps"]),
            Ke = () => Ae(J["validation-message"]),
            dt = () => oe(".".concat(J.actions, " .").concat(J.confirm)),
            Bt = () => oe(".".concat(J.actions, " .").concat(J.deny)),
            qt = () => Ae(J["input-label"]),
            E = () => oe(".".concat(J.loader)),
            l = () => oe(".".concat(J.actions, " .").concat(J.cancel)),
            g = () => Ae(J.actions),
            S = () => Ae(J.footer),
            O = () => Ae(J["timer-progress-bar"]),
            P = () => Ae(J.close),
            B = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
            te = () => {
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, $) => {
                        const me = parseInt(b.getAttribute("tabindex")),
                            He = parseInt($.getAttribute("tabindex"));
                        return me > He ? 1 : me < He ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll(B)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => ge(b))
            },
            ke = () => Ct(document.body, J.shown) && !Ct(document.body, J["toast-shown"]) && !Ct(document.body, J["no-backdrop"]),
            he = () => be() && Ct(be(), J.toast),
            De = () => be().hasAttribute("data-loading"),
            Le = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const $ = new DOMParser().parseFromString(h, "text/html");
                    Array.from($.querySelector("head").childNodes).forEach(me => {
                        c.appendChild(me)
                    }), Array.from($.querySelector("body").childNodes).forEach(me => {
                        c.appendChild(me)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let $ = 0; $ < b.length; $++)
                    if (!c.classList.contains(b[$])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(J).includes(b) && !Object.values(Fe).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (rn(c, h), h.customClass && h.customClass[b]) {
                    if (typeof h.customClass[b] != "string" && !h.customClass[b].forEach) return f("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof h.customClass[b], '"'));
                    Je(c, h.customClass[b])
                }
            },
            yt = (c, h) => {
                if (!h) return null;
                switch (h) {
                    case "select":
                    case "textarea":
                    case "file":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.radio, " input:checked")) || c.querySelector(".".concat(J.popup, " > .").concat(J.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.range, " input"));
                    default:
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.input))
                }
            },
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Jt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach($ => {
                    Array.isArray(c) ? c.forEach(me => {
                        b ? me.classList.add($) : me.classList.remove($)
                    }) : b ? c.classList.add($) : c.classList.remove($)
                }))
            },
            Je = (c, h) => {
                Jt(c, h, !0)
            },
            Mt = (c, h) => {
                Jt(c, h, !1)
            },
            j = (c, h) => {
                const b = Array.from(c.children);
                for (let $ = 0; $ < b.length; $++) {
                    const me = b[$];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            V = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            W = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            L = c => {
                c.style.display = "none"
            },
            U = (c, h, b, $) => {
                const me = c.querySelector(h);
                me && (me.style[b] = $)
            },
            pe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, b) : L(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge(Bt()) && !ge(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    $ = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || $ > 0
            },
            jt = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = O();
                ge(b) && (h && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(c / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    $ = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat($, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            it = {},
            Dn = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    $ = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, $)
            }),
            Sr = `
 <div aria-labelledby="`.concat(J.title, '" aria-describedby="').concat(J["html-container"], '" class="').concat(J.popup, `" tabindex="-1">
   <button type="button" class="`).concat(J.close, `"></button>
   <ul class="`).concat(J["progress-steps"], `"></ul>
   <div class="`).concat(J.icon, `"></div>
   <img class="`).concat(J.image, `" />
   <h2 class="`).concat(J.title, '" id="').concat(J.title, `"></h2>
   <div class="`).concat(J["html-container"], '" id="').concat(J["html-container"], `"></div>
   <input class="`).concat(J.input, `" />
   <input type="file" class="`).concat(J.file, `" />
   <div class="`).concat(J.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(J.select, `"></select>
   <div class="`).concat(J.radio, `"></div>
   <label for="`).concat(J.checkbox, '" class="').concat(J.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(J.label, `"></span>
   </label>
   <textarea class="`).concat(J.textarea, `"></textarea>
   <div class="`).concat(J["validation-message"], '" id="').concat(J["validation-message"], `"></div>
   <div class="`).concat(J.actions, `">
     <div class="`).concat(J.loader, `"></div>
     <button type="button" class="`).concat(J.confirm, `"></button>
     <button type="button" class="`).concat(J.deny, `"></button>
     <button type="button" class="`).concat(J.cancel, `"></button>
   </div>
   <div class="`).concat(J.footer, `"></div>
   <div class="`).concat(J["timer-progress-bar-container"], `">
     <div class="`).concat(J["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            kn = () => {
                const c = G();
                return c ? (c.remove(), Mt([document.documentElement, document.body], [J["no-backdrop"], J["toast-shown"], J["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = be(),
                    h = j(c, J.input),
                    b = j(c, J.file),
                    $ = c.querySelector(".".concat(J.range, " input")),
                    me = c.querySelector(".".concat(J.range, " output")),
                    He = j(c, J.select),
                    Gt = c.querySelector(".".concat(J.checkbox, " input")),
                    Vn = j(c, J.textarea);
                h.oninput = sn, b.onchange = sn, He.onchange = sn, Gt.onchange = sn, Vn.oninput = sn, $.oninput = () => {
                    sn(), me.value = $.value
                }, $.onchange = () => {
                    sn(), me.value = $.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(G(), J.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = J.container, h && Je(b, J["no-transition"]), nt(b, Sr);
                const $ = Tr(c.target);
                $.appendChild(b), mi(c), $i($), kr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && nt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? Fi(h, c) : nt(h, c.toString())
            },
            Fi = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let b = 0; b in h; b++) c.appendChild(h[b].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            mn = (() => {
                if (In()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in h)
                    if (Object.prototype.hasOwnProperty.call(h, b) && typeof c.style[b] < "u") return h[b];
                return !1
            })(),
            zi = () => {
                const c = document.createElement("div");
                c.className = J["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            wi = (c, h) => {
                const b = g(),
                    $ = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? L(b) : W(b), ct(b, h, "actions"), Hn(b, $, h), nt($, h.loaderHtml), ct($, h, "loader")
            };

        function Hn(c, h, b) {
            const $ = dt(),
                me = Bt(),
                He = l();
            bi($, "confirm", b), bi(me, "deny", b), bi(He, "cancel", b), Hi($, me, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, $), c.insertBefore(me, $)) : (c.insertBefore(He, h), c.insertBefore(me, h), c.insertBefore($, h)))
        }

        function Hi(c, h, b, $) {
            if (!$.buttonsStyling) return Mt([c, h, b], J.styled);
            Je([c, h, b], J.styled), $.confirmButtonColor && (c.style.backgroundColor = $.confirmButtonColor, Je(c, J["default-outline"])), $.denyButtonColor && (h.style.backgroundColor = $.denyButtonColor, Je(h, J["default-outline"])), $.cancelButtonColor && (b.style.backgroundColor = $.cancelButtonColor, Je(b, J["default-outline"]))
        }

        function bi(c, h, b) {
            pe(c, b["show".concat(a(h), "Button")], "inline-block"), nt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = J[h], ct(c, b, "".concat(h, "Button")), Je(c, b["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const b = G();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], J["no-backdrop"])
        }

        function o(c, h) {
            h in J ? Je(c, J[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, J.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in J && Je(c, J[b])
            }
        }
        var A = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Q = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            xe = (c, h) => {
                const b = be(),
                    $ = A.innerParams.get(c),
                    me = !$ || h.input !== $.input;
                Q.forEach(He => {
                    const Gt = j(b, J[He]);
                    Xt(He, h.inputAttributes), Gt.className = J[He], me && L(Gt)
                }), h.input && (me && qe(h), Gn(h))
            },
            qe = c => {
                if (!Ft[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    b = Ft[c.input](h, c);
                W(h), setTimeout(() => {
                    bt(b)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const b = c.attributes[h].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            Xt = (c, h) => {
                const b = yt(be(), c);
                if (!!b) {
                    It(b);
                    for (const $ in h) b.setAttribute($, h[$])
                }
            },
            Gn = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Un = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = J.input;
                    const $ = document.createElement("label"),
                        me = J["input-label"];
                    $.setAttribute("for", c.id), $.className = me, typeof b.customClass == "object" && Je($, b.customClass.inputLabel), $.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", $)
                }
            },
            Ar = c => j(be(), J[c] || J.input),
            Yt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ne(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            Ft = {};
        Ft.text = Ft.email = Ft.password = Ft.number = Ft.tel = Ft.url = (c, h) => (Yt(c, h.inputValue), Un(c, c, h), Nn(c, h), c.type = h.input, c), Ft.file = (c, h) => (Un(c, c, h), Nn(c, h), c), Ft.range = (c, h) => {
            const b = c.querySelector("input"),
                $ = c.querySelector("output");
            return Yt(b, h.inputValue), b.type = h.input, Yt($, h.inputValue), Un(b, c, h), c
        }, Ft.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                nt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Un(c, c, h), c
        }, Ft.radio = c => (c.textContent = "", c), Ft.checkbox = (c, h) => {
            const b = yt(be(), "checkbox");
            b.value = "1", b.id = J.checkbox, b.checked = Boolean(h.inputValue);
            const $ = c.querySelector("span");
            return nt($, h.inputPlaceholder), b
        }, Ft.textarea = (c, h) => {
            Yt(c, h.inputValue), Nn(c, h), Un(c, c, h);
            const b = $ => parseInt(window.getComputedStyle($).marginLeft) + parseInt(window.getComputedStyle($).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const $ = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const He = c.offsetWidth + b(c);
                            He > $ ? be().style.width = "".concat(He, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Gi = (c, h) => {
                const b = Se();
                ct(b, h, "htmlContainer"), h.html ? (yi(h.html, b), W(b, "block")) : h.text ? (b.textContent = h.text, W(b, "block")) : L(b), xe(c, h)
            },
            bo = (c, h) => {
                const b = S();
                pe(b, h.footer), h.footer && yi(h.footer, b), ct(b, h, "footer")
            },
            Co = (c, h) => {
                const b = P();
                nt(b, h.closeButtonHtml), ct(b, h, "closeButton"), pe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const b = A.innerParams.get(c),
                    $ = we();
                if (b && h.icon === b.icon) {
                    ms($, h), Rr($, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    L($);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), L($);
                    return
                }
                W($), ms($, h), Rr($, h), Je($, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const b in Fe) h.icon !== b && Mt(c, Fe[b]);
                Je(c, Fe[h.icon]), bn(c, h), Ui(), ct(c, h, "icon")
            },
            Ui = () => {
                const c = be(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let $ = 0; $ < b.length; $++) b[$].style.backgroundColor = h
            },
            gs = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            xo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ms = (c, h) => {
                let b = c.innerHTML,
                    $;
                h.iconHtml ? $ = Ir(h.iconHtml) : h.icon === "success" ? ($ = gs, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? $ = xo : $ = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== $.trim() && nt(c, $)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) U(c, b, "backgroundColor", h.iconColor);
                    U(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(J["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const b = Te();
                if (!h.imageUrl) return L(b);
                W(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), V(b, "width", h.imageWidth), V(b, "height", h.imageHeight), b.className = J.image, ct(b, h, "image")
            },
            Eo = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return L(b);
                W(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach(($, me) => {
                    const He = _o($);
                    if (b.appendChild(He), me === h.currentProgressStep && Je(He, J["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Gt = qn(h);
                        b.appendChild(Gt)
                    }
                })
            },
            _o = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step"]), nt(h, c), h
            },
            qn = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step-line"]), c.progressStepsDistance && V(h, "width", c.progressStepsDistance), h
            },
            Wn = (c, h) => {
                const b = ue();
                pe(b, h.title || h.titleText, "block"), h.title && yi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Dr = (c, h) => {
                const b = G(),
                    $ = be();
                h.toast ? (V(b, "width", h.width), $.style.width = "100%", $.insertBefore(E(), we())) : V($, "width", h.width), V($, "padding", h.padding), h.color && ($.style.color = h.color), h.background && ($.style.background = h.background), L(Ke()), So($, h)
            },
            So = (c, h) => {
                c.className = "".concat(J.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], J["toast-shown"]), Je(c, J.toast)) : Je(c, J.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, J["icon-".concat(h.icon)])
            },
            Lr = (c, h) => {
                Dr(c, h), Ze(c, h), Eo(c, h), Or(c, h), Ci(c, h), Wn(c, h), Co(c, h), Gi(c, h), wi(c, h), bo(c, h), typeof h.didRender == "function" && h.didRender(be())
            },
            Xn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            xi = () => {
                Array.from(document.body.children).forEach(h => {
                    h === G() || h.contains(G()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Mr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            ko = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Io(b), Object.assign(vs(b), To(b), Ao(b), Pr(b), Oo(b), Ro(b, qi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach($ => {
                    Yn($, ["name", "value"]);
                    const me = $.getAttribute("name"),
                        He = $.getAttribute("value");
                    typeof re[me] == "boolean" && He === "false" && (h[me] = !1), typeof re[me] == "object" && (h[me] = JSON.parse(He))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach($ => {
                    Yn($, ["type", "color", "aria-label"]);
                    const me = $.getAttribute("type");
                    h["".concat(me, "ButtonText")] = $.innerHTML, h["show".concat(a(me), "Button")] = !0, $.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = $.getAttribute("color")), $.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = $.getAttribute("aria-label"))
                }), h
            },
            Ao = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Yn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Pr = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Yn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Oo = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Yn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const $ = Array.from(c.querySelectorAll("swal-input-option"));
                return $.length && (h.inputOptions = {}, $.forEach(me => {
                    Yn(me, ["value"]);
                    const He = me.getAttribute("value"),
                        Gt = me.innerHTML;
                    h.inputOptions[He] = Gt
                })), h
            },
            Ro = (c, h) => {
                const b = {};
                for (const $ in h) {
                    const me = h[$],
                        He = c.querySelector(me);
                    He && (Yn(He, []), b[me.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Io = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const $ = b.tagName.toLowerCase();
                    h.indexOf($) === -1 && f("Unrecognized element <".concat($, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ys = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Do(c) {
            c.inputValidator || Object.keys(ys).forEach(h => {
                c.input === h && (c.inputValidator = ys[h])
            })
        }

        function Lo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ws(c) {
            Do(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Lo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), vi(c)
        }
        class Nr {
            constructor(h, b) {
                this.callback = h, this.remaining = b, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(h) {
                const b = this.running;
                return b && this.stop(), this.remaining += h, b && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const bs = () => {
                Le.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Le.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Le.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                Le.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Le.previousBodyPadding, "px"), Le.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, J.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, J.iosfix), Br(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (G().style.paddingBottom = "".concat(44, "px"))
            },
            Br = () => {
                const c = G();
                let h;
                c.ontouchstart = b => {
                    h = Mo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Mo = c => {
                const h = c.target,
                    b = G();
                return Po(c) || No(c) ? !1 : h === b || !Ve(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(Se()) && Se().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            No = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, J.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Mt(document.body, J.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            jr = c => {
                const h = G(),
                    b = be();
                typeof c.willOpen == "function" && c.willOpen(b);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    Vo(h, b)
                }, $r), ke() && (Bo(h, c.scrollbarPadding, me), xi()), !he() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Mt(h, J["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const b = G();
                h.removeEventListener(mn, Es), b.style.overflowY = "auto"
            },
            Vo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            Bo = (c, h, b) => {
                Cs(), h && b !== "hidden" && bs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Je(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Je(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], J.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], J["height-auto"])
            },
            s = c => {
                let h = be();
                h || new Ot, h = be();
                const b = E();
                he() ? L(we()) : u(h, c), W(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    $ = E();
                !h && ge(dt()) && (h = dt()), W(b), h && (L(h), $.setAttribute("data-button-to-replace", h.className)), $.parentNode.insertBefore($, h), Je([c, b], J.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? H(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (M(h.inputValue) || ne(h.inputValue)) && (s(dt()), Z(c, h))
            },
            w = (c, h) => {
                const b = c.getInput();
                if (!b) return null;
                switch (h.input) {
                    case "checkbox":
                        return x(b);
                    case "radio":
                        return T(b);
                    case "file":
                        return z(b);
                    default:
                        return h.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            x = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            z = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            H = (c, h) => {
                const b = be(),
                    $ = me => le[h.input](b, Ce(me), h);
                M(h.inputOptions) || ne(h.inputOptions) ? (s(dt()), Y(h.inputOptions).then(me => {
                    c.hideLoading(), $(me)
                })) : typeof h.inputOptions == "object" ? $(h.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                L(b), Y(h.inputValue).then($ => {
                    b.value = h.input === "number" ? parseFloat($) || 0 : "".concat($), W(b), b.focus(), c.hideLoading()
                }).catch($ => {
                    m("Error in inputValue promise: ".concat($)), b.value = "", W(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const $ = j(c, J.select),
                        me = (He, Gt, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, nt(pn, Gt), pn.selected = ie(Vn, b.inputValue), He.appendChild(pn)
                        };
                    h.forEach(He => {
                        const Gt = He[0],
                            Vn = He[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Gt, pn.disabled = !1, $.appendChild(pn), Vn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me($, Vn, Gt)
                    }), $.focus()
                },
                radio: (c, h, b) => {
                    const $ = j(c, J.radio);
                    h.forEach(He => {
                        const Gt = He[0],
                            Vn = He[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = J.radio, pn.value = Gt, ie(Gt, b.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        nt(Ko, Vn), Ko.className = J.label, nr.appendChild(pn), nr.appendChild(Ko), $.appendChild(nr)
                    });
                    const me = $.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, $) => {
                    let me = b;
                    typeof me == "object" && (me = Ce(me)), h.push([$, me])
                }) : Object.keys(c).forEach(b => {
                    let $ = c[b];
                    typeof $ == "object" && ($ = Ce($)), h.push([b, $])
                }), h
            },
            ie = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            L(h.loader), he() ? c.icon && W(we()) : Ue(h), Mt([h.popup, h.actions], J.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ue = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ne() && L(c.actions)
        };

        function rt(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => ge(be()),
            Nt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, $) => {
                et(h), b.toast || (h.keydownHandler = me => Wi(c, me, $), h.keydownTarget = b.keydownListenerCapture ? window : be(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const $ = te();
                if ($.length) return h = h + b, h === $.length ? h = 0 : h === -1 && (h = $.length - 1), $[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, b) => {
                const $ = A.innerParams.get(c);
                !$ || h.isComposing || h.keyCode === 229 || ($.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, $) : h.key === "Tab" ? Kn(h, $) : [...Dt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, $, b))
            },
            hn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const b = c.target,
                    $ = te();
                let me = -1;
                for (let He = 0; He < $.length; He++)
                    if (b === $[He]) {
                        me = He;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    b = Bt(),
                    $ = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, $].includes(document.activeElement)) return;
                const me = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Gt = 0; Gt < g().children.length; Gt++) {
                    if (He = He[me], !He) return;
                    if (He instanceof HTMLButtonElement && ge(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            an = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Xn.esc))
            };

        function Ln(c, h, b, $) {
            he() ? ks(c, $) : (gi(b).then(() => ks(c, $)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Vr(), Ei(), Mr()), vn()
        }

        function vn() {
            Mt([document.documentElement, document.body], [J.shown, J["height-auto"], J["no-backdrop"], J["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = je.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function _s() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || Ct(h, b.hideClass.popup)) return !1;
            Mt(h, b.showClass.popup), Je(h, b.hideClass.popup);
            const $ = G();
            return Mt($, b.showClass.backdrop), Je($, b.hideClass.backdrop), Ss(c, h, b), !0
        };

        function Fr(c) {
            const h = je.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (A.awaitingPromise.delete(c), A.innerParams.get(c) || c._destroy())
            },
            Zn = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ss = (c, h, b) => {
                const $ = G(),
                    me = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), me ? zr(c, h, $, b.returnFocus, b.didClose) : Ln(c, $, b.returnFocus, b.didClose)
            },
            zr = (c, h, b, $, me) => {
                it.swalCloseEventFinishedCallback = Ln.bind(null, c, b, $, me), h.addEventListener(mn, function(He) {
                    He.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, b) {
            const $ = A.domCache.get(c);
            h.forEach(me => {
                $[me].disabled = b
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const $ = c.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < $.length; me++) $[me].disabled = h
            } else c.disabled = h
        }

        function As() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function $o() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return Ts(this.getInput(), !1)
        }

        function Fo() {
            return Ts(this.getInput(), !0)
        }

        function Xi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = J["validation-message"], b.customClass && b.customClass.validationMessage && Je(h.validationMessage, b.customClass.validationMessage), W(h.validationMessage);
            const $ = this.getInput();
            $ && ($.setAttribute("aria-invalid", !0), $.setAttribute("aria-describedby", J["validation-message"]), bt($), Je($, J.inputerror))
        }

        function zo() {
            const c = A.domCache.get(this);
            c.validationMessage && L(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Mt(h, J.inputerror))
        }

        function Ho() {
            return A.domCache.get(this).progressSteps
        }

        function Go(c) {
            const h = be(),
                b = A.innerParams.get(this);
            if (!h || Ct(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const $ = ki(c),
                me = Object.assign({}, b, $);
            Lr(this, me), A.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const ki = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                se(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Uo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Hr(this)
        }
        const Hr = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(je, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Gr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: rt,
            close: Cn,
            isAwaitingPromise: _s,
            rejectPromise: Fr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: $o,
            enableInput: jo,
            disableInput: Fo,
            showValidationMessage: Xi,
            resetValidationMessage: zo,
            getProgressSteps: Ho,
            update: Go,
            _destroy: Uo
        });
        const Os = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            qo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const $ = w(c, b);
                b.inputValidator ? Yi(c, $, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, $) : Ji(c, $) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Yi = (c, h, b) => {
                const $ = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => Y($.inputValidator(h, $.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => Y(b.preDeny(h, b.validationMessage))).then(me => {
                    me === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof me > "u" ? h : me
                    })
                }).catch(me => Ki(c || void 0, me))) : c.close({
                    isDenied: !0,
                    value: h
                })
            },
            yn = (c, h) => {
                c.close({
                    isConfirmed: !0,
                    value: h
                })
            },
            Ki = (c, h) => {
                c.rejectPromise(h)
            },
            Ji = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => Y(b.preConfirm(h, b.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            Wo = (c, h, b) => {
                A.innerParams.get(c).toast ? Xo(c, h, b) : (Ur(h), Ds(h), Qi(c, h, b))
            },
            Xo = (c, h, b) => {
                h.popup.onclick = () => {
                    const $ = A.innerParams.get(c);
                    $ && (Is($) || $.timer || $.input) || b(Xn.close)
                }
            },
            Is = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Ur = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (An = !0)
                    }
                }
            },
            Ds = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Qi = (c, h, b) => {
                h.container.onclick = $ => {
                    const me = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    $.target === h.container && D(me.allowOutsideClick) && b(Xn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Yo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, $) => {
                    const me = c[$];
                    typeof me == "string" || er(me) ? h[b] = me : me !== void 0 && m("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++) b[$] = arguments[$];
            return new c(...b)
        }

        function qr(c) {
            class h extends this {
                _main($, me) {
                    return super._main($, Object.assign({}, c, me))
                }
            }
            return h
        }
        const Wr = () => it.timeout && it.timeout.getTimerLeft(),
            Ls = () => {
                if (it.timeout) return Ye(), it.timeout.stop()
            },
            R = () => {
                if (it.timeout) {
                    const c = it.timeout.start();
                    return jt(c), c
                }
            },
            F = () => {
                const c = it.timeout;
                return c && (c.running ? Ls() : R())
            },
            X = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return jt(h, !0), h
                }
            },
            de = () => it.timeout && it.timeout.isRunning();
        let ee = !1;
        const ve = {};

        function Ee() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            ve[c] = this, ee || (document.body.addEventListener("click", Re), ee = !0)
        }
        const Re = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const b in ve) {
                    const $ = h.getAttribute(b);
                    if ($) {
                        ve[b].fire({
                            template: $
                        });
                        return
                    }
                }
        };
        var Me = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ye,
            argsToParams: Yo,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: G,
            getPopup: be,
            getTitle: ue,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: we,
            getInputLabel: qt,
            getCloseButton: P,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: S,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: De,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ls,
            resumeTimer: R,
            toggleTimer: F,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: Ee
        });
        let ze;
        class Ge {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++) b[$] = arguments[$];
                const me = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: me,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const He = ze._main(ze.params);
                A.promise.set(this, He)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Mr()), it.currentInstance = ze;
                const $ = ht(h, b);
                ws($), Object.freeze($), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const me = At(ze);
                return Lr(ze, $), A.innerParams.set(ze, $), Xe(ze, me, $)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, b) => new Promise(($, me) => {
                const He = Gt => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                je.swalPromiseResolve.set(c, $), je.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => qo(c, He), h.closeButton.onclick = () => He(Xn.close), Wo(c, h, He), on(c, it, b, He), p(c, b), jr(b), We(it, b, He), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = ko(c),
                    $ = Object.assign({}, re, h, b, c);
                return $.showClass = Object.assign({}, re.showClass, $.showClass), $.hideClass = Object.assign({}, re.hideClass, $.hideClass), $
            },
            At = c => {
                const h = {
                    popup: be(),
                    container: G(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: P(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            We = (c, h, b) => {
                const $ = O();
                L($), h.timer && (c.timeout = new Nr(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W($), ct($, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && jt(h.timer)
                })))
            },
            Ht = (c, h) => {
                if (!h.toast) {
                    if (!D(h.allowEnterKey)) return fn();
                    Qt(c, h) || ft(h, -1, 1)
                }
            },
            Qt = (c, h) => h.focusDeny && ge(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && ge(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && ge(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            fn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const c = document.createElement("div");
            c.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const h = K([{
                text: `\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,
        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:`,
                id: "4CfDhaRkw7I"
            }, {
                text: "\u042D\u043C\u043F\u0430\u0442\u0438\u044F - \u0433\u043B\u0430\u0432\u043D\u043E\u0435 <strong>\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435</strong> \u0447\u0443\u0432\u0441\u0442\u0432\u043E. \u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C. <strong>\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E.</strong>",
                id: "s-GLAIY4DXA"
            }]);
            nt(c, `
      <div>
        \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0432\u043E\u0439\u043D\u0443, \u043E\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0432 \u0434\u043E\u043C <strong>\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441</strong> \u0438 \u0435\u0451 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 <strong>\u0443\u0436\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0438</strong>.
      </div>
      <div>
        \u041F\u0443\u0442\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0437\u0430 20 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0434\u043E\u043B\u0431\u0438\u043B \u043D\u0430\u043C, \u0447\u0442\u043E \u043C\u044B \u0431\u0435\u0441\u0441\u0438\u043B\u044C\u043D\u044B \u0438 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C. <strong>\u042D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A!</strong>
      </div>
      <div>
        `.concat(h.text, `
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/`).concat(h.id, `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!
      </div>
      `));
            const b = document.createElement("button");
            b.innerHTML = "&times;", b.onclick = () => c.remove(), c.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(Ge.prototype, Gr), Object.assign(Ge, Me), Object.keys(Gr).forEach(c => {
            Ge[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ge.DismissReason = Xn, Ge.version = "11.4.26";
        const Ot = Ge;
        return Ot.default = Ot, Ot
    }), typeof vt < "u" && vt.Sweetalert2 && (vt.swal = vt.sweetAlert = vt.Swal = vt.SweetAlert = vt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Ju);
const Rn = Ju.exports;
class kt {
    static get DismissReason() {
        return Rn.DismissReason
    }
    static show(e, n = {}) {
        switch (Rn.isVisible() && Rn.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
            case "alert":
                return this.showAlert(n);
            case "custom":
                return this.showCustom(n);
            case "error":
                return this.showError(n);
            case "toast":
                return this.showToast(n);
            default:
                console.warn("Unknown alert type", e)
        }
        return !1
    }
    static close() {
        Rn.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Rn.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp1/drawful/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Rn.fire(e)
    }
    static async showCustom(e) {
        return Rn.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Rn.fire(e)
    }
}
const bC = `<div class="canvasContainer">\r
    <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video>\r
    <canvas id='cameraCanvas' class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas>\r
    <img id="cameraImage" class="cameraImage visuallyhidden" />\r
</div>\r
<div class="cameraControls">\r
    <button id="exitButton" class="button exitButton"></button>\r
    <div class="buttons pre">\r
        <button id="switchButton" class="button switchButton"></button>\r
        <button id="snapshotButton" class="button snapshotButton"></button>\r
    </div>\r
    <div class="buttons post">\r
        <button id="cancelButton" class="button cancelButton"></button>\r
        <button id="confirmButton" class="button confirmButton"></button>\r
    </div>\r
</div>\r
<div style="display:none;">\r
    <img id="Mask" src='../../general/images/oval.png' />\r
</div>`,
    CC = {
        type: "camera",
        width: 300,
        height: 408,
        offsetX: 0,
        offsetY: 0,
        transmitting: !1,
        previewImage: null,
        mirror: !0,
        mask: !0,
        update(t) {
            if (this.video || (this.video = document.getElementById("cameraVideo")), this.image || (this.image = document.getElementById("Mask")), !this.video || !this.image) return;
            const e = this.video.videoWidth,
                n = this.video.videoHeight,
                i = Li().width,
                a = Li().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Li().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Li().width, Li().height))
        }
    },
    xC = Et.View.extend({
        template: at.template(bC),
        className: "CameraUser",
        model: new ot.Model({
            image: null,
            width: 300,
            height: 408,
            transmitting: !1,
            access: !1,
            showSwitchButton: !1
        }),
        sprites: [],
        bindings: {
            ".pre": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            },
            ".post": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return t
                        }
                    }
                }
            }
        },
        events: {
            "click #switchButton": "switchClicked",
            "click #snapshotButton": "snapshotClicked",
            "click #confirmButton": "confirmClicked",
            "click #cancelButton": "cancelClicked",
            "click #exitButton": "exitClicked"
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), this.update()
        },
        update() {
            !this.cameraSprite || (this.model.get("image") ? (this.previewImage = this.previewImage || new Image, this.previewImage.onload = () => {
                this.cameraSprite.preview = this.previewImage
            }, this.previewImage.src = this.model.get("image")) : this.cameraSprite.preview = null, this.cameraSprite.transmitting = this.model.get("transmitting"), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), this.$("#cameraCanvas").width(`${this.model.get("width")}px`), this.$("#cameraCanvas").height(`${this.model.get("height")}px`), this.onResize())
        },
        onRender() {
            this.stickit()
        },
        onAttach() {
            const t = this;
            fC("cameraCanvas"), t.sprites = [], t.gameLoop = mC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = cl(CC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
        },
        async startCamera() {
            this.canvas = document.getElementById("cameraCanvas"), this.image = document.getElementById("cameraImage"), this.video = document.getElementById("cameraVideo");
            const t = this.altOption || "drawing";
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const n = {
                    video: {
                        facingMode: this.facingMode,
                        width: 1280
                    },
                    audio: !1
                };
                try {
                    const i = await navigator.mediaDevices.getUserMedia(n),
                        a = await navigator.mediaDevices.enumerateDevices();
                    this.currentStream = i, this.video.srcObject = i, await this.video.play(), this.gotDevices(a)
                } catch (i) {
                    console.error(i), kt.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else kt.show("alert", {
                titleText: "No Camera Access",
                text: `It looks like camera access isn't available from this browser. Try the ${t} option instead.`,
                willClose: () => {
                    this.cameraAccessDenied()
                }
            })
        },
        gotDevices(t) {
            let e = 0;
            t.forEach(n => {
                n.kind === "videoinput" && (e += 1)
            }), this.model.set("showSwitchButton", e > 1)
        },
        stopMediaTracks() {
            this.currentStream.getTracks().forEach(e => {
                e.stop()
            }), this.video.srcObject = null, this.model.unset("image")
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let n = 0; n < t.sprites.length; n++) t.sprites[n].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop(), this.currentStream && this.stopMediaTracks();
            const e = document.getElementsByClassName("pt-page");
            !e.length || (e[0].style.display = "table", e[0].style.display = "block")
        },
        switchClicked() {
            this.currentStream && this.stopMediaTracks(), this.facingMode = this.facingMode === "user" ? "environment" : "user", this.cameraSprite.mirror = this.facingMode === "user", this.startCamera()
        },
        snapshotClicked() {
            const t = this.canvas.toDataURL();
            this.model.set("image", t), this.model.set("transmitting", !1)
        },
        confirmClicked() {
            const t = this.model.get("sizesToSend") || [{
                    width: this.model.get("width"),
                    height: this.model.get("height")
                }],
                e = [];
            t.forEach(n => {
                if (!n.width || !n.height) return;
                const i = document.createElement("canvas");
                i.width = n.width, i.height = n.height;
                const a = i.getContext("2d");
                this.previewImage && a.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
                const f = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: f
                })
            }), this.triggerMethod("camera:snapshot", e)
        },
        cancelClicked() {
            this.model.unset("image")
        },
        exitClicked() {
            this.triggerMethod("camera:exit")
        },
        cameraAccessDenied() {
            this.model.set("failed", !0), this.triggerMethod("camera:exit")
        },
        onResize() {
            const t = this.model.get("width"),
                e = this.model.get("height");
            if (!t || !e) return;
            const n = document.getElementById("cameraCanvas"),
                i = fe(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(fe(window).innerHeight(), 250),
                m = Math.min(a / t, f / e),
                _ = t * m,
                k = e * m;
            n.style.width = `${_}px`, n.style.height = `${k}px`, n.width = _, n.height = k
        }
    }),
    si = ot.Model.extend({
        defaults: {},
        set(t, e) {
            const n = at.extend({}, this.attributes, this.defaults, t);
            return ot.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = at.extend({}, this.defaults, this.attributes, t);
            return ot.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    EC = si.extend({
        defaults: {
            size: {
                width: 300,
                height: 408
            },
            sizesToSend: null,
            mask: !0,
            strings: {
                exitButton: "X",
                switchButton: `
                <svg width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-switch"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M 7.96875 2.578125 C 7.144531 2.578125 6.371094 2.8125 5.652344 3.289062
                        C 4.933594 3.753906 4.367188 4.394531 3.945312 5.210938
                        C 3.527344 6.03125 3.316406 6.921875 3.316406 7.878906 L 3.316406 8.058594 L 3.324219 8.242188
                        L 1.917969 8.347656 L 1.90625 7.878906 C 1.882812 7.273438 1.945312 6.683594 2.085938 6.113281
                        C 2.226562 5.542969 2.433594 4.992188 2.703125 4.457031
                        C 3.242188 3.378906 3.972656 2.527344 4.898438 1.898438
                        C 5.832031 1.273438 6.851562 0.960938 7.957031 0.960938
                        C 8.984375 0.960938 9.949219 1.242188 10.851562 1.808594 L 12.203125 0.15625 L 12.558594 4.71875
                        L 8.328125 4.882812 L 9.847656 3.023438 C 9.546875 2.875 9.238281 2.761719 8.925781 2.6875
                        C 8.617188 2.613281 8.296875 2.578125 7.96875 2.578125 Z M 12.632812 7.558594
                        L 14.03125 7.453125 L 14.039062 7.6875 L 14.039062 7.921875
                        C 14.039062 9.160156 13.761719 10.316406 13.210938 11.394531
                        C 12.664062 12.476562 11.929688 13.320312 11.007812 13.929688
                        C 10.089844 14.53125 9.082031 14.832031 7.980469 14.832031
                        C 6.992188 14.832031 6.035156 14.554688 5.105469 13.992188 L 3.746094 15.644531
                        L 3.394531 11.074219 L 7.621094 10.917969 L 6.101562 12.777344
                        C 6.402344 12.925781 6.710938 13.039062 7.027344 13.113281
                        C 7.339844 13.1875 7.65625 13.222656 7.980469 13.222656
                        C 8.835938 13.222656 9.613281 12.988281 10.316406 12.511719
                        C 11.039062 12.035156 11.601562 11.378906 12.007812 10.554688
                        C 12.433594 9.726562 12.644531 8.839844 12.644531 7.898438 L 12.644531 7.738281
                        Z M 12.632812 7.558594 "
                />
            </svg>`,
                snapshotButton: `
                <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-camera"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3
                            H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12
                            a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172
                            a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828
                            A2 2 0 0 1 3.172 4H2z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                    <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
            `,
                cancelButton: "Cancel",
                confirmButton: "Confirm"
            }
        }
    }),
    _C = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new EC,
        regions: {
            camera: "#cameraRegion"
        },
        bindings: {
            "#exitButton": {
                observe: "strings",
                onGet: t => t.exitButton
            },
            "#switchButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.switchButton
            },
            "#snapshotButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.snapshotButton
            },
            "#cancelButton": {
                observe: "strings",
                onGet: t => t.cancelButton
            },
            "#confirmButton": {
                observe: "strings",
                onGet: t => t.confirmButton
            }
        },
        initialize(t) {
            this.cameraView = this.cameraView || new xC(t), this.listenTo(this.model, "change", this.update, this), this.update()
        },
        update() {
            this.cameraView.model.set("width", this.model.get("size").width), this.cameraView.model.set("height", this.model.get("size").height), this.cameraView.model.set("mask", this.model.get("mask")), this.cameraView.model.set("sizesToSend", this.model.get("sizesToSend"))
        },
        onBeforeDestroy() {
            this.getRegion("camera").empty()
        },
        onRender() {
            this.showChildView("camera", this.cameraView)
        },
        onChildviewCameraSnapshot(t) {
            t.length === 1 ? this.triggerMethod("client:message", {
                action: "camera",
                ...t[0]
            }) : this.triggerMethod("client:message", {
                action: "camera",
                pictures: t
            })
        },
        onAttach() {
            this.stickit()
        },
        onChildviewCameraExit() {
            this.triggerMethod("client:message", {
                action: "cancel"
            })
        }
    }),
    SC = '<a class="change-color button-color btn"></a>',
    kC = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(SC),
        events: {
            click: "onClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    observe: ["className", "selected"],
                    name: "class",
                    onGet(t) {
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " selected"), e
                    }
                }, {
                    name: "data-thickness",
                    observe: "thickness"
                }, {
                    name: "data-color",
                    observe: "hex"
                }]
            },
            "a.button-color": {
                attributes: [{
                    name: "data-color",
                    observe: "hex"
                }, {
                    name: "style",
                    observe: "hex",
                    onGet(t) {
                        return this.getOption("transparent") ? "" : `background-color: ${t};`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onClick() {
            this.triggerMethod("palette:select", this.model)
        }
    }),
    TC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: kC,
        collection: new ot.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    AC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp1/drawful/assets/5f12600b.png"/></svg>\r
        </button>\r
    </li>\r
    <li class="pull-left button-pad"> \r
        <button id="thicknessButton" class="thickness button">  \r
            <div class="thickness-circle"></div>  \r
        </button>  \r
    </li> \r
    <li class="pull-right button-pad">\r
        <button id="showPaletteButton" class="showPalette button">\r
        </button>\r
    </li>\r
    <li class="pull-right button-pad">\r
        <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">\r
            <div id="currentColor" class="currentColor"></div>\r
        </button>\r
    </li>\r
    <li id="color-palette" class="hide">\r
    </li>\r
</ul>\r
<div id="colorPaletteRegion" class="colorPaletteRegion">\r
`,
    OC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(AC),
        model: new ot.Model({}),
        regions: {
            colorPalette: "#colorPaletteRegion"
        },
        events: {
            "click #currentColorButton": "onPaletteClick",
            "click #showPaletteButton": "onPaletteClick"
        },
        triggers: {
            "click #thicknessButton": "choose:thickness",
            "click #undoButton": "choose:undo"
        },
        bindings: {
            "#currentColor": {
                attributes: [{
                    name: "style",
                    observe: "currentColor",
                    onGet(t) {
                        return `background-color: ${t}`
                    }
                }]
            },
            ".colorPaletteRegion": {
                classes: {
                    visible: {
                        observe: "visiblePalette"
                    }
                }
            },
            ".thickness-circle": {
                attributes: [{
                    name: "style",
                    observe: "thickness",
                    onGet(t) {
                        return `width: ${t*3}px; height: ${t*3}px;`
                    }
                }]
            }
        },
        initialize() {
            this.colorPaletteComponent = this.colorPaletteComponent || new TC({
                collection: new ot.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("colorPalette", this.colorPaletteComponent)
        },
        onAttach() {
            this.stickit()
        },
        update() {
            const t = this.model.get("colors").map(e => typeof e == "object" ? e : {
                hex: e
            });
            this.colorPaletteComponent.collection.set(t)
        },
        onLine() {
            this.showPalette(!1)
        },
        onPaletteClick() {
            this.showPalette(!0)
        },
        showPalette(t = !0) {
            this.model.set("visiblePalette", t)
        },
        onChildviewChildviewPaletteSelect(t) {
            this.triggerMethod("choose:color", t), this.showPalette(!1)
        }
    });
class Qu {
    constructor(e, n, i) {
        st(this, "options");
        st(this, "canvas");
        st(this, "canvasCTX");
        st(this, "tipCanvas");
        st(this, "tipCanvasCTX");
        st(this, "lines", []);
        st(this, "image");
        st(this, "startX", null);
        st(this, "startY", null);
        st(this, "smoothedMouseX", null);
        st(this, "smoothedMouseY", null);
        st(this, "lastMouse", {});
        st(this, "lastMouseChangeVector", {});
        st(this, "lastSmoothedMouse", {});
        st(this, "lastThickness");
        st(this, "lastRotation");
        st(this, "colorLevel");
        this.options = i, this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = n, this.canvasCTX = this.canvas.getContext("2d"), this.tipCanvas = document.createElement("canvas"), this.tipCanvas.width = e, this.tipCanvas.height = n, this.tipCanvasCTX = this.tipCanvas.getContext("2d")
    }
    addLine(e, n, i, a) {
        this.lines.push({
            thickness: e,
            color: n,
            highlighter: i,
            points: []
        }), this.addPoint(a), this.update()
    }
    updateSize(e, n) {
        this.canvas.width = e, this.canvas.height = n
    }
    addPoint(e) {
        const n = {
                x: parseInt(e.x, 10),
                y: parseInt(e.y, 10)
            },
            i = this.lines[this.lines.length - 1];
        if (!(!i || !i.points)) {
            if (i.points.length !== 0) {
                const a = i.points[i.points.length - 1];
                if (a.x === n.x && a.y === n.y) return
            }
            i.points.push(n), i.points.length === 2 && i.points.unshift(i.points[1]), this.update()
        }
    }
    setLines(e) {
        const n = e.map(i => {
            let a = i.points;
            return typeof a == "string" ? a = i.points.split("|").map(f => ({
                x: parseInt(f.split(",")[0], 10),
                y: parseInt(f.split(",")[1], 10)
            })) : a = a.map(f => ({
                x: parseInt(f.x, 10),
                y: parseInt(f.y, 10)
            })), {
                color: i.color,
                thickness: i.thickness,
                points: a
            }
        });
        this.lines = n, this.update()
    }
    setImage(e) {
        this.image = e, this.update()
    }
    reset() {
        this.lines = [], this.image = null, this.update()
    }
    getLastLine() {
        const e = this.lines[this.lines.length - 1];
        return e ? {
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        } : null
    }
    getLines() {
        return this.lines.map(e => ({
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        }))
    }
    update() {
        this.canvasCTX && this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tipCanvasCTX && this.tipCanvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.image && this.canvasCTX.drawImage(this.image, 0, 0), this.lines && this.lines.forEach(e => this.drawLine(e))
    }
    startLineInContext(e, n, i) {
        const a = e * this.options.minThickness;
        this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, a * this.options.dotMultiplier, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.lastMouseChangeVector = {
            x: 0,
            y: 0
        }, this.startX = n, this.lastMouse.x = n, this.smoothedMouseX = n, this.lastSmoothedMouse.x = n, this.startY = i, this.lastMouse.y = i, this.smoothedMouseY = i, this.lastSmoothedMouse.y = i, this.lastThickness = a, this.lastRotation = void 0, this.colorLevel = 0
    }
    continueLineInContext(e, n, i) {
        const a = n - this.lastMouse.x,
            f = i - this.lastMouse.y;
        a * this.lastMouseChangeVector.x + f * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + _ * _);
        let I;
        k !== 0 ? I = Math.PI / 2 + Math.atan2(_, m) : I = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * k,
            M = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const Y = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ne = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            K = Math.sin(I),
            re = Math.cos(I),
            v = this.lastThickness * Y,
            N = this.lastThickness * ne,
            q = M * K,
            ae = M * re,
            se = .33 * k * Y,
            ye = -.33 * k * ne,
            d = this.lastSmoothedMouse.x + N + se,
            _e = this.lastSmoothedMouse.y + v + ye,
            Oe = this.lastSmoothedMouse.x - N + se,
            Pe = this.lastSmoothedMouse.y - v + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + N, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(d, _e, this.smoothedMouseX + ae, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - N, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * M;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + q), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = M, this.lastMouseChangeVector = {
            x: a,
            y: f
        }, this.lastMouse = {
            x: n,
            y: i
        }
    }
    drawLine(e) {
        if (!(!e || !e.color || !e.points || !e.thickness) && !(!this.canvasCTX || !this.tipCanvasCTX)) {
            this.canvasCTX.strokeStyle = e.color, this.canvasCTX.lineWidth = this.options.borderWidth, this.canvasCTX.lineCap = "round", this.canvasCTX.lineJoin = "bevel", this.canvasCTX.fillStyle = e.color, this.canvasCTX.strokeStyle = e.color, this.tipCanvasCTX.lineWidth = this.options.borderWidth, this.tipCanvasCTX.fillStyle = e.color, this.tipCanvasCTX.strokeStyle = e.color;
            for (let n = 0; n < e.points.length; n++) {
                const i = e.points[n];
                n === 0 && this.startLineInContext(e.thickness, i.x, i.y), this.continueLineInContext(e.thickness, i.x, i.y)
            }
            this.canvasCTX.drawImage(this.tipCanvas, 0, 0)
        }
    }
}
const ac = {
    color: "#000000",
    thickness: 3,
    highlighter: !1,
    sketchOptions: {
        minThickness: .5,
        thicknessFactor: .1,
        smoothingFactor: .55,
        thicknessSmoothingFactor: .6,
        tipTaperFactor: .7,
        cappedEnds: !1,
        borderWidth: 2,
        dotMultiplier: 2
    }
};
class RC {
    constructor(e, n = {}) {
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = fe(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Qu(this.canvas.width, this.canvas.height, this.options.sketchOptions);
            a.name = i, this[i] = a
        })
    }
    update() {
        !this.ctx || (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.layerNames.forEach(e => {
            this.ctx.drawImage(this[e].canvas, 0, 0)
        }))
    }
    updateSize(e) {
        this.layerNames.forEach(n => {
            this[n].updateSize(e.width, e.height)
        })
    }
    setThickness(e) {
        this.options.thickness = e
    }
    setColor(e) {
        this.options.color = e
    }
    getHighlighter() {
        return !!this.options.highlighter
    }
    setHighlighter(e) {
        this.options.highlighter = e
    }
    setOptions(e) {
        const n = Object.assign(ac.sketchOptions, e);
        this.layerNames.forEach(i => {
            this[i].options = n, this[i].update()
        }), this.update()
    }
    startLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addLine(this.options.thickness, this.options.color, this.options.highlighter, e)
    }
    moveLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addPoint(e), this.update()
    }
    endLine() {
        const e = this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch,
            n = e.lines.pop();
        n.points && n.points.length > 1 && n.points.push(n.points[n.points.length - 2]), this.options.highlighter ? (this.highlighterSketch.lines.push(n), this.highlighterSketch.update(), this.history.push("highlighterSketch")) : (this.markerSketch.lines.push(n), this.markerSketch.update(), this.history.push("markerSketch")), e.reset(), this.update()
    }
    undoLine() {
        if (!this.history.length) return;
        const e = this.history.pop();
        this[e].lines.pop() && this[e].update()
    }
    isClean() {
        return !this.history.length
    }
    setLayerLines(e, n) {
        if (this.layerNames.indexOf(e) === -1) {
            console.error("invalid layer name", e);
            return
        }
        this[e].setLines(n), this.update()
    }
    setLayerImage(e, n) {
        this[e].setImage(n), this.update()
    }
    getLastLine() {
        return this.history.length === 0 ? null : this[this.history[this.history.length - 1]].getLastLine() || null
    }
    getLines() {
        return [...this.highlighterSketch.getLines(), ...this.markerSketch.getLines()]
    }
    getDataURL(e, n) {
        e === void 0 && (e = 1);
        const i = document.createElement("canvas"),
            a = this.canvas.width * e,
            f = this.canvas.height * e;
        i.width = a, i.height = f;
        const m = i.getContext("2d");
        return n && (m.fillStyle = n, m.fillRect(0, 0, a, f)), m.drawImage(this.highlighterSketch.canvas, 0, 0, a, f), m.drawImage(this.markerSketch.canvas, 0, 0, a, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const IC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    DC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(IC),
        images: {},
        myViewOptions: ["color", "thickness", "background", "image"],
        sketchpad: null,
        bindings: {
            ".sketchpad": {
                attributes: [{
                    name: "width",
                    observe: "size",
                    onGet(t) {
                        return t ? t.width : ""
                    }
                }, {
                    name: "height",
                    observe: "size",
                    onGet(t) {
                        return t ? t.height : ""
                    }
                }, {
                    name: "style",
                    observe: ["background", "backgroundImageUrl"],
                    onGet([t, e]) {
                        let n = "";
                        return e && (n += `background-image:url(${e});`), t && (n += `background-color:${t};`), n
                    }
                }]
            }
        },
        events: {
            "contextmenu canvas": "handleContextMenu",
            "mousedown canvas": "start",
            "touchstart canvas": "start",
            "mousemove canvas": "move",
            "touchmove canvas": "move"
        },
        initialize(t) {
            this.color = "black", this.thicknessScale = -1, this.mergeOptions(t, this.myViewOptions), this.model.on("change:size", this.onUpdateSize, this), this.endWithContext = this.end.bind(this)
        },
        onUpdateSize() {
            this.sketchpad && this.sketchpad.updateSize(this.model.get("size"))
        },
        onRender() {
            this.stickit(), document.addEventListener("touchend", this.endWithContext), document.addEventListener("mouseup", this.endWithContext)
        },
        onAttach() {
            const t = `sketchpad-${this.model.cid}`;
            this.$("#fullLayer").addClass(t), this.sketchpad = new RC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = fe(n)[0].width / fe(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let _ = (e.clientX - a.left) * i;
            _ = Math.min(f.width - m, Math.max(m, _));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(f.height - m, Math.max(m, k)), {
                x: _,
                y: k
            }
        },
        fullImageCoord(t) {
            return `${parseInt(t.x+this.viewportOffset.x,10)},${parseInt(t.y+this.viewportOffset.y,10)}`
        },
        start(t) {
            const e = this.getCoords(t);
            this.sketchpad.startLine(e), this.isDrawing = !0
        },
        move(t) {
            if (!this.isDrawing) return;
            const e = this.getCoords(t);
            this.sketchpad.moveLine(e)
        },
        end(t, e) {
            !this.isDrawing || (this.isDrawing = !1, this.sketchpad.endLine(), e || this.triggerMethod("sketchpad:line", this.sketchpad.getLastLine()))
        },
        onBeforeDestroy() {
            this.getOption("mode") !== null && this.end(null, !0), document.removeEventListener("touchend", this.endWithContext), document.removeEventListener("mouseup", this.endWithContext)
        },
        leave() {
            this.getOption("mode") !== "draw" && this.tipShape.graphics.clear()
        },
        undoLine() {
            this.sketchpad.undoLine(), this.sketchpad.update(), this.triggerMethod("sketchpad:undo", this.sketchpad.history.length)
        },
        resetAll() {
            this.sketchpad && this.sketchpad.resetAll()
        },
        getColor() {
            return this.color
        },
        setColor(t) {
            this.color = t, this.sketchpad && this.sketchpad.setColor(t)
        },
        getThickness() {
            return this.thicknessScale
        },
        setThickness(t) {
            this.thicknessScale = t, this.sketchpad && this.sketchpad.setThickness(t)
        },
        getHighlighter() {
            return this.sketchpad ? this.sketchpad.getHighlighter() : !1
        },
        setHighlighter(t) {
            this.sketchpad && this.sketchpad.setHighlighter(t)
        },
        setOptions(t) {
            this.sketchpad && this.sketchpad.setOptions(t)
        },
        getLines() {
            return this.sketchpad ? this.sketchpad.getLines() : []
        },
        getImageData() {
            return this.sketchpad ? this.sketchpad.getDataURL(1, this.model.get("background")) : null
        },
        getThumbnailImage() {
            return this.sketchpad ? this.sketchpad.getDataURL(.33) : null
        },
        setLines(t) {
            !this.sketchpad || this.sketchpad.setLayerLines("backgroundSketch", t)
        },
        setImage(t) {
            const e = this.getOption("images")[t];
            if (!e) return;
            const n = new Image;
            n.onload = i => {
                const a = i.target;
                this.sketchpad.setLayerImage("backgroundSketch", a)
            }, n.src = e
        },
        handleContextMenu(t) {
            t.preventDefault()
        }
    }),
    LC = `<div class="controller-content">\r
    <div class="canvas-container">\r
        <div id="prompt" class="prompt"></div>\r
        <div id="toolbar" class="toolbar"></div>\r
        <div id="sketchpad"></div>\r
        <div id="buttons" class="buttons"></div>\r
        <div id="post-sketchpad" class="post-sketchpad">\r
            <div id="submit">\r
                <button id='submitdrawing' class="button submitDrawing">Submit</button><br/>\r
            </div>\r
            <button id='censorOptions' class='button'>Censor Options</button>\r
            <div class="footer"></div>\r
        </div>\r
        </div>\r
    </div>\r
</div>\r
`,
    MC = si.extend({
        defaults: {
            drawId: 0,
            objectKey: void 0,
            size: {
                width: 240,
                height: 300
            },
            actions: !1,
            colors: ["#3c6e6f", "#007727", "#b8aa01", "#0350a0", "#000000", "#966401", "#48019d", "#730075", "#9c0e3e"],
            background: "",
            thicknesses: [3, 6],
            defaultIndex: 4,
            classes: [],
            prompt: {
                html: ""
            },
            live: !1,
            image: !1,
            backgroundImageUrl: !1,
            lines: !1,
            hideSubmit: !1,
            autoSubmit: !1,
            allowEmpty: !1,
            disabled: !1,
            debug: !1,
            strings: {
                drawing_empty: "You must draw something!",
                submit: "submit",
                ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
            }
        }
    }),
    PC = Et.View.extend({
        className: "Draw",
        template: at.template(LC),
        model: new MC,
        regions: {
            prompt: "#prompt",
            sketchpad: "#sketchpad",
            toolbar: "#toolbar",
            buttons: "#buttons"
        },
        events: {
            "click #submitdrawing": "onChildviewButtonSubmit"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            "#censorOptions": {
                visible: !1
            },
            ".footer": {
                observe: "footer",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : fe("<div />").text(t.text).html() : null
                }
            },
            ".submitDrawing": {
                observe: ["hideSubmit", "actions", "strings"],
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t[0] || t[1] ? !1 : t[2] === void 0 ? "" : t[2].submit || "Submit"
                }
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({}), this.toolbarComponent = this.toolbarComponent || new OC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new DC({
                model: new ot.Model
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([]), this.buttonsComponent = this.buttonsComponent || new fi({
                block: !1,
                collection: this.buttonsCollection
            }), this.options.thicknessIndex = -1, this.options.colorIndex = -1, this.drawId = this.model.get("drawId"), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {
            this.model.get("drawId") !== this.getOption("drawId") && (this.resetDrawing(), this.drawId = this.model.get("drawId")), this.model.get("prompt") && this.promptComponent.model.set(this.model.get("prompt")), this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            }), this.model.get("image") && (this.sketchpadComponent.setImage(this.images[this.model.get("image")]), this.onResize()), this.model.get("background") && this.sketchpadComponent.model.set("background", this.model.get("background")), this.model.get("backgroundImageUrl") && this.sketchpadComponent.model.set("backgroundImageUrl", this.model.get("backgroundImageUrl")), this.toolbarComponent && this.toolbarComponent.model.set("colors", this.model.get("colors")), this.model.get("actions") && this.buttonsCollection.set(this.model.get("actions")), this.model.get("autoSubmit") && this.autoSubmit(), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.onResize()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("toolbar", this.toolbarComponent), this.showChildView("sketchpad", this.sketchpadComponent), this.showChildView("buttons", this.buttonsComponent)
        },
        onChildviewAttach() {
            this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            })
        },
        onAttach() {
            this.stickit(), this.update(), this.onResize(), kt.vibrate()
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext)
        },
        resetDrawing() {
            this.sketchpadComponent.resetAll(), this.onChildviewSketchpadReady()
        },
        onChildviewSketchpadReady() {
            this.model.get("thicknesses") && this.options.thicknessIndex === -1 && this.onChildviewChooseThickness(), this.model.get("colors") && this.options.colorIndex === -1 && this.model.get("colors") && this.model.get("defaultIndex") !== void 0 && this.chooseColorByIndex(this.model.get("defaultIndex")), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.model.get("lines") && this.sketchpadComponent.setLines(this.model.get("lines"))
        },
        chooseColorByIndex(t) {
            (t < 0 || t > this.model.get("colors").length) && (t = 0);
            let e = this.model.get("colors")[t];
            typeof e != "object" && (e = {
                hex: e
            }), this.chooseColor(e.hex, e)
        },
        onChildviewChooseColor(t) {
            this.chooseColor(t.get("hex"), t.attributes)
        },
        onChildviewChooseThickness() {
            this.options.thicknessIndex = (this.options.thicknessIndex + 1) % this.model.get("thicknesses").length;
            const t = this.model.get("thicknesses")[this.options.thicknessIndex];
            this.sketchpadComponent.setThickness(t), this.toolbarComponent && this.toolbarComponent.model.set("thickness", t)
        },
        onChildviewChooseUndo() {
            this.sketchpadComponent.undoLine()
        },
        chooseColor(t, e = {}) {
            this.sketchpadComponent.setColor(t), this.sketchpadComponent.setHighlighter(e.highlighter), this.toolbarComponent.model.set("highlighter", e.highlighter), e.thickness !== void 0 && this.sketchpadComponent.setThickness(e.thickness), this.toolbarComponent.model.set("currentColor", t)
        },
        onChildviewSketchpadLine(t) {
            if (this.toolbarComponent && this.toolbarComponent.onLine && this.toolbarComponent.onLine(), this.model.get("live")) {
                const e = {
                        line: t,
                        highlighter: this.sketchpadComponent.getHighlighter(),
                        action: "line"
                    },
                    n = this.model.get("objectKey");
                if (n !== void 0) {
                    const i = this.sketchpadComponent.getLines();
                    e.objectKey = n, e.val = {
                        lines: i
                    }
                }
                this.triggerMethod("client:message", e)
            }
        },
        onChildviewSketchpadUndo(t) {
            if (this.model.get("live")) {
                const e = {
                        action: "undo",
                        linesLength: t
                    },
                    n = this.model.get("objectKey");
                n !== void 0 && (e.objectKey = n, e.val = {
                    lines: this.sketchpadComponent.getLines()
                }), this.triggerMethod("client:message", e)
            }
        },
        autoSubmit() {
            this.sketchpadComponent.end(), this.sketchpadComponent.getLines().length > 0 && this.onChildviewButtonSubmit()
        },
        onChildviewChildviewButtonChoose(t) {
            this.onChildviewButtonChoose(t)
        },
        onChildviewButtonChoose(t) {
            this.triggerMethod("client:message", {
                action: "choose",
                index: t.get("key")
            })
        },
        onChildviewChildviewButtonSubmit() {
            this.onChildviewButtonSubmit()
        },
        onChildviewButtonSubmit() {
            const t = this.sketchpadComponent.getLines();
            if (t.length === 0 && !this.model.get("allowEmpty")) return kt.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && kt.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            kt.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = fe("#sketchpad"),
                e = fe("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(fe(".controller-content").css("border-top-width"), 10) * 2 + fe(".playerTopBar").innerHeight() + fe("#prompt").innerHeight() + fe("#toolbar").innerHeight() + parseInt(fe(".canvasContainer").css("border-top-width"), 10) * 2 + fe("#buttons").innerHeight() + fe("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(fe(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(fe(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(fe(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                m = 2,
                _ = Math.min(t.width() - i, a * m),
                k = Math.max(fe("#controller-container").innerHeight() - n, 250),
                I = Math.min(_ / a, k / f),
                D = a * I,
                M = f * I;
            e.style.width = `${D}px`, e.style.height = `${M}px`, window.scrollTo(0, 0)
        }
    }),
    NC = `<div>
    <div id="controller" class="state-controller controller-content">
        <form class="enterSingleTextForm">
            <fieldset class="enterSingleTextFieldset">
                <div id="prompt" class="prompt">prompt</div>
                <div id="input-region" class=""></div>
                <div id="buttons" class="">buttons</div>
            </fieldset>
        </form>
        <div class="enterSingleTextDone">
            <span class="doneText"></span>
        </div>
    </div>
</div>
`,
    VC = si.extend({
        defaults: {
            state: "EnterSingleText",
            actions: [{
                text: "submit",
                action: "submit"
            }],
            allowEmpty: !1,
            autoSubmit: !1,
            classes: [],
            doneText: "",
            entryId: void 0,
            entry: null,
            live: !1,
            maxLength: 500,
            textKey: void 0,
            textRingName: null,
            placeholder: "",
            autocapitalize: !1,
            className: "",
            inlineSubmit: !1,
            inlineSubmitText: "Submit",
            error: "",
            strings: {
                ERROR_NOTHING_ENTERED: "You need to enter something!",
                ERROR_REJECTED_TEXT: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
            }
        }
    }),
    BC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(NC),
        model: new VC,
        sessionModule: "comment",
        sessionName: " Comments",
        regions: {
            prompt: "#prompt",
            input: "#input-region",
            buttons: "#buttons"
        },
        events: {
            "submit form": "onChildviewInputSubmit"
        },
        bindings: {
            ".enterSingleTextForm": {
                observe: "entry",
                visible(t) {
                    return !t
                }
            },
            ".enterSingleTextDone": {
                observe: "entry",
                visible: !0
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : fe("<div />").text(t.text).html() : ""
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new Bi({
                model: new ot.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new fi({
                block: !0,
                collection: this.buttonsCollection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            this.model.get("isAudience") && ((this.model.get("entryId") === void 0 || this.model.get("entryId") !== this.entryId) && (this.audienceEntry = void 0), this.audienceEntry && this.model.setUpdate({
                entry: this.audienceEntry,
                entryId: this.model.get("entryId") || 0
            })), this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.inputComponent.model.set(this.model.attributes), this.buttonsComponent.options.block = this.model.get("block"), this.buttonsCollection.set(this.model.get("actions") || [{
                text: "submit",
                action: "submit"
            }]), this.model.get("entryId") && this.model.get("entryId") !== this.currentEntry && (this.inputComponent.clearInput(), this.currentEntry = this.model.get("entryId")), this.$el.find(".enterSingleTextFieldset").prop("disabled", !1), this.$el.find("textarea").focus(), this.stickit(), this.model.get("autoSubmit") && this.shouldSubmit && this.onChildviewInputSubmit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("input", this.inputComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
        },
        onAttach() {
            this.update(), kt.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = at.throttle(() => {
                const n = t.getSanitizedValue();
                if (n.length === 0) return;
                const i = {
                        action: "write-live",
                        entry: n
                    },
                    a = this.model.get("textKey");
                a !== void 0 && (i.textKey = a, i.val = n), this.triggerMethod("client:message", i)
            }, 500)), this.throttledSend())
        },
        onChildviewInputSubmit() {
            let t = this.inputComponent.getValue(),
                e = this.inputComponent.getSanitizedValue();
            if (this.model.setUpdate({
                    error: null
                }), e.length === 0 && !this.model.get("allowEmpty")) return this.model.setUpdate({
                error: this.model.get("strings").ERROR_NOTHING_ENTERED
            }), !1;
            t.length > this.model.get("maxLength") && (this.inputComponent.setValue(t.substr(0, this.model.get("maxLength"))), t = this.inputComponent.getValue(), e = this.inputComponent.getSanitizedValue()), this.shouldSubmit = !1;
            const n = {
                    action: "write",
                    entry: e
                },
                i = this.model.get("textKey");
            return i && (n.textKey = i, n.val = e), this.triggerMethod("client:message", n), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = e, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                entry: this.audienceEntry,
                shotId: this.entryId
            })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
        },
        onTextFilterError() {
            this.model.setUpdate({
                error: this.model.get("strings").ERROR_REJECTED_TEXT
            })
        },
        onChildviewChildviewButtonSuggestion() {
            const t = this.model.get("suggestions"),
                e = this.inputComponent.getSanitizedValue(),
                n = at.without(t, e);
            return this.inputComponent.setValue(at.shuffle(n)[0]), !1
        },
        onChildviewChildviewButtonChoose(t) {
            return this.triggerMethod("client:message", {
                action: t.get("key")
            }), !1
        },
        onChildviewChildviewButtonHelp() {
            return this.triggerMethod("client:message", {
                action: "help"
            }), !1
        }
    });
Et.View.extend({
    model: new ot.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: at.template(`
        <h1 class='title'>ImageView</h1>
        <img class='imageData'>
    `),
    initialize(t) {
        this.mergeOptions(t, this.myViewOptions), this.model.on({
            "change:lines": this.setImageFromLines.bind(this)
        })
    },
    bindings: {
        ".title": {
            observe: "title",
            visible: !0,
            updateView: !0
        },
        ".imageData": {
            attributes: [{
                name: "src",
                observe: "src"
            }]
        }
    },
    setImageFromLines() {
        const t = this.getOption("width") || 640,
            e = this.getOption("height") || 640,
            n = this.getOption("sketchOptions"),
            i = this.model.get("lines") || [];
        if (!i.length || !n) return;
        const a = new Qu(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const lc = Et.View.extend({
        appId: "legacymain",
        appTag: "legacymain",
        template: null,
        client: null,
        initialize(t) {
            this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new ot.Model({});
            const e = this.client.parseEntities();
            this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
                this.update().catch(this.caughtError)
            }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
        },
        render() {
            this.model.set("username", Ut.safeText(this.client.name), {
                silent: !0
            }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        onEntityDidChange(t, e) {
            this.model.unset(t, {
                silent: !0
            }), this.model.set(t, e)
        },
        controllerUpdate() {
            const t = this.model.get("room") || {},
                e = t.state || "";
            let n = t.lobbyState;
            !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? ni.isInitialized ? ni.show() : ni.init(this.getOption("appTag")).then(() => {
                ni.show()
            }) : ni.hide(), t.platformId && en.setTag(`platform-${t.platformId}`)
        },
        async update() {
            return null
        },
        caughtError(t) {
            throw t
        },
        onAttach() {
            this.update().catch(this.caughtError), fe(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
        },
        showTwitchBroadcasterDialog(t) {
            let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
            e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), kt.show("custom", {
                html: e,
                position: "bottom",
                timer: t,
                backdrop: "transparent",
                customClass: {
                    container: "jbgTwitchContainer",
                    popup: "jbgTwitchPopup",
                    htmlContainer: "jbgTwitchContent",
                    closeButton: "jbgCloseButton"
                },
                showCloseButton: !0,
                closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
                showConfirmButton: !1,
                showClass: {
                    popup: "jbgTwitchShow"
                },
                hideClass: {
                    popup: "jbgTwitchHide"
                }
            })
        },
        onBeforeDestroy() {
            this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext)
        },
        artifactClicked() {
            Ni.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = fe(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (fe(this.activeScreen).fadeOut("fast", () => {}), fe(this.activeScreen).show(), fe(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            kt.vibrate()
        },
        onRoomWasDestroyed() {
            en.remove("roomCode"), en.remove("reconnect"), kt.show("error", {
                titleText: "Disconnected",
                text: "Thanks for playing!",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onDisconnected() {
            kt.show("error", {
                titleText: "Disconnected",
                text: "You have been disconnected.",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onConnectionMessage(t) {
            const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
            if (kt.show("toast", {
                    text: e
                }), t.status === "connected") {
                const n = this.client.parseEntities();
                this.model.set(n)
            }
        },
        onResize() {
            const t = fe("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? fe("#slide-in-banner").outerHeight(!0) : 0,
                n = fe(window).width(),
                i = fe(window).height() - t;
            fe(`.${this.getOption("appTag")}-page`).css("height", i - e), fe(`.${this.getOption("appTag")}-page`).attr("height", i - e), fe(`.${this.getOption("appTag")}-page`).css("top", t), fe(`.${this.getOption("appTag")}-page`).css("width", n), fe(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    $C = `<div id="controller" class="state-controller controller-content">
    <div id="title" class="lobbyTitle">title</div>
    <div id="vipMenu" class="vipMenu">
        <div id="choices" class="choicesContainer">choices</div>
    </div>
    <div class="characterSelect">
        <div id="charactersPrompt" class="charactersPrompt">
            <span id="charactersPromptText" class="charactersPromptText"></span>
        </div>
        <div id="characters" class="charactersContainer"></div>
    </div>
    <div id="artifactId" class="artifactContainer text">
        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
            <button id="artifactButton" class="artifactButton"></button>
        </a>
    </div>
</div>`,
    jC = si.extend({
        defaults: {
            canChangeName: !1,
            playerIsVIP: !1,
            playerCanStartGame: !1,
            playerCanCensor: !1,
            gameCanStart: !1,
            gameIsStarting: !1,
            gameEnded: !1,
            game: {
                familyFriendly: !1,
                extendedTimers: !1,
                requireTwitch: !1,
                controllerOnly: !1,
                skipTutorials: !1
            },
            choices: [],
            artifact: null,
            characters: null,
            censorablePlayers: [],
            playerCanDoEpisodes: !1,
            playerCanReport: !1,
            playerCanViewAuthor: !1,
            lastUGCResult: null,
            history: [],
            activeContentId: null,
            formattedActiveContentId: null,
            isLocal: !1,
            strings: {
                wait: "Sit back and relax!",
                vip_waiting: "Waiting for all players to join",
                vip_canStart: "Press this button when everybody has joined",
                vip_cancel: "Press this button to cancel game start",
                vip_postgame: "What would you like to do now?",
                vip_episodes_menu: "Episodes Menu",
                vip_episodes_unload: "Unload Episode",
                vip_episodes_report: "Report Episode",
                vip_episodes_warning: "Warning: user generated content is not rated",
                vip_episodes_load: "Load an episode by id:",
                vip_episodes_select: "Or select an episode:",
                vip_episodes_back: "Back",
                vip_episodes_submit: "SUBMIT",
                vip_episodes_view_author: "View Author",
                button_start: "Everybody's In",
                button_cancel: "Cancel",
                button_changename: "Change Name",
                button_sameplayers: "Same Players",
                button_newplayers: "New Players",
                prompt_entername: "Enter your name",
                prompt_choosecharacter: "Select your character",
                button_censorOptions: "Censor Options",
                censor_prompt: ""
            }
        }
    }),
    FC = Et.View.extend({
        tagName: "button",
        template: at.template('<span class="flex-item"></span>'),
        className() {
            return `characters ${this.model.get("name")}`
        },
        events: {
            click: "onCharacterClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "bgcolor",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "aria-label",
                    observe: "name"
                }, {
                    name: "disabled",
                    observe: "available",
                    onGet(t) {
                        return t !== void 0 ? !t : null
                    }
                }],
                classes: {
                    active: "active",
                    selected: {
                        observe: "selected",
                        onGet(t) {
                            return t
                        }
                    },
                    disabled: {
                        observe: "available",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            }
        },
        onCharacterClick() {
            this.trigger("character:click", this.model)
        },
        onRender() {
            this.stickit()
        }
    }),
    zC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template($C),
        model: new jC,
        titleComponent: null,
        choicesListView: null,
        charactersListView: null,
        regions: {
            title: "#title",
            choices: "#choices",
            characters: "#characters"
        },
        events: {
            "click .choice-button": "onButtonClick",
            "click .artifactLink": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor};`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        if (!t) return null;
                        let e = "games.jackbox.tv";
                        return t.rootId.indexOf("test") !== -1 && (e = "games-test.jackbox.tv"), `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            },
            ".characterSelect": {
                observe: "characters",
                visible: !0
            },
            ".charactersPrompt": {
                observe: "characters",
                visible: !0,
                onGet(t) {
                    return t && !at.isEmpty(t)
                }
            },
            ".charactersPromptText": {
                observe: "strings",
                onGet() {
                    return this.getOption("strings").prompt_choosecharacter
                }
            }
        },
        strings: {},
        initialize() {
            this.titleComponent = new Bi({
                model: new ot.Model({})
            }), this.choicesListView = this.choicesListView || new fi, this.charactersListView = new Et.CollectionView({
                childView: FC,
                className: "charactersList",
                collection: new ot.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            if (this.strings = this.model.get("strings"), this.choicesListView.collection.reset(), this.titleComponent.model.set("html", this.getOption("strings").wait), this.model.get("playerIsVIP") && (this.model.get("gameCanStart") ? this.model.get("playerCanStartGame") && (this.model.get("gameIsStarting") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_cancel), this.choicesListView.collection.add({
                    className: "vipCancel",
                    html: this.getOption("strings").button_cancel,
                    action: "cancel"
                })) : this.model.get("gameFinished") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_postgame), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_sameplayers,
                    action: "PostGame_Continue"
                }), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_newplayers,
                    action: "PostGame_NewGame"
                })) : (this.titleComponent.model.set("html", this.getOption("strings").vip_canStart), this.choicesListView.collection.add({
                    className: "vipStart",
                    html: this.getOption("strings").button_start,
                    action: "start"
                }), this.model.get("playerCanCensor") && this.model.get("censorablePlayers").length > 0 && this.choicesListView.collection.add({
                    className: "vipCensorOptions",
                    html: this.getOption("strings").button_censorOptions,
                    action: "censorOptions"
                }))) : this.titleComponent.model.set("html", this.getOption("strings").vip_waiting)), this.model.get("playerCanDoEpisodes")) {
                if (this.model.get("activeContentId")) {
                    const n = this.model.get("activeContentId"),
                        i = this.model.get("history").find(f => n === (f.remoteContentId || f.localContentId)),
                        a = i && i.metadata ? Ut.htmlUnescape(i.metadata.title) : null;
                    a && this.choicesListView.collection.add({
                        type: "text",
                        text: a
                    }), this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_unload,
                        action: "ugc-unload",
                        block: !1
                    }), this.model.get("playerCanReport") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_report,
                        action: "ugc-report",
                        block: !1
                    }), this.model.get("playerCanViewAuthor") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_view_author,
                        action: "ugc-view-author",
                        block: !1
                    })
                } else this.choicesListView.collection.add({
                    className: "vipEpisodesMenu",
                    html: this.getOption("strings").vip_episodes_menu,
                    action: "ugc"
                });
                const e = this.model.get("lastUGCResult");
                e && e.error && this.lastUGCResultId !== e.id && (kt.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(at.map(t, e => {
                const n = this.model.get("playerInfo") || {},
                    i = e;
                return i.bgcolor = n.buttonColor, i.selected = n.avatar === i.name, i
            })), this.stickit()
        },
        onRender() {
            this.showChildView("title", this.titleComponent), this.showChildView("choices", this.choicesListView), this.showChildView("characters", this.charactersListView), this.update()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Ni.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = fe(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const a = await kt.show("custom", {
                            input: "text",
                            title: this.getOption("strings").prompt_entername,
                            customClass: {
                                input: "playerName"
                            },
                            inputAttributes: {
                                maxlength: 12
                            },
                            inputValidator: f => f ? f.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
                        });
                        if (a.dismiss) return;
                        this.triggerMethod("client:message", {
                            name: a.value
                        })
                    } catch {} else if (i === "censorOptions") kt.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const a = new fi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new ot.Collection
                                }),
                                f = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(m => ({
                                    action: "censorConfirm",
                                    html: m.name,
                                    key: m.id
                                }))];
                            a.collection.set(f), a.render(), e.listenTo(a, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const a = "http://support.jackboxgames.com/",
                    f = this.model.get("formattedActiveContentId");
                window.open(`${a}?episodeID=${f}`, "_blank")
            } else i === "ugc-view-author" ? this.triggerMethod("client:message", {
                viewAuthor: !0
            }) : i === "ugc" ? kt.show("custom", {
                target: this.el,
                html: "",
                showConfirmButton: !1,
                customClass: {
                    popup: "episodesModal"
                },
                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                padding: "10px 5px",
                didOpen: () => {
                    const a = new fi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new ot.Collection([])
                    });
                    a.collection.add({
                        html: this.model.get("strings").vip_episodes_back || "Back",
                        action: "back",
                        className: "backButton"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_load || "Load an episode by id:",
                        className: "header"
                    }), a.collection.add({
                        type: "input",
                        preventAutosize: !0,
                        placeholder: "???-????",
                        inlineSubmit: !0,
                        inlineSubmitText: this.model.get("strings").vip_episodes_submit || "SUBMIT",
                        className: "lobbyUgcInput"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                        className: "danger"
                    }), e.model.get("history").length && (a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_select || "Or select an episode:",
                        className: "episodesListHeader"
                    }), a.collection.add(e.model.get("history").map(f => ({
                        action: "activateContentId",
                        html: f.remoteContentId ? `${f.metadata.title}<br/>${f.formattedRemoteContentId}` : `${f.metadata.title}`,
                        key: f.remoteContentId || f.localContentId
                    })))), a.render(), fe(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(a, "childview:button:activateContentId", e.activateContentId), e.listenTo(a, "childview:button:back", () => {
                        kt.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            kt.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            kt.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), kt.close())
        },
        onChildviewChildviewCharacterClick(t) {
            t.get("available") && !t.get("selected") && (this.triggerMethod("client:message", {
                action: "avatar",
                name: t.get("name")
            }), this.charactersListView.collection.forEach(e => {
                e.unset("active"), e.set("bgcolor", this.model.get("playerInfo").buttonColor)
            }), t.set("active", !0), t.set("bgcolor", this.model.get("playerInfo").textColor))
        }
    }),
    HC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    GC = si.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    UC = Et.View.extend({
        className: "Logo",
        template: at.template(HC),
        model: new GC,
        events: {
            touchstart: "onTouchStart",
            "click .artifactButton": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            ".message": {
                attributes: [{
                    name: "style",
                    observe: "message",
                    onGet(t) {
                        let e = "";
                        return t && (t.html || t.text) || (e += "display: none;"), e
                    }
                }]
            },
            ".messageText": {
                observe: "message",
                updateMethod: "html",
                onGet(t) {
                    return !t || !t.html && !t.text ? null : t.html ? t.html : fe("<div />").text(t.text).html()
                }
            },
            "#action": "action",
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        const e = t || {
                            rootId: "",
                            categoryId: "",
                            artifactId: ""
                        };
                        let n = "games.jackbox.tv";
                        return e.rootId.indexOf("test") !== -1 && (n = "games-test.jackbox.tv"), `https://${n}/artifact/${e.categoryId}/${e.artifactId}/`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onTouchStart(t) {
            t.target.tagName.toLowerCase() !== "button" && t.preventDefault()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Ni.setAsViewed(0)
        }
    }),
    Bs = {
        en: {
            LANGUAGE_NAME: "English",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Language",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnected",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Thanks for playing!"
        },
        fr: {
            LANGUAGE_NAME: "Fran\xE7ais",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Langue",
            LOGIN: "Connexion",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "D\xE9connect\xE9",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Vous avez \xE9t\xE9 d\xE9connect\xE9"
        },
        it: {
            LANGUAGE_NAME: "Italiano",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Lingua",
            LOGIN: "Accesso",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnesso",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Disconnesso"
        },
        de: {
            LANGUAGE_NAME: "Deutsche",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Sprache",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Getrennt",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Getrennt"
        },
        es: {
            LANGUAGE_NAME: "Espa\xF1ol",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "idioma",
            LOGIN: "Iniciar sesi\xF3n",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Desconectado"
        }
    },
    qC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    WC = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(qC),
        model: new ot.Model,
        bindings: {
            ":el": {
                observe: ["username", "hidden"],
                visible(t) {
                    return t[0] && !t[1]
                },
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            "#playername": {
                observe: "username",
                attributes: [{
                    name: "style",
                    observe: "textColor",
                    onGet(t) {
                        return t ? `color: ${t}` : ""
                    }
                }]
            },
            ".playerTopBar": {
                observe: "username",
                visible: !0,
                attributes: [{
                    name: "style",
                    observe: "topBarColor",
                    onGet(t) {
                        return t ? `background-color: ${t}` : ""
                    }
                }]
            },
            "#playericon": {
                observe: "avatar",
                visible: !0,
                attributes: [{
                    name: "class",
                    observe: "avatar"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    XC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    YC = si.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            countGroupName: null,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    KC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(XC),
        model: new YC,
        sessionModule: "vote",
        sessionName: " Vote",
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        bindings: {
            ".chosen": {
                observe: "chosen",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : fe("<div />").text(t.text).html() : null
                }
            },
            ".choices": {
                observe: "chosen",
                visible(t) {
                    return t === "" || t === null
                }
            },
            ".error": {
                observe: "error",
                visible: !0,
                updateView: !0
            },
            ".makeSingleChoiceDone": {
                observe: "chosen",
                visible(t) {
                    return t !== null && t !== ""
                }
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : fe("<div />").text(t.text).html() : null
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color:${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.choicesList = this.choicesList || new fi({
                action: "choose",
                collection: new ot.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && at.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
                text: "Submit",
                action: "submit",
                block: !1
            }), this.model.get("isAudience") && ((this.model.get("choiceId") === void 0 || this.model.get("choiceId") !== this.getOption("choiceId")) && (this.selected = [], this.audienceChoice = void 0, this.votesLeft = void 0), this.selected.length > 0 && (this.model.get("type") === "multiple" ? this.choicesList.children.forEach(t => {
                this.selected.find(e => e === t.getOption("index")) !== void 0 && t.model.set("selected", !0)
            }) : this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.model.get("choiceId") || 0
            }))), this.choiceId = this.model.get("choiceId") || 0, this.stickit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.choicesList), this.stickit()
        },
        onAttach() {
            this.update(), kt.vibrate()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("action") || "choose",
                n = t.get("index"),
                i = this.model.get("type");
            switch (this.choicesList.children.forEach(a => {
                    a.model.set("disabled", i === "single"), a.model.set("active", !1)
                }), i) {
                case "multiple":
                    if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                        const a = [];
                        this.choicesList.children.forEach(f => {
                            f.model.get("selected") && a.push(f.getOption("index"))
                        }), this.selected = a
                    }
                    return !1;
                case "repeating":
                    if (this.votesLeft === void 0 && (this.votesLeft = this.model.get("maxVotes")), this.delaySubmit || this.votesLeft <= 0 && this.model.get("isAudience")) return !1;
                    this.delaySubmit = !0, window.setTimeout(() => {
                        this.delaySubmit = !1
                    }, 101), this.votesLeft -= 1;
                    break;
                case "single":
                    t.set("selected", !0), t.set("active", !0);
                    break
            }
            return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: e,
                choice: n
            }) : this.model.get("isAudience") && (this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: n
            }), i !== "repeating" && this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })), !1
        },
        displayAudienceChoice(t) {
            let e = "Thank you.";
            const n = t.map(a => {
                const f = this.choicesList.children.find(m => m.model.get("index") === a);
                return f ? f.model.get("html") || f.model.get("text") : ""
            });
            return t !== void 0 && this.model.get("strings") && (e = this.model.get("strings").your_choice + n.join(", ")), {
                html: e
            }
        },
        onChildviewChildviewButtonCensor(t) {
            const e = t.get("index"),
                n = t.get("html");
            if (this.model.get("censorDialog") === "confirm") t.get("isWarned") ? this.triggerMethod("client:message", {
                action: "censor",
                choice: e
            }) : t.set("isWarned", !0);
            else {
                if (this.model.get("censorDialog") === "warning") return Rn.close(), Rn.fire({
                    customClass: {
                        popup: "Dialog",
                        container: "container",
                        content: "content",
                        title: "title",
                        closeButton: "button closeButton",
                        cancelButton: "button cancelButton",
                        confirmButton: "button confirmButton",
                        denyButton: "button denyButton"
                    },
                    title: this.model.get("strings").censor_prompt,
                    text: n,
                    showCancelButton: !0,
                    confirmButtonText: this.model.get("strings").censor_confirm,
                    cancelButtonText: this.model.get("strings").censor_cancel,
                    confirmButtonColor: "#900"
                }).then(i => {
                    i.value && this.triggerMethod("client:message", {
                        action: "censor",
                        choice: e
                    })
                }), !1;
                this.triggerMethod("client:message", {
                    action: "censor",
                    choice: e
                })
            }
            return !1
        },
        onChildviewChildviewButtonSubmit() {
            let t = [];
            this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            });
            const e = t.join(",");
            this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: "submit",
                choice: e
            }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: e
            }), this.model.get("type") !== "repeating" && (t = [], this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            }), this.selected = t, this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })))
        }
    });
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function cc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function zn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? cc(Object(n), !0).forEach(function(i) {
            JC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Us(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Us = function(e) {
        return typeof e
    } : Us = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Us(t)
}

function JC(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function ri() {
    return ri = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, ri.apply(this, arguments)
}

function QC(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function ZC(t, e) {
    if (t == null) return {};
    var n = QC(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ex = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    uc = ii(/firefox/i),
    ss = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    Zu = ii(/iP(ad|od|hone)/i),
    eh = ii(/chrome/i) && ii(/android/i),
    th = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && th)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !oi && th)
}

function no(t, e) {
    if (!!e) {
        if (e[0] === ">" && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
        } catch {
            return !1
        }
        return !1
    }
}

function tx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = tx(t))
    }
    return null
}
var hc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(hc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(hc, " ")
        }
}

function tt(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function pr(t, e) {
    var n = "";
    if (typeof t == "string") n = t;
    else
        do {
            var i = tt(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function nh(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            a = 0,
            f = i.length;
        if (n)
            for (; a < f; a++) n(i[a], a);
        return i
    }
    return []
}

function Fn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, m, _, k, I, D, M;
        if (t !== window && t.parentNode && t !== Fn() ? (f = t.getBoundingClientRect(), m = f.top, _ = f.left, k = f.bottom, I = f.right, D = f.height, M = f.width) : (m = 0, _ = 0, k = window.innerHeight, I = window.innerWidth, D = window.innerHeight, M = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var Y = a.getBoundingClientRect();
                    m -= Y.top + parseInt(tt(a, "border-top-width")), _ -= Y.left + parseInt(tt(a, "border-left-width")), k = m + f.height, I = _ + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ne = pr(a || t),
                K = ne && ne.a,
                re = ne && ne.d;
            ne && (m /= re, _ /= K, M /= K, D /= re, k = m + D, I = _ + M)
        }
        return {
            top: m,
            left: _,
            bottom: k,
            right: I,
            width: M,
            height: D
        }
    }
}

function dc(t, e, n) {
    for (var i = di(t, !0), a = Kt(t)[e]; i;) {
        var f = Kt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = a >= f : m = a <= f, !m) return i;
        if (i === Fn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, f = 0, m = t.children; f < m.length;) {
        if (m[f].style.display !== "none" && m[f] !== Qe.ghost && (i || m[f] !== Qe.dragged) && $n(m[f], n.draggable, t, !1)) {
            if (a === e) return m[f];
            a++
        }
        f++
    }
    return null
}

function ul(t, e) {
    for (var n = t.lastElementChild; n && (n === Qe.ghost || tt(n, "display") === "none" || e && !no(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Qe.clone && (!e || no(t, e)) && n++;
    return n
}

function fc(t) {
    var e = 0,
        n = 0,
        i = Fn();
    if (t)
        do {
            var a = pr(t),
                f = a.a,
                m = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * m
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function nx(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return Fn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = tt(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Fn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Fn()
}

function ix(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ha(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var os;

function ih(t, e) {
    return function() {
        if (!os) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), os = setTimeout(function() {
                os = void 0
            }, e)
        }
    }
}

function rx() {
    clearTimeout(os), os = void 0
}

function rh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function sh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function sx() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(a) {
                    if (!(tt(a, "display") === "none" || a === Qe.ghost)) {
                        t.push({
                            target: a,
                            rect: Kt(a)
                        });
                        var f = zn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var m = pr(a, !0);
                            m && (f.top -= m.f, f.left -= m.e)
                        }
                        a.fromRect = f
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(nx(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var a = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var f = !1,
                m = 0;
            t.forEach(function(_) {
                var k = 0,
                    I = _.target,
                    D = I.fromRect,
                    M = Kt(I),
                    Y = I.prevFromRect,
                    ne = I.prevToRect,
                    K = _.rect,
                    re = pr(I, !0);
                re && (M.top -= re.f, M.left -= re.e), I.toRect = M, I.thisAnimationDuration && ha(Y, M) && !ha(D, M) && (K.top - M.top) / (K.left - M.left) === (D.top - M.top) / (D.left - M.left) && (k = ax(K, Y, ne, a.options)), ha(M, D) || (I.prevFromRect = D, I.prevToRect = M, k || (k = a.options.animation), a.animate(I, K, M, k)), k && (f = !0, m = Math.max(m, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, m) {
            if (m) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var _ = pr(this.el),
                    k = _ && _.a,
                    I = _ && _.d,
                    D = (a.left - f.left) / (k || 1),
                    M = (a.top - f.top) / (I || 1);
                i.animatingX = !!D, i.animatingY = !!M, tt(i, "transform", "translate3d(" + D + "px," + M + "px,0)"), this.forRepaintDummy = ox(i), tt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
            }
        }
    }
}

function ox(t) {
    return t.offsetWidth
}

function ax(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var rr = [],
    da = {
        initializeByDefault: !0
    },
    ps = {
        mount: function(e) {
            for (var n in da) da.hasOwnProperty(n) && !(n in e) && (e[n] = da[n]);
            rr.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), rr.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            rr.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][f] && n[m.pluginName][f](zn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            rr.forEach(function(_) {
                var k = _.pluginName;
                if (!(!e.options[k] && !_.initializeByDefault)) {
                    var I = new _(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, ri(i, I.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var m = this.modifyOption(e, f, e.options[f]);
                    typeof m < "u" && (e.options[f] = m)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return rr.forEach(function(a) {
                typeof a.eventProperties == "function" && ri(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return rr.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function lx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        m = t.toEl,
        _ = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        D = t.oldDraggableIndex,
        M = t.newDraggableIndex,
        Y = t.originalEvent,
        ne = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, v = e.options,
            N = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = _ || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = D, re.newDraggableIndex = M, re.originalEvent = Y, re.pullMode = ne ? ne.lastPutMode : void 0;
        var q = zn(zn({}, K), ps.getEventProperties(i, e));
        for (var ae in q) re[ae] = q[ae];
        n && n.dispatchEvent(re), v[N] && v[N].call(e, re)
    }
}
var cx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = ZC(i, cx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Ii,
            lastDownEl: qs,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: tn,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: ch,
            unhideGhostForTarget: uh,
            cloneNowHidden: function() {
                ui = !0
            },
            cloneNowShown: function() {
                ui = !1
            },
            dispatchSortableEvent: function(_) {
                gn({
                    sortable: n,
                    name: _,
                    originalEvent: a
                })
            }
        }, f))
    };

function gn(t) {
    lx(zn({
        putSortable: tn,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Ii, qs, Vt, ui, cr, _n, as, ci, $s, tn, lr = !1,
    io = !1,
    ro = [],
    Ai, Mn, fa, pa, pc, gc, Qr, sr, ls, cs = !1,
    js = !1,
    Ws, ln, ga = [],
    Da = !1,
    so = [],
    wo = typeof document < "u",
    Fs = Zu,
    mc = fs || oi ? "cssFloat" : "float",
    ux = wo && !eh && !Zu && "draggable" in document.createElement("div"),
    oh = function() {
        if (!!wo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    ah = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = yr(e, 0, n),
            m = yr(e, 1, n),
            _ = f && tt(f),
            k = m && tt(m),
            I = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Kt(f).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Kt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && _.float && _.float !== "none") {
            var M = _.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === M) ? "vertical" : "horizontal"
        }
        return f && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || I >= a && i[mc] === "none" || m && i[mc] === "none" && I + D > a) ? "vertical" : "horizontal"
    },
    hx = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === _ || f === k || a + m / 2 === _ + I / 2
    },
    dx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || ul(a))) {
                var m = Kt(a),
                    _ = e >= m.left - f && e <= m.right + f,
                    k = n >= m.top - f && n <= m.bottom + f;
                if (_ && k) return i = a
            }
        }), i
    },
    lh = function(e) {
        function n(f, m) {
            return function(_, k, I, D) {
                var M = _.options.group.name && k.options.group.name && _.options.group.name === k.options.group.name;
                if (f == null && (m || M)) return !0;
                if (f == null || f === !1) return !1;
                if (m && f === "clone") return f;
                if (typeof f == "function") return n(f(_, k, I, D), m)(_, k, I, D);
                var Y = (m ? _ : k).options.group.name;
                return f === !0 || typeof f == "string" && f === Y || f.join && f.indexOf(Y) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Us(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    ch = function() {
        !oh && ut && tt(ut, "display", "none")
    },
    uh = function() {
        !oh && ut && tt(ut, "display", "")
    };
wo && !eh && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Oi = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = dx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    fx = function(e) {
        Ie && Ie.parentNode[Sn]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = ri({}, e), t[Sn] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return ah(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(m, _) {
            m.setData("Text", _.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !ss,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    lh(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : ux, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, sx())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (sr = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Ie) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                a = this.options,
                f = a.preventOnFilter,
                m = e.type,
                _ = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (_ || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = a.filter;
            if (Cx(i), !Ie && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, a.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, a.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: I,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function(M) {
                        if (M = $n(I, M.trim(), i, !1), M) return gn({
                            sortable: n,
                            rootEl: M,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), D)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !$n(I, a.handle, i, !1) || this._prepareDragStart(e, _, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            m = a.options,
            _ = f.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === f) {
            var I = Kt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Ii = Ie.nextSibling, qs = i, $s = m.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, pc = Ai.clientX - I.left, gc = Ai.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !uc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(D) {
                    nh(Ie, D.trim(), ma)
                }), xt(_, "dragover", Oi), xt(_, "mousemove", Oi), xt(_, "touchmove", Oi), xt(_, "mouseup", a._onDrop), xt(_, "touchend", a._onDrop), xt(_, "touchcancel", a._onDrop), uc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(_, "mouseup", a._disableDelayedDrag), xt(_, "touchend", a._disableDelayedDrag), xt(_, "touchcancel", a._disableDelayedDrag), xt(_, "mousemove", a._delayedDragTouchMoveHandler), xt(_, "touchmove", a._delayedDragTouchMoveHandler), m.supportPointer && xt(_, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, m.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ie && ma(Ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._disableDelayedDrag), wt(e, "touchend", this._disableDelayedDrag), wt(e, "touchcancel", this._disableDelayedDrag), wt(e, "mousemove", this._delayedDragTouchMoveHandler), wt(e, "touchmove", this._delayedDragTouchMoveHandler), wt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : n ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(Ie, "dragend", this), xt(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Xs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (lr = !1, Pt && Ie) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && xt(document, "dragover", fx);
            var i = this.options;
            !e && En(Ie, i.dragClass, !1), En(Ie, i.ghostClass, !0), Qe.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Mn) {
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, ch();
            for (var e = document.elementFromPoint(Mn.clientX, Mn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Mn.clientX, Mn.clientY), e !== n);) n = e;
            if (Ie.parentNode[Sn]._isOutsideThisEl(e), n)
                do {
                    if (n[Sn]) {
                        var i = void 0;
                        if (i = n[Sn]._onDragOver({
                                clientX: Mn.clientX,
                                clientY: Mn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            uh()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                m = ut && pr(ut, !0),
                _ = ut && m && m.a,
                k = ut && m && m.d,
                I = Fs && ln && fc(ln),
                D = (f.clientX - Ai.clientX + a.x) / (_ || 1) + (I ? I[0] - ga[0] : 0) / (_ || 1),
                M = (f.clientY - Ai.clientY + a.y) / (k || 1) + (I ? I[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                m ? (m.e += D - (fa || 0), m.f += M - (pa || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: M
                };
                var Y = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                tt(ut, "webkitTransform", Y), tt(ut, "mozTransform", Y), tt(ut, "msTransform", Y), tt(ut, "transform", Y), fa = D, pa = M, Mn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Kt(Ie, !0, Fs, !0, e),
                i = this.options;
            if (Fs) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Fn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Fn(), ga = fc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", Fs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", pc / parseInt(ut.style.width) * 100 + "% " + gc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), Qe.eventCanceled || (Vt = sh(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, m, _ = this.options,
            k = _.group,
            I = Qe.active,
            D = $s === k,
            M = _.sort,
            Y = tn || I,
            ne, K = this,
            re = !1;
        if (Da) return;

        function v(we, ue) {
            wn(we, K, zn({
                evt: e,
                isOwner: D,
                axis: ne ? "vertical" : "horizontal",
                revert: m,
                dragRect: a,
                targetRect: f,
                canSort: M,
                fromSortable: Y,
                target: i,
                completed: q,
                onMove: function(Te, $e) {
                    return zs(Pt, n, Ie, a, Te, Kt(Te), e, $e)
                },
                changed: ae
            }, ue))
        }

        function N() {
            v("dragOverAnimationCapture"), K.captureAnimationState(), K !== Y && Y.captureAnimationState()
        }

        function q(we) {
            return v("dragOverCompleted", {
                insertion: we
            }), we && (D ? I._hideClone() : I._showClone(K), K !== Y && (En(Ie, tn ? tn.options.ghostClass : I.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), tn !== K && K !== Qe.active ? tn = K : K === Qe.active && tn && (tn = null), Y === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                v("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== Y && (Y.animateAll(), Y._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !we && Oi(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            _n = On(Ie), ci = On(Ie, _.draggable), gn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, _.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return q(!1);
        if (io = !1, I && !_.disabled && (D ? M || (m = $t !== Pt) : tn === this || (this.lastPutMode = $s.checkPull(this, I, Ie, e)) && k.checkPut(this, I, Ie, e))) {
            if (ne = this._getDirection(e, i) === "vertical", a = Kt(Ie), v("dragOverValid"), Qe.eventCanceled) return re;
            if (m) return $t = Pt, N(), this._hideClone(), v("revert"), Qe.eventCanceled || (Ii ? Pt.insertBefore(Ie, Ii) : Pt.appendChild(Ie)), q(!0);
            var se = ul(n, _.draggable);
            if (!se || vx(e, ne, this) && !se.animated) {
                if (se === Ie) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Kt(i)), zs(Pt, n, Ie, a, i, f, e, !!i) !== !1) return N(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, ae(), q(!0)
            } else if (se && mx(e, ne, this)) {
                var ye = yr(n, 0, _, !0);
                if (ye === Ie) return q(!1);
                if (i = ye, f = Kt(i), zs(Pt, n, Ie, a, i, f, e, !1) !== !1) return N(), n.insertBefore(Ie, ye), $t = n, ae(), q(!0)
            } else if (i.parentNode === n) {
                f = Kt(i);
                var d = 0,
                    _e, Oe = Ie.parentNode !== n,
                    Pe = !hx(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, ne),
                    lt = ne ? "top" : "left",
                    Be = dc(i, "top", "top") || dc(Ie, "top", "top"),
                    J = Be ? Be.scrollTop : void 0;
                sr !== i && (_e = f[lt], cs = !1, js = !Pe && _.invertSwap || Oe), d = yx(e, i, f, ne, Pe ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, js, sr === i);
                var Fe;
                if (d !== 0) {
                    var G = On(Ie);
                    do G -= d, Fe = $t.children[G]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (d === 0 || Fe === i) return q(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    Ae = !1;
                Ae = d === 1;
                var be = zs(Pt, n, Ie, a, i, f, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), Da = !0, setTimeout(gx, 30), N(), Ae && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? oe : i), Be && rh(Be, 0, J - Be.scrollTop), $t = Ie.parentNode, _e !== void 0 && !js && (Ws = Math.abs(_e - Kt(i)[lt])), ae(), q(!0)
            }
            if (n.contains(Ie)) return q(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        wt(document, "mousemove", this._onTouchMove), wt(document, "touchmove", this._onTouchMove), wt(document, "pointermove", this._onTouchMove), wt(document, "dragover", Oi), wt(document, "mousemove", Oi), wt(document, "touchmove", Oi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._onDrop), wt(e, "touchend", this._onDrop), wt(e, "pointerup", this._onDrop), wt(e, "touchcancel", this._onDrop), wt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (_n = On(Ie), ci = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), $t = Ie && Ie.parentNode, _n = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), La(this.cloneId), La(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || tn && tn.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: $t,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== $t ? (_n >= 0 && (gn({
            rootEl: $t,
            name: "add",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: $t,
            originalEvent: e
        }), gn({
            rootEl: $t,
            name: "sort",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), tn && tn.save()) : _n !== cr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = $t = ut = Ii = Vt = qs = ui = Ai = Mn = Qr = _n = ci = cr = as = sr = ls = tn = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
            e.checked = !0
        }), so.length = fa = pa = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ie && (this._onDragOver(e), px(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, m = this.options; a < f; a++) n = i[a], $n(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || bx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, m) {
            var _ = a.children[m];
            $n(_, this.options.draggable, a, !1) && (i[f] = _)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (a.removeChild(i[f]), a.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return $n(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var a = ps.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && lh(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (wn("hideClone", this), Qe.eventCanceled) return;
            tt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Ie) : Ii ? Pt.insertBefore(Vt, Ii) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Ie, Vt), tt(Vt, "display", ""), ui = !1
        }
    }
};

function px(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, f, m, _) {
    var k, I = t[Sn],
        D = I.options.onMove,
        M;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Kt(e), k.willInsertAfter = _, k.originalEvent = m, t.dispatchEvent(k), D && (M = D.call(I, k, m)), M
}

function ma(t) {
    t.draggable = !1
}

function gx() {
    Da = !1
}

function mx(t, e, n) {
    var i = Kt(yr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function vx(t, e, n) {
    var i = Kt(ul(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function yx(t, e, n, i, a, f, m, _) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        D = i ? n.top : n.left,
        M = i ? n.bottom : n.right,
        Y = !1;
    if (!m) {
        if (_ && Ws < I * a) {
            if (!cs && (ls === 1 ? k > D + I * f / 2 : k < M - I * f / 2) && (cs = !0), cs) Y = !0;
            else if (ls === 1 ? k < D + Ws : k > M - Ws) return -ls
        } else if (k > D + I * (1 - a) / 2 && k < M - I * (1 - a) / 2) return wx(e)
    }
    return Y = Y || m, Y && (k < D + I * f / 2 || k > M - I * f / 2) ? k > D + I / 2 ? 1 : -1 : 0
}

function wx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function bx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function Cx(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Xs(t) {
    return setTimeout(t, 0)
}

function La(t) {
    return clearTimeout(t)
}
wo && xt(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: wt,
    css: tt,
    find: nh,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: ix,
    throttle: ih,
    closest: $n,
    toggleClass: En,
    clone: sh,
    index: On,
    nextTick: Xs,
    cancelNextTick: La,
    detectDirection: ah,
    getChild: yr
};
Qe.get = function(t) {
    return t[Sn]
};
Qe.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Qe.utils = zn(zn({}, Qe.utils), i.utils)), ps.mount(i)
    })
};
Qe.create = function(t, e) {
    return new Qe(t, e)
};
Qe.version = ex;
var Wt = [],
    Zr, Ma, Pa = !1,
    va, ya, oo, es;

function xx() {
    function t() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        };
        for (var e in this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this))
    }
    return t.prototype = {
        dragStarted: function(n) {
            var i = n.originalEvent;
            this.sortable.nativeDraggable ? xt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? xt(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? xt(document, "touchmove", this._handleFallbackAutoScroll) : xt(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), vc(), Ys(), rx()
        },
        nulling: function() {
            oo = Ma = Zr = Pa = es = va = ya = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(f, m);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                wa(n, this.options, _, i);
                var k = di(_, !0);
                Pa && (!es || f !== va || m !== ya) && (es && vc(), es = setInterval(function() {
                    var I = di(document.elementFromPoint(f, m), !0);
                    I !== k && (k = I, Ys()), wa(n, a.options, I, i)
                }, 10), va = f, ya = m)
            } else {
                if (!this.options.bubbleScroll || di(_, !0) === Fn()) {
                    Ys();
                    return
                }
                wa(n, this.options, di(_, !1), !1)
            }
        }
    }, ri(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Ys() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function vc() {
    clearInterval(es)
}
var wa = ih(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                _ = e.scrollSpeed,
                k = Fn(),
                I = !1,
                D;
            Ma !== n && (Ma = n, Ys(), Zr = e.scroll, D = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var M = 0,
                Y = Zr;
            do {
                var ne = Y,
                    K = Kt(ne),
                    re = K.top,
                    v = K.bottom,
                    N = K.left,
                    q = K.right,
                    ae = K.width,
                    se = K.height,
                    ye = void 0,
                    d = void 0,
                    _e = ne.scrollWidth,
                    Oe = ne.scrollHeight,
                    Pe = tt(ne),
                    lt = ne.scrollLeft,
                    Be = ne.scrollTop;
                ne === k ? (ye = ae < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = ae < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var J = ye && (Math.abs(q - a) <= m && lt + ae < _e) - (Math.abs(N - a) <= m && !!lt),
                    Fe = d && (Math.abs(v - f) <= m && Be + se < Oe) - (Math.abs(re - f) <= m && !!Be);
                if (!Wt[M])
                    for (var G = 0; G <= M; G++) Wt[G] || (Wt[G] = {});
                (Wt[M].vx != J || Wt[M].vy != Fe || Wt[M].el !== ne) && (Wt[M].el = ne, Wt[M].vx = J, Wt[M].vy = Fe, clearInterval(Wt[M].pid), (J != 0 || Fe != 0) && (I = !0, Wt[M].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * _ : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * _ : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Ae, oe, t, oo, Wt[this.layer].el) !== "continue" || rh(Wt[this.layer].el, Ae, oe)
                }.bind({
                    layer: M
                }), 24))), M++
            } while (e.bubbleScroll && Y !== k && (Y = di(Y, !1)));
            Pa = I
        }
    }, 30),
    hh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            m = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || f;
            _();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                M = document.elementFromPoint(D.clientX, D.clientY);
            k(), I && !I.el.contains(M) && (m("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function hl() {}
hl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = yr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: hh
};
ri(hl, {
    pluginName: "revertOnSpill"
});

function dl() {}
dl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: hh
};
ri(dl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new xx);
Qe.mount(dl, hl);
const Ex = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    _x = si.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    Sx = Et.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: at.template("<div class='text'></div>"),
        model: new ot.Model({}),
        bindings: {
            ":el": {
                attributes: [{
                    name: "data-id",
                    observe: "key"
                }]
            },
            ".text": "html"
        },
        onAttach() {
            this.stickit()
        }
    }),
    yc = Et.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: Sx,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    kx = Et.View.extend({
        className: "SorterView",
        template: at.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new ot.Model({
            rankedLength: 1,
            choices: []
        }),
        bindings: {
            ".instructions": {
                observe: "rankedLength",
                visible: !0,
                onGet(t) {
                    return t < 3
                }
            },
            "#unrankedChoicesRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] !== t[1].length
                }
            },
            "#lockInRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] === t[1].length
                }
            }
        },
        regions: {
            rankedChoices: "#rankedChoicesRegion",
            unrankedChoices: "#unrankedChoicesRegion",
            lockInRegion: "#lockInRegion"
        },
        initialize() {
            this.rankedCollectionView = this.rankedCollectionView || new yc({
                collection: new ot.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new yc({
                className: "sortable-collection unranked",
                collection: new ot.Collection([])
            }), this.lockInView = this.lockInView || new Xu({
                block: !1,
                model: new ot.Model({
                    action: "lock",
                    html: "Lock In"
                })
            }), this.listenTo(this.model, "change:choices", this.update, this)
        },
        onAttach() {
            this.showChildView("rankedChoices", this.rankedCollectionView), this.showChildView("unrankedChoices", this.unrankedCollectionView), this.showChildView("lockInRegion", this.lockInView), this.stickit(), this.update()
        },
        update() {
            const t = this.model.get("choices"),
                e = t.slice(0, 1),
                n = t.slice(1);
            this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = Qe.create(this.rankedCollectionView.el, {
                group: "shared",
                onSort: this.handleOnSort.bind(this),
                animation: 100,
                delay: 100
            }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(n), this.unrankedSortable = Qe.create(this.unrankedCollectionView.el, {
                className: "unranked",
                group: {
                    name: "shared",
                    put: !1
                },
                sort: !1
            })
        },
        moveItemInArray(t, e, n) {
            const i = t.slice(0);
            if (e === n) return i;
            const a = i[e];
            return i.splice(e, 1), i.splice(n, 0, a), i
        },
        handleOnSort() {
            const t = this.model.get("choices"),
                e = this.rankedSortable.toArray();
            e.length === t.length && this.triggerMethod("sorted", e), this.model.set("rankedLength", e.length)
        },
        onChildviewButtonLock() {
            const t = this.rankedSortable.toArray();
            this.triggerMethod("lock", t)
        }
    }),
    Tx = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(Ex),
        model: new _x,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.sorterView = this.sorterView || new kx({}), this.listenTo(this.model, "change", this.update, this)
        },
        onAttach() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.sorterView)
        },
        update() {
            this.promptComponent.model.set(this.model.get("prompt")), this.model.get("choices").length !== this.sorterView.model.get("choices").length && this.sorterView.model.set("choices", this.model.get("choices"))
        },
        onChildviewSorted(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                order: t
            })
        },
        onChildviewLock(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                lock: !0,
                order: t
            })
        }
    }),
    Ax = `<div id="controller" class="state-controller controller-content">
	<div class="ugc-action-toggle-visibility">
    	<span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/>
    	<button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button>
    	<button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen" data-target="screen"></button>
    </div>
    <div class="ugc-action-play">
        <div class="ugc-episode-name"></div>
    </div>
	<div class="ugc-action-new">
		<button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button>
	</div>

	<div class="ugc-action-load">
    	<p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p>
		<div id="episodesRegion"></div>
	</div>

    <div id="prompt" class="prompt ugc-text"></div>
    <div id="ugc-no-actions">
    	<div id="ugc-no-actions-text"></div>
    </div>

    <div class="ugc-action-add">
    	<div id="inputRegion"></div>
    </div>

    <div class="ugc-action-title">
		<p class="text-box">
            <span class='text create_new_name_prompt'>create_new_name_prompt</span>
        </p>
    	<div id="titleInputRegion"></div>
    </div>

    <div class="ugc-action-close">
    	<button class="button action-button button_close" data-action="close">button_close</button>
    </div>
    <div class="ugc-action-unlock">
    	<button class="button action-button button_edit" data-action="unlock">button_edit</button>
    </div>
	<div class="ugc-action-done">
    	<button class="button action-button button_done" data-action="done">button_done</button>
    </div>
	<div class="ugc-action-submit">
    	<button class="button action-button button_publish" data-action="submit">button_publish</button>
    </div>

    <div class="ugc-action-play">
        <button class="button action-button button_play" data-action="play">button_play</button>
    </div>

    <div class="ugc-action-remove-content">
        <button class="button action-button button_delete" data-action="remove-content">button_delete</button>
    </div>

    <div class="ugc-action-exit">
        <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button>
    </div>

    <div class="ugc-action-episodes">
        <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button>
    </div>

    <div class="ugc-action-remove">
        <div id="promptsCount" class="promptsCount"></div>
    	<div id="promptsRegion"></div>
    </div>
</div>`,
    Ox = si.extend({
        defaults: {
            controllerVisibility: !0,
            episodes: [],
            episodeTitle: "",
            index: 0,
            maxContentLength: 45,
            maxTitleLength: 20,
            name: "",
            noActionsText: "",
            prompts: [],
            screenVisibility: !0,
            state: "UGC",
            text: "",
            validActions: [],
            strings: {
                tos_warning: "By sharing content, you agree to our Terms of service",
                tos_warning_agree: "agree and share",
                tos_warning_back: "back to menu",
                create_new_episode: "create a new episode",
                create_new_name_prompt: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                create_new_button: "create",
                button_back_to_episodes: "back to episodes",
                button_back_to_menu: "back to menu",
                previous_episodes: "previous episodes:",
                toggle_prompts_prompt: "tap to show/hide prompts",
                button_close: "close",
                button_done: "done",
                button_add: "add prompt",
                input_placeholder: "enter a prompt",
                label_hidden: "hidden",
                button_edit: "edit",
                button_save: "save",
                button_publish: "publish",
                button_play: "play",
                button_delete: "delete",
                delete_warning: "Are you sure you want to delete this episode?",
                delete_warning_confirm: "Yes",
                delete_warning_cancel: "No"
            }
        }
    }),
    Rx = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(Ax),
        model: new Ox,
        regions: {
            prompt: "#prompt",
            episodes: "#episodesRegion",
            input: "#inputRegion",
            titleInput: "#titleInputRegion",
            prompts: "#promptsRegion"
        },
        events: {
            "click #ugc-new-button": "onNewButtonClicked",
            "click #ugc-toggle-visibility-button-controller": "onToggleVisibilityController",
            "click #ugc-toggle-visibility-button-screen": "onToggleVisibilityScreen",
            "click .action-button": "onActionButtonClicked"
        },
        bindings: {
            ".ugc-text": {
                observe: "text",
                visible: !0,
                updateView: !0
            },
            ".ugc-action-add": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("add") !== -1
                }
            },
            ".ugc-action-close": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("close") !== -1
                }
            },
            ".ugc-action-exit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("exit") !== -1
                }
            },
            ".ugc-action-load": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("load") !== -1
                }
            },
            ".ugc-action-new": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("new") !== -1
                }
            },
            ".ugc-action-play": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("play") !== -1
                }
            },
            ".ugc-action-remove": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove") !== -1
                }
            },
            ".ugc-action-remove-content": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove-content") !== -1
                }
            },
            ".ugc-action-done": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("done") !== -1
                }
            },
            ".ugc-action-submit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("submit") !== -1
                }
            },
            ".ugc-action-title": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("title") !== -1
                }
            },
            ".ugc-action-toggle-visibility": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("toggle-visibility") !== -1
                }
            },
            ".ugc-action-unlock": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("unlock") !== -1
                }
            },
            ".ugc-action-episodes": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("episodes") !== -1
                }
            },
            "#ugc-no-actions": {
                observe: "validActions",
                visible(t) {
                    return !t || t.length === 0
                }
            },
            "#ugc-no-actions-text": {
                observe: "noActionsText",
                onGet(t) {
                    return typeof t == "string" ? t : ""
                }
            },
            "#ugc-toggle-visibility-button-controller": {
                classes: {
                    on: "controllerVisibility"
                }
            },
            "#ugc-toggle-visibility-button-screen": {
                classes: {
                    on: "screenVisibility"
                }
            },
            ".ugc-episode-name": "episodeTitle",
            ".create_new_episode": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_episode || "create_new_episode"
                }
            },
            ".previous_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.previous_episodes || "previous_episodes"
                }
            },
            ".toggle_prompts_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.toggle_prompts_prompt || "toggle_prompts_prompt"
                }
            },
            ".create_new_name_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_name_prompt || "create_new_name_prompt"
                }
            },
            ".button_close": {
                observe: "strings",
                onGet(t) {
                    return t.button_close || "button_close"
                }
            },
            ".button_edit": {
                observe: "strings",
                onGet(t) {
                    return t.button_edit || "button_edit"
                }
            },
            ".button_done": {
                observe: "strings",
                onGet(t) {
                    return t.button_done || "button_done"
                }
            },
            ".button_publish": {
                observe: "strings",
                onGet(t) {
                    return t.button_publish || "button_publish"
                }
            },
            ".button_play": {
                observe: "strings",
                onGet(t) {
                    return t.button_play || "button_play"
                }
            },
            ".button_delete": {
                observe: "strings",
                onGet(t) {
                    return t.button_delete || "button_delete"
                }
            },
            ".button_back_to_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_episodes || "button_back_to_episodes"
                }
            },
            ".button_back_to_menu": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_menu || "button_back_to_menu"
                }
            },
            "#promptsCount": {
                observe: ["prompts", "strings", "count", "maxCount"],
                onGet() {
                    const t = this.model.get("count"),
                        e = this.model.get("maxCount"),
                        n = this.model.get("prompts") || [],
                        i = this.model.get("strings").label_hidden || "hidden",
                        a = n.length;
                    let f = `${t}/${e}`;
                    return a < t && (f += ` (${t-a} ${i})`), f
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.episodesList = this.episodesList || new fi({
                action: "load",
                collection: new ot.Collection
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new to({
                model: new ot.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new fi({
                action: "remove",
                collection: new ot.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), kt.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = Ut.htmlUnescape(n.metadata.title);
                let a = Ut.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = at.extend({}, n);
                i.text = Ut.htmlUnescape(n.text);
                let a = n.author !== this.client.userId ? "other" : "self";
                return n.className && (a += ` ${n.className}`), {
                    ...i,
                    className: a
                }
            }))
        },
        onNewButtonClicked() {
            this.triggerMethod("client:message", {
                action: "new"
            })
        },
        onChildviewInputSubmit() {
            let t, e;
            this.model.get("validActions").indexOf("add") !== -1 ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput(), this.inputComponent.focus()) : this.model.get("validActions").indexOf("title") !== -1 && (t = "title", e = this.titleInputComponent.getValue(), this.titleInputComponent.clearInput()), !(!t || !e) && this.triggerMethod("client:message", {
                action: t,
                text: e
            })
        },
        onChildviewChildviewButtonLoad(t) {
            this.triggerMethod("client:message", {
                action: "load",
                contentId: t.get("key")
            })
        },
        onChildviewChildviewButtonRemove(t) {
            this.triggerMethod("client:message", {
                action: "remove",
                key: t.get("key")
            })
        },
        onToggleVisibilityController() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "controller"
            })
        },
        onToggleVisibilityScreen() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "screen"
            })
        },
        onActionButtonClicked(t) {
            const e = fe(t.currentTarget).data("action");
            if (e === "submit") {
                this.showTermsOfService();
                return
            }
            if (e === "remove-content") {
                this.showConfirmDeleteDialog();
                return
            }
            this.triggerMethod("client:message", {
                action: e
            })
        },
        showTermsOfService() {
            const t = `
            <a href='https://www.jackboxgames.com/terms-of-service/' target='_blank' >
                <br>
                <div class="tosLink">
                    <svg
                        class="bi bi-link-45deg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243
                                l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337
                                L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                        />
                        <path
                            d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896
                                l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"
                        />
                        <path
                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346
                                L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287
                                l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"
                        />
                        <path
                            d="M10 9.5a2.99 2.99 0 0 0 .288-1.46
                                l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896
                                l-.167.167A3.004 3.004 0 0 0 10 9.501z"
                        />
                    </svg>
                </div>
            </a>
        `;
            Rn.fire({
                target: this.el,
                html: `${this.model.get("strings").tos_warning}${t}`,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").tos_warning_agree,
                cancelButtonText: this.model.get("strings").tos_warning_back,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(e => {
                e.value && this.triggerMethod("client:message", {
                    action: "submit"
                })
            })
        },
        showConfirmDeleteDialog() {
            Rn.fire({
                target: this.el,
                text: this.model.get("strings").delete_warning,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").delete_warning_confirm,
                cancelButtonText: this.model.get("strings").delete_warning_cancel,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(t => {
                t.value && this.triggerMethod("client:message", {
                    action: "remove-content"
                })
            })
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("text");
            this.triggerMethod("client:message", {
                action: "remove",
                text: e
            })
        }
    }),
    Ix = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
    <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(0,0,0); stop-opacity:0.5" />
            <stop offset="60%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="80%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.7" />
        </radialGradient>
        <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.67 271.33">
            <title>astroIcon</title>
            <path class="cls-1" d="M253.83,108.17H210.89A57.83,57.83,0,0,1,160,138.5H140a57.83,57.83,0,0,1-50.89-30.33H46.17a19.5,19.5,0,0,0-19.5,19.5v11a19.5,19.5,0,0,0,19.5,19.5H70.4a19.5,19.5,0,0,1,19.5,19.5V259.8a17.37,17.37,0,0,0,17.36,17.37H115A17.37,17.37,0,0,0,132.4,259.8V236.53a17.37,17.37,0,0,1,17.37-17.36h0a17.36,17.36,0,0,1,17.36,17.36V259.8a17.37,17.37,0,0,0,17.37,17.37h9a17.37,17.37,0,0,0,17.36-17.37V177.67a19.5,19.5,0,0,1,19.5-19.5h23.49a19.5,19.5,0,0,0,19.5-19.5v-11A19.5,19.5,0,0,0,253.83,108.17Z" transform="translate(-18.17 -14.33)"/>
            <rect class="cls-1" x="64" y="8.5" width="135.67" height="115.67" rx="57.83" ry="57.83"/>
        </svg>
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           height="55"
           width="40"
           xml:space="preserve"
           viewBox="-20 -27.5 40 55"
           y="0px"
           x="0px"
           id="Layer_1"
           version="1.1"><metadata
           id="metadata10"><rdf:RDF><cc:Work
               rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                 rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
           id="defs8" />
        <path
           style="fill:#ffffff"
           d="m -20,27.5 20,-55 20,55 -20,-13 z"
           class="st0"
           id="aimArrow" />
        </svg>

    </defs>

    <circle class="background" r="16" cx="0" cy="0" />
    <circle class="background-gradient" r="32" cx="0" cy="0" fill="url(#grad1)" />
    <circle class="background-border" r=33 cx=0 cy=0 stroke="black" stroke-width="2" fill="none" />
    <circle id="health-display" class="health-display" r="33" cx="0" cy="0" />
    <circle class="circle-deadzone" fill="black" fill-opacity="0.8" r=1 cx=0 cy=0 stroke="white" stroke-width="0.3" stroke-dasharray="3.5 1.52" />
    
    <circle class="crosshair-center" r=1 cx=0 cy=0 />
    <circle class="circle-border-white" r="32" cx="0" cy="0" stroke="#ffffff" stroke-width="0.3" fill="none"/>
    <line class="line-helper-left" x1="-32" y1="0" x2="0" y2="0" ></line>
    <line class="line-helper-right" x1="32" y1="0" x2="0" y2="0" ></line>
    <circle class="locked-in-fade" r="17" cx="0" cy="0" />
    <line class="locked-in-line" x1="0" y1="0" x2="0" y2="0" display="inline"></line>
    <use class="aimArrow" xlink:href="#Layer_1" transform="rotate(180)" x="-2" y="-2.5" width="4" height="5"></use>
    <use class="astro" xlink:href="#Layer_3" transform="translate(-8, -8)" width="16" height="16"></use>
    <text id="text" class="text" x=0 y=10 text-anchor="middle" font-size=30 stroke="white">H</text>
</svg>`,
    Dx = Et.View.extend({
        className: "RadialView",
        template: at.template(Ix),
        model: new ot.Model({
            isTouching: !1,
            angle: 0,
            vector: {
                x: 0,
                y: 0
            },
            touchBuffer: 5
        }),
        events: {
            "mousedown .range-picker": "start",
            "touchstart .range-picker": "start",
            "touchmove .range-picker": "start",
            touchmove: "move",
            touchend: "end"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "lockedIn" : ""
                    }
                }]
            },
            ".background": {
                attributes: [{
                    name: "style",
                    observe: "accentColor",
                    onGet(t) {
                        return `stroke: ${t}`
                    }
                }]
            },
            ".health-display": {
                attributes: [{
                    name: "style",
                    observe: ["selector", "accentColor"],
                    onGet(t) {
                        let e = "";
                        const n = t[0],
                            i = t[1];
                        i && (e += `stroke:${i};`);
                        const a = n * 207,
                            f = 207 * (1 - n);
                        return e += `stroke-dasharray:${a} ${f};`, e += `transform:rotate(${-360*n-90}deg);`, e
                    }
                }]
            },
            ".line-helper-left": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".line-helper-right": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".locked-in-line": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".circle-deadzone": {
                attributes: [{
                    name: "r",
                    observe: "isTouching",
                    onGet(t) {
                        return "9.6"
                    }
                }]
            },
            ".text": "text",
            ".astro": {
                attributes: [{
                    name: "style",
                    observe: ["accentColor", "lockedIn"],
                    onGet(t) {
                        let e = "";
                        return e += `fill:${t[1]?"black":t[0]};`, e += `stroke:${t[1]?"#cccccc":"#ff00ff"};`, e
                    }
                }, {
                    name: "x",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }, {
                    name: "width",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "height",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "transform",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "translate(-4, -4)" : "translate(-8,-8)"
                    }
                }]
            },
            ".locked-in-fade": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }]
            },
            ".aimArrow": {
                attributes: [{
                    name: "transform",
                    observe: "angle",
                    onGet(t) {
                        let e = "";
                        return e += ` rotate(${t+180})`, e
                    }
                }, {
                    name: "display",
                    observe: ["lockedIn", "vector"],
                    onGet(t) {
                        return t[0] && this.getDistance(t[1]) > 0 ? "inline" : "none"
                    }
                }]
            }
        },
        initialize() {
            this.model.on("change:angle", this.updateAngle, this), this.model.on("change:vector", this.updateVector, this), this.model.on("change:isTouching", this.updateIsTouching, this)
        },
        updateAngle() {
            this.triggerMethod("angle", this.model.get("angle"))
        },
        updateVector() {
            this.triggerMethod("vector", this.getNormalizedVector())
        },
        updateIsTouching() {
            this.triggerMethod("isTouching", this.model.get("isTouching"))
        },
        onRender() {
            this.stickit()
        },
        start(t) {
            const e = this.eventToCoord(t);
            this.startCoord || (this.startCoord = e)
        },
        move(t) {
            t.preventDefault();
            const e = this.eventToCoord(t);
            if (!this.model.get("isTouching") && this.startCoord && this.getDistance(e, this.startCoord) > this.model.get("touchBuffer") && this.model.set("isTouching", !0), !this.model.get("isTouching") || this.model.get("lockedIn")) return;
            const n = this.coordToVector(e);
            this.model.set("vector", n);
            const i = this.coordToAngle(e);
            this.model.set("angle", i)
        },
        end() {
            this.startCoord = null, this.model.get("isTouching") && (this.model.set("isTouching", !1), this.triggerMethod("end", this.model))
        },
        getDistance(t, e) {
            e || (e = {
                x: 0,
                y: 0
            });
            const n = {
                x: e.x - t.x,
                y: e.y - t.y
            };
            return Math.sqrt(n.x ** 2 + n.y ** 2)
        },
        getNormalizedVector() {
            const t = at.extend({}, this.model.get("vector"));
            return t.x /= 32, t.y /= 32, t
        },
        eventToCoord(t) {
            const e = this.$el[0].getBoundingClientRect();
            return t.targetTouches && t.targetTouches instanceof TouchList && t.targetTouches.length > 0 ? {
                x: t.targetTouches[0].pageX - e.left,
                y: t.targetTouches[0].pageY - e.top
            } : {
                x: t.clientX - e.left,
                y: t.clientY - e.top
            }
        },
        coordToAngle(t) {
            const e = this.coordToVector(t);
            let n = Math.atan2(-e.x, e.y);
            return n += Math.PI, n = parseInt(n * 180 / Math.PI, 10), n
        },
        coordToVector(t) {
            const e = this.$el[0].getBoundingClientRect(),
                n = {
                    x: t.x - parseInt(e.width, 10) / 2,
                    y: t.y - parseInt(e.height, 10) / 2
                },
                i = 76 / e.width;
            n.x *= i, n.y *= i;
            const a = this.getDistance(n);
            if (a > 32) {
                const f = 32 / a;
                n.x *= f, n.y *= f
            }
            return n
        }
    }),
    Lx = `<div id="status-bar" class="health text">\r
    <div id="weaponBorder" class="weaponBorder">\r
        <div id="weaponIcon" class="weaponIcon"></div>\r
    </div>\r
</div>\r
<div id="radial" class="radial"></div>\r
<div id="control-panel" class="control-panel">\r
    <div class="message text">message</div>\r
    <div class="weaponNameContainer text">\r
        <div class="weaponIcon small"></div>\r
        <span class="weaponName">weapon name</span>\r
    </div>\r
    <div class="weaponText text">weapon text</div>\r
</div>`,
    Mx = si.extend({
        defaults: {
            shotId: void 0,
            state: "Shoot",
            throttle: 44,
            weapon: {},
            playerCanSwap: !1,
            characterCurrentHealth: null,
            characterMaxHealth: null,
            lockedIn: !1,
            selectorCircle: !0,
            classes: [],
            message: ""
        }
    }),
    Px = Et.View.extend({
        model: new Mx,
        template: at.template(Lx),
        className: "Shoot",
        client: null,
        regions: {
            radial: "#radial"
        },
        events: {
            "click .swap-button": "swapPlayer",
            touchstart: "eat",
            "click #reconnect": "reconnect"
        },
        eat(t) {
            t.preventDefault()
        },
        move(t) {
            this.radialComponent.move(t)
        },
        end(t) {
            this.radialComponent.end(t)
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.bgcolor ? `background-color:${t.bgcolor}` : ""
                    }
                }]
            },
            ".swap-button": {
                observe: "playerCanSwap",
                visible: !0
            },
            ".health": {
                observe: "characterCurrentHealth",
                visible(t) {
                    return t !== null
                }
            },
            ".currentHealth": "characterCurrentHealth",
            ".maxHealth": "characterMaxHealth",
            ".weaponText": {
                observe: "weapon",
                onGet(t) {
                    return t.text
                }
            },
            ".message": "message",
            ".weaponBorder": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.count ? `count-${t.count}` : "" : null
                    }
                }]
            },
            ".weaponIcon": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.id : ""
                    }
                }]
            },
            ".weaponName": {
                observe: "weapon",
                onGet(t) {
                    return t ? t.name ? t.name : t.id : ""
                }
            }
        },
        onChildviewVector(t) {
            this.throttledUpdate && this.throttledUpdate(t)
        },
        updateVector(t) {
            this.model.get("isAudience") || t.x === 0 && t.y === 0 || !this.radialComponent.model.get("isTouching") || this.triggerMethod("client:message", {
                action: "move",
                type: "move",
                vector: t
            })
        },
        onChildviewEnd() {
            if (this.model.get("lockedIn")) return;
            const t = this.radialComponent.getNormalizedVector();
            if (Math.sqrt(t.x * t.x + t.y * t.y) < .3) {
                this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.radialComponent.model.set("angle", 180), this.model.get("isPlayer") && this.triggerMethod("client:message", {
                    action: "cancel",
                    type: "cancel"
                });
                return
            }
            const n = this.model.get("weapon"),
                i = n.id ? n.id : this.model.get("weapon"),
                a = this.radialComponent.model.get("angle"),
                f = Math.floor(a / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = f * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                lockedIn: !0,
                shotId: this.shotId
            }))
        },
        initialize(t) {
            this.client = t.client, this.radialComponent = new Dx({
                model: new ot.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), fe(window).on("mousemove", this.move.bind(this)), fe(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), fe(window).off("mousemove"), fe(window).off("mouseup")
        },
        update() {
            const t = this.model.get("characterCurrentHealth"),
                e = this.model.get("characterMaxHealth");
            if (this.radialComponent.model.set("selector", t / e), this.radialComponent.model.set("accentColor", this.model.get("characterColor")), this.radialComponent.model.set("lockedIn", this.model.get("lockedIn")), this.radialComponent.model.set("text", ""), this.client.isRole("audience") && ((this.model.get("shotId") === void 0 || this.model.get("shotId") !== this.shotId) && (this.audienceShot = void 0), this.audienceShot && (this.model.setUpdate({
                    lockedIn: !0,
                    shotId: this.model.get("shotId") || 0
                }), this.radialComponent.model.set("text", `${this.audienceShot}\xB0`))), !this.model.get("lockedIn") && !this.radialComponent.model.get("isTouching") && this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
            else {
                if (!this.notified && this.model.get("state") === "Shoot") {
                    const n = {
                        ClusterBombs: [45, 60, 45, 60, 45, 60],
                        PlayerWeapon: [100, 100],
                        RainbowCannon: [45, 60, 45, 60, 45, 60],
                        Repeater: [45, 60, 45, 60, 45, 60],
                        Seeker: [45, 60, 45, 60, 45, 60],
                        Shield: [45, 60, 45, 60, 45, 60],
                        Stun: [45, 60, 45, 60, 45, 60],
                        SuperBlaster: [45, 60, 45, 60, 45, 60]
                    } [this.model.get("weapon").id];
                    kt.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), kt.vibrate()
        },
        onResize() {
            const t = fe(".radial"),
                e = fe("#status-bar").outerHeight() + fe(".playerTopBar").outerHeight() + fe("#control-panel").outerHeight() + 10,
                n = fe(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    Nx = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
<div id="controller-container" class="state-controller controller-page">
    <div id="playerRegion"></div>
    <div id="controller-main">
        <div class="loadingSpinner">
            <i class="fas fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
    </div>
</div>
<div id="broadcaster" role="button" aria-label="twitch broadcaster information" style="display:none;" class="twitchBroadcasterIcon"></div>
`;
Et.View.extend({
    client: null,
    template: at.template(Nx),
    playerTopBar: null,
    className() {
        return `pt-page ${this.getOption("appTag")}`
    },
    regions: {
        player: "#playerRegion",
        controller: {
            el: "#controller-main",
            replaceElement: !0
        }
    },
    events: {
        "click .twitchBroadcasterIcon": "onTwitchBroadcasterIconClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: "blob",
                onGet(t) {
                    let e = `pt-page ${this.getOption("appTag")}`;
                    return t && t.locale && (e += ` ${t.locale}`), e
                }
            }]
        },
        ".twitchBroadcasterIcon": {
            observe: ["broadcaster", "blob"],
            visible: !0,
            onGet([t, e]) {
                return t && e && !e.artifact && ["Lobby", "Logo"].includes(e.state)
            }
        }
    },
    initialize(t) {
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new WC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
        const e = t.client.parseEntities();
        this.model.set(e), this.model.on({
            "change:player": this.setBlob,
            "change:room": this.setBlob,
            "change:audiencePlayer": this.setBlob,
            "change:blob": this.update
        }, this), this.render(), this.setBlob(), window.addEventListener("resize", this.onResize)
    },
    onRender() {
        this.update(), this.stickit()
    },
    onAttach() {
        this.showChildView("player", this.playerTopBar), this.onResize(), this.client.isRole("broadcaster") && (this.model.set("broadcaster", this.client.isRole("broadcaster")), this.showTwitchBroadcasterDialog(20 * 1e3))
    },
    onBeforeDestroy() {
        this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:textDescriptions", this.onTextDescriptionsWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext)
    },
    updateLayout() {
        const e = this.model.get("blob").state;
        if (this.getGameLayout(e) !== -1) return null;
        switch (e) {
            case "Draw":
                return this.setLayout(PC);
            case "EnterSingleText":
                return this.setLayout(BC);
            case "Lobby":
                return this.setLayout(zC);
            case "Logo":
                return this.setLayout(UC);
            case "MakeSingleChoice":
                return this.setLayout(KC);
            case "Shoot":
                return this.setLayout(Px);
            case "Sortable":
                return this.setLayout(Tx);
            case "Camera":
                return this.setLayout(_C);
            case "UGC":
                return this.setLayout(Rx);
            default:
                return new Error("No common layout found")
        }
    },
    setLayout(t) {
        const e = new t(this.options),
            n = this.getRegion("controller");
        !n || (n.reset(), e.model.set(this.model.get("blob")), this.showChildView("controller", e), this.currentLayout = e, this.currentState = this.model.get("blob").state)
    },
    onEntityDidChange(t, e) {
        this.model.unset(t, {
            silent: !0
        }), this.model.set(t, e)
    },
    onTextDescriptions(t, e) {
        this.setTextDescriptions(e.latestDescriptions)
    },
    setBlob() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = this.model.get("audiencePlayer");
        let i = {};
        t && !at.isEmpty(t) ? i = {
            ...at.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...at.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...at.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && en.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Ni.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), fe("#textDescriptions").append(fe("<p />").text(e.text)))
        }))
    },
    parseBlob(t) {
        return t
    },
    getGameLayout() {
        return -1
    },
    formatSessionMessage(t) {
        return t
    },
    onTwitchBroadcasterIconClick() {
        this.showTwitchBroadcasterDialog()
    },
    showTwitchBroadcasterDialog(t) {
        let e = `
            <div class='icon-${this.client.roles.broadcaster.platform}'>
                ${this.client.roles.broadcaster.name}
            </div>`;
        e += `
            <div class='success'>
                You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), kt.show("custom", {
            html: e,
            position: "bottom",
            timer: t,
            backdrop: "transparent",
            customClass: {
                container: "jbgTwitchContainer",
                popup: "jbgTwitchPopup",
                htmlContainer: "jbgTwitchContent",
                closeButton: "jbgCloseButton"
            },
            showCloseButton: !0,
            closeButtonHtml: `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path>
                    <path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" />
                </svg>`,
            showConfirmButton: !1,
            showClass: {
                popup: "jbgTwitchShow"
            },
            hideClass: {
                popup: "jbgTwitchHide"
            }
        })
    },
    onResize() {
        const t = fe(window).width(),
            e = fe(window).height();
        fe(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        en.remove("roomCode"), en.remove("reconnect"), kt.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        kt.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (kt.show("toast", {
                text: e
            }), t.status === "connected") {
            const n = this.client.parseEntities();
            this.model.set(n)
        }
    },
    async onChildviewClientMessage(t) {
        if (this.client.isRole("player"))
            if (t.textKey) try {
                await this.client.updateText(t.textKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
                else throw console.error(`Unhandled error updating object entity ${t.objectKey}`), e
            } else {
                const e = this.formatSessionMessage(t);
                this.client.send("SendMessageToRoomOwner", e)
            } else if (this.client.isRole("audience")) {
                const e = this.currentLayout.sessionModule,
                    n = this.formatSessionMessage(t);
                if (!e) return;
                if (e === "vote") {
                    const i = this.currentLayout.model.get("countGroupName"),
                        a = n.vote;
                    this.onChildviewClientCountGroup({
                        name: i,
                        vote: a
                    })
                }
                if (e === "comment") {
                    const i = this.currentLayout.model.get("textRingName"),
                        a = n.entry;
                    this.onChildviewClientTextRing({
                        name: i,
                        text: a
                    })
                }
            }
    },
    onChildviewClientSessionMessage(t) {
        this.client.sessionSend(t.sessionModule, t.sessionName, t.sessionMessage)
    },
    onChildviewClientCountGroup({
        name: t,
        vote: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.incrementCountGroupCounter(t, e)
    },
    onChildviewClientGCounter({
        key: t,
        times: e
    }) {
        this.client.incrementGCounter(t, e)
    },
    onChildviewClientTextRing({
        name: t,
        text: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.pushTextRing(t, e)
    }
});
var dh = {
    exports: {}
};
/*!
 * EventEmitter v5.2.9 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */
(function(t) {
    (function(e) {
        function n() {}
        var i = n.prototype,
            a = e.EventEmitter;

        function f(k, I) {
            for (var D = k.length; D--;)
                if (k[D].listener === I) return D;
            return -1
        }

        function m(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(I) {
            var D = this._getEvents(),
                M, Y;
            if (I instanceof RegExp) {
                M = {};
                for (Y in D) D.hasOwnProperty(Y) && I.test(Y) && (M[Y] = D[Y])
            } else M = D[I] || (D[I] = []);
            return M
        }, i.flattenListeners = function(I) {
            var D = [],
                M;
            for (M = 0; M < I.length; M += 1) D.push(I[M].listener);
            return D
        }, i.getListenersAsObject = function(I) {
            var D = this.getListeners(I),
                M;
            return D instanceof Array && (M = {}, M[I] = D), M || D
        };

        function _(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? _(k.listener) : !1
        }
        i.addListener = function(I, D) {
            if (!_(D)) throw new TypeError("listener must be a function");
            var M = this.getListenersAsObject(I),
                Y = typeof D == "object",
                ne;
            for (ne in M) M.hasOwnProperty(ne) && f(M[ne], D) === -1 && M[ne].push(Y ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = m("addListener"), i.addOnceListener = function(I, D) {
            return this.addListener(I, {
                listener: D,
                once: !0
            })
        }, i.once = m("addOnceListener"), i.defineEvent = function(I) {
            return this.getListeners(I), this
        }, i.defineEvents = function(I) {
            for (var D = 0; D < I.length; D += 1) this.defineEvent(I[D]);
            return this
        }, i.removeListener = function(I, D) {
            var M = this.getListenersAsObject(I),
                Y, ne;
            for (ne in M) M.hasOwnProperty(ne) && (Y = f(M[ne], D), Y !== -1 && M[ne].splice(Y, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(I, D) {
            return this.manipulateListeners(!1, I, D)
        }, i.removeListeners = function(I, D) {
            return this.manipulateListeners(!0, I, D)
        }, i.manipulateListeners = function(I, D, M) {
            var Y, ne, K = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (Y in D) D.hasOwnProperty(Y) && (ne = D[Y]) && (typeof ne == "function" ? K.call(this, Y, ne) : re.call(this, Y, ne));
            else
                for (Y = M.length; Y--;) K.call(this, D, M[Y]);
            return this
        }, i.removeEvent = function(I) {
            var D = typeof I,
                M = this._getEvents(),
                Y;
            if (D === "string") delete M[I];
            else if (I instanceof RegExp)
                for (Y in M) M.hasOwnProperty(Y) && I.test(Y) && delete M[Y];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(I, D) {
            var M = this.getListenersAsObject(I),
                Y, ne, K, re, v;
            for (re in M)
                if (M.hasOwnProperty(re))
                    for (Y = M[re].slice(0), K = 0; K < Y.length; K++) ne = Y[K], ne.once === !0 && this.removeListener(I, ne.listener), v = ne.listener.apply(this, D || []), v === this._getOnceReturnValue() && this.removeListener(I, ne.listener);
            return this
        }, i.trigger = m("emitEvent"), i.emit = function(I) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(I, D)
        }, i.setOnceReturnValue = function(I) {
            return this._onceReturnValue = I, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(dh);
const Vx = dh.exports;
class Bx extends Vx {
    constructor(n, i) {
        super();
        st(this, "wsClient");
        st(this, "name");
        st(this, "id");
        st(this, "userId");
        st(this, "uuid");
        st(this, "joinAs", "player");
        st(this, "room");
        st(this, "roles", {});
        st(this, "code", null);
        st(this, "host");
        st(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        st(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(a => {
                const f = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (f instanceof Ri.TextEntity && (i.room = f.toBlob()), f instanceof Ri.ObjectEntity && (i.room = f.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (f instanceof Ri.TextEntity && (i.player = f.toBlob()), f instanceof Ri.ObjectEntity && (i.player = f.val)) : a === "audiencePlayer" && (f instanceof Ri.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Ri.ObjectEntity && (i.audiencePlayer = f.val))
            }), i
        });
        this.wsClient = n, this.name = n.name, this.userId = n.userId, this.uuid = n.userId, this.joinAs = n.role, this.room = i.room, n.on("object", this.onObject.bind(this)), n.on("room/exit", this.onRoomExit.bind(this)), n.on("socketClose", this.onSocketClose.bind(this)), n.on("connection", this.onConnection.bind(this)), n.on("text", this.onText.bind(this)), this.onPlayerWelcome(i.welcome)
    }
    get entities() {
        return this.wsClient ? this.wsClient.entities : {
            none: !0
        }
    }
    get isReady() {
        var n;
        return ((n = this.wsClient) == null ? void 0 : n.conn.readyState) === WebSocket.OPEN
    }
    isRole(n) {
        return Object.keys(this.roles).includes(n)
    }
    disconnect() {
        !this.wsClient || (this.wsClient.disconnect(), this.wsClient = null)
    }
    onText(n) {
        const i = n.key,
            a = n.text;
        let f = n.text;
        try {
            f = JSON.parse(f)
        } catch {
            nc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const m = f;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ti.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
    }
    onRoomExit(n) {
        this.emit("client:disconnected", n), this.disconnect()
    }
    onConnection(n) {
        this.emit("client:connection", n)
    }
    async send(n, i) {
        var a, f;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const m = (f = (a = this.host) == null ? void 0 : a.id) != null ? f : "1";
                await this.wsClient.mail(m, i)
            } else await this.wsClient.send(n, i)
        } catch (m) {
            console.error(m)
        }
    }
    sessionSend(n, i, a) {
        !this.isReady || (n === "vote" && this.incrementCountGroupCounter(i, `${a.vote}`), n === "comment" && this.pushTextRing(i, `${a.comment}`))
    }
    async updateText(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateText(n, i)
        } catch (a) {
            throw console.warn("Text update rejected.", a), a
        }
    }
    async updateObject(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateObject(n, i)
        } catch (a) {
            throw console.warn("Object update rejected.", a), a
        }
    }
    async incrementCountGroupCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementCountGroupCounter(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
    async incrementGCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementGCounter(n, i)
        } catch (a) {
            console.error(a)
        }
    }
    async pushTextRing(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.pushTextRing(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
}
const $x = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(fe)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        a = /chrome/i.test(n),
        f = /android/i.test(n);
    t.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function(m, _) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof m == "number" ? (_ = typeof _ == "number" ? _ : m, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(m, _) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", _), k.moveStart("character", m), k.select())
            })) : (this[0].setSelectionRange ? (m = this[0].selectionStart, _ = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), m = 0 - k.duplicate().moveStart("character", -1e5), _ = m + k.text.length), {
                begin: m,
                end: _
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(m, _) {
            var k, I, D, M, Y, ne, K, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), I = t.mask.definitions, D = [], M = K = m.length, Y = null, t.each(m.split(""), function(N, q) {
                q == "?" ? (K--, M = N) : I[q] ? (D.push(new RegExp(I[q])), Y === null && (Y = D.length - 1), M > N && (ne = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function N() {
                    if (_.completed) {
                        for (var we = Y; ne >= we; we++)
                            if (D[we] && oe[we] === q(we)) return;
                        _.completed.call(G)
                    }
                }

                function q(we) {
                    return _.placeholder.charAt(we < _.placeholder.length ? we : 0)
                }

                function ae(we) {
                    for (; ++we < K && !D[we];);
                    return we
                }

                function se(we) {
                    for (; --we >= 0 && !D[we];);
                    return we
                }

                function ye(we, ue) {
                    var Se, Te;
                    if (!(0 > we)) {
                        for (Se = we, Te = ae(ue); K > Se; Se++)
                            if (D[Se]) {
                                if (!(K > Te && D[Se].test(oe[Te]))) break;
                                oe[Se] = oe[Te], oe[Te] = q(Te), Te = ae(Te)
                            } J(), G.caret(Math.max(Y, we))
                    }
                }

                function d(we) {
                    var ue, Se, Te, $e;
                    for (ue = we, Se = q(we); K > ue; ue++)
                        if (D[ue]) {
                            if (Te = ae(ue), $e = oe[ue], oe[ue] = Se, !(K > Te && D[Te].test($e))) break;
                            Se = $e
                        }
                }

                function _e() {
                    var we = G.val(),
                        ue = G.caret();
                    if (re && re.length && re.length > we.length) {
                        for (Fe(!0); ue.begin > 0 && !D[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < Y && !D[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    } else {
                        for (Fe(!0); ue.begin < K && !D[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    }
                    N()
                }

                function Oe() {
                    Fe(), G.val() != be && G.change()
                }

                function Pe(we) {
                    if (!G.prop("readonly")) {
                        var ue, Se, Te, $e = we.which || we.keyCode;
                        re = G.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = G.caret(), Se = ue.begin, Te = ue.end, Te - Se === 0 && (Se = $e !== 46 ? se(Se) : Te = ae(Se - 1), Te = $e === 46 ? ae(Te) : Te), Be(Se, Te), ye(Se, Te - 1), we.preventDefault()) : $e === 13 ? Oe.call(this, we) : $e === 27 && (G.val(be), G.caret(0, Fe()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!G.prop("readonly")) {
                        var ue, Se, Te, $e = we.which || we.keyCode,
                            Ke = G.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), ue = ae(Ke.begin - 1), K > ue && (Se = String.fromCharCode($e), D[ue].test(Se))) {
                                if (d(ue), oe[ue] = Se, J(), Te = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, G, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else G.caret(Te);
                                Ke.begin <= ne && N()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function Be(we, ue) {
                    var Se;
                    for (Se = we; ue > Se && K > Se; Se++) D[Se] && (oe[Se] = q(Se))
                }

                function J() {
                    G.val(oe.join(""))
                }

                function Fe(we) {
                    var ue, Se, Te, $e = G.val(),
                        Ke = -1;
                    for (ue = 0, Te = 0; K > ue; ue++)
                        if (D[ue]) {
                            for (oe[ue] = q(ue); Te++ < $e.length;)
                                if (Se = $e.charAt(Te - 1), D[ue].test(Se)) {
                                    oe[ue] = Se, Ke = ue;
                                    break
                                } if (Te > $e.length) {
                                Be(ue + 1, K);
                                break
                            }
                        } else oe[ue] === $e.charAt(Te) && Te++, M > ue && (Ke = ue);
                    return we ? J() : M > Ke + 1 ? _.autoclear || oe.join("") === Ae ? (G.val() && G.val(""), Be(0, K)) : J() : (J(), G.val(G.val().substring(0, Ke + 1))), M ? ue : Y
                }
                var G = t(this),
                    oe = t.map(m.split(""), function(we, ue) {
                        return we != "?" ? I[we] ? q(ue) : we : void 0
                    }),
                    Ae = oe.join(""),
                    be = G.val();
                G.data(t.mask.dataName, function() {
                    return t.map(oe, function(we, ue) {
                        return D[ue] && we != q(ue) ? we : null
                    }).join("")
                }), G.one("unmask", function() {
                    G.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!G.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        be = G.val(), we = Fe(), e = setTimeout(function() {
                            G.get(0) === document.activeElement && (J(), we == m.replace("?", "").length ? G.caret(0, we) : G.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    G.prop("readonly") || setTimeout(function() {
                        var we = Fe(!0);
                        G.caret(we), N()
                    }, 0)
                }), a && f && G.off("input.mask").on("input.mask", _e), Fe()
            })
        }
    })
});
window.$ = fe;
window.jQuery = fe;
const jx = Et.View.extend({
        className: "app-root",
        template: at.template($x),
        regions: {
            content: "#content-region",
            dialog: "#dialog-region",
            debug: "#debug-region"
        },
        showView(t, e = {}) {
            const n = new t(e);
            this.showChildView("content", n)
        }
    }),
    Fx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ri.WSClient(n), e.connect()),
            mount: n => {
                const i = new Bx(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new jx;
                        this.showView(f), f.showView(t.MainView, {
                            appId: n.room.appId,
                            appTag: n.room.appTag,
                            replayer: n.replayer,
                            client: i
                        })
                    }
                });
                return a.start(), () => {
                    a.destroy(), a = null
                }
            },
            info: n => ({
                branch: n.branch,
                tag: n.app,
                type: n.type,
                version: n.version,
                wrapper: "marionette"
            })
        })
    },
    wc = function(e, n, i, a, f) {
        this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.canvas = e, this.context = n, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = i, this.heightDiff = a, this.strokestyle = f, typeof this.canvas.style.msTouchAction < "u" && (this.canvas.style.msTouchAction = "none");
        const m = this,
            _ = function() {
                let M = window.innerWidth - m.widthDiff,
                    Y = window.innerHeight - m.heightDiff;
                Y < 25 && (Y = 25, M = Y * (window.innerWidth / window.innerHeight));
                const ne = M / Y,
                    K = m.canvas.width / m.canvas.height;
                K < ne ? (m.canvas.style.height = `${Y}px`, m.canvas.style.width = `${Y*K}px`) : (m.canvas.style.width = `${M}px`, m.canvas.style.height = `${M*(1/K)}px`), window.scrollTo(0, 1)
            };
        window.onresize = _;
        const k = function(M) {
                if (M.type === "touchmove") M.preventDefault();
                else if (M.type === "touchend") {
                    m.isDrawing && M.preventDefault(), m[M.type]();
                    return
                }
                const Y = m.canvas.getBoundingClientRect(),
                    ne = {
                        x: M.targetTouches[0].pageX - Y.left,
                        y: M.targetTouches[0].pageY - Y.top
                    };
                ne.x *= m.canvas.width / parseInt(m.canvas.style.width, 10), ne.y *= m.canvas.height / parseInt(m.canvas.style.height, 10), m[M.type](ne)
            },
            I = function(M) {
                if (M.type === "mousemove") M.preventDefault();
                else if (M.type === "mouseup") {
                    m[M.type]();
                    return
                }
                const Y = m.canvas.getBoundingClientRect(),
                    ne = {
                        x: M.clientX - Y.left,
                        y: M.clientY - Y.top
                    };
                ne.x *= m.canvas.width / parseInt(m.canvas.style.width, 10), ne.y *= m.canvas.height / parseInt(m.canvas.style.height, 10), m[M.type](ne)
            };
        this.canvas.addEventListener("touchstart", k, !1), this.canvas.addEventListener("touchmove", k, !1), document.addEventListener("touchend", k, !1), this.canvas.addEventListener("mousedown", I, !1), this.canvas.addEventListener("mousemove", I, !1), document.addEventListener("mouseup", I, !1), this.getBase64Image = function() {
            let M = this.canvas.toDataURL("image/png");
            return M = M.replace("data:image/png;base64,", ""), M
        }, this.start = function(M) {
            !m.isEnabled || (m.context.strokeStyle = this.strokestyle, m.context.lineCap = "round", m.context.lineJoin = "round", m.context.lineWidth = 6, m.context.beginPath(), m.context.arc(M.x, M.y, 1, 0, 2 * Math.PI, !0), m.context.stroke(), m.context.moveTo(M.x, M.y), m.isDrawing = !0, m.isClean = !1)
        }, this.move = function(M) {
            m.isDrawing && (m.context.lineTo(M.x, M.y), m.context.stroke())
        }, this.end = function() {
            m.isDrawing && (m.isDrawing = !1)
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, _()
    },
    zx = `<div id="page-drawful" class="page white drawful">\r
	<div id="player">\r
		<span class="drawful-text"><%=username%></span>\r
	</div>\r
\r
	<div id="drawful-preload" class="drawful-preload"></div>\r
\r
    <div id="game" class="game pt-pageholder">    \r
		<div class="pt-page-off state-lobby drawful-page">\r
			<div class="container">\r
				<br /><span id="drawful-lobby-text" class='drawful-text'></span><br />\r
				<form class="pure-form">					\r
					<button type="button" id="drawful-startgame" class="button-drawful button-xlarge pure-button pure-input-1">everybody's in</button>\r
					<button type="button" id="drawful-stopcountdown" class="button-drawful button-xlarge pure-button pure-input-1">cancel</button>\r
					<button type="button" id="drawful-sameplayers" class="button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">same players</button>\r
					<button type="button" id="drawful-newplayers" class="button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">new players</button>	\r
				</form>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-nothing drawful-page">\r
			<div class="logo-image" style="width:100%;">\r
            	<img class="pure-img" style="margin-left:auto; margin-right:auto;" src='main/pp1/drawful/drawful/logo.png'>\r
            </div>\r
		</div>\r
	\r
		<div class="pt-page-off state-round drawful-page">\r
			<div class="container">\r
				<div class="round-main"><br /><br /><span class='drawful-text round-text'></span><br /></div>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-drawing-sent drawful-page">\r
			<div class="container">\r
				<br /><span id="drawful-drawing-received" class='drawful-text'></span><br />\r
				<span class='drawful-text'>thanks for your drawing</span><br />\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-drawing-done drawful-page">\r
			<div class="container">\r
				<br /><span class='drawful-text'>drawing time is over!</span><br />\r
			</div>\r
		</div>		\r
\r
		<div class="pt-page-off state-enterlie drawful-page">\r
			<div class="container">\r
				\r
				<br /><span class="drawful-text  author-text"></span><br />\r
\r
				<div id="drawful-submit-alert" class="alert alert-info">Alert message goes here</div>\r
				<form class="pure-form" id="drawful-enterlie-field">\r
					<div class="pure-u-1">\r
						<input id="drawful-lie-input" name="drawful-lie" class="pure-input-1 jbg-input" type="text" maxlength="45" placeholder="enter a title" autocapitalize="off" autocorrect="off" autocomplete="off">\r
					</div>\r
					<div class="pure-u-1 right">\r
						<button type="submit" id="drawful-submitlie" class="button-drawful button-xlarge pure-button right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button>\r
						<div id="drawful-submitlie-loading" class="button-drawful-loading right" style="display:none; width: 110px; height: 48px; margin-top:10px;" ></div>\r
					</div>\r
				</form>\r
			</div>\r
		</div>	\r
\r
		<div class="pt-page-off state-chooselie drawful-page">\r
			<div class="container">\r
				<br /><span id="chooselie-text" class='drawful-text'></span><br />\r
\r
				<form id="drawful-chooselie" class="pure-form">\r
				</form>						\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-chooselikes drawful-page">\r
			<div class="container">\r
				<br /><span id="chooselikes-choice" class='drawful-text'></span><br />\r
				<span id="chooselikes-text" class='drawful-text'></span><br />\r
\r
				<form id="drawful-chooselikes" class="pure-form">\r
				</form>							\r
			</div>\r
		</div>		\r
\r
		<div class="pt-page-off state-liereceived drawful-page">\r
			<div class="container">\r
				<br /><span class='drawful-text'>title entered!<br />waiting for other players.</span><br />\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-lyingdone drawful-page">\r
			<div class="container">\r
				<br /><span class='drawful-text'>done!</span><br />\r
			</div>\r
		</div>		\r
\r
		<div class="pt-page-off state-notchoosing drawful-page">\r
			<div class="container">\r
				<br /><span class='drawful-text'></span><br />\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-draw drawful-page">\r
			<!-- <div class="container"> -->\r
				<span id="drawful-prompt" class='prompt drawful-text'>please draw:</span><br />\r
				<span id="drawful-instructions" class='instructions drawful-text'>a picture of yourself!</span><br />\r
\r
				<canvas class="sketchpad" width='240' height='300' style='background-color:white;'>\r
					Sorry, your browser is not supported.\r
				</canvas>\r
				<form class="pure-form container">\r
					<button type="submit" id="drawful-submitdrawing" class="submit-drawing button-drawful button-large pure-button pure-input-1" style="margin-top: 0px;"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button>\r
					<div id="drawful-submitdrawing-loading" style="display:none;" class="button-drawful-loading"></div>\r
				</form>				\r
			<!-- </div> -->\r
		</div>			\r
	</div>\r
</div>\r
`;
const Hx = lc.extend({
    template: at.template(zx),
    lacksAudience: !0,
    authorMessages: ["you drew this. think about what you've done.", "you drew this. relax.", "you drew this. wait for everyone to figure out what you did.", "you drew this. there's no taking that back.", "you drew this. take a breather.", "you drew this. you are all-powerful.", "you drew this. how do you feel about it?", "you drew this. this is your fault.", "you drew this. it's... good?", "you drew this. all hail you!", "you drew this. let's see what happens."],
    events: {
        "click #drawful-startgame": "startGame",
        "click #drawful-stopcountdown": "stopCountdown",
        "click #drawful-sameplayers": "newGameSamePlayers",
        "click #drawful-newplayers": "newGameNewPlayers",
        "click #drawful-submitdrawing": "submitDrawing",
        "click #drawful-submitlie": "submitLie",
        "click .drawful-suggestion-button": "chooseSuggestion",
        "click .drawful-lie-button": "chooseLie",
        "click .drawful-like-button": "toggleLike"
    },
    initialize(t) {
        lc.prototype.initialize.apply(this, [t]), this.currentCanvas = void 0
    },
    async update() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = t ? t.state : "",
            i = e ? e.state : "";
        let a;
        if (t !== void 0 && t.playerColor !== void 0 && (fe("#player").css("background-color", t.playerColor), fe("#drawful-instructions").css("color", t.playerColor)), n === "RoomFull") {
            kt.show(Error("The room is full"), {
                willClose: () => {
                    window.location.reload(!0)
                }
            }), this.onResize();
            return
        }
        if (n === "GameLocked") {
            kt.show(Error("Game is in progress. Please wait for a new game to start."), {
                willClose: () => {
                    window.location.reload(!0)
                }
            }), this.onResize();
            return
        }
        if (t && t.hasPicture === !1) {
            if (this.joiningInterfaceIsUp) {
                this.onResize();
                return
            }
            this.enableLoadingButton("#drawful-submitdrawing", !0), this.showScreen(".state-draw"), fe(".drawful .state-draw .instructions").html("a picture of yourself!");
            const f = this.$(".drawful .sketchpad")[0],
                m = f.getContext("2d"),
                _ = fe("#player").outerHeight(!0) + fe("#drawful-instructions").outerHeight(!0) + fe("#drawful-prompt").outerHeight(!0) + fe("#drawful-submitdrawing").outerHeight(!0) + 10;
            this.currentCanvas = new wc(f, m, 30, _, t.playerColor), this.joiningInterfaceIsUp = !0, this.onResize();
            return
        }
        if (this.joiningInterfaceIsUp = !1, i && i === "Lobby" && n === i) {
            this.currentCanvas = void 0, this.hideLobbyButtons();
            const f = e.lobbyState;
            f === "WaitingForMore" ? fe("#drawful-lobby-text").html("waiting for all players to join") : f === "CanStart" ? (fe("#drawful-lobby-text").html("press this button when everybody has joined"), fe("#drawful-startgame").show()) : f === "Countdown" ? (fe("#drawful-lobby-text").html("press this button to cancel game start"), fe("#drawful-stopcountdown").show()) : f === "PostGame" && (fe("#drawful-lobby-text").html("what do you want to do?"), fe(".drawful-endbuttons").show()), this.showScreen(".state-lobby")
        } else if (i === "Gameplay_Logo") this.showScreen(".state-nothing");
        else if (i === "Gameplay_Round") fe(".round-text").html(`ROUND ${e.round}`), this.showScreen(".state-round");
        else if (i === "Gameplay_DrawingTime" && n === "Gameplay_DrawingTime")
            if (t.receivedBitmap) fe("#drawful-drawing-received").html(Ut.safeText(t.prompt)), this.showScreen(".state-drawing-sent");
            else {
                this.enableLoadingButton("#drawful-submitdrawing", !0), this.showScreen(".state-draw"), fe(".drawful .state-draw .instructions").html(Ut.safeText(t.prompt));
                const f = this.$(".drawful .sketchpad")[0],
                    m = f.getContext("2d"),
                    _ = fe("#player").outerHeight(!0) + fe("#drawful-instructions").outerHeight(!0) + fe("#drawful-prompt").outerHeight(!0) + fe("#drawful-submitdrawing").outerHeight(!0) + 10;
                this.currentCanvas = new wc(f, m, 30, _, t.playerColor)
            }
        else if (i === "Gameplay_DrawingDone" && n === "Gameplay_DrawingDone") this.showScreen(".state-drawing-done"), this.currentCanvas = void 0;
        else if (i === "Gameplay_EnterLie" && n === "Gameplay_EnterLie") {
            if (this.activeScreen !== ".state-enterlie" && (t.isAuthor ? (fe("#drawful-lie-input").hide(), fe("#drawful-enterlie-field").hide(), fe("#drawful-submit-alert").hide(), fe("#drawful-submitlie").hide(), fe(".state-enterlie .author-text").html(this.authorMessages[Math.floor(Math.random() * this.authorMessages.length)])) : (fe(".state-enterlie .author-text").html(""), fe("#drawful-lie-input").val(""), fe("#drawful-lie-input").show(), fe("#drawful-enterlie-field").show(), fe("#drawful-submitlie").show(), fe("#drawful-submit-alert").hide())), t.showError) {
                const f = fe("#drawful-submit-alert");
                fe("#drawful-submit-alert").html("you entered the correct title! enter a fake one!"), f.addClass("alert-info"), f.removeClass("alert-danger"), f.show()
            }
            this.enableLoadingButton("#drawful-submitlie", !0), this.showScreen(".state-enterlie")
        } else if (n === "Gameplay_LieReceived") this.showScreen(".state-liereceived");
        else if (i === "Gameplay_LyingDone") this.showScreen(".state-lyingdone");
        else if (i === "Gameplay_ChooseLie" && n === "Gameplay_ChooseLie")
            if (t.choosingDone || t.chosen != null || t.isAuthor) {
                t.isAuthor ? fe("#chooselikes-choice").html("") : fe("#chooselikes-choice").html(t.chosen ? `you chose: ${t.chosen}` : "you didn't make a choice"), fe("#chooselikes-text").html("award bonus likes");
                const m = "pure-input-1 drawful-like-button button-large pure-button";
                let _ = "";
                for (a = 0; a < t.choices.length; a++) {
                    const k = t.likes.indexOf(t.choices[a]) >= 0,
                        I = k ? "button-drawful-liked" : "button-drawful-like",
                        D = k ? "fa-check-square-o" : "fa-square-o";
                    _ += `<button type="button" data-num="${a}" class="${m} ${I}">`, _ += `<div class="like-text">${Ut.safeText(t.choices[a])}</div>`, _ += `<div class="like-checkbox"><i class="fa ${D} fa-lg"></i></div>`, _ += "</button>"
                }
                fe("#drawful-chooselikes").html(_), this.showScreen(".state-chooselikes")
            } else {
                fe("#chooselie-text").html("What's the real title?");
                const m = "pure-input-1 drawful-lie-button button-large pure-button button-drawful";
                let _ = "";
                for (a = 0; a < t.choices.length; a++) _ += `<button type="button" data-num="${a}" class="${m}">`, _ += Ut.safeText(t.choices[a]), _ += "</button>";
                fe("#drawful-chooselie").html(_), this.showScreen(".state-chooselie")
            } this.onResize()
    },
    hideLobbyButtons() {
        fe("#drawful-startgame").hide(), fe("#drawful-stopcountdown").hide(), fe(".drawful-endbuttons").hide()
    },
    startGame() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0
        }), !1
    },
    stopCountdown() {
        return this.client.send("SendMessageToRoomOwner", {
            cancelStartGame: !0
        }), !1
    },
    enableLoadingButton(t, e) {
        e ? (fe(t).show(), fe(`${t}-loading`).hide()) : (fe(t).hide(), fe(`${t}-loading`).show())
    },
    submitDrawing() {
        if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
        this.enableLoadingButton("#drawful-submitdrawing", !1);
        const t = this.joiningInterfaceIsUp ? {
            setPlayerPicture: !0,
            picture: this.currentCanvas.getBase64Image()
        } : {
            drawing: this.currentCanvas.getBase64Image()
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitLie() {
        let t = this.sanitize(fe("#drawful-lie-input").val()).toUpperCase();
        if (t = t.replace(/\s\s+/g, " ").trim(), t.length === 0) {
            const e = fe("#drawful-submit-alert");
            return fe("#drawful-submit-alert").html("you can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
        }
        return this.enableLoadingButton("#drawful-submitlie", !1), this.client.send("SendMessageToRoomOwner", {
            lieEntered: t,
            usedSuggestion: !1
        }), !1
    },
    chooseLie(t) {
        const e = fe(t.target).data("num"),
            n = this.model.get("player").choices[e];
        return this.client.send("SendMessageToRoomOwner", {
            choice: n
        }), !1
    },
    toggleLike(t) {
        const e = fe(t.currentTarget).data("num"),
            n = this.model.get("player").likes.indexOf(this.model.get("player").choices[e]) >= 0;
        if (!n) {
            fe(t.currentTarget).removeClass(n ? "button-drawful-liked" : "button-drawful-like"), fe(t.currentTarget).addClass(n ? "button-drawful-like" : "button-drawful-liked"), fe(t.currentTarget).find(".like-checkbox").html(`<i class="fa ${n?"fa-square-o":"fa-check-square-o"} fa-lg"></i>`);
            const i = this.model.get("player").choices[e];
            this.client.send("SendMessageToRoomOwner", {
                like: i
            })
        }
        return !1
    },
    newGameSamePlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0,
            decision: "PostGame_Continue"
        }), !1
    },
    newGameNewPlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0,
            decision: "PostGame_NewGame"
        }), !1
    },
    sanitize(t) {
        return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "\u2019").trim()
    }
});
Fx({
    MainView: Hx
});
//# sourceMappingURL=7f1f5688.js.map