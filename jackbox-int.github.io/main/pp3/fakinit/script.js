var dh = Object.defineProperty;
var fh = (t, e, n) => e in t ? dh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var ot = (t, e, n) => (fh(t, typeof e != "symbol" ? e + "" : e, n), n);
const ph = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const f of a)
            if (f.type === "childList")
                for (const v of f.addedNodes) v.tagName === "LINK" && v.rel === "modulepreload" && i(v)
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
ph();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function gh(t) {
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
            v = Function.prototype,
            _ = a.push,
            S = a.slice,
            I = f.toString,
            D = f.hasOwnProperty,
            $ = Array.isArray,
            J = Object.keys,
            ie = v.bind,
            Y = Object.create,
            re = function() {},
            m = function(l) {
                if (l instanceof m) return l;
                if (!(this instanceof m)) return new m(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
        var P = function(l, g, k) {
                if (g === void 0) return l;
                switch (k == null ? 3 : k) {
                    case 1:
                        return function(O) {
                            return l.call(g, O)
                        };
                    case 2:
                        return function(O, L) {
                            return l.call(g, O, L)
                        };
                    case 3:
                        return function(O, L, V) {
                            return l.call(g, O, L, V)
                        };
                    case 4:
                        return function(O, L, V, te) {
                            return l.call(g, O, L, V, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            W = function(l, g, k) {
                return l == null ? m.identity : m.isFunction(l) ? P(l, g, k) : m.isObject(l) ? m.matcher(l) : m.property(l)
            };
        m.iteratee = function(l, g) {
            return W(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(k) {
                    var O = arguments.length;
                    if (O < 2 || k == null) return k;
                    for (var L = 1; L < O; L++)
                        for (var V = arguments[L], te = l(V), Se = te.length, de = 0; de < Se; de++) {
                            var De = te[de];
                            (!g || k[De] === void 0) && (k[De] = V[De])
                        }
                    return k
                }
            },
            se = function(l) {
                if (!m.isObject(l)) return {};
                if (Y) return Y(l);
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
            ke = ye("length"),
            Oe = function(l) {
                var g = ke(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        m.each = m.forEach = function(l, g, k) {
            g = P(g, k);
            var O, L;
            if (Oe(l))
                for (O = 0, L = l.length; O < L; O++) g(l[O], O, l);
            else {
                var V = m.keys(l);
                for (O = 0, L = V.length; O < L; O++) g(l[V[O]], V[O], l)
            }
            return l
        }, m.map = m.collect = function(l, g, k) {
            g = W(g, k);
            for (var O = !Oe(l) && m.keys(l), L = (O || l).length, V = Array(L), te = 0; te < L; te++) {
                var Se = O ? O[te] : te;
                V[te] = g(l[Se], Se, l)
            }
            return V
        };

        function Pe(l) {
            function g(k, O, L, V, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var de = V ? V[te] : te;
                    L = O(L, k[de], de, k)
                }
                return L
            }
            return function(k, O, L, V) {
                O = P(O, V, 4);
                var te = !Oe(k) && m.keys(k),
                    Se = (te || k).length,
                    de = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (L = k[te ? te[de] : de], de += l), g(k, O, L, te, de, Se)
            }
        }
        m.reduce = m.foldl = m.inject = Pe(1), m.reduceRight = m.foldr = Pe(-1), m.find = m.detect = function(l, g, k) {
            var O;
            if (Oe(l) ? O = m.findIndex(l, g, k) : O = m.findKey(l, g, k), O !== void 0 && O !== -1) return l[O]
        }, m.filter = m.select = function(l, g, k) {
            var O = [];
            return g = W(g, k), m.each(l, function(L, V, te) {
                g(L, V, te) && O.push(L)
            }), O
        }, m.reject = function(l, g, k) {
            return m.filter(l, m.negate(W(g)), k)
        }, m.every = m.all = function(l, g, k) {
            g = W(g, k);
            for (var O = !Oe(l) && m.keys(l), L = (O || l).length, V = 0; V < L; V++) {
                var te = O ? O[V] : V;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, k) {
            g = W(g, k);
            for (var O = !Oe(l) && m.keys(l), L = (O || l).length, V = 0; V < L; V++) {
                var te = O ? O[V] : V;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, k, O) {
            return Oe(l) || (l = m.values(l)), (typeof k != "number" || O) && (k = 0), m.indexOf(l, g, k) >= 0
        }, m.invoke = function(l, g) {
            var k = S.call(arguments, 2),
                O = m.isFunction(g);
            return m.map(l, function(L) {
                var V = O ? g : L[g];
                return V == null ? V : V.apply(L, k)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, k) {
            var O = -1 / 0,
                L = -1 / 0,
                V, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : m.values(l);
                for (var Se = 0, de = l.length; Se < de; Se++) V = l[Se], V > O && (O = V)
            } else g = W(g, k), m.each(l, function(De, Me, it) {
                te = g(De, Me, it), (te > L || te === -1 / 0 && O === -1 / 0) && (O = De, L = te)
            });
            return O
        }, m.min = function(l, g, k) {
            var O = 1 / 0,
                L = 1 / 0,
                V, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : m.values(l);
                for (var Se = 0, de = l.length; Se < de; Se++) V = l[Se], V < O && (O = V)
            } else g = W(g, k), m.each(l, function(De, Me, it) {
                te = g(De, Me, it), (te < L || te === 1 / 0 && O === 1 / 0) && (O = De, L = te)
            });
            return O
        }, m.shuffle = function(l) {
            for (var g = Oe(l) ? l : m.values(l), k = g.length, O = Array(k), L = 0, V; L < k; L++) V = m.random(0, L), V !== L && (O[L] = O[V]), O[V] = g[L];
            return O
        }, m.sample = function(l, g, k) {
            return g == null || k ? (Oe(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, k) {
            return g = W(g, k), m.pluck(m.map(l, function(O, L, V) {
                return {
                    value: O,
                    index: L,
                    criteria: g(O, L, V)
                }
            }).sort(function(O, L) {
                var V = O.criteria,
                    te = L.criteria;
                if (V !== te) {
                    if (V > te || V === void 0) return 1;
                    if (V < te || te === void 0) return -1
                }
                return O.index - L.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, k, O) {
                var L = {};
                return k = W(k, O), m.each(g, function(V, te) {
                    var Se = k(V, te, g);
                    l(L, V, Se)
                }), L
            }
        };
        m.groupBy = lt(function(l, g, k) {
            m.has(l, k) ? l[k].push(g) : l[k] = [g]
        }), m.indexBy = lt(function(l, g, k) {
            l[k] = g
        }), m.countBy = lt(function(l, g, k) {
            m.has(l, k) ? l[k]++ : l[k] = 1
        }), m.toArray = function(l) {
            return l ? m.isArray(l) ? S.call(l) : Oe(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, k) {
            g = W(g, k);
            var O = [],
                L = [];
            return m.each(l, function(V, te, Se) {
                (g(V, te, Se) ? O : L).push(V)
            }), [O, L]
        }, m.first = m.head = m.take = function(l, g, k) {
            if (l != null) return g == null || k ? l[0] : m.initial(l, l.length - g)
        }, m.initial = function(l, g, k) {
            return S.call(l, 0, Math.max(0, l.length - (g == null || k ? 1 : g)))
        }, m.last = function(l, g, k) {
            if (l != null) return g == null || k ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
        }, m.rest = m.tail = m.drop = function(l, g, k) {
            return S.call(l, g == null || k ? 1 : g)
        }, m.compact = function(l) {
            return m.filter(l, m.identity)
        };
        var Be = function(l, g, k, O) {
            for (var L = [], V = 0, te = O || 0, Se = ke(l); te < Se; te++) {
                var de = l[te];
                if (Oe(de) && (m.isArray(de) || m.isArguments(de))) {
                    g || (de = Be(de, g, k));
                    var De = 0,
                        Me = de.length;
                    for (L.length += Me; De < Me;) L[V++] = de[De++]
                } else k || (L[V++] = de)
            }
            return L
        };
        m.flatten = function(l, g) {
            return Be(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, S.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, k, O) {
            m.isBoolean(g) || (O = k, k = g, g = !1), k != null && (k = W(k, O));
            for (var L = [], V = [], te = 0, Se = ke(l); te < Se; te++) {
                var de = l[te],
                    De = k ? k(de, te, l) : de;
                g ? ((!te || V !== De) && L.push(de), V = De) : k ? m.contains(V, De) || (V.push(De), L.push(de)) : m.contains(L, de) || L.push(de)
            }
            return L
        }, m.union = function() {
            return m.uniq(Be(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], k = arguments.length, O = 0, L = ke(l); O < L; O++) {
                var V = l[O];
                if (!m.contains(g, V)) {
                    for (var te = 1; te < k && m.contains(arguments[te], V); te++);
                    te === k && g.push(V)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Be(arguments, !0, !0, 1);
            return m.filter(l, function(k) {
                return !m.contains(g, k)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, ke).length || 0, k = Array(g), O = 0; O < g; O++) k[O] = m.pluck(l, O);
            return k
        }, m.object = function(l, g) {
            for (var k = {}, O = 0, L = ke(l); O < L; O++) g ? k[l[O]] = g[O] : k[l[O][0]] = l[O][1];
            return k
        };

        function K(l) {
            return function(g, k, O) {
                k = W(k, O);
                for (var L = ke(g), V = l > 0 ? 0 : L - 1; V >= 0 && V < L; V += l)
                    if (k(g[V], V, g)) return V;
                return -1
            }
        }
        m.findIndex = K(1), m.findLastIndex = K(-1), m.sortedIndex = function(l, g, k, O) {
            k = W(k, O, 1);
            for (var L = k(g), V = 0, te = ke(l); V < te;) {
                var Se = Math.floor((V + te) / 2);
                k(l[Se]) < L ? V = Se + 1 : te = Se
            }
            return V
        };

        function je(l, g, k) {
            return function(O, L, V) {
                var te = 0,
                    Se = ke(O);
                if (typeof V == "number") l > 0 ? te = V >= 0 ? V : Math.max(V + Se, te) : Se = V >= 0 ? Math.min(V + 1, Se) : V + Se + 1;
                else if (k && V && Se) return V = k(O, L), O[V] === L ? V : -1;
                if (L !== L) return V = g(S.call(O, te, Se), m.isNaN), V >= 0 ? V + te : -1;
                for (V = l > 0 ? te : Se - 1; V >= 0 && V < Se; V += l)
                    if (O[V] === L) return V;
                return -1
            }
        }
        m.indexOf = je(1, m.findIndex, m.sortedIndex), m.lastIndexOf = je(-1, m.findLastIndex), m.range = function(l, g, k) {
            g == null && (g = l || 0, l = 0), k = k || 1;
            for (var O = Math.max(Math.ceil((g - l) / k), 0), L = Array(O), V = 0; V < O; V++, l += k) L[V] = l;
            return L
        };
        var U = function(l, g, k, O, L) {
            if (!(O instanceof g)) return l.apply(k, L);
            var V = se(l.prototype),
                te = l.apply(V, L);
            return m.isObject(te) ? te : V
        };
        m.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, S.call(arguments, 1));
            if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var k = S.call(arguments, 2),
                O = function() {
                    return U(l, O, g, this, k.concat(S.call(arguments)))
                };
            return O
        }, m.partial = function(l) {
            var g = S.call(arguments, 1),
                k = function() {
                    for (var O = 0, L = g.length, V = Array(L), te = 0; te < L; te++) V[te] = g[te] === m ? arguments[O++] : g[te];
                    for (; O < arguments.length;) V.push(arguments[O++]);
                    return U(l, k, this, this, V)
                };
            return k
        }, m.bindAll = function(l) {
            var g, k = arguments.length,
                O;
            if (k <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < k; g++) O = arguments[g], l[O] = m.bind(l[O], l);
            return l
        }, m.memoize = function(l, g) {
            var k = function(O) {
                var L = k.cache,
                    V = "" + (g ? g.apply(this, arguments) : O);
                return m.has(L, V) || (L[V] = l.apply(this, arguments)), L[V]
            };
            return k.cache = {}, k
        }, m.delay = function(l, g) {
            var k = S.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, k)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, k) {
            var O, L, V, te = null,
                Se = 0;
            k || (k = {});
            var de = function() {
                Se = k.leading === !1 ? 0 : m.now(), te = null, V = l.apply(O, L), te || (O = L = null)
            };
            return function() {
                var De = m.now();
                !Se && k.leading === !1 && (Se = De);
                var Me = g - (De - Se);
                return O = this, L = arguments, Me <= 0 || Me > g ? (te && (clearTimeout(te), te = null), Se = De, V = l.apply(O, L), te || (O = L = null)) : !te && k.trailing !== !1 && (te = setTimeout(de, Me)), V
            }
        }, m.debounce = function(l, g, k) {
            var O, L, V, te, Se, de = function() {
                var De = m.now() - te;
                De < g && De >= 0 ? O = setTimeout(de, g - De) : (O = null, k || (Se = l.apply(V, L), O || (V = L = null)))
            };
            return function() {
                V = this, L = arguments, te = m.now();
                var De = k && !O;
                return O || (O = setTimeout(de, g)), De && (Se = l.apply(V, L), V = L = null), Se
            }
        }, m.wrap = function(l, g) {
            return m.partial(g, l)
        }, m.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, m.compose = function() {
            var l = arguments,
                g = l.length - 1;
            return function() {
                for (var k = g, O = l[g].apply(this, arguments); k--;) O = l[k].call(this, O);
                return O
            }
        }, m.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, m.before = function(l, g) {
            var k;
            return function() {
                return --l > 0 && (k = g.apply(this, arguments)), l <= 1 && (g = null), k
            }
        }, m.once = m.partial(m.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, g) {
            var k = Ae.length,
                O = l.constructor,
                L = m.isFunction(O) && O.prototype || f,
                V = "constructor";
            for (m.has(l, V) && !m.contains(g, V) && g.push(V); k--;) V = Ae[k], V in l && l[V] !== L[V] && !m.contains(g, V) && g.push(V)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (J) return J(l);
            var g = [];
            for (var k in l) m.has(l, k) && g.push(k);
            return oe && be(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var k in l) g.push(k);
            return oe && be(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), k = g.length, O = Array(k), L = 0; L < k; L++) O[L] = l[g[L]];
            return O
        }, m.mapObject = function(l, g, k) {
            g = W(g, k);
            for (var O = m.keys(l), L = O.length, V = {}, te, Se = 0; Se < L; Se++) te = O[Se], V[te] = g(l[te], te, l);
            return V
        }, m.pairs = function(l) {
            for (var g = m.keys(l), k = g.length, O = Array(k), L = 0; L < k; L++) O[L] = [g[L], l[g[L]]];
            return O
        }, m.invert = function(l) {
            for (var g = {}, k = m.keys(l), O = 0, L = k.length; O < L; O++) g[l[k[O]]] = k[O];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var k in l) m.isFunction(l[k]) && g.push(k);
            return g.sort()
        }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, k) {
            g = W(g, k);
            for (var O = m.keys(l), L, V = 0, te = O.length; V < te; V++)
                if (L = O[V], g(l[L], L, l)) return L
        }, m.pick = function(l, g, k) {
            var O = {},
                L = l,
                V, te;
            if (L == null) return O;
            m.isFunction(g) ? (te = m.allKeys(L), V = P(g, k)) : (te = Be(arguments, !1, !1, 1), V = function(it, Ct, rn) {
                return Ct in rn
            }, L = Object(L));
            for (var Se = 0, de = te.length; Se < de; Se++) {
                var De = te[Se],
                    Me = L[De];
                V(Me, De, L) && (O[De] = Me)
            }
            return O
        }, m.omit = function(l, g, k) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var O = m.map(Be(arguments, !1, !1, 1), String);
                g = function(L, V) {
                    return !m.contains(O, V)
                }
            }
            return m.pick(l, g, k)
        }, m.defaults = ae(m.allKeys, !0), m.create = function(l, g) {
            var k = se(l);
            return g && m.extendOwn(k, g), k
        }, m.clone = function(l) {
            return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
        }, m.tap = function(l, g) {
            return g(l), l
        }, m.isMatch = function(l, g) {
            var k = m.keys(g),
                O = k.length;
            if (l == null) return !O;
            for (var L = Object(l), V = 0; V < O; V++) {
                var te = k[V];
                if (g[te] !== L[te] || !(te in L)) return !1
            }
            return !0
        };
        var we = function(l, g, k, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
            var L = I.call(l);
            if (L !== I.call(g)) return !1;
            switch (L) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var V = L === "[object Array]";
            if (!V) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    Se = g.constructor;
                if (te !== Se && !(m.isFunction(te) && te instanceof te && m.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            k = k || [], O = O || [];
            for (var de = k.length; de--;)
                if (k[de] === l) return O[de] === g;
            if (k.push(l), O.push(g), V) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!we(l[de], g[de], k, O)) return !1
            } else {
                var De = m.keys(l),
                    Me;
                if (de = De.length, m.keys(g).length !== de) return !1;
                for (; de--;)
                    if (Me = De[de], !(m.has(g, Me) && we(l[Me], g[Me], k, O))) return !1
            }
            return k.pop(), O.pop(), !0
        };
        m.isEqual = function(l, g) {
            return we(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
        }, m.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, m.isArray = $ || function(l) {
            return I.call(l) === "[object Array]"
        }, m.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            m["is" + l] = function(g) {
                return I.call(g) === "[object " + l + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function(l) {
            return m.has(l, "callee")
        }), typeof /./ != "function" && typeof Int8Array != "object" && (m.isFunction = function(l) {
            return typeof l == "function" || !1
        }), m.isFinite = function(l) {
            return isFinite(l) && !isNaN(parseFloat(l))
        }, m.isNaN = function(l) {
            return m.isNumber(l) && l !== +l
        }, m.isBoolean = function(l) {
            return l === !0 || l === !1 || I.call(l) === "[object Boolean]"
        }, m.isNull = function(l) {
            return l === null
        }, m.isUndefined = function(l) {
            return l === void 0
        }, m.has = function(l, g) {
            return l != null && D.call(l, g)
        }, m.noConflict = function() {
            return n._ = i, this
        }, m.identity = function(l) {
            return l
        }, m.constant = function(l) {
            return function() {
                return l
            }
        }, m.noop = function() {}, m.property = ye, m.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, m.matcher = m.matches = function(l) {
            return l = m.extendOwn({}, l),
                function(g) {
                    return m.isMatch(g, l)
                }
        }, m.times = function(l, g, k) {
            var O = Array(Math.max(0, l));
            g = P(g, k, 1);
            for (var L = 0; L < l; L++) O[L] = g(L);
            return O
        }, m.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, m.now = Date.now || function() {
            return new Date().getTime()
        };
        var he = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            _e = m.invert(he),
            Te = function(l) {
                var g = function(V) {
                        return l[V]
                    },
                    k = "(?:" + m.keys(l).join("|") + ")",
                    O = RegExp(k),
                    L = RegExp(k, "g");
                return function(V) {
                    return V = V == null ? "" : "" + V, O.test(V) ? V.replace(L, g) : V
                }
            };
        m.escape = Te(he), m.unescape = Te(_e), m.result = function(l, g, k) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = k), m.isFunction(O) ? O.call(l) : O
        };
        var $e = 0;
        m.uniqueId = function(l) {
            var g = ++$e + "";
            return l ? l + g : g
        }, m.templateSettings = {
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
            Ht = function(l) {
                return "\\" + dt[l]
            };
        m.template = function(l, g, k) {
            !g && k && (g = k), g = m.defaults({}, g, m.templateSettings);
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                L = 0,
                V = "__p+='";
            l.replace(O, function(De, Me, it, Ct, rn) {
                return V += l.slice(L, rn).replace(Bt, Ht), L = rn + De.length, Me ? V += `'+
((__t=(` + Me + `))==null?'':_.escape(__t))+
'` : it ? V += `'+
((__t=(` + it + `))==null?'':__t)+
'` : Ct && (V += `';
` + Ct + `
__p+='`), De
            }), V += `';
`, g.variable || (V = `with(obj||{}){
` + V + `}
`), V = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + V + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", V)
            } catch (De) {
                throw De.source = V, De
            }
            var Se = function(De) {
                    return te.call(this, De, m)
                },
                de = g.variable || "obj";
            return Se.source = "function(" + de + `){
` + V + "}", Se
        }, m.chain = function(l) {
            var g = m(l);
            return g._chain = !0, g
        };
        var E = function(l, g) {
            return l._chain ? m(g).chain() : g
        };
        m.mixin = function(l) {
            m.each(m.functions(l), function(g) {
                var k = m[g] = l[g];
                m.prototype[g] = function() {
                    var O = [this._wrapped];
                    return _.apply(O, arguments), E(this, k.apply(m, O))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                var k = this._wrapped;
                return g.apply(k, arguments), (l === "shift" || l === "splice") && k.length === 0 && delete k[0], E(this, k)
            }
        }), m.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(vt)
})(Pi, Pi.exports);
const nt = Pi.exports;
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
            v = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            _ = i.push,
            S = i.indexOf,
            I = {},
            D = I.toString,
            $ = I.hasOwnProperty,
            J = $.toString,
            ie = J.call(Object),
            Y = {},
            re = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            m = function(s) {
                return s != null && s === s.window
            },
            P = e.document,
            W = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function ae(r, s, u) {
            u = u || P;
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in W) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
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
                G = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === G && (T = this, z--); z < G; z++)
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
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = $.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
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
                if (ke(r))
                    for (u = r.length; p < u && s.call(r[p], p, r[p]) !== !1; p++);
                else
                    for (p in r)
                        if (s.call(r[p], p, r[p]) === !1) break;
                return r
            },
            makeArray: function(r, s) {
                var u = s || [];
                return r != null && (ke(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : _.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : S.call(s, r, u)
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
                if (ke(r))
                    for (p = r.length; x < p; x++) w = s(r[x], x, u), w != null && T.push(w);
                else
                    for (x in r) w = s(r[x], x, u), w != null && T.push(w);
                return v(T)
            },
            guid: 1,
            support: Y
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            I["[object " + s + "]"] = s.toLowerCase()
        });

        function ke(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, x, T, z, G, Z, ce, Ce, ne, ue, He, st, Fe, zt, Nt, un, kt = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Yi(),
                ki = Yi(),
                qi = Yi(),
                hn = Yi(),
                Kn = function(R, j) {
                    return R === j && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Mn = an.pop,
                vn = an.push,
                Cn = an.push,
                ks = an.slice,
                Qn = function(R, j) {
                    for (var X = 0, fe = R.length; X < fe; X++)
                        if (R[X] === j) return X;
                    return -1
                },
                jr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                _s = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + _s + ")*)|.*)\\)|)",
                Ss = new RegExp(gt + "+", "g"),
                _i = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                $o = new RegExp(gt + "|>"),
                Fo = new RegExp(zr),
                jo = new RegExp("^" + Zn + "$"),
                Xi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + _s),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + jr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                zo = /HTML$/i,
                Go = /^(?:input|select|textarea|button)$/i,
                Uo = /^h\d$/i,
                Si = /^[^{]+\{\s*\[native \w/,
                Ho = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Gr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(R, j) {
                    var X = "0x" + R.slice(1) - 65536;
                    return j || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Ur = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(R, j) {
                    return j ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                },
                Rs = function() {
                    ne()
                },
                Wo = Zi(function(R) {
                    return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = ks.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(j, X) {
                        vn.apply(j, ks.call(X))
                    } : function(j, X) {
                        for (var fe = j.length, ee = 0; j[fe++] = X[ee++];);
                        j.length = fe - 1
                    }
                }
            }

            function _t(R, j, X, fe) {
                var ee, ve, Ee, Re, Le, ze, Ue, Xe = j && j.ownerDocument,
                    ht = j ? j.nodeType : 9;
                if (X = X || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return X;
                if (!fe && (ne(j), j = j || ue, st)) {
                    if (ht !== 11 && (Le = Ho.exec(R)))
                        if (ee = Le[1]) {
                            if (ht === 9)
                                if (Ee = j.getElementById(ee)) {
                                    if (Ee.id === ee) return X.push(Ee), X
                                } else return X;
                            else if (Xe && (Ee = Xe.getElementById(ee)) && un(j, Ee) && Ee.id === ee) return X.push(Ee), X
                        } else {
                            if (Le[2]) return Cn.apply(X, j.getElementsByTagName(R)), X;
                            if ((ee = Le[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(X, j.getElementsByClassName(ee)), X
                        } if (u.qsa && !hn[R + " "] && (!Fe || !Fe.test(R)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (Ue = R, Xe = j, ht === 1 && ($o.test(R) || As.test(R))) {
                            for (Xe = Gr.test(R) && Hr(j.parentNode) || j, (Xe !== j || !u.scope) && ((Re = j.getAttribute("id")) ? Re = Re.replace(Ur, Os) : j.setAttribute("id", Re = kt)), ze = T(R), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            Ue = ze.join(",")
                        }
                        try {
                            return Cn.apply(X, Xe.querySelectorAll(Ue)), X
                        } catch {
                            hn(R, !0)
                        } finally {
                            Re === kt && j.removeAttribute("id")
                        }
                    }
                }
                return G(R.replace(_i, "$1"), j, X, fe)
            }

            function Yi() {
                var R = [];

                function j(X, fe) {
                    return R.push(X + " ") > p.cacheLength && delete j[R.shift()], j[X + " "] = fe
                }
                return j
            }

            function dn(R) {
                return R[kt] = !0, R
            }

            function yn(R) {
                var j = ue.createElement("fieldset");
                try {
                    return !!R(j)
                } catch {
                    return !1
                } finally {
                    j.parentNode && j.parentNode.removeChild(j), j = null
                }
            }

            function Ki(R, j) {
                for (var X = R.split("|"), fe = X.length; fe--;) p.attrHandle[X[fe]] = j
            }

            function Ji(R, j) {
                var X = j && R,
                    fe = X && R.nodeType === 1 && j.nodeType === 1 && R.sourceIndex - j.sourceIndex;
                if (fe) return fe;
                if (X) {
                    for (; X = X.nextSibling;)
                        if (X === j) return -1
                }
                return R ? 1 : -1
            }

            function qo(R) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return X === "input" && j.type === R
                }
            }

            function Xo(R) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return (X === "input" || X === "button") && j.type === R
                }
            }

            function Is(R) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === R : j.disabled === R : j.isDisabled === R || j.isDisabled !== !R && Wo(j) === R : j.disabled === R : "label" in j ? j.disabled === R : !1
                }
            }

            function An(R) {
                return dn(function(j) {
                    return j = +j, dn(function(X, fe) {
                        for (var ee, ve = R([], X.length, j), Ee = ve.length; Ee--;) X[ee = ve[Ee]] && (X[ee] = !(fe[ee] = X[ee]))
                    })
                })
            }

            function Hr(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            u = _t.support = {}, x = _t.isXML = function(R) {
                var j = R && R.namespaceURI,
                    X = R && (R.ownerDocument || R).documentElement;
                return !zo.test(j || X && X.nodeName || "HTML")
            }, ne = _t.setDocument = function(R) {
                var j, X, fe = R ? R.ownerDocument || R : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, He = ue.documentElement, st = !x(ue), et != ue && (X = ue.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Rs, !1) : X.attachEvent && X.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                    return He.appendChild(ee).appendChild(ue.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ee) {
                    return ee.appendChild(ue.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = Si.test(ue.getElementsByClassName), u.getById = yn(function(ee) {
                    return He.appendChild(ee).id = kt, !ue.getElementsByName || !ue.getElementsByName(kt).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var ve = ee.replace(Tn, xn);
                    return function(Ee) {
                        return Ee.getAttribute("id") === ve
                    }
                }, p.find.ID = function(ee, ve) {
                    if (typeof ve.getElementById < "u" && st) {
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
                    if (typeof ve.getElementById < "u" && st) {
                        var Ee, Re, Le, ze = ve.getElementById(ee);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze];
                            for (Le = ve.getElementsByName(ee), Re = 0; ze = Le[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ee);
                    if (u.qsa) return ve.querySelectorAll(ee)
                } : function(ee, ve) {
                    var Ee, Re = [],
                        Le = 0,
                        ze = ve.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ee = ze[Le++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(ee, ve) {
                    if (typeof ve.getElementsByClassName < "u" && st) return ve.getElementsByClassName(ee)
                }, zt = [], Fe = [], (u.qsa = Si.test(ue.querySelectorAll)) && (yn(function(ee) {
                    var ve;
                    He.appendChild(ee).innerHTML = "<a id='" + kt + "'></a><select id='" + kt + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + jr + ")"), ee.querySelectorAll("[id~=" + kt + "-]").length || Fe.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ee.appendChild(ve), ee.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || Fe.push(":checked"), ee.querySelectorAll("a#" + kt + "+*").length || Fe.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                }), yn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ee.appendChild(ve).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), He.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), Fe.push(",.*:")
                })), (u.matchesSelector = Si.test(Nt = He.matches || He.webkitMatchesSelector || He.mozMatchesSelector || He.oMatchesSelector || He.msMatchesSelector)) && yn(function(ee) {
                    u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = Si.test(He.compareDocumentPosition), un = j || Si.test(He.contains) ? function(ee, ve) {
                    var Ee = ee.nodeType === 9 ? ee.documentElement : ee,
                        Re = ve && ve.parentNode;
                    return ee === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ee.compareDocumentPosition && ee.compareDocumentPosition(Re) & 16))
                } : function(ee, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ee) return !0
                    }
                    return !1
                }, Kn = j ? function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee = !ee.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ee.ownerDocument || ee) == (ve.ownerDocument || ve) ? ee.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ee) === Ee ? ee == ue || ee.ownerDocument == et && un(et, ee) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Le = ee.parentNode,
                        ze = ve.parentNode,
                        Ue = [ee],
                        Xe = [ve];
                    if (!Le || !ze) return ee == ue ? -1 : ve == ue ? 1 : Le ? -1 : ze ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0;
                    if (Le === ze) return Ji(ee, ve);
                    for (Ee = ee; Ee = Ee.parentNode;) Ue.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Xe.unshift(Ee);
                    for (; Ue[Re] === Xe[Re];) Re++;
                    return Re ? Ji(Ue[Re], Xe[Re]) : Ue[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ue
            }, _t.matches = function(R, j) {
                return _t(R, null, null, j)
            }, _t.matchesSelector = function(R, j) {
                if (ne(R), u.matchesSelector && st && !hn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                    var X = Nt.call(R, j);
                    if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                } catch {
                    hn(j, !0)
                }
                return _t(j, ue, null, [R]).length > 0
            }, _t.contains = function(R, j) {
                return (R.ownerDocument || R) != ue && ne(R), un(R, j)
            }, _t.attr = function(R, j) {
                (R.ownerDocument || R) != ue && ne(R);
                var X = p.attrHandle[j.toLowerCase()],
                    fe = X && Jn.call(p.attrHandle, j.toLowerCase()) ? X(R, j, !st) : void 0;
                return fe !== void 0 ? fe : u.attributes || !st ? R.getAttribute(j) : (fe = R.getAttributeNode(j)) && fe.specified ? fe.value : null
            }, _t.escape = function(R) {
                return (R + "").replace(Ur, Os)
            }, _t.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, _t.uniqueSort = function(R) {
                var j, X = [],
                    fe = 0,
                    ee = 0;
                if (Ce = !u.detectDuplicates, ce = !u.sortStable && R.slice(0), R.sort(Kn), Ce) {
                    for (; j = R[ee++];) j === R[ee] && (fe = X.push(ee));
                    for (; fe--;) R.splice(X[fe], 1)
                }
                return ce = null, R
            }, w = _t.getText = function(R) {
                var j, X = "",
                    fe = 0,
                    ee = R.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof R.textContent == "string") return R.textContent;
                        for (R = R.firstChild; R; R = R.nextSibling) X += w(R)
                    } else if (ee === 3 || ee === 4) return R.nodeValue
                } else
                    for (; j = R[fe++];) X += w(j);
                return X
            }, p = _t.selectors = {
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
                        return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || _t.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && _t.error(R[0]), R
                    },
                    PSEUDO: function(R) {
                        var j, X = !R[6] && R[2];
                        return Xi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && Fo.test(X) && (j = T(X, !0)) && (j = X.indexOf(")", X.length - j) - X.length) && (R[0] = R[0].slice(0, j), R[2] = X.slice(0, j)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var j = R.replace(Tn, xn).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(R) {
                        var j = Dt[R + " "];
                        return j || (j = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Dt(R, function(X) {
                            return j.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, j, X) {
                        return function(fe) {
                            var ee = _t.attr(fe, R);
                            return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === X : j === "!=" ? ee !== X : j === "^=" ? X && ee.indexOf(X) === 0 : j === "*=" ? X && ee.indexOf(X) > -1 : j === "$=" ? X && ee.slice(-X.length) === X : j === "~=" ? (" " + ee.replace(Ss, " ") + " ").indexOf(X) > -1 : j === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, j, X, fe, ee) {
                        var ve = R.slice(0, 3) !== "nth",
                            Ee = R.slice(-4) !== "last",
                            Re = j === "of-type";
                        return fe === 1 && ee === 0 ? function(Le) {
                            return !!Le.parentNode
                        } : function(Le, ze, Ue) {
                            var Xe, ht, Tt, qe, Gt, Qt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                At = Le.parentNode,
                                c = Re && Le.nodeName.toLowerCase(),
                                h = !Ue && !Re,
                                b = !1;
                            if (At) {
                                if (ve) {
                                    for (; fn;) {
                                        for (qe = Le; qe = qe[fn];)
                                            if (Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) return !1;
                                        Qt = fn = R === "only" && !Qt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Qt = [Ee ? At.firstChild : At.lastChild], Ee && h) {
                                    for (qe = At, Tt = qe[kt] || (qe[kt] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[R] || [], Gt = Xe[0] === on && Xe[1], b = Gt && Xe[2], qe = Gt && At.childNodes[Gt]; qe = ++Gt && qe && qe[fn] || (b = Gt = 0) || Qt.pop();)
                                        if (qe.nodeType === 1 && ++b && qe === Le) {
                                            ht[R] = [on, Gt, b];
                                            break
                                        }
                                } else if (h && (qe = Le, Tt = qe[kt] || (qe[kt] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[R] || [], Gt = Xe[0] === on && Xe[1], b = Gt), b === !1)
                                    for (;
                                        (qe = ++Gt && qe && qe[fn] || (b = Gt = 0) || Qt.pop()) && !((Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) && ++b && (h && (Tt = qe[kt] || (qe[kt] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), ht[R] = [on, b]), qe === Le)););
                                return b -= ee, b === fe || b % fe === 0 && b / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, j) {
                        var X, fe = p.pseudos[R] || p.setFilters[R.toLowerCase()] || _t.error("unsupported pseudo: " + R);
                        return fe[kt] ? fe(j) : fe.length > 1 ? (X = [R, R, "", j], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ee, ve) {
                            for (var Ee, Re = fe(ee, j), Le = Re.length; Le--;) Ee = Qn(ee, Re[Le]), ee[Ee] = !(ve[Ee] = Re[Le])
                        }) : function(ee) {
                            return fe(ee, 0, X)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(R) {
                        var j = [],
                            X = [],
                            fe = z(R.replace(_i, "$1"));
                        return fe[kt] ? dn(function(ee, ve, Ee, Re) {
                            for (var Le, ze = fe(ee, null, Re, []), Ue = ee.length; Ue--;)(Le = ze[Ue]) && (ee[Ue] = !(ve[Ue] = Le))
                        }) : function(ee, ve, Ee) {
                            return j[0] = ee, fe(j, null, Ee, X), j[0] = null, !X.pop()
                        }
                    }),
                    has: dn(function(R) {
                        return function(j) {
                            return _t(R, j).length > 0
                        }
                    }),
                    contains: dn(function(R) {
                        return R = R.replace(Tn, xn),
                            function(j) {
                                return (j.textContent || w(j)).indexOf(R) > -1
                            }
                    }),
                    lang: dn(function(R) {
                        return jo.test(R || "") || _t.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                            function(j) {
                                var X;
                                do
                                    if (X = st ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return X = X.toLowerCase(), X === R || X.indexOf(R + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(R) {
                        var j = r.location && r.location.hash;
                        return j && j.slice(1) === R.id
                    },
                    root: function(R) {
                        return R === He
                    },
                    focus: function(R) {
                        return R === ue.activeElement && (!ue.hasFocus || ue.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                    },
                    enabled: Is(!1),
                    disabled: Is(!0),
                    checked: function(R) {
                        var j = R.nodeName.toLowerCase();
                        return j === "input" && !!R.checked || j === "option" && !!R.selected
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
                        return Uo.test(R.nodeName)
                    },
                    input: function(R) {
                        return Go.test(R.nodeName)
                    },
                    button: function(R) {
                        var j = R.nodeName.toLowerCase();
                        return j === "input" && R.type === "button" || j === "button"
                    },
                    text: function(R) {
                        var j;
                        return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((j = R.getAttribute("type")) == null || j.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(R, j) {
                        return [j - 1]
                    }),
                    eq: An(function(R, j, X) {
                        return [X < 0 ? X + j : X]
                    }),
                    even: An(function(R, j) {
                        for (var X = 0; X < j; X += 2) R.push(X);
                        return R
                    }),
                    odd: An(function(R, j) {
                        for (var X = 1; X < j; X += 2) R.push(X);
                        return R
                    }),
                    lt: An(function(R, j, X) {
                        for (var fe = X < 0 ? X + j : X > j ? j : X; --fe >= 0;) R.push(fe);
                        return R
                    }),
                    gt: An(function(R, j, X) {
                        for (var fe = X < 0 ? X + j : X; ++fe < j;) R.push(fe);
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
                }) p.pseudos[s] = qo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Xo(s);

            function Ds() {}
            Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = _t.tokenize = function(R, j) {
                var X, fe, ee, ve, Ee, Re, Le, ze = ki[R + " "];
                if (ze) return j ? 0 : ze.slice(0);
                for (Ee = R, Re = [], Le = p.preFilter; Ee;) {
                    (!X || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ee = [])), X = !1, (fe = As.exec(Ee)) && (X = fe.shift(), ee.push({
                        value: X,
                        type: fe[0].replace(_i, " ")
                    }), Ee = Ee.slice(X.length));
                    for (ve in p.filter)(fe = Xi[ve].exec(Ee)) && (!Le[ve] || (fe = Le[ve](fe))) && (X = fe.shift(), ee.push({
                        value: X,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(X.length));
                    if (!X) break
                }
                return j ? Ee.length : Ee ? _t.error(R) : ki(R, Re).slice(0)
            };

            function Qi(R) {
                for (var j = 0, X = R.length, fe = ""; j < X; j++) fe += R[j].value;
                return fe
            }

            function Zi(R, j, X) {
                var fe = j.dir,
                    ee = j.next,
                    ve = ee || fe,
                    Ee = X && ve === "parentNode",
                    Re = ft++;
                return j.first ? function(Le, ze, Ue) {
                    for (; Le = Le[fe];)
                        if (Le.nodeType === 1 || Ee) return R(Le, ze, Ue);
                    return !1
                } : function(Le, ze, Ue) {
                    var Xe, ht, Tt, qe = [on, Re];
                    if (Ue) {
                        for (; Le = Le[fe];)
                            if ((Le.nodeType === 1 || Ee) && R(Le, ze, Ue)) return !0
                    } else
                        for (; Le = Le[fe];)
                            if (Le.nodeType === 1 || Ee)
                                if (Tt = Le[kt] || (Le[kt] = {}), ht = Tt[Le.uniqueID] || (Tt[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[fe] || Le;
                                else {
                                    if ((Xe = ht[ve]) && Xe[0] === on && Xe[1] === Re) return qe[2] = Xe[2];
                                    if (ht[ve] = qe, qe[2] = R(Le, ze, Ue)) return !0
                                } return !1
                }
            }

            function er(R) {
                return R.length > 1 ? function(j, X, fe) {
                    for (var ee = R.length; ee--;)
                        if (!R[ee](j, X, fe)) return !1;
                    return !0
                } : R[0]
            }

            function Yo(R, j, X) {
                for (var fe = 0, ee = j.length; fe < ee; fe++) _t(R, j[fe], X);
                return X
            }

            function tr(R, j, X, fe, ee) {
                for (var ve, Ee = [], Re = 0, Le = R.length, ze = j != null; Re < Le; Re++)(ve = R[Re]) && (!X || X(ve, fe, ee)) && (Ee.push(ve), ze && j.push(Re));
                return Ee
            }

            function Wr(R, j, X, fe, ee, ve) {
                return fe && !fe[kt] && (fe = Wr(fe)), ee && !ee[kt] && (ee = Wr(ee, ve)), dn(function(Ee, Re, Le, ze) {
                    var Ue, Xe, ht, Tt = [],
                        qe = [],
                        Gt = Re.length,
                        Qt = Ee || Yo(j || "*", Le.nodeType ? [Le] : Le, []),
                        fn = R && (Ee || !j) ? tr(Qt, Tt, R, Le, ze) : Qt,
                        At = X ? ee || (Ee ? R : Gt || fe) ? [] : Re : fn;
                    if (X && X(fn, At, Le, ze), fe)
                        for (Ue = tr(At, qe), fe(Ue, [], Le, ze), Xe = Ue.length; Xe--;)(ht = Ue[Xe]) && (At[qe[Xe]] = !(fn[qe[Xe]] = ht));
                    if (Ee) {
                        if (ee || R) {
                            if (ee) {
                                for (Ue = [], Xe = At.length; Xe--;)(ht = At[Xe]) && Ue.push(fn[Xe] = ht);
                                ee(null, At = [], Ue, ze)
                            }
                            for (Xe = At.length; Xe--;)(ht = At[Xe]) && (Ue = ee ? Qn(Ee, ht) : Tt[Xe]) > -1 && (Ee[Ue] = !(Re[Ue] = ht))
                        }
                    } else At = tr(At === Re ? At.splice(Gt, At.length) : At), ee ? ee(null, Re, At, ze) : Cn.apply(Re, At)
                })
            }

            function qr(R) {
                for (var j, X, fe, ee = R.length, ve = p.relative[R[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Le = Zi(function(Xe) {
                        return Xe === j
                    }, Ee, !0), ze = Zi(function(Xe) {
                        return Qn(j, Xe) > -1
                    }, Ee, !0), Ue = [function(Xe, ht, Tt) {
                        var qe = !ve && (Tt || ht !== Z) || ((j = ht).nodeType ? Le(Xe, ht, Tt) : ze(Xe, ht, Tt));
                        return j = null, qe
                    }]; Re < ee; Re++)
                    if (X = p.relative[R[Re].type]) Ue = [Zi(er(Ue), X)];
                    else {
                        if (X = p.filter[R[Re].type].apply(null, R[Re].matches), X[kt]) {
                            for (fe = ++Re; fe < ee && !p.relative[R[fe].type]; fe++);
                            return Wr(Re > 1 && er(Ue), Re > 1 && Qi(R.slice(0, Re - 1).concat({
                                value: R[Re - 2].type === " " ? "*" : ""
                            })).replace(_i, "$1"), X, Re < fe && qr(R.slice(Re, fe)), fe < ee && qr(R = R.slice(fe)), fe < ee && Qi(R))
                        }
                        Ue.push(X)
                    } return er(Ue)
            }

            function Ms(R, j) {
                var X = j.length > 0,
                    fe = R.length > 0,
                    ee = function(ve, Ee, Re, Le, ze) {
                        var Ue, Xe, ht, Tt = 0,
                            qe = "0",
                            Gt = ve && [],
                            Qt = [],
                            fn = Z,
                            At = ve || fe && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = At.length;
                        for (ze && (Z = Ee == ue || Ee || ze); qe !== h && (Ue = At[qe]) != null; qe++) {
                            if (fe && Ue) {
                                for (Xe = 0, !Ee && Ue.ownerDocument != ue && (ne(Ue), Re = !st); ht = R[Xe++];)
                                    if (ht(Ue, Ee || ue, Re)) {
                                        Le.push(Ue);
                                        break
                                    } ze && (on = c)
                            }
                            X && ((Ue = !ht && Ue) && Tt--, ve && Gt.push(Ue))
                        }
                        if (Tt += qe, X && qe !== Tt) {
                            for (Xe = 0; ht = j[Xe++];) ht(Gt, Qt, Ee, Re);
                            if (ve) {
                                if (Tt > 0)
                                    for (; qe--;) Gt[qe] || Qt[qe] || (Qt[qe] = Mn.call(Le));
                                Qt = tr(Qt)
                            }
                            Cn.apply(Le, Qt), ze && !ve && Qt.length > 0 && Tt + j.length > 1 && _t.uniqueSort(Le)
                        }
                        return ze && (on = c, Z = fn), Gt
                    };
                return X ? dn(ee) : ee
            }
            return z = _t.compile = function(R, j) {
                var X, fe = [],
                    ee = [],
                    ve = qi[R + " "];
                if (!ve) {
                    for (j || (j = T(R)), X = j.length; X--;) ve = qr(j[X]), ve[kt] ? fe.push(ve) : ee.push(ve);
                    ve = qi(R, Ms(ee, fe)), ve.selector = R
                }
                return ve
            }, G = _t.select = function(R, j, X, fe) {
                var ee, ve, Ee, Re, Le, ze = typeof R == "function" && R,
                    Ue = !fe && T(R = ze.selector || R);
                if (X = X || [], Ue.length === 1) {
                    if (ve = Ue[0] = Ue[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && j.nodeType === 9 && st && p.relative[ve[1].type]) {
                        if (j = (p.find.ID(Ee.matches[0].replace(Tn, xn), j) || [])[0], j) ze && (j = j.parentNode);
                        else return X;
                        R = R.slice(ve.shift().value.length)
                    }
                    for (ee = Xi.needsContext.test(R) ? 0 : ve.length; ee-- && (Ee = ve[ee], !p.relative[Re = Ee.type]);)
                        if ((Le = p.find[Re]) && (fe = Le(Ee.matches[0].replace(Tn, xn), Gr.test(ve[0].type) && Hr(j.parentNode) || j))) {
                            if (ve.splice(ee, 1), R = fe.length && Qi(ve), !R) return Cn.apply(X, fe), X;
                            break
                        }
                }
                return (ze || z(R, Ue))(fe, j, !st, X, !j || Gr.test(R) && Hr(j.parentNode) || j), X
            }, u.sortStable = kt.split("").sort(Kn).join("") === kt, u.detectDuplicates = !!Ce, ne(), u.sortDetached = yn(function(R) {
                return R.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(R, j, X) {
                if (!X) return R.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(R, j, X) {
                if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), yn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ki(jr, function(R, j, X) {
                var fe;
                if (!X) return R[j] === !0 ? j.toLowerCase() : (fe = R.getAttributeNode(j)) && fe.specified ? fe.value : null
            }), _t
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

        function K(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function U(r, s, u) {
            return re(s) ? d.grep(r, function(p, w) {
                return !!s.call(p, w, p) !== u
            }) : s.nodeType ? d.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? d.grep(r, function(p) {
                return S.call(s, p) > -1 !== u
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
                return this.pushStack(U(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(U(this, r || [], !0))
            },
            is: function(r) {
                return !!U(this, typeof r == "string" && Be.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), je.test(p[1]) && d.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = P.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                }
                return d.makeArray(r, this)
            };
        be.prototype = d.fn, oe = d(P);
        var we = /^(?:parents|prev(?:Until|All))/,
            he = {
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
                return r ? typeof r == "string" ? S.call(d(r), this[0]) : S.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(r, s) {
                return this.pushStack(d.uniqueSort(d.merge(this.get(), d(r, s))))
            },
            addBack: function(r) {
                return this.add(r == null ? this.prevObject : this.prevObject.filter(r))
            }
        });

        function _e(r, s) {
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
                return _e(r, "nextSibling")
            },
            prev: function(r) {
                return _e(r, "previousSibling")
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var w = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (he[r] || d.uniqueSort(w), we.test(r) && w.reverse()), this.pushStack(w)
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
                G = function() {
                    for (w = w || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                },
                Z = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function ce(Ce) {
                            d.each(Ce, function(ne, ue) {
                                re(ue) ? (!r.unique || !Z.has(ue)) && x.push(ue) : ue && ue.length && se(ue) !== "string" && ce(ue)
                            })
                        }(arguments), u && !s && G()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(ce, Ce) {
                            for (var ne;
                                (ne = d.inArray(Ce, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
                        }), this
                    },
                    has: function(ce) {
                        return ce ? d.inArray(ce, x) > -1 : x.length > 0
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
                    fireWith: function(ce, Ce) {
                        return w || (Ce = Ce || [], Ce = [ce, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || G()), this
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
                                d.each(s, function(z, G) {
                                    var Z = re(x[G[4]]) && x[G[4]];
                                    w[G[1]](function() {
                                        var ce = Z && Z.apply(this, arguments);
                                        ce && re(ce.promise) ? ce.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[G[0] + "With"](this, Z ? [ce] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var G = 0;

                            function Z(ce, Ce, ne, ue) {
                                return function() {
                                    var He = this,
                                        st = arguments,
                                        Fe = function() {
                                            var Nt, un;
                                            if (!(ce < G)) {
                                                if (Nt = ne.apply(He, st), Nt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(un) ? ue ? un.call(Nt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue)) : (G++, un.call(Nt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue), Z(G, Ce, Ke, Ce.notifyWith))) : (ne !== Ke && (He = void 0, st = [Nt]), (ue || Ce.resolveWith)(He, st))
                                            }
                                        },
                                        zt = ue ? Fe : function() {
                                            try {
                                                Fe()
                                            } catch (Nt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), ce + 1 >= G && (ne !== dt && (He = void 0, st = [Nt]), Ce.rejectWith(He, st))
                                            }
                                        };
                                    ce ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(ce) {
                                s[0][3].add(Z(0, ce, re(z) ? z : Ke, ce.notifyWith)), s[1][3].add(Z(0, ce, re(x) ? x : Ke)), s[2][3].add(Z(0, ce, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? d.extend(x, p) : p
                        }
                    },
                    w = {};
                return d.each(s, function(x, T) {
                    var z = T[2],
                        G = T[5];
                    p[T[1]] = z.add, G && z.add(function() {
                        u = G
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
                        return function(G) {
                            p[z] = this, w[z] = arguments.length > 1 ? f.call(arguments) : G, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Bt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                for (; u--;) Bt(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var Ht = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Ht.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                (r === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0, !(r !== !0 && --d.readyWait > 0) && E.resolveWith(P, [d]))
            }
        }), d.ready.then = E.then;

        function l() {
            P.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), d.ready()
        }
        P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll ? e.setTimeout(d.ready) : (P.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, w, x, T) {
                var z = 0,
                    G = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(ce, Ce, ne) {
                        return Z.call(d(ce), ne)
                    })), s))
                    for (; z < G; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : Z ? s.call(r) : G ? s(r[0], u) : x
            },
            k = /^-ms-/,
            O = /-([a-z])/g;

        function L(r, s) {
            return s.toUpperCase()
        }

        function V(r) {
            return r.replace(k, "ms-").replace(O, L)
        }
        var te = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function Se() {
            this.expando = d.expando + Se.uid++
        }
        Se.uid = 1, Se.prototype = {
            cache: function(r) {
                var s = r[this.expando];
                return s || (s = {}, te(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
                    value: s,
                    configurable: !0
                }))), s
            },
            set: function(r, s, u) {
                var p, w = this.cache(r);
                if (typeof s == "string") w[V(s)] = u;
                else
                    for (p in s) w[V(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][V(s)]
            },
            access: function(r, s, u) {
                return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
            },
            remove: function(r, s) {
                var u, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map(V) : (s = V(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !d.isEmptyObject(s)
            }
        };
        var de = new Se,
            De = new Se,
            Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            it = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Me.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(it, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = Ct(u)
                    } catch {}
                    De.set(r, s, u)
                } else u = void 0;
            return u
        }
        d.extend({
            hasData: function(r) {
                return De.hasData(r) || de.hasData(r)
            },
            data: function(r, s, u) {
                return De.access(r, s, u)
            },
            removeData: function(r, s) {
                De.remove(r, s)
            },
            _data: function(r, s, u) {
                return de.access(r, s, u)
            },
            _removeData: function(r, s) {
                de.remove(r, s)
            }
        }), d.fn.extend({
            data: function(r, s) {
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(x), x.nodeType === 1 && !de.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = V(p.slice(5)), rn(x, p, w[p])));
                        de.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    De.set(this, r)
                }) : g(this, function(z) {
                    var G;
                    if (x && z === void 0) return G = De.get(x, r), G !== void 0 || (G = rn(x, r), G !== void 0) ? G : void 0;
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
                if (r) return s = (s || "fx") + "queue", p = de.get(r, s), u && (!p || Array.isArray(u) ? p = de.access(r, s, d.makeArray(u)) : p.push(u)), p || []
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
                return de.get(r, u) || de.access(r, u, {
                    empty: d.Callbacks("once memory").add(function() {
                        de.remove(r, [s + "queue", u])
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
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = de.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                return z(), w.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            bt = ["Top", "Right", "Bottom", "Left"],
            Jt = P.documentElement,
            Je = function(r) {
                return d.contains(r.ownerDocument, r)
            },
            Lt = {
                composed: !0
            };
        Jt.getRootNode && (Je = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Lt) === r.ownerDocument
        });
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
        };

        function N(r, s, u, p) {
            var w, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                G = z(),
                Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                ce = r.nodeType && (d.cssNumber[s] || Z !== "px" && +G) && yt.exec(d.css(r, s));
            if (ce && ce[3] !== Z) {
                for (G = G / 2, Z = Z || ce[3], ce = +G || 1; T--;) d.style(r, s, ce + Z), (1 - x) * (1 - (x = z() / G || .5)) <= 0 && (T = 0), ce = ce / x;
                ce = ce * 2, d.style(r, s, ce + Z), u = u || []
            }
            return u && (ce = +ce || +G || 0, w = u[1] ? ce + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = ce, p.end = w)), w
        }
        var q = {};

        function M(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = q[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), q[p] = w, w)
        }

        function H(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = de.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = M(p))) : u !== "none" && (w[x] = "none", de.set(p, "display", u)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
            return r
        }
        d.fn.extend({
            show: function() {
                return H(this, !0)
            },
            hide: function() {
                return H(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    F(this) ? d(this).show() : d(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = P.createDocumentFragment(),
                s = r.appendChild(P.createElement("div")),
                u = P.createElement("input");
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), Y.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", Y.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, Y.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? d.merge([r], u) : u
        }

        function Ft(r, s) {
            for (var u = 0, p = r.length; u < p; u++) de.set(r[u], "globalEval", !s || de.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, z, G, Z, ce, Ce = s.createDocumentFragment(), ne = [], ue = 0, He = r.length; ue < He; ue++)
                if (x = r[ue], x || x === 0)
                    if (se(x) === "object") d.merge(ne, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) ne.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(x) || ["", ""])[1].toLowerCase(), G = Ve[z] || Ve._default, T.innerHTML = G[1] + d.htmlPrefilter(x) + G[2], ce = G[0]; ce--;) T = T.lastChild;
                d.merge(ne, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; x = ne[ue++];) {
                if (p && d.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (Z = Je(x), T = pt(Ce.appendChild(x), "script"), Z && Ft(T), u)
                    for (ce = 0; x = T[ce++];) Ne.test(x.type || "") && u.push(x)
            }
            return Ce
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function Dn() {
            return !1
        }

        function gi(r, s) {
            return r === _r() == (s === "focus")
        }

        function _r() {
            try {
                return P.activeElement
            } catch {}
        }

        function Sn(r, s, u, p, w, x) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) Sn(r, z, u, p, s[z], x);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(G) {
                return d().off(G), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, w, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, z, G, Z, ce, Ce, ne, ue, He, st, Fe = de.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Jt, w), u.guid || (u.guid = d.guid++), (G = Fe.events) || (G = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ue = st = z[1], He = (z[2] || "").split(".").sort(), ue && (Ce = d.event.special[ue] || {}, ue = (w ? Ce.delegateType : Ce.bindType) || ue, Ce = d.event.special[ue] || {}, ce = d.extend({
                        type: ue,
                        origType: st,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: He.join(".")
                    }, x), (ne = G[ue]) || (ne = G[ue] = [], ne.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, He, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, ce), ce.handler.guid || (ce.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, ce) : ne.push(ce), d.event.global[ue] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, G, Z, ce, Ce, ne, ue, He, st, Fe = de.hasData(r) && de.get(r);
                if (!(!Fe || !(G = Fe.events))) {
                    for (s = (s || "").match(Te) || [""], Z = s.length; Z--;) {
                        if (z = Pn.exec(s[Z]) || [], ue = st = z[1], He = (z[2] || "").split(".").sort(), !ue) {
                            for (ue in G) d.event.remove(r, ue + s[Z], u, p, !0);
                            continue
                        }
                        for (Ce = d.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, ne = G[ue] || [], z = z[2] && new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) ce = ne[x], (w || st === ce.origType) && (!u || u.guid === ce.guid) && (!z || z.test(ce.namespace)) && (!p || p === ce.selector || p === "**" && ce.selector) && (ne.splice(x, 1), ce.selector && ne.delegateCount--, Ce.remove && Ce.remove.call(r, ce));
                        T && !ne.length && ((!Ce.teardown || Ce.teardown.call(r, He, Fe.handle) === !1) && d.removeEvent(r, ue, Fe.handle), delete G[ue])
                    }
                    d.isEmptyObject(G) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    G = d.event.fix(r),
                    Z = (de.get(this, "events") || Object.create(null))[G.type] || [],
                    ce = d.event.special[G.type] || {};
                for (z[0] = G, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (G.delegateTarget = this, !(ce.preDispatch && ce.preDispatch.call(this, G) === !1)) {
                    for (T = d.event.handlers.call(this, G, Z), s = 0;
                        (w = T[s++]) && !G.isPropagationStopped();)
                        for (G.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !G.isImmediatePropagationStopped();)(!G.rnamespace || x.namespace === !1 || G.rnamespace.test(x.namespace)) && (G.handleObj = x, G.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (G.result = p) === !1 && (G.preventDefault(), G.stopPropagation()));
                    return ce.postDispatch && ce.postDispatch.call(this, G), G.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, z = [],
                    G = s.delegateCount,
                    Z = r.target;
                if (G && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < G; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && x.push(p);
                            x.length && z.push({
                                elem: Z,
                                handlers: x
                            })
                        }
                }
                return Z = this, G < s.length && z.push({
                    elem: Z,
                    handlers: s.slice(G)
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
                        return pe.test(s.type) && s.click && K(s, "input") && sn(s, "click", rt), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && K(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && K(s, "input") && de.get(s, "click") || K(s, "a")
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
                de.get(r, s) === void 0 && d.event.add(r, s, rt);
                return
            }
            de.set(r, s, !1), d.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var w, x, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = f.call(arguments), de.set(this, s, T), w = u(this, s), this[s](), x = de.get(this, s), T !== x || w ? de.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
                    } else T.length && (de.set(this, s, {
                        value: d.event.trigger(d.extend(T[0], d.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        d.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, d.Event = function(r, s) {
            if (!(this instanceof d.Event)) return new d.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? rt : Dn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
        }, d.Event.prototype = {
            constructor: d.Event,
            isDefaultPrevented: Dn,
            isPropagationStopped: Dn,
            isImmediatePropagationStopped: Dn,
            isSimulated: !1,
            preventDefault: function() {
                var r = this.originalEvent;
                this.isDefaultPrevented = rt, r && !this.isSimulated && r.preventDefault()
            },
            stopPropagation: function() {
                var r = this.originalEvent;
                this.isPropagationStopped = rt, r && !this.isSimulated && r.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var r = this.originalEvent;
                this.isImmediatePropagationStopped = rt, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
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
                return Sn(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return Sn(this, r, s, u, p, 1)
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
        var Sr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(r, s) {
            return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function vi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function yi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function Fi(r, s) {
            var u, p, w, x, T, z, G;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (x = de.get(r), G = x.events, G)) {
                    de.remove(s, "handle events");
                    for (w in G)
                        for (u = 0, p = G[w].length; u < p; u++) d.event.add(s, w, G[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
            }
        }

        function ji(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = v(s);
            var w, x, T, z, G, Z, ce = 0,
                Ce = r.length,
                ne = Ce - 1,
                ue = s[0],
                He = re(ue);
            if (He || Ce > 1 && typeof ue == "string" && !Y.checkClone && Tr.test(ue)) return r.each(function(st) {
                var Fe = r.eq(st);
                He && (s[0] = ue.call(this, st, Fe.html())), mn(Fe, s, u, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = d.map(pt(w, "script"), vi), z = T.length; ce < Ce; ce++) G = w, ce !== ne && (G = d.clone(G, !0, !0), z && d.merge(T, pt(G, "script"))), u.call(r[ce], G, ce);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, d.map(T, yi), ce = 0; ce < z; ce++) G = T[ce], Ne.test(G.type || "") && !de.access(G, "globalEval") && d.contains(Z, G) && (G.src && (G.type || "").toLowerCase() !== "module" ? d._evalUrl && !G.noModule && d._evalUrl(G.src, {
                        nonce: G.nonce || G.getAttribute("nonce")
                    }, Z) : ae(G.textContent.replace(mi, ""), G, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    G = Je(r);
                if (!Y.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) Fi(x[p], T[p]);
                    else Fi(r, z);
                return T = pt(z, "script"), T.length > 0 && Ft(T, !G && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = d.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (te(u)) {
                        if (s = u[de.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                            u[de.expando] = void 0
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
                    if (typeof s == "string" && !Sr.test(s) && !Ve[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
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
            Gn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Gi = function(r, s, u) {
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
                    G.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(G).appendChild(Z);
                    var ce = e.getComputedStyle(Z);
                    u = ce.top !== "1%", z = s(ce.marginLeft) === 12, Z.style.right = "60%", x = s(ce.right) === 36, p = s(ce.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Jt.removeChild(G), Z = null
                }
            }

            function s(ce) {
                return Math.round(parseFloat(ce))
            }
            var u, p, w, x, T, z, G = P.createElement("div"),
                Z = P.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = Z.style.backgroundClip === "content-box", d.extend(Y, {
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
                    var ce, Ce, ne, ue;
                    return T == null && (ce = P.createElement("table"), Ce = P.createElement("tr"), ne = P.createElement("div"), ce.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Jt.appendChild(ce).appendChild(Ce).appendChild(ne), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Jt.removeChild(ce)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Gn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !Y.pixelBoxStyles() && wi.test(T) && bi.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
            C = P.createElement("div").style,
            A = {};

        function Q(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                if (r = o[u] + s, r in C) return r
        }

        function xe(r) {
            var s = d.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Q(r) || r)
        }
        var We = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Un = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Nn(r, s, u) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Hn(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                G = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (G += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (G -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (G -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (G += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? G += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (G += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - G - z - .5)) || 0), G
        }

        function Ar(r, s, u) {
            var p = Gn(r),
                w = !Y.boxSizingReliable() || u,
                x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                G = "offset" + s[0].toUpperCase() + s.slice(1);
            if (wi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!Y.boxSizingReliable() && x || !Y.reliableTrDimensions() && K(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = G in r, T && (z = r[G])), z = parseFloat(z) || 0, z + Hn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
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
                    var w, x, T, z = V(s),
                        G = It.test(s),
                        Z = r.style;
                    if (G || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = N(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !G && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !Y.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (G ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = V(s),
                    G = It.test(s);
                return G || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Un && (w = Un[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return We.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Xt, function() {
                        return Ar(u, s, w)
                    }) : Ar(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Gn(u),
                        z = !Y.scrollboxSize() && T.position === "absolute",
                        G = z || w,
                        Z = G && d.css(u, "boxSizing", !1, T) === "border-box",
                        ce = w ? Hn(u, s, w, Z, T) : 0;
                    return Z && z && (ce -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Hn(u, s, "border", !1, T) - .5)), ce && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, ce)
                }
            }
        }), d.cssHooks.marginLeft = y(Y.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Gi(r, {
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
                        G = 0;
                    if (Array.isArray(p)) {
                        for (x = Gn(u), T = p.length; G < T; G++) z[p[G]] = d.css(u, p[G], !1, x);
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
        var jt, Ui, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Ui && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                jt = void 0
            }), jt = Date.now()
        }

        function Hi(r, s) {
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
            var p, w, x, T, z, G, Z, ce, Ce = "width" in s || "height" in s,
                ne = this,
                ue = {},
                He = r.style,
                st = r.nodeType && F(r),
                Fe = de.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (st ? "hide" : "show"))
                        if (w === "show" && Fe && Fe[p] !== void 0) st = !0;
                        else continue;
                    ue[p] = Fe && Fe[p] || d.style(r, p)
                } if (G = !d.isEmptyObject(s), !(!G && d.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (u.overflow = [He.overflow, He.overflowX, He.overflowY], Z = Fe && Fe.display, Z == null && (Z = de.get(r, "display")), ce = d.css(r, "display"), ce === "none" && (Z ? ce = Z : (H([r], !0), Z = r.style.display || Z, ce = d.css(r, "display"), H([r]))), (ce === "inline" || ce === "inline-block" && Z != null) && d.css(r, "float") === "none" && (G || (ne.done(function() {
                    He.display = Z
                }), Z == null && (ce = He.display, Z = ce === "none" ? "" : ce)), He.display = "inline-block")), u.overflow && (He.overflow = "hidden", ne.always(function() {
                    He.overflow = u.overflow[0], He.overflowX = u.overflow[1], He.overflowY = u.overflow[2]
                })), G = !1;
                for (p in ue) G || (Fe ? "hidden" in Fe && (st = Fe.hidden) : Fe = de.access(r, "fxshow", {
                    display: Z
                }), x && (Fe.hidden = !st), st && H([r], !0), ne.done(function() {
                    st || H([r]), de.remove(r, "fxshow");
                    for (p in ue) d.style(r, p, ue[p])
                })), G = gs(st ? Fe[p] : 0, p, ne), p in Fe || (Fe[p] = G.start, st && (G.end = G.start, G.start = 0))
            }
        }

        function ms(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = V(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = w)
                } else s[p] = w
        }

        function bn(r, s, u) {
            var p, w, x = 0,
                T = bn.prefilters.length,
                z = d.Deferred().always(function() {
                    delete G.elem
                }),
                G = function() {
                    if (w) return !1;
                    for (var Ce = jt || Rr(), ne = Math.max(0, Z.startTime + Z.duration - Ce), ue = ne / Z.duration || 0, He = 1 - ue, st = 0, Fe = Z.tweens.length; st < Fe; st++) Z.tweens[st].run(He);
                    return z.notifyWith(r, [Z, He, ne]), He < 1 && Fe ? ne : (Fe || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
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
                    startTime: jt || Rr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(Ce, ne) {
                        var ue = d.Tween(r, Z.opts, Ce, ne, Z.opts.specialEasing[Ce] || Z.opts.easing);
                        return Z.tweens.push(ue), ue
                    },
                    stop: function(Ce) {
                        var ne = 0,
                            ue = Ce ? Z.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; ne < ue; ne++) Z.tweens[ne].run(1);
                        return Ce ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, Ce])) : z.rejectWith(r, [Z, Ce]), this
                    }
                }),
                ce = Z.props;
            for (ms(ce, Z.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(Z, r, ce, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(ce, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(G, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        d.Animation = d.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, yt.exec(s), u), u
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
                    return this.filter(F).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = d.isEmptyObject(r),
                        x = d.speed(s, u, p),
                        T = function() {
                            var z = bn(this, d.extend({}, r), x);
                            (w || de.get(this, "finish")) && z.stop(!0)
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
                            z = de.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && Co.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                        (w || !u) && d.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = de.get(this),
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
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Hi(s, !0), p, w, x)
                }
            }), d.each({
                slideDown: Hi("show"),
                slideUp: Hi("hide"),
                slideToggle: Hi("toggle"),
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
                for (jt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), jt = void 0
            }, d.fx.timer = function(r) {
                d.timers.push(r), d.fx.start()
            }, d.fx.interval = 13, d.fx.start = function() {
                Ui || (Ui = !0, Or())
            }, d.fx.stop = function() {
                Ui = null
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
                var r = P.createElement("input"),
                    s = P.createElement("select"),
                    u = s.appendChild(P.createElement("option"));
                r.type = "checkbox", Y.checkOn = r.value !== "", Y.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", Y.radioValue = r.value === "t"
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
                        if (!Y.radioValue && s === "radio" && K(r, "input")) {
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
                var T, z, G = w.toLowerCase();
                return x || (z = Ci[G], Ci[G] = T, T = u(p, w, x) != null ? G : null, Ci[G] = z), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            ko = /^(?:a|area)$/i;
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
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || ko.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), Y.optSelected || (d.propHooks.selected = {
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

        function Wn(r) {
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function qn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Dr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).addClass(r.call(this, Z, qn(this)))
                });
                if (s = Dr(r), s.length) {
                    for (; u = this[G++];)
                        if (w = qn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = Wn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).removeClass(r.call(this, Z, qn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Dr(r), s.length) {
                    for (; u = this[G++];)
                        if (w = qn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            z = Wn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    d(this).toggleClass(r.call(this, w, qn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = d(this), z = Dr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = qn(this), w && de.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : de.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + Wn(qn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var _o = /\r/g;
        d.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(_o, "") : u == null ? "" : u)) : void 0
            }
        }), d.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = d.find.attr(r, "value");
                        return s != null ? s : Wn(d.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, u, p, w = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            G = T ? x + 1 : w.length;
                        for (x < 0 ? p = G : p = T ? x : 0; p < G; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
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
            }, Y.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), Y.focusin = "onfocusin" in e;
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, G, Z, ce, Ce, ne = [u || P],
                    ue = $.call(r, "type") ? r.type : r,
                    He = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Mr.test(ue + d.event.triggered) && (ue.indexOf(".") > -1 && (He = ue.split("."), ue = He.shift(), He.sort()), G = ue.indexOf(":") < 0 && "on" + ue, r = r[d.expando] ? r : new d.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = He.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), ce = d.event.special[ue] || {}, !(!p && ce.trigger && ce.trigger.apply(u, s) === !1))) {
                    if (!p && !ce.noBubble && !m(u)) {
                        for (z = ce.delegateType || ue, Mr.test(z + ue) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = ne[w++]) && !r.isPropagationStopped();) Ce = x, r.type = w > 1 ? z : ce.bindType || ue, Z = (de.get(x, "events") || Object.create(null))[r.type] && de.get(x, "handle"), Z && Z.apply(x, s), Z = G && x[G], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!ce._default || ce._default.apply(ne.pop(), s) === !1) && te(u) && G && re(u[ue]) && !m(u) && (T = u[G], T && (u[G] = null), d.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Xn), u[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Xn), d.event.triggered = void 0, T && (u[G] = T)), r.result
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
        }), Y.focusin || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                d.event.simulate(s, p.target, d.event.fix(p))
            };
            d.event.special[s] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s);
                    w || p.addEventListener(r, u, !0), de.access(p, s, (w || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s) - 1;
                    w ? de.access(p, s, w) : (p.removeEventListener(r, u, !0), de.remove(p, s))
                }
            }
        });
        var xi = e.location,
            Lr = {
                guid: Date.now()
            },
            Wi = /\?/;
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
        var So = /\[\]$/,
            vs = /\r?\n/g,
            To = /^(?:submit|button|image|reset|file)$/i,
            Ao = /^(?:input|select|textarea|keygen)/i;

        function Pr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) d.each(s, function(x, T) {
                u || So.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
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
            Mo = /^\/\//,
            ws = {},
            Nr = {},
            bs = "*/".concat("*"),
            Vr = P.createElement("a");
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
                var G;
                return w[z] = !0, d.each(r[z] || [], function(Z, ce) {
                    var Ce = ce(s, u, p);
                    if (typeof Ce == "string" && !x && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(G = Ce)
                }), G
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function Br(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Lo(r, s, u) {
            for (var p, w, x, T, z = r.contents, G = r.dataTypes; G[0] === "*";) G.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in z)
                    if (z[w] && z[w].test(p)) {
                        G.unshift(w);
                        break
                    }
            }
            if (G[0] in u) x = G[0];
            else {
                for (w in u) {
                    if (!G[0] || r.converters[w + " " + G[0]]) {
                        x = w;
                        break
                    }
                    T || (T = w)
                }
                x = x || T
            }
            if (x) return x !== G[0] && G.unshift(x), u[x]
        }

        function Po(r, s, u, p) {
            var w, x, T, z, G, Z = {},
                ce = r.dataTypes.slice();
            if (ce[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (x = ce.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !G && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), G = x, x = ce.shift(), x) {
                    if (x === "*") x = G;
                    else if (G !== "*" && G !== x) {
                        if (T = Z[G + " " + x] || Z["* " + x], !T) {
                            for (w in Z)
                                if (z = w.split(" "), z[1] === x && (T = Z[G + " " + z[0]] || Z["* " + z[0]], T)) {
                                    T === !0 ? T = Z[w] : Z[w] !== !0 && (x = z[0], ce.unshift(z[1]));
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
                                    error: T ? Ce : "No conversion from " + G + " to " + x
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
                var u, p, w, x, T, z, G, Z, ce, Ce, ne = d.ajaxSetup({}, s),
                    ue = ne.context || ne,
                    He = ne.context && (ue.nodeType || ue.jquery) ? d(ue) : d.event,
                    st = d.Deferred(),
                    Fe = d.Callbacks("once memory"),
                    zt = ne.statusCode || {},
                    Nt = {},
                    un = {},
                    kt = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Dt;
                            if (G) {
                                if (!x)
                                    for (x = {}; Dt = Yn.exec(w);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = x[ft.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return G ? w : null
                        },
                        setRequestHeader: function(ft, Dt) {
                            return G == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return G == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Dt;
                            if (ft)
                                if (G) et.always(ft[et.status]);
                                else
                                    for (Dt in ft) zt[Dt] = [zt[Dt], ft[Dt]];
                            return this
                        },
                        abort: function(ft) {
                            var Dt = ft || kt;
                            return u && u.abort(Dt), on(0, Dt), this
                        }
                    };
                if (st.promise(et), ne.url = ((r || ne.url || xi.href) + "").replace(Mo, xi.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Te) || [""], ne.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = ne.url, z.href = z.href, ne.crossDomain = Vr.protocol + "//" + Vr.host != z.protocol + "//" + z.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), xs(ws, ne, s, et), G) return et;
                Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Do.test(ne.type), p = ne.url.replace(Ro, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Oo, "+")) : (Ce = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Wi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Io, "$1"), Ce = (Wi.test(p) ? "&" : "?") + "_=" + Lr.guid++ + Ce), ne.url = p + Ce), ne.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : ne.accepts["*"]);
                for (ce in ne.headers) et.setRequestHeader(ce, ne.headers[ce]);
                if (ne.beforeSend && (ne.beforeSend.call(ue, et, ne) === !1 || G)) return et.abort();
                if (kt = "abort", Fe.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = xs(Nr, ne, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, Z && He.trigger("ajaxSend", [et, ne]), G) return et;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ne.timeout));
                    try {
                        G = !1, u.send(Nt, on)
                    } catch (ft) {
                        if (G) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, ki, qi) {
                    var hn, Kn, Jn, an, Mn, vn = Dt;
                    G || (G = !0, T && e.clearTimeout(T), u = void 0, w = qi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, ki && (an = Lo(ne, et, ki)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Po(ne, an, et, hn), hn ? (ne.ifModified && (Mn = et.getResponseHeader("Last-Modified"), Mn && (d.lastModified[p] = Mn), Mn = et.getResponseHeader("etag"), Mn && (d.etag[p] = Mn)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? st.resolveWith(ue, [Kn, vn, et]) : st.rejectWith(ue, [et, vn, Jn]), et.statusCode(zt), zt = void 0, Z && He.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Kn : Jn]), Fe.fireWith(ue, [et, vn]), Z && (He.trigger("ajaxComplete", [et, ne]), --d.active || d.event.trigger("ajaxStop")))
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
        Y.cors = !!Ei && "withCredentials" in Ei, Y.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (Y.cors || Ei && !r.crossDomain) return {
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
                        }), P.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var $r = [],
            Fr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = $r.pop() || d.expando + "_" + Lr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (Fr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Fr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(Fr, "$1" + p) : r.jsonp !== !1 && (r.url += (Wi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || d.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, $r.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), Y.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (Y.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = je.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = Wn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(G) {
                x = arguments, T.html(p ? d("<div>").append(d.parseHTML(G)).find(p) : G)
            }).always(u && function(G, Z) {
                T.each(function() {
                    u.apply(this, x || [G.responseText, Z, G])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, G, Z, ce = d.css(r, "position"),
                    Ce = d(r),
                    ne = {};
                ce === "static" && (r.style.position = "relative"), z = Ce.offset(), x = d.css(r, "top"), G = d.css(r, "left"), Z = (ce === "absolute" || ce === "fixed") && (x + G).indexOf("auto") > -1, Z ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(G) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + w), "using" in s ? s.using.call(r, ne) : Ce.css(ne)
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
                    if (m(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(Y.pixelPosition, function(u, p) {
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
                    return g(this, function(G, Z, ce) {
                        var Ce;
                        return m(G) ? p.indexOf("outer") === 0 ? G["inner" + r] : G.document.documentElement["client" + r] : G.nodeType === 9 ? (Ce = G.documentElement, Math.max(G.body["scroll" + r], Ce["scroll" + r], G.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : ce === void 0 ? d.css(G, Z, z) : d.style(G, Z, ce, z)
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
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = K, d.isFunction = re, d.isWindow = m, d.camelCase = V, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
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
const le = Na.exports;
var at = {};
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
            v = Array.prototype.slice;
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
                        return function(k) {
                            return i[l](this[g], k)
                        };
                    case 3:
                        return function(k, O) {
                            return i[l](this[g], I(k, this), O)
                        };
                    case 4:
                        return function(k, O, L) {
                            return i[l](this[g], I(k, this), O, L)
                        };
                    default:
                        return function() {
                            var k = v.call(arguments);
                            return k.unshift(this[g]), i[l].apply(i, k)
                        }
                }
            },
            S = function(E, l, g) {
                i.each(l, function(k, O) {
                    i[O] && (E.prototype[O] = _(k, O, g))
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
            $ = n.Events = {},
            J = /\s+/,
            ie = function(E, l, g, k, O) {
                var L = 0,
                    V;
                if (g && typeof g == "object")
                    for (k !== void 0 && ("context" in O) && O.context === void 0 && (O.context = k), V = i.keys(g); L < V.length; L++) l = ie(E, l, V[L], g[V[L]], O);
                else if (g && J.test(g))
                    for (V = g.split(J); L < V.length; L++) l = E(l, V[L], k, O);
                else l = E(l, g, k, O);
                return l
            };
        $.on = function(E, l, g) {
            return Y(this, E, l, g)
        };
        var Y = function(E, l, g, k, O) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: k,
                    ctx: E,
                    listening: O
                }), O) {
                var L = E._listeners || (E._listeners = {});
                L[O.id] = O
            }
            return E
        };
        $.listenTo = function(E, l, g) {
            if (!E) return this;
            var k = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                L = O[k];
            if (!L) {
                var V = this._listenId || (this._listenId = i.uniqueId("l"));
                L = O[k] = {
                    obj: E,
                    objId: k,
                    id: V,
                    listeningTo: O,
                    count: 0
                }
            }
            return Y(E, l, g, this, L), this
        };
        var re = function(E, l, g, k) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    L = k.context,
                    V = k.ctx,
                    te = k.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: L,
                    ctx: L || V,
                    listening: te
                })
            }
            return E
        };
        $.off = function(E, l, g) {
            return this._events ? (this._events = ie(m, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, $.stopListening = function(E, l, g) {
            var k = this._listeningTo;
            if (!k) return this;
            for (var O = E ? [E._listenId] : i.keys(k), L = 0; L < O.length; L++) {
                var V = k[O[L]];
                if (!V) break;
                V.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, k) {
            if (!!E) {
                var O = 0,
                    L, V = k.context,
                    te = k.listeners;
                if (!l && !g && !V) {
                    for (var Se = i.keys(te); O < Se.length; O++) L = te[Se[O]], delete te[L.id], delete L.listeningTo[L.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(E); O < de.length; O++) {
                    l = de[O];
                    var De = E[l];
                    if (!De) break;
                    for (var Me = [], it = 0; it < De.length; it++) {
                        var Ct = De[it];
                        g && g !== Ct.callback && g !== Ct.callback._callback || V && V !== Ct.context ? Me.push(Ct) : (L = Ct.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                    }
                    Me.length ? E[l] = Me : delete E[l]
                }
                return E
            }
        };
        $.once = function(E, l, g) {
            var k = ie(P, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(k, l, g)
        }, $.listenToOnce = function(E, l, g) {
            var k = ie(P, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, k)
        };
        var P = function(E, l, g, k) {
            if (g) {
                var O = E[l] = i.once(function() {
                    k(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        $.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), k = 0; k < l; k++) g[k] = arguments[k + 1];
            return ie(W, this._events, E, void 0, g), this
        };
        var W = function(E, l, g, k) {
                if (E) {
                    var O = E[l],
                        L = E.all;
                    O && L && (L = L.slice()), O && ae(O, k), L && ae(L, [l].concat(k))
                }
                return E
            },
            ae = function(E, l) {
                var g, k = -1,
                    O = E.length,
                    L = l[0],
                    V = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++k < O;)(g = E[k]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++k < O;)(g = E[k]).callback.call(g.ctx, L);
                        return;
                    case 2:
                        for (; ++k < O;)(g = E[k]).callback.call(g.ctx, L, V);
                        return;
                    case 3:
                        for (; ++k < O;)(g = E[k]).callback.call(g.ctx, L, V, te);
                        return;
                    default:
                        for (; ++k < O;)(g = E[k]).callback.apply(g.ctx, l);
                        return
                }
            };
        $.bind = $.on, $.unbind = $.off, i.extend(n, $);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var k = i.result(this, "defaults");
            g = i.defaults(i.extend({}, k, g), k), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, $, {
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
                var k;
                if (typeof E == "object" ? (k = E, g = l) : (k = {})[E] = l, g || (g = {}), !this._validate(k, g)) return !1;
                var O = g.unset,
                    L = g.silent,
                    V = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    de = this.changed,
                    De = this._previousAttributes;
                for (var Me in k) l = k[Me], i.isEqual(Se[Me], l) || V.push(Me), i.isEqual(De[Me], l) ? delete de[Me] : de[Me] = l, O ? delete Se[Me] : Se[Me] = l;
                if (this.idAttribute in k && (this.id = this.get(this.idAttribute)), !L) {
                    V.length && (this._pending = g);
                    for (var it = 0; it < V.length; it++) this.trigger("change:" + V[it], this, Se[V[it]], g)
                }
                if (te) return this;
                if (!L)
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
                for (var k in E) {
                    var O = E[k];
                    i.isEqual(l[k], O) || (g[k] = O)
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
                return E.success = function(k) {
                    var O = E.parse ? l.parse(k, E) : k;
                    if (!l.set(O, E)) return !1;
                    g && g.call(E.context, l, k, E), l.trigger("sync", l, k, E)
                }, Ht(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var k;
                E == null || typeof E == "object" ? (k = E, g = l) : (k = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var O = g.wait;
                if (k && !O) {
                    if (!this.set(k, g)) return !1
                } else if (!this._validate(k, g)) return !1;
                var L = this,
                    V = g.success,
                    te = this.attributes;
                g.success = function(De) {
                    L.attributes = te;
                    var Me = g.parse ? L.parse(De, g) : De;
                    if (O && (Me = i.extend({}, k, Me)), Me && !L.set(Me, g)) return !1;
                    V && V.call(g.context, L, De, g), L.trigger("sync", L, De, g)
                }, Ht(this, g), k && O && (this.attributes = i.extend({}, te, k));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = k);
                var de = this.sync(Se, this, g);
                return this.attributes = te, de
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    k = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(V) {
                    k && O(), g && g.call(E.context, l, V, E), l.isNew() || l.trigger("sync", l, V, E)
                };
                var L = !1;
                return this.isNew() ? i.defer(E.success) : (Ht(this, E), L = this.sync("delete", this, E)), k || O(), L
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
        S(se, ye, "attributes");
        var d = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
                    silent: !0
                }, l))
            },
            ke = {
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
                var k = Array(E.length - g),
                    O = l.length,
                    L;
                for (L = 0; L < k.length; L++) k[L] = E[L + g];
                for (L = 0; L < O; L++) E[L + g] = l[L];
                for (L = 0; L < k.length; L++) E[L + O + g] = k[L]
            };
        i.extend(d.prototype, $, {
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
                var k = this._removeModels(E, l);
                return !l.silent && k.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: k
                }, this.trigger("update", this, l)), g ? k[0] : k
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, ke, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var k = l.at;
                    k != null && (k = +k), k > this.length && (k = this.length), k < 0 && (k += this.length + 1);
                    var O = [],
                        L = [],
                        V = [],
                        te = [],
                        Se = {},
                        de = l.add,
                        De = l.merge,
                        Me = l.remove,
                        it = !1,
                        Ct = this.comparator && k == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Jt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Jt = bt.parse(Jt, l)), bt.set(Jt, l), V.push(bt), Ct && !it && (it = bt.hasChanged(rn))
                            }
                            Se[bt.cid] || (Se[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else de && (ct = E[yt] = this._prepareModel(ct, l), ct && (L.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, O.push(ct)))
                    }
                    if (Me) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Lt = !Ct && de && Me;
                    if (O.length && Lt ? (Je = this.length !== O.length || i.some(this.models, function(F, N) {
                            return F !== O[N]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : L.length && (Ct && (it = !0), Pe(this.models, L, k == null ? this.length : k), this.length = this.models.length), it && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < L.length; yt++) k != null && (l.index = k + yt), ct = L[yt], ct.trigger("add", ct, this, l);
                        (it || Je) && this.trigger("sort", this, l), (L.length || te.length || V.length) && (l.changes = {
                            added: L,
                            removed: te,
                            merged: V
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
                return v.apply(this.models, arguments)
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
                return E.success = function(k) {
                    var O = E.reset ? "reset" : "set";
                    g[O](k, E), l && l.call(E.context, g, k, E), g.trigger("sync", g, k, E)
                }, Ht(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var k = this,
                    O = l.success;
                return l.success = function(L, V, te) {
                    g && k.add(L, te), O && O.call(te.context, L, V, te)
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
                for (var g = [], k = 0; k < E.length; k++) {
                    var O = this.get(E[k]);
                    if (!!O) {
                        var L = this.indexOf(O);
                        this.models.splice(L, 1), this.length--, delete this._byId[O.cid];
                        var V = this.modelId(O.attributes);
                        V != null && delete this._byId[V], l.silent || (l.index = L, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
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
            _onModelEvent: function(E, l, g, k) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, k), E === "change") {
                        var O = this.modelId(l.previousAttributes()),
                            L = this.modelId(l.attributes);
                        O !== L && (O != null && delete this._byId[O], L != null && (this._byId[L] = l))
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
        S(d, lt, "models");
        var Be = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, je)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            K = /^(\S+)\s*(.*)$/,
            je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, $, {
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
                        var k = l.match(K);
                        this.delegate(k[1], k[2], i.bind(g, this))
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
            var k = U[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: k,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || Bt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (k === "PUT" || k === "DELETE" || k === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = k);
                var L = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", k), L) return L.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var V = g.error;
            g.error = function(Se, de, De) {
                g.textStatus = de, g.errorThrown = De, V && V.call(g.context, Se, de, De)
            };
            var te = g.xhr = n.ajax(i.extend(O, g));
            return l.trigger("request", l, te, g), te
        };
        var U = {
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
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, $, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var k = this;
                return n.history.route(E, function(O) {
                    var L = k._extractParameters(E, O);
                    k.execute(g, L, l) !== !1 && (k.trigger.apply(k, ["route:" + l].concat(L)), k.trigger("route", l, L), n.history.trigger("route", k, l, L))
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
                return E = E.replace(he, "\\$&").replace(Ae, "(?:$1)?").replace(be, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(k, O) {
                    return O === g.length - 1 ? k || null : k ? decodeURIComponent(k) : null
                })
            }
        });
        var _e = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Ke = /#.*$/;
        _e.started = !1, i.extend(_e.prototype, $, {
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
                if (_e.started) throw new Error("Backbone.history has already been started");
                if (_e.started = !0, this.options = i.extend({
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
                        k = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    k.document.open(), k.document.close(), k.location.hash = "#" + this.fragment
                }
                var O = window.addEventListener || function(L, V) {
                    return attachEvent("on" + L, V)
                };
                if (this._usePushState ? O("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? O("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), _e.started = !1
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
                if (!_e.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var k = g + E;
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, k);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var O = this.iframe.contentWindow;
                            l.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, E, l.replace)
                        }
                    } else return this.location.assign(k);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var k = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(k + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new _e;
        var dt = function(E, l) {
            var g = this,
                k;
            return E && i.has(E, "constructor") ? k = E.constructor : k = function() {
                return g.apply(this, arguments)
            }, i.extend(k, g, l), k.prototype = i.create(g.prototype, E), k.prototype.constructor = k, k.__super__ = g.prototype, k
        };
        se.extend = d.extend = oe.extend = Be.extend = _e.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Ht = function(E, l) {
                var g = l.error;
                l.error = function(k) {
                    g && g.call(l.context, E, k, l), E.trigger("error", E, k, l)
                }
            };
        return n
    })
})(at);
var wc = {
        exports: {}
    },
    Jo = {
        exports: {}
    },
    pl;

function mh() {
    return pl || (pl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Pi.exports, at)
        })(vt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
                    return typeof m
                } : function(m) {
                    return m && typeof Symbol == "function" && m.constructor === Symbol ? "symbol" : typeof m
                },
                f = i.Radio,
                v = i.Radio = {};
            v.VERSION = "2.0.0", v.noConflict = function() {
                return i.Radio = f, this
            }, v.DEBUG = !1, v._debugText = function(m, P, W) {
                return m + (W ? " on the " + W + " channel" : "") + ': "' + P + '"'
            }, v.debugLog = function(m, P, W) {
                v.DEBUG && console && console.warn && console.warn(v._debugText(m, P, W))
            };
            var _ = /\s+/;
            v._eventsApi = function(m, P, W, ae) {
                if (!W) return !1;
                var se = {};
                if ((typeof W > "u" ? "undefined" : a(W)) === "object") {
                    for (var ye in W) {
                        var d = m[P].apply(m, [ye, W[ye]].concat(ae));
                        _.test(ye) ? n.extend(se, d) : se[ye] = d
                    }
                    return se
                }
                if (_.test(W)) {
                    for (var ke = W.split(_), Oe = 0, Pe = ke.length; Oe < Pe; Oe++) se[ke[Oe]] = m[P].apply(m, [ke[Oe]].concat(ae));
                    return se
                }
                return !1
            }, v._callHandler = function(m, P, W) {
                var ae = W[0],
                    se = W[1],
                    ye = W[2];
                switch (W.length) {
                    case 0:
                        return m.call(P);
                    case 1:
                        return m.call(P, ae);
                    case 2:
                        return m.call(P, ae, se);
                    case 3:
                        return m.call(P, ae, se, ye);
                    default:
                        return m.apply(P, W)
                }
            };

            function S(m, P, W, ae) {
                var se = m[P];
                if ((!W || W === se.callback || W === se.callback._callback) && (!ae || ae === se.context)) return delete m[P], !0
            }

            function I(m, P, W, ae) {
                m || (m = {});
                for (var se = P ? [P] : n.keys(m), ye = !1, d = 0, ke = se.length; d < ke; d++) P = se[d], !!m[P] && S(m, P, W, ae) && (ye = !0);
                return ye
            }
            var D = {};

            function $(m) {
                return D[m] || (D[m] = n.bind(v.log, v, m))
            }
            n.extend(v, {
                log: function(P, W) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + W + '"', ae)
                    }
                },
                tuneIn: function(P) {
                    var W = v.channel(P);
                    return W._tunedIn = !0, W.on("all", $(P)), this
                },
                tuneOut: function(P) {
                    var W = v.channel(P);
                    return W._tunedIn = !1, W.off("all", $(P)), delete D[P], this
                }
            });

            function J(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            v.Requests = {
                request: function(P) {
                    var W = n.toArray(arguments).slice(1),
                        ae = v._eventsApi(this, "request", P, W);
                    if (ae) return ae;
                    var se = this.channelName,
                        ye = this._requests;
                    if (se && this._tunedIn && v.log.apply(this, [se, P].concat(W)), ye && (ye[P] || ye.default)) {
                        var d = ye[P] || ye.default;
                        return W = ye[P] ? W : arguments, v._callHandler(d.callback, d.context, W)
                    } else v.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, W, ae) {
                    return v._eventsApi(this, "reply", P, [W, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && v.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(W),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, W, ae) {
                    if (v._eventsApi(this, "replyOnce", P, [W, ae])) return this;
                    var se = this,
                        ye = n.once(function() {
                            return se.stopReplying(P), J(W).apply(this, arguments)
                        });
                    return this.reply(P, ye, ae)
                },
                stopReplying: function(P, W, ae) {
                    return v._eventsApi(this, "stopReplying", P) ? this : (!P && !W && !ae ? delete this._requests : I(this._requests, P, W, ae) || v.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
                }
            }, v._channels = {}, v.channel = function(m) {
                if (!m) throw new Error("You must provide a name for the channel.");
                return v._channels[m] ? v._channels[m] : v._channels[m] = new v.Channel(m)
            }, v.Channel = function(m) {
                this.channelName = m
            }, n.extend(v.Channel.prototype, i.Events, v.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ie, Y, re = [i.Events, v.Requests];
            return n.each(re, function(m) {
                n.each(m, function(P, W) {
                    v[W] = function(ae) {
                        return Y = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[W].apply(ie, Y)
                    }
                })
            }), v.reset = function(m) {
                var P = m ? [this._channels[m]] : this._channels;
                n.each(P, function(W) {
                    W.reset()
                })
            }, v
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
        t.exports = i(at, Pi.exports, mh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            v = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    return o.apply(C, Q)
                }
            },
            _ = n.Model.extend,
            S = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        S._console = typeof console < "u" ? console : {}, S._warn = function() {
            var y = S._console.warn || S._console.log || i.noop;
            return y.apply(S._console, arguments)
        }, S._cache = {};
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
            $ = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            J = function(o) {
                var C = this;
                return i.reduce(o, function(A, Q, xe) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (A[xe] = Q), A
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function Y(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, Y)
        });

        function m(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                xe = $.call(this, Q),
                We = void 0;
            return i.isFunction(xe) && (We = xe.apply(this, C)), this.trigger.apply(this, arguments), We
        }

        function P(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : m.apply(y, C)
        }

        function W(y, o, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(A) {
                !C(A) || P(A, o, A)
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

        function ke(y) {
            y._isAttached && y._isRendered && P(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && P(y, "dom:remove", y)
        }

        function Pe() {
            W(this, "before:attach", ae)
        }

        function lt() {
            W(this, "attach", se), ke(this)
        }

        function Be() {
            W(this, "before:detach", ye), Oe(this)
        }

        function K() {
            W(this, "detach", d)
        }

        function je() {
            Oe(this)
        }

        function U() {
            ke(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Be,
                detach: K,
                "before:render": je,
                render: U
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
            xe.length > 1 && S("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(We) {
                var It = y[We];
                if (!It) throw new be('Method "' + We + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
            })
        }

        function he(y, o, C, A) {
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

        function _e(y, o) {
            return !y || !o ? this : (he(this, y, o, "listenTo"), this)
        }

        function Te(y, o) {
            return y ? o ? (he(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = J.call(y, C);
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
            Ht = {
                normalizeMethods: J,
                _setOptions: Bt,
                mergeOptions: D,
                getOption: $,
                bindEvents: _e,
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
                bindEvents: _e,
                unbindEvents: Te,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = _, i.extend(g.prototype, n.Events, Ht, E, {
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
            triggerMethod: m
        });
        var k = function(o) {
            this.templateId = o
        };
        i.extend(k, {
            templateCaches: {},
            get: function(o, C) {
                var A = this.templateCaches[o];
                return A || (A = new k(o), this.templateCaches[o] = A), A.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                var xe = A.length;
                if (xe > 0)
                    for (o = 0; o < xe; o++) delete this.templateCaches[A[o]];
                else this.templateCaches = {}
            }
        }), i.extend(k.prototype, {
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

        function L(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function V(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = L(C, A),
                    xe = C === Q ? {} : C,
                    We = new Q(xe, y),
                    It = V(y, i.result(We, "behaviors"));
                return [We].concat(It)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? V(this, o) : {}
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
                    for (var o = this._behaviors, C = 0, A = o && o.length; C < A; C++) m.apply(o[C], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    A && (Te.call(this, o, A), _e.call(this, o, A));
                    var Q = i.result(this, "collectionEvents");
                    Q && (Te.call(this, C, Q), _e.call(this, C, Q))
                },
                _undelegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    Te.call(this, o, A);
                    var Q = i.result(this, "collectionEvents");
                    Te.call(this, C, Q)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            De = function(o, C) {
                var A = o.match(de);
                return A[1] + "." + C + " " + A[2]
            },
            Me = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function it(y) {
            return !!Me[y]
        }

        function Ct(y, o) {
            return Me[y] = o
        }

        function rn(y, o) {
            i.isString(o) && (o = {
                event: o
            });
            var C = o.event,
                A = !!o.preventDefault;
            it("triggersPreventDefault") && (A = o.preventDefault !== !1);
            var Q = !!o.stopPropagation;
            return it("triggersStopPropagation") && (Q = o.stopPropagation !== !1),
                function(xe) {
                    A && xe.preventDefault(), Q && xe.stopPropagation(), y.triggerMethod(C, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Q, xe, We) {
                        return We = De(We, "trig" + A.cid), Q[We] = rn(o, xe), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, xe) {
                    var We = bt(xe, C);
                    return A[We] = Q, A
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Jt = function y(o, C, A) {
                return i.each(o, function(Q, xe) {
                    i.isString(Q) ? o[xe] = bt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(We) {
                        var It = Q[We];
                        i.isString(It) && (Q[We] = bt(It, C))
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

        function Lt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function F(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var N = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(o) {
                    return Lt(o)
                },
                findEl: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    return A.find(C)
                },
                hasEl: function(o, C) {
                    return o.contains(C && C.parentNode)
                },
                detachEl: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
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
                                We = C.nextSibling;
                            A.insertBefore(C, xe), Q.insertBefore(o, We)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = A._$el,
                        xe = Q === void 0 ? Lt(o) : Q,
                        We = A._$contents,
                        It = We === void 0 ? Lt(C) : We;
                    xe.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
                    C.contents().detach()
                }
            },
            q = {
                Dom: N,
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
                    return it("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var o = m.apply(this, arguments);
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
                    var We = this._childViewTriggers;
                    We && i.isString(We[o]) && this.triggerMethod.apply(this, [We[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Xt = It + ":" + o;
                        this.triggerMethod.apply(this, [Xt].concat(Q))
                    }
                }
            };
        i.extend(q, te, Ht, Se, ct, Je);

        function M(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function H(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || P(y, "before:destroy", y);
            var o = y._isAttached && !y._shouldDisableEvents;
            o && P(y, "before:detach", y), y.remove(), o && (y._isAttached = !1, P(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || P(y, "destroy", y)
        }
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = g.extend({
                Dom: N,
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
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, M(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
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
                    A && P(o, "before:attach", o), Q ? this._replaceEl(o) : this.attachHtml(o), A && (o._isAttached = !0, P(o, "attach", o))
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
                    return A || S("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, A), this
                },
                _empty: function(o, C) {
                    o.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, o), this._restoreEl(), delete this.currentView, o._isDestroyed || (C ? this.removeView(o) : this._detachView(o), this._stopChildViewEvents(o)), this.triggerMethod("empty", this, o)
                },
                _stopChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(o)
                },
                destroyView: function(o) {
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), H(o)), o
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
                    C && P(o, "before:detach", o), A ? this.Dom.replaceEl(this.el, o.el) : this.detachHtml(), C && (o._isAttached = !1, P(o, "detach", o))
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
                setDomApi: F
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
            if (i.isObject(y)) return y.selector && S("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(C, {
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
        var Ft = {
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
                    return i.reduce(o, function(Q, xe, We) {
                        return Q[We] = Ne(xe, A), C._addRegion(Q[We], We), Q
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
                    for (var A = this.getRegion(o), Q = arguments.length, xe = Array(Q > 2 ? Q - 2 : 0), We = 2; We < Q; We++) xe[We - 2] = arguments[We];
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
                    var A = i.isFunction(o) ? o : k.get(o);
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
                        S("template:false is deprecated.  Use _.noop.");
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
                setDomApi: F
            });
        i.extend(Pn.prototype, q, Ft);
        var rt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(rt, function(A) {
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
        var _r = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            Sn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, _r), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                        P(A, "before:attach", A)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(A) {
                        A._isAttached = !0, P(A, "attach", A)
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
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, H(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
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
                        We = Q && xe && !A;
                    if (We) {
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
                    i.each(o, function(We, It) {
                        var Xt = !A.children.findByModel(We);
                        Xt && A._onCollectionAdd(We, A.collection, {
                            at: It
                        }), Q[We.cid] = !0
                    });
                    var xe = i.filter(C, function(We) {
                        return !Q[We.cid] && A.children.findByModel(We)
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
                            We = i.reduce(this.children._views, function(Xt, Un) {
                                var Nn = i.indexOf(A, Un.model);
                                return Nn === -1 ? (xe.push(Un.model), Xt) : (Un._index = Nn, Xt[Nn] = Un.el, Xt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(We, function(Xt) {
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
                            var We = o.children.findByModel(Q);
                            return !We || We._index !== xe
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
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, C), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), M(o), this._attachView(o, C), this.triggerMethod("add:child", this, o), o
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
                    A && P(o, "before:attach", o), this.attachHtml(this, o, C), A && (o._isAttached = !0, P(o, "attach", o))
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
                setDomApi: F
            });
        i.extend(Sn.prototype, q);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function Sr(y, o) {
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
                return typeof o == "string" ? (o = i.partial(Sr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
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
                    return i.each(this.children._views, function(We, It, Xt) {
                        (C.call(o, We, It, Xt) ? Q : xe).push(We)
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
                    C && P(o, "before:detach", o), this.detachHtml(o), C && (o._isAttached = !1, P(o, "detach", o))
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
                        Q._isAttached || P(Q, "before:attach", Q)
                    }), this.attachHtml(o), i.each(C, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, P(Q, "attach", Q))
                    })
                },
                _getBuffer: function(o) {
                    var C = this,
                        A = this.Dom.createBuffer();
                    return i.each(o, function(Q) {
                        M(Q), C.Dom.appendContents(A, Q.el, {
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
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, H(o))
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
                setDomApi: F
            });
        i.extend(mi.prototype, q);
        var $i = ["childViewContainer", "template", "templateContext"],
            vi = Sn.extend({
                constructor: function(o) {
                    S("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, $i), Sn.prototype.constructor.apply(this, arguments)
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
                    (this._isRendered || this._isRendering) && Sn.prototype._renderChildren.call(this)
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
        var Fi = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            ji = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && S("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, Fi), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
        i.extend(ji.prototype, Se, ct, Je);
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
            Gn = n.Router.extend({
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
                triggerMethod: m
            });
        i.extend(Gn.prototype, Ht);

        function Gi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var bi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = bi, this
        }, Ze.bindEvents = v(_e), Ze.unbindEvents = v(Te), Ze.bindRequests = v(Ke), Ze.unbindRequests = v(dt), Ze.mergeOptions = v(D), Ze.getOption = v($), Ze.normalizeMethods = v(J), Ze.extend = _, Ze.isNodeAttached = I, Ze.deprecate = S, Ze.triggerMethod = v(m), Ze.triggerMethodOn = P, Ze.isEnabled = it, Ze.setEnabled = Ct, Ze.monitorViewEvents = oe, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Gi, Ze.Application = zi, Ze.AppRouter = Gn, Ze.Renderer = Ye, Ze.TemplateCache = k, Ze.View = Pn, Ze.CollectionView = Sn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = ji, Ze.Region = ge, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Me, Ze.VERSION = f, Ze.DomApi = N, Ze.setDomApi = function(y) {
            Sn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), ge.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(wc);
const Et = wc.exports;
class vh {
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

function yh() {
    this.__data__ = [], this.size = 0
}
var wh = yh;

function bh(t, e) {
    return t === e || t !== t && e !== e
}
var ao = bh,
    Ch = ao;

function xh(t, e) {
    for (var n = t.length; n--;)
        if (Ch(t[n][0], e)) return n;
    return -1
}
var lo = xh,
    Eh = lo,
    kh = Array.prototype,
    _h = kh.splice;

function Sh(t) {
    var e = this.__data__,
        n = Eh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : _h.call(e, n, 1), --this.size, !0
}
var Th = Sh,
    Ah = lo;

function Oh(t) {
    var e = this.__data__,
        n = Ah(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Rh = Oh,
    Ih = lo;

function Dh(t) {
    return Ih(this.__data__, t) > -1
}
var Mh = Dh,
    Lh = lo;

function Ph(t, e) {
    var n = this.__data__,
        i = Lh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Nh = Ph,
    Vh = wh,
    Bh = Th,
    $h = Rh,
    Fh = Mh,
    jh = Nh;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Vh;
wr.prototype.delete = Bh;
wr.prototype.get = $h;
wr.prototype.has = Fh;
wr.prototype.set = jh;
var co = wr,
    zh = co;

function Gh() {
    this.__data__ = new zh, this.size = 0
}
var Uh = Gh;

function Hh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Wh = Hh;

function qh(t) {
    return this.__data__.get(t)
}
var Xh = qh;

function Yh(t) {
    return this.__data__.has(t)
}
var Kh = Yh,
    Jh = typeof vt == "object" && vt && vt.Object === Object && vt,
    bc = Jh,
    Qh = bc,
    Zh = typeof self == "object" && self && self.Object === Object && self,
    ed = Qh || Zh || Function("return this")(),
    br = ed,
    td = br,
    nd = td.Symbol,
    Cc = nd,
    gl = Cc,
    xc = Object.prototype,
    id = xc.hasOwnProperty,
    rd = xc.toString,
    Xr = gl ? gl.toStringTag : void 0;

function sd(t) {
    var e = id.call(t, Xr),
        n = t[Xr];
    try {
        t[Xr] = void 0;
        var i = !0
    } catch {}
    var a = rd.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), a
}
var od = sd,
    ad = Object.prototype,
    ld = ad.toString;

function cd(t) {
    return ld.call(t)
}
var ud = cd,
    ml = Cc,
    hd = od,
    dd = ud,
    fd = "[object Null]",
    pd = "[object Undefined]",
    vl = ml ? ml.toStringTag : void 0;

function gd(t) {
    return t == null ? t === void 0 ? pd : fd : vl && vl in Object(t) ? hd(t) : dd(t)
}
var uo = gd;

function md(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Vi = md,
    vd = uo,
    yd = Vi,
    wd = "[object AsyncFunction]",
    bd = "[object Function]",
    Cd = "[object GeneratorFunction]",
    xd = "[object Proxy]";

function Ed(t) {
    if (!yd(t)) return !1;
    var e = vd(t);
    return e == bd || e == Cd || e == wd || e == xd
}
var Va = Ed,
    kd = br,
    _d = kd["__core-js_shared__"],
    Sd = _d,
    Qo = Sd,
    yl = function() {
        var t = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Td(t) {
    return !!yl && yl in t
}
var Ad = Td,
    Od = Function.prototype,
    Rd = Od.toString;

function Id(t) {
    if (t != null) {
        try {
            return Rd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Dd = Id,
    Md = Va,
    Ld = Ad,
    Pd = Vi,
    Nd = Dd,
    Vd = /[\\^$.*+?()[\]{}|]/g,
    Bd = /^\[object .+?Constructor\]$/,
    $d = Function.prototype,
    Fd = Object.prototype,
    jd = $d.toString,
    zd = Fd.hasOwnProperty,
    Gd = RegExp("^" + jd.call(zd).replace(Vd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ud(t) {
    if (!Pd(t) || Ld(t)) return !1;
    var e = Md(t) ? Gd : Bd;
    return e.test(Nd(t))
}
var Hd = Ud;

function Wd(t, e) {
    return t == null ? void 0 : t[e]
}
var qd = Wd,
    Xd = Hd,
    Yd = qd;

function Kd(t, e) {
    var n = Yd(t, e);
    return Xd(n) ? n : void 0
}
var Ba = Kd,
    Jd = Ba,
    Qd = br,
    Zd = Jd(Qd, "Map"),
    Ec = Zd,
    ef = Ba,
    tf = ef(Object, "create"),
    ho = tf,
    wl = ho;

function nf() {
    this.__data__ = wl ? wl(null) : {}, this.size = 0
}
var rf = nf;

function sf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var of = sf, af = ho, lf = "__lodash_hash_undefined__", cf = Object.prototype, uf = cf.hasOwnProperty;

function hf(t) {
    var e = this.__data__;
    if (af) {
        var n = e[t];
        return n === lf ? void 0 : n
    }
    return uf.call(e, t) ? e[t] : void 0
}
var df = hf,
    ff = ho,
    pf = Object.prototype,
    gf = pf.hasOwnProperty;

function mf(t) {
    var e = this.__data__;
    return ff ? e[t] !== void 0 : gf.call(e, t)
}
var vf = mf,
    yf = ho,
    wf = "__lodash_hash_undefined__";

function bf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = yf && e === void 0 ? wf : e, this
}
var Cf = bf,
    xf = rf,
    Ef = of,
    kf = df,
    _f = vf,
    Sf = Cf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = xf;
Cr.prototype.delete = Ef;
Cr.prototype.get = kf;
Cr.prototype.has = _f;
Cr.prototype.set = Sf;
var Tf = Cr,
    bl = Tf,
    Af = co,
    Of = Ec;

function Rf() {
    this.size = 0, this.__data__ = {
        hash: new bl,
        map: new(Of || Af),
        string: new bl
    }
}
var If = Rf;

function Df(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Mf = Df,
    Lf = Mf;

function Pf(t, e) {
    var n = t.__data__;
    return Lf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Pf,
    Nf = fo;

function Vf(t) {
    var e = Nf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Bf = Vf,
    $f = fo;

function Ff(t) {
    return $f(this, t).get(t)
}
var jf = Ff,
    zf = fo;

function Gf(t) {
    return zf(this, t).has(t)
}
var Uf = Gf,
    Hf = fo;

function Wf(t, e) {
    var n = Hf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var qf = Wf,
    Xf = If,
    Yf = Bf,
    Kf = jf,
    Jf = Uf,
    Qf = qf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = Xf;
xr.prototype.delete = Yf;
xr.prototype.get = Kf;
xr.prototype.has = Jf;
xr.prototype.set = Qf;
var Zf = xr,
    ep = co,
    tp = Ec,
    np = Zf,
    ip = 200;

function rp(t, e) {
    var n = this.__data__;
    if (n instanceof ep) {
        var i = n.__data__;
        if (!tp || i.length < ip - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new np(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var sp = rp,
    op = co,
    ap = Uh,
    lp = Wh,
    cp = Xh,
    up = Kh,
    hp = sp;

function Er(t) {
    var e = this.__data__ = new op(t);
    this.size = e.size
}
Er.prototype.clear = ap;
Er.prototype.delete = lp;
Er.prototype.get = cp;
Er.prototype.has = up;
Er.prototype.set = hp;
var dp = Er,
    fp = Ba,
    pp = function() {
        try {
            var t = fp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    kc = pp,
    Cl = kc;

function gp(t, e, n) {
    e == "__proto__" && Cl ? Cl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var $a = gp,
    mp = $a,
    vp = ao;

function yp(t, e, n) {
    (n !== void 0 && !vp(t[e], n) || n === void 0 && !(e in t)) && mp(t, e, n)
}
var _c = yp;

function wp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), v = i(e), _ = v.length; _--;) {
            var S = v[t ? _ : ++a];
            if (n(f[S], S, f) === !1) break
        }
        return e
    }
}
var bp = wp,
    Cp = bp,
    xp = Cp(),
    Ep = xp,
    ba = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f ? n.Buffer : void 0,
        _ = v ? v.allocUnsafe : void 0;

    function S(I, D) {
        if (D) return I.slice();
        var $ = I.length,
            J = _ ? _($) : new I.constructor($);
        return I.copy(J), J
    }
    t.exports = S
})(ba, ba.exports);
var kp = br,
    _p = kp.Uint8Array,
    Sp = _p,
    xl = Sp;

function Tp(t) {
    var e = new t.constructor(t.byteLength);
    return new xl(e).set(new xl(t)), e
}
var Ap = Tp,
    Op = Ap;

function Rp(t, e) {
    var n = e ? Op(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Ip = Rp;

function Dp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Mp = Dp,
    Lp = Vi,
    El = Object.create,
    Pp = function() {
        function t() {}
        return function(e) {
            if (!Lp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Np = Pp;

function Vp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Bp = Vp,
    $p = Bp,
    Fp = $p(Object.getPrototypeOf, Object),
    Sc = Fp,
    jp = Object.prototype;

function zp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || jp;
    return t === n
}
var Tc = zp,
    Gp = Np,
    Up = Sc,
    Hp = Tc;

function Wp(t) {
    return typeof t.constructor == "function" && !Hp(t) ? Gp(Up(t)) : {}
}
var qp = Wp;

function Xp(t) {
    return t != null && typeof t == "object"
}
var us = Xp,
    Yp = uo,
    Kp = us,
    Jp = "[object Arguments]";

function Qp(t) {
    return Kp(t) && Yp(t) == Jp
}
var Zp = Qp,
    kl = Zp,
    eg = us,
    Ac = Object.prototype,
    tg = Ac.hasOwnProperty,
    ng = Ac.propertyIsEnumerable,
    ig = kl(function() {
        return arguments
    }()) ? kl : function(t) {
        return eg(t) && tg.call(t, "callee") && !ng.call(t, "callee")
    },
    Oc = ig,
    rg = Array.isArray,
    Rc = rg,
    sg = 9007199254740991;

function og(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= sg
}
var Ic = og,
    ag = Va,
    lg = Ic;

function cg(t) {
    return t != null && lg(t.length) && !ag(t)
}
var Fa = cg,
    ug = Fa,
    hg = us;

function dg(t) {
    return hg(t) && ug(t)
}
var fg = dg,
    Ks = {
        exports: {}
    };

function pg() {
    return !1
}
var gg = pg;
(function(t, e) {
    var n = br,
        i = gg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        v = f && f.exports === a,
        _ = v ? n.Buffer : void 0,
        S = _ ? _.isBuffer : void 0,
        I = S || i;
    t.exports = I
})(Ks, Ks.exports);
var mg = uo,
    vg = Sc,
    yg = us,
    wg = "[object Object]",
    bg = Function.prototype,
    Cg = Object.prototype,
    Dc = bg.toString,
    xg = Cg.hasOwnProperty,
    Eg = Dc.call(Object);

function kg(t) {
    if (!yg(t) || mg(t) != wg) return !1;
    var e = vg(t);
    if (e === null) return !0;
    var n = xg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Dc.call(n) == Eg
}
var _g = kg,
    Sg = uo,
    Tg = Ic,
    Ag = us,
    Og = "[object Arguments]",
    Rg = "[object Array]",
    Ig = "[object Boolean]",
    Dg = "[object Date]",
    Mg = "[object Error]",
    Lg = "[object Function]",
    Pg = "[object Map]",
    Ng = "[object Number]",
    Vg = "[object Object]",
    Bg = "[object RegExp]",
    $g = "[object Set]",
    Fg = "[object String]",
    jg = "[object WeakMap]",
    zg = "[object ArrayBuffer]",
    Gg = "[object DataView]",
    Ug = "[object Float32Array]",
    Hg = "[object Float64Array]",
    Wg = "[object Int8Array]",
    qg = "[object Int16Array]",
    Xg = "[object Int32Array]",
    Yg = "[object Uint8Array]",
    Kg = "[object Uint8ClampedArray]",
    Jg = "[object Uint16Array]",
    Qg = "[object Uint32Array]",
    Mt = {};
Mt[Ug] = Mt[Hg] = Mt[Wg] = Mt[qg] = Mt[Xg] = Mt[Yg] = Mt[Kg] = Mt[Jg] = Mt[Qg] = !0;
Mt[Og] = Mt[Rg] = Mt[zg] = Mt[Ig] = Mt[Gg] = Mt[Dg] = Mt[Mg] = Mt[Lg] = Mt[Pg] = Mt[Ng] = Mt[Vg] = Mt[Bg] = Mt[$g] = Mt[Fg] = Mt[jg] = !1;

function Zg(t) {
    return Ag(t) && Tg(t.length) && !!Mt[Sg(t)]
}
var em = Zg;

function tm(t) {
    return function(e) {
        return t(e)
    }
}
var nm = tm,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = bc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f && n.process,
        _ = function() {
            try {
                var S = a && a.require && a.require("util").types;
                return S || v && v.binding && v.binding("util")
            } catch {}
        }();
    t.exports = _
})(Ca, Ca.exports);
var im = em,
    rm = nm,
    _l = Ca.exports,
    Sl = _l && _l.isTypedArray,
    sm = Sl ? rm(Sl) : im,
    Mc = sm;

function om(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Lc = om,
    am = $a,
    lm = ao,
    cm = Object.prototype,
    um = cm.hasOwnProperty;

function hm(t, e, n) {
    var i = t[e];
    (!(um.call(t, e) && lm(i, n)) || n === void 0 && !(e in t)) && am(t, e, n)
}
var dm = hm,
    fm = dm,
    pm = $a;

function gm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, v = e.length; ++f < v;) {
        var _ = e[f],
            S = i ? i(n[_], t[_], _, n, t) : void 0;
        S === void 0 && (S = t[_]), a ? pm(n, _, S) : fm(n, _, S)
    }
    return n
}
var mm = gm;

function vm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var ym = vm,
    wm = 9007199254740991,
    bm = /^(?:0|[1-9]\d*)$/;

function Cm(t, e) {
    var n = typeof t;
    return e = e == null ? wm : e, !!e && (n == "number" || n != "symbol" && bm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Pc = Cm,
    xm = ym,
    Em = Oc,
    km = Rc,
    _m = Ks.exports,
    Sm = Pc,
    Tm = Mc,
    Am = Object.prototype,
    Om = Am.hasOwnProperty;

function Rm(t, e) {
    var n = km(t),
        i = !n && Em(t),
        a = !n && !i && _m(t),
        f = !n && !i && !a && Tm(t),
        v = n || i || a || f,
        _ = v ? xm(t.length, String) : [],
        S = _.length;
    for (var I in t)(e || Om.call(t, I)) && !(v && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Sm(I, S))) && _.push(I);
    return _
}
var Im = Rm;

function Dm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Mm = Dm,
    Lm = Vi,
    Pm = Tc,
    Nm = Mm,
    Vm = Object.prototype,
    Bm = Vm.hasOwnProperty;

function $m(t) {
    if (!Lm(t)) return Nm(t);
    var e = Pm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Bm.call(t, i)) || n.push(i);
    return n
}
var Fm = $m,
    jm = Im,
    zm = Fm,
    Gm = Fa;

function Um(t) {
    return Gm(t) ? jm(t, !0) : zm(t)
}
var Nc = Um,
    Hm = mm,
    Wm = Nc;

function qm(t) {
    return Hm(t, Wm(t))
}
var Xm = qm,
    Tl = _c,
    Ym = ba.exports,
    Km = Ip,
    Jm = Mp,
    Qm = qp,
    Al = Oc,
    Ol = Rc,
    Zm = fg,
    ev = Ks.exports,
    tv = Va,
    nv = Vi,
    iv = _g,
    rv = Mc,
    Rl = Lc,
    sv = Xm;

function ov(t, e, n, i, a, f, v) {
    var _ = Rl(t, n),
        S = Rl(e, n),
        I = v.get(S);
    if (I) {
        Tl(t, n, I);
        return
    }
    var D = f ? f(_, S, n + "", t, e, v) : void 0,
        $ = D === void 0;
    if ($) {
        var J = Ol(S),
            ie = !J && ev(S),
            Y = !J && !ie && rv(S);
        D = S, J || ie || Y ? Ol(_) ? D = _ : Zm(_) ? D = Jm(_) : ie ? ($ = !1, D = Ym(S, !0)) : Y ? ($ = !1, D = Km(S, !0)) : D = [] : iv(S) || Al(S) ? (D = _, Al(_) ? D = sv(_) : (!nv(_) || tv(_)) && (D = Qm(S))) : $ = !1
    }
    $ && (v.set(S, D), a(D, S, i, f, v), v.delete(S)), Tl(t, n, D)
}
var av = ov,
    lv = dp,
    cv = _c,
    uv = Ep,
    hv = av,
    dv = Vi,
    fv = Nc,
    pv = Lc;

function Vc(t, e, n, i, a) {
    t !== e && uv(e, function(f, v) {
        if (a || (a = new lv), dv(f)) hv(t, e, v, n, Vc, i, a);
        else {
            var _ = i ? i(pv(t, v), f, v + "", t, e, a) : void 0;
            _ === void 0 && (_ = f), cv(t, v, _)
        }
    }, fv)
}
var gv = Vc;

function mv(t) {
    return t
}
var Bc = mv;

function vv(t, e, n) {
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
var yv = vv,
    wv = yv,
    Il = Math.max;

function bv(t, e, n) {
    return e = Il(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Il(i.length - e, 0), v = Array(f); ++a < f;) v[a] = i[e + a];
            a = -1;
            for (var _ = Array(e + 1); ++a < e;) _[a] = i[a];
            return _[e] = n(v), wv(t, this, _)
        }
}
var Cv = bv;

function xv(t) {
    return function() {
        return t
    }
}
var Ev = xv,
    kv = Ev,
    Dl = kc,
    _v = Bc,
    Sv = Dl ? function(t, e) {
        return Dl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: kv(e),
            writable: !0
        })
    } : _v,
    Tv = Sv,
    Av = 800,
    Ov = 16,
    Rv = Date.now;

function Iv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Rv(),
            a = Ov - (i - n);
        if (n = i, a > 0) {
            if (++e >= Av) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Dv = Iv,
    Mv = Tv,
    Lv = Dv,
    Pv = Lv(Mv),
    Nv = Pv,
    Vv = Bc,
    Bv = Cv,
    $v = Nv;

function Fv(t, e) {
    return $v(Bv(t, e, Vv), t + "")
}
var jv = Fv,
    zv = ao,
    Gv = Fa,
    Uv = Pc,
    Hv = Vi;

function Wv(t, e, n) {
    if (!Hv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Gv(n) && Uv(e, n.length) : i == "string" && e in n) ? zv(n[e], t) : !1
}
var qv = Wv,
    Xv = jv,
    Yv = qv;

function Kv(t) {
    return Xv(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            v = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, v && Yv(n[0], n[1], v) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var _ = n[i];
            _ && t(e, _, i, f)
        }
        return e
    })
}
var Jv = Kv,
    Qv = gv,
    Zv = Jv,
    ey = Zv(function(t, e, n) {
        Qv(t, e, n)
    }),
    ty = ey;
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
        return ty(e[0], ...e)
    }
}
ot(xa, "locale"), ot(xa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
            v = Math.min(Math.max(0, (f >> 16) * n), 255),
            _ = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (f & 255) * n), 255) | _ << 8 | v << 16).toString(16);
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
let qt = fl;
ot(qt, "queryParams", new URLSearchParams(window.location.search)), ot(qt, "getQueryParam", e => fl.queryParams.get(e)), ot(qt, "sleep", e => new Promise(n => {
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
            namespace: (a = (i = qt.getQueryParam("namespace")) != null ? i : qt.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: qt.queryParams.has("incognito") || qt.queryParams.has("nc")
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
        var v;
        const n = e.toLowerCase(),
            i = (v = this.get("tags")) != null ? v : "[]",
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(_ => {
            const S = _.split("-")[0];
            return a !== S
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
ot(en, "defaultNamespace", "tv");
class Ni {
    constructor() {
        ot(this, "artifacts");
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
            v = en.get("galleries") || "[]";
        try {
            const _ = JSON.parse(v) || [];
            if (_.some(S => S.url === f)) return;
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
                const v = new Date(f.time),
                    _ = e.format(v),
                    S = f.url.split("/"),
                    I = S[S.length - 1] === "" ? S[S.length - 2] : S[S.length - 1];
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
        (function(v) {
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

            function S(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (_.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(U) {
                    return U && I.indexOf(Object.prototype.toString.call(U)) > -1
                };

            function $(U) {
                if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                return U.toLowerCase()
            }

            function J(U) {
                return typeof U != "string" && (U = String(U)), U
            }

            function ie(U) {
                var oe = {
                    next: function() {
                        var Ae = U.shift();
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

            function Y(U) {
                this.map = {}, U instanceof Y ? U.forEach(function(oe, Ae) {
                    this.append(Ae, oe)
                }, this) : Array.isArray(U) ? U.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(oe) {
                    this.append(oe, U[oe])
                }, this)
            }
            Y.prototype.append = function(U, oe) {
                U = $(U), oe = J(oe);
                var Ae = this.map[U];
                this.map[U] = Ae ? Ae + ", " + oe : oe
            }, Y.prototype.delete = function(U) {
                delete this.map[$(U)]
            }, Y.prototype.get = function(U) {
                return U = $(U), this.has(U) ? this.map[U] : null
            }, Y.prototype.has = function(U) {
                return this.map.hasOwnProperty($(U))
            }, Y.prototype.set = function(U, oe) {
                this.map[$(U)] = J(oe)
            }, Y.prototype.forEach = function(U, oe) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && U.call(oe, this.map[Ae], Ae, this)
            }, Y.prototype.keys = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push(Ae)
                }), ie(U)
            }, Y.prototype.values = function() {
                var U = [];
                return this.forEach(function(oe) {
                    U.push(oe)
                }), ie(U)
            }, Y.prototype.entries = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push([Ae, oe])
                }), ie(U)
            }, _.iterable && (Y.prototype[Symbol.iterator] = Y.prototype.entries);

            function re(U) {
                if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                U.bodyUsed = !0
            }

            function m(U) {
                return new Promise(function(oe, Ae) {
                    U.onload = function() {
                        oe(U.result)
                    }, U.onerror = function() {
                        Ae(U.error)
                    }
                })
            }

            function P(U) {
                var oe = new FileReader,
                    Ae = m(oe);
                return oe.readAsArrayBuffer(U), Ae
            }

            function W(U) {
                var oe = new FileReader,
                    Ae = m(oe);
                return oe.readAsText(U), Ae
            }

            function ae(U) {
                for (var oe = new Uint8Array(U), Ae = new Array(oe.length), be = 0; be < oe.length; be++) Ae[be] = String.fromCharCode(oe[be]);
                return Ae.join("")
            }

            function se(U) {
                if (U.slice) return U.slice(0);
                var oe = new Uint8Array(U.byteLength);
                return oe.set(new Uint8Array(U)), oe.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(U) {
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : _.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : _.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : _.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : _.arrayBuffer && _.blob && S(U) ? (this._bodyArrayBuffer = se(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || D(U)) ? this._bodyArrayBuffer = se(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
                    var U = re(this);
                    if (U) return U;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P)
                }), this.text = function() {
                    var U = re(this);
                    if (U) return U;
                    if (this._bodyBlob) return W(this._bodyBlob);
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

            function ke(U) {
                var oe = U.toUpperCase();
                return d.indexOf(oe) > -1 ? oe : U
            }

            function Oe(U, oe) {
                oe = oe || {};
                var Ae = oe.body;
                if (U instanceof Oe) {
                    if (U.bodyUsed) throw new TypeError("Already read");
                    this.url = U.url, this.credentials = U.credentials, oe.headers || (this.headers = new Y(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Ae && U._bodyInit != null && (Ae = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new Y(oe.headers)), this.method = ke(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(U) {
                var oe = new FormData;
                return U.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var be = Ae.split("="),
                            we = be.shift().replace(/\+/g, " "),
                            he = be.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(we), decodeURIComponent(he))
                    }
                }), oe
            }

            function lt(U) {
                var oe = new Y,
                    Ae = U.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(be) {
                    var we = be.split(":"),
                        he = we.shift().trim();
                    if (he) {
                        var _e = we.join(":").trim();
                        oe.append(he, _e)
                    }
                }), oe
            }
            ye.call(Oe.prototype);

            function Be(U, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new Y(oe.headers), this.url = oe.url || "", this._initBody(U)
            }
            ye.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Y(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var U = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var K = [301, 302, 303, 307, 308];
            Be.redirect = function(U, oe) {
                if (K.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: U
                    }
                })
            }, v.DOMException = f.DOMException;
            try {
                new v.DOMException
            } catch {
                v.DOMException = function(oe, Ae) {
                    this.message = oe, this.name = Ae;
                    var be = Error(oe);
                    this.stack = be.stack
                }, v.DOMException.prototype = Object.create(Error.prototype), v.DOMException.prototype.constructor = v.DOMException
            }

            function je(U, oe) {
                return new Promise(function(Ae, be) {
                    var we = new Oe(U, oe);
                    if (we.signal && we.signal.aborted) return be(new v.DOMException("Aborted", "AbortError"));
                    var he = new XMLHttpRequest;

                    function _e() {
                        he.abort()
                    }
                    he.onload = function() {
                        var Te = {
                            status: he.status,
                            statusText: he.statusText,
                            headers: lt(he.getAllResponseHeaders() || "")
                        };
                        Te.url = "responseURL" in he ? he.responseURL : Te.headers.get("X-Request-URL");
                        var $e = "response" in he ? he.response : he.responseText;
                        Ae(new Be($e, Te))
                    }, he.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        be(new v.DOMException("Aborted", "AbortError"))
                    }, he.open(we.method, we.url, !0), we.credentials === "include" ? he.withCredentials = !0 : we.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && _.blob && (he.responseType = "blob"), we.headers.forEach(function(Te, $e) {
                        he.setRequestHeader($e, Te)
                    }), we.signal && (we.signal.addEventListener("abort", _e), he.onreadystatechange = function() {
                        he.readyState === 4 && we.signal.removeEventListener("abort", _e)
                    }), he.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return je.polyfill = !0, f.fetch || (f.fetch = je, f.Headers = Y, f.Request = Oe, f.Response = Be), v.Headers = Y, v.Request = Oe, v.Response = Be, v.fetch = je, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ea, Ea.exports);
var ny = function() {
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
            var v = Object.getOwnPropertyDescriptor(e, n);
            if (v.value !== a || v.enumerable !== !0) return !1
        }
        return !0
    },
    Ml = typeof Symbol < "u" && Symbol,
    iy = ny,
    ry = function() {
        return typeof Ml != "function" || typeof Symbol != "function" || typeof Ml("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : iy()
    },
    sy = "Function.prototype.bind called on incompatible ",
    Zo = Array.prototype.slice,
    oy = Object.prototype.toString,
    ay = "[object Function]",
    ly = function(e) {
        var n = this;
        if (typeof n != "function" || oy.call(n) !== ay) throw new TypeError(sy + n);
        for (var i = Zo.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, v = Math.max(0, n.length - i.length), _ = [], S = 0; S < v; S++) _.push("$" + S);
        if (a = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    cy = ly,
    ja = Function.prototype.bind || cy,
    uy = ja,
    hy = uy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    $c = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return $c('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Li = Object.getOwnPropertyDescriptor;
if (Li) try {
    Li({}, "")
} catch {
    Li = null
}
var ta = function() {
        throw new ur
    },
    dy = Li ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Li(arguments, "callee").get
            } catch {
                return ta
            }
        }
    }() : ta,
    ir = ry(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    fy = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
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
        "%Function%": $c,
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
        "%ThrowTypeError%": dy,
        "%TypedArray%": fy,
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
    py = function t(e) {
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
    Ll = {
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
    hs = ja,
    Js = hy,
    gy = hs.call(Function.call, Array.prototype.concat),
    my = hs.call(Function.apply, Array.prototype.splice),
    Pl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    vy = hs.call(Function.call, RegExp.prototype.exec),
    yy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    wy = /\\(\\)?/g,
    by = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Pl(e, yy, function(f, v, _, S) {
            a[a.length] = _ ? Pl(S, wy, "$1") : v || f
        }), a
    },
    Cy = function(e, n) {
        var i = e,
            a;
        if (Js(Ll, i) && (a = Ll[i], i = "%" + a[0] + "%"), Js(hr, i)) {
            var f = hr[i];
            if (f === or && (f = py(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
        if (vy(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = by(e),
            a = i.length > 0 ? i[0] : "",
            f = Cy("%" + a + "%", n),
            v = f.name,
            _ = f.value,
            S = !1,
            I = f.alias;
        I && (a = I[0], my(i, gy([0, 1], I)));
        for (var D = 1, $ = !0; D < i.length; D += 1) {
            var J = i[D],
                ie = Qs(J, 0, 1),
                Y = Qs(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || Y === '"' || Y === "'" || Y === "`") && ie !== Y) throw new gr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (S = !0), a += "." + J, v = "%" + a + "%", Js(hr, v)) _ = hr[v];
            else if (_ != null) {
                if (!(J in _)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Li && D + 1 >= i.length) {
                    var re = Li(_, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? _ = re.get : _ = _[J]
                } else $ = Js(_, J), _ = _[J];
                $ && !S && (hr[v] = _)
            }
        }
        return _
    },
    Fc = {
        exports: {}
    };
(function(t) {
    var e = ja,
        n = za,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        v = n("%Object.getOwnPropertyDescriptor%", !0),
        _ = n("%Object.defineProperty%", !0),
        S = n("%Math.max%");
    if (_) try {
        _({}, "a", {
            value: 1
        })
    } catch {
        _ = null
    }
    t.exports = function($) {
        var J = f(e, a, arguments);
        if (v && _) {
            var ie = v(J, "length");
            ie.configurable && _(J, "length", {
                value: 1 + S(0, $.length - (arguments.length - 1))
            })
        }
        return J
    };
    var I = function() {
        return f(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})(Fc);
var jc = za,
    zc = Fc.exports,
    xy = zc(jc("String.prototype.indexOf")),
    Ey = function(e, n) {
        var i = jc(e, !!n);
        return typeof i == "function" && xy(e, ".prototype.") > -1 ? zc(i) : i
    };
const ky = {},
    _y = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ky
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Sy = gh(_y);
var Ga = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ga && na && typeof na.get == "function" ? na.get : null,
    Ty = Ga && Map.prototype.forEach,
    Ua = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ua ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ua && ia && typeof ia.get == "function" ? ia.get : null,
    Ay = Ua && Set.prototype.forEach,
    Oy = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Oy ? WeakMap.prototype.has : null,
    Ry = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Ry ? WeakSet.prototype.has : null,
    Iy = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Iy ? WeakRef.prototype.deref : null,
    Dy = Boolean.prototype.valueOf,
    My = Object.prototype.toString,
    Ly = Function.prototype.toString,
    Py = String.prototype.match,
    Ha = String.prototype.slice,
    hi = String.prototype.replace,
    Ny = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    Gc = RegExp.prototype.test,
    Bl = Array.prototype.concat,
    Fn = Array.prototype.join,
    Vy = Array.prototype.slice,
    $l = Math.floor,
    ka = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Uc = Object.prototype.propertyIsEnumerable,
    Fl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function jl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Gc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -$l(-t) : $l(t);
        if (i !== t) {
            var a = String(i),
                f = Ha.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var Sa = Sy,
    zl = Sa.custom,
    Gl = Wc(zl) ? zl : null,
    By = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Xc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var S = String(e);
            return _ ? jl(e, S) : S
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return _ ? jl(e, I) : I
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var $ = nw(f, i);
        if (typeof a > "u") a = [];
        else if (qc(a, e) >= 0) return "[Circular]";

        function J(je, U, oe) {
            if (U && (a = Vy.call(a), a.push(U)), oe) {
                var Ae = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Ae.quoteStyle = f.quoteStyle), t(je, Ae, i + 1, a)
            }
            return t(je, f, i + 1, a)
        }
        if (typeof e == "function" && !Ul(e)) {
            var ie = qy(e),
                Y = Ls(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (Y.length > 0 ? " { " + Fn.call(Y, ", ") + " }" : "")
        }
        if (Wc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : _a.call(e);
            return typeof e == "object" && !mr ? Yr(re) : re
        }
        if (Zy(e)) {
            for (var m = "<" + Vl.call(String(e.nodeName)), P = e.attributes || [], W = 0; W < P.length; W++) m += " " + P[W].name + "=" + Hc($y(P[W].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Vl.call(String(e.nodeName)) + ">", m
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var ae = Ls(e, J);
            return $ && !tw(ae) ? "[" + Aa(ae, $) + "]" : "[ " + Fn.call(ae, ", ") + " ]"
        }
        if (jy(e)) {
            var se = Ls(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Uc.call(e, "cause") ? "{ [" + String(e) + "] " + Fn.call(Bl.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Fn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Gl && typeof e[Gl] == "function" && Sa) return Sa(e, {
                depth: D - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Xy(e)) {
            var ye = [];
            return Ty.call(e, function(je, U) {
                ye.push(J(U, e, !0) + " => " + J(je, e))
            }), Hl("Map", Zs.call(e), ye, $)
        }
        if (Jy(e)) {
            var d = [];
            return Ay.call(e, function(je) {
                d.push(J(je, e))
            }), Hl("Set", eo.call(e), d, $)
        }
        if (Yy(e)) return sa("WeakMap");
        if (Qy(e)) return sa("WeakSet");
        if (Ky(e)) return sa("WeakRef");
        if (Gy(e)) return Yr(J(Number(e)));
        if (Hy(e)) return Yr(J(ka.call(e)));
        if (Uy(e)) return Yr(Dy.call(e));
        if (zy(e)) return Yr(J(String(e)));
        if (!Fy(e) && !Ul(e)) {
            var ke = Ls(e, J),
                Oe = Fl ? Fl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ha.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Be = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = Be + (lt || Pe ? "[" + Fn.call(Bl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return ke.length === 0 ? K + "{}" : $ ? K + "{" + Aa(ke, $) + "}" : K + "{ " + Fn.call(ke, ", ") + " }"
        }
        return String(e)
    };

function Hc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function $y(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Ul(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function jy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
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
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}

function Hy(t) {
    if (!t || typeof t != "object" || !ka) return !1;
    try {
        return ka.call(t), !0
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

function qy(t) {
    if (t.name) return t.name;
    var e = Py.call(Ly.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function qc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Xy(t) {
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

function Yy(t) {
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

function Ky(t) {
    if (!Nl || !t || typeof t != "object") return !1;
    try {
        return Nl.call(t), !0
    } catch {}
    return !1
}

function Jy(t) {
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

function Qy(t) {
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

function Zy(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Xc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Xc(Ha.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ew);
    return Hc(a, "single", e)
}

function ew(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Ny.call(e.toString(16))
}

function Yr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Hl(t, e, n, i) {
    var a = i ? Aa(n, i) : Fn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function tw(t) {
    for (var e = 0; e < t.length; e++)
        if (qc(t[e], `
`) >= 0) return !1;
    return !0
}

function nw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = Fn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: Fn.call(Array(e + 1), n)
    }
}

function Aa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + Fn.call(t, "," + n) + `
` + e.prev
}

function Ls(t, e) {
    var n = Ta(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof ra == "function" ? ra(t) : [],
        v;
    if (mr) {
        v = {};
        for (var _ = 0; _ < f.length; _++) v["$" + f[_]] = f[_]
    }
    for (var S in t) !li(t, S) || n && String(Number(S)) === S && S < t.length || mr && v["$" + S] instanceof Symbol || (Gc.call(/[^\w$]/, S) ? i.push(e(S, t) + ": " + e(t[S], t)) : i.push(S + ": " + e(t[S], t)));
    if (typeof ra == "function")
        for (var I = 0; I < f.length; I++) Uc.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var Wa = za,
    kr = Ey,
    iw = By,
    rw = Wa("%TypeError%"),
    Ps = Wa("%WeakMap%", !0),
    Ns = Wa("%Map%", !0),
    sw = kr("WeakMap.prototype.get", !0),
    ow = kr("WeakMap.prototype.set", !0),
    aw = kr("WeakMap.prototype.has", !0),
    lw = kr("Map.prototype.get", !0),
    cw = kr("Map.prototype.set", !0),
    uw = kr("Map.prototype.has", !0),
    qa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    hw = function(t, e) {
        var n = qa(t, e);
        return n && n.value
    },
    dw = function(t, e, n) {
        var i = qa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    fw = function(t, e) {
        return !!qa(t, e)
    },
    pw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new rw("Side channel does not contain " + iw(f))
            },
            get: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return sw(e, f)
                } else if (Ns) {
                    if (n) return lw(n, f)
                } else if (i) return hw(i, f)
            },
            has: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return aw(e, f)
                } else if (Ns) {
                    if (n) return uw(n, f)
                } else if (i) return fw(i, f);
                return !1
            },
            set: function(f, v) {
                Ps && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ps), ow(e, f, v)) : Ns ? (n || (n = new Ns), cw(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), dw(i, f, v))
            }
        };
        return a
    },
    gw = String.prototype.replace,
    mw = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Xa = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return gw.call(t, mw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    vw = Xa,
    aa = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    Bn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    yw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    Yc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    ww = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Di(e) && !Di(n) && (a = Yc(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, v) {
            if (aa.call(e, v)) {
                var _ = e[v];
                _ && typeof _ == "object" && f && typeof f == "object" ? e[v] = t(_, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var _ = n[v];
            return aa.call(f, v) ? f[v] = t(f[v], _, i) : f[v] = _, f
        }, a)
    },
    bw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Cw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    xw = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var _ = "", S = 0; S < v.length; ++S) {
            var I = v.charCodeAt(S);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === vw.RFC1738 && (I === 40 || I === 41)) {
                _ += v.charAt(S);
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
            S += 1, I = 65536 + ((I & 1023) << 10 | v.charCodeAt(S) & 1023), _ += Bn[240 | I >> 18] + Bn[128 | I >> 12 & 63] + Bn[128 | I >> 6 & 63] + Bn[128 | I & 63]
        }
        return _
    },
    Ew = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], v = f.obj[f.prop], _ = Object.keys(v), S = 0; S < _.length; ++S) {
                var I = _[S],
                    D = v[I];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: v,
                    prop: I
                }), i.push(D))
            }
        return yw(n), e
    },
    kw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    _w = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Sw = function(e, n) {
        return [].concat(e, n)
    },
    Tw = function(e, n) {
        if (Di(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Kc = {
        arrayToObject: Yc,
        assign: bw,
        combine: Sw,
        compact: Ew,
        decode: Cw,
        encode: xw,
        isBuffer: _w,
        isRegExp: kw,
        maybeMap: Tw,
        merge: ww
    },
    Jc = pw,
    Oa = Kc,
    is = Xa,
    Aw = Object.prototype.hasOwnProperty,
    Wl = {
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
    Ow = String.prototype.split,
    Rw = Array.prototype.push,
    Qc = function(t, e) {
        Rw.apply(t, ei(e) ? e : [e])
    },
    Iw = Date.prototype.toISOString,
    ql = is.default,
    nn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: ql,
        formatter: is.formatters[ql],
        indices: !1,
        serializeDate: function(e) {
            return Iw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Dw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Mw = function t(e, n, i, a, f, v, _, S, I, D, $, J, ie, Y, re, m) {
        for (var P = e, W = m, ae = 0, se = !1;
            (W = W.get(la)) !== void 0 && !se;) {
            var ye = W.get(e);
            if (ae += 1, typeof ye < "u") {
                if (ye === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof W.get(la) > "u" && (ae = 0)
        }
        if (typeof S == "function" ? P = S(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ei(P) && (P = Oa.maybeMap(P, function(he) {
                return he instanceof Date ? $(he) : he
            })), P === null) {
            if (f) return _ && !Y ? _(n, nn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Dw(P) || Oa.isBuffer(P)) {
            if (_) {
                var d = Y ? n : _(n, nn.encoder, re, "key", J);
                if (i === "comma" && Y) {
                    for (var ke = Ow.call(String(P), ","), Oe = "", Pe = 0; Pe < ke.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ie(_(ke[Pe], nn.encoder, re, "value", J));
                    return [ie(d) + (a && ei(P) && ke.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ie(d) + "=" + ie(_(P, nn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Be;
        if (i === "comma" && ei(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ei(S)) Be = S;
        else {
            var K = Object.keys(P);
            Be = I ? K.sort(I) : K
        }
        for (var je = a && ei(P) && P.length === 1 ? n + "[]" : n, U = 0; U < Be.length; ++U) {
            var oe = Be[U],
                Ae = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Ae === null)) {
                var be = ei(P) ? typeof i == "function" ? i(je, oe) : je : je + (D ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var we = Jc();
                we.set(la, m), Qc(lt, t(Ae, be, i, a, f, v, _, S, I, D, $, J, ie, Y, re, we))
            }
        }
        return lt
    },
    Lw = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Aw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
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
    Pw = function(t, e) {
        var n = t,
            i = Lw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in Wl ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var S = Wl[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = S === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = Jc(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || Qc(v, Mw(n[J], J, S, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ie = v.join(i.delimiter),
            Y = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? Y += "utf8=%26%2310003%3B&" : Y += "utf8=%E2%9C%93&"), ie.length > 0 ? Y + ie : ""
    },
    vr = Kc,
    Ra = Object.prototype.hasOwnProperty,
    Nw = Array.isArray,
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
    Vw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    Zc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Bw = "utf8=%26%2310003%3B",
    $w = "utf8=%E2%9C%93",
    Fw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = a.split(n.delimiter, f),
            _ = -1,
            S, I = n.charset;
        if (n.charsetSentinel)
            for (S = 0; S < v.length; ++S) v[S].indexOf("utf8=") === 0 && (v[S] === $w ? I = "utf-8" : v[S] === Bw && (I = "iso-8859-1"), _ = S, S = v.length);
        for (S = 0; S < v.length; ++S)
            if (S !== _) {
                var D = v[S],
                    $ = D.indexOf("]="),
                    J = $ === -1 ? D.indexOf("=") : $ + 1,
                    ie, Y;
                J === -1 ? (ie = n.decoder(D, Zt.decoder, I, "key"), Y = n.strictNullHandling ? null : "") : (ie = n.decoder(D.slice(0, J), Zt.decoder, I, "key"), Y = vr.maybeMap(Zc(D.slice(J + 1), n), function(re) {
                    return n.decoder(re, Zt.decoder, I, "value")
                })), Y && n.interpretNumericEntities && I === "iso-8859-1" && (Y = Vw(Y)), D.indexOf("[]=") > -1 && (Y = Nw(Y) ? [Y] : Y), Ra.call(i, ie) ? i[ie] = vr.combine(i[ie], Y) : i[ie] = Y
            } return i
    },
    jw = function(t, e, n, i) {
        for (var a = i ? e : Zc(e, n), f = t.length - 1; f >= 0; --f) {
            var v, _ = t[f];
            if (_ === "[]" && n.parseArrays) v = [].concat(a);
            else {
                v = n.plainObjects ? Object.create(null) : {};
                var S = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    I = parseInt(S, 10);
                !n.parseArrays && S === "" ? v = {
                    0: a
                } : !isNaN(I) && _ !== S && String(I) === S && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (v = [], v[I] = a) : S !== "__proto__" && (v[S] = a)
            }
            a = v
        }
        return a
    },
    zw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                S = i.depth > 0 && v.exec(f),
                I = S ? f.slice(0, S.index) : f,
                D = [];
            if (I) {
                if (!i.plainObjects && Ra.call(Object.prototype, I) && !i.allowPrototypes) return;
                D.push(I)
            }
            for (var $ = 0; i.depth > 0 && (S = _.exec(f)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ra.call(Object.prototype, S[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(S[1])
            }
            return S && D.push("[" + f.slice(S.index) + "]"), jw(D, n, i, a)
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
        for (var i = typeof t == "string" ? Fw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var _ = f[v],
                S = zw(_, i[_], n, typeof t == "string");
            a = vr.merge(a, S, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    Hw = Pw,
    Ww = Uw,
    qw = Xa,
    eu = {
        formats: qw,
        parse: Ww,
        stringify: Hw
    };
class Xw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Yw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Kw {
    constructor(e) {
        this.connections = e.connections
    }
}
class Jw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Qw {}
var po = {
    CreateRoomReply: Xw,
    GetRoomReply: Yw,
    GetAudienceReply: Kw,
    RoomExit: Jw,
    RoomLock: Qw
};
const Xl = Ea.exports,
    Zw = eu,
    {
        CreateRoomReply: eb,
        GetRoomReply: tb
    } = po;
class nb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = Zw.stringify(n);
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
            v = await (await Xl(i, {
                method: "POST"
            })).json();
        if (!v.ok) throw new Error(`failed to create room: ${v.error}`);
        let _ = v.body;
        return new eb({
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
        return new tb({
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
var ib = {
        APIClient: nb
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var rb = ar,
    Ya = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Yl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Gs;
dr && typeof dr.ownKeys == "function" ? Gs = dr.ownKeys : Object.getOwnPropertySymbols ? Gs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Gs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function sb(t) {
    console && console.warn && console.warn(t)
}
var tu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ya.exports = Rt;
Ya.exports.once = cb;
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
        if (typeof t != "number" || t < 0 || tu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || tu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function nu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return nu(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var v;
        if (n.length > 0 && (v = n[0]), v instanceof Error) throw v;
        var _ = new Error("Unhandled error." + (v ? " (" + v.message + ")" : ""));
        throw _.context = v, _
    }
    var S = f[e];
    if (S === void 0) return !1;
    if (typeof S == "function") Yl(S, this, n);
    else
        for (var I = S.length, D = au(S, I), i = 0; i < I; ++i) Yl(D[i], this, n);
    return !0
};

function iu(t, e, n, i) {
    var a, f, v;
    if (go(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), a = nu(t), a > 0 && v.length > a && !v.warned) {
        v.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = v.length, sb(_)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return iu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return iu(this, e, n, !0)
};

function ob() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function ru(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = ob.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, ru(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, ru(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, v, _;
    if (go(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                _ = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : ab(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
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
            v;
        for (a = 0; a < f.length; ++a) v = f[a], v !== "removeListener" && this.removeAllListeners(v);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function su(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? lb(a) : au(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return su(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return su(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : ou.call(t, e)
};
Rt.prototype.listenerCount = ou;

function ou(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Gs(this._events) : []
};

function au(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function ab(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function lb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function cb(t, e) {
    return new Promise(function(n, i) {
        function a(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        lu(t, e, f, {
            once: !0
        }), e !== "error" && ub(t, a, {
            once: !0
        })
    })
}

function ub(t, e, n) {
    typeof t.on == "function" && lu(t, "error", e, n)
}

function lu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class hb {
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
class cu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class uu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class hu extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class St extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class du extends St {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class fu extends St {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class pu extends St {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class gu extends St {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class mu extends St {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class vu extends St {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class yu extends St {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class wu extends St {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class bu extends St {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Cu extends St {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class xu extends St {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Eu extends St {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class ku extends St {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class _u extends St {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Su extends St {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Tu extends St {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Au extends St {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ou extends St {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ru extends St {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Iu extends St {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Du extends St {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Mu extends St {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Lu extends St {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Pu extends St {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Nu extends St {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Vu extends St {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Bu extends St {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class $u extends St {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function db({
    code: t,
    message: e
}) {
    const n = fb[t];
    return n ? new n({
        message: e
    }) : new mo({
        message: e
    })
}
var ti = {
    createError: db,
    CallError: mo,
    EcastServerError: ds,
    EcastCreateRoomFailed: cu,
    EcastDialRoomFailed: uu,
    EcastServerIsShuttingDown: hu,
    EcastClientError: St,
    EcastParseError: du,
    EcastRequestIsMissingOpcode: fu,
    EcastRequestHasInvalidOpcode: pu,
    EcastRequestHasInvalidArguments: gu,
    EcastEntityNotFound: mu,
    EcastEntityAlreadyExists: vu,
    EcastEntityTypeError: yu,
    EcastNoSuchClient: wu,
    EcastRoomIsLocked: bu,
    EcastRoomIsFull: Cu,
    EcastLicenseNotFound: xu,
    EcastLicenseCheckFailed: Eu,
    EcastRoomNotFound: ku,
    EcastInvalidRole: _u,
    EcastTwitchLoginRequired: Su,
    EcastInvalidOption: Tu,
    EcastPasswordRequired: Au,
    EcastInvalidPassword: Ou,
    EcastNameRequired: Ru,
    EcastFilterError: Iu,
    EcastNoSuchFilter: Du,
    EcastPermissionDenied: Mu,
    EcastNotConnected: Lu,
    EcastIllegalOperation: Pu,
    EcastACLChangeDenied: Nu,
    EcastRoomHasEnded: Vu,
    EcastEntityLocked: Bu,
    EcastRateLimitExceeded: $u,
    ObservedError: hb
};
const fb = {
    1e3: ds,
    1001: cu,
    1002: uu,
    1003: hu,
    2e3: St,
    2001: du,
    2002: fu,
    2003: pu,
    2004: gu,
    2005: mu,
    2006: vu,
    2007: yu,
    2008: wu,
    2009: bu,
    2010: Cu,
    2011: xu,
    2012: Eu,
    2013: ku,
    2014: _u,
    2015: Su,
    2016: Tu,
    2017: Au,
    2018: Ou,
    2019: Ru,
    2021: Iu,
    2022: Du,
    2023: Mu,
    2024: Lu,
    2025: Pu,
    2026: Nu,
    2027: Vu,
    2028: Bu,
    2420: $u
};
class pb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class gb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class mb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class vb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class yb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ka = {
    ClientConnected: gb,
    ClientDisconnected: mb,
    ClientKicked: yb,
    ClientSend: vb,
    ClientWelcome: pb
};
class wb {
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
    CountGroup: wb
};
class bb {
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
    GCounter: bb
};
class Cb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Fu = {
    Notification: Cb
};
class xb {
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
class Eb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Za = {
    ObjectEntity: xb,
    ObjectEcho: Eb
};
class kb {
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
    PNCounter: kb
};
class _b {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Reply: _b
};
class Sb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Tb = {
    Request: Sb
};
class Ab {
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
class Ob {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: Ab,
    TextEcho: Ob
};
class Rb {
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
    TextRing: Rb
};
class Ib {
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
var zu = {
    ArtifactEntity: Ib
};
class Db {
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
class Lb {
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
    DoodleEntity: Db,
    DoodleLine: Mb,
    DoodleLineRemoved: Lb
};
class Pb {
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
class Nb {
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
class Vb {
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
    StackEntity: Pb,
    StackElement: Nb,
    StackElements: Vb
};
class Bb {
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
    DropEntity: Bb
};
class $b {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var Fb = {
    Echo: $b
};
class jb {
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
var zb = {
    LockEntity: jb
};
class Gb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Hu = {
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
    ArtifactEntity: Hb
} = zu, {
    ClientWelcome: Wb,
    ClientConnected: qb,
    ClientDisconnected: Xb,
    ClientKicked: Yb,
    ClientSend: Kb
} = Ka, {
    CountGroup: Jb
} = Ja, {
    DoodleEntity: Qb,
    DoodleLine: Zb,
    DoodleLineRemoved: e0
} = il, {
    StackEntity: t0,
    StackElement: n0,
    StackElements: i0
} = Gu, {
    DropEntity: r0
} = Uu, {
    Echo: s0
} = Fb, {
    LockEntity: o0
} = zb, {
    GCounter: a0
} = Qa, {
    GetAudienceReply: l0,
    RoomExit: c0,
    RoomLock: u0
} = po, {
    Notification: h0
} = Fu, {
    OK: d0
} = Hu, {
    NumberEntity: f0
} = Wu, {
    ObjectEcho: p0,
    ObjectEntity: g0
} = Za, {
    PNCounter: Jl
} = el, {
    Reply: m0
} = ju, {
    TextEcho: v0,
    TextEntity: y0
} = tl, {
    TextRing: w0
} = nl, {
    createError: Ql,
    ObservedError: b0
} = ti;

function Ia(t, e, n) {
    switch (t) {
        case "ok":
            return new d0;
        case "echo":
            return new s0({
                message: e.message
            });
        case "lock":
            return new o0({
                key: e.key,
                from: e.from
            });
        case "error":
            return Ql({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new b0({
                to: e.to,
                error: Ql({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new y0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new v0({
                message: e.message
            });
        case "object":
            return new g0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new p0({
                message: e.message
            });
        case "drop":
            return new r0({
                key: e.key
            });
        case "artifact":
            return new Hb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new qb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Xb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Yb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Kb({
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
                Object.entries(e.entities).forEach(([f, v]) => {
                    a[f] = Ia(v[0], v[1], v[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new Qb({
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
            return new Zb({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new e0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new t0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new n0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new i0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new f0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new c0({
                cause: e.cause
            });
        case "room/lock":
            return new u0;
        case "room/get-audience":
            return new l0({
                connections: e.connections
            });
        case "audience":
            return new Jl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Jb({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new w0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new a0({
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

function C0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new m0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ia(n, e.result)
    }) : new h0({
        pc: e.pc,
        opcode: n,
        result: Ia(n, e.result)
    })
}
var x0 = {
    parseResponseMessage: C0
};
const Zl = rb,
    E0 = eu,
    k0 = Ya.exports,
    {
        CallError: _0
    } = ti,
    {
        ClientWelcome: S0
    } = Ka,
    {
        CountGroup: T0
    } = Ja,
    {
        GCounter: A0
    } = Qa,
    {
        Notification: ec
    } = Fu,
    {
        ObjectEntity: ca
    } = Za,
    {
        PNCounter: O0
    } = el,
    {
        Reply: R0
    } = ju,
    {
        Request: I0
    } = Tb,
    {
        TextEntity: ua
    } = tl,
    {
        TextRing: D0
    } = nl,
    {
        parseResponseMessage: M0
    } = x0,
    {
        DoodleEntity: L0
    } = il,
    {
        StackEntity: P0
    } = Gu,
    N0 = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class V0 extends k0 {
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
        const n = E0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${window.location.hostname}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${window.location.hostname}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let v = !1,
                _ = !1,
                S = D => {
                    a(D), v = !0
                },
                I = D => {
                    f(D), v = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const $ = M0(D);
                if ($ instanceof R0) this.onReply($);
                else if ($ instanceof ec) {
                    if ($.result instanceof S0) _ = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), S($.result);
                    else if (!v) {
                        I($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = D => {
                v ? this.emit("socketError", D) : I(D)
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
            n = N0;
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
        delete this.pending[n], e.result instanceof _0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Zl.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new I0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((_, S) => {
                this.pending[i] = {
                    resolve: _,
                    reject: S,
                    request: a
                }
            }),
            v = JSON.stringify(a);
        return this.debugLog(`send -> ${v}`), this.conn.send(v), f
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
                accept: v,
                reject: _
            } = i;
        f && (a.acl = f), v && (a.accept = v), _ && (a.reject = _);
        const S = await this.send("text/create", a);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), S
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
            live: v,
            maxPoints: _,
            size: S,
            weights: I
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = v, _ != null && (i.maxPoints = _), S && (i.size = S), I && (i.weights = I);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new L0({
            key: e,
            colors: f,
            lines: [],
            live: v,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: S,
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
            points: v
        } = n, _ = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: v
        }), S = {
            layer: i,
            color: a,
            weight: f,
            points: v
        };
        return this.entities[e].lines.push(S), _
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
        return this.entities[e] = new P0({
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
        return this.entities[e] = new T0({
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
        return this.entities[e] = new A0({
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
        return this.entities[e] = new O0({
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
                reject: v
            } = n;
        a && (i.limit = a), f && (i.accept = f), v && (i.reject = v);
        const _ = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new D0({
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
var B0 = {
    WSClient: V0
};
const {
    APIClient: $0
} = ib, {
    WSClient: F0
} = B0, {
    CreateRoomReply: j0,
    GetRoomReply: z0
} = po, {
    ClientWelcome: G0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: H0
} = zu, {
    GCounter: W0
} = Qa, {
    NumberEntity: q0
} = Wu, {
    TextEntity: X0
} = tl, {
    DoodleEntity: Y0
} = il, {
    ObjectEntity: K0
} = Za, {
    CountGroup: J0
} = Ja, {
    DropEntity: Q0
} = Uu, {
    OK: Z0
} = Hu, {
    RoomExit: eC
} = po, {
    TextRing: tC
} = nl, {
    PNCounter: nC
} = el;
var Ri = {
    APIClient: $0,
    WSClient: F0,
    ClientWelcome: G0,
    CreateRoomReply: j0,
    DropEntity: Q0,
    GetRoomReply: z0,
    ClientDisconnected: U0,
    RoomExit: eC,
    OK: Z0,
    ArtifactEntity: H0,
    DoodleEntity: Y0,
    NumberEntity: q0,
    CountGroup: J0,
    GCounter: W0,
    ObjectEntity: K0,
    PNCounter: nC,
    TextEntity: X0,
    TextRing: tC
};

function nc(...t) {
    console.log(...t)
}

function iC(t) {
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
            a = function(N, q) {
                if (q = q.split(":")[0], N = +N, !N) return !1;
                switch (q) {
                    case "http":
                    case "ws":
                        return N !== 80;
                    case "https":
                    case "wss":
                        return N !== 443;
                    case "ftp":
                        return N !== 21;
                    case "gopher":
                        return N !== 70;
                    case "file":
                        return !1
                }
                return N !== 0
            },
            f = Object.prototype.hasOwnProperty,
            v;

        function _(F) {
            try {
                return decodeURIComponent(F.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function S(F) {
            try {
                return encodeURIComponent(F)
            } catch {
                return null
            }
        }

        function I(F) {
            for (var N = /([^=?#&]+)=?([^&]*)/g, q = {}, M; M = N.exec(F);) {
                var H = _(M[1]),
                    pe = _(M[2]);
                H === null || pe === null || H in q || (q[H] = pe)
            }
            return q
        }

        function D(F, N) {
            N = N || "";
            var q = [],
                M, H;
            typeof N != "string" && (N = "?");
            for (H in F)
                if (f.call(F, H)) {
                    if (M = F[H], !M && (M === null || M === v || isNaN(M)) && (M = ""), H = S(H), M = S(M), H === null || M === null) continue;
                    q.push(H + "=" + M)
                } return q.length ? N + q.join("&") : ""
        }
        var $ = D,
            J = I,
            ie = {
                stringify: $,
                parse: J
            },
            Y = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + m + "+");

        function W(F) {
            return (F || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(N, q) {
                    return d(q.protocol) ? N.replace(/\\/g, "/") : N
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

        function ye(F) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var q = N.location || {};
            F = F || q;
            var M = {},
                H = typeof F,
                pe;
            if (F.protocol === "blob:") M = new Pe(unescape(F.pathname), {});
            else if (H === "string") {
                M = new Pe(F, {});
                for (pe in se) delete M[pe]
            } else if (H === "object") {
                for (pe in F) pe in se || (M[pe] = F[pe]);
                M.slashes === void 0 && (M.slashes = Y.test(F.href))
            }
            return M
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function ke(F, N) {
            F = W(F), N = N || {};
            var q = re.exec(F),
                M = q[1] ? q[1].toLowerCase() : "",
                H = !!q[2],
                pe = !!q[3],
                ge = 0,
                Ne;
            return H ? pe ? (Ne = q[2] + q[3] + q[4], ge = q[2].length + q[3].length) : (Ne = q[2] + q[4], ge = q[2].length) : pe ? (Ne = q[3] + q[4], ge = q[3].length) : Ne = q[4], M === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : d(M) ? Ne = q[4] : M ? H && (Ne = Ne.slice(2)) : ge >= 2 && d(N.protocol) && (Ne = q[4]), {
                protocol: M,
                slashes: H || d(M),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(F, N) {
            if (F === "") return N;
            for (var q = (N || "/").split("/").slice(0, -1).concat(F.split("/")), M = q.length, H = q[M - 1], pe = !1, ge = 0; M--;) q[M] === "." ? q.splice(M, 1) : q[M] === ".." ? (q.splice(M, 1), ge++) : ge && (M === 0 && (pe = !0), q.splice(M, 1), ge--);
            return pe && q.unshift(""), (H === "." || H === "..") && q.push(""), q.join("/")
        }

        function Pe(F, N, q) {
            if (F = W(F), !(this instanceof Pe)) return new Pe(F, N, q);
            var M, H, pe, ge, Ne, Ve, pt = ae.slice(),
                Ft = typeof N,
                Ye = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (q = N, N = null), q && typeof q != "function" && (q = ie.parse), N = ye(N), H = ke(F || "", N), M = !H.protocol && !H.slashes, Ye.slashes = H.slashes || M && N.slashes, Ye.protocol = H.protocol || N.protocol || "", F = H.rest, (Ye.protocol === "file:" || !H.slashes && (H.protocol || H.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    F = ge(F, Ye);
                    continue
                }
                pe = ge[0], Ve = ge[1], pe !== pe ? Ye[Ve] = F : typeof pe == "string" ? ~(Ne = F.indexOf(pe)) && (typeof ge[2] == "number" ? (Ye[Ve] = F.slice(0, Ne), F = F.slice(Ne + ge[2])) : (Ye[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = pe.exec(F)) && (Ye[Ve] = Ne[1], F = F.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || M && ge[3] && N[Ve] || "", ge[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            q && (Ye.query = q(Ye.query)), M && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (ge = Ye.auth.split(":"), Ye.username = ge[0] || "", Ye.password = ge[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(F, N, q) {
            var M = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (q || ie.parse)(N)), M[F] = N;
                    break;
                case "port":
                    M[F] = N, a(N, M.protocol) ? N && (M.host = M.hostname + ":" + N) : (M.host = M.hostname, M[F] = "");
                    break;
                case "hostname":
                    M[F] = N, M.port && (N += ":" + M.port), M.host = N;
                    break;
                case "host":
                    M[F] = N, /:\d+$/.test(N) ? (N = N.split(":"), M.port = N.pop(), M.hostname = N.join(":")) : (M.hostname = N, M.port = "");
                    break;
                case "protocol":
                    M.protocol = N.toLowerCase(), M.slashes = !q;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var H = F === "pathname" ? "/" : "#";
                        M[F] = N.charAt(0) !== H ? H + N : N
                    } else M[F] = N;
                    break;
                default:
                    M[F] = N
            }
            for (var pe = 0; pe < ae.length; pe++) {
                var ge = ae[pe];
                ge[4] && (M[ge[1]] = M[ge[1]].toLowerCase())
            }
            return M.origin = M.protocol !== "file:" && d(M.protocol) && M.host ? M.protocol + "//" + M.host : "null", M.href = M.toString(), M
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = ie.stringify);
            var N, q = this,
                M = q.protocol;
            M && M.charAt(M.length - 1) !== ":" && (M += ":");
            var H = M + (q.slashes || d(q.protocol) ? "//" : "");
            return q.username && (H += q.username, q.password && (H += ":" + q.password), H += "@"), H += q.host + q.pathname, N = typeof q.query == "object" ? F(q.query) : q.query, N && (H += N.charAt(0) !== "?" ? "?" + N : N), q.hash && (H += q.hash), H
        }
        Pe.prototype = {
            set: lt,
            toString: Be
        }, Pe.extractProtocol = ke, Pe.location = ye, Pe.trimLeft = W, Pe.qs = ie;
        var K = Pe;

        function je(F, N) {
            setTimeout(function(q) {
                return F.call(q)
            }, 4, N)
        }

        function U(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function oe(F, N) {
            F === void 0 && (F = []);
            var q = [];
            return F.forEach(function(M) {
                N(M) || q.push(M)
            }), q
        }

        function Ae(F, N) {
            F === void 0 && (F = []);
            var q = [];
            return F.forEach(function(M) {
                N(M) && q.push(M)
            }), q
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(N, q) {
            typeof q == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(M) {
                return M === q
            }).length === 0 && this.listeners[N].push(q))
        }, be.prototype.removeEventListener = function(N, q) {
            var M = this.listeners[N];
            this.listeners[N] = oe(M, function(H) {
                return H === q
            })
        }, be.prototype.dispatchEvent = function(N) {
            for (var q = this, M = [], H = arguments.length - 1; H-- > 0;) M[H] = arguments[H + 1];
            var pe = N.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                M.length > 0 ? Ne.apply(q, M) : Ne.call(q, N)
            }), !0) : !1
        };

        function we(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(N, q) {
            var M = we(q),
                H = this.urlMap[M];
            if (H && H.server && H.websockets.indexOf(N) === -1) return H.websockets.push(N), H.server
        }, he.prototype.addMembershipToRoom = function(N, q) {
            var M = this.urlMap[we(N.url)];
            M && M.server && M.websockets.indexOf(N) !== -1 && (M.roomMemberships[q] || (M.roomMemberships[q] = []), M.roomMemberships[q].push(N))
        }, he.prototype.attachServer = function(N, q) {
            var M = we(q),
                H = this.urlMap[M];
            if (!H) return this.urlMap[M] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, he.prototype.serverLookup = function(N) {
            var q = we(N),
                M = this.urlMap[q];
            if (M) return M.server
        }, he.prototype.websocketsLookup = function(N, q, M) {
            var H = we(N),
                pe, ge = this.urlMap[H];
            if (pe = ge ? ge.websockets : [], q) {
                var Ne = ge.roomMemberships[q];
                pe = Ne || []
            }
            return M ? pe.filter(function(Ve) {
                return Ve !== M
            }) : pe
        }, he.prototype.removeServer = function(N) {
            delete this.urlMap[we(N)]
        }, he.prototype.removeWebSocket = function(N, q) {
            var M = we(q),
                H = this.urlMap[M];
            H && (H.websockets = oe(H.websockets, function(pe) {
                return pe === N
            }))
        }, he.prototype.removeMembershipFromRoom = function(N, q) {
            var M = this.urlMap[we(N.url)],
                H = M.roomMemberships[q];
            M && H !== null && (M.roomMemberships[q] = oe(H, function(pe) {
                return pe === N
            }))
        };
        var _e = new he,
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, q, M) {
            N === void 0 && (N = "undefined"), q === void 0 && (q = !1), M === void 0 && (M = !1), this.type = "" + N, this.bubbles = Boolean(q), this.cancelable = Boolean(M)
        };
        var dt = function(F) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), F.call(this), !q) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var H = M.bubbles,
                        pe = M.cancelable;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), F.call(this), !q) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var H = M.bubbles,
                        pe = M.cancelable,
                        ge = M.data,
                        Ne = M.origin,
                        Ve = M.lastEventId,
                        pt = M.ports;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Ht = function(F) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), F.call(this), !q) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var H = M.bubbles,
                        pe = M.cancelable,
                        ge = M.code,
                        Ne = M.reason,
                        Ve = M.wasClean;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function E(F) {
            var N = F.type,
                q = F.target,
                M = new dt(N);
            return q && (M.target = q, M.srcElement = q, M.currentTarget = q), M
        }

        function l(F) {
            var N = F.type,
                q = F.origin,
                M = F.data,
                H = F.target,
                pe = new Bt(N, {
                    data: M,
                    origin: q
                });
            return H && (pe.target = H, pe.srcElement = H, pe.currentTarget = H), pe
        }

        function g(F) {
            var N = F.code,
                q = F.reason,
                M = F.type,
                H = F.target,
                pe = F.wasClean;
            pe || (pe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var ge = new Ht(M, {
                code: N,
                reason: q,
                wasClean: pe
            });
            return H && (ge.target = H, ge.srcElement = H, ge.currentTarget = H), ge
        }

        function k(F, N, q) {
            F.readyState = Me.CLOSING;
            var M = _e.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: q
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: q
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = Me.CLOSED, F.dispatchEvent(H), F.dispatchEvent(pe), M && M.dispatchEvent(H, M)
            }, F)
        }

        function O(F, N, q) {
            F.readyState = Me.CLOSING;
            var M = _e.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                ge = E({
                    type: "error",
                    target: F.target
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = Me.CLOSED, F.dispatchEvent(ge), F.dispatchEvent(H), F.dispatchEvent(pe), M && M.dispatchEvent(H, M)
            }, F)
        }

        function L(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var V = new WeakMap;

        function te(F) {
            if (V.has(F)) return V.get(F);
            var N = new Proxy(F, {
                get: function(M, H) {
                    return H === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Ve = ge.reason || "";
                        k(N, Ne, Ve)
                    } : H === "send" ? function(ge) {
                        ge = L(ge), F.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: F
                        }))
                    } : H === "on" ? function(ge, Ne) {
                        F.addEventListener("server::" + ge, Ne)
                    } : H === "target" ? F : M[H]
                }
            });
            return V.set(F, N), N
        }

        function Se(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function de(F) {
            var N = new K(F),
                q = N.pathname,
                M = N.protocol,
                H = N.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (q || (N.pathname = "/"), M === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (M !== "ws:" && M !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + M + "' is not allowed.");
            if (H !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + H + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function De(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(M) {
                    return {
                        count: 1,
                        protocol: M
                    }
                }).reduce(function(M, H) {
                    return M[H.protocol] = (M[H.protocol] || 0) + H.count, M
                }, {}),
                q = Object.keys(N).filter(function(M) {
                    return N[M] > 1
                });
            if (q.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + q[0] + "' is duplicated.");
            return F
        }
        var Me = function(F) {
            function N(M, H) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(M), H = De(H), this.protocol = H[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var pe = te(this),
                    ge = _e.attachWebSocket(pe, this.url);
                je(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ve = ge.options.selectProtocol(H),
                                    pt = Ve !== "",
                                    Ft = H.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(pe, this.url), this.dispatchEvent(E({
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
                            this.readyState = N.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(E({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var q = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return q.onopen.get = function() {
                return this._onopen
            }, q.onmessage.get = function() {
                return this._onmessage
            }, q.onclose.get = function() {
                return this._onclose
            }, q.onerror.get = function() {
                return this._onerror
            }, q.onopen.set = function(M) {
                this.removeEventListener("open", this._onopen), this._onopen = M, this.addEventListener("open", M)
            }, q.onmessage.set = function(M) {
                this.removeEventListener("message", this._onmessage), this._onmessage = M, this.addEventListener("message", M)
            }, q.onclose.set = function(M) {
                this.removeEventListener("close", this._onclose), this._onclose = M, this.addEventListener("close", M)
            }, q.onerror.set = function(M) {
                this.removeEventListener("error", this._onerror), this._onerror = M, this.addEventListener("error", M)
            }, N.prototype.send = function(H) {
                var pe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(H)
                    }),
                    Ne = _e.serverLookup(this.url);
                Ne && je(function() {
                    pe.dispatchEvent(ge, H)
                }, Ne)
            }, N.prototype.close = function(H, pe) {
                if (H !== void 0 && (typeof H != "number" || H !== 1e3 && (H < 3e3 || H > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + H + " is neither.");
                if (pe !== void 0) {
                    var ge = Se(pe);
                    if (ge > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === N.CONNECTING ? O(Ne, H || Te.CLOSE_ABNORMAL, pe) : k(Ne, H || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(N.prototype, q), N
        }(be);
        Me.CONNECTING = 0, Me.prototype.CONNECTING = Me.CONNECTING, Me.OPEN = 1, Me.prototype.OPEN = Me.OPEN, Me.CLOSING = 2, Me.prototype.CLOSING = Me.CLOSING, Me.CLOSED = 3, Me.prototype.CLOSED = Me.CLOSED;
        var it = function(F) {
            return F.reduce(function(N, q) {
                return N.indexOf(q) > -1 ? N : N.concat(q)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof iC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function N(q, M) {
                    M === void 0 && (M = rn), F.call(this);
                    var H = new K(q);
                    H.pathname || (H.pathname = "/"), this.url = H.toString(), this.originalWebSocket = null;
                    var pe = _e.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, M), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket = M.WebSocket, M.WebSocket = Me
                }, N.prototype.restoreWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket !== null && (M.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(M) {
                    M === void 0 && (M = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof M == "function" && M()
                }, N.prototype.on = function(M, H) {
                    this.addEventListener(M, H)
                }, N.prototype.close = function(M) {
                    M === void 0 && (M = {});
                    var H = M.code,
                        pe = M.reason,
                        ge = M.wasClean,
                        Ne = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = Me.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: H || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(M, H, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = _e.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (H = Array.prototype.slice.call(arguments, 1, arguments.length), H = H.map(function(Ve) {
                        return L(Ve)
                    })) : H = L(H), Ne.forEach(function(Ve) {
                        Array.isArray(H) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: M,
                            data: H,
                            origin: ge.url,
                            target: Ve.target
                        })].concat(H)) : Ve.dispatchEvent(l({
                            type: M,
                            data: H,
                            origin: ge.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, N.prototype.to = function(M, H, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Ve = it(pe.concat(_e.websocketsLookup(this.url, M, H)));
                    return {
                        to: function(pt, Ft) {
                            return ge.to.call(ge, pt, Ft, Ve)
                        },
                        emit: function(Ft, Ye) {
                            Ne.emit(Ft, Ye, {
                                websockets: Ve
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var M = [], H = arguments.length; H--;) M[H] = arguments[H];
                    return this.to.apply(null, M)
                }, N.prototype.simulate = function(M) {
                    var H = _e.websocketsLookup(this.url);
                    M === "error" && H.forEach(function(pe) {
                        pe.readyState = Me.CLOSED, pe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, N
            }(be);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(F) {
            function N(M, H) {
                var pe = this;
                M === void 0 && (M = "socket.io"), H === void 0 && (H = ""), F.call(this), this.binaryType = "blob";
                var ge = new K(M);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof H == "string" || typeof H == "object" && H !== null ? this.protocol = H : Array.isArray(H) && H.length > 0 && (this.protocol = H[0]);
                var Ne = _e.attachWebSocket(this, this.url);
                je(function() {
                    Ne ? (this.readyState = N.OPEN, Ne.dispatchEvent(E({
                        type: "connection"
                    }), Ne, this), Ne.dispatchEvent(E({
                        type: "connect"
                    }), Ne, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = N.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var q = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var H = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), H && H.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), H), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(H) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: H,
                        origin: this.url,
                        data: pe
                    }),
                    Ve = _e.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(pe)), this
            }, N.prototype.send = function(H) {
                return this.emit("message", H), this
            }, q.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var M = this,
                    H = _e.serverLookup(this.url);
                if (!H) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return H.emit(ge, Ne, {
                            websockets: _e.websocketsLookup(M.url, null, M)
                        }), M
                    },
                    to: function(ge) {
                        return H.to(ge, M)
                    },
                    in: function(ge) {
                        return H.in(ge, M)
                    }
                }
            }, N.prototype.on = function(H, pe) {
                return this.addEventListener(H, pe), this
            }, N.prototype.off = function(H, pe) {
                this.removeEventListener(H, pe)
            }, N.prototype.hasListeners = function(H) {
                var pe = this.listeners[H];
                return Array.isArray(pe) ? !!pe.length : !1
            }, N.prototype.join = function(H) {
                _e.addMembershipToRoom(this, H)
            }, N.prototype.leave = function(H) {
                _e.removeMembershipFromRoom(this, H)
            }, N.prototype.to = function(H) {
                return this.broadcast.to(H)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(H) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Ve = H.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    ge.length > 0 ? Ft.apply(pe, ge) : Ft.call(pe, H.data ? H.data : H)
                })
            }, Object.defineProperties(N.prototype, q), N
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(N, q) {
            return new yt(N, q)
        };
        bt.connect = function(N, q) {
            return bt(N, q)
        };
        var Jt = ct,
            Je = Me,
            Lt = bt;
        n.Server = Jt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var rC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(_, S) {
            var I = _.x - S.x,
                D = _.y - S.y;
            return I * I + D * D
        }

        function n(_, S, I) {
            var D = S.x,
                $ = S.y,
                J = I.x - D,
                ie = I.y - $;
            if (J !== 0 || ie !== 0) {
                var Y = ((_.x - D) * J + (_.y - $) * ie) / (J * J + ie * ie);
                Y > 1 ? (D = I.x, $ = I.y) : Y > 0 && (D += J * Y, $ += ie * Y)
            }
            return J = _.x - D, ie = _.y - $, J * J + ie * ie
        }

        function i(_, S) {
            for (var I = _[0], D = [I], $, J = 1, ie = _.length; J < ie; J++) $ = _[J], e($, I) > S && (D.push($), I = $);
            return I !== $ && D.push($), D
        }

        function a(_, S, I, D, $) {
            for (var J = D, ie, Y = S + 1; Y < I; Y++) {
                var re = n(_[Y], _[S], _[I]);
                re > J && (ie = Y, J = re)
            }
            J > D && (ie - S > 1 && a(_, S, ie, D, $), $.push(_[ie]), I - ie > 1 && a(_, ie, I, D, $))
        }

        function f(_, S) {
            var I = _.length - 1,
                D = [_[0]];
            return a(_, 0, I, S, D), D.push(_[I]), D
        }

        function v(_, S, I) {
            if (_.length <= 2) return _;
            var D = S !== void 0 ? S * S : 1;
            return _ = I ? _ : i(_, D), _ = f(_, D), _
        }
        t.exports = v, t.exports.default = v
    })()
})(rC);
const sC = Et.View.extend({
    el: "#banner",
    template: nt.template(`
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
        vh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            le(window).trigger("resize")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new sC({
            model: new at.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp3-fakinit/",
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
ot(ni, "view", null), ot(ni, "isInitialized", !1), ot(ni, "bannerConfig", null);
var oC = {};
(function(t) {
    (function(e) {
        e(Pi.exports, at, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(m) {
            m = e.map(e.flatten([m]), function(P) {
                return e.defaults({}, P, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(m)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(m, P) {
                if (e.isObject(P)) {
                    e.each(P, function(se, ye) {
                        this.unstickit(m, ye)
                    }, this);
                    return
                }
                var W = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(m && se.model !== m) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), W.push(se.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), P)
            },
            stickit: function(m, P) {
                var W = m || this.model,
                    ae = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), se && (ye = se.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, P, W) {
                var ae = m || this.model,
                    se = ".stickit." + ae.cid;
                if (W = W || {}, e.isObject(P)) {
                    var ye = P;
                    e.each(ye, function(K, je) {
                        this.addBinding(ae, je, K)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var ke = $(d, W),
                        Oe = ke.observe;
                    ke.selector = P, ke.view = this;
                    var Pe = ke.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: ke
                        }, ke.setOptions);
                    if (ke._destroy = function() {
                            v.call(this, ke.destroy, d, ae, ke)
                        }, J(d, ke, ae, Oe), Y(d, ke, ae, Oe), ie(d, ke, ae), Oe) {
                        e.each(ke.events, function(K) {
                            var je = K + se,
                                U = function(Ae) {
                                    var be = v.call(this, ke.getVal, d, Ae, ke, a.call(arguments, 1)),
                                        we = _(ke.updateModel, be, Ae, ke);
                                    we && I(ae, Oe, be, lt, ke)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(je, oe, e.bind(U, this))
                        }, this), e.each(e.flatten([Oe]), function(K) {
                            S(ae, "change:" + K, ke, function(je, U, oe) {
                                var Ae = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = D(ae, Oe, ke);
                                    re(d, ke, be, ae)
                                }
                            })
                        });
                        var Be = D(ae, Oe, ke);
                        re(d, ke, Be, ae, !0)
                    }
                    v.call(this, ke.initialize, d, ae, ke)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(m, P) {
                var W = (P || "").split("."),
                    ae = e.reduce(W, function(se, ye) {
                        return se[ye]
                    }, m);
                return ae == null ? m : ae
            },
            v = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, a.call(arguments, 1))
            },
            _ = function(m, P, W) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var ae = e.last(arguments).view;
                    return v.apply(ae, arguments)
                }
                return !1
            },
            S = function(m, P, W, ae) {
                var se = W.view;
                m.on(P, ae, se), se._modelBindings.push({
                    model: m,
                    event: P,
                    fn: ae,
                    config: W
                })
            },
            I = function(m, P, W, ae, se) {
                var ye = {},
                    d = se.view;
                se.onSet && (W = v.call(d, se.onSet, W, se)), se.set ? v.call(d, se.set, P, W, ae, se) : (ye[P] = W, e.isArray(P) && e.isArray(W) && (ye = e.reduce(P, function(ke, Oe, Pe) {
                    return ke[Oe] = e.has(W, Pe) ? W[Pe] : null, ke
                }, {})), m.set(ye, ae))
            },
            D = function(m, P, W) {
                var ae = W.view,
                    se = function(ke) {
                        return m[W.escape ? "escape" : "get"](ke)
                    },
                    ye = function(ke) {
                        return ke == null ? "" : ke
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return W.onGet && (d = v.call(ae, W.onGet, d, W)), e.isArray(d) ? e.map(d, ye) : ye(d)
            },
            $ = i.getConfiguration = function(m, P) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ye, d, ke) {
                        se[ke.updateMethod] && se[ke.updateMethod](ye)
                    },
                    getVal: function(se, ye, d) {
                        return se[d.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(se) {
                    return m.is(se.selector)
                })), W.push(P);
                var ae = e.extend.apply(e, W);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(m, P, W, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ye;
                    var ke = "",
                        Oe = d.observe || (d.observe = ae),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = D(W, Oe, d);
                            d.name === "class" ? (m.removeClass(ke).addClass(Be), ke = Be) : m[lt](d.name, Be)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        S(W, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ie = function(m, P, W, ae) {
                e.each(P.classes || [], function(se, ye) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        ke = function() {
                            var Oe = D(W, d, se);
                            m.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([d]), function(Oe) {
                        S(W, "change:" + Oe, P, ke)
                    }), ke()
                })
            },
            Y = function(m, P, W, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ye = function() {
                            var d = P.visible,
                                ke = P.visibleFn,
                                Oe = D(W, ae, P),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!v.call(se, d, Oe, P)), ke ? v.call(se, ke, m, Pe, P) : m.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        S(W, "change:" + d, P, ye)
                    }), ye()
                }
            },
            re = function(m, P, W, ae, se) {
                var ye = P.view;
                !_(P.updateView, W, P) || (v.call(ye, P.update, m, W, ae, P), se || v.call(ye, P.afterUpdate, m, W, P))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(m, P) {
                m.val(P)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(m, P) {
                m.val(P)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(m, P) {
                m.filter('[value="' + P + '"]').prop("checked", !0)
            },
            getVal: function(m) {
                return m.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(m, P, W, ae) {
                if (m.length > 1) P || (P = []), m.each(function(ye, d) {
                    var ke = n.$(d),
                        Oe = e.contains(P, ke.val());
                    ke.prop("checked", Oe)
                });
                else {
                    var se = e.isBoolean(P) ? P : P === m.val();
                    m.prop("checked", se)
                }
            },
            getVal: function(m) {
                var P;
                if (m.length > 1) P = e.reduce(m, function(ae, se) {
                    var ye = n.$(se);
                    return ye.prop("checked") && ae.push(ye.val()), ae
                }, []);
                else {
                    P = m.prop("checked");
                    var W = m.val();
                    W !== "on" && W != null && (P = P ? m.val() : null)
                }
                return P
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(m, P, W, ae) {
                var se, ye = ae.selectOptions,
                    d = ye && ye.collection || void 0,
                    ke = m.prop("multiple");
                if (!ye) {
                    ye = {};
                    var Oe = function(he) {
                        return he.map(function(_e, Te) {
                            var $e = n.$(Te).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : Te.value,
                                label: Te.text
                            }
                        }).get()
                    };
                    m.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, m.find("> option").length && (d.opt_labels.push(void 0), e.each(m.find("> option"), function(he) {
                        d[void 0] = Oe(n.$(he))
                    })), e.each(m.find("optgroup"), function(he) {
                        var _e = n.$(he).attr("label");
                        d.opt_labels.push(_e), d[_e] = Oe(n.$(he).find("option"))
                    })) : d = Oe(m.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(he, _e, Te) {
                    e.each(he, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(k, O, L) {
                                Ke.text(k), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), L === !0 && Ke.prop("disabled", "disabled")
                            },
                            Ht, E, l;
                        $e === "__default__" ? (Ht = Te.label, E = Te.value, l = Te.disabled) : (Ht = f($e, ye.labelPath), E = f($e, ye.valuePath), l = f($e, ye.disabledPath)), Bt(Ht, E, l);
                        var g = function() {
                            return !ke && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : ke && e.isArray(Te) && e.each(Te, function(k) {
                            e.isObject(k) && (k = f(k, ye.valuePath)), (k === dt || e.isObject(k) && e.isEqual(dt, k)) && Ke.prop("selected", !0)
                        }), _e.append(Ke)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        K = function() {
                            var he = D(W, ae.observe, ae);
                            v.call(this, ae.update, m, he, W, ae)
                        },
                        je = function() {
                            Be.off("add remove reset sort", K)
                        },
                        U = function() {
                            je(), Be.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", K, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", U)
                    }), W.once("stickit:unstuck", U, this), se = se.toJSON()
                }
                if (ye.defaultOption) {
                    var oe = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, m, ae) : ye.defaultOption;
                    Pe(["__default__"], m, oe)
                }
                if (e.isArray(se)) Pe(se, m, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(he) {
                    var _e = n.$("<optgroup/>").attr("label", he);
                    Pe(se[he], _e, P), m.append(_e)
                });
                else {
                    var Ae = [],
                        be;
                    for (var we in se) be = {}, be[ye.valuePath] = we, be[ye.labelPath] = se[we], Ae.push(be);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, m, P)
                }
            },
            getVal: function(m) {
                var P = m.find("option:selected");
                return m.prop("multiple") ? e.map(P, function(W) {
                    return n.$(W).data("stickit-bind-val")
                }) : P.data("stickit-bind-val")
            }
        }]), i
    })
})(oC);
const aC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    qu = Et.View.extend({
        template: nt.template(aC),
        model: new at.Model({}),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || le("<div />").text(t).html()
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
            const e = le(t.target).data("action");
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
    Xu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Xu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function lC(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function cC(t) {
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
                    v = null,
                    _ = null,
                    S = function() {
                        i.clientWidth !== v && J()
                    },
                    I = function(ie) {
                        window.removeEventListener("resize", S, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(Y) {
                            i.style[Y] = ie[Y]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", S, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: I,
                    update: J
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), J()
            }

            function D(ie) {
                var Y = i.style.width;
                i.style.width = "0px", i.style.width = Y, i.style.overflowY = ie
            }

            function $() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var m = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && m.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return m
                        }(i),
                        Y = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", v = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), Y && (document.documentElement.scrollTop = Y)
                }
            }

            function J() {
                $();
                var ie = Math.round(parseFloat(i.style.height)),
                    Y = window.getComputedStyle(i, null),
                    re = Y.boxSizing === "content-box" ? Math.round(parseFloat(Y.height)) : i.offsetHeight;
                if (re < ie ? Y.overflowY === "hidden" && (D("scroll"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : Y.overflowY !== "hidden" && (D("hidden"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== re) {
                    _ = re;
                    var m = Xu("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], lC), t
}, Kr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], cC), t
});
var rc = Kr;
const uC = `<form>\r
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
        model: new at.Model({}),
        template: nt.template(uC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : le("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || rc(le("textarea"))
        },
        onSubmitClick() {
            return le("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (le("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            le(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = le(this.$el).find("textarea");
            le(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = le(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return qt.sanitize(this.getValue())
        },
        sanitize(t) {
            return qt.sanitize(t)
        },
        sanitizeInput(t) {
            return qt.sanitizeInput(t)
        }
    }),
    hC = '<div class="text"></div>',
    Bi = Et.View.extend({
        tagName: "div",
        template: nt.template(hC),
        model: new at.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : le("<div />").text(t).html()
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
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Bi : qu
        },
        collection: new at.Collection([]),
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

function Yu(t, ...e) {
    !sc[t] || sc[t].map(n => n(...e))
}
let Jr, Us;

function Mi() {
    return Jr
}

function vo() {
    return Us
}

function dC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Us = Jr.getContext("2d"), Us.imageSmoothingEnabled = !1, Yu("init"), {
        canvas: Jr,
        context: Us
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
            height: v,
            margin: _ = 0
        } = e.frame;
        this.width = f, this.height = v, this.margin = _, this._f = 0, this._a = 0
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
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const fC = () => {};

function pC() {
    let t = Mi();
    vo().clearRect(0, 0, t.width, t.height)
}

function gC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        v = 1 / t,
        _ = e ? pC : fC,
        S, I, D, $, J;
    const ie = window.performance || Date;

    function Y() {
        if (I = requestAnimationFrame(Y), D = ie.now(), $ = D - S, S = D, !($ > 1e3)) {
            for (Yu("tick"), a += $; a >= f;) J.update(v), a -= f;
            _(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            S = ie.now(), this.isStopped = !1, requestAnimationFrame(Y)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: Y,
        set _last(re) {
            S = re
        }
    }, J
}
class mC {
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
mC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        v = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
}
class sl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Mi();
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
            ddx: v,
            ddy: _,
            width: S,
            height: I,
            image: D
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, f), this.acceleration = fr(v, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
        for (let $ in e) this[$] = e[$];
        D && (this.width = S !== void 0 ? S : D.width, this.height = I !== void 0 ? I : D.height), this.sx = 0, this.sy = 0
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

function vC(t) {
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
class yC {
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
                loop: v
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(_ => {
                n = n.concat(vC(_))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: v
            })
        }
    }
}
yC.prototype;
var Ku = {
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
            v = c => {
                console.error("".concat(n, " ").concat(c))
            },
            _ = [],
            S = c => {
                _.includes(c) || (_.push(c), f(c))
            },
            I = (c, h) => {
                S('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
            $ = c => c && typeof c.toPromise == "function",
            J = c => $(c) ? c.toPromise() : Promise.resolve(c),
            ie = c => c && Promise.resolve(c) === c,
            Y = c => c[Math.floor(Math.random() * c.length)],
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
            m = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            P = {},
            W = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => m.indexOf(c) !== -1,
            ye = c => P[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            ke = c => {
                W.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && I(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && ke(h), Oe(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            K = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(K.container)),
            oe = c => {
                const h = U();
                return h ? h.querySelector(c) : null
            },
            Ae = c => oe(".".concat(c)),
            be = () => Ae(K.popup),
            we = () => Ae(K.icon),
            he = () => Ae(K.title),
            _e = () => Ae(K["html-container"]),
            Te = () => Ae(K.image),
            $e = () => Ae(K["progress-steps"]),
            Ke = () => Ae(K["validation-message"]),
            dt = () => oe(".".concat(K.actions, " .").concat(K.confirm)),
            Bt = () => oe(".".concat(K.actions, " .").concat(K.deny)),
            Ht = () => Ae(K["input-label"]),
            E = () => oe(".".concat(K.loader)),
            l = () => oe(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Ae(K.actions),
            k = () => Ae(K.footer),
            O = () => Ae(K["timer-progress-bar"]),
            L = () => Ae(K.close),
            V = `
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
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, B) => {
                        const me = parseInt(b.getAttribute("tabindex")),
                            Ge = parseInt(B.getAttribute("tabindex"));
                        return me > Ge ? 1 : me < Ge ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll(V)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => ge(b))
            },
            Se = () => Ct(document.body, K.shown) && !Ct(document.body, K["toast-shown"]) && !Ct(document.body, K["no-backdrop"]),
            de = () => be() && Ct(be(), K.toast),
            De = () => be().hasAttribute("data-loading"),
            Me = {
                previousBodyPadding: null
            },
            it = (c, h) => {
                if (c.textContent = "", h) {
                    const B = new DOMParser().parseFromString(h, "text/html");
                    Array.from(B.querySelector("head").childNodes).forEach(me => {
                        c.appendChild(me)
                    }), Array.from(B.querySelector("body").childNodes).forEach(me => {
                        c.appendChild(me)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let B = 0; B < b.length; B++)
                    if (!c.classList.contains(b[B])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(K).includes(b) && !Object.values(je).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
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
                        return c.querySelector(".".concat(K.popup, " > .").concat(K[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.radio, " input:checked")) || c.querySelector(".".concat(K.popup, " > .").concat(K.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.range, " input"));
                    default:
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.input))
                }
            },
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Jt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(B => {
                    Array.isArray(c) ? c.forEach(me => {
                        b ? me.classList.add(B) : me.classList.remove(B)
                    }) : b ? c.classList.add(B) : c.classList.remove(B)
                }))
            },
            Je = (c, h) => {
                Jt(c, h, !0)
            },
            Lt = (c, h) => {
                Jt(c, h, !1)
            },
            F = (c, h) => {
                const b = Array.from(c.children);
                for (let B = 0; B < b.length; B++) {
                    const me = b[B];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            N = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            q = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            M = c => {
                c.style.display = "none"
            },
            H = (c, h, b, B) => {
                const me = c.querySelector(h);
                me && (me.style[b] = B)
            },
            pe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? q(c, b) : M(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge(Bt()) && !ge(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    B = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
            },
            Ft = function(c) {
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
                    B = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(B, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            rt = {},
            Dn = () => {
                rt.previousActiveElement instanceof HTMLElement ? (rt.previousActiveElement.focus(), rt.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    B = window.scrollY;
                rt.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, B)
            }),
            _r = `
 <div aria-labelledby="`.concat(K.title, '" aria-describedby="').concat(K["html-container"], '" class="').concat(K.popup, `" tabindex="-1">
   <button type="button" class="`).concat(K.close, `"></button>
   <ul class="`).concat(K["progress-steps"], `"></ul>
   <div class="`).concat(K.icon, `"></div>
   <img class="`).concat(K.image, `" />
   <h2 class="`).concat(K.title, '" id="').concat(K.title, `"></h2>
   <div class="`).concat(K["html-container"], '" id="').concat(K["html-container"], `"></div>
   <input class="`).concat(K.input, `" />
   <input type="file" class="`).concat(K.file, `" />
   <div class="`).concat(K.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(K.select, `"></select>
   <div class="`).concat(K.radio, `"></div>
   <label for="`).concat(K.checkbox, '" class="').concat(K.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(K.label, `"></span>
   </label>
   <textarea class="`).concat(K.textarea, `"></textarea>
   <div class="`).concat(K["validation-message"], '" id="').concat(K["validation-message"], `"></div>
   <div class="`).concat(K.actions, `">
     <div class="`).concat(K.loader, `"></div>
     <button type="button" class="`).concat(K.confirm, `"></button>
     <button type="button" class="`).concat(K.deny, `"></button>
     <button type="button" class="`).concat(K.cancel, `"></button>
   </div>
   <div class="`).concat(K.footer, `"></div>
   <div class="`).concat(K["timer-progress-bar-container"], `">
     <div class="`).concat(K["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            Sn = () => {
                const c = U();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            sn = () => {
                rt.currentInstance.resetValidationMessage()
            },
            Sr = () => {
                const c = be(),
                    h = F(c, K.input),
                    b = F(c, K.file),
                    B = c.querySelector(".".concat(K.range, " input")),
                    me = c.querySelector(".".concat(K.range, " output")),
                    Ge = F(c, K.select),
                    Ut = c.querySelector(".".concat(K.checkbox, " input")),
                    Vn = F(c, K.textarea);
                h.oninput = sn, b.onchange = sn, Ge.onchange = sn, Ut.onchange = sn, Vn.oninput = sn, B.oninput = () => {
                    sn(), me.value = B.value
                }, B.onchange = () => {
                    sn(), me.value = B.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), K.rtl)
            },
            vi = c => {
                const h = Sn();
                if (In()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = K.container, h && Je(b, K["no-transition"]), it(b, _r);
                const B = Tr(c.target);
                B.appendChild(b), mi(c), $i(B), Sr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? Fi(c, h) : c && it(h, c)
            },
            Fi = (c, h) => {
                c.jquery ? ji(h, c) : it(h, c.toString())
            },
            ji = (c, h) => {
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
                c.className = K["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            wi = (c, h) => {
                const b = g(),
                    B = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? M(b) : q(b), ct(b, h, "actions"), Gn(b, B, h), it(B, h.loaderHtml), ct(B, h, "loader")
            };

        function Gn(c, h, b) {
            const B = dt(),
                me = Bt(),
                Ge = l();
            bi(B, "confirm", b), bi(me, "deny", b), bi(Ge, "cancel", b), Gi(B, me, Ge, b), b.reverseButtons && (b.toast ? (c.insertBefore(Ge, B), c.insertBefore(me, B)) : (c.insertBefore(Ge, h), c.insertBefore(me, h), c.insertBefore(B, h)))
        }

        function Gi(c, h, b, B) {
            if (!B.buttonsStyling) return Lt([c, h, b], K.styled);
            Je([c, h, b], K.styled), B.confirmButtonColor && (c.style.backgroundColor = B.confirmButtonColor, Je(c, K["default-outline"])), B.denyButtonColor && (h.style.backgroundColor = B.denyButtonColor, Je(h, K["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Je(b, K["default-outline"]))
        }

        function bi(c, h, b) {
            pe(c, b["show".concat(a(h), "Button")], "inline-block"), it(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = K[h], ct(c, b, "".concat(h, "Button")), Je(c, b["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const b = U();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], K["no-backdrop"])
        }

        function o(c, h) {
            h in K ? Je(c, K[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, K.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in K && Je(c, K[b])
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
                    B = A.innerParams.get(c),
                    me = !B || h.input !== B.input;
                Q.forEach(Ge => {
                    const Ut = F(b, K[Ge]);
                    Xt(Ge, h.inputAttributes), Ut.className = K[Ge], me && M(Ut)
                }), h.input && (me && We(h), Un(h))
            },
            We = c => {
                if (!jt[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    b = jt[c.input](h, c);
                q(h), setTimeout(() => {
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
                    for (const B in h) b.setAttribute(B, h[B])
                }
            },
            Un = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Hn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = K.input;
                    const B = document.createElement("label"),
                        me = K["input-label"];
                    B.setAttribute("for", c.id), B.className = me, typeof b.customClass == "object" && Je(B, b.customClass.inputLabel), B.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", B)
                }
            },
            Ar = c => F(be(), K[c] || K.input),
            Yt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, h) => (Yt(c, h.inputValue), Hn(c, c, h), Nn(c, h), c.type = h.input, c), jt.file = (c, h) => (Hn(c, c, h), Nn(c, h), c), jt.range = (c, h) => {
            const b = c.querySelector("input"),
                B = c.querySelector("output");
            return Yt(b, h.inputValue), b.type = h.input, Yt(B, h.inputValue), Hn(b, c, h), c
        }, jt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                it(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Hn(c, c, h), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, h) => {
            const b = yt(be(), "checkbox");
            b.value = "1", b.id = K.checkbox, b.checked = Boolean(h.inputValue);
            const B = c.querySelector("span");
            return it(B, h.inputPlaceholder), b
        }, jt.textarea = (c, h) => {
            Yt(c, h.inputValue), Nn(c, h), Hn(c, c, h);
            const b = B => parseInt(window.getComputedStyle(B).marginLeft) + parseInt(window.getComputedStyle(B).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const B = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const Ge = c.offsetWidth + b(c);
                            Ge > B ? be().style.width = "".concat(Ge, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Ui = (c, h) => {
                const b = _e();
                ct(b, h, "htmlContainer"), h.html ? (yi(h.html, b), q(b, "block")) : h.text ? (b.textContent = h.text, q(b, "block")) : M(b), xe(c, h)
            },
            bo = (c, h) => {
                const b = k();
                pe(b, h.footer), h.footer && yi(h.footer, b), ct(b, h, "footer")
            },
            Co = (c, h) => {
                const b = L();
                it(b, h.closeButtonHtml), ct(b, h, "closeButton"), pe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const b = A.innerParams.get(c),
                    B = we();
                if (b && h.icon === b.icon) {
                    ms(B, h), Rr(B, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    M(B);
                    return
                }
                if (h.icon && Object.keys(je).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), M(B);
                    return
                }
                q(B), ms(B, h), Rr(B, h), Je(B, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const b in je) h.icon !== b && Lt(c, je[b]);
                Je(c, je[h.icon]), bn(c, h), Hi(), ct(c, h, "icon")
            },
            Hi = () => {
                const c = be(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = h
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
                    B;
                h.iconHtml ? B = Ir(h.iconHtml) : h.icon === "success" ? (B = gs, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? B = xo : B = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== B.trim() && it(c, B)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) H(c, b, "backgroundColor", h.iconColor);
                    H(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const b = Te();
                if (!h.imageUrl) return M(b);
                q(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), N(b, "width", h.imageWidth), N(b, "height", h.imageHeight), b.className = K.image, ct(b, h, "image")
            },
            Eo = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return M(b);
                q(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((B, me) => {
                    const Ge = ko(B);
                    if (b.appendChild(Ge), me === h.currentProgressStep && Je(Ge, K["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Ut = Wn(h);
                        b.appendChild(Ut)
                    }
                })
            },
            ko = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step"]), it(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            qn = (c, h) => {
                const b = he();
                pe(b, h.title || h.titleText, "block"), h.title && yi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Dr = (c, h) => {
                const b = U(),
                    B = be();
                h.toast ? (N(b, "width", h.width), B.style.width = "100%", B.insertBefore(E(), we())) : N(B, "width", h.width), N(B, "padding", h.padding), h.color && (B.style.color = h.color), h.background && (B.style.background = h.background), M(Ke()), _o(B, h)
            },
            _o = (c, h) => {
                c.className = "".concat(K.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], K["toast-shown"]), Je(c, K.toast)) : Je(c, K.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, K["icon-".concat(h.icon)])
            },
            Mr = (c, h) => {
                Dr(c, h), Ze(c, h), Eo(c, h), Or(c, h), Ci(c, h), qn(c, h), Co(c, h), Ui(c, h), wi(c, h), bo(c, h), typeof h.didRender == "function" && h.didRender(be())
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
                    h === U() || h.contains(U()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Lr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Wi = ["swal-title", "swal-html", "swal-footer"],
            So = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Io(b), Object.assign(vs(b), To(b), Ao(b), Pr(b), Oo(b), Ro(b, Wi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(B => {
                    Yn(B, ["name", "value"]);
                    const me = B.getAttribute("name"),
                        Ge = B.getAttribute("value");
                    typeof re[me] == "boolean" && Ge === "false" && (h[me] = !1), typeof re[me] == "object" && (h[me] = JSON.parse(Ge))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(B => {
                    Yn(B, ["type", "color", "aria-label"]);
                    const me = B.getAttribute("type");
                    h["".concat(me, "ButtonText")] = B.innerHTML, h["show".concat(a(me), "Button")] = !0, B.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
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
                const B = Array.from(c.querySelectorAll("swal-input-option"));
                return B.length && (h.inputOptions = {}, B.forEach(me => {
                    Yn(me, ["value"]);
                    const Ge = me.getAttribute("value"),
                        Ut = me.innerHTML;
                    h.inputOptions[Ge] = Ut
                })), h
            },
            Ro = (c, h) => {
                const b = {};
                for (const B in h) {
                    const me = h[B],
                        Ge = c.querySelector(me);
                    Ge && (Yn(Ge, []), b[me.replace(/^swal-/, "")] = Ge.innerHTML.trim())
                }
                return b
            },
            Io = c => {
                const h = Wi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    h.indexOf(B) === -1 && f("Unrecognized element <".concat(B, ">"))
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

        function Mo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ws(c) {
            Do(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Mo(c), typeof c.title == "string" && (c.title = c.title.split(`
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
                Me.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Me.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Me.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                Me.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Me.previousBodyPadding, "px"), Me.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, K.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, K.iosfix), Br(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            Br = () => {
                const c = U();
                let h;
                c.ontouchstart = b => {
                    h = Lo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Lo = c => {
                const h = c.target,
                    b = U();
                return Po(c) || No(c) ? !1 : h === b || !Ve(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(_e()) && _e().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            No = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            Fr = c => {
                const h = U(),
                    b = be();
                typeof c.willOpen == "function" && c.willOpen(b);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    Vo(h, b)
                }, $r), Se() && (Bo(h, c.scrollbarPadding, me), xi()), !de() && !rt.previousActiveElement && (rt.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Lt(h, K["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const b = U();
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
                Je(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), q(h, "grid"), setTimeout(() => {
                    Je(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], K.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let h = be();
                h || new At, h = be();
                const b = E();
                de() ? M(we()) : u(h, c), q(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    B = E();
                !h && ge(dt()) && (h = dt()), q(b), h && (M(h), B.setAttribute("data-button-to-replace", h.className)), B.parentNode.insertBefore(B, h), Je([c, b], K.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? G(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
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
            G = (c, h) => {
                const b = be(),
                    B = me => ce[h.input](b, Ce(me), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(me => {
                    c.hideLoading(), B(me)
                })) : typeof h.inputOptions == "object" ? B(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                M(b), J(h.inputValue).then(B => {
                    b.value = h.input === "number" ? parseFloat(B) || 0 : "".concat(B), q(b), b.focus(), c.hideLoading()
                }).catch(B => {
                    v("Error in inputValue promise: ".concat(B)), b.value = "", q(b), b.focus(), c.hideLoading()
                })
            },
            ce = {
                select: (c, h, b) => {
                    const B = F(c, K.select),
                        me = (Ge, Ut, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, it(pn, Ut), pn.selected = ne(Vn, b.inputValue), Ge.appendChild(pn)
                        };
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Vn = Ge[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ut, pn.disabled = !1, B.appendChild(pn), Vn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me(B, Vn, Ut)
                    }), B.focus()
                },
                radio: (c, h, b) => {
                    const B = F(c, K.radio);
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Vn = Ge[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = K.radio, pn.value = Ut, ne(Ut, b.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        it(Ko, Vn), Ko.className = K.label, nr.appendChild(pn), nr.appendChild(Ko), B.appendChild(nr)
                    });
                    const me = B.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, B) => {
                    let me = b;
                    typeof me == "object" && (me = Ce(me)), h.push([B, me])
                }) : Object.keys(c).forEach(b => {
                    let B = c[b];
                    typeof B == "object" && (B = Ce(B)), h.push([b, B])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ue() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            M(h.loader), de() ? c.icon && q(we()) : He(h), Lt([h.popup, h.actions], K.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const He = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? q(h[0], "inline-block") : Ne() && M(c.actions)
        };

        function st(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => ge(be()),
            Nt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            kt = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, B) => {
                et(h), b.toast || (h.keydownHandler = me => qi(c, me, B), h.keydownTarget = b.keydownListenerCapture ? window : be(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const B = te();
                if (B.length) return h = h + b, h === B.length ? h = 0 : h === -1 && (h = B.length - 1), B[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            ki = ["ArrowLeft", "ArrowUp"],
            qi = (c, h, b) => {
                const B = A.innerParams.get(c);
                !B || h.isComposing || h.keyCode === 229 || (B.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, B) : h.key === "Tab" ? Kn(h, B) : [...Dt, ...ki].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, B, b))
            },
            hn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const b = c.target,
                    B = te();
                let me = -1;
                for (let Ge = 0; Ge < B.length; Ge++)
                    if (b === B[Ge]) {
                        me = Ge;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    b = Bt(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, B].includes(document.activeElement)) return;
                const me = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ge = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (Ge = Ge[me], !Ge) return;
                    if (Ge instanceof HTMLButtonElement && ge(Ge)) break
                }
                Ge instanceof HTMLButtonElement && Ge.focus()
            },
            an = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Xn.esc))
            };

        function Mn(c, h, b, B) {
            de() ? Ss(c, B) : (gi(b).then(() => Ss(c, B)), et(rt)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Vr(), Ei(), Lr()), vn()
        }

        function vn() {
            Lt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = Fe.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function ks() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || Ct(h, b.hideClass.popup)) return !1;
            Lt(h, b.showClass.popup), Je(h, b.hideClass.popup);
            const B = U();
            return Lt(B, b.showClass.backdrop), Je(B, b.hideClass.backdrop), _s(c, h, b), !0
        };

        function jr(c) {
            const h = Fe.swalPromiseReject.get(this);
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
            _s = (c, h, b) => {
                const B = U(),
                    me = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), me ? zr(c, h, B, b.returnFocus, b.didClose) : Mn(c, B, b.returnFocus, b.didClose)
            },
            zr = (c, h, b, B, me) => {
                rt.swalCloseEventFinishedCallback = Mn.bind(null, c, b, B, me), h.addEventListener(mn, function(Ge) {
                    Ge.target === h && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback)
                })
            },
            Ss = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function _i(c, h, b) {
            const B = A.domCache.get(c);
            h.forEach(me => {
                B[me].disabled = b
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const B = c.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < B.length; me++) B[me].disabled = h
            } else c.disabled = h
        }

        function As() {
            _i(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function $o() {
            _i(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Fo() {
            return Ts(this.getInput(), !1)
        }

        function jo() {
            return Ts(this.getInput(), !0)
        }

        function Xi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            it(h.validationMessage, c), h.validationMessage.className = K["validation-message"], b.customClass && b.customClass.validationMessage && Je(h.validationMessage, b.customClass.validationMessage), q(h.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", K["validation-message"]), bt(B), Je(B, K.inputerror))
        }

        function zo() {
            const c = A.domCache.get(this);
            c.validationMessage && M(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, K.inputerror))
        }

        function Go() {
            return A.domCache.get(this).progressSteps
        }

        function Uo(c) {
            const h = be(),
                b = A.innerParams.get(this);
            if (!h || Ct(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Si(c),
                me = Object.assign({}, b, B);
            Mr(this, me), A.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Si = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                se(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Ho() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && rt.swalCloseEventFinishedCallback && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Gr(this)
        }
        const Gr = c => {
                Tn(c), delete c.params, delete rt.keydownHandler, delete rt.keydownTarget, delete rt.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(Fe, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Ur = Object.freeze({
            hideLoading: ue,
            disableLoading: ue,
            getInput: st,
            close: Cn,
            isAwaitingPromise: ks,
            rejectPromise: jr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: $o,
            enableInput: Fo,
            disableInput: jo,
            showValidationMessage: Xi,
            resetValidationMessage: zo,
            getProgressSteps: Go,
            update: Uo,
            _destroy: Ho
        });
        const Os = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? _t(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? _t(c, "deny") : dn(c, !1)
            },
            Wo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            _t = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const B = w(c, b);
                b.inputValidator ? Yi(c, B, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, B) : Ji(c, B) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Yi = (c, h, b) => {
                const B = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(B.inputValidator(h, B.validationMessage))).then(Ge => {
                    c.enableButtons(), c.enableInput(), Ge ? c.showValidationMessage(Ge) : b === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(h, b.validationMessage))).then(me => {
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
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(h, b.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            qo = (c, h, b) => {
                A.innerParams.get(c).toast ? Xo(c, h, b) : (Hr(h), Ds(h), Qi(c, h, b))
            },
            Xo = (c, h, b) => {
                h.popup.onclick = () => {
                    const B = A.innerParams.get(c);
                    B && (Is(B) || B.timer || B.input) || b(Xn.close)
                }
            },
            Is = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Hr = c => {
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
                h.container.onclick = B => {
                    const me = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    B.target === h.container && D(me.allowOutsideClick) && b(Xn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Yo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const me = c[B];
                    typeof me == "string" || er(me) ? h[b] = me : me !== void 0 && v("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
            return new c(...b)
        }

        function Wr(c) {
            class h extends this {
                _main(B, me) {
                    return super._main(B, Object.assign({}, c, me))
                }
            }
            return h
        }
        const qr = () => rt.timeout && rt.timeout.getTimerLeft(),
            Ms = () => {
                if (rt.timeout) return Ye(), rt.timeout.stop()
            },
            R = () => {
                if (rt.timeout) {
                    const c = rt.timeout.start();
                    return Ft(c), c
                }
            },
            j = () => {
                const c = rt.timeout;
                return c && (c.running ? Ms() : R())
            },
            X = c => {
                if (rt.timeout) {
                    const h = rt.timeout.increase(c);
                    return Ft(h, !0), h
                }
            },
            fe = () => rt.timeout && rt.timeout.isRunning();
        let ee = !1;
        const ve = {};

        function Ee() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            ve[c] = this, ee || (document.body.addEventListener("click", Re), ee = !0)
        }
        const Re = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const b in ve) {
                    const B = h.getAttribute(b);
                    if (B) {
                        ve[b].fire({
                            template: B
                        });
                        return
                    }
                }
        };
        var Le = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ye,
            argsToParams: Yo,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: kt,
            getContainer: U,
            getPopup: be,
            getTitle: he,
            getHtmlContainer: _e,
            getImage: Te,
            getIcon: we,
            getInputLabel: Ht,
            getCloseButton: L,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: k,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: De,
            fire: tr,
            mixin: Wr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: qr,
            stopTimer: Ms,
            resumeTimer: R,
            toggleTimer: j,
            increaseTimer: X,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class Ue {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
                const me = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: me,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Ge = ze._main(ze.params);
                A.promise.set(this, Ge)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, h)), rt.currentInstance && (rt.currentInstance._destroy(), Se() && Lr()), rt.currentInstance = ze;
                const B = ht(h, b);
                ws(B), Object.freeze(B), rt.timeout && (rt.timeout.stop(), delete rt.timeout), clearTimeout(rt.restoreFocusTimeout);
                const me = Tt(ze);
                return Mr(ze, B), A.innerParams.set(ze, B), Xe(ze, me, B)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, b) => new Promise((B, me) => {
                const Ge = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                Fe.swalPromiseResolve.set(c, B), Fe.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => Wo(c, Ge), h.closeButton.onclick = () => Ge(Xn.close), qo(c, h, Ge), on(c, rt, b, Ge), p(c, b), Fr(b), qe(rt, b, Ge), Gt(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = So(c),
                    B = Object.assign({}, re, h, b, c);
                return B.showClass = Object.assign({}, re.showClass, B.showClass), B.hideClass = Object.assign({}, re.hideClass, B.hideClass), B
            },
            Tt = c => {
                const h = {
                    popup: be(),
                    container: U(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: L(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            qe = (c, h, b) => {
                const B = O();
                M(B), h.timer && (c.timeout = new Nr(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (q(B), ct(B, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Gt = (c, h) => {
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
            const h = Y([{
                text: `\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,
        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:`,
                id: "4CfDhaRkw7I"
            }, {
                text: "\u042D\u043C\u043F\u0430\u0442\u0438\u044F - \u0433\u043B\u0430\u0432\u043D\u043E\u0435 <strong>\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435</strong> \u0447\u0443\u0432\u0441\u0442\u0432\u043E. \u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C. <strong>\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E.</strong>",
                id: "s-GLAIY4DXA"
            }]);
            it(c, `
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
        Object.assign(Ue.prototype, Ur), Object.assign(Ue, Le), Object.keys(Ur).forEach(c => {
            Ue[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ue.DismissReason = Xn, Ue.version = "11.4.26";
        const At = Ue;
        return At.default = At, At
    }), typeof vt < "u" && vt.Sweetalert2 && (vt.swal = vt.sweetAlert = vt.Swal = vt.SweetAlert = vt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Ku);
const Rn = Ku.exports;
class Ot {
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
        const n = new URL("main/pp3/fakinit/assets/8cdd50e7.png", self.location).href,
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
const wC = `<div class="canvasContainer">\r
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
    bC = {
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
                i = Mi().width,
                a = Mi().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Mi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Mi().width, Mi().height))
        }
    },
    CC = Et.View.extend({
        template: nt.template(wC),
        className: "CameraUser",
        model: new at.Model({
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
            dC("cameraCanvas"), t.sprites = [], t.gameLoop = gC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = cl(bC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                    console.error(i), Ot.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else Ot.show("alert", {
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
                i = le(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(le(window).innerHeight(), 250),
                v = Math.min(a / t, f / e),
                _ = t * v,
                S = e * v;
            n.style.width = `${_}px`, n.style.height = `${S}px`, n.width = _, n.height = S
        }
    }),
    si = at.Model.extend({
        defaults: {},
        set(t, e) {
            const n = nt.extend({}, this.attributes, this.defaults, t);
            return at.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = nt.extend({}, this.defaults, this.attributes, t);
            return at.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    xC = si.extend({
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
    EC = Et.View.extend({
        template: nt.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new xC,
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
            this.cameraView = this.cameraView || new CC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    kC = '<a class="change-color button-color btn"></a>',
    _C = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: nt.template(kC),
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
    SC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: _C,
        collection: new at.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    TC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp3/fakinit/assets/5f12600b.png"/></svg>\r
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
    AC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: nt.template(TC),
        model: new at.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new SC({
                collection: new at.Collection
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
class Ju {
    constructor(e, n, i) {
        ot(this, "options");
        ot(this, "canvas");
        ot(this, "canvasCTX");
        ot(this, "tipCanvas");
        ot(this, "tipCanvasCTX");
        ot(this, "lines", []);
        ot(this, "image");
        ot(this, "startX", null);
        ot(this, "startY", null);
        ot(this, "smoothedMouseX", null);
        ot(this, "smoothedMouseY", null);
        ot(this, "lastMouse", {});
        ot(this, "lastMouseChangeVector", {});
        ot(this, "lastSmoothedMouse", {});
        ot(this, "lastThickness");
        ot(this, "lastRotation");
        ot(this, "colorLevel");
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
        const v = this.smoothedMouseX - this.lastSmoothedMouse.x,
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            S = Math.sqrt(v * v + _ * _);
        let I;
        S !== 0 ? I = Math.PI / 2 + Math.atan2(_, v) : I = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * S,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            Y = Math.sin(I),
            re = Math.cos(I),
            m = this.lastThickness * J,
            P = this.lastThickness * ie,
            W = $ * Y,
            ae = $ * re,
            se = .33 * S * J,
            ye = -.33 * S * ie,
            d = this.lastSmoothedMouse.x + P + se,
            ke = this.lastSmoothedMouse.y + m + ye,
            Oe = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - m + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, ke, this.smoothedMouseX + ae, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = $, this.lastMouseChangeVector = {
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
class OC {
    constructor(e, n = {}) {
        ot(this, "canvasSelector");
        ot(this, "canvas");
        ot(this, "ctx");
        ot(this, "options");
        ot(this, "history");
        ot(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = le(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Ju(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const v = i.getContext("2d");
        return n && (v.fillStyle = n, v.fillRect(0, 0, a, f)), v.drawImage(this.highlighterSketch.canvas, 0, 0, a, f), v.drawImage(this.markerSketch.canvas, 0, 0, a, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const RC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    IC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: nt.template(RC),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new OC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = le(n)[0].width / le(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                v = this.sketchpad.options.thickness;
            let _ = (e.clientX - a.left) * i;
            _ = Math.min(f.width - v, Math.max(v, _));
            let S = (e.clientY - a.top) * i;
            return S = Math.min(f.height - v, Math.max(v, S)), {
                x: _,
                y: S
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
    DC = `<div class="controller-content">\r
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
    LC = Et.View.extend({
        className: "Draw",
        template: nt.template(DC),
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
                    return t ? t.html ? t.html : le("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new Bi({}), this.toolbarComponent = this.toolbarComponent || new AC({
                model: new at.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new IC({
                model: new at.Model
            }), this.buttonsCollection = this.buttonsCollection || new at.Collection([]), this.buttonsComponent = this.buttonsComponent || new fi({
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
            this.stickit(), this.update(), this.onResize(), Ot.vibrate()
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
            if (t.length === 0 && !this.model.get("allowEmpty")) return Ot.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && Ot.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            Ot.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = le("#sketchpad"),
                e = le("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(le(".controller-content").css("border-top-width"), 10) * 2 + le(".playerTopBar").innerHeight() + le("#prompt").innerHeight() + le("#toolbar").innerHeight() + parseInt(le(".canvasContainer").css("border-top-width"), 10) * 2 + le("#buttons").innerHeight() + le("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(le(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(le(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(le(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                v = 2,
                _ = Math.min(t.width() - i, a * v),
                S = Math.max(le("#controller-container").innerHeight() - n, 250),
                I = Math.min(_ / a, S / f),
                D = a * I,
                $ = f * I;
            e.style.width = `${D}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
        }
    }),
    PC = `<div>
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
    NC = si.extend({
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
    VC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: nt.template(PC),
        model: new NC,
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
                    return t ? t.html ? t.html : le("<div />").text(t.text).html() : ""
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
                model: new at.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new at.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new at.Collection([{
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
            this.update(), Ot.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = nt.throttle(() => {
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
                n = nt.without(t, e);
            return this.inputComponent.setValue(nt.shuffle(n)[0]), !1
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
    model: new at.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: nt.template(`
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
        const a = new Ju(t, e, n);
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
            this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new at.Model({});
            const e = this.client.parseEntities();
            this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
                this.update().catch(this.caughtError)
            }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
        },
        render() {
            this.model.set("username", qt.safeText(this.client.name), {
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
            this.update().catch(this.caughtError), le(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
        },
        showTwitchBroadcasterDialog(t) {
            let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
            e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), Ot.show("custom", {
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
            const n = le(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (le(this.activeScreen).fadeOut("fast", () => {}), le(this.activeScreen).show(), le(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            Ot.vibrate()
        },
        onRoomWasDestroyed() {
            en.remove("roomCode"), en.remove("reconnect"), Ot.show("error", {
                titleText: "Disconnected",
                text: "Thanks for playing!",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onDisconnected() {
            Ot.show("error", {
                titleText: "Disconnected",
                text: "You have been disconnected.",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onConnectionMessage(t) {
            const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
            if (Ot.show("toast", {
                    text: e
                }), t.status === "connected") {
                const n = this.client.parseEntities();
                this.model.set(n)
            }
        },
        onResize() {
            const t = le("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? le("#slide-in-banner").outerHeight(!0) : 0,
                n = le(window).width(),
                i = le(window).height() - t;
            le(`.${this.getOption("appTag")}-page`).css("height", i - e), le(`.${this.getOption("appTag")}-page`).attr("height", i - e), le(`.${this.getOption("appTag")}-page`).css("top", t), le(`.${this.getOption("appTag")}-page`).css("width", n), le(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    BC = `<div id="controller" class="state-controller controller-content">
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
    $C = si.extend({
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
        template: nt.template('<span class="flex-item"></span>'),
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
    jC = Et.View.extend({
        className: "Lobby scrollable",
        template: nt.template(BC),
        model: new $C,
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
                    return t && !nt.isEmpty(t)
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
                model: new at.Model({})
            }), this.choicesListView = this.choicesListView || new fi, this.charactersListView = new Et.CollectionView({
                childView: FC,
                className: "charactersList",
                collection: new at.Collection
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
                        a = i && i.metadata ? qt.htmlUnescape(i.metadata.title) : null;
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
                e && e.error && this.lastUGCResultId !== e.id && (Ot.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(nt.map(t, e => {
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
            const i = le(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const a = await Ot.show("custom", {
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
                    } catch {} else if (i === "censorOptions") Ot.show("custom", {
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
                                    collection: new at.Collection
                                }),
                                f = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(v => ({
                                    action: "censorConfirm",
                                    html: v.name,
                                    key: v.id
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
            }) : i === "ugc" ? Ot.show("custom", {
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
                        collection: new at.Collection([])
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
                    })))), a.render(), le(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(a, "childview:button:activateContentId", e.activateContentId), e.listenTo(a, "childview:button:back", () => {
                        Ot.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            Ot.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            Ot.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), Ot.close())
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
    zC = `<div id="image" class="logo logo-image"></div>
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
        template: nt.template(zC),
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : le("<div />").text(t.text).html()
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
    HC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    WC = Et.View.extend({
        className: "playerTopBarView",
        template: nt.template(HC),
        model: new at.Model,
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
    qC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    XC = si.extend({
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
    YC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: nt.template(qC),
        model: new XC,
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
                    return t ? t.html ? t.html : le("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : le("<div />").text(t.text).html() : null
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
                model: new at.Model
            }), this.choicesList = this.choicesList || new fi({
                action: "choose",
                collection: new at.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && nt.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
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
            this.update(), Ot.vibrate()
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
                const f = this.choicesList.children.find(v => v.model.get("index") === a);
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
            KC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Hs(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hs = function(e) {
        return typeof e
    } : Hs = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Hs(t)
}

function KC(t, e, n) {
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

function JC(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function QC(t, e) {
    if (t == null) return {};
    var n = JC(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ZC = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    uc = ii(/firefox/i),
    ss = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    Qu = ii(/iP(ad|od|hone)/i),
    Zu = ii(/chrome/i) && ii(/android/i),
    eh = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && eh)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !oi && eh)
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

function ex(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = ex(t))
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

function th(t, e, n) {
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

function jn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, v, _, S, I, D, $;
        if (t !== window && t.parentNode && t !== jn() ? (f = t.getBoundingClientRect(), v = f.top, _ = f.left, S = f.bottom, I = f.right, D = f.height, $ = f.width) : (v = 0, _ = 0, S = window.innerHeight, I = window.innerWidth, D = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    v -= J.top + parseInt(tt(a, "border-top-width")), _ -= J.left + parseInt(tt(a, "border-left-width")), S = v + f.height, I = _ + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = pr(a || t),
                Y = ie && ie.a,
                re = ie && ie.d;
            ie && (v /= re, _ /= Y, $ /= Y, D /= re, S = v + D, I = _ + $)
        }
        return {
            top: v,
            left: _,
            bottom: S,
            right: I,
            width: $,
            height: D
        }
    }
}

function dc(t, e, n) {
    for (var i = di(t, !0), a = Kt(t)[e]; i;) {
        var f = Kt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = a >= f : v = a <= f, !v) return i;
        if (i === jn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== Qe.ghost && (i || v[f] !== Qe.dragged) && $n(v[f], n.draggable, t, !1)) {
            if (a === e) return v[f];
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
        i = jn();
    if (t)
        do {
            var a = pr(t),
                f = a.a,
                v = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * v
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function tx(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return jn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = tt(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return jn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return jn()
}

function nx(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ha(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var os;

function nh(t, e) {
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

function ix() {
    clearTimeout(os), os = void 0
}

function ih(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function rh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var _n = "Sortable" + new Date().getTime();

function rx() {
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
                            var v = pr(a, !0);
                            v && (f.top -= v.f, f.left -= v.e)
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
            t.splice(tx(t, {
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
                v = 0;
            t.forEach(function(_) {
                var S = 0,
                    I = _.target,
                    D = I.fromRect,
                    $ = Kt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    Y = _.rect,
                    re = pr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ha(J, $) && !ha(D, $) && (Y.top - $.top) / (Y.left - $.left) === (D.top - $.top) / (D.left - $.left) && (S = ox(Y, J, ie, a.options)), ha($, D) || (I.prevFromRect = D, I.prevToRect = $, S || (S = a.options.animation), a.animate(I, Y, $, S)), S && (f = !0, v = Math.max(v, S), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, S), I.thisAnimationDuration = S)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, v) {
            if (v) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var _ = pr(this.el),
                    S = _ && _.a,
                    I = _ && _.d,
                    D = (a.left - f.left) / (S || 1),
                    $ = (a.top - f.top) / (I || 1);
                i.animatingX = !!D, i.animatingY = !!$, tt(i, "transform", "translate3d(" + D + "px," + $ + "px,0)"), this.forRepaintDummy = sx(i), tt(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, v)
            }
        }
    }
}

function sx(t) {
    return t.offsetWidth
}

function ox(t, e, n, i) {
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
            rr.forEach(function(v) {
                !n[v.pluginName] || (n[v.pluginName][f] && n[v.pluginName][f](zn({
                    sortable: n
                }, i)), n.options[v.pluginName] && n[v.pluginName][e] && n[v.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            rr.forEach(function(_) {
                var S = _.pluginName;
                if (!(!e.options[S] && !_.initializeByDefault)) {
                    var I = new _(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[S] = I, ri(i, I.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var v = this.modifyOption(e, f, e.options[f]);
                    typeof v < "u" && (e.options[f] = v)
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

function ax(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        v = t.toEl,
        _ = t.fromEl,
        S = t.oldIndex,
        I = t.newIndex,
        D = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        Y = t.extraEventProperties;
    if (e = e || n && n[_n], !!e) {
        var re, m = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = _ || n, re.item = a || n, re.clone = f, re.oldIndex = S, re.newIndex = I, re.oldDraggableIndex = D, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var W = zn(zn({}, Y), ps.getEventProperties(i, e));
        for (var ae in W) re[ae] = W[ae];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var lx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = QC(i, lx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Ii,
            lastDownEl: Ws,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: tn,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: kn,
            newDraggableIndex: ci,
            hideGhostForTarget: lh,
            unhideGhostForTarget: ch,
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
    ax(zn({
        putSortable: tn,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: kn,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Ii, Ws, Vt, ui, cr, kn, as, ci, $s, tn, lr = !1,
    io = !1,
    ro = [],
    Ai, Ln, fa, pa, pc, gc, Qr, sr, ls, cs = !1,
    Fs = !1,
    qs, ln, ga = [],
    Da = !1,
    so = [],
    wo = typeof document < "u",
    js = Qu,
    mc = fs || oi ? "cssFloat" : "float",
    cx = wo && !Zu && !Qu && "draggable" in document.createElement("div"),
    sh = function() {
        if (!!wo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    oh = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = yr(e, 0, n),
            v = yr(e, 1, n),
            _ = f && tt(f),
            S = v && tt(v),
            I = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Kt(f).width,
            D = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Kt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && _.float && _.float !== "none") {
            var $ = _.float === "left" ? "left" : "right";
            return v && (S.clear === "both" || S.clear === $) ? "vertical" : "horizontal"
        }
        return f && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || I >= a && i[mc] === "none" || v && i[mc] === "none" && I + D > a) ? "vertical" : "horizontal"
    },
    ux = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            S = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === _ || f === S || a + v / 2 === _ + I / 2
    },
    hx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var f = a[_n].options.emptyInsertThreshold;
            if (!(!f || ul(a))) {
                var v = Kt(a),
                    _ = e >= v.left - f && e <= v.right + f,
                    S = n >= v.top - f && n <= v.bottom + f;
                if (_ && S) return i = a
            }
        }), i
    },
    ah = function(e) {
        function n(f, v) {
            return function(_, S, I, D) {
                var $ = _.options.group.name && S.options.group.name && _.options.group.name === S.options.group.name;
                if (f == null && (v || $)) return !0;
                if (f == null || f === !1) return !1;
                if (v && f === "clone") return f;
                if (typeof f == "function") return n(f(_, S, I, D), v)(_, S, I, D);
                var J = (v ? _ : S).options.group.name;
                return f === !0 || typeof f == "string" && f === J || f.join && f.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Hs(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    lh = function() {
        !sh && ut && tt(ut, "display", "none")
    },
    ch = function() {
        !sh && ut && tt(ut, "display", "")
    };
wo && !Zu && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Oi = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = hx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[_n]._onDragOver(i)
            }
        }
    },
    dx = function(e) {
        Ie && Ie.parentNode[_n]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = ri({}, e), t[_n] = this;
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
            return oh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(v, _) {
            v.setData("Text", _.textContent)
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
    ah(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : cx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, rx())
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
                v = e.type,
                _ = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                S = (_ || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || S,
                D = a.filter;
            if (bx(i), !Ie && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ss && S && S.tagName.toUpperCase() === "SELECT") && (S = $n(S, a.draggable, i, !1), !(S && S.animated) && Ws !== S)) {
                if (cr = On(S), as = On(S, a.draggable), typeof D == "function") {
                    if (D.call(this, e, S, this)) {
                        gn({
                            sortable: n,
                            rootEl: I,
                            name: "filter",
                            targetEl: S,
                            toEl: i,
                            fromEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function($) {
                        if ($ = $n(I, $.trim(), i, !1), $) return gn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: S,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), D)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !$n(I, a.handle, i, !1) || this._prepareDragStart(e, _, S)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            v = a.options,
            _ = f.ownerDocument,
            S;
        if (i && !Ie && i.parentNode === f) {
            var I = Kt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Ii = Ie.nextSibling, Ws = i, $s = v.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, pc = Ai.clientX - I.left, gc = Ai.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", S = function() {
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
                    }), En(Ie, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(D) {
                    th(Ie, D.trim(), ma)
                }), xt(_, "dragover", Oi), xt(_, "mousemove", Oi), xt(_, "touchmove", Oi), xt(_, "mouseup", a._onDrop), xt(_, "touchend", a._onDrop), xt(_, "touchcancel", a._onDrop), uc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(_, "mouseup", a._disableDelayedDrag), xt(_, "touchend", a._disableDelayedDrag), xt(_, "touchcancel", a._disableDelayedDrag), xt(_, "mousemove", a._delayedDragTouchMoveHandler), xt(_, "touchmove", a._delayedDragTouchMoveHandler), v.supportPointer && xt(_, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(S, v.delay)
            } else S()
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
            }), this.nativeDraggable && xt(document, "dragover", dx);
            var i = this.options;
            !e && En(Ie, i.dragClass, !1), En(Ie, i.ghostClass, !0), Qe.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Ln) {
            this._lastX = Ln.clientX, this._lastY = Ln.clientY, lh();
            for (var e = document.elementFromPoint(Ln.clientX, Ln.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Ln.clientX, Ln.clientY), e !== n);) n = e;
            if (Ie.parentNode[_n]._isOutsideThisEl(e), n)
                do {
                    if (n[_n]) {
                        var i = void 0;
                        if (i = n[_n]._onDragOver({
                                clientX: Ln.clientX,
                                clientY: Ln.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            ch()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && pr(ut, !0),
                _ = ut && v && v.a,
                S = ut && v && v.d,
                I = js && ln && fc(ln),
                D = (f.clientX - Ai.clientX + a.x) / (_ || 1) + (I ? I[0] - ga[0] : 0) / (_ || 1),
                $ = (f.clientY - Ai.clientY + a.y) / (S || 1) + (I ? I[1] - ga[1] : 0) / (S || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += D - (fa || 0), v.f += $ - (pa || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: $
                };
                var J = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                tt(ut, "webkitTransform", J), tt(ut, "mozTransform", J), tt(ut, "msTransform", J), tt(ut, "transform", J), fa = D, pa = $, Ln = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Kt(Ie, !0, js, !0, e),
                i = this.options;
            if (js) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = jn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = jn(), ga = fc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", js ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", pc / parseInt(ut.style.width) * 100 + "% " + gc / parseInt(ut.style.height) * 100 + "%")
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
        wn("setupClone", this), Qe.eventCanceled || (Vt = rh(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, v, _ = this.options,
            S = _.group,
            I = Qe.active,
            D = $s === S,
            $ = _.sort,
            J = tn || I,
            ie, Y = this,
            re = !1;
        if (Da) return;

        function m(we, he) {
            wn(we, Y, zn({
                evt: e,
                isOwner: D,
                axis: ie ? "vertical" : "horizontal",
                revert: v,
                dragRect: a,
                targetRect: f,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: W,
                onMove: function(Te, $e) {
                    return zs(Pt, n, Ie, a, Te, Kt(Te), e, $e)
                },
                changed: ae
            }, he))
        }

        function P() {
            m("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== J && J.captureAnimationState()
        }

        function W(we) {
            return m("dragOverCompleted", {
                insertion: we
            }), we && (D ? I._hideClone() : I._showClone(Y), Y !== J && (En(Ie, tn ? tn.options.ghostClass : I.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), tn !== Y && Y !== Qe.active ? tn = Y : Y === Qe.active && tn && (tn = null), J === Y && (Y._ignoreWhileAnimating = i), Y.animateAll(function() {
                m("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null
            }), Y !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[_n]._isOutsideThisEl(e.target), !we && Oi(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            kn = On(Ie), ci = On(Ie, _.draggable), gn({
                sortable: Y,
                name: "change",
                toEl: n,
                newIndex: kn,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, _.draggable, n, !0), m("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || Y._ignoreWhileAnimating === i) return W(!1);
        if (io = !1, I && !_.disabled && (D ? $ || (v = $t !== Pt) : tn === this || (this.lastPutMode = $s.checkPull(this, I, Ie, e)) && S.checkPut(this, I, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Kt(Ie), m("dragOverValid"), Qe.eventCanceled) return re;
            if (v) return $t = Pt, P(), this._hideClone(), m("revert"), Qe.eventCanceled || (Ii ? Pt.insertBefore(Ie, Ii) : Pt.appendChild(Ie)), W(!0);
            var se = ul(n, _.draggable);
            if (!se || mx(e, ie, this) && !se.animated) {
                if (se === Ie) return W(!1);
                if (se && n === e.target && (i = se), i && (f = Kt(i)), zs(Pt, n, Ie, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, ae(), W(!0)
            } else if (se && gx(e, ie, this)) {
                var ye = yr(n, 0, _, !0);
                if (ye === Ie) return W(!1);
                if (i = ye, f = Kt(i), zs(Pt, n, Ie, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ye), $t = n, ae(), W(!0)
            } else if (i.parentNode === n) {
                f = Kt(i);
                var d = 0,
                    ke, Oe = Ie.parentNode !== n,
                    Pe = !ux(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Be = dc(i, "top", "top") || dc(Ie, "top", "top"),
                    K = Be ? Be.scrollTop : void 0;
                sr !== i && (ke = f[lt], cs = !1, Fs = !Pe && _.invertSwap || Oe), d = vx(e, i, f, ie, Pe ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, Fs, sr === i);
                var je;
                if (d !== 0) {
                    var U = On(Ie);
                    do U -= d, je = $t.children[U]; while (je && (tt(je, "display") === "none" || je === ut))
                }
                if (d === 0 || je === i) return W(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    Ae = !1;
                Ae = d === 1;
                var be = zs(Pt, n, Ie, a, i, f, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), Da = !0, setTimeout(px, 30), P(), Ae && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? oe : i), Be && ih(Be, 0, K - Be.scrollTop), $t = Ie.parentNode, ke !== void 0 && !Fs && (qs = Math.abs(ke - Kt(i)[lt])), ae(), W(!0)
            }
            if (n.contains(Ie)) return W(!1)
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
        if (kn = On(Ie), ci = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), $t = Ie && Ie.parentNode, kn = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, Fs = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ma(this.cloneId), Ma(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || tn && tn.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: $t,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== $t ? (kn >= 0 && (gn({
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
        })), tn && tn.save()) : kn !== cr && kn >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((kn == null || kn === -1) && (kn = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = $t = ut = Ii = Vt = Ws = ui = Ai = Ln = Qr = kn = ci = cr = as = sr = ls = tn = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
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
                Ie && (this._onDragOver(e), fx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, v = this.options; a < f; a++) n = i[a], $n(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || wx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, v) {
            var _ = a.children[v];
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
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && ah(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[_n] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
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

function fx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, f, v, _) {
    var S, I = t[_n],
        D = I.options.onMove,
        $;
    return window.CustomEvent && !oi && !fs ? S = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent("move", !0, !0)), S.to = e, S.from = t, S.dragged = n, S.draggedRect = i, S.related = a || e, S.relatedRect = f || Kt(e), S.willInsertAfter = _, S.originalEvent = v, t.dispatchEvent(S), D && ($ = D.call(I, S, v)), $
}

function ma(t) {
    t.draggable = !1
}

function px() {
    Da = !1
}

function gx(t, e, n) {
    var i = Kt(yr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function mx(t, e, n) {
    var i = Kt(ul(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function vx(t, e, n, i, a, f, v, _) {
    var S = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        D = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!v) {
        if (_ && qs < I * a) {
            if (!cs && (ls === 1 ? S > D + I * f / 2 : S < $ - I * f / 2) && (cs = !0), cs) J = !0;
            else if (ls === 1 ? S < D + qs : S > $ - qs) return -ls
        } else if (S > D + I * (1 - a) / 2 && S < $ - I * (1 - a) / 2) return yx(e)
    }
    return J = J || v, J && (S < D + I * f / 2 || S > $ - I * f / 2) ? S > D + I / 2 ? 1 : -1 : 0
}

function yx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function wx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function bx(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Xs(t) {
    return setTimeout(t, 0)
}

function Ma(t) {
    return clearTimeout(t)
}
wo && xt(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: wt,
    css: tt,
    find: th,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: nx,
    throttle: nh,
    closest: $n,
    toggleClass: En,
    clone: rh,
    index: On,
    nextTick: Xs,
    cancelNextTick: Ma,
    detectDirection: oh,
    getChild: yr
};
Qe.get = function(t) {
    return t[_n]
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
Qe.version = ZC;
var Wt = [],
    Zr, La, Pa = !1,
    va, ya, oo, es;

function Cx() {
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
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), vc(), Ys(), ix()
        },
        nulling: function() {
            oo = La = Zr = Pa = es = va = ya = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(f, v);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                wa(n, this.options, _, i);
                var S = di(_, !0);
                Pa && (!es || f !== va || v !== ya) && (es && vc(), es = setInterval(function() {
                    var I = di(document.elementFromPoint(f, v), !0);
                    I !== S && (S = I, Ys()), wa(n, a.options, I, i)
                }, 10), va = f, ya = v)
            } else {
                if (!this.options.bubbleScroll || di(_, !0) === jn()) {
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
var wa = nh(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                _ = e.scrollSpeed,
                S = jn(),
                I = !1,
                D;
            La !== n && (La = n, Ys(), Zr = e.scroll, D = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var $ = 0,
                J = Zr;
            do {
                var ie = J,
                    Y = Kt(ie),
                    re = Y.top,
                    m = Y.bottom,
                    P = Y.left,
                    W = Y.right,
                    ae = Y.width,
                    se = Y.height,
                    ye = void 0,
                    d = void 0,
                    ke = ie.scrollWidth,
                    Oe = ie.scrollHeight,
                    Pe = tt(ie),
                    lt = ie.scrollLeft,
                    Be = ie.scrollTop;
                ie === S ? (ye = ae < ke && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = ae < ke && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var K = ye && (Math.abs(W - a) <= v && lt + ae < ke) - (Math.abs(P - a) <= v && !!lt),
                    je = d && (Math.abs(m - f) <= v && Be + se < Oe) - (Math.abs(re - f) <= v && !!Be);
                if (!Wt[$])
                    for (var U = 0; U <= $; U++) Wt[U] || (Wt[U] = {});
                (Wt[$].vx != K || Wt[$].vy != je || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = K, Wt[$].vy = je, clearInterval(Wt[$].pid), (K != 0 || je != 0) && (I = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * _ : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * _ : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[_n], Ae, oe, t, oo, Wt[this.layer].el) !== "continue" || ih(Wt[this.layer].el, Ae, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== S && (J = di(J, !1)));
            Pa = I
        }
    }, 30),
    uh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            v = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            S = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || f;
            _();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(D.clientX, D.clientY);
            S(), I && !I.el.contains($) && (v("spill"), this.onSpill({
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
    drop: uh
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
    drop: uh
};
ri(dl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Cx);
Qe.mount(dl, hl);
const xx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Ex = si.extend({
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
    kx = Et.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: nt.template("<div class='text'></div>"),
        model: new at.Model({}),
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
        childView: kx,
        collection: new at.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    _x = Et.View.extend({
        className: "SorterView",
        template: nt.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new at.Model({
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
                collection: new at.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new yc({
                className: "sortable-collection unranked",
                collection: new at.Collection([])
            }), this.lockInView = this.lockInView || new qu({
                block: !1,
                model: new at.Model({
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
    Sx = Et.View.extend({
        className: "Sortable scrollable",
        template: nt.template(xx),
        model: new Ex,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new at.Model
            }), this.sorterView = this.sorterView || new _x({}), this.listenTo(this.model, "change", this.update, this)
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
    Tx = `<div id="controller" class="state-controller controller-content">
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
    Ax = si.extend({
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
    Ox = Et.View.extend({
        className: "UGC scrollable",
        template: nt.template(Tx),
        model: new Ax,
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
                model: new at.Model
            }), this.episodesList = this.episodesList || new fi({
                action: "load",
                collection: new at.Collection
            }), this.inputComponent = this.inputComponent || new to({
                model: new at.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new to({
                model: new at.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new fi({
                action: "remove",
                collection: new at.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), Ot.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = qt.htmlUnescape(n.metadata.title);
                let a = qt.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = nt.extend({}, n);
                i.text = qt.htmlUnescape(n.text);
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
            const e = le(t.currentTarget).data("action");
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
    Rx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    Ix = Et.View.extend({
        className: "RadialView",
        template: nt.template(Rx),
        model: new at.Model({
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
            const t = nt.extend({}, this.model.get("vector"));
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
    Dx = `<div id="status-bar" class="health text">\r
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
    Lx = Et.View.extend({
        model: new Mx,
        template: nt.template(Dx),
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
            this.client = t.client, this.radialComponent = new Ix({
                model: new at.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = nt.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), le(window).on("mousemove", this.move.bind(this)), le(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), le(window).off("mousemove"), le(window).off("mouseup")
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
                }), this.throttledUpdate = nt.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
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
                    Ot.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), Ot.vibrate()
        },
        onResize() {
            const t = le(".radial"),
                e = le("#status-bar").outerHeight() + le(".playerTopBar").outerHeight() + le("#control-panel").outerHeight() + 10,
                n = le(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    Px = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
    template: nt.template(Px),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new WC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new at.Model({});
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
                return this.setLayout(LC);
            case "EnterSingleText":
                return this.setLayout(VC);
            case "Lobby":
                return this.setLayout(jC);
            case "Logo":
                return this.setLayout(UC);
            case "MakeSingleChoice":
                return this.setLayout(YC);
            case "Shoot":
                return this.setLayout(Lx);
            case "Sortable":
                return this.setLayout(Sx);
            case "Camera":
                return this.setLayout(EC);
            case "UGC":
                return this.setLayout(Ox);
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
        t && !nt.isEmpty(t) ? i = {
            ...nt.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...nt.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...nt.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && en.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: nt.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Ni.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), le("#textDescriptions").append(le("<p />").text(e.text)))
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
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), Ot.show("custom", {
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
        const t = le(window).width(),
            e = le(window).height();
        le(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        en.remove("roomCode"), en.remove("reconnect"), Ot.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (Ot.show("toast", {
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
var hh = {
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

        function f(S, I) {
            for (var D = S.length; D--;)
                if (S[D].listener === I) return D;
            return -1
        }

        function v(S) {
            return function() {
                return this[S].apply(this, arguments)
            }
        }
        i.getListeners = function(I) {
            var D = this._getEvents(),
                $, J;
            if (I instanceof RegExp) {
                $ = {};
                for (J in D) D.hasOwnProperty(J) && I.test(J) && ($[J] = D[J])
            } else $ = D[I] || (D[I] = []);
            return $
        }, i.flattenListeners = function(I) {
            var D = [],
                $;
            for ($ = 0; $ < I.length; $ += 1) D.push(I[$].listener);
            return D
        }, i.getListenersAsObject = function(I) {
            var D = this.getListeners(I),
                $;
            return D instanceof Array && ($ = {}, $[I] = D), $ || D
        };

        function _(S) {
            return typeof S == "function" || S instanceof RegExp ? !0 : S && typeof S == "object" ? _(S.listener) : !1
        }
        i.addListener = function(I, D) {
            if (!_(D)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(I),
                J = typeof D == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && f($[ie], D) === -1 && $[ie].push(J ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = v("addListener"), i.addOnceListener = function(I, D) {
            return this.addListener(I, {
                listener: D,
                once: !0
            })
        }, i.once = v("addOnceListener"), i.defineEvent = function(I) {
            return this.getListeners(I), this
        }, i.defineEvents = function(I) {
            for (var D = 0; D < I.length; D += 1) this.defineEvent(I[D]);
            return this
        }, i.removeListener = function(I, D) {
            var $ = this.getListenersAsObject(I),
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = f($[ie], D), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = v("removeListener"), i.addListeners = function(I, D) {
            return this.manipulateListeners(!1, I, D)
        }, i.removeListeners = function(I, D) {
            return this.manipulateListeners(!0, I, D)
        }, i.manipulateListeners = function(I, D, $) {
            var J, ie, Y = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (J in D) D.hasOwnProperty(J) && (ie = D[J]) && (typeof ie == "function" ? Y.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) Y.call(this, D, $[J]);
            return this
        }, i.removeEvent = function(I) {
            var D = typeof I,
                $ = this._getEvents(),
                J;
            if (D === "string") delete $[I];
            else if (I instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && I.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = v("removeEvent"), i.emitEvent = function(I, D) {
            var $ = this.getListenersAsObject(I),
                J, ie, Y, re, m;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), Y = 0; Y < J.length; Y++) ie = J[Y], ie.once === !0 && this.removeListener(I, ie.listener), m = ie.listener.apply(this, D || []), m === this._getOnceReturnValue() && this.removeListener(I, ie.listener);
            return this
        }, i.trigger = v("emitEvent"), i.emit = function(I) {
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
})(hh);
const Nx = hh.exports;
class Vx extends Nx {
    constructor(n, i) {
        super();
        ot(this, "wsClient");
        ot(this, "name");
        ot(this, "id");
        ot(this, "userId");
        ot(this, "uuid");
        ot(this, "joinAs", "player");
        ot(this, "room");
        ot(this, "roles", {});
        ot(this, "code", null);
        ot(this, "host");
        ot(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        ot(this, "parseEntities", () => {
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
        const i = Object.keys(this.roles);
        return !i.length && n === "audience" ? !0 : i.includes(n)
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
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
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
                const v = (f = (a = this.host) == null ? void 0 : a.id) != null ? f : "1";
                await this.wsClient.mail(v, i)
            } else await this.wsClient.send(n, i)
        } catch (v) {
            console.error(v)
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
const Bx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(le)
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
        caret: function(v, _) {
            var S;
            if (this.length !== 0 && !this.is(":hidden")) return typeof v == "number" ? (_ = typeof _ == "number" ? _ : v, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(v, _) : this.createTextRange && (S = this.createTextRange(), S.collapse(!0), S.moveEnd("character", _), S.moveStart("character", v), S.select())
            })) : (this[0].setSelectionRange ? (v = this[0].selectionStart, _ = this[0].selectionEnd) : document.selection && document.selection.createRange && (S = document.selection.createRange(), v = 0 - S.duplicate().moveStart("character", -1e5), _ = v + S.text.length), {
                begin: v,
                end: _
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(v, _) {
            var S, I, D, $, J, ie, Y, re;
            if (!v && this.length > 0) {
                S = t(this[0]);
                var m = S.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), I = t.mask.definitions, D = [], $ = Y = v.length, J = null, t.each(v.split(""), function(P, W) {
                W == "?" ? (Y--, $ = P) : I[W] ? (D.push(new RegExp(I[W])), J === null && (J = D.length - 1), $ > P && (ie = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (_.completed) {
                        for (var we = J; ie >= we; we++)
                            if (D[we] && oe[we] === W(we)) return;
                        _.completed.call(U)
                    }
                }

                function W(we) {
                    return _.placeholder.charAt(we < _.placeholder.length ? we : 0)
                }

                function ae(we) {
                    for (; ++we < Y && !D[we];);
                    return we
                }

                function se(we) {
                    for (; --we >= 0 && !D[we];);
                    return we
                }

                function ye(we, he) {
                    var _e, Te;
                    if (!(0 > we)) {
                        for (_e = we, Te = ae(he); Y > _e; _e++)
                            if (D[_e]) {
                                if (!(Y > Te && D[_e].test(oe[Te]))) break;
                                oe[_e] = oe[Te], oe[Te] = W(Te), Te = ae(Te)
                            } K(), U.caret(Math.max(J, we))
                    }
                }

                function d(we) {
                    var he, _e, Te, $e;
                    for (he = we, _e = W(we); Y > he; he++)
                        if (D[he]) {
                            if (Te = ae(he), $e = oe[he], oe[he] = _e, !(Y > Te && D[Te].test($e))) break;
                            _e = $e
                        }
                }

                function ke() {
                    var we = U.val(),
                        he = U.caret();
                    if (re && re.length && re.length > we.length) {
                        for (je(!0); he.begin > 0 && !D[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < J && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    } else {
                        for (je(!0); he.begin < Y && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    }
                    P()
                }

                function Oe() {
                    je(), U.val() != be && U.change()
                }

                function Pe(we) {
                    if (!U.prop("readonly")) {
                        var he, _e, Te, $e = we.which || we.keyCode;
                        re = U.val(), $e === 8 || $e === 46 || i && $e === 127 ? (he = U.caret(), _e = he.begin, Te = he.end, Te - _e === 0 && (_e = $e !== 46 ? se(_e) : Te = ae(_e - 1), Te = $e === 46 ? ae(Te) : Te), Be(_e, Te), ye(_e, Te - 1), we.preventDefault()) : $e === 13 ? Oe.call(this, we) : $e === 27 && (U.val(be), U.caret(0, je()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!U.prop("readonly")) {
                        var he, _e, Te, $e = we.which || we.keyCode,
                            Ke = U.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = ae(Ke.begin - 1), Y > he && (_e = String.fromCharCode($e), D[he].test(_e))) {
                                if (d(he), oe[he] = _e, K(), Te = ae(he), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, U, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else U.caret(Te);
                                Ke.begin <= ie && P()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function Be(we, he) {
                    var _e;
                    for (_e = we; he > _e && Y > _e; _e++) D[_e] && (oe[_e] = W(_e))
                }

                function K() {
                    U.val(oe.join(""))
                }

                function je(we) {
                    var he, _e, Te, $e = U.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; Y > he; he++)
                        if (D[he]) {
                            for (oe[he] = W(he); Te++ < $e.length;)
                                if (_e = $e.charAt(Te - 1), D[he].test(_e)) {
                                    oe[he] = _e, Ke = he;
                                    break
                                } if (Te > $e.length) {
                                Be(he + 1, Y);
                                break
                            }
                        } else oe[he] === $e.charAt(Te) && Te++, $ > he && (Ke = he);
                    return we ? K() : $ > Ke + 1 ? _.autoclear || oe.join("") === Ae ? (U.val() && U.val(""), Be(0, Y)) : K() : (K(), U.val(U.val().substring(0, Ke + 1))), $ ? he : J
                }
                var U = t(this),
                    oe = t.map(v.split(""), function(we, he) {
                        return we != "?" ? I[we] ? W(he) : we : void 0
                    }),
                    Ae = oe.join(""),
                    be = U.val();
                U.data(t.mask.dataName, function() {
                    return t.map(oe, function(we, he) {
                        return D[he] && we != W(he) ? we : null
                    }).join("")
                }), U.one("unmask", function() {
                    U.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!U.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        be = U.val(), we = je(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (K(), we == v.replace("?", "").length ? U.caret(0, we) : U.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var we = je(!0);
                        U.caret(we), P()
                    }, 0)
                }), a && f && U.off("input.mask").on("input.mask", ke), je()
            })
        }
    })
});
window.$ = le;
window.jQuery = le;
const $x = Et.View.extend({
        className: "app-root",
        template: nt.template(Bx),
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
                const i = new Vx(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new $x;
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
    jx = `<div id="page-fakinit" class="page">\r
    <link href='https://fonts.googleapis.com/css?family=Raleway:800' rel='stylesheet' type='text/css'>\r
    <template id="fakinit-vote-button">\r
        <div class="fakinit-button-group">\r
            <button type='button' data-index='{{ index }}' id='vote-button-{{index}}' class='fakinit-vote-button fakinit-censorable fakinit-button btn btn-lg playername button-send {{ selectedClass }} {{ disabledClass }}'>{{ name }}</button>\r
            {{# if (canCensor) { }}\r
                <button type="button" data-censor="{{ index }}" class="fakinit-censor-button fakinit-button btn btn-lg">X</button>\r
            {{# } }}\r
        </div>\r
    </template>\r
    <div id="player" class="fakinit-player fakinit-category-background">\r
        <h1 id="player-name"><%=username%></h1>\r
        <div class="fakinit-angle"></div>\r
    </div>\r
\r
    <div id="fakinit-preload" class="fakinit-preload"></div>\r
\r
    <div id="game" class="game pt-pageholder">\r
\r
        <div class="state-lobby pt-page-off fakinit-page fakinit-category-background">\r
            <div class="container">\r
                <div class="pure-u-1"></div>\r
\r
                <div id="lobby-main-menu">\r
                    <div class="fakinit-change-name-dialog">\r
                        <form class="fakinit-name-change-form" style="display:none;">\r
                            <div class="form-group">\r
                                <input type="input" class="form-control fakinit-input" id="fakinitNameChange" placeholder="name" maxLength=12>\r
                            </div>\r
                            <div class="row">\r
                                <div class="col-xs-12">\r
                                    <button id="fakinit-name-change-confirm" type="submit" class="fakinit-button fakinit-button-secondary pull-right">Submit</button>\r
                                    <button id="fakinit-name-change-cancel" class="fakinit-button fakinit-button-secondary pull-right">Cancel</button>\r
                                </div>\r
                            </div>\r
                        </form>\r
                        <p class="fakinit-name-change-button"><button id="fakinit-name-change" class="fakinit-button fakinit-button-secondary">Change name?</button></p>\r
                        <p><span class="fakinit-text fakinit-text-instruction fakinit-category-color">We recommend using your own name so people can easily identify you</span></p>\r
                    </div>\r
                    <form class="pure-form">\r
                        <button type="button" id="fakinit-startgame" class="fakinit-button btn btn-lg btn-block">EVERYBODY'S IN</button>\r
                        <button type="button" id="fakinit-stopcountdown" class="fakinit-button btn btn-lg btn-block">CANCEL</button>\r
                        <div style="margin-top:50px;"><p><span id="fakinit-lobby-text" class="fakinit-text fakinit-text-instruction fakinit-category-color"></span></p></div>\r
                        <button type="button" id="fakinit-sameplayers" class="fakinit-button btn btn-lg btn-block fakinit-endbuttons">SAME PLAYERS</button>\r
                        <button type="button" id="fakinit-newplayers" class="fakinit-button btn btn-lg btn-block fakinit-endbuttons">NEW PLAYERS</button>   \r
                    </form>\r
\r
                    <div class="pure-u-1"></div>\r
                    \r
                    <form class="pure-form">\r
                        <button type="button" id="fakinit-lobby-menu-censor" class="menu-button lobby-button fakinit-button button-xlarge pure-button pure-input-1">Censor Menu</button><br>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="state-nothing pt-page-off fakinit-page fakinit-logo-image">\r
        </div>\r
\r
        <div class="state-gameplay pt-page-off fakinit-page fakinit-category-background">\r
            <div>\r
                <div id="fakinit-instruction-box-gameplay" class="fakinit-instruction-box">\r
                    <div class='game-state'>\r
                        <p id='gameplay-category' class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p>\r
                    </div>\r
                    <p>\r
                        <span id='gameplay-task' class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span>\r
                    </p>\r
                </div>\r
                <div class='container fakinit-gameplay-sign fakinit-gameplay-ready'>\r
                    <p class="fakinit-text"><span id="press-instruction" class="fakinit-text-instruction">Press READY below when ready</span></p>\r
                    <button class='fakinit-ready-button fakinit-button btn btn-lg btn-block button-send'>READY</button>\r
                </div>\r
                \r
                <div class='fakinit-gameplay-sign fakinit-gameplay-yield'>\r
                </div>\r
                <div class='fakinit-gameplay-sign fakinit-gameplay-go'>\r
                    <img style='margin-left:auto; margin-right:auto;' id='go-img' class='pure-img' src='main/pp3/fakinit/fakinit/go_text.png'>\r
                </div>\r
                <div class='fakinit-gameplay-sign fakinit-gameplay-stop'>\r
                    <img style='margin-left:auto; margin-right:auto;' id='stop-img' class='pure-img' src='main/pp3/fakinit/fakinit/stop_text.png'>\r
                </div>\r
                <div class='fakinit-gameplay-sign fakinit-gameplay-input'>\r
                    <div class="container">\r
                        <form class="form-inline">\r
                            <div class="form-group" id="fakinit-input-text">\r
                                <input id='enteredText' value='' type='text' class='form-control fakinit-input input-lg' autocapitalize='off' autocorrect='off' autocomplete='off' maxlength='45' placeholder='enter text here'/>\r
                                <span id="fakinit-submit-alert" class="help-block fakinit-text fakinit-text-instruction" style="color:white;"></span>\r
                            </div>\r
                            <button id="input-send" type="submit" class='fakinit-button btn button-input'>SEND</button>\r
                        </form>\r
                    </div>\r
                </div>\r
\r
            </div>\r
        </div>\r
\r
        <div class="state-skip-instructions pt-page-off fakinit-page">\r
            <!-- <div style="height:100%;display:flex;flex-direction:column;"> -->\r
                <p><button class='fakinit-skip-button fakinit-button fakinit-button-secondary button-send'>SKIP</button></p>\r
                <div class="fakinit-text fakinit-category-color">\r
                    <p class="fakinit-text-instruction ">Press SKIP if everyone knows how to play</p>\r
                </div>\r
                <div class="fakinit-logo-image"></div>\r
            <!-- </div> -->\r
        </div>\r
\r
        <div class="state-categories pt-page-off fakinit-page">\r
            <div id="fakinit-instruction-box-categories" class="fakinit-instruction-box">\r
                <p id="category-title" class="fakinit-title fakinit-category-color">PICK A CATEGORY</p>\r
                <p><span id="category-text" class="fakinit-text fakinit-text-instruction fakinit-category-flavor">stuff stuff stuff stuff</span></p>\r
            </div>\r
            <div class="container">\r
                <div class="">\r
                    <form id="fakinit-category-form" class="pure-form"></form>\r
                </div>\r
                <div class="row button-container">\r
                    <div class="col-xs-12 button-fieldset">\r
                        <div class="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="state-notchoosing pt-page-off fakinit-page">\r
            <div id="fakinit-instruction-box-not-choosing" class="fakinit-instruction-box">\r
                <p><span id="notchoosing" class="fakinit-text fakinit-text-instruction"></span></p>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-round fakinit-page fakinit-category-background">\r
            <div class="round-main"><p class='round-text'></div>\r
        </div>\r
\r
        <div class="pt-page-off state-vote fakinit-page fakinit-category-background">\r
            <div id="fakinit-instruction-box-vote" class="fakinit-instruction-box">\r
                <p id="vote-category" class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p>\r
                <p><span id='vote-text' class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span></p>\r
            </div>\r
            <div id="fakinit-bar-vote" class="fakinit-bar fakinit-category-background-dark">\r
                <span id="fakinit-title-vote" class="fakinit-title fakinit-text-instruction">Who's the Faker?</span>\r
            </div>\r
            <div class="container">\r
                <div class="">\r
                    <form id="fakinit-vote-form" class="pure-form"></form>\r
                    <button id="fakinit-vote" class='fakinit-vote-lock fakinit-button fakinit-button-lock button-input'>\r
                    </button>\r
                    <p id="fakinit-vote-lock" class="fakinit-vote-lock"><span id="vote-lock-instruction" class="fakinit-text fakinit-text-instruction">LOCK IN VOTE</span></p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-vote-locked fakinit-page fakinit-category-background">\r
            <div id="fakinit-instruction-box-vote-locked" class="fakinit-instruction-box">\r
                <p id="vote-locked-category" class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p>\r
                <span id="vote-locked-text" class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span>\r
            </div>\r
            <div id="fakinit-bar-vote-locked" class="fakinit-bar fakinit-category-background-dark">\r
                <span id="fakinit-title-vote-locked" class="fakinit-title fakinit-text-instruction">Who's the Faker?</span>\r
            </div>\r
            <div class="container">\r
                <div>\r
                    <button id='fakinit-locked-player' disabled type='button' class='fakinit-vote-button fakinit-button playername btn btn-block button-send selected'>PLAYER</button>\r
                    <button id="fakinit-vote-locked" disabled class='fakinit-button fakinit-button-lock-invert button-input'>\r
                    </button>\r
                    <p class="fakinit-text"><span id="vote-locked-instruction" class="fakinit-text fakinit-text-instruction">You've locked in your vote!</span></p>\r
                    <p class="fakinit-text"><span id="vote-locked-waiting"class="fakinit-text fakinit-text-instruction">Waiting for other players</span></p>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;
const zx = lc.extend({
    template: nt.template(jx),
    testBlob: null,
    prevRoomState: "",
    prevPlayerState: "",
    doneAnswering: !1,
    categoryFlavor: ["it's fun", "do it", "we believe in you", "it's easy", "don't make everyone wait", "this is the easy part", "pretty please?", "it's important", "you can do it", "you have the power", "choose wisely", "it's your time to shine", "quickly", "be smart about it", "enjoy it", "it's your turn", "it's your duty"],
    events: {
        "click #fakinit-startgame": "startGame",
        "click #fakinit-stopcountdown": "stopCountdown",
        "click #fakinit-sameplayers": "newGameSamePlayers",
        "click #fakinit-newplayers": "newGameNewPlayers",
        "click .fakinit-category-button": "chooseCategory",
        "click .fakinit-skip-button": "sendSkip",
        "click .fakinit-ready-button": "sendReady",
        "click #input-send": "sendInput",
        "click .fakinit-vote-button": "chooseVote",
        "click #fakinit-vote": "lockVote",
        "click #fakinit-vote-lock": "lockVote",
        "click .fakinit-audience-vote-button": "chooseAudienceVote",
        "click #fakinit-name-change": "changeName",
        "click #fakinit-name-change-cancel": "changeNameCancel",
        "click #fakinit-name-change-confirm": "changeNameConfirm",
        "click .fakinit-censor-player-button": "censorPlayer",
        "click .fakinit-censor-button": "censor"
    },
    initialize(t) {
        lc.prototype.initialize.apply(this, [t]), le("input").bind("input propertychange", this.validateInput.bind(this))
    },
    renderTemplate(t, e) {
        const n = nt.templateSettings;
        nt.templateSettings = {
            evaluate: /\{\{#([\s\S]+?)\}\}/g,
            interpolate: /\{\{\{(\s*\w+?\s*)\}\}\}/g,
            escape: /\{\{(\s*\w+?\s*)\}\}(?!\})/g
        };
        const a = nt.template(t)(e);
        return nt.templateSettings = n, a
    },
    async update() {
        if (!this.model.get("room")) {
            this.showScreen(".state-nothing");
            return
        }
        const t = this.model.get("player");
        t !== void 0 && t.playerIndex !== void 0 && (le(".fakinit-player").addClass(t.shape), le("#player-name").html(t.displayName)), this.client.isRole("audience") ? this.updateAudience() : t && this.updatePlayer(), this.onResize()
    },
    updatePlayer() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = t ? t.state : "",
            i = e ? e.state : "";
        le("#player-name").html(t.playerName), le("#fakinit-submit-alert").hide();
        let a;
        if (i && i === "Lobby") {
            this.hideLobbyButtons(), this.setCategory(null), this.showScreen(".state-lobby");
            const f = e.lobbyState;
            if (f !== "PostGame" && f !== "PostGameCountdown" && le(".fakinit-change-name-dialog").show(), !t.isAllowedToStartGame) {
                le("#fakinit-lobby-text").html("Sit back and relax!"), this.showScreen(".state-lobby");
                return
            }
            f === "WaitingForMore" ? le("#fakinit-lobby-text").html("Waiting for all players to join") : f === "CanStart" ? (le("#fakinit-lobby-text").html("Press this button when everybody has joined"), le("#fakinit-startgame").show()) : f === "Countdown" || f === "PostGameCountdown" ? (le("#fakinit-lobby-text").html("Press this button to cancel game start"), le("#fakinit-stopcountdown").show()) : f === "PostGame" ? (le("#fakinit-lobby-text").html("What do you want to do?"), le(".fakinit-endbuttons").show()) : le("#fakinit-lobby-text").html("<br />Sit tight!<br>Waiting for the VIP to start")
        } else if (i === "Gameplay_EndGame") this.showScreen(".state-nothing");
        else if (i === "Logo") this.setCategory(e.category), this.showScreen(".state-nothing");
        else if (i === "Instructions") n && n.split("_")[1] === "Skip" ? this.showScreen(".state-skip-instructions") : this.showScreen(".state-nothing");
        else if (i === "Gameplay_CategorySelection")
            if (n === "Gameplay_CategorySelection") {
                if (t.isChoosing) {
                    let f = "";
                    for (a = 0; a < t.categories.length; a++) f += `<button class='fakinit-category-button fakinit-button btn btn-block button-send cat-${a}' data-params='${t.categories[a].type}'>${t.categories[a].name}</button>`;
                    le("#fakinit-category-form").html(f), le(".fakinit-category-flavor").html(this.categoryFlavor[Math.floor(Math.random() * this.categoryFlavor.length)]), this.showScreen(".state-categories")
                }
            } else le("#notchoosing").html(`${e.choosingPlayerName} is picking a category`), this.showScreen(".state-notchoosing");
        else if (i && i.split("_")[0] === "Gameplay") {
            const f = n.split("_")[1];
            f === "Input" && (e.category = "Text You Up"), this.setCategory(e.category), le(".fakinit-task").html(t.task), le(".fakinit-gameplay-sign").hide(), f === "Ready" ? (this.showScreen(".state-gameplay"), le(".fakinit-gameplay-ready").show()) : f === "Yield" ? this.showScreen(".state-gameplay") : f === "Go" ? (this.showScreen(".state-gameplay"), le(".fakinit-gameplay-go").show()) : f === "Stop" ? (this.showScreen(".state-gameplay"), le(".fakinit-gameplay-stop").show()) : f === "Input" ? (this.showScreen(".state-gameplay"), le(".fakinit-gameplay-input").show(), le("#enteredText").focus(), le("#enteredText").val("")) : f === "Waiting" ? this.showScreen(".state-nothing") : this.showScreen(".state-nothing")
        } else if (i === "Vote") {
            if (n.split("_")[1] === "Input" && (e.category = "Text You Up"), this.setCategory(e.category), le(".fakinit-task").html(t.task), !t.canCensor && n === "VoteLocked") {
                for (le("#vote-locked-text").html(e.task), a = 0; a < t.players.length; a++) {
                    const v = t.players[a];
                    t.vote !== void 0 && t.vote === v.index && le("#fakinit-locked-player").html(v.name)
                }
                this.showScreen(".state-vote-locked")
            } else if (n === "Vote" || n === "VoteLocked") {
                le("#vote-text").html(e.task);
                let v = "";
                for (a = 0; a < t.players.length; a++) {
                    const _ = t.players[a],
                        S = {
                            index: _.index,
                            selectedClass: t.vote !== void 0 && t.vote === _.index ? " selected " : "",
                            disabledClass: t.censorOnly ? "fakinit-disabled" : "",
                            name: _.name,
                            canCensor: t.canCensor
                        };
                    v += this.renderTemplate(this.$("#fakinit-vote-button").html(), S)
                }
                le("#fakinit-vote-form").html(v), t.censorOnly && le(".fakinit-vote-button").attr("disabled", "disabled"), le(".fakinit-vote-lock").hide(), t.showLock && le(".fakinit-vote-lock").show(), this.showScreen(".state-vote")
            }
        }
    },
    updateAudience() {
        const t = this.model.get("room"),
            e = t ? t.state : "";
        switch (t.state === "Gameplay_Input" && (t.category = "Text You Up"), this.setCategory(t.category), e) {
            case "Lobby":
                this.hideLobbyButtons(), le("#fakinit-lobby-text").html("Sit tight!<br>Waiting for the VIP to start"), this.showScreen(".state-lobby");
                break;
            case "Gameplay_Logo":
            case "Ready":
            case "Instructions":
                this.showScreen(".state-nothing");
                break;
            case "Gameplay_CategorySelection":
                le("#notchoosing").html(`${t.choosingPlayerName} is picking a category`), this.showScreen(".state-notchoosing");
                break;
            case "Gameplay":
            case "Gameplay_Go":
            case "Gameplay_Stop":
                le(".fakinit-category").html(t.category), le(".fakinit-task").html(t.task), le(".fakinit-gameplay-sign").hide(), this.showScreen(".state-gameplay");
                break;
            case "Gameplay_Input":
                t.category = "Text You Up", le(".fakinit-category").html(t.category), le(".fakinit-task").html("Sit Tight!<br>Players are answering"), le(".fakinit-gameplay-sign").hide(), this.showScreen(".state-gameplay");
                break;
            case "Vote": {
                le("#vote-text").html(t.task);
                let n = "";
                for (let i = 0; i < t.players.length; i++) {
                    const a = t.players[i];
                    n += `<button type='button' data-index='${a.index}' class='fakinit-audience-vote-button fakinit-button playername btn btn-block button-send'>${a.name}</button>`
                }
                le("#fakinit-vote-form").html(n), le(".fakinit-vote-lock").hide(), this.showScreen(".state-vote");
                break
            }
        }
    },
    hideLobbyButtons() {
        le("#fakinit-startgame").hide(), le("#fakinit-stopcountdown").hide(), le(".fakinit-endbuttons").hide(), le(".fakinit-change-name-dialog").hide(), le("#fakinit-lobby-menu-censor").hide()
    },
    setCategory(t) {
        if (le(".fakinit-category-background").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), le(".fakinit-category-background-dark").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), le(".fakinit-category-color").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), t) {
            le(".fakinit-category").html(t);
            const e = t.replace(/\s/g, "").toLowerCase();
            le(".fakinit-category-background").addClass(e), le(".fakinit-category-background-dark").addClass(e), le(".fakinit-category-color").addClass(e)
        }
    },
    startGame() {
        return this.client.send("SendMessageToRoomOwner", {
            start: !0
        }), !1
    },
    stopCountdown() {
        return this.client.send("SendMessageToRoomOwner", {
            cancel: !0
        }), !1
    },
    chooseCategory(t) {
        const e = le(t.target).data("params");
        return this.client.send("SendMessageToRoomOwner", {
            category: e
        }), !1
    },
    sendReady() {
        return this.client.send("SendMessageToRoomOwner", {
            ready: !0
        }), !1
    },
    sendSkip() {
        return this.client.send("SendMessageToRoomOwner", {
            skip: !0
        }), !1
    },
    sendInput() {
        const t = this.sanitize(le("#enteredText").val()).toUpperCase(),
            e = le("#fakinit-submit-alert");
        return e.hide(), t.length === 0 ? (e.html("You can't enter nothing!"), e.show(), !1) : (this.client.send("SendMessageToRoomOwner", {
            answer: !0,
            msg: t
        }), !1)
    },
    chooseVote(t) {
        const e = le(t.target).data("index");
        return this.client.send("SendMessageToRoomOwner", {
            vote: e
        }), !1
    },
    lockVote() {
        return this.client.send("SendMessageToRoomOwner", {
            lock: !0
        }), !1
    },
    chooseAudienceVote(t) {
        const e = le(t.target).data("index");
        return this.client.sessionSend("vote", "FakinIt Vote", {
            type: "vote",
            vote: e
        }), this.showScreen(".state-nothing"), !1
    },
    changeName() {
        return le(".fakinit-name-change-form").show(), le(".fakinit-name-change-button").hide(), !1
    },
    changeNameCancel() {
        return le("#fakinitNameChange").val(""), le(".fakinit-name-change-form").hide(), le(".fakinit-name-change-button").show(), !1
    },
    changeNameConfirm() {
        let t = le("#fakinitNameChange").val().toUpperCase();
        return t = t.substring(0, 12), t.length > 0 ? (le("#player-name").html(t), this.client.send("SendMessageToRoomOwner", {
            name: t
        }), le(".fakinit-name-change-form").hide(), le(".fakinit-name-change-button").show()) : alert("You have to enter something!"), !1
    },
    newGameSamePlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            start: !0,
            decision: "PostGame_Continue"
        }), !1
    },
    newGameNewPlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            start: !0,
            decision: "PostGame_NewGame"
        }), !1
    },
    censorPlayer(t) {
        if (!this.client.isRole("player")) return;
        const e = le(t.target);
        if (e.hasClass("fakinit-button-red")) {
            const n = qt.htmlUnescape(e.data("censor"));
            this.client.send("SendMessageToRoomOwner", {
                censorPlayerId: n
            })
        } else e.html("?"), e.addClass("fakinit-button-red")
    },
    censor(t) {
        if (!this.client.isRole("player")) return;
        const e = le(t.target);
        if (e.hasClass("fakinit-button-red")) {
            const n = qt.htmlUnescape(e.data("censor"));
            this.client.send("SendMessageToRoomOwner", {
                censor: n
            })
        } else e.html("?"), e.addClass("fakinit-button-red")
    },
    sanitize(t) {
        return t = this.sanitizeInput(t).replace(/'/g, "\u2019"), qt.htmlEscape(t).trim()
    },
    sanitizeInput(t) {
        return t = t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>:;]/gi, ""), t
    },
    validateInput(t) {
        const e = le(t.target);
        let n = e.val();
        const i = n.length,
            a = e.attr("maxLength");
        if (n = this.sanitizeInput(n), a)
            for (; n.length > a;) n = n.slice(0, -1);
        n.length !== i && e.val(n)
    }
});
Fx({
    MainView: zx
});
//# sourceMappingURL=50590e67.js.map